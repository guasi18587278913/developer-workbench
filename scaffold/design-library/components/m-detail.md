# 手机详情页

共 4 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（1 条）

- **全屏视频详情页，居中大写标题，底部两列大数字，越往下越模糊**
  做法：少见在6层渐进模糊：blur 1→9px，各配 radial-gradient(at 55% 115%) 遮罩，半径480→130px逐层收紧；视频加 feColorMatrix 调色
  手机 · 预览可见 · 来自「Luxury Escapes」（应用界面） · [预览图](../sources/framesbase/items/608b29bc-96f3-47e5-9caf-3f41220456a1/preview.webp) · [提示词](../sources/framesbase/items/608b29bc-96f3-47e5-9caf-3f41220456a1/prompt.md)

## 推荐度 4（1 条）

- **车手抠图占满屏，下半渐进模糊，底部头像条与大号姓名**
  做法：人像宽140%底对齐；下半50%加blur(6px)，遮罩transparent→black 50%让模糊渐出；姓名64px行高0.82，入场左移加斜切8°和8px模糊。少见处：渐进模糊压住人像下半托住白字
  手机 · 预览可见 · 来自「F1 Racing Hub」（应用界面） · [预览图](../sources/framesbase/items/20ae424d-b644-496b-942f-5495699ec947/preview.webp) · [提示词](../sources/framesbase/items/20ae424d-b644-496b-942f-5495699ec947/prompt.md)

## 推荐度 3（2 条）

- 大图耳机下一排颜色方块，底部浅色面板放标题、价格和加购 · 手机 · 预览可见 · 来自「Gear Shop」（应用界面） · [目录](../sources/framesbase/items/a559f7a3-51b7-4d5a-801d-abd4de191040/)
- 居中名称规格，价格加圆形加减器，底部整宽黑色购买按钮 · 手机 · 预览可见 · 来自「Supplement Shop」（应用界面） · [目录](../sources/framesbase/items/d18a6adb-bd1a-44d2-b09d-2988c1bf43ec/)
