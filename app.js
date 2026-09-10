/**
 * Karavali & Malenadu Epic Loop - Road Trip Companion App
 * Designed for 3 Bachelor Software Engineers (1 Driver Petrol Car)
 */

// ITINERARY DATA
const ITINERARY_DATA = {
  day1: {
    title: "Day 1: Friday, 11th September",
    route: "Bangalore ➔ Tumkur ➔ Kadur ➔ Shimoga Outskirts",
    distance: "~280 km",
    duration: "5.5 – 6 hrs",
    mapUrl: "https://www.google.com/maps/dir/Bengaluru,+Karnataka/Shivamogga,+Karnataka",
    desc: "Beat the Friday evening techie exodus, clear the Nelamangala choke-point, and cruise smooth highways to your night halt at Shimoga bypass.",
    steps: [
      {
        time: "03:45 PM",
        title: "Assemble & Final Car Check",
        desc: "Meet at designated pickup point. Set tyre pressures to 32-33 PSI, check wiper fluid with shampoo, zero trip odometer.",
        type: ["drive"],
        tip: "Single driver rule: Fill up full tank in Bangalore before entering highway jams.",
        mapQuery: "Bengaluru, Karnataka"
      },
      {
        time: "04:00 PM",
        title: "Highway Exit: Beat the Nelamangala Choke",
        desc: "Navigate onto NICE Road or take the Magadi-Solur bypass to avoid 8th Mile gridlock. Thousands of cars leaving for the Ganesh Chaturthi 4-day weekend will crowd the toll.",
        type: ["drive", "alert"],
        tip: "Co-pilot alert: Keep watch on Google Maps live traffic colors to divert around Nelamangala toll if blocked.",
        mapQuery: "Nelamangala+Toll+Plaza"
      },
      {
        time: "06:30 PM",
        title: "Kunigal / Bellur Cross Tea & Stretch Break",
        desc: "Compulsory 15-min break. Hot chai and snacks. Driver does light calf & neck stretches.",
        type: ["drive"],
        tip: "Hydrate moderately; do not skip driver stretch breaks.",
        mapQuery: "Kunigal,+Karnataka"
      },
      {
        time: "08:30 PM",
        title: "Highway Dhaba Dinner (Kadur / Birur Bypass)",
        desc: "Hot roti, dal, or South Indian meals. Keep meals light so the driver does not feel drowsy during the final 1.5-hr stretch.",
        type: ["drive"],
        tip: "Avoid heavy carb overload for the driver.",
        mapQuery: "Kadur,+Karnataka"
      },
      {
        time: "10:30 PM",
        title: "Check-in at Shimoga Sagar Road Bypass",
        desc: "Bypass Shimoga city traffic. Pull into a highway lodge on the Sagar exit (NH69). Gated car parking, unpack overnight bags only.",
        type: ["stay"],
        tip: "Target offline tariff: ₹1,000 – ₹1,300 for 3 pax. Early checkout scheduled for 6:30 AM.",
        mapQuery: "Sagara+Road+Shivamogga"
      }
    ]
  },

  day2: {
    title: "Day 2: Saturday, 12th September",
    route: "Shimoga ➔ Jog Falls ➔ Honnavar ➔ Gokarna (Night 2 Kumta)",
    distance: "~240 km",
    duration: "6 hrs drive + sightseeing",
    mapUrl: "https://www.google.com/maps/dir/Shivamogga/Jog+Falls/Honnavar/Gokarna/Kumta",
    desc: "From the 830-ft roar of Jog Falls down through misty Gerosoppa Ghats to mangrove backwaters and sunset on the Arabian Sea.",
    steps: [
      {
        time: "06:30 AM",
        title: "Early Roll Out on NH69 towards Jog Falls",
        desc: "Early morning drive through lush Malenadu pine and teak forests. Fresh post-monsoon morning air.",
        type: ["drive"],
        tip: "Leaving before 7 AM ensures you arrive before Bangalore tourist buses crowd the viewpoints.",
        mapQuery: "Jog+Falls"
      },
      {
        time: "08:30 AM",
        title: "Jog Falls in Full September Roar",
        desc: "Witness the Sharavathi River plunge down Raja, Roarer, Rocket, and Rani. September brings 100% water volume with rainbow mist.",
        type: ["falls"],
        tip: "Have hot Neer Dosa & Tatte Idli at KSTDC Mayura restaurant inside the complex.",
        mapQuery: "Jog+Falls+Karnataka"
      },
      {
        time: "11:30 AM",
        title: "Gerosoppa Ghat Descent to Honnavar",
        desc: "Descend the winding Western Ghats through Sharavathi Wildlife Sanctuary down to sea level.",
        type: ["drive", "alert"],
        tip: "Driver Alert: Use 2nd & 3rd gear engine braking down slopes. Damp roads from morning mist require smooth steering.",
        mapQuery: "Gerosoppa+Ghat"
      },
      {
        time: "01:30 PM",
        title: "Honnavar Sharavathi Mangrove Boating & Lunch",
        desc: "Walk the wooden Kandla Mangrove boardwalk or hire a wooden motorboat through the serene backwater canals. Authentic coastal seafood/veg lunch in Honnavar.",
        type: ["scenic"],
        tip: "The 30-min boat ride through narrow mangrove tunnels is serene and crowd-free.",
        mapQuery: "Sharavathi+Kandla+Mangrove+Walkway"
      },
      {
        time: "03:30 PM",
        title: "Coastal Cruise to Gokarna (NH66)",
        desc: "45 km drive on the 4-lane coastal expressway with glimpses of the Arabian sea on your left.",
        type: ["drive", "beach"],
        tip: "Bypass Gokarna town temple traffic; head straight towards the beach hills.",
        mapQuery: "Gokarna,+Karnataka"
      },
      {
        time: "05:00 PM",
        title: "Kudle Beach & Om Beach Cliff Walk (Sunset)",
        desc: "Park at Kudle hilltop. Take the scenic cliff trail down to Kudle or Om Beach. Relax at beach cafes with cold drinks and watch the orange sunset over the sea.",
        type: ["beach", "scenic"],
        tip: "Do NOT swim deep into the sea. Post-monsoon high tide undertows are treacherous.",
        mapQuery: "Om+Beach+Gokarna"
      },
      {
        time: "08:30 PM",
        title: "Check-in at Kumta / Sanikatta Outskirts",
        desc: "Drive 20 mins south to Kumta bypass. Avoid the ₹3,500+ long-weekend Gokarna beach hut pricing and get a clean roadside room for ₹1,200 – ₹1,500.",
        type: ["stay"],
        tip: "Dinner: Try authentic Uttara Kannada seafood curry meals or Mangalorean buns at Kumta bypass.",
        mapQuery: "Kumta,+Karnataka"
      }
    ]
  },

  day3: {
    title: "Day 3: Sunday, 13th September",
    route: "Kumta ➔ Mirjan ➔ Yana Plateau ➔ Vibhooti Falls ➔ Maravanthe ➔ Hebri",
    distance: "~210 km",
    duration: "5 hrs drive + treks",
    mapUrl: "https://www.google.com/maps/dir/Kumta/Mirjan+Fort/Yana+Caves/Vibhooti+Falls/Maravanthe+Beach/Hebri",
    desc: "Karst monoliths rising out of evergreen rainforest, turquoise jungle plunge pools, and the legendary Maravanthe ocean highway sunset.",
    steps: [
      {
        time: "07:30 AM",
        title: "Mirjan Fort Photo Stop",
        desc: "Historic 16th-century laterite fort completely carpeted with bright green monsoon moss and surrounded by circular watchtowers.",
        type: ["scenic"],
        tip: "Takes only 30-40 mins. Great backdrop for bachelor squad group photos.",
        mapQuery: "Mirjan+Fort"
      },
      {
        time: "09:30 AM",
        title: "Yana Rocks (Karst High Monoliths & Plateau)",
        desc: "Drive into dense Sahyadri rainforest. 1.5 km canopy walk leading to two massive 300-ft solid black crystalline karst monoliths (Bhairaveshwara & Mohini Shikhara).",
        type: ["plateau", "scenic"],
        tip: "Wear rubber-grip trekking sandals. Rocks inside the cave passages are damp and slippery.",
        mapQuery: "Yana+Caves+Karnataka"
      },
      {
        time: "12:00 PM",
        title: "Vibhooti Falls (Jungle Plunge Pool)",
        desc: "Located 8 km from Yana. A hidden 3-tier cascade sheltered by towering bamboo groves. Clear, fresh turquoise water.",
        type: ["falls"],
        tip: "Step into the shallow natural pool to soothe leg muscles after the Yana hike.",
        mapQuery: "Vibhooti+Falls"
      },
      {
        time: "02:00 PM",
        title: "Coastal Lunch on NH66",
        desc: "Descend back to the highway. Hot South Indian thali / Karavali fish curry meal.",
        type: ["drive"],
        tip: "Co-pilot: Verify offline Google Maps for Maravanthe and Hebri are ready.",
        mapQuery: "Bhatkal,+Karnataka"
      },
      {
        time: "04:30 PM",
        title: "The Iconic Maravanthe Highway & Sunset",
        desc: "Drive along NH66 where the roaring Arabian Sea is right against your car on the right, and the calm Souparnika River flows on the left.",
        type: ["beach", "scenic", "drive"],
        tip: "Park safely at the designated bay. Sit on the rocky promenade to watch the golden hour sunset.",
        mapQuery: "Maravanthe+Beach"
      },
      {
        time: "08:00 PM",
        title: "Check-in at Hebri / Brahmavar Outskirts",
        desc: "Stay near Hebri at the base of Agumbe Ghats. Bypasses all festival pilgrim traffic in Udupi town and sets you up for the Monday morning ghat climb.",
        type: ["stay"],
        tip: "Clean transit lodges available for ₹1,000 – ₹1,400. Quiet, cool country air.",
        mapQuery: "Hebri,+Karnataka"
      }
    ]
  },

  day4: {
    title: "Day 4: Monday, 14th September (Ganesh Chaturthi)",
    route: "Hebri ➔ Agumbe 14 Hairpins ➔ Mullayanagiri High Plateau ➔ Bangalore Return",
    distance: "~360 km",
    duration: "7 hrs drive + mountain stops",
    mapUrl: "https://www.google.com/maps/dir/Hebri/Agumbe+Sunset+Point/Mullayanagiri+Peak/Hassan/Bengaluru",
    desc: "Ascend the legendary 14 hairpin turns of Agumbe into the rainforest canopy, conquer the rolling grasslands of Mullayanagiri, and return to Bangalore.",
    steps: [
      {
        time: "06:30 AM",
        title: "Climb the Agumbe 14 Hairpin Curves",
        desc: "Exciting drive ascending from sea level into the clouds. Known as the 'Cherrapunji of the South', lush dense jungle canopy with mountain streams.",
        type: ["drive", "plateau"],
        tip: "Keep windows down to enjoy the crisp rainforest scent and birdsong. Watch for early morning mist.",
        mapQuery: "Agumbe+Ghat+Viewpoint"
      },
      {
        time: "07:30 AM",
        title: "Agumbe Valley Viewpoint",
        desc: "Stand atop the cliff edge and watch the sea of white clouds floating across the Someshwara valley below.",
        type: ["plateau", "scenic"],
        tip: "Grab hot tea and steamed idli with spiced coconut chutney at Agumbe junction.",
        mapQuery: "Agumbe+Sunset+Point"
      },
      {
        time: "10:30 AM",
        title: "Mullayanagiri Peak & High Grassland Plateau",
        desc: "Highest peak in Karnataka (1,930 m). Dramatic rolling mountain grasslands, cool mountain breeze (16°C – 18°C), and panoramic 360-degree plateau vistas.",
        type: ["plateau", "scenic"],
        tip: "Wear light windcheaters/hoodies. Wind speed on the peak can be intense.",
        mapQuery: "Mullayanagiri+Peak"
      },
      {
        time: "02:30 PM",
        title: "Chikmagalur Town Lunch & Estate Coffee",
        desc: "Authentic Malnad thali or biryani followed by freshly brewed Chikmagalur peaberry filter coffee to re-energize the driver.",
        type: ["drive"],
        tip: "Buy 500g of fresh roasted coffee beans/powder as a trip souvenir.",
        mapQuery: "Chikmagalur,+Karnataka"
      },
      {
        time: "04:30 PM",
        title: "Return Cruise on 4-Lane NH75 (Chikmagalur to Bangalore)",
        desc: "Route: Chikmagalur ➔ Belur ➔ Hassan ➔ Kunigal ➔ Nelamangala. Smooth, wide 4-lane expressway with steady speed.",
        type: ["drive"],
        tip: "Option A: Drive straight to Bangalore (reach ~10:30 PM). Option B: Halt at Hassan bypass (Channarayapatna) for a 5 AM sprint on Tuesday.",
        mapQuery: "Hassan+Karnataka+to+Bengaluru"
      },
      {
        time: "10:30 PM",
        title: "Arrive in Bangalore (Recommended Option A)",
        desc: "Enter Bangalore via Nelamangala flyover before late-night truck jams. Reach home, unpack, and get 8 hours of deep sleep!",
        type: ["drive"],
        tip: "The single driver sleeps in his own bed tonight. 100% fresh for Tuesday morning office.",
        mapQuery: "Bengaluru,+Karnataka"
      }
    ]
  },

  day5: {
    title: "Day 5: Tuesday, 15th September",
    route: "Bangalore Home (or 5 AM Hassan Sprint) ➔ Office",
    distance: "Local",
    duration: "Morning routine",
    mapUrl: "https://www.google.com/maps",
    desc: "Wake up well-rested in Bangalore, recount road trip memories over team standup, and join office like champions.",
    steps: [
      {
        time: "07:30 AM",
        title: "Wake up Fresh & Energized",
        desc: "If you reached Monday night: Enjoy home coffee, unpack wet trek gear, and get ready with zero travel hangover.",
        type: ["stay"],
        tip: "If you took Option B (Hassan stay): Leave at 5:00 AM sharp to breeze through the 160 km empty NH75 into Bangalore by 7:45 AM.",
        mapQuery: "Bengaluru,+Karnataka"
      },
      {
        time: "09:30 AM",
        title: "Join Office & Daily Standup",
        desc: "Seamless transition back to coding with a mind recharged by beaches, waterfalls, rainforests, and peaks.",
        type: ["scenic"],
        tip: "Settle Splitwise expenses with the boys while having morning office tea.",
        mapQuery: "Bengaluru,+Karnataka"
      }
    ]
  }
};

// CHECKLIST DATA
const CHECKLIST_DATA = {
  car: [
    "Check Engine Oil, Coolant & Brake Fluid levels",
    "Inspect Tyre Tread & set all 4 tyres + spare to 32-33 PSI",
    "Windshield washer fluid filled + wiper blades clean/streak-free",
    "Headlights, high/low beam, hazard lights & fog lamps working",
    "Fastag wallet balance recharged (minimum ₹1,500)",
    "Puncture kit, jack, spanner & portable air inflator in boot",
    "Aux cable / Bluetooth paired & 20+ hrs offline playlist downloaded"
  ],
  gear: [
    "1 pair waterproof sandals (sturdy rubber grip for Yana/falls)",
    "1 dry pair of sneakers / driving shoes",
    "Light rain jacket / windcheater & mini umbrella",
    "Light hoodie / jacket (for chilly Mullayanagiri peak)",
    "Quick-dry synthetic t-shirts & swim shorts",
    "2 large plastic/ziploc bags (for damp clothes after falls/beach)",
    "Microfiber quick-dry towels"
  ],
  tech: [
    "Driving License, Car RC, Insurance & PUC hard copies / Digilocker",
    "Google Maps offline areas downloaded (Shimoga, Gokarna, Chikmagalur)",
    "Car phone mount (essential for co-pilot navigation)",
    "High-capacity power bank & 2 car USB charging cables",
    "Cash backup (₹4,000 in ₹100/₹500 notes for rural lodges & tolls)",
    "Personal toiletries, basic first aid, ORS packets & Paracetamol"
  ]
};

// STATE
let currentDay = "day1";
let currentFilter = "all";

// DOM INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  setupNavigationTabs();
  setupDaySelectors();
  setupFilterChips();
  renderTimeline(currentDay);
  setupBudgetCalculator();
  renderChecklists();
  setupOfflineDetection();
});

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

// TIMELINE RENDERER
function renderTimeline(dayKey) {
  const container = document.getElementById("timeline-container");
  const data = ITINERARY_DATA[dayKey];
  if (!data) return;

  // Filter steps if needed
  const filteredSteps = data.steps.filter(step => {
    if (currentFilter === "all") return true;
    if (currentFilter === "scenic" && (step.type.includes("beach") || step.type.includes("scenic"))) return true;
    if (currentFilter === "falls" && step.type.includes("falls")) return true;
    if (currentFilter === "plateau" && step.type.includes("plateau")) return true;
    if (currentFilter === "driver" && step.type.includes("alert")) return true;
    return false;
  });

  let html = `
    <div class="day-overview-card">
      <div class="day-overview-header">
        <h2 class="day-overview-title">${data.title}</h2>
      </div>
      <div class="day-overview-stats">
        <span>📍 ${data.route}</span>
      </div>
      <div class="day-overview-stats">
        <span>🛣️ ${data.distance}</span>
        <span>⏱️ ${data.duration}</span>
      </div>
      <p class="day-overview-desc">${data.desc}</p>
    </div>

    <div class="timeline">
  `;

  if (filteredSteps.length === 0) {
    html += `
      <div class="card" style="text-align: center; color: var(--text-muted); padding: 30px;">
        No steps in this day match the selected filter. Try choosing "All Steps".
      </div>
    `;
  } else {
    filteredSteps.forEach((step, idx) => {
      const stepId = `${dayKey}-step-${idx}`;
      const isChecked = localStorage.getItem(stepId) === "true";

      const badgesHtml = step.type.map(t => {
        let tagClass = "tag-drive";
        let label = "🚗 DRIVE";
        if (t === "beach") { tagClass = "tag-beach"; label = "🌊 BEACH"; }
        if (t === "falls") { tagClass = "tag-falls"; label = "💦 WATERFALL"; }
        if (t === "plateau") { tagClass = "tag-plateau"; label = "🏔️ PLATEAU"; }
        if (t === "alert") { tagClass = "tag-alert"; label = "⚠️ DRIVER ALERT"; }
        if (t === "stay") { tagClass = "tag-stay"; label = "🏨 OUTSKIRTS STAY"; }
        if (t === "scenic") { tagClass = "tag-beach"; label = "📸 SCENIC"; }
        return `<span class="tag-badge ${tagClass}">${label}</span>`;
      }).join("");

      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(step.mapQuery)}`;

      html += `
        <div class="timeline-step">
          <div class="timeline-dot ${isChecked ? "done" : ""}" id="dot-${stepId}"></div>
          <div class="step-card">
            <div class="step-header">
              <div class="step-time-wrap">
                <span class="step-time">${step.time}</span>
              </div>
              <button class="btn-check-step ${isChecked ? "checked" : ""}" data-step-id="${stepId}" onclick="toggleStepDone('${stepId}')">
                ${isChecked ? "✓ Completed" : "Mark Done"}
              </button>
            </div>
            
            <h3 class="step-title">${step.title}</h3>
            
            <div class="step-badges">
              ${badgesHtml}
            </div>
            
            <p class="step-desc">${step.desc}</p>
            
            ${step.tip ? `<div class="step-pro-tip"><strong>💡 Pro-Tip:</strong> ${step.tip}</div>` : ""}

            <div class="step-actions">
              <a href="${mapUrl}" target="_blank" class="btn-nav-map">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                Navigate to Spot
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
  const newState = !current;
  localStorage.setItem(stepId, newState);

  const btn = document.querySelector(`[data-step-id="${stepId}"]`);
  const dot = document.getElementById(`dot-${stepId}`);

  if (btn) {
    if (newState) {
      btn.classList.add("checked");
      btn.textContent = "✓ Completed";
    } else {
      btn.classList.remove("checked");
      btn.textContent = "Mark Done";
    }
  }

  if (dot) {
    if (newState) {
      dot.classList.add("done");
    } else {
      dot.classList.remove("done");
    }
  }
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
    if (el) {
      el.addEventListener("input", recalculateBudget);
    }
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
  renderChecklistGroup("tech", "tech-checklist");
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
      <label class="check-row ${isChecked ? "checked" : ""}" id="row-${key}">
        <input type="checkbox" ${isChecked ? "checked" : ""} onchange="toggleChecklistItem('${key}')">
        <span class="check-label">${item}</span>
      </label>
    `;
  });

  container.innerHTML = html;
}

window.toggleChecklistItem = function(key) {
  const current = localStorage.getItem(key) === "true";
  const newState = !current;
  localStorage.setItem(key, newState);

  const row = document.getElementById(`row-${key}`);
  if (row) {
    if (newState) {
      row.classList.add("checked");
    } else {
      row.classList.remove("checked");
    }
  }
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
        Online (Cached)
      `;
    } else {
      badge.classList.remove("online");
      badge.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.58 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
        Offline Mode
      `;
    }
  }

  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);
  updateStatus();

  // Register service worker if supported
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // Offline fallback still works via local assets
    });
  }
}
