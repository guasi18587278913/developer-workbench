# 动效做法

共 116 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 4（108 条）

- **背景视频随鼠标左右移动前后拖动播放**
  做法：视频不自动播放；mousemove算横向位移，按delta/窗宽×0.8×时长改currentTime并夹在0到时长；用onSeeked排队下一次跳转，避免连续seek卡顿
  电脑＋手机 · 仅提示词 · 来自「3D Character Studio」（只有首屏） · [预览图](../sources/framesbase/items/9f64e330-7177-41f5-b3ca-94597f00d571/preview.webp) · [提示词](../sources/framesbase/items/9f64e330-7177-41f5-b3ca-94597f00d571/prompt.md)
- **滚动驱动背景视频逐帧播放，三张说明卡从左到右擦出**
  做法：先把视频抽成24fps、最多120帧的ImageBitmap，按滚动进度画到canvas；没抽完时直接拖视频并加seeking锁。三卡用mask线性渐变black到progress×130%擦出，手机改为自上而下。不常见在预抽帧
  电脑＋手机 · 仅提示词 · 来自「3D Story」（整页） · [预览图](../sources/framesbase/items/be027362-7f71-4e35-b11a-9ae8bac997f4/preview.webp) · [提示词](../sources/framesbase/items/be027362-7f71-4e35-b11a-9ae8bac997f4/prompt.md)
- **使命区16:9视频随滚动放大成全屏，再按滚动切换四个标签**
  做法：不常见在视频从卡片位置长成全屏：fixed层读取小视频框坐标，滚过一屏时位置、宽高、圆角按easeOutCubic插值到满屏；之后600vh sticky按进度换左下大标题，右侧竖排标签逐个亮起
  电脑 · 仅提示词 · 来自「AeroCore」（整页） · [预览图](../sources/framesbase/items/94442dc0-b9e6-4b84-90fc-d9c2b1bde990/preview.webp) · [提示词](../sources/framesbase/items/94442dc0-b9e6-4b84-90fc-d9c2b1bde990/prompt.md)
- **标题逐词模糊上浮；背景视频在循环处淡出再淡入**
  做法：每词blur10px/y50→blur5px半透明/y-5→清晰，共0.7s，每词错开0.1s；视频不用loop，结束前0.55s用rAF淡出500ms，ended后归零重播再淡入。不常见在手写淡入淡出遮住视频循环接缝
  电脑 · 仅提示词 · 来自「Aetheris Voyage」（只有首屏） · [预览图](../sources/framesbase/items/84bd9153-ffa5-4b42-a128-a85ec5ab07e9/preview.webp) · [提示词](../sources/framesbase/items/84bd9153-ffa5-4b42-a128-a85ec5ab07e9/prompt.md)
- **滚动驱动的旋转擦除转场，斜45度方框边转边变宽**
  做法：不用遮罩：overflow:hidden盒子宽度随滚动从0长到72vw+72vh并转-45°，内部视频反向旋转保持正立、锁100vw×100vh，只露不拉伸。不常见在用宽度加反向旋转做硬边擦除
  电脑 · 仅提示词 · 来自「AI Film Studio」（整页） · [预览图](../sources/framesbase/items/9349c46b-dd1f-4be3-9623-4337778598fc/preview.webp) · [提示词](../sources/framesbase/items/9349c46b-dd1f-4be3-9623-4337778598fc/prompt.md)
- **滚动擦洗视频，旋转方框展开切到下一段，字标沿Z轴放大掉出**
  做法：少见在揭示层：方框随滚动变宽并转-45°，内部视频反向旋转保持正立，硬边无羽化；字标离场在perspective:1200px下沿Z推近680px，透明度1-e²、模糊e²×8px
  电脑 · 仅提示词 · 来自「AI Future Studio」（整页） · [预览图](../sources/framesbase/items/d5c77552-d47a-4d88-90e8-bcd610da5ff6/preview.webp) · [提示词](../sources/framesbase/items/d5c77552-d47a-4d88-90e8-bcd610da5ff6/prompt.md)
- **滚动驱动视频播放，粘性区里三组标题上下分开淡出**
  做法：350vh粘性区分三段：每组上行标题移向-120px、下行移向+120px，同时模糊15px淡出，下一组再从模糊中出现；首屏标题逐字由blur(10px)黑影上浮显出
  电脑 · 仅提示词 · 来自「AI Interface」（整页） · [预览图](../sources/framesbase/items/2e0b73b0-7b5b-47ff-aa35-24423fc48f9f/preview.webp) · [提示词](../sources/framesbase/items/2e0b73b0-7b5b-47ff-aa35-24423fc48f9f/prompt.md)
- **鼠标拖出不规则流动团块，擦掉前图露出另一张图**
  做法：隐藏canvas画24点噪声扰动团块（半径140），最多60个采样点、每帧alpha×0.92衰减；toDataURL当mask：前图destination-out挖洞，后图只显示团块，玻璃卡内同步
  电脑＋手机 · 仅提示词 · 来自「Angel Shield」（只有首屏） · [预览图](../sources/framesbase/items/afa791e1-5649-4a43-8c0c-adf81d91dde8/preview.webp) · [提示词](../sources/framesbase/items/afa791e1-5649-4a43-8c0c-adf81d91dde8/prompt.md)
- **滚动时背景与冰山同步放大并下移取景，标题逐字母上浮**
  做法：背景和抠图层用同一钩子：进度=scrollY/视口高，放大1→1.12、objectPosition从center 0%移到center 100%，原点top center；标题每字y20→0、延迟0.05s；不常见在两层同步缩放保证抠图对齐
  电脑＋手机 · 仅提示词 · 来自「Arctic Lab」（只有首屏） · [预览图](../sources/framesbase/items/3e030b8e-2d4c-4739-9b8c-d3c64a979151/preview.webp) · [提示词](../sources/framesbase/items/3e030b8e-2d4c-4739-9b8c-d3c64a979151/prompt.md)
- **云朵图片跨在两段交界处，随滚动上移盖住视频底边**
  做法：第二段顶部放整宽云朵PNG，-translate-y-1/2跨在接缝上、z-100；滚动0→300px映射为上移0→-100px（手机0→-24px）；底部视频顶端再加100px红到透明渐变；不常见在用抠图实物做段落过渡
  电脑＋手机 · 仅提示词 · 来自「Art Landing」（只有首屏） · [预览图](../sources/framesbase/items/288baab1-70c0-4386-b174-66ec4854450e/preview.webp) · [提示词](../sources/framesbase/items/288baab1-70c0-4386-b174-66ec4854450e/prompt.md)
- **网格线逐条划出，十字依次弹出，标签和连线先于方框出现**
  做法：竖线 scaleY、横线 scaleX 从0展开1.2s；十字以80ms步进 scale 0.85→1；先出标签、再画两段连线、最后弹方框，全程约2.8s，缓动 0.16,1,0.3,1
  电脑＋手机 · 仅提示词 · 来自「Aurex Finance」（只有首屏） · [预览图](../sources/framesbase/items/a8257415-cb61-444b-b4b3-2f12299d2ada/preview.webp) · [提示词](../sources/framesbase/items/a8257415-cb61-444b-b4b3-2f12299d2ada/prompt.md)
- **滚动驱动的视频收缩再展开叙事**
  做法：不常见在首屏钉住约 22 屏滚动：全屏视频随滚动逐帧拖放，再缩成居中 193×108、圆角 12 的小窗，字标缩到 0.55 并模糊 24px；标题从模糊 12px 弹出，小窗再放大换播第二段视频
  电脑 · 仅提示词 · 来自「Automotive AI」（只有首屏） · [预览图](../sources/framesbase/items/ce534c4e-5e6d-46af-92bf-27140ce5ab37/preview.webp) · [提示词](../sources/framesbase/items/ce534c4e-5e6d-46af-92bf-27140ce5ab37/prompt.md)
- **中间卡先入场，两侧卡朝外侧反向漂入**
  做法：WAAPI 分四层：卡片上浮16px+缩放.985；面板用 clip-path 从下往上揭开；文案上移11px；标题和说明用 clip-path 揭开。中卡延迟60ms，两侧从245ms起每张+85ms。不常见在中心领先和面板擦出
  电脑＋手机 · 仅提示词 · 来自「Autonomous Ops」（单个模块） · [预览图](../sources/framesbase/items/7e49b512-41b7-4d2e-89a5-e676286d8b94/preview.webp) · [提示词](../sources/framesbase/items/7e49b512-41b7-4d2e-89a5-e676286d8b94/prompt.md)
- **滚动拖动背景视频，同时标题从左往右被擦除**
  做法：350vh占位，按滚动比例lerp(K=0.1)逼近视频时间，偏差>0.02s且距上次>30ms才seek；进度30%后--wipe驱动mask-image从左向右擦掉标题；视频由左移225px渐回中。手机端全关
  电脑＋手机 · 仅提示词 · 来自「Avant Studio」（只有首屏） · [预览图](../sources/framesbase/items/5ed6b02a-e611-41de-be1c-1f0bef9a7997/preview.webp) · [提示词](../sources/framesbase/items/5ed6b02a-e611-41de-be1c-1f0bef9a7997/prompt.md)
- **滚到图片区，黑色玻璃面板先画成竖线再横向展开出文字**
  做法：黑 88% 玻璃面板加 blur 8px；不常见在分步出现：先成 2px 宽竖线，300ms 后展宽到 min(420px,88vw)，800ms 后淡入文字；滚动过 0.4 换第二段
  电脑＋手机 · 仅提示词 · 来自「Bitcoin Yield」（只有首屏） · [预览图](../sources/framesbase/items/5fe37d84-c858-4efb-ad36-6080435520d2/preview.webp) · [提示词](../sources/framesbase/items/5fe37d84-c858-4efb-ad36-6080435520d2/prompt.md)
- **顶卡可左右拖走，下一张随拖动放大归位**
  做法：拖动时旋转=位移×0.035（±12° 封顶）；位移过 76px 甩到 ±540px，430ms；不够则回弹；甩出的卡回到叠底循环，后面的卡同步升一层
  手机 · 仅提示词 · 来自「Bite-Sized Courses」（应用界面） · [预览图](../sources/framesbase/items/ba990167-1d41-4796-b5dc-bf98944bef6c/preview.webp) · [提示词](../sources/framesbase/items/ba990167-1d41-4796-b5dc-bf98944bef6c/prompt.md)
- **滚动逐帧拖动三段视频，文字层随进度模糊进出**
  做法：容器高 500vh、内层 fixed；滚动进度按 0.08 插值，分三段驱动三个视频的 currentTime，帧画到双缓冲 canvas。各层透明＋位移＋模糊进出。不常见在滚动刷视频帧
  电脑 · 仅提示词 · 来自「Bloom」（整页） · [预览图](../sources/framesbase/items/b1dd3d54-896f-4580-a4e6-073ca9fbb753/preview.webp) · [提示词](../sources/framesbase/items/b1dd3d54-896f-4580-a4e6-073ca9fbb753/prompt.md)
- **悬停的书上抬放大，左右邻书让开，整条暂停**
  做法：轨道60s线性滚动；:has(.book:hover)暂停动画；悬停书外层margin-left加60px、前一本margin-right让出60px，书本身translateY(-28px) scale(1.06)。不常见在纯CSS用:has让邻居让位
  电脑 · 仅提示词 · 来自「Book Hero」（只有首屏） · [预览图](../sources/framesbase/items/29e21ea6-3b85-459a-bd3e-7d4e6a2d2fe9/preview.webp) · [提示词](../sources/framesbase/items/29e21ea6-3b85-459a-bd3e-7d4e6a2d2fe9/prompt.md)
- **鼠标划过留下变形色块，同时抹开中层、在前景上画出新图**
  做法：离屏canvas生成遮罩：头部半径70px，每移8px记一点、最多60点，每帧alpha×0.92；色块24点叠三组正弦扰动幅度22px；中层destination-out挖洞，顶层source-over绘制。少见处：一条轨迹驱动两层遮罩
  电脑＋手机 · 仅提示词 · 来自「Breathstone」（只有首屏） · [预览图](../sources/framesbase/items/bd5d283b-01a7-42e4-a782-c89703890ba2/preview.webp) · [提示词](../sources/framesbase/items/bd5d283b-01a7-42e4-a782-c89703890ba2/prompt.md)
- **框线斜向擦入；滚轮切屏时首屏缩小淡出、下一屏缩回**
  做法：border-draw：clip-path inset(0 100% 100% 0)→inset(0) 0.9s 从左上擦出框线；全页统一 cubic-bezier(0.16,1,0.3,1)；不常见在劫持滚轮做两屏交叉淡化：离场 scale 0.97，入场 1.02→1，锁1000ms
  电脑＋手机 · 仅提示词 · 来自「BuildShield」（只有首屏） · [预览图](../sources/framesbase/items/62a82529-a9b5-4dc6-8a64-ea7905aa9f39/preview.webp) · [提示词](../sources/framesbase/items/62a82529-a9b5-4dc6-8a64-ea7905aa9f39/prompt.md)
- **第二屏引言，彩虹和左右两朵云随滚动视差进出**
  做法：少见在 rAF+lerp 视差：按区块进度0–1算目标，彩虹+120→-160px(系数0.06)；同图镜像两朵云从±200px滑入(0.04)，透明度随X距离变，用 translate3d
  电脑＋手机 · 仅提示词 · 来自「Celestial Renewal」（只有首屏） · [预览图](../sources/framesbase/items/97be8f74-6305-4896-bb8b-b24b1d70d446/preview.webp) · [提示词](../sources/framesbase/items/97be8f74-6305-4896-bb8b-b24b1d70d446/prompt.md)
- **首屏三段视频随滚动用椭圆裁切切换，关于段文字逐词显影**
  做法：少见在切换：sticky 首屏每段视频占150vh滚动，clip-path ellipse 从中心5%/8%扩到155%/158%，三次方缓动；关于段容器从3°转正，词透明度0.1→1、模糊4px→0
  电脑＋手机 · 仅提示词 · 来自「Cinematic Landing Page」（整页） · [预览图](../sources/framesbase/items/af51429c-9eb9-4cbe-82bd-758824901784/preview.webp) · [提示词](../sources/framesbase/items/af51429c-9eb9-4cbe-82bd-758824901784/prompt.md)
- **滚轮不滚页面，而是推动首屏在两段视频、两组文案间交叉切换**
  做法：拦截wheel，进度+=deltaY/800夹在0–1；视频1透明度1-p、视频2为p，过0.5换播；两组文案错开淡入，带30px位移。不常见在滚轮驱动整屏状态而非滚动
  电脑＋手机 · 仅提示词 · 来自「Clarity Core」（只有首屏） · [预览图](../sources/framesbase/items/9a34a1e6-fbf6-4a67-bb69-b0abb9bec60c/preview.webp) · [提示词](../sources/framesbase/items/9a34a1e6-fbf6-4a67-bb69-b0abb9bec60c/prompt.md)
- **滚动时视频逐帧播放，两组大数字按进度淡入淡出**
  做法：视频抽成120帧ImageBitmap画到sticky canvas，按滚动进度取帧，每帧以0.1系数平滑追赶；外层400vh，“2.01 billion”在进度0–0.2淡入、0.45–0.55淡出，第二组0.5–0.6淡入
  电脑 · 仅提示词 · 来自「CleanTech」（整页） · [预览图](../sources/framesbase/items/b420ed46-a311-4fcf-9da3-c4f6ce350dff/preview.webp) · [提示词](../sources/framesbase/items/b420ed46-a311-4fcf-9da3-c4f6ce350dff/prompt.md)
- **视频进度跟着滚动走，长区块里三组大字轮流淡入淡出**
  做法：不常见在双行拉开：视频 currentTime 按滚动进度 0.08 插值逼近；350vh 吸顶区里三组文字各占一段进度，透明度和 blur 15px 交替，上行上移 120px、下行下移 120px 同时散开
  电脑 · 仅提示词 · 来自「Cosmos Interface」（整页） · [预览图](../sources/framesbase/items/90b6c742-7e69-4d6d-88a5-8bdbab057e86/preview.webp) · [提示词](../sources/framesbase/items/90b6c742-7e69-4d6d-88a5-8bdbab057e86/prompt.md)
- **标题逐词回弹弹入，底部照片自下揭开，色块数据最后出现**
  做法：每词从下移60px、缩0.7、转-4°、模糊8px回弹到位，0.9s cubic-bezier(0.34,1.56,0.64,1)；少见在编排：标题→侧卡→底图中间先起→色块数据1-1.2s才出
  电脑＋手机 · 仅提示词 · 来自「CozyPaws」（只有首屏） · [预览图](../sources/framesbase/items/65452494-e776-4138-869d-1e7e8a041a7e/preview.webp) · [提示词](../sources/framesbase/items/65452494-e776-4138-869d-1e7e8a041a7e/prompt.md)
- **90px半透明圆形光标写着open，点击后全屏叠入第二段视频**
  做法：不常见在整屏当按钮：桌面隐藏光标，90px圆（黑45%＋blur 8px）跟随鼠标，字随状态切open/close；点击让第二段视频从第1秒播放并600ms淡入，播完或再点淡出；触屏恢复普通光标
  电脑＋手机 · 仅提示词 · 来自「Creator Guild」（只有首屏） · [预览图](../sources/framesbase/items/ec0d3c18-1e4e-4772-9a36-e2d4b987fcd2/preview.webp) · [提示词](../sources/framesbase/items/ec0d3c18-1e4e-4772-9a36-e2d4b987fcd2/prompt.md)
- **滚一下即整幕切换：首屏加速飞走，第二屏卡片分组模糊浮现**
  做法：首屏800ms 内按 easeInExpo 上移3150px 并缩小3.9%，导航胶囊滑到中间；三张卡的底面、插图、标签再按时间表由模糊变清；银卡入场绕 Y 轴转360°；少见在一次手势播完整段过场
  电脑＋手机 · 仅提示词 · 来自「Crypto Vault」（只有首屏） · [预览图](../sources/framesbase/items/871ba2c2-9def-4366-87f0-26b5f1e577ac/preview.webp) · [提示词](../sources/framesbase/items/871ba2c2-9def-4366-87f0-26b5f1e577ac/prompt.md)
- **一个滚动进度同时驱动视频放大、首屏淡出和下一屏放大**
  做法：p=滚动距离/视口高（上限 1）；背景视频 scale 1→1.3；首屏透明度 1-2.5p、上移 60px；第二屏在 p 0.35–0.75 淡入、scale 0.88→1。不常见在一个进度驱动三层
  电脑 · 仅提示词 · 来自「Crypto Wealth」（只有首屏） · [预览图](../sources/framesbase/items/d9c6b9d3-7289-45c5-aa18-fd95290196d6/preview.webp) · [提示词](../sources/framesbase/items/d9c6b9d3-7289-45c5-aa18-fd95290196d6/prompt.md)
- **鼠标左右移动时拖动背景视频的播放进度**
  做法：视频默认暂停；鼠标 X 增量×0.8×时长累加到 targetTime；seeked 事件里若与 currentTime 差 >0.01s 再 seek 一次，避免丢帧；状态存 useRef
  电脑＋手机 · 仅提示词 · 来自「Cursor Follow」（只有首屏） · [预览图](../sources/framesbase/items/a72cfcac-ef50-46fb-9d31-1a03694f3d53/preview.webp) · [提示词](../sources/framesbase/items/a72cfcac-ef50-46fb-9d31-1a03694f3d53/prompt.md)
- **按时间表依次入场，按钮从左擦出，竖线伸长**
  做法：标题每行从 overflow:hidden 里由120%升起；按钮不淡入，用 clip-path inset(0 100% 0 0) 从左擦出；数据竖线 scaleY 0→1，数字和标签错开0.085s上浮；全程约1.9s，结束后 cancel 动画不留行内样式
  电脑＋手机 · 仅提示词 · 来自「Cyber Layer」（只有首屏） · [预览图](../sources/framesbase/items/90e5943a-98cb-4c26-a188-c0f7fd86023f/preview.webp) · [提示词](../sources/framesbase/items/90e5943a-98cb-4c26-a188-c0f7fd86023f/prompt.md)
- **鼠标处圆形聚光，透出另一张同构图的替换画面**
  做法：两张同尺寸大图叠放，上层 mask-image 用 radial-gradient 跟随指针，半径按屏宽 120/160/260px，多段白色透明度做柔边；标题逐词上拉、正文模糊上浮。不常见在用遮罩聚光切换两套画面
  电脑＋手机 · 仅提示词 · 来自「Cyber Ronin」（只有首屏） · [预览图](../sources/framesbase/items/57dae22c-8a39-44f9-8b02-0fca0b77591c/preview.webp) · [提示词](../sources/framesbase/items/57dae22c-8a39-44f9-8b02-0fca0b77591c/prompt.md)
- **鼠标处出现一圈柔边光斑，透出同场景的另一张图**
  做法：不常见在用 canvas 做遮罩：隐藏 canvas 每帧画半径 260px 径向渐变（0.4 内全白、到 1 渐隐），toDataURL 后设为上层图的 mask-image；光标位置每帧按 0.1 插值
  电脑＋手机 · 仅提示词 · 来自「Data Storytelling」（只有首屏） · [预览图](../sources/framesbase/items/4dd9f11f-fd26-4265-8927-c44d3d518854/preview.webp) · [提示词](../sources/framesbase/items/4dd9f11f-fd26-4265-8927-c44d3d518854/prompt.md)
- **滚到下一段时新视频从屏幕中心一点展开成全屏**
  做法：固定层clip-path从inset(50% 50% round 3px)随滚动缓动到0；400vh段内三组标题依次出现，上下两行分别移向-120px和+120px并模糊15px淡出；首屏视频末段模糊0→24px放大到1.22。少见在中心点展开转场
  电脑 · 仅提示词 · 来自「Deep Neural Interface」（整页） · [预览图](../sources/framesbase/items/c03fa2d8-a856-4994-98c7-c4dac8ce3ca6/preview.webp) · [提示词](../sources/framesbase/items/c03fa2d8-a856-4994-98c7-c4dac8ce3ca6/prompt.md)
- **标题逐行遮罩上升，输入卡升起后底光从中间向两边展开**
  做法：标题每行套 overflow:hidden 从108%升起，950ms，间隔90ms；底光 clipPath 由 inset(0 40%) 展到全宽；入场完才让发送键渐变圈10s 一转，少见在两段分开
  电脑＋手机 · 仅提示词 · 来自「DeepThink」（只有首屏） · [预览图](../sources/framesbase/items/bb6806e5-93f8-456f-99c7-c968594648b4/preview.webp) · [提示词](../sources/framesbase/items/bb6806e5-93f8-456f-99c7-c968594648b4/prompt.md)
- **滚动时穿过洞口：画框放大，左右幕布滑出**
  做法：480vh外层套100vh sticky视口，进度经easeInOut驱动：洞口层放大7.5倍(原点52% 38%)并在65–85%淡出，幕布外移150%；各层随鼠标反向漂移6–14px。不常见在把前景画框当镜头推进
  电脑＋手机 · 仅提示词 · 来自「Dreamcore Landing」（只有首屏） · [预览图](../sources/framesbase/items/6206c264-649d-4354-acf7-1a79a869eca4/preview.webp) · [提示词](../sources/framesbase/items/6206c264-649d-4354-acf7-1a79a869eca4/prompt.md)
- **背景视频随整页滚动进度逐帧播放**
  做法：不常见在先把视频按24帧/秒(限30–120帧)解成ImageBitmap再画到canvas，避开拖currentTime的卡顿；进度=scrollY/可滚高度，每帧平滑s+=(t-s)*0.1，帧号变了才重绘
  电脑＋手机 · 仅提示词 · 来自「Future-State」（只有首屏） · [预览图](../sources/framesbase/items/5ea82dfc-8ef9-4628-97d1-d0a0ebc90d3c/preview.webp) · [提示词](../sources/framesbase/items/5ea82dfc-8ef9-4628-97d1-d0a0ebc90d3c/prompt.md)
- **滚动擦洗背景视频，商品卡随滚动依次上浮**
  做法：首屏在500vh轨道内sticky；视频先fetch成blob，rAF以0.12插值追目标时间，未seeking且差>0.04秒才seek；商品卡错开从80px升起。少见在blob预载防网络seek
  电脑＋手机 · 仅提示词 · 来自「Futuristic Eyewear」（只有首屏） · [预览图](../sources/framesbase/items/06039526-78c5-43fc-b62a-e0a8736456bc/preview.webp) · [提示词](../sources/framesbase/items/06039526-78c5-43fc-b62a-e0a8736456bc/prompt.md)
- **向下滚动时镜头穿过舷窗，露出窗外云景**
  做法：160vh轨道里sticky舞台按滚动进度驱动：舷窗scale 1→7.5(origin 52% 38%)，云景1→1.18；文案前22%淡出，舷窗66%–88%淡出；不常见在拿前景框图放大当转场
  电脑＋手机 · 仅提示词 · 来自「Gateway Portal」（整页） · [预览图](../sources/framesbase/items/9e7cac80-402e-4150-affe-79964f98dd1e/preview.webp) · [提示词](../sources/framesbase/items/9e7cac80-402e-4150-affe-79964f98dd1e/prompt.md)
- **滚动逐帧播放视频，三段文案依次出现在左下、右上、右下**
  做法：500vh 容器内 sticky 视频，进度 p 映射前7.5秒，用 1-exp(-dt×8) 指数缓动；WebCodecs 解码成帧库画到 canvas 防卡顿；floor(p×3) 切换三段文案并换角落。不常见在每段文案换一个角落
  电脑＋手机 · 仅提示词 · 来自「Geno Trace」（只有首屏） · [预览图](../sources/framesbase/items/63cb876e-3b95-4243-a52e-2d9c3136236f/preview.webp) · [提示词](../sources/framesbase/items/63cb876e-3b95-4243-a52e-2d9c3136236f/prompt.md)
- **鼠标移动时沿路径冒出旋转贴纸并渐隐**
  做法：光标每移动 150px 生成一张贴纸，5 种按顺序轮换、随机转 ±20°，最多同时 4 张，2.2s 内 scale 0→1.05→1→0.8 淡出（cubic-bezier(0.16,1,0.3,1)）
  电脑 · 仅提示词 · 来自「Glitch Pulse」（整页） · [预览图](../sources/framesbase/items/f892efd4-0fd7-4f73-8528-d62956626b84/preview.webp) · [提示词](../sources/framesbase/items/f892efd4-0fd7-4f73-8528-d62956626b84/prompt.md)
- **首屏一次性错峰入场，下方卡片滚到时卡内碎片依次出现**
  做法：标题 clip-path 自下揭开 900ms，面板 390ms 后从裁切中放大；滚到卡片时每个碎片各有 --inside-delay（250–560ms），连接线从中间向两头画出；3 秒兜底全显示
  电脑＋手机 · 仅提示词 · 来自「Global Talent」（整页） · [预览图](../sources/framesbase/items/8b57d5cc-3d95-46bd-ab8b-2070b21be008/preview.webp) · [提示词](../sources/framesbase/items/8b57d5cc-3d95-46bd-ab8b-2070b21be008/prompt.md)
- **框线不动，只让内容分层依次入场**
  做法：顺序：标志→插画→标题→正文→按钮，每卡错开90ms，共约1.65s。不常见在标题用clip-path inset(-60% -6% 100% -6%)遮罩揭出，不用overflow:hidden以免切掉下伸笔画；结束后移除is-entering类
  电脑＋手机 · 仅提示词 · 来自「Gridcore」（单个模块） · [预览图](../sources/framesbase/items/52599ccc-ada4-4a5a-9225-fcba04259fd8/preview.webp) · [提示词](../sources/framesbase/items/52599ccc-ada4-4a5a-9225-fcba04259fd8/prompt.md)
- **强调词先刷一遍浅蓝、再刷一遍品牌蓝，像上两遍色**
  做法：强调词用attr(data-text)叠两层伪元素；遮罩为72px软边渐变，mask-size 0%→calc(100%+72px)；#7eb6ee浅蓝0.7s起、品牌蓝1.08s起。不常见在双遍刷色
  电脑＋手机 · 仅提示词 · 来自「Growth Decisions」（只有首屏） · [预览图](../sources/framesbase/items/4cc914ea-5034-4777-b532-fce9e779f87a/preview.webp) · [提示词](../sources/framesbase/items/4cc914ea-5034-4777-b532-fce9e779f87a/prompt.md)
- **两段滚动拖动视频之间的马赛克像素溶解转场**
  做法：260vh空白块提供滚动长度，两段视频同步seek；WebGL按64px粗格随机细分为1、½、¼格，从耳机处径向向外逐块翻转，翻转瞬间整块取平均色再换图，看起来是像素换色而非淡化
  电脑＋手机 · 仅提示词 · 来自「Halo Sound」（只有首屏） · [预览图](../sources/framesbase/items/678a72fe-e2ea-45ac-9855-bd83dccfe398/preview.webp) · [提示词](../sources/framesbase/items/678a72fe-e2ea-45ac-9855-bd83dccfe398/prompt.md)
- **入场：玻璃凝结显现，文字逐行从行框升起，曲线逐笔画出**
  做法：每行文字套 overflow:hidden 行框，从 translateY(120%) 升起；曲线用 strokeDashoffset 画 950ms；不常见在读数胶囊从虚线顶端展开，玻璃只淡入不位移
  电脑＋手机 · 仅提示词 · 来自「Heart Health Dashboard」（应用界面） · [预览图](../sources/framesbase/items/76084b77-740a-484e-97bf-195a99cbe572/preview.webp) · [提示词](../sources/framesbase/items/76084b77-740a-484e-97bf-195a99cbe572/prompt.md)
- **鼠标处圆形柔光揭示第二张背景，网格随鼠标轻微视差**
  做法：离屏canvas每帧画半径260径向渐变（0–0.4全白到1透明）转dataURL当mask，同时用在背景揭示层和玻璃卡内副本；跟随系数0.1；48px网格偏移±8px；不常见在遮罩同步进玻璃卡
  电脑＋手机 · 仅提示词 · 来自「Imperial VPN」（只有首屏） · [预览图](../sources/framesbase/items/67fbcffc-24d5-4fb7-a562-3195241f82c8/preview.webp) · [提示词](../sources/framesbase/items/67fbcffc-24d5-4fb7-a562-3195241f82c8/prompt.md)
- **背景视频循环时先淡到黑再淡回，避免硬切**
  做法：视频初始透明，canplay 后用 rAF 500ms 淡入；剩余 ≤0.55s 时 500ms 淡出；ended 后等 100ms 归零重播再淡入。不常见在给不能无缝循环的视频加黑场过渡
  电脑＋手机 · 仅提示词 · 来自「Innovation」（整页） · [预览图](../sources/framesbase/items/54078ffa-0e18-4d8d-a5f2-02a7c89c8f02/preview.webp) · [提示词](../sources/framesbase/items/54078ffa-0e18-4d8d-a5f2-02a7c89c8f02/prompt.md)
- **背景视频不自动播放，按整页滚动进度逐帧推进**
  做法：少见在先把视频抽成最多90帧（宽≤960px）ImageBitmap，用canvas按lerp 0.12平滑后的进度画帧；抽帧完成前退回seek视频；两区之间留80vh空白拉长滚动
  电脑＋手机 · 仅提示词 · 来自「Intelligent Operations」（只有首屏） · [预览图](../sources/framesbase/items/f6ce6818-dc07-4cca-b9ab-61453644a2fd/preview.webp) · [提示词](../sources/framesbase/items/f6ce6818-dc07-4cca-b9ab-61453644a2fd/prompt.md)
- **约1.9秒级联入场，后台截图内部逐块揭开、折线描出**
  做法：隐藏态写在html.entrance-pending下，无JS直接显示；缓动cubic-bezier(.22,1,.36,1)；截图框clip-path自下揭开1000ms，统计卡左擦，折线pathLength=1、dashoffset 1→0。不常见在把假界面内部按时间表逐块编排
  电脑＋手机 · 仅提示词 · 来自「Intelligent Systems」（只有首屏） · [预览图](../sources/framesbase/items/526347c5-db22-46de-994a-90795ee71626/preview.webp) · [提示词](../sources/framesbase/items/526347c5-db22-46de-994a-90795ee71626/prompt.md)
- **鼠标处出现柔边圆形光斑，透过光斑看到第二张带花草的地形图**
  做法：两图叠放；鼠标坐标每帧按0.1缓动跟随；隐藏canvas画半径260px径向渐变(0.4内全白，0.75处0.4，1处0)，转图片作上层mask-image。少见在用画布生成遮罩做探照灯
  电脑＋手机 · 仅提示词 · 来自「Interactive Discovery」（只有首屏） · [预览图](../sources/framesbase/items/1cf51035-b2fb-4b70-b665-8b2763f0a2df/preview.webp) · [提示词](../sources/framesbase/items/1cf51035-b2fb-4b70-b665-8b2763f0a2df/prompt.md)
- **滚动画廊：中线撑开成黑幕，三图依次从中心放大，再由黑转白**
  做法：容器900vh、画廊 fixed；进度0–0.06中间竖线长到50px，0.06–0.16三次缓动撑满全屏，之后每图 scale 0.2→1；不常见在由一条竖线撑开转场，结尾背景按RGB插值黑转白换浅色结语
  电脑＋手机 · 仅提示词 · 来自「Investment Gate」（只有首屏） · [预览图](../sources/framesbase/items/1daf8483-ff23-4af5-a9e3-decc5be2d7e5/preview.webp) · [提示词](../sources/framesbase/items/1daf8483-ff23-4af5-a9e3-decc5be2d7e5/prompt.md)
- **翠鸟视频按状态切换，滚动时石雕上移、底部面板下沉**
  做法：四段透明 webm：进场→待机1↔待机2循环，滚动超10px播离场，回顶重新进场，用 ref 存状态防闭包过期；石雕 translateY(-scrollY×0.3)，底部面板 bottom=偏移+scrollY×0.5。不常见在用多段视频做角色状态机
  电脑＋手机 · 仅提示词 · 来自「Layered Depth」（只有首屏） · [预览图](../sources/framesbase/items/44e96e6c-04fd-49c4-a43a-4a6af311fb84/preview.webp) · [提示词](../sources/framesbase/items/44e96e6c-04fd-49c4-a43a-4a6af311fb84/prompt.md)
- **滚到中段，扁椭圆轨道展开成一列大图，焦点瓶旁淡入名称说明**
  做法：滚动 15%–25%：轨道 330×140→650 正圆、瓶子 80→360px、整组左移只露一列，焦点瓶右侧淡入标题说明；不常见在此段轨道进度改由滚动增量×200 驱动，其余时间自转
  电脑 · 仅提示词 · 来自「Luxury Botanical」（整页） · [预览图](../sources/framesbase/items/50a1f0a2-ad46-40b2-9f63-1dee3f63d3d1/preview.webp) · [提示词](../sources/framesbase/items/50a1f0a2-ad46-40b2-9f63-1dee3f63d3d1/prompt.md)
- **滚动推进两段视频，文字上飘模糊，商品面板侧滑入**
  做法：650vh长页；滚动值0.05插值再驱动视频0.08插值，未seeking才seek；文字按区间淡出上移75px、模糊16px；40–50%和90%后面板侧滑入。少见在双层插值加seek守卫
  电脑 · 仅提示词 · 来自「Luxury Focus」（只有首屏） · [预览图](../sources/framesbase/items/60b22f78-41c4-469b-8036-d6bd9bdd0eb1/preview.webp) · [提示词](../sources/framesbase/items/60b22f78-41c4-469b-8036-d6bd9bdd0eb1/prompt.md)
- **一滚动首段视频淡出、第二段从头播放；标志圆环依次放大入场**
  做法：外层 200dvh 套 sticky 一屏；一滚动上层视频 700ms 淡出，下层第二段从 0 开播，滚回顶部暂停，少见；入场：两道圆环 0.75→1、1200ms 隔 150ms
  电脑＋手机 · 仅提示词 · 来自「Luxury Hero」（只有首屏） · [预览图](../sources/framesbase/items/08596d45-9af3-417b-9f46-9544893f2f05/preview.webp) · [提示词](../sources/framesbase/items/08596d45-9af3-417b-9f46-9544893f2f05/prompt.md)
- **建筑抠图从屏底升起，随滚动上移并放大到 1.45 倍，压住下一屏深色区**
  做法：抠图 fixed 底部居中、最小宽 1400px；首屏滚过 30% 起算进度，终点是深色区底到屏底；进度做两次 smoothstep 后插值位移和缩放。不常见在一张抠图跨两屏连续移动
  电脑＋手机 · 仅提示词 · 来自「Luxury Real Estate」（整页） · [预览图](../sources/framesbase/items/9b67fdf3-96e8-4a42-9824-519b0a1f2f22/preview.webp) · [提示词](../sources/framesbase/items/9b67fdf3-96e8-4a42-9824-519b0a1f2f22/prompt.md)
- **任务每 4.5 秒上移一格进入高亮槽，到头无缝循环**
  做法：列表复制三份，索引从 N 走到 2N 后关动画瞬移回 N，50ms 后再开；每次滑动 1s、曲线 cubic-bezier(0.16,1,0.3,1)；标题/副文/按钮按 0/0.2/0.4s 依次上浮
  电脑 · 仅提示词 · 来自「Minimal Workflow SaaS」（只有首屏） · [预览图](../sources/framesbase/items/018266d8-89e5-44c6-8051-3d7bf08eda26/preview.webp) · [提示词](../sources/framesbase/items/018266d8-89e5-44c6-8051-3d7bf08eda26/prompt.md)
- **框线不动，斜线带横扫、标题上升、画面显影、格内字淡入**
  做法：首帧给 html 加 is-entering，WAAPI 时间轴：斜线带 clip-path 横扫 760ms，标题行 translateY(120%) 上升 900ms，视频 clip inset(12% 0 0 0)＋透明→全显 1100ms，格内文字只淡入不位移，约 1.72s 收
  电脑＋手机 · 仅提示词 · 来自「Mistveil」（只有首屏） · [预览图](../sources/framesbase/items/0de20a2a-5bfc-4897-b2c4-a70db52efe2d/preview.webp) · [提示词](../sources/framesbase/items/0de20a2a-5bfc-4897-b2c4-a70db52efe2d/prompt.md)
- **滚动时左右塔向两边拉开，桥放大上冲，画面变模糊换下一屏文案**
  做法：3700px粘性滚动：用segmentInOut(smoothstep)分段，左右塔各移±46vw并放大0.74，桥宽67.2vw→105vw后上冲760px；背景模糊到14px、亮度降25.5%、叠蓝色渐变；滚动值lerp 0.14平滑
  电脑 · 仅提示词 · 来自「Mostar Guide」（整页） · [预览图](../sources/framesbase/items/0975afb7-d08e-42cb-8b80-bfb1b7b5aa5f/preview.webp) · [提示词](../sources/framesbase/items/0975afb7-d08e-42cb-8b80-bfb1b7b5aa5f/prompt.md)
- **旋转擦除转场：一个盒子边转边变宽，露出下一段视频**
  做法：overflow:hidden的盒子宽度随进度增长并转-45°，里面视频反向旋转保持正立、锁定100vw×100vh；斜向跨度取72vw+72vh；标题退场用translateZ 680px加平方模糊；不常见在用旋转盒而非clip-path揭示
  电脑 · 仅提示词 · 来自「Motion Frame」（整页） · [预览图](../sources/framesbase/items/92fc0c08-06e5-40e3-9848-6ecad1c036e6/preview.webp) · [提示词](../sources/framesbase/items/92fc0c08-06e5-40e3-9848-6ecad1c036e6/prompt.md)
- **滚动时镜头穿过石拱门，两侧藤蔓帘幕拉开，鼠标带视差**
  做法：不常见在穿门：页高480vh内含100vh sticky；拱门以52% 38%为原点从1放大到7.5，65%后淡出，背景1到1.18，帘幕从62%推到150%；鼠标视差lerp 0.07
  电脑＋手机 · 仅提示词 · 来自「Mythic Naturecore」（只有首屏） · [预览图](../sources/framesbase/items/b0d60757-c9d6-44e0-86c1-45acfa86d9ad/preview.webp) · [提示词](../sources/framesbase/items/b0d60757-c9d6-44e0-86c1-45acfa86d9ad/prompt.md)
- **视频播到75%时浮现两个带折线引线的白色标注胶囊**
  做法：不常见在跟视频进度联动：监听 timeupdate，currentTime/duration≥0.75 时标注700ms淡入，循环重播时消失；胶囊白底 #07141B 字，外围小角括号，引线是先竖后斜的两段 SVG 折线
  电脑＋手机 · 仅提示词 · 来自「Nature Ritual」（只有首屏） · [预览图](../sources/framesbase/items/75806499-a2b1-49aa-9345-f290f65907cb/preview.webp) · [提示词](../sources/framesbase/items/75806499-a2b1-49aa-9345-f290f65907cb/prompt.md)
- **第二屏整段大字带 3D 倾斜，随滚动慢慢上推**
  做法：透视 400px，段落 rotateX(24deg)；translateY 随滚动 60→−120px，套 useSpring（stiffness 15、damping 32、mass 1.8）
  电脑＋手机 · 仅提示词 · 来自「Neon Logic」（整页） · [预览图](../sources/framesbase/items/9885c972-ba86-4d5c-b2e1-9287a8a61218/preview.webp) · [提示词](../sources/framesbase/items/9885c972-ba86-4d5c-b2e1-9287a8a61218/prompt.md)
- **滚动控制视频进度和模糊，标题用乱码字符进出**
  做法：视频不自动播放，按滚动比例设currentTime，做0.12平滑插值；滚到后半程模糊从5px加到55px、放大到1.11；四行标题逐字随机乱码显现900ms，一离开顶部就乱码消失700ms
  电脑＋手机 · 仅提示词 · 来自「Neural Interface」（整页） · [预览图](../sources/framesbase/items/0c4c0ad2-ff02-4422-b1a4-f72d7ac5d9a6/preview.webp) · [提示词](../sources/framesbase/items/0c4c0ad2-ff02-4422-b1a4-f72d7ac5d9a6/prompt.md)
- **背景视频来回往复播放，不调用play()**
  做法：不常见在拖进度做倒放：先pause()，rAF每33ms把currentTime加减0.05s，到头就反向；seeking为真时跳过，等上一帧解码完；视频fixed铺满并scale(1.35)
  电脑 · 仅提示词 · 来自「Nex Max Upgrade」（单个模块） · [预览图](../sources/framesbase/items/d4b03034-a31a-4d9c-9820-7fe4ddb7484d/preview.webp) · [提示词](../sources/framesbase/items/d4b03034-a31a-4d9c-9820-7fe4ddb7484d/prompt.md)
- **巨字从两侧揭开、标题逐行升起，光标聚光灯跟随揭图**
  做法：不常见在聚光灯：离屏canvas画径向渐变转dataURL作mask，插值0.1跟随；空闲时把圆心移出画布而非设mask:none。入场用WAAPI按构图顺序：巨字从两侧揭开，标题逐字升起
  电脑＋手机 · 仅提示词 · 来自「NEX Robotics」（只有首屏） · [预览图](../sources/framesbase/items/865f7975-09c2-45f7-8f2a-3d1c597e2fe9/preview.webp) · [提示词](../sources/framesbase/items/865f7975-09c2-45f7-8f2a-3d1c597e2fe9/prompt.md)
- **白面板自上而下擦出，横线从左画出，各块依次上浮**
  做法：面板clip-path inset(0 0 100% 0)→0用720ms；四列链接延迟360/410/460/510ms上浮；横线scaleX 0→1；全部backwards填充；最后一项animationend后加类关掉动画；背景图不参与动画
  电脑＋手机 · 仅提示词 · 来自「Nietzsche sustainibilty」（单个模块） · [预览图](../sources/framesbase/items/1246a299-6aef-4e0a-806b-b4776bcab59f/preview.webp) · [提示词](../sources/framesbase/items/1246a299-6aef-4e0a-806b-b4776bcab59f/prompt.md)
- **鼠标处挖开静态图，露出底下播放的视频**
  做法：视频铺底，上盖 SVG image，mask 里 6 个径向渐变圆跟随鼠标：首圆 lerp 0.2，其余逐个以 0.35 追前一个，半径每个减 35、透明度减 0.15，形成拖尾光斑；悬停热区时才播放视频
  电脑＋手机 · 仅提示词 · 来自「Nike Hover」（单个模块） · [预览图](../sources/framesbase/items/f780106c-91b1-4c07-a6ef-4c70ca27ebba/preview.webp) · [提示词](../sources/framesbase/items/f780106c-91b1-4c07-a6ef-4c70ca27ebba/prompt.md)
- **鼠标处挖出渐隐圆洞，透出底层视频，带拖尾**
  做法：SVG mask 白底上画 6 个径向渐变黑圆（半径 420 起每个减 35），首点以 0.2、后续以 0.35 系数追随鼠标，图片挖空处露出下层视频，悬停区才播放。不常见在用遮罩拖尾揭示视频。
  电脑 · 仅提示词 · 来自「Nike Premium Landing」（只有首屏） · [预览图](../sources/framesbase/items/562a4221-9e7b-4920-a1d9-30ef9d92a324/preview.webp) · [提示词](../sources/framesbase/items/562a4221-9e7b-4920-a1d9-30ef9d92a324/prompt.md)
- **区块底部 12 根金色竖条随滚动起伏**
  做法：12 根无缝金色渐变竖条贴底铺满屏宽，单双交替深浅；滚动进度代入 sin(p·2π+i·0.72)·34+cos(p·π+i·0.34)·14 得出每根加减的像素高度，height 过渡 80ms
  电脑＋手机 · 仅提示词 · 来自「NimBus Pricing」（单个模块） · [预览图](../sources/framesbase/items/4a7d1f9d-91f0-4187-ac26-25fb6308dd25/preview.webp) · [提示词](../sources/framesbase/items/4a7d1f9d-91f0-4187-ac26-25fb6308dd25/prompt.md)
- **首屏粘住500vh，滚动逐帧拖动视频，四段文字依次上滑穿过**
  做法：区块高500vh、内层sticky；进度乘时长得目标时间，每帧按1-e^(-dt×10)平滑逼近；后四段各占1/5进度，translateY从100%走到-100%。另用WebCodecs预解码帧
  电脑 · 仅提示词 · 来自「Obsidian」（整页） · [预览图](../sources/framesbase/items/ccd32abe-cb7c-4802-a90c-c462821ea69f/preview.webp) · [提示词](../sources/framesbase/items/ccd32abe-cb7c-4802-a90c-c462821ea69f/prompt.md)
- **鼠标划过花朵，留下有机形状的拖尾，露出另一朵花**
  做法：两层同尺寸花图，各用离屏canvas做mask：前层挖洞、后层只显拖尾。拖尾点每8px采样、最多60个、半径140、每帧透明度×0.92，24点噪声曲线画团块。不常见在用拖尾换图
  电脑＋手机 · 仅提示词 · 来自「Orbit Flora」（只有首屏） · [预览图](../sources/framesbase/items/b6b27a95-4247-4e38-ade0-9ef66084ae2b/preview.webp) · [提示词](../sources/framesbase/items/b6b27a95-4247-4e38-ade0-9ef66084ae2b/prompt.md)
- **滚动驱动视频逐帧播放，标题逐字模糊上移退出**
  做法：500vh容器内sticky视频，rAF里按0.08系数插值currentTime，只在!video.seeking时赋值防解码卡顿出黑帧，少见在这条守卫；滚过80%后标题逐字淡出、模糊、上移
  电脑＋手机 · 仅提示词 · 来自「OYLA」（整页） · [预览图](../sources/framesbase/items/2926b160-b146-49bb-b1f8-d92e8d6f5676/preview.webp) · [提示词](../sources/framesbase/items/2926b160-b146-49bb-b1f8-d92e8d6f5676/prompt.md)
- **滚动时镜头在同一张照片上平移推近，首屏转成产品窗口**
  做法：不常见在只用一张图：sticky舞台按进度把图从(-48%,-80%)移到(-50%,-37%)，缩放1+0.11·sin(πq)中途推近；标题先上移、再模糊、最后才淡出；滚动速率封顶0.4/秒，甩滚也播约2.5秒
  电脑＋手机 · 仅提示词 · 来自「Peakline Redshift」（只有首屏） · [预览图](../sources/framesbase/items/f2b83e6a-88a5-4ac5-bd5f-3100feb26292/preview.webp) · [提示词](../sources/framesbase/items/f2b83e6a-88a5-4ac5-bd5f-3100feb26292/prompt.md)
- **1200vh滚动驱动两段视频逐帧播放，中间模糊交叉淡化**
  做法：滚动只更新目标时间，rAF循环以0.09系数逼近，偏差>0.02s且距上次≥30ms才seek；第一段淡出时加0–80px模糊；文字按词拆开模糊上浮、错开0.05s。不常见在节流seek让滚动播放顺滑
  电脑＋手机 · 仅提示词 · 来自「Performance Eyewear」（只有首屏） · [预览图](../sources/framesbase/items/d3a1aac5-6a48-4957-ae8a-80777da6b935/preview.webp) · [提示词](../sources/framesbase/items/d3a1aac5-6a48-4957-ae8a-80777da6b935/prompt.md)
- **视频和字体加载完才逐项入场，元素带模糊上浮**
  做法：两段视频loadeddata加字体就绪后给视口加.ze-ready才播动画，5秒兜底；文字从translateY 26px、scale .985、blur 7px入场0.9s，expo-out；清单每行隔80ms，省钱徽标最后弹簧弹出
  手机 · 仅提示词 · 来自「Place Saver」（应用界面） · [预览图](../sources/framesbase/items/88164436-53da-4069-8795-d6bc420539eb/preview.webp) · [提示词](../sources/framesbase/items/88164436-53da-4069-8795-d6bc420539eb/prompt.md)
- **鼠标左右移动拖动两段视频进度，中间有静止区**
  做法：视频不自动播放；光标离中心超过max(30px,宽5%)后，左侧拖右视频、右侧拖左视频，按距离映射currentTime；仅在video.seeking为false时赋值防抖。不常见在用光标当时间轴
  电脑＋手机 · 仅提示词 · 来自「PROMPT」（整页） · [预览图](../sources/framesbase/items/f3bd46c2-eb66-40f5-ac4c-5b77dc86b259/preview.webp) · [提示词](../sources/framesbase/items/f3bd46c2-eb66-40f5-ac4c-5b77dc86b259/prompt.md)
- **滚轮驱动视频逐帧、标题逐字下落，第二屏从底部升起成圆柱文字滚筒**
  做法：禁用原生滚动，滚轮 deltaY×0.0006 驱动 0–3.5 进度并 0.08 缓动；标题逐字 yPercent 300、stagger 0.03；第二屏 rounded-t-48 上升时首屏模糊到64px；正文每行按 R=380 算 translateZ 和 rotateX 成滚筒。不常见在文字滚筒
  电脑＋手机 · 仅提示词 · 来自「Pulse 3D」（只有首屏） · [预览图](../sources/framesbase/items/ce169659-7033-4e97-a4c7-429fd5e851a2/preview.webp) · [提示词](../sources/framesbase/items/ce169659-7033-4e97-a4c7-429fd5e851a2/prompt.md)
- **卡片先升起，两行标题自下揭开，表单逐项后到**
  做法：卡片、徽标、两行标题、表单各项在40–1260ms内依次上移淡入；标题加clip-path自下揭开；背景视频不动。少见在head里先加隐藏类、3.5s兜底，动画后cancel清掉残留样式
  电脑＋手机 · 仅提示词 · 来自「Real-Time Alerts」（单个模块） · [预览图](../sources/framesbase/items/e73d4b7e-ad1f-4412-b00c-5bc9085f0fae/preview.webp) · [提示词](../sources/framesbase/items/e73d4b7e-ad1f-4412-b00c-5bc9085f0fae/prompt.md)
- **光标处圆形聚光揭开第二张图，滚轮触发视频过场到卡片屏**
  做法：不常见在聚光揭图：隐藏canvas在平滑光标处画半径260径向渐变，作mask-image盖住第二张全屏图，光标按0.1系数缓随；页面不滚动，滚轮超40px播放全屏过场视频，2秒时下一屏淡入
  电脑＋手机 · 仅提示词 · 来自「Relocation Card」（只有首屏） · [预览图](../sources/framesbase/items/d5b4d70e-a78f-4a92-9fa0-29ec38f17ae9/preview.webp) · [提示词](../sources/framesbase/items/d5b4d70e-a78f-4a92-9fa0-29ec38f17ae9/prompt.md)
- **鼠标左右移动时背景视频跟着前后拖动**
  做法：视频不自动播放；监听 mousemove，按位移/窗宽×0.8×时长换算目标时间并夹在 0 到时长之间；在 onSeeked 里再排下一次跳转，防止连续跳转卡顿
  电脑＋手机 · 仅提示词 · 来自「Retro-Futurist」（只有首屏） · [预览图](../sources/framesbase/items/e82e527e-8739-4341-ad66-6fc642094dd6/preview.webp) · [提示词](../sources/framesbase/items/e82e527e-8739-4341-ad66-6fc642094dd6/prompt.md)
- **鼠标处出现圆形聚光，透出另一张图；背景细网格随鼠标微移**
  做法：每帧在 canvas 画半径260的径向渐变圆（0–0.4全白，到1渐隐），toDataURL 后作 mask-image 盖在第二张图上；鼠标 0.1 缓动；48px 网格 SVG 透明度0.1，偏移±16px。不常见在用光标聚光切换两版画面
  电脑＋手机 · 仅提示词 · 来自「Reveal Hero」（只有首屏） · [预览图](../sources/framesbase/items/561704b4-2ed3-46c9-b67e-2d02ee6c4bd0/preview.webp) · [提示词](../sources/framesbase/items/561704b4-2ed3-46c9-b67e-2d02ee6c4bd0/prompt.md)
- **背景视频正放到尾后逐帧倒放，往返循环**
  做法：不用loop：ended后用rAF时间差递减目标时间倒放；video.seeking时只记待办，seeked后再补，不叠加seek；退到0改正向play()。不常见在节流seek做回旋播放
  电脑＋手机 · 仅提示词 · 来自「SaaS Pricing Flow」（单个模块） · [预览图](../sources/framesbase/items/52c61350-0426-4bd4-8b67-cbe57659c962/preview.webp) · [提示词](../sources/framesbase/items/52c61350-0426-4bd4-8b67-cbe57659c962/prompt.md)
- **滚动拖动背景视频进度，段落逐词去模糊**
  做法：按滚动比例设video.currentTime，到页脚距顶20%时为1；video.seeking为真就跳过本次，避免连续赋值闪帧。段落按词拆span，透明0.1→1、模糊4px→0、整段旋转3°→0。少见在seeking防闪
  电脑 · 仅提示词 · 来自「Scroll Landing Page」（整页） · [预览图](../sources/framesbase/items/801690d8-4a7d-42fd-b164-2dd4aa19fc65/preview.webp) · [提示词](../sources/framesbase/items/801690d8-4a7d-42fd-b164-2dd4aa19fc65/prompt.md)
- **滚动驱动：视频随滚动逐帧走，字标缩进角落，45°斜缝展开第二段视频**
  做法：可见层全fixed，三个空runway撑高度，滚动只写CSS变量；字标缩到0.51，途中单个字母闪成片假名；斜缝是宽度增长并转到45°的容器，内部视频反向旋转保持正立。不常见在45°斜缝转场
  电脑＋手机 · 仅提示词 · 来自「Sea Serenade」（整页） · [预览图](../sources/framesbase/items/0fb9b45c-c7fb-4abb-9fd8-b56135da07af/preview.webp) · [提示词](../sources/framesbase/items/0fb9b45c-c7fb-4abb-9fd8-b56135da07af/prompt.md)
- **开场黑幕从中心开出带像素毛边的圆洞**
  做法：canvas铺黑，用destination-out从中心挖圆，1800ms easeOutCubic扩到对角线一半；圆边再挖360个10px方块（半径×0.85–1.15随机）和180个小方块成像素毛边，结束后400ms淡出。少见在像素毛边开场
  电脑＋手机 · 仅提示词 · 来自「Sentinel」（整页） · [预览图](../sources/framesbase/items/ad42285c-ab93-4884-a40b-f46a231c09bd/preview.webp) · [提示词](../sources/framesbase/items/ad42285c-ab93-4884-a40b-f46a231c09bd/prompt.md)
- **滚动时白色椭圆遮罩展开，图片沿椭圆轨道转动放大**
  做法：600vh里sticky一屏；白层旋转-15°，clip-path椭圆0→55%展开；不常见在图片用offset-path沿SVG椭圆走，近焦点按余弦从0.4放大到1；中段图片80→520、半径330→650，转速由滚动量驱动
  电脑 · 仅提示词 · 来自「Shamoni」（单个模块） · [预览图](../sources/framesbase/items/aa62f097-877f-4089-9945-aae5d5e2f918/preview.webp) · [提示词](../sources/framesbase/items/aa62f097-877f-4089-9945-aae5d5e2f918/prompt.md)
- **标题逐字翻落入场，滚动时逐字散飞、饼干翻转半圈**
  做法：每字一个span，奇偶字左右交替，带rotateX 74°、rotateZ 9°从上方落下，每字延迟0.024；滚动时逐字向上散开淡出；不常见在Three.js饼干随滚动rotation.y转π并中途抬起，滚动值按指数平滑
  电脑＋手机 · 仅提示词 · 来自「Sky Cookie」（只有首屏） · [预览图](../sources/framesbase/items/e8e4b3e8-fe8d-46c6-be04-864b3e682100/preview.webp) · [提示词](../sources/framesbase/items/e8e4b3e8-fe8d-46c6-be04-864b3e682100/prompt.md)
- **入场：两段顶栏横向揭开，白面板向下揭开，标题三行逐行升起**
  做法：顶栏 clip-path 右揭 680/760ms，白面板下揭 920ms；标题逐行从裁切中升起 780ms、隔 110ms；只用独立 translate/scale，不碰 transform，少见
  电脑＋手机 · 仅提示词 · 来自「Skytrace」（只有首屏） · [预览图](../sources/framesbase/items/c72b86d8-d01f-4ad6-8a52-20790dc55acd/preview.webp) · [提示词](../sources/framesbase/items/c72b86d8-d01f-4ad6-8a52-20790dc55acd/prompt.md)
- **切换时前层背景下拉再回弹，后层模糊新图垫底**
  做法：后层先换目标图并blur(40px)；前层下移20vh、透明0.8，0.3秒ease-in，300ms后换图，0.5秒用(.175,.885,.32,1.4)回弹归位。不常见在下拉换图
  电脑＋手机 · 仅提示词 · 来自「Solar Energy Hero」（只有首屏） · [预览图](../sources/framesbase/items/3f3c5354-832c-40a2-9b4a-da06b857e72e/preview.webp) · [提示词](../sources/framesbase/items/3f3c5354-832c-40a2-9b4a-da06b857e72e/prompt.md)
- **向下滚动时视频卡左右收窄，三张数据卡从两侧和底部滑入**
  做法：外层 250vh、内层 sticky；progress 0–1 时视频左右内缩 progress×180px；数据卡 opacity=(p-0.2)/0.6，左右卡各从±80px、底卡从 +50px 归位。不常见在滚动把满屏视频收成卡片，同时让指标卡围上来
  电脑＋手机 · 仅提示词 · 来自「Spatial Mapping Platform」（只有首屏） · [预览图](../sources/framesbase/items/9e852e08-1485-4ae9-8aa1-1c85077448b4/preview.webp) · [提示词](../sources/framesbase/items/9e852e08-1485-4ae9-8aa1-1c85077448b4/prompt.md)
- **同一张卡在五屏间变形，切屏时粒子迸发**
  做法：整个流程只用一张持久卡片，开layout动画（0.42s tween），切屏时尺寸平滑变化，内容上移淡出、下方淡入；切屏叠光晕扫带和两圈光环，再按每屏固定种子生成11–16个花瓣、丝带等CSS粒子飞散0.78–1.12s
  电脑＋手机 · 仅提示词 · 来自「Sweet Question」（应用界面） · [预览图](../sources/framesbase/items/c4d07181-47a9-4fc5-b9be-43af6edd4aeb/preview.webp) · [提示词](../sources/framesbase/items/c4d07181-47a9-4fc5-b9be-43af6edd4aeb/prompt.md)
- **滚动逐帧拖动背景视频，拖完淡入黑底，文字分段出现**
  做法：不常见在先抽帧：按时长×24抽30–110帧成ImageBitmap，画到canvas按cover铺满；区块700vh，进度lerp 0.1；前55%拖视频，55–65%换黑层，之后三段文字依次出现
  电脑 · 仅提示词 · 来自「Synthesis」（只有首屏） · [预览图](../sources/framesbase/items/b45fed17-bf32-4085-a1c0-94fc2f98a28d/preview.webp) · [提示词](../sources/framesbase/items/b45fed17-bf32-4085-a1c0-94fc2f98a28d/prompt.md)
- **进场时中间主卡先落定，四周卡片和内部小元素依次展开**
  做法：卡片 panel-settle：透明度0、上移12、缩放.988、clip-path inset(3% round 22) 到原位；标题 clip-path 自下展开；柱图 inset(100% 0 0 0) 自下长出；共约1.85s，跑完移除动画类。不常见在按卡分层排时间表并兼顾减少动效
  电脑＋手机 · 仅提示词 · 来自「Task Engine」（单个模块） · [预览图](../sources/framesbase/items/222d0f76-41e4-4755-86c8-2aab8b293a76/preview.webp) · [提示词](../sources/framesbase/items/222d0f76-41e4-4755-86c8-2aab8b293a76/prompt.md)
- **切换标签后各行上浮，区间框、填充条、光点依次展开点亮**
  做法：行入场520ms、逐行延迟90ms；区间框晚60ms从scaleX(0.6)展开；填充条晚110ms、900ms展开；光点晚260ms、每点再加70ms放大。少见在一行三层错峰
  电脑＋手机 · 仅提示词 · 来自「Technical Specifications」（单个模块） · [预览图](../sources/framesbase/items/76cc56ac-4363-4612-ac27-80aa854721b2/preview.webp) · [提示词](../sources/framesbase/items/76cc56ac-4363-4612-ac27-80aa854721b2/prompt.md)
- **滚动逐帧拖动视频，字标缩进角落，45°斜缝展开第二段视频**
  做法：三段空 runway 撑高度，JS 只写 --shrink/--reveal/--s2/--s3；揭示层宽度随 --reveal 增长并转45°，内部视频反向旋转保持竖直；文字逐词按变量窗口模糊上浮。不常见在斜缝揭示且倒滚完全可逆
  电脑＋手机 · 仅提示词 · 来自「Tokyo Nocturne」（整页） · [预览图](../sources/framesbase/items/3391516a-2ff0-4ad4-8aee-89acbfbae077/preview.webp) · [提示词](../sources/framesbase/items/3391516a-2ff0-4ad4-8aee-89acbfbae077/prompt.md)
- **背景视频前进后倒放，循环往复**
  做法：不常见在倒放循环：视频只播一遍，播放时逐帧截到宽 960px 的离屏 canvas，结束后换成 canvas 以 30fps 正放到尾再倒放回头，避免原生 loop 跳帧
  电脑＋手机 · 仅提示词 · 来自「TrustFlow」（只有首屏） · [预览图](../sources/framesbase/items/c9ddc911-c8ad-4cb2-a386-d541d1116c9a/preview.webp) · [提示词](../sources/framesbase/items/c9ddc911-c8ad-4cb2-a386-d541d1116c9a/prompt.md)
- **500vh滚动轨道驱动视频逐帧播放，三段文字轮流出现**
  做法：不常见在先用WebCodecs把视频解码成webp帧库画到canvas，按滚动进度取最近帧，lerp系数τ=8平滑；三段文字按进度区间0.08宽淡入淡出，前段完全消失后段才出现
  电脑＋手机 · 仅提示词 · 来自「Vectrus Energy」（整页） · [预览图](../sources/framesbase/items/60e0c19f-9900-4b7b-bf4f-3ead89515226/preview.webp) · [提示词](../sources/framesbase/items/60e0c19f-9900-4b7b-bf4f-3ead89515226/prompt.md)
- **滚动时整段大字从左到右由灰变成渐变色**
  做法：同一句叠两层：底层 #B8B7BA 灰字，顶层渐变字 absolute inset-0 加 clip-path: inset(0 X% 0 0)；元素顶部从视口 80% 滚到 20% 时 X 由 100 降到 0，transition 0.1s linear
  电脑＋手机 · 仅提示词 · 来自「Veloce Finance」（整页） · [预览图](../sources/framesbase/items/b0af2960-2168-4c44-a031-ea6e65ceb2f1/preview.webp) · [提示词](../sources/framesbase/items/b0af2960-2168-4c44-a031-ea6e65ceb2f1/prompt.md)
- **所有文字带红青双色错位描边，偶尔猛跳一下**
  做法：常驻红青各 1px 的 text-shadow 错位；不常见在 3s 循环只在 96%、97% 两帧跳到 ±3px 再回落，平时几乎不动；标题、段落、按钮依次延迟 0.2s 上浮淡入
  电脑 · 仅提示词 · 来自「Velorah Focus」（单个模块） · [预览图](../sources/framesbase/items/494d237a-9ad3-4042-aeb8-c1d3ce1328f8/preview.webp) · [提示词](../sources/framesbase/items/494d237a-9ad3-4042-aeb8-c1d3ce1328f8/prompt.md)
- **开场两排各5块浅蓝方块上下拉开，再出人像和标题**
  做法：幕布2行×5块#75C5DE，上排上移、下排下移100%，每块错开0.05s、时长1s；人像从scale1.5转3°归位，标题逐词从blur10px上浮。不常见在分块拉开的开场幕
  电脑 · 仅提示词 · 来自「Vision Reveal」（只有首屏） · [预览图](../sources/framesbase/items/74a3a1d3-45cc-4eab-87cd-d97aaf489f27/preview.webp) · [提示词](../sources/framesbase/items/74a3a1d3-45cc-4eab-87cd-d97aaf489f27/prompt.md)
- **背景视频播完一遍后改为来回往返循环，并随鼠标轻微视差**
  做法：首次播放用requestVideoFrameCallback把每帧画进宽≤960px的离屏canvas，结束后在canvas上按30fps正放倒放循环；背景层放大1.08，鼠标偏移±20px、插值0.06；不常见在逐帧缓存做往返播放
  电脑 · 仅提示词 · 来自「Visual Hero」（只有首屏） · [预览图](../sources/framesbase/items/86c2a591-7c9a-4bfb-9990-e910a7a059f0/preview.webp) · [提示词](../sources/framesbase/items/86c2a591-7c9a-4bfb-9990-e910a7a059f0/prompt.md)
- **背景视频随鼠标缓慢平移**
  做法：视频外层放大 1.08 留余量、1.25 倍速；鼠标偏离中心映射到 ±20px，在 rAF 里按 0.06 系数插值追随，用 gsap.set 写入。不常见在视差跟鼠标而不是跟滚动
  电脑 · 仅提示词 · 来自「Wanderful Hero」（只有首屏） · [预览图](../sources/framesbase/items/40d4dd6d-39ee-4c87-ac03-bbde9a56b92e/preview.webp) · [提示词](../sources/framesbase/items/40d4dd6d-39ee-4c87-ac03-bbde9a56b92e/prompt.md)
- **滚一下，右侧两张卡平移成三列看板首列，视频栏铺满**
  做法：滚轮、触摸、方向键触发，页面不滚；JS 实测两端位置写 transform，卡片 1000ms 平移，视频栏 left、圆角归零；之后看板底 clip-path 下拉，结尾句遮罩擦出
  电脑＋手机 · 仅提示词 · 来自「Wealthcore」（只有首屏） · [预览图](../sources/framesbase/items/49f00ed8-33ca-4ee8-90b1-ac041a37635e/preview.webp) · [提示词](../sources/framesbase/items/49f00ed8-33ca-4ee8-90b1-ac041a37635e/prompt.md)
- **鼠标处出现柔边圆形聚光，圈内露出底下的循环视频**
  做法：隐藏canvas按平滑后的光标位置画半径260px径向渐变（0-40%全白，60%/75%/88%降到0.75/0.4/0.12），转dataURL当mask罩在视频上；光标lerp 0.1；视频clip-path只留下方60%
  电脑＋手机 · 仅提示词 · 来自「Wellness Devicex」（只有首屏） · [预览图](../sources/framesbase/items/8c953938-990d-4dee-bb23-0afd88dbfbd7/preview.webp) · [提示词](../sources/framesbase/items/8c953938-990d-4dee-bb23-0afd88dbfbd7/prompt.md)
- **等宽小字逐字打出，带闪烁方块光标**
  做法：少见在防跳动打字：ghost 层放全文占位并隐藏，live 层绝对定位逐字填；光标0.45ch宽 steps(1) 闪烁；每字18ms，空格只等0.35倍；打完再错开0/110/220ms出卡
  电脑＋手机 · 仅提示词 · 来自「Worldwide Hubs」（单个模块） · [预览图](../sources/framesbase/items/f698964b-75ec-44b8-9a2c-e0ecab7d1cb3/preview.webp) · [提示词](../sources/framesbase/items/f698964b-75ec-44b8-9a2c-e0ecab7d1cb3/prompt.md)
- **鼠标划过时留下一串液体扭曲的水波环**
  做法：80 个 div 池，鼠标移动超 25px 生成一环，age 每帧 +0.012，尺寸 20+age×280，透明度 1-age^1.2；环用 backdrop-filter:url(#liquid-trail)，滤镜为 feTurbulence 0.02 加位移 30。不常见在扭曲背后视频。
  电脑 · 仅提示词 · 来自「Yacht Club」（只有首屏） · [预览图](../sources/framesbase/items/7cb83158-1003-451e-badc-8975b0ef715e/preview.webp) · [提示词](../sources/framesbase/items/7cb83158-1003-451e-badc-8975b0ef715e/prompt.md)

## 推荐度 3（8 条）

- 视频首尾淡入淡出的手动循环 · 电脑 · 仅提示词 · 来自「Aethera Studio」（只有首屏） · [目录](../sources/framesbase/items/66ea2b32-5fb7-42af-ab93-25a98b0fa800/)
- 背景视频随滚动逐帧前后播放 · 电脑＋手机 · 仅提示词 · 来自「Apex Pulse」（只有首屏） · [目录](../sources/framesbase/items/599d5e1a-40f3-4f0d-819a-24814d3fefc4/)
- 背景视频不用原生循环，每轮首尾淡入淡出 · 电脑 · 仅提示词 · 来自「Asme」（只有首屏） · [目录](../sources/framesbase/items/c5078d23-4d3b-4fd6-8754-14085e15b163/)
- 大段文字进入视口后逐字母从30%透明度被染亮 · 电脑＋手机 · 仅提示词 · 来自「Build Unit」（整页） · [目录](../sources/framesbase/items/ae3e3baa-1f44-4479-a5d0-320b9f0498dc/)
- 标题第二行浅蓝字上一道白光从左到右循环扫过 · 电脑＋手机 · 仅提示词 · 来自「DesignPro Academy」（只有首屏） · [目录](../sources/framesbase/items/85a94eb4-f04d-444d-860f-875681a42d6f/)
- 背景视频首尾淡入淡出循环，标题逐词模糊上浮 · 电脑＋手机 · 仅提示词 · 来自「Digital Experiences」（只有首屏） · [目录](../sources/framesbase/items/85ccd9f8-6a9a-4013-b054-e67c68d58e2b/)
- 标题逐词由模糊上浮显现 · 电脑＋手机 · 仅提示词 · 来自「Mindful Companion」（整页） · [目录](../sources/framesbase/items/9d5a8d41-42f1-4bc6-86c9-23ace703c781/)
- 项目卡滚动时粘顶层叠，前一张逐渐缩小 · 电脑 · 仅提示词 · 来自「Projects Catalog」（单个模块） · [目录](../sources/framesbase/items/bb53dde7-07e7-4395-a06d-c4e65661a57f/)
