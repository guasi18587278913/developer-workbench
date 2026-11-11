# 页脚

共 21 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（3 条）

- **视频品牌卡+浅灰链接卡，角上斜放蓝色立方徽标**
  做法：350px+1fr两卡圆角28；右卡顶外溢96px蓝渐变方块转-10°、内字反转10°，配Caveat手写“Feeling lucky?”和手绘箭头，栏标题也用Caveat；水印fill黑4%，JS用getBBox把viewBox裁到字形贴满宽。少见在手写点缀与贴边水印
  电脑＋手机 · 预览可见 · 来自「Kresna Footer」（单个模块） · [预览图](../sources/framesbase/items/9d7b8402-0653-474e-b9cd-c744112e4f03/preview.webp) · [提示词](../sources/framesbase/items/9d7b8402-0653-474e-b9cd-c744112e4f03/prompt.md)
- **四栏表格页脚，每个链接独占一格，上下夹 45° 斜线带**
  做法：grid 1.334fr 1fr 1fr 1fr，三栏各为 72px 灰底 #E7E5E0 表头＋4 行 58px 链接格，全用 1px 纯黑线；斜线带 repeating-linear-gradient 45°、7px、墨量 17.5%，不加左右边，横穿打断外框
  电脑＋手机 · 预览可见 · 来自「Mistveil」（只有首屏） · [预览图](../sources/framesbase/items/0de20a2a-5bfc-4897-b2c4-a70db52efe2d/preview.webp) · [提示词](../sources/framesbase/items/0de20a2a-5bfc-4897-b2c4-a70db52efe2d/prompt.md)
- **白面板：左上橙色太阳标，右上四列链接，横线下左标语右社交图标**
  做法：四层叠放：天空图z1、白面板z2、透明PNG山景z3、文字z4，山脊越过面板下半部但在文字之下；横线分开链接和标语；手机端链接4列变2列、山景钉在底部；不常见在风景咬进页脚面板
  电脑＋手机 · 预览可见 · 来自「Nietzsche sustainibilty」（单个模块） · [预览图](../sources/framesbase/items/1246a299-6aef-4e0a-806b-b4776bcab59f/preview.webp) · [提示词](../sources/framesbase/items/1246a299-6aef-4e0a-806b-b4776bcab59f/prompt.md)

## 推荐度 4（9 条）

- **上圆角磨砂玻璃页脚压住首屏视频，三列链接加品牌列和胶囊邮箱框**
  做法：margin-top -120px 盖住首屏底部，blur(12px) saturate(120%)，黑 .38→.80 渐变，1px 内高光、上圆角 22px；手机版改折叠。不常见在页脚上提透出视频
  电脑＋手机 · 预览可见 · 来自「Global CTA Footer」（只有首屏） · [预览图](../sources/framesbase/items/31198968-94ab-4c75-8db0-45f922971eb9/preview.webp) · [提示词](../sources/framesbase/items/31198968-94ab-4c75-8db0-45f922971eb9/prompt.md)
- **白色圆角页脚卡压在整屏风景插画上部，下半屏露出卡车公路**
  做法：页脚不贴底，做成 bg-white/95 圆角卡浮在整屏插画顶部，下半屏留给风景，这是少见处；卡车另做前景层，随滚动 y 从-50到150px 视差；社交图标40px 圆，悬停橙底
  电脑＋手机 · 预览可见 · 来自「HAUL!」（单个模块） · [预览图](../sources/framesbase/items/a68702dd-a4e1-4fdc-b011-1540872534a9/preview.webp) · [提示词](../sources/framesbase/items/a68702dd-a4e1-4fdc-b011-1540872534a9/prompt.md)
- **浮在视频上的大圆角玻璃页脚，左品牌说明右三列链接**
  做法：页脚是rounded-3xl卡：白1%底、blur(4px)，::before用1.4px渐变边加mask-composite，上下边亮45%中段透明；12栏分5/7，链接区再分3列。不常见在边框只亮上下两端
  电脑 · 预览可见 · 来自「Lumina」（单个模块） · [预览图](../sources/framesbase/items/0157c334-0f99-43f9-a616-0049308d6026/preview.webp) · [提示词](../sources/framesbase/items/0157c334-0f99-43f9-a616-0049308d6026/prompt.md)
- **首屏底部两栏：左 Pages 两个链接，右 Write 邮箱，下方版权**
  做法：整页不放顶栏，导航放进首屏底部当页脚：小号 60% 标签 Pages/Write，下面 24px 大字链接；左右两端对齐，手机端改上下排；版权 50% 透明 12px
  电脑＋手机 · 预览可见 · 来自「Nexa Talent」（只有首屏） · [预览图](../sources/framesbase/items/f76dd7d0-10ed-46c8-926c-03924abef4b7/preview.webp) · [提示词](../sources/framesbase/items/f76dd7d0-10ed-46c8-926c-03924abef4b7/prompt.md)
- **占首屏下半的磨砂玻璃页脚，左品牌右三列链接，底部细线和社交图标**
  做法：页脚放在首屏视频上，backdrop blur(50u)；背景叠三层渐变：左右各一道白色边光、自上而下暗棕到暖金；四边inset阴影做细线。少见在页脚和首屏同屏、靠玻璃透出背景
  电脑＋手机 · 预览可见 · 来自「Northstar」（只有首屏） · [预览图](../sources/framesbase/items/4b06e1f0-bfc7-4576-a244-0532f6e05452/preview.webp) · [提示词](../sources/framesbase/items/4b06e1f0-bfc7-4576-a244-0532f6e05452/prompt.md)
- **玻璃社交方块一行，巨型点阵字标居左，竖排链接配照片回顶方块**
  做法：页面无首屏文案，视频下部渐变烧黑(35%透明到88%纯黑)，UI全放页脚三行、细线分隔；不常见在回顶方块边长用calc等于四行链接总高，照片填充加28%黑罩，悬停照片放大1.18
  电脑＋手机 · 预览可见 · 来自「Spectrum Grid」（单个模块） · [预览图](../sources/framesbase/items/3af446c3-3be2-477b-93cf-65dfd25f0621/preview.webp) · [提示词](../sources/framesbase/items/3af446c3-3be2-477b-93cf-65dfd25f0621/prompt.md)
- **黑底：点阵带、细体标语加三列粗链接、整宽巨型字标、9px版权行**
  做法：不常见在顶部120px点阵带：三层radial-gradient白点（间距、透明度各异）铺成200%宽条，18s线性左移50%循环。标语字重220对比字标760，字标字距-0.055em、行高0.78
  电脑＋手机 · 预览可见 · 来自「Stark Minimal Footer」（单个模块） · [预览图](../sources/framesbase/items/b277d919-4672-4b55-8652-10f7495ff9ed/preview.webp) · [提示词](../sources/framesbase/items/b277d919-4672-4b55-8652-10f7495ff9ed/prompt.md)
- **灰壳套白卡的双层圆角页脚，版权条留在灰壳底部**
  做法：外壳#E9EBEE圆角48px，内白卡圆角40px、外边距8px，白卡内5列网格（品牌占2列，社交钮44px圆角xl白底细边）。不常见在版权条放在灰壳里、白卡之外，形成托盘套卡片的两层
  电脑 · 预览可见 · 来自「Vize Footer」（单个模块） · [预览图](../sources/framesbase/items/195daa7c-91e4-40fd-ae77-3470f51f07c5/preview.webp) · [提示词](../sources/framesbase/items/195daa7c-91e4-40fd-ae77-3470f51f07c5/prompt.md)
- **奶白圆角卡，左侧图标、标题和两枚按钮，右侧两列链接**
  做法：不常见在页脚做成浮卡：#FFFFF0/95＋blur、圆角 32px，悬在视频上不贴边；网格 auto_1fr_auto_auto，链接列 self-end 贴底对齐，标题下直接放黑白两枚按钮兼作行动号召；版权 10px 大写 40% 黑
  电脑 · 预览可见 · 来自「Zenith Footer」（单个模块） · [预览图](../sources/framesbase/items/3aa2483a-377c-4adb-a2e7-16ea0c1f8f0c/preview.webp) · [提示词](../sources/framesbase/items/3aa2483a-377c-4adb-a2e7-16ea0c1f8f0c/prompt.md)

## 推荐度 3（9 条）

- 四列链接加订阅框和社交图标，小号大写栏目名 · 电脑＋手机 · 预览可见 · 来自「404 Planet」（只有首屏） · [目录](../sources/framesbase/items/13b6f518-e697-4667-8179-ea595413950e/)
- 首屏底边一行：左版权、中间跳动下箭头、右三个社交链接 · 电脑 · 预览可见 · 来自「Creative Designer Portfolio」（只有首屏） · [目录](../sources/framesbase/items/5b1dec03-7944-4883-9a15-7e2e075ea9c7/)
- 浅灰底四栏：标志简介、两列链接、订阅框 · 电脑 · 预览可见 · 来自「FAQ CTA」（单个模块） · [目录](../sources/framesbase/items/735be6cf-ef6c-4e18-b85c-c353968b4d75/)
- 底部一条奶白横线，线下左右两块小字简介 · 电脑＋手机 · 预览可见 · 来自「Personal Showcase」（只有首屏） · [目录](../sources/framesbase/items/3f621e4f-d94e-454d-a045-6f59cbaa6518/)
- 白底页脚：联系方式、导航两栏、四地办事处一排，黑色底条 · 电脑＋手机 · 仅提示词 · 来自「Cinematic Landing Page」（整页） · [目录](../sources/framesbase/items/af51429c-9eb9-4cbe-82bd-758824901784/)
- 居中词标、免责声明、圆形社交图标和退订说明 · 电脑 · 仅提示词 · 来自「Email Marketing」（整页） · [目录](../sources/framesbase/items/b68ca730-81b8-4407-85c5-a79dc1dc2949/)
- 米色 #f4ecdc 四栏页脚，第四栏是只有底线的订阅框 · 电脑 · 仅提示词 · 来自「Luxury Botanical」（整页） · [目录](../sources/framesbase/items/50a1f0a2-ad46-40b2-9f63-1dee3f63d3d1/)
- 固定在底层、正文滚走后露出的三栏页脚 · 电脑＋手机 · 仅提示词 · 来自「OYLA」（整页） · [目录](../sources/framesbase/items/2926b160-b146-49bb-b1f8-d92e8d6f5676/)
- 深灰玻璃卡页脚，顶部标题加白按钮，下方四栏链接 · 电脑 · 仅提示词 · 来自「Scroll Landing Page」（整页） · [目录](../sources/framesbase/items/801690d8-4a7d-42fd-b164-2dd4aa19fc65/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/footer-*.tsx`（8 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
