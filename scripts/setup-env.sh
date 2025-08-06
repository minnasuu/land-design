#!/bin/bash

# Figma 环境变量设置脚本
# 用于安全地设置 Figma 访问令牌

echo "🔐 Figma 环境变量设置"
echo "========================"

# 检查是否已存在 .env 文件
if [ -f ".env" ]; then
    echo "⚠️  发现现有的 .env 文件"
    read -p "是否要备份现有文件？(y/n): " backup_choice
    if [[ $backup_choice =~ ^[Yy]$ ]]; then
        cp .env .env.backup.$(date +%Y%m%d_%H%M%S)
        echo "✅ 已备份到 .env.backup.$(date +%Y%m%d_%H%M%S)"
    fi
fi

# 提示用户输入 Figma 访问令牌
echo ""
echo "📝 请输入您的 Figma 访问令牌："
echo "获取方式：https://www.figma.com/settings -> Personal access tokens"
echo ""

read -s -p "Figma 访问令牌: " figma_token
echo ""

# 验证令牌格式
if [[ -z "$figma_token" ]]; then
    echo "❌ 错误：访问令牌不能为空"
    exit 1
fi

# 创建或更新 .env 文件
echo "FIGMA_ACCESS_TOKEN=$figma_token" > .env

# 验证 .gitignore 是否包含 .env
if grep -q "\.env" .gitignore; then
    echo "✅ .env 文件已在 .gitignore 中"
else
    echo "⚠️  警告：.env 文件未在 .gitignore 中，正在添加..."
    echo "" >> .gitignore
    echo "# Environment variables" >> .gitignore
    echo ".env" >> .gitignore
    echo ".env.local" >> .gitignore
    echo ".env.development.local" >> .gitignore
    echo ".env.test.local" >> .gitignore
    echo ".env.production.local" >> .gitignore
    echo "✅ 已更新 .gitignore"
fi

echo ""
echo "✅ 环境变量设置完成！"
echo ""
echo "📋 下一步："
echo "1. 运行: npx figma connect publish --token=\$FIGMA_ACCESS_TOKEN"
echo "2. 检查发布状态: npx figma connect status"
echo ""
echo "🔒 安全提醒："
echo "- .env 文件已添加到 .gitignore"
echo "- 请勿将访问令牌提交到版本控制"
echo "- 定期轮换访问令牌" 