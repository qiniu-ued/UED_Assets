# 仓库维护约定

- 团队仓库长期仅保留 `ui`、`main`；日常修改使用临时开发分支。
- `ui`、`main` 均禁止删除和强制推送。
- `main` 只接受来自团队仓库 `ui` 的 PR，由管理员统一发布；`main-pr-source-policy` 必须通过。
- `ui → main` 使用 **Create a merge commit**，不使用 Squash 或 Rebase。
