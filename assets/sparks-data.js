// Sparks — a curated bank of engineering projects you can program in Claude Code.
//
// Rules for entries:
//   - It must be something you BUILD (write code, wire hardware, design a custom thing).
//     Install-and-configure-only items don't qualify.
//   - Specific enough to spark recognition.
//   - £0-£500 range, fun and tangible.
//   - Each has a `prompt` that opens a fresh Claude chat already framed.
//
// Categories:
//   hardware   — Pi / ESP32 / M5Stack / sensors / custom devices (the bread and butter)
//   ai         — local LLM projects, often paired with hardware
//   workflow   — programmable pipelines and agents
//   app        — buildable PWAs / CLIs / small tools
//   stack      — code-heavy custom self-host (not just "install X")
//   life       — questions that point at a specific build (no philosophy)

window.SPARKS = [

  // ---------- hardware ----------
  { c: 'hardware', n: 'ESP32 e-ink dashboard', b: 'A £30 board + a £20 e-ink screen + a 3D-printed frame on the wall. Today\'s calendar, the kid\'s timetable, the weather, the bins schedule. Boots, refreshes, sleeps. Months on a battery. You write the firmware and the layout engine.' },
  { c: 'hardware', n: 'Pi Zero wired MP3 player', b: 'A purpose-built music/audiobook device, radios disabled, runs from an SD card. Walks, runs, plane trips without a phone in your pocket. £80 of parts. You write the player, the playlist engine, and the four-button UI.' },
  { c: 'hardware', n: 'Tello EDU drone testbed', b: '£100 programmable drone, Python SDK, point-to-point wifi, multi-drone swarm support, fragile but cheap to crash. You code the patrol patterns, the safety stop, the swarm orchestration. The path to drone-from-roof starts here.' },
  { c: 'hardware', n: 'ESP32 RFID door lock', b: 'A cheap solenoid lock + an RC522 RFID reader + an ESP32 + a web admin you code. Tap a fob, the door opens, the event logs. £40 of parts. Family fobs you provision yourself, no Yale account in the cloud.' },
  { c: 'hardware', n: 'Pi cyberdeck', b: '7" HDMI screen + mechanical keyboard + Pi 5 + 3D-printed clamshell case. £200 total. Your custom launcher boots first. A keyboard-and-screen tool that runs your code, not Apple\'s OS.' },
  { c: 'hardware', n: 'ESP32-CAM wildlife camera', b: '£15 board with built-in camera + battery + weatherproof box on the fence. You write the motion-detect, the SD-card image rotation, the daily ntfy summary. The badger / fox / cat in the garden becomes a private timelapse.' },
  { c: 'hardware', n: 'Pi + LED matrix desk display', b: 'A 16x32 RGB LED panel + a Pi Zero + your code. Clock by default; weather, pomodoro, build-status, the kid\'s school-day countdown on demand. £40, infinite reuse, every byte is yours to draw.' },
  { c: 'hardware', n: 'ESP32 RC car with browser control', b: 'A £15 chassis + an ESP32 + a small camera. The ESP becomes a Wi-Fi access point, your phone connects, a browser page you wrote drives the car with live FPV. £50 of parts, a Saturday\'s work.' },
  { c: 'hardware', n: 'Pi Zero portable Whisper recorder', b: 'A button, a USB mic, an OLED display, a 3D-printed case. Press button, talk, release. Whisper.cpp transcribes locally on the Zero 2 W. Notes filed to your home server when it gets back on Wi-Fi.' },
  { c: 'hardware', n: 'Tello drone patrol script', b: 'Same drone as the testbed, but pointed at a specific job: GPS waypoint patrol of the property, log + photo per stop, return-to-home, write the flight log to your server. The first agent that has wings.' },
  { c: 'hardware', n: 'ESP32 BLE-to-MQTT bridge', b: 'Cheap BLE thermometer, BLE scale, BLE soil probe — any of them streamed to your dashboard via an ESP32 you code as a bridge. £8 turns disposable IoT into yours-forever data.' },
  { c: 'hardware', n: 'Pi retro game handheld', b: 'A small screen + buttons + Pi Zero 2 W + 3D-printed shell + RetroPie. You write the launcher, the rom organiser, the save-state sync to your home server. £120, six evenings.' },
  { c: 'hardware', n: 'Pi camera + Python motion trap', b: 'A Pi NoIR camera in the garden box. You write the timelapse, the motion-trigger, the night-vision tuning. The "what is moving through the garden at 3am" question gets a directory of answers.' },
  { c: 'hardware', n: 'ESP32 sunrise lamp', b: 'A WS2812 LED strip + an ESP32 + your firmware. Programmable fade from warm dim to full sunlight on the schedule you write. £30 replaces a £100 Lumie lamp and lets you customise everything.' },
  { c: 'hardware', n: 'M5Stack notification badge', b: 'A wearable-sized board with screen, buttons, Wi-Fi, battery. You write the firmware: it pulls notifications from your ntfy topics and shows the next thing you should look at. The non-doom-scroll wearable.' },
  { c: 'hardware', n: 'Pi 5 home AI box', b: 'Pi 5 + a small speaker + a USB mic + Ollama running a small Llama. You write the wake-word + voice-in + voice-out + house-rules system prompt. £200 = a local assistant that never phones home.' },
  { c: 'hardware', n: 'Pi-KVM remote machine control', b: 'A Pi + an HDMI capture dongle + a USB-OTG cable hooked to another machine. You build the web UI. Control any computer from anywhere through a browser. Replaces commercial KVMs.' },
  { c: 'hardware', n: 'ESP32 bike GPS tracker', b: 'A GPS module + an ESP32 + a small battery, mounted under the bike seat. Logs routes to SD card; uploads when home Wi-Fi reaches it. You code the logger, the GPX export, the heatmap viewer.' },
  { c: 'hardware', n: 'Raspberry Pi Pico macro pad', b: 'A £5 Pico + a row of mechanical keys + your QMK or CircuitPython firmware. Six keys become "open standup notes", "play focus playlist", "log a minute", "send house alert". Muscle memory finally pays off.' },
  { c: 'hardware', n: 'ESP32 weather-driven mood lamp', b: 'LED strip + ESP32 + your code reading the OpenWeather API every 10 minutes. The lamp colour reflects the current sky over your house — warm at sunset, blue at dusk, white at midday. Ambient awareness for £30.' },
  { c: 'hardware', n: 'Pi + GPIO bedtime story player', b: 'Five big arcade buttons + a small speaker + a Pi Zero + your audio library. Each button plays a different story in your own voice (or the grandparents\'). Kids press, story plays. £80, weekend build.' },
  { c: 'hardware', n: 'ESP32 thermal printer', b: 'A £20 thermal till-roll printer + an ESP32 + your firmware. Print shopping lists, daily todos, kids\' chore cards, a sticky note from your phone. The "paper output for the digital life" you didn\'t know you wanted.' },
  { c: 'hardware', n: 'Pi as 3D printer wifi controller', b: 'Klipper + Moonraker on a Pi attached to a 3D printer. You write the custom mobile dashboard, the print-queue UI, the camera-overlay timelapse. Replaces Octoprint\'s clutter with something tuned for you.' },
  { c: 'hardware', n: 'Weather station Pi + sensors', b: 'A small box on a fence post with temperature, humidity, pressure, soil moisture sensors. You write the collector, the Pi-side aggregator, the dashboard. The garden gets its own data history, separate from any commercial service.' },
  { c: 'hardware', n: 'Reterminal control panel', b: 'Seeed Reterminal — a Pi inside a touchscreen box with buttons — as the dashboard for the home, workshop or shed. Your custom Python app, no cloud, no Alexa. £180 box + ~10 hours of code = the panel-on-the-wall.' },
  { c: 'hardware', n: 'Wired pan-tilt PoE camera', b: 'A Pi + a servo bracket + a small camera, PoE-powered so one cable runs both video and power. You code the motion-tracking loop and the wired trigger from a reed-switch at the gate.' },
  { c: 'hardware', n: 'Pi NAS for the household', b: 'A Pi 5 + two USB-3 SSDs in mirror config + your custom dashboard for the family\'s photos, documents, backups. You write the backup runner, the access policy, the simple browse UI. £180 total.' },
  { c: 'hardware', n: 'Old laptop as home server', b: 'A ten-year-old MacBook or ThinkPad, lid closed, running Linux. You write the small set of services that turn it into "the house\'s brain" — file share, photo mirror, podcast catcher, build runner. £0 hardware, fun set-up.' },
  { c: 'hardware', n: 'ESP32 garden moisture probe', b: 'A £8 board + a capacitive soil sensor + a battery + your firmware. Pings ntfy when soil dries below a threshold you code. Tomatoes and herbs get watered before they wilt. Battery lasts a season.' },
  { c: 'hardware', n: 'ESP32 mailbox sensor', b: 'A magnetic reed switch on the mailbox door + an ESP32 + your firmware. Wakes on door-open, sends an ntfy alert with timestamp. "Post arrived" lights up your phone. £15 of parts, an evening of code.' },
  { c: 'hardware', n: 'ESP32 doorbell + local capture', b: 'A button + an ESP32 + a small camera + your firmware. Press → photo + ntfy notification with the photo attached. £25 replaces a £180 Ring doorbell with no subscription and no Amazon eyeball.' },
  { c: 'hardware', n: 'Pi as digital photo frame', b: 'A Pi + an old monitor + a USB drive of family photos + your custom slideshow code. Random photo every 30 seconds, with date and rough location overlay if EXIF allows. Always-on, no cloud sync of faces.' },
  { c: 'hardware', n: 'Magic Mirror Pi for the hall', b: 'An old monitor behind a two-way mirror + a Pi + your custom modules (not stock MagicMirror² — your own). Today\'s calendar, weather, kids\' timetable, train delays. The 6:45 a.m. dashboard you\'ll actually read.' },
  { c: 'hardware', n: 'ESP32 plant-watering rig', b: 'A peristaltic pump + a moisture sensor + an ESP32 + your firmware. The plant waters itself when you forget. Build once, never lose another houseplant. £25 of parts.' },
  { c: 'hardware', n: 'E-paper clock + calendar', b: 'A 7" tri-colour e-ink panel + an ESP32 + a battery + your firmware. Today\'s calendar plus the time, refreshed hourly. Months on a charge. The bedside clock for people sick of phones.' },
  { c: 'hardware', n: 'Pi music server with Snapcast', b: 'One Pi runs the library; Snapcast clients in every room play in sync. You write the queue manager, the family-favourites algorithm, the "everyone\'s home" dinner mode. £150 plus the room speakers you already own.' },
  { c: 'hardware', n: 'USB-C dock with custom HID', b: 'A QMK-powered macropad in the corner of the desk — six keys, each a complex action you code. £40 of parts + a firmware file. Saves a hand-walk to the keyboard fifty times a day.' },
  { c: 'hardware', n: 'Pi podcast catcher', b: 'A small Pi subscribes to your podcast list and downloads new episodes to a private feed on your home server. You write the curator (skip if title contains X, prefer episodes under 30 min, etc.). Episodes never disappear.' },
  { c: 'hardware', n: 'Pi as DIY VPN endpoint', b: 'A Pi at home running WireGuard. You write the install script, the per-device key generator, the QR-code presenter. Travel anywhere with phone or laptop, everything tunnels home. No paid VPN.' },
  { c: 'hardware', n: 'ESP32 desk presence sensor', b: 'An ESP32 + a PIR or mmWave sensor + your firmware. Knows when you\'re sitting at the desk. Auto-mutes notifications, switches the LED bar to focus mode, logs working hours. £15 of ambient intelligence.' },
  { c: 'hardware', n: 'Pi air-quality monitor', b: 'A Pi + a PM2.5 sensor + a CO2 sensor + your dashboard. The day you discover the bedroom is at 1800ppm CO2 is the day you change how you sleep. £80 of parts; you code the alerts.' },
  { c: 'hardware', n: 'ESPHome flashed cheap plugs', b: 'Cheap Tuya smart plugs flashed with ESPHome. You write the device configs, the schedule logic, the local automations. Removes the "phones China every minute" tax from £8 plugs.' },
  { c: 'hardware', n: 'Carputer with a Pi', b: 'A Pi in the dashboard + a small touchscreen + your custom dashboard PWA. Music, maps, dash-cam mode, the journey log. The 2008 car becomes a 2025 car for £200, with no carmaker in the loop.' },
  { c: 'hardware', n: 'GLAMP 12V system for the shed', b: 'LiFePO4 battery + MPPT solar + Victron Connect over Bluetooth. Wire it up and write the small Python script that logs state-of-charge to your home server. The shed / camper / workshop runs without a meter reading.' },
  { c: 'hardware', n: 'ESP32 NFC family check-in', b: 'A small NFC reader by the front door, each family member has a tag in their key fob. Tap on the way in/out and the household-presence board updates. You write the firmware and the dashboard.' },

  // ---------- ai ----------
  { c: 'ai', n: 'Personal Whisper transcription pipeline', b: 'Drop any audio in, get a transcript out — all local. You write the watcher, the segmenter, the speaker-diarisation pass. Family voice notes, podcast clips, interviews — searchable forever, no third-party hearing it.' },
  { c: 'ai', n: 'RAG over personal notes', b: 'Every note, every email, every PDF you\'ve written, indexed into a local vector DB. You code the indexer, the embedding job, the search UI. Ask "what did I write about routers in 2024" and get the paragraphs with sources.' },
  { c: 'ai', n: 'Local LLM as command-line agent', b: 'LM Studio or Ollama at the back, a thin CLI at the front, file-system access scoped to a working dir. You write the harness, the safe-action rules, the prompt templates. "rename these files / extract this CSV / draft this email" without an API key.' },
  { c: 'ai', n: 'Voice-cloned read-aloud for own books', b: 'A 20-minute recording in a quiet room trains a Chatterbox or XTTS model on your voice. You wire up the inference server and a tiny PWA that turns any text into audio in that voice. Free, offline, yours.' },
  { c: 'ai', n: 'Code-aware grep across own repos', b: 'A vector index of every repo you\'ve ever written. You build the indexer, the search CLI, the result ranker. "Where did I solve the iOS PWA cache problem before?" — the snippet returns with repo + file.' },
  { c: 'ai', n: 'Embeddings over the Forge / Ideas pool', b: 'Index every entry in this pool. On a quiet day ask "what idea would compose with the home router project?" — the model surfaces the two adjacent ones you forgot you wrote. You write the indexer and the compose-query UI.' },
  { c: 'ai', n: 'Browser-session summariser', b: 'A browser extension drops every page you read for >30 seconds into a daily folder. Overnight, your code summarises by topic, surfaces the three pages worth re-reading. You build both halves.' },
  { c: 'ai', n: 'CLIP image search over camera roll', b: 'You write the indexer (CLIP embeddings on every photo), the search UI, the watcher for new photos. Search "kid on bike with helmet" and the photo comes back. Local, no Google Photos, no Apple Cloud.' },
  { c: 'ai', n: 'Voice clone of grandparent', b: 'Twenty minutes of voice — recoverable from old videos, voicemails, family recordings — trains a local model. You write the trainer, the storybook-reader interface, the safety guards. Bedtime stories in their voice for the grandkids.' },
  { c: 'ai', n: 'Local OCR of paper notes', b: 'Scan a box of notebooks, run PaddleOCR locally, build the searchable archive. You write the scanner-watcher, the OCR pass, the search UI. Twenty years of journal pages become queryable.' },
  { c: 'ai', n: 'Talk to your past self', b: 'Index a decade of journals into a RAG system. You build the indexer, the chat UI, the date-range filter. Ask "what was I worried about in March 2018" and get the entries verbatim. Perspective therapy.' },
  { c: 'ai', n: 'Phone notification triage agent', b: 'A small local model decides which notifications buzz, which silently log, which get summarised once a day. You write the rules engine + the small LLM caller + the daily digest. Your attention defended without a SaaS in the loop.' },
  { c: 'ai', n: 'Kid-safe local voice queries', b: 'Ollama on a Pi 5 + a small speaker + a mic + your kid-safe system prompt. "Why is the sky blue" without it phoning home to Google or being mined for ads. You build the wake-word, the speech-in, the speech-out.' },
  { c: 'ai', n: 'Podcast → bullets summariser', b: 'A 90-minute podcast becomes a 60-second-read bullet list with timestamps. You write the audio-in pipeline, the segmentation, the summariser prompt. Reacquire the time you used to lose to long episodes.' },
  { c: 'ai', n: 'Local LLM news brief from RSS', b: 'Read your RSS feeds with a local LLM, produce a one-page morning briefing with bias flags ("4 of 5 sources from same group"). You code the fetcher, the dedup, the bias-tag layer, the morning-page renderer.' },
  { c: 'ai', n: 'Voice → email draft', b: 'Speak the gist, a local LLM polishes into the recipient\'s register (warm/blunt/formal — which you set per contact). You write the recorder, the register-picker, the draft handler. The fastest reply pipeline you\'ve owned.' },
  { c: 'ai', n: 'Live meeting note-taker', b: 'Audio in → live transcript on a side panel → end-of-meeting minutes with action items. You build the local Whisper rig + the small summariser. Zero subscription, no third-party recording your meetings.' },
  { c: 'ai', n: 'Local resume tailoring engine', b: 'Paste a job description, a local LLM produces a tailored CV emphasising the right past projects. You write the projects-bank, the prompt, the diff-viewer. Unreleased work stays private.' },
  { c: 'ai', n: 'Local LLM as debugger', b: 'Paste a stack trace into your local model, get hypotheses ranked. You build the diagnostic prompt, the symbol-lookup helper, the patch-suggester. Three rounds gets you 80% of where Cursor would, for £0.' },
  { c: 'ai', n: 'Stable Diffusion thumbnails', b: 'Run SD locally on the Mac mini\'s GPU. You write the prompt-template per content type (blog post, video, product), the post-processor, the queue. Visual assets in five seconds without a subscription.' },
  { c: 'ai', n: 'Local LLM kids\' homework tutor', b: 'A Pi 5 with a chat UI for spelling, maths, science. The LLM tutors at a steady pace; the kid doesn\'t get a snappy phone in their hand. You build the chat UI, the rate limiter, the per-subject prompt presets.' },
  { c: 'ai', n: 'House-rules referee bot', b: 'Two kids argue about whose turn on the Switch. They tell the Pi the situation. The Pi reads your house-rules markdown and adjudicates. You write the rules-bank loader, the prompt, the voice output. Removes parent from the referee chair.' },
  { c: 'ai', n: 'Whisper → live captions on a screen', b: 'A USB mic feeds Whisper running on the Pi or Mac mini, captions render on a big screen in real time. Useful for accessibility, useful for second-language guests at the dinner table. You build the pipeline + renderer.' },

  // ---------- workflow ----------
  { c: 'workflow', n: 'Inbox-as-task-queue agent', b: 'You write a background agent that watches one email folder, files invoices, extracts dates and totals into a sheet, drafts replies to known senders, and surfaces only the unknowns. The inbox stops being a todo list.' },
  { c: 'workflow', n: 'Voice memo → blog post pipeline', b: 'Phone records a memo on a walk, an overnight job transcribes with Whisper, an LLM passes it into your house style, the draft lands in a drafts folder for morning edit. You write all three stages.' },
  { c: 'workflow', n: 'Read-it-later → weekly digest', b: 'Anything saved across the day (links, screenshots, audio) lands in one bucket. You write the digest builder — groups by theme, summarises each item, surfaces the three worth re-reading. Stops the saved-and-forgotten pile.' },
  { c: 'workflow', n: 'Calendar → daily brief', b: 'A job reads the calendar, the weather, the inbox, and the open tabs left over from yesterday, and posts a one-page brief to a phone PWA. You write the aggregator and the renderer. No app to open — the page is just there.' },
  { c: 'workflow', n: 'Photo → searchable journal', b: 'Camera roll auto-syncs to a private folder, your vision-model job captions each shot, captions go into a searchable journal you also write. Six months later "that café in Lisbon with the green door" finds it.' },
  { c: 'workflow', n: 'Receipt photo → ledger', b: 'Snap any paper receipt; your code OCRs vendor + total + category and the line lands in a sheet. You write the watcher, the extractor, the ledger writer. Tax prep collapses to one evening.' },
  { c: 'workflow', n: 'Cross-device clipboard relay', b: 'You write the tiny REST relay so anything copied on the phone is paste-able on the Mac thirty seconds later. No third-party Universal Clipboard, no Apple lock-in. A handful of routes and a menubar app.' },
  { c: 'workflow', n: 'Browser tab tax', b: 'A nightly job lists every tab open more than seven days, emails you with one-line summaries, and offers a "close all" button. You write the tab-grabber extension + the summariser job. Sunday five-minute habit.' },
  { c: 'workflow', n: 'Bookmark archaeology', b: 'Every Sunday a job re-surfaces five bookmarks you saved a year ago, with the original headline. You write the picker + the "still want this?" UI. Most go in the bin, the survivors get re-read.' },
  { c: 'workflow', n: 'Downloads-folder janitor', b: 'A watcher you write sorts /Downloads weekly — anything older than a week into year/month archive folders, photos to a photos archive, screenshots OCR\'d and indexed. Files actually findable six months later.' },
  { c: 'workflow', n: 'Voice note → invoice line', b: 'Speak "two hours for the kitchen client, drainage, parts £42" — your agent extracts vendor / hours / parts / category and adds a line to a sheet. Trades-friendly admin you build in one session.' },
  { c: 'workflow', n: 'Voice note → email draft', b: 'Speak the gist, a small LLM polishes into the recipient\'s register, queues it as a draft. You write the recorder, the polisher, the draft inserter. Five-minute inbox sessions.' },
  { c: 'workflow', n: 'Newsletter → audio brief', b: 'Your favourite newsletters get scraped on arrival; your merger summarises them into a five-minute audio brief read by Kokoro and drops it onto a personal podcast feed. Walks replace inbox.' },
  { c: 'workflow', n: 'WhatsApp → todo bridge', b: 'Forward a message to a private number; your agent extracts the action ("ring the plumber Tuesday") and adds it to your todo PWA. You write the webhook receiver + the extractor.' },
  { c: 'workflow', n: 'Meeting → minutes', b: 'Recorder runs in background; your post-call job transcribes, produces minutes in your house format (decisions, owners, dates), drafts a follow-up email. Call-end to follow-up in 90 seconds.' },
  { c: 'workflow', n: 'Slack/Discord channel digest', b: 'Your digest summariser handles every channel you can\'t keep up with, once a day, grouped by who said what. You stop opening Slack and read the digest.' },
  { c: 'workflow', n: 'Phone idle → automatic sleep log', b: 'Your phone\'s last-active and first-active times become an automatic sleep log — no wearable. You write the collector (Shortcuts → endpoint) and the weekly chart. Battery-free, app-free.' },
  { c: 'workflow', n: 'Bedtime-story rotator', b: 'A nightly script you write picks an unread story from a library, displays the text on the BOOX or e-reader, and renders to audio in your own voice. Stops the "what shall we read tonight" decision.' },
  { c: 'workflow', n: 'Auto-rename downloads', b: 'A Downloads-folder watcher you write reads PDFs and images, renames them to "vendor-purpose-date.ext", files them in year/month. Six months later, ctrl-F actually works.' },
  { c: 'workflow', n: 'Form-fill agent', b: 'For sites you log into often (utilities, council, schools), you build an agent that navigates with stored credentials, fills, screenshots the result. Routine admin done while you make tea.' },
  { c: 'workflow', n: 'Book pages → searchable text', b: 'Snap any page of a physical book; your overnight job OCRs it, tags by book title, indexes for cross-year search. Underlining without dog-earing.' },
  { c: 'workflow', n: 'Custom anti-doom-scroll news', b: 'A news aggregator you write that strips outrage / celebrity / speculation tags and keeps long-form, science, history, craft. Read it in the morning, ignore the rest.' },
  { c: 'workflow', n: 'Daily one-question prompt', b: 'A push notification you trigger with one question — "what would make today a win?" — taps to a tiny answer box that logs to a year-long file. No journaling app, just one question, all yours.' },
  { c: 'workflow', n: 'Sunday inbox-zero agent', b: 'Every Sunday evening, your agent batch-processes the week\'s inbox — archives newsletters, files receipts, surfaces unanswered humans. You write the rules + the operator script. Inbox-zero by Monday morning.' },

  // ---------- app ----------
  { c: 'app', n: 'Shared family inbox PWA', b: 'A small PWA where every member of the household drops messages, photos, and to-dos for the house — bills due, school reminders, broken-thing list. Becomes the family\'s shared brain. Notifications optional.' },
  { c: 'app', n: 'Voice-first journaling PWA', b: 'Tap once, talk for two minutes; the PWA transcribes, tags by mood/topic, and surfaces patterns across weeks. A journal that doesn\'t require sitting down to type.' },
  { c: 'app', n: 'Weekly review PWA', b: 'Five questions every Sunday — what worked, what didn\'t, what\'s next. The app saves answers and shows the same week last year alongside. Builds the only feedback loop most lives don\'t have.' },
  { c: 'app', n: 'Read-aloud for own writing', b: 'Drop in a draft, hear it back in a voice you can stand. Catches the rhythm problems eyes miss. Local TTS (Kokoro, Piper) — no API cost, no internet. You wrap it in a phone-friendly PWA.' },
  { c: 'app', n: 'Habit grid that survives misses', b: 'Seven days a row turn green for the habit. Miss a day, the grid keeps going — no shame, no resetting streaks to zero. Designed for the seventh attempt at the thing, not the first.' },
  { c: 'app', n: 'Personal place directory', b: 'A private map of every café, walk, soft play, restaurant, viewpoint, garage you actually like. Searchable, shareable as a link with friends. Beats Google Maps for your top fifty places.' },
  { c: 'app', n: 'Recipe vault with voice + QR share', b: 'A cookbook PWA that\'s yours. Voice input while cooking, QR-share between phones, merges new entries by name. The phone-as-second-cookbook problem solved.' },
  { c: 'app', n: 'PDF → audio booklet', b: 'Drop a PDF in, get an audio file out, voiced by Kokoro or your own clone. Walks become reading time. The Pocket / Audm experience but yours.' },
  { c: 'app', n: 'Sun-minute tracker', b: 'Logs the day\'s actual minutes of sun and re-frames the week. Apple Weather tells you it\'s a rainy week; your tracker tells you the truth — and beats the perception bias.' },
  { c: 'app', n: 'House inventory PWA', b: 'What\'s in the freezer, the loft, the spare room, the shed. Photo per item, location tag, expiry where relevant. The "do we already have one of those" question gets answered in five seconds.' },
  { c: 'app', n: 'Bin / recycling day reminder', b: 'A tiny PWA that knows your council\'s pickup schedule and pings the night before. Hyper-local, single-purpose, no account.' },
  { c: 'app', n: 'Tide times PWA', b: 'For one beach you actually go to. Big numbers, no ads, offline. Surfers, walkers, sea-swimmers — single screen, single use.' },
  { c: 'app', n: 'Sunrise / sunset / golden-hour PWA', b: 'Tonight\'s sunset, tomorrow\'s sunrise, plus the golden-hour windows. The photographer\'s and walker\'s tool with no signup.' },
  { c: 'app', n: 'Mood + weather log', b: 'Three taps a day — energy, mood, weather. Twelve weeks in, the pattern shows up. The seasonal-affective debate stops being abstract.' },
  { c: 'app', n: 'Money in / money out (manual)', b: 'A spreadsheet-sized PWA that just tracks transactions you type in. No bank integration, no Open Banking, no third party seeing your spend. The 20-minute weekly habit.' },
  { c: 'app', n: 'Daily walk PWA', b: 'Counts walks, not steps. One tap when you start, one tap when you stop, location optional. Forty walks in a quarter is the measurement that matters.' },
  { c: 'app', n: 'Personal pantry log', b: 'What\'s currently in the cupboards, what\'s running low, what got bought yesterday. Shared between phones. Saves the second trip to the shop.' },
  { c: 'app', n: 'Weekly menu rotator', b: 'A library of family-tested dinners, rotated weekly, with the shopping list auto-generated. Sunday-planning becomes thirty seconds.' },
  { c: 'app', n: 'Family chore rotator', b: 'A who-does-what board that rotates Monday morning. Stops the "I did it last week" arguments by holding the receipts.' },
  { c: 'app', n: 'Children\'s milestone tracker', b: 'No gamification, no developmental scoring — just a quiet log of "they did this for the first time today", with photos. A baby book that doesn\'t feel like an app.' },
  { c: 'app', n: 'Reading list with start-now button', b: 'Books queued, each one has a "start the first page now" button that opens the e-reader to page one. Removes the friction between "saved" and "reading".' },
  { c: 'app', n: 'Reading-pace tracker', b: 'Log "I read pages 40-90 tonight". Over weeks, your real pace shows up. The Goodreads "I\'ll finish in two weeks" lie ends.' },
  { c: 'app', n: 'Anniversary / family event tracker', b: 'Every meaningful date in one place — birthdays, anniversaries, "Granny passed", "Sam started school". A long-view of the family\'s year.' },
  { c: 'app', n: 'Daily question to self', b: 'One question, one answer, one year. "What was a small win today?" The yearly export is the journal you never wrote.' },
  { c: 'app', n: 'Garden journal with photo timeline', b: 'One photo per plant per week. After a season, the timeline shows you what worked, what didn\'t. Memory replaces "I forgot what I planted there".' },
  { c: 'app', n: 'Personal radio station PWA', b: 'A PWA that plays a queue of your music, podcasts, audiobooks, with a sleep timer. No subscription, no ads, no algorithm. Replaces Spotify for the listening you\'ve already paid for.' },
  { c: 'app', n: 'Recipe scaler for one household size', b: 'Type the household size once. Every recipe renders with the right quantities. Stops the four-times-too-much-pasta problem.' },
  { c: 'app', n: 'Local-events digest PWA', b: 'You write the scraper for council pages, library boards, parkrun, school newsletters. Produces a one-page "this weekend nearby" digest. Stops the doom-scrolling for what to do.' },

  // ---------- stack (code-heavy custom only) ----------
  { c: 'stack', n: 'Personal app launcher / shelf', b: 'A private home page that lists every web app you use — yours and others — with PIN-gated trust circles for ones only friends/family see. Replaces the messy bookmark folder. Doubles as a one-tap PWA installer for phones in the house.' },
  { c: 'stack', n: 'Trust-circle PWA store', b: 'A shelf you can hand to a friend, sibling, or client. They install five web apps you built or curated in one tap each. Becomes how your circle gets software, not the App Store.' },
  { c: 'stack', n: 'Mobile-as-monitor over USB', b: 'Old phone or tablet becomes a second screen for the Mac, USB-tethered, no cloud, no telemetry. You write the streamer (CDP capture or screencast → adb-tcp → WebKit) and the cycle-button UI.' },
  { c: 'stack', n: 'Tailscale-glued homelab', b: 'WireGuard mesh ties phone, Mac, Pi, home server. You write the small set of dashboards + the per-app reverse-proxy config that turns "things on my LAN" into "things on my phone, securely".' },
  { c: 'stack', n: 'Pi-hole + custom dashboard', b: 'Pi-hole at the install level; you build the custom dashboard, the per-device block-allow rules, the family-friendly overrides. The £40 box that quietly de-tracks the house.' },
  { c: 'stack', n: 'Hugo + git-backed mini CMS', b: 'A static site you can edit from the phone via a one-page admin you write. No WordPress, no database, no plugin updates breaking at 11pm. The whole site backs up to git automatically.' },
  { c: 'stack', n: 'Custom n8n integration node', b: 'Self-host n8n; you write a custom node for whatever local thing (Kokoro TTS, file-share endpoint, ntfy) you want in the toolbox. Every workflow gets a building block you own.' },
  { c: 'stack', n: 'Local-first CRDT sync', b: 'Yjs or Automerge as the brain — every device has the whole document, edits merge automatically, no server needed for sync. You write the sync layer + the conflict UX. Notes / todos that never lose data.' },
  { c: 'stack', n: 'Caddy + a Go reverse-proxy plugin', b: 'One config file maps yourname.com/* to whatever\'s running locally. You write a small Go middleware plugin (auth, rate-limit, route-by-header). Spin up a new tool, add a line, it\'s live in thirty seconds.' },
  { c: 'stack', n: 'PocketBase + your custom UI', b: 'A single binary that\'s your auth + DB + file storage + realtime API. You write only the app UI; PocketBase handles the rest. Five-minute setup, no devops, your-shaped product on top.' },
  { c: 'stack', n: 'ntfy as your glue', b: 'A tiny ntfy server you self-host. Every script anywhere can curl-POST a message and your phone buzzes. You write the integrations — log alerts, build complete, post arrived, plant dry. The home-automation glue.' },

  // ---------- life (programming-oriented prompts only) ----------
  { c: 'life', n: 'Where does the day leak?', b: 'Walk through yesterday minute by minute. Where did time go and feel wasted? What single small tool would have closed that leak? Build that tool tonight.' },
  { c: 'life', n: 'What\'s the boring thing you do every week?', b: 'List the repeated weekly chores — invoicing, shopping list, kid handover, laundry rotation. Pick the one that takes the most thinking. Code the thinking part away.' },
  { c: 'life', n: 'Whose advice did you re-Google this year?', b: 'Whose blog / videos / books did you look up more than twice? Build the local mirror + searchable archive. So it\'s on your machine, not theirs.' },
  { c: 'life', n: 'What did you stop doing because the tool got worse?', b: 'A practice that died because the app changed for the worse — old RSS reader, old notes app, old podcast app. Rebuild a stripped version that does just the one thing you missed.' },
  { c: 'life', n: 'What do you keep almost paying for?', b: 'Hovering over a paid SaaS three months in a row means the need is real. The build is almost always cheaper than three years of subscription. Build the replacement this weekend.' },
  { c: 'life', n: 'What would the household run on if the internet died?', b: 'Map the apps the house depends on. Which ones break the moment the connection goes? Build offline-first replacements for the critical few. Recipe vault, family inbox, calendar, lists.' },
  { c: 'life', n: 'What private library wants surfacing?', b: 'You\'ve probably collected something for years — bookmarks, screenshots, quotes, recipes, photos of book pages, voice notes. None of it is searchable. Build the surface.' },
  { c: 'life', n: 'Where do you keep retyping the same thing?', b: 'Email greetings, address blocks, invoice line items, common code snippets. Anything you type the same way more than five times a week is a snippet system waiting to exist.' },
  { c: 'life', n: 'Which subscription is your competition?', b: 'Pick a monthly service you pay for. What would the local, offline, yours version look like? Even if it takes five sessions to build, the payback is in months.' },
  { c: 'life', n: 'What\'s one device in the house you don\'t fully own?', b: 'Pick the device — TV, fridge, doorbell, watch, car — that phones home most. What would the wired / local / yours-only version look like? Sketch and code it.' },
  { c: 'life', n: 'Where do you walk most — what\'s the missing tool?', b: 'The route you take three times a week. What would make it better? A custom map, a sound layer, a memory archive of past walks? Build the walker\'s tool you wish someone else had.' },
  { c: 'life', n: 'What hurts most about screen time — build the inverse', b: 'Be specific: scrolling at night, picking it up first thing, doom-scrolling news, ignoring kids. Pick the one. Build the device / habit / app that makes the inverse easier than the harm.' },
  { c: 'life', n: 'What would your favourite tool look like at scale of one user?', b: 'You probably love a tool built for thousands. What would the single-user version look like? Smaller, faster, owned. The "tool for one" beats the SaaS for hundreds in personal life.' }

];

// Prompt builder — what gets opened in a fresh Claude chat when "Dig deeper" is tapped.
window.buildSparkPrompt = function (spark) {
  if (spark.c === 'life') {
    return `I want to use this question as a starting point for a new project idea.

Question: "${spark.n}"
Prompt: ${spark.b}

Walk me through how this applies to my setup — Mac mini always-on, BOOX as primary device, free/local-first defaults, existing apps in APPS/ — and help me sketch one concrete project I could ship in 1–3 sessions in Claude Code.`;
  }
  const labelMap = {
    workflow:  'workflow / pipeline',
    stack:     'custom stack / self-host build',
    app:       'app pattern',
    hardware:  'hardware project',
    ai:        'AI-era workflow'
  };
  const label = labelMap[spark.c] || 'pattern';
  return `I want to dig into this ${label} as a possible Claude Code project for me:

${spark.n}
${spark.b}

Walk me through how this would actually look for my setup — free/local-first defaults, Mac mini always-on, AeonReon GitHub + Vercel pipeline, existing apps in APPS/. Concrete shape, parts list if hardware, sequencing, what to ship in the first session.`;
};
