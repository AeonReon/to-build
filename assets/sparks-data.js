// Sparks — a curated bank of general patterns I see makers/indie-hackers running,
// plus life-area prompts to stimulate ideas when the well is dry.
//
// Rules for entries:
//   - General patterns, no one's private setup
//   - Specific enough to spark recognition
//   - Each has a `prompt` that opens a fresh Claude chat already framed
//
// Categories:
//   workflow   — multi-step pipelines / agents people are chaining
//   stack      — tool combos / self-hosted stacks
//   app        — app patterns worth knowing exist
//   hardware   — physical builds / Pi/ESP/sensors
//   ai         — LLM-era workflows on personal data
//   business   — small-bet / productized-service / ladder patterns
//   content    — creator-economy / distribution patterns
//   community  — small-group / connection patterns
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
  { c: 'workflow', n: 'Browser-tab tax', b: 'A nightly job lists every tab open more than seven days, emails you the list with one-line summaries, and offers a "close all" button. The tab graveyard becomes a Sunday five-minute habit.' },
  { c: 'workflow', n: 'Bookmark archaeology', b: 'Every Sunday a job re-surfaces five bookmarks you saved a year ago, with the original headline, and asks "still want this?" Most go in the bin and the survivors get re-read.' },
  { c: 'workflow', n: 'Downloads-folder janitor', b: 'A scheduled job runs every Friday: any file in Downloads older than a week gets sorted into year/month archive folders, photos go to a photos archive, screenshots get OCR\'d and indexed.' },
  { c: 'workflow', n: 'Birthday + anniversary digest', b: 'A weekly digest lists every birthday, anniversary, and recurring date for the next four weeks across contacts, with one suggested action per entry. Removes the "I forgot again" friction.' },
  { c: 'workflow', n: 'Voice note → invoice line', b: 'Speak "two hours for the kitchen client, drainage, parts £42" into a voice memo — an agent extracts vendor / hours / parts / category and adds an invoice line in a sheet. Trades-friendly admin.' },
  { c: 'workflow', n: 'Voice note → email draft', b: 'Speak the gist of a reply, an LLM polishes it into the recipient\'s register (formal/warm/blunt) and queues it as a draft. Five-minute inbox sessions.' },
  { c: 'workflow', n: 'Newsletter → audio brief', b: 'Your favourite newsletters get scraped on arrival, an LLM merges them into a five-minute audio brief read by Kokoro, dropped onto a personal podcast feed. Walk replaces inbox.' },
  { c: 'workflow', n: 'WhatsApp → todo bridge', b: 'Forward a message to a private WhatsApp number, an agent extracts the action ("ring the plumber Tuesday"), and adds it to your todo PWA. Speech-bubble inbox stops being a todo list.' },
  { c: 'workflow', n: 'Meeting → minutes', b: 'Recorder app runs in the background, transcription runs after the call, an LLM produces minutes in your house format (decisions, owners, dates), drafts a follow-up email. End-of-call to follow-up in 90 seconds.' },
  { c: 'workflow', n: 'Slack/Discord digest', b: 'A digest summarises every channel you can\'t keep up with, once a day, grouped by who said what. You stop opening Slack, you read the digest.' },
  { c: 'workflow', n: 'Photo birthday card', b: 'Pick a person, an agent collages twelve photos of them from the camera roll across the year, lays it out as a printable card, and queues a Royal Mail postcard order. Birthdays handled in 60 seconds.' },
  { c: 'workflow', n: 'Tab → blog post', b: 'A nightly job picks the three tabs you spent most time on, summarises each into a one-paragraph blog draft, dumps them into a "to publish" folder. Builds a content backlog from your own reading.' },
  { c: 'workflow', n: 'Phone idle → sleep log', b: 'Your phone\'s last-active and first-active times become an automatic sleep log — no wearable, no app, no battery. Charted weekly.' },
  { c: 'workflow', n: 'Walks tracked passively', b: 'Phone steps + Maps location history + weather get rolled up into a "walks this week" page — how many, how far, in what light. No new sensor needed.' },
  { c: 'workflow', n: 'Bedtime story rotator', b: 'A nightly script picks an unread story from a library, displays the text on the BOOX or e-reader, and renders it to audio in your own voice for the kids. Stops the "what shall we read tonight" decision.' },
  { c: 'workflow', n: 'Birthday gift idea log', b: 'Across the year, every time someone mentions wanting something, a quick voice note lands in a "gifts" inbox, tagged to that person. Their birthday comes and you already have three good ideas.' },
  { c: 'workflow', n: 'Auto-rename downloads', b: 'A watcher on the Downloads folder reads PDFs and images, renames them to "vendor-purpose-date.ext", files them in year/month. Six months later, ctrl-F actually works.' },
  { c: 'workflow', n: 'Form-fill agent', b: 'For sites you log into often (utilities, council, schools), an agent remembers credentials, navigates, fills, and screenshots the result. Routine admin done while you make tea.' },
  { c: 'workflow', n: 'Photos → book pages OCR', b: 'Snap any page of a physical book, an overnight job OCRs it, tags it with the book title, makes the text searchable across years. Underlining without dog-earing.' },
  { c: 'workflow', n: 'Anti-doom-scroll filter', b: 'A custom news aggregator that strips everything tagged "outrage", "celebrity", "speculation", keeps long-form, science, history, craft. Read it in the morning, ignore the rest.' },
  { c: 'workflow', n: 'Daily one-question prompt', b: 'A morning push notification with one question — "what would make today a win?" — taps to a tiny answer box that logs to a year-long file. No journaling app, just one question.' },
  { c: 'workflow', n: 'Sunday inbox-zero agent', b: 'Every Sunday evening, an agent batch-processes the week\'s inbox — archives newsletters, files receipts, surfaces unanswered humans. Inbox-zero by Monday morning.' },

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
  { c: 'stack', n: 'Coolify as Heroku replacement', b: 'Self-hosted PaaS on any VPS. Git-push to deploy, automatic SSL, one-click databases, app marketplaces. £6/month VPS replaces a £25/month Heroku tier.' },
  { c: 'stack', n: 'Immich self-hosted photos', b: 'Open-source Google Photos clone. Face recognition, geotag search, shared albums, mobile auto-backup — all on your own Pi or VPS. Photos out of Apple/Google\'s eye.' },
  { c: 'stack', n: 'Paperless-ngx for documents', b: 'Every paper letter, statement, receipt, certificate gets scanned, OCR\'d, tagged automatically. Searchable archive of the household\'s paperwork. Filing cabinet retires.' },
  { c: 'stack', n: 'Vaultwarden as self-hosted Bitwarden', b: 'Same UI and apps as Bitwarden, runs in a single Docker container on your Pi. £0/year instead of £30. Passwords never leave your network.' },
  { c: 'stack', n: 'ntfy as push-notification service', b: 'A tiny server you self-host. Any script anywhere can curl-POST a message and your phone buzzes. The home automation glue that doesn\'t need IFTTT or Pushbullet.' },
  { c: 'stack', n: 'Uptime Kuma as private status page', b: 'Self-hosted uptime monitor for every service you run — your VPS, your home Pi, your tunnels. One dashboard, one ping when something dies.' },
  { c: 'stack', n: 'Audiobookshelf as self-hosted Audible', b: 'Your audiobook and podcast library, self-hosted. Apps for iOS and Android. Family share, listening positions sync. Never lose a book to a platform shutdown.' },
  { c: 'stack', n: 'Linkding as self-hosted Pinboard', b: 'Bookmarks with tags, full-text search, archive of the page content, browser extension. Survives any service shutdown — the bookmarks are yours.' },
  { c: 'stack', n: 'Wallabag as Pocket replacement', b: 'Self-hosted "read it later" with full article archive, EPUB export, no algorithm trying to monetise your attention.' },
  { c: 'stack', n: 'Mealie self-hosted recipe manager', b: 'Recipes scraped from any URL, normalised, planned into weekly menus, shopping list auto-generated. Family share, mobile apps. The household kitchen brain.' },
  { c: 'stack', n: 'Joplin Server as Evernote replacement', b: 'Markdown notes, end-to-end encrypted, cross-device sync, web-clipper extension. The Evernote pattern without the price hikes or AI-training surprises.' },
  { c: 'stack', n: 'Memos as self-hosted Twitter for one', b: 'Tweet-length notes to yourself. Tags, search, public/private visibility, calendar view. Becomes the "thought drawer" that\'s been missing.' },
  { c: 'stack', n: 'WikiJS as private wiki', b: 'A self-hosted Notion-style wiki for the household — recipes, manuals, instructions, the wifi password, the heating schedule. Tidies the "where did we write that down".' },
  { c: 'stack', n: 'Forgejo as private git host', b: 'Self-hosted GitHub for the projects you don\'t want public. Same UI patterns, same workflows, runs on a £6/month VPS or your home Pi.' },
  { c: 'stack', n: 'SearXNG as private search', b: 'A metasearch engine you self-host. Queries get distributed across providers; none of them sees your IP or builds a profile of you. Google replaced for daily use.' },
  { c: 'stack', n: 'Beszel for system monitoring', b: 'A pretty self-hosted dashboard for every server you own. CPU, RAM, disk, network, alerts on thresholds. Health-check the whole homelab from your phone.' },
  { c: 'stack', n: 'Karakeep / Hoarder as save-anything', b: 'Self-hosted "send any link, screenshot, file, voice memo" inbox with auto-summaries, tags, search. The bookmark/screenshot/save-button triple replaced by one bucket.' },
  { c: 'stack', n: 'Stalwart as self-hosted mail', b: 'A modern, single-binary mail server you can actually run. IMAP, JMAP, anti-spam, calendars. Owning your email address means owning your identity.' },
  { c: 'stack', n: 'Adventurelog as travel journal', b: 'Self-hosted log of trips, walks, places, with maps and photos. Privately yours. The Google Maps timeline replaced by a timeline you own.' },
  { c: 'stack', n: 'Tubesync as YouTube downloader', b: 'Self-hosted service that subscribes to YouTube channels, downloads new videos to your NAS, ready for Plex/Jellyfin. YouTube becomes your DVR.' },

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
  { c: 'app', n: 'House inventory PWA', b: 'What\'s in the freezer, the loft, the spare room, the shed. Photo per item, location tag, expiry where relevant. The "do we already have one of those" question gets answered in five seconds.' },
  { c: 'app', n: 'Bin / recycling day reminder', b: 'A tiny PWA that knows your council\'s pickup schedule and pings the night before. Hyper-local, single-purpose, no account.' },
  { c: 'app', n: 'Tide times PWA', b: 'For one beach you actually go to. Big numbers, no ads, offline. Surfers, walkers, sea-swimmers — single screen, single use.' },
  { c: 'app', n: 'Sunrise/sunset for current location', b: 'Tonight\'s sunset, tomorrow\'s sunrise, plus the golden-hour windows. The photographer\'s and walker\'s tool with no signup.' },
  { c: 'app', n: 'Mood + weather log', b: 'Three taps a day — energy, mood, weather. Twelve weeks in, the pattern shows up. The seasonal-affective debate stops being abstract.' },
  { c: 'app', n: 'Money in / money out (manual)', b: 'A spreadsheet-sized PWA that just tracks transactions you type in. No bank integration, no Open Banking, no third party seeing your spend. The 20-minute weekly habit.' },
  { c: 'app', n: 'Daily walk PWA', b: 'Counts walks, not steps. One tap when you start, one tap when you stop, location optional. Forty walks in a quarter is the measurement that matters.' },
  { c: 'app', n: 'Personal pantry log', b: 'What\'s currently in the cupboards, what\'s running low, what got bought yesterday. Shared between phones. Saves the second trip to the shop.' },
  { c: 'app', n: 'Weekly menu rotator', b: 'A library of family-tested dinners, rotated weekly, with the shopping list auto-generated. Sunday-planning becomes thirty seconds.' },
  { c: 'app', n: 'Family chore rotator', b: 'A who-does-what board that rotates Monday morning. Stops the "I did it last week" arguments by holding the receipts.' },
  { c: 'app', n: 'Children\'s milestone tracker', b: 'No gamification, no developmental scoring — just a quiet log of "they did this for the first time today", with photos. A baby book that doesn\'t feel like an app.' },
  { c: 'app', n: 'Reading list with start-now button', b: 'Books queued, but each one has a "start the first page now" button that opens the e-reader to page one. Removes the friction between "saved" and "reading".' },
  { c: 'app', n: 'Personal book-reading-pace tracker', b: 'Log "I read pages 40-90 tonight". Over weeks, your real pace shows up. The Goodreads "I\'ll finish in two weeks" lie ends.' },
  { c: 'app', n: 'Anniversary / family event tracker', b: 'Every meaningful date in one place — birthdays, anniversaries, "Granny passed", "Sam started school". A long-view of the family\'s year.' },
  { c: 'app', n: 'Sleep scoring you type into', b: 'No wearable. Three questions in the morning — when did I sleep, when did I wake, how rested do I feel. Charts itself over months.' },
  { c: 'app', n: 'Daily question to self', b: 'One question, one answer, one year. "What was a small win today?" The yearly export is the journal you never wrote.' },
  { c: 'app', n: 'Garden journal with photo timeline', b: 'One photo per plant per week. After a season, the timeline shows you what worked, what didn\'t. Memory replaces "I forgot what I planted there".' },
  { c: 'app', n: 'Birthday card writer + sender', b: 'Draft the card on the phone using voice, pick a stamp design, queue a Royal Mail postcard order. Birthday cards actually get sent instead of half-remembered.' },
  { c: 'app', n: 'Personal radio station', b: 'A PWA that plays a queue of your music, podcasts, audiobooks, with a sleep timer. No subscription, no ads, no algorithm. Replaces Spotify for the listening you\'ve already paid for.' },
  { c: 'app', n: 'Recipe scaler for one household size', b: 'Type the household size once. Every recipe renders with the right quantities. Stops the four-times-too-much-pasta problem.' },
  { c: 'app', n: 'Local-events digest', b: 'Pulls from council pages, library boards, parkrun, school newsletters — produces a one-page "this weekend nearby" digest. Stops the doom-scrolling for what to do.' },

  // ---------- hardware ----------
  { c: 'hardware', n: 'ESP32 e-ink dashboard', b: 'A £30 board + a £20 e-ink screen + a 3D-printed frame on the wall. Today\'s calendar, the kid\'s timetable, the weather, the bins schedule. Boots, refreshes, sleeps. Months on a battery.' },
  { c: 'hardware', n: 'Pi Zero as wired MP3 player', b: 'A purpose-built music/audiobook device, radios disabled, runs from an SD card. Walks, runs, plane trips without a phone in your pocket. £80 of parts.' },
  { c: 'hardware', n: 'Reterminal-as-control-panel', b: 'Seeed Reterminal — a Pi inside a touchscreen box with buttons — as the dashboard for the home or workshop. Custom Python app, no cloud, no Alexa. The "panel on the wall" feeling without Home Assistant\'s sprawl.' },
  { c: 'hardware', n: 'Tello EDU drone testbed', b: '£100 programmable drone, Python SDK, point-to-point wifi, multi-drone swarm support, fragile but cheap to crash. Proves the workflow before any expensive drone enters the conversation.' },
  { c: 'hardware', n: 'Weather station Pi + sensors', b: 'A small box on a fence post with temperature, humidity, pressure, soil moisture sensors. Sends to a dashboard on the home server. The garden gets its own data history.' },
  { c: 'hardware', n: 'Self-hosted security camera', b: 'An old phone running Haven sends encrypted alerts to your daily phone when motion / sound / movement is detected. No subscription, no cloud, no third-party servers watching the house.' },
  { c: 'hardware', n: 'GL.iNet travel router with WireGuard', b: 'A £50 pocket-sized router. Plug into any hotel wifi, your devices connect to it, all traffic tunnels back to home. Hotel networks see one device, see encrypted traffic, see nothing useful.' },
  { c: 'hardware', n: 'NVMe-on-USB as second drive', b: 'A £60 NVMe in an enclosure on USB-C. 2TB at 1GB/s without buying a new Mac. Move iCloud Photos, the Documents folder, the heavy data here, keep the internal disk lean.' },
  { c: 'hardware', n: 'KOReader on an old e-reader', b: 'Strip the Kindle/Kobo software, install KOReader, point at your own library on the home server via WebDAV. No Amazon, no telemetry, supports every format, syncs reading position between devices.' },
  { c: 'hardware', n: 'Wired pan-tilt camera at the gate', b: 'A Pi + a servo bracket + a small camera. PoE-powered so one cable runs both video and power. Triggers a wired alert when motion crosses a line.' },
  { c: 'hardware', n: 'Pi NAS for the household', b: 'A Pi 5 + two USB-3 SSDs in a mirror config + OpenMediaVault. Family photos, documents, backups — all in one box at home. Beats Dropbox / iCloud Family on cost and privacy.' },
  { c: 'hardware', n: 'Old laptop as always-on home server', b: 'A ten-year-old MacBook or ThinkPad, lid closed, running Linux. Plex, Pi-hole, Vaultwarden, Tailscale exit node, ten other small services. The first homelab without spending anything new.' },
  { c: 'hardware', n: 'ESP32 garden moisture probe', b: 'A £8 board + a capacitive soil sensor + a battery. Pings ntfy when soil dries below threshold. Tomatoes and herbs get watered before they wilt.' },
  { c: 'hardware', n: 'ESP32 mailbox sensor', b: 'A magnetic reed switch on the mailbox door, an ESP32 that wakes on door-open and sends ntfy alert. "Post arrived" lights up your phone, no more walking down the drive for nothing.' },
  { c: 'hardware', n: 'ESP32 doorbell + local capture', b: 'A button, an ESP32, a small camera, an ntfy notification with the photo. £25 of parts replaces a £180 Ring doorbell with no subscription and no Amazon eyeball.' },
  { c: 'hardware', n: 'Pi as digital photo frame', b: 'A Pi + an old monitor + a USB drive of family photos. Random photo every 30 seconds. Always-on, no Wi-Fi needed, no cloud sync of family faces.' },
  { c: 'hardware', n: 'Magic Mirror in the hall', b: 'An old monitor behind a two-way mirror + a Pi running MagicMirror²: today\'s calendar, weather, transit, school timetable. The 6:45 a.m. dashboard you\'ll actually read.' },
  { c: 'hardware', n: 'ESP32 plant-watering rig', b: 'A peristaltic pump + a moisture sensor + an ESP32. The plant in the office water itself when you forget. Build once, never lose another houseplant.' },
  { c: 'hardware', n: 'Raspberry Pi 5 as desktop replacement', b: '£75 of Pi, £50 case + cooling + power, a USB-C monitor. Native arm64 Linux desktop. Surfing, email, code, writing — runs everything most people do most days.' },
  { c: 'hardware', n: 'E-paper clock + calendar combo', b: 'A 7" tri-colour e-ink panel + an ESP32 + a battery. Today\'s calendar plus the time. Refreshes hourly. Months on a charge. The bedside clock for people sick of phones.' },
  { c: 'hardware', n: 'Pi as music server (Mopidy + Snapcast)', b: 'One Pi runs the library; Snapcast clients in every room play in sync. The whole-house audio you don\'t need to subscribe to.' },
  { c: 'hardware', n: 'USB-C dock with custom HID firmware', b: 'A QMK-powered macropad in the corner of the desk — six keys, each a complex action: "open standup notes", "lock house", "play focus playlist". Muscle memory finally pays off.' },
  { c: 'hardware', n: 'Pi 5 as kids\' streaming server', b: 'Jellyfin on the Pi, only films you own, available to every screen in the house. No "is this on Netflix this month?" The Disney-tax-free children\'s film library.' },
  { c: 'hardware', n: 'Pi as podcast-mirror', b: 'A small Pi that subscribes to your podcast list and downloads new episodes as they appear. Your existing podcast player just sees a private feed of MP3s. Episodes never disappear.' },
  { c: 'hardware', n: 'Pi as DIY VPN endpoint', b: 'A Pi at home running WireGuard. Travel anywhere with the laptop, the phone, the family tablet — everything tunnels home. No paid VPN, no IP-leak surprises.' },
  { c: 'hardware', n: 'ESP32 presence sensor at desk', b: 'A small board that knows when you\'re sitting at the desk. Auto-pauses notifications, switches the light to focus mode, logs working hours. Tiny ambient intelligence.' },
  { c: 'hardware', n: 'Pi as air-quality monitor', b: 'A Pi + a PM2.5 sensor + a CO2 sensor + a dashboard. The day you discover the bedroom is at 1800ppm CO2 is the day you change the way you sleep.' },
  { c: 'hardware', n: 'ESP-Home flashed appliances', b: 'Cheap smart plugs flashed with ESPHome speak directly to your Home Assistant on the LAN. Tasmota or ESPHome cuts the "phones China every minute" tax on cheap devices.' },
  { c: 'hardware', n: 'Carputer with a Pi', b: 'A Pi in the dashboard, a small touchscreen, Android Auto via OpenAuto-Pro or just a music + maps PWA. The 2008 car becomes a 2025 car for £200.' },
  { c: 'hardware', n: 'GLAMP-style 12V system for the camper', b: 'LiFePO4 battery + MPPT solar + Victron Connect over Bluetooth. The camper / shed / mobile-station runs lights, fridge, laptop charging — without a generator, without a fuel cost.' },

  // ---------- ai ----------
  { c: 'ai', n: 'Personal Whisper transcription pipeline', b: 'Drop any audio in, get a transcript out, all local. The Mac mini runs it overnight. Family voice notes, podcast clips, interviews — searchable forever, no third-party hearing it.' },
  { c: 'ai', n: 'RAG over personal notes', b: 'Every note, every email, every PDF you\'ve written or saved, indexed into a local vector DB. Ask "what did I write about routers in 2024" and get the relevant paragraphs with sources. Your own memory, searchable.' },
  { c: 'ai', n: 'Local LLM as command-line agent', b: 'LM Studio or Ollama at the back, a thin CLI at the front, file-system access scoped to a working dir. The everyday "rename these files / extract this CSV / draft this email" tasks done without an API key.' },
  { c: 'ai', n: 'Read-aloud cloned voice for own books', b: 'A 20-minute recording in a quiet room gives a model trained on your voice. From then on every book you write can be read in your own voice. Free, offline, yours.' },
  { c: 'ai', n: 'Code-aware grep across own repos', b: 'Vector-indexed search across every repo you\'ve ever written. "Where did I solve the iOS PWA cache problem before?" — the snippet comes back with the repo and the file.' },
  { c: 'ai', n: 'Embeddings over the Forge itself', b: 'Index every entry in this very pool, then on a quiet day ask "what idea would compose nicely with the home router project?" — the model surfaces the two adjacent ones you forgot you wrote down.' },
  { c: 'ai', n: 'Auto-summary of long browser sessions', b: 'Browser extension drops every page you read for more than thirty seconds into a daily folder. Overnight an LLM summarises by topic, surfaces the three pages worth re-reading.' },
  { c: 'ai', n: 'Image search over personal photo library', b: 'CLIP embeddings over the camera roll. Search "kid on bike with helmet" and the photo comes back. Local, no Google Photos, no Apple Cloud.' },
  { c: 'ai', n: 'Voice cloning of grandparent for storybook', b: 'Twenty minutes of voice — sometimes recoverable from old videos, voicemails, family memories — gives a working clone. Bedtime stories in their voice for the grandkids.' },
  { c: 'ai', n: 'Local OCR of decades of paper notes', b: 'Tesseract or PaddleOCR runs over a box of scanned notebooks, makes them searchable. Twenty years of journal pages become a queryable archive.' },
  { c: 'ai', n: 'Talk to your past self', b: 'Index a decade of your own journals into a RAG system. Ask "what was I worried about in March 2018" and get the entries. Perspective therapy without a therapist.' },
  { c: 'ai', n: 'Phone notification triage agent', b: 'A small local model on the phone decides which notifications buzz, which silently log, which get summarised once a day. Your attention defended without an app.' },
  { c: 'ai', n: 'Local LLM kid-safe voice queries', b: 'Ollama on a Pi 5 connected to a small speaker + mic. Kids ask "why is the sky blue" without it phoning home to Google or being mined for ads.' },
  { c: 'ai', n: 'Long-form podcast → bullet summary', b: 'A 90-minute podcast becomes a 60-second-read bullet list, with timestamps to jump to the bits worth listening to. Re-acquire the time you used to lose to long episodes.' },
  { c: 'ai', n: 'Local LLM news brief from RSS', b: 'Read your RSS feeds with a local LLM, produce a one-page morning briefing, with bias flags ("4 of 5 sources from same group"). Curate-by-machine without giving up agency.' },
  { c: 'ai', n: 'Voice-typed code-comment generator', b: 'Hover over a function, hit a key, say "this is the bit that handles iOS cache busting", the comment writes itself. The code documents itself by talking, not typing.' },
  { c: 'ai', n: 'Local LLM as debugger', b: 'Paste a stack trace into a local model, get hypotheses ranked. Three rounds gets you 80% of the way Cursor or Copilot would, for £0 and no IP leaving the machine.' },
  { c: 'ai', n: 'Local LLM as kids\' homework tutor', b: 'A Pi with a chat UI for spelling, maths, science questions. The LLM tutors at a steady pace, the kid doesn\'t get a snappy phone in their hand. Mediation without ads.' },
  { c: 'ai', n: 'Stable Diffusion local for thumbnails', b: 'Run SD locally on the Mac mini\'s GPU. Every blog post, every product card, every video gets a thumbnail in five seconds. Visual assets without a subscription.' },
  { c: 'ai', n: 'Local image-tagging for photo library', b: 'CLIP + BLIP tags every photo with what\'s in it. The camera roll gets searchable by content. No Apple "memories" algorithm guessing what matters.' },
  { c: 'ai', n: 'Meeting note-taker (live)', b: 'Audio in → live transcript on a side panel → end-of-meeting summary with action items. Local Whisper + a small LLM. Zero subscription, no third-party recording your meetings.' },
  { c: 'ai', n: 'Voice → emoji → message bridge', b: 'Speak the gist of a reply, an agent picks the appropriate emoji + tone, drafts the message in the recipient\'s register. The faster-than-thumb-typing personal SMS pipeline.' },
  { c: 'ai', n: 'Local LLM-driven shopping list', b: 'Type next week\'s dinners (or pick from a rotation), the model generates the consolidated shopping list factoring what\'s in the pantry log. The 15-minute Sunday-planning step.' },
  { c: 'ai', n: 'Resume tailoring engine', b: 'Paste a job description, get a tailored CV that emphasises the right past projects. Local, so the unreleased projects stay private.' },
  { c: 'ai', n: 'Local LLM-as-house-rules referee', b: 'When two kids dispute "whose turn is it on the Switch", they tell the Pi the situation. The Pi reads the house rules doc and adjudicates. Removes parent from being the referee.' },

  // ---------- business ----------
  { c: 'business', n: 'Productized service: one offer, one form', b: 'Pick one thing you do well — logo design, GMB optimisation, salon brand refresh, kitchen rebuild quote — set one price, one form, one delivery time. Sell it like a product. Five sales pays the month.' },
  { c: 'business', n: '£100k from 200 customers at £500', b: 'The honest maths of a one-person service business: 200 customers at £500/year is six figures. The work is finding 200 people who need one specific thing you can repeatedly deliver.' },
  { c: 'business', n: 'Daily-driver newsletter on one topic', b: 'Five days a week, one short email to a list of people interested in one specific topic. After 12 months, a 2,000-person list. After 24 months, a quiet asset that pays the mortgage.' },
  { c: 'business', n: 'Skool community at £19/mo', b: 'A community around a specific outcome (not a topic), £19/mo, capped at 150 members so it stays warm. £34k/year if it fills. Recurring revenue from a niche you actually care about.' },
  { c: 'business', n: 'Build-in-public Twitter/X channel', b: 'Pick one niche, post one update a day for a year — what worked, what didn\'t, what shipped. The audience that builds is the marketing budget that wasn\'t needed.' },
  { c: 'business', n: 'Newsletter → course → cohort ladder', b: 'Free weekly newsletter feeds a £49 self-paced course feeds a £499 cohort. The ladder lets readers self-select into the level of help they want, at the price they\'ll pay for it.' },
  { c: 'business', n: 'eBook → course → done-with-you ladder', b: 'A £9 eBook builds the list, a £99 course teaches the system, a £999/month done-with-you implementation closes the gap. Three rungs covers three different buyers.' },
  { c: 'business', n: 'Loom-as-product', b: 'Record one good 30-minute explanation of your craft. Sell access to it for £49. People who want the answer pay; people who don\'t can scroll past. Same effort, infinite sales.' },
  { c: 'business', n: 'Notion template + 5h consulting', b: 'A £29 Notion template gets the buyer started. A £499 add-on is "five hours of you on a call to customise it for me". The template earns while you sleep, the calls earn while you talk.' },
  { c: 'business', n: 'Founder podcast as lead-gen', b: 'Interview your ideal client one per week. They share the episode (free marketing). They become the next client (or the referrer to the next one). Twelve interviews builds a year of pipeline.' },
  { c: 'business', n: '48-hour delivery service', b: 'Take the most-asked thing in your industry, package it as a 48-hour delivery for a fixed price. Charge a premium for the speed. Two-day delivery is a feature people will pay double for.' },
  { c: 'business', n: 'Calendly + Stripe + Loom = consultancy', b: 'A booking link, a payment processor, a recording tool. That\'s the entire stack for a one-person consultancy. The £49 first call becomes the £499 follow-up engagement.' },
  { c: 'business', n: 'Local SEO + GMB rocket for one trade', b: 'Pick one trade in one town (plumber, dentist, salon). A polished website, a fully-filled-out Google Business Profile, 30 reviews collected by you, three weeks of patience. £100k/year is one good lead a week.' },
  { c: 'business', n: 'Done-with-you implementation of one tool', b: 'Pick a tool with friction (n8n, Webflow, GBP, Klaviyo). Sell "I\'ll set it up for you" as a fixed-price project. Repeat for ten clients to learn the patterns; sell the playbook to the next twenty.' },
  { c: 'business', n: 'Cold email + landing page rig', b: 'A list of 500 well-targeted prospects, a one-page landing about one outcome, a five-email sequence. £600 of tooling. Run for two weeks, see if it works, iterate.' },
  { c: 'business', n: 'One-question quiz funnel', b: 'A single quiz question on a landing page ("which sales process are you running?") sorts visitors into three buckets, each with its own follow-up email. The list grows pre-segmented.' },
  { c: 'business', n: 'Niche coupon affiliate page', b: 'Pick one industry (skincare, dog training, dev tools). Build a clean page that lists the best discounts. Affiliate links pay the bills. £200/month per page; ten pages is rent.' },
  { c: 'business', n: '12 templates as £9 micro-product', b: 'Pick a craft you know (Webflow, Notion, Figma, Excel). Build twelve templates as one bundle for £9. Sell it through Gumroad. The price is the funnel; the upsell is the consulting.' },
  { c: 'business', n: 'Course audit service', b: 'Pick a platform (Teachable, Kajabi, Thinkific). Sell "I\'ll audit your course and tell you what to fix to triple conversions" as a £499 fixed-price service. Audit ten, sell the patterns as a product.' },
  { c: 'business', n: 'Niche newsletter at £29/year', b: 'A weekly long email on one industry — the moves, the deals, the lessons. £29/year per subscriber. 500 subscribers is £14k of recurring revenue from one publication.' },

  // ---------- content ----------
  { c: 'content', n: 'Daily Loom on LinkedIn, one topic, one year', b: 'Pick one topic you\'re becoming the person for. Post one Loom a day for 365 days, all on the same topic. The audience that compounds is the most underpriced marketing asset in 2026.' },
  { c: 'content', n: 'Photo essay newsletter', b: 'Once a week, one location, eight photos, eight short captions. The format is repeatable forever, the audience builds slowly, the archive is a body of work.' },
  { c: 'content', n: 'What I shipped this week newsletter', b: 'Friday afternoon, you list what shipped, what didn\'t, what you learned. Builds the muscle of finishing; the readers who care become the first 50 customers of anything you sell.' },
  { c: 'content', n: 'One-question podcast', b: 'Five minutes, one question, one guest. Same question every week, different guest. The constraint is the format; the audience appreciates the discipline.' },
  { c: 'content', n: 'Weekly behind-the-scenes', b: 'One video, one essay, one photo set — every Sunday — showing how you actually do the work. Trust compounds; clients arrive pre-sold on your process.' },
  { c: 'content', n: '100-day-challenge documented publicly', b: 'Pick a craft, commit to 100 days, post one update per day on the same platform. By day 30 you\'re in the algorithm. By day 100 you\'ve done the reps; the audience is the bonus.' },
  { c: 'content', n: 'Reactions-to-classics newsletter', b: 'Pick a great book in your field. One letter a week unpacks one chapter applied to today. After a year, you\'ve written a book on a book, with a list of readers ready to buy the next thing.' },
  { c: 'content', n: 'One-tip-a-day format', b: 'Pick a craft. Post one specific, actionable tip a day on one platform. The discipline shows; the audience grows because the format is screenshot-able and re-shareable.' },
  { c: 'content', n: '52 Sunday essays', b: 'Long-form, one essay a week, ship for 52 weeks. The collection becomes a book. The book becomes the calling card. The calling card becomes the consultancy.' },
  { c: 'content', n: 'Niche YouTube channel with 100-video plan', b: 'Map 100 videos for one niche topic before recording one. The plan is the engine. By video 30 the channel monetises; by video 100 it\'s a small recurring asset.' },
  { c: 'content', n: 'Tiny memoir essays for the family', b: 'Write one 500-word essay per week about a memory or a person or a place. Print the year as a book. The grandkids get a primary source.' },
  { c: 'content', n: 'Audio diary published weekly', b: 'Five-minute audio episode per week, on one theme. Distribute via your own podcast feed. Three years is a body of work the algorithm can\'t take away.' },
  { c: 'content', n: 'Walk-and-record observation series', b: 'Once a week, record a walk. The constraint forces the content to be observational rather than performative. Becomes the most-shared thing you\'ve made.' },
  { c: 'content', n: 'One photo a day for a year', b: 'Post one photo per day on one platform. The discipline matters more than the camera. By month four, your eye changes; by month twelve, the archive surprises you.' },
  { c: 'content', n: 'One sentence a day for the kids\' archive', b: 'A private file. One sentence per day. About one of the kids, about the family, about a moment. The 20-year version is a primary-source biography.' },
  { c: 'content', n: 'Long-form essay every Sunday, single topic for a year', b: 'Stay on one topic for 52 weeks. The compounding effect of consistent focus on one subject is the asymmetric move that most creators won\'t make.' },

  // ---------- community ----------
  { c: 'community', n: 'Small WhatsApp group for one interest', b: '4-12 people, one shared interest. The group survives because it\'s small enough to stay warm. The connection outweighs anything algorithmic social can provide.' },
  { c: 'community', n: 'Sunday call rotation with three friends', b: 'Three friends, four Sundays a month, one of them hosts a Zoom each week. Twelve calls a year per person. The friendship compounds.' },
  { c: 'community', n: 'Quarterly dinner for makers nearby', b: 'Once a quarter, you host a dinner for 6-12 makers within 30 miles. No agenda, no pitch. Three years in, it\'s the most valuable thing in your week.' },
  { c: 'community', n: 'Discord for one skill, 50-member cap', b: 'A private Discord for a specific skill, capped at 50 members. The cap is the feature — keeps it warm. Quality of conversation in a 50-person room beats any 5,000-person community.' },
  { c: 'community', n: 'Annual half-day retreat with three peers', b: 'Once a year, half a day, three peers, in person. Each shares what worked, what didn\'t, what\'s next. Becomes the most strategic four hours of your year.' },
  { c: 'community', n: 'Trade-skill weekend swap', b: 'You teach a neighbour woodworking, they teach you wiring. Saturday at theirs, Sunday at yours. The skills compound; so does the friendship.' },
  { c: 'community', n: 'Monthly "show what you built" call', b: 'Five people, one hour, each shows what they shipped that month and what they\'re stuck on. Replaces every mastermind, networking event, and conference for most of what they\'re trying to be.' },
  { c: 'community', n: 'Online book club, one author per year', b: 'Spend a year reading one author\'s body of work with a small group. Six books, six discussions. The depth is what makes the year matter.' },
  { c: 'community', n: '1-1 weekly walk with a neighbour', b: 'One hour, one neighbour, one walk a week. Same route, different conversation. Cheaper than therapy, better than a gym membership, more valuable than a network event.' },
  { c: 'community', n: 'Local meet-up around one niche tool', b: 'Pick a niche tool you love. Host a monthly meet-up in a pub for anyone in town who uses it. After a year, you\'re the de facto local expert in something specific.' },

  // ---------- life prompts ----------
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
  { c: 'life', n: 'What does the next ten years of your craft need?', b: 'Pick the practice you want to keep doing for a decade. What rig / library / archive would you wish past-you had built so future-you can fly? Build that, in miniature.' },
  { c: 'life', n: 'Where do you have a shadow career already?', b: 'You\'ve probably been giving away expertise in one area for free — answering DMs, helping friends, running a Whatsapp thread. That\'s a productized service waiting to be priced.' },
  { c: 'life', n: 'What would past-you have paid £100 for?', b: 'Think of yourself five years ago. What single tool / playbook / setup would have saved you six months of pain? That\'s the lead magnet, the course, the product.' },
  { c: 'life', n: 'Which physical object is one upgrade from delight?', b: 'Pick something you touch daily — keyboard, kettle, lamp, knife. What\'s the one upgrade that turns it from "fine" into "love it"? Buy or build that thing.' },
  { c: 'life', n: 'Whose problem will exist in five years that you can solve now?', b: 'Pick a demographic (parents, retirees, trades, makers) and a trend (AI, regulation, demographics). What will hurt them in five years that you can build the antidote for today?' },
  { c: 'life', n: 'What would you tell yourself five years ago?', b: 'Write the letter. Now build the app, the course, the post, the playbook that delivers that letter to anyone five years behind where you are.' },
  { c: 'life', n: 'What system would you wish your kids had?', b: 'A 14-year-old today has 30 unsorted apps and no curation. What would the curated 5-app digital toolkit look like? Build that for one kid first.' },
  { c: 'life', n: 'What did your parents not have access to that you do?', b: 'Tools, information, opportunities. Pick the most powerful one. Build the bridge that takes someone who didn\'t have it from zero to using it well.' },
  { c: 'life', n: 'Pick a place you visit — what\'s the missing app for visiting it?', b: 'A beach, a library, a market, a coffee shop, a city. What information would a stranger need that the place doesn\'t give them well? That\'s a small, lovely PWA.' },
  { c: 'life', n: 'What\'s the unfinished thing you keep avoiding?', b: 'The half-built repo, the half-written book, the half-organised photos. Pick one. Sit with it for thirty minutes. Either finish it or kill it. Either is progress.' },
  { c: 'life', n: 'Which subscription is your competition?', b: 'Pick a monthly service you pay for. What would the local, offline, yours version look like? Even if it takes five sessions to build, the payback is in months.' },
  { c: 'life', n: 'Where do you walk most — what\'s the missing tool?', b: 'The route you take three times a week. What would make it better? A custom map, a sound layer, a memory archive of past walks? Build the walker\'s tool you wish someone else had.' },
  { c: 'life', n: 'Whose voice do you wish you could hear daily?', b: 'A teacher, a parent, a hero, a peer. Build the rig that puts their words in your ears for ten minutes each morning. Curated podcast feed, AI voice, archive, whatever. Daily-ness is the feature.' },
  { c: 'life', n: 'What would a personal CEO of you build first?', b: 'Step out of the chair. From outside, what\'s the most leveraged thing you could spend the next two weeks on? Often it\'s the dashboard, the funnel, or the one missing piece of infrastructure.' },
  { c: 'life', n: 'What hurts most about screen time — build the inverse', b: 'Be specific: scrolling at night, picking it up first thing, doom-scrolling news, ignoring kids. Pick the one. Build the device / habit / app that makes the inverse easier than the harm.' },
  { c: 'life', n: 'What would your favourite tool look like at scale of one user?', b: 'You probably love a tool built for thousands. What would the single-user version look like? Smaller, faster, owned. The "tool for one" beats the SaaS for hundreds in personal life.' }

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
    workflow:  'workflow / pipeline',
    stack:     'stack / tool combo',
    app:       'app pattern',
    hardware:  'hardware project',
    ai:        'AI-era workflow',
    business:  'small-bet / business pattern',
    content:   'content / creator pattern',
    community: 'community / connection pattern'
  };
  const label = labelMap[spark.c] || 'pattern';
  return `I want to dig into this ${label} as a possible project for me:

${spark.n}
${spark.b}

Walk me through how this would actually look for my setup — free/local-first defaults, Mac mini always-on, AeonReon GitHub + Vercel pipeline, existing apps in APPS/. Concrete shape, parts list if hardware, sequencing, what to ship in the first session.`;
};
