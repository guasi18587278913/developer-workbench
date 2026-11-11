# 常见问题与折叠面板

共 6 条，按推荐度从高到低排。推荐度是 AI 看预览图、读提示词后给的，只用来排先后，选用前仍要看图。

- 预览可见：预览图里看得到这个组件。
- 仅提示词：预览图没拍到，按提示词的文字写的，用前先读提示词。
- 每条素材的目录是 `../sources/framesbase/items/<编号>/`，里面 `preview.webp` 是预览图，`prompt.md` 是提示词。

## 推荐度 4（3 条）

- **深灰圆角卡内四个模块折叠行，右侧圆形箭头键**
  做法：卡外再包一圈p-2边框层，1px边框由跟随鼠标的520px径向白光点亮（全局mousemove写--spot-x/y，mask-composite只露边框）；行头是11px大写眉题加20px标题，展开项每行带20px圆形勾
  电脑 · 预览可见 · 来自「Apex Program Accordion」（单个模块） · [预览图](../sources/framesbase/items/6f3f8c5b-a17f-43b8-8bce-c765fa65af63/preview.webp) · [提示词](../sources/framesbase/items/6f3f8c5b-a17f-43b8-8bce-c765fa65af63/prompt.md)
- **分类筛选胶囊加深色圆角问答卡，卡上方挂小标签页**
  做法：少见在每组第一张卡上方挂一个只圆上角的#1a1c22小页签标出分组；卡#131519、1.5px白14%边、圆角22px，右侧36px细边圆形加号；上方多行描边筛选胶囊，选中填#9393f3
  手机 · 预览可见 · 来自「Innovation Summit」（应用界面） · [预览图](../sources/framesbase/items/907fc85e-ba83-4e66-ac1e-d632af12e053/preview.webp) · [提示词](../sources/framesbase/items/907fc85e-ba83-4e66-ac1e-d632af12e053/prompt.md)
- **深灰圆角卡片逐条堆叠，右侧28px圆形描边箭头钮**
  做法：左栏280px放分类胶囊和邮件联系卡，右栏卡片gap-3、rounded-2xl、白10%底，展开变白16%。少见在每张卡各有一圈跟随鼠标的1px径向光描边（mask xor抠边），切分类时全部收起
  电脑 · 预览可见 · 来自「Rocket FAQ」（单个模块） · [预览图](../sources/framesbase/items/42e1d2fc-ebb2-435e-9bee-26f372edfa2d/preview.webp) · [提示词](../sources/framesbase/items/42e1d2fc-ebb2-435e-9bee-26f372edfa2d/prompt.md)

## 推荐度 3（3 条）

- 选中项是白底圆角卡并展开，其余为透明行配加号 · 电脑 · 预览可见 · 来自「Benefits Features」（单个模块） · [目录](../sources/framesbase/items/c4ea3019-1a4e-4414-9a7e-f486c49511ef/)
- 五条独立白卡问答，展开项显示答案，右侧上下箭头 · 电脑 · 预览可见 · 来自「FAQ CTA」（单个模块） · [目录](../sources/framesbase/items/735be6cf-ef6c-4e18-b85c-c353968b4d75/)
- 深栗色底访谈问答，两列错位排布 · 电脑 · 仅提示词 · 来自「Golden Portal」（整页） · [目录](../sources/framesbase/items/b55f8354-2640-4343-ba97-707f20a6eb9d/)

## 另见带源码的区块

reactbits-preview 仓库的 `src/components/blocks/faq-*.tsx`（5 个）。React＋Tailwind 付费源码，只借做法，说明见[库外参考](../references.md)。
