import React, { useMemo } from "react";
import Icon from "../Icon";
import Link from "../Link";
import Loading from "../Loading";
import { AlertProps } from "./props";
import "./index.scss";

const Alert: React.FC<AlertProps> = ({
  type = "default",
  direction = "row",
  title,
  link,
  onLinkClick,
  noBg,
  className,
  style,
}) => {
  const iconSize = useMemo(() => (direction === "row" ? 16 : 24), [direction]);
  const themeColor = useMemo(() => {
    if (type === "fail") return "var(--color-red-";
    if (type === "default") return "";
    if (type === "warn") return "var(--color-orange-";
    if (type === "error") return "var(--color-red-";
    if (type === "success") return "var(--color-green-";
    if (type === "loading") return "";
  }, [type]);
  return (
    <div className={`land-alert ${direction} ${themeColor} ${noBg ? "no-bg" : ""} ${className}`} style={style}>
      {type === "fail" && (
        <Icon name="error-fill" size={iconSize} color={themeColor + '6)'} />
      )}
      {type === "default" && (
        <Icon
          name="attention-fill"
          size={iconSize}
          color="var(--color-primary-6)"
        />
      )}
      {type === "warn" && (
        <Icon
          name="attention-fill"
          size={iconSize}
          color={themeColor + '6)'}
        />
      )}
      {type === "error" && (
        <Icon name="attention-fill" size={iconSize} color={themeColor + '6)'} />
      )}
      {type === "success" && (
        <Icon name="check-fill" size={iconSize} color={themeColor + '6)'} />
      )}
      {type === "loading" && (
        <Loading size={iconSize} color="var(--color-primary-6)" />
      )}
      <div className="land-alert-title">
        {title}
        {link && (
          <>
            ，<Link onClick={onLinkClick}>{link}</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Alert;
