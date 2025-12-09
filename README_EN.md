# PerfX — Browser Performance Benchmark Suite

> Professional-grade CPU/GPU/RAM/Browser I/O/Network benchmarking directly in the browser, with contextual tiers and export options.

## Live Demo
- Netlify: <https://clever-biscotti-659db7.netlify.app/>
- Repo: <https://github.com/FCYD5454/PerfX>

## Highlights
- CPU (Single & Multi): Web Worker multi-thread + latency-sensitive single-thread workload, JIT warm-up, multi-pass max sampling; calibrated to Cinebench R23 (M3 / i5-13600K ≈ 23,000).
- GPU: WebGL heavy fragment shader + multiple draw calls; uses `EXT_disjoint_timer_query` when available to bypass V-Sync; resolution presets 1080p/2K/2.5K/4K.
- RAM Throughput: Large `Uint8Array` copies with longer duration to reduce cache bias.
- Browser I/O: IndexedDB large-chunk write/read; warns when read speed is likely cache-influenced.
- Network (Cloudflare): Latency/jitter + 5MB download throughput; shows “Server: Cloudflare CDN”.
- History & Trends: localStorage for recent 20 runs; Chart.js displays CPU/GPU/RAM/I/O/Net.
- Export: JSON, PNG (history chart), dashboard PNG, full-page PNG (buttons/title excluded), share text.
- Ranking: `ranking.html` lists top 88 CPU/GPU tiers; supports URL highlight (`?cpu=20239&gpu=480&tier=Ryzen%207%209700X`), live search, Top 5 bar charts vs your score.
- About: methodology, calibration, tech stack, FAQ, privacy notes.

## Quick Start (Local)
```bash
git clone https://github.com/FCYD5454/PerfX.git
cd PerfX
# serve statically (e.g., npx serve . or any static server)
```

## Usage
1) Open `index.html` → run “Full Test” or “Single-Core Quick Test”.
2) Review dashboard and History & Trend; export JSON/PNG/full-page PNG or copy share text.
3) Open `ranking.html?cpu=YOUR_CPU&gpu=YOUR_GPU&tier=YourTier` to highlight your score.
4) See `about.html` for methodology and calibration notes.

## Calibration & Baselines
- CPU baseline (100%): Apple M3 / Core i5-13600K ≈ 23,000 (Cinebench R23 scale).
- GPU baseline (100%): RTX 4060 / RTX 3060 Ti ≈ 10,600 (Time Spy scale).
- `HARDWARE_TIERS`: 2025 data; nearest-score matching to reduce tier jumping.

## Export & Share
- JSON: full history with detected hardware and tiers.
- PNG: history chart, dashboard, full-page (excludes header/buttons).
- Share Text: CPU/GPU/RAM/I/O/Net + device info; links to live site.

## Tech Notes
- Frontend: HTML5 + Tailwind CSS.
- GPU: WebGL + `EXT_disjoint_timer_query` (if available).
- CPU: Web Worker (multi-core) + main-thread latency workload (single-core).
- Charts: Chart.js; Export: html2canvas.
- Storage: localStorage only (no server-side storage).

## Pages
- `index.html`: main dashboard, tests, history, local leaderboard.
- `ranking.html`: reference ranking (top 88) with URL highlight, search, charts.
- `about.html`: methodology, calibration, FAQ, tech stack, privacy.

## Project Structure
```
index.html      # Main UI / tests
about.html      # About / methodology / FAQ
ranking.html    # Reference ranking + charts
main.js         # Detection, benchmarks, history, exports, leaderboard
style.css       # Extra styles (with Tailwind CDN)
BLUEPRINT.md    # Project blueprint
README_EN.md    # English docs
```

## Known Limitations
- WebGL optimizations differ by browser/driver; GPU scores may vary.
- Browser sandbox, thermal/power policies affect CPU results; treat as approximate.
- Browser I/O read speeds can be cache-influenced; UI warns when suspiciously high.

## Contributing
Issues/PRs welcome. Keep it static (no backend deps). Prefer Traditional Chinese UI with concise English terms where appropriate.

