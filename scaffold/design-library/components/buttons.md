# 按钮

共 38 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（3 条）

- **黄色长胶囊按钮右端用细颈连着一个描边圆形箭头**
  做法：整颗按钮是一条 SVG 路径（viewBox 434×68）：左段实心胶囊，右侧经一段收窄的“颈”接一个空心圆，圆内白色箭头悬停从 -135° 转到 -90°；不常见在主按钮与箭头圆像水滴粘连的一体造型
  电脑＋手机 · 预览可见 · 来自「Cargo Group」（只有首屏） · [预览图](../sources/framesbase/items/e290e4f4-b171-4bed-83c6-be91b333ee57/preview.webp) · [提示词](../sources/framesbase/items/e290e4f4-b171-4bed-83c6-be91b333ee57/prompt.md)
- **绿色大圆角按钮，底部一条同色深一档的硬边阴影，像能按下去的实体键**
  做法：不常见在用无模糊硬阴影做厚度：主按钮绿底配0 4px 0 #61B800，次按钮2px灰边配4px灰阴影；按下去阴影并下移4px。高48px、圆角12px、粗体大写；另有小号、禁用、危险、幽灵款
  电脑＋手机 · 预览可见 · 来自「Duolingo Styleguide」（整页） · [预览图](../sources/framesbase/items/bac2c974-f18a-4efd-ab88-a1da622a4122/preview.webp) · [提示词](../sources/framesbase/items/bac2c974-f18a-4efd-ab88-a1da622a4122/prompt.md)
- **白色直角细长按钮，四角外各悬一个分离的L形取景框线**
  做法：不常见在外框是四个独立L角标：每角一个i元素，::before/::after画17px长、1.4px粗的横竖臂，离白底5px不相接；白底零圆角高约38px，小写字色#2b2430；悬停暖白光晕上移1px
  电脑＋手机 · 预览可见 · 来自「Global gateway」（只有首屏） · [预览图](../sources/framesbase/items/f8e25246-daa3-42c6-9502-2e0895a676af/preview.webp) · [提示词](../sources/framesbase/items/f8e25246-daa3-42c6-9502-2e0895a676af/prompt.md)

## 推荐度 4（35 条）

- **紫粉橙斜向渐变胶囊，内圈一道白色细线**
  做法：不常见在内描边：outline 2px 白、outline-offset -3px 画在按钮内侧；底色 123deg #18011F→#B600A8→#7621B0→#BE4C00，加 inset 4px 4px 12px #7721B1 内阴影
  电脑 · 预览可见 · 来自「3D Jack Portfolio」（整页） · [预览图](../sources/framesbase/items/29af4f43-2758-4c92-9e0b-43707fdc8f49/preview.webp) · [提示词](../sources/framesbase/items/29af4f43-2758-4c92-9e0b-43707fdc8f49/prompt.md)
- **深色径向渐变胶囊，左苹果图标右Download**
  做法：背景radial-gradient(ellipse,#000→#1a1a1a 50%→#343434)中心深边缘亮；悬停brightness(1.16)上移1px。少见在用径向渐变代替纯黑胶囊
  电脑＋手机 · 预览可见 · 来自「Agent Crew」（只有首屏） · [预览图](../sources/framesbase/items/04269b90-02f7-4f74-a320-f6b606d69044/preview.webp) · [提示词](../sources/framesbase/items/04269b90-02f7-4f74-a320-f6b606d69044/prompt.md)
- **黑色粗边外框套蓝色渐变方角按钮**
  做法：不常见在双层框：外层#050505底、3px #2a2a2a边、4px内边距，内层直角按钮用#0170c4到#0018ae竖向渐变加1px顶部高光、等宽字；悬停亮度1.08并上移1px
  电脑＋手机 · 预览可见 · 来自「AI Cyber Defense」（只有首屏） · [预览图](../sources/framesbase/items/58c49076-610b-4596-ac08-c4f4f954e7c6/preview.webp) · [提示词](../sources/framesbase/items/58c49076-610b-4596-ac08-c4f4f954e7c6/prompt.md)
- **深墨蓝胶囊主按钮带内高光，白色次按钮只靠阴影成形**
  做法：主按钮 #051A24 rounded-full px-7 py-3，5 层投影从 1px 到 26px 逐层变淡，再加 inset 0 2px 8px 白50% 内高光；次按钮无边框，用 0.5px 描边阴影＋0 4px 30px 投影
  电脑 · 预览可见 · 来自「AI Designer Portfolio」（整页） · [预览图](../sources/framesbase/items/bc090770-5ea2-4fb2-972b-71917db2133e/preview.webp) · [提示词](../sources/framesbase/items/bc090770-5ea2-4fb2-972b-71917db2133e/prompt.md)
- **紫粉橙渐变主按钮，外圈一道旋转的彩色细环**
  做法：外包 p-[5px] 容器，内放 600% 大的 conic-gradient(紫橙粉) 方块 3s 匀速旋转，再用 inset-2px 页面底色块挡出细环；按钮本体 135deg 渐变，左侧 28px 白描边圆圈箭头
  电脑＋手机 · 预览可见 · 来自「AI Meeting Notes」（整页） · [预览图](../sources/framesbase/items/ef420235-f4cb-446e-b9b6-726cc0c1b4f8/preview.webp) · [提示词](../sources/framesbase/items/ef420235-f4cb-446e-b9b6-726cc0c1b4f8/prompt.md)
- **白色细边框的椭圆形按钮，大写细衬线字**
  做法：用rounded-[100%]而不是rounded-full，宽按钮被拉成真正的椭圆；px-10 py-7、1px白边、透明底，悬停加白10%底和48px背景模糊，300ms过渡；不常见在椭圆而非胶囊
  电脑＋手机 · 预览可见 · 来自「Art Landing」（只有首屏） · [预览图](../sources/framesbase/items/288baab1-70c0-4386-b174-66ec4854450e/preview.webp) · [提示词](../sources/framesbase/items/288baab1-70c0-4386-b174-66ec4854450e/prompt.md)
- **黑按钮、橙色图标块、头像下各垫一层同色模糊光晕**
  做法：不常见在不用 box-shadow，在元素下垫同色层再模糊：按钮 #212121 40% blur-25px、悬停放大 110%；图标块 #F25C40 blur-18px；按钮另加白色内高光
  电脑＋手机 · 预览可见 · 来自「BookedUp」（只有首屏） · [预览图](../sources/framesbase/items/739098a7-ee0a-4c66-8408-7c42ca27da25/preview.webp) · [提示词](../sources/framesbase/items/739098a7-ee0a-4c66-8408-7c42ca27da25/prompt.md)
- **满宽黄色胶囊，右端切出圆形缺口放箭头圆圈**
  做法：不常见在缺口形状：用 SVG 路径画带圆形凹口的胶囊做背景，文字居中在左侧 85.57%，右侧圆里白色箭头，悬停从 −135° 转到 −90°
  手机 · 预览可见 · 来自「CARGOX Mobile」（应用界面） · [预览图](../sources/framesbase/items/e921ded4-27ae-4449-90b7-e1fccaf274e9/preview.webp) · [提示词](../sources/framesbase/items/e921ded4-27ae-4449-90b7-e1fccaf274e9/prompt.md)
- **深色胶囊主按钮带白色内发光描边，右侧嵌圆框播放键**
  做法：主按钮 bg-slate-950，outline 1.5px rgba(255,255,255,.6) 配 outline-offset -1.5px，再加 inset 0 0 14px 白70%内阴影；不常见在负偏移描边＋内发光做出玻璃边，右侧嵌28–36px圆框播放图标
  电脑＋手机 · 预览可见 · 来自「Cinematic Brand」（只有首屏） · [预览图](../sources/framesbase/items/8e9e6078-ad0a-44fa-bb89-b07deb555012/preview.webp) · [提示词](../sources/framesbase/items/8e9e6078-ad0a-44fa-bb89-b07deb555012/prompt.md)
- **橙红渐变实心主按钮配半透明白色次按钮，同高并排**
  做法：#FF3300→#EE7926 渐变，背后垫 blur-lg 橙光晕（opacity 20%），内叠 1.5px white/20 描边；不常见在悬停时光晕升到 60%、放大 1.05、箭头从左滑入
  电脑＋手机 · 预览可见 · 来自「ClearInvoice SaaS Hero」（只有首屏） · [预览图](../sources/framesbase/items/4a6b9be7-dd41-4201-8881-30439fa2935b/preview.webp) · [提示词](../sources/framesbase/items/4a6b9be7-dd41-4201-8881-30439fa2935b/prompt.md)
- **黑色直角实心键，旁边浅框幽灵键四角压炭黑短角标**
  做法：两键零圆角、高32、最小宽133；不常见在幽灵键的浅灰#bdb9ae细框四角再压6px长炭黑角标，用两条正交线性渐变mask求交画出八段等长臂
  电脑＋手机 · 预览可见 · 来自「Codeveil」（只有首屏） · [预览图](../sources/framesbase/items/132802df-2dc9-45ec-a69f-7c743bdc1f34/preview.webp) · [提示词](../sources/framesbase/items/132802df-2dc9-45ec-a69f-7c743bdc1f34/prompt.md)
- **黄色胶囊右端连着一个描边圆，圆里放斜箭头**
  做法：用一条SVG路径画出胶囊与右端圆环连成一体的外形，填#ffda00；文字只在非圆部分居中，色#002a35；悬停箭头从-135°转到-90°，整体放大1.08上移2px。少见在按钮是一体异形轮廓
  手机 · 预览可见 · 来自「Cross-Border」（整页） · [预览图](../sources/framesbase/items/7ab5fd2a-7535-4ce4-9bf0-42f55d70f0c2/preview.webp) · [提示词](../sources/framesbase/items/7ab5fd2a-7535-4ce4-9bf0-42f55d70f0c2/prompt.md)
- **深色玻璃胶囊按钮，顶边一道暖橙细光**
  做法：不常见在顶边光取夕阳橙而非白：inset 0 1px 0 rgba(255,140,70,.5)，内顶 20px 橙色渐变；底色白 3% 加背景模糊和白 10% 内描边；悬停亮起橙色径向光
  电脑 · 预览可见 · 来自「Digital Reality」（单个模块） · [预览图](../sources/framesbase/items/b3e64519-d48e-437e-948d-964ff02e161a/preview.webp) · [提示词](../sources/framesbase/items/b3e64519-d48e-437e-948d-964ff02e161a/prompt.md)
- **蓝色胶囊按钮，顶部有一道浅蓝高光条，像带釉面的实体键**
  做法：#0871E7底，inset 0 -4px 4px白39%内阴影；内部贴顶放一块80%宽、16px高的#DEF0FC→透明渐变条，悬停横向放大1.05。不常见在用独立高光条做釉面
  电脑 · 预览可见 · 来自「Dot」（只有首屏） · [预览图](../sources/framesbase/items/b974d59a-6517-4cc5-b9b3-f20ff83185d8/preview.webp) · [提示词](../sources/framesbase/items/b974d59a-6517-4cc5-b9b3-f20ff83185d8/prompt.md)
- **白底胶囊按钮，外圈2px粉蓝橙渐变描边**
  做法：外层rounded-full填多段渐变（#84a9fa→#fb6fec→#fba69e→#fdd4a3），bg-size 200%，内层白底缩进2px；悬停背景位置0%→200%走0.8s让色带流动；不常见在描边渐变会流动，全站复用
  电脑 · 预览可见 · 来自「E-commerce Website」（整页） · [预览图](../sources/framesbase/items/0ac09789-7e7f-4235-b4f7-59aa044caee8/preview.webp) · [提示词](../sources/framesbase/items/0ac09789-7e7f-4235-b4f7-59aa044caee8/prompt.md)
- **橄榄绿直角按钮，外围四个L形角标**
  做法：按钮#63624B底、#DBDDA1等宽大写字、零圆角；按钮外-8px四角各放16x16的2px L形边框（只画两条边），箭头小钮用12x12角标；悬停底色变#73725A
  电脑＋手机 · 预览可见 · 来自「Form Study」（只有首屏） · [预览图](../sources/framesbase/items/0d18179d-3700-462d-8568-bbafe72b8323/preview.webp) · [提示词](../sources/framesbase/items/0d18179d-3700-462d-8568-bbafe72b8323/prompt.md)
- **左上、右下切角的细线按钮，文字靠左、箭头靠右**
  做法：SVG polygon 画切角外框，vector-effect:non-scaling-stroke 让按钮拉伸时线不变粗；切角 14px；手机端垫一层同形 clip-path 的白 60% 毛玻璃底
  电脑 · 预览可见 · 来自「Glass Orb」（只有首屏） · [预览图](../sources/framesbase/items/e399ab56-5fd5-4af6-a247-c4c3d5e7118e/preview.webp) · [提示词](../sources/framesbase/items/e399ab56-5fd5-4af6-a247-c4c3d5e7118e/prompt.md)
- **58px 高直角按钮，文字右侧嵌一个深一号色的 36px 箭头方块**
  做法：高58px，箭头放进36×36的#0053a3方块，右内边距仅10px；悬停::before从左scaleX铺色0.4s，箭头方块反成白底蓝箭头。不常见在图标独占深色方块且悬停反色
  电脑＋手机 · 预览可见 · 来自「Growth Decisions」（只有首屏） · [预览图](../sources/framesbase/items/4cc914ea-5034-4777-b532-fce9e779f87a/preview.webp) · [提示词](../sources/framesbase/items/4cc914ea-5034-4777-b532-fce9e779f87a/prompt.md)
- **切角八边形按钮：白底实心、黑底白描边、小号社交方块三种**
  做法：少见在用clip-path八边形切角代替圆角：大按钮切12px、社交键切8px；描边款是白底加::before inset:1px黑底、同形切11px，露出1px白边
  电脑＋手机 · 预览可见 · 来自「Innovation Lab」（只有首屏） · [预览图](../sources/framesbase/items/c285cfa5-173f-4bf1-8fa6-afa966cc2019/preview.webp) · [提示词](../sources/framesbase/items/c285cfa5-173f-4bf1-8fa6-afa966cc2019/prompt.md)
- **粉白浅蓝三色渐变小胶囊“VIEW OFFER”，右侧眼睛图标**
  做法：少见在硬分段三色：90deg #FAD5D7 0–38%、#FFF 50%、#9CE2F9 62–100%；内边距7/7/7/14px，10px字重750，阴影0 6px 18px，入场带回弹缩放
  手机 · 预览可见 · 来自「Luxury Escapes」（应用界面） · [预览图](../sources/framesbase/items/608b29bc-96f3-47e5-9caf-3f41220456a1/preview.webp) · [提示词](../sources/framesbase/items/608b29bc-96f3-47e5-9caf-3f41220456a1/prompt.md)
- **深灰实心按钮配四角带 L 形刻度的幽灵按钮**
  做法：幽灵按钮 1px 黑28% 描边，::before 用 linear-gradient 画两个 6×1px 角标，::after scaleY(-1) 翻出下方两角，像印刷套准标；悬停描边转纯黑、底色黑4%
  电脑＋手机 · 预览可见 · 来自「Mistveil」（只有首屏） · [预览图](../sources/framesbase/items/0de20a2a-5bfc-4897-b2c4-a70db52efe2d/preview.webp) · [提示词](../sources/framesbase/items/0de20a2a-5bfc-4897-b2c4-a70db52efe2d/prompt.md)
- **深墨绿全圆角按钮，左侧嵌圆形人像，右侧写和某人聊**
  做法：#051A24底，内放40px圆形头像；阴影叠五层同色递减外阴影，再加inset 0 2px 8px白50%顶部高光。少见处：按钮里放真人头像，把联系我们变成找一个具体的人
  电脑 · 预览可见 · 来自「Mouse Trail CTA」（单个模块） · [预览图](../sources/framesbase/items/3c41e07a-415b-4874-941d-a4973e36dfd8/preview.webp) · [提示词](../sources/framesbase/items/3c41e07a-415b-4874-941d-a4973e36dfd8/prompt.md)
- **黑色直角按钮，四角内侧各一个白色 L 形角标**
  做法：四角各用两条 10×1px 细线拼成 L 形角标，离边 4px，像相机取景框，少见；按钮零圆角、黑底白字、加宽字距大写；导航右侧 GET IN TOUCH 也用零圆角细描边呼应
  电脑 · 预览可见 · 来自「Nexus IT Solutions」（只有首屏） · [预览图](../sources/framesbase/items/19d7954d-5c2c-47df-b9a3-8f9d50400451/preview.webp) · [提示词](../sources/framesbase/items/19d7954d-5c2c-47df-b9a3-8f9d50400451/prompt.md)
- **大号SEE旁竖叠两行小字ALL CREATORS，下方荧光绿粗条**
  做法：不做外框：SEE 用标题字号32–60px，ALL/CREATORS 两行20–36px竖叠在右侧与 SEE 等高，下方整宽6–10px荧光绿实心条当下划线。不常见在把按钮排成一个字块
  电脑＋手机 · 预览可见 · 来自「Orbis NFT」（整页） · [预览图](../sources/framesbase/items/5ba0755e-daa5-48aa-98d7-1c2e466006cf/preview.webp) · [提示词](../sources/framesbase/items/5ba0755e-daa5-48aa-98d7-1c2e466006cf/prompt.md)
- **米金色胶囊按钮，四周大范围琥珀色光晕**
  做法：rounded-[43px]、px-10 py-4，box-shadow 0 4px 95px 4px hsl(45 70% 50%/.6)。不常见在按钮内顶部藏一个w-48 h-10、blur-xl的浅色椭圆（top:-12px，被overflow裁切）做内部高光
  电脑 · 预览可见 · 来自「Orbit Web3」（只有首屏） · [预览图](../sources/framesbase/items/342e272a-3039-4b73-a678-cc3e3a5b5361/preview.webp) · [提示词](../sources/framesbase/items/342e272a-3039-4b73-a678-cc3e3a5b5361/prompt.md)
- **近乎透明的全圆角按钮，只靠上下发亮的细边勾出轮廓**
  做法：不常见在描边：::before 用 1.4px padding 加 mask-composite exclude 只留边框，边框是上下 0.45 白、中段 40%–60% 全透明的竖向渐变；底色仅 rgba(255,255,255,.01)＋blur 4px
  电脑＋手机 · 预览可见 · 来自「Organic Odyssey」（只有首屏） · [预览图](../sources/framesbase/items/2facb1c5-7e7f-475b-a6cb-4b58bde1b33f/preview.webp) · [提示词](../sources/framesbase/items/2facb1c5-7e7f-475b-a6cb-4b58bde1b33f/prompt.md)
- **深橄榄和玫瑰粉直角按钮，右上角被咬掉一个小方块**
  做法：按钮全直角，右上角绝对定位一个10–14px的2×2小方格：左上透明、右上白、左下#FDFBF7、右下透明，咬出L形缺口，像像素被啃掉一角，呼应像素画主题；字用Space Mono大写、字距0.15–0.2em
  电脑＋手机 · 预览可见 · 来自「Pixel Muse」（只有首屏） · [预览图](../sources/framesbase/items/7b4a9ab1-0269-4a44-b655-85e83d7f1721/preview.webp) · [提示词](../sources/framesbase/items/7b4a9ab1-0269-4a44-b655-85e83d7f1721/prompt.md)
- **左上和右下切角的细线按钮，文字在左箭头在右**
  做法：SVG多边形14,0 260,0 260,34 246,48 0,48 0,14画1.5px描边，preserveAspectRatio=none配non-scaling-stroke保线宽；手机端在同形clip-path里加60%白磨砂底，宽屏只留线框
  电脑＋手机 · 预览可见 · 来自「Planetary Pulse」（只有首屏） · [预览图](../sources/framesbase/items/127a6c46-776c-4ceb-841e-414b93844084/preview.webp) · [提示词](../sources/framesbase/items/127a6c46-776c-4ceb-841e-414b93844084/prompt.md)
- **深紫到品红到橙的渐变胶囊按钮，内圈一道浅灰细环**
  做法：123° 渐变 #18011F→#B600A8→#7621B0→#BE4C00，紫色内阴影；不常见在 outline 2px #E3E3E3 配 outline-offset -3px 画内嵌浅环
  电脑 · 预览可见 · 来自「Portfolio About」（单个模块） · [预览图](../sources/framesbase/items/37eb995b-0223-4e14-b049-0ff78e9a7895/preview.webp) · [提示词](../sources/framesbase/items/37eb995b-0223-4e14-b049-0ff78e9a7895/prompt.md)
- **四角切口的半透明黑色 START 按钮，字距很宽**
  做法：四角按 8/280、8/90 比例切出台阶缺口；面是 rgba(16,16,16,.44) 加模糊，SVG 描两层边：外圈 1.4 白色光晕、内圈 6 黑边；文字白色、字距 9.75u
  电脑＋手机 · 预览可见 · 来自「Robot Battle Arena」（应用界面） · [预览图](../sources/framesbase/items/28f0ede6-4ef5-4224-8413-083968f60b18/preview.webp) · [提示词](../sources/framesbase/items/28f0ede6-4ef5-4224-8413-083968f60b18/prompt.md)
- **粉色渐变Yes胶囊键，No键换了文案躲到卡片左侧**
  做法：No键每点一次换一句文案（共五句），鼠标靠近就改绝对定位，随机跳到卡片内别处，避开Yes键周围14px、离卡边16px，最多试16次；到最后一句后每次靠近都躲；原位留隐藏占位防跳版
  电脑＋手机 · 预览可见 · 来自「Sweet Question」（应用界面） · [预览图](../sources/framesbase/items/c4d07181-47a9-4fc5-b9be-43af6edd4aeb/preview.webp) · [提示词](../sources/framesbase/items/c4d07181-47a9-4fc5-b9be-43af6edd4aeb/prompt.md)
- **红、白两色切角矩形按钮，导航右侧用同形小号**
  做法：不常见在不用圆角，用 clip-path 在右上、左下各斜切 10–12px，全站按钮同形；主按钮品牌红 #EE3F2C 配白色大写字，卡内次按钮纯白配电话图标。预览里主要看到右上切角
  电脑＋手机 · 预览可见 · 来自「Targo Logistics Hero」（只有首屏） · [预览图](../sources/framesbase/items/7cb7d03b-54d4-49a1-9deb-46c62f4b0f89/preview.webp) · [提示词](../sources/framesbase/items/7cb7d03b-54d4-49a1-9deb-46c62f4b0f89/prompt.md)
- **白色胶囊文字钮右接一颗浅蓝圆形箭头钮，拆成两段**
  做法：白底是绝对定位span，宽=总宽-圆钮-间距；悬停时白底伸到100%-16px把54px圆钮包进去，圆钮左移7px，过渡0.4s。不常见在白底伸长吞下圆钮
  电脑 · 预览可见 · 来自「Vision Reveal」（只有首屏） · [预览图](../sources/framesbase/items/74a3a1d3-45cc-4eab-87cd-d97aaf489f27/preview.webp) · [提示词](../sources/framesbase/items/74a3a1d3-45cc-4eab-87cd-d97aaf489f27/prompt.md)
- **顶栏圆形和成就胶囊都是带折射的液态玻璃**
  做法：共用 .glass：白3% 底、无边框、inset 阴影做边缘高光；JS 按元素尺寸和圆角算圆角矩形 SDF 生成位移图，放进 feDisplacementMap 作为 backdrop-filter 折射，不支持时退回 blur
  手机 · 仅提示词 · 来自「Coffee Rewards」（应用界面） · [预览图](../sources/framesbase/items/19ba3b5b-4b03-4865-8308-690a10a8afdb/preview.webp) · [提示词](../sources/framesbase/items/19ba3b5b-4b03-4865-8308-690a10a8afdb/prompt.md)
- **黑底直角按钮，右上角挂一个带斜箭头的小黑方块**
  做法：主标签黑底白字直角，旁边24px黑方块装斜箭头，底边比按钮高出24px错位悬挂；悬停时方块再上移到36px，0.3s缓出；不常见在箭头块脱离按钮单独悬挂
  电脑 · 仅提示词 · 来自「Pixel Grid Hover」（单个模块） · [预览图](../sources/framesbase/items/b9553c71-a6e4-420c-a103-00f5554d3f19/preview.webp) · [提示词](../sources/framesbase/items/b9553c71-a6e4-420c-a103-00f5554d3f19/prompt.md)
