// Free Dev Tools & Playground — Tool Directory Data
// 80+ curated free developer tools organized by category

const CATEGORIES = [
  { id: 'ai-coding', name: 'AI Coding Assistants', emoji: '🤖', accent: '#39d353' },
  { id: 'playgrounds', name: 'Code Playgrounds', emoji: '🎮', accent: '#3fb950' },
  { id: 'frontend', name: 'Frontend Libraries', emoji: '🎨', accent: '#d29922' },
  { id: 'backend', name: 'Backend Frameworks', emoji: '⚙️', accent: '#bc8cff' },
  { id: 'design', name: 'Design & UI Tools', emoji: '🖌️', accent: '#f778ba' },
  { id: 'api-testing', name: 'API & Testing', emoji: '🔌', accent: '#58a6ff' },
  { id: 'databases', name: 'Databases & BaaS', emoji: '🗄️', accent: '#f85149' },
  { id: 'devops', name: 'DevOps & Hosting', emoji: '🚀', accent: '#3fb9a0' },
  { id: 'ai-ml', name: 'AI & ML Platforms', emoji: '🧠', accent: '#d29922' },
  { id: 'nocode', name: 'No-Code / Low-Code', emoji: '⚡', accent: '#a3e635' },
  { id: 'vcs', name: 'Version Control & Collab', emoji: '📂', accent: '#8b949e' },
  { id: 'utilities', name: 'Developer Utilities', emoji: '🔧', accent: '#a78bfa' }
];

const TOOLS = [
  // ── AI Coding Assistants ──
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer that suggests code completions in your editor.',
    url: 'https://github.com/features/copilot',
    category: 'ai-coding',
    tags: ['AI-Powered', 'Free Tier', 'VS Code'],
    emoji: '🤖'
  },
  {
    name: 'Gemini Code Assist',
    description: 'Google\'s AI coding assistant with generous free tier for developers.',
    url: 'https://cloud.google.com/products/gemini/code-assist',
    category: 'ai-coding',
    tags: ['AI-Powered', 'Free Tier', 'Google'],
    emoji: '✨'
  },
  {
    name: 'Amazon CodeWhisperer',
    description: 'AI-powered code generator free for individual developers.',
    url: 'https://aws.amazon.com/codewhisperer/',
    category: 'ai-coding',
    tags: ['AI-Powered', 'Free', 'AWS'],
    emoji: '📝'
  },
  {
    name: 'Codeium',
    description: 'Free AI code completion supporting 70+ programming languages.',
    url: 'https://codeium.com/',
    category: 'ai-coding',
    tags: ['AI-Powered', 'Free', '70+ Languages'],
    emoji: '⚡'
  },
  {
    name: 'Cody by Sourcegraph',
    description: 'AI coding assistant that understands your entire codebase.',
    url: 'https://sourcegraph.com/cody',
    category: 'ai-coding',
    tags: ['AI-Powered', 'Free Tier', 'Codebase-Aware'],
    emoji: '🔍'
  },
  {
    name: 'Tabnine',
    description: 'AI code completion with privacy-first approach and free tier.',
    url: 'https://www.tabnine.com/',
    category: 'ai-coding',
    tags: ['AI-Powered', 'Free Tier', 'Privacy'],
    emoji: '🔒'
  },
  {
    name: 'OpenCode',
    description: 'Free, open-source AI coding tool — no account required.',
    url: 'https://opencode.ai/',
    category: 'ai-coding',
    tags: ['Open Source', 'Free', 'No Signup'],
    emoji: '🆓'
  },
  {
    name: 'Claude Code',
    description: 'Anthropic\'s AI assistant with strong coding capabilities and free tier.',
    url: 'https://claude.ai/',
    category: 'ai-coding',
    tags: ['AI-Powered', 'Free Tier', 'Anthropic'],
    emoji: '🧠'
  },

  // ── Code Playgrounds ──
  {
    name: 'CodeSandbox',
    description: 'Instant cloud development environment for web applications.',
    url: 'https://codesandbox.io/',
    category: 'playgrounds',
    tags: ['Free Tier', 'Cloud IDE', 'Collaborative'],
    emoji: '📦'
  },
  {
    name: 'StackBlitz',
    description: 'Full-stack web IDE powered by WebContainers — runs Node.js in the browser.',
    url: 'https://stackblitz.com/',
    category: 'playgrounds',
    tags: ['Free', 'WebContainers', 'Node.js'],
    emoji: '⚡'
  },
  {
    name: 'Replit',
    description: 'Browser-based IDE supporting 50+ languages with free tier.',
    url: 'https://replit.com/',
    category: 'playgrounds',
    tags: ['Free Tier', 'Multi-Language', 'Collaborative'],
    emoji: '💻'
  },
  {
    name: 'JDoodle',
    description: 'Online compiler and editor for 70+ languages — no signup needed.',
    url: 'https://www.jdoodle.com/',
    category: 'playgrounds',
    tags: ['Free', 'No Signup', '70+ Languages'],
    emoji: '▶️'
  },
  {
    name: 'PlayCode',
    description: 'Fast JavaScript playground with instant preview and NPM support.',
    url: 'https://playcode.io/',
    category: 'playgrounds',
    tags: ['Free Tier', 'Fast', 'NPM Support'],
    emoji: '🎯'
  },
  {
    name: 'CodePen',
    description: 'Social development environment for front-end designers and developers.',
    url: 'https://codepen.io/',
    category: 'playgrounds',
    tags: ['Free Tier', 'Community', 'Frontend'],
    emoji: '✏️'
  },
  {
    name: 'JSFiddle',
    description: 'Classic online editor for testing HTML, CSS, and JavaScript snippets.',
    url: 'https://jsfiddle.net/',
    category: 'playgrounds',
    tags: ['Free', 'Lightweight', 'Classic'],
    emoji: '🎻'
  },
  {
    name: 'Glitch',
    description: 'Friendly community platform to build and remix full-stack web apps.',
    url: 'https://glitch.com/',
    category: 'playgrounds',
    tags: ['Free Tier', 'Community', 'Full-Stack'],
    emoji: '🎏'
  },

  // ── Frontend Libraries ──
  {
    name: 'React',
    description: 'The library for building user interfaces with a component model.',
    url: 'https://react.dev/',
    category: 'frontend',
    tags: ['Open Source', 'Meta', 'Components'],
    emoji: '⚛️'
  },
  {
    name: 'Vue.js',
    description: 'Progressive JavaScript framework for building modern web UIs.',
    url: 'https://vuejs.org/',
    category: 'frontend',
    tags: ['Open Source', 'Progressive', 'Reactive'],
    emoji: '💚'
  },
  {
    name: 'Svelte',
    description: 'Compiler-based framework that shifts work from browser to build step.',
    url: 'https://svelte.dev/',
    category: 'frontend',
    tags: ['Open Source', 'Compiler', 'Fast'],
    emoji: '🔥'
  },
  {
    name: 'HTMX',
    description: 'Access modern browser features directly from HTML — no JS needed.',
    url: 'https://htmx.org/',
    category: 'frontend',
    tags: ['Open Source', 'Lightweight', 'HTML-First'],
    emoji: '📄'
  },
  {
    name: 'Alpine.js',
    description: 'Lightweight reactive framework composable directly in your markup.',
    url: 'https://alpinejs.dev/',
    category: 'frontend',
    tags: ['Open Source', 'Lightweight', 'Declarative'],
    emoji: '🏔️'
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapidly building custom designs.',
    url: 'https://tailwindcss.com/',
    category: 'frontend',
    tags: ['Open Source', 'Utility-First', 'CSS'],
    emoji: '🎨'
  },
  {
    name: 'shadcn/ui',
    description: 'Beautifully designed, copy-paste components built with Radix and Tailwind.',
    url: 'https://ui.shadcn.com/',
    category: 'frontend',
    tags: ['Open Source', 'Components', 'Tailwind'],
    emoji: '🧩'
  },
  {
    name: 'DaisyUI',
    description: 'Tailwind CSS component library with semantic class names and themes.',
    url: 'https://daisyui.com/',
    category: 'frontend',
    tags: ['Open Source', 'Tailwind', 'Themes'],
    emoji: '🌼'
  },

  // ── Backend Frameworks ──
  {
    name: 'Express.js',
    description: 'Fast, unopinionated web framework for Node.js applications.',
    url: 'https://expressjs.com/',
    category: 'backend',
    tags: ['Open Source', 'Node.js', 'Minimal'],
    emoji: '🚂'
  },
  {
    name: 'Nest.js',
    description: 'Progressive Node.js framework for scalable server-side applications.',
    url: 'https://nestjs.com/',
    category: 'backend',
    tags: ['Open Source', 'TypeScript', 'Enterprise'],
    emoji: '🏗️'
  },
  {
    name: 'FastAPI',
    description: 'Modern, high-performance Python web framework with automatic OpenAPI docs.',
    url: 'https://fastapi.tiangolo.com/',
    category: 'backend',
    tags: ['Open Source', 'Python', 'Fast'],
    emoji: '⚡'
  },
  {
    name: 'Flask',
    description: 'Lightweight Python web framework — simple, flexible, fine-grained control.',
    url: 'https://flask.palletsprojects.com/',
    category: 'backend',
    tags: ['Open Source', 'Python', 'Micro'],
    emoji: '🧪'
  },
  {
    name: 'Deno',
    description: 'Secure runtime for JavaScript and TypeScript with built-in tooling.',
    url: 'https://deno.com/',
    category: 'backend',
    tags: ['Open Source', 'TypeScript', 'Secure'],
    emoji: '🦕'
  },
  {
    name: 'Bun',
    description: 'All-in-one JavaScript runtime with bundler, transpiler, and package manager.',
    url: 'https://bun.sh/',
    category: 'backend',
    tags: ['Open Source', 'Fast', 'All-in-One'],
    emoji: '🍞'
  },
  {
    name: 'Hono',
    description: 'Ultrafast web framework for Cloudflare Workers, Deno, Bun, and Node.js.',
    url: 'https://hono.dev/',
    category: 'backend',
    tags: ['Open Source', 'Edge', 'Ultrafast'],
    emoji: '🔥'
  },
  {
    name: 'Fastify',
    description: 'Low-overhead Node.js web framework focused on developer experience.',
    url: 'https://fastify.dev/',
    category: 'backend',
    tags: ['Open Source', 'Node.js', 'Fast'],
    emoji: '🏎️'
  },

  // ── Design & UI Tools ──
  {
    name: 'Figma',
    description: 'Collaborative interface design tool with generous free tier.',
    url: 'https://www.figma.com/',
    category: 'design',
    tags: ['Free Tier', 'Collaborative', 'Design'],
    emoji: '🖌️'
  },
  {
    name: 'Penpot',
    description: 'Open-source design and prototyping platform for cross-domain teams.',
    url: 'https://penpot.app/',
    category: 'design',
    tags: ['Open Source', 'Free', 'SVG-Based'],
    emoji: '✒️'
  },
  {
    name: 'Excalidraw',
    description: 'Virtual whiteboard for hand-drawn-style diagrams and sketches.',
    url: 'https://excalidraw.com/',
    category: 'design',
    tags: ['Open Source', 'Free', 'Diagrams'],
    emoji: '📐'
  },
  {
    name: 'Whimsical',
    description: 'Visual workspace for flowcharts, wireframes, and mind maps.',
    url: 'https://whimsical.com/',
    category: 'design',
    tags: ['Free Tier', 'Wireframes', 'Flowcharts'],
    emoji: '💭'
  },
  {
    name: 'Canva',
    description: 'Easy-to-use graphic design platform with thousands of free templates.',
    url: 'https://www.canva.com/',
    category: 'design',
    tags: ['Free Tier', 'Templates', 'Easy'],
    emoji: '🎨'
  },
  {
    name: 'Coolors',
    description: 'Super-fast color palette generator for designers and developers.',
    url: 'https://coolors.co/',
    category: 'design',
    tags: ['Free', 'Colors', 'Generator'],
    emoji: '🌈'
  },
  {
    name: 'Fontshare',
    description: 'Free fonts service with high-quality, professionally designed typefaces.',
    url: 'https://www.fontshare.com/',
    category: 'design',
    tags: ['Free', 'Fonts', 'Professional'],
    emoji: '🔤'
  },
  {
    name: 'Google Fonts',
    description: 'Library of 1,500+ open-source fonts optimized for the web.',
    url: 'https://fonts.google.com/',
    category: 'design',
    tags: ['Free', 'Open Source', 'Fonts'],
    emoji: '🅰️'
  },

  // ── API & Testing ──
  {
    name: 'Postman',
    description: 'Comprehensive API platform for building, testing, and documenting APIs.',
    url: 'https://www.postman.com/',
    category: 'api-testing',
    tags: ['Free Tier', 'API', 'Collaborative'],
    emoji: '📮'
  },
  {
    name: 'Insomnia',
    description: 'Open-source API client for REST, GraphQL, gRPC, and WebSockets.',
    url: 'https://insomnia.rest/',
    category: 'api-testing',
    tags: ['Open Source', 'REST', 'GraphQL'],
    emoji: '😴'
  },
  {
    name: 'Hoppscotch',
    description: 'Open-source API development ecosystem — lightweight and fast.',
    url: 'https://hoppscotch.io/',
    category: 'api-testing',
    tags: ['Open Source', 'Free', 'Lightweight'],
    emoji: '🦘'
  },
  {
    name: 'Thunder Client',
    description: 'Lightweight REST API client extension for Visual Studio Code.',
    url: 'https://www.thunderclient.com/',
    category: 'api-testing',
    tags: ['Free', 'VS Code', 'Lightweight'],
    emoji: '⚡'
  },
  {
    name: 'HTTPie',
    description: 'User-friendly command-line HTTP client and API testing tool.',
    url: 'https://httpie.io/',
    category: 'api-testing',
    tags: ['Open Source', 'CLI', 'User-Friendly'],
    emoji: '🌐'
  },
  {
    name: 'Swagger/OpenAPI',
    description: 'Industry-standard tools for designing, building, and documenting APIs.',
    url: 'https://swagger.io/',
    category: 'api-testing',
    tags: ['Open Source', 'Standard', 'Documentation'],
    emoji: '📖'
  },
  {
    name: 'Stoplight',
    description: 'API design and documentation platform free for individual use.',
    url: 'https://stoplight.io/',
    category: 'api-testing',
    tags: ['Free Tier', 'API Design', 'Documentation'],
    emoji: '🚦'
  },
  {
    name: 'RapidAPI Hub',
    description: 'World\'s largest API hub — discover, test, and connect to thousands of APIs.',
    url: 'https://rapidapi.com/',
    category: 'api-testing',
    tags: ['Free Tier', 'API Hub', 'Discovery'],
    emoji: '🔗'
  },

  // ── Databases & BaaS ──
  {
    name: 'Supabase',
    description: 'Open-source Firebase alternative with Postgres, auth, and realtime.',
    url: 'https://supabase.com/',
    category: 'databases',
    tags: ['Open Source', 'Free Tier', 'Postgres'],
    emoji: '💚'
  },
  {
    name: 'Firebase',
    description: 'Google\'s app development platform with generous free Spark plan.',
    url: 'https://firebase.google.com/',
    category: 'databases',
    tags: ['Free Tier', 'Google', 'Real-Time'],
    emoji: '🔥'
  },
  {
    name: 'PocketBase',
    description: 'Open-source backend in a single file — SQLite, auth, realtime, and admin UI.',
    url: 'https://pocketbase.io/',
    category: 'databases',
    tags: ['Open Source', 'Free', 'Self-Host'],
    emoji: '📱'
  },
  {
    name: 'Appwrite',
    description: 'Open-source backend platform with database, auth, storage, and functions.',
    url: 'https://appwrite.io/',
    category: 'databases',
    tags: ['Open Source', 'Free', 'Self-Host'],
    emoji: '✍️'
  },
  {
    name: 'Neon',
    description: 'Serverless Postgres with branching, autoscaling, and a generous free tier.',
    url: 'https://neon.tech/',
    category: 'databases',
    tags: ['Free Tier', 'Serverless', 'Postgres'],
    emoji: '🟢'
  },
  {
    name: 'Turso',
    description: 'Edge-hosted SQLite database built on libSQL with free tier.',
    url: 'https://turso.tech/',
    category: 'databases',
    tags: ['Free Tier', 'Edge', 'SQLite'],
    emoji: '🐢'
  },
  {
    name: 'MongoDB Atlas',
    description: 'Cloud-hosted MongoDB with a free shared cluster for development.',
    url: 'https://www.mongodb.com/atlas',
    category: 'databases',
    tags: ['Free Tier', 'NoSQL', 'Cloud'],
    emoji: '🍃'
  },
  {
    name: 'Upstash',
    description: 'Serverless Redis and Kafka with per-request pricing and free tier.',
    url: 'https://upstash.com/',
    category: 'databases',
    tags: ['Free Tier', 'Serverless', 'Redis'],
    emoji: '📤'
  },

  // ── DevOps & Hosting ──
  {
    name: 'Vercel',
    description: 'Frontend cloud platform with instant deployments and edge functions.',
    url: 'https://vercel.com/',
    category: 'devops',
    tags: ['Free Tier', 'Edge', 'Next.js'],
    emoji: '▲'
  },
  {
    name: 'Netlify',
    description: 'Web development platform with CI/CD, serverless functions, and free tier.',
    url: 'https://www.netlify.com/',
    category: 'devops',
    tags: ['Free Tier', 'CI/CD', 'Jamstack'],
    emoji: '🌐'
  },
  {
    name: 'Railway',
    description: 'Infrastructure platform for deploying apps with minimal configuration.',
    url: 'https://railway.app/',
    category: 'devops',
    tags: ['Free Tier', 'Simple', 'Full-Stack'],
    emoji: '🚃'
  },
  {
    name: 'Cloudflare Pages',
    description: 'JAMstack platform with unlimited bandwidth on the free plan.',
    url: 'https://pages.cloudflare.com/',
    category: 'devops',
    tags: ['Free', 'CDN', 'Unlimited'],
    emoji: '☁️'
  },
  {
    name: 'GitHub Pages',
    description: 'Free static site hosting directly from your GitHub repository.',
    url: 'https://pages.github.com/',
    category: 'devops',
    tags: ['Free', 'GitHub', 'Static'],
    emoji: '📄'
  },
  {
    name: 'Render',
    description: 'Cloud platform to build and run apps with free web service tier.',
    url: 'https://render.com/',
    category: 'devops',
    tags: ['Free Tier', 'Auto-Deploy', 'Docker'],
    emoji: '🎬'
  },
  {
    name: 'Fly.io',
    description: 'Deploy app servers close to users globally with free allowances.',
    url: 'https://fly.io/',
    category: 'devops',
    tags: ['Free Tier', 'Global', 'Edge'],
    emoji: '✈️'
  },
  {
    name: 'Coolify',
    description: 'Self-hostable Heroku/Netlify alternative — free and open source.',
    url: 'https://coolify.io/',
    category: 'devops',
    tags: ['Open Source', 'Free', 'Self-Host'],
    emoji: '❄️'
  },

  // ── AI & ML Platforms ──
  {
    name: 'Hugging Face',
    description: 'The AI community hub — free models, datasets, and Spaces for deployment.',
    url: 'https://huggingface.co/',
    category: 'ai-ml',
    tags: ['Free', 'Open Source', 'Models'],
    emoji: '🤗'
  },
  {
    name: 'Google AI Studio',
    description: 'Free access to Gemini models with a browser-based prompt IDE.',
    url: 'https://aistudio.google.com/',
    category: 'ai-ml',
    tags: ['Free', 'Gemini', 'Google'],
    emoji: '🧪'
  },
  {
    name: 'OpenRouter',
    description: 'Unified API for hundreds of AI models — many with free access.',
    url: 'https://openrouter.ai/',
    category: 'ai-ml',
    tags: ['Free Models', 'Unified API', 'Multi-Model'],
    emoji: '🔀'
  },
  {
    name: 'Groq',
    description: 'Ultra-fast LLM inference with free developer access.',
    url: 'https://groq.com/',
    category: 'ai-ml',
    tags: ['Free', 'Fast', 'Inference'],
    emoji: '⚡'
  },
  {
    name: 'Ollama',
    description: 'Run large language models locally on your machine — completely free.',
    url: 'https://ollama.com/',
    category: 'ai-ml',
    tags: ['Free', 'Local', 'Open Source'],
    emoji: '🦙'
  },
  {
    name: 'LM Studio',
    description: 'Desktop app to discover, download, and run local LLMs for free.',
    url: 'https://lmstudio.ai/',
    category: 'ai-ml',
    tags: ['Free', 'Local', 'Desktop'],
    emoji: '🖥️'
  },
  {
    name: 'Replicate',
    description: 'Run open-source ML models in the cloud with free starter credits.',
    url: 'https://replicate.com/',
    category: 'ai-ml',
    tags: ['Free Credits', 'Cloud', 'Open Source'],
    emoji: '🔄'
  },
  {
    name: 'Together AI',
    description: 'Fast inference platform for open-source models with free tier.',
    url: 'https://www.together.ai/',
    category: 'ai-ml',
    tags: ['Free Tier', 'Fast', 'Open Source'],
    emoji: '🤝'
  },

  // ── No-Code / Low-Code ──
  {
    name: 'N8N',
    description: 'Free, self-hostable workflow automation with 200+ integrations.',
    url: 'https://n8n.io/',
    category: 'nocode',
    tags: ['Open Source', 'Free', 'Automation'],
    emoji: '🔗'
  },
  {
    name: 'Zapier',
    description: 'Connect your apps and automate workflows with a free starter plan.',
    url: 'https://zapier.com/',
    category: 'nocode',
    tags: ['Free Tier', 'Automation', 'Integrations'],
    emoji: '⚡'
  },
  {
    name: 'Make',
    description: 'Visual automation platform connecting apps with free plan included.',
    url: 'https://www.make.com/',
    category: 'nocode',
    tags: ['Free Tier', 'Visual', 'Automation'],
    emoji: '🔄'
  },
  {
    name: 'Lovable',
    description: 'AI-powered website builder that turns prompts into production sites.',
    url: 'https://lovable.dev/',
    category: 'nocode',
    tags: ['AI-Powered', 'Free Tier', 'Builder'],
    emoji: '💜'
  },
  {
    name: 'Bolt.new',
    description: 'AI-powered full-stack app builder — prompt to production in seconds.',
    url: 'https://bolt.new/',
    category: 'nocode',
    tags: ['AI-Powered', 'Free Tier', 'Full-Stack'],
    emoji: '⚡'
  },
  {
    name: 'v0 by Vercel',
    description: 'AI-powered UI generator that creates React components from prompts.',
    url: 'https://v0.dev/',
    category: 'nocode',
    tags: ['AI-Powered', 'Free Tier', 'React'],
    emoji: '🎯'
  },
  {
    name: 'Webflow',
    description: 'Visual web development platform with CMS and free starter plan.',
    url: 'https://webflow.com/',
    category: 'nocode',
    tags: ['Free Tier', 'Visual', 'CMS'],
    emoji: '🌊'
  },
  {
    name: 'Glide',
    description: 'Build apps from spreadsheets — no code required, free tier available.',
    url: 'https://www.glideapps.com/',
    category: 'nocode',
    tags: ['Free Tier', 'No-Code', 'Spreadsheets'],
    emoji: '📊'
  },

  // ── Version Control & Collaboration ──
  {
    name: 'GitHub',
    description: 'The world\'s leading platform for version control and collaboration.',
    url: 'https://github.com/',
    category: 'vcs',
    tags: ['Free', 'Git', 'Community'],
    emoji: '🐙'
  },
  {
    name: 'GitLab',
    description: 'Complete DevOps platform with Git hosting, CI/CD, and free tier.',
    url: 'https://gitlab.com/',
    category: 'vcs',
    tags: ['Free Tier', 'DevOps', 'CI/CD'],
    emoji: '🦊'
  },
  {
    name: 'Bitbucket',
    description: 'Git hosting with built-in CI/CD pipelines and free tier for teams.',
    url: 'https://bitbucket.org/',
    category: 'vcs',
    tags: ['Free Tier', 'Git', 'Atlassian'],
    emoji: '🪣'
  },
  {
    name: 'Linear',
    description: 'Streamlined project management for software teams with free tier.',
    url: 'https://linear.app/',
    category: 'vcs',
    tags: ['Free Tier', 'Project Management', 'Fast'],
    emoji: '📋'
  },
  {
    name: 'Notion',
    description: 'All-in-one workspace for docs, wikis, and project management.',
    url: 'https://www.notion.so/',
    category: 'vcs',
    tags: ['Free Tier', 'Docs', 'Wiki'],
    emoji: '📝'
  },
  {
    name: 'Obsidian',
    description: 'Private, flexible knowledge base that works on local Markdown files.',
    url: 'https://obsidian.md/',
    category: 'vcs',
    tags: ['Free', 'Markdown', 'Local-First'],
    emoji: '💎'
  },
  {
    name: 'Excalidraw',
    description: 'Collaborative virtual whiteboard for hand-drawn-style diagrams.',
    url: 'https://excalidraw.com/',
    category: 'vcs',
    tags: ['Open Source', 'Free', 'Diagrams'],
    emoji: '📐'
  },
  {
    name: 'Mermaid',
    description: 'Generate diagrams and charts from text using a Markdown-like syntax.',
    url: 'https://mermaid.js.org/',
    category: 'vcs',
    tags: ['Open Source', 'Free', 'Diagrams'],
    emoji: '🧜'
  },

  // ── Developer Utilities ──
  {
    name: 'VS Code',
    description: 'Free, open-source code editor with a massive extension ecosystem.',
    url: 'https://code.visualstudio.com/',
    category: 'utilities',
    tags: ['Free', 'Open Source', 'Editor'],
    emoji: '💠'
  },
  {
    name: 'Prettier',
    description: 'Opinionated code formatter supporting many languages and editors.',
    url: 'https://prettier.io/',
    category: 'utilities',
    tags: ['Open Source', 'Free', 'Formatter'],
    emoji: '✨'
  },
  {
    name: 'ESLint',
    description: 'Pluggable JavaScript linter for identifying and fixing code issues.',
    url: 'https://eslint.org/',
    category: 'utilities',
    tags: ['Open Source', 'Free', 'Linter'],
    emoji: '🔍'
  },
  {
    name: 'Bun',
    description: 'Blazing-fast JavaScript runtime, bundler, transpiler, and package manager.',
    url: 'https://bun.sh/',
    category: 'utilities',
    tags: ['Open Source', 'Fast', 'All-in-One'],
    emoji: '🍞'
  },
  {
    name: 'Turborepo',
    description: 'High-performance build system for JavaScript and TypeScript monorepos.',
    url: 'https://turbo.build/',
    category: 'utilities',
    tags: ['Open Source', 'Monorepo', 'Fast'],
    emoji: '🌀'
  },
  {
    name: 'Nx',
    description: 'Smart build system with first-class monorepo support and CI optimization.',
    url: 'https://nx.dev/',
    category: 'utilities',
    tags: ['Open Source', 'Build System', 'Monorepo'],
    emoji: '🏗️'
  },
  {
    name: 'ffmpeg',
    description: 'The Swiss Army knife of audio and video processing — free and open source.',
    url: 'https://ffmpeg.org/',
    category: 'utilities',
    tags: ['Open Source', 'Free', 'Media'],
    emoji: '🎬'
  },
  {
    name: 'ImageMagick',
    description: 'Powerful command-line tool for image creation, editing, and conversion.',
    url: 'https://imagemagick.org/',
    category: 'utilities',
    tags: ['Open Source', 'Free', 'Images'],
    emoji: '🖼️'
  }
];
