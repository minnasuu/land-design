import React, { useState } from 'react'
import Link from ".";
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import Flex from '../Flex';
import LinkVariants from './Variants';

// Link 状态和尺寸定义
const linkStatuses = ['default', 'primary', 'warning', 'danger', 'success'];
const linkSizes = ['mini', 'small', 'default', 'large'];

// API 文档配置
const linkProps = [
  { name: 'href', type: 'string', desc: '链接地址' },
  { name: 'target', type: 'LinkTarget (_self | _blank | _parent | _top)', desc: '链接打开方式', default: '_self' },
  { name: 'anchor', type: 'string', desc: '链接锚点' },
  { name: 'disabled', type: 'boolean', desc: '是否禁用链接', default: 'false' },
  { name: 'status', type: 'LinkStatus (default | primary | warning | danger | success)', desc: '链接状态', default: 'default' },
  { name: 'size', type: 'LinkSize (mini | small | default | large)', desc: '链接尺寸', default: 'default' },
  { name: 'underline', type: 'boolean', desc: '是否显示下划线', default: 'false' },
  { name: 'hoverUnderline', type: 'boolean', desc: '悬停时是否显示下划线', default: 'false' },
  { name: 'prefixIcon', type: 'boolean | ReactNode', desc: '前缀图标' },
  { name: 'suffixIcon', type: 'boolean | ReactNode', desc: '后缀图标' },
  { name: 'tip', type: 'ReactNode | string', desc: '气泡提示内容' },
  { name: 'tipProps', type: 'PopOverProps', desc: '气泡提示配置' },
  { name: 'onClick', type: '(e: MouseEvent<HTMLAnchorElement>) => void', desc: '点击事件回调' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
  { name: 'children', type: 'ReactNode', desc: '链接内容' },
];

export default function LinkExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  return (
    <ComponentContentLayout
      zh='链接'
      en='Link'
      desc='LandDesign 的链接组件，提供丰富的链接样式和交互效果。支持多种状态、尺寸、图标、提示等功能。'
      hasVariants
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='Link 组件的基础用法，支持不同的状态和样式。'
          >
            <CodeOperationContainer>
              <Flex gap={24} justify='center'>
                <Link>常规链接</Link>
                <Link status="primary" href="https://e.qq.com">主题链接</Link>
                <Link status="warning">警告链接</Link>
                <Link status="danger">危险链接</Link>
                <Link status="success">安全链接</Link>
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 链接状态 */}
          <ComponentSectionLayout
            title='链接状态'
            id='link-status'
            description='Link 支持 5 种不同的状态，用于表达不同的语义。'
          >
            <CodeOperationContainer>
              <Flex gap={24} justify='center'>
                {linkStatuses.map(status => (
                  <Link key={status} status={status as any}>
                    {status} 链接
                  </Link>
                ))}
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 链接尺寸 */}
          <ComponentSectionLayout
            title='链接尺寸'
            id='link-size'
            description='Link 支持 4 种不同的尺寸，适应不同的使用场景。'
          >
            <CodeOperationContainer>
              <Flex gap={24} justify='center'>
                {linkSizes.map(size => (
                  <Link key={size} size={size as any}>
                    {size} 链接
                  </Link>
                ))}
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 链接下划线 */}
          <ComponentSectionLayout
            title='链接下划线'
            id='link-underline'
            description='支持显示下划线、悬停下划线和隐藏下划线等模式。'
          >
            <CodeOperationContainer>
              <Flex gap={24} justify='center'>
                <Link underline>显示下划线链接</Link>
                <Link hoverUnderline>悬浮下划线链接</Link>
                <Link hoverUnderline={false}>不显示下划线链接</Link>
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 链接图标 */}
          <ComponentSectionLayout
            title='链接图标'
            id='link-icon'
            description='支持前缀图标和后缀图标，自动识别内外链并显示相应图标。'
          >
            <CodeOperationContainer>
              <Flex gap={24} column justify='center'>
                <Flex gap={24} justify='center'>
                  <Link prefixIcon>内链前缀图标</Link>
                  <Link suffixIcon>内链后缀图标</Link>
                </Flex>
                <Flex gap={24} justify='center'>
                  <Link prefixIcon target="_blank">外链前缀图标</Link>
                  <Link suffixIcon target="_blank">外链后缀图标</Link>
                </Flex>
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 链接禁用 */}
          <ComponentSectionLayout
            title='禁用链接'
            id='link-disabled'
            description='禁用状态的链接不可点击，但保持视觉样式。'
          >
            <CodeOperationContainer>
              <Flex gap={24} justify='center'>
                <Link disabled tip="常规链接失效">常规禁用链接</Link>
                <Link disabled status="primary">主题禁用链接</Link>
                <Link disabled status="warning">警告禁用链接</Link>
                <Link disabled status="danger">危险禁用链接</Link>
                <Link disabled status="success">安全禁用链接</Link>
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 链接提示 */}
          <ComponentSectionLayout
            title='链接提示'
            id='link-tip'
            description='支持气泡提示功能，可以自定义提示内容和样式。'
          >
            <CodeOperationContainer>
              <Flex gap={24} justify='center'>
                <Link tip="链接提示">包含提示的链接</Link>
                <Link tip="链接提示" tipProps={{ theme: 'dark' }}>包含提示的链接</Link>
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={linkProps} />
        </div>
      )}

      {activeTab === 'variants' && (<LinkVariants />)}
    </ComponentContentLayout>
  )
}
