import React, { useState } from 'react';
import Timeline from '.';
import Icon from '../Icon';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function TimelineExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const timelineProps = [
    { name: 'data', type: 'Array<TimelineItem>', desc: '时间轴数据，每个元素包含标题、副标题、描述和图标等信息' },
    { name: 'direction', type: 'row | column', default: 'column', desc: '时间轴方向：row(横向) | column(纵向)' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义时间轴外观' },
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
  ];

  const basicData = [
    { title: '事件一', subTitle: '2024-2-1' },
    { title: '事件二', subTitle: '2024-3-1', desc: '事件二的描述内容' },
    { title: '事件三', subTitle: '2024-5-1' }
  ];

  const iconData = [
    {
      title: "事件一",
      subTitle: "2024-2-1",
      icon: <Icon name="single-number" value={1} />,
    },
    {
      title: "事件二",
      subTitle: "2024-3-1",
      desc: "事件二的描述内容",
      icon: <Icon name="single-number" value={2} />,
    },
    {
      title: "事件三",
      subTitle: "2024-5-1",
      icon: <Icon name="single-number" value={3} />,
    },
  ];

  const emojiData = [
    { title: "事件一", subTitle: "2024-2-1", icon: <p>🌄</p> },
    {
      title: "事件二",
      subTitle: "2024-3-1",
      desc: "事件二的描述内容",
      icon: <p>☀️</p>,
    },
    { title: "事件三", subTitle: "2024-5-1", icon: <p>🌆</p> },
  ];

  const complexData = [
    {
      title: '项目启动',
      subTitle: '2024-01-01',
      desc: '项目正式启动，团队组建完成，开始需求分析阶段。',
      icon: <Icon name="rocket" size={20} />
    },
    {
      title: '需求确认',
      subTitle: '2024-01-15',
      desc: '与客户确认需求细节，完成需求文档编写。',
      icon: <Icon name="file-text" size={20} />
    },
    {
      title: '设计完成',
      subTitle: '2024-02-01',
      desc: 'UI/UX设计完成，获得客户认可，进入开发阶段。',
      icon: <Icon name="design" size={20} />
    },
    {
      title: '开发完成',
      subTitle: '2024-03-15',
      desc: '核心功能开发完成，进入测试阶段。',
      icon: <Icon name="code" size={20} />
    },
    {
      title: '项目上线',
      subTitle: '2024-04-01',
      desc: '项目正式上线，客户验收通过。',
      icon: <Icon name="check-circle" size={20} />
    }
  ];

  return (
    <ComponentContentLayout
      zh='时间轴'
      en='Timeline'
      desc='LandDesign 的时间轴组件，用于展示时间序列的事件。支持纵向和横向布局，可自定义节点图标和样式。'
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
            description='Timeline 组件的基础用法，展示简单的时间轴。'
          >
            <CodeOperationContainer>
              <Timeline data={basicData} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 横向时间轴 */}
          <ComponentSectionLayout
            title='横向时间轴'
            id='timeline-horizontal'
            description='通过 direction 属性可以设置横向布局。'
          >
            <CodeOperationContainer>
              <Timeline direction="row" data={basicData} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义节点 */}
          <ComponentSectionLayout
            title='自定义节点'
            id='timeline-custom-node'
            description='可以通过 icon 属性自定义时间轴节点的图标。'
          >
            <CodeOperationContainer>
              <div className="flex gap-32">
                <div>
                  <h4 className="mb-8">数字图标</h4>
                  <Timeline data={iconData} />
                </div>
                <div>
                  <h4 className="mb-8">表情图标</h4>
                  <Timeline data={emojiData} />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 复杂内容 */}
          <ComponentSectionLayout
            title='复杂内容'
            id='timeline-complex'
            description='时间轴支持复杂的描述内容和自定义图标。'
          >
            <CodeOperationContainer>
              <Timeline data={complexData} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 横向复杂内容 */}
          <ComponentSectionLayout
            title='横向复杂内容'
            id='timeline-horizontal-complex'
            description='横向时间轴也支持复杂的内容展示。'
          >
            <CodeOperationContainer>
              <Timeline direction="row" data={complexData} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同样式 */}
          <ComponentSectionLayout
            title='不同样式'
            id='timeline-styles'
            description='可以通过 style 属性自定义时间轴的样式。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">紧凑样式</h4>
                  <Timeline
                    data={basicData}
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.4'
                    }}
                  />
                </div>
                <div>
                  <h4 className="mb-8">宽松样式</h4>
                  <Timeline
                    data={basicData}
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.8',
                      padding: '16px'
                    }}
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义颜色 */}
          <ComponentSectionLayout
            title='自定义颜色'
            id='timeline-colors'
            description='可以通过 style 属性自定义时间轴的颜色。'
          >
            <CodeOperationContainer>
              <Timeline
                data={complexData}
                style={{
                  '--timeline-line-color': '#1890ff',
                  '--timeline-node-color': '#52c41a',
                  '--timeline-text-color': '#262626'
                } as React.CSSProperties}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 响应式布局 */}
          <ComponentSectionLayout
            title='响应式布局'
            id='timeline-responsive'
            description='时间轴支持响应式布局，在不同屏幕尺寸下自动调整。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">纵向布局（适合移动端）</h4>
                  <Timeline data={complexData} />
                </div>
                <div>
                  <h4 className="mb-8">横向布局（适合桌面端）</h4>
                  <Timeline direction="row" data={complexData} />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={timelineProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
