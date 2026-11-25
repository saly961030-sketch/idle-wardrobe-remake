// RE:CLOTHES 拾衣研究所 - 多國語言介面字典與核心邏輯 (i18n & App Logic with AI Image Simulations)

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
    hero_title: '閒置單品與配飾改造提案<br><span class="text-gradient-emerald">原單品 ➔ AI 視覺模擬 ➔ 結構重構</span>',
    hero_desc: "每件塵封在衣櫃深處的衣服與老舊配飾，都藏著煥然一新的可能性。我們結合商業設計思維與 AI Prompt 視覺模擬，提供從「痛點深度拆解」、「穿搭平衡建議」到「免縫紉／微工藝結構改造」的完整指南。",
    stat_cases: "目前收錄",
    stat_cases_sub: "經典單品與配飾改造庫",
    stat_detail: "案例詳情頁",
    stat_detail_sub: "4 大維度 + AI 模擬圖",
    stat_try: "試用專區",
    stat_try_sub: "即時 AI 專屬提案",
    stat_crud: "資料管理",
    stat_crud_sub: "全功能本地持久化",
    wall_badge: "FEATURED CASES & ACCESSORIES",
    wall_title: "首頁精選案例牆 (含衣物與配飾)",
    wall_desc: "每張卡片展示「原單品 → 改造／搭配方向」，並附帶 AI 概念視覺模擬圖，點擊即可探索該單品之痛點剖析、搭配與結構構想。",
    btn_add_custom: "+ 新增自訂案例",
    btn_reset: "🔄 恢復預設範例",
    btn_export: "💾 匯出 JSON",
    btn_import: "📂 匯入備份",
    cat_all: "全部單品",
    cat_accessory: "🎀 閒置配飾",
    cat_shirt: "襯衫",
    cat_denim: "丹寧/牛仔",
    cat_tee: "T恤/衛衣",
    cat_blazer: "西裝外套",
    cat_dress: "洋裝/裙裝",
    cat_other: "其他單品",
    diff_all: "⚡ 全部難度",
    diff_easy: "新手友好 (免針線)",
    diff_medium: "微工藝 (基礎手縫)",
    diff_hard: "裁縫進階 (結構重塑)",
    search_placeholder: "搜尋單品、配飾、痛點或風格...",
    card_before: "原單品 (Before)",
    card_after: "改造／搭配方向 (After)",
    card_target_style: "目標風格",
    card_pain_label: "關鍵痛點剖析：",
    card_view_btn: "查看案例詳情",
    card_ai_badge: "✨ AI 概念視覺模擬",
    empty_title: "查無符合條件的單品案例",
    empty_desc: "請嘗試變更篩選類別或搜尋關鍵字，或親自新增一筆案例！",
    try_badge: "✨ 互動試用體驗區",
    try_title: "輸入你的閒置單品或配飾，立即獲得專屬改造提案",
    try_desc: "衣櫃裡也有不知如何搭配或損壞的舊衣、絲巾、老皮帶或鞋款嗎？填寫你的條件，系統將結合痛點拆解為你產生專屬搭配、結構微改指南與生圖 Prompt！",
    try_quick_samples: "快速帶入範例：",
    sample_btn_0: "👔 過長格子襯衫",
    sample_btn_1: "🧣 繁複過時絲巾",
    sample_btn_2: "🪢 磨損老皮帶",
    sample_btn_3: "👟 踩破帆布鞋",
    try_label_name: "1. 你的閒置單品或配飾名稱",
    try_placeholder_name: "例如：買太大的厚重落肩格子襯衫、長年沒戴的花絲巾、踩爛的帆布鞋",
    try_label_mat: "2. 單品材質與顏色",
    try_placeholder_mat: "例如：真絲印花、植鞣牛皮、水洗丹寧、粗針織羊毛",
    try_label_pain: "3. 目前最主要的痛點或閒置原因",
    try_placeholder_pain: "例如：花紋過時顯老氣、後跟磨損嚴重、下擺過長遮腿顯矮...",
    try_label_style: "4. 期望改造目標或風格氛圍",
    try_placeholder_style: "例如：法式輕奢抓夾包、日系山系 Gorpcore、露跟穆勒鞋",
    try_label_mode: "5. 偏好的處置形式",
    try_mode_style: "👗 零剪裁 · 純穿搭層次搭配 (不破壞原物)",
    try_mode_craft: "✂️ 微工藝 · 局部剪裁或配件組裝 (初學者友善)",
    try_mode_tailor: "🪡 結構翻新 · 徹底重塑為新配件或兩件式 (進階手工)",
    try_submit_btn: "✨ 立即產生 AI 改造與搭配提案",
    try_loading_title: "AI 正在深度透視單品結構與痛點...",
    try_loading_sub: "正在生成風格對比方向、穿搭公式與專屬生圖 Prompt",
    try_res_completed: "✨ AI 靈感提案生成完成",
    try_res_inferred: "類別推論：",
    try_res_diff: "難易度：",
    try_save_btn: "📥 將此提案儲存至上方案例牆",
    try_res_before: "【原單品/配飾】",
    try_res_after: "【重構／改造方向】",
    try_res_mat: "材質/顏色：",
    try_res_pain: "痛點：",
    try_res_target: "鎖定風格：",
    try_res_mode: "形式：",
    try_res_style_plan: "👗 立即見效的穿搭/配飾組合方案：",
    try_res_remake_plan: "✂️ 結構改造實作引導：",
    try_res_prompt_title: "🎨 專屬 AI 生圖 Prompt (可一鍵複製至 Midjourney)：",
    modal_before_badge: "原單品狀態",
    modal_after_badge: "改造重構方向 ➔",
    modal_sim_title: "✨ AI 概念視覺模擬圖 (AI Visual Simulation Render)",
    modal_before_img: "原單品外觀 (Before)",
    modal_after_img: "AI 重構模擬效果 (After)",
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
    footer_p3: "收錄閒置單品與配飾改造 · 全站支援 AI 視覺概念模擬圖 · 多國語言 (繁中/EN/日語) · 完整 CRUD"
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
    hero_title: 'Idle Garments & Accessories Remake<br><span class="text-gradient-emerald">Original Item ➔ AI Simulation ➔ Restructure</span>',
    hero_desc: "Every forgotten piece of clothing and outdated accessory in your closet holds endless potential. Combining commercial design aesthetics and AI visual simulation, we provide comprehensive guides from pain point diagnosis and styling balance to no-sew upcycling.",
    stat_cases: "Archived",
    stat_cases_sub: "Garments & Accessories",
    stat_detail: "Case Details",
    stat_detail_sub: "4 Dimensions + AI Renders",
    stat_try: "AI Studio",
    stat_try_sub: "Custom Instant Proposals",
    stat_crud: "Data CRUD",
    stat_crud_sub: "Full LocalStorage Sync",
    wall_badge: "FEATURED CASES & ACCESSORIES",
    wall_title: "Featured Cases Wall (Garments & Accessories)",
    wall_desc: "Each card shows 'Original Item → Restyle / Remake Direction' accompanied by AI visual concept renders. Click to explore pain point analysis, styling, and structural blueprints.",
    btn_add_custom: "+ Add Custom Case",
    btn_reset: "🔄 Reset to Presets",
    btn_export: "💾 Export JSON",
    btn_import: "📂 Import Backup",
    cat_all: "All Items",
    cat_accessory: "🎀 Accessories",
    cat_shirt: "Shirts",
    cat_denim: "Denim",
    cat_tee: "T-Shirts",
    cat_blazer: "Blazers",
    cat_dress: "Dresses",
    cat_other: "Other Items",
    diff_all: "⚡ All Difficulties",
    diff_easy: "Beginner (No-sew)",
    diff_medium: "Light Craft (Stitch)",
    diff_hard: "Advanced (Tailoring)",
    search_placeholder: "Search items, accessories, pain points, or styles...",
    card_before: "Original Item (Before)",
    card_after: "Restyle / Remake (After)",
    card_target_style: "Target Style",
    card_pain_label: "Key Pain Point:",
    card_view_btn: "View Case Details",
    card_ai_badge: "✨ AI Visual Render",
    empty_title: "No matching cases found",
    empty_desc: "Try changing filter category or search keyword, or create a new case!",
    try_badge: "✨ Interactive AI Studio",
    try_title: "Input Your Idle Garment or Accessory to Generate Custom AI Proposals",
    try_desc: "Got unused clothes, silk scarves, old leather belts, or broken sneakers? Fill in your conditions, and AI will generate styling formulas, upcycling blueprints, and visual prompts!",
    try_quick_samples: "Quick Samples:",
    sample_btn_0: "👔 Oversized Plaid",
    sample_btn_1: "🧣 Vintage Silk Scarf",
    sample_btn_2: "🪢 Worn Leather Belt",
    sample_btn_3: "👟 Crushed Sneakers",
    try_label_name: "1. Your Idle Item or Accessory Name",
    try_placeholder_name: "e.g. Heavy oversized flannel shirt, forgotten silk scarf, crushed canvas shoes",
    try_label_mat: "2. Fabric Material & Color",
    try_placeholder_mat: "e.g. Mulberry silk print, veg-tanned leather, heavy denim, chunky wool",
    try_label_pain: "3. Main Pain Point or Reason It's Idle",
    try_placeholder_pain: "e.g. Pattern looks matronly; heel is crushed; too long and ruins proportions...",
    try_label_style: "4. Desired Style / Vibe Goal",
    try_placeholder_style: "e.g. French Cloud Pouch, Gorpcore Key Lanyard, Mule Slip-ons",
    try_label_mode: "5. Preferred Upcycling Mode",
    try_mode_style: "👗 Zero Cut · Pure Layering & Restyling (No Damage)",
    try_mode_craft: "✂️ Light Craft · Cropping & Accessory Hardware Assembly",
    try_mode_tailor: "🪡 Restructure · Deconstruct into Co-ords or Accessories",
    try_submit_btn: "✨ Generate AI Proposal Now",
    try_loading_title: "AI is diagnosing structure & pain points...",
    try_loading_sub: "Generating style direction, layering formula, and image prompt...",
    try_res_completed: "✨ AI Proposal Generated Successfully",
    try_res_inferred: "Category:",
    try_res_diff: "Difficulty:",
    try_save_btn: "📥 Save Proposal to Cases Wall",
    try_res_before: "【Original Item】",
    try_res_after: "【Restyle / Remake Direction】",
    try_res_mat: "Material/Color:",
    try_res_pain: "Pain Point:",
    try_res_target: "Target Style:",
    try_res_mode: "Mode:",
    try_res_style_plan: "👗 Quick-Win Layering & Accessorizing Formulas:",
    try_res_remake_plan: "✂️ Step-by-Step Upcycling Blueprint:",
    try_res_prompt_title: "🎨 Bespoke AI Image Generation Prompt (Copy to Midjourney):",
    modal_before_badge: "Original State",
    modal_after_badge: "Restyle / Remake ➔",
    modal_sim_title: "✨ AI Visual Simulation Render",
    modal_before_img: "Original Appearance (Before)",
    modal_after_img: "AI Remake Simulation (After)",
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
    footer_p3: "Covers Garments & Accessories Upcycling · AI Visual Concept Simulations · i18n (ZH-TW / EN / JA) · CRUD"
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
    hero_title: '衣服と小物の改造・スタイリング提案<br><span class="text-gradient-emerald">元の服 ➔ AIビジュアルシミュレーション ➔ 再構築</span>',
    hero_desc: "クローゼットに眠る服や使い古した小物には新しい可能性が秘められています。商業デザインの視点とAI画像プロンプトを活用し、お悩み分析からスタイリング、簡単リメイクまで完全ガイドします。",
    stat_cases: "収録事例",
    stat_cases_sub: "衣服＆小物改造ライブラリ",
    stat_detail: "詳細ページ",
    stat_detail_sub: "4大次元 + AI完成予想図",
    stat_try: "体験エリア",
    stat_try_sub: "即時AI専用提案",
    stat_crud: "データ管理",
    stat_crud_sub: "ローカル永続化",
    wall_badge: "FEATURED CASES & ACCESSORIES",
    wall_title: "厳選事例ウォール (衣服・小物)",
    wall_desc: "各カードは「元のアイテム → 改造／スタイリングの方向性」とAI完成予想イメージを表示。クリックしてお悩み分析や改造手順を確認できます。",
    btn_add_custom: "+ 新しい事例を追加",
    btn_reset: "🔄 デフォルトに戻す",
    btn_export: "💾 JSON書き出し",
    btn_import: "📂 バックアップ読み込み",
    cat_all: "すべて",
    cat_accessory: "🎀 閒置配飾",
    cat_shirt: "シャツ",
    cat_denim: "デニム",
    cat_tee: "Tシャツ・スウェット",
    cat_blazer: "ジャケット",
    cat_dress: "ワンピース・スカート",
    cat_other: "その他アイテム",
    diff_all: "⚡ 全難易度",
    diff_easy: "初心者向け (針・糸不要)",
    diff_medium: "ミニクラフト (手縫い)",
    diff_hard: "上級リメイク (構造再構築)",
    search_placeholder: "アイテム、小物、悩み、スタイルを検索...",
    card_before: "元の服 (Before)",
    card_after: "改造・着こなし方向 (After)",
    card_target_style: "目指すスタイル",
    card_pain_label: "主な悩み分析：",
    card_view_btn: "詳細を見る",
    card_ai_badge: "✨ AI完成予想図",
    empty_title: "該当する事例が見つかりません",
    empty_desc: "フィルター条件を変更するか、新しい事例を追加してください！",
    try_badge: "✨ インタラクティブ体験",
    try_title: "眠っている服や小物を入力して、専用のAIリメイク提案を作成",
    try_desc: "着なくなった服、スカーフ、古い革ベルト、履き潰した靴はありませんか？アイテム情報を入力すると、AIがスタイリング提案やリメイク手順を作成します！",
    try_quick_samples: "サンプル入力：",
    sample_btn_0: "👔 大きめチェックシャツ",
    sample_btn_1: "🧣 派手なシルクスカーフ",
    sample_btn_2: "🪢 擦れた本革ベルト",
    sample_btn_3: "👟 潰れたスニーカー",
    try_label_name: "1. アイテム名・小物名",
    try_placeholder_name: "例：大きすぎるチェックシャツ、使わないシルクスカーフ、潰れた靴",
    try_label_mat: "2. 素材・色",
    try_placeholder_mat: "例：正絹シルク、牛革、厚手デニム、ウールニット",
    try_label_pain: "3. 一番のお悩み・放置理由",
    try_placeholder_pain: "例：柄が古臭く見える、かかとが割れて痛い、着丈が長くてバランスが悪い...",
    try_label_style: "4. 目指すスタイルや雰囲気",
    try_placeholder_style: "例：フレンチクラウドバッグ、Gorpcore風キーホルダー、バブーシュ",
    try_label_mode: "5. 処置の形式",
    try_mode_style: "👗 カットなし · 純粋な着回し・スタイリング (原形保持)",
    try_mode_craft: "✂️ ミニクラフト · 部分カット・金具組み立て (初心者向け)",
    try_mode_tailor: "🪡 構造再構築 · 分解して小物や2ピースに (上級)",
    try_submit_btn: "✨ AIリメイク提案を生成",
    try_loading_title: "AIが構造とお悩みを分析中...",
    try_loading_sub: "スタイリング処方箋と画像生成プロンプトを作成しています...",
    try_res_completed: "✨ AI提案の生成が完了しました",
    try_res_inferred: "分類推論：",
    try_res_diff: "難易度：",
    try_save_btn: "📥 この提案を事例ウォールに保存",
    try_res_before: "【元の服・小物】",
    try_res_after: "【改造・着こなし方向】",
    try_res_mat: "素材/色：",
    try_res_pain: "お悩み：",
    try_res_target: "目標スタイル：",
    try_res_mode: "形式：",
    try_res_style_plan: "👗 すぐ試せる着回し・小物コーディネート：",
    try_res_remake_plan: "✂️ リメイク手順ステップガイド：",
    try_res_prompt_title: "🎨 専用AI画像生成プロンプト (Midjourney用)：",
    modal_before_badge: "元の状態",
    modal_after_badge: "改造・再構築 ➔",
    modal_sim_title: "✨ AIコンセプト完成予想図 (AI Visual Simulation)",
    modal_before_img: "元の外観 (Before)",
    modal_after_img: "AI再構築シミュレーション (After)",
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
    footer_p3: "衣服＆小物リメイク収録 · 全事例AI完成予想図付き · 多言語 (繁中/EN/日語) · 完全CRUD"
  },
  "ko": {
    lang_name: "한국어",
    header_brand: "의류 리메이크 연구소",
    header_sub: "상업디자인학과 · 자연과학과 인공지능 기말 프로젝트",
    nav_cases: "🏛️ 추천 리메이크 사례",
    nav_try: "✨ AI 리메이크 스튜디오",
    nav_data: "⚙️ 데이터 관리 (CRUD)",
    btn_new_case: "새 사례 추가",
    hero_badge: "CD000B 8조: 오가연 · 유시만 · 홍교은 · 양승환",
    hero_title: '방치된 의류 및 패션 잡화 리메이크<br><span class="text-gradient-emerald">원래 아이템 ➔ AI 비주얼 시뮬레이션 ➔ 구조적 재구성</span>',
    hero_desc: "옷장 깊숙이 방치된 옷과 낡은 패션 잡화에 새로운 생명을 불어넣습니다. 상업 디자인 감각과 AI 비주얼 시뮬레이션을 결합하여 고민 분석부터 스타일링 균형, 무봉제 업사이클링까지 완벽한 가이드를 제공합니다.",
    stat_cases: "수록 사례",
    stat_cases_sub: "의류 및 패션 잡화 라이브러리",
    stat_detail: "상세 페이지",
    stat_detail_sub: "4대 분석 + AI 완성 예상도",
    stat_try: "AI 체험관",
    stat_try_sub: "맞춤형 실시간 AI 제안",
    stat_crud: "데이터 관리",
    stat_crud_sub: "로컬스토리지 영구 동기화",
    wall_badge: "FEATURED CASES & ACCESSORIES",
    wall_title: "추천 사례 갤러리 (의류 및 잡화)",
    wall_desc: "각 카드는 '원래 아이템 → 리메이크/스타일링 방향'과 AI 비주얼 시뮬레이션을 보여줍니다. 클릭하여 상세 고민 분석과 제작 가이드를 확인하세요.",
    btn_add_custom: "+ 커스텀 사례 추가",
    btn_reset: "🔄 기본값 복원",
    btn_export: "💾 JSON 내보내기",
    btn_import: "📂 백업 불러오기",
    cat_all: "전체 아이템",
    cat_accessory: "🎀 패션 잡화",
    cat_shirt: "셔츠",
    cat_denim: "데님/청바지",
    cat_tee: "티셔츠/맨투맨",
    cat_blazer: "블레이저",
    cat_dress: "원피스/스커트",
    cat_other: "기타 아이템",
    diff_all: "⚡ 전체 난이도",
    diff_easy: "초보자 (바느질 불필요)",
    diff_medium: "기초 공예 (손바느질)",
    diff_hard: "고급 테일러링 (구조 재건)",
    search_placeholder: "아이템, 잡화, 고민 또는 스타일 검색...",
    card_before: "원래 아이템 (Before)",
    card_after: "리메이크/스타일링 방향 (After)",
    card_target_style: "목표 스타일",
    card_pain_label: "핵심 문제점 분석:",
    card_view_btn: "상세 보기",
    card_ai_badge: "✨ AI 비주얼 시뮬레이션",
    empty_title: "일치하는 사례가 없습니다",
    empty_desc: "필터 조건을 변경하거나 검색어를 수정해보세요, 또는 새로운 사례를 직접 등록해보세요!",
    try_badge: "✨ 인터랙티브 AI 체험관",
    try_title: "방치된 의류나 잡화를 입력하고 맞춤형 AI 리메이크 제안을 받으세요",
    try_desc: "입지 않는 옷, 스카프, 낡은 가죽 벨트, 닳은 스니커즈가 있나요? 정보를 입력하면 스타일링 공식, 리메이크 청사진, AI 프롬프트를 즉시 생성합니다!",
    try_quick_samples: "빠른 예시 적용:",
    sample_btn_0: "👔 오버핏 체크 셔츠",
    sample_btn_1: "🧣 빈티지 실크 스카프",
    sample_btn_2: "🪢 낡은 가죽 벨트",
    sample_btn_3: "👟 닳은 캔버스화",
    try_label_name: "1. 방치된 의류 또는 잡화 이름",
    try_placeholder_name: "예: 너무 큰 체크 플란넬 셔츠, 안 쓰는 실크 스카프, 굽 닳은 스니커즈",
    try_label_mat: "2. 소재 및 색상",
    try_placeholder_mat: "예: 실크 프린트, 베지터블 소가죽, 워싱 데님, 청키 울 니트",
    try_label_pain: "3. 가장 큰 고민이나 방치 이유",
    try_placeholder_pain: "예: 패턴이 올드함, 뒤축이 무너짐, 기장이 너무 길어 비율을 망침...",
    try_label_style: "4. 희망하는 목표 스타일이나 무드",
    try_placeholder_style: "예: 프렌치 클라우드 파우치, 고프코어 키링, 뮬 슬립온",
    try_label_mode: "5. 선호하는 리메이크 방식",
    try_mode_style: "👗 무절개 · 순수 레이어링 및 스타일링 (원형 보존)",
    try_mode_craft: "✂️ 기초 공예 · 부분 크롭 및 부자재 조립 (초보자 추천)",
    try_mode_tailor: "🪡 구조 혁신 · 분해 후 투피스 또는 잡화로 재탄생 (고급)",
    try_submit_btn: "✨ AI 리메이크 제안 생성하기",
    try_loading_title: "AI가 구조와 문제점을 심층 분석 중입니다...",
    try_loading_sub: "스타일링 공식과 이미지 생성 프롬프트를 작성하고 있습니다...",
    try_res_completed: "✨ AI 리메이크 제안 생성 완료",
    try_res_inferred: "카테고리 추론:",
    try_res_diff: "난이도:",
    try_save_btn: "📥 이 제안을 갤러리에 저장",
    try_res_before: "【원래 아이템/잡화】",
    try_res_after: "【재구성 / 리메이크 방향】",
    try_res_mat: "소재/색상:",
    try_res_pain: "문제점:",
    try_res_target: "목표 스타일:",
    try_res_mode: "방식:",
    try_res_style_plan: "👗 즉시 적용 가능한 스타일링 공식:",
    try_res_remake_plan: "✂️ 단계별 리메이크 청사진 가이드:",
    try_res_prompt_title: "🎨 전용 AI 이미지 생성 프롬프트 (Midjourney 복사 가능):",
    modal_before_badge: "원래 상태",
    modal_after_badge: "리메이크 방향 ➔",
    modal_sim_title: "✨ AI 비주얼 시뮬레이션 렌더링 (Before / After)",
    modal_before_img: "원래 외관 (Before)",
    modal_after_img: "AI 리메이크 완성 예상도 (After)",
    modal_pain_title: "1. 아이템 문제점 정밀 분석",
    modal_style_title: "2. 스타일링 및 코디 제안",
    modal_remake_title: "3. 구조적 리메이크 청사진",
    modal_prompt_title: "4. 당시 사용한 AI 프롬프트 기록",
    modal_tools_label: "필요한 도구 및 재료:",
    modal_protip_label: "디자이너의 꿀팁:",
    modal_copy_btn: "프롬프트 복사",
    modal_copied_btn: "✓ 클립보드에 복사되었습니다!",
    modal_close_btn: "닫기",
    modal_edit_btn: "사례 수정",
    modal_delete_btn: "사례 삭제",
    footer_p1: "RE:CLOTHES 의류 리메이크 연구소 · 115학년도 1학기 자연과학과 인공지능 기말과제",
    footer_p2: "상업디자인학과 CD000B 8조: 오가연 (11533216) · 유시만 · 홍교은 · 양승환",
    footer_p3: "의류 및 잡화 리메이크 수록 · AI 비주얼 시뮬레이션 지원 · 다국어 (7개 언어 지원) · 완벽한 CRUD"
  },
  "es": {
    lang_name: "Español",
    header_brand: "Taller RE:CLOTHES",
    header_sub: "Diseño Comercial · Proyecto Final de Ciencias Naturales e IA",
    nav_cases: "🏛️ Galería de Casos",
    nav_try: "✨ Estudio AI",
    nav_data: "⚙️ Gestión de Datos (CRUD)",
    btn_new_case: "Nuevo Caso",
    hero_badge: "Grupo 8: Chia-Yen Wu · Shih-Man Liu · Qiao-En Hong · Cheng-Huan Yang",
    hero_title: 'Upcycling de Prendas y Accesorios en Desuso<br><span class="text-gradient-emerald">Original ➔ Simulación Visual AI ➔ Reestructuración</span>',
    hero_desc: "Cada prenda y accesorio olvidado en tu armario guarda un sinfín de posibilidades. Fusionamos estética del diseño comercial y simulaciones visuales con IA para ofrecer guías completas desde diagnóstico hasta upcycling sin costura.",
    stat_cases: "Archivados",
    stat_cases_sub: "Prendas y Accesorios",
    stat_detail: "Detalle de Casos",
    stat_detail_sub: "4 Dimensiones + Renders AI",
    stat_try: "Estudio AI",
    stat_try_sub: "Propuestas Instantáneas",
    stat_crud: "CRUD",
    stat_crud_sub: "Sincronización Local",
    wall_badge: "CASOS DESTACADOS Y ACCESORIOS",
    wall_title: "Galería de Casos (Prendas y Accesorios)",
    wall_desc: "Cada tarjeta muestra 'Prenda Original → Dirección de Rediseño' acompañada de simulaciones conceptuales de IA. Haz clic para explorar diagnóstico, estilismo y planos de costura.",
    btn_add_custom: "+ Añadir Caso Personalizado",
    btn_reset: "🔄 Restaurar Predeterminados",
    btn_export: "💾 Exportar JSON",
    btn_import: "📂 Importar Copia",
    cat_all: "Todos",
    cat_accessory: "🎀 Accesorios",
    cat_shirt: "Camisas",
    cat_denim: "Denim / Vaqueros",
    cat_tee: "Camisetas",
    cat_blazer: "Blazers",
    cat_dress: "Vestidos",
    cat_other: "Otros",
    diff_all: "⚡ Dificultad",
    diff_easy: "Principiante (Sin costura)",
    diff_medium: "Manualidad (Costura simple)",
    diff_hard: "Avanzado (Sastrería)",
    search_placeholder: "Buscar prendas, accesorios, problemas o estilos...",
    card_before: "Prenda Original (Antes)",
    card_after: "Rediseño / Estilo (Después)",
    card_target_style: "Estilo Objetivo",
    card_pain_label: "Diagnóstico Clave:",
    card_view_btn: "Ver Detalles",
    card_ai_badge: "✨ Simulación Visual AI",
    empty_title: "No se encontraron casos coincidentes",
    empty_desc: "Prueba cambiando los filtros o la búsqueda, ¡o añade un nuevo caso!",
    try_badge: "✨ Estudio Interactivo AI",
    try_title: "Ingresa tu prenda o accesorio y obtén una propuesta de upcycling a medida",
    try_desc: "¿Tienes ropa olvidada, pañuelos de seda, cinturones viejos o zapatillas rotas? Ingresa sus datos y la IA creará fórmulas de estilismo, planos de costura y prompts para imágenes.",
    try_quick_samples: "Ejemplos rápidos:",
    sample_btn_0: "👔 Camisa de Cuadros",
    sample_btn_1: "🧣 Pañuelo de Seda",
    sample_btn_2: "🪢 Cinturón de Cuero",
    sample_btn_3: "👟 Zapatillas de Lona",
    try_label_name: "1. Nombre de la prenda o accesorio",
    try_placeholder_name: "Ej: Camisa holgada de cuadros, pañuelo de seda vintage, zapatillas desgastadas",
    try_label_mat: "2. Material y color",
    try_placeholder_mat: "Ej: Seda estampada, cuero curtido, denim pesado, lana tejida",
    try_label_pain: "3. Motivo por el que está en desuso",
    try_placeholder_pain: "Ej: Estampado pasado de moda, talón aplastado, demasiado largo...",
    try_label_style: "4. Estilo o vibra deseada",
    try_placeholder_style: "Ej: Bolso nube parisino, llavero gorpcore, zuecos mule",
    try_label_mode: "5. Modalidad preferida",
    try_mode_style: "👗 Sin Cortes · Solo Estilismo y Capas (Sin Daño)",
    try_mode_craft: "✂️ Artesanía Ligera · Recortes y Accesorios (Amigable)",
    try_mode_tailor: "🪡 Reestructuración · Transformación Estructural (Avanzado)",
    try_submit_btn: "✨ Generar Propuesta de IA Ahora",
    try_loading_title: "La IA está diagnosticando la estructura y el tejido...",
    try_loading_sub: "Generando fórmulas de estilo y prompts de imagen...",
    try_res_completed: "✨ Propuesta de IA Generada con Éxito",
    try_res_inferred: "Categoría:",
    try_res_diff: "Dificultad:",
    try_save_btn: "📥 Guardar Propuesta en la Galería",
    try_res_before: "【Prenda/Accesorio Original】",
    try_res_after: "【Rediseño / Reestructuración】",
    try_res_mat: "Material/Color:",
    try_res_pain: "Problema:",
    try_res_target: "Estilo Objetivo:",
    try_res_mode: "Modalidad:",
    try_res_style_plan: "👗 Fórmulas Inmediatas de Estilismo y Combinación:",
    try_res_remake_plan: "✂️ Guía de Transformación Paso a Paso:",
    try_res_prompt_title: "🎨 Prompt Exclusivo de IA para Generación de Imágenes:",
    modal_before_badge: "Estado Original",
    modal_after_badge: "Transformación ➔",
    modal_sim_title: "✨ Simulación Visual Conceptual AI (Antes / Después)",
    modal_before_img: "Aspecto Original (Antes)",
    modal_after_img: "Simulación de Rediseño (Después)",
    modal_pain_title: "1. Análisis de Puntos Críticos de la Prenda",
    modal_style_title: "2. Guía de Combinaciones y Estilismo",
    modal_remake_title: "3. Plan de Reestructuración y Upcycling",
    modal_prompt_title: "4. Registro de Prompt Utilizado en la IA",
    modal_tools_label: "Herramientas y Materiales Necesarios:",
    modal_protip_label: "Consejo Profesional de Diseño:",
    modal_copy_btn: "Copiar Prompt",
    modal_copied_btn: "✓ ¡Copiado al portapapeles!",
    modal_close_btn: "Cerrar",
    modal_edit_btn: "Editar Caso",
    modal_delete_btn: "Eliminar Caso",
    footer_p1: "Taller RE:CLOTHES · Proyecto Final de Ciencias Naturales e IA",
    footer_p2: "Dpto. de Diseño Comercial CD000B Grupo 8: Chia-Yen Wu (11533216), Shih-Man Liu, Qiao-En Hong, Cheng-Huan Yang",
    footer_p3: "Upcycling de Ropa y Accesorios · Simulaciones Visuales de IA · Multilingüe (7 idiomas) · CRUD Completo"
  },
  "de": {
    lang_name: "Deutsch",
    header_brand: "Upcycling-Studio",
    header_sub: "Fachbereich Kommunikationsdesign · Naturwissenschaften & KI Abschlussprojekt",
    nav_cases: "🏛️ Ausgewählte Fälle",
    nav_try: "✨ KI-Studio",
    nav_data: "⚙️ Datenverwaltung (CRUD)",
    btn_new_case: "Neuer Fall",
    hero_badge: "Gruppe 8: Chia-Yen Wu · Shih-Man Liu · Qiao-En Hong · Cheng-Huan Yang",
    hero_title: 'Upcycling von Kleidung & Accessoires<br><span class="text-gradient-emerald">Original ➔ KI-Simulation ➔ Strukturwandel</span>',
    hero_desc: "Jedes vergessene Kleidungsstück und alte Accessoire im Schrank birgt neues Potenzial. Wir verbinden kommerzielle Designästhetik mit KI-Visualisierungen – von Schwachstellenanalysen bis zu No-Sew-Upcycling-Anleitungen.",
    stat_cases: "Erfasst",
    stat_cases_sub: "Kleidung & Accessoires",
    stat_detail: "Detailansicht",
    stat_detail_sub: "4 Dimensionen + KI-Renderings",
    stat_try: "KI-Studio",
    stat_try_sub: "Individuelle Sofort-Vorschläge",
    stat_crud: "CRUD",
    stat_crud_sub: "Lokale Speicherung",
    wall_badge: "FEATURED CASES & ACCESSORIES",
    wall_title: "Ausgewählte Upcycling-Fälle (Kleidung & Accessoires)",
    wall_desc: "Jede Karte zeigt 'Originalstück → Styling/Upcycling-Richtung' inklusive KI-Konzept-Simulationen.",
    btn_add_custom: "+ Eigenen Fall hinzufügen",
    btn_reset: "🔄 Zurücksetzen",
    btn_export: "💾 JSON exportieren",
    btn_import: "📂 Backup importieren",
    cat_all: "Alle Stücke",
    cat_accessory: "🎀 Accessoires",
    cat_shirt: "Hemden",
    cat_denim: "Denim / Jeans",
    cat_tee: "T-Shirts",
    cat_blazer: "Blazer",
    cat_dress: "Kleider",
    cat_other: "Sonstige",
    diff_all: "⚡ Alle Stufen",
    diff_easy: "Anfänger (Ohne Nähen)",
    diff_medium: "Handwerk (Einfache Naht)",
    diff_hard: "Fortgeschritten (Maßarbeit)",
    search_placeholder: "Kleidung, Accessoires, Schwachstellen oder Stile suchen...",
    card_before: "Originalstück (Vorher)",
    card_after: "Upcycling / Styling (Nachher)",
    card_target_style: "Ziel-Stil",
    card_pain_label: "Hauptproblem-Analyse:",
    card_view_btn: "Details ansehen",
    card_ai_badge: "✨ KI-Visualisierung",
    empty_title: "Keine passenden Fälle gefunden",
    empty_desc: "Passe die Filter oder den Suchbegriff an, oder erstelle ein neues Upcycling-Projekt!",
    try_badge: "✨ Interaktives KI-Studio",
    try_title: "Gib dein ungenutztes Kleidungsstück oder Accessoire ein für maßgeschneiderte KI-Vorschläge",
    try_desc: "Hast du ungetragene Kleidung, Seidentücher, alte Ledergürtel oder kaputte Sneaker? Gib deine Daten ein und die KI generiert Styling-Formeln, Schnittpläne und Bild-Prompts!",
    try_quick_samples: "Schnell-Beispiele:",
    sample_btn_0: "👔 Oversize Karohemd",
    sample_btn_1: "🧣 Vintage Seidentuch",
    sample_btn_2: "🪢 Abgenutzter Gürtel",
    sample_btn_3: "👟 Alte Canvas-Sneaker",
    try_label_name: "1. Name des Kleidungsstücks oder Accessoires",
    try_placeholder_name: "z.B. Weites Flanell-Karohemd, vergessenes Seidentuch, zerschlissene Sneaker",
    try_label_mat: "2. Material und Farbe",
    try_placeholder_mat: "z.B. Maulbeerseide, Rindsleder, gewaschener Denim, Grobstrick",
    try_label_pain: "3. Hauptgrund für das Nicht-Tragen",
    try_placeholder_pain: "z.B. Muster wirkt altbacken, Ferse zertreten, Schnitt staucht die Figur...",
    try_label_style: "4. Gewünschter Ziel-Stil",
    try_placeholder_style: "z.B. Französische Wolkentausche, Gorpcore-Schlüsselband, Mules",
    try_label_mode: "5. Bevorzugte Methode",
    try_mode_style: "👗 Ohne Schnitt · Reines Styling & Layering (Unbeschädigt)",
    try_mode_craft: "✂️ Leichtes Handwerk · Zuschnitt & Kurzwaren (Einsteiger)",
    try_mode_tailor: "🪡 Re-Konstruktion · Umgestaltung zu Neuem (Fortgeschritten)",
    try_submit_btn: "✨ Jetzt KI-Vorschlag generieren",
    try_loading_title: "KI analysiert Struktur und Schwachstellen...",
    try_loading_sub: "Erstelle Styling-Leitfaden und Bild-Prompt...",
    try_res_completed: "✨ KI-Vorschlag erfolgreich erstellt",
    try_res_inferred: "Kategorie:",
    try_res_diff: "Schwierigkeit:",
    try_save_btn: "📥 Diesen Vorschlag zur Galerie hinzufügen",
    try_res_before: "【Originalstück/Accessoire】",
    try_res_after: "【Neugestaltung / Upcycling】",
    try_res_mat: "Material/Farbe:",
    try_res_pain: "Problem:",
    try_res_target: "Ziel-Stil:",
    try_res_mode: "Methode:",
    try_res_style_plan: "👗 Sofortige Styling- & Kombinationsformel:",
    try_res_remake_plan: "✂️ Schritt-für-Schritt Umgestaltungsplan:",
    try_res_prompt_title: "🎨 Spezieller KI-Bildprompt (Midjourney-kompatibel):",
    modal_before_badge: "Originalzustand",
    modal_after_badge: "Upcycling-Richtung ➔",
    modal_sim_title: "✨ KI-Konzept-Simulation (Vorher / Nachher)",
    modal_before_img: "Ursprüngliches Aussehen (Vorher)",
    modal_after_img: "KI-Simulation der Umgestaltung (Nachher)",
    modal_pain_title: "1. Schwachstellen-Analyse des Kleidungsstücks",
    modal_style_title: "2. Styling- und Kombinationsleitfaden",
    modal_remake_title: "3. Upcycling- und Rekonstruktionsplan",
    modal_prompt_title: "4. Verwendetes KI-Prompt-Archiv",
    modal_tools_label: "Benötigte Werkzeuge & Materialien:",
    modal_protip_label: "Designer-Tipp:",
    modal_copy_btn: "Prompt kopieren",
    modal_copied_btn: "✓ In die Zwischenablage kopiert!",
    modal_close_btn: "Schließen",
    modal_edit_btn: "Diesen Fall bearbeiten",
    modal_delete_btn: "Fall löschen",
    footer_p1: "RE:CLOTHES Upcycling-Studio · Naturwissenschaften und KI Abschlussprojekt",
    footer_p2: "Kommunikationsdesign CD000B Gruppe 8: Chia-Yen Wu (11533216), Shih-Man Liu, Qiao-En Hong, Cheng-Huan Yang",
    footer_p3: "Kleidung & Accessoires Upcycling · KI-Visualisierungen · Mehrsprachig (7 Sprachen) · Volles CRUD"
  },
  "ar": {
    lang_name: "العربية",
    header_brand: "استوديو إعادة تدوير الملابس",
    header_sub: "قسم التصميم التجاري · مشروع ختامي في العلوم الطبيعية والذكاء الاصطناعي",
    nav_cases: "🏛️ معرض الحالات المميزة",
    nav_try: "✨ استوديو الذكاء الاصطناعي",
    nav_data: "⚙️ إدارة البيانات (CRUD)",
    btn_new_case: "إضافة حالة جديدة",
    hero_badge: "المجموعة 8: تشيا-ين وو · شيه-مان ليو · تشياو-إن هونغ · تشنغ-هوان يانغ",
    hero_title: 'إعادة تدوير الملابس والإكسسوارات المهملة<br><span class="text-gradient-emerald">القطعة الأصلية ➔ محاكاة بصرية بالذكاء الاصطناعي ➔ إعادة الهيكلة</span>',
    hero_desc: "كل قطعة ملابس أو إكسسوار قديم في خزانتك يمتلك إمكانيات مذهلة. نجمع بين جماليات التصميم التجاري ومحاكاة الذكاء الاصطناعي لتقديم أدلة شاملة لتحليل العيوب وتنسيق الإطلالات والتدوير دون خياطة.",
    stat_cases: "المحفوظات",
    stat_cases_sub: "ملابس وإكسسوارات",
    stat_detail: "تفاصيل الحالات",
    stat_detail_sub: "4 أبعاد + محاكاة بصرية",
    stat_try: "استوديو التجربة",
    stat_try_sub: "مقترحات فورية مخصصة",
    stat_crud: "إدارة البيانات",
    stat_crud_sub: "مزامنة محلية دائمة",
    wall_badge: "FEATURED CASES & ACCESSORIES",
    wall_title: "معرض الحالات المختارة (ملابس وإكسسوارات)",
    wall_desc: "تعرض كل بطاقة 'القطعة الأصلية → اتجاه إعادة التدوير' مع صور محاكاة بصرية بالذكاء الاصطناعي. انقر لاستكشاف تحليل العيوب والأفكار الهيكلية.",
    btn_add_custom: "+ إضافة حالة مخصصة",
    btn_reset: "🔄 استعادة الافتراضي",
    btn_export: "💾 تصدير JSON",
    btn_import: "📂 استيراد نسخة احتياطية",
    cat_all: "جميع القطع",
    cat_accessory: "🎀 إكسسوارات مهملة",
    cat_shirt: "قمصان",
    cat_denim: "جينز / دنيم",
    cat_tee: "تي شيرت",
    cat_blazer: "سترات رسمية",
    cat_dress: "فساتين",
    cat_other: "قطع أخرى",
    diff_all: "⚡ جميع المستويات",
    diff_easy: "مبتدئ (بدون خياطة)",
    diff_medium: "حرفة خفيفة (خياطة يدوية)",
    diff_hard: "متقدم (إعادة تفصيل)",
    search_placeholder: "ابحث عن قطعة، إكسسوار، مشكلة أو نمط...",
    card_before: "القطعة الأصلية (قبل)",
    card_after: "اتجاه التدوير / التنسيق (بعد)",
    card_target_style: "النمط المستهدف",
    card_pain_label: "تحليل المشكلة الرئيسية:",
    card_view_btn: "عرض التفاصيل",
    card_ai_badge: "✨ محاكاة الذكاء الاصطناعي",
    empty_title: "لم يتم العثور على حالات مطابقة",
    empty_desc: "يرجى تجربة تغيير خيارات التصفية أو كلمات البحث، أو إضافة حالة جديدة بنفسك!",
    try_badge: "✨ استوديو التجربة التفاعلي",
    try_title: "أدخل قطعتك أو إكسسوارك المهمل للحصول على مقترح إعادة تدوير مخصص",
    try_desc: "هل لديك ملابس غير مستخدمة، أوشحة حريرية، أحزمة جلدية قديمة، أو أحذية بالية؟ أدخل بياناتها ليقوم الذكاء الاصطناعي بإنشاء مقترحات تنسيق ومخططات تدوير وبرومبت للصور!",
    try_quick_samples: "أمثلة سريعة:",
    sample_btn_0: "👔 قميص كاروهات واسع",
    sample_btn_1: "🧣 وشاح حرير كلاسيكي",
    sample_btn_2: "🪢 حزام جلد بالي",
    sample_btn_3: "👟 حذاء قماشي مهترئ",
    try_label_name: "1. اسم القطعة أو الإكسسوار المهمل",
    try_placeholder_name: "مثال: قميص كاروهات ثقيل واسع، وشاح حريري عتيق، حذاء قماشي مهترئ الكعب",
    try_label_mat: "2. نوع القماش واللون",
    try_placeholder_mat: "مثال: حرير منقوش، جلد طبيعي، دنيم مغسول، صوف محبوك",
    try_label_pain: "3. سبب الإهمال أو المشكلة الرئيسية",
    try_placeholder_pain: "مثال: النقشة قديمة جداً، الكعب مهترئ، الطول الزائد يفسد المظهر...",
    try_label_style: "4. النمط أو الطابع المستهدف",
    try_placeholder_style: "مثال: حقيبة سحاب فرنسية، ميدالية مفاتيح عصرية، حذاء مفتوح كاجوال",
    try_label_mode: "5. طريقة التدوير المفضلة",
    try_mode_style: "👗 بدون قص · تنسيق وطبقات فقط (حفظ الأصل)",
    try_mode_craft: "✂️ حرفة بسيطة · قص جزئي وتركيب إكسسوارات (للمبتدئين)",
    try_mode_tailor: "🪡 إعادة هيكلة · تفكيك وتحويل لقطعتين أو إكسسوار (متقدم)",
    try_submit_btn: "✨ توليد مقترح الذكاء الاصطناعي الآن",
    try_loading_title: "يقوم الذكاء الاصطناعي بتحليل هيكل القطعة وعيوبها...",
    try_loading_sub: "جاري إنشاء معادلات التنسيق وبرومبت توليد الصور...",
    try_res_completed: "✨ تم توليد مقترح الذكاء الاصطناعي بنجاح",
    try_res_inferred: "التصنيف المستنتج:",
    try_res_diff: "مستوى الصعوبة:",
    try_save_btn: "📥 حفظ هذا المقترح في معرض الحالات",
    try_res_before: "【القطعة/الإكسسوار الأصلي】",
    try_res_after: "【اتجاه التدوير وإعادة التشكيل】",
    try_res_mat: "الخامة/اللون:",
    try_res_pain: "المشكلة:",
    try_res_target: "النمط المستهدف:",
    try_res_mode: "الطريقة:",
    try_res_style_plan: "👗 حلول التنسيق والطبقات الفورية:",
    try_res_remake_plan: "✂️ خطوات التعديل وإعادة الهيكلة:",
    try_res_prompt_title: "🎨 برومبت الذكاء الاصطناعي لتوليد الصور (جاهز للنسخ في Midjourney):",
    modal_before_badge: "الحالة الأصلية",
    modal_after_badge: "اتجاه التدوير ➔",
    modal_sim_title: "✨ محاكاة بصرية بالذكاء الاصطناعي (قبل / بعد)",
    modal_before_img: "المظهر الأصلي (قبل)",
    modal_after_img: "محاكاة التدوير بالذكاء الاصطناعي (بعد)",
    modal_pain_title: "1. تحليل نقاط الضعف والمشاكل",
    modal_style_title: "2. دليل تنسيق الإطلالة والطبقات",
    modal_remake_title: "3. مخطط إعادة الهيكلة والتعديل",
    modal_prompt_title: "4. سجل برومبت الذكاء الاصطناعي المستخدم",
    modal_tools_label: "الأدوات والمواد المطلوبة:",
    modal_protip_label: "نصيحة المصمم الاحترافية:",
    modal_copy_btn: "نسخ البرومبت",
    modal_copied_btn: "✓ تم النسخ إلى الحافظة!",
    modal_close_btn: "إغلاق",
    modal_edit_btn: "تعديل هذه الحالة",
    modal_delete_btn: "حذف الحالة",
    footer_p1: "استوديو RE:CLOTHES لإعادة تدوير الملابس · مشروع العلوم الطبيعية والذكاء الاصطناعي",
    footer_p2: "قسم التصميم التجاري CD000B المجموعة 8: تشيا-ين وو (11533216) · شيه-مان ليو · تشياو-إن هونغ · تشنغ-هوان يانغ",
    footer_p3: "تدوير الملابس والإكسسوارات · محاكاة بصرية بالذكاء الاصطناعي · 7 لغات مدعومة · نظام CRUD متكامل"
  }
};

const STORAGE_KEY = "reclothes_cases_data_v3";
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

function t(key) {
  const dict = I18N_DICT[currentLang] || I18N_DICT["en"] || I18N_DICT["zh-TW"];
  return dict[key] || (I18N_DICT["en"] && I18N_DICT["en"][key]) || (I18N_DICT["zh-TW"] && I18N_DICT["zh-TW"][key]) || key;
}

function getCaseData(item) {
  if (item.translations && item.translations[currentLang]) {
    return {
      ...item,
      ...item.translations[currentLang]
    };
  }
  const fallback = (item.translations && (item.translations["en"] || item.translations["zh-TW"])) || {};
  return {
    ...item,
    ...fallback,
    categoryName: (item.translations && item.translations[currentLang] && item.translations[currentLang].categoryName) || fallback.categoryName || item.categoryName || item.category,
    difficultyName: (item.translations && item.translations[currentLang] && item.translations[currentLang].difficultyName) || fallback.difficultyName || item.difficultyName || item.difficulty
  };
}

function switchLanguage(lang) {
  if (!I18N_DICT[lang]) return;
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);

  // Set RTL support for Arabic
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }

  const langSelect = document.getElementById("language-select");
  if (langSelect && langSelect.value !== lang) {
    langSelect.value = lang;
  }

  updateStaticTexts();
  renderCasesGrid();
  updateStatsCounter();

  if (appState.selectedCase) {
    openDetailModal(appState.selectedCase.id);
  }

  showToast(`Language switched to: ${I18N_DICT[lang].lang_name}`, "info");
}

function updateStaticTexts() {
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

  const langSelect = document.getElementById("language-select");
  if (langSelect) langSelect.value = currentLang;
}

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

// 渲染案例網格 (含 AI 概念視覺模擬圖)
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
    const displayImg = rawItem.afterImage || rawItem.beforeImage || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80";

    return `
      <div class="glass-card rounded-2xl flex flex-col justify-between relative overflow-hidden group">
        
        <!-- 頂部 AI 模擬概念圖 (AI Simulated Image Thumbnail) -->
        <div class="relative h-44 w-full overflow-hidden bg-neutral-900 border-b border-neutral-800">
          <img src="${escapeHtml(displayImg)}" alt="${escapeHtml(item.remakeDirection)}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
            loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80';">
          <div class="absolute inset-0 bg-gradient-to-t from-[#12161f] via-transparent to-black/30"></div>
          
          <!-- AI 概念模擬圖標籤 -->
          <div class="absolute top-3 left-3">
            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold bg-neutral-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/40 shadow-lg">
              ${t('card_ai_badge')}
            </span>
          </div>

          <div class="absolute top-3 right-3 flex items-center space-x-1.5">
            <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium border ${diffBadgeColor} bg-neutral-950/80 backdrop-blur-md">
              ${escapeHtml(item.difficultyName || rawItem.difficulty)}
            </span>
          </div>

          <div class="absolute bottom-2.5 left-3">
            <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-900/90 text-neutral-300 border border-neutral-700">
              🏷️ ${escapeHtml(item.categoryName || rawItem.category)}
            </span>
          </div>

          <div class="absolute bottom-2.5 right-3 text-[11px] text-neutral-300 font-medium bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
            ⏱️ ${escapeHtml(item.estimatedTime || "30m")}
          </div>
        </div>

        <div class="p-6">
          <!-- 原單品 → 改造方向 核心對比展示卡片 -->
          <div class="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/80 mb-4">
            <div class="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
              <span class="w-2 h-2 rounded-full bg-rose-400"></span>
              <span>${t('card_before')}</span>
            </div>
            <h3 class="text-sm font-bold text-neutral-200 line-clamp-1 mb-2">
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
            <h4 class="text-base font-bold text-emerald-300 line-clamp-1">
              ${escapeHtml(item.remakeDirection)}
            </h4>
          </div>

          <div class="mb-2">
            <div class="text-xs font-medium text-neutral-400 mb-1 flex items-center">
              <span class="mr-1">⚡</span> ${t('card_pain_label')}
            </div>
            <p class="text-xs text-neutral-300 bg-neutral-900/50 p-2.5 rounded-lg border border-neutral-800 line-clamp-2">
              ${escapeHtml(firstPain)}
            </p>
          </div>
        </div>

        <div class="px-6 pb-5 pt-2 border-t border-neutral-800/80 flex items-center justify-between">
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

// 案例詳情頁 Modal (包含 AI 視覺模擬圖與 Before/After 對比)
function openDetailModal(caseId) {
  const rawItem = appState.cases.find(c => c.id === caseId);
  if (!rawItem) return;

  appState.selectedCase = rawItem;
  const item = getCaseData(rawItem);
  const modal = document.getElementById("detail-modal");
  const container = document.getElementById("detail-modal-body");
  if (!modal || !container) return;

  const beforeImg = rawItem.beforeImage || "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80";
  const afterImg = rawItem.afterImage || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80";

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
    : "<span class='text-neutral-400 text-xs'>Standard tools</span>";

  const promptEn = item.promptRecord ? item.promptRecord.promptEn : "";
  const promptZh = item.promptRecord ? item.promptRecord.promptZh : "";
  const promptEngine = item.promptRecord ? item.promptRecord.engine : "Midjourney v6.0";
  const promptPurpose = item.promptRecord ? item.promptRecord.purpose : "";

  container.innerHTML = `
    <!-- Header -->
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

    <!-- AI 概念視覺模擬圖 (AI Visual Simulation Comparison) -->
    <div class="mb-6 p-5 rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-emerald-500/30 shadow-xl">
      <div class="flex items-center justify-between mb-3 pb-2 border-b border-neutral-800">
        <h3 class="text-sm font-bold text-emerald-300 flex items-center">
          <span class="mr-2">✨</span> ${t('modal_sim_title')}
        </h3>
        <span class="text-[11px] text-neutral-400 font-mono">Engine: ${escapeHtml(promptEngine)}</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Before -->
        <div class="relative rounded-xl overflow-hidden border border-neutral-700/80 bg-neutral-900">
          <div class="absolute top-2 left-2 z-10 px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/80 text-rose-300 border border-rose-500/40 backdrop-blur-sm">
            ${t('modal_before_img')}
          </div>
          <img src="${escapeHtml(beforeImg)}" alt="${escapeHtml(item.originalItem)}" 
            class="w-full h-52 object-cover filter brightness-90 hover:brightness-100 transition-all duration-300"
            onerror="this.src='https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80';">
          <div class="p-2.5 bg-neutral-950/90 text-[11px] text-neutral-300 border-t border-neutral-800 truncate">
            ${escapeHtml(item.originalItem)}
          </div>
        </div>

        <!-- After -->
        <div class="relative rounded-xl overflow-hidden border border-emerald-500/50 bg-neutral-900 glow-tag">
          <div class="absolute top-2 left-2 z-10 px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-950/90 text-emerald-300 border border-emerald-500/50 backdrop-blur-sm">
            ${t('modal_after_img')}
          </div>
          <img src="${escapeHtml(afterImg)}" alt="${escapeHtml(item.remakeDirection)}" 
            class="w-full h-52 object-cover filter brightness-95 hover:brightness-105 transition-all duration-300"
            onerror="this.src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80';">
          <div class="p-2.5 bg-neutral-950/90 text-[11px] text-emerald-300 font-bold border-t border-neutral-800 truncate">
            ${escapeHtml(item.remakeDirection)}
          </div>
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

    <!-- Actions -->
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

// 智慧提案引擎 (含 AI 模擬圖即時渲染)
let latestGeneratedProposal = null;

function generateAIProposal(e) {
  if (e) e.preventDefault();

  const name = document.getElementById("try-name").value.trim();
  const material = document.getElementById("try-material").value.trim() || (currentLang === "en" ? "Cotton / Silk blend" : currentLang === "ja" ? "混紡素材" : "混紡材質 / 常見色系");
  const pain = document.getElementById("try-pain").value.trim();
  const targetStyle = document.getElementById("try-style").value.trim() || (currentLang === "en" ? "Modern Minimalist" : currentLang === "ja" ? "モダンミニマル" : "現代簡約質感");
  const mode = document.getElementById("try-mode").value;

  if (!name || !pain) {
    showToast(currentLang === "en" ? "Please enter at least item name and pain point!" : currentLang === "ja" ? "アイテム名とお悩みを入力してください！" : "請至少填寫「單品名稱」與「目前最大的痛點」！", "error");
    return;
  }

  const resultArea = document.getElementById("try-result-area");
  const loadingArea = document.getElementById("try-loading-area");
  const outputContent = document.getElementById("try-output-content");

  if (loadingArea) loadingArea.classList.remove("hidden");
  if (resultArea) resultArea.classList.add("hidden");

  let inferredCategory = "其他";
  let inferredCatName = t('cat_other');
  let mockSimImg = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80";

  if (name.includes("絲巾") || name.includes("皮帶") || name.includes("鞋") || name.includes("帽子") || name.toLowerCase().includes("scarf") || name.toLowerCase().includes("belt") || name.toLowerCase().includes("shoe") || name.toLowerCase().includes("hat")) {
    inferredCategory = "閒置配飾";
    inferredCatName = t('cat_accessory');
    mockSimImg = "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80";
  } else if (name.includes("襯衫") || name.toLowerCase().includes("shirt")) {
    inferredCategory = "襯衫";
    inferredCatName = t('cat_shirt');
    mockSimImg = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80";
  } else if (name.includes("牛仔") || name.includes("丹寧") || name.toLowerCase().includes("jean") || name.toLowerCase().includes("denim")) {
    inferredCategory = "丹寧/牛仔";
    inferredCatName = t('cat_denim');
    mockSimImg = "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80";
  } else if (name.includes("T") || name.includes("衛衣") || name.toLowerCase().includes("tee") || name.toLowerCase().includes("sweat")) {
    inferredCategory = "T恤/衛衣";
    inferredCatName = t('cat_tee');
    mockSimImg = "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80";
  } else if (name.includes("西裝") || name.includes("外套") || name.toLowerCase().includes("blazer") || name.toLowerCase().includes("suit")) {
    inferredCategory = "西裝外套";
    inferredCatName = t('cat_blazer');
    mockSimImg = "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80";
  } else if (name.includes("裙") || name.includes("洋裝") || name.toLowerCase().includes("dress") || name.toLowerCase().includes("skirt")) {
    inferredCategory = "洋裝/裙裝";
    inferredCatName = t('cat_dress');
    mockSimImg = "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80";
  }

  setTimeout(() => {
    if (loadingArea) loadingArea.classList.add("hidden");

    let remakeTitle = "";
    let diff = "新手友好";
    let estTime = "30m";

    if (mode === "穿搭搭配") {
      remakeTitle = currentLang === "en" ? `${targetStyle} Layered Styling Restyle` : currentLang === "ja" ? `${targetStyle} スタイリング再構築` : `${targetStyle.split("/")[0]} 俐落層次穿搭重構`;
      diff = "新手友好";
      estTime = "15m";
    } else if (mode === "結構微改") {
      remakeTitle = currentLang === "en" ? `Bespoke Utility Restyle × Handcrafted Accent` : currentLang === "ja" ? `手仕事ディテール × 立体リメイク` : `短版箱型 (Boxy) 剪裁 × 抽繩微工藝重塑`;
      diff = "微工藝";
      estTime = "40m";
    } else {
      remakeTitle = currentLang === "en" ? `Functional Co-ord & Accessory Restructure` : currentLang === "ja" ? `多機能セパレート＆小物リメイク` : `結構翻新：多功能立體重構方案`;
      diff = "裁縫進階";
      estTime = "75m";
    }

    const enPrompt = `Editorial fashion photograph of an upcycled ${name} (${material}) creatively restructured into ${remakeTitle}, styled in ${targetStyle}, high-end studio lighting, 35mm lens, high detail --ar 4:5 --v 6.0`;

    const stylingSugg = currentLang === "en" ? [
      `【Color Coordination】：Style with neutral earth tones or crisp white basics to make the upcycled "${targetStyle}" piece pop.`,
      `【Accent Placement】：Use as an unexpected statement piece to shift visual weight away from "${pain}".`,
      `【Functional Layering】：Integrate into daily outfits effortlessly for both casual and semi-formal occasions.`
    ] : currentLang === "ja" ? [
      `【カラーリンク】：ニュートラルカラーや白Tなどベーシック服に合わせ、「${targetStyle}」を引き立たせる。`,
      `【視線誘導テクニック】：小物をアクセントにして「${pain}」から自然に視線を逸らす。`,
      `【実用的な着回し】：カジュアルからモードまで、毎日のスタイリングに手軽に取り入れる。`
    ] : [
      `【視覺亮點聚焦】：搭配純色極簡基底，讓重構後的「${targetStyle}」單品成為全身唯一的視覺焦點。`,
      `【比例轉移法則】：巧妙利用配件或短版剪裁，將視覺重心從「${pain}」轉移開來。`,
      `【日常實穿搭配】：兼具手作工藝感與街頭隨性美學，適配各種休閒或微正裝場合。`
    ];

    const stepsList = currentLang === "en" ? [
      `【Analyze & Chalk】：Mark modification reference lines addressing "${pain}", reserving 2cm allowance.`,
      `【Cut & Clean】：Use sharp fabric shears or leather punch to trim cleanly along planned lines.`,
      `【Assemble & Finish】：Add hardware snaps, elastic casing, or bias binding to achieve a durable finish.`
    ] : currentLang === "ja" ? [
      `【ライン出し】：着用または平置きして「${pain}」を解消する加工ラインをマークします。`,
      `【裁断・加工】：専用ハサミやポンチを使って丁寧にカットし、余計な厚みを落とします。`,
      `【金具・縫製】：スナップやバイアステープを取り付けて耐久性のある仕上がりに。`
    ] : [
      `【標記修剪線】：穿上或平鋪標記改善「${pain}」的關鍵基準線，預留適當折邊。`,
      `【平整裁切】：使用專用剪刀沿記號平順剪開，去除破損或多餘結構。`,
      `【五金與包邊組裝】：縫製抽繩道、安裝黃銅扣環或進行邊緣鎖邊收口。`
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
      beforeImage: mockSimImg,
      afterImage: mockSimImg,
      painPoints: [
        `${pain}`,
        `${material}`
      ],
      stylingSuggestions: stylingSugg,
      remakeConcept: {
        tools: currentLang === "en" ? ["Fabric shears", "Needles & thread", "Hardware snaps"] : currentLang === "ja" ? ["ハサミ", "針と糸", "留め具"] : ["專用剪刀", "手縫針線", "五金配件"],
        steps: stepsList,
        proTip: currentLang === "en" ? "Double check measurements before applying any cuts!" : currentLang === "ja" ? "ハサミを入れる前に全体のバランスを再確認しましょう！" : "動手前務必先假固定比對，確認比例完美再動刀！"
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

        <!-- 試用結果包含即時 AI 模擬預覽圖 -->
        <div class="mb-5 rounded-xl overflow-hidden border border-emerald-500/30 relative h-48 bg-neutral-900">
          <img src="${escapeHtml(mockSimImg)}" alt="AI Simulation Preview" class="w-full h-full object-cover filter brightness-95">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div class="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold bg-black/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
            ✨ ${t('card_ai_badge')}
          </div>
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-200">
            <span class="font-bold text-emerald-300">${escapeHtml(name)} ➔ ${escapeHtml(remakeTitle)}</span>
            <span class="text-[11px] text-neutral-400">Midjourney v6.0</span>
          </div>
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

    showToast("AI proposal generated with simulation preview!", "success");
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

function openCreateModal() {
  appState.editingCaseId = null;
  const modal = document.getElementById("edit-modal");
  const title = document.getElementById("edit-modal-title");
  const form = document.getElementById("edit-case-form");
  if (!modal || !form) return;

  if (title) title.textContent = "✨ " + t('btn_new_case');
  form.reset();

  document.getElementById("form-category").value = "閒置配飾";
  document.getElementById("form-difficulty").value = "微工藝";
  document.getElementById("form-time").value = "30 分鐘";

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
    beforeImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
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
      caseData.beforeImage = appState.cases[index].beforeImage || caseData.beforeImage;
      caseData.afterImage = appState.cases[index].afterImage || caseData.afterImage;
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

document.addEventListener("DOMContentLoaded", () => {
  if (currentLang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
  }

  loadInitialData();
  updateStaticTexts();
  renderCasesGrid();
  updateStatsCounter();

  const langSelect = document.getElementById("language-select");
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", (e) => {
      switchLanguage(e.target.value);
    });
  }

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

  const diffSelect = document.getElementById("filter-difficulty");
  if (diffSelect) {
    diffSelect.addEventListener("change", (e) => {
      appState.activeDifficulty = e.target.value;
      renderCasesGrid();
    });
  }

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value;
      renderCasesGrid();
    });
  }

  const caseForm = document.getElementById("edit-case-form");
  if (caseForm) caseForm.addEventListener("submit", handleCaseFormSubmit);

  const tryForm = document.getElementById("try-generator-form");
  if (tryForm) tryForm.addEventListener("submit", generateAIProposal);

  const fileInput = document.getElementById("import-file-input");
  if (fileInput) fileInput.addEventListener("change", handleFileImport);
});
