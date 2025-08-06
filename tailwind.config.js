/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./example/**/*.{js,ts,jsx,tsx}",
    "./packages/**/*.{js,ts,jsx,tsx}",
    "./pro-packages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 启用 class 策略的深色模式
  theme: {
    extend: {
      colors: {
        // 语义化颜色系统 - 自动适配深色模式
        // 文本颜色
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-tertiary': 'var(--color-text-tertiary)',
        'text-quaternary': 'var(--color-text-quaternary)',
        'text-disabled': 'var(--color-text-disabled)',
        
        // 背景颜色
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-tertiary': 'var(--color-bg-tertiary)',
        'bg-quaternary': 'var(--color-bg-quaternary)',
        'bg-disabled': 'var(--color-bg-disabled)',
        'bg-mask': 'var(--color-bg-mask)',
        'bg-opacity': 'var(--color-bg-opacity)',
        
        // 边框颜色
        'border-primary': 'var(--color-border-primary)',
        'border-secondary': 'var(--color-border-secondary)',
        'border-tertiary': 'var(--color-border-tertiary)',
        
        // 状态颜色
        'success': 'var(--color-success)',
        'success-light': 'var(--color-success-light)',
        'success-lighter': 'var(--color-success-lighter)',
        'success-dark': 'var(--color-success-dark)',
        'success-darker': 'var(--color-success-darker)',
        
        'warning': 'var(--color-warning)',
        'warning-light': 'var(--color-warning-light)',
        'warning-lighter': 'var(--color-warning-lighter)',
        'warning-dark': 'var(--color-warning-dark)',
        'warning-darker': 'var(--color-warning-darker)',
        
        'error': 'var(--color-error)',
        'error-light': 'var(--color-error-light)',
        'error-lighter': 'var(--color-error-lighter)',
        'error-dark': 'var(--color-error-dark)',
        'error-darker': 'var(--color-error-darker)',
        
        'link': 'var(--color-link)',
        'link-light': 'var(--color-link-light)',
        'link-lighter': 'var(--color-link-lighter)',
        'link-dark': 'var(--color-link-dark)',
        'link-darker': 'var(--color-link-darker)',
        
        // 主色调
        'primary': 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-lighter': 'var(--color-primary-lighter)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-darker': 'var(--color-primary-darker)',
        
        // 灰度色系统 - 自动适配深色模式
        'gray-primary': 'var(--color-gray-10)',
        'gray-secondary': 'var(--color-gray-8)',
        'gray-tertiary': 'var(--color-gray-6)',
        'gray-quaternary': 'var(--color-gray-4)',
        'gray-disabled': 'var(--color-gray-5)',
        'gray-light': 'var(--color-gray-2)',
        'gray-lighter': 'var(--color-gray-1)',
        'gray-dark': 'var(--color-gray-11)',
        'gray-darker': 'var(--color-gray-12)',
        
        // 保留原有的数字索引颜色（向后兼容）
        gray: {
          1: 'var(--color-gray-1)',
          2: 'var(--color-gray-2)',
          3: 'var(--color-gray-3)',
          4: 'var(--color-gray-4)',
          5: 'var(--color-gray-5)',
          6: 'var(--color-gray-6)',
          7: 'var(--color-gray-7)',
          8: 'var(--color-gray-8)',
          9: 'var(--color-gray-9)',
          10: 'var(--color-gray-10)',
          11: 'var(--color-gray-11)',
          12: 'var(--color-gray-12)',
        },
        primary: {
          1: 'var(--color-primary-1)',
          2: 'var(--color-primary-2)',
          3: 'var(--color-primary-3)',
          4: 'var(--color-primary-4)',
          5: 'var(--color-primary-5)',
          6: 'var(--color-primary-6)',
          7: 'var(--color-primary-7)',
          8: 'var(--color-primary-8)',
        },
        red: {
          1: 'var(--color-red-1)',
          2: 'var(--color-red-2)',
          3: 'var(--color-red-3)',
          4: 'var(--color-red-4)',
          5: 'var(--color-red-5)',
          6: 'var(--color-red-6)',
          7: 'var(--color-red-7)',
          8: 'var(--color-red-8)',
        },
        orange: {
          1: 'var(--color-orange-1)',
          2: 'var(--color-orange-2)',
          3: 'var(--color-orange-3)',
          4: 'var(--color-orange-4)',
          5: 'var(--color-orange-5)',
          6: 'var(--color-orange-6)',
          7: 'var(--color-orange-7)',
          8: 'var(--color-orange-8)',
        },
        green: {
          1: 'var(--color-green-1)',
          2: 'var(--color-green-2)',
          3: 'var(--color-green-3)',
          4: 'var(--color-green-4)',
          5: 'var(--color-green-5)',
          6: 'var(--color-green-6)',
          7: 'var(--color-green-7)',
          8: 'var(--color-green-8)',
        },
        blue: {
          1: 'var(--color-blue-1)',
          2: 'var(--color-blue-2)',
          3: 'var(--color-blue-3)',
          4: 'var(--color-blue-4)',
          5: 'var(--color-blue-5)',
          6: 'var(--color-blue-6)',
          7: 'var(--color-blue-7)',
          8: 'var(--color-blue-8)',
        },
      },
      fontSize: {
        '10': 'var(--font-size-10)',
        '12': 'var(--font-size-12)',
        '14': 'var(--font-size-14)',
        '16': 'var(--font-size-16)',
        '20': 'var(--font-size-20)',
        '24': 'var(--font-size-24)',
        '28': 'var(--font-size-28)',
        '32': 'var(--font-size-32)',
        '36': 'var(--font-size-36)',
        '48': 'var(--font-size-48)',
        '64': 'var(--font-size-64)',
      },
      spacing: {
        '2': 'var(--spacing-2)',
        '4': 'var(--spacing-4)',
        '8': 'var(--spacing-8)',
        '12': 'var(--spacing-12)',
        '16': 'var(--spacing-16)',
        '20': 'var(--spacing-20)',
        '24': 'var(--spacing-24)',
        '32': 'var(--spacing-32)',
      },
      borderRadius: {
        '2': 'var(--radius-2)',
        '4': 'var(--radius-4)',
        '8': 'var(--radius-8)',
        '12': 'var(--radius-12)',
        '16': 'var(--radius-16)',
        '20': 'var(--radius-20)',
        '24': 'var(--radius-24)',
        '999': 'var(--radius-999)',
      },
      zIndex: {
        'min': 'var(--z-index-min)',
        '0': 'var(--z-index-0)',
        '1': 'var(--z-index-1)',
        '2': 'var(--z-index-2)',
        '3': 'var(--z-index-3)',
        '4': 'var(--z-index-4)',
        '5': 'var(--z-index-5)',
        '6': 'var(--z-index-6)',
        '7': 'var(--z-index-7)',
        '8': 'var(--z-index-8)',
        '9': 'var(--z-index-9)',
        '10': 'var(--z-index-10)',
        '100': 'var(--z-index-100)',
        '1000': 'var(--z-index-1000)',
        '1024': 'var(--z-index-1024)',
        '1025': 'var(--z-index-1025)',
      },
      transitionDuration: {
        's': 'var(--transition-s)',
        'm': 'var(--transition-m)',
        'l': 'var(--transition-l)',
        'xl': 'var(--transition-xl)',
      },
      boxShadow: {
        's': 'var(--shadow-s)',
        'm': 'var(--shadow-m)',
        'l': 'var(--shadow-l)',
        'card': 'var(--shadow-card)',
        'dropdown': 'var(--shadow-dropdown)',
        'modal': 'var(--shadow-modal)',
        'tooltip': 'var(--shadow-tooltip)',
      },
      backdropBlur: {
        's': 'var(--blur-s)',
        'm': 'var(--blur-m)',
        'l': 'var(--blur-l)',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
    },
  },
  plugins: [
    // 添加自定义工具类
    function({ addUtilities, theme }) {
      const newUtilities = {
        // 自定义语义化工具类
        '.text-content-xs': { fontSize: theme('fontSize.10') },
        '.text-content-s': { fontSize: theme('fontSize.12') },
        '.text-content-m': { fontSize: theme('fontSize.14') },
        '.text-content-l': { fontSize: theme('fontSize.16') },
        
        '.text-title-xs': { fontSize: theme('fontSize.14') },
        '.text-title-s': { fontSize: theme('fontSize.16') },
        '.text-title-m': { fontSize: theme('fontSize.20') },
        '.text-title-l': { fontSize: theme('fontSize.24') },
        '.text-title-xl': { fontSize: theme('fontSize.28') },
        
        '.text-slogan-xs': { fontSize: theme('fontSize.32') },
        '.text-slogan-s': { fontSize: theme('fontSize.48') },
        '.text-slogan-m': { fontSize: theme('fontSize.64') },
        '.text-slogan-l': { fontSize: theme('fontSize.64') },
        
        // 自定义组件尺寸
        '.h-button-s': { height: '24px' },
        '.h-button-m': { height: '32px' },
        '.h-button-l': { height: '40px' },
        '.h-button-xl': { height: '48px' },
        
        '.h-input-s': { height: '24px' },
        '.h-input-m': { height: '32px' },
        '.h-input-l': { height: '40px' },
        '.h-input-xl': { height: '48px' },
        
        // 自定义状态透明度
        '.opacity-hover': { opacity: '0.8' },
        '.opacity-active': { opacity: '0.6' },
        '.opacity-disabled': { opacity: '0.6' },
        
        // 自定义加载尺寸
        '.w-loading-s': { width: '16px', height: '16px' },
        '.w-loading-m': { width: '24px', height: '24px' },
        '.w-loading-l': { width: '32px', height: '32px' },
        '.w-loading-xl': { width: '48px', height: '48px' },
        
        // 自定义进度条高度
        '.h-progress-s': { height: '4px' },
        '.h-progress-m': { height: '8px' },
        '.h-progress-l': { height: '12px' },
        '.h-progress-xl': { height: '16px' },
        
        // 自定义头像尺寸
        '.w-avatar-xs': { width: '24px', height: '24px' },
        '.w-avatar-s': { width: '32px', height: '32px' },
        '.w-avatar-m': { width: '40px', height: '40px' },
        '.w-avatar-l': { width: '48px', height: '48px' },
        '.w-avatar-xl': { width: '64px', height: '64px' },
        '.w-avatar-2xl': { width: '80px', height: '80px' },
        
        // 自定义标签尺寸
        '.h-tag-s': { height: '20px' },
        '.h-tag-m': { height: '24px' },
        '.h-tag-l': { height: '28px' },
        
        // 自定义徽章尺寸
        '.w-badge-s': { width: '16px', height: '16px' },
        '.w-badge-m': { width: '20px', height: '20px' },
        '.w-badge-l': { width: '24px', height: '24px' },
        
        // 自定义图标尺寸
        '.w-icon-s': { width: 'var(--icon-s)', height: 'var(--icon-s)' },
        '.w-icon-m': { width: 'var(--icon-m)', height: 'var(--icon-m)' },
        '.w-icon-l': { width: 'var(--icon-l)', height: 'var(--icon-l)' },
        '.w-icon-xl': { width: 'var(--icon-xl)', height: 'var(--icon-xl)' },
        
        // 自定义表格尺寸
        '.h-table-header': { height: '48px' },
        '.h-table-row': { height: '56px' },
        
        // 自定义导航尺寸
        '.h-nav': { height: '64px' },
        '.h-nav-item': { height: '40px' },
        
        // 自定义模态框尺寸
        '.h-modal-header': { height: '56px' },
        '.h-modal-footer': { height: '64px' },
        
        // 自定义分页尺寸
        '.h-pagination': { height: '32px' },
        '.w-pagination-item': { width: '32px' },
      }
      addUtilities(newUtilities)
    }
  ],
}

