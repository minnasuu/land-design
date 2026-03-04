#!/bin/bash

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# 日志函数
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 加载环境变量
load_env() {
    local env_file="$PROJECT_ROOT/.env.local"
    
    if [ -f "$env_file" ]; then
        log_info "加载环境变量从 .env.local..."
        # 读取并导出环境变量（忽略注释和空行）
        while IFS='=' read -r key value; do
            # 跳过注释和空行
            [[ "$key" =~ ^#.*$ ]] && continue
            [[ -z "$key" ]] && continue
            # 去除可能的引号
            value="${value%\"}"
            value="${value#\"}"
            value="${value%\'}"
            value="${value#\'}"
            export "$key=$value"
        done < "$env_file"
        log_success "环境变量加载完成"
    else
        log_warning ".env.local 文件不存在"
    fi
}

# 错误处理
set -e
trap 'log_error "发布流程失败，请检查错误信息"; exit 1' ERR

# 检查环境
check_environment() {
    log_info "检查发布环境..."
    
    # 检查 NPM_TOKEN
    if [ -z "$NPM_TOKEN" ]; then
        log_error "NPM_TOKEN 未设置，请在 .env.local 中配置"
        log_info "示例: NPM_TOKEN=npm_xxxxxx"
        exit 1
    fi
    log_success "NPM_TOKEN 已配置"
    
    # 检查是否在正确的分支
    local current_branch=$(git branch --show-current)
    if [ "$current_branch" != "main" ]; then
        log_warning "当前不在 main 分支，当前分支: $current_branch"
        read -p "是否继续? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 0
        fi
    fi
    
    # 检查是否有未提交的更改
    if [ -n "$(git status --porcelain)" ]; then
        log_error "工作目录有未提交的更改，请先提交或暂存更改"
        git status --short
        exit 1
    fi
    
    # 检查远程仓库
    if ! git remote get-url origin &> /dev/null; then
        log_error "未配置远程仓库 origin"
        exit 1
    fi
    
    log_success "环境检查通过"
}

# 运行测试
run_tests() {
    log_info "运行测试..."
    if npm test; then
        log_success "测试通过"
    else
        log_error "测试失败"
        exit 1
    fi
}

# 更新版本
update_version() {
    log_info "更新版本..."
    bash updateVersion.sh --auto
}

# 构建库
build_library() {
    log_info "构建库文件..."
    npm run build:lib
    log_success "库文件构建完成"
}

# 发布到 npm
publish_to_npm() {
    log_info "发布到 npm..."
    npm publish --access public --registry https://registry.npmjs.org/ --//registry.npmjs.org/:_authToken=$NPM_TOKEN --ignore-scripts
    log_success "发布到 npm 成功"
}

# 推送代码和标签
push_to_remote() {
    log_info "推送代码和标签到远程仓库..."
    
    # 推送代码
    git push origin main
    
    # 获取最新版本号
    local version=$(node -p "require('./package.json').version")
    
    # 推送标签
    git push origin "v$version"
    
    log_success "代码和标签推送成功"
}

# 显示发布信息
show_release_info() {
    local version=$(node -p "require('./package.json').version")
    local package_name=$(node -p "require('./package.json').name")
    
    log_success "发布完成！"
    echo ""
    echo "📦 包信息:"
    echo "  名称: $package_name"
    echo "  版本: $version"
    echo ""
    echo "🔗 相关链接:"
    echo "  npm: https://www.npmjs.com/package/$package_name"
    echo "  GitHub: https://github.com/minnasuu/land-design"
    echo ""
    echo "📋 下一步:"
    echo "  1. 检查 npm 包是否正确发布"
    echo "  2. 更新 GitHub 发布说明"
    echo "  3. 通知团队成员"
}

# 主函数
main() {
    log_info "开始发布流程..."
    
    # 切换到项目根目录
    cd "$PROJECT_ROOT"
    
    # 加载环境变量
    load_env
    
    # 检查环境
    check_environment
    
    # 运行测试
    run_tests
    
    # 更新版本
    update_version
    
    # 构建库
    build_library
    
    # 发布到 npm
    publish_to_npm
    
    # 推送代码和标签
    push_to_remote
    
    # 显示发布信息
    show_release_info
}

# 快速发布（跳过测试和检查）
quick_publish() {
    log_info "开始快速发布流程..."
    
    # 切换到项目根目录
    cd "$PROJECT_ROOT"
    
    # 加载环境变量
    load_env
    
    # 检查 NPM_TOKEN
    if [ -z "$NPM_TOKEN" ]; then
        log_error "NPM_TOKEN 未设置，请在 .env.local 中配置"
        exit 1
    fi
    log_success "NPM_TOKEN 已配置"
    
    # 更新版本
    update_version
    
    # 构建库
    build_library
    
    # 发布到 npm
    publish_to_npm
    
    # 显示发布信息
    show_release_info
}

# 显示帮助信息
show_help() {
    echo "用法: $0 [选项]"
    echo ""
    echo "选项:"
    echo "  -h, --help     显示此帮助信息"
    echo "  -q, --quick    快速发布模式（跳过测试和 git 检查）"
    echo "  --dry-run      试运行模式，不实际发布"
    echo ""
    echo "功能:"
    echo "  1. 加载环境变量 (.env.local)"
    echo "  2. 检查环境 (分支、未提交更改、NPM_TOKEN)"
    echo "  3. 运行测试"
    echo "  4. 自动更新版本"
    echo "  5. 构建库文件"
    echo "  6. 发布到 npm"
    echo "  7. 推送代码和标签"
    echo ""
    echo "环境变量配置 (.env.local):"
    echo "  NPM_TOKEN=npm_xxxxxx"
    echo ""
    echo "示例:"
    echo "  $0             完整发布流程"
    echo "  $0 -q          快速发布（跳过测试和 git 检查）"
    echo "  $0 --dry-run   试运行模式"
}

# 处理命令行参数
case "${1:-}" in
    -h|--help)
        show_help
        exit 0
        ;;
    -q|--quick)
        quick_publish
        ;;
    --dry-run)
        log_info "试运行模式启动..."
        # 这里可以添加试运行模式的逻辑
        log_warning "试运行模式暂未实现"
        ;;
    "")
        main
        ;;
    *)
        log_error "未知参数: $1"
        show_help
        exit 1
        ;;
esac 