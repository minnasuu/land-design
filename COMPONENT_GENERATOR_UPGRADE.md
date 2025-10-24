# 组件生成器升级说明

## 📋 概述

本次升级优化了 Land Design 组件生成器，新增了自动更新 `example/mock.tsx` 的功能，并支持组件分类和更丰富的配置选项。

## ✨ 新功能

### 1. 自动更新 mock.tsx
- ✅ 自动添加组件 import 语句
- ✅ 自动在对应类别数组中添加组件配置
- ✅ 智能插入位置（与现有代码结构保持一致）

### 2. 组件分类系统
支持 10 种组件类别：
- 1-7：packages 组件（通用型、导航型、输入型、展示型、反馈型、文字型、其他）
- 8-10：pro-packages 组件（Pro-输入型、Pro-展示型、Pro-布局型）

### 3. 自定义组件信息
- 可设置组件中文名称
- 可设置组件描述
- 自动生成合理的默认值

### 4. 命令行快速创建
- 支持命令行参数一次性传入所有信息
- 无需交互即可快速创建组件

## 📂 文件变更

### 修改的文件
1. `scripts/create-component.js` - 主脚本文件（重大升级）
2. `scripts/README.md` - 使用说明（已更新）

### 新增的文件
1. `scripts/CREATE_COMPONENT_GUIDE.md` - 详细使用指南
2. `COMPONENT_GENERATOR_UPGRADE.md` - 升级说明（本文件）

## 🔧 技术实现

### 核心功能模块

#### 1. 组件类别配置
```javascript
const COMPONENT_CATEGORIES = {
  '1': { name: 'COMMON_COMPONENTS_DATA', label: '通用型', type: 'packages' },
  // ... 更多类别
};
```

#### 2. mock.tsx 更新逻辑
- 使用正则表达式查找合适的插入位置
- 分别处理 Example 和组件的 import 语句
- 在对应数据数组中添加组件配置

#### 3. 交互式流程
- 组件名称输入
- 类别选择
- 可选信息输入（中文名、描述）
- 确认创建

#### 4. 命令行参数支持
```bash
node scripts/create-component.js <名称> [类别] [中文名] [描述]
```

## 📖 使用示例

### 交互式创建
```bash
pnpm run new
# 按提示输入信息
```

### 命令行快速创建
```bash
# 创建通用型组件
pnpm run new MyButton 1 "自定义按钮" "可自定义的按钮组件"

# 创建 Pro 输入组件
pnpm run new RichEditor 8 "富文本编辑器" "支持富文本编辑的高级输入组件"
```

## 🎯 升级后的工作流程

### 之前的流程
1. 运行脚本创建组件文件
2. 手动在 `packages/index.tsx` 中导出组件
3. **手动在 `example/mock.tsx` 中添加 import**
4. **手动在 `example/mock.tsx` 中添加组件配置**
5. 完善组件功能和样式

### 现在的流程
1. 运行脚本创建组件文件（✅ 自动更新 mock.tsx）
2. 手动在 `packages/index.tsx` 中导出组件
3. 完善组件功能和样式
4. （可选）优化 mock.tsx 中的配置

**减少了 2 个手动步骤，提高了效率！**

## 🔄 兼容性

### 向后兼容
- ✅ 原有组件不受影响
- ✅ 保持原有的命名转换规则
- ✅ 保持原有的文件模板结构

### 新功能采用
- 新创建的组件会自动添加到 mock.tsx
- 如果更新失败，会显示警告但不影响文件创建
- 可以手动修复或补充 mock.tsx 中的配置

## ⚠️ 注意事项

### 1. 数组匹配
脚本依赖于 `example/mock.tsx` 中的数组命名规范：
- `COMMON_COMPONENTS_DATA`
- `NAV_COMPONENTS_DATA`
- 等等...

如果数组名称被修改，需要同步更新脚本中的 `COMPONENT_CATEGORIES` 配置。

### 2. Import 语句格式
脚本会查找特定格式的 import 语句：
```javascript
import ComponentExample from "../packages/Component/Example";
import Component from "../packages/Component";
```

如果项目的 import 风格变化，可能需要调整正则表达式。

### 3. 数组结构
脚本假设数据数组使用以下格式：
```javascript
export const ARRAY_NAME = [
  { /* 对象配置 */ },
  { /* 对象配置 */ },
];
```

### 4. 手动调整
自动生成的配置可能需要手动优化：
- demo 内容可能需要调整
- anchors 可能需要添加更多章节
- 可能需要添加 props、types 等配置

## 🐛 故障排除

### 问题：更新 mock.tsx 失败

**可能原因**：
1. mock.tsx 文件格式不符合预期
2. 找不到对应的数组定义
3. 文件权限问题

**解决方法**：
1. 检查错误信息
2. 手动添加 import 和配置
3. 参考其他组件的格式

### 问题：组件类别选择错误

**解决方法**：
1. 删除错误创建的组件目录
2. 从 mock.tsx 中删除相关配置
3. 重新运行脚本并选择正确类别

## 📈 未来改进方向

### 可能的增强功能
1. 支持批量创建组件
2. 提供组件模板选择（简单/复杂）
3. 自动在 packages/index.tsx 中添加导出
4. 集成测试文件生成
5. 支持组件重命名和迁移
6. 提供可视化配置界面

## 🎉 总结

本次升级显著提升了组件开发效率：
- ✅ **减少手动操作**：自动更新文档配置
- ✅ **提高准确性**：避免手动添加时的错误
- ✅ **更好的分类**：清晰的组件类别管理
- ✅ **灵活的使用方式**：支持交互式和命令行
- ✅ **完善的文档**：详细的使用指南和示例

建议所有团队成员查看新的使用文档并开始使用新版本的组件生成器。

---

**版本**: v2.0.0  
**更新日期**: 2025-10-24  
**作者**: AI Assistant

