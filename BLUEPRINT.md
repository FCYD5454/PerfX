# 專案藍圖 (Project Blueprint) - V1.0

## 1. 產品願景 (Product Vision)
打造一個優雅、現代且高精度的**瀏覽器端效能測試平台 (Browser-based Performance Testing Platform)**。該平台將利用 Web 技術 (JavaScript, WebGL, WebAssembly) 為用戶提供即時的硬體效能評估，包括 CPU 計算能力、GPU 渲染性能及網路速度，並以直觀的視覺化圖表呈現結果。

## 2. 目標用戶畫像 (Target User Persona)
*   **硬體愛好者 (Hardware Enthusiasts):** 想要快速測試新設備在瀏覽器環境下的極限。
*   **Web 開發者 (Web Developers):** 需要評估客戶端設備性能以優化應用程式體驗。
*   **一般用戶 (General Users):** 想要簡單了解自己的電腦或手機夠不夠快。

## 3. 核心問題與解決方案 (Core Problem & Solution)
*   **問題:** 傳統跑分軟體需要下載安裝，網頁版測試工具通常介面過時或廣告過多，缺乏統一的測試標準。
*   **解決方案:** 一個**零安裝 (Zero-install)**、**即開即用 (Instant-on)** 的現代化 Web App，提供乾淨無干擾的 UI 和專業的測試指標。

## 4. 技術棧 (Technology Stack)
*   **Frontend (前端):**
    *   **Core:** HTML5, CSS3, Modern JavaScript (ES6+).
    *   **Styling:** Tailwind CSS (透過 CDN 或建置流程引入) - 確保「Well Designed」的現代感。
    *   **Charts:** Chart.js 或類似輕量級庫 - 用於視覺化數據。
    *   **Benchmarks:**
        *   *CPU:* 自定義矩陣運算與加密演算法測試 (Hash calculations).
        *   *GPU:* WebGL 渲染壓力測試 (粒子系統或 3D 場景).
*   **Backend (後端):** (初期為靜態網站，後期可選)
    *   Node.js (用於儲存排行榜或歷史記錄 - 暫定 MVP 階段不需要)。
*   **Hosting:** 靜態文件託管 (GitHub Pages / Vercel / Netlify)。

## 5. 資料庫結構 (Database Schema)
*   *MVP 階段 (V1) 暫無後端資料庫需求，數據存儲於 LocalStorage。*

## 6. 功能路線圖 (Feature Roadmap)
1.  **專案初始化與 UI 架構 (Project Initialization & UI Architecture):** 建立現代化佈局，引入 Tailwind CSS。
2.  **CPU 效能測試模組 (CPU Benchmark Module):** 實作多執行緒 (Web Workers) 運算測試 (例如：質數計算、哈希碰撞)。
3.  **GPU 效能測試模組 (GPU Benchmark Module):** 實作 WebGL 動畫幀率 (FPS) 測試。
4.  **綜合儀表板 (Dashboard):** 匯總測試分數與詳細數據展示。
5.  **響應式優化 (Responsive Optimization):** 確保手機與桌面端體驗一致。

## 7. API 端點定義 (API Endpoint Definitions)
*   *MVP 階段無後端 API。*

## 8. 部署與狀態日誌 (Deployment & Status Log)
*   **[2023-12-09] 狀態:** 專案啟動。建立 V1 藍圖。
*   **待辦:** 清理舊有 `index.html` 的挖掘代碼，轉型為專業測試工具。

