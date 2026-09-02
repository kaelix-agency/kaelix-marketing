# =============================================================================
# KAELIX - wrapper des routines planifiees (weekly lundi / report le 1er)
# Rationnel : docs/rationnel-des-choix.md 1.22.
# NB : fichier volontairement en ASCII pur (PowerShell 5.1 + encodages = parse
# errors sur les accents ; les emojis des titres sont construits par code).
#
# GARDE-FOUS ABSOLUS (par construction) :
#   - la session headless n'a PAS le droit de merger une PR ni d'emettre un
#     rapport : --allowedTools est une liste blanche sans `gh pr merge`,
#     sans action GBP, sans rien d'irreversible ;
#   - les livrables sortent en statut brouillon ; le gate humain (lecture,
#     validation, merge, emission) reste 100 % operateur ;
#   - la notification est une issue GitHub, fermee par l'operateur apres gate.
#
# Usage : powershell -NoProfile -ExecutionPolicy Bypass -File scripts\run-scheduled.ps1 -Mission weekly|report|test
# =============================================================================
param(
  [Parameter(Mandatory = $true)][ValidateSet("weekly", "report", "test")]
  [string]$Mission
)

$ErrorActionPreference = "Continue"
# cd EN DUR : le cwd qui charge .mcp.json, commands et skills (lecon des sessions mal ancrees).
$Repo = "D:\Users\Axel\KAELIX\Kealix SEo by Miki\kaelix-marketing"
$TimeoutSec = 1800   # 30 min par client
$Today = Get-Date -Format "yyyy-MM-dd"
$LogDir = Join-Path $Repo "logs"
$LogFile = Join-Path $LogDir "$Today-$Mission.log"

# Emojis (hors litteraux pour rester en ASCII)
$EmClipboard = [char]::ConvertFromUtf32(0x1F4CB)  # clipboard
$EmPage      = [char]::ConvertFromUtf32(0x1F4C4)  # page
$EmClock     = [char]::ConvertFromUtf32(0x1F552)  # horloge (statut brouillon)

function Log([string]$msg) {
  $line = "[{0}] {1}" -f (Get-Date -Format "HH:mm:ss"), $msg
  Write-Host $line
  Add-Content -Path $LogFile -Value $line -Encoding utf8
}

if (-not (Test-Path $Repo)) { Write-Host "FATAL: repo introuvable: $Repo"; exit 1 }
Set-Location $Repo
if (-not (Test-Path $LogDir)) { New-Item -ItemType Directory -Path $LogDir | Out-Null }
Log "=== Mission '$Mission' - demarrage (repo: $Repo) ==="

# --- Jeton GitHub : gestionnaire d'identifiants Git (gh n'est pas connecte sur ce poste)
function Get-GhToken {
  $out = "protocol=https`nhost=github.com`n`n" | git credential fill 2>$null
  $line = $out | Where-Object { $_ -like "password=*" } | Select-Object -First 1
  if ($line) { return $line.Substring(9) } else { return $null }
}

# --- git pull d'abord : la session part toujours de l'etat distant
git pull -q origin main 2>&1 | ForEach-Object { Log "git pull: $_" }
if ($LASTEXITCODE -ne 0) { Log "ERREUR: git pull a echoue - mission interrompue (jamais de travail sur un repo desynchronise)"; exit 1 }

# --- Liste blanche d'outils de la session headless (JAMAIS de merge, JAMAIS d'emission)
$Allowed = @(
  "Read", "Glob", "Grep", "Edit", "Write",
  "Bash(git status:*)", "Bash(git log:*)", "Bash(git diff:*)", "Bash(git add:*)",
  "Bash(git commit:*)", "Bash(git push:*)", "Bash(git pull:*)",
  "Bash(node scripts/generate-report-pdf.mjs:*)", "Bash(npm run report:pdf:*)",
  "Bash(curl:*)", "Bash(ls:*)", "Bash(cat:*)",
  "mcp__haloscan__*", "mcp__cuik__*"
) -join ","

# --- Mission TEST : diagnostic PASS/FAIL, ne genere rien -------------------------------
if ($Mission -eq "test") {
  $script:fail = 0
  function Check([string]$name, [bool]$ok, [string]$detail) {
    $s = "FAIL"; if ($ok) { $s = "PASS" } else { $script:fail++ }
    Log ("TEST {0,-28} {1}  {2}" -f $name, $s, $detail)
  }
  Check "cd repo" (Test-Path (Join-Path $Repo ".mcp.json")) $Repo
  Check "ecriture log" (Test-Path $LogFile) $LogFile
  $cv = ""; try { $cv = (& claude --version) 2>&1 | Select-Object -First 1 } catch {}
  Check "claude CLI" ([bool]$cv) "$cv"
  $mcp = ""; try { $mcp = (& claude mcp list) 2>&1 | Out-String } catch {}
  Check "MCP haloscan" ($mcp -match "haloscan.*Connected") ".mcp.json + enabledMcpjsonServers"
  Check "MCP cuik" ($mcp -match "cuik.*Connected") ".mcp.json + enabledMcpjsonServers"
  $tok = Get-GhToken
  $ghOk = $false; $login = ""
  if ($tok) { $env:GH_TOKEN = $tok; try { $login = (& gh api user -q .login) 2>&1; $ghOk = ($LASTEXITCODE -eq 0) } catch {}; Remove-Item Env:GH_TOKEN -ErrorAction SilentlyContinue }
  Check "gh (jeton credential mgr)" $ghOk "login: $login"
  $p = Start-Process -FilePath "claude" -ArgumentList @('-p', '"Reponds exactement: PONG"', '--max-turns', '1') -WorkingDirectory $Repo -NoNewWindow -PassThru -RedirectStandardOutput "$LogDir\test-pong.out" -RedirectStandardError "$LogDir\test-pong.err"
  $done = $p.WaitForExit(240000); if (-not $done) { $p.Kill() }
  $pong = ""; if (Test-Path "$LogDir\test-pong.out") { $pong = Get-Content "$LogDir\test-pong.out" -Raw }
  Check "claude -p headless" ($done -and $pong -match "PONG") ("sortie: " + ($pong.Trim() -replace "`r?`n", " "))
  Log ("=== Diagnostic termine : {0} echec(s) ===" -f $script:fail)
  if ($script:fail -gt 0) { exit 1 } else { exit 0 }
}

# --- Missions reelles : une session claude -p par client -------------------------------
$IsoWeek = [System.Globalization.ISOWeek]::GetWeekOfYear((Get-Date))
$MonthLabel = (Get-Date).AddDays(-3).ToString("yyyy-MM")   # le 1er, le rapport couvre le mois qui vient de finir
$tok = Get-GhToken
if (-not $tok) { Log "AVERTISSEMENT: jeton GitHub introuvable - les notifications par issue echoueront" }

$clients = Get-ChildItem -Path (Join-Path $Repo "clients") -Directory | Where-Object { $_.Name -ne "_template" }
foreach ($c in $clients) {
  $slug = $c.Name
  if ($Mission -eq "weekly") {
    $prompt = "/weekly-review $slug"
    $title = "$EmClipboard Weekly S$IsoWeek prete a valider - $slug"
    $expect = Join-Path $c.FullName "reports\$Today-revue-hebdo.md"
  } else {
    $prompt = "/report $slug $MonthLabel"
    $title = "$EmPage Rapport $MonthLabel en brouillon - $slug"
    $expect = Join-Path $c.FullName "reports\$MonthLabel-rapport-client.md"
  }
  Log "--- Client '$slug' : claude -p `"$prompt`" (timeout ${TimeoutSec}s) ---"
  $out = Join-Path $LogDir "$Today-$Mission-$slug.out"
  $err = Join-Path $LogDir "$Today-$Mission-$slug.err"
  $p = Start-Process -FilePath "claude" -WorkingDirectory $Repo -NoNewWindow -PassThru `
    -RedirectStandardOutput $out -RedirectStandardError $err `
    -ArgumentList @('-p', ('"' + $prompt + '"'), '--allowedTools', ('"' + $Allowed + '"'), '--max-turns', '80')
  $done = $p.WaitForExit($TimeoutSec * 1000)
  if (-not $done) { $p.Kill(); Log "TIMEOUT ($slug) apres ${TimeoutSec}s - session tuee, voir $out"; continue }
  Log "claude termine ($slug), code $($p.ExitCode)"

  # Verifier que le brouillon existe et que le push a eu lieu (sinon pousser nous-memes)
  if (-not (Test-Path $expect)) { Log "ERREUR ($slug): livrable attendu absent: $expect - pas de notification"; continue }
  git push -q origin main 2>&1 | ForEach-Object { Log "git push: $_" }
  $ahead = git rev-list --count origin/main..HEAD 2>$null
  Log "etat push: $ahead commit(s) local(aux) non pousses"

  # Notification : issue GitHub = l'essentiel + lien fichier
  if ($tok) {
    $rel = $expect.Substring($Repo.Length + 1) -replace "\\", "/"
    $link = "https://github.com/kaelix-agency/kaelix-marketing/blob/main/$rel"
    $head = (Get-Content $expect -Encoding utf8 -TotalCount 40 | Where-Object { $_ -match "\S" } | Select-Object -First 14) -join "`n"
    $nl = "`n"
    $body = "Brouillon $EmClock genere automatiquement le $Today - **a lire, valider, puis fermer cette issue**.$nl$nl" +
            "Fichier : $link$nl$nl---$nl$head$nl---$nl" +
            "*Garde-fous : la tache planifiee ne merge rien, n'emet rien ; gate humain intact.*"
    $env:GH_TOKEN = $tok
    $bodyFile = Join-Path $LogDir "issue-body-$slug.md"
    Set-Content -Path $bodyFile -Value $body -Encoding utf8
    & gh issue create --repo kaelix-agency/kaelix-marketing --title $title --body-file $bodyFile 2>&1 | ForEach-Object { Log "gh issue: $_" }
    Remove-Item Env:GH_TOKEN -ErrorAction SilentlyContinue
  }
}
Log "=== Mission '$Mission' terminee ==="
