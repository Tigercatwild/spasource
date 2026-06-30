/* ============================================================================
   SpaSource — interactivity
   ============================================================================ */
(function () {
  "use strict";
  const D = window.DATA;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

  /* ---------- Ticker ---------- */
  function renderTicker() {
    const track = $("#ticker-track");
    const items = D.ticker.map((t) => `<span class="ticker-item">${esc(t)}</span>`).join("");
    track.innerHTML = items + items; // duplicate for seamless loop
  }

  /* ---------- News ---------- */
  function renderNews() {
    const grid = $("#news-grid");
    D.news.forEach((n) => {
      const d = new Date(n.date + "T00:00:00");
      const date = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      const card = el("a", "news-card reveal");
      card.href = "#guide";
      card.innerHTML = `
        <div class="news-accent"></div>
        <div>
          <div class="news-meta">
            <span class="news-tag">${esc(n.tag)}</span>
            <span class="news-date">${date}</span>
          </div>
          <h3>${esc(n.title)}</h3>
          <p>${esc(n.excerpt)}</p>
        </div>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Categories ---------- */
  function renderCategories() {
    const grid = $("#cat-grid");
    D.categories.forEach((c) => {
      const rx = /Rx/.test(c.regulated);
      const card = el("div", "cat-card reveal");
      card.dataset.cat = c.id;
      card.innerHTML = `
        <div class="cat-icon">${c.icon}</div>
        <h3>${esc(c.name)}</h3>
        <p>${esc(c.blurb)}</p>
        <span class="chip ${rx ? "rx" : ""}">${esc(c.regulated)}</span>`;
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - r.left + "px");
        card.style.setProperty("--my", e.clientY - r.top + "px");
      });
      card.addEventListener("click", () => {
        filterPricing(c.id);
        $("#pricing").scrollIntoView({ behavior: "smooth" });
      });
      grid.appendChild(card);
    });
  }

  /* ---------- Pricing ---------- */
  let activeFilter = "all";
  function renderFilters() {
    const bar = $("#price-filters");
    const cats = [{ id: "all", name: "All" }, ...D.categories.filter((c) => D.pricing.some((p) => p.cat === c.id))];
    cats.forEach((c) => {
      const b = el("button", "filter" + (c.id === "all" ? " active" : ""), esc(c.name));
      b.dataset.cat = c.id;
      b.addEventListener("click", () => filterPricing(c.id));
      bar.appendChild(b);
    });
  }
  function filterPricing(cat) {
    activeFilter = cat;
    $$("#price-filters .filter").forEach((f) => f.classList.toggle("active", f.dataset.cat === cat));
    renderPricingRows();
  }
  function renderPricingRows() {
    const tb = $("#price-body");
    tb.innerHTML = "";
    const rows = D.pricing.filter((p) => activeFilter === "all" || p.cat === activeFilter);
    rows.forEach((p) => {
      const live = p.reports > 0;
      const tr = el("tr");
      tr.innerHTML = `
        <td>${esc(p.item)}</td>
        <td><span class="price-range">$${p.low} – $${p.high}</span> <span class="reports-badge">${esc(p.unit)}</span></td>
        <td><span class="reports-badge ${live ? "live" : ""}">${live ? "● " + p.reports + " reports · " + esc(p.updated) : "Awaiting reports"}</span></td>`;
      tb.appendChild(tr);
    });
  }

  /* ---------- Suppliers ---------- */
  function renderSuppliers() {
    const grid = $("#sup-grid");
    D.suppliers.forEach((s) => {
      const card = el("div", "sup-card reveal");
      card.innerHTML = `
        <div class="sup-top">
          <div><h3>${esc(s.name)}</h3><span class="sup-type">${esc(s.type)}</span></div>
        </div>
        <div class="sup-row"><span>Best for</span><span>${esc(s.known)}</span></div>
        <div class="sup-row"><span>Location</span><span>${esc(s.location)}</span></div>
        <div class="sup-row"><span>Ships</span><span>${esc(s.ships)}</span></div>
        <div class="sup-row"><span>Access</span><span>${esc(s.access)}</span></div>`;
      grid.appendChild(card);
    });
  }

  /* ---------- Directory ---------- */
  function renderDirectory(filter = "") {
    const grid = $("#dir-grid");
    grid.innerHTML = "";
    const f = filter.toLowerCase();
    const rows = D.directory.filter(
      (d) => !f || d.name.toLowerCase().includes(f) || d.city.toLowerCase().includes(f) || d.state.toLowerCase().includes(f) || d.focus.toLowerCase().includes(f)
    );
    if (!rows.length) { grid.appendChild(el("p", "cmdk-empty", "No spas match — be the first to add yours.")); return; }
    rows.forEach((d) => {
      const card = el("div", "dir-card");
      card.innerHTML = `
        <h3>${esc(d.name)}</h3>
        <div class="dir-loc">${esc(d.city)}, ${esc(d.state)}</div>
        <div class="dir-focus">${esc(d.focus)}</div>
        <div class="dir-focus" style="margin-top:10px"><span class="dot ${d.open ? "open" : "closed"}"></span>${d.open ? "Open to networking" : "Listed"}</div>`;
      grid.appendChild(card);
    });
  }

  /* ---------- FAQ ---------- */
  function renderFAQ() {
    const list = $("#faq-list");
    D.faq.forEach((f) => {
      const item = el("div", "faq-item reveal");
      item.innerHTML = `
        <div class="faq-q"><span>${esc(f.q)}</span><span class="faq-icon">+</span></div>
        <div class="faq-a"><div class="faq-a-inner">${esc(f.a)}</div></div>`;
      item.querySelector(".faq-q").addEventListener("click", () => {
        const open = item.classList.contains("open");
        item.classList.toggle("open");
        const a = item.querySelector(".faq-a");
        a.style.maxHeight = open ? null : a.scrollHeight + "px";
      });
      list.appendChild(item);
    });
  }

  /* ---------- Search index + command palette ---------- */
  let index = [];
  function buildIndex() {
    index = [
      ...D.categories.map((c) => ({ ic: c.icon, t: c.name, s: c.blurb, k: "Topic", target: "#guide" })),
      ...D.suppliers.map((s) => ({ ic: "🏷️", t: s.name, s: s.type + " · " + s.known, k: "Supplier", target: "#suppliers" })),
      ...D.faq.map((f) => ({ ic: "❓", t: f.q, s: f.a.slice(0, 70) + "…", k: "FAQ", target: "#faq" })),
      ...D.news.map((n) => ({ ic: "📰", t: n.title, s: n.tag, k: "News", target: "#news" })),
      ...D.pricing.map((p) => ({ ic: "💵", t: p.item, s: "$" + p.low + "–$" + p.high + " " + p.unit, k: "Price", target: "#pricing" })),
    ];
  }
  function searchIndex(q) {
    q = q.toLowerCase().trim();
    if (!q) return index.slice(0, 8);
    return index
      .map((i) => ({ i, score: (i.t.toLowerCase().includes(q) ? 2 : 0) + (i.s.toLowerCase().includes(q) ? 1 : 0) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.i)
      .slice(0, 8);
  }
  let selIdx = 0, current = [];
  function openCmdk() {
    $("#cmdk-overlay").classList.add("open");
    const input = $("#cmdk-input");
    input.value = ""; input.focus();
    renderCmdkResults("");
  }
  function closeCmdk() { $("#cmdk-overlay").classList.remove("open"); }
  function renderCmdkResults(q) {
    current = searchIndex(q); selIdx = 0;
    const box = $("#cmdk-results");
    if (!current.length) { box.innerHTML = '<div class="cmdk-empty">No results — try “vitamin C”, “503B”, or “Olympia”.</div>'; return; }
    box.innerHTML = current
      .map((r, i) => `<a class="cmdk-item ${i === 0 ? "sel" : ""}" data-target="${r.target}" data-i="${i}">
        <span class="ic">${r.ic}</span><div><div class="t">${esc(r.t)}</div><div class="s">${esc(r.s)}</div></div><span class="k">${r.k}</span></a>`)
      .join("");
    $$("#cmdk-results .cmdk-item").forEach((a) => a.addEventListener("click", () => goTo(a.dataset.target)));
  }
  function goTo(target) { closeCmdk(); const t = $(target); if (t) t.scrollIntoView({ behavior: "smooth" }); }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    $$(".reveal").forEach((n) => io.observe(n));
  }

  /* ---------- Animated counters ---------- */
  function initCounters() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const node = e.target, target = +node.dataset.target, suffix = node.dataset.suffix || "";
        let cur = 0; const step = target / 50;
        const tick = () => { cur += step; if (cur < target) { node.textContent = Math.floor(cur).toLocaleString() + suffix; requestAnimationFrame(tick); } else node.textContent = target.toLocaleString() + suffix; };
        tick(); io.unobserve(node);
      });
    }, { threshold: 0.5 });
    $$("[data-target]").forEach((n) => io.observe(n));
  }

  /* ---------- Wire up ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderTicker(); renderNews(); renderCategories(); renderFilters(); renderPricingRows();
    renderSuppliers(); renderDirectory(); renderFAQ(); buildIndex(); initReveal(); initCounters();

    // nav scroll state
    const nav = $("#nav");
    addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20));

    // mobile menu
    $("#nav-toggle").addEventListener("click", () => $("#nav-links").classList.toggle("show"));

    // search triggers
    $("#search-btn").addEventListener("click", openCmdk);
    $("#hero-search").addEventListener("focus", openCmdk);
    $("#cmdk-overlay").addEventListener("click", (e) => { if (e.target.id === "cmdk-overlay") closeCmdk(); });
    $("#cmdk-input").addEventListener("input", (e) => renderCmdkResults(e.target.value));

    // directory search
    $("#dir-input").addEventListener("input", (e) => renderDirectory(e.target.value));

    // keyboard
    addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openCmdk(); }
      if (e.key === "Escape") closeCmdk();
      if (!$("#cmdk-overlay").classList.contains("open")) return;
      const items = $$("#cmdk-results .cmdk-item");
      if (e.key === "ArrowDown") { e.preventDefault(); selIdx = Math.min(selIdx + 1, items.length - 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); selIdx = Math.max(selIdx - 1, 0); }
      else if (e.key === "Enter" && items[selIdx]) { goTo(items[selIdx].dataset.target); return; }
      else return;
      items.forEach((it, i) => it.classList.toggle("sel", i === selIdx));
      items[selIdx] && items[selIdx].scrollIntoView({ block: "nearest" });
    });

    // forms (front-end only — wire to your email tool / backend)
    $$("form").forEach((f) => f.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = f.querySelector("button");
      const old = btn.textContent; btn.textContent = "✓ You're in";
      f.reset(); setTimeout(() => (btn.textContent = old), 2500);
    }));
  });
})();
