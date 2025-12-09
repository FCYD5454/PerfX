// Main Application Logic

// Reference tiers for contextual meaning (2025 Edition, real-world baselines)
// Baseline (100%): 10,000 points
// CPU Baseline: Apple M3 / Core i5-13600K
// GPU Baseline: RTX 4060 Laptop / RTX 3060 Desktop
/**
 * HARDWARE_TIERS (2025 Ultimate Edition)
 * Data Source: User Provided Cinebench R23 (CPU) & 3DMark Time Spy (GPU)
 * 
 * Calibration Note:
 * Please calibrate your benchmark algorithm so that:
 * - Apple M3 / Core i5-13600K scores approx ~23,000 (CPU)
 * - RTX 4060 scores approx ~10,600 (GPU)
 */
let HARDWARE_TIERS = {
    cpu: [
        { score: 42597, label: "Core i9 14900KS", desc: "Rank #5 - 93 A", class: "text-purple-600 font-black", detail: "Cores: 24 (8P + 16E) | TDP: 150 W" },
        { score: 42377, label: "Ryzen 9 9950X3D", desc: "Rank #1 - 95 A+", class: "text-purple-600 font-black", detail: "Cores: 16 (16P) | TDP: 170 W" },
        { score: 42103, label: "Ryzen 9 9950X", desc: "Rank #2 - 95 A+", class: "text-purple-600 font-black", detail: "Cores: 16 (16P) | TDP: 170 W" },
        { score: 41782, label: "M3 Ultra", desc: "Rank #4 - 93 A", class: "text-purple-600 font-black", detail: "Cores: 32 (24P + 8E) | TDP: 140 W" },
        { score: 41558, label: "Core Ultra 9 285K", desc: "Rank #3 - 94 A+", class: "text-purple-600 font-black", detail: "Cores: 24 (8P + 16E) | TDP: 125 W" },
        { score: 40616, label: "Core i9 14900KF", desc: "Rank #7 - 90 A", class: "text-purple-600 font-black", detail: "Cores: 24 (8P + 16E) | TDP: 125 W" },
        { score: 40404, label: "Core i9 13900KS", desc: "Rank #8 - 90 A", class: "text-purple-600 font-black", detail: "Cores: 24 (8P + 16E) | TDP: 150 W" },
        { score: 40400, label: "Core i9 14900K", desc: "Rank #6 - 91 A", class: "text-purple-600 font-black", detail: "Cores: 24 (8P + 16E) | TDP: 125 W" },
        { score: 39012, label: "Core i9 13900KF", desc: "Rank #11 - 89 A", class: "text-red-600 font-bold", detail: "Cores: 24 (8P + 16E) | TDP: 125 W" },
        { score: 38496, label: "Core i9 13900", desc: "Rank #22 - 80 A", class: "text-red-600 font-bold", detail: "Cores: 24 (8P + 16E) | TDP: 65 W" },
        { score: 37486, label: "Core i9 13900K", desc: "Rank #15 - 86 A", class: "text-red-600 font-bold", detail: "Cores: 24 (8P + 16E) | TDP: 125 W" },
        { score: 36742, label: "Ryzen 9 7950X", desc: "Rank #14 - 87 A", class: "text-red-600 font-bold", detail: "Cores: 16 (16P) | TDP: 170 W" },
        { score: 36660, label: "Core i9 14900F", desc: "Rank #19 - 84 A", class: "text-red-600 font-bold", detail: "Cores: 24 (8P + 16E) | TDP: 65 W" },
        { score: 36309, label: "Core Ultra 7 265K", desc: "Rank #10 - 89 A", class: "text-red-600 font-bold", detail: "Cores: 20 (8P + 12E) | TDP: 125 W" },
        { score: 36291, label: "Ryzen 9 7950X3D", desc: "Rank #17 - 85 A", class: "text-red-600 font-bold", detail: "Cores: 16 (16P) | TDP: 120 W" },
        { score: 35774, label: "Core i9 13900F", desc: "Rank #27 - 79 A", class: "text-orange-500 font-bold", detail: "Cores: 24 (8P + 16E) | TDP: 65 W" },
        { score: 35450, label: "Core Ultra 7 265KF", desc: "Rank #12 - 88 A", class: "text-red-600 font-bold", detail: "Cores: 20 (8P + 12E) | TDP: 125 W" },
        { score: 35265, label: "Core i7 14700KF", desc: "Rank #16 - 85 A", class: "text-red-600 font-bold", detail: "Cores: 20 (8P + 12E) | TDP: 125 W" },
        { score: 34895, label: "Core i7 14700K", desc: "Rank #20 - 83 A", class: "text-red-600 font-bold", detail: "Cores: 20 (8P + 12E) | TDP: 125 W" },
        { score: 34549, label: "Ryzen 9 9900X3D", desc: "Rank #9 - 89 A", class: "text-red-600 font-bold", detail: "Cores: 12 (12P) | TDP: 120 W" },
        { score: 33289, label: "Core Ultra 9 285", desc: "Rank #18 - 84 A", class: "text-red-600 font-bold", detail: "Cores: 24 (8P + 16E) | TDP: 65 W" },
        { score: 33114, label: "Core i7 14700F", desc: "Rank #32 - 77 A", class: "text-orange-500 font-bold", detail: "Cores: 20 (8P + 12E) | TDP: 65 W" },
        { score: 33042, label: "Ryzen 9 9900X", desc: "Rank #13 - 87 A", class: "text-red-600 font-bold", detail: "Cores: 12 (12P) | TDP: 120 W" },
        { score: 31070, label: "Core i9 14900", desc: "Rank #25 - 79 A", class: "text-orange-500 font-bold", detail: "Cores: 24 (8P + 16E) | TDP: 65 W" },
        { score: 30684, label: "Core Ultra 7 265", desc: "Rank #23 - 79 A", class: "text-orange-500 font-bold", detail: "Cores: 20 (8P + 12E) | TDP: 65 W" },
        { score: 30468, label: "Core i7 13700K", desc: "Rank #28 - 79 A", class: "text-orange-500 font-bold", detail: "Cores: 16 (8P + 8E) | TDP: 125 W" },
        { score: 30435, label: "Core i7 13700KF", desc: "Rank #33 - 77 A", class: "text-orange-500 font-bold", detail: "Cores: 16 (8P + 8E) | TDP: 125 W" },
        { score: 29300, label: "Ryzen 9 7900X", desc: "Rank #29 - 78 A", class: "text-orange-500 font-bold", detail: "Cores: 12 (12P) | TDP: 170 W" },
        { score: 28914, label: "Core Ultra 7 265F", desc: "Rank #21 - 80 A", class: "text-red-600 font-bold", detail: "Cores: 20 (8P + 12E) | TDP: 65 W" },
        { score: 28398, label: "Core i7 14700", desc: "Rank #36 - 76 A", class: "text-orange-500 font-bold", detail: "Cores: 20 (8P + 12E) | TDP: 65 W" },
        { score: 27817, label: "Ryzen 9 7900X3D", desc: "Rank #26 - 79 A", class: "text-orange-500 font-bold", detail: "Cores: 12 (12P) | TDP: 120 W" },
        { score: 27341, label: "Core i9 12900K", desc: "Rank #44 - 72 A", class: "text-orange-500 font-bold", detail: "Cores: 16 (8P + 8E) | TDP: 125 W" },
        { score: 26017, label: "Ryzen 9 5950X", desc: "Rank #61 - 65 B", class: "text-blue-600 font-semibold", detail: "Cores: 16 (16P) | TDP: 105 W" },
        { score: 25699, label: "Core i7 13700F", desc: "Rank #46 - 71 A", class: "text-orange-500 font-bold", detail: "Cores: 16 (8P + 8E) | TDP: 65 W" },
        { score: 25369, label: "Core i7 13700", desc: "Rank #43 - 72 A", class: "text-orange-500 font-bold", detail: "Cores: 16 (8P + 8E) | TDP: 65 W" },
        { score: 25270, label: "Core i5 14600K", desc: "Rank #42 - 72 A", class: "text-orange-500 font-bold", detail: "Cores: 14 (6P + 8E) | TDP: 125 W" },
        { score: 25182, label: "Core Ultra 5 245KF", desc: "Rank #34 - 76 A", class: "text-orange-500 font-bold", detail: "Cores: 14 (6P + 8E) | TDP: 125 W" },
        { score: 25085, label: "Core Ultra 5 245K", desc: "Rank #35 - 76 A", class: "text-orange-500 font-bold", detail: "Cores: 14 (6P + 8E) | TDP: 125 W" },
        { score: 24119, label: "Core i5 14600KF", desc: "Rank #41 - 72 A", class: "text-orange-500 font-bold", detail: "Cores: 14 (6P + 8E) | TDP: 125 W" },
        { score: 23710, label: "Core i5 13600KF", desc: "Rank #50 - 69 B", class: "text-blue-600 font-semibold", detail: "Cores: 14 (6P + 8E) | TDP: 125 W" },
        { score: 23396, label: "Core i5 13600K", desc: "Rank #47 - 71 A", class: "text-orange-500 font-bold", detail: "Cores: 14 (6P + 8E) | TDP: 125 W" },
        { score: 23334, label: "Ryzen 7 9800X3D", desc: "Rank #24 - 79 A", class: "text-orange-500 font-bold", detail: "Cores: 8 (8P) | TDP: 120 W" },
        { score: 22970, label: "Core i7 12700K", desc: "Rank #52 - 68 B", class: "text-blue-600 font-semibold", detail: "Cores: 12 (8P + 4E) | TDP: 125 W" },
        { score: 22876, label: "Ryzen 9 3950X", desc: "Rank #88 - 55 B", class: "text-blue-500 font-medium", detail: "Cores: 16 (16P) | TDP: 105 W" },
        { score: 22784, label: "Core i7 12700KF", desc: "Rank #51 - 69 B", class: "text-blue-600 font-semibold", detail: "Cores: 12 (8P + 4E) | TDP: 125 W" },
        { score: 22768, label: "Core i5 14600", desc: "Rank #55 - 67 B", class: "text-blue-600 font-semibold", detail: "Cores: 14 (6P + 8E) | TDP: 65 W" },
        { score: 22689, label: "Core Ultra 5 235", desc: "Rank #38 - 74 A", class: "text-orange-500 font-bold", detail: "Cores: 14 (6P + 8E) | TDP: 65 W" },
        { score: 22564, label: "Ryzen 7 7800X", desc: "Rank #39 - 73 A", class: "text-orange-500 font-bold", detail: "Cores: 8 (8P) | TDP: 105 W" },
        { score: 22117, label: "Core i5 13600", desc: "Rank #58 - 66 B", class: "text-blue-600 font-semibold", detail: "Cores: 14 (6P + 8E) | TDP: 65 W" },
        { score: 22092, label: "Core i5 14500", desc: "Rank #57 - 66 B", class: "text-blue-600 font-semibold", detail: "Cores: 14 (6P + 8E) | TDP: 65 W" },
        { score: 21007, label: "Core i5 13500", desc: "Rank #65 - 63 B", class: "text-blue-600 font-semibold", detail: "Cores: 14 (6P + 8E) | TDP: 65 W" },
        { score: 20955, label: "Ryzen 9 5900", desc: "Rank #77 - 58 B", class: "text-blue-500 font-medium", detail: "Cores: 12 (12P) | TDP: 65 W" },
        { score: 20658, label: "Core i7 12700F", desc: "Rank #64 - 64 B", class: "text-blue-600 font-semibold", detail: "Cores: 12 (8P + 4E) | TDP: 65 W" },
        { score: 20634, label: "Ryzen 9 5900X", desc: "Rank #73 - 60 B", class: "text-blue-600 font-semibold", detail: "Cores: 12 (12P) | TDP: 105 W" },
        { score: 20588, label: "Ryzen 7 9700F", desc: "Rank #30 - 77 A", class: "text-orange-500 font-bold", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 20228, label: "Ryzen 7 9700X", desc: "Rank #31 - 77 A", class: "text-orange-500 font-bold", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 19872, label: "Ryzen 7 7700X", desc: "Rank #48 - 70 A", class: "text-orange-500 font-bold", detail: "Cores: 8 (8P) | TDP: 105 W" },
        { score: 19714, label: "Core i7 12700", desc: "Rank #66 - 63 B", class: "text-blue-600 font-semibold", detail: "Cores: 12 (8P + 4E) | TDP: 65 W" },
        { score: 18760, label: "Ryzen 7 7700", desc: "Rank #49 - 69 B", class: "text-blue-600 font-semibold", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 18682, label: "Ryzen 9 3900X", desc: "Rank #102 - 51 B", class: "text-blue-500 font-medium", detail: "Cores: 12 (12P) | TDP: 105 W" },
        { score: 18404, label: "Ryzen 9 3900XT", desc: "Rank #101 - 51 B", class: "text-blue-500 font-medium", detail: "Cores: 12 (12P) | TDP: 105 W" },
        { score: 18193, label: "Ryzen 7 7800X3D", desc: "Rank #59 - 65 B", class: "text-blue-600 font-semibold", detail: "Cores: 8 (8P) | TDP: 120 W" },
        { score: 18049, label: "Ryzen 7 8700G", desc: "Rank #63 - 64 B", class: "text-blue-600 font-semibold", detail: "Cores: 8 (8P) | TDP: 45-65 W" },
        { score: 17693, label: "Core i5 12600KF", desc: "Rank #70 - 62 B", class: "text-blue-600 font-semibold", detail: "Cores: 10 (6P + 4E) | TDP: 125 W" },
        { score: 17662, label: "Ryzen 7 8700F", desc: "Rank #62 - 64 B", class: "text-blue-600 font-semibold", detail: "Cores: 8 (8P) | TDP: 45-65 W" },
        { score: 17447, label: "Ryzen 5 9600X", desc: "Rank #40 - 72 A", class: "text-orange-500 font-bold", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 17333, label: "Core i5 12600K", desc: "Rank #71 - 61 B", class: "text-blue-600 font-semibold", detail: "Cores: 10 (6P + 4E) | TDP: 125 W" },
        { score: 17325, label: "Core i9 10900KF", desc: "Rank #107 - 50 B", class: "text-blue-500 font-medium", detail: "Cores: 10 (10P) | TDP: 125 W" },
        { score: 17050, label: "Core Ultra 5 225", desc: "Rank #54 - 67 B", class: "text-blue-600 font-semibold", detail: "Cores: 10 (6P + 4E) | TDP: 65 W" },
        { score: 16252, label: "Core i5 14400F", desc: "Rank #76 - 58 B", class: "text-blue-500 font-medium", detail: "Cores: 10 (6P + 4E) | TDP: 65 W" },
        { score: 16211, label: "Core i9 11900KF", desc: "Rank #84 - 56 B", class: "text-blue-500 font-medium", detail: "Cores: 8 (8P) | TDP: 125 W" },
        { score: 16112, label: "Core Ultra 5 225F", desc: "Rank #53 - 67 B", class: "text-blue-600 font-semibold", detail: "Cores: 10 (6P + 4E) | TDP: 65 W" },
        { score: 15953, label: "Core i5 13400", desc: "Rank #81 - 57 B", class: "text-blue-500 font-medium", detail: "Cores: 10 (6P + 4E) | TDP: 65 W" },
        { score: 15926, label: "Core i5 14400", desc: "Rank #79 - 57 B", class: "text-blue-500 font-medium", detail: "Cores: 10 (6P + 4E) | TDP: 65 W" },
        { score: 15911, label: "Core i5 13400F", desc: "Rank #80 - 57 B", class: "text-blue-500 font-medium", detail: "Cores: 10 (6P + 4E) | TDP: 65 W" },
        { score: 15538, label: "Core i9 10850K", desc: "Rank #115 - 48 B", class: "text-green-600", detail: "Cores: 10 (10P) | TDP: 125 W" },
        { score: 15366, label: "Core i9 10900K", desc: "Rank #116 - 48 B", class: "text-green-600", detail: "Cores: 10 (10P) | TDP: 125 W" },
        { score: 15344, label: "Ryzen 7 5800X", desc: "Rank #87 - 55 B", class: "text-blue-500 font-medium", detail: "Cores: 8 (8P) | TDP: 105 W" },
        { score: 15210, label: "Ryzen 5 7600X", desc: "Rank #60 - 65 B", class: "text-blue-600 font-semibold", detail: "Cores: 6 (6P) | TDP: 105 W" },
        { score: 15186, label: "Core i9 11900K", desc: "Rank #86 - 55 B", class: "text-blue-500 font-medium", detail: "Cores: 8 (8P) | TDP: 125 W" },
        { score: 15011, label: "Core i7 11700K", desc: "Rank #92 - 53 B", class: "text-blue-500 font-medium", detail: "Cores: 8 (8P) | TDP: 125 W" },
        { score: 15009, label: "Core i7 11700KF", desc: "Rank #91 - 53 B", class: "text-blue-500 font-medium", detail: "Cores: 8 (8P) | TDP: 125 W" },
        { score: 14804, label: "Ryzen 7 5800X3D", desc: "Rank #89 - 53 B", class: "text-blue-500 font-medium", detail: "Cores: 8 (8P) | TDP: 105 W" },
        { score: 14344, label: "Ryzen 5 7600", desc: "Rank #69 - 62 B", class: "text-blue-600 font-semibold", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 14077, label: "Ryzen 7 5700X", desc: "Rank #90 - 53 B", class: "text-blue-500 font-medium", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 14065, label: "Ryzen 7 5800", desc: "Rank #97 - 52 B", class: "text-blue-500 font-medium", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 14047, label: "Ryzen 7 5700G", desc: "Rank #98 - 52 B", class: "text-blue-500 font-medium", detail: "Cores: 8 (8P) | TDP: 45-65 W" },
        { score: 13848, label: "Ryzen 7 3800X", desc: "Rank #123 - 46 C", class: "text-green-600", detail: "Cores: 8 (8P) | TDP: 105 W" },
        { score: 13809, label: "Ryzen 5 7500F", desc: "Rank #68 - 62 B", class: "text-blue-600 font-semibold", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 13628, label: "Ryzen 5 8600G", desc: "Rank #72 - 60 B", class: "text-blue-600 font-semibold", detail: "Cores: 6 (6P) | TDP: 45-65 W" },
        { score: 13535, label: "Ryzen 7 5700X3D", desc: "Rank #108 - 49 B", class: "text-green-600", detail: "Cores: 8 (8P) | TDP: 105 W" },
        { score: 13508, label: "Ryzen 5 7400F", desc: "Rank #78 - 57 B", class: "text-blue-500 font-medium", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 13491, label: "Core i5 12600", desc: "Rank #82 - 57 B", class: "text-blue-500 font-medium", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 13469, label: "Ryzen 5 7600X3D", desc: "Rank #74 - 58 B", class: "text-blue-500 font-medium", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 13399, label: "Core i9 10900", desc: "Rank #127 - 44 C", class: "text-green-600", detail: "Cores: 10 (10P) | TDP: 65 W" },
        { score: 13315, label: "Core i9 11900", desc: "Rank #111 - 49 B", class: "text-green-600", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 12955, label: "Ryzen 7 3800XT", desc: "Rank #122 - 46 C", class: "text-green-600", detail: "Cores: 8 (8P) | TDP: 105 W" },
        { score: 12803, label: "Ryzen 5 9500F", desc: "Rank #67 - 62 B", class: "text-blue-600 font-semibold", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 12678, label: "Core i7 10700KF", desc: "Rank #128 - 44 C", class: "text-green-600", detail: "Cores: 8 (8P) | TDP: 125 W" },
        { score: 12678, label: "Core i7 10700K", desc: "Rank #129 - 44 C", class: "text-green-600", detail: "Cores: 8 (8P) | TDP: 125 W" },
        { score: 12528, label: "Core i5 12500", desc: "Rank #85 - 55 B", class: "text-blue-500 font-medium", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 12470, label: "Core i9 9900K", desc: "Rank #132 - 43 C", class: "text-green-600", detail: "Cores: 8 (8P) | TDP: 95 W" },
        { score: 12250, label: "Core i7 10700F", desc: "Rank #134 - 42 C", class: "text-green-600", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 12195, label: "Ryzen 7 3700X", desc: "Rank #125 - 45 C", class: "text-green-600", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 12047, label: "Core i5 12400F", desc: "Rank #95 - 52 B", class: "text-blue-500 font-medium", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 12023, label: "Core i5 12400", desc: "Rank #96 - 52 B", class: "text-blue-500 font-medium", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 11838, label: "Ryzen 5 5600X", desc: "Rank #106 - 50 B", class: "text-blue-500 font-medium", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 11520, label: "Ryzen 5 8500G", desc: "Rank #75 - 58 B", class: "text-blue-500 font-medium", detail: "Cores: 6 (2P + 4E) | TDP: 45-65 W" },
        { score: 11311, label: "Core i5 11600K", desc: "Rank #105 - 50 B", class: "text-blue-500 font-medium", detail: "Cores: 6 (6P) | TDP: 125 W" },
        { score: 11277, label: "Core i5 11600KF", desc: "Rank #113 - 48 B", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 125 W" },
        { score: 11072, label: "Core i7 11700", desc: "Rank #114 - 48 B", class: "text-green-600", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 11069, label: "Core i7 11700F", desc: "Rank #104 - 50 B", class: "text-blue-500 font-medium", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 10972, label: "Ryzen 5 8400F", desc: "Rank #83 - 56 B", class: "text-blue-500 font-medium", detail: "Cores: 6 (6P) | TDP: 45-65 W" },
        { score: 10898, label: "Ryzen 5 5600", desc: "Rank #110 - 49 B", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 10860, label: "Ryzen 5 5600G", desc: "Rank #121 - 46 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 45-65 W" },
        { score: 10502, label: "Ryzen 5 5600F", desc: "Rank #112 - 48 B", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 10489, label: "Core i5 10600KF", desc: "Rank #133 - 42 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 125 W" },
        { score: 10489, label: "Core i5 10600K", desc: "Rank #135 - 42 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 125 W" },
        { score: 10412, label: "Ryzen 5 5500", desc: "Rank #120 - 46 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 10235, label: "Core i5 11400F", desc: "Rank #126 - 44 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 10232, label: "Ryzen 7 5600X3D", desc: "Rank #117 - 47 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 105 W" },
        { score: 10140, label: "Ryzen 7 2700X", desc: "Rank #145 - 37 C", class: "text-gray-500", detail: "Cores: 8 (8P) | TDP: 105 W" },
        { score: 9810, label: "Ryzen 5 5500X3D", desc: "Rank #119 - 46 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 105 W" },
        { score: 9696, label: "Ryzen 5 3600XT", desc: "Rank #130 - 43 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 95 W" },
        { score: 9689, label: "Ryzen 3 8300G", desc: "Rank #93 - 52 B", class: "text-blue-500 font-medium", detail: "Cores: 4 (1P + 3E) | TDP: 45-65 W" },
        { score: 9623, label: "Core i5 11400", desc: "Rank #124 - 45 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 9526, label: "Ryzen 5 3600X", desc: "Rank #131 - 43 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 95 W" },
        { score: 9501, label: "Ryzen 5 3600", desc: "Rank #139 - 41 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 9428, label: "Core i7 9700K", desc: "Rank #138 - 41 C", class: "text-green-600", detail: "Cores: 8 (8P) | TDP: 95 W" },
        { score: 9348, label: "Ryzen 5 4600G", desc: "Rank #142 - 40 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 45-65 W" },
        { score: 9305, label: "Ryzen 5 4500", desc: "Rank #140 - 40 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 9258, label: "Ryzen 5 Pro 4650G", desc: "Rank #141 - 40 C", class: "text-green-600", detail: "Cores: 6 (6P) | TDP: 45-65 W" },
        { score: 9112, label: "Core i3 14100", desc: "Rank #94 - 52 B", class: "text-blue-500 font-medium", detail: "Cores: 4 (4P) | TDP: 60 W" },
        { score: 8947, label: "Ryzen 7 2700", desc: "Rank #160 - 34 D", class: "text-gray-500", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 8839, label: "Core i7 8700K", desc: "Rank #143 - 39 C", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 95 W" },
        { score: 8805, label: "Core i3 13100F", desc: "Rank #103 - 50 B", class: "text-blue-500 font-medium", detail: "Cores: 4 (4P) | TDP: 58 W" },
        { score: 8794, label: "Core i3 14100F", desc: "Rank #99 - 51 B", class: "text-blue-500 font-medium", detail: "Cores: 4 (4P) | TDP: 58 W" },
        { score: 8636, label: "Core i3 13100", desc: "Rank #109 - 49 B", class: "text-green-600", detail: "Cores: 4 (4P) | TDP: 60 W" },
        { score: 8540, label: "Core i7 9700", desc: "Rank #144 - 38 C", class: "text-gray-500", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 8532, label: "Core i7 10700", desc: "Rank #137 - 41 C", class: "text-green-600", detail: "Cores: 8 (8P) | TDP: 65 W" },
        { score: 8452, label: "Ryzen 3 5300G", desc: "Rank #136 - 41 C", class: "text-green-600", detail: "Cores: 4 (4P) | TDP: 45-65 W" },
        { score: 8447, label: "Core i3 12100F", desc: "Rank #100 - 51 B", class: "text-blue-500 font-medium", detail: "Cores: 4 (4P) | TDP: 58 W" },
        { score: 8209, label: "Core i5 10500", desc: "Rank #146 - 36 C", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 8061, label: "Core i3 12100", desc: "Rank #118 - 47 C", class: "text-green-600", detail: "Cores: 4 (4P) | TDP: 60 W" },
        { score: 7614, label: "Core i5 10400", desc: "Rank #147 - 36 C", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 7610, label: "Core i5 10400F", desc: "Rank #153 - 35 D", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 7523, label: "Ryzen 5 2600X", desc: "Rank #159 - 34 D", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 95 W" },
        { score: 7428, label: "Core i5 10500T", desc: "Rank #163 - 32 D", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 25-35 W" },
        { score: 7125, label: "Core i7 8700", desc: "Rank #149 - 36 C", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 7089, label: "Ryzen 5 2600", desc: "Rank #165 - 32 D", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 6775, label: "Core i5 8600K", desc: "Rank #150 - 36 C", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 95 W" },
        { score: 6596, label: "Core i5 9600K", desc: "Rank #151 - 36 C", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 95 W" },
        { score: 6230, label: "Ryzen 5 1600", desc: "Rank #171 - 30 D", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 6060, label: "Ryzen 3 4100", desc: "Rank #152 - 35 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 45-65 W" },
        { score: 5993, label: "Core i5 9500", desc: "Rank #158 - 34 D", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 5902, label: "Core i7 7700K", desc: "Rank #154 - 35 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 91 W" },
        { score: 5852, label: "Core i5 8400", desc: "Rank #167 - 31 D", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 5737, label: "Core i3 10105F", desc: "Rank #155 - 34 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 65 W" },
        { score: 5644, label: "Core i7 6700K", desc: "Rank #161 - 34 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 91 W" },
        { score: 5612, label: "Core i3 10100F", desc: "Rank #156 - 34 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 65 W" },
        { score: 5612, label: "Core i3 10100", desc: "Rank #162 - 33 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 65 W" },
        { score: 5581, label: "Core i5 9400F", desc: "Rank #166 - 32 D", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 5539, label: "Core i5 8500", desc: "Rank #164 - 32 D", class: "text-gray-500", detail: "Cores: 6 (6P) | TDP: 65 W" },
        { score: 5439, label: "Core i7 7700", desc: "Rank #148 - 36 C", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 65 W" },
        { score: 5423, label: "Ryzen 3 3100", desc: "Rank #157 - 34 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 65 W" },
        { score: 4840, label: "Core i7 670", desc: "Rank #168 - 31 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 65 W" },
        { score: 4810, label: "Ryzen 5 3400G", desc: "Rank #170 - 30 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 45-65 W" },
        { score: 4800, label: "Ryzen 5 2400G", desc: "Rank #173 - 28 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 65 W" },
        { score: 4155, label: "Core i3 9100F", desc: "Rank #169 - 30 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 65 W" },
        { score: 3965, label: "Core i5 6600K", desc: "Rank #172 - 30 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 91 W" },
        { score: 3607, label: "Core i3 8100", desc: "Rank #178 - 27 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 65 W" },
        { score: 3587, label: "Ryzen 3 2200G", desc: "Rank #176 - 27 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 65 W" },
        { score: 3415, label: "Processor N150", desc: "Rank #174 - 27 D", class: "text-gray-500", detail: "Cores: 4 (4E) | TDP: 6 W" },
        { score: 3380, label: "Core i5 7400", desc: "Rank #180 - 26 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 65 W" },
        { score: 3361, label: "Core i5 6500", desc: "Rank #177 - 27 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 65 W" },
        { score: 3317, label: "Ryzen 3 3200G", desc: "Rank #175 - 27 D", class: "text-gray-500", detail: "Cores: 4 (4P) | TDP: 45-65 W" },
        { score: 3049, label: "Processor N250", desc: "Rank #179 - 26 D", class: "text-gray-500", detail: "Cores: 4 (4E) | TDP: 6 W" }
        // Mobile additions
        ,{ score: 24500, label: "M4 Max (16-Core)", desc: "Mobile King", class: "text-teal-500 font-bold", detail: "Apple Silicon" }
        ,{ score: 14800, label: "M2 Max", desc: "Mobile High End", class: "text-teal-500 font-bold", detail: "Apple Silicon" }
        ,{ score: 10500, label: "Snapdragon 8 Gen 3", desc: "Mobile Flagship", class: "text-teal-500 font-bold", detail: "Android King" }
        ,{ score: 9200, label: "Dimensity 9300", desc: "Mobile Flagship", class: "text-teal-500 font-bold", detail: "MediaTek" }
        ,{ score: 8500, label: "Snapdragon 8 Gen 2", desc: "Mobile High End", class: "text-teal-500 font-semibold", detail: "Android" }
        ,{ score: 7400, label: "Apple A17 Pro", desc: "Mobile High End", class: "text-teal-500 font-semibold", detail: "iPhone 15 Pro" }
        ,{ score: 6200, label: "Snapdragon 8+ Gen 1", desc: "Mobile High End", class: "text-teal-500 font-medium", detail: "Android" }
        ,{ score: 5100, label: "Exynos 1280", desc: "Mobile Mid-Range", class: "text-teal-500 font-medium", detail: "Galaxy A53" }
        ,{ score: 4200, label: "Snapdragon 778G", desc: "Mobile Mid-Range", class: "text-teal-500 font-medium", detail: "Popular mid-range" }
        ,{ score: 3500, label: "Snapdragon 695", desc: "Mobile Entry 5G", class: "text-teal-500", detail: "Budget 5G" }
        ,{ score: 3100, label: "Helio G99", desc: "Mobile Budget", class: "text-teal-500", detail: "4G gaming budget" }
        ,{ score: 2800, label: "Snapdragon 680", desc: "Mobile Budget", class: "text-teal-500", detail: "Entry 4G" }
        ,{ score: 2500, label: "Exynos 850", desc: "Mobile Entry", class: "text-gray-500", detail: "Galaxy A13" }
        ,{ score: 2200, label: "Unisoc T616", desc: "Mobile Low-End", class: "text-gray-500", detail: "Budget tablet" }
        ,{ score: 1900, label: "Helio G85", desc: "Mobile Low-End", class: "text-gray-500", detail: "Entry Android" }
        ,{ score: 1600, label: "Snapdragon 662", desc: "Mobile Old Budget", class: "text-gray-500", detail: "Older budget" }
        ,{ score: 1200, label: "Helio A22", desc: "Mobile Entry", class: "text-gray-500", detail: "Basic phone" }
    ],
    gpu: [
        { score: 47023, label: "RTX 5090", desc: "Rank #1 - 96", class: "text-purple-600 font-black", detail: "Gaming: 100/100 | Nvidia" },
        { score: 36318, label: "RTX 4090", desc: "Rank #2 - 89", class: "text-red-600 font-bold", detail: "Gaming: 92/100 | Nvidia" },
        { score: 32989, label: "RTX 5080", desc: "Rank #3 - 84", class: "text-red-600 font-bold", detail: "Gaming: 87/100 | Nvidia" },
        { score: 30711, label: "RX 7900 XTX", desc: "Rank #5 - 77", class: "text-orange-500 font-bold", detail: "Gaming: 81/100 | AMD" },
        { score: 29924, label: "RX 9070 XT", desc: "Rank #11 - 69", class: "text-blue-600 font-semibold", detail: "Gaming: 74/100 | AMD" },
        { score: 28287, label: "RTX 4080 SUPER", desc: "Rank #6 - 75", class: "text-orange-500 font-bold", detail: "Gaming: 78/100 | Nvidia" },
        { score: 28166, label: "RTX 4080", desc: "Rank #8 - 73", class: "text-orange-500 font-bold", detail: "Gaming: 77/100 | Nvidia" },
        { score: 27784, label: "RTX 5070 Ti", desc: "Rank #7 - 74", class: "text-orange-500 font-bold", detail: "Gaming: 76/100 | Nvidia" },
        { score: 27022, label: "RX 7900 XT", desc: "Rank #10 - 70", class: "text-orange-500 font-bold", detail: "Gaming: 72/100 | AMD" },
        { score: 26999, label: "RX 9070", desc: "Rank #15 - 62", class: "text-blue-600 font-semibold", detail: "Gaming: 66/100 | AMD" },
        { score: 24723, label: "RTX 6000 Ada", desc: "Rank #4 - 90", class: "text-purple-600 font-black", detail: "Gaming: 92/100 | Nvidia" },
        { score: 24222, label: "RTX 4070 Ti SUPER", desc: "Rank #12 - 69", class: "text-blue-600 font-semibold", detail: "Gaming: 70/100 | Nvidia" },
        { score: 22757, label: "RTX 4070 Ti", desc: "Rank #14 - 64", class: "text-blue-600 font-semibold", detail: "Gaming: 66/100 | Nvidia" },
        { score: 22660, label: "RTX 5070", desc: "Rank #19 - 61", class: "text-blue-600 font-semibold", detail: "Gaming: 64/100 | Nvidia" },
        { score: 22509, label: "RX 7900 GRE", desc: "Rank #17 - 62", class: "text-blue-600 font-semibold", detail: "Gaming: 64/100 | AMD" },
        { score: 21849, label: "RTX 3090 Ti", desc: "Rank #13 - 66", class: "text-blue-600 font-semibold", detail: "Gaming: 66/100 | Nvidia" },
        { score: 21584, label: "RX 6950 XT", desc: "Rank #21 - 59", class: "text-blue-500 font-medium", detail: "Gaming: 60/100 | AMD" },
        { score: 20886, label: "RTX 4070 SUPER", desc: "Rank #20 - 61", class: "text-blue-600 font-semibold", detail: "Gaming: 62/100 | Nvidia" },
        { score: 20797, label: "RX 6900 XT", desc: "Rank #24 - 54", class: "text-blue-500 font-medium", detail: "Gaming: 57/100 | AMD" },
        { score: 19814, label: "RTX 4500 Ada", desc: "Rank #16 - 62", class: "text-blue-600 font-semibold", detail: "Gaming: 61/100 | Nvidia" },
        { score: 20092, label: "RX 7800 XT", desc: "Rank #23 - 55", class: "text-blue-500 font-medium", detail: "Gaming: 56/100 | AMD" },
        { score: 19899, label: "RTX 3090", desc: "Rank #18 - 62", class: "text-blue-600 font-semibold", detail: "Gaming: 61/100 | Nvidia" },
        { score: 19631, label: "RTX 3080 Ti", desc: "Rank #22 - 59", class: "text-blue-500 font-medium", detail: "Gaming: 60/100 | Nvidia" },
        { score: 19361, label: "RX 6800 XT", desc: "Rank #28 - 51", class: "text-blue-500 font-medium", detail: "Gaming: 53/100 | AMD" },
        { score: 17814, label: "RTX 4070", desc: "Rank #26 - 53", class: "text-blue-500 font-medium", detail: "Gaming: 54/100 | Nvidia" },
        { score: 17663, label: "RTX 3080", desc: "Rank #27 - 53", class: "text-blue-500 font-medium", detail: "Gaming: 54/100 | Nvidia" },
        { score: 17101, label: "RX 7700 XT", desc: "Rank #30 - 49", class: "text-green-600", detail: "Gaming: 50/100 | AMD" },
        { score: 16468, label: "RX 9060 XT", desc: "Rank #35 - 44", class: "text-green-600", detail: "Gaming: 45/100 | AMD" },
        { score: 16212, label: "RX 6800", desc: "Rank #33 - 46", class: "text-green-600", detail: "Gaming: 46/100 | AMD" },
        { score: 16030, label: "RTX 5060 Ti (16GB)", desc: "Rank #29 - 49", class: "text-green-600", detail: "Gaming: 50/100 | Nvidia" },
        { score: 15626, label: "RTX 5060 Ti (8GB)", desc: "Rank #32 - 47", class: "text-green-600", detail: "Gaming: 49/100 | Nvidia" },
        { score: 14877, label: "RTX 3070 Ti", desc: "Rank #34 - 46", class: "text-green-600", detail: "Gaming: 46/100 | Nvidia" },
        { score: 14657, label: "RTX 2080 Ti", desc: "Rank #37 - 44", class: "text-green-600", detail: "Gaming: 44/100 | Nvidia" },
        { score: 14654, label: "Arc B580", desc: "Rank #46 - 37", class: "text-gray-500", detail: "Gaming: 34/100 | Intel" },
        { score: 14463, label: "RTX 4000 Ada", desc: "Rank #31 - 49", class: "text-green-600", detail: "Gaming: 48/100 | Nvidia" },
        { score: 14307, label: "RTX 5000 Ada", desc: "Rank #9 - 79", class: "text-orange-500 font-bold", detail: "Gaming: 84/100 | Nvidia" },
        { score: 13703, label: "RTX 5060", desc: "Rank #38 - 43", class: "text-green-600", detail: "Gaming: 43/100 | Nvidia" },
        { score: 13642, label: "RTX 3070", desc: "Rank #40 - 42", class: "text-green-600", detail: "Gaming: 43/100 | Nvidia" },
        { score: 13556, label: "Arc A770", desc: "Rank #48 - 39", class: "text-gray-500", detail: "Gaming: 39/100 | Intel" },
        { score: 13552, label: "RX 6750 XT", desc: "Rank #41 - 38", class: "text-gray-500", detail: "Gaming: 36/100 | AMD" },
        { score: 13488, label: "RTX 4060 Ti 8GB", desc: "Rank #39 - 43", class: "text-green-600", detail: "Gaming: 43/100 | Nvidia" },
        { score: 13463, label: "RTX 4060 Ti 16GB", desc: "Rank #36 - 44", class: "text-green-600", detail: "Gaming: 43/100 | Nvidia" },
        { score: 12813, label: "RX 6700 XT", desc: "Rank #43 - 38", class: "text-gray-500", detail: "Gaming: 37/100 | AMD" },
        { score: 12487, label: "Arc B570", desc: "Rank #55 - 32", class: "text-gray-500", detail: "Gaming: 30/100 | Intel" },
        { score: 12435, label: "Arc A750", desc: "Rank #54 - 33", class: "text-gray-500", detail: "Gaming: 31/100 | Intel" },
        { score: 11706, label: "RTX 3060 Ti", desc: "Rank #45 - 38", class: "text-gray-500", detail: "Gaming: 38/100 | Nvidia" },
        { score: 11622, label: "RTX 2080 SUPER", desc: "Rank #44 - 38", class: "text-gray-500", detail: "Gaming: 37/100 | Nvidia" },
        { score: 11153, label: "RX 7600 XT", desc: "Rank #49 - 36", class: "text-gray-500", detail: "Gaming: 35/100 | AMD" },
        { score: 11080, label: "RTX 2080", desc: "Rank #47 - 37", class: "text-gray-500", detail: "Gaming: 35/100 | Nvidia" },
        { score: 10949, label: "RX 7600", desc: "Rank #52 - 34", class: "text-gray-500", detail: "Gaming: 33/100 | AMD" },
        { score: 10832, label: "Arc A580", desc: "Rank #63 - 31", class: "text-gray-500", detail: "Gaming: 29/100 | Intel" },
        { score: 10621, label: "RTX 4060", desc: "Rank #50 - 36", class: "text-gray-500", detail: "Gaming: 35/100 | Nvidia" },
        { score: 10405, label: "RX 6600", desc: "Rank #64 - 29", class: "text-gray-500", detail: "Gaming: 31/100 | AMD" },
        { score: 10301, label: "RTX 5050", desc: "Rank #51 - 35", class: "text-gray-500", detail: "Gaming: 34/100 | Nvidia" },
        { score: 10168, label: "RTX 2070 SUPER", desc: "Rank #53 - 34", class: "text-gray-500", detail: "Gaming: 31/100 | Nvidia" },
        { score: 9982, label: "GTX 1080 Ti", desc: "Rank #57 - 32", class: "text-gray-500", detail: "Gaming: 31/100 | Nvidia" },
        { score: 9904, label: "RX 6650 XT", desc: "Rank #58 - 31", class: "text-gray-500", detail: "Gaming: 30/100 | AMD" },
        { score: 9643, label: "RX 6600 XT", desc: "Rank #62 - 30", class: "text-gray-500", detail: "Gaming: 29/100 | AMD" },
        { score: 9422, label: "RX 5700 XT", desc: "Rank #61 - 30", class: "text-gray-500", detail: "Gaming: 28/100 | AMD" },
        { score: 9080, label: "RTX 2070", desc: "Rank #60 - 31", class: "text-gray-500", detail: "Gaming: 29/100 | Nvidia" },
        { score: 8500, label: "RTX 2000 Ada", desc: "Rank #42 - 38", class: "text-gray-500", detail: "Gaming: 28/100 | Nvidia" },
        { score: 8751, label: "RTX 3060", desc: "Rank #56 - 32", class: "text-gray-500", detail: "Gaming: 30/100 | Nvidia" },
        { score: 8734, label: "RTX 2060 SUPER", desc: "Rank #59 - 31", class: "text-gray-500", detail: "Gaming: 29/100 | Nvidia" },
        { score: 7632, label: "RX 5600 XT", desc: "Rank #66 - 25", class: "text-gray-500", detail: "Gaming: 23/100 | AMD" },
        { score: 7592, label: "GTX 1080", desc: "Rank #68 - 25", class: "text-gray-500", detail: "Gaming: 24/100 | Nvidia" },
        { score: 7567, label: "RTX 2060", desc: "Rank #65 - 27", class: "text-gray-500", detail: "Gaming: 25/100 | Nvidia" },
        { score: 6842, label: "GTX 1070 Ti", desc: "Rank #70 - 23", class: "text-gray-500", detail: "Gaming: 22/100 | Nvidia" },
        { score: 6341, label: "GTX 1660 Ti", desc: "Rank #69 - 23", class: "text-gray-500", detail: "Gaming: 20/100 | Nvidia" },
        { score: 6232, label: "RTX 3050", desc: "Rank #67 - 25", class: "text-gray-500", detail: "Gaming: 23/100 | Nvidia" },
        { score: 6091, label: "GTX 1070", desc: "Rank #72 - 22", class: "text-gray-500", detail: "Gaming: 20/100 | Nvidia" },
        { score: 6045, label: "GTX 1660 SUPER", desc: "Rank #71 - 22", class: "text-gray-500", detail: "Gaming: 19/100 | Nvidia" },
        { score: 5856, label: "GTX 980 Ti", desc: "Rank #73 - 20", class: "text-gray-500", detail: "Gaming: 18/100 | Nvidia" },
        { score: 5443, label: "GTX 1660", desc: "Rank #74 - 21", class: "text-gray-500", detail: "Gaming: 18/100 | Nvidia" },
        { score: 4946, label: "RX 6500 XT", desc: "Rank #75 - 19", class: "text-gray-500", detail: "Gaming: 16/100 | AMD" },
        { score: 4854, label: "RX 5500 XT", desc: "Rank #78 - 18", class: "text-gray-500", detail: "Gaming: 14/100 | AMD" },
        { score: 4778, label: "RX 590", desc: "Rank #76 - 20", class: "text-gray-500", detail: "Gaming: 17/100 | AMD" },
        { score: 4691, label: "GTX 1650 SUPER", desc: "Rank #77 - 19", class: "text-gray-500", detail: "Gaming: 15/100 | Nvidia" },
        { score: 4354, label: "RX 580", desc: "Rank #79 - 17", class: "text-gray-500", detail: "Gaming: 14/100 | AMD" },
        { score: 4264, label: "Arc A380", desc: "Rank #81 - 17", class: "text-gray-500", detail: "Gaming: 13/100 | Intel" },
        { score: 4203, label: "GTX 1060", desc: "Rank #80 - 17", class: "text-gray-500", detail: "Gaming: 14/100 | Nvidia" },
        { score: 3855, label: "RX 570", desc: "Rank #83 - 16", class: "text-gray-500", detail: "Gaming: 12/100 | AMD" },
        { score: 3562, label: "GTX 1650", desc: "Rank #84 - 15", class: "text-gray-500", detail: "Gaming: 12/100 | Nvidia" },
        { score: 2352, label: "GTX 1050 Ti", desc: "Rank #85 - 12", class: "text-gray-500", detail: "Gaming: 8/100 | Nvidia" },
        { score: 2302, label: "GTX 960", desc: "Rank #86 - 11", class: "text-gray-500", detail: "Gaming: 9/100 | Nvidia" },
        { score: 1854, label: "RX 560", desc: "Rank #87 - 11", class: "text-gray-500", detail: "Gaming: 7/100 | AMD" },
        { score: 1736, label: "GTX 1050", desc: "Rank #88 - 10", class: "text-gray-500", detail: "Gaming: 6/100 | Nvidia" }
        // Mobile additions
        ,{ score: 4200, label: "M3 Max (40-Core)", desc: "Mobile Beast", class: "text-teal-500 font-bold", detail: "≈ RTX 3050 Laptop" }
        ,{ score: 3100, label: "Snapdragon 8 Gen 3 GPU", desc: "Mobile Flagship", class: "text-teal-500 font-bold", detail: "~GTX 1650 Mobile" }
        ,{ score: 2600, label: "A17 Pro GPU", desc: "Mobile High-End", class: "text-teal-500 font-semibold", detail: "iPhone 15 Pro ~GTX 1050 Ti" }
        ,{ score: 2200, label: "Snapdragon 8 Gen 2 GPU", desc: "Mobile High-End", class: "text-teal-500 font-semibold", detail: "~GTX 1050" }
        ,{ score: 1400, label: "Exynos 2200 GPU", desc: "Mobile Mid/High", class: "text-teal-500", detail: "RDNA2 Mobile" }
        ,{ score: 1100, label: "Mali-G68 MP4", desc: "Mobile Mid-Range", class: "text-teal-500 font-medium", detail: "Galaxy A53 Class" }
        ,{ score: 850, label: "Adreno 619", desc: "Mobile Entry 5G", class: "text-teal-500", detail: "Snapdragon 695" }
        ,{ score: 650, label: "Mali-G57 MC2", desc: "Mobile Budget", class: "text-teal-500", detail: "Helio G99 / Dimensity 700" }
        ,{ score: 450, label: "Adreno 610", desc: "Mobile Low-End", class: "text-gray-500", detail: "Snapdragon 680" }
        ,{ score: 380, label: "Mali-G52 MC2", desc: "Mobile Low-End", class: "text-gray-500", detail: "Helio G85 / G80" }
        ,{ score: 250, label: "PowerVR GE8320", desc: "Mobile Entry", class: "text-gray-500", detail: "Helio G25 / A22" }
        ,{ score: 150, label: "Adreno 505", desc: "Mobile Obsolete", class: "text-gray-500", detail: "Snapdragon 435" }
    ]
};


// Baselines for percentage and context
const BASELINE_CPU_SCORE = 23000; // ~Core i5-13600K / M3 Pro
const BASELINE_GPU_SCORE = 10600; // ~RTX 4060 / RTX 3060 Ti
// Calibration factors to map raw scores to tier scale (tune as needed)
const CPU_CALIBRATION_MULTIPLIER = 0.028; // tuned so ~20.8k maps closer to 20,228 (9700X) than 21,000 (M3 Pro)
const CPU_SINGLE_CALIBRATION_MULTIPLIER = 0.00505; // single-core factor tuned: 3,069 -> ~2,213 (9700X target band)
const GPU_DRAW_CALLS = 20;         // moderate draws per frame
const GPU_LOOP_ITER = 300;         // moderate fragment shader loop iterations
let GPU_RES_SCALE = 1.5;           // user-selectable resolution scale
let CURRENT_MODE = 'standard';     // standard | extreme
const MEM_SIZE_MB = 128;           // larger buffer to bypass CPU cache
const MEM_DURATION_MS = 1500;      // longer duration for stable timing
const STORAGE_CHUNK_MB = 32;       // larger chunks to reduce JS overhead
const STORAGE_ITER = 4;            // number of chunks to write/read
const NET_PINGS = 8;               // number of latency samples
const NET_TIMEOUT_MS = 8000;       // per request timeout
const NET_DOWNLOAD_URL = "https://speed.cloudflare.com/__down?bytes=5000000"; // 5MB
const NET_LATENCY_URL = "https://speed.cloudflare.com/__down?bytes=0";       // tiny ping
const LANG = ((document.documentElement.lang || '').toLowerCase().startsWith('en')) ? 'en' : 'zh';
const DEVICE_CLASSES = { DESKTOP: 'desktop', ARM_HIGH: 'arm-high', MOBILE: 'mobile' };
let DEVICE_CLASS = DEVICE_CLASSES.DESKTOP;
const DEVICE_CPU_COEFF = { desktop: 1, 'arm-high': 0.9, mobile: 0.6 };
const DEVICE_GPU_PENALTY = { desktop: 1, 'arm-high': 0.9, mobile: 0.65 };
const MOBILE_GPU_SCALE = 0.7;
const MOBILE_GPU_LOOP_FACTOR = 0.6;
const MOBILE_GPU_DRAW_FACTOR = 0.6;
const STRINGS = {
    zh: {
        unknownTier: '未知等級',
        tierPrefix: '等級：',
        waiting: '等待測試...',
        testing: '測試進行中...',
        testAgain: '再次測試',
        testAborted: '測試中斷',
        testFailedConsole: '測試失敗 (請查看 Console)',
        testFailed: '測試失敗',
        singleTesting: '單核測試中...',
        singleReady: '單核快速測試',
        singleFailed: '測試失敗',
        singleWarmup: '單核預熱中...',
        singleProgress: (p, total) => `單核測試中 (${p}/${total})...`,
        singleDone: '單核測試完成',
        cpuWarmup: '預熱中...',
        cpuProgress: (p, total) => `測試中 (${p}/${total})...`,
        cpuDone: (s) => `測試完成 (${s.toFixed(1)}s)`,
        memTesting: '記憶體吞吐量測試中 (RAM Throughput)...',
        memDone: (s) => `完成 (${s}s)`,
        ioNotSupported: '瀏覽器 I/O：IndexedDB 不支援，測試略過',
        ioWrite: '瀏覽器 I/O 寫入測試中...',
        ioRead: '瀏覽器 I/O 讀取測試中...',
        ioDoneCache: '瀏覽器 I/O 測試完成（可能為系統快取，建議冷啟再測）',
        ioDone: '瀏覽器 I/O 測試完成',
        netLatency: '網路延遲測試中...',
        netDownload: '下載測試中 (Cloudflare 5MB)...',
        netDone: '網路測試完成',
        gpuFailCanvas: '測試失敗 (Canvas Missing)',
        gpuFailWebGL: 'WebGL 初始化失敗或不支援',
        gpuStress: '正在進行極限渲染 (Extreme GPU Stress)...',
        gpuDone: (iter, draws) => `測試完成 (負載 x ${iter} 迭代, ${draws}x draws/frame)`,
        shareIdle: '複製分享文字',
        shareCopied: '已複製',
        noRecords: '尚無紀錄',
        leaderboardEmpty: '尚無紀錄',
        historyItem: (_idx, dt, h) => {
            const cls = DEVICE_CLASS_LABEL.zh[h.deviceClass] || DEVICE_CLASS_LABEL.zh[DEVICE_CLASSES.DESKTOP];
            return `${dt.toLocaleString()} | 類型 ${cls} | CPU多核 ${h.cpuMulti?.toLocaleString?.() || '--'} (${h.cpuMultiTier || '--'}) | 單核 ${h.cpuSingle?.toLocaleString?.() || '--'} (${h.cpuSingleTier || '--'}) | GPU ${h.gpuFps ?? '--'} fps (${h.gpuTier || '--'}) | RAM ${h.memGBs ?? '--'} GB/s | I/O ${h.storageWrite ?? '--'}/${h.storageRead ?? '--'} MB/s | Net ${h.netDownMbps ?? '--'} Mbps / ${h.netLatencyMs ?? '--'} ms | 模式 ${h.mode || 'standard'} | 分辨率 ${h.gpuResScale || '-'}x | 核心 ${h.cores || '--'} | GPU型號 ${h.gpuModel || '--'}`;
        }
    },
    en: {
        unknownTier: 'Unknown tier',
        tierPrefix: 'Tier: ',
        waiting: 'Waiting...',
        testing: 'Testing...',
        testAgain: 'Run again',
        testAborted: 'Test aborted',
        testFailedConsole: 'Test failed (see console)',
        testFailed: 'Test failed',
        singleTesting: 'Single-core testing...',
        singleReady: 'Single-Core Quick Test',
        singleFailed: 'Test failed',
        singleWarmup: 'Single-core warmup...',
        singleProgress: (p, total) => `Single-core testing (${p}/${total})...`,
        singleDone: 'Single-core test done',
        cpuWarmup: 'Warming up...',
        cpuProgress: (p, total) => `Testing (${p}/${total})...`,
        cpuDone: (s) => `Test finished (${s.toFixed(1)}s)`,
        memTesting: 'RAM throughput testing...',
        memDone: (s) => `Done (${s}s)`,
        ioNotSupported: 'Browser I/O: IndexedDB not supported, skipped',
        ioWrite: 'Browser I/O writing...',
        ioRead: 'Browser I/O reading...',
        ioDoneCache: 'Browser I/O done (possibly cache, try cold)',
        ioDone: 'Browser I/O done',
        netLatency: 'Network latency testing...',
        netDownload: 'Downloading (Cloudflare 5MB)...',
        netDone: 'Network test done',
        gpuFailCanvas: 'Test failed (Canvas Missing)',
        gpuFailWebGL: 'WebGL init failed or not supported',
        gpuStress: 'Running extreme GPU stress...',
        gpuDone: (iter, draws) => `Test done (load x ${iter} iterations, ${draws}x draws/frame)`,
        shareIdle: 'Copy share text',
        shareCopied: 'Copied',
        noRecords: 'No records yet',
        leaderboardEmpty: 'No records yet',
        historyItem: (_idx, dt, h) => {
            const cls = DEVICE_CLASS_LABEL.en[h.deviceClass] || DEVICE_CLASS_LABEL.en[DEVICE_CLASSES.DESKTOP];
            return `${dt.toLocaleString()} | Device ${cls} | CPU multi ${h.cpuMulti?.toLocaleString?.() || '--'} (${h.cpuMultiTier || '--'}) | Single ${h.cpuSingle?.toLocaleString?.() || '--'} (${h.cpuSingleTier || '--'}) | GPU ${h.gpuFps ?? '--'} fps (${h.gpuTier || '--'}) | RAM ${h.memGBs ?? '--'} GB/s | I/O ${h.storageWrite ?? '--'}/${h.storageRead ?? '--'} MB/s | Net ${h.netDownMbps ?? '--'} Mbps / ${h.netLatencyMs ?? '--'} ms | Mode ${h.mode || 'standard'} | Res ${h.gpuResScale || '-'}x | Cores ${h.cores || '--'} | GPU ${h.gpuModel || '--'}`;
        }
    }
};
const t = (key, ...args) => {
    const val = STRINGS[LANG]?.[key] ?? STRINGS.zh[key] ?? key;
    return typeof val === 'function' ? val(...args) : val;
};
const DEVICE_CLASS_LABEL = {
    zh: {
        [DEVICE_CLASSES.DESKTOP]: '桌機/筆電',
        [DEVICE_CLASSES.ARM_HIGH]: '高階 ARM',
        [DEVICE_CLASSES.MOBILE]: '行動裝置'
    },
    en: {
        [DEVICE_CLASSES.DESKTOP]: 'Desktop/Laptop',
        [DEVICE_CLASSES.ARM_HIGH]: 'High-Perf ARM',
        [DEVICE_CLASSES.MOBILE]: 'Mobile'
    }
};

const MODE_PROFILES = {
    standard: {
        cpuPasses: 3,
        cpuDurationMs: 1500,
        warmupMs: 200,
        gpuLoopIter: GPU_LOOP_ITER,
        gpuDrawCalls: GPU_DRAW_CALLS,
        gpuDurationMs: 15000
    },
    extreme: {
        cpuPasses: 4,
        cpuDurationMs: 2200,
        warmupMs: 300,
        gpuLoopIter: 480,
        gpuDrawCalls: 30,
        gpuDurationMs: 20000
    }
};

// History storage
const HISTORY_KEY = 'perfx_history_v1';
const HISTORY_MAX = 20;
let historyChart = null;
let DETECTED_BROWSER = '';
let DETECTED_CORES = navigator.hardwareConcurrency || null;
let DETECTED_PLATFORM = '';
let DETECTED_GPU_MODEL = '';

function showGpuPreview() {
    const canvasContainer = document.getElementById('canvas-container');
    const heroText = document.getElementById('hero-text-block');
    if (canvasContainer) {
        canvasContainer.classList.remove('hidden', 'opacity-0');
        canvasContainer.classList.add('block', 'opacity-100');
    }
    if (heroText) heroText.classList.add('hidden');
}

function hideGpuPreview() {
    const canvasContainer = document.getElementById('canvas-container');
    const heroText = document.getElementById('hero-text-block');
    if (canvasContainer) {
        canvasContainer.classList.add('hidden', 'opacity-0');
        canvasContainer.classList.remove('block', 'opacity-100');
    }
    if (heroText) heroText.classList.remove('hidden');
}

function getTier(score, type) {
    const tiers = HARDWARE_TIERS[type] || [];
    // Choose the closest tier by absolute difference to reduce jitter between runs
    let match = tiers[tiers.length - 1] || { label: t('unknownTier'), class: "text-gray-400", desc: "", detail: "" };
    let bestDiff = Number.POSITIVE_INFINITY;
    for (const t of tiers) {
        const diff = Math.abs(score - t.score);
        if (diff < bestDiff) {
            bestDiff = diff;
            match = t;
        }
    }
    const baseline = type === 'cpu' ? BASELINE_CPU_SCORE : BASELINE_GPU_SCORE;
    const percentage = ((score / baseline) * 100).toFixed(0);
    return { ...match, percentage };
}

function updateTierText(elementId, tier) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.textContent = `${t('tierPrefix')}${tier.label}`;
}

// Expose to global scope to avoid reference errors inside other closures
window.getTier = getTier;
window.updateTierText = updateTierText;

document.addEventListener('DOMContentLoaded', () => {
    // UI Elements
    const startBtn = document.getElementById('start-btn');
    const dashboard = document.getElementById('dashboard');
    const cpuStatus = document.getElementById('cpu-status');
    const gpuStatus = document.getElementById('gpu-status');
    const cpuBar = document.getElementById('cpu-bar');
    const gpuBar = document.getElementById('gpu-bar');
    const cpuScoreEl = document.getElementById('cpu-score');
    const gpuScoreEl = document.getElementById('gpu-score');
    const canvasContainer = document.getElementById('canvas-container');
    const gpuResSelect = document.getElementById('gpu-res-scale');
    const modeSelect = document.getElementById('mode-select');
    const singleCoreBtn = document.getElementById('single-core-btn');
    const cpuSingleBar = document.getElementById('cpu-single-bar');
    const cpuSingleScoreEl = document.getElementById('cpu-single-score');
    const cpuSingleStatus = document.getElementById('cpu-single-status');
    const cpuSingleTierEl = document.getElementById('cpu-single-tier');
    const memBar = document.getElementById('mem-bar');
    const memScoreEl = document.getElementById('mem-score');
    const memStatus = document.getElementById('mem-status');
    const storageBar = document.getElementById('storage-bar');
    const storageWriteScoreEl = document.getElementById('storage-write-score');
    const storageReadScoreEl = document.getElementById('storage-read-score');
    const storageStatus = document.getElementById('storage-status');
    const netBar = document.getElementById('net-bar');
    const netDownEl = document.getElementById('net-down');
    const netLatencyEl = document.getElementById('net-latency');
    const netJitterEl = document.getElementById('net-jitter');
    const netStatus = document.getElementById('net-status');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const exportHistoryBtn = document.getElementById('export-history-btn');
    const exportPngBtn = document.getElementById('export-png-btn');
    const exportDashboardBtn = document.getElementById('export-dashboard-btn');
    const exportFullPageBtn = document.getElementById('export-fullpage-btn');
    const copyShareBtn = document.getElementById('copy-share-btn');
    const exportDropdownBtn = document.getElementById('export-dropdown-btn');
    const exportDropdown = document.getElementById('export-dropdown');
    const hideExportDropdown = () => {
        if (exportDropdown) exportDropdown.classList.add('hidden');
    };

    // System Info Detection
    detectSystemInfo();
    // Render reference rankings
    renderReferenceRanking();
    // Init history view
    renderHistory();

    // Event Listeners
    startBtn.addEventListener('click', async () => {
        // Reset State
        cpuBar.style.width = '0%';
        gpuBar.style.width = '0%';
        cpuScoreEl.innerHTML = '-- <span class="text-sm text-gray-500 font-normal">pts</span>';
        gpuScoreEl.innerHTML = '-- <span class="text-sm text-gray-500 font-normal">fps</span>';
        if (cpuSingleBar) cpuSingleBar.style.width = '0%';
        if (cpuSingleScoreEl) cpuSingleScoreEl.innerHTML = '-- <span class="text-sm text-gray-500 font-normal">pts</span>';
        if (cpuSingleStatus) cpuSingleStatus.textContent = t('waiting');
        if (cpuSingleTierEl) cpuSingleTierEl.textContent = `${t('tierPrefix')}--`;
        if (memBar) memBar.style.width = '0%';
        if (memScoreEl) memScoreEl.innerHTML = '-- <span class="text-sm text-gray-500 font-normal">GB/s</span>';
        if (memStatus) memStatus.textContent = t('waiting');
        if (storageBar) storageBar.style.width = '0%';
        if (storageWriteScoreEl) storageWriteScoreEl.textContent = '--';
        if (storageReadScoreEl) storageReadScoreEl.textContent = '--';
        if (storageStatus) storageStatus.textContent = t('waiting');
        if (netBar) netBar.style.width = '0%';
        if (netDownEl) netDownEl.textContent = '--';
        if (netLatencyEl) netLatencyEl.textContent = '--';
        if (netJitterEl) netJitterEl.textContent = '--';
        if (netStatus) netStatus.textContent = t('waiting');
        
        cpuStatus.classList.remove('text-green-500', 'text-red-500');
        gpuStatus.classList.remove('text-green-500', 'text-red-500');
        cpuStatus.textContent = t('waiting');
        gpuStatus.textContent = t('waiting');
        if (cpuSingleBar) cpuSingleBar.style.width = '0%';
        if (cpuSingleScoreEl) cpuSingleScoreEl.innerHTML = '-- <span class="text-sm text-gray-500 font-normal">pts</span>';
        if (cpuSingleStatus) cpuSingleStatus.textContent = t('waiting');
        if (cpuSingleTierEl) cpuSingleTierEl.textContent = `${t('tierPrefix')}--`;

        // Update GPU resolution scale from user selection
        if (gpuResSelect) {
            GPU_RES_SCALE = parseFloat(gpuResSelect.value) || 1.33; // default近1440p
        }
        if (modeSelect) {
            CURRENT_MODE = modeSelect.value || 'standard';
        }

        // Reveal Dashboard
        dashboard.classList.remove('opacity-0');
        startBtn.disabled = true;
        startBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> ${t('testing')}`;
        startBtn.classList.remove('bg-red-600', 'bg-secondary', 'bg-primary');
        startBtn.classList.add('bg-primary', 'opacity-75', 'cursor-not-allowed');

        try {
            // 1. Run CPU Test (Multi-core)
            const cpuMultiResult = await runProfessionalCPUBenchmark();

            // 2. Run CPU Single-Core Test
            const cpuSingleResult = await runSingleCoreBenchmark({
                barEl: cpuSingleBar,
                scoreEl: cpuSingleScoreEl,
                statusEl: cpuSingleStatus,
                tierEl: cpuSingleTierEl
            });

            // 3. Run GPU Test (Extreme Load)
            const gpuResult = await runProfessionalGPUBenchmark();

            // 4. Run Memory bandwidth
            const memResult = await runMemoryBandwidthTest({
                barEl: memBar,
                scoreEl: memScoreEl,
                statusEl: memStatus
            });

            // 5. Run Storage I/O
            const storageResult = await runStorageIOTest({
                barEl: storageBar,
                wEl: storageWriteScoreEl,
                rEl: storageReadScoreEl,
                statusEl: storageStatus
            });

            // 6. Run Network Speed
            const netResult = await runNetworkTest({
                barEl: netBar,
                downEl: netDownEl,
                latencyEl: netLatencyEl,
                jitterEl: netJitterEl,
                statusEl: netStatus
            });

            // 7. Save history
            addHistoryEntry({
                timestamp: Date.now(),
                cpuMulti: cpuMultiResult.score,
                cpuMultiTier: cpuMultiResult.tierLabel,
                cpuSingle: cpuSingleResult.score,
                cpuSingleTier: cpuSingleResult.tierLabel,
                gpuFps: gpuResult.fps,
                gpuTierScore: gpuResult.tierScore,
                gpuTier: gpuResult.tierLabel,
                mode: CURRENT_MODE,
                gpuResScale: gpuResult.resScale ?? GPU_RES_SCALE,
                cores: DETECTED_CORES,
                gpuModel: DETECTED_GPU_MODEL,
                browser: DETECTED_BROWSER,
                platform: DETECTED_PLATFORM,
                memGBs: memResult.gbps,
                storageWrite: storageResult.writeMBps,
                storageRead: storageResult.readMBps,
                netDownMbps: netResult.downMbps,
                netLatencyMs: netResult.latencyMs,
                netJitterMs: netResult.jitterMs,
                deviceClass: DEVICE_CLASS
            });
            renderHistory();

            // Finish
            startBtn.innerHTML = `<i class="fa-solid fa-rotate-right mr-2"></i> ${t('testAgain')}`;
            startBtn.classList.remove('bg-primary');
            startBtn.classList.add('bg-secondary');
        } catch (e) {
            console.error(e);
            startBtn.innerHTML = `<i class="fa-solid fa-triangle-exclamation mr-2"></i> ${t('testAborted')}`;
            startBtn.classList.remove('bg-primary', 'bg-secondary');
            startBtn.classList.add('bg-red-600');
            // Try to show error in UI if possible
            if(cpuStatus.textContent.includes('...')) cpuStatus.textContent = t('testFailedConsole');
            if(gpuStatus.textContent.includes('...')) gpuStatus.textContent = t('testFailed');
        } finally {
            startBtn.disabled = false;
            startBtn.classList.remove('opacity-75', 'cursor-not-allowed');
        }
    });

    // Single-core quick test
    if (singleCoreBtn) {
        singleCoreBtn.addEventListener('click', async () => {
            if (gpuResSelect) {
                GPU_RES_SCALE = parseFloat(gpuResSelect.value) || 1.33;
            }
            if (modeSelect) {
                CURRENT_MODE = modeSelect.value || 'standard';
            }
            dashboard.classList.remove('opacity-0');
            singleCoreBtn.disabled = true;
            singleCoreBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> ${t('singleTesting')}`;
            try {
                await runSingleCoreBenchmark({ 
                    barEl: cpuSingleBar, 
                    scoreEl: cpuSingleScoreEl, 
                    statusEl: cpuSingleStatus, 
                    tierEl: cpuSingleTierEl 
                });
                singleCoreBtn.innerHTML = `<i class="fa-solid fa-bolt mr-2"></i> ${t('singleReady')}`;
            } catch (e) {
                console.error(e);
                singleCoreBtn.innerHTML = `<i class="fa-solid fa-triangle-exclamation mr-2"></i> ${t('singleFailed')}`;
            } finally {
                singleCoreBtn.disabled = false;
            }
        });
    }

    // History buttons
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            localStorage.removeItem(HISTORY_KEY);
            renderHistory();
        });
    }
    if (exportHistoryBtn) {
        exportHistoryBtn.addEventListener('click', () => {
            hideExportDropdown();
            const data = loadHistory();
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'perfx-history.json';
            a.click();
            URL.revokeObjectURL(url);
        });
    }
    if (copyShareBtn) {
        copyShareBtn.addEventListener('click', () => {
            const history = loadHistory();
            if (!history.length) return;
            const h = history[0];
            const share = `PerfX Benchmark: CPU ${h.cpuMulti ?? '--'} | GPU ${h.gpuFps ?? '--'}fps | RAM ${h.memGBs ?? '--'}GB/s | Net ${h.netDownMbps ?? '--'}Mbps | https://fcyd5454.github.io/PerfX/`;
            navigator.clipboard.writeText(share).catch(()=>{});
            copyShareBtn.textContent = t('shareCopied');
            setTimeout(() => copyShareBtn.textContent = t('shareIdle'), 1200);
        });
    }
    if (exportDropdownBtn && exportDropdown) {
        const toggle = () => exportDropdown.classList.toggle('hidden');
        exportDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggle();
        });
        document.addEventListener('click', () => exportDropdown.classList.add('hidden'));
        exportDropdown.addEventListener('click', (e) => e.stopPropagation());
    }
    if (exportPngBtn) {
        exportPngBtn.addEventListener('click', () => {
            hideExportDropdown();
            if (!historyChart) return;
            const url = historyChart.toBase64Image('image/png', 1);
            const a = document.createElement('a');
            const ts = new Date().toISOString().replace(/[:.]/g, '-');
            a.href = url;
            a.download = `perfx-history-${ts}.png`;
            a.click();
        });
    }
    if (exportDashboardBtn) {
        exportDashboardBtn.addEventListener('click', () => {
            hideExportDropdown();
            const captureEl = document.getElementById('history-section');
            if (!captureEl || !window.html2canvas) return;
            const ts = new Date().toISOString().replace(/[:.]/g, '-');
            html2canvas(captureEl, {
                backgroundColor: '#0B0F19',
                scale: window.devicePixelRatio > 1 ? 2 : 1.5,
                useCORS: true
            }).then(canvas => {
                canvas.toBlob((blob) => {
                    if (!blob) return;
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `perfx-dashboard-${ts}.png`;
                    a.click();
                    URL.revokeObjectURL(url);
                }, 'image/png', 1);
            });
        });
    }
    if (exportFullPageBtn) {
        exportFullPageBtn.addEventListener('click', () => {
            hideExportDropdown();
            const captureEl = document.getElementById('export-area');
            if (!captureEl || !window.html2canvas) return;
            const ts = new Date().toISOString().replace(/[:.]/g, '-');
            html2canvas(captureEl, {
                backgroundColor: '#0B0F19',
                scale: window.devicePixelRatio > 1 ? 2 : 1.5,
                useCORS: true
            }).then(canvas => {
                canvas.toBlob((blob) => {
                    if (!blob) return;
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `perfx-full-${ts}.png`;
                    a.click();
                    URL.revokeObjectURL(url);
                }, 'image/png', 1);
            });
        });
    }
});

function detectSystemInfo() {
    // Basic detection
    const ua = navigator.userAgent;
    let browser = "Unknown";
    if(ua.indexOf("Chrome") > -1) browser = "Chrome";
    else if(ua.indexOf("Safari") > -1) browser = "Safari";
    else if(ua.indexOf("Firefox") > -1) browser = "Firefox";

    // Use User-Agent Client Hints if available
    if (navigator.userAgentData && navigator.userAgentData.brands) {
        browser = navigator.userAgentData.brands.map(b => b.brand).join(', ');
    }

    DETECTED_BROWSER = browser;
    DETECTED_CORES = navigator.hardwareConcurrency || null;
    DETECTED_PLATFORM = navigator.platform || '';

    document.getElementById('browser-info').textContent = browser;
    document.getElementById('cores-info').textContent = DETECTED_CORES || 'N/A';
    document.getElementById('platform-info').textContent = DETECTED_PLATFORM;

    // Advanced GPU Detection
    detectGPUModel();
    updateDeviceClass();
}

function detectGPUModel() {
    const gpuInfoEl = document.getElementById('gpu-info');
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
                const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                
                // Simple regex to extract meaningful part if wrapped in ANGLE
                const angleMatch = renderer.match(/ANGLE \((.+)\)/);
                let displayRenderer = angleMatch ? angleMatch[1] : renderer;
                
                // Truncate if too long for UI
                if(displayRenderer.length > 30) {
                     const parts = displayRenderer.split(',');
                     if(parts.length > 1) displayRenderer = parts[1].trim(); 
                     else displayRenderer = displayRenderer.substring(0, 30) + '...';
                }

                gpuInfoEl.textContent = displayRenderer;
                gpuInfoEl.title = renderer; 
                DETECTED_GPU_MODEL = displayRenderer;
                updateDeviceClass();
            } else {
                gpuInfoEl.textContent = "Generic WebGL GPU";
            }
        } else {
            gpuInfoEl.textContent = "Not Supported";
        }
    } catch (e) {
        console.warn("GPU Detection failed", e);
        gpuInfoEl.textContent = "Unknown";
    }
}

function updateDeviceClass() {
    const ua = (navigator.userAgent || '').toLowerCase();
    const arch = (navigator.userAgentData && navigator.userAgentData.architecture || '').toLowerCase();
    const isMobileUA = (navigator.userAgentData && navigator.userAgentData.mobile) || /android|iphone|ipad|ipod|mobile/.test(ua);
    const gpu = (DETECTED_GPU_MODEL || '').toLowerCase();
    const isAppleM = gpu.includes('apple m');
    const isSnapdragonX = /snapdragon x/.test(ua) || gpu.includes('snapdragon x');
    const isArmHigh = !isMobileUA && (isAppleM || isSnapdragonX || arch === 'arm');
    DEVICE_CLASS = isMobileUA ? DEVICE_CLASSES.MOBILE : (isArmHigh ? DEVICE_CLASSES.ARM_HIGH : DEVICE_CLASSES.DESKTOP);
}

// ---------------- History helpers ----------------
function loadHistory() {
    try {
        const raw = localStorage.getItem(HISTORY_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
        return [];
    } catch (e) {
        console.warn('Failed to load history', e);
        return [];
    }
}

function saveHistory(data) {
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(data));
    } catch (e) {
        console.warn('Failed to save history', e);
    }
}

function addHistoryEntry(entry) {
    const history = loadHistory();
    history.unshift(entry);
    if (history.length > HISTORY_MAX) history.length = HISTORY_MAX;
    saveHistory(history);
}

function renderHistory() {
    const history = loadHistory();
    const listEl = document.getElementById('history-list');
    const chartEl = document.getElementById('history-chart');
    if (listEl) {
        listEl.innerHTML = '';
        if (history.length === 0) {
            listEl.innerHTML = `<li class="text-gray-500">${t('noRecords')}</li>`;
        } else {
            const textFn = STRINGS[LANG]?.historyItem || STRINGS.zh.historyItem;
            history.forEach((h, idx) => {
                const dt = new Date(h.timestamp);
                const li = document.createElement('li');
                li.innerHTML = `<span class="text-gray-400">${idx + 1}.</span> ${textFn(idx + 1, dt, h)}`;
                listEl.appendChild(li);
            });
        }
    }
    if (chartEl && window.Chart) {
        const labels = history.map(h => new Date(h.timestamp).toLocaleTimeString()).reverse();
        const cpuMultiData = history.map(h => h.cpuMulti || 0).reverse();
        const cpuSingleData = history.map(h => h.cpuSingle || 0).reverse();
        const gpuData = history.map(h => h.gpuFps || 0).reverse();
        const memData = history.map(h => h.memGBs || 0).reverse();
        const ioWriteData = history.map(h => h.storageWrite || 0).reverse();
        const ioReadData = history.map(h => h.storageRead || 0).reverse();
        const netData = history.map(h => h.netDownMbps || 0).reverse();
        const data = {
            labels,
            datasets: [
                { label: 'CPU 多核', data: cpuMultiData, borderColor: '#3B82F6', backgroundColor: '#3B82F6', tension: 0.25 },
                { label: 'CPU 單核', data: cpuSingleData, borderColor: '#10B981', backgroundColor: '#10B981', tension: 0.25 },
                { label: 'GPU FPS', data: gpuData, borderColor: '#F59E0B', backgroundColor: '#F59E0B', tension: 0.25, yAxisID: 'y1' },
                { label: 'RAM GB/s', data: memData, borderColor: '#8B5CF6', backgroundColor: '#8B5CF6', tension: 0.25, yAxisID: 'y2' },
                { label: 'I/O 寫入 MB/s', data: ioWriteData, borderColor: '#EC4899', backgroundColor: '#EC4899', tension: 0.25, yAxisID: 'y2' },
                { label: 'I/O 讀取 MB/s', data: ioReadData, borderColor: '#F97316', backgroundColor: '#F97316', tension: 0.25, yAxisID: 'y2' },
                { label: 'Net Mbps', data: netData, borderColor: '#22D3EE', backgroundColor: '#22D3EE', tension: 0.25, yAxisID: 'y2' }
            ]
        };
        const cfg = {
            type: 'line',
            data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { title: { display: true, text: 'CPU pts' } },
                    y1: { position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'FPS' } },
                    y2: { position: 'left', grid: { drawOnChartArea: false }, title: { display: true, text: 'GB/s / MB/s / Mbps' } }
                },
                plugins: { legend: { labels: { color: '#e5e7eb' } } }
            }
        };
        if (historyChart) {
            historyChart.data = data;
            historyChart.options = cfg.options;
            historyChart.update();
        } else {
            historyChart = new Chart(chartEl, cfg);
        }
    }
    renderLeaderboard(history);
}

function renderLeaderboard(history = []) {
    const cpuEl = document.getElementById('leaderboard-cpu');
    const gpuEl = document.getElementById('leaderboard-gpu');
    const topCpu = [...history].sort((a,b)=> (b.cpuMulti||0) - (a.cpuMulti||0)).slice(0,5);
    const topGpu = [...history].sort((a,b)=> (b.gpuFps||0) - (a.gpuFps||0)).slice(0,5);

    if (cpuEl) {
        cpuEl.innerHTML = '';
        if (topCpu.length === 0) {
            cpuEl.innerHTML = `<li class="text-gray-500">${t('leaderboardEmpty')}</li>`;
        } else {
            topCpu.forEach((h, idx) => {
                const dt = new Date(h.timestamp);
                const li = document.createElement('li');
                const text = LANG === 'en'
                    ? `<span class="text-gray-400">#${idx+1}</span> ${h.cpuMulti?.toLocaleString?.() || '--'} pts (${h.cpuMultiTier || '--'}) | Mode ${h.mode || '-'} | GPU ${h.gpuFps ?? '--'} fps | ${dt.toLocaleString()} | Cores ${h.cores || '--'} | ${h.gpuModel || '--'}`
                    : `<span class="text-gray-400">#${idx+1}</span> ${h.cpuMulti?.toLocaleString?.() || '--'} pts (${h.cpuMultiTier || '--'}) | 模式 ${h.mode || '-'} | GPU ${h.gpuFps ?? '--'} fps | ${dt.toLocaleString()} | 核心 ${h.cores || '--'} | ${h.gpuModel || '--'}`;
                li.innerHTML = text;
                cpuEl.appendChild(li);
            });
        }
    }

    if (gpuEl) {
        gpuEl.innerHTML = '';
        if (topGpu.length === 0) {
            gpuEl.innerHTML = `<li class="text-gray-500">${t('leaderboardEmpty')}</li>`;
        } else {
            topGpu.forEach((h, idx) => {
                const dt = new Date(h.timestamp);
                const li = document.createElement('li');
                const text = LANG === 'en'
                    ? `<span class="text-gray-400">#${idx+1}</span> ${h.gpuFps ?? '--'} fps (${h.gpuTier || '--'}) | CPU multi ${h.cpuMulti?.toLocaleString?.() || '--'} | Net ${h.netDownMbps ?? '--'} Mbps | Mode ${h.mode || '-'} | ${dt.toLocaleString()} | Cores ${h.cores || '--'} | ${h.gpuModel || '--'}`
                    : `<span class="text-gray-400">#${idx+1}</span> ${h.gpuFps ?? '--'} fps (${h.gpuTier || '--'}) | CPU多核 ${h.cpuMulti?.toLocaleString?.() || '--'} | Net ${h.netDownMbps ?? '--'} Mbps | 模式 ${h.mode || '-'} | ${dt.toLocaleString()} | 核心 ${h.cores || '--'} | ${h.gpuModel || '--'}`;
                li.innerHTML = text;
                gpuEl.appendChild(li);
            });
        }
    }
}

// ---------------------------------------------------------
// Reference Ranking from HARDWARE_TIERS (Top 15)
// ---------------------------------------------------------
function renderReferenceRanking() {
    const cpuBody = document.getElementById('cpu-ranking-body');
    const gpuBody = document.getElementById('gpu-ranking-body');
    if (!cpuBody || !gpuBody) return;

    const cpuRows = HARDWARE_TIERS.cpu.slice(0, 15).map((item, idx) => {
        return `<tr class="border-b border-gray-800">
            <td class="py-1 pr-2 text-gray-400">${idx + 1}</td>
            <td class="py-1 pr-2">${item.label}</td>
            <td class="py-1 pr-2 text-gray-300">${item.score.toLocaleString()}</td>
            <td class="py-1 pr-2 text-gray-500">${item.desc || ''}</td>
        </tr>`;
    }).join('');

    const gpuRows = HARDWARE_TIERS.gpu.slice(0, 15).map((item, idx) => {
        return `<tr class="border-b border-gray-800">
            <td class="py-1 pr-2 text-gray-400">${idx + 1}</td>
            <td class="py-1 pr-2">${item.label}</td>
            <td class="py-1 pr-2 text-gray-300">${item.score.toLocaleString()}</td>
            <td class="py-1 pr-2 text-gray-500">${item.desc || ''}</td>
        </tr>`;
    }).join('');

    cpuBody.innerHTML = cpuRows || `<tr><td colspan="4" class="py-2 text-gray-500">無資料</td></tr>`;
    gpuBody.innerHTML = gpuRows || `<tr><td colspan="4" class="py-2 text-gray-500">無資料</td></tr>`;
}

// ---------------------------------------------------------
// Professional CPU Benchmark (Multi-Pass with JIT warmup & best-of passes)
// ---------------------------------------------------------
async function runProfessionalCPUBenchmark() {
    const cpuStatus = document.getElementById('cpu-status');
    const cpuBar = document.getElementById('cpu-bar');
    const cpuScoreEl = document.getElementById('cpu-score');
    const cpuTierEl = document.getElementById('cpu-tier');

    // UI helpers
    const setProgress = (p) => {
        const pct = Math.min(100, Math.max(0, p));
        cpuBar.style.width = `${pct}%`;
    };
    const setStatus = (text, clsAdd, clsRemove) => {
        cpuStatus.textContent = text;
        if (clsAdd) cpuStatus.classList.add(clsAdd);
        if (clsRemove) cpuStatus.classList.remove(clsRemove);
    };

    // Config by mode
    const profile = MODE_PROFILES[CURRENT_MODE] || MODE_PROFILES.standard;
    const durationScale = DEVICE_CLASS === DEVICE_CLASSES.MOBILE ? 1.2 : 1;
    const PASSES = profile.cpuPasses;
    const DURATION_PER_PASS = Math.round(profile.cpuDurationMs * durationScale);
    const WARMUP_MS = profile.warmupMs;
    const TOTAL_DURATION = PASSES * DURATION_PER_PASS;

    // Reset UI
    setProgress(0);
    cpuScoreEl.innerHTML = '-- <span class="text-sm text-gray-500 font-normal">pts</span>';
    setStatus(t('cpuWarmup'), 'text-primary', 'text-green-500');
    if (cpuTierEl) cpuTierEl.textContent = `${t('tierPrefix')}--`;

    // 1) JIT Warmup
    const warmStart = performance.now();
    while (performance.now() - warmStart < WARMUP_MS) {
        // lightweight ops to trigger JIT
        Math.random() * Math.random();
    }

    // 2) Multi-pass sampling (best-of)
    const results = [];
    for (let pass = 1; pass <= PASSES; pass++) {
        setStatus(t('cpuProgress', pass, PASSES), 'text-primary', 'text-green-500');
        let localOps = 0;
        const start = performance.now();
        await new Promise((resolve) => {
            function loop() {
                const now = performance.now();
                if (now - start >= DURATION_PER_PASS) {
                    resolve();
                    return;
                }
                // heavier mix of floating-point ops to avoid trivial optimization
                for (let j = 0; j < 5000; j++) {
                    localOps++;
                    const x = Math.sin(j) * Math.cos(j);
                    const y = Math.sqrt(j * 1000) + (j % 7);
                }
                const totalProgress = ((pass - 1) * DURATION_PER_PASS + (now - start)) / TOTAL_DURATION * 100;
                setProgress(totalProgress);
                requestAnimationFrame(loop);
            }
            loop();
        });
        const duration = performance.now() - start;
        const opsPerSec = localOps / (duration / 1000);
        results.push(opsPerSec);
    }

    // 3) Aggregate (best-of or sustained)
    const aggregateOps = DEVICE_CLASS === DEVICE_CLASSES.MOBILE ? Math.min(...results) : Math.max(...results);

    // 4) Calibration to Cinebench-like scale
    const CALIBRATION_FACTOR = CPU_CALIBRATION_MULTIPLIER; // tune based on known baseline
    const deviceCoeff = DEVICE_CPU_COEFF[DEVICE_CLASS] ?? 1;
    const finalScore = Math.floor(aggregateOps * CALIBRATION_FACTOR * deviceCoeff);

    // 5) Update UI and tier
    cpuScoreEl.innerHTML = `${finalScore.toLocaleString()} <span class="text-sm text-gray-500 font-normal">pts</span>`;
    setStatus(t('cpuDone', TOTAL_DURATION/1000), 'text-green-500', 'text-primary');
    setProgress(100);

    const tier = getTier(finalScore, 'cpu');
    updateTierText('cpu-tier', tier);

    return { score: finalScore, tierLabel: tier.label };
}

// ---------------------------------------------------------
// CPU Single-Core Benchmark (Latency-sensitive workload)
// ---------------------------------------------------------
async function runSingleCoreBenchmark(uiRefs = {}) {
    const { barEl, scoreEl, statusEl, tierEl } = uiRefs;
    const bar = barEl || document.getElementById('cpu-single-bar');
    const score = scoreEl || document.getElementById('cpu-single-score');
    const status = statusEl || document.getElementById('cpu-single-status');
    const tierLabel = tierEl || document.getElementById('cpu-single-tier');

    // UI helpers
    const setProgress = (p) => {
        const pct = Math.min(100, Math.max(0, p));
        if (bar) bar.style.width = `${pct}%`;
    };
    const setStatus = (text, clsAdd, clsRemove) => {
        if (!status) return;
        status.textContent = text;
        if (clsAdd) status.classList.add(clsAdd);
        if (clsRemove) status.classList.remove(clsRemove);
    };

    // Config (fixed 1s per pass, 3 passes)
    const PASSES = 3;
    const durationScale = DEVICE_CLASS === DEVICE_CLASSES.MOBILE ? 1.3 : 1;
    const DURATION_PER_PASS = Math.round(1000 * durationScale); // ms
    const WARMUP_MS = 200;
    const TOTAL_DURATION = PASSES * DURATION_PER_PASS;

    // Reset UI
    setProgress(0);
    if (score) score.innerHTML = '-- pts';
    setStatus(t('singleWarmup'), 'text-primary', 'text-green-500');
    if (tierLabel) tierLabel.textContent = `${t('tierPrefix')}--`;

    // Warmup
    const warmStart = performance.now();
    let temp = 0;
    while (performance.now() - warmStart < WARMUP_MS) {
        temp += Math.random();
    }

    // Single-thread loop on main thread (latency oriented: branches + array access)
    const results = [];
    for (let pass = 1; pass <= PASSES; pass++) {
        setStatus(t('singleProgress', pass, PASSES), 'text-primary', 'text-green-500');
        let localOps = 0;
        const start = performance.now();
        await new Promise((resolve) => {
            const dummyArr = [1, 2, 3, 4, 5, 6, 7, 8];
            function loop() {
                const now = performance.now();
                if (now - start >= DURATION_PER_PASS) {
                    resolve();
                    return;
                }
                for (let j = 0; j < 3000; j++) {
                    localOps++;
                    let x = Math.sin(j * 0.01) + Math.cos(j * 0.02);
                    if (x > 0.5) {
                        x *= 1.1;
                    } else {
                        x *= 0.9;
                    }
                    const idx = (j ^ Math.floor(x * 10)) & 7;
                    x += dummyArr[idx];
                }
                const totalProgress = ((pass - 1) * DURATION_PER_PASS + (now - start)) / TOTAL_DURATION * 100;
                setProgress(totalProgress);
                requestAnimationFrame(loop);
            }
            loop();
        });
        const duration = performance.now() - start;
        const opsPerSec = localOps / (duration / 1000);
        results.push(opsPerSec);
    }

    // Score with single-core calibration
    const aggregateOps = DEVICE_CLASS === DEVICE_CLASSES.MOBILE ? Math.min(...results) : Math.max(...results);
    const coeff = DEVICE_CPU_COEFF[DEVICE_CLASS] ?? 1;
    const finalScore = Math.floor(aggregateOps * CPU_SINGLE_CALIBRATION_MULTIPLIER * coeff);

    if (score) score.innerHTML = `${finalScore.toLocaleString()} pts`;
    setStatus(t('singleDone'), 'text-green-500', 'text-primary');
    setProgress(100);

    // Single-core descriptive tier (closer to real-world single-core)
    let tierText = "入門 / 舊款";
    let tierColor = "text-gray-500";
    if (finalScore >= 2300) { tierText = "旗艦單核"; tierColor = "text-purple-600 font-bold"; }
    else if (finalScore >= 2000) { tierText = "高階單核"; tierColor = "text-red-600 font-bold"; }
    else if (finalScore >= 1700) { tierText = "主流性能"; tierColor = "text-orange-500 font-bold"; }
    else if (finalScore >= 1400) { tierText = "中階"; tierColor = "text-blue-600 font-semibold"; }

    if (tierLabel) {
        tierLabel.innerHTML = `<span class="${tierColor}">${tierText}</span>`;
    }

    return { score: finalScore, tierLabel: tierText };
}

// ---------------------------------------------------------
// Memory Bandwidth Test
// ---------------------------------------------------------
async function runMemoryBandwidthTest(uiRefs = {}) {
    const { barEl, scoreEl, statusEl } = uiRefs;
    const bar = barEl || document.getElementById('mem-bar');
    const score = scoreEl || document.getElementById('mem-score');
    const status = statusEl || document.getElementById('mem-status');

    const setProgress = (p) => {
        const pct = Math.min(100, Math.max(0, p));
        if (bar) bar.style.width = `${pct}%`;
    };
    const setStatus = (text, clsAdd, clsRemove) => {
        if (!status) return;
        status.textContent = text;
        if (clsAdd) status.classList.add(clsAdd);
        if (clsRemove) status.classList.remove(clsRemove);
    };

    const totalBytes = MEM_SIZE_MB * 1024 * 1024;
    const src = new Uint8Array(totalBytes);
    const dst = new Uint8Array(totalBytes);

    // warm fill
    for (let i = 0; i < totalBytes; i += 4096) src[i] = i & 0xff;

    setProgress(0);
    setStatus(t('memTesting'), 'text-primary', 'text-green-500');

    const start = performance.now();
    let copiedBytes = 0;
    while (performance.now() - start < MEM_DURATION_MS) {
        dst.set(src);
        copiedBytes += totalBytes;
        setProgress(((performance.now() - start) / MEM_DURATION_MS) * 100);
    }
    const durationSec = (performance.now() - start) / 1000;
    const gbps = +(copiedBytes / 1e9 / durationSec).toFixed(2);

    if (score) score.innerHTML = `${gbps.toLocaleString()} <span class="text-sm text-gray-500 font-normal">GB/s</span>`;
    setStatus(t('memDone', MEM_DURATION_MS/1000), 'text-green-500', 'text-primary');
    setProgress(100);

    return { gbps };
}

// ---------------------------------------------------------
// Storage I/O Test (IndexedDB)
// ---------------------------------------------------------
function openIOTestDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open('perfx-io', 1);
        req.onerror = () => reject(req.error);
        req.onupgradeneeded = () => {
            const db = req.result;
            if (!db.objectStoreNames.contains('chunks')) db.createObjectStore('chunks');
        };
        req.onsuccess = () => resolve(req.result);
    });
}

async function runStorageIOTest(uiRefs = {}) {
    const { barEl, wEl, rEl, statusEl } = uiRefs;
    const bar = barEl || document.getElementById('storage-bar');
    const wScore = wEl || document.getElementById('storage-write-score');
    const rScore = rEl || document.getElementById('storage-read-score');
    const status = statusEl || document.getElementById('storage-status');

    const setProgress = (p) => {
        const pct = Math.min(100, Math.max(0, p));
        if (bar) bar.style.width = `${pct}%`;
    };
    const setStatus = (text, clsAdd, clsRemove) => {
        if (!status) return;
        status.textContent = text;
        if (clsAdd) status.classList.add(clsAdd);
        if (clsRemove) status.classList.remove(clsRemove);
    };

    const chunkBytes = STORAGE_CHUNK_MB * 1024 * 1024;
    const payload = new Uint8Array(chunkBytes);
    for (let i = 0; i < chunkBytes; i += 4096) payload[i] = (i * 31) & 0xff;

    let db;
    try {
        db = await openIOTestDB();
    } catch (e) {
        setStatus(t('ioNotSupported'), 'text-red-500', 'text-primary');
        if (wScore) wScore.textContent = '--';
        if (rScore) rScore.textContent = '--';
        setProgress(0);
        return { writeMBps: 0, readMBps: 0 };
    }

    setStatus(t('ioWrite'), 'text-primary', 'text-green-500');
    const writeStart = performance.now();
    for (let i = 0; i < STORAGE_ITER; i++) {
        await new Promise((resolve, reject) => {
            const tx = db.transaction('chunks', 'readwrite');
            const store = tx.objectStore('chunks');
            const req = store.put(payload, `chunk-${i}`);
            tx.oncomplete = resolve;
            tx.onerror = () => reject(tx.error);
        });
        setProgress(((i + 0.5) / (STORAGE_ITER * 2)) * 100);
    }
    const writeMs = performance.now() - writeStart;
    const writeMBps = +(((chunkBytes * STORAGE_ITER) / 1_048_576) / (writeMs / 1000)).toFixed(1);
    if (wScore) wScore.textContent = writeMBps.toString();

    setStatus(t('ioRead'), 'text-primary', 'text-green-500');
    const readStart = performance.now();
    for (let i = 0; i < STORAGE_ITER; i++) {
        await new Promise((resolve, reject) => {
            const tx = db.transaction('chunks', 'readonly');
            const store = tx.objectStore('chunks');
            const req = store.get(`chunk-${i}`);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
        setProgress(((STORAGE_ITER + i + 0.5) / (STORAGE_ITER * 2)) * 100);
    }
    const readMs = performance.now() - readStart;
    const readMBps = +(((chunkBytes * STORAGE_ITER) / 1_048_576) / (readMs / 1000)).toFixed(1);
    if (rScore) rScore.textContent = readMBps.toString();

    if (readMBps > 5000) {
        setStatus(t('ioDoneCache'), 'text-amber-400', 'text-primary');
        if (rScore) rScore.textContent = `${readMBps} ⚠`;
    } else {
        setStatus(t('ioDone'), 'text-green-500', 'text-primary');
    }
    setProgress(100);

    return { writeMBps, readMBps };
}

// ---------------------------------------------------------
// Network Speed Test (Cloudflare)
// ---------------------------------------------------------
async function runNetworkTest(uiRefs = {}) {
    const { barEl, downEl, latencyEl, jitterEl, statusEl } = uiRefs;
    const bar = barEl || document.getElementById('net-bar');
    const down = downEl || document.getElementById('net-down');
    const lat = latencyEl || document.getElementById('net-latency');
    const jit = jitterEl || document.getElementById('net-jitter');
    const status = statusEl || document.getElementById('net-status');

    const setProgress = (p) => {
        const pct = Math.min(100, Math.max(0, p));
        if (bar) bar.style.width = `${pct}%`;
    };
    const setStatus = (text, clsAdd, clsRemove) => {
        if (!status) return;
        status.textContent = text;
        if (clsAdd) status.classList.add(clsAdd);
        if (clsRemove) status.classList.remove(clsRemove);
    };

    const rtts = [];
    setProgress(0);
    setStatus(t('netLatency'), 'text-primary', 'text-green-500');
    for (let i = 0; i < NET_PINGS; i++) {
        const controller = new AbortController();
        const tStart = performance.now();
        try {
            const timer = setTimeout(() => controller.abort(), NET_TIMEOUT_MS);
            await fetch(`${NET_LATENCY_URL}&t=${Date.now()}&i=${i}`, { method: 'GET', cache: 'no-store', signal: controller.signal });
            clearTimeout(timer);
            const rtt = performance.now() - tStart;
            rtts.push(rtt);
        } catch (e) {
            // ignore failed ping
        }
        setProgress((i + 1) / (NET_PINGS + 1) * 40); // 40% allocated to latency
    }
    let latencyMs = 0;
    let jitterMs = 0;
    if (rtts.length > 0) {
        const avg = rtts.reduce((a, b) => a + b, 0) / rtts.length;
        const variance = rtts.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / rtts.length;
        latencyMs = +avg.toFixed(1);
        jitterMs = +Math.sqrt(variance).toFixed(1);
    }
    if (lat) lat.textContent = latencyMs ? latencyMs.toString() : '--';
    if (jit) jit.textContent = jitterMs ? jitterMs.toString() : '--';

    // Download test
    setStatus(t('netDownload'), 'text-primary', 'text-green-500');
    let downMbps = 0;
    try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), NET_TIMEOUT_MS * 2);
        const tStart = performance.now();
        const resp = await fetch(`${NET_DOWNLOAD_URL}&t=${Date.now()}`, { method: 'GET', cache: 'no-store', signal: controller.signal });
        clearTimeout(timer);
        const buf = await resp.arrayBuffer();
        const tEnd = performance.now();
        const bytes = buf.byteLength || 0;
        const secs = (tEnd - tStart) / 1000;
        if (secs > 0 && bytes > 0) {
            downMbps = +(((bytes * 8) / 1_000_000) / secs).toFixed(1);
        }
    } catch (e) {
        downMbps = 0;
    }
    if (down) down.textContent = downMbps ? downMbps.toString() : '--';
    setProgress(100);
    setStatus(t('netDone'), 'text-green-500', 'text-primary');

    return { latencyMs, jitterMs, downMbps };
}
// ---------------------------------------------------------
// Professional GPU Benchmark (Extreme Fragment Load)
// ---------------------------------------------------------
async function runProfessionalGPUBenchmark() {
    return new Promise((resolve, reject) => {
        const gpuStatus = document.getElementById('gpu-status');
        const canvasContainer = document.getElementById('canvas-container');
        const gpuScoreEl = document.getElementById('gpu-score');
        const gpuBar = document.getElementById('gpu-bar');
        const profile = MODE_PROFILES[CURRENT_MODE] || MODE_PROFILES.standard;
        const isMobileDevice = DEVICE_CLASS === DEVICE_CLASSES.MOBILE;
        const isArmHigh = DEVICE_CLASS === DEVICE_CLASSES.ARM_HIGH;
        const gpuLoopIterBase = profile.gpuLoopIter;
        const gpuDrawCallsBase = profile.gpuDrawCalls;
        const gpuDurationMs = profile.gpuDurationMs;
        const gpuLoopIter = Math.max(80, Math.round(gpuLoopIterBase * (isMobileDevice ? MOBILE_GPU_LOOP_FACTOR : 1)));
        const gpuDrawCalls = Math.max(8, Math.round(gpuDrawCallsBase * (isMobileDevice ? MOBILE_GPU_DRAW_FACTOR : 1)));
        const appliedResScale = isMobileDevice ? Math.min(MOBILE_GPU_SCALE, GPU_RES_SCALE) : GPU_RES_SCALE;
        const gpuPenalty = DEVICE_GPU_PENALTY[DEVICE_CLASS] ?? 1;

        gpuStatus.textContent = t('gpuStress');
        gpuStatus.classList.add('text-secondary');
        showGpuPreview();

        const canvas = document.getElementById('gl-canvas');
        if(!canvas) { 
            gpuStatus.textContent = t('gpuFailCanvas');
            gpuStatus.classList.remove('text-secondary');
            gpuStatus.classList.add('text-red-500');
            gpuScoreEl.innerHTML = `0 <span class="text-sm text-gray-500 font-normal">fps</span>`;
            updateTierText('gpu-tier', { label: '--' });
            hideGpuPreview();
            resolve({ fps: 0, tierScore: 0, tierLabel: '--', resScale: appliedResScale });
            return; 
        }

        // Use strict device pixel ratio and upscale to force more fragments
        const dpr = window.devicePixelRatio || 1;
        const resScale = appliedResScale; // standardized workload (adaptive)
        canvas.width = canvas.clientWidth * dpr * resScale;
        canvas.height = canvas.clientHeight * dpr * resScale;

        let gl = canvas.getContext('webgl', { 
            antialias: false, // Disable AA to save CPU, focus on GPU shader calc
            powerPreference: "high-performance",
            preserveDrawingBuffer: false 
        }) || canvas.getContext('experimental-webgl');

        if (!gl) {
             gpuScoreEl.innerHTML = `0 <span class="text-sm text-gray-500 font-normal">fps</span>`;
             gpuStatus.textContent = t('gpuFailWebGL');
             gpuStatus.classList.remove('text-secondary');
             gpuStatus.classList.add('text-red-500');
             updateTierText('gpu-tier', { label: '--' });
             hideGpuPreview();
             resolve({ fps: 0, tierScore: 0, tierLabel: '--', resScale: resScale });
             return;
        }

        // Optional GPU timer query extension for uncapped GPU time measurement
        const timerExt = gl.getExtension('EXT_disjoint_timer_query');

        const vertices = new Float32Array([
            -1.0, -1.0, 
             1.0, -1.0, 
            -1.0,  1.0, 
            -1.0,  1.0, 
             1.0, -1.0, 
             1.0,  1.0
        ]);

        const vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const vertCode = `
            attribute vec2 a_position;
            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `;

        // Extreme Fragment Shader: standardized heavy loop
        const fragCode = `
            precision mediump float;
            uniform float u_time;
            uniform vec2 u_resolution;

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
                
                vec3 col = vec3(0.0);
                
                // EXTREME loop count to force GPU usage even on small canvases
                for(float i = 0.0; i < ${gpuLoopIter}.0; i++) {
                    float s = sin(u_time * 0.2 + i * 0.05);
                    float c = cos(u_time * 0.1 + i * 0.05);
                    p = mat2(c, -s, s, c) * p;
                    p = abs(p) - 0.5; // Spread out pattern
                    
                    float dist = length(p * p);
                    // Add complexity
                    col += vec3(0.002 / dist) * (sin(u_time + i*0.1) * 0.5 + 0.5);
                }

                gl_FragColor = vec4(col * vec3(0.8, 0.2, 0.5), 1.0);
            }
        `;

        const createShader = (type, source) => {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error(gl.getShaderInfoLog(shader));
                return null;
            }
            return shader;
        };

        const prog = gl.createProgram();
        gl.attachShader(prog, createShader(gl.VERTEX_SHADER, vertCode));
        gl.attachShader(prog, createShader(gl.FRAGMENT_SHADER, fragCode));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        const locPos = gl.getAttribLocation(prog, "a_position");
        gl.enableVertexAttribArray(locPos);
        gl.vertexAttribPointer(locPos, 2, gl.FLOAT, false, 0, 0);

        const locTime = gl.getUniformLocation(prog, "u_time");
        const locRes = gl.getUniformLocation(prog, "u_resolution");

        let frameCount = 0;
        const startTime = performance.now();
        let running = true;

        // GPU timer query accumulation
        let gpuTimeTotalNs = 0;
        let gpuTimeSamples = 0;
        let pendingQuery = null;

        function render() {
            if (!running) return;

            const time = (performance.now() - startTime) / 1000;
            gl.uniform1f(locTime, time);
            gl.uniform2f(locRes, canvas.width, canvas.height);
            gl.viewport(0, 0, canvas.width, canvas.height);

            // Begin timer query if available and none pending
            if (timerExt && !pendingQuery) {
                pendingQuery = timerExt.createQueryEXT();
                timerExt.beginQueryEXT(timerExt.TIME_ELAPSED_EXT, pendingQuery);
            }

            for(let k = 0; k < gpuDrawCalls; k++) {
                gl.drawArrays(gl.TRIANGLES, 0, 6);
            }

            // End and collect timer query
            if (timerExt && pendingQuery) {
                timerExt.endQueryEXT(timerExt.TIME_ELAPSED_EXT);
                // Poll availability
                const available = timerExt.getQueryObjectEXT(pendingQuery, timerExt.QUERY_RESULT_AVAILABLE_EXT);
                const disjoint = gl.getParameter(timerExt.GPU_DISJOINT_EXT);
                if (available && !disjoint) {
                    const timeNs = timerExt.getQueryObjectEXT(pendingQuery, timerExt.QUERY_RESULT_EXT);
                    if (timeNs && timeNs > 0) {
                        gpuTimeTotalNs += timeNs;
                        gpuTimeSamples += 1;
                    }
                    timerExt.deleteQueryEXT(pendingQuery);
                    pendingQuery = null;
                }
            }

            frameCount++;
            requestAnimationFrame(render);
        }

        render();

        setTimeout(() => {
            running = false;
            const duration = (performance.now() - startTime) / 1000;
            const fps = Math.round(frameCount / duration);

            // If timer query is available, compute uncapped GPU fps by GPU time
            let gpuFpsEffective = fps;
            if (timerExt && gpuTimeSamples > 0) {
                const avgGpuMs = (gpuTimeTotalNs / gpuTimeSamples) / 1e6; // ns -> ms
                if (avgGpuMs > 0) {
                    gpuFpsEffective = Math.round(1000 / avgGpuMs);
                }
            }
            
            gpuScoreEl.innerHTML = `${gpuFpsEffective} <span class="text-sm text-gray-500 font-normal">fps</span>`;
            gpuBar.style.width = '100%';
            gpuStatus.textContent = t('gpuDone', gpuLoopIter, gpuDrawCalls);
            gpuStatus.classList.remove('text-secondary');
            gpuStatus.classList.add('text-green-500');

            // Normalize GPU tier to align high-end cards (simple scaling with effective fps)
            const gpuTierScoreRaw = Math.floor(gpuFpsEffective * 400); // 100fps -> 40,000 (maps to flagship tiers)
            const gpuTierScore = Math.floor(gpuTierScoreRaw * gpuPenalty);
            const tier = getTier(gpuTierScore, 'gpu');
            updateTierText('gpu-tier', tier);
            
            hideGpuPreview();
            resolve({ fps: gpuFpsEffective, tierScore: gpuTierScore, tierLabel: tier.label, resScale: resScale });
        }, gpuDurationMs);
    });
}
