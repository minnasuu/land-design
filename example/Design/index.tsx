import React, { useState } from 'react'
import Menu from '../../packages/Menu'
import Colors from './Colors';
import Principles from './Principles';
import Typography from './Typography';
import Shadows from './Shadows';
import Spacing from './Spacing';
import ComponentLayout from '../components/ComponentLayout';

export default function Design() {
  const [active, setActive] = useState<string>('1');

  const menuItems = [
    { key: '1', label: "Principles", subText: "设计原则" },
    { key: '2', label: "Colors", subText: "颜色系统" },
    { key: '3', label: "Typography", subText: "字体规范" },
    { key: '4', label: "Shadows", subText: "阴影系统" },
    { key: '5', label: "Spacing", subText: "间距规范" },
  ];

  const renderContent = () => {
    switch (active) {
      case '1':
        return <Principles />;
      case '2':
        return <Colors />;
      case '3':
        return <Typography />;
      case '4':
        return <Shadows />;
      case '5':
        return <Spacing />;
      default:
        return <Principles />;
    }
  };

  return (
    <ComponentLayout active="design">
      <Menu
        items={menuItems}
        active={active}
        onChange={(item) => setActive(item.key)}
        direction="column"
        style={{ width: "240px", height: "100%" }}
        className="py-24 overflow-auto scrollbar-none"
      />
      <div className="flex-1 p-24 height-100 overflow-auto border-box">
        <div className="flex flex-col w-full">
          {renderContent()}
        </div>
      </div>
    </ComponentLayout>
  );
}
