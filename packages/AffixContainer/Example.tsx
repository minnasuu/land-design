import { useState } from 'react'
import AffixContainer from ".";
import Tag from '../Tag';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import Flex from '../Flex';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import Link from '../Link';

const AffixItemTypeLink = (
  <Link anchor="AffixItemProps-API">AffixItemProps</Link>
);

const containerProps = [
  { name: 'items', type: <>{AffixItemTypeLink} | {AffixItemTypeLink}[]</>, desc: '图钉配置，支持单个图钉或图钉数组' },
  { name: 'disabled', type: 'boolean', desc: '是否禁用', default: 'false' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名', default: '' },
  { name: 'children', type: 'ReactNode', desc: '容器内容' },
  { name: 'onClick', type: '(e: MouseEvent) => void', desc: '容器点击事件' },
  { name: 'htmlProps', type: 'HTMLAttributes', desc: '原生 div HTML 属性透传' },
];

const itemTypes = [
  {
    name: 'AffixItemProps',
    data: [
      { name: 'content', type: 'ReactNode', desc: '图钉内容' },
      { name: 'placement', type: "'topStart' | 'topCenter' | 'topEnd' | 'bottomStart' | 'bottomCenter' | 'bottomEnd' | 'startCenter' | 'endCenter' | 'center' | 'custom'", desc: '图钉位置', default: "'center'" },
      { name: 'offset', type: 'number', desc: '图钉到容器边缘的偏移距离（px）', default: '8' },
      { name: 'display', type: "'always' | 'hoverShow' | 'hoverHide'", desc: '显示模式', default: "'always'" },
      { name: 'animation', type: 'string', desc: '显示/隐藏时的 CSS animation' },
      { name: 'zIndex', type: 'number', desc: '图钉层级', default: '2' },
      { name: 'left', type: 'number | string', desc: "自定义位置 left，仅 placement='custom' 时生效" },
      { name: 'top', type: 'number | string', desc: "自定义位置 top，仅 placement='custom' 时生效" },
      { name: 'right', type: 'number | string', desc: "自定义位置 right，仅 placement='custom' 时生效" },
      { name: 'bottom', type: 'number | string', desc: "自定义位置 bottom，仅 placement='custom' 时生效" },
      { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
      { name: 'className', type: 'string', desc: '自定义类名', default: '' },
      { name: 'onClick', type: '(e: MouseEvent) => void', desc: '图钉点击事件' },
    ],
  },
];

export default function AffixContainerExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  return (
    <ComponentContentLayout
      zh='图钉容器'
      en='AffixContainer'
      desc='AffixContainer 组件提供灵活的图钉定位功能，支持预设位置和自定义位置，以及多种显示模式。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 图钉位置 */}
          <ComponentSectionLayout
            title='图钉位置'
            id='affixContainer-position'
            description='通过 items 数组传入多个图钉，每个图钉通过 placement 指定位置。'
          >
            <CodeOperationContainer>
              <AffixContainer
                className='w-full h-[200px] bg-bg-secondary rounded-lg'
                items={[
                  { placement: 'topStart', content: <Tag theme='white'>topStart</Tag> },
                  { placement: 'topEnd', content: <Tag theme='white'>topEnd</Tag> },
                  { placement: 'bottomStart', content: <Tag theme='white'>bottomStart</Tag> },
                  { placement: 'bottomEnd', content: <Tag theme='white'>bottomEnd</Tag> },
                  { placement: 'startCenter', content: <Tag theme='white'>startCenter</Tag> },
                  { placement: 'endCenter', content: <Tag theme='white'>endCenter</Tag> },
                  { placement: 'topCenter', content: <Tag theme='white'>topCenter</Tag> },
                  { placement: 'bottomCenter', content: <Tag theme='white'>bottomCenter</Tag> },
                  { placement: 'center', content: <Tag theme='white'>center</Tag> },
                ]}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义图钉位置 */}
          <ComponentSectionLayout
            title='自定义图钉位置'
            id='affixContainer-custom-position'
            description="通过 placement='custom' 并配合 left/top 自定义图钉的精确位置。"
          >
            <CodeOperationContainer>
              <AffixContainer
                className='w-full h-[200px] bg-bg-secondary rounded-lg'
                items={{
                  placement: 'custom',
                  content: <Tag theme='white'>自定义</Tag>,
                  left: '20%',
                  top: '60%',
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 图钉显示方式 */}
          <ComponentSectionLayout
            title='图钉显示方式'
            id='affixContainer-display-mode'
            description='通过 display 属性控制显示模式：always（始终显示）、hoverShow（悬停显示）、hoverHide（悬停隐藏）。'
          >
            <CodeOperationContainer className='text-xs'>
              <Flex gap={24} justify='center'>
                <Flex column gap={12} align='center'>
                  <AffixContainer
                    className='w-full h-[200px] bg-bg-secondary rounded-lg'
                    items={{ content: <Tag theme='white'>图钉</Tag> }}
                  />
                  始终显示
                </Flex>
                <Flex column gap={12} align='center'>
                  <AffixContainer
                    className='w-full h-[200px] bg-bg-secondary rounded-lg'
                    items={{ content: <Tag theme='white'>图钉</Tag>, display: 'hoverHide' }}
                  />
                  悬停隐藏
                </Flex>
                <Flex column gap={12} align='center'>
                  <AffixContainer
                    className='w-full h-[200px] bg-bg-secondary rounded-lg'
                    items={{ content: <Tag theme='white'>图钉</Tag>, display: 'hoverShow' }}
                  />
                  悬停显示
                </Flex>
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 图钉偏移 */}
          <ComponentSectionLayout
            title='图钉偏移'
            id='affixContainer-offset'
            description='通过 offset 设置图钉到容器边缘的偏移距离。'
          >
            <CodeOperationContainer>
              <AffixContainer
                className='w-full h-[200px] bg-bg-secondary rounded-lg'
                items={[
                  { placement: 'topStart', content: <Tag theme='white'>图钉</Tag> },
                  { placement: 'topEnd', content: <Tag theme='white'>图钉</Tag>, offset: 20 },
                ]}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={containerProps} />
          {itemTypes.map(i => (
            <div key={i.name} className='flex flex-col gap-12' id={`${i.name}-API`}>
              <h3 className='text-sm font-bold'>{i.name}</h3>
              <ComponentPropsTable props={i.data} />
            </div>
          ))}
        </div>
      )}
    </ComponentContentLayout>
  );
}
