/**
 * BathFit Bangalore - Application Logic & Local Storage State
 * Pure client-side JavaScript. Offline capable, zero database dependencies.
 */

// Storage Keys
const STORAGE_KEY_MODELS = 'bathfit_models_v1';
const STORAGE_KEY_ACTIVE_TAB = 'bathfit_active_tab';

// Default Benchmark Models
const DEFAULT_MODELS = [
  {
    id: 'seed-1',
    category: 'commode',
    brand: 'Jaquar',
    modelName: 'Queen Rimless One-Piece (Vortex Flush)',
    skuCode: 'QNS-WHT-77151',
    shop: 'Shankara Buildpro (Mahadevapura)',
    keySpec: 'Rim Height: 375mm, S-Trap: 300mm, Vortex Swirl Rimless',
    mrp: 14800,
    discount: 20,
    netPrice: 11840,
    notes: 'Excellent swirl flush. Fits 164cm height with feet flat on ground. Master carton packed.',
    isShortlisted: true,
    photo: '',
    timestamp: Date.now() - 3600000
  },
  {
    id: 'seed-2',
    category: 'commode',
    brand: 'Kohler',
    modelName: 'Reach One-Piece Rimless',
    skuCode: 'K-20199IN-0',
    shop: 'Kohler Experience Studio (Indiranagar)',
    keySpec: 'Rim Height: 370mm, S-Trap: 300mm, Class Five Flush',
    mrp: 18500,
    discount: 18,
    netPrice: 15170,
    notes: 'Flawless ceramic glaze. Live swirl demo at Indiranagar studio was quiet and powerful.',
    isShortlisted: true,
    photo: '',
    timestamp: Date.now() - 3000000
  },
  {
    id: 'seed-3',
    category: 'commode',
    brand: 'Cera',
    modelName: 'Campbell Siphonic Rimless One-Piece',
    skuCode: 'S1043151',
    shop: 'Cera Style Gallery (Kalyan Nagar)',
    keySpec: 'Rim Height: 365mm, S-Trap: 300mm, Siphonic Jet',
    mrp: 11500,
    discount: 22,
    netPrice: 8970,
    notes: 'Very comfortable low height. Widely available at tier-2/3 hometown dealers.',
    isShortlisted: false,
    photo: '',
    timestamp: Date.now() - 2400000
  },
  {
    id: 'seed-4',
    category: 'shower',
    brand: 'Jaquar',
    modelName: 'Florentine 3-in-1 Wall Mixer System',
    skuCode: 'FLR-CHR-5211NB',
    shop: 'Shankara Buildpro (Mahadevapura)',
    keySpec: 'Inlet: 150mm C-to-C, Heavy Brass Body, Rain Shower + Telephonic',
    mrp: 9200,
    discount: 20,
    netPrice: 7360,
    notes: 'Solid brass forged body. Quarter-turn knobs feel smooth. Includes crutch legs for 150mm.',
    isShortlisted: true,
    photo: '',
    timestamp: Date.now() - 1800000
  },
  {
    id: 'seed-5',
    category: 'shower',
    brand: 'Kohler',
    modelName: 'July Exposed 3-in-1 Dual Knob System',
    skuCode: 'K-99770IN-4-CP',
    shop: 'Kohler Experience Studio (Indiranagar)',
    keySpec: 'Inlet: 150mm, Katalyst Air-Injection Rainhead (low-pressure friendly)',
    mrp: 13900,
    discount: 18,
    netPrice: 11398,
    notes: 'Air-induction rain head produces full raindrops even without high pressure booster pump.',
    isShortlisted: false,
    photo: '',
    timestamp: Date.now() - 1200000
  },
  {
    id: 'seed-6',
    category: 'basin',
    brand: 'Jaquar',
    modelName: 'Kubix Rectangular Basin with Full Pedestal',
    skuCode: 'KBS-WHT-35801 + Pedestal',
    shop: 'Shankara Buildpro (Mahadevapura)',
    keySpec: 'Size: 600 x 450 mm (24" x 18"), Flat Single Wall Mount',
    mrp: 6900,
    discount: 20,
    netPrice: 5520,
    notes: 'Spacious flat bowl, deep basin prevents splashing. Anchors with 2 heavy rag bolts.',
    isShortlisted: true,
    photo: '',
    timestamp: Date.now() - 600000
  }
];

// Showroom Stops Configuration
const STOPS_DATA = [
  {
    num: 'STOP 1',
    distance: '5–8 mins from Mahadevapura',
    title: 'Shankara Buildpro (ORR Mahadevapura / Doddanekkundi)',
    address: 'Outer Ring Road, near Doddanekkundi Junction, Mahadevapura',
    mapsUrl: 'https://www.google.com/maps/search/Shankara+Buildpro+Mahadevapura+Bangalore',
    tags: ['Multi-brand', 'Jaquar', 'Kohler', 'Cera', 'Hindware', 'Fast Baseline'],
    purpose: 'Get a comprehensive 1-stop survey across all major brands. Measure commode bowl heights with a physical measuring tape and establish baseline prices.',
    checklist: [
      'Measure bare ceramic rim height with tape (Target: 365–380 mm for 164 cm stature)',
      'Confirm 300 mm S-trap availability on floor-mounted rimless one-piece toilets',
      'Inspect 3-in-1 exposed wall mixer (check 150 mm inlet spacing and brass heft)',
      'Check size of 600 x 450 mm rectangular pedestal wash basins in person',
      'Ask for dealer discount % off MRP for Jaquar, Kohler, and Cera'
    ]
  },
  {
    num: 'STOP 2',
    distance: '15–20 mins via Old Madras / Suranjandas Rd',
    title: 'Indiranagar Hub: Kohler Experience Studio & Jaquar World',
    address: '100 Feet Road, Indiranagar & Old Airport Road / Domlur',
    mapsUrl: 'https://www.google.com/maps/search/Kohler+Experience+Centre+Indiranagar+100+feet+road+Bangalore',
    tags: ['Live Water Demos', 'Company Flagship', 'No Sales Pressure', 'Tornado Demos'],
    purpose: 'Experience live working fixtures. See actual swirl/vortex flush demos, feel the dual-knob quarter-turn resistance, and observe rain shower water flow with different nozzle bores.',
    checklist: [
      'Watch live swirl/tornado flush in action (check self-cleansing vortex strength)',
      'Test overhead rain shower heads with water pressure (check if air-injection is needed)',
      'Feel smoothness of dual knobs on exposed 3-in-1 wall mixers',
      'Inspect ceramic glaze smoothness (anti-bacterial / stain-resistant glazes)',
      'Collect official brochures and exact alphanumeric SKU codes'
    ]
  },
  {
    num: 'STOP 3',
    distance: '15 mins North along Outer Ring Road',
    title: 'Kasturi Nagar to Kalyan Nagar Sanitary Belt (Cera Style Gallery)',
    address: 'Outer Ring Road, from Ramamurthy Nagar bridge to Kalyan Nagar / HRBR Layout',
    mapsUrl: 'https://www.google.com/maps/search/Cera+Style+Gallery+Kalyan+Nagar+Bangalore',
    tags: ['Sanitary Corridor', 'Cera Gallery', 'Maruthi Ceramics', 'Hometown Verification'],
    purpose: 'Verify models that are most universally distributed in tier-2/3 hometowns (Cera and Hindware). Great spot to lock in realistic hometown pricing and verify master carton packaging for road transit.',
    checklist: [
      'Verify Cera one-piece 300 mm S-trap rimless toilets with 365–380 mm rim height',
      'Inspect Cera & Somany rectangular full pedestal basins (compare glaze finish)',
      'Inquire about master-carton wooden crate or foam packaging for long-distance transit',
      'Negotiate and note down maximum possible dealer discounts (expect 20% to 25%)'
    ]
  },
  {
    num: 'STOP 4',
    distance: 'Action from Phone',
    title: 'Hometown Dealer Handover & Final Order',
    address: 'Your local sanitaryware distributor in your hometown',
    mapsUrl: '',
    tags: ['Ordering', 'WhatsApp Handover', 'Price Matching', 'Warranty'],
    purpose: 'Send your shortlisted SKU list to 2–3 local dealers in your hometown for competitive price quotation and delivery scheduling.',
    checklist: [
      'Share the exact SKU codes copied from this app via WhatsApp',
      'Confirm they provide 18% to 22% discount on the listed MRP',
      'Verify company warranty card and brand authorized dealer seal',
      'Re-confirm 300 mm S-trap with hometown plumber before unpacking ceramic carton'
    ]
  }
];

// Sales Scripts Data
const SCRIPTS_DATA = [
  {
    id: 'script-commode-1',
    category: 'commode',
    title: 'Commode: Height & Rimless Tornado Flush Inquiry',
    script: '"I am looking for a floor-mounted one-piece commode with an attached cistern and a 300 mm S-trap. Most importantly, I need a low/standard ceramic height strictly between 365 mm and 380 mm without the lid, not the 420 mm tall chair-height models. Do you have rimless models with a tornado or vortex swirl flush in this height?"',
    notes: 'Key filter: Sales reps almost always assume you want "tall chair height". For 164 cm height, this leads to poor posture. Insist on measuring with a tape.'
  },
  {
    id: 'script-commode-2',
    category: 'commode',
    title: 'Commode: Flushing Demonstration Request',
    script: '"Can you show me a live flush demonstration or a cut-section of this bowl? I want to see if the water swirls forcibly around the entire top cavity to clean the sides, or if it is just a standard front washdown."',
    notes: 'Tornado/cyclone flush should have dual side jets that swirl water 360 degrees without splashing outside the rim.'
  },
  {
    id: 'script-shower-1',
    category: 'shower',
    title: 'Shower: 3-in-1 Exposed Wall Mixer with Dual Knobs',
    script: '"I need an exposed 3-in-1 wall mixer with separate dual knobs for hot and cold (quarter-turn), not a single-lever diverter. The center-to-center inlet spacing on my wall is standard 150 mm (6 inches). Does this set come with the L-bend overhead shower pipe, rain shower head, and telephonic hand shower?"',
    notes: 'Make sure it is forged brass, not lightweight zinc alloy. Verify it includes eccentric crutch legs.'
  },
  {
    id: 'script-shower-2',
    category: 'shower',
    title: 'Shower: Water Pressure & Bore Requirement',
    script: '"What is the minimum operating water pressure required for this rain shower head? Does this head use air-injection technology (like Jaquar Airtec or Kohler Katalyst) so it gives a good rain experience under standard overhead tank gravity pressure?"',
    notes: 'Crucial for hometown homes without booster pumps! Air-injection heads prevent water from trickling.'
  },
  {
    id: 'script-basin-1',
    category: 'basin',
    title: 'Wash Basin: Rectangular Flat-Wall Pedestal Basin',
    script: '"Please show me large rectangular wash basins (around 600 x 450 mm or 24 x 18 inches) that mount flat against a single wall, complete with a matching floor-standing full pedestal. Can you confirm the basin is securely held with wall rag bolts?"',
    notes: 'Verify the pedestal fits neatly around your floor waste pipe and that the basin surface has pre-punched single tap hole.'
  },
  {
    id: 'script-pricing-1',
    category: 'pricing',
    title: 'Pricing: MRP & Standard Dealer Discount Inquiry',
    script: '"Could you share the exact printed MRP and your standard cash/dealer discount on this brand? Also, what is the exact alphanumeric model/SKU code so I can match it with my plumber\'s checklist?"',
    notes: 'Showroom discounts on Jaquar, Kohler, and Cera typically range from 15% to 25% off MRP. Always record the exact SKU.'
  },
  {
    id: 'script-pricing-2',
    category: 'pricing',
    title: 'Packaging & Transit for Hometown Transport',
    script: '"Does this ceramic piece come in a reinforced export master carton with molded thermocol corners? If I order through a local dealer in my hometown, will the company deliver it directly from the regional warehouse?"',
    notes: 'Prevents hairline transit cracks in ceramic basins and commodes.'
  }
];

// App State
let modelsState = [];
let activeCategoryFilter = 'all';
let activeShortlistFilter = 'all';

// ==========================================================================
// INITIALIZATION & EVENT BINDINGS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadModels();
  initNavigation();
  renderStops();
  renderScripts('all');
  renderModels();
  updateHometownSummary();

  // Modal event bindings
  document.getElementById('openAddModelModal').addEventListener('click', () => openModelModal());
  document.getElementById('closeModalBtn').addEventListener('click', () => closeModelModal());
  document.getElementById('cancelModalBtn').addEventListener('click', () => closeModelModal());
  document.getElementById('modelForm').addEventListener('submit', handleModelFormSubmit);

  // Filters
  document.getElementById('filterCategorySelect').addEventListener('change', (e) => {
    activeCategoryFilter = e.target.value;
    renderModels();
  });
  document.getElementById('filterShortlistSelect').addEventListener('change', (e) => {
    activeShortlistFilter = e.target.value;
    renderModels();
  });

  // Script category pills
  document.getElementById('scriptCategoryFilter').addEventListener('click', (e) => {
    if (e.target.classList.contains('pill-btn')) {
      document.querySelectorAll('#scriptCategoryFilter .pill-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      renderScripts(e.target.dataset.filter);
    }
  });

  // Photo upload input
  const photoInput = document.getElementById('formPhotoInput');
  photoInput.addEventListener('change', handlePhotoUpload);

  // WhatsApp & Backup Actions
  document.getElementById('quickShareBtn').addEventListener('click', shareToWhatsApp);
  document.getElementById('copyWhatsAppBtn').addEventListener('click', shareToWhatsApp);
  document.getElementById('exportJsonBtn').addEventListener('click', exportBackupJson);
  document.getElementById('importJsonInput').addEventListener('change', importBackupJson);
});

// ==========================================================================
// NAVIGATION CONTROLLER
// ==========================================================================
function initNavigation() {
  const tabs = document.querySelectorAll('#mainTabs .nav-tab');
  const views = document.querySelectorAll('.tab-view');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      views.forEach(v => v.classList.remove('active'));

      tab.classList.add('active');
      const activeView = document.getElementById(`view-${target}`);
      if (activeView) activeView.classList.add('active');

      if (target === 'hometown') {
        updateHometownSummary();
      }
    });
  });
}

// ==========================================================================
// RENDER: VIEW 1 - ROUTE & STOPS
// ==========================================================================
function renderStops() {
  const container = document.getElementById('stopsContainer');
  container.innerHTML = STOPS_DATA.map((stop, idx) => `
    <div class="stop-card ${idx === 0 ? 'stop-active' : ''}">
      <div class="stop-header-row">
        <span class="stop-num-badge">${stop.num}</span>
        <span class="stop-distance">${stop.distance}</span>
      </div>

      <h3 class="stop-title">${stop.title}</h3>
      <div class="stop-address">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span>${stop.address}</span>
      </div>

      <div class="stop-tags">
        ${stop.tags.map(tag => `<span class="stop-tag">${tag}</span>`).join('')}
      </div>

      <div class="stop-section">
        <div class="stop-section-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span>What to Inspect Here:</span>
        </div>
        <p style="font-size: 0.83rem; color: var(--text-secondary); margin-bottom: 8px;">${stop.purpose}</p>
        <ul class="stop-list">
          ${stop.checklist.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div class="stop-actions">
        ${stop.mapsUrl ? `
          <a href="${stop.mapsUrl}" target="_blank" rel="noopener" class="btn-secondary btn-sm" style="text-decoration:none;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
            <span>Open in Google Maps</span>
          </a>
        ` : ''}
        <button class="btn-secondary btn-sm" onclick="openModelModalWithShop('${stop.title.replace(/'/g, "\\'")}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <span>Log Model at this Shop</span>
        </button>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// RENDER: VIEW 2 - SCRIPTS
// ==========================================================================
function renderScripts(filter) {
  const container = document.getElementById('scriptsContainer');
  const filtered = filter === 'all'
    ? SCRIPTS_DATA
    : SCRIPTS_DATA.filter(s => s.category === filter);

  container.innerHTML = filtered.map(item => `
    <div class="script-card">
      <div class="script-header">
        <span class="script-title">${item.title}</span>
        <button class="btn-copy" onclick="copyTextToClipboard('${escapeAttr(item.script)}')">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>Copy Script</span>
        </button>
      </div>
      <div class="script-box">
        <p class="script-text">${item.script}</p>
      </div>
      <div class="script-notes">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0; margin-top:2px;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        <span><strong>Pro Tip:</strong> ${item.notes}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// RENDER: VIEW 3 - SAVED MODELS
// ==========================================================================
function renderModels() {
  const grid = document.getElementById('modelsGrid');
  const badge = document.getElementById('savedCountBadge');

  badge.textContent = modelsState.length;

  let filtered = [...modelsState];

  if (activeCategoryFilter !== 'all') {
    filtered = filtered.filter(m => m.category === activeCategoryFilter);
  }

  if (activeShortlistFilter === 'shortlist') {
    filtered = filtered.filter(m => m.isShortlisted);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">📝</div>
        <h3>No models logged yet</h3>
        <p>Tap "Log Model" to record fittings you inspect in Bangalore showrooms.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(m => {
    const catLabel = m.category === 'commode' ? '🚽 Commode' : (m.category === 'shower' ? '🚿 Shower' : '🪞 Basin');
    return `
      <div class="model-card ${m.isShortlisted ? 'is-shortlisted' : ''}">
        <div>
          <div class="model-top">
            <div>
              <div class="model-badge-row">
                <span class="model-brand">${m.brand}</span>
                <span class="model-cat">${catLabel}</span>
              </div>
              <h4 class="model-name">${escapeHtml(m.modelName)}</h4>
              ${m.skuCode ? `<span class="model-sku">SKU: ${escapeHtml(m.skuCode)}</span>` : ''}
            </div>
            <button class="star-btn ${m.isShortlisted ? 'starred' : ''}" onclick="toggleShortlist('${m.id}')" title="Toggle Shortlist">
              ★
            </button>
          </div>

          ${m.keySpec ? `<div class="model-specs mt-4"><strong>Specs:</strong> ${escapeHtml(m.keySpec)}</div>` : ''}

          ${m.photo ? `<img src="${m.photo}" class="model-img-thumb mt-4" alt="Model label photo" onclick="previewImage('${m.photo}')">` : ''}
        </div>

        <div>
          <div class="model-price-row">
            <div>
              <span class="net-price">₹${Math.round(m.netPrice).toLocaleString('en-IN')}</span>
              ${m.mrp ? `<span class="mrp-info"> MRP: <strike>₹${Number(m.mrp).toLocaleString('en-IN')}</strike></span>` : ''}
            </div>
            ${m.discount ? `<span class="discount-tag">${m.discount}% OFF</span>` : ''}
          </div>

          <div class="model-meta mt-4">
            <div><strong>Shop:</strong> ${escapeHtml(m.shop || 'Not specified')}</div>
            ${m.notes ? `<div><strong>Notes:</strong> ${escapeHtml(m.notes)}</div>` : ''}
          </div>

          <div class="model-actions-row">
            <button class="btn-secondary btn-sm flex-1" onclick="editModel('${m.id}')">Edit</button>
            <button class="btn-secondary btn-sm btn-danger" onclick="deleteModel('${m.id}')">Delete</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// RENDER: VIEW 4 - HOMETOWN SUMMARY
// ==========================================================================
function updateHometownSummary() {
  const summaryBox = document.getElementById('hometownShortlistSummary');
  const shortlisted = modelsState.filter(m => m.isShortlisted);

  if (shortlisted.length === 0) {
    summaryBox.textContent = "No models have been shortlisted yet. Star (★) models from the 'Saved Models' tab to compile your order sheet.";
    return;
  }

  let text = "=========================================\n";
  text += "BATHROOM FITTINGS SPECIFICATION & ORDER SHEET\n";
  text += "Site Requirements: 164cm User Height | 300mm S-Trap | 150mm Tap Spacing\n";
  text += "=========================================\n\n";

  const categories = ['commode', 'shower', 'basin'];
  const catNames = { commode: '1. COMMODE (Western, Floor-Mounted Rimless Tornado)', shower: '2. OVERHEAD SHOWER SET (Exposed 3-in-1 Dual Knob Mixer)', basin: '3. WASH BASIN (Rectangular Flat-Wall Pedestal)' };

  categories.forEach(cat => {
    const items = shortlisted.filter(m => m.category === cat);
    if (items.length > 0) {
      text += `[${catNames[cat]}]\n`;
      items.forEach((item, idx) => {
        text += `  • Pick ${idx + 1}: ${item.brand} - ${item.modelName}\n`;
        if (item.skuCode) text += `    SKU: ${item.skuCode}\n`;
        if (item.keySpec) text += `    Specs: ${item.keySpec}\n`;
        text += `    MRP: ₹${item.mrp || 0} | Target Disc: ${item.discount}% | Target Net: ₹${Math.round(item.netPrice)}\n`;
        if (item.notes) text += `    Notes: ${item.notes}\n`;
        text += "\n";
      });
    }
  });

  text += "QUESTIONS FOR HOMETOWN DEALER:\n";
  text += "1. Can you confirm stock availability for these exact SKUs?\n";
  text += "2. What is your best discount % off printed MRP?\n";
  text += "3. For commode, please confirm the S-trap distance is strictly 300 mm (12 inches).\n";
  text += "4. For mixer, please confirm 150 mm center-to-center inlet with crutch legs.\n";
  text += "5. Is authorized company warranty included?";

  summaryBox.textContent = text;
}

// ==========================================================================
// MODAL & MODEL CRUD OPERATIONS
// ==========================================================================
function openModelModal(modelData = null) {
  const modal = document.getElementById('modelModal');
  const form = document.getElementById('modelForm');
  const title = document.getElementById('modalTitle');
  const photoPreview = document.getElementById('photoPreviewImg');
  const noPhotoText = document.getElementById('noPhotoText');

  form.reset();
  document.getElementById('modelId').value = '';
  photoPreview.src = '';
  photoPreview.style.display = 'none';
  noPhotoText.style.display = 'block';

  if (modelData) {
    title.textContent = 'Edit Showroom Model';
    document.getElementById('modelId').value = modelData.id;
    document.getElementById('formCategory').value = modelData.category;
    document.getElementById('formBrand').value = modelData.brand;
    document.getElementById('formModelName').value = modelData.modelName;
    document.getElementById('formSkuCode').value = modelData.skuCode || '';
    document.getElementById('formShop').value = modelData.shop || '';
    document.getElementById('formKeySpec').value = modelData.keySpec || '';
    document.getElementById('formMrp').value = modelData.mrp || '';
    document.getElementById('formDiscount').value = modelData.discount || 18;
    document.getElementById('formNotes').value = modelData.notes || '';
    document.getElementById('formShortlist').checked = !!modelData.isShortlisted;

    if (modelData.photo) {
      photoPreview.src = modelData.photo;
      photoPreview.style.display = 'block';
      noPhotoText.style.display = 'none';
    }
  } else {
    title.textContent = 'Log Showroom Model';
  }

  modal.classList.add('open');
}

function openModelModalWithShop(shopName) {
  openModelModal();
  document.getElementById('formShop').value = shopName;
}

function closeModelModal() {
  document.getElementById('modelModal').classList.remove('open');
}

function handleModelFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('modelId').value || 'model-' + Date.now();
  const category = document.getElementById('formCategory').value;
  const brand = document.getElementById('formBrand').value;
  const modelName = document.getElementById('formModelName').value.trim();
  const skuCode = document.getElementById('formSkuCode').value.trim();
  const shop = document.getElementById('formShop').value;
  const keySpec = document.getElementById('formKeySpec').value.trim();
  const mrp = parseFloat(document.getElementById('formMrp').value) || 0;
  const discount = parseFloat(document.getElementById('formDiscount').value) || 0;
  const netPrice = mrp > 0 ? (mrp * (1 - discount / 100)) : 0;
  const notes = document.getElementById('formNotes').value.trim();
  const isShortlisted = document.getElementById('formShortlist').checked;
  const photoPreview = document.getElementById('photoPreviewImg');
  const photo = photoPreview.style.display !== 'none' ? photoPreview.src : '';

  const newModel = {
    id,
    category,
    brand,
    modelName,
    skuCode,
    shop,
    keySpec,
    mrp,
    discount,
    netPrice,
    notes,
    isShortlisted,
    photo,
    timestamp: Date.now()
  };

  const existingIdx = modelsState.findIndex(m => m.id === id);
  if (existingIdx >= 0) {
    modelsState[existingIdx] = newModel;
    showToast('Model updated successfully!');
  } else {
    modelsState.unshift(newModel);
    showToast('New model logged to phone!');
  }

  saveModels();
  renderModels();
  updateHometownSummary();
  closeModelModal();
}

function editModel(id) {
  const model = modelsState.find(m => m.id === id);
  if (model) openModelModal(model);
}

function deleteModel(id) {
  if (confirm('Delete this model from your list?')) {
    modelsState = modelsState.filter(m => m.id !== id);
    saveModels();
    renderModels();
    updateHometownSummary();
    showToast('Model deleted.');
  }
}

function toggleShortlist(id) {
  const model = modelsState.find(m => m.id === id);
  if (model) {
    model.isShortlisted = !model.isShortlisted;
    saveModels();
    renderModels();
    updateHometownSummary();
    showToast(model.isShortlisted ? '⭐ Added to Hometown Shortlist' : 'Removed from shortlist');
  }
}

// Compress and store image locally
function handlePhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.onload = () => {
      // Scale image to max 800px to conserve localStorage space
      const maxDim = 800;
      let width = img.width;
      let height = img.height;

      if (width > height && width > maxDim) {
        height = Math.round((height * maxDim) / width);
        width = maxDim;
      } else if (height > maxDim) {
        width = Math.round((width * maxDim) / height);
        height = maxDim;
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
      const photoPreview = document.getElementById('photoPreviewImg');
      photoPreview.src = compressedDataUrl;
      photoPreview.style.display = 'block';
      document.getElementById('noPhotoText').style.display = 'none';
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

// ==========================================================================
// LOCAL STORAGE & EXPORT
// ==========================================================================
function loadModels() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MODELS);
    if (raw) {
      modelsState = JSON.parse(raw);
    } else {
      modelsState = [...DEFAULT_MODELS];
      saveModels();
    }
  } catch (err) {
    console.error('Error loading from localStorage:', err);
    modelsState = [...DEFAULT_MODELS];
  }
}

function saveModels() {
  try {
    localStorage.setItem(STORAGE_KEY_MODELS, JSON.stringify(modelsState));
  } catch (err) {
    console.warn('localStorage quota exceeded; clearing image thumbnails if needed', err);
    showToast('Storage notice: Consider fewer photos to save phone memory.');
  }
}

function shareToWhatsApp() {
  const text = document.getElementById('hometownShortlistSummary').textContent;
  if (!text || text.includes('No models have been shortlisted')) {
    showToast('Please star (★) at least one model before sharing!');
    return;
  }

  copyTextToClipboard(text);
  const encoded = encodeURIComponent(text);
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encoded}`;
  window.open(whatsappUrl, '_blank');
  showToast('Copied summary & opening WhatsApp...');
}

function exportBackupJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(modelsState, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `BathFit_Bangalore_Shortlist_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Backup JSON downloaded.');
}

function importBackupJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);
      if (Array.isArray(imported)) {
        modelsState = imported;
        saveModels();
        renderModels();
        updateHometownSummary();
        showToast(`Restored ${imported.length} models successfully!`);
      } else {
        alert('Invalid backup file format.');
      }
    } catch (err) {
      alert('Failed to parse backup JSON file.');
    }
  };
  reader.readAsText(file);
}

// ==========================================================================
// UTILITY FUNCTIONS
// ==========================================================================
function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Copied to clipboard!');
    }).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  showToast('Copied to clipboard!');
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2600);
}

function previewImage(src) {
  const win = window.open();
  win.document.write(`<img src="${src}" style="max-width:100%; height:auto; display:block; margin:20px auto; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.2);">`);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function escapeAttr(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, "&quot;").replace(/\n/g, "\\n");
}

// Service Worker Registration for Offline Phone Support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((err) => {
      console.log('SW registration skipped or error:', err);
    });
  });
}
