# Framesbase 归档工具

三个工具各负责一件事：`collect.py` 读取正常会员界面；`assets.py` 处理静态预览、源码快照和按需背景下载；`library.py` 建立索引、检索和验证。

## 环境

- Python 3.9 或以上。
- Pillow 用于预览处理和图片校验：`python3 -m pip install Pillow`。
- `agent-browser` 仅采集时需要，使用用户已登录的任务独立会话。
- `git` 用于源码快照，`curl` 用于按需下载。

所有命令从仓库根目录运行。不会运行第三方模板、读取浏览器凭证或自动登录。

## 采集

```bash
agent-browser --session framesbase-archive --headed open https://app.framesbase.app/
# 用户在独立窗口登录后再执行
python3 tools/framesbase/collect.py --sample
python3 tools/framesbase/collect.py
```

支持 `--section sites|apps|sections|backgrounds` 限定栏目。默认逐页重新枚举，但会核对本地正文校验值与预览路径后跳过已完成条目；`--refresh` 强制重读已保存内容。

原始内容或预览有遗漏时，先正常刷新会员页面，再用 `python3 tools/framesbase/collect.py --retry-failures` 补采清单中的位置。它保留原失败记录，并更新当前整批清单；预览遗漏也会进入补采。

如果背景链接重复，先保持采集失败状态，再运行 `python3 tools/framesbase/collect.py --audit-duplicates` 回到对应实体卡片逐一复制核对。只有不同位置确实给出同一交付链接、且能解释全部数量差额时，才保存 `duplicate-audit.json` 并接受去重结果。源站未提供预览和占位正文另作来源缺失记录，不伪造内容。

背景需先通过正常复制动作取得原始链接，才能确认身份。复制内容被当前页面会话中的临时变量接收，不读取系统剪贴板中的原有内容。运行期间不要在同一独立窗口手动切页；不要并发启动多个采集进程。

页面详情和预览会异步加载。翻页时等待卡片身份变化，不只等页码变化。每条写入后保存进度；失败记录保留在 `runs/`。

数量、重复、前后栏目总数任一不符时，整批采集返回失败状态。失败不撤销已经完整写入的条目。

## 整理与验证

```bash
python3 tools/framesbase/assets.py thumbnails
python3 tools/framesbase/library.py build
python3 tools/framesbase/library.py validate
```

预览处理会先将原始文件保存至 `~/.cache/framesbase-original-previews/`，再写入静态缩略图。这个缓存不提交 Git，也不是登录状态缓存。

`build` 根据本地素材重建目录，依赖 Pillow；`search` 只需 Python 标准库。`validate` 核对当前本地文件、正文校验值、字符数、预览可读性与目录路径。

## 可选资源

```bash
# 将一个源码仓库快照保存到对应条目中；不安装或运行它
python3 tools/framesbase/assets.py source --id <条目编号>

# 将一个原始背景下载到仓库外，默认最大 100 MiB
python3 tools/framesbase/assets.py download --id <背景编号> --output /tmp/background.mp4
```

源码归档排除系统生成的 .DS_Store、Thumbs.db 等非源码文件，并在收据中记录；不递归克隆子模块，跳过符号链接、真实环境配置文件和超过 90 MiB 的单文件；任何遗漏都记入清单，状态为 `partial`。不会覆盖已有源码目录。

第三方文件不自动适用本仓库的许可证。源码快照只证明成功保存，运行状态仍为未验证。
