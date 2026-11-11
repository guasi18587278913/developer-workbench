# 数据看板与图表

共 23 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（8 条）

- **半圆仪表由 10 块圆角扇形组成，7 块橙色，中间日期、热量和目标**
  做法：SVG内外半径90/145，-180°到0°分10块、间隔4°，每块四角用二次曲线收圆；容器高231px裁掉下半；1.8s缓出逐块点亮#FE9B66。不常见在分块圆角扇形
  手机 · 预览可见 · 来自「AI Calorie Tracker」（应用界面） · [预览图](../sources/framesbase/items/12389bdf-1135-432d-b8bb-b22f86f221cc/preview.webp) · [提示词](../sources/framesbase/items/12389bdf-1135-432d-b8bb-b22f86f221cc/prompt.md)
- **暖色玻璃看板，三张图表卡：细竖条柱图、点阵、高亮一根柱**
  做法：柱宽仅1–2px、间距2.5px；7×12点阵横12纵9不等距，按行80ms列30ms涟漪弹出；未选中柱填tan/10加2px米色顶线，只有一根实心。面板下垫#EED3B3色块透玻璃发光。不常见在细线化图表
  电脑＋手机 · 预览可见 · 来自「Ascera AI」（只有首屏） · [预览图](../sources/framesbase/items/809189f2-a6b3-4e2e-a4a6-1da16fb57d1e/preview.webp) · [提示词](../sources/framesbase/items/809189f2-a6b3-4e2e-a4a6-1da16fb57d1e/prompt.md)
- **五张毛玻璃卡和一张城市夜景高卡，含进度条、柱状图和环形图**
  做法：不常见在照片上直铺看板：人物照不加暗层，卡片 white/.107＋blur 30u、圆角 24u，从底部向上排两行；右侧高卡自带城市照片底，环形图用 conic-gradient 235° 分两色再遮成细环，评分用 10 格分段条
  电脑＋手机 · 预览可见 · 来自「Finance Assistant」（应用界面） · [预览图](../sources/framesbase/items/0f8cffb7-98f8-4074-8df8-1737c42cc14d/preview.webp) · [提示词](../sources/framesbase/items/0f8cffb7-98f8-4074-8df8-1737c42cc14d/prompt.md)
- **无坐标轴的白色波浪曲线直接画在照片上，上排温度下排星期**
  做法：SVG用preserveAspectRatio=none，三层描边(6.2px@.17、4.6@.26、3.4@1)做光晕，填充加纵向渐隐mask；pathLength=1靠dashoffset自绘1.6s，填充晚约220ms左→右擦入。不常见在曲线融进背景当主视觉
  电脑＋手机 · 预览可见 · 来自「Forecast Center」（应用界面） · [预览图](../sources/framesbase/items/3dc22911-f055-4773-b754-497b02af0407/preview.webp) · [提示词](../sources/framesbase/items/3dc22911-f055-4773-b754-497b02af0407/prompt.md)
- **玻璃大面板里 3D 心脏冲出上下沿，背后横穿曲线和读数胶囊**
  做法：面板圆角 80px、blur(60px) saturate(.8)、1px 内高光；不常见在心脏图层高于面板、冲出边框，曲线从心脏背后穿过、两端渐隐；心形标记以 13/12 虚线连白色 SpO2 胶囊
  电脑＋手机 · 预览可见 · 来自「Heart Health Dashboard」（应用界面） · [预览图](../sources/framesbase/items/76084b77-740a-484e-97bf-195a99cbe572/preview.webp) · [提示词](../sources/framesbase/items/76084b77-740a-484e-97bf-195a99cbe572/prompt.md)
- **4×2 卡片网格：人物照、柱状图、计时环、深色待办列表、日历**
  做法：4列2行、第4列跨两行放深色待办面板；柱状图只把周五柱染黄 #FFD85F 且只有它出提示；计时环70%黄弧，其余画60根刻度、进度区刻度隐藏。不常见在刻度环和单柱高亮；卡片白60%+模糊
  电脑＋手机 · 预览可见 · 来自「Modern HR Dashboard」（应用界面） · [预览图](../sources/framesbase/items/3bed1678-8ec8-4177-bca6-18fcdfe29ef5/preview.webp) · [提示词](../sources/framesbase/items/3bed1678-8ec8-4177-bca6-18fcdfe29ef5/prompt.md)
- **带工作区间框和十字光点的横向条形图，左列指标名右列百分比条**
  做法：每行左指标名加灰小注，右轨道叠四层：蓝描边区间框、蓝到白渐变填充条、右端数值、6个十字星光点；框内用repeating-linear-gradient画10%竖网格。少见在条内叠区间框和光点
  电脑＋手机 · 预览可见 · 来自「Technical Specifications」（单个模块） · [预览图](../sources/framesbase/items/76cc56ac-4363-4612-ac27-80aa854721b2/preview.webp) · [提示词](../sources/framesbase/items/76cc56ac-4363-4612-ac27-80aa854721b2/prompt.md)
- **两张半透明黑玻璃卡：带虚线时间轴的配置卡、带多峰折线的资产卡**
  做法：卡底 rgba(0,0,0,.325)+模糊 77.65u、圆角 25u；圆点间用重复渐变画 2u 实 6u 空的竖虚线当时间轴，未来项降到 .2；折线下垫 1/5 虚线竖格；提示词另有雷达图看板
  电脑＋手机 · 预览可见 · 来自「Wealthcore」（只有首屏） · [预览图](../sources/framesbase/items/49f00ed8-33ca-4ee8-90b1-ac041a37635e/preview.webp) · [提示词](../sources/framesbase/items/49f00ed8-33ca-4ee8-90b1-ac041a37635e/prompt.md)

## 推荐度 4（11 条）

- **大数字 28 叠在旋转粒子图上，下方胶囊标签和金色刻度尺**
  做法：数字 132px、tabular-nums，1.8s 从 0 数到 28 后每 6s 加 1；背景图 inset -5% 慢转 30s 一圈；刻度尺每 5 格长 26px、其余 18px，金色半透明，12s 无限平移，中间固定 40px 指针，两端遮罩渐隐
  电脑＋手机 · 预览可见 · 来自「Bio-Age Dashboard」（只有首屏） · [预览图](../sources/framesbase/items/b1d9266f-e8d0-408d-aa23-130acb01b497/preview.webp) · [提示词](../sources/framesbase/items/b1d9266f-e8d0-408d-aa23-130acb01b497/prompt.md)
- **4×2 会议室卡：白卡和半透明玻璃卡交错，卡底叠放头像加人数圆**
  做法：实心白卡与玻璃卡交错排，同屏两种材质，少见；圆角 40px、间距 24px；卡底 32px 头像 -12px 叠放加 38px 灰圆计数；周报卡 60 根竖条，前 24 根 #3b82f6、其余浅灰
  电脑＋手机 · 预览可见 · 来自「Dashboard UI」（应用界面） · [预览图](../sources/framesbase/items/b4e90f5d-f10b-4017-97d8-402468586570/preview.webp) · [提示词](../sources/framesbase/items/b4e90f5d-f10b-4017-97d8-402468586570/prompt.md)
- **饮水卡用24个杯子图标当进度，热量卡用30根竖条当进度**
  做法：饮水卡6×4杯子阵列，满杯深蓝、空杯白色，右下90px细体2.15L加D/W/M圆钮；热量卡30根7.5px胶囊竖条，前21根橄榄绿其余浅灰。少见在用图标阵列和分段竖条代替进度环
  电脑＋手机 · 预览可见 · 来自「Fitness Dashboard」（应用界面） · [预览图](../sources/framesbase/items/69f0c062-7a17-4737-91f1-56c18f595195/preview.webp) · [提示词](../sources/framesbase/items/69f0c062-7a17-4737-91f1-56c18f595195/prompt.md)
- **详情面板：单号芯片、ON TIME白签、25px大字正文、终端日志底栏**
  做法：正文25.5px、行高34.4，写成整段叙述而非字段表；底部119px黑底日志区，四行等宽“> Tracking”记录加绿色闪烁光标（1.1s steps）；不常见在用大段文字和终端日志代替键值列表
  电脑＋手机 · 预览可见 · 来自「Freight Command」（应用界面） · [预览图](../sources/framesbase/items/97638f78-ee79-4f4b-be0a-2533f1cb841a/preview.webp) · [提示词](../sources/framesbase/items/97638f78-ee79-4f4b-be0a-2533f1cb841a/prompt.md)
- **浅蓝语音输入卡，衬线大字旁一排蓝色声波竖条**
  做法：#DBECFC圆角卡，蓝胶囊“Audio Input”+Instrument Serif三行大字；35根w-0.5蓝色圆头竖条按给定高度数组×0.8排成静态声波；白色麦克风圆钮-bottom-4居中，一半压出卡外
  电脑 · 预览可见 · 来自「Nexar」（应用界面） · [预览图](../sources/framesbase/items/fc46e2cd-c997-4319-b575-3074317c69ba/preview.webp) · [提示词](../sources/framesbase/items/fc46e2cd-c997-4319-b575-3074317c69ba/prompt.md)
- **半透明玻璃卡：营收标签、大金额、涨幅徽标、白色细柱图**
  做法：金额拆两段，.00 用 white/20 压暗；32 根柱间距 1.5px，末 4 根 white/10 表示预测，叠 5 条竖线；柱子每根晚 30ms 自底长出。不常见在压暗小数和预测柱
  电脑＋手机 · 预览可见 · 来自「Quantum Core」（只有首屏） · [预览图](../sources/framesbase/items/63032715-18a2-4424-a7f9-3474d004b3a1/preview.webp) · [提示词](../sources/framesbase/items/63032715-18a2-4424-a7f9-3474d004b3a1/prompt.md)
- **巨型等级数字 51 压灰色 LEVEL 条，下接四条黑色属性进度线**
  做法：等级数字 111u 灰 #454546 右对齐，下方 34u 高灰条写 LEVEL、字距 5.85u；属性行标签左、数值右，下面 6u 黑色填充条加 2u 细底线；旁边一根不可操作的装饰滚动条
  电脑＋手机 · 预览可见 · 来自「Robot Battle Arena」（应用界面） · [预览图](../sources/framesbase/items/28f0ede6-4ef5-4224-8413-083968f60b18/preview.webp) · [提示词](../sources/framesbase/items/28f0ede6-4ef5-4224-8413-083968f60b18/prompt.md)
- **半圆刻度仪表，一圈短刻度线，橙色段表示完成度**
  做法：SVG viewBox 200×120，180°弧上画40根短线（粗2.5、圆头），完成数=value/100×40根着橙#ef4d23，其余#d4d4d8，中心写百分比。少见在用离散刻度代替连续圆弧
  电脑＋手机 · 预览可见 · 来自「SAAS Software」（只有首屏） · [预览图](../sources/framesbase/items/61b88072-c64a-4045-a305-362c935a408f/preview.webp) · [提示词](../sources/framesbase/items/61b88072-c64a-4045-a305-362c935a408f/prompt.md)
- **深色横向条形图：每行有目标区间框、渐变数值条和闪光点**
  做法：不常见在区间带：轨道里先画半透明描边的区间框，再叠蓝到浅蓝渐变数值条，右端写数值，条上撒十字闪光点；背景每10%一条竖网格线；上方4个标签切数据集，下划线4px渐变scaleX展开
  电脑 · 仅提示词 · 来自「AeroCore」（整页） · [预览图](../sources/framesbase/items/94442dc0-b9e6-4b84-90fc-d9c2b1bde990/preview.webp) · [提示词](../sources/framesbase/items/94442dc0-b9e6-4b84-90fc-d9c2b1bde990/prompt.md)
- **紫粉渐变增长曲线，关键点用竖线标数值**
  做法：曲线是 4px #8238DC→#F75CB7 渐变线叠 24px 宽淡白光晕线和面积填充；不画 Y 轴，关键点用 2px 白竖线连到上方大数字（32%、127%），点为蓝色渐变小圆
  电脑 · 仅提示词 · 来自「Investor Deck」（整页） · [预览图](../sources/framesbase/items/7bc4b52a-bb68-4ce7-be12-327e7cd6d7a7/preview.webp) · [提示词](../sources/framesbase/items/7bc4b52a-bb68-4ce7-be12-327e7cd6d7a7/prompt.md)
- **三张白卡各一个大数字和柱状图，柱体半透明、顶端一条实线**
  做法：不常见在柱形：Recharts 自定义 shape，每根柱画两个 rect，底层 #141414 透明度0.05，顶端 2px 实心盖线；标题 12px 大写 40%黑，数值 text-4xl
  电脑＋手机 · 仅提示词 · 来自「Zenith Realty」（整页） · [预览图](../sources/framesbase/items/d5064e77-ffc6-40e4-b54c-a2ff632b8b19/preview.webp) · [提示词](../sources/framesbase/items/d5064e77-ffc6-40e4-b54c-a2ff632b8b19/prompt.md)

## 推荐度 3（4 条）

- 暗色指挥台看板：侧栏、搜索顶栏、四张带走势线的指标卡 · 电脑＋手机 · 预览可见 · 来自「Frontier」（只有首屏） · [目录](../sources/framesbase/items/88db028b-23cf-45da-b771-c63eb90f7c62/)
- 白色后台：侧栏、搜索顶栏、余额折线卡、账户卡和交易表 · 电脑＋手机 · 预览可见 · 来自「Nexora Automation」（只有首屏） · [目录](../sources/framesbase/items/be66f2cf-26ae-4a52-ba65-b9f235529479/)
- 视频大卡右下角贴一张白色看板：曲线图、提示框、渠道列表 · 电脑 · 仅提示词 · 来自「Crypto Wealth」（只有首屏） · [目录](../sources/framesbase/items/d9c6b9d3-7289-45c5-aa18-fd95290196d6/)
- 半透明玻璃浏览器窗口里五张圆角卡片的数据看板 · 电脑＋手机 · 仅提示词 · 来自「Peakline Redshift」（只有首屏） · [目录](../sources/framesbase/items/f2b83e6a-88a5-4ac5-bd5f-3100feb26292/)
