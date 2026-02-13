import React, { CSSProperties, useEffect, useState } from "react";
import './index.scss';
import Divider from "../Divider";
import Menu from "../Menu";
import Button from "../Button";
import Icon from "../Icon";
import { HeaderProps } from "./props";

const Header: React.FC<HeaderProps> = ({
  height = "64px",
  fixed,
  filter = 0,
  borderBottom = true,
  applications,
  logo,
  name,
  onLogoClick,
  divider = true,
  align,
  menuProps,
  rightComponent,
  mobileSize = 767,
  style,
  className = "",
}) => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => setShowMobileNav(false);
    const handleResize = () => setShowMobileNav(false);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className={`land-header ${fixed ? "fixed" : ""} ${filter ? "filter" : ""} ${borderBottom ? "border-bottom" : ""} ${Boolean(applications) ? "applications" : ""} ${className}`}
      style={{
        height,
        '--land-header-mobile-size': `${mobileSize}px`,
        ...style
      } as CSSProperties}
    >
      <div className="land-header-logo" onClick={onLogoClick}>
        {applications && (
          <button
            className="land-header-application"
            onClick={(e: React.UIEvent) => e.stopPropagation()}
          >
            <Icon name="application" />
            <div className="land-application-drop">{applications}</div>
          </button>
        )}
        {typeof logo === "string" ? <img src={logo} /> : logo}
        {divider && logo && name && <Divider direction="vertical" length="24px" />}
        {name}
      </div>
      <div
        className={`land-header-nav ${showMobileNav ? "showMobileNav" : ""}`}
        style={{
          justifyContent: align,
        }}
      >
        {menuProps && <Menu
          border={false}
          {...menuProps}
          onChange={item => { menuProps.onChange?.(item); setShowMobileNav(false) }}
          onDropChange={(dropItem, item) => { menuProps.onDropChange?.(dropItem, item); setShowMobileNav(false) }}
        />}
      </div>
      {rightComponent && (
        <div className="land-header-right">{rightComponent}</div>
      )}
      {/* 移动端展开按钮 */}
      {menuProps && menuProps.data && menuProps.data?.length > 0 && (
        <Button
          className="land-mobile-toggle-button"
          icon={<Icon name="more-line" />}
          type="text"
          onClick={() => setShowMobileNav(!showMobileNav)}
        />
      )}
    </div>
  );
};

export default Header;
