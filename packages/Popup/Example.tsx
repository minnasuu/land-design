import React, { useState } from 'react';
import Popup from '.';
import Button from '../Button';
import Icon from '../Icon';
import Input from '../Input';
import Divider from '../Divider';
import Flex from '../Flex';
import Tag from '../Tag';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

/** 承载复杂内容时，气泡内边距收敛一些，避免内容区过空 */
const CONTENT_POPUP_STYLE = {
  '--land-popup-padding': '12px',
} as React.CSSProperties;

const MORE_ACTIONS = ['分享到空间', '复制链接', '导出为图片', '移动到...', '删除'];

export default function PopupExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [controlledVisible, setControlledVisible] = useState(false);
  const [renameVisible, setRenameVisible] = useState(false);
  const [fileName, setFileName] = useState('land-design-v2.0.fig');
  const [lastAction, setLastAction] = useState('');

  const popupProps = [
    { name: 'content', type: 'ReactNode', desc: '气泡内容，可以是字符串，也可以是卡片、表单等复杂节点' },
    { name: 'children', type: 'ReactNode', desc: '触发气泡的元素' },
    { name: 'show', type: 'boolean', desc: '受控模式：显示状态' },
    { name: 'trigger', type: "'hover' | 'click'", desc: '触发方式', default: "'hover'" },
    { name: 'onVisibleChange', type: '(visible: boolean) => void', desc: '显示状态变化回调' },
    { name: 'theme', type: "'light' | 'dark'", desc: '颜色主题', default: "'light'" },
    { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", desc: '气泡位置', default: "'top'" },
    { name: 'hideArrow', type: 'boolean', desc: '是否隐藏箭头', default: 'false' },
    { name: 'radius', type: 'number', desc: '气泡主体圆角半径（px），控制 clip-path 切割圆角', default: '12' },
    { name: 'arrowRadius', type: "'none' | 'small' | 'medium' | 'large'", desc: '箭头圆角档位（0 / 4px / 6px / 8px）', default: "'medium'" },
    { name: 'arrowSize', type: "'small' | 'medium'", desc: '箭头尺寸档位，紧凑提示可用 small（凸出 6px / 底宽 11px）', default: "'medium'" },
    { name: 'attach', type: "'parent' | 'body'", desc: '气泡挂载层级', default: "'parent'" },
    { name: 'className', type: 'string', desc: '根容器自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '根容器自定义样式' },
    { name: 'popupClassName', type: 'string', desc: '气泡自定义类名' },
    { name: 'popupStyle', type: 'CSSProperties', desc: '气泡自定义样式' },
  ];

  return (
    <ComponentContentLayout
      zh="气泡卡片"
      en="Popup"
      desc="气泡卡片组件，用于在元素附近承载卡片、表单、菜单等复杂内容。若只需一句文字说明，请使用更轻量的 Tooltip。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-6">
          {/* 富文本内容 */}
          <ComponentSectionLayout
            title="富文本内容"
            id="popup-rich"
            description="气泡内可以承载标题、描述、标签等结构化内容，适合展示对象详情。"
          >
            <CodeOperationContainer>
              <div className="flex gap-4">
                <Popup
                  trigger="click"
                  placement="bottom"
                  popupStyle={CONTENT_POPUP_STYLE}
                  content={
                    <div className="flex flex-col gap-2" style={{ width: '240px' }}>
                      <Flex justify="space-between" align="center">
                        <div className="text-sm font-semibold">Land Design</div>
                        <Tag size="small">设计系统</Tag>
                      </Flex>
                      <div className="text-xs text-text-secondary">
                        面向 AI 时代的设计系统，提供完整的组件、令牌与代码生成能力。
                      </div>
                      <Divider spacing={8} />
                      <Flex justify="space-between" align="center">
                        <div className="text-xs text-text-tertiary">最近更新：今天</div>
                        <Icon name="arrow" size={14} />
                      </Flex>
                    </div>
                  }
                >
                  <Button text="查看项目信息" />
                </Popup>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 可交互内容 */}
          <ComponentSectionLayout
            title="可交互内容"
            id="popup-interactive"
            description='气泡内可以放置输入框、按钮等可交互元素，通常配合 trigger="click" 使用。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-3 items-start">
                <Popup
                  trigger="click"
                  placement="bottom"
                  show={renameVisible}
                  onVisibleChange={setRenameVisible}
                  popupStyle={CONTENT_POPUP_STYLE}
                  content={
                    <div className="flex flex-col gap-3" style={{ width: '220px' }}>
                      <div className="text-xs text-text-secondary">重命名文件</div>
                      <Input
                        size="small"
                        value={fileName}
                        placeholder="请输入文件名称"
                        onChange={(val) => setFileName(val)}
                      />
                      <Flex justify="end" gap={8}>
                        <Button size="small" variant="text" text="取消" onClick={() => setRenameVisible(false)} />
                        <Button
                          size="small"
                          variant="fill"
                          status="primary"
                          text="确定"
                          onClick={() => setRenameVisible(false)}
                        />
                      </Flex>
                    </div>
                  }
                >
                  <Button text="重命名" onClick={() => setRenameVisible((v) => !v)} />
                </Popup>
                <div className="text-xs text-text-tertiary">当前文件名：{fileName || '（空）'}</div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 气泡内菜单 */}
          <ComponentSectionLayout
            title="气泡内菜单"
            id="popup-menu"
            description="气泡也可作为轻量操作菜单，点击气泡外部自动关闭。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-3 items-start">
                <Popup
                  trigger="click"
                  placement="bottom"
                  popupStyle={CONTENT_POPUP_STYLE}
                  content={
                    <div className="flex flex-col" style={{ width: '160px' }}>
                      {MORE_ACTIONS.map((action) => (
                        <div
                          key={action}
                          className="px-2 py-1.5 text-xs rounded-md cursor-pointer hover:bg-bg-secondary"
                          onClick={() => setLastAction(action)}
                        >
                          {action}
                        </div>
                      ))}
                    </div>
                  }
                >
                  <Button text="更多操作" />
                </Popup>
                <div className="text-xs text-text-tertiary">
                  最近操作：{lastAction || '（未选择）'}
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 触发方式 */}
          <ComponentSectionLayout
            title="触发方式"
            id="popup-trigger"
            description="纯展示内容可用悬停触发，含交互内容建议使用点击触发。"
          >
            <CodeOperationContainer>
              <div className="flex gap-4">
                <Popup content="悬停显示气泡" trigger="hover">
                  <Button text="悬停触发" />
                </Popup>
                <Popup content="点击显示气泡" trigger="click">
                  <Button text="点击触发" />
                </Popup>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 出现位置 */}
          <ComponentSectionLayout
            title="出现位置"
            id="popup-placement"
            description="支持四个方向的定位。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                  <Popup content="上方气泡" placement="top">
                    <Button text="上方显示" />
                  </Popup>
                </div>
                <div className="flex gap-4 justify-center">
                  <Popup content="左侧气泡" placement="left">
                    <Button text="左侧显示" />
                  </Popup>
                  <Popup content="右侧气泡" placement="right">
                    <Button text="右侧显示" />
                  </Popup>
                </div>
                <div className="flex justify-center">
                  <Popup content="下方气泡" placement="bottom">
                    <Button text="下方显示" />
                  </Popup>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 挂载层级 */}
          <ComponentSectionLayout
            title="挂载层级"
            id="popup-attach"
            description='通过 attach="body" 可以将气泡挂载到 body 元素，适用于需要突破父容器 overflow 限制的场景。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                  <Popup content="上方气泡" placement="top" attach="body">
                    <Button text="上方显示" />
                  </Popup>
                </div>
                <div className="flex gap-4 justify-center">
                  <Popup content="左侧气泡" placement="left" attach="body">
                    <Button text="左侧显示" />
                  </Popup>
                  <Popup content="右侧气泡" placement="right" attach="body">
                    <Button text="右侧显示" />
                  </Popup>
                </div>
                <div className="flex justify-center">
                  <Popup content="下方气泡" placement="bottom" attach="body">
                    <Button text="下方显示" />
                  </Popup>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 气泡主题 */}
          <ComponentSectionLayout
            title="气泡主题"
            id="popup-theme"
            description="支持白色和黑色两种主题风格。"
          >
            <CodeOperationContainer>
              <div className="flex gap-4">
                <Popup content="我是白色气泡～" theme="light">
                  <Button text="白色气泡" />
                </Popup>
                <Popup content="我是黑色气泡～" theme="dark">
                  <Button text="黑色气泡" />
                </Popup>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 受控模式 */}
          <ComponentSectionLayout
            title="受控模式"
            id="popup-controlled"
            description="通过 show 属性和 onVisibleChange 回调实现受控模式。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-4 items-center">
                <Popup
                  content="受控气泡"
                  show={controlledVisible}
                  onVisibleChange={setControlledVisible}
                >
                  <Button text="受控气泡" />
                </Popup>
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
            id="popup-no-arrow"
            description="通过 hideArrow 属性可以隐藏气泡的箭头，适合卡片式内容。"
          >
            <CodeOperationContainer>
              <div className="flex gap-4">
                <Popup content="有箭头的气泡">
                  <Button text="有箭头" />
                </Popup>
                <Popup content="无箭头的气泡" hideArrow>
                  <Button text="无箭头" />
                </Popup>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 主体圆角 */}
          <ComponentSectionLayout
            title="主体圆角"
            id="popup-radius"
            description="通过 radius 控制 clip-path 切割时气泡四角的圆角，实现气泡整体一体成型。"
          >
            <CodeOperationContainer>
              <div className="flex gap-4">
                <Popup content="默认圆角" placement="top">
                  <Button text="默认圆角" />
                </Popup>
                <Popup content="大圆角气泡" placement="top" radius={20}>
                  <Button text="大圆角" />
                </Popup>
                <Popup content="直角气泡" placement="bottom" radius={0}>
                  <Button text="直角" />
                </Popup>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 箭头圆角 */}
          <ComponentSectionLayout
            title="箭头圆角"
            id="popup-arrow-radius"
            description="arrowRadius 采用分级控制，箭头尺寸固定：none 尖角、small 4px、medium 6px（默认）、large 8px。只接受档位值，不支持自定义数值，因此不会出现传值不生效的情况。"
          >
            <CodeOperationContainer>
              <div className="flex gap-4">
                <Popup content="尖角箭头" placement="top" arrowRadius="none">
                  <Button text="尖角" />
                </Popup>
                <Popup content="小圆角箭头" placement="top" arrowRadius="small">
                  <Button text="小圆角" />
                </Popup>
                <Popup content="默认圆角箭头" placement="top" arrowRadius="medium">
                  <Button text="默认" />
                </Popup>
                <Popup content="大圆角箭头" placement="top" arrowRadius="large">
                  <Button text="大圆角" />
                </Popup>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-3">
          <ComponentPropsTable props={popupProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
