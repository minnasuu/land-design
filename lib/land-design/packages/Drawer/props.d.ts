import { CSSProperties, ReactNode } from 'react';
import { CommonProps } from '../types';
import { ButtonProps } from '../Button/props';
/**
 * Drawer组件属性类型定义
 * 包含所有Drawer组件支持的属性及其详细说明
 */
/** 抽屉位置 */
export type DrawerPlacement = "right" | "bottom";
/** 抽屉尺寸 */
export type DrawerSize = "small" | "medium" | "large" | "auto";
/**
 * Drawer基础属性
 * 包含抽屉的基本配置和内容属性
 */
export interface DrawerBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为抽屉的内容
     */
    children?: ReactNode;
    /**
     * 是否显示侧拉窗
     * 控制抽屉的显示与隐藏
     */
    show?: boolean;
}
/**
 * Drawer布局属性
 * 用于配置抽屉的布局方式
 */
export interface DrawerLayoutProps {
    /**
     * 侧拉窗位置
     * - right: 右侧抽屉（默认）
     * - bottom: 底部抽屉
     */
    placement?: DrawerPlacement;
    /**
     * 是否需要背景遮罩
     * 设置为true时会显示背景遮罩
     */
    mask?: boolean;
}
/**
 * Drawer头部属性
 * 用于配置抽屉的头部内容
 */
export interface DrawerHeaderProps {
    /**
     * 侧拉窗标题
     * 可以传入字符串或React节点作为抽屉标题
     */
    title?: string | ReactNode;
    /**
     * 自定义头部左侧
     * 可以传入React节点作为头部左侧内容
     */
    headerLeftComponent?: ReactNode;
    /**
     * 自定义头部右侧
     * 可以传入React节点作为头部右侧内容
     */
    headerRightComponent?: ReactNode;
    /**
     * 自定义头部
     * 可以传入React节点完全自定义头部
     */
    headerComponent?: ReactNode;
    /**
     * 是否隐藏头部分割线
     * 设置为true时会隐藏头部的分割线
     */
    useHeaderDivider?: boolean;
}
/**
 * Drawer尾部属性
 * 用于配置抽屉的尾部内容
 */
export interface DrawerFooterProps {
    /**
     * 自定义尾部左侧
     * 可以传入React节点作为尾部左侧内容
     */
    footerLeftComponent?: ReactNode;
    /**
     * 自定义尾部右侧
     * 可以传入React节点作为尾部右侧内容
     */
    footerRightComponent?: ReactNode;
    /**
     * 自定义尾部
     * 可以传入React节点完全自定义尾部
     */
    footerComponent?: ReactNode;
    /**
     * 是否隐藏尾部分割线
     * 设置为true时会隐藏尾部的分割线
     */
    useFooterDivider?: boolean;
}
/**
 * Drawer按钮属性
 * 用于配置抽屉的按钮
 */
export interface DrawerButtonProps {
    /**
     * 取消按钮文案
     * 可以传入字符串或React节点作为取消按钮文本
     */
    cancelLabel?: string | ReactNode;
    /**
     * 确定按钮文案
     * 可以传入字符串或React节点作为确定按钮文本
     */
    submitLabel?: string | ReactNode;
    /**
     * 取消按钮是否禁用
     * 设置为true时取消按钮不可点击
     */
    cancelDisabled?: boolean;
    /**
     * 确定按钮是否禁用
     * 设置为true时确定按钮不可点击
     */
    submitDisabled?: boolean;
    /**
     * 取消按钮属性
     * 可以传入ButtonProps来配置取消按钮
     */
    cancelButtonProps?: ButtonProps;
    /**
     * 确定按钮属性
     * 可以传入ButtonProps来配置确定按钮
     */
    submitButtonProps?: ButtonProps;
}
/**
 * Drawer尺寸属性
 * 用于配置抽屉的尺寸
 */
export interface DrawerSizeProps {
    /**
     * 侧拉窗最小宽度
     * 设置抽屉的最小宽度
     */
    minWidth?: string;
    /**
     * 侧拉窗最大宽度
     * 设置抽屉的最大宽度
     */
    maxWidth?: string;
    /**
     * 侧拉窗大小
     * - small: 小尺寸
     * - medium: 中等尺寸
     * - large: 大尺寸
     * - auto: 自适应尺寸
     */
    size?: DrawerSize;
}
/**
 * Drawer样式属性
 * 用于配置抽屉的视觉样式
 */
export interface DrawerStyleProps {
    /**
     * 外层样式
     * 抽屉外层容器的样式
     */
    wrapStyle?: CSSProperties;
    /**
     * 外层类名
     * 抽屉外层容器的类名
     */
    wrapClassName?: string;
    /**
     * 内层样式
     * 抽屉内层容器的样式
     */
    contentStyle?: CSSProperties;
    /**
     * 内层类名
     * 抽屉内层容器的类名
     */
    contentClassName?: string;
    /**
     * body层样式
     * 抽屉内容区域的样式
     */
    bodyStyle?: CSSProperties;
    /**
     * body层类名
     * 抽屉内容区域的类名
     */
    bodyClassName?: string;
    /**
     * 遮罩样式
     * 背景遮罩的样式
     */
    maskStyle?: CSSProperties;
}
/**
 * Drawer事件属性
 * 用于配置抽屉的交互事件
 */
export interface DrawerEventProps {
    /**
     * 关闭侧拉窗事件
     * 当抽屉关闭时触发
     */
    onClose?: () => void;
    /**
     * 取消事件
     * 当取消按钮被点击时触发
     */
    onCancel?: () => void;
    /**
     * 确定事件
     * 当确定按钮被点击时触发
     */
    onSubmit?: () => void;
    /**
     * 是否启用ESC键关闭
     * 设置为true时按ESC键可以关闭抽屉（默认true）
     */
    enableEsc?: boolean;
}
/**
 * Drawer组件完整属性类型
 * 合并了所有属性接口
 */
export type DrawerProps = DrawerBaseProps & DrawerLayoutProps & DrawerHeaderProps & DrawerFooterProps & DrawerButtonProps & DrawerSizeProps & DrawerStyleProps & DrawerEventProps;
/**
 * 属性优先级说明：
 * 1. show控制抽屉的显示与隐藏
 * 2. placement控制抽屉的弹出位置
 * 3. mask控制是否显示背景遮罩
 * 4. title、headerComponent等控制头部显示
 * 5. footerComponent、cancelLabel、submitLabel等控制尾部显示
 * 6. size、minWidth、maxWidth控制抽屉尺寸
 * 7. onClose、onCancel、onSubmit处理各种事件
 * 8. 样式优先级：具体样式 > 类名 > 默认样式
 * 9. 头部优先级：headerComponent > headerLeftComponent/headerRightComponent > title
 * 10. 尾部优先级：footerComponent > footerLeftComponent/footerRightComponent > 按钮
 */ 
