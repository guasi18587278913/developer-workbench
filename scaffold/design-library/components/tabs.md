# 标签切换与轮播

共 27 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（3 条）

- **银行卡绕水平轴排成圆柱自动上滚，中卡正对，邻卡后仰露出背面**
  做法：不常见在磁吸停顿和贴边露角：进度每帧+0.0016，pow(|d|·2,4.2)/2让中卡停顿再切；中卡z400，邻卡z220转132°，次邻卡转175°露出屏幕边55px；中卡随鼠标阻尼倾斜
  电脑 · 预览可见 · 来自「Animated Cards」（单个模块） · [预览图](../sources/framesbase/items/cfaba27b-46ec-44f6-907c-07ef200e6fe1/preview.webp) · [提示词](../sources/framesbase/items/cfaba27b-46ec-44f6-907c-07ef200e6fe1/prompt.md)
- **一排圆角竖图横向滚动，上下被白色弧形遮住，像弯曲的银幕**
  做法：条带上下各压一块白色 SVG 弧形（preserveAspectRatio=none，高80–100px），平图就显出弧面，这是少见处；rAF 每帧左移0.8px，可拖拽，松手按×0.95衰减滑行
  电脑＋手机 · 预览可见 · 来自「Custom Spaces」（只有首屏） · [预览图](../sources/framesbase/items/b7e26fe4-e086-4dfb-885f-f2d5e8389a1e/preview.webp) · [提示词](../sources/framesbase/items/b7e26fe4-e086-4dfb-885f-f2d5e8389a1e/prompt.md)
- **五张有厚度的银行卡绕横轴排成竖向圆筒，上下邻卡翻到背面**
  做法：Z 400→220→-60、rotateX 0→132°→175° 分段 smoothstep；五层 ±1.47px 切片叠出厚度，背面模糊视频和磁条卡号；4.2 次幂让中卡停顿。不常见在竖向圆筒转轮
  电脑＋手机 · 预览可见 · 来自「FinancialFocus」（只有首屏） · [预览图](../sources/framesbase/items/7b821738-a59f-41b8-b3fb-592be9beaf56/preview.webp) · [提示词](../sources/framesbase/items/7b821738-a59f-41b8-b3fb-592be9beaf56/prompt.md)

## 推荐度 4（15 条）

- **四个公仔轮换站位：中间放大，两侧缩小微糊，后排更糊**
  做法：中位高 92%、放大 1.68；左右位高 28%、模糊 2px；后位高 22%、模糊 4px。不常见在整页底色随当前公仔换色，位置、模糊、底色同走 650ms 缓动 (0.4,0,0.2,1)
  电脑＋手机 · 预览可见 · 来自「3D Collectible Hero」（只有首屏） · [预览图](../sources/framesbase/items/b5f7605d-8937-4060-80c6-03971b9012f3/preview.webp) · [提示词](../sources/framesbase/items/b5f7605d-8937-4060-80c6-03971b9012f3/prompt.md)
- **两个超大小写文字标签，选中项前有黑色实心圆点，下方细进度条**
  做法：标签字 md:text-5xl 兼作区块标题，未选中 gray-400；不常见在圆点：只在选中时渲染，scale 0→1 用回弹曲线 (0.34,1.56,0.64,1) 0.3s；进度条轨道2px、滑块固定宽30%
  电脑 · 预览可见 · 来自「Beauty Products」（单个模块） · [预览图](../sources/framesbase/items/fbb5c4fb-fead-4d73-b4a9-fa1513e9a0e2/preview.webp) · [提示词](../sources/framesbase/items/fbb5c4fb-fead-4d73-b4a9-fa1513e9a0e2/prompt.md)
- **巨型“03/04”页码下一排方形缩略图，选中项带变换手柄框**
  做法：选中缩略图叠2px白边框，四角和四边中点各放8x8白方块，像设计软件选框；页码与标题同为110px；左下前后方钮循环切换，只换序号不换背景。不常见在用手柄框表示选中
  电脑＋手机 · 预览可见 · 来自「Form Study」（只有首屏） · [预览图](../sources/framesbase/items/0d18179d-3700-462d-8568-bbafe72b8323/preview.webp) · [提示词](../sources/framesbase/items/0d18179d-3700-462d-8568-bbafe72b8323/prompt.md)
- **标签胶囊行、大图舞台、底部箭头加说明条三段式**
  做法：三段外壳都套鼠标跟随的1px径向高光描边（mask抠边，光斑360/600px）；舞台4张图叠放400ms交叉淡化，说明文字上下6px替换；每5秒自动轮换，用户点一次即停。不常见在三段共用跟随光边
  电脑＋手机 · 预览可见 · 来自「Glassmorphic Feature Tabs」（单个模块） · [预览图](../sources/framesbase/items/cd8d1a77-c851-4a76-828b-aa1e08872cfa/preview.webp) · [提示词](../sources/framesbase/items/cd8d1a77-c851-4a76-828b-aa1e08872cfa/prompt.md)
- **底部12张圆角作品卡围成3D圆环，左右边缘渐隐模糊**
  做法：卡片按rotateY(i×30°)排成环、透视35em，每帧自转0.24°，可拖可滚带惯性；不常见在随速度弹簧形变，卡片倾斜rotateZ≤20°、skewX≤10°；两侧模糊渐隐
  电脑 · 预览可见 · 来自「Lead Funnel」（只有首屏） · [预览图](../sources/framesbase/items/5dc36f48-4cf0-4ea5-98bf-d7bdebc18006/preview.webp) · [提示词](../sources/framesbase/items/5dc36f48-4cf0-4ea5-98bf-d7bdebc18006/prompt.md)
- **大字标签切换畅销/套装，下接无缝边框商品横滑条**
  做法：当前标签前加 24px 黑圆点，0.3s 回弹缩放出现；商品卡四边 1px 灰框、-ml-[1px] 叠成连续格子；竖滚转横滑，底部 2px 进度条配 30% 宽滑块。不常见在共边格子条＋进度条
  电脑＋手机 · 预览可见 · 来自「Luxury Ecommerce Design」（整页） · [预览图](../sources/framesbase/items/c644c3ce-0172-4767-be08-92696f951fde/preview.webp) · [提示词](../sources/framesbase/items/c644c3ce-0172-4767-be08-92696f951fde/prompt.md)
- **16:9圆角视频卡横排，卡下分类粗字、标题、灰色时长**
  做法：轨道grid-auto-flow:column，列宽minmax(520px,34vw)，x向强制吸附居中；不常见在卡默认54%透明并下沉10px，悬停或聚焦才浮起变实；底部两段56px灰条+一段320px黑条加05 / 05（静态装饰）
  电脑＋手机 · 预览可见 · 来自「Media Card Carousel」（单个模块） · [预览图](../sources/framesbase/items/2b6c461d-b784-4dc2-914c-104a70a3103b/preview.webp) · [提示词](../sources/framesbase/items/2b6c461d-b784-4dc2-914c-104a70a3103b/prompt.md)
- **底部左侧“01 / 07＋页名”，右侧长短条页点和左右箭头**
  做法：整站按幻灯片切换：滚轮阈值30px、方向键、滑动60px，800ms 锁；不常见在页点：当前页是 w-24 白色长条，其余 w-8 white/20，过渡500ms，左侧页码旁配页名
  电脑 · 预览可见 · 来自「Pro AI Deck」（整页） · [预览图](../sources/framesbase/items/9a365d37-b4bf-4260-b1df-1bfd870d4686/preview.webp) · [提示词](../sources/framesbase/items/9a365d37-b4bf-4260-b1df-1bfd870d4686/prompt.md)
- **三张磨砂玻璃卡向右下错位叠放，下方黑圆箭头切换**
  做法：后两张左缩24/48px、上下各收34/72px，底色白7.5%→4.5%逐层变淡，只显首张文字；点下一张时首张右移130%转10°飞出，再回到最底层。少见处：错位叠卡加飞出回收的完整时序
  手机 · 预览可见 · 来自「Remit Race」（应用界面） · [预览图](../sources/framesbase/items/afebd1d2-3132-4d41-9678-f4e0729c2b7f/preview.webp) · [提示词](../sources/framesbase/items/afebd1d2-3132-4d41-9678-f4e0729c2b7f/prompt.md)
- **窗内一排四个场景名文字切换，选中项加下划线**
  做法：四段视频叠放只切opacity，1000ms交叉淡化，期间锁定点击；未选50%透明、悬停80%。不常见在切到Deep Woods时标题和输入框改深蓝#182C41，700ms过渡，导航和底部数据保持白色
  电脑＋手机 · 预览可见 · 来自「Stillmind」（只有首屏） · [预览图](../sources/framesbase/items/319b3f14-8a14-4406-a9cb-3cf324c25068/preview.webp) · [提示词](../sources/framesbase/items/319b3f14-8a14-4406-a9cb-3cf324c25068/prompt.md)
- **四个场景自动轮播，01–04 页码外圈是进度环**
  做法：每页 5s，进度每 30ms 更新；当前页码 44px 白圆外套 SVG 圆环，紫→粉渐变描边 2.5px，dasharray=进度×125.66 走满一圈；点页码跳转并重置，右图从右滑入、向左缩小退场
  电脑＋手机 · 仅提示词 · 来自「AI Meeting Notes」（整页） · [预览图](../sources/framesbase/items/ef420235-f4cb-446e-b9b6-726cc0c1b4f8/preview.webp) · [提示词](../sources/framesbase/items/ef420235-f4cb-446e-b9b6-726cc0c1b4f8/prompt.md)
- **专辑方图轮播，两侧斜放，换页时底色圆形扩散**
  做法：不常见在换底色：新色 250vmax 圆从中心 scale 0→1，2400ms cubic-bezier(.05,.7,.1,1)。中卡 1.1，邻卡 0.85、转 ±14°、平移 ±480px
  电脑＋手机 · 仅提示词 · 来自「Album App」（应用界面） · [预览图](../sources/framesbase/items/4e5c7519-fa46-4b8e-b2cd-a11c050a0c85/preview.webp) · [提示词](../sources/framesbase/items/4e5c7519-fa46-4b8e-b2cd-a11c050a0c85/prompt.md)
- **九张粉彩信息卡排在巨大圆弧上，随滚动转动**
  做法：卡片挂在半径1100px、圆心在视口下方的圆上，间隔9°，transformOrigin设在圆心，滚动最后30%转80°扫过全部卡。不常见在摩天轮式弧形排布；卡220×230、圆角26、右上角编号圆圈
  电脑＋手机 · 仅提示词 · 来自「Dreamcore Landing」（只有首屏） · [预览图](../sources/framesbase/items/6206c264-649d-4354-acf7-1a79a869eca4/preview.webp) · [提示词](../sources/framesbase/items/6206c264-649d-4354-acf7-1a79a869eca4/prompt.md)
- **黑底章节列表，左侧配图随当前章节以沙粒溶解切换**
  做法：左 35% 配图、右 65% 五行章节名（当前白、其余 #444），3.5 秒轮换。换图用 SVG 滤镜（feTurbulence 噪声＋位移＋模糊）900ms 散成沙粒。不常见在沙粒溶解转场
  电脑＋手机 · 仅提示词 · 来自「Neo Museum」（整页） · [预览图](../sources/framesbase/items/7e6f4922-6fcb-4192-a9fb-7d7a1083bfe5/preview.webp) · [提示词](../sources/framesbase/items/7e6f4922-6fcb-4192-a9fb-7d7a1083bfe5/prompt.md)
- **滚到底时屏幕中心开窗，露出整屏商品卡并横向切换**
  做法：少见在开窗式出场：固定层clip-path从inset(50%)随滚动700px展开到全屏，之后每滚900px横移一张100vw商品卡；中央600px符号用difference混合，换卡时随机换字
  电脑＋手机 · 仅提示词 · 来自「Outdoor Apparel」（整页） · [预览图](../sources/framesbase/items/e5608f6e-32c7-46e0-984c-b44ed2296b0b/preview.webp) · [提示词](../sources/framesbase/items/e5608f6e-32c7-46e0-984c-b44ed2296b0b/prompt.md)

## 推荐度 3（9 条）

- 三张高图片卡并排轮播，左上小标签、左下白字，右上箭头 · 电脑＋手机 · 预览可见 · 来自「FlowMate」（整页） · [目录](../sources/framesbase/items/525a6b21-3883-43b8-8ec8-be44162bd851/)
- 三张高500px圆角图片卡，左上小标签，左下白色大字说明 · 电脑＋手机 · 预览可见 · 来自「FlowMate Carousal」（单个模块） · [目录](../sources/framesbase/items/27f74be1-b12f-468d-a1ec-27d227d5423b/)
- 底部居中分页点，当前项拉长成短胶囊 · 电脑 · 预览可见 · 来自「Investor Deck」（整页） · [目录](../sources/framesbase/items/7bc4b52a-bb68-4ce7-be12-327e7cd6d7a7/)
- 斜体大标题下，左列竖排三个标签，右侧图片加文章摘要 · 电脑＋手机 · 预览可见 · 来自「NeoVision」（整页） · [目录](../sources/framesbase/items/da149ab1-5c86-46da-93f1-0af8dc13f662/)
- 右侧竖排五个空心小圆点，当前项是带数字的缺口圆环 · 电脑＋手机 · 预览可见 · 来自「Silent Velocity」（只有首屏） · [目录](../sources/framesbase/items/8c7f309b-4df7-4335-9c22-054d07d06dbd/)
- 灰底分段标签四项，下方视频框中央浮一张白色向导卡 · 电脑＋手机 · 预览可见 · 来自「Stellar AI」（只有首屏） · [目录](../sources/framesbase/items/6f97bc05-87b2-4b88-9d4e-d7b3b3e0ad2b/)
- 中间大两侧小的药瓶轮播，上方下划线分类标签 · 手机 · 预览可见 · 来自「Supplement Shop」（应用界面） · [目录](../sources/framesbase/items/d18a6adb-bd1a-44d2-b09d-2988c1bf43ec/)
- 四等分文字标签，底部细线，选中项蓝色渐变粗下划线 · 电脑＋手机 · 预览可见 · 来自「Technical Specifications」（单个模块） · [目录](../sources/framesbase/items/76cc56ac-4363-4612-ac27-80aa854721b2/)
- 奶白圆角景点卡横排轮播，左下两个圆形箭头按钮 · 电脑 · 仅提示词 · 来自「Mostar Guide」（整页） · [目录](../sources/framesbase/items/0975afb7-d08e-42cb-8b80-bfb1b7b5aa5f/)
