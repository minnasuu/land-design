import React, { useState } from 'react';
import Button from '.';
import Icon from '../Icon';
import Loading from '../Loading';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ButtonVariants from './Variants';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import Flex from '../Flex';

// 按钮类型和状态定义
const buttonTypes = ['text', 'fill', 'background', 'outline', 'dashed', 'transparent'];
const buttonStatuses = ['default', 'primary', 'warning', 'danger', 'success'];
const buttonSizes = ['mini', 'small', 'default', 'large'];

export default function ButtonExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const buttonProps = [
    { name: 'type', type: 'ButtonType (text | fill | background | outline | dashed | transparent)', desc: '按钮类型', default: 'outline' },
    { name: 'status', type: 'ButtonStatus (default | primary | warning | danger | success)', desc: '按钮状态', default: 'default' },
    { name: 'size', type: 'ButtonSize (mini | small | default | large)', desc: '按钮尺寸', default: 'default' },
    { name: 'text', type: 'string', desc: '按钮主要文案' },
    { name: 'subText', type: 'string', desc: '按钮次要文案' },
    { name: 'icon', type: 'ReactNode', desc: '按钮图标' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用按钮', default: 'false' },
    { name: 'block', type: 'boolean', desc: '是否为块级按钮', default: 'false' },
    { name: 'bold', type: 'boolean', desc: '是否加粗文字', default: 'false' },
    { name: 'hoverBold', type: 'boolean', desc: '悬停时是否加粗文字', default: 'false' },
    { name: 'capsule', type: 'boolean', desc: '是否为胶囊按钮', default: 'false' },
    { name: 'hoverAnimation', type: 'boolean', desc: '是否启用悬停动画', default: 'false' },
    { name: 'activeAnimation', type: 'boolean', desc: '是否启用点击动画', default: 'false' },
    { name: 'tip', type: 'ReactNode | string', desc: '气泡提示内容' },
    { name: 'onClick', type: '(e: React.MouseEvent) => void', desc: '点击事件回调' },
  ];

  return (
    <ComponentContentLayout
      zh='按钮'
      en='Button'
      desc='LandDesign 的按钮组件，提供丰富的按钮样式和交互效果。支持多种类型、状态、尺寸，以及图标、动画、提示等高级功能。'
      activeTab={activeTab}
      hasVariants
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='Button 组件的基础用法，支持不同的类型和状态。'
          >
            <CodeOperationContainer>
              <Button text='默认按钮' />
              <Button text='主要按钮' type='fill' status='primary' />
              <Button text='成功按钮' type='fill' status='success' />
              <Button text='警告按钮' type='fill' status='warning' />
              <Button text='危险按钮' type='fill' status='danger' />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 按钮类型 */}
          <ComponentSectionLayout
            title='按钮类型'
            id='button-type'
            description='Button 支持 6 种不同的类型，每种类型都有独特的视觉效果。'
          >
            <CodeOperationContainer>
              {buttonTypes.map(type => (
                <Button key={type} text={type} type={type as any} />
              ))}
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 按钮状态 */}
          <ComponentSectionLayout
            title='按钮状态'
            id='button-status'
            description='每种按钮类型都支持 5 种不同的状态，用于表达不同的语义。'
          >
            <CodeOperationContainer>
              <Flex gap={12} column justify='center'>
                {buttonTypes.map(type => (
                  <Flex key={type} gap={12} justify='center'>
                    {buttonStatuses.map(status => (
                      <Button
                        key={`${type}-${status}`}
                        text={status}
                        type={type as any}
                        status={status as any}
                      />
                    ))}
                  </Flex>
                ))}
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 按钮尺寸 */}
          <ComponentSectionLayout
            title='按钮尺寸'
            id='button-size'
            description='Button 支持 4 种不同的尺寸，适应不同的使用场景。'
          >
            <CodeOperationContainer>
              <Flex gap={12} justify='center'>
                <Flex gap={12} justify='center'>
                  {buttonSizes.map(size => (
                    <Button
                      key={size}
                      text={size}
                      type='outline'
                      status='default'
                      size={size as any}
                    />
                  ))}
                </Flex>
                <Flex gap={12} justify='center'>
                  {buttonSizes.map(size => (
                    <Button
                      key={`icon-${size}`}
                      icon={<Icon name='download' />}
                      type='outline'
                      status='default'
                      size={size as any}
                    />
                  ))}
                </Flex>
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 图标按钮 */}
          <ComponentSectionLayout
            title='图标按钮'
            id='button-icon'
            description='Button 支持图标，可以单独使用图标或与文字组合使用。'
          >
            <CodeOperationContainer>
              <Button text='下载' type='outline' icon={<Icon name='download' />} />
              <Button type='outline' icon={<Icon name='download' />} />
              <Button text='设置' type='fill' icon={<Icon name='setting-fill' />} />
              <Button type='fill' icon={<Icon name='setting-fill' />} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='button-disabled'
            description='通过 disabled 属性可以禁用按钮，禁用后按钮不可点击且样式会变灰。'
          >
            <CodeOperationContainer>
              <Flex gap={12} column justify='center'>
                {buttonTypes.map(type => (
                  <Flex key={type} gap={12} justify='center'>
                    {buttonStatuses.map(status => (
                      <Button
                        key={`${type}-${status}`}
                        text='禁用'
                        type={type as any}
                        status={status as any}
                        disabled
                      />
                    ))}
                  </Flex>
                ))}
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 加载状态 */}
          <ComponentSectionLayout
            title='加载状态'
            id='button-loading'
            description='通过 Loading 组件可以实现按钮的加载状态效果。'
          >
            <CodeOperationContainer>
              <Button text='保存中' type='outline' disabled icon={<Loading />} />
              <Button type='outline' disabled icon={<Loading />} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 块级按钮 */}
          <ComponentSectionLayout
            title='块级按钮'
            id='button-block'
            description='通过 block 属性可以让按钮占满父容器的宽度。'
          >
            <CodeOperationContainer>
              <Button text='块级按钮' type='fill' block />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 文字样式 */}
          <ComponentSectionLayout
            title='文字样式'
            id='button-text-style'
            description='支持文字加粗和悬停加粗效果。'
          >
            <CodeOperationContainer>
              <Button text='加粗文字' type='fill' bold />
              <Button text='悬停加粗' type='fill' hoverBold />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 胶囊按钮 */}
          <ComponentSectionLayout
            title='胶囊按钮'
            id='button-capsule'
            description='通过 capsule 属性可以创建胶囊形状的按钮。'
          >
            <CodeOperationContainer>
              <Flex gap={12} column justify='center'>
                {buttonTypes.map(type => (
                  <Flex key={type} gap={12} justify='center'>
                    {buttonStatuses.map(status => (
                      <Button
                        key={`${type}-${status}`}
                        text='胶囊'
                        type={type as any}
                        status={status as any}
                        capsule
                      />
                    ))}
                  </Flex>
                ))}
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 按钮提示 */}
          <ComponentSectionLayout
            title='按钮提示'
            id='button-tip'
            description='通过 tip 属性可以为按钮添加气泡提示。'
          >
            <CodeOperationContainer>
              <Button text='含提示按钮' tip='这是一个提示内容' />
              <Button text='禁用提示' tip='禁用状态的提示' disabled />
              <Button icon={<Icon name='download' />} tip='图标按钮的提示' />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 按钮动效 */}
          <ComponentSectionLayout
            title='按钮动效'
            id='button-animation'
            description='支持悬停动画和点击动画效果。'
          >
            <CodeOperationContainer>
              <Button text='悬停动画' type='fill' hoverAnimation />
              <Button text='点击动画' type='fill' activeAnimation />
              <Button text='双重动画' type='fill' hoverAnimation activeAnimation />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )
      }

      {
        activeTab === 'props' && (
          <div className='flex flex-col gap-12'>
            <ComponentPropsTable props={buttonProps} />
          </div>
        )
      }

      {activeTab === 'variants' && (<ButtonVariants />)}
    </ComponentContentLayout >
  );
}
