# -*- coding: utf-8 -*-
"""Echo sample monthly operating report (lead-gen hook).

Generates a polished, ILLUSTRATIVE monthly CFO report for a fictional
cross-border hardware brand (US Delaware C-corp + Shenzhen operations) and
writes it to public/ so the website can offer it as a download.

English / Helvetica only (no CJK fonts, so no glyph issues).
Run: python3 scripts/make_sample_report.py
"""
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph,
                                Spacer, Table, TableStyle)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT

# ---- Echo brand palette (from tailwind.config.js) ----
NAVY  = colors.HexColor("#0d2b45")   # secondary
BLUE  = colors.HexColor("#2e8bc0")   # primary
AMBER = colors.HexColor("#f59e0b")   # accent
INK   = colors.HexColor("#1a1a1a")   # textDark
SEC   = colors.HexColor("#475569")   # textMedium
LIGHT = colors.HexColor("#6b7280")   # textLight
CARD  = colors.HexColor("#f8fafc")   # lightBg
HAIR  = colors.HexColor("#e5e7eb")   # borderLight
GREEN = colors.HexColor("#2e7d32")
RED   = colors.HexColor("#b23a32")
WHITE = colors.white
F, FB = "Helvetica", "Helvetica-Bold"

OUT = "/Users/arianapan/echointlmedica/public/sample-monthly-report.pdf"


def P(t, font=F, size=9.5, lead=13.5, color=INK, align=TA_LEFT, space=0):
    return Paragraph(t, ParagraphStyle("x", fontName=font, fontSize=size, leading=lead,
                     textColor=color, alignment=align, spaceAfter=space))


def money(x):
    s = f"${abs(x):,.0f}"
    return f"({s})" if x < 0 else s


def band(flow, W, bg, pads=(11, 11, 9, 10), border=None):
    t = Table([[flow]], colWidths=[W])
    style = [("BACKGROUND", (0, 0), (-1, -1), bg),
             ("LEFTPADDING", (0, 0), (-1, -1), pads[0]),
             ("RIGHTPADDING", (0, 0), (-1, -1), pads[1]),
             ("TOPPADDING", (0, 0), (-1, -1), pads[2]),
             ("BOTTOMPADDING", (0, 0), (-1, -1), pads[3])]
    if border:
        style.append(("LINEBEFORE", (0, 0), (0, 0), 2.6, border))
    t.setStyle(TableStyle(style))
    return t


story = []

# margins / width
LM = RM = 16 * mm
PAGE_W = letter[0]
W = PAGE_W - LM - RM

# ===== Masthead =====
story.append(P("ECHO INTERNATIONAL MEDICA &nbsp;&nbsp;|&nbsp;&nbsp; ILLUSTRATIVE SAMPLE",
               FB, 8, 11, BLUE))
story.append(Spacer(1, 5))
story.append(P("Monthly Operating Report", FB, 21, 24, NAVY))
story.append(Spacer(1, 2))
story.append(P("Lumen Audio, Inc. (fictional)  &nbsp;&middot;&nbsp;  June 2026  "
               "&nbsp;&middot;&nbsp;  US parent + Shenzhen operations", F, 10, 14, SEC))
story.append(Spacer(1, 7))
story.append(Table([[""]], colWidths=[W],
             style=[("LINEABOVE", (0, 0), (-1, -1), 1.0, HAIR)]))
story.append(Spacer(1, 9))

# ===== Founder summary band =====
summary = P(
    "<b>The one-minute version.</b> Revenue grew 14% to $182k on early holiday "
    "pre-orders, and gross margin held at 47%. You are still burning about "
    "$48k a month, so the business is not yet profitable. You have roughly "
    "<b>13 months of runway</b>. The number to watch is cash, not profit: a "
    "$58k factory balance is due July 10, which will temporarily pull US cash "
    "down before the next wholesale receivable lands.", F, 10.5, 15.5, WHITE)
story.append(band(summary, W, NAVY, pads=(13, 13, 11, 12)))
story.append(Spacer(1, 11))


# ===== Headline stat strip =====
def stat(val, lab, vc=NAVY):
    return P(f'<font face="{FB}" size="16" color="#{vc.hexval()[2:]}">{val}</font><br/>'
            f'<font face="{F}" size="7.5" color="#{LIGHT.hexval()[2:]}">{lab}</font>',
            F, 9, 18, align=TA_CENTER)


strip = Table([[stat("$611k", "CASH ON HAND"),
                stat("12.8 mo", "RUNWAY", BLUE),
                stat("$48.2k", "NET MONTHLY BURN", RED),
                stat("+14%", "REVENUE vs LAST MONTH", GREEN)]],
              colWidths=[W / 4.0] * 4)
strip.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), CARD),
    ("BOX", (0, 0), (-1, -1), 0.6, HAIR), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("LINEAFTER", (0, 0), (-2, -1), 0.6, HAIR),
    ("TOPPADDING", (0, 0), (-1, -1), 10), ("BOTTOMPADDING", (0, 0), (-1, -1), 10)]))
story.append(strip)
story.append(Spacer(1, 12))


# ===== Two tables: P&L + Cash/Runway =====
def section_label(t):
    return P(t, FB, 8.5, 12, BLUE)


def hrow(cells):
    return [P(c, FB, 8.5, 11, WHITE, TA_RIGHT if i else TA_LEFT) for i, c in enumerate(cells)]


def rrow(label, val, bold=False, color=INK):
    return [P(label, FB if bold else F, 9, 12.5, INK),
            P(val, FB if bold else F, 9, 12.5, color, TA_RIGHT)]


pl_data = [hrow(["Profit & Loss (USD)", "June"]),
           rrow("Revenue", "$182,400"),
           rrow("Cost of goods (Shenzhen)", money(-96_700), color=SEC),
           rrow("Gross profit (47% margin)", "$85,700", bold=True, color=GREEN),
           rrow("Payroll & contractors", money(-71_400), color=SEC),
           rrow("Marketing", money(-38_200), color=SEC),
           rrow("Other operating", money(-18_700), color=SEC),
           rrow("Net income", money(-42_600), bold=True, color=RED)]
pl = Table(pl_data, colWidths=[W * 0.5 * 0.66, W * 0.5 * 0.34])

cash_data = [hrow(["Cash & Runway", "USD"]),
             rrow("US account (USD)", "$470,000"),
             rrow("China account (RMB at 7.18)", "$141,000", color=SEC),
             rrow("Total cash", "$611,000", bold=True),
             rrow("In-transit inventory", "$73,000", color=SEC),
             rrow("Net burn (3-mo avg)", money(-48_200), color=RED),
             rrow("Implied runway", "12.8 months", bold=True, color=BLUE),
             rrow("FX on RMB this month", "+$2,100", color=GREEN)]
cash = Table(cash_data, colWidths=[W * 0.5 * 0.62, W * 0.5 * 0.38])


def style_table(t, hl_rows):
    s = [("BACKGROUND", (0, 0), (-1, 0), NAVY), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
         ("LEFTPADDING", (0, 0), (-1, -1), 7), ("RIGHTPADDING", (0, 0), (-1, -1), 7),
         ("TOPPADDING", (0, 0), (-1, -1), 4.2), ("BOTTOMPADDING", (0, 0), (-1, -1), 4.2),
         ("LINEBELOW", (0, 0), (-1, -1), 0.4, HAIR),
         ("BOX", (0, 0), (-1, -1), 0.6, HAIR)]
    for r in hl_rows:
        s.append(("BACKGROUND", (0, r), (-1, r), CARD))
    t.setStyle(TableStyle(s))


style_table(pl, [3, 7])
style_table(cash, [3, 6])

pair = Table([[pl, cash]], colWidths=[W * 0.5, W * 0.5])
pair.setStyle(TableStyle([("LEFTPADDING", (0, 0), (0, 0), 0), ("RIGHTPADDING", (0, 0), (0, 0), 7),
    ("LEFTPADDING", (1, 0), (1, 0), 7), ("RIGHTPADDING", (1, 0), (1, 0), 0),
    ("VALIGN", (0, 0), (-1, -1), "TOP")]))
story.append(pair)
story.append(Spacer(1, 12))

# ===== Cross-border cash callout =====
cb = P(
    "<b>Cross-border cash.</b> Cash is split across a US account ($470k) and a "
    "Shenzhen RMB account (about $141k at 7.18). The RMB balance is working "
    "capital for the factory, not free cash: moving it back to the US takes "
    "time and paperwork, so treat it as semi-trapped when you read runway. A "
    "stronger RMB this month added about $2,100 of translation gain, which is "
    "noise, not earnings. The real event is the $58k balance payment due "
    "July 10.", F, 9.5, 14.5, INK)
story.append(band(cb, W, CARD, pads=(12, 12, 10, 11), border=AMBER))
story.append(Spacer(1, 12))


# ===== What changed / What to watch =====
def bullet(t, dot=BLUE):
    return P(f'<font color="#{dot.hexval()[2:]}" size="8">&#9679;</font>&nbsp;&nbsp;{t}',
             F, 9, 13.5, INK, space=3)


changed = [section_label("WHAT CHANGED THIS MONTH"), Spacer(1, 5),
           bullet("Revenue up 14% on early holiday pre-orders."),
           bullet("COGS up: ocean freight spiked and the RMB strengthened."),
           bullet("Marketing ran $6k over budget to fund the pre-order push.")]
watch = [section_label("WHAT TO WATCH NEXT"), Spacer(1, 5),
         bullet("$58k factory balance due July 10 dips US cash.", AMBER),
         bullet("Q3 production deposit ($40k) lands in August.", AMBER),
         bullet("Runway is tight enough to start the next raise now.", AMBER)]
cols = Table([[changed, watch]], colWidths=[W * 0.5, W * 0.5])
cols.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("RIGHTPADDING", (0, 0), (0, 0), 10), ("LEFTPADDING", (1, 0), (1, 0), 10)]))
story.append(cols)
story.append(Spacer(1, 14))

# ===== Footer CTA band =====
cta = P("This is an illustrative sample of Echo&apos;s monthly report. We build "
        "yours from your real numbers, senior-reviewed. "
        "<b>Book a free finance review at echointlmedica.com.</b>",
        F, 9.5, 14, WHITE, TA_CENTER)
story.append(band(cta, W, BLUE, pads=(13, 13, 10, 11)))


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont(F, 7)
    canvas.setFillColor(LIGHT)
    canvas.drawString(LM, 9 * mm,
        "Illustrative sample. Management information, not an audit or tax opinion. "
        "Figures are fictional.")
    canvas.drawRightString(PAGE_W - RM, 9 * mm, "Echo International Medica")
    canvas.restoreState()


doc = BaseDocTemplate(OUT, pagesize=letter, leftMargin=LM, rightMargin=RM,
                      topMargin=15 * mm, bottomMargin=14 * mm)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates([PageTemplate(id="main", frames=[frame], onPage=footer)])
doc.build(story)
print("PDF ->", OUT)
