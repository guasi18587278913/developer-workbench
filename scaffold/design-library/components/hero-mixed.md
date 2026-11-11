# 首屏 · 明暗混合

共 68 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（5 条）

- **产品标注框连线指向画面实物，三行错位大标题间嵌评价头像**
  做法：标注框按百分比定位，::before 四角径向渐变加遮罩做发光边；拉伸 SVG 画1px线连到磨砂圆形标记；标题三行行高0.9，中行右对齐；头像叠放加2,500星评塞进首行右侧空档，黑色胶囊按钮放末行右侧。不常见在用标注线把卖点钉在视频实物上
  电脑＋手机 · 预览可见 · 来自「Aesthetic Dental Clinic」（只有首屏） · [预览图](../sources/framesbase/items/e0d64a48-858a-488c-a753-1fe68f2ce7d9/preview.webp) · [提示词](../sources/framesbase/items/e0d64a48-858a-488c-a753-1fe68f2ce7d9/prompt.md)
- **左半屏灰色磨砂层，EMBER字母处是透明镂空，透出底下熔岩视频**
  做法：不常见在文字是挖空不是填色：左半屏放rgba(131,131,131,.3)+blur(20px)层，用SVG mask白底黑字把EMBER抠掉；字用textLength=100%撑满栏宽、Inter 900；右半STUDIO实心白字，两半共用一条镜像0.7倍速背景视频
  电脑＋手机 · 预览可见 · 来自「EMBER.dsgn」（只有首屏） · [预览图](../sources/framesbase/items/946cdbdf-f3e7-4c7d-b60e-2dd38761cc10/preview.webp) · [提示词](../sources/framesbase/items/946cdbdf-f3e7-4c7d-b60e-2dd38761cc10/prompt.md)
- **左上超大衬线字标，右上描边胶囊，底部12栏小字区**
  做法：全部文字单色#00DEAA直接压视频。字标13.6vw、行高0.78，滚动时只用scale缩到与Reserve胶囊同高，变成紧凑顶栏，这点少见；底部12栏网格三块文字底对齐共一条基线
  电脑＋手机 · 预览可见 · 来自「Halo Sound」（只有首屏） · [预览图](../sources/framesbase/items/678a72fe-e2ea-45ac-9855-bd83dccfe398/preview.webp) · [提示词](../sources/framesbase/items/678a72fe-e2ea-45ac-9855-bd83dccfe398/prompt.md)
- **超大 Blue Nile 横贯顶部，抠图模特站在中间挡住字母**
  做法：标题 clamp(12rem,24vw,30rem)、字距 -0.1em、z10，模特PNG宽54%、z20压在字上；1px白16%竖线把屏幕分四列，左图卡、右数字和商品卡都贴死屏幕边；不常见在人像遮字加直角卡片贴边对齐网格线
  电脑＋手机 · 预览可见 · 来自「Jewelry Store」（只有首屏） · [预览图](../sources/framesbase/items/2419f979-5d80-437a-bf7d-840d1d1b1c4a/preview.webp) · [提示词](../sources/framesbase/items/2419f979-5d80-437a-bf7d-840d1d1b1c4a/prompt.md)
- **左上两行超大粗体字标，下方片假名撑满同宽，右半区时钟、导航、段落**
  做法：两栏各50%网格：字标独占左半，时钟、短段落、©2026都对齐右半左边线；片假名行justify-between拉到与字标同宽；整层difference混合随画面反色。不常见在日文副标撑满字标
  电脑＋手机 · 预览可见 · 来自「Sea Serenade」（整页） · [预览图](../sources/framesbase/items/0fb9b45c-c7fb-4abb-9fd8-b56135da07af/preview.webp) · [提示词](../sources/framesbase/items/0fb9b45c-c7fb-4abb-9fd8-b56135da07af/prompt.md)

## 推荐度 4（25 条）

- **底部居中两行标题，末两词换衬线斜体，下面一条玻璃条装标语和按钮**
  做法：斜体词用Instrument Serif；CTA条bg-black/25模糊，左标语右白按钮贴边。首屏mb-[-25px]，下一区rounded-t-[25px]盖上来。少见在标语和按钮合成一条
  电脑＋手机 · 预览可见 · 来自「ADHD Planner」（整页） · [预览图](../sources/framesbase/items/4cc14b2b-12b8-4d9b-b94a-a8cd79834d06/preview.webp) · [提示词](../sources/framesbase/items/4cc14b2b-12b8-4d9b-b94a-a8cd79834d06/prompt.md)
- **上48%灰色块压在视频上，左大写粗标题，右说明和双胶囊钮**
  做法：视频fixed铺满，首屏顶部48%用与视频同色的#C5C5C5实色块盖住，上字下画硬切分。少见在用实色块切视频；左列32%放标题和“001 / 005”页码，右列黑实心/黑描边胶囊钮，11px大写
  电脑＋手机 · 预览可见 · 来自「AI Automation」（整页） · [预览图](../sources/framesbase/items/3b993816-576e-43fa-bc2d-b4178087fcdf/preview.webp) · [提示词](../sources/framesbase/items/3b993816-576e-43fa-bc2d-b4178087fcdf/prompt.md)
- **点阵复古字体两行白色标题，上方品牌圆环叠信任胶囊，白色发光胶囊按钮**
  做法：标题用BubbledotICG点阵字，最大80px，窄屏字距收到-0.08em；信任行三枚深色圆环内嵌白圆品牌图标、互压42%，胶囊压在最后一枚下。不常见在点阵字标题配颗粒视频
  电脑＋手机 · 预览可见 · 来自「AI Runtime」（只有首屏） · [预览图](../sources/framesbase/items/c02f682a-c2e4-4945-94d1-86269919c41f/preview.webp) · [提示词](../sources/framesbase/items/c02f682a-c2e4-4945-94d1-86269919c41f/prompt.md)
- **粉蓝赛博城市画面铺满，底部居中两行超大衬线白字**
  做法：区段高140vh，标题sticky贴在视口底、衬线字clamp到10rem。少见在视频不自动播：滚动进度对应帧号，预先按30fps抽帧画到canvas，抽完前用currentTime跟随
  电脑＋手机 · 预览可见 · 来自「arc Summit」（只有首屏） · [预览图](../sources/framesbase/items/99fe6d9b-e0ea-4cea-90a7-f91ae5c327a7/preview.webp) · [提示词](../sources/framesbase/items/99fe6d9b-e0ea-4cea-90a7-f91ae5c327a7/prompt.md)
- **居中竖长视频面板左下角切斜角，标题放在左侧灰色留白里**
  做法：视频面板占屏宽中间 52%（px-[24%]），用 JS 按尺寸算 clip-path path()：圆角 16、左下 160px 45° 切角且两端也倒圆，ResizeObserver 重算；不常见在圆角斜切面板
  电脑＋手机 · 预览可见 · 来自「Augmented Sight」（只有首屏） · [预览图](../sources/framesbase/items/e80151c8-1e62-482a-b463-441d363cf76d/preview.webp) · [提示词](../sources/framesbase/items/e80151c8-1e62-482a-b463-441d363cf76d/prompt.md)
- **整行白色Anton巨字，人像盖在字上，左下右中各一段“//”开头小字**
  做法：三层叠放：底层居中写名字OLIVIA（白、透明度0.08、模糊4px），中层巨字12vw上限180px，上层人像z20。不常见在人像用笔刷形状CSS遮罩抠成毛边；手机端标题拆三行、小字移到图下
  电脑＋手机 · 预览可见 · 来自「Bold Portfolio Hero」（只有首屏） · [预览图](../sources/framesbase/items/20880223-c2cd-47bf-b8c5-006829ec39a8/preview.webp) · [提示词](../sources/framesbase/items/20880223-c2cd-47bf-b8c5-006829ec39a8/prompt.md)
- **实线外框套虚线内框，虚线分出顶栏和左右两格**
  做法：外框 inset 8–12px 实线、内框再缩4px虚线（#C68C2F），四角各一个4px黑点；顶栏、左右两格都用同色虚线分隔，视频在右格内留8px边；不常见在双层框加角点的蓝图感，导航链接各是 bg-black/5 小方块
  电脑＋手机 · 预览可见 · 来自「BuildShield」（只有首屏） · [预览图](../sources/framesbase/items/62a82529-a9b5-4dc6-8a64-ea7905aa9f39/preview.webp) · [提示词](../sources/framesbase/items/62a82529-a9b5-4dc6-8a64-ea7905aa9f39/prompt.md)
- **三行超大压缩字标题，中行深青色并缩进，右侧标语加航线地图**
  做法：Barlow Condensed 800、行高 0.78，中行 #002a35 左缩进 0.524em，三行左右交替从 ±900px 滑入；右栏标语三行错位缩进，点阵地图上叠黄色贝塞尔航线，箭头沿线循环移动
  电脑＋手机 · 预览可见 · 来自「Cargo Group」（只有首屏） · [预览图](../sources/framesbase/items/e290e4f4-b171-4bed-83c6-be91b333ee57/preview.webp) · [提示词](../sources/framesbase/items/e290e4f4-b171-4bed-83c6-be91b333ee57/prompt.md)
- **白色超大品牌字夹在天空和建筑抠图之间，底部白色渐隐**
  做法：层级：天空0→SVG字1→建筑PNG 2→白色渐隐3（高34%，0→.35→.78→.96→#fff）。不常见在两片棕榈叶压在首屏与下一节的接缝上，滚动时左右叶以-0.28/-0.48倍速错开分离
  电脑＋手机 · 预览可见 · 来自「Coastal Estate」（只有首屏） · [预览图](../sources/framesbase/items/3eae252c-682c-4115-958d-f4970123c69d/preview.webp) · [提示词](../sources/framesbase/items/3eae252c-682c-4115-958d-f4970123c69d/prompt.md)
- **底部三行超粗压缩体大写标题，中间一行黄色右对齐**
  做法：Barlow Condensed 800，clamp(48px,14vw,72px)，行高0.82；白/黄/白三行，中间行右对齐形成错位；三行分别从x:-400、+400、-400滑入，间隔0.13s。少见在中间行反向对齐又反向滑入
  手机 · 预览可见 · 来自「Cross-Border」（整页） · [预览图](../sources/framesbase/items/7ab5fd2a-7535-4ce4-9bf0-42f55d70f0c2/preview.webp) · [提示词](../sources/framesbase/items/7ab5fd2a-7535-4ce4-9bf0-42f55d70f0c2/prompt.md)
- **左下红色160px字标配首行缩进说明，右下白玻璃商品卡**
  做法：12栏：标题占1–6栏贴底，最大160px；下方18px说明首行缩进120px；商品卡占9–12栏、高150px、圆角24px、白18%+blur(20px)，配红胶囊钮。少见在说明首行大缩进
  电脑＋手机 · 预览可见 · 来自「Futuristic Eyewear」（只有首屏） · [预览图](../sources/framesbase/items/06039526-78c5-43fc-b62a-e0a8736456bc/preview.webp) · [提示词](../sources/framesbase/items/06039526-78c5-43fc-b62a-e0a8736456bc/prompt.md)
- **标题顶左、说明和按钮沉底左，底部玻璃条带三个叠放头像**
  做法：视频上盖同色#B69198渐变：0–30%实色、55%透明，电脑端左→右，手机端改下→上，文字落在纯色区；标题和按钮用justify-between拉到上下两端。少见在取视频主色做实底渐隐
  电脑＋手机 · 预览可见 · 来自「Integration SaaS」（只有首屏） · [预览图](../sources/framesbase/items/222d5740-9056-41ba-bed0-9920dabcfe8c/preview.webp) · [提示词](../sources/framesbase/items/222d5740-9056-41ba-bed0-9920dabcfe8c/prompt.md)
- **巨型品牌字横贯画面，石雕抠图压在字前，左下标语右下照片卡**
  做法：分层：背景视频、暖色12%蒙层、22vw 品牌字、160vw 宽的抠图石雕，石雕压住字的下半截做出前后景；左下标语面板加细分隔线和小链接，右下照片卡顶部暗渐变、底部白方块图标加白按钮。不常见在品牌字夹在视频和抠图之间
  电脑＋手机 · 预览可见 · 来自「Layered Depth」（只有首屏） · [预览图](../sources/framesbase/items/44e96e6c-04fd-49c4-a43a-4a6af311fb84/preview.webp) · [提示词](../sources/framesbase/items/44e96e6c-04fd-49c4-a43a-4a6af311fb84/prompt.md)
- **眉标加窄宽大标题，手机样机立在中轴，下半被云层遮住**
  做法：标题 clamp(2.8rem,9vw,7rem)、maxWidth 9ch、leading 0.88；云朵 PNG z-30 压住手机下半，滚动 y 0→-25% 视差，再叠 40% 高渐变到底色 #6574a4。不常见在用前景云层遮住样机。
  电脑＋手机 · 预览可见 · 来自「Mindful Companion」（整页） · [预览图](../sources/framesbase/items/9d5a8d41-42f1-4bc6-86c9-23ace703c781/preview.webp) · [提示词](../sources/framesbase/items/9d5a8d41-42f1-4bc6-86c9-23ace703c781/prompt.md)
- **标题末词后接头像组和+2k圆，左下抠图人物配98%白卡**
  做法：少见在标题行内塞社交证明：Smile与头像组同在 inline-flex items-end；副文案按词切 white/60 与纯白；手机端视频占下70%，接缝叠128px底色渐变。提示词未写白卡
  电脑＋手机 · 预览可见 · 来自「Modern Dental Clinic」（只有首屏） · [预览图](../sources/framesbase/items/ee7d148b-d17d-40a7-bcdc-e41e57bd241d/preview.webp) · [提示词](../sources/framesbase/items/ee7d148b-d17d-40a7-bcdc-e41e57bd241d/prompt.md)
- **奶白大衬线城市名被两侧石塔遮住边缘，桥拱压在字下方**
  做法：不常见在用7张透明边PNG分层：天空z0、标题z3、桥z4、左右塔两张z6，字夹在中间产生纵深；各层随鼠标按不同幅度视差（桥18px、塔22px）；简介下三个#fdf1e1全圆角标签高42px带投影
  电脑 · 预览可见 · 来自「Mostar Guide」（整页） · [预览图](../sources/framesbase/items/0975afb7-d08e-42cb-8b80-bfb1b7b5aa5f/preview.webp) · [提示词](../sources/framesbase/items/0975afb7-d08e-42cb-8b80-bfb1b7b5aa5f/prompt.md)
- **左侧细体大写标题、编号05、散放的数据和头像组，右侧55%宽人像视频**
  做法：视频占右55%，手机端铺满、透明度30%；数据组右距20%、说明组右距50%；底部SVG(0,0 0,120 1440,120 1440,80 920,80 680,0)切出斜坡台阶。不常见在台阶斜切
  电脑＋手机 · 预览可见 · 来自「NeoVision」（整页） · [预览图](../sources/framesbase/items/da149ab1-5c86-46da-93f1-0af8dc13f662/preview.webp) · [提示词](../sources/framesbase/items/da149ab1-5c86-46da-93f1-0af8dc13f662/prompt.md)
- **首屏左上角一张深色终端卡，CLI/API/Console三个标签，下面是命令行**
  做法：不常见在产品演示卡放左上、标题沉到左下：卡宽min(396px,42vw)、rgba(13,16,19,.88)、5px圆角；激活标签金色加2px下划线；每个面板逐字打字42ms/字带闪烁光标；全站IBM Plex Mono小写大写标签配Plex Sans标题
  电脑＋手机 · 预览可见 · 来自「Nimbus Grid」（整页） · [预览图](../sources/framesbase/items/0d647e69-06a1-4653-bcb9-a5a400aad8b9/preview.webp) · [提示词](../sources/framesbase/items/0d647e69-06a1-4653-bcb9-a5a400aad8b9/prompt.md)
- **左下160px品牌字和首行缩进段落，右侧Info标签说明加(Drop)(2026)**
  做法：12列网格：标题区占1/7列，说明区占9/13列；段落都text-indent:120px，右侧“Info”标签宽120px正好填进缩进；全部文字difference混合，压在明暗不同的视频上都看得清。不常见在缩进与标签宽度对齐
  电脑＋手机 · 预览可见 · 来自「Performance Eyewear」（只有首屏） · [预览图](../sources/framesbase/items/d3a1aac5-6a48-4957-ae8a-80777da6b935/preview.webp) · [提示词](../sources/framesbase/items/d3a1aac5-6a48-4957-ae8a-80777da6b935/prompt.md)
- **超大姓名跑马灯横穿画面，抠图人像挡在字前**
  做法：背景照和抠图人像两层同尺寸铺满，中间夹26vh字号的姓名跑马灯（30s线性循环），人像z-20压住字母，字像从人身后穿过；不常见在用抠图夹层让名字被人挡住一截
  电脑＋手机 · 预览可见 · 来自「Personal Showcase」（只有首屏） · [预览图](../sources/framesbase/items/3f621e4f-d94e-454d-a045-6f59cbaa6518/preview.webp) · [提示词](../sources/framesbase/items/3f621e4f-d94e-454d-a045-6f59cbaa6518/prompt.md)
- **模糊的上一句、打字机正文、下方一排像快捷回复的胶囊按钮**
  做法：首屏写成和 AI 对话：上一句用 filter:blur(4px) 模糊掉，正文每字 38ms 打出并带闪烁光标；四个白胶囊回复项悬停变黑，末尾一个白描边胶囊点击复制邮箱；胶囊 400ms 后就淡入，不等打字结束
  电脑＋手机 · 预览可见 · 来自「Retro-Futurist」（只有首屏） · [预览图](../sources/framesbase/items/e82e527e-8739-4341-ad66-6fc642094dd6/preview.webp) · [提示词](../sources/framesbase/items/e82e527e-8739-4341-ad66-6fc642094dd6/prompt.md)
- **视频装在四周留边的大圆角框里，右下角被挖出一块放文档入口**
  做法：外层p-5留#f0f0f0边，内框rounded-[3rem]；右下角块用同色底加rounded-tl-[3.5rem]，上方和左侧各贴一个56px SVG反向圆角补角。不常见在反向圆角挖角
  电脑 · 预览可见 · 来自「RIVR」（只有首屏） · [预览图](../sources/framesbase/items/cc5e5574-d62e-4464-a232-b16f4e2725bc/preview.webp) · [提示词](../sources/framesbase/items/cc5e5574-d62e-4464-a232-b16f4e2725bc/prompt.md)
- **居中两行大标题＋胶囊搜索框＋双按钮，底部样机半埋进草丛**
  做法：少见在前景遮挡：草地PNG绝对定位在底部z-10，样机z-0加负下边距-mb-10/-20/-32沉进草里；搜索框当主输入，bg-white/60加blur，右侧40px黑色圆形上箭头
  电脑＋手机 · 预览可见 · 来自「SaaS Value」（只有首屏） · [预览图](../sources/framesbase/items/facb373d-65f3-4987-8674-fd1ec3b6f305/preview.webp) · [提示词](../sources/framesbase/items/facb373d-65f3-4987-8674-fd1ec3b6f305/prompt.md)
- **155px 三行大标题，部分词压暗，句尾嵌小图，右侧巨型药瓶出血**
  做法：不常见在逐词明暗：of 和下一行 Nature in 用 white/45，跨行交错出重点；Capsule 后内嵌小图；药瓶宽 80vw、right 取负值出血；黑色直角按钮 310×72 与说明并排
  电脑＋手机 · 预览可见 · 来自「Wellness Balance」（只有首屏） · [预览图](../sources/framesbase/items/9d1c8bb5-f08f-47a1-95aa-e9ee0174f7b6/preview.webp) · [提示词](../sources/framesbase/items/9d1c8bb5-f08f-47a1-95aa-e9ee0174f7b6/prompt.md)
- **人物居中，左下右下两组 Anton 巨字夹住人物，左上小段口号**
  做法：标题拆左右两块用 justify-between 夹住居中人物；中间 144px 黑圆钮，点击后文字下滑淡出、按钮弹性缩没、开始播视频，播完整屏弹簧上滑出下一屏。不常见在点按钮才播的首屏
  电脑＋手机 · 预览可见 · 来自「Yoga Coach」（只有首屏） · [预览图](../sources/framesbase/items/b371f550-9988-4908-8013-9fc5b4ee1c17/preview.webp) · [提示词](../sources/framesbase/items/b371f550-9988-4908-8013-9fc5b4ee1c17/prompt.md)

## 推荐度 3（38 条）

- 居中两行大标题，上行斜体衬线，下行无衬线紧字距 · 电脑 · 预览可见 · 来自「3D Bloom Layer」（只有首屏） · [目录](../sources/framesbase/items/054b79f3-4db6-42bb-b8b3-4cd6f69c30a5/)
- 白色巨字夹在底色和公仔之间，左下标题和圆形箭头，右下大字链接 · 电脑＋手机 · 预览可见 · 来自「3D Collectible Hero」（只有首屏） · [目录](../sources/framesbase/items/b5f7605d-8937-4060-80c6-03971b9012f3/)
- 左侧两行大标题加白色胶囊按钮，右下编号小标题和一段说明 · 电脑 · 预览可见 · 来自「AI Interface」（整页） · [目录](../sources/framesbase/items/2e0b73b0-7b5b-47ff-aa35-24423fc48f9f/)
- 居中双色绿标题，左下说明加白按钮，右下播放圆加时长 · 电脑＋手机 · 预览可见 · 来自「AI Workflow Hero」（只有首屏） · [目录](../sources/framesbase/items/28e2a619-ea11-4143-b8a7-8aef4e4de740/)
- 两行标题，第二行蓝紫粉米渐变，白胶囊下载钮下配灰色小注 · 电脑＋手机 · 预览可见 · 来自「AuraMail」（只有首屏） · [目录](../sources/framesbase/items/9c3c4578-0a35-43a4-bf48-31e6c4ce9143/)
- 底部一行超大衬线标题压出画面下沿，顶部花体小副题 · 电脑＋手机 · 预览可见 · 来自「Cinematic Landing Page」（整页） · [目录](../sources/framesbase/items/af51429c-9eb9-4cbe-82bd-758824901784/)
- 头像叠排的社交证明胶囊、三词粗体标题、单个黑色胶囊按钮 · 电脑 · 预览可见 · 来自「ClubX Investors」（只有首屏） · [目录](../sources/framesbase/items/92633e8b-87fc-4bae-85a2-46403e60fa8d/)
- 左上渐变字标和标语，右上另半字标，左下150+大数字，右下计数卡 · 电脑＋手机 · 预览可见 · 来自「Creator Guild」（只有首屏） · [目录](../sources/framesbase/items/ec0d3c18-1e4e-4772-9a36-e2d4b987fcd2/)
- 左上两行大标题，右上和右下各一段短文，右下荧光绿胶囊 · 电脑＋手机 · 预览可见 · 来自「Data Storytelling」（只有首屏） · [目录](../sources/framesbase/items/4dd9f11f-fd26-4265-8927-c44d3d518854/)
- 竖版海报卡：左上衬线短句，下部标题、副标、按钮和署名行 · 电脑 · 预览可见 · 来自「Digital Reality」（单个模块） · [目录](../sources/framesbase/items/b3e64519-d48e-437e-948d-964ff02e161a/)
- 舷窗图铺满居中，标题压左下，右下手写大“A.”配小字 · 电脑＋手机 · 预览可见 · 来自「Gateway Portal」（整页） · [目录](../sources/framesbase/items/9e7cac80-402e-4150-affe-79964f98dd1e/)
- 小标签下，细衬线 DIGITAL 叠粗无衬线 ARCHIVE，椭圆按钮 · 电脑 · 预览可见 · 来自「Golden Portal」（整页） · [目录](../sources/framesbase/items/b55f8354-2640-4343-ba97-707f20a6eb9d/)
- 左对齐两行粗标题分黑、灰、蓝三段，上有方形小标签，左下压白字 · 电脑＋手机 · 预览可见 · 来自「Growth Decisions」（只有首屏） · [目录](../sources/framesbase/items/4cc914ea-5034-4777-b532-fce9e779f87a/)
- 居中三行衬线大写标题，连接词用小写斜体，下接白色和描边两颗胶囊 · 电脑＋手机 · 预览可见 · 来自「Impact Ventures」（只有首屏） · [目录](../sources/framesbase/items/ee296445-e2d7-4bf9-b9d0-3b637ad11707/)
- 左半人物照配细体大标题，右半产品视频轮播带圆点 · 电脑＋手机 · 预览可见 · 来自「Luxury Ecommerce Design」（整页） · [目录](../sources/framesbase/items/c644c3ce-0172-4767-be08-92696f951fde/)
- 透明顶栏、画面中上一枚白色标志、底部两行衬线大写标题加小字 · 电脑＋手机 · 预览可见 · 来自「Luxury Hero」（只有首屏） · [目录](../sources/framesbase/items/08596d45-9af3-417b-9f46-9544893f2f05/)
- 左上三行全大写粗标题，下接切角白按钮，左下压一张玻璃小卡 · 电脑＋手机 · 预览可见 · 来自「New Era Bold Hero」（只有首屏） · [目录](../sources/framesbase/items/cee492b4-da2c-46e7-a91c-654b4568c26e/)
- 左对齐两行白色标题，直角白底黑字按钮和小字说明 · 电脑＋手机 · 预览可见 · 来自「Open Agent」（只有首屏） · [目录](../sources/framesbase/items/9b467c85-58c8-4f4a-bf77-b10a799ce961/)
- 视频铺底不加遮罩，左栏两行白标题、白胶囊按钮和三条勾选卖点 · 电脑＋手机 · 预览可见 · 来自「Performance Run」（只有首屏） · [目录](../sources/framesbase/items/0d9c6738-e99c-484a-bbb0-4ab5f019a1fe/)
- 居中两行白色衬线标题，下面奶油色和玻璃两枚胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Pet Diagnostics」（只有首屏） · [目录](../sources/framesbase/items/ce7ce046-2502-4c44-9f82-9088fa3d108b/)
- 居中三行大字标题压在发光球体上，背景细线分格 · 电脑＋手机 · 预览可见 · 来自「Product Studio」（只有首屏） · [目录](../sources/framesbase/items/0ff56575-1b56-4018-a871-d8bb5d48f961/)
- 车窗景上居中近黑紧排大标题，下接玻璃邮箱框 · 电脑 · 预览可见 · 来自「Railroad.ai」（只有首屏） · [目录](../sources/framesbase/items/d5755bbb-9872-4f27-a833-83aa4005a66f/)
- 风景铺底，左下徽点小字、两行大标题、白色与玻璃双按钮 · 电脑＋手机 · 预览可见 · 来自「Relocation Card」（只有首屏） · [目录](../sources/framesbase/items/d5b4d70e-a78f-4a92-9fa0-29ec38f17ae9/)
- 满屏视频，左下角80vw宽浅黄衬线大字品牌名 · 电脑 · 预览可见 · 来自「Shamoni」（单个模块） · [目录](../sources/framesbase/items/aa62f097-877f-4089-9945-aae5d5e2f918/)
- 超粗白色标题压在云上，下方居中一块写实3D饼干 · 电脑＋手机 · 预览可见 · 来自「Sky Cookie」（只有首屏） · [目录](../sources/framesbase/items/e8e4b3e8-fe8d-46c6-be04-864b3e682100/)
- 左对齐：玻璃徽章带白色 New 胶囊，三行大标题，黑白双按钮 · 电脑＋手机 · 预览可见 · 来自「Skyflora」（只有首屏） · [目录](../sources/framesbase/items/3958342c-d2b0-45ac-bf03-3ece33eca11b/)
- 玻璃徽章、两行极细大标题、双玻璃按钮居中堆叠 · 电脑 · 预览可见 · 来自「Slate」（只有首屏） · [目录](../sources/framesbase/items/b5ad789a-9219-475a-9465-3a09304b59ef/)
- New 徽标胶囊、两行斜体衬线大标题、玻璃主按钮加文字按钮 · 电脑 · 预览可见 · 来自「Space Voyage」（只有首屏） · [目录](../sources/framesbase/items/10084ab3-f346-462d-a061-b0fe274edba4/)
- 人像底对齐压住标题中部，左右两列大词向中间收拢 · 电脑＋手机 · 预览可见 · 来自「Sparkform」（只有首屏） · [目录](../sources/framesbase/items/784f18cf-4090-4a99-9bd3-78fc115e6da5/)
- 视频满屏，居中玻璃小徽标、两行白色大标题、黄色和玻璃两个按钮 · 电脑＋手机 · 预览可见 · 来自「Spatial Mapping Platform」（只有首屏） · [目录](../sources/framesbase/items/9e852e08-1485-4ae9-8aa1-1c85077448b4/)
- 居中小眉题、两行窄字距大标题、大写宽字距副标题 · 电脑＋手机 · 预览可见 · 来自「Stellar Launch」（整页） · [目录](../sources/framesbase/items/c480ad28-0836-4f62-a79e-5c1760a2531b/)
- 居中星标胶囊徽章，两行大标题夹一个衬线斜体词，白色主按钮 · 电脑＋手机 · 预览可见 · 来自「Taskora SaaS Hero」（只有首屏） · [目录](../sources/framesbase/items/af806bcb-0a59-48c6-a44f-ef0c05b072cb/)
- 顶栏下居中胶囊徽标、黑色粗体标题、两行灰色副标题 · 电脑 · 预览可见 · 来自「Transform Data」（只有首屏） · [目录](../sources/framesbase/items/7c553857-ca5d-4640-92d7-2b6d84016f5b/)
- 左侧三行巨型标题，中间一行半透明，左下说明和星级评分 · 电脑＋手机 · 预览可见 · 来自「Unwind Hero」（只有首屏） · [目录](../sources/framesbase/items/9dd6d02c-9056-4e28-94c8-985b7beab634/)
- 居中三行标题混排斜体衬线，底部左说明、右描边标签按钮 · 电脑＋手机 · 预览可见 · 来自「VertexAI Hero」（只有首屏） · [目录](../sources/framesbase/items/31ce4379-2da0-44d3-b9a1-416ef831b3a2/)
- 居中衬线标题下放一个深色AI提问框，内含三个胶囊快捷按钮和白色发送键 · 电脑＋手机 · 预览可见 · 来自「Vitara」（只有首屏） · [目录](../sources/framesbase/items/fb4a9eeb-b713-4827-b7eb-ab0e9c2c97c9/)
- 标题顶在上方、说明和按钮压在底部，中间留给画面人物 · 电脑 · 预览可见 · 来自「Wanderful Hero」（只有首屏） · [目录](../sources/framesbase/items/40d4dd6d-39ee-4c87-ac03-bbde9a56b92e/)
- 左下衬线大标题、说明和胶囊邮箱框，右下竖排三个玻璃标签 · 电脑＋手机 · 预览可见 · 来自「Wellness Hero」（只有首屏） · [目录](../sources/framesbase/items/1090915f-3612-42d9-8283-34822366ee2f/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/hero-*.tsx`（17 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
