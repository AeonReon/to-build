const APP_VERSION = 'v5';
const USER_IDEAS_KEY = 'tobuild.user-ideas';

// ---------- SVG icon library (drops into <svg viewBox="0 0 64 64">) ----------

const ICONS = {
  robot: `
    <g>
      <rect x="14" y="20" width="36" height="30" rx="6" fill="currentColor"/>
      <rect x="18" y="24" width="28" height="22" rx="4" fill="rgba(255,255,255,0.95)"/>
      <circle cx="26" cy="34" r="3" fill="currentColor"/>
      <circle cx="38" cy="34" r="3" fill="currentColor"/>
      <rect x="28" y="40" width="8" height="2" rx="1" fill="currentColor"/>
      <line x1="32" y1="20" x2="32" y2="12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="32" cy="10" r="3" fill="currentColor"/>
      <rect x="10" y="32" width="4" height="10" rx="2" fill="currentColor"/>
      <rect x="50" y="32" width="4" height="10" rx="2" fill="currentColor"/>
    </g>`,
  mic: `
    <g>
      <rect x="26" y="8" width="12" height="28" rx="6" fill="currentColor"/>
      <rect x="29" y="11" width="6" height="22" rx="3" fill="rgba(255,255,255,0.3)"/>
      <path d="M18 30 Q 18 44 32 44 Q 46 44 46 30" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="32" y1="44" x2="32" y2="54" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <line x1="24" y1="54" x2="40" y2="54" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    </g>`,
  satellite: `
    <g>
      <path d="M10 50 L 38 22 L 50 34 L 22 62 Z" fill="currentColor" opacity="0"/>
      <ellipse cx="32" cy="32" rx="22" ry="9" fill="currentColor" transform="rotate(-30 32 32)"/>
      <ellipse cx="32" cy="32" rx="18" ry="6" fill="rgba(255,255,255,0.25)" transform="rotate(-30 32 32)"/>
      <circle cx="42" cy="22" r="3.5" fill="currentColor"/>
      <path d="M42 14 Q 50 14 50 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M42 8 Q 56 8 56 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </g>`,
  camera: `
    <g>
      <rect x="8" y="20" width="48" height="32" rx="5" fill="currentColor"/>
      <rect x="22" y="14" width="20" height="8" rx="2" fill="currentColor"/>
      <circle cx="32" cy="36" r="11" fill="rgba(255,255,255,0.95)"/>
      <circle cx="32" cy="36" r="7" fill="currentColor"/>
      <circle cx="29" cy="33" r="2" fill="rgba(255,255,255,0.6)"/>
      <circle cx="48" cy="26" r="2" fill="rgba(255,255,255,0.7)"/>
    </g>`,
  tablet: `
    <g>
      <rect x="14" y="8" width="36" height="48" rx="4" fill="currentColor"/>
      <rect x="17" y="13" width="30" height="36" rx="2" fill="rgba(255,255,255,0.95)"/>
      <circle cx="32" cy="52" r="2" fill="rgba(255,255,255,0.7)"/>
      <rect x="21" y="18" width="22" height="3" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="21" y="24" width="22" height="3" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="21" y="30" width="16" height="3" rx="1" fill="currentColor" opacity="0.4"/>
    </g>`,
  router: `
    <g>
      <rect x="10" y="32" width="44" height="18" rx="3" fill="currentColor"/>
      <circle cx="20" cy="41" r="2" fill="rgba(255,255,255,0.95)"/>
      <circle cx="28" cy="41" r="2" fill="rgba(255,255,255,0.5)"/>
      <circle cx="36" cy="41" r="2" fill="rgba(255,255,255,0.5)"/>
      <circle cx="44" cy="41" r="2" fill="rgba(255,255,255,0.5)"/>
      <line x1="18" y1="32" x2="18" y2="20" stroke="currentColor" stroke-width="2"/>
      <line x1="46" y1="32" x2="46" y2="20" stroke="currentColor" stroke-width="2"/>
      <path d="M14 16 Q 32 6 50 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
      <path d="M18 20 Q 32 12 46 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.55"/>
    </g>`,
  headphones: `
    <g>
      <path d="M12 32 Q 12 12 32 12 Q 52 12 52 32" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
      <rect x="8" y="30" width="12" height="20" rx="4" fill="currentColor"/>
      <rect x="44" y="30" width="12" height="20" rx="4" fill="currentColor"/>
      <rect x="11" y="34" width="6" height="12" rx="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="47" y="34" width="6" height="12" rx="2" fill="rgba(255,255,255,0.3)"/>
    </g>`,
  drone: `
    <g>
      <circle cx="14" cy="14" r="6" fill="currentColor" opacity="0.85"/>
      <circle cx="50" cy="14" r="6" fill="currentColor" opacity="0.85"/>
      <circle cx="14" cy="50" r="6" fill="currentColor" opacity="0.85"/>
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.85"/>
      <line x1="14" y1="14" x2="50" y2="50" stroke="currentColor" stroke-width="2"/>
      <line x1="50" y1="14" x2="14" y2="50" stroke="currentColor" stroke-width="2"/>
      <rect x="22" y="22" width="20" height="20" rx="4" fill="currentColor"/>
      <circle cx="32" cy="32" r="4" fill="rgba(255,255,255,0.95)"/>
    </g>`,
  phone: `
    <g>
      <rect x="18" y="6" width="28" height="52" rx="5" fill="currentColor"/>
      <rect x="21" y="10" width="22" height="44" rx="2" fill="rgba(255,255,255,0.95)"/>
      <circle cx="32" cy="14" r="1.4" fill="currentColor" opacity="0.6"/>
      <rect x="26" y="50" width="12" height="2" rx="1" fill="currentColor" opacity="0.4"/>
      <circle cx="32" cy="30" r="6" fill="currentColor"/>
      <text x="32" y="34" font-size="9" font-weight="800" text-anchor="middle" fill="white" font-family="-apple-system, sans-serif">AI</text>
    </g>`,
  gift: `
    <g>
      <rect x="10" y="26" width="44" height="28" rx="3" fill="currentColor"/>
      <rect x="10" y="20" width="44" height="8" rx="2" fill="currentColor" opacity="0.85"/>
      <rect x="29" y="20" width="6" height="34" fill="rgba(255,255,255,0.4)"/>
      <path d="M32 20 Q 22 14 22 10 Q 22 6 28 8 Q 32 12 32 20" fill="currentColor"/>
      <path d="M32 20 Q 42 14 42 10 Q 42 6 36 8 Q 32 12 32 20" fill="currentColor"/>
    </g>`,
  plus: `
    <g>
      <circle cx="32" cy="32" r="22" fill="currentColor"/>
      <rect x="29" y="18" width="6" height="28" rx="2" fill="rgba(255,255,255,0.95)"/>
      <rect x="18" y="29" width="28" height="6" rx="2" fill="rgba(255,255,255,0.95)"/>
    </g>`,
  spark: `
    <g>
      <polygon points="32,6 36,26 56,30 36,34 32,54 28,34 8,30 28,26" fill="currentColor"/>
      <polygon points="32,12 34,26 48,30 34,34 32,46 30,34 16,30 30,26" fill="rgba(255,255,255,0.4)"/>
    </g>`,
  build: `
    <g>
      <rect x="16" y="8" width="32" height="48" rx="3" fill="currentColor"/>
      <rect x="19" y="11" width="26" height="42" rx="2" fill="rgba(255,255,255,0.95)"/>
      <rect x="23" y="17" width="18" height="3" rx="1" fill="currentColor" opacity="0.5"/>
      <rect x="23" y="23" width="14" height="3" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="23" y="29" width="18" height="3" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="23" y="35" width="12" height="3" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="23" y="41" width="16" height="3" rx="1" fill="currentColor" opacity="0.4"/>
      <circle cx="22" cy="6" r="2.5" fill="currentColor" opacity="0.7"/>
    </g>`,
  trash: `
    <g>
      <rect x="14" y="18" width="36" height="6" rx="1" fill="currentColor"/>
      <rect x="20" y="14" width="24" height="6" rx="2" fill="currentColor" opacity="0.7"/>
      <path d="M18 24 L 22 56 L 42 56 L 46 24 Z" fill="currentColor" opacity="0.85"/>
      <line x1="26" y1="30" x2="26" y2="50" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
      <line x1="32" y1="30" x2="32" y2="50" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
      <line x1="38" y1="30" x2="38" y2="50" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
    </g>`
};

// ---------- Storage helpers ----------

function loadUserIdeas() {
  try {
    const raw = localStorage.getItem(USER_IDEAS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}
function saveUserIdeas(arr) {
  try { localStorage.setItem(USER_IDEAS_KEY, JSON.stringify(arr)); } catch {}
}
function addUserIdea(idea) {
  const arr = loadUserIdeas();
  arr.unshift(idea);
  saveUserIdeas(arr);
}
function deleteUserIdea(id) {
  saveUserIdeas(loadUserIdeas().filter(i => i.id !== id));
}
function findIdea(id) {
  const seed = (window.IDEAS || []).find(i => i.id === id);
  if (seed) return { ...seed, _seed: true };
  const user = loadUserIdeas().find(i => i.id === id);
  return user ? { ...user, _seed: false } : null;
}
function allIdeas() {
  return [...loadUserIdeas(), ...(window.IDEAS || [])];
}

function uid() {
  return 'u-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
function isoToday() {
  return new Date().toISOString().slice(0, 10);
}
function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch { return iso; }
}

// ---------- Render helpers ----------

function tileIconSVG(iconKey) {
  return `<svg viewBox="0 0 64 64" class="tile-icon">${ICONS[iconKey] || ICONS.build}</svg>`;
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}
function bodyToHTML(body) {
  return body.split(/\n\n+/).map(p => `<p>${escapeHtml(p)}</p>`).join('');
}

// ---------- Toast ----------

function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 1800);
}

// ---------- Page chrome ----------

function renderHomeLink() {
  const here = (location.pathname.split('/').pop() || 'index.html');
  if (here === 'index.html' || here === '') return;
  document.body.insertAdjacentHTML('afterbegin', '<a href="index.html" class="home-link">← Ideas</a>');
}
function renderVersionPill() {
  document.body.insertAdjacentHTML('beforeend', `<div class="version-pill">${APP_VERSION}</div>`);
}
function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderHomeLink();
  renderVersionPill();
  registerSW();
});

window.TB = { ICONS, loadUserIdeas, saveUserIdeas, addUserIdea, deleteUserIdea, findIdea, allIdeas, uid, isoToday, fmtDate, tileIconSVG, escapeHtml, bodyToHTML, toast };
