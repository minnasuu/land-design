import { default as React } from 'react';
export type CommonProps = {
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
};
export type ReactVersion = "18" | "19";
export declare const getReactVersion: () => ReactVersion;
export type CompatibleReactNode = React.ReactNode;
export type SafeReactNode = React.ReactElement | string | number | boolean | null | undefined;
export declare enum ClickType {
    SELF = "self",
    OTHERS = "others",
    SIMPLE = "simple",
    DISABLED = "disabled"
}
export type ThemeType = {
    hoverColor?: string;
    hoverBg?: string;
    activeColor?: string;
    activeBg?: string;
    lineColor?: string;
};
export type MenuItemType = {
    key: string;
    title: string;
    path?: string;
    subTitle?: string;
    icon?: string | React.ReactNode;
    isNew?: string | React.ReactNode | boolean;
    href?: string;
    clickType?: ClickType;
    /** 下拉菜单是否展开 */
    open?: boolean;
    titleDeputy?: boolean;
    dropData?: MenuItemType[];
    [key: string]: any;
};
export type MenuProps = {
    active?: string;
    data?: MenuItemType[];
    direction?: "row" | "column";
    theme?: ThemeType;
    /** 边框 */
    border?: boolean;
    titleDeputy?: boolean;
    /** 切换导航项 */
    onChange?: (item: MenuItemType) => void;
    onDropChange?: (item: MenuItemType, parentItem: MenuItemType) => void;
    itemStyle?: React.CSSProperties;
    itemClassName?: string;
    style?: React.CSSProperties;
    className?: string;
    /** 二级菜单相关props */
    dropProps?: MenuProps;
};
