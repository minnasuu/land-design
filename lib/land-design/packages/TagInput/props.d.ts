import { CSSProperties, ReactNode, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
/**
 * 标签输入框外观变体
 * - outline: 描边样式（默认）
 * - fill: 填充样式
 */
export type TagInputVariant = 'outline' | 'fill';
/**
 * 标签输入框尺寸
 * - small: 小尺寸
 * - default: 默认尺寸
 * - large: 大尺寸
 */
export type TagInputSize = 'small' | 'default' | 'large';
/**
 * 标签数据项
 * 可以是简单字符串或带配置的对象
 */
export interface TagItem {
    /** 标签唯一标识 */
    key?: string;
    /** 标签文本 */
    label: string;
    /** 是否可删除 */
    closable?: boolean;
    /** 标签自定义样式 */
    style?: CSSProperties;
    /** 标签自定义类名 */
    className?: string;
}
export interface TagInputProps {
    /**
     * 标签数据（受控）
     * 可以是字符串数组或 TagItem 数组
     */
    value?: (string | TagItem)[];
    /**
     * 默认标签数据（非受控）
     * @deprecated 使用 defaultValue 代替
     */
    tagData?: string[];
    /**
     * 默认标签数据（非受控）
     */
    defaultValue?: (string | TagItem)[];
    /**
     * 输入框占位符
     * @default '按下回车以输入标签'
     */
    placeholder?: string;
    /**
     * 最大标签数量
     * @default 10
     */
    maxCount?: number;
    /**
     * @deprecated 使用 maxCount 代替
     */
    maxLength?: number;
    /**
     * 单个标签最大长度
     */
    maxTagLength?: number;
    /**
     * 是否允许重复标签
     * @default false
     */
    allowDuplicate?: boolean;
    /**
     * 外观变体
     * @default 'fill'
     */
    variant?: TagInputVariant;
    /**
     * 尺寸
     * @default 'default'
     */
    size?: TagInputSize;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 是否只读
     * @default false
     */
    readOnly?: boolean;
    /**
     * 是否显示清空按钮
     * @default true
     */
    showClear?: boolean;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 宽度（支持数字或字符串） */
    width?: number | string;
    /** 标签自定义类名 */
    tagClassName?: string;
    /** 标签自定义样式 */
    tagStyle?: CSSProperties;
    /**
     * 自定义标签渲染
     * @param tag 标签数据
     * @param index 标签索引
     * @param onClose 关闭回调
     */
    renderTag?: (tag: string | TagItem, index: number, onClose: () => void) => ReactNode;
    /**
     * 前置内容
     */
    prefix?: ReactNode;
    /**
     * 后置内容
     */
    suffix?: ReactNode;
    /**
     * 标签变化回调
     * @param tags 当前标签数组
     * @param trigger 触发方式
     */
    onChange?: (tags: (string | TagItem)[], trigger: 'add' | 'remove' | 'clear') => void;
    /**
     * 添加标签回调
     * @param tag 新添加的标签
     */
    onAdd?: (tag: string) => void;
    /**
     * 删除标签回调
     * @param tag 被删除的标签
     * @param index 标签索引
     */
    onRemove?: (tag: string | TagItem, index: number) => void;
    /**
     * 清空回调
     */
    onClear?: () => void;
    /**
     * 回车回调
     * @param inputValue 当前输入值
     * @param e 键盘事件
     */
    onEnter?: (inputValue: string, e: KeyboardEvent<HTMLInputElement>) => void;
    /**
     * 输入变化回调
     * @param value 输入值
     * @param e 变化事件
     */
    onInputChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
    /**
     * 聚焦回调
     */
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    /**
     * 失焦回调
     */
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    /** @deprecated 未实现 */
    highlightStr?: string[];
    /** @deprecated 未实现 */
    highlightStyle?: CSSProperties;
    /** @deprecated 使用 onRemove 代替 */
    onDelete?: (tag: string) => void;
}
