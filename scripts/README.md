# 版本管理和发布脚本

本项目提供了完整的版本管理和发布流程脚本，帮助自动化版本更新、构建和发布过程。

## 脚本概览

### 1. `updateVersion.sh` - 版本更新脚本

**功能：**
- 自动或交互式版本更新
- 版本号比较和验证
- Git 状态检查
- 创建 Git 提交和标签

**使用方法：**

```bash
# 交互式版本更新（推荐）
./updateVersion.sh

# 自动更新补丁版本
./updateVersion.sh --auto

# 显示帮助信息
./updateVersion.sh --help
```

**版本更新类型：**
- `patch` (补丁版本): 修复 bug，向后兼容 (0.0.77 → 0.0.78)
- `minor` (次要版本): 新功能，向后兼容 (0.0.77 → 0.1.0)
- `major` (主要版本): 破坏性更改 (0.0.77 → 1.0.0)
- `custom` (自定义版本): 手动输入版本号

### 2. `scripts/publish.sh` - 完整发布脚本

**功能：**
- 环境检查（分支、未提交更改等）
- 运行测试
- 自动版本更新
- 构建库文件
- 发布到 npm
- 推送代码和标签

**使用方法：**

```bash
# 完整发布流程
npm run publish

# 或者直接运行脚本
bash scripts/publish.sh

# 显示帮助信息
bash scripts/publish.sh --help
```

## 工作流程

### 日常开发流程

1. **开发新功能**
   ```bash
   git checkout -b feature/new-feature
   # 开发代码...
   git add .
   git commit -m "feat: add new feature"
   ```

2. **测试**
   ```bash
   npm test
   ```

3. **版本更新**
   ```bash
   # 交互式更新
   ./updateVersion.sh
   
   # 或自动更新
   ./updateVersion.sh --auto
   ```

4. **发布**
   ```bash
   npm run publish
   ```

### 快速发布流程

如果只需要快速发布补丁版本：

```bash
# 一键发布（自动更新补丁版本 + 构建 + 发布）
npm run lib
```

## 脚本特性

### 错误处理
- 环境检查（npm、git 等工具）
- Git 状态验证
- 版本号格式验证
- 错误时自动回滚

### 日志记录
- 彩色输出，便于识别
- 详细的操作日志
- 成功/警告/错误状态

### 用户交互
- 交互式版本选择
- 操作确认
- 帮助信息

### 自动化
- 自动版本计算
- 自动 Git 操作
- 自动 npm 发布

## 配置说明

### 版本号格式
遵循 [语义化版本](https://semver.org/lang/zh-CN/) 规范：
- `MAJOR.MINOR.PATCH`
- 例如：`0.0.77`

### Git 提交规范
- 版本更新：`chore: bump version to x.y.z`
- 自动更新：`chore: auto bump version to x.y.z`

### 标签规范
- 格式：`vx.y.z`
- 例如：`v0.0.77`

## 故障排除

### 常见问题

1. **版本冲突**
   ```bash
   # 检查本地和远程版本
   ./updateVersion.sh
   ```

2. **Git 状态问题**
   ```bash
   # 检查未提交的更改
   git status
   
   # 提交更改
   git add .
   git commit -m "your message"
   ```

3. **npm 发布失败**
   ```bash
   # 检查 npm 登录状态
   npm whoami
   
   # 重新登录
   npm login
   ```

### 手动回滚

如果发布过程中出现问题：

```bash
# 回滚版本
git reset --hard HEAD~1
git tag -d v$(node -p "require('./package.json').version")
```

## 最佳实践

1. **分支管理**
   - 在 `main` 分支进行发布
   - 使用功能分支进行开发

2. **版本管理**
   - 遵循语义化版本规范
   - 及时更新版本号

3. **测试**
   - 发布前运行完整测试
   - 确保代码质量

4. **文档**
   - 更新 CHANGELOG
   - 更新 README

## 相关链接

- [语义化版本](https://semver.org/lang/zh-CN/)
- [npm 发布指南](https://docs.npmjs.com/cli/v8/commands/npm-publish)
- [Git 标签管理](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE) 