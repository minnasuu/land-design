#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 组件类别配置
const COMPONENT_CATEGORIES = {
  '1': { name: 'COMMON_COMPONENTS_DATA', label: '通用型', type: 'packages' },
  '2': { name: 'NAV_COMPONENTS_DATA', label: '导航型', type: 'packages' },
  '3': { name: 'INPUT_COMPONENTS_DATA', label: '数据输入型', type: 'packages' },
  '4': { name: 'DISPLAY_COMPONENTS_DATA', label: '数据展示型', type: 'packages' },
  '5': { name: 'FEEDBACK_COMPONENTS_DATA', label: '反馈型', type: 'packages' },
  '6': { name: 'TEXT_COMPONENTS_DATA', label: '文字型', type: 'packages' },
  '7': { name: 'OTHER_COMPONENTS_DATA', label: '其他', type: 'packages' },
  '8': { name: 'PRO_INPUT_COMPONENTS_DATA', label: 'Pro-输入型', type: 'pro-packages' },
  '9': { name: 'PRO_DISPLAY_COMPONENTS_DATA', label: 'Pro-展示型', type: 'pro-packages' },
  '10': { name: 'PRO_LAYOUT_COMPONENTS_DATA', label: 'Pro-布局型', type: 'pro-packages' },
};

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

// 更新 mock.tsx 文件
function updateMockFile(componentName, category, componentInfo) {
  const mockFilePath = path.join(__dirname, '..', 'example', 'mock.tsx');
  const pascalCase = toPascalCase(componentName);
  const kebabCase = toKebabCase(componentName);
  const categoryInfo = COMPONENT_CATEGORIES[category];
  const packageType = categoryInfo.type;

  try {
    let mockContent = fs.readFileSync(mockFilePath, 'utf8');

    // 1. 添加 import 语句
    const exampleImport = `import ${pascalCase}Example from "../${packageType}/${pascalCase}/Example";`;
    const componentImport = `import ${pascalCase} from "../${packageType}/${pascalCase}";`;
    
    // 查找最后一个 Example import 的位置
    const exampleImportRegex = /import \w+Example from ["']\.\.\/(?:packages|pro-packages)\/\w+\/Example["'];/g;
    const exampleMatches = [...mockContent.matchAll(exampleImportRegex)];
    
    if (exampleMatches.length > 0) {
      const lastExampleImport = exampleMatches[exampleMatches.length - 1];
      const insertPos = lastExampleImport.index + lastExampleImport[0].length;
      mockContent = mockContent.slice(0, insertPos) + '\n' + exampleImport + mockContent.slice(insertPos);
    }

    // 查找最后一个普通组件 import 的位置
    const componentImportRegex = /import \w+ from ["']\.\.\/(?:packages|pro-packages)\/\w+["'];/g;
    const componentMatches = [...mockContent.matchAll(componentImportRegex)];
    
    if (componentMatches.length > 0) {
      const lastComponentImport = componentMatches[componentMatches.length - 1];
      const insertPos = lastComponentImport.index + lastComponentImport[0].length;
      mockContent = mockContent.slice(0, insertPos) + '\n' + componentImport + mockContent.slice(insertPos);
    }

    // 2. 在对应的数据数组中添加组件配置
    const componentData = `  {
    id: "${kebabCase}",
    en: "${pascalCase}",
    zh: "${componentInfo.zhName || pascalCase}",
    desc: "${componentInfo.desc || `${pascalCase}组件用于展示内容`}",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
    ],
    example: <${pascalCase}Example />,
    demo: <${pascalCase}>${componentInfo.demoContent || '示例内容'}</${pascalCase}>,
  },`;

    // 找到对应的数据数组
    const arrayPattern = new RegExp(`export const ${categoryInfo.name} = \\[([\\s\\S]*?)\\];`, 'm');
    const arrayMatch = mockContent.match(arrayPattern);
    
    if (arrayMatch) {
      const arrayContent = arrayMatch[1];
      const lastBraceIndex = arrayContent.lastIndexOf('}');
      
      if (lastBraceIndex !== -1) {
        const newArrayContent = arrayContent.slice(0, lastBraceIndex + 1) + ',\n' + componentData + arrayContent.slice(lastBraceIndex + 1);
        mockContent = mockContent.replace(arrayPattern, `export const ${categoryInfo.name} = [${newArrayContent}];`);
      }
    }

    // 写回文件
    fs.writeFileSync(mockFilePath, mockContent, 'utf8');
    console.log(`✅ 已更新 example/mock.tsx 文件`);

  } catch (error) {
    console.warn(`⚠️  更新 mock.tsx 失败: ${error.message}`);
    console.warn(`   请手动添加组件到 example/mock.tsx`);
  }
}

// 创建组件目录和文件
function createComponent(componentName, category, componentInfo) {
  const categoryInfo = COMPONENT_CATEGORIES[category];
  const packageType = categoryInfo.type;
  const componentDir = path.join(__dirname, '..', packageType, toPascalCase(componentName));
  
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

    // 更新 mock.tsx
    updateMockFile(componentName, category, componentInfo);

    console.log(`\n🎉 组件 "${toPascalCase(componentName)}" 创建成功！`);
    console.log(`📁 组件路径: ${componentDir}`);
    console.log(`📂 组件类别: ${categoryInfo.label}`);
    console.log(`\n📝 接下来需要手动完成以下步骤：`);
    console.log(`1. 在 ${packageType}/index.tsx 中导出新组件`);
    console.log(`2. 根据需求修改组件的 props.ts 和 index.tsx`);
    console.log(`3. 完善组件的样式和功能`);
    console.log(`4. 查看并优化 example/mock.tsx 中的组件配置`);

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

    // 显示类别选项
    console.log('\n📂 请选择组件类别：');
    Object.entries(COMPONENT_CATEGORIES).forEach(([key, value]) => {
      console.log(`   ${key}. ${value.label} (${value.type})`);
    });

    rl.question('\n请输入类别编号: ', (categoryInput) => {
      const category = categoryInput.trim();
      
      if (!COMPONENT_CATEGORIES[category]) {
        console.log('❌ 无效的类别编号！');
        rl.close();
        return;
      }

      console.log(`✅ 已选择类别: ${COMPONENT_CATEGORIES[category].label}`);

      rl.question('\n请输入组件中文名称 (可选，回车跳过): ', (zhName) => {
        rl.question('请输入组件描述 (可选，回车跳过): ', (desc) => {
          const componentInfo = {
            zhName: zhName.trim() || toPascalCase(componentName),
            desc: desc.trim() || `${toPascalCase(componentName)}组件用于展示内容`,
            demoContent: '示例内容'
          };

          console.log(`\n📝 组件配置信息:`);
          console.log(`   中文名称: ${componentInfo.zhName}`);
          console.log(`   描述: ${componentInfo.desc}`);
          console.log(`   类别: ${COMPONENT_CATEGORIES[category].label}`);

          rl.question('\n确认创建组件？(y/N): ', (confirm) => {
            if (confirm.toLowerCase() === 'y' || confirm.toLowerCase() === 'yes') {
              createComponent(componentName, category, componentInfo);
            } else {
              console.log('❌ 已取消创建组件');
            }
            rl.close();
          });
        });
      });
    });
  });
}

// 处理命令行参数
if (process.argv.length > 2) {
  const componentName = process.argv[2];
  const category = process.argv[3] || '7'; // 默认为 "其他" 类别
  const zhName = process.argv[4];
  const desc = process.argv[5];

  if (componentName && /^[a-zA-Z][a-zA-Z0-9-_]*$/.test(componentName)) {
    if (!COMPONENT_CATEGORIES[category]) {
      console.log('❌ 无效的类别编号！');
      console.log('可用类别：');
      Object.entries(COMPONENT_CATEGORIES).forEach(([key, value]) => {
        console.log(`   ${key}. ${value.label} (${value.type})`);
      });
      process.exit(1);
    }

    const componentInfo = {
      zhName: zhName || toPascalCase(componentName),
      desc: desc || `${toPascalCase(componentName)}组件用于展示内容`,
      demoContent: '示例内容'
    };

    console.log('🚀 Land Design 组件生成器 (命令行模式)');
    console.log('========================\n');
    console.log(`组件名称: ${toPascalCase(componentName)}`);
    console.log(`组件类别: ${COMPONENT_CATEGORIES[category].label}`);
    console.log(`中文名称: ${componentInfo.zhName}`);
    console.log(`描述: ${componentInfo.desc}\n`);

    createComponent(componentName, category, componentInfo);
  } else {
    console.log('❌ 无效的组件名称！');
    console.log('\n使用方法:');
    console.log('  交互式: npm run create-component');
    console.log('  命令行: npm run create-component <组件名> [类别编号] [中文名] [描述]');
    console.log('\n示例:');
    console.log('  npm run create-component MyButton 1 "按钮" "自定义按钮组件"');
    process.exit(1);
  }
} else {
  main();
}
