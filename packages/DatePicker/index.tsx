import React, { useCallback, useMemo, useState, useEffect, useRef, CSSProperties } from "react";
import "./index.scss";
import Dropdown from "../Dropdown";
import Calendar from "../Calendar";
import Icon from "../Icon";
import Input from "../Input";
import Button from "../Button";
import {
  DatePickerProps,
  defaultDatePickerProps,
  getDefaultPlaceholder,
  defaultFormatDate,
  parseInputDate,
  DatePickerType,
} from "./props";
import { CalendarViewMode, DateInfo, WeekInfo, MonthInfo, QuarterInfo, YearInfo } from "../Calendar/props";

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const {
    value,
    defaultValue,
    type = defaultDatePickerProps.type!,
    language = defaultDatePickerProps.language || "zh",
    size = defaultDatePickerProps.size!,
    variant = defaultDatePickerProps.variant!,
    minDate,
    maxDate,
    disabledDate,
    placeholder,
    format,
    allowClear = defaultDatePickerProps.allowClear!,
    allowInput = defaultDatePickerProps.allowInput!,
    showConfirm = defaultDatePickerProps.showConfirm!,
    confirmText,
    cancelText,
    showToday = defaultDatePickerProps.showToday!,
    todayText,
    showIcon = defaultDatePickerProps.showIcon!,
    icon,
    suffixIcon,
    disabled = defaultDatePickerProps.disabled!,
    readOnly = defaultDatePickerProps.readOnly!,
    open: controlledOpen,
    defaultOpen = false,
    autoFocus = defaultDatePickerProps.autoFocus!,
    onChange,
    onOpenChange,
    onPanelChange,
    onFocus,
    onBlur,
    onClear,
    onConfirm,
    dropdownProps,
    inputProps,
    calendarProps,
    width,
    autoWidth = defaultDatePickerProps.autoWidth!,
    minWidth = defaultDatePickerProps.minWidth!,
    style,
    className = "",
    dropdownStyle,
    dropdownClassName,
    children,
    // 兼容旧 API
    ...restProps
  } = props;

  // 兼容旧 API
  const pickerType = (restProps as any).pickerType || type;
  const showConfirmButton = (restProps as any).showConfirmButton ?? showConfirm;
  const clearable = (restProps as any).clearable ?? allowClear;

  // ─── 状态管理 ───
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [selectedValue, setSelectedValue] = useState<Date | null>(() => {
    const v = value ?? defaultValue ?? (restProps as any).value;
    return v ? new Date(v) : null;
  });
  const [tempValue, setTempValue] = useState<Date | null>(null);
  const [inputText, setInputText] = useState("");
  const [isInputMode, setIsInputMode] = useState(false);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [autoWidthValue, setAutoWidthValue] = useState<number | undefined>(undefined);

  // 受控/非受控模式
  const isControlled = value !== undefined || (restProps as any).value !== undefined;
  const isOpenControlled = controlledOpen !== undefined;
  const currentValue = isControlled ? (value ?? (restProps as any).value ? new Date(value ?? (restProps as any).value) : null) : selectedValue;
  const isOpen = isOpenControlled ? controlledOpen : internalOpen;

  // ─── 格式化函数 ───
  const formatValue = useCallback((date: Date | null): string => {
    if (!date) return "";
    
    if (typeof format === "function") {
      return format(date, pickerType, language);
    }
    
    // TODO: 支持格式化字符串
    return defaultFormatDate(date, pickerType, language);
  }, [format, pickerType, language]);

  // 显示值
  const displayValue = useMemo(() => {
    return formatValue(currentValue);
  }, [currentValue, formatValue]);

  // 占位符
  const currentPlaceholder = useMemo(() => {
    return placeholder || getDefaultPlaceholder(pickerType, language);
  }, [placeholder, pickerType, language]);

  // 日历视图模式
  const calendarMode: CalendarViewMode = useMemo(() => {
    const modeMap: Record<DatePickerType, CalendarViewMode> = {
      date: "date",
      week: "week",
      month: "month",
      quarter: "quarter",
      year: "year",
    };
    return modeMap[pickerType];
  }, [pickerType]);

  // ─── 事件处理 ───
  // 打开/关闭下拉框
  const handleOpenChange = useCallback((open: boolean) => {
    if (disabled || readOnly) return;
    
    if (!isOpenControlled) {
      setInternalOpen(open);
    }
    onOpenChange?.(open);

    if (!open && showConfirmButton) {
      // 关闭时重置临时值
      setTempValue(null);
    }
  }, [disabled, readOnly, isOpenControlled, showConfirmButton, onOpenChange]);

  const handleOpen = useCallback(() => {
    handleOpenChange(true);
  }, [handleOpenChange]);

  const handleClose = useCallback(() => {
    handleOpenChange(false);
  }, [handleOpenChange]);

  // 日历选择
  const handleCalendarChange = useCallback((date: Date, info?: DateInfo | WeekInfo | MonthInfo | QuarterInfo | YearInfo) => {
    if (disabled || readOnly) return;

    if (showConfirmButton) {
      // 需要确认时，先暂存
      setTempValue(date);
    } else {
      // 直接确认
      if (!isControlled) {
        setSelectedValue(date);
      }
      onChange?.(date, info);
      handleClose();
    }
  }, [disabled, readOnly, showConfirmButton, isControlled, onChange, handleClose]);

  // 确认按钮
  const handleConfirm = useCallback(() => {
    if (disabled) return;

    const valueToConfirm = tempValue || currentValue;
    if (!isControlled && tempValue) {
      setSelectedValue(tempValue);
    }
    onChange?.(valueToConfirm);
    onConfirm?.(valueToConfirm);
    setTempValue(null);
    handleClose();
  }, [disabled, tempValue, currentValue, isControlled, onChange, onConfirm, handleClose]);

  // 取消按钮
  const handleCancel = useCallback(() => {
    setTempValue(null);
    handleClose();
  }, [handleClose]);

  // 清除
  const handleClear = useCallback(() => {
    if (disabled || readOnly) return;

    if (!isControlled) {
      setSelectedValue(null);
    }
    onChange?.(null);
    onClear?.();
    setInputText("");
  }, [disabled, readOnly, isControlled, onChange, onClear]);

  // 输入框处理
  const handleInputChange = useCallback((val: string) => {
    if (disabled || readOnly || !allowInput || pickerType !== "date") return;
    setInputText(val);
  }, [disabled, readOnly, allowInput, pickerType]);

  const handleInputFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;

    if (allowInput && pickerType === "date") {
      setIsInputMode(true);
      setInputText(displayValue);
    } else {
      handleOpen();
    }
    onFocus?.(e);
  }, [disabled, readOnly, allowInput, pickerType, displayValue, handleOpen, onFocus]);

  const handleInputBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;

    if (allowInput && pickerType === "date") {
      setIsInputMode(false);

      if (inputText.trim()) {
        const parsedDate = parseInputDate(inputText);
        if (parsedDate) {
          if (!isControlled) {
            setSelectedValue(parsedDate);
          }
          onChange?.(parsedDate);
        }
      } else if (inputText === "") {
        handleClear();
      }
      setInputText("");
    }
    onBlur?.(e);
  }, [disabled, readOnly, allowInput, pickerType, inputText, isControlled, onChange, handleClear, onBlur]);

  const handleInputEnter = useCallback((val: string) => {
    if (disabled || readOnly || !allowInput || pickerType !== "date") return;

    if (val.trim()) {
      const parsedDate = parseInputDate(val);
      if (parsedDate) {
        if (!isControlled) {
          setSelectedValue(parsedDate);
        }
        onChange?.(parsedDate);
        setIsInputMode(false);
        setInputText("");
      }
    }
  }, [disabled, readOnly, allowInput, pickerType, isControlled, onChange]);

  // 今天按钮
  const handleToday = useCallback(() => {
    if (disabled || readOnly) return;

    const today = new Date();
    if (!isControlled) {
      setSelectedValue(today);
    }
    onChange?.(today);
    handleClose();
  }, [disabled, readOnly, isControlled, onChange, handleClose]);

  // 面板变化
  const handlePanelChange = useCallback((date: Date, mode: CalendarViewMode) => {
    onPanelChange?.(date, mode);
  }, [onPanelChange]);

  // ─── 副作用 ───
  // 禁用时关闭下拉框
  useEffect(() => {
    if (disabled && isOpen) {
      handleClose();
    }
  }, [disabled, isOpen, handleClose]);

  // 自适应宽度计算
  useEffect(() => {
    if (autoWidth && measureRef.current) {
      const textToMeasure = displayValue || currentPlaceholder;
      measureRef.current.textContent = textToMeasure;
      const measuredWidth = measureRef.current.offsetWidth;
      // 添加图标宽度(24px) + 左右 padding(24px) + 一些额外间距(16px)
      const calculatedWidth = measuredWidth + 64;
      const minWidthNum = typeof minWidth === "number" ? minWidth : parseInt(minWidth as string, 10) || 120;
      setAutoWidthValue(Math.max(calculatedWidth, minWidthNum));
    }
  }, [autoWidth, displayValue, currentPlaceholder, minWidth]);

  // ─── 渲染 ───
  // 图标
  const renderIcon = () => {
    if (!showIcon) return null;
    if (suffixIcon) return suffixIcon;
    if (icon) return icon;
    return <Icon name="calendar" />;
  };

  // 下拉内容
  const renderDropdownContent = () => (
    <div className={`land-date-picker__dropdown ${dropdownClassName || ""}`} style={dropdownStyle}>
      <Calendar
        mode={calendarMode}
        language={language}
        value={tempValue || currentValue}
        minDate={minDate}
        maxDate={maxDate}
        disabledDate={disabledDate}
        showTodayButton={false}
        onChange={handleCalendarChange}
        onPanelChange={handlePanelChange}
        {...calendarProps}
      />
      
      {/* 底部操作栏 */}
      {(showConfirmButton || showToday) && (
        <div className="land-date-picker__footer">
          {showToday && (
            <Button
              variant="text"
              size="small"
              text={todayText || (language === "zh" ? "今天" : "Today")}
              onClick={handleToday}
            />
          )}
          {showConfirmButton && (
            <div className="land-date-picker__actions">
              <Button
                variant="outline"
                size="small"
                text={cancelText || (language === "zh" ? "取消" : "Cancel")}
                onClick={handleCancel}
              />
              <Button
                variant="background"
                size="small"
                text={confirmText || (language === "zh" ? "确定" : "Confirm")}
                onClick={handleConfirm}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );

  // 触发器
  const renderTrigger = () => {
    if (children) {
      return children;
    }

    return (
      <div 
        className={`land-date-picker__trigger ${displayValue ? "" : "land-date-picker__trigger--empty"} ${isInputMode ? "land-date-picker__trigger--input" : ""}`}
      >
        <Input
          variant="transparent"
          size={size}
          placeholder={currentPlaceholder}
          value={isInputMode ? inputText : displayValue}
          disabled={disabled}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={allowInput && pickerType === "date" ? handleInputChange : undefined}
          onClear={clearable ? handleClear : undefined}
          onEnter={handleInputEnter}
          className="land-date-picker__input"
          htmlProps={{ readOnly: readOnly || !allowInput || pickerType !== "date" }}
          {...inputProps}
        />
        <span className="land-date-picker__icon">
          {renderIcon()}
        </span>
      </div>
    );
  };

  // ─── 根类名 ───
  const rootClassName = [
    "land-date-picker",
    `land-date-picker--${size}`,
    `land-date-picker--${variant}`,
    autoWidth && "land-date-picker--auto-width",
    disabled && "land-date-picker--disabled",
    readOnly && "land-date-picker--readonly",
    isOpen && "land-date-picker--open",
    className,
  ].filter(Boolean).join(" ");

  const rootStyle: CSSProperties = {
    ...style,
    ...(width ? { width: typeof width === "number" ? `${width}px` : width } : {}),
    ...(autoWidth && autoWidthValue ? { width: `${autoWidthValue}px` } : {}),
  };

  return (
    <div className={rootClassName} style={rootStyle}>
      {/* 隐藏的测量元素 */}
      {autoWidth && (
        <span
          ref={measureRef}
          className="land-date-picker__measure"
          aria-hidden="true"
        />
      )}
      <Dropdown
        open={isOpen}
        disabled={disabled}
        trigger="click"
        onOpen={handleOpen}
        onClose={handleClose}
        content={renderDropdownContent()}
        {...dropdownProps}
      >
        {renderTrigger()}
      </Dropdown>
    </div>
  );
};

export default DatePicker;
export * from "./props";
