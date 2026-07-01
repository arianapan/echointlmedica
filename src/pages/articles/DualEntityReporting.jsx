import ArticleLayout from './ArticleLayout';

const DualEntityReporting = () => (
  <ArticleLayout
    category="Monthly Reporting"
    title="Monthly Reporting for a US-China Dual-Entity Company"
    subtitle="Two ledgers, two currencies, and intercompany transfers add up to numbers no one trusts. Here is how to consolidate them into one clean monthly picture."
    readTime="9 min read"
    publishDate="June 2026"
    isoDate="2026-06-24"
    slug="us-china-dual-entity-monthly-reporting"
    heroGradient="from-secondary via-secondary/90 to-primary/70"
    ogImage="/articles/ai-advisory.jpg"
  >
    <p className="lede">
      A US founder with a Delaware C-corp on one side and a China WFOE on the other does not have one company to
      report on. They have two: two sets of books, two currencies, cash moving between them, and a board that still
      expects one clean monthly picture. The space between those two ledgers is where cross-border numbers quietly stop
      adding up, and where a founder loses the confidence of the people who wrote the checks.
    </p>

    <div className="stat-grid">
      <div className="stat-card">
        <span className="num">2 ledgers</span>
        <span className="label">US parent and China sub, closed on one common date</span>
      </div>
      <div className="stat-card">
        <span className="num">2 FX rates</span>
        <span className="label">Average rate for the P&amp;L, period-end rate for the balance sheet</span>
      </div>
      <div className="stat-card">
        <span className="num">$120K</span>
        <span className="label">Phantom revenue one intercompany elimination removes in our example (illustrative)</span>
      </div>
    </div>

    <h2>Why two entities produce numbers no one trusts</h2>
    <p>
      The structure is familiar in hardware, biotech, and deep tech. The US parent, usually a Delaware C-corp, holds the
      IP, raises the capital, signs US customers, and reports to investors in dollars. The China entity, typically a
      wholly foreign-owned enterprise (WFOE) or a Hong Kong company, employs the local team and pays its costs in RMB.
      To move money from the side that raised it to the side that spends it, the parent funds the sub: as an
      intercompany service fee, an intercompany loan, or a capital contribution.
    </p>
    <p>Each of those mechanics creates a reporting trap:</p>
    <ul>
      <li>Two trial balances that close on different calendar days, because the China finance cadence rarely matches the US one.</li>
      <li>Two currencies, so nothing can simply be added together.</li>
      <li>Intercompany transfers and loans that appear on both sides of the group, inviting double-counting.</li>
      <li>FX rates picked ad hoc, whatever someone happened to see the day they built the report.</li>
      <li>No reconciliation step, so the parent&apos;s view of what it sent is never matched against the sub&apos;s view of what it received.</li>
    </ul>
    <p>
      Get one wrong and the consolidated number is off. Get several wrong and you are telling investors a story the
      books cannot support.
    </p>

    <h2>Functional currency vs reporting currency</h2>
    <p>
      You do not need to master ASC 830, the US GAAP standard for foreign currency, to run a clean monthly report. You
      need one distinction from it.
    </p>
    <p>
      Every entity has a <strong>functional currency</strong>: the currency of the primary economic environment in
      which it operates. A Shenzhen WFOE that pays salaries, rent, and vendors in RMB and earns its keep in RMB is
      RMB-functional. The consolidated group has a <strong>reporting (or presentation) currency</strong>, the currency
      you report to investors in, which for a US-parented company is the dollar. ASC 830 is the rulebook for getting
      from an RMB-functional entity to a USD-reported group.
    </p>
    <p>
      One caveat: functional currency is a determination, not an assumption. A pure pass-through WFOE that holds and
      spends USD with no real local economic life can be USD-functional, which switches the mechanics from translation
      to remeasurement. That call carries judgment and belongs with your accountant. Most founder-stage WFOEs that run a
      real local team are RMB-functional, the case we will follow.
    </p>

    <h2>Transaction FX and translation FX are not the same thing</h2>
    <p>
      This is the distinction that hides the most damage. Two completely different foreign-currency effects exist, and
      founders routinely let them blur into one &quot;FX&quot; line.
    </p>
    <p>
      <strong>Transaction FX</strong> is the gain or loss on a specific foreign-currency-denominated transaction or
      balance. If the WFOE holds a USD intercompany loan or pays a USD-priced invoice, the RMB value moves with the
      rate, and the gain or loss flows through net income. It is a real exposure tied to real cash.
    </p>
    <p>
      <strong>Translation FX</strong> is what happens when you express the whole RMB entity in dollars for
      consolidation. Under ASC 830, the sub&apos;s balance sheet translates at the period-end rate, its P&amp;L at the
      period&apos;s average rate, and equity at historical rates. Those rates do not agree, so a plug appears: the
      cumulative translation adjustment (CTA), which lands in other comprehensive income inside equity. It does not
      touch net income.
    </p>
    <p>
      Why this matters: transaction FX can quietly flatter or sink a month&apos;s profit, so it belongs in the operating
      conversation. Translation FX is a non-cash artifact of consolidation and should never be read as operating
      performance. Blur them and you either panic over an equity swing that means nothing for cash, or miss a real FX
      loss that does.
    </p>
    <p>
      A concrete, illustrative example: say the parent funded the WFOE with a $200,000 USD-denominated intercompany
      loan. On the WFOE&apos;s RMB books that liability was worth about RMB 1,436,000 at the start of the month (rate
      7.18) and about RMB 1,450,000 at month-end (rate 7.25). The WFOE books an unrealized FX loss of roughly RMB
      14,000, through net income. (Whether such a balance is a short-term exposure or a long-term investment changes the
      treatment, again a call for your accountant.)
    </p>

    <h2>A clean monthly close for two entities</h2>
    <p>A reliable consolidation is a checklist, run the same way every month:</p>
    <ol>
      <li>Close both ledgers as of the same calendar date. If the China books cut off on a different day, force a common close date for group reporting.</li>
      <li>Lock the month&apos;s FX rates before you start: one average rate for the P&amp;L, one period-end rate for the balance sheet, from a documented source, the same policy every month.</li>
      <li>Reconcile the intercompany accounts. The parent&apos;s intercompany receivable, in a common currency, must equal the sub&apos;s intercompany payable before you eliminate anything. Unreconciled intercompany is the most common source of consolidation error.</li>
      <li>Translate the sub&apos;s RMB trial balance into USD: P&amp;L at the average rate, balance sheet at the period-end rate, equity at historical rates.</li>
      <li>Book the eliminations: remove the intercompany revenue and matching expense, and the intercompany receivable against the payable.</li>
      <li>Compute the translation adjustment and park it in equity (OCI), separated from operating results.</li>
      <li>Keep transaction FX (in net income) and translation FX (in equity) on separate lines.</li>
      <li>Produce one consolidated P&amp;L and one consolidated cash view across both entities.</li>
      <li>Have a senior reviewer check it before it reaches the founder or an investor.</li>
    </ol>

    <h2>A worked consolidation</h2>
    <p>
      Consider an illustrative company, Lumen Robotics. Lumen Robotics Inc. is a Delaware C-corp that sells industrial
      inspection hardware to US customers. Its wholly owned Shenzhen WFOE employs the engineering and supply-chain team
      and invoices the parent a monthly cost-plus fee for that work. Here is one month, at an illustrative average rate
      of 7.2 RMB to the dollar, before and after consolidation.
    </p>

    <div className="table-wrap">
    <table className="data-table">
      <thead>
        <tr>
          <th>Line item</th>
          <th>US parent (USD)</th>
          <th>China sub (RMB)</th>
          <th>China sub (USD)</th>
          <th>Eliminations (USD)</th>
          <th>Consolidated (USD)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Third-party product revenue</td><td>400,000</td><td>0</td><td>0</td><td>0</td><td>400,000</td></tr>
        <tr><td>Intercompany engineering revenue</td><td>0</td><td>864,000</td><td>120,000</td><td>(120,000)</td><td>0</td></tr>
        <tr><td>Product COGS</td><td>(160,000)</td><td>0</td><td>0</td><td>0</td><td>(160,000)</td></tr>
        <tr><td>Intercompany engineering fees</td><td>(120,000)</td><td>0</td><td>0</td><td>120,000</td><td>0</td></tr>
        <tr><td>Local engineering payroll</td><td>0</td><td>(520,000)</td><td>(72,222)</td><td>0</td><td>(72,222)</td></tr>
        <tr><td>Rent &amp; facilities</td><td>0</td><td>(110,000)</td><td>(15,278)</td><td>0</td><td>(15,278)</td></tr>
        <tr><td>Other local opex</td><td>0</td><td>(90,000)</td><td>(12,500)</td><td>0</td><td>(12,500)</td></tr>
        <tr><td>US G&amp;A and payroll</td><td>(90,000)</td><td>0</td><td>0</td><td>0</td><td>(90,000)</td></tr>
        <tr><td><strong>Operating income</strong></td><td><strong>30,000</strong></td><td><strong>144,000</strong></td><td><strong>20,000</strong></td><td><strong>0</strong></td><td><strong>50,000</strong></td></tr>
      </tbody>
    </table>
    </div>

    <p>
      Read the outer columns first. The parent shows $30,000 of operating income; the WFOE, in dollars, shows $20,000;
      consolidated, the group earned $50,000. Now look at what the eliminations fix. The parent paid the WFOE a $120,000
      engineering fee, an expense on the parent&apos;s books and revenue on the WFOE&apos;s. Add the entities together
      naively and you report $520,000 of revenue (the $400,000 of real product sales plus the $120,000 intercompany fee)
      and an equally inflated expense base. That $120,000 is not revenue; it is the same money the group paid itself.
      Eliminating it pulls revenue back to the $400,000 the company earned from customers, and the expense base down by
      the same amount.
    </p>
    <p>
      Notice the trap: net income is $50,000 either way, which is exactly why the elimination gets skipped. But it
      changes the top line by $120,000, and with it every metric investors scrutinize: gross margin, revenue growth,
      burn composition, revenue per head. A business reporting $520,000 of revenue looks nothing like the one that
      truthfully earned $400,000.
    </p>
    <p>
      Two effects sit just off this table. First, <strong>translation</strong>: the WFOE&apos;s balance sheet is
      translated at the period-end rate (say 7.25) while its P&amp;L used the 7.2 average, and the difference
      accumulates as a CTA in equity, real, shown, and kept out of the $50,000 net income. Second, <strong>cash
      location</strong>. A consolidated P&amp;L says the group made $50,000; it does not say where the cash sits, and in
      a US-China structure that is not a footnote. RMB inside the WFOE cannot move to the US parent freely: cross-border
      flows run through China&apos;s foreign exchange administration and take time, documentation, and sometimes tax to
      unwind. A founder who claims &quot;14 months of runway&quot; while half the cash is trapped RMB is overstating the
      runway available to the US entity that pays the US bills. The report should split cash into US and China and flag
      what is practically repatriable, before an investor asks.
    </p>

    <h2>What founders get wrong</h2>
    <p>The recurring mistakes are consistent:</p>
    <ul>
      <li>
        <strong>Treating the WFOE as a black box.</strong> Cash goes in monthly and no clean local P&amp;L comes back
        out, so the founder cannot see real burn, benchmark spend, or catch drift and fraud until it is large.
      </li>
      <li>
        <strong>Mixing personal and company money.</strong> A founder pays a vendor on a personal card, or the local GM
        runs a personal expense through a company account. Common in early China operations, and it corrupts both the
        local books and the consolidation.
      </li>
      <li>
        <strong>Letting FX hide in the noise.</strong> A $40,000 swing buried in &quot;other expense&quot; reads as
        operational weakness, or an FX gain flatters a poor month. Unseparated, FX makes every trend unreliable.
      </li>
      <li>
        <strong>Double-counting intercompany transfers as revenue,</strong> the error the worked example exists to prevent.
      </li>
      <li>
        <strong>Using one rate for everything,</strong> or last year&apos;s rate, or whatever rate showed up the day the
        report was built. Inconsistent policy makes month-to-month comparison meaningless.
      </li>
      <li>
        <strong>Skipping the intercompany reconciliation,</strong> so &quot;sent&quot; and &quot;received&quot; never have to agree.
      </li>
    </ul>

    <h2>What investors actually want to see</h2>
    <p>Investors in a cross-border company are not asking for more detail. They want one trustworthy view:</p>
    <ul>
      <li>One consolidated P&amp;L in USD, intercompany already eliminated, so revenue and margin mean what they say.</li>
      <li>A real burn rate, not one inflated by money the company paid itself.</li>
      <li>A cash view that splits US and China and flags trapped RMB, so runway reflects where money can actually be spent.</li>
      <li>FX stated explicitly and separately, transaction apart from translation, so operating performance reads cleanly.</li>
      <li>Consistency: same close date, same rate policy, same structure, every month, so the trend is signal, not noise.</li>
    </ul>
    <p>
      A founder who hands over that package unprompted is signaling something beyond the numbers: the cross-border
      structure is under control.
    </p>

    <div className="callout">
      <span className="callout-label">How Echo helps</span>
      <p className="mb-0">
        Echo runs the monthly close for both entities. We reconcile the intercompany accounts, apply one documented FX
        policy (average rate for the P&amp;L, period-end for the balance sheet), eliminate intercompany revenue,
        expense, and balances, and deliver a single consolidated report in USD that a founder and an investor can both
        read, with transaction FX and translation FX shown separately and cash split between the US and China. The
        repetitive mechanics, translating the trial balance, matching intercompany lines, recomputing at the
        month&apos;s rates, are automated; the judgment is senior-reviewed before it reaches your inbox. We work
        alongside your accountant and CPA, and do not replace them, file your taxes, or issue audit opinions. The
        product is one monthly picture you can stand behind.
      </p>
    </div>

    <blockquote>
      An intercompany transfer is not revenue and it is not cost. It is the same dollar wearing two hats, and the whole
      job of a monthly close is to take one of them off before the number reaches your board.
    </blockquote>

    <h2>The bottom line</h2>
    <p>
      Two entities do not have two financial stories. They have one story told in two currencies, and the monthly close
      is the work of translating it back into a single picture the founder and the board can both repeat. The mechanics
      are not exotic: a common close date, a consistent rate policy, a real intercompany reconciliation, clean
      eliminations, and a clear split between cash in the US and cash in China.
    </p>
    <p>
      What separates the companies investors trust from the ones they quietly discount is not the sophistication of the
      accounting. It is whether anyone does this every month, the same way, and stands behind the result. That
      discipline is what turns two ledgers no one trusts into one number everyone can.
    </p>

    <div className="sources">
      <h4>Sources &amp; References</h4>
      <ol>
        <li>FASB Accounting Standards Codification (ASC) 830, <em>Foreign Currency Matters</em>. Governs functional currency determination, translation of foreign operations, and the cumulative translation adjustment recognized in other comprehensive income.</li>
        <li>FASB ASC 830-20, <em>Foreign Currency Transactions</em>. Foreign-currency transaction gains and losses are recognized in net income; addresses the treatment of intercompany foreign-currency balances, including long-term-investment exceptions.</li>
        <li>FASB ASC 810, <em>Consolidation</em>. Basis for presenting a parent and its subsidiaries as a single economic entity and eliminating intercompany transactions and balances.</li>
        <li>Publicly available foreign currency and consolidation reporting guides from major accounting firms (for example, PwC, Deloitte, and KPMG), which summarize functional currency indicators and intercompany elimination mechanics at a practitioner level.</li>
        <li>State Administration of Foreign Exchange (SAFE), People&apos;s Republic of China. Rules on cross-border fund flows and currency conversion relevant to repatriating WFOE cash, <a href="https://www.safe.gov.cn/en/" target="_blank" rel="noopener">safe.gov.cn</a>.</li>
        <li>The company &quot;Lumen Robotics&quot; and all figures in this article are fictional and illustrative, for teaching only. This is management-reporting guidance, not tax, audit, or accounting advice; consult your CPA on entity-specific treatment.</li>
      </ol>
    </div>
  </ArticleLayout>
);

export default DualEntityReporting;
