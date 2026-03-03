import { CSSProperties, ReactNode } from 'react';
import { CommonProps } from '../types';
/**
 * 复选框尺寸
 * - small: 小尺寸
 * - default: 默认尺寸
 * - large: 大尺寸
 */
export type CheckboxSize = 'small' | 'default' | 'large';
export interface CheckboxProps extends CommonProps {
    /**
     * 复选框的值
     * @description 用于表单提交和 CheckboxGroup 中标识选项
     */
    value?: string | number;
    /**
     * 表单字段名
     * @description 原生 name 属性，用于表单提交
     */
    name?: string;
    /**
     * 是否选中（受控）
     * @description 控制复选框的选中状态
     * @default false
     */
    checked?: boolean;
    /**
     * 默认是否选中（非受控）
     * @description 非受控模式下的初始选中状态
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * 是否半选状态
     * @description 通常用于父子关联选择时的中间状态
     * @default false
     */
    indeterminate?: boolean;
    /**
     * 是否禁用
     * @description 设置为 true 时复选框不可点击
     * @default false
     */
    disabled?: boolean;
    /**
     * 标签内容
     * @description 显示在复选框旁边的内容，支持 ReactNode
     */
    label?: ReactNode;
    /**
     * 子元素
     * @description 可作为 label 的替代方案
     */
    children?: ReactNode;
    /**
     * 尺寸
     * @default 'default'
     */
    size?: CheckboxSize;
    /**
     * 是否启用动画
     * @description 控制选中时的过渡动画效果
     * @default true
     */
    animated?: boolean;
    /**
     * 提示内容
     * @description 鼠标悬停时显示的提示信息
     */
    tip?: ReactNode;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 标签自定义类名 */
    labelClassName?: string;
    /** 标签自定义样式 */
    labelStyle?: CSSProperties;
    /**
     * 选中状态变化回调
     * @param checked - 新的选中状态
     * @param e - 鼠标事件对象
     */
    onCheckedChange?: (checked: boolean, e: React.MouseEvent) => void;
    /**
     * @deprecated 建议使用 onCheckedChange 代替
     */
    onChange?: (checked: boolean, e: React.MouseEvent) => void;
}
/**
 * Checkbox 组件默认属性
 */
export declare const checkboxDefaultProps: Partial<CheckboxProps>;
/**
 * Checkbox 属性使用说明
 *
 * 1. 受控 vs 非受控模式：
 *    - 受控模式：使用 checked + onCheckedChange
 *    - 非受控模式：使用 defaultChecked
 *
 * 2. 表单集成：
 *    - value: 在 CheckboxGroup 中标识选项
 *    - name: 原生表单字段名
 *
 * 3. 标签内容：
 *    - 优先使用 children，其次 label
 *
 * 4. 半选状态：
 *    - indeterminate 用于父子关联选择的中间状态
 *    - 半选状态时 checked 属性会被忽略显示
 *
 * @example
 * // 受控模式
 * <Checkbox
 *   checked={isChecked}
 *   onCheckedChange={(checked) => setIsChecked(checked)}
 * >
 *   同意协议
 * </Checkbox>
 *
 * @example
 * // 非受控模式
 * <Checkbox defaultChecked label="默认选中" />
 *
 * @example
 * // 在 CheckboxGroup 中使用
 * <CheckboxGroup value={values} onChange={setValues}>
 *   <Checkbox value="a" label="选项A" />
 *   <Checkbox value="b" label="选项B" />
 * </CheckboxGroup>
 *
 * @example
 * // 半选状态（全选控制）
 * <Checkbox
 *   indeterminate={someChecked && !allChecked}
 *   checked={allChecked}
 *   onCheckedChange={handleSelectAll}
 * >
 *   全选
 * </Checkbox>
 */
