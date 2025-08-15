#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sass = require('sass');

/**
 * 构建样式文件
 * 将所有组件的样式合并到一个CSS文件中
 */

const PACKAGES_DIR = path.join(__dirname, '../packages');
const LIB_DIR = path.join(__dirname, '../lib');
const STYLES_DIR = path.join(__dirname, '../packages/styles');

// 确保lib目录存在
if (!fs.existsSync(LIB_DIR)) {
  fs.mkdirSync(LIB_DIR, { recursive: true });
}

// 获取所有样式文件
function getStyleFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('.scss') || item.endsWith('.css')) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// 构建主样式文件
function buildMainStyles() {
  console.log('🔨 开始构建样式文件...');
  
  try {
    // 编译主样式文件
    const mainStylePath = path.join(STYLES_DIR, 'index.scss');
    if (fs.existsSync(mainStylePath)) {
      const result = sass.compile(mainStylePath, {
        style: 'compressed',
        loadPaths: [STYLES_DIR, PACKAGES_DIR]
      });
      
      // 写入到lib目录
      const outputPath = path.join(LIB_DIR, 'style.css');
      fs.writeFileSync(outputPath, result.css);
      console.log(`✅ 主样式文件构建完成: ${outputPath}`);
      
      return true;
    } else {
      console.error('❌ 主样式文件不存在:', mainStylePath);
      return false;
    }
  } catch (error) {
    console.error('❌ 样式构建失败:', error.message);
    return false;
  }
}

// 构建组件样式文件
function buildComponentStyles() {
  console.log('🔨 开始构建组件样式文件...');
  
  try {
    const styleFiles = getStyleFiles(PACKAGES_DIR);
    let allStyles = '';
    
    // 按字母顺序排序，确保构建结果一致
    styleFiles.sort();
    
    for (const styleFile of styleFiles) {
      try {
        const result = sass.compile(styleFile, {
          style: 'compressed',
          loadPaths: [STYLES_DIR, PACKAGES_DIR]
        });
        
        // 添加文件注释
        const relativePath = path.relative(PACKAGES_DIR, styleFile);
        allStyles += `/* ${relativePath} */\n${result.css}\n\n`;
        
        console.log(`✅ 处理样式文件: ${relativePath}`);
      } catch (error) {
        console.warn(`⚠️  跳过样式文件 ${styleFile}: ${error.message}`);
      }
    }
    
    // 写入合并后的样式文件
    const outputPath = path.join(LIB_DIR, 'style.css');
    fs.writeFileSync(outputPath, allStyles);
    console.log(`✅ 组件样式文件构建完成: ${outputPath}`);
    
    return true;
  } catch (error) {
    console.error('❌ 组件样式构建失败:', error.message);
    return false;
  }
}

// 主函数
function main() {
  console.log('🚀 开始构建样式文件...');
  
  // 构建主样式文件
  const mainResult = buildMainStyles();
  
  if (!mainResult) {
    console.log('🔄 尝试构建组件样式文件...');
    const componentResult = buildComponentStyles();
    
    if (!componentResult) {
      console.error('❌ 所有样式构建方法都失败了');
      process.exit(1);
    }
  }
  
  console.log('🎉 样式文件构建完成!');
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = { buildMainStyles, buildComponentStyles };
