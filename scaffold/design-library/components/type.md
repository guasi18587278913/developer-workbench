# 标题与字体排印

共 11 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（1 条）

- **大写无衬线标题里两个词换成像素点阵字，并放大到1.25em**
  做法：正文Inter，像素字basis33用于名字、职能第二行和栏目标签；标题里UNEXPECTED、EXPERIENCES换成像素字、放大1.25em，整段行高0.72压紧。少见在点阵字当强调词嵌进同一行
  电脑＋手机 · 预览可见 · 来自「Digital Director」（只有首屏） · [预览图](../sources/framesbase/items/5876679e-7e6d-4d33-ae03-6640df390b23/preview.webp) · [提示词](../sources/framesbase/items/5876679e-7e6d-4d33-ae03-6640df390b23/prompt.md)

## 推荐度 4（10 条）

- **第二行 unseen 由横向白条纹填充，像被扫描线切开的字**
  做法：repeating-linear-gradient 白 4px、透明 5px 竖向重复，加 background-clip:text、文字透明；不常见在一个标题只切一个词，和实心字对比
  电脑 · 预览可见 · 来自「Cybersecurity」（只有首屏） · [预览图](../sources/framesbase/items/9207b813-1954-40a8-bc61-03adb85a268a/preview.webp) · [提示词](../sources/framesbase/items/9207b813-1954-40a8-bc61-03adb85a268a/prompt.md)
- **三列红色宋体竖排大字，右上四行小字和方框详情链接**
  做法：竖排用 flex row-reverse 排三列，每列单字纵向排列，Noto Serif SC 2.5rem 粗体、行高1.15、#B3483C；上方一行0.8rem拼音小标题；右上0.85rem行高1.8右对齐，配1rem描边空方框加“详情”。不常见在用 row-reverse 做从右往左竖排
  电脑＋手机 · 预览可见 · 来自「Ink Dynasty」（只有首屏） · [预览图](../sources/framesbase/items/0982d8a0-c576-45de-afea-97ea584563f4/preview.webp) · [提示词](../sources/framesbase/items/0982d8a0-c576-45de-afea-97ea584563f4/prompt.md)
- **Anton大写标题中换一个荧光绿手写词，右侧叠字链接**
  做法：两行Anton大写60px行高1，第二行缩进ml-32，“Space”换Condiment手写体68px #6FFF00；右侧大字SEE旁上下叠放ALL/CREATORS小字，下压10px荧光绿粗条。少见在叠字式“查看全部”链接
  电脑＋手机 · 预览可见 · 来自「Orbis Cards」（单个模块） · [预览图](../sources/framesbase/items/d71ec79f-15fc-44e4-9761-58131adb3197/preview.webp) · [提示词](../sources/framesbase/items/d71ec79f-15fc-44e4-9761-58131adb3197/prompt.md)
- **Anton 大写四行标语，霓虹绿手写 Go beyond 压在一二行间**
  做法：首行 JOIN US. 加 mb-12 留空，Condiment 手写字 #6FFF00 绝对定位塞进空隙，字号 68 对 60px，mix-blend-exclusion 混色。不常见在混合模式插字
  电脑＋手机 · 预览可见 · 来自「Orbis CTA」（单个模块） · [预览图](../sources/framesbase/items/b1e86846-a615-4a8c-9b3d-90da301480af/preview.webp) · [提示词](../sources/framesbase/items/b1e86846-a615-4a8c-9b3d-90da301480af/prompt.md)
- **Anton 窄体大写两行标题，右下斜压荧光绿手写单词**
  做法：手写词用 Condiment，绝对定位 right -8px、bottom -20~-40px，-rotate-1、行高0.79、#6FFF00、opacity .9；不常见在加 mix-blend-exclusion，让绿字随背景视频反色混合，像签名叠在标题上
  电脑＋手机 · 预览可见 · 来自「Orbis Hello」（单个模块） · [预览图](../sources/framesbase/items/63d6a802-45d5-4889-bdd4-1c28fb528d69/preview.webp) · [提示词](../sources/framesbase/items/63d6a802-45d5-4889-bdd4-1c28fb528d69/prompt.md)
- **Anton窄体大写标题上斜压一行荧光绿手写体**
  做法：标题用 Anton 大写、行高1；关键词另用 Condiment 手写体、#6FFF00、mix-blend-exclusion、-rotate-1，绝对定位压在标题右下或替换其中一词；正文用等宽小字大写。不常见在手写字用差值混合压进标题，全站四个区块统一
  电脑＋手机 · 预览可见 · 来自「Orbis NFT」（整页） · [预览图](../sources/framesbase/items/5ba0755e-daa5-48aa-98d7-1c2e466006cf/preview.webp) · [提示词](../sources/framesbase/items/5ba0755e-daa5-48aa-98d7-1c2e466006cf/prompt.md)
- **超大粗黑紫色大写标题，GLOBE的O换成地球图**
  做法：Qanelas Heavy 72px行高0.78全大写#7f52ef；字母O设透明色占位，中间绝对定位90px地球图。少见处：用图片顶替一个字母，标题本身就是主视觉
  手机 · 预览可见 · 来自「Remit Race」（应用界面） · [预览图](../sources/framesbase/items/afebd1d2-3132-4d41-9678-f4e0729c2b7f/preview.webp) · [提示词](../sources/framesbase/items/afebd1d2-3132-4d41-9678-f4e0729c2b7f/prompt.md)
- **等宽大写两行中间夹一行衬线斜体 of cloud**
  做法：上下两行 Geist Mono 大写 65px、字距 -3.9px，中间行留空，再把 Playfair 斜体 73px 绝对定位放进空行，上下自带留白，少见；标题上方三个 10px 深蓝方块当引导符
  电脑＋手机 · 预览可见 · 来自「Skytrace」（只有首屏） · [预览图](../sources/framesbase/items/c72b86d8-d01f-4ad6-8a52-20790dc55acd/preview.webp) · [提示词](../sources/framesbase/items/c72b86d8-d01f-4ad6-8a52-20790dc55acd/prompt.md)
- **白色粗体巨字下方露出绿、橙、浅蓝三道错位色条**
  做法：四个同字h1叠放，由后到前#89CFF0/#EC612C/#90EE90/#FFF，依次下移36/24/12/0px（手机减半）。不常见在第二层用背景同色，色条间留出一道底色缝；字号clamp(7.5rem,30vw,28rem)
  电脑＋手机 · 预览可见 · 来自「Sparkform」（只有首屏） · [预览图](../sources/framesbase/items/784f18cf-4090-4a99-9bd3-78fc115e6da5/preview.webp) · [提示词](../sources/framesbase/items/784f18cf-4090-4a99-9bd3-78fc115e6da5/prompt.md)
- **浅灰底上的白色巨字，边缘有投影和内侧高光，像压出来的浮雕**
  做法：字号min(25vw,400px)白字挂SVG滤镜：外投影dy4模糊6、黑0.25，再叠两层内阴影（偏移4px的白0.25高光、模糊6的黑0.25暗边）。不常见在不用图片，纯滤镜做白字浮雕
  电脑 · 预览可见 · 来自「Vize Footer」（单个模块） · [预览图](../sources/framesbase/items/195daa7c-91e4-40fd-ae77-3470f51f07c5/preview.webp) · [提示词](../sources/framesbase/items/195daa7c-91e4-40fd-ae77-3470f51f07c5/prompt.md)
