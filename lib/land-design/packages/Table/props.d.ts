import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Table组件属性类型定义
 * 包含所有Table组件支持的属性及其详细说明
 */
/**
 * TableTitleData表格标题数据类型
 * 定义表格标题的配置信息
 */
export type TableTitleData = {
    /**
     * 标题
     * 列标题，可以是字符串或React节点
     */
    title: string | React.ReactNode;
    /**
     * 值
     * 列对应的数据字段名
     */
    value: string;
    /**
     * 反序描述
     * 反序排列时的描述文本
     */
    antiDesc?: string;
};
/**
 * Table基础属性
 * 包含表格组件的基本配置和内容属性
 */
export interface TableBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为表格组件的内容
     */
    children?: React.ReactNode;
    /**
     * 标题数据
     * 包含所有列标题的配置信息
     */
    titleData?: TableTitleData[];
    /**
     * 数据
     * 表格要显示的数据数组
     */
    data?: any[];
}
/**
 * Table样式属性
 * 用于配置表格组件的视觉样式
 */
export interface TableStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义表格组件外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
    /**
     * 隔行背景
     * 为true时表格隔行用背景色区分
     */
    striped?: boolean;
    /**
     * 十字高亮
     * 为true时hover tbody的单元格时，该单元格对应的行列高亮
     */
    crossHighlight?: boolean;
    /**
     * 表头固定
     * 为true时在高度不足滚动时thead会固定在顶部
     */
    headFixed?: boolean;
    /**
     * 固定列数
     * 设置横向滚动时固定多少列在最左侧，默认为0
     */
    fixedColumns?: number;
}
/**
 * Table组件完整属性类型
 * 合并了所有属性接口
 */
export type TableProps = TableBaseProps & TableStyleProps;
/**
 * 属性优先级说明：
 * 1. titleData定义表格的列结构和标题
 * 2. data包含表格要显示的实际数据
 * 3. titleData中的value字段对应data中对象的属性名
 * 4. antiDesc用于反序排列时的显示文本
 * 5. style和className会覆盖默认样式
 * 6. 当titleData为空时，表格可能不显示列标题
 * 7. 当data为空时，表格只显示标题行
 * 8. 组件支持自定义列标题的显示内容
 * 9. 数据渲染时会根据titleData的value字段进行匹配
 * 10. 表格支持基本的排序和显示功能
 */ 
