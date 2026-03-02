import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

// ==================== 类型定义 ====================

/**
 * 颜色格式类型
 * - hex: 十六进制格式 (#RRGGBB)
 * - rgb: RGB 格式 (rgb(r, g, b))
 * - rgba: RGBA 格式 (rgba(r, g, b, a))
 * - hsl: HSL 格式 (hsl(h, s%, l%))
 * - hsv: HSV 格式 (hsv(h, s%, v%))
 */
export type ColorFormat = "hex" | "rgb" | "rgba" | "hsl" | "hsv";

/**
 * 触发器变体类型
 * - default: 默认色块触发器
 * - input: 输入框触发器
 * - custom: 自定义触发器（通过 children）
 */
export type ColorPickerTrigger = "default" | "input" | "custom";

/**
 * 颜色选择器尺寸
 */
export type ColorPickerSize = "small" | "default" | "large";

/**
 * RGB 颜色对象
 */
export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

/**
 * RGBA 颜色对象
 */
export interface RGBAColor extends RGBColor {
  a: number;
}

/**
 * HSV 颜色对象
 */
export interface HSVColor {
  h: number;
  s: number;
  v: number;
}

/**
 * HSL 颜色对象
 */
export interface HSLColor {
  h: number;
  s: number;
  l: number;
}

/**
 * 颜色值联合类型
 */
export type ColorValue = string | RGBColor | RGBAColor | HSVColor | HSLColor;

/**
 * 完整颜色信息（onChange 回调参数）
 */
export interface ColorInfo {
  /** 当前格式的颜色字符串 */
  color: string;
  /** HEX 格式 */
  hex: string;
  /** RGB 格式 */
  rgb: string;
  /** RGBA 格式 */
  rgba: string;
  /** HSL 格式 */
  hsl: string;
  /** HSV 格式 */
  hsv: string;
  /** 透明度（0-1） */
  alpha: number;
  /** RGB 对象 */
  rgbObject: RGBColor;
  /** HSV 对象 */
  hsvObject: HSVColor;
  /** HSL 对象 */
  hslObject: HSLColor;
}

// ==================== 属性接口定义 ====================

/**
 * ColorPicker 基础属性
 */
export interface ColorPickerBaseProps extends CommonProps {
  /**
   * 当前颜色值（受控）
   * 支持 HEX、RGB、HSL 等格式
   */
  value?: string;

  /**
   * 默认颜色值（非受控）
   * @default "#1677ff"
   */
  defaultValue?: string;

  /**
   * 颜色格式
   * @default "hex"
   */
  format?: ColorFormat;

  /**
   * 是否显示透明度选择
   * @default true
   */
  showAlpha?: boolean;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 组件尺寸
   * @default "default"
   */
  size?: ColorPickerSize;

  /**
   * 触发器类型
   * @default "default"
   */
  trigger?: ColorPickerTrigger;

  /**
   * 是否允许清空
   * @default false
   */
  allowClear?: boolean;

  /**
   * 表单字段名
   */
  name?: string;
}

/**
 * ColorPicker 面板配置属性
 */
export interface ColorPickerPanelProps {
  /**
   * 预设颜色列表
   */
  presets?: string[];

  /**
   * 最近使用的颜色（由外部管理）
   */
  recentColors?: string[];

  /**
   * 最近颜色的最大数量
   * @default 8
   */
  maxRecentColors?: number;

  /**
   * 是否显示颜色输入框
   * @default true
   */
  showInput?: boolean;

  /**
   * 是否显示格式切换
   * @default true
   */
  showFormatSwitch?: boolean;

  /**
   * 面板宽度
   * @default 280
   */
  panelWidth?: number;

  /**
   * 面板高度（颜色区域高度）
   * @default 200
   */
  panelHeight?: number;

  /**
   * 面板放置位置
   * @default "bottom"
   */
  placement?: "top" | "bottom" | "left" | "right";
}

/**
 * ColorPicker 样式属性
 */
export interface ColorPickerStyleProps {
  /**
   * 自定义样式
   */
  style?: CSSProperties;

  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 触发器宽度
   */
  triggerWidth?: number | string;

  /**
   * 触发器高度
   */
  triggerHeight?: number | string;

  /**
   * 触发器样式
   */
  triggerStyle?: CSSProperties;

  /**
   * 触发器类名
   */
  triggerClassName?: string;

  /**
   * 面板样式
   */
  panelStyle?: CSSProperties;

  /**
   * 面板类名
   */
  panelClassName?: string;
}

/**
 * ColorPicker 事件属性
 */
export interface ColorPickerEventProps {
  /**
   * 颜色变化回调
   * @param colorInfo 完整颜色信息
   */
  onChange?: (colorInfo: ColorInfo) => void;

  /**
   * 颜色变化回调（简化版，仅返回字符串）
   * @param color 当前格式的颜色字符串
   * @param hex HEX 格式
   * @param rgba RGBA 格式
   */
  onColorChange?: (color: string, hex: string, rgba: string) => void;

  /**
   * 格式变化回调
   * @param format 新的颜色格式
   */
  onFormatChange?: (format: ColorFormat) => void;

  /**
   * 面板打开/关闭回调
   * @param open 是否打开
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * 清空颜色回调
   */
  onClear?: () => void;
}

/**
 * ColorPicker 子元素属性
 */
export interface ColorPickerChildrenProps {
  /**
   * 自定义触发器元素
   * 当 trigger="custom" 时使用
   */
  children?: React.ReactNode;
}

/**
 * ColorPicker 组件完整属性类型
 */
export type ColorPickerProps = ColorPickerBaseProps &
  ColorPickerPanelProps &
  ColorPickerStyleProps &
  ColorPickerEventProps &
  ColorPickerChildrenProps;

// ==================== 默认属性值 ====================

export const defaultColorPickerProps = {
  defaultValue: "#1677ff",
  format: "hex" as ColorFormat,
  showAlpha: true,
  disabled: false,
  size: "default" as ColorPickerSize,
  trigger: "default" as ColorPickerTrigger,
  allowClear: false,
  maxRecentColors: 8,
  showInput: true,
  showFormatSwitch: true,
  panelWidth: 280,
  panelHeight: 200,
  placement: "bottom" as const,
};

// ==================== 预设颜色 ====================

export const defaultPresetColors = [
  "#f5222d",
  "#fa541c",
  "#fa8c16",
  "#faad14",
  "#fadb14",
  "#a0d911",
  "#52c41a",
  "#13c2c2",
  "#1677ff",
  "#2f54eb",
  "#722ed1",
  "#eb2f96",
  "#000000",
  "#434343",
  "#666666",
  "#999999",
  "#cccccc",
  "#ffffff",
];

// ==================== 子组件属性 ====================

/**
 * 颜色面板属性
 */
export interface ColorPanelProps {
  /** 当前色相值 (0-360) */
  hue: number;
  /** 饱和度 (0-100) */
  saturation: number;
  /** 明度 (0-100) */
  brightness: number;
  /** 面板变化回调 */
  onChange: (saturation: number, brightness: number) => void;
}

/**
 * 色相滑块属性
 */
export interface HueSliderProps {
  /** 当前色相值 (0-360) */
  hue: number;
  /** 色相变化回调 */
  onChange: (hue: number) => void;
}

/**
 * 透明度滑块属性
 */
export interface AlphaSliderProps {
  /** 当前透明度 (0-1) */
  alpha: number;
  /** 当前颜色（用于背景渐变） */
  color: string;
  /** 透明度变化回调 */
  onChange: (alpha: number) => void;
}

/**
 * 颜色输入框属性
 */
export interface ColorInputProps {
  /** 当前格式 */
  format: ColorFormat;
  /** 颜色信息 */
  colorInfo: ColorInfo;
  /** 透明度 */
  alpha: number;
  /** 是否显示透明度 */
  showAlpha: boolean;
  /** 颜色变化回调 */
  onColorChange: (hex: string) => void;
  /** 透明度变化回调 */
  onAlphaChange: (alpha: number) => void;
  /** 格式变化回调 */
  onFormatChange: (format: ColorFormat) => void;
}

/**
 * 预设颜色属性
 */
export interface PresetColorsProps {
  /** 预设颜色列表 */
  colors: string[];
  /** 颜色点击回调 */
  onSelect: (color: string) => void;
  /** 当前选中的颜色 */
  activeColor?: string;
}

/**
 * 属性优先级说明：
 *
 * 1. value 和 onChange 配合使用实现受控模式
 * 2. defaultValue 用于非受控模式的初始值
 * 3. format 决定返回颜色的格式
 * 4. showAlpha 控制是否显示透明度选择
 * 5. presets 提供快捷颜色选择
 * 6. trigger 决定触发器的样式
 * 7. children 用于自定义触发器（trigger="custom" 时）
 * 8. onChange 返回完整颜色信息对象
 * 9. onColorChange 返回简化的颜色字符串
 */
