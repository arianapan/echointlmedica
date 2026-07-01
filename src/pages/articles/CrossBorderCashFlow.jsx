import ArticleLayout from './ArticleLayout';

const CrossBorderCashFlow = () => (
  <ArticleLayout
    category="Cross-Border Finance"
    title="Managing Cash Flow When Your Supplier Is in China"
    subtitle="Why a profitable hardware brand can still run out of cash, and how to forecast the gap between paying a Chinese factory and getting paid by US customers."
    readTime="8 min read"
    publishDate="June 2026"
    isoDate="2026-06-26"
    slug="cross-border-cash-flow-china-suppliers"
    heroGradient="from-secondary via-secondary/90 to-primary/70"
    ogImage="/articles/ai-advisory.jpg"
  >
    <p className="lede">
      On paper, the holiday quarter was the best in the company&apos;s history. Revenue up, gross margin healthy,
      the P&amp;L glowing. And yet, weeks before the goods even reached a US warehouse, the founder was staring at a
      bank balance sliding toward zero with a 70% balance payment due to a factory in China the next morning.
      Profitable on the income statement, broke in the bank. This is the most common way a growing hardware brand
      gets into trouble, and almost none of it shows up in the numbers founders are trained to watch.
    </p>

    <div className="stat-grid">
      <div className="stat-card">
        <span className="num">100 to 130</span>
        <span className="label">Days from PO deposit to customer cash (illustrative)</span>
      </div>
      <div className="stat-card">
        <span className="num">30%</span>
        <span className="label">Typical deposit due the day you sign a purchase order</span>
      </div>
      <div className="stat-card">
        <span className="num">60%+</span>
        <span className="label">Working capital that can sit in inventory and ocean transit</span>
      </div>
    </div>

    <h2>Profit is an opinion. Cash is a fact.</h2>
    <p>
      The income statement records a sale when you invoice and a cost when the matching goods are sold, neatly paired
      in the same period. The bank account does not work that way. You pay your factory months before you recognize a
      dollar of revenue, and your customers pay you weeks or months after. The distance between those two events,
      measured in days, is your <strong>cash conversion cycle</strong>. For a domestic software business it can be near
      zero or even negative. For a US brand that manufactures in China, it is routinely 100 to 130 days.
    </p>
    <p>
      The cycle is simple arithmetic: days your cash sits in inventory, plus days you wait to collect from customers,
      minus days of credit your suppliers extend you. The brutal part for China-made goods is that last term. A
      Chinese factory does not extend you credit; it demands cash up front. So the one line that normally shortens the
      cycle instead lengthens it, and the gap has to be funded by something: your own cash, a credit line, or a missed
      payroll. Most founders discover which one only when the balance payment hits.
    </p>

    <h2>A worked example: Coastline Audio</h2>
    <p>
      Consider a fictional brand we&apos;ll call <strong>Coastline Audio</strong>, a US company that designs portable
      speakers, builds them in China, and sells through a mix of its own website and a handful of national
      retailers. The numbers below are illustrative, but the shape is real and repeats across thousands of brands.
      Coastline starts the quarter with <strong>$260,000</strong> in the bank and places one large purchase order to
      cover the holiday season. The mechanics:
    </p>
    <ul>
      <li>A <strong>30% deposit ($90,000)</strong> is due the day the PO is signed.</li>
      <li>The factory runs <strong>30 days of production</strong>.</li>
      <li>The <strong>70% balance ($210,000)</strong> is due before the goods leave the port in China.</li>
      <li>Ocean transit to Los Angeles runs about <strong>2 to 4 weeks</strong> port to port, plus customs and drayage.</li>
      <li>Roughly <strong>$35,000</strong> in freight, duty, and drayage comes due when the container lands.</li>
      <li>Goods become sellable about <strong>10 weeks</strong> after the PO is placed.</li>
      <li>Direct-to-consumer orders pay immediately; retail buyers pay on <strong>net-60</strong> terms.</li>
    </ul>
    <p>
      The factory cost is $300,000, landed cost with freight is $335,000, and the PO eventually generates about
      $600,000 in blended revenue. By any measure this is a profitable order. Now watch the bank account. Coastline
      opens the quarter with $260,000 on hand.
    </p>

    <div className="table-wrap">
    <table className="data-table">
      <thead>
        <tr>
          <th>Week</th>
          <th>Event</th>
          <th>Cash out</th>
          <th>Cash in</th>
          <th>Running cash</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Week 0</td><td>Place holiday PO, pay 30% deposit</td><td>$90,000</td><td></td><td>$170,000</td></tr>
        <tr><td>Week 4</td><td>Production done, pay 70% balance before shipment</td><td>$210,000</td><td></td><td>($40,000)</td></tr>
        <tr><td>Weeks 4 to 9</td><td>In transit and customs, cash locked in goods</td><td></td><td></td><td>($40,000)</td></tr>
        <tr><td>Week 9</td><td>Container lands, pay freight, duty, drayage</td><td>$35,000</td><td></td><td>($75,000)</td></tr>
        <tr><td>Week 10</td><td>Goods finally sellable in US warehouse</td><td></td><td></td><td>($75,000)</td></tr>
        <tr><td>Week 12</td><td>DTC sales and early reorders collected</td><td></td><td>$80,000</td><td>$5,000</td></tr>
        <tr><td>Week 16</td><td>Wholesale net-60 invoices begin paying</td><td></td><td>$220,000</td><td>$225,000</td></tr>
        <tr><td>Week 20</td><td>Remaining receivables collected</td><td></td><td>$300,000</td><td>$525,000</td></tr>
      </tbody>
    </table>
    </div>

    <p>
      For roughly ten weeks, between the balance payment in Week 4 and the first real collections, Coastline is
      underwater. The trough is about <strong>($75,000)</strong> in Week 9, the moment the container lands and freight
      and duty come due while not a single unit has sold. Nothing is wrong with the business. The order is profitable,
      the product sells, the customers pay. Coastline simply has to finance about $335,000 of cash out before $600,000
      of cash in arrives, and the two events are 20 weeks apart. Without a credit line or a cushion sized to that
      trough, a profitable PO becomes a missed payroll.
    </p>

    <h2>Why the gap is structural</h2>

    <h3>1. Suppliers want cash, not credit</h3>
    <p>
      A domestic supplier might give you net-30. A Chinese factory you have worked with for two years often gives you
      net-zero: 30% on the PO, 70% before the goods ship. To the factory this is rational. They are funding raw
      materials and labor for a customer an ocean away, and cross-border trade credit is expensive and slow to
      enforce. The result is that the line item which usually helps your cash cycle works against you. You are, in
      effect, lending the factory money for the entire production and shipping window.
    </p>

    <h3>2. Inventory you have paid for but cannot touch</h3>
    <p>
      The moment you pay the balance, you own a container of speakers sitting on a ship in the Pacific. That inventory
      is on your balance sheet and out of your bank account, yet it cannot be sold, easily pledged, or returned. Ocean
      freight from South China to the US West Coast typically runs about 2 to 4 weeks port to port, roughly 15 to 25 days
      on a direct service, and longer to the East Coast or during congestion, when transit can stretch past 30 days. Add
      customs clearance and inland drayage and you can have six figures of cash locked in goods you cannot sell for the
      better part of two months.
    </p>

    <h3>3. Customers pay on their schedule, not yours</h3>
    <p>
      Direct-to-consumer softens this: a website order pays the day it ships. But the moment a brand lands national
      retail, the terms invert. Retailers and distributors commonly pay on net-30 to net-60, and the largest pay even
      slower. So the channel that scales your revenue also stretches your cash cycle. A brand that is 80% wholesale has
      a fundamentally harder cash problem than one that is 80% DTC, at the same revenue and the same margin.
    </p>

    <h3>4. FX timing sits on top of all of it</h3>
    <p>
      If your factory quotes in RMB, the dollar cost of that 70% balance is not fixed when you sign the PO. It is fixed
      when you actually convert and pay, weeks later. A 2 to 3% move in USD against RMB between order and payment is
      ordinary, and on a $210,000 balance that is $4,000 to $6,000 you never budgeted. The exposure is small per order
      and large across a year, and it is almost never modeled by founders who treat the factory price as a fixed dollar
      number.
    </p>

    <h2>The financing gap is a set of levers, not a fixed cost</h2>
    <p>
      The peak cash need is not destiny. Each move below shrinks the trough Coastline has to fund. The figures are
      illustrative, but the direction is reliable, and they compound.
    </p>

    <div className="bar-chart">
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">Baseline: 30/70 terms, net-60 wholesale</span><span className="bar-value">$335K</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '100%' }} /></div>
      </div>
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">Move balance to net-30 after shipment</span><span className="bar-value">$250K</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '75%' }} /></div>
      </div>
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">Add inventory financing on landed goods</span><span className="bar-value">$160K</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '48%' }} /></div>
      </div>
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">Tighten receivables, stagger the PO</span><span className="bar-value">$110K</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '33%' }} /></div>
      </div>
    </div>

    <p>
      The point is not that any one lever is magic. It is that the $335,000 peak cash need a founder treats as fixed is
      actually the sum of choices about terms, financing, channel, and timing, most of which are negotiable if you see
      them early enough.
    </p>

    <h2>Forecasting the gap: the 13-week cash flow</h2>
    <p>
      The tool that turns this from a recurring surprise into a managed number is a rolling <strong>13-week cash-flow
      forecast</strong>: a week-by-week projection of every dollar in and out for the next quarter, rebuilt every week.
      It is the standard instrument treasury and turnaround teams use, and it is exactly the right resolution for a
      cross-border supply chain, because the events that move your cash (a balance payment, a container landing, a
      retailer&apos;s net-60 check) happen on weekly, not monthly, boundaries. A monthly model hides the Week 9 trough
      inside an averaged month that looks fine.
    </p>
    <p>For a brand that manufactures in China, the forecast has to model, to the week:</p>
    <ol>
      <li>Every open PO by expected production-complete date, with deposit and balance payments scheduled to the week they fall due.</li>
      <li>Freight, duty, and drayage timed to expected landing, not to the order date.</li>
      <li>Sell-through and collections split by channel, with realistic net terms for wholesale rather than wishful ones.</li>
      <li>FX conversion events, at the rate you have actually locked or a conservative assumption if you have not.</li>
      <li>Payroll, ad spend, and fixed opex, which do not pause while your cash is on a boat.</li>
      <li>Credit-line draws and repayments, so you can see which week you need to borrow and which week you can pay it back.</li>
    </ol>
    <p>
      When all of that sits in one weekly view, the Week 9 trough stops being a surprise. You see it eight weeks out,
      and you have eight weeks to do something about it.
    </p>

    <div className="callout">
      <span className="callout-label">How Echo helps</span>
      <p className="mb-0">
        Echo builds and maintains a live 13-week cross-border cash-flow forecast for founders who manufacture overseas.
        It ties every PO deposit, balance payment, freight bill, and FX conversion to the week it actually hits, layers
        in channel-level collections, and rolls the whole thing into a runway model you and your board can read at a
        glance. The crunch that used to arrive the morning a balance payment was due becomes visible eight to twelve
        weeks ahead, while you still have room to renegotiate terms, stagger a PO, or draw a line. The AI does the
        weekly rebuild and the scenario math; a senior advisor pressure-tests the assumptions before they reach your
        board.
      </p>
    </div>

    <h2>Concrete moves that shrink the trough</h2>
    <ul>
      <li>
        <strong>Negotiate the deposit and balance.</strong> Moving from 30/70 due before shipment to 20/80 with the
        balance on net-30 after shipment can pull tens of thousands of dollars of cash need out by a full month.
        Suppliers will not volunteer this; you have to ask, and a record of on-time payment is your leverage.
      </li>
      <li>
        <strong>Finance the inventory, not the loss.</strong> Purchase-order and inventory lines exist precisely for
        this gap. They are not cheap, but a line that costs 1 to 2% a month across a ten-week trough is far cheaper
        than discounting product, missing a season, or selling equity to cover working capital.
      </li>
      <li>
        <strong>Stagger the POs.</strong> One giant seasonal order creates one giant trough. Splitting it into two or
        three smaller orders, where lead times allow, flattens the cash curve and lowers the risk of overbuying a
        season that disappoints.
      </li>
      <li>
        <strong>Price the cash cost of wholesale.</strong> Every incremental point of DTC versus net-60 wholesale
        shortens your cash cycle. That is not a reason to avoid retail; it is a reason to fold the cash cost of slow
        terms into the margin you are willing to accept.
      </li>
      <li>
        <strong>Lock the FX you can.</strong> If the factory quotes RMB, a simple forward contract on the balance
        payment removes the currency guess from your forecast. You are buying certainty, not betting on the rate.
      </li>
      <li>
        <strong>Time the PO to the forecast, not the calendar.</strong> Placing an order a few weeks earlier or later
        can move a balance payment out of a week that already carries payroll and a marketing push. The 13-week view
        tells you which weeks have room.
      </li>
    </ul>

    <blockquote>
      A profitable purchase order can still bankrupt you. The income statement tells you whether the order was a good
      idea. Only the cash-flow forecast tells you whether you will survive placing it.
    </blockquote>

    <h2>The bottom line</h2>
    <p>
      Manufacturing in China is, for most hardware and consumer brands, the right call. The cost and the capability are
      real. But it buys you a cash conversion cycle that domestic or print-on-demand competitors never face, and the
      income statement says nothing about it. The brands that scale through the gap are not the ones with the fattest
      margins. They are the ones that always know, to the week, how deep the next trough is and exactly how they intend
      to fund it.
    </p>
    <p>
      Profit pays for the business eventually. Cash pays for it on Friday. Build the forecast that tells you the
      difference, and the season that should have been your best stops being the one that nearly ends you.
    </p>

    <div className="sources">
      <h4>Sources &amp; References</h4>
      <ol>
        <li>Richards, V.D. and Laughlin, E.J. &quot;A Cash Conversion Cycle Approach to Liquidity Analysis.&quot; <em>Financial Management</em>, 9, no. 1 (1980): 32 to 38. (Foundational definition of the cash conversion cycle.)</li>
        <li>Brealey, R., Myers, S., and Allen, F. <em>Principles of Corporate Finance.</em> McGraw-Hill. (Working-capital management and the distinction between accrual profit and cash flow.)</li>
        <li>International Chamber of Commerce. <em>Incoterms 2020.</em> (Cross-border shipping and risk-transfer terms. Specific deposit and balance splits vary by supplier and are illustrative here.)</li>
        <li>Drewry and Freightos. Container transit-time and rate indices. (Typical South China to US West Coast ocean transit of roughly 2 to 4 weeks port to port, longer during congestion and peak season.)</li>
        <li>Association for Financial Professionals (AFP) and turnaround-management practice. (The rolling 13-week cash-flow forecast as a standard liquidity-management tool.)</li>
        <li>Echo International Medica practitioner observations from cross-border working-capital advisory. All Coastline Audio figures are fictional and illustrative.</li>
      </ol>
    </div>
  </ArticleLayout>
);

export default CrossBorderCashFlow;
