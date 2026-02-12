export const reactTsxCodeStr = `// 双层架构：列表层(真实排列) + ghost 层(拖拽镜像跟随鼠标)
// 被拖拽项 opacity:0 占位，其余项通过 translateY 动态位移

// mouseDown → 记录 dragIndex，ghost 定位到原始元素位置
ghost.style.transform = \`translateY(\${originTop}px)\`;

// mouseMove → ghost 跟随鼠标，计算目标索引，其余项位移
const ghostCenterY = clampedY + ghostHeight / 2;
const targetIndex = Math.round(ghostCenterY / step); // step = itemHeight + gap
// dragIndex < targetIndex: 中间项向上移 -step
// dragIndex > targetIndex: 中间项向下移 +step
el.style.transform = shift ? \`translateY(\${shift}px)\` : '';

// mouseUp → onSortEnd({ fromIndex, toIndex })，清理所有 transform

// 边缘自动滚动
if (distToTop < scrollThreshold) container.scrollTop -= scrollSpeed;

// renderItem 接收 dragHandleProps，透传给任意拖拽手柄元素
<SortableContainer
  items={items}
  renderItem={(item, state, dragHandleProps) => (
    <div>
      <span {...dragHandleProps}>⠿</span>  {/* 拖拽手柄 */}
      <span>{item.name}</span>
    </div>
  )}
  onSortEnd={({ fromIndex, toIndex }) => {
    setItems(arrayMove(items, fromIndex, toIndex));
  }}
/>`;
