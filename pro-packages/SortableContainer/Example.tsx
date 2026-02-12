import { useState, useCallback } from 'react';
import SortableContainer from '.';
import type { SortableItemData, SortableItemState, DragHandleProps } from './props';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationBar from '../../example/components/CodeOperationBar';
import { reactTsxCodeStr } from './codes';

interface TaskItem extends SortableItemData {
  title: string;
  status: 'todo' | 'doing' | 'done';
}

const initialBasicItems: SortableItemData[] = [
  { id: '1', label: '项目 A' },
  { id: '2', label: '项目 B' },
  { id: '3', label: '项目 C' },
  { id: '4', label: '项目 D' },
  { id: '5', label: '项目 E' },
];

const initialTaskItems: TaskItem[] = [
  { id: 't1', title: '需求评审', status: 'done' },
  { id: 't2', title: 'UI 设计稿输出', status: 'done' },
  { id: 't3', title: '前端开发', status: 'doing' },
  { id: 't4', title: '后端接口联调', status: 'todo' },
  { id: 't5', title: '提测验收', status: 'todo' },
  { id: 't6', title: '灰度发布', status: 'todo' },
];

const initialHorizontalItems: SortableItemData[] = [
  { id: 'h1', label: '标签 A' },
  { id: 'h2', label: '标签 B' },
  { id: 'h3', label: '标签 C' },
  { id: 'h4', label: '标签 D' },
  { id: 'h5', label: '标签 E' },
];

const statusMap: Record<string, { label: string; color: string; bg: string }> = {
  todo: { label: '待办', color: 'var(--color-text-tertiary)', bg: 'var(--color-bg-tertiary)' },
  doing: { label: '进行中', color: 'var(--color-primary)', bg: 'var(--color-primary-light)' },
  done: { label: '已完成', color: 'var(--color-success)', bg: 'var(--color-success-light)' },
};

/** 数组元素移动工具函数 */
function arrayMove<T>(arr: T[], from: number, to: number): T[] {
  const next = [...arr];
  const [removed] = next.splice(from, 1);
  next.splice(to, 0, removed);
  return next;
}

export default function SortableContainerExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  // ─── 基础用法 ───
  const [basicItems, setBasicItems] = useState(initialBasicItems);

  const handleBasicSortEnd = useCallback(
    ({ fromIndex, toIndex }: { fromIndex: number; toIndex: number }) => {
      setBasicItems((prev) => arrayMove(prev, fromIndex, toIndex));
    },
    [],
  );

  const renderBasicItem = useCallback(
    (item: SortableItemData, state: SortableItemState, dragHandleProps: DragHandleProps) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          height: 40,
          padding: '0 12px',
          borderRadius: 'var(--radius-xs)',
          backgroundColor: state.isDragging ? 'var(--color-bg-tertiary)' : 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border-secondary)',
          opacity: state.isDragging ? 0.4 : 1,
        }}
      >
        <span {...dragHandleProps} style={{ ...dragHandleProps.style, fontSize: 16, color: 'var(--color-text-tertiary)' }}>
          ⠿
        </span>
        <span style={{ fontSize: 'var(--font-content-m)' }}>{String(item.label ?? '')}</span>
      </div>
    ),
    [],
  );

  // ─── 自定义渲染 ───
  const [taskItems, setTaskItems] = useState(initialTaskItems);

  const handleTaskSortEnd = useCallback(
    ({ fromIndex, toIndex }: { fromIndex: number; toIndex: number }) => {
      setTaskItems((prev) => arrayMove(prev, fromIndex, toIndex));
    },
    [],
  );

  // ─── 横向排序 ───
  const [horizontalItems, setHorizontalItems] = useState(initialHorizontalItems);

  const handleHorizontalSortEnd = useCallback(
    ({ fromIndex, toIndex }: { fromIndex: number; toIndex: number }) => {
      setHorizontalItems((prev) => arrayMove(prev, fromIndex, toIndex));
    },
    [],
  );

  const renderHorizontalItem = useCallback(
    (item: SortableItemData, state: SortableItemState, dragHandleProps: DragHandleProps) => (
      <div
        {...dragHandleProps}
        style={{
          ...dragHandleProps.style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 80,
          height: 40,
          borderRadius: 'var(--radius-xs)',
          backgroundColor: state.isDragging ? 'var(--color-bg-tertiary)' : 'var(--color-primary-light)',
          border: '1px solid var(--color-primary)',
          color: 'var(--color-primary)',
          fontSize: 'var(--font-content-m)',
          fontWeight: 500,
          opacity: state.isDragging ? 0.4 : 1,
        }}
      >
        {String(item.label ?? '')}
      </div>
    ),
    [],
  );

  const renderTaskItem = useCallback(
    (item: TaskItem, state: SortableItemState, dragHandleProps: DragHandleProps) => {
      const status = statusMap[item.status] ?? statusMap.todo;
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 48,
            padding: '0 16px',
            borderRadius: 'var(--radius-s)',
            backgroundColor: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border-secondary)',
            transition: 'box-shadow var(--transition-fast) ease',
            boxShadow: state.isDragging ? 'none' : undefined,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span {...dragHandleProps} style={{ ...dragHandleProps.style, fontSize: 18, color: 'var(--color-text-tertiary)' }}>
              ⠿
            </span>
            <span style={{ fontWeight: 500 }}>
              {state.index + 1}. {item.title}
            </span>
          </div>
          <span
            style={{
              fontSize: 12,
              padding: '2px 8px',
              borderRadius: 'var(--radius-xs)',
              color: status.color,
              backgroundColor: status.bg,
            }}
          >
            {status.label}
          </span>
        </div>
      );
    },
    [],
  );

  // ─── Props 表 ───
  const propsData = [
    { name: 'items', type: 'T[]', desc: '数据源数组，每项需含 id: string' },
    { name: 'renderItem', type: '(item, state, dragHandleProps) => ReactNode', desc: '自定义每项的渲染函数' },
    { name: 'onSortEnd', type: '({ fromIndex, toIndex }) => void', desc: '排序结束回调' },
    { name: 'direction', type: "'vertical' | 'horizontal'", desc: "排列方向，默认 'vertical'" },
    { name: 'itemHeight', type: 'number', desc: '每项高度(px)，vertical 方向用，默认 40' },
    { name: 'itemWidth', type: 'number', desc: '每项宽度(px)，horizontal 方向用，默认 120' },
    { name: 'gap', type: 'number', desc: '项间距(px)，默认 8' },
    { name: 'scrollSpeed', type: 'number', desc: '边缘自动滚动速度，默认 10' },
    { name: 'scrollThreshold', type: 'number', desc: '触发自动滚动的边缘阈值(px)，默认 32' },
    { name: 'ghostAutoZIndex', type: 'boolean', desc: '向上拖 ghost 在前面经过，向下拖从后面经过，默认 false' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用拖拽，默认 false' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  ];

  return (
    <ComponentContentLayout
      zh="可排序容器"
      en="Sortable Container"
      desc="支持鼠标拖拽排序的容器组件，通过 renderItem 完全自定义每项渲染，dragHandleProps 指定拖拽手柄。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <CodeOperationBar label="关键代码" reactTsxCodeStr={reactTsxCodeStr} />

      {activeTab === 'examples' && (
        <div className="flex flex-col gap-24">
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="basic-usage"
            description="最简单的拖拽排序，通过 renderItem 渲染每项，dragHandleProps 透传给拖拽手柄。"
          >
            <CodeOperationContainer>
              <div style={{ maxWidth: 400 }}>
                <SortableContainer
                  items={basicItems}
                  renderItem={renderBasicItem}
                  onSortEnd={handleBasicSortEnd}
                  itemHeight={40}
                  gap={8}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义渲染 */}
          <ComponentSectionLayout
            title="自定义渲染"
            id="custom-render"
            description="通过泛型 T 扩展数据结构，renderItem 自定义复杂布局（状态标签、序号等）。"
          >
            <CodeOperationContainer>
              <div style={{ maxWidth: 500 }}>
                <SortableContainer<TaskItem>
                  items={taskItems}
                  renderItem={renderTaskItem}
                  onSortEnd={handleTaskSortEnd}
                  itemHeight={48}
                  gap={8}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 横向排序 */}
          <ComponentSectionLayout
            title="横向排序"
            id="horizontal"
            description="设置 direction=&quot;horizontal&quot; 实现横向拖拽排序，配合 itemWidth 指定每项宽度。"
          >
            <CodeOperationContainer>
              <SortableContainer
                items={horizontalItems}
                renderItem={renderHorizontalItem}
                onSortEnd={handleHorizontalSortEnd}
                direction="horizontal"
                itemWidth={80}
                itemHeight={40}
                gap={8}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 方向感知层级 */}
          <ComponentSectionLayout
            title="方向感知层级"
            id="ghost-auto-zindex"
            description="开启 ghostAutoZIndex 后，向上拖时 ghost 覆盖在其他项上方，向下拖时 ghost 从其他项后面经过。"
          >
            <CodeOperationContainer>
              <div style={{ maxWidth: 400 }}>
                <SortableContainer
                  items={basicItems}
                  renderItem={renderBasicItem}
                  onSortEnd={handleBasicSortEnd}
                  ghostAutoZIndex
                  itemHeight={40}
                  gap={8}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用 */}
          <ComponentSectionLayout
            title="禁用状态"
            id="disabled"
            description="disabled 时禁用拖拽交互。"
          >
            <CodeOperationContainer>
              <div style={{ maxWidth: 400, opacity: 0.6 }}>
                <SortableContainer
                  items={basicItems.slice(0, 3)}
                  renderItem={renderBasicItem}
                  disabled
                  itemHeight={40}
                  gap={8}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={propsData} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
