# 截图框与样机

共 14 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 4（13 条）

- **带红黄绿灯和地址栏的浏览器窗口，从首屏底部伸出被裁掉**
  做法：看板固定按700px宽写，外层贴底居中，靠scale在0.52/0.7/0.78/1.0间缩放、origin-bottom，大屏再下移28%只露上半；内部不写任何断点。不常见在整块缩放不重排
  电脑＋手机 · 预览可见 · 来自「Ascera AI」（只有首屏） · [预览图](../sources/framesbase/items/809189f2-a6b3-4e2e-a4a6-1da16fb57d1e/preview.webp) · [提示词](../sources/framesbase/items/809189f2-a6b3-4e2e-a4a6-1da16fb57d1e/prompt.md)
- **首屏下方一条通栏仿Mac菜单栏，再下是白色邮箱应用窗口**
  做法：40px高通栏bg-black/40加模糊，上下1px白10%边；左苹果标、应用名、File/Edit/View，右搜索和时间。不常见在用系统菜单栏引出产品截图。提示词只写了菜单栏
  电脑＋手机 · 预览可见 · 来自「AuraMail」（只有首屏） · [预览图](../sources/framesbase/items/9c3c4578-0a35-43a4-bf48-31e6c4ce9143/preview.webp) · [提示词](../sources/framesbase/items/9c3c4578-0a35-43a4-bf48-31e6c4ce9143/prompt.md)
- **全宽仿 macOS 菜单栏横条，下方三栏邮件客户端样机**
  做法：首屏下放通栏h-10菜单栏（黑40%+blur，上下1px白10%线，左苹果标和菜单，右搜索与时间），再接三栏收件箱（3/4/5栏）。不常见在用系统菜单栏做首屏与样机的分隔
  电脑＋手机 · 预览可见 · 来自「Email Landing Page」（整页） · [预览图](../sources/framesbase/items/aaf5f982-6ac6-49fa-a181-eb26dac7ab79/preview.webp) · [提示词](../sources/framesbase/items/aaf5f982-6ac6-49fa-a181-eb26dac7ab79/prompt.md)
- **场景照片上浮半透明课程后台，侧栏加2×2课程卡**
  做法：样机按固定900×562画布写死，ResizeObserver算min(w/900,h/562)整体scale；白4%底+blur-xl叠在场景图上，侧栏选中项与当前标签同步。不常见在定尺寸整体缩放
  电脑＋手机 · 预览可见 · 来自「Glassmorphic Feature Tabs」（单个模块） · [预览图](../sources/framesbase/items/cd8d1a77-c851-4a76-828b-aa1e08872cfa/preview.webp) · [提示词](../sources/framesbase/items/cd8d1a77-c851-4a76-828b-aa1e08872cfa/prompt.md)
- **玻璃外框里左侧聊天面板、右侧迷你网站预览**
  做法：液态玻璃外框 p-3 圆角 16，两栏 320px+1fr；右栏是带导航、衬线标题、邮箱胶囊的小网站。不常见在预览视频循环：结束前 0.55s 淡出 500ms，重播后再淡入，遮住接缝
  电脑 · 预览可见 · 来自「Growth Marketing SaaS」（只有首屏） · [预览图](../sources/framesbase/items/cf7111be-de60-494b-b49b-befbdd556e0a/preview.webp) · [提示词](../sources/framesbase/items/cf7111be-de60-494b-b49b-befbdd556e0a/prompt.md)
- **粉橙紫多层径向渐变圆角框，白色后台截图从底边溢出**
  做法：框只给上左右内边距、底部为0，截图贴底被裁；截图内部尺寸全用cqw（container-type:inline-size），整块像图片一样等比缩放不重排。不常见在用容器查询单位做可缩放的假界面
  电脑＋手机 · 预览可见 · 来自「Intelligent Systems」（只有首屏） · [预览图](../sources/framesbase/items/526347c5-db22-46de-994a-90795ee71626/preview.webp) · [提示词](../sources/framesbase/items/526347c5-db22-46de-994a-90795ee71626/prompt.md)
- **后台截图压在满宽花丛视频上，透出视频颜色**
  做法：不常见在截图设mix-blend-mode:luminosity，只留明暗、颜色取自下方视频；视频区用w-screen加margin-left:calc(-50vw+50%)破出容器、16:9；滚动时截图上移250px
  电脑 · 预览可见 · 来自「Neuralyn」（只有首屏） · [预览图](../sources/framesbase/items/c9b95dce-8e86-4c87-acf6-d393f2189d2d/preview.webp) · [提示词](../sources/framesbase/items/c9b95dce-8e86-4c87-acf6-d393f2189d2d/prompt.md)
- **HTML画的深色后台窗口：三点顶栏、侧栏、表格、右下浮出提示**
  做法：HTML搭外框代替截图：58px顶栏三圆点加灰条。少见两处：上方等宽“FIG. 2”描边小标签像论文插图；悬停时3D倾斜1°/-1.2°、上浮8px，一道斜向光带从左扫到右
  电脑＋手机 · 预览可见 · 来自「Nimbus Demo」（单个模块） · [预览图](../sources/framesbase/items/a1c95b10-02f2-4823-8f6a-31b658f83799/preview.webp) · [提示词](../sources/framesbase/items/a1c95b10-02f2-4823-8f6a-31b658f83799/prompt.md)
- **浅灰圆角界面卡，带标签页、头像组和两条结果行，四周白色光晕**
  做法：整卡用 HTML 写，所有尺寸乘 --dp=卡宽/548 保持比例缩放；阴影三层：1px 白边、0 0 9dp 3dp 白色50%光晕、22/64 深青投影，让浅卡在蓝视频上浮起。不常见在用白色光晕而非深色阴影分离背景
  电脑＋手机 · 预览可见 · 来自「Quantum Lucid」（只有首屏） · [预览图](../sources/framesbase/items/797b2e5f-6dd5-4994-8943-6c2fdc529e2a/preview.webp) · [提示词](../sources/framesbase/items/797b2e5f-6dd5-4994-8943-6c2fdc529e2a/prompt.md)
- **半透明深色玻璃手机，内含打卡统计条和习惯进度列表**
  做法：不放截图，用真实界面搭：宽340、圆角44、rgba(13,17,23,.55)+blur-xl；不常见在用0 0 0 8px白5%光圈当机身边框。内含连续天数卡、7天柱条、带40×3进度条的习惯行
  电脑＋手机 · 预览可见 · 来自「Routine Coach」（整页） · [预览图](../sources/framesbase/items/047e2722-0876-4803-8529-41425ac10c0b/preview.webp) · [提示词](../sources/framesbase/items/047e2722-0876-4803-8529-41425ac10c0b/prompt.md)
- **带红黄绿灯和地址栏的深色浏览器框，内含完整后台界面**
  做法：少见在样机是真HTML不是截图：按896px设计宽度渲染，ResizeObserver算缩放比做transform:scale，外层高度设为内高×比例防溢出；含侧栏、四格指标、分类卡和收件表
  电脑＋手机 · 预览可见 · 来自「SaaS Value」（只有首屏） · [预览图](../sources/framesbase/items/facb373d-65f3-4987-8674-fd1ec3b6f305/preview.webp) · [提示词](../sources/framesbase/items/facb373d-65f3-4987-8674-fd1ec3b6f305/prompt.md)
- **纯阴影画出的黑色手机边框和灵动岛**
  做法：340×740、圆角 52px，box-shadow 叠：内描白 8%、1px 黑环、10px #1a1a1e 当机身、11px 白 6% 高光、60px 投影。不常见在只靠扩散阴影画机身
  手机 · 预览可见 · 来自「Travel Explorer」（应用界面） · [预览图](../sources/framesbase/items/87fa1b62-4ce6-4d32-940b-3605df144bfa/preview.webp) · [提示词](../sources/framesbase/items/87fa1b62-4ce6-4d32-940b-3605df144bfa/prompt.md)
- **暗色编辑器样机：左侧元素格、顶部工具条、点阵画布上的节点流程**
  做法：全用HTML和SVG画：节点圆角10、白边72%，两侧10×13白色端口；节点间13/9虚线标“1 step”；分支收进虚线框；画布点阵间距22.3px；底部加白光标和You胶囊；不常见在矢量画出的产品样机
  电脑＋手机 · 预览可见 · 来自「Website Builder」（只有首屏） · [预览图](../sources/framesbase/items/d9888639-5064-4654-be6d-ebfa3d19b23f/preview.webp) · [提示词](../sources/framesbase/items/d9888639-5064-4654-be6d-ebfa3d19b23f/prompt.md)

## 推荐度 3（1 条）

- 纯代码画的 iPhone：白边、灵动岛、问候行和情绪转盘 · 电脑＋手机 · 预览可见 · 来自「Mindful Companion」（整页） · [目录](../sources/framesbase/items/9d5a8d41-42f1-4bc6-86c9-23ace703c781/)
