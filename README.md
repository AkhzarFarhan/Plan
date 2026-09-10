# 🚗 Karavali & Malenadu Epic Loop — Road Trip Companion Webapp

A lightweight, mobile-optimized, offline-first web companion built for **3 bachelor software engineers** embarking on a 4-day monsoon road trip from Bangalore across Coastal Karnataka and the Western Ghats.

---

## 📱 Features Built for "On-the-Go" Travel

1. **Step-by-Step Interactive Itinerary (Day 1 to Day 5):**
   - Timestamped timeline with driving hours, rest stops, scenic spots, and offline outskirts night halts.
   - One-tap **"Navigate to Spot"** buttons opening Google Maps directly with destination queries.
   - Filter chips to quickly isolate **Waterfalls**, **Beaches & Monoliths**, **High Plateaus**, and **Driver Alerts**.
   - Interactive **"Mark Done"** buttons to track progress as you cover each leg.

2. **Outskirts & Buffer Stays Hub (Offline Strategy):**
   - Specific highway bypasses for cheap offline walk-in rooms (₹1,000 – ₹1,500/night for 3 people):
     - *Night 1 (Fri):* **Shimoga Sagar Road Bypass (NH69)**
     - *Night 2 (Sat):* **Kumta / Sanikatta (South of Gokarna)**
     - *Night 3 (Sun):* **Hebri / Brahmavar (Base of Agumbe Ghats)**
     - *Night 4 (Mon):* **Hassan Bypass (NH75)** or Direct Bangalore return.
   - Included **negotiation script** tailored for quick road trip check-ins.

3. **Hazards & Driver Safety Protocols:**
   - **Single-Driver Protocol:** Co-pilot shift duties, 2-hour tea/stretch alarms, and 2nd/3rd gear engine braking on steep ghat descents.
   - **Ganesh Chaturthi Long Weekend Warnings:** Temple crowd avoidance, festival road diversions, and dry-day/store closure head-ups.
   - **September Weather & Road Conditions:** Waterfalls at 100% capacity, sea undertow warnings, and mist/fog driving rules.

4. **Live 3-Way Expense Splitter:**
   - Real-time interactive budget calculator dividing petrol, tolls, stays, food, and tickets into an exact per-head split.

5. **Local Checklists with Memory:**
   - Pre-trip car health check (tyres, washer fluid, engine oil, Fastag).
   - Gear & luggage (waterproof sandals, quick-dry clothes, rainwear).
   - Documents & offline navigation maps.
   - Saved automatically via `localStorage` (persists on reload).

6. **100% Offline Capable & PWA:**
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
