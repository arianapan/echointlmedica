# -*- coding: utf-8 -*-
"""Branded 1200x630 cover for the cross-border cash-flow article.

Matches the house style of the other article covers (navy, blue eyebrow,
giant amber stat, before/after pair, right-side data graphic, bottom title
bar). Renders a PDF; convert to JPG with qlmanage + sips (see build steps).
English / Helvetica only.
"""
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase.pdfmetrics import stringWidth

W, H = 1200, 630
OUT = "/private/tmp/claude-501/-Users-arianapan-echointlmedica/b2cf560c-9e10-40c6-9a5a-0cfa5ab2515c/scratchpad/cover.pdf"

NAVY   = HexColor("#0d2b45")
GLOWLT = HexColor("#1b466b")
GLOWDK = HexColor("#06131f")
BLUE   = HexColor("#6fa3cc")
BLUELT = HexColor("#7fb7d9")
AMBER  = HexColor("#f59e0b")
GRAY   = HexColor("#8aa0b4")
GRAYLT = HexColor("#b9c6d4")

c = canvas.Canvas(OUT, pagesize=(W, H))

# ---- background: navy base + corner glows for depth ----
c.setFillColor(NAVY); c.rect(0, 0, W, H, fill=1, stroke=0)
c.saveState()
c.setFillColor(GLOWLT); c.setFillAlpha(0.45)
c.ellipse(-360, 180, 760, 900, fill=1, stroke=0)     # top-left light glow
c.setFillColor(GLOWDK); c.setFillAlpha(0.55)
c.ellipse(560, -420, 1500, 360, fill=1, stroke=0)    # bottom-right darken
c.restoreState()

# ---- faint diagonal texture ----
c.saveState()
c.setStrokeColor(white); c.setStrokeAlpha(0.022); c.setLineWidth(1)
x = -H
while x < W:
    c.line(x, 0, x + H, H); x += 26
c.restoreState()


def text(x, y, s, font="Helvetica", size=12, color=white, cs=0, align="l"):
    w = stringWidth(s, font, size) + (cs * (len(s) - 1) if cs else 0)
    x0 = x - w if align == "r" else x
    t = c.beginText(x0, y)
    t.setFont(font, size)
    t.setFillColor(color)
    if cs:
        t.setCharSpace(cs)
    t.textLine(s)
    c.drawText(t)


# ---- eyebrow ----
c.setFillColor(BLUE); c.rect(64, 560, 40, 3, fill=1, stroke=0)
text(118, 555, "CROSS-BORDER FINANCE  ·  RESEARCH", "Helvetica-Bold", 15, BLUE, cs=3)

# ---- hero stat ----
text(58, 398, "$335K", "Helvetica-Bold", 150, AMBER)
text(64, 356, "of cash tied up before a customer pays", "Helvetica", 31, white)
text(66, 326, "ILLUSTRATIVE HARDWARE BRAND", "Helvetica", 14, GRAY, cs=2)

# ---- before / after ----
text(64, 150, "$260K", "Helvetica-Bold", 44, white)
text(66, 126, "START", "Helvetica", 13, GRAY, cs=2)
# amber arrow
c.saveState()
c.setStrokeColor(AMBER); c.setLineWidth(3); c.setLineCap(1)
ax0, ax1, ay = 232, 292, 166
c.line(ax0, ay, ax1, ay)
c.line(ax1 - 11, ay + 8, ax1, ay); c.line(ax1 - 11, ay - 8, ax1, ay)
c.restoreState()
text(320, 150, "($75K)", "Helvetica-Bold", 44, AMBER)
text(322, 126, "LOW POINT", "Helvetica", 13, GRAY, cs=2)

# ---- right-side running-cash curve ----
pts = [(0, 260), (2, 170), (4, -40), (6, -75), (8, -75), (10, 5), (13, 225), (16, 525)]
PX0, PX1, PY0, PY1 = 700, 1120, 212, 470
wmax, vmin, vmax = 16.0, -75.0, 525.0
def px(w): return PX0 + (w / wmax) * (PX1 - PX0)
def py(v): return PY0 + ((v - vmin) / (vmax - vmin)) * (PY1 - PY0)
zero_y = py(0)

text(706, 492, "RUNNING CASH  ·  WEEKS 0 TO 20", "Helvetica", 13, GRAY, cs=2)

# zero baseline (dashed)
c.saveState()
c.setStrokeColor(GRAYLT); c.setStrokeAlpha(0.4); c.setLineWidth(1); c.setDash(2, 5)
c.line(PX0, zero_y, PX1, zero_y); c.restoreState()
text(PX1, zero_y + 6, "$0", "Helvetica", 11, GRAY, align="r")

# line segments (amber below zero, blue above)
c.setLineWidth(3); c.setLineCap(1); c.setLineJoin(1)
for (w1, v1), (w2, v2) in zip(pts, pts[1:]):
    c.setStrokeColor(AMBER if min(v1, v2) < 0 else BLUELT)
    c.line(px(w1), py(v1), px(w2), py(v2))
# dots
for w, v in pts:
    c.setFillColor(AMBER if v < 0 else BLUELT)
    r = 5
    c.circle(px(w), py(v), r, fill=1, stroke=0)
# annotate trough + end
text(px(6) - 2, py(-75) - 20, "($75K)", "Helvetica-Bold", 13, AMBER)
text(px(16) - 4, py(525) - 2, "$525K", "Helvetica-Bold", 13, BLUELT, align="r")

# ---- bottom bar ----
c.saveState()
c.setStrokeColor(GRAYLT); c.setStrokeAlpha(0.18); c.setLineWidth(1)
c.line(64, 92, W - 64, 92); c.restoreState()
text(64, 56, "Managing Cash Flow When Your Supplier Is in China", "Helvetica", 18, GRAYLT)
text(W - 64, 56, "ECHO INTERNATIONAL MEDICA", "Helvetica-Bold", 15, GRAY, cs=2, align="r")

c.showPage(); c.save()
print("PDF ->", OUT)
