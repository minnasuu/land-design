import { jsxs as m, jsx as s, Fragment as ue } from "react/jsx-runtime";
import * as so from "react";
import Te, { useMemo as X, useState as R, useEffect as Y, createContext as At, useRef as q, useLayoutEffect as kl, useId as io, useContext as ye, useInsertionEffect as Xi, useCallback as F, Children as Ll, isValidElement as wl, forwardRef as Gi, Fragment as nn, createElement as Ki, Component as yl, useDebugValue as os, useImperativeHandle as Cl } from "react";
const Ml = ({
  ltOption: e,
  rtOption: t,
  rtOption2: n,
  lbOption: r,
  rbOption: o,
  tcOption: i,
  bcOption: a,
  centerOption: c,
  lcOption: l,
  rcOption: u,
  customOption: d,
  disabled: h,
  onClick: p,
  children: f,
  className: k,
  style: v,
  ...M
}) => {
  const g = X(
    () => [
      { option: e, placement: "lt" },
      { option: t, placement: "rt" },
      { option: n, placement: "rt" },
      { option: r, placement: "lb" },
      { option: o, placement: "rb" },
      { option: l, placement: "lc" },
      { option: u, placement: "rc" },
      { option: i, placement: "tc" },
      { option: a, placement: "bc" },
      { option: c, placement: "center" },
      { option: d, placement: "custom" }
    ],
    [e, t, r, o, l, u, i, a, c, d]
  ), [w, C] = R(!1), [x, N] = R(!1), L = (A) => A.hoverShow ? w ? 1 : 0 : A.hoverHide && x ? 0 : 1;
  Y(() => {
    const A = ($) => {
      C(!1), N(!1), $.stopPropagation();
    };
    return document.body.addEventListener("wheel", A), () => {
      document.body.removeEventListener("wheel", A);
    };
  }, []);
  const y = "var(--padding-m)", b = (A, $, P) => {
    const O = $ !== void 0 ? $ : y;
    switch (A) {
      case "lt":
      case "lb":
      case "lc":
        return O;
      case "rt":
      case "rb":
      case "rc":
        return "auto";
      case "tc":
      case "bc":
      case "center":
        return "50%";
      case "custom":
        return P;
      default:
        return "auto";
    }
  }, j = (A, $) => {
    const P = $ !== void 0 ? $ : y;
    switch (A) {
      case "lt":
      case "lb":
      case "lc":
      case "tc":
      case "bc":
      case "center":
        return "auto";
      case "rt":
      case "rb":
      case "rc":
        return P;
      default:
        return "auto";
    }
  }, V = (A, $, P) => {
    const O = $ !== void 0 ? $ : y;
    switch (A) {
      case "lt":
      case "rt":
      case "tc":
        return O;
      case "lb":
      case "rb":
      case "bc":
        return "auto";
      case "lc":
      case "rc":
      case "center":
        return "50%";
      case "custom":
        return P;
      default:
        return "auto";
    }
  }, I = (A, $) => {
    const P = $ !== void 0 ? $ : y;
    switch (A) {
      case "lt":
      case "rt":
      case "tc":
      case "lc":
      case "rc":
      case "center":
        return "auto";
      case "lb":
      case "rb":
      case "bc":
        return P;
      default:
        return "auto";
    }
  }, S = (A) => {
    switch (A) {
      case "lt":
      case "rt":
      case "lb":
      case "rb":
        return "";
      case "tc":
      case "bc":
        return "translateX(-50%)";
      case "lc":
      case "rc":
        return "translateY(-50%)";
      case "center":
        return "translate(-50%,-50%)";
      default:
        return "";
    }
  };
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-affix-container ${h ? "disabled" : ""} ${k}`,
      style: v,
      onClick: (A) => p == null ? void 0 : p(A),
      onMouseOver: () => {
        h || (C(!0), N(!0));
      },
      onMouseLeave: () => {
        C(!1), N(!1);
      },
      onWheel: (A) => A.stopPropagation(),
      ...M,
      children: [
        f,
        g == null ? void 0 : g.map(
          (A, $) => {
            var P;
            return A.option ? /* @__PURE__ */ s(
              "div",
              {
                style: {
                  left: b(A.placement, A.option.gap, A.option.left || 0),
                  right: j(A.placement, A.option.gap),
                  top: V(A.placement, A.option.gap, A.option.top || 0),
                  bottom: I(A.placement, A.option.gap),
                  transform: S(A.placement),
                  opacity: L(A.option),
                  zIndex: A.option.zIndex || 2,
                  animation: A.option.hoverShow && w ? A.option.showAnimation : "none",
                  ...A.option.style
                },
                className: `land-affix-container-item ${A.option.hoverShow ? "hoverShow" : ""} ${A.placement} absolute ${A.option.className ?? ""}`,
                onClick: (O) => {
                  var D, z;
                  O.stopPropagation(), (z = (D = A.option) == null ? void 0 : D.onClick) == null || z.call(D, O);
                },
                children: (P = A.option) == null ? void 0 : P.content
              },
              $
            ) : null;
          }
        )
      ]
    }
  );
}, xl = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `home ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9 18V42H39V18L24 6L9 18Z",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M19 29V42H29V29H19Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), bl = ({
  color: e = "currentColor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `home-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s("path", { d: "M39.6207 17.229C39.8603 17.4186 40 17.7074 40 18.013V41.8622C40 42.4145 39.5523 42.8622 39 42.8622H30.333C29.7807 42.8622 29.333 42.4145 29.333 41.8622V30.1396C29.333 29.5873 28.8853 29.1396 28.333 29.1396H19.667C19.1147 29.1396 18.667 29.5873 18.667 30.1396V41.8622C18.667 42.4145 18.2193 42.8622 17.667 42.8622H9C8.44772 42.8622 8 42.4145 8 41.8622V18.013C8 17.7074 8.13971 17.4186 8.37929 17.229L23.3793 5.35366C23.743 5.06571 24.257 5.06571 24.6207 5.35366L39.6207 17.229Z", fill: e })
  }
), Nl = ({
  size: e = 16,
  color: t = "currentcolor",
  className: n = "",
  onClick: r
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `application ${n}`,
    onClick: r,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z",
          fill: t
        }
      )
    ]
  }
), Sl = ({
  size: e = 16,
  color: t = "currentcolor",
  className: n = "",
  style: r,
  onClick: o
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `more ${n}`,
    style: r,
    onClick: o,
    children: [
      /* @__PURE__ */ s("circle", { cx: "12", cy: "24", r: "4", fill: t }),
      /* @__PURE__ */ s("circle", { cx: "24", cy: "24", r: "4", fill: t }),
      /* @__PURE__ */ s("circle", { cx: "36", cy: "24", r: "4", fill: t })
    ]
  }
), Vl = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `more-line ${r}`,
    style: o,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7.94971 11.9497H39.9497",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7.94971 23.9497H39.9497",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7.94971 35.9497H39.9497",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), jl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `refresh ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 8V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 24L6 40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), $l = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `female ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38.3785 9.85132C32.9112 4.38398 24.0468 4.38398 18.5795 9.85132C15.8458 12.585 14.479 16.1679 14.479 19.7508C14.479 23.3337 15.8458 26.9166 18.5795 29.6503C24.0468 35.1176 32.9112 35.1176 38.3785 29.6503C43.8458 24.183 43.8458 15.3187 38.3785 9.85132Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18.4642 29.5353L5.73633 42.2632",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M19.1714 41.5562L6.44346 28.8282",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Tl = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `male ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M41.9517 15.0483V6.04834H32.9517",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10.4135 38.0007C15.8808 43.4681 24.7451 43.4681 30.2125 38.0007C32.9462 35.2671 34.313 31.6841 34.313 28.1012C34.313 24.5183 32.9462 20.9354 30.2125 18.2017C24.7451 12.7344 15.8808 12.7344 10.4135 18.2017C4.94615 23.6691 4.94615 32.5334 10.4135 38.0007Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30.0002 17.9999L39.9517 8.04838",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Al = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `preview-open ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Il = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `preview-close ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 16C6.63472 17.2193 7.59646 18.3504 8.82276 19.3554C12.261 22.1733 17.779 24 24 24C30.221 24 35.739 22.1733 39.1772 19.3554C40.4035 18.3504 41.3653 17.2193 42 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28.9775 24L31.048 31.7274",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M37.3535 21.3536L43.0103 27.0104",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5.00004 27.0103L10.6569 21.3534",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16.9278 31.7276L18.9983 24.0001",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Pl = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `avatar ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: "24",
          cy: "12",
          r: "8",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Hl = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `tag ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z",
          fill: e
        }
      )
    ]
  }
), Rl = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `setting ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s("path", { d: "M18.2838 43.1708C14.9327 42.1731 11.9498 40.3208 9.58787 37.8665C10.469 36.8222 11 35.4729 11 33.9996C11 30.6859 8.31371 27.9996 5 27.9996C4.79955 27.9996 4.60139 28.0095 4.40599 28.0287C4.13979 26.7272 4 25.3798 4 23.9996C4 21.909 4.32077 19.8933 4.91579 17.999C4.94381 17.9994 4.97188 17.9996 5 17.9996C8.31371 17.9996 11 15.3133 11 11.9996C11 11.0483 10.7786 10.1488 10.3846 9.34963C12.6975 7.19902 15.5205 5.58954 18.6521 4.72266C19.6444 6.66771 21.6667 7.99965 24 7.99965C26.3333 7.99965 28.3556 6.66771 29.3479 4.72266C32.4795 5.58954 35.3025 7.19902 37.6154 9.34963C37.2214 10.1488 37 11.0483 37 11.9996C37 15.3133 39.6863 17.9996 43 17.9996C43.0281 17.9996 43.0562 17.9994 43.0842 17.999C43.6792 19.8933 44 21.909 44 23.9996C44 25.3798 43.8602 26.7272 43.594 28.0287C43.3986 28.0095 43.2005 27.9996 43 27.9996C39.6863 27.9996 37 30.6859 37 33.9996C37 35.4729 37.531 36.8222 38.4121 37.8665C36.0502 40.3208 33.0673 42.1731 29.7162 43.1708C28.9428 40.7515 26.676 38.9996 24 38.9996C21.324 38.9996 19.0572 40.7515 18.2838 43.1708Z", stroke: e, "stroke-width": n, strokeLinejoin: "round" }),
      /* @__PURE__ */ s("path", { d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z", stroke: e, "stroke-width": n, strokeLinejoin: "round" })
    ]
  }
), El = ({
  color: e = "currentColor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: n,
    className: `setting-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s("path", { d: "M30.1995 3.7271C30.4664 3.3222 30.9558 3.09498 31.4158 3.24837C34.1559 4.16208 36.6509 5.64551 38.7721 7.56441C39.0901 7.85203 39.1651 8.31297 39.0243 8.71793C38.7822 9.41432 38.6504 10.1656 38.6504 10.949C38.6504 14.5688 41.4708 17.5036 44.9502 17.5036V17.5036C45.0022 17.5036 45.0485 17.537 45.0633 17.5868C45.6719 19.6316 46 21.8046 46 24.0574C46 25.3491 45.8919 26.6146 45.6852 27.8448C45.6266 28.1935 45.3038 28.4275 44.9502 28.4275V28.4275C41.4708 28.4275 38.6505 31.3614 38.6504 34.9812C38.6504 36.2755 39.0108 37.4824 39.6331 38.4988C39.8928 38.9229 39.8839 39.4787 39.5318 39.8299C37.3893 41.9671 34.8118 43.6362 31.9516 44.6796C31.432 44.8692 30.8767 44.5657 30.6368 44.0673C29.6028 41.9185 27.467 40.4431 25 40.4431C22.533 40.4431 20.3972 41.9185 19.3632 44.0673C19.1233 44.5657 18.568 44.8692 18.0484 44.6796C15.1882 43.6362 12.6108 41.9671 10.4682 39.8299C10.1161 39.4787 10.1073 38.9229 10.3669 38.4988C10.9892 37.4824 11.3496 36.2755 11.3496 34.9812C11.3495 31.3614 8.52916 28.4275 5.0498 28.4275V28.4275C4.69619 28.4275 4.37345 28.1935 4.31484 27.8448C4.10809 26.6146 4 25.3491 4 24.0574C4.00001 21.8046 4.32808 19.6316 4.93668 17.5868C4.95153 17.537 4.99778 17.5036 5.0498 17.5036V17.5036C8.5292 17.5036 11.3496 14.5688 11.3496 10.949C11.3496 10.1656 11.2178 9.41432 10.9757 8.71793C10.8349 8.31297 10.9099 7.85203 11.2279 7.56441C13.3491 5.64551 15.8441 4.16208 18.5842 3.24837C19.0442 3.09498 19.5336 3.3222 19.8005 3.7271C20.9356 5.44961 22.841 6.57982 25 6.57982C27.159 6.57982 29.0644 5.44961 30.1995 3.7271ZM25 16.8249C21.0375 16.825 17.8253 20.0372 17.8252 23.9997C17.8252 27.9623 21.0374 31.1744 25 31.1745C28.9626 31.1745 32.1748 27.9624 32.1748 23.9997C32.1747 20.0372 28.9626 16.8249 25 16.8249Z", fill: e })
  }
), Dl = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `config-setting ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M41.5 10H35.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M27.5 6V14",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M27.5 10L5.5 10",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M13.5 24H5.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21.5 20V28",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M43.5 24H21.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M41.5 38H35.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M27.5 34V42",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M27.5 38H5.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Bl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `collection ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38.0427 3.95386L42.021 8.02038L38.0427 11.9612",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Fl = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `config-setting ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 6H42V20",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M25.7998 22.1999L41.0998 6.8999",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ol = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `config-setting ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 6L17 9",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 11H28",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Zl = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `light ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9.15039 9.15088L11.3778 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M3 24H6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9.15039 38.8495L11.3778 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38.8495 38.8495L36.6221 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44.9996 24H41.8496",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38.8495 9.15088L36.6221 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 3V6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 45.0001V41.8501",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Yl = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `light-fill ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9.15039 9.15088L11.3778 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M3 24H6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9.15039 38.8495L11.3778 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38.8495 38.8495L36.6221 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44.9996 24H41.8496",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38.8495 9.15088L36.6221 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 3V6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",
          fill: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 45.0001V41.8501",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), _l = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `dark ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",
        stroke: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), Ul = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `dark-fill ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",
        fill: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), zl = ({
  color: e = "currentcolor",
  size: t = 20,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `search ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33.2216 33.2217L41.7069 41.707",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Xl = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = ""
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `image ${o}`,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5 10C5 8.89543 5.89543 8 7 8L41 8C42.1046 8 43 8.89543 43 10V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V10Z",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.5 18C15.3284 18 16 17.3284 16 16.5C16 15.6716 15.3284 15 14.5 15C13.6716 15 13 15.6716 13 16.5C13 17.3284 13.6716 18 14.5 18Z",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M15 24L20 28L26 21L43 34V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V34L15 24Z",
          fill: "none",
          stroke: e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Gl = ({
  size: e = 16,
  color: t = "currentColor",
  style: n,
  className: r = ""
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: n,
    className: `video-play ${r}`,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M16.875 3.75V16.25C16.875 16.5815 16.7433 16.8995 16.5089 17.1339C16.2745 17.3683 15.9565 17.5 15.625 17.5H12.5C12.1685 17.5 11.8505 17.3683 11.6161 17.1339C11.3817 16.8995 11.25 16.5815 11.25 16.25V3.75C11.25 3.41848 11.3817 3.10054 11.6161 2.86612C11.8505 2.6317 12.1685 2.5 12.5 2.5H15.625C15.9565 2.5 16.2745 2.6317 16.5089 2.86612C16.7433 3.10054 16.875 3.41848 16.875 3.75ZM7.5 2.5H4.375C4.04348 2.5 3.72554 2.6317 3.49112 2.86612C3.2567 3.10054 3.125 3.41848 3.125 3.75V16.25C3.125 16.5815 3.2567 16.8995 3.49112 17.1339C3.72554 17.3683 4.04348 17.5 4.375 17.5H7.5C7.83152 17.5 8.14946 17.3683 8.38388 17.1339C8.6183 16.8995 8.75 16.5815 8.75 16.25V3.75C8.75 3.41848 8.6183 3.10054 8.38388 2.86612C8.14946 2.6317 7.83152 2.5 7.5 2.5Z",
        fill: t,
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }
    )
  }
), Kl = ({
  size: e = 16,
  color: t = "currentColor",
  style: n,
  className: r = ""
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 21 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: n,
    className: `video-pause ${r}`,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M14.3077 9.79704C15.2308 10.3317 15.2308 11.6683 14.3077 12.203L8.07693 15.8118C7.15385 16.3465 6 15.6782 6 14.6089V7.39113C6 6.32183 7.15385 5.65352 8.07692 6.18817L14.3077 9.79704Z",
        fill: t,
        strokeLinejoin: "round"
      }
    )
  }
), ql = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `volume ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M25 6V42L12.1884 32.839H6.1C4.94019 32.839 4 31.9436 4 30.839V17.0108C4 15.9062 4.94019 15.0108 6.1 15.0108H12.1884L25 6Z",
          stroke: e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 15C32.6232 15.5565 33.1882 16.1797 33.6842 16.8588C35.1388 18.8504 36 21.3222 36 24C36 26.6546 35.1536 29.1068 33.7218 31.0894C33.2168 31.7886 32.6392 32.4294 32 33",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M34 41C39.9889 37.4287 44 30.8901 44 23.4156C44 16.0574 40.1127 9.60618 34.2776 6",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Jl = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    onClick: i,
    style: r,
    className: `volume-muted ${o}`,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M25 6V42L12.1884 32.839H6.1C4.94019 32.839 4 31.9436 4 30.839V17.0108C4 15.9062 4.94019 15.0108 6.1 15.0108H12.1884L25 6Z",
          stroke: e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M41 19L32 29",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 19L41 29",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ql = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = ""
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `video-small-screen ${o}`,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 40H6C4.89543 40 4 39.1046 4 38V10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 24H26C24.8954 24 24 24.8954 24 26V38C24 39.1046 24.8954 40 26 40H42C43.1046 40 44 39.1046 44 38V26C44 24.8954 43.1046 24 42 24Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Wl = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  reverse: i,
  onClick: a
}) => /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", width: t, height: t, viewBox: "0 0 48 48", fill: "none", className: `video-fill-width ${o}`, style: r, onClick: a, children: [
  /* @__PURE__ */ s("path", { d: "M30.3633 18L36.7273 24.364L30.3633 30.728", stroke: e, strokeWidth: n, strokeLinejoin: "round", style: { transform: i ? "scale(1.-1)" : "" } }),
  /* @__PURE__ */ s("path", { d: "M16.363 30.7279L9.99902 24.3639L16.363 18", stroke: e, strokeWidth: n, strokeLinejoin: "round", style: { transform: i ? "scale(1.-1)" : "" } }),
  /* @__PURE__ */ s(
    "path",
    {
      d: "M42 9H6C3.79086 9 2 10.7909 2 13V37C2 39.2091 3.79086 41 6 41H42C44.2091 41 46 39.2091 46 37V13C46 10.7909 44.2091 9 42 9Z",
      stroke: e,
      strokeWidth: n,
      strokeLinejoin: "round"
    }
  )
] }), ed = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `loop ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38 7L44 13L38 19",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), td = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `file ${r}`,
    style: o,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: t,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M43 22H5",
          stroke: t,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), nd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `download ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 24.0083V42H42V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33 23L24 32L15 23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23.9917 6V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), rd = ({
  size: e = 20,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    className: `upload ${r}`,
    xmlns: "http://www.w3.org/2000/svg",
    onClick: o,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 24.0083V42H42V24",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33 15L24 6L15 15",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23.9917 32V6",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), od = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `web-add ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M25 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V24.9412",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 35H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38 29V41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          r: n,
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)",
          fill: e
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          r: n,
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)",
          fill: e
        }
      )
    ]
  }
), sd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `announcement ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "4",
          y: "15",
          width: "40",
          height: "26",
          rx: n,
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 7L16 15H32L24 7Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 24H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 32H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), id = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `audio-file ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M8 44V4H31L40 14.5V44H8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 14L26 16.9688V31.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: "20.5",
          cy: "31.5",
          r: "5.5",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ad = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `book ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M8 40C8 36 8 10 8 10C8 6.68629 10.8654 4 14.4 4H40V36C40 36 19.9815 36 14.4 36C9.36225 36 8 36.6842 8 40Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 44H40V36H12C9.79086 36 8 37.7909 8 40C8 42.2091 9.79086 44 12 44Z",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), cd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `clipboard ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M17 7H16H10C8.89543 7 8 7.89543 8 9L8 42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V9C40 7.89543 39.1046 7 38 7H33.0499H31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "rect",
        {
          x: "17",
          y: "4",
          width: "14",
          height: "6",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ld = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `document ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 6H22V42H32V6Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 6H32V42H42V6Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10 6L18 7L14.5 42L6 41L10 6Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M37 18V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M27 18V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), dd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `email-download ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 15H44V28V41H4V28V15H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 19V5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 13L24 19L18 13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 15L24 30L44 15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ud = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `email-push ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 15H44V28V41H4V28V15H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 19V5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 11L24 5L18 11",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 15L24 30L44 15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), hd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `email-success ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44 24V9H24H4V24V39H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M31 36L36 40L44 30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 9L24 24L44 9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), pd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `email-fail ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44 24V9H24H4V24V39H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M40 31L32 39",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 31L40 39",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 9L24 24L44 9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), fd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `file-add ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33 29V43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M26 36H33H40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 4V14H40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), md = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `code-file ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 4L40 14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M27 24L32 29L27 34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 24L16 29L21 34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), gd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `star-file ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 4L40 14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20.85 21C18.7237 21 17 23.0086 17 25.4864C17 29.9727 21.55 34.0513 24 35C26.45 34.0513 31 29.9727 31 25.4864C31 23.0086 29.2763 21 27.15 21C25.8479 21 24.6967 21.7533 24 22.9062C23.3033 21.7533 22.1521 21 20.85 21Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), vd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-file ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 4L40 14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 22V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 22H24L30 22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), kd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `folder ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M43 22H5",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 16V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M43 16V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ld = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `code-folder ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 22L33 27L28 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 22L15 27L20 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), wd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `folder-download ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 28L23.9933 34L18 28.0134",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 20V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), yd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `folder-add ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 27H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 21L24 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Cd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `folder-upload ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 25.9867L24 20L18 26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 20V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Md = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `formatting-brush ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "8",
          y: "24",
          width: "32",
          height: "18",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 13H18V6H30V13H44V24H4V13Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 32L16 42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), xd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `instruction ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "4",
          y: "8",
          width: "40",
          height: "32",
          rx: "2",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16H4V10Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M25 23L23 34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M31 23L37 28L31 34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M17 22.9999L11 27.9999L17 33.9999",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), bd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `list-view ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "4",
          y: "6",
          width: "40",
          height: "36",
          rx: "3",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 14H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 24H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 32H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 24H14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 32H14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Nd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `list-view ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M24.7073 9.56521L9.85801 24.4145C6.34329 27.9292 6.34329 33.6277 9.85801 37.1424V37.1424C13.3727 40.6571 19.0712 40.6571 22.5859 37.1424L40.2636 19.4647C42.6067 17.1216 42.6067 13.3226 40.2636 10.9794V10.9794C37.9205 8.63628 34.1215 8.63628 31.7783 10.9794L14.1007 28.6571C12.9291 29.8287 12.9291 31.7282 14.1007 32.8997V32.8997C15.2722 34.0713 17.1717 34.0713 18.3433 32.8997L33.1925 18.0505",
        stroke: e,
        strokeWidth: n,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Sd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `log ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "13",
          y: "10",
          width: "28",
          height: "34",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 22H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 30H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Vd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `email ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 39H44V24V9H24H4V24V39Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 9L24 24L44 9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 9H4V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44 24V9H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), jd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `email-open ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44 18V39.8182C44 41.0232 43.1046 42 42 42H6C4.89543 42 4 41.0232 4 39.8182V18L24 31L44 18Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 17.7839L24 4L44 17.7839",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), $d = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `note-pad ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 8H11C10.4477 8 10 8.44772 10 9V43C10 43.5523 10.4477 44 11 44H39C39.5523 44 40 43.5523 40 43V9C40 8.44772 39.5523 8 39 8H32",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 13V8H21.9505C21.9778 8 22 7.97784 22 7.9505V6C22 4.34315 23.3431 3 25 3C26.6569 3 28 4.34315 28 6V7.9505C28 7.97784 28.0222 8 28.0495 8H32V13C32 13.5523 31.5523 14 31 14H19C18.4477 14 18 13.5523 18 13Z",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      )
    ]
  }
), Td = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `schedule ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "4",
          y: "10",
          width: "40",
          height: "30",
          rx: "2",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 6V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M25 23L14 23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M34 31L14 31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M34 6V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Ad = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-scan ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 15V35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M17 15H24H31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Id = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `web-page ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "4",
          y: "8",
          width: "40",
          height: "32",
          rx: "3",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          r: "2",
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)",
          fill: e
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          r: "2",
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)",
          fill: e
        }
      )
    ]
  }
), Pd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `web-page ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 31L22 37L34 25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 5V13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 5V13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Hd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `calendar ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 19H43V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V19Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 9C5 7.89543 5.89543 7 7 7H41C42.1046 7 43 7.89543 43 9V19H5V9Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 4V12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 4V12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 34H34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 34H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 26H34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 26H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Rd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `code ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s("path", { d: "M16 13L4 25.4322L16 37", stroke: e, "stroke-width": n, strokeLinecap: "round", "stroke-linejoin": "round" }),
      /* @__PURE__ */ s("path", { d: "M32 13L44 25.4322L32 37", stroke: e, "stroke-width": n, strokeLinecap: "round", "stroke-linejoin": "round" }),
      /* @__PURE__ */ s("path", { d: "M28 13L21 37", stroke: e, "stroke-width": n, strokeLinecap: "round" })
    ]
  }
), Ed = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `coupon ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9.00013 16.0001L34 6.00008L38.0004 16.0001",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 16H44V22C41 22 38 24 38 27.5C38 31 41 34 44 34V40H4V34C7.00016 34 10 32 10 28C10 24 7 22 4 22V16Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M17 25.3848H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M17 31.3848H31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Dd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `ticket ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 8H11C11 8 12 13 17 13C22 13 23 8 23 8H44V40H23C23 40 22 35 17 35C12 35 11 40 11 40H4V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M17 19V21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M17 27L17 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M25 21H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M25 27H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Bd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `bank-card ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 16H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M27 32H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44 10V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 10V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Fd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `consume ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V14Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M19 19L24 24L29 19",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 25H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 31H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 25V35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M8 6H40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Od = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `commodity ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9.78101 9.75193C9.90612 8.75107 10.7569 8 11.7656 8H36.2344C37.2431 8 38.0939 8.75107 38.219 9.75193L41.719 37.7519C41.8682 38.9456 40.9374 40 39.7344 40H8.26556C7.06257 40 6.1318 38.9456 6.28101 37.7519L9.78101 9.75193Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M15 18C15 18 17 22 24 22C31 22 33 18 33 18",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Zd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `dollar ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 2V46",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M35 6C35 6 24.9706 6 20 6C15.0294 6 11 10.0294 11 15C11 19.9706 15.0294 24 20 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M13 42C13 42 23.0294 42 28 42C32.9706 42 37 37.9706 37 33C37 28.0294 32.9706 24 28 24H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Yd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `check-stroke ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 24L22 30L34 18",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), _d = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `check-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM11.4142 24C11.4142 24.4142 11.7475 24.7475 12.4142 25.4142L19.5858 32.5858C20.2525 33.2525 20.5858 33.5858 21 33.5858C21.4142 33.5858 21.7475 33.2525 22.4142 32.5858L36.2525 18.7475C36.9191 18.0809 37.2525 17.7475 37.2525 17.3333C37.2525 16.9191 36.9191 16.5858 36.2525 15.9191L35.7475 15.4142C35.0809 14.7475 34.7475 14.4142 34.3333 14.4142C33.9191 14.4142 33.5858 14.7475 32.9191 15.4142L22.4142 25.9191C21.7475 26.5858 21.4142 26.9191 21 26.9191C20.5858 26.9191 20.2525 26.5858 19.5858 25.9191L15.7475 22.0809C15.0809 21.4142 14.7475 21.0809 14.3333 21.0809C13.9191 21.0809 13.5858 21.4142 12.9191 22.0809L12.4142 22.5858C11.7475 23.2525 11.4142 23.5858 11.4142 24Z",
        fill: e
      }
    )
  }
), Ud = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `check ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z",
        fill: e,
        strokeWidth: n
      }
    )
  }
), zd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `error-stroke ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M29.6567 18.3432L18.343 29.6569",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18.3433 18.3432L29.657 29.6569",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Xd = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `error-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM14.4146 16.8059C14.4258 17.2036 14.7468 17.5246 15.3889 18.1667L19.808 22.5858C20.4747 23.2525 20.808 23.5858 20.808 24C20.808 24.4142 20.4747 24.7475 19.808 25.4142L15.3889 29.8333C14.7468 30.4754 14.4258 30.7964 14.4146 31.1941C14.4141 31.2128 14.4141 31.2316 14.4146 31.2503C14.4258 31.648 14.7468 31.9691 15.3889 32.6111C16.0309 33.2532 16.352 33.5742 16.7497 33.5854C16.7684 33.5859 16.7872 33.5859 16.8059 33.5854C17.2036 33.5742 17.5246 33.2532 18.1667 32.6111L22.5858 28.192C23.2525 27.5253 23.5858 27.192 24 27.192C24.4142 27.192 24.7475 27.5253 25.4142 28.192L29.8333 32.6111C30.4754 33.2532 30.7964 33.5742 31.1941 33.5854C31.2128 33.5859 31.2316 33.5859 31.2503 33.5854C31.648 33.5742 31.9691 33.2532 32.6111 32.6111C33.2532 31.9691 33.5742 31.648 33.5854 31.2503C33.5859 31.2316 33.5859 31.2128 33.5854 31.1941C33.5742 30.7964 33.2532 30.4754 32.6111 29.8333L28.192 25.4142C27.5253 24.7475 27.192 24.4142 27.192 24C27.192 23.5858 27.5253 23.2525 28.192 22.5858L32.6111 18.1667C33.2532 17.5246 33.5742 17.2036 33.5854 16.8059C33.5859 16.7872 33.5859 16.7684 33.5854 16.7497C33.5742 16.352 33.2532 16.0309 32.6111 15.3889C31.9691 14.7468 31.648 14.4258 31.2503 14.4146C31.2316 14.4141 31.2128 14.4141 31.1941 14.4146C30.7964 14.4258 30.4754 14.7468 29.8333 15.3889L25.4142 19.808C24.7475 20.4747 24.4142 20.808 24 20.808C23.5858 20.808 23.2525 20.4747 22.5858 19.808L18.1667 15.3889C17.5246 14.7468 17.2036 14.4258 16.8059 14.4146C16.7872 14.4141 16.7684 14.4141 16.7497 14.4146C16.352 14.4258 16.0309 14.7468 15.3889 15.3889C14.7468 16.0309 14.4258 16.352 14.4146 16.7497C14.4141 16.7684 14.4141 16.7872 14.4146 16.8059Z",
        fill: e
      }
    )
  }
), qi = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `error ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M3.41421 8.25217C2.74755 7.58551 2.41421 7.25218 2.41421 6.83796C2.41421 6.42375 2.74755 6.09042 3.41421 5.42375L5.42375 3.41421C6.09042 2.74755 6.42375 2.41421 6.83796 2.41421C7.25218 2.41421 7.58551 2.74755 8.25218 3.41421L18.0025 13.1645C18.6691 13.8312 19.0025 14.1645 19.4167 14.1645C19.8309 14.1645 20.1642 13.8312 20.8309 13.1645L30.5812 3.41421C31.2478 2.74755 31.5812 2.41421 31.9954 2.41421C32.4096 2.41421 32.7429 2.74755 33.4096 3.41421L35.4191 5.42375C36.0858 6.09042 36.4191 6.42375 36.4191 6.83796C36.4191 7.25218 36.0858 7.58551 35.4191 8.25218L25.6688 18.0025C25.0022 18.6691 24.6688 19.0025 24.6688 19.4167C24.6688 19.8309 25.0022 20.1642 25.6688 20.8309L35.4191 30.5812C36.0858 31.2478 36.4191 31.5812 36.4191 31.9954C36.4191 32.4096 36.0858 32.7429 35.4191 33.4096L33.4096 35.4191C32.7429 36.0858 32.4096 36.4191 31.9954 36.4191C31.5812 36.4191 31.2478 36.0858 30.5812 35.4191L20.8309 25.6688C20.1642 25.0022 19.8309 24.6688 19.4167 24.6688C19.0025 24.6688 18.6691 25.0022 18.0025 25.6688L8.25217 35.4191C7.58551 36.0858 7.25218 36.4191 6.83796 36.4191C6.42375 36.4191 6.09042 36.0858 5.42375 35.4191L3.41421 33.4096C2.74755 32.7429 2.41421 32.4096 2.41421 31.9954C2.41421 31.5812 2.74755 31.2478 3.41421 30.5812L13.1645 20.8309C13.8312 20.1642 14.1645 19.8309 14.1645 19.4167C14.1645 19.0025 13.8312 18.6691 13.1645 18.0025L3.41421 8.25217Z",
        fill: e,
        strokeWidth: n
      }
    )
  }
), Gd = ({
  size: e = 16,
  color: t = "currentcolor",
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `info-stroke ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",
        stroke: t,
        strokeWidth: "2"
      }
    )
  }
), Kd = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `info-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 12.5C26.5 13.4428 26.5 13.9142 26.2071 14.2071C25.9142 14.5 25.4428 14.5 24.5 14.5H24C23.0572 14.5 22.5858 14.5 22.2929 14.2071C22 13.9142 22 13.4428 22 12.5V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V12.5ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V21.5C22 20.5572 22 20.0858 22.2929 19.7929C22.5858 19.5 23.0572 19.5 24 19.5H24.5C25.4428 19.5 25.9142 19.5 26.2071 19.7929C26.5 20.0858 26.5 20.5572 26.5 21.5V36.5Z",
        fill: e
      }
    )
  }
), qd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `info ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41L21 21C21 20.0572 21 19.5858 21.2929 19.2929C21.5858 19 22.0572 19 23 19H26C26.9428 19 27.4142 19 27.7071 19.2929C28 19.5858 28 20.0572 28 21L28 41Z",
          fill: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 10C28 10.9428 28 11.4142 27.7071 11.7071C27.4142 12 26.9428 12 26 12H23C22.0572 12 21.5858 12 21.2929 11.7071C21 11.4142 21 10.9428 21 10V7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5L26 5C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7V10Z",
          fill: e,
          strokeWidth: n
        }
      )
    ]
  }
), Jd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `attention-stroke ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",
        stroke: e,
        strokeWidth: n
      }
    )
  }
), Qd = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `attention-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",
        fill: e
      }
    )
  }
), Wd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `attention ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",
          fill: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",
          fill: e,
          strokeWidth: n
        }
      )
    ]
  }
), eu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `question-stroke ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",
        stroke: e,
        strokeWidth: n
      }
    )
  }
), tu = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `question-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",
        fill: e
      }
    )
  }
), nu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `question ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",
          fill: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",
          fill: e,
          strokeWidth: n
        }
      )
    ]
  }
), ru = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `hourglass-empty ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7 4H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7 44H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M37 4C34.3333 17.3389 30 24.0056 24 24C18 23.9944 13.6667 17.3278 11 4H37Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ou = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `hourglass-full ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7 4H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7 44H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M37 4C34.3333 17.3389 30 24.0056 24 24C18 23.9944 13.6667 17.3278 11 4H37Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 15H27",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M19 38H29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), su = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    fill: "none",
    viewBox: "0 0 24 24",
    width: t,
    height: t,
    className: `increase ${o}`,
    style: r,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M15 12h4.5L12 2 4.5 12H9v10h6V12z",
        fill: e,
        strokeWidth: n
      }
    )
  }
), iu = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `image ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14.5 8C13.8406 8.37652 13.2062 8.79103 12.6 9.24051C11.5625 10.0097 10.6074 10.8814 9.75 11.8402C6.79377 15.1463 5 19.4891 5 24.2455C5 34.6033 13.5066 43 24 43C34.4934 43 43 34.6033 43 24.2455C43 19.4891 41.2062 15.1463 38.25 11.8402C37.3926 10.8814 36.4375 10.0097 35.4 9.24051C34.7938 8.79103 34.1594 8.37652 33.5 8",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 4V24",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), au = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `toggle ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 9L42 9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 19L42 19",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 26L24 40L42 26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), cu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `collapse ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44 20H28V4",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 28H20V44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), lu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `reload ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 8V17H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), du = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `undo ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 9V17H14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), uu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `sort ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M19 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7 17.8994L19 5.89941",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M29 42.1006V6.10059",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M29 42.1006L41 30.1006",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), hu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `sort-descending ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23 8H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 41L6 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 7V41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23 18H39",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23 28H35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23 38H31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), pu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `sort-ascending ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23 9H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 16L13 8",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M13 8V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23 19H39",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23 29H35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23 39H31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), fu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `back ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 28L10 33L4 25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), mu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `last-step ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
        stroke: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), gu = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `last-step-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
        fill: e,
        strokeLinejoin: "round"
      }
    )
  }
), vu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `next-step ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4 40.8361C8.89307 34.8632 13.2383 31.4739 17.0356 30.6682C20.8329 29.8625 24.4483 29.7408 27.8818 30.303V41L44 23.5453L27.8818 7V17.167C21.5333 17.2172 16.1362 19.4948 11.6905 24C7.24474 28.5052 4.68126 34.1172 4 40.8361Z",
        stroke: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), ku = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `next-step-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4 40.8361C8.89307 34.8632 13.2383 31.4739 17.0356 30.6682C20.8329 29.8625 24.4483 29.7408 27.8818 30.303V41L44 23.5453L27.8818 7V17.167C21.5333 17.2172 16.1362 19.4948 11.6905 24C7.24474 28.5052 4.68126 34.1172 4 40.8361Z",
        fill: e,
        strokeLinejoin: "round"
      }
    )
  }
), Lu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `ahead ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 28L38 33L44 25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), wu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `drag ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 28L38 33L44 25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), yu = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `add ${r}`,
    style: o,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24.0605 10L24.0239 38",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10 24L38 24",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Cu = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `dec ${r}`,
    style: o,
    onClick: i,
    children: /* @__PURE__ */ s("path", { d: "M10 24H38", stroke: t, strokeWidth: n, strokeLinecap: "round", strokeLinejoin: "round" })
  }
), Mu = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `clear ${r}`,
    style: o,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 14L34 34",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 34L34 14",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), xu = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `delete ${o}`,
    onClick: (a) => i == null ? void 0 : i(a),
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9 10V44H39V10H9Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 20V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 20V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 10H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 10L19.289 4H28.7771L32 10H16Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), bu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    className: `copy ${r}`,
    onClick: o,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Nu = ({
  size: e = 20,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `close ${r}`,
    onClick: o,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 14L34 34",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 34L34 14",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Su = ({
  color: e = "currentcolor",
  size: t = 20,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    style: n,
    className: `color-picker ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",
        fill: e
      }
    )
  }
), Vu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `zoom-in-arrow ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 6L16 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 41.8995L16 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42.0001 41.8995L32.1006 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M41.8995 6L32 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33 6H42V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 33V42H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M15 42H6V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 15V6H15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ju = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `zoom-out-arrow ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 6L16 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 41.8995L16 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42.0001 41.8995L32.1006 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M41.8995 6L32 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 7V16H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 7V16H7",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 41V32H7",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 41V32H40.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), $u = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `zoom-in ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33 6H42V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 33V42H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M15 42H6V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 15V6H15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Tu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `zoom-out ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33 6V15H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M15 6V15H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M15 42V33H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33 42V33H41.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Au = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `out ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23.9917 6H6V42H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33 33L42 24L33 15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 23.9917H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Iu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `zoom-in-btn ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 15L21 27",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M15.0156 21.0156L27 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33.2216 33.2217L41.7069 41.707",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Pu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `zoom-in-btn ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M15 21L27 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33.2216 33.2217L41.7069 41.707",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Hu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `square-add ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 6H8C6.89543 6 6 6.89543 6 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 42H8C6.89543 42 6 41.1046 6 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 42H40C41.1046 42 42 41.1046 42 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 6H40C41.1046 6 42 6.89543 42 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 24L16 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 32L24 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ru = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `dash-add ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 32L24 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 27L42 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 27L6 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 6H8C6.89543 6 6 6.89543 6 8V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M34 6H40C41.1046 6 42 6.89543 42 8V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M34 42H40C41.1046 42 42 41.1046 42 40V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 42H8C6.89543 42 6 41.1046 6 40V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M27 6H21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 24L16 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M27 42H21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Eu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `adjustment ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 8C5 6.34315 6.34315 5 8 5H40C41.6569 5 43 6.34315 43 8V40C43 41.6569 41.6569 43 40 43H8C6.34315 43 5 41.6569 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 12L12 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 16H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M27 33H35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 12V20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Du = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `alphabetical-sorting ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 4V43.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7 28H23L7 44H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7 20L15.2759 4L23 20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44 36L36 44L28 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Bu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `alphabetical-sorting-reverse ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 4V43.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7 4H23L7 20H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7 44L15.2759 28L23 44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44 36L36 44L28 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Fu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `brightness ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24.0205 35.3535C30.0956 35.3535 35.0205 30.4286 35.0205 24.3535C35.0205 18.2784 30.0956 13.3535 24.0205 13.3535C17.9454 13.3535 13.0205 18.2784 13.0205 24.3535C13.0205 30.4286 17.9454 35.3535 24.0205 35.3535Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38.9603 9.00977L36.5 11.4842",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M11.0674 36.7451L9.02051 38.8037",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 41.3533L24 44.3533",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M43.9998 23.3535L39.9998 23.3535",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M37.5324 36.3361L39.9998 38.8035",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M24.0205 17.3535C20.1545 17.3535 17.0205 20.4875 17.0205 24.3535C17.0205 28.2195 20.1545 31.3535 24.0205 31.3535",
          fill: e
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4.00019 24.3535L8.00019 24.3535",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10.0444 9.00974L12.0972 11.0625",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 3.35371L24 7.35371",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Ou = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `layer-front ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M41 18H19C18.4477 18 18 18.4477 18 19V41C18 41.5523 18.4477 42 19 42H41C41.5523 42 42 41.5523 42 41V19C42 18.4477 41.5523 18 41 18Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9.96906 6H6V10.0336",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9.99705 30H6V26.012",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M26.0023 6H30V10.0152",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16.0283 6H20.0083",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 16C6 18.6536 6 19.9869 6 20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 16C30 18.6765 30 19.3456 30 18.0074",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M15.9922 30H17.9996",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Zu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `layer-back ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 18H41C41.5523 18 42 18.4477 42 19V41C42 41.5523 41.5523 42 41 42H19C18.4477 42 18 41.5523 18 41V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9.96906 6H6V10.0336",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9.99705 30H6V26.012",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M26 30H29.9971V26.012",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M26.0023 6H30V9.99785",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16.0283 6H20.0083",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 16V20.0148",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 16V20.0148",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M15.9922 30H19.9996",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Yu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `clear-formate ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ m("g", { clipPath: "url(#icon-388a63e7c11bad3)", children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: "M44.7818 24.1702L31.918 7.09935L14.1348 20.5L27.5 37L30.8556 34.6643L44.7818 24.1702Z",
            fill: "none",
            stroke: e,
            strokeWidth: n,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M27.4998 37L23.6613 40.0748L13.0978 40.074L10.4973 36.6231L4.06543 28.0876L14.4998 20.2248",
            stroke: e,
            strokeWidth: n,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M13.2056 40.072L44.5653 40.072",
            stroke: e,
            strokeWidth: n,
            strokeLinecap: "round"
          }
        )
      ] }),
      /* @__PURE__ */ s("defs", { children: /* @__PURE__ */ s("clipPath", { id: "icon-388a63e7c11bad3", children: /* @__PURE__ */ s("rect", { width: "48", height: "48", fill: e }) }) })
    ]
  }
), _u = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `edit ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7 42H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Uu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `clip-edit ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: "13",
          cy: "35",
          r: "7",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: "35",
          cy: "35",
          r: "7",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M8 6L32 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M40 6L16 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), zu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `filter ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M6 9L20.4 25.8178V38.4444L27.6 42V25.8178L42 9H6Z",
        fill: "none",
        stroke: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), Xu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `lock ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "22",
          width: "36",
          height: "22",
          rx: "2",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 22V14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 30V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Gu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `unlock ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "7",
          y: "22.0476",
          width: "34",
          height: "22",
          rx: "2",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 22V14.0047C13.9948 8.87022 17.9227 4.56718 23.0859 4.05117C28.249 3.53516 32.9673 6.97408 34 12.0059",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 30V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ku = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `merge-cells ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 14V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V43C4 43.5523 4.44772 44 5 44H19C19.5523 44 20 43.5523 20 43V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 34V43C28 43.5523 28.4477 44 29 44H43C43.5523 44 44 43.5523 44 43V5C44 4.44772 43.5523 4 43 4H29C28.4477 4 28 4.44772 28 5V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 24H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 24H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32.7485 28.8184L31.1575 27.2274L27.9756 24.0454L31.1575 20.8634L32.7485 19.2724",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M15.375 28.8184L16.966 27.2274L20.148 24.0454L16.966 20.8634L15.375 19.2724",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), qu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `split-cells ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 14V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V43C20 43.5523 19.5523 44 19 44H5C4.44772 44 4 43.5523 4 43V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44 34V43C44 43.5523 43.5523 44 43 44H29C28.4477 44 28 43.5523 28 43V5C28 4.44772 28.4477 4 29 4H43C43.5523 4 44 4.44772 44 5V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 24L44 24.0132",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 24.0132L20 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M39.2275 28.7778L40.8185 27.1868L44.0005 24.0049L40.8185 20.8229L39.2275 19.2319",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M8.75537 28.7861L7.16438 27.1951L3.9824 24.0132L7.16438 20.8312L8.75537 19.2402",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ju = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `cursor-move ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
        stroke: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), Qu = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `cursor-move-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
        fill: e,
        strokeLinejoin: "round"
      }
    )
  }
), Wu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `line-break ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 9H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 19H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 29H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 39H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 39C24 39 34.2386 39 37 39C39.7614 39 42 36.7614 42 34C42 31.2386 39.7614 29 37 29C35.7115 29 32 29 32 29M24 39L28 35M24 39L28 43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), eh = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `quote ${r}`,
    onClick: o,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z",
          fill: e
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z",
          fill: e
        }
      )
    ]
  }
), th = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `scan ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 6H8C6.89543 6 6 6.89543 6 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 42H8C6.89543 42 6 41.1046 6 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 42H40C41.1046 42 42 41.1046 42 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 6H40C41.1046 6 42 6.89543 42 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M34 24L14 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M34 16L14 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M34 32L14 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), nh = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `like ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
        stroke: t,
        strokeWidth: n,
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }
    )
  }
), rh = ({
  size: e = 16,
  color: t = "currentcolor",
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `like-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
        fill: t,
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }
    )
  }
), oh = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `star ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",
        stroke: t,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), sh = ({
  size: e = 16,
  color: t = "currentcolor",
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `star-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",
        fill: t,
        strokeLinejoin: "round"
      }
    )
  }
), ih = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `pen ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M27.9521 12.3872L36.4374 20.8725",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ah = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-bottom ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "17",
          y: "6",
          width: "14",
          height: "28",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 42H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ch = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-top ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "17",
          y: "14.5",
          width: "14",
          height: "28",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 6.5H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), lh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-left ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "14.5",
          y: "17",
          width: "28",
          height: "14",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6.5 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), dh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-right ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "17",
          width: "28",
          height: "14",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), uh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-horizontally ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "7",
          y: "17",
          width: "34",
          height: "14",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), hh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-vertically ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "17",
          y: "7",
          width: "14",
          height: "34",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 24H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ph = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-align-left ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M34 19H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M34 39H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), fh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-align-right ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 19H14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 39H14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), mh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-align-center ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 19H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 39H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), gh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-align-justify ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 19H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 39H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), vh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-align-middle ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 36L24 30L30 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23.9999 30.9998V43.9998",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 12L24 18L30 12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M23.9999 17.0002V4.00022",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 24.0004H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), kh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-bottom-center ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 32V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 24V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 28V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Lh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-bottom-left ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 32V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 24V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 28V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), wh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-bottom-right ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 32V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 24V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 28V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), yh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-horizontal-bottom ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M22 36H26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 30H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 24H28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Ch = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-horizontal-center ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M22 30H26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 24H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 18H28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Mh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-horizontal-top ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M22 24H26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 18H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 12H28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), xh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-left-bottom ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 36H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 30H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 24H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), bh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-left-center ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 30H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 24H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 18H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Nh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-left-top ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 24H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 18H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 12H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Sh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-right-bottom ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 36H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 30H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 24H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Vh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-right-center ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 30H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 24H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 18H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), jh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-right-top ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 24H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 18H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M28 12H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), $h = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-top-center ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 12V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 12V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 12V20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Th = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-top-left ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 12V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 12V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 12V20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Ah = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-top-right ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 12V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 12V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 12V20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Ih = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-vertical-center ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 22V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 18V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 20V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Ph = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-vertical-left ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 22V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 18V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 20V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Hh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-vertical-right ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 22V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M30 18V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 20V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Rh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `flip-horizontally ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 34L16 12V34H4Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44 34H32V12L44 34Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Eh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `flip-vertically ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 24L6 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 4L36 16H14V4Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 44V32H36L14 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Dh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `font-size ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M8 10.9333L8 6H40V10.9333",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 42H32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Bh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `line-height ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 7H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 41H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 13L14 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 28L30 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 13L34 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Fh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `line-width ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 40L5 8",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 13L14 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M18 28L30 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 13L34 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M43 40L43 8",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Oh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `title-h1 ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M25 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 24H25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M34.2261 24L39.0001 19.0166V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Zh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `title-h2 ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7 24H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 25C32 21.8334 34.6667 20 37 20C39.3334 20 42 21.8334 42 25C42 30.7 32 34.9333 32 40H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Yh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `title-h3 ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M7 24H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M32 20H42L35 29C39 29 42 31 42 35C42 39 39 40 37 40C34.619 40 33 39 32 37.9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), _h = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `indent-left ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 9H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M19 19H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M19 29H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M11 19L6 24L11 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 39H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Uh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `indent-right ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M29 19H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M29 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M37 19L42 24L37 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 39H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), zh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `drop-shadow-up ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 43C28.4183 43 32.4183 41.2091 35.3138 38.3138C38.2091 35.4183 40 31.4183 40 27C40 22.5817 38.2091 18.5817 35.3138 15.6863C32.4183 12.7909 28.4183 11 24 11C19.5817 11 15.5817 12.7909 12.6863 15.6863C9.79086 18.5817 8 22.5817 8 27C8 31.4183 9.79086 35.4183 12.6863 38.3138C15.5817 41.2091 19.5817 43 24 43Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M39.5566 11.4437C35.5754 7.46244 30.0754 5 24.0002 5C17.9251 5 12.4251 7.46244 8.44385 11.4437",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Xh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `drop-shadow-down ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 37C28.4183 37 32.4183 35.2091 35.3138 32.3138C38.2091 29.4183 40 25.4183 40 21C40 16.5817 38.2091 12.5817 35.3138 9.68629C32.4183 6.79086 28.4183 5 24 5C19.5817 5 15.5817 6.79086 12.6863 9.68629C9.79086 12.5817 8 16.5817 8 21C8 25.4183 9.79086 29.4183 12.6863 32.3138C15.5817 35.2091 19.5817 37 24 37Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M39.5562 36.5564C35.5749 40.5374 30.0749 43 23.9997 43C17.9246 43 12.4246 40.5374 8.44336 36.5564",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Gh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `drop-shadow-left ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M27 40C31.4183 40 35.4183 38.2091 38.3138 35.3138C41.2091 32.4183 43 28.4183 43 24C43 19.5817 41.2091 15.5817 38.3138 12.6863C35.4183 9.79086 31.4183 8 27 8C22.5817 8 18.5817 9.79086 15.6863 12.6863C12.7909 15.5817 11 19.5817 11 24C11 28.4183 12.7909 32.4183 15.6863 35.3138C18.5817 38.2091 22.5817 40 27 40Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M11.4437 8.4436C7.46244 12.4248 5 17.9248 5 24C5 30.0751 7.46244 35.5751 11.4437 39.5564",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Kh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `drop-shadow-right ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M21 40C25.4183 40 29.4183 38.2091 32.3138 35.3138C35.2091 32.4183 37 28.4183 37 24C37 19.5817 35.2091 15.5817 32.3138 12.6863C29.4183 9.79086 25.4183 8 21 8C16.5817 8 12.5817 9.79086 9.68629 12.6863C6.79086 15.5817 5 19.5817 5 24C5 28.4183 6.79086 32.4183 9.68629 35.3138C12.5817 38.2091 16.5817 40 21 40Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36.5566 39.5564C40.5377 35.5751 43.0002 30.0751 43.0002 24C43.0002 17.9248 40.5377 12.4248 36.5566 8.4436",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), qh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `inner-shadow-left ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33.8996 14.1005C31.3661 11.567 27.8661 10 24.0001 10C20.1341 10 16.6341 11.567 14.1006 14.1005",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Jh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `inner-shadow-down ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33.8996 33.8995C31.3661 36.4329 27.8661 38 24.0001 38C20.1341 38 16.6341 36.4329 14.1006 33.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Qh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `inner-shadow-left ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14.1005 14.1005C11.567 16.634 10 20.134 10 24C10 27.866 11.567 31.366 14.1005 33.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Wh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `inner-shadow-right ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M33.8994 33.8995C36.4328 31.366 37.9999 27.866 37.9999 24C37.9999 20.134 36.4328 16.634 33.8994 14.1005",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), e1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `layer ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 11.9143L24 19L44 11.9143L24 5L4 11.9143Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 20L24 27L44 20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 28L24 35L44 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 36L24 43L44 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), t1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `check-list ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 10L8 13L14 7",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 24L8 27L14 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 38L8 41L14 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 38H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 10H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), n1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `alphabet-list ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 9H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 19H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 29H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 39H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 29H12L6 39H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s("path", { d: "M11 8.9999L7 9L6.3 16H11.7L11 8.9999Z", fill: "none" }),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 19L6.3 16M12 19L11.7 16M11.7 16L11 8.9999L7 9L6.3 16M11.7 16H6.3",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), r1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `checkbox-list ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20 24H44H20Z",
          fill: "none"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 24H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20 38H44H20Z",
          fill: "none"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 38H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20 10H44H20Z",
          fill: "none"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 10H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "rect",
        {
          x: "4",
          y: "34",
          width: "8",
          height: "8",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "rect",
        {
          x: "4",
          y: "20",
          width: "8",
          height: "8",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "rect",
        {
          x: "4",
          y: "6",
          width: "8",
          height: "8",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), o1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `radio-list ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9 42C11.2091 42 13 40.2091 13 38C13 35.7909 11.2091 34 9 34C6.79086 34 5 35.7909 5 38C5 40.2091 6.79086 42 9 42Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9 14C11.2091 14 13 12.2092 13 10C13 7.79086 11.2091 6 9 6C6.79086 6 5 7.79086 5 10C5 12.2092 6.79086 14 9 14Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9 28C11.2091 28 13 26.2092 13 24C13 21.7908 11.2091 20 9 20C6.79086 20 5 21.7908 5 24C5 26.2092 6.79086 28 9 28Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 38H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 10H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), s1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `number-list ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9 4V13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 13H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 27H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6 19.9998C6 19.9998 9 16.9998 11 19.9998C13 22.9999 6 26.9998 6 26.9998",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M6.00016 34.5001C6.00016 34.5001 8.00016 31.5 11.0002 33.5C14.0002 35.5 11.0002 38 11.0002 38C11.0002 38 14.0002 40.5 11.0002 42.5C8.00015 44.5 6.00015 41.5 6.00015 41.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M11 38H9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M9 4L6 6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 38H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M21 10H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), i1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `mask ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s("circle", { cx: "24", cy: "24", r: "20", stroke: e, strokeWidth: n }),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M31 5.25928C23.4067 8.09675 18 15.417 18 24.0001C18 32.5831 23.4067 39.9034 31 42.7408",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M37 9L18 22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M41 14L19 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M43 20L22 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M43 28L26 40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), a1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `delete-strike ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M5 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 24C40 30 34 44 24 44C13.9999 44 12 36 12 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M35.9999 12C35.9999 12 33 4 23.9999 4C14.9999 4 11.4359 11.5995 15.6096 18",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 36C12 36 15.9999 44 24 44C32 44 36.564 36.4005 32.3903 30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), c1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `tail ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 4V36H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 12H36V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 12H4",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 44V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), l1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-bold ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 24C29.5056 24 33.9688 19.5228 33.9688 14C33.9688 8.47715 29.5056 4 24 4H11V24H24Z",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M28.0312 44C33.5368 44 38 39.5228 38 34C38 28.4772 33.5368 24 28.0312 24H11V44H28.0312Z",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), d1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-italic ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M20 6H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M12 42H28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M29 5.95215L19 41.9998",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), u1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-underline ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M8 44H40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M37 6.09717C37 12.7638 37 15.3335 37 22.0002C37 29.1799 31.1797 35.0002 24 35.0002C16.8203 35.0002 11 29.1799 11 22.0002C11 15.3335 11 12.7638 11 6.09717",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), h1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `arrow-line ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 42V6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 30L24 42L12 30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), p1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `arrow-double ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 24L24 36L12 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 12L24 24L12 12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), f1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `arrow ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M36 18L24 30L12 18",
        stroke: e,
        strokeWidth: n,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), m1 = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `arrow-triangle ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s(
      "path",
      {
        d: "M36 19L24 31L12 19H36Z",
        fill: e,
        strokeLinejoin: "round"
      }
    )
  }
), g1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `arrow-to ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24.0083 33.8995V6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 22L24 34L12 22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M36 42H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), v1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `arrow-nav ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M14 12L26 24L14 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M34 12V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), k1 = ({
  color: e = "currentcolor",
  strokeWidth: t = 3,
  size: n = 16,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    className: `color-picker ${r}`,
    onClick: o,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M15 12L18 6H30L33 12H15Z",
          fill: "none",
          stroke: e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "rect",
        {
          x: "4",
          y: "12",
          width: "40",
          height: "30",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 35C28.4183 35 32 31.4183 32 27C32 22.5817 28.4183 19 24 19C19.5817 19 16 22.5817 16 27C16 31.4183 19.5817 35 24 35Z",
          fill: "none",
          stroke: e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), L1 = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = ""
}) => /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", width: t, height: t, viewBox: "0 0 16 16", fill: "none", style: n, className: r, children: /* @__PURE__ */ s("path", { d: "M14.0726 5.46403C13.5517 5.78293 13.1202 6.22878 12.8186 6.75984C12.5169 7.2909 12.3549 7.88981 12.3478 8.50053C12.3498 9.18788 12.5535 9.85953 12.9335 10.4323C13.3135 11.005 13.8532 11.4538 14.4857 11.7228C14.2363 12.5274 13.8672 13.2899 13.3909 13.9846C12.7093 14.9658 11.9966 15.9469 10.9122 15.9469C9.82777 15.9469 9.54887 15.3169 8.29917 15.3169C7.08047 15.3169 6.64667 15.9676 5.65517 15.9676C4.66367 15.9676 3.97177 15.0587 3.17647 13.9433C2.12594 12.3808 1.54858 10.5483 1.51367 8.66573C1.51367 5.56733 3.52767 3.92523 5.51057 3.92523C6.56407 3.92523 7.44197 4.61713 8.10297 4.61713C8.73297 4.61713 9.71417 3.88383 10.9122 3.88383C11.5281 3.86793 12.1386 4.00375 12.6897 4.27931C13.2408 4.55487 13.7157 4.96172 14.0726 5.46403ZM10.3442 2.57223C10.8723 1.95099 11.1712 1.16735 11.1911 0.352226C11.192 0.244769 11.1816 0.137514 11.1601 0.0322266C10.2529 0.12084 9.41408 0.553201 8.81557 1.24063C8.28238 1.83711 7.97217 2.59982 7.93767 3.39913C7.93807 3.49633 7.94846 3.59324 7.96867 3.68833C8.04019 3.70185 8.11279 3.70877 8.18557 3.70903C8.60365 3.67576 9.01059 3.55783 9.38167 3.3624C9.75275 3.16698 10.0802 2.89814 10.3442 2.57223Z", fill: e }) }), w1 = {
  // Navigation
  home: xl,
  "home-fill": bl,
  application: Nl,
  more: Sl,
  "more-line": Vl,
  search: zl,
  // Interface
  refresh: jl,
  female: $l,
  male: Tl,
  "preview-open": Al,
  "preview-close": Il,
  avatar: Pl,
  tag: Hl,
  setting: Rl,
  "config-setting": Dl,
  collection: Bl,
  share: Fl,
  translate: Ol,
  light: Zl,
  dark: _l,
  "light-fill": Yl,
  "dark-fill": Ul,
  "setting-fill": El,
  // Media
  image: Xl,
  "video-play": Gl,
  "video-pause": Kl,
  volume: ql,
  "volume-muted": Jl,
  "video-small-screen": Ql,
  "video-full-width": Wl,
  loop: ed,
  // File
  file: td,
  download: nd,
  upload: rd,
  "web-add": od,
  announcement: sd,
  "audio-file": id,
  book: ad,
  clipboard: cd,
  document: ld,
  email: Vd,
  "email-download": dd,
  "email-push": ud,
  "email-success": hd,
  "email-fail": pd,
  "email-open": jd,
  "file-add": fd,
  "code-file": md,
  "star-file": gd,
  "text-file": vd,
  "text-scan": Ad,
  folder: kd,
  "code-folder": Ld,
  "folder-download": wd,
  "folder-add": yd,
  "folder-upload": Cd,
  "formatting-brush": Md,
  instruction: xd,
  "list-view": bd,
  link: Nd,
  log: Sd,
  "note-pad": $d,
  schedule: Td,
  "web-page": Id,
  plan: Pd,
  calendar: Hd,
  code: Rd,
  // Ecommerce
  coupon: Ed,
  ticket: Dd,
  "bank-card": Bd,
  consume: Fd,
  commodity: Od,
  dollar: Zd,
  // State
  "check-stroke": Yd,
  "check-fill": _d,
  check: Ud,
  "error-stroke": zd,
  "error-fill": Xd,
  error: qi,
  "info-stroke": Gd,
  "info-fill": Kd,
  info: qd,
  "attention-stroke": Jd,
  "attention-fill": Qd,
  attention: Wd,
  "question-stroke": eu,
  "question-fill": tu,
  question: nu,
  "hourglass-empty": ru,
  "hourglass-full": ou,
  increase: su,
  // Operate
  "switch-gear": iu,
  toggle: au,
  collapse: cu,
  reload: lu,
  undo: du,
  sort: uu,
  "sort-descending": hu,
  "sort-ascending": pu,
  back: fu,
  "last-step": mu,
  "last-step-fill": gu,
  "next-step": vu,
  "next-step-fill": ku,
  ahead: Lu,
  drag: wu,
  add: yu,
  dec: Cu,
  "square-add": Hu,
  "dash-add": Ru,
  clear: Mu,
  delete: xu,
  copy: bu,
  close: Nu,
  "color-picker": Su,
  "zoom-in-arrow": Vu,
  "zoom-out-arrow": ju,
  "zoom-in": $u,
  "zoom-out": Tu,
  "zoom-in-btn": Iu,
  "zoom-out-btn": Pu,
  out: Au,
  adjustment: Eu,
  "alphabetical-sorting": Du,
  "alphabetical-sorting-reverse": Bu,
  brightness: Fu,
  layer: e1,
  "layer-front": Ou,
  "layer-back": Zu,
  "clear-formate": Yu,
  edit: _u,
  "clip-edit": Uu,
  filter: zu,
  lock: Xu,
  unlock: Gu,
  "merge-cells": Ku,
  "split-cells": qu,
  "cursor-move": Ju,
  "cursor-move-fill": Qu,
  "line-break": Wu,
  quote: eh,
  scan: th,
  like: nh,
  "like-fill": rh,
  star: oh,
  "star-fill": sh,
  pen: ih,
  // Arrow
  "arrow-line": h1,
  "arrow-double": p1,
  arrow: f1,
  "arrow-triangle": m1,
  "arrow-to": g1,
  "arrow-nav": v1,
  // Device
  camera: k1,
  apple: L1,
  // Style
  "align-bottom": ah,
  "align-top": ch,
  "align-left": lh,
  "align-right": dh,
  "align-horizontally": uh,
  "align-vertically": hh,
  "text-align-left": ph,
  "text-align-right": fh,
  "text-align-center": mh,
  "text-align-justify": gh,
  "text-align-middle": vh,
  "align-bottom-center": kh,
  "align-bottom-left": Lh,
  "align-bottom-right": wh,
  "align-horizontal-bottom": yh,
  "align-horizontal-center": Ch,
  "align-horizontal-top": Mh,
  "align-left-bottom": xh,
  "align-left-center": bh,
  "align-left-top": Nh,
  "align-right-bottom": Sh,
  "align-right-center": Vh,
  "align-right-top": jh,
  "align-top-center": $h,
  "align-top-left": Th,
  "align-top-right": Ah,
  "align-vertical-left": Ph,
  "align-vertical-center": Ih,
  "align-vertical-right": Hh,
  "flip-horizontally": Rh,
  "flip-vertically": Eh,
  "font-size": Dh,
  "line-height": Bh,
  "text-bold": l1,
  "text-italic": d1,
  "text-underline": u1,
  "line-width": Fh,
  "title-h1": Oh,
  "title-h2": Zh,
  "title-h3": Yh,
  "indent-left": _h,
  "indent-right": Uh,
  "drop-shadow-up": zh,
  "drop-shadow-down": Xh,
  "drop-shadow-left": Gh,
  "drop-shadow-right": Kh,
  "inner-shadow-up": qh,
  "inner-shadow-down": Jh,
  "inner-shadow-left": Qh,
  "inner-shadow-right": Wh,
  "check-list": t1,
  "alphabet-list": n1,
  "checkbox-list": r1,
  "radio-list": o1,
  "number-list": s1,
  mask: i1,
  "delete-strike": a1,
  tail: c1
}, Z = ({ name: e, ...t }) => {
  const n = w1[e];
  return n ? /* @__PURE__ */ s(n, { ...t }) : (console.warn(`Icon "${e}" not found`), /* @__PURE__ */ s(qi, { ...t }));
}, ao = At({});
function co(e) {
  const t = q(null);
  return t.current === null && (t.current = e()), t.current;
}
const lo = typeof window < "u", Ji = lo ? kl : Y, _n = /* @__PURE__ */ At(null);
function uo(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ho(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Ue = (e, t, n) => n > t ? t : n < e ? e : n;
let It = () => {
}, ze = () => {
};
process.env.NODE_ENV !== "production" && (It = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, ze = (e, t) => {
  if (!e)
    throw new Error(t);
});
const Xe = {}, Qi = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Wi(e) {
  return typeof e == "object" && e !== null;
}
const ea = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function po(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const $e = /* @__NO_SIDE_EFFECTS__ */ (e) => e, y1 = (e, t) => (n) => t(e(n)), rn = (...e) => e.reduce(y1), Gt = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class fo {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return uo(this.subscriptions, t), () => ho(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const He = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Oe = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function ta(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ss = /* @__PURE__ */ new Set();
function mo(e, t, n) {
  e || ss.has(t) || (console.warn(t), ss.add(t));
}
const na = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, C1 = 1e-7, M1 = 12;
function x1(e, t, n, r, o) {
  let i, a, c = 0;
  do
    a = t + (n - t) / 2, i = na(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > C1 && ++c < M1);
  return a;
}
function on(e, t, n, r) {
  if (e === t && n === r)
    return $e;
  const o = (i) => x1(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : na(o(i), t, r);
}
const ra = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, oa = (e) => (t) => 1 - e(1 - t), sa = /* @__PURE__ */ on(0.33, 1.53, 0.69, 0.99), go = /* @__PURE__ */ oa(sa), ia = /* @__PURE__ */ ra(go), aa = (e) => (e *= 2) < 1 ? 0.5 * go(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), vo = (e) => 1 - Math.sin(Math.acos(e)), ca = oa(vo), la = ra(vo), b1 = /* @__PURE__ */ on(0.42, 0, 1, 1), N1 = /* @__PURE__ */ on(0, 0, 0.58, 1), da = /* @__PURE__ */ on(0.42, 0, 0.58, 1), S1 = (e) => Array.isArray(e) && typeof e[0] != "number", ua = (e) => Array.isArray(e) && typeof e[0] == "number", is = {
  linear: $e,
  easeIn: b1,
  easeInOut: da,
  easeOut: N1,
  circIn: vo,
  circInOut: la,
  circOut: ca,
  backIn: go,
  backInOut: ia,
  backOut: sa,
  anticipate: aa
}, V1 = (e) => typeof e == "string", as = (e) => {
  if (ua(e)) {
    ze(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return on(t, n, r, o);
  } else if (V1(e))
    return ze(is[e] !== void 0, `Invalid easing type '${e}'`), is[e];
  return e;
}, vn = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], cs = {
  value: null
};
function j1(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = !1, i = !1;
  const a = /* @__PURE__ */ new WeakSet();
  let c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, l = 0;
  function u(h) {
    a.has(h) && (d.schedule(h), e()), l++, h(c);
  }
  const d = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (h, p = !1, f = !1) => {
      const v = f && o ? n : r;
      return p && a.add(h), v.has(h) || v.add(h), h;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (h) => {
      r.delete(h), a.delete(h);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (h) => {
      if (c = h, o) {
        i = !0;
        return;
      }
      o = !0, [n, r] = [r, n], n.forEach(u), t && cs.value && cs.value.frameloop[t].push(l), l = 0, n.clear(), o = !1, i && (i = !1, d.process(h));
    }
  };
  return d;
}
const $1 = 40;
function ha(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, a = vn.reduce((C, x) => (C[x] = j1(i, t ? x : void 0), C), {}), { setup: c, read: l, resolveKeyframes: u, preUpdate: d, update: h, preRender: p, render: f, postRender: k } = a, v = () => {
    const C = Xe.useManualTiming ? o.timestamp : performance.now();
    n = !1, Xe.useManualTiming || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(C - o.timestamp, $1), 1)), o.timestamp = C, o.isProcessing = !0, c.process(o), l.process(o), u.process(o), d.process(o), h.process(o), p.process(o), f.process(o), k.process(o), o.isProcessing = !1, n && t && (r = !1, e(v));
  }, M = () => {
    n = !0, r = !0, o.isProcessing || e(v);
  };
  return { schedule: vn.reduce((C, x) => {
    const N = a[x];
    return C[x] = (L, y = !1, b = !1) => (n || M(), N.schedule(L, y, b)), C;
  }, {}), cancel: (C) => {
    for (let x = 0; x < vn.length; x++)
      a[vn[x]].cancel(C);
  }, state: o, steps: a };
}
const { schedule: ae, cancel: Je, state: Le, steps: hr } = /* @__PURE__ */ ha(typeof requestAnimationFrame < "u" ? requestAnimationFrame : $e, !0);
let bn;
function T1() {
  bn = void 0;
}
const Ne = {
  now: () => (bn === void 0 && Ne.set(Le.isProcessing || Xe.useManualTiming ? Le.timestamp : performance.now()), bn),
  set: (e) => {
    bn = e, queueMicrotask(T1);
  }
}, pa = (e) => (t) => typeof t == "string" && t.startsWith(e), ko = /* @__PURE__ */ pa("--"), A1 = /* @__PURE__ */ pa("var(--"), Lo = (e) => A1(e) ? I1.test(e.split("/*")[0].trim()) : !1, I1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Pt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Kt = {
  ...Pt,
  transform: (e) => Ue(0, 1, e)
}, kn = {
  ...Pt,
  default: 1
}, Yt = (e) => Math.round(e * 1e5) / 1e5, wo = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function P1(e) {
  return e == null;
}
const H1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, yo = (e, t) => (n) => !!(typeof n == "string" && H1.test(n) && n.startsWith(e) || t && !P1(n) && Object.prototype.hasOwnProperty.call(n, t)), fa = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, i, a, c] = r.match(wo);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: c !== void 0 ? parseFloat(c) : 1
  };
}, R1 = (e) => Ue(0, 255, e), pr = {
  ...Pt,
  transform: (e) => Math.round(R1(e))
}, ot = {
  test: /* @__PURE__ */ yo("rgb", "red"),
  parse: /* @__PURE__ */ fa("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + pr.transform(e) + ", " + pr.transform(t) + ", " + pr.transform(n) + ", " + Yt(Kt.transform(r)) + ")"
};
function E1(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const $r = {
  test: /* @__PURE__ */ yo("#"),
  parse: E1,
  transform: ot.transform
}, sn = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Ke = /* @__PURE__ */ sn("deg"), Ze = /* @__PURE__ */ sn("%"), J = /* @__PURE__ */ sn("px"), D1 = /* @__PURE__ */ sn("vh"), B1 = /* @__PURE__ */ sn("vw"), ls = {
  ...Ze,
  parse: (e) => Ze.parse(e) / 100,
  transform: (e) => Ze.transform(e * 100)
}, vt = {
  test: /* @__PURE__ */ yo("hsl", "hue"),
  parse: /* @__PURE__ */ fa("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ze.transform(Yt(t)) + ", " + Ze.transform(Yt(n)) + ", " + Yt(Kt.transform(r)) + ")"
}, pe = {
  test: (e) => ot.test(e) || $r.test(e) || vt.test(e),
  parse: (e) => ot.test(e) ? ot.parse(e) : vt.test(e) ? vt.parse(e) : $r.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? ot.transform(e) : vt.transform(e),
  getAnimatableNone: (e) => {
    const t = pe.parse(e);
    return t.alpha = 0, pe.transform(t);
  }
}, F1 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function O1(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(wo)) == null ? void 0 : t.length) || 0) + (((n = e.match(F1)) == null ? void 0 : n.length) || 0) > 0;
}
const ma = "number", ga = "color", Z1 = "var", Y1 = "var(", ds = "${}", _1 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function qt(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const c = t.replace(_1, (l) => (pe.test(l) ? (r.color.push(i), o.push(ga), n.push(pe.parse(l))) : l.startsWith(Y1) ? (r.var.push(i), o.push(Z1), n.push(l)) : (r.number.push(i), o.push(ma), n.push(parseFloat(l))), ++i, ds)).split(ds);
  return { values: n, split: c, indexes: r, types: o };
}
function va(e) {
  return qt(e).values;
}
function ka(e) {
  const { split: t, types: n } = qt(e), r = t.length;
  return (o) => {
    let i = "";
    for (let a = 0; a < r; a++)
      if (i += t[a], o[a] !== void 0) {
        const c = n[a];
        c === ma ? i += Yt(o[a]) : c === ga ? i += pe.transform(o[a]) : i += o[a];
      }
    return i;
  };
}
const U1 = (e) => typeof e == "number" ? 0 : pe.test(e) ? pe.getAnimatableNone(e) : e;
function z1(e) {
  const t = va(e);
  return ka(e)(t.map(U1));
}
const Qe = {
  test: O1,
  parse: va,
  createTransformer: ka,
  getAnimatableNone: z1
};
function fr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function X1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const c = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - c;
    o = fr(l, c, e + 1 / 3), i = fr(l, c, e), a = fr(l, c, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
function Hn(e, t) {
  return (n) => n > 0 ? t : e;
}
const le = (e, t, n) => e + (t - e) * n, mr = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, G1 = [$r, ot, vt], K1 = (e) => G1.find((t) => t.test(e));
function us(e) {
  const t = K1(e);
  if (It(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === vt && (n = X1(n)), n;
}
const hs = (e, t) => {
  const n = us(e), r = us(t);
  if (!n || !r)
    return Hn(e, t);
  const o = { ...n };
  return (i) => (o.red = mr(n.red, r.red, i), o.green = mr(n.green, r.green, i), o.blue = mr(n.blue, r.blue, i), o.alpha = le(n.alpha, r.alpha, i), ot.transform(o));
}, Tr = /* @__PURE__ */ new Set(["none", "hidden"]);
function q1(e, t) {
  return Tr.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function J1(e, t) {
  return (n) => le(e, t, n);
}
function Co(e) {
  return typeof e == "number" ? J1 : typeof e == "string" ? Lo(e) ? Hn : pe.test(e) ? hs : e2 : Array.isArray(e) ? La : typeof e == "object" ? pe.test(e) ? hs : Q1 : Hn;
}
function La(e, t) {
  const n = [...e], r = n.length, o = e.map((i, a) => Co(i)(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}
function Q1(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Co(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function W1(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const i = t.types[o], a = e.indexes[i][r[i]], c = e.values[a] ?? 0;
    n[o] = c, r[i]++;
  }
  return n;
}
const e2 = (e, t) => {
  const n = Qe.createTransformer(t), r = qt(e), o = qt(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Tr.has(e) && !o.values.length || Tr.has(t) && !r.values.length ? q1(e, t) : rn(La(W1(r, o), o.values), n) : (It(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Hn(e, t));
};
function wa(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? le(e, t, n) : Co(e)(e, t);
}
const t2 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => ae.update(t, n),
    stop: () => Je(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Le.isProcessing ? Le.timestamp : Ne.now()
  };
}, ya = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < o; i++)
    r += Math.round(e(i / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Rn = 2e4;
function Mo(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Rn; )
    t += n, r = e.next(t);
  return t >= Rn ? 1 / 0 : t;
}
function n2(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), o = Math.min(Mo(r), Rn);
  return {
    type: "keyframes",
    ease: (i) => r.next(o * i).value / t,
    duration: /* @__PURE__ */ Oe(o)
  };
}
const r2 = 5;
function Ca(e, t, n) {
  const r = Math.max(t - r2, 0);
  return ta(n - e(r), t - r);
}
const ce = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, gr = 1e-3;
function o2({ duration: e = ce.duration, bounce: t = ce.bounce, velocity: n = ce.velocity, mass: r = ce.mass }) {
  let o, i;
  It(e <= /* @__PURE__ */ He(ce.maxDuration), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  a = Ue(ce.minDamping, ce.maxDamping, a), e = Ue(ce.minDuration, ce.maxDuration, /* @__PURE__ */ Oe(e)), a < 1 ? (o = (u) => {
    const d = u * a, h = d * e, p = d - n, f = Ar(u, a), k = Math.exp(-h);
    return gr - p / f * k;
  }, i = (u) => {
    const h = u * a * e, p = h * n + n, f = Math.pow(a, 2) * Math.pow(u, 2) * e, k = Math.exp(-h), v = Ar(Math.pow(u, 2), a);
    return (-o(u) + gr > 0 ? -1 : 1) * ((p - f) * k) / v;
  }) : (o = (u) => {
    const d = Math.exp(-u * e), h = (u - n) * e + 1;
    return -gr + d * h;
  }, i = (u) => {
    const d = Math.exp(-u * e), h = (n - u) * (e * e);
    return d * h;
  });
  const c = 5 / e, l = i2(o, i, c);
  if (e = /* @__PURE__ */ He(e), isNaN(l))
    return {
      stiffness: ce.stiffness,
      damping: ce.damping,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * r;
    return {
      stiffness: u,
      damping: a * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const s2 = 12;
function i2(e, t, n) {
  let r = n;
  for (let o = 1; o < s2; o++)
    r = r - e(r) / t(r);
  return r;
}
function Ar(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const a2 = ["duration", "bounce"], c2 = ["stiffness", "damping", "mass"];
function ps(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function l2(e) {
  let t = {
    velocity: ce.velocity,
    stiffness: ce.stiffness,
    damping: ce.damping,
    mass: ce.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!ps(e, c2) && ps(e, a2))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, i = 2 * Ue(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: ce.mass,
        stiffness: o,
        damping: i
      };
    } else {
      const n = o2(e);
      t = {
        ...t,
        ...n,
        mass: ce.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function En(e = ce.visualDuration, t = ce.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0], a = n.keyframes[n.keyframes.length - 1], c = { done: !1, value: i }, { stiffness: l, damping: u, mass: d, duration: h, velocity: p, isResolvedFromDuration: f } = l2({
    ...n,
    velocity: -/* @__PURE__ */ Oe(n.velocity || 0)
  }), k = p || 0, v = u / (2 * Math.sqrt(l * d)), M = a - i, g = /* @__PURE__ */ Oe(Math.sqrt(l / d)), w = Math.abs(M) < 5;
  r || (r = w ? ce.restSpeed.granular : ce.restSpeed.default), o || (o = w ? ce.restDelta.granular : ce.restDelta.default);
  let C;
  if (v < 1) {
    const N = Ar(g, v);
    C = (L) => {
      const y = Math.exp(-v * g * L);
      return a - y * ((k + v * g * M) / N * Math.sin(N * L) + M * Math.cos(N * L));
    };
  } else if (v === 1)
    C = (N) => a - Math.exp(-g * N) * (M + (k + g * M) * N);
  else {
    const N = g * Math.sqrt(v * v - 1);
    C = (L) => {
      const y = Math.exp(-v * g * L), b = Math.min(N * L, 300);
      return a - y * ((k + v * g * M) * Math.sinh(b) + N * M * Math.cosh(b)) / N;
    };
  }
  const x = {
    calculatedDuration: f && h || null,
    next: (N) => {
      const L = C(N);
      if (f)
        c.done = N >= h;
      else {
        let y = N === 0 ? k : 0;
        v < 1 && (y = N === 0 ? /* @__PURE__ */ He(k) : Ca(C, N, L));
        const b = Math.abs(y) <= r, j = Math.abs(a - L) <= o;
        c.done = b && j;
      }
      return c.value = c.done ? a : L, c;
    },
    toString: () => {
      const N = Math.min(Mo(x), Rn), L = ya((y) => x.next(N * y).value, N, 30);
      return N + "ms " + L;
    },
    toTransition: () => {
    }
  };
  return x;
}
En.applyToOptions = (e) => {
  const t = n2(e, 100, En);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ He(t.duration), e.type = "keyframes", e;
};
function Ir({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: c, max: l, restDelta: u = 0.5, restSpeed: d }) {
  const h = e[0], p = {
    done: !1,
    value: h
  }, f = (b) => c !== void 0 && b < c || l !== void 0 && b > l, k = (b) => c === void 0 ? l : l === void 0 || Math.abs(c - b) < Math.abs(l - b) ? c : l;
  let v = n * t;
  const M = h + v, g = a === void 0 ? M : a(M);
  g !== M && (v = g - h);
  const w = (b) => -v * Math.exp(-b / r), C = (b) => g + w(b), x = (b) => {
    const j = w(b), V = C(b);
    p.done = Math.abs(j) <= u, p.value = p.done ? g : V;
  };
  let N, L;
  const y = (b) => {
    f(p.value) && (N = b, L = En({
      keyframes: [p.value, k(p.value)],
      velocity: Ca(C, b, p.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: d
    }));
  };
  return y(0), {
    calculatedDuration: null,
    next: (b) => {
      let j = !1;
      return !L && N === void 0 && (j = !0, x(b), y(b)), N !== void 0 && b >= N ? L.next(b - N) : (!j && x(b), p);
    }
  };
}
function d2(e, t, n) {
  const r = [], o = n || Xe.mix || wa, i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let c = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || $e : t;
      c = rn(l, c);
    }
    r.push(c);
  }
  return r;
}
function u2(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (ze(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const a = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const c = d2(t, r, o), l = c.length, u = (d) => {
    if (a && d < e[0])
      return t[0];
    let h = 0;
    if (l > 1)
      for (; h < e.length - 2 && !(d < e[h + 1]); h++)
        ;
    const p = /* @__PURE__ */ Gt(e[h], e[h + 1], d);
    return c[h](p);
  };
  return n ? (d) => u(Ue(e[0], e[i - 1], d)) : u;
}
function h2(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ Gt(0, t, r);
    e.push(le(n, 1, o));
  }
}
function p2(e) {
  const t = [0];
  return h2(t, e.length - 1), t;
}
function f2(e, t) {
  return e.map((n) => n * t);
}
function m2(e, t) {
  return e.map(() => t || da).splice(0, e.length - 1);
}
function kt({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = S1(r) ? r.map(as) : as(r), i = {
    done: !1,
    value: t[0]
  }, a = f2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : p2(t),
    e
  ), c = u2(a, t, {
    ease: Array.isArray(o) ? o : m2(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = c(l), i.done = l >= e, i)
  };
}
const g2 = (e) => e !== null;
function xo(e, { repeat: t, repeatType: n = "loop" }, r, o = 1) {
  const i = e.filter(g2), c = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !c || r === void 0 ? i[c] : r;
}
const v2 = {
  decay: Ir,
  inertia: Ir,
  tween: kt,
  keyframes: kt,
  spring: En
};
function Ma(e) {
  typeof e.type == "string" && (e.type = v2[e.type]);
}
class bo {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const k2 = (e) => e / 100;
class No extends bo {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var r, o;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Ne.now() && this.tick(Ne.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (o = (r = this.options).onStop) == null || o.call(r));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Ma(t);
    const { type: n = kt, repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: a = 0 } = t;
    let { keyframes: c } = t;
    const l = n || kt;
    process.env.NODE_ENV !== "production" && l !== kt && ze(c.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${c}`), l !== kt && typeof c[0] != "number" && (this.mixKeyframes = rn(k2, wa(c[0], c[1])), c = [0, 100]);
    const u = l({ ...t, keyframes: c });
    i === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...c].reverse(),
      velocity: -a
    })), u.calculatedDuration === null && (u.calculatedDuration = Mo(u));
    const { calculatedDuration: d } = u;
    this.calculatedDuration = d, this.resolvedDuration = d + o, this.totalDuration = this.resolvedDuration * (r + 1) - o, this.generator = u;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: o, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: c, calculatedDuration: l } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: u = 0, keyframes: d, repeat: h, repeatType: p, repeatDelay: f, type: k, onUpdate: v, finalKeyframe: M } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), w = this.playbackSpeed >= 0 ? g < 0 : g > o;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let C = this.currentTime, x = r;
    if (h) {
      const b = Math.min(this.currentTime, o) / c;
      let j = Math.floor(b), V = b % 1;
      !V && b >= 1 && (V = 1), V === 1 && j--, j = Math.min(j, h + 1), !!(j % 2) && (p === "reverse" ? (V = 1 - V, f && (V -= f / c)) : p === "mirror" && (x = a)), C = Ue(0, 1, V) * c;
    }
    const N = w ? { done: !1, value: d[0] } : x.next(C);
    i && (N.value = i(N.value));
    let { done: L } = N;
    !w && l !== null && (L = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const y = this.holdTime === null && (this.state === "finished" || this.state === "running" && L);
    return y && k !== Ir && (N.value = xo(d, this.options, M, this.speed)), v && v(N.value), y && this.finish(), N;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return /* @__PURE__ */ Oe(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ Oe(this.currentTime);
  }
  set time(t) {
    var n;
    t = /* @__PURE__ */ He(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Ne.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ Oe(this.currentTime));
  }
  play() {
    var o, i;
    if (this.isStopped)
      return;
    const { driver: t = t2, startTime: n } = this.options;
    this.driver || (this.driver = t((a) => this.tick(a))), (i = (o = this.options).onPlay) == null || i.call(o);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ne.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var t, n;
    this.notifyFinished(), this.teardown(), this.state = "finished", (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), t.observe(this);
  }
}
function L2(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const st = (e) => e * 180 / Math.PI, Pr = (e) => {
  const t = st(Math.atan2(e[1], e[0]));
  return Hr(t);
}, w2 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Pr,
  rotateZ: Pr,
  skewX: (e) => st(Math.atan(e[1])),
  skewY: (e) => st(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Hr = (e) => (e = e % 360, e < 0 && (e += 360), e), fs = Pr, ms = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), gs = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), y2 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ms,
  scaleY: gs,
  scale: (e) => (ms(e) + gs(e)) / 2,
  rotateX: (e) => Hr(st(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Hr(st(Math.atan2(-e[2], e[0]))),
  rotateZ: fs,
  rotate: fs,
  skewX: (e) => st(Math.atan(e[4])),
  skewY: (e) => st(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Rr(e) {
  return e.includes("scale") ? 1 : 0;
}
function Er(e, t) {
  if (!e || e === "none")
    return Rr(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n)
    r = y2, o = n;
  else {
    const c = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = w2, o = c;
  }
  if (!o)
    return Rr(t);
  const i = r[t], a = o[1].split(",").map(M2);
  return typeof i == "function" ? i(a) : a[i];
}
const C2 = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Er(n, t);
};
function M2(e) {
  return parseFloat(e.trim());
}
const Ht = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Rt = new Set(Ht), vs = (e) => e === Pt || e === J, x2 = /* @__PURE__ */ new Set(["x", "y", "z"]), b2 = Ht.filter((e) => !x2.has(e));
function N2(e) {
  const t = [];
  return b2.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const at = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => Er(t, "x"),
  y: (e, { transform: t }) => Er(t, "y")
};
at.translateX = at.x;
at.translateY = at.y;
const ct = /* @__PURE__ */ new Set();
let Dr = !1, Br = !1, Fr = !1;
function xa() {
  if (Br) {
    const e = Array.from(ct).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = N2(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([i, a]) => {
        var c;
        (c = r.getValue(i)) == null || c.set(a);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Br = !1, Dr = !1, ct.forEach((e) => e.complete(Fr)), ct.clear();
}
function ba() {
  ct.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Br = !0);
  });
}
function S2() {
  Fr = !0, ba(), xa(), Fr = !1;
}
class So {
  constructor(t, n, r, o, i, a = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = a;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ct.add(this), Dr || (Dr = !0, ae.read(ba), ae.resolveKeyframes(xa))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    if (t[0] === null) {
      const i = o == null ? void 0 : o.get(), a = t[t.length - 1];
      if (i !== void 0)
        t[0] = i;
      else if (r && n) {
        const c = r.readValue(n, a);
        c != null && (t[0] = c);
      }
      t[0] === void 0 && (t[0] = a), o && i === void 0 && o.set(t[0]);
    }
    L2(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), ct.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ct.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const V2 = (e) => e.startsWith("--");
function j2(e, t, n) {
  V2(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const $2 = /* @__PURE__ */ po(() => window.ScrollTimeline !== void 0), T2 = {};
function A2(e, t) {
  const n = /* @__PURE__ */ po(e);
  return () => T2[t] ?? n();
}
const Na = /* @__PURE__ */ A2(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Ot = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, ks = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Ot([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Ot([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Ot([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Ot([0.33, 1.53, 0.69, 0.99])
};
function Sa(e, t) {
  if (e)
    return typeof e == "function" ? Na() ? ya(e, t) : "ease-out" : ua(e) ? Ot(e) : Array.isArray(e) ? e.map((n) => Sa(n, t) || ks.easeOut) : ks[e];
}
function I2(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: a = "loop", ease: c = "easeOut", times: l } = {}, u = void 0) {
  const d = {
    [t]: n
  };
  l && (d.offset = l);
  const h = Sa(c, o);
  Array.isArray(h) && (d.easing = h);
  const p = {
    delay: r,
    duration: o,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  };
  return u && (p.pseudoElement = u), e.animate(d, p);
}
function Va(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function P2({ type: e, ...t }) {
  return Va(e) && Na() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class H2 extends bo {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: o, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: c, onComplete: l } = t;
    this.isPseudoElement = !!i, this.allowFlatten = a, this.options = t, ze(typeof t.type != "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
    const u = P2(t);
    this.animation = I2(n, r, o, u, i), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !i) {
        const d = xo(o, this.options, c, this.speed);
        this.updateMotionValue ? this.updateMotionValue(d) : j2(n, r, d), this.animation.cancel();
      }
      l == null || l(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var t, n;
    this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t);
  }
  get duration() {
    var n, r;
    const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
    return /* @__PURE__ */ Oe(Number(t));
  }
  get time() {
    return /* @__PURE__ */ Oe(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ He(t);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && $2() ? (this.animation.timeline = t, $e) : n(this);
  }
}
const ja = {
  anticipate: aa,
  backInOut: ia,
  circInOut: la
};
function R2(e) {
  return e in ja;
}
function E2(e) {
  typeof e.ease == "string" && R2(e.ease) && (e.ease = ja[e.ease]);
}
const Ls = 10;
class D2 extends H2 {
  constructor(t) {
    E2(t), Ma(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: r, onComplete: o, element: i, ...a } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const c = new No({
      ...a,
      autoplay: !1
    }), l = /* @__PURE__ */ He(this.finishedTime ?? this.time);
    n.setWithVelocity(c.sample(l - Ls).value, c.sample(l).value, Ls), c.stop();
  }
}
const ws = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Qe.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function B2(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function F2(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], a = ws(o, t), c = ws(i, t);
  return It(a === c, `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`), !a || !c ? !1 : B2(e) || (n === "spring" || Va(n)) && r;
}
function Vo(e) {
  return Wi(e) && "offsetHeight" in e;
}
const O2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), Z2 = /* @__PURE__ */ po(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Y2(e) {
  var u;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: o, damping: i, type: a } = e;
  if (!Vo((u = t == null ? void 0 : t.owner) == null ? void 0 : u.current))
    return !1;
  const { onUpdate: c, transformTemplate: l } = t.owner.getProps();
  return Z2() && n && O2.has(n) && (n !== "transform" || !l) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !r && o !== "mirror" && i !== 0 && a !== "inertia";
}
const _2 = 40;
class U2 extends bo {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: c, name: l, motionValue: u, element: d, ...h }) {
    var k;
    super(), this.stop = () => {
      var v, M;
      this._animation && (this._animation.stop(), (v = this.stopTimeline) == null || v.call(this)), (M = this.keyframeResolver) == null || M.cancel();
    }, this.createdAt = Ne.now();
    const p = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: i,
      repeatType: a,
      name: l,
      motionValue: u,
      element: d,
      ...h
    }, f = (d == null ? void 0 : d.KeyframeResolver) || So;
    this.keyframeResolver = new f(c, (v, M, g) => this.onKeyframesResolved(v, M, p, !g), l, u, d), (k = this.keyframeResolver) == null || k.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, o) {
    this.keyframeResolver = void 0;
    const { name: i, type: a, velocity: c, delay: l, isHandoff: u, onUpdate: d } = r;
    this.resolvedAt = Ne.now(), F2(t, i, a, c) || ((Xe.instantAnimations || !l) && (d == null || d(xo(t, r, n))), t[0] = t[t.length - 1], r.duration = 0, r.repeat = 0);
    const p = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > _2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, f = !u && Y2(p) ? new D2({
      ...p,
      element: p.motionValue.owner.current
    }) : new No(p);
    f.finished.then(() => this.notifyFinished()).catch($e), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    var t;
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), S2()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel();
  }
}
const z2 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function X2(e) {
  const t = z2.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const G2 = 4;
function $a(e, t, n = 1) {
  ze(n <= G2, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = X2(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return Qi(a) ? parseFloat(a) : a;
  }
  return Lo(o) ? $a(o, t, n + 1) : o;
}
function jo(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Ta = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ht
]), K2 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Aa = (e) => (t) => t.test(e), Ia = [Pt, J, Ze, Ke, B1, D1, K2], ys = (e) => Ia.find(Aa(e));
function q2(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ea(e) : !0;
}
const J2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Q2(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(wo) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = J2.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const W2 = /\b([a-z-]*)\(.*?\)/gu, Or = {
  ...Qe,
  getAnimatableNone: (e) => {
    const t = e.match(W2);
    return t ? t.map(Q2).join(" ") : e;
  }
}, Cs = {
  ...Pt,
  transform: Math.round
}, e4 = {
  rotate: Ke,
  rotateX: Ke,
  rotateY: Ke,
  rotateZ: Ke,
  scale: kn,
  scaleX: kn,
  scaleY: kn,
  scaleZ: kn,
  skew: Ke,
  skewX: Ke,
  skewY: Ke,
  distance: J,
  translateX: J,
  translateY: J,
  translateZ: J,
  x: J,
  y: J,
  z: J,
  perspective: J,
  transformPerspective: J,
  opacity: Kt,
  originX: ls,
  originY: ls,
  originZ: J
}, $o = {
  // Border props
  borderWidth: J,
  borderTopWidth: J,
  borderRightWidth: J,
  borderBottomWidth: J,
  borderLeftWidth: J,
  borderRadius: J,
  radius: J,
  borderTopLeftRadius: J,
  borderTopRightRadius: J,
  borderBottomRightRadius: J,
  borderBottomLeftRadius: J,
  // Positioning props
  width: J,
  maxWidth: J,
  height: J,
  maxHeight: J,
  top: J,
  right: J,
  bottom: J,
  left: J,
  // Spacing props
  padding: J,
  paddingTop: J,
  paddingRight: J,
  paddingBottom: J,
  paddingLeft: J,
  margin: J,
  marginTop: J,
  marginRight: J,
  marginBottom: J,
  marginLeft: J,
  // Misc
  backgroundPositionX: J,
  backgroundPositionY: J,
  ...e4,
  zIndex: Cs,
  // SVG
  fillOpacity: Kt,
  strokeOpacity: Kt,
  numOctaves: Cs
}, t4 = {
  ...$o,
  // Color props
  color: pe,
  backgroundColor: pe,
  outlineColor: pe,
  fill: pe,
  stroke: pe,
  // Border props
  borderColor: pe,
  borderTopColor: pe,
  borderRightColor: pe,
  borderBottomColor: pe,
  borderLeftColor: pe,
  filter: Or,
  WebkitFilter: Or
}, Pa = (e) => t4[e];
function Ha(e, t) {
  let n = Pa(e);
  return n !== Or && (n = Qe), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const n4 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function r4(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !n4.has(i) && qt(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = Ha(n, o);
}
class o4 extends So {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && (u = u.trim(), Lo(u))) {
        const d = $a(u, n.current);
        d !== void 0 && (t[l] = d), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Ta.has(r) || t.length !== 2)
      return;
    const [o, i] = t, a = ys(o), c = ys(i);
    if (a !== c)
      if (vs(a) && vs(c))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else at[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      (t[o] === null || q2(t[o])) && r.push(o);
    r.length && r4(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = at[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var c;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current)
      return;
    const o = t.getValue(n);
    o && o.jump(this.measuredOrigin, !1);
    const i = r.length - 1, a = r[i];
    r[i] = at[n](t.measureViewportBox(), window.getComputedStyle(t.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), (c = this.removedTransforms) != null && c.length && this.removedTransforms.forEach(([l, u]) => {
      t.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function s4(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const o = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
const Ra = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Ms = 30, i4 = (e) => !isNaN(parseFloat(e));
class a4 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      var a, c;
      const i = Ne.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((a = this.events.change) == null || a.notify(this.current), this.dependents))
        for (const l of this.dependents)
          l.dirty();
      o && ((c = this.events.renderRequest) == null || c.notify(this.current));
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ne.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = i4(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && mo(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new fo());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), ae.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = Ne.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Ms)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ms);
    return ta(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var t, n;
    (t = this.dependents) == null || t.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Mt(e, t) {
  return new a4(e, t);
}
const { schedule: To } = /* @__PURE__ */ ha(queueMicrotask, !1), Pe = {
  x: !1,
  y: !1
};
function Ea() {
  return Pe.x || Pe.y;
}
function c4(e) {
  return e === "x" || e === "y" ? Pe[e] ? null : (Pe[e] = !0, () => {
    Pe[e] = !1;
  }) : Pe.x || Pe.y ? null : (Pe.x = Pe.y = !0, () => {
    Pe.x = Pe.y = !1;
  });
}
function Da(e, t) {
  const n = s4(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function xs(e) {
  return !(e.pointerType === "touch" || Ea());
}
function l4(e, t, n = {}) {
  const [r, o, i] = Da(e, n), a = (c) => {
    if (!xs(c))
      return;
    const { target: l } = c, u = t(l, c);
    if (typeof u != "function" || !l)
      return;
    const d = (h) => {
      xs(h) && (u(h), l.removeEventListener("pointerleave", d));
    };
    l.addEventListener("pointerleave", d, o);
  };
  return r.forEach((c) => {
    c.addEventListener("pointerenter", a, o);
  }), i;
}
const Ba = (e, t) => t ? e === t ? !0 : Ba(e, t.parentElement) : !1, Ao = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, d4 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function u4(e) {
  return d4.has(e.tagName) || e.tabIndex !== -1;
}
const Nn = /* @__PURE__ */ new WeakSet();
function bs(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function vr(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const h4 = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = bs(() => {
    if (Nn.has(n))
      return;
    vr(n, "down");
    const o = bs(() => {
      vr(n, "up");
    }), i = () => vr(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Ns(e) {
  return Ao(e) && !Ea();
}
function p4(e, t, n = {}) {
  const [r, o, i] = Da(e, n), a = (c) => {
    const l = c.currentTarget;
    if (!Ns(c))
      return;
    Nn.add(l);
    const u = t(l, c), d = (f, k) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", p), Nn.has(l) && Nn.delete(l), Ns(f) && typeof u == "function" && u(f, { success: k });
    }, h = (f) => {
      d(f, l === window || l === document || n.useGlobalTarget || Ba(l, f.target));
    }, p = (f) => {
      d(f, !1);
    };
    window.addEventListener("pointerup", h, o), window.addEventListener("pointercancel", p, o);
  };
  return r.forEach((c) => {
    (n.useGlobalTarget ? window : c).addEventListener("pointerdown", a, o), Vo(c) && (c.addEventListener("focus", (u) => h4(u, o)), !u4(c) && !c.hasAttribute("tabindex") && (c.tabIndex = 0));
  }), i;
}
function Fa(e) {
  return Wi(e) && "ownerSVGElement" in e;
}
function f4(e) {
  return Fa(e) && e.tagName === "svg";
}
const Me = (e) => !!(e && e.getVelocity), m4 = [...Ia, pe, Qe], g4 = (e) => m4.find(Aa(e)), Io = At({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class v4 extends so.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, o = Vo(r) && r.offsetWidth || 0, i = this.props.sizeRef.current;
      i.height = n.offsetHeight || 0, i.width = n.offsetWidth || 0, i.top = n.offsetTop, i.left = n.offsetLeft, i.right = o - i.width - i.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function k4({ children: e, isPresent: t, anchorX: n, root: r }) {
  const o = io(), i = q(null), a = q({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: c } = ye(Io);
  return Xi(() => {
    const { width: l, height: u, top: d, left: h, right: p } = a.current;
    if (t || !i.current || !l || !u)
      return;
    const f = n === "left" ? `left: ${h}` : `right: ${p}`;
    i.current.dataset.motionPopId = o;
    const k = document.createElement("style");
    c && (k.nonce = c);
    const v = r ?? document.head;
    return v.appendChild(k), k.sheet && k.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            ${f}px !important;
            top: ${d}px !important;
          }
        `), () => {
      v.removeChild(k), v.contains(k) && v.removeChild(k);
    };
  }, [t]), s(v4, { isPresent: t, childRef: i, sizeRef: a, children: so.cloneElement(e, { ref: i }) });
}
const L4 = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a, anchorX: c, root: l }) => {
  const u = co(w4), d = io();
  let h = !0, p = X(() => (h = !1, {
    id: d,
    initial: t,
    isPresent: n,
    custom: o,
    onExitComplete: (f) => {
      u.set(f, !0);
      for (const k of u.values())
        if (!k)
          return;
      r && r();
    },
    register: (f) => (u.set(f, !1), () => u.delete(f))
  }), [n, u, r]);
  return i && h && (p = { ...p }), X(() => {
    u.forEach((f, k) => u.set(k, !1));
  }, [n]), so.useEffect(() => {
    !n && !u.size && r && r();
  }, [n]), a === "popLayout" && (e = s(k4, { isPresent: n, anchorX: c, root: l, children: e })), s(_n.Provider, { value: p, children: e });
};
function w4() {
  return /* @__PURE__ */ new Map();
}
function Oa(e = !0) {
  const t = ye(_n);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, i = io();
  Y(() => {
    if (e)
      return o(i);
  }, [e]);
  const a = F(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, a] : [!0];
}
const Ln = (e) => e.key || "";
function Ss(e) {
  const t = [];
  return Ll.forEach(e, (n) => {
    wl(n) && t.push(n);
  }), t;
}
const y4 = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: i = "sync", propagate: a = !1, anchorX: c = "left", root: l }) => {
  const [u, d] = Oa(a), h = X(() => Ss(e), [e]), p = a && !u ? [] : h.map(Ln), f = q(!0), k = q(h), v = co(() => /* @__PURE__ */ new Map()), [M, g] = R(h), [w, C] = R(h);
  Ji(() => {
    f.current = !1, k.current = h;
    for (let L = 0; L < w.length; L++) {
      const y = Ln(w[L]);
      p.includes(y) ? v.delete(y) : v.get(y) !== !0 && v.set(y, !1);
    }
  }, [w, p.length, p.join("-")]);
  const x = [];
  if (h !== M) {
    let L = [...h];
    for (let y = 0; y < w.length; y++) {
      const b = w[y], j = Ln(b);
      p.includes(j) || (L.splice(y, 0, b), x.push(b));
    }
    return i === "wait" && x.length && (L = x), C(Ss(L)), g(h), null;
  }
  process.env.NODE_ENV !== "production" && i === "wait" && w.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: N } = ye(ao);
  return s(ue, { children: w.map((L) => {
    const y = Ln(L), b = a && !u ? !1 : h === w || p.includes(y), j = () => {
      if (v.has(y))
        v.set(y, !0);
      else
        return;
      let V = !0;
      v.forEach((I) => {
        I || (V = !1);
      }), V && (N == null || N(), C(k.current), a && (d == null || d()), r && r());
    };
    return s(L4, { isPresent: b, initial: !f.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: o, mode: i, root: l, onExitComplete: b ? void 0 : j, anchorX: c, children: L }, y);
  }) });
}, Za = At({ strict: !1 }), Vs = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, xt = {};
for (const e in Vs)
  xt[e] = {
    isEnabled: (t) => Vs[e].some((n) => !!t[n])
  };
function C4(e) {
  for (const t in e)
    xt[t] = {
      ...xt[t],
      ...e[t]
    };
}
const M4 = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Dn(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || M4.has(e);
}
let Ya = (e) => !Dn(e);
function x4(e) {
  typeof e == "function" && (Ya = (t) => t.startsWith("on") ? !Dn(t) : e(t));
}
try {
  x4(require("@emotion/is-prop-valid").default);
} catch {
}
function b4(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Ya(o) || n === !0 && Dn(o) || !t && !Dn(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function N4(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && mo(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
const Un = /* @__PURE__ */ At({});
function zn(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Jt(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Po = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ho = ["initial", ...Po];
function Xn(e) {
  return zn(e.animate) || Ho.some((t) => Jt(e[t]));
}
function _a(e) {
  return !!(Xn(e) || e.variants);
}
function S4(e, t) {
  if (Xn(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Jt(n) ? n : void 0,
      animate: Jt(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function V4(e) {
  const { initial: t, animate: n } = S4(e, ye(Un));
  return X(() => ({ initial: t, animate: n }), [js(t), js(n)]);
}
function js(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const j4 = Symbol.for("motionComponentSymbol");
function Lt(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function $4(e, t, n) {
  return F(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Lt(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Ro = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), T4 = "framerAppearId", Ua = "data-" + Ro(T4), za = At({});
function A4(e, t, n, r, o) {
  var v, M;
  const { visualElement: i } = ye(Un), a = ye(Za), c = ye(_n), l = ye(Io).reducedMotion, u = q(null);
  r = r || a.renderer, !u.current && r && (u.current = r(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const d = u.current, h = ye(za);
  d && !d.projection && o && (d.type === "html" || d.type === "svg") && I4(u.current, n, o, h);
  const p = q(!1);
  Xi(() => {
    d && p.current && d.update(n, c);
  });
  const f = n[Ua], k = q(!!f && !((v = window.MotionHandoffIsComplete) != null && v.call(window, f)) && ((M = window.MotionHasOptimisedAnimation) == null ? void 0 : M.call(window, f)));
  return Ji(() => {
    d && (p.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), To.render(d.render), k.current && d.animationState && d.animationState.animateChanges());
  }), Y(() => {
    d && (!k.current && d.animationState && d.animationState.animateChanges(), k.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) == null || g.call(window, f);
    }), k.current = !1));
  }), d;
}
function I4(e, t, n, r) {
  const { layoutId: o, layout: i, drag: a, dragConstraints: c, layoutScroll: l, layoutRoot: u, layoutCrossfade: d } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Xa(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!a || c && Lt(c),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof i == "string" ? i : "both",
    initialPromotionConfig: r,
    crossfade: d,
    layoutScroll: l,
    layoutRoot: u
  });
}
function Xa(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Xa(e.parent);
}
function P4({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && C4(e);
  function i(c, l) {
    let u;
    const d = {
      ...ye(Io),
      ...c,
      layoutId: H4(c)
    }, { isStatic: h } = d, p = V4(c), f = r(c, h);
    if (!h && lo) {
      R4(d, e);
      const k = E4(d);
      u = k.MeasureLayout, p.visualElement = A4(o, f, d, t, k.ProjectionNode);
    }
    return m(Un.Provider, { value: p, children: [u && p.visualElement ? s(u, { visualElement: p.visualElement, ...d }) : null, n(o, c, $4(f, p.visualElement, l), f, h, p.visualElement)] });
  }
  i.displayName = `motion.${typeof o == "string" ? o : `create(${o.displayName ?? o.name ?? ""})`}`;
  const a = Gi(i);
  return a[j4] = o, a;
}
function H4({ layoutId: e }) {
  const t = ye(ao).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function R4(e, t) {
  const n = ye(Za).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? It(!1, r) : ze(!1, r);
  }
}
function E4(e) {
  const { drag: t, layout: n } = xt;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const Qt = {};
function D4(e) {
  for (const t in e)
    Qt[t] = e[t], ko(t) && (Qt[t].isCSSVariable = !0);
}
function Ga(e, { layout: t, layoutId: n }) {
  return Rt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Qt[e] || e === "opacity");
}
const B4 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, F4 = Ht.length;
function O4(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < F4; i++) {
    const a = Ht[i], c = e[a];
    if (c === void 0)
      continue;
    let l = !0;
    if (typeof c == "number" ? l = c === (a.startsWith("scale") ? 1 : 0) : l = parseFloat(c) === 0, !l || n) {
      const u = Ra(c, $o[a]);
      if (!l) {
        o = !1;
        const d = B4[a] || a;
        r += `${d}(${u}) `;
      }
      n && (t[a] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Eo(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let a = !1, c = !1;
  for (const l in t) {
    const u = t[l];
    if (Rt.has(l)) {
      a = !0;
      continue;
    } else if (ko(l)) {
      o[l] = u;
      continue;
    } else {
      const d = Ra(u, $o[l]);
      l.startsWith("origin") ? (c = !0, i[l] = d) : r[l] = d;
    }
  }
  if (t.transform || (a || n ? r.transform = O4(t, e.transform, n) : r.transform && (r.transform = "none")), c) {
    const { originX: l = "50%", originY: u = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${l} ${u} ${d}`;
  }
}
const Do = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Ka(e, t, n) {
  for (const r in t)
    !Me(t[r]) && !Ga(r, n) && (e[r] = t[r]);
}
function Z4({ transformTemplate: e }, t) {
  return X(() => {
    const n = Do();
    return Eo(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Y4(e, t) {
  const n = e.style || {}, r = {};
  return Ka(r, n, e), Object.assign(r, Z4(e, t)), r;
}
function _4(e, t) {
  const n = {}, r = Y4(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const U4 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, z4 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function X4(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? U4 : z4;
  e[i.offset] = J.transform(-r);
  const a = J.transform(t), c = J.transform(n);
  e[i.array] = `${a} ${c}`;
}
function qa(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: o,
  pathSpacing: i = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, l, u, d) {
  if (Eo(e, c, u), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: p } = e;
  h.transform && (p.transform = h.transform, delete h.transform), (p.transform || h.transformOrigin) && (p.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), p.transform && (p.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box", delete h.transformBox), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), o !== void 0 && X4(h, o, i, a, !1);
}
const Ja = () => ({
  ...Do(),
  attrs: {}
}), Qa = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function G4(e, t, n, r) {
  const o = X(() => {
    const i = Ja();
    return qa(i, t, Qa(r), e.transformTemplate, e.style), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    Ka(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
const K4 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Bo(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(K4.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function q4(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Bo(n) ? G4 : _4)(r, i, a, n), u = b4(r, typeof n == "string", e), d = n !== nn ? { ...u, ...l, ref: o } : {}, { children: h } = r, p = X(() => Me(h) ? h.get() : h, [h]);
    return Ki(n, {
      ...d,
      children: p
    });
  };
}
function $s(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Fo(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = $s(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = $s(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function Sn(e) {
  return Me(e) ? e.get() : e;
}
function J4({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, o) {
  return {
    latestValues: Q4(n, r, o, e),
    renderState: t()
  };
}
const Wa = (e) => (t, n) => {
  const r = ye(Un), o = ye(_n), i = () => J4(e, t, r, o);
  return n ? i() : co(i);
};
function Q4(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const p in i)
    o[p] = Sn(i[p]);
  let { initial: a, animate: c } = e;
  const l = Xn(e), u = _a(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), c === void 0 && (c = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || a === !1;
  const h = d ? c : a;
  if (h && typeof h != "boolean" && !zn(h)) {
    const p = Array.isArray(h) ? h : [h];
    for (let f = 0; f < p.length; f++) {
      const k = Fo(e, p[f]);
      if (k) {
        const { transitionEnd: v, transition: M, ...g } = k;
        for (const w in g) {
          let C = g[w];
          if (Array.isArray(C)) {
            const x = d ? C.length - 1 : 0;
            C = C[x];
          }
          C !== null && (o[w] = C);
        }
        for (const w in v)
          o[w] = v[w];
      }
    }
  }
  return o;
}
function Oo(e, t, n) {
  var i;
  const { style: r } = e, o = {};
  for (const a in r)
    (Me(r[a]) || t.style && Me(t.style[a]) || Ga(a, e) || ((i = n == null ? void 0 : n.getValue(a)) == null ? void 0 : i.liveStyle) !== void 0) && (o[a] = r[a]);
  return o;
}
const W4 = {
  useVisualState: Wa({
    scrapeMotionValuesFromProps: Oo,
    createRenderState: Do
  })
};
function ec(e, t, n) {
  const r = Oo(e, t, n);
  for (const o in e)
    if (Me(e[o]) || Me(t[o])) {
      const i = Ht.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
const ep = {
  useVisualState: Wa({
    scrapeMotionValuesFromProps: ec,
    createRenderState: Ja
  })
};
function tp(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const a = {
      ...Bo(r) ? ep : W4,
      preloadedFeatures: e,
      useRender: q4(o),
      createVisualElement: t,
      Component: r
    };
    return P4(a);
  };
}
function Wt(e, t, n) {
  const r = e.getProps();
  return Fo(r, t, n !== void 0 ? n : r.custom, e);
}
const Zr = (e) => Array.isArray(e);
function np(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Mt(n));
}
function rp(e) {
  return Zr(e) ? e[e.length - 1] || 0 : e;
}
function op(e, t) {
  const n = Wt(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const a in i) {
    const c = rp(i[a]);
    np(e, a, c);
  }
}
function sp(e) {
  return !!(Me(e) && e.add);
}
function Yr(e, t) {
  const n = e.getValue("willChange");
  if (sp(n))
    return n.add(t);
  if (!n && Xe.WillChange) {
    const r = new Xe.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function tc(e) {
  return e.props[Ua];
}
const ip = (e) => e !== null;
function ap(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(ip), i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return o[i];
}
const cp = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, lp = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), dp = {
  type: "keyframes",
  duration: 0.8
}, up = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, hp = (e, { keyframes: t }) => t.length > 2 ? dp : Rt.has(e) ? e.startsWith("scale") ? lp(t[1]) : cp : up;
function pp({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: c, from: l, elapsed: u, ...d }) {
  return !!Object.keys(d).length;
}
const Zo = (e, t, n, r = {}, o, i) => (a) => {
  const c = jo(r, e) || {}, l = c.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ He(l);
  const d = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...c,
    delay: -u,
    onUpdate: (p) => {
      t.set(p), c.onUpdate && c.onUpdate(p);
    },
    onComplete: () => {
      a(), c.onComplete && c.onComplete();
    },
    name: e,
    motionValue: t,
    element: i ? void 0 : o
  };
  pp(c) || Object.assign(d, hp(e, d)), d.duration && (d.duration = /* @__PURE__ */ He(d.duration)), d.repeatDelay && (d.repeatDelay = /* @__PURE__ */ He(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
  let h = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0, d.delay === 0 && (h = !0)), (Xe.instantAnimations || Xe.skipAnimations) && (h = !0, d.duration = 0, d.delay = 0), d.allowFlatten = !c.type && !c.ease, h && !i && t.get() !== void 0) {
    const p = ap(d.keyframes, c);
    if (p !== void 0) {
      ae.update(() => {
        d.onUpdate(p), d.onComplete();
      });
      return;
    }
  }
  return c.isSync ? new No(d) : new U2(d);
};
function fp({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function nc(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...c } = t;
  r && (i = r);
  const l = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in c) {
    const h = e.getValue(d, e.latestValues[d] ?? null), p = c[d];
    if (p === void 0 || u && fp(u, d))
      continue;
    const f = {
      delay: n,
      ...jo(i || {}, d)
    }, k = h.get();
    if (k !== void 0 && !h.isAnimating && !Array.isArray(p) && p === k && !f.velocity)
      continue;
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const g = tc(e);
      if (g) {
        const w = window.MotionHandoffAnimation(g, d, ae);
        w !== null && (f.startTime = w, v = !0);
      }
    }
    Yr(e, d), h.start(Zo(d, h, p, e.shouldReduceMotion && Ta.has(d) ? { type: !1 } : f, e, v));
    const M = h.animation;
    M && l.push(M);
  }
  return a && Promise.all(l).then(() => {
    ae.update(() => {
      a && op(e, a);
    });
  }), l;
}
function _r(e, t, n = {}) {
  var l;
  const r = Wt(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(nc(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: d = 0, staggerChildren: h, staggerDirection: p } = o;
    return mp(e, t, u, d, h, p, n);
  } : () => Promise.resolve(), { when: c } = o;
  if (c) {
    const [u, d] = c === "beforeChildren" ? [i, a] : [a, i];
    return u().then(() => d());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function mp(e, t, n = 0, r = 0, o = 0, i = 1, a) {
  const c = [], l = e.variantChildren.size, u = (l - 1) * o, d = typeof r == "function", h = d ? (p) => r(p, l) : (
    // Support deprecated staggerChildren
    i === 1 ? (p = 0) => p * o : (p = 0) => u - p * o
  );
  return Array.from(e.variantChildren).sort(gp).forEach((p, f) => {
    p.notify("AnimationStart", t), c.push(_r(p, t, {
      ...a,
      delay: n + (d ? 0 : r) + h(f)
    }).then(() => p.notify("AnimationComplete", t)));
  }), Promise.all(c);
}
function gp(e, t) {
  return e.sortNodePosition(t);
}
function vp(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => _r(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = _r(e, t, n);
  else {
    const o = typeof t == "function" ? Wt(e, t, n.custom) : t;
    r = Promise.all(nc(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function rc(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
const kp = Ho.length;
function oc(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? oc(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < kp; n++) {
    const r = Ho[n], o = e.props[r];
    (Jt(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const Lp = [...Po].reverse(), wp = Po.length;
function yp(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => vp(e, n, r)));
}
function Cp(e) {
  let t = yp(e), n = Ts(), r = !0;
  const o = (l) => (u, d) => {
    var p;
    const h = Wt(e, d, l === "exit" ? (p = e.presenceContext) == null ? void 0 : p.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: k, ...v } = h;
      u = { ...u, ...v, ...k };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function a(l) {
    const { props: u } = e, d = oc(e.parent) || {}, h = [], p = /* @__PURE__ */ new Set();
    let f = {}, k = 1 / 0;
    for (let M = 0; M < wp; M++) {
      const g = Lp[M], w = n[g], C = u[g] !== void 0 ? u[g] : d[g], x = Jt(C), N = g === l ? w.isActive : null;
      N === !1 && (k = M);
      let L = C === d[g] && C !== u[g] && x;
      if (L && r && e.manuallyAnimateOnMount && (L = !1), w.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && N === null || // If we didn't and don't have any defined prop for this animation type
      !C && !w.prevProp || // Or if the prop doesn't define an animation
      zn(C) || typeof C == "boolean")
        continue;
      const y = Mp(w.prevProp, C);
      let b = y || // If we're making this variant active, we want to always make it active
      g === l && w.isActive && !L && x || // If we removed a higher-priority variant (i is in reverse order)
      M > k && x, j = !1;
      const V = Array.isArray(C) ? C : [C];
      let I = V.reduce(o(g), {});
      N === !1 && (I = {});
      const { prevResolvedValues: S = {} } = w, A = {
        ...S,
        ...I
      }, $ = (D) => {
        b = !0, p.has(D) && (j = !0, p.delete(D)), w.needsAnimating[D] = !0;
        const z = e.getValue(D);
        z && (z.liveStyle = !1);
      };
      for (const D in A) {
        const z = I[D], T = S[D];
        if (f.hasOwnProperty(D))
          continue;
        let E = !1;
        Zr(z) && Zr(T) ? E = !rc(z, T) : E = z !== T, E ? z != null ? $(D) : p.add(D) : z !== void 0 && p.has(D) ? $(D) : w.protectedKeys[D] = !0;
      }
      w.prevProp = C, w.prevResolvedValues = I, w.isActive && (f = { ...f, ...I }), r && e.blockInitialAnimation && (b = !1), b && (!(L && y) || j) && h.push(...V.map((D) => ({
        animation: D,
        options: { type: g }
      })));
    }
    if (p.size) {
      const M = {};
      if (typeof u.initial != "boolean") {
        const g = Wt(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (M.transition = g.transition);
      }
      p.forEach((g) => {
        const w = e.getBaseTarget(g), C = e.getValue(g);
        C && (C.liveStyle = !0), M[g] = w ?? null;
      }), h.push({ animation: M });
    }
    let v = !!h.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(h) : Promise.resolve();
  }
  function c(l, u) {
    var h;
    if (n[l].isActive === u)
      return Promise.resolve();
    (h = e.variantChildren) == null || h.forEach((p) => {
      var f;
      return (f = p.animationState) == null ? void 0 : f.setActive(l, u);
    }), n[l].isActive = u;
    const d = a(l);
    for (const p in n)
      n[p].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: c,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = Ts(), r = !0;
    }
  };
}
function Mp(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !rc(t, e) : !1;
}
function tt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ts() {
  return {
    animate: tt(!0),
    whileInView: tt(),
    whileHover: tt(),
    whileTap: tt(),
    whileDrag: tt(),
    whileFocus: tt(),
    exit: tt()
  };
}
class We {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class xp extends We {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Cp(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    zn(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this);
  }
}
let bp = 0;
class Np extends We {
  constructor() {
    super(...arguments), this.id = bp++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Sp = {
  animation: {
    Feature: xp
  },
  exit: {
    Feature: Np
  }
};
function en(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function an(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const Vp = (e) => (t) => Ao(t) && e(t, an(t));
function _t(e, t, n, r) {
  return en(e, t, Vp(n), r);
}
function sc({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function jp({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function $p(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
const ic = 1e-4, Tp = 1 - ic, Ap = 1 + ic, ac = 0.01, Ip = 0 - ac, Pp = 0 + ac;
function xe(e) {
  return e.max - e.min;
}
function Hp(e, t, n) {
  return Math.abs(e - t) <= n;
}
function As(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = le(t.min, t.max, e.origin), e.scale = xe(n) / xe(t), e.translate = le(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Tp && e.scale <= Ap || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Ip && e.translate <= Pp || isNaN(e.translate)) && (e.translate = 0);
}
function Ut(e, t, n, r) {
  As(e.x, t.x, n.x, r ? r.originX : void 0), As(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Is(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + xe(t);
}
function Rp(e, t, n) {
  Is(e.x, t.x, n.x), Is(e.y, t.y, n.y);
}
function Ps(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + xe(t);
}
function zt(e, t, n) {
  Ps(e.x, t.x, n.x), Ps(e.y, t.y, n.y);
}
const Hs = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), wt = () => ({
  x: Hs(),
  y: Hs()
}), Rs = () => ({ min: 0, max: 0 }), he = () => ({
  x: Rs(),
  y: Rs()
});
function je(e) {
  return [e("x"), e("y")];
}
function kr(e) {
  return e === void 0 || e === 1;
}
function Ur({ scale: e, scaleX: t, scaleY: n }) {
  return !kr(e) || !kr(t) || !kr(n);
}
function nt(e) {
  return Ur(e) || cc(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function cc(e) {
  return Es(e.x) || Es(e.y);
}
function Es(e) {
  return e && e !== "0%";
}
function Bn(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Ds(e, t, n, r, o) {
  return o !== void 0 && (e = Bn(e, o, r)), Bn(e, n, r) + t;
}
function zr(e, t = 0, n = 1, r, o) {
  e.min = Ds(e.min, t, n, r, o), e.max = Ds(e.max, t, n, r, o);
}
function lc(e, { x: t, y: n }) {
  zr(e.x, t.translate, t.scale, t.originPoint), zr(e.y, n.translate, n.scale, n.originPoint);
}
const Bs = 0.999999999999, Fs = 1.0000000000001;
function Ep(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let c = 0; c < o; c++) {
    i = n[c], a = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Ct(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, lc(e, a)), r && nt(i.latestValues) && Ct(e, i.latestValues));
  }
  t.x < Fs && t.x > Bs && (t.x = 1), t.y < Fs && t.y > Bs && (t.y = 1);
}
function yt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Os(e, t, n, r, o = 0.5) {
  const i = le(e.min, e.max, o);
  zr(e, t, n, i, r);
}
function Ct(e, t) {
  Os(e.x, t.x, t.scaleX, t.scale, t.originX), Os(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function dc(e, t) {
  return sc($p(e.getBoundingClientRect(), t));
}
function Dp(e, t, n) {
  const r = dc(e, n), { scroll: o } = t;
  return o && (yt(r.x, o.offset.x), yt(r.y, o.offset.y)), r;
}
const uc = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Zs = (e, t) => Math.abs(e - t);
function Bp(e, t) {
  const n = Zs(e.x, t.x), r = Zs(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class hc {
  constructor(t, n, { transformPagePoint: r, contextWindow: o = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const p = wr(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, k = Bp(p.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!f && !k)
        return;
      const { point: v } = p, { timestamp: M } = Le;
      this.history.push({ ...v, timestamp: M });
      const { onStart: g, onMove: w } = this.handlers;
      f || (g && g(this.lastMoveEvent, p), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, p);
    }, this.handlePointerMove = (p, f) => {
      this.lastMoveEvent = p, this.lastMoveEventInfo = Lr(f, this.transformPagePoint), ae.update(this.updatePoint, !0);
    }, this.handlePointerUp = (p, f) => {
      this.end();
      const { onEnd: k, onSessionEnd: v, resumeAnimation: M } = this.handlers;
      if (this.dragSnapToOrigin && M && M(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = wr(p.type === "pointercancel" ? this.lastMoveEventInfo : Lr(f, this.transformPagePoint), this.history);
      this.startEvent && k && k(p, g), v && v(p, g);
    }, !Ao(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = a, this.contextWindow = o || window;
    const c = an(t), l = Lr(c, this.transformPagePoint), { point: u } = l, { timestamp: d } = Le;
    this.history = [{ ...u, timestamp: d }];
    const { onSessionStart: h } = n;
    h && h(t, wr(l, this.history)), this.removeListeners = rn(_t(this.contextWindow, "pointermove", this.handlePointerMove), _t(this.contextWindow, "pointerup", this.handlePointerUp), _t(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Je(this.updatePoint);
  }
}
function Lr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ys(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function wr({ point: e }, t) {
  return {
    point: e,
    delta: Ys(e, pc(t)),
    offset: Ys(e, Fp(t)),
    velocity: Op(t, 0.1)
  };
}
function Fp(e) {
  return e[0];
}
function pc(e) {
  return e[e.length - 1];
}
function Op(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = pc(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ He(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = /* @__PURE__ */ Oe(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Zp(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? le(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? le(n, e, r.max) : Math.min(e, n)), e;
}
function _s(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Yp(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: _s(e.x, n, o),
    y: _s(e.y, t, r)
  };
}
function Us(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function _p(e, t) {
  return {
    x: Us(e.x, t.x),
    y: Us(e.y, t.y)
  };
}
function Up(e, t) {
  let n = 0.5;
  const r = xe(e), o = xe(t);
  return o > r ? n = /* @__PURE__ */ Gt(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ Gt(e.min, e.max - o, t.min)), Ue(0, 1, n);
}
function zp(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Xr = 0.35;
function Xp(e = Xr) {
  return e === !1 ? e = 0 : e === !0 && (e = Xr), {
    x: zs(e, "left", "right"),
    y: zs(e, "top", "bottom")
  };
}
function zs(e, t, n) {
  return {
    min: Xs(e, t),
    max: Xs(e, n)
  };
}
function Xs(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Gp = /* @__PURE__ */ new WeakMap();
class Kp {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = he(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const i = (h) => {
      const { dragSnapToOrigin: p } = this.getProps();
      p ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(an(h).point);
    }, a = (h, p) => {
      const { drag: f, dragPropagation: k, onDragStart: v } = this.getProps();
      if (f && !k && (this.openDragLock && this.openDragLock(), this.openDragLock = c4(f), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = p, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), je((g) => {
        let w = this.getAxisMotionValue(g).get() || 0;
        if (Ze.test(w)) {
          const { projection: C } = this.visualElement;
          if (C && C.layout) {
            const x = C.layout.layoutBox[g];
            x && (w = xe(x) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[g] = w;
      }), v && ae.postRender(() => v(h, p)), Yr(this.visualElement, "transform");
      const { animationState: M } = this.visualElement;
      M && M.setActive("whileDrag", !0);
    }, c = (h, p) => {
      this.latestPointerEvent = h, this.latestPanInfo = p;
      const { dragPropagation: f, dragDirectionLock: k, onDirectionLock: v, onDrag: M } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: g } = p;
      if (k && this.currentDirection === null) {
        this.currentDirection = qp(g), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", p.point, g), this.updateAxis("y", p.point, g), this.visualElement.render(), M && M(h, p);
    }, l = (h, p) => {
      this.latestPointerEvent = h, this.latestPanInfo = p, this.stop(h, p), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => je((h) => {
      var p;
      return this.getAnimationState(h) === "paused" && ((p = this.getAxisMotionValue(h).animation) == null ? void 0 : p.play());
    }), { dragSnapToOrigin: d } = this.getProps();
    this.panSession = new hc(t, {
      onSessionStart: i,
      onStart: a,
      onMove: c,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: d,
      distanceThreshold: r,
      contextWindow: uc(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const r = t || this.latestPointerEvent, o = n || this.latestPanInfo, i = this.isDragging;
    if (this.cancel(), !i || !o || !r)
      return;
    const { velocity: a } = o;
    this.startAnimation(a);
    const { onDragEnd: c } = this.getProps();
    c && ae.postRender(() => c(r, o));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !wn(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = Zp(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, o = this.constraints;
    t && Lt(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Yp(r.layoutBox, t) : this.constraints = !1, this.elastic = Xp(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && je((a) => {
      this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = zp(r.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Lt(t))
      return !1;
    const r = t.current;
    ze(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = Dp(r, o.root, this.visualElement.getTransformPagePoint());
    let a = _p(o.layout.layoutBox, i);
    if (n) {
      const c = n(jp(a));
      this.hasMutatedConstraints = !!c, c && (a = sc(c));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: c } = this.getProps(), l = this.constraints || {}, u = je((d) => {
      if (!wn(d, n, this.currentDirection))
        return;
      let h = l && l[d] || {};
      a && (h = { min: 0, max: 0 });
      const p = o ? 200 : 1e6, f = o ? 40 : 1e7, k = {
        type: "inertia",
        velocity: r ? t[d] : 0,
        bounceStiffness: p,
        bounceDamping: f,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...h
      };
      return this.startAxisValueAnimation(d, k);
    });
    return Promise.all(u).then(c);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Yr(this.visualElement, t), r.start(Zo(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    je((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    je((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    je((n) => {
      const { drag: r } = this.getProps();
      if (!wn(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: c } = o.layout.layoutBox[n];
        i.set(t[n] - le(a, c, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!Lt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    je((a) => {
      const c = this.getAxisMotionValue(a);
      if (c && this.constraints !== !1) {
        const l = c.get();
        o[a] = Up({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), je((a) => {
      if (!wn(a, t, null))
        return;
      const c = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      c.set(le(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Gp.set(this.visualElement, this);
    const t = this.visualElement.current, n = _t(t, "pointerdown", (l) => {
      const { drag: u, dragListener: d = !0 } = this.getProps();
      u && d && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Lt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), ae.read(r);
    const a = en(window, "resize", () => this.scalePositionWithinConstraints()), c = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (je((d) => {
        const h = this.getAxisMotionValue(d);
        h && (this.originPoint[d] += l[d].translate, h.set(h.get() + l[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), i(), c && c();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Xr, dragMomentum: c = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: c
    };
  }
}
function wn(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function qp(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Jp extends We {
  constructor(t) {
    super(t), this.removeGroupControls = $e, this.removeListeners = $e, this.controls = new Kp(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || $e;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Gs = (e) => (t, n) => {
  e && ae.postRender(() => e(t, n));
};
class Qp extends We {
  constructor() {
    super(...arguments), this.removePointerDownListener = $e;
  }
  onPointerDown(t) {
    this.session = new hc(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: uc(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Gs(t),
      onStart: Gs(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && ae.postRender(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = _t(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Vn = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Ks(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Ft = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (J.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Ks(e, t.target.x), r = Ks(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Wp = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Qe.parse(e);
    if (o.length > 5)
      return r;
    const i = Qe.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, c = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + a] /= c, o[1 + a] /= l;
    const u = le(c, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
let qs = !1;
class ef extends yl {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    D4(tf), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), qs && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Vn.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, { projection: a } = r;
    return a && (a.isPresent = i, qs = !0, o || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || ae.postRender(() => {
      const c = a.getStack();
      (!c || !c.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), To.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function fc(e) {
  const [t, n] = Oa(), r = ye(ao);
  return s(ef, { ...e, layoutGroup: r, switchLayoutGroup: ye(za), isPresent: t, safeToRemove: n });
}
const tf = {
  borderRadius: {
    ...Ft,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ft,
  borderTopRightRadius: Ft,
  borderBottomLeftRadius: Ft,
  borderBottomRightRadius: Ft,
  boxShadow: Wp
};
function nf(e, t, n) {
  const r = Me(e) ? e : Mt(e);
  return r.start(Zo("", r, t, n)), r.animation;
}
const rf = (e, t) => e.depth - t.depth;
class of {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    uo(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    ho(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(rf), this.isDirty = !1, this.children.forEach(t);
  }
}
function sf(e, t) {
  const n = Ne.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Je(r), e(i - t));
  };
  return ae.setup(r, !0), () => Je(r);
}
const mc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], af = mc.length, Js = (e) => typeof e == "string" ? parseFloat(e) : e, Qs = (e) => typeof e == "number" || J.test(e);
function cf(e, t, n, r, o, i) {
  o ? (e.opacity = le(0, n.opacity ?? 1, lf(r)), e.opacityExit = le(t.opacity ?? 1, 0, df(r))) : i && (e.opacity = le(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let a = 0; a < af; a++) {
    const c = `border${mc[a]}Radius`;
    let l = Ws(t, c), u = Ws(n, c);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Qs(l) === Qs(u) ? (e[c] = Math.max(le(Js(l), Js(u), r), 0), (Ze.test(u) || Ze.test(l)) && (e[c] += "%")) : e[c] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = le(t.rotate || 0, n.rotate || 0, r));
}
function Ws(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const lf = /* @__PURE__ */ gc(0, 0.5, ca), df = /* @__PURE__ */ gc(0.5, 0.95, $e);
function gc(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Gt(e, t, r));
}
function ei(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ve(e, t) {
  ei(e.x, t.x), ei(e.y, t.y);
}
function ti(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function ni(e, t, n, r, o) {
  return e -= t, e = Bn(e, 1 / n, r), o !== void 0 && (e = Bn(e, 1 / o, r)), e;
}
function uf(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (Ze.test(t) && (t = parseFloat(t), t = le(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let c = le(i.min, i.max, r);
  e === i && (c -= t), e.min = ni(e.min, t, n, c, o), e.max = ni(e.max, t, n, c, o);
}
function ri(e, t, [n, r, o], i, a) {
  uf(e, t[n], t[r], t[o], t.scale, i, a);
}
const hf = ["x", "scaleX", "originX"], pf = ["y", "scaleY", "originY"];
function oi(e, t, n, r) {
  ri(e.x, t, hf, n ? n.x : void 0, r ? r.x : void 0), ri(e.y, t, pf, n ? n.y : void 0, r ? r.y : void 0);
}
function si(e) {
  return e.translate === 0 && e.scale === 1;
}
function vc(e) {
  return si(e.x) && si(e.y);
}
function ii(e, t) {
  return e.min === t.min && e.max === t.max;
}
function ff(e, t) {
  return ii(e.x, t.x) && ii(e.y, t.y);
}
function ai(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function kc(e, t) {
  return ai(e.x, t.x) && ai(e.y, t.y);
}
function ci(e) {
  return xe(e.x) / xe(e.y);
}
function li(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class mf {
  constructor() {
    this.members = [];
  }
  add(t) {
    uo(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (ho(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function gf(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, a = (n == null ? void 0 : n.z) || 0;
  if ((o || i || a) && (r = `translate3d(${o}px, ${i}px, ${a}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: d, rotateX: h, rotateY: p, skewX: f, skewY: k } = n;
    u && (r = `perspective(${u}px) ${r}`), d && (r += `rotate(${d}deg) `), h && (r += `rotateX(${h}deg) `), p && (r += `rotateY(${p}deg) `), f && (r += `skewX(${f}deg) `), k && (r += `skewY(${k}deg) `);
  }
  const c = e.x.scale * t.x, l = e.y.scale * t.y;
  return (c !== 1 || l !== 1) && (r += `scale(${c}, ${l})`), r || "none";
}
const yr = ["", "X", "Y", "Z"], vf = 1e3;
let kf = 0;
function Cr(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Lc(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = tc(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ae, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Lc(r);
}
function wc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, c = t == null ? void 0 : t()) {
      this.id = kf++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(yf), this.nodes.forEach(bf), this.nodes.forEach(Nf), this.nodes.forEach(Cf);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = c ? c.root || c : this, this.path = c ? [...c.path, c] : [], this.parent = c, this.depth = c ? c.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new of());
    }
    addEventListener(a, c) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new fo()), this.eventHandlers.get(a).add(c);
    }
    notifyListeners(a, ...c) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...c);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a) {
      if (this.instance)
        return;
      this.isSVG = Fa(a) && !f4(a), this.instance = a;
      const { layoutId: c, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || c) && (this.isLayoutDirty = !0), e) {
        let d, h = 0;
        const p = () => this.root.updateBlockedByResize = !1;
        ae.read(() => {
          h = window.innerWidth;
        }), e(a, () => {
          const f = window.innerWidth;
          f !== h && (h = f, this.root.updateBlockedByResize = !0, d && d(), d = sf(p, 250), Vn.hasAnimatedSinceResize && (Vn.hasAnimatedSinceResize = !1, this.nodes.forEach(hi)));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && u && (c || l) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: h, hasRelativeLayoutChanged: p, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const k = this.options.transition || u.getDefaultTransition() || Tf, { onLayoutAnimationStart: v, onLayoutAnimationComplete: M } = u.getProps(), g = !this.targetLayout || !kc(this.targetLayout, f), w = !h && p;
        if (this.options.layoutRoot || this.resumeFrom || w || h && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const C = {
            ...jo(k, "layout"),
            onPlay: v,
            onComplete: M
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0, C.type = !1), this.startAnimation(C), this.setAnimationOrigin(d, w);
        } else
          h || hi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = f;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Je(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Sf), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Lc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const h = this.path[d];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: c, layout: l } = this.options;
      if (c === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(di);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ui);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(xf), this.nodes.forEach(Lf), this.nodes.forEach(wf)) : this.nodes.forEach(ui), this.clearAllSnapshots();
      const c = Ne.now();
      Le.delta = Ue(0, 1e3 / 60, c - Le.timestamp), Le.timestamp = c, Le.isProcessing = !0, hr.update.process(Le), hr.preRender.process(Le), hr.render.process(Le), Le.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, To.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Mf), this.sharedNodes.forEach(Vf);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ae.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ae.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !xe(this.snapshot.measuredBox.x) && !xe(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = he(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: c } = this.options;
      c && c.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let c = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (c = !1), c && this.instance) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: a,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, c = this.projectionDelta && !vc(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, d = u !== this.prevTransformTemplateValue;
      a && this.instance && (c || nt(this.latestValues) || d) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const c = this.measurePageBox();
      let l = this.removeElementScroll(c);
      return a && (l = this.removeTransform(l)), Af(l), {
        animationId: this.root.animationId,
        measuredBox: c,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var u;
      const { visualElement: a } = this.options;
      if (!a)
        return he();
      const c = a.measureViewportBox();
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(If))) {
        const { scroll: d } = this.root;
        d && (yt(c.x, d.offset.x), yt(c.y, d.offset.y));
      }
      return c;
    }
    removeElementScroll(a) {
      var l;
      const c = he();
      if (Ve(c, a), (l = this.scroll) != null && l.wasRoot)
        return c;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u], { scroll: h, options: p } = d;
        d !== this.root && h && p.layoutScroll && (h.wasRoot && Ve(c, a), yt(c.x, h.offset.x), yt(c.y, h.offset.y));
      }
      return c;
    }
    applyTransform(a, c = !1) {
      const l = he();
      Ve(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !c && d.options.layoutScroll && d.scroll && d !== d.root && Ct(l, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), nt(d.latestValues) && Ct(l, d.latestValues);
      }
      return nt(this.latestValues) && Ct(l, this.latestValues), l;
    }
    removeTransform(a) {
      const c = he();
      Ve(c, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !nt(u.latestValues))
          continue;
        Ur(u.latestValues) && u.updateSnapshot();
        const d = he(), h = u.measurePageBox();
        Ve(d, h), oi(c, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d);
      }
      return nt(this.latestValues) && oi(c, this.latestValues), c;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Le.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var p;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== c;
      if (!(a || l && this.isSharedProjectionDirty || this.isProjectionDirty || (p = this.parent) != null && p.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (this.resolvedRelativeTargetAt = Le.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = he(), this.relativeTargetOrigin = he(), zt(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = he(), this.targetWithTransforms = he()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Rp(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ve(this.target, this.layout.layoutBox), lc(this.target, this.targetDelta)) : Ve(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = he(), this.relativeTargetOrigin = he(), zt(this.relativeTargetOrigin, this.target, f.target), Ve(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ur(this.parent.latestValues) || cc(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var k;
      const a = this.getLead(), c = !!this.resumingFrom || this !== a;
      let l = !0;
      if ((this.isProjectionDirty || (k = this.parent) != null && k.isProjectionDirty) && (l = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === Le.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      Ve(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, p = this.treeScale.y;
      Ep(this.layoutCorrected, this.treeScale, this.path, c), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = he());
      const { target: f } = a;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ti(this.prevProjectionDelta.x, this.projectionDelta.x), ti(this.prevProjectionDelta.y, this.projectionDelta.y)), Ut(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== p || !li(this.projectionDelta.x, this.prevProjectionDelta.x) || !li(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      var c;
      if ((c = this.options.visualElement) == null || c.scheduleRender(), a) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = wt(), this.projectionDelta = wt(), this.projectionDeltaWithTransform = wt();
    }
    setAnimationOrigin(a, c = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, d = { ...this.latestValues }, h = wt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !c;
      const p = he(), f = l ? l.source : void 0, k = this.layout ? this.layout.source : void 0, v = f !== k, M = this.getStack(), g = !M || M.members.length <= 1, w = !!(v && !g && this.options.crossfade === !0 && !this.path.some($f));
      this.animationProgress = 0;
      let C;
      this.mixTargetDelta = (x) => {
        const N = x / 1e3;
        pi(h.x, a.x, N), pi(h.y, a.y, N), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (zt(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), jf(this.relativeTarget, this.relativeTargetOrigin, p, N), C && ff(this.relativeTarget, C) && (this.isProjectionDirty = !1), C || (C = he()), Ve(C, this.relativeTarget)), v && (this.animationValues = d, cf(d, u, this.latestValues, N, w, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = N;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      var c, l, u;
      this.notifyListeners("animationStart"), (c = this.currentAnimation) == null || c.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (Je(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ae.update(() => {
        Vn.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Mt(0)), this.currentAnimation = nf(this.motionValue, [0, 1e3], {
          ...a,
          velocity: 0,
          isSync: !0,
          onUpdate: (d) => {
            this.mixTargetDelta(d), a.onUpdate && a.onUpdate(d);
          },
          onStop: () => {
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(vf), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: c, target: l, layout: u, latestValues: d } = a;
      if (!(!c || !l || !u)) {
        if (this !== a && this.layout && u && yc(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || he();
          const h = xe(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + h;
          const p = xe(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + p;
        }
        Ve(c, l), Ct(c, d), Ut(this.projectionDeltaWithTransform, this.layoutCorrected, c, d);
      }
    }
    registerSharedNode(a, c) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new mf()), this.sharedNodes.get(a).add(c);
      const u = c.options.initialPromotionConfig;
      c.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(c) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var c;
      const { layoutId: a } = this.options;
      return a ? ((c = this.getStack()) == null ? void 0 : c.lead) || this : this;
    }
    getPrevLead() {
      var c;
      const { layoutId: a } = this.options;
      return a ? (c = this.getStack()) == null ? void 0 : c.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: c, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), c && this.setOptions({ transition: c });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let c = !1;
      const { latestValues: l } = a;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (c = !0), !c)
        return;
      const u = {};
      l.z && Cr("z", a, u, this.animationValues);
      for (let d = 0; d < yr.length; d++)
        Cr(`rotate${yr[d]}`, a, u, this.animationValues), Cr(`skew${yr[d]}`, a, u, this.animationValues);
      a.render();
      for (const d in u)
        a.setStaticValue(d, u[d]), this.animationValues && (this.animationValues[d] = u[d]);
      a.scheduleRender();
    }
    applyProjectionStyles(a, c) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        a.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, a.visibility = "", a.opacity = "", a.pointerEvents = Sn(c == null ? void 0 : c.pointerEvents) || "", a.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (a.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, a.pointerEvents = Sn(c == null ? void 0 : c.pointerEvents) || ""), this.hasProjected && !nt(this.latestValues) && (a.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      a.visibility = "";
      const d = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let h = gf(this.projectionDeltaWithTransform, this.treeScale, d);
      l && (h = l(d, h)), a.transform = h;
      const { x: p, y: f } = this.projectionDelta;
      a.transformOrigin = `${p.origin * 100}% ${f.origin * 100}% 0`, u.animationValues ? a.opacity = u === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : a.opacity = u === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const k in Qt) {
        if (d[k] === void 0)
          continue;
        const { correct: v, applyTo: M, isCSSVariable: g } = Qt[k], w = h === "none" ? d[k] : v(d[k], u);
        if (M) {
          const C = M.length;
          for (let x = 0; x < C; x++)
            a[M[x]] = w;
        } else
          g ? this.options.visualElement.renderState.vars[k] = w : a[k] = w;
      }
      this.options.layoutId && (a.pointerEvents = u === this ? Sn(c == null ? void 0 : c.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var c;
        return (c = a.currentAnimation) == null ? void 0 : c.stop();
      }), this.root.nodes.forEach(di), this.root.sharedNodes.clear();
    }
  };
}
function Lf(e) {
  e.updateLayout();
}
function wf(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
    i === "size" ? je((h) => {
      const p = a ? t.measuredBox[h] : t.layoutBox[h], f = xe(p);
      p.min = r[h].min, p.max = p.min + f;
    }) : yc(i, t.layoutBox, r) && je((h) => {
      const p = a ? t.measuredBox[h] : t.layoutBox[h], f = xe(r[h]);
      p.max = p.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[h].max = e.relativeTarget[h].min + f);
    });
    const c = wt();
    Ut(c, r, t.layoutBox);
    const l = wt();
    a ? Ut(l, e.applyTransform(o, !0), t.measuredBox) : Ut(l, r, t.layoutBox);
    const u = !vc(c);
    let d = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: p, layout: f } = h;
        if (p && f) {
          const k = he();
          zt(k, t.layoutBox, p.layoutBox);
          const v = he();
          zt(v, r, f.layoutBox), kc(k, v) || (d = !0), h.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = k, e.relativeParent = h);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: c,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function yf(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Cf(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Mf(e) {
  e.clearSnapshot();
}
function di(e) {
  e.clearMeasurements();
}
function ui(e) {
  e.isLayoutDirty = !1;
}
function xf(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function hi(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function bf(e) {
  e.resolveTargetDelta();
}
function Nf(e) {
  e.calcProjection();
}
function Sf(e) {
  e.resetSkewAndRotation();
}
function Vf(e) {
  e.removeLeadSnapshot();
}
function pi(e, t, n) {
  e.translate = le(t.translate, 0, n), e.scale = le(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function fi(e, t, n, r) {
  e.min = le(t.min, n.min, r), e.max = le(t.max, n.max, r);
}
function jf(e, t, n, r) {
  fi(e.x, t.x, n.x, r), fi(e.y, t.y, n.y, r);
}
function $f(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Tf = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, mi = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), gi = mi("applewebkit/") && !mi("chrome/") ? Math.round : $e;
function vi(e) {
  e.min = gi(e.min), e.max = gi(e.max);
}
function Af(e) {
  vi(e.x), vi(e.y);
}
function yc(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Hp(ci(t), ci(n), 0.2);
}
function If(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Pf = wc({
  attachResizeListener: (e, t) => en(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Mr = {
  current: void 0
}, Cc = wc({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Mr.current) {
      const e = new Pf({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Mr.current = e;
    }
    return Mr.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Hf = {
  pan: {
    Feature: Qp
  },
  drag: {
    Feature: Jp,
    ProjectionNode: Cc,
    MeasureLayout: fc
  }
};
function ki(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, i = r[o];
  i && ae.postRender(() => i(t, an(t)));
}
class Rf extends We {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = l4(t, (n, r) => (ki(this.node, r, "Start"), (o) => ki(this.node, o, "End"))));
  }
  unmount() {
  }
}
class Ef extends We {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = rn(en(this.node.current, "focus", () => this.onFocus()), en(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Li(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), i = r[o];
  i && ae.postRender(() => i(t, an(t)));
}
class Df extends We {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = p4(t, (n, r) => (Li(this.node, r, "Start"), (o, { success: i }) => Li(this.node, o, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Gr = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Bf = (e) => {
  const t = Gr.get(e.target);
  t && t(e);
}, Ff = (e) => {
  e.forEach(Bf);
};
function Of({ root: e, ...t }) {
  const n = e || document;
  xr.has(n) || xr.set(n, {});
  const r = xr.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Ff, { root: e, ...t })), r[o];
}
function Zf(e, t, n) {
  const r = Of(t);
  return Gr.set(e, n), r.observe(e), () => {
    Gr.delete(e), r.unobserve(e);
  };
}
const Yf = {
  some: 0,
  all: 1
};
class _f extends We {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : Yf[o]
    }, c = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: d, onViewportLeave: h } = this.node.getProps(), p = u ? d : h;
      p && p(l);
    };
    return Zf(this.node.current, a, c);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Uf(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Uf({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const zf = {
  inView: {
    Feature: _f
  },
  tap: {
    Feature: Df
  },
  focus: {
    Feature: Ef
  },
  hover: {
    Feature: Rf
  }
}, Xf = {
  layout: {
    ProjectionNode: Cc,
    MeasureLayout: fc
  }
}, Kr = { current: null }, Mc = { current: !1 };
function Gf() {
  if (Mc.current = !0, !!lo)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Kr.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Kr.current = !1;
}
const Kf = /* @__PURE__ */ new WeakMap();
function qf(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (Me(o))
      e.addValue(r, o);
    else if (Me(i))
      e.addValue(r, Mt(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const a = e.getValue(r);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = e.getStaticValue(r);
        e.addValue(r, Mt(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const wi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Jf {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: i, visualState: a }, c = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = So, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = Ne.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, ae.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = a;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = c, this.blockInitialAnimation = !!i, this.isControllingVariants = Xn(n), this.isVariantNode = _a(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in h) {
      const f = h[p];
      l[p] !== void 0 && Me(f) && f.set(l[p], !1);
    }
  }
  mount(t) {
    this.current = t, Kf.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Mc.current || Gf(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Kr.current, process.env.NODE_ENV !== "production" && mo(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Je(this.notifyUpdate), Je(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Rt.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (c) => {
      this.latestValues[t] = c, this.props.onUpdate && ae.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), i = n.on("renderRequest", this.scheduleRender);
    let a;
    window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), i(), a && a(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in xt) {
      const n = xt[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: o } = n;
      if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), i.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : he();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < wi.length; r++) {
      const o = wi[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, a = t[i];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = qf(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Mt(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (Qi(r) || ea(r)) ? r = parseFloat(r) : !g4(r) && Qe.test(n) && (r = Ha(t, n)), this.setBaseTarget(t, Me(r) ? r.get() : r)), Me(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var i;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const a = Fo(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
      a && (r = a[t]);
    }
    if (n && r !== void 0)
      return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Me(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new fo()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class xc extends Jf {
  constructor() {
    super(...arguments), this.KeyframeResolver = o4;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Me(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function bc(e, { style: t, vars: n }, r, o) {
  const i = e.style;
  let a;
  for (a in t)
    i[a] = t[a];
  o == null || o.applyProjectionStyles(i, r);
  for (a in n)
    i.setProperty(a, n[a]);
}
function Qf(e) {
  return window.getComputedStyle(e);
}
class Wf extends xc {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = bc;
  }
  readValueFromInstance(t, n) {
    var r;
    if (Rt.has(n))
      return (r = this.projection) != null && r.isProjecting ? Rr(n) : C2(t, n);
    {
      const o = Qf(t), i = (ko(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return dc(t, n);
  }
  build(t, n, r) {
    Eo(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Oo(t, n, r);
  }
}
const Nc = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function e0(e, t, n, r) {
  bc(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Nc.has(o) ? o : Ro(o), t.attrs[o]);
}
class t0 extends xc {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = he;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Rt.has(n)) {
      const r = Pa(n);
      return r && r.default || 0;
    }
    return n = Nc.has(n) ? n : Ro(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ec(t, n, r);
  }
  build(t, n, r) {
    qa(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, o) {
    e0(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Qa(t.tagName), super.mount(t);
  }
}
const n0 = (e, t) => Bo(e) ? new t0(t) : new Wf(t, {
  allowProjection: e !== nn
}), r0 = /* @__PURE__ */ tp({
  ...Sp,
  ...zf,
  ...Hf,
  ...Xf
}, n0), we = /* @__PURE__ */ N4(r0), me = ({
  show: e,
  content: t,
  theme: n = "light",
  placement: r = "top",
  hideArrow: o = !1,
  targetBody: i = !1,
  trigger: a = "hover",
  onVisibleChange: c,
  popoverStyle: l,
  popoverClassName: u,
  style: d,
  className: h = "",
  children: p
}) => {
  const [f, k] = R(e), [v, M] = R({ top: 0, left: 0 }), [g, w] = R({ width: 0, height: 0 }), [C, x] = R(r), N = q(null), L = q(null);
  Y(() => {
    e !== void 0 && k(e);
  }, [e]), Y(() => {
    c == null || c(f);
  }, [f, c]);
  const y = 8, b = F(() => {
    if (!N.current || !i || g.width === 0 || g.height === 0) return;
    const P = N.current.getBoundingClientRect(), O = window.innerWidth, D = window.innerHeight;
    let z = 0, T = 0, E = r;
    const H = (K) => {
      switch (K) {
        case "top":
          return {
            top: P.top - P.height - y,
            left: P.left + (P.width / 2 - g.width / 2),
            placement: "top"
          };
        case "bottom":
          return {
            top: P.top + P.height + y,
            left: P.left + (P.width / 2 - g.width / 2),
            placement: "bottom"
          };
        case "left":
          return {
            top: P.top + (P.height / 2 - g.height / 2),
            left: P.left - g.width - y,
            placement: "left"
          };
        case "right":
          return {
            top: P.top + (P.height / 2 - g.height / 2),
            left: P.right + y,
            placement: "right"
          };
        default:
          return {
            top: P.bottom + y,
            left: P.left + P.width / 2 - g.width / 2,
            placement: "bottom"
          };
      }
    };
    let B = H(E);
    z = B.top, T = B.left, E = B.placement, (() => {
      if (T < y && (T = y), T + g.width > O - y && (T = O - g.width - y), z < y) {
        if (E === "top") {
          const K = H("bottom");
          K.top + g.height <= D - y ? (z = K.top, T = K.left, E = "bottom") : z = y;
        }
      } else if (z + g.height > D - y && E === "bottom") {
        const K = H("top");
        K.top >= y ? (z = K.top, T = K.left, E = "top") : z = D - g.height - y;
      }
      if ((T < y || T + g.width > O - y) && (E === "top" || E === "bottom")) {
        const K = H("left");
        if (K.left >= y)
          z = K.top, T = K.left, E = "left";
        else {
          const _ = H("right");
          _.left + g.width <= O - y && (z = _.top, T = _.left, E = "right");
        }
      }
    })(), M({ top: z, left: T }), x(E);
  }, [r, i, g]);
  Y(() => {
    if (!i) return;
    const P = () => {
      b();
    }, O = () => {
      b();
    };
    return window.addEventListener("resize", P), window.addEventListener("scroll", O, !0), () => {
      window.removeEventListener("resize", P), window.removeEventListener("scroll", O, !0);
    };
  }, [b, i]), Y(() => {
    if (L.current && f && i) {
      const P = new ResizeObserver((O) => {
        for (const D of O) {
          const { width: z, height: T } = D.target.getBoundingClientRect();
          w({ width: z, height: T });
        }
      });
      return P.observe(L.current), () => {
        P.disconnect();
      };
    }
  }, [f, i]), Y(() => {
    f && i && g.width > 0 && g.height > 0 && b();
  }, [f, i, g, b]), Y(() => {
    if (a === "click" && f) {
      const P = (O) => {
        N.current && !N.current.contains(O.target) && k(!1);
      };
      return document.addEventListener("mousedown", P), () => {
        document.removeEventListener("mousedown", P);
      };
    }
  }, [a, f]);
  const j = () => {
    a === "hover" && e === void 0 && k(!0);
  }, V = () => {
    a === "hover" && e === void 0 && k(!1);
  }, I = () => {
    a === "click" && e === void 0 && k(!f);
  };
  if (!t) return /* @__PURE__ */ s(ue, { children: p });
  const S = () => {
    switch (r) {
      case "top":
        return {
          bottom: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          marginBottom: "8px"
        };
      case "bottom":
        return {
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "8px"
        };
      case "left":
        return {
          right: "100%",
          top: "50%",
          transform: "translateY(-50%)",
          marginRight: "8px"
        };
      case "right":
        return {
          left: "100%",
          top: "50%",
          transform: "translateY(-50%)",
          marginLeft: "8px"
        };
      default:
        return {};
    }
  }, A = () => {
    if (!N.current || !i || g.width === 0 || g.height === 0) return {};
    const P = N.current.getBoundingClientRect(), O = 12, D = P.left + P.width / 2, z = P.top + P.height / 2, T = v.left, E = v.top, H = D - T, B = z - E, U = (K, _, Q) => _ >= 0 && _ <= Q ? Math.max(O, Math.min(Q - O, _)) : _ < 0 ? O : Q - O;
    switch (C) {
      case "top":
        return {
          left: `${U(!0, H, g.width) / g.width * 100}%`,
          top: "100%",
          transform: "translate(-50%,-50%) rotate(45deg)"
        };
      case "bottom":
        return {
          left: `${U(!0, H, g.width) / g.width * 100}%`,
          top: "0",
          transform: "translate(-50%,-50%) rotate(-135deg)"
        };
      case "left":
        return {
          left: "100%",
          top: `${U(!1, B, g.height) / g.height * 100}%`,
          transform: "translate(-50%,-50%) rotate(-45deg)"
        };
      case "right":
        return {
          left: "0",
          top: `${U(!1, B, g.height) / g.height * 100}%`,
          transform: "translate(-50%,-50%) rotate(135deg)"
        };
      default:
        return {};
    }
  }, $ = /* @__PURE__ */ m(
    we.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: f ? 1 : 0 },
      transition: { duration: 0.2, type: "spring" },
      ref: L,
      className: `land-pop ${f ? "show" : ""} ${o ? "hide-arrow" : ""} ${n} ${u ?? ""}`,
      style: {
        position: i ? "fixed" : "absolute",
        ...i ? {
          top: v.top,
          left: v.left
        } : S(),
        zIndex: i ? 1e3 : 100,
        opacity: f ? 1 : 0,
        pointerEvents: f ? "auto" : "none",
        transition: "opacity 0.2s ease-in-out",
        ...l
      },
      children: [
        t,
        !o && /* @__PURE__ */ s(
          "div",
          {
            className: "land-pop-arrow",
            style: i ? A() : {
              left: r === "left" ? "100%" : r === "right" ? "0" : "50%",
              top: r === "top" ? "100%" : r === "bottom" ? "0" : "50%",
              transform: `translate(-50%, -50%) rotate(${r === "top" ? "45" : r === "bottom" ? "-135" : r === "right" ? "135" : "-45"}deg)`
            }
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ m(
    "div",
    {
      ref: N,
      className: `land-pop-target ${h ?? ""}`,
      style: d,
      onMouseEnter: j,
      onMouseLeave: V,
      onClick: I,
      children: [
        p,
        $
      ]
    }
  );
}, o0 = ({
  animation: e = !0,
  transform: t,
  children: n,
  underline: r,
  ...o
}) => /* @__PURE__ */ m(tn, { underline: t ? !0 : r, className: `link-wave ${e ? "animation" : ""} ${t ? "transform" : ""}`, ...o, children: [
  n,
  /* @__PURE__ */ s("div", { className: "land-link-wave" })
] }), tn = ({
  href: e,
  target: t = "_self",
  status: n = "default",
  anchor: r,
  disabled: o = !1,
  underline: i = !1,
  hoverUnderline: a = !0,
  tip: c,
  tipProps: l,
  prefixIcon: u,
  suffixIcon: d,
  children: h,
  onClick: p,
  style: f,
  className: k = ""
}) => {
  const v = () => ({
    default: "var(--color-blue-",
    primary: "var(--color-primary-",
    success: "var(--color-green-",
    danger: "var(--color-red-",
    warning: "var(--color-orange-"
  })[n], M = (C) => {
    if (o) {
      C.preventDefault();
      return;
    }
    p == null || p(C);
  }, g = (C, x) => {
    if (!C) return null;
    const N = typeof C == "boolean" ? t === "_blank" ? /* @__PURE__ */ s(Z, { name: "share", size: 16 }) : /* @__PURE__ */ s(Z, { name: "link", size: 16 }) : C;
    return /* @__PURE__ */ s("span", { className: `land-link-${x}-icon`, children: N });
  }, w = (C) => {
    if (C.preventDefault(), r) {
      const x = document.getElementById(r);
      x && x.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ m(
    "a",
    {
      href: e,
      target: t,
      className: `land-link hover-pop ${n} ${o ? "disabled" : ""} ${a ? "hoverUnderline" : ""} ${i ? "underline" : ""} ${k}`,
      style: {
        "--land-link-color": `${v()}6)`,
        "--land-link-hover-color": `${v()}7)`,
        "--land-link-active-color": `${v()}8)`,
        "--land-link-disabled-color": `${v()}3)`,
        ...f
      },
      onClick: r ? w : M,
      "aria-disabled": o,
      children: [
        g(u, "prefix"),
        h,
        g(d, "suffix"),
        c && /* @__PURE__ */ s(me, { content: c, ...l })
      ]
    }
  );
};
tn.LinkWave = o0;
const Sc = ({
  size: e = "var(--icon-size-l)",
  strokeSize: t = 3,
  color: n = "var(--color-text-primary)",
  style: r,
  className: o = ""
}) => /* @__PURE__ */ s(
  "div",
  {
    className: `land-loading ${o}`,
    style: {
      "--land-loading-size": typeof e == "number" ? `${e}px` : e,
      "--land-loading-stroke-size": typeof t == "number" ? `${t}px` : t,
      "--land-loading-color": n,
      ...r
    }
  }
), Vc = ({
  type: e = "default",
  direction: t = "row",
  title: n,
  link: r,
  onLinkClick: o,
  noBg: i,
  className: a,
  style: c
}) => {
  const l = X(() => t === "row" ? 16 : 24, [t]), u = X(() => {
    if (e === "fail") return "var(--color-red-";
    if (e === "default") return "";
    if (e === "warn") return "var(--color-orange-";
    if (e === "error") return "var(--color-red-";
    if (e === "success") return "var(--color-green-";
    if (e === "loading") return "";
  }, [e]);
  return /* @__PURE__ */ m("div", { className: `land-alert ${t} ${u} ${i ? "no-bg" : ""} ${a}`, style: c, children: [
    e === "fail" && /* @__PURE__ */ s(Z, { name: "error-fill", size: l, color: u + "6)" }),
    e === "default" && /* @__PURE__ */ s(
      Z,
      {
        name: "attention-fill",
        size: l,
        color: "var(--color-primary-6)"
      }
    ),
    e === "warn" && /* @__PURE__ */ s(
      Z,
      {
        name: "attention-fill",
        size: l,
        color: u + "6)"
      }
    ),
    e === "error" && /* @__PURE__ */ s(Z, { name: "attention-fill", size: l, color: u + "6)" }),
    e === "success" && /* @__PURE__ */ s(Z, { name: "check-fill", size: l, color: u + "6)" }),
    e === "loading" && /* @__PURE__ */ s(Sc, { size: l, color: "var(--color-primary-6)" }),
    /* @__PURE__ */ m("div", { className: "land-alert-title", children: [
      n,
      r && /* @__PURE__ */ m(ue, { children: [
        "，",
        /* @__PURE__ */ s(tn, { onClick: o, children: r })
      ] })
    ] })
  ] });
}, rm = ({
  data: e = [],
  onChange: t,
  offsetTop: n = 0,
  gap: r = 4,
  showIndicator: o = !0,
  indicatorStyle: i,
  style: a,
  className: c,
  getContainer: l = () => window
}) => {
  const u = q(null), [d, h] = R(""), [p, f] = R(0), k = F(() => l(), [l]), v = F((b) => b === window ? window.pageYOffset || document.documentElement.scrollTop : b.scrollTop, []), M = F((b, j) => {
    b === window ? window.scrollTo({
      top: j,
      behavior: "smooth"
    }) : b.scrollTo({
      top: j,
      behavior: "smooth"
    });
  }, []), g = X(() => {
    const b = [], j = (V) => {
      V.forEach((I) => {
        I.key && b.push(I.key), I.children && j(I.children);
      });
    };
    return j(e), b;
  }, [e]), w = F((b, j) => {
    h(b), f(j);
    const V = document.getElementById(b);
    console.log("targetElement", V);
    const I = k();
    if (V)
      if (n === 0)
        V.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      else {
        const S = I === window ? { top: 0 } : I.getBoundingClientRect(), $ = V.getBoundingClientRect().top - S.top, O = v(I) + $ - n;
        M(I, O);
      }
    t == null || t(b);
  }, [n, t, k, v, M]);
  Y(() => {
    const b = (I) => {
      const S = I.filter(
        (A) => A.isIntersecting && A.intersectionRatio >= 0.5
      );
      if (S.length > 0) {
        const $ = S[0].target.id;
        h($), f(g.indexOf($)), t == null || t($);
      } else
        I.forEach((A) => {
          const $ = A.target.id;
          if (!A.isIntersecting && d === $) {
            const P = g.indexOf($), O = g[P - 1] || null;
            h(O), f(g.indexOf(O)), O && (t == null || t(O));
          }
        });
    }, j = k(), V = new IntersectionObserver(b, {
      threshold: [0, 0.5, 1],
      root: j === window ? null : j,
      rootMargin: `-${n}px 0px 0px 0px`
    });
    return g.forEach((I) => {
      const S = document.getElementById(I);
      S && V.observe(S);
    }), () => {
      g.forEach((I) => {
        const S = document.getElementById(I);
        S && V.unobserve(S);
      });
    };
  }, [g, d, n, t, k]);
  const C = (b, j = 0) => b.map((V, I) => /* @__PURE__ */ m(
    "li",
    {
      style: { textIndent: j > 0 ? `${j * 0.5}em` : 0, paddingTop: I > 0 ? `${r}px` : 0 },
      onMouseEnter: () => {
        I !== p && (y(!0), N(I));
      },
      onMouseLeave: () => y(!1),
      children: [
        /* @__PURE__ */ s(
          "a",
          {
            className: `land-anchor-link ${d === V.key ? "active" : ""}`,
            onClick: () => w(V.key, I),
            "aria-current": d === V.key ? "location" : void 0,
            children: V.title
          }
        ),
        V.children && C(V.children, j + 1)
      ]
    },
    V.key
  )), [x, N] = R(-1), [L, y] = R(!1);
  return /* @__PURE__ */ m(
    "div",
    {
      ref: u,
      className: `land-anchor ${c || ""}`,
      style: a,
      role: "navigation",
      "aria-label": "Anchor navigation",
      children: [
        /* @__PURE__ */ s("ol", { className: "land-anchor-list", children: C(e) }),
        /* @__PURE__ */ s(
          we.div,
          {
            className: "land-anchor-hover-indicator",
            animate: {
              opacity: L ? 1 : 0,
              y: x * 38 + x * r
            },
            transition: { type: "spring", stiffness: 200, damping: 30, mass: 1, restDelta: 0.1 },
            style: i
          }
        ),
        o && /* @__PURE__ */ s(
          we.div,
          {
            className: "land-anchor-active-indicator",
            animate: {
              y: p * 38 + p * r
            },
            transition: { type: "spring", stiffness: 200, damping: 30, mass: 1, restDelta: 0.1 },
            style: i
          }
        )
      ]
    }
  );
}, om = ({
  ratio: e = 1,
  children: t,
  contentClassName: n = "",
  contentStyle: r,
  style: o,
  className: i = ""
}) => {
  const a = q(null), [c, l] = R(1);
  Y(() => {
    if (!a.current) return;
    const d = (p) => {
      p.forEach((f) => {
        l(f.contentRect.width / f.contentRect.height);
      });
    };
    new ResizeObserver(d).observe(a.current);
  }, []);
  const u = X(() => e > c, [e, c]);
  return /* @__PURE__ */ s(
    "div",
    {
      ref: a,
      className: `land-auto-container ${i}`,
      style: o,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: n,
          style: {
            width: u ? "100%" : "auto",
            height: u ? "auto" : "100%",
            aspectRatio: `${e}`,
            ...r
          },
          children: t
        }
      )
    }
  );
}, jc = ({
  color: e,
  size: t = 12
}) => /* @__PURE__ */ s(
  "div",
  {
    className: "land-audio-animation-icon",
    style: { width: `${t}px`, height: `${t}px` },
    children: Array.from({ length: 4 }).map((n, r) => /* @__PURE__ */ s(
      "div",
      {
        className: "land-audio-animation-icon-bar",
        style: {
          background: e
        }
      },
      r
    ))
  }
), $c = ({
  play: e,
  animation: t = !1,
  iconSize: n = 24,
  color: r = "var(--color-text-primary)",
  style: o,
  className: i = "",
  onClick: a
}) => /* @__PURE__ */ s(
  "div",
  {
    className: `land-audio-play-icon ${i}`,
    style: {
      width: `${n}px`,
      height: `${n}px`,
      ...o
    },
    onClick: a,
    children: e ? t ? /* @__PURE__ */ s(Z, { name: "video-play", size: n / 1.8, color: r }) : /* @__PURE__ */ s(jc, { size: n / 1.8, color: r }) : /* @__PURE__ */ s(Z, { name: "video-pause", size: 24, color: r })
  }
);
function yi(e, t, n) {
  const r = (i, a, c, l, u) => (i - a) / (c - a) * (u - l) + l;
  return e.map((i) => r(i, t, n, 0, 1));
}
function s0(e, t, n, r, o = 2, i = 2, a = "#999", c = "#FF0000", l, u) {
  console.log("drawWave", e, "canvas size:", t.width, "x", t.height);
  try {
    const d = t.getContext("2d");
    if (!d) {
      console.warn("Failed to get canvas context");
      return;
    }
    let h = e;
    if (h.length === 0) {
      console.warn("No wave data to draw");
      return;
    }
    if (l) {
      const y = Math.max(...e);
      y > 0 && (h = yi(e, 0, y));
    }
    if (u) {
      const y = Math.min(...e), b = Math.max(...e), j = Math.min(...e.filter((V) => V !== y));
      h = yi(
        e.filter((V) => V !== y),
        j,
        b
      );
    }
    const p = t.width, f = t.height;
    if (p === 0 || f === 0) {
      console.warn("Canvas has no size");
      return;
    }
    const k = n.currentTime || 0, v = n.duration || 1, M = Math.floor(k / v * r);
    d.clearRect(0, 0, p, f);
    const g = o + i, w = Math.floor(p / g), C = Math.min(h.length, w), x = Math.max(...h), N = 2, L = x > 0 ? Math.max(f * 0.8 / x, N / x) : 1;
    console.log("Drawing bars:", C, "maxValue:", x, "scale:", L);
    for (let y = 0; y < C; y++) {
      const b = h[y] || 0, j = y * g, V = Math.max(b * L, N), I = f - V;
      d.fillStyle = y < M ? c : a, d.fillRect(j, I, o, V);
    }
  } catch (d) {
    console.warn("Canvas operation failed:", d);
  }
}
function i0(e, t) {
  console.log("drawWaveform", e);
  const n = e.getChannelData(0), r = Math.floor(n.length / t);
  let o = [];
  for (let i = 0; i < t; i++) {
    let a = r * i, c = 0;
    for (let u = 0; u < r; u++)
      c = c + Math.abs(n[a + u]);
    const l = c / r;
    Number.isNaN(l) || o.push(l);
  }
  return o;
}
function a0({
  audioUrl: e,
  play: t = !1,
  onPlayChange: n,
  sampleCount: r = 100,
  barWidth: o = 2,
  barGap: i = 1,
  defaultColor: a = "var(--color-gray-12)",
  activeColor: c = "var(--color-primary-6)",
  normalize: l = !0,
  amplify: u = !1,
  type: d = "bar"
}) {
  const h = q(null), p = q(null), f = q(), [k, v] = R([]), [M, g] = R(!1), [w, C] = R(null), [x, N] = R(t), L = F(async () => {
    if (e) {
      g(!0), C(null);
      try {
        const S = new (window.AudioContext || window.webkitAudioContext)(), $ = await (await fetch(e)).arrayBuffer(), P = await S.decodeAudioData($), O = i0(P, r);
        v(O || []), S.close();
      } catch (S) {
        C(S instanceof Error ? S.message : "Failed to generate wave data"), console.error("Error generating wave data:", S);
      } finally {
        g(!1);
      }
    }
  }, [e, r]), y = F(() => {
    if (!h.current || k.length === 0) return;
    const S = h.current, A = S.parentElement;
    if (A) {
      const P = A.getBoundingClientRect();
      S.width = P.width, S.height = P.height;
    }
    const $ = p.current || new Audio(e);
    d === "bar" ? s0(
      k,
      S,
      $,
      r,
      o,
      i,
      a,
      c,
      l,
      u
    ) : b(
      k,
      S,
      $,
      a,
      c
    );
  }, [k, r, o, i, a, c, l, u, d, e]), b = F((S, A, $, P, O) => {
    try {
      const D = A.getContext("2d");
      if (!D) {
        console.warn("Failed to get canvas context");
        return;
      }
      const z = A.width, T = A.height;
      if (z === 0 || T === 0) {
        console.warn("Canvas has no size for line waveform");
        return;
      }
      const E = $.currentTime || 0, H = $.duration || 1, B = Math.floor(E / H * S.length);
      if (D.clearRect(0, 0, z, T), S.length === 0) {
        console.warn("No data for line waveform");
        return;
      }
      const U = Math.max(...S), K = U > 0 ? T * 0.6 / U : 1, _ = z / (S.length - 1);
      if (D.beginPath(), D.strokeStyle = P, D.lineWidth = 1, D.setLineDash([2, 2]), D.moveTo(0, T / 2), D.lineTo(z, T / 2), D.stroke(), D.setLineDash([]), D.beginPath(), D.strokeStyle = P, D.lineWidth = 2, S.forEach((Q, oe) => {
        const te = oe * _, ie = T / 2 - Q * K;
        oe === 0 ? D.moveTo(te, ie) : D.lineTo(te, ie);
      }), D.stroke(), B > 0) {
        D.beginPath(), D.strokeStyle = O, D.lineWidth = 3;
        for (let Q = 0; Q < Math.min(B, S.length); Q++) {
          const oe = Q * _, te = T / 2 - S[Q] * K;
          Q === 0 ? D.moveTo(oe, te) : D.lineTo(oe, te);
        }
        D.stroke();
      }
    } catch (D) {
      console.warn("Canvas operation failed:", D);
    }
  }, []), j = F(() => {
    y(), f.current = requestAnimationFrame(j);
  }, [y]), V = F(() => {
    f.current && cancelAnimationFrame(f.current), j();
  }, [j]), I = F(() => {
    f.current && (cancelAnimationFrame(f.current), f.current = void 0);
  }, []);
  return Y(() => {
    L();
  }, [L]), Y(() => {
    const S = p.current;
    S && (t ? S.play().catch((A) => {
      console.error("Failed to play audio:", A), N(!1), n == null || n(!1);
    }) : S.pause());
  }, [t, n]), Y(() => {
    const S = p.current;
    if (!S) return;
    const A = () => {
      N(!0), n == null || n(!0), V();
    }, $ = () => {
      N(!1), n == null || n(!1), I();
    }, P = () => {
      N(!1), n == null || n(!1), I();
    };
    return S.addEventListener("play", A), S.addEventListener("pause", $), S.addEventListener("ended", P), () => {
      S.removeEventListener("play", A), S.removeEventListener("pause", $), S.removeEventListener("ended", P), I();
    };
  }, [V, I, n]), Y(() => () => {
    I();
  }, [I]), {
    canvasRef: h,
    audioRef: p,
    waveData: k,
    isLoading: M,
    error: w,
    isPlaying: x,
    drawWaveform: y,
    startAnimation: V,
    stopAnimation: I
  };
}
const Tc = ({
  audioUrl: e,
  play: t = !1,
  onPlayChange: n,
  canvas: r,
  audio: o,
  samples: i,
  barWidth: a = 2,
  barGap: c = 1,
  defaultColor: l = "var(--color-gray-12)",
  activeColor: u = "var(--color-primary-6)",
  normalize: d = !0,
  amplify: h = !1,
  type: p = "bar",
  sampleCount: f = 100,
  style: k,
  className: v = "",
  children: M
}) => {
  const {
    canvasRef: g,
    audioRef: w,
    waveData: C,
    isLoading: x,
    error: N,
    drawWaveform: L
  } = a0({
    audioUrl: e,
    play: t,
    onPlayChange: n,
    sampleCount: f,
    barWidth: a,
    barGap: c,
    defaultColor: l,
    activeColor: u,
    normalize: d,
    amplify: h,
    type: p
  }), y = r ? { current: r } : g, b = i || C;
  return Te.useEffect(() => {
    b.length > 0 && setTimeout(() => {
      L();
    }, 100);
  }, [b, L]), Te.useEffect(() => {
    const j = y.current;
    if (!j) return;
    const V = new ResizeObserver(() => {
      b.length > 0 && L();
    });
    return V.observe(j), () => V.disconnect();
  }, [b, L, y]), N ? /* @__PURE__ */ s("div", { className: `land-audio-wave error ${v}`, style: k, children: /* @__PURE__ */ m("div", { className: "error-message", children: [
    "Failed to load audio: ",
    N
  ] }) }) : x ? /* @__PURE__ */ s("div", { className: `land-audio-wave loading ${v}`, style: k, children: /* @__PURE__ */ s("div", { className: "loading-spinner", children: "Loading waveform..." }) }) : /* @__PURE__ */ m(
    "div",
    {
      className: `land-audio-wave ${p} ${v}`,
      style: {
        position: "relative",
        width: "100%",
        height: "60px",
        ...k
      },
      children: [
        /* @__PURE__ */ s("audio", { ref: w, src: e, className: "land-audio-wave-audio" }),
        /* @__PURE__ */ s(
          "canvas",
          {
            ref: y,
            style: {
              width: "100%",
              height: "100%",
              display: "block"
            }
          }
        ),
        M
      ]
    }
  );
}, Yo = ({
  audioUrl: e,
  showWave: t = !1,
  waveType: n = "bar",
  waveSampleCount: r = 100,
  waveBarWidth: o = 2,
  waveBarGap: i = 1,
  waveDefaultColor: a = "var(--color-gray-12)",
  waveActiveColor: c = "var(--color-primary-12)",
  waveNormalize: l = !0,
  waveAmplify: u = !1,
  style: d,
  className: h = ""
}) => {
  const p = q(null), [f, k] = R(!1);
  return Y(() => {
    if (!p.current) return;
    const v = p.current;
    f ? v.play() : v.pause();
  }, [f]), /* @__PURE__ */ m("div", { className: `land-audio ${h}`, style: d, children: [
    /* @__PURE__ */ s(
      $c,
      {
        play: f,
        onClick: (v) => {
          v.stopPropagation(), k(!f);
        }
      }
    ),
    t && /* @__PURE__ */ s(
      Tc,
      {
        audioUrl: e,
        audio: p.current,
        type: n,
        sampleCount: r,
        barWidth: o,
        barGap: i,
        defaultColor: a,
        activeColor: c,
        normalize: l,
        amplify: u
      }
    ),
    !t && /* @__PURE__ */ s("audio", { ref: p, src: e })
  ] });
};
Yo.AudioButton = $c;
Yo.AudioAnimationIcon = jc;
Yo.AudioWave = Tc;
const sm = ({
  isDot: e,
  count: t,
  exceedCount: n = 99,
  content: r,
  children: o,
  className: i,
  style: a
}) => {
  function c(l) {
    return /^[A-Z]+$/.test(l);
  }
  return /* @__PURE__ */ m("div", { className: `land-badge ${i}`, style: a, children: [
    /* @__PURE__ */ s("div", { className: `land-badge-content ${e ? "dot" : ""} ${c(`${t || r}`) ? "large" : ""}`, children: e ? null : r || (t <= n ? t : `${n}+`) }),
    o
  ] });
}, c0 = ({
  item: e,
  active: t,
  onChange: n,
  index: r,
  hoverPreview: o
}) => {
  const i = q(null), [a, c] = R(!1);
  return Y(() => {
    i.current && (i.current.scrollWidth > i.current.offsetWidth ? c(!0) : c(!1));
  }, [e]), /* @__PURE__ */ s(me, { targetBody: !0, content: e.tip || (o && a ? e.label : ""), children: /* @__PURE__ */ m(
    "div",
    {
      className: `land-breadCrumb-item hover-pop ${t ? "active" : ""}`,
      onClick: () => n == null ? void 0 : n(),
      children: [
        /* @__PURE__ */ s("div", { ref: i, className: `land-breadcrumb-label ${e.maxWidth ? "ellipsis" : ""}`, style: { maxWidth: `${e.maxWidth}px` }, children: e.label }),
        r > 0 && /* @__PURE__ */ s(Z, { name: "arrow", className: "land-breadCrumb-item-arrow", size: 16, strokeWidth: 4 })
      ]
    }
  ) });
}, im = ({
  data: e = [],
  current: t,
  showMask: n = !1,
  hoverPreview: r = !1,
  onChange: o,
  style: i,
  className: a = ""
}) => {
  var p;
  const c = q(null), [l, u] = R(!1), [d, h] = R(!0);
  return Y(() => {
    if (!n || !c.current) return;
    const f = () => {
      c.current && (u(c.current.scrollLeft <= c.current.clientWidth - c.current.scrollWidth), h(c.current.scrollLeft >= 0));
    };
    return c.current.addEventListener("scroll", f), () => {
      var k;
      (k = c.current) == null || k.removeEventListener("scroll", f);
    };
  }, []), /* @__PURE__ */ m("div", { className: `land-breadCrumb  ${a}`, style: i, children: [
    n && /* @__PURE__ */ s("div", { className: `land-breadCrumb-prefixMask ${l ? "hidden" : ""}` }),
    /* @__PURE__ */ s("div", { ref: c, className: "land-breadCrumb-container", children: (p = Array.from(e)) == null ? void 0 : p.reverse().map((f, k) => /* @__PURE__ */ s(
      c0,
      {
        index: k,
        item: f,
        active: t === f.value,
        hoverPreview: r,
        onChange: () => o == null ? void 0 : o(f)
      },
      f.value
    )) }),
    n && /* @__PURE__ */ s("div", { className: `land-breadCrumb-suffixMask ${d ? "hidden" : ""}` })
  ] });
}, l0 = ({
  style: e,
  ...t
}) => {
  const [n, r] = R(!1);
  return /* @__PURE__ */ s(
    de,
    {
      style: {
        paddingRight: "12px",
        ...e
      },
      ...t,
      nativeEvent: {
        onMouseEnter: () => r(!0),
        onMouseLeave: () => r(!1)
      },
      children: /* @__PURE__ */ s(Z, { name: "arrow-line", size: 16, strokeWidth: 3, className: `land-button-arrow-icon ${n ? "button-hover-arrow" : ""}` })
    }
  );
}, d0 = ({
  defaultSide: e,
  hoverSide: t,
  ...n
}) => {
  const [r, o] = R(!1);
  return /* @__PURE__ */ m(
    de,
    {
      ...n,
      nativeEvent: {
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1)
      },
      children: [
        /* @__PURE__ */ s(we.div, { animate: { opacity: r ? 1 : 0, scaleY: r ? 1 : -1 }, transition: { duration: 0.6, type: "spring" }, className: "land-button-change-hover", children: t }),
        /* @__PURE__ */ s(we.div, { animate: { opacity: r ? 0 : 1 }, transition: { duration: 0.6, type: "spring" }, className: "land-button-change-default", children: e })
      ]
    }
  );
}, de = ({
  // 基础属性
  type: e = "outline",
  status: t = "default",
  size: n = "default",
  disabled: r = !1,
  block: o = !1,
  bold: i = !1,
  hoverBold: a = !1,
  hoverAnimation: c = !1,
  activeAnimation: l,
  style: u,
  className: d = "",
  onClick: h,
  children: p,
  // 内容属性
  text: f,
  subText: k,
  icon: v,
  // 尺寸属性
  capsule: M,
  // 气泡属性
  tip: g,
  tipProps: w,
  // 原生事件
  nativeEvent: C
}) => {
  const x = X(() => !!(v && !f && !k), [v, f, k]), N = X(() => [
    "land-button",
    e,
    t,
    x && "iconOnly",
    g && "hover-pop",
    o && "block",
    i && "bold",
    a && "hover-bold",
    M && "capsule",
    c && "hover-animation",
    l && "active-animation",
    n && `size-${n}`,
    d
  ].filter(Boolean).join(" "), [e, t, x, r, g, d]), L = () => /* @__PURE__ */ m(me, { targetBody: !0, theme: "dark", content: g, ...w, children: [
    v && /* @__PURE__ */ s("div", { className: "land-button-icon", children: v }),
    !x && (f || k) && /* @__PURE__ */ m("div", { className: "land-button-mask-content-wrapper", children: [
      /* @__PURE__ */ s("span", { children: f }),
      k && /* @__PURE__ */ s("span", { className: "subText", children: k }),
      (a || e === "transparent") && /* @__PURE__ */ m("div", { className: "land-button-mask-content", children: [
        /* @__PURE__ */ s("span", { children: f }),
        k && /* @__PURE__ */ s("span", { className: "subText", children: k })
      ] })
    ] }),
    p
  ] }), y = {
    style: u,
    className: N,
    disabled: r,
    onClick: (b) => {
      r || h == null || h(b);
    },
    ...C
    // 原生事件
  };
  return /* @__PURE__ */ s(
    "button",
    {
      ...y,
      children: L()
    }
  );
};
de.ButtonArrow = l0;
de.ButtonChange = d0;
const Ac = (e, t) => {
  const n = q(t);
  Y(() => {
    n.current = t;
  }, [t]);
  const r = F((o) => {
    e.current && !e.current.contains(o.target) && n.current(o);
  }, [e]);
  Y(() => (document.body.addEventListener("mousedown", r), document.body.addEventListener("touchstart", r), () => {
    document.body.removeEventListener("mousedown", r), document.body.removeEventListener("touchstart", r);
  }), [r]);
}, cn = ({
  trigger: e = "hover",
  targetBody: t = !1,
  dropData: n,
  dropContent: r,
  children: o,
  placement: i = "bottom",
  alignment: a = "left",
  disabled: c,
  onChange: l,
  onOpen: u,
  onClose: d,
  toggleClassName: h = "",
  toggleStyle: p,
  dropClassName: f = "",
  dropStyle: k,
  open: v = !1
}) => {
  const M = q(null), g = q(null), [w, C] = R(v);
  Y(() => {
    c && w && C(!1);
  }, [c, w]), Y(() => {
    c || C(v);
  }, [v, c]);
  const [x, N] = R({
    top: 0,
    left: 0
  }), [L, y] = R(
    i
  ), [b, j] = R(a), V = F(() => {
    if (!M.current) return;
    const O = M.current.getBoundingClientRect(), D = window.innerWidth, z = window.innerHeight, T = window.pageXOffset || document.documentElement.scrollLeft, E = window.pageYOffset || document.documentElement.scrollTop, H = 200, B = 150, U = 0;
    let K = 0, _ = 0, Q = i, oe = a;
    const te = z - O.bottom - U, ie = O.top - U;
    if (i === "bottom" && te < B && ie > B ? Q = "top" : i === "top" && ie < B && te > B && (Q = "bottom"), t) {
      if (!g.current) return;
      const ve = g.current.getBoundingClientRect(), ge = ve.width || H, be = ve.height || B;
      Q === "bottom" ? K = O.bottom + U + E : K = O.top - be - U + E;
      let tr = O.left + O.width / 2, nr = O.left, Ye = O.right;
      switch (a) {
        case "center":
          _ = tr - ge / 2;
          break;
        case "right":
          _ = Ye - ge;
          break;
        default:
          _ = nr;
          break;
      }
      _ < T ? (_ = T + U, oe = "left") : _ + ge > T + D && (_ = T + D - ge - U, oe = "right"), K < E ? K = E + U : K + be > E + z && (K = E + z - be - U);
    } else
      oe = a;
    N({ top: K, left: _ }), y(Q), j(oe);
  }, [i, a, t]);
  Y(() => {
    if (w && !c) {
      const O = setTimeout(V, 0);
      return () => clearTimeout(O);
    }
  }, [w, c, V]), Y(() => {
    if (w && !c) {
      const O = () => V(), D = () => V();
      return window.addEventListener("resize", O), window.addEventListener("scroll", D, !0), document.addEventListener("scroll", D, !0), () => {
        window.removeEventListener("resize", O), window.removeEventListener("scroll", D, !0), document.removeEventListener("scroll", D, !0);
      };
    }
  }, [w, c, V]), Y(() => {
    w ? u == null || u(w) : d == null || d(w);
  }, [w, u, d]);
  const I = (O) => {
    c || (l == null || l(O), e === "click" && C(!1));
  }, S = /* @__PURE__ */ s(
    "div",
    {
      ref: g,
      className: `land-dropdown-results ${w ? "show" : ""} ${b} ${L}`,
      style: t ? {
        position: "fixed",
        top: x.top,
        left: x.left,
        transform: "none"
      } : void 0,
      "data-debug": `alignment: ${b}, placement: ${L}, targetBody: ${t}`,
      onClick: (O) => O.stopPropagation(),
      children: /* @__PURE__ */ m("div", { className: `land-dropdown-drop ${f}`, style: k, children: [
        n && !r && /* @__PURE__ */ s("ul", { className: "land-dropdown-drop-list", children: n == null ? void 0 : n.map((O) => /* @__PURE__ */ s(
          "div",
          {
            className: "land-dropdown-drop-item",
            onClick: () => I(O),
            children: O.label
          },
          O.key
        )) }),
        r
      ] })
    }
  );
  Ac(M, () => {
    w && !c && C(!1);
  });
  const A = () => {
    c || e === "click" && C(!w);
  }, $ = () => {
    c || e === "hover" && C(!0);
  }, P = () => {
    e === "hover" && C(!1);
  };
  return /* @__PURE__ */ m(nn, { children: [
    /* @__PURE__ */ m(
      "div",
      {
        ref: M,
        className: `land-dropdown-toggle ${w ? "show" : ""} ${h} ${c ? "disabled" : ""}`,
        style: p,
        onClick: A,
        onMouseEnter: $,
        onMouseLeave: P,
        "aria-disabled": c,
        "aria-expanded": w,
        "aria-haspopup": "true",
        children: [
          o,
          !t && S
        ]
      }
    ),
    t && w && !c && S
  ] });
}, _o = ({
  checked: e = !1,
  indeterminate: t = !1,
  label: n = "选项",
  tip: r,
  disabled: o,
  className: i,
  style: a,
  animated: c,
  onCheckedChange: l
}) => {
  const [u, d] = R(e);
  return Y(() => {
    d(e);
  }, [e]), /* @__PURE__ */ m("div", { className: `land-check ${i}`, style: a, children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: `land-check-label ${u ? "checked" : ""} ${o ? "disabled" : ""}`,
        onClick: (h) => {
          o || (d(!u), l == null || l(u, h));
        },
        children: [
          /* @__PURE__ */ m("div", { className: `land-check-circle ${u ? "checked" : ""} ${t ? "indeterminate" : ""} ${c && !t ? "animated" : "no-animation"}`, children: [
            /* @__PURE__ */ s(Z, { name: "check", size: 10, className: "land-check-circle-icon" }),
            /* @__PURE__ */ s(Z, { name: "dec", strokeWidth: 8, size: 10, className: "land-check-indeterminate-icon" })
          ] }),
          n
        ]
      }
    ),
    r && /* @__PURE__ */ m("div", { className: "land-check-pop hover-pop", children: [
      /* @__PURE__ */ s(Z, { name: "info-fill", className: "land-check-pop-icon" }),
      /* @__PURE__ */ s(
        me,
        {
          content: r,
          theme: "dark",
          style: { maxWidth: "200px" },
          placement: "top"
        }
      )
    ] })
  ] });
}, Ic = ({
  data: e,
  placeholder: t = "请选择",
  selected: n,
  selectedValues: r = [],
  multiple: o = !1,
  separator: i = "，",
  maxDisplayCount: a,
  showCheckbox: c = !1,
  customValueDisplay: l,
  type: u = "border",
  tip: d,
  tipProps: h,
  disabled: p,
  onChange: f,
  open: k = !1,
  className: v = "",
  style: M,
  ...g
}) => {
  const [w, C] = R(n), [x, N] = R(r);
  Y(() => {
    n !== w && C(n);
  }, [n, w]), Y(() => {
    JSON.stringify(r) !== JSON.stringify(x) && N(r);
  }, [r, x]);
  const L = X(() => e ? e.filter(($) => x.includes($.key)).map(($) => $.label) : [], [e, x]), y = X(() => e ? e.filter(($) => x.includes($.key)) : [], [e, x]), b = F(() => {
    var $;
    return e ? o ? L.length === 0 ? t : a !== void 0 && L.length > a ? `${L.slice(0, a).join(i)}等${L.length}个选项` : L.join(i) : w === void 0 || w === "" ? t : ($ = e == null ? void 0 : e.filter((P) => P.key === w)[0]) == null ? void 0 : $.label : t;
  }, [
    o,
    L,
    a,
    i,
    w,
    e,
    t
  ]), j = F(() => {
    if (!l)
      return b();
    if (o)
      return l({
        values: x,
        items: y,
        isMultiple: !0,
        placeholder: t
      });
    {
      const $ = e == null ? void 0 : e.filter((D) => D.key === w)[0], P = $ ? [$] : [], O = $ ? [$.key] : [];
      return l({
        values: O,
        items: P,
        isMultiple: !1,
        placeholder: t
      });
    }
  }, [
    l,
    o,
    x,
    y,
    w,
    e,
    t,
    b
  ]), V = F(
    ($) => {
      if (!$.disabled)
        if (o) {
          const P = [...x], O = P.indexOf($.key);
          O > -1 ? P.splice(O, 1) : P.push($.key), N(P);
          const D = (e == null ? void 0 : e.filter((z) => P.includes(z.key))) || [];
          f == null || f($, D);
        } else
          C($.key), f == null || f($);
    },
    [o, x, e, f]
  ), I = F(
    ($) => o ? x.includes($) : w === $,
    [o, x, w]
  ), S = X(
    () => /* @__PURE__ */ s("div", { className: "land-select-list", children: e && e.length > 0 ? e == null ? void 0 : e.map(($) => /* @__PURE__ */ m(
      "div",
      {
        className: `land-select-drop-item ${$.tip ? "hover-pop" : ""} ${I($.key) ? "selected" : ""} ${$.disabled ? "disabled" : ""}`,
        onClick: (P) => {
          P.stopPropagation(), V($);
        },
        children: [
          o && c && /* @__PURE__ */ s("div", { className: "land-select-checkbox", children: /* @__PURE__ */ s(
            _o,
            {
              checked: I($.key),
              disabled: $.disabled
            }
          ) }),
          !c && /* @__PURE__ */ s("div", { className: "land-select-results-item-label", children: $.label }),
          $.iconTip && /* @__PURE__ */ m(
            "div",
            {
              className: `land-select-item-info ${$.iconTip ? "hover-pop" : ""}`,
              children: [
                /* @__PURE__ */ s(Z, { name: "info-stroke", size: 12 }),
                $.iconTip && /* @__PURE__ */ s(
                  me,
                  {
                    content: $.iconTip,
                    placement: "right",
                    theme: "dark",
                    style: { marginLeft: "12px" }
                  }
                )
              ]
            }
          ),
          $.tip && /* @__PURE__ */ s(
            me,
            {
              content: $.tip,
              placement: "right",
              theme: "dark",
              style: { marginLeft: "8px" }
            }
          )
        ]
      },
      $.key
    )) : /* @__PURE__ */ s("span", { className: "land-select-drop-empty", children: "暂无内容" }) }),
    [e, I, V, o, c]
  ), A = X(() => e ? l ? j() : b() : t, [
    l,
    j,
    b,
    t
  ]);
  return /* @__PURE__ */ s("div", { className: `land-select ${v}`, style: M, children: /* @__PURE__ */ s(cn, { trigger: "click", disabled: p, dropContent: S, ...g, children: /* @__PURE__ */ m(
    "div",
    {
      className: `land-select-input ${u} ${p ? "disabled" : ""}`,
      children: [
        /* @__PURE__ */ s(
          "p",
          {
            className: `${(o ? x.length > 0 : w !== void 0 && w !== "") ? "land-select-trigger" : "land-select-placeholder"}`,
            children: A
          }
        ),
        /* @__PURE__ */ s(
          Z,
          {
            name: "arrow-triangle",
            className: "land-select-value-arrow",
            size: 16
          }
        ),
        d && /* @__PURE__ */ s(me, { targetBody: !0, content: d, theme: "dark", ...h })
      ]
    }
  ) }) });
}, ln = ({
  language: e = "zh",
  currentYear: t,
  currentMonth: n,
  shouldShowYearSelector: r,
  yearRange: o,
  monthPrevDisabled: i = !1,
  monthNextDisabled: a = !1,
  onMonthChange: c,
  onYearChange: l,
  customYearDisplay: u,
  customYearOptions: d,
  rightContent: h,
  className: p = "",
  style: f,
  viewMode: k = "date"
}) => {
  const v = Te.useMemo(() => {
    if (!r) return [];
    if (d)
      return d;
    const [x, N] = o, L = N - x + 1;
    return Array.from({ length: L }, (y, b) => ({
      key: `${x + b}`,
      label: `${x + b}`
    }));
  }, [r, o, d]), M = Te.useMemo(() => ({
    1: { en: "January", zh: "一月" },
    2: { en: "February", zh: "二月" },
    3: { en: "March", zh: "三月" },
    4: { en: "April", zh: "四月" },
    5: { en: "May", zh: "五月" },
    6: { en: "June", zh: "六月" },
    7: { en: "July", zh: "七月" },
    8: { en: "August", zh: "八月" },
    9: { en: "September", zh: "九月" },
    10: { en: "October", zh: "十月" },
    11: { en: "November", zh: "十一月" },
    12: { en: "December", zh: "十二月" }
  }), []), g = k === "date" || k === "week", w = k === "date" || k === "week" || k === "month" || k === "quarter" || k === "year", C = k === "date" || k === "week";
  return /* @__PURE__ */ m("div", { className: `land-calendar-header ${p}`, style: f, children: [
    /* @__PURE__ */ m("div", { className: "land-calendar-header-btn-group", children: [
      w && /* @__PURE__ */ s(
        de,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Z, { name: "arrow-double" }),
          className: "land-calendar-btn prev",
          disabled: i,
          onClick: () => l == null ? void 0 : l(t - 1)
        }
      ),
      C && /* @__PURE__ */ s(
        de,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Z, { name: "arrow" }),
          className: "land-calendar-btn prev",
          disabled: i,
          onClick: () => c == null ? void 0 : c(n !== void 0 ? n - 1 : -1)
        }
      )
    ] }),
    /* @__PURE__ */ m("div", { className: "land-calendar-header-center", children: [
      /* @__PURE__ */ s("div", { className: "land-calendar-year", children: r ? /* @__PURE__ */ s(
        Ic,
        {
          type: "transparent",
          selected: t.toString(),
          data: v,
          onChange: (x) => l == null ? void 0 : l(Number(x.key))
        }
      ) : /* @__PURE__ */ s("div", { className: "land-calendar-year-input", children: u || t }) }),
      g && n !== void 0 && /* @__PURE__ */ s(ue, { children: e === "zh" ? M[n + 1].zh : M[n + 1].en })
    ] }),
    h && /* @__PURE__ */ s("div", { className: "land-calendar-right-content", children: h }),
    /* @__PURE__ */ m("div", { className: "land-calendar-header-btn-group", children: [
      C && /* @__PURE__ */ s(
        de,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Z, { name: "arrow" }),
          className: "land-calendar-btn next",
          disabled: a,
          onClick: () => c == null ? void 0 : c(n !== void 0 ? n + 1 : 1)
        }
      ),
      w && /* @__PURE__ */ s(
        de,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Z, { name: "arrow-double" }),
          className: "land-calendar-btn next",
          disabled: a,
          onClick: () => l == null ? void 0 : l(t + 1)
        }
      )
    ] })
  ] });
};
function Fn(e) {
  if (e instanceof Date)
    return e;
  if (typeof e == "number")
    return new Date(e);
  if (typeof e == "string") {
    const t = new Date(e);
    return isNaN(t.getTime()) ? null : t;
  }
  return null;
}
function bt(e, t, n) {
  const r = t ? Fn(t) : null, o = n ? Fn(n) : null;
  return !(r && e < r || o && e > o);
}
function Pc(e) {
  if (!e) return;
  const t = Fn(e);
  return t ? t.getFullYear() : void 0;
}
function Hc(e) {
  if (!e) return;
  const t = Fn(e);
  return t ? t.getFullYear() : void 0;
}
function u0(e, t, n) {
  const r = Pc(t), o = Hc(n);
  return !(r && e < r || o && e > o);
}
function h0(e, t, n, r) {
  const o = new Date(e, t, 1);
  return bt(o, n, r);
}
function p0(e, t, n, r) {
  const o = (t - 1) * 3, i = new Date(e, o, 1), a = new Date(e, o + 2, 31);
  return bt(i, n, r) || bt(a, n, r);
}
function Ci(e, t, n, r) {
  return bt(e, n, r) || bt(t, n, r);
}
function br(e, t, n, r, o) {
  const i = new Date(e, t, n);
  return bt(i, r, o);
}
function Et(e, t) {
  const n = (/* @__PURE__ */ new Date()).getFullYear(), r = Pc(e), o = Hc(t);
  return !r && !o ? [n, n] : r && !o ? [r, n] : !r && o ? [n, o] : r && o ? [r, o] : [n, n];
}
function dn(e, t) {
  const [n, r] = Et(e, t);
  return r > n;
}
function f0(e, t, n, r, o) {
  const i = new Date(e, t, 1), a = new Date(e, t + 1, 0), c = i.getDay(), l = a.getDate(), u = /* @__PURE__ */ new Date(), d = [];
  for (let p = 0; p < c; p++) {
    const f = new Date(e, t, 0), k = new Date(f.getTime() - (c - p - 1) * 24 * 60 * 60 * 1e3), v = k.getDate(), M = k.getMonth(), g = k.getFullYear();
    d.push({
      date: k,
      isCurrentMonth: !1,
      isToday: k.toDateString() === u.toDateString(),
      isSelected: !1,
      isDisabled: !br(g, M, v, r, o),
      dayNumber: v,
      month: M,
      year: g
    });
  }
  for (let p = 1; p <= l; p++) {
    const f = new Date(e, t, p);
    d.push({
      date: f,
      isCurrentMonth: !0,
      isToday: f.toDateString() === u.toDateString(),
      isSelected: n === p,
      isDisabled: !br(e, t, p, r, o),
      dayNumber: p,
      month: t,
      year: e
    });
  }
  const h = d.length;
  for (let p = 1; p <= 42 - h; p++) {
    const f = new Date(e, t + 1, p), k = f.getDate(), v = f.getMonth(), M = f.getFullYear();
    d.push({
      date: f,
      isCurrentMonth: !1,
      isToday: f.toDateString() === u.toDateString(),
      isSelected: !1,
      isDisabled: !br(M, v, k, r, o),
      dayNumber: k,
      month: v,
      year: M
    });
  }
  return d;
}
function ft(e, t, n, r, o) {
  const i = new Date(e, t, 1), a = new Date(e, t + 1, 0), c = i.getDay(), l = a.getDate(), u = /* @__PURE__ */ new Date(), d = [];
  let h = [];
  for (let p = 0; p < c; p++) {
    const f = new Date(e, t, 0), k = new Date(f.getTime() - (c - p - 1) * 24 * 60 * 60 * 1e3);
    h.push(k);
  }
  for (let p = 1; p <= l; p++)
    if (h.push(new Date(e, t, p)), h.length === 7) {
      const f = h[0], k = h[6], v = d.length;
      d.push({
        dates: [...h],
        isCurrentWeek: Mi(h, u),
        isSelected: n === v + 1,
        isDisabled: !Ci(f, k, r, o),
        weekStart: f,
        weekEnd: k
      }), h = [];
    }
  if (h.length > 0) {
    for (let v = h.length; v < 7; v++) {
      const M = new Date(e, t + 1, v - h.length + 1);
      h.push(M);
    }
    const p = h[0], f = h[6], k = d.length;
    d.push({
      dates: h,
      isCurrentWeek: Mi(h, u),
      isSelected: n === k + 1,
      isDisabled: !Ci(p, f, r, o),
      weekStart: p,
      weekEnd: f
    });
  }
  return d;
}
function Mi(e, t) {
  return e.some(
    (n) => n.getDate() === t.getDate() && n.getMonth() === t.getMonth() && n.getFullYear() === t.getFullYear()
  );
}
const m0 = [
  { zh: "日", en: "Su" },
  { zh: "一", en: "Mo" },
  { zh: "二", en: "Tu" },
  { zh: "三", en: "We" },
  { zh: "四", en: "Th" },
  { zh: "五", en: "Fr" },
  { zh: "六", en: "Sa" }
];
async function g0(e, t = "zh") {
  try {
    return (await (await fetch(
      `https://date.nager.at/api/v3/publicholidays/${e}/${t}`
    )).json()).map((o) => {
      const i = o.date.split("-");
      return {
        date: `${Number(i[1])}-${Number(i[2])}`,
        zhName: o.localName,
        enName: o.name
      };
    });
  } catch {
    return [];
  }
}
const Rc = ({
  language: e = "zh",
  className: t = ""
}) => /* @__PURE__ */ s("div", { className: `land-calendar-weekdays ${t}`, children: m0.map((n, r) => /* @__PURE__ */ s("div", { className: "land-calendar-item weekday", children: e === "zh" ? n.zh : n.en }, r)) }), v0 = ({
  day: e,
  onDayClick: t,
  onDayMouseOver: n,
  onDayMouseOut: r,
  onDayMouseEnter: o,
  onDayMouseLeave: i,
  children: a,
  className: c = ""
}) => {
  const l = (f) => {
    f.stopPropagation(), !e.isDisabled && t && t(e);
  }, u = (f) => {
    !e.isDisabled && n && n(e, f);
  }, d = (f) => {
    !e.isDisabled && r && r(e, f);
  }, h = (f) => {
    !e.isDisabled && o && o(e, f);
  }, p = (f) => {
    !e.isDisabled && i && i(e, f);
  };
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-calendar-item day ${e.isToday ? "current" : ""}${e.isSelected ? " selected" : ""}${e.isDisabled ? " disabled" : ""}${e.isCurrentMonth ? "" : " other-month"} ${c}`,
      onClick: l,
      onMouseOver: u,
      onMouseOut: d,
      onMouseEnter: h,
      onMouseLeave: p,
      children: [
        /* @__PURE__ */ s("div", { className: "day-number", children: e.dayNumber }),
        a
      ]
    }
  );
}, xi = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onDayChange: r,
  onDayMouseOver: o,
  onDayMouseOut: i,
  onDayMouseEnter: a,
  onDayMouseLeave: c,
  className: l = "",
  style: u
}) => {
  const [d, h] = R(/* @__PURE__ */ new Date()), [p, f] = R((/* @__PURE__ */ new Date()).getDate()), [k, v] = R((/* @__PURE__ */ new Date()).getFullYear()), [M, g] = R([]), w = (/* @__PURE__ */ new Date()).getDate(), C = (/* @__PURE__ */ new Date()).getMonth(), x = (/* @__PURE__ */ new Date()).getFullYear(), N = d.getFullYear(), L = d.getMonth();
  Y(() => {
    g0(N, e).then(g);
  }, [N, e]);
  const { yearRange: y, shouldShowYearSelector: b } = X(() => {
    const H = Et(t, n), B = dn(t, n);
    return {
      yearRange: H,
      shouldShowYearSelector: B
    };
  }, [t, n]), j = X(
    () => !b && L <= 0,
    [L, b]
  ), V = X(
    () => !b && L >= 11,
    [L, b]
  ), I = () => {
    h(/* @__PURE__ */ new Date()), f(w), v(x), r == null || r(w, C, x);
  }, S = (H) => {
    h((B) => new Date(B.getFullYear(), H, 1));
  }, A = (H) => {
    isNaN(H) || (h((B) => new Date(H, B.getMonth(), 1)), H == x ? p === void 0 && f(w) : f(void 0), v(H));
  }, $ = N === x && L === C, P = f0(N, L, p, t, n), O = (H) => {
    H.isCurrentMonth && (f(H.dayNumber), r == null || r(H.dayNumber, H.month, H.year));
  }, D = (H, B) => {
    H.isCurrentMonth && (o == null || o(H.dayNumber, H.month, H.year, "date", B));
  }, z = (H, B) => {
    H.isCurrentMonth && (i == null || i(H.dayNumber, H.month, H.year, "date", B));
  }, T = (H, B) => {
    H.isCurrentMonth && (a == null || a(H.dayNumber, H.month, H.year, "date", B));
  }, E = (H, B) => {
    H.isCurrentMonth && (c == null || c(H.dayNumber, H.month, H.year, "date", B));
  };
  return /* @__PURE__ */ m("div", { className: `land-calendar-date ${l}`, style: u, children: [
    /* @__PURE__ */ s(
      ln,
      {
        language: e,
        currentYear: k,
        currentMonth: L,
        viewMode: "date",
        shouldShowYearSelector: b,
        yearRange: y,
        monthPrevDisabled: j,
        monthNextDisabled: V,
        onMonthChange: S,
        onYearChange: A
      }
    ),
    /* @__PURE__ */ s(Rc, { language: e }),
    /* @__PURE__ */ s("div", { className: "land-calendar-days", children: P.map((H, B) => /* @__PURE__ */ s(
      v0,
      {
        day: H,
        onDayClick: O,
        onDayMouseOver: D,
        onDayMouseOut: z,
        onDayMouseEnter: T,
        onDayMouseLeave: E,
        children: H.isCurrentMonth && M.map((U) => U.date).includes(`${H.month}-${H.dayNumber}`) && /* @__PURE__ */ s("div", { className: "land-calendar-bottom-dot" })
      },
      `${H.year}-${H.month}-${H.dayNumber}-${B}`
    )) }),
    !$ && /* @__PURE__ */ s(
      de,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: I
      }
    )
  ] });
}, k0 = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onWeekChange: r,
  onWeekMouseOver: o,
  onWeekMouseOut: i,
  className: a = "",
  style: c
}) => {
  const [l, u] = R(/* @__PURE__ */ new Date()), [d, h] = R(() => {
    const L = /* @__PURE__ */ new Date(), y = ft(L.getFullYear(), L.getMonth());
    let b = 0;
    for (let V = 0; V < y.length; V++)
      if (y[V].isCurrentWeek) {
        b = V;
        break;
      }
    const j = b + 1;
    return setTimeout(() => {
      const V = y[b];
      r == null || r(V.weekStart, V.weekEnd, L.getFullYear());
    }, 0), j;
  }), p = l.getFullYear(), { yearRange: f, shouldShowYearSelector: k } = X(() => {
    const L = Et(t, n), y = dn(t, n);
    return {
      yearRange: L,
      shouldShowYearSelector: y
    };
  }, [t, n]), v = () => {
    const L = new Date(l.getFullYear(), l.getMonth() - 1, 1);
    u(L);
    const y = ft(L.getFullYear(), L.getMonth());
    let b = 0;
    for (let V = 0; V < y.length; V++)
      if (y[V].isCurrentWeek) {
        b = V;
        break;
      }
    h(b + 1);
    const j = y[b];
    r == null || r(j.weekStart, j.weekEnd, L.getFullYear());
  }, M = () => {
    const L = new Date(l.getFullYear(), l.getMonth() + 1, 1);
    u(L);
    const y = ft(L.getFullYear(), L.getMonth());
    let b = 0;
    for (let V = 0; V < y.length; V++)
      if (y[V].isCurrentWeek) {
        b = V;
        break;
      }
    h(b + 1);
    const j = y[b];
    r == null || r(j.weekStart, j.weekEnd, L.getFullYear());
  }, g = (L) => {
    if (!isNaN(L)) {
      const y = new Date(L, l.getMonth(), l.getDate());
      u(y);
      const b = ft(L, y.getMonth());
      let j = 0;
      for (let I = 0; I < b.length; I++)
        if (b[I].isCurrentWeek) {
          j = I;
          break;
        }
      h(j + 1);
      const V = b[j];
      r == null || r(V.weekStart, V.weekEnd, L);
    }
  }, w = (L) => {
    const y = L + 1;
    h(y);
    const b = x[L];
    r == null || r(b.weekStart, b.weekEnd, p);
  }, C = () => {
    const L = /* @__PURE__ */ new Date();
    u(L);
    const y = ft(L.getFullYear(), L.getMonth());
    let b = 0;
    for (let V = 0; V < y.length; V++)
      if (y[V].isCurrentWeek) {
        b = V;
        break;
      }
    h(b + 1);
    const j = y[b];
    r == null || r(j.weekStart, j.weekEnd, L.getFullYear());
  }, x = ft(p, l.getMonth(), d, t, n);
  Array.from({ length: x.length }, (L, y) => ({
    key: `${y + 1}`,
    label: `${e === "zh" ? "第" : "Week "}${y + 1}${e === "zh" ? "周" : ""}`
  }));
  const N = x.some((L) => L.isCurrentWeek);
  return /* @__PURE__ */ m("div", { className: `land-calendar-week ${a}`, style: c, children: [
    /* @__PURE__ */ s(
      ln,
      {
        language: e,
        currentYear: p,
        currentMonth: l.getMonth(),
        viewMode: "week",
        shouldShowYearSelector: k,
        yearRange: f,
        onMonthChange: (L) => {
          const y = l.getMonth(), b = L - y;
          b === 1 || b === -11 ? M() : (b === -1 || b === 11) && v();
        },
        onYearChange: g
      }
    ),
    /* @__PURE__ */ s(Rc, { language: e }),
    /* @__PURE__ */ s("div", { className: "land-calendar-week-days", children: x.map((L, y) => /* @__PURE__ */ s(
      "div",
      {
        className: `land-calendar-week-row ${L.isSelected ? "selected" : ""} ${L.isCurrentWeek ? "current" : ""} ${L.isDisabled ? "disabled" : ""}`,
        onClick: () => !L.isDisabled && w(y),
        onMouseOver: (b) => {
          L.isDisabled || o == null || o(L.weekStart, L.weekEnd, p, "week", b);
        },
        onMouseOut: (b) => {
          L.isDisabled || i == null || i(L.weekStart, L.weekEnd, p, "week", b);
        },
        children: L.dates.map((b, j) => /* @__PURE__ */ s(
          "div",
          {
            className: `land-calendar-item day ${b.toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? "current" : ""} ${b.getMonth() !== l.getMonth() ? "other-month" : ""}`,
            children: /* @__PURE__ */ s("div", { className: "day-number", children: b.getDate() })
          },
          j
        ))
      },
      y
    )) }),
    !N && /* @__PURE__ */ s(
      de,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: C
      }
    )
  ] });
}, L0 = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onMonthChange: r,
  onMonthMouseOver: o,
  onMonthMouseOut: i,
  className: a = "",
  style: c
}) => {
  const l = /* @__PURE__ */ new Date(), u = l.getMonth(), d = l.getFullYear(), [h, p] = R(d), [f, k] = R(u), [v, M] = R(d), { yearRange: g, shouldShowYearSelector: w } = X(() => {
    const S = Et(t, n), A = dn(t, n);
    return {
      yearRange: S,
      shouldShowYearSelector: A
    };
  }, [t, n]), C = () => {
    const S = h - 1;
    p(S);
  }, x = () => {
    const S = h + 1;
    p(S);
  }, N = (S) => {
    isNaN(S) || p(S);
  }, L = (S) => {
    k(S), M(h), r == null || r(S, h);
  }, y = () => {
    p(d), k(u), M(d), r == null || r(u, d);
  }, b = [
    { zh: "一月", en: "January", value: 0 },
    { zh: "二月", en: "February", value: 1 },
    { zh: "三月", en: "March", value: 2 },
    { zh: "四月", en: "April", value: 3 },
    { zh: "五月", en: "May", value: 4 },
    { zh: "六月", en: "June", value: 5 },
    { zh: "七月", en: "July", value: 6 },
    { zh: "八月", en: "August", value: 7 },
    { zh: "九月", en: "September", value: 8 },
    { zh: "十月", en: "October", value: 9 },
    { zh: "十一月", en: "November", value: 10 },
    { zh: "十二月", en: "December", value: 11 }
  ], j = (S) => h === d && S === u, V = (S) => h === v && S === f, I = h === d;
  return /* @__PURE__ */ m("div", { className: `land-calendar-month ${a}`, style: c, children: [
    /* @__PURE__ */ s(
      ln,
      {
        language: e,
        currentYear: h,
        viewMode: "month",
        shouldShowYearSelector: w,
        yearRange: g,
        onMonthChange: (S) => {
          S > 11 ? x() : S < 0 && C();
        },
        onYearChange: N
      }
    ),
    /* @__PURE__ */ s("div", { className: "land-calendar-months-grid", children: b.map((S, A) => {
      const $ = h0(h, S.value, t, n);
      return /* @__PURE__ */ s(
        "div",
        {
          className: `land-calendar-month-item ${j(S.value) ? "current" : ""} ${V(S.value) ? "selected" : ""} ${$ ? "" : "disabled"}`,
          onClick: () => $ && L(S.value),
          onMouseOver: (P) => {
            $ && (o == null || o(S.value, h, "month", P));
          },
          onMouseOut: (P) => {
            $ && (i == null || i(S.value, h, "month", P));
          },
          children: /* @__PURE__ */ s("div", { className: "month-name", children: e === "zh" ? S.zh : S.en })
        },
        A
      );
    }) }),
    !I && /* @__PURE__ */ s(
      de,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: y
      }
    )
  ] });
}, w0 = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onQuarterChange: r,
  onQuarterMouseOver: o,
  onQuarterMouseOut: i,
  className: a = "",
  style: c
}) => {
  const u = (/* @__PURE__ */ new Date()).getFullYear();
  function d() {
    const S = (/* @__PURE__ */ new Date()).getMonth();
    return Math.floor(S / 3) + 1;
  }
  const [h, p] = R(u), [f, k] = R(d()), [v, M] = R(u), { yearRange: g, shouldShowYearSelector: w } = X(() => {
    const S = Et(t, n), A = dn(t, n);
    return {
      yearRange: S,
      shouldShowYearSelector: A
    };
  }, [t, n]), C = () => {
    const S = h - 1;
    p(S);
  }, x = () => {
    const S = h + 1;
    p(S);
  }, N = (S) => {
    isNaN(S) || p(S);
  }, L = (S) => {
    k(S), M(h), r == null || r(S, h);
  }, y = () => {
    const S = d();
    p(u), k(S), M(u), r == null || r(S, u);
  }, b = [
    {
      zh: "第一季度",
      en: "Q1",
      value: 1,
      months: e === "zh" ? "1-3月" : "Jan-Mar",
      description: e === "zh" ? "春季" : "Spring"
    },
    {
      zh: "第二季度",
      en: "Q2",
      value: 2,
      months: e === "zh" ? "4-6月" : "Apr-Jun",
      description: e === "zh" ? "夏季" : "Summer"
    },
    {
      zh: "第三季度",
      en: "Q3",
      value: 3,
      months: e === "zh" ? "7-9月" : "Jul-Sep",
      description: e === "zh" ? "秋季" : "Autumn"
    },
    {
      zh: "第四季度",
      en: "Q4",
      value: 4,
      months: e === "zh" ? "10-12月" : "Oct-Dec",
      description: e === "zh" ? "冬季" : "Winter"
    }
  ], j = (S) => h === u && S === d(), V = (S) => h === v && S === f, I = h === u;
  return /* @__PURE__ */ m("div", { className: `land-calendar-quarter ${a}`, style: c, children: [
    /* @__PURE__ */ s(
      ln,
      {
        language: e,
        currentYear: h,
        viewMode: "quarter",
        shouldShowYearSelector: w,
        yearRange: g,
        onMonthChange: (S) => {
          S > 11 ? x() : S < 0 && C();
        },
        onYearChange: N
      }
    ),
    /* @__PURE__ */ s("div", { className: "land-calendar-quarters-grid", children: b.map((S, A) => {
      const $ = p0(h, S.value, t, n);
      return /* @__PURE__ */ m(
        "div",
        {
          className: `land-calendar-quarter-item ${j(S.value) ? "current" : ""} ${V(S.value) ? "selected" : ""} ${$ ? "" : "disabled"}`,
          onClick: () => $ && L(S.value),
          onMouseOver: (P) => {
            $ && (o == null || o(S.value, h, "quarter", P));
          },
          onMouseOut: (P) => {
            $ && (i == null || i(S.value, h, "quarter", P));
          },
          children: [
            /* @__PURE__ */ s("div", { className: "quarter-header", children: /* @__PURE__ */ s("div", { className: "quarter-name", children: e === "zh" ? S.zh : S.en }) }),
            /* @__PURE__ */ s("div", { className: "quarter-months", children: S.months }),
            /* @__PURE__ */ s("div", { className: "quarter-description", children: S.description })
          ]
        },
        A
      );
    }) }),
    !I && /* @__PURE__ */ s(
      de,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: y
      }
    )
  ] });
}, y0 = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onYearChange: r,
  onYearMouseOver: o,
  onYearMouseOut: i,
  className: a = "",
  style: c
}) => {
  const u = (/* @__PURE__ */ new Date()).getFullYear();
  function d() {
    return Math.floor(u / 10) * 10;
  }
  const [h, p] = R(d()), [f, k] = R(u), { yearRange: v, shouldShowYearSelector: M } = X(() => {
    const S = Et(t, n), A = dn(t, n);
    return {
      yearRange: S,
      shouldShowYearSelector: A
    };
  }, [t, n, u]), g = () => {
    const S = h - 10;
    p(S);
  }, w = () => {
    const S = h + 10;
    p(S);
  }, C = (S) => {
    p(S);
  }, x = (S) => {
    k(S), r == null || r(S);
  }, N = () => {
    p(d()), k(u), r == null || r(u);
  }, L = X(() => {
    const S = [];
    for (let A = 0; A < 10; A++) {
      const $ = h + A;
      S.push($);
    }
    return S;
  }, [h]), y = X(() => {
    const S = [], [A, $] = v, P = Math.floor(A / 10) * 10, O = Math.floor($ / 10) * 10;
    for (let D = P; D <= O; D += 10)
      S.push({
        key: D.toString(),
        label: `${D}-${D + 9}`
      });
    return S;
  }, [v]), b = (S) => S === u, j = (S) => S === f, V = (S) => u0(S, t, n), I = L.includes(u);
  return /* @__PURE__ */ m("div", { className: `land-calendar-year ${a}`, style: c, children: [
    /* @__PURE__ */ s(
      ln,
      {
        language: e,
        currentYear: h,
        viewMode: "year",
        shouldShowYearSelector: M,
        yearRange: v,
        onMonthChange: (S) => {
          S > 11 ? w() : S < 0 && g();
        },
        onYearChange: C,
        customYearDisplay: `${h}-${h + 9}`,
        customYearOptions: y
      }
    ),
    /* @__PURE__ */ s("div", { className: "land-calendar-years-grid", children: L.map((S, A) => {
      const $ = V(S);
      return /* @__PURE__ */ m(
        "div",
        {
          className: `land-calendar-year-item ${b(S) ? "current" : ""} ${j(S) ? "selected" : ""} ${$ ? "" : "disabled"}`,
          onClick: () => $ && x(S),
          onMouseOver: (P) => {
            $ && (o == null || o(S, "year", P));
          },
          onMouseOut: (P) => {
            $ && (i == null || i(S, "year", P));
          },
          children: [
            /* @__PURE__ */ s("div", { className: "year-number", children: S }),
            !$ && /* @__PURE__ */ s("div", { className: "disabled-overlay", children: e === "zh" ? "超出范围" : "Out of range" })
          ]
        },
        A
      );
    }) }),
    !I && /* @__PURE__ */ s(
      de,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: N
      }
    )
  ] });
}, C0 = ({
  viewMode: e = "date",
  language: t = "zh",
  minDate: n,
  maxDate: r,
  onDayChange: o,
  onWeekChange: i,
  onMonthChange: a,
  onQuarterChange: c,
  onYearChange: l,
  onDayMouseOver: u,
  onDayMouseOut: d,
  onDayMouseEnter: h,
  onDayMouseLeave: p,
  onWeekMouseOver: f,
  onWeekMouseOut: k,
  onMonthMouseOver: v,
  onMonthMouseOut: M,
  onQuarterMouseOver: g,
  onQuarterMouseOut: w,
  onYearMouseOver: C,
  onYearMouseOut: x,
  className: N,
  style: L,
  ...y
}) => {
  const b = () => {
    switch (e) {
      case "date":
        return /* @__PURE__ */ s(
          xi,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onDayChange: o,
            onDayMouseOver: u,
            onDayMouseOut: d,
            onDayMouseEnter: h,
            onDayMouseLeave: p,
            className: N
          }
        );
      case "week":
        return /* @__PURE__ */ s(
          k0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onWeekChange: i,
            onWeekMouseOver: f,
            onWeekMouseOut: k
          }
        );
      case "month":
        return /* @__PURE__ */ s(
          L0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onMonthChange: a,
            onMonthMouseOver: v,
            onMonthMouseOut: M
          }
        );
      case "quarter":
        return /* @__PURE__ */ s(
          w0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onQuarterChange: c,
            onQuarterMouseOver: g,
            onQuarterMouseOut: w
          }
        );
      case "year":
        return /* @__PURE__ */ s(
          y0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onYearChange: l,
            onYearMouseOver: C,
            onYearMouseOut: x
          }
        );
      default:
        return /* @__PURE__ */ s(
          xi,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onDayChange: o,
            onDayMouseOver: u,
            onDayMouseOut: d,
            onDayMouseEnter: h,
            onDayMouseLeave: p
          }
        );
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: `land-calendar land-calendar-${e} ${N}`,
      style: L,
      ...y,
      children: b()
    }
  );
}, am = ({
  checked: e,
  data: t,
  animated: n,
  onChange: r,
  style: o,
  className: i = ""
}) => /* @__PURE__ */ s("div", { className: `land-checkbox ${i}`, style: o, children: t == null ? void 0 : t.map(
  (a) => /* @__PURE__ */ s(
    _o,
    {
      checked: e.includes(a.key),
      onCheckedChange: () => r == null ? void 0 : r(a),
      animated: n,
      ...a
    },
    a.key
  )
) }), cm = ({
  checked: e = !1,
  gap: t = 2,
  strokeWidth: n = 2,
  radius: r = 6,
  children: o,
  className: i,
  style: a
}) => /* @__PURE__ */ s(
  "div",
  {
    className: `land-checked-container ${e ? "checked" : ""} ${i}`,
    style: {
      "--land-checked-container-gap": `${t}px`,
      "--land-checked-container-size": `${n}px`,
      "--land-checked-container-radius": `${r}px`,
      ...a
    },
    children: o
  }
), lm = ({
  open: e = !1,
  title: t,
  hideIcon: n,
  content: r,
  className: o = "",
  style: i
}) => /* @__PURE__ */ m("details", { className: `land-collapse ${o}`, style: i, open: e, children: [
  /* @__PURE__ */ m(
    "summary",
    {
      className: "land-collapse-title",
      children: [
        !n && /* @__PURE__ */ s(Z, { name: "arrow", strokeWidth: 4, size: 16, stroke: "var(--color-gray-10)" }),
        t
      ]
    }
  ),
  /* @__PURE__ */ s("div", { className: "land-collapse-content", children: /* @__PURE__ */ s("div", { className: "land-collapse-content-details", children: r }) })
] }), dm = ({ children: e, style: t, className: n }) => {
  const [r, o] = R(132), i = document.querySelector(".land-header"), a = document.querySelector(".land-footer");
  return Y(() => {
    let c, l;
    i ? c = i.getBoundingClientRect().height : c = 0, a ? l = a.getBoundingClientRect().height : l = 0, o(c + l);
  }), /* @__PURE__ */ s("div", { className: `land-content ${n}`, style: {
    "--land-content-min-height": `${r}px`,
    ...t
  }, children: e });
}, M0 = [
  { key: "hex", label: "HEX" },
  { key: "rgb", label: "RGB" },
  { key: "hsv", label: "HSV" },
  { key: "hsl", label: "HSL" }
], x0 = "hex", bi = { h: 0, s: 100, v: 100 }, Ni = "var(--color-gray-3)", ne = {
  // RGB转HSV
  rgbToHsv: (e, t, n) => {
    e = Math.max(0, Math.min(255, Math.round(e))), t = Math.max(0, Math.min(255, Math.round(t))), n = Math.max(0, Math.min(255, Math.round(n))), e /= 255, t /= 255, n /= 255;
    const r = Math.max(e, t, n), o = Math.min(e, t, n), i = r - o;
    let a = 0, c = 0;
    const l = r;
    if (i !== 0) {
      switch (c = i / r, r) {
        case e:
          a = (t - n) / i + (t < n ? 6 : 0);
          break;
        case t:
          a = (n - e) / i + 2;
          break;
        case n:
          a = (e - t) / i + 4;
          break;
      }
      a /= 6;
    }
    return {
      h: Math.round(a * 360),
      s: Math.round(c * 100),
      v: Math.round(l * 100)
    };
  },
  // HSV转RGB
  hsvToRgb: (e, t, n) => {
    e = (e % 360 + 360) % 360, t = Math.max(0, Math.min(100, t)), n = Math.max(0, Math.min(100, n)), e /= 360, t /= 100, n /= 100;
    const r = Math.floor(e * 6), o = e * 6 - r, i = n * (1 - t), a = n * (1 - o * t), c = n * (1 - (1 - o) * t);
    let l = 0, u = 0, d = 0;
    switch (r % 6) {
      case 0:
        l = n, u = c, d = i;
        break;
      case 1:
        l = a, u = n, d = i;
        break;
      case 2:
        l = i, u = n, d = c;
        break;
      case 3:
        l = i, u = a, d = n;
        break;
      case 4:
        l = c, u = i, d = n;
        break;
      case 5:
        l = n, u = i, d = a;
        break;
    }
    return {
      r: Math.max(0, Math.min(255, Math.round(l * 255))),
      g: Math.max(0, Math.min(255, Math.round(u * 255))),
      b: Math.max(0, Math.min(255, Math.round(d * 255)))
    };
  },
  // RGB转HEX
  rgbToHex: (e, t, n) => (e = Math.max(0, Math.min(255, Math.round(e))), t = Math.max(0, Math.min(255, Math.round(t))), n = Math.max(0, Math.min(255, Math.round(n))), "#" + [e, t, n].map((r) => {
    const o = r.toString(16);
    return o.length === 1 ? "0" + o : o;
  }).join("")),
  // HEX转RGB
  hexToRgb: (e) => {
    const t = e.startsWith("#") ? e.slice(1) : e, n = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return n ? {
      r: parseInt(n[1], 16),
      g: parseInt(n[2], 16),
      b: parseInt(n[3], 16)
    } : null;
  },
  // RGB转HSL
  rgbToHsl: (e, t, n) => {
    e = Math.max(0, Math.min(255, Math.round(e))), t = Math.max(0, Math.min(255, Math.round(t))), n = Math.max(0, Math.min(255, Math.round(n))), e /= 255, t /= 255, n /= 255;
    const r = Math.max(e, t, n), o = Math.min(e, t, n), i = r - o, a = r + o;
    let c = 0, l = 0;
    const u = a / 2;
    if (i !== 0) {
      switch (l = u > 0.5 ? i / (2 - a) : i / a, r) {
        case e:
          c = (t - n) / i + (t < n ? 6 : 0);
          break;
        case t:
          c = (n - e) / i + 2;
          break;
        case n:
          c = (e - t) / i + 4;
          break;
      }
      c /= 6;
    }
    return {
      h: Math.round(c * 360),
      s: Math.round(l * 100),
      l: Math.round(u * 100)
    };
  },
  // HSL转RGB
  hslToRgb: (e, t, n) => {
    e = (e % 360 + 360) % 360, t = Math.max(0, Math.min(100, t)), n = Math.max(0, Math.min(100, n)), e /= 360, t /= 100, n /= 100;
    const r = (c, l, u) => (u < 0 && (u += 1), u > 1 && (u -= 1), u < 1 / 6 ? c + (l - c) * 6 * u : u < 1 / 2 ? l : u < 2 / 3 ? c + (l - c) * (2 / 3 - u) * 6 : c);
    let o, i, a;
    if (t === 0)
      o = i = a = n;
    else {
      const c = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - c;
      o = r(l, c, e + 1 / 3), i = r(l, c, e), a = r(l, c, e - 1 / 3);
    }
    return {
      r: Math.max(0, Math.min(255, Math.round(o * 255))),
      g: Math.max(0, Math.min(255, Math.round(i * 255))),
      b: Math.max(0, Math.min(255, Math.round(a * 255)))
    };
  }
}, b0 = ({ hue: e, onPanelChange: t }) => {
  const n = q(null), [r, o] = R(!1), [i, a] = R({ x: 0, y: 0 }), c = X(() => {
    const f = ne.hsvToRgb(e, 100, 100);
    return {
      background: `linear-gradient(to right, #fff 0%, ${ne.rgbToHex(f.r, f.g, f.b)} 100%),
                   linear-gradient(to top, #000 0%, transparent 100%)`
    };
  }, [e]), l = F(() => {
    o(!1);
  }, []), u = F(
    (f) => {
      if (!r || !n.current) return;
      const { left: k, top: v } = n.current.getBoundingClientRect(), M = f.clientX - k, g = f.clientY - v, w = n.current.clientWidth, C = n.current.clientHeight, x = Math.max(0, Math.min(w, M)), N = Math.max(0, Math.min(C, g));
      a({ x, y: N });
      const L = x / w, y = 1 - N / C;
      t(L, y);
    },
    [r, t]
  );
  Y(() => {
    if (r)
      return document.addEventListener("mousemove", u), document.addEventListener("mouseup", l), () => {
        document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", l);
      };
  }, [r, u, l]);
  const d = F(
    (f) => {
      var b, j, V;
      f.preventDefault(), o(!0);
      const { left: k, top: v } = ((b = n.current) == null ? void 0 : b.getBoundingClientRect()) || {
        left: 0,
        top: 0
      }, M = f.clientX - k, g = f.clientY - v, w = ((j = n.current) == null ? void 0 : j.clientWidth) || 0, C = ((V = n.current) == null ? void 0 : V.clientHeight) || 0, x = Math.max(0, Math.min(w, M)), N = Math.max(0, Math.min(C, g));
      a({ x, y: N });
      const L = x / w, y = 1 - N / C;
      t(L, y);
    },
    [t]
  ), h = F(
    (f) => {
      var b, j, V;
      if (!r) return;
      f.preventDefault();
      const { left: k, top: v } = ((b = n.current) == null ? void 0 : b.getBoundingClientRect()) || {
        left: 0,
        top: 0
      }, M = f.clientX - k, g = f.clientY - v, w = ((j = n.current) == null ? void 0 : j.clientWidth) || 0, C = ((V = n.current) == null ? void 0 : V.clientHeight) || 0, x = Math.max(0, Math.min(w, M)), N = Math.max(0, Math.min(C, g));
      a({ x, y: N });
      const L = x / w, y = 1 - N / C;
      t(L, y);
    },
    [r, t]
  ), p = F(() => {
    o(!1);
  }, []);
  return /* @__PURE__ */ s(
    "div",
    {
      ref: n,
      className: "land-color-picker-panel-move-area",
      style: c,
      onMouseDown: d,
      onMouseMove: h,
      onMouseUp: p,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: "land-color-picker-pointer",
          style: {
            left: `${i.x}px`,
            top: `${i.y}px`
          }
        }
      )
    }
  );
}, N0 = ({ hue: e, onHueChange: t }) => {
  const n = q(null), r = F(
    (i) => {
      if (!n.current) return;
      const a = n.current.getBoundingClientRect(), c = Math.max(0, Math.min(1, (i.clientX - a.left) / a.width));
      t(c * 360);
    },
    [t]
  ), o = F(
    (i) => {
      if (!n.current) return;
      r(i);
      const a = (u) => {
        if (!n.current) {
          l();
          return;
        }
        const d = n.current.getBoundingClientRect(), h = Math.max(
          0,
          Math.min(1, (u.clientX - d.left) / d.width)
        );
        t(h * 360);
      }, c = () => {
        l();
      }, l = () => {
        document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", c);
      };
      document.addEventListener("mousemove", a), document.addEventListener("mouseup", c);
    },
    [t, r]
  );
  return /* @__PURE__ */ m(
    "div",
    {
      ref: n,
      className: "land-color-picker-slider land-color-picker-hue-slider",
      onClick: r,
      onMouseDown: o,
      children: [
        /* @__PURE__ */ s("div", { className: "land-color-picker-slider-track" }),
        /* @__PURE__ */ s(
          "div",
          {
            className: "land-color-picker-slider-thumb",
            style: { left: `${e / 360 * 100}%` }
          }
        )
      ]
    }
  );
}, S0 = ({
  hue: e,
  alpha: t,
  onAlphaChange: n
}) => {
  const r = q(null), o = X(() => {
    const c = ne.hsvToRgb(e, 100, 100);
    return {
      background: `linear-gradient(to right, transparent 0%, ${ne.rgbToHex(c.r, c.g, c.b)} 100%)`
    };
  }, [e]), i = F(
    (c) => {
      if (!r.current) return;
      const l = r.current.getBoundingClientRect(), u = Math.max(0, Math.min(1, (c.clientX - l.left) / l.width));
      n(u);
    },
    [n]
  ), a = F(
    (c) => {
      if (!r.current) return;
      i(c);
      const l = (h) => {
        if (!r.current) {
          d();
          return;
        }
        const p = r.current.getBoundingClientRect(), f = Math.max(
          0,
          Math.min(1, (h.clientX - p.left) / p.width)
        );
        n(f);
      }, u = () => {
        d();
      }, d = () => {
        document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", u);
      };
      document.addEventListener("mousemove", l), document.addEventListener("mouseup", u);
    },
    [n, i]
  );
  return /* @__PURE__ */ m(
    "div",
    {
      ref: r,
      className: "land-color-picker-slider land-color-picker-alpha-slider",
      onClick: i,
      onMouseDown: a,
      children: [
        /* @__PURE__ */ s("div", { className: "land-color-picker-slider-track" }),
        /* @__PURE__ */ s(
          "div",
          {
            className: "land-color-picker-slider-track",
            style: o
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            className: "land-color-picker-slider-thumb",
            style: { left: `${t * 100}%` }
          }
        )
      ]
    }
  );
}, Gn = ({
  type: e = "border",
  value: t,
  inputType: n = "text",
  placeholder: r = "请输入",
  beforeContent: o,
  afterContent: i,
  prefix: a,
  suffix: c,
  width: l,
  maxLength: u,
  disabled: d,
  textAlign: h = "left",
  onChange: p,
  onEnter: f,
  onFocus: k,
  onBlur: v,
  onClear: M,
  className: g = "",
  style: w,
  ...C
}) => {
  const x = q(null), N = q(null), L = F(() => {
    !x.current || !N.current || (x.current.scrollLeft = N.current.scrollLeft);
  }, []), y = F((b) => {
    x.current && (x.current.scrollLeft = 0), v == null || v(b);
  }, []);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-input ${d ? "disabled" : ""} ${M ? "clear" : ""} ${e} text-${h} ${g}`,
      style: {
        width: typeof l == "number" ? `${l}px` : l,
        ...w
      },
      children: [
        o && /* @__PURE__ */ s("div", { className: "input-beforeContent", children: o }),
        /* @__PURE__ */ m("div", { className: "land-input-content", children: [
          a && /* @__PURE__ */ m("div", { className: "input-prefix-content", children: [
            /* @__PURE__ */ s("p", { className: "input-prefix", children: a }),
            /* @__PURE__ */ s("div", { className: "prefix-value", children: t || r })
          ] }),
          a && /* @__PURE__ */ s("p", { className: "input-prefix-empty", children: a }),
          /* @__PURE__ */ s(
            "input",
            {
              ref: N,
              placeholder: r,
              type: n,
              value: t,
              max: u,
              onKeyDown: (b) => {
                b.code === "Enter" && (f == null || f(t, b));
              },
              onClick: (b) => b.stopPropagation(),
              onFocus: k,
              onBlur: y,
              onChange: (b) => {
                L == null || L(), p == null || p(b.target.value, b);
              },
              onScroll: L,
              ...C
            }
          ),
          c && t && /* @__PURE__ */ m("div", { className: "input-suffix-content", children: [
            a && /* @__PURE__ */ s("p", { className: "input-prefix-empty", children: a }),
            /* @__PURE__ */ s("div", { className: "suffix-value", children: t }),
            /* @__PURE__ */ s("p", { className: "input-suffix", children: c })
          ] })
        ] }),
        c && t && /* @__PURE__ */ s("p", { className: "input-suffix-empty", children: c }),
        i && /* @__PURE__ */ s("div", { children: i }),
        M && /* @__PURE__ */ s(
          "div",
          {
            className: `land-input-clear-icon ${t ? "" : "hide"}`,
            onClick: M,
            children: /* @__PURE__ */ s(Z, { name: "error-fill" })
          }
        )
      ]
    }
  );
}, Re = ({
  direction: e = "row",
  lineLength: t = "100%",
  gap: n = 0,
  type: r = "solid",
  content: o,
  align: i = "center",
  style: a,
  className: c = "",
  dashedGap: l = 5,
  dashedLength: u = 10
}) => /* @__PURE__ */ m(
  "div",
  {
    className: `land-divider ${e} ${r} ${o ? "width-content" : ""} ${i} ${c}`,
    style: {
      width: e === "row" ? `${t}` : "1px",
      height: e === "column" ? `${t}` : "1px",
      margin: e === "row" ? `${n}px 0` : `0 ${n}px`,
      "--land-divider-dashed-gap": `${l}px`,
      "--land-divider-dashed-length": `${u}px`,
      ...a
    },
    children: [
      /* @__PURE__ */ s("div", { className: "land-divider-line" }),
      o && /* @__PURE__ */ m(ue, { children: [
        /* @__PURE__ */ s("div", { className: "land-divider-content", children: o }),
        /* @__PURE__ */ s("div", { className: "land-divider-line land-divider-line-right" })
      ] })
    ]
  }
), Ie = ({
  value: e = 0,
  type: t = "border",
  step: n = 1,
  min: r = 0,
  max: o = 100,
  prefix: i,
  suffix: a,
  disabled: c,
  onChange: l,
  width: u,
  hideArrowButton: d = !1,
  textAlign: h,
  enableWheelScroll: p = !1,
  style: f,
  ...k
}) => {
  const [v, M] = R(e);
  Y(() => e !== void 0 && M(e), [e]);
  const g = (x, N) => {
    c || x < r - n / 2 || x > o + n / 2 || (M(x), l == null || l(x, N));
  }, w = F(
    (x, N) => {
      const L = Number(x);
      L > o || L < r || typeof L == "number" && L % n || (M(L), l == null || l(L, N));
    },
    [o, r, n, l]
  ), C = F(
    (x) => {
      if (!p || c) return;
      x.preventDefault(), x.stopPropagation();
      const N = x.deltaY > 0 ? -n : n, L = v + N;
      L >= r && L <= o && g(L, x);
    },
    [p, c, v, n, r, o]
  );
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-number-input ${d ? "hide-arrow-button" : ""}`,
      "data-wheel-enabled": p,
      style: {
        width: typeof u == "number" ? `${u}px` : u,
        ...f
      },
      onClick: (x) => x.stopPropagation(),
      onWheel: C,
      children: [
        /* @__PURE__ */ s(
          me,
          {
            targetBody: !0,
            className: "land-number-input-wheel-popover",
            content: p ? "滚动鼠标滚轮调整数值" : "",
            placement: "top",
            theme: "dark",
            children: /* @__PURE__ */ s(
              Gn,
              {
                className: "land-number-input-input",
                type: t,
                inputType: "number",
                value: String(v),
                disabled: c,
                prefix: i,
                suffix: a,
                onChange: (x, N) => w(x, N),
                style: {
                  paddingRight: d ? "0" : "40px"
                },
                textAlign: h,
                placeholder: k.placeholder,
                ...k
              }
            )
          }
        ),
        !d && /* @__PURE__ */ m(
          "div",
          {
            className: "land-numberInput-arrow",
            style: {
              borderLeft: t === "border" ? "1px solid var(--color-border-primary)" : "",
              background: "inherit"
            },
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: `land-numberInput-add ${v === o || c ? "disabled" : ""}`,
                  onClick: (x) => g == null ? void 0 : g(v + n, x),
                  children: /* @__PURE__ */ s(Z, { name: "arrow", size: 16 })
                }
              ),
              t === "border" && /* @__PURE__ */ s(Re, { gap: 0, lineLength: "32px" }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `land-numberInput-dec ${v === r || c ? "disabled" : ""}`,
                  onClick: (x) => g == null ? void 0 : g(v - n, x),
                  children: /* @__PURE__ */ s(Z, { name: "arrow", size: 16 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, um = ({
  color: e = Ni,
  onChange: t,
  style: n,
  className: r = "",
  disabled: o
}) => {
  const [i, a] = R(x0), [c, l] = R(bi.h), [u, d] = R(1), [h, p] = R(""), [f, k] = R({ r: 0, g: 0, b: 0 }), [v, M] = R(bi), [g, w] = R({ h: 0, s: 0, l: 0 }), [C, x] = R({ x: 0, y: 0 }), N = q(!1), L = q(""), y = X(() => {
    switch (i) {
      case "hex":
        return h || "#000000";
      case "rgb":
        return `rgb(${f.r}, ${f.g}, ${f.b})`;
      case "hsv":
        return `hsv(${v.h}, ${v.s}%, ${v.v}%)`;
      case "hsl":
        return `hsl(${g.h}, ${g.s}%, ${g.l}%)`;
      default:
        return "#000000";
    }
  }, [i, h, f, v, g]), b = X(() => {
    switch (i) {
      case "hex":
        return h || "#000000";
      case "rgb":
        return ne.rgbToHex(
          f.r,
          f.g,
          f.b
        );
      case "hsv":
        const T = ne.hsvToRgb(
          v.h,
          v.s,
          v.v
        );
        return ne.rgbToHex(T.r, T.g, T.b);
      case "hsl":
        const E = ne.hslToRgb(
          g.h,
          g.s,
          g.l
        );
        return ne.rgbToHex(E.r, E.g, E.b);
      default:
        return "#000000";
    }
  }, [i, h, f, v, g]), j = X(() => {
    const T = ne.hexToRgb(b);
    return T ? `rgba(${T.r}, ${T.g}, ${T.b}, ${u})` : `rgba(0, 0, 0, ${u})`;
  }, [b, u]), V = X(
    () => ({
      background: j,
      ...n
    }),
    [j, n]
  );
  Y(() => {
    if (e && e !== Ni && !N.current) {
      const T = ne.hexToRgb(e);
      if (T) {
        const E = ne.rgbToHsv(T.r, T.g, T.b), H = ne.rgbToHsl(T.r, T.g, T.b);
        p(e), k(T), M(E), w(H), l(E.h), N.current = !0;
      }
    } else N.current || (l(0), M({ h: 0, s: 0, v: 50 }), w({ h: 0, s: 0, l: 50 }), k({ r: 128, g: 128, b: 128 }), p("#808080"), N.current = !0);
  }, [e]);
  const I = F(() => {
    const T = `${y}-${b}-${j}`;
    T !== L.current && (L.current = T, t == null || t(y, b, j));
  }, [t, y, b, j]);
  Y(() => {
    N.current && I();
  }, [y, b, j, I]);
  const S = F(
    (T, E) => {
      x({ x: T, y: E });
      const H = T * 100, B = E * 100;
      M({ h: c, s: H, v: B });
      const K = ne.hsvToRgb(c, H, B), _ = ne.rgbToHsl(K.r, K.g, K.b), Q = ne.rgbToHex(K.r, K.g, K.b);
      k(K), w(_), p(Q);
    },
    [c]
  ), A = (T) => {
    l(T);
    const E = { ...v, h: T };
    M(E);
    const H = ne.hsvToRgb(T, E.s, E.v), B = ne.rgbToHsl(H.r, H.g, H.b), U = ne.rgbToHex(H.r, H.g, H.b);
    k(H), w(B), p(U);
  }, $ = (T) => {
    d(T);
  }, P = (T) => {
    let E = T.replace("#", "").toUpperCase();
    E.length > 6 && (E = E.slice(0, 6)), E = E.replace(/[^0-9A-F]/g, "");
    const H = E.length > 0 ? `#${E}` : "#";
    if (p(H), E.length === 6) {
      const B = ne.hexToRgb(H);
      if (B) {
        const U = ne.rgbToHsv(B.r, B.g, B.b), K = ne.rgbToHsl(B.r, B.g, B.b);
        k(B), M(U), w(K), l(U.h);
      }
    }
  }, O = (T, E) => {
    const H = Math.max(0, Math.min(255, Math.round(E))), B = { ...f, [T]: H };
    k(B);
    const U = ne.rgbToHsv(B.r, B.g, B.b), K = ne.rgbToHsl(B.r, B.g, B.b), _ = ne.rgbToHex(B.r, B.g, B.b);
    M(U), w(K), p(_), l(U.h);
  }, D = (T, E) => {
    let H = E;
    T === "h" ? H = (E % 360 + 360) % 360 : H = Math.max(0, Math.min(100, Math.round(E)));
    const B = { ...v, [T]: H };
    M(B);
    const U = ne.hsvToRgb(B.h, B.s, B.v), K = ne.rgbToHsl(U.r, U.g, U.b), _ = ne.rgbToHex(U.r, U.g, U.b);
    k(U), w(K), p(_), l(B.h);
  }, z = (T, E) => {
    let H = E;
    T === "h" ? H = (E % 360 + 360) % 360 : H = Math.max(0, Math.min(100, Math.round(E)));
    const B = { ...g, [T]: H };
    w(B);
    const U = ne.hslToRgb(B.h, B.s, B.l), K = ne.rgbToHsv(U.r, U.g, U.b), _ = ne.rgbToHex(U.r, U.g, U.b);
    k(U), M(K), p(_), l(B.h);
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: `land-color-picker ${o ? "disabled" : ""} ${r}`,
      children: /* @__PURE__ */ s(
        cn,
        {
          trigger: "click",
          disabled: o,
          dropContent: /* @__PURE__ */ m(
            "div",
            {
              className: "land-color-picker-drop-panel",
              onClick: (T) => T.stopPropagation(),
              children: [
                /* @__PURE__ */ s(b0, { hue: c, onPanelChange: S }),
                /* @__PURE__ */ m("div", { className: "land-color-picker-panel-move-sliders", children: [
                  /* @__PURE__ */ s(
                    N0,
                    {
                      hue: c,
                      onHueChange: (T) => A(T)
                    }
                  ),
                  /* @__PURE__ */ s(
                    S0,
                    {
                      hue: c,
                      alpha: u,
                      onAlphaChange: $
                    }
                  )
                ] }),
                /* @__PURE__ */ m("div", { className: "land-color-picker-panel-color-mode", children: [
                  /* @__PURE__ */ s(
                    Ic,
                    {
                      type: "transparent",
                      data: M0,
                      onChange: (T) => a(T.key),
                      selected: i,
                      placeholder: "选择模式"
                    }
                  ),
                  /* @__PURE__ */ m("div", { className: "land-color-picker-panel-color-input", children: [
                    /* @__PURE__ */ m("div", { className: "land-color-picker-panel-color-input-numbers", children: [
                      i === "hex" && /* @__PURE__ */ s(
                        Gn,
                        {
                          prefix: "#",
                          value: h.replace("#", ""),
                          onChange: (T) => P(T)
                        }
                      ),
                      i === "rgb" && /* @__PURE__ */ m(ue, { children: [
                        /* @__PURE__ */ s(
                          Ie,
                          {
                            width: 48,
                            placeholder: "R",
                            value: f.r,
                            onChange: (T) => O("r", T),
                            min: 0,
                            max: 255,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s(
                          Ie,
                          {
                            width: 48,
                            placeholder: "G",
                            value: f.g,
                            onChange: (T) => O("g", T),
                            min: 0,
                            max: 255,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s(
                          Ie,
                          {
                            width: 48,
                            placeholder: "B",
                            value: f.b,
                            onChange: (T) => O("b", T),
                            min: 0,
                            max: 255,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        )
                      ] }),
                      i === "hsv" && /* @__PURE__ */ m(ue, { children: [
                        /* @__PURE__ */ s(
                          Ie,
                          {
                            width: 48,
                            placeholder: "H",
                            value: v.h,
                            onChange: (T) => D("h", T),
                            min: 0,
                            max: 360,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s(
                          Ie,
                          {
                            width: 48,
                            placeholder: "S",
                            value: v.s,
                            onChange: (T) => D("s", T),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s(
                          Ie,
                          {
                            width: 48,
                            placeholder: "V",
                            value: v.v,
                            onChange: (T) => D("v", T),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        )
                      ] }),
                      i === "hsl" && /* @__PURE__ */ m(ue, { children: [
                        /* @__PURE__ */ s(
                          Ie,
                          {
                            width: 48,
                            placeholder: "H",
                            value: g.h,
                            onChange: (T) => z("h", T),
                            min: 0,
                            max: 360,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s(
                          Ie,
                          {
                            width: 48,
                            placeholder: "S",
                            value: g.s,
                            onChange: (T) => z("s", T),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s(
                          Ie,
                          {
                            width: 48,
                            placeholder: "L",
                            value: g.l,
                            onChange: (T) => z("l", T),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ s(
                      Ie,
                      {
                        width: 56,
                        value: Math.round(u * 100),
                        onChange: (T) => {
                          const E = Math.max(
                            0,
                            Math.min(100, Math.round(T))
                          );
                          d(E / 100);
                        },
                        min: 0,
                        max: 100,
                        step: 1,
                        suffix: "%",
                        hideArrowButton: !0,
                        style: { flexShrink: 0 }
                      }
                    )
                  ] })
                ] })
              ]
            }
          ),
          children: /* @__PURE__ */ s(
            "div",
            {
              className: `land-picker-color-display ${r}`,
              style: V
            }
          )
        }
      )
    }
  );
}, hm = ({
  disabled: e,
  onChange: t,
  style: n,
  className: r = "",
  dropdownProps: o,
  inputProps: i,
  calendarProps: a,
  pickerType: c = "date",
  value: l,
  placeholder: u,
  showConfirmButton: d,
  allowInput: h = !1
}) => {
  const [p, f] = R(!1), [k, v] = R(l ? new Date(l) : null), [M, g] = R(""), [w, C] = R(""), [x, N] = R(!1);
  X(() => {
    e && p && f(!1);
  }, [e, p]);
  const L = F((E, H) => {
    if (!E) return "";
    const B = E.getFullYear(), U = E.getMonth() + 1, K = E.getDate();
    switch (H) {
      case "year":
        return `${B}年`;
      case "month":
        return `${B}年${U}月`;
      case "quarter":
        const _ = Math.ceil(U / 3);
        return `${B}年第${_}季度`;
      case "week":
        const Q = new Date(B, 0, 1), oe = Math.floor((E.getTime() - Q.getTime()) / (24 * 60 * 60 * 1e3)), te = Math.ceil((oe + Q.getDay() + 1) / 7);
        return `${B}年第${te}周`;
      case "date":
      default:
        return `${B}-${U.toString().padStart(2, "0")}-${K.toString().padStart(2, "0")}`;
    }
  }, []), y = F((E) => {
    if (!E.trim()) return null;
    const H = /* @__PURE__ */ new Date(), B = H.getFullYear(), U = H.getMonth() + 1;
    H.getDate();
    const K = [
      // YYYY-MM-DD
      {
        pattern: /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
        extract: (_) => ({
          year: parseInt(_[1]),
          month: parseInt(_[2]),
          day: parseInt(_[3])
        })
      },
      // YYYY/MM/DD
      {
        pattern: /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/,
        extract: (_) => ({
          year: parseInt(_[1]),
          month: parseInt(_[2]),
          day: parseInt(_[3])
        })
      },
      // YYYY年MM月DD日
      {
        pattern: /^(\d{4})年(\d{1,2})月(\d{1,2})日$/,
        extract: (_) => ({
          year: parseInt(_[1]),
          month: parseInt(_[2]),
          day: parseInt(_[3])
        })
      },
      // YYYY年MM月
      {
        pattern: /^(\d{4})年(\d{1,2})月$/,
        extract: (_) => ({
          year: parseInt(_[1]),
          month: parseInt(_[2]),
          day: 1
        })
      },
      // YYYY年
      {
        pattern: /^(\d{4})年$/,
        extract: (_) => ({
          year: parseInt(_[1]),
          month: 1,
          day: 1
        })
      },
      // MM月DD日
      {
        pattern: /^(\d{1,2})月(\d{1,2})日$/,
        extract: (_) => ({
          year: B,
          month: parseInt(_[1]),
          day: parseInt(_[2])
        })
      },
      // DD日
      {
        pattern: /^(\d{1,2})日$/,
        extract: (_) => ({
          year: B,
          month: U,
          day: parseInt(_[1])
        })
      }
    ];
    for (const { pattern: _, extract: Q } of K) {
      const oe = E.match(_);
      if (oe)
        try {
          const { year: te, month: ie, day: ve } = Q(oe), ge = new Date(te, ie - 1, ve);
          if (ge.getFullYear() === te && ge.getMonth() === ie - 1 && ge.getDate() === ve)
            return ge;
        } catch {
          continue;
        }
    }
    return null;
  }, []);
  X(() => {
    g(l ? L(new Date(l), c) : "");
  }, [l, c, L]);
  const b = F((...E) => {
    if (e) return;
    let H = null;
    switch (c) {
      case "year":
        const B = E[0];
        H = new Date(B, 0, 1);
        break;
      case "month":
        const [U, K] = E;
        H = new Date(K, U - 1, 1);
        break;
      case "quarter":
        const [_, Q] = E, oe = (_ - 1) * 3;
        H = new Date(Q, oe, 1);
        break;
      case "week":
        H = E[0];
        break;
      case "date":
      default:
        const [te, ie, ve] = E;
        H = new Date(ve, ie - 1, te);
        break;
    }
    v(H), d || (g(L(H, c)), t == null || t(H), f(!1));
  }, [c, d, L, t, e]), j = F(() => {
    e || (k && (g(L(k, c)), t == null || t(k)), f(!1));
  }, [k, c, L, t, e]), V = F(() => {
    e || (v(l ? new Date(l) : null), f(!1));
  }, [l, e]), I = F((E) => {
    if (e) {
      f(!1);
      return;
    }
    !E && d && v(l ? new Date(l) : null), f(E);
  }, [d, l, e]), S = F(() => {
    e || (v(null), g(""), C(""), t == null || t(null));
  }, [t, e]), A = F((E, H) => {
    e || C(E);
  }, [e]), $ = F(() => {
    e || (h && c === "date" ? (N(!0), C(M)) : f(!0));
  }, [e, h, c, M]), P = F(() => {
    if (!e && h && c === "date") {
      if (N(!1), w.trim()) {
        const E = y(w);
        E ? (v(E), g(L(E, c)), t == null || t(E)) : g(L(k, c));
      } else
        v(null), g(""), t == null || t(null);
      C("");
    }
  }, [h, c, w, y, k, L, t, e]), O = F((E) => {
    if (!e && h && c === "date" && E.trim()) {
      const H = y(E);
      H && (v(H), g(L(H, c)), t == null || t(H), N(!1), C(""));
    }
  }, [h, c, y, L, t, e]), D = X(() => {
    if (u) return u;
    switch (c) {
      case "year":
        return "请选择年份";
      case "month":
        return "请选择月份";
      case "week":
        return "请选择周";
      case "quarter":
        return "请选择季度";
      case "date":
      default:
        return "请选择日期";
    }
  }, [c, u]), z = X(() => {
    switch (c) {
      case "year":
        return "year";
      case "month":
        return "month";
      case "quarter":
        return "quarter";
      case "week":
        return "week";
      case "date":
      default:
        return "date";
    }
  }, [c]), T = X(() => {
    switch (c) {
      case "year":
        return { onYearChange: b };
      case "month":
        return { onMonthChange: b };
      case "quarter":
        return { onQuarterChange: b };
      case "week":
        return { onWeekChange: b };
      case "date":
      default:
        return { onDayChange: b };
    }
  }, [c, b]);
  return /* @__PURE__ */ s(
    "div",
    {
      className: `land-date-picker ${r}`,
      style: n,
      children: /* @__PURE__ */ s(
        cn,
        {
          open: p,
          disabled: e,
          trigger: "click",
          onOpen: I,
          dropContent: /* @__PURE__ */ m("div", { className: "land-date-picker-dropdown-content", children: [
            /* @__PURE__ */ s(
              C0,
              {
                viewMode: z,
                ...T,
                ...a
              }
            ),
            d && /* @__PURE__ */ m("div", { className: "land-date-picker-dropdown-actions", children: [
              /* @__PURE__ */ s(
                de,
                {
                  text: "取消",
                  type: "outline",
                  className: "land-date-picker-dropdown-cancel-button",
                  onClick: V
                }
              ),
              /* @__PURE__ */ s(
                de,
                {
                  text: "确定",
                  type: "background",
                  className: "land-date-picker-dropdown-confirm-button",
                  onClick: j
                }
              )
            ] })
          ] }),
          ...o,
          children: /* @__PURE__ */ m("div", { className: `land-date-picker-input ${M ? "" : "empty"} ${x ? "input-mode" : ""} `, children: [
            /* @__PURE__ */ s(
              Gn,
              {
                type: "transparent",
                className: "land-date-picker-input-value",
                placeholder: D,
                value: x ? w : M,
                onFocus: $,
                onBlur: P,
                onChange: h && c === "date" && !e ? A : void 0,
                onClear: S,
                onEnter: O,
                ...i
              }
            ),
            /* @__PURE__ */ s(Z, { name: "calendar", className: "land-date-picker-icon" })
          ] })
        }
      )
    }
  );
}, pm = ({
  show: e,
  mask: t,
  title: n,
  headerLeftComponent: r,
  headerRightComponent: o,
  headerComponent: i,
  useHeaderDivider: a,
  footerLeftComponent: c,
  footerRightComponent: l,
  footerComponent: u,
  useFooterDivider: d,
  cancelLabel: h = "取消",
  submitLabel: p = "确定",
  size: f = "medium",
  onClose: k,
  onSubmit: v,
  onCancel: M,
  children: g,
  wrapStyle: w,
  wrapClassName: C,
  contentStyle: x,
  contentClassName: N,
  bodyStyle: L,
  bodyClassName: y,
  maskStyle: b
}) => {
  const j = X(() => {
    let V = "320px";
    switch (f) {
      case "small":
        V = "320px";
        break;
      case "medium":
        V = "600px";
        break;
      case "large":
        V = "1000px";
        break;
    }
    return V;
  }, [f]);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-dialog ${e ? "show" : ""} ${C}`,
      style: {
        "--land-dialog-content-width": j,
        ...w
      },
      children: [
        t && e && /* @__PURE__ */ s(
          we.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            className: "land-dialog-mask",
            style: b
          }
        ),
        e && /* @__PURE__ */ m(
          we.div,
          {
            initial: {
              opacity: 0,
              scale: 0.9
            },
            animate: {
              opacity: 1,
              scale: 1
            },
            transition: {
              duration: 0.5,
              type: "spring"
            },
            className: `land-dialog-content ${N}`,
            style: {
              ...x,
              width: j
            },
            children: [
              i || (n || k || r || o ? /* @__PURE__ */ m("div", { className: "land-dialog-header", children: [
                r || /* @__PURE__ */ s("div", { className: "land-dialog-header-title", children: n }),
                o || k && /* @__PURE__ */ s("div", { className: "land-dialog-header-close", children: /* @__PURE__ */ s(Z, { name: "close", onClick: k, size: 24 }) })
              ] }) : null),
              a && /* @__PURE__ */ s(Re, {}),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `land-dialog-body ${y}`,
                  style: L,
                  children: g
                }
              ),
              d && /* @__PURE__ */ s(Re, {}),
              u || /* @__PURE__ */ m("div", { className: "land-dialog-footer", children: [
                l || (h || p || M || v) && /* @__PURE__ */ m("div", { className: "land-dialog-footer-btn", children: [
                  M && /* @__PURE__ */ s(de, { type: "fill", status: "default", onClick: M, children: h }),
                  v && /* @__PURE__ */ s(
                    de,
                    {
                      type: "background",
                      status: "primary",
                      onClick: v,
                      children: p
                    }
                  )
                ] }),
                c
              ] })
            ]
          }
        )
      ]
    }
  );
}, fm = ({
  show: e,
  placement: t = "right",
  mask: n,
  title: r,
  headerLeftComponent: o,
  headerRightComponent: i,
  headerComponent: a,
  useHeaderDivider: c = !0,
  footerLeftComponent: l,
  footerRightComponent: u,
  footerComponent: d,
  useFooterDivider: h = !0,
  cancelLabel: p = "取消",
  submitLabel: f = "确定",
  cancelDisabled: k,
  submitDisabled: v,
  cancelButtonProps: M,
  submitButtonProps: g,
  minWidth: w,
  maxWidth: C,
  size: x = "auto",
  onClose: N,
  onSubmit: L,
  onCancel: y,
  children: b,
  wrapStyle: j,
  wrapClassName: V = "",
  contentStyle: I,
  contentClassName: S = "",
  bodyStyle: A,
  bodyClassName: $ = "",
  maskStyle: P
}) => {
  const O = X(() => {
    let T = "320px";
    if (t === "bottom")
      T = "100%";
    else
      switch (x) {
        case "small":
          T = "32%";
          break;
        case "medium":
          T = "60%";
          break;
        case "large":
          T = "80%";
          break;
        case "auto":
          T = "fit-content";
          break;
      }
    return T;
  }, [x, t]), D = X(() => {
    let T = "100%";
    if (t === "bottom")
      switch (x) {
        case "small":
          T = "30%";
          break;
        case "medium":
          T = "60%";
          break;
        case "large":
          T = "90%";
          break;
        case "auto":
          T = "fit-content";
          break;
      }
    return T;
  }, [t]), z = X(() => N && (r || a || o), [N, a, o]);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-drawer ${e ? "show" : ""} ${t} ${V}`,
      style: j,
      children: [
        n && e && /* @__PURE__ */ s(
          we.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            className: "land-drawer-mask",
            style: P
          }
        ),
        e && /* @__PURE__ */ m(
          we.div,
          {
            initial: {
              opacity: 0,
              x: t === "right" ? "20%" : "0%",
              y: t === "bottom" ? "20%" : "0%"
            },
            animate: {
              opacity: 1,
              x: 0,
              y: 0
            },
            transition: {
              duration: 0.6,
              type: "spring"
            },
            className: `land-drawer-content ${S}`,
            style: {
              width: O,
              height: D,
              minWidth: w,
              maxWidth: C,
              ...I
            },
            children: [
              /* @__PURE__ */ m("div", { className: "land-drawer-header-wrapper", children: [
                N && /* @__PURE__ */ s("div", { className: "land-drawer-header-close", children: /* @__PURE__ */ s(Z, { name: "close", onClick: N, strokeWidth: 3 }) }),
                z && /* @__PURE__ */ s(Re, { direction: "column", lineLength: "36px", gap: 12 }),
                a || (r || N || o || i ? /* @__PURE__ */ m("div", { className: "land-drawer-header", children: [
                  o || /* @__PURE__ */ s("div", { className: "land-drawer-header-title", children: r }),
                  i && /* @__PURE__ */ s("div", { className: "land-drawer-header-right", children: i })
                ] }) : null)
              ] }),
              c && (a || N || o || i) && /* @__PURE__ */ s(Re, {}),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `land-drawer-body ${$}`,
                  style: A,
                  children: b
                }
              ),
              h && (d || L || y || l || u) && /* @__PURE__ */ s(Re, {}),
              (d || L || y || l || u) && /* @__PURE__ */ m("div", { className: "land-drawer-footer", children: [
                u || (p || f || y || L) && /* @__PURE__ */ m("div", { className: "land-drawer-footer-btn", children: [
                  y && /* @__PURE__ */ s(
                    de,
                    {
                      type: "fill",
                      disabled: k,
                      status: "default",
                      onClick: y,
                      ...M,
                      children: p
                    }
                  ),
                  L && /* @__PURE__ */ s(
                    de,
                    {
                      type: "background",
                      disabled: v,
                      status: "primary",
                      onClick: L,
                      ...g,
                      children: f
                    }
                  )
                ] }),
                l
              ] })
            ]
          }
        )
      ]
    }
  );
}, V0 = (e, t) => {
  let n;
  return function(...o) {
    const i = () => {
      clearTimeout(n), e(...o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  };
}, mm = ({
  line: e = 1,
  text: t,
  children: n,
  open: r = !0,
  style: o,
  className: i,
  popoverProps: a,
  setMaxWidth: c
}) => {
  const l = q(null), [u, d] = R(!1), [h, p] = R(0), f = t || n || "", k = F(() => {
    const g = l.current;
    if (g)
      if (e === 1) {
        const w = g.offsetWidth < g.scrollWidth;
        p(g.offsetWidth), d(w);
      } else {
        const w = g.offsetHeight < g.scrollHeight;
        p(g.offsetWidth), d(w);
      }
  }, [e]), v = F(
    V0(k, 100),
    [k]
  );
  Y(() => {
    const g = l.current;
    if (!g) return;
    const w = new ResizeObserver(() => {
      v();
    });
    w.observe(g);
    let C = g.parentElement;
    const x = [];
    for (; C && C !== document.body; ) {
      const y = new ResizeObserver(() => {
        v();
      });
      y.observe(C), x.push(y), C = C.parentElement;
    }
    const N = () => {
      v();
    };
    window.addEventListener("resize", N);
    const L = new MutationObserver((y) => {
      let b = !1;
      y.forEach((j) => {
        if (j.type === "childList" || j.type === "attributes") {
          const V = j.target;
          (g.contains(V) || V.contains(g) || g.parentElement && g.parentElement.contains(V)) && (b = !0);
        }
      }), b && v();
    });
    return L.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style", "class"]
    }), k(), () => {
      w.disconnect(), x.forEach((y) => y.disconnect()), window.removeEventListener("resize", N), L.disconnect();
    };
  }, [k, v, f]), Y(() => {
    const g = setTimeout(() => {
      k();
    }, 0);
    return () => clearTimeout(g);
  }, [f, k]);
  const M = /* @__PURE__ */ s(
    "div",
    {
      className: `land-ellipsis ${e > 1 ? "line-multiple" : "line-single"} ${i || ""}`,
      style: o,
      children: /* @__PURE__ */ s(
        "div",
        {
          ref: l,
          className: "land-ellipsis-content",
          style: {
            display: e > 1 ? "-webkit-box" : "block",
            "-webkit-line-clamp": `${e}`,
            "-webkit-box-orient": e > 1 ? "vertical" : "horizontal"
          },
          children: f
        }
      )
    }
  );
  return !u || !r ? M : /* @__PURE__ */ s(
    me,
    {
      targetBody: !0,
      placement: "bottom",
      hideArrow: !0,
      content: f,
      className: "land-ellipsis-popover",
      popoverStyle: {
        maxWidth: c ? c(h) : h
      },
      ...a,
      children: M
    }
  );
}, Si = ({
  width: e = "100%",
  height: t,
  column: n,
  wrap: r,
  justify: o = "start",
  align: i = "start",
  gap: a,
  bothCenter: c,
  children: l,
  style: u,
  className: d = ""
}) => /* @__PURE__ */ s(
  "div",
  {
    className: `land-flex ${d}`,
    style: {
      width: e,
      height: t,
      flexDirection: n ? "column" : "unset",
      gap: typeof a == "number" ? `${a}px` : a,
      flexWrap: r ? "wrap" : "nowrap",
      justifyContent: c ? "center" : o,
      alignItems: c ? "center" : i,
      ...u
    },
    children: l
  }
), gm = ({ children: e, style: t, className: n }) => /* @__PURE__ */ s("div", { className: `land-footer ${n}`, style: t, children: e });
var Be = /* @__PURE__ */ ((e) => (e.ColumnFit = "column-fit", e.ColumnFill = "column-fill", e.RowFit = "row-fit", e.RowFill = "row-fill", e.ColumnRepeat = "column-repeat", e.RowRepeat = "row-repeat", e.Default = "default", e))(Be || {});
const j0 = ({
  type: e = Be.Default,
  autoSize: t = 100,
  repeatNum: n = 1,
  gap: r = 8,
  columnGap: o,
  rowGap: i,
  children: a,
  style: c,
  className: l = ""
}) => {
  const u = X(() => {
    let d = {
      display: "grid",
      columnGap: o || r,
      rowGap: i || r
    };
    if (e === Be.Default)
      return { ...d, ...c };
    switch (e) {
      case Be.ColumnFit:
        return { ...d, gridTemplateColumns: `repeat(auto-fit, minmax(${t}px, 1fr))`, ...c };
      case Be.ColumnFill:
        return { ...d, gridTemplateColumns: `repeat(auto-fill, minmax(${t}px, 1fr))`, ...c };
      case Be.RowFit:
        return { ...d, gridTemplateRows: `repeat(auto-fit, minmax(${t}px, 1fr))`, ...c };
      case Be.RowFill:
        return { ...d, gridTemplateRows: `repeat(auto-fill, minmax(${t}px, 1fr))`, ...c };
      case Be.ColumnRepeat:
        return { ...d, gridTemplateColumns: `repeat(${n}, 1fr)`, ...c };
      case Be.RowRepeat:
        return { ...d, gridTemplateRows: `repeat(${n}, 1fr)`, ...c };
      default:
        return { ...d, ...c };
    }
  }, [e, t, n, r, c]);
  return /* @__PURE__ */ s("div", { className: `land-grid ${l}`, style: u, children: a });
};
var jn = /* @__PURE__ */ ((e) => (e.SELF = "self", e.OTHERS = "others", e.SIMPLE = "simple", e.DISABLED = "disabled", e))(jn || {});
const Ec = ({
  active: e,
  data: t,
  direction: n = "row",
  titleDirection: r = "row",
  border: o = !0,
  titleDeputy: i,
  onChange: a,
  onDropChange: c,
  dropProps: l,
  itemStyle: u,
  itemClassName: d = "",
  style: h,
  className: p = "",
  scrollToView: f = !1
}) => {
  const k = q(null), v = q(null);
  return Y(() => {
    f && e && v.current && v.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [e, f, n]), /* @__PURE__ */ s(
    "div",
    {
      ref: k,
      className: `land-menu ${p} ${n === "column" ? "column" : ""} ${o ? "borderBottom" : ""} ${f ? "scroll-to-view" : ""}`,
      style: h,
      children: t == null ? void 0 : t.map((M, g) => /* @__PURE__ */ m(
        "div",
        {
          ref: e === M.key ? v : null,
          className: `land-menu-item ${M.clickType === jn.SIMPLE ? "simple" : ""} ${M.clickType === jn.DISABLED || M.disabled ? "disabled" : ""}`,
          style: u,
          children: [
            /* @__PURE__ */ m(
              "div",
              {
                role: "button",
                className: `land-menu-link ${n === "column" ? "column" : ""} ${r === "column" && !M.titleDeputy ? "titleColumn" : ""} ${e === M.key && !(M.titleDeputy || i) ? "active" : ""} ${M.titleDeputy || i ? "title-deputy" : ""} ${d}`,
                onClick: (w) => {
                  M.titleDeputy || i || M.clickType === jn.DISABLED || M.disabled || (w.stopPropagation(), a == null || a(M));
                },
                children: [
                  typeof M.icon == "string" ? /* @__PURE__ */ s("img", { src: M.icon, className: "land-menu-icon" }) : M.icon,
                  /* @__PURE__ */ m("div", { className: "land-menu-title-wrap", children: [
                    /* @__PURE__ */ s("p", { className: `land-menu-title ${M.titleDeputy || i ? "title-deputy" : ""}`, "data-title": M.label, children: M.label }),
                    M.subText && /* @__PURE__ */ s("span", { className: "land-menu-sub-title", children: M.subText })
                  ] }),
                  M.isNew && /* @__PURE__ */ s("i", { className: "land-menu-new", children: typeof M.isNew == "boolean" ? "NEW" : M.isNew })
                ]
              },
              M.key
            ),
            M.dropData && /* @__PURE__ */ s("div", { className: `land-menu-drop-wrap ${M.open ? "open" : ""}`, children: /* @__PURE__ */ s("div", { className: "land-menu-drop", children: /* @__PURE__ */ s(
              Ec,
              {
                data: M.dropData,
                onChange: (w) => c == null ? void 0 : c(w, M),
                direction: "column",
                titleDirection: r,
                scrollToView: f,
                ...l
              }
            ) }) })
          ]
        },
        M.key ?? g
      ))
    }
  );
}, vm = ({
  height: e = "64px",
  fixed: t,
  filter: n = 0,
  borderBottom: r = !0,
  applications: o,
  logo: i,
  name: a,
  onLogoClick: c,
  divider: l = !0,
  align: u,
  menuProps: d,
  rightComponent: h,
  mobileSize: p = 767,
  style: f,
  className: k = ""
}) => {
  var g;
  const [v, M] = R(!1);
  return Y(() => {
    const w = () => M(!1), C = () => M(!1);
    return window.addEventListener("scroll", w, { passive: !0 }), window.addEventListener("resize", C, { passive: !0 }), () => {
      window.removeEventListener("scroll", w), window.removeEventListener("resize", C);
    };
  }, []), /* @__PURE__ */ m(
    "div",
    {
      className: `land-header ${t ? "fixed" : ""} ${n ? "filter" : ""} ${r ? "border-bottom" : ""} ${o ? "applications" : ""} ${k}`,
      style: {
        height: e,
        "--land-header-mobile-size": `${p}px`,
        ...f
      },
      children: [
        /* @__PURE__ */ m("div", { className: "land-header-logo", onClick: c, children: [
          o && /* @__PURE__ */ m(
            "button",
            {
              className: "land-header-application",
              onClick: (w) => w.stopPropagation(),
              children: [
                /* @__PURE__ */ s(Z, { name: "application" }),
                /* @__PURE__ */ s("div", { className: "land-application-drop", children: o })
              ]
            }
          ),
          typeof i == "string" ? /* @__PURE__ */ s("img", { src: i }) : i,
          l && i && a && /* @__PURE__ */ s(Re, { direction: "column", lineLength: "24px" }),
          a
        ] }),
        /* @__PURE__ */ s(
          "div",
          {
            className: `land-header-nav ${v ? "showMobileNav" : ""}`,
            style: {
              justifyContent: u
            },
            children: d && /* @__PURE__ */ s(
              Ec,
              {
                border: !1,
                ...d,
                onChange: (w) => {
                  var C;
                  (C = d.onChange) == null || C.call(d, w), M(!1);
                },
                onDropChange: (w, C) => {
                  var x;
                  (x = d.onDropChange) == null || x.call(d, w, C), M(!1);
                }
              }
            )
          }
        ),
        h && /* @__PURE__ */ s("div", { className: "land-header-right", children: h }),
        d && d.data && ((g = d.data) == null ? void 0 : g.length) > 0 && /* @__PURE__ */ s(
          de,
          {
            className: "land-mobile-toggle-button",
            icon: /* @__PURE__ */ s(Z, { name: "more-line" }),
            type: "text",
            onClick: () => M(!v)
          }
        )
      ]
    }
  );
}, $0 = ({
  width: e = "100%",
  height: t = 24,
  radius: n = "var(--radius-m)",
  start: r = "var(--color-bg-secondary)",
  stop: o = "var(--color-bg-tertiary)",
  style: i,
  className: a = ""
}) => /* @__PURE__ */ s(
  "div",
  {
    className: `land-skeleton ${a}`,
    style: {
      width: typeof e == "number" ? `${e}px` : e,
      height: typeof t == "number" ? `${t}px` : t,
      borderRadius: typeof n == "number" ? `${n}px` : n,
      ...i
    },
    children: /* @__PURE__ */ s(
      "div",
      {
        className: "land-skeleton-content",
        style: {
          background: `linear-gradient(90deg, ${r} 0%, ${r} 20%, ${o} 50%, ${o} 80%, ${r} 100%, ${r} 120%, ${o} 150%, ${o} 180%, ${r} 200%)`
        }
      }
    )
  }
), T0 = ({
  url: e,
  alt: t = "",
  ratio: n,
  className: r,
  imgClassName: o,
  imgStyle: i,
  style: a,
  fallback: c,
  fallbackUrl: l
}) => {
  const u = q(null), [d, h] = R("loading"), [p, f] = R(e), [k, v] = R("auto"), [M, g] = R(!1), [w, C] = R("idle");
  Y(() => {
    h("loading"), f(e), g(!1), C("idle");
  }, [e]);
  const x = () => {
    M ? C("success") : h("success"), setTimeout(() => {
      M ? C("success") : h("success");
    }, 150), u.current && v(`${u.current.width / u.current.height}`);
  }, N = () => {
    M ? C("error") : (h("error"), l && !M ? (g(!0), C("loading"), f(l)) : c && typeof c == "string" && !M && (g(!0), C("loading"), f(c)));
  };
  Y(() => {
    const V = u.current;
    if (!V) {
      h("idle"), setTimeout(() => {
        h("idle");
      }, 300);
      return;
    }
    return V.complete && (M ? C("success") : h("success"), setTimeout(() => {
      M ? C("success") : h("success");
    }, 150), v(`${u.current.width / u.current.height}`)), V.addEventListener("load", x), V.addEventListener("error", N), () => {
      V == null || V.removeEventListener("load", x), V == null || V.removeEventListener("error", N);
    };
  }, [p, M]);
  const L = n || (d === "success" || w === "success" ? k : "1"), y = () => c && typeof c != "string" && d === "error" && (w === "error" || !l) ? c : d === "error" && (w === "error" || !l) && (!c || typeof c == "string") ? /* @__PURE__ */ s(Vc, { type: "error", title: "加载失败", direction: "column", className: "land-image-alert", noBg: !0 }) : null, b = d === "loading" || M && w === "loading", j = p && (d === "success" || w === "success" || b);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-image ${b ? "loading" : d === "success" || w === "success" ? "success" : "error"} ${r ?? ""}`,
      style: {
        aspectRatio: L,
        ...a
      },
      children: [
        b && /* @__PURE__ */ s(
          $0,
          {
            width: "100%",
            height: "100%",
            radius: "var(--radius-m)",
            className: "land-image-skeleton"
          }
        ),
        y(),
        j && /* @__PURE__ */ s(
          "img",
          {
            ref: u,
            alt: t,
            src: p,
            className: `land-image-img ${d === "success" || w === "success" ? "loaded" : ""} ${o}`,
            style: {
              opacity: d === "success" || w === "success" ? 1 : 0,
              ...i
            }
          }
        )
      ]
    }
  );
}, km = ({ children: e, style: t, className: n }) => /* @__PURE__ */ s("div", { className: `land-layout ${n}`, style: t, children: e });
var Se = function() {
  return Se = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Se.apply(this, arguments);
};
function Nt(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function A0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var I0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, P0 = /* @__PURE__ */ A0(
  function(e) {
    return I0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), se = "-ms-", Xt = "-moz-", re = "-webkit-", Dc = "comm", Kn = "rule", Uo = "decl", H0 = "@import", Bc = "@keyframes", R0 = "@layer", Fc = Math.abs, zo = String.fromCharCode, qr = Object.assign;
function E0(e, t) {
  return ke(e, 0) ^ 45 ? (((t << 2 ^ ke(e, 0)) << 2 ^ ke(e, 1)) << 2 ^ ke(e, 2)) << 2 ^ ke(e, 3) : 0;
}
function Oc(e) {
  return e.trim();
}
function _e(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function W(e, t, n) {
  return e.replace(t, n);
}
function $n(e, t, n) {
  return e.indexOf(t, n);
}
function ke(e, t) {
  return e.charCodeAt(t) | 0;
}
function St(e, t, n) {
  return e.slice(t, n);
}
function Fe(e) {
  return e.length;
}
function Zc(e) {
  return e.length;
}
function Zt(e, t) {
  return t.push(e), e;
}
function D0(e, t) {
  return e.map(t).join("");
}
function Vi(e, t) {
  return e.filter(function(n) {
    return !_e(n, t);
  });
}
var qn = 1, Vt = 1, Yc = 0, Ae = 0, fe = 0, Dt = "";
function Jn(e, t, n, r, o, i, a, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: qn, column: Vt, length: a, return: "", siblings: c };
}
function qe(e, t) {
  return qr(Jn("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function mt(e) {
  for (; e.root; )
    e = qe(e.root, { children: [e] });
  Zt(e, e.siblings);
}
function B0() {
  return fe;
}
function F0() {
  return fe = Ae > 0 ? ke(Dt, --Ae) : 0, Vt--, fe === 10 && (Vt = 1, qn--), fe;
}
function Ee() {
  return fe = Ae < Yc ? ke(Dt, Ae++) : 0, Vt++, fe === 10 && (Vt = 1, qn++), fe;
}
function lt() {
  return ke(Dt, Ae);
}
function Tn() {
  return Ae;
}
function Qn(e, t) {
  return St(Dt, e, t);
}
function Jr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function O0(e) {
  return qn = Vt = 1, Yc = Fe(Dt = e), Ae = 0, [];
}
function Z0(e) {
  return Dt = "", e;
}
function Nr(e) {
  return Oc(Qn(Ae - 1, Qr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Y0(e) {
  for (; (fe = lt()) && fe < 33; )
    Ee();
  return Jr(e) > 2 || Jr(fe) > 3 ? "" : " ";
}
function _0(e, t) {
  for (; --t && Ee() && !(fe < 48 || fe > 102 || fe > 57 && fe < 65 || fe > 70 && fe < 97); )
    ;
  return Qn(e, Tn() + (t < 6 && lt() == 32 && Ee() == 32));
}
function Qr(e) {
  for (; Ee(); )
    switch (fe) {
      case e:
        return Ae;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Qr(fe);
        break;
      case 40:
        e === 41 && Qr(e);
        break;
      case 92:
        Ee();
        break;
    }
  return Ae;
}
function U0(e, t) {
  for (; Ee() && e + fe !== 57; )
    if (e + fe === 84 && lt() === 47)
      break;
  return "/*" + Qn(t, Ae - 1) + "*" + zo(e === 47 ? e : Ee());
}
function z0(e) {
  for (; !Jr(lt()); )
    Ee();
  return Qn(e, Ae);
}
function X0(e) {
  return Z0(An("", null, null, null, [""], e = O0(e), 0, [0], e));
}
function An(e, t, n, r, o, i, a, c, l) {
  for (var u = 0, d = 0, h = a, p = 0, f = 0, k = 0, v = 1, M = 1, g = 1, w = 0, C = "", x = o, N = i, L = r, y = C; M; )
    switch (k = w, w = Ee()) {
      case 40:
        if (k != 108 && ke(y, h - 1) == 58) {
          $n(y += W(Nr(w), "&", "&\f"), "&\f", Fc(u ? c[u - 1] : 0)) != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += Nr(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += Y0(k);
        break;
      case 92:
        y += _0(Tn() - 1, 7);
        continue;
      case 47:
        switch (lt()) {
          case 42:
          case 47:
            Zt(G0(U0(Ee(), Tn()), t, n, l), l);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * v:
        c[u++] = Fe(y) * g;
      case 125 * v:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            M = 0;
          case 59 + d:
            g == -1 && (y = W(y, /\f/g, "")), f > 0 && Fe(y) - h && Zt(f > 32 ? $i(y + ";", r, n, h - 1, l) : $i(W(y, " ", "") + ";", r, n, h - 2, l), l);
            break;
          case 59:
            y += ";";
          default:
            if (Zt(L = ji(y, t, n, u, d, o, c, C, x = [], N = [], h, i), i), w === 123)
              if (d === 0)
                An(y, t, L, L, x, i, h, c, N);
              else
                switch (p === 99 && ke(y, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    An(e, L, L, r && Zt(ji(e, L, L, 0, 0, o, c, C, o, x = [], h, N), N), o, N, h, c, r ? x : N);
                    break;
                  default:
                    An(y, L, L, L, [""], N, 0, c, N);
                }
        }
        u = d = f = 0, v = g = 1, C = y = "", h = a;
        break;
      case 58:
        h = 1 + Fe(y), f = k;
      default:
        if (v < 1) {
          if (w == 123)
            --v;
          else if (w == 125 && v++ == 0 && F0() == 125)
            continue;
        }
        switch (y += zo(w), w * v) {
          case 38:
            g = d > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            c[u++] = (Fe(y) - 1) * g, g = 1;
            break;
          case 64:
            lt() === 45 && (y += Nr(Ee())), p = lt(), d = h = Fe(C = y += z0(Tn())), w++;
            break;
          case 45:
            k === 45 && Fe(y) == 2 && (v = 0);
        }
    }
  return i;
}
function ji(e, t, n, r, o, i, a, c, l, u, d, h) {
  for (var p = o - 1, f = o === 0 ? i : [""], k = Zc(f), v = 0, M = 0, g = 0; v < r; ++v)
    for (var w = 0, C = St(e, p + 1, p = Fc(M = a[v])), x = e; w < k; ++w)
      (x = Oc(M > 0 ? f[w] + " " + C : W(C, /&\f/g, f[w]))) && (l[g++] = x);
  return Jn(e, t, n, o === 0 ? Kn : c, l, u, d, h);
}
function G0(e, t, n, r) {
  return Jn(e, t, n, Dc, zo(B0()), St(e, 2, -2), 0, r);
}
function $i(e, t, n, r, o) {
  return Jn(e, t, n, Uo, St(e, 0, r), St(e, r + 1, -1), r, o);
}
function _c(e, t, n) {
  switch (E0(e, t)) {
    case 5103:
      return re + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return re + e + e;
    case 4789:
      return Xt + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + e + Xt + e + se + e + e;
    case 5936:
      switch (ke(e, t + 11)) {
        case 114:
          return re + e + se + W(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return re + e + se + W(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return re + e + se + W(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return re + e + se + e + e;
    case 6165:
      return re + e + se + "flex-" + e + e;
    case 5187:
      return re + e + W(e, /(\w+).+(:[^]+)/, re + "box-$1$2" + se + "flex-$1$2") + e;
    case 5443:
      return re + e + se + "flex-item-" + W(e, /flex-|-self/g, "") + (_e(e, /flex-|baseline/) ? "" : se + "grid-row-" + W(e, /flex-|-self/g, "")) + e;
    case 4675:
      return re + e + se + "flex-line-pack" + W(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return re + e + se + W(e, "shrink", "negative") + e;
    case 5292:
      return re + e + se + W(e, "basis", "preferred-size") + e;
    case 6060:
      return re + "box-" + W(e, "-grow", "") + re + e + se + W(e, "grow", "positive") + e;
    case 4554:
      return re + W(e, /([^-])(transform)/g, "$1" + re + "$2") + e;
    case 6187:
      return W(W(W(e, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return W(e, /(image-set\([^]*)/, re + "$1$`$1");
    case 4968:
      return W(W(e, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + se + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + re + e + e;
    case 4200:
      if (!_e(e, /flex-|baseline/)) return se + "grid-column-align" + St(e, t) + e;
      break;
    case 2592:
    case 3360:
      return se + W(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, _e(r.props, /grid-\w+-end/);
      }) ? ~$n(e + (n = n[t].value), "span", 0) ? e : se + W(e, "-start", "") + e + se + "grid-row-span:" + (~$n(n, "span", 0) ? _e(n, /\d+/) : +_e(n, /\d+/) - +_e(e, /\d+/)) + ";" : se + W(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return _e(r.props, /grid-\w+-start/);
      }) ? e : se + W(W(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(e, /(.+)-inline(.+)/, re + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Fe(e) - 1 - t > 6)
        switch (ke(e, t + 1)) {
          case 109:
            if (ke(e, t + 4) !== 45)
              break;
          case 102:
            return W(e, /(.+:)(.+)-([^]+)/, "$1" + re + "$2-$3$1" + Xt + (ke(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~$n(e, "stretch", 0) ? _c(W(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return W(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, c, l, u) {
        return se + o + ":" + i + u + (a ? se + o + "-span:" + (c ? l : +l - +i) + u : "") + e;
      });
    case 4949:
      if (ke(e, t + 6) === 121)
        return W(e, ":", ":" + re) + e;
      break;
    case 6444:
      switch (ke(e, ke(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return W(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + re + (ke(e, 14) === 45 ? "inline-" : "") + "box$3$1" + re + "$2$3$1" + se + "$2box$3") + e;
        case 100:
          return W(e, ":", ":" + se) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return W(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function On(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function K0(e, t, n, r) {
  switch (e.type) {
    case R0:
      if (e.children.length) break;
    case H0:
    case Uo:
      return e.return = e.return || e.value;
    case Dc:
      return "";
    case Bc:
      return e.return = e.value + "{" + On(e.children, r) + "}";
    case Kn:
      if (!Fe(e.value = e.props.join(","))) return "";
  }
  return Fe(n = On(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function q0(e) {
  var t = Zc(e);
  return function(n, r, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, i) || "";
    return a;
  };
}
function J0(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Q0(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Uo:
        e.return = _c(e.value, e.length, n);
        return;
      case Bc:
        return On([qe(e, { value: W(e.value, "@", "@" + re) })], r);
      case Kn:
        if (e.length)
          return D0(n = e.props, function(o) {
            switch (_e(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                mt(qe(e, { props: [W(o, /:(read-\w+)/, ":" + Xt + "$1")] })), mt(qe(e, { props: [o] })), qr(e, { props: Vi(n, r) });
                break;
              case "::placeholder":
                mt(qe(e, { props: [W(o, /:(plac\w+)/, ":" + re + "input-$1")] })), mt(qe(e, { props: [W(o, /:(plac\w+)/, ":" + Xt + "$1")] })), mt(qe(e, { props: [W(o, /:(plac\w+)/, se + "input-$1")] })), mt(qe(e, { props: [o] })), qr(e, { props: Vi(n, r) });
                break;
            }
            return "";
          });
    }
}
var W0 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ut = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Uc = "active", zc = "data-styled-version", Wn = "6.1.18", Xo = `/*!sc*/
`, Zn = typeof window < "u" && typeof document < "u", e3 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ti = /invalid hook call/i, yn = /* @__PURE__ */ new Set(), t3 = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var c = [], l = 1; l < arguments.length; l++) c[l - 1] = arguments[l];
        Ti.test(a) ? (i = !1, yn.delete(r)) : o.apply(void 0, Nt([a], c, !1));
      }, q(), i && !yn.has(r) && (console.warn(r), yn.add(r));
    } catch (a) {
      Ti.test(a.message) && yn.delete(r);
    } finally {
      console.error = o;
    }
  }
}, er = Object.freeze([]), jt = Object.freeze({});
function n3(e, t, n) {
  return n === void 0 && (n = jt), e.theme !== n.theme && e.theme || t || n.theme;
}
var Wr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), r3 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, o3 = /(^-|-$)/g;
function Ai(e) {
  return e.replace(r3, "-").replace(o3, "");
}
var s3 = /(a)(d)/gi, Cn = 52, Ii = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function eo(e) {
  var t, n = "";
  for (t = Math.abs(e); t > Cn; t = t / Cn | 0) n = Ii(t % Cn) + n;
  return (Ii(t % Cn) + n).replace(s3, "$1-$2");
}
var Sr, Xc = 5381, rt = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Gc = function(e) {
  return rt(Xc, e);
};
function i3(e) {
  return eo(Gc(e) >>> 0);
}
function Kc(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Vr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var qc = typeof Symbol == "function" && Symbol.for, Jc = qc ? Symbol.for("react.memo") : 60115, a3 = qc ? Symbol.for("react.forward_ref") : 60112, c3 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, l3 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Qc = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, d3 = ((Sr = {})[a3] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Sr[Jc] = Qc, Sr);
function Pi(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Jc ? Qc : "$$typeof" in e ? d3[e.$$typeof] : c3;
  var t;
}
var u3 = Object.defineProperty, h3 = Object.getOwnPropertyNames, Hi = Object.getOwnPropertySymbols, p3 = Object.getOwnPropertyDescriptor, f3 = Object.getPrototypeOf, Ri = Object.prototype;
function Wc(e, t, n) {
  if (typeof t != "string") {
    if (Ri) {
      var r = f3(t);
      r && r !== Ri && Wc(e, r, n);
    }
    var o = h3(t);
    Hi && (o = o.concat(Hi(t)));
    for (var i = Pi(e), a = Pi(t), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!(l in l3 || n && n[l] || a && l in a || i && l in i)) {
        var u = p3(t, l);
        try {
          u3(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function $t(e) {
  return typeof e == "function";
}
function Go(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function it(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Ei(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Tt(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function to(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Tt(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = to(e[r], t[r]);
  else if (Tt(t)) for (var r in t) e[r] = to(e[r], t[r]);
  return e;
}
function Ko(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var m3 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function g3() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function Bt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(g3.apply(void 0, Nt([m3[e]], t, !1)).trim());
}
var v3 = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Bt(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var a = o; a < i; a++) this.groupSizes[a] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), l = (a = 0, n.length); a < l; a++) this.tag.insertRule(c, n[a]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(Xo);
    return n;
  }, e;
}(), k3 = 1 << 30, In = /* @__PURE__ */ new Map(), Yn = /* @__PURE__ */ new Map(), Pn = 1, Mn = function(e) {
  if (In.has(e)) return In.get(e);
  for (; Yn.has(Pn); ) Pn++;
  var t = Pn++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > k3)) throw Bt(16, "".concat(t));
  return In.set(e, t), Yn.set(t, e), t;
}, L3 = function(e, t) {
  Pn = t + 1, In.set(e, t), Yn.set(t, e);
}, w3 = "style[".concat(ut, "][").concat(zc, '="').concat(Wn, '"]'), y3 = new RegExp("^".concat(ut, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), C3 = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, M3 = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Xo), o = [], i = 0, a = r.length; i < a; i++) {
    var c = r[i].trim();
    if (c) {
      var l = c.match(y3);
      if (l) {
        var u = 0 | parseInt(l[1], 10), d = l[2];
        u !== 0 && (L3(d, u), C3(e, d, l[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, Di = function(e) {
  for (var t = document.querySelectorAll(w3), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ut) !== Uc && (M3(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function x3() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var el = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var l = Array.from(c.querySelectorAll("style[".concat(ut, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ut, Uc), r.setAttribute(zc, Wn);
  var a = x3();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, b3 = function() {
  function e(t) {
    this.element = el(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
      }
      throw Bt(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), N3 = function() {
  function e(t) {
    this.element = el(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), S3 = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Bi = Zn, V3 = { isServer: !Zn, useCSSOMInjection: !e3 }, tl = function() {
  function e(t, n, r) {
    t === void 0 && (t = jt), n === void 0 && (n = {});
    var o = this;
    this.options = Se(Se({}, V3), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Zn && Bi && (Bi = !1, Di(this)), Ko(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, l = "", u = function(h) {
          var p = function(g) {
            return Yn.get(g);
          }(h);
          if (p === void 0) return "continue";
          var f = i.names.get(p), k = a.getGroup(h);
          if (f === void 0 || !f.size || k.length === 0) return "continue";
          var v = "".concat(ut, ".g").concat(h, '[id="').concat(p, '"]'), M = "";
          f !== void 0 && f.forEach(function(g) {
            g.length > 0 && (M += "".concat(g, ","));
          }), l += "".concat(k).concat(v, '{content:"').concat(M, '"}').concat(Xo);
        }, d = 0; d < c; d++) u(d);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Mn(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Zn && Di(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Se(Se({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new S3(o) : r ? new b3(o) : new N3(o);
    }(this.options), new v3(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Mn(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(Mn(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Mn(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), j3 = /&/g, $3 = /^\s*\/\/.*$/gm;
function nl(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = nl(n.children, t)), n;
  });
}
function T3(e) {
  var t, n, r, o = jt, i = o.options, a = i === void 0 ? jt : i, c = o.plugins, l = c === void 0 ? er : c, u = function(p, f, k) {
    return k.startsWith(n) && k.endsWith(n) && k.replaceAll(n, "").length > 0 ? ".".concat(t) : p;
  }, d = l.slice();
  d.push(function(p) {
    p.type === Kn && p.value.includes("&") && (p.props[0] = p.props[0].replace(j3, n).replace(r, u));
  }), a.prefix && d.push(Q0), d.push(K0);
  var h = function(p, f, k, v) {
    f === void 0 && (f = ""), k === void 0 && (k = ""), v === void 0 && (v = "&"), t = v, n = f, r = new RegExp("\\".concat(n, "\\b"), "g");
    var M = p.replace($3, ""), g = X0(k || f ? "".concat(k, " ").concat(f, " { ").concat(M, " }") : M);
    a.namespace && (g = nl(g, a.namespace));
    var w = [];
    return On(g, q0(d.concat(J0(function(C) {
      return w.push(C);
    })))), w;
  };
  return h.hash = l.length ? l.reduce(function(p, f) {
    return f.name || Bt(15), rt(p, f.name);
  }, Xc).toString() : "", h;
}
var A3 = new tl(), no = T3(), rl = Te.createContext({ shouldForwardProp: void 0, styleSheet: A3, stylis: no });
rl.Consumer;
Te.createContext(void 0);
function Fi() {
  return ye(rl);
}
var Oi = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = no);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Ko(this, function() {
      throw Bt(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = no), this.name + t.hash;
  }, e;
}(), I3 = function(e) {
  return e >= "A" && e <= "Z";
};
function Zi(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    I3(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var ol = function(e) {
  return e == null || e === !1 || e === "";
}, sl = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !ol(i) && (Array.isArray(i) && i.isCss || $t(i) ? r.push("".concat(Zi(o), ":"), i, ";") : Tt(i) ? r.push.apply(r, Nt(Nt(["".concat(o, " {")], sl(i), !1), ["}"], !1)) : r.push("".concat(Zi(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in W0 || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function dt(e, t, n, r) {
  if (ol(e)) return [];
  if (Go(e)) return [".".concat(e.styledComponentId)];
  if ($t(e)) {
    if (!$t(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Oi || Tt(o) || o === null || console.error("".concat(Kc(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), dt(o, t, n, r);
  }
  var i;
  return e instanceof Oi ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Tt(e) ? sl(e) : Array.isArray(e) ? Array.prototype.concat.apply(er, e.map(function(a) {
    return dt(a, t, n, r);
  })) : [e.toString()];
}
function P3(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if ($t(n) && !Go(n)) return !1;
  }
  return !0;
}
var H3 = Gc(Wn), R3 = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && P3(t), this.componentId = n, this.baseHash = rt(H3, n), this.baseStyle = r, tl.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = it(o, this.staticRulesId);
    else {
      var i = Ei(dt(this.rules, t, n, r)), a = eo(rt(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var c = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, c);
      }
      o = it(o, a), this.staticRulesId = a;
    }
    else {
      for (var l = rt(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var h = this.rules[d];
        if (typeof h == "string") u += h, process.env.NODE_ENV !== "production" && (l = rt(l, h));
        else if (h) {
          var p = Ei(dt(h, t, n, r));
          l = rt(l, p + d), u += p;
        }
      }
      if (u) {
        var f = eo(l >>> 0);
        n.hasNameForId(this.componentId, f) || n.insertRules(this.componentId, f, r(u, ".".concat(f), void 0, this.componentId)), o = it(o, f);
      }
    }
    return o;
  }, e;
}(), il = Te.createContext(void 0);
il.Consumer;
var jr = {}, Yi = /* @__PURE__ */ new Set();
function E3(e, t, n) {
  var r = Go(e), o = e, i = !Vr(e), a = t.attrs, c = a === void 0 ? er : a, l = t.componentId, u = l === void 0 ? function(x, N) {
    var L = typeof x != "string" ? "sc" : Ai(x);
    jr[L] = (jr[L] || 0) + 1;
    var y = "".concat(L, "-").concat(i3(Wn + L + jr[L]));
    return N ? "".concat(N, "-").concat(y) : y;
  }(t.displayName, t.parentComponentId) : l, d = t.displayName, h = d === void 0 ? function(x) {
    return Vr(x) ? "styled.".concat(x) : "Styled(".concat(Kc(x), ")");
  }(e) : d, p = t.displayName && t.componentId ? "".concat(Ai(t.displayName), "-").concat(t.componentId) : t.componentId || u, f = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, k = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var v = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var M = t.shouldForwardProp;
      k = function(x, N) {
        return v(x, N) && M(x, N);
      };
    } else k = v;
  }
  var g = new R3(n, p, r ? o.componentStyle : void 0);
  function w(x, N) {
    return function(L, y, b) {
      var j = L.attrs, V = L.componentStyle, I = L.defaultProps, S = L.foldedComponentIds, A = L.styledComponentId, $ = L.target, P = Te.useContext(il), O = Fi(), D = L.shouldForwardProp || O.shouldForwardProp;
      process.env.NODE_ENV !== "production" && os(A);
      var z = n3(y, P, I) || jt, T = function(_, Q, oe) {
        for (var te, ie = Se(Se({}, Q), { className: void 0, theme: oe }), ve = 0; ve < _.length; ve += 1) {
          var ge = $t(te = _[ve]) ? te(ie) : te;
          for (var be in ge) ie[be] = be === "className" ? it(ie[be], ge[be]) : be === "style" ? Se(Se({}, ie[be]), ge[be]) : ge[be];
        }
        return Q.className && (ie.className = it(ie.className, Q.className)), ie;
      }(j, y, z), E = T.as || $, H = {};
      for (var B in T) T[B] === void 0 || B[0] === "$" || B === "as" || B === "theme" && T.theme === z || (B === "forwardedAs" ? H.as = T.forwardedAs : D && !D(B, E) || (H[B] = T[B], D || process.env.NODE_ENV !== "development" || P0(B) || Yi.has(B) || !Wr.has(E) || (Yi.add(B), console.warn('styled-components: it looks like an unknown prop "'.concat(B, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var U = function(_, Q) {
        var oe = Fi(), te = _.generateAndInjectStyles(Q, oe.styleSheet, oe.stylis);
        return process.env.NODE_ENV !== "production" && os(te), te;
      }(V, T);
      process.env.NODE_ENV !== "production" && L.warnTooManyClasses && L.warnTooManyClasses(U);
      var K = it(S, A);
      return U && (K += " " + U), T.className && (K += " " + T.className), H[Vr(E) && !Wr.has(E) ? "class" : "className"] = K, b && (H.ref = b), Ki(E, H);
    }(C, x, N);
  }
  w.displayName = h;
  var C = Te.forwardRef(w);
  return C.attrs = f, C.componentStyle = g, C.displayName = h, C.shouldForwardProp = k, C.foldedComponentIds = r ? it(o.foldedComponentIds, o.styledComponentId) : "", C.styledComponentId = p, C.target = r ? o.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = r ? function(N) {
      for (var L = [], y = 1; y < arguments.length; y++) L[y - 1] = arguments[y];
      for (var b = 0, j = L; b < j.length; b++) to(N, j[b], !0);
      return N;
    }({}, o.defaultProps, x) : x;
  } }), process.env.NODE_ENV !== "production" && (t3(h, p), C.warnTooManyClasses = /* @__PURE__ */ function(x, N) {
    var L = {}, y = !1;
    return function(b) {
      if (!y && (L[b] = !0, Object.keys(L).length >= 200)) {
        var j = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(x).concat(j, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, L = {};
      }
    };
  }(h, p)), Ko(C, function() {
    return ".".concat(C.styledComponentId);
  }), i && Wc(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function _i(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var Ui = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function D3(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if ($t(e) || Tt(e)) return Ui(dt(_i(er, Nt([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? dt(r) : Ui(dt(_i(r, t)));
}
function ro(e, t, n) {
  if (n === void 0 && (n = jt), !t) throw Bt(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, D3.apply(void 0, Nt([o], i, !1)));
  };
  return r.attrs = function(o) {
    return ro(e, t, Se(Se({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return ro(e, t, Se(Se({}, n), o));
  }, r;
}
var al = function(e) {
  return ro(E3, e);
}, un = al;
Wr.forEach(function(e) {
  un[e] = al(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var xn = "__sc-".concat(ut, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[xn] || (window[xn] = 0), window[xn] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[xn] += 1);
const Lm = ({
  type: e = "info",
  text: t = "这是一条全局提示",
  simple: n = !1,
  style: r,
  className: o = ""
}) => /* @__PURE__ */ m(
  B3,
  {
    className: `StyleToastContainer ${o} ${n ? "simple" : ""}`,
    style: {
      ...r
    },
    children: [
      !n && /* @__PURE__ */ m(ue, { children: [
        e === "info" && /* @__PURE__ */ s(Z, { name: "info-fill", size: 20, color: "var(--color-primary-6)" }),
        e === "error" && /* @__PURE__ */ s(Z, { name: "attention-fill", size: 20, color: "var(--color-red-6)" }),
        e === "fail" && /* @__PURE__ */ s(Z, { name: "error-fill", size: 20, color: "var(--color-red-6)" }),
        e === "warn" && /* @__PURE__ */ s(Z, { name: "attention-fill", size: 20, color: "var(--color-orange-6)" }),
        e === "success" && /* @__PURE__ */ s(Z, { name: "check-fill", size: 20, color: "var(--color-green-6)" })
      ] }),
      t
    ]
  }
), B3 = un.div`
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
`, wm = ({
  current: e = 1,
  pageSize: t = 1,
  total: n = 1,
  showTotal: r = !1,
  showInput: o = !1,
  onChange: i,
  style: a,
  className: c = ""
}) => {
  var x, N;
  const [l, u] = R(e);
  Y(() => {
    u(e);
  }, [e]);
  const { pageData: d, curStart: h, isStartPreOut: p, isStartNextOut: f } = X(() => {
    const L = t;
    let y = 2;
    l > L + 1 && (y = Math.max(2, l - Math.floor(L / 2))), y + L > n && (y = Math.max(2, n - L + 1));
    const b = Array.from({ length: n }).map((I, S) => ({ id: S + 1 })).filter((I) => I.id > 1 && I.id < n).filter((I) => I.id >= y && I.id < y + L), j = y <= L * 2, V = n - y < L * 2;
    return { pageData: b, curStart: y, isStartPreOut: j, isStartNextOut: V };
  }, [n, t, l]), k = F((L) => {
    L >= 1 && L <= n && L !== l && (u(L), i == null || i(L));
  }, [l, n, i]), v = F(() => {
    l > 1 && k(l - 1);
  }, [l, k]), M = F(() => {
    l < n && k(l + 1);
  }, [l, n, k]), g = F((L) => {
    if (L === "prev" && !p) {
      const y = Math.max(1, h - t);
      k(y);
    } else if (L === "next" && !f) {
      const y = Math.min(n, h + t);
      k(y);
    }
  }, [h, t, p, f, n, k]), w = F((L) => {
    const y = L;
    !isNaN(y) && y >= 1 && y <= n && (u(y), k(y));
  }, [n, k]), C = F((L) => {
    L.stopPropagation();
  }, []);
  return /* @__PURE__ */ m("div", { className: `land-pagination ${c}`, style: a, children: [
    r && /* @__PURE__ */ m("div", { className: "land-pagination-total", children: [
      "共",
      n,
      "页"
    ] }),
    /* @__PURE__ */ s(
      "div",
      {
        onClick: (L) => {
          C(L), v();
        },
        className: `land-pagination-arrow-prev ${l === 1 ? "disabled" : ""}`,
        children: /* @__PURE__ */ s(Z, { name: "arrow", className: "land-pagination-arrow-prev-icon", strokeWidth: 4 })
      }
    ),
    /* @__PURE__ */ m("div", { className: "land-pagination-page", children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: `land-pagination-num-item ${l === 1 ? "active" : ""}`,
          onClick: (L) => {
            C(L), k(1);
          },
          children: "1"
        }
      ),
      ((x = d[0]) == null ? void 0 : x.id) > 2 && /* @__PURE__ */ m(
        "div",
        {
          onClick: (L) => {
            C(L), g("prev");
          },
          className: "land-pagination-arrow-double-prev",
          children: [
            /* @__PURE__ */ s(Z, { name: "more", size: 16 }),
            /* @__PURE__ */ s(Z, { name: "arrow-double", className: "land-pagination-arrow-double-prev-icon", size: 24 })
          ]
        }
      ),
      d == null ? void 0 : d.map((L) => /* @__PURE__ */ s(
        "div",
        {
          className: `land-pagination-num-item ${l === L.id ? "active" : ""}`,
          onClick: (y) => {
            C(y), k(L.id);
          },
          children: L.id
        },
        L.id
      )),
      ((N = d[(d == null ? void 0 : d.length) - 1]) == null ? void 0 : N.id) < n - 1 && /* @__PURE__ */ m(
        "div",
        {
          onClick: (L) => {
            C(L), g("next");
          },
          className: "land-pagination-arrow-double-next",
          children: [
            /* @__PURE__ */ s(Z, { name: "more", size: 16 }),
            /* @__PURE__ */ s(Z, { name: "arrow-double", className: "land-pagination-arrow-double-next-icon", size: 24 })
          ]
        }
      ),
      /* @__PURE__ */ s(
        "div",
        {
          className: `land-pagination-num-item ${l === n ? "active" : ""}`,
          onClick: (L) => {
            C(L), k(n);
          },
          children: n
        }
      )
    ] }),
    /* @__PURE__ */ s(
      "div",
      {
        onClick: (L) => {
          C(L), M();
        },
        className: `land-pagination-arrow-next ${l === n ? "disabled" : ""}`,
        children: /* @__PURE__ */ s(Z, { name: "arrow", className: "land-pagination-arrow-next-icon", strokeWidth: 4 })
      }
    ),
    o && /* @__PURE__ */ m("div", { className: "land-pagination-input", children: [
      "跳转至",
      /* @__PURE__ */ s(
        Ie,
        {
          hideArrowButton: !0,
          value: l,
          onChange: w,
          className: "land-pagination-page-input",
          textAlign: "center"
        }
      ),
      "/ ",
      n,
      " 页"
    ] })
  ] });
}, ym = ({
  show: e,
  content: t,
  theme: n = "light",
  placement: r = "top",
  hideArrow: o = !1,
  cancelButtonProps: i,
  submitButtonProps: a,
  cancelLabel: c = "取消",
  submitLabel: l = "确认",
  onCancel: u,
  onSubmit: d,
  style: h,
  className: p = ""
}) => /* @__PURE__ */ m(
  "div",
  {
    className: `land-pop-confirm ${e ? "show" : ""} ${o ? "hide-arrow" : ""} ${n} ${p}`,
    style: {
      top: r === "bottom" ? "100%" : r === "top" ? "auto" : "50%",
      bottom: r === "top" ? "100%" : "",
      left: r === "right" ? "100%" : r === "left" ? "auto" : "50%",
      right: r === "left" ? "100%" : "",
      transform: `translate(${r === "top" || r === "bottom" ? "-50%" : r === "left" ? "-12px" : "12px"}, ${r === "top" ? "-12px" : r === "bottom" ? "12px" : "-50%"})`,
      ...h
    },
    children: [
      /* @__PURE__ */ s("div", { className: "land-popConfirm-content", children: t }),
      /* @__PURE__ */ m("div", { className: "land-popConfirm-btn", children: [
        /* @__PURE__ */ s(de, { type: "fill", size: "small", onClick: u, ...i, children: c }),
        /* @__PURE__ */ s(de, { type: "background", size: "small", onClick: d, ...a, children: l })
      ] }),
      !o && /* @__PURE__ */ s(
        "div",
        {
          className: "land-popConfirm-arrow",
          style: {
            left: r === "left" ? "100%" : r === "right" ? "0" : "50%",
            top: r === "top" ? "100%" : r === "bottom" ? "0px" : "50%",
            bottom: r === "bottom" ? "100%" : "",
            transform: `translate(-50%, -50%) rotate(${r === "top" ? "45" : r === "bottom" ? "-135" : r === "right" ? "135" : "-45"}deg)`
          }
        }
      )
    ]
  }
), Cm = ({
  value: e = 0.6,
  status: t = "default",
  type: n = "line",
  hideLabel: r = !1,
  strokeWidth: o = 8,
  style: i,
  className: a = ""
}) => {
  const c = Math.max(0, Math.min(1, e)), l = () => `scaleX(${c})`, u = () => {
    if (t === "default") return null;
    const h = {
      size: n === "circle" ? 20 : 16
    };
    switch (t) {
      case "success":
        return /* @__PURE__ */ s(Z, { name: "check-fill", ...h, color: "var(--color-green-6)" });
      case "fail":
        return /* @__PURE__ */ s(Z, { name: "error-fill", ...h, color: "var(--color-red-6)" });
      default:
        return null;
    }
  }, d = () => {
    const p = (80 - o) / 2, f = 2 * Math.PI * p, k = f, v = f - c * f;
    return /* @__PURE__ */ m("svg", { width: 80, height: 80, className: "land-progress-circle-svg", children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 80 / 2,
          cy: 80 / 2,
          r: p,
          stroke: "var(--color-border-primary)",
          strokeWidth: o,
          fill: "none"
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 80 / 2,
          cy: 80 / 2,
          r: p,
          stroke: "var(--color-primary)",
          strokeWidth: o,
          fill: "none",
          strokeDasharray: k,
          strokeDashoffset: v,
          strokeLinecap: "round",
          transform: `rotate(-90 ${80 / 2} ${80 / 2})`,
          style: { transition: "stroke-dashoffset 0.3s ease" }
        }
      )
    ] });
  };
  return /* @__PURE__ */ s("div", { className: `land-progress ${n} ${a}`, style: i, children: /* @__PURE__ */ s("div", { className: "land-progress-content", children: n === "circle" ? /* @__PURE__ */ m("div", { className: "land-progress-circle-container", children: [
    d(),
    !r && t == "default" && /* @__PURE__ */ m("div", { className: "land-progress-circle-label", children: [
      Math.round(c * 100),
      "%"
    ] }),
    t !== "default" && /* @__PURE__ */ s("div", { className: "land-progress-status-icon", children: u() })
  ] }) : /* @__PURE__ */ m(ue, { children: [
    !r && t == "default" && /* @__PURE__ */ m("div", { className: "land-progress-label", style: { left: `${e * 100}%` }, children: [
      Math.round(c * 100),
      "%"
    ] }),
    /* @__PURE__ */ s("div", { className: "land-progress-bar", children: /* @__PURE__ */ s(
      "div",
      {
        className: "land-progress-bar-finished",
        style: { transform: l() }
      }
    ) }),
    t !== "default" && /* @__PURE__ */ s("div", { className: "land-progress-status-icon", children: u() })
  ] }) }) });
}, F3 = ({
  label: e,
  tip: t,
  disabled: n,
  iconTip: r,
  style: o,
  className: i = "",
  onClick: a,
  checked: c,
  animated: l
}) => /* @__PURE__ */ m("div", { className: `land-radio-item ${t ? "hover-pop" : ""} ${n ? "disabled" : ""} ${i}`, style: o, children: [
  /* @__PURE__ */ s(me, { content: t, theme: "dark", style: { maxWidth: "200px" } }),
  /* @__PURE__ */ m(
    "div",
    {
      onClick: a,
      className: "land-radio-label",
      children: [
        /* @__PURE__ */ s("div", { className: `land-radio-circle ${c ? "checked" : ""} ${l ? "animated" : "no-animation"}`, children: /* @__PURE__ */ s(Z, { name: "check", size: 10, className: "land-radio-circle-icon" }) }),
        e
      ]
    }
  ),
  r && /* @__PURE__ */ m("div", { className: "land-radio-pop hover-pop", children: [
    /* @__PURE__ */ s(Z, { name: "info-stroke", color: "var(--color-gray-rgba-9)", size: 12 }),
    /* @__PURE__ */ s(me, { content: r, theme: "dark", style: { maxWidth: "200px" } })
  ] })
] }), Mm = ({
  checked: e,
  data: t = [],
  animated: n,
  onChange: r,
  style: o,
  className: i = ""
}) => /* @__PURE__ */ s("div", { className: `land-radio-group ${i}`, style: o, children: t == null ? void 0 : t.map(
  (a) => /* @__PURE__ */ s(
    F3,
    {
      label: a.label,
      tip: a.tip,
      disabled: a.disabled,
      checked: e === a.key,
      animated: n,
      onClick: (c) => r == null ? void 0 : r(a.key, a, c)
    },
    a.key
  )
) }), xm = ({
  value: e = 0,
  count: t = 5,
  defaultColor: n = "var(--color-bg-secondary)",
  activeColor: r = "var(--color-orange-6)",
  customSvg: o,
  readonly: i = !1,
  onChange: a,
  style: c,
  className: l = ""
}) => {
  const [u, d] = Te.useState(0);
  return /* @__PURE__ */ s(
    "div",
    {
      className: `land-rate ${l}`,
      style: {
        "--land-rate-character-item-active-color": r,
        "--land-rate-character-item-hover-color": r,
        "--land-rate-character-item-default-color": n,
        ...c
      },
      children: Array.from({ length: t }).map((h, p) => /* @__PURE__ */ m(
        "div",
        {
          className: `land-rate-character ${i ? "readonly" : ""}`,
          children: [
            /* @__PURE__ */ s(
              "div",
              {
                className: `land-rate-character-item left ${p + 1 + p * 2 <= e || p + 1 + p * 2 <= u ? "active" : ""}`,
                onClick: () => a == null ? void 0 : a(p + 1 + p * 2),
                onMouseEnter: () => d(p + 1 + p * 2),
                onMouseLeave: () => d(0),
                children: o || /* @__PURE__ */ s("svg", { width: "24", viewBox: "0 0 48 48", children: /* @__PURE__ */ s("path", { d: "M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z" }) })
              }
            ),
            /* @__PURE__ */ s(
              "div",
              {
                className: `land-rate-character-item right ${p + 2 + p * 2 <= e || p + 2 + p * 2 <= u ? "active" : ""}`,
                onClick: () => a == null ? void 0 : a(p + 2 + p * 2),
                onMouseOver: () => d(p + 2 + p * 2),
                onMouseLeave: () => d(0),
                children: o || /* @__PURE__ */ s("svg", { width: "24", viewBox: "0 0 48 48", children: /* @__PURE__ */ s("path", { d: "M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z" }) })
              }
            )
          ]
        },
        p
      ))
    }
  );
}, gt = (e) => {
  const t = [];
  return e.children && e.children.forEach((n) => {
    t.push(n.key), t.push(...gt(n));
  }), t;
}, cl = (e) => {
  const t = [];
  return e.children && e.children.forEach((n) => {
    t.push(n), t.push(...cl(n));
  }), t;
}, bm = ({
  type: e,
  disabled: t,
  multiple: n,
  customValueDisplay: r,
  tip: o,
  tipProps: i,
  selected: a,
  selectedValues: c,
  separator: l,
  maxDisplayCount: u,
  placeholder: d = "请选择",
  data: h,
  onChange: p
}) => {
  const [f, k] = R([]), v = F(() => {
    if (n) {
      const V = c.map((I) => I.label);
      return !V || V.length === 0 ? d : V.length <= u ? V.join(l) : `${V.slice(0, u).join(l)}等${V.length}个选项`;
    } else
      return !a || !a.label ? d : a.label;
  }, [n, c, a, d, l, u]), M = F(() => {
    if (!r)
      return v();
    if (n)
      return r({
        values: c.map((V) => V.key),
        items: c,
        isMultiple: !0,
        placeholder: d
      });
    {
      const V = a ? [a] : [], I = a ? [a.key] : [];
      return r({
        values: I,
        items: V,
        isMultiple: !1,
        placeholder: d
      });
    }
  }, [r, v, n, c, a, d]), g = F((V) => {
    if (V === 0)
      return h || [];
    let I = h || [];
    for (let S = 0; S < V; S++) {
      const A = f[S], $ = I.find((P) => P.key === A);
      if ($ != null && $.children)
        I = $.children;
      else
        return [];
    }
    return I;
  }, [h, f]), w = F((V) => n ? c.some((I) => I.key === V.key) : (a == null ? void 0 : a.key) === V.key, [n, c, a]), C = F((V) => {
    if (!n || !V.children) return !1;
    const I = gt(V), S = I.filter(
      (A) => c.some(($) => $.key === A)
    ).length;
    return S > 0 && S < I.length;
  }, [n, c]), x = F((V) => {
    let I = [...V];
    const S = ($) => {
      const P = [];
      return $.forEach((O) => {
        O.children && O.children.length > 0 && (P.push(O), P.push(...S(O.children)));
      }), P;
    };
    return S(h || []).forEach(($) => {
      const P = gt($), O = P.filter(
        (z) => I.some((T) => T.key === z)
      ).length, D = I.some((z) => z.key === $.key);
      O === P.length && !D ? I.push($) : O === 0 && D && (I = I.filter((z) => z.key !== $.key));
    }), I;
  }, [h, gt]), N = F((V, I) => {
    if (V.children && V.children.length > 0) {
      const S = f[I] === V.key;
      k(S ? f.slice(0, I) : [...f.slice(0, I), V.key]);
    } else if (n) {
      const S = w(V);
      let A;
      S ? A = c.filter(($) => $.key !== V.key) : A = [...c, V], A = x(A), p == null || p(A, V);
    } else
      p == null || p(V, V);
  }, [f, n, w, c, p, x]), L = F((V, I) => {
    if (!n) return;
    let S = [...c];
    if (w(V)) {
      const $ = [V.key, ...gt(V)];
      S = S.filter(
        (P) => !$.includes(P.key)
      );
    } else
      [V, ...cl(V)].forEach((P) => {
        S.some((O) => O.key === P.key) || S.push(P);
      });
    S = x(S), p == null || p(S, V);
  }, [n, c, p, w, gt, x]), y = F(() => {
    k([]);
  }, []), b = X(() => g(0), [g]), j = X(() => f.map((V, I) => {
    const S = I + 1, A = g(S);
    return { level: S, levelData: A };
  }).filter(({ levelData: V }) => V.length > 0), [f, g]);
  return /* @__PURE__ */ s("div", { className: "land-select-tree", children: /* @__PURE__ */ s(
    cn,
    {
      disabled: t,
      trigger: "click",
      onClose: y,
      dropContent: /* @__PURE__ */ m("div", { className: "land-select-tree-drop", children: [
        /* @__PURE__ */ s(
          oo,
          {
            data: b,
            multiple: n,
            level: 0,
            expandedPath: f,
            onClick: N,
            onCheckedChange: L,
            isItemSelected: w,
            isItemIndeterminate: C
          }
        ),
        j.map(({ level: V, levelData: I }) => /* @__PURE__ */ s(
          oo,
          {
            data: I,
            multiple: n,
            level: V,
            expandedPath: f,
            onClick: N,
            onCheckedChange: L,
            isItemSelected: w,
            isItemIndeterminate: C
          },
          `level-${V}`
        ))
      ] }),
      children: /* @__PURE__ */ m(
        "div",
        {
          className: `land-select-input hover-pop ${e} ${t ? "disabled" : ""}`,
          children: [
            /* @__PURE__ */ s(
              "p",
              {
                className: `${(n ? c.length > 0 : a !== void 0) ? "land-select-trigger" : "land-select-placeholder"}`,
                children: r ? M() : v()
              }
            ),
            /* @__PURE__ */ s(Z, { name: "arrow-triangle", className: "land-select-value-arrow", size: 16 }),
            o && /* @__PURE__ */ s(me, { content: o, theme: "dark", ...i })
          ]
        }
      )
    }
  ) });
}, oo = Te.memo(({
  data: e,
  multiple: t,
  level: n,
  expandedPath: r,
  onClick: o,
  onCheckedChange: i,
  isItemSelected: a,
  isItemIndeterminate: c
}) => {
  const l = F((d, h) => {
    d.stopPropagation(), o(h, n);
  }, [o, n]), u = F((d, h) => {
    d.children && h && h.stopPropagation(), i(d, !1);
  }, [i]);
  return /* @__PURE__ */ s("div", { className: "land-select-tree-drop-list", children: e == null ? void 0 : e.map((d) => {
    const h = r[n] === d.key, p = d.children && d.children.length > 0, f = a(d), k = c(d);
    return /* @__PURE__ */ m(
      "div",
      {
        className: `land-select-tree-drop-list-item ${h ? "expanded" : ""} ${f ? "selected" : ""}`,
        onClick: (v) => l(v, d),
        children: [
          /* @__PURE__ */ m("div", { className: "land-select-tree-drop-list-item-content", children: [
            t && /* @__PURE__ */ s(
              _o,
              {
                label: "",
                checked: f,
                indeterminate: k,
                onCheckedChange: (v, M) => u(d, M)
              }
            ),
            d.label
          ] }),
          p && /* @__PURE__ */ s(
            Z,
            {
              name: "arrow-triangle",
              className: `land-select-tree-drop-list-item-arrow ${h ? "expanded" : ""}`
            }
          )
        ]
      },
      d.key
    );
  }) });
});
oo.displayName = "TreeList";
const O3 = ({
  children: e,
  value: t,
  min: n,
  max: r,
  step: o,
  range: i,
  useDivider: a,
  prefix: c,
  suffix: l,
  showTooltip: u,
  tooltipPlacement: d,
  tooltipFormatter: h,
  height: p,
  thumbSize: f,
  defaultBg: k,
  activeBg: v,
  style: M,
  className: g,
  onChange: w,
  onStart: C,
  onEnd: x
}) => /* @__PURE__ */ s("div", { className: "land-slider", children: /* @__PURE__ */ s("div", { className: "land-slider-track" }) }), Nm = ({
  type: e = "empty",
  title: t,
  subTitle: n,
  titleLink: r,
  subTitleLink: o,
  button: i,
  onTiTleLinkClick: a,
  onSubTitleLinkClick: c,
  onButtonClick: l,
  buttonProps: u,
  emptyIcon: d,
  offlineIcon: h,
  className: p,
  style: f,
  titleLinkProps: k,
  subTitleLinkProps: v
}) => /* @__PURE__ */ m("div", { className: `land-state ${p}`, style: f, children: [
  e === "empty" && (d || /* @__PURE__ */ m(
    "svg",
    {
      width: "48",
      height: "48",
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "land-state-empty-icon",
      children: [
        /* @__PURE__ */ m("g", { clipPath: "url(#clip0_1578_7158)", children: [
          /* @__PURE__ */ s(
            "path",
            {
              d: "M43 30.5L36.5788 19.4923C36.2204 18.8778 35.5626 18.5 34.8513 18.5H13.1487C12.4374 18.5 11.7796 18.8778 11.4212 19.4923L5 30.5M43 30.5V40.5C43 41.6046 42.1046 42.5 41 42.5H7C5.89543 42.5 5 41.6046 5 40.5V30.5M43 30.5H5",
              stroke: "currentColor",
              "stroke-width": "3"
            }
          ),
          /* @__PURE__ */ s(
            "path",
            {
              d: "M24 12V6",
              stroke: "currentColor",
              "stroke-width": "3",
              strokeLinecap: "round"
            }
          ),
          /* @__PURE__ */ s(
            "path",
            {
              d: "M30.9995 12.7426L35.2422 8.5",
              stroke: "currentColor",
              "stroke-width": "3",
              strokeLinecap: "round"
            }
          ),
          /* @__PURE__ */ s(
            "path",
            {
              d: "M17.2426 12.7426L13 8.5",
              stroke: "currentColor",
              "stroke-width": "3",
              strokeLinecap: "round"
            }
          )
        ] }),
        /* @__PURE__ */ s("defs", { children: /* @__PURE__ */ s("clipPath", { id: "clip0_1578_7158", children: /* @__PURE__ */ s("rect", { width: "48", height: "48", fill: "white" }) }) })
      ]
    }
  )),
  e === "offline" && (h || /* @__PURE__ */ m(
    "svg",
    {
      width: "48",
      height: "48",
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "land-state-offline-icon",
      children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: "M44 18.9653C37.2253 12.545 28.1189 10.0059 19.5 11.3481",
            stroke: "currentColor",
            "stroke-width": "4",
            strokeLinecap: "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M38 25.799C35.2866 23.0855 31.9815 21.3243 28.5 20.5154",
            stroke: "currentColor",
            "stroke-width": "4",
            strokeLinecap: "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M10 25.799C11.3276 24.4714 12.7969 23.3717 14.3591 22.5",
            stroke: "currentColor",
            "stroke-width": "4",
            strokeLinecap: "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M16 32.3138C17.4388 30.875 19.1686 29.9048 21 29.4031",
            stroke: "currentColor",
            "stroke-width": "4",
            strokeLinecap: "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M24 40C25.3807 40 26.5 38.8807 26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M40 40L8 8",
            stroke: "currentColor",
            "stroke-width": "4",
            strokeLinecap: "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            d: "M4 18.9652C4.5888 18.4072 5.19522 17.8785 5.81741 17.3792C6.36642 16.9385 6.92771 16.5207 7.49999 16.1257",
            stroke: "currentColor",
            "stroke-width": "4",
            strokeLinecap: "round",
            "stroke-linejoin": "round"
          }
        )
      ]
    }
  )),
  /* @__PURE__ */ m("div", { className: "land-state-title", children: [
    t,
    r && /* @__PURE__ */ m(ue, { children: [
      "，",
      /* @__PURE__ */ s(
        tn,
        {
          className: "land-state-title-link",
          onClick: a,
          ...k,
          children: r
        }
      )
    ] })
  ] }),
  (n || o) && /* @__PURE__ */ m("div", { className: "land-state-subTitle", children: [
    n,
    /* @__PURE__ */ m(ue, { children: [
      "，",
      /* @__PURE__ */ s(
        tn,
        {
          className: "land-state-subTitle-link",
          onClick: c,
          ...v,
          children: o
        }
      )
    ] })
  ] }),
  i && /* @__PURE__ */ s(
    de,
    {
      className: "land-state-button",
      onClick: l,
      ...u,
      children: i
    }
  )
] }), Z3 = {
  linear: (e) => e,
  easeIn: (e) => e * e,
  easeOut: (e) => 1 - Math.pow(1 - e, 2),
  easeInOut: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
  bounce: (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  elastic: (e) => Math.pow(2, -10 * e) * Math.sin((e - 0.3 / 4) * (2 * Math.PI) / 0.3) + 1
}, Sm = ({
  value: e = 0,
  prefix: t,
  suffix: n,
  unit: r,
  trendIcon: o,
  animation: i = "none",
  animationConfig: a = {},
  precision: c = 0,
  style: l,
  className: u
}) => {
  const [d, h] = R(""), [p, f] = R(!1), [k, v] = R(!1), M = q(null), g = q(null), w = q(e), x = { ...{
    duration: 1e3,
    easing: "easeOut",
    delay: 0,
    loop: !1,
    loopInterval: 2e3
  }, ...a }, N = F((S) => c > 0 ? S.toFixed(c) : Math.floor(S).toString(), [c]), L = F(() => {
    M.current && (cancelAnimationFrame(M.current), M.current = null);
  }, []), y = F(() => {
    g.current && (clearTimeout(g.current), g.current = null);
  }, []), b = F((S, A) => {
    const O = x.duration / 1e3 * 60;
    let D = 0;
    const z = Z3[x.easing], T = () => {
      D++;
      const E = D / O, H = z(E), B = S + (A - S) * H;
      h(N(B)), D < O ? M.current = requestAnimationFrame(T) : (h(N(A)), M.current = null);
    };
    M.current = requestAnimationFrame(T);
  }, [x.duration, x.easing, N]);
  Y(() => {
    if (i === "none") {
      h(N(e));
      return;
    }
    return g.current = setTimeout(() => {
      switch (v(!0), i) {
        case "increase":
          b(0, e);
          break;
        case "decrease":
          b(e * 1.5, e);
          break;
        case "bounce":
          h(N(e)), f(!0);
          break;
        case "fade":
        case "slide":
        case "scale":
        case "flip":
          h(N(e)), f(!0);
          break;
        case "random":
          h(N(e)), f(!0);
          break;
        default:
          h(N(e));
      }
    }, x.delay), () => {
      y(), L();
    };
  }, [i, e, x.delay, x.duration, b, N, y, L]), Y(() => {
    if (!x.loop || i === "none") return;
    const S = () => {
      g.current = setTimeout(() => {
        f(!1), setTimeout(() => f(!0), 100), S();
      }, x.loopInterval);
    };
    return p && S(), () => y();
  }, [x.loop, x.loopInterval, p, i, y]), Y(() => () => {
    L(), y();
  }, [L, y]), Y(() => {
    w.current !== e && i !== "none" && (f(!1), setTimeout(() => f(!0), 50)), w.current = e;
  }, [e, i]);
  const j = X(() => N(e).split("").map((A) => A === "." ? "." : A === "-" ? "-" : parseInt(A, 10)), [e, N]), V = {
    bounce: {
      initial: { scale: 0.8, opacity: 0 },
      animate: {
        scale: [0.8, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          duration: 0.6,
          times: [0, 0.6, 1],
          ease: "easeOut"
        }
      }
    },
    fade: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
      }
    },
    slide: {
      initial: { x: -20, opacity: 0 },
      animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
      }
    },
    scale: {
      initial: { scale: 0.5, opacity: 0 },
      animate: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
      }
    },
    flip: {
      initial: { rotateX: -90, opacity: 0 },
      animate: {
        rotateX: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    }
  }, I = () => i === "bounce" ? V.bounce : i === "fade" ? V.fade : i === "slide" ? V.slide : i === "scale" ? V.scale : i === "flip" ? V.flip : V.fade;
  return /* @__PURE__ */ m("div", { className: `land-statistic ${u || ""}`, style: l, children: [
    t && /* @__PURE__ */ s("div", { className: "land-statistic-prefix", children: t }),
    /* @__PURE__ */ m("div", { className: "land-statistic-value", children: [
      /* @__PURE__ */ s(y4, { mode: "wait", children: i === "random" ? /* @__PURE__ */ s("div", { className: "flex items-center", children: j.map((S, A) => /* @__PURE__ */ s(
        "div",
        {
          className: "land-statistic-random",
          style: { height: "45px" },
          children: /* @__PURE__ */ s(
            we.div,
            {
              animate: { y: p ? -Number(S) * 45 : 0 },
              transition: {
                duration: 1.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              },
              className: "land-statistic-random-list",
              children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(($) => /* @__PURE__ */ s("div", { children: $ }, $))
            }
          )
        },
        `digit-${A}-${S}`
      )) }, "random") : i !== "none" && (i === "increase" || i === "decrease") ? /* @__PURE__ */ s(
        we.div,
        {
          layout: !0,
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.3, ease: "easeOut" },
          children: d
        },
        "number-animation"
      ) : i !== "none" ? /* @__PURE__ */ s(
        we.div,
        {
          initial: I().initial,
          animate: p ? I().animate : I().initial,
          exit: I().initial,
          children: d
        },
        `${i}-${e}`
      ) : /* @__PURE__ */ s(
        we.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.3 },
          children: d
        },
        "static"
      ) }),
      r && /* @__PURE__ */ s(
        we.div,
        {
          className: "land-statistic-unit",
          initial: { opacity: 0, x: 10 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.3, delay: 0.1 },
          children: r
        }
      )
    ] }),
    o && /* @__PURE__ */ m(
      we.div,
      {
        className: "land-statistic-trend-icon",
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.3, delay: 0.2 },
        children: [
          o === "up" && /* @__PURE__ */ s(
            Z,
            {
              name: "increase",
              strokeWidth: 0,
              color: "var(--color-success)"
            }
          ),
          o === "down" && /* @__PURE__ */ s(
            Z,
            {
              name: "increase",
              style: { transform: "rotate(180deg)" },
              strokeWidth: 0,
              color: "var(--color-error)"
            }
          ),
          o === "default" && /* @__PURE__ */ s(
            Z,
            {
              name: "increase",
              strokeWidth: 0,
              color: "var(--color-text-secondary)"
            }
          )
        ]
      }
    ),
    n && /* @__PURE__ */ s(
      we.div,
      {
        className: "land-statistic-suffix",
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.3, delay: 0.1 },
        children: n
      }
    )
  ] });
}, Vm = ({}) => /* @__PURE__ */ s("div", { children: "Swiper" }), ll = Te.memo(({ item: e, index: t, isActive: n, isFinished: r, onClick: o, direction: i }) => {
  const a = F(() => {
    o == null || o(e);
  }, [o, e]), c = F((u) => {
    (u.key === "Enter" || u.key === " ") && (u.preventDefault(), o == null || o(e));
  }, [o, e]), l = X(() => r ? /* @__PURE__ */ s(Z, { name: "check", size: 12 }) : t + 1, [r, t]);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-steps-item ${n ? "active" : ""} ${r ? "finished" : ""}`,
      onClick: a,
      onKeyDown: c,
      tabIndex: 0,
      role: "button",
      "aria-label": `步骤 ${t + 1}: ${e.title}`,
      "aria-current": n ? "step" : void 0,
      "aria-disabled": !1,
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: "land-steps-num",
            "aria-label": r ? "已完成" : `步骤 ${t + 1}`,
            children: l
          }
        ),
        /* @__PURE__ */ m("div", { className: "land-steps-title", children: [
          e.title,
          e.desc && /* @__PURE__ */ s("div", { className: "land-steps-desc", children: e.desc })
        ] })
      ]
    }
  );
});
ll.displayName = "StepsItem";
const jm = ({
  data: e = [],
  current: t,
  finished: n = [],
  onClick: r,
  useDivider: o = !0,
  dividerWidth: i = "32px",
  direction: a = "horizontal",
  style: c,
  className: l,
  children: u,
  ...d
}) => {
  const h = X(() => t !== void 0 ? t : e.length > 0 ? e[0].key : void 0, [t, e]), p = X(() => Array.isArray(e) ? e.filter((w) => w && typeof w == "object" && w.key !== void 0) : [], [e]);
  if (p.length === 0)
    return u ? /* @__PURE__ */ s(ue, { children: u }) : null;
  const k = X(() => h !== void 0 && p.some((w) => w.key === h), [h, p]) ? h : p[0].key, v = F((w) => w.finished !== void 0 ? w.finished : n.includes(w.key), [n]), M = X(() => ["land-steps", a === "vertical" ? "vertical" : "", l].filter(Boolean).join(" "), [a, l]), g = F(() => p.map((w, C) => {
    const x = k === w.key, N = v(w);
    return /* @__PURE__ */ m(nn, { children: [
      o && C !== 0 && /* @__PURE__ */ s(
        Re,
        {
          lineLength: i,
          style: a === "horizontal" ? { marginTop: "12px" } : { marginLeft: "8px" },
          direction: a === "vertical" ? "column" : "row"
        }
      ),
      /* @__PURE__ */ s(
        ll,
        {
          item: w,
          index: C,
          isActive: x,
          isFinished: N,
          onClick: r,
          direction: a
        }
      )
    ] }, w.key);
  }), [p, k, v, o, i, a, r]);
  return /* @__PURE__ */ s(
    "div",
    {
      className: M,
      style: c,
      role: "list",
      "aria-label": "步骤导航",
      ...d,
      children: g()
    }
  );
}, Y3 = ({
  checked: e,
  label: t,
  checkedLabel: n,
  icon: r,
  checkedIcon: o,
  tip: i,
  iconTip: a,
  tipProps: c,
  iconTipProps: l,
  onChange: u,
  dark: d,
  disabled: h,
  style: p,
  className: f = ""
}) => {
  const [k, v] = R(e);
  return Y(() => v(e), [e]), /* @__PURE__ */ m(
    "div",
    {
      className: `land-switch ${i ? "hover-pop" : ""} ${h ? "disabled" : ""}`,
      children: [
        /* @__PURE__ */ s(me, { content: i, theme: "dark", ...c }),
        /* @__PURE__ */ m(
          "div",
          {
            className: `land-switch-content ${d ? "dark" : ""} ${k ? "checked" : ""} ${f}`,
            style: p,
            onClick: (M) => {
              M.stopPropagation(), !h && (v(!k), u == null || u(k));
            },
            children: [
              /* @__PURE__ */ s("div", { className: "land-switch-bar", children: /* @__PURE__ */ s(we.div, { animate: { x: k ? 16 : 0 }, transition: { duration: 0.6, type: "spring" }, className: "land-switch-indicator", children: k ? o : r }) }),
              (t || n) && /* @__PURE__ */ s("div", { className: "land-switch-label", children: k ? n : t })
            ]
          }
        ),
        a && /* @__PURE__ */ m("div", { className: "land-switch-label-iconTip hover-pop", children: [
          /* @__PURE__ */ s(Z, { name: "info-stroke", size: 16 }),
          /* @__PURE__ */ s(me, { content: a, theme: "dark", ...l })
        ] })
      ]
    }
  );
};
function $m({
  width: e = "100%",
  checked: t,
  data: n,
  useDivider: r = !1,
  onChange: o,
  activeClassName: i = "",
  className: a = "",
  switchDisabled: c,
  style: l
}) {
  return /* @__PURE__ */ s(
    "div",
    {
      className: `land-tabs  ${a}`,
      style: { width: e, ...l },
      children: n == null ? void 0 : n.map((u, d) => {
        var h;
        return /* @__PURE__ */ m(nn, { children: [
          r && d !== 0 && /* @__PURE__ */ s(
            Re,
            {
              direction: "column",
              gap: 0,
              lineLength: "14px",
              className: `land-tabs-divider ${t !== u.key && t !== ((h = n[d - 1]) == null ? void 0 : h.key) ? "" : "hidden"}`
            }
          ),
          /* @__PURE__ */ m(
            "div",
            {
              className: `land-tabs-item 
               ${t === u.key ? `selected ${i}` : u.disabled || c ? "disabled" : ""}`,
              onClick: (p) => {
                p.stopPropagation(), !u.disabled && !c && (o == null || o(u.key, u));
              },
              children: [
                u.label,
                u.showIcon && /* @__PURE__ */ m("div", { className: "size-icon-16 fs-12 flex items-center color-icon-secondary hover-pop relative cursor-default", children: [
                  /* @__PURE__ */ s(Z, { name: "info-stroke", size: 16 }),
                  /* @__PURE__ */ s(me, { content: u.iconTip, theme: "dark" })
                ] })
              ]
            }
          )
        ] }, u.key);
      })
    }
  );
}
const _3 = ({
  children: e,
  icon: t,
  canDelete: n,
  onDelete: r,
  style: o,
  className: i,
  theme: a = "gray"
}) => /* @__PURE__ */ m(
  "div",
  {
    className: `land-tag land-tag--${a} ${i}`,
    style: o,
    children: [
      t,
      e,
      n && /* @__PURE__ */ s(
        Z,
        {
          name: "close",
          className: "land-tag-close",
          onClick: (c) => {
            c.stopPropagation(), r == null || r(c);
          }
        }
      )
    ]
  }
), Tm = ({
  tagData: e = [],
  placeholder: t = "按下回车以输入标签",
  width: n = "100%",
  maxLength: r = 5,
  highlightStr: o = [],
  highlightStyle: i = { background: "var(--color-primary-2)", color: "var(--color-primary-6)" },
  showClear: a = !0,
  onChange: c,
  onEnter: l,
  onFocus: u,
  onBlur: d,
  onClear: h,
  onDelete: p,
  tagStyle: f,
  tagClassName: k = "",
  className: v = "",
  style: M
}) => {
  const [g, w] = R(""), [C, x] = R(e), N = (L) => {
    C.length === r || !L || (x([...C, L]), w(""));
  };
  return Y(() => {
    const L = (y) => {
      y.code === "Backspace" && (C == null ? void 0 : C.length) > 0 && !g && (x((b) => b.slice(0, -1)), console.log(y.code));
    };
    return document.body.addEventListener("keydown", L), () => document.body.removeEventListener("keydown", L);
  }, [g, C]), /* @__PURE__ */ m(
    "div",
    {
      className: `land-tag-input ${a ? "widthClear" : ""} ${v}`,
      style: { width: typeof n == "number" ? `${n}px` : n, paddingLeft: (C == null ? void 0 : C.length) > 0 ? "4px" : "12px", ...M },
      children: [
        /* @__PURE__ */ m("div", { className: "land-tag-input-container", children: [
          C == null ? void 0 : C.map((L, y) => /* @__PURE__ */ s(_3, { className: `land-tag-input-tag ${k}`, canDelete: !0, onDelete: () => {
            x(C.filter((b) => b !== L)), p == null || p(L);
          }, style: f, children: L }, y)),
          /* @__PURE__ */ s(
            Gn,
            {
              type: "transparent",
              value: g,
              placeholder: t,
              onEnter: (L, y) => {
                N == null || N(L), l == null || l(C, y);
              },
              onBlur: (L) => {
                N == null || N(g), d == null || d(C, L);
              },
              onChange: (L, y) => {
                w(L), c == null || c(C, y);
              },
              className: "land-tag-input-input",
              onFocus: u,
              highlightStr: o,
              highlightStyle: i
            }
          )
        ] }),
        a && (C == null ? void 0 : C.length) > 0 && /* @__PURE__ */ s("div", { className: "land-input-clear-icon", onClick: () => {
          x([]), h == null || h();
        }, children: /* @__PURE__ */ s(Z, { name: "error-fill" }) })
      ]
    }
  );
}, Am = ({
  titleData: e,
  data: t = [],
  style: n,
  className: r = "",
  striped: o = !1,
  crossHighlight: i = !1,
  headFixed: a = !1,
  fixedColumns: c = 0
}) => {
  const [l, u] = R(null), [d, h] = R({ row: {}, col: {} }), p = q(null), f = q(null), k = (w, C) => {
    i && u({ row: w, col: C });
  }, v = () => {
    i && u(null);
  }, M = F(() => {
    if (i && l && p.current) {
      const w = p.current, C = w.querySelector("thead tr"), x = w.querySelectorAll("tbody tr");
      if (C && x.length > 0) {
        const N = C.getBoundingClientRect().height, L = x[0].getBoundingClientRect().height;
        let y = 0, b = 0;
        for (let j = 0; j < C.children.length; j++) {
          const I = C.children[j].getBoundingClientRect().width;
          if (j === l.col) {
            b = I;
            break;
          }
          y += I;
        }
        h({
          row: {
            top: `${N + l.row * L}px`,
            height: `${L}px`
          },
          col: {
            left: `${y}px`,
            width: `${b}px`
          }
        });
      }
    }
  }, [i, l]), g = F(() => {
    if (c > 0 && p.current) {
      const w = p.current, C = w.querySelector("thead tr");
      if (C) {
        const x = {};
        let N = 0;
        for (let y = 0; y < Math.min(c, C.children.length); y++) {
          const j = C.children[y].getBoundingClientRect().width;
          x[y] = {
            left: `${N}px`
          }, N += j;
        }
        const L = w.parentElement;
        L && Object.entries(x).forEach(([y, b]) => {
          L.style.setProperty(`--fixed-col-${y}-left`, b.left);
        });
      }
    }
  }, [c]);
  return Y(() => {
    g();
  }, [g]), Y(() => {
    c > 0 && requestAnimationFrame(() => {
      g();
    });
  }, [c, g]), Y(() => {
    M();
  }, [M]), Y(() => {
    if ((i || c > 0) && p.current)
      return f.current = new ResizeObserver(() => {
        l && M(), c > 0 && g();
      }), f.current.observe(p.current), () => {
        f.current && f.current.disconnect();
      };
  }, [i, c, l, M, g]), /* @__PURE__ */ m("div", { className: `land-table-wrapper ${i ? "land-table-wrapper--cross-highlight" : ""} ${a ? "land-table-wrapper--head-fixed" : ""} ${c > 0 ? "land-table-wrapper--fixed-columns" : ""} ${r}`, style: n, children: [
    /* @__PURE__ */ m("table", { ref: p, className: `land-table ${o ? "land-table--striped" : ""} ${a ? "land-table--head-fixed" : ""} ${c > 0 ? "land-table--fixed-columns" : ""}`, children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: e == null ? void 0 : e.map((w, C) => /* @__PURE__ */ s(
        "th",
        {
          className: C < c ? "land-table__cell--fixed" : "",
          children: w.title
        },
        C
      )) }) }),
      /* @__PURE__ */ s("tbody", { children: t.map((w, C) => /* @__PURE__ */ s("tr", { children: Object.values(w).map((x, N) => /* @__PURE__ */ s(
        "td",
        {
          "data-row": C,
          "data-col": N,
          className: N < c ? "land-table__cell--fixed" : "",
          onMouseEnter: () => k(C, N),
          onMouseLeave: v,
          children: x
        },
        N
      )) }, C)) })
    ] }),
    i && l && /* @__PURE__ */ m(ue, { children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: "land-table__row-overlay",
          style: d.row
        }
      ),
      /* @__PURE__ */ s(
        "div",
        {
          className: "land-table__col-overlay",
          style: d.col
        }
      )
    ] })
  ] });
}, Im = ({ data: e, direction: t = "column", icon: n }) => /* @__PURE__ */ s("div", { className: `land-timeline ${t === "row" ? "row" : ""}`, children: e == null ? void 0 : e.map((r, o) => /* @__PURE__ */ m("div", { className: `land-timeline-item ${t === "row" ? "row" : ""}`, children: [
  /* @__PURE__ */ m("div", { className: "land-timeline-indicator-wrapper", children: [
    r.icon || n || /* @__PURE__ */ s("div", { className: "land-timeline-indicator" }),
    o !== (e == null ? void 0 : e.length) - 1 && /* @__PURE__ */ s(Re, { direction: t })
  ] }),
  /* @__PURE__ */ m("div", { className: "land-timeline-content", children: [
    r.title && /* @__PURE__ */ s("div", { className: "land-timeline-title", children: r.title }),
    r.subTitle && /* @__PURE__ */ s("div", { className: "land-timeline-subTitle", children: r.subTitle }),
    r.desc && /* @__PURE__ */ s("div", { className: "land-timeline-desc", children: r.desc })
  ] })
] }, o)) }), Pm = ({
  title: e,
  type: t = "h1",
  prefix: n,
  sub: r,
  tip: o,
  style: i,
  className: a = "",
  onClick: c
}) => /* @__PURE__ */ m(
  "div",
  {
    className: `land-title ${a}`,
    style: i,
    onClick: () => c == null ? void 0 : c(),
    children: [
      n && /* @__PURE__ */ s("span", { className: "land-title-prefix", children: n }),
      t === "h1" && /* @__PURE__ */ s("h1", { children: e }),
      t === "h2" && /* @__PURE__ */ s("h2", { children: e }),
      t === "h3" && /* @__PURE__ */ s("h3", { children: e }),
      t === "h4" && /* @__PURE__ */ s("h4", { children: e }),
      o && /* @__PURE__ */ m("div", { className: "land-title-tip hover-pop", children: [
        /* @__PURE__ */ s(Z, { name: "info-stroke", stroke: "var(--color-text-secondary)" }),
        /* @__PURE__ */ s(me, { content: o, theme: "dark", style: { maxWidth: "200px" } })
      ] }),
      r && typeof r == "string" ? /* @__PURE__ */ s("div", { className: "land-title-sub", children: r }) : /* @__PURE__ */ s(ue, { children: r })
    ]
  }
), Hm = ({
  desc: e,
  fileType: t,
  onUpload: n,
  children: r,
  width: o = "100%",
  height: i = "100px",
  style: a,
  className: c = "",
  innerClassName: l = ""
}) => {
  const u = q(null), [d, h] = R(), [p, f] = R(), [k, v] = R(!1), M = (C, x) => {
    C.preventDefault(), v(!0), x && (f(x), new FileReader().readAsDataURL(x), h(URL.createObjectURL(x)), v(!1));
  };
  Y(() => {
    n == null || n(d, p);
  }, [d]);
  const [g, w] = R(!1);
  return /* @__PURE__ */ m(
    "label",
    {
      className: `land-uploader ${g ? "drag" : ""} ${c}`,
      style: {
        width: o,
        height: i,
        ...a
      },
      onDragOver: (C) => {
        w(!0), C.preventDefault();
      },
      onDrop: (C) => {
        w(!1), M(C, C.dataTransfer.files[0]);
      },
      onDragLeave: () => w(!1),
      children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: u,
            type: "file",
            accept: t,
            className: `land-uploader-input ${l}`,
            onChange: (C) => {
              M(C, C.target.files[0]);
            }
          }
        ),
        r || (k ? /* @__PURE__ */ s(ue, { children: "上传中" }) : g ? /* @__PURE__ */ s("div", { className: "land-uploader-desc", children: "释放即可上传" }) : /* @__PURE__ */ m(ue, { children: [
          /* @__PURE__ */ s("div", { className: "land-uploader-icon", children: /* @__PURE__ */ s(Z, { name: "upload" }) }),
          e && /* @__PURE__ */ s("div", { className: "land-uploader-desc", children: e })
        ] }))
      ]
    }
  );
}, Rm = ({
  children: e,
  content: t,
  url: n,
  width: r = 120,
  height: o = 64,
  gap: i = [180, 120],
  offset: a = [50, 50],
  rotate: c = -22,
  fontSize: l = "var(--font-content-m)",
  fontColor: u = "var(--color-text-quaternary)",
  fontWeight: d = "normal",
  fontFamily: h = "sans-serif",
  zIndex: p = 9,
  style: f,
  className: k
}) => {
  const v = q(null), M = q(null), [g, w] = R({ width: 0, height: 0 }), C = F(() => {
    const { width: b, height: j } = g;
    if (b === 0 || j === 0) return [];
    const [V, I] = i, [S, A] = a, $ = Math.max(V, r), P = Math.max(I, o), O = b - r, D = j - o, z = Math.max(0, Math.min(S, O)), T = Math.max(0, Math.min(A, D)), E = Math.ceil((O - z) / $) + 1, H = Math.ceil((D - T) / P) + 1, B = [];
    for (let U = 0; U < H; U++)
      for (let K = 0; K < E; K++) {
        const _ = z + K * $, Q = T + U * P;
        _ + r <= b && Q + o <= j && B.push({
          id: `${U}-${K}`,
          x: _,
          y: Q
        });
      }
    if (B.length < 4) {
      const U = [], K = (b - r) / 2, _ = (j - o) / 2;
      U.push({
        id: "center",
        x: K,
        y: _
      });
      const Q = 20;
      return [
        { x: Q, y: Q },
        { x: b - r - Q, y: Q },
        { x: Q, y: j - o - Q },
        {
          x: b - r - Q,
          y: j - o - Q
        }
      ].forEach((te, ie) => {
        te.x >= 0 && te.y >= 0 && U.push({
          id: `corner-${ie}`,
          x: te.x,
          y: te.y
        });
      }), [...B, ...U];
    }
    return B;
  }, [g, i, a, r, o]), x = X(() => C(), [C]), N = F(() => {
    if (v.current) {
      const { offsetWidth: b, offsetHeight: j } = v.current;
      w({ width: b, height: j });
    }
  }, []);
  Y(() => {
    N();
  }, [N]), Y(() => (M.current && (M.current.disconnect(), M.current = null), M.current = new ResizeObserver(() => {
    N();
  }), v.current && M.current.observe(v.current), () => {
    M.current && (M.current.disconnect(), M.current = null);
  }), [N]), Y(() => () => {
    M.current && (M.current.disconnect(), M.current = null);
  }, []);
  const L = X(
    () => ({
      width: `${r}px`,
      height: `${o}px`,
      color: u,
      fontSize: `${l}px`,
      fontWeight: d,
      fontFamily: h,
      zIndex: p,
      transform: `rotate(${c}deg)`
    }),
    [r, o, u, l, d, h, p, c]
  ), y = F(
    (b) => {
      const j = {
        ...L,
        left: `${b.x}px`,
        top: `${b.y}px`
      };
      return /* @__PURE__ */ s("div", { className: `land-watermark-item ${n ? "img" : ""}`, style: j, children: n ? /* @__PURE__ */ s("img", { src: n, alt: "watermark" }) : t }, b.id);
    },
    [L, n, t]
  );
  return /* @__PURE__ */ m(
    "div",
    {
      ref: v,
      className: `land-watermark  ${k ?? ""}`,
      style: f,
      children: [
        e,
        /* @__PURE__ */ s("div", { className: "land-watermark-content", children: x.map(y) })
      ]
    }
  );
}, U3 = ({
  curPercentage: e = 0,
  bufferPercentage: t = 0,
  activeBg: n = "var(--color-primary-6)",
  onClick: r,
  onMove: o,
  onMouseEnter: i,
  onMouseLeave: a,
  onDragStart: c,
  onDragEnd: l
}) => {
  const u = q(null), [d, h] = R(), [p, f] = R(!1), [k, v] = R(!1), [M, g] = R(0);
  Y(() => {
    const y = (j) => {
      j.forEach((V) => {
        h(V.contentRect.width);
      });
    }, b = new ResizeObserver(y);
    return u.current && b.observe(u.current), () => b.disconnect();
  }, []);
  const w = F((y) => {
    y.stopPropagation(), y.preventDefault();
    const b = y.currentTarget.getBoundingClientRect();
    if (b) {
      const j = (y.clientX - b.left) / b.width;
      g(j), k && (r == null || r(j, y)), o == null || o(j, y.clientX - b.left, b.width, y);
    }
  }, [k, r, o]), C = F((y) => {
    y.preventDefault(), v(!0), c == null || c();
    const b = y.currentTarget.getBoundingClientRect();
    if (b) {
      const j = (y.clientX - b.left) / b.width;
      r == null || r(j, y);
    }
  }, [r, c]), x = F(() => {
    k && (v(!1), l == null || l());
  }, [k, l]), N = F((y) => {
    g(0), f(!1), k && (v(!1), l == null || l()), a == null || a(y);
  }, [k, l, a]), L = F(() => {
    f(!0);
  }, []);
  return Y(() => {
    if (k) {
      const y = () => {
        v(!1), l == null || l();
      };
      return document.addEventListener("mouseup", y), () => {
        document.removeEventListener("mouseup", y);
      };
    }
  }, [k, l]), /* @__PURE__ */ m(z3, { ref: u, className: `land-video-progress-bar ${p ? "hover" : ""}`, children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: "land-video-progress-bar-list",
        onMouseMove: w,
        onMouseEnter: i ? (y) => i(M, y.clientX - y.currentTarget.getBoundingClientRect().left, y.currentTarget.getBoundingClientRect().width, y) : void 0,
        onMouseDown: C,
        onMouseUp: x,
        onMouseLeave: N,
        onMouseOver: L,
        children: [
          /* @__PURE__ */ s("div", { className: "land-video-progress-bar default" }),
          /* @__PURE__ */ s("div", { className: "land-video-progress-bar buffer", style: { transform: `scaleX(${t})` } }),
          /* @__PURE__ */ s("div", { className: "land-video-progress-bar hover", style: { transform: `scaleX(${M})` } }),
          /* @__PURE__ */ s("div", { className: "land-video-progress-bar marker", style: { transform: `scaleX(${e})`, backgroundColor: n } })
        ]
      }
    ),
    /* @__PURE__ */ s("div", { className: "land-video-progress-bar-thumb", style: { transform: `translateX(${e * (d || 0)}px)`, backgroundColor: n } })
  ] });
}, z3 = un.div`
  position: relative;
  width: 100%;
  height: 0.25rem;
  border-radius: 2px;
  .land-video-progress-bar-list{
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.2s linear;
  }
  .land-video-progress-bar.default{
    background-color: rgba(255,255,255,0.36);
  }
  .land-video-progress-bar.buffer{
    background-color: rgba(255,255,255,0.6);
  }
  .land-video-progress-bar.hover{
    background-color: rgba(255,255,255,0.8);
  }
  .land-video-progress-bar{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-origin: left center;
    pointer-events: none;
  }
  .land-video-progress-bar-thumb{
    position: absolute;
    left: -0.5rem;
    top: -0.375rem;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    opacity: 0;
    transition: opacity 0.2s linear;
    pointer-events: none;
  }
  &.hover{
    .land-video-progress-bar-list{
      transform: scaleY(2);
    }
    .land-video-progress-bar-thumb{
        opacity: 1;
      }
  }
`, X3 = ({
  rateData: e = [
    { key: 1, value: 0.5 },
    { key: 2, value: 1 },
    { key: 3, value: 1.25 },
    { key: 4, value: 1.5 },
    { key: 5, value: 2 },
    { key: 6, value: 3 }
  ],
  rateValue: t = 1,
  onRateChange: n,
  loop: r = !1,
  onLoopChange: o
}) => /* @__PURE__ */ m(G3, { children: [
  /* @__PURE__ */ m(Si, { gap: 8, column: !0, children: [
    /* @__PURE__ */ s("span", { children: "倍数" }),
    /* @__PURE__ */ s(j0, { gap: 4, type: Be.ColumnRepeat, repeatNum: 3, children: e == null ? void 0 : e.map((i, a) => /* @__PURE__ */ m(
      K3,
      {
        className: `${t === i.value ? "active" : ""}`,
        onClick: (c) => n == null ? void 0 : n(i.value, i, c),
        children: [
          i.value,
          " x"
        ]
      },
      i.key ?? a
    )) })
  ] }),
  /* @__PURE__ */ m(Si, { justify: "space-between", width: "100%", children: [
    "自动循环",
    /* @__PURE__ */ s(Y3, { checked: r, dark: !0, onChange: o })
  ] })
] }), G3 = un.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  white-space: nowrap;
`, K3 = un.div`
  padding: 2px 0;
  width: 48px;
  font-size: 0.75rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &.active {
    color: rgba(255, 255, 255, 1);
    border-color: rgba(255, 255, 255, 1);
  }
`, zi = (e) => {
  if (!e) return "00:00";
  if (typeof e == "string") return e;
  const t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), r = Math.round(e % 60), o = t < 10 ? "0" + t : t, i = n < 10 ? "0" + n : n, a = r < 10 ? "0" + r : r;
  return t > 0 ? o + ":" + i + ":" + a : i + ":" + a;
}, Em = ({
  src: e,
  ratio: t,
  radius: n = "0px",
  forwardSecond: r = 5,
  useKeyImg: o,
  onFullWidthChange: i,
  useKeyControls: a,
  autoPlay: c,
  className: l = "",
  style: u,
  videoClassName: d = "",
  videoStyle: h,
  showControls: p,
  usePrevEpisode: f,
  useNextEpisode: k,
  onPrevEpisodeClick: v,
  onNextEpisodeClick: M
}) => {
  const g = q(null), w = q(null), C = q(null), [x, N] = R(1), [L, y] = R(0), [b, j] = R(0), [V, I] = R(0), [S, A] = R(!0), [$, P] = R(!1), [O, D] = R(!1), [z, T] = R(!1), [E, H] = R(!1), [B, U] = R(!1);
  q(null);
  const K = F(() => {
    if (g.current && !z) {
      const G = g.current;
      if (j(G.currentTime), G.buffered.length > 0) {
        const ee = G.buffered.end(G.buffered.length - 1);
        I(ee);
      }
      g.current.currentTime === 0 && A(!0);
    }
  }, [z]), _ = F(async () => {
    if (g.current)
      try {
        g.current.paused ? (await g.current.play(), H(!0)) : (g.current.pause(), H(!1));
      } catch (G) {
        console.error("播放失败:", G), H(!1);
      }
  }, []), [Q, oe] = R(0), [te, ie] = R(!1), ve = X(() => (x || Number(t) || 1.7777777777777777) < 1 ? 100 : 200, [x, t]), ge = F((G, ee, Ce) => {
    if (!o) return;
    const De = w.current;
    De && (De.currentTime = G * L, ee < ve / 2 ? oe(0) : ee < Ce - ve / 2 ? oe(ee - ve / 2) : oe(Ce - ve));
  }, [te]), be = F(() => {
    T(!0);
  }, []), tr = F(() => {
    T(!1);
  }, []), nr = F((G) => {
    if (!g.current || !L) return;
    const ee = G * L;
    g.current.currentTime = ee, j(ee), g.current.paused && S && _();
  }, [L, S, _]), [Ye, hn] = R(100), [pn, dl] = R(100), [Ge, fn] = R(!0), qo = q(null), [Jo, Qo] = R(!1), ul = F((G) => {
    g.current && (hn(G), g.current.volume = G / 100, G > 0 && Ge && fn(!1));
  }, [Ge]);
  Y(() => {
    Ye !== 0 && (dl(Ye), fn(!1), Qo(Ye < 100)), Ye === 0 && fn(!0);
  }, [Ye]);
  const rr = F(() => {
    g.current && (Ge ? pn > 0 ? (g.current.volume = pn / 100, hn(pn)) : (g.current.volume = 1, hn(100)) : (g.current.volume = 0, hn(0)), fn(!Ge));
  }, [Ge, pn]);
  Y(() => {
    g.current && (g.current.pause(), H(!1), j(0), I(0), y(0), A(!0), P(!1), D(!1), sr(!1), ar(!1), lr(!1), ie(!1)), w.current && (w.current.currentTime = 0);
  }, [e]), Ac(qo, () => {
    Jo && Qo(!1);
  });
  const [Wo, hl] = R(1), mn = F((G, ee) => {
    hl(ee.value), g.current && (console.log(G, g.current.playbackRate), g.current.playbackRate = G);
  }, []), [ht, es] = R(!1), ts = async () => {
    if (!g.current) return;
    const G = g.current;
    try {
      G !== document.pictureInPictureElement ? await G.requestPictureInPicture() : await document.exitPictureInPicture();
    } catch (ee) {
      console.error("Error with Picture-in-Picture:", ee);
    }
  }, [pt, ns] = R(!1), [et, rs] = R(!1), gn = F(() => {
    if (!g.current) return;
    const G = g.current;
    G.requestFullscreen && G.requestFullscreen();
  }, []), [or, sr] = R(!1), [ir, ar] = R(!1), [cr, lr] = R(!1);
  Y(() => {
    if (or) {
      const G = setTimeout(() => {
        sr(!1);
      }, 800);
      return () => clearTimeout(G);
    }
  }, [or]), Y(() => {
    if (ir) {
      const G = setTimeout(() => {
        ar(!1);
      }, 800);
      return () => clearTimeout(G);
    }
  }, [ir]), Y(() => {
    if (cr) {
      const G = setTimeout(() => {
        lr(!1);
      }, 800);
      return () => clearTimeout(G);
    }
  }, [cr]);
  const dr = F((G) => {
    if (!g.current || !a) return;
    const ee = g.current;
    if (!(document.activeElement !== ee && !document.fullscreenElement))
      switch (G.preventDefault(), G.code) {
        case "ArrowLeft":
          if (ee.paused) return;
          const Ce = Math.max(0, ee.currentTime - r);
          ee.currentTime = Ce, j(Ce), sr(!0);
          break;
        case "ArrowRight":
          if (ee.paused) return;
          const De = Math.min(ee.duration, ee.currentTime + r);
          ee.currentTime = De, j(De), ar(!0);
          break;
        case "Space":
          G.preventDefault(), _(), lr(!0);
          break;
        case "KeyM":
          G.preventDefault(), rr();
          break;
        case "KeyF":
          G.preventDefault(), gn();
          break;
      }
  }, [a, r, _, rr, gn]);
  Y(() => {
    if (a)
      return document.addEventListener("keydown", dr), () => {
        document.removeEventListener("keydown", dr);
      };
  }, [a, dr]), Y(() => {
    if (!g.current) return;
    const G = g.current, ee = () => {
      H(!0), A(!1);
    }, Ce = () => {
      H(!1);
    }, De = () => {
      H(!1), A(!0);
    };
    return G.addEventListener("play", ee), G.addEventListener("pause", Ce), G.addEventListener("ended", De), () => {
      G.removeEventListener("play", ee), G.removeEventListener("pause", Ce), G.removeEventListener("ended", De);
    };
  }, []);
  const pl = F((G) => {
    const ee = G.target, Ce = ee.clientWidth / ee.clientHeight;
    N(Ce), y(ee.duration), j(0), I(0), A(!0), P(!1), D(!1);
  }, []), ur = F(() => {
    if (!C.current) return;
    const ee = C.current.offsetWidth, Ce = 120, De = 60, ml = f || k ? 80 : 0, gl = Ce + De + ml, vl = ee < gl + 240 + 30;
    U(vl);
  }, [f, k]);
  Y(() => {
    ur();
    const G = new ResizeObserver(() => {
      ur();
    });
    return C.current && G.observe(C.current), () => {
      G.disconnect();
    };
  }, [ur]);
  const fl = X(() => t || (x && x > 0 ? x.toString() : "auto"), [t, x]);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-video ${$ ? "error" : ""} ${et ? "fullView" : ""} ${l}`,
      style: { aspectRatio: fl, ...u },
      children: [
        $ ? /* @__PURE__ */ s(Vc, { type: "error", title: "视频错误", direction: "column", noBg: !0 }) : /* @__PURE__ */ s(ue, { children: /* @__PURE__ */ s(
          "video",
          {
            ref: g,
            src: e,
            loop: ht,
            autoPlay: c,
            muted: Ge,
            onTimeUpdate: K,
            onWaiting: () => D(!0),
            onCanPlay: () => D(!1),
            onError: () => P(!0),
            onLoadedMetadata: pl,
            style: { borderRadius: n, aspectRatio: t || "auto", objectFit: t ? "cover" : "contain", ...h },
            className: `land-video ${d}`
          }
        ) }),
        !$ && /* @__PURE__ */ s(
          Ml,
          {
            onClick: _,
            className: "land-video-affix-container",
            bcOption: p ? {
              content: /* @__PURE__ */ m(
                "div",
                {
                  className: `land-video-controls ${p ? "show" : ""}`,
                  style: { borderRadius: n },
                  children: [
                    /* @__PURE__ */ m(ue, { children: [
                      /* @__PURE__ */ s(
                        U3,
                        {
                          curPercentage: b / L,
                          bufferPercentage: V / L,
                          onClick: nr,
                          onMouseEnter: o ? (G, ee, Ce) => {
                            ie(!0), ge(G, ee, Ce);
                          } : void 0,
                          onMove: o ? (G, ee, Ce) => ge == null ? void 0 : ge(G, ee, Ce) : void 0,
                          onMouseLeave: o ? () => ie(!1) : void 0,
                          onDragStart: be,
                          onDragEnd: tr
                        }
                      ),
                      o && /* @__PURE__ */ s(
                        "div",
                        {
                          className: "land-video-controls-keyImg-container",
                          style: { transform: `translateX(${Q}px)`, opacity: te ? 1 : 0 },
                          children: o && /* @__PURE__ */ s(
                            "video",
                            {
                              ref: w,
                              src: e,
                              muted: !0,
                              preload: "metadata",
                              style: { width: ve, height: ve / (x || Number(t) || 16 / 9), objectFit: "cover" },
                              onLoadedMetadata: () => {
                                w.current && g.current && (w.current.currentTime = g.current.currentTime);
                              }
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ m("div", { className: "land-video-controls-container", ref: C, children: [
                      /* @__PURE__ */ m("div", { className: "land-video-controls-left", children: [
                        f && /* @__PURE__ */ s(
                          "a",
                          {
                            className: "land-video-controls-button prev",
                            role: "button",
                            onClick: v,
                            children: /* @__PURE__ */ s(Z, { name: "arrow-nav", size: 20 })
                          }
                        ),
                        /* @__PURE__ */ s(
                          "button",
                          {
                            className: "land-video-controls-button play",
                            "aria-keyshortcuts": "k",
                            "data-title-no-tooltip": "播放",
                            "aria-label": "播放 键盘快捷键 (space)",
                            title: "播放 (space)",
                            onClick: _,
                            children: E ? /* @__PURE__ */ s(Z, { name: "video-play", size: 20 }) : /* @__PURE__ */ s(Z, { name: "video-pause", size: 32 })
                          }
                        ),
                        k && /* @__PURE__ */ s(
                          "a",
                          {
                            className: "land-video-controls-button next",
                            role: "button",
                            onClick: M,
                            title: "下一个",
                            children: /* @__PURE__ */ s(Z, { name: "arrow-nav", size: 20 })
                          }
                        ),
                        /* @__PURE__ */ m("div", { className: "land-video-controls-time", children: [
                          zi(b),
                          " /",
                          " ",
                          zi(L)
                        ] }),
                        /* @__PURE__ */ m(
                          "div",
                          {
                            className: "land-video-controls-volume-container",
                            children: [
                              /* @__PURE__ */ s(
                                "button",
                                {
                                  className: "land-video-controls-button volume",
                                  onClick: rr,
                                  title: `${Ge ? "取消静音" : "静音"} (M)`,
                                  children: Ge ? /* @__PURE__ */ s(
                                    Z,
                                    {
                                      name: "volume-muted",
                                      size: 20
                                    }
                                  ) : /* @__PURE__ */ s(
                                    Z,
                                    {
                                      name: "volume",
                                      className: `${Ye < 50 ? "small" : ""}`,
                                      size: 20
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ s(
                                "div",
                                {
                                  ref: qo,
                                  className: `land-video-volume-slider ${Jo ? "show" : ""}`,
                                  children: /* @__PURE__ */ s(
                                    O3,
                                    {
                                      height: 4,
                                      value: Ye,
                                      max: 100,
                                      step: 1,
                                      onChange: (G) => ul(G),
                                      defaultBg: "rgba(255,255,255,0.68)",
                                      activeBg: "rgba(255,255,255,1)",
                                      thumbSize: 12
                                    }
                                  )
                                }
                              )
                            ]
                          }
                        )
                      ] }),
                      B ? /* @__PURE__ */ s("div", { className: "land-video-controls-right", children: /* @__PURE__ */ s(
                        cn,
                        {
                          trigger: "click",
                          placement: "top",
                          alignment: "left",
                          dropContent: /* @__PURE__ */ m("div", { className: "land-video-controls-dropdown", children: [
                            /* @__PURE__ */ m("div", { className: "land-video-controls-dropdown-section", children: [
                              /* @__PURE__ */ s("div", { className: "land-video-controls-dropdown-section-title", children: "播放速度" }),
                              /* @__PURE__ */ s("div", { className: "land-video-controls-dropdown-section-content", children: [0.5, 0.75, 1, 1.25, 1.5, 2].map((G) => /* @__PURE__ */ m(
                                "button",
                                {
                                  className: `land-video-controls-dropdown-speed-btn ${Wo === G ? "active" : ""}`,
                                  onClick: () => mn(G, { value: G }),
                                  children: [
                                    G,
                                    "x"
                                  ]
                                },
                                G
                              )) })
                            ] }),
                            /* @__PURE__ */ s("div", { className: "land-video-controls-dropdown-section", children: /* @__PURE__ */ m(
                              "button",
                              {
                                className: `land-video-controls-dropdown-toggle-btn ${ht ? "active" : ""}`,
                                onClick: () => es(!ht),
                                children: [
                                  /* @__PURE__ */ s(Z, { name: "loop", size: 16 }),
                                  /* @__PURE__ */ s("span", { children: "循环播放" }),
                                  /* @__PURE__ */ s("div", { className: `land-video-controls-dropdown-toggle ${ht ? "active" : ""}` })
                                ]
                              }
                            ) }),
                            /* @__PURE__ */ s("div", { className: "land-video-controls-dropdown-divider" }),
                            /* @__PURE__ */ m("div", { className: "land-video-controls-dropdown-buttons", children: [
                              /* @__PURE__ */ m(
                                "button",
                                {
                                  className: "land-video-controls-button small-screen",
                                  onClick: ts,
                                  children: [
                                    /* @__PURE__ */ s(Z, { name: "video-small-screen", size: 20 }),
                                    /* @__PURE__ */ s("span", { children: "画中画" })
                                  ]
                                }
                              ),
                              i && /* @__PURE__ */ m(
                                "button",
                                {
                                  className: "land-video-controls-button full-width",
                                  onClick: () => {
                                    ns(!pt), i == null || i(!pt);
                                  },
                                  children: [
                                    /* @__PURE__ */ s(
                                      Z,
                                      {
                                        name: "video-full-width",
                                        size: 20,
                                        reverse: pt
                                      }
                                    ),
                                    /* @__PURE__ */ s("span", { children: "宽屏模式" })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ m(
                                "button",
                                {
                                  className: "land-video-controls-button full-view",
                                  onClick: () => rs(!et),
                                  children: [
                                    et ? /* @__PURE__ */ s(Z, { name: "zoom-out", size: 20 }) : /* @__PURE__ */ s(Z, { name: "zoom-in", size: 20 }),
                                    /* @__PURE__ */ s("span", { children: et ? "退出网页全屏" : "网页全屏" })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ m(
                                "button",
                                {
                                  className: "land-video-controls-button full-screen",
                                  onClick: gn,
                                  children: [
                                    /* @__PURE__ */ s(Z, { name: "zoom-in-arrow", size: 20 }),
                                    /* @__PURE__ */ s("span", { children: "全屏模式" })
                                  ]
                                }
                              )
                            ] })
                          ] }),
                          children: /* @__PURE__ */ s("button", { className: "land-video-controls-button more", children: /* @__PURE__ */ s(Z, { name: "more", size: 20 }) })
                        }
                      ) }) : /* @__PURE__ */ m("div", { className: "land-video-controls-right", children: [
                        /* @__PURE__ */ m("button", { className: "land-video-controls-button setting hover-pop", children: [
                          /* @__PURE__ */ s(Z, { name: "setting", size: 20 }),
                          /* @__PURE__ */ s("div", { className: "land-video-setting-panel", children: /* @__PURE__ */ s("div", { className: "land-video-setting-content", children: /* @__PURE__ */ s(
                            X3,
                            {
                              rateValue: Wo,
                              onRateChange: (G, ee) => mn == null ? void 0 : mn(G, ee),
                              loop: ht,
                              onLoopChange: () => es(!ht)
                            }
                          ) }) })
                        ] }),
                        /* @__PURE__ */ m(
                          "button",
                          {
                            className: "land-video-controls-button small-screen hover-pop",
                            onClick: ts,
                            children: [
                              /* @__PURE__ */ s(
                                Z,
                                {
                                  name: "video-small-screen",
                                  size: 20
                                }
                              ),
                              /* @__PURE__ */ s(me, { content: "画中画模式", theme: "dark" })
                            ]
                          }
                        ),
                        i && /* @__PURE__ */ m(
                          "button",
                          {
                            className: "land-video-controls-button full-width hover-pop",
                            onClick: () => {
                              ns(!pt), i == null || i(!pt);
                            },
                            children: [
                              /* @__PURE__ */ s(
                                Z,
                                {
                                  name: "video-full-width",
                                  size: 20,
                                  reverse: pt
                                }
                              ),
                              /* @__PURE__ */ s(me, { content: "宽屏模式", theme: "dark" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ m(
                          "button",
                          {
                            className: "land-video-controls-button full-view hover-pop",
                            onClick: () => rs(!et),
                            children: [
                              et ? /* @__PURE__ */ s(Z, { name: "zoom-out", size: 20 }) : /* @__PURE__ */ s(Z, { name: "zoom-in", size: 20 }),
                              /* @__PURE__ */ s(
                                me,
                                {
                                  content: et ? "退出网页全屏模式" : "网页全屏模式",
                                  theme: "dark"
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ m(
                          "button",
                          {
                            className: "land-video-controls-button full-screen hover-pop",
                            onClick: gn,
                            title: "全屏模式 (F)",
                            children: [
                              /* @__PURE__ */ s(Z, { name: "zoom-in-arrow", size: 20 }),
                              /* @__PURE__ */ s(me, { content: "全屏模式", theme: "dark" })
                            ]
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ),
              gap: 0,
              hoverShow: !0
            } : null,
            centerOption: {
              content: O && !S ? /* @__PURE__ */ s(Sc, { size: 32, color: "white", strokeSize: 4 }) : /* @__PURE__ */ s("div", { className: "land-video-tags-container", children: E ? /* @__PURE__ */ s(Z, { name: "video-play", size: 20 }) : /* @__PURE__ */ s(Z, { name: "video-pause", size: 32 }) }),
              style: {
                opacity: cr || O || !E ? 1 : 0,
                pointerEvents: "none"
              }
            },
            lcOption: {
              content: /* @__PURE__ */ m("div", { className: "land-video-tags-container", children: [
                /* @__PURE__ */ s(Z, { name: "arrow-double", className: "back", size: 28 }),
                r,
                "秒"
              ] }),
              style: { opacity: or ? 1 : 0 }
            },
            rcOption: {
              content: /* @__PURE__ */ m("div", { className: "land-video-tags-container", children: [
                /* @__PURE__ */ s(Z, { name: "arrow-double", className: "front", size: 28 }),
                r,
                "秒"
              ] }),
              style: { opacity: ir ? 1 : 0 }
            }
          }
        )
      ]
    }
  );
}, Dm = ({
  placeholder: e = "请输入",
  value: t,
  onChange: n,
  maxHeight: r = 80
}) => {
  const [o, i] = R(40), [a, c] = R(32), l = q(null);
  return Y(() => {
    l.current && (i(l.current.offsetWidth + 2), l.current.offsetHeight <= r && c(l.current.offsetHeight));
  }, [e, t]), /* @__PURE__ */ m("div", { className: "land-auto-width-height-textarea", style: { maxHeight: `${r}px` }, children: [
    /* @__PURE__ */ s("div", { ref: l, className: "land-auto-width-height-textarea-holder", children: (t == null ? void 0 : t.trimEnd()) || (e == null ? void 0 : e.trimEnd()) }),
    /* @__PURE__ */ s(
      "textarea",
      {
        style: { width: o, height: a },
        className: "land-auto-width-height-textarea-input",
        placeholder: e,
        value: t,
        onChange: (u) => n == null ? void 0 : n(u.target.value, u)
      }
    )
  ] });
}, Bm = ({
  type: e = "input",
  value: t = "",
  onChange: n,
  height: r = "auto",
  maxHeight: o,
  placeholder: i,
  className: a = "",
  style: c
}) => {
  const [l, u] = R(!1), [d, h] = R(t), p = q(null);
  Y(() => {
    h(t);
  }, [t]);
  const f = () => {
    u(!0), setTimeout(() => {
      if (p.current) {
        p.current.focus();
        const w = p.current.value.length;
        p.current.setSelectionRange(w, w), p.current.scrollTop = p.current.scrollHeight;
      }
    }, 0);
  }, k = () => {
    u(!1), n && d !== t && n(d);
  }, v = (w) => {
    w.key === "Enter" && !w.shiftKey && (w.preventDefault(), k()), w.key === "Escape" && (h(t), u(!1));
  }, M = (w) => {
    h(w.target.value);
  }, g = () => {
    const w = {};
    return r !== "auto" && (w.height = `${r}px`), o && (w.maxHeight = `${o}px`), w;
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: `double-click-input ${a}`,
      onDoubleClick: f,
      style: c,
      children: l ? e === "input" ? /* @__PURE__ */ s(
        "input",
        {
          ref: p,
          type: "text",
          value: d,
          onChange: M,
          onBlur: k,
          onKeyDown: v,
          placeholder: i
        }
      ) : /* @__PURE__ */ s(
        "textarea",
        {
          ref: p,
          value: d,
          onChange: M,
          onBlur: k,
          onKeyDown: v,
          placeholder: i,
          style: g()
        }
      ) : /* @__PURE__ */ s("div", { className: `display-text ${e} ${d ? "" : "placeholder"}`, style: e === "textarea" ? g() : {}, children: d || i })
    }
  );
}, Fm = ({
  type: e = "1",
  ratio: t = 1,
  gap: n = 2,
  style: r,
  className: o = "",
  gridStyle: i,
  gridClassName: a = "",
  children: c
}) => {
  const l = X(() => {
    const d = e == null ? void 0 : e.split("-")[0];
    return Number(d) ? Number(d) : 1;
  }, [e]), u = X(() => t > 1 ? "horizontal" : t < 1 ? "vertical" : "square", [t]);
  return /* @__PURE__ */ m("div", { className: `land-grid-template ${u} type-${e} ${o}`, style: { gap: n, aspectRatio: t, ...r }, children: [
    c,
    !c && /* @__PURE__ */ s(ue, { children: Array.from({ length: l }).map((d, h) => /* @__PURE__ */ s("div", { className: `land-grid-template-item ${a}`, style: i }, h)) })
  ] });
}, q3 = [], J3 = Gi(
  ({
    highlightString: e = q3,
    highlightBg: t = "var(--color-error-light)",
    highlightColor: n = "var(--color-error)",
    formatHighlightString: r,
    className: o,
    style: i,
    inputClassName: a,
    inputStyle: c,
    contentClassName: l,
    contentStyle: u,
    value: d = "",
    onScroll: h,
    onChange: p,
    textAreaRef: f,
    placeholder: k = "请输入",
    disabled: v,
    autoResize: M,
    ...g
  }, w) => {
    const C = q(null), x = q(null), N = F(() => {
      !C.current || !x.current || (C.current.scrollTop = x.current.scrollTop);
    }, []), L = F(
      (V) => {
        console.log(1), h == null || h(V), N();
      },
      [h]
    ), y = F(
      (V) => {
        p == null || p(V), M ? b() : N();
      },
      [p]
    );
    Cl(w, () => ({
      focus: () => {
        x != null && x.current && x.current.focus();
      }
      // 你可以在这里添加更多的属性或方法
    })), Y(() => {
      !x.current || !f || (f.current = x.current);
    }, []);
    const b = () => {
      x.current && (x.current.style.height = "auto", x.current.style.height = `${x.current.scrollHeight}px`);
    }, j = X(() => {
      const V = [];
      let I = "", S = "default", A = 0;
      for (let P = 0; P < d.length; P++)
        I += d[P], V[A] = {
          type: S,
          msg: I
        }, e.some((D) => I.includes(D) ? (S = D, !0) : !1) && (V[A].msg = I.split(S)[0], V.push({
          type: S,
          msg: S
        }), A += 2, I = "", S = "default");
      const $ = V.map(
        (P) => {
          var O;
          return (O = P.msg) != null && O.includes(`
`) ? Object.assign(P, {
            msg: /* @__PURE__ */ s(ue, { children: P.msg })
          }) : P;
        }
      );
      return d.endsWith(`
`) && $.push({ type: "default", msg: /* @__PURE__ */ s("br", {}) }), $;
    }, [d, e]);
    return /* @__PURE__ */ m("div", { className: `land-highlight-textarea ${o}`, style: i, children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: `land-highlight-textarea-content ${l}`,
          style: u,
          ref: C,
          children: j.length > 0 ? j.map((V, I) => V.type === "default" ? V.msg : r ? r(V.msg) : /* @__PURE__ */ s(
            "span",
            {
              className: "radius-4",
              style: {
                color: n,
                backgroundColor: t
              },
              children: V.msg
            },
            V.msg + I
          )) : /* @__PURE__ */ s("span", { className: "land-highlight-textarea-placeholder", children: k })
        }
      ),
      /* @__PURE__ */ s(
        "textarea",
        {
          id: "land-highlight-textarea",
          ...g,
          className: `land-highlight-textarea-input ${a}`,
          style: c,
          value: d,
          onScroll: M ? void 0 : L,
          onChange: y,
          ref: x,
          placeholder: k,
          disabled: v
        }
      )
    ] });
  }
), Q3 = (e, t) => {
  const n = [];
  let r = "", o = "default", i = 0;
  for (let a = 0; a < e.length; a++)
    r += e[a], n[i] = {
      type: o,
      msg: r
    }, t.some((l) => r.includes(l) ? (o = l, !0) : !1) && (n[i].msg = r.split(o)[0], n.push({
      type: o,
      msg: o
    }), i += 2, r = "", o = "default");
  return n;
}, Om = ({
  value: e = "",
  showNum: t = !0,
  maxLength: n = 300,
  fail: r,
  disabledInput: o = !1,
  onChange: i,
  onFocus: a,
  onBlur: c,
  placeholder: l,
  highlightString: u = [],
  formatHighlightString: d,
  className: h = "",
  style: p,
  ...f
}) => {
  const k = X(() => Q3(e, u), [e, u]), v = q(null), M = q(null), g = F(() => {
    !v.current || !M.current || (v.current.scrollLeft = M.current.scrollLeft);
  }, []), w = F(() => {
    v.current && (v.current.scrollLeft = 0), c == null || c();
  }, []), [C, x] = R(!1);
  return /* @__PURE__ */ m("div", { className: `land-highlight-input ${h}`, style: p, children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: `land-highlight-input-container  ${r || Number(e == null ? void 0 : e.length) > n ? "error" : ""} ${C ? "hover" : ""}`,
        onMouseOver: () => x(!0),
        onMouseOut: () => x(!1),
        children: [
          /* @__PURE__ */ m("div", { className: "land-highlight-input-content", children: [
            e ? /* @__PURE__ */ s(
              "div",
              {
                ref: v,
                className: `land-highlight-input-hight-string ${o ? "disabled" : ""}`,
                children: k.map((N, L) => N.type === "default" ? N.msg : d ? d(N.msg) : /* @__PURE__ */ s("span", { className: "land-highlight-input-hight-string-item", children: N.msg }, N.msg + L))
              }
            ) : /* @__PURE__ */ s(
              "div",
              {
                className: "land-highlight-input-placeholder",
                children: l
              }
            ),
            /* @__PURE__ */ s(
              "input",
              {
                ref: M,
                id: "highlight-input",
                type: "text",
                className: "land-highlight-input-input",
                disabled: o,
                value: e,
                onChange: (N) => {
                  g == null || g(), i == null || i(N);
                },
                onScroll: () => g(),
                onFocus: () => a == null ? void 0 : a(),
                onBlur: w,
                ...f
              }
            )
          ] }),
          (Number(e == null ? void 0 : e.length) > n || t) && /* @__PURE__ */ m("div", { className: "land-highlight-input-operation", children: [
            /* @__PURE__ */ s(
              "div",
              {
                className: `land-highlight-input-operation-text ${Number(e == null ? void 0 : e.length) > n ? "error" : ""}`,
                children: e == null ? void 0 : e.length
              }
            ),
            "/",
            n
          ] })
        ]
      }
    ),
    r && /* @__PURE__ */ s("p", { className: "land-highlight-input-fail", children: r })
  ] });
}, Zm = ({
  value: e,
  prefix: t,
  ...n
}) => {
  const r = q(null), [o, i] = R(0), a = q(null), [c, l] = R(0);
  return Y(() => {
    var u, d;
    (u = r.current) != null && u.clientWidth ? i((d = r.current) == null ? void 0 : d.clientWidth) : i(0);
  }, [t]), Y(() => {
    const u = document.querySelector(".land-prefix-input .prefix-textarea");
    if (r.current && u) {
      const d = (h) => {
        r.current.style = `top: ${1 - Number(h.target.scrollTop)}px`;
      };
      return u == null || u.addEventListener("scroll", d), () => {
        u == null || u.removeEventListener("scroll", d);
      };
    }
  }, [t]), Y(() => {
    a.current && l(a.current.clientWidth);
  }, [a]), /* @__PURE__ */ m("div", { ref: a, className: "land-prefix-input", children: [
    /* @__PURE__ */ m(
      "div",
      {
        ref: r,
        style: { width: t ? "" : "0px" },
        className: `land-prefix-value-input-prefix ${t ? "withPrefix" : ""}`,
        children: [
          "[",
          /* @__PURE__ */ s("p", { className: "land-prefix-value-input-prefix-text", children: t }),
          "]"
        ]
      }
    ),
    /* @__PURE__ */ s(
      J3,
      {
        style: {
          textIndent: o <= c ? `${o + 4}px` : "0px"
        },
        className: "prefix-textarea",
        value: e,
        ...n
      }
    )
  ] });
}, Ym = ({
  data: e = [],
  activeGroup: t,
  value: n,
  onChange: r,
  keyboardControl: o = !1
}) => {
  if (e.length <= 1) return null;
  const [i, a] = R(n ?? ""), [c, l] = R(t ?? "");
  Y(() => a(n ?? ""), [n]), Y(() => l(t ?? ""), [t]);
  const u = q(), d = X(() => {
    var v, M;
    return (M = (v = e == null ? void 0 : e.filter((g) => g.id === c)[0]) == null ? void 0 : v.mediaData) == null ? void 0 : M.map((g) => g.id);
  }, [e, c]), h = X(() => e == null ? void 0 : e.map((v) => v.id), [e]), p = X(() => d == null ? void 0 : d.indexOf(i), [d, i]), f = X(() => h == null ? void 0 : h.indexOf(c), [h, c]), k = (v) => e.slice(0, v).reduce((M, g) => M + g.mediaData.length, 0);
  return Y(() => {
    if (n === void 0 || f === -1 || p === -1) return;
    let v = k(f);
    d.length <= 6 ? u.current && u.current.scrollTo({ top: (v - 1) * 96 + f * 8 + (v - f) * 1, behavior: "smooth" }) : p <= 5 ? u.current && u.current.scrollTo({ top: (v - 1) * 96 + f * 8 + (v - f) * 1, behavior: "smooth" }) : f === 0 ? u.current && u.current.scrollTo({ top: (v + Math.floor(p / 7) * 7) * 96 + f * 8 + (v - f + Math.floor(p / 7) * 7) * 1, behavior: "smooth" }) : u.current && u.current.scrollTo({ top: (v + 6 + Math.floor((p - 6) / 7) * 7) * 96 + f * 8 + (v - f + 6 + Math.floor((p - 6) / 7) * 7) * 1, behavior: "smooth" });
  }, [p, f]), Y(() => {
    if (!o) return;
    const v = (M) => {
      var g, w, C, x, N, L, y, b, j;
      if (!(M.repeat || f === -1 || p === -1))
        if (["TEXTAREA", "INPUT"].indexOf(M.target.tagName) === -1 && M.preventDefault(), M.code === "ArrowUp" || M.key === "ArrowUp") {
          if (p > 0)
            a(d[p - 1]), r == null || r((g = e[f]) == null ? void 0 : g.mediaData[p - 1], e[f]);
          else if (f > 0) {
            l(h[f - 1] ?? "");
            const V = (C = (w = e == null ? void 0 : e.filter((I) => I.id === h[f - 1])[0]) == null ? void 0 : w.mediaData) == null ? void 0 : C.length;
            a((N = (x = e[f - 1]) == null ? void 0 : x.mediaData[V - 1]) == null ? void 0 : N.id), r == null || r((L = e[f - 1]) == null ? void 0 : L.mediaData[V - 1], e[f - 1]);
          }
        } else (M.code === "ArrowDown" || M.key === "ArrowDown") && (p < (d == null ? void 0 : d.length) - 1 ? (a(d[p + 1]), r == null || r((y = e[f]) == null ? void 0 : y.mediaData[p + 1], e[f])) : f < h.length - 1 && (l(h[f + 1] ?? ""), a((b = e[f + 1]) == null ? void 0 : b.mediaData[0].id), r == null || r((j = e[f + 1]) == null ? void 0 : j.mediaData[0], e[f + 1])));
    };
    return window.addEventListener("keydown", v), () => {
      window.removeEventListener("keydown", v);
    };
  }, [i, c, o]), Y(() => {
    const v = document.querySelector(".currentPreviewCard");
    v && v.scrollIntoView({ behavior: "smooth" });
  }, []), /* @__PURE__ */ s("div", { className: "land-swiper-media-preview", onClick: (v) => v.stopPropagation(), children: /* @__PURE__ */ s(
    "div",
    {
      ref: u,
      className: "land-swiper-media-preview-content",
      children: e == null ? void 0 : e.map((v, M) => {
        var g;
        return /* @__PURE__ */ s(
          "div",
          {
            className: `land-swiper-media-preview-group ${v.id === t ? "active" : ""}`,
            children: (g = v.mediaData) == null ? void 0 : g.map((w, C) => /* @__PURE__ */ m(ue, { children: [
              C !== 0 && /* @__PURE__ */ s(Re, { gap: 8 }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `land-swiper-media-preview-item ${n === w.id ? "active" : ""}`,
                  onClick: () => {
                    r == null || r(w, v);
                  },
                  children: /* @__PURE__ */ s(
                    T0,
                    {
                      url: w.url,
                      ratio: 1,
                      style: { width: "80px", borderRadius: "8px" },
                      imgStyle: { objectFit: "cover", borderRadius: "8px" }
                    }
                  )
                }
              )
            ] }, w.id ?? C))
          },
          v.id ?? M
        );
      })
    }
  ) });
};
export {
  Be as GridType,
  Z as Icon,
  Ml as LandAffixContainer,
  Vc as LandAlert,
  rm as LandAnchor,
  Yo as LandAudio,
  om as LandAutoContainer,
  Dm as LandAutoWidthHeightTextarea,
  sm as LandBadge,
  im as LandBreadCrumb,
  de as LandButton,
  C0 as LandCalendar,
  _o as LandCheck,
  am as LandCheckbox,
  cm as LandCheckedContainer,
  lm as LandCollapse,
  um as LandColorPicker,
  dm as LandContent,
  hm as LandDatePicker,
  pm as LandDialog,
  Re as LandDivider,
  Bm as LandDoubleClickInput,
  fm as LandDrawer,
  cn as LandDropdown,
  mm as LandEllipsis,
  Si as LandFlex,
  gm as LandFooter,
  j0 as LandGrid,
  Fm as LandGridTemplate,
  vm as LandHeader,
  Om as LandHighlightInput,
  J3 as LandHighlightTextarea,
  T0 as LandImage,
  Gn as LandInput,
  km as LandLayout,
  tn as LandLink,
  Sc as LandLoading,
  Ec as LandMenu,
  Lm as LandMessage,
  Ie as LandNumberInput,
  wm as LandPagination,
  ym as LandPopConfirm,
  me as LandPopOver,
  Zm as LandPrefixValueInput,
  Cm as LandProgress,
  F3 as LandRadio,
  Mm as LandRadioGroup,
  xm as LandRate,
  Ic as LandSelect,
  bm as LandSelectTree,
  $0 as LandSkeleton,
  O3 as LandSlider,
  Nm as LandState,
  Sm as LandStatistic,
  jm as LandSteps,
  Vm as LandSwiper,
  Ym as LandSwiperMediaPreview,
  Y3 as LandSwitch,
  Am as LandTable,
  $m as LandTabs,
  _3 as LandTag,
  Tm as LandTagInput,
  Im as LandTimeline,
  Pm as LandTitle,
  Hm as LandUploader,
  Em as LandVideo,
  Rm as LandWatermark,
  Ac as useClickOutside,
  zi as useFormateTime,
  Q3 as useGetHighlightStr
};
//# sourceMappingURL=index.es.js.map
