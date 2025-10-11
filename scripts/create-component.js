#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 工具函数：将组件名转换为不同的格式
function toPascalCase(str) {
  return str.replace(/(?:^|[-_])(\w)/g, (_, c) => c.toUpperCase());
}

function toKebabCase(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

// 模板文件内容
const templates = {
  'index.tsx': `import React from 'react';
import './index.scss';
import { {{ComponentName}}Props } from './props';

const {{ComponentName}}: React.FC<{{ComponentName}}Props> = ({
  className = "",
  style,
  children,
  ...props
}) => {
  return (
    <div 
      className={\`land-{{component-name}} \${className}\`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default {{ComponentName}};
`,

  'props.ts': `import React, { CSSProperties } from 'react';

/**
 * {{ComponentName}}组件属性类型定义
 */

export interface {{ComponentName}}Props {
  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义组件外观
   */
  style?: CSSProperties;

  /** 
   * 子元素
   * 可以传入React节点作为组件内容
   */
  children?: React.ReactNode;
}
`,

  'index.scss': `.land-{{component-name}} {
  // 基础样式
  display: block;
  
  // 自定义样式可以在这里添加
}
`,

  'Example.tsx': `import React, { useState } from 'react';
import {{ComponentName}} from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function {{ComponentName}}Example() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const {{componentName}}Props = [
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义组件外观' },
    { name: 'children', type: 'ReactNode', desc: '子元素，可以传入React节点作为组件内容' },
  ];

  return (
    <ComponentContentLayout
      zh='{{ComponentName}}'
      en='{{ComponentName}}'
      desc='LandDesign 的 {{ComponentName}} 组件，用于展示内容。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='{{ComponentName}} 组件的基础用法。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <{{ComponentName}}>
                  这是一个 {{ComponentName}} 组件示例
                </{{ComponentName}}>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={{{componentName}}Props} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
`
};

// 替换模板中的占位符
function replaceTemplate(template, componentName) {
  const pascalCase = toPascalCase(componentName);
  const kebabCase = toKebabCase(componentName);
  const camelCase = toCamelCase(componentName);
  
  return template
    .replace(/\{\{ComponentName\}\}/g, pascalCase)
    .replace(/\{\{componentName\}\}/g, camelCase)
    .replace(/\{\{component-name\}\}/g, kebabCase);
}

// 创建组件目录和文件
function createComponent(componentName) {
  const componentDir = path.join(__dirname, '..', 'packages', toPascalCase(componentName));
  
  // 检查组件是否已存在
  if (fs.existsSync(componentDir)) {
    console.log(`❌ 组件 "${toPascalCase(componentName)}" 已存在！`);
    process.exit(1);
  }

  try {
    // 创建组件目录
    fs.mkdirSync(componentDir, { recursive: true });
    console.log(`✅ 创建组件目录: ${componentDir}`);

    // 创建模板文件
    Object.entries(templates).forEach(([filename, template]) => {
      const content = replaceTemplate(template, componentName);
      const filePath = path.join(componentDir, filename);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ 创建文件: ${filename}`);
    });

    console.log(`\n🎉 组件 "${toPascalCase(componentName)}" 创建成功！`);
    console.log(`📁 组件路径: ${componentDir}`);
    console.log(`\n📝 接下来需要手动完成以下步骤：`);
    console.log(`1. 在 packages/index.tsx 中导出新组件`);
    console.log(`2. 在 example/App.tsx 中添加组件路由`);
    console.log(`3. 根据需求修改组件的 props.ts 和 index.tsx`);
    console.log(`4. 完善组件的样式和功能`);

  } catch (error) {
    console.error(`❌ 创建组件失败:`, error.message);
    process.exit(1);
  }
}

// 主函数
function main() {
  console.log('🚀 Land Design 组件生成器');
  console.log('========================\n');

  rl.question('请输入组件名称 (支持 kebab-case、camelCase、PascalCase): ', (input) => {
    const componentName = input.trim();
    
    if (!componentName) {
      console.log('❌ 组件名称不能为空！');
      rl.close();
      return;
    }

    // 验证组件名称格式
    if (!/^[a-zA-Z][a-zA-Z0-9-_]*$/.test(componentName)) {
      console.log('❌ 组件名称格式不正确！只能包含字母、数字、连字符和下划线，且必须以字母开头。');
      rl.close();
      return;
    }

    console.log(`\n📋 组件信息:`);
    console.log(`   原始名称: ${componentName}`);
    console.log(`   PascalCase: ${toPascalCase(componentName)}`);
    console.log(`   kebab-case: ${toKebabCase(componentName)}`);
    console.log(`   camelCase: ${toCamelCase(componentName)}`);

    rl.question('\n确认创建组件？(y/N): ', (confirm) => {
      if (confirm.toLowerCase() === 'y' || confirm.toLowerCase() === 'yes') {
        createComponent(componentName);
      } else {
        console.log('❌ 已取消创建组件');
      }
      rl.close();
    });
  });
}

// 处理命令行参数
if (process.argv.length > 2) {
  const componentName = process.argv[2];
  if (componentName && /^[a-zA-Z][a-zA-Z0-9-_]*$/.test(componentName)) {
    createComponent(componentName);
  } else {
    console.log('❌ 无效的组件名称！');
    process.exit(1);
  }
} else {
  main();
}
