// Shelf.js — the shared pieces of the shelf shell: the "For today" band,
// the photo shelves, and the detail modal a spark opens into.
//
// Both index.html and category.html use this, so the four-for-today card
// and a card tapped inside a category behave identically.

window.Shelf = (function () {

  // ---------- Seeded shuffle ----------
  // The four cards must be the same all day and different tomorrow, so the
  // deck is shuffled against the day number rather than Math.random.
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function dayNumber() {
    return Math.floor(Date.now() / 86400000);
  }
  function seededShuffle(arr, seed) {
    const out = arr.slice();
    const rnd = mulberry32(seed);
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  // ---------- The whole pool, flattened, each item knowing its shelf ----------
  function everything() {
    const items = [];
    for (const shelf of window.SHELVES) {
      for (const data of window.shelfItems(shelf)) {
        items.push({ kind: shelf.kind, shelf: shelf, data: data });
      }
    }
    return items;
  }

  let _deck = null;
  function deck() {
    if (!_deck) _deck = seededShuffle(everything(), dayNumber());
    return _deck;
  }

  // Four for today, never two from the same shelf in one set — otherwise a
  // big shelf like Hardware wins most days and the band stops feeling varied.
  function pickForToday(offset) {
    const d = deck();
    if (!d.length) return [];
    const picked = [];
    const seenShelf = new Set();
    let i = 0;
    const start = (offset || 0) % d.length;
    while (picked.length < 4 && i < d.length) {
      const item = d[(start + i) % d.length];
      if (!seenShelf.has(item.shelf.id)) { picked.push(item); seenShelf.add(item.shelf.id); }
      i++;
    }
    // Pools smaller than four shelves still fill up, just with repeats allowed.
    for (let k = 0; picked.length < 4 && k < d.length; k++) {
      const item = d[(start + k) % d.length];
      if (!picked.includes(item)) picked.push(item);
    }
    return picked;
  }

  // ---------- Rendering ----------
  function photoTag(id, cls) {
    return `<img src="assets/cats/${id}.jpg" alt="" loading="lazy" class="${cls || ''}" onerror="this.remove()">`;
  }
  function iconSVG(key) {
    return `<svg viewBox="0 0 64 64">${TB.ICONS[key] || TB.ICONS.build}</svg>`;
  }
  function teaser(item) {
    if (item.kind === 'idea') return item.data.hook || '';
    return item.data.b || '';
  }
  function title(item) {
    return item.kind === 'idea' ? item.data.name : item.data.n;
  }

  function todayBarHTML(item, index) {
    const s = item.shelf;
    const ref = item.kind === 'idea'
      ? `data-idea="${TB.escapeHtml(item.data.id)}"`
      : `data-spark="${TB.escapeHtml(item.data.n)}"`;
    return `
      <button type="button" class="today-bar" style="--c:${s.c};--cd:${s.cd};" ${ref}
              onclick="Shelf.openFromEl(this)">
        <span class="tb-text">
          <span class="tb-kicker">${TB.escapeHtml(s.name)}</span>
          <span class="tb-title">${TB.escapeHtml(title(item))}</span>
          <span class="tb-teaser">${TB.escapeHtml(teaser(item))}</span>
        </span>
        <span class="tb-photo">
          <span class="tb-glyph">${iconSVG(s.icon)}</span>
          ${photoTag(s.id)}
        </span>
      </button>`;
  }

  function sectionHTML(shelf, count, special) {
    const href = `category.html?c=${encodeURIComponent(shelf.id)}`;
    const noun = shelf.kind === 'idea' || special === 'yours' ? 'idea' : 'spark';
    return `
      <section class="shelf">
        <div class="rtile-list">
          <a href="${href}" class="rtile" style="--c:${shelf.c};--cd:${shelf.cd};">
            <span class="rtile-photo">
              ${special === 'yours' ? '' : photoTag(shelf.id)}
              <span class="rtile-ic">${iconSVG(shelf.icon)}</span>
            </span>
            <span class="rtile-body">
              <span class="rtile-name">${TB.escapeHtml(shelf.name)}</span>
              <span class="rtile-tagline">${TB.escapeHtml(shelf.sub)}</span>
              <span class="rtile-count">${count} ${noun}${count === 1 ? '' : 's'}</span>
            </span>
            <span class="rtile-chev" aria-hidden="true">→</span>
          </a>
        </div>
      </section>`;
  }

  // ---------- Detail modal ----------
  let openSpark = null;

  function openFromEl(el) {
    const ideaId = el.getAttribute('data-idea');
    if (ideaId) { location.href = 'idea.html?id=' + encodeURIComponent(ideaId); return; }
    const name = el.getAttribute('data-spark');
    const spark = (window.SPARKS || []).find(s => s.n === name);
    if (spark) openSparkModal(spark);
  }

  function openSparkModal(spark) {
    const shelf = window.shelfById(spark.c) || { name: 'Spark', c: '#4F46E5', cd: '#3730A3' };
    openSpark = spark;
    const modal = document.querySelector('.cm-modal');
    modal.style.setProperty('--c', shelf.c);
    modal.style.setProperty('--cd', shelf.cd);
    document.getElementById('mKicker').textContent = shelf.name;
    document.getElementById('mTitle').textContent = spark.n;
    document.getElementById('mBody').innerHTML = TB.bodyToHTML(spark.b);
    document.getElementById('mActions').innerHTML = `
      <button class="btn primary-fill" onclick="Shelf.dig()">Dig deeper in chat</button>
      <button class="btn secondary" id="mSave" onclick="Shelf.save()">
        ${TB.isSparkSaved(spark.n) ? 'Saved ✓' : 'Save to my pool'}
      </button>`;
    const ov = document.getElementById('overlay');
    ov.hidden = false;
    requestAnimationFrame(() => ov.classList.add('open'));
  }

  function closeModal() {
    const ov = document.getElementById('overlay');
    ov.classList.remove('open');
    setTimeout(() => { ov.hidden = true; }, 220);
    openSpark = null;
  }

  function dig() {
    if (!openSpark) return;
    const prompt = window.buildSparkPrompt(openSpark);
    const url = 'https://claude.ai/new?q=' + encodeURIComponent(prompt);
    const go = () => window.open(url, '_blank');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(prompt).then(
        () => { TB.toast('Prompt copied. Opening Claude…'); setTimeout(go, 250); },
        go
      );
    } else { go(); }
  }

  // Saving mirrors what spark.html does, so a card saved from a shelf and a
  // card saved from the roulette land in the pool identically.
  function save() {
    if (!openSpark) return;
    if (TB.isSparkSaved(openSpark.n)) { TB.toast('Already in your pool'); return; }
    const shelf = window.shelfById(openSpark.c) || { c: '#4F46E5', cd: '#3730A3' };
    const catMap = { hardware: 'physical', robot: 'physical' };
    const iconMap = { hardware: 'router', robot: 'satellite', ai: 'robot', agent: 'robot', app: 'tablet', life: 'camera' };
    TB.addUserIdea({
      id: TB.uid(),
      name: openSpark.n,
      hook: openSpark.b.split(/(?<=[.!?])\s+/)[0].slice(0, 180),
      category: catMap[openSpark.c] || 'software',
      status: 'Spark — saved for later',
      captured: TB.isoToday(),
      color: shelf.c,
      colorDeep: shelf.cd,
      icon: iconMap[openSpark.c] || 'build',
      body: openSpark.b
    });
    TB.markSparkSaved(openSpark.n);
    const btn = document.getElementById('mSave');
    if (btn) btn.textContent = 'Saved ✓';
    TB.toast('Saved to your pool');
  }

  // Wire the overlay once the page has it.
  document.addEventListener('DOMContentLoaded', () => {
    const ov = document.getElementById('overlay');
    if (!ov) return;
    ov.addEventListener('click', e => { if (e.target === ov) closeModal(); });
    const close = document.getElementById('mClose');
    if (close) close.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !ov.hidden) closeModal(); });
  });

  return { pickForToday, todayBarHTML, sectionHTML, openFromEl, openSparkModal, closeModal, dig, save, seededShuffle, dayNumber };
})();
