export const reactTsxCodeStr = `import React from 'react';
import { Fragment } from 'react/jsx-runtime';
import { useEffect, useMemo, useRef, useState } from 'react';
import Divider from '../../packages/Divider';
import Image from '../../packages/Image';
import './index.scss';

export type PreviewDataType = {
  id?: string;
  mediaData: PreviewItemType[];
};

export type PreviewItemType = {
  id: string;
  url: string;
  ratio?: string;
};

export type SwiperMediaPreviewProps = {
  data?: PreviewDataType[];
  /** 当前选中的组 */
  activeGroup?: string;
  /** 当前选中的项 */
  value?: string;
  keyboardControl?: boolean;
  onChange?: (item: PreviewItemType, parentItem: PreviewDataType) => void;
};

const MsPreviewSwiperLayout: React.FC<SwiperMediaPreviewProps> = ({
  data = [],
  activeGroup,
  value,
  onChange,
  keyboardControl = false,
}) => {
  if (data.length <= 1) return null;
  const [newValue, setNewValue] = useState<string>(value ?? '');
  const [newGroup, setNewGroup] = useState<string>(activeGroup ?? '');
  useEffect(() => setNewValue(value ?? ''), [value]);
  useEffect(() => setNewGroup(activeGroup ?? ''), [activeGroup]);
  const previewSwiperScrollRef = useRef<any>();

  const itemId = useMemo(() => data?.filter(i => i.id === newGroup)[0]?.mediaData?.map(j => j.id), [data, newGroup]);
  const groupId = useMemo(() => data?.map(i => i.id), [data]);
  const index = useMemo(() => itemId?.indexOf(newValue), [itemId, newValue]);
  const groupIndex = useMemo(() => groupId?.indexOf(newGroup), [groupId, newGroup]);

  const getTotalLength = (index: number) =>
    data.slice(0, index).reduce((totalLength, subArray) => totalLength + subArray.mediaData.length, 0);
  /** 初始化滚动条 */
  useEffect(() => {
    if (value === undefined || groupIndex === -1 || index === -1) return;
    let totalLength = getTotalLength(groupIndex);
    if (itemId.length <= 6) {
      // 组能显示完全
      if (previewSwiperScrollRef.current)
        previewSwiperScrollRef.current.scrollTo({ top: (totalLength - 1) * 96 + groupIndex * 8 + (totalLength - groupIndex) * 1, behavior: 'smooth' });
    } else {
      if (index <= 5) {
        // 组显示不完全，但当前选中在显示区域
        if (previewSwiperScrollRef.current)
          previewSwiperScrollRef.current.scrollTo({ top: (totalLength - 1) * 96 + groupIndex * 8 + (totalLength - groupIndex) * 1, behavior: 'smooth' });
      } else {
        // 组显示不完全
        if (groupIndex === 0) {
          if (previewSwiperScrollRef.current)
            previewSwiperScrollRef.current.scrollTo({ top: (totalLength + Math.floor(index / 7) * 7) * 96 + groupIndex * 8 + (totalLength - groupIndex + Math.floor(index / 7) * 7) * 1, behavior: 'smooth' });
        } else {
          if (previewSwiperScrollRef.current)
            previewSwiperScrollRef.current.scrollTo({ top: (totalLength + 6 + Math.floor((index - 6) / 7) * 7) * 96 + groupIndex * 8 + (totalLength - groupIndex + 6 + Math.floor((index - 6) / 7) * 7) * 1, behavior: 'smooth' });
        }
      }
    }
  }, [index, groupIndex]);

  /** 键盘 ⬆️ ｜ ⬇️ 事件 */
  useEffect(() => {
    if (!keyboardControl) return;
    const handleKeyDown = (event: any) => {
      if (event.repeat || groupIndex === -1 || index === -1) return;
      if (['TEXTAREA', 'INPUT'].indexOf(event.target.tagName) === -1) {
        event.preventDefault();
      }

      if (event.code === 'ArrowUp' || event.key === 'ArrowUp') {
        if (index > 0) {
          setNewValue(itemId[index - 1]);
          onChange?.(data[groupIndex]?.mediaData[index - 1], data[groupIndex]);
        } else {
          if (groupIndex > 0) {
            // 还有组
            setNewGroup(groupId[groupIndex - 1] ?? '');
            const length = data?.filter(i => i.id === groupId[groupIndex - 1])[0]?.mediaData?.length;
            setNewValue(data[groupIndex - 1]?.mediaData[length - 1]?.id);
            onChange?.(data[groupIndex - 1]?.mediaData[length - 1], data[groupIndex - 1]);
          }
        }
      } else if (event.code === 'ArrowDown' || event.key === 'ArrowDown') {
        if (index < itemId?.length - 1) {
          setNewValue(itemId[index + 1]);
          onChange?.(data[groupIndex]?.mediaData[index + 1], data[groupIndex]);
        } else {
          if (groupIndex < groupId.length - 1) {
            // 还有组
            setNewGroup(groupId[groupIndex + 1] ?? '');
            setNewValue(data[groupIndex + 1]?.mediaData[0].id);
            onChange?.(data[groupIndex + 1]?.mediaData[0], data[groupIndex + 1]);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [newValue, newGroup, keyboardControl]);

  // 初始定位
  useEffect(() => {
    const currentPreviewCard = document.querySelector('.currentPreviewCard');
    if (currentPreviewCard) {
      currentPreviewCard.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="land-swiper-media-preview" onClick={e => e.stopPropagation()}>
      <div
        ref={previewSwiperScrollRef}
        className="land-swiper-media-preview-content"
      >
        {data?.map((i, idx) => (
          <div
            key={i.id ?? idx}
            className={\`land-swiper-media-preview-group \${i.id === activeGroup ? 'active' : ''}\`}
          >
            {i.mediaData?.map((j, jdx) => (
              <Fragment key={j.id ?? jdx}>
                {jdx !== 0 && <Divider gap={8} />}
                <div
                  className={\`land-swiper-media-preview-item \${value === j.id ? 'active' : ''}\`}
                  onClick={() => {
                    onChange?.(j, i);
                  }}
                >
                  <Image
                    url={j.url}
                    ratio={1}
                    style={{ width: '80px', borderRadius: '8px' }}
                    imgStyle={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MsPreviewSwiperLayout;
`

export const reactScssCodeStr = `.land-swiper-media-preview{
  height: 100%;
  cursor: default;
  flex-shrink: 0;
  width: fit-content;
  .land-swiper-media-preview-content{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: fit-content;
    height: 100%;
    border-radius: 16px;
    overflow: auto;
    scrollbar-width: none;
    .land-swiper-media-preview-group{
      display: flex;
      flex-direction: column;
      padding: 8px;
      border-radius: 16px;
        background-color: var(--color-bg-opacity);
      transition: opacity 0.3s ease-in-out;
      opacity: 0.5;
      &.active{
        opacity: 1;
      }
    }
    .land-swiper-media-preview-item{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      cursor: pointer;
      &.active{
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
      }
    }
  }
}`