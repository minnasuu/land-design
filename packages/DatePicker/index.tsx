import React, { useMemo, useState, useCallback } from "react";
import './index.scss';
import Dropdown from "../Dropdown";
import Calendar from "../Calendar";
import Icon from "../Icon";
import { DatePickerProps } from "./props";
import Input from "../Input";
import Button from "../Button";

const DatePicker: React.FC<DatePickerProps> = ({
  disabled,
  onChange,
  style,
  className = "",
  dropdownProps,
  inputProps,
  calendarProps,
  pickerType = "date",
  value,
  placeholder,
  showConfirmButton,
  allowInput = false
}) => {
  const [open, setOpen] = useState(false);
  const [tempValue, setTempValue] = useState<Date | null>(value ? new Date(value) : null);
  const [displayValue, setDisplayValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputMode, setIsInputMode] = useState(false);

  // 优化：在禁用状态下强制关闭下拉菜单
  useMemo(() => {
    if (disabled && open) {
      setOpen(false);
    }
  }, [disabled, open]);

  // 格式化日期显示
  const formatDisplayValue = useCallback((date: Date | null, type: string) => {
    if (!date) return "";

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    switch (type) {
      case "year":
        return `${year}年`;
      case "month":
        return `${year}年${month}月`;
      case "quarter":
        const quarter = Math.ceil(month / 3);
        return `${year}年第${quarter}季度`;
      case "week":
        // 计算周数
        const startOfYear = new Date(year, 0, 1);
        const days = Math.floor((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000));
        const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);
        return `${year}年第${weekNumber}周`;
      case "date":
      default:
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    }
  }, []);

  // 解析用户输入的日期
  const parseInputDate = useCallback((input: string): Date | null => {
    if (!input.trim()) return null;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // 支持多种日期格式
    const patterns = [
      // YYYY-MM-DD
      {
        pattern: /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
        extract: (match: RegExpMatchArray) => ({
          year: parseInt(match[1]),
          month: parseInt(match[2]),
          day: parseInt(match[3])
        })
      },
      // YYYY/MM/DD
      {
        pattern: /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/,
        extract: (match: RegExpMatchArray) => ({
          year: parseInt(match[1]),
          month: parseInt(match[2]),
          day: parseInt(match[3])
        })
      },
      // YYYY年MM月DD日
      {
        pattern: /^(\d{4})年(\d{1,2})月(\d{1,2})日$/,
        extract: (match: RegExpMatchArray) => ({
          year: parseInt(match[1]),
          month: parseInt(match[2]),
          day: parseInt(match[3])
        })
      },
      // YYYY年MM月
      {
        pattern: /^(\d{4})年(\d{1,2})月$/,
        extract: (match: RegExpMatchArray) => ({
          year: parseInt(match[1]),
          month: parseInt(match[2]),
          day: 1
        })
      },
      // YYYY年
      {
        pattern: /^(\d{4})年$/,
        extract: (match: RegExpMatchArray) => ({
          year: parseInt(match[1]),
          month: 1,
          day: 1
        })
      },
      // MM月DD日
      {
        pattern: /^(\d{1,2})月(\d{1,2})日$/,
        extract: (match: RegExpMatchArray) => ({
          year: currentYear,
          month: parseInt(match[1]),
          day: parseInt(match[2])
        })
      },
      // DD日
      {
        pattern: /^(\d{1,2})日$/,
        extract: (match: RegExpMatchArray) => ({
          year: currentYear,
          month: currentMonth,
          day: parseInt(match[1])
        })
      }
    ];

    for (const { pattern, extract } of patterns) {
      const match = input.match(pattern);
      if (match) {
        try {
          const { year, month, day } = extract(match);

          // 验证日期有效性
          const date = new Date(year, month - 1, day);
          if (date.getFullYear() === year &&
            date.getMonth() === month - 1 &&
            date.getDate() === day) {
            return date;
          }
        } catch (error) {
          // 解析失败，继续下一个模式
          continue;
        }
      }
    }

    return null;
  }, []);

  // 初始化显示值 - 只在组件初始化时设置，后续通过手动控制
  useMemo(() => {
    if (value) {
      setDisplayValue(formatDisplayValue(new Date(value), pickerType));
    } else {
      setDisplayValue("");
    }
  }, [value, pickerType, formatDisplayValue]);

  // 处理日历选择事件
  const handleCalendarChange = useCallback((...args: any[]) => {
    // 优化：在禁用状态下阻止日历选择
    if (disabled) return;

    let selectedDate: Date | null = null;

    switch (pickerType) {
      case "year":
        const yearValue = args[0];
        selectedDate = new Date(yearValue, 0, 1);
        break;
      case "month":
        const [monthValue, yearForMonth] = args;
        selectedDate = new Date(yearForMonth, monthValue - 1, 1);
        break;
      case "quarter":
        const [quarterValue, yearForQuarter] = args;
        const startMonth = (quarterValue - 1) * 3;
        selectedDate = new Date(yearForQuarter, startMonth, 1);
        break;
      case "week":
        // 周选择返回的是周开始日期
        selectedDate = args[0];
        break;
      case "date":
      default:
        const [day, monthVal, yearVal] = args;
        selectedDate = new Date(yearVal, monthVal - 1, day);
        break;
    }

    // 更新临时值
    setTempValue(selectedDate);

    // 如果需要确认按钮，只暂存值；否则直接确认选择
    if (!showConfirmButton) {
      setDisplayValue(formatDisplayValue(selectedDate, pickerType));
      onChange?.(selectedDate);
      setOpen(false);
    }
  }, [pickerType, showConfirmButton, formatDisplayValue, onChange, disabled]);

  // 处理确认按钮点击
  const handleConfirm = useCallback(() => {
    // 优化：在禁用状态下阻止确认
    if (disabled) return;

    if (tempValue) {
      setDisplayValue(formatDisplayValue(tempValue, pickerType));
      onChange?.(tempValue);
    }
    setOpen(false);
  }, [tempValue, pickerType, formatDisplayValue, onChange, disabled]);

  // 处理取消
  const handleCancel = useCallback(() => {
    // 优化：在禁用状态下阻止取消操作
    if (disabled) return;

    setTempValue(value ? new Date(value) : null);
    setOpen(false);
  }, [value, disabled]);

  // 处理下拉框关闭
  const handleDropdownClose = useCallback((isOpen: boolean) => {
    // 优化：在禁用状态下强制关闭
    if (disabled) {
      setOpen(false);
      return;
    }

    if (!isOpen && showConfirmButton) {
      // 如果关闭下拉框且需要确认按钮，恢复原来的值
      setTempValue(value ? new Date(value) : null);
    }
    setOpen(isOpen);
  }, [showConfirmButton, value, disabled]);

  // 处理输入框清除
  const handleClear = useCallback(() => {
    // 优化：在禁用状态下阻止清除
    if (disabled) return;

    setTempValue(null);
    setDisplayValue("");
    setInputValue("");
    onChange?.(null);
  }, [onChange, disabled]);

  // 处理输入框变化
  const handleInputChange = useCallback((val: string, e?: React.ChangeEvent<HTMLInputElement>) => {
    // 优化：在禁用状态下阻止输入变化
    if (disabled) return;

    setInputValue(val);
  }, [disabled]);

  // 处理输入框聚焦
  const handleInputFocus = useCallback(() => {
    if (!disabled) {
      if (allowInput && pickerType === "date") {
        setIsInputMode(true);
        setInputValue(displayValue);
      } else {
        setOpen(true);
      }
    }
  }, [disabled, allowInput, pickerType, displayValue]);

  // 处理输入框失焦
  const handleInputBlur = useCallback(() => {
    // 优化：在禁用状态下阻止失焦处理
    if (disabled) return;

    if (allowInput && pickerType === "date") {
      setIsInputMode(false);

      // 尝试解析并确认输入的值
      if (inputValue.trim()) {
        const parsedDate = parseInputDate(inputValue);
        if (parsedDate) {
          // 输入值合法，确认选择
          setTempValue(parsedDate);
          setDisplayValue(formatDisplayValue(parsedDate, pickerType));
          onChange?.(parsedDate);
        } else {
          // 输入值不合法，恢复原值
          setDisplayValue(formatDisplayValue(tempValue, pickerType));
        }
      } else {
        // 输入为空，清除选择
        setTempValue(null);
        setDisplayValue("");
        onChange?.(null);
      }

      setInputValue("");
    }
  }, [allowInput, pickerType, inputValue, parseInputDate, tempValue, formatDisplayValue, onChange, disabled]);

  // 处理输入框回车
  const handleInputEnter = useCallback((val: string) => {
    // 优化：在禁用状态下阻止回车处理
    if (disabled) return;

    if (allowInput && pickerType === "date" && val.trim()) {
      const parsedDate = parseInputDate(val);
      if (parsedDate) {
        // 输入值合法，确认选择并关闭输入模式
        setTempValue(parsedDate);
        setDisplayValue(formatDisplayValue(parsedDate, pickerType));
        onChange?.(parsedDate);
        setIsInputMode(false);
        setInputValue("");
      }
    }
  }, [allowInput, pickerType, parseInputDate, formatDisplayValue, onChange, disabled]);

  // 生成占位符文本
  const newPlaceholder = useMemo(() => {
    if (placeholder) return placeholder;
    switch (pickerType) {
      case 'year': return "请选择年份";
      case 'month': return "请选择月份";
      case 'week': return "请选择周";
      case 'quarter': return "请选择季度";
      case 'date':
      default: return "请选择日期";
    }
  }, [pickerType, placeholder]);

  // 根据选择器类型设置日历视图模式
  const calendarViewMode = useMemo(() => {
    switch (pickerType) {
      case "year": return "year";
      case "month": return "month";
      case "quarter": return "quarter";
      case "week": return "week";
      case "date":
      default: return "date";
    }
  }, [pickerType]);

  // 根据选择器类型设置日历事件处理
  const calendarEventHandlers = useMemo(() => {
    switch (pickerType) {
      case "year":
        return { onYearChange: handleCalendarChange };
      case "month":
        return { onMonthChange: handleCalendarChange };
      case "quarter":
        return { onQuarterChange: handleCalendarChange };
      case "week":
        return { onWeekChange: handleCalendarChange };
      case "date":
      default:
        return { onDayChange: handleCalendarChange };
    }
  }, [pickerType, handleCalendarChange]);

  return (
    <div
      className={`land-date-picker ${className}`}
      style={style}
    >
      <Dropdown
        open={open}
        disabled={disabled}
        trigger="click"
        onOpen={handleDropdownClose}
        dropContent={
          <div className="land-date-picker-dropdown-content">
            <Calendar
              viewMode={calendarViewMode}
              {...calendarEventHandlers}
              {...calendarProps}
            />
            {showConfirmButton && (
              <div className="land-date-picker-dropdown-actions">
                <Button
                  text="取消"
                  type="outline"
                  className="land-date-picker-dropdown-cancel-button"
                  onClick={handleCancel}
                />
                <Button
                  text="确定"
                  type="background"
                  className="land-date-picker-dropdown-confirm-button"
                  onClick={handleConfirm}
                />
              </div>
            )}
          </div>
        }
        {...dropdownProps}
      >
        <div className={`land-date-picker-input ${displayValue ? "" : "empty"} ${isInputMode ? "input-mode" : ""} `}>
          <Input
            type="transparent"
            className="land-date-picker-input-value"
            placeholder={newPlaceholder}
            value={isInputMode ? inputValue : displayValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={allowInput && pickerType === "date" && !disabled ? handleInputChange : undefined}
            onClear={handleClear}
            onEnter={handleInputEnter}
            {...inputProps}
          />
          <Icon name="calendar" className="land-date-picker-icon" />
        </div>
      </Dropdown>
    </div>
  );
};

export default DatePicker;
