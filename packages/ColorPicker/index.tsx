import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./index.scss";
import {
  ColorPickerProps,
  ColorFormat,
  ColorInfo,
  RGBColor,
  HSVColor,
  HSLColor,
  defaultColorPickerProps,
  defaultPresetColors,
} from "./props";
import Dropdown from "../Dropdown";
import Select from "../Select";
import Input from "../Input";
import NumberInput from "../NumberInput";
import Icon from "../Icon";
import { ColorUtils } from "./utils/ColorUtils";

// ==================== 常量 ====================

const COLOR_FORMAT_OPTIONS = [
  { key: "hex", label: "HEX" },
  { key: "rgb", label: "RGB" },
  { key: "hsl", label: "HSL" },
  { key: "hsv", label: "HSV" },
];

// ==================== ColorPicker 组件 ====================

const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  const {
    value: controlledValue,
    defaultValue = defaultColorPickerProps.defaultValue,
    format: controlledFormat,
    showAlpha = defaultColorPickerProps.showAlpha,
    disabled = defaultColorPickerProps.disabled,
    size = defaultColorPickerProps.size,
    trigger = defaultColorPickerProps.trigger,
    allowClear = defaultColorPickerProps.allowClear,
    name,
    presets,
    showInput = defaultColorPickerProps.showInput,
    showFormatSwitch = defaultColorPickerProps.showFormatSwitch,
    panelWidth = defaultColorPickerProps.panelWidth,
    panelHeight = defaultColorPickerProps.panelHeight,
    style,
    className,
    triggerWidth,
    triggerHeight,
    triggerStyle,
    triggerClassName,
    panelStyle,
    panelClassName,
    children,
    onChange,
    onColorChange,
    onFormatChange,
    onOpenChange,
    onClear,
  } = props;

  // ─── 状态管理 ───
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [format, setFormat] = useState<ColorFormat>(controlledFormat || "hex");
  const [isOpen, setIsOpen] = useState(false);

  // HSV 状态（内部使用 HSV 进行颜色计算）
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [brightness, setBrightness] = useState(100);
  const [alpha, setAlpha] = useState(1);

  // 输入值状态
  const [hexInput, setHexInput] = useState("");
  const [rgbInput, setRgbInput] = useState<RGBColor>({ r: 0, g: 0, b: 0 });
  const [hslInput, setHslInput] = useState<HSLColor>({ h: 0, s: 0, l: 0 });
  const [hsvInput, setHsvInput] = useState<HSVColor>({ h: 0, s: 0, v: 0 });

  // Refs
  const isInitialized = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const hueSliderRef = useRef<HTMLDivElement>(null);
  const alphaSliderRef = useRef<HTMLDivElement>(null);

  // 受控/非受控
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  // ─── 解析颜色值 ───
  const parseColor = useCallback((colorStr: string): HSVColor | null => {
    // 尝试解析 HEX
    const rgb = ColorUtils.hexToRgb(colorStr);
    if (rgb) {
      return ColorUtils.rgbToHsv(rgb.r, rgb.g, rgb.b);
    }
    return null;
  }, []);

  // ─── 初始化颜色 ───
  useEffect(() => {
    if (!isInitialized.current && currentValue) {
      const hsv = parseColor(currentValue);
      if (hsv) {
        setHue(hsv.h);
        setSaturation(hsv.s);
        setBrightness(hsv.v);
        setHsvInput(hsv);

        const rgb = ColorUtils.hsvToRgb(hsv.h, hsv.s, hsv.v);
        const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
        const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);

        setHexInput(hex);
        setRgbInput(rgb);
        setHslInput(hsl);
      }
      isInitialized.current = true;
    }
  }, [currentValue, parseColor]);

  // ─── 计算颜色信息 ───
  const colorInfo = useMemo((): ColorInfo => {
    const rgb = ColorUtils.hsvToRgb(hue, saturation, brightness);
    const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
    const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);
    const hsv = { h: hue, s: saturation, v: brightness };

    const rgbStr = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    const rgbaStr = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
    const hslStr = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    const hsvStr = `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`;

    let color = hex;
    switch (format) {
      case "rgb":
        color = rgbStr;
        break;
      case "rgba":
        color = rgbaStr;
        break;
      case "hsl":
        color = hslStr;
        break;
      case "hsv":
        color = hsvStr;
        break;
    }

    return {
      color,
      hex,
      rgb: rgbStr,
      rgba: rgbaStr,
      hsl: hslStr,
      hsv: hsvStr,
      alpha,
      rgbObject: rgb,
      hsvObject: hsv,
      hslObject: hsl,
    };
  }, [hue, saturation, brightness, alpha, format]);

  // ─── 触发变化回调 ───
  const triggerChange = useCallback(
    (info: ColorInfo) => {
      if (!isControlled) {
        setInternalValue(info.hex);
      }
      onChange?.(info);
      onColorChange?.(info.color, info.hex, info.rgba);
    },
    [isControlled, onChange, onColorChange]
  );

  // ─── 同步所有输入值 ───
  const syncInputValues = useCallback(
    (hsv: HSVColor) => {
      const rgb = ColorUtils.hsvToRgb(hsv.h, hsv.s, hsv.v);
      const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
      const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);

      setHexInput(hex);
      setRgbInput(rgb);
      setHslInput(hsl);
      setHsvInput(hsv);
    },
    []
  );

  // ─── 颜色面板变化 ───
  const handlePanelChange = useCallback(
    (s: number, v: number) => {
      setSaturation(s);
      setBrightness(v);

      const hsv = { h: hue, s, v };
      syncInputValues(hsv);

      // 计算并触发变化
      const rgb = ColorUtils.hsvToRgb(hue, s, v);
      const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
      const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);

      const info: ColorInfo = {
        color: hex,
        hex,
        rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
        rgba: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`,
        hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        hsv: `hsv(${hue}, ${s}%, ${v}%)`,
        alpha,
        rgbObject: rgb,
        hsvObject: hsv,
        hslObject: hsl,
      };

      triggerChange(info);
    },
    [hue, alpha, syncInputValues, triggerChange]
  );

  // ─── 色相变化 ───
  const handleHueChange = useCallback(
    (h: number) => {
      setHue(h);

      const hsv = { h, s: saturation, v: brightness };
      syncInputValues(hsv);

      const rgb = ColorUtils.hsvToRgb(h, saturation, brightness);
      const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
      const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);

      const info: ColorInfo = {
        color: hex,
        hex,
        rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
        rgba: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`,
        hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        hsv: `hsv(${h}, ${saturation}%, ${brightness}%)`,
        alpha,
        rgbObject: rgb,
        hsvObject: hsv,
        hslObject: hsl,
      };

      triggerChange(info);
    },
    [saturation, brightness, alpha, syncInputValues, triggerChange]
  );

  // ─── 透明度变化 ───
  const handleAlphaChange = useCallback(
    (a: number) => {
      setAlpha(a);

      const rgb = ColorUtils.hsvToRgb(hue, saturation, brightness);
      const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
      const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);
      const hsv = { h: hue, s: saturation, v: brightness };

      const info: ColorInfo = {
        color: hex,
        hex,
        rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
        rgba: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${a})`,
        hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        hsv: `hsv(${hue}, ${saturation}%, ${brightness}%)`,
        alpha: a,
        rgbObject: rgb,
        hsvObject: hsv,
        hslObject: hsl,
      };

      triggerChange(info);
    },
    [hue, saturation, brightness, triggerChange]
  );

  // ─── 格式变化 ───
  const handleFormatChange = useCallback(
    (newFormat: ColorFormat) => {
      setFormat(newFormat);
      onFormatChange?.(newFormat);
    },
    [onFormatChange]
  );

  // ─── HEX 输入变化 ───
  const handleHexInputChange = useCallback(
    (value: string) => {
      let cleanValue = value.replace("#", "").toUpperCase();
      cleanValue = cleanValue.replace(/[^0-9A-F]/g, "").slice(0, 6);
      const hexValue = cleanValue.length > 0 ? `#${cleanValue}` : "#";
      setHexInput(hexValue);

      if (cleanValue.length === 6) {
        const rgb = ColorUtils.hexToRgb(hexValue);
        if (rgb) {
          const hsv = ColorUtils.rgbToHsv(rgb.r, rgb.g, rgb.b);
          setHue(hsv.h);
          setSaturation(hsv.s);
          setBrightness(hsv.v);
          syncInputValues(hsv);

          const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);
          const info: ColorInfo = {
            color: hexValue,
            hex: hexValue,
            rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
            rgba: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`,
            hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
            hsv: `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`,
            alpha,
            rgbObject: rgb,
            hsvObject: hsv,
            hslObject: hsl,
          };
          triggerChange(info);
        }
      }
    },
    [alpha, syncInputValues, triggerChange]
  );

  // ─── RGB 输入变化 ───
  const handleRgbInputChange = useCallback(
    (field: "r" | "g" | "b", value: number) => {
      const clampedValue = Math.max(0, Math.min(255, Math.round(value)));
      const newRgb = { ...rgbInput, [field]: clampedValue };
      setRgbInput(newRgb);

      const hsv = ColorUtils.rgbToHsv(newRgb.r, newRgb.g, newRgb.b);
      const hex = ColorUtils.rgbToHex(newRgb.r, newRgb.g, newRgb.b);
      const hsl = ColorUtils.rgbToHsl(newRgb.r, newRgb.g, newRgb.b);

      setHue(hsv.h);
      setSaturation(hsv.s);
      setBrightness(hsv.v);
      setHexInput(hex);
      setHsvInput(hsv);
      setHslInput(hsl);

      const info: ColorInfo = {
        color: `rgb(${newRgb.r}, ${newRgb.g}, ${newRgb.b})`,
        hex,
        rgb: `rgb(${newRgb.r}, ${newRgb.g}, ${newRgb.b})`,
        rgba: `rgba(${newRgb.r}, ${newRgb.g}, ${newRgb.b}, ${alpha})`,
        hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        hsv: `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`,
        alpha,
        rgbObject: newRgb,
        hsvObject: hsv,
        hslObject: hsl,
      };
      triggerChange(info);
    },
    [rgbInput, alpha, triggerChange]
  );

  // ─── HSV 输入变化 ───
  const handleHsvInputChange = useCallback(
    (field: "h" | "s" | "v", value: number) => {
      let clampedValue = value;
      if (field === "h") {
        clampedValue = ((value % 360) + 360) % 360;
      } else {
        clampedValue = Math.max(0, Math.min(100, Math.round(value)));
      }

      const newHsv = { ...hsvInput, [field]: clampedValue };
      setHsvInput(newHsv);
      setHue(newHsv.h);
      setSaturation(newHsv.s);
      setBrightness(newHsv.v);

      const rgb = ColorUtils.hsvToRgb(newHsv.h, newHsv.s, newHsv.v);
      const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
      const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);

      setHexInput(hex);
      setRgbInput(rgb);
      setHslInput(hsl);

      const info: ColorInfo = {
        color: `hsv(${newHsv.h}, ${newHsv.s}%, ${newHsv.v}%)`,
        hex,
        rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
        rgba: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`,
        hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        hsv: `hsv(${newHsv.h}, ${newHsv.s}%, ${newHsv.v}%)`,
        alpha,
        rgbObject: rgb,
        hsvObject: newHsv,
        hslObject: hsl,
      };
      triggerChange(info);
    },
    [hsvInput, alpha, triggerChange]
  );

  // ─── HSL 输入变化 ───
  const handleHslInputChange = useCallback(
    (field: "h" | "s" | "l", value: number) => {
      let clampedValue = value;
      if (field === "h") {
        clampedValue = ((value % 360) + 360) % 360;
      } else {
        clampedValue = Math.max(0, Math.min(100, Math.round(value)));
      }

      const newHsl = { ...hslInput, [field]: clampedValue };
      setHslInput(newHsl);

      const rgb = ColorUtils.hslToRgb(newHsl.h, newHsl.s, newHsl.l);
      const hsv = ColorUtils.rgbToHsv(rgb.r, rgb.g, rgb.b);
      const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);

      setHue(hsv.h);
      setSaturation(hsv.s);
      setBrightness(hsv.v);
      setHexInput(hex);
      setRgbInput(rgb);
      setHsvInput(hsv);

      const info: ColorInfo = {
        color: `hsl(${newHsl.h}, ${newHsl.s}%, ${newHsl.l}%)`,
        hex,
        rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
        rgba: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`,
        hsl: `hsl(${newHsl.h}, ${newHsl.s}%, ${newHsl.l}%)`,
        hsv: `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`,
        alpha,
        rgbObject: rgb,
        hsvObject: hsv,
        hslObject: newHsl,
      };
      triggerChange(info);
    },
    [hslInput, alpha, triggerChange]
  );

  // ─── 预设颜色点击 ───
  const handlePresetClick = useCallback(
    (color: string) => {
      const rgb = ColorUtils.hexToRgb(color);
      if (rgb) {
        const hsv = ColorUtils.rgbToHsv(rgb.r, rgb.g, rgb.b);
        const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);

        setHue(hsv.h);
        setSaturation(hsv.s);
        setBrightness(hsv.v);
        setHexInput(color);
        setRgbInput(rgb);
        setHsvInput(hsv);
        setHslInput(hsl);

        const info: ColorInfo = {
          color,
          hex: color,
          rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
          rgba: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`,
          hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
          hsv: `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`,
          alpha,
          rgbObject: rgb,
          hsvObject: hsv,
          hslObject: hsl,
        };
        triggerChange(info);
      }
    },
    [alpha, triggerChange]
  );

  // ─── 清空颜色 ───
  const handleClear = useCallback(() => {
    if (!isControlled) {
      setInternalValue("");
    }
    onClear?.();
  }, [isControlled, onClear]);

  // ─── 面板鼠标事件 ───
  const handlePanelMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!panelRef.current) return;

      const updatePosition = (clientX: number, clientY: number) => {
        const rect = panelRef.current!.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
        handlePanelChange(x * 100, (1 - y) * 100);
      };

      updatePosition(e.clientX, e.clientY);

      const handleMouseMove = (e: MouseEvent) => {
        updatePosition(e.clientX, e.clientY);
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [handlePanelChange]
  );

  // ─── 色相滑块事件 ───
  const handleHueSliderMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!hueSliderRef.current) return;

      const updateHue = (clientX: number) => {
        const rect = hueSliderRef.current!.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        handleHueChange(x * 360);
      };

      updateHue(e.clientX);

      const handleMouseMove = (e: MouseEvent) => {
        updateHue(e.clientX);
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [handleHueChange]
  );

  // ─── 透明度滑块事件 ───
  const handleAlphaSliderMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!alphaSliderRef.current) return;

      const updateAlpha = (clientX: number) => {
        const rect = alphaSliderRef.current!.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        handleAlphaChange(x);
      };

      updateAlpha(e.clientX);

      const handleMouseMove = (e: MouseEvent) => {
        updateAlpha(e.clientX);
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [handleAlphaChange]
  );

  // ─── 类名计算 ───
  const rootClassName = useMemo(() => {
    const classes = ["land-color-picker"];
    if (size && size !== "default") classes.push(`land-color-picker--${size}`);
    if (disabled) classes.push("land-color-picker--disabled");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [size, disabled, className]);

  // ─── 面板背景样式 ───
  const panelBgStyle = useMemo(() => {
    const rgb = ColorUtils.hsvToRgb(hue, 100, 100);
    const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
    return { backgroundColor: hex };
  }, [hue]);

  // ─── 透明度滑块背景 ───
  const alphaSliderStyle = useMemo(() => {
    const rgb = ColorUtils.hsvToRgb(hue, saturation, brightness);
    const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);
    return {
      background: `linear-gradient(to right, transparent 0%, ${hex} 100%)`,
    };
  }, [hue, saturation, brightness]);

  // ─── 触发器样式 ───
  const triggerStyles = useMemo(
    () => ({
      width: triggerWidth,
      height: triggerHeight,
      backgroundColor: colorInfo.rgba,
      ...triggerStyle,
    }),
    [triggerWidth, triggerHeight, colorInfo.rgba, triggerStyle]
  );

  // ─── 渲染触发器 ───
  const renderTrigger = useCallback(() => {
    if (trigger === "custom" && children) {
      return children;
    }

    if (trigger === "input") {
      return (
        <div className={`land-color-picker__trigger-input ${triggerClassName || ""}`}>
          <div
            className="land-color-picker__trigger-preview"
            style={{ backgroundColor: colorInfo.rgba }}
          />
          <span className="land-color-picker__trigger-value">{colorInfo.hex}</span>
        </div>
      );
    }

    return (
      <div
        className={`land-color-picker__trigger ${triggerClassName || ""}`}
        style={triggerStyles}
      />
    );
  }, [trigger, children, triggerClassName, colorInfo, triggerStyles]);

  // ─── 渲染颜色输入 ───
  const renderColorInputs = useCallback(() => {
    if (!showInput) return null;

    return (
      <div className="land-color-picker__inputs">
        {showFormatSwitch && (
          <Select
            variant="transparent"
            options={COLOR_FORMAT_OPTIONS}
            onChange={(_, option) => handleFormatChange(option.key as ColorFormat)}
            value={format}
            placeholder="格式"
          />
        )}
        <div className="land-color-picker__input-values">
          {format === "hex" && (
            <Input
              prefix="#"
              value={hexInput.replace("#", "")}
              onChange={handleHexInputChange}
            />
          )}
          {format === "rgb" && (
            <>
              <NumberInput
                width={48}
                placeholder="R"
                value={rgbInput.r}
                onChange={(v) => handleRgbInputChange("r", v)}
                min={0}
                max={255}
                stepperPosition="none"
              />
              <NumberInput
                width={48}
                placeholder="G"
                value={rgbInput.g}
                onChange={(v) => handleRgbInputChange("g", v)}
                min={0}
                max={255}
                stepperPosition="none"
              />
              <NumberInput
                width={48}
                placeholder="B"
                value={rgbInput.b}
                onChange={(v) => handleRgbInputChange("b", v)}
                min={0}
                max={255}
                stepperPosition="none"
              />
            </>
          )}
          {format === "hsv" && (
            <>
              <NumberInput
                width={48}
                placeholder="H"
                value={hsvInput.h}
                onChange={(v) => handleHsvInputChange("h", v)}
                min={0}
                max={360}
                stepperPosition="none"
              />
              <NumberInput
                width={48}
                placeholder="S"
                value={hsvInput.s}
                onChange={(v) => handleHsvInputChange("s", v)}
                min={0}
                max={100}
                stepperPosition="none"
              />
              <NumberInput
                width={48}
                placeholder="V"
                value={hsvInput.v}
                onChange={(v) => handleHsvInputChange("v", v)}
                min={0}
                max={100}
                stepperPosition="none"
              />
            </>
          )}
          {format === "hsl" && (
            <>
              <NumberInput
                width={48}
                placeholder="H"
                value={hslInput.h}
                onChange={(v) => handleHslInputChange("h", v)}
                min={0}
                max={360}
                stepperPosition="none"
              />
              <NumberInput
                width={48}
                placeholder="S"
                value={hslInput.s}
                onChange={(v) => handleHslInputChange("s", v)}
                min={0}
                max={100}
                stepperPosition="none"
              />
              <NumberInput
                width={48}
                placeholder="L"
                value={hslInput.l}
                onChange={(v) => handleHslInputChange("l", v)}
                min={0}
                max={100}
                stepperPosition="none"
              />
            </>
          )}
        </div>
        {showAlpha && (
          <NumberInput
            width={56}
            value={Math.round(alpha * 100)}
            onChange={(v) => handleAlphaChange(Math.max(0, Math.min(100, Math.round(v))) / 100)}
            min={0}
            max={100}
            suffix="%"
            stepperPosition="none"
          />
        )}
      </div>
    );
  }, [
    showInput,
    showFormatSwitch,
    format,
    hexInput,
    rgbInput,
    hsvInput,
    hslInput,
    alpha,
    showAlpha,
    handleFormatChange,
    handleHexInputChange,
    handleRgbInputChange,
    handleHsvInputChange,
    handleHslInputChange,
    handleAlphaChange,
  ]);

  // ─── 渲染预设颜色 ───
  const renderPresets = useCallback(() => {
    const colors = presets || defaultPresetColors;
    if (!colors || colors.length === 0) return null;

    return (
      <div className="land-color-picker__presets">
        {colors.map((color, index) => (
          <div
            key={`${color}-${index}`}
            className={`land-color-picker__preset-item ${
              color.toLowerCase() === colorInfo.hex.toLowerCase()
                ? "land-color-picker__preset-item--active"
                : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handlePresetClick(color)}
            title={color}
          />
        ))}
      </div>
    );
  }, [presets, colorInfo.hex, handlePresetClick]);

  // ─── 渲染面板 ───
  const renderPanel = useCallback(
    () => (
      <div
        className={`land-color-picker__panel ${panelClassName || ""}`}
        style={{ width: panelWidth, ...panelStyle }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 颜色面板 */}
        <div
          ref={panelRef}
          className="land-color-picker__color-area"
          style={{ ...panelBgStyle, height: panelHeight }}
          onMouseDown={handlePanelMouseDown}
        >
          <div className="land-color-picker__color-area-white" />
          <div className="land-color-picker__color-area-black" />
          <div
            className="land-color-picker__pointer"
            style={{
              left: `${saturation}%`,
              top: `${100 - brightness}%`,
            }}
          />
        </div>

        {/* 滑块 */}
        <div className="land-color-picker__sliders">
          {/* 色相滑块 */}
          <div
            ref={hueSliderRef}
            className="land-color-picker__slider land-color-picker__slider--hue"
            onMouseDown={handleHueSliderMouseDown}
          >
            <div className="land-color-picker__slider-track" />
            <div
              className="land-color-picker__slider-thumb"
              style={{ left: `${(hue / 360) * 100}%` }}
            />
          </div>

          {/* 透明度滑块 */}
          {showAlpha && (
            <div
              ref={alphaSliderRef}
              className="land-color-picker__slider land-color-picker__slider--alpha"
              onMouseDown={handleAlphaSliderMouseDown}
            >
              <div className="land-color-picker__slider-track land-color-picker__slider-track--checker" />
              <div
                className="land-color-picker__slider-track"
                style={alphaSliderStyle}
              />
              <div
                className="land-color-picker__slider-thumb"
                style={{ left: `${alpha * 100}%` }}
              />
            </div>
          )}
        </div>

        {/* 颜色输入 */}
        {renderColorInputs()}

        {/* 预设颜色 */}
        {renderPresets()}

        {/* 清空按钮 */}
        {allowClear && (
          <button
            type="button"
            className="land-color-picker__clear"
            onClick={handleClear}
          >
            <Icon name="close" size={12} />
            清空
          </button>
        )}
      </div>
    ),
    [
      panelClassName,
      panelWidth,
      panelStyle,
      panelBgStyle,
      panelHeight,
      saturation,
      brightness,
      hue,
      showAlpha,
      alpha,
      alphaSliderStyle,
      allowClear,
      handlePanelMouseDown,
      handleHueSliderMouseDown,
      handleAlphaSliderMouseDown,
      handleClear,
      renderColorInputs,
      renderPresets,
    ]
  );

  // ─── 主渲染 ───
  return (
    <div className={rootClassName} style={style} data-name={name}>
      <Dropdown
        trigger="click"
        disabled={disabled}
        content={renderPanel()}
        onOpen={() => {
          setIsOpen(true);
          onOpenChange?.(true);
        }}
        onClose={() => {
          setIsOpen(false);
          onOpenChange?.(false);
        }}
      >
        {renderTrigger()}
      </Dropdown>
    </div>
  );
};

export default ColorPicker;
