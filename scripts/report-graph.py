# Graphique d'évolution GSC du rapport mensuel (panneaux impressions + clics).
# ⚠️ Données à ACTUALISER à chaque rapport : fenêtres 28 j relevées dans les revues
# hebdo (reports/*-revue-hebdo.md) + la fenêtre du rapport précédent, étiquetées par
# date de FIN de fenêtre. Invariant 8 : GSC uniquement. Utilisé par la tâche cloud.
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from datetime import date

INK = "#1b2430"      # texte principal
MUTED = "#5d6b7a"    # texte secondaire
GRID = "#d8dee6"     # grille discrète
NAVY = "#1f3a5f"     # série (marque)

ends = [date(2026, 9, 1), date(2026, 9, 5), date(2026, 9, 12),
        date(2026, 9, 19), date(2026, 10, 3), date(2026, 10, 10)]
imprs = [668, 1142, 1439, 1539, 1869, 2109]
clics = [20, 20, 27, 34, 43, 40]

def fr(n):
    return f"{n:,}".replace(",", " ")

fig, axes = plt.subplots(1, 2, figsize=(6.85, 2.35), dpi=200)
fig.subplots_adjust(left=0.065, right=0.985, top=0.80, bottom=0.17, wspace=0.20)

for ax, ys, title, ymax in (
    (axes[0], imprs, "Affichages de vos pages dans Google", 2400),
    (axes[1], clics, "Clics vers le site", 52),
):
    ax.plot(ends, ys, color=NAVY, linewidth=2, zorder=3,
            marker="o", markersize=4.5, markerfacecolor=NAVY, markeredgecolor="white",
            markeredgewidth=0.8)
    ax.set_ylim(0, ymax)
    ax.set_xlim(date(2026, 8, 29), date(2026, 10, 14))
    # grille horizontale discrète, cadre allégé
    ax.grid(axis="y", color=GRID, linewidth=0.7, zorder=0)
    for side in ("top", "right", "left"):
        ax.spines[side].set_visible(False)
    ax.spines["bottom"].set_color(GRID)
    ax.tick_params(axis="both", length=0, labelsize=7.2, colors=MUTED)
    ax.xaxis.set_major_locator(mdates.DayLocator(bymonthday=(1, 15)))
    ax.xaxis.set_major_formatter(mdates.DateFormatter("%d/%m"))
    ax.set_yticks([0, ymax // 2, ymax] if ys is clics else [0, 800, 1600, 2400])
    ax.yaxis.set_major_formatter(lambda v, _: fr(int(v)))
    ax.set_title(title, fontsize=8.6, color=INK, loc="left", pad=8, fontweight="bold")
    # libellés directs : premier et dernier points seulement
    ax.annotate(fr(ys[0]), (ends[0], ys[0]), textcoords="offset points",
                xytext=(0, 7), ha="center", fontsize=7.4, color=MUTED)
    ax.annotate(fr(ys[-1]), (ends[-1], ys[-1]), textcoords="offset points",
                xytext=(2, 7), ha="right", fontsize=7.8, color=INK, fontweight="bold")

out = "/home/claude/kaelix-agency/kaelix-marketing/clients/transports-ansquer/reports/2026-09-rapport-client-graph.png"
fig.savefig(out, facecolor="white")
print(out)
