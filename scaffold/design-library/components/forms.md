# 表单与登录注册

共 27 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 5（2 条）

- **标题下5rem巨型灰字“$ your budget”本身就是输入框**
  做法：不常见在首屏主体是两步留资：透明input铺满，下层显示图标、值和闪烁光标，位数越多越小(4位0.92…10位0.38)；打字时标题模糊(字数×1.5px)变淡；满1000才出按钮，下一步换邮箱
  电脑 · 预览可见 · 来自「Lead Funnel」（只有首屏） · [预览图](../sources/framesbase/items/5dc36f48-4cf0-4ea5-98bf-d7bdebc18006/preview.webp) · [提示词](../sources/framesbase/items/5dc36f48-4cf0-4ea5-98bf-d7bdebc18006/prompt.md)
- **居中圆角玻璃卡：图标、渐变标题、两个输入框、白胶囊主钮和谷歌钮**
  做法：不常见在玻璃不用backdrop-filter：canvas每帧截取卡片后方视频，按半径查表做像素级折射（distort 0.06、边缘0.04），叠左上高光和白18%描边；输入框白5%底15%描边
  电脑 · 预览可见 · 来自「Solace sign-in」（单个模块） · [预览图](../sources/framesbase/items/ff5e517f-2199-4a6c-b1cc-c1fa3d9d1e12/preview.webp) · [提示词](../sources/framesbase/items/ff5e517f-2199-4a6c-b1cc-c1fa3d9d1e12/prompt.md)

## 推荐度 4（16 条）

- **大圆角玻璃输入卡，棕色示例文字，左下上传圆钮右下黑按钮**
  做法：卡宽 701px、rounded-[44px]，white/6 加 blur 20px，用 3px 纯白粗边勾轮廓，不常见在这处；示例句用 #905831 棕色；左下描边上传圆钮，右下黑胶囊
  电脑＋手机 · 预览可见 · 来自「AI Trip Planner」（只有首屏） · [预览图](../sources/framesbase/items/93ece08a-d937-4f0e-ab65-f5e5010cba71/preview.webp) · [提示词](../sources/framesbase/items/93ece08a-d937-4f0e-ab65-f5e5010cba71/prompt.md)
- **白色圆角表单卡：邮箱社交行、OR分隔、姓名邮箱、需求框和服务标签**
  做法：不常见在顶部先给灰底行“Drop us a line”邮箱＋四个彩色社交方钮，用OR线分开再进表单；服务标签多选，选中变黑边灰底；提交后原位换成绿色对勾和“You're all set!”
  电脑＋手机 · 预览可见 · 来自「Build With Us」（只有首屏） · [预览图](../sources/framesbase/items/1c65a19b-c091-4f80-8d2a-7700573f1b9b/preview.webp) · [提示词](../sources/framesbase/items/1c65a19b-c091-4f80-8d2a-7700573f1b9b/prompt.md)
- **“What sort of service?”下四个白色胶囊，可多选**
  做法：少见在联系表单先用多选胶囊代替输入框：选中变#1C2E1E深绿底白字、对勾弹簧落入；未选时显示斜体半透明提示，选后弹开“Ready to inquire about…＋Let's Go”横幅
  电脑＋手机 · 预览可见 · 来自「Contact Cybernetic」（只有首屏） · [预览图](../sources/framesbase/items/5237f4a3-5db6-477c-91a6-ecabf6c52121/preview.webp) · [提示词](../sources/framesbase/items/5237f4a3-5db6-477c-91a6-ecabf6c52121/prompt.md)
- **圆角深灰输入卡，左下三个小胶囊，右下模型名、回形针、橙色发送圆**
  做法：卡708×143、圆角26、rgba(41,41,43,.955)加blur；胶囊高30、圆角9、白色渐变底。发送圆35u、橙色163°渐变，比胶囊行高出、下沉7u，不与模型名垂直居中。不常见在这处错位
  电脑＋手机 · 预览可见 · 来自「Fastshot」（只有首屏） · [预览图](../sources/framesbase/items/bb9cee0c-c3c6-49d8-b5ad-fefe4190a1f2/preview.webp) · [提示词](../sources/framesbase/items/bb9cee0c-c3c6-49d8-b5ad-fefe4190a1f2/prompt.md)
- **红底白色下划线输入框，占位字在左、字段名在右**
  做法：每行高50px只留底边白70%，占位在左、11px字段名右对齐在同一行，省掉上方标签；勾选框20px选中变黑底白勾；提交键黑色全宽48px。不常见在字段名放进输入行右端
  手机 · 预览可见 · 来自「Footballer Portfolio」（应用界面） · [预览图](../sources/framesbase/items/43e9e2d1-32e0-4a70-a9a9-a331d9549955/preview.webp) · [提示词](../sources/framesbase/items/43e9e2d1-32e0-4a70-a9a9-a331d9549955/prompt.md)
- **玻璃预订卡：头图、两格日期、入住退房一条、价格与按钮**
  做法：两格并排玻璃日期块（日历图标＋日期＋下箭头）；入住/退房合成一条、竖线分半；点日期展开内嵌月历，选中白底、区间白 15%。不常见在时间下拉用 0.95 不透明深底＋40px 模糊，压在视频上仍清楚
  手机 · 预览可见 · 来自「Lodge Booking App」（应用界面） · [预览图](../sources/framesbase/items/bc727fce-9a9c-421f-9f9b-7a2743c93aaf/preview.webp) · [提示词](../sources/framesbase/items/bc727fce-9a9c-421f-9f9b-7a2743c93aaf/prompt.md)
- **四个线描表情单选、玻璃文本框、五格竖条能量计**
  做法：表情选中时圆填白、五官变灰#6B6B6B；能量计为五根h-20圆角竖条，已选实心白、未选白40%描边，两端各一个同高胶囊减/加键。不常见在用竖条格子代替滑杆
  手机 · 预览可见 · 来自「Mood Tracker」（应用界面） · [预览图](../sources/framesbase/items/8e9afed0-bb2f-46e2-9036-35661eeef59e/preview.webp) · [提示词](../sources/framesbase/items/8e9afed0-bb2f-46e2-9036-35661eeef59e/prompt.md)
- **居中细描边胶囊邮箱框带箭头提交，下方一行演示视频链接**
  做法：先显示Get early access描边胶囊钮，点击后换成邮箱胶囊（白20%描边、最宽320px）。不常见在占位文字每60ms逐字打出，提交后箭头变对勾、改打确认句，4秒后自动复原成按钮
  电脑 · 预览可见 · 来自「No-Code Waitlist」（只有首屏） · [预览图](../sources/framesbase/items/74c38d70-b12a-48e0-8a8e-193d30dca2bb/preview.webp) · [提示词](../sources/framesbase/items/74c38d70-b12a-48e0-8a8e-193d30dca2bb/prompt.md)
- **左半 0.92 不透明黑底表单，右半近透明玻璃窗露出视频**
  做法：少见在右半只放一个34px标志、上移70px，预览里正落在视频中旧显示器的屏幕上；左栏表单组mt-auto压到底，输入框zinc-800/70、白色主键、三等分社交键。预览标题为Join us
  电脑＋手机 · 预览可见 · 来自「NovaDesk Signup」（单个模块） · [预览图](../sources/framesbase/items/43ee8f49-c39c-4b87-9919-5ba3b5fb677b/preview.webp) · [提示词](../sources/framesbase/items/43ee8f49-c39c-4b87-9919-5ba3b5fb677b/prompt.md)
- **白色大圆角卡：两个输入框、深色胶囊登录键、OR分隔、谷歌按钮**
  做法：卡片圆角26px磨砂白；邮箱框1.5px描边、密码框无边浅灰底；登录键深色渐变全圆角。少见在手机端：照片缩成顶部横幅，卡片上移28px压住照片、上圆角28px，输入框16px字防iOS缩放
  电脑＋手机 · 预览可见 · 来自「Real-Time Alerts」（单个模块） · [预览图](../sources/framesbase/items/e73d4b7e-ad1f-4412-b00c-5bc9085f0fae/preview.webp) · [提示词](../sources/framesbase/items/e73d4b7e-ad1f-4412-b00c-5bc9085f0fae/prompt.md)
- **方括号标签、细体大品牌字、只留下划线的输入框和两级直角按钮**
  做法：标签“[ VOICE ENTRY ]”为9%白底直角块；输入框只留1px底线；两颗满宽零圆角按钮靠填充分级：次要5%白底加42%灰字，主要10%白底加白字；等宽字0.22em字距，下方居中邀请码链接
  电脑＋手机 · 预览可见 · 来自「Signal ID」（只有首屏） · [预览图](../sources/framesbase/items/a46d9236-ab5c-4ed2-9304-9f4464ccf1c6/preview.webp) · [提示词](../sources/framesbase/items/a46d9236-ab5c-4ed2-9304-9f4464ccf1c6/prompt.md)
- **深色半透明外壳顶部写额度和模型，里面嵌白色输入区**
  做法：不常见在双层壳：外层rgba(0,0,0,.24)+背景模糊、圆角18px、高200px，顶行左“60/450 credits”加绿色Upgrade、右“Powered by GPT-4o”；内层白底圆角12px，底行附件/语音/提示词灰按钮和0/3,000计数
  电脑 · 预览可见 · 来自「Transform Data」（只有首屏） · [预览图](../sources/framesbase/items/7c553857-ca5d-4640-92d7-2b6d84016f5b/preview.webp) · [提示词](../sources/framesbase/items/7c553857-ca5d-4640-92d7-2b6d84016f5b/prompt.md)
- **右下圆角玻璃预订卡：两个日期胶囊、入住退房框、价格和白按钮**
  做法：卡圆角35；少见在玻璃分两层：blur(12.5px)模糊层加 rgba(0,0,0,.25) soft-light 着色层；内部控件35%黑、圆角10；入住退房间1px竖线；日期点开是7列深色日历
  电脑＋手机 · 预览可见 · 来自「Unwind Hero」（只有首屏） · [预览图](../sources/framesbase/items/9dd6d02c-9056-4e28-94c8-985b7beab634/preview.webp) · [提示词](../sources/framesbase/items/9dd6d02c-9056-4e28-94c8-985b7beab634/prompt.md)
- **2×2 液态玻璃选项卡，左上小编号，选中卡更亮**
  做法：卡高 100px、圆角 32px；用 ::before 加 1.4px 渐变边，上下沿 0.45、20% 处 0.15、中段为 0，配 mask-composite 镂空，形成只有上下发亮的玻璃边；选中态底 12% 白、模糊 8px、边缘 0.6
  手机 · 预览可见 · 来自「Wellness Companion」（应用界面） · [预览图](../sources/framesbase/items/dda701fc-95df-47ed-aaa7-32f7e6422d92/preview.webp) · [提示词](../sources/framesbase/items/dda701fc-95df-47ed-aaa7-32f7e6422d92/prompt.md)
- **居中两行标题、两个胶囊输入框、黑色登录键，底部一排扇形图片卡**
  做法：输入框高54、圆角30、米色描边#dfd5c9，标签在框外上方缩进12px；不常见在表单下摆五张80×110圆角16的图片卡，按10°/5°/0°/-5°/-10°旋转、两端伸出屏外成扇形
  手机 · 仅提示词 · 来自「AI Assistant App」（应用界面） · [预览图](../sources/framesbase/items/1ac3b441-9d9e-461f-83d3-c8e6ec309c2f/preview.webp) · [提示词](../sources/framesbase/items/1ac3b441-9d9e-461f-83d3-c8e6ec309c2f/prompt.md)
- **深色反馈表单，粗蓝边框加绿色硬投影，像素字标题**
  做法：border-4 蓝边＋shadow-[10px_10px_0 #85D743] 硬投影，按钮同样带 4px 蓝色硬影、按下位移 0.5 去影；不常见在滚到 95% 时表单从下方旋转 15° 飞入归正（0.9s）
  电脑 · 仅提示词 · 来自「Glitch Pulse」（整页） · [预览图](../sources/framesbase/items/f892efd4-0fd7-4f73-8528-d62956626b84/preview.webp) · [提示词](../sources/framesbase/items/f892efd4-0fd7-4f73-8528-d62956626b84/prompt.md)

## 推荐度 3（9 条）

- 五个只有底线的输入框，标签在上、浅灰占位字 · 电脑＋手机 · 预览可见 · 来自「Arceage Contact Us」（单个模块） · [目录](../sources/framesbase/items/eee5efff-f54d-4647-ba4d-60c85e885787/)
- 玻璃胶囊邮箱输入框，右端嵌白色圆形箭头提交键 · 电脑 · 预览可见 · 来自「Asme」（只有首屏） · [目录](../sources/framesbase/items/c5078d23-4d3b-4fd6-8754-14085e15b163/)
- 居中标题、双社交登录、OR 分隔、两列姓名、白色大按钮 · 电脑＋手机 · 预览可见 · 来自「Aurora Onboard」（应用界面） · [目录](../sources/framesbase/items/de8e6895-65ee-4472-8da0-88cbf73e5d4c/)
- 深蓝底上三条半透明胶囊输入框和黄色胶囊发送按钮 · 手机 · 预览可见 · 来自「CARGOX Mobile」（应用界面） · [目录](../sources/framesbase/items/e921ded4-27ae-4449-90b7-e1fccaf274e9/)
- 白色长胶囊输入框，右端嵌深色注册按钮 · 电脑 · 预览可见 · 来自「HR SaaS Hero」（只有首屏） · [目录](../sources/framesbase/items/6ebb101d-80f8-43bb-9420-36668de8c75f/)
- 半透明磨砂提问卡，左下圆形加号，右下裸麦克风和黑色方形发送键 · 电脑＋手机 · 预览可见 · 来自「JungleMind」（只有首屏） · [目录](../sources/framesbase/items/4c52f842-44ec-41f2-8901-84ebc2e1a67c/)
- 聊天底部四个附件胶囊，下面是带黑色发送键的输入条 · 电脑 · 预览可见 · 来自「Live Language Classes」（应用界面） · [目录](../sources/framesbase/items/5a360021-3646-45fd-bfab-119ad064141c/)
- 深蓝底上三个半透明胶囊输入框加黄色发送键 · 手机 · 仅提示词 · 来自「Cross-Border」（整页） · [目录](../sources/framesbase/items/7ab5fd2a-7535-4ce4-9bf0-42f55d70f0c2/)
- 日历选日期加五行时间单选，选齐才能下一步 · 电脑＋手机 · 仅提示词 · 来自「Sweet Question」（应用界面） · [目录](../sources/framesbase/items/c4d07181-47a9-4fc5-b9be-43af6edd4aeb/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/auth-*.tsx`（3 个）、`src/components/blocks/contact-*.tsx`（8 个）、`src/components/blocks/waitlist-*.tsx`（3 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
