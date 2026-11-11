# 404 与空状态

共 13 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（1 条）

- **竖向拉满屏的 404，中间 0 叠白色椭圆，吉祥物站在前面**
  做法：404 横向 scale 1.15、纵向按窗口高÷字高×1.4 动态拉伸，叠白色椭圆，整层透明度 0.8，mask 从 40% 到 95% 向下渐隐；吉祥物视频 mix-blend-darken 去白底。不常见在拉伸数字铺满屏当背景。
  电脑＋手机 · 预览可见 · 来自「Fun 404 Page」（只有首屏） · [预览图](../sources/framesbase/items/50f3e923-7be4-4455-a26b-9fe80d002c08/preview.webp) · [提示词](../sources/framesbase/items/50f3e923-7be4-4455-a26b-9fe80d002c08/prompt.md)

## 推荐度 4（7 条）

- **两行细体文案、260px 发光 404 和玻璃胶囊返回键**
  做法：不常见在一屏放下导航、404 和整套页脚，靠视频里地球亮边分开上下区。404 用 font-black，text-shadow 0 0 80px 白30%、0 0 160px 白10%
  电脑＋手机 · 预览可见 · 来自「404 Planet」（只有首屏） · [预览图](../sources/framesbase/items/13b6f518-e697-4667-8179-ea595413950e/preview.webp) · [提示词](../sources/framesbase/items/13b6f518-e697-4667-8179-ea595413950e/prompt.md)
- **黑底中央斜体词轮换，右下巨号三位计数，底边细进度线**
  做法：计数用rAF在2.7秒内从000走到100并补零，底部3px轨道同步scaleX填蓝色渐变带8px辉光；中央词每900ms换一次不循环；满100停400ms淡出0.6秒，正文再淡入。少见处：补零计数与进度线同步并接力淡入
  电脑 · 预览可见 · 来自「Loader Animation」（单个模块） · [预览图](../sources/framesbase/items/63ea3545-3d0b-4f66-bf33-9ac43cb4ce69/preview.webp) · [提示词](../sources/framesbase/items/63ea3545-3d0b-4f66-bf33-9ac43cb4ce69/prompt.md)
- **不写404数字：小字引语、贴着贴纸图标的大标题、飞碟图和跳转卡**
  做法：不常见在标题角贴装饰：云朵和爱心用渐变填充图标（#F7B2FB→#786EF1→#5588FB）加白色描边，贴标题左上、右下并缓慢漂浮；正文关键词做灰底小标签（#E0E2E7、圆角6px）
  电脑＋手机 · 预览可见 · 来自「Nexto 404」（只有首屏） · [预览图](../sources/framesbase/items/9e87b015-0ea2-4fd5-a5ab-fca0eefe2556/preview.webp) · [提示词](../sources/framesbase/items/9e87b015-0ea2-4fd5-a5ab-fca0eefe2556/prompt.md)
- **居中巨型等宽 404、白色细线和一句等宽文案，无按钮**
  做法：Geist Mono 600、295px、字距 -24.6px，247deg 白→白40% 渐变字；下接 425×1px 白线、24px 等宽文案，间距 44px；视频零遮罩，404 正好落在断桥缺口里呼应文案
  电脑＋手机 · 预览可见 · 来自「Skybridge 404」（单个模块） · [预览图](../sources/framesbase/items/0a943fe4-447d-4417-8fba-b6bca60f27cb/preview.webp) · [提示词](../sources/framesbase/items/0a943fe4-447d-4417-8fba-b6bca60f27cb/prompt.md)
- **细框预加载页：圆环内心电图线条反复描画，底部1px渐变进度条**
  做法：心电折线stroke-dasharray 110，2.3s循环“描出-停留-擦掉”；进度条1px高、蓝#4378ff到粉#f24baf、scaleX驱动，右侧补零百分比；至少显示900ms，退出时淡出并放大1.012；加载失败冻结线条并显示重试胶囊
  电脑＋手机 · 仅提示词 · 来自「Cardia 3D」（只有首屏） · [预览图](../sources/framesbase/items/d06d4d1b-a841-4f77-a883-c5252594a922/preview.webp) · [提示词](../sources/framesbase/items/d06d4d1b-a841-4f77-a883-c5252594a922/prompt.md)
- **加载慢时显示与真实布局同形的玻璃骨架屏**
  做法：骨架形状运行时从真实元素量取，各断点自动对齐；面板骨架带同款 blur(42px)，心脏处用心脏图做 mask 显出剪影；不常见在整层只用一条斜向高光带扫过（1.9s 线性循环），等待够久才出现
  电脑＋手机 · 仅提示词 · 来自「Heart Health Dashboard」（应用界面） · [预览图](../sources/framesbase/items/76084b77-740a-484e-97bf-195a99cbe572/preview.webp) · [提示词](../sources/framesbase/items/76084b77-740a-484e-97bf-195a99cbe572/prompt.md)
- **黑屏中央100px圆角图快速轮换，右下5rem百分比计数**
  做法：图每85ms换一张，计数每45ms随机加2–7、过85后加1–2；不常见在越接近100越糊：模糊=进度⁴×18px、缩放1→0.9，数字同步糊0.6倍，到100整层0.5s淡出进首屏
  电脑 · 仅提示词 · 来自「Lead Funnel」（只有首屏） · [预览图](../sources/framesbase/items/5dc36f48-4cf0-4ea5-98bf-d7bdebc18006/preview.webp) · [提示词](../sources/framesbase/items/5dc36f48-4cf0-4ea5-98bf-d7bdebc18006/prompt.md)

## 推荐度 3（5 条）

- 黑屏加载页：底部 1px 进度条和百分比，满格后左右对开拉幕 · 电脑＋手机 · 仅提示词 · 来自「Clarity Core」（只有首屏） · [目录](../sources/framesbase/items/9a34a1e6-fbf6-4a67-bb69-b0abb9bec60c/)
- 加载屏：左上小字、中间轮换单词、右下巨型计数 · 电脑 · 仅提示词 · 来自「Dark Portfolio Hero」（只有首屏） · [目录](../sources/framesbase/items/730adc7c-5879-42d0-9944-d2c8a06c4a38/)
- 白屏左下角巨号数字从 0 数到 100 的开场 · 电脑＋手机 · 仅提示词 · 来自「Health Portal」（整页） · [目录](../sources/framesbase/items/01f8d904-c8f5-4e08-b1ac-c4450bcc6b51/)
- 深青色全屏打字机开场，逐字打出 Velar.，光标闪烁后整屏上抬 · 电脑＋手机 · 仅提示词 · 来自「Luxury Real Estate」（整页） · [目录](../sources/framesbase/items/9b67fdf3-96e8-4a42-9824-519b0a1f2f22/)
- 全屏加载页，中间轮换单词，右下三位数计数 · 电脑 · 仅提示词 · 来自「Portfolio Cosmic」（整页） · [目录](../sources/framesbase/items/9e8ed655-6ab9-479b-9499-4cf1676a7cc2/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/404-*.tsx`（5 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
