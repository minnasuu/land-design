// ============================================================================
// Statistic 组件
// @description 统计数值展示组件，支持多种动画效果
// @author Land Design System
// ============================================================================

import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import Icon from "../Icon";
import { motion, AnimatePresence } from "motion/react";
import { StatisticProps } from "./props";
import './index.scss';

const prefixCls = 'land-statistic';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 缓动函数
// ─────────────────────────────────────────────────────────────────────────────

const easingFunctions = {
  linear: (t: number) => t,
  easeIn: (t: number) => t * t,
  easeOut: (t: number) => 1 - Math.pow(1 - t, 2),
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
  bounce: (t: number) => {
    if (t < 1 / 2.75) return 7.5625 * t * t;
    if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  elastic: (t: number) => {
    const p = 0.3;
    return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件实现
// ─────────────────────────────────────────────────────────────────────────────

const Statistic: React.FC<StatisticProps> = ({
  value = 0,
  prefix,
  suffix,
  unit,
  trendIcon,
  animation = "none",
  animationConfig = {},
  precision = 0,
  style,
  className,
}) => {
  const [displayValue, setDisplayValue] = useState<string>("");
  const [animate, setAnimate] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const innerTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const previousValueRef = useRef<number>(value);
  const isMountedRef = useRef(true);

  // 默认动画配置
  const defaultConfig = {
    duration: 1000,
    easing: "easeOut" as const,
    delay: 0,
    loop: false,
    loopInterval: 2000,
  };

  const config = { ...defaultConfig, ...animationConfig };

  // 格式化数值
  const formatValue = useCallback((val: number) => {
    if (precision > 0) {
      return val.toFixed(precision);
    }
    return Math.floor(val).toString();
  }, [precision]);

  // 清理动画帧
  const clearAnimationFrame = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  // 清理定时器
  const clearTimeoutRef = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // 清理循环定时器
  const clearLoopTimeoutRef = useCallback(() => {
    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = null;
    }
  }, []);

  // 清理内部定时器
  const clearInnerTimeoutRef = useCallback(() => {
    if (innerTimeoutRef.current) {
      clearTimeout(innerTimeoutRef.current);
      innerTimeoutRef.current = null;
    }
  }, []);

  // 数字增长/减少动画
  const runNumberAnimation = useCallback((startValue: number, endValue: number, duration: number, easing: keyof typeof easingFunctions) => {
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;
    let currentFrame = 0;

    const easingFunc = easingFunctions[easing];

    const updateNumber = () => {
      if (!isMountedRef.current) return;
      
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const easedProgress = easingFunc(progress);
      const currentValue = startValue + (endValue - startValue) * easedProgress;

      setDisplayValue(formatValue(currentValue));

      if (currentFrame < totalFrames) {
        animationFrameRef.current = requestAnimationFrame(updateNumber);
      } else {
        setDisplayValue(formatValue(endValue));
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateNumber);
  }, [formatValue]);

  // 处理不同动画类型
  useEffect(() => {
    if (animation === "none") {
      setDisplayValue(formatValue(value));
      return;
    }

    // 延迟执行动画
    timeoutRef.current = setTimeout(() => {
      if (!isMountedRef.current) return;
      
      switch (animation) {
        case "increase":
          runNumberAnimation(0, value, config.duration, config.easing);
          break;
        case "decrease":
          runNumberAnimation(value * 1.5, value, config.duration, config.easing);
          break;
        case "bounce":
          setDisplayValue(formatValue(value));
          setAnimate(true);
          break;
        case "fade":
        case "slide":
        case "scale":
        case "flip":
          setDisplayValue(formatValue(value));
          setAnimate(true);
          break;
        case "random":
          setDisplayValue(formatValue(value));
          setAnimate(true);
          break;
        default:
          setDisplayValue(formatValue(value));
      }
    }, config.delay);

    return () => {
      clearTimeoutRef();
      clearAnimationFrame();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animation, value, config.delay, config.duration, config.easing]);

  // 循环动画
  useEffect(() => {
    if (!config.loop || animation === "none") return;

    const loopAnimation = () => {
      loopTimeoutRef.current = setTimeout(() => {
        if (!isMountedRef.current) return;
        
        setAnimate(false);
        innerTimeoutRef.current = setTimeout(() => {
          if (!isMountedRef.current) return;
          setAnimate(true);
        }, 100);
        loopAnimation();
      }, config.loopInterval);
    };

    if (animate) {
      loopAnimation();
    }

    return () => {
      clearLoopTimeoutRef();
      clearInnerTimeoutRef();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.loop, config.loopInterval, animate, animation]);

  // 组件卸载时清理
  useEffect(() => {
    isMountedRef.current = true;
    
    return () => {
      isMountedRef.current = false;
      clearAnimationFrame();
      clearTimeoutRef();
      clearLoopTimeoutRef();
      clearInnerTimeoutRef();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 数值变化检测
  useEffect(() => {
    if (previousValueRef.current !== value && animation !== "none") {
      setAnimate(false);
      innerTimeoutRef.current = setTimeout(() => {
        if (!isMountedRef.current) return;
        setAnimate(true);
      }, 50);
    }
    previousValueRef.current = value;
    
    return () => {
      clearInnerTimeoutRef();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, animation]);

  // ─── 生成数字数组用于随机动画 ───
  const valueArray = useMemo(() => {
    const formattedValue = formatValue(value);
    return formattedValue.split('').map(char => {
      if (char === '.') return '.';
      if (char === '-') return '-';
      return parseInt(char, 10);
    });
  }, [value, formatValue]);

  // ─── 动画变体 ───
  const animationVariants = useMemo(() => ({
    bounce: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { 
        scale: [0.8, 1.2, 1], 
        opacity: [0, 1, 1],
        transition: { 
          duration: 0.6, 
          times: [0, 0.6, 1],
          ease: "easeOut" as const
        }
      }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { 
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" as const }
      }
    },
    slide: {
      initial: { x: -20, opacity: 0 },
      animate: { 
        x: 0, 
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" as const }
      }
    },
    scale: {
      initial: { scale: 0.5, opacity: 0 },
      animate: { 
        scale: 1, 
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" as const }
      }
    },
    flip: {
      initial: { rotateX: -90, opacity: 0 },
      animate: { 
        rotateX: 0, 
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" as const }
      }
    }
  }), []);

  // ─── 获取动画变体 ───
  const getAnimationVariant = useCallback(() => {
    if (animation === "bounce") return animationVariants.bounce;
    if (animation === "fade") return animationVariants.fade;
    if (animation === "slide") return animationVariants.slide;
    if (animation === "scale") return animationVariants.scale;
    if (animation === "flip") return animationVariants.flip;
    return animationVariants.fade;
  }, [animation, animationVariants]);

  // ─── 根容器类名 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      animate && `${prefixCls}--animating`,
      className,
    ].filter(Boolean).join(' ');
  }, [animate, className]);

  // ─────────────────────────────────────────────────────────────────────────────
  // SECTION: 渲染
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className={rootClassName} style={style}>
      {/* 前缀 */}
      {prefix && <div className={`${prefixCls}__prefix`}>{prefix}</div>}
      
      {/* 数值区域 */}
      <div className={`${prefixCls}__value`}>
        <AnimatePresence mode="wait">
          {animation === "random" ? (
            <div className={`${prefixCls}__random-wrapper`} key="random">
              {valueArray.map((digit, idx) => (
                <div
                  className={`${prefixCls}__random-digit`}
                  key={`digit-${idx}-${digit}`}
                  style={{ height: "45px" }}
                >
                  <motion.div
                    animate={{ y: animate ? -Number(digit) * 45 : 0 }}
                    transition={{ 
                      duration: 1.2, 
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    className={`${prefixCls}__random-list`}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                      <div key={num}>{num}</div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          ) : animation !== "none" && (animation === "increase" || animation === "decrease") ? (
            <motion.div
              key="number-animation"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {displayValue}
            </motion.div>
          ) : animation !== "none" ? (
            <motion.div
              key={`${animation}-${value}`}
              initial={getAnimationVariant().initial}
              animate={animate ? getAnimationVariant().animate : getAnimationVariant().initial}
              exit={getAnimationVariant().initial}
            >
              {displayValue}
            </motion.div>
          ) : (
            <motion.div
              key="static"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {displayValue}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* 单位 */}
        {unit && (
          <motion.div 
            className={`${prefixCls}__unit`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {unit}
          </motion.div>
        )}
      </div>

      {/* 趋势图标 */}
      {trendIcon && (
        <motion.div 
          className={`${prefixCls}__trend-icon`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {trendIcon === "up" && (
            <Icon
              name="increase"
              strokeWidth={0}
              color="var(--color-success)"
            />
          )}
          {trendIcon === "down" && (
            <Icon
              name="increase"
              style={{ transform: "rotate(180deg)" }}
              strokeWidth={0}
              color="var(--color-error)"
            />
          )}
          {trendIcon === "default" && (
            <Icon
              name="increase"
              strokeWidth={0}
              color="var(--color-text-secondary)"
            />
          )}
        </motion.div>
      )}
      
      {/* 后缀 */}
      {suffix && (
        <motion.div 
          className={`${prefixCls}__suffix`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {suffix}
        </motion.div>
      )}
    </div>
  );
};

export default Statistic;

