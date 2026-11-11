# 客户评价

共 7 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 4（3 条）

- **40px大圆角白卡：引号、正文、头像加↳职位，卡片伸出右边缘**
  做法：轨道复制三份做无限循环，每3s平移427.5+24px，悬停暂停；卡片滑出左侧时按位移淡出并缩到0.85；标题里builders一词换像素衬线PP Mondwest。不常见在出界卡片缩小淡出
  电脑＋手机 · 预览可见 · 来自「Feedback Slider」（单个模块） · [预览图](../sources/framesbase/items/c025e92d-a0de-4e61-a5ea-eda32c8bdd28/preview.webp) · [提示词](../sources/framesbase/items/c025e92d-a0de-4e61-a5ea-eda32c8bdd28/prompt.md)
- **人像四周散落白色像素方块，旁边灰色大引号和创始人语录**
  做法：250×310人像外沿放10个白色小方块（6–22px，按百分比定位，部分溢出边框），进场scale 0→1错开0.05s；少见在用像素碎块做故障感相框；引语前放3.2rem灰色Georgia引号
  电脑 · 预览可见 · 来自「Radial Diagram」（单个模块） · [预览图](../sources/framesbase/items/00c5dd3b-a42e-4769-ae44-62a5f876c338/preview.webp) · [提示词](../sources/framesbase/items/00c5dd3b-a42e-4769-ae44-62a5f876c338/prompt.md)
- **7张评价卡排成下垂扇形弧，中间实白卡发光，两侧玻璃卡**
  做法：卡300×420，按离当前卡的位数pos：右移pos×295、下沉|pos|×52、旋转pos×8°；不常见在中卡实色加两层白光晕，其余毛玻璃blur18、渐淡；下方一暗一亮两个圆箭头
  电脑＋手机 · 仅提示词 · 来自「Gateway Portal」（整页） · [预览图](../sources/framesbase/items/9e7cac80-402e-4150-affe-79964f98dd1e/preview.webp) · [提示词](../sources/framesbase/items/9e7cac80-402e-4150-affe-79964f98dd1e/prompt.md)

## 推荐度 3（4 条）

- 两条通栏细线夹一段右对齐细体大引语，左下作者右下两圆钮 · 电脑＋手机 · 预览可见 · 来自「Arceage Testimonial」（单个模块） · [目录](../sources/framesbase/items/602466a7-fd9c-45bb-b720-0d03b9c2e9aa/)
- 右侧错位人像，左下引号和引言，屏底一张白色活动卡 · 手机 · 预览可见 · 来自「Church Community」（应用界面） · [目录](../sources/framesbase/items/2aeefa36-09e6-45f0-a6f1-e0e6ed30bc9b/)
- 左六成文字：标题、方块字母徽标、衬线引言、署名、深绿按钮 · 电脑＋手机 · 预览可见 · 来自「Kova Testimonial」（单个模块） · [目录](../sources/framesbase/items/02b4d453-c3bb-48d1-92f2-a99d529d4447/)
- 单条大字引言，滚动时逐词由灰变白 · 电脑 · 仅提示词 · 来自「Neuralyn」（只有首屏） · [目录](../sources/framesbase/items/c9b95dce-8e86-4c87-acf6-d393f2189d2d/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/social-proof-*.tsx`（12 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
