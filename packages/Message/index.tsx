import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import { MessageProps } from "./props";
const Message: React.FC<MessageProps> = ({
  type = "info",
  text = "这是一条全局提示",
  simple = false,
  style,
  className = "",
}) => (
  <StyleToastContainer
    className={`StyleToastContainer ${className} ${simple ? 'simple' : ''}`}
    style={{
      ...style,
    }}
  >
    {!simple && <>
      {type === 'info' && <Icon name="info-fill" size={20} color="var(--color-primary-6)" />}
      {type === 'error' && <Icon name="attention-fill" size={20} color="var(--color-red-6)" />}
      {type === 'fail' && <Icon name="error-fill" size={20} color="var(--color-red-6)" />}
      {type === 'warn' && <Icon name="attention-fill" size={20} color="var(--color-orange-6)" />}
      {type === 'success' && <Icon name="check-fill" size={20} color="var(--color-green-6)" />}
    </>}
    {text}
  </StyleToastContainer>
);

const StyleToastContainer = styled.div`
  background: var(--color-bg-primary);
  border-radius: var(--radius-s);
  padding: var(--gap-l) var(--gap-xl);
  margin-bottom: var(--gap-s);
  box-shadow: var(--shadow-card);
  pointer-events: auto;
  max-width: 400px;
  word-wrap: break-word;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: var(--gap-m);
  color: var(--color-text-primary);
  font-size: var(--font-content-m);
  user-select: none;
  &.simple {
    padding: var(--gap-m) var(--gap-l);
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
    border-radius: var(--radius-s);
    box-shadow: unset;
  }
`;
export default Message;
export * from './props';
