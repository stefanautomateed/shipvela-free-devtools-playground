// ═══════════════════════════════════════
// Free Dev Tools & Playground — App Logic
// Search, filtering, bookmarking, theme,
// Service Worker, offline support
// ═══════════════════════════════════════

(function () {
  'use strict';

  // ── Service Worker Registration ──
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(function () {
      // SW registration failed — app still works without it
    });
  }

  // ── Offline / Online Detection ──
  const offlineBanner = document.getElementById('offlineBanner');

  function updateOnlineStatus() {
    if (!navigator.onLine) {
      if (offlineBanner) offlineBanner.classList.add('visible');
      document.body.classList.add('is-offline');
    } else {
      if (offlineBanner) offlineBanner.classList.remove('visible');
      document.body.classList.remove('is-offline');
    }
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();

  // ── State ──
  let currentCategory = 'all';
  let searchQuery = '';
  let showBookmarksOnly = false;
  let bookmarks = {};

  // Load bookmarks from localStorage (with fallback to in-memory)
  try {
    const stored = localStorage.getItem('devtools_bookmarks');
    if (stored) {
      bookmarks = JSON.parse(stored);
    }
  } catch (e) {
    // localStorage unavailable — stay in-memory
  }

  function saveBookmarks() {
    try {
      localStorage.setItem('devtools_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      // localStorage unavailable — bookmarks persist in memory only
    }
  }

  // ── Theme Toggle ──
  const themeBtn = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let currentTheme = root.getAttribute('data-theme') || 'dark';

  if (themeBtn) {
    updateThemeIcon();
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', currentTheme);
      themeBtn.setAttribute('aria-label', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`);
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    if (!themeBtn) return;
    themeBtn.innerHTML = currentTheme === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  // ── Hero Particles ──
  const particleContainer = document.getElementById('heroParticles');
  if (particleContainer) {
    for (let i = 0; i < 30; i++) {
      const dot = document.createElement('div');
      dot.className = 'particle';
      const size = Math.random() * 4 + 2;
      dot.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 15 + 10}s;
        animation-delay: ${Math.random() * 10}s;
      `;
      particleContainer.appendChild(dot);
    }
  }

  // ── Terminal Typing Animation ──
  const termLines = [
    { el: 'termLine1', text: '<span class="prompt">$</span> <span class="cmd">npx devtools --discover</span>' },
    { el: 'termLine2', text: '<span class="output">✓ Found 80+ free developer tools</span>' },
    { el: 'termLine3', text: '<span class="prompt">$</span> <span class="cmd">devtools playground --start</span>' },
    { el: 'termLine4', text: '<span class="output">⚡ Playground ready — start coding!</span><span class="cursor"></span>' }
  ];

  function typeTerminal() {
    let lineIdx = 0;

    function typeLine() {
      if (lineIdx >= termLines.length) return;
      const { el, text } = termLines[lineIdx];
      const elem = document.getElementById(el);
      if (!elem) return;

      // Get plain text for typing effect
      const tmp = document.createElement('div');
      tmp.innerHTML = text;
      const plain = tmp.textContent;

      let charIdx = 0;
      elem.innerHTML = '';
      const cursor = '<span class="cursor"></span>';

      function typeChar() {
        if (charIdx <= plain.length) {
          // Build partial HTML
          elem.innerHTML = text.slice(0, findHtmlIndex(text, charIdx)) + cursor;
          charIdx++;
          setTimeout(typeChar, 25 + Math.random() * 35);
        } else {
          elem.innerHTML = text + (lineIdx === termLines.length - 1 ? '<span class="cursor"></span>' : '');
          lineIdx++;
          setTimeout(typeLine, 300);
        }
      }
      typeChar();
    }
    typeLine();
  }

  // Map plain-text index to HTML index (skip tags)
  function findHtmlIndex(html, plainIdx) {
    let pi = 0;
    let inTag = false;
    for (let i = 0; i < html.length; i++) {
      if (html[i] === '<') { inTag = true; continue; }
      if (html[i] === '>') { inTag = false; continue; }
      if (!inTag) {
        if (pi === plainIdx) return i;
        pi++;
      }
    }
    return html.length;
  }

  // Start typing after a short delay
  setTimeout(typeTerminal, 500);

  // ── Build Category Tabs ──
  const categoryBar = document.getElementById('categoryBar');
  if (categoryBar && typeof CATEGORIES !== 'undefined') {
    CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'cat-tab';
      btn.dataset.category = cat.id;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', 'false');
      btn.textContent = `${cat.emoji} ${cat.name}`;
      btn.addEventListener('click', () => selectCategory(cat.id));
      categoryBar.appendChild(btn);
    });
  }

  function selectCategory(catId) {
    currentCategory = catId;
    document.querySelectorAll('.cat-tab').forEach(btn => {
      const isActive = btn.dataset.category === catId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    renderTools();

    // Update hash
    if (catId !== 'all') {
      history.replaceState(null, '', `#${catId}`);
    } else {
      history.replaceState(null, '', window.location.pathname);
    }
  }

  // ── Build Tool Cards ──
  const toolsGrid = document.getElementById('toolsGrid');
  const noResults = document.getElementById('noResults');

  function getCategoryInfo(catId) {
    return CATEGORIES.find(c => c.id === catId) || { name: catId, accent: '#58a6ff' };
  }

  function renderTools() {
    if (!toolsGrid || typeof TOOLS === 'undefined') return;

    const query = searchQuery.toLowerCase().trim();
    const filtered = TOOLS.filter(tool => {
      // Category filter
      if (currentCategory !== 'all' && tool.category !== currentCategory) return false;

      // Bookmark filter
      if (showBookmarksOnly && !bookmarks[tool.name]) return false;

      // Search filter
      if (query) {
        const searchable = `${tool.name} ${tool.description} ${tool.tags.join(' ')} ${tool.category}`.toLowerCase();
        return searchable.includes(query);
      }
      return true;
    });

    toolsGrid.innerHTML = '';

    if (filtered.length === 0) {
      noResults.hidden = false;
      return;
    }
    noResults.hidden = true;

    filtered.forEach((tool, i) => {
      const cat = getCategoryInfo(tool.category);
      const isBookmarked = bookmarks[tool.name];

      const card = document.createElement('div');
      card.className = 'tool-card';
      card.style.animationDelay = `${Math.min(i * 30, 300)}ms`;

      card.innerHTML = `
        <div class="card-top">
          <div class="card-icon-name">
            <span class="card-emoji">${tool.emoji}</span>
            <span class="card-name">${tool.name}</span>
          </div>
          <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" data-tool="${tool.name}" aria-label="${isBookmarked ? 'Remove bookmark' : 'Bookmark'} ${tool.name}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </button>
        </div>
        <p class="card-desc">${tool.description}</p>
        <div class="card-tags">
          ${tool.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
        </div>
        <div class="card-bottom">
          <span class="card-category" style="background: ${cat.accent}15; color: ${cat.accent}">${cat.name}</span>
          <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="card-visit">
            Visit
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      `;

      toolsGrid.appendChild(card);
    });

    // Bind bookmark buttons
    toolsGrid.querySelectorAll('.bookmark-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const name = btn.dataset.tool;
        if (bookmarks[name]) {
          delete bookmarks[name];
          btn.classList.remove('bookmarked');
          btn.querySelector('svg').setAttribute('fill', 'none');
        } else {
          bookmarks[name] = true;
          btn.classList.add('bookmarked');
          btn.querySelector('svg').setAttribute('fill', 'currentColor');
        }
        saveBookmarks();
        if (showBookmarksOnly) renderTools();
      });
    });
  }

  // ── Search ──
  const heroSearch = document.getElementById('heroSearch');
  const toolsSearch = document.getElementById('toolsSearch');

  function handleSearch(val) {
    searchQuery = val;
    renderTools();
  }

  if (heroSearch) {
    heroSearch.addEventListener('input', (e) => {
      handleSearch(e.target.value);
      if (toolsSearch) toolsSearch.value = e.target.value;
    });
  }

  if (toolsSearch) {
    toolsSearch.addEventListener('input', (e) => {
      handleSearch(e.target.value);
      if (heroSearch) heroSearch.value = e.target.value;
    });
  }

  // Keyboard shortcut: / to focus search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      (heroSearch || toolsSearch)?.focus();
    }
  });

  // ── Bookmark Filter ──
  const bookmarkFilterBtn = document.getElementById('bookmarkFilter');
  if (bookmarkFilterBtn) {
    bookmarkFilterBtn.addEventListener('click', () => {
      showBookmarksOnly = !showBookmarksOnly;
      bookmarkFilterBtn.classList.toggle('active', showBookmarksOnly);
      renderTools();
    });
  }

  // ── Hash routing ──
  function handleHash() {
    const hash = window.location.hash.slice(1);
    if (hash && CATEGORIES.find(c => c.id === hash)) {
      selectCategory(hash);
    }
  }
  window.addEventListener('hashchange', handleHash);

  // ── Init ──
  handleHash();
  renderTools();

  // ── Playground Tabs ──
  const pgTabs = document.querySelectorAll('.pg-tab');
  const pgPanels = document.querySelectorAll('.pg-panel');

  pgTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.pgTab;
      pgTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      pgPanels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById(`panel-${target}`)?.classList.add('active');
    });
  });

})();
