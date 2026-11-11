# 背景处理

共 31 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（3 条）

- **大圆角玻璃卡，边缘泛彩虹色散，透出变形的背景**
  做法：卡内放整屏背景副本，每帧把left/top设为卡片坐标负值形成窗口；副本放大1.06并套SVG滤镜：噪声只留边缘，RGB三通道各位移65/56/47后screen混合；圆角48px；不常见在真折射色散而非模糊
  电脑＋手机 · 预览可见 · 来自「Imperial VPN」（只有首屏） · [预览图](../sources/framesbase/items/67fbcffc-24d5-4fb7-a562-3195241f82c8/preview.webp) · [提示词](../sources/framesbase/items/67fbcffc-24d5-4fb7-a562-3195241f82c8/prompt.md)
- **首屏右侧 340×460 玻璃卡，透出并折射背后视频，边缘带彩虹色散**
  做法：少见在不用backdrop-filter：卡内复制一份背景视频，rAF按卡片位置对齐、时间差超30ms就同步；套SVG滤镜，湍流噪声乘边缘遮罩只扭曲四周，RGB分别位移65/56/47做色散
  电脑＋手机 · 预览可见 · 来自「Mythic VPN」（只有首屏） · [预览图](../sources/framesbase/items/abb80161-e462-4a7a-abe4-f37e93706757/preview.webp) · [提示词](../sources/framesbase/items/abb80161-e462-4a7a-abe4-f37e93706757/prompt.md)
- **模糊室内照片铺底，半透明窗口里多层磨砂面板和胶囊控件**
  做法：不常见在叠法：外层窗口只用 rgba(106,98,94,.40) 底色加内描边，不加 backdrop-filter，否则子面板只能模糊纯色；面板 rgba(240,250,255,.10)+blur(12px)，无边框无外阴影
  电脑＋手机 · 预览可见 · 来自「Reading Library」（应用界面） · [预览图](../sources/framesbase/items/226a0cf0-7336-4461-8496-ecd58088e1f4/preview.webp) · [提示词](../sources/framesbase/items/226a0cf0-7336-4461-8496-ecd58088e1f4/prompt.md)

## 推荐度 4（28 条）

- **一条长满草和小白花的弧形草管，从左下弯到右上**
  做法：不常见在实时 3D 草：Three.js 沿 CatmullRom 曲线建椭圆截面管，上面实例化草叶和花，着色器里按时间做风摆；射线检测鼠标落在管上时把附近草叶推开，推力随帧插值淡入淡出
  电脑 · 预览可见 · 来自「3D Bloom Layer」（只有首屏） · [预览图](../sources/framesbase/items/054b79f3-4db6-42bb-b8b3-4cd6f69c30a5/preview.webp) · [提示词](../sources/framesbase/items/054b79f3-4db6-42bb-b8b3-4cd6f69c30a5/prompt.md)
- **下半屏实时渲染的发光花海，上半屏留纯黑放标题**
  做法：Three.js场景：1.5万根实例化草、950朵程序花，128²GPU流体风场随鼠标搅动、点击起阵风，Bloom强度0.75；整片花园下移让顶部留黑。不常见在花随鼠标风场摆动，源码main.js可查
  电脑 · 预览可见 · 来自「3D Future Flora」（只有首屏） · [预览图](../sources/framesbase/items/9b0e79ff-3d63-41f4-aeee-b28528db6b32/preview.webp) · [提示词](../sources/framesbase/items/9b0e79ff-3d63-41f4-aeee-b28528db6b32/prompt.md)
- **左上金属质感标志是一段视频，黑底被滤掉**
  做法：标志用1470×630视频裁成294×126，外层固定容器设mix-blend-mode:lighten，黑色部分融入背景只留亮部；混合模式要放外层，放在overflow裁切层里Safari会失效。少见在用视频做标志
  电脑＋手机 · 预览可见 · 来自「Avant Studio」（只有首屏） · [预览图](../sources/framesbase/items/5ed6b02a-e611-41de-be1c-1f0bef9a7997/preview.webp) · [提示词](../sources/framesbase/items/5ed6b02a-e611-41de-be1c-1f0bef9a7997/prompt.md)
- **两档液态玻璃：轻的做胶囊标签，重的做面板和按钮**
  做法：底色rgba(255,255,255,.01)+luminosity混合；轻档blur 4px、重档blur 50px；不用border，用::before做1.4px渐变描边，上下亮45%、中段透明，mask-composite exclude挖空，所以边框像反光
  电脑 · 预览可见 · 来自「Bloom AI」（只有首屏） · [预览图](../sources/framesbase/items/4823a413-c013-43e7-a979-c9ee61b4af12/preview.webp) · [提示词](../sources/framesbase/items/4823a413-c013-43e7-a979-c9ee61b4af12/prompt.md)
- **右侧红黑数码视频，下半部更亮**
  做法：同一视频叠两层：底层套 SVG feComponentTransfer 调色表；上层换更暗调色、mix-blend-mode:plus-lighter、透明度.35，用21.5%起的渐变遮罩只提亮下半；脚本把两路视频误差压在0.12s内。不常见在同源双层调色提亮
  电脑＋手机 · 预览可见 · 来自「Cyber Layer」（只有首屏） · [预览图](../sources/framesbase/items/90e5943a-98cb-4c26-a188-c0f7fd86023f/preview.webp) · [提示词](../sources/framesbase/items/90e5943a-98cb-4c26-a188-c0f7fd86023f/prompt.md)
- **卡片底部粉紫弧形光晕，弧内透出40px细网格**
  做法：::before径向渐变圆心在50% -70%，约15个手调色标由透明→#b03088→粉→白形成弧光；网格层两条1px线性渐变40px平铺，不常见在用同一径向渐变做mask，网格只在弧光里露出
  电脑＋手机 · 预览可见 · 来自「Cybersecurity Hero」（只有首屏） · [预览图](../sources/framesbase/items/9e3b2c64-ce73-4bb3-b6c0-c924158a91f6/preview.webp) · [提示词](../sources/framesbase/items/9e3b2c64-ce73-4bb3-b6c0-c924158a91f6/prompt.md)
- **卡片底部向上拱起粉白光弧，弧内显出细网格**
  做法：::before 用 radial-gradient(circle at 50% -70%)，63%–95% 由透明→品红→白；40px 网格层加同心 radial mask(transparent 60%, black 78%)，只在光弧处露出。不常见在网格只沿光弧出现
  电脑＋手机 · 预览可见 · 来自「Cybersecurity Hero v2」（只有首屏） · [预览图](../sources/framesbase/items/d6fdd0b0-2825-42d1-aedc-a7eff06a8a4b/preview.webp) · [提示词](../sources/framesbase/items/d6fdd0b0-2825-42d1-aedc-a7eff06a8a4b/prompt.md)
- **白色磨砂玻璃卡透出草坡视频，卡面带细颗粒**
  做法：白 55%＋blur(8px) saturate(1.8)、1px 白 50% 内高光；::after 叠 SVG 噪点、透明度 0.06、overlay 混合，玻璃带颗粒，少见；噪点预览看不出
  电脑＋手机 · 预览可见 · 来自「Dashboard UI」（应用界面） · [预览图](../sources/framesbase/items/b4e90f5d-f10b-4017-97d8-402468586570/preview.webp) · [提示词](../sources/framesbase/items/b4e90f5d-f10b-4017-97d8-402468586570/prompt.md)
- **全屏实时着色器：暗色漩涡球体带镜头光晕和微粒**
  做法：用shaders/react叠：StudioBackground打底，Spherize(radius .9, depth 1.1)包住Swirl、LensFlare、FloatingParticles、CursorRipples，最外层FilmGrain .05。不常见在背景是随鼠标起涟漪的实时球体而非视频
  电脑＋手机 · 预览可见 · 来自「Futuristic Cinematic」（只有首屏） · [预览图](../sources/framesbase/items/1d67a09c-c7d9-4322-b765-dcd9f754f577/preview.webp) · [提示词](../sources/framesbase/items/1d67a09c-c7d9-4322-b765-dcd9f754f577/prompt.md)
- **首屏流体视频接进第二屏的另一段流体视频，看不出接缝**
  做法：两段全屏视频上下相接：首屏底部盖 192px 透明到黑渐变，第二屏顶部盖 192px 黑到透明渐变；不常见在接缝藏进纯黑，两段视频读起来像一个连续画面
  电脑 · 预览可见 · 来自「Guardnet」（整页） · [预览图](../sources/framesbase/items/9fe3b9f8-0157-4407-88ee-e3243922ae20/preview.webp) · [提示词](../sources/framesbase/items/9fe3b9f8-0157-4407-88ee-e3243922ae20/prompt.md)
- **彩色玻璃方格视频只留在顶部，向下渐隐成白**
  做法：不常见在把视频 scaleY(-1) 上下翻转，让彩色部分落到页面顶部；再盖一层从 26.4% 透明到 66.9% 纯白的线性渐变，下半屏留给标题和表单
  电脑 · 预览可见 · 来自「HR SaaS Hero」（只有首屏） · [预览图](../sources/framesbase/items/6ebb101d-80f8-43bb-9420-36668de8c75f/preview.webp) · [提示词](../sources/framesbase/items/6ebb101d-80f8-43bb-9420-36668de8c75f/prompt.md)
- **几乎全透明的玻璃胶囊，上下边缘亮、中段边框淡出**
  做法：底色白 1%、blur 4px；::before 加 1.4px 内边距，用 mask-composite 镂空只留边框，填竖向渐变（两端白 45%、中段透明）。不常见在边框上下亮、中间隐
  电脑＋手机 · 预览可见 · 来自「Innovation」（整页） · [预览图](../sources/framesbase/items/54078ffa-0e18-4d8d-a5f2-02a7c89c8f02/preview.webp) · [提示词](../sources/framesbase/items/54078ffa-0e18-4d8d-a5f2-02a7c89c8f02/prompt.md)
- **白底上橙色斜向条纹折射流光，带细颗粒**
  做法：shaders包四层叠：Swirl白灰底、ChromaFlow四向#ff5f03、FlutedGlass(angle 31,frequency 8,refraction 4)、FilmGrain 0.05。不常见在用凹槽玻璃把橙光折成斜条
  电脑＋手机 · 预览可见 · 来自「Modern Agency」（整页） · [预览图](../sources/framesbase/items/e760094c-978e-4f3e-9e3a-11f6d0e83f5a/preview.webp) · [提示词](../sources/framesbase/items/e760094c-978e-4f3e-9e3a-11f6d0e83f5a/prompt.md)
- **导航、公告胶囊、次按钮共用一套极淡液态玻璃，边缘上下亮**
  做法：不常见在渐变描边：底白1%＋blur(4px)＋1px白10%内阴影；::before用padding 1.4px＋mask-composite exclude只留边框，上下两端白45%、中段透明
  电脑 · 预览可见 · 来自「Planet Orbit」（只有首屏） · [预览图](../sources/framesbase/items/e4e1feae-e074-4ce4-ba9c-69a4ef54936e/preview.webp) · [提示词](../sources/framesbase/items/e4e1feae-e074-4ce4-ba9c-69a4ef54936e/prompt.md)
- **导航、徽标、输入框共用上下边更亮的液态玻璃**
  做法：底色白1%＋blur(4px)＋inset 0 1px 1px 白10%；::before 用 padding 1.4px＋mask-composite exclude 做渐变描边，竖向 45%→0→0→45% 白，只有上下边亮、中段透明
  电脑 · 预览可见 · 来自「Railroad.ai」（只有首屏） · [预览图](../sources/framesbase/items/d5755bbb-9872-4f27-a833-83aa4005a66f/preview.webp) · [提示词](../sources/framesbase/items/d5755bbb-9872-4f27-a833-83aa4005a66f/prompt.md)
- **视频只钉在前两屏背后，玻璃卡透出紫色画面**
  做法：不常见在视频只钉前两屏：sticky h-screen视频，内容-mt-[100vh]叠上，第三屏起纯色#0A061A，视频底部40%渐变到底色；玻璃卡blur18加内白光描边
  电脑＋手机 · 预览可见 · 来自「Remote Dev Collective」（整页） · [预览图](../sources/framesbase/items/3571697c-aa44-4764-aac3-44c6b2a1a05a/preview.webp) · [提示词](../sources/framesbase/items/3571697c-aa44-4764-aac3-44c6b2a1a05a/prompt.md)
- **白底卡里视频只占中段，上下渐隐融进白色**
  做法：视频容器从 top 140px 铺到底，叠 linear-gradient(白0%,白20%,透明45%,透明65%,白90%,白100%)；视频不循环，用 rAF 在首尾 0.5s 调透明度后重播。不常见在亮色卡上让视频两头化进白底。
  电脑 · 预览可见 · 来自「Social Media Posts」（单个模块） · [预览图](../sources/framesbase/items/3a971795-411b-48d2-9c19-0e8cedebcca3/preview.webp) · [提示词](../sources/framesbase/items/3a971795-411b-48d2-9c19-0e8cedebcca3/prompt.md)
- **导航、徽标、按钮都是只亮上下边的透明玻璃**
  做法：玻璃底白 1%、模糊 4px；不常见在描边：::before 内边距 1.4px，用 mask-composite:exclude 抠成一圈，填上下 45%、中段透明的白渐变，只亮上下边；按钮模糊50
  电脑 · 预览可见 · 来自「Space Voyage」（只有首屏） · [预览图](../sources/framesbase/items/10084ab3-f346-462d-a061-b0fe274edba4/preview.webp) · [提示词](../sources/framesbase/items/10084ab3-f346-462d-a061-b0fe274edba4/prompt.md)
- **视频上叠细密横向扫描线和噪点，再有一条模糊横条上下扫过**
  做法：不常见在三层叠：半黑条纹渐变 size 100% 4px 做扫描线；SVG 噪点层 overlay 0.15；40px 横条 backdrop blur 2px＋色相偏 5°。抖动和扫动只按提示词
  电脑 · 预览可见 · 来自「Velorah Focus」（单个模块） · [预览图](../sources/framesbase/items/494d237a-9ad3-4042-aeb8-c1d3ce1328f8/preview.webp) · [提示词](../sources/framesbase/items/494d237a-9ad3-4042-aeb8-c1d3ce1328f8/prompt.md)
- **首屏底部一圈颗粒向上飘散，散开处直接变成下一屏深色**
  做法：不常见在区块分界不用直线：颗粒消散视频object-position: bottom贴底，再加32px渐变到#2B3534，下一屏底色同为#2B3534，且与首屏提问框同色，上下呼应
  电脑＋手机 · 预览可见 · 来自「Vitara」（只有首屏） · [预览图](../sources/framesbase/items/fb4a9eeb-b713-4827-b7eb-ab0e9c2c97c9/preview.webp) · [提示词](../sources/framesbase/items/fb4a9eeb-b713-4827-b7eb-ab0e9c2c97c9/prompt.md)
- **背景视频无缝来回循环播放**
  做法：少见在回放法：视频只放一遍，用 requestVideoFrameCallback 把每帧画进离屏 canvas(最宽960px)，结束后隐藏 video，rAF 以30fps正放再倒放，避免循环跳帧
  电脑＋手机 · 仅提示词 · 来自「AI Workflow Hero」（只有首屏） · [预览图](../sources/framesbase/items/28e2a619-ea11-4143-b8a7-8aef4e4de740/preview.webp) · [提示词](../sources/framesbase/items/28e2a619-ea11-4143-b8a7-8aef4e4de740/prompt.md)
- **视频只播一遍，之后在画布上正放倒放无缝循环**
  做法：播放时用 requestVideoFrameCallback 逐帧存进离屏 canvas（宽≤960px）；播完换 canvas 以 30fps 正放倒放循环；容器放大 1.08 倍藏边
  电脑＋手机 · 仅提示词 · 来自「Audio Showcase」（只有首屏） · [预览图](../sources/framesbase/items/f4ded56d-d79f-4724-96cb-513f96b6e1b8/preview.webp) · [提示词](../sources/framesbase/items/f4ded56d-d79f-4724-96cb-513f96b6e1b8/prompt.md)
- **首屏和第二区块共用一段固定视频，内容滚动盖过视频**
  做法：不常见在一段视频衬两屏：外层放 sticky top-0 h-screen 视频，内容层 -mt-[100vh] 拉回覆盖其上；视频底部40%叠透明→黑渐变；第三区块起纯黑底，视频随之退出
  电脑＋手机 · 仅提示词 · 来自「Build Unit」（整页） · [预览图](../sources/framesbase/items/ae3e3baa-1f44-4479-a5d0-320b9f0498dc/preview.webp) · [提示词](../sources/framesbase/items/ae3e3baa-1f44-4479-a5d0-320b9f0498dc/prompt.md)
- **首屏背景视频播完一遍后来回往返循环**
  做法：视频首播时用requestVideoFrameCallback把每帧画进离屏canvas（宽≤960），播完换成可见canvas以30fps正放倒放循环；外层scale(1.08)防边缘露白。不常见在逐帧缓存做往返播放
  电脑＋手机 · 仅提示词 · 来自「Evergreen Finance」（整页） · [预览图](../sources/framesbase/items/2dd33d25-fbda-4705-8061-b14462c47f8b/preview.webp) · [提示词](../sources/framesbase/items/2dd33d25-fbda-4705-8061-b14462c47f8b/prompt.md)
- **区块之间用云雾透明图负边距叠压过渡，并带视差**
  做法：首屏后放云雾 PNG，-mt-96 压回首屏底部，下一屏再 -mt-64 压住云雾，接缝消失；问答区底部云图随滚动 translateY(60-进度×30%)。不常见在用透明图层叠接区块
  电脑 · 仅提示词 · 来自「Golden Portal」（整页） · [预览图](../sources/framesbase/items/b55f8354-2640-4343-ba97-707f20a6eb9d/preview.webp) · [提示词](../sources/framesbase/items/b55f8354-2640-4343-ba97-707f20a6eb9d/prompt.md)
- **视频下半部分渐进模糊，不加暗色渐变**
  做法：不常见在只模糊不压暗：全屏 fixed 层 backdrop-blur-xl，mask 用 to top 渐变 black 0%→transparent 45%，模糊只盖下 45% 并向上渐隐，不压暗
  电脑＋手机 · 仅提示词 · 来自「Portal」（只有首屏） · [预览图](../sources/framesbase/items/6dfac064-364c-42fe-b9f1-db0fcdf4f836/preview.webp) · [提示词](../sources/framesbase/items/6dfac064-364c-42fe-b9f1-db0fcdf4f836/prompt.md)
- **鼠标处圆形柔光区透出第二张图，叠一层随鼠标视差的细网格**
  做法：上层图用离屏 canvas 径向渐变（0–0.4 实心到 1 透明）作 mask，圆心以 0.1 缓动追鼠标，半径 clamp(160,16vw,420)；网格随鼠标视差。不常见在双图聚光揭示
  电脑＋手机 · 仅提示词 · 来自「Synth Mode」（只有首屏） · [预览图](../sources/framesbase/items/38aba76a-a12d-4d8a-a8c1-919c9b030157/preview.webp) · [提示词](../sources/framesbase/items/38aba76a-a12d-4d8a-a8c1-919c9b030157/prompt.md)
- **背景视频循环时先淡到黑再淡回，看不出跳帧**
  做法：不常见在不靠视频自带循环：用 requestAnimationFrame 读 currentTime，结束前 1.5s 开始淡出、前 0.3s 到 0，重播后 1s 内淡回；视频上不加暗色蒙层
  电脑＋手机 · 仅提示词 · 来自「Weblex Dark Hero」（只有首屏） · [预览图](../sources/framesbase/items/a57af091-d9ff-4426-84af-6afba58cc59f/preview.webp) · [提示词](../sources/framesbase/items/a57af091-d9ff-4426-84af-6afba58cc59f/prompt.md)
