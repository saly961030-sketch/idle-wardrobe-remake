// RE:CLOTHES 拾衣研究所 - 多語系資料庫 (含衣物與配飾改造、AI 概念模擬圖)

const PRESET_CASES = [
  {
    id: "case-1",
    category: "襯衫",
    difficulty: "微工藝",
    estimatedTime: "45 分鐘",
    coverColor: "from-blue-600/20 to-indigo-900/40",
    icon: "shirt",
    beforeImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    translations: {
      "zh-TW": {
        originalItem: "寬鬆落肩格紋襯衫",
        remakeDirection: "日系短版層次抽繩罩衫",
        categoryName: "襯衫",
        difficultyName: "微工藝",
        estimatedTime: "45 分鐘",
        painPoints: [
          "衣長過長遮蓋骨盆與大腿，視覺比例嚴重下沉顯矮",
          "大格子藍色棉質版型缺乏挺度，單穿容易顯得慵懶無精神或過於家居",
          "肩線嚴重下落，若當成一般正裝外衣穿著缺乏立體剪裁感"
        ],
        stylingSuggestions: [
          "【解釦打結法】：下擺倒數 3 顆釦子解開，兩側下襬在肚臍上方交叉打平結，營造天然高腰視覺。",
          "【白高領層次穿搭】：內搭合身高領白色素面打底衫，外罩短版改造襯衫，露出立領與手腕層次。",
          "【下身適配】：搭配深炭灰打褶闊腿西裝褲與厚底樂福鞋，利用「上短下長」黃金比例平衡寬鬆格紋的休閒感。"
        ],
        remakeConcept: {
          tools: ["布剪", "手縫針線或迷你縫紉機", "穿帶器", "棉質扁抽繩 1.2 米"],
          steps: [
            "【水平定位剪裁】：穿上襯衫並標記肚臍上方 3 公分處，取下後畫出水平基準線，預留 2.5 公分摺邊份量後平整剪開。",
            "【下擺縫製抽繩道】：將預留的 2.5 公分下擺向上內折兩次，以平針縫製出一條寬約 1.2 公分的通風抽繩管道，兩側前襟處預留出繩口。",
            "【穿入抽繩與領口修飾】：利用穿帶器將抽繩穿過下擺管道，兩端打八字結；領口翻領向內燙折 1 公分壓線，改為俐落的立領/小古巴領。"
          ],
          proTip: "剪下來的多餘下擺布料不要丟棄！可裁成 5x5cm 小方塊，縫製成隨身耳機收納小袋或胸前同花色撞色小口袋。"
        },
        promptRecord: {
          promptEn: "Editorial fashion photograph of an upcycled oversized blue plaid shirt transformed into a modern Japanese cropped boxy utility overshirt with adjustable hem drawstring, paired with high-waisted charcoal pleated wide trousers, clean studio lighting, 35mm lens, high detail --ar 4:5 --v 6.0",
          promptZh: "時尚大片寫真：一件改造後的過大藍色格紋襯衫，重構成現代日系短版俐落罩衫，下擺帶有可調節抽繩，搭配高腰炭灰色打褶寬褲，純淨攝影棚光影，35mm鏡頭，高精緻度細節。",
          engine: "Midjourney v6.0",
          purpose: "視覺化預覽下擺剪短後的箱型 (Boxy) 輪廓與下身搭配比例"
        }
      },
      "en": {
        originalItem: "Oversized Plaid Flannel Shirt",
        remakeDirection: "Japanese Cropped Boxy Drawstring Overshirt",
        categoryName: "Shirts",
        difficultyName: "Light Craft",
        estimatedTime: "45 mins",
        painPoints: [
          "Excessive length covers hips and thighs, heavily weighing down visual proportions",
          "Loose cotton flannel lacks structural stiffness, looking sloppy or pajama-like when worn alone",
          "Extreme dropped shoulders feel shapeless without modern tailoring"
        ],
        stylingSuggestions: [
          "【Unbutton & Knot】：Unfasten bottom 3 buttons, cross and knot tails at navel for an instant high-waist crop.",
          "【White Turtleneck Layering】：Layer over a slim-fit white turtleneck, leaving collar and cuffs peeking out.",
          "【Bottom Styling】：Pair with charcoal pleated wide-leg trousers and lug-sole loafers for a 'short top, long legs' silhouette."
        ],
        remakeConcept: {
          tools: ["Fabric shears", "Needle & thread / Mini sewing machine", "Bodkin threader", "1.2m Flat cotton drawstring"],
          steps: [
            "【Mark & Crop】：Wear shirt and mark 3cm above navel. Draw horizontal cutting line with 2.5cm hem allowance and cut cleanly.",
            "【Create Drawstring Channel】：Fold raw hem inward twice and stitch a 1.2cm casing, leaving openings at front plackets.",
            "【Thread Cord & Modify Collar】：Thread drawstring through casing and tie ends; press down collar edges for a clean camp/mandarin look."
          ],
          proTip: "Don't discard trimmed lower fabric! Sew it into a matching earbud pouch or a chest contrast pocket."
        },
        promptRecord: {
          promptEn: "Editorial fashion photograph of an upcycled oversized blue plaid shirt transformed into a modern Japanese cropped boxy utility overshirt with adjustable hem drawstring, paired with high-waisted charcoal pleated wide trousers, clean studio lighting, 35mm lens, high detail --ar 4:5 --v 6.0",
          promptZh: "High-fashion lookbook: an upcycled oversized blue plaid shirt restructured into a boxy cropped Japanese overshirt with drawstring hem.",
          engine: "Midjourney v6.0",
          purpose: "Visualize the cropped boxy silhouette and proportions when paired with tailored trousers"
        }
      },
      "ja": {
        originalItem: "オーバーサイズチェックシャツ",
        remakeDirection: "和風クロップドレイヤードドローストリングシャツ",
        categoryName: "シャツ",
        difficultyName: "ミニクラフト",
        estimatedTime: "45 分",
        painPoints: [
          "着丈が長すぎて腰や太ももを覆い、全体の重心が下がって見えてしまう",
          "柔らかいコットン生地のため立体感が出ず、部屋着のように見えやすい",
          "肩線が落ちすぎていて、アウターとして着るとだらしない印象になる"
        ],
        stylingSuggestions: [
          "【裾結びアレンジ】：下のボタンを3つ外し、おへそ上でクロスして結ぶことでスタイルアップ効果。",
          "【白タートルレイヤード】：タイトな白タートルネックに重ね着し、襟元と袖口でメリハリを演出。",
          "【ボトムスの合わせ方】：チャコールグレーのプリーツワイドパンツとローファーで上品なシティボーイスタイルに。"
        ],
        remakeConcept: {
          tools: ["布切りバサミ", "針と糸（またはミシン）", "紐通し", "綿平紐 1.2m"],
          steps: [
            "【丈のカット】：おへそ上3cmの位置をマークし、縫い代2.5cmを残してまっすぐカットします。",
            "【紐通し口の縫製】：裾を2回三つ折りにしてステッチをかけ、左右の前立てに紐の出口を作ります。",
            "【紐通しと襟の調整】：紐を通して端を結び、襟はアイロンで折ってスタンドカラー風にすっきり整えます。"
          ],
          proTip: "切り落とした余り布は、ワイヤレスイヤホン入れや胸元のワンポイントポケットに再利用できます！"
        },
        promptRecord: {
          promptEn: "Editorial fashion photograph of an upcycled oversized blue plaid shirt transformed into a modern Japanese cropped boxy utility overshirt with adjustable hem drawstring, paired with high-waisted charcoal pleated wide trousers, clean studio lighting, 35mm lens, high detail --ar 4:5 --v 6.0",
          promptZh: "チェックシャツを和風クロップド丈に再構築したルックブック写真。",
          engine: "Midjourney v6.0",
          purpose: "クロップド丈のボクシーシルエットとワイドパンツのバランス検証"
        }
      }
    }
  },
  {
    id: "case-2",
    category: "丹寧/牛仔",
    difficulty: "裁縫進階",
    estimatedTime: "90 分鐘",
    coverColor: "from-sky-700/20 to-blue-950/40",
    icon: "briefcase",
    beforeImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    translations: {
      "zh-TW": {
        originalItem: "褪色直筒老爹牛仔褲",
        remakeDirection: "雙色拼接多口袋工裝托特包",
        categoryName: "丹寧/牛仔",
        difficultyName: "裁縫進階",
        estimatedTime: "90 分鐘",
        painPoints: [
          "膝蓋部位因長期穿著鼓包變形，無法再呈現俐落的腿部線條",
          "水洗刷色嚴重不均勻且褲襠版型過低，走路時容易卡襠不適",
          "褲腳邊緣嚴重磨損踩爛，修改長度後版型容易失真"
        ],
        stylingSuggestions: [
          "【原單品過渡穿搭】：在改造前若想短暫穿著，可大膽將褲管反摺兩折至九分露踝，外搭同色系水洗牛仔外套做 Denim-on-Denim 街頭風。",
          "【改造包款穿搭】：重構為托特包後，極適合作為日常通勤書包或筆電包，搭配極簡米白米色風衣或工裝連帽衫，散發隨性俐落的手作工藝美感。"
        ],
        remakeConcept: {
          tools: ["厚布專用重型剪刀", "拆線器", "強力丹寧縫紉針 (16號)", "內襯帆布 0.5 碼", "金屬四合扣"],
          steps: [
            "【主袋身塑形】：將牛仔褲平鋪，在襠部下方 5 公分處水平切斷兩條褲管。拆開襠部前後弧線，前後拼平後車縫，縫合底部形成托特包主袋結構。",
            "【後口袋再利用】：褲子後方原本的兩個五角形後口袋完整保留在包包外側，天然成為隨手取放手機、票卡與鑰匙的機能口袋。",
            "【褲管改提把與內襯】：利用剪下來的褲腿布裁出兩條寬 4 公分、長 60 公分的背帶；內部車縫防水米色帆布內裡並加裝拉鍊小暗袋。"
          ],
          proTip: "牛仔褲腰頭的金屬鈕扣與皮牌皮標可直接保留在包包正中央，保留古著丹寧的經典身分認證標誌！"
        },
        promptRecord: {
          promptEn: "Close-up artisan craftsmanship product photo of a tote bag upcycled from distressed vintage light-wash denim pants, featuring original back pockets for phone storage, thick brass zipper, durable canvas handles, warm workshop background, soft natural sunlight --ar 1:1 --v 6.0",
          promptZh: "近景工藝品展示：一只由復古刷白刷舊牛仔長褲重製而成的托特包，保留原始後口袋作為手機收納袋，厚實黃銅拉鍊，耐用帆布提把，溫暖手作工作坊背景，柔和自然光。",
          engine: "Midjourney v6.0",
          purpose: "驗證保留牛仔褲後口袋與腰頭皮標作為包袋外觀結構之美感"
        }
      },
      "en": {
        originalItem: "Faded Straight Vintage Jeans",
        remakeDirection: "Two-Tone Patchwork Utility Denim Tote",
        categoryName: "Denim",
        difficultyName: "Advanced",
        estimatedTime: "90 mins",
        painPoints: [
          "Baggy stretched knees no longer provide a clean leg silhouette",
          "Uneven acid wash and outdated low-rise crotch cause discomfort",
          "Frayed and stepped-on hems distort the overall cut if simply hemmed"
        ],
        stylingSuggestions: [
          "【Transition Styling】：Before cutting, cuff twice to 9/10 length with matching denim jacket for a bold Denim-on-Denim look.",
          "【Upcycled Bag Styling】：As a functional tote, it pairs effortlessly with beige trench coats or oversized hoodies for an artisanal urban vibe."
        ],
        remakeConcept: {
          tools: ["Heavy-duty fabric shears", "Seam ripper", "Denim needles (#16)", "0.5yd Canvas lining", "Brass snaps"],
          steps: [
            "【Form Main Bag】：Cut off legs 5cm below crotch. Unpick crotch curve, flatten panels, and stitch bottom to create main tote body.",
            "【Repurpose Back Pockets】：Keep the iconic original rear pockets on bag exterior for easy smartphone and card access.",
            "【Straps & Interior Lining】：Cut 4cm x 60cm shoulder straps from leftover leg fabric; stitch water-resistant canvas lining inside with zip pocket."
          ],
          proTip: "Keep the original waist button and leather back-patch at the center as vintage authenticity badges!"
        },
        promptRecord: {
          promptEn: "Close-up artisan craftsmanship product photo of a tote bag upcycled from distressed vintage light-wash denim pants, featuring original back pockets for phone storage, thick brass zipper, durable canvas handles, warm workshop background, soft natural sunlight --ar 1:1 --v 6.0",
          promptZh: "Artisan product shot: upcycled denim tote keeping authentic back pockets and brass hardware.",
          engine: "Midjourney v6.0",
          purpose: "Evaluate structural beauty of keeping original denim pockets and waistband"
        }
      },
      "ja": {
        originalItem: "色褪せたストレートデニム",
        remakeDirection: "異素材パッチワーク多機能トートバッグ",
        categoryName: "デニム",
        difficultyName: "上級リメイク",
        estimatedTime: "90 分",
        painPoints: [
          "長年着用による膝の伸び・型崩れでシルエットが崩れてしまった",
          "色落ちのムラと深い股上で歩行時に窮屈感がある",
          "裾が擦り切れており、丈詰めだけではバランスが取りにくい"
        ],
        stylingSuggestions: [
          "【改造前の着こなし】：二つ折りロールアップでアンクル丈にし、同系色デニムジャケットと合わせたセットアップ風コーデ。",
          "【トートバッグの活用】：完成したバッグはA4収納可能で、トレンチコートやフーディーと相性抜群のクラフト感溢れる逸品に。"
        ],
        remakeConcept: {
          tools: ["厚地用ハサミ", "リッパー", "厚地ミシン針 (16号)", "帆布生地 0.5m", "真鍮スナップボタン"],
          steps: [
            "【本体の成形】：股下5cmで両足をカット。股の縫い目をほどいて平らに縫い合わせ、底マチを作ってバッグ本体にします。",
            "【バックポケットの活用】：元々の後ろポケットをそのまま外ポケットとして活かし、スマホや小銭入れを素早く出し入れ可能に。",
            "【持ち手と内布】：切り落とした脚部分から幅4cm×長さ60cmの持ち手を作り、内側には丈夫な帆布裏地を取り付けます。"
          ],
          proTip: "ウエストの金属ボタンやレザーパッチを正面中央に残すことで、ヴィンテージデニム本来の味を楽しめます！"
        },
        promptRecord: {
          promptEn: "Close-up artisan craftsmanship product photo of a tote bag upcycled from distressed vintage light-wash denim pants, featuring original back pockets for phone storage, thick brass zipper, durable canvas handles, warm workshop background, soft natural sunlight --ar 1:1 --v 6.0",
          promptZh: "ヴィンテージデニムから仕立てたトートバッグの物撮り写真。",
          engine: "Midjourney v6.0",
          purpose: "ポケットやパッチを活かしたバッグデザインのバランス確認"
        }
      }
    }
  },
  {
    id: "case-3",
    category: "T恤/衛衣",
    difficulty: "新手友好",
    estimatedTime: "30 分鐘",
    coverColor: "from-stone-400/20 to-neutral-800/40",
    icon: "sparkles",
    beforeImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    translations: {
      "zh-TW": {
        originalItem: "領口鬆弛變形素面白T恤",
        remakeDirection: "法式復古方領打底衫 × 刺繡滾邊",
        categoryName: "T恤/衛衣",
        difficultyName: "新手友好",
        estimatedTime: "30 分鐘",
        painPoints: [
          "羅紋領口洗滌多次後嚴重鬆弛呈荷葉邊，穿出門容易顯得邋遢缺乏精神",
          "傳統圓領版型過於普通，容易截斷頸部線條顯得臉型圓潤",
          "棉質布料本身依然親膚柔軟，直接丟入垃圾桶極為浪費"
        ],
        stylingSuggestions: [
          "【鎖骨亮點穿搭】：改為法式方領後，露出優雅鎖骨線條，配戴 1-2 條細金幣項鍊或珍珠短鍊，瞬間提升精緻感。",
          "【西裝內搭王者】：作為休閒西裝或粗花呢外套的打底衫，方領能在嚴肅的外套中注入輕熟法式隨性感。",
          "【下身搭配】：下著選擇法式高腰微喇叭藍色牛仔褲，上衣扎入腰際，打造簡約不費力的 Parisienne 風格。"
        ],
        remakeConcept: {
          tools: ["布用標記粉筆", "極細布剪", "刺繡線與手縫針", "彈性襯條或透明彈力線"],
          steps: [
            "【標定方領輪廓】：穿在身上於鎖骨下方 2 公分與肩頸點畫出方領幾何直角參考點，脫下後用尺修整成對稱的俐落方領形狀。",
            "【修剪與防捲邊固定】：沿記號線平穩剪掉原本鬆垮的荷葉邊圓領，領緣向內折 0.8 公分，以雙針彈性平針進行壓縫避免捲邊。",
            "【手工微刺繡裝飾】：在方領轉角處或左胸位置，使用鼠尾草綠刺繡線手縫極簡植物枝葉輪廓，賦予單品獨一無二的客製靈魂。"
          ],
          proTip: "若擔心方形轉角處縫線不服貼，可在內側轉折處剪一個 2 毫米的斜向牙口，壓燙後立刻平整服貼！"
        },
        promptRecord: {
          promptEn: "Studio editorial portrait of a woman wearing an upcycled minimal white t-shirt featuring a tailored square neckline and delicate green botanic single-line embroidery, paired with gold layered pendants, soft warm beige backdrop, Vogue aesthetic --ar 3:4 --v 6.0",
          promptZh: "攝影棚時尚肖像：女性身穿一件改造後的極簡白T恤，呈現剪裁俐落的法式方領與細緻綠色單線植物刺繡，配戴金色層次項鍊，柔和暖米色背景，Vogue 雜誌美學。",
          engine: "Midjourney v6.0",
          purpose: "探索方領剪裁角度與鎖骨珠寶配搭之視覺平衡"
        }
      },
      "en": {
        originalItem: "Stretched Crewneck White Cotton Tee",
        remakeDirection: "French Vintage Square-Neck Top with Botanic Embroidery",
        categoryName: "T-Shirts & Sweats",
        difficultyName: "Beginner",
        estimatedTime: "30 mins",
        painPoints: [
          "Ribbed neckline stretched into wavy bacon neck after repeated washing",
          "Standard round neck cuts off collarbone lines, making face appear rounder",
          "Soft, premium cotton fabric remains in great shape, too wasteful to throw away"
        ],
        stylingSuggestions: [
          "【Collarbone Highlights】：Square neckline flatters the decolletage; pair with layered gold coin pendants or pearl choker.",
          "【Blazer Innerwear】：Acts as the perfect base under tailored blazers or tweed jackets, injecting effortless French chic.",
          "【Bottom Styling】：Tuck into high-waisted flared vintage blue denim for quintessential Parisienne cool."
        ],
        remakeConcept: {
          tools: ["Tailor's chalk", "Fine fabric scissors", "Embroidery floss & needle", "Elastic stay-tape"],
          steps: [
            "【Mark Square Geometry】：Wear tee and mark right angles 2cm below clavicle. Take off and square lines symmetrically.",
            "【Trim & Hem】：Cut away bacon neck along chalk line. Fold raw edge inward 0.8cm and stretch-stitch to prevent curling.",
            "【Botanical Line Stitch】：Embroider minimal sage-green botanical leaf line at collar corner or left chest for bespoke charm."
          ],
          proTip: "Clip tiny 2mm diagonal snips at the square corner seams before pressing with steam iron for razor-sharp flat corners!"
        },
        promptRecord: {
          promptEn: "Studio editorial portrait of a woman wearing an upcycled minimal white t-shirt featuring a tailored square neckline and delicate green botanic single-line embroidery, paired with gold layered pendants, soft warm beige backdrop, Vogue aesthetic --ar 3:4 --v 6.0",
          promptZh: "Studio portrait: minimal square-neck upcycled tee with delicate green line embroidery.",
          engine: "Midjourney v6.0",
          purpose: "Explore the aesthetic balance between neckline angle and delicate accessories"
        }
      },
      "ja": {
        originalItem: "首元が伸びた無地白Tシャツ",
        remakeDirection: "フレンチスクエアネックトップス × 手刺繍ライン",
        categoryName: "Tシャツ・スウェット",
        difficultyName: "初心者向け",
        estimatedTime: "30 分",
        painPoints: [
          "洗濯を重ねて首元のリブが波打ち（ヨレヨレになり）清潔感が失われた",
          "ありきたりなクルーネックは首元が詰まって見え、顔周りが重たい印象に",
          "肌触りの良い上質な綿100%素材なので、捨ててしまうのはもったいない"
        ],
        stylingSuggestions: [
          "【デコルテ魅せコーデ】：スクエアネックで鎖骨を綺麗に見せ、ゴールドコインネックレスと合わせて上品に。",
          "【ジャケットのインナー】：テーラードジャケットやツイードカーディガンの中に着るだけで洗練されたパリジェンヌ風に。",
          "【デニムとの相性】：ハイウエストのフレアデニムにインして、抜け感のある大人カジュアルを演出。"
        ],
        remakeConcept: {
          tools: ["チャコペン", "布切りハサミ", "刺繍針と刺繍糸", "ニット用伸び止めテープ"],
          steps: [
            "【スクエアラインの下書き】：着用して鎖骨下2cmと肩先に印をつけ、左右対称の四角いラインを引きます。",
            "【カットと端処理】：ヨレたリブを切り落とし、縁を0.8cm内側に折って伸縮性のあるステッチで押さえます。",
            "【ワンポイント手刺繍】：襟の角または左胸に、セージグリーンの糸で繊細な植物ラインを手刺繍して完成。"
          ],
          proTip: "四角い角の内側に2mmだけ斜めに切り込みを入れてからアイロンをかけると、シワなく綺麗な直角に仕上がります！"
        },
        promptRecord: {
          promptEn: "Studio editorial portrait of a woman wearing an upcycled minimal white t-shirt featuring a tailored square neckline and delicate green botanic single-line embroidery, paired with gold layered pendants, soft warm beige backdrop, Vogue aesthetic --ar 3:4 --v 6.0",
          promptZh: "白Tを上品なスクエアネックにリメイクしたスタジオポートレート。",
          engine: "Midjourney v6.0",
          purpose: "襟元の開き具合と首元アクセサリーのバランス検証"
        }
      }
    }
  },
  {
    id: "case-4",
    category: "西裝外套",
    difficulty: "裁縫進階",
    estimatedTime: "120 分鐘",
    coverColor: "from-zinc-600/20 to-slate-900/50",
    icon: "scissors",
    beforeImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
    translations: {
      "zh-TW": {
        originalItem: "過時寬肩長版雙排扣西裝",
        remakeDirection: "俐落短版露腰西裝 × 拆卸式封腰",
        categoryName: "西裝外套",
        difficultyName: "裁縫進階",
        estimatedTime: "120 分鐘",
        painPoints: [
          "厚重的大墊肩讓骨架顯得過於魁武，彷彿 80 年代橄欖球員缺乏當代休閒感",
          "長度過臀甚至及大腿中段，在亞洲人身形上極易壓低視覺重心",
          "羊毛混紡質料極佳且剪裁精美，但整體廓形與現代極簡穿搭格格不入"
        ],
        stylingSuggestions: [
          "【露腰時髦穿搭】：短版西裝內搭極簡黑色削肩 Bra Top，小露腹部肌膚，破解西裝外套的沉悶拘謹。",
          "【垂墜落地褲配搭】：下身配搭同色系垂墜超長闊腿褲與厚底球鞋，營造大長腿的比例分割。",
          "【金屬飾品點綴】：佩戴銀色粗曠手鍊與冷淡風金屬耳骨夾，強調俐落中性的幹練氣場。"
        ],
        remakeConcept: {
          tools: ["拆線刀", "熨斗與燙墊", "重磅縫紉機", "暗扣 2 組", "同色系嫘縈內裡布"],
          steps: [
            "【拆解沉重厚墊肩】：從袖圈內側拆開 5 公分小口，取出原本厚實的硬質海綿墊肩，換為極薄棉質定型襯，使肩線自然順滑。",
            "【腰線齊平截斷】：穿上後於肋骨下緣與肚臍之間標記截短線，保留 4 公分下襬反折與內裡包邊裕量後平直裁斷。",
            "【下擺縫製與封腰製作】：將外層毛料與內裡對折暗針車縫收口；切除的下半截衣襬保留鈕扣門襟，改製為一條可單獨拆卸搭配的結構感腰帶。"
          ],
          proTip: "西裝內裡光滑易滑動，裁剪前務必用大量珠針將表布與裡布水平固定，才能確保裁切邊緣絕對齊平！"
        },
        promptRecord: {
          promptEn: "Runway street style shot of a woman wearing a reconstructed cropped charcoal grey wool blazer with clean raw edges, matching high-rise fluid tailored trousers, minimalist black crop top beneath, urban concrete architectural setting, overcast cinematic light --ar 4:5 --v 6.0",
          promptZh: "伸展台街拍：女性身穿一件重構炭灰色短版毛料西裝外套，帶有俐落收邊，搭配同色高腰垂墜西裝長褲，內搭極簡黑色短背心，城市清水模建築背景，沉穩電影感漫射光影。",
          engine: "Midjourney v6.0",
          purpose: "評估去除墊肩並短版化後，在街頭風格中的實穿與時尚張力"
        }
      },
      "en": {
        originalItem: "Vintage Padded Double-Breasted Blazer",
        remakeDirection: "Tailored Cropped Waist-Cut Blazer with Detachable Corset Belt",
        categoryName: "Blazers & Suits",
        difficultyName: "Advanced",
        estimatedTime: "120 mins",
        painPoints: [
          "Heavy retro shoulder pads look overly bulky like 80s football gear",
          "Thigh-covering tunic length drastically suppresses height and proportions",
          "Exquisite wool blend material wasted inside an outdated, stiff box silhouette"
        ],
        stylingSuggestions: [
          "【Midriff Silhouette】：Wear cropped blazer over a minimal black racerback bra top to break traditional suit stiffness.",
          "【Fluid Wide Trousers】：Pair with matching ultra-high-rise puddle trousers and chunky sneakers for runway leg proportions.",
          "【Cool Metal Accents】：Layer bold silver chain bracelets and architectural ear cuffs for an effortless chic edge."
        ],
        remakeConcept: {
          tools: ["Seam ripper", "Steam iron", "Heavy-duty sewing machine", "Snap fasteners", "Rayon lining fabric"],
          steps: [
            "【Remove Heavy Pads】：Open a 5cm slit inside armhole lining to remove dense foam pads, replacing with ultrathin wadding for soft drape.",
            "【Mark & Crop at Waist】：Mark cut line between ribcage and navel; leave 4cm hem and lining allowance before straight cutting.",
            "【Finish Hem & Make Belt】：Blind-stitch shell and lining hem; repurpose severed lower tunic and original buttons into a detachable waist corset belt."
          ],
          proTip: "Suit lining is slippery! Pin face fabric and lining extensively with ball-point pins before shears touch the wool!"
        },
        promptRecord: {
          promptEn: "Runway street style shot of a woman wearing a reconstructed cropped charcoal grey wool blazer with clean raw edges, matching high-rise fluid tailored trousers, minimalist black crop top beneath, urban concrete architectural setting, overcast cinematic light --ar 4:5 --v 6.0",
          promptZh: "Runway street snap: restructured cropped charcoal wool blazer styled with fluid high-rise trousers.",
          engine: "Midjourney v6.0",
          purpose: "Evaluate style tension of removing shoulder pads and cropping waist"
        }
      },
      "ja": {
        originalItem: "肩パッド入りダブルブレストジャケット",
        remakeDirection: "クロップドショートジャケット × 着脱式ウエストベルト",
        categoryName: "ジャケット",
        difficultyName: "上級リメイク",
        estimatedTime: "120 分",
        painPoints: [
          "分厚い肩パッドでいかり肩に見え、80年代レトロすぎて日常使いしにくい",
          "お尻まで隠れる長すぎる着丈で、全体のバランスが重く見えてしまう",
          "上質なウール混紡生地なのに、古臭いシルエットのせいで眠ったまま"
        ],
        stylingSuggestions: [
          "【クロップド丈の肌見せ】：ショート丈ジャケットの中に黒のクロップドキャミを合わせ、抜け感を演出。",
          "【落ち感ワイドパンツ】：同系色のとろみワイドパンツと厚底スニーカーで、抜群の脚長効果。",
          "【シルバーアクセ】：ボリュームのあるシルバージュエリーをプラスして、モードで洗練された雰囲気に。"
        ],
        remakeConcept: {
          tools: ["リッパー", "アイロン", "ミシン", "スナップボタン", "裏地用レーヨン布"],
          steps: [
            "【肩パッドの除去】：袖ぐり裏地を少しほどいて分厚いパッドを取り出し、極薄の芯地に替えて自然なドロップショルダーに。",
            "【ウエスト丈でカット】：おへそ上の位置で水平にカットし、表地と裏地を縫い代4cm残して綺麗に折り返します。",
            "【裾の始末とベルト作成】：裾をまつり縫いで閉じ、切り離した裾部分はボタンを活かして着脱可能なコルセット風ベルトに仕立てます。"
          ],
          proTip: "裏地は滑りやすいため、ハサミを入れる前にまち針でしっかり固定するのが綺麗に仕上げるコツです！"
        },
        promptRecord: {
          promptEn: "Runway street style shot of a woman wearing a reconstructed cropped charcoal grey wool blazer with clean raw edges, matching high-rise fluid tailored trousers, minimalist black crop top beneath, urban concrete architectural setting, overcast cinematic light --ar 4:5 --v 6.0",
          promptZh: "チャコールグレーのウールジャケットをクロップド丈に再構築したランウェイ写真。",
          engine: "Midjourney v6.0",
          purpose: "肩パッド除去とショート丈化によるモードなプロポーションの確認"
        }
      }
    }
  },
  {
    id: "case-5",
    category: "洋裝/裙裝",
    difficulty: "微工藝",
    estimatedTime: "60 分鐘",
    coverColor: "from-rose-800/20 to-stone-900/40",
    icon: "layers",
    beforeImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    translations: {
      "zh-TW": {
        originalItem: "過緊碎花長版雪紡洋裝",
        remakeDirection: "兩件式高腰開衩半身裙 + 復古露背法式小背心",
        categoryName: "洋裝/裙裝",
        difficultyName: "微工藝",
        estimatedTime: "60 分鐘",
        painPoints: [
          "腰圍尺寸過小，後背拉鍊難以完全拉上，久坐容易有壓迫感",
          "整件大面積繁密碎花穿上身容易顯得過於甜膩或帶有鄉村俗氣感",
          "下擺長度尷尬卡在小腿肚最粗的位置，視覺上極顯腿短"
        ],
        stylingSuggestions: [
          "【拆解單穿法】：半身裙搭配寬鬆純白粗針織毛衣或灰色大學T，用中性大面積純色平衡碎花的繁雜感。",
          "【背心甜酷混搭】：改造後的小背心外搭黑色皮質夾克與高腰工裝長褲，呈現「上身浪漫柔美 × 下身酷帥硬挺」的反差穿搭。",
          "【鞋款選擇】：搭配一雙黑色短靴或帆布鞋，擺脫傳統碎花洋裝只能配淑女鞋的呆板印象。"
        ],
        remakeConcept: {
          tools: ["拆線剪刀", "寬 3 公分彈力鬆緊帶", "穿帶針", "縫紉針線"],
          steps: [
            "【腰部分割分離】：沿洋裝原有的高腰接縫線將上半身與下半身裙片完全剪開拆離。",
            "【下半身裙腰鬆緊帶化】：在裙子頂部剪口向內折縫出 4 公分寬的腰頭通道，穿入符合腰圍舒適度的鬆緊帶並收口，側邊微拆 20 公分打造優雅側開衩。",
            "【上半身改綁帶露背小可愛】：將背部原本拉鍊拆除，兩側縫上同花色細綁帶，改為可自由調節鬆緊的法式交叉露背背心。"
          ],
          proTip: "雪紡面料容易抽絲脫線，剪開後立刻使用火機外焰微燒邊或使用布料防脫液固定邊緣！"
        },
        promptRecord: {
          promptEn: "Two-piece modern co-ord set upcycled from a vintage floral maxi dress: high-waisted midi skirt with side slit and backless tie-up crop top, styled with chunky boots and oversized leather bomber, urban street backdrop, warm golden hour sun flare --ar 4:5 --v 6.0",
          promptZh: "兩件式現代套裝，由復古碎花長洋裝改造重構：帶有側開衩的高腰中長裙與後背綁帶短背心，搭配厚底短靴與寬版皮夾克，都市街景背景，溫暖逆光夕陽金芒。",
          engine: "Midjourney v6.0",
          purpose: "模擬洋裝一分為二後的兩件式風格搭配與實穿可塑性"
        }
      },
      "en": {
        originalItem: "Tight Floral Print Maxi Chiffon Dress",
        remakeDirection: "2-Piece Slit High-Waist Midi Skirt & Backless Halter Top",
        categoryName: "Dresses & Skirts",
        difficultyName: "Light Craft",
        estimatedTime: "60 mins",
        painPoints: [
          "Waist is too tight, back zipper won't close smoothly and pinches when seated",
          "Full-body small floral print feels overly sweet or dated country kitsch",
          "Awkward calf-length hem visually cuts legs at their widest point"
        ],
        stylingSuggestions: [
          "【Separates Styling】：Pair the midi skirt with an oversized chunky cream knit sweater or grey sweatshirt to balance florals.",
          "【Sweet-and-Tough Contrast】：Style the crop top under an oversized black distressed leather bomber and relaxed cargo pants.",
          "【Footwear Switch】：Swap traditional ballet flats for lug-sole combat boots or vintage sneakers for modern edge."
        ],
        remakeConcept: {
          tools: ["Seam scissors", "3cm Wide elastic band", "Bodkin", "Needle and thread"],
          steps: [
            "【Split at Natural Waist】：Cut along existing empire waist seam line to cleanly separate bodice from skirt.",
            "【Elasticize Skirt Waist】：Fold upper edge of skirt inward to create 4cm casing, thread comfortable elastic, and open 20cm side slit.",
            "【Convert Bodice to Tie-Back Top】：Remove tight rear zipper and attach self-fabric straps for an adjustable criss-cross backless top."
          ],
          proTip: "Chiffon frays easily! Run edge sealant or pass raw edges swiftly near an outer lighter flame to stop fraying instantly!"
        },
        promptRecord: {
          promptEn: "Two-piece modern co-ord set upcycled from a vintage floral maxi dress: high-waisted midi skirt with side slit and backless tie-up crop top, styled with chunky boots and oversized leather bomber, urban street backdrop, warm golden hour sun flare --ar 4:5 --v 6.0",
          promptZh: "2-piece upcycled co-ord set from floral maxi dress: slit midi skirt and tie-back crop top.",
          engine: "Midjourney v6.0",
          purpose: "Simulate two-piece split co-ord versatility and street styling"
        }
      },
      "ja": {
        originalItem: "タイトな小花柄シフォンワンピース",
        remakeDirection: "2ピーススリットハイウエストスカート ＆ バックレスタンクトップ",
        categoryName: "ワンピース・スカート",
        difficultyName: "ミニクラフト",
        estimatedTime: "60 分",
        painPoints: [
          "ウエストがきつく背中のファスナーが上がらない、座ると苦しい",
          "全身の花柄が甘すぎて幼く見えたり、カントリー風になりすぎてしまう",
          "ふくらはぎの太い位置で終わる丈感で、足が短く見えやすい"
        ],
        stylingSuggestions: [
          "【セパレート使い】：スカートにはゆったりした白ニットやグレーのスウェットを合わせ、甘さを中和。",
          "【甘辛ミックス】：リメイクしたトップスにレザージャケットとカーゴパンツを合わせてモードに着こなす。",
          "【足元で引き締め】：パンプスではなく重厚感のあるサイドゴアブーツやスニーカーで今っぽく。"
        ],
        remakeConcept: {
          tools: ["裁縫用ハサミ", "3cm幅平ゴム", "ゴム通し", "針と糸"],
          steps: [
            "【ウエストで切り離し】：ワンピースの切り替えラインに沿ってハサミを入れ、上下に完全に分離します。",
            "【スカートのゴム通しとスリット】：スカートの上端を三つ折りにしてゴムを通し、サイドに20cmの上品なスリットを入れます。",
            "【トップスをリボン結び仕様に】：背中のファスナーを取り外し、紐を付けて後ろでクロスして結べるバックレストップスに改造。"
          ],
          proTip: "シフォン生地はほつれやすいため、切断面にほつれ止め液を塗るか、ライターの遠火で素早く炙るとほつれません！"
        },
        promptRecord: {
          promptEn: "Two-piece modern co-ord set upcycled from a vintage floral maxi dress: high-waisted midi skirt with side slit and backless tie-up crop top, styled with chunky boots and oversized leather bomber, urban street backdrop, warm golden hour sun flare --ar 4:5 --v 6.0",
          promptZh: "花柄ワンピースをスリットスカートとバックレストップスにリメイクした2ピースセット。",
          engine: "Midjourney v6.0",
          purpose: "セパレート化による着回し力とモダンなスタイリングの検証"
        }
      }
    }
  },
  {
    id: "case-6",
    category: "其他",
    difficulty: "新手友好",
    estimatedTime: "40 分鐘",
    coverColor: "from-amber-700/20 to-neutral-900/50",
    icon: "feather",
    beforeImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    translations: {
      "zh-TW": {
        originalItem: "洗水縮水變形粗針織毛衣",
        remakeDirection: "溫暖手作羊毛水桶帽 × 無指保暖手腕套",
        categoryName: "其他配件",
        difficultyName: "新手友好",
        estimatedTime: "40 分鐘",
        painPoints: [
          "誤丟入烘衣機造成羊毛纖維嚴重縮水毛氈化，身軀與袖口緊繃無法正常穿著",
          "毛衣表面部分起毛球，但毛線質料紮實溫暖防風",
          "傳統毛衣體積龐大佔據衣櫃收納空間，棄之可惜"
        ],
        stylingSuggestions: [
          "【冬季配件點綴】：重構為水桶帽後，能為深色系的羽絨外套或長版大衣增添溫暖自然的手工文青氛圍。",
          "【色彩呼應法則】：手腕套露在長袖大衣袖口外，與毛線帽顏色相互呼應，形成精緻連貫的冬季配件細節。",
          "【中性簡約風格】：搭配大地色系（駝色、焦糖、米白）針織圍巾，營造日系森林系自然氛圍。"
        ],
        remakeConcept: {
          tools: ["剪毛球器", "大眼毛線縫針", "同色粗毛線", "圓形紙型打版版型"],
          steps: [
            "【除毛球與袖身分離】：先以剪毛球器修整表面平整，然後沿著肩線完整剪下兩支袖管，保留身片主體。",
            "【水桶帽立體縫合】：利用毛衣身片下擺（保留原有羅紋作為帽沿），上方依照頭圍紙型剪出 4 片三角弧形瓣片，以毛線鎖邊針法縫合為圓弧帽頂。",
            "【手腕套免剪開口】：兩支袖管依照手掌長度剪裁為 18 公分長段，在拇指位置剪一個 2 公分小開口並用毛線密針鎖邊，即刻完成一對保暖無指手套。"
          ],
          proTip: "針織布料剪切後極易脫線，剪開前可在裁切線兩側塗抹稀釋白膠或用快乾平針壓線固定線圈！"
        },
        promptRecord: {
          promptEn: "Flatlay styling composition of cozy winter accessories handcrafted from upcycled chunky oatmeal knit sweater: a knit bucket hat and matching fingerless wrist warmers, placed on rustic wooden background with pinecones and hot cocoa --ar 1:1 --v 6.0",
          promptZh: "平鋪靜物穿搭構圖：由改造粗針織燕麥色毛衣手工重製的溫暖冬季配件，包含一頂毛線水桶帽與一對相配的無指手腕套，置於鄉村原木背景上，附帶松果與熱可可道具。",
          engine: "Midjourney v6.0",
          purpose: "確認毛氈化厚實針織重構成手套與帽子後的配件質感呈現"
        }
      },
      "en": {
        originalItem: "Shrunken Felted Cable Knit Sweater",
        remakeDirection: "Cozy Upcycled Wool Bucket Hat & Fingerless Wrist Warmers",
        categoryName: "Accessories",
        difficultyName: "Beginner",
        estimatedTime: "40 mins",
        painPoints: [
          "Accidentally tumble-dried, causing heavy wool felting and shrinkage impossible to wear",
          "Surface has minor pilling but the dense wool knit is exceptionally windproof and warm",
          "Bulky knit takes up closet space, yet throwing 100% wool away is heartbreaking"
        ],
        stylingSuggestions: [
          "【Winter Accessory Accent】：The upcycled bucket hat brings cozy artisan warmth to neutral wool overcoats or puffers.",
          "【Color Coordination】：Exposing matching knit wrist warmers from coat sleeves creates a cohesive winter accessory set.",
          "【Earthy Tonal Styling】：Pair with oatmeal, camel, and cream scarves for timeless Japanese Mori-girl aesthetic."
        ],
        remakeConcept: {
          tools: ["Fabric shaver", "Tapestry yarn needle", "Matching wool yarn", "Head circumference pattern"],
          steps: [
            "【De-pill & Detach Sleeves】：Shave surface smooth. Cut along armhole seams to detach both sleeves cleanly.",
            "【Assemble Bucket Hat】：Use lower ribbed sweater hem as hat brim; cut 4 curved petal panels from body and blanket-stitch into dome crown.",
            "【Convert Sleeves to Warmers】：Cut sleeves into 18cm segments; snip a 2cm thumb slit and lock-stitch edges with matching yarn."
          ],
          proTip: "Knit loops unravel quickly! Run a quick basting stitch or brush diluted craft glue along cut lines before cutting!"
        },
        promptRecord: {
          promptEn: "Flatlay styling composition of cozy winter accessories handcrafted from upcycled chunky oatmeal knit sweater: a knit bucket hat and matching fingerless wrist warmers, placed on rustic wooden background with pinecones and hot cocoa --ar 1:1 --v 6.0",
          promptZh: "Winter flatlay: bucket hat and fingerless warmers upcycled from chunky knit sweater.",
          engine: "Midjourney v6.0",
          purpose: "Confirm the cozy artisan aesthetic of transforming felted wool into accessories"
        }
      },
      "ja": {
        originalItem: "縮んで硬くなったケーブルニット",
        remakeDirection: "ほっこり手作りウールバケットハット ＆ 指なしリストウォーマー",
        categoryName: "小物・その他",
        difficultyName: "初心者向け",
        estimatedTime: "40 分",
        painPoints: [
          "乾燥機で縮んでフェルト化してしまい、胴回りも腕もキツくて着られなくなった",
          "多少の毛玉はあるものの、ウール本来の保温性と防風性は抜群に高い",
          "クローゼットでかさばるが、上質なウールを捨てるのは忍びない"
        ],
        stylingSuggestions: [
          "【冬のアクセントに】：バケットハットに生まれ変わることで、ロングコートやダウンに温もりあるアクセントをプラス。",
          "【カラーリンク】：コートの袖口からお揃いのリストウォーマーを覗かせることで、統一感のある冬の小物コーデに。",
          "【アースカラーコーデ】：ベージュ、キャメル、アイボリーのマフラーと合わせてほっこり北欧ナチュラル風に。"
        ],
        remakeConcept: {
          tools: ["毛玉取り器", "とじ針（毛糸用）", "同色の毛糸", "型紙"],
          steps: [
            "【毛玉取りと袖の切り離し】：表面を綺麗にし、肩の縫い目に沿って両袖を切り離します。",
            "【バケットハットの縫製】：セーターの裾リブを帽子のツバに活かし、身頃から4枚の花びら型を切り出して頭頂部を縫い合わせます。",
            "【アームウォーマーの作成】：袖部分を18cmの長さにカットし、親指用の穴を2cm開けて毛糸でブランケットステッチします。"
          ],
          proTip: "ニット生地は端がほつれやすいため、切るラインに沿ってあらかじめミシンや手縫いで捨てミシンをかけておくと安心です！"
        },
        promptRecord: {
          promptEn: "Flatlay styling composition of cozy winter accessories handcrafted from upcycled chunky oatmeal knit sweater: a knit bucket hat and matching fingerless wrist warmers, placed on rustic wooden background with pinecones and hot cocoa --ar 1:1 --v 6.0",
          promptZh: "縮んだニットから作ったバケットハットとアームウォーマーの平置き写真。",
          engine: "Midjourney v6.0",
          purpose: "フェルト化ニットを冬用小物にリメイクした際の質感と温かみの確認"
        }
      }
    }
  },
  // ==================== 閒置配飾專屬案例 (Accessories Remake) ====================
  {
    id: "case-7",
    category: "閒置配飾",
    difficulty: "新手友好",
    estimatedTime: "25 分鐘",
    coverColor: "from-fuchsia-600/20 to-purple-950/40",
    icon: "sparkles",
    beforeImage: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    translations: {
      "zh-TW": {
        originalItem: "印花繁複過時真絲長方巾",
        remakeDirection: "法式絲巾雲朵手提小包 × 復古大腸髮圈",
        categoryName: "閒置配飾",
        difficultyName: "新手友好",
        estimatedTime: "25 分鐘",
        painPoints: [
          "老式復古滿版花紋繫在脖子上容易顯老氣，平時穿搭難以駕馭",
          "真絲質地光滑極易滑落遺失，且保養繁瑣長年收在抽屜深處",
          "面料高級光澤柔美，棄之極為可惜"
        ],
        stylingSuggestions: [
          "【手袋提把纏繞法】：將改造後的絲巾小包作為隨身配件，或直接將髮圈繫在純黑托特包提把上，增添法式慵懶貴氣感。",
          "【極簡穿搭亮點】：穿著一身全白T恤或卡其西裝套裝時，以手腕上的真絲手作髮圈或雲朵包作為全身唯一的視覺色彩重心。"
        ],
        remakeConcept: {
          tools: ["粗彈力髮圈 2 個", "金屬壓夾 / 金屬細鏈條", "免針線打結器", "安全別針"],
          steps: [
            "【免剪裁風車折角法】：將長方巾平鋪對折為正方形，四個對角各打一個小死結，形成天然的立體收納內囊。",
            "【組裝雲朵提把】：將兩側結角穿過金屬手挽環或金屬鏈條，拉緊後即刻變身一只蓬鬆柔軟的晚宴雲朵小廢包。",
            "【餘布改製大腸髮圈】：若有裁切多餘長條，穿入鬆緊帶並將兩端藏針縫合，即可獲得一條不咬頭髮的真絲護髮大腸圈。"
          ],
          proTip: "此改造完全「零剪裁、不傷真絲」，拆開後隨時可復原成原本的絲巾，隨心所欲變換用途！"
        },
        promptRecord: {
          promptEn: "High-end product still life photography of a luxury mini pouch and scrunchie upcycled from vintage patterned silk scarf, accented with delicate gold chain strap, sitting on marble tabletop, morning natural light --ar 1:1 --v 6.0",
          promptZh: "高級靜物攝影：一只由復古印花真絲絲巾重製的手提雲朵小包與大腸髮圈，點綴精緻金色鏈條，置於大理石檯面，晨間柔和自然光。",
          engine: "Midjourney v6.0",
          purpose: "驗證真絲面料折疊打結為手袋時的光澤折射與立體感"
        }
      },
      "en": {
        originalItem: "Vintage Patterned Silk Scarf",
        remakeDirection: "French Cloud Pouch & Silk Hair Scrunchie Set",
        categoryName: "Accessories",
        difficultyName: "Beginner",
        estimatedTime: "25 mins",
        painPoints: [
          "Intricate vintage prints look dated and matronly when tied around the neck",
          "Smooth luxury silk constantly slips off shoulders, ending up forgotten in drawers",
          "High-grade mulberry silk has beautiful luster—too precious to discard"
        ],
        stylingSuggestions: [
          "【Bag Charm & Carry】：Carry as a mini cloud wristlet or knot the scrunchie around plain leather totes for instant Parisian flair.",
          "【Minimalist Pop of Color】：Pair with head-to-toe white cotton tees or relaxed beige linen suits to let the silk luster take center stage."
        ],
        remakeConcept: {
          tools: ["2 Elastic hair ties", "Gold mini chain strap", "Safety pin / Ring buckle"],
          steps: [
            "【Zero-Cut Origami Knotting】：Fold the scarf in half into a square; tie four corner knots inward to form a dimensional pouch cavity.",
            "【Attach Chain Handles】：Thread opposite corner knots through gold O-rings, cinching into a puffy cloud evening pouch.",
            "【Make Silk Scrunchie】：Thread remaining silk strip over an elastic band and slip-stitch ends to create a gentle, anti-breakage hair scrunchie."
          ],
          proTip: "100% zero-cut and reversible! Untie the knots anytime to restore the original silk scarf without damage."
        },
        promptRecord: {
          promptEn: "High-end product still life photography of a luxury mini pouch and scrunchie upcycled from vintage patterned silk scarf, accented with delicate gold chain strap, sitting on marble tabletop, morning natural light --ar 1:1 --v 6.0",
          promptZh: "Luxury still life: silk cloud pouch and scrunchie upcycled from vintage scarf with gold accents.",
          engine: "Midjourney v6.0",
          purpose: "Validate silk folding geometry and luster refraction as luxury accessories"
        }
      },
      "ja": {
        originalItem: "派手なヴィンテージシルクスカーフ",
        remakeDirection: "フレンチシルククラウドバッグ ＆ ヘアシュシュセット",
        categoryName: "閒置配飾",
        difficultyName: "初心者向け",
        estimatedTime: "25 分",
        painPoints: [
          "大判の花柄・幾何学模様が首に巻くとマダム風になりすぎて日常使いしにくい",
          "ツルツルと滑り落ちやすく、いつの間にかタンスの奥に眠っていた",
          "上質なシルク100%の光沢と肌触りが美しく、捨てるのはあまりにも惜しい"
        ],
        stylingSuggestions: [
          "【バッグのアクセント】：完成したミニバッグを腕に提げるか、無地のレザートートに結んでパリジェンヌ風のアクセントに。",
          "【シンプルコーデの主役に】：白Tシャツやリネンセットアップなど、ミニマルな服装の唯一の差し色として活用。"
        ],
        remakeConcept: {
          tools: ["太めのヘアゴム 2個", "ゴールドチェーン金具", "安全ピン / 丸カン"],
          steps: [
            "【針糸不要！風呂敷折り結び】：スカーフを正方形に折り、四隅の内側に結び目を作って自然な袋状の立体を作ります。",
            "【チェーンの取り付け】：結び目をゴールドのリング金具に通して固定すれば、ふんわり柔らかなパーティーミニバッグに。",
            "【シルクシュシュ】：余ったリボン生地にゴムを通せば、髪に優しいシルクシュシュも同時に完成します。"
          ],
          proTip: "布を一切切らないため、いつでも元のスカーフに戻せるリバーシブルな安心リメイクです！"
        },
        promptRecord: {
          promptEn: "High-end product still life photography of a luxury mini pouch and scrunchie upcycled from vintage patterned silk scarf, accented with delicate gold chain strap, sitting on marble tabletop, morning natural light --ar 1:1 --v 6.0",
          promptZh: "ヴィンテージスカーフをリメイクしたシルクミニバッグとシュシュの静物写真。",
          engine: "Midjourney v6.0",
          purpose: "シルクの結び目による立体的なギャザーと上品な光沢感の確認"
        }
      }
    }
  },
  {
    id: "case-8",
    category: "閒置配飾",
    difficulty: "微工藝",
    estimatedTime: "35 分鐘",
    coverColor: "from-amber-800/20 to-stone-900/40",
    icon: "briefcase",
    beforeImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    translations: {
      "zh-TW": {
        originalItem: "磨損長度不合厚實硬皮皮帶",
        remakeDirection: "工藝黃銅鑰匙掛繩 × 露營相機提帶",
        categoryName: "閒置配飾",
        difficultyName: "微工藝",
        estimatedTime: "35 分鐘",
        painPoints: [
          "腰圍尺寸改變或打孔過多導致皮帶尾端過長垂掛，極不美觀",
          "皮帶扣環周圍局部磨損龜裂，無法再作為正裝配件穿戴",
          "厚實植鞣真牛皮質料極佳，丟掉十分可惜"
        ],
        stylingSuggestions: [
          "【工裝褲腰間掛扣】：將改造後的黃銅皮扣鑰匙繩掛在牛仔褲或軍綠工裝褲的腰帶環上，金屬與深色皮質碰撞出俐落山系風格 (Gorpcore)。",
          "【隨身相機/水壺掛繩】：搭配旁軸相機或保溫瓶，散發隨性耐看的重磅手作匠人氣質。"
        ],
        remakeConcept: {
          tools: ["皮革打孔沖子", "皮革厚剪或美工刀", "純黃銅彈簧扣 2 個", "固定鉚釘與鉚釘槌"],
          steps: [
            "【截取完整皮段】：避開磨損嚴重的扣眼部位，截取兩段 18 公分與 25 公分平整厚實的皮帶身段。",
            "【削薄與打孔】：在皮帶兩端折合處以美工刀稍微削薄內層厚度，用沖子打出 3mm 鉚釘孔。",
            "【組裝黃銅扣】：穿入純黃銅旋轉鑰匙扣與 D 型環，合攏後敲入古銅色金屬鉚釘牢固固定，邊緣塗抹天然蜂蠟拋光。"
          ],
          proTip: "皮帶切口毛邊可用粗砂紙輕磨後，用棉花棒沾一點清水或皮革封邊劑反覆擦拭，立即展現專櫃級工藝圓弧光澤！"
        },
        promptRecord: {
          promptEn: "Artisanal leather craft product photo: durable key lanyards and camera strap handcrafted from upcycled thick distressed brown leather belt, vintage solid brass hardware, rustic workbench background --ar 1:1 --v 6.0",
          promptZh: "手工皮件工藝展示：由改造厚實棕色磨損牛皮皮帶重製的耐用鑰匙掛繩與相機帶，純黃銅復古五金配件，質樸手作工作台背景。",
          engine: "Midjourney v6.0",
          purpose: "評估老舊植鞣革重製為小五金配件後的手作硬挺質感"
        }
      },
      "en": {
        originalItem: "Worn Heavyweight Leather Belt",
        remakeDirection: "Brass Hardware Key Lanyard & Camera Carry Strap",
        categoryName: "Accessories",
        difficultyName: "Light Craft",
        estimatedTime: "35 mins",
        painPoints: [
          "Awkward length after waist change leaves excessive belt tail dangling",
          "Localized leather cracking near buckle makes it unwearable for smart outfits",
          "Premium vegetable-tanned thick leather is too durable to throw away"
        ],
        stylingSuggestions: [
          "【Utility Belt Loop Clip】：Clip the brass leather lanyard to denim or olive cargo pant loops for rugged Gorpcore styling.",
          "【Artisan Camera Strap】：Use as a wrist strap for vintage rangefinders or insulated bottles for an authentic outdoor aesthetic."
        ],
        remakeConcept: {
          tools: ["Leather hole punch", "Utility blade", "2 Solid brass snap hooks", "Rivets & mallet"],
          steps: [
            "【Trim Intact Segments】：Bypass stretched buckle holes; cut two clean 18cm and 25cm leather segments.",
            "【Skive & Punch】：Lightly skive fold-over ends for reduced bulk; punch 3mm holes using leather punch.",
            "【Rivet Hardware】：Insert solid brass swivel snap and D-ring, hammer metal rivets firmly, and burnish raw edges with beeswax."
          ],
          proTip: "Sand cut edges smoothly with 400-grit sandpaper and rub with a damp cotton swab for a polished bespoke finish!"
        },
        promptRecord: {
          promptEn: "Artisanal leather craft product photo: durable key lanyards and camera strap handcrafted from upcycled thick distressed brown leather belt, vintage solid brass hardware, rustic workbench background --ar 1:1 --v 6.0",
          promptZh: "Artisanal leathercraft: durable key lanyard and strap made from upcycled vintage leather belt with solid brass snaps.",
          engine: "Midjourney v6.0",
          purpose: "Assess rugged texture of upcycled vegetable-tanned leather combined with brass hardware"
        }
      },
      "ja": {
        originalItem: "サイズが合わず擦れた本革ベルト",
        remakeDirection: "真鍮製キーホルダー ＆ カメラリストストラップ",
        categoryName: "閒置配飾",
        difficultyName: "ミニクラフト",
        estimatedTime: "35 分",
        painPoints: [
          "体型変化でサイズが合わず、余ったベルトの端が長く垂れ下がってしまう",
          "バックル付近の革がひび割れ、スーツや正装には合わせられなくなった",
          "肉厚な本牛革（植物タンニン鞣し）の上質素材なので、捨てるのは惜しい"
        ],
        stylingSuggestions: [
          "【ベルトループに引っ掛けて】：デニムやカーゴパンツの腰回りに真鍮フックを引っ掛け、無骨なワークスタイル（Gorpcore）を演出。",
          "【カメラストラップ】：クラシックカメラのストラップや水筒ホルダーとして使えば、経年変化を楽しめる味のあるギアに。"
        ],
        remakeConcept: {
          tools: ["穴あけポンチ", "カッターナイフ", "真鍮ナスカン 2個", "カシメ金具とハンマー"],
          steps: [
            "【綺麗な部分を切り出し】：傷んだバックル穴を避け、18cmと25cmの平らで丈夫な革パーツを切り出します。",
            "【革漉きと穴あけ】：折り返す部分の革を少し削って薄くし、ポンチで3mmの穴を開けます。",
            "【真鍮パーツの固定】：真鍮のナスカンを通し、カシメ金具を打ち込んで固定。切断面にみつろうを塗って磨きます。"
          ],
          proTip: "切断面を紙やすりで軽く整えてから水を含ませた綿棒でこするだけで、プロのような滑らかなコバに仕上がります！"
        },
        promptRecord: {
          promptEn: "Artisanal leather craft product photo: durable key lanyards and camera strap handcrafted from upcycled thick distressed brown leather belt, vintage solid brass hardware, rustic workbench background --ar 1:1 --v 6.0",
          promptZh: "古びた本革ベルトをリメイクしたキーホルダーと真鍮金具のクラフト物撮り写真。",
          engine: "Midjourney v6.0",
          purpose: "肉厚レザーとヴィンテージ真鍮金具の質感・耐久性の調和確認"
        }
      }
    }
  },
  {
    id: "case-9",
    category: "閒置配飾",
    difficulty: "新手友好",
    estimatedTime: "30 分鐘",
    coverColor: "from-teal-700/20 to-emerald-950/40",
    icon: "sparkles",
    beforeImage: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    translations: {
      "zh-TW": {
        originalItem: "腳後跟踩破泛黃經典帆布鞋",
        remakeDirection: "水洗植物刺繡一腳蹬穆勒休閒拖鞋",
        categoryName: "閒置配飾",
        difficultyName: "新手友好",
        estimatedTime: "30 分鐘",
        painPoints: [
          "穿脫時習慣踩後跟，導致腳後跟內襯塑料硬片壓斷、磨腳刺痛無法穿著",
          "鞋面白帆布局部泛黃，鞋型失去原本挺拔的運動感",
          "橡膠大底依然防滑耐磨，整雙丟掉十分可惜"
        ],
        stylingSuggestions: [
          "【隨性露踝穿搭】：穆勒半拖鞋型解放腳後跟，搭配九分闊腿牛仔褲或棉麻寬褲，露出纖細腳踝，視覺極顯隨性輕盈。",
          "【日系森系風格】：搭配純棉素色中筒襪或直接赤腳穿著，散發無拘無束的 CityWalk 漫步度假感。"
        ],
        remakeConcept: {
          tools: ["厚剪刀", "布料包邊條 0.5 米", "手縫針線", "植物刺繡貼或防水彩繪筆"],
          steps: [
            "【後跟平整剪除】：取出鞋墊，沿著腳踝骨兩側水平向後剪開，切除破損內折的後跟包覆部，改造成露跟穆勒拖鞋廓形。",
            "【切口包邊防磨】：在剪開的帆布邊緣縫上同色系棉質包邊條，遮蓋內部橡膠夾層並防止磨腳。",
            "【鞋面刺繡改造】：在原本泛黃或污漬的鞋頭兩側，手縫極簡植物枝葉刺繡貼或用防水墨水畫上手繪線條，掩蓋瑕疵。"
          ],
          proTip: "剪後跟時沿著原本鞋幫的弧形車縫線留 0.5 公分裕量，剪完後再用針線將鞋墊邊緣固定在鞋底，穿著時鞋墊才不會向前滑動！"
        },
        promptRecord: {
          promptEn: "Editorial fashion flatlay of custom mule sneakers upcycled from worn canvas sneakers, open-back slip-on silhouette, neat bias tape binding, delicate olive branch embroidery on toe cap, clean aesthetic --ar 1:1 --v 6.0",
          promptZh: "時尚平鋪展示：由磨損帆布鞋改造重構的露跟穆勒休閒鞋，俐落滾邊收口，鞋頭帶有細緻橄欖枝刺繡，純淨日系自然美學。",
          engine: "Midjourney v6.0",
          purpose: "預覽切除後跟後的穆勒鞋型線條與鞋面刺繡之和諧度"
        }
      },
      "en": {
        originalItem: "Crushed-Heel Distressed Canvas Sneakers",
        remakeDirection: "Open-Back Embroidered Canvas Mule Slip-Ons",
        categoryName: "Accessories",
        difficultyName: "Beginner",
        estimatedTime: "30 mins",
        painPoints: [
          "Stepping on heels cracked the inner plastic counter, causing severe blisters",
          "White canvas upper has yellowed stains, losing crisp sporty aesthetic",
          "Rubber waffle outsoles are still in great condition—too durable to waste"
        ],
        stylingSuggestions: [
          "【Ankle-Baring Casual】：Open-back mule silhouette frees heels; pair with cropped wide-leg denim to highlight ankles for an airy feel.",
          "【Japanese Relaxed Style】：Pair with ribbed cotton crew socks or wear barefoot for effortless Citywalk leisure."
        ],
        remakeConcept: {
          tools: ["Heavy-duty shears", "0.5m Bias tape binding", "Needle & heavy thread", "Botanical embroidered patches"],
          steps: [
            "【Cut Away Damaged Heel】：Remove insole and cut horizontally along ankle line, discarding crushed heel counter to form mule shape.",
            "【Bind Raw Edges】：Wrap raw canvas edge with cotton bias binding and stitch securely to seal internal rubbers.",
            "【Conceal Stains with Embroidery】：Stitch delicate olive branch patches over yellowed toe areas to disguise flaws creatively."
          ],
          proTip: "Tack down the insole heel to the footbed with two invisible stitches so the insole doesn't slide forward when walking!"
        },
        promptRecord: {
          promptEn: "Editorial fashion flatlay of custom mule sneakers upcycled from worn canvas sneakers, open-back slip-on silhouette, neat bias tape binding, delicate olive branch embroidery on toe cap, clean aesthetic --ar 1:1 --v 6.0",
          promptZh: "Editorial flatlay: custom mule sneakers upcycled from worn canvas shoes with neat bias binding and leaf embroidery.",
          engine: "Midjourney v6.0",
          purpose: "Preview open-back mule silhouette and embroidery balance"
        }
      },
      "ja": {
        originalItem: "かかとを踏んで潰れたキャンバススニーカー",
        remakeDirection: "かかとフリー・ボタニカル刺繍バブーシュスニーカー",
        categoryName: "閒置配飾",
        difficultyName: "初心者向け",
        estimatedTime: "30 分",
        painPoints: [
          "かかとを踏んで履いたため中の芯材が割れ、履くたびに擦れて痛い",
          "アッパーのキャンバスが黄ばんでしまい、スニーカーとしての清潔感が低下",
          "ゴムソールはまだまだ擦り減っておらず、捨てるにはもったいない"
        ],
        stylingSuggestions: [
          "【足首見せ抜け感コーデ】：かかとのないミュール仕様で足元すっきり。アンクル丈のワイドパンツやリネンスカートと好相性。",
          "【ソックス合わせ】：白のローゲージソックスと合わせたり、素足でラフに履いて休日のリゾート気分を満喫。"
        ],
        remakeConcept: {
          tools: ["万能ハサミ", "綿バイアステープ 0.5m", "手縫い針と太糸", "植物刺繍ワッペン"],
          steps: [
            "【かかとの切除】：インソールを外し、足首のラインに沿って潰れたかかと部分を半円状に切り落とします。",
            "【バイアス縁取り】：切り口にバイアステープをかぶせてまつり縫いし、断面を綺麗に保護します。",
            "【刺繍でシミ隠し】：黄ばみや汚れの気になるつま先部分に、オリーブの枝など繊細な刺繍ワッペンを縫い付けます。"
          ],
          proTip: "切除後、インソールのかかと部分を靴底に2針ほど縫い留めておくと、歩行時にインソールがずれません！"
        },
        promptRecord: {
          promptEn: "Editorial fashion flatlay of custom mule sneakers upcycled from worn canvas sneakers, open-back slip-on silhouette, neat bias tape binding, delicate olive branch embroidery on toe cap, clean aesthetic --ar 1:1 --v 6.0",
          promptZh: "潰れたスニーカーをバブーシュ風ミュールにリメイクした平置き写真。",
          engine: "Midjourney v6.0",
          purpose: "ミュールシルエットのラインと刺繍デザインの調和確認"
        }
      }
    }
  }
];

// 多語系快速輸入範例 (含衣物與配飾)
const SAMPLE_INPUTS = {
  "zh-TW": [
    {
      name: "老爸衣櫃裡的過長寬鬆格子襯衫",
      materialColor: "深藍綠混色 / 粗紡純棉",
      painPoint: "下擺長度卡在大腿一半超顯矮，版型太鬆像穿布袋，單穿像睡衣",
      targetStyle: "日系休閒 CityBoy / 俐落層次感",
      mode: "結構微改"
    },
    {
      name: "印花過時老氣的長條真絲絲巾",
      materialColor: "莫蘭迪復古印花 / 100%桑蠶絲",
      painPoint: "繫在脖子上像老式空姐顯老氣，平時穿搭派不上用場，收在抽屜積灰塵",
      targetStyle: "法式輕奢手作 / 抓夾雲朵包",
      mode: "結構微改"
    },
    {
      name: "長度不合且皮質偏硬的磨損老皮帶",
      materialColor: "深焦糖棕色 / 厚實植鞣牛皮",
      painPoint: "腰圍不合尾端拖太長，扣頭磨損但牛皮厚實硬挺捨不得丟",
      targetStyle: "美式復古工裝 / 山系鑰匙相機掛繩",
      mode: "微工藝"
    },
    {
      name: "腳後跟踩爛塑膠片斷裂的帆布鞋",
      materialColor: "純白水洗帆布 / 橡膠底",
      painPoint: "踩後跟導致塑膠內襯斷裂刺腳，鞋頭有些微泛黃不願穿出門",
      targetStyle: "日系慵懶度假 / 刺繡穆勒休閒拖",
      mode: "結構微改"
    }
  ],
  "en": [
    {
      name: "Dad's oversized flannel plaid shirt",
      materialColor: "Navy-Green Plaid / Heavyweight Cotton",
      painPoint: "Hem hangs mid-thigh making legs look short; overly baggy like a shapeless sack",
      targetStyle: "Japanese Cityboy Casual / Layered Crop",
      mode: "結構微改"
    },
    {
      name: "Vintage patterned luxury silk scarf",
      materialColor: "Floral Paisley / 100% Mulberry Silk",
      painPoint: "Looks too mature tied around neck; slips off easily and forgotten in drawers",
      targetStyle: "French Cloud Pouch & Hair Ring Set",
      mode: "結構微改"
    },
    {
      name: "Worn oversized heavyweight leather belt",
      materialColor: "Caramel Brown / Veg-Tanned Bull Leather",
      painPoint: "Length no longer fits; leather cracked near buckle but hide is super durable",
      targetStyle: "Gorpcore Brass Key Lanyard & Camera Strap",
      mode: "微工藝"
    },
    {
      name: "Crushed-heel white canvas sneakers",
      materialColor: "Washed White Canvas / Waffle Sole",
      painPoint: "Heel counter is snapped and rubs blisters; canvas slightly yellowed",
      targetStyle: "Open-Back Embroidered Mule Slip-Ons",
      mode: "結構微改"
    }
  ],
  "ja": [
    {
      name: "父のクローゼットにあった大きすぎるチェックシャツ",
      materialColor: "ネイビー×グリーン / 厚手コットン",
      painPoint: "着丈が太ももまであって足が短く見える。ダボダボでパジャマに見えてしまう",
      targetStyle: "シティボーイ風 / クロップドレイヤード",
      mode: "結構微改"
    },
    {
      name: "派手なヴィンテージシルクスカーフ",
      materialColor: "レトロ花柄 / シルク100%",
      painPoint: "首に巻くとマダム風になり日常使いしにくい。タンスの奥に眠っていた",
      targetStyle: "フレンチシルクバッグ ＆ ヘアシュシュ",
      mode: "結構微改"
    },
    {
      name: "サイズが合わず擦れた本革ベルト",
      materialColor: "キャラメルブラウン / 厚手牛革",
      painPoint: "サイズが合わず端が垂れ下がる。革が丈夫で捨てるには惜しい",
      targetStyle: "真鍮製キーホルダー ＆ リストストラップ",
      mode: "微工藝"
    },
    {
      name: "かかとを踏んで潰れた白キャンバススニーカー",
      materialColor: "オフホワイト / キャンバス地",
      painPoint: "かかとの芯が割れて靴擦れする。全体的に少し黄ばんでいる",
      targetStyle: "ボタニカル刺繍バブーシュ風ミュール",
      mode: "結構微改"
    }
  ]
};
