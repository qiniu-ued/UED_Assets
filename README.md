# 设计团队分享资产管理规范（试行）

将设计分享沉淀为可在线阅读、检索、追踪版本和持续复用的团队资产。分享内容统一使用 HTML 交付。

## 交付结构

每次分享在 `design-sharing/` 下建立独立目录，以分享主题命名，不附加作者或日期。

```text
design-sharing/
└── 分享主题/
    ├── index.html
    ├── README.md
    └── assets/（按需）
```

- `index.html`：固定入口，包含完整正文与展示内容。
- `README.md`：简要记录内容简介、分享人、分享日期和预览链接，不重复正文；提交与更新记录由 Git 保留。
- `assets/`：存放页面实际引用的图片、样式和脚本，通过相对路径加载。

## 资源管理

大型设计源文件（如 `.key`、`.psd`、`.fig`）放在内部 Kodo，必要时在分享 README 中记录链接，不直接上传仓库。

## 协作与发布

统一流程：`临时开发分支 → ui → main`。

1. 先将团队远端最新 `ui` 同步到本地，再基于此创建临时开发分支。
2. 将 HTML、对应 README 和必要资源放入主题目录，仅提交本次修改，并将临时分支推送到团队仓库。
3. 创建 PR：源分支为临时开发分支，目标分支为 `ui`；说明按 [PR 模板](https://github.com/qiniu-ued/UED_Assets/blob/main/ued-pr-template.md)填写。

- `ui` 用于日常集成，PR 至少需要 1 个 Approve；`main` 用于正式发布，由管理员统一通过 `ui → main` PR 合入。
- 禁止直接向 `ui`、`main` 提交，也禁止删除或强制推送这两个分支。
- 团队仓库长期仅保留 `ui`、`main`；普通临时分支在 PR 合并后自动删除。

## 在线预览

预览地址拼接规则：`Pages 根地址 + 文件在仓库里的相对路径`。

Pages 根地址：`https://qiniu-ued.github.io/UED_Assets/`

例如，`design-sharing/产品设计工程化工作流/index.html` 对应：

```text
https://qiniu-ued.github.io/UED_Assets/design-sharing/产品设计工程化工作流/index.html
```

正式预览从 `main` 分支根目录发布。内容合入 `ui` 后，需再合入 `main` 并完成 Pages 部署，正式预览才会更新。
