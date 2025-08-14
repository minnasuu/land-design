import React from "react";
import './index.scss';
import Button from "../Button";
import Link from "../Link";
import { StateProps } from "./props";
const State: React.FC<StateProps> = ({
  type = "empty",
  title,
  subTitle,
  titleLink,
  subTitleLink,
  button,
  onTiTleLinkClick,
  onSubTitleLinkClick,
  onButtonClick,
  buttonProps,
  emptyIcon,
  offlineIcon,
  className,
  style,
  titleLinkProps,
  subTitleLinkProps,
}) => (
  <div className={`land-state ${className}`} style={style}>
    {type === "empty" &&
      (emptyIcon || (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="land-state-empty-icon"
        >
          <g clipPath="url(#clip0_1578_7158)">
            <path
              d="M43 30.5L36.5788 19.4923C36.2204 18.8778 35.5626 18.5 34.8513 18.5H13.1487C12.4374 18.5 11.7796 18.8778 11.4212 19.4923L5 30.5M43 30.5V40.5C43 41.6046 42.1046 42.5 41 42.5H7C5.89543 42.5 5 41.6046 5 40.5V30.5M43 30.5H5"
              stroke="currentColor"
              stroke-width="3"
            />
            <path
              d="M24 12V6"
              stroke="currentColor"
              stroke-width="3"
              strokeLinecap="round"
            />
            <path
              d="M30.9995 12.7426L35.2422 8.5"
              stroke="currentColor"
              stroke-width="3"
              strokeLinecap="round"
            />
            <path
              d="M17.2426 12.7426L13 8.5"
              stroke="currentColor"
              stroke-width="3"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1578_7158">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ))}
    {type === "offline" &&
      (offlineIcon || (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="land-state-offline-icon"
        >
          <path
            d="M44 18.9653C37.2253 12.545 28.1189 10.0059 19.5 11.3481"
            stroke="currentColor"
            stroke-width="4"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M38 25.799C35.2866 23.0855 31.9815 21.3243 28.5 20.5154"
            stroke="currentColor"
            stroke-width="4"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 25.799C11.3276 24.4714 12.7969 23.3717 14.3591 22.5"
            stroke="currentColor"
            stroke-width="4"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 32.3138C17.4388 30.875 19.1686 29.9048 21 29.4031"
            stroke="currentColor"
            stroke-width="4"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 40C25.3807 40 26.5 38.8807 26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40Z"
            fill="currentColor"
          />
          <path
            d="M40 40L8 8"
            stroke="currentColor"
            stroke-width="4"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 18.9652C4.5888 18.4072 5.19522 17.8785 5.81741 17.3792C6.36642 16.9385 6.92771 16.5207 7.49999 16.1257"
            stroke="currentColor"
            stroke-width="4"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ))}
    <div className="land-state-title">
      {title}
      {titleLink && (
        <>
          ，
          <Link
            className="land-state-title-link"
            onClick={onTiTleLinkClick}
            {...titleLinkProps}
          >
            {titleLink}
          </Link>
        </>
      )}
    </div>
    {(subTitle || subTitleLink) && (
      <div className="land-state-subTitle">
        {subTitle}
        {
          <>
            ，
            <Link
              className="land-state-subTitle-link"
              onClick={onSubTitleLinkClick}
              {...subTitleLinkProps}
            >
              {subTitleLink}
            </Link>
          </>
        }
      </div>
    )}
    {button && (
      <Button
        className="land-state-button"
        onClick={onButtonClick}
        {...buttonProps}
      >
        {button}
      </Button>
    )}
  </div>
);

export default State;
