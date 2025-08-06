import styled from "styled-components";
import { ThemeType } from "./types";

export const StyledMenu = styled.div<{
  column?: boolean;
  border?: boolean;
  theme?: ThemeType;
}>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  gap: var(--gap-4);
  height: ${(props) => (!props.column ? "100%" : "")};
  width: ${(props) => (props.column ? "100%" : "fit-content")};
  border-bottom: ${(props) =>
    props.border && !props.column
      ? "1px solid var(--color-gray-4)"
      : ""};
  border-right: ${(props) =>
    props.border && props.column
      ? "1px solid var(--color-gray-4)"
      : ""};
  box-sizing: border-box;
  .land-menu-item {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: ${(props) => (!props.column ? "100%" : "")};
    width: 100%;
    border-radius: var(--radius-s);
    transition: all var(--transition-s) linear;
    &.simple {
      cursor: default;
    }
    &.disabled {
      pointer-events: none;
      opacity: var(--opacity-disabled);
    }
    &:hover .land-menu-drop-wrap {
      opacity: 1;
      pointer-events: all;
      transform: scaleY(1);
    }
  }
  .land-menu-drop-wrap {
    width: 100%;
    .land-menu-link{
      .land-menu-title{
        &.title-deputy{
          font-weight: bold;
        } 
      }
    }
    .land-menu-drop {
      padding: 8px 0;
    }
    &.open {
      padding: 0;
      .land-menu-link {
        padding-left: 32px;
      }
      .land-menu {
        position: static;
        border: none;
        padding: 0;
      }
    }
    &:not(.open) {
      position: absolute;
      top: 100%;
      left: 0;
      padding-top: 8px;
      z-index: 1;
      opacity: 0;
      transform: scaleY(0.8);
      transform-origin: top center;
      pointer-events: none;
      transition: all var(--transition-s) linear;
      .land-menu-drop {
        background-color: var(--color-white);
        border-radius: var(--radius-m);
        box-shadow: var(--shadow-m);
      }
    }
  }
`;

export const StyleMenuLink = styled.a<{
  column?: boolean;
  theme?: ThemeType;
}>`
  position: relative;
  padding: var(--padding-s);
  display: flex;
  flex-wrap: ${props => props.column ? "wrap" : "nowrap"};
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  font-size: var(--font-title-xs);
  box-sizing: border-box;
  white-space: nowrap;
  transition: background-color var(--transition-s) linear;
  cursor: pointer;
  color: var(--color-gray-10);
  &.title-deputy{
    cursor: default;
  }
  &:not(.title-deputy)::after {
    content: "";
    display: block;
    position: absolute;
    right: ${(props) => (!props.column ? "50%" : "0")};
    bottom: ${(props) => (!props.column ? "0" : "50%")};
    width: ${(props) => (!props.column ? "12px" : "2px")};
    height: ${(props) =>
    !props.column
      ? "2px"
      : props.theme.activeBg
        ? "100%"
        : "calc(100% - 16px)"};
    transform: ${(props) =>
    !props.column ? `translateX(50%)` : "translateY(50%)"};
    transform-origin: center center;
    border-radius: 1px;
    background-color: ${(props) =>
    props.theme.lineColor || "var(--color-gray-12)"};
    opacity: 0;
  }
  &:not(.title-deputy):hover {
    color: ${(props) => props.theme.hoverColor};
    background-color: ${(props) => props.theme.hoverBg};
    .land-menu-title::before {
      color: ${(props) => props.theme.hoverColor};
      font-weight: bold;
    }
    svg path {
      stroke-width: 4px;
    }
  }
  &.active {
    color: ${(props) => props.theme.hoverColor};
    background-color: ${(props) => props.theme.activeBg};
    .land-menu-title::before {
      color: ${(props) => props.theme.activeColor || "var(--color-gray-12)"};
      font-weight: bold;
    }
    &::after {
      opacity: 1;
      transition: opacity var(--transition-s) linear;
    }
    svg path {
      stroke-width: 4px;
    }
  }
  .land-menu-title {
    position: relative;
    color: transparent;
    font-weight: bold;
    max-width: 100%;
    &.title-deputy{
      font-size: var(--font-content-s);
      color: var(--color-gray-9);
      font-weight: normal;
      &:before{
        color: var(--color-gray-9);
      }
    }
    &:before {
      content: attr(data-title);
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      color: var(--color-gray-12);
      font-weight: 400;
      text-align: center;
      line-height: 40px;
    }
  }

  svg,
  .land-menu-icon {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }
  svg path {
    stroke-width: 3px;
  }
  .land-menu-sub-title {
    flex: 1;
    width: 1%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: var(--font-content-s);
    color: var(--color-gray-9);
  }
  .land-menu-new {
    position: absolute;
    padding: var(--padding-xs);
    top: -12px;
    right: -8px;
    font-size: var(--font-content-s);
    background-color: var(--color-link-1);
    color: var(--color-link-6);
    font-weight: 600;
    border-radius: 3px;
    box-sizing: border-box;
    transform: scale(0.65);
  }
  @media screen and (max-width: 800px) {
    font-size: var(--font-title-xs);
  }
`; 