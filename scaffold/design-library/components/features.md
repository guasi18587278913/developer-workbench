# 功能介绍

共 58 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（2 条）

- **三张圆角卡上部近黑，向下渐变成橙、蓝、绿，底边泛白光**
  做法：背景用5段竖向渐变：0–40%近黑、80%主色、96%浅色、100%纯白，加 inset 0 -4px 15px -2px 白色内阴影，像光从卡底透出，这是少见处；左上叠主色径向光；悬停上移4px
  电脑＋手机 · 预览可见 · 来自「Keep Ahead Features」（单个模块） · [预览图](../sources/framesbase/items/016185bf-1cad-4c7c-9e58-48c929e6178c/preview.webp) · [提示词](../sources/framesbase/items/016185bf-1cad-4c7c-9e58-48c929e6178c/prompt.md)
- **五张白描边渐变卡拼成便当格，每格是通知、标签、窗口、柱图、搜索框**
  做法：整组按 1374×666 设计单位写，html 字号=min(95vw/1374,94vh/666) 等比缩放；卡 1.6 白描边圆角22；集成标签用 3px 阴影环代替边框，Slack 标签斜放-20°；两窗口反向倾斜-7°/+4°；周日柱用金到绿渐变。不常见在每格都是可照做的微型界面
  电脑＋手机 · 预览可见 · 来自「Task Engine」（单个模块） · [预览图](../sources/framesbase/items/222d0f76-41e4-4755-86c8-2aab8b293a76/preview.webp) · [提示词](../sources/framesbase/items/222d0f76-41e4-4755-86c8-2aab8b293a76/prompt.md)

## 推荐度 4（30 条）

- **三张等宽卡顶部径向彩色光晕，中间放迷你界面插图**
  做法：卡高340圆角20底#F4F8F9，radial-gradient从顶部中心橙粉色到60%淡回底色；插图用HTML拼：白提示框里关键词渐变字+黑描边胶囊+假鼠标，或16px白网格径向mask淡出。少见在用真UI元素当插图
  电脑＋手机 · 预览可见 · 来自「AI Image Generator UI」（单个模块） · [预览图](../sources/framesbase/items/e82fbae7-0c67-4d7a-8ad7-57ab16a97ca7/preview.webp) · [提示词](../sources/framesbase/items/e82fbae7-0c67-4d7a-8ad7-57ab16a97ca7/prompt.md)
- **三张卡上部分别是柱状图、AI输入框、汇流图，下部标题加圆形图标**
  做法：卡片按72.2%/27.8%分上下：上格是内缩的浅橙渐变面板，各放一个可读的小界面（高亮柱+数值胶囊；输入框+渐变按钮+黑色光标；canvas画5条橙色贝塞尔带汇成一点）。不常见在每张卡都是一块真界面而非图标
  电脑＋手机 · 预览可见 · 来自「Autonomous Ops」（单个模块） · [预览图](../sources/framesbase/items/7e49b512-41b7-4d2e-89a5-e676286d8b94/preview.webp) · [提示词](../sources/framesbase/items/7e49b512-41b7-4d2e-89a5-e676286d8b94/prompt.md)
- **白色大圆角卡左文右视频，视频上叠白胶囊和上白下蓝数据卡**
  做法：视频圆角2.5rem，右上压白胶囊标签，左下压190px小卡；少见在小卡分上下两截：上白区大数字进场从0计到86%，下半#3585A5色条配闪电图标，像实物标签
  电脑 · 预览可见 · 来自「Benefits Features」（单个模块） · [预览图](../sources/framesbase/items/c4ea3019-1a4e-4414-9a7e-f486c49511ef/preview.webp) · [提示词](../sources/framesbase/items/c4ea3019-1a4e-4414-9a7e-f486c49511ef/prompt.md)
- **六格黑白直角便当，格高错开一行，像素方块点阵图表**
  做法：6 列 × 10 行网格，中列从第 1 行到第 6 行、两侧到第 5 行，底边上下错位；全零圆角，右上角方框“+”按钮；不常见在用 26 列 5–7px 黑方块拼成阶梯上升图，配色只用黑白灰
  电脑＋手机 · 预览可见 · 来自「Bento Grid Stats」（单个模块） · [预览图](../sources/framesbase/items/0c961259-db56-4e96-b40f-675f1f15cf94/preview.webp) · [提示词](../sources/framesbase/items/0c961259-db56-4e96-b40f-675f1f15cf94/prompt.md)
- **右栏便当格：上方一张大卡，下方两张小卡，各铺抽象流体视频**
  做法：圆角 2.5rem；不常见在用放大裁出纹理：小卡视频分别放大150%、280%居中，只露局部；卡内左上白色文字胶囊、右上白色圆形箭头，底部白字标题或大数字“34”
  电脑＋手机 · 预览可见 · 来自「Bionova Biotech」（只有首屏） · [预览图](../sources/framesbase/items/183981b4-0f68-4471-88f5-3d6bf03c4f2b/preview.webp) · [提示词](../sources/framesbase/items/183981b4-0f68-4471-88f5-3d6bf03c4f2b/prompt.md)
- **三列便当格：高视频卡带时间线、引言卡、大数字视频卡、标签跑马灯卡**
  做法：三列各为嵌套网格，圆角18px；视频卡上下双向深色渐变压暗，左卡底部叠年份·圆点·项目·备注四列时间线，右卡内两行毛玻璃标签反向滚动(24s/28s)、两端 mask 渐隐。不常见在视频卡里叠时间线和跑马灯
  电脑＋手机 · 预览可见 · 来自「Capabilities Overview」（单个模块） · [预览图](../sources/framesbase/items/58852313-cee6-4349-ae39-fd22c634d6c6/preview.webp) · [提示词](../sources/framesbase/items/58852313-cee6-4349-ae39-fd22c634d6c6/prompt.md)
- **三张透明圆角描边卡，上半是与底色同灰的浮雕图标视频，下半标题说明**
  做法：底#C5C5C5，卡片透明、1px黑18%描边、圆角20px，上4:3循环视频、下文字区。不常见在视频里的浮雕图标与区块同灰，像压进纸面；标题逐词上浮间隔0.1s，配003 / 005编号
  电脑＋手机 · 预览可见 · 来自「Cognitra Offer」（单个模块） · [预览图](../sources/framesbase/items/e299a6a2-6e8e-4b24-a2db-e9be3e2ee136/preview.webp) · [提示词](../sources/framesbase/items/e299a6a2-6e8e-4b24-a2db-e9be3e2ee136/prompt.md)
- **风景视频中央一条磨砂玻璃输入框，打字机写出指令**
  做法：玻璃框blur(16px)，底色白35%→12%渐变，6px白20%粗边，顶部1px白50%内阴影；文字每字50ms打出，左回形针、右黑色圆形发送键。少见处：用假的对话输入框演示产品，代替截图
  电脑＋手机 · 预览可见 · 来自「FlowMate」（整页） · [预览图](../sources/framesbase/items/525a6b21-3883-43b8-8ec8-be44162bd851/preview.webp) · [提示词](../sources/framesbase/items/525a6b21-3883-43b8-8ec8-be44162bd851/prompt.md)
- **三张 40px 圆角深灰卡，8px 粗渐变边，背后同色模糊光**
  做法：不常见在粗边加同源光晕：8px 透明边框，纯色 padding-box 叠渐变 border-box 出描边；背后放同一渐变层 blur(45px)、opacity .6；三卡各用 137° 三段色
  电脑 · 预览可见 · 来自「Glow Features」（单个模块） · [预览图](../sources/framesbase/items/b6df95b8-fbf7-4de9-99c9-509551e9663e/preview.webp) · [提示词](../sources/framesbase/items/b6df95b8-fbf7-4de9-99c9-509551e9663e/prompt.md)
- **2×2 功能卡，上半等距线稿插画，下方标题、灰字和黑色方按钮**
  做法：格线不画边框：外框和网格用黑底加3px gap 露出细线；框上下各加一条135°斜线条纹带（repeating-linear-gradient）。不常见在斜纹带收边；4096×2300画布按--u整体缩放，手机仍保持2×2
  电脑＋手机 · 预览可见 · 来自「Gridcore」（单个模块） · [预览图](../sources/framesbase/items/52599ccc-ada4-4a5a-9225-fcba04259fd8/preview.webp) · [提示词](../sources/framesbase/items/52599ccc-ada4-4a5a-9225-fcba04259fd8/prompt.md)
- **左侧团队折叠列表，右侧柱图卡随选中项变化**
  做法：五行手风琴总高恒定341（收65/展81），展开行三角换成蓝色方框；切换时两根柱高370ms缓动、数字800ms递增、说明淡出换字再淡入；不常见在蓝柱顶端单独一截柱帽，与柱身留缝透出背景照片
  电脑＋手机 · 预览可见 · 来自「Growth Analytics」（单个模块） · [预览图](../sources/framesbase/items/29b20047-a7c1-4d3b-b994-1d373f468a16/preview.webp) · [提示词](../sources/framesbase/items/29b20047-a7c1-4d3b-b994-1d373f468a16/prompt.md)
- **三张等高深灰卡，左右为文字卡带蓝色暗光，中间卡上部视频**
  做法：卡高 460px 圆角16px neutral-950；中卡上 75% 放视频，底部 h-32 渐变到卡底色无缝衔接，标题落在下方；左右卡各放一团 blur-3xl 的 #1e3a8a 光斑，一张正文在中部、一张用 mt-auto 压到底。不常见在三张卡文字位置错开
  电脑＋手机 · 预览可见 · 来自「Guardnet Benefits」（单个模块） · [预览图](../sources/framesbase/items/43c4e908-130a-44d2-b0f2-feccf68d0f36/preview.webp) · [提示词](../sources/framesbase/items/43c4e908-130a-44d2-b0f2-feccf68d0f36/prompt.md)
- **四张竖卡，室内照上叠便签、尺寸框、材质色板，底部图标＋标题**
  做法：少见在卡内是固定660×836画板，JS按min(宽/660,高/836)整体缩放，文字用cqw单位；切夜间时照片换夜景图、循环视频4.5s淡入。卡比例319:404。提示词只写了第二张卡
  电脑＋手机 · 预览可见 · 来自「Interior Features」（单个模块） · [预览图](../sources/framesbase/items/f1884c37-7042-47bd-99df-91a6252ff777/preview.webp) · [提示词](../sources/framesbase/items/f1884c37-7042-47bd-99df-91a6252ff777/prompt.md)
- **四张3:4竖卡：三张照片卡带图标标签和说明，一张浅色环形图卡**
  做法：卡片圆角16px、aspect 3/4、四列；照片卡底部叠 #08150C 80%→20%→透明渐变压字；不常见在第三张换成浅米色数据卡，内嵌更浅圆角面板放 SVG 环形图（dasharray 分段、中间50%），打破照片卡节奏
  电脑＋手机 · 预览可见 · 来自「Kova Features」（单个模块） · [预览图](../sources/framesbase/items/d9ff3c79-a41c-4230-966b-15341db1fc98/preview.webp) · [提示词](../sources/framesbase/items/d9ff3c79-a41c-4230-966b-15341db1fc98/prompt.md)
- **三列便当格：竖长视频人像卡、灰绿引言卡、10M+卡、图标墙卡**
  做法：卡片2xl圆角，视频卡与#324444噪点卡交替；小标签大写11px字距0.22em，两侧加星形图标。少见处：履历用四列网格（年份·星·职位·公司）直接叠在人像视频卡底部，不另开区块
  电脑＋手机 · 预览可见 · 来自「Max Reed Portfolio」（单个模块） · [预览图](../sources/framesbase/items/117278d9-b2e0-4cbf-8be4-032e0a0b7246/preview.webp) · [提示词](../sources/framesbase/items/117278d9-b2e0-4cbf-8be4-032e0a0b7246/prompt.md)
- **左列灰字叉号痛点卡，右列深字勾号方案卡，中间圆形视频**
  做法：三列网格 26vw/1fr/26vw；卡片白底、圆角18px、双层淡影 0 3px 9px+0 1px 29px，左灰字右深字形成前后对照；不常见在中间用圆形裁切视频（放大160%居中）当对照轴，手机端视频排最前
  电脑＋手机 · 预览可见 · 来自「NexaCore Control」（单个模块） · [预览图](../sources/framesbase/items/c98422e9-5aac-413a-8257-8e839099bf5a/preview.webp) · [提示词](../sources/framesbase/items/c98422e9-5aac-413a-8257-8e839099bf5a/prompt.md)
- **产品大图四周散布数据卡、标题和红色品牌标签**
  做法：元素按百分比绝对定位：左上 320px 玻璃卡（黑16%＋blur80px、2px 圆角）放 72px 斜体衬线红数字和发光波形线；左下两行 Manrope＋两行斜体 Instrument Serif；右下白条叠 #DA3A16 红块
  电脑＋手机 · 预览可见 · 来自「Nike Hover」（单个模块） · [预览图](../sources/framesbase/items/f780106c-91b1-4c07-a6ef-4c70ca27ebba/preview.webp) · [提示词](../sources/framesbase/items/f780106c-91b1-4c07-a6ef-4c70ca27ebba/prompt.md)
- **左文案右3D方块，方块面带金色光斑和青金渐变**
  做法：纯CSS六面体(preserve-3d，rotateX -16°、rotateY 34°)6秒缓慢浮动；不常见在整块是按钮，点击后14块碎片按各自--tx/--ty/--tz飞散、错开0–210ms，再点收回；爆开效果只在提示词里
  电脑＋手机 · 预览可见 · 来自「Nimbus Ops」（单个模块） · [预览图](../sources/framesbase/items/21c22482-7d12-477a-9413-f4ea767d2de2/preview.webp) · [提示词](../sources/framesbase/items/21c22482-7d12-477a-9413-f4ea767d2de2/prompt.md)
- **三张直角深色卡，上方文案，下方终端窗、合规徽章、二进制锁图**
  做法：卡min-height 464px、零圆角、1px暖白17%边。第一张终端窗与金边YAML卡错位叠放；第二张三行金色对勾徽章；第三张用0和1字符拼出锁形再接三行等宽小表，少见在拿等宽字符画当插图
  电脑＋手机 · 预览可见 · 来自「Nimbus Security」（单个模块） · [预览图](../sources/framesbase/items/8046bd16-0669-4ef8-8ed4-e55002c29c18/preview.webp) · [提示词](../sources/framesbase/items/8046bd16-0669-4ef8-8ed4-e55002c29c18/prompt.md)
- **左列四个方点小标签，右侧文案配金色面板里的深色代码窗，卡片逐张盖上来**
  做法：不常见在叠成手风琴：区块420svh、内层sticky 100svh；卡片滑到index×84px，clip-path inset裁底，前卡只剩84px标题条；左侧标签随进度高亮，点击滚到对应段
  电脑＋手机 · 预览可见 · 来自「Nimbus Sticky Cards」（单个模块） · [预览图](../sources/framesbase/items/9d6d1da1-fdbc-4b0b-a90d-253ead8c5f7b/preview.webp) · [提示词](../sources/framesbase/items/9d6d1da1-fdbc-4b0b-a90d-253ead8c5f7b/prompt.md)
- **文字卡与视频格对角错位成两列，四周细线分段框住**
  做法：grid-cols-[auto_1fr_auto_1fr_auto] grid-rows-3，两段视频各跨 2 行，文字卡 p-12 与之对角错开；格线是 1px 灰线按 gap-4 断成多段。不常见在跨行错位加断线框。
  电脑＋手机 · 预览可见 · 来自「NOVA Space Systems」（整页） · [预览图](../sources/framesbase/items/72bc83ea-aefe-4efa-aa60-7e9627151c85/preview.webp) · [提示词](../sources/framesbase/items/72bc83ea-aefe-4efa-aa60-7e9627151c85/prompt.md)
- **细线圆环中心放射三条线，线外侧大字标出服务名**
  做法：SVG viewBox 100，半径30圆、线宽0.18、45%透明，三条线按215/335/110度伸到半径36，标签放半径46处；少见在悬停标签时字重300→700、对应线加粗到0.6全不透明
  电脑 · 预览可见 · 来自「Radial Diagram」（单个模块） · [预览图](../sources/framesbase/items/00c5dd3b-a42e-4769-ae44-62a5f876c338/preview.webp) · [提示词](../sources/framesbase/items/00c5dd3b-a42e-4769-ae44-62a5f876c338/prompt.md)
- **三张#111直角深色卡，各配一个灰白几何SVG图示，中间卡文字在上**
  做法：图示纯SVG（叠放椭圆、汇聚椭圆、十字节点）；露出22%时标题与卡片从左到右一次进场。不常见在悬停时各部件按自身振幅2–10px、周期2.9–4.6s漂动，移开时从当前相位倒放回原位
  电脑＋手机 · 预览可见 · 来自「Systema」（只有首屏） · [预览图](../sources/framesbase/items/8b13e5df-52ff-4f48-b3fe-d645147e40c1/preview.webp) · [提示词](../sources/framesbase/items/8b13e5df-52ff-4f48-b3fe-d645147e40c1/prompt.md)
- **首屏底部贴边的白色面板，左标题右说明，下排三个编号入口**
  做法：不常见在半露面板：面板 white/90＋blur、去掉下边框和圆角，贴在第一屏底边只露上半引导下滑；下排三格 #F4F3F3 底、“01 / 标签”灰编号，右侧箭头悬停右移 0.5
  电脑＋手机 · 预览可见 · 来自「TrustFlow」（只有首屏） · [预览图](../sources/framesbase/items/c9ddc911-c8ad-4cb2-a386-d541d1116c9a/preview.webp) · [提示词](../sources/framesbase/items/c9ddc911-c8ad-4cb2-a386-d541d1116c9a/prompt.md)
- **首屏底部 2fr:1fr:2fr 三格：浅灰引导、米白轮播、黑底人数**
  做法：三格分用 #ECEDEC、#FEFDF9、黑底贴首屏底边；不常见在中格 4 张图标卡每 3500ms 自动切换（淡入＋上移），底部 4 根 2px 细条当进度，当前黑、其余 black/20
  电脑＋手机 · 预览可见 · 来自「Wellness Balance」（只有首屏） · [预览图](../sources/framesbase/items/9d1c8bb5-f08f-47a1-95aa-e9ee0174f7b6/preview.webp) · [提示词](../sources/framesbase/items/9d1c8bb5-f08f-47a1-95aa-e9ee0174f7b6/prompt.md)
- **世界地图上四条黄色航线，箭头沿线跑，交通图标浮动**
  做法：SVG叠在地图图上，航线描边#FFDA00 2.5，pathLength 0→1依次画出；三角箭头用animateMotion沿路径自动转向；5个黄圈深芯站点弹出；白底圆形船车飞机图标上下浮动2.5–3.3s。少见在箭头沿航线移动
  手机 · 仅提示词 · 来自「Cross-Border」（整页） · [预览图](../sources/framesbase/items/7ab5fd2a-7535-4ce4-9bf0-42f55d70f0c2/preview.webp) · [提示词](../sources/framesbase/items/7ab5fd2a-7535-4ce4-9bf0-42f55d70f0c2/prompt.md)
- **两行宽窄相反的大圆角照片卡，照片上叠玻璃胶囊和迷你名片**
  做法：两行列宽 1060:457、774:738 交错，照片故意放大裁切溢出；不常见在卡里画产品碎片代替图标：一个胶囊经括号形细线连到三张玻璃名片，或三枚带勾选章的玻璃胶囊
  电脑＋手机 · 仅提示词 · 来自「Global Talent」（整页） · [预览图](../sources/framesbase/items/8b57d5cc-3d95-46bd-ab8b-2070b21be008/preview.webp) · [提示词](../sources/framesbase/items/8b57d5cc-3d95-46bd-ab8b-2070b21be008/prompt.md)
- **便当格同样切一张图，底部整行四个服务子卡**
  做法：2 列网格行高 1fr 1fr 0.8fr，右卡跨两行，同样共享背景图；底行四个子卡，当前 white/90 黑字，其余 white/20 模糊白字，右下圆形编号。不常见在玻璃子卡叠切片图
  电脑＋手机 · 仅提示词 · 来自「Health Portal」（整页） · [预览图](../sources/framesbase/items/01f8d904-c8f5-4e08-b1ac-c4450bcc6b51/preview.webp) · [提示词](../sources/framesbase/items/01f8d904-c8f5-4e08-b1ac-c4450bcc6b51/prompt.md)
- **三栏对照：左列五条痛点、中间圆形视频、右列五条好处**
  做法：不常见在用前后对照代替功能卡：栅格26vw|1fr|26vw，左列叉号灰字白卡、右列勾号深字白卡（圆角18、双层浅阴影）；中间圆形裁切视频放大160%居中；手机端视频order-first排最前
  电脑＋手机 · 仅提示词 · 来自「NexaCore」（整页） · [预览图](../sources/framesbase/items/e7078def-f612-45c4-be23-fd06692b6666/preview.webp) · [提示词](../sources/framesbase/items/e7078def-f612-45c4-be23-fd06692b6666/prompt.md)
- **饼干四周四条配料标注，黑色图标方块接毛玻璃文字胶囊**
  做法：每条=81×81黑底圆角24图标块+同高毛玻璃文字胶囊，左右对称排在饼干两侧（上下偏移=半径×0.84）；不常见在滚到63%时图标块回弹旋入，随后文字胶囊从图标一侧scaleX展开
  电脑＋手机 · 仅提示词 · 来自「Sky Cookie」（只有首屏） · [预览图](../sources/framesbase/items/e8e4b3e8-fe8d-46c6-be04-864b3e682100/preview.webp) · [提示词](../sources/framesbase/items/e8e4b3e8-fe8d-46c6-be04-864b3e682100/prompt.md)

## 推荐度 3（26 条）

- 左侧超粗大编号，右侧大写名称和灰色说明，细线分隔 · 电脑 · 预览可见 · 来自「Agency Services」（单个模块） · [目录](../sources/framesbase/items/9e7f6391-f06c-46ee-b73d-90acc3569ccf/)
- 左 38% 标题加按钮，右 62% 四格服务，格间细线分隔 · 电脑 · 预览可见 · 来自「AKOR Security」（整页） · [目录](../sources/framesbase/items/9aaf3e8d-888c-4c6b-a20e-c88515b85037/)
- 三列白色线性图标、细分隔线、标题和灰字，压在虚化农田上 · 电脑＋手机 · 预览可见 · 来自「Arceage Services」（单个模块） · [目录](../sources/framesbase/items/977ae2e9-4614-4cb9-bbd0-4b4c4c9dd769/)
- 三张 280×440 磨砂方角竖卡，紫色线性图标在上，标题沉底 · 电脑 · 预览可见 · 来自「Bloom」（整页） · [目录](../sources/framesbase/items/b1dd3d54-896f-4580-a4e6-073ca9fbb753/)
- 全屏视频上左侧居中一段白色大写标题和短说明 · 电脑＋手机 · 预览可见 · 来自「Cognitra Feature」（单个模块） · [目录](../sources/framesbase/items/c035947f-17bb-4eb0-ba52-d8ee935b42c8/)
- 左侧一句标题加说明，右侧四格图标加短文 · 电脑＋手机 · 预览可见 · 来自「Data Relay」（只有首屏） · [目录](../sources/framesbase/items/1efb915f-a306-4066-a22d-7058a1567334/)
- 黄绿到青色的渐变大面板，中间嵌一个深色聊天窗 · 电脑＋手机 · 预览可见 · 来自「DeepThink」（只有首屏） · [目录](../sources/framesbase/items/bb6806e5-93f8-456f-99c7-c968594648b4/)
- 三张透明玻璃卡，左上图标方块，右上标签胶囊，底部斜体标题 · 电脑＋手机 · 预览可见 · 来自「Digital Experiences」（只有首屏） · [目录](../sources/framesbase/items/85ccd9f8-6a9a-4013-b054-e67c68d58e2b/)
- 四张3:4竖卡，三张植物照片卡，一张米色环形图卡 · 电脑＋手机 · 预览可见 · 来自「Evergreen Finance」（整页） · [目录](../sources/framesbase/items/2dd33d25-fbda-4705-8061-b14462c47f8b/)
- 左侧深灰卡放衬线标题、胶囊标签组和进度线，右侧视频卡 · 电脑 · 预览可见 · 来自「Focus AI」（整页） · [目录](../sources/framesbase/items/7ea7aec1-499d-46f6-ad90-2d3fcacf71fe/)
- 三张深色高卡，两侧卡边缘透蓝光，中间卡上部是流体视频 · 电脑 · 预览可见 · 来自「Guardnet」（整页） · [目录](../sources/framesbase/items/9fe3b9f8-0157-4407-88ee-e3243922ae20/)
- 四栏网格：图片卡跨两栏，两张深紫 #2B2644 卡，标题在上说明在下 · 电脑＋手机 · 预览可见 · 来自「Halo Benefits」（单个模块） · [目录](../sources/framesbase/items/efa3d4e3-51be-4b98-8a30-623359adadca/)
- 左栏眉标、标题、说明，右栏圆角24px视频背景大卡 · 电脑＋手机 · 预览可见 · 来自「Halo Use Case」（单个模块） · [目录](../sources/framesbase/items/2b8016d1-f422-4dd7-9a13-7925cd2f5c95/)
- 压住首屏底部的白框，左衬线标题右说明，下排三格编号条 · 电脑 · 预览可见 · 来自「Lending AI Agents」（只有首屏） · [目录](../sources/framesbase/items/b4c610f0-2332-41ac-a84c-de52645bbca5/)
- 两行图文交替：一侧斜体小标题和段落，一侧产品动图装圆角框 · 电脑 · 预览可见 · 来自「Liquid Glass Agency」（整页） · [目录](../sources/framesbase/items/19fb254c-1e7a-4897-bc2d-a5ff350f7ac6/)
- 两行图文棋盘交替，左文右图再右文左图，按钮和图框都是玻璃质感 · 电脑＋手机 · 预览可见 · 来自「Liquid Glass Features」（单个模块） · [目录](../sources/framesbase/items/5f22fc26-ad52-4f07-942a-9adac31a3176/)
- 三列平台卡，每张200px的3D图标配名称和说明 · 电脑 · 预览可见 · 来自「Mindloop Landing」（整页） · [目录](../sources/framesbase/items/1ebbc0e8-993f-4591-8982-14a64aa52ad5/)
- 左侧竖长卡加右侧一宽两窄的视频便当格 · 电脑 · 预览可见 · 来自「Nexora Features」（单个模块） · [目录](../sources/framesbase/items/277c3d81-21a8-4ea1-a16d-f22d863618eb/)
- 四列等高深灰卡，首张整卡视频，其余为图标、编号、勾选清单 · 电脑＋手机 · 预览可见 · 来自「Prisma Creative Studio」（整页） · [目录](../sources/framesbase/items/08d773cd-ac28-492f-8116-9d3abb0478b1/)
- 白色便当格：左侧高卡、右上宽卡、右下两张小卡，角上带编号 · 电脑 · 预览可见 · 来自「RIVR DeFi」（整页） · [目录](../sources/framesbase/items/34844aec-9b9e-4a8c-ab41-3b9b3e5561aa/)
- 四栏网格：一张跨两栏的图片卡，两张深紫纯色卡 · 电脑 · 预览可见 · 来自「USD Halo」（整页） · [目录](../sources/framesbase/items/b7105b8c-1501-4269-a7eb-fd16f0bd9c02/)
- 左栏固定标题和功能按钮，右栏三张带视频的半透明卡随滚动出现 · 电脑＋手机 · 仅提示词 · 来自「ADHD Planner」（整页） · [目录](../sources/framesbase/items/4cc14b2b-12b8-4d9b-b94a-a8cd79834d06/)
- 三张深色功能卡，上方是渐变细圆环、钥匙底座、地球视频等纯 CSS 插图 · 电脑＋手机 · 仅提示词 · 来自「Crypto Vault」（只有首屏） · [目录](../sources/framesbase/items/871ba2c2-9def-4366-87f0-26b5f1e577ac/)
- 左右对半：纯蓝或青柠商品面板配视频，下一屏左右互换 · 电脑＋手机 · 仅提示词 · 来自「Daisy Shop」（整页） · [目录](../sources/framesbase/items/7a83723f-8aa3-426f-9edf-9faea823be12/)
- 左侧四个方点标签，右侧四张卡随滚动依次升起叠放 · 电脑＋手机 · 仅提示词 · 来自「Nimbus Grid」（整页） · [目录](../sources/framesbase/items/0d647e69-06a1-4653-bcb9-a5a400aad8b9/)
- 三列便当格，图片卡、视频卡和白底小格组合 · 电脑＋手机 · 仅提示词 · 来自「Sentinel」（整页） · [目录](../sources/framesbase/items/ad42285c-ab93-4884-a40b-f46a231c09bd/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/features-*.tsx`（9 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
