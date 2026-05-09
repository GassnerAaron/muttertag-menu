'use strict';

/* ─── Telegram ───────────────────────────────────────────────── */
const TG_TOKEN   = '8748610695:AAF-zUgKKUhFY8UAdpvCnExHNOjMIzbN_Jk';
const TG_CHAT_ID = '8200541417';

/* ─── Menü-Daten ──────────────────────────────────────────────── */
const menuItems = [
  // Frühstück
  {
    id: 1,
    name: 'Gouda-Toast mit Frühlingszwiebel und Ei',
    category: 'fruehstueck',
    categoryLabel: 'Frühstück',
    icon: '🍳',
    description: 'Knusprig getoastetes Brot mit würzigem Gouda, frischen Frühlingszwiebeln und einem perfekten Spiegelei.',
  },
  {
    id: 2,
    name: 'Frischkäse-Baguette mit Paprika und Gurke',
    category: 'fruehstueck',
    categoryLabel: 'Frühstück',
    icon: '🍳',
    description: 'Knuspriges Baguette mit cremigem Frischkäse, bunter Paprika und erfrischender Gurke.',
  },
  {
    id: 3,
    name: 'Kakao + Toast mit Nutella',
    category: 'fruehstueck',
    categoryLabel: 'Frühstück',
    icon: '🍳',
    description: 'Ein süßer Start in den Morgen – warmer Kakao und knuspriger Toast mit cremiger Nutella.',
  },
  {
    id: 4,
    name: 'Rührei mit Karotten und Toastbrot',
    category: 'fruehstueck',
    categoryLabel: 'Frühstück',
    icon: '🍳',
    description: 'Luftiges Rührei mit zarten Karotten auf knusprigem Toastbrot – herzhaft und sättigend.',
  },
  {
    id: 5,
    name: 'Jausenbrot mit Salami, Gouda und Paprika',
    category: 'fruehstueck',
    categoryLabel: 'Frühstück',
    icon: '🍳',
    description: 'Herzhaftes Jausenbrot belegt mit würziger Salami, Gouda und frischer Paprika.',
  },
  {
    id: 6,
    name: 'Kaffee + Semmel mit Marmelade',
    category: 'fruehstueck',
    categoryLabel: 'Frühstück',
    icon: '🍳',
    description: 'Das klassische Frühstück – frisch gebrühter Kaffee und eine Semmel mit fruchtiger Marmelade.',
  },
  {
    id: 7,
    name: 'Knoblauchkräuter-Aufstrich auf Toast mit Gurke',
    category: 'fruehstueck',
    categoryLabel: 'Frühstück',
    icon: '🍳',
    description: 'Aromatischer Kräuteraufstrich mit Knoblauch auf Toast und erfrischenden Gurkenscheiben.',
  },

  // Mittagessen
  {
    id: 8,
    name: 'Carbonara-Spaghetti',
    category: 'mittagessen',
    categoryLabel: 'Mittagessen',
    icon: '🍝',
    description: 'Cremige Spaghetti Carbonara – ein Klassiker der italienischen Küche, einfach unwiderstehlich.',
  },
  {
    id: 9,
    name: 'Kartoffel-Gemüse-Pfanne mit Karotten und Paprika',
    category: 'mittagessen',
    categoryLabel: 'Mittagessen',
    icon: '🍝',
    description: 'Knusprige Kartoffeln mit buntem Gemüse in der Pfanne gebraten – herzhaft und sättigend.',
  },
  {
    id: 10,
    name: 'Curly Fries mit Fischstäbchen',
    category: 'mittagessen',
    categoryLabel: 'Mittagessen',
    icon: '🍝',
    description: 'Goldene, knusprige Curly Fries mit zarten Fischstäbchen – ein beliebter Klassiker.',
  },
  {
    id: 11,
    name: 'Spirale Nudeln mit Frischkäse-Kräutersauce',
    category: 'mittagessen',
    categoryLabel: 'Mittagessen',
    icon: '🍝',
    description: 'Bunte Spiralnudeln in einer cremigen Frischkäse-Kräutersauce – leicht, lecker und schnell.',
  },
  {
    id: 12,
    name: 'Lange Nudeln mit Knoblauchkräuter und Salami',
    category: 'mittagessen',
    categoryLabel: 'Mittagessen',
    icon: '🍝',
    description: 'Al dente Nudeln mit würzigem Knoblauchkräuter-Öl und herzhafter Salami – intensiv im Geschmack.',
  },
  {
    id: 13,
    name: 'Gemüsepfanne mit Zwiebeln, Paprika, Karotten und Ei',
    category: 'mittagessen',
    categoryLabel: 'Mittagessen',
    icon: '🍝',
    description: 'Bunte Gemüsepfanne mit frischem Ei – leicht, bunt und voller Geschmack.',
  },
  {
    id: 14,
    name: 'Reis-Pfanne mit Ei, Mais und Paprika',
    category: 'mittagessen',
    categoryLabel: 'Mittagessen',
    icon: '🍝',
    description: 'Gebratener Reis mit Ei, süßem Mais und bunter Paprika – schnell gemacht und sättigend.',
  },
  {
    id: 15,
    name: 'Überbackenes Toastbrot mit Gouda, Salami und Tomaten',
    category: 'mittagessen',
    categoryLabel: 'Mittagessen',
    icon: '🍝',
    description: 'Überbackenes Toast mit geschmolzenem Gouda, Salami und saftigen Tomaten – warm und lecker.',
  },

  // Beilagen
  {
    id: 16,
    name: 'Curly Fries',
    category: 'beilagen',
    categoryLabel: 'Beilage',
    icon: '🥗',
    description: 'Goldene, knusprige Curly Fries – der perfekte Begleiter zu vielen Gerichten.',
  },
  {
    id: 17,
    name: 'Kartoffeln',
    category: 'beilagen',
    categoryLabel: 'Beilage',
    icon: '🥗',
    description: 'Klassisch und vielseitig – Kartoffeln passen zu fast allem.',
  },
  {
    id: 18,
    name: 'Reis',
    category: 'beilagen',
    categoryLabel: 'Beilage',
    icon: '🥗',
    description: 'Lockerer, luftiger Reis als leichte und sättigende Beilage.',
  },
  {
    id: 19,
    name: 'Mais',
    category: 'beilagen',
    categoryLabel: 'Beilage',
    icon: '🥗',
    description: 'Süßer Mais – frisch, bunt und herrlich lecker.',
  },
  {
    id: 20,
    name: 'Tomaten',
    category: 'beilagen',
    categoryLabel: 'Beilage',
    icon: '🥗',
    description: 'Frische, saftige Tomaten – einfach und lecker.',
  },
  {
    id: 21,
    name: 'Gurken',
    category: 'beilagen',
    categoryLabel: 'Beilage',
    icon: '🥗',
    description: 'Erfrischend kühle Gurken – knackig und leicht.',
  },
  {
    id: 22,
    name: 'Karotten',
    category: 'beilagen',
    categoryLabel: 'Beilage',
    icon: '🥗',
    description: 'Knackige, süße Karotten – frisch und gesund.',
  },
  {
    id: 23,
    name: 'Paprika',
    category: 'beilagen',
    categoryLabel: 'Beilage',
    icon: '🥗',
    description: 'Bunte Paprika – süß, knackig und farbenfroh.',
  },
  {
    id: 24,
    name: 'Semmel',
    category: 'beilagen',
    categoryLabel: 'Beilage',
    icon: '🥗',
    description: 'Frische, knusprige Semmel – ein österreichischer Klassiker.',
  },
  {
    id: 25,
    name: 'Toastbrot',
    category: 'beilagen',
    categoryLabel: 'Beilage',
    icon: '🥗',
    description: 'Knuspriger Toast – vielseitig und als Beilage perfekt.',
  },
  {
    id: 26,
    name: 'Baguette',
    category: 'beilagen',
    categoryLabel: 'Beilage',
    icon: '🥗',
    description: 'Knuspriges Baguette, außen kross und innen fluffig.',
  },

  // Getränke
  {
    id: 27,
    name: 'Kaffee',
    category: 'getraenke',
    categoryLabel: 'Getränk',
    icon: '☕',
    description: 'Frisch gebrühter Kaffee – der perfekte Start in den Tag.',
  },
  {
    id: 28,
    name: 'Kalte Kaffee Sorten',
    category: 'getraenke',
    categoryLabel: 'Getränk',
    icon: '☕',
    description: 'Erfrischende kalte Kaffee-Variationen – perfekt für jeden Geschmack.',
  },
  {
    id: 29,
    name: 'Kakao',
    category: 'getraenke',
    categoryLabel: 'Getränk',
    icon: '☕',
    description: 'Cremiger, warmer Kakao – süß, wohltuend und gemütlich.',
  },
  {
    id: 30,
    name: 'Milch',
    category: 'getraenke',
    categoryLabel: 'Getränk',
    icon: '☕',
    description: 'Frische Milch – pur oder als Ergänzung zum Kaffee.',
  },
  {
    id: 31,
    name: 'Tee',
    category: 'getraenke',
    categoryLabel: 'Getränk',
    icon: '☕',
    description: 'Aromatischer Tee in verschiedenen Sorten – warm und entspannend.',
  },
  {
    id: 33,
    name: 'Himbeer-Zitronen-Sirup',
    category: 'getraenke',
    categoryLabel: 'Getränk',
    icon: '☕',
    description: 'Fruchtig-spritziger Himbeer-Zitronen-Sirup – erfrischend und lecker.',
  },

  // Süßes & Extra
  {
    id: 34,
    name: 'Nutella-Toast',
    category: 'suesess',
    categoryLabel: 'Süßes',
    icon: '🍬',
    description: 'Knuspriger Toast mit cremiger Nutella – ein süßes Extra für zwischendurch.',
  },
  {
    id: 35,
    name: 'Marmelade-Semmel',
    category: 'suesess',
    categoryLabel: 'Süßes',
    icon: '🍬',
    description: 'Frische Semmel mit fruchtiger Marmelade – ein einfacher und süßer Genuss.',
  },
  {
    id: 40,
    name: 'Erdnüsse',
    category: 'suesess',
    categoryLabel: 'Süßes',
    icon: '🍬',
    description: 'Knackige, gesalzene Erdnüsse – perfekt zum Knabbern.',
  },
  {
    id: 37,
    name: 'Apfel',
    category: 'suesess',
    categoryLabel: 'Süßes',
    icon: '🍬',
    description: 'Frischer, knackiger Apfel – natürlich süß und gesund.',
  },
];

/* ─── Kategorien-Reihenfolge ─────────────────────────────────── */
const categoryOrder = ['fruehstueck', 'mittagessen', 'beilagen', 'getraenke', 'suesess'];

const categoryMeta = {
  fruehstueck: { label: 'Frühstück',     icon: '🍳' },
  mittagessen:  { label: 'Mittagessen',   icon: '🍝' },
  beilagen:     { label: 'Beilagen',      icon: '🥗' },
  getraenke:    { label: 'Getränke',      icon: '☕' },
  suesess:      { label: 'Süßes & Extra', icon: '🍬' },
};

/* ─── State ──────────────────────────────────────────────────── */
let order = [];
let currentFilter = 'all';
let toastTimer = null;

/* ─── Init ───────────────────────────────────────────────────── */
function init() {
  loadOrder();
  setupFilterButtons();
  renderMenu();
  renderOrder();
}

/* ─── LocalStorage ───────────────────────────────────────────── */
function loadOrder() {
  try {
    const saved = localStorage.getItem('muttertag_order_2025');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) order = parsed;
    }
  } catch {
    order = [];
  }
}

function saveOrder() {
  localStorage.setItem('muttertag_order_2025', JSON.stringify(order));
}

/* ─── Filter ─────────────────────────────────────────────────── */
function setupFilterButtons() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu();
    });
  });
}

/* ─── renderMenu ─────────────────────────────────────────────── */
function renderMenu() {
  const container = document.getElementById('menu-container');
  const filtered = currentFilter === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === currentFilter);

  if (filtered.length === 0) {
    container.innerHTML = '<p class="no-results">Keine Gerichte in dieser Kategorie gefunden.</p>';
    return;
  }

  if (currentFilter === 'all') {
    container.innerHTML = categoryOrder
      .map(cat => {
        const items = filtered.filter(i => i.category === cat);
        if (items.length === 0) return '';
        const meta = categoryMeta[cat];
        return `
          <section class="menu-section">
            <h2 class="section-title">${meta.icon} ${meta.label}</h2>
            <div class="cards-grid">
              ${items.map(buildCardHTML).join('')}
            </div>
          </section>`;
      })
      .join('');
  } else {
    container.innerHTML = `
      <div class="cards-grid">
        ${filtered.map(buildCardHTML).join('')}
      </div>`;
  }
}

/* ─── buildCardHTML ──────────────────────────────────────────── */
function buildCardHTML(item) {
  const selected = order.some(o => o.id === item.id);
  return `
    <article class="card${selected ? ' is-selected' : ''}">
      <span class="card-label label-${item.category}">${item.icon} ${item.categoryLabel}</span>
      <h3 class="card-name">${item.name}</h3>
      <p class="card-description">${item.description}</p>
      <button
        class="btn-select${selected ? ' is-selected' : ''}"
        onclick="toggleItem(${item.id})"
        aria-pressed="${selected}"
        aria-label="${selected ? 'Entfernen: ' : 'Auswählen: '}${item.name}"
      >${selected ? '✓ Ausgewählt' : '+ Auswählen'}</button>
    </article>`;
}

/* ─── toggleItem ─────────────────────────────────────────────── */
function toggleItem(id) {
  if (order.some(o => o.id === id)) {
    removeItem(id);
  } else {
    addItem(id);
  }
}

/* ─── addItem ────────────────────────────────────────────────── */
function addItem(id) {
  const item = menuItems.find(i => i.id === id);
  if (!item || order.some(o => o.id === id)) return;
  order.push({ id: item.id, name: item.name, categoryLabel: item.categoryLabel });
  saveOrder();
  renderMenu();
  renderOrder();
}

/* ─── removeItem ─────────────────────────────────────────────── */
function removeItem(id) {
  order = order.filter(o => o.id !== id);
  saveOrder();
  renderMenu();
  renderOrder();
}

/* ─── renderOrder ────────────────────────────────────────────── */
function renderOrder() {
  const listEl = document.getElementById('order-list');
  const countEl = document.getElementById('order-count');
  const n = order.length;

  if (n === 0) {
    countEl.textContent = 'Noch nichts ausgewählt';
    listEl.innerHTML = '<p class="order-placeholder">Wähle Gerichte aus, um sie hier zu sehen. ♡</p>';
    return;
  }

  countEl.textContent = n === 1 ? '1 Gericht ausgewählt' : `${n} Gerichte ausgewählt`;

  listEl.innerHTML = order
    .map(item => `
      <div class="order-item">
        <div class="order-item-info">
          <div class="order-item-name">${item.name}</div>
          <div class="order-item-cat">${item.categoryLabel}</div>
        </div>
        <button
          class="btn-remove"
          onclick="removeItem(${item.id})"
          aria-label="Entfernen: ${item.name}"
          title="Entfernen"
        >×</button>
      </div>`)
    .join('');
}

/* ─── sendOrder ──────────────────────────────────────────────── */
function sendOrder() {
  if (order.length === 0) {
    showToast('Noch nichts ausgewählt');
    return;
  }

  const btn = document.getElementById('btn-send');
  btn.disabled = true;
  btn.textContent = '⏳ Wird gesendet…';

  const divider = '─'.repeat(28);
  const lines = [
    '🌸 Muttertags-Menü — Auswahl',
    divider,
    ...order.map((item, i) => `${i + 1}. ${item.name} (${item.categoryLabel})`),
    divider,
    `Gesamt: ${order.length} ${order.length === 1 ? 'Gericht' : 'Gerichte'}`,
  ];
  const text = lines.join('\n');

  fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_CHAT_ID, text }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        showToast('✓ Auswahl wurde gesendet!');
        btn.textContent = '✓ Gesendet!';
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = '📨 Auswahl absenden';
        }, 3000);
      } else {
        throw new Error(data.description || 'Fehler');
      }
    })
    .catch(() => {
      showToast('Fehler beim Senden – bitte erneut versuchen.');
      btn.disabled = false;
      btn.textContent = '📨 Auswahl absenden';
    });
}

/* ─── resetOrder ─────────────────────────────────────────────── */
function resetOrder() {
  if (order.length === 0) {
    showToast('Keine Auswahl zum Zurücksetzen');
    return;
  }
  order = [];
  saveOrder();
  renderMenu();
  renderOrder();
  showToast('Auswahl wurde zurückgesetzt');
}

/* ─── copyOrder ──────────────────────────────────────────────── */
function copyOrder() {
  if (order.length === 0) {
    showToast('Noch nichts ausgewählt');
    return;
  }

  const divider = '─'.repeat(32);
  const lines = [
    '🌸 Muttertags-Menü 2025 — Meine Auswahl 🌸',
    divider,
    ...order.map((item, i) => `${i + 1}. ${item.name}  (${item.categoryLabel})`),
    divider,
    `Gesamt: ${order.length} ${order.length === 1 ? 'Gericht' : 'Gerichte'}`,
  ];
  const text = lines.join('\n');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => showToast('✓ Auswahl in Zwischenablage kopiert!'))
      .catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0;';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast('✓ Auswahl in Zwischenablage kopiert!');
  } catch {
    showToast('Kopieren nicht möglich – bitte manuell kopieren.');
  }
  document.body.removeChild(ta);
}

/* ─── showToast ──────────────────────────────────────────────── */
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

/* ─── Start ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', init);
