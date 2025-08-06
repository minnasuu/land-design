import { scssToCss } from './scssToCss';

// 浏览器兼容的reactToHtml工具
interface ReactToHtmlOptions {
  /** 是否美化输出的HTML */
  pretty?: boolean;
  /** 自定义CSS样式 */
  customStyles?: string;
  /** 是否包含错误处理 */
  includeErrorHandling?: boolean;
  /** 是否包含样式重置 */
  includeResetStyles?: boolean;
}

/**
 * 将React TSX代码字符串转换为HTML+JS代码字符串
 * @param tsxCode React TSX代码字符串
 * @param scssCode SCSS代码字符串
 * @param options 转换选项
 * @returns HTML+JS代码字符串
 */
export async function reactToHtml(
  tsxCode: string,
  scssCode?: string,
  options: ReactToHtmlOptions = {}
): Promise<{
  html: string;
  css: string;
  js: string;
  full: string;
}> {
  const {
    pretty = true,
    customStyles = '',
    includeErrorHandling = true,
    includeResetStyles = true
  } = options;

  try {
    // 验证输入代码
    if (!tsxCode || typeof tsxCode !== 'string') {
      throw new Error('Invalid TSX code provided');
    }

    // 解析TSX代码，提取状态、函数和JSX结构
    const parsed = parseTsxCode(tsxCode);

    // 生成HTML结构
    const htmlCode = generateHtmlStructure(parsed.jsx);

    // 生成CSS样式
    const cssCode = generateCssStyles(scssCode, includeResetStyles, includeErrorHandling, customStyles);

    // 生成JavaScript代码
    const jsCode = generateJsCode(parsed.state, parsed.functions, includeErrorHandling);

    // 创建完整的HTML模板
    const fullHtmlTemplate = combineHtmlParts(htmlCode, cssCode, jsCode);

    return {
      html: pretty ? formatHtml(htmlCode) : htmlCode,
      css: pretty ? formatCss(cssCode) : cssCode,
      js: pretty ? formatJs(jsCode) : jsCode,
      full: pretty ? formatHtml(fullHtmlTemplate) : fullHtmlTemplate
    };
  } catch (error) {
    throw new Error(`Failed to convert React TSX to HTML: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * 解析TSX代码，提取状态、函数和JSX结构
 */
function parseTsxCode(tsxCode: string): {
  state: string[];
  functions: string[];
  jsx: string;
} {
  const state: string[] = [];
  const functions: string[] = [];
  let jsx = '';

  // 移除import和export语句
  let code = tsxCode
    .replace(/import\s+.*?from\s+['"][^'"]*['"];?\s*/g, '')
    .replace(/export\s+default\s+/, 'const Component = ');

  // 提取useState
  const useStateRegex = /const\s+\[([^,]+),\s*([^\]]+)\]\s*=\s*useState\(([^)]+)\)/g;
  let match;
  while ((match = useStateRegex.exec(code)) !== null) {
    const [fullMatch, stateName, setterName, initialValue] = match;
    state.push(`let ${stateName} = ${initialValue};`);
    state.push(`function ${setterName}(value) { ${stateName} = value; updateUI(); }`);
    code = code.replace(fullMatch, '');
  }

  // 提取其他函数
  const functionRegex = /(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\})/g;
  while ((match = functionRegex.exec(code)) !== null) {
    functions.push(match[1]);
    code = code.replace(match[1], '');
  }

  // 提取return语句中的JSX
  const returnMatch = code.match(/return\s*\(\s*([\s\S]*?)\s*\)\s*;?\s*$/);
  if (returnMatch) {
    jsx = returnMatch[1].trim();
  }

  return { state, functions, jsx };
}

/**
 * 生成HTML结构
 */
function generateHtmlStructure(jsx: string): string {
  if (!jsx) {
    return '<div id="app"></div>';
  }

  // 转换JSX为HTML
  let html = jsx
    // 处理React.Fragment
    .replace(/<React\.Fragment>/g, '')
    .replace(/<\/React\.Fragment>/g, '')
    .replace(/<>/g, '')
    .replace(/<\/>/g, '')
    // 处理事件处理函数
    .replace(/onClick=\{([^}]+)\}/g, 'onclick="$1"')
    .replace(/onChange=\{([^}]+)\}/g, 'onchange="$1"')
    .replace(/onSubmit=\{([^}]+)\}/g, 'onsubmit="$1"')
    .replace(/onInput=\{([^}]+)\}/g, 'oninput="$1"')
    .replace(/onBlur=\{([^}]+)\}/g, 'onblur="$1"')
    .replace(/onFocus=\{([^}]+)\}/g, 'onfocus="$1"')
    // 处理样式对象
    .replace(/style=\{\{([^}]+)\}\}/g, (match, styles) => {
      const styleStr = parseStyleObjectToInline(styles);
      return `style="${styleStr}"`;
    })
    // 处理className
    .replace(/className=["']([^"']*)["']/g, 'class="$1"')
    // 处理表达式
    .replace(/\{([^}]+)\}/g, (match, expr) => {
      // 如果是简单的变量引用，转换为数据绑定
      if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(expr.trim())) {
        return `{{${expr.trim()}}}`;
      }
      return expr;
    });

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Component Preview</title>
</head>
<body>
    <div id="app">
        ${html}
    </div>
</body>
</html>`;
}

/**
 * 将样式对象转换为内联样式字符串
 */
function parseStyleObjectToInline(styles: string): string {
  const stylePairs = styles.split(',').map(pair => {
    const [key, value] = pair.split(':').map(s => s.trim());
    if (key && value) {
      // 转换驼峰命名为连字符
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${cssKey}: ${value}`;
    }
    return '';
  }).filter(Boolean);

  return stylePairs.join('; ');
}

/**
 * 生成CSS样式
 */
function generateCssStyles(scssCode?: string, includeResetStyles?: boolean, includeErrorHandling?: boolean, customStyles?: string): string {
  const resetStyles = includeResetStyles ? `
* {
    box-sizing: border-box;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
    line-height: 1.6;
}
` : '';

  // 转换SCSS为CSS
  const cssCode = scssCode ? scssToCss(scssCode, { pretty: true }) : '';

  const errorStyles = includeErrorHandling ? `
.error {
    color: #d32f2f;
    background-color: #ffebee;
    border: 1px solid #ef5350;
    border-radius: 4px;
    padding: 12px;
    margin: 10px 0;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 14px;
}
.error strong {
    display: block;
    margin-bottom: 8px;
}
` : '';

  return `${resetStyles}${cssCode}${errorStyles}${customStyles}`;
}

/**
 * 生成JavaScript代码
 */
function generateJsCode(state: string[], functions: string[], includeErrorHandling: boolean): string {
  const errorHandling = includeErrorHandling ? `
// 全局错误处理
window.addEventListener('error', function(e) {
    console.error('Runtime error:', e.error);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerHTML = '<strong>Runtime Error:</strong> ' + e.error.message;
    document.body.appendChild(errorDiv);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerHTML = '<strong>Promise Error:</strong> ' + e.reason;
    document.body.appendChild(errorDiv);
});
` : '';

  const stateCode = state.length > 0 ? `
// 状态管理
${state.join('\n')}
` : '';

  const functionCode = functions.length > 0 ? `
// 函数定义
${functions.join('\n')}
` : '';

  const updateCode = `
// 更新UI函数
function updateUI() {
    // 这里可以添加DOM更新逻辑
    console.log('UI updated');
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    updateUI();
});
`;

  return `${errorHandling}${stateCode}${functionCode}${updateCode}`;
}

/**
 * 组合HTML各部分
 */
function combineHtmlParts(htmlCode: string, cssCode: string, jsCode: string): string {
  return htmlCode
    .replace('</head>', `<style>${cssCode}</style></head>`)
    .replace('</body>', `<script>${jsCode}</script></body>`);
}

/**
 * 改进的HTML格式化
 * @param html HTML字符串
 * @returns 格式化后的HTML字符串
 */
function formatHtml(html: string): string {
  return html
    .replace(/>\s+</g, '>\n<')
    .replace(/\n\s*\n/g, '\n')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n');
}

/**
 * 改进的CSS格式化
 * @param css CSS字符串
 * @returns 格式化后的CSS字符串
 */
function formatCss(css: string): string {
  return css
    .split('}')
    .map(rule => rule.trim())
    .filter(rule => rule.length > 0)
    .map(rule => rule + '}')
    .join('\n');
}

/**
 * 改进的JS格式化
 * @param js JS字符串
 * @returns 格式化后的JS字符串
 */
function formatJs(js: string): string {
  return js.trim();
}

/**
 * 验证TSX代码语法
 * @param tsxCode React TSX代码字符串
 * @returns 验证结果
 */
export async function validateTsxCode(tsxCode: string): Promise<{
  isValid: boolean;
  errors: string[];
}> {
  const errors: string[] = [];

  try {
    if (!tsxCode || typeof tsxCode !== 'string') {
      errors.push('Invalid TSX code provided');
      return { isValid: false, errors };
    }

    // 基本语法检查
    if (!tsxCode.includes('return') && !tsxCode.includes('=>')) {
      errors.push('Missing return statement or arrow function');
    }

    if (!tsxCode.includes('React') && !tsxCode.includes('react') && !tsxCode.includes('JSX')) {
      errors.push('Missing React import or JSX usage');
    }

    // 检查基本的JSX语法
    const openTags = (tsxCode.match(/</g) || []).length;
    const closeTags = (tsxCode.match(/>/g) || []).length;
    if (openTags !== closeTags) {
      errors.push('Mismatched JSX tags');
    }

  } catch (error) {
    errors.push(error instanceof Error ? error.message : 'Unknown validation error');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * 将React组件直接渲染为HTML字符串
 * @param tsxCode React TSX代码字符串
 * @param props 组件属性
 * @returns HTML字符串
 */
export async function renderReactToString(
  tsxCode: string,
  props: Record<string, any> = {}
): Promise<string> {
  try {
    const parsed = parseTsxCode(tsxCode);
    const htmlCode = generateHtmlStructure(parsed.jsx);
    const propsStr = Object.keys(props).length > 0
      ? `, ${JSON.stringify(props)}`
      : '';

    return `<div>Component: ${htmlCode}${propsStr}</div>`;
  } catch (error) {
    throw new Error(`Failed to render React component: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// 导出类型
export type { ReactToHtmlOptions }; 