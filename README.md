# PerfX — Browser Performance Benchmark Suite

> 切換語言 / Switch language: [English](README_EN.md)

> 瀏覽器端的專業級效能評測 (CPU/GPU/RAM/Browser I/O/Network) with contextual tiers & exports.

## 線上體驗 (Live Demo)
- Netlify：<https://clever-biscotti-659db7.netlify.app/>
- Repo：<https://github.com/FCYD5454/PerfX>

## 特色 (Features)
- CPU 單核/多核：Web Worker 多執行緒 + 延遲敏感單核負載，JIT 暖機、多輪取最大值，校準對齊 Cinebench R23 基準 (M3 / i5-13600K ≈ 23,000)。
- GPU 測試：WebGL 重度 Fragment Shader + 多 draw calls；若支援 `EXT_disjoint_timer_query` 可突破 V-Sync，分辨率可選 1080p/2K/2.5K/4K。
- 記憶體吞吐量 (RAM Throughput)：大尺寸 `Uint8Array` 複製、延長時間降低快取偏差。
- 瀏覽器 I/O：IndexedDB 大區塊寫讀，讀速過高時提示可能為快取。
- 網路速度 (Cloudflare)：延遲/抖動 + 5MB 下載吞吐，標註 Server: Cloudflare CDN。
- 歷史紀錄與趨勢：localStorage 保存最近 20 次，Chart.js 顯示 CPU/GPU/RAM/I/O/Net。
- 匯出：JSON、PNG (歷史圖)、儀表板 PNG、全頁 PNG、分享文字；匯出時自動收合下拉避免被截入。
- 排行榜：`ranking.html` 前 88 名 CPU/GPU 對照，支援 URL 參數高亮 (`?cpu=20239&gpu=480&tier=Ryzen%207%209700X`)、即時搜尋、Top 5 圖表對比。
- 關於頁：方法論、校準基準、技術棧、FAQ、隱私說明。

## 快速開始 (Local)
```bash
# 取得程式碼
git clone https://github.com/FCYD5454/PerfX.git
cd PerfX

# 直接以靜態檔案開啟（可用 VS Code Live Server / 任意靜態伺服器）
# 例如：npx serve .
```

## 使用流程 (Usage)
1) 打開首頁 `index.html` → 點「開始完整測試」或「單核快速測試」。  
2) 測試完成後，可在「歷史紀錄與趨勢」查看圖表、匯出 JSON/PNG/全頁 PNG、複製分享文字。  
3) 點導航「排行榜」或使用帶分數的連結 `ranking.html?cpu=YOUR_CPU&gpu=YOUR_GPU&tier=YourTier` 來高亮你的分數。  
4) 「關於」頁可查看方法論與校準基準。  

## 校準與基準 (Calibration & Baseline)
- CPU 基準 100%：Apple M3 / Core i5-13600K ≈ 23,000 (Cinebench R23 等效)。
- GPU 基準 100%：RTX 4060 / RTX 3060 Ti ≈ 10,600 (3DMark Time Spy 等效)。
- `HARDWARE_TIERS` 內建 2025 真實分數對照，分數匹配採「最接近分數」以減少 tier 跳動。

## 匯出與分享 (Export & Share)
- JSON：完整歷史紀錄 (含硬體偵測與 tiers)。
- PNG：歷史圖表 PNG / 儀表板 PNG / 全頁 PNG（已排除頁首按鈕）。
- Share Text：一鍵複製摘要（CPU/GPU/RAM/I/O/Net + 裝置資訊）。

## 開發說明 (Dev Notes)
- 前端：HTML5 + Tailwind CSS。
- GPU：WebGL + `EXT_disjoint_timer_query` (若可用)。
- CPU：Web Worker (多核) + 主執行緒延遲敏感負載 (單核)。
- 圖表：Chart.js；匯出：html2canvas。
- 資料儲存：localStorage；無伺服器端，隱私全在本機。

## 主要頁面 (Pages)
- `index.html`：測試主頁、儀表板、歷史/排行榜 (本地)。
- `ranking.html`：參考排行 (前 88) + URL 高亮 + 搜尋 + Top5 圖表。
- `about.html`：方法論、校準、FAQ、技術棧、隱私說明。

## 專案結構 (Project Structure)
```
index.html      # 主介面/測試入口
about.html      # 關於/方法論/FAQ
ranking.html    # 參考排行與圖表
main.js         # 偵測、測試邏輯、歷史/匯出/排行榜
style.css       # 額外樣式（搭配 Tailwind CDN）
BLUEPRINT.md    # 專案藍圖
```

## 已知限制 (Known Limitations)
- 不同瀏覽器/驅動對 WebGL 最佳化不同，GPU 分數會有差異。
- 瀏覽器沙箱與散熱、電源策略會影響 CPU 分數；請視為近似對照。
- Browser I/O 讀速若異常高，可能為系統快取；已於 UI 提示。

## 貢獻 (Contributing)
歡迎 Issue / PR，一律採用前端靜態資產流程，避免新增後端依賴。請維持繁體中文 UI、保留英文字詞對照。

