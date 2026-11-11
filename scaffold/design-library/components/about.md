# 关于、团队与自我介绍

共 16 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 4（7 条）

- **编号圆点加标签、大标题，小图、文案按钮、大图三栏高低错落**
  做法：grid-cols-[26%_1fr_48%] items-end：左小图、右大图贴底，中栏文案和橙色胶囊按钮 self-start 顶齐；不常见在文字夹在两图间形成低-高-满错落
  电脑＋手机 · 预览可见 · 来自「Axion About」（单个模块） · [预览图](../sources/framesbase/items/6f53478d-a7dc-46d8-a839-48406a2e2686/preview.webp) · [提示词](../sources/framesbase/items/6f53478d-a7dc-46d8-a839-48406a2e2686/prompt.md)
- **三栏错落：左小图贴底、中间文字靠上、右大图贴底**
  做法：桌面grid-cols-[26%_1fr_48%] items-end，两图self-end、段落self-start，图比例438/346与3/2，圆角2xl；手机改文字在上两图并排。不常见在文字悬在高低不同的两图之间
  电脑＋手机 · 预览可见 · 来自「Modern Agency」（整页） · [预览图](../sources/framesbase/items/e760094c-978e-4f3e-9e3a-11f6d0e83f5a/preview.webp) · [提示词](../sources/framesbase/items/e760094c-978e-4f3e-9e3a-11f6d0e83f5a/prompt.md)
- **居中渐变大标题、半亮半暗的简介段和紫色胶囊按钮，四角放 3D 小物**
  做法：标题 Kanit 900、最大 160px，#646973→#BBCCD7 渐变字；简介逐字拆 span，随滚动从 opacity .2 亮到 1；四角图标从两侧滑入。不常见在逐字点亮的自我介绍
  电脑 · 预览可见 · 来自「Portfolio About」（单个模块） · [预览图](../sources/framesbase/items/37eb995b-0223-4e14-b049-0ff78e9a7895/preview.webp) · [提示词](../sources/framesbase/items/37eb995b-0223-4e14-b049-0ff78e9a7895/prompt.md)
- **深灰大圆角卡内居中自我介绍大字，中间一句换衬线斜体**
  做法：标题拆三段：无衬线＋Instrument Serif 斜体＋无衬线，逐词上滑 0.08s 交错；正文每个字符单独包裹，随滚动 opacity 0.2→1，不常见在逐字随滚动点亮
  电脑＋手机 · 预览可见 · 来自「Prisma Creative Studio」（整页） · [预览图](../sources/framesbase/items/08d773cd-ac28-492f-8116-9d3abb0478b1/preview.webp) · [提示词](../sources/framesbase/items/08d773cd-ac28-492f-8116-9d3abb0478b1/prompt.md)
- **底部八个圆形头像，点哪位整屏背景就换成谁的肖像**
  做法：不常见在团队介绍直接做成首屏：8张全屏肖像叠放、700ms淡入淡出切换；头像上方1px白点标当前人，简介和姓名用key重挂载做0.5s上浮4px淡入；底部细线下排姓名/职位/年资/联系方式
  电脑＋手机 · 预览可见 · 来自「Talent Collective」（只有首屏） · [预览图](../sources/framesbase/items/ca95f185-6df7-4bd0-bde3-c69582f33023/preview.webp) · [提示词](../sources/framesbase/items/ca95f185-6df7-4bd0-bde3-c69582f33023/prompt.md)
- **橄榄绿底大段品牌宣言，前后两层装备抠图随滚动漂移**
  做法：70px白字首行缩进140px，句中夹⟡∴⊹等符号，difference混合；少见在抠图分两层，一层压在文字下、一层盖在文字上，各按speed/drift/rot算位移和转角
  电脑＋手机 · 仅提示词 · 来自「Outdoor Apparel」（整页） · [预览图](../sources/framesbase/items/e5608f6e-32c7-46e0-984c-b44ed2296b0b/preview.webp) · [提示词](../sources/framesbase/items/e5608f6e-32c7-46e0-984c-b44ed2296b0b/prompt.md)
- **左侧阶梯标题与说明，右侧视频贴屏幕右缘并染成青色**
  做法：区块不设右内边距让视频贴边；视频上盖同尺寸#15BCDF色块，mix-blend-mode:hue染成品牌色；标题末行、正文、按钮同缩进min(160px,18vw)。不常见在hue混合染色视频
  电脑＋手机 · 仅提示词 · 来自「Scaling Platform」（只有首屏） · [预览图](../sources/framesbase/items/2d182339-975a-4a63-b5c1-24656e3d9eff/preview.webp) · [提示词](../sources/framesbase/items/2d182339-975a-4a63-b5c1-24656e3d9eff/prompt.md)

## 推荐度 3（9 条）

- 居中大段白字介绍，滚动时逐词由暗变亮 · 电脑 · 预览可见 · 来自「AI Designer Agency」（整页） · [目录](../sources/framesbase/items/4b8b2bd3-30c0-4d83-b30f-471df9157905/)
- 左侧 3D 建筑视频，右侧标题顶对齐、正文和按钮沉底 · 电脑 · 预览可见 · 来自「AKOR Security」（整页） · [目录](../sources/framesbase/items/9aaf3e8d-888c-4c6b-a20e-c88515b85037/)
- 居中四行深棕引言，下接细竖线、描边定位图标和说明小字 · 电脑 · 预览可见 · 来自「Botanical Shadow About」（单个模块） · [目录](../sources/framesbase/items/fe6e3645-5acc-43f8-a166-c007ef8f302d/)
- 大圆角玻璃框，左标题右段落和红色按钮，下排三张编号卡 · 电脑＋手机 · 预览可见 · 来自「Build Unit」（整页） · [目录](../sources/framesbase/items/ae3e3baa-1f44-4479-a5d0-320b9f0498dc/)
- 左侧两行大写标题，右侧两段说明加切角箭头小按钮 · 电脑＋手机 · 预览可见 · 来自「LaunchEx About」（单个模块） · [目录](../sources/framesbase/items/efe0513f-6b73-4c70-84a4-9915cae6053c/)
- 黑底左右两栏：左侧头盔人像视频，右侧大写标题、三个描边标签和双按钮 · 电脑＋手机 · 预览可见 · 来自「NeoVision」（整页） · [目录](../sources/framesbase/items/da149ab1-5c86-46da-93f1-0af8dc13f662/)
- 全屏视频，左上标题、右上等宽字小段，下方两列极淡重复文字 · 电脑＋手机 · 预览可见 · 来自「Orbis Hello」（单个模块） · [目录](../sources/framesbase/items/63d6a802-45d5-4889-bdd4-1c28fb528d69/)
- 红底居中窄栏白字，签名式手写大字夹在两段说明中间 · 电脑 · 预览可见 · 来自「Tech-Noir About」（单个模块） · [目录](../sources/framesbase/items/9a77658b-10af-4705-8ea7-a10ba3e35e59/)
- 滚到底升起的大玻璃面板，居中衬线大字介绍，底部品牌文字跑马灯 · 电脑＋手机 · 仅提示词 · 来自「Urban Jungle」（只有首屏） · [目录](../sources/framesbase/items/0191170f-7b80-4f99-9d73-d504767b62fa/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/about-*.tsx`（8 个）、`src/components/blocks/profile-*.tsx`（3 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
