import React, { useState } from 'react'
import AffixContainer from ".";
import Tag from '../Tag';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import Flex from '../Flex';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import Link from '../Link';

const props = [
  {
    name: "ltOption",
    type: (
      <>
        <Link anchor="AffixContainerItemType-API">
          AffixContainerItemType
        </Link>
      </>
    ),
    desc: "左上角图钉",
  },
  {
    name: "rtOption",
    type: (
      <>
        <Link anchor="AffixContainerItemType-API">
          AffixContainerItemType
        </Link>
      </>
    ),
    desc: "右上角图钉",
  },
  {
    name: "lbOption",
    type: (
      <>
        <Link anchor="AffixContainerItemType-API">
          AffixContainerItemType
        </Link>
      </>
    ),
    desc: "左下角图钉",
  },
  {
    name: "rbOption",
    type: (
      <>
        <Link anchor="AffixContainerItemType-API">
          AffixContainerItemType
        </Link>
      </>
    ),
    desc: "右下角图钉",
  },
  {
    name: "centerOption",
    type: (
      <>
        <Link anchor="AffixContainerItemType-API">
          AffixContainerItemType
        </Link>
      </>
    ),
    desc: "中心图钉",
  },
  {
    name: "lcOption",
    type: (
      <>
        <Link anchor="AffixContainerItemType-API">
          AffixContainerItemType
        </Link>
      </>
    ),
    desc: "左侧中心图钉",
  },
  {
    name: "rcOption",
    type: (
      <>
        <Link anchor="AffixContainerItemType-API">
          AffixContainerItemType
        </Link>
      </>
    ),
    desc: "右侧中心图钉",
  },
  {
    name: "tcOption",
    type: (
      <>
        <Link anchor="AffixContainerItemType-API">
          AffixContainerItemType
        </Link>
      </>
    ),
    desc: "顶部中心图钉",
  },
  {
    name: "bcOption",
    type: (
      <>
        <Link anchor="AffixContainerItemType-API">
          AffixContainerItemType
        </Link>
      </>
    ),
    desc: "底部中心图钉",
  },
  {
    name: "customOption",
    type: (
      <>
        <Link anchor="AffixContainerItemType-API">
          AffixContainerItemType
        </Link>
      </>
    ),
    desc: "自定义位置的图钉",
  },
  {
    name: "disabled",
    type: "boolean",
    desc: "是否禁用图钉",
    default: "false",
  },
  { name: "Style", type: "CSSProperties", desc: "图钉定位容器对应的style" },
  {
    name: "className",
    type: "string",
    desc: "图钉定位容器对应的className",
    default: "",
  },
  { name: "children", type: "element", desc: "图钉容器内容" },
  { name: "onClick", type: "(e:any) => void", desc: "图钉容器的点击事件" },
]

const types = [
  {
    name: "AffixContainerItemType",
    data: [
      { name: "content", type: "element", desc: "图钉元素内容" },
      {
        name: "gap",
        type: "number",
        desc: "快捷定位时图钉与四周的距离",
        default: "8px",
      },
      {
        name: "hover",
        type: "boolean",
        desc: "鼠标悬浮时隐藏图钉",
        default: "false",
      },
      {
        name: "hoverShow",
        type: "boolean",
        desc: "鼠标悬浮时显示图钉",
        default: "false",
      },
      {
        name: "zIndex",
        type: "number",
        desc: "设置图标的层级，默认为1",
        default: "2",
      },
      { name: "Style", type: "CSSProperties", desc: "自定义图钉的style" },
      {
        name: "className",
        type: "string",
        desc: "自定义图钉的className",
        default: "",
      },
      { name: "onClick", type: "(e:any) => void", desc: "图钉点击事件" },
    ],
  },
]
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
            description='支持左上角 、右上角、左下角、右下角、左边中间、右边中间、顶部中间、底部中间、中间 9 个位置。'
          >
            <CodeOperationContainer>
              <AffixContainer
                className='w-full h-[200px] bg-bg-secondary rounded-lg'
                ltOption={{
                  content: <Tag theme='white'>lt</Tag>
                }}
                rtOption={{
                  content: <Tag theme='white'>rt</Tag>
                }}
                lbOption={{
                  content: <Tag theme='white'>lb</Tag>
                }}
                rbOption={{
                  content: <Tag theme='white'>rb</Tag>
                }}
                lcOption={{
                  content: <Tag theme='white'>lc</Tag>
                }}
                rcOption={{
                  content: <Tag theme='white'>rc</Tag>
                }}
                tcOption={{
                  content: <Tag theme='white'>tc</Tag>
                }}
                bcOption={{
                  content: <Tag theme='white'>bc</Tag>
                }}
                centerOption={{
                  content: <Tag theme='white'>center</Tag>
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义图钉位置 */}
          <ComponentSectionLayout
            title='自定义图钉位置'
            id='affixContainer-custom-position'
            description='通过 customOption 可以自定义图钉的精确位置。'
          >
            <CodeOperationContainer>
              <AffixContainer
                className='w-full h-[200px] bg-bg-secondary rounded-lg'
                customOption={{
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
            id='affixContainer-show-mode'
            description='支持一直显示、鼠标悬浮时隐藏、鼠标悬浮时显示三种显示模式。'
          >
            <CodeOperationContainer className='text-xs'>
              <Flex gap={24} justify='center'>
                <Flex column gap={12} align='center'>
                  <AffixContainer
                    className='w-full h-[200px] bg-bg-secondary rounded-lg'
                    centerOption={{
                      content: <Tag theme='white'>图钉</Tag>,
                    }}
                  />
                  一直显示
                </Flex>
                <Flex column gap={12} align='center'>
                  <AffixContainer
                    className='w-full h-[200px] bg-bg-secondary rounded-lg'
                    centerOption={{
                      content: <Tag theme='white'>图钉</Tag>,
                      hoverHide: true,
                    }}
                  />
                  鼠标悬浮时隐藏
                </Flex>
                <Flex column gap={12} align='center'>
                  <AffixContainer
                    className='w-full h-[200px] bg-bg-secondary rounded-lg'
                    centerOption={{
                      content: <Tag theme='white'>图钉</Tag>,
                      hoverShow: true,
                    }}
                  />
                  鼠标悬浮时显示
                </Flex>
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 图钉间距 */}
          <ComponentSectionLayout
            title='图钉间距'
            id='affixContainer-gap'
            description='通过 gap 字段快速设置图钉到容器的距离。'
          >
            <CodeOperationContainer>
              <AffixContainer
                className='w-full h-[200px] bg-bg-secondary rounded-lg'
                ltOption={{
                  content: <Tag theme='white'>图钉</Tag>,
                }}
                rtOption={{
                  content: <Tag theme='white'>图钉</Tag>,
                  gap: 20,
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={props} />
          {types?.map(i => <div key={i.name} className='flex flex-col gap-12' id={`${i.name}-API`}>
            <h3 className='text-sm font-bold'>{i.name}</h3>
            <ComponentPropsTable props={i.data} />
          </div>)}
        </div>
      )}

    </ComponentContentLayout>
  )
}
