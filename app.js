/**
 * Karavali & Malenadu Epic Loop - Road Trip Companion App
 * Clean, Glanceable & Action-Oriented
 */

// ITINERARY DATA (Punchy & Glanceable)
const ITINERARY_DATA = {
  day1: {
    title: "Day 1: Friday, 11th September",
    route: "Bangalore ➔ Kadur ➔ Shimoga Outskirts",
    distance: "280 km • 5.5 hrs",
    mapUrl: "https://www.google.com/maps/dir/Bengaluru/Shivamogga",
    steps: [
      {
        time: "03:45 PM",
        title: "Assemble & Final Car Check",
        desc: "Meet up. Tyre pressure 33 PSI, Wudu water bottle & prayer mat in boot.",
        type: ["drive", "salah"],
        tip: "Single driver rule: Fill up full tank in Bangalore before highway jams.",
        mapQuery: "Bengaluru, Karnataka"
      },
      {
        time: "04:00 PM",
        title: "Highway Exit: Beat Nelamangala Toll",
        desc: "Take NICE Road / Magadi-Solur bypass to avoid 4-day weekend getaway jam.",
        type: ["drive", "alert"],
        tip: "Co-pilot: Keep watch on Google Maps live traffic colors.",
        mapQuery: "Nelamangala+Toll+Plaza"
      },
      {
        time: "06:30 PM",
        title: "Kunigal / Bellur Cross Tea Break",
        desc: "15-min tea stop. Driver calf & neck stretch.",
        type: ["drive"],
        tip: "Compulsory stretch every 2 hours.",
        mapQuery: "Kunigal,+Karnataka"
      },
      {
        time: "08:30 PM",
        title: "Kadur: Maghrib + Isha (Jam' 3+2) & Dinner",
        desc: "Clean wudu & prayer at Jamia Masjid Kadur. Hot halal dinner at nearby dhabas.",
        type: ["salah", "halal"],
        tip: "Keep dinner light for the single driver.",
        mapQuery: "Jamia+Masjid+Kadur"
      },
      {
        time: "10:30 PM",
        title: "Shimoga Sagar Bypass Check-in",
        desc: "Check into highway lodge (~₹1,100 for 3). Optional late beef kebabs in Tank Mohalla.",
        type: ["stay", "halal"],
        tip: "Early checkout at 6:30 AM.",
        mapQuery: "Sagara+Road+Shivamogga"
      }
    ]
  },

  day2: {
    title: "Day 2: Saturday, 12th September",
    route: "Shimoga ➔ Jog Falls ➔ Bhatkal ➔ Gokarna ➔ Kumta",
    distance: "240 km • Full Day",
    mapUrl: "https://www.google.com/maps/dir/Shivamogga/Jog+Falls/Bhatkal/Gokarna/Kumta",
    steps: [
      {
        time: "06:15 AM",
        title: "Fajr Prayer & Early Departure",
        desc: "Morning drive on NH69 through green pine & teak forests.",
        type: ["drive", "salah"],
        tip: "Early start beats the tourist bus crowd.",
        mapQuery: "Jog+Falls"
      },
      {
        time: "08:30 AM",
        title: "Jog Falls (Full September Roar)",
        desc: "Mighty 830-ft plunge at peak volume. Hot breakfast at KSTDC Mayura.",
        type: ["falls"],
        tip: "Try local Tatte Idli & Neer Dosa.",
        mapQuery: "Jog+Falls+Karnataka"
      },
      {
        time: "11:30 AM",
        title: "Gerosoppa Ghat Descent to Coast",
        desc: "Winding downhill curves through dense wildlife sanctuary.",
        type: ["drive", "alert"],
        tip: "Driver Alert: Use 2nd & 3rd gear engine braking.",
        mapQuery: "Gerosoppa+Ghat"
      },
      {
        time: "01:30 PM",
        title: "Bhatkal: Famous Beef Biryani & Salah",
        desc: "Authentic Bhatkali Beef Dum Biryani at Kwality Hotel. Dhuhr+Asr (2+2) at Jamia Masjid Bhatkal.",
        type: ["halal", "salah"],
        tip: "World-famous white-rice dum biryani — top culinary stop.",
        mapQuery: "Kwality+Hotel+Bhatkal"
      },
      {
        time: "04:30 PM",
        title: "Gokarna: Kudle & Om Beach Sunset",
        desc: "Cliff walk between Kudle and Om Beach. Relax at beach cafes during sunset.",
        type: ["beach", "scenic"],
        tip: "No deep swimming; post-monsoon undertows are rough.",
        mapQuery: "Om+Beach+Gokarna"
      },
      {
        time: "08:30 PM",
        title: "Kumta Outskirts: Maghrib+Isha & Dinner",
        desc: "Maghrib+Isha (3+2) at Jamia Masjid Kumta. Beef fry & parotta at Hotel Shalimar. Lodge ~₹1,300.",
        type: ["stay", "halal", "salah"],
        tip: "Saves ₹2,500 compared to overcrowded Gokarna beach huts.",
        mapQuery: "Jamia+Masjid+Kumta"
      }
    ]
  },

  day3: {
    title: "Day 3: Sunday, 13th September",
    route: "Kumta ➔ Yana Monoliths ➔ Vibhooti Falls ➔ Maravanthe ➔ Hebri",
    distance: "210 km • Full Day",
    mapUrl: "https://www.google.com/maps/dir/Kumta/Mirjan+Fort/Yana+Caves/Vibhooti+Falls/Maravanthe+Beach/Hebri",
    steps: [
      {
        time: "07:30 AM",
        title: "Mirjan Fort Photo Stop",
        desc: "Moss-covered 16th-century laterite fort with circular watchtowers.",
        type: ["scenic"],
        tip: "Quick 30-min photo session.",
        mapQuery: "Mirjan+Fort"
      },
      {
        time: "09:30 AM",
        title: "Yana Karst Monoliths & Plateau",
        desc: "Jungle canopy walk to two 300-ft black limestone spires and caves.",
        type: ["plateau", "scenic"],
        tip: "Wear rubber-grip trekking sandals; cave path is damp.",
        mapQuery: "Yana+Caves+Karnataka"
      },
      {
        time: "12:00 PM",
        title: "Vibhooti Falls (Jungle Plunge Pool)",
        desc: "Hidden multi-tier cascade inside bamboo forest with clear turquoise pool.",
        type: ["falls"],
        tip: "Dip feet in natural pool to relax legs after Yana hike.",
        mapQuery: "Vibhooti+Falls"
      },
      {
        time: "02:00 PM",
        title: "Kundapura: Halal Coastal Lunch & Salah",
        desc: "Fresh seafood or beef curry meals on NH66. Dhuhr+Asr (2+2) at Jamia Masjid Kundapura.",
        type: ["halal", "salah", "drive"],
        tip: "Mosque is right off highway with easy parking.",
        mapQuery: "Jamia+Masjid+Kundapura"
      },
      {
        time: "04:30 PM",
        title: "Maravanthe Ocean Highway & Sunset",
        desc: "Drive on NH66 with Arabian Sea on the right and Souparnika River on the left.",
        type: ["beach", "scenic"],
        tip: "Park at promenade bay for golden hour sunset.",
        mapQuery: "Maravanthe+Beach"
      },
      {
        time: "08:00 PM",
        title: "Hebri Outskirts: Maghrib+Isha & Stay",
        desc: "Base of Agumbe Ghats. Maghrib+Isha (3+2) at Jamia Masjid Hebri. Malabar dinner. Lodge ~₹1,100.",
        type: ["stay", "halal", "salah"],
        tip: "Skips all Udupi festival rush and sets up morning ghat climb.",
        mapQuery: "Jamia+Masjid+Hebri"
      }
    ]
  },

  day4: {
    title: "Day 4: Monday, 14th September (Holiday)",
    route: "Hebri ➔ Agumbe Hairpins ➔ Mullayanagiri Peak ➔ Bangalore",
    distance: "360 km • 7 hrs drive + spots",
    mapUrl: "https://www.google.com/maps/dir/Hebri/Agumbe+Sunset+Point/Mullayanagiri+Peak/Chikmagalur/Bengaluru",
    steps: [
      {
        time: "06:15 AM",
        title: "Fajr & Climb Agumbe 14 Hairpin Curves",
        desc: "Drive from sea level up through rainforest into the clouds.",
        type: ["drive", "plateau", "salah"],
        tip: "Keep windows down for fresh mountain air and waterfall sounds.",
        mapQuery: "Agumbe+Ghat+Viewpoint"
      },
      {
        time: "07:30 AM",
        title: "Agumbe Valley Viewpoint",
        desc: "Cliff-edge view over the sea of white clouds. Hot tea & idli.",
        type: ["plateau", "scenic"],
        tip: "Known as the Cherrapunji of the South.",
        mapQuery: "Agumbe+Sunset+Point"
      },
      {
        time: "10:30 AM",
        title: "Mullayanagiri Peak (Highest in Karnataka)",
        desc: "1,930 m high. Cool mountain breeze (17°C) and rolling grassland plateau.",
        type: ["plateau", "scenic"],
        tip: "Wear light windcheater; winds are strong at the top.",
        mapQuery: "Mullayanagiri+Peak"
      },
      {
        time: "02:00 PM",
        title: "Chikmagalur: Malnad Beef Chops & Salah",
        desc: "Spicy beef chops & biryani at New Taj Hotel. Dhuhr+Asr (2+2) at Jamia Masjid Chikmagalur.",
        type: ["halal", "salah"],
        tip: "Grab fresh Chikmagalur filter coffee before hitting highway.",
        mapQuery: "New+Taj+Hotel+Chikmagalur"
      },
      {
        time: "04:30 PM",
        title: "4-Lane NH75 Return Cruise",
        desc: "Smooth cruising via Belur, Hassan, Kunigal & Nelamangala.",
        type: ["drive"],
        tip: "Steady pace on 4-lane expressway.",
        mapQuery: "Hassan+Karnataka+to+Bengaluru"
      },
      {
        time: "07:30 PM",
        title: "Hassan Bypass: Maghrib+Isha & Tea",
        desc: "Maghrib+Isha (3+2) at Masjid-e-Azam Hassan. Chai break for driver.",
        type: ["salah", "drive"],
        tip: "Final 2 hours into Bangalore.",
        mapQuery: "Masjid+e+Azam+Hassan"
      },
      {
        time: "10:30 PM",
        title: "Arrive Home in Bangalore • Trip Complete!",
        desc: "Reach home on Monday night before midnight. Sleep in your own bed; 100% fresh for Tuesday morning office!",
        type: ["drive"],
        tip: "Trip complete! Unpack, sleep deep, and join office refreshed on Tuesday.",
        mapQuery: "Bengaluru,+Karnataka"
      }
    ]
  }
};

// CHECKLIST DATA (Clean & Practical)
const CHECKLIST_DATA = {
  car: [
    "Engine oil, coolant & brake fluid levels OK",
    "Set all 5 tyres (including spare) to 33 PSI",
    "Wiper fluid topped up with shampoo",
    "Headlights, fog lamps & hazard lights working",
    "Fastag wallet recharged with ₹1,500+",
    "Puncture kit, jack & air inflator in boot"
  ],
  gear: [
    "Janamaz (prayer mat) & 2L water bottle for Wudu",
    "Waterproof sandals (sturdy grip for Yana & falls)",
    "Light rain jacket / windcheater & mini umbrella",
    "Light hoodie for chilly Mullayanagiri peak",
    "Quick-dry t-shirts, swim shorts & microfiber towel",
    "2 plastic bags for damp clothes after beach/falls",
    "Power bank & 2 car charging cables",
    "₹4,000 cash backup in ₹100/₹500 notes"
  ]
};

// STATE
let currentDay = "day1";
let currentFilter = "all";

// DOM INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupNavigationTabs();
  setupDaySelectors();
  setupFilterChips();
  renderTimeline(currentDay);
  setupBudgetCalculator();
  renderChecklists();
  setupOfflineDetection();
});

// THEME TOGGLE (DEFAULT LIGHT)
function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const sunIcon = document.getElementById("theme-icon-sun");
  const moonIcon = document.getElementById("theme-icon-moon");
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  const savedTheme = localStorage.getItem("app-theme") || "light";
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark-theme");
      applyTheme(isDark ? "light" : "dark");
    });
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      if (sunIcon) sunIcon.style.display = "none";
      if (moonIcon) moonIcon.style.display = "block";
      if (metaThemeColor) metaThemeColor.setAttribute("content", "#090d16");
      localStorage.setItem("app-theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      if (sunIcon) sunIcon.style.display = "block";
      if (moonIcon) moonIcon.style.display = "none";
      if (metaThemeColor) metaThemeColor.setAttribute("content", "#f8fafc");
      localStorage.setItem("app-theme", "light");
    }
  }
}

// TAB NAVIGATION
function setupNavigationTabs() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const panes = document.querySelectorAll(".tab-pane");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.dataset.tab;
      navBtns.forEach(b => b.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPane = document.getElementById(`tab-${targetTab}`);
      if (targetPane) targetPane.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// DAY SELECTORS
function setupDaySelectors() {
  const dayBtns = document.querySelectorAll(".day-btn");
  dayBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      dayBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentDay = btn.dataset.day;
      renderTimeline(currentDay);
      updateFooterBar(currentDay);
    });
  });
}

// FILTER CHIPS
function setupFilterChips() {
  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.dataset.filter;
      renderTimeline(currentDay);
    });
  });
}

// TIMELINE RENDERER (Clean & Simple)
function renderTimeline(dayKey) {
  const container = document.getElementById("timeline-container");
  const data = ITINERARY_DATA[dayKey];
  if (!data) return;

  const filteredSteps = data.steps.filter(step => {
    if (currentFilter === "all") return true;
    if (currentFilter === "halal" && (step.type.includes("halal") || step.type.includes("salah"))) return true;
    if (currentFilter === "scenic" && (step.type.includes("beach") || step.type.includes("scenic"))) return true;
    if (currentFilter === "falls" && step.type.includes("falls")) return true;
    if (currentFilter === "plateau" && step.type.includes("plateau")) return true;
    return false;
  });

  let html = `
    <div class="day-card-header">
      <div>
        <h2 class="day-heading">${data.title}</h2>
        <span class="day-sub-route">${data.route} (${data.distance})</span>
      </div>
    </div>
    <div class="timeline-clean">
  `;

  if (filteredSteps.length === 0) {
    html += `
      <div class="empty-state">
        No steps match this filter for today. Tap "All" to view full plan.
      </div>
    `;
  } else {
    filteredSteps.forEach((step, idx) => {
      const stepId = `${dayKey}-step-${idx}`;
      const isChecked = localStorage.getItem(stepId) === "true";

      const badgesHtml = step.type.map(t => {
        let label = "🚗 DRIVE";
        let cssClass = "tag-drive";
        if (t === "beach") { label = "🌊 BEACH"; cssClass = "tag-beach"; }
        if (t === "falls") { label = "💦 FALLS"; cssClass = "tag-falls"; }
        if (t === "plateau") { label = "🏔️ PEAK"; cssClass = "tag-plateau"; }
        if (t === "alert") { label = "⚠️ ALERT"; cssClass = "tag-alert"; }
        if (t === "stay") { label = "🏨 STAY"; cssClass = "tag-stay"; }
        if (t === "halal") { label = "🥩 HALAL FOOD"; cssClass = "tag-halal"; }
        if (t === "salah") { label = "🕌 SALAH (QASR)"; cssClass = "tag-salah"; }
        return `<span class="badge ${cssClass}">${label}</span>`;
      }).join("");

      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(step.mapQuery)}`;

      html += `
        <div class="step-box ${isChecked ? "is-done" : ""}">
          <div class="step-time-col">
            <span class="step-time-pill">${step.time}</span>
          </div>
          <div class="step-content-col">
            <div class="step-top-row">
              <h3 class="step-name">${step.title}</h3>
              <button class="btn-check-pill ${isChecked ? "checked" : ""}" onclick="toggleStepDone('${stepId}')">
                ${isChecked ? "✓ Done" : "Done"}
              </button>
            </div>
            <div class="step-badges-wrap">${badgesHtml}</div>
            <p class="step-quick-desc">${step.desc}</p>
            ${step.tip ? `<p class="step-tip-line">💡 <em>${step.tip}</em></p>` : ""}
            <div class="step-action-row">
              <a href="${mapUrl}" target="_blank" class="btn-map-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                Maps
              </a>
            </div>
          </div>
        </div>
      `;
    });
  }

  html += `</div>`;
  container.innerHTML = html;
}

// TOGGLE STEP DONE
window.toggleStepDone = function(stepId) {
  const current = localStorage.getItem(stepId) === "true";
  localStorage.setItem(stepId, !current);
  renderTimeline(currentDay);
};

// UPDATE FOOTER STATUS
function updateFooterBar(dayKey) {
  const data = ITINERARY_DATA[dayKey];
  const label = document.getElementById("footer-day-indicator");
  const btn = document.getElementById("footer-maps-btn");

  if (data && label && btn) {
    label.textContent = `${data.title.split(":")[0]}: ${data.route}`;
    btn.href = data.mapUrl;
  }
}

// BUDGET CALCULATOR
function setupBudgetCalculator() {
  const inputs = ["calc-petrol", "calc-tolls", "calc-stays", "calc-food", "calc-misc"];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", recalculateBudget);
  });
  recalculateBudget();
}

function recalculateBudget() {
  const petrol = parseFloat(document.getElementById("calc-petrol")?.value) || 0;
  const tolls = parseFloat(document.getElementById("calc-tolls")?.value) || 0;
  const stays = parseFloat(document.getElementById("calc-stays")?.value) || 0;
  const food = parseFloat(document.getElementById("calc-food")?.value) || 0;
  const misc = parseFloat(document.getElementById("calc-misc")?.value) || 0;

  const total = petrol + tolls + stays + food + misc;
  const perPerson = Math.round(total / 3);

  const totalEl = document.getElementById("total-val");
  const perHeadEl = document.getElementById("per-head-val");

  if (totalEl) totalEl.textContent = `₹${total.toLocaleString("en-IN")}`;
  if (perHeadEl) perHeadEl.textContent = `₹${perPerson.toLocaleString("en-IN")}`;
}

// CHECKLIST RENDERER
function renderChecklists() {
  renderChecklistGroup("car", "car-checklist");
  renderChecklistGroup("gear", "gear-checklist");
}

function renderChecklistGroup(groupKey, elementId) {
  const container = document.getElementById(elementId);
  const items = CHECKLIST_DATA[groupKey];
  if (!container || !items) return;

  let html = "";
  items.forEach((item, index) => {
    const key = `check-${groupKey}-${index}`;
    const isChecked = localStorage.getItem(key) === "true";

    html += `
      <label class="check-line ${isChecked ? "checked" : ""}">
        <input type="checkbox" ${isChecked ? "checked" : ""} onchange="toggleChecklistItem('${key}')">
        <span>${item}</span>
      </label>
    `;
  });

  container.innerHTML = html;
}

window.toggleChecklistItem = function(key) {
  const current = localStorage.getItem(key) === "true";
  localStorage.setItem(key, !current);
  renderChecklists();
};

// OFFLINE & PWA STATUS
function setupOfflineDetection() {
  const badge = document.getElementById("offline-badge");
  if (!badge) return;

  function updateStatus() {
    if (navigator.onLine) {
      badge.classList.add("online");
      badge.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
        Ready
      `;
    } else {
      badge.classList.remove("online");
      badge.innerHTML = `Offline`;
    }
  }

  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);
  updateStatus();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}
