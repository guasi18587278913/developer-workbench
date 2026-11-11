# 流程与时间线

共 4 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（1 条）

- **四个白标签沿彩色丝带波浪逐级抬高，下挂渐变竖线和子项**
  做法：四根柱子绝对定位，left和bottom都用vw（bottom 7→9.08→11.16→13.24vw）排成上升阶梯，对齐背景图里的波浪丝带；每根是白渐变标签加1px多色渐变竖线，子项压在竖线右侧；手机端改单列左右交替
  电脑＋手机 · 预览可见 · 来自「NexaCore Results」（单个模块） · [预览图](../sources/framesbase/items/a96f98d7-fd16-4ec3-ba06-c2c566775df2/preview.webp) · [提示词](../sources/framesbase/items/a96f98d7-fd16-4ec3-ba06-c2c566775df2/prompt.md)

## 推荐度 4（2 条）

- **品牌视频卡中三条步骤，当前步白底黑字，其余深灰**
  做法：注册步骤放在左侧视觉区而非表单上方：三条圆角条，当前步白底黑字、序号黑圆，其余 #1A1A1A、序号 white/10 圆；整组 0.15s 交错上浮。不常见在步骤条放进品牌视频卡
  电脑＋手机 · 预览可见 · 来自「Aurora Onboard」（应用界面） · [预览图](../sources/framesbase/items/de8e6895-65ee-4472-8da0-88cbf73e5d4c/preview.webp) · [提示词](../sources/framesbase/items/de8e6895-65ee-4472-8da0-88cbf73e5d4c/prompt.md)
- **四根带标签的竖线由左到右逐级升高，像上台阶**
  做法：不常见在流程画成阶梯：四根柱子绝对定位，left按2.8/22.4/41.2/61.1vw，bottom从7vw逐级加约2vw；每根顶部半透明白渐变胶囊标签，下接1px彩虹渐变竖线，条目列在线右侧；手机端改为左右交替
  电脑＋手机 · 仅提示词 · 来自「NexaCore」（整页） · [预览图](../sources/framesbase/items/e7078def-f612-45c4-be23-fd06692b6666/preview.webp) · [提示词](../sources/framesbase/items/e7078def-f612-45c4-be23-fd06692b6666/prompt.md)

## 推荐度 3（1 条）

- 首屏底部悬浮一条深色玻璃条，四列编号步骤 · 电脑 · 预览可见 · 来自「Wealth Video Hero」（只有首屏） · [目录](../sources/framesbase/items/f9b223e9-e805-4471-b22b-f63eedf1428a/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/how-it-works-*.tsx`（6 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
