# 📖 项目介绍

这是一个使用 TypeScript 构建的项目，采用 pnpm 作为包管理器，并配置了 ESLint、Prettier 和 Git Hooks 来确保代码质量和一致性。

## 🛠️ 技术栈

- **语言**: TypeScript
- **包管理器**: pnpm
- **代码检查**: ESLint
- **代码格式化**: Prettier
- **Git Hooks**: simple-git-hooks
- **构建工具**: Vite

## 🚀 开发流程

### 安装依赖

```bash
pnpm install
```

### 代码检查

```bash
pnpm lint
```

该命令会依次执行：

- Prettier 格式化
- ESLint 检查
- TypeScript 类型检查

### 单独的检查命令

```bash
# ESLint 检查并自动修复
pnpm eslint

# TypeScript 类型检查
pnpm tscheck

# Prettier 格式化
pnpm prettier
```

## 🎣 Git Hooks

项目使用 simple-git-hooks 配置了以下 Git Hooks：

- **pre-commit**: 执行 lint-staged，对暂存文件进行格式化和检查
- **commit-msg**: 执行 commitlint，检查提交信息格式

相关配置：[package.json](./package.json)

## 📁 工作区配置

项目使用 pnpm 工作区管理多个包，相关配置：[pnpm-workspace.yaml](./pnpm-workspace.yaml)

## 🏗️ 项目架构说明

### ESLint 配置

项目的 ESLint 配置合并了两个推荐配置：

- `eslint.configs.recommended`
- `tseslint.configs.recommendedTypeChecked`

同时开启了类型检查功能，因此需要配置 `parserOptions.projectService: true`。

#### VS Code 配置

由于当前使用的是 ESLint v9，为了启用 v10 版本的配置文件查找功能，项目在 [.vscode/settings.json](./.vscode/settings.json) 中启用了实验性 flag：

- `v10_config_lookup_from_file`：允许 ESLint 根据文件路径向上查找对应的配置文件

**注意**：当升级到 ESLint v10 后，此功能将被默认启用，需要删除 .vscode/settings.json 中的相关配置。

相关配置文件：

- [eslint.config.js](./eslint.config.js)
- [.vscode/settings.json](./.vscode/settings.json)

参考文档：

- https://typescript-eslint.io/getting-started/typed-linting
- https://eslint.org/docs/latest/use/configure/configuration-files#experimental-configuration-file-resolution

### Prettier 配置

在 ESLint 中运行 Prettier 可能会很慢，因此项目将 Prettier 配置为独立的格式化程序，而不是在 ESLint 中运行。

相关配置文件：[prettier.config.js](./prettier.config.js)

参考文档：https://typescript-eslint.io/users/what-about-formatting#suggested-usage---prettier
