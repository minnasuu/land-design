import React, { useState } from 'react';
import Timeline from '.';
import Icon from '../Icon';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import Link from '../Link';
import Loading from '../Loading';

export default function TimelineExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const timelineProps = [
    { name: 'items', type: <Link anchor="TimelineItem-API">TimelineItem[]</Link>, desc: '时间线数据源' },
    { name: 'children', type: 'ReactNode', desc: '子元素（支持 Timeline.Item）' },
    { name: 'icon', type: 'ReactNode', desc: '全局默认图标' },
    { name: 'direction', type: "'vertical' | 'horizontal'", desc: '时间线方向', default: "'vertical'" },
    { name: 'mode', type: "'left' | 'right' | 'alternate'", desc: '内容位置模式', default: "'right'" },
    { name: 'gap', type: 'number | string', desc: '节点间距' },
    { name: 'lineType', type: "'solid' | 'dashed' | 'dotted'", desc: '连接线类型', default: "'solid'" },
    { name: 'lineColor', type: 'string', desc: '连接线颜色' },
    { name: 'lineWidth', type: 'number', desc: '连接线宽度' },
    { name: 'dotSize', type: 'number', desc: '节点大小' },
    { name: 'dotColor', type: 'string', desc: '默认节点颜色' },
    { name: 'showLine', type: 'boolean', desc: '是否显示连接线', default: 'true' },
    { name: 'pending', type: 'boolean | ReactNode', desc: '是否显示待完成项' },
    { name: 'pendingIcon', type: 'ReactNode', desc: 'pending 项的图标' },
    { name: 'reverse', type: 'boolean', desc: '是否倒序显示', default: 'false' },
    { name: 'onItemClick', type: '(item, index, e) => void', desc: '点击项回调' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'className', type: 'string', desc: '自定义类名' },
  ];

  const timelineItemProps = [
    { name: 'title', type: 'ReactNode', desc: '标题' },
    { name: 'subTitle', type: 'ReactNode', desc: '副标题（通常用于显示时间）' },
    { name: 'desc', type: 'ReactNode', desc: '描述内容' },
    { name: 'extra', type: 'ReactNode', desc: '额外内容' },
    { name: 'icon', type: 'ReactNode', desc: '自定义节点图标' },
    { name: 'color', type: "'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | string", desc: '节点颜色', default: "'default'" },
    { name: 'active', type: 'boolean', desc: '是否为当前激活项' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用' },
    { name: 'dotStyle', type: 'CSSProperties', desc: '自定义节点样式' },
    { name: 'contentStyle', type: 'CSSProperties', desc: '自定义内容样式' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'onClick', type: '(e: MouseEvent) => void', desc: '点击回调' },
  ];

  // 基础数据
  const basicItems = [
    { title: '创建项目', subTitle: '2024-01-01' },
    { title: '需求分析', subTitle: '2024-01-15', desc: '完成需求文档编写' },
    { title: '开发阶段', subTitle: '2024-02-01' },
    { title: '项目上线', subTitle: '2024-03-01' },
  ];

  // 带颜色的数据
  const colorItems = [
    { title: '已完成', subTitle: '2024-01-01', color: 'success' as const },
    { title: '已完成', subTitle: '2024-01-15', color: 'success' as const },
    { title: '进行中', subTitle: '2024-02-01', color: 'primary' as const, active: true },
    { title: '待开始', subTitle: '2024-03-01', color: 'default' as const },
  ];

  // 带图标的数据
  const iconItems = [
    {
      title: '项目启动',
      subTitle: '2024-01-01',
      desc: '团队组建完成，开始需求分析',
      icon: <Icon name="document" size={18} color="var(--color-primary-6)" />,
    },
    {
      title: '设计完成',
      subTitle: '2024-01-15',
      desc: 'UI/UX 设计获得客户认可',
      icon: <Icon name="plan" size={18} color="var(--color-primary-6)" />,
    },
    {
      title: '开发阶段',
      subTitle: '2024-02-01',
      desc: '核心功能开发中',
      icon: <Icon name="instruction" size={18} color="var(--color-primary-6)" />,
    },
    {
      title: '项目上线',
      subTitle: '2024-03-01',
      desc: '客户验收通过，正式上线',
      icon: <Icon name="check-stroke" size={18} color="var(--color-primary-6)" />,
    },
  ];

  // 数字图标数据
  const numberItems = [
    { title: '第一步', subTitle: '需求调研', icon: <Icon name="number" value={1} /> },
    { title: '第二步', subTitle: '方案设计', icon: <Icon name="number" value={2} /> },
    { title: '第三步', subTitle: '开发实现', icon: <Icon name="number" value={3} /> },
    { title: '第四步', subTitle: '测试上线', icon: <Icon name="number" value={4} /> },
  ];

  return (
    <ComponentContentLayout
      zh="时间轴"
      en="Timeline"
      desc="用于展示时间序列的事件或流程步骤。支持垂直/水平布局、交替模式、自定义节点和多种预设颜色。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-24">
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="basic-usage"
            description="最简单的时间轴用法。"
          >
            <CodeOperationContainer>
              <Timeline items={basicItems} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 节点颜色 */}
          <ComponentSectionLayout
            title="节点颜色"
            id="timeline-colors"
            description="支持 default、primary、success、warning、error、info 六种预设颜色。"
          >
            <CodeOperationContainer>
              <Timeline items={colorItems} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义图标 */}
          <ComponentSectionLayout
            title="自定义图标"
            id="timeline-icons"
            description="通过 icon 属性自定义节点图标。"
          >
            <CodeOperationContainer>
              <div className="flex gap-32">
                <div>
                  <h4 className="mb-12 font-medium">图标节点</h4>
                  <Timeline items={iconItems} />
                </div>
                <div>
                  <h4 className="mb-12 font-medium">数字节点</h4>
                  <Timeline items={numberItems} />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 交替模式 */}
          <ComponentSectionLayout
            title="交替模式"
            id="timeline-alternate"
            description="设置 mode='alternate' 使内容交替显示。"
          >
            <CodeOperationContainer>
              <Timeline items={iconItems} mode="alternate" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 内容在左侧 */}
          <ComponentSectionLayout
            title="内容在左侧"
            id="timeline-left"
            description="设置 mode='left' 使内容显示在左侧。"
          >
            <CodeOperationContainer>
              <Timeline items={basicItems} mode="left" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 水平方向 */}
          <ComponentSectionLayout
            title="水平方向"
            id="timeline-horizontal"
            description="设置 direction='horizontal' 显示水平时间轴。"
          >
            <CodeOperationContainer>
              <Timeline items={basicItems} direction="horizontal" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 连接线类型 */}
          <ComponentSectionLayout
            title="连接线类型"
            id="timeline-line-type"
            description="支持 solid(实线)、dashed(虚线)、dotted(点线) 三种连接线类型。"
          >
            <CodeOperationContainer>
              <div className="flex gap-32">
                <div>
                  <h4 className="mb-12 font-medium">实线</h4>
                  <Timeline items={basicItems.slice(0, 3)} lineType="solid" />
                </div>
                <div>
                  <h4 className="mb-12 font-medium">虚线</h4>
                  <Timeline items={basicItems.slice(0, 3)} lineType="dashed" />
                </div>
                <div>
                  <h4 className="mb-12 font-medium">点线</h4>
                  <Timeline items={basicItems.slice(0, 3)} lineType="dotted" />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 待完成项 */}
          <ComponentSectionLayout
            title="待完成项"
            id="timeline-pending"
            description="设置 pending 属性显示待完成状态。"
          >
            <CodeOperationContainer>
              <Timeline
                items={[
                  { title: '创建项目', subTitle: '2024-01-01', color: 'success' },
                  { title: '需求分析', subTitle: '2024-01-15', color: 'success' },
                  { title: '开发阶段', subTitle: '2024-02-01', color: 'primary', active: true },
                ]}
                pending="等待中..."
                pendingIcon={<Loading size={16}/>}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 使用 Timeline.Item */}
          <ComponentSectionLayout
            title="使用 Timeline.Item"
            id="timeline-item"
            description="也可以使用 Timeline.Item 子组件的方式构建时间轴。"
          >
            <CodeOperationContainer>
              <Timeline>
                <Timeline.Item title="第一步" subTitle="2024-01-01" color="success" />
                <Timeline.Item title="第二步" subTitle="2024-01-15" color="success" />
                <Timeline.Item
                  title="第三步"
                  subTitle="2024-02-01"
                  desc="当前正在进行中..."
                  color="primary"
                  active
                />
                <Timeline.Item title="第四步" subTitle="2024-03-01" />
              </Timeline>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 可点击 */}
          <ComponentSectionLayout
            title="可点击"
            id="timeline-clickable"
            description="设置 onItemClick 使时间线项可点击。"
          >
            <CodeOperationContainer>
              <Timeline
                items={basicItems}
                onItemClick={(item, index) => {
                  console.log('点击项:', item.title, '索引:', index);
                  alert(`点击了: ${item.title}`);
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title="自定义样式"
            id="timeline-custom-style"
            description="通过 CSS 变量或 style 属性自定义样式。"
          >
            <CodeOperationContainer>
              <div className="flex gap-32">
                <div>
                  <h4 className="mb-12 font-medium">自定义颜色</h4>
                  <Timeline
                    items={basicItems.slice(0, 3)}
                    dotColor="#722ed1"
                    lineColor="#d3adf7"
                  />
                </div>
                <div>
                  <h4 className="mb-12 font-medium">自定义尺寸</h4>
                  <Timeline
                    items={basicItems.slice(0, 3)}
                    dotSize={14}
                    lineWidth={3}
                    gap={32}
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 倒序显示 */}
          <ComponentSectionLayout
            title="倒序显示"
            id="timeline-reverse"
            description="设置 reverse 属性倒序显示时间线。"
          >
            <CodeOperationContainer>
              <Timeline items={basicItems} reverse />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <h3 className="text-sm font-bold">Timeline Props</h3>
          <ComponentPropsTable props={timelineProps} />

          <h3 className="text-sm font-bold" id="TimelineItem-API">TimelineItem / Timeline.Item Props</h3>
          <ComponentPropsTable props={timelineItemProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
