import { useState } from 'react';
import Tooltip from '.';
import Button from '../Button';
import Icon from '../Icon';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function TooltipExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [controlledVisible, setControlledVisible] = useState(false);

  const tooltipProps = [
    { name: 'content', type: 'ReactNode', desc: '提示内容，建议为纯文本或简单节点' },
    { name: 'children', type: 'ReactNode', desc: '触发提示的元素' },
    { name: 'show', type: 'boolean', desc: '受控模式：显示状态' },
    { name: 'trigger', type: "'hover' | 'click'", desc: '触发方式', default: "'hover'" },
    { name: 'onVisibleChange', type: '(visible: boolean) => void', desc: '显示状态变化回调' },
    { name: 'theme', type: "'light' | 'dark'", desc: '颜色主题', default: "'dark'" },
    { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", desc: '提示位置', default: "'top'" },
    { name: 'hideArrow', type: 'boolean', desc: '是否隐藏箭头', default: 'false' },
    { name: 'maxWidth', type: 'number | string', desc: '提示最大宽度，超出后换行', default: '240' },
    { name: 'attach', type: "'parent' | 'body'", desc: '提示挂载层级', default: "'parent'" },
    { name: 'className', type: 'string', desc: '根容器自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '根容器自定义样式' },
    { name: 'tooltipClassName', type: 'string', desc: '气泡自定义类名' },
    { name: 'tooltipStyle', type: 'CSSProperties', desc: '气泡自定义样式' },
  ];

  return (
    <ComponentContentLayout
      zh="文字提示"
      en="Tooltip"
      desc="轻量文字提示组件，用于解释元素的含义。内容不可交互，需要承载可交互内容时请使用 Popup。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-6">
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="tooltip-basic"
            description="鼠标悬停时显示简短的文字说明。"
          >
            <CodeOperationContainer>
              <div className="flex items-center gap-4">
                <Tooltip content="这是一段提示文字">
                  <Button text="悬停显示" />
                </Tooltip>
                <Tooltip content="图标含义说明">
                  <Icon name="info-stroke" size={20} />
                </Tooltip>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 出现位置 */}
          <ComponentSectionLayout
            title="出现位置"
            id="tooltip-placement"
            description="支持四个方向的定位。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                  <Tooltip content="上方提示" placement="top">
                    <Button text="上方显示" />
                  </Tooltip>
                </div>
                <div className="flex gap-4 justify-center">
                  <Tooltip content="左侧提示" placement="left">
                    <Button text="左侧显示" />
                  </Tooltip>
                  <Tooltip content="右侧提示" placement="right">
                    <Button text="右侧显示" />
                  </Tooltip>
                </div>
                <div className="flex justify-center">
                  <Tooltip content="下方提示" placement="bottom">
                    <Button text="下方显示" />
                  </Tooltip>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 主题 */}
          <ComponentSectionLayout
            title="不同主题"
            id="tooltip-theme"
            description="默认使用深色主题，也支持浅色主题。"
          >
            <CodeOperationContainer>
              <div className="flex gap-4">
                <Tooltip content="深色提示" theme="dark">
                  <Button text="深色提示" />
                </Tooltip>
                <Tooltip content="浅色提示" theme="light">
                  <Button text="浅色提示" />
                </Tooltip>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 隐藏箭头 */}
          <ComponentSectionLayout
            title="隐藏箭头"
            id="tooltip-no-arrow"
            description="通过 hideArrow 隐藏指向元素的箭头。"
          >
            <CodeOperationContainer>
              <div className="flex gap-4">
                <Tooltip content="有箭头的提示">
                  <Button text="有箭头" />
                </Tooltip>
                <Tooltip content="无箭头的提示" hideArrow>
                  <Button text="无箭头" />
                </Tooltip>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 挂载层级 */}
          <ComponentSectionLayout
            title="挂载层级"
            id="tooltip-attach"
            description='通过 attach="body" 将提示挂载到 body，适用于父容器存在 overflow 裁剪的场景。'
          >
            <CodeOperationContainer>
              <div className="flex gap-4 justify-center">
                <Tooltip content="挂载到父容器" attach="parent">
                  <Button text="父容器" />
                </Tooltip>
                <Tooltip content="挂载到 body" attach="body">
                  <Button text="Body" />
                </Tooltip>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 受控模式 */}
          <ComponentSectionLayout
            title="受控模式"
            id="tooltip-controlled"
            description="通过 show 属性与 onVisibleChange 回调实现受控显示。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-4 items-center">
                <Tooltip
                  content="受控提示"
                  show={controlledVisible}
                  onVisibleChange={setControlledVisible}
                >
                  <Button text="受控提示" />
                </Tooltip>
                <Button
                  variant="transparent"
                  text={controlledVisible ? '点击隐藏提示' : '点击显示提示'}
                  onClick={() => setControlledVisible(!controlledVisible)}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-3">
          <ComponentPropsTable props={tooltipProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
