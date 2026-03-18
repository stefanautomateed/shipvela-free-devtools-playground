```
  ____             _____            _
 |  _ \  _____   _|_   _|__   ___ | |___
 | | | |/ _ \ \ / / | |/ _ \ / _ \| / __|
 | |_| |  __/\ V /  | | (_) | (_) | \__ \  .play
 |____/ \___| \_/   |_|\___/ \___/|_|___/
```

# Free Dev Tools & Playground

> 80+ curated free developer tools, libraries & live code playgrounds — works offline, mobile-first.

![Tools](https://img.shields.io/badge/tools-80%2B-58a6ff)
![Categories](https://img.shields.io/badge/categories-12-3fb950)
![License](https://img.shields.io/badge/license-MIT-bc8cff)
![Offline](https://img.shields.io/badge/offline-ready-39d353)
![PWA](https://img.shields.io/badge/PWA-installable-d29922)

---

## What Is This?

A **single-page app** that serves as both:

1. **Curated Directory** — 80+ hand-picked free developer tools organized in 12 categories with search, filtering, and bookmarks
2. **Interactive Playground** — 4 built-in tools (JS/HTML/CSS editor, API tester, Regex tester, JSON formatter) that run entirely in your browser

### Key Features

- **Fully Offline** — Service Worker caches everything. Self-hosted fonts. Zero CDN dependencies. Works on a plane.
- **Mobile-First PWA** — Install to homescreen. Touch-optimized. Min-width breakpoints. 44px touch targets.
- **Zero Build Step** — Pure HTML, CSS, and vanilla JS. Clone it, open `index.html`, done.
- **Dark/Light Mode** — Dark-first terminal aesthetic with manual toggle.
- **Instant Search** — Filter tools by name, description, tags, or category as you type. Press `/` to focus.
- **Bookmarks** — Star your favorites, persisted in localStorage.
- **Deep Links** — Link directly to categories: `#ai-coding`, `#frontend`, `#databases`, etc.

---

## Quick Start

```bash
# Clone
git clone https://github.com/xksh808dsh/free-dev-tools-playground.git
cd free-dev-tools-playground

# Open — that's it
open index.html
# or
python3 -m http.server 8000
# then visit http://localhost:8000
```

For offline + PWA features (Service Worker), you need to serve it over HTTP — a file:// URL won't register the SW.

---

## Interactive Playgrounds

| Playground | What It Does |
|---|---|
| **JS / HTML / CSS** | Live code editor with line numbers, tab support, and real-time iframe preview |
| **API Tester** | Send GET/POST/PUT/DELETE/PATCH requests with custom headers and body |
| **Regex Tester** | Write regex patterns with g/i/m flags, see highlighted matches in real-time |
| **JSON Formatter** | Format, minify, or validate JSON with syntax highlighting |

---

## Tool Categories (80+)

| # | Category | Count | Examples |
|---|---|---|---|
| 1 | 🤖 AI Coding Assistants | 8 | GitHub Copilot, Codeium, Claude Code, OpenCode |
| 2 | 🎮 Code Playgrounds | 8 | CodeSandbox, Replit, StackBlitz, JDoodle |
| 3 | 🎨 Frontend Libraries | 8 | React, Vue, Svelte, Tailwind CSS, HTMX |
| 4 | ⚙️ Backend Frameworks | 8 | Express, FastAPI, Deno, Bun, Hono |
| 5 | 🖌️ Design & UI Tools | 8 | Figma, Penpot, Excalidraw, Coolors |
| 6 | 🔌 API & Testing | 8 | Postman, Hoppscotch, Insomnia, HTTPie |
| 7 | 🗄️ Databases & BaaS | 8 | Supabase, Firebase, PocketBase, Neon |
| 8 | 🚀 DevOps & Hosting | 8 | Vercel, Netlify, Cloudflare Pages, Railway |
| 9 | 🧠 AI & ML Platforms | 8 | Hugging Face, Google AI Studio, Groq, Ollama |
| 10 | ⚡ No-Code / Low-Code | 8 | N8N, Zapier, Bolt.new, v0 by Vercel |
| 11 | 📂 Version Control & Collab | 8 | GitHub, GitLab, Linear, Notion, Obsidian |
| 12 | 🔧 Developer Utilities | 8 | VS Code, Prettier, ESLint, ffmpeg, Bun |

---

## Tech Stack

- **HTML5** — Semantic markup, ARIA attributes
- **CSS3** — Custom properties, fluid typography, mobile-first breakpoints
- **Vanilla JS** — Zero dependencies, zero build step
- **Service Worker** — Cache-first for local assets, network-first for API requests
- **PWA Manifest** — Installable on mobile and desktop
- **Self-Hosted Fonts** — Inter + JetBrains Mono as WOFF2 files

---

## Project Structure

```
free-dev-tools-playground/
├── index.html          # Single-page app
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker
├── css/
│   └── style.css       # All styles (mobile-first)
├── js/
│   ├── app.js          # Search, filtering, bookmarks, theme
│   ├── playground.js   # 4 playground implementations
│   └── tools-data.js   # 80+ tool entries
├── fonts/              # Self-hosted WOFF2 fonts
│   ├── inter-{400,500,600,700}.woff2
│   └── jetbrains-mono-{400,500,600,700}.woff2
├── icons/              # PWA icons
│   ├── icon-192.png
│   └── icon-512.png
├── README.md
├── LICENSE
└── CONTRIBUTING.md
```

---

## Offline Support

This is a full PWA. On first visit:

1. The Service Worker installs and pre-caches all assets
2. Fonts, CSS, JS, and HTML are stored locally
3. Subsequent visits work without any internet connection
4. An "Offline Mode" banner appears when you lose connectivity
5. The API Tester playground is the only feature that needs internet (it makes real HTTP requests)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to suggest new tools or report issues.

**Quick version:**
1. Fork the repo
2. Add your tool to `js/tools-data.js` following the existing format
3. Open a PR

---

## License

MIT — see [LICENSE](LICENSE)

---

Built by [xksh808dsh](https://github.com/xksh808dsh) | Created with [Perplexity Computer](https://www.perplexity.ai/computer)
