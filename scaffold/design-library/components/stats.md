# 数据条

共 27 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（3 条）

- **三条同心细弧从人物身后扫向右侧，弧上圆点旁挂大数字**
  做法：不常见在弧线排数据：圆心放在画布外左侧 (-110,300)，半径 330/395/460 三条弧，弧线两端渐隐；每个数据点是实心圆＋35% 外环，数字 32px、后缀 19px 上抬，标签 8.5px 字距 2px；弧线依次描线、圆点回弹、外环循环扩散
  电脑＋手机 · 预览可见 · 来自「Cyberpunk Reveal」（只有首屏） · [预览图](../sources/framesbase/items/4e489328-cb73-462a-9950-becca04bc807/preview.webp) · [提示词](../sources/framesbase/items/4e489328-cb73-462a-9950-becca04bc807/prompt.md)
- **三个超大积分数字上下压叠，上两行白色渐隐，末行亮黄**
  做法：数字110px行高0.72字距-0.06em，前两行用白→40%→透明渐变裁切文字，末行#EDB40B实色；依次延迟0.2秒，2.2秒三次方缓出计数。少见处：渐隐叠行把往年数字做成背景层次
  手机 · 预览可见 · 来自「F1 Racing Hub」（应用界面） · [预览图](../sources/framesbase/items/20ae424d-b644-496b-942f-5495699ec947/preview.webp) · [提示词](../sources/framesbase/items/20ae424d-b644-496b-942f-5495699ec947/prompt.md)
- **三张切角数据卡，中卡下沉，渐变蓝大数字压在抽象图上**
  做法：每卡clip-path不同：一两角64px大切角，其余14px小切角；外层白80%+1.5px内边距、内层同形裁剪成细白边；中卡下沉96px；数字#185B7B→#4BBDF0渐变。少见在每卡切角不同
  电脑＋手机 · 预览可见 · 来自「LaunchEx About」（单个模块） · [预览图](../sources/framesbase/items/efe0513f-6b73-4c70-84a4-9915cae6053c/preview.webp) · [提示词](../sources/framesbase/items/efe0513f-6b73-4c70-84a4-9915cae6053c/prompt.md)

## 推荐度 4（9 条）

- **左侧标题加两列衬线大数字，右侧巨型三角标志里透出麦田**
  做法：五个指标两列排（500K+、99.8%、50+、15+、24/7），细衬线数字配极小大写灰字；不常见在右半屏把品牌三角标放大成图片蒙版，标志内露出麦田，数据区与品牌合一。提示词只有一句概述
  电脑 · 预览可见 · 来自「Acreage Farming」（整页） · [预览图](../sources/framesbase/items/3c8f451f-9163-4426-a00b-c670a8dfc6d2/preview.webp) · [提示词](../sources/framesbase/items/3c8f451f-9163-4426-a00b-c670a8dfc6d2/prompt.md)
- **两列衬线大数字配极小大写标签，右侧品牌标志形状里播放视频**
  做法：不常见在右侧用品牌标志SVG做mask-image裁视频，入场scale 0.9→1.2；数字衬线56px，标签10–12px大写白40%，两列max-content；进视口1.5s从0计数
  电脑＋手机 · 预览可见 · 来自「Arceage Stats」（单个模块） · [预览图](../sources/framesbase/items/07e2f299-7371-488f-b361-993c6062c1cb/preview.webp) · [提示词](../sources/framesbase/items/07e2f299-7371-488f-b361-993c6062c1cb/prompt.md)
- **三张等高大卡：桃色行星、渐变蝴蝶、黑底珊瑚视频，配白色巨数字**
  做法：每卡底是5秒循环视频，143px白色数字在三卡分别放上、下、上，90px白圆箭头徽章分放右下、右上、左下；黑卡叠一层mix-blend-mode:screen的#0c0c0c提亮黑位。不常见在三卡错位排数字和徽章
  电脑＋手机 · 预览可见 · 来自「Intelligent Systems」（只有首屏） · [预览图](../sources/framesbase/items/526347c5-db22-46de-994a-90795ee71626/preview.webp) · [提示词](../sources/framesbase/items/526347c5-db22-46de-994a-90795ee71626/prompt.md)
- **问候语下一条按比例分段的胶囊条，右侧三个大数字**
  做法：四段胶囊按 flex 15:15:60:10 分宽，各段上方小标签：深灰实心、黄色实心、-45° 斜纹(repeating-linear-gradient 2px/10px)、白底描边；右侧数字 5xl 配小图标和标签。不常见在用斜纹段表示进行中
  电脑＋手机 · 预览可见 · 来自「Modern HR Dashboard」（应用界面） · [预览图](../sources/framesbase/items/3bed1678-8ec8-4177-bca6-18fcdfe29ef5/preview.webp) · [提示词](../sources/framesbase/items/3bed1678-8ec8-4177-bca6-18fcdfe29ef5/prompt.md)
- **居中轮播的深色玻璃数据卡，两侧卡片朝内倾斜**
  做法：数据卡放进Swiper coverflow：rotate 30、depth 100、间距32、居中循环，卡380×480；卡片两层：外层6px内边距、白4%加12px模糊，内层黑45%、圆角23px放标题、70px大数字和三条圆点说明，底部留一行等宽小字脚注
  电脑＋手机 · 预览可见 · 来自「Neural Interface」（整页） · [预览图](../sources/framesbase/items/0c4c0ad2-ff02-4422-b1a4-f72d7ac5d9a6/preview.webp) · [提示词](../sources/framesbase/items/0c4c0ad2-ff02-4422-b1a4-f72d7ac5d9a6/prompt.md)
- **倒计时由四段胶囊层层叠压，越往右底色越深**
  做法：四个全圆角段绝对定位，左边距0/70/126/182px、右端齐平，紫底透明度0.72→0.9与z-index同步递增。少见处：用叠压胶囊代替分隔线分出天、时、分、秒
  手机 · 预览可见 · 来自「Remit Race」（应用界面） · [预览图](../sources/framesbase/items/afebd1d2-3132-4d41-9678-f4e0729c2b7f/preview.webp) · [提示词](../sources/framesbase/items/afebd1d2-3132-4d41-9678-f4e0729c2b7f/prompt.md)
- **三张40px圆角卡，底部大数字加说明，中间一张更矮**
  做法：每卡底层循环抽象视频，上盖半透明色罩，文字靠底；不常见在两侧卡高450、中间350，父级lg:items-end底对齐成凹口；数字60px行高1，说明22px灰80%；卡片间隔0.2s上浮入场
  电脑＋手机 · 预览可见 · 来自「Veloce Cards」（单个模块） · [预览图](../sources/framesbase/items/7716284d-aa03-469a-bca4-801fad90d502/preview.webp) · [提示词](../sources/framesbase/items/7716284d-aa03-469a-bca4-801fad90d502/prompt.md)
- **三张视频底数据卡，中间一张矮一截，底边对齐**
  做法：flex lg:items-end，左右卡 min-h-450、中卡 min-h-350 形成凹口；卡 rounded-[40px] p-10，视频铺底再盖各自色调半透明层（蓝25%/粉60%/灰20%），60px 数字和说明压在卡底
  电脑＋手机 · 预览可见 · 来自「Veloce Finance」（整页） · [预览图](../sources/framesbase/items/b0af2960-2168-4c44-a031-ea6e65ceb2f1/preview.webp) · [提示词](../sources/framesbase/items/b0af2960-2168-4c44-a031-ea6e65ceb2f1/prompt.md)
- **三张切角图片数据卡，中间一张下沉，大数字用蓝渐变**
  做法：三张卡各用不同clip-path：一角切64px大斜角，其余切14px小角，切角位置互不相同；外层白80%留1.5px当描边；中卡lg:mt-24下沉错落；数字36–52px，用294deg蓝渐变文字
  电脑＋手机 · 仅提示词 · 来自「Stellar Launch」（整页） · [预览图](../sources/framesbase/items/c480ad28-0836-4f62-a79e-5c1760a2531b/preview.webp) · [提示词](../sources/framesbase/items/c480ad28-0836-4f62-a79e-5c1760a2531b/prompt.md)

## 推荐度 3（15 条）

- 底部四列数据，上方是点阵字体的符号图标，下为数字和灰色说明 · 电脑＋手机 · 预览可见 · 来自「AI Runtime」（只有首屏） · [目录](../sources/framesbase/items/c02f682a-c2e4-4945-94d1-86269919c41f/)
- 首屏文字列底部三组大数字，下配极小大写标签 · 电脑＋手机 · 预览可见 · 来自「Bold Studio」（只有首屏） · [目录](../sources/framesbase/items/9709eb49-e34d-4dcc-957d-18297a7d4fda/)
- 左下角黄色大数字 3M+ 配三行说明和白色圆形图标 · 电脑＋手机 · 预览可见 · 来自「Cargo Group」（只有首屏） · [目录](../sources/framesbase/items/e290e4f4-b171-4bed-83c6-be91b333ee57/)
- 点阵世界地图上画黄色航线，下方两组大数字错位排列 · 手机 · 预览可见 · 来自「CARGOX Mobile」（应用界面） · [目录](../sources/framesbase/items/e921ded4-27ae-4449-90b7-e1fccaf274e9/)
- 底部居中一条半透明玻璃长条，四组白色细体大数字 · 电脑 · 预览可见 · 来自「ClubX Investors」（只有首屏） · [目录](../sources/framesbase/items/92633e8b-87fc-4bae-85a2-46403e60fa8d/)
- 三组大数字靠右排，紫色小号加号，下方两行大写小标签 · 电脑＋手机 · 预览可见 · 来自「Creative Studio」（只有首屏） · [目录](../sources/framesbase/items/07a691b2-5ebf-445e-8283-c8d9bbe390e5/)
- 右下三个超大数字竖排右对齐，前两个灰色渐隐，末个黄色 · 电脑＋手机 · 预览可见 · 来自「F1 Driver Profile」（只有首屏） · [目录](../sources/framesbase/items/820f6d44-47a3-4e56-849c-6e73fda5dd54/)
- +90k 等三组数字散在巨字四周，旁边各一根斜细线 · 电脑 · 预览可见 · 来自「Guardnet」（整页） · [目录](../sources/framesbase/items/9fe3b9f8-0157-4407-88ee-e3243922ae20/)
- 左下两组白色数据，每组上方一个点阵小图标 · 电脑＋手机 · 预览可见 · 来自「Mind-Body Healing」（只有首屏） · [目录](../sources/framesbase/items/b77c95d7-a443-4c8f-b53e-9f8699d3d413/)
- 左下半透明玻璃卡：5.2K大数字、小号大写标签、白色胶囊按钮 · 电脑 · 预览可见 · 来自「RIVR」（只有首屏） · [目录](../sources/framesbase/items/cc5e5574-d62e-4464-a232-b16f4e2725bc/)
- 浅色圆角大框内四个指标，竖线分隔 · 电脑 · 预览可见 · 来自「RIVR DeFi」（整页） · [目录](../sources/framesbase/items/34844aec-9b9e-4a8c-ab41-3b9b3e5561aa/)
- 毛玻璃小卡：橙色斜体 78% 配发光折线 · 电脑 · 仅提示词 · 来自「Nike Premium Landing」（只有首屏） · [目录](../sources/framesbase/items/562a4221-9e7b-4920-a1d9-30ef9d92a324/)
- 左栏粘性文案，右栏四格衬线大数字配单词 · 电脑＋手机 · 仅提示词 · 来自「OYLA」（整页） · [目录](../sources/framesbase/items/2926b160-b146-49bb-b1f8-d92e8d6f5676/)
- 超大斜体数字，右侧并排一句白色长说明，上方1px细线 · 电脑 · 仅提示词 · 来自「Pro AI Deck」（整页） · [目录](../sources/framesbase/items/9a365d37-b4bf-4260-b1df-1bfd870d4686/)
- 三格数据241、98%、36 devs，四角各一个L形圆角括号 · 电脑＋手机 · 仅提示词 · 来自「Remote Dev Collective」（整页） · [目录](../sources/framesbase/items/3571697c-aa44-4764-aac3-44c6b2a1a05a/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/stats-*.tsx`（11 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
