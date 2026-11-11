# 卡片与列表

共 71 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（5 条）

- **大图课程卡压在三张斜放色卡上，底部露出彩色边角**
  做法：卡宽 342、圆角 40px，播放键骑在图文交界；后三张缩到 0.94/0.88/0.82、下移 27/44/64px、转 1°/-5°/9°，各罩粉、绿、黄色；顶卡右上放时长小胶囊
  手机 · 预览可见 · 来自「Bite-Sized Courses」（应用界面） · [预览图](../sources/framesbase/items/ba990167-1d41-4796-b5dc-bf98944bef6c/preview.webp) · [提示词](../sources/framesbase/items/ba990167-1d41-4796-b5dc-bf98944bef6c/prompt.md)
- **48px 圆角玻璃卡，边缘彩虹折射，内有两条研究摘要和一条波形线**
  做法：卡内放全视口大小的 canvas，每帧把背景视频按 cover 裁切画入并反向偏移对齐；套 SVG 滤镜：噪声只作用在边缘，红绿蓝分别位移 65/56/47 再 screen 合成出色散
  电脑 · 预览可见 · 来自「Glass Orb」（只有首屏） · [预览图](../sources/framesbase/items/e399ab56-5fd5-4af6-a247-c4c3d5e7118e/preview.webp) · [提示词](../sources/framesbase/items/e399ab56-5fd5-4af6-a247-c4c3d5e7118e/prompt.md)
- **作品做成桌面图标：80px缩略图加白字标题，散布可拖动**
  做法：按百分比锚点绝对定位，可拖动，位移<5px才算点击，点开弹macOS式窗口(三色交通灯、回弹放大)；不常见在悬停仿Finder选中：图加2px白20%外框和暗底，标题变rgb(0,102,221)蓝底
  电脑 · 预览可见 · 来自「Interactive Portfolio」（只有首屏） · [预览图](../sources/framesbase/items/f410a716-3e14-42a5-9f44-cb7beae24866/preview.webp) · [提示词](../sources/framesbase/items/f410a716-3e14-42a5-9f44-cb7beae24866/prompt.md)
- **48px大圆角透明卡，边缘折射背景视频带彩虹色散**
  做法：卡内放视口大小的canvas，每帧把背景视频按cover画入并偏移对齐；canvas套SVG滤镜：噪声乘边缘遮罩，RGB分别位移65/56/47再screen合成，只在边缘折射。不常见在实时折射真实背景
  电脑＋手机 · 预览可见 · 来自「Planetary Pulse」（只有首屏） · [预览图](../sources/framesbase/items/127a6c46-776c-4ceb-841e-414b93844084/preview.webp) · [提示词](../sources/framesbase/items/127a6c46-776c-4ceb-841e-414b93844084/prompt.md)
- **半透明角色卡只在右上和左下画 L 形角框，选中卡变白更宽**
  做法：不用整圈边框，只画右上、左下两个 L 角，线宽 3.5u、臂长等于卡高(技能格为一半)、末端 30° 斜切；默认卡白 46% 加模糊，选中卡实白 #fefefe 去模糊、宽 302→326u；末尾加号格同款角框
  电脑＋手机 · 预览可见 · 来自「Robot Battle Arena」（应用界面） · [预览图](../sources/framesbase/items/28f0ede6-4ef5-4224-8413-083968f60b18/preview.webp) · [提示词](../sources/framesbase/items/28f0ede6-4ef5-4224-8413-083968f60b18/prompt.md)

## 推荐度 4（38 条）

- **大圆角液态玻璃卡折射背后主图，旁边斜放头盔图片卡**
  做法：玻璃卡340x460、圆角48，卡内复制主图对齐视口、放大1.06后套边缘折射加RGB色散SVG滤镜；旁边220x320小卡里图片scale 1.4旋转15°，悬停转到18°
  电脑＋手机 · 预览可见 · 来自「Angel Shield」（只有首屏） · [预览图](../sources/framesbase/items/afa791e1-5649-4a43-8c0c-adf81d91dde8/preview.webp) · [提示词](../sources/framesbase/items/afa791e1-5649-4a43-8c0c-adf81d91dde8/prompt.md)
- **卡面铺视频，左中银色芯片、右上标志、右下两枚叠圆；背面磁条加卡号**
  做法：不常见在用5层div叠出卡厚（translateZ±1.47px）；背面复用同段视频加blur(16px)，顶部黑85%磁条，左下JetBrains Mono写卡号、姓名、CVV；圆角16px
  电脑 · 预览可见 · 来自「Animated Cards」（单个模块） · [预览图](../sources/framesbase/items/cfaba27b-46ec-44f6-907c-07ef200e6fe1/preview.webp) · [提示词](../sources/framesbase/items/cfaba27b-46ec-44f6-907c-07ef200e6fe1/prompt.md)
- **右下白色播放卡：蓝图标方块、曲名、细进度条，下排三颗独立按钮**
  做法：白底 rounded-2xl，左 44px blue-700 圆角方块，右曲名、1px 进度条、10px 时间；控制键拆到卡外：Prev、Next 白胶囊夹 40px 圆形心形键，都带阴影
  电脑＋手机 · 预览可见 · 来自「Audio Showcase」（只有首屏） · [预览图](../sources/framesbase/items/f4ded56d-d79f-4724-96cb-513f96b6e1b8/preview.webp) · [提示词](../sources/framesbase/items/f4ded56d-d79f-4724-96cb-513f96b6e1b8/prompt.md)
- **右下细线框说明卡，左下切角，上方贴冰蓝方角标签**
  做法：少见在切角边框：卡内绝对定位SVG polygon，左下切30×30的45°角，preserveAspectRatio=none 配 non-scaling-stroke 保持1px线
  电脑＋手机 · 预览可见 · 来自「Aurex Finance」（只有首屏） · [预览图](../sources/framesbase/items/a8257415-cb61-444b-b4b3-2f12299d2ada/preview.webp) · [提示词](../sources/framesbase/items/a8257415-cb61-444b-b4b3-2f12299d2ada/prompt.md)
- **三张无缝相接的视频高格，品类名竖排自下而上**
  做法：md:grid-cols-3 无间距，格高 750px、p-12；名称 text-8xl 用 writing-mode:vertical-lr 加 rotate(180deg) 自下往上读；悬停视频 scale-105、遮罩 10%→20%、字上移 8px。不常见在竖排大字当分类标签。
  电脑 · 预览可见 · 来自「Beauty Categories」（单个模块） · [预览图](../sources/framesbase/items/3de06de5-499c-4a15-8880-e01e51f637fd/preview.webp) · [提示词](../sources/framesbase/items/3de06de5-499c-4a15-8880-e01e51f637fd/prompt.md)
- **无圆角细线格连成一排，格内顶部分类小字、产品图、名称价格**
  做法：不常见在共用边框：每张 border-gray-200 加 -ml-[1px] 折叠成连续格线，桌面宽 calc(25%-1px)；顶部分类区固定 h-12；原价灰色删除线；竖向滚轮转横向滚动
  电脑 · 预览可见 · 来自「Beauty Products」（单个模块） · [预览图](../sources/framesbase/items/fbb5c4fb-fead-4d73-b4a9-fa1513e9a0e2/preview.webp) · [提示词](../sources/framesbase/items/fbb5c4fb-fead-4d73-b4a9-fa1513e9a0e2/prompt.md)
- **深色玻璃卡与彩色渐变图卡混排，底部白色胶囊加圆形箭头**
  做法：卡高 144px、圆角 20px，玻璃卡 #2F2F2F 60% 加 blur 52px；图卡底部放白胶囊（8 Risks/Details）配白圆箭头；Health Snapshot 卡悬停变白底黑字、高度长到 280px 展开全文
  电脑＋手机 · 预览可见 · 来自「Bio-Age Dashboard」（只有首屏） · [预览图](../sources/framesbase/items/b1d9266f-e8d0-408d-aa23-130acb01b497/preview.webp) · [提示词](../sources/framesbase/items/b1d9266f-e8d0-408d-aa23-130acb01b497/prompt.md)
- **视频缩略图四角有白色取景框角标，标题右侧彩色分类胶囊**
  做法：每个视频四角放 12px、1.5px 白色 L 形角标，内缩 15px，像取景框，不常见在这处；悬停视频放大 1.08、盖 25% 黑层、中心 70px 半透明圆“+”放大；分类胶囊每篇一色
  电脑＋手机 · 预览可见 · 来自「Blog Showcase」（单个模块） · [预览图](../sources/framesbase/items/2b73a953-37be-4603-8326-908358c4456f/preview.webp) · [提示词](../sources/framesbase/items/2b73a953-37be-4603-8326-908358c4456f/prompt.md)
- **日期方块加标题时间的活动列表，深色带垫住标题和首项**
  做法：每行左侧68x90日期方块（上34px日数、下18px月份），首项白底、其余奶油#F1E5C6；白色正文区先铺220高深色带垫住Upcoming和首行再转白；末项50%透明暗示还有更多
  手机 · 预览可见 · 来自「Church Community」（应用界面） · [预览图](../sources/framesbase/items/2aeefa36-09e6-45f0-a6f1-e0e6ed30bc9b/preview.webp) · [提示词](../sources/framesbase/items/2aeefa36-09e6-45f0-a6f1-e0e6ed30bc9b/prompt.md)
- **天蓝大色块正中一张小产品图，四角放极小文字，右下描边按钮**
  做法：产品图只占面板宽 40%（140–220px）、比例 220/340、圆角 2px，四周大片留白；左下香调两层排：小字标签+粗体大写宽字距成分；右下描边钮悬停白底从左扫入
  电脑＋手机 · 预览可见 · 来自「Daisy Sweet」（单个模块） · [预览图](../sources/framesbase/items/22ab490d-62ff-4cf1-9794-baa8d593fd03/preview.webp) · [提示词](../sources/framesbase/items/22ab490d-62ff-4cf1-9794-baa8d593fd03/prompt.md)
- **柠檬绿面板中央小瓶图，四角分放品牌、风格、香调和按钮**
  做法：底色 #BDE84F，上两角 12px 小字，中央 220×340 小图加名称容量，左下三段香调（小标签加粗体大写宽字距），右下 1px 黑框 SHOP NOW 悬停白色自左填充。不常见在大片纯色只靠四角小字撑版。
  电脑＋手机 · 预览可见 · 来自「Daisy Wild」（单个模块） · [预览图](../sources/framesbase/items/33f78e48-9c2a-45ea-975e-f192330f1c70/preview.webp) · [提示词](../sources/framesbase/items/33f78e48-9c2a-45ea-975e-f192330f1c70/prompt.md)
- **大圆角照片服务卡，左上细体白字，底部黑色胶囊预约键**
  做法：卡片圆角38，标题50px细体白字直接压照片；右上72px毛玻璃圆形信息键，底部半透明深色圆形聊天键加324×79黑胶囊“Schedule Surgery”。不常见在聊天和预约键直接放进卡内底部
  手机 · 预览可见 · 来自「Dental Care App」（应用界面） · [预览图](../sources/framesbase/items/83ca9018-95d9-40d5-a2d5-80f998df91a2/preview.webp) · [提示词](../sources/framesbase/items/83ca9018-95d9-40d5-a2d5-80f998df91a2/prompt.md)
- **底部两张贴边玻璃卡，各放车手名和超大车号**
  做法：两卡各占半宽、高200px，只上圆角2xl并去掉底边框，rgba(20,20,30,0.8)加blur(16px)和1px白10%描边；车号110px行高0.79。少见处：卡片从屏幕底边长出，像抽屉露头
  手机 · 预览可见 · 来自「F1 Racing Hub」（应用界面） · [预览图](../sources/framesbase/items/20ae424d-b644-496b-942f-5495699ec947/preview.webp) · [提示词](../sources/framesbase/items/20ae424d-b644-496b-942f-5495699ec947/prompt.md)
- **竖长圆角卡，左上国家名、右上时区胶囊，底部城市与橙色箭头**
  做法：圆角28px、1px 黑10%边框、无阴影；不常见在悬停面板：底部62%加无色 blur(30px) 玻璃，mask 渐变从上淡入，玻璃瞬间出现，地址四行55ms依次上浮。提示词图为街景，预览是模糊地标
  电脑＋手机 · 预览可见 · 来自「Global Hubs」（单个模块） · [预览图](../sources/framesbase/items/3bc0da03-c46d-4969-a170-0a01da933386/preview.webp) · [提示词](../sources/framesbase/items/3bc0da03-c46d-4969-a170-0a01da933386/prompt.md)
- **白色直角商品卡：名称规格在上，戒指居中，起价左下，黑方块箭头右下**
  做法：卡宽25.4%贴右下角、高276px、内边距12px，商品图绝对居中宽75%；不常见在用92×84px黑色实心方块当跳转键直接嵌在卡角，左侧图卡同样外挂86×84黑方块和整宽黑条按钮
  电脑＋手机 · 预览可见 · 来自「Jewelry Store」（只有首屏） · [预览图](../sources/framesbase/items/2419f979-5d80-437a-bf7d-840d1d1b1c4a/preview.webp) · [提示词](../sources/framesbase/items/2419f979-5d80-437a-bf7d-840d1d1b1c4a/prompt.md)
- **两侧各三张切角细线框卡，深青标题配小号副标题**
  做法：卡用 SVG polygon 14,0 100,0 100,86 86,100 0,100 0,14 画左上、右下切角，preserveAspectRatio=none 加 vector-effect 非缩放描边，青色25%透明度1px；两列 lg:mt-36 下移，夹住中间460px视频。不常见在用 SVG 做可拉伸切角边框
  电脑＋手机 · 预览可见 · 来自「LaunchEx Submissions」（单个模块） · [预览图](../sources/framesbase/items/8ed108d3-543a-43fc-acd0-fbbe1cf40446/preview.webp) · [提示词](../sources/framesbase/items/8ed108d3-543a-43fc-acd0-fbbe1cf40446/prompt.md)
- **两列方形粉彩卡，左下彩色标签加深色标题，右上白色圆形斜箭头**
  做法：每张卡底是循环播放的粉彩 3D 视频而不是图片，少见；圆角 28px、1:1；标签 9px 彩色胶囊（每卡一色），标题 #1F111D 14px；右上 40px 白圆、箭头转 -45°
  手机 · 预览可见 · 来自「LearnHub」（应用界面） · [预览图](../sources/framesbase/items/ca338aa1-5128-4bd8-9287-ec8174af665b/preview.webp) · [提示词](../sources/framesbase/items/ca338aa1-5128-4bd8-9287-ec8174af665b/prompt.md)
- **三张人物竖卡，悬停那张展开，其余收窄并显示竖排标签**
  做法：用 flex 做手风琴：悬停卡 flex 2.5，其余 0.8，0.7s 过渡；收窄卡文字改 writing-mode:vertical-rl 竖排，背后半截深色 #1C1D2D 色块；展开卡左下双行标题、右下大数字加 TOPICS
  电脑 · 预览可见 · 来自「Learnly」（只有首屏） · [预览图](../sources/framesbase/items/b71d99d2-af9e-47f4-b365-f6bbe407f13e/preview.webp) · [提示词](../sources/framesbase/items/b71d99d2-af9e-47f4-b365-f6bbe407f13e/prompt.md)
- **三列满高视频分类块，左侧超大竖排品类名，底部白胶囊**
  做法：三列无间距、高 750px，视频铺底；品类名 text-8xl，writing-mode:vertical-lr 再转 180° 从下往上读；悬停视频放大。不常见在竖排巨字当分类标签
  电脑＋手机 · 预览可见 · 来自「Luxury Ecommerce Design」（整页） · [预览图](../sources/framesbase/items/c644c3ce-0172-4767-be08-92696f951fde/preview.webp) · [提示词](../sources/framesbase/items/c644c3ce-0172-4767-be08-92696f951fde/prompt.md)
- **超粗压缩大写标题下接圆角视频卡，卡底渐进模糊承载文字**
  做法：少见在同视频叠两层：复制一份 blur(16px) scale(1.08)，mask 从48%透明渐到92%全显，做出卡底渐进磨砂；再叠暖色和底部绿渐变，圆角26px
  手机 · 预览可见 · 来自「Luxury Escapes」（应用界面） · [预览图](../sources/framesbase/items/608b29bc-96f3-47e5-9caf-3f41220456a1/preview.webp) · [提示词](../sources/framesbase/items/608b29bc-96f3-47e5-9caf-3f41220456a1/prompt.md)
- **面板底部三张浅灰小卡：图标说明、两组数字、带播放键的缩略图**
  做法：三列等宽、18px圆角、#f5f7f6底，标题在上内容沉底；数字卡12k与24k用1px竖线分开，第二个数连标签整体降为#b6bfbc浅灰。少见在用整组变浅区分主次数字
  电脑＋手机 · 预览可见 · 来自「Mindora」（只有首屏） · [预览图](../sources/framesbase/items/3c6b1c10-2ed3-4f70-8696-17dc413136f4/preview.webp) · [提示词](../sources/framesbase/items/3c6b1c10-2ed3-4f70-8696-17dc413136f4/prompt.md)
- **两张大圆角视频作品卡，下方灰色说明加粗体标题**
  做法：视频容器rounded-2xl，左下36px圆钮悬停时宽度展开到148px成胶囊，文字延迟100ms淡入、图标从-45°转正。不常见在圆点展开成文字胶囊。悬停效果只在提示词里
  电脑＋手机 · 预览可见 · 来自「Modern Agency」（整页） · [预览图](../sources/framesbase/items/e760094c-978e-4f3e-9e3a-11f6d0e83f5a/preview.webp) · [提示词](../sources/framesbase/items/e760094c-978e-4f3e-9e3a-11f6d0e83f5a/prompt.md)
- **深色玻璃小卡带缩略图，用竖线和白点指向画面实物**
  做法：卡片rgba(22,20,18,.28)底、blur、1px白30%边、圆角16；1px竖线连9px白点，入场按卡→线scaleY→点放大依次播；手机去掉线点改横滑吸附条。不常见在卡片钉在画面实物上
  电脑＋手机 · 预览可见 · 来自「Mountain Retreat」（只有首屏） · [预览图](../sources/framesbase/items/dc2bff12-092e-488c-8e55-3ea965d2bd18/preview.webp) · [提示词](../sources/framesbase/items/dc2bff12-092e-488c-8e55-3ea965d2bd18/prompt.md)
- **电影海报卡层层叠在后，前卡可往下拖走**
  做法：4张卡，后层每层上移24px、缩小5%，透明度1/.85/.6/.4。只允许下拖，拖动加旋转dragY×0.015deg，超80px播0.48s掉落动画后把首张移到末尾；背景用当前卡图模糊40px。提示词写了拖拽部分
  手机 · 预览可见 · 来自「Movie Premiere」（应用界面） · [预览图](../sources/framesbase/items/6f71de05-2838-4d33-b562-a2908a105305/preview.webp) · [提示词](../sources/framesbase/items/6f71de05-2838-4d33-b562-a2908a105305/prompt.md)
- **36px 圆角深色卡，左上胶囊标签，底部标题加两条要点**
  做法：不常见在标签图标表阶段：空心圆环里实心点半径 0/2/3/4 逐张变大。悬停 500ms：顶图从 -30% 滑入，暗渐变上推，文字上移 8px，渐变按钮 max-height 0→80 展开
  电脑 · 预览可见 · 来自「NexaCore Process」（单个模块） · [预览图](../sources/framesbase/items/1246dfa7-68ac-465c-8320-137a826e55c1/preview.webp) · [提示词](../sources/framesbase/items/1246dfa7-68ac-465c-8320-137a826e55c1/prompt.md)
- **白色大圆角任务卡，三行细线分隔，中间一张斜放**
  做法：rounded-28px，三行用黑10%细线分：图标+标题+彩色状态胶囊／三列标签值（第三列限宽120）／头像组+按钮。不常见在中间那张rotate 2deg，打破整齐的竖排
  电脑 · 预览可见 · 来自「Nexar」（应用界面） · [预览图](../sources/framesbase/items/fc46e2cd-c997-4319-b575-3074317c69ba/preview.webp) · [提示词](../sources/framesbase/items/fc46e2cd-c997-4319-b575-3074317c69ba/prompt.md)
- **玻璃框里嵌4:3视频，下方单独一条玻璃信息条带圆箭头**
  做法：卡拆两块：上块玻璃框圆角32内边距18，内层圆角24放视频；下块圆角20信息条，左标签+分数，右48px玻璃圆箭头键。玻璃亮边用::before渐变加mask镂空成1.4px。少见在媒体框与信息条分离
  电脑＋手机 · 预览可见 · 来自「Orbis Cards」（单个模块） · [预览图](../sources/framesbase/items/d71ec79f-15fc-44e4-9761-58131adb3197/preview.webp) · [提示词](../sources/framesbase/items/d71ec79f-15fc-44e4-9761-58131adb3197/prompt.md)
- **4:3大图卡，左下白色信息牌压在图上，右上方框加号**
  做法：白底信息牌贴左下角、宽≤70%，放标题、分类和年份；悬停时12×8个黑块按对角线依次放大盖满（延迟(行+列)×0.018s）；不常见在像素溶解式悬停，卡内小方块还随鼠标偏移
  电脑 · 预览可见 · 来自「Pixel Grid Hover」（单个模块） · [预览图](../sources/framesbase/items/b9553c71-a6e4-420c-a103-00f5554d3f19/preview.webp) · [提示词](../sources/framesbase/items/b9553c71-a6e4-420c-a103-00f5554d3f19/prompt.md)
- **白色大圆角横卡：左视频缩略图，右标题灰字和黑色胶囊按钮**
  做法：白底圆角32px、内边距16px、高200px，左侧200px宽循环视频圆角20px；少见在850px以下改成固定贴底的抽屉卡，上圆角40px、阴影朝上
  电脑＋手机 · 预览可见 · 来自「Scenic Travel」（整页） · [预览图](../sources/framesbase/items/360e0f1d-af3a-4b32-843c-71690e95202f/preview.webp) · [提示词](../sources/framesbase/items/360e0f1d-af3a-4b32-843c-71690e95202f/prompt.md)
- **白色磨砂圆角卡，小猫方形头像带爱心徽章，角落淡爱心**
  做法：卡片白88%加18–20px模糊、1px白边，叠三层玫瑰色阴影（0 30px 80px、0 8px 24px、内顶1px白线）；伪元素放120–180px淡粉“♥”旋转±9–20°从角落探出；头像框145deg铜色渐变，36px爱心徽章压右下角
  电脑＋手机 · 预览可见 · 来自「Sweet Question」（应用界面） · [预览图](../sources/framesbase/items/c4d07181-47a9-4fc5-b9be-43af6edd4aeb/preview.webp) · [提示词](../sources/framesbase/items/c4d07181-47a9-4fc5-b9be-43af6edd4aeb/prompt.md)
- **200px高风景卡，左上“N moments”玻璃胶囊，底部半截白色巨字**
  做法：城市名96px粗体、白色55%透明，装进80px高overflow:hidden容器，字的下半截被卡底切掉；左上玻璃胶囊、右上32px玻璃圆更多键；卡距16px，入场从150ms起每张+120ms上浮。不常见在故意裁掉标题下半截
  手机 · 预览可见 · 来自「Travel Journal」（应用界面） · [预览图](../sources/framesbase/items/b92abcca-3dad-493c-bb27-932bd8dd6c3b/preview.webp) · [提示词](../sources/framesbase/items/b92abcca-3dad-493c-bb27-932bd8dd6c3b/prompt.md)
- **三张等宽竖卡填满下方，顶部居中国名，右下黑方块箭头**
  做法：少见在卡片吃满剩余视口：网格 flex:1 min-height:0，卡 height:100%；国名 Anton 顶部居中；悬停卡片时方形箭头反白、卡上移3px；900px 以下改单列4:5
  电脑＋手机 · 预览可见 · 来自「Worldwide Hubs」（单个模块） · [预览图](../sources/framesbase/items/f698964b-75ec-44b8-9a2c-e0ecab7d1cb3/preview.webp) · [提示词](../sources/framesbase/items/f698964b-75ec-44b8-9a2c-e0ecab7d1cb3/prompt.md)
- **三张数据卡，一个光点沿圆角边框循环游走**
  做法：少见在光点真沿边框走：隐形SVG rect用getPointAtLength取坐标写入--glow-x/y，7s一圈；三层mask-composite只露边框，分别模糊4/2/0px，三卡起点错开
  电脑＋手机 · 仅提示词 · 来自「Mythic VPN」（只有首屏） · [预览图](../sources/framesbase/items/abb80161-e462-4a7a-abe4-f37e93706757/preview.webp) · [提示词](../sources/framesbase/items/abb80161-e462-4a7a-abe4-f37e93706757/prompt.md)
- **固定后横向滚动的商品卡排，卡间1px黑竖线**
  做法：区块pin住，6张33.333vw宽白卡（图高280px、名称18px、价格60%透明）横向平移；平移完后中间一层视频从宽0%向两边对称展开到100%并随滚动播放。少见在横滚收尾接视频揭幕
  电脑＋手机 · 仅提示词 · 来自「OYLA」（整页） · [预览图](../sources/framesbase/items/2926b160-b146-49bb-b1f8-d92e8d6f5676/preview.webp) · [提示词](../sources/framesbase/items/2926b160-b146-49bb-b1f8-d92e8d6f5676/prompt.md)
- **12栏便当格作品卡，7/5/5/7交替，照片叠网点**
  做法：卡片rounded-3xl，照片上叠radial-gradient 1px黑点、4×4px间距、opacity 20%、multiply；悬停整卡蒙70%底色加blur，中间出渐变描边白胶囊“View — 标题”。不常见在照片叠半调网点
  电脑 · 仅提示词 · 来自「Portfolio Cosmic」（整页） · [预览图](../sources/framesbase/items/9e8ed655-6ab9-479b-9499-4cf1676a7cc2/preview.webp) · [提示词](../sources/framesbase/items/9e8ed655-6ab9-479b-9499-4cf1676a7cc2/prompt.md)
- **黑色面板上下滑入，商品图稀疏错落排布，进出视口时缩放**
  做法：4列、格子2:3，每行一张图，列号(r*2+r%2)%cols，每3行多放一张，其余留空。卡片按位置算scale：进入用(vh-top)/(vh*0.6)，离开用bottom/(vh*0.4)，取小值。不常见在留空错落
  电脑＋手机 · 仅提示词 · 来自「PROMPT」（整页） · [预览图](../sources/framesbase/items/f3bd46c2-eb66-40f5-ac4c-5b77dc86b259/preview.webp) · [提示词](../sources/framesbase/items/f3bd46c2-eb66-40f5-ac4c-5b77dc86b259/prompt.md)
- **横滑目的地大图卡，底部渐隐磨砂层托着国名和价格**
  做法：卡 240×310、圆角 24px；底部半高叠 backdrop-blur＋黑 40% 渐变，再用 mask 让模糊从下往上渐隐，无硬边；右上白色小徽章 Curated。不常见在渐隐式磨砂
  手机 · 仅提示词 · 来自「Travel Explorer」（应用界面） · [预览图](../sources/framesbase/items/87fa1b62-4ce6-4d32-940b-3605df144bfa/preview.webp) · [提示词](../sources/framesbase/items/87fa1b62-4ce6-4d32-940b-3605df144bfa/prompt.md)
- **三张 9:16 白边视频卡扇形叠放，背后渐隐巨字**
  做法：三卡负边距叠放，左右转 ±8°、中卡放大 1.05，8px 白边 rounded-3xl；悬停向外弹开（x±60、转±12°）并播视频，移开回 0 秒；背后巨字渐隐。不常见在悬停才播的扇形视频卡
  电脑＋手机 · 仅提示词 · 来自「Yoga Coach」（只有首屏） · [预览图](../sources/framesbase/items/b371f550-9988-4908-8013-9fc5b4ee1c17/preview.webp) · [提示词](../sources/framesbase/items/b371f550-9988-4908-8013-9fc5b4ee1c17/prompt.md)

## 推荐度 3（28 条）

- 房源概要卡和相似房源列表，缩略图配价格、地址 · 电脑＋手机 · 预览可见 · 来自「3D Property」（应用界面） · [目录](../sources/framesbase/items/791ff0e0-b2b2-4fe2-98b4-4630dcd85f0f/)
- 居中大食谱卡左右露出两张缩小卡，卡内大图、时长、难度条和热量 · 手机 · 预览可见 · 来自「AI Calorie Tracker」（应用界面） · [目录](../sources/framesbase/items/12389bdf-1135-432d-b8bb-b22f86f221cc/)
- 两列作品卡，4:3圆角玻璃框装动图，下方标题和灰色分类 · 电脑 · 预览可见 · 来自「AI Designer Agency」（整页） · [目录](../sources/framesbase/items/4b8b2bd3-30c0-4d83-b30f-471df9157905/)
- 白色大圆角小卡，方形图片下接标题和蓝色圆形箭头 · 电脑＋手机 · 预览可见 · 来自「Augmented Sight」（只有首屏） · [目录](../sources/framesbase/items/e80151c8-1e62-482a-b463-441d363cf76d/)
- 方形圆角商品图，下方居中名称、月价和整宽渐变边按钮 · 电脑 · 预览可见 · 来自「E-commerce Website」（整页） · [目录](../sources/framesbase/items/0ac09789-7e7f-4235-b4f7-59aa044caee8/)
- 右下白色磨砂卡：标题、两条发现和一条波形线 · 电脑＋手机 · 预览可见 · 来自「Eco Intelligence」（只有首屏） · [目录](../sources/framesbase/items/2239e0a4-2fde-4f57-b7a4-9eb10a4578c3/)
- 白底商品卡：左上名称材质，中间产品图，右下贴边黑方块 · 手机 · 预览可见 · 来自「Fine Jewelry Shop」（应用界面） · [目录](../sources/framesbase/items/8521e3b9-cf62-436b-92d8-99d657c246eb/)
- 六张细边框任务卡，标题加说明，底部圆形小图标 · 电脑＋手机 · 预览可见 · 来自「FlowMate」（整页） · [目录](../sources/framesbase/items/525a6b21-3883-43b8-8ec8-be44162bd851/)
- 白色半透明玻璃卡：城市、大号温度、三项风雨指标 · 电脑＋手机 · 预览可见 · 来自「Forecast Center」（应用界面） · [目录](../sources/framesbase/items/3dc22911-f055-4773-b754-497b02af0407/)
- 玻璃信息卡：三行标题配圆形缩略图，两枚胶囊和带加号按钮 · 电脑＋手机 · 预览可见 · 来自「Heart Health Dashboard」（应用界面） · [目录](../sources/framesbase/items/76084b77-740a-484e-97bf-195a99cbe572/)
- 两列黑白人像讲者卡，下方姓名和截断职位 · 手机 · 预览可见 · 来自「Innovation Summit」（应用界面） · [目录](../sources/framesbase/items/907fc85e-ba83-4e66-ac1e-d632af12e053/)
- 玻璃房源卡：视频缩略图、大号细体价格、白色整宽预订钮 · 手机 · 预览可见 · 来自「Lodge Booking App」（应用界面） · [目录](../sources/framesbase/items/bc727fce-9a9c-421f-9f9b-7a2743c93aaf/)
- 图标加名称在左、彩色百分比加小字在右的玻璃列表 · 手机 · 预览可见 · 来自「Mood Tracker」（应用界面） · [目录](../sources/framesbase/items/8e9afed0-bb2f-46e2-9036-35661eeef59e/)
- 两张白色横条卡：圆形图标、标题加小字说明、右侧箭头 · 电脑＋手机 · 预览可见 · 来自「Nexto 404」（只有首屏） · [目录](../sources/framesbase/items/9e87b015-0ea2-4fd5-a5ab-fca0eefe2556/)
- 玻璃描边大圆角卡，内嵌方形视频，底部玻璃评分条 · 电脑＋手机 · 预览可见 · 来自「Orbis NFT」（整页） · [目录](../sources/framesbase/items/5ba0755e-daa5-48aa-98d7-1c2e466006cf/)
- 两列白色圆角商品卡，右上加号，灰色品名、大号粗体价格 · 手机 · 预览可见 · 来自「Pet Products」（应用界面） · [目录](../sources/framesbase/items/eb13e7e9-22df-4a30-8bc7-bdd80525a805/)
- 2px 浅灰描边的 60px 圆角卡，左上大编号，右上描边胶囊按钮 · 电脑 · 预览可见 · 来自「Projects Catalog」（单个模块） · [目录](../sources/framesbase/items/bb53dde7-07e7-4395-a06d-c4e65661a57f/)
- 竖版书封卡，左下类型胶囊和书名评分，右下白色圆形收藏键 · 电脑＋手机 · 预览可见 · 来自「Reading Library」（应用界面） · [目录](../sources/framesbase/items/226a0cf0-7336-4461-8496-ecd58088e1f4/)
- 整图卡片压白色粗标题、标签胶囊和深色操作条 · 手机 · 预览可见 · 来自「Social Hangouts」（应用界面） · [目录](../sources/framesbase/items/e41d4175-33d0-4aac-8986-f6fa35411eb3/)
- 384px 方形海报卡，每张是一套迷你首屏：视频、标题、小字、徽标 · 电脑 · 预览可见 · 来自「Social Media Posts」（单个模块） · [目录](../sources/framesbase/items/3a971795-411b-48d2-9c19-0e8cedebcca3/)
- 左下半透明玻璃卡：方形缩略图、项目编号标题、描边小按钮 · 电脑＋手机 · 预览可见 · 来自「Viktor Portfolio」（只有首屏） · [目录](../sources/framesbase/items/e9cdbaed-d836-4a8b-93ca-24af8614be66/)
- 白底房源卡，大图下方名称价格同行，地区路径和图标参数行 · 电脑＋手机 · 预览可见 · 来自「Zenith Realty」（整页） · [目录](../sources/framesbase/items/d5064e77-ffc6-40e4-b54c-a2ff632b8b19/)
- 三张大圆角项目卡吸顶堆叠，往下滚时后面的卡压上来 · 电脑 · 仅提示词 · 来自「3D Jack Portfolio」（整页） · [目录](../sources/framesbase/items/29af4f43-2758-4c92-9e0b-43707fdc8f49/)
- 三列透明卡，上方4:3视频，下方标题说明 · 电脑＋手机 · 仅提示词 · 来自「AI Automation」（整页） · [目录](../sources/framesbase/items/3b993816-576e-43fa-bc2d-b4178087fcdf/)
- 白底四列产品图格，第二行中间一张横跨两列 · 电脑＋手机 · 仅提示词 · 来自「Cinematic Landing Page」（整页） · [目录](../sources/framesbase/items/af51429c-9eb9-4cbe-82bd-758824901784/)
- 横滑商品卡，浅灰方图左上黑色直角小标签 · 电脑＋手机 · 仅提示词 · 来自「Futuristic Eyewear」（只有首屏） · [目录](../sources/framesbase/items/06039526-78c5-43fc-b62a-e0a8736456bc/)
- 五个视频竖条横排，悬停一条展开，背后衬巨型 Velar. 字标 · 电脑＋手机 · 仅提示词 · 来自「Luxury Real Estate」（整页） · [目录](../sources/framesbase/items/9b67fdf3-96e8-4a42-9824-519b0a1f2f22/)
- 380×480人物照片卡横向跑马灯，上下压深色渐变 · 电脑＋手机 · 仅提示词 · 来自「Routine Coach」（整页） · [目录](../sources/framesbase/items/047e2722-0876-4803-8529-41425ac10c0b/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/blog-*.tsx`（7 个）、`src/components/blocks/ecommerce-*.tsx`（7 个）、`src/components/blocks/showcase-*.tsx`（5 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
