// Sparks — a curated bank of general patterns I see makers/indie-hackers running,
// plus life-area prompts to stimulate ideas when the well is dry.
//
// Rules for entries:
//   - General patterns, no one's private setup
//   - Specific enough to spark something concrete
//   - Each has a `prompt` that opens a fresh Claude chat already framed
//
// Categories:
//   workflow   — multi-step pipelines / agents people are chaining
//   stack      — tool combos / self-hosted stacks
//   app        — app patterns worth knowing exist
//   hardware   — physical builds / Pi/ESP/sensors
//   ai         — LLM-era workflows on personal data
//   life       — life-area prompts (no name, just a question to chew on)

window.SPARKS = [

  // ---------- workflow ----------
  { c: 'workflow', n: 'Inbox-as-task-queue agent', b: 'A background agent watches one email folder, files invoices, extracts dates and totals into a sheet, drafts replies to known senders, and surfaces only the unknowns. People who used to spend an hour on email run it in fifteen minutes.' },
  { c: 'workflow', n: 'Voice memo → blog post pipeline', b: 'Phone records a voice memo on a walk, an overnight job transcribes with Whisper, an LLM passes it into the writer\'s house style, the draft lands in a drafts folder for morning edit. The walk replaces the desk.' },
  { c: 'workflow', n: 'Read-it-later → digest', b: 'Anything saved across the day (links, screenshots, audio) lands in one bucket. Once a week a digest summarises what\'s in there, groups by theme, surfaces the three worth re-reading. Stops the saved-and-forgotten pile.' },
  { c: 'workflow', n: 'Calendar → daily brief', b: 'Each morning a job reads the calendar, the weather, the inbox, and the open tabs left over from yesterday, and posts a one-page brief to a phone PWA. No app to open — the page is just there.' },
  { c: 'workflow', n: 'Photo → searchable journal', b: 'Camera roll auto-syncs to a private folder, vision model captions each shot, captions go into a searchable journal. Six months later you ask "that café in Lisbon with the green door" and find it.' },
  { c: 'workflow', n: 'Receipt photo → ledger', b: 'Snap any paper receipt, vision model extracts vendor + total + category, the line lands in a spreadsheet. Tax-time prep collapses to a couple of evenings.' },
  { c: 'workflow', n: 'Whisper-as-second-brain', b: 'A wearable mic records ambient conversation only when triggered by a wake word, transcribes locally, indexes the day. Searchable "what did the plumber say about the pressure valve?" two weeks later.' },
  { c: 'workflow', n: 'Cross-device clipboard', b: 'Your own tiny relay so anything copied on the phone is paste-able on the Mac thirty seconds later, and vice versa. No third-party Universal Clipboard, no Apple lock-in. A REST endpoint and a menubar app.' },

  // ---------- stack ----------
  { c: 'stack', n: 'Personal app launcher / shelf', b: 'A private home page that lists every web app you use, your own and others, with PIN-gated trust circles for ones only friends/family see. Replaces the messy bookmark folder. Doubles as a one-tap PWA installer for phones in the house.' },
  { c: 'stack', n: 'Trust-circle PWA store', b: 'A shelf you can hand to a friend, a sibling, a client. They install five web apps you built or curated in one tap each. Becomes how your circle gets software, not the App Store.' },
  { c: 'stack', n: 'Mobile-as-monitor over USB', b: 'Old phone or tablet becomes a second screen for the Mac, USB-tethered, no cloud, no telemetry. Useful for an e-ink secondary display for reading code or text while the bright screen does the work.' },
  { c: 'stack', n: 'Tailscale + self-hosted everything', b: 'WireGuard mesh ties your phone, your Mac, your Pi, and the home server together as if they were on the same LAN. From the phone you SSH home like you\'re sitting in front of it. Cloudflare tunnels for public services, Tailscale for private.' },
  { c: 'stack', n: 'Pi-hole + DNS-over-HTTPS gateway', b: 'A £40 box in front of the router blocks ads, trackers, telemetry for every device in the house including the smart TV that "needs" internet. DNS-over-HTTPS upstream so the ISP can\'t see what you queried.' },
  { c: 'stack', n: 'Hugo + tiny git-backed CMS', b: 'A static site you can edit from the phone via a one-page admin. No WordPress, no database, no plugin updates breaking at 11pm. The whole site backs up to git automatically.' },
  { c: 'stack', n: 'n8n + a Postgres + a domain', b: 'A self-hosted automation hub on a £6/month VPS. Hundreds of integrations, your data on your box. Zapier without the per-task pricing or the third party reading your traffic.' },
  { c: 'stack', n: 'Local-first sync with CRDTs', b: 'Yjs or Automerge as the brain — every device has the whole document, edits merge automatically, no server needed for sync. Notes / todos / journals that work offline first and never lose data.' },
  { c: 'stack', n: 'Caddy + a list of subdomains', b: 'One config file maps yourname.com/* to whatever\'s running locally. Automatic HTTPS, zero hand-rolled nginx. Spin up a new tool, add a line, it\'s live in thirty seconds.' },
  { c: 'stack', n: 'PocketBase as the backend', b: 'A single binary that\'s your auth + database + file storage + realtime API for any small app. Ships as one .exe-style file. Five-minute setup, no devops.' },

  // ---------- app ----------
  { c: 'app', n: 'Shared family inbox', b: 'A small PWA where every member of a household drops messages, photos, and to-dos for the household — bills due, school reminders, broken-thing list. Becomes the family\'s shared brain. Notifications optional.' },
  { c: 'app', n: 'Voice-first journaling', b: 'Tap once, talk for two minutes, the app transcribes, tags the entry by mood/topic, and surfaces patterns across weeks. A journal that doesn\'t require sitting down to type.' },
  { c: 'app', n: 'Personal "weekly review" PWA', b: 'Five questions every Sunday — what worked, what didn\'t, what\'s next. The app saves answers and shows the same week last year alongside. Builds the only feedback loop most lives don\'t have.' },
  { c: 'app', n: 'Read-aloud reader for own writing', b: 'Drop in a draft, hear it back in a voice you can stand. Catches the rhythm problems eyes miss. Local TTS (Kokoro, Piper) — no API cost, no internet.' },
  { c: 'app', n: 'Habit grid that survives misses', b: 'Seven days a row turn green for the habit. Miss a day, the grid keeps going — no shame, no resetting streaks to zero. Designed for the seventh attempt at the thing, not the first.' },
  { c: 'app', n: 'Personal place directory', b: 'A private map of every café, walk, soft play, restaurant, viewpoint, garage you actually like. Searchable, shareable as a link with friends. Beats Google Maps for your top fifty places.' },
  { c: 'app', n: 'Local recipe vault with voice + QR share', b: 'A cookbook PWA that\'s yours, not Bon Appétit\'s. Voice input while cooking, QR-share between phones, merges new entries by name. The phone-as-second-cookbook problem solved.' },
  { c: 'app', n: 'Children\'s game/learning PWA', b: 'A single-purpose app that teaches one thing well — letters, counting, scissors-paper-rock, blends — without ads, IAPs, or "wait 30 minutes for energy". The web platform is enough.' },
  { c: 'app', n: 'PDF → audio booklet', b: 'Drop a PDF in, get an audio file out, voiced by Kokoro or your own clone. Walks become reading time. The Pocket / Audm experience but yours.' },
  { c: 'app', n: 'Sun-minute tracker', b: 'Logs the day\'s actual minutes of sun and re-frames the week. Apple Weather tells you it\'s a rainy week. Your own tracker tells you the truth — and beats the perception bias.' },
  { c: 'app', n: 'Skill / app submission inbox', b: 'A small admin tool where friends can submit a web app for your trust-circle shelf. Quarantine + a quick scan + your approve/reject. Crowd-sources the catalogue without losing the gate.' },

  // ---------- hardware ----------
  { c: 'hardware', n: 'ESP32 e-ink dashboard', b: 'A £30 board + a £20 e-ink screen + a 3D-printed frame on the wall. Today\'s calendar, the kid\'s timetable, the weather, the bins schedule. Boots, refreshes, sleeps. Months on a battery.' },
  { c: 'hardware', n: 'Pi Zero as wired MP3 player', b: 'A purpose-built music/audiobook device, radios disabled, runs from an SD card. Walks, runs, plane trips without a phone in your pocket. £80 of parts.' },
  { c: 'hardware', n: 'Reterminal-as-control-panel', b: 'Seeed Reterminal — a Pi inside a touchscreen box with buttons — as the dashboard for the home or workshop. Custom Python app, no cloud, no Alexa. The "panel on the wall" feeling without Home Assistant\'s sprawl.' },
  { c: 'hardware', n: 'Tello EDU drone testbed', b: '£100 programmable drone, Python SDK, point-to-point wifi, multi-drone swarm support, fragile but cheap to crash. Proves the workflow before any expensive drone enters the conversation.' },
  { c: 'hardware', n: 'Weather station Pi + sensors', b: 'A small box on a fence post with temperature, humidity, pressure, soil moisture sensors. Sends to a dashboard on the home server. The garden gets its own data history.' },
  { c: 'hardware', n: 'Self-hosted security camera', b: 'An old phone running Haven sends encrypted alerts to your daily phone when motion / sound / movement is detected. No subscription, no cloud, no third-party servers watching the house.' },
  { c: 'hardware', n: 'GL.iNet travel router with WireGuard', b: 'A £50 pocket-sized router. Plug into any hotel wifi, your devices connect to it, all traffic tunnels back to home. Hotel networks see one device, see encrypted traffic, see nothing useful.' },
  { c: 'hardware', n: 'NVMe-on-USB external SSD as second drive', b: 'A £60 NVMe in an enclosure on USB-C. 2TB at 1GB/s without buying a new Mac. Move iCloud Photos, the Documents folder, the heavy data here, keep the internal disk lean.' },
  { c: 'hardware', n: 'KOReader on an old e-reader', b: 'Strip the Kindle/Kobo software, install KOReader, point at your own library on the home server via WebDAV. No Amazon, no telemetry, supports every format, syncs reading position between devices.' },
  { c: 'hardware', n: 'Wired pan-tilt camera at the gate', b: 'A Pi + a servo bracket + a small camera. PoE-powered so one cable runs both video and power. Triggers a wired alert when motion crosses a line.' },

  // ---------- ai ----------
  { c: 'ai', n: 'Personal Whisper transcription pipeline', b: 'Drop any audio in, get a transcript out, all local. The Mac mini runs it overnight. Family voice notes, podcast clips, interviews — searchable forever, no third-party hearing it.' },
  { c: 'ai', n: 'RAG over personal notes', b: 'Every note, every email, every PDF you\'ve written or saved, indexed into a local vector DB. Ask "what did I write about routers in 2024" and get the relevant paragraphs with sources. Your own memory, searchable.' },
  { c: 'ai', n: 'Local LLM as command-line agent', b: 'LM Studio or Ollama at the back, a thin CLI at the front, file-system access scoped to a working dir. The everyday "rename these files / extract this CSV / draft this email" tasks done without an API key.' },
  { c: 'ai', n: 'Read-aloud cloned voice for own books', b: 'A 20-minute recording in a quiet room gives a model trained on your voice. From then on every book you write can be read in your own voice. Free, offline, yours.' },
  { c: 'ai', n: 'Code-aware grep across own repos', b: 'Vector-indexed search across every repo you\'ve ever written. "Where did I solve the iOS PWA cache problem before?" — the snippet comes back with the repo and the file.' },
  { c: 'ai', n: 'Embeddings over the Forge itself', b: 'Index every entry in this very pool, then on a quiet day ask "what idea would compose nicely with the home router project?" — the model surfaces the two adjacent ones you forgot you wrote down.' },
  { c: 'ai', n: 'Auto-summary of long browser sessions', b: 'Browser extension drops every page you read for more than thirty seconds into a daily folder. Overnight an LLM summarises by topic, surfaces the three pages worth re-reading.' },
  { c: 'ai', n: 'Image search over personal photo library', b: 'CLIP embeddings over the camera roll. Search "kid on bike with helmet" and the photo comes back. Local, no Google Photos, no Apple Cloud.' },

  // ---------- life prompts (no idea name — just a question to chew on) ----------
  { c: 'life', n: 'Where does the day leak?', b: 'Walk through yesterday minute by minute. Where did time go and feel wasted? What single small tool would have closed that leak? Build that.' },
  { c: 'life', n: 'What\'s the boring thing you do every week?', b: 'List the repeated weekly chores — invoicing, shopping list, kid handover, laundry rotation. Pick the one that takes the most thinking. Automate the thinking part.' },
  { c: 'life', n: 'Whose advice did you re-Google this year?', b: 'Whose blog / videos / books did you look up more than twice? That\'s a private library you should mirror so it\'s on your machine, not theirs. Build the reader for it.' },
  { c: 'life', n: 'What did you stop doing because the tool got worse?', b: 'A practice that died because the app changed for the worse — old RSS reader, old notes app, old podcast app. Could you rebuild a stripped version that does just the one thing you missed?' },
  { c: 'life', n: 'What do friends keep asking you to set up?', b: 'The thing your friends ask you to help them install or configure repeatedly — that\'s a shippable product. Package it. Even free is fine. People share what they didn\'t have to think about.' },
  { c: 'life', n: 'What do you keep almost paying for?', b: 'Hovering over a paid SaaS three months in a row means the need is real. The build is almost always cheaper than three years of subscription. Build it.' },
  { c: 'life', n: 'What would the household run on if the internet died?', b: 'Map the apps the house depends on. Which ones break the moment the connection goes? Build offline-first replacements for the critical few. Recipe vault, family inbox, calendar, lists.' },
  { c: 'life', n: 'What do you wish you\'d known about earlier?', b: 'Think of an existing build of yours that saved hours. Write the version of it that explains what it does to someone six months ago. That\'s the launch post / the friend handoff / the next product.' },
  { c: 'life', n: 'Which body of work do you want to leave behind?', b: 'In five years, what should there be a folder of, with your name on it? Sketch the smallest version that could go online this month. Start it tonight.' },
  { c: 'life', n: 'What\'s one device in the house you don\'t fully own?', b: 'Pick the device — TV, fridge, doorbell, watch, car — that phones home most. What would the wired / local / yours-only version look like? Sketch it.' },
  { c: 'life', n: 'What private library wants surfacing?', b: 'You\'ve probably collected something for years — bookmarks, screenshots, quotes, recipes, photos of book pages, voice notes. None of it is searchable. Build the surface.' },
  { c: 'life', n: 'Where do you keep retyping the same thing?', b: 'Email greetings, address blocks, invoice line items, common code snippets. Anything you type the same way more than five times a week is a snippet system waiting to exist.' },
  { c: 'life', n: 'What does the next ten years of your craft need?', b: 'Pick the practice you want to keep doing for a decade. What rig / library / archive would you wish past-you had built so future-you can fly? Build that, in miniature.' }

];

// Prompt builder — what gets opened in a fresh Claude chat when "Dig deeper" is tapped.
window.buildSparkPrompt = function (spark) {
  if (spark.c === 'life') {
    return `I want to use this question as a starting point for a new project idea.

Question: "${spark.n}"
Prompt: ${spark.b}

Walk me through how this applies to my setup — Mac mini always-on, BOOX as primary device, free/local-first defaults, existing apps in APPS/ — and help me sketch one concrete project I could ship in 1–3 sessions.`;
  }
  const labelMap = {
    workflow: 'workflow / pipeline',
    stack: 'stack / tool combo',
    app: 'app pattern',
    hardware: 'hardware project',
    ai: 'AI-era workflow'
  };
  const label = labelMap[spark.c] || 'pattern';
  return `I want to dig into this ${label} as a possible project for me:

${spark.n}
${spark.b}

Walk me through how this would actually look for my setup — free/local-first defaults, Mac mini always-on, AeonReon GitHub + Vercel pipeline, existing apps in APPS/. Concrete shape, parts list if hardware, sequencing, what to ship in the first session.`;
};
