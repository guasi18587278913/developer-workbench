# 行动号召区

共 9 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 4（6 条）

- **左上衬线大标题、一行说明和下划线邮箱框，产品视频贴底**
  做法：不常见在视频贴底不铺满：贴底加object-bottom、不加遮罩，产品像从白底下缘长出；Stay in衬线最大160px、in斜体，次行无衬线64px；邮箱框只留底线，按钮用宽字距文字
  电脑 · 预览可见 · 来自「Editorial Collection CTA」（单个模块） · [预览图](../sources/framesbase/items/a81a6b93-59bb-452b-b42e-0647a8058598/preview.webp) · [提示词](../sources/framesbase/items/a81a6b93-59bb-452b-b42e-0647a8058598/prompt.md)
- **24px圆角卡铺橙红黄绿渐变，居中白色大标题和黑色按钮**
  做法：#ff8e53底上叠5个radial-gradient色团，用@property注册位置和半径变量，各自3–6.5s循环漂移并伸缩，纯CSS。不常见在@property让网格渐变流动
  电脑 · 预览可见 · 来自「FAQ CTA」（单个模块） · [预览图](../sources/framesbase/items/735be6cf-ef6c-4e18-b85c-c353968b4d75/preview.webp) · [提示词](../sources/framesbase/items/735be6cf-ef6c-4e18-b85c-c353968b4d75/prompt.md)
- **白色40px圆角大卡，鼠标划过沿路掉落旋转缩略图**
  做法：每80ms在光标处放一张96px宽缩略图，随机旋转±10°，1秒内透明度1→0、缩到0.85后移除；卡片用0.5px细描边加30px软阴影。少见处：转化区靠鼠标拖出作品图，静止时只有标题和按钮
  电脑 · 预览可见 · 来自「Mouse Trail CTA」（单个模块） · [预览图](../sources/framesbase/items/3c41e07a-415b-4874-941d-a4973e36dfd8/preview.webp) · [提示词](../sources/framesbase/items/3c41e07a-415b-4874-941d-a4973e36dfd8/prompt.md)
- **视频定高的行动区，右侧四行标语，左下玻璃竖条放邮件、推特、GitHub**
  做法：视频 h-auto 撑高，内容层 absolute 叠上，百分比定位跟住画面；图标按钮装进玻璃竖条，left 8%、bottom 12%→20% 随断点递增，贴在机器人柜体上。不常见在界面嵌进视频物体
  电脑＋手机 · 预览可见 · 来自「Orbis CTA」（单个模块） · [预览图](../sources/framesbase/items/b1e86846-a615-4a8c-9b3d-90da301480af/preview.webp) · [提示词](../sources/framesbase/items/b1e86846-a615-4a8c-9b3d-90da301480af/prompt.md)
- **右侧聊天加网站预览样机伸出右边缘，前景草地压住样机下半**
  做法：样机宽68%、右侧-12%出血、z-10；整幅透明底草地PNG宽100%放z-30压在样机上；滚动视差样机120→-120px、草地200→-200px（手机80→-40）。不常见在实景前景压住产品样机、两层不同速产生纵深
  电脑＋手机 · 预览可见 · 来自「Rocket CTA」（单个模块） · [预览图](../sources/framesbase/items/d034c9e2-9c68-4504-a1b3-662fea085572/preview.webp) · [提示词](../sources/framesbase/items/d034c9e2-9c68-4504-a1b3-662fea085572/prompt.md)
- **大圆角白卡居中衬线大字，鼠标划过撒出作品小图**
  做法：容器 rounded-[40px] py-48；鼠标移动时每隔至少 80ms 在光标处生成一张作品缩略图，随机旋转 ±10°，1000ms 内缩小淡出；按钮是左侧带圆形头像的深色胶囊
  电脑 · 仅提示词 · 来自「AI Designer Portfolio」（整页） · [预览图](../sources/framesbase/items/bc090770-5ea2-4fb2-972b-71917db2133e/preview.webp) · [提示词](../sources/framesbase/items/bc090770-5ea2-4fb2-972b-71917db2133e/prompt.md)

## 推荐度 3（3 条）

- 28px 圆角视频横幅，左侧标题、胶囊邮箱框和叠放头像 · 电脑＋手机 · 预览可见 · 来自「Community CTA」（单个模块） · [目录](../sources/framesbase/items/98a66586-dc8b-430f-b097-e5ee0a797eab/)
- 视频铺底居中收尾区，宽字距价格小标签压着衬线大标题和两个按钮 · 电脑 · 预览可见 · 来自「Focus AI」（整页） · [目录](../sources/framesbase/items/7ea7aec1-499d-46f6-ad90-2d3fcacf71fe/)
- 居中斜体衬线标题、灰色说明、玻璃和白色两枚箭头胶囊 · 电脑＋手机 · 预览可见 · 来自「Liquid Glass CTA」（单个模块） · [目录](../sources/framesbase/items/774e72b9-e536-4ee6-b8f8-88b07e33f056/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/cta-*.tsx`（10 个）、`src/components/blocks/download-*.tsx`（5 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
