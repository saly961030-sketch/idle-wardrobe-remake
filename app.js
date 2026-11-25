// RE:CLOTHES 拾衣研究所 - 多國語言介面字典與核心邏輯 (i18n & App Logic)

const I18N_DICT = {
  "zh-TW": {
    lang_name: "繁體中文",
    header_brand: "拾衣研究所",
    header_sub: "商業設計系 · 自然科學與人工智慧 期末專題",
    nav_cases: "🏛️ 首頁精選案例牆",
    nav_try: "✨ 專屬提案試用區",
    nav_data: "⚙️ 資料管理 (CRUD)",
    btn_new_case: "新增案例",
    hero_badge: "CD000B 第 8 組：吳佳晏 · 劉是曼 · 洪巧恩 · 楊承歡",
    hero_title: '閒置單品改造與風格穿搭重構<br><span class="text-gradient-emerald">原單品 ➔ 改造／搭配方向</span>',
    hero_desc: "每件塵封在衣櫃深處的衣服，都藏著煥然一新的可能性。我們結合商業設計思維與 AI Prompt 靈感生成，提供從「痛點深度拆解」、「穿搭平衡建議」到「免縫紉／微工藝結構改造」的完整指南。",
    stat_cases: "目前收錄",
    stat_cases_sub: "經典單品改造庫",
    stat_detail: "案例詳情頁",
    stat_detail_sub: "4 大核心維度",
    stat_try: "試用專區",
    stat_try_sub: "即時 AI 專屬提案",
    stat_crud: "資料管理",
    stat_crud_sub: "全功能本地持久化",
    wall_badge: "FEATURED CASES WALL",
    wall_title: "首頁精選案例牆",
    wall_desc: "每張卡片展示「原單品 → 改造／搭配方向」，點擊即可探索該單品之痛點剖析、搭配與結構構想。",
    btn_add_custom: "+ 新增自訂案例",
    btn_reset: "🔄 恢復預設範例",
    btn_export: "💾 匯出 JSON",
    btn_import: "📂 匯入備份",
    cat_all: "全部單品",
    cat_shirt: "襯衫",
    cat_denim: "丹寧/牛仔",
    cat_tee: "T恤/衛衣",
    cat_blazer: "西裝外套",
    cat_dress: "洋裝/裙裝",
    cat_other: "其他配件",
    diff_all: "⚡ 全部難度",
    diff_easy: "新手友好 (免針線)",
    diff_medium: "微工藝 (基礎手縫)",
    diff_hard: "裁縫進階 (結構重塑)",
    search_placeholder: "搜尋單品、痛點或風格...",
    card_before: "原單品 (Before)",
    card_after: "改造／搭配方向 (After)",
    card_target_style: "目標風格",
    card_pain_label: "關鍵痛點剖析：",
    card_view_btn: "查看案例詳情",
    empty_title: "查無符合條件的單品案例",
    empty_desc: "請嘗試變更篩選類別或搜尋關鍵字，或親自新增一筆案例！",
    try_badge: "✨ 互動試用體驗區",
    try_title: "輸入你的閒置單品，立即獲得專屬改造提案",
    try_desc: "衣櫃裡也有不知如何搭配或版型不適的舊衣嗎？填寫你的衣物條件，系統將結合痛點拆解邏輯為你產生專屬搭配、結構微改指南與生圖 Prompt！",
    try_quick_samples: "快速帶入範例：",
    sample_btn_0: "👔 過長格子襯衫",
    sample_btn_1: "👗 緊身碎花洋裝",
    sample_btn_2: "👕 鬆垮荷葉邊白T",
    sample_btn_3: "🧥 寬厚墊肩西裝外套",
    try_label_name: "1. 你的閒置單品名稱",
    try_placeholder_name: "例如：買太大的厚重落肩格子襯衫、穿不下的牛仔褲",
    try_label_mat: "2. 單品材質與顏色",
    try_placeholder_mat: "例如：純棉深藍格紋、重磅挺版丹寧、薄雪紡",
    try_label_pain: "3. 目前最主要的痛點或閒置原因",
    try_placeholder_pain: "例如：下擺過長遮住腿部顯得五五身、領口洗鬆下垂、風格過於正式平常無法穿出門...",
    try_label_style: "4. 期望改造目標或風格氛圍",
    try_placeholder_style: "例如：日系 CityBoy、俐落短版極簡、甜酷工裝風",
    try_label_mode: "5. 偏好的處置形式",
    try_mode_style: "👗 零剪裁 · 純穿搭層次搭配 (不破壞衣物)",
    try_mode_craft: "✂️ 微工藝 · 局部剪裁與抽繩改造 (初學者友善)",
    try_mode_tailor: "🪡 結構翻新 · 拆解重構成配件或兩件式 (進階手工)",
    try_submit_btn: "✨ 立即產生 AI 改造與搭配提案",
    try_loading_title: "AI 正在深度透視單品結構與痛點...",
    try_loading_sub: "正在生成風格對比方向、穿搭公式與專屬生圖 Prompt",
    try_res_completed: "✨ AI 靈感提案生成完成",
    try_res_inferred: "類別推論：",
    try_res_diff: "難易度：",
    try_save_btn: "📥 將此提案儲存至上方案例牆",
    try_res_before: "【原單品】",
    try_res_after: "【重構／改造方向】",
    try_res_mat: "材質/顏色：",
    try_res_pain: "痛點：",
    try_res_target: "鎖定風格：",
    try_res_mode: "形式：",
    try_res_style_plan: "👗 3 招立即見效的實穿搭配方案：",
    try_res_remake_plan: "✂️ 結構改造實作引導：",
    try_res_prompt_title: "🎨 專屬 AI 生圖 Prompt (可一鍵複製至 Midjourney)：",
    modal_before_badge: "原單品狀態",
    modal_after_badge: "改造重構方向 ➔",
    modal_pain_title: "一、 單品痛點分析 (Pain Points Breakdown)",
    modal_style_title: "二、 穿搭搭配建議 (Restyling & Layering Guide)",
    modal_remake_title: "三、 結構改造構想 (Upcycling & Reconstruction Plan)",
    modal_prompt_title: "四、 當時使用的 AI Prompt 紀錄 (Prompt Archive)",
    modal_tools_label: "所需工具與配件：",
    modal_protip_label: "設計師小撇步：",
    modal_copy_btn: "一鍵複製 Prompt",
    modal_copied_btn: "✓ 已複製到剪貼簿！",
    modal_close_btn: "關閉視窗",
    modal_edit_btn: "編輯此案例",
    modal_delete_btn: "刪除案例",
    footer_p1: "RE:CLOTHES 拾衣研究所 · 115 學年度第 1 學期 自然科學與人工智慧 期末專題",
    footer_p2: "商業設計系 CD000B 第 8 組：吳佳晏（11533216） · 劉是曼 · 洪巧恩 · 楊承歡",
    footer_p3: "作品支援多國語言切換 (繁中/EN/日語) · 完整 CRUD 資料管理 · 本地 LocalStorage 持久化 · 部署於 Vercel"
  },
  "en": {
    lang_name: "English",
    header_brand: "Remake Studio",
    header_sub: "Dept. of Commercial Design · AI Agent Vibe Coding Final Project",
    nav_cases: "🏛️ Featured Cases",
    nav_try: "✨ AI Remake Studio",
    nav_data: "⚙️ Data Management",
    btn_new_case: "New Case",
    hero_badge: "Group 8: Chia-Yen Wu · Shih-Man Liu · Qiao-En Hong · Cheng-Huan Yang",
    hero_title: 'Idle Garment Restyle & Upcycling<br><span class="text-gradient-emerald">Original Item ➔ Restyle / Remake</span>',
    hero_desc: "Every idle piece in your closet holds endless potential. Combining commercial design aesthetics and AI prompt generation, we provide comprehensive guides from pain point diagnosis and styling balance to no-sew upcycling.",
    stat_cases: "Archived",
    stat_cases_sub: "Curated Remake Library",
    stat_detail: "Case Details",
    stat_detail_sub: "4 Core Dimensions",
    stat_try: "AI Studio",
    stat_try_sub: "Custom Instant Proposals",
    stat_crud: "Data CRUD",
    stat_crud_sub: "Full LocalStorage Sync",
    wall_badge: "FEATURED CASES WALL",
    wall_title: "Featured Cases Wall",
    wall_desc: "Each card shows 'Original Item → Restyle / Remake Direction'. Click to view pain point analysis, styling, and structural blueprints.",
    btn_add_custom: "+ Add Custom Case",
    btn_reset: "🔄 Reset to Presets",
    btn_export: "💾 Export JSON",
    btn_import: "📂 Import Backup",
    cat_all: "All Items",
    cat_shirt: "Shirts",
    cat_denim: "Denim",
    cat_tee: "T-Shirts",
    cat_blazer: "Blazers",
    cat_dress: "Dresses",
    cat_other: "Accessories",
    diff_all: "⚡ All Difficulties",
    diff_easy: "Beginner (No-sew)",
    diff_medium: "Light Craft (Stitch)",
    diff_hard: "Advanced (Tailoring)",
    search_placeholder: "Search items, pain points, or styles...",
    card_before: "Original Item (Before)",
    card_after: "Restyle / Remake (After)",
    card_target_style: "Target Style",
    card_pain_label: "Key Pain Point:",
    card_view_btn: "View Case Details",
    empty_title: "No matching cases found",
    empty_desc: "Try changing filter category or search keyword, or create a new case!",
    try_badge: "✨ Interactive AI Studio",
    try_title: "Input Your Idle Garment to Generate Custom AI Proposals",
    try_desc: "Got clothes you don't wear? Fill in your garment conditions, and the AI will generate bespoke styling rules, upcycling guides, and visual generation prompts!",
    try_quick_samples: "Quick Samples:",
    sample_btn_0: "👔 Oversized Plaid",
    sample_btn_1: "👗 Floral Maxi",
    sample_btn_2: "👕 Bacon-Neck Tee",
    sample_btn_3: "🧥 Padded Blazer",
    try_label_name: "1. Your Idle Garment Name",
    try_placeholder_name: "e.g. Heavy oversized flannel shirt, unwearable vintage jeans",
    try_label_mat: "2. Fabric Material & Color",
    try_placeholder_mat: "e.g. Heavyweight navy cotton plaid, stiff denim, lightweight chiffon",
    try_label_pain: "3. Main Pain Point or Reason It's Idle",
    try_placeholder_pain: "e.g. Too long and ruins height proportions; stretched neckline; overly formal...",
    try_label_style: "4. Desired Style / Vibe Goal",
    try_placeholder_style: "e.g. Japanese Cityboy, Clean Minimalist Crop, Y2K Chic",
    try_label_mode: "5. Preferred Upcycling Mode",
    try_mode_style: "👗 Zero Cut · Pure Layering & Restyling",
    try_mode_craft: "✂️ Light Craft · Cropping & Drawstrings (Beginner)",
    try_mode_tailor: "🪡 Restructure · Deconstruct into Co-ords or Accessories",
    try_submit_btn: "✨ Generate AI Proposal Now",
    try_loading_title: "AI is diagnosing garment structure & pain points...",
    try_loading_sub: "Generating style direction, layering formula, and image prompt...",
    try_res_completed: "✨ AI Proposal Generated Successfully",
    try_res_inferred: "Category:",
    try_res_diff: "Difficulty:",
    try_save_btn: "📥 Save Proposal to Cases Wall",
    try_res_before: "【Original Item】",
    try_res_after: "【Restyle / Remake Direction】",
    try_res_mat: "Fabric/Color:",
    try_res_pain: "Pain Point:",
    try_res_target: "Target Style:",
    try_res_mode: "Mode:",
    try_res_style_plan: "👗 3 Quick-Win Layering Formulas:",
    try_res_remake_plan: "✂️ Step-by-Step Upcycling Blueprint:",
    try_res_prompt_title: "🎨 Bespoke AI Image Generation Prompt (Copy to Midjourney):",
    modal_before_badge: "Original State",
    modal_after_badge: "Restyle / Remake ➔",
    modal_pain_title: "1. Garment Pain Point Breakdown",
    modal_style_title: "2. Restyling & Layering Guide",
    modal_remake_title: "3. Upcycling & Reconstruction Plan",
    modal_prompt_title: "4. AI Prompt Archive",
    modal_tools_label: "Required Tools & Materials:",
    modal_protip_label: "Designer Pro Tip:",
    modal_copy_btn: "Copy Prompt",
    modal_copied_btn: "✓ Copied to clipboard!",
    modal_close_btn: "Close",
    modal_edit_btn: "Edit Case",
    modal_delete_btn: "Delete Case",
    footer_p1: "RE:CLOTHES Studio · Natural Science & Artificial Intelligence Final Project",
    footer_p2: "Dept. of Commercial Design Group 8: Chia-Yen Wu (11533216), Shih-Man Liu, Qiao-En Hong, Cheng-Huan Yang",
    footer_p3: "Features Multilingual Switcher (ZH-TW / EN / JA) · Full CRUD · LocalStorage Sync · Deployed on Vercel"
  },
  "ja": {
    lang_name: "日本語",
    header_brand: "拾衣研究所",
    header_sub: "商業デザイン学科 · 自然科学と人工知能 期末プロジェクト",
    nav_cases: "🏛️ 厳選事例ウォール",
    nav_try: "✨ AIリメイク体験",
    nav_data: "⚙️ データ管理 (CRUD)",
    btn_new_case: "事例を追加",
    hero_badge: "第8グループ：呉佳晏 · 劉是曼 · 洪巧恩 · 楊承歡",
    hero_title: '眠っている衣服の改造とスタイリング再構築<br><span class="text-gradient-emerald">元の服 ➔ 改造・着こなしの方向性</span>',
    hero_desc: "クローゼットに眠る服には新しい可能性が秘められています。商業デザインの視点とAIプロンプトを活用し、悩みの分析からスタイリング、簡単リメイクまで完全ガイドします。",
    stat_cases: "収録事例",
    stat_cases_sub: "定番アイテム改造庫",
    stat_detail: "詳細ページ",
    stat_detail_sub: "4大コア次元",
    stat_try: "体験エリア",
    stat_try_sub: "即時AI専用提案",
    stat_crud: "データ管理",
    stat_crud_sub: "ローカル永続化",
    wall_badge: "FEATURED CASES WALL",
    wall_title: "厳選事例ウォール",
    wall_desc: "各カードは「元のアイテム → 改造／スタイリングの方向性」を表示。クリックしてお悩み分析や改造手順を確認できます。",
    btn_add_custom: "+ 新しい事例を追加",
    btn_reset: "🔄 デフォルトに戻す",
    btn_export: "💾 JSON書き出し",
    btn_import: "📂 バックアップ読み込み",
    cat_all: "すべて",
    cat_shirt: "シャツ",
    cat_denim: "デニム",
    cat_tee: "Tシャツ・スウェット",
    cat_blazer: "ジャケット",
    cat_dress: "ワンピース・スカート",
    cat_other: "小物・その他",
    diff_all: "⚡ 全難易度",
    diff_easy: "初心者向け (針・糸不要)",
    diff_medium: "ミニクラフト (手縫い)",
    diff_hard: "上級リメイク (構造再構築)",
    search_placeholder: "アイテム、悩み、スタイルを検索...",
    card_before: "元の服 (Before)",
    card_after: "改造・着こなし方向 (After)",
    card_target_style: "目指すスタイル",
    card_pain_label: "主な悩み分析：",
    card_view_btn: "詳細を見る",
    empty_title: "該当する事例が見つかりません",
    empty_desc: "フィルター条件を変更するか、新しい事例を追加してください！",
    try_badge: "✨ インタラクティブ体験",
    try_title: "眠っている服を入力して、専用のAIリメイク提案を作成",
    try_desc: "クローゼットに着ていない服はありませんか？アイテムの情報を入力すると、AIがスタイリング提案やリメイク手順、画像生成プロンプトを作成します！",
    try_quick_samples: "サンプル入力：",
    sample_btn_0: "👔 大きめチェックシャツ",
    sample_btn_1: "👗 花柄ワンピース",
    sample_btn_2: "👕 首元が伸びた白T",
    sample_btn_3: "🧥 肩パッドジャケット",
    try_label_name: "1. アイテム名",
    try_placeholder_name: "例：大きすぎるチェックシャツ、履かなくなったジーンズ",
    try_label_mat: "2. 素材・色",
    try_placeholder_mat: "例：厚手コットンネイビー、しっかりデニム、シフォン",
    try_label_pain: "3. 一番のお悩み・放置理由",
    try_placeholder_pain: "例：着丈が長くて足が短く見える、襟元がヨレて部屋着に見える...",
    try_label_style: "4. 目指すスタイルや雰囲気",
    try_placeholder_style: "例：シティボーイ風、ミニマルモード、甘辛カジュアル",
    try_label_mode: "5. 処置の形式",
    try_mode_style: "👗 カットなし · 純粋な着回し・スタイリング",
    try_mode_craft: "✂️ ミニクラフト · 部分カット・紐通し (初心者)",
    try_mode_tailor: "🪡 構造再構築 · 分解して小物や2ピースに (上級)",
    try_submit_btn: "✨ AIリメイク提案を生成",
    try_loading_title: "AIが衣服の構造とお悩みを分析中...",
    try_loading_sub: "スタイリング処方箋と画像生成プロンプトを作成しています...",
    try_res_completed: "✨ AI提案の生成が完了しました",
    try_res_inferred: "分類推論：",
    try_res_diff: "難易度：",
    try_save_btn: "📥 この提案を事例ウォールに保存",
    try_res_before: "【元の服】",
    try_res_after: "【改造・着こなし方向】",
    try_res_mat: "素材/色：",
    try_res_pain: "お悩み：",
    try_res_target: "目標スタイル：",
    try_res_mode: "形式：",
    try_res_style_plan: "👗 すぐ試せる着回しテクニック3選：",
    try_res_remake_plan: "✂️ リメイク手順ステップガイド：",
    try_res_prompt_title: "🎨 専用AI画像生成プロンプト (Midjourney用)：",
    modal_before_badge: "元の状態",
    modal_after_badge: "改造・再構築 ➔",
    modal_pain_title: "一、 お悩み・問題点の徹底分析",
    modal_style_title: "二、 スタイリング・着回し提案",
    modal_remake_title: "三、 リメイク・構造改造プラン",
    modal_prompt_title: "四、 使用したAIプロンプト記録",
    modal_tools_label: "必要な道具・材料：",
    modal_protip_label: "デザイナーのワンポイント：",
    modal_copy_btn: "プロンプトをコピー",
    modal_copied_btn: "✓ クリップボードにコピーしました！",
    modal_close_btn: "閉じる",
    modal_edit_btn: "この事例を編集",
    modal_delete_btn: "事例を削除",
    footer_p1: "RE:CLOTHES 拾衣研究所 · 自然科学と人工知能 期末プロジェクト",
    footer_p2: "商業デザイン学科 CD000B 第8グループ：呉佳晏（11533216） · 劉是曼 · 洪巧恩 · 楊承歡",
    footer_p3: "多言語切替対応 (繁中/EN/日語) · 完全CRUD管理 · LocalStorage永続化 · Vercel公開中"
  }
};

// 狀態管理 (State Management)
const STORAGE_KEY = "reclothes_cases_data_v2";
const LANG_STORAGE_KEY = "reclothes_lang_preference";

let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || "zh-TW";

let appState = {
  cases: [],
  selectedCase: null,
  activeCategory: "all",
  activeDifficulty: "all",
  searchQuery: "",
  editingCaseId: null
};

// 取得當前語系文字輔助函式
function t(key) {
  const dict = I18N_DICT[currentLang] || I18N_DICT["zh-TW"];
  return dict[key] || I18N_DICT["zh-TW"][key] || key;
}

// 取得案例的多語系資料
function getCaseData(item) {
  if (item.translations && item.translations[currentLang]) {
    return {
      ...item,
      ...item.translations[currentLang]
    };
  }
  // 若為自訂案例或無翻譯，退回預設欄位
  return {
    ...item,
    categoryName: item.categoryName || item.category,
    difficultyName: item.difficultyName || item.difficulty
  };
}

// 切換語系函式 (Language Switcher)
function switchLanguage(lang) {
  if (!I18N_DICT[lang]) return;
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);

  // 更新介面靜態文字
  updateStaticTexts();

  // 重新渲染案例卡片與計數
  renderCasesGrid();
  updateStatsCounter();

  // 若詳情 Modal 正在開啟，即時更新其內容
  if (appState.selectedCase) {
    openDetailModal(appState.selectedCase.id);
  }

  showToast(`Language switched to: ${I18N_DICT[lang].lang_name}`, "info");
}

// 更新靜態文字
function updateStaticTexts() {
  // 選單與標頭
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = t(key);
      } else {
        el.innerHTML = t(key);
      }
    }
  });

  // 更新語系下拉選單狀態
  const langSelect = document.getElementById("language-select");
  if (langSelect) langSelect.value = currentLang;
}

// 載入資料
function loadInitialData() {
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      appState.cases = JSON.parse(cached);
    } else {
      appState.cases = JSON.parse(JSON.stringify(PRESET_CASES));
      saveToStorage();
    }
  } catch (e) {
    console.error("無法自 LocalStorage 載入資料", e);
    appState.cases = JSON.parse(JSON.stringify(PRESET_CASES));
  }
}

function saveToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.cases));
    updateStatsCounter();
  } catch (e) {
    console.error("儲存失敗", e);
  }
}

function updateStatsCounter() {
  const countEl = document.getElementById("stat-case-count");
  if (countEl) {
    countEl.textContent = `${appState.cases.length}`;
  }
}

// 渲染案例網格
function renderCasesGrid() {
  const container = document.getElementById("cases-grid");
  const emptyState = document.getElementById("cases-empty-state");
  if (!container) return;

  const filtered = appState.cases.filter(rawItem => {
    const item = getCaseData(rawItem);
    const matchCategory = appState.activeCategory === "all" || rawItem.category === appState.activeCategory;
    const matchDifficulty = appState.activeDifficulty === "all" || rawItem.difficulty === appState.activeDifficulty;
    
    const q = appState.searchQuery.trim().toLowerCase();
    const matchQuery = !q || 
      item.originalItem.toLowerCase().includes(q) ||
      item.remakeDirection.toLowerCase().includes(q) ||
      (item.categoryName && item.categoryName.toLowerCase().includes(q)) ||
      (item.painPoints && item.painPoints.some(p => p.toLowerCase().includes(q)));

    return matchCategory && matchDifficulty && matchQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  container.innerHTML = filtered.map(rawItem => {
    const item = getCaseData(rawItem);

    let diffBadgeColor = "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
    if (rawItem.difficulty === "微工藝") {
      diffBadgeColor = "bg-amber-500/15 text-amber-300 border-amber-500/30";
    } else if (rawItem.difficulty === "裁縫進階") {
      diffBadgeColor = "bg-rose-500/15 text-rose-300 border-rose-500/30";
    }

    const firstPain = item.painPoints && item.painPoints[0] ? item.painPoints[0] : "";

    return `
      <div class="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
        <div class="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none"></div>

        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
              🏷️ ${escapeHtml(item.categoryName || rawItem.category)}
            </span>
            <div class="flex items-center space-x-2">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${diffBadgeColor}">
                ${escapeHtml(item.difficultyName || rawItem.difficulty)}
              </span>
              <span class="text-xs text-neutral-400">⏱️ ${escapeHtml(item.estimatedTime || "30m")}</span>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/80 mb-4">
            <div class="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
              <span class="w-2 h-2 rounded-full bg-rose-400"></span>
              <span>${t('card_before')}</span>
            </div>
            <h3 class="text-base font-bold text-neutral-200 line-clamp-1 mb-2">
              ${escapeHtml(item.originalItem)}
            </h3>

            <div class="flex items-center space-x-2 my-2 py-1 px-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400">
              <svg class="w-4 h-4 shrink-0 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
              <span class="text-xs font-bold tracking-wide">${t('card_after')}</span>
            </div>

            <div class="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-2 mb-1">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>${t('card_target_style')}</span>
            </div>
            <h4 class="text-lg font-bold text-emerald-300 line-clamp-1">
              ${escapeHtml(item.remakeDirection)}
            </h4>
          </div>

          <div class="mb-4">
            <div class="text-xs font-medium text-neutral-400 mb-1 flex items-center">
              <span class="mr-1">⚡</span> ${t('card_pain_label')}
            </div>
            <p class="text-xs text-neutral-300 bg-neutral-900/50 p-2.5 rounded-lg border border-neutral-800 line-clamp-2">
              ${escapeHtml(firstPain)}
            </p>
          </div>
        </div>

        <div class="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
          <button onclick="openDetailModal('${rawItem.id}')" 
            class="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-neutral-950 border border-emerald-500/30 transition-all flex items-center space-x-1.5 shadow-sm">
            <span>${t('card_view_btn')}</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <div class="flex items-center space-x-1">
            <button onclick="openEditModal('${rawItem.id}')" title="Edit" 
              class="p-2 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </button>
            <button onclick="confirmDeleteCase('${rawItem.id}')" title="Delete" 
              class="p-2 rounded-lg text-neutral-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// 案例詳情頁 Modal
function openDetailModal(caseId) {
  const rawItem = appState.cases.find(c => c.id === caseId);
  if (!rawItem) return;

  appState.selectedCase = rawItem;
  const item = getCaseData(rawItem);
  const modal = document.getElementById("detail-modal");
  const container = document.getElementById("detail-modal-body");
  if (!modal || !container) return;

  const painPointsHtml = (item.painPoints || []).map((p, idx) => `
    <li class="flex items-start space-x-2.5 text-sm text-neutral-300">
      <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 text-xs shrink-0 mt-0.5 font-bold">
        ${idx + 1}
      </span>
      <span>${escapeHtml(p)}</span>
    </li>
  `).join("");

  const stylingHtml = (item.stylingSuggestions || []).map((s, idx) => `
    <div class="p-3.5 rounded-xl bg-neutral-900/70 border border-neutral-800 text-sm text-neutral-200">
      ${escapeHtml(s)}
    </div>
  `).join("");

  const remakeSteps = item.remakeConcept && item.remakeConcept.steps 
    ? item.remakeConcept.steps.map((st, idx) => `
        <div class="flex items-start space-x-3 text-sm text-neutral-200">
          <span class="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0">
            0${idx + 1}
          </span>
          <div class="leading-relaxed">${escapeHtml(st)}</div>
        </div>
      `).join("")
    : "<p class='text-neutral-400 text-sm'>No steps specified</p>";

  const toolsHtml = item.remakeConcept && item.remakeConcept.tools
    ? item.remakeConcept.tools.map(t => `
        <span class="px-2.5 py-1 rounded-md text-xs bg-neutral-800 text-neutral-300 border border-neutral-700">
          ✂️ ${escapeHtml(t)}
        </span>
      `).join("")
    : "<span class='text-neutral-400 text-xs'>Standard needle & thread</span>";

  const promptEn = item.promptRecord ? item.promptRecord.promptEn : "";
  const promptZh = item.promptRecord ? item.promptRecord.promptZh : "";
  const promptEngine = item.promptRecord ? item.promptRecord.engine : "Midjourney v6.0";
  const promptPurpose = item.promptRecord ? item.promptRecord.purpose : "";

  container.innerHTML = `
    <div class="mb-6 pb-6 border-b border-neutral-800">
      <div class="flex flex-wrap items-center gap-2 mb-3">
        <span class="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
          🏷️ ${escapeHtml(item.categoryName || rawItem.category)}
        </span>
        <span class="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
          ⚡ ${escapeHtml(item.difficultyName || rawItem.difficulty)}
        </span>
        <span class="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-400 border border-neutral-700">
          ⏱️ ${escapeHtml(item.estimatedTime || "30m")}
        </span>
      </div>

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="text-xs uppercase font-bold tracking-wider text-rose-400 flex items-center space-x-1.5 mb-1">
            <span>${t('modal_before_badge')}</span>
          </div>
          <h2 class="text-xl md:text-2xl font-extrabold text-neutral-100 mb-2">
            ${escapeHtml(item.originalItem)}
          </h2>
        </div>

        <div class="flex items-center text-emerald-400 font-bold text-sm bg-emerald-950/40 border border-emerald-500/30 px-4 py-2 rounded-xl">
          <span class="mr-2">${t('modal_after_badge')}</span>
          <span class="text-base text-emerald-300">${escapeHtml(item.remakeDirection)}</span>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <!-- 痛點 -->
      <div class="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800">
        <h3 class="text-base font-bold text-neutral-100 flex items-center mb-3">
          <span class="w-2.5 h-2.5 rounded-full bg-rose-500 mr-2.5"></span>
          ${t('modal_pain_title')}
        </h3>
        <ul class="space-y-2.5">
          ${painPointsHtml}
        </ul>
      </div>

      <!-- 搭配 -->
      <div class="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800">
        <h3 class="text-base font-bold text-neutral-100 flex items-center mb-3">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-400 mr-2.5"></span>
          ${t('modal_style_title')}
        </h3>
        <div class="space-y-2.5">
          ${stylingHtml}
        </div>
      </div>

      <!-- 結構改造 -->
      <div class="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800">
        <h3 class="text-base font-bold text-neutral-100 flex items-center mb-3">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-2.5"></span>
          ${t('modal_remake_title')}
        </h3>
        
        <div class="mb-4">
          <div class="text-xs font-semibold text-neutral-400 mb-2">${t('modal_tools_label')}</div>
          <div class="flex flex-wrap gap-2">
            ${toolsHtml}
          </div>
        </div>

        <div class="space-y-3 mb-4">
          ${remakeSteps}
        </div>

        ${item.remakeConcept && item.remakeConcept.proTip ? `
          <div class="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 flex items-start space-x-2">
            <span class="shrink-0">💡</span>
            <span><strong>${t('modal_protip_label')}</strong>${escapeHtml(item.remakeConcept.proTip)}</span>
          </div>
        ` : ""}
      </div>

      <!-- Prompt 紀錄 -->
      <div class="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-base font-bold text-neutral-100 flex items-center">
            <span class="w-2.5 h-2.5 rounded-full bg-indigo-400 mr-2.5"></span>
            ${t('modal_prompt_title')}
          </h3>
          <span class="px-2.5 py-0.5 rounded text-xs bg-indigo-950/60 text-indigo-300 border border-indigo-500/30">
            ${escapeHtml(promptEngine)}
          </span>
        </div>

        ${promptPurpose ? `
          <p class="text-xs text-neutral-400 mb-3 leading-relaxed">
            ${escapeHtml(promptPurpose)}
          </p>
        ` : ""}

        <div class="relative bg-neutral-950 p-4 rounded-xl border border-neutral-800 mb-3 font-mono text-xs text-emerald-300 leading-relaxed break-words">
          <div class="text-neutral-500 text-[10px] uppercase font-sans mb-1 font-bold">Generation Prompt:</div>
          <div id="modal-prompt-text">${escapeHtml(promptEn)}</div>
          <button onclick="copyPromptToClipboard('modal-prompt-text', this)" 
            class="mt-3 px-3 py-1.5 rounded-lg text-xs font-sans font-semibold bg-neutral-800 hover:bg-emerald-500 hover:text-neutral-950 text-neutral-200 transition-colors flex items-center space-x-1 border border-neutral-700">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            <span>${t('modal_copy_btn')}</span>
          </button>
        </div>

        ${promptZh ? `
          <div class="bg-neutral-950/50 p-3.5 rounded-xl border border-neutral-800/80 text-xs text-neutral-300">
            <p class="leading-relaxed">${escapeHtml(promptZh)}</p>
          </div>
        ` : ""}
      </div>
    </div>

    <div class="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <button onclick="openEditModal('${rawItem.id}'); closeDetailModal();" 
          class="px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-colors flex items-center space-x-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
          </svg>
          <span>${t('modal_edit_btn')}</span>
        </button>
        <button onclick="confirmDeleteCase('${rawItem.id}'); closeDetailModal();" 
          class="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition-colors flex items-center space-x-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
          <span>${t('modal_delete_btn')}</span>
        </button>
      </div>

      <button onclick="closeDetailModal()" 
        class="px-5 py-2 rounded-xl text-xs font-bold bg-neutral-700 hover:bg-neutral-600 text-white transition-colors">
        ${t('modal_close_btn')}
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeDetailModal() {
  const modal = document.getElementById("detail-modal");
  if (modal) modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

// 試用區範例帶入
function loadSampleInput(index) {
  const list = SAMPLE_INPUTS[currentLang] || SAMPLE_INPUTS["zh-TW"];
  const sample = list[index];
  if (!sample) return;

  document.getElementById("try-name").value = sample.name;
  document.getElementById("try-material").value = sample.materialColor;
  document.getElementById("try-pain").value = sample.painPoint;
  document.getElementById("try-style").value = sample.targetStyle;

  showToast(`Loaded sample: ${sample.name}`, "info");
}

// 智慧提案引擎 (Try-it-yourself AI Generator)
let latestGeneratedProposal = null;

function generateAIProposal(e) {
  if (e) e.preventDefault();

  const name = document.getElementById("try-name").value.trim();
  const material = document.getElementById("try-material").value.trim() || (currentLang === "en" ? "Cotton / Wool blend" : currentLang === "ja" ? "混紡素材" : "混紡材質 / 常見色系");
  const pain = document.getElementById("try-pain").value.trim();
  const targetStyle = document.getElementById("try-style").value.trim() || (currentLang === "en" ? "Modern Minimalist" : currentLang === "ja" ? "モダンミニマル" : "現代簡約質感");
  const mode = document.getElementById("try-mode").value;

  if (!name || !pain) {
    showToast(currentLang === "en" ? "Please enter at least garment name and pain point!" : currentLang === "ja" ? "アイテム名とお悩みを入力してください！" : "請至少填寫「單品名稱」與「目前最大的痛點」！", "error");
    return;
  }

  const resultArea = document.getElementById("try-result-area");
  const loadingArea = document.getElementById("try-loading-area");
  const outputContent = document.getElementById("try-output-content");

  if (loadingArea) loadingArea.classList.remove("hidden");
  if (resultArea) resultArea.classList.add("hidden");

  let inferredCategory = "其他";
  let inferredCatName = t('cat_other');
  if (name.includes("襯衫") || name.toLowerCase().includes("shirt")) {
    inferredCategory = "襯衫";
    inferredCatName = t('cat_shirt');
  } else if (name.includes("牛仔") || name.includes("丹寧") || name.toLowerCase().includes("jean") || name.toLowerCase().includes("denim")) {
    inferredCategory = "丹寧/牛仔";
    inferredCatName = t('cat_denim');
  } else if (name.includes("T") || name.includes("衛衣") || name.toLowerCase().includes("tee") || name.toLowerCase().includes("sweat")) {
    inferredCategory = "T恤/衛衣";
    inferredCatName = t('cat_tee');
  } else if (name.includes("西裝") || name.includes("外套") || name.toLowerCase().includes("blazer") || name.toLowerCase().includes("suit")) {
    inferredCategory = "西裝外套";
    inferredCatName = t('cat_blazer');
  } else if (name.includes("裙") || name.includes("洋裝") || name.toLowerCase().includes("dress") || name.toLowerCase().includes("skirt")) {
    inferredCategory = "洋裝/裙裝";
    inferredCatName = t('cat_dress');
  }

  setTimeout(() => {
    if (loadingArea) loadingArea.classList.add("hidden");

    let remakeTitle = "";
    let diff = "新手友好";
    let estTime = "30m";

    if (mode === "穿搭搭配") {
      remakeTitle = currentLang === "en" ? `${targetStyle} Layered Silhouette Restyle` : currentLang === "ja" ? `${targetStyle} レイヤードスタイリング再構築` : `${targetStyle.split("/")[0]} 俐落層次穿搭重構`;
      diff = "新手友好";
      estTime = "15m";
    } else if (mode === "結構微改") {
      remakeTitle = currentLang === "en" ? `Cropped Boxy Cut × Adjustable Drawstring Hem` : currentLang === "ja" ? `ボクシーカット × ドローストリング裾リメイク` : `短版箱型 (Boxy) 剪裁 × 抽繩微工藝重塑`;
      diff = "微工藝";
      estTime = "45m";
    } else {
      remakeTitle = currentLang === "en" ? `2-Piece Co-ord Restructure & Accessories Set` : currentLang === "ja" ? `2ピースセパレート＆小物セット構造改造` : `結構翻新：多功能兩件式立體重構方案`;
      diff = "裁縫進階";
      estTime = "90m";
    }

    const enPrompt = `Fashion catalog photography, upcycling concept: an old ${name} (${material}) creatively transformed into ${remakeTitle}, styled in ${targetStyle}, high-end editorial composition, modern aesthetic, soft daylight --ar 4:5 --v 6.0`;

    const stylingSugg = currentLang === "en" ? [
      `【Balance Proportions】：Apply the "short top, long bottom" rule; pair with tailored high-waisted trousers to shift focus away from "${pain}".`,
      `【Accent Accessories】：Add architectural silver jewelry and a clean shoulder bag to reinforce the "${targetStyle}" vibe.`,
      `【Seasonal Layering】：Layer with a tonal fitted base layer to break visual monotony.`
    ] : currentLang === "ja" ? [
      `【黄金比バランス】：ハイウエストボトムスを合わせ、「上短下長」のメリハリをつけて「${pain}」の視線を逃がします。`,
      `【小物のアクセント】：構築的なシルバージュエリーやショルダーバッグで「${targetStyle}」の雰囲気を強調。`,
      `【レイヤード術】：同系色のインナーを首元や袖口から覗かせ、こなれた立体感をプラス。`
    ] : [
      `【視覺比例平衡】：運用「上短下長」原則，下著搭配垂墜高腰褲或硬挺西裝褲，轉移對「${pain}」的視覺焦點。`,
      `【配件層次點綴】：挑選金屬鍊飾或俐落肩背包，在視覺中心營造焦點，完美融入「${targetStyle}」的氛圍。`,
      `【季節疊穿公式】：內搭同色系高領或外搭結構感背心，打破單品原本的單調感。`
    ];

    const stepsList = currentLang === "en" ? [
      `【Mark & Measure】：Put on the garment and chalk the golden crop line addressing "${pain}", reserving 2cm hem allowance.`,
      `【Cut Cleanly】：Cut along marked line with fabric shears keeping edges smooth.`,
      `【Finish Hem】：Fold raw edges inward twice and double-stitch to prevent fraying.`
    ] : currentLang === "ja" ? [
      `【採寸とマーキング】：着用して「${pain}」を解消する黄金カット位置をチャコペンで引き、縫い代2cmを残します。`,
      `【カット】：布切りバサミで裁断面をまっすぐ均一に裁断します。`,
      `【三つ折りステッチ】：端を2回折り込んでステッチをかけ、ほつれを防止します。`
    ] : [
      `【畫線標記】：穿上衣物，標記改善「${pain}」的黃金剪裁線，預留 2 公分折邊。`,
      `【平整裁切】：使用布剪沿著預留線條平順剪開，保持切口平整。`,
      `【包邊防脫線】：向內折疊並以雙排平針壓線固定邊緣。`
    ];

    const proposalObj = {
      id: "gen-" + Date.now(),
      category: inferredCategory,
      difficulty: diff,
      estimatedTime: estTime,
      originalItem: name,
      remakeDirection: remakeTitle,
      categoryName: inferredCatName,
      difficultyName: diff,
      painPoints: [
        `${pain}`,
        `${material}`
      ],
      stylingSuggestions: stylingSugg,
      remakeConcept: {
        tools: currentLang === "en" ? ["Fabric shears", "Needles & thread", "Measuring tape"] : currentLang === "ja" ? ["布切りバサミ", "針と糸", "メジャー"] : ["布剪", "手縫針線", "捲尺"],
        steps: stepsList,
        proTip: currentLang === "en" ? "Steam press the garment flat before cutting to prevent measuring errors!" : currentLang === "ja" ? "ハサミを入れる前にアイロンでシワを伸ばすと失敗しません！" : "動手裁剪前先徹底燙平，標記尺寸時才不會產生視覺誤差！"
      },
      promptRecord: {
        promptEn: enPrompt,
        promptZh: enPrompt,
        engine: "Midjourney v6.0",
        purpose: "AI Tailored Proposal"
      }
    };

    latestGeneratedProposal = proposalObj;

    outputContent.innerHTML = `
      <div class="glass-card p-6 rounded-2xl border-emerald-500/30 glow-tag">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-neutral-800">
          <div class="flex items-center space-x-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ${t('try_res_completed')}
            </span>
            <span class="px-2.5 py-1 rounded-md text-xs bg-neutral-800 text-neutral-300 border border-neutral-700">
              ${t('try_res_inferred')} ${escapeHtml(inferredCatName)}
            </span>
            <span class="px-2.5 py-1 rounded-md text-xs bg-neutral-800 text-amber-300 border border-neutral-700">
              ${t('try_res_diff')} ${escapeHtml(diff)} (${estTime})
            </span>
          </div>

          <button onclick="saveGeneratedProposalToWall()" 
            class="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-all shadow-lg flex items-center space-x-1.5 transform hover:scale-105">
            <span>${t('try_save_btn')}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
            <div class="text-xs text-neutral-400 font-bold mb-1">${t('try_res_before')}</div>
            <div class="text-base font-bold text-neutral-200">${escapeHtml(name)}</div>
            <div class="text-xs text-neutral-400 mt-1">${t('try_res_mat')} ${escapeHtml(material)}</div>
            <div class="text-xs text-rose-400/90 mt-2 bg-rose-950/20 p-2 rounded border border-rose-900/30">
              ${t('try_res_pain')} ${escapeHtml(pain)}
            </div>
          </div>

          <div class="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
            <div class="text-xs text-emerald-400 font-bold mb-1">${t('try_res_after')}</div>
            <div class="text-lg font-bold text-emerald-300">${escapeHtml(remakeTitle)}</div>
            <div class="text-xs text-neutral-300 mt-1">${t('try_res_target')} ${escapeHtml(targetStyle)}</div>
            <div class="text-xs text-emerald-400 mt-2 bg-emerald-900/20 p-2 rounded border border-emerald-500/20">
              ${t('try_res_mode')} ${escapeHtml(mode)}
            </div>
          </div>
        </div>

        <div class="space-y-4 mb-6">
          <div class="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <div class="text-xs font-bold text-amber-400 mb-2 flex items-center">
              <span class="mr-1.5">👗</span> ${t('try_res_style_plan')}
            </div>
            <ul class="text-xs text-neutral-300 space-y-1.5 pl-2">
              ${stylingSugg.map(s => `<li>• ${escapeHtml(s)}</li>`).join("")}
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <div class="text-xs font-bold text-emerald-400 mb-2 flex items-center">
              <span class="mr-1.5">✂️</span> ${t('try_res_remake_plan')}
            </div>
            <ul class="text-xs text-neutral-300 space-y-1.5 pl-2">
              ${stepsList.map(st => `<li>• ${escapeHtml(st)}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
          <div class="flex items-center justify-between mb-2">
            <div class="text-xs font-bold text-indigo-400 flex items-center">
              <span class="mr-1.5">🎨</span> ${t('try_res_prompt_title')}
            </div>
            <button onclick="copyPromptToClipboard('generated-prompt-text', this)" 
              class="px-2.5 py-1 rounded text-xs bg-neutral-800 hover:bg-emerald-500 hover:text-neutral-950 text-neutral-200 transition-colors">
              ${t('modal_copy_btn')}
            </button>
          </div>
          <p id="generated-prompt-text" class="font-mono text-xs text-emerald-300/90 leading-relaxed bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
            ${escapeHtml(enPrompt)}
          </p>
        </div>
      </div>
    `;

    if (resultArea) {
      resultArea.classList.remove("hidden");
      resultArea.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    showToast("AI proposal generated successfully!", "success");
  }, 800);
}

function saveGeneratedProposalToWall() {
  if (!latestGeneratedProposal) return;

  appState.cases.unshift(latestGeneratedProposal);
  saveToStorage();
  renderCasesGrid();

  const wallEl = document.getElementById("cases-section");
  if (wallEl) {
    wallEl.scrollIntoView({ behavior: "smooth" });
  }

  showToast(currentLang === "en" ? "Proposal published to Cases Wall!" : currentLang === "ja" ? "事例ウォールに提案を保存しました！" : "提案已成功發布至案例牆！", "success");
}

// 複製 Prompt
function copyPromptToClipboard(elementId, btnElement) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.textContent.trim();

  navigator.clipboard.writeText(text).then(() => {
    if (btnElement) {
      const originalHtml = btnElement.innerHTML;
      btnElement.innerHTML = `<span>${t('modal_copied_btn')}</span>`;
      btnElement.classList.add("bg-emerald-500", "text-neutral-950");
      setTimeout(() => {
        btnElement.innerHTML = originalHtml;
        btnElement.classList.remove("bg-emerald-500", "text-neutral-950");
      }, 2000);
    }
    showToast(t('modal_copied_btn'), "success");
  }).catch(() => {
    showToast("Copy failed", "error");
  });
}

// CRUD 彈窗與操作
function openCreateModal() {
  appState.editingCaseId = null;
  const modal = document.getElementById("edit-modal");
  const title = document.getElementById("edit-modal-title");
  const form = document.getElementById("edit-case-form");
  if (!modal || !form) return;

  if (title) title.textContent = "✨ " + t('btn_new_case');
  form.reset();

  document.getElementById("form-category").value = "襯衫";
  document.getElementById("form-difficulty").value = "微工藝";
  document.getElementById("form-time").value = "40 分鐘";

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function openEditModal(caseId) {
  const rawItem = appState.cases.find(c => c.id === caseId);
  if (!rawItem) return;

  appState.editingCaseId = caseId;
  const item = getCaseData(rawItem);
  const modal = document.getElementById("edit-modal");
  const title = document.getElementById("edit-modal-title");
  if (!modal) return;

  if (title) title.textContent = "✏️ " + t('modal_edit_btn');

  document.getElementById("form-original").value = item.originalItem || "";
  document.getElementById("form-direction").value = item.remakeDirection || "";
  document.getElementById("form-category").value = rawItem.category || "襯衫";
  document.getElementById("form-difficulty").value = rawItem.difficulty || "新手友好";
  document.getElementById("form-time").value = item.estimatedTime || "30 分鐘";
  document.getElementById("form-pain").value = item.painPoints ? item.painPoints.join("\n") : "";
  document.getElementById("form-styling").value = item.stylingSuggestions ? item.stylingSuggestions.join("\n") : "";
  document.getElementById("form-tools").value = item.remakeConcept && item.remakeConcept.tools ? item.remakeConcept.tools.join("、") : "";
  document.getElementById("form-steps").value = item.remakeConcept && item.remakeConcept.steps ? item.remakeConcept.steps.join("\n") : "";
  document.getElementById("form-prompt-en").value = item.promptRecord ? item.promptRecord.promptEn : "";
  document.getElementById("form-prompt-zh").value = item.promptRecord ? item.promptRecord.promptZh : "";

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeEditModal() {
  const modal = document.getElementById("edit-modal");
  if (modal) modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

function handleCaseFormSubmit(e) {
  e.preventDefault();

  const originalItem = document.getElementById("form-original").value.trim();
  const remakeDirection = document.getElementById("form-direction").value.trim();
  const category = document.getElementById("form-category").value;
  const difficulty = document.getElementById("form-difficulty").value;
  const estimatedTime = document.getElementById("form-time").value.trim();
  
  const painText = document.getElementById("form-pain").value.trim();
  const stylingText = document.getElementById("form-styling").value.trim();
  const toolsText = document.getElementById("form-tools").value.trim();
  const stepsText = document.getElementById("form-steps").value.trim();
  
  const promptEn = document.getElementById("form-prompt-en").value.trim();
  const promptZh = document.getElementById("form-prompt-zh").value.trim();

  if (!originalItem || !remakeDirection) {
    showToast("Please fill in item name and remake direction!", "error");
    return;
  }

  const painPoints = painText ? painText.split("\n").filter(Boolean) : ["Pain points analysis"];
  const stylingSuggestions = stylingText ? stylingText.split("\n").filter(Boolean) : ["Styling suggestions"];
  const tools = toolsText ? toolsText.split(/[、,，\s]+/).filter(Boolean) : ["Scissors", "Thread"];
  const steps = stepsText ? stepsText.split("\n").filter(Boolean) : ["Mark and cut", "Finish edges"];

  const caseData = {
    originalItem,
    remakeDirection,
    category,
    difficulty,
    estimatedTime: estimatedTime || "30m",
    painPoints,
    stylingSuggestions,
    remakeConcept: {
      tools,
      steps,
      proTip: "Measure twice, cut once!"
    },
    promptRecord: {
      promptEn: promptEn || `Editorial photo of upcycled ${originalItem} into ${remakeDirection} --v 6.0`,
      promptZh: promptZh || promptEn,
      engine: "Midjourney v6.0",
      purpose: "Custom proposal visual"
    }
  };

  if (appState.editingCaseId) {
    const index = appState.cases.findIndex(c => c.id === appState.editingCaseId);
    if (index !== -1) {
      caseData.id = appState.editingCaseId;
      appState.cases[index] = caseData;
      showToast("Case updated!", "success");
    }
  } else {
    caseData.id = "custom-" + Date.now();
    appState.cases.unshift(caseData);
    showToast("New case created!", "success");
  }

  saveToStorage();
  renderCasesGrid();
  closeEditModal();
}

function confirmDeleteCase(caseId) {
  const item = appState.cases.find(c => c.id === caseId);
  if (!item) return;

  const ok = confirm(`Delete "${item.originalItem}"?`);
  if (!ok) return;

  appState.cases = appState.cases.filter(c => c.id !== caseId);
  saveToStorage();
  renderCasesGrid();
  showToast("Case deleted", "info");
}

function resetToPresetCases() {
  const ok = confirm("Reset all cases to curated presets?");
  if (!ok) return;

  appState.cases = JSON.parse(JSON.stringify(PRESET_CASES));
  saveToStorage();
  renderCasesGrid();
  showToast("Reset to curated library!", "success");
}

function exportCasesJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState.cases, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", `reclothes_backup_${Date.now()}.json`);
  dlAnchorElem.click();
  showToast("Exported JSON successfully!", "success");
}

function importCasesJSON() {
  const fileInput = document.getElementById("import-file-input");
  if (fileInput) fileInput.click();
}

function handleFileImport(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const imported = JSON.parse(evt.target.result);
      if (Array.isArray(imported)) {
        appState.cases = imported;
        saveToStorage();
        renderCasesGrid();
        showToast(`Imported ${imported.length} cases!`, "success");
      }
    } catch {
      showToast("Invalid JSON file", "error");
    }
  };
  reader.readAsText(file);
}

// Toast
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  let bgBorder = "bg-neutral-900/95 border-neutral-700 text-neutral-200";
  if (type === "success") bgBorder = "bg-emerald-950/95 border-emerald-500/50 text-emerald-200";
  if (type === "error") bgBorder = "bg-rose-950/95 border-rose-500/50 text-rose-200";
  if (type === "info") bgBorder = "bg-blue-950/95 border-blue-500/50 text-blue-200";

  toast.className = `p-3.5 rounded-xl border text-xs font-semibold shadow-2xl flex items-center space-x-2 transition-all transform duration-300 opacity-0 translate-y-2 ${bgBorder}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("opacity-0", "translate-y-2");
    toast.classList.add("opacity-100", "translate-y-0");
  });

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function escapeHtml(str) {
  if (typeof str !== "string") return str || "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 初始化
document.addEventListener("DOMContentLoaded", () => {
  loadInitialData();
  updateStaticTexts();
  renderCasesGrid();
  updateStatsCounter();

  // 語系切換器監聽
  const langSelect = document.getElementById("language-select");
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", (e) => {
      switchLanguage(e.target.value);
    });
  }

  // 分類篩選
  const catButtons = document.querySelectorAll(".category-pill");
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => {
        b.classList.remove("bg-emerald-500", "text-neutral-950", "font-bold");
        b.classList.add("bg-neutral-800", "text-neutral-300");
      });
      btn.classList.add("bg-emerald-500", "text-neutral-950", "font-bold");
      btn.classList.remove("bg-neutral-800", "text-neutral-300");

      appState.activeCategory = btn.dataset.category || "all";
      renderCasesGrid();
    });
  });

  // 難易度
  const diffSelect = document.getElementById("filter-difficulty");
  if (diffSelect) {
    diffSelect.addEventListener("change", (e) => {
      appState.activeDifficulty = e.target.value;
      renderCasesGrid();
    });
  }

  // 搜尋框
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value;
      renderCasesGrid();
    });
  }

  // 表單監聽
  const caseForm = document.getElementById("edit-case-form");
  if (caseForm) caseForm.addEventListener("submit", handleCaseFormSubmit);

  const tryForm = document.getElementById("try-generator-form");
  if (tryForm) tryForm.addEventListener("submit", generateAIProposal);

  const fileInput = document.getElementById("import-file-input");
  if (fileInput) fileInput.addEventListener("change", handleFileImport);
});
