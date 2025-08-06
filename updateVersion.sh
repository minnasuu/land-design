#!/bin/bash

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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

# 错误处理
set -e
trap 'log_error "脚本执行失败，请检查错误信息"; exit 1' ERR

# 检查必要的命令
check_requirements() {
    log_info "检查环境要求..."
    
    if ! command -v npm &> /dev/null; then
        log_error "npm 未安装或不在 PATH 中"
        exit 1
    fi
    
    if ! command -v git &> /dev/null; then
        log_error "git 未安装或不在 PATH 中"
        exit 1
    fi
    
    log_success "环境检查通过"
}

# 获取当前本地版本
get_local_version() {
    local local_version=$(node -p "require('./package.json').version")
    echo "$local_version"
}

# 获取 npm 仓库中的最新版本
get_npm_version() {
    local npm_version=$(npm view @suminhan/land-design version 2>/dev/null || echo "0.0.0")
    echo "$npm_version"
}

# 解析版本号
parse_version() {
    local version=$1
    local major=$(echo "$version" | cut -d. -f1)
    local minor=$(echo "$version" | cut -d. -f2)
    local patch=$(echo "$version" | cut -d. -f3)
    echo "$major $minor $patch"
}

# 比较版本号
compare_versions() {
    local version1=$1
    local version2=$2
    
    local v1_parts=($(parse_version "$version1"))
    local v2_parts=($(parse_version "$version2"))
    
    for i in {0..2}; do
        if [ "${v1_parts[$i]}" -gt "${v2_parts[$i]}" ]; then
            echo "greater"
            return
        elif [ "${v1_parts[$i]}" -lt "${v2_parts[$i]}" ]; then
            echo "less"
            return
        fi
    done
    echo "equal"
}

# 计算新版本号
calculate_new_version() {
    local current_version=$1
    local version_type=${2:-patch}
    
    local parts=($(parse_version "$current_version"))
    local major=${parts[0]}
    local minor=${parts[1]}
    local patch=${parts[2]}
    
    case $version_type in
        "major")
            major=$((major + 1))
            minor=0
            patch=0
            ;;
        "minor")
            minor=$((minor + 1))
            patch=0
            ;;
        "patch"|*)
            patch=$((patch + 1))
            ;;
    esac
    
    echo "$major.$minor.$patch"
}

# 用户确认
confirm_action() {
    local message=$1
    echo -e "${YELLOW}$message${NC}"
    read -p "是否继续? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_info "操作已取消"
        exit 0
    fi
}

# 检查 Git 状态
check_git_status() {
    log_info "检查 Git 状态..."
    
    if [ -n "$(git status --porcelain)" ]; then
        log_warning "工作目录有未提交的更改"
        git status --short
        confirm_action "是否继续更新版本？"
    else
        log_success "工作目录干净"
    fi
}

# 主函数
main() {
    log_info "开始版本更新流程..."
    
    # 检查环境
    check_requirements
    
    # 检查 Git 状态
    check_git_status
    
    # 获取版本信息
    local local_version=$(get_local_version)
    local npm_version=$(get_npm_version)
    
    log_info "当前本地版本: $local_version"
    log_info "npm 仓库版本: $npm_version"
    
    # 比较版本
    local comparison=$(compare_versions "$local_version" "$npm_version")
    
    if [ "$comparison" = "less" ]; then
        log_warning "本地版本低于 npm 仓库版本"
        confirm_action "是否使用 npm 仓库版本作为基础？"
        local_version=$npm_version
    elif [ "$comparison" = "equal" ]; then
        log_info "本地版本与 npm 仓库版本相同"
    fi
    
    # 选择版本更新类型
    echo -e "${BLUE}请选择版本更新类型:${NC}"
    echo "1) patch (补丁版本，默认)"
    echo "2) minor (次要版本)"
    echo "3) major (主要版本)"
    echo "4) 自定义版本号"
    
    read -p "请选择 (1-4): " choice
    
    local new_version
    case $choice in
        1|"")
            new_version=$(calculate_new_version "$local_version" "patch")
            ;;
        2)
            new_version=$(calculate_new_version "$local_version" "minor")
            ;;
        3)
            new_version=$(calculate_new_version "$local_version" "major")
            ;;
        4)
            read -p "请输入新版本号 (格式: x.y.z): " new_version
            # 验证版本号格式
            if ! [[ $new_version =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
                log_error "版本号格式错误，请使用 x.y.z 格式"
                exit 1
            fi
            ;;
        *)
            log_error "无效选择"
            exit 1
            ;;
    esac
    
    log_info "新版本号: $new_version"
    confirm_action "确认更新版本到 $new_version？"
    
    # 更新版本
    log_info "更新 package.json 版本..."
    npm version "$new_version" --no-git-tag-version
    
    # 创建 Git 提交
    log_info "创建 Git 提交..."
    git add package.json
    git commit -m "chore: bump version to $new_version"
    
    # 创建 Git 标签
    log_info "创建 Git 标签..."
    git tag -a "v$new_version" -m "Release version $new_version"
    
    log_success "版本更新完成！"
    log_info "新版本: $new_version"
    log_info "请运行以下命令推送更改:"
    echo "  git push origin main"
    echo "  git push origin v$new_version"
}

# 自动模式实现
auto_mode() {
    log_info "自动模式启动..."
    
    # 检查环境
    check_requirements
    
    # 获取版本信息
    local local_version=$(get_local_version)
    local npm_version=$(get_npm_version)
    
    log_info "当前本地版本: $local_version"
    log_info "npm 仓库版本: $npm_version"
    
    # 比较版本
    local comparison=$(compare_versions "$local_version" "$npm_version")
    
    if [ "$comparison" = "less" ]; then
        log_warning "本地版本低于 npm 仓库版本，使用 npm 仓库版本作为基础"
        local_version=$npm_version
    fi
    
    # 自动更新补丁版本
    local new_version=$(calculate_new_version "$local_version" "patch")
    
    log_info "自动更新到新版本: $new_version"
    
    # 更新版本
    npm version "$new_version" --no-git-tag-version
    
    # 创建 Git 提交
    git add package.json
    git commit -m "chore: auto bump version to $new_version"
    
    # 创建 Git 标签
    git tag -a "v$new_version" -m "Release version $new_version"
    
    log_success "自动版本更新完成！新版本: $new_version"
}

# 显示帮助信息
show_help() {
    echo "用法: $0 [选项]"
    echo ""
    echo "选项:"
    echo "  -h, --help     显示此帮助信息"
    echo "  --auto         自动模式，不进行用户确认"
    echo ""
    echo "示例:"
    echo "  $0             交互式版本更新"
    echo "  $0 --auto      自动更新补丁版本"
}

# 处理命令行参数
case "${1:-}" in
    -h|--help)
        show_help
        exit 0
        ;;
    --auto)
        # 自动模式实现
        auto_mode
        ;;
    "")
        # 交互模式
        main
        ;;
    *)
        log_error "未知参数: $1"
        show_help
        exit 1
        ;;
esac

