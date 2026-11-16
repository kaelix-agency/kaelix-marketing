#!/usr/bin/env node
/**
 * Page d'aperçu autonome d'un contenu en attente de relecture (rationnel §1.32).
 *
 * Transforme UNE page d'un site servi en local (le build de la branche de la PR) en un seul fichier HTML :
 * styles, polices et images embarqués, scripts retirés, bandeau « Aperçu avant publication ». Ce fichier se
 * publie tel quel en page privée claude.ai : c'est le lien « Aperçu : » du gate de relecture, lisible d'un
 * clic sur PC et téléphone, sans dépendre de l'aperçu Vercel.
 *
 * usage : node scripts/apercu-page.mjs --origin http://localhost:3055 --path /blog/<slug> --out /tmp/apercu-pr<n>.html
 *           --label "PR #<n>" --title "Aperçu — <titre> (PR #<n>)" [--site https://kaelix.fr] [--repo <dépôt du site>]
 *
 * Dépendance : `playwright` de ce dépôt (npm i), sinon `@playwright/test` du dépôt du site (--repo).
 * Navigateur : CHROMIUM_PATH, sinon /opt/pw-browsers/chromium, sinon celui de Playwright.
 * Sortie : une ligne JSON { out, bytes, unresolvedNextRefs } ; code 1 si la page ne répond pas 200.
 */
import { createRequire } from "node:module"
import { existsSync, writeFileSync } from "node:fs"

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, cur, i, all) => (cur.startsWith("--") ? [...acc, [cur.slice(2), all[i + 1]]] : acc), []),
)
for (const key of ["origin", "path", "out", "label", "title"]) {
  if (!args[key]) {
    console.error(`contrôle empêché : argument --${key} manquant`)
    process.exit(2)
  }
}
const site = args.site ?? "https://kaelix.fr"
let chromium
try {
  ;({ chromium } = await import("playwright"))
} catch {
  try {
    const require = createRequire(`${(args.repo ?? process.cwd()).replace(/\/$/, "")}/package.json`)
    ;({ chromium } = require("@playwright/test"))
  } catch {
    console.error("contrôle empêché : module `playwright` absent (npm i dans ce dépôt, ou --repo <dépôt du site>)")
    process.exit(2)
  }
}
const executablePath = process.env.CHROMIUM_PATH ?? (existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined)

const browser = await chromium.launch(executablePath ? { executablePath } : {})
const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce", locale: "fr-FR" })
const page = await context.newPage()
const response = await page.goto(args.origin + args.path, { waitUntil: "networkidle" })
if (!response || response.status() !== 200) {
  console.error(`contrôle empêché : la page répond ${response?.status()}`)
  await browser.close()
  process.exit(1)
}

// Walk the whole page so everything revealed on scroll and every lazy image is in its final state.
await page.evaluate(async () => {
  const step = Math.round(window.innerHeight * 0.6)
  for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 120))
  }
  window.scrollTo(0, 0)
  await new Promise((r) => setTimeout(r, 400))
})
await page.waitForLoadState("networkidle")

const html = await page.evaluate(
  async ({ origin, site, label }) => {
    const toDataUri = async (url) => {
      try {
        const res = await fetch(url)
        if (!res.ok) return null
        const blob = await res.blob()
        return await new Promise((resolve) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result)
          reader.onerror = () => resolve(null)
          reader.readAsDataURL(blob)
        })
      } catch {
        return null
      }
    }
    const inlineCssUrls = async (css, base) => {
      const found = [...css.matchAll(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g)]
      for (const match of found) {
        const raw = match[2]
        if (raw.startsWith("data:") || raw.startsWith("#")) continue
        const data = await toDataUri(new URL(raw, base).href)
        if (data) css = css.split(match[0]).join(`url("${data}")`)
      }
      return css
    }

    // 1. stylesheets → inline <style>
    for (const link of [...document.querySelectorAll('link[rel="stylesheet"]')]) {
      const res = await fetch(link.href)
      const style = document.createElement("style")
      style.textContent = await inlineCssUrls(await res.text(), link.href)
      link.replaceWith(style)
    }
    for (const style of [...document.querySelectorAll("style")]) {
      if (/url\(/.test(style.textContent)) style.textContent = await inlineCssUrls(style.textContent, location.href)
    }

    // 2. images → data URIs (the one the browser actually chose)
    for (const img of [...document.querySelectorAll("img")]) {
      const chosen = img.currentSrc || img.src
      if (chosen && !chosen.startsWith("data:")) {
        const data = await toDataUri(chosen)
        if (data) img.setAttribute("src", data)
      }
      img.removeAttribute("srcset")
      img.removeAttribute("sizes")
      img.removeAttribute("loading")
    }
    for (const source of [...document.querySelectorAll("picture source")]) source.remove()
    for (const el of [...document.querySelectorAll("[style*='url(']")]) {
      el.setAttribute("style", await inlineCssUrls(el.getAttribute("style"), location.href))
    }
    for (const video of [...document.querySelectorAll("video, iframe, object, embed")]) video.remove()

    // 3. nothing left that loads or runs
    for (const el of [...document.querySelectorAll("script, noscript, link[rel='preload'], link[rel='modulepreload'], link[rel='prefetch'], link[rel='icon'], link[rel='manifest'], link[rel='canonical'], link[rel='alternate'], link[rel='preconnect'], link[rel='dns-prefetch'], template, next-route-announcer")]) el.remove()
    for (const meta of [...document.querySelectorAll("meta[property^='og:'], meta[name^='twitter:'], meta[name='robots']")]) meta.remove()

    // 4. links point at the live site; forms do nothing
    for (const a of [...document.querySelectorAll("a[href]")]) {
      const href = a.getAttribute("href")
      if (href.startsWith("#")) continue
      if (href.startsWith("/") || href.startsWith(origin)) a.setAttribute("href", site + href.replace(origin, ""))
    }
    for (const form of [...document.querySelectorAll("form")]) form.setAttribute("onsubmit", "return false")

    // 5. the preview ribbon
    const ribbon = document.createElement("div")
    ribbon.setAttribute("data-preview-ribbon", "")
    ribbon.setAttribute(
      "style",
      "position:fixed;left:0;right:0;bottom:0;z-index:2147483647;background:#3D5BFF;color:#fff;font:600 13px/1.35 system-ui,sans-serif;padding:8px 14px;text-align:center",
    )
    ribbon.textContent = `Aperçu avant publication · ${label} · pas encore en ligne (menus et formulaires inactifs)`
    document.body.append(ribbon)
    document.body.style.paddingBottom = "44px"

    const robots = document.createElement("meta")
    robots.name = "robots"
    robots.content = "noindex"
    document.head.append(robots)
    return "<!DOCTYPE html>\n" + document.documentElement.outerHTML
  },
  { origin: args.origin, site, label: args.label },
)

const titled = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${args.title.replace(/[<&]/g, "")}</title>`)
writeFileSync(args.out, titled)
const left = (titled.match(/(src|href)="\/_next[^"]*"/g) ?? []).length
console.log(JSON.stringify({ out: args.out, bytes: Buffer.byteLength(titled), unresolvedNextRefs: left }))
await browser.close()
