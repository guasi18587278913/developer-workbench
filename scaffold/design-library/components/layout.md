# 整体布局与网格

共 27 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（1 条）

- **整页细线外框，导航下和首屏下各一条斜纹带**
  做法：不常见在用斜纹带当分隔：25px高、-45°重复条纹（线1.25、周期6.25）；外框只画上下线，左右竖线只画在导航、首屏、标志条上，到斜纹带断开；首屏下半淡入加号网格；全页零圆角，按1440宽等比缩放
  电脑＋手机 · 预览可见 · 来自「Codeveil」（只有首屏） · [预览图](../sources/framesbase/items/132802df-2dc9-45ec-a69f-7c743bdc1f34/preview.webp) · [提示词](../sources/framesbase/items/132802df-2dc9-45ec-a69f-7c743bdc1f34/prompt.md)

## 推荐度 4（19 条）

- **中间整块留给 3D 户型，四角挂控件，右侧一列三张玻璃卡**
  做法：不整体等比缩放留黑边，而是拆成四个贴角区块各自 zoom 缩放，右栏宽 394 单独按高度缩放；四角放能源标签、小户型线稿(四个 L 角框)、户型数据、图库/地图缩略钮
  电脑＋手机 · 预览可见 · 来自「3D Property」（应用界面） · [预览图](../sources/framesbase/items/791ff0e0-b2b2-4fe2-98b4-4630dcd85f0f/preview.webp) · [提示词](../sources/framesbase/items/791ff0e0-b2b2-4fe2-98b4-4630dcd85f0f/prompt.md)
- **黑色圆角大面板里左右两块等宽圆角窗格，四周留10px**
  做法：整屏按1685×1073画板写死像素坐标，再按 min(宽/1685,高/1073) 等比缩放进视口，这是少见处；窗格宽(100%-31px)/2、圆角26px；1200px 以下改为流式文档
  电脑＋手机 · 预览可见 · 来自「Crypto Vault」（只有首屏） · [预览图](../sources/framesbase/items/871ba2c2-9def-4366-87f0-26b5f1e577ac/preview.webp) · [提示词](../sources/framesbase/items/871ba2c2-9def-4366-87f0-26b5f1e577ac/prompt.md)
- **整屏按 1341×958 画布等比缩放，元素全部绝对定位**
  做法：不常见在单位：定义 --u = min(100vw/1341, 100vh/958)，所有尺寸写成 calc(n * var(--u))；边距 22u、间距 8u；竖屏平板改用 688×1392 基准，手机改单列滚动、导航变底部玻璃坞
  电脑＋手机 · 预览可见 · 来自「Finance Assistant」（应用界面） · [预览图](../sources/framesbase/items/0f8cffb7-98f8-4074-8df8-1737c42cc14d/preview.webp) · [提示词](../sources/framesbase/items/0f8cffb7-98f8-4074-8df8-1737c42cc14d/prompt.md)
- **左侧110px图标栏加三行便当格，整屏不滚动、等比缩放**
  做法：根字号 clamp(7px,min(100vw/90.5,100dvh/67.875),23px)，尺寸用rem；少见在按宽高取小值整体缩放不滚动；网格行比121/469/447fr，列比用设计稿像素
  电脑＋手机 · 预览可见 · 来自「Fitness Dashboard」（应用界面） · [预览图](../sources/framesbase/items/69f0c062-7a17-4737-91f1-56c18f595195/preview.webp) · [提示词](../sources/framesbase/items/69f0c062-7a17-4737-91f1-56c18f595195/prompt.md)
- **左侧玻璃侧栏，主区绝对定位，右侧四张玻璃卡竖排**
  做法：以1357×871为画布，--u=min(100vw/1357,100dvh/871)，所有尺寸写calc(N*var(--u))，整屏等比缩放不留空带。不常见在用单位变量代替网格；≤860px改单列，侧栏变底部dock
  电脑＋手机 · 预览可见 · 来自「Forecast Center」（应用界面） · [预览图](../sources/framesbase/items/3dc22911-f055-4773-b754-497b02af0407/preview.webp) · [提示词](../sources/framesbase/items/3dc22911-f055-4773-b754-497b02af0407/prompt.md)
- **三块细边框面板，四角各有L形折角标记**
  做法：1586×992画板等比缩放，屏幕更大时多出的宽高分给中栏和右栏；面板1px#2e2e2e边，四角22×22 L形#6e6e6e线外扩1px；不常见在用折角代替圆角和阴影划分区域。手机切成队列/筛选/详情分视图
  电脑＋手机 · 预览可见 · 来自「Freight Command」（应用界面） · [预览图](../sources/framesbase/items/97638f78-ee79-4f4b-be0a-2533f1cb841a/preview.webp) · [提示词](../sources/framesbase/items/97638f78-ee79-4f4b-be0a-2533f1cb841a/prompt.md)
- **整屏按1205×884画布等比缩放，内容带垂直居中**
  做法：--k取min(100vw/1205,100svh/884)，尺寸全写calc(N*var(--k))，视频全屏铺底；用max-aspect-ratio:11/10判断竖屏，改--k=100vw/430并底部堆叠。不常见在按宽高比而非宽度切手机布局
  电脑＋手机 · 预览可见 · 来自「Open Agent」（只有首屏） · [预览图](../sources/framesbase/items/9b467c85-58c8-4f4a-bf77-b10a799ce961/preview.webp) · [提示词](../sources/framesbase/items/9b467c85-58c8-4f4a-bf77-b10a799ce961/prompt.md)
- **三个整屏场景不滚动，靠底栏Back/Next按钮切换**
  做法：不常见在按钮换场代替滚动：三段视频fixed叠放，当前屏不透明，700ms交叉淡化；内容进场y80→0、scale1.08→1、blur14→0，出场上移并模糊；每屏底栏左返回、中标语、右下一屏
  电脑＋手机 · 预览可见 · 来自「Orbit Engineers」（整页） · [预览图](../sources/framesbase/items/3b161556-fdf7-453e-869e-474994785681/preview.webp) · [提示词](../sources/framesbase/items/3b161556-fdf7-453e-869e-474994785681/prompt.md)
- **文案钉左上、玻璃卡钉右下的对角构图，两侧细竖线带加号**
  做法：≥768px时底部区为整高flex行，文案align-self:flex-start、卡片flex-end形成对角；左右1.25rem处各一条1px黑20%竖线，在15%处断开插入“+”字符。不常见在竖线加号刻度
  电脑＋手机 · 预览可见 · 来自「Planetary Pulse」（只有首屏） · [预览图](../sources/framesbase/items/127a6c46-776c-4ceb-841e-414b93844084/preview.webp) · [提示词](../sources/framesbase/items/127a6c46-776c-4ceb-841e-414b93844084/prompt.md)
- **三栏：左列表、中间留空给角色图、右属性栏，整屏按比例缩放**
  做法：按 1414×900 画板定单位 --u=clamp(0.5px,min(100vw/1414,100vh/900),1.45px)，所有尺寸写成 N×u；栅格 auto|minmax(120u,1fr)|456u，中间空栏露出背景人物；竖屏改为上列表下属性面板
  电脑＋手机 · 预览可见 · 来自「Robot Battle Arena」（应用界面） · [预览图](../sources/framesbase/items/28f0ede6-4ef5-4224-8413-083968f60b18/preview.webp) · [提示词](../sources/framesbase/items/28f0ede6-4ef5-4224-8413-083968f60b18/prompt.md)
- **固定1486×1058画板整体等比缩放铺满视口**
  做法：元素全按设计稿绝对定位，scale取min(vw/1486,vh/1058)，高度最多拉到1.8倍，再把画板宽高设为视口÷scale，非限制轴不裁切；不常见在靠扩画板补满而不留黑边。窄于700px改流式重排
  电脑＋手机 · 仅提示词 · 来自「Frontier」（只有首屏） · [预览图](../sources/framesbase/items/88db028b-23cf-45da-b771-c63eb90f7c62/preview.webp) · [提示词](../sources/framesbase/items/88db028b-23cf-45da-b771-c63eb90f7c62/prompt.md)
- **整页按 1685 宽设计稿等比缩放，首屏同时受视口高度约束**
  做法：尺寸都写成 calc(设计值*var(--k))，--k=(100vw-40px)/1685，须带 px；不常见在首屏另取 min(宽度比, 视口高/1011) 保证一屏放下；1080px 以下改流式
  电脑＋手机 · 仅提示词 · 来自「Global Talent」（整页） · [预览图](../sources/framesbase/items/8b57d5cc-3d95-46bd-ab8b-2070b21be008/preview.webp) · [提示词](../sources/framesbase/items/8b57d5cc-3d95-46bd-ab8b-2070b21be008/prompt.md)
- **固定 1920×1440 画布整体等比缩放，平板竖屏和手机各自重排**
  做法：缩放取 min(铺满, 面板和心脏完整可见)，背景取 max，不留白不裁主体；不常见在平板竖屏换 1200×1560 画布重摆，750px 以下改五行网格，尺寸全用 em 挂在一个 clamp() 上
  电脑＋手机 · 仅提示词 · 来自「Heart Health Dashboard」（应用界面） · [预览图](../sources/framesbase/items/76084b77-740a-484e-97bf-195a99cbe572/preview.webp) · [提示词](../sources/framesbase/items/76084b77-740a-484e-97bf-195a99cbe572/prompt.md)
- **整屏按1487×1058画板等比缩放，以高度为准**
  做法：不常见在以高锁定：--u=100dvh/1058，字号用--h=clamp(u,0.65u+0.35宽单位,1.16u)，宽屏字最多放大16%；元素按画板坐标绝对定位；竖屏(宽高比≤11/10)改流式布局
  电脑＋手机 · 仅提示词 · 来自「Intelligence Layer」（只有首屏） · [预览图](../sources/framesbase/items/4f4243af-0c88-4e21-872e-c64afed1bde6/preview.webp) · [提示词](../sources/framesbase/items/4f4243af-0c88-4e21-872e-c64afed1bde6/prompt.md)
- **整屏按1280×712设计稿等比缩放，元素全按设计单位绝对定位**
  做法：--k=min(100vw/1280,100vh/712)，位置字号都写calc(N*var(--k))，永不裁切，多余高度用--slack分给中部。不常见在平板、竖屏、手机各有专门改版
  电脑＋手机 · 仅提示词 · 来自「NEX Robotics」（只有首屏） · [预览图](../sources/framesbase/items/865f7975-09c2-45f7-8f2a-3d1c597e2fe9/preview.webp) · [提示词](../sources/framesbase/items/865f7975-09c2-45f7-8f2a-3d1c597e2fe9/prompt.md)
- **整块构图以7556px画板为基准等比缩放**
  做法：定义--px:calc(100vw/7556)，所有位置和字号写成calc(N*var(--px))，整屏像一张图一起缩放；1180px以下把--px钉死为0.17px并改成网格流式；不常见在单变量整屏等比再分档钉死
  电脑＋手机 · 仅提示词 · 来自「Nietzsche sustainibilty」（单个模块） · [预览图](../sources/framesbase/items/1246a299-6aef-4e0a-806b-b4776bcab59f/preview.webp) · [提示词](../sources/framesbase/items/1246a299-6aef-4e0a-806b-b4776bcab59f/prompt.md)
- **整屏按横、竖两块画板等比缩放，不用宽度断点**
  做法：所有尺寸写成 N×--u，--u=.01em，font-size 取 min(max(100vw/14.4,100svh/8.62),100svh/6.8,175px)；不常见在只用 max-aspect-ratio:1/1 切竖屏画板（参考390×844），视频也分横竖两个 source
  电脑＋手机 · 仅提示词 · 来自「Skyflora」（只有首屏） · [预览图](../sources/framesbase/items/3958342c-d2b0-45ac-bf03-3ece33eca11b/preview.webp) · [提示词](../sources/framesbase/items/3958342c-d2b0-45ac-bf03-3ece33eca11b/prompt.md)
- **固定画板按视口宽度整体缩放，1280 以下改栅格重排**
  做法：1800×2612 画板按 clientWidth/1700.406 缩放；1279px 以下用 scale(1/缩放) 抵消，改 grid 按真实像素重排，少见；首屏高另按 100vh
  电脑＋手机 · 仅提示词 · 来自「Skytrace」（只有首屏） · [预览图](../sources/framesbase/items/c72b86d8-d01f-4ad6-8a52-20790dc55acd/preview.webp) · [提示词](../sources/framesbase/items/c72b86d8-d01f-4ad6-8a52-20790dc55acd/prompt.md)
- **整屏按 1353×1163 设计稿等比缩放的固定构图**
  做法：定义 --u 为一个设计像素，所有尺寸写成 calc(N*var(--u))，--u 取宽高比例的较小值；高屏用 --vshift 把内容下移 42%；不常见在整页单变量缩放并分六档重设 --u
  电脑＋手机 · 仅提示词 · 来自「Space planet」（只有首屏） · [预览图](../sources/framesbase/items/72b8ebb1-3d60-4bea-8e76-968a8b563982/preview.webp) · [提示词](../sources/framesbase/items/72b8ebb1-3d60-4bea-8e76-968a8b563982/prompt.md)

## 推荐度 3（7 条）

- 左52%圆角玻璃面板装导航和首屏，右48%露视频放卡片 · 电脑 · 预览可见 · 来自「Bloom AI」（只有首屏） · [目录](../sources/framesbase/items/4823a413-c013-43e7-a979-c9ee61b4af12/)
- 规范页主体是两栏无间距面板，细线分格，每块左上小标题带延长线 · 电脑＋手机 · 预览可见 · 来自「Duolingo Styleguide」（整页） · [目录](../sources/framesbase/items/bac2c974-f18a-4efd-ab88-a1da622a4122/)
- 整页做成居中640px单列邮件卡，区块间用短分隔线 · 电脑 · 预览可见 · 来自「Email Marketing」（整页） · [目录](../sources/framesbase/items/b68ca730-81b8-4407-85c5-a79dc1dc2949/)
- 左列三张竖排缩略图、中间主画面、右侧聊天栏 · 电脑 · 预览可见 · 来自「Live Language Classes」（应用界面） · [目录](../sources/framesbase/items/5a360021-3646-45fd-bfab-119ad064141c/)
- 12栏分3/6/3，左大数字，中任务卡竖排，右快捷指令 · 电脑 · 预览可见 · 来自「Nexar」（应用界面） · [目录](../sources/framesbase/items/fc46e2cd-c997-4319-b575-3074317c69ba/)
- 整屏按画板单位等比缩放，左内容右灰度视频栏，页面不滚动 · 电脑＋手机 · 预览可见 · 来自「Wealthcore」（只有首屏） · [目录](../sources/framesbase/items/49f00ed8-33ca-4ee8-90b1-ac041a37635e/)
- 按1600×780设计稿整屏等比缩放，竖屏改流式布局 · 电脑＋手机 · 仅提示词 · 来自「Northstar」（只有首屏） · [目录](../sources/framesbase/items/4b06e1f0-bfc7-4576-a244-0532f6e05452/)
