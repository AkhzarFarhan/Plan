# 🚗 Karavali & Malenadu Epic Loop — Road Trip Companion Webapp

A lightweight, mobile-optimized, offline-first web companion built for **3 bachelor software engineers** embarking on a 4-day monsoon road trip from Bangalore across Coastal Karnataka and the Western Ghats.

---

## 📱 Features Built for "On-the-Go" Travel

1. **Step-by-Step Interactive Itinerary (Day 1 to Day 4 • Return Mon Night):**
   - Timestamped timeline with driving hours, rest stops, scenic spots, and offline outskirts night halts.
   - One-tap **"Navigate to Spot / Masjid"** buttons opening Google Maps directly.
   - Filter chips to quickly isolate **🕌 Halal & Salah**, **Waterfalls**, **Beaches & Monoliths**, **High Plateaus**, and **Driver Alerts**.
   - Interactive **"Mark Done"** buttons to track progress as you cover each leg.

2. **🕌 Halal Dining, Beef Specialties & Safar Salah Companion:**
   - **Safar Salah Guide:** Clear breakdown of **Qasr** (shortening 4-rak'ah prayers to 2) and **Jam'** (combining Dhuhr+Asr and Maghrib+Isha) during travel.
   - **Curated Value-for-Money Halal & Beef Spots:**
     - *Shimoga (Night 1):* Hot charcoal beef seekh kebabs, khushka & beef fry (New Taj / Al-Rehman).
     - *Bhatkal / Honnavar (Day 2):* World-famous authentic **Bhatkali Beef Dum Biryani** & Coastal Beef Sukka (Kwality Hotel / City Light).
     - *Kumta (Night 2):* Kerala layered parotta, beef chilli, and beef fry (Hotel Shalimar / Al-Madeena).
     - *Chikmagalur (Day 4):* Celebrated Malnad spicy beef chops, beef pepper roast & biryani (New Taj / Khansama).
   - **Highway Mosques (Masjids) Directory:** Handpicked Masjids with clean wudu facilities and easy car parking right along the highway (Jamia Masjid Kadur, Shimoga, Honnavar, Bhatkal, Kumta, Kundapura, Hebri, Chikmagalur, and Hassan).

3. **Outskirts & Buffer Stays Hub (Offline Strategy):**
   - Specific highway bypasses for cheap offline walk-in rooms (₹1,000 – ₹1,500/night for 3 people).
   - Included **negotiation script** tailored for quick road trip check-ins.

4. **🛡️ Drive Safety & Road Info (Dedicated Tab):**
   - **Is it dangerous? The Honest Verdict:** Realistic breakdown (80% smooth highway, 20% mountain ghats).
   - **Road Condition & Risk Rating by Stretch:** Traffic-light table covering Bangalore-Shimoga, Jog-Honnavar, NH66 Coastal corridor, Agumbe 14 hairpins, Mullayanagiri peak, and Hassan-Bangalore return.
   - **The 3 Real Hazards & Mitigation:**
     - *Single-Driver Fatigue:* Co-pilot rule (passenger never sleeps), 2-hour tea/stretch alarm.
     - *Brake Fade in Petrol Cars:* Step-by-step engine braking guide (using 2nd/3rd gear on descents, never coasting in neutral).
     - *Monsoon Mist & Slick Turns:* Low-beam fog rules, blind-curve honking etiquette, staying off muddy shoulders.
   - **Pre-Trip Car Checks:** Tyre PSI (32-33), wipers/shampoo, coolant/brake fluid levels.
   - **Emergency Highway Helplines:** 112 (Police), 1033 (NHAI), 108 (Ambulance), and nearest major hospitals.

5. **Live 3-Way Expense Splitter:**
   - Real-time interactive budget calculator dividing petrol, tolls, stays, food, and tickets into an exact per-head split.

6. **Local Checklists with Memory:**
   - Pre-trip car health check (tyres, washer fluid, engine oil, Fastag).
   - Gear & luggage (waterproof sandals, quick-dry clothes, rainwear, Janamaz, Wudu water).

7. **100% Offline Capable & PWA:**
   - Zero external CDN dependencies; all styles, scripts, and SVG icons are bundled locally.
   - Full Service Worker (`sw.js`) and Web App Manifest (`manifest.json`) support. You can "Add to Home Screen" on iOS and Android.

---

## 🚀 How to Run & Use on the Go

### Option 1: Direct File (Zero Server Needed)
Simply double-click `index.html` on your laptop, or transfer the folder to your phone and open in Chrome / Safari.

### Option 2: Local Server (To view on your phones over the same Wi-Fi)
Inside the `C:\GitHub\Plan` directory:
```bash
# Using Python
python -m http.server 8000

# OR using Node
npx serve .
```
Find your laptop's local IP (e.g. `192.168.1.X:8000`) and open it on all 3 phones before heading out!

### Option 3: Free 1-Click Hosting on GitHub Pages
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Add road trip companion webapp"
   git push origin main
   ```
2. In your GitHub repository settings, go to **Pages** > Select `main` branch > Click **Save**.
3. You now have a live URL on your phones 24/7!
