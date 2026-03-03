import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * 表格尺寸
 */
export type TableSize = 'small' | 'medium' | 'large';
/**
 * 列对齐方式
 */
export type TableAlign = 'left' | 'center' | 'right';
/**
 * 排序方向
 */
export type SortOrder = 'ascend' | 'descend' | null;
/**
 * 排序配置
 */
export interface TableSorter {
    /** 比较函数 */
    compare?: (a: any, b: any) => number;
    /** 多列排序优先级 */
    multiple?: number;
}
/**
 * 列配置
 */
export interface TableColumn<T = any> {
    /** 列唯一标识 (用于 key) */
    key?: string;
    /** 列标题 */
    title: React.ReactNode;
    /** 数据字段名 */
    dataIndex: string;
    /** 列宽度 */
    width?: number | string;
    /** 最小宽度 */
    minWidth?: number;
    /** 最大宽度 */
    maxWidth?: number;
    /** 对齐方式 */
    align?: TableAlign;
    /** 是否固定列 */
    fixed?: 'left' | 'right' | boolean;
    /** 列排序配置 */
    sorter?: boolean | TableSorter;
    /** 默认排序顺序 */
    defaultSortOrder?: SortOrder;
    /** 排序顺序 (受控) */
    sortOrder?: SortOrder;
    /** 自定义渲染函数 */
    render?: (value: any, record: T, index: number) => React.ReactNode;
    /** 自定义表头渲染 */
    renderHeader?: (column: TableColumn<T>) => React.ReactNode;
    /** 列是否可省略显示 (超出显示省略号) */
    ellipsis?: boolean;
    /** 列样式类名 */
    className?: string;
    /** 表头样式类名 */
    headerClassName?: string;
    /** 单元格样式 */
    cellStyle?: CSSProperties;
    /** 表头样式 */
    headerStyle?: CSSProperties;
    /** 是否隐藏列 */
    hidden?: boolean;
    /** 子列 (嵌套表头) */
    children?: TableColumn<T>[];
}
/**
 * 行选择配置
 */
export interface TableRowSelection<T = any> {
    /** 选中行的 key 数组 */
    selectedRowKeys?: React.Key[];
    /** 选中项发生变化时的回调 */
    onChange?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
    /** 用户手动选择/取消选择某行时触发 */
    onSelect?: (record: T, selected: boolean, selectedRows: T[]) => void;
    /** 用户手动选择/取消选择所有行时触发 */
    onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;
    /** 选择框的类型 */
    type?: 'checkbox' | 'radio';
    /** 选择框的默认属性配置 */
    getCheckboxProps?: (record: T) => {
        disabled?: boolean;
        name?: string;
    };
    /** 固定选择列 */
    fixed?: boolean;
    /** 选择列宽度 */
    columnWidth?: number | string;
    /** 选择列标题 */
    columnTitle?: React.ReactNode;
    /** 隐藏全选勾选框 */
    hideSelectAll?: boolean;
}
/**
 * 分页配置
 */
export interface TablePagination {
    /** 当前页码 */
    current?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 数据总数 */
    total?: number;
    /** 页码改变时回调 */
    onChange?: (page: number, pageSize: number) => void;
    /** pageSize 改变时回调 */
    onPageSizeChange?: (current: number, size: number) => void;
    /** 是否显示快速跳转 */
    showQuickJumper?: boolean;
    /** 是否显示每页条数选择器 */
    showSizeChanger?: boolean;
    /** 每页条数选项 */
    pageSizeOptions?: number[];
    /** 是否显示总数 */
    showTotal?: boolean | ((total: number, range: [number, number]) => React.ReactNode);
    /** 分页位置 */
    position?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    /** 是否禁用 */
    disabled?: boolean;
    /** 简洁模式 */
    simple?: boolean;
}
/**
 * 展开配置
 */
export interface TableExpandable<T = any> {
    /** 展开行的 key 数组 */
    expandedRowKeys?: React.Key[];
    /** 默认展开的行 */
    defaultExpandedRowKeys?: React.Key[];
    /** 展开的行变化时回调 */
    onExpandedRowsChange?: (expandedRows: React.Key[]) => void;
    /** 点击展开图标时触发 */
    onExpand?: (expanded: boolean, record: T) => void;
    /** 展开行的内容渲染函数 */
    expandedRowRender?: (record: T, index: number, indent: number, expanded: boolean) => React.ReactNode;
    /** 设置是否允许展开 */
    rowExpandable?: (record: T) => boolean;
    /** 展开列宽度 */
    columnWidth?: number | string;
    /** 固定展开列 */
    fixed?: boolean;
    /** 展开图标 */
    expandIcon?: (props: {
        expanded: boolean;
        onExpand: (record: T, e: React.MouseEvent) => void;
        record: T;
    }) => React.ReactNode;
    /** 默认展开所有行 */
    defaultExpandAllRows?: boolean;
    /** 缩进大小 */
    indentSize?: number;
}
/**
 * 滚动配置
 */
export interface TableScroll {
    /** 横向滚动宽度 */
    x?: number | string | true;
    /** 纵向滚动高度 */
    y?: number | string;
    /** 滚动到顶部/底部时是否有粘性 */
    scrollToFirstRowOnChange?: boolean;
}
/**
 * 排序状态
 */
export interface TableSortState {
    /** 排序字段 */
    field?: string;
    /** 排序顺序 */
    order?: SortOrder;
}
/**
 * 表格事件数据
 */
export interface TableEventData<T = any> {
    /** 当前数据 */
    data: T[];
    /** 分页信息 */
    pagination?: {
        current: number;
        pageSize: number;
        total: number;
    };
    /** 排序信息 */
    sorter?: TableSortState | TableSortState[];
}
/**
 * Table 基础属性
 */
export interface TableBaseProps<T = any> extends CommonProps {
    /**
     * 列配置
     * 定义表格列的结构、渲染方式等
     */
    columns: TableColumn<T>[];
    /**
     * 数据源
     * 表格要展示的数据数组
     */
    dataSource?: T[];
    /**
     * 行 key 的取值
     * 可以是字段名或函数，用于指定每行的唯一标识
     * @default 'key'
     */
    rowKey?: string | ((record: T, index: number) => React.Key);
    /**
     * 表格标题
     */
    title?: React.ReactNode | (() => React.ReactNode);
    /**
     * 表格尾部
     */
    footer?: React.ReactNode | ((data: T[]) => React.ReactNode);
    /**
     * 表格摘要/总结行
     */
    summary?: (data: T[]) => React.ReactNode;
    /**
     * 空数据时显示的内容
     */
    empty?: React.ReactNode;
    /**
     * 是否显示表头
     * @default true
     */
    showHeader?: boolean;
}
/**
 * Table 样式属性
 */
export interface TableStyleProps {
    /**
     * 表格尺寸
     * @default 'medium'
     */
    size?: TableSize;
    /**
     * 是否显示边框
     * @default true
     */
    bordered?: boolean;
    /**
     * 是否隔行变色
     * @default false
     */
    striped?: boolean;
    /**
     * 是否启用十字高亮
     * 鼠标悬停时高亮对应的行和列
     * @default false
     */
    crossHighlight?: boolean;
    /**
     * 十字高亮颜色
     */
    crossHighlightColor?: string;
    /**
     * 行悬停高亮
     * @default true
     */
    rowHover?: boolean;
}
/**
 * Table 固定属性
 */
export interface TableFixedProps {
    /**
     * 是否固定表头
     * @default false
     */
    stickyHeader?: boolean;
    /**
     * 固定表头时的顶部偏移量
     */
    stickyHeaderOffset?: number;
    /**
     * 滚动配置
     */
    scroll?: TableScroll;
}
/**
 * Table 功能属性
 */
export interface TableFeatureProps<T = any> {
    /**
     * 行选择配置
     */
    rowSelection?: TableRowSelection<T>;
    /**
     * 分页配置
     * 设置为 false 禁用分页
     */
    pagination?: TablePagination | false;
    /**
     * 展开配置
     */
    expandable?: TableExpandable<T>;
    /**
     * 是否显示加载状态
     * @default false
     */
    loading?: boolean;
    /**
     * 加载提示内容
     */
    loadingText?: React.ReactNode;
}
/**
 * Table 事件属性
 */
export interface TableEventProps<T = any> {
    /**
     * 行点击事件
     */
    onRow?: (record: T, index: number) => {
        onClick?: (event: React.MouseEvent) => void;
        onDoubleClick?: (event: React.MouseEvent) => void;
        onContextMenu?: (event: React.MouseEvent) => void;
        onMouseEnter?: (event: React.MouseEvent) => void;
        onMouseLeave?: (event: React.MouseEvent) => void;
    };
    /**
     * 表头行事件
     */
    onHeaderRow?: (columns: TableColumn<T>[], index: number) => {
        onClick?: (event: React.MouseEvent) => void;
        onDoubleClick?: (event: React.MouseEvent) => void;
        onContextMenu?: (event: React.MouseEvent) => void;
        onMouseEnter?: (event: React.MouseEvent) => void;
        onMouseLeave?: (event: React.MouseEvent) => void;
    };
    /**
     * 单元格点击事件
     */
    onCell?: (record: T, rowIndex: number, column: TableColumn<T>, colIndex: number) => {
        onClick?: (event: React.MouseEvent) => void;
        onDoubleClick?: (event: React.MouseEvent) => void;
        onContextMenu?: (event: React.MouseEvent) => void;
        onMouseEnter?: (event: React.MouseEvent) => void;
        onMouseLeave?: (event: React.MouseEvent) => void;
    };
    /**
     * 表头单元格事件
     */
    onHeaderCell?: (column: TableColumn<T>, colIndex: number) => {
        onClick?: (event: React.MouseEvent) => void;
        onDoubleClick?: (event: React.MouseEvent) => void;
        onContextMenu?: (event: React.MouseEvent) => void;
        onMouseEnter?: (event: React.MouseEvent) => void;
        onMouseLeave?: (event: React.MouseEvent) => void;
    };
    /**
     * 排序变化回调
     */
    onSortChange?: (sorter: TableSortState | TableSortState[]) => void;
    /**
     * 表格数据变化回调 (分页、排序等)
     */
    onChange?: (eventData: TableEventData<T>) => void;
}
/**
 * Table 组件完整属性
 */
export type TableProps<T = any> = TableBaseProps<T> & TableStyleProps & TableFixedProps & TableFeatureProps<T> & TableEventProps<T>;
/**
 * @deprecated 请使用 TableColumn 代替
 */
export type TableTitleData = {
    title: string | React.ReactNode;
    value: string;
    antiDesc?: string;
};
/**
 * 旧版 Table 属性 (兼容)
 * @deprecated 请使用新版 TableProps
 */
export interface LegacyTableProps extends CommonProps {
    /** @deprecated 请使用 columns */
    titleData?: TableTitleData[];
    /** @deprecated 请使用 dataSource */
    data?: any[];
    /** 自定义样式 */
    style?: CSSProperties;
    /** 自定义类名 */
    className?: string;
    /** 隔行背景 */
    striped?: boolean;
    /** 十字高亮 */
    crossHighlight?: boolean;
    /** @deprecated 请使用 stickyHeader */
    headFixed?: boolean;
    /** @deprecated 请使用 scroll.x 或 columns[].fixed */
    fixedColumns?: number;
}
