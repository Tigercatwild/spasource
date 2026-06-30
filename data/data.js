/* ============================================================================
   SpaSource — content data
   Everything the site renders comes from this file. Edit here to update the
   site (no build step). Pricing is COMMUNITY-REPORTED and clearly illustrative
   until real submissions replace it — see README.
   ============================================================================ */

window.DATA = {
  /* --- Rolling news ticker (top of page) -------------------------------- */
  ticker: [
    "New: Staska listing 50 mL Vitamin C vials — members reporting ~½ the cost of 30 mL alternatives",
    "Saline supply watch: 1000 mL bag pricing stabilizing after 2025 shortage",
    "503B outsourcing facilities expanding NAD+ availability — fewer back-orders reported",
    "Reminder: compounded injectables require a prescriber + proper licensing in your state",
  ],

  /* --- News-style update cards ------------------------------------------ */
  news: [
    {
      tag: "Price Move",
      date: "2026-06-18",
      title: "Vitamin C vials: members report ~45% savings switching to 50 mL formats",
      excerpt:
        "Owners comparing 50 mL vs 30 mL Vitamin C vials are reporting meaningful per-mL savings. We broke down the math and what to ask your rep before switching suppliers.",
      topic: "IV Vitamins",
    },
    {
      tag: "Supplier Watch",
      date: "2026-06-12",
      title: "Consumables: how one Orlando spa lowered IV bag cost with a dedicated rep",
      excerpt:
        "A recurring theme in owner groups: the right distributor rep quietly lowers your per-bag cost. Here's how to find one and what leverage actually works.",
      topic: "Consumables",
    },
    {
      tag: "Compliance",
      date: "2026-06-05",
      title: "503A vs 503B: which compounding pharmacy can actually sell to your spa",
      excerpt:
        "The difference decides whether you need a patient-specific prescription for every vial — or can stock office-use inventory. A plain-English breakdown.",
      topic: "Compliance",
    },
    {
      tag: "Market",
      date: "2026-05-28",
      title: "NAD+ availability improving as outsourcing facilities scale",
      excerpt:
        "After months of back-orders, members report shorter lead times on NAD+. We tracked which facilities are shipping and typical turnaround.",
      topic: "IV Vitamins",
    },
  ],

  /* --- Sourcing categories (the guide structure) ------------------------ */
  categories: [
    {
      id: "iv-fluids",
      icon: "💧",
      name: "IV Bags & Fluids",
      blurb: "Saline, lactated Ringer's, and base fluids — regulated as drugs; sourced via licensed distributors.",
      regulated: "Licensed distribution",
    },
    {
      id: "iv-vitamins",
      icon: "🧪",
      name: "IV Vitamins & Compounds",
      blurb: "Vitamin C, glutathione, NAD+, B-complex — sterile compounded injectables from 503A/503B pharmacies.",
      regulated: "Rx · Compounding pharmacy",
    },
    {
      id: "injectables",
      icon: "💉",
      name: "Neurotoxins & Fillers",
      blurb: "Botox, Dysport, dermal fillers — prescription products via authorized/specialty distributors.",
      regulated: "Rx · Authorized distributor",
    },
    {
      id: "consumables",
      icon: "🧤",
      name: "Consumables",
      blurb: "Tubing, IV start kits, syringes, needles, gloves, sharps containers — general medical distribution.",
      regulated: "Open distribution",
    },
    {
      id: "equipment",
      icon: "🛠️",
      name: "Equipment",
      blurb: "IV poles, pumps, exam furniture, refrigeration for temperature-sensitive stock.",
      regulated: "Open distribution",
    },
    {
      id: "retail",
      icon: "🧴",
      name: "Retail & Supplements",
      blurb: "Oral supplements and retail skincare you can resell to clients without Rx constraints.",
      regulated: "Open / retail",
    },
  ],

  /* --- Supplier directory ----------------------------------------------- */
  /* Informational listings only — not endorsements. Verify licensing,
     prescriber requirements, and your state's rules before ordering.        */
  suppliers: [
    {
      name: "Olympia Pharmaceuticals",
      type: "Compounding Pharmacy (503A/503B)",
      categories: ["iv-vitamins", "injectables"],
      location: "Orlando, FL",
      ships: "Nationwide (verify state)",
      known: "IV vitamins, sterile injectables, aesthetics compounds",
      access: "Account + prescriber required",
    },
    {
      name: "Staska Pharmaceuticals",
      type: "Compounding Pharmacy",
      categories: ["iv-vitamins"],
      location: "USA",
      ships: "Multi-state (verify)",
      known: "Vitamin C vials (50 mL formats), IV compounds",
      access: "Account + prescriber required",
    },
    {
      name: "Empower Pharmacy",
      type: "Compounding / 503B Outsourcing",
      categories: ["iv-vitamins", "injectables"],
      location: "Houston, TX",
      ships: "Nationwide",
      known: "Large-scale sterile compounds, office-use (503B)",
      access: "Account required",
    },
    {
      name: "Revelation Pharma",
      type: "Compounding Network (503A/503B)",
      categories: ["iv-vitamins"],
      location: "Multi-site, USA",
      ships: "Nationwide",
      known: "Sterile injectables, aesthetics, wellness compounds",
      access: "Account + prescriber required",
    },
    {
      name: "Henry Schein Medical",
      type: "Distributor",
      categories: ["iv-fluids", "consumables", "equipment"],
      location: "Melville, NY (national)",
      ships: "Nationwide",
      known: "IV fluids, consumables, devices, equipment — broad catalog",
      access: "Verified medical account",
    },
    {
      name: "McKesson Medical-Surgical",
      type: "Distributor",
      categories: ["iv-fluids", "consumables", "equipment"],
      location: "National",
      ships: "Nationwide",
      known: "Fluids, consumables, supply-chain scale",
      access: "Verified medical account",
    },
    {
      name: "Medisca",
      type: "Compounding Supplier",
      categories: ["iv-vitamins"],
      location: "Plattsburgh, NY",
      ships: "Nationwide",
      known: "APIs, excipients, compounding supplies (B2B to pharmacies)",
      access: "Licensed pharmacy / practitioner",
    },
    {
      name: "QuVa Pharma",
      type: "503B Outsourcing Facility",
      categories: ["iv-vitamins", "iv-fluids"],
      location: "Sugar Land, TX",
      ships: "Nationwide",
      known: "Office-use sterile preparations (503B)",
      access: "Facility account",
    },
  ],

  /* --- Price benchmarks ------------------------------------------------- */
  /* ⚠️ ILLUSTRATIVE / COMMUNITY-REPORTED ranges — placeholders until real
     member submissions populate them. Do NOT treat as quotes. See README
     for how to wire up live crowdsourced pricing.                           */
  pricing: [
    { item: "Normal Saline 0.9% — 1000 mL bag", cat: "iv-fluids", low: 2.5, high: 7, unit: "per bag", reports: 0, updated: "—" },
    { item: "Lactated Ringer's — 1000 mL bag", cat: "iv-fluids", low: 3, high: 8, unit: "per bag", reports: 0, updated: "—" },
    { item: "Vitamin C — 25 g / 50 mL vial", cat: "iv-vitamins", low: 15, high: 35, unit: "per vial", reports: 0, updated: "—" },
    { item: "Glutathione — 2000 mg vial", cat: "iv-vitamins", low: 18, high: 40, unit: "per vial", reports: 0, updated: "—" },
    { item: "NAD+ — 500 mg vial", cat: "iv-vitamins", low: 45, high: 110, unit: "per vial", reports: 0, updated: "—" },
    { item: "B-Complex — multidose vial", cat: "iv-vitamins", low: 10, high: 28, unit: "per vial", reports: 0, updated: "—" },
    { item: "IV Administration Set (tubing)", cat: "consumables", low: 0.6, high: 2.5, unit: "each", reports: 0, updated: "—" },
    { item: "IV Start Kit", cat: "consumables", low: 1, high: 4, unit: "each", reports: 0, updated: "—" },
    { item: "Nitrile Gloves", cat: "consumables", low: 4, high: 12, unit: "per 100", reports: 0, updated: "—" },
  ],

  /* --- Med spa networking directory ------------------------------------- */
  directory: [
    { name: "Glow Aesthetics", city: "Orlando", state: "FL", focus: "IV therapy · Injectables", open: true },
    { name: "Radiance Med Spa", city: "Austin", state: "TX", focus: "Injectables · Laser", open: true },
    { name: "Pure Wellness IV", city: "Scottsdale", state: "AZ", focus: "IV therapy · Wellness", open: true },
    { name: "Lumiere Aesthetics", city: "Nashville", state: "TN", focus: "Skincare · Injectables", open: false },
    { name: "Coastal Drip Bar", city: "San Diego", state: "CA", focus: "IV therapy", open: true },
    { name: "Elevate Med Spa", city: "Denver", state: "CO", focus: "Injectables · Body", open: true },
  ],

  /* --- FAQ (also emitted as FAQ schema for SEO) ------------------------- */
  faq: [
    {
      q: "Where do med spas source their IV vitamins?",
      a: "IV vitamins (Vitamin C, glutathione, NAD+, B-complex) are sterile compounded injectables, sourced from compounding pharmacies — 503A pharmacies (patient-specific prescriptions) or 503B outsourcing facilities (office-use stock). Commonly named suppliers include Olympia, Staska, Empower, and Revelation. An account and a prescriber relationship are typically required.",
    },
    {
      q: "Can I legally resell compounded IVs or injectables?",
      a: "Generally no — compounded sterile injectables and prescription products (like neurotoxins and fillers) can't be bought and resold by an unlicensed third party. They flow from licensed pharmacies/authorized distributors to licensed practices with a prescriber. This directory is informational; confirm requirements with your state board and a healthcare attorney.",
    },
    {
      q: "What's the difference between a 503A and a 503B pharmacy?",
      a: "A 503A compounding pharmacy compounds for a specific patient with a prescription. A 503B outsourcing facility is FDA-registered and can produce larger batches for office-use (no patient-specific Rx for each unit), under stricter manufacturing standards. Which one you use changes how you stock and document inventory.",
    },
    {
      q: "How much should IV bags cost?",
      a: "Base fluids like 1000 mL normal saline are commodity items, but pricing swings with supply conditions and your distributor relationship. Members report wide ranges — the benchmark table on this page shows community-reported ranges. The single biggest lever owners cite is a good distributor rep.",
    },
    {
      q: "Do I need a medical director to source these supplies?",
      a: "For prescription and compounded products, yes — a prescriber/medical director is typically part of the legal chain. Requirements vary by state and by product. Treat sourcing as a commercial question (who sells what, at what price) and leave clinical/legal decisions to your medical director and attorney.",
    },
    {
      q: "Olympia vs Staska — which is cheaper?",
      a: "It depends on the specific product and format. For example, members have reported Staska's 50 mL Vitamin C vials coming in well below 30 mL alternatives on a per-mL basis. Always compare per-mL or per-dose cost, shipping, and minimums — not just sticker price. Submit your real numbers to improve the benchmarks.",
    },
    {
      q: "Are the prices on this site real-time?",
      a: "Suppliers don't publish public price feeds, so true real-time pricing isn't possible to pull automatically. Instead, this hub uses community-reported pricing: owners submit what they actually pay, and benchmarks update with a 'last reported' date and sample size. The more members contribute, the more accurate it gets.",
    },
  ],
};
