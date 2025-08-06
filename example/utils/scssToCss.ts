/**
 * 简单的SCSS到CSS转换工具
 */

interface ScssToCssOptions {
  /** 是否美化输出 */
  pretty?: boolean;
  /** 是否包含注释 */
  includeComments?: boolean;
}

/**
 * 将SCSS代码转换为CSS代码
 * @param scssCode SCSS代码字符串
 * @param options 转换选项
 * @returns CSS代码字符串
 */
export function scssToCss(scssCode: string, options: ScssToCssOptions = {}): string {
  const {
    pretty = true,
    includeComments = true
  } = options;

  if (!scssCode || typeof scssCode !== 'string') {
    return '';
  }

  try {
    let css = scssCode;

    // 移除SCSS注释（可选）
    if (!includeComments) {
      css = css.replace(/\/\*[\s\S]*?\*\//g, ''); // 移除块注释
      css = css.replace(/\/\/.*$/gm, ''); // 移除行注释
    }

    // 处理嵌套规则
    css = processNesting(css);

    // 处理变量
    css = processVariables(css);

    // 处理混合器（mixin）
    css = processMixins(css);

    // 处理函数
    css = processFunctions(css);

    // 处理导入
    css = processImports(css);

    // 格式化输出
    if (pretty) {
      css = formatCss(css);
    }

    return css;
  } catch (error) {
    console.error('SCSS转换失败:', error);
    return scssCode; // 转换失败时返回原始代码
  }
}

/**
 * 处理嵌套规则
 */
function processNesting(css: string): string {
  let result = css;
  let changed = true;
  let depth = 0;

  while (changed && depth < 10) { // 防止无限循环
    changed = false;
    depth++;

    // 处理嵌套的选择器
    result = result.replace(/([^{]+)\{([^}]*)\s*\{/g, (match, selector, content) => {
      changed = true;
      const parentSelector = selector.trim();
      const childContent = content.trim();
      
      // 简单的嵌套展开
      return `${parentSelector} { ${childContent} {`;
    });

    // 处理&符号
    result = result.replace(/&/g, (match, offset, string) => {
      // 找到最近的父选择器
      const beforeMatch = string.substring(0, offset);
      const lines = beforeMatch.split('\n');
      const currentLine = lines[lines.length - 1];
      
      // 简单的父选择器替换
      const parentMatch = currentLine.match(/([^{]+)\{/);
      if (parentMatch) {
        return parentMatch[1].trim();
      }
      return '';
    });
  }

  return result;
}

/**
 * 处理SCSS变量
 */
function processVariables(css: string): string {
  let result = css;

  // 提取变量定义
  const variables = new Map<string, string>();
  const varRegex = /\$([a-zA-Z0-9_-]+)\s*:\s*([^;]+);/g;
  let match;

  while ((match = varRegex.exec(css)) !== null) {
    const [fullMatch, varName, varValue] = match;
    variables.set(varName, varValue.trim());
    result = result.replace(fullMatch, ''); // 移除变量定义
  }

  // 替换变量使用
  variables.forEach((value, name) => {
    const varUsageRegex = new RegExp(`\\$${name}\\b`, 'g');
    result = result.replace(varUsageRegex, value);
  });

  return result;
}

/**
 * 处理混合器（mixin）
 */
function processMixins(css: string): string {
  let result = css;

  // 提取mixin定义
  const mixins = new Map<string, string>();
  const mixinRegex = /@mixin\s+([a-zA-Z0-9_-]+)\s*\(([^)]*)\)\s*\{([^}]+)\}/g;
  let match;

  while ((match = mixinRegex.exec(css)) !== null) {
    const [fullMatch, mixinName, params, mixinContent] = match;
    mixins.set(mixinName, mixinContent.trim());
    result = result.replace(fullMatch, ''); // 移除mixin定义
  }

  // 替换mixin使用
  mixins.forEach((content, name) => {
    const includeRegex = new RegExp(`@include\\s+${name}\\s*;`, 'g');
    result = result.replace(includeRegex, content);
  });

  return result;
}

/**
 * 处理SCSS函数
 */
function processFunctions(css: string): string {
  let result = css;

  // 处理常见的SCSS函数
  const functions = [
    { pattern: /darken\(([^,]+),\s*([^)]+)\)/g, replacement: '/* darken($1, $2) */' },
    { pattern: /lighten\(([^,]+),\s*([^)]+)\)/g, replacement: '/* lighten($1, $2) */' },
    { pattern: /rgba\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^)]+)\)/g, replacement: 'rgba($1, $2, $3, $4)' },
    { pattern: /hsl\(([^,]+),\s*([^,]+),\s*([^)]+)\)/g, replacement: 'hsl($1, $2, $3)' },
    { pattern: /hsla\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^)]+)\)/g, replacement: 'hsla($1, $2, $3, $4)' }
  ];

  functions.forEach(({ pattern, replacement }) => {
    result = result.replace(pattern, replacement);
  });

  return result;
}

/**
 * 处理导入语句
 */
function processImports(css: string): string {
  // 移除@import语句（在实际使用中可能需要处理）
  return css.replace(/@import\s+['"][^'"]*['"];?\s*/g, '');
}

/**
 * 格式化CSS代码
 */
function formatCss(css: string): string {
  return css
    .split('}')
    .map(rule => rule.trim())
    .filter(rule => rule.length > 0)
    .map(rule => rule + '}')
    .join('\n')
    .replace(/\n\s*\n/g, '\n')
    .trim();
}

/**
 * 验证SCSS代码语法
 */
export function validateScssCode(scssCode: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  try {
    if (!scssCode || typeof scssCode !== 'string') {
      errors.push('Invalid SCSS code provided');
      return { isValid: false, errors };
    }

    // 检查基本的SCSS语法
    const openBraces = (scssCode.match(/\{/g) || []).length;
    const closeBraces = (scssCode.match(/\}/g) || []).length;
    
    if (openBraces !== closeBraces) {
      errors.push('Mismatched braces in SCSS');
    }

    // 检查未闭合的规则
    const unclosedRules = scssCode.match(/[^{]*\{[^}]*$/g);
    if (unclosedRules && unclosedRules.length > 0) {
      errors.push('Unclosed CSS rules detected');
    }

  } catch (error) {
    errors.push(error instanceof Error ? error.message : 'Unknown validation error');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// 导出类型
export type { ScssToCssOptions }; 