// Shelf metadata — one entry per category on the home page and per
// category page. `kind` says which pool the shelf draws from:
//   'idea'  → window.IDEAS filtered by idea.category
//   'spark' → window.SPARKS filtered by spark.c
// Photos live at assets/cats/<id>.jpg and fall back to the gradient +
// icon if missing, so a shelf never renders as a blank bar.

window.SHELVES = [
  // ---- The deep riffs (window.IDEAS) ----
  { id: 'software', kind: 'idea', name: 'Software & AI',
    sub: 'The long riffs. Multi-wave things that run on the Mac mini, the phone, or both.',
    c: '#4A9ED4', cd: '#2D6FA8', icon: 'robot' },
  { id: 'physical', kind: 'idea', name: 'Physical builds',
    sub: 'Hardware we hold in our hands. Wired by default.',
    c: '#C97D2A', cd: '#8A5410', icon: 'router' },
  { id: 'share', kind: 'idea', name: 'Share with community',
    sub: 'Things already built here, packaged up for the wider crowd.',
    c: '#4CCB9F', cd: '#2A8F6A', icon: 'satellite' },

  // ---- The spark bank (window.SPARKS) ----
  { id: 'agent', kind: 'spark', name: 'Agent engineering',
    sub: 'Routines that run while you sleep, fan-out, rubrics, guardrails, evals. All of this is new since the spring.',
    c: '#7C3AED', cd: '#5B21B6', icon: 'robot' },
  { id: 'robot', kind: 'spark', name: 'Robotics',
    sub: 'Arms and rovers you can genuinely build at home now — from about £150 for a pair of arms.',
    c: '#E11D48', cd: '#9F1239', icon: 'satellite' },
  { id: 'ai', kind: 'spark', name: 'Local AI',
    sub: 'Models that run in the house. Voice, vision, search, and the small ones doing the boring work.',
    c: '#0891B2', cd: '#155E75', icon: 'mic' },
  { id: 'hardware', kind: 'spark', name: 'Hardware & the house',
    sub: 'Boards, sensors, screens and the things around the house that could be doing more.',
    c: '#F59E0B', cd: '#B45309', icon: 'router' },
  { id: 'workflow', kind: 'spark', name: 'Workflows',
    sub: 'Pipelines that take something off your hands. Most are one session of work.',
    c: '#4F46E5', cd: '#3730A3', icon: 'satellite' },
  { id: 'app', kind: 'spark', name: 'Apps to build',
    sub: 'Small PWAs and tools. Phone-first, vanilla, on the home screen by the evening.',
    c: '#DB2777', cd: '#9D174D', icon: 'tablet' },
  { id: 'stack', kind: 'spark', name: 'The stack',
    sub: 'Self-hosted things you write yourself rather than install. The plumbing of the house.',
    c: '#0D9488', cd: '#115E59', icon: 'router' },
  { id: 'life', kind: 'spark', name: 'Questions',
    sub: 'Not projects — questions that point at one. Read a few when nothing feels alive.',
    c: '#FF9F3D', cd: '#C97D2A', icon: 'camera' }
];

window.shelfById = function (id) {
  return window.SHELVES.find(s => s.id === id) || null;
};

// Items on a shelf, in the pool's own order.
window.shelfItems = function (shelf) {
  if (shelf.kind === 'idea') {
    let hidden = [];
    try { hidden = (window.TB && TB.loadHiddenSeeds && TB.loadHiddenSeeds()) || []; } catch (e) {}
    const skip = new Set(hidden);
    return (window.IDEAS || []).filter(i => i.category === shelf.id && !skip.has(i.id));
  }
  return (window.SPARKS || []).filter(s => s.c === shelf.id);
};
