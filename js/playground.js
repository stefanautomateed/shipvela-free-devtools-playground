// ═══════════════════════════════════════
// Free Dev Tools & Playground — Playgrounds
// Textarea Editor, API Tester, Regex, JSON
// ═══════════════════════════════════════

(function () {
  'use strict';

  // ═══════════ 1. JS/HTML/CSS PLAYGROUND ═══════════

  const starterCode = {
    html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: system-ui, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
      color: #e6edf3;
    }
    h1 {
      font-size: 2rem;
      background: linear-gradient(90deg, #58a6ff, #3fb950);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.5rem;
    }
    p { color: #8b949e; }
    .counter {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    button {
      padding: 0.5rem 1.5rem;
      background: #58a6ff;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    button:hover { opacity: 0.8; }
    #count {
      font-size: 2rem;
      font-weight: bold;
      font-family: 'JetBrains Mono', monospace;
      color: #3fb950;
      min-width: 3ch;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Hello, DevTools!</h1>
  <p>Edit this code and click Run ▶</p>
  <div class="counter">
    <button onclick="decrement()">−</button>
    <span id="count">0</span>
    <button onclick="increment()">+</button>
  </div>
  <script>
    let count = 0;
    const el = document.getElementById('count');
    function increment() { el.textContent = ++count; }
    function decrement() { el.textContent = --count; }
  </script>
</body>
</html>`,
    css: `/* CSS is embedded in the HTML above.
   You can edit styles there, or use
   this tab for CSS-only experiments. */

body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #0d1117;
  color: #e6edf3;
}

.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #58a6ff, #bc8cff);
  border-radius: 12px;
  animation: spin 3s ease-in-out infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
}`,
    javascript: `// JavaScript experiments go here
// Use console.log() — output appears in browser devtools

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate first 10 Fibonacci numbers
const results = [];
for (let i = 0; i < 10; i++) {
  results.push(fibonacci(i));
}

console.log('Fibonacci:', results);
console.log('Sum:', results.reduce((a, b) => a + b, 0));`
  };

  let currentLang = 'html';
  const editorContent = { ...starterCode };

  // ── Build textarea-based editor ──
  const editorMount = document.getElementById('monacoEditor');
  let codeTextarea = null;
  let lineNumbersEl = null;

  if (editorMount) {
    // Replace the mount div with our editor structure
    editorMount.className = 'code-editor-wrap';
    editorMount.id = 'codeEditorWrap';
    editorMount.innerHTML = '';

    lineNumbersEl = document.createElement('div');
    lineNumbersEl.className = 'line-numbers';
    lineNumbersEl.setAttribute('aria-hidden', 'true');

    codeTextarea = document.createElement('textarea');
    codeTextarea.className = 'code-textarea';
    codeTextarea.setAttribute('spellcheck', 'false');
    codeTextarea.setAttribute('autocapitalize', 'off');
    codeTextarea.setAttribute('autocomplete', 'off');
    codeTextarea.setAttribute('autocorrect', 'off');
    codeTextarea.setAttribute('aria-label', 'Code editor');
    codeTextarea.value = editorContent.html;

    editorMount.appendChild(lineNumbersEl);
    editorMount.appendChild(codeTextarea);

    updateLineNumbers();

    // Sync scroll between textarea and line numbers
    codeTextarea.addEventListener('scroll', function () {
      lineNumbersEl.scrollTop = this.scrollTop;
    });

    // Update line numbers on input
    codeTextarea.addEventListener('input', updateLineNumbers);

    // Tab key inserts 2 spaces
    codeTextarea.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        const value = this.value;
        this.value = value.substring(0, start) + '  ' + value.substring(end);
        this.selectionStart = this.selectionEnd = start + 2;
        updateLineNumbers();
      }

      // Ctrl/Cmd+Enter to run
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        runPreview();
      }

      // Auto-close brackets and quotes
      const pairs = { '(': ')', '[': ']', '{': '}', "'": "'", '"': '"', '`': '`' };
      if (pairs[e.key]) {
        const start = this.selectionStart;
        const end = this.selectionEnd;
        if (start !== end) {
          // Wrap selection
          e.preventDefault();
          const selected = this.value.substring(start, end);
          this.value = this.value.substring(0, start) + e.key + selected + pairs[e.key] + this.value.substring(end);
          this.selectionStart = start + 1;
          this.selectionEnd = end + 1;
          updateLineNumbers();
        } else {
          // Insert pair
          e.preventDefault();
          this.value = this.value.substring(0, start) + e.key + pairs[e.key] + this.value.substring(end);
          this.selectionStart = this.selectionEnd = start + 1;
          updateLineNumbers();
        }
      }
    });

    // Auto-run on init
    runPreview();
  }

  function updateLineNumbers() {
    if (!codeTextarea || !lineNumbersEl) return;
    const lines = codeTextarea.value.split('\n').length;
    let html = '';
    for (let i = 1; i <= lines; i++) {
      html += i + '\n';
    }
    lineNumbersEl.textContent = html;
  }

  // Language tab switching
  document.querySelectorAll('.lang-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      // Save current editor content
      if (codeTextarea) {
        editorContent[currentLang] = codeTextarea.value;
      }

      const lang = tab.dataset.lang;
      currentLang = lang;

      document.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (codeTextarea) {
        codeTextarea.value = editorContent[lang] || '';
        updateLineNumbers();
      }
    });
  });

  // Run button
  const btnRun = document.getElementById('btnRun');
  if (btnRun) {
    btnRun.addEventListener('click', runPreview);
  }

  function runPreview() {
    if (codeTextarea) {
      editorContent[currentLang] = codeTextarea.value;
    }

    const iframe = document.getElementById('previewFrame');
    if (!iframe) return;

    // Build the preview document
    let html = editorContent.html || '';

    // If editing CSS/JS tabs, inject them into the HTML
    if (currentLang === 'css') {
      html = `<!DOCTYPE html><html><head><style>${editorContent.css}</style></head><body><div class="box"></div></body></html>`;
    } else if (currentLang === 'javascript') {
      html = `<!DOCTYPE html><html><head><style>body{font-family:system-ui;padding:2rem;background:#0d1117;color:#e6edf3;}</style></head><body><pre id="out"></pre><script>${editorContent.javascript}</script></body></html>`;
    }

    // Write to iframe
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();
  }

  // ═══════════ 2. API TESTER ═══════════

  const btnSend = document.getElementById('btnSend');
  if (btnSend) {
    btnSend.addEventListener('click', sendApiRequest);
  }

  async function sendApiRequest() {
    const method = document.getElementById('apiMethod').value;
    const url = document.getElementById('apiUrl').value.trim();
    const headersRaw = document.getElementById('apiHeaders').value.trim();
    const bodyRaw = document.getElementById('apiBody').value.trim();
    const responseEl = document.getElementById('apiResponse');
    const statusEl = document.getElementById('apiStatus');
    const timeEl = document.getElementById('apiTime');

    if (!url) {
      responseEl.innerHTML = '<code style="color:var(--red)">Please enter a URL</code>';
      return;
    }

    // Parse headers
    let headers = {};
    if (headersRaw) {
      try {
        headers = JSON.parse(headersRaw);
      } catch (e) {
        responseEl.innerHTML = '<code style="color:var(--red)">Invalid JSON in headers</code>';
        return;
      }
    }

    // Build fetch options
    const options = { method, headers };
    if (['POST', 'PUT', 'PATCH'].includes(method) && bodyRaw) {
      options.body = bodyRaw;
      if (!headers['Content-Type']) {
        headers['Content-Type'] = 'application/json';
      }
    }

    responseEl.innerHTML = '<code style="color:var(--text-muted)">Sending request...</code>';
    statusEl.textContent = '';
    statusEl.className = 'response-status';
    timeEl.textContent = '';

    const startTime = performance.now();

    try {
      const response = await fetch(url, options);
      const elapsed = Math.round(performance.now() - startTime);

      statusEl.textContent = `${response.status} ${response.statusText}`;
      statusEl.className = `response-status ${response.ok ? 'ok' : 'error'}`;
      timeEl.textContent = `${elapsed}ms`;

      const contentType = response.headers.get('content-type') || '';
      let body;

      if (contentType.includes('json')) {
        body = await response.json();
        responseEl.innerHTML = `<code>${syntaxHighlightJson(JSON.stringify(body, null, 2))}</code>`;
      } else {
        body = await response.text();
        responseEl.innerHTML = `<code>${escapeHtml(body)}</code>`;
      }
    } catch (err) {
      const elapsed = Math.round(performance.now() - startTime);
      statusEl.textContent = 'Error';
      statusEl.className = 'response-status error';
      timeEl.textContent = `${elapsed}ms`;
      responseEl.innerHTML = `<code style="color:var(--red)">${escapeHtml(err.message)}</code>`;
    }
  }

  // ═══════════ 3. REGEX TESTER ═══════════

  const regexPattern = document.getElementById('regexPattern');
  const regexTest = document.getElementById('regexTest');
  const flagG = document.getElementById('flagG');
  const flagI = document.getElementById('flagI');
  const flagM = document.getElementById('flagM');

  function runRegex() {
    const pattern = regexPattern?.value;
    const testStr = regexTest?.value || '';
    const matchCountEl = document.getElementById('matchCount');
    const matchesEl = document.getElementById('regexMatches');
    const highlightedEl = document.getElementById('regexHighlighted');

    if (!pattern || !matchCountEl || !matchesEl || !highlightedEl) return;

    let flags = '';
    if (flagG?.checked) flags += 'g';
    if (flagI?.checked) flags += 'i';
    if (flagM?.checked) flags += 'm';

    try {
      const regex = new RegExp(pattern, flags);
      const matches = [];
      let match;

      if (flags.includes('g')) {
        while ((match = regex.exec(testStr)) !== null) {
          matches.push({ value: match[0], index: match.index });
          if (match[0].length === 0) regex.lastIndex++; // Prevent infinite loop
        }
      } else {
        match = regex.exec(testStr);
        if (match) {
          matches.push({ value: match[0], index: match.index });
        }
      }

      matchCountEl.textContent = `${matches.length} match${matches.length !== 1 ? 'es' : ''}`;

      // Render match tags
      matchesEl.innerHTML = matches.map(m =>
        `<span class="regex-match-tag">"${escapeHtml(m.value)}" at index ${m.index}</span>`
      ).join('');

      // Render highlighted text
      if (matches.length === 0) {
        highlightedEl.innerHTML = escapeHtml(testStr);
      } else {
        let result = '';
        let lastIndex = 0;

        // Sort matches by index
        const sorted = [...matches].sort((a, b) => a.index - b.index);

        sorted.forEach(m => {
          if (m.index >= lastIndex) {
            result += escapeHtml(testStr.slice(lastIndex, m.index));
            result += `<span class="match-hl">${escapeHtml(m.value)}</span>`;
            lastIndex = m.index + m.value.length;
          }
        });
        result += escapeHtml(testStr.slice(lastIndex));
        highlightedEl.innerHTML = result;
      }
    } catch (e) {
      matchCountEl.textContent = 'Invalid regex';
      matchCountEl.style.color = 'var(--red)';
      matchesEl.innerHTML = '';
      highlightedEl.innerHTML = `<span style="color:var(--red)">${escapeHtml(e.message)}</span>`;
      setTimeout(() => { matchCountEl.style.color = ''; }, 2000);
    }
  }

  // Bind regex inputs
  [regexPattern, regexTest, flagG, flagI, flagM].forEach(el => {
    if (el) el.addEventListener('input', runRegex);
    if (el) el.addEventListener('change', runRegex);
  });

  // Run initial
  setTimeout(runRegex, 100);

  // ═══════════ 4. JSON FORMATTER ═══════════

  const jsonInput = document.getElementById('jsonInput');
  const jsonOutput = document.getElementById('jsonOutput');
  const jsonStatus = document.getElementById('jsonStatus');

  document.querySelectorAll('[data-json-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-json-action]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const action = btn.dataset.jsonAction;
      const input = jsonInput?.value || '';

      if (!input.trim()) {
        if (jsonOutput) jsonOutput.innerHTML = '<code style="color:var(--text-faint)">// Enter JSON in the input panel</code>';
        if (jsonStatus) { jsonStatus.textContent = ''; jsonStatus.className = 'json-status'; }
        return;
      }

      try {
        const parsed = JSON.parse(input);

        if (action === 'format') {
          const formatted = JSON.stringify(parsed, null, 2);
          if (jsonOutput) jsonOutput.innerHTML = `<code>${syntaxHighlightJson(formatted)}</code>`;
        } else if (action === 'minify') {
          const minified = JSON.stringify(parsed);
          if (jsonOutput) jsonOutput.innerHTML = `<code>${escapeHtml(minified)}</code>`;
        } else if (action === 'validate') {
          if (jsonOutput) jsonOutput.innerHTML = `<code>${syntaxHighlightJson(JSON.stringify(parsed, null, 2))}</code>`;
        }

        if (jsonStatus) {
          jsonStatus.textContent = '✓ Valid JSON';
          jsonStatus.className = 'json-status valid';
        }
      } catch (e) {
        if (jsonOutput) {
          jsonOutput.innerHTML = `<code style="color:var(--red)">Error: ${escapeHtml(e.message)}</code>`;
        }
        if (jsonStatus) {
          jsonStatus.textContent = '✗ Invalid JSON';
          jsonStatus.className = 'json-status invalid';
        }
      }
    });
  });

  // ═══════════ UTILITIES ═══════════

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function syntaxHighlightJson(json) {
    return escapeHtml(json)
      .replace(/"([^"]+)"(?=\s*:)/g, '<span class="json-key">"$1"</span>')
      .replace(/: "([^"]*?)"/g, ': <span class="json-string">"$1"</span>')
      .replace(/: (-?\d+\.?\d*)/g, ': <span class="json-number">$1</span>')
      .replace(/: (true|false)/g, ': <span class="json-bool">$1</span>')
      .replace(/: (null)/g, ': <span class="json-null">$1</span>');
  }

})();
