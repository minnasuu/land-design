import React from "react";
import "./index.scss";
import { ColorPickerProps } from "./props";
import Dropdown from "../Dropdown";

import {
  COLOR_MODE_OPTIONS,
  DEFAULT_COLOR,
  DEFAULT_COLOR_MODE,
  DEFAULT_HSV,
} from "./constants";
import { useMemo, useEffect, useRef } from "react";
import { AlphaSlider, ColorPanel, HueSlider } from "./components";
import Select from "../Select";
import { useState } from "react";
import { useCallback } from "react";
import Input from "../Input";
import NumberInput from "../NumberInput";
import { ColorUtils } from "./utils/ColorUtils";

const ColorPicker: React.FC<ColorPickerProps> = ({
  color = DEFAULT_COLOR,
  onChange,
  style,
  className = "",
  disabled,
}) => {
  const [colorMode, setColorMode] = useState<string>(DEFAULT_COLOR_MODE);
  const [hue, setHue] = useState<number>(DEFAULT_HSV.h);
  const [alpha, setAlpha] = useState<number>(1);
  const [inputHexValue, setInputHexValue] = useState<string>("");
  const [inputRgbValue, setInputRgbValue] = useState<{
    r: number;
    g: number;
    b: number;
  }>({ r: 0, g: 0, b: 0 });
  const [inputHsvValue, setInputHsvValue] = useState<{
    h: number;
    s: number;
    v: number;
  }>(DEFAULT_HSV);
  const [inputHslValue, setInputHslValue] = useState<{
    h: number;
    s: number;
    l: number;
  }>({ h: 0, s: 0, l: 0 });

  const [PanelPercentage, setPanelPercentage] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  // 使用ref来跟踪是否是初始化
  const isInitialized = useRef(false);
  const lastColorRef = useRef<string>("");

  // 计算当前颜色值
  const currentColor = useMemo(() => {
    // 根据当前colorMode返回对应格式的颜色值
    switch (colorMode) {
      case "hex":
        return inputHexValue || "#000000";
      case "rgb":
        return `rgb(${inputRgbValue.r}, ${inputRgbValue.g}, ${inputRgbValue.b})`;
      case "hsv":
        return `hsv(${inputHsvValue.h}, ${inputHsvValue.s}%, ${inputHsvValue.v}%)`;
      case "hsl":
        return `hsl(${inputHslValue.h}, ${inputHslValue.s}%, ${inputHslValue.l}%)`;
      default:
        return "#000000";
    }
  }, [colorMode, inputHexValue, inputRgbValue, inputHsvValue, inputHslValue]);

  // 计算hex颜色值
  const hexColor = useMemo(() => {
    switch (colorMode) {
      case "hex":
        return inputHexValue || "#000000";
      case "rgb":
        return ColorUtils.rgbToHex(
          inputRgbValue.r,
          inputRgbValue.g,
          inputRgbValue.b
        );
      case "hsv":
        const hsvRgb = ColorUtils.hsvToRgb(
          inputHsvValue.h,
          inputHsvValue.s,
          inputHsvValue.v
        );
        return ColorUtils.rgbToHex(hsvRgb.r, hsvRgb.g, hsvRgb.b);
      case "hsl":
        const hslRgb = ColorUtils.hslToRgb(
          inputHslValue.h,
          inputHslValue.s,
          inputHslValue.l
        );
        return ColorUtils.rgbToHex(hslRgb.r, hslRgb.g, hslRgb.b);
      default:
        return "#000000";
    }
  }, [colorMode, inputHexValue, inputRgbValue, inputHsvValue, inputHslValue]);

  // 计算rgba颜色值
  const rgbaColor = useMemo(() => {
    const rgb = ColorUtils.hexToRgb(hexColor);
    if (rgb) {
      // 使用0-1之间的小数值，符合CSS rgba标准
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
    }
    return `rgba(0, 0, 0, ${alpha})`;
  }, [hexColor, alpha]);

  // 更新displayStyle
  const displayStyle = useMemo(
    () => ({
      background: rgbaColor,
      ...style,
    }),
    [rgbaColor, style]
  );

  // 初始化颜色值
  useEffect(() => {
    if (color && color !== DEFAULT_COLOR && !isInitialized.current) {
      const rgb = ColorUtils.hexToRgb(color);
      if (rgb) {
        const hsv = ColorUtils.rgbToHsv(rgb.r, rgb.g, rgb.b);
        const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);

        setInputHexValue(color);
        setInputRgbValue(rgb);
        setInputHsvValue(hsv);
        setInputHslValue(hsl);
        setHue(hsv.h);
        isInitialized.current = true;
        // 初始化时不设置lastColorRef，让第一次triggerOnChange能够正常触发
      }
    } else if (!isInitialized.current) {
      // 如果没有传入颜色或使用默认颜色，设置一个合适的默认hue值
      // 使用灰色对应的hue值（0度，但饱和度为0）
      setHue(0);
      setInputHsvValue({ h: 0, s: 0, v: 50 }); // 灰色
      setInputHslValue({ h: 0, s: 0, l: 50 }); // 灰色
      setInputRgbValue({ r: 128, g: 128, b: 128 }); // 灰色
      setInputHexValue("#808080"); // 灰色
      isInitialized.current = true;
      // 初始化时不设置lastColorRef，让第一次triggerOnChange能够正常触发
    }
  }, [color]);

  // 触发onChange事件 - 只在颜色真正变化时触发
  const triggerOnChange = useCallback(() => {
    const currentColorString = `${currentColor}-${hexColor}-${rgbaColor}`;
    if (currentColorString !== lastColorRef.current) {
      lastColorRef.current = currentColorString;
      onChange?.(currentColor, hexColor, rgbaColor);
    }
  }, [onChange, currentColor, hexColor, rgbaColor]);

  // 使用useEffect来触发onChange，但只在组件挂载后且颜色变化时
  useEffect(() => {
    if (isInitialized.current) {
      triggerOnChange();
    }
  }, [currentColor, hexColor, rgbaColor, triggerOnChange]);

  const handlePanelChange = useCallback(
    (x: number, y: number) => {
      setPanelPercentage({ x, y });
      // 根据面板位置计算HSV值
      const s = x * 100;
      const v = y * 100;
      const newHsv = { h: hue, s, v };
      setInputHsvValue(newHsv);

      // 同步更新其他格式
      const rgb = ColorUtils.hsvToRgb(hue, s, v);
      const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);
      const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);

      setInputRgbValue(rgb);
      setInputHslValue(hsl);
      setInputHexValue(hex);
    },
    [hue]
  );

  const handleHueChange = (newHue: number) => {
    setHue(newHue);
    // 更新HSV值
    const newHsv = { ...inputHsvValue, h: newHue };
    setInputHsvValue(newHsv);

    // 同步更新其他格式
    const rgb = ColorUtils.hsvToRgb(newHue, newHsv.s, newHsv.v);
    const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);
    const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);

    setInputRgbValue(rgb);
    setInputHslValue(hsl);
    setInputHexValue(hex);
  };

  const handleAlphaChange = (newAlpha: number) => {
    setAlpha(newAlpha);
  };

  // 处理输入值变化
  const handleHexChange = (value: string) => {
    // 移除#号并转换为大写
    let cleanValue = value.replace("#", "").toUpperCase();

    // 限制长度为6位
    if (cleanValue.length > 6) {
      cleanValue = cleanValue.slice(0, 6);
    }

    // 只允许十六进制字符
    cleanValue = cleanValue.replace(/[^0-9A-F]/g, "");

    // 内部存储时添加#前缀
    const internalValue = cleanValue.length > 0 ? `#${cleanValue}` : "#";
    setInputHexValue(internalValue);

    // 如果输入完整的6位十六进制，进行颜色转换
    if (cleanValue.length === 6) {
      const rgb = ColorUtils.hexToRgb(internalValue);
      if (rgb) {
        const hsv = ColorUtils.rgbToHsv(rgb.r, rgb.g, rgb.b);
        const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);

        setInputRgbValue(rgb);
        setInputHsvValue(hsv);
        setInputHslValue(hsl);
        setHue(hsv.h);
      }
    }
  };

  const handleRgbChange = (field: "r" | "g" | "b", value: number) => {
    // 确保RGB值在0-255范围内
    const clampedValue = Math.max(0, Math.min(255, Math.round(value)));
    const newRgb = { ...inputRgbValue, [field]: clampedValue };
    setInputRgbValue(newRgb);

    const hsv = ColorUtils.rgbToHsv(newRgb.r, newRgb.g, newRgb.b);
    const hsl = ColorUtils.rgbToHsl(newRgb.r, newRgb.g, newRgb.b);
    const hex = ColorUtils.rgbToHex(newRgb.r, newRgb.g, newRgb.b);

    setInputHsvValue(hsv);
    setInputHslValue(hsl);
    setInputHexValue(hex);
    setHue(hsv.h);
  };

  const handleHsvChange = (field: "h" | "s" | "v", value: number) => {
    let clampedValue = value;

    // 根据字段类型进行范围限制
    if (field === "h") {
      // H值范围：0-360，支持循环
      clampedValue = ((value % 360) + 360) % 360;
    } else {
      // S和V值范围：0-100
      clampedValue = Math.max(0, Math.min(100, Math.round(value)));
    }

    const newHsv = { ...inputHsvValue, [field]: clampedValue };
    setInputHsvValue(newHsv);

    const rgb = ColorUtils.hsvToRgb(newHsv.h, newHsv.s, newHsv.v);
    const hsl = ColorUtils.rgbToHsl(rgb.r, rgb.g, rgb.b);
    const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);

    setInputRgbValue(rgb);
    setInputHslValue(hsl);
    setInputHexValue(hex);
    setHue(newHsv.h);
  };

  const handleHslChange = (field: "h" | "s" | "l", value: number) => {
    let clampedValue = value;

    // 根据字段类型进行范围限制
    if (field === "h") {
      // H值范围：0-360，支持循环
      clampedValue = ((value % 360) + 360) % 360;
    } else {
      // S和L值范围：0-100
      clampedValue = Math.max(0, Math.min(100, Math.round(value)));
    }

    const newHsl = { ...inputHslValue, [field]: clampedValue };
    setInputHslValue(newHsl);

    const rgb = ColorUtils.hslToRgb(newHsl.h, newHsl.s, newHsl.l);
    const hsv = ColorUtils.rgbToHsv(rgb.r, rgb.g, rgb.b);
    const hex = ColorUtils.rgbToHex(rgb.r, rgb.g, rgb.b);

    setInputRgbValue(rgb);
    setInputHsvValue(hsv);
    setInputHexValue(hex);
    setHue(newHsl.h);
  };

  return (
    <div
      className={`land-color-picker ${disabled ? "disabled" : ""} ${className}`}
    >
      <Dropdown
        trigger="click"
        disabled={disabled}
        dropContent={
          <div
            className="land-color-picker-drop-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <ColorPanel hue={hue} onPanelChange={handlePanelChange} />
            <div className="land-color-picker-panel-move-sliders">
              <HueSlider
                hue={hue}
                onHueChange={(hue) => handleHueChange(hue)}
              />
              <AlphaSlider
                hue={hue}
                alpha={alpha}
                onAlphaChange={handleAlphaChange}
              />
            </div>
            <div className="land-color-picker-panel-color-mode">
              <Select
                type="transparent"
                data={COLOR_MODE_OPTIONS}
                onChange={(item) => setColorMode(item.key)}
                selected={colorMode}
                placeholder="选择模式"
              />
              <div className="land-color-picker-panel-color-input">
                <div className="land-color-picker-panel-color-input-numbers">
                  {colorMode === "hex" && (
                    <Input
                      prefix="#"
                      value={inputHexValue.replace("#", "")}
                      onChange={(value) => handleHexChange(value)}
                    />
                  )}
                  {colorMode === "rgb" && (
                    <>
                      <NumberInput
                        width={48}
                        placeholder="R"
                        value={inputRgbValue.r}
                        onChange={(value) => handleRgbChange("r", value)}
                        min={0}
                        max={255}
                        step={1}
                        hideArrowButton
                        textAlign="center"
                      />
                      <NumberInput
                        width={48}
                        placeholder="G"
                        value={inputRgbValue.g}
                        onChange={(value) => handleRgbChange("g", value)}
                        min={0}
                        max={255}
                        step={1}
                        hideArrowButton
                        textAlign="center"
                      />
                      <NumberInput
                        width={48}
                        placeholder="B"
                        value={inputRgbValue.b}
                        onChange={(value) => handleRgbChange("b", value)}
                        min={0}
                        max={255}
                        step={1}
                        hideArrowButton
                        textAlign="center"
                      />
                    </>
                  )}
                  {colorMode === "hsv" && (
                    <>
                      <NumberInput
                        width={48}
                        placeholder="H"
                        value={inputHsvValue.h}
                        onChange={(value) => handleHsvChange("h", value)}
                        min={0}
                        max={360}
                        step={1}
                        hideArrowButton
                        textAlign="center"
                      />
                      <NumberInput
                        width={48}
                        placeholder="S"
                        value={inputHsvValue.s}
                        onChange={(value) => handleHsvChange("s", value)}
                        min={0}
                        max={100}
                        step={1}
                        hideArrowButton
                        textAlign="center"
                      />
                      <NumberInput
                        width={48}
                        placeholder="V"
                        value={inputHsvValue.v}
                        onChange={(value) => handleHsvChange("v", value)}
                        min={0}
                        max={100}
                        step={1}
                        hideArrowButton
                        textAlign="center"
                      />
                    </>
                  )}
                  {colorMode === "hsl" && (
                    <>
                      <NumberInput
                        width={48}
                        placeholder="H"
                        value={inputHslValue.h}
                        onChange={(value) => handleHslChange("h", value)}
                        min={0}
                        max={360}
                        step={1}
                        hideArrowButton
                        textAlign="center"
                      />
                      <NumberInput
                        width={48}
                        placeholder="S"
                        value={inputHslValue.s}
                        onChange={(value) => handleHslChange("s", value)}
                        min={0}
                        max={100}
                        step={1}
                        hideArrowButton
                        textAlign="center"
                      />
                      <NumberInput
                        width={48}
                        placeholder="L"
                        value={inputHslValue.l}
                        onChange={(value) => handleHslChange("l", value)}
                        min={0}
                        max={100}
                        step={1}
                        hideArrowButton
                        textAlign="center"
                      />
                    </>
                  )}
                </div>
                <NumberInput
                  width={56}
                  value={Math.round(alpha * 100)}
                  onChange={(value) => {
                    // 确保alpha值在0-100范围内且为整数
                    const clampedValue = Math.max(
                      0,
                      Math.min(100, Math.round(value))
                    );
                    setAlpha(clampedValue / 100);
                  }}
                  min={0}
                  max={100}
                  step={1}
                  suffix="%"
                  hideArrowButton
                  style={{ flexShrink: 0 }}
                />
              </div>
            </div>
          </div>
        }
      >
        <div
          className={`land-picker-color-display ${className}`}
          style={displayStyle}
        />
      </Dropdown>
    </div>
  );
};

export default ColorPicker;