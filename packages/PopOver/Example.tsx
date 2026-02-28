import { useState } from 'react';
import PopOver from '.';
import Button from '../Button';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function PopOverExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [controlledVisible, setControlledVisible] = useState(false);

  const popOverProps = [
    { name: 'content', type: 'ReactNode', desc: '气泡内容，可以是字符串或 React 节点' },
    { name: 'children', type: 'ReactNode', desc: '触发气泡的元素' },
    { name: 'show', type: 'boolean', desc: '受控模式：显示状态' },
    { name: 'trigger', type: "'hover' | 'click'", desc: '触发方式', default: "'hover'" },
    { name: 'onVisibleChange', type: '(visible: boolean) => void', desc: '显示状态变化回调' },
    { name: 'theme', type: "'light' | 'dark'", desc: '颜色主题', default: "'light'" },
    { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", desc: '气泡位置', default: "'top'" },
    { name: 'hideArrow', type: 'boolean', desc: '是否隐藏箭头', default: 'false' },
    { name: 'attach', type: "'parent' | 'body'", desc: '气泡挂载层级', default: "'parent'" },
    { name: 'className', type: 'string', desc: '根容器自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '根容器自定义样式' },
    { name: 'popoverClassName', type: 'string', desc: '气泡自定义类名' },
    { name: 'popoverStyle', type: 'CSSProperties', desc: '气泡自定义样式' },
  ];

  return (
    <ComponentContentLayout
      zh="气泡提示"
      en="PopOver"
      desc="气泡提示组件，提供丰富的提示功能和灵活的定位方式。支持多种主题、触发方式和自定义样式。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-24">
          {/* 触发方式 */}
          <ComponentSectionLayout
            title="触发方式"
            id="popover-trigger"
            description="支持悬停和点击两种触发方式。"
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <PopOver content="悬停显示气泡" trigger="hover">
                  <Button text="悬停触发" />
                </PopOver>
                <PopOver content="点击显示气泡" trigger="click">
                  <Button text="点击触发" />
                </PopOver>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 出现位置 */}
          <ComponentSectionLayout
            title="出现位置"
            id="popover-placement"
            description="支持四个方向的定位。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div className="flex justify-center">
                  <PopOver content="上方气泡" placement="top">
                    <Button text="上方显示" />
                  </PopOver>
                </div>
                <div className="flex gap-16 justify-center">
                  <PopOver content="左侧气泡" placement="left">
                    <Button text="左侧显示" />
                  </PopOver>
                  <PopOver content="右侧气泡" placement="right">
                    <Button text="右侧显示" />
                  </PopOver>
                </div>
                <div className="flex justify-center">
                  <PopOver content="下方气泡" placement="bottom">
                    <Button text="下方显示" />
                  </PopOver>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 挂载层级 */}
          <ComponentSectionLayout
            title="挂载层级"
            id="popover-attach"
            description='通过 attach="body" 可以将气泡挂载到 body 元素，适用于需要突破父容器 overflow 限制的场景。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div className="flex justify-center">
                  <PopOver content="上方气泡" placement="top" attach="body">
                    <Button text="上方显示" />
                  </PopOver>
                </div>
                <div className="flex gap-16 justify-center">
                  <PopOver content="左侧气泡" placement="left" attach="body">
                    <Button text="左侧显示" />
                  </PopOver>
                  <PopOver content="右侧气泡" placement="right" attach="body">
                    <Button text="右侧显示" />
                  </PopOver>
                </div>
                <div className="flex justify-center">
                  <PopOver content="下方气泡" placement="bottom" attach="body">
                    <Button text="下方显示" />
                  </PopOver>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 气泡主题 */}
          <ComponentSectionLayout
            title="气泡主题"
            id="popover-theme"
            description="支持白色和黑色两种主题风格。"
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <PopOver content="我是白色气泡～" theme="light">
                  <Button text="白色气泡" />
                </PopOver>
                <PopOver content="我是黑色气泡～" theme="dark">
                  <Button text="黑色气泡" />
                </PopOver>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 受控模式 */}
          <ComponentSectionLayout
            title="受控模式"
            id="popover-controlled"
            description="通过 show 属性和 onVisibleChange 回调实现受控模式。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16 items-center">
                <PopOver
                  content="受控气泡"
                  show={controlledVisible}
                  onVisibleChange={setControlledVisible}
                >
                  <Button text="受控气泡" />
                </PopOver>
                <Button
                  variant="transparent"
                  text={controlledVisible ? '点击隐藏气泡' : '点击显示气泡'}
                  onClick={() => setControlledVisible(!controlledVisible)}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 隐藏箭头 */}
          <ComponentSectionLayout
            title="隐藏箭头"
            id="popover-no-arrow"
            description="通过 hideArrow 属性可以隐藏气泡的箭头。"
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <PopOver content="有箭头的气泡">
                  <Button text="有箭头" />
                </PopOver>
                <PopOver content="无箭头的气泡" hideArrow>
                  <Button text="无箭头" />
                </PopOver>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={popOverProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
