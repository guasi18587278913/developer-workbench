# 首屏 · 浅色

共 88 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（11 条）

- **超细巨型标题分两层：Powering在发动机前，the Ship在后**
  做法：不常见在字和产品穿插：首行z-10、次行z-2、发动机z-3夹中间，字重200、clamp(144px,18vw,285px)；滚动时标题上移120px、发动机上移250px成视差，背景色随进度插值
  电脑 · 预览可见 · 来自「AeroCore」（整页） · [预览图](../sources/framesbase/items/94442dc0-b9e6-4b84-90fc-d9c2b1bde990/preview.webp) · [提示词](../sources/framesbase/items/94442dc0-b9e6-4b84-90fc-d9c2b1bde990/prompt.md)
- **三张宠物照底边对齐排一排，爪子搭在绿色色块上，色块里放数据和按钮**
  做法：三图贴底、flex无间隙，中图 flex-[1.265] 更宽更高；少见在宠物爪搭着图内色块，左块98K+头像组、中块深绿标题加橙色胶囊钮、右块4.6星评分；左上商品卡、右上视频卡用clamp定宽
  电脑＋手机 · 预览可见 · 来自「CozyPaws」（只有首屏） · [预览图](../sources/framesbase/items/65452494-e776-4138-869d-1e7e8a041a7e/preview.webp) · [提示词](../sources/framesbase/items/65452494-e776-4138-869d-1e7e8a041a7e/prompt.md)
- **左半文案右半视频，与顶栏、功能行共用一套细线网格**
  做法：顶栏、首屏、功能行同用4fr+4×1fr网格，1px#eaeaea分格，层间夹50px空条；右半视频满格无圆角，悬停交叉淡入第二段视频；主副按钮直角黑实心/黑描边；不常见在全页零圆角、各区严格对齐同一网格
  电脑＋手机 · 预览可见 · 来自「Data Relay」（只有首屏） · [预览图](../sources/framesbase/items/1efb915f-a306-4066-a22d-7058a1567334/preview.webp) · [提示词](../sources/framesbase/items/1efb915f-a306-4066-a22d-7058a1567334/prompt.md)
- **居中两行衬线标题，下方视频里的手机屏上叠一行像素字打字效果**
  做法：衬线标题72px、行高0.85；打字层绝对定位到视频里的手机屏（left 48.5%、bottom 32%），诺基亚像素字；打100ms、删50ms、停2s循环三句。不常见在网页文字与视频画面合成
  电脑 · 预览可见 · 来自「Dot」（只有首屏） · [预览图](../sources/framesbase/items/b974d59a-6517-4cc5-b9b3-f20ff83185d8/preview.webp) · [提示词](../sources/framesbase/items/b974d59a-6517-4cc5-b9b3-f20ff83185d8/prompt.md)
- **照片盒中央的玻璃搜索面板：搜索词、国家切换、三行专家报价**
  做法：照片装进圆角 30 的盒，标题移到盒外左下；盒中放玻璃面板（黑 10%、模糊 17）。不常见在面板自演示：逐字打出 Designer，四档高度间伸缩、结果逐行浮现，用户一碰就接管
  电脑＋手机 · 预览可见 · 来自「Global Talent」（整页） · [预览图](../sources/framesbase/items/8b57d5cc-3d95-46bd-ab8b-2070b21be008/preview.webp) · [提示词](../sources/framesbase/items/8b57d5cc-3d95-46bd-ab8b-2070b21be008/prompt.md)
- **三条标语横条加一张大卡，白缝切开同一张背景照片**
  做法：各卡共用一图：ResizeObserver 算每卡在区块里的 x/y，背景高=区块高，位置 -(x+焦点偏移) -y；卡间 8px 白缝，不常见在一图切多卡。大卡左下 11rem 巨字
  电脑＋手机 · 预览可见 · 来自「Health Portal」（整页） · [预览图](../sources/framesbase/items/01f8d904-c8f5-4e08-b1ac-c4450bcc6b51/preview.webp) · [提示词](../sources/framesbase/items/01f8d904-c8f5-4e08-b1ac-c4450bcc6b51/prompt.md)
- **居中屋檐下垂18列棕色汉字串，左右上角红字**
  做法：屋檐PNG居中，canvas 从其底边挂18×30个字粒，Verlet 物理（重力0.2、阻尼0.99、约束每帧解5次）让字串被鼠标推开摆动、可拖拽；扰动时按列号播C大调拨弦音（三角波+二倍频、低通4000→200Hz）。不常见在字串物理加声音
  电脑＋手机 · 预览可见 · 来自「Ink Dynasty」（只有首屏） · [预览图](../sources/framesbase/items/0982d8a0-c576-45de-afea-97ea584563f4/preview.webp) · [提示词](../sources/framesbase/items/0982d8a0-c576-45de-afea-97ea584563f4/prompt.md)
- **视频上开出转 -15° 的白色椭圆窗，六只香水瓶沿椭圆轨道绕行**
  做法：外层 600vh＋sticky；白层转 -15°，clip-path 椭圆随滚动 0–8% 扩到 55%；瓶子 offset-path 沿椭圆走，近焦点大、远处 0.4 倍；不常见在滚动开窗接产品轨道
  电脑 · 预览可见 · 来自「Luxury Botanical」（整页） · [预览图](../sources/framesbase/items/50a1f0a2-ad46-40b2-9f63-1dee3f63d3d1/preview.webp) · [提示词](../sources/framesbase/items/50a1f0a2-ad46-40b2-9f63-1dee3f63d3d1/prompt.md)
- **海报式首屏：白巨字RJV/09对角分置，四角放编号、链接和N—P线**
  做法：白巨字RJV在左中、09在右下；四行黑标题逐字绝对定位、每行缩进不同；右上两列下划线链接。不常见在光标处圆形聚光灯揭出同机位的黑色发光版机器人（第二张图用跟随鼠标的径向渐变作mask）
  电脑＋手机 · 预览可见 · 来自「NEX Robotics」（只有首屏） · [预览图](../sources/framesbase/items/865f7975-09c2-45f7-8f2a-3d1c597e2fe9/preview.webp) · [提示词](../sources/framesbase/items/865f7975-09c2-45f7-8f2a-3d1c597e2fe9/prompt.md)
- **标题横跨米色与视频分界线，左半黑字右半白字无缝拼接**
  做法：少见在同一标题跨分屏线自动变色：两层同内容叠放，黑字层clip-path:inset(0 50% 0 0)，白字层inset(0 0 0 50%)；850px以下只留白字层
  电脑＋手机 · 预览可见 · 来自「Scenic Travel」（整页） · [预览图](../sources/framesbase/items/360e0f1d-af3a-4b32-843c-71690e95202f/preview.webp) · [提示词](../sources/framesbase/items/360e0f1d-af3a-4b32-843c-71690e95202f/prompt.md)
- **左半白面板放标题、按钮和标志条，右半天空露出云中电脑和玻璃信息卡**
  做法：满幅蓝天上嵌一块 4px 圆角白面板占左半，像在照片上贴一张纸，少见；天空左下压白 20%＋blur 31px 玻璃卡（3×3 菱形点阵图标、等宽大写标题），右下两个 50px 方形玻璃翻页键
  电脑＋手机 · 预览可见 · 来自「Skytrace」（只有首屏） · [预览图](../sources/framesbase/items/c72b86d8-d01f-4ad6-8a52-20790dc55acd/preview.webp) · [提示词](../sources/framesbase/items/c72b86d8-d01f-4ad6-8a52-20790dc55acd/prompt.md)

## 推荐度 4（40 条）

- **螺旋两侧分放标题与说明，底部贴边磨砂信息条**
  做法：左栏眉题+细体约54px四行标题+黑描边胶囊；右栏说明+深灰实心胶囊；底条贴屏幕下沿，#F0F0F0/75、blur-xl、只圆上角且无下边框，内放细体大号01+日期+小标题+段落。少见在抽屉式底部信息条
  电脑＋手机 · 预览可见 · 来自「Adaptive Learning」（只有首屏） · [预览图](../sources/framesbase/items/cf4e46ee-393a-4026-86ed-bba50edf1787/preview.webp) · [提示词](../sources/framesbase/items/cf4e46ee-393a-4026-86ed-bba50edf1787/prompt.md)
- **白底上方居中衬线标题和黑胶囊键，风景视频从下方升起**
  做法：视频不铺满，从top:300px起贴底放，上叠from-background via-transparent to-background渐变，顶部白色和画面自然融合，文字始终落在纯白上；标题Instrument Serif、字距-2.46px，重点词改灰#6F6F6F
  电脑 · 预览可见 · 来自「Aethera Studio」（只有首屏） · [预览图](../sources/framesbase/items/66ea2b32-5fb7-42af-ab93-25a98b0fa800/preview.webp) · [提示词](../sources/framesbase/items/66ea2b32-5fb7-42af-ab93-25a98b0fa800/prompt.md)
- **左标题右说明错位排列，下接通栏手绘飞机，舷窗里排着智能体头像**
  做法：标题40px字距-2px限宽483px，说明绝对定位right:0、top:184px错开；视频宽100%高auto不裁切，紧贴首屏。少见在用舷窗乘客隐喻一队智能体，全页只用#EA580C一个强调色
  电脑＋手机 · 预览可见 · 来自「Agent Crew」（只有首屏） · [预览图](../sources/framesbase/items/04269b90-02f7-4f74-a320-f6b606d69044/preview.webp) · [提示词](../sources/framesbase/items/04269b90-02f7-4f74-a320-f6b606d69044/prompt.md)
- **440px 窄栏：衬线标志、等宽标语、混排大标题、三段自述**
  做法：整栏 max-w-[440px] 居中但文字左对齐，像一封信；44px 无衬线标题里只把 next wave、bold way 换成 PP Mondwest 衬线；标语 font-mono 12–14px；自述直接写起步价
  电脑 · 预览可见 · 来自「AI Designer Portfolio」（整页） · [预览图](../sources/framesbase/items/bc090770-5ea2-4fb2-972b-71917db2133e/preview.webp) · [提示词](../sources/framesbase/items/bc090770-5ea2-4fb2-972b-71917db2133e/prompt.md)
- **四行大写窄衬线标题逐行变淡，下接细竖线和小段说明**
  做法：Imbue 5.4vw、行高0.82；第2行改300细体，第3、4行透明度降到0.9、0.8；标题和说明间放1x220px竖线，40%到透明渐变，入场scaleY从0展开。不常见在逐行降透明度
  电脑＋手机 · 预览可见 · 来自「Angel Shield」（只有首屏） · [预览图](../sources/framesbase/items/afa791e1-5649-4a43-8c0c-adf81d91dde8/preview.webp) · [提示词](../sources/framesbase/items/afa791e1-5649-4a43-8c0c-adf81d91dde8/prompt.md)
- **白色窄高模板字IGLOO压在冰柱后，底部等宽小字说明加跳动箭头**
  做法：三层叠放：背景图、标题z2、抠图冰山z10且不接收点击，冰山顶部遮住字脚；标题36vw、行高0.85、白80%；说明用Courier New 10–12px宽字距；不常见在主体抠图压住标题
  电脑＋手机 · 预览可见 · 来自「Arctic Lab」（只有首屏） · [预览图](../sources/framesbase/items/3e030b8e-2d4c-4739-9b8c-d3c64a979151/preview.webp) · [提示词](../sources/framesbase/items/3e030b8e-2d4c-4739-9b8c-d3c64a979151/prompt.md)
- **四行大标题，首行前嵌渐变图片胶囊，第三行嵌描边播放按钮**
  做法：不常见在标题内嵌元素：首行前放 w-24 h-12 圆角图片胶囊，第三行词后接 border-2 圆角“How do we work”播放按钮；Poppins 常规体 7xl、行高1.08；下方蓝色胶囊按钮配下划线链接
  电脑＋手机 · 预览可见 · 来自「Bionova Biotech」（只有首屏） · [预览图](../sources/framesbase/items/183981b4-0f68-4471-88f5-3d6bf03c4f2b/preview.webp) · [提示词](../sources/framesbase/items/183981b4-0f68-4471-88f5-3d6bf03c4f2b/prompt.md)
- **左侧标题、按钮、头像和星级，右栏一列左右微斜的预约卡**
  做法：右栏卡片复制三份，y 0→-1200 线性循环 40s；卡片按奇偶 ±3° 交替微斜，上下各加 h-40 同底色渐隐遮罩；不常见在用预约日程流当产品证明，代替截图
  电脑＋手机 · 预览可见 · 来自「BookedUp」（只有首屏） · [预览图](../sources/framesbase/items/739098a7-ee0a-4c66-8408-7c42ca27da25/preview.webp) · [提示词](../sources/framesbase/items/739098a7-ee0a-4c66-8408-7c42ca27da25/prompt.md)
- **超大衬线大写词横贯上方，前景石头压在字上**
  做法：四层叠放：底图、可被抹开的中层图、标题z5、前景产品图z10；标题Instrument Serif 16rem行高0.9；最底层48px细网格10%透明随鼠标视差。少见处：标题夹在两张图之间，被前景物压住
  电脑＋手机 · 预览可见 · 来自「Breathstone」（只有首屏） · [预览图](../sources/framesbase/items/bd5d283b-01a7-42e4-a782-c89703890ba2/preview.webp) · [提示词](../sources/framesbase/items/bd5d283b-01a7-42e4-a782-c89703890ba2/prompt.md)
- **巨型渐隐大写标题在漂浮球鞋后方，四周散落小标签**
  做法：舞台rounded-t-[3rem]，像白页面上开的窗口。少见在标题13vw用白到透明的竖向渐变裁切文字，下缘融进鞋图；鞋图加0 40px 60px投影；播放钮是白圆抠出三角露视频
  电脑＋手机 · 预览可见 · 来自「Cloud Kicks」（只有首屏） · [预览图](../sources/framesbase/items/d01b7030-2b17-42e3-87a0-69ae6d8275f1/preview.webp) · [提示词](../sources/framesbase/items/d01b7030-2b17-42e3-87a0-69ae6d8275f1/prompt.md)
- **左文右像：小写大标题逐字打出，右侧人像视频随鼠标横移转动**
  做法：少见在视频不自动播放：鼠标横移量÷窗宽×0.8×时长，换算成currentTime来回拖；窗宽小于1024改为自动播放。标题用打字机钩子每38ms加一字，末尾2px闪烁光标
  电脑＋手机 · 预览可见 · 来自「Contact Cybernetic」（只有首屏） · [预览图](../sources/framesbase/items/5237f4a3-5db6-477c-91a6-ecabf6c52121/preview.webp) · [提示词](../sources/framesbase/items/5237f4a3-5db6-477c-91a6-ecabf6c52121/prompt.md)
- **粗黑大写点号标题，下方绿框二维码卡代替按钮**
  做法：少见在用二维码卡当主行动：#4CAF50 rounded-xl p-1.5 包住二维码(112→160px)，框内底部白色11px“Try Now”；三块延迟0.2/0.45/0.7s上浮
  电脑＋手机 · 预览可见 · 来自「Conversion」（只有首屏） · [预览图](../sources/framesbase/items/87e90531-d3ef-4131-950a-32239fc6ba74/preview.webp) · [提示词](../sources/framesbase/items/87e90531-d3ef-4131-950a-32239fc6ba74/prompt.md)
- **居中细体大标题半句衬线半句无衬线，背后彩色模糊视频**
  做法：不常见在视频不铺满：居中占80%宽高，四边各叠h-24/w-24白到透明渐变，边缘化进白底；标题前半用Kudryashev Display衬线，后半用Space Grotesk，同为细体
  电脑 · 预览可见 · 来自「Creative Designer Portfolio」（只有首屏） · [预览图](../sources/framesbase/items/5b1dec03-7944-4883-9a15-7e2e075ea9c7/preview.webp) · [提示词](../sources/framesbase/items/5b1dec03-7944-4883-9a15-7e2e075ea9c7/prompt.md)
- **居中三行标题首行浅灰，下方四条带图标和转圈进度环的白卡**
  做法：标题首行 zinc-400；四张 380px 宽 white/80 玻璃卡竖排，左图标中文字，右侧 28px 圆环上一段渐变弧 1.4s 匀速转，入场每张晚 150ms。不常见在转圈环让列表像在运行
  电脑 · 预览可见 · 来自「Crypto Wealth」（只有首屏） · [预览图](../sources/framesbase/items/d9c6b9d3-7289-45c5-aa18-fd95290196d6/preview.webp) · [提示词](../sources/framesbase/items/d9c6b9d3-7289-45c5-aa18-fd95290196d6/prompt.md)
- **左下深浅两色三行大写标题，左中斜体“01”，右中“Scroll”**
  做法：标题首行#332023、后两行灰#B0A2A1；左右垂直居中放斜体衬线页码“01”和“Scroll”；右下260px白底圆角小卡放商品图、规格和下划线式“加入购物车”。不常见在首屏直接放可加购的商品小卡
  电脑＋手机 · 预览可见 · 来自「Daisy Shop」（整页） · [预览图](../sources/framesbase/items/7a83723f-8aa3-426f-9edf-9faea823be12/preview.webp) · [提示词](../sources/framesbase/items/7a83723f-8aa3-426f-9edf-9faea823be12/prompt.md)
- **两行白色大字，种植牙图从首行后方升起、压在次行后面**
  做法：少见在字图夹层：首词 z-0，牙齿图 absolute 居中、bottom:-12px、高180%、z-10，次词 z-20，文字前后穿插；底部98%数据和头像组+柠檬黄+2k圆分压人物两侧
  手机 · 预览可见 · 来自「Dental Implant Clinic」（应用界面） · [预览图](../sources/framesbase/items/50270bf4-a940-4e6d-a89a-3fc065bf3555/preview.webp) · [提示词](../sources/framesbase/items/50270bf4-a940-4e6d-a89a-3fc065bf3555/prompt.md)
- **左侧评分胶囊、大标题、卖点、价格行和小卡，右侧两列图片**
  做法：右侧两列各4图复制一份，一列上行一列下行，translateY 30s无限循环，上下各盖h-32背景色渐隐；左列价格和按钮同一行，下接缩略图问答小卡；不常见在两列反向竖向跑马灯
  电脑 · 预览可见 · 来自「E-commerce Website」（整页） · [预览图](../sources/framesbase/items/0ac09789-7e7f-4235-b4f7-59aa044caee8/preview.webp) · [提示词](../sources/framesbase/items/0ac09789-7e7f-4235-b4f7-59aa044caee8/prompt.md)
- **巨型幽灵字压在悬浮岩石后，石上叠三块错位玻璃方块**
  做法：背景字Bebas Neue 30vw，用radial-gradient填色加background-clip:text，两端灰中段透明成幽灵字；中央2×3网格只放三块110px玻璃方块，叠两层内阴影和外发光；左右边线是“线—+—线—+—线”刻度
  电脑＋手机 · 预览可见 · 来自「Eco Intelligence」（只有首屏） · [预览图](../sources/framesbase/items/2239e0a4-2fde-4f57-b7a4-9eb10a4578c3/preview.webp) · [提示词](../sources/framesbase/items/2239e0a4-2fde-4f57-b7a4-9eb10a4578c3/prompt.md)
- **白色留白上一行标题，下方大视频，右下大写文案加胶囊按钮**
  做法：视频区初始下移30vh，标题和文案用mix-blend-mode:difference跨在明暗上；滚动220vh内视频按进度拖帧（阻尼K=0.1）并上推满屏，标题模糊上移淡出；不常见在视频随滚动拖帧而非自动播放
  电脑 · 预览可见 · 来自「Editorial Eyewear」（只有首屏） · [预览图](../sources/framesbase/items/43dfd104-a10a-4abd-a552-0fd927de2e92/preview.webp) · [提示词](../sources/framesbase/items/43dfd104-a10a-4abd-a552-0fd927de2e92/prompt.md)
- **居中两行标题上灰下黑，深色圆角按钮，半调双手铺满背景**
  做法：标题56px字距-0.03em，首行细体#848382、次行medium纯黑；按钮#2F302F圆角xl加0 4px 12px同色阴影；底部左中右三段小字。少见处：背景视频播到8.5秒用onTimeUpdate暂停，定格成静态插画
  电脑＋手机 · 预览可见 · 来自「Inner Quest」（只有首屏） · [预览图](../sources/framesbase/items/4b1fea3c-3ee5-4766-ad37-ee5c842316e0/preview.webp) · [提示词](../sources/framesbase/items/4b1fea3c-3ee5-4766-ad37-ee5c842316e0/prompt.md)
- **四角排布：左上服务列表、右上介绍、左下大标题、右下联创预约卡**
  做法：少见在右下用真人卡代替次按钮：bg-white/15磨砂圆角卡放96×80人像、姓名、等宽小字职位和白色“Book 15-mins call”胶囊；左上斜杠小字服务列表，左下徽标带2px白左边线
  电脑＋手机 · 预览可见 · 来自「Intelligent Operations」（只有首屏） · [预览图](../sources/framesbase/items/f6ce6818-dc07-4cca-b9ab-61453644a2fd/preview.webp) · [提示词](../sources/framesbase/items/f6ce6818-dc07-4cca-b9ab-61453644a2fd/prompt.md)
- **句子式三行标题，前黑后灰，文中嵌描边胶囊眼睛，下接搜索框**
  做法：前几词#1a1a1a、其余#8e8e8e；your和mental间插2px黑边全圆角胶囊(宽16/42/62px)内含黑点当眼睛；下方白底6px圆角搜索条配36px黑圆箭头。少见在把图标当字嵌进标题
  电脑＋手机 · 预览可见 · 来自「IntelligentX」（只有首屏） · [预览图](../sources/framesbase/items/3a7cbf39-10ab-40f1-b865-cf409afb628d/preview.webp) · [提示词](../sources/framesbase/items/3a7cbf39-10ab-40f1-b865-cf409afb628d/prompt.md)
- **居中两行衬线大标题，背后两只点阵网点手伸向中间**
  做法：视频用object-contain，top 50%+translateY(-50%)垂直居中垫在白底标题后，contrast(1.2)；不常见在只播一次就停在末帧、不循环，像一幅静态插画。标题P22 Mackinac 8xl、行高1.1
  电脑 · 预览可见 · 来自「Lending AI Agents」（只有首屏） · [预览图](../sources/framesbase/items/b4c610f0-2332-41ac-a84c-de52645bbca5/preview.webp) · [提示词](../sources/framesbase/items/b4c610f0-2332-41ac-a84c-de52645bbca5/prompt.md)
- **视频铺底，左侧嵌圆角白面板，内含头像、粗细混排标题、波浪线和黑胶囊按钮**
  做法：网格1.02fr:0.72fr，左格白底30px圆角面板，右格只放悬浮登录胶囊和96px白圆箭头钮；标题关键词加粗到800，波浪线入场自绘。少见在首屏装进内嵌面板、视频只露右侧
  电脑＋手机 · 预览可见 · 来自「Mindora」（只有首屏） · [预览图](../sources/framesbase/items/3c6b1c10-2ed3-4f70-8696-17dc413136f4/preview.webp) · [提示词](../sources/framesbase/items/3c6b1c10-2ed3-4f70-8696-17dc413136f4/prompt.md)
- **居中标题第三行转灰，按钮下方一条玻璃高亮槽，下面任务逐行变淡**
  做法：高亮槽固定在顶部(54px 高、白 8% 加模糊、圆角 12px)，任务从下往上流进槽里；槽下各行透明度 0.55/0.36/0.22/0.11/0.04、模糊 0.2→1.1px 递增，像队列渐隐
  电脑 · 预览可见 · 来自「Minimal Workflow SaaS」（只有首屏） · [预览图](../sources/framesbase/items/018266d8-89e5-44c6-8051-3d7bf08eda26/preview.webp) · [提示词](../sources/framesbase/items/018266d8-89e5-44c6-8051-3d7bf08eda26/prompt.md)
- **骨架视频铺底，左列编号＋大标题＋黑按钮，右列标本说明牌**
  做法：右侧 200px 栏仿博物馆展签：等宽粗体物种名、灰字年代、LENGTH/HEIGHT 小标签配数值，下接圆框加号＋VIEW DETAILS；左列标题前加「01＋细线」编号。不常见在展签式数据栏
  电脑＋手机 · 预览可见 · 来自「Neo Museum」（整页） · [预览图](../sources/framesbase/items/7e6f4922-6fcb-4192-a9fb-7d7a1083bfe5/preview.webp) · [提示词](../sources/framesbase/items/7e6f4922-6fcb-4192-a9fb-7d7a1083bfe5/prompt.md)
- **超大黑色品牌字被前景抠图人物遮住，左下三行小号说明**
  做法：h1字号22vw、行高0.75放z-10；整屏透明PNG人物放z-30压住字，视频垫底。少见在三层叠放做出人站在字前；滚动150px后PNG在30px内淡出，标题随进度上移消失
  电脑 · 预览可见 · 来自「Obsidian」（整页） · [预览图](../sources/framesbase/items/ccd32abe-cb7c-4802-a90c-c462821ea69f/preview.webp) · [提示词](../sources/framesbase/items/ccd32abe-cb7c-4802-a90c-c462821ea69f/prompt.md)
- **居中标题和蓝按钮，四角露出半截倾斜的便签、文件夹形任务卡和日程卡**
  做法：外框rounded-[2.5rem]白卡铺20px点阵；四角组件绝对定位、旋转2–15°、被卡边裁掉；文件夹是放大到约450px的Folder图标，里面放任务卡。不常见在图标当异形容器
  电脑＋手机 · 预览可见 · 来自「Prioritize」（只有首屏） · [预览图](../sources/framesbase/items/c334b760-7100-4912-8e36-9c6d26c0bbc4/preview.webp) · [提示词](../sources/framesbase/items/c334b760-7100-4912-8e36-9c6d26c0bbc4/prompt.md)
- **左上超大prmpt字标，右下系列名加80px价格，压在人物上**
  做法：字标、导航、价格、说明全部fixed定位，统一mix-blend-mode:exclusion，白字压到黑衣处自动变色（预览里$符号可见）。价格Inter Tight 80px、字距-0.04em。不常见在全部界面字用反色混合
  电脑＋手机 · 预览可见 · 来自「PROMPT」（整页） · [预览图](../sources/framesbase/items/f3bd46c2-eb66-40f5-ac4c-5b77dc86b259/preview.webp) · [提示词](../sources/framesbase/items/f3bd46c2-eb66-40f5-ac4c-5b77dc86b259/prompt.md)
- **大圆角视频容器，右下角挖出一块浅灰缺口放文档入口**
  做法：不常见在反向圆角缺口：右下块用页面底色 #f0f0f0、rounded-tl-[3.5rem]，上方和左侧各贴 3.5rem SVG 补角，路径 M56 56V0C56 30.93 30.93 56 0 56H56Z；左下放 white/30 玻璃数据卡
  电脑 · 预览可见 · 来自「RIVR DeFi」（整页） · [预览图](../sources/framesbase/items/34844aec-9b9e-4a8c-ab41-3b9b3e5561aa/preview.webp) · [提示词](../sources/framesbase/items/34844aec-9b9e-4a8c-ab41-3b9b3e5561aa/prompt.md)
- **页面留一圈灰边，圆角容器内放视频、标题和看板托盘**
  做法：外层#ededed加p-3，首屏是rounded-3xl裁切容器；产品展示不用截图，而是米色#f5f2ee托盘里三张真实白卡（指标、表单、仪表），被容器底边截断只露上半。少见在用小组件代替产品图
  电脑＋手机 · 预览可见 · 来自「SAAS Software」（只有首屏） · [预览图](../sources/framesbase/items/61b88072-c64a-4045-a305-362c935a408f/preview.webp) · [提示词](../sources/framesbase/items/61b88072-c64a-4045-a305-362c935a408f/prompt.md)
- **六行大写标题后三行缩进，末行青色，切角按钮对齐缩进**
  做法：粗体大写行高0.98，后三行缩进min(238px,28vw)，按钮左边距同值对齐；按钮#15BCDF切两角16px、外发光、尾部22px短线；字号加9.2vh上限防矮屏溢出。不常见在按钮跟随缩进线
  电脑＋手机 · 预览可见 · 来自「Scaling Platform」（只有首屏） · [预览图](../sources/framesbase/items/2d182339-975a-4a63-b5c1-24656e3d9eff/preview.webp) · [提示词](../sources/framesbase/items/2d182339-975a-4a63-b5c1-24656e3d9eff/prompt.md)
- **巨型粗黑标题横贯，抠图汽车压在字上，左下说明右下三个胶囊按钮**
  做法：不常见在三层叠放：底图z-0、标题z-20、透明抠图车z-30盖住字的下半；标题clamp(2.2rem,14vw,17rem)、行高0.9；左下说明带3px竖条，右下两个描边胶囊加一个黑实心胶囊
  电脑＋手机 · 预览可见 · 来自「Silent Velocity」（只有首屏） · [预览图](../sources/framesbase/items/8c7f309b-4df7-4335-9c22-054d07d06dbd/preview.webp) · [提示词](../sources/framesbase/items/8c7f309b-4df7-4335-9c22-054d07d06dbd/prompt.md)
- **居中标题，上方滚动服务标签，下方黑按钮配头像预约胶囊**
  做法：标题82px字距-0.07em，品牌词换Source Serif斜体；上方500px宽服务标签跑马灯两端渐隐；副按钮白底4px浅灰边，左40px头像、右主文案加绿点“Pick a slot”。不常见在副按钮做成真人预约卡
  电脑＋手机 · 预览可见 · 来自「Subscription Agency」（只有首屏） · [预览图](../sources/framesbase/items/eb359734-20eb-4cd2-90f7-c3fa43a04473/preview.webp) · [提示词](../sources/framesbase/items/eb359734-20eb-4cd2-90f7-c3fa43a04473/prompt.md)
- **白底大标题居中，草地视频从下方升起融入白底**
  做法：视频加 pt-[200px] 下移，再叠 top 200px、高 300px 的白→透明遮罩，白底与画面无缝过渡；标题第二行 black→gray-500→gray-400 渐变字；评分徽标是 6×6 描边小方框里放星标
  电脑＋手机 · 预览可见 · 来自「Sync AI」（只有首屏） · [预览图](../sources/framesbase/items/0c662d51-9352-4e48-9711-7196e9af7742/preview.webp) · [提示词](../sources/framesbase/items/0c662d51-9352-4e48-9711-7196e9af7742/prompt.md)
- **Orbitron 三行标题配棋盘格小图，L 形角标框住标题和右下标语**
  做法：不画整框，只用 12×12 的 L 形角标 SVG 标出标题和右下标语块的角；FASHION 后内联错位小方块棋盘 SVG；按钮灰描边，悬停反黑；尺寸全用 clamp 变量。不常见在角标取景框
  电脑＋手机 · 预览可见 · 来自「Synth Mode」（只有首屏） · [预览图](../sources/framesbase/items/38aba76a-a12d-4d8a-a8c1-919c9b030157/preview.webp) · [提示词](../sources/framesbase/items/38aba76a-a12d-4d8a-a8c1-919c9b030157/prompt.md)
- **左侧星级评分、两行大标题和蓝色玻璃按钮，右侧放大的蓝玻璃球**
  做法：不常见在借素材改色：紫色玻璃球webm用mix-blend-screen去黑底，再用hue-rotate(-55deg) saturate(250%)调成品牌蓝，scale-125溢出右栏
  电脑＋手机 · 预览可见 · 来自「Taskly」（只有首屏） · [预览图](../sources/framesbase/items/81191770-444a-4c54-8a71-f4d4e3a4a4e4/preview.webp) · [提示词](../sources/framesbase/items/81191770-444a-4c54-8a71-f4d4e3a4a4e4/prompt.md)
- **红色榜单徽标、两行蓝标题、灰色渐变词套虚线选框、蓝色胶囊按钮**
  做法：builder 一词用 #767676→#D3D3D3 渐变字，外套 SVG 虚线框：右下角比左下角低的不规则四边形，4 角 4 中点小圆，整体转 -0.5°，像设计软件里选中的对象，少见
  电脑＋手机 · 预览可见 · 来自「Terra Geo Map」（只有首屏） · [预览图](../sources/framesbase/items/eff3fa86-6796-400f-a752-a631ff5b6829/preview.webp) · [提示词](../sources/framesbase/items/eff3fa86-6796-400f-a752-a631ff5b6829/prompt.md)
- **标题里嵌三个线性图标，下接说明和带圆形箭头的紫色胶囊钮**
  做法：不常见在标题插图标：Zap、锁、指纹三个24px图标与文字同色#192837，垂直居中再上移2px；主按钮最小宽210px，文字和圆形箭头两端对齐，紫色投影0 4px 24px
  电脑＋手机 · 预览可见 · 来自「VaultShield」（只有首屏） · [预览图](../sources/framesbase/items/58ba480c-6500-4b71-9b09-7cf09621b582/preview.webp) · [提示词](../sources/framesbase/items/58ba480c-6500-4b71-9b09-7cf09621b582/prompt.md)
- **人像挡住底部米白巨字Visuals，左上两行小标题配胶囊按钮**
  做法：底层巨字clamp(180px,28vw,560px)色#F4F1E8、bottom:-40px，被人像挡住下半；顶层第二张图用跟随鼠标的260px径向渐变作遮罩透出。不常见在光标聚光灯显出另一张图
  电脑 · 预览可见 · 来自「Vision Reveal」（只有首屏） · [预览图](../sources/framesbase/items/74a3a1d3-45cc-4eab-87cd-d97aaf489f27/preview.webp) · [提示词](../sources/framesbase/items/74a3a1d3-45cc-4eab-87cd-d97aaf489f27/prompt.md)

## 推荐度 3（37 条）

- 左侧首行渐变大标题加双按钮，右侧会议界面拼贴图 · 电脑＋手机 · 预览可见 · 来自「AI Meeting Notes」（整页） · [目录](../sources/framesbase/items/ef420235-f4cb-446e-b9b6-726cc0c1b4f8/)
- 左打字机字体标志，居中标题副标，底部插画视频 · 电脑＋手机 · 预览可见 · 来自「AI Trip Planner」（只有首屏） · [目录](../sources/framesbase/items/93ece08a-d937-4f0e-ab65-f5e5010cba71/)
- 居中徽标胶囊、两行衬线大标题、说明和白色单按钮 · 电脑 · 预览可见 · 来自「AI Workflow Agents」（只有首屏） · [目录](../sources/framesbase/items/b8c67ef1-42d8-4e4e-9b72-a1955913ffe1/)
- 两行标题，第二行首词 25% 浅灰细体，其余纯黑中粗 · 电脑＋手机 · 预览可见 · 来自「Bio-Digital」（只有首屏） · [目录](../sources/framesbase/items/c6247e69-2677-4a4c-9386-a775b183bacf/)
- 页面四周留白框住圆角视频卡，左下标题末词换衬线斜体 · 电脑＋手机 · 预览可见 · 来自「Build With Us」（只有首屏） · [目录](../sources/framesbase/items/1c65a19b-c091-4f80-8d2a-7700573f1b9b/)
- 右下三行超大大写标题，左下小字说明与它底边对齐，右侧中部排数据 · 电脑＋手机 · 预览可见 · 来自「Creative Studio」（只有首屏） · [目录](../sources/framesbase/items/07a691b2-5ebf-445e-8283-c8d9bbe390e5/)
- 左下三行 Anton 大写标题，右上角斜压一行荧光绿手写体 · 电脑＋手机 · 预览可见 · 来自「Cursor Follow」（只有首屏） · [目录](../sources/framesbase/items/a72cfcac-ef50-46fb-9d31-1a03694f3d53/)
- 居中标题，四角散放地址、播放按钮、头像组和部署数 · 电脑＋手机 · 预览可见 · 来自「EcoVolta」（只有首屏） · [目录](../sources/framesbase/items/20709516-f309-426f-af32-8e42c8e819ac/)
- Cooper衬线大标题，双按钮，底部三张白色图表小卡底端对齐 · 电脑＋手机 · 预览可见 · 来自「Evergreen Finance」（整页） · [目录](../sources/framesbase/items/2dd33d25-fbda-4705-8061-b14462c47f8b/)
- 居中两行黑色标题和灰字说明，下接黑渐变与描边两颗胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「FinFlow」（只有首屏） · [目录](../sources/framesbase/items/6ed918c2-32cc-461a-b199-d82cdf81c66c/)
- 左对齐像素感衬线大标题，下方灰色说明和小文字链接 · 电脑＋手机 · 预览可见 · 来自「FlowMate」（整页） · [目录](../sources/framesbase/items/525a6b21-3883-43b8-8ec8-be44162bd851/)
- 左上标题和说明，右下资讯卡对角摆放，两侧细竖线带“+”号 · 电脑 · 预览可见 · 来自「Glass Orb」（只有首屏） · [目录](../sources/framesbase/items/e399ab56-5fd5-4af6-a247-c4c3d5e7118e/)
- 无衬线标题中嵌一个更大的斜体衬线词，下接说明和评分行 · 电脑 · 预览可见 · 来自「HR SaaS Hero」（只有首屏） · [目录](../sources/framesbase/items/6ebb101d-80f8-43bb-9420-36668de8c75f/)
- 四行大写衬线标题逐行变淡，下接渐隐竖线和小段说明 · 电脑＋手机 · 预览可见 · 来自「Imperial VPN」（只有首屏） · [目录](../sources/framesbase/items/67fbcffc-24d5-4fb7-a562-3195241f82c8/)
- 居中胶囊徽标＋两行黑色大标题＋灰色副文，下接宽输入框代替按钮 · 电脑＋手机 · 预览可见 · 来自「JungleMind」（只有首屏） · [目录](../sources/framesbase/items/4c52f842-44ec-41f2-8901-84ebc2e1a67c/)
- 左侧 Study. Train. Rise. 三行大标题，下接直角搜索框和橙色按钮 · 电脑 · 预览可见 · 来自「Learnly」（只有首屏） · [目录](../sources/framesbase/items/b71d99d2-af9e-47f4-b365-f6bbe407f13e/)
- 左对齐白字标题，上方头像叠成的玻璃徽章，下方玻璃胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Mind-Body Healing」（只有首屏） · [目录](../sources/framesbase/items/b77c95d7-a443-4c8f-b53e-9f8699d3d413/)
- 表情符号串成的细框徽标、深绿两行标题、绿色主按钮和白色次按钮 · 电脑＋手机 · 预览可见 · 来自「Naturecore SaaS」（只有首屏） · [目录](../sources/framesbase/items/bdd48d4b-142a-4742-8e98-9f6d7e3257ba/)
- 左上三行小字标志，左下细体两行标题带圆点，深蓝直角按钮 · 电脑＋手机 · 预览可见 · 来自「Nexa Talent」（只有首屏） · [目录](../sources/framesbase/items/f76dd7d0-10ed-46c8-926c-03924abef4b7/)
- 胶囊徽标、衬线标题一词斜体、灰色说明、黑胶囊加白圆播放键 · 电脑＋手机 · 预览可见 · 来自「Nexora Automation」（只有首屏） · [目录](../sources/framesbase/items/be66f2cf-26ae-4a52-ba65-b9f235529479/)
- 居中两行渐变标题、窄体灰色副标、黑色按钮，底部一行灰色品牌字 · 电脑 · 预览可见 · 来自「Nexus IT Solutions」（只有首屏） · [目录](../sources/framesbase/items/19d7954d-5c2c-47df-b9a3-8f9d50400451/)
- 左文右 3D 物件视频，橙色渐变主按钮配白色次按钮 · 电脑 · 预览可见 · 来自「Nickel Payments」（只有首屏） · [目录](../sources/framesbase/items/20d2a860-b294-4120-8032-2ff0f2e79f41/)
- 左下两行衬线大写标题，下方白胶囊按钮带深灰圆加号 · 电脑＋手机 · 预览可见 · 来自「OYLA」（整页） · [目录](../sources/framesbase/items/2926b160-b146-49bb-b1f8-d92e8d6f5676/)
- 左上公告胶囊和两行细体标题，首屏不放主按钮 · 电脑＋手机 · 预览可见 · 来自「Palomar Labs」（只有首屏） · [目录](../sources/framesbase/items/88473704-8b70-469b-b6c2-eeb1d38aeee9/)
- 左侧垂直居中的衬线大标题加两段小字，右侧像素花视频 · 电脑＋手机 · 预览可见 · 来自「Pixel Muse」（只有首屏） · [目录](../sources/framesbase/items/7b4a9ab1-0269-4a44-b655-85e83d7f1721/)
- 两行粗体标题中间插入闪电、锁、指纹小图标，下方紫色胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Portal」（只有首屏） · [目录](../sources/framesbase/items/52aa2ac9-68ef-4676-b5e4-2ddeee77948e/)
- 产品视频居中，文案缩成左下角窄窄一小块 · 电脑 · 预览可见 · 来自「Prosthetics Hero」（只有首屏） · [目录](../sources/framesbase/items/dbf496e5-bf65-42c9-a64f-c8d5b6845ca6/)
- 白底居中两行标题和黑色按钮，下方通栏视频带，界面卡压在带上 · 电脑＋手机 · 预览可见 · 来自「Quantum Lucid」（只有首屏） · [目录](../sources/framesbase/items/797b2e5f-6dd5-4994-8943-6c2fdc529e2a/)
- 右上灰色衬线斜体副标，左下两行大标题，底部居中滚动提示 · 电脑＋手机 · 预览可见 · 来自「Shipping Infrastructure」（只有首屏） · [目录](../sources/framesbase/items/e939171b-1d5c-4e45-a28e-827658a6b706/)
- 小标签、两行灰黑双色大标题、副标题、灰色和深色两个胶囊钮 · 电脑＋手机 · 预览可见 · 来自「SkyElite Private Jets」（只有首屏） · [目录](../sources/framesbase/items/5481c2f2-6a21-4359-8c11-68f71cdb2857/)
- 左上两行绿色圆润衬线大标题，下接正文和黑胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「SpeakUp Venture Hero」（只有首屏） · [目录](../sources/framesbase/items/61e61f95-79ef-4bea-85d5-f056124799b1/)
- 左下徽点小字、两行细体大标题、黑白双胶囊，右下三个标签胶囊 · 电脑＋手机 · 预览可见 · 来自「Tech-Forward」（只有首屏） · [目录](../sources/framesbase/items/fc025f19-16ff-4675-8d9f-cdec747abcb2/)
- 透明顶栏，居中两行衬线标题、灰色说明和黑色按钮 · 电脑＋手机 · 预览可见 · 来自「TrustFlow」（只有首屏） · [目录](../sources/framesbase/items/c9ddc911-c8ad-4cb2-a386-d541d1116c9a/)
- 左对齐细体大写两行标题，下面宽字距小字，右下圆形箭头钮 · 电脑＋手机 · 预览可见 · 来自「Vectrus Energy」（整页） · [目录](../sources/framesbase/items/60e0c19f-9900-4b7b-bf4f-3ead89515226/)
- 居中两行大标题末词渐变，底部两枚描边商店徽标 · 电脑＋手机 · 预览可见 · 来自「Veloce Finance」（整页） · [目录](../sources/framesbase/items/b0af2960-2168-4c44-a031-ea6e65ceb2f1/)
- 人物居中，左上标题加按钮，右上和右中两组大写数字，底部标志条 · 电脑 · 预览可见 · 来自「xPortfolio Hero」（只有首屏） · [目录](../sources/framesbase/items/9b542609-a6d7-4d4f-89dc-661fc7f590c6/)
- 豪宅视频铺底，左上大标题与黑色直角按钮，右侧灰色说明 · 电脑＋手机 · 预览可见 · 来自「Zenith Realty」（整页） · [目录](../sources/framesbase/items/d5064e77-ffc6-40e4-b54c-a2ff632b8b19/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/hero-*.tsx`（17 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
