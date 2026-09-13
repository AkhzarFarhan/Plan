# BathFit Bangalore • Showroom Tour & Spec Tracker

A mobile-first, light-themed web application designed as your personal pocket assistant for shopping and finalizing bathroom fittings in Bangalore (starting from Mahadevapura). 

Designed to let you inspect physical models in Bangalore showrooms, compare live water flow and swirl flushes, record exact model SKUs and discounted prices, and save everything locally on your phone—ready to hand over directly to your hometown dealer.

---

## 📱 Features

1. **Step-by-Step Route & Showroom Itinerary**:
   - **Stop 1 (5–8 mins)**: *Shankara Buildpro (ORR Mahadevapura / Doddanekkundi)* — Broad survey across Jaquar, Kohler, Cera, and Hindware; calibrate dimensions and baseline prices.
   - **Stop 2 (15–20 mins)**: *Indiranagar Hub (Kohler Experience Studio & Jaquar World - 100ft Rd / Domlur)* — Live working displays for swirl/tornado flush, rain shower pressure tests, and dual-knob wall mixer ergonomics.
   - **Stop 3 (15 mins North)**: *Kasturi Nagar to Kalyan Nagar ORR Sanitary Belt (Cera Style Gallery / Maruthi Ceramics)* — Budget verification and confirmation of models universally stocked by tier-2/3 hometown dealers.
   - **Stop 4 (Hometown)**: *Dealer Order Sheet* — Generates a 1-tap WhatsApp message with shortlisted SKUs, specifications, and plumber checklists.

2. **"What to Say" (Sales Rep Scripts)**:
   - Word-for-word dialogue cards with **1-Tap Copy to Clipboard** for:
     - Rimless Tornado/Swirl flush and bowl height filtering.
     - Exposed 3-in-1 wall mixers with separate dual knobs (150 mm inlet spacing).
     - Rectangular flat-wall wash basins with full pedestals.
     - Dealer discount inquiries and master-carton road transit packaging.

3. **Offline Model Logger & Notes Tracker**:
   - Save models under **Commode**, **3-in-1 Shower Mixer**, and **Wash Basin**.
   - Capture: Brand, Model Name, SKU/Catalog Code, Measured Dimensions, MRP, Quoted Dealer Discount %, Net Estimated Price, and Custom Notes.
   - Photo attachment with automatic browser-side compression (converts photos of catalog labels to compact data URLs).
   - Star (★) items to build your final hometown shortlist.

4. **Zero Database Needed (100% Offline & Private)**:
   - All entries and notes are stored directly in your browser’s `localStorage`.
   - Data persists across reloads and tab closures on your phone.
   - 1-Tap **Download Backup (JSON)** and **Restore Backup** to easily transfer data between devices.

---

## 📐 Your Key Ergonomic & Plumbing Reference

| Parameter | Your Site Spec | Why It Matters |
| :--- | :--- | :--- |
| **User Height** | **164 cm (~5 ft 4.5 in)** | Determines ideal seating ergonomics. |
| **Commode Rim Height** | **365 mm – 380 mm** *(without lid)* | Prevents feet dangling or thigh nerve compression. Avoids the 420mm+ "Comfort/ADA" height that restricts bowel alignment. |
| **Commode Floor Cutout** | **S-Trap 300 mm (12 inches)** | Standard Indian one-piece specification. Universally compatible. |
| **Mixer Tap Inlets** | **150 mm (6 inches)** | Exact factory standard for Jaquar exposed 3-in-1 wall mixers (includes crutch legs for ±15mm adjustment). |
| **Shower Head Pressure** | **Min 1.5 – 2.0 bar** | For gravity tanks without a booster pump, prioritize **Air-Injection heads** (Jaquar Airtec or Kohler Katalyst) to get full raindrops. |
| **Basin Dimensions** | **~600 x 450 mm (24" x 18")** | Rectangular profile mounted onto a single flat wall with a matching full pedestal. |

---

## 🚀 How to Run on Your Phone

### Option A: Via Local Wi-Fi (Instant)
1. On your PC (in `C:\GitHub\Plan`), run a local HTTP server:
   ```bash
   python -m http.server 8080
   ```
2. Find your PC's local IP address (e.g. `192.168.1.15` via `ipconfig`).
3. On your phone's browser (connected to the same Wi-Fi), open:
   ```
   http://192.168.1.15:8080
   ```
4. Tap **"Add to Home Screen"** in Safari / Chrome for a native app feel!

### Option B: Push to GitHub Pages
Push the repository to GitHub and enable GitHub Pages in your repo settings for a permanent public link you can access anywhere on mobile data without local Wi-Fi.
