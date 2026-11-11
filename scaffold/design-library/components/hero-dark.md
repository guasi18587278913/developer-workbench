# 首屏 · 深色

共 150 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（12 条）

- **模糊的上一句介绍、正在打字的问候，下方一组白色回复胶囊**
  做法：首屏做成聊天开场：两行介绍加blur(4px)像已读旧消息，下一句38ms/字打出带2px闪烁光标；4个白底黑字全圆角胶囊当快捷回复，第5个描边胶囊放邮箱加复制图标，点击写入剪贴板
  电脑＋手机 · 预览可见 · 来自「3D Character Studio」（只有首屏） · [预览图](../sources/framesbase/items/9f64e330-7177-41f5-b3ca-94597f00d571/preview.webp) · [提示词](../sources/framesbase/items/9f64e330-7177-41f5-b3ca-94597f00d571/prompt.md)
- **四竖三横细线网格切屏，中格放磨砂玻璃卡，左下标题右下说明**
  做法：竖线在5.4/33.2/66.8/95%，中间两根过卡片行后渐隐；不常见在卡片那一整行用backdrop-filter:grayscale(1)给视频去色，玻璃卡再叠灰阶加28px模糊；线条加载时依次缩放画出
  电脑＋手机 · 预览可见 · 来自「AI Cyber Defense」（只有首屏） · [预览图](../sources/framesbase/items/58c49076-610b-4596-ac08-c4f4f954e7c6/preview.webp) · [提示词](../sources/framesbase/items/58c49076-610b-4596-ac08-c4f4f954e7c6/prompt.md)
- **居中小视频卡滚动放大到满屏，再依次出现大字、声波和路线**
  做法：钉住约 12 屏：193px 视频卡放大到满屏，标题同时模糊 24px 缩小淡出；之后滚动进度直接设 currentTime，飞入 Orbitron 大字、27 根正弦高度声波条、描线路线和打勾节点。不常见在滚动拖播视频穿插图形。
  电脑 · 预览可见 · 来自「AI Driving Assistant」（只有首屏） · [预览图](../sources/framesbase/items/87b66c91-59d2-4d92-a49c-ec8bd1efc877/preview.webp) · [提示词](../sources/framesbase/items/87b66c91-59d2-4d92-a49c-ec8bd1efc877/prompt.md)
- **左上三行大标题，满屏淡网格和十字，三个空心方框连到注释标签**
  做法：少见在把视频做成技术图注：4竖2横1px white/[0.04]网格按百分比定位，交点放10px十字；80/100px白框以左上角定位，各用一横一斜两段SVG线连到[ 标签 ]
  电脑＋手机 · 预览可见 · 来自「Aurex Finance」（只有首屏） · [预览图](../sources/framesbase/items/a8257415-cb61-444b-b4b3-2f12299d2ada/preview.webp) · [提示词](../sources/framesbase/items/a8257415-cb61-444b-b4b3-2f12299d2ada/prompt.md)
- **巨型衬线字压在后，前景一排带书页厚度的立体书斜向滚过**
  做法：每本书由封面、20多层书页、封底叠成：每层skewY(30deg)并右移1.1px，越往后越暗；书互相叠压115px，轨道转-7deg、书再转7deg。不常见在纯CSS叠层做出书页厚度
  电脑 · 预览可见 · 来自「Book Hero」（只有首屏） · [预览图](../sources/framesbase/items/29e21ea6-3b85-459a-bd3e-7d4e6a2d2fe9/preview.webp) · [提示词](../sources/framesbase/items/29e21ea6-3b85-459a-bd3e-7d4e6a2d2fe9/prompt.md)
- **首行标题在心脏后面，后两行压在心脏前面，三行阶梯缩进**
  做法：不常见在同一标题渲染两份：后层z1只显示第1行、图片z2、前层z3只显示第2-3行，几何完全一致所以无缝；三行左缩进6.48%/18.2%/49.22%；五个服务小字按百分比散落定位；鼠标处径向mask挖洞190px露出心脏背面图
  电脑＋手机 · 预览可见 · 来自「Cardia 3D」（只有首屏） · [预览图](../sources/framesbase/items/d06d4d1b-a841-4f77-a883-c5252594a922/preview.webp) · [提示词](../sources/framesbase/items/d06d4d1b-a841-4f77-a883-c5252594a922/prompt.md)
- **三枚新拟态圆钮横排连线，中间Logo钮，光束在其间接力**
  做法：侧钮46/中钮64，外阴影+内阴影做凹陷，外圈-7px点线环；SVG折线叠模糊发光层，改渐变x1/x2让光点沿线跑：0.8s到中钮溅出粉色光斑，再0.8s到右钮点亮侧光，3.4s循环。少见在分段接力
  电脑＋手机 · 预览可见 · 来自「Cybersecurity Hero」（只有首屏） · [预览图](../sources/framesbase/items/9e3b2c64-ce73-4bb3-b6c0-c924158a91f6/preview.webp) · [提示词](../sources/framesbase/items/9e3b2c64-ce73-4bb3-b6c0-c924158a91f6/prompt.md)
- **居中标题双按钮，下方暗色看板只露上半，花束盖住看板两角**
  做法：看板z-2、花图z-3从左右下角负偏移溢出画布并压住看板角；悬停花朵时两层互补径向遮罩（--sx/--sy/--sr）挖圆洞露出另一张花图；不常见在照片前景压产品图，再用遮罩局部换图
  电脑＋手机 · 预览可见 · 来自「Frontier」（只有首屏） · [预览图](../sources/framesbase/items/88db028b-23cf-45da-b771-c63eb90f7c62/preview.webp) · [提示词](../sources/framesbase/items/88db028b-23cf-45da-b771-c63eb90f7c62/prompt.md)
- **超大粗体标题夹在照片和抠图之间，被屋顶和烟囱挡住**
  做法：分层：底图、暗角渐变、标题、同图抠图（原图像素+抠图透明度），两图同步2s从scale 1.06缩回保持对齐；标题行高.772、字距-.055em。不常见在抠图用原图像素防边缘发光
  电脑＋手机 · 预览可见 · 来自「Mountain Retreat」（只有首屏） · [预览图](../sources/framesbase/items/dc2bff12-092e-488c-8e55-3ea965d2bd18/preview.webp) · [提示词](../sources/framesbase/items/dc2bff12-092e-488c-8e55-3ea965d2bd18/prompt.md)
- **三个大写等宽词分占左上、右上、右下，中间留给产品**
  做法：不常见在取景框版式：视口内缩20px画 white/10 细线框，四角14px白色L括号、上下边中点12px短刻度；词用 Chivo Mono clamp(2rem,9.5vw,9.5rem)、行高0.9，两行 justify-between
  电脑＋手机 · 预览可见 · 来自「Nature Ritual」（只有首屏） · [预览图](../sources/framesbase/items/75806499-a2b1-49aa-9345-f290f65907cb/preview.webp) · [提示词](../sources/framesbase/items/75806499-a2b1-49aa-9345-f290f65907cb/prompt.md)
- **居中衬线星球名，按钮两侧被屏边裁切的行星和衬线标签**
  做法：按钮左右各放一张透明行星图，一半伸出屏外，旁边衬线小字标签；不常见在点侧边行星就换成主角：背景视频、标题、文案、两侧行星一起切换，三张图都预载只切 class 不换 src
  电脑＋手机 · 预览可见 · 来自「Space planet」（只有首屏） · [预览图](../sources/framesbase/items/72b8ebb1-3d60-4bea-8e76-968a8b563982/preview.webp) · [提示词](../sources/framesbase/items/72b8ebb1-3d60-4bea-8e76-968a8b563982/prompt.md)
- **三张圆角竖卡拼出同一幅视频，中卡叠胶囊图框，右下大字标题**
  做法：不常见在一段视频切三片：三卡合成一个cover面算源区域，每卡画1/3宽到canvas；先正放一遍抓帧再30fps往返播放；外卡圆角32px、内卡22px、间距8px，底部260px渐黑托住左段落右大字
  电脑 · 预览可见 · 来自「Waitlist Hero」（单个模块） · [预览图](../sources/framesbase/items/4765c768-bc52-486b-bddf-5fba1c74d7e7/preview.webp) · [提示词](../sources/framesbase/items/4765c768-bc52-486b-bddf-5fba1c74d7e7/prompt.md)

## 推荐度 4（48 条）

- **四个导航词撑满整宽，下面一行满宽巨字，3D 头像叠在字上**
  做法：不常见在头像压字：标题 17.5vw 不换行撑满宽度、180deg #646973→#BBCCD7 渐变字，头像绝对定位底部居中盖住字的下半；四个链接 justify-between 与巨字同宽；左下小字、右下按钮收边
  电脑 · 预览可见 · 来自「3D Jack Portfolio」（整页） · [预览图](../sources/framesbase/items/29af4f43-2758-4c92-9e0b-43707fdc8f49/preview.webp) · [提示词](../sources/framesbase/items/29af4f43-2758-4c92-9e0b-43707fdc8f49/prompt.md)
- **左下大标题配白色胶囊邮箱框，右下并排数字卡和评价卡**
  做法：内容用 mt-auto 压到屏底；两卡同为白 10% 加 blur-lg、圆角 16px；数字 42,500+ 单独用像素字体 Silkscreen，其余全 Geist，形成反差；输入框嵌在白胶囊里，右侧深色渐变按钮
  电脑＋手机 · 预览可见 · 来自「Agent Grove」（只有首屏） · [预览图](../sources/framesbase/items/8c75d3c1-6777-41fe-b16e-82b705e7dba5/preview.webp) · [提示词](../sources/framesbase/items/8c75d3c1-6777-41fe-b16e-82b705e7dba5/prompt.md)
- **贴底的超大黑体PLATE®，中间字母A换成手写花体**
  做法：标志BBH Bartle字号13.6vw贴底，A换Alex Brush花体并设line-height:0，防止行高被撑大，花体笔画自然压过T；上方一行大写小标签。不常见在粗黑体词里嵌一个手写字母
  电脑 · 预览可见 · 来自「AI Film Studio」（整页） · [预览图](../sources/framesbase/items/9349c46b-dd1f-4be3-9623-4337778598fc/preview.webp) · [提示词](../sources/framesbase/items/9349c46b-dd1f-4be3-9623-4337778598fc/prompt.md)
- **顶部三等分大写链接，底部贴边超大字标，A换成花体**
  做法：尺寸按1470宽设计稿折成vw（字标13.6vw=200px），字标贴底；顶栏三项flex:1左中右对齐；少见在字标只把A换成Alex Brush花体，span设line-height:0不撑高行盒
  电脑 · 预览可见 · 来自「AI Future Studio」（整页） · [预览图](../sources/framesbase/items/d5c77552-d47a-4d88-90e8-bcd610da5ff6/preview.webp) · [提示词](../sources/framesbase/items/d5c77552-d47a-4d88-90e8-bcd610da5ff6/prompt.md)
- **直角专辑封套叠在半露的圆唱片前，右侧标题、年份和描边按钮**
  做法：不常见在唱片从封套后滑出：480px 圆片从居中移到 25%-290px 并转 90°，2000ms；封套 420×540 直角带重阴影，左移 40px 压住唱片，从左滑入 900ms
  电脑＋手机 · 预览可见 · 来自「Album App」（应用界面） · [预览图](../sources/framesbase/items/4e5c7519-fa46-4b8e-b2cd-a11c050a0c85/preview.webp) · [提示词](../sources/framesbase/items/4e5c7519-fa46-4b8e-b2cd-a11c050a0c85/prompt.md)
- **左上渐隐细体大写标题，左下规格参数表，右下胶囊标签条**
  做法：标题用Orbitron极细大写，white/20→white横向渐变裁字；不常见在左下角放四行规格表（10px等宽宽字距小标题、行间white/10细线、左标签右等宽值），首屏像产品参数页；3D场景右移15%
  电脑＋手机 · 预览可见 · 来自「Automation Machines」（只有首屏） · [预览图](../sources/framesbase/items/833d6d90-b967-4bef-9afd-81823537330a/preview.webp) · [提示词](../sources/framesbase/items/833d6d90-b967-4bef-9afd-81823537330a/prompt.md)
- **以46%竖线为对齐轴，右栏标题按钮，左栏细线服务列表**
  做法：元素全绝对定位：meta、标题、分隔线、按钮共用left:46%，标题top27%、分隔线70%、按钮75.5%；左列top70.4%放290px宽服务列表，每项上方1px白16%细线；零圆角Inter400。少见在百分比坐标排版
  电脑＋手机 · 预览可见 · 来自「Avant Studio」（只有首屏） · [预览图](../sources/framesbase/items/5ed6b02a-e611-41de-be1c-1f0bef9a7997/preview.webp) · [提示词](../sources/framesbase/items/5ed6b02a-e611-41de-be1c-1f0bef9a7997/prompt.md)
- **居中大写衬线标题、TVL/APY 数据、六边形白按钮，底部巨字品牌名**
  做法：标题只到 48px、字距 0.15em，重量让给底部 18vw、行高 0.85 的巨字；按钮 clip-path 切成尖头六边形；不常见在树冠图 translateY(-50%) 骑在两屏接缝上
  电脑＋手机 · 预览可见 · 来自「Bitcoin Yield」（只有首屏） · [预览图](../sources/framesbase/items/5fe37d84-c858-4efb-ad36-6080435520d2/preview.webp) · [提示词](../sources/framesbase/items/5fe37d84-c858-4efb-ad36-6080435520d2/prompt.md)
- **内缩圆角视频卡，左上三行大标题，左下挖出凹角放图标**
  做法：外层#464340留12px边，卡片rounded-2xl；左下同色块rounded-tr-20px放三图标，不常见在上方和右侧各贴20×20径向渐变(circle at 100% 0%, transparent 20px)做反圆角，像从卡上挖出来
  电脑 · 预览可见 · 来自「CleanTech」（整页） · [预览图](../sources/framesbase/items/b420ed46-a311-4fcf-9da3-c4f6ce350dff/preview.webp) · [提示词](../sources/framesbase/items/b420ed46-a311-4fcf-9da3-c4f6ce350dff/prompt.md)
- **三行标题，末行词间嵌指纹和星芒两枚圆形视频**
  做法：前两行#666→#d0d0d0→#666渐变裁字；第三行flex排“is+视频+human+加号+视频+AI”，圆形视频最大110px循环播放；按钮黑底绿描边加绿外发光。不常见在标题行内嵌视频
  电脑 · 预览可见 · 来自「CoderCrest」（只有首屏） · [预览图](../sources/framesbase/items/ab6409fb-68cc-4bff-9d0d-7c3c7484e6f8/preview.webp) · [提示词](../sources/framesbase/items/ab6409fb-68cc-4bff-9d0d-7c3c7484e6f8/prompt.md)
- **左下两行超大小写标题配白色大胶囊按钮，右下并排两张磨砂数据卡**
  做法：标题clamp(56px,13vw,155px)、行高0.78、字距-0.04em压成实心块；底行左标题、右两张白92%加blur(10px)数据卡底边对齐。少见在数据卡与标题同排占首屏底角
  电脑 · 预览可见 · 来自「Creative Agency」（只有首屏） · [预览图](../sources/framesbase/items/6801fabf-6176-4ddc-8dae-b79aab1c93e8/preview.webp) · [提示词](../sources/framesbase/items/6801fabf-6176-4ddc-8dae-b79aab1c93e8/prompt.md)
- **左下超大名字，上方带编号的视频切换列表，右下简介加按钮**
  做法：名字 200px、行高 81%、字距 -6px；左侧“01 / WATER WAVE”三项编号列表点选切换背景视频（1.2s 交叉淡入），未选中 55% 透明；不常见在句点颜色和“可接单”圆点随视频换色
  电脑＋手机 · 预览可见 · 来自「Creative Portfolio」（只有首屏） · [预览图](../sources/framesbase/items/51e3c173-3df0-4e72-9c25-db0b2baaee6c/preview.webp) · [提示词](../sources/framesbase/items/51e3c173-3df0-4e72-9c25-db0b2baaee6c/prompt.md)
- **整屏肖像，左下小眉题、三行等宽字体标题、白色胶囊按钮**
  做法：不常见在光标透视：第二张图用 canvas 每帧画半径 260px 径向渐变，转 dataURL 当 mask-image，跟随 0.1 插值的鼠标露出另一版画面；底层再加 48px 网格随鼠标视差 16px
  电脑＋手机 · 预览可见 · 来自「Cyberpunk Reveal」（只有首屏） · [预览图](../sources/framesbase/items/4e489328-cb73-462a-9950-becca04bc807/preview.webp) · [提示词](../sources/framesbase/items/4e489328-cb73-462a-9950-becca04bc807/prompt.md)
- **左侧超大两行标题、等宽小字和直角品红按钮，右上白框计数卡**
  做法：标题 11rem、行高 0.72 两行几乎相贴；正文、按钮全用等宽字，按钮零圆角 #A6439E；计数卡 2px 白边黑底、等宽大数字＋虚线分隔，不常见在右上再错位叠一张小标签卡
  电脑 · 预览可见 · 来自「Cybersecurity」（只有首屏） · [预览图](../sources/framesbase/items/9207b813-1954-40a8-bc61-03adb85a268a/preview.webp) · [提示词](../sources/framesbase/items/9207b813-1954-40a8-bc61-03adb85a268a/prompt.md)
- **标题上方三个圆形图标节点用细线连起，中间是品牌标**
  做法：左右46px、中间64px 圆节点，160px 渐变细线相连；SVG 光束 800ms 走左半→中心粉色光晕扩散→走右半→停1s 循环，节点随光束点亮半边。不常见在用流程动画讲加密过程；动效按提示词
  电脑＋手机 · 预览可见 · 来自「Cybersecurity Hero v2」（只有首屏） · [预览图](../sources/framesbase/items/d6fdd0b0-2825-42d1-aedc-a7eff06a8a4b/preview.webp) · [提示词](../sources/framesbase/items/d6fdd0b0-2825-42d1-aedc-a7eff06a8a4b/prompt.md)
- **左下压窄的两行衬线标题、说明和白色箭头按钮，右下竖版玻璃演示卡**
  做法：两行标题分别scaleX(.775)/(.793)压窄，第二行降为78%灰白；白按钮右侧嵌#070909小方块装箭头；演示卡比例201:265，内部用cqw缩放。少见在用scaleX把字压成窄体
  电脑＋手机 · 预览可见 · 来自「Data Signal」（只有首屏） · [预览图](../sources/framesbase/items/9e0b6ca4-6ef2-4123-8d05-c7cd18bca67a/preview.webp) · [提示词](../sources/framesbase/items/9e0b6ca4-6ef2-4123-8d05-c7cd18bca67a/prompt.md)
- **居中两行标题，下方深灰输入卡，底边露出一道黄到青的渐变光**
  做法：输入卡后垫一层同圆角的渐变（z-index -1），底边多伸出3–6px，只露出一条彩色底沿，这是少见处；卡片#111、1px 6.5%白描边；发送键用1.5px 渐变圆环包深色内芯
  电脑＋手机 · 预览可见 · 来自「DeepThink」（只有首屏） · [预览图](../sources/framesbase/items/bb6806e5-93f8-456f-99c7-c968594648b4/preview.webp) · [提示词](../sources/framesbase/items/bb6806e5-93f8-456f-99c7-c968594648b4/prompt.md)
- **顶部四栏信息网格，底部左标题，右侧放映按钮和三块奖项小块**
  做法：上方四栏网格放姓名、职能、What I Do、服务清单，中间 flex-1 留给人像；少见在右下奖项块：#0B0B0B底、粗体奖名加灰色x22次数；底行左招揽语带红链接、右作品计数
  电脑＋手机 · 预览可见 · 来自「Digital Director」（只有首屏） · [预览图](../sources/framesbase/items/5876679e-7e6d-4d33-ae03-6640df390b23/preview.webp) · [提示词](../sources/framesbase/items/5876679e-7e6d-4d33-ae03-6640df390b23/prompt.md)
- **车手抠图压在巨大半透明车号44前，左下两行超大名字，下半身虚化**
  做法：不常见在人像渐进模糊：照片下半叠backdrop-filter blur(6px)，mask-image透明0%到黑50%，腿虚脸清，名字压在虚化区，行高0.82。提示词只写了手机版人像和名字
  电脑＋手机 · 预览可见 · 来自「F1 Driver Profile」（只有首屏） · [预览图](../sources/framesbase/items/820f6d44-47a3-4e56-849c-6e73fda5dd54/preview.webp) · [提示词](../sources/framesbase/items/820f6d44-47a3-4e56-849c-6e73fda5dd54/prompt.md)
- **内容压在底部十二栏：左侧圆点徽标、细体大标题和两颗按钮，右侧说明**
  做法：不常见在鼠标手电筒：canvas在光标处画半径260px径向渐变，转dataURL当mask盖第二张背景图，光标到哪显出另一版画面；底层48px SVG网格白8%随鼠标视差。聚光只按提示词写
  电脑＋手机 · 预览可见 · 来自「Financial Suite」（只有首屏） · [预览图](../sources/framesbase/items/de7f455a-69f9-4620-8d0a-69607ec70084/preview.webp) · [提示词](../sources/framesbase/items/de7f455a-69f9-4620-8d0a-69607ec70084/prompt.md)
- **左下四行大写标题逐行缩进，右下(A)编号、段落和整宽描边胶囊**
  做法：四行各设不同左缩进(pl-6/0/pl-10/pl-16)排成锯齿，第二行混小写细斜体with，第三行加//；不常见在右栏顶部放“( A )”与“[ 001 /004 ]”编号行，下接整宽描边圆角按钮
  电脑＋手机 · 预览可见 · 来自「Future-State」（只有首屏） · [预览图](../sources/framesbase/items/5ea82dfc-8ef9-4628-97d1-d0a0ebc90d3c/preview.webp) · [提示词](../sources/framesbase/items/5ea82dfc-8ef9-4628-97d1-d0a0ebc90d3c/prompt.md)
- **小胶囊徽标、白到紫渐变两行标题、白胶囊按钮，紫丝带压在下方**
  做法：少见在视频处理：黑底视频加 mix-blend-screen 让黑色融进#010101只留丝带，-mt-[150px]顶到文字后(文字z-20)，宽100%不裁切，上下叠同色渐隐
  电脑＋手机 · 预览可见 · 来自「Glassmorphism Agency Hero」（只有首屏） · [预览图](../sources/framesbase/items/21fddb29-22c2-4a2b-98ae-9f3eca155455/preview.webp) · [提示词](../sources/framesbase/items/21fddb29-22c2-4a2b-98ae-9f3eca155455/prompt.md)
- **左下角绿色像素字三行标题，第二行词尾嵌两枚小贴纸**
  做法：Press Start 2P 像素字＋#85D743，标题字间直接插两张 h-[0.85em] 贴纸图并各转 -8°/6°；不常见在滚动前 25% 按 22 个字符从右往左删字，末尾闪烁方块光标
  电脑 · 预览可见 · 来自「Glitch Pulse」（整页） · [预览图](../sources/framesbase/items/f892efd4-0fd7-4f73-8528-d62956626b84/preview.webp) · [提示词](../sources/framesbase/items/f892efd4-0fd7-4f73-8528-d62956626b84/prompt.md)
- **两行居中标题，第二行63%白，下接说明与按钮，正对光门**
  做法：不常见在文案块按视频里光门位置定位：用缩放变量算出门顶坐标，让按钮底边始终停在门顶上方38.5设计像素，任何屏幕比例都对准；两行标题各自遮罩上滑入场
  电脑＋手机 · 预览可见 · 来自「Global gateway」（只有首屏） · [预览图](../sources/framesbase/items/f8e25246-daa3-42c6-9502-2e0895a676af/preview.webp) · [提示词](../sources/framesbase/items/f8e25246-daa3-42c6-9502-2e0895a676af/prompt.md)
- **居中徽标、两行标题、白胶囊按钮，下方压一块宽样机**
  做法：不常见在前景草地 PNG 叠在样机下沿（z-30 高于样机 z-10）做出景深。滚动视差按提示词：文案上移 -60% 并在 60% 进度淡出，样机 -25%，草地 +20%
  电脑 · 预览可见 · 来自「Growth Marketing SaaS」（只有首屏） · [预览图](../sources/framesbase/items/cf7111be-de60-494b-b49b-befbdd556e0a/preview.webp) · [提示词](../sources/framesbase/items/cf7111be-de60-494b-b49b-befbdd556e0a/prompt.md)
- **shelter、user、info 三个巨字左右错位排成阶梯**
  做法：三词各自绝对定位：18vw、字距 -0.04em、行高 0.95，分别贴左 18%、贴右 38%、左 28% 处 58% 高；不常见在 18px 细体说明小字塞进词与词的空当，底部 h-48 渐变收黑
  电脑 · 预览可见 · 来自「Guardnet」（整页） · [预览图](../sources/framesbase/items/9fe3b9f8-0157-4407-88ee-e3243922ae20/preview.webp) · [提示词](../sources/framesbase/items/9fe3b9f8-0157-4407-88ee-e3243922ae20/prompt.md)
- **一句标语拆到左右两端，每端小引词在上、大写巨词在下**
  做法：左组左对齐、右组右对齐，同一底线(md:items-end)；巨词9vw、PP Editorial Ultralight、行高0.85；下面一行放80px圆角图标、两列“01—”编号说明和玻璃胶囊按钮。不常见在把一句话劈到画面两侧
  电脑＋手机 · 预览可见 · 来自「Immersive Studio」（只有首屏） · [预览图](../sources/framesbase/items/fb4f62d5-26d1-43d5-a640-76e073e09c3f/preview.webp) · [提示词](../sources/framesbase/items/fb4f62d5-26d1-43d5-a640-76e073e09c3f/prompt.md)
- **偏右的细体长句标题带下划线关键词，左上一枚磨砂圆形旋转字章**
  做法：标题用 2.1rem 细体整句、行高 1.45，关键词加下划线，三句每 5s 交叉淡入；左侧 112px 磨砂圆内环形文字 20s 一圈；不常见在底部一行“2 H W”坐标小字两端对齐，下接细线说明栏
  电脑＋手机 · 预览可见 · 来自「Innovation Studio」（只有首屏） · [预览图](../sources/framesbase/items/697977ed-47ea-4b07-baef-d26211655ba4/preview.webp) · [提示词](../sources/framesbase/items/697977ed-47ea-4b07-baef-d26211655ba4/prompt.md)
- **顶栏右侧四组灰标签白数值的元信息，左下两行大标题**
  做法：顶栏不放导航，右侧四列“标签 13px #80838e／数值 13px 白”（类型、投资方、日期、行业），下接 white/15 细线；标题 clamp(48px,10vw,140px)、行高 0.9 贴左下，逐行遮罩上滑
  电脑 · 预览可见 · 来自「Investor Deck」（整页） · [预览图](../sources/framesbase/items/7bc4b52a-bb68-4ce7-be12-327e7cd6d7a7/preview.webp) · [提示词](../sources/framesbase/items/7bc4b52a-bb68-4ce7-be12-327e7cd6d7a7/prompt.md)
- **左下眉题、标题、说明、方角双按钮和闪光标的安装命令**
  做法：内容贴底，底部256px渐变接页底色；按钮白底和橄榄#3B3B34，全无圆角；末行绿色$加pip命令，块光标1.2秒闪烁；右侧投资方名单用斜杠分隔。少见处：终端命令当第三个入口
  电脑＋手机 · 预览可见 · 来自「Model Infrastructure」（只有首屏） · [预览图](../sources/framesbase/items/20f8dc59-34e8-4c42-b7ee-7351585f3353/preview.webp) · [提示词](../sources/framesbase/items/20f8dc59-34e8-4c42-b7ee-7351585f3353/prompt.md)
- **底部贴边超粗宽体字PLATE®，A换成手写花体，上方一行小标签**
  做法：字标BBH Bartle 13.6vw（1470宽时200px）、行高100%、不换行；中间A用Alex Brush并设line-height:0，避免花体撑高行盒，笔画自然盖住T；不常见在粗宽体字标里嵌一个花体字母
  电脑 · 预览可见 · 来自「Motion Frame」（整页） · [预览图](../sources/framesbase/items/92fc0c08-06e5-40e3-9848-6ecad1c036e6/preview.webp) · [提示词](../sources/framesbase/items/92fc0c08-06e5-40e3-9848-6ecad1c036e6/prompt.md)
- **四圈同心轨道散布头像，中心大数字“19k+ Specialists”**
  做法：四圈直径353/501/649/797，30到60s不同方向慢转；边框是上下渐隐的1px渐变加mask；头像用rotate(X)translate(r)rotate(-X)定位，圆形与圆角方形混排各带彩色光晕；中心数字计数上涨
  电脑＋手机 · 预览可见 · 来自「Network Hero」（只有首屏） · [预览图](../sources/framesbase/items/59197331-d4b4-4812-8f55-550d000f3c47/preview.webp) · [提示词](../sources/framesbase/items/59197331-d4b4-4812-8f55-550d000f3c47/prompt.md)
- **约 75% 宽的巨型大写字，上实下虚，跑车叠在字的下半**
  做法：巨字层在视频之上、内容之下，填竖向渐变 white/83%→white/12%，越往下越透，与车身重叠处不抢画面；距顶 15%、最宽 1073px；右下 Bebas Neue 64px 两行标语
  电脑＋手机 · 预览可见 · 来自「New Era Automotive Hero」（只有首屏） · [预览图](../sources/framesbase/items/d4a50ec8-ab17-4170-9ed5-d17b774cd211/preview.webp) · [提示词](../sources/framesbase/items/d4a50ec8-ab17-4170-9ed5-d17b774cd211/prompt.md)
- **左上两行大标题加描边胶囊钮，右下两张方形项目卡对角错开**
  做法：少见在两卡放进 grid-cols-2，卡1占1列1行并 self-end，卡2占2列2行，靠格位排出台阶；卡片正方形、底部黑渐变压字；背景上加白点小标注（282 M）和竖排Scroll提示
  电脑＋手机 · 预览可见 · 来自「Obsidian Hero」（只有首屏） · [预览图](../sources/framesbase/items/708037ca-9dc1-4cb0-b2f9-e8cf53ef1459/preview.webp) · [提示词](../sources/framesbase/items/708037ca-9dc1-4cb0-b2f9-e8cf53ef1459/prompt.md)
- **OR白色、BIT粉色渐变的巨型衬线字，像素百合立在字前方**
  做法：字号min(27.8vw,55dvh)，BIT用180°#ffc5dc→#fd86db渐变裁字；花z-index高于字、压住BIT，O单独scaleX(1.0866)；两段说明放左下右下角。不常见在主体图压字
  电脑＋手机 · 预览可见 · 来自「Orbit Flora」（只有首屏） · [预览图](../sources/framesbase/items/b6b27a95-4247-4e38-ade0-9ef66084ae2b/preview.webp) · [提示词](../sources/framesbase/items/b6b27a95-4247-4e38-ade0-9ef66084ae2b/prompt.md)
- **窗内深色电影感横幅，左侧标签胶囊、书名、白色主按钮与描边按钮**
  做法：左侧 90deg 黑渐变压暗到76%处透明；右下两个玻璃圆形箭头，左键 .45 透明；不常见在缩放：横幅设容器查询，--u: min(1cqi, 2.3cqh)，所有尺寸按 --u 倍数整体缩放
  电脑＋手机 · 预览可见 · 来自「Reading Library」（应用界面） · [预览图](../sources/framesbase/items/226a0cf0-7336-4461-8496-ecd58088e1f4/preview.webp) · [提示词](../sources/framesbase/items/226a0cf0-7336-4461-8496-ecd58088e1f4/prompt.md)
- **protect/your/data 三词左右错位成阶梯，数据挂在角落**
  做法：三个词各自绝对定位，13vw、行高0.95、字距-0.04em，分放左18%、右38%、左偏28%的58%处；说明小字塞在词间左侧；三组数字放右上、左下、右下，各配一条旋转±20°的1px白色40%斜线。不常见在斜线引出的散布数据
  电脑＋手机 · 预览可见 · 来自「Securify Data Security」（只有首屏） · [预览图](../sources/framesbase/items/7287fe2a-aa13-4a65-97bd-3ae3b25bfe4b/preview.webp) · [提示词](../sources/framesbase/items/7287fe2a-aa13-4a65-97bd-3ae3b25bfe4b/prompt.md)
- **居中点阵像素字标题，上方宽字距眉题，底部左说明右按钮**
  做法：标题用点阵字体BubbledotICG约72px，眉题JetBrains Mono字距0.3em白70%；底栏左小字说明，右黑底按钮内嵌44px橙#F64302方块放箭头；依次上浮延迟0.3/0.5/0.7/0.9s。少见在点阵显示字体做主标题
  电脑＋手机 · 预览可见 · 来自「Sentinel」（整页） · [预览图](../sources/framesbase/items/ad42285c-ab93-4884-a40b-f46a231c09bd/preview.webp) · [提示词](../sources/framesbase/items/ad42285c-ab93-4884-a40b-f46a231c09bd/prompt.md)
- **超大 Galaxy Home 标题被前景楼宇挡住一部分，两侧小字分列**
  做法：四层叠放：天空图→标题（最大 14rem，#A8B4FF→白 竖向渐变字＋mix-blend-lighten）→左右两句副标题（mix-blend-overlay）→抠图楼宇；天空和楼宇共用 0→8% 视差，楼宇压住标题下缘
  电脑＋手机 · 预览可见 · 来自「Sky Estate」（整页） · [预览图](../sources/framesbase/items/5e4c3aad-d51f-4405-b537-22117c3642d5/preview.webp) · [提示词](../sources/framesbase/items/5e4c3aad-d51f-4405-b537-22117c3642d5/prompt.md)
- **标题第二行近黑字融进夜空，底部早晚双行分段切换**
  做法：标题56px，“for the next”夜间#10100F、白天白色，反差互换；底部米色15%玻璃分段控件，每格大标签+11px副文案，滑块回弹并切换整张背景。不常见在用分段控件切换首屏场景
  电脑＋手机 · 预览可见 · 来自「Solar Energy Hero」（只有首屏） · [预览图](../sources/framesbase/items/3f3c5354-832c-40a2-9b4a-da06b857e72e/preview.webp) · [提示词](../sources/framesbase/items/3f3c5354-832c-40a2-9b4a-da06b857e72e/prompt.md)
- **斑驳车窗框盖在晚霞视频上，标题输入框都在窗内**
  做法：视频上叠一张透明车窗PNG铺满；不常见在用前景框图把视频变成窗外风景，并做train-bob：translateY 0→-6px 3s循环，常驻scale(1.03)防露边。标题Instrument Serif 5.5rem
  电脑＋手机 · 预览可见 · 来自「Stillmind」（只有首屏） · [预览图](../sources/framesbase/items/319b3f14-8a14-4406-a9cb-3cf324c25068/preview.webp) · [提示词](../sources/framesbase/items/319b3f14-8a14-4406-a9cb-3cf324c25068/prompt.md)
- **左上两行超大粗体字标，下铺片假名，右半栏放时钟、导航和短文**
  做法：页面硬分两半：字标占左半，时钟、导语、版权都对齐右半左边线；片假名行用 space-between 撑满字标宽度；整层 mix-blend-mode:difference 叠在视频上。不常见在片假名撑宽和对半分栏
  电脑＋手机 · 预览可见 · 来自「Tokyo Nocturne」（整页） · [预览图](../sources/framesbase/items/3391516a-2ff0-4ad4-8aee-89acbfbae077/preview.webp) · [提示词](../sources/framesbase/items/3391516a-2ff0-4ad4-8aee-89acbfbae077/prompt.md)
- **视频铺底，底部两行Dirtyline装饰字大标题，带花体替换字形**
  做法：不常见在视频随滚动擦洗：ScrollTrigger把滚动进度换成播放时间，seek未完成时排队等seeked再跳。标题clamp(4rem,15vw,317px)、行高0.85，滚动时逐字下坠并淡出
  电脑＋手机 · 预览可见 · 来自「Urban Jungle」（只有首屏） · [预览图](../sources/framesbase/items/0191170f-7b80-4f99-9d73-d504767b62fa/preview.webp) · [提示词](../sources/framesbase/items/0191170f-7b80-4f99-9d73-d504767b62fa/prompt.md)
- **左上三行科幻字体标题，右栏参数表，左下玻璃卡，右下标签胶囊**
  做法：文字推到四角，中间留给人像视频；不常见在右栏放TECHNICAL SPECS参数表：左标签右数值、等宽字、行间border-white/20细线；桌面加径向暗角，手机视频只占上半屏50vh
  电脑＋手机 · 预览可见 · 来自「Viktor Portfolio」（只有首屏） · [预览图](../sources/framesbase/items/e9cdbaed-d836-4a8b-93ca-24af8614be66/preview.webp) · [提示词](../sources/framesbase/items/e9cdbaed-d836-4a8b-93ca-24af8614be66/prompt.md)
- **黑底四等分细竖线，标题和说明对齐第二栏，眉题前加斜纹小块**
  做法：三条1px竖线rgba(255,255,255,.062)把画面四等分；标题67.5px/行高66、说明#a9a9a9 18/33都从第二栏起排；斜纹用45°重复渐变2.1px白条，眉题、侧栏、自动保存处反复出现；不常见在斜纹块当贯穿符号
  电脑＋手机 · 预览可见 · 来自「Website Builder」（只有首屏） · [预览图](../sources/framesbase/items/d9888639-5064-4654-be6d-ebfa3d19b23f/preview.webp) · [提示词](../sources/framesbase/items/d9888639-5064-4654-be6d-ebfa3d19b23f/prompt.md)
- **巨型衬线大写词压在主体后面，主体玻璃球盖住字的下半部**
  做法：不常见在前后层夹字：背景图z10、标题z20、半透明PNG叠层z25盖在字上，字像被主体遮住；标题Instrument Serif 16rem、行高0.9、居中贴顶；底层再垫48px细线网格（透明度0.1）随鼠标视差
  电脑＋手机 · 预览可见 · 来自「Wellness Devicex」（只有首屏） · [预览图](../sources/framesbase/items/8c953938-990d-4dee-bb23-0afd88dbfbd7/preview.webp) · [提示词](../sources/framesbase/items/8c953938-990d-4dee-bb23-0afd88dbfbd7/prompt.md)
- **左下磨砂方角文字卡，紫色大圆按钮一半探出卡片右边**
  做法：卡白 16%＋blur 80px、零圆角，72px 衬线标题带斜体词；#CB8DFF 圆钮直径 80–112px，right 设负半径，一半探出卡外。不常见在按钮骑在卡片边上
  电脑 · 仅提示词 · 来自「Bloom」（整页） · [预览图](../sources/framesbase/items/b1dd3d54-896f-4580-a4e6-073ca9fbb753/preview.webp) · [提示词](../sources/framesbase/items/b1dd3d54-896f-4580-a4e6-073ca9fbb753/prompt.md)
- **视频播完后底部巨型标题逐字升起，陨石图压在字上，背后两圈细线圆**
  做法：不常见在分层做前后景：标题z5、去底陨石PNG z8盖住字下半截；视频1.56倍速播完才逐字上移（每字隔60ms）；两圈1px白圆从scale(4)/(5)缩回后6s/8s呼吸。预览只拍到星空和陨石
  电脑＋手机 · 仅提示词 · 来自「Cosmic」（只有首屏） · [预览图](../sources/framesbase/items/0152f0b3-14b7-4095-8397-e9cba9b67849/preview.webp) · [提示词](../sources/framesbase/items/0152f0b3-14b7-4095-8397-e9cba9b67849/prompt.md)

## 推荐度 3（90 条）

- 居中三行衬线标题，下方副标和左字右箭头的奶油按钮 · 电脑 · 预览可见 · 来自「3D Future Flora」（只有首屏） · [目录](../sources/framesbase/items/9b0e79ff-3d63-41f4-aeee-b28528db6b32/)
- 居中两行标题，“3D worlds”下垫蓝色色条，下排命令框加蓝色按钮 · 电脑＋手机 · 预览可见 · 来自「3D Story」（整页） · [目录](../sources/framesbase/items/be027362-7f71-4e35-b11a-9ae8bac997f4/)
- 左下两行标题含斜体衬线词，右下小字栏，标志居中的分列导航 · 电脑 · 预览可见 · 来自「Acreage Farming」（整页） · [目录](../sources/framesbase/items/3c8f451f-9163-4426-a00b-c670a8dfc6d2/)
- 徽标、两行标题、双按钮沉在画面下部，底边三项数据横排 · 电脑＋手机 · 预览可见 · 来自「Agent Wave」（只有首屏） · [目录](../sources/framesbase/items/30fd89b1-b165-41d2-bacf-c49f1fc479ab/)
- 胶囊徽标＋白色大标题，末词换衬线斜体，下接白、灰两枚胶囊键 · 电脑 · 预览可见 · 来自「AI Automation Hero」（只有首屏） · [目录](../sources/framesbase/items/84218497-6273-45bc-900c-684b7429073d/)
- 琥珀色小徽标、两行衬线标题夹一个斜体词、浅色副文，人物视频铺满 · 电脑 · 预览可见 · 来自「AI Companions」（只有首屏） · [目录](../sources/framesbase/items/f3a338e5-595a-4d0f-ade9-8d27da626914/)
- 居中白字标题夹衬线斜体词，下方玻璃胶囊邮箱框内嵌白按钮 · 电脑 · 预览可见 · 来自「AI Designer Agency」（整页） · [目录](../sources/framesbase/items/4b8b2bd3-30c0-4d83-b30f-471df9157905/)
- 左下两行细体大标题，绿色实心按钮配下划线文字链 · 电脑 · 预览可见 · 来自「AKOR Security」（整页） · [目录](../sources/framesbase/items/9aaf3e8d-888c-4c6b-a20e-c88515b85037/)
- 三个单词各占一行带句点的白色大标题，右侧三个小数字指标 · 电脑＋手机 · 预览可见 · 来自「Apex Pulse」（只有首屏） · [目录](../sources/framesbase/items/599d5e1a-40f3-4f0d-819a-24814d3fefc4/)
- 顶部双段公告胶囊，两行大标题，紫色实心加玻璃描边双按钮 · 电脑 · 预览可见 · 来自「Apex SaaS」（只有首屏） · [目录](../sources/framesbase/items/c3f5b0da-9a54-465e-926c-7d8bd9fb1655/)
- 四角布局：左上标志加三行标语、右上椭圆按钮、右下细衬线大标题 · 电脑＋手机 · 预览可见 · 来自「Art Landing」（只有首屏） · [目录](../sources/framesbase/items/288baab1-70c0-4386-b174-66ec4854450e/)
- 居中衬线标题、玻璃邮箱框、两行说明、玻璃按钮，底部三枚社交圆钮 · 电脑 · 预览可见 · 来自「Asme」（只有首屏） · [目录](../sources/framesbase/items/c5078d23-4d3b-4fd6-8754-14085e15b163/)
- 玻璃小标签、两行白色标题、白实心加玻璃双按钮 · 电脑＋手机 · 预览可见 · 来自「Audio Showcase」（只有首屏） · [目录](../sources/framesbase/items/f4ded56d-d79f-4724-96cb-513f96b6e1b8/)
- 四角分布：左中短段落、左下候补邮箱、右下巨型字标 · 电脑 · 预览可见 · 来自「Automotive AI」（只有首屏） · [目录](../sources/framesbase/items/ce534c4e-5e6d-46af-92bf-27140ce5ab37/)
- 左对齐三行粗窄大写标题，下接说明、黑按钮和奖章小字 · 电脑＋手机 · 预览可见 · 来自「Bold Studio」（只有首屏） · [目录](../sources/framesbase/items/9709eb49-e34d-4dcc-957d-18297a7d4fda/)
- 左侧三行细体大标题，右上叠放头像组和玻璃评价卡 · 电脑＋手机 · 预览可见 · 来自「Build Unit」（整页） · [目录](../sources/framesbase/items/ae3e3baa-1f44-4479-a5d0-320b9f0498dc/)
- 胶囊徽标、两行混排标题、一行副标、播放图标白按钮居中竖排 · 电脑 · 预览可见 · 来自「Buzzentic Agency」（只有首屏） · [目录](../sources/framesbase/items/31e620ae-b45c-4254-a5a9-7c163c11f9f5/)
- 居中发光衬线大标题，白色发光胶囊按钮，左下声音提示 · 电脑＋手机 · 预览可见 · 来自「Celestial Renewal」（只有首屏） · [目录](../sources/framesbase/items/97be8f74-6305-4896-bb8b-b24b1d70d446/)
- 上半屏逆光人物照，头像组压在照片下缘，细体奶油大标题 · 手机 · 预览可见 · 来自「Church Community」（应用界面） · [目录](../sources/framesbase/items/2aeefa36-09e6-45f0-a6f1-e0e6ed30bc9b/)
- 光环视频铺底，短横线眉标、居中两行大标题、副文和双按钮 · 电脑＋手机 · 预览可见 · 来自「Cinematic Brand」（只有首屏） · [目录](../sources/framesbase/items/8e9e6078-ad0a-44fa-bb89-b07deb555012/)
- 左下两行细体大标题加蓝色胶囊按钮，右下角浮一张白色产品小卡 · 电脑＋手机 · 预览可见 · 来自「Clarity Core」（只有首屏） · [目录](../sources/framesbase/items/9a34a1e6-fbf6-4a67-bb69-b0abb9bec60c/)
- 居中两行大标题、一行副标、双按钮，下方三头像信任条 · 电脑＋手机 · 预览可见 · 来自「ClearInvoice SaaS Hero」（只有首屏） · [目录](../sources/framesbase/items/4a6b9be7-dd41-4201-8881-30439fa2935b/)
- 左对齐大写粗体标题配绿色句点，上方 200px 玻璃小卡，背景竖线分格 · 电脑＋手机 · 预览可见 · 来自「CodeNest Coding Platform」（只有首屏） · [目录](../sources/framesbase/items/3bcacb1b-bb2b-42c3-881f-77a543c509fd/)
- 无衬线混衬线斜体词的两行标题，第二行右缩，下接双胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Creative Matter」（只有首屏） · [目录](../sources/framesbase/items/1322193f-9344-4844-a511-e488e071e33c/)
- 左格三行巨型大写标题，右格视频上竖放银色卡片、居中短文和圆点 · 电脑＋手机 · 预览可见 · 来自「Crypto Vault」（只有首屏） · [目录](../sources/framesbase/items/871ba2c2-9def-4366-87f0-26b5f1e577ac/)
- 左对齐两行粗标题、等宽字副文案、红色直角箭头按钮，底部三组数字 · 电脑＋手机 · 预览可见 · 来自「Cyber Layer」（只有首屏） · [目录](../sources/framesbase/items/90e5943a-98cb-4c26-a188-c0f7fd86023f/)
- 左上科幻字标题加三个圆图标钮，左下玻璃商品卡，右下参数表 · 电脑＋手机 · 预览可见 · 来自「Cyber Ronin」（只有首屏） · [目录](../sources/framesbase/items/57dae22c-8a39-44f9-8b02-0fca0b77591c/)
- 居中小眉题、斜体衬线大名字、轮换角色词和黑白双胶囊键 · 电脑 · 预览可见 · 来自「Dark Portfolio Hero」（只有首屏） · [目录](../sources/framesbase/items/730adc7c-5879-42d0-9944-d2c8a06c4a38/)
- 居中新品标签、两行衬线标题、紫色与深紫两枚按钮 · 电脑＋手机 · 预览可见 · 来自「Datacore Booking」（只有首屏） · [目录](../sources/framesbase/items/dc63cc04-ff4c-4b2c-bdb5-0766387e8468/)
- 左侧两行大标题加白胶囊按钮，右下编号眉题和说明 · 电脑 · 预览可见 · 来自「Deep Neural Interface」（整页） · [目录](../sources/framesbase/items/c03fa2d8-a856-4994-98c7-c4dac8ce3ca6/)
- 导航下两角各一段小字，中部小标签、两行大标题和黑色胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「DesignPro Academy」（只有首屏） · [目录](../sources/framesbase/items/85a94eb4-f04d-444d-860f-875681a42d6f/)
- 衬线细标题在上，超大粗体渐变字在下，白胶囊按钮配文字链 · 电脑 · 预览可见 · 来自「Digitwist AI Builder」（只有首屏） · [目录](../sources/framesbase/items/25bb4b63-2ffc-463f-b203-8885d84bf16b/)
- 左侧两行衬线大标题加小字，右侧并排三张方形图卡 · 电脑＋手机 · 预览可见 · 来自「Dreamcore Landing」（只有首屏） · [目录](../sources/framesbase/items/6206c264-649d-4354-acf7-1a79a869eca4/)
- 居中两行标题，第二行青蓝流光渐变字，下接白胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Email Landing Page」（整页） · [目录](../sources/framesbase/items/aaf5f982-6ac6-49fa-a181-eb26dac7ab79/)
- 竖版视频头图，顶部品牌、底部衬线标题和荧光绿胶囊 · 电脑 · 预览可见 · 来自「Email Marketing」（整页） · [目录](../sources/framesbase/items/b68ca730-81b8-4407-85c5-a79dc1dc2949/)
- 左下三行标题末行换衬线体，右下 75% 细线进度环配说明 · 电脑＋手机 · 预览可见 · 来自「EVR Ventures」（只有首屏） · [目录](../sources/framesbase/items/c1a28e23-4473-4bc4-b201-20359862f5a2/)
- 视频铺底，居中细体白字标题，下方一张宽输入卡代替按钮 · 电脑＋手机 · 预览可见 · 来自「Fastshot」（只有首屏） · [目录](../sources/framesbase/items/bb9cee0c-c3c6-49d8-b5ad-fefe4190a1f2/)
- 左下标题首词霓虹绿手写体，右上白色胶囊按钮紧贴圆形菜单键 · 电脑＋手机 · 预览可见 · 来自「FinancialFocus」（只有首屏） · [目录](../sources/framesbase/items/7b821738-a59f-41b8-b3fb-592be9beaf56/)
- 居中两行标题，第二行斜体衬线，双按钮下接产品截图 · 电脑 · 预览可见 · 来自「Finlytic AI Agent」（只有首屏） · [目录](../sources/framesbase/items/2240048e-a081-4edc-b744-b9731ba7a7d4/)
- 视频铺底，顶部居中衬线大标题、白色说明和玻璃胶囊按钮 · 电脑 · 预览可见 · 来自「Focus AI」（整页） · [目录](../sources/framesbase/items/7ea7aec1-499d-46f6-ad90-2d3fcacf71fe/)
- 视频主体居中，标题压在顶部，按钮和交付时长小字压在底部 · 电脑 · 预览可见 · 来自「Framelix 3D Studios」（整页） · [目录](../sources/framesbase/items/49faf7a1-62f5-4e48-8a07-5e907d3525bf/)
- 视频铺底，左下角两行标题、等宽小字副文、白胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Futuristic Tech」（只有首屏） · [目录](../sources/framesbase/items/80609126-2f89-46e0-9353-6aef03ae79cf/)
- 黑底斜向主体占满画面，左下标题、说明和直角白色小按钮 · 电脑＋手机 · 预览可见 · 来自「Geno Trace」（只有首屏） · [目录](../sources/framesbase/items/63cb876e-3b95-4243-a52e-2d9c3136236f/)
- 左侧衬线大标题带斜体强调词，双胶囊按钮，右侧圆角流程编排截图 · 电脑＋手机 · 预览可见 · 来自「Global CTA Footer」（只有首屏） · [目录](../sources/framesbase/items/31198968-94ab-4c75-8db0-45f922971eb9/)
- 230px 单词标题、两行灰白副标、玻璃描边胶囊按钮 · 电脑 · 预览可见 · 来自「Grow AI Talent Platform」（只有首屏） · [目录](../sources/framesbase/items/b3da480d-8366-4ede-8aca-359fcd5fb5a2/)
- 无大标题，两段白色说明小字一右上一左下绕着中间发光团块 · 电脑 · 预览可见 · 来自「Guardnet Demo」（只有首屏） · [目录](../sources/framesbase/items/6e37b4d6-da13-449a-9c19-17fec3bca234/)
- 左上小标签加三行大标题，左下说明段和白色箭头按钮，上下分开 · 电脑＋手机 · 预览可见 · 来自「Immersive Ocean」（只有首屏） · [目录](../sources/framesbase/items/bcdefd54-da34-4571-860e-ed6ab6888269/)
- 居中两行标题，白实心与玻璃双按钮，底部玻璃标语条 · 电脑 · 预览可见 · 来自「Impressive Hero」（只有首屏） · [目录](../sources/framesbase/items/6505caae-0936-471b-a5c0-5ad0b44a2a70/)
- 视频铺底，居中衬线标题，玻璃邮箱框嵌白色圆形箭头键 · 电脑＋手机 · 预览可见 · 来自「Innovation」（整页） · [目录](../sources/framesbase/items/54078ffa-0e18-4d8d-a5f2-02a7c89c8f02/)
- 视频装进留黑边的圆角框，标题居中，左上竖排短句，底部三列 · 电脑＋手机 · 预览可见 · 来自「Innovation Lab」（只有首屏） · [目录](../sources/framesbase/items/c285cfa5-173f-4bf1-8fa6-afa966cc2019/)
- 左侧两行细字大标题、灰色副标题、白胶囊加纯文字次按钮 · 电脑＋手机 · 预览可见 · 来自「Intelligence Layer」（只有首屏） · [目录](../sources/framesbase/items/4f4243af-0c88-4e21-872e-c64afed1bde6/)
- 上方居中两行标题，左下说明文字，右下说明加橙色胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Interactive Discovery」（只有首屏） · [目录](../sources/framesbase/items/1cf51035-b2fb-4b70-b665-8b2763f0a2df/)
- 居中斜体衬线大标题，上方New徽章，下方玻璃按钮和播放文字钮 · 电脑 · 预览可见 · 来自「Liquid Glass Agency」（整页） · [目录](../sources/framesbase/items/19fb254c-1e7a-4897-bc2d-a5ff350f7ac6/)
- 左下徽标胶囊和夹衬线斜体词的标题，右下右对齐段落 · 电脑＋手机 · 预览可见 · 来自「Luminara」（只有首屏） · [目录](../sources/framesbase/items/feadd465-1fa9-4bab-b4f5-133d23631a56/)
- 左下对齐两句大标题、三行说明和白色小圆角按钮 · 电脑 · 预览可见 · 来自「Luminex」（只有首屏） · [目录](../sources/framesbase/items/e7433dcb-6008-423c-991d-a69cc99c609d/)
- 居中标题夹一个斜体衬线词，下接玻璃邮箱胶囊 · 电脑 · 预览可见 · 来自「Mindloop Landing」（整页） · [目录](../sources/framesbase/items/1ebbc0e8-993f-4591-8982-14a64aa52ad5/)
- 左侧FALL › INTO REVERIE衬线标题，右侧三张圆角方卡 · 电脑＋手机 · 预览可见 · 来自「Mythic Naturecore」（只有首屏） · [目录](../sources/framesbase/items/b0d60757-c9d6-44e0-86c1-45acfa86d9ad/)
- 左侧窄高衬线大写标题行行变淡，左下竖向渐变细线和说明 · 电脑＋手机 · 预览可见 · 来自「Mythic VPN」（只有首屏） · [目录](../sources/framesbase/items/abb80161-e462-4a7a-abe4-f37e93706757/)
- 左下右下对角两组等宽字标题，背后巨字水印 · 电脑＋手机 · 预览可见 · 来自「Neon Logic」（整页） · [目录](../sources/framesbase/items/9885c972-ba86-4d5c-b2e1-9287a8a61218/)
- New小徽标胶囊、两行标题末词衬线斜体、居中胶囊按钮 · 电脑 · 预览可见 · 来自「Neuralyn」（只有首屏） · [目录](../sources/framesbase/items/c9b95dce-8e86-4c87-acf6-d393f2189d2d/)
- 居中钩标与悬浮球鞋，底部四行居中标题混排斜体衬线 · 电脑 · 预览可见 · 来自「Nike Premium Landing」（只有首屏） · [目录](../sources/framesbase/items/562a4221-9e7b-4920-a1d9-30ef9d92a324/)
- 左上超大 ROCKETS，右侧右对齐说明文字和白色方角按钮 · 电脑＋手机 · 预览可见 · 来自「NOVA Space Systems」（整页） · [目录](../sources/framesbase/items/72bc83ea-aefe-4efa-aa60-7e9627151c85/)
- 黑底视频铺满，顶部小字导航，居中两行 Garamond 大写标题 · 电脑＋手机 · 预览可见 · 来自「Organic Odyssey」（只有首屏） · [目录](../sources/framesbase/items/2facb1c5-7e7f-475b-a6cb-4b58bde1b33f/)
- 底部居中三行衬线标题，上方YC玻璃小牌，下方灰色副标题 · 电脑＋手机 · 预览可见 · 来自「Peakline Redshift」（只有首屏） · [目录](../sources/framesbase/items/f2b83e6a-88a5-4ac5-bd5f-3100feb26292/)
- 居中公告胶囊、两行大标题、绿色实心和玻璃描边双按钮 · 电脑 · 预览可见 · 来自「Planet Orbit」（只有首屏） · [目录](../sources/framesbase/items/e4e1feae-e074-4ce4-ba9c-69a4ef54936e/)
- 左下评分时长日期一行、大标题、白底播放键加玻璃按钮，右下前后切换 · 电脑＋手机 · 预览可见 · 来自「Portal」（只有首屏） · [目录](../sources/framesbase/items/6dfac064-364c-42fe-b9f1-db0fcdf4f836/)
- 居中衬线斜体大名字，下方轮换身份词和黑白双按钮 · 电脑 · 预览可见 · 来自「Portfolio Cosmic」（整页） · [目录](../sources/framesbase/items/9e8ed655-6ab9-479b-9499-4cf1676a7cc2/)
- 居中220px细体标题，末词渐变，下接副文和描边胶囊按钮 · 电脑 · 预览可见 · 来自「Power AI」（只有首屏） · [目录](../sources/framesbase/items/5b00cc63-8fbb-43a3-9e18-fae8368443fb/)
- 内缩圆角视频框，左下巨字 Prisma 带上标星号，右侧小字加按钮 · 电脑＋手机 · 预览可见 · 来自「Prisma Creative Studio」（整页） · [目录](../sources/framesbase/items/08d773cd-ac28-492f-8116-9d3abb0478b1/)
- 视频铺底，左侧斜体衬线大标题、玻璃胶囊徽标和玻璃按钮 · 电脑 · 预览可见 · 来自「Pro AI Deck」（整页） · [目录](../sources/framesbase/items/9a365d37-b4bf-4260-b1df-1bfd870d4686/)
- 角色居中，底部一行宽体大写标题横贯全宽，左上标志旁三行小字 · 电脑＋手机 · 预览可见 · 来自「Pulse 3D」（只有首屏） · [目录](../sources/framesbase/items/ce169659-7033-4e97-a4c7-429fd5e851a2/)
- 视频铺底，标题、说明和白色胶囊按钮集中在底部居中 · 电脑＋手机 · 预览可见 · 来自「Rare Gallery」（只有首屏） · [目录](../sources/framesbase/items/63505def-be71-4e54-8caa-7d42f90bce82/)
- 左三行细体大标题，右上头像叠排加玻璃评价卡 · 电脑＋手机 · 预览可见 · 来自「Remote Dev Collective」（整页） · [目录](../sources/framesbase/items/3571697c-aa44-4764-aac3-44c6b2a1a05a/)
- 左下两行大标题，右侧右对齐说明，右下两段式按钮 · 电脑 · 预览可见 · 来自「Scroll Landing Page」（整页） · [目录](../sources/framesbase/items/801690d8-4a7d-42fd-b164-2dd4aa19fc65/)
- 左下角大写粗体标题，品牌词白色、AI绿色，下接两枚按钮 · 电脑＋手机 · 预览可见 · 来自「Sentinel AI」（只有首屏） · [目录](../sources/framesbase/items/59bd37f0-4cc4-4e2b-97b8-df41153ec5d0/)
- 视频只占上半屏，标题、说明和双按钮放在下方黑底居中 · 电脑 · 预览可见 · 来自「Synapse Dark Hero」（只有首屏） · [目录](../sources/framesbase/items/798da891-7b7d-44a3-9bf3-deab91c60177/)
- 黑底左文右图：两行白色大标题、灰色说明、白色直角按钮 · 电脑＋手机 · 预览可见 · 来自「Systema」（只有首屏） · [目录](../sources/framesbase/items/8b13e5df-52ff-4f48-b3fe-d645147e40c1/)
- 左上标题加切角按钮；左下玻璃卡含头像、两行标题和白按钮 · 电脑＋手机 · 预览可见 · 来自「Targo Logistics Hero」（只有首屏） · [目录](../sources/framesbase/items/7cb7d03b-54d4-49a1-9deb-46c62f4b0f89/)
- 居中衬线大标题，部分词变灰，下接灰色段落和大号玻璃按钮 · 电脑 · 预览可见 · 来自「Velorah」（只有首屏） · [目录](../sources/framesbase/items/6928160f-2d98-4172-8c88-6a8c3ca0a4ea/)
- 600×800 圆角竖框，衬线标题、段落、玻璃按钮偏上居中，品牌名贴底 · 电脑 · 预览可见 · 来自「Velorah Focus」（单个模块） · [目录](../sources/framesbase/items/494d237a-9ad3-4042-aeb8-c1d3ce1328f8/)
- 底部对齐两栏：左三行大写等宽标题加批次编号，右说明和三组指标 · 电脑＋手机 · 预览可见 · 来自「Vertex Sci」（只有首屏） · [目录](../sources/framesbase/items/9797c2ea-ce70-4ffd-a5f9-675a009e3930/)
- 左下两行白字标题、副标题和白/玻璃双按钮，右下玻璃小卡 · 电脑 · 预览可见 · 来自「VEX Ventures」（只有首屏） · [目录](../sources/framesbase/items/ee1ff68b-fec0-41a1-927b-5255350ab1e7/)
- 顶部居中超大斜体衬线标题，底部左右小段说明夹着两颗胶囊按钮 · 电脑 · 预览可见 · 来自「Visual Hero」（只有首屏） · [目录](../sources/framesbase/items/86c2a591-7c9a-4bfb-9990-e910a7a059f0/)
- 玻璃小胶囊标签、两行约 100px 居中标题、白色胶囊主按钮 · 电脑 · 预览可见 · 来自「Wealth Video Hero」（只有首屏） · [目录](../sources/framesbase/items/f9b223e9-e805-4471-b22b-f63eedf1428a/)
- 方角渐变徽标、三行银灰渐变大标题、白实心加细框幽灵双按钮 · 电脑＋手机 · 预览可见 · 来自「Wealthcore」（只有首屏） · [目录](../sources/framesbase/items/49f00ed8-33ca-4ee8-90b1-ac041a37635e/)
- 居中带点徽标胶囊、两行渐隐标题、灰色说明和白色胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Web3 EOS Hero」（只有首屏） · [目录](../sources/framesbase/items/460357e5-3cdd-4895-a38a-8160eb86e221/)
- 带绿点的徽标胶囊、两行 62px 标题、说明和绿白两个胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Weblex Dark Hero」（只有首屏） · [目录](../sources/framesbase/items/a57af091-d9ff-4426-84af-6afba58cc59f/)
- 居中三行标题，后半句 60% 白，下有白色实心和玻璃描边两个胶囊按钮 · 电脑＋手机 · 预览可见 · 来自「Wellbeing OS」（只有首屏） · [目录](../sources/framesbase/items/675a7ff7-fab9-4645-8c2c-bcc450124094/)
- 四行衬线大写标题，正体与斜体逐行交替，首行缩进 · 电脑 · 预览可见 · 来自「Yacht Club」（只有首屏） · [目录](../sources/framesbase/items/7cb83158-1003-451e-badc-8975b0ef715e/)
- 左侧三行亮黄衬线大标题，右侧窄栏商品说明与戒指图 · 电脑 · 仅提示词 · 来自「Luxury Focus」（只有首屏） · [目录](../sources/framesbase/items/60b22f78-41c4-469b-8036-d6bd9bdd0eb1/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/hero-*.tsx`（17 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
