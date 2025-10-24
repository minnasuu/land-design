# 组件生成器快速参考

## 快速命令

```bash
# 交互式创建（推荐新手）
pnpm run new

# 命令行快速创建
pnpm run new <组件名> [类别] [中文名] [描述]
```

## 类别编号速查

| # | 类别 | 类型 | # | 类别 | 类型 |
|---|------|------|---|------|------|
| 1 | 通用型 | packages | 6 | 文字型 | packages |
| 2 | 导航型 | packages | 7 | 其他 | packages |
| 3 | 输入型 | packages | 8 | Pro-输入 | pro-packages |
| 4 | 展示型 | packages | 9 | Pro-展示 | pro-packages |
| 5 | 反馈型 | packages | 10 | Pro-布局 | pro-packages |

## 常用示例

```bash
# 通用按钮组件
pnpm run new CustomButton 1 "自定义按钮" "可高度自定义的按钮"

# 导航菜单组件
pnpm run new NavMenu 2 "导航菜单" "多级导航菜单组件"

# 表单输入组件
pnpm run new FormInput 3 "表单输入框" "带验证的表单输入"

# 数据表格组件
pnpm run new DataTable 4 "数据表格" "可排序的数据表格"

# 提示框组件
pnpm run new Toast 5 "提示框" "消息提示框组件"

# 富文本组件
pnpm run new RichEditor 8 "富文本编辑器" "高级富文本编辑器"
```

## 创建后必做

1. ✅ 在 `packages/index.tsx` 中导出组件
   ```tsx
   export { default as MyComponent } from './MyComponent';
   ```

2. ✅ 完善组件功能（props.ts + index.tsx）

3. ✅ 添加样式（index.scss）

4. ✅ 完善示例（Example.tsx）

5. ✅ 优化文档配置（example/mock.tsx）

## 生成的文件

```
packages/MyComponent/
├── index.tsx       # 组件实现
├── props.ts        # 类型定义
├── index.scss      # 组件样式
└── Example.tsx     # 使用示例
```

自动更新：`example/mock.tsx`

## 常见问题

**Q: 如何查看可用类别？**  
A: 运行 `pnpm run new` 进入交互模式即可查看

**Q: 可以修改自动生成的配置吗？**  
A: 可以，在 `example/mock.tsx` 中手动修改

**Q: 支持创建 TypeScript 组件吗？**  
A: 是的，默认生成的就是 TypeScript 组件

**Q: 如何修改组件模板？**  
A: 编辑 `scripts/create-component.js` 中的 `templates` 对象

## 详细文档

- 📖 完整指南：`scripts/CREATE_COMPONENT_GUIDE.md`
- 📖 使用说明：`scripts/README.md`
- 📖 升级说明：`COMPONENT_GENERATOR_UPGRADE.md`

