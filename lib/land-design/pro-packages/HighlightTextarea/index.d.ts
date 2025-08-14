/**
 * 支持错误文案高亮的输入框
 */
export type useImperativeHandleProps = {
    focus: () => void;
};
declare const HighlightTextarea: import('react').ForwardRefExoticComponent<{
    value?: string;
    textAreaRef?: React.RefObject<HTMLTextAreaElement>;
    highlightString?: string[];
    highlightBg?: string;
    highlightColor?: string;
    disabled?: boolean;
    autoResize?: boolean;
    contentClassName?: string;
    contentStyle?: import('react').CSSProperties;
    inputClassName?: string;
    inputStyle?: import('react').CSSProperties;
    formatHighlightString?: (val: string) => import('react').ReactNode;
} & import('../../packages').CommonProps & Omit<import('react').TextareaHTMLAttributes<HTMLTextAreaElement>, "value"> & import('react').RefAttributes<useImperativeHandleProps>>;
export default HighlightTextarea;
