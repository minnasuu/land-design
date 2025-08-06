import React, { CSSProperties, useEffect, useState } from 'react'
import Header from '../../packages/Header';
import { ClickType, MenuItemType } from '../../packages/Menu/props';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Switch from '../../packages/Switch';

// 防抖函数
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

type Props = {
  active?: string;
  children?: React.ReactNode;
  menuData?: MenuItemType[];
}
const ComponentLayout: React.FC<Props> = ({
  active,
  children,
  menuData = [
    {
      key: 'base-component',
      label: "基础组件",
      clickType: ClickType.SELF,
      href: '/base-component'
    },
    {
      key: 'pro-component',
      label: "进阶组件",
      clickType: ClickType.SELF,
      href: '/pro-component'
    },
  ]
}) => {
  const [page, setPage] = useState<string>(active || 'base-component');
  const navigate = useNavigate();

  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);
  return (
    <div className="flex flex-col bg-bg-primary text-text-primary transition-colors duration-300" style={{ height: "100vh", width: "100vw" }}>
      <Header
        borderBottom
        height='48px'
        logo={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 80 80" fill="none">
          <path d="M34 16C35.1046 16 36 16.8954 36 18V42C36 43.1046 36.8954 44 38 44H61C62.6569 44 64 45.3431 64 47V61C64 62.6569 62.6569 64 61 64H24C19.5817 64 16 60.4183 16 56V19C16 17.3431 17.3431 16 19 16H34ZM56 16C60.4183 16 64 19.5817 64 24V37C64 38.6569 62.6569 40 61 40H43C41.3431 40 40 38.6569 40 37V19C40 17.3431 41.3431 16 43 16H56Z" fill="currentColor" />
        </svg>}
        name='Land Design Seeds'
        onLogoClick={() => navigate('/components')}
        menuProps={{
          data: menuData,
          active: page,
          onChange: (item) => {
            setPage(item.key);
            navigate(item.href ?? '/')
          },
          style: {
            '--land-menu-title-font-size': '12px'
          } as CSSProperties
        }}
        align="end"
        rightComponent={<Switch checked={dark} onChange={() => setDark(!dark)} />}
      />
      <motion.div
        layout
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex" style={{ flex: 1, height: "1%", width: "100vw" }}>
        {children}
      </motion.div>
    </div>
  )
}

export default ComponentLayout;