# 徽标与小控件

共 2 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 4（2 条）

- **圆形玻璃按钮，边缘有两段亮弧高光**
  做法：底色白.08加右下径向高光和blur(size*.095)；::before/::after各用conic-gradient取一段白弧，再用radial-gradient mask裁成细环。不常见在环宽按按钮尺寸比例计算，并设像素下限、按dppx调整
  手机 · 预览可见 · 来自「Social Hangouts」（应用界面） · [预览图](../sources/framesbase/items/e41d4175-33d0-4aac-8986-f6fa35411eb3/preview.webp) · [提示词](../sources/framesbase/items/e41d4175-33d0-4aac-8986-f6fa35411eb3/prompt.md)
- **底部滑动确认条：左白色圆形箭头滑块，中间 Done，右三个箭头**
  做法：56px 高玻璃轨道，44px 白圆滑块可拖；右侧三个小箭头透明度 0.4/0.5/0.6 递增暗示拖动方向；拖过 85% 吸附到底，否则弹回；上方语音键后衬黄色径向光晕
  手机 · 预览可见 · 来自「Wellness Companion」（应用界面） · [预览图](../sources/framesbase/items/dda701fc-95df-47ed-aaa7-32f7e6422d92/preview.webp) · [提示词](../sources/framesbase/items/dda701fc-95df-47ed-aaa7-32f7e6422d92/prompt.md)
