import ArticleLayout from './ArticleLayout';

const ChinaProductMargin = () => (
  <ArticleLayout
    category="Budgeting &amp; Scenario Planning"
    title="The Real Landed Cost of a Product Made in China"
    subtitle="Your factory quote is not your cost. Freight, duty, tariffs, and FX decide whether the product actually makes money, and every one of them can move against you."
    readTime="8 min read"
    publishDate="June 2026"
    isoDate="2026-06-18"
    slug="china-product-landed-cost-margin"
    heroGradient="from-secondary via-secondary/90 to-primary/70"
    ogImage="/articles/ai-advisory.jpg"
  >
    <p className="lede">
      A founder sells a product for $18.00. The factory in Shenzhen quotes $9.00 a unit. Fifty percent gross margin, the
      spreadsheet says, and the founder prices, plans, and raises against that number. It is wrong. By the time that unit
      clears customs and reaches the warehouse shelf, it has cost closer to $13.00, and the real gross margin is not 50
      percent. It sits in the mid-twenties, and one policy change or one bad month on the ocean can push it into the teens.
      The factory quote is not your cost. It is the first line of your cost.
    </p>

    <div className="stat-grid">
      <div className="stat-card">
        <span className="num">+48%</span>
        <span className="label">Landed cost above the factory quote (worked example)</span>
      </div>
      <div className="stat-card">
        <span className="num">7.5 to 25%</span>
        <span className="label">Typical Section 301 tariff range on China-origin goods</span>
      </div>
      <div className="stat-card">
        <span className="num">10 pts</span>
        <span className="label">Gross-margin points a single tariff move can erase</span>
      </div>
    </div>

    <h2>The quote is the starting line, not the finish</h2>
    <p>
      Every China sourcing conversation opens with a unit price, and that price comes attached to an Incoterm: the
      three-letter code (EXW, FOB, and the rest) from the ICC&apos;s Incoterms 2020 rules that defines exactly where the
      seller&apos;s responsibility ends and yours begins. The two you will see most often carry very different meaning.
    </p>
    <ul>
      <li>
        <strong>EXW (Ex Works).</strong> The price covers the goods sitting on the factory&apos;s loading dock, and nothing
        more. You pay for getting them to the port, export clearance, ocean freight, insurance, and everything downstream.
      </li>
      <li>
        <strong>FOB (Free On Board).</strong> The factory gets the goods loaded onto the vessel at the origin port and
        handles export clearance. You own the cost from there forward.
      </li>
    </ul>
    <p>
      Neither one includes the costs that turn a factory price into a landed cost: the ocean freight, the US duty and
      tariffs, the customs brokerage, the currency spread, and the truck from the port to your warehouse. A founder who
      quotes a margin off the EXW or FOB number is pricing off a figure that was never meant to be a cost of goods.
    </p>

    <h2>Building up the true landed cost</h2>
    <p>
      Take a fictional direct-to-consumer brand, one we will call Harborline, importing an insulated steel bottle from a
      factory in Guangdong. The FOB price is $9.00 a unit and the bottle retails for $18.00. Here is what actually lands,
      per unit, on a full container of roughly 4,000 units. Every figure below is illustrative and rounded for clarity.
    </p>

    <div className="table-wrap">
    <table className="data-table">
      <thead>
        <tr>
          <th>Cost component</th>
          <th>Per unit</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Factory price (FOB Guangdong)</td><td>$9.00</td><td>The quote the plan was built on</td></tr>
        <tr><td>Ocean freight + insurance</td><td>$1.10</td><td>~$4,500 container over ~4,000 units; moves with rates</td></tr>
        <tr><td>US duty + Section 301 tariff</td><td>$2.25</td><td>Illustrative ~25% of customs value; depends on HTS code</td></tr>
        <tr><td>Customs entry, broker, MPF + HMF</td><td>$0.35</td><td>Per-entry fees, amortized per unit</td></tr>
        <tr><td>FX spread + conversion fee</td><td>$0.15</td><td>On the RMB-linked portion of the cost</td></tr>
        <tr><td>Inbound freight to warehouse</td><td>$0.45</td><td>Port drayage plus line-haul trucking</td></tr>
        <tr><td><strong>Landed cost per unit</strong></td><td><strong>$13.30</strong></td><td><strong>At your warehouse door</strong></td></tr>
        <tr><td>Returns + damage allowance</td><td>$0.55</td><td>~3% blended</td></tr>
        <tr><td>Storage + fulfillment</td><td>$0.40</td><td>Per-unit warehousing and pick-pack</td></tr>
        <tr><td>Payment processing</td><td>$0.54</td><td>~3% of the $18.00 retail price</td></tr>
        <tr><td><strong>Fully loaded unit cost</strong></td><td><strong>$14.79</strong></td><td><strong>Cost to deliver one sale</strong></td></tr>
      </tbody>
    </table>
    </div>

    <p>
      The ocean freight line is the one that moves the most. A 40-foot container from South China to a US West Coast port
      might cost $4,500 in a calm market and three or four times that when capacity tightens, as anyone shipping in 2021
      remembers. Spread across the units in the box, that is the difference between $1.10 and $3.30 a unit on the exact same
      product.
    </p>
    <p>
      The duty and tariff line is the one founders most often get wrong, because there are two layers. The first is the base
      duty rate set by your product&apos;s classification in the US Harmonized Tariff Schedule (HTS), the code US Customs uses
      to decide what your product is and what it owes. The second, for China-origin goods, is the Section 301 tariff, an
      additional duty the US Trade Representative has applied to most Chinese imports, historically in the range of 7.5 to 25
      percent depending on the product list, and subject to change as trade policy shifts. Both are assessed on the customs
      value, which is generally the transaction value of the goods, roughly your FOB price. Classify the product wrong and
      you misstate your entire cost base, in either direction. This is not a place to guess: confirm your HTS classification
      and your applicable rates with a licensed customs broker before you model anything. Nothing here is customs or legal
      advice.
    </p>
    <p>
      Two updates matter for 2026. First, after a 2024 review, Section 301 rates on strategic categories such as electric
      vehicles, batteries, solar cells, semiconductors, steel, aluminum, and certain medical goods have risen above 25
      percent, in some cases to 50 or 100 percent. Second, since 2025 most China-origin goods also carry additional tariffs
      imposed under the International Emergency Economic Powers Act that stack on top of Section 301 and the base HTS duty,
      so the total duty on a typical China-made product in 2026 is materially higher than the Section 301 figure alone.
      These rates are moving and are under legal challenge, so confirm the current stack with a licensed customs broker
      before you model.
    </p>
    <p>
      Then come the smaller, unavoidable lines: the customs entry and broker fee, and federal charges such as the
      Merchandise Processing Fee and, for ocean shipments, the Harbor Maintenance Fee. Individually minor, collectively a
      real per-unit number. The currency line is quieter still. If your purchase order is priced in RMB, or if it is priced
      in USD but your supplier reprices at the next order to protect their own RMB margin, then the RMB-USD exchange rate
      lives inside your cost of goods whether you track it or not. The spread on the conversion and the fee your bank takes
      are the visible part. The larger exposure is the rate itself, which has swung across a band of roughly 6.3 to 7.3 RMB
      to the dollar over the past several years. Finally, the goods still have to get from the port to your fulfillment
      center, which is drayage plus trucking, one more line the factory quote never mentioned.
    </p>
    <p>
      Add it up and the landed cost is <strong>$13.30</strong> a unit, not $9.00. The product costs 48 percent more than the
      quote before a single sale. On an $18.00 retail price, the true gross margin is ($18.00 less $13.30) over $18.00, or
      about <strong>26 percent</strong>, not the 50 percent the factory number implied. And gross margin is not the end of
      it. Sell direct to consumers and three more variable costs attach to every unit: a returns and damage allowance,
      per-unit storage and fulfillment, and payment processing on the sale. Layer those in and the contribution per unit
      thins to roughly <strong>18 percent</strong>. The 50 percent number was never real.
    </p>

    <h2>Then the ground moves</h2>
    <p>
      The trouble with a 26 percent gross margin is that at least three of the lines you just built sit outside your control,
      and they do not tend to move in your favor.
    </p>
    <ol>
      <li>
        <strong>A tariff hike.</strong> A change in Section 301 policy, or a reclassification, can lift the effective tariff.
        Add 20 points to the rate on a $9.00 base and that is $1.80 a unit, straight off the margin.
      </li>
      <li>
        <strong>An FX move.</strong> An adverse 8 percent swing in the RMB-linked cost is another $0.72 a unit at the next
        purchase order.
      </li>
      <li>
        <strong>A freight spike.</strong> A doubling of the container rate, well within recent experience, adds about $1.10 a
        unit.
      </li>
    </ol>
    <p>Here is what each does to the same product&apos;s gross margin, and what happens if they arrive together.</p>

    <div className="bar-chart">
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">Base case</span><span className="bar-value">~26%</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '100%' }} /></div>
      </div>
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">Section 301 tariff up 20 pts</span><span className="bar-value">~16%</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '62%' }} /></div>
      </div>
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">RMB moves 8% against you</span><span className="bar-value">~22%</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '85%' }} /></div>
      </div>
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">Container rate doubles</span><span className="bar-value">~20%</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '77%' }} /></div>
      </div>
      <div className="bar-row">
        <div className="bar-label"><span className="bar-name">All three at once</span><span className="bar-value">~6%</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: '23%' }} /></div>
      </div>
    </div>

    <p>
      None of these is a worst-case fantasy. Section 301 lists have been revised more than once. The RMB has traded across a
      15 percent band in recent years. Container rates have moved by multiples inside a single year. Any one of them turns a
      comfortable product into a marginal one. Together, they turn it into a loss: at roughly 6 percent gross margin the
      unit earns about $1.08 before selling costs, and once the returns, storage, and processing allowances come off, the
      same unit contributes about ($0.41). The founder who priced off the $9.00 quote never saw it coming, because the
      number that moved was never on the spreadsheet.
    </p>

    <div className="callout">
      <span className="callout-label">How Echo helps</span>
      <p className="mb-0">
        Echo builds a live landed-cost and margin model for the actual product, with every line broken out: factory price,
        freight, duty and Section 301 tariff by HTS classification, customs and FX, and the per-unit selling costs. It runs
        the scenarios alongside it, so you can see gross margin under a tariff change, an FX swing, or a freight spike before
        you commit a purchase order or set a retail price. When a rate moves, the model updates and you know your new number
        in hours, not at the end of the quarter. A tariff or FX move should never quietly turn a profitable product into a
        loss you find out about after the container has landed.
      </p>
    </div>

    <blockquote>
      The factory sends you a price. The ocean, the customs house, and the currency market send you the rest of the bill,
      and they do not ask what you already promised your investors.
    </blockquote>

    <h2>Price off landed cost, and leave room</h2>
    <p>
      None of this argues against making things in China. It argues against pricing as if the factory quote were the whole
      cost. Five habits keep the margin honest.
    </p>
    <ol>
      <li>
        <strong>Build the full landed-cost model before you sign the purchase order.</strong> The PO is the moment the cost
        is locked. That is the moment to know it, not after the container is on the water.
      </li>
      <li>
        <strong>Price off landed cost, not the factory quote, and add a buffer.</strong> If your margin only works at
        today&apos;s freight and today&apos;s tariff, you do not have a margin. You have a bet.
      </li>
      <li>
        <strong>Re-quote the moving lines every cycle.</strong> Freight and FX are not set-and-forget. A rate that was true
        two quarters ago is a guess today.
      </li>
      <li>
        <strong>Confirm your HTS classification with a licensed customs broker,</strong> and revisit it when policy changes.
        The tariff line is too large, and too easy to get wrong, to leave to a spreadsheet&apos;s best guess.
      </li>
      <li>
        <strong>Model the downside before you commit a retail price.</strong> If a plausible tariff or freight move erases
        your margin, you want to know at the PO stage, while you can still renegotiate, resize the order, or reprice.
      </li>
    </ol>

    <h2>The bottom line</h2>
    <p>
      The factory quote is the most visible number in the entire chain and the least complete. Founders anchor on it because
      it is the one the supplier hands them, and it is the one that hides the four or five lines that actually decide whether
      the product makes money. Landed cost is not exotic. It is simply the honest version of cost of goods for anything that
      crosses a border, and it is the only cost base worth pricing against.
    </p>
    <p>
      The brands that survive a tariff headline or a freight spike are not the ones that guessed the future correctly. They
      are the ones that priced with room, modeled the downside, and knew their real number before they committed the order.
      The factory quote starts the conversation. Landed cost ends it.
    </p>

    <div className="sources">
      <h4>Sources &amp; References</h4>
      <ol>
        <li>International Chamber of Commerce (ICC). <em>Incoterms 2020</em> rules (EXW, FOB, and related terms), <a href="https://iccwbo.org/business-solutions/incoterms-rules/" target="_blank" rel="noopener">iccwbo.org</a>.</li>
        <li>United States International Trade Commission (USITC). <em>Harmonized Tariff Schedule of the United States (HTS)</em>, <a href="https://hts.usitc.gov/" target="_blank" rel="noopener">hts.usitc.gov</a>. Base duty rates depend on product classification.</li>
        <li>Office of the United States Trade Representative (USTR). Section 301 actions on China-origin goods, including tariff lists and modifications, <a href="https://ustr.gov/" target="_blank" rel="noopener">ustr.gov</a>. Rates vary by list and change with policy.</li>
        <li>US Customs and Border Protection (CBP). Customs valuation (transaction value), Merchandise Processing Fee, and Harbor Maintenance Fee, <a href="https://www.cbp.gov/" target="_blank" rel="noopener">cbp.gov</a>.</li>
        <li>Drewry World Container Index and Freightos Baltic Index. Ocean container freight rate benchmarks illustrating rate volatility.</li>
        <li>Gross margin and landed cost as standard managerial accounting concepts. All figures above are illustrative, the brand Harborline is fictional, and applicable duty rates and classifications should be confirmed with a licensed customs broker.</li>
      </ol>
    </div>
  </ArticleLayout>
);

export default ChinaProductMargin;
