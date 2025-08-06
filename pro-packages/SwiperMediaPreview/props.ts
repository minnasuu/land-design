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