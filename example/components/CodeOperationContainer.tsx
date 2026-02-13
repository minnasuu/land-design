import React, { useState } from 'react'
import Icon from '../../packages/Icon';
import Button from '../../packages/Button';
import CodeHighlightContainer from './CodeHighlightContainer';
import Flex from '../../packages/Flex';

/**
 * CodeOperationContainer 组件
 * 
 * 功能：
 * 1. 将传入的React children转换成字符串表示
 * 2. 提供代码复制和展示功能
 * 3. 支持自定义回调函数
 * 
 * 使用方法：
 * ```tsx
 * <CodeOperationContainer
 *   onCopy={() => console.log('复制功能')}
 *   onCode={() => console.log('展示代码')}
 * >
 *   <div>你的组件内容</div>
 * </CodeOperationContainer>
 * ```
 * 
 * 如果不提供onCopy或onCode回调，组件会自动处理：
 * - onCopy: 将children的字符串表示复制到剪贴板
 * - onCode: 在控制台输出并弹窗显示children的字符串表示
 */

// 格式化props的工具函数
const formatProps = (props: Record<string, any>, indent: number = 0, childrenToStringFn?: (children: React.ReactNode, indent: number) => string): string => {
  const indentStr = '  '.repeat(indent);
  const entries = Object.entries(props).filter(([_, value]) => {
    if (value === undefined || value === null) return false;
    if (value === '') return false;
    return true;
  });

  if (entries.length === 0) return '';

  const formattedProps = entries.map(([key, value]) => {
    try {
      if (typeof value === 'string') {
        return `${key}="${value}"`;
      }
      if (typeof value === 'boolean') {
        return value ? key : '';
      }
      if (typeof value === 'number') {
        return `${key}={${value}}`;
      }
      if (typeof value === 'function') {
        return `${key}={${value.name || '() => {}'}}`;
      }
      if (React.isValidElement(value)) {
        return `${key}={${childrenToStringFn ? childrenToStringFn(value, 0) : '...'}}`;
      }
      // 处理对象类型
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        try {
          // 尝试将对象转换为 JSX 对象字面量格式
          const objectProps = formatProps(value, indent + 1, childrenToStringFn);
          if (objectProps) {
            return `${key}={{\n${objectProps}\n${indentStr}}}`;
          } else {
            return `${key}={{}}`;
          }
        } catch (objectError) {
          // 如果对象格式化失败，尝试 JSON.stringify
          try {
            return `${key}={${JSON.stringify(value)}}`;
          } catch (jsonError) {
            // 如果 JSON.stringify 也失败，使用注释
            if (value.constructor && value.constructor.name) {
              return `${key}={/* ${value.constructor.name} */}`;
            }
            return `${key}={/* object */}`;
          }
        }
      }
      // 处理数组类型
      if (Array.isArray(value)) {
        try {
          const arrayItems = value.map(item => {
            if (typeof item === 'string') {
              return `"${item}"`;
            }
            if (typeof item === 'number' || typeof item === 'boolean') {
              return String(item);
            }
            if (React.isValidElement(item)) {
              return childrenToStringFn ? childrenToStringFn(item, 0) : '...';
            }
            if (item && typeof item === 'object') {
              const objectProps = formatProps(item, indent + 1, childrenToStringFn);
              return `{\n${objectProps}\n${indentStr}}`;
            }
            return JSON.stringify(item);
          }).join(', ');
          return `${key}={[${arrayItems}]}`;
        } catch (arrayError) {
          try {
            return `${key}={${JSON.stringify(value)}}`;
          } catch (jsonError) {
            return `${key}={/* array */}`;
          }
        }
      }
      // 处理其他类型
      try {
        return `${key}={${JSON.stringify(value)}}`;
      } catch (jsonError) {
        return `${key}={/* ${typeof value} */}`;
      }
    } catch (error) {
      // 如果整个处理过程出错，返回安全的默认值
      console.warn(`Failed to format prop ${key}:`, error);
      return `${key}={/* error */}`;
    }
  }).filter(Boolean);

  if (formattedProps.length === 1) {
    return ' ' + formattedProps[0];
  }

  // 多个属性，计算对齐
  const maxKeyLength = Math.max(...formattedProps.map(prop => {
    const match = prop.match(/^(\w+)=/);
    return match ? match[1].length : 0;
  }));

  return '\n' + formattedProps.map(prop => {
    const match = prop.match(/^(\w+)=(.+)$/);
    if (match) {
      const [_, key, value] = match;
      // 只在属性名前面补齐缩进，不在=号前补空格
      return `${indentStr}  ${key}=${value}`;
    }
    return `${indentStr}  ${prop}`;
  }).join('\n');
};

// 将React children转换成字符串的工具函数
const childrenToString = (children: React.ReactNode, indent: number = 0): string => {
  try {
    const indentStr = '  '.repeat(indent); // 使用2个空格作为缩进

    if (children === null || children === undefined) {
      return '';
    }

    if (typeof children === 'string') {
      // 处理字符串，保持换行和缩进
      const lines = children.split('\n');
      if (lines.length === 1) {
        return indentStr + children;
      }
      return lines.map(line => indentStr + line).join('\n');
    }

    if (typeof children === 'number' || typeof children === 'boolean') {
      return indentStr + String(children);
    }

    if (Array.isArray(children)) {
      // 数组元素之间添加换行符
      const filteredChildren = children.filter(child => {
        if (child === null || child === undefined) return false;
        if (typeof child === 'string' && child.trim() === '') return false;
        return true;
      });

      if (filteredChildren.length === 0) {
        return '';
      }

      // 如果只有一个子元素，直接返回
      if (filteredChildren.length === 1) {
        return childrenToString(filteredChildren[0], indent);
      }

      // 多个子元素，每个一行
      return filteredChildren
        .map(child => {
          try {
            return childrenToString(child, indent);
          } catch (error) {
            console.warn('Failed to stringify child:', error);
            return `${indentStr}{/* error */}`;
          }
        })
        .filter(Boolean)
        .join('\n');
    }

    if (React.isValidElement(children)) {
      try {
        const { type, props } = children;

        // 处理Fragment
        if (type === React.Fragment) {
          return childrenToString(props.children, indent);
        }

        // 获取组件名称
        let componentName = '';
        if (typeof type === 'string') {
          componentName = type;
        } else if (typeof type === 'function') {
          componentName = (type as any).displayName || type.name || 'Component';
        } else {
          componentName = 'Unknown';
        }

        // 处理props
        const { children: childChildren, ...otherProps } = props;
        const propsString = formatProps(otherProps, indent, childrenToString);

        // 处理自闭合标签
        if (!childChildren || (Array.isArray(childChildren) && childChildren.length === 0)) {
          if (propsString.includes('\n')) {
            // 多行props，需要换行并保持一致的缩进
            return `${indentStr}<${componentName}${propsString}\n${indentStr}/>`;
          } else {
            // 单行props
            return `${indentStr}<${componentName}${propsString} />`;
          }
        }

        // 处理有内容的标签
        const childrenString = childrenToString(childChildren, indent + 1);

        // 判断是否需要多行格式
        const needsMultiline = childrenString.includes('\n') || childrenString.length > 50 || propsString.includes('\n');

        if (needsMultiline) {
          if (propsString.includes('\n')) {
            // 多行props + 多行内容
            return `${indentStr}<${componentName}${propsString}\n${indentStr}>\n${childrenString}\n${indentStr}</${componentName}>`;
          } else {
            // 单行props + 多行内容
            return `${indentStr}<${componentName}${propsString}>\n${childrenString}\n${indentStr}</${componentName}>`;
          }
        } else {
          // 单行内容
          if (propsString.includes('\n')) {
            // 多行props + 单行内容
            return `${indentStr}<${componentName}${propsString}\n${indentStr}>${childrenString}</${componentName}>`;
          } else {
            // 单行props + 单行内容
            return `${indentStr}<${componentName}${propsString}>${childrenString}</${componentName}>`;
          }
        }
      } catch (error) {
        console.warn('Failed to stringify React element:', error);
        return `${indentStr}{/* React element error */}`;
      }
    }

    return '';
  } catch (error) {
    console.warn('Failed to stringify children:', error);
    return '  '.repeat(indent) + '{/* error */}';
  }
};

// 格式化最终代码输出的函数
const formatFinalCode = (code: string): string => {
  try {
    // 移除开头和结尾的空白行
    let formattedCode = code.trim();

    // 确保代码有适当的缩进
    const lines = formattedCode.split('\n');
    const minIndent = Math.min(...lines
      .filter(line => line.trim().length > 0)
      .map(line => {
        const match = line.match(/^(\s*)/);
        return match ? match[1].length : 0;
      })
    );

    // 如果所有行都有缩进，则移除最小缩进
    if (minIndent > 0) {
      formattedCode = lines
        .map(line => line.length >= minIndent ? line.substring(minIndent) : line)
        .join('\n');
    }

    return formattedCode;
  } catch (error) {
    console.warn('Failed to format final code:', error);
    return code || '// Error formatting code';
  }
};

// 将children转换为完整的React Demo组件模板
const generateReactDemoTemplate = (children: React.ReactNode): string => {
  try {
    const childrenString = childrenToString(children, 0); // 从0个空格开始缩进
    return formatFinalCode(childrenString);
  } catch (error) {
    console.warn('Failed to generate React demo template:', error);
    return '// Error generating component code\n{/* Component code generation failed */}';
  }
};

const CodeOperationContainer: React.FC<{
  column?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode
}> = ({ children, style, className, column = false }) => {
  const [showCode, setShowCode] = useState(false);

  // 根据模式生成不同的代码字符串，增加容错处理
  let childrenString = '';
  try {
    childrenString = generateReactDemoTemplate(children);
  } catch (error) {
    console.warn('Failed to generate children string:', error);
    childrenString = '// Error generating component code\n{/* Component code generation failed */}';
  }

  // 处理复制功能
  const handleCopy = () => {
    try {
      // 复制当前模式的代码字符串
      navigator.clipboard.writeText(childrenString).catch(err => {
        console.error('Failed to copy: ', err);
      });
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };


  return (
    <div className="flex flex-col w-full border border-border-primary rounded-lg">
      <Flex className={`p-24 text-xs ${className}`} bothCenter gap={12} style={style} column={column}>
        {children}
      </Flex>
      <details className="w-full flex flex-col justify-between border-box" style={{ marginTop: '-1px' }} open={showCode}>
        <summary className="flex items-center justify-end gap-8 p-8">
          <Button icon={<Icon name="copy" />} variant='text' size='small' onClick={handleCopy} />
          <Button
            icon={<Icon className={showCode ? "rotate-180" : ""} name={showCode ? "arrow-double" : "code"} size={16} />}
            variant='text'
            size='small'
            tip={showCode ? "收起" : "显示组件代码"}
            onClick={(e) => {
              e.preventDefault();
              setShowCode(!showCode);
            }}
          />
        </summary>
        <div className='bg-bg-secondary rounded-b-lg p-16'>
          <CodeHighlightContainer language='tsx' codeStr={childrenString} />
        </div>
      </details>
    </div>
  )
}

export default CodeOperationContainer;