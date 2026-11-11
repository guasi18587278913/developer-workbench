# 导航栏

共 121 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（2 条）

- **底部居中黑长条：左橙色房子图标、中 HOME、右两道横线**
  做法：导航放屏幕底部居中，宽280px；点汉堡后长条0.5s收成56px黑方块显示X，上方弹出 max 480px 黑菜单卡，衬线大字链接错开60ms入场，底部电话邮箱和整宽白按钮；不常见在底栏自身变形成关闭键
  电脑＋手机 · 预览可见 · 来自「Investment Gate」（只有首屏） · [预览图](../sources/framesbase/items/1daf8483-ff23-4af5-a9e3-decc5be2d7e5/preview.webp) · [提示词](../sources/framesbase/items/1daf8483-ff23-4af5-a9e3-decc5be2d7e5/prompt.md)
- **顶栏与侧栏按钮连成带凹腰的白色玻璃条，当前项黑底**
  做法：SVG clipPath画连体条，每个按钮一段，段间上下各收8px（r 20、spread 22），白60%加blur(24px)和1px白15%描边；当前项黑底加inset 0 0 12px 2px白50%内发光。少见处：凹腰形状代替分隔线
  电脑 · 预览可见 · 来自「Live Language Classes」（应用界面） · [预览图](../sources/framesbase/items/5a360021-3646-45fd-bfab-119ad064141c/preview.webp) · [提示词](../sources/framesbase/items/5a360021-3646-45fd-bfab-119ad064141c/prompt.md)

## 推荐度 4（39 条）

- **左标志加星号，中间用逗号连成一句的链接，右侧下划线文字**
  做法：中间链接写成“Labs, Studio, Openings, Shop”一句话，逗号作分隔，23px白字；右侧Get in touch只加下划线不做按钮；悬停统一透明度0.6。不常见在用标点代替分隔和按钮
  电脑＋手机 · 预览可见 · 来自「3D Character Studio」（只有首屏） · [预览图](../sources/framesbase/items/9f64e330-7177-41f5-b3ca-94597f00d571/preview.webp) · [提示词](../sources/framesbase/items/9f64e330-7177-41f5-b3ca-94597f00d571/prompt.md)
- **左标志，中间半透明胶囊装菜单键和奶油预约键，右描边按钮**
  做法：三列网格1fr auto 1fr；中间容器黑35%底、模糊26.5px、圆角13、内边距3px，装透明Menu键和奶油实心CTA（圆角11、高46）；右侧同高描边按钮。不常见在菜单入口和主按钮并成一组
  电脑 · 预览可见 · 来自「3D Future Flora」（只有首屏） · [预览图](../sources/framesbase/items/9b0e79ff-3d63-41f4-aeee-b28528db6b32/preview.webp) · [提示词](../sources/framesbase/items/9b0e79ff-3d63-41f4-aeee-b28528db6b32/prompt.md)
- **四个独立深灰渐变小圆角胶囊，银色细边，右侧银白实心按钮**
  做法：每个链接单独成钮：高40px、圆角7px、1px rgba(198,198,198,.55) 边，105° #050505→#4a4a4a 渐变；悬停时斜向白光条从 -120% 扫到 120%(0.6s)。不常见在拉丝金属质感加扫光
  电脑＋手机 · 预览可见 · 来自「Agent Wave」（只有首屏） · [预览图](../sources/framesbase/items/30fd89b1-b165-41d2-bacf-c49f1fc479ab/preview.webp) · [提示词](../sources/framesbase/items/30fd89b1-b165-41d2-bacf-c49f1fc479ab/prompt.md)
- **底部居中白色悬浮胶囊，内含衬线字母 V 和深色按钮**
  做法：导航不放顶部：fixed bottom-6 left-1/2 -translate-x-1/2，白底全圆角 px-8 py-2 多层阴影；只放单字母标志和一个 Start a chat 主按钮，滚动全程可点
  电脑 · 预览可见 · 来自「AI Designer Portfolio」（整页） · [预览图](../sources/framesbase/items/bc090770-5ea2-4fb2-972b-71917db2133e/preview.webp) · [提示词](../sources/framesbase/items/bc090770-5ea2-4fb2-972b-71917db2133e/prompt.md)
- **带01.编号的链接，右侧钱包地址、连接状态和冰蓝会员芯片**
  做法：少见在把账户状态放进顶栏：编号#AFDDFF/80与标签只隔3px；钱包图标、0x71...f4e2、[ CONNECTED ]间隔12px，STATUS:再加20px分成两组；芯片3px圆角
  电脑＋手机 · 预览可见 · 来自「Aurex Finance」（只有首屏） · [预览图](../sources/framesbase/items/a8257415-cb61-444b-b4b3-2f12299d2ada/preview.webp) · [提示词](../sources/framesbase/items/a8257415-cb61-444b-b4b3-2f12299d2ada/prompt.md)
- **Logo居左，五个独立玻璃胶囊居中，白色预约按钮居右**
  做法：每个链接单独成胶囊：白.22底、白.45边、blur(6px)、padding 11px 26px，当前项和CTA实心白。不常见在汉堡变X分两拍：先位移、0.14s后再旋转；全屏菜单从scale(1.12)收回。提示词写了手机菜单
  电脑＋手机 · 预览可见 · 来自「Coastal Estate」（只有首屏） · [预览图](../sources/framesbase/items/3eae252c-682c-4115-958d-f4970123c69d/preview.webp) · [提示词](../sources/framesbase/items/3eae252c-682c-4115-958d-f4970123c69d/prompt.md)
- **顶栏全是胶囊：头像、主题开关、居中会议提醒、视图切换、搜索**
  做法：grid auto auto 1fr auto auto；居中提醒白胶囊：头像、文案、灰底“-5:23”倒计时、关闭键外圈 SVG 进度环（灰轨黑弧），少见；视图切换的选中项白底带投影
  电脑＋手机 · 预览可见 · 来自「Dashboard UI」（应用界面） · [预览图](../sources/framesbase/items/b4e90f5d-f10b-4017-97d8-402468586570/preview.webp) · [提示词](../sources/framesbase/items/b4e90f5d-f10b-4017-97d8-402468586570/prompt.md)
- **右侧四个等宽格子，最后一格是满格蓝色预约按钮**
  做法：链接不按间距排，各占一格居中、竖线分隔，悬停整格3.5%黑底；CTA填满整格#2340ff，悬停亮度1.08加蓝色投影；不常见在把顶栏做成表格单元。≤900px去两项，≤640px收成汉堡
  电脑＋手机 · 预览可见 · 来自「Data Relay」（只有首屏） · [预览图](../sources/framesbase/items/1efb915f-a306-4066-a22d-7058a1567334/preview.webp) · [提示词](../sources/framesbase/items/1efb915f-a306-4066-a22d-7058a1567334/prompt.md)
- **首屏卡片底部居中的白色玻璃胶囊导航**
  做法：导航不放顶部，绝对定位在首屏卡底边上方 40px 居中：bg-white/90 backdrop-blur-2xl 全圆角、阴影 0 12px 40px 8%；左圆形标志、中两个灰字链接、右侧带箭头的白描边胶囊
  电脑 · 预览可见 · 来自「Digital Epoch」（只有首屏） · [预览图](../sources/framesbase/items/e3914165-8dc8-4a66-81e1-4394c6dbd3a4/preview.webp) · [提示词](../sources/framesbase/items/e3914165-8dc8-4a66-81e1-4394c6dbd3a4/prompt.md)
- **左logo视频，中间大写标语，五项竖排导航，右购物车登录**
  做法：整条顶栏透明、difference混合叠在视频上；滚动时导航从下往上逐项模糊上移消失，SHOP原位变成MENU，收成一个入口；不常见在竖排菜单按顺序收拢成一个词
  电脑 · 预览可见 · 来自「Editorial Eyewear」（只有首屏） · [预览图](../sources/framesbase/items/43dfd104-a10a-4abd-a552-0fd927de2e92/preview.webp) · [提示词](../sources/framesbase/items/43dfd104-a10a-4abd-a552-0fd927de2e92/prompt.md)
- **左白色标志，中间三组上下两行的链接，右侧票券形购物图标带数字**
  做法：链接不排成一行，而是三列各叠两条，列间距64px，这是少见处；右侧用扇贝边票券 SVG（27×30）当购物车，数字“0”叠在正中；左右内边距36px、上32px
  电脑 · 预览可见 · 来自「Framelix 3D Studios」（整页） · [预览图](../sources/framesbase/items/49faf7a1-62f5-4e48-8a07-5e907d3525bf/preview.webp) · [提示词](../sources/framesbase/items/49faf7a1-62f5-4e48-8a07-5e907d3525bf/prompt.md)
- **顶栏分四等宽列，每列竖排两三行红色小字**
  做法：logo、两组链接、购物车各占flex:1一列，列内文字竖排gap 8px、14px，整栏高58px固定顶部24px。不常见在把导航做成分组堆叠的文字目录；预览可见列间细竖线，提示词未写
  电脑＋手机 · 预览可见 · 来自「Futuristic Eyewear」（只有首屏） · [预览图](../sources/framesbase/items/06039526-78c5-43fc-b62a-e0a8736456bc/preview.webp) · [提示词](../sources/framesbase/items/06039526-78c5-43fc-b62a-e0a8736456bc/prompt.md)
- **居中玻璃胶囊，标志放在四个大写链接正中**
  做法：链接左右各两个、标志居中；玻璃近全透（白 1%＋blur 4px），::before 做 1.4px 渐变描边，上下亮中间透明，不常见在这种上下亮边；链接大写 tracking 0.2em
  电脑 · 预览可见 · 来自「Golden Portal」（整页） · [预览图](../sources/framesbase/items/b55f8354-2640-4343-ba97-707f20a6eb9d/preview.webp) · [提示词](../sources/framesbase/items/b55f8354-2640-4343-ba97-707f20a6eb9d/prompt.md)
- **底部居中玻璃程序坞，五个圆角图标，中间一道竖分隔线**
  做法：坞距底64px，白10%底、白20%描边、blur5、圆角24；图标48px圆角28%，悬停回弹放大1.12，上方白胶囊提示加8px三角；不常见在用竖线把站内页(About/Notes)和社交外链分开
  电脑 · 预览可见 · 来自「Interactive Portfolio」（只有首屏） · [预览图](../sources/framesbase/items/f410a716-3e14-42a5-9f44-cb7beae24866/preview.webp) · [提示词](../sources/framesbase/items/f410a716-3e14-42a5-9f44-cb7beae24866/prompt.md)
- **左头像胶囊接一条灰白两段滚动字条，右侧三个灰色下划线链接**
  做法：头像胶囊38px高白10%玻璃底；旁边270px字条两端24px黑色渐隐，白字接白30%字；不常见在字条不走定时器，位移绑定卡环转角(×-1.35)，拖卡时字条同步滚
  电脑 · 预览可见 · 来自「Lead Funnel」（只有首屏） · [预览图](../sources/framesbase/items/5dc36f48-4cf0-4ea5-98bf-d7bdebc18006/preview.webp) · [提示词](../sources/framesbase/items/5dc36f48-4cf0-4ea5-98bf-d7bdebc18006/prompt.md)
- **顶部公告条加等宽字导航，四个产品项是带编号的灰方块**
  做法：全大写11px宽字距，产品项无圆角#6C757E/60底，后缀10px白40%编号01–04；页面滚过10px公告条上移收起，导航从top 33px滑到0。少见处：编号方块把产品线排成目录
  电脑＋手机 · 预览可见 · 来自「Model Infrastructure」（只有首屏） · [预览图](../sources/framesbase/items/20f8dc59-34e8-4c42-b7ee-7351585f3353/preview.webp) · [提示词](../sources/framesbase/items/20f8dc59-34e8-4c42-b7ee-7351585f3353/prompt.md)
- **整条白色胶囊导航，右侧有接单状态、伦敦时间和黑按钮**
  做法：白底rounded-full内边距5px；右侧放“Q1接单中”、时钟图标加实时时间、黑色主按钮。手机菜单是从底部滑上的白色圆角面板，不常见在用底部抽屉代替全屏菜单。抽屉只在提示词里
  电脑＋手机 · 预览可见 · 来自「Modern Agency」（整页） · [预览图](../sources/framesbase/items/e760094c-978e-4f3e-9e3a-11f6d0e83f5a/preview.webp) · [提示词](../sources/framesbase/items/e760094c-978e-4f3e-9e3a-11f6d0e83f5a/prompt.md)
- **三栏等宽小字代替横排链接：馆名、一句宣言、竖排链接**
  做法：三栏：左 15% 馆名分三行、中 30% 宣言、右 15% 竖排五链接，栏间细箭头；全用 10–11px 等宽大写、字距 0.2em。不常见在把导航写成说明文字块。满宽 SVG 字标预览未拍到
  电脑＋手机 · 预览可见 · 来自「Neo Museum」（整页） · [预览图](../sources/framesbase/items/7e6f4922-6fcb-4192-a9fb-7d7a1083bfe5/preview.webp) · [提示词](../sources/framesbase/items/7e6f4922-6fcb-4192-a9fb-7d7a1083bfe5/prompt.md)
- **左侧玻璃字标胶囊加方形汉堡键，右侧白色下载胶囊**
  做法：菜单键是 48px 玻璃方块，点开宽度弹簧展开到 290px（stiffness 350、damping 28），汉堡缩成 36px 内嵌键，链接淡入；手机端字标胶囊收成宽 0（展开态只在提示词里）
  电脑＋手机 · 预览可见 · 来自「Neon Logic」（整页） · [预览图](../sources/framesbase/items/9885c972-ba86-4d5c-b2e1-9287a8a61218/preview.webp) · [提示词](../sources/framesbase/items/9885c972-ba86-4d5c-b2e1-9287a8a61218/prompt.md)
- **左上标志胶囊加方形汉堡胶囊，右上白色下载胶囊**
  做法：汉堡键是48px方胶囊，点开后宽度0.35s展到290px，链接从右滑入排在胶囊内，不弹下拉；手机端展开时标志胶囊宽度收到0让位；胶囊白15%加12px模糊、圆角14px
  电脑＋手机 · 预览可见 · 来自「Neural Interface」（整页） · [预览图](../sources/framesbase/items/0c4c0ad2-ff02-4422-b1a4-f72d7ac5d9a6/preview.webp) · [提示词](../sources/framesbase/items/0c4c0ad2-ff02-4422-b1a4-f72d7ac5d9a6/prompt.md)
- **三栏顶栏：左链接、中 NOVA、右搜索菜单，栏下细横线分段断开**
  做法：flex items-stretch h-16 三栏；栏间是上下各内缩 12px 的 1px 灰竖线，每栏下方单独一条 1px 横线，logo 下拆两段留 16px 缺口。不常见在底线按栏断开而非整条通栏。
  电脑＋手机 · 预览可见 · 来自「NOVA Space Systems」（整页） · [预览图](../sources/framesbase/items/72bc83ea-aefe-4efa-aa60-7e9627151c85/preview.webp) · [提示词](../sources/framesbase/items/72bc83ea-aefe-4efa-aa60-7e9627151c85/prompt.md)
- **四栏杂志式顶栏：品牌、卷号、副题、长短不一的三线汉堡**
  做法：顶栏mix-blend-difference，白字在亮暗底上自动反色；10px大写，第二行降50%透明。菜单clip-path从上拉幕，大字链接80ms错峰上滑。少见在反色顶栏；菜单只按提示词写
  电脑 · 预览可见 · 来自「Obsidian」（整页） · [预览图](../sources/framesbase/items/ccd32abe-cb7c-4802-a90c-c462821ea69f/preview.webp) · [提示词](../sources/framesbase/items/ccd32abe-cb7c-4802-a90c-c462821ea69f/prompt.md)
- **左品牌＋实时时钟、中三项、右两项，全是独立白底小方块**
  做法：少见在不做横栏：每项是实心白块（18px字、内边距10/14px、圆角3px），三组各gap 6px贴边，左侧放每秒刷新的时钟块；≤1024px只留品牌和Menu，点开为模糊全屏层
  电脑＋手机 · 预览可见 · 来自「Outdoor Apparel」（整页） · [预览图](../sources/framesbase/items/e5608f6e-32c7-46e0-984c-b44ed2296b0b/preview.webp) · [提示词](../sources/framesbase/items/e5608f6e-32c7-46e0-984c-b44ed2296b0b/prompt.md)
- **四等分列，每列两三行小字堆叠，列间1px淡竖线**
  做法：顶栏fixed、高58px，四列flex:1 1 0，第2–4列左边框1px rgba(255,255,255,.1)、内边距0 24px，14px字、字距-0.03em，整栏mix-blend-mode:difference。不常见在用堆叠短语代替单行链接，像杂志页眉
  电脑＋手机 · 预览可见 · 来自「Performance Eyewear」（只有首屏） · [预览图](../sources/framesbase/items/d3a1aac5-6a48-4957-ae8a-80777da6b935/preview.webp) · [提示词](../sources/framesbase/items/d3a1aac5-6a48-4957-ae8a-80777da6b935/prompt.md)
- **从顶边垂下的黑色小块，五个奶油色小字链接**
  做法：不做整条横栏：黑块只圆下角 rounded-b-3xl，px-8 py-2，绝对定位贴顶居中，像从屏幕顶边挂下的标签，不常见在这种吊挂形；链接奶油色 80% 透明，gap-12
  电脑＋手机 · 预览可见 · 来自「Prisma Creative Studio」（整页） · [预览图](../sources/framesbase/items/08d773cd-ac28-492f-8116-9d3abb0478b1/preview.webp) · [提示词](../sources/framesbase/items/08d773cd-ac28-492f-8116-9d3abb0478b1/prompt.md)
- **左标志，中间玻璃链接胶囊，右侧玻璃托盘装登录和浅色按钮**
  做法：右侧外层 52px 高玻璃托盘（黑 35%、blur 17px、p-[3px]、圆角 13px），内嵌两个 46px 高圆角 11px 按钮，间距 5px，不常见在托盘嵌套；中间链接胶囊同高
  电脑＋手机 · 预览可见 · 来自「Quantum Core」（只有首屏） · [预览图](../sources/framesbase/items/63032715-18a2-4424-a7f9-3474d004b3a1/preview.webp) · [提示词](../sources/framesbase/items/63032715-18a2-4424-a7f9-3474d004b3a1/prompt.md)
- **顶部 Safari 胶囊地址栏，窗口外左侧竖排五图标玻璃轨道**
  做法：不常见在侧栏放窗口外：网格列 gutter 1fr gutter 镜像居中，左槽放竖排轨道；≤1130px 改为底部居中悬浮玻璃坞 blur(38px) saturate(1.45)；窗内顶栏是胶囊分类标签
  电脑＋手机 · 预览可见 · 来自「Reading Library」（应用界面） · [预览图](../sources/framesbase/items/226a0cf0-7336-4461-8496-ecd58088e1f4/preview.webp) · [提示词](../sources/framesbase/items/226a0cf0-7336-4461-8496-ecd58088e1f4/prompt.md)
- **左商标加星号，中间链接用逗号连成一句，右侧下划线文字链接**
  做法：中间链接写成 Labs, Studio, Openings, Shop 一行句子，23px 黑字、逗号分隔，不做按钮；右侧 Get in touch 只加下划线；悬停统一降到 60% 透明
  电脑＋手机 · 预览可见 · 来自「Retro-Futurist」（只有首屏） · [预览图](../sources/framesbase/items/e82e527e-8739-4341-ad66-6fc642094dd6/preview.webp) · [提示词](../sources/framesbase/items/e82e527e-8739-4341-ad66-6fc642094dd6/prompt.md)
- **顶部三块独立白胶囊：标志、链接组、两颗黑色商店方钮**
  做法：三块rounded-20px白胶囊，阴影0 8px 20px rgba(5,8,12,.1)；不常见在滚动超50px时间距0→12px、由两端分布收拢到居中，0.45s。商店钮52×52圆角14。滚动效果只在提示词
  电脑＋手机 · 预览可见 · 来自「Routine Coach」（整页） · [预览图](../sources/framesbase/items/047e2722-0876-4803-8529-41425ac10c0b/preview.webp) · [提示词](../sources/framesbase/items/047e2722-0876-4803-8529-41425ac10c0b/prompt.md)
- **左下角竖排小字导航，当前页前加斜杠，左上只留星形标志**
  做法：少见在不做顶栏：链接竖排固定在左下40px处，13px、tracking-widest；当前页前缀“/”代替下划线；右上汉堡展开为从上滑下的白色全屏菜单
  电脑＋手机 · 预览可见 · 来自「Scenic Travel」（整页） · [预览图](../sources/framesbase/items/360e0f1d-af3a-4b32-843c-71690e95202f/preview.webp) · [提示词](../sources/framesbase/items/360e0f1d-af3a-4b32-843c-71690e95202f/prompt.md)
- **顶栏拆两段：左白色实心条放图标和字标，右玻璃条放链接和白按钮**
  做法：左条与下方白面板同宽、右条与天空同宽，顶栏顺着两栏分格，少见；右条白 10%＋blur 19.55px，链接白 84% 14px 粗体；登录键白底 2px 圆角；两条间留约 10px 缝露出天空
  电脑＋手机 · 预览可见 · 来自「Skytrace」（只有首屏） · [预览图](../sources/framesbase/items/c72b86d8-d01f-4ad6-8a52-20790dc55acd/preview.webp) · [提示词](../sources/framesbase/items/c72b86d8-d01f-4ad6-8a52-20790dc55acd/prompt.md)
- **从白色外框顶边垂下的白底导航条，两侧是反向圆角**
  做法：整页套在p-5、圆角36px的白框里；导航绝对定位顶部居中，白底只圆下两角28px；左右各放一个span用radial-gradient遮罩（透明24px）做反向圆角，和外框白边连成一体，像从边框长出的吊牌
  电脑＋手机 · 预览可见 · 来自「Stellar Launch」（整页） · [预览图](../sources/framesbase/items/c480ad28-0836-4f62-a79e-5c1760a2531b/preview.webp) · [提示词](../sources/framesbase/items/c480ad28-0836-4f62-a79e-5c1760a2531b/prompt.md)
- **居中悬浮的四个浅灰胶囊链接装在黑色长胶囊里，左侧黑色圆形标志**
  做法：黑容器圆角50px内边距4px，胶囊#f0f0f0底、大写14px。不常见在悬停：底部升起按宽高算半径的黑圆，放大3倍盖满，黑字上滑移出、白字从下滑入，0.3s；手机端换汉堡
  电脑＋手机 · 预览可见 · 来自「Urban Jungle」（只有首屏） · [预览图](../sources/framesbase/items/0191170f-7b80-4f99-9d73-d504767b62fa/preview.webp) · [提示词](../sources/framesbase/items/0191170f-7b80-4f99-9d73-d504767b62fa/prompt.md)
- **手机端全屏菜单，从汉堡键位置圆形扩散展开**
  做法：白色全屏层用clip-path圆形从右上汉堡键处由0%扩到150%，500ms、cubic-bezier(0.76,0,0.24,1)；两横线转X；链接3xl粗体按150+i×60ms错开上滑
  电脑＋手机 · 仅提示词 · 来自「Cloud Kicks」（只有首屏） · [预览图](../sources/framesbase/items/d01b7030-2b17-42e3-87a0-69ae6d8275f1/preview.webp) · [提示词](../sources/framesbase/items/d01b7030-2b17-42e3-87a0-69ae6d8275f1/prompt.md)
- **白色全屏菜单从左上菜单键处圆形扩散，五个超大细体链接配箭头**
  做法：clipPath 从 circle(0% at 80px 40px) 扩到 150%，0.7s、ease [0.76,0,0.24,1]；链接 x:-60 逐个滑入。不常见在圆形揭幕起点对准菜单键
  电脑＋手机 · 仅提示词 · 来自「EVR Ventures」（只有首屏） · [预览图](../sources/framesbase/items/c1a28e23-4473-4bc4-b201-20359862f5a2/preview.webp) · [提示词](../sources/framesbase/items/c1a28e23-4473-4bc4-b201-20359862f5a2/prompt.md)
- **手机端全屏菜单：不对称汉堡键，链接从遮罩里逐个升起**
  做法：少见在汉堡键下横线仅70%宽、悬停补满再转X；每个li设overflow:hidden，链接从translateY(115%)升起，仅打开时错开0.12–0.30s，关闭时一起收起
  电脑＋手机 · 仅提示词 · 来自「JungleMind」（只有首屏） · [预览图](../sources/framesbase/items/4c52f842-44ec-41f2-8901-84ebc2e1a67c/preview.webp) · [提示词](../sources/framesbase/items/4c52f842-44ec-41f2-8901-84ebc2e1a67c/prompt.md)
- **右上白色圆形菜单键，展开成全屏散落的倾斜胶囊**
  做法：50px 圆键两条线（短线 14px，悬停补齐 20px）；展开为黑 70% 模糊遮罩，胶囊链接各转 ±8°，GSAP back.out(1.5) 从 0 放大、错开 0.12s，悬停转正并换各自颜色。不常见在胶囊倾斜散落。
  电脑 · 仅提示词 · 来自「Nike Premium Landing」（只有首屏） · [预览图](../sources/framesbase/items/562a4221-9e7b-4920-a1d9-30ef9d92a324/preview.webp) · [提示词](../sources/framesbase/items/562a4221-9e7b-4920-a1d9-30ef9d92a324/prompt.md)
- **手机菜单从汉堡键位置圆形展开成全屏**
  做法：遮罩clip-path从circle(3% at 右上汉堡中心)过渡到circle(150%)，0.7s cubic-bezier(.16,1,.3,1)；背景94%近黑加blur 28px；链接按180ms+序号×70ms错开上浮16px
  电脑＋手机 · 仅提示词 · 来自「Signal ID」（只有首屏） · [预览图](../sources/framesbase/items/a46d9236-ab5c-4ed2-9304-9f4464ccf1c6/preview.webp) · [提示词](../sources/framesbase/items/a46d9236-ab5c-4ed2-9304-9f4464ccf1c6/prompt.md)
- **右侧滑出菜单，多层色块先后扫入，按钮文字滚动切换**
  做法：色层 #1a1a1a、#93c5fd 从 100vw 依次滑入（power4.out，错开 0.07s），主面板 0.65s 跟进；加号转 225° 成 X；菜单项从 10° 转正逐个进场。不常见在 MENU/CLOSE 像老虎机滚三轮才停。
  电脑 · 仅提示词 · 来自「Yacht Club」（只有首屏） · [预览图](../sources/framesbase/items/7cb83158-1003-451e-badc-8975b0ef715e/preview.webp) · [提示词](../sources/framesbase/items/7cb83158-1003-451e-badc-8975b0ef715e/prompt.md)

## 推荐度 3（80 条）

- 左斜体字标，居中玻璃胶囊链接组，右侧单独玻璃 menu 按钮 · 电脑 · 预览可见 · 来自「3D Bloom Layer」（只有首屏） · [目录](../sources/framesbase/items/054b79f3-4db6-42bb-b8b3-4cd6f69c30a5/)
- 左标志、中间六个链接、右侧绿青渐变登录胶囊 · 电脑＋手机 · 预览可见 · 来自「404 Planet」（只有首屏） · [目录](../sources/framesbase/items/13b6f518-e697-4667-8179-ea595413950e/)
- 左侧字标旁跟汉堡Menu，右侧只有搜索和用户图标 · 电脑＋手机 · 预览可见 · 来自「Adaptive Learning」（只有首屏） · [目录](../sources/framesbase/items/cf4e46ee-393a-4026-86ed-bba50edf1787/)
- 下滑后变成白色悬浮长胶囊，按钮转黑；上滑时整条收起 · 电脑 · 预览可见 · 来自「AeroCore」（整页） · [目录](../sources/framesbase/items/94442dc0-b9e6-4b84-90fc-d9c2b1bde990/)
- 左侧玻璃圆形斜体字母标，中间玻璃胶囊装五链接和白按钮 · 电脑 · 预览可见 · 来自「Aetheris Voyage」（只有首屏） · [目录](../sources/framesbase/items/84bd9153-ffa5-4b42-a128-a85ec5ab07e9/)
- 右上一组玻璃胶囊链接，旁边单独一颗深色 Get started 胶囊 · 电脑＋手机 · 预览可见 · 来自「Agent Grove」（只有首屏） · [目录](../sources/framesbase/items/8c75d3c1-6777-41fe-b16e-82b705e7dba5/)
- 标志、导航、菜单、登录各成一块半透明圆角小块 · 电脑 · 预览可见 · 来自「AI Driving Assistant」（只有首屏） · [目录](../sources/framesbase/items/87b66c91-59d2-4d92-a49c-ec8bd1efc877/)
- 顶部居中深色玻璃小条，左端方形星号图标加四个链接 · 电脑 · 预览可见 · 来自「AI Interface」（整页） · [目录](../sources/framesbase/items/2e0b73b0-7b5b-47ff-aa35-24423fc48f9f/)
- 白圆标志、白色链接胶囊、深灰登录胶囊三块分立，当前项下有三个小点 · 电脑＋手机 · 预览可见 · 来自「AI Runtime」（只有首屏） · [目录](../sources/framesbase/items/c02f682a-c2e4-4945-94d1-86269919c41f/)
- 中间白色半透明胶囊装三个链接和深绿按钮，右侧图标链接 · 电脑＋手机 · 预览可见 · 来自「AI Workflow Hero」（只有首屏） · [目录](../sources/framesbase/items/28e2a619-ea11-4143-b8a7-8aef4e4de740/)
- 左三个大写小链接、中间宽字距字标、右两图标；左侧竖排四张圆角缩略图 · 电脑＋手机 · 预览可见 · 来自「Arctic Lab」（只有首屏） · [目录](../sources/framesbase/items/3e030b8e-2d4c-4739-9b8c-d3c64a979151/)
- 中间深色玻璃胶囊里放“菜单”和米色实心按钮，右侧描边按钮 · 电脑＋手机 · 预览可见 · 来自「Ascera AI」（只有首屏） · [目录](../sources/framesbase/items/809189f2-a6b3-4e2e-a4a6-1da16fb57d1e/)
- 左右各一组深蓝细边胶囊，左为链接组，右为按钮和圆形图标 · 电脑＋手机 · 预览可见 · 来自「Augmented Sight」（只有首屏） · [目录](../sources/framesbase/items/e80151c8-1e62-482a-b463-441d363cf76d/)
- 标志后接黑色 Menu 胶囊和灰色信息胶囊，右侧灰胶囊嵌黑圆图标 · 电脑＋手机 · 预览可见 · 来自「Bio-Digital」（只有首屏） · [目录](../sources/framesbase/items/c6247e69-2677-4a4c-9386-a775b183bacf/)
- 左地区选择，中间标志被两组下拉菜单夹住，右侧EN/繁切换 · 电脑＋手机 · 预览可见 · 来自「Cinematic Landing Page」（整页） · [目录](../sources/framesbase/items/af51429c-9eb9-4cbe-82bd-758824901784/)
- 居中深色半透明圆角条，左侧方形星号按钮，后接四个链接 · 电脑 · 预览可见 · 来自「Cosmos Interface」（整页） · [目录](../sources/framesbase/items/90b6c742-7e69-4d6d-88a5-8bdbab057e86/)
- 左标志、中间五个文字链接，右侧搜索、收藏、购物车圆钮和头像 · 电脑＋手机 · 预览可见 · 来自「CozyPaws」（只有首屏） · [目录](../sources/framesbase/items/65452494-e776-4138-869d-1e7e8a041a7e/)
- 当前页白底实心胶囊，其余白描边胶囊，右侧两个图标加描边预约按钮 · 电脑 · 预览可见 · 来自「Creative Agency」（只有首屏） · [目录](../sources/framesbase/items/6801fabf-6176-4ddc-8dae-b79aab1c93e8/)
- 左侧小写名字字标，右侧一个实心黑圆点 · 电脑 · 预览可见 · 来自「Creative Designer Portfolio」（只有首屏） · [目录](../sources/framesbase/items/5b1dec03-7944-4883-9a15-7e2e075ea9c7/)
- 左描边胶囊 MENU，居中宽字距字标，右青色胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Creative Matter」（只有首屏） · [目录](../sources/framesbase/items/1322193f-9344-4844-a511-e488e071e33c/)
- 左侧带小号序号的链接，右侧邮箱和实时时钟 · 电脑＋手机 · 预览可见 · 来自「Creative Portfolio」（只有首屏） · [目录](../sources/framesbase/items/51e3c173-3df0-4e72-9c25-db0b2baaee6c/)
- 左几何标志，正中两条细线的汉堡键，右侧黑色胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Custom Spaces」（只有首屏） · [目录](../sources/framesbase/items/b7e26fe4-e086-4dfb-885f-f2d5e8389a1e/)
- 顶部居中黑色半透明胶囊，内含标志、链接和白色按钮 · 电脑＋手机 · 预览可见 · 来自「Cyberpunk Reveal」（只有首屏） · [目录](../sources/framesbase/items/4e489328-cb73-462a-9950-becca04bc807/)
- 左logo加四链接、当前项短下划线，右侧时区面板和白色注册钮 · 电脑＋手机 · 预览可见 · 来自「Data Signal」（只有首屏） · [目录](../sources/framesbase/items/9e0b6ca4-6ef2-4123-8d05-c7cd18bca67a/)
- 居中深色玻璃小条，左端方形标志块后接四个链接 · 电脑 · 预览可见 · 来自「Deep Neural Interface」（整页） · [目录](../sources/framesbase/items/c03fa2d8-a856-4994-98c7-c4dac8ce3ca6/)
- 左字标，中间玻璃胶囊导航带当前项底色，右玻璃登录加白色主按钮 · 电脑＋手机 · 预览可见 · 来自「Equilibrium」（只有首屏） · [目录](../sources/framesbase/items/13285902-2e23-4eee-84f6-9f0e7685e8a9/)
- 左侧一列透明圆形图标，当前项为白色实心圆 · 电脑＋手机 · 预览可见 · 来自「Finance Assistant」（应用界面） · [目录](../sources/framesbase/items/0f8cffb7-98f8-4074-8df8-1737c42cc14d/)
- 居中玻璃胶囊导航，当前项白底黑字，右侧头像胶囊和白色按钮 · 电脑＋手机 · 预览可见 · 来自「Financial Suite」（只有首屏） · [目录](../sources/framesbase/items/de7f455a-69f9-4620-8d0a-69607ec70084/)
- 左侧白色窄栏，52px圆形图标钮，选中项橄榄绿实心 · 电脑＋手机 · 预览可见 · 来自「Fitness Dashboard」（应用界面） · [目录](../sources/framesbase/items/69f0c062-7a17-4737-91f1-56c18f595195/)
- 顶部居中液态玻璃胶囊装五个链接，右侧白色按钮 · 电脑＋手机 · 预览可见 · 来自「Futuristic Cinematic」（只有首屏） · [目录](../sources/framesbase/items/1d67a09c-c7d9-4322-b765-dcd9f754f577/)
- 居中玻璃胶囊链接组，右侧白色候补按钮 · 电脑＋手机 · 预览可见 · 来自「Futuristic Tech」（只有首屏） · [目录](../sources/framesbase/items/80609126-2f89-46e0-9353-6aef03ae79cf/)
- 四个链接左右各二，夹住中间白色十六芒星标志 · 电脑＋手机 · 预览可见 · 来自「Global gateway」（只有首屏） · [目录](../sources/framesbase/items/f8e25246-daa3-42c6-9502-2e0895a676af/)
- 左白色月牙标志，中间四个分开的玻璃小胶囊，右白色按钮 · 电脑＋手机 · 预览可见 · 来自「Global Talent」（整页） · [目录](../sources/framesbase/items/8b57d5cc-3d95-46bd-ab8b-2070b21be008/)
- 三段分开的胶囊：左标志、中间四个链接、右白色按钮 · 电脑 · 预览可见 · 来自「Guardnet」（整页） · [目录](../sources/framesbase/items/9fe3b9f8-0157-4407-88ee-e3243922ae20/)
- 左侧文字标志紧跟四个链接，右侧白色圆角按钮 · 电脑＋手机 · 预览可见 · 来自「Immersive Ocean」（只有首屏） · [目录](../sources/framesbase/items/bcdefd54-da34-4571-860e-ed6ab6888269/)
- 左标志、中间五个文字链接、右侧深灰圆角按钮 · 电脑＋手机 · 预览可见 · 来自「Inner Quest」（只有首屏） · [目录](../sources/framesbase/items/4b1fea3c-3ee5-4766-ad37-ee5c842316e0/)
- 左字标带上标小圈，中间两个带破折号的链接，右侧描边圆形菜单键 · 电脑＋手机 · 预览可见 · 来自「Innovation Studio」（只有首屏） · [目录](../sources/framesbase/items/697977ed-47ea-4b07-baef-d26211655ba4/)
- 右上一排独立米白胶囊链接，另有语言胶囊 · 电脑＋手机 · 预览可见 · 来自「Layered Depth」（只有首屏） · [目录](../sources/framesbase/items/44e96e6c-04fd-49c4-a43a-4a6af311fb84/)
- 白色悬浮圆角横条：左标志、中间链接、右侧深色箭头按钮 · 电脑 · 预览可见 · 来自「Logoisum Video Agency」（只有首屏） · [目录](../sources/framesbase/items/18063261-0f57-4627-80bb-d5de8d98be05/)
- 左胶囊装标志和链接，右胶囊装幽灵和白色实心按钮 · 电脑＋手机 · 预览可见 · 来自「Luminara」（只有首屏） · [目录](../sources/framesbase/items/feadd465-1fa9-4bab-b4f5-133d23631a56/)
- 左侧 Velar. 字标、右侧两条细线菜单，无背景条 · 电脑＋手机 · 预览可见 · 来自「Luxury Real Estate」（整页） · [目录](../sources/framesbase/items/9b67fdf3-96e8-4a42-9824-519b0a1f2f22/)
- 左白色标志，中间四个独立白底圆角按钮，右侧紫色下载键 · 电脑＋手机 · 预览可见 · 来自「Mindful Companion」（整页） · [目录](../sources/framesbase/items/9d5a8d41-42f1-4bc6-86c9-23ace703c781/)
- 左品牌加汉堡和menu，右侧胶囊装FOLLOW ALONG和社交图标 · 电脑＋手机 · 预览可见 · 来自「Mindora」（只有首屏） · [目录](../sources/framesbase/items/3c6b1c10-2ed3-4f70-8696-17dc413136f4/)
- 取景框顶部分格导航，左右格用竖线隔开，等宽大写字 · 电脑＋手机 · 预览可见 · 来自「Nature Ritual」（只有首屏） · [目录](../sources/framesbase/items/75806499-a2b1-49aa-9345-f290f65907cb/)
- 深色页面上的白色圆角悬浮导航条，右侧搜索图标和蓝色Contact按钮 · 电脑＋手机 · 预览可见 · 来自「NexaCore」（整页） · [目录](../sources/framesbase/items/e7078def-f612-45c4-be23-fd06692b6666/)
- 细虚线下边框，右侧黑色渐变胶囊按钮，箭头圆在左 · 电脑＋手机 · 预览可见 · 来自「Nexto 404」（只有首屏） · [目录](../sources/framesbase/items/9e87b015-0ea2-4fd5-a5ab-fca0eefe2556/)
- 白色圆角悬浮横条：左圆形标志，中间带下拉箭头的链接 · 电脑 · 预览可见 · 来自「Nickel Payments」（只有首屏） · [目录](../sources/framesbase/items/20d2a860-b294-4120-8032-2ff0f2e79f41/)
- 全宽玻璃胶囊导航，左标志加三链接，右文字注册和玻璃登录钮 · 电脑 · 预览可见 · 来自「No-Code Waitlist」（只有首屏） · [目录](../sources/framesbase/items/74c38d70-b12a-48e0-8a8e-193d30dca2bb/)
- 左三行粗体堆叠字标，中间大写宽字距链接，右侧等宽字坐标 · 电脑＋手机 · 预览可见 · 来自「Orbit Engineers」（整页） · [目录](../sources/framesbase/items/3b161556-fdf7-453e-869e-474994785681/)
- 左侧三个大写小链接，正中三角形标志，右侧深绿胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Palomar Labs」（只有首屏） · [目录](../sources/framesbase/items/88473704-8b70-469b-b6c2-eeb1d38aeee9/)
- 链接装进深色圆角块居中，右侧另一深色块装幽灵和浅灰实心按钮 · 电脑＋手机 · 预览可见 · 来自「Peakline Redshift」（只有首屏） · [目录](../sources/framesbase/items/f2b83e6a-88a5-4ac5-bd5f-3100feb26292/)
- 右上角年份、导航、社交三列竖排小字，无横栏 · 电脑＋手机 · 预览可见 · 来自「Personal Showcase」（只有首屏） · [目录](../sources/framesbase/items/3f621e4f-d94e-454d-a045-6f59cbaa6518/)
- 无标志透明顶栏，五个等宽大写链接居中，登录键靠右 · 电脑＋手机 · 预览可见 · 来自「Pixel Muse」（只有首屏） · [目录](../sources/framesbase/items/7b4a9ab1-0269-4a44-b655-85e83d7f1721/)
- 居中一圆一圆角矩形两块浅灰底，左标志右四个链接 · 电脑 · 预览可见 · 来自「Prosthetics Hero」（只有首屏） · [目录](../sources/framesbase/items/dbf496e5-bf65-42c9-a64f-c8d5b6845ca6/)
- 左品牌字、正中一个“Navigate”描边胶囊、右侧花形图标 · 电脑＋手机 · 预览可见 · 来自「Rare Gallery」（只有首屏） · [目录](../sources/framesbase/items/63505def-be71-4e54-8caa-7d42f90bce82/)
- 左标志，中间玻璃胶囊分段导航，右侧账户胶囊与白色按钮 · 电脑＋手机 · 预览可见 · 来自「Relocation Card」（只有首屏） · [目录](../sources/framesbase/items/d5b4d70e-a78f-4a92-9fa0-29ec38f17ae9/)
- 居中深色胶囊里一排链接，当前项白色胶囊，右侧深色按钮带绿点 · 电脑＋手机 · 预览可见 · 来自「Reveal Hero」（只有首屏） · [目录](../sources/framesbase/items/561704b4-2ed3-46c9-b67e-2d02ee6c4bd0/)
- 右侧深色半透明直角条，等宽链接后接白色方块按钮 · 电脑 · 预览可见 · 来自「Scroll Landing Page」（整页） · [目录](../sources/framesbase/items/801690d8-4a7d-42fd-b164-2dd4aa19fc65/)
- 居中白色圆角条分段导航，当前项黑底白字 · 电脑＋手机 · 预览可见 · 来自「Sentinel」（整页） · [目录](../sources/framesbase/items/ad42285c-ab93-4884-a40b-f46a231c09bd/)
- 浅灰半透明圆角长条，左标志、中间五链接、右黑色登录钮 · 电脑＋手机 · 预览可见 · 来自「Shipping Infrastructure」（只有首屏） · [目录](../sources/framesbase/items/e939171b-1d5c-4e45-a28e-827658a6b706/)
- 居中一排分离的毛玻璃方圆胶囊，当前项黑底，右侧社交托盘和黑购物车 · 电脑＋手机 · 预览可见 · 来自「Sky Cookie」（只有首屏） · [目录](../sources/framesbase/items/e8e4b3e8-fe8d-46c6-be04-864b3e682100/)
- 宽玻璃胶囊导航，右侧浅蓝发光胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Sky Estate」（整页） · [目录](../sources/framesbase/items/5e4c3aad-d51f-4405-b537-22117c3642d5/)
- 右侧一条玻璃胶囊装五个链接，末尾嵌白色实心按钮 · 电脑 · 预览可见 · 来自「Space Voyage」（只有首屏） · [目录](../sources/framesbase/items/10084ab3-f346-462d-a061-b0fe274edba4/)
- 深紫色圆角整条顶栏，左橙色字标，右白色按钮内嵌箭头方块 · 电脑＋手机 · 预览可见 · 来自「Spatial Mapping Platform」（只有首屏） · [目录](../sources/framesbase/items/9e852e08-1485-4ae9-8aa1-1c85077448b4/)
- 左侧带度数符号的 LGPSM 标志，右侧大写宽字距链接和购物袋 · 电脑＋手机 · 预览可见 · 来自「Synth Mode」（只有首屏） · [目录](../sources/framesbase/items/38aba76a-a12d-4d8a-a8c1-919c9b030157/)
- 顶部居中的半透明玻璃胶囊，含标志、四个链接和注册键 · 电脑＋手机 · 预览可见 · 来自「Taskly」（只有首屏） · [目录](../sources/framesbase/items/81191770-444a-4c54-8a71-f4d4e3a4a4e4/)
- 悬浮全圆角玻璃顶栏，左标志、中间四链接、右侧注册加白色登录钮 · 电脑＋手机 · 预览可见 · 来自「Taskora SaaS Hero」（只有首屏） · [目录](../sources/framesbase/items/af806bcb-0a59-48c6-a44f-ef0c05b072cb/)
- 左标志、黑色Menu胶囊、浅灰分类胶囊，右侧灰胶囊配黑圆键 · 电脑＋手机 · 预览可见 · 来自「Tech-Forward」（只有首屏） · [目录](../sources/framesbase/items/fc025f19-16ff-4675-8d9f-cdec747abcb2/)
- 左几何标志，中间五个链接，右侧紫色和米白两个胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「VaultShield」（只有首屏） · [目录](../sources/framesbase/items/58ba480c-6500-4b71-9b09-7cf09621b582/)
- 左侧五个宽字距小写链接，当前项下方细线，右侧NEWS和MENU · 电脑＋手机 · 预览可见 · 来自「Vectrus Energy」（整页） · [目录](../sources/framesbase/items/60e0c19f-9900-4b7b-bf4f-3ead89515226/)
- 左字标，中间深色胶囊装五个链接，右侧白色胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Velorix IIC」（只有首屏） · [目录](../sources/framesbase/items/3ef61078-b239-4c3e-adb3-cbcec1fcb9bf/)
- 透明顶栏：左几何标志，中四个宽字距大写链接，右描边与实心直角按钮 · 电脑＋手机 · 预览可见 · 来自「Vertex Sci」（只有首屏） · [目录](../sources/framesbase/items/9797c2ea-ce70-4ffd-a5f9-675a009e3930/)
- 左侧标志，右侧暖深色玻璃条装着链接和白色登录键 · 电脑＋手机 · 预览可见 · 来自「VertexAI Hero」（只有首屏） · [目录](../sources/framesbase/items/31ce4379-2da0-44d3-b9a1-416ef831b3a2/)
- 无标志，右上只有1/01页码、细进度线和NEXT PROJECT · 电脑＋手机 · 预览可见 · 来自「Viktor Portfolio」（只有首屏） · [目录](../sources/framesbase/items/e9cdbaed-d836-4a8b-93ca-24af8614be66/)
- 左上黑色四角星标志，右上米白圆形双横线菜单钮 · 电脑 · 预览可见 · 来自「Vision Reveal」（只有首屏） · [目录](../sources/framesbase/items/74a3a1d3-45cc-4eab-87cd-d97aaf489f27/)
- 透明顶栏，中间四项带下拉箭头，右侧登录文字和玻璃胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Wellbeing OS」（只有首屏） · [目录](../sources/framesbase/items/675a7ff7-fab9-4645-8c2c-bcc450124094/)
- 左侧拉长的玻璃条只放Logo和菜单键，右侧白色按钮 · 电脑＋手机 · 预览可见 · 来自「Wellness Hero」（只有首屏） · [目录](../sources/framesbase/items/1090915f-3612-42d9-8283-34822366ee2f/)
- 手机菜单从汉堡键处长出一个圆铺满全屏，Anton大字链接配斜箭头 · 电脑＋手机 · 仅提示词 · 来自「Cosmic」（只有首屏） · [目录](../sources/framesbase/items/0152f0b3-14b7-4095-8397-e9cba9b67849/)
- 手机端全屏黑色毛玻璃菜单，衬线大字链接逐行滑入 · 电脑＋手机 · 仅提示词 · 来自「Impact Ventures」（只有首屏） · [目录](../sources/framesbase/items/ee296445-e2d7-4bf9-b9d0-3b637ad11707/)
- 手机端黑色模糊全屏菜单，链接居中逐条上浮出现 · 电脑＋手机 · 仅提示词 · 来自「Performance Run」（只有首屏） · [目录](../sources/framesbase/items/0d9c6738-e99c-484a-bbb0-4ab5f019a1fe/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/navigation-*.tsx`（11 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
