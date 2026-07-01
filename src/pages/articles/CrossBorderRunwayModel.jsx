import ArticleLayout from './ArticleLayout';

const CrossBorderRunwayModel = () => (
  <ArticleLayout
    category="Fundraising Readiness"
    title="Building a Cross-Border Runway Model Investors Take Seriously"
    subtitle="A runway number that ignores currency, multiple entities, and the timing of cross-border cash is the number that gets you caught in a partner meeting."
    readTime="8 min read"
    publishDate="June 2026"
    isoDate="2026-06-20"
    slug="cross-border-runway-model-investors"
    heroGradient="from-secondary via-secondary/90 to-primary/70"
    ogImage="/articles/ai-advisory.jpg"
  >
    <p className="lede">
      On a founder&apos;s spreadsheet, runway is one of the cleanest numbers in the business: cash on hand, divided by
      monthly burn, equals months of life. For a company that holds dollars in one account and spends them from the same
      account, that number is honest. For a company raising USD while operating across a US holding company and a China
      subsidiary, it can be wrong by two to three months, and wrong in exactly the direction that gets a CEO caught in a
      partner meeting.
    </p>

    <div className="stat-grid">
      <div className="stat-card">
        <span className="num">12 vs 8.6</span>
        <span className="label">Headline vs. stress-tested runway, months (illustrative)</span>
      </div>
      <div className="stat-card">
        <span className="num">~10%</span>
        <span className="label">FX move on USD/RMB an investor will sensitivity-test</span>
      </div>
      <div className="stat-card">
        <span className="num">1 quarter+</span>
        <span className="label">Typical lead time to move surplus cash out of a China entity</span>
      </div>
    </div>

    <h2>Why one number breaks at the border</h2>
    <p>
      The naive runway calculation assumes three things that quietly stop being true the moment your operations cross a
      currency line. It assumes every dollar of cash is worth a dollar (it is not, when some of it is RMB and the rate
      moves). It assumes every dollar of cash can be spent where the burn happens (it cannot, when cash is parked inside a
      China entity that is slow to release it). And it assumes burn is a fixed dollar figure (it is not, when part of your
      spend is denominated in RMB and the exchange rate reprices it every month).
    </p>
    <p>
      Take an illustrative Series A antibody developer we will call <strong>Vela Bio</strong>. It is not a real company; the
      figures are constructed to show the mechanics, not to quote a market. At its model date the spot rate is USD/RMB 7.2,
      and the balance sheet looks like this:
    </p>
    <ul>
      <li>US holding company, held in USD: <strong>$14.0M</strong></li>
      <li>
        China subsidiary, held in RMB (RMB 28.8M at 7.2): <strong>$4.0M</strong>, of which RMB 18M (about $2.5M) is a local
        manufacturing subsidy that is restricted and slow to move out of the country
      </li>
      <li>Reported cash: <strong>$18.0M</strong></li>
      <li>
        Monthly burn of <strong>$1.5M</strong>: roughly $750k USD-denominated (US clinical and G&amp;A) and $750k
        RMB-denominated (China CDMO, CRO, and team), funded by converting dollars to RMB each month
      </li>
    </ul>
    <p>
      Cash divided by burn gives <strong>$18.0M / $1.5M = 12.0 months</strong>. That is the number on the deck. Three
      corrections turn it into something an investor will believe.
    </p>

    <h2>Step one: consolidate the cash you can actually spend</h2>
    <p>
      Start by separating <strong>reported cash</strong> from <strong>spendable cash</strong>. Cash sitting in a China
      wholly foreign-owned enterprise (WFOE) is not available to your US holding company on demand. Moving it out generally
      runs through a dividend, which requires a completed statutory audit, settlement of corporate income tax and
      withholding tax, a mandatory reserve allocation, and bank and foreign-exchange documentation. In practice that is a
      quarter or more, and the distributable amount is capped by accumulated profits and registered-capital rules. A
      government subsidy or grant booked locally is often restricted outright.
    </p>
    <p>
      For Vela Bio, that means the RMB 18M subsidy (about $2.5M) should not be counted toward consolidated runway at all,
      because it cannot be deployed against US burn inside the funding window. Spendable cash is therefore closer to
      <strong> $15.5M</strong>, not $18.0M. The discipline here is simple to state and easy to skip: every cash line gets a
      tag for which entity holds it, which currency it is in, and how many days it would take to spend it where you need it.
      Cash you cannot move in time is restricted cash, and restricted cash does not buy runway.
    </p>

    <h2>Step two: split USD burn from RMB burn</h2>
    <p>
      A single blended burn figure hides a directional FX exposure. Vela Bio burns half its cash in RMB, and that half is
      funded by selling dollars. When the RMB strengthens, those same RMB obligations cost more in dollars, so the dollar
      burn rises and runway shrinks. When the RMB weakens, the dollar burn falls and runway extends. The exposure runs the
      other way on any RMB cash you hold, which is why a company funded mostly in dollars and spending in RMB feels FX moves
      most sharply: it carries the burn-side exposure with almost no cash-side offset.
    </p>
    <p>
      The fix is not to predict the rate. It is to make the rate an <strong>explicit, named assumption</strong> in the
      model, on its own line, so that anyone reading it can change one cell and watch runway respond. A model that buries
      7.2 inside a formula is a model that cannot be stress-tested, and a model that cannot be stress-tested is one an
      investor has to take on faith. They will not.
    </p>

    <h2>Step three: put the lumpy outflows on the calendar</h2>
    <p>
      Cross-border spend is rarely smooth. A CDMO commits you to a purchase order tied to a process-validation slot. A trial
      reaches a milestone and triggers a payment. A tax settlement falls due before a dividend can be declared. These are
      lumpy, dated, and often denominated in RMB, and a model that smears them into an average monthly burn will show a
      gentle line where the real cash balance has a cliff.
    </p>
    <p>
      Vela Bio has a $1.5M CDMO purchase order landing in a single quarter. Averaged across the year it looks like an extra
      $125k per month. As a lump it can take the company below its safety threshold for one quarter even though the annual
      figures look fine. Investors who have lived through a manufacturing scale-up read the timing, not the average. Model
      the outflows on the dates they actually clear, in the currency they actually clear in, and tie each one to the
      milestone that releases it.
    </p>

    <h2>Base, downside, and an explicit FX line</h2>
    <p>
      With those three corrections, you can build scenarios that mean something. Each one moves a named assumption: the FX
      rate, the share of China cash you can repatriate in time, and the timing of the lumpy outflows. The table below shows
      Vela Bio under four lenses. All figures are illustrative.
    </p>

    <div className="table-wrap">
    <table className="data-table">
      <thead>
        <tr>
          <th>Scenario</th>
          <th>Spendable cash (USD)</th>
          <th>Monthly burn (USD)</th>
          <th>Implied runway</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Reported / naive</td><td>$18.0M</td><td>$1.50M</td><td>12.0 months</td></tr>
        <tr><td>Base case (trapped cash excluded)</td><td>$15.5M</td><td>$1.50M</td><td>10.3 months</td></tr>
        <tr><td>FX shock (RMB +10%, to 6.5)</td><td>$15.7M</td><td>$1.58M</td><td>9.9 months</td></tr>
        <tr><td><strong>Downside (FX + slow repatriation + CDMO PO)</strong></td><td><strong>$14.0M</strong></td><td><strong>$1.62M</strong></td><td><strong>8.6 months</strong></td></tr>
      </tbody>
    </table>
    </div>

    <p>
      The gap between the headline 12.0 months and the downside 8.6 months is not noise. It is the difference between
      starting your next raise from a position of strength and starting it after a term sheet has already slipped. Notice
      that the FX shock barely changes spendable cash (the restricted RMB rises in dollar terms but you still cannot move
      it) while it lifts burn by about 5%. The trapped-cash correction does the heavy lifting on its own.
    </p>

    <div className="bar-chart">
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">Reported / naive</span><span className="bar-value">12.0 mo</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '100%' }} /></div>
      </div>
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">Base case (honest)</span><span className="bar-value">10.3 mo</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '86%' }} /></div>
      </div>
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">FX shock (RMB +10%)</span><span className="bar-value">9.9 mo</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '82%' }} /></div>
      </div>
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">Downside (combined)</span><span className="bar-value">8.6 mo</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '72%' }} /></div>
      </div>
    </div>

    <h2>What investors actually stress-test</h2>
    <p>
      A partner who has funded cross-border companies before will reach for the same three pressure points within the first
      few minutes of looking at your model.
    </p>
    <ol>
      <li>
        <strong>FX sensitivity.</strong> Expect a question of the form, &quot;what does a 10% move in the RMB do to your
        runway?&quot; If your answer requires rebuilding the model, you have already lost the point. The named FX line is
        what lets you answer in one sentence.
      </li>
      <li>
        <strong>Cash that cannot be repatriated quickly.</strong> They will separate your reported cash from the cash that
        can actually reach the entity doing the spending, and they will discount anything stuck behind a dividend, a tax
        settlement, or a capital-account restriction.
      </li>
      <li>
        <strong>Single-entity and single-supplier concentration.</strong> If one WFOE holds most of the cash, or one CDMO
        carries most of the lumpy outflow, that is a single point of failure on both the cash side and the operating side.
        They will ask what happens if that one relationship slips a quarter.
      </li>
    </ol>

    <h2>Red flags that make investors stop trusting the model</h2>
    <p>
      Distrust rarely comes from a number being wrong. It comes from signals that the founder has not thought about the
      cross-border mechanics at all. The common ones:
    </p>
    <ul>
      <li>One blended cash figure with no currency or entity breakdown behind it.</li>
      <li>An FX rate hard-coded inside formulas instead of sitting on a visible assumption line.</li>
      <li>China cash counted at full value toward US runway, with no repatriation timeline.</li>
      <li>Burn shown as a flat monthly average that hides a known purchase order or milestone payment.</li>
      <li>A base case with no downside, or a downside that moves revenue but never touches FX or cash access.</li>
    </ul>
    <p>
      Each of these is individually survivable. Together they tell a partner that the runway number is decorative, and once
      a model loses credibility on cash, every other projection in the deck inherits the doubt.
    </p>

    <div className="callout">
      <span className="callout-label">How Echo helps</span>
      <p className="mb-0">
        Echo builds and maintains a live, scenario-driven cross-border runway model that is investor-ready before the raise
        begins, not assembled in a panic during diligence. Cash is consolidated by entity and currency with repatriation
        timelines attached, burn is split into its USD and RMB components, FX sits on a named assumption line, and the lumpy
        cross-border outflows are dated to the milestones that release them. When a partner asks what a 10% RMB move does to
        runway, the answer is one cell away, and it is the same model the board saw last month.
      </p>
    </div>

    <blockquote>
      Reported cash tells you what you raised. Spendable cash tells you how long you can fight. In a cross-border company,
      those are two different numbers, and only one of them belongs in the runway calculation.
    </blockquote>

    <h2>How to present one model that holds up</h2>
    <p>
      The goal is a single source of truth, not a separate story for each audience. The board, the investor, and the CEO
      should all be reading the same workbook, with the same assumption lines visible at the top: the FX rate, the
      repatriable share of China cash, and the dates of the major outflows. Lead with spendable cash and state plainly what
      you excluded and why. Show the base case, then one credible downside that touches FX and cash access, not just
      revenue. Keep the model auditable, so any reader can trace a runway number back to the assumption that produced it.
      The point is not to look conservative. It is to look like someone who already asked the hard questions before the
      investor did.
    </p>

    <h2>The bottom line</h2>
    <p>
      A cross-border runway number is not harder to build than a single-entity one. It just has three more honest inputs:
      where the cash is, how fast it can move, and what currency the burn is in. Skip them and the headline runway flatters
      you by two to three months, which is precisely the cushion you do not have when a raise runs long.
    </p>
    <p>
      Investors are not looking for a company with no FX exposure or no cash sitting in China. Those constraints come with
      the territory of building across the US and China. They are looking for a founder who has already priced the exposure
      into the plan, who can move one assumption and show the consequence, and who is telling the same numerical story to
      the board and the partner meeting. Build that model once, keep it live, and it stops being a diligence liability and
      starts being a reason to trust everything else you say.
    </p>

    <div className="sources">
      <h4>Sources &amp; References</h4>
      <ol>
        <li>Cash burn and runway definitions follow standard venture usage: runway equals cash on hand divided by net monthly burn. See Investopedia, &quot;Burn Rate,&quot; and common VC practice.</li>
        <li>Scenario and sensitivity analysis as tools for testing a forecast against its key assumptions (here, the FX rate): Brealey, Myers &amp; Allen, <em>Principles of Corporate Finance</em>, chapters on project analysis.</li>
        <li>Outbound profit repatriation from a China WFOE is governed by the State Administration of Foreign Exchange (SAFE) and PRC company law, generally requiring a completed statutory audit, settlement of corporate income tax and withholding tax, and a mandatory reserve allocation. See China tax and investment guides published by the major accounting firms (e.g., PwC, Deloitte, KPMG).</li>
        <li>On China&apos;s managed capital account and the practical friction of moving funds cross-border: IMF Annual Report on Exchange Arrangements and Exchange Restrictions; US-China Business Council member guidance.</li>
        <li>USD/CNY reference rates: People&apos;s Bank of China daily central parity and the US Federal Reserve H.10 foreign exchange release. The illustrative 7.2 spot and 10% move are representative, not a forecast.</li>
        <li>Echo International Medica practitioner observations from cross-border CFO and fundraising advisory work. Vela Bio and all figures in this article are illustrative.</li>
      </ol>
    </div>
  </ArticleLayout>
);

export default CrossBorderRunwayModel;
