# 个人设计素材库

给 AI 和自己使用的设计参考库。可以按页面区域、行业、明暗、配色、风格线索和技术方案查找材料，再适配当前项目。

这些是**原始参考资料**，尚未逐条验证实现效果。提示词不等于源码，下载源码不等于运行成功。经过项目验证的实现以后再放入 `curated/`。

## 从这里开始

- [素材目录](INDEX.md)：按栏目浏览标题与简短说明。
- [机器目录](catalog.json)：结构化摘要，供工具筛选；不包含完整提示词。
- [采集与校验清单](sources/framesbase/manifest.json)：数量、交付类型、缺失项与校验结果。
- [来源说明](sources/framesbase/README.md)：来源、保存方式、使用边界。
- [AI 使用约定](AGENTS.md)：AI 读取该目录时遵守的规则。

当前核对 704 张原站卡片，去重收录 701 份交付：477 条提示词、6 个外部项目链接、218 个背景链接。具有 699 张本地预览，其中 4 个 GitHub 项目另存完整源码快照，共 39 个文件。

来源有三处缺失：Vintage Care 的原始提示词只有“1”，默认不进入检索候选；WISA Space 和 Slam Dunk 仅提供 Google AI Studio 链接，原站没有预览。三条均保留原始交付并明确标注。

## 用一句话调用

> 读取 developer-workbench 的 design-library。先检查当前项目的技术方案与视觉规范，再找 3 个适合价格区的候选。查看预览并解释选择，读取对应提示词或源码，只替换价格区。沿用当前页面字体、颜色与业务交互，说明需要适配的部分。

## 精确筛选

在仓库根目录运行。检索只读取本地目录，不访问网络，也不运行模板。

```bash
# 网站的浅色首屏
python3 tools/framesbase/library.py search --section sites --region hero --theme light --query "SaaS" --limit 3

# 页面模块里的价格区
python3 tools/framesbase/library.py search --section sections --query "定价 价格区" --limit 3

# 应用界面里的卡片，作为小程序的视觉参考
python3 tools/framesbase/library.py search --section apps --query "卡片" --limit 3

# 深色背景
python3 tools/framesbase/library.py search --section backgrounds --theme dark --limit 5
```

检索结果中的文件路径相对于 `design-library/`。先看预览，再读少量候选的正文。关键词以空格分隔，匹配更多词的候选排在前面；严格限定请使用 `--section`、`--region`、`--theme`。

## 交付类型

- `prompt`：原站完整提示词，保存在条目的 `prompt.md`；需要 AI 根据当前项目生成或适配实现。
- `source-link`：原站交付外部项目链接，可能是 GitHub 仓库或 Google AI Studio 应用。已有源码快照的条目附 `source-receipt.json`，源码在条目的 `source/`；只有外链时不声称源码已保存。
- `background-link`：原站背景文件链接；仓库保存静态预览和原始链接，视频按需下载。

## 视频按需下载

先从检索结果获得条目编号，再把原始背景下载到仓库外。默认单文件上限 100 MiB，最多等待 180 秒，失败会返回非零状态。

```bash
python3 tools/framesbase/assets.py download \
  --id bg-6b6549b72b328a120e4d \
  --output /tmp/framesbase-background.mp4
```

这个命令只下载条目原始链接中的背景，不执行素材。视频未全部离线归档，原始链接未来若失效，需要重新登录来源网站检查。

## 标签如何产生

原始标题、栏目和分类来自 Framesbase。中文用途别名由分类映射产生；字体、动效与风格线索由提示词关键词提取；明暗和颜色由预览像素分析产生。它们属于 `derived`，即辅助筛选的派生说明，不能替代看图判断。

218 个背景另有 AI 查看静态预览后写下的中文画面描述，保存在 `annotations/`。可据此检索“星空”“花海”“玻璃”“粒子”等画面；描述不推断静态图中看不到的运动速度或交互行为。

原站 Apps 分类包含 Web 实现的移动界面。小程序、原生 App 的适配默认未验证。静态缩略图用于挑选构图；动效判断仍需看原始素材或提示词。

## 维护

需要重新采集时，先由用户在独立浏览器里登录会员，再按[工具说明](../tools/framesbase/README.md)执行。登录状态、密码和临时预览签名都不保存在仓库。

AI 需要拥有这个私有仓库的读取权限，或者使用本地克隆。无需一次读取全部提示词，也无需额外数据库或搜索服务。
