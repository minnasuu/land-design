var Ml = Object.defineProperty;
var Cl = (e, t, n) => t in e ? Ml(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var gt = (e, t, n) => Cl(e, typeof t != "symbol" ? t + "" : t, n);
import { jsxs as m, jsx as s, Fragment as pe } from "react/jsx-runtime";
import * as uo from "react";
import je, { useMemo as K, useState as E, useEffect as Z, createContext as Ht, useRef as q, useLayoutEffect as xl, useId as ho, useContext as ye, useInsertionEffect as Qi, useCallback as O, Children as bl, isValidElement as Nl, forwardRef as Wi, Fragment as an, createElement as ea, Component as Vl, useDebugValue as ls, useImperativeHandle as Sl } from "react";
const $l = ({
  ltOption: e,
  rtOption: t,
  rtOption2: n,
  lbOption: r,
  rbOption: o,
  tcOption: i,
  bcOption: a,
  centerOption: c,
  lcOption: l,
  rcOption: d,
  customOption: u,
  disabled: h,
  onClick: p,
  children: f,
  className: k,
  style: v,
  ...y
}) => {
  const g = K(
    () => [
      { option: e, placement: "lt" },
      { option: t, placement: "rt" },
      { option: n, placement: "rt" },
      { option: r, placement: "lb" },
      { option: o, placement: "rb" },
      { option: l, placement: "lc" },
      { option: d, placement: "rc" },
      { option: i, placement: "tc" },
      { option: a, placement: "bc" },
      { option: c, placement: "center" },
      { option: u, placement: "custom" }
    ],
    [e, t, r, o, l, d, i, a, c, u]
  ), [L, w] = E(!1), [b, V] = E(!1), M = (j) => j.hoverShow ? L ? 1 : 0 : j.hoverHide && b ? 0 : 1;
  Z(() => {
    const j = (A) => {
      w(!1), V(!1), A.stopPropagation();
    };
    return document.body.addEventListener("wheel", j), () => {
      document.body.removeEventListener("wheel", j);
    };
  }, []);
  const x = "var(--padding-m)", C = (j, A, I) => {
    const F = A !== void 0 ? A : x;
    switch (j) {
      case "lt":
      case "lb":
      case "lc":
        return F;
      case "rt":
      case "rb":
      case "rc":
        return "auto";
      case "tc":
      case "bc":
      case "center":
        return "50%";
      case "custom":
        return I;
      default:
        return "auto";
    }
  }, $ = (j, A) => {
    const I = A !== void 0 ? A : x;
    switch (j) {
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
        return I;
      default:
        return "auto";
    }
  }, S = (j, A, I) => {
    const F = A !== void 0 ? A : x;
    switch (j) {
      case "lt":
      case "rt":
      case "tc":
        return F;
      case "lb":
      case "rb":
      case "bc":
        return "auto";
      case "lc":
      case "rc":
      case "center":
        return "50%";
      case "custom":
        return I;
      default:
        return "auto";
    }
  }, T = (j, A) => {
    const I = A !== void 0 ? A : x;
    switch (j) {
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
        return I;
      default:
        return "auto";
    }
  }, N = (j) => {
    switch (j) {
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
      onClick: (j) => p == null ? void 0 : p(j),
      onMouseOver: () => {
        h || (w(!0), V(!0));
      },
      onMouseLeave: () => {
        w(!1), V(!1);
      },
      onWheel: (j) => j.stopPropagation(),
      ...y,
      children: [
        f,
        g == null ? void 0 : g.map(
          (j, A) => {
            var I;
            return j.option ? /* @__PURE__ */ s(
              "div",
              {
                style: {
                  left: C(j.placement, j.option.gap, j.option.left || 0),
                  right: $(j.placement, j.option.gap),
                  top: S(j.placement, j.option.gap, j.option.top || 0),
                  bottom: T(j.placement, j.option.gap),
                  transform: N(j.placement),
                  opacity: M(j.option),
                  zIndex: j.option.zIndex || 2,
                  animation: j.option.hoverShow && L ? j.option.showAnimation : "none",
                  ...j.option.style
                },
                className: `land-affix-container-item ${j.option.hoverShow ? "hoverShow" : ""} ${j.placement} absolute ${j.option.className ?? ""}`,
                onClick: (F) => {
                  var B, z;
                  F.stopPropagation(), (z = (B = j.option) == null ? void 0 : B.onClick) == null || z.call(B, F);
                },
                children: (I = j.option) == null ? void 0 : I.content
              },
              A
            ) : null;
          }
        )
      ]
    }
  );
}, Tl = ({
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
), jl = ({
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
), Al = ({
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
), Pl = ({
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
), Il = ({
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
), Hl = ({
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
), El = ({
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
), Dl = ({
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
), Bl = ({
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
), Ol = ({
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
), Fl = ({
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
    className: `setting ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s("path", { d: "M18.2838 43.1708C14.9327 42.1731 11.9498 40.3208 9.58787 37.8665C10.469 36.8222 11 35.4729 11 33.9996C11 30.6859 8.31371 27.9996 5 27.9996C4.79955 27.9996 4.60139 28.0095 4.40599 28.0287C4.13979 26.7272 4 25.3798 4 23.9996C4 21.909 4.32077 19.8933 4.91579 17.999C4.94381 17.9994 4.97188 17.9996 5 17.9996C8.31371 17.9996 11 15.3133 11 11.9996C11 11.0483 10.7786 10.1488 10.3846 9.34963C12.6975 7.19902 15.5205 5.58954 18.6521 4.72266C19.6444 6.66771 21.6667 7.99965 24 7.99965C26.3333 7.99965 28.3556 6.66771 29.3479 4.72266C32.4795 5.58954 35.3025 7.19902 37.6154 9.34963C37.2214 10.1488 37 11.0483 37 11.9996C37 15.3133 39.6863 17.9996 43 17.9996C43.0281 17.9996 43.0562 17.9994 43.0842 17.999C43.6792 19.8933 44 21.909 44 23.9996C44 25.3798 43.8602 26.7272 43.594 28.0287C43.3986 28.0095 43.2005 27.9996 43 27.9996C39.6863 27.9996 37 30.6859 37 33.9996C37 35.4729 37.531 36.8222 38.4121 37.8665C36.0502 40.3208 33.0673 42.1731 29.7162 43.1708C28.9428 40.7515 26.676 38.9996 24 38.9996C21.324 38.9996 19.0572 40.7515 18.2838 43.1708Z", stroke: e, "stroke-width": n, strokeLinejoin: "round" }),
      /* @__PURE__ */ s("path", { d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z", stroke: e, "stroke-width": n, strokeLinejoin: "round" })
    ]
  }
), Yl = ({
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
), _l = ({
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
), Ul = ({
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
), zl = ({
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
), Xl = ({
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
), Kl = ({
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
), Gl = ({
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
), ql = ({
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
), Jl = ({
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
), Ql = ({
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
), Wl = ({
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
), ed = ({
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
), td = ({
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
), nd = ({
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
), rd = ({
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
), od = ({
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
), sd = ({
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
] }), id = ({
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
), ad = ({
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
), ld = ({
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
), Nd = ({
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
), Ad = ({
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
    className: `code ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s("path", { d: "M16 13L4 25.4322L16 37", stroke: e, "stroke-width": n, strokeLinecap: "round", "stroke-linejoin": "round" }),
      /* @__PURE__ */ s("path", { d: "M32 13L44 25.4322L32 37", stroke: e, "stroke-width": n, strokeLinecap: "round", "stroke-linejoin": "round" }),
      /* @__PURE__ */ s("path", { d: "M28 13L21 37", stroke: e, "stroke-width": n, strokeLinecap: "round" })
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
), _d = ({
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
), Ud = ({
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
), Xd = ({
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
), Kd = ({
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
), Gd = ({
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
), qd = ({
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
), Qd = ({
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
), Wd = ({
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
), ta = ({
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
), eu = ({
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
), ru = ({
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
), ou = ({
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
), su = ({
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
), iu = ({
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
), au = ({
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
), uu = ({
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
), hu = ({
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
), mu = ({
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
), gu = ({
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
), vu = ({
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
), ku = ({
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
), wu = ({
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
), yu = ({
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
), Mu = ({
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
), Cu = ({
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
), xu = ({
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
), bu = ({
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
), Nu = ({
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
), Vu = ({
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
), Su = ({
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
), $u = ({
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
), Tu = ({
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
), ju = ({
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
), Au = ({
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
), zu = ({
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
), Qu = ({
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
), n1 = ({
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
), r1 = ({
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
), s1 = ({
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
), a1 = ({
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
), c1 = ({
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
), l1 = ({
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
), d1 = ({
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
), f1 = ({
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
), m1 = ({
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
), k1 = ({
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
), L1 = ({
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
), w1 = ({
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
), y1 = ({
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
), M1 = ({
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
), C1 = ({
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
), x1 = ({
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
), b1 = ({
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
), N1 = ({
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
), V1 = ({
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
), S1 = ({
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
), $1 = ({
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
), T1 = ({
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
), j1 = ({
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
), A1 = ({
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
), P1 = ({
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
), I1 = ({
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
), H1 = ({
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
), R1 = ({
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
), E1 = ({
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
), D1 = ({
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
), B1 = ({
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
), O1 = ({
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
), F1 = ({
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
), Z1 = ({
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
), Y1 = ({
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
), _1 = ({
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
), U1 = ({
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
), z1 = ({
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
), X1 = ({
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
), K1 = ({
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
), G1 = ({
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
), q1 = ({
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
), J1 = ({
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
), Q1 = ({
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
), W1 = ({
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
), eh = ({
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
), nh = ({
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
), rh = ({
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
), oh = ({
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
), sh = ({
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
), Lh = ({
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
), wh = ({
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
), Ch = ({
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
), xh = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = ""
}) => /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", width: t, height: t, viewBox: "0 0 16 16", fill: "none", style: n, className: r, children: /* @__PURE__ */ s("path", { d: "M14.0726 5.46403C13.5517 5.78293 13.1202 6.22878 12.8186 6.75984C12.5169 7.2909 12.3549 7.88981 12.3478 8.50053C12.3498 9.18788 12.5535 9.85953 12.9335 10.4323C13.3135 11.005 13.8532 11.4538 14.4857 11.7228C14.2363 12.5274 13.8672 13.2899 13.3909 13.9846C12.7093 14.9658 11.9966 15.9469 10.9122 15.9469C9.82777 15.9469 9.54887 15.3169 8.29917 15.3169C7.08047 15.3169 6.64667 15.9676 5.65517 15.9676C4.66367 15.9676 3.97177 15.0587 3.17647 13.9433C2.12594 12.3808 1.54858 10.5483 1.51367 8.66573C1.51367 5.56733 3.52767 3.92523 5.51057 3.92523C6.56407 3.92523 7.44197 4.61713 8.10297 4.61713C8.73297 4.61713 9.71417 3.88383 10.9122 3.88383C11.5281 3.86793 12.1386 4.00375 12.6897 4.27931C13.2408 4.55487 13.7157 4.96172 14.0726 5.46403ZM10.3442 2.57223C10.8723 1.95099 11.1712 1.16735 11.1911 0.352226C11.192 0.244769 11.1816 0.137514 11.1601 0.0322266C10.2529 0.12084 9.41408 0.553201 8.81557 1.24063C8.28238 1.83711 7.97217 2.59982 7.93767 3.39913C7.93807 3.49633 7.94846 3.59324 7.96867 3.68833C8.04019 3.70185 8.11279 3.70877 8.18557 3.70903C8.60365 3.67576 9.01059 3.55783 9.38167 3.3624C9.75275 3.16698 10.0802 2.89814 10.3442 2.57223Z", fill: e }) }), bh = {
  // Navigation
  home: Tl,
  "home-fill": jl,
  application: Al,
  more: Pl,
  "more-line": Il,
  search: Ql,
  // Interface
  refresh: Hl,
  female: Rl,
  male: El,
  "preview-open": Dl,
  "preview-close": Bl,
  avatar: Ol,
  tag: Fl,
  setting: Zl,
  "config-setting": _l,
  collection: Ul,
  share: zl,
  translate: Xl,
  light: Kl,
  dark: ql,
  "light-fill": Gl,
  "dark-fill": Jl,
  "setting-fill": Yl,
  // Media
  image: Wl,
  "video-play": ed,
  "video-pause": td,
  volume: nd,
  "volume-muted": rd,
  "video-small-screen": od,
  "video-full-width": sd,
  loop: id,
  // File
  file: ad,
  download: cd,
  upload: ld,
  "web-add": dd,
  announcement: ud,
  "audio-file": hd,
  book: pd,
  clipboard: fd,
  document: md,
  email: Id,
  "email-download": gd,
  "email-push": vd,
  "email-success": kd,
  "email-fail": Ld,
  "email-open": Hd,
  "file-add": wd,
  "code-file": yd,
  "star-file": Md,
  "text-file": Cd,
  "text-scan": Dd,
  folder: xd,
  "code-folder": bd,
  "folder-download": Nd,
  "folder-add": Vd,
  "folder-upload": Sd,
  "formatting-brush": $d,
  instruction: Td,
  "list-view": jd,
  link: Ad,
  log: Pd,
  "note-pad": Rd,
  schedule: Ed,
  "web-page": Bd,
  plan: Od,
  calendar: Fd,
  code: Zd,
  // Ecommerce
  coupon: Yd,
  ticket: _d,
  "bank-card": Ud,
  consume: zd,
  commodity: Xd,
  dollar: Kd,
  // State
  "check-stroke": Gd,
  "check-fill": qd,
  check: Jd,
  "error-stroke": Qd,
  "error-fill": Wd,
  error: ta,
  "info-stroke": eu,
  "info-fill": tu,
  info: nu,
  "attention-stroke": ru,
  "attention-fill": ou,
  attention: su,
  "question-stroke": iu,
  "question-fill": au,
  question: cu,
  "hourglass-empty": lu,
  "hourglass-full": du,
  increase: uu,
  // Operate
  "switch-gear": hu,
  toggle: pu,
  reload: fu,
  undo: mu,
  sort: gu,
  "sort-descending": vu,
  "sort-ascending": ku,
  back: Lu,
  "last-step": wu,
  "last-step-fill": yu,
  "next-step": Mu,
  "next-step-fill": Cu,
  ahead: xu,
  drag: bu,
  add: Nu,
  dec: Vu,
  "square-add": Ou,
  "dash-add": Fu,
  clear: Su,
  delete: $u,
  copy: Tu,
  close: ju,
  "color-picker": Au,
  "zoom-in-arrow": Pu,
  "zoom-out-arrow": Iu,
  "zoom-in": Hu,
  "zoom-out": Ru,
  "zoom-in-btn": Du,
  "zoom-out-btn": Bu,
  out: Eu,
  adjustment: Zu,
  "alphabetical-sorting": Yu,
  "alphabetical-sorting-reverse": _u,
  brightness: Uu,
  layer: sh,
  "layer-front": zu,
  "layer-back": Xu,
  "clear-formate": Ku,
  edit: Gu,
  "clip-edit": qu,
  filter: Ju,
  lock: Qu,
  unlock: Wu,
  "merge-cells": e1,
  "split-cells": t1,
  "cursor-move": n1,
  "cursor-move-fill": r1,
  "line-break": o1,
  quote: s1,
  scan: i1,
  like: a1,
  "like-fill": c1,
  star: l1,
  "star-fill": d1,
  pen: u1,
  // Arrow
  "arrow-line": vh,
  "arrow-double": kh,
  arrow: Lh,
  "arrow-triangle": wh,
  "arrow-to": yh,
  "arrow-nav": Mh,
  // Device
  camera: Ch,
  apple: xh,
  // Style
  "align-bottom": h1,
  "align-top": p1,
  "align-left": f1,
  "align-right": m1,
  "align-horizontally": g1,
  "align-vertically": v1,
  "text-align-left": k1,
  "text-align-right": L1,
  "text-align-center": w1,
  "text-align-justify": y1,
  "text-align-middle": M1,
  "align-bottom-center": C1,
  "align-bottom-left": x1,
  "align-bottom-right": b1,
  "align-horizontal-bottom": N1,
  "align-horizontal-center": V1,
  "align-horizontal-top": S1,
  "align-left-bottom": $1,
  "align-left-center": T1,
  "align-left-top": j1,
  "align-right-bottom": A1,
  "align-right-center": P1,
  "align-right-top": I1,
  "align-top-center": H1,
  "align-top-left": R1,
  "align-top-right": E1,
  "align-vertical-left": B1,
  "align-vertical-center": D1,
  "align-vertical-right": O1,
  "flip-horizontally": F1,
  "flip-vertically": Z1,
  "font-size": Y1,
  "line-height": _1,
  "text-bold": fh,
  "text-italic": mh,
  "text-underline": gh,
  "line-width": U1,
  "title-h1": z1,
  "title-h2": X1,
  "title-h3": K1,
  "indent-left": G1,
  "indent-right": q1,
  "drop-shadow-up": J1,
  "drop-shadow-down": Q1,
  "drop-shadow-left": W1,
  "drop-shadow-right": eh,
  "inner-shadow-up": th,
  "inner-shadow-down": nh,
  "inner-shadow-left": rh,
  "inner-shadow-right": oh,
  "check-list": ih,
  "alphabet-list": ah,
  "checkbox-list": ch,
  "radio-list": lh,
  "number-list": dh,
  mask: uh,
  "delete-strike": hh,
  tail: ph
}, Y = ({ name: e, ...t }) => {
  const n = bh[e];
  return n ? /* @__PURE__ */ s(n, { ...t }) : (console.warn(`Icon "${e}" not found`), /* @__PURE__ */ s(ta, { ...t }));
}, po = Ht({});
function fo(e) {
  const t = q(null);
  return t.current === null && (t.current = e()), t.current;
}
const mo = typeof window < "u", na = mo ? xl : Z, Kn = /* @__PURE__ */ Ht(null);
function go(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function vo(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Ue = (e, t, n) => n > t ? t : n < e ? e : n;
let Rt = () => {
}, ze = () => {
};
process.env.NODE_ENV !== "production" && (Rt = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, ze = (e, t) => {
  if (!e)
    throw new Error(t);
});
const Xe = {}, ra = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function oa(e) {
  return typeof e == "object" && e !== null;
}
const sa = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function ko(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Te = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Nh = (e, t) => (n) => t(e(n)), cn = (...e) => e.reduce(Nh), Jt = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class Lo {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return go(this.subscriptions, t), () => vo(this.subscriptions, t);
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
const He = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Fe = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function ia(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ds = /* @__PURE__ */ new Set();
function wo(e, t, n) {
  e || ds.has(t) || (console.warn(t), ds.add(t));
}
const aa = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Vh = 1e-7, Sh = 12;
function $h(e, t, n, r, o) {
  let i, a, c = 0;
  do
    a = t + (n - t) / 2, i = aa(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > Vh && ++c < Sh);
  return a;
}
function ln(e, t, n, r) {
  if (e === t && n === r)
    return Te;
  const o = (i) => $h(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : aa(o(i), t, r);
}
const ca = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, la = (e) => (t) => 1 - e(1 - t), da = /* @__PURE__ */ ln(0.33, 1.53, 0.69, 0.99), yo = /* @__PURE__ */ la(da), ua = /* @__PURE__ */ ca(yo), ha = (e) => (e *= 2) < 1 ? 0.5 * yo(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Mo = (e) => 1 - Math.sin(Math.acos(e)), pa = la(Mo), fa = ca(Mo), Th = /* @__PURE__ */ ln(0.42, 0, 1, 1), jh = /* @__PURE__ */ ln(0, 0, 0.58, 1), ma = /* @__PURE__ */ ln(0.42, 0, 0.58, 1), Ah = (e) => Array.isArray(e) && typeof e[0] != "number", ga = (e) => Array.isArray(e) && typeof e[0] == "number", us = {
  linear: Te,
  easeIn: Th,
  easeInOut: ma,
  easeOut: jh,
  circIn: Mo,
  circInOut: fa,
  circOut: pa,
  backIn: yo,
  backInOut: ua,
  backOut: da,
  anticipate: ha
}, Ph = (e) => typeof e == "string", hs = (e) => {
  if (ga(e)) {
    ze(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return ln(t, n, r, o);
  } else if (Ph(e))
    return ze(us[e] !== void 0, `Invalid easing type '${e}'`), us[e];
  return e;
}, yn = [
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
], ps = {
  value: null
};
function Ih(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = !1, i = !1;
  const a = /* @__PURE__ */ new WeakSet();
  let c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, l = 0;
  function d(h) {
    a.has(h) && (u.schedule(h), e()), l++, h(c);
  }
  const u = {
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
      o = !0, [n, r] = [r, n], n.forEach(d), t && ps.value && ps.value.frameloop[t].push(l), l = 0, n.clear(), o = !1, i && (i = !1, u.process(h));
    }
  };
  return u;
}
const Hh = 40;
function va(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, a = yn.reduce((w, b) => (w[b] = Ih(i, t ? b : void 0), w), {}), { setup: c, read: l, resolveKeyframes: d, preUpdate: u, update: h, preRender: p, render: f, postRender: k } = a, v = () => {
    const w = Xe.useManualTiming ? o.timestamp : performance.now();
    n = !1, Xe.useManualTiming || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(w - o.timestamp, Hh), 1)), o.timestamp = w, o.isProcessing = !0, c.process(o), l.process(o), d.process(o), u.process(o), h.process(o), p.process(o), f.process(o), k.process(o), o.isProcessing = !1, n && t && (r = !1, e(v));
  }, y = () => {
    n = !0, r = !0, o.isProcessing || e(v);
  };
  return { schedule: yn.reduce((w, b) => {
    const V = a[b];
    return w[b] = (M, x = !1, C = !1) => (n || y(), V.schedule(M, x, C)), w;
  }, {}), cancel: (w) => {
    for (let b = 0; b < yn.length; b++)
      a[yn[b]].cancel(w);
  }, state: o, steps: a };
}
const { schedule: le, cancel: We, state: Le, steps: gr } = /* @__PURE__ */ va(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Te, !0);
let $n;
function Rh() {
  $n = void 0;
}
const Ne = {
  now: () => ($n === void 0 && Ne.set(Le.isProcessing || Xe.useManualTiming ? Le.timestamp : performance.now()), $n),
  set: (e) => {
    $n = e, queueMicrotask(Rh);
  }
}, ka = (e) => (t) => typeof t == "string" && t.startsWith(e), Co = /* @__PURE__ */ ka("--"), Eh = /* @__PURE__ */ ka("var(--"), xo = (e) => Eh(e) ? Dh.test(e.split("/*")[0].trim()) : !1, Dh = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Et = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Qt = {
  ...Et,
  transform: (e) => Ue(0, 1, e)
}, Mn = {
  ...Et,
  default: 1
}, zt = (e) => Math.round(e * 1e5) / 1e5, bo = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Bh(e) {
  return e == null;
}
const Oh = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, No = (e, t) => (n) => !!(typeof n == "string" && Oh.test(n) && n.startsWith(e) || t && !Bh(n) && Object.prototype.hasOwnProperty.call(n, t)), La = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, i, a, c] = r.match(bo);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: c !== void 0 ? parseFloat(c) : 1
  };
}, Fh = (e) => Ue(0, 255, e), vr = {
  ...Et,
  transform: (e) => Math.round(Fh(e))
}, it = {
  test: /* @__PURE__ */ No("rgb", "red"),
  parse: /* @__PURE__ */ La("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + vr.transform(e) + ", " + vr.transform(t) + ", " + vr.transform(n) + ", " + zt(Qt.transform(r)) + ")"
};
function Zh(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Ir = {
  test: /* @__PURE__ */ No("#"),
  parse: Zh,
  transform: it.transform
}, dn = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), qe = /* @__PURE__ */ dn("deg"), Ze = /* @__PURE__ */ dn("%"), ee = /* @__PURE__ */ dn("px"), Yh = /* @__PURE__ */ dn("vh"), _h = /* @__PURE__ */ dn("vw"), fs = {
  ...Ze,
  parse: (e) => Ze.parse(e) / 100,
  transform: (e) => Ze.transform(e * 100)
}, wt = {
  test: /* @__PURE__ */ No("hsl", "hue"),
  parse: /* @__PURE__ */ La("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ze.transform(zt(t)) + ", " + Ze.transform(zt(n)) + ", " + zt(Qt.transform(r)) + ")"
}, me = {
  test: (e) => it.test(e) || Ir.test(e) || wt.test(e),
  parse: (e) => it.test(e) ? it.parse(e) : wt.test(e) ? wt.parse(e) : Ir.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? it.transform(e) : wt.transform(e),
  getAnimatableNone: (e) => {
    const t = me.parse(e);
    return t.alpha = 0, me.transform(t);
  }
}, Uh = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function zh(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(bo)) == null ? void 0 : t.length) || 0) + (((n = e.match(Uh)) == null ? void 0 : n.length) || 0) > 0;
}
const wa = "number", ya = "color", Xh = "var", Kh = "var(", ms = "${}", Gh = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Wt(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const c = t.replace(Gh, (l) => (me.test(l) ? (r.color.push(i), o.push(ya), n.push(me.parse(l))) : l.startsWith(Kh) ? (r.var.push(i), o.push(Xh), n.push(l)) : (r.number.push(i), o.push(wa), n.push(parseFloat(l))), ++i, ms)).split(ms);
  return { values: n, split: c, indexes: r, types: o };
}
function Ma(e) {
  return Wt(e).values;
}
function Ca(e) {
  const { split: t, types: n } = Wt(e), r = t.length;
  return (o) => {
    let i = "";
    for (let a = 0; a < r; a++)
      if (i += t[a], o[a] !== void 0) {
        const c = n[a];
        c === wa ? i += zt(o[a]) : c === ya ? i += me.transform(o[a]) : i += o[a];
      }
    return i;
  };
}
const qh = (e) => typeof e == "number" ? 0 : me.test(e) ? me.getAnimatableNone(e) : e;
function Jh(e) {
  const t = Ma(e);
  return Ca(e)(t.map(qh));
}
const et = {
  test: zh,
  parse: Ma,
  createTransformer: Ca,
  getAnimatableNone: Jh
};
function kr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Qh({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const c = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - c;
    o = kr(l, c, e + 1 / 3), i = kr(l, c, e), a = kr(l, c, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
function Bn(e, t) {
  return (n) => n > 0 ? t : e;
}
const ue = (e, t, n) => e + (t - e) * n, Lr = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, Wh = [Ir, it, wt], e2 = (e) => Wh.find((t) => t.test(e));
function gs(e) {
  const t = e2(e);
  if (Rt(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === wt && (n = Qh(n)), n;
}
const vs = (e, t) => {
  const n = gs(e), r = gs(t);
  if (!n || !r)
    return Bn(e, t);
  const o = { ...n };
  return (i) => (o.red = Lr(n.red, r.red, i), o.green = Lr(n.green, r.green, i), o.blue = Lr(n.blue, r.blue, i), o.alpha = ue(n.alpha, r.alpha, i), it.transform(o));
}, Hr = /* @__PURE__ */ new Set(["none", "hidden"]);
function t2(e, t) {
  return Hr.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function n2(e, t) {
  return (n) => ue(e, t, n);
}
function Vo(e) {
  return typeof e == "number" ? n2 : typeof e == "string" ? xo(e) ? Bn : me.test(e) ? vs : s2 : Array.isArray(e) ? xa : typeof e == "object" ? me.test(e) ? vs : r2 : Bn;
}
function xa(e, t) {
  const n = [...e], r = n.length, o = e.map((i, a) => Vo(i)(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}
function r2(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Vo(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function o2(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const i = t.types[o], a = e.indexes[i][r[i]], c = e.values[a] ?? 0;
    n[o] = c, r[i]++;
  }
  return n;
}
const s2 = (e, t) => {
  const n = et.createTransformer(t), r = Wt(e), o = Wt(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Hr.has(e) && !o.values.length || Hr.has(t) && !r.values.length ? t2(e, t) : cn(xa(o2(r, o), o.values), n) : (Rt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Bn(e, t));
};
function ba(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ue(e, t, n) : Vo(e)(e, t);
}
const i2 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => le.update(t, n),
    stop: () => We(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Le.isProcessing ? Le.timestamp : Ne.now()
  };
}, Na = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < o; i++)
    r += Math.round(e(i / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, On = 2e4;
function So(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < On; )
    t += n, r = e.next(t);
  return t >= On ? 1 / 0 : t;
}
function a2(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), o = Math.min(So(r), On);
  return {
    type: "keyframes",
    ease: (i) => r.next(o * i).value / t,
    duration: /* @__PURE__ */ Fe(o)
  };
}
const c2 = 5;
function Va(e, t, n) {
  const r = Math.max(t - c2, 0);
  return ia(n - e(r), t - r);
}
const de = {
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
}, wr = 1e-3;
function l2({ duration: e = de.duration, bounce: t = de.bounce, velocity: n = de.velocity, mass: r = de.mass }) {
  let o, i;
  Rt(e <= /* @__PURE__ */ He(de.maxDuration), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  a = Ue(de.minDamping, de.maxDamping, a), e = Ue(de.minDuration, de.maxDuration, /* @__PURE__ */ Fe(e)), a < 1 ? (o = (d) => {
    const u = d * a, h = u * e, p = u - n, f = Rr(d, a), k = Math.exp(-h);
    return wr - p / f * k;
  }, i = (d) => {
    const h = d * a * e, p = h * n + n, f = Math.pow(a, 2) * Math.pow(d, 2) * e, k = Math.exp(-h), v = Rr(Math.pow(d, 2), a);
    return (-o(d) + wr > 0 ? -1 : 1) * ((p - f) * k) / v;
  }) : (o = (d) => {
    const u = Math.exp(-d * e), h = (d - n) * e + 1;
    return -wr + u * h;
  }, i = (d) => {
    const u = Math.exp(-d * e), h = (n - d) * (e * e);
    return u * h;
  });
  const c = 5 / e, l = u2(o, i, c);
  if (e = /* @__PURE__ */ He(e), isNaN(l))
    return {
      stiffness: de.stiffness,
      damping: de.damping,
      duration: e
    };
  {
    const d = Math.pow(l, 2) * r;
    return {
      stiffness: d,
      damping: a * 2 * Math.sqrt(r * d),
      duration: e
    };
  }
}
const d2 = 12;
function u2(e, t, n) {
  let r = n;
  for (let o = 1; o < d2; o++)
    r = r - e(r) / t(r);
  return r;
}
function Rr(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const h2 = ["duration", "bounce"], p2 = ["stiffness", "damping", "mass"];
function ks(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function f2(e) {
  let t = {
    velocity: de.velocity,
    stiffness: de.stiffness,
    damping: de.damping,
    mass: de.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!ks(e, p2) && ks(e, h2))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, i = 2 * Ue(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: de.mass,
        stiffness: o,
        damping: i
      };
    } else {
      const n = l2(e);
      t = {
        ...t,
        ...n,
        mass: de.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Fn(e = de.visualDuration, t = de.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0], a = n.keyframes[n.keyframes.length - 1], c = { done: !1, value: i }, { stiffness: l, damping: d, mass: u, duration: h, velocity: p, isResolvedFromDuration: f } = f2({
    ...n,
    velocity: -/* @__PURE__ */ Fe(n.velocity || 0)
  }), k = p || 0, v = d / (2 * Math.sqrt(l * u)), y = a - i, g = /* @__PURE__ */ Fe(Math.sqrt(l / u)), L = Math.abs(y) < 5;
  r || (r = L ? de.restSpeed.granular : de.restSpeed.default), o || (o = L ? de.restDelta.granular : de.restDelta.default);
  let w;
  if (v < 1) {
    const V = Rr(g, v);
    w = (M) => {
      const x = Math.exp(-v * g * M);
      return a - x * ((k + v * g * y) / V * Math.sin(V * M) + y * Math.cos(V * M));
    };
  } else if (v === 1)
    w = (V) => a - Math.exp(-g * V) * (y + (k + g * y) * V);
  else {
    const V = g * Math.sqrt(v * v - 1);
    w = (M) => {
      const x = Math.exp(-v * g * M), C = Math.min(V * M, 300);
      return a - x * ((k + v * g * y) * Math.sinh(C) + V * y * Math.cosh(C)) / V;
    };
  }
  const b = {
    calculatedDuration: f && h || null,
    next: (V) => {
      const M = w(V);
      if (f)
        c.done = V >= h;
      else {
        let x = V === 0 ? k : 0;
        v < 1 && (x = V === 0 ? /* @__PURE__ */ He(k) : Va(w, V, M));
        const C = Math.abs(x) <= r, $ = Math.abs(a - M) <= o;
        c.done = C && $;
      }
      return c.value = c.done ? a : M, c;
    },
    toString: () => {
      const V = Math.min(So(b), On), M = Na((x) => b.next(V * x).value, V, 30);
      return V + "ms " + M;
    },
    toTransition: () => {
    }
  };
  return b;
}
Fn.applyToOptions = (e) => {
  const t = a2(e, 100, Fn);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ He(t.duration), e.type = "keyframes", e;
};
function Er({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: c, max: l, restDelta: d = 0.5, restSpeed: u }) {
  const h = e[0], p = {
    done: !1,
    value: h
  }, f = (C) => c !== void 0 && C < c || l !== void 0 && C > l, k = (C) => c === void 0 ? l : l === void 0 || Math.abs(c - C) < Math.abs(l - C) ? c : l;
  let v = n * t;
  const y = h + v, g = a === void 0 ? y : a(y);
  g !== y && (v = g - h);
  const L = (C) => -v * Math.exp(-C / r), w = (C) => g + L(C), b = (C) => {
    const $ = L(C), S = w(C);
    p.done = Math.abs($) <= d, p.value = p.done ? g : S;
  };
  let V, M;
  const x = (C) => {
    f(p.value) && (V = C, M = Fn({
      keyframes: [p.value, k(p.value)],
      velocity: Va(w, C, p.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: d,
      restSpeed: u
    }));
  };
  return x(0), {
    calculatedDuration: null,
    next: (C) => {
      let $ = !1;
      return !M && V === void 0 && ($ = !0, b(C), x(C)), V !== void 0 && C >= V ? M.next(C - V) : (!$ && b(C), p);
    }
  };
}
function m2(e, t, n) {
  const r = [], o = n || Xe.mix || ba, i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let c = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Te : t;
      c = cn(l, c);
    }
    r.push(c);
  }
  return r;
}
function g2(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (ze(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const a = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const c = m2(t, r, o), l = c.length, d = (u) => {
    if (a && u < e[0])
      return t[0];
    let h = 0;
    if (l > 1)
      for (; h < e.length - 2 && !(u < e[h + 1]); h++)
        ;
    const p = /* @__PURE__ */ Jt(e[h], e[h + 1], u);
    return c[h](p);
  };
  return n ? (u) => d(Ue(e[0], e[i - 1], u)) : d;
}
function v2(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ Jt(0, t, r);
    e.push(ue(n, 1, o));
  }
}
function k2(e) {
  const t = [0];
  return v2(t, e.length - 1), t;
}
function L2(e, t) {
  return e.map((n) => n * t);
}
function w2(e, t) {
  return e.map(() => t || ma).splice(0, e.length - 1);
}
function yt({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = Ah(r) ? r.map(hs) : hs(r), i = {
    done: !1,
    value: t[0]
  }, a = L2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : k2(t),
    e
  ), c = g2(a, t, {
    ease: Array.isArray(o) ? o : w2(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = c(l), i.done = l >= e, i)
  };
}
const y2 = (e) => e !== null;
function $o(e, { repeat: t, repeatType: n = "loop" }, r, o = 1) {
  const i = e.filter(y2), c = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !c || r === void 0 ? i[c] : r;
}
const M2 = {
  decay: Er,
  inertia: Er,
  tween: yt,
  keyframes: yt,
  spring: Fn
};
function Sa(e) {
  typeof e.type == "string" && (e.type = M2[e.type]);
}
class To {
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
const C2 = (e) => e / 100;
class jo extends To {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var r, o;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Ne.now() && this.tick(Ne.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (o = (r = this.options).onStop) == null || o.call(r));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Sa(t);
    const { type: n = yt, repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: a = 0 } = t;
    let { keyframes: c } = t;
    const l = n || yt;
    process.env.NODE_ENV !== "production" && l !== yt && ze(c.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${c}`), l !== yt && typeof c[0] != "number" && (this.mixKeyframes = cn(C2, ba(c[0], c[1])), c = [0, 100]);
    const d = l({ ...t, keyframes: c });
    i === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...c].reverse(),
      velocity: -a
    })), d.calculatedDuration === null && (d.calculatedDuration = So(d));
    const { calculatedDuration: u } = d;
    this.calculatedDuration = u, this.resolvedDuration = u + o, this.totalDuration = this.resolvedDuration * (r + 1) - o, this.generator = d;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: o, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: c, calculatedDuration: l } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: d = 0, keyframes: u, repeat: h, repeatType: p, repeatDelay: f, type: k, onUpdate: v, finalKeyframe: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const g = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), L = this.playbackSpeed >= 0 ? g < 0 : g > o;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let w = this.currentTime, b = r;
    if (h) {
      const C = Math.min(this.currentTime, o) / c;
      let $ = Math.floor(C), S = C % 1;
      !S && C >= 1 && (S = 1), S === 1 && $--, $ = Math.min($, h + 1), !!($ % 2) && (p === "reverse" ? (S = 1 - S, f && (S -= f / c)) : p === "mirror" && (b = a)), w = Ue(0, 1, S) * c;
    }
    const V = L ? { done: !1, value: u[0] } : b.next(w);
    i && (V.value = i(V.value));
    let { done: M } = V;
    !L && l !== null && (M = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const x = this.holdTime === null && (this.state === "finished" || this.state === "running" && M);
    return x && k !== Er && (V.value = $o(u, this.options, y, this.speed)), v && v(V.value), x && this.finish(), V;
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
    return /* @__PURE__ */ Fe(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ Fe(this.currentTime);
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
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ Fe(this.currentTime));
  }
  play() {
    var o, i;
    if (this.isStopped)
      return;
    const { driver: t = i2, startTime: n } = this.options;
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
function x2(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const at = (e) => e * 180 / Math.PI, Dr = (e) => {
  const t = at(Math.atan2(e[1], e[0]));
  return Br(t);
}, b2 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Dr,
  rotateZ: Dr,
  skewX: (e) => at(Math.atan(e[1])),
  skewY: (e) => at(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Br = (e) => (e = e % 360, e < 0 && (e += 360), e), Ls = Dr, ws = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), ys = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), N2 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ws,
  scaleY: ys,
  scale: (e) => (ws(e) + ys(e)) / 2,
  rotateX: (e) => Br(at(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Br(at(Math.atan2(-e[2], e[0]))),
  rotateZ: Ls,
  rotate: Ls,
  skewX: (e) => at(Math.atan(e[4])),
  skewY: (e) => at(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Or(e) {
  return e.includes("scale") ? 1 : 0;
}
function Fr(e, t) {
  if (!e || e === "none")
    return Or(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n)
    r = N2, o = n;
  else {
    const c = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = b2, o = c;
  }
  if (!o)
    return Or(t);
  const i = r[t], a = o[1].split(",").map(S2);
  return typeof i == "function" ? i(a) : a[i];
}
const V2 = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Fr(n, t);
};
function S2(e) {
  return parseFloat(e.trim());
}
const Dt = [
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
], Bt = new Set(Dt), Ms = (e) => e === Et || e === ee, $2 = /* @__PURE__ */ new Set(["x", "y", "z"]), T2 = Dt.filter((e) => !$2.has(e));
function j2(e) {
  const t = [];
  return T2.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const lt = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => Fr(t, "x"),
  y: (e, { transform: t }) => Fr(t, "y")
};
lt.translateX = lt.x;
lt.translateY = lt.y;
const dt = /* @__PURE__ */ new Set();
let Zr = !1, Yr = !1, _r = !1;
function $a() {
  if (Yr) {
    const e = Array.from(dt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = j2(r);
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
  Yr = !1, Zr = !1, dt.forEach((e) => e.complete(_r)), dt.clear();
}
function Ta() {
  dt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Yr = !0);
  });
}
function A2() {
  _r = !0, Ta(), $a(), _r = !1;
}
class Ao {
  constructor(t, n, r, o, i, a = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = a;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (dt.add(this), Zr || (Zr = !0, le.read(Ta), le.resolveKeyframes($a))) : (this.readKeyframes(), this.complete());
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
    x2(t);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), dt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (dt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const P2 = (e) => e.startsWith("--");
function I2(e, t, n) {
  P2(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const H2 = /* @__PURE__ */ ko(() => window.ScrollTimeline !== void 0), R2 = {};
function E2(e, t) {
  const n = /* @__PURE__ */ ko(e);
  return () => R2[t] ?? n();
}
const ja = /* @__PURE__ */ E2(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), _t = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Cs = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ _t([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ _t([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ _t([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ _t([0.33, 1.53, 0.69, 0.99])
};
function Aa(e, t) {
  if (e)
    return typeof e == "function" ? ja() ? Na(e, t) : "ease-out" : ga(e) ? _t(e) : Array.isArray(e) ? e.map((n) => Aa(n, t) || Cs.easeOut) : Cs[e];
}
function D2(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: a = "loop", ease: c = "easeOut", times: l } = {}, d = void 0) {
  const u = {
    [t]: n
  };
  l && (u.offset = l);
  const h = Aa(c, o);
  Array.isArray(h) && (u.easing = h);
  const p = {
    delay: r,
    duration: o,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  };
  return d && (p.pseudoElement = d), e.animate(u, p);
}
function Pa(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function B2({ type: e, ...t }) {
  return Pa(e) && ja() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class O2 extends To {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: o, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: c, onComplete: l } = t;
    this.isPseudoElement = !!i, this.allowFlatten = a, this.options = t, ze(typeof t.type != "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
    const d = B2(t);
    this.animation = D2(n, r, o, d, i), d.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !i) {
        const u = $o(o, this.options, c, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : I2(n, r, u), this.animation.cancel();
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
    return /* @__PURE__ */ Fe(Number(t));
  }
  get time() {
    return /* @__PURE__ */ Fe(Number(this.animation.currentTime) || 0);
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
    return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && H2() ? (this.animation.timeline = t, Te) : n(this);
  }
}
const Ia = {
  anticipate: ha,
  backInOut: ua,
  circInOut: fa
};
function F2(e) {
  return e in Ia;
}
function Z2(e) {
  typeof e.ease == "string" && F2(e.ease) && (e.ease = Ia[e.ease]);
}
const xs = 10;
class Y2 extends O2 {
  constructor(t) {
    Z2(t), Sa(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
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
    const c = new jo({
      ...a,
      autoplay: !1
    }), l = /* @__PURE__ */ He(this.finishedTime ?? this.time);
    n.setWithVelocity(c.sample(l - xs).value, c.sample(l).value, xs), c.stop();
  }
}
const bs = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(et.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function _2(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function U2(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], a = bs(o, t), c = bs(i, t);
  return Rt(a === c, `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`), !a || !c ? !1 : _2(e) || (n === "spring" || Pa(n)) && r;
}
function Po(e) {
  return oa(e) && "offsetHeight" in e;
}
const z2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), X2 = /* @__PURE__ */ ko(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function K2(e) {
  var d;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: o, damping: i, type: a } = e;
  if (!Po((d = t == null ? void 0 : t.owner) == null ? void 0 : d.current))
    return !1;
  const { onUpdate: c, transformTemplate: l } = t.owner.getProps();
  return X2() && n && z2.has(n) && (n !== "transform" || !l) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !r && o !== "mirror" && i !== 0 && a !== "inertia";
}
const G2 = 40;
class q2 extends To {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: c, name: l, motionValue: d, element: u, ...h }) {
    var k;
    super(), this.stop = () => {
      var v, y;
      this._animation && (this._animation.stop(), (v = this.stopTimeline) == null || v.call(this)), (y = this.keyframeResolver) == null || y.cancel();
    }, this.createdAt = Ne.now();
    const p = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: i,
      repeatType: a,
      name: l,
      motionValue: d,
      element: u,
      ...h
    }, f = (u == null ? void 0 : u.KeyframeResolver) || Ao;
    this.keyframeResolver = new f(c, (v, y, g) => this.onKeyframesResolved(v, y, p, !g), l, d, u), (k = this.keyframeResolver) == null || k.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, o) {
    this.keyframeResolver = void 0;
    const { name: i, type: a, velocity: c, delay: l, isHandoff: d, onUpdate: u } = r;
    this.resolvedAt = Ne.now(), U2(t, i, a, c) || ((Xe.instantAnimations || !l) && (u == null || u($o(t, r, n))), t[0] = t[t.length - 1], r.duration = 0, r.repeat = 0);
    const p = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > G2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, f = !d && K2(p) ? new Y2({
      ...p,
      element: p.motionValue.owner.current
    }) : new jo(p);
    f.finished.then(() => this.notifyFinished()).catch(Te), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
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
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), A2()), this._animation;
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
const J2 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Q2(e) {
  const t = J2.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const W2 = 4;
function Ha(e, t, n = 1) {
  ze(n <= W2, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = Q2(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return ra(a) ? parseFloat(a) : a;
  }
  return xo(o) ? Ha(o, t, n + 1) : o;
}
function Io(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Ra = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Dt
]), e4 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Ea = (e) => (t) => t.test(e), Da = [Et, ee, Ze, qe, _h, Yh, e4], Ns = (e) => Da.find(Ea(e));
function t4(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || sa(e) : !0;
}
const n4 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function r4(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(bo) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = n4.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const o4 = /\b([a-z-]*)\(.*?\)/gu, Ur = {
  ...et,
  getAnimatableNone: (e) => {
    const t = e.match(o4);
    return t ? t.map(r4).join(" ") : e;
  }
}, Vs = {
  ...Et,
  transform: Math.round
}, s4 = {
  rotate: qe,
  rotateX: qe,
  rotateY: qe,
  rotateZ: qe,
  scale: Mn,
  scaleX: Mn,
  scaleY: Mn,
  scaleZ: Mn,
  skew: qe,
  skewX: qe,
  skewY: qe,
  distance: ee,
  translateX: ee,
  translateY: ee,
  translateZ: ee,
  x: ee,
  y: ee,
  z: ee,
  perspective: ee,
  transformPerspective: ee,
  opacity: Qt,
  originX: fs,
  originY: fs,
  originZ: ee
}, Ho = {
  // Border props
  borderWidth: ee,
  borderTopWidth: ee,
  borderRightWidth: ee,
  borderBottomWidth: ee,
  borderLeftWidth: ee,
  borderRadius: ee,
  radius: ee,
  borderTopLeftRadius: ee,
  borderTopRightRadius: ee,
  borderBottomRightRadius: ee,
  borderBottomLeftRadius: ee,
  // Positioning props
  width: ee,
  maxWidth: ee,
  height: ee,
  maxHeight: ee,
  top: ee,
  right: ee,
  bottom: ee,
  left: ee,
  // Spacing props
  padding: ee,
  paddingTop: ee,
  paddingRight: ee,
  paddingBottom: ee,
  paddingLeft: ee,
  margin: ee,
  marginTop: ee,
  marginRight: ee,
  marginBottom: ee,
  marginLeft: ee,
  // Misc
  backgroundPositionX: ee,
  backgroundPositionY: ee,
  ...s4,
  zIndex: Vs,
  // SVG
  fillOpacity: Qt,
  strokeOpacity: Qt,
  numOctaves: Vs
}, i4 = {
  ...Ho,
  // Color props
  color: me,
  backgroundColor: me,
  outlineColor: me,
  fill: me,
  stroke: me,
  // Border props
  borderColor: me,
  borderTopColor: me,
  borderRightColor: me,
  borderBottomColor: me,
  borderLeftColor: me,
  filter: Ur,
  WebkitFilter: Ur
}, Ba = (e) => i4[e];
function Oa(e, t) {
  let n = Ba(e);
  return n !== Ur && (n = et), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const a4 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function c4(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !a4.has(i) && Wt(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = Oa(n, o);
}
class l4 extends Ao {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let d = t[l];
      if (typeof d == "string" && (d = d.trim(), xo(d))) {
        const u = Ha(d, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !Ra.has(r) || t.length !== 2)
      return;
    const [o, i] = t, a = Ns(o), c = Ns(i);
    if (a !== c)
      if (Ms(a) && Ms(c))
        for (let l = 0; l < t.length; l++) {
          const d = t[l];
          typeof d == "string" && (t[l] = parseFloat(d));
        }
      else lt[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      (t[o] === null || t4(t[o])) && r.push(o);
    r.length && c4(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = lt[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    r[i] = lt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), (c = this.removedTransforms) != null && c.length && this.removedTransforms.forEach(([l, d]) => {
      t.getValue(l).set(d);
    }), this.resolveNoneKeyframes();
  }
}
function d4(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const o = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
const Fa = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Ss = 30, u4 = (e) => !isNaN(parseFloat(e));
class h4 {
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
    this.current = t, this.updatedAt = Ne.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = u4(this.current));
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
    return process.env.NODE_ENV !== "production" && wo(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Lo());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), le.read(() => {
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Ss)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ss);
    return ia(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Nt(e, t) {
  return new h4(e, t);
}
const { schedule: Ro } = /* @__PURE__ */ va(queueMicrotask, !1), Ie = {
  x: !1,
  y: !1
};
function Za() {
  return Ie.x || Ie.y;
}
function p4(e) {
  return e === "x" || e === "y" ? Ie[e] ? null : (Ie[e] = !0, () => {
    Ie[e] = !1;
  }) : Ie.x || Ie.y ? null : (Ie.x = Ie.y = !0, () => {
    Ie.x = Ie.y = !1;
  });
}
function Ya(e, t) {
  const n = d4(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function $s(e) {
  return !(e.pointerType === "touch" || Za());
}
function f4(e, t, n = {}) {
  const [r, o, i] = Ya(e, n), a = (c) => {
    if (!$s(c))
      return;
    const { target: l } = c, d = t(l, c);
    if (typeof d != "function" || !l)
      return;
    const u = (h) => {
      $s(h) && (d(h), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, o);
  };
  return r.forEach((c) => {
    c.addEventListener("pointerenter", a, o);
  }), i;
}
const _a = (e, t) => t ? e === t ? !0 : _a(e, t.parentElement) : !1, Eo = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, m4 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function g4(e) {
  return m4.has(e.tagName) || e.tabIndex !== -1;
}
const Tn = /* @__PURE__ */ new WeakSet();
function Ts(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function yr(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const v4 = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Ts(() => {
    if (Tn.has(n))
      return;
    yr(n, "down");
    const o = Ts(() => {
      yr(n, "up");
    }), i = () => yr(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function js(e) {
  return Eo(e) && !Za();
}
function k4(e, t, n = {}) {
  const [r, o, i] = Ya(e, n), a = (c) => {
    const l = c.currentTarget;
    if (!js(c))
      return;
    Tn.add(l);
    const d = t(l, c), u = (f, k) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", p), Tn.has(l) && Tn.delete(l), js(f) && typeof d == "function" && d(f, { success: k });
    }, h = (f) => {
      u(f, l === window || l === document || n.useGlobalTarget || _a(l, f.target));
    }, p = (f) => {
      u(f, !1);
    };
    window.addEventListener("pointerup", h, o), window.addEventListener("pointercancel", p, o);
  };
  return r.forEach((c) => {
    (n.useGlobalTarget ? window : c).addEventListener("pointerdown", a, o), Po(c) && (c.addEventListener("focus", (d) => v4(d, o)), !g4(c) && !c.hasAttribute("tabindex") && (c.tabIndex = 0));
  }), i;
}
function Ua(e) {
  return oa(e) && "ownerSVGElement" in e;
}
function L4(e) {
  return Ua(e) && e.tagName === "svg";
}
const xe = (e) => !!(e && e.getVelocity), w4 = [...Da, me, et], y4 = (e) => w4.find(Ea(e)), Do = Ht({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class M4 extends uo.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, o = Po(r) && r.offsetWidth || 0, i = this.props.sizeRef.current;
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
function C4({ children: e, isPresent: t, anchorX: n, root: r }) {
  const o = ho(), i = q(null), a = q({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: c } = ye(Do);
  return Qi(() => {
    const { width: l, height: d, top: u, left: h, right: p } = a.current;
    if (t || !i.current || !l || !d)
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
            height: ${d}px !important;
            ${f}px !important;
            top: ${u}px !important;
          }
        `), () => {
      v.removeChild(k), v.contains(k) && v.removeChild(k);
    };
  }, [t]), s(M4, { isPresent: t, childRef: i, sizeRef: a, children: uo.cloneElement(e, { ref: i }) });
}
const x4 = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a, anchorX: c, root: l }) => {
  const d = fo(b4), u = ho();
  let h = !0, p = K(() => (h = !1, {
    id: u,
    initial: t,
    isPresent: n,
    custom: o,
    onExitComplete: (f) => {
      d.set(f, !0);
      for (const k of d.values())
        if (!k)
          return;
      r && r();
    },
    register: (f) => (d.set(f, !1), () => d.delete(f))
  }), [n, d, r]);
  return i && h && (p = { ...p }), K(() => {
    d.forEach((f, k) => d.set(k, !1));
  }, [n]), uo.useEffect(() => {
    !n && !d.size && r && r();
  }, [n]), a === "popLayout" && (e = s(C4, { isPresent: n, anchorX: c, root: l, children: e })), s(Kn.Provider, { value: p, children: e });
};
function b4() {
  return /* @__PURE__ */ new Map();
}
function za(e = !0) {
  const t = ye(Kn);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, i = ho();
  Z(() => {
    if (e)
      return o(i);
  }, [e]);
  const a = O(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, a] : [!0];
}
const Cn = (e) => e.key || "";
function As(e) {
  const t = [];
  return bl.forEach(e, (n) => {
    Nl(n) && t.push(n);
  }), t;
}
const N4 = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: i = "sync", propagate: a = !1, anchorX: c = "left", root: l }) => {
  const [d, u] = za(a), h = K(() => As(e), [e]), p = a && !d ? [] : h.map(Cn), f = q(!0), k = q(h), v = fo(() => /* @__PURE__ */ new Map()), [y, g] = E(h), [L, w] = E(h);
  na(() => {
    f.current = !1, k.current = h;
    for (let M = 0; M < L.length; M++) {
      const x = Cn(L[M]);
      p.includes(x) ? v.delete(x) : v.get(x) !== !0 && v.set(x, !1);
    }
  }, [L, p.length, p.join("-")]);
  const b = [];
  if (h !== y) {
    let M = [...h];
    for (let x = 0; x < L.length; x++) {
      const C = L[x], $ = Cn(C);
      p.includes($) || (M.splice(x, 0, C), b.push(C));
    }
    return i === "wait" && b.length && (M = b), w(As(M)), g(h), null;
  }
  process.env.NODE_ENV !== "production" && i === "wait" && L.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: V } = ye(po);
  return s(pe, { children: L.map((M) => {
    const x = Cn(M), C = a && !d ? !1 : h === L || p.includes(x), $ = () => {
      if (v.has(x))
        v.set(x, !0);
      else
        return;
      let S = !0;
      v.forEach((T) => {
        T || (S = !1);
      }), S && (V == null || V(), w(k.current), a && (u == null || u()), r && r());
    };
    return s(x4, { isPresent: C, initial: !f.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: o, mode: i, root: l, onExitComplete: C ? void 0 : $, anchorX: c, children: M }, x);
  }) });
}, Xa = Ht({ strict: !1 }), Ps = {
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
}, Vt = {};
for (const e in Ps)
  Vt[e] = {
    isEnabled: (t) => Ps[e].some((n) => !!t[n])
  };
function V4(e) {
  for (const t in e)
    Vt[t] = {
      ...Vt[t],
      ...e[t]
    };
}
const S4 = /* @__PURE__ */ new Set([
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
function Zn(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || S4.has(e);
}
let Ka = (e) => !Zn(e);
function $4(e) {
  typeof e == "function" && (Ka = (t) => t.startsWith("on") ? !Zn(t) : e(t));
}
try {
  $4(require("@emotion/is-prop-valid").default);
} catch {
}
function T4(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Ka(o) || n === !0 && Zn(o) || !t && !Zn(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function j4(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && wo(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
const Gn = /* @__PURE__ */ Ht({});
function qn(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function en(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Bo = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Oo = ["initial", ...Bo];
function Jn(e) {
  return qn(e.animate) || Oo.some((t) => en(e[t]));
}
function Ga(e) {
  return !!(Jn(e) || e.variants);
}
function A4(e, t) {
  if (Jn(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || en(n) ? n : void 0,
      animate: en(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function P4(e) {
  const { initial: t, animate: n } = A4(e, ye(Gn));
  return K(() => ({ initial: t, animate: n }), [Is(t), Is(n)]);
}
function Is(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const I4 = Symbol.for("motionComponentSymbol");
function Mt(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function H4(e, t, n) {
  return O(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Mt(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Fo = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), R4 = "framerAppearId", qa = "data-" + Fo(R4), Ja = Ht({});
function E4(e, t, n, r, o) {
  var v, y;
  const { visualElement: i } = ye(Gn), a = ye(Xa), c = ye(Kn), l = ye(Do).reducedMotion, d = q(null);
  r = r || a.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const u = d.current, h = ye(Ja);
  u && !u.projection && o && (u.type === "html" || u.type === "svg") && D4(d.current, n, o, h);
  const p = q(!1);
  Qi(() => {
    u && p.current && u.update(n, c);
  });
  const f = n[qa], k = q(!!f && !((v = window.MotionHandoffIsComplete) != null && v.call(window, f)) && ((y = window.MotionHasOptimisedAnimation) == null ? void 0 : y.call(window, f)));
  return na(() => {
    u && (p.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), Ro.render(u.render), k.current && u.animationState && u.animationState.animateChanges());
  }), Z(() => {
    u && (!k.current && u.animationState && u.animationState.animateChanges(), k.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) == null || g.call(window, f);
    }), k.current = !1));
  }), u;
}
function D4(e, t, n, r) {
  const { layoutId: o, layout: i, drag: a, dragConstraints: c, layoutScroll: l, layoutRoot: d, layoutCrossfade: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Qa(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!a || c && Mt(c),
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
    crossfade: u,
    layoutScroll: l,
    layoutRoot: d
  });
}
function Qa(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Qa(e.parent);
}
function B4({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && V4(e);
  function i(c, l) {
    let d;
    const u = {
      ...ye(Do),
      ...c,
      layoutId: O4(c)
    }, { isStatic: h } = u, p = P4(c), f = r(c, h);
    if (!h && mo) {
      F4(u, e);
      const k = Z4(u);
      d = k.MeasureLayout, p.visualElement = E4(o, f, u, t, k.ProjectionNode);
    }
    return m(Gn.Provider, { value: p, children: [d && p.visualElement ? s(d, { visualElement: p.visualElement, ...u }) : null, n(o, c, H4(f, p.visualElement, l), f, h, p.visualElement)] });
  }
  i.displayName = `motion.${typeof o == "string" ? o : `create(${o.displayName ?? o.name ?? ""})`}`;
  const a = Wi(i);
  return a[I4] = o, a;
}
function O4({ layoutId: e }) {
  const t = ye(po).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function F4(e, t) {
  const n = ye(Xa).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Rt(!1, r) : ze(!1, r);
  }
}
function Z4(e) {
  const { drag: t, layout: n } = Vt;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const tn = {};
function Y4(e) {
  for (const t in e)
    tn[t] = e[t], Co(t) && (tn[t].isCSSVariable = !0);
}
function Wa(e, { layout: t, layoutId: n }) {
  return Bt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!tn[e] || e === "opacity");
}
const _4 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, U4 = Dt.length;
function z4(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < U4; i++) {
    const a = Dt[i], c = e[a];
    if (c === void 0)
      continue;
    let l = !0;
    if (typeof c == "number" ? l = c === (a.startsWith("scale") ? 1 : 0) : l = parseFloat(c) === 0, !l || n) {
      const d = Fa(c, Ho[a]);
      if (!l) {
        o = !1;
        const u = _4[a] || a;
        r += `${u}(${d}) `;
      }
      n && (t[a] = d);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Zo(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let a = !1, c = !1;
  for (const l in t) {
    const d = t[l];
    if (Bt.has(l)) {
      a = !0;
      continue;
    } else if (Co(l)) {
      o[l] = d;
      continue;
    } else {
      const u = Fa(d, Ho[l]);
      l.startsWith("origin") ? (c = !0, i[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (a || n ? r.transform = z4(t, e.transform, n) : r.transform && (r.transform = "none")), c) {
    const { originX: l = "50%", originY: d = "50%", originZ: u = 0 } = i;
    r.transformOrigin = `${l} ${d} ${u}`;
  }
}
const Yo = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ec(e, t, n) {
  for (const r in t)
    !xe(t[r]) && !Wa(r, n) && (e[r] = t[r]);
}
function X4({ transformTemplate: e }, t) {
  return K(() => {
    const n = Yo();
    return Zo(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function K4(e, t) {
  const n = e.style || {}, r = {};
  return ec(r, n, e), Object.assign(r, X4(e, t)), r;
}
function G4(e, t) {
  const n = {}, r = K4(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const q4 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, J4 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Q4(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? q4 : J4;
  e[i.offset] = ee.transform(-r);
  const a = ee.transform(t), c = ee.transform(n);
  e[i.array] = `${a} ${c}`;
}
function tc(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: o,
  pathSpacing: i = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, l, d, u) {
  if (Zo(e, c, d), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: p } = e;
  h.transform && (p.transform = h.transform, delete h.transform), (p.transform || h.transformOrigin) && (p.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), p.transform && (p.transformBox = (u == null ? void 0 : u.transformBox) ?? "fill-box", delete h.transformBox), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), o !== void 0 && Q4(h, o, i, a, !1);
}
const nc = () => ({
  ...Yo(),
  attrs: {}
}), rc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function W4(e, t, n, r) {
  const o = K(() => {
    const i = nc();
    return tc(i, t, rc(r), e.transformTemplate, e.style), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    ec(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
const ep = [
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
function _o(e) {
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
      !!(ep.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function tp(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (_o(n) ? W4 : G4)(r, i, a, n), d = T4(r, typeof n == "string", e), u = n !== an ? { ...d, ...l, ref: o } : {}, { children: h } = r, p = K(() => xe(h) ? h.get() : h, [h]);
    return ea(n, {
      ...u,
      children: p
    });
  };
}
function Hs(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Uo(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = Hs(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = Hs(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function jn(e) {
  return xe(e) ? e.get() : e;
}
function np({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, o) {
  return {
    latestValues: rp(n, r, o, e),
    renderState: t()
  };
}
const oc = (e) => (t, n) => {
  const r = ye(Gn), o = ye(Kn), i = () => np(e, t, r, o);
  return n ? i() : fo(i);
};
function rp(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const p in i)
    o[p] = jn(i[p]);
  let { initial: a, animate: c } = e;
  const l = Jn(e), d = Ga(e);
  t && d && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), c === void 0 && (c = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || a === !1;
  const h = u ? c : a;
  if (h && typeof h != "boolean" && !qn(h)) {
    const p = Array.isArray(h) ? h : [h];
    for (let f = 0; f < p.length; f++) {
      const k = Uo(e, p[f]);
      if (k) {
        const { transitionEnd: v, transition: y, ...g } = k;
        for (const L in g) {
          let w = g[L];
          if (Array.isArray(w)) {
            const b = u ? w.length - 1 : 0;
            w = w[b];
          }
          w !== null && (o[L] = w);
        }
        for (const L in v)
          o[L] = v[L];
      }
    }
  }
  return o;
}
function zo(e, t, n) {
  var i;
  const { style: r } = e, o = {};
  for (const a in r)
    (xe(r[a]) || t.style && xe(t.style[a]) || Wa(a, e) || ((i = n == null ? void 0 : n.getValue(a)) == null ? void 0 : i.liveStyle) !== void 0) && (o[a] = r[a]);
  return o;
}
const op = {
  useVisualState: oc({
    scrapeMotionValuesFromProps: zo,
    createRenderState: Yo
  })
};
function sc(e, t, n) {
  const r = zo(e, t, n);
  for (const o in e)
    if (xe(e[o]) || xe(t[o])) {
      const i = Dt.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
const sp = {
  useVisualState: oc({
    scrapeMotionValuesFromProps: sc,
    createRenderState: nc
  })
};
function ip(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const a = {
      ..._o(r) ? sp : op,
      preloadedFeatures: e,
      useRender: tp(o),
      createVisualElement: t,
      Component: r
    };
    return B4(a);
  };
}
function nn(e, t, n) {
  const r = e.getProps();
  return Uo(r, t, n !== void 0 ? n : r.custom, e);
}
const zr = (e) => Array.isArray(e);
function ap(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Nt(n));
}
function cp(e) {
  return zr(e) ? e[e.length - 1] || 0 : e;
}
function lp(e, t) {
  const n = nn(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const a in i) {
    const c = cp(i[a]);
    ap(e, a, c);
  }
}
function dp(e) {
  return !!(xe(e) && e.add);
}
function Xr(e, t) {
  const n = e.getValue("willChange");
  if (dp(n))
    return n.add(t);
  if (!n && Xe.WillChange) {
    const r = new Xe.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function ic(e) {
  return e.props[qa];
}
const up = (e) => e !== null;
function hp(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(up), i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return o[i];
}
const pp = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, fp = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), mp = {
  type: "keyframes",
  duration: 0.8
}, gp = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, vp = (e, { keyframes: t }) => t.length > 2 ? mp : Bt.has(e) ? e.startsWith("scale") ? fp(t[1]) : pp : gp;
function kp({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: c, from: l, elapsed: d, ...u }) {
  return !!Object.keys(u).length;
}
const Xo = (e, t, n, r = {}, o, i) => (a) => {
  const c = Io(r, e) || {}, l = c.delay || r.delay || 0;
  let { elapsed: d = 0 } = r;
  d = d - /* @__PURE__ */ He(l);
  const u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...c,
    delay: -d,
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
  kp(c) || Object.assign(u, vp(e, u)), u.duration && (u.duration = /* @__PURE__ */ He(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ He(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let h = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (h = !0)), (Xe.instantAnimations || Xe.skipAnimations) && (h = !0, u.duration = 0, u.delay = 0), u.allowFlatten = !c.type && !c.ease, h && !i && t.get() !== void 0) {
    const p = hp(u.keyframes, c);
    if (p !== void 0) {
      le.update(() => {
        u.onUpdate(p), u.onComplete();
      });
      return;
    }
  }
  return c.isSync ? new jo(u) : new q2(u);
};
function Lp({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function ac(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...c } = t;
  r && (i = r);
  const l = [], d = o && e.animationState && e.animationState.getState()[o];
  for (const u in c) {
    const h = e.getValue(u, e.latestValues[u] ?? null), p = c[u];
    if (p === void 0 || d && Lp(d, u))
      continue;
    const f = {
      delay: n,
      ...Io(i || {}, u)
    }, k = h.get();
    if (k !== void 0 && !h.isAnimating && !Array.isArray(p) && p === k && !f.velocity)
      continue;
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const g = ic(e);
      if (g) {
        const L = window.MotionHandoffAnimation(g, u, le);
        L !== null && (f.startTime = L, v = !0);
      }
    }
    Xr(e, u), h.start(Xo(u, h, p, e.shouldReduceMotion && Ra.has(u) ? { type: !1 } : f, e, v));
    const y = h.animation;
    y && l.push(y);
  }
  return a && Promise.all(l).then(() => {
    le.update(() => {
      a && lp(e, a);
    });
  }), l;
}
function Kr(e, t, n = {}) {
  var l;
  const r = nn(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(ac(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (d = 0) => {
    const { delayChildren: u = 0, staggerChildren: h, staggerDirection: p } = o;
    return wp(e, t, d, u, h, p, n);
  } : () => Promise.resolve(), { when: c } = o;
  if (c) {
    const [d, u] = c === "beforeChildren" ? [i, a] : [a, i];
    return d().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function wp(e, t, n = 0, r = 0, o = 0, i = 1, a) {
  const c = [], l = e.variantChildren.size, d = (l - 1) * o, u = typeof r == "function", h = u ? (p) => r(p, l) : (
    // Support deprecated staggerChildren
    i === 1 ? (p = 0) => p * o : (p = 0) => d - p * o
  );
  return Array.from(e.variantChildren).sort(yp).forEach((p, f) => {
    p.notify("AnimationStart", t), c.push(Kr(p, t, {
      ...a,
      delay: n + (u ? 0 : r) + h(f)
    }).then(() => p.notify("AnimationComplete", t)));
  }), Promise.all(c);
}
function yp(e, t) {
  return e.sortNodePosition(t);
}
function Mp(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Kr(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Kr(e, t, n);
  else {
    const o = typeof t == "function" ? nn(e, t, n.custom) : t;
    r = Promise.all(ac(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function cc(e, t) {
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
const Cp = Oo.length;
function lc(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? lc(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Cp; n++) {
    const r = Oo[n], o = e.props[r];
    (en(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const xp = [...Bo].reverse(), bp = Bo.length;
function Np(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Mp(e, n, r)));
}
function Vp(e) {
  let t = Np(e), n = Rs(), r = !0;
  const o = (l) => (d, u) => {
    var p;
    const h = nn(e, u, l === "exit" ? (p = e.presenceContext) == null ? void 0 : p.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: k, ...v } = h;
      d = { ...d, ...v, ...k };
    }
    return d;
  };
  function i(l) {
    t = l(e);
  }
  function a(l) {
    const { props: d } = e, u = lc(e.parent) || {}, h = [], p = /* @__PURE__ */ new Set();
    let f = {}, k = 1 / 0;
    for (let y = 0; y < bp; y++) {
      const g = xp[y], L = n[g], w = d[g] !== void 0 ? d[g] : u[g], b = en(w), V = g === l ? L.isActive : null;
      V === !1 && (k = y);
      let M = w === u[g] && w !== d[g] && b;
      if (M && r && e.manuallyAnimateOnMount && (M = !1), L.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !L.isActive && V === null || // If we didn't and don't have any defined prop for this animation type
      !w && !L.prevProp || // Or if the prop doesn't define an animation
      qn(w) || typeof w == "boolean")
        continue;
      const x = Sp(L.prevProp, w);
      let C = x || // If we're making this variant active, we want to always make it active
      g === l && L.isActive && !M && b || // If we removed a higher-priority variant (i is in reverse order)
      y > k && b, $ = !1;
      const S = Array.isArray(w) ? w : [w];
      let T = S.reduce(o(g), {});
      V === !1 && (T = {});
      const { prevResolvedValues: N = {} } = L, j = {
        ...N,
        ...T
      }, A = (B) => {
        C = !0, p.has(B) && ($ = !0, p.delete(B)), L.needsAnimating[B] = !0;
        const z = e.getValue(B);
        z && (z.liveStyle = !1);
      };
      for (const B in j) {
        const z = T[B], P = N[B];
        if (f.hasOwnProperty(B))
          continue;
        let R = !1;
        zr(z) && zr(P) ? R = !cc(z, P) : R = z !== P, R ? z != null ? A(B) : p.add(B) : z !== void 0 && p.has(B) ? A(B) : L.protectedKeys[B] = !0;
      }
      L.prevProp = w, L.prevResolvedValues = T, L.isActive && (f = { ...f, ...T }), r && e.blockInitialAnimation && (C = !1), C && (!(M && x) || $) && h.push(...S.map((B) => ({
        animation: B,
        options: { type: g }
      })));
    }
    if (p.size) {
      const y = {};
      if (typeof d.initial != "boolean") {
        const g = nn(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        g && g.transition && (y.transition = g.transition);
      }
      p.forEach((g) => {
        const L = e.getBaseTarget(g), w = e.getValue(g);
        w && (w.liveStyle = !0), y[g] = L ?? null;
      }), h.push({ animation: y });
    }
    let v = !!h.length;
    return r && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(h) : Promise.resolve();
  }
  function c(l, d) {
    var h;
    if (n[l].isActive === d)
      return Promise.resolve();
    (h = e.variantChildren) == null || h.forEach((p) => {
      var f;
      return (f = p.animationState) == null ? void 0 : f.setActive(l, d);
    }), n[l].isActive = d;
    const u = a(l);
    for (const p in n)
      n[p].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: a,
    setActive: c,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = Rs(), r = !0;
    }
  };
}
function Sp(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !cc(t, e) : !1;
}
function rt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Rs() {
  return {
    animate: rt(!0),
    whileInView: rt(),
    whileHover: rt(),
    whileTap: rt(),
    whileDrag: rt(),
    whileFocus: rt(),
    exit: rt()
  };
}
class tt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class $p extends tt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Vp(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    qn(t) && (this.unmountControls = t.subscribe(this.node));
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
let Tp = 0;
class jp extends tt {
  constructor() {
    super(...arguments), this.id = Tp++;
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
const Ap = {
  animation: {
    Feature: $p
  },
  exit: {
    Feature: jp
  }
};
function rn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function un(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const Pp = (e) => (t) => Eo(t) && e(t, un(t));
function Xt(e, t, n, r) {
  return rn(e, t, Pp(n), r);
}
function dc({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Ip({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Hp(e, t) {
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
const uc = 1e-4, Rp = 1 - uc, Ep = 1 + uc, hc = 0.01, Dp = 0 - hc, Bp = 0 + hc;
function be(e) {
  return e.max - e.min;
}
function Op(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Es(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ue(t.min, t.max, e.origin), e.scale = be(n) / be(t), e.translate = ue(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Rp && e.scale <= Ep || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Dp && e.translate <= Bp || isNaN(e.translate)) && (e.translate = 0);
}
function Kt(e, t, n, r) {
  Es(e.x, t.x, n.x, r ? r.originX : void 0), Es(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ds(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + be(t);
}
function Fp(e, t, n) {
  Ds(e.x, t.x, n.x), Ds(e.y, t.y, n.y);
}
function Bs(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + be(t);
}
function Gt(e, t, n) {
  Bs(e.x, t.x, n.x), Bs(e.y, t.y, n.y);
}
const Os = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ct = () => ({
  x: Os(),
  y: Os()
}), Fs = () => ({ min: 0, max: 0 }), fe = () => ({
  x: Fs(),
  y: Fs()
});
function $e(e) {
  return [e("x"), e("y")];
}
function Mr(e) {
  return e === void 0 || e === 1;
}
function Gr({ scale: e, scaleX: t, scaleY: n }) {
  return !Mr(e) || !Mr(t) || !Mr(n);
}
function ot(e) {
  return Gr(e) || pc(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function pc(e) {
  return Zs(e.x) || Zs(e.y);
}
function Zs(e) {
  return e && e !== "0%";
}
function Yn(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Ys(e, t, n, r, o) {
  return o !== void 0 && (e = Yn(e, o, r)), Yn(e, n, r) + t;
}
function qr(e, t = 0, n = 1, r, o) {
  e.min = Ys(e.min, t, n, r, o), e.max = Ys(e.max, t, n, r, o);
}
function fc(e, { x: t, y: n }) {
  qr(e.x, t.translate, t.scale, t.originPoint), qr(e.y, n.translate, n.scale, n.originPoint);
}
const _s = 0.999999999999, Us = 1.0000000000001;
function Zp(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let c = 0; c < o; c++) {
    i = n[c], a = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && bt(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, fc(e, a)), r && ot(i.latestValues) && bt(e, i.latestValues));
  }
  t.x < Us && t.x > _s && (t.x = 1), t.y < Us && t.y > _s && (t.y = 1);
}
function xt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function zs(e, t, n, r, o = 0.5) {
  const i = ue(e.min, e.max, o);
  qr(e, t, n, i, r);
}
function bt(e, t) {
  zs(e.x, t.x, t.scaleX, t.scale, t.originX), zs(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function mc(e, t) {
  return dc(Hp(e.getBoundingClientRect(), t));
}
function Yp(e, t, n) {
  const r = mc(e, n), { scroll: o } = t;
  return o && (xt(r.x, o.offset.x), xt(r.y, o.offset.y)), r;
}
const gc = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Xs = (e, t) => Math.abs(e - t);
function _p(e, t) {
  const n = Xs(e.x, t.x), r = Xs(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class vc {
  constructor(t, n, { transformPagePoint: r, contextWindow: o = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const p = xr(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, k = _p(p.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!f && !k)
        return;
      const { point: v } = p, { timestamp: y } = Le;
      this.history.push({ ...v, timestamp: y });
      const { onStart: g, onMove: L } = this.handlers;
      f || (g && g(this.lastMoveEvent, p), this.startEvent = this.lastMoveEvent), L && L(this.lastMoveEvent, p);
    }, this.handlePointerMove = (p, f) => {
      this.lastMoveEvent = p, this.lastMoveEventInfo = Cr(f, this.transformPagePoint), le.update(this.updatePoint, !0);
    }, this.handlePointerUp = (p, f) => {
      this.end();
      const { onEnd: k, onSessionEnd: v, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = xr(p.type === "pointercancel" ? this.lastMoveEventInfo : Cr(f, this.transformPagePoint), this.history);
      this.startEvent && k && k(p, g), v && v(p, g);
    }, !Eo(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = a, this.contextWindow = o || window;
    const c = un(t), l = Cr(c, this.transformPagePoint), { point: d } = l, { timestamp: u } = Le;
    this.history = [{ ...d, timestamp: u }];
    const { onSessionStart: h } = n;
    h && h(t, xr(l, this.history)), this.removeListeners = cn(Xt(this.contextWindow, "pointermove", this.handlePointerMove), Xt(this.contextWindow, "pointerup", this.handlePointerUp), Xt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), We(this.updatePoint);
  }
}
function Cr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ks(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function xr({ point: e }, t) {
  return {
    point: e,
    delta: Ks(e, kc(t)),
    offset: Ks(e, Up(t)),
    velocity: zp(t, 0.1)
  };
}
function Up(e) {
  return e[0];
}
function kc(e) {
  return e[e.length - 1];
}
function zp(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = kc(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ He(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = /* @__PURE__ */ Fe(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Xp(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ue(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ue(n, e, r.max) : Math.min(e, n)), e;
}
function Gs(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Kp(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Gs(e.x, n, o),
    y: Gs(e.y, t, r)
  };
}
function qs(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Gp(e, t) {
  return {
    x: qs(e.x, t.x),
    y: qs(e.y, t.y)
  };
}
function qp(e, t) {
  let n = 0.5;
  const r = be(e), o = be(t);
  return o > r ? n = /* @__PURE__ */ Jt(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ Jt(e.min, e.max - o, t.min)), Ue(0, 1, n);
}
function Jp(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Jr = 0.35;
function Qp(e = Jr) {
  return e === !1 ? e = 0 : e === !0 && (e = Jr), {
    x: Js(e, "left", "right"),
    y: Js(e, "top", "bottom")
  };
}
function Js(e, t, n) {
  return {
    min: Qs(e, t),
    max: Qs(e, n)
  };
}
function Qs(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Wp = /* @__PURE__ */ new WeakMap();
class ef {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = fe(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const i = (h) => {
      const { dragSnapToOrigin: p } = this.getProps();
      p ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(un(h).point);
    }, a = (h, p) => {
      const { drag: f, dragPropagation: k, onDragStart: v } = this.getProps();
      if (f && !k && (this.openDragLock && this.openDragLock(), this.openDragLock = p4(f), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = p, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $e((g) => {
        let L = this.getAxisMotionValue(g).get() || 0;
        if (Ze.test(L)) {
          const { projection: w } = this.visualElement;
          if (w && w.layout) {
            const b = w.layout.layoutBox[g];
            b && (L = be(b) * (parseFloat(L) / 100));
          }
        }
        this.originPoint[g] = L;
      }), v && le.postRender(() => v(h, p)), Xr(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, c = (h, p) => {
      this.latestPointerEvent = h, this.latestPanInfo = p;
      const { dragPropagation: f, dragDirectionLock: k, onDirectionLock: v, onDrag: y } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: g } = p;
      if (k && this.currentDirection === null) {
        this.currentDirection = tf(g), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", p.point, g), this.updateAxis("y", p.point, g), this.visualElement.render(), y && y(h, p);
    }, l = (h, p) => {
      this.latestPointerEvent = h, this.latestPanInfo = p, this.stop(h, p), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, d = () => $e((h) => {
      var p;
      return this.getAnimationState(h) === "paused" && ((p = this.getAxisMotionValue(h).animation) == null ? void 0 : p.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new vc(t, {
      onSessionStart: i,
      onStart: a,
      onMove: c,
      onSessionEnd: l,
      resumeAnimation: d
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: r,
      contextWindow: gc(this.visualElement)
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
    c && le.postRender(() => c(r, o));
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
    if (!r || !xn(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = Xp(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, o = this.constraints;
    t && Mt(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Kp(r.layoutBox, t) : this.constraints = !1, this.elastic = Qp(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && $e((a) => {
      this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = Jp(r.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Mt(t))
      return !1;
    const r = t.current;
    ze(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = Yp(r, o.root, this.visualElement.getTransformPagePoint());
    let a = Gp(o.layout.layoutBox, i);
    if (n) {
      const c = n(Ip(a));
      this.hasMutatedConstraints = !!c, c && (a = dc(c));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: c } = this.getProps(), l = this.constraints || {}, d = $e((u) => {
      if (!xn(u, n, this.currentDirection))
        return;
      let h = l && l[u] || {};
      a && (h = { min: 0, max: 0 });
      const p = o ? 200 : 1e6, f = o ? 40 : 1e7, k = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: p,
        bounceDamping: f,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...h
      };
      return this.startAxisValueAnimation(u, k);
    });
    return Promise.all(d).then(c);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Xr(this.visualElement, t), r.start(Xo(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    $e((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    $e((t) => {
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
    $e((n) => {
      const { drag: r } = this.getProps();
      if (!xn(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: c } = o.layout.layoutBox[n];
        i.set(t[n] - ue(a, c, 0.5));
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
    if (!Mt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    $e((a) => {
      const c = this.getAxisMotionValue(a);
      if (c && this.constraints !== !1) {
        const l = c.get();
        o[a] = qp({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), $e((a) => {
      if (!xn(a, t, null))
        return;
      const c = this.getAxisMotionValue(a), { min: l, max: d } = this.constraints[a];
      c.set(ue(l, d, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Wp.set(this.visualElement, this);
    const t = this.visualElement.current, n = Xt(t, "pointerdown", (l) => {
      const { drag: d, dragListener: u = !0 } = this.getProps();
      d && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Mt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), le.read(r);
    const a = rn(window, "resize", () => this.scalePositionWithinConstraints()), c = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: d }) => {
      this.isDragging && d && ($e((u) => {
        const h = this.getAxisMotionValue(u);
        h && (this.originPoint[u] += l[u].translate, h.set(h.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), i(), c && c();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Jr, dragMomentum: c = !0 } = t;
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
function xn(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function tf(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class nf extends tt {
  constructor(t) {
    super(t), this.removeGroupControls = Te, this.removeListeners = Te, this.controls = new ef(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Te;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ws = (e) => (t, n) => {
  e && le.postRender(() => e(t, n));
};
class rf extends tt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Te;
  }
  onPointerDown(t) {
    this.session = new vc(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: gc(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Ws(t),
      onStart: Ws(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && le.postRender(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Xt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const An = {
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
function ei(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Yt = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ee.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = ei(e, t.target.x), r = ei(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, of = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = et.parse(e);
    if (o.length > 5)
      return r;
    const i = et.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, c = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + a] /= c, o[1 + a] /= l;
    const d = ue(c, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= d), typeof o[3 + a] == "number" && (o[3 + a] /= d), i(o);
  }
};
let ti = !1;
class sf extends Vl {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    Y4(af), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), ti && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), An.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, { projection: a } = r;
    return a && (a.isPresent = i, ti = !0, o || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || le.postRender(() => {
      const c = a.getStack();
      (!c || !c.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Ro.postRender(() => {
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
function Lc(e) {
  const [t, n] = za(), r = ye(po);
  return s(sf, { ...e, layoutGroup: r, switchLayoutGroup: ye(Ja), isPresent: t, safeToRemove: n });
}
const af = {
  borderRadius: {
    ...Yt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Yt,
  borderTopRightRadius: Yt,
  borderBottomLeftRadius: Yt,
  borderBottomRightRadius: Yt,
  boxShadow: of
};
function cf(e, t, n) {
  const r = xe(e) ? e : Nt(e);
  return r.start(Xo("", r, t, n)), r.animation;
}
const lf = (e, t) => e.depth - t.depth;
class df {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    go(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    vo(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(lf), this.isDirty = !1, this.children.forEach(t);
  }
}
function uf(e, t) {
  const n = Ne.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (We(r), e(i - t));
  };
  return le.setup(r, !0), () => We(r);
}
const wc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], hf = wc.length, ni = (e) => typeof e == "string" ? parseFloat(e) : e, ri = (e) => typeof e == "number" || ee.test(e);
function pf(e, t, n, r, o, i) {
  o ? (e.opacity = ue(0, n.opacity ?? 1, ff(r)), e.opacityExit = ue(t.opacity ?? 1, 0, mf(r))) : i && (e.opacity = ue(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let a = 0; a < hf; a++) {
    const c = `border${wc[a]}Radius`;
    let l = oi(t, c), d = oi(n, c);
    if (l === void 0 && d === void 0)
      continue;
    l || (l = 0), d || (d = 0), l === 0 || d === 0 || ri(l) === ri(d) ? (e[c] = Math.max(ue(ni(l), ni(d), r), 0), (Ze.test(d) || Ze.test(l)) && (e[c] += "%")) : e[c] = d;
  }
  (t.rotate || n.rotate) && (e.rotate = ue(t.rotate || 0, n.rotate || 0, r));
}
function oi(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ff = /* @__PURE__ */ yc(0, 0.5, pa), mf = /* @__PURE__ */ yc(0.5, 0.95, Te);
function yc(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Jt(e, t, r));
}
function si(e, t) {
  e.min = t.min, e.max = t.max;
}
function Se(e, t) {
  si(e.x, t.x), si(e.y, t.y);
}
function ii(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function ai(e, t, n, r, o) {
  return e -= t, e = Yn(e, 1 / n, r), o !== void 0 && (e = Yn(e, 1 / o, r)), e;
}
function gf(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (Ze.test(t) && (t = parseFloat(t), t = ue(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let c = ue(i.min, i.max, r);
  e === i && (c -= t), e.min = ai(e.min, t, n, c, o), e.max = ai(e.max, t, n, c, o);
}
function ci(e, t, [n, r, o], i, a) {
  gf(e, t[n], t[r], t[o], t.scale, i, a);
}
const vf = ["x", "scaleX", "originX"], kf = ["y", "scaleY", "originY"];
function li(e, t, n, r) {
  ci(e.x, t, vf, n ? n.x : void 0, r ? r.x : void 0), ci(e.y, t, kf, n ? n.y : void 0, r ? r.y : void 0);
}
function di(e) {
  return e.translate === 0 && e.scale === 1;
}
function Mc(e) {
  return di(e.x) && di(e.y);
}
function ui(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Lf(e, t) {
  return ui(e.x, t.x) && ui(e.y, t.y);
}
function hi(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Cc(e, t) {
  return hi(e.x, t.x) && hi(e.y, t.y);
}
function pi(e) {
  return be(e.x) / be(e.y);
}
function fi(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class wf {
  constructor() {
    this.members = [];
  }
  add(t) {
    go(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (vo(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function yf(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, a = (n == null ? void 0 : n.z) || 0;
  if ((o || i || a) && (r = `translate3d(${o}px, ${i}px, ${a}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: d, rotate: u, rotateX: h, rotateY: p, skewX: f, skewY: k } = n;
    d && (r = `perspective(${d}px) ${r}`), u && (r += `rotate(${u}deg) `), h && (r += `rotateX(${h}deg) `), p && (r += `rotateY(${p}deg) `), f && (r += `skewX(${f}deg) `), k && (r += `skewY(${k}deg) `);
  }
  const c = e.x.scale * t.x, l = e.y.scale * t.y;
  return (c !== 1 || l !== 1) && (r += `scale(${c}, ${l})`), r || "none";
}
const br = ["", "X", "Y", "Z"], Mf = 1e3;
let Cf = 0;
function Nr(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function xc(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = ic(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", le, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && xc(r);
}
function bc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, c = t == null ? void 0 : t()) {
      this.id = Cf++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Nf), this.nodes.forEach(Tf), this.nodes.forEach(jf), this.nodes.forEach(Vf);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = c ? c.root || c : this, this.path = c ? [...c.path, c] : [], this.parent = c, this.depth = c ? c.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new df());
    }
    addEventListener(a, c) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Lo()), this.eventHandlers.get(a).add(c);
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
      this.isSVG = Ua(a) && !L4(a), this.instance = a;
      const { layoutId: c, layout: l, visualElement: d } = this.options;
      if (d && !d.current && d.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || c) && (this.isLayoutDirty = !0), e) {
        let u, h = 0;
        const p = () => this.root.updateBlockedByResize = !1;
        le.read(() => {
          h = window.innerWidth;
        }), e(a, () => {
          const f = window.innerWidth;
          f !== h && (h = f, this.root.updateBlockedByResize = !0, u && u(), u = uf(p, 250), An.hasAnimatedSinceResize && (An.hasAnimatedSinceResize = !1, this.nodes.forEach(vi)));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: h, hasRelativeLayoutChanged: p, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const k = this.options.transition || d.getDefaultTransition() || Rf, { onLayoutAnimationStart: v, onLayoutAnimationComplete: y } = d.getProps(), g = !this.targetLayout || !Cc(this.targetLayout, f), L = !h && p;
        if (this.options.layoutRoot || this.resumeFrom || L || h && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const w = {
            ...Io(k, "layout"),
            onPlay: v,
            onComplete: y
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w), this.setAnimationOrigin(u, L);
        } else
          h || vi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = f;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), We(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Af), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && xc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: c, layout: l } = this.options;
      if (c === void 0 && !l)
        return;
      const d = this.getTransformTemplate();
      this.prevTransformTemplateValue = d ? d(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(mi);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(gi);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach($f), this.nodes.forEach(xf), this.nodes.forEach(bf)) : this.nodes.forEach(gi), this.clearAllSnapshots();
      const c = Ne.now();
      Le.delta = Ue(0, 1e3 / 60, c - Le.timestamp), Le.timestamp = c, Le.isProcessing = !0, gr.update.process(Le), gr.preRender.process(Le), gr.render.process(Le), Le.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ro.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Sf), this.sharedNodes.forEach(Pf);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, le.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      le.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !be(this.snapshot.measuredBox.x) && !be(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = fe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, c = this.projectionDelta && !Mc(this.projectionDelta), l = this.getTransformTemplate(), d = l ? l(this.latestValues, "") : void 0, u = d !== this.prevTransformTemplateValue;
      a && this.instance && (c || ot(this.latestValues) || u) && (o(this.instance, d), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const c = this.measurePageBox();
      let l = this.removeElementScroll(c);
      return a && (l = this.removeTransform(l)), Ef(l), {
        animationId: this.root.animationId,
        measuredBox: c,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var d;
      const { visualElement: a } = this.options;
      if (!a)
        return fe();
      const c = a.measureViewportBox();
      if (!(((d = this.scroll) == null ? void 0 : d.wasRoot) || this.path.some(Df))) {
        const { scroll: u } = this.root;
        u && (xt(c.x, u.offset.x), xt(c.y, u.offset.y));
      }
      return c;
    }
    removeElementScroll(a) {
      var l;
      const c = fe();
      if (Se(c, a), (l = this.scroll) != null && l.wasRoot)
        return c;
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d], { scroll: h, options: p } = u;
        u !== this.root && h && p.layoutScroll && (h.wasRoot && Se(c, a), xt(c.x, h.offset.x), xt(c.y, h.offset.y));
      }
      return c;
    }
    applyTransform(a, c = !1) {
      const l = fe();
      Se(l, a);
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        !c && u.options.layoutScroll && u.scroll && u !== u.root && bt(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), ot(u.latestValues) && bt(l, u.latestValues);
      }
      return ot(this.latestValues) && bt(l, this.latestValues), l;
    }
    removeTransform(a) {
      const c = fe();
      Se(c, a);
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l];
        if (!d.instance || !ot(d.latestValues))
          continue;
        Gr(d.latestValues) && d.updateSnapshot();
        const u = fe(), h = d.measurePageBox();
        Se(u, h), li(c, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, u);
      }
      return ot(this.latestValues) && li(c, this.latestValues), c;
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
      const { layout: u, layoutId: h } = this.options;
      if (!(!this.layout || !(u || h))) {
        if (this.resolvedRelativeTargetAt = Le.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = fe(), this.relativeTargetOrigin = fe(), Gt(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), Se(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = fe(), this.targetWithTransforms = fe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Fp(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Se(this.target, this.layout.layoutBox), fc(this.target, this.targetDelta)) : Se(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = fe(), this.relativeTargetOrigin = fe(), Gt(this.relativeTargetOrigin, this.target, f.target), Se(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Gr(this.parent.latestValues) || pc(this.parent.latestValues)))
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
      const { layout: d, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || u))
        return;
      Se(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, p = this.treeScale.y;
      Zp(this.layoutCorrected, this.treeScale, this.path, c), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = fe());
      const { target: f } = a;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ii(this.prevProjectionDelta.x, this.projectionDelta.x), ii(this.prevProjectionDelta.y, this.projectionDelta.y)), Kt(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== p || !fi(this.projectionDelta.x, this.prevProjectionDelta.x) || !fi(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
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
      this.prevProjectionDelta = Ct(), this.projectionDelta = Ct(), this.projectionDeltaWithTransform = Ct();
    }
    setAnimationOrigin(a, c = !1) {
      const l = this.snapshot, d = l ? l.latestValues : {}, u = { ...this.latestValues }, h = Ct();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !c;
      const p = fe(), f = l ? l.source : void 0, k = this.layout ? this.layout.source : void 0, v = f !== k, y = this.getStack(), g = !y || y.members.length <= 1, L = !!(v && !g && this.options.crossfade === !0 && !this.path.some(Hf));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (b) => {
        const V = b / 1e3;
        ki(h.x, a.x, V), ki(h.y, a.y, V), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Gt(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), If(this.relativeTarget, this.relativeTargetOrigin, p, V), w && Lf(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = fe()), Se(w, this.relativeTarget)), v && (this.animationValues = u, pf(u, d, this.latestValues, V, L, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = V;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      var c, l, d;
      this.notifyListeners("animationStart"), (c = this.currentAnimation) == null || c.stop(), (d = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || d.stop(), this.pendingAnimation && (We(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = le.update(() => {
        An.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Nt(0)), this.currentAnimation = cf(this.motionValue, [0, 1e3], {
          ...a,
          velocity: 0,
          isSync: !0,
          onUpdate: (u) => {
            this.mixTargetDelta(u), a.onUpdate && a.onUpdate(u);
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Mf), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: c, target: l, layout: d, latestValues: u } = a;
      if (!(!c || !l || !d)) {
        if (this !== a && this.layout && d && Nc(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
          l = this.target || fe();
          const h = be(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + h;
          const p = be(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + p;
        }
        Se(c, l), bt(c, u), Kt(this.projectionDeltaWithTransform, this.layoutCorrected, c, u);
      }
    }
    registerSharedNode(a, c) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new wf()), this.sharedNodes.get(a).add(c);
      const d = c.options.initialPromotionConfig;
      c.promote({
        transition: d ? d.transition : void 0,
        preserveFollowOpacity: d && d.shouldPreserveFollowOpacity ? d.shouldPreserveFollowOpacity(c) : void 0
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
      const d = this.getStack();
      d && d.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), c && this.setOptions({ transition: c });
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
      const d = {};
      l.z && Nr("z", a, d, this.animationValues);
      for (let u = 0; u < br.length; u++)
        Nr(`rotate${br[u]}`, a, d, this.animationValues), Nr(`skew${br[u]}`, a, d, this.animationValues);
      a.render();
      for (const u in d)
        a.setStaticValue(u, d[u]), this.animationValues && (this.animationValues[u] = d[u]);
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
        this.needsReset = !1, a.visibility = "", a.opacity = "", a.pointerEvents = jn(c == null ? void 0 : c.pointerEvents) || "", a.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        this.options.layoutId && (a.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, a.pointerEvents = jn(c == null ? void 0 : c.pointerEvents) || ""), this.hasProjected && !ot(this.latestValues) && (a.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      a.visibility = "";
      const u = d.animationValues || d.latestValues;
      this.applyTransformsToTarget();
      let h = yf(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (h = l(u, h)), a.transform = h;
      const { x: p, y: f } = this.projectionDelta;
      a.transformOrigin = `${p.origin * 100}% ${f.origin * 100}% 0`, d.animationValues ? a.opacity = d === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : a.opacity = d === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const k in tn) {
        if (u[k] === void 0)
          continue;
        const { correct: v, applyTo: y, isCSSVariable: g } = tn[k], L = h === "none" ? u[k] : v(u[k], d);
        if (y) {
          const w = y.length;
          for (let b = 0; b < w; b++)
            a[y[b]] = L;
        } else
          g ? this.options.visualElement.renderState.vars[k] = L : a[k] = L;
      }
      this.options.layoutId && (a.pointerEvents = d === this ? jn(c == null ? void 0 : c.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var c;
        return (c = a.currentAnimation) == null ? void 0 : c.stop();
      }), this.root.nodes.forEach(mi), this.root.sharedNodes.clear();
    }
  };
}
function xf(e) {
  e.updateLayout();
}
function bf(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
    i === "size" ? $e((h) => {
      const p = a ? t.measuredBox[h] : t.layoutBox[h], f = be(p);
      p.min = r[h].min, p.max = p.min + f;
    }) : Nc(i, t.layoutBox, r) && $e((h) => {
      const p = a ? t.measuredBox[h] : t.layoutBox[h], f = be(r[h]);
      p.max = p.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[h].max = e.relativeTarget[h].min + f);
    });
    const c = Ct();
    Kt(c, r, t.layoutBox);
    const l = Ct();
    a ? Kt(l, e.applyTransform(o, !0), t.measuredBox) : Kt(l, r, t.layoutBox);
    const d = !Mc(c);
    let u = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: p, layout: f } = h;
        if (p && f) {
          const k = fe();
          Gt(k, t.layoutBox, p.layoutBox);
          const v = fe();
          Gt(v, r, f.layoutBox), Cc(k, v) || (u = !0), h.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = k, e.relativeParent = h);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: c,
      hasLayoutChanged: d,
      hasRelativeLayoutChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Nf(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Vf(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Sf(e) {
  e.clearSnapshot();
}
function mi(e) {
  e.clearMeasurements();
}
function gi(e) {
  e.isLayoutDirty = !1;
}
function $f(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function vi(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Tf(e) {
  e.resolveTargetDelta();
}
function jf(e) {
  e.calcProjection();
}
function Af(e) {
  e.resetSkewAndRotation();
}
function Pf(e) {
  e.removeLeadSnapshot();
}
function ki(e, t, n) {
  e.translate = ue(t.translate, 0, n), e.scale = ue(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Li(e, t, n, r) {
  e.min = ue(t.min, n.min, r), e.max = ue(t.max, n.max, r);
}
function If(e, t, n, r) {
  Li(e.x, t.x, n.x, r), Li(e.y, t.y, n.y, r);
}
function Hf(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Rf = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, wi = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), yi = wi("applewebkit/") && !wi("chrome/") ? Math.round : Te;
function Mi(e) {
  e.min = yi(e.min), e.max = yi(e.max);
}
function Ef(e) {
  Mi(e.x), Mi(e.y);
}
function Nc(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Op(pi(t), pi(n), 0.2);
}
function Df(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Bf = bc({
  attachResizeListener: (e, t) => rn(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Vr = {
  current: void 0
}, Vc = bc({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Vr.current) {
      const e = new Bf({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Vr.current = e;
    }
    return Vr.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Of = {
  pan: {
    Feature: rf
  },
  drag: {
    Feature: nf,
    ProjectionNode: Vc,
    MeasureLayout: Lc
  }
};
function Ci(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, i = r[o];
  i && le.postRender(() => i(t, un(t)));
}
class Ff extends tt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = f4(t, (n, r) => (Ci(this.node, r, "Start"), (o) => Ci(this.node, o, "End"))));
  }
  unmount() {
  }
}
class Zf extends tt {
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
    this.unmount = cn(rn(this.node.current, "focus", () => this.onFocus()), rn(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function xi(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), i = r[o];
  i && le.postRender(() => i(t, un(t)));
}
class Yf extends tt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = k4(t, (n, r) => (xi(this.node, r, "Start"), (o, { success: i }) => xi(this.node, o, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Qr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), _f = (e) => {
  const t = Qr.get(e.target);
  t && t(e);
}, Uf = (e) => {
  e.forEach(_f);
};
function zf({ root: e, ...t }) {
  const n = e || document;
  Sr.has(n) || Sr.set(n, {});
  const r = Sr.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Uf, { root: e, ...t })), r[o];
}
function Xf(e, t, n) {
  const r = zf(t);
  return Qr.set(e, n), r.observe(e), () => {
    Qr.delete(e), r.unobserve(e);
  };
}
const Kf = {
  some: 0,
  all: 1
};
class Gf extends tt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : Kf[o]
    }, c = (l) => {
      const { isIntersecting: d } = l;
      if (this.isInView === d || (this.isInView = d, i && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), p = d ? u : h;
      p && p(l);
    };
    return Xf(this.node.current, a, c);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(qf(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function qf({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Jf = {
  inView: {
    Feature: Gf
  },
  tap: {
    Feature: Yf
  },
  focus: {
    Feature: Zf
  },
  hover: {
    Feature: Ff
  }
}, Qf = {
  layout: {
    ProjectionNode: Vc,
    MeasureLayout: Lc
  }
}, Wr = { current: null }, Sc = { current: !1 };
function Wf() {
  if (Sc.current = !0, !!mo)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Wr.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Wr.current = !1;
}
const e0 = /* @__PURE__ */ new WeakMap();
function t0(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (xe(o))
      e.addValue(r, o);
    else if (xe(i))
      e.addValue(r, Nt(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const a = e.getValue(r);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = e.getStaticValue(r);
        e.addValue(r, Nt(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const bi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class n0 {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ao, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = Ne.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, le.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: d } = a;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = d, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = c, this.blockInitialAnimation = !!i, this.isControllingVariants = Jn(n), this.isVariantNode = Ga(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in h) {
      const f = h[p];
      l[p] !== void 0 && xe(f) && f.set(l[p], !1);
    }
  }
  mount(t) {
    this.current = t, e0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Sc.current || Wf(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Wr.current, process.env.NODE_ENV !== "production" && wo(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), We(this.notifyUpdate), We(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = Bt.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (c) => {
      this.latestValues[t] = c, this.props.onUpdate && le.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in Vt) {
      const n = Vt[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : fe();
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
    for (let r = 0; r < bi.length; r++) {
      const o = bi[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, a = t[i];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = t0(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return r === void 0 && n !== void 0 && (r = Nt(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (ra(r) || sa(r)) ? r = parseFloat(r) : !y4(r) && et.test(n) && (r = Oa(t, n)), this.setBaseTarget(t, xe(r) ? r.get() : r)), xe(r) ? r.get() : r;
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
      const a = Uo(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
      a && (r = a[t]);
    }
    if (n && r !== void 0)
      return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !xe(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Lo()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class $c extends n0 {
  constructor() {
    super(...arguments), this.KeyframeResolver = l4;
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
    xe(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Tc(e, { style: t, vars: n }, r, o) {
  const i = e.style;
  let a;
  for (a in t)
    i[a] = t[a];
  o == null || o.applyProjectionStyles(i, r);
  for (a in n)
    i.setProperty(a, n[a]);
}
function r0(e) {
  return window.getComputedStyle(e);
}
class o0 extends $c {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Tc;
  }
  readValueFromInstance(t, n) {
    var r;
    if (Bt.has(n))
      return (r = this.projection) != null && r.isProjecting ? Or(n) : V2(t, n);
    {
      const o = r0(t), i = (Co(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return mc(t, n);
  }
  build(t, n, r) {
    Zo(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return zo(t, n, r);
  }
}
const jc = /* @__PURE__ */ new Set([
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
function s0(e, t, n, r) {
  Tc(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(jc.has(o) ? o : Fo(o), t.attrs[o]);
}
class i0 extends $c {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = fe;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Bt.has(n)) {
      const r = Ba(n);
      return r && r.default || 0;
    }
    return n = jc.has(n) ? n : Fo(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return sc(t, n, r);
  }
  build(t, n, r) {
    tc(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, o) {
    s0(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = rc(t.tagName), super.mount(t);
  }
}
const a0 = (e, t) => _o(e) ? new i0(t) : new o0(t, {
  allowProjection: e !== an
}), c0 = /* @__PURE__ */ ip({
  ...Ap,
  ...Jf,
  ...Of,
  ...Qf
}, a0), we = /* @__PURE__ */ j4(c0), ve = ({
  show: e,
  content: t,
  theme: n = "light",
  placement: r = "top",
  hideArrow: o = !1,
  targetBody: i = !1,
  trigger: a = "hover",
  onVisibleChange: c,
  popoverStyle: l,
  popoverClassName: d,
  style: u,
  className: h = "",
  children: p
}) => {
  const [f, k] = E(e), [v, y] = E({ top: 0, left: 0 }), [g, L] = E({ width: 0, height: 0 }), [w, b] = E(r), V = q(null), M = q(null);
  Z(() => {
    e !== void 0 && k(e);
  }, [e]), Z(() => {
    c == null || c(f);
  }, [f, c]);
  const x = 8, C = O(() => {
    if (!V.current || !i || g.width === 0 || g.height === 0) return;
    const I = V.current.getBoundingClientRect(), F = window.innerWidth, B = window.innerHeight;
    let z = 0, P = 0, R = r;
    const H = (X) => {
      switch (X) {
        case "top":
          return {
            top: I.top - I.height - x,
            left: I.left + (I.width / 2 - g.width / 2),
            placement: "top"
          };
        case "bottom":
          return {
            top: I.top + I.height + x,
            left: I.left + (I.width / 2 - g.width / 2),
            placement: "bottom"
          };
        case "left":
          return {
            top: I.top + (I.height / 2 - g.height / 2),
            left: I.left - g.width - x,
            placement: "left"
          };
        case "right":
          return {
            top: I.top + (I.height / 2 - g.height / 2),
            left: I.right + x,
            placement: "right"
          };
        default:
          return {
            top: I.bottom + x,
            left: I.left + I.width / 2 - g.width / 2,
            placement: "bottom"
          };
      }
    };
    let D = H(R);
    z = D.top, P = D.left, R = D.placement, (() => {
      if (P < x && (P = x), P + g.width > F - x && (P = F - g.width - x), z < x) {
        if (R === "top") {
          const X = H("bottom");
          X.top + g.height <= B - x ? (z = X.top, P = X.left, R = "bottom") : z = x;
        }
      } else if (z + g.height > B - x && R === "bottom") {
        const X = H("top");
        X.top >= x ? (z = X.top, P = X.left, R = "top") : z = B - g.height - x;
      }
      if ((P < x || P + g.width > F - x) && (R === "top" || R === "bottom")) {
        const X = H("left");
        if (X.left >= x)
          z = X.top, P = X.left, R = "left";
        else {
          const _ = H("right");
          _.left + g.width <= F - x && (z = _.top, P = _.left, R = "right");
        }
      }
    })(), y({ top: z, left: P }), b(R);
  }, [r, i, g]);
  Z(() => {
    if (!i) return;
    const I = () => {
      C();
    }, F = () => {
      C();
    };
    return window.addEventListener("resize", I), window.addEventListener("scroll", F, !0), () => {
      window.removeEventListener("resize", I), window.removeEventListener("scroll", F, !0);
    };
  }, [C, i]), Z(() => {
    if (M.current && f && i) {
      const I = new ResizeObserver((F) => {
        for (const B of F) {
          const { width: z, height: P } = B.target.getBoundingClientRect();
          L({ width: z, height: P });
        }
      });
      return I.observe(M.current), () => {
        I.disconnect();
      };
    }
  }, [f, i]), Z(() => {
    f && i && g.width > 0 && g.height > 0 && C();
  }, [f, i, g, C]), Z(() => {
    if (a === "click" && f) {
      const I = (F) => {
        V.current && !V.current.contains(F.target) && k(!1);
      };
      return document.addEventListener("mousedown", I), () => {
        document.removeEventListener("mousedown", I);
      };
    }
  }, [a, f]);
  const $ = () => {
    a === "hover" && e === void 0 && k(!0);
  }, S = () => {
    a === "hover" && e === void 0 && k(!1);
  }, T = () => {
    a === "click" && e === void 0 && k(!f);
  };
  if (!t) return /* @__PURE__ */ s(pe, { children: p });
  const N = () => {
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
  }, j = () => {
    if (!V.current || !i || g.width === 0 || g.height === 0) return {};
    const I = V.current.getBoundingClientRect(), F = 12, B = I.left + I.width / 2, z = I.top + I.height / 2, P = v.left, R = v.top, H = B - P, D = z - R, U = (X, _, W) => _ >= 0 && _ <= W ? Math.max(F, Math.min(W - F, _)) : _ < 0 ? F : W - F;
    switch (w) {
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
          top: `${U(!1, D, g.height) / g.height * 100}%`,
          transform: "translate(-50%,-50%) rotate(-45deg)"
        };
      case "right":
        return {
          left: "0",
          top: `${U(!1, D, g.height) / g.height * 100}%`,
          transform: "translate(-50%,-50%) rotate(135deg)"
        };
      default:
        return {};
    }
  }, A = /* @__PURE__ */ m(
    we.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: f ? 1 : 0 },
      transition: { duration: 0.2, type: "spring" },
      ref: M,
      className: `land-pop ${f ? "show" : ""} ${o ? "hide-arrow" : ""} ${n} ${d ?? ""}`,
      style: {
        position: i ? "fixed" : "absolute",
        ...i ? {
          top: v.top,
          left: v.left
        } : N(),
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
            style: i ? j() : {
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
      ref: V,
      className: `land-pop-target ${h ?? ""}`,
      style: u,
      onMouseEnter: $,
      onMouseLeave: S,
      onClick: T,
      children: [
        p,
        A
      ]
    }
  );
}, l0 = ({
  animation: e = !0,
  transform: t,
  children: n,
  underline: r,
  ...o
}) => /* @__PURE__ */ m(on, { underline: t ? !0 : r, className: `link-wave ${e ? "animation" : ""} ${t ? "transform" : ""}`, ...o, children: [
  n,
  /* @__PURE__ */ s("div", { className: "land-link-wave" })
] }), on = ({
  href: e,
  target: t = "_self",
  status: n = "default",
  anchor: r,
  disabled: o = !1,
  underline: i = !1,
  hoverUnderline: a = !0,
  tip: c,
  tipProps: l,
  prefixIcon: d,
  suffixIcon: u,
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
  })[n], y = (w) => {
    if (o) {
      w.preventDefault();
      return;
    }
    p == null || p(w);
  }, g = (w, b) => {
    if (!w) return null;
    const V = typeof w == "boolean" ? t === "_blank" ? /* @__PURE__ */ s(Y, { name: "share", size: 16 }) : /* @__PURE__ */ s(Y, { name: "link", size: 16 }) : w;
    return /* @__PURE__ */ s("span", { className: `land-link-${b}-icon`, children: V });
  }, L = (w) => {
    if (w.preventDefault(), r) {
      const b = document.getElementById(r);
      b && b.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ s(ve, { content: c, ...l, children: /* @__PURE__ */ m(
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
      onClick: r ? L : y,
      "aria-disabled": o,
      children: [
        g(d, "prefix"),
        h,
        g(u, "suffix")
      ]
    }
  ) });
};
on.LinkWave = l0;
const Ac = ({
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
), Pc = ({
  type: e = "default",
  direction: t = "row",
  title: n,
  link: r,
  onLinkClick: o,
  noBg: i,
  className: a,
  style: c
}) => {
  const l = K(() => t === "row" ? 16 : 24, [t]), d = K(() => {
    if (e === "fail") return "var(--color-red-";
    if (e === "default") return "";
    if (e === "warn") return "var(--color-orange-";
    if (e === "error") return "var(--color-red-";
    if (e === "success") return "var(--color-green-";
    if (e === "loading") return "";
  }, [e]);
  return /* @__PURE__ */ m("div", { className: `land-alert ${t} ${d} ${i ? "no-bg" : ""} ${a}`, style: c, children: [
    e === "fail" && /* @__PURE__ */ s(Y, { name: "error-fill", size: l, color: d + "6)" }),
    e === "default" && /* @__PURE__ */ s(
      Y,
      {
        name: "attention-fill",
        size: l,
        color: "var(--color-primary-6)"
      }
    ),
    e === "warn" && /* @__PURE__ */ s(
      Y,
      {
        name: "attention-fill",
        size: l,
        color: d + "6)"
      }
    ),
    e === "error" && /* @__PURE__ */ s(Y, { name: "attention-fill", size: l, color: d + "6)" }),
    e === "success" && /* @__PURE__ */ s(Y, { name: "check-fill", size: l, color: d + "6)" }),
    e === "loading" && /* @__PURE__ */ s(Ac, { size: l, color: "var(--color-primary-6)" }),
    /* @__PURE__ */ m("div", { className: "land-alert-title", children: [
      n,
      r && /* @__PURE__ */ m(pe, { children: [
        "，",
        /* @__PURE__ */ s(on, { onClick: o, children: r })
      ] })
    ] })
  ] });
}, cm = ({
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
  const d = q(null), [u, h] = E(""), [p, f] = E(0), k = O(() => l(), [l]), v = O((C) => C === window ? window.pageYOffset || document.documentElement.scrollTop : C.scrollTop, []), y = O((C, $) => {
    C === window ? window.scrollTo({
      top: $,
      behavior: "smooth"
    }) : C.scrollTo({
      top: $,
      behavior: "smooth"
    });
  }, []), g = K(() => {
    const C = [], $ = (S) => {
      S.forEach((T) => {
        T.key && C.push(T.key), T.children && $(T.children);
      });
    };
    return $(e), C;
  }, [e]), L = O((C, $) => {
    h(C), f($);
    const S = document.getElementById(C);
    console.log("targetElement", S);
    const T = k();
    if (S)
      if (n === 0)
        S.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      else {
        const N = T === window ? { top: 0 } : T.getBoundingClientRect(), A = S.getBoundingClientRect().top - N.top, F = v(T) + A - n;
        y(T, F);
      }
    t == null || t(C);
  }, [n, t, k, v, y]);
  Z(() => {
    const C = (T) => {
      const N = T.filter(
        (j) => j.isIntersecting && j.intersectionRatio >= 0.5
      );
      if (N.length > 0) {
        const A = N[0].target.id;
        h(A), f(g.indexOf(A)), t == null || t(A);
      } else
        T.forEach((j) => {
          const A = j.target.id;
          if (!j.isIntersecting && u === A) {
            const I = g.indexOf(A), F = g[I - 1] || null;
            h(F), f(g.indexOf(F)), F && (t == null || t(F));
          }
        });
    }, $ = k(), S = new IntersectionObserver(C, {
      threshold: [0, 0.5, 1],
      root: $ === window ? null : $,
      rootMargin: `-${n}px 0px 0px 0px`
    });
    return g.forEach((T) => {
      const N = document.getElementById(T);
      N && S.observe(N);
    }), () => {
      g.forEach((T) => {
        const N = document.getElementById(T);
        N && S.unobserve(N);
      });
    };
  }, [g, u, n, t, k]);
  const w = (C, $ = 0) => C.map((S, T) => /* @__PURE__ */ m(
    "li",
    {
      style: { textIndent: $ > 0 ? `${$ * 0.5}em` : 0, paddingTop: T > 0 ? `${r}px` : 0 },
      onMouseEnter: () => {
        T !== p && (x(!0), V(T));
      },
      onMouseLeave: () => x(!1),
      children: [
        /* @__PURE__ */ s(
          "a",
          {
            className: `land-anchor-link ${u === S.key ? "active" : ""}`,
            onClick: () => L(S.key, T),
            "aria-current": u === S.key ? "location" : void 0,
            children: S.title
          }
        ),
        S.children && w(S.children, $ + 1)
      ]
    },
    S.key
  )), [b, V] = E(-1), [M, x] = E(!1);
  return /* @__PURE__ */ m(
    "div",
    {
      ref: d,
      className: `land-anchor ${c || ""}`,
      style: a,
      role: "navigation",
      "aria-label": "Anchor navigation",
      children: [
        /* @__PURE__ */ s("ol", { className: "land-anchor-list", children: w(e) }),
        /* @__PURE__ */ s(
          we.div,
          {
            className: "land-anchor-hover-indicator",
            animate: {
              opacity: M ? 1 : 0,
              y: b * 38 + b * r
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
}, lm = ({
  ratio: e = 1,
  children: t,
  contentClassName: n = "",
  contentStyle: r,
  style: o,
  className: i = ""
}) => {
  const a = q(null), [c, l] = E(1);
  Z(() => {
    if (!a.current) return;
    const u = (p) => {
      p.forEach((f) => {
        l(f.contentRect.width / f.contentRect.height);
      });
    };
    new ResizeObserver(u).observe(a.current);
  }, []);
  const d = K(() => e > c, [e, c]);
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
            width: d ? "100%" : "auto",
            height: d ? "auto" : "100%",
            aspectRatio: `${e}`,
            ...r
          },
          children: t
        }
      )
    }
  );
}, Ic = ({
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
), Hc = ({
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
    children: e ? t ? /* @__PURE__ */ s(Y, { name: "video-play", size: n / 1.8, color: r }) : /* @__PURE__ */ s(Ic, { size: n / 1.8, color: r }) : /* @__PURE__ */ s(Y, { name: "video-pause", size: 24, color: r })
  }
);
function Ni(e, t, n) {
  const r = (i, a, c, l, d) => (i - a) / (c - a) * (d - l) + l;
  return e.map((i) => r(i, t, n, 0, 1));
}
function d0(e, t, n, r, o = 2, i = 2, a = "#999", c = "#FF0000", l, d) {
  console.log("drawWave", e, "canvas size:", t.width, "x", t.height);
  try {
    const u = t.getContext("2d");
    if (!u) {
      console.warn("Failed to get canvas context");
      return;
    }
    let h = e;
    if (h.length === 0) {
      console.warn("No wave data to draw");
      return;
    }
    if (l) {
      const x = Math.max(...e);
      x > 0 && (h = Ni(e, 0, x));
    }
    if (d) {
      const x = Math.min(...e), C = Math.max(...e), $ = Math.min(...e.filter((S) => S !== x));
      h = Ni(
        e.filter((S) => S !== x),
        $,
        C
      );
    }
    const p = t.width, f = t.height;
    if (p === 0 || f === 0) {
      console.warn("Canvas has no size");
      return;
    }
    const k = n.currentTime || 0, v = n.duration || 1, y = Math.floor(k / v * r);
    u.clearRect(0, 0, p, f);
    const g = o + i, L = Math.floor(p / g), w = Math.min(h.length, L), b = Math.max(...h), V = 2, M = b > 0 ? Math.max(f * 0.8 / b, V / b) : 1;
    console.log("Drawing bars:", w, "maxValue:", b, "scale:", M);
    for (let x = 0; x < w; x++) {
      const C = h[x] || 0, $ = x * g, S = Math.max(C * M, V), T = f - S;
      u.fillStyle = x < y ? c : a, u.fillRect($, T, o, S);
    }
  } catch (u) {
    console.warn("Canvas operation failed:", u);
  }
}
function u0(e, t) {
  console.log("drawWaveform", e);
  const n = e.getChannelData(0), r = Math.floor(n.length / t);
  let o = [];
  for (let i = 0; i < t; i++) {
    let a = r * i, c = 0;
    for (let d = 0; d < r; d++)
      c = c + Math.abs(n[a + d]);
    const l = c / r;
    Number.isNaN(l) || o.push(l);
  }
  return o;
}
function h0({
  audioUrl: e,
  play: t = !1,
  onPlayChange: n,
  sampleCount: r = 100,
  barWidth: o = 2,
  barGap: i = 1,
  defaultColor: a = "var(--color-gray-12)",
  activeColor: c = "var(--color-primary-6)",
  normalize: l = !0,
  amplify: d = !1,
  type: u = "bar"
}) {
  const h = q(null), p = q(null), f = q(), [k, v] = E([]), [y, g] = E(!1), [L, w] = E(null), [b, V] = E(t), M = O(async () => {
    if (e) {
      g(!0), w(null);
      try {
        const N = new (window.AudioContext || window.webkitAudioContext)(), A = await (await fetch(e)).arrayBuffer(), I = await N.decodeAudioData(A), F = u0(I, r);
        v(F || []), N.close();
      } catch (N) {
        w(N instanceof Error ? N.message : "Failed to generate wave data"), console.error("Error generating wave data:", N);
      } finally {
        g(!1);
      }
    }
  }, [e, r]), x = O(() => {
    if (!h.current || k.length === 0) return;
    const N = h.current, j = N.parentElement;
    if (j) {
      const I = j.getBoundingClientRect();
      N.width = I.width, N.height = I.height;
    }
    const A = p.current || new Audio(e);
    u === "bar" ? d0(
      k,
      N,
      A,
      r,
      o,
      i,
      a,
      c,
      l,
      d
    ) : C(
      k,
      N,
      A,
      a,
      c
    );
  }, [k, r, o, i, a, c, l, d, u, e]), C = O((N, j, A, I, F) => {
    try {
      const B = j.getContext("2d");
      if (!B) {
        console.warn("Failed to get canvas context");
        return;
      }
      const z = j.width, P = j.height;
      if (z === 0 || P === 0) {
        console.warn("Canvas has no size for line waveform");
        return;
      }
      const R = A.currentTime || 0, H = A.duration || 1, D = Math.floor(R / H * N.length);
      if (B.clearRect(0, 0, z, P), N.length === 0) {
        console.warn("No data for line waveform");
        return;
      }
      const U = Math.max(...N), X = U > 0 ? P * 0.6 / U : 1, _ = z / (N.length - 1);
      if (B.beginPath(), B.strokeStyle = I, B.lineWidth = 1, B.setLineDash([2, 2]), B.moveTo(0, P / 2), B.lineTo(z, P / 2), B.stroke(), B.setLineDash([]), B.beginPath(), B.strokeStyle = I, B.lineWidth = 2, N.forEach((W, J) => {
        const Q = J * _, te = P / 2 - W * X;
        J === 0 ? B.moveTo(Q, te) : B.lineTo(Q, te);
      }), B.stroke(), D > 0) {
        B.beginPath(), B.strokeStyle = F, B.lineWidth = 3;
        for (let W = 0; W < Math.min(D, N.length); W++) {
          const J = W * _, Q = P / 2 - N[W] * X;
          W === 0 ? B.moveTo(J, Q) : B.lineTo(J, Q);
        }
        B.stroke();
      }
    } catch (B) {
      console.warn("Canvas operation failed:", B);
    }
  }, []), $ = O(() => {
    x(), f.current = requestAnimationFrame($);
  }, [x]), S = O(() => {
    f.current && cancelAnimationFrame(f.current), $();
  }, [$]), T = O(() => {
    f.current && (cancelAnimationFrame(f.current), f.current = void 0);
  }, []);
  return Z(() => {
    M();
  }, [M]), Z(() => {
    const N = p.current;
    N && (t ? N.play().catch((j) => {
      console.error("Failed to play audio:", j), V(!1), n == null || n(!1);
    }) : N.pause());
  }, [t, n]), Z(() => {
    const N = p.current;
    if (!N) return;
    const j = () => {
      V(!0), n == null || n(!0), S();
    }, A = () => {
      V(!1), n == null || n(!1), T();
    }, I = () => {
      V(!1), n == null || n(!1), T();
    };
    return N.addEventListener("play", j), N.addEventListener("pause", A), N.addEventListener("ended", I), () => {
      N.removeEventListener("play", j), N.removeEventListener("pause", A), N.removeEventListener("ended", I), T();
    };
  }, [S, T, n]), Z(() => () => {
    T();
  }, [T]), {
    canvasRef: h,
    audioRef: p,
    waveData: k,
    isLoading: y,
    error: L,
    isPlaying: b,
    drawWaveform: x,
    startAnimation: S,
    stopAnimation: T
  };
}
const Rc = ({
  audioUrl: e,
  play: t = !1,
  onPlayChange: n,
  canvas: r,
  audio: o,
  samples: i,
  barWidth: a = 2,
  barGap: c = 1,
  defaultColor: l = "var(--color-gray-12)",
  activeColor: d = "var(--color-primary-6)",
  normalize: u = !0,
  amplify: h = !1,
  type: p = "bar",
  sampleCount: f = 100,
  style: k,
  className: v = "",
  children: y
}) => {
  const {
    canvasRef: g,
    audioRef: L,
    waveData: w,
    isLoading: b,
    error: V,
    drawWaveform: M
  } = h0({
    audioUrl: e,
    play: t,
    onPlayChange: n,
    sampleCount: f,
    barWidth: a,
    barGap: c,
    defaultColor: l,
    activeColor: d,
    normalize: u,
    amplify: h,
    type: p
  }), x = r ? { current: r } : g, C = i || w;
  return je.useEffect(() => {
    C.length > 0 && setTimeout(() => {
      M();
    }, 100);
  }, [C, M]), je.useEffect(() => {
    const $ = x.current;
    if (!$) return;
    const S = new ResizeObserver(() => {
      C.length > 0 && M();
    });
    return S.observe($), () => S.disconnect();
  }, [C, M, x]), V ? /* @__PURE__ */ s("div", { className: `land-audio-wave error ${v}`, style: k, children: /* @__PURE__ */ m("div", { className: "error-message", children: [
    "Failed to load audio: ",
    V
  ] }) }) : b ? /* @__PURE__ */ s("div", { className: `land-audio-wave loading ${v}`, style: k, children: /* @__PURE__ */ s("div", { className: "loading-spinner", children: "Loading waveform..." }) }) : /* @__PURE__ */ m(
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
        /* @__PURE__ */ s("audio", { ref: L, src: e, className: "land-audio-wave-audio" }),
        /* @__PURE__ */ s(
          "canvas",
          {
            ref: x,
            style: {
              width: "100%",
              height: "100%",
              display: "block"
            }
          }
        ),
        y
      ]
    }
  );
}, Ko = ({
  audioUrl: e,
  showWave: t = !1,
  waveType: n = "bar",
  waveSampleCount: r = 100,
  waveBarWidth: o = 2,
  waveBarGap: i = 1,
  waveDefaultColor: a = "var(--color-gray-12)",
  waveActiveColor: c = "var(--color-primary-12)",
  waveNormalize: l = !0,
  waveAmplify: d = !1,
  style: u,
  className: h = ""
}) => {
  const p = q(null), [f, k] = E(!1);
  return Z(() => {
    if (!p.current) return;
    const v = p.current;
    f ? v.play() : v.pause();
  }, [f]), /* @__PURE__ */ m("div", { className: `land-audio ${h}`, style: u, children: [
    /* @__PURE__ */ s(
      Hc,
      {
        play: f,
        onClick: (v) => {
          v.stopPropagation(), k(!f);
        }
      }
    ),
    t && /* @__PURE__ */ s(
      Rc,
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
        amplify: d
      }
    ),
    !t && /* @__PURE__ */ s("audio", { ref: p, src: e })
  ] });
};
Ko.AudioButton = Hc;
Ko.AudioAnimationIcon = Ic;
Ko.AudioWave = Rc;
const dm = ({
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
}, p0 = ({
  item: e,
  active: t,
  onChange: n,
  index: r,
  hoverPreview: o
}) => {
  const i = q(null), [a, c] = E(!1);
  return Z(() => {
    i.current && (i.current.scrollWidth > i.current.offsetWidth ? c(!0) : c(!1));
  }, [e]), /* @__PURE__ */ s(ve, { targetBody: !0, content: e.tip || (o && a ? e.label : ""), children: /* @__PURE__ */ m(
    "div",
    {
      className: `land-breadCrumb-item hover-pop ${t ? "active" : ""}`,
      onClick: () => n == null ? void 0 : n(),
      children: [
        /* @__PURE__ */ s("div", { ref: i, className: `land-breadcrumb-label ${e.maxWidth ? "ellipsis" : ""}`, style: { maxWidth: `${e.maxWidth}px` }, children: e.label }),
        r > 0 && /* @__PURE__ */ s(Y, { name: "arrow", className: "land-breadCrumb-item-arrow", size: 16, strokeWidth: 4 })
      ]
    }
  ) });
}, um = ({
  data: e = [],
  current: t,
  showMask: n = !1,
  hoverPreview: r = !1,
  onChange: o,
  style: i,
  className: a = ""
}) => {
  var p;
  const c = q(null), [l, d] = E(!1), [u, h] = E(!0);
  return Z(() => {
    if (!n || !c.current) return;
    const f = () => {
      c.current && (d(c.current.scrollLeft <= c.current.clientWidth - c.current.scrollWidth), h(c.current.scrollLeft >= 0));
    };
    return c.current.addEventListener("scroll", f), () => {
      var k;
      (k = c.current) == null || k.removeEventListener("scroll", f);
    };
  }, []), /* @__PURE__ */ m("div", { className: `land-breadCrumb  ${a}`, style: i, children: [
    n && /* @__PURE__ */ s("div", { className: `land-breadCrumb-prefixMask ${l ? "hidden" : ""}` }),
    /* @__PURE__ */ s("div", { ref: c, className: "land-breadCrumb-container", children: (p = Array.from(e)) == null ? void 0 : p.reverse().map((f, k) => /* @__PURE__ */ s(
      p0,
      {
        index: k,
        item: f,
        active: t === f.value,
        hoverPreview: r,
        onChange: () => o == null ? void 0 : o(f)
      },
      f.value
    )) }),
    n && /* @__PURE__ */ s("div", { className: `land-breadCrumb-suffixMask ${u ? "hidden" : ""}` })
  ] });
}, f0 = ({
  style: e,
  ...t
}) => {
  const [n, r] = E(!1);
  return /* @__PURE__ */ s(
    he,
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
      children: /* @__PURE__ */ s(Y, { name: "arrow-line", size: 16, strokeWidth: 3, className: `land-button-arrow-icon ${n ? "button-hover-arrow" : ""}` })
    }
  );
}, m0 = ({
  defaultSide: e,
  hoverSide: t,
  ...n
}) => {
  const [r, o] = E(!1);
  return /* @__PURE__ */ m(
    he,
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
}, he = ({
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
  style: d,
  className: u = "",
  onClick: h,
  children: p,
  // 内容属性
  text: f,
  subText: k,
  icon: v,
  // 尺寸属性
  capsule: y,
  // 气泡属性
  tip: g,
  tipProps: L,
  // 原生事件
  nativeEvent: w
}) => {
  const b = K(() => !!(v && !f && !k), [v, f, k]), V = K(() => [
    "land-button",
    e,
    t,
    b && "iconOnly",
    g && "hover-pop",
    o && "block",
    i && "bold",
    a && "hover-bold",
    y && "capsule",
    c && "hover-animation",
    l && "active-animation",
    n && `size-${n}`,
    u
  ].filter(Boolean).join(" "), [e, t, b, r, g, u]), M = () => /* @__PURE__ */ m(pe, { children: [
    v && /* @__PURE__ */ s("div", { className: "land-button-icon", children: v }),
    !b && (f || k) && /* @__PURE__ */ m("div", { className: "land-button-mask-content-wrapper", children: [
      /* @__PURE__ */ s("span", { className: "land-button-content-text", children: f }),
      k && /* @__PURE__ */ s("span", { className: "subText", children: k }),
      (a || e === "transparent") && /* @__PURE__ */ m("div", { className: "land-button-mask-content", children: [
        /* @__PURE__ */ s("span", { className: "land-button-mask-content-text", children: f }),
        k && /* @__PURE__ */ s("span", { className: "subText", children: k })
      ] })
    ] }),
    p
  ] }), x = {
    style: d,
    className: V,
    disabled: r,
    onClick: (C) => {
      r || h == null || h(C);
    },
    ...w
    // 原生事件
  };
  return /* @__PURE__ */ s(ve, { theme: "dark", content: g, ...L, children: /* @__PURE__ */ s(
    "button",
    {
      ...x,
      children: M()
    }
  ) });
};
he.ButtonArrow = f0;
he.ButtonChange = m0;
const Ec = (e, t) => {
  const n = q(t);
  Z(() => {
    n.current = t;
  }, [t]);
  const r = O((o) => {
    e.current && !e.current.contains(o.target) && n.current(o);
  }, [e]);
  Z(() => (document.body.addEventListener("mousedown", r), document.body.addEventListener("touchstart", r), () => {
    document.body.removeEventListener("mousedown", r), document.body.removeEventListener("touchstart", r);
  }), [r]);
}, hn = ({
  trigger: e = "hover",
  targetBody: t = !1,
  dropData: n,
  dropContent: r,
  children: o,
  placement: i = "bottom",
  alignment: a = "left",
  disabled: c,
  onChange: l,
  onOpen: d,
  onClose: u,
  toggleClassName: h = "",
  toggleStyle: p,
  dropClassName: f = "",
  dropStyle: k,
  open: v = !1
}) => {
  const y = q(null), g = q(null), [L, w] = E(v);
  Z(() => {
    c && L && w(!1);
  }, [c, L]), Z(() => {
    c || w(v);
  }, [v, c]);
  const [b, V] = E({
    top: 0,
    left: 0
  }), [M, x] = E(
    i
  ), [C, $] = E(a), S = O(() => {
    if (!y.current) return;
    const F = y.current.getBoundingClientRect(), B = window.innerWidth, z = window.innerHeight, P = window.pageXOffset || document.documentElement.scrollLeft, R = window.pageYOffset || document.documentElement.scrollTop, H = 200, D = 150, U = 0;
    let X = 0, _ = 0, W = i, J = a;
    const Q = z - F.bottom - U, te = F.top - U;
    if (i === "bottom" && Q < D && te > D ? W = "top" : i === "top" && te < D && Q > D && (W = "bottom"), t) {
      if (!g.current) return;
      const oe = g.current.getBoundingClientRect(), ae = oe.width || H, Me = oe.height || D;
      W === "bottom" ? X = F.bottom + U + R : X = F.top - Me - U + R;
      let sr = F.left + F.width / 2, ir = F.left, Ye = F.right;
      switch (a) {
        case "center":
          _ = sr - ae / 2;
          break;
        case "right":
          _ = Ye - ae;
          break;
        default:
          _ = ir;
          break;
      }
      _ < P ? (_ = P + U, J = "left") : _ + ae > P + B && (_ = P + B - ae - U, J = "right"), X < R ? X = R + U : X + Me > R + z && (X = R + z - Me - U);
    } else
      J = a;
    V({ top: X, left: _ }), x(W), $(J);
  }, [i, a, t]);
  Z(() => {
    if (L && !c) {
      const F = setTimeout(S, 0);
      return () => clearTimeout(F);
    }
  }, [L, c, S]), Z(() => {
    if (L && !c) {
      const F = () => S(), B = () => S();
      return window.addEventListener("resize", F), window.addEventListener("scroll", B, !0), document.addEventListener("scroll", B, !0), () => {
        window.removeEventListener("resize", F), window.removeEventListener("scroll", B, !0), document.removeEventListener("scroll", B, !0);
      };
    }
  }, [L, c, S]), Z(() => {
    L ? d == null || d(L) : u == null || u(L);
  }, [L, d, u]);
  const T = (F) => {
    c || (l == null || l(F), e === "click" && w(!1));
  }, N = /* @__PURE__ */ s(
    "div",
    {
      ref: g,
      className: `land-dropdown-results ${L ? "show" : ""} ${C} ${M}`,
      style: t ? {
        position: "fixed",
        top: b.top,
        left: b.left,
        transform: "none"
      } : void 0,
      "data-debug": `alignment: ${C}, placement: ${M}, targetBody: ${t}`,
      onClick: (F) => F.stopPropagation(),
      children: /* @__PURE__ */ m("div", { className: `land-dropdown-drop ${f}`, style: k, children: [
        n && !r && /* @__PURE__ */ s("ul", { className: "land-dropdown-drop-list", children: n == null ? void 0 : n.map((F) => /* @__PURE__ */ s(
          "div",
          {
            className: "land-dropdown-drop-item",
            onClick: () => T(F),
            children: F.label
          },
          F.key
        )) }),
        r
      ] })
    }
  );
  Ec(y, () => {
    L && !c && w(!1);
  });
  const j = () => {
    c || e === "click" && w(!L);
  }, A = () => {
    c || e === "hover" && w(!0);
  }, I = () => {
    e === "hover" && w(!1);
  };
  return /* @__PURE__ */ m(an, { children: [
    /* @__PURE__ */ m(
      "div",
      {
        ref: y,
        className: `land-dropdown-toggle ${L ? "show" : ""} ${h} ${c ? "disabled" : ""}`,
        style: p,
        onClick: j,
        onMouseEnter: A,
        onMouseLeave: I,
        "aria-disabled": c,
        "aria-expanded": L,
        "aria-haspopup": "true",
        children: [
          o,
          !t && N
        ]
      }
    ),
    t && L && !c && N
  ] });
}, Go = ({
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
  const [d, u] = E(e);
  return Z(() => {
    u(e);
  }, [e]), /* @__PURE__ */ m("div", { className: `land-check ${i}`, style: a, children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: `land-check-label ${d ? "checked" : ""} ${o ? "disabled" : ""}`,
        onClick: (h) => {
          o || (u(!d), l == null || l(d, h));
        },
        children: [
          /* @__PURE__ */ m("div", { className: `land-check-circle ${d ? "checked" : ""} ${t ? "indeterminate" : ""} ${c && !t ? "animated" : "no-animation"}`, children: [
            /* @__PURE__ */ s(Y, { name: "check", size: 10, className: "land-check-circle-icon" }),
            /* @__PURE__ */ s(Y, { name: "dec", strokeWidth: 8, size: 10, className: "land-check-indeterminate-icon" })
          ] }),
          n
        ]
      }
    ),
    r && /* @__PURE__ */ m("div", { className: "land-check-pop hover-pop", children: [
      /* @__PURE__ */ s(Y, { name: "info-fill", className: "land-check-pop-icon" }),
      /* @__PURE__ */ s(
        ve,
        {
          content: r,
          theme: "dark",
          style: { maxWidth: "200px" },
          placement: "top"
        }
      )
    ] })
  ] });
}, Dc = ({
  data: e,
  placeholder: t = "请选择",
  selected: n,
  selectedValues: r = [],
  multiple: o = !1,
  separator: i = "，",
  maxDisplayCount: a,
  showCheckbox: c = !1,
  customValueDisplay: l,
  type: d = "border",
  tip: u,
  tipProps: h,
  disabled: p,
  onChange: f,
  open: k = !1,
  className: v = "",
  style: y,
  ...g
}) => {
  const [L, w] = E(n), [b, V] = E(r);
  Z(() => {
    n !== L && w(n);
  }, [n, L]), Z(() => {
    JSON.stringify(r) !== JSON.stringify(b) && V(r);
  }, [r, b]);
  const M = K(() => e ? e.filter((A) => b.includes(A.key)).map((A) => A.label) : [], [e, b]), x = K(() => e ? e.filter((A) => b.includes(A.key)) : [], [e, b]), C = O(() => {
    var A;
    return e ? o ? M.length === 0 ? t : a !== void 0 && M.length > a ? `${M.slice(0, a).join(i)}等${M.length}个选项` : M.join(i) : L === void 0 || L === "" ? t : (A = e == null ? void 0 : e.filter((I) => I.key === L)[0]) == null ? void 0 : A.label : t;
  }, [
    o,
    M,
    a,
    i,
    L,
    e,
    t
  ]), $ = O(() => {
    if (!l)
      return C();
    if (o)
      return l({
        values: b,
        items: x,
        isMultiple: !0,
        placeholder: t
      });
    {
      const A = e == null ? void 0 : e.filter((B) => B.key === L)[0], I = A ? [A] : [], F = A ? [A.key] : [];
      return l({
        values: F,
        items: I,
        isMultiple: !1,
        placeholder: t
      });
    }
  }, [
    l,
    o,
    b,
    x,
    L,
    e,
    t,
    C
  ]), S = O(
    (A) => {
      if (!A.disabled)
        if (o) {
          const I = [...b], F = I.indexOf(A.key);
          F > -1 ? I.splice(F, 1) : I.push(A.key), V(I);
          const B = (e == null ? void 0 : e.filter((z) => I.includes(z.key))) || [];
          f == null || f(A, B);
        } else
          w(A.key), f == null || f(A);
    },
    [o, b, e, f]
  ), T = O(
    (A) => o ? b.includes(A) : L === A,
    [o, b, L]
  ), N = K(
    () => /* @__PURE__ */ s("div", { className: "land-select-list", children: e && e.length > 0 ? e == null ? void 0 : e.map((A) => /* @__PURE__ */ m(
      "div",
      {
        className: `land-select-drop-item ${A.tip ? "hover-pop" : ""} ${T(A.key) ? "selected" : ""} ${A.disabled ? "disabled" : ""}`,
        onClick: (I) => {
          I.stopPropagation(), S(A);
        },
        children: [
          o && c && /* @__PURE__ */ s("div", { className: "land-select-checkbox", children: /* @__PURE__ */ s(
            Go,
            {
              checked: T(A.key),
              disabled: A.disabled
            }
          ) }),
          !c && /* @__PURE__ */ s("div", { className: "land-select-results-item-label", children: A.label }),
          A.iconTip && /* @__PURE__ */ m(
            "div",
            {
              className: `land-select-item-info ${A.iconTip ? "hover-pop" : ""}`,
              children: [
                /* @__PURE__ */ s(Y, { name: "info-stroke", size: 12 }),
                A.iconTip && /* @__PURE__ */ s(
                  ve,
                  {
                    content: A.iconTip,
                    placement: "right",
                    theme: "dark",
                    style: { marginLeft: "12px" }
                  }
                )
              ]
            }
          ),
          A.tip && /* @__PURE__ */ s(
            ve,
            {
              content: A.tip,
              placement: "right",
              theme: "dark",
              style: { marginLeft: "8px" }
            }
          )
        ]
      },
      A.key
    )) : /* @__PURE__ */ s("span", { className: "land-select-drop-empty", children: "暂无内容" }) }),
    [e, T, S, o, c]
  ), j = K(() => e ? l ? $() : C() : t, [
    l,
    $,
    C,
    t
  ]);
  return /* @__PURE__ */ s("div", { className: `land-select ${v}`, style: y, children: /* @__PURE__ */ s(hn, { trigger: "click", disabled: p, dropContent: N, ...g, children: /* @__PURE__ */ m(
    "div",
    {
      className: `land-select-input ${d} ${p ? "disabled" : ""}`,
      children: [
        /* @__PURE__ */ s(
          "p",
          {
            className: `${(o ? b.length > 0 : L !== void 0 && L !== "") ? "land-select-trigger" : "land-select-placeholder"}`,
            children: j
          }
        ),
        /* @__PURE__ */ s(
          Y,
          {
            name: "arrow-triangle",
            className: "land-select-value-arrow",
            size: 16
          }
        ),
        u && /* @__PURE__ */ s(ve, { targetBody: !0, content: u, theme: "dark", ...h })
      ]
    }
  ) }) });
}, pn = ({
  language: e = "zh",
  currentYear: t,
  currentMonth: n,
  shouldShowYearSelector: r,
  yearRange: o,
  monthPrevDisabled: i = !1,
  monthNextDisabled: a = !1,
  onMonthChange: c,
  onYearChange: l,
  customYearDisplay: d,
  customYearOptions: u,
  rightContent: h,
  className: p = "",
  style: f,
  viewMode: k = "date"
}) => {
  const v = je.useMemo(() => {
    if (!r) return [];
    if (u)
      return u;
    const [b, V] = o, M = V - b + 1;
    return Array.from({ length: M }, (x, C) => ({
      key: `${b + C}`,
      label: `${b + C}`
    }));
  }, [r, o, u]), y = je.useMemo(() => ({
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
  }), []), g = k === "date" || k === "week", L = k === "date" || k === "week" || k === "month" || k === "quarter" || k === "year", w = k === "date" || k === "week";
  return /* @__PURE__ */ m("div", { className: `land-calendar-header ${p}`, style: f, children: [
    /* @__PURE__ */ m("div", { className: "land-calendar-header-btn-group", children: [
      L && /* @__PURE__ */ s(
        he,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Y, { name: "arrow-double" }),
          className: "land-calendar-btn prev",
          disabled: i,
          onClick: () => l == null ? void 0 : l(t - 1)
        }
      ),
      w && /* @__PURE__ */ s(
        he,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Y, { name: "arrow" }),
          className: "land-calendar-btn prev",
          disabled: i,
          onClick: () => c == null ? void 0 : c(n !== void 0 ? n - 1 : -1)
        }
      )
    ] }),
    /* @__PURE__ */ m("div", { className: "land-calendar-header-center", children: [
      /* @__PURE__ */ s("div", { className: "land-calendar-year", children: r ? /* @__PURE__ */ s(
        Dc,
        {
          type: "transparent",
          selected: t.toString(),
          data: v,
          onChange: (b) => l == null ? void 0 : l(Number(b.key))
        }
      ) : /* @__PURE__ */ s("div", { className: "land-calendar-year-input", children: d || t }) }),
      g && n !== void 0 && /* @__PURE__ */ s(pe, { children: e === "zh" ? y[n + 1].zh : y[n + 1].en })
    ] }),
    h && /* @__PURE__ */ s("div", { className: "land-calendar-right-content", children: h }),
    /* @__PURE__ */ m("div", { className: "land-calendar-header-btn-group", children: [
      w && /* @__PURE__ */ s(
        he,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Y, { name: "arrow" }),
          className: "land-calendar-btn next",
          disabled: a,
          onClick: () => c == null ? void 0 : c(n !== void 0 ? n + 1 : 1)
        }
      ),
      L && /* @__PURE__ */ s(
        he,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Y, { name: "arrow-double" }),
          className: "land-calendar-btn next",
          disabled: a,
          onClick: () => l == null ? void 0 : l(t + 1)
        }
      )
    ] })
  ] });
};
function _n(e) {
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
function St(e, t, n) {
  const r = t ? _n(t) : null, o = n ? _n(n) : null;
  return !(r && e < r || o && e > o);
}
function Bc(e) {
  if (!e) return;
  const t = _n(e);
  return t ? t.getFullYear() : void 0;
}
function Oc(e) {
  if (!e) return;
  const t = _n(e);
  return t ? t.getFullYear() : void 0;
}
function g0(e, t, n) {
  const r = Bc(t), o = Oc(n);
  return !(r && e < r || o && e > o);
}
function sn(e, t, n, r) {
  const o = new Date(e, t, 1);
  return St(o, n, r);
}
function v0(e, t, n, r) {
  const o = (t - 1) * 3, i = new Date(e, o, 1), a = new Date(e, o + 2, 31);
  return St(i, n, r) || St(a, n, r);
}
function Vi(e, t, n, r) {
  return St(e, n, r) || St(t, n, r);
}
function $r(e, t, n, r, o) {
  const i = new Date(e, t, n);
  return St(i, r, o);
}
function Ot(e, t) {
  const n = (/* @__PURE__ */ new Date()).getFullYear(), r = Bc(e), o = Oc(t);
  return !r && !o ? [n, n] : r && !o ? [r, n] : !r && o ? [n, o] : r && o ? [r, o] : [n, n];
}
function fn(e, t) {
  const [n, r] = Ot(e, t);
  return r > n;
}
function k0(e, t, n, r, o) {
  const i = new Date(e, t, 1), a = new Date(e, t + 1, 0), c = i.getDay(), l = a.getDate(), d = /* @__PURE__ */ new Date(), u = [];
  for (let p = 0; p < c; p++) {
    const f = new Date(e, t, 0), k = new Date(f.getTime() - (c - p - 1) * 24 * 60 * 60 * 1e3), v = k.getDate(), y = k.getMonth(), g = k.getFullYear();
    u.push({
      date: k,
      isCurrentMonth: !1,
      isToday: k.toDateString() === d.toDateString(),
      isSelected: !1,
      isDisabled: !$r(g, y, v, r, o),
      dayNumber: v,
      month: y,
      year: g
    });
  }
  for (let p = 1; p <= l; p++) {
    const f = new Date(e, t, p);
    u.push({
      date: f,
      isCurrentMonth: !0,
      isToday: f.toDateString() === d.toDateString(),
      isSelected: n === p,
      isDisabled: !$r(e, t, p, r, o),
      dayNumber: p,
      month: t,
      year: e
    });
  }
  const h = u.length;
  for (let p = 1; p <= 42 - h; p++) {
    const f = new Date(e, t + 1, p), k = f.getDate(), v = f.getMonth(), y = f.getFullYear();
    u.push({
      date: f,
      isCurrentMonth: !1,
      isToday: f.toDateString() === d.toDateString(),
      isSelected: !1,
      isDisabled: !$r(y, v, k, r, o),
      dayNumber: k,
      month: v,
      year: y
    });
  }
  return u;
}
function vt(e, t, n, r, o) {
  const i = new Date(e, t, 1), a = new Date(e, t + 1, 0), c = i.getDay(), l = a.getDate(), d = /* @__PURE__ */ new Date(), u = [];
  let h = [];
  for (let p = 0; p < c; p++) {
    const f = new Date(e, t, 0), k = new Date(f.getTime() - (c - p - 1) * 24 * 60 * 60 * 1e3);
    h.push(k);
  }
  for (let p = 1; p <= l; p++)
    if (h.push(new Date(e, t, p)), h.length === 7) {
      const f = h[0], k = h[6], v = u.length;
      u.push({
        dates: [...h],
        isCurrentWeek: Si(h, d),
        isSelected: n === v + 1,
        isDisabled: !Vi(f, k, r, o),
        weekStart: f,
        weekEnd: k
      }), h = [];
    }
  if (h.length > 0) {
    for (let v = h.length; v < 7; v++) {
      const y = new Date(e, t + 1, v - h.length + 1);
      h.push(y);
    }
    const p = h[0], f = h[6], k = u.length;
    u.push({
      dates: h,
      isCurrentWeek: Si(h, d),
      isSelected: n === k + 1,
      isDisabled: !Vi(p, f, r, o),
      weekStart: p,
      weekEnd: f
    });
  }
  return u;
}
function Si(e, t) {
  return e.some(
    (n) => n.getDate() === t.getDate() && n.getMonth() === t.getMonth() && n.getFullYear() === t.getFullYear()
  );
}
const L0 = [
  { zh: "日", en: "Su" },
  { zh: "一", en: "Mo" },
  { zh: "二", en: "Tu" },
  { zh: "三", en: "We" },
  { zh: "四", en: "Th" },
  { zh: "五", en: "Fr" },
  { zh: "六", en: "Sa" }
];
async function w0(e, t = "zh") {
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
const Fc = ({
  language: e = "zh",
  className: t = ""
}) => /* @__PURE__ */ s("div", { className: `land-calendar-weekdays ${t}`, children: L0.map((n, r) => /* @__PURE__ */ s("div", { className: "land-calendar-item weekday", children: e === "zh" ? n.zh : n.en }, r)) }), y0 = ({
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
  }, d = (f) => {
    !e.isDisabled && n && n(e, f);
  }, u = (f) => {
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
      onMouseOver: d,
      onMouseOut: u,
      onMouseEnter: h,
      onMouseLeave: p,
      children: [
        /* @__PURE__ */ s("div", { className: "day-number", children: e.dayNumber }),
        a
      ]
    }
  );
}, $i = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onDayChange: r,
  onDayMouseOver: o,
  onDayMouseOut: i,
  onDayMouseEnter: a,
  onDayMouseLeave: c,
  className: l = "",
  style: d
}) => {
  const [u, h] = E(/* @__PURE__ */ new Date()), [p, f] = E((/* @__PURE__ */ new Date()).getDate()), [k, v] = E((/* @__PURE__ */ new Date()).getFullYear()), [y, g] = E([]), L = (/* @__PURE__ */ new Date()).getDate(), w = (/* @__PURE__ */ new Date()).getMonth(), b = (/* @__PURE__ */ new Date()).getFullYear(), V = u.getFullYear(), M = u.getMonth();
  Z(() => {
    w0(V, e).then(g);
  }, [V, e]);
  const { yearRange: x, shouldShowYearSelector: C } = K(() => {
    const H = Ot(t, n), D = fn(t, n);
    return {
      yearRange: H,
      shouldShowYearSelector: D
    };
  }, [t, n]), $ = K(() => {
    if (!t && !n)
      return !1;
    const H = M <= 0 ? 11 : M - 1, D = M <= 0 ? V - 1 : V;
    return !sn(D, H, t, n);
  }, [M, V, t, n]), S = K(() => {
    if (!t && !n)
      return !1;
    const H = M >= 11 ? 0 : M + 1, D = M >= 11 ? V + 1 : V;
    return !sn(D, H, t, n);
  }, [M, V, t, n]), T = () => {
    h(/* @__PURE__ */ new Date()), f(L), v(b), r == null || r(L, w, b);
  }, N = (H) => {
    const D = u.getFullYear(), U = new Date(D, H, 1), X = U.getFullYear(), _ = U.getMonth();
    h(U), v(X), f(_ === w && X === b ? L : void 0);
  }, j = (H) => {
    isNaN(H) || (h((D) => new Date(H, D.getMonth(), 1)), H == b ? p === void 0 && f(L) : f(void 0), v(H));
  }, A = V === b && M === w, I = k0(V, M, p, t, n), F = (H) => {
    H.isCurrentMonth && (f(H.dayNumber), r == null || r(H.dayNumber, H.month, H.year));
  }, B = (H, D) => {
    H.isCurrentMonth && (o == null || o(H.dayNumber, H.month, H.year, "date", D));
  }, z = (H, D) => {
    H.isCurrentMonth && (i == null || i(H.dayNumber, H.month, H.year, "date", D));
  }, P = (H, D) => {
    H.isCurrentMonth && (a == null || a(H.dayNumber, H.month, H.year, "date", D));
  }, R = (H, D) => {
    H.isCurrentMonth && (c == null || c(H.dayNumber, H.month, H.year, "date", D));
  };
  return /* @__PURE__ */ m("div", { className: `land-calendar-date ${l}`, style: d, children: [
    /* @__PURE__ */ s(
      pn,
      {
        language: e,
        currentYear: k,
        currentMonth: M,
        viewMode: "date",
        shouldShowYearSelector: C,
        yearRange: x,
        monthPrevDisabled: $,
        monthNextDisabled: S,
        onMonthChange: N,
        onYearChange: j
      }
    ),
    /* @__PURE__ */ s(Fc, { language: e }),
    /* @__PURE__ */ s("div", { className: "land-calendar-days", children: I.map((H, D) => /* @__PURE__ */ s(
      y0,
      {
        day: H,
        onDayClick: F,
        onDayMouseOver: B,
        onDayMouseOut: z,
        onDayMouseEnter: P,
        onDayMouseLeave: R,
        children: H.isCurrentMonth && y.map((U) => U.date).includes(`${H.month}-${H.dayNumber}`) && /* @__PURE__ */ s("div", { className: "land-calendar-bottom-dot" })
      },
      `${H.year}-${H.month}-${H.dayNumber}-${D}`
    )) }),
    !A && /* @__PURE__ */ s(
      he,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: T
      }
    )
  ] });
}, M0 = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onWeekChange: r,
  onWeekMouseOver: o,
  onWeekMouseOut: i,
  className: a = "",
  style: c
}) => {
  const [l, d] = E(/* @__PURE__ */ new Date()), [u, h] = E(() => {
    const C = /* @__PURE__ */ new Date(), $ = vt(C.getFullYear(), C.getMonth());
    let S = 0;
    for (let N = 0; N < $.length; N++)
      if ($[N].isCurrentWeek) {
        S = N;
        break;
      }
    const T = S + 1;
    return setTimeout(() => {
      const N = $[S];
      r == null || r(N.weekStart, N.weekEnd, C.getFullYear());
    }, 0), T;
  }), p = l.getFullYear(), { yearRange: f, shouldShowYearSelector: k } = K(() => {
    const C = Ot(t, n), $ = fn(t, n);
    return {
      yearRange: C,
      shouldShowYearSelector: $
    };
  }, [t, n]), v = K(() => {
    if (!t && !n)
      return !1;
    const C = l.getMonth(), $ = C <= 0 ? 11 : C - 1, S = C <= 0 ? p - 1 : p;
    return !sn(S, $, t, n);
  }, [l, p, t, n]), y = K(() => {
    if (!t && !n)
      return !1;
    const C = l.getMonth(), $ = C >= 11 ? 0 : C + 1, S = C >= 11 ? p + 1 : p;
    return !sn(S, $, t, n);
  }, [l, p, t, n]), g = () => {
    const C = new Date(l.getFullYear(), l.getMonth() - 1, 1);
    d(C);
    const $ = vt(C.getFullYear(), C.getMonth());
    let S = 0;
    for (let N = 0; N < $.length; N++)
      if ($[N].isCurrentWeek) {
        S = N;
        break;
      }
    h(S + 1);
    const T = $[S];
    r == null || r(T.weekStart, T.weekEnd, C.getFullYear());
  }, L = () => {
    const C = new Date(l.getFullYear(), l.getMonth() + 1, 1);
    d(C);
    const $ = vt(C.getFullYear(), C.getMonth());
    let S = 0;
    for (let N = 0; N < $.length; N++)
      if ($[N].isCurrentWeek) {
        S = N;
        break;
      }
    h(S + 1);
    const T = $[S];
    r == null || r(T.weekStart, T.weekEnd, C.getFullYear());
  }, w = (C) => {
    if (!isNaN(C)) {
      const $ = new Date(C, l.getMonth(), l.getDate());
      d($);
      const S = vt(C, $.getMonth());
      let T = 0;
      for (let j = 0; j < S.length; j++)
        if (S[j].isCurrentWeek) {
          T = j;
          break;
        }
      h(T + 1);
      const N = S[T];
      r == null || r(N.weekStart, N.weekEnd, C);
    }
  }, b = (C) => {
    const $ = C + 1;
    h($);
    const S = M[C];
    r == null || r(S.weekStart, S.weekEnd, p);
  }, V = () => {
    const C = /* @__PURE__ */ new Date();
    d(C);
    const $ = vt(C.getFullYear(), C.getMonth());
    let S = 0;
    for (let N = 0; N < $.length; N++)
      if ($[N].isCurrentWeek) {
        S = N;
        break;
      }
    h(S + 1);
    const T = $[S];
    r == null || r(T.weekStart, T.weekEnd, C.getFullYear());
  }, M = vt(p, l.getMonth(), u, t, n);
  Array.from({ length: M.length }, (C, $) => ({
    key: `${$ + 1}`,
    label: `${e === "zh" ? "第" : "Week "}${$ + 1}${e === "zh" ? "周" : ""}`
  }));
  const x = M.some((C) => C.isCurrentWeek);
  return /* @__PURE__ */ m("div", { className: `land-calendar-week ${a}`, style: c, children: [
    /* @__PURE__ */ s(
      pn,
      {
        language: e,
        currentYear: p,
        currentMonth: l.getMonth(),
        viewMode: "week",
        shouldShowYearSelector: k,
        yearRange: f,
        monthPrevDisabled: v,
        monthNextDisabled: y,
        onMonthChange: (C) => {
          const $ = l.getMonth(), S = C - $;
          S === 1 || S === -11 ? L() : (S === -1 || S === 11) && g();
        },
        onYearChange: w
      }
    ),
    /* @__PURE__ */ s(Fc, { language: e }),
    /* @__PURE__ */ s("div", { className: "land-calendar-week-days", children: M.map((C, $) => /* @__PURE__ */ s(
      "div",
      {
        className: `land-calendar-week-row ${C.isSelected ? "selected" : ""} ${C.isCurrentWeek ? "current" : ""} ${C.isDisabled ? "disabled" : ""}`,
        onClick: () => !C.isDisabled && b($),
        onMouseOver: (S) => {
          C.isDisabled || o == null || o(C.weekStart, C.weekEnd, p, "week", S);
        },
        onMouseOut: (S) => {
          C.isDisabled || i == null || i(C.weekStart, C.weekEnd, p, "week", S);
        },
        children: C.dates.map((S, T) => /* @__PURE__ */ s(
          "div",
          {
            className: `land-calendar-item day ${S.toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? "current" : ""} ${S.getMonth() !== l.getMonth() ? "other-month" : ""}`,
            children: /* @__PURE__ */ s("div", { className: "day-number", children: S.getDate() })
          },
          T
        ))
      },
      $
    )) }),
    !x && /* @__PURE__ */ s(
      he,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: V
      }
    )
  ] });
}, C0 = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onMonthChange: r,
  onMonthMouseOver: o,
  onMonthMouseOut: i,
  className: a = "",
  style: c
}) => {
  const l = /* @__PURE__ */ new Date(), d = l.getMonth(), u = l.getFullYear(), [h, p] = E(u), [f, k] = E(d), [v, y] = E(u), { yearRange: g, shouldShowYearSelector: L } = K(() => {
    const N = Ot(t, n), j = fn(t, n);
    return {
      yearRange: N,
      shouldShowYearSelector: j
    };
  }, [t, n]), w = () => {
    const N = h - 1;
    p(N);
  }, b = () => {
    const N = h + 1;
    p(N);
  }, V = (N) => {
    isNaN(N) || p(N);
  }, M = (N) => {
    k(N), y(h), r == null || r(N, h);
  }, x = () => {
    p(u), k(d), y(u), r == null || r(d, u);
  }, C = [
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
  ], $ = (N) => h === u && N === d, S = (N) => h === v && N === f, T = h === u;
  return /* @__PURE__ */ m("div", { className: `land-calendar-month ${a}`, style: c, children: [
    /* @__PURE__ */ s(
      pn,
      {
        language: e,
        currentYear: h,
        viewMode: "month",
        shouldShowYearSelector: L,
        yearRange: g,
        onMonthChange: (N) => {
          N > 11 ? b() : N < 0 && w();
        },
        onYearChange: V
      }
    ),
    /* @__PURE__ */ s("div", { className: "land-calendar-months-grid", children: C.map((N, j) => {
      const A = sn(h, N.value, t, n);
      return /* @__PURE__ */ s(
        "div",
        {
          className: `land-calendar-month-item ${$(N.value) ? "current" : ""} ${S(N.value) ? "selected" : ""} ${A ? "" : "disabled"}`,
          onClick: () => A && M(N.value),
          onMouseOver: (I) => {
            A && (o == null || o(N.value, h, "month", I));
          },
          onMouseOut: (I) => {
            A && (i == null || i(N.value, h, "month", I));
          },
          children: /* @__PURE__ */ s("div", { className: "month-name", children: e === "zh" ? N.zh : N.en })
        },
        j
      );
    }) }),
    !T && /* @__PURE__ */ s(
      he,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: x
      }
    )
  ] });
}, x0 = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onQuarterChange: r,
  onQuarterMouseOver: o,
  onQuarterMouseOut: i,
  className: a = "",
  style: c
}) => {
  const d = (/* @__PURE__ */ new Date()).getFullYear();
  function u() {
    const N = (/* @__PURE__ */ new Date()).getMonth();
    return Math.floor(N / 3) + 1;
  }
  const [h, p] = E(d), [f, k] = E(u()), [v, y] = E(d), { yearRange: g, shouldShowYearSelector: L } = K(() => {
    const N = Ot(t, n), j = fn(t, n);
    return {
      yearRange: N,
      shouldShowYearSelector: j
    };
  }, [t, n]), w = () => {
    const N = h - 1;
    p(N);
  }, b = () => {
    const N = h + 1;
    p(N);
  }, V = (N) => {
    isNaN(N) || p(N);
  }, M = (N) => {
    k(N), y(h), r == null || r(N, h);
  }, x = () => {
    const N = u();
    p(d), k(N), y(d), r == null || r(N, d);
  }, C = [
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
  ], $ = (N) => h === d && N === u(), S = (N) => h === v && N === f, T = h === d;
  return /* @__PURE__ */ m("div", { className: `land-calendar-quarter ${a}`, style: c, children: [
    /* @__PURE__ */ s(
      pn,
      {
        language: e,
        currentYear: h,
        viewMode: "quarter",
        shouldShowYearSelector: L,
        yearRange: g,
        onMonthChange: (N) => {
          N > 11 ? b() : N < 0 && w();
        },
        onYearChange: V
      }
    ),
    /* @__PURE__ */ s("div", { className: "land-calendar-quarters-grid", children: C.map((N, j) => {
      const A = v0(h, N.value, t, n);
      return /* @__PURE__ */ m(
        "div",
        {
          className: `land-calendar-quarter-item ${$(N.value) ? "current" : ""} ${S(N.value) ? "selected" : ""} ${A ? "" : "disabled"}`,
          onClick: () => A && M(N.value),
          onMouseOver: (I) => {
            A && (o == null || o(N.value, h, "quarter", I));
          },
          onMouseOut: (I) => {
            A && (i == null || i(N.value, h, "quarter", I));
          },
          children: [
            /* @__PURE__ */ s("div", { className: "quarter-header", children: /* @__PURE__ */ s("div", { className: "quarter-name", children: e === "zh" ? N.zh : N.en }) }),
            /* @__PURE__ */ s("div", { className: "quarter-months", children: N.months }),
            /* @__PURE__ */ s("div", { className: "quarter-description", children: N.description })
          ]
        },
        j
      );
    }) }),
    !T && /* @__PURE__ */ s(
      he,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: x
      }
    )
  ] });
}, b0 = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onYearChange: r,
  onYearMouseOver: o,
  onYearMouseOut: i,
  className: a = "",
  style: c
}) => {
  const d = (/* @__PURE__ */ new Date()).getFullYear();
  function u() {
    return Math.floor(d / 10) * 10;
  }
  const [h, p] = E(u()), [f, k] = E(d), { yearRange: v, shouldShowYearSelector: y } = K(() => {
    const N = Ot(t, n), j = fn(t, n);
    return {
      yearRange: N,
      shouldShowYearSelector: j
    };
  }, [t, n, d]), g = () => {
    const N = h - 10;
    p(N);
  }, L = () => {
    const N = h + 10;
    p(N);
  }, w = (N) => {
    p(N);
  }, b = (N) => {
    k(N), r == null || r(N);
  }, V = () => {
    p(u()), k(d), r == null || r(d);
  }, M = K(() => {
    const N = [];
    for (let j = 0; j < 10; j++) {
      const A = h + j;
      N.push(A);
    }
    return N;
  }, [h]), x = K(() => {
    const N = [], [j, A] = v, I = Math.floor(j / 10) * 10, F = Math.floor(A / 10) * 10;
    for (let B = I; B <= F; B += 10)
      N.push({
        key: B.toString(),
        label: `${B}-${B + 9}`
      });
    return N;
  }, [v]), C = (N) => N === d, $ = (N) => N === f, S = (N) => g0(N, t, n), T = M.includes(d);
  return /* @__PURE__ */ m("div", { className: `land-calendar-year ${a}`, style: c, children: [
    /* @__PURE__ */ s(
      pn,
      {
        language: e,
        currentYear: h,
        viewMode: "year",
        shouldShowYearSelector: y,
        yearRange: v,
        onMonthChange: (N) => {
          N > 11 ? L() : N < 0 && g();
        },
        onYearChange: w,
        customYearDisplay: `${h}-${h + 9}`,
        customYearOptions: x
      }
    ),
    /* @__PURE__ */ s("div", { className: "land-calendar-years-grid", children: M.map((N, j) => {
      const A = S(N);
      return /* @__PURE__ */ m(
        "div",
        {
          className: `land-calendar-year-item ${C(N) ? "current" : ""} ${$(N) ? "selected" : ""} ${A ? "" : "disabled"}`,
          onClick: () => A && b(N),
          onMouseOver: (I) => {
            A && (o == null || o(N, "year", I));
          },
          onMouseOut: (I) => {
            A && (i == null || i(N, "year", I));
          },
          children: [
            /* @__PURE__ */ s("div", { className: "year-number", children: N }),
            !A && /* @__PURE__ */ s("div", { className: "disabled-overlay", children: e === "zh" ? "超出范围" : "Out of range" })
          ]
        },
        j
      );
    }) }),
    !T && /* @__PURE__ */ s(
      he,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: V
      }
    )
  ] });
}, N0 = ({
  viewMode: e = "date",
  language: t = "zh",
  minDate: n,
  maxDate: r,
  onDayChange: o,
  onWeekChange: i,
  onMonthChange: a,
  onQuarterChange: c,
  onYearChange: l,
  onDayMouseOver: d,
  onDayMouseOut: u,
  onDayMouseEnter: h,
  onDayMouseLeave: p,
  onWeekMouseOver: f,
  onWeekMouseOut: k,
  onMonthMouseOver: v,
  onMonthMouseOut: y,
  onQuarterMouseOver: g,
  onQuarterMouseOut: L,
  onYearMouseOver: w,
  onYearMouseOut: b,
  className: V,
  style: M,
  ...x
}) => {
  const C = () => {
    switch (e) {
      case "date":
        return /* @__PURE__ */ s(
          $i,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onDayChange: o,
            onDayMouseOver: d,
            onDayMouseOut: u,
            onDayMouseEnter: h,
            onDayMouseLeave: p,
            className: V
          }
        );
      case "week":
        return /* @__PURE__ */ s(
          M0,
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
          C0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onMonthChange: a,
            onMonthMouseOver: v,
            onMonthMouseOut: y
          }
        );
      case "quarter":
        return /* @__PURE__ */ s(
          x0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onQuarterChange: c,
            onQuarterMouseOver: g,
            onQuarterMouseOut: L
          }
        );
      case "year":
        return /* @__PURE__ */ s(
          b0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onYearChange: l,
            onYearMouseOver: w,
            onYearMouseOut: b
          }
        );
      default:
        return /* @__PURE__ */ s(
          $i,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onDayChange: o,
            onDayMouseOver: d,
            onDayMouseOut: u,
            onDayMouseEnter: h,
            onDayMouseLeave: p
          }
        );
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: `land-calendar land-calendar-${e} ${V}`,
      style: M,
      ...x,
      children: C()
    }
  );
}, hm = ({
  checked: e,
  data: t,
  animated: n,
  onChange: r,
  style: o,
  className: i = ""
}) => /* @__PURE__ */ s("div", { className: `land-checkbox ${i}`, style: o, children: t == null ? void 0 : t.map(
  (a) => /* @__PURE__ */ s(
    Go,
    {
      checked: e.includes(a.key),
      onCheckedChange: () => r == null ? void 0 : r(a),
      animated: n,
      ...a
    },
    a.key
  )
) }), pm = ({
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
), fm = ({
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
        !n && /* @__PURE__ */ s(Y, { name: "arrow", strokeWidth: 4, size: 16, stroke: "var(--color-gray-10)" }),
        t
      ]
    }
  ),
  /* @__PURE__ */ s("div", { className: "land-collapse-content", children: /* @__PURE__ */ s("div", { className: "land-collapse-content-details", children: r }) })
] }), mm = ({ children: e, style: t, className: n }) => {
  const [r, o] = E(132), i = document.querySelector(".land-header"), a = document.querySelector(".land-footer");
  return Z(() => {
    let c, l;
    i ? c = i.getBoundingClientRect().height : c = 0, a ? l = a.getBoundingClientRect().height : l = 0, o(c + l);
  }), /* @__PURE__ */ s("div", { className: `land-content ${n}`, style: {
    "--land-content-min-height": `${r}px`,
    ...t
  }, children: e });
}, V0 = [
  { key: "hex", label: "HEX" },
  { key: "rgb", label: "RGB" },
  { key: "hsv", label: "HSV" },
  { key: "hsl", label: "HSL" }
], S0 = "hex", Ti = { h: 0, s: 100, v: 100 }, ji = "var(--color-gray-3)", se = {
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
    let l = 0, d = 0, u = 0;
    switch (r % 6) {
      case 0:
        l = n, d = c, u = i;
        break;
      case 1:
        l = a, d = n, u = i;
        break;
      case 2:
        l = i, d = n, u = c;
        break;
      case 3:
        l = i, d = a, u = n;
        break;
      case 4:
        l = c, d = i, u = n;
        break;
      case 5:
        l = n, d = i, u = a;
        break;
    }
    return {
      r: Math.max(0, Math.min(255, Math.round(l * 255))),
      g: Math.max(0, Math.min(255, Math.round(d * 255))),
      b: Math.max(0, Math.min(255, Math.round(u * 255)))
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
    const d = a / 2;
    if (i !== 0) {
      switch (l = d > 0.5 ? i / (2 - a) : i / a, r) {
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
      l: Math.round(d * 100)
    };
  },
  // HSL转RGB
  hslToRgb: (e, t, n) => {
    e = (e % 360 + 360) % 360, t = Math.max(0, Math.min(100, t)), n = Math.max(0, Math.min(100, n)), e /= 360, t /= 100, n /= 100;
    const r = (c, l, d) => (d < 0 && (d += 1), d > 1 && (d -= 1), d < 1 / 6 ? c + (l - c) * 6 * d : d < 1 / 2 ? l : d < 2 / 3 ? c + (l - c) * (2 / 3 - d) * 6 : c);
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
}, $0 = ({ hue: e, onPanelChange: t }) => {
  const n = q(null), [r, o] = E(!1), [i, a] = E({ x: 0, y: 0 }), c = K(() => {
    const f = se.hsvToRgb(e, 100, 100);
    return {
      background: `linear-gradient(to right, #fff 0%, ${se.rgbToHex(f.r, f.g, f.b)} 100%),
                   linear-gradient(to top, #000 0%, transparent 100%)`
    };
  }, [e]), l = O(() => {
    o(!1);
  }, []), d = O(
    (f) => {
      if (!r || !n.current) return;
      const { left: k, top: v } = n.current.getBoundingClientRect(), y = f.clientX - k, g = f.clientY - v, L = n.current.clientWidth, w = n.current.clientHeight, b = Math.max(0, Math.min(L, y)), V = Math.max(0, Math.min(w, g));
      a({ x: b, y: V });
      const M = b / L, x = 1 - V / w;
      t(M, x);
    },
    [r, t]
  );
  Z(() => {
    if (r)
      return document.addEventListener("mousemove", d), document.addEventListener("mouseup", l), () => {
        document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", l);
      };
  }, [r, d, l]);
  const u = O(
    (f) => {
      var C, $, S;
      f.preventDefault(), o(!0);
      const { left: k, top: v } = ((C = n.current) == null ? void 0 : C.getBoundingClientRect()) || {
        left: 0,
        top: 0
      }, y = f.clientX - k, g = f.clientY - v, L = (($ = n.current) == null ? void 0 : $.clientWidth) || 0, w = ((S = n.current) == null ? void 0 : S.clientHeight) || 0, b = Math.max(0, Math.min(L, y)), V = Math.max(0, Math.min(w, g));
      a({ x: b, y: V });
      const M = b / L, x = 1 - V / w;
      t(M, x);
    },
    [t]
  ), h = O(
    (f) => {
      var C, $, S;
      if (!r) return;
      f.preventDefault();
      const { left: k, top: v } = ((C = n.current) == null ? void 0 : C.getBoundingClientRect()) || {
        left: 0,
        top: 0
      }, y = f.clientX - k, g = f.clientY - v, L = (($ = n.current) == null ? void 0 : $.clientWidth) || 0, w = ((S = n.current) == null ? void 0 : S.clientHeight) || 0, b = Math.max(0, Math.min(L, y)), V = Math.max(0, Math.min(w, g));
      a({ x: b, y: V });
      const M = b / L, x = 1 - V / w;
      t(M, x);
    },
    [r, t]
  ), p = O(() => {
    o(!1);
  }, []);
  return /* @__PURE__ */ s(
    "div",
    {
      ref: n,
      className: "land-color-picker-panel-move-area",
      style: c,
      onMouseDown: u,
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
}, T0 = ({ hue: e, onHueChange: t }) => {
  const n = q(null), r = O(
    (i) => {
      if (!n.current) return;
      const a = n.current.getBoundingClientRect(), c = Math.max(0, Math.min(1, (i.clientX - a.left) / a.width));
      t(c * 360);
    },
    [t]
  ), o = O(
    (i) => {
      if (!n.current) return;
      r(i);
      const a = (d) => {
        if (!n.current) {
          l();
          return;
        }
        const u = n.current.getBoundingClientRect(), h = Math.max(
          0,
          Math.min(1, (d.clientX - u.left) / u.width)
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
}, j0 = ({
  hue: e,
  alpha: t,
  onAlphaChange: n
}) => {
  const r = q(null), o = K(() => {
    const c = se.hsvToRgb(e, 100, 100);
    return {
      background: `linear-gradient(to right, transparent 0%, ${se.rgbToHex(c.r, c.g, c.b)} 100%)`
    };
  }, [e]), i = O(
    (c) => {
      if (!r.current) return;
      const l = r.current.getBoundingClientRect(), d = Math.max(0, Math.min(1, (c.clientX - l.left) / l.width));
      n(d);
    },
    [n]
  ), a = O(
    (c) => {
      if (!r.current) return;
      i(c);
      const l = (h) => {
        if (!r.current) {
          u();
          return;
        }
        const p = r.current.getBoundingClientRect(), f = Math.max(
          0,
          Math.min(1, (h.clientX - p.left) / p.width)
        );
        n(f);
      }, d = () => {
        u();
      }, u = () => {
        document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", d);
      };
      document.addEventListener("mousemove", l), document.addEventListener("mouseup", d);
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
}, Qn = ({
  type: e = "border",
  value: t,
  inputType: n = "text",
  placeholder: r = "请输入",
  beforeContent: o,
  afterContent: i,
  prefix: a,
  suffix: c,
  width: l,
  maxLength: d,
  disabled: u,
  textAlign: h = "left",
  onChange: p,
  onEnter: f,
  onFocus: k,
  onBlur: v,
  onClear: y,
  className: g = "",
  style: L,
  ...w
}) => {
  const b = q(null), V = q(null), M = O(() => {
    !b.current || !V.current || (b.current.scrollLeft = V.current.scrollLeft);
  }, []), x = O((C) => {
    b.current && (b.current.scrollLeft = 0), v == null || v(C);
  }, []);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-input ${u ? "disabled" : ""} ${y ? "clear" : ""} ${e} text-${h} ${g}`,
      style: {
        width: typeof l == "number" ? `${l}px` : l,
        ...L
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
              ref: V,
              placeholder: r,
              type: n,
              value: t,
              max: d,
              onKeyDown: (C) => {
                C.code === "Enter" && (f == null || f(t, C));
              },
              onClick: (C) => C.stopPropagation(),
              onFocus: k,
              onBlur: x,
              onChange: (C) => {
                M == null || M(), p == null || p(C.target.value, C);
              },
              onScroll: M,
              ...w
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
        y && /* @__PURE__ */ s(
          "div",
          {
            className: `land-input-clear-icon ${t ? "" : "hide"}`,
            onClick: y,
            children: /* @__PURE__ */ s(Y, { name: "error-fill" })
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
  dashedLength: d = 10
}) => /* @__PURE__ */ m(
  "div",
  {
    className: `land-divider ${e} ${r} ${o ? "width-content" : ""} ${i} ${c}`,
    style: {
      width: e === "row" ? `${t}` : "1px",
      height: e === "column" ? `${t}` : "1px",
      margin: e === "row" ? `${n}px 0` : `0 ${n}px`,
      "--land-divider-dashed-gap": `${l}px`,
      "--land-divider-dashed-length": `${d}px`,
      ...a
    },
    children: [
      /* @__PURE__ */ s("div", { className: "land-divider-line" }),
      o && /* @__PURE__ */ m(pe, { children: [
        /* @__PURE__ */ s("div", { className: "land-divider-content", children: o }),
        /* @__PURE__ */ s("div", { className: "land-divider-line land-divider-line-right" })
      ] })
    ]
  }
), Pe = ({
  value: e = 0,
  type: t = "border",
  step: n = 1,
  min: r = 0,
  max: o = 100,
  prefix: i,
  suffix: a,
  disabled: c,
  onChange: l,
  width: d,
  hideArrowButton: u = !1,
  textAlign: h,
  enableWheelScroll: p = !1,
  style: f,
  ...k
}) => {
  const [v, y] = E(e);
  Z(() => e !== void 0 && y(e), [e]);
  const g = (b, V) => {
    c || b < r - n / 2 || b > o + n / 2 || (y(b), l == null || l(b, V));
  }, L = O(
    (b, V) => {
      const M = Number(b);
      M > o || M < r || typeof M == "number" && M % n || (y(M), l == null || l(M, V));
    },
    [o, r, n, l]
  ), w = O(
    (b) => {
      if (!p || c) return;
      b.preventDefault(), b.stopPropagation();
      const V = b.deltaY > 0 ? -n : n, M = v + V;
      M >= r && M <= o && g(M, b);
    },
    [p, c, v, n, r, o]
  );
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-number-input ${u ? "hide-arrow-button" : ""}`,
      "data-wheel-enabled": p,
      style: {
        width: typeof d == "number" ? `${d}px` : d,
        ...f
      },
      onClick: (b) => b.stopPropagation(),
      onWheel: w,
      children: [
        /* @__PURE__ */ s(
          ve,
          {
            targetBody: !0,
            className: "land-number-input-wheel-popover",
            content: p ? "滚动鼠标滚轮调整数值" : "",
            placement: "top",
            theme: "dark",
            children: /* @__PURE__ */ s(
              Qn,
              {
                className: "land-number-input-input",
                type: t,
                inputType: "number",
                value: String(v),
                disabled: c,
                prefix: i,
                suffix: a,
                onChange: (b, V) => L(b, V),
                style: {
                  paddingRight: u ? "0" : "40px"
                },
                textAlign: h,
                placeholder: k.placeholder,
                ...k
              }
            )
          }
        ),
        !u && /* @__PURE__ */ m(
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
                  onClick: (b) => g == null ? void 0 : g(v + n, b),
                  children: /* @__PURE__ */ s(Y, { name: "arrow", size: 16 })
                }
              ),
              t === "border" && /* @__PURE__ */ s(Re, { gap: 0, lineLength: "32px" }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `land-numberInput-dec ${v === r || c ? "disabled" : ""}`,
                  onClick: (b) => g == null ? void 0 : g(v - n, b),
                  children: /* @__PURE__ */ s(Y, { name: "arrow", size: 16 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, gm = ({
  color: e = ji,
  onChange: t,
  style: n,
  className: r = "",
  disabled: o
}) => {
  const [i, a] = E(S0), [c, l] = E(Ti.h), [d, u] = E(1), [h, p] = E(""), [f, k] = E({ r: 0, g: 0, b: 0 }), [v, y] = E(Ti), [g, L] = E({ h: 0, s: 0, l: 0 }), [w, b] = E({ x: 0, y: 0 }), V = q(!1), M = q(""), x = K(() => {
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
  }, [i, h, f, v, g]), C = K(() => {
    switch (i) {
      case "hex":
        return h || "#000000";
      case "rgb":
        return se.rgbToHex(
          f.r,
          f.g,
          f.b
        );
      case "hsv":
        const P = se.hsvToRgb(
          v.h,
          v.s,
          v.v
        );
        return se.rgbToHex(P.r, P.g, P.b);
      case "hsl":
        const R = se.hslToRgb(
          g.h,
          g.s,
          g.l
        );
        return se.rgbToHex(R.r, R.g, R.b);
      default:
        return "#000000";
    }
  }, [i, h, f, v, g]), $ = K(() => {
    const P = se.hexToRgb(C);
    return P ? `rgba(${P.r}, ${P.g}, ${P.b}, ${d})` : `rgba(0, 0, 0, ${d})`;
  }, [C, d]), S = K(
    () => ({
      background: $,
      ...n
    }),
    [$, n]
  );
  Z(() => {
    if (e && e !== ji && !V.current) {
      const P = se.hexToRgb(e);
      if (P) {
        const R = se.rgbToHsv(P.r, P.g, P.b), H = se.rgbToHsl(P.r, P.g, P.b);
        p(e), k(P), y(R), L(H), l(R.h), V.current = !0;
      }
    } else V.current || (l(0), y({ h: 0, s: 0, v: 50 }), L({ h: 0, s: 0, l: 50 }), k({ r: 128, g: 128, b: 128 }), p("#808080"), V.current = !0);
  }, [e]);
  const T = O(() => {
    const P = `${x}-${C}-${$}`;
    P !== M.current && (M.current = P, t == null || t(x, C, $));
  }, [t, x, C, $]);
  Z(() => {
    V.current && T();
  }, [x, C, $, T]);
  const N = O(
    (P, R) => {
      b({ x: P, y: R });
      const H = P * 100, D = R * 100;
      y({ h: c, s: H, v: D });
      const X = se.hsvToRgb(c, H, D), _ = se.rgbToHsl(X.r, X.g, X.b), W = se.rgbToHex(X.r, X.g, X.b);
      k(X), L(_), p(W);
    },
    [c]
  ), j = (P) => {
    l(P);
    const R = { ...v, h: P };
    y(R);
    const H = se.hsvToRgb(P, R.s, R.v), D = se.rgbToHsl(H.r, H.g, H.b), U = se.rgbToHex(H.r, H.g, H.b);
    k(H), L(D), p(U);
  }, A = (P) => {
    u(P);
  }, I = (P) => {
    let R = P.replace("#", "").toUpperCase();
    R.length > 6 && (R = R.slice(0, 6)), R = R.replace(/[^0-9A-F]/g, "");
    const H = R.length > 0 ? `#${R}` : "#";
    if (p(H), R.length === 6) {
      const D = se.hexToRgb(H);
      if (D) {
        const U = se.rgbToHsv(D.r, D.g, D.b), X = se.rgbToHsl(D.r, D.g, D.b);
        k(D), y(U), L(X), l(U.h);
      }
    }
  }, F = (P, R) => {
    const H = Math.max(0, Math.min(255, Math.round(R))), D = { ...f, [P]: H };
    k(D);
    const U = se.rgbToHsv(D.r, D.g, D.b), X = se.rgbToHsl(D.r, D.g, D.b), _ = se.rgbToHex(D.r, D.g, D.b);
    y(U), L(X), p(_), l(U.h);
  }, B = (P, R) => {
    let H = R;
    P === "h" ? H = (R % 360 + 360) % 360 : H = Math.max(0, Math.min(100, Math.round(R)));
    const D = { ...v, [P]: H };
    y(D);
    const U = se.hsvToRgb(D.h, D.s, D.v), X = se.rgbToHsl(U.r, U.g, U.b), _ = se.rgbToHex(U.r, U.g, U.b);
    k(U), L(X), p(_), l(D.h);
  }, z = (P, R) => {
    let H = R;
    P === "h" ? H = (R % 360 + 360) % 360 : H = Math.max(0, Math.min(100, Math.round(R)));
    const D = { ...g, [P]: H };
    L(D);
    const U = se.hslToRgb(D.h, D.s, D.l), X = se.rgbToHsv(U.r, U.g, U.b), _ = se.rgbToHex(U.r, U.g, U.b);
    k(U), y(X), p(_), l(D.h);
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: `land-color-picker ${o ? "disabled" : ""} ${r}`,
      children: /* @__PURE__ */ s(
        hn,
        {
          trigger: "click",
          disabled: o,
          dropContent: /* @__PURE__ */ m(
            "div",
            {
              className: "land-color-picker-drop-panel",
              onClick: (P) => P.stopPropagation(),
              children: [
                /* @__PURE__ */ s($0, { hue: c, onPanelChange: N }),
                /* @__PURE__ */ m("div", { className: "land-color-picker-panel-move-sliders", children: [
                  /* @__PURE__ */ s(
                    T0,
                    {
                      hue: c,
                      onHueChange: (P) => j(P)
                    }
                  ),
                  /* @__PURE__ */ s(
                    j0,
                    {
                      hue: c,
                      alpha: d,
                      onAlphaChange: A
                    }
                  )
                ] }),
                /* @__PURE__ */ m("div", { className: "land-color-picker-panel-color-mode", children: [
                  /* @__PURE__ */ s(
                    Dc,
                    {
                      type: "transparent",
                      data: V0,
                      onChange: (P) => a(P.key),
                      selected: i,
                      placeholder: "选择模式"
                    }
                  ),
                  /* @__PURE__ */ m("div", { className: "land-color-picker-panel-color-input", children: [
                    /* @__PURE__ */ m("div", { className: "land-color-picker-panel-color-input-numbers", children: [
                      i === "hex" && /* @__PURE__ */ s(
                        Qn,
                        {
                          prefix: "#",
                          value: h.replace("#", ""),
                          onChange: (P) => I(P)
                        }
                      ),
                      i === "rgb" && /* @__PURE__ */ m(pe, { children: [
                        /* @__PURE__ */ s(
                          Pe,
                          {
                            width: 48,
                            placeholder: "R",
                            value: f.r,
                            onChange: (P) => F("r", P),
                            min: 0,
                            max: 255,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s(
                          Pe,
                          {
                            width: 48,
                            placeholder: "G",
                            value: f.g,
                            onChange: (P) => F("g", P),
                            min: 0,
                            max: 255,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s(
                          Pe,
                          {
                            width: 48,
                            placeholder: "B",
                            value: f.b,
                            onChange: (P) => F("b", P),
                            min: 0,
                            max: 255,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        )
                      ] }),
                      i === "hsv" && /* @__PURE__ */ m(pe, { children: [
                        /* @__PURE__ */ s(
                          Pe,
                          {
                            width: 48,
                            placeholder: "H",
                            value: v.h,
                            onChange: (P) => B("h", P),
                            min: 0,
                            max: 360,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s(
                          Pe,
                          {
                            width: 48,
                            placeholder: "S",
                            value: v.s,
                            onChange: (P) => B("s", P),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s(
                          Pe,
                          {
                            width: 48,
                            placeholder: "V",
                            value: v.v,
                            onChange: (P) => B("v", P),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        )
                      ] }),
                      i === "hsl" && /* @__PURE__ */ m(pe, { children: [
                        /* @__PURE__ */ s(
                          Pe,
                          {
                            width: 48,
                            placeholder: "H",
                            value: g.h,
                            onChange: (P) => z("h", P),
                            min: 0,
                            max: 360,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s(
                          Pe,
                          {
                            width: 48,
                            placeholder: "S",
                            value: g.s,
                            onChange: (P) => z("s", P),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s(
                          Pe,
                          {
                            width: 48,
                            placeholder: "L",
                            value: g.l,
                            onChange: (P) => z("l", P),
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
                      Pe,
                      {
                        width: 56,
                        value: Math.round(d * 100),
                        onChange: (P) => {
                          const R = Math.max(
                            0,
                            Math.min(100, Math.round(P))
                          );
                          u(R / 100);
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
              style: S
            }
          )
        }
      )
    }
  );
}, vm = ({
  disabled: e,
  onChange: t,
  style: n,
  className: r = "",
  dropdownProps: o,
  inputProps: i,
  calendarProps: a,
  pickerType: c = "date",
  value: l,
  placeholder: d,
  showConfirmButton: u,
  allowInput: h = !1
}) => {
  const [p, f] = E(!1), [k, v] = E(l ? new Date(l) : null), [y, g] = E(""), [L, w] = E(""), [b, V] = E(!1);
  K(() => {
    e && p && f(!1);
  }, [e, p]);
  const M = O((R, H) => {
    if (!R) return "";
    const D = R.getFullYear(), U = R.getMonth() + 1, X = R.getDate();
    switch (H) {
      case "year":
        return `${D}年`;
      case "month":
        return `${D}年${U}月`;
      case "quarter":
        const _ = Math.ceil(U / 3);
        return `${D}年第${_}季度`;
      case "week":
        const W = new Date(D, 0, 1), J = Math.floor((R.getTime() - W.getTime()) / (24 * 60 * 60 * 1e3)), Q = Math.ceil((J + W.getDay() + 1) / 7);
        return `${D}年第${Q}周`;
      case "date":
      default:
        return `${D}-${U.toString().padStart(2, "0")}-${X.toString().padStart(2, "0")}`;
    }
  }, []), x = O((R) => {
    if (!R.trim()) return null;
    const H = /* @__PURE__ */ new Date(), D = H.getFullYear(), U = H.getMonth() + 1;
    H.getDate();
    const X = [
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
          year: D,
          month: parseInt(_[1]),
          day: parseInt(_[2])
        })
      },
      // DD日
      {
        pattern: /^(\d{1,2})日$/,
        extract: (_) => ({
          year: D,
          month: U,
          day: parseInt(_[1])
        })
      }
    ];
    for (const { pattern: _, extract: W } of X) {
      const J = R.match(_);
      if (J)
        try {
          const { year: Q, month: te, day: oe } = W(J), ae = new Date(Q, te - 1, oe);
          if (ae.getFullYear() === Q && ae.getMonth() === te - 1 && ae.getDate() === oe)
            return ae;
        } catch {
          continue;
        }
    }
    return null;
  }, []);
  K(() => {
    g(l ? M(new Date(l), c) : "");
  }, [l, c, M]);
  const C = O((...R) => {
    if (e) return;
    let H = null;
    switch (c) {
      case "year":
        const D = R[0];
        H = new Date(D, 0, 1);
        break;
      case "month":
        const [U, X] = R;
        H = new Date(X, U - 1, 1);
        break;
      case "quarter":
        const [_, W] = R, J = (_ - 1) * 3;
        H = new Date(W, J, 1);
        break;
      case "week":
        H = R[0];
        break;
      case "date":
      default:
        const [Q, te, oe] = R;
        H = new Date(oe, te, Q);
        break;
    }
    v(H), u || (g(M(H, c)), t == null || t(H), f(!1));
  }, [c, u, M, t, e]), $ = O(() => {
    e || (k && (g(M(k, c)), t == null || t(k)), f(!1));
  }, [k, c, M, t, e]), S = O(() => {
    e || (v(l ? new Date(l) : null), f(!1));
  }, [l, e]), T = O((R) => {
    if (e) {
      f(!1);
      return;
    }
    !R && u && v(l ? new Date(l) : null), f(R);
  }, [u, l, e]), N = O(() => {
    e || (v(null), g(""), w(""), t == null || t(null));
  }, [t, e]), j = O((R, H) => {
    e || w(R);
  }, [e]), A = O(() => {
    e || (h && c === "date" ? (V(!0), w(y)) : f(!0));
  }, [e, h, c, y]), I = O(() => {
    if (!e && h && c === "date") {
      if (V(!1), L.trim()) {
        const R = x(L);
        R ? (v(R), g(M(R, c)), t == null || t(R)) : g(M(k, c));
      } else
        v(null), g(""), t == null || t(null);
      w("");
    }
  }, [h, c, L, x, k, M, t, e]), F = O((R) => {
    if (!e && h && c === "date" && R.trim()) {
      const H = x(R);
      H && (v(H), g(M(H, c)), t == null || t(H), V(!1), w(""));
    }
  }, [h, c, x, M, t, e]), B = K(() => {
    if (d) return d;
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
  }, [c, d]), z = K(() => {
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
  }, [c]), P = K(() => {
    switch (c) {
      case "year":
        return { onYearChange: C };
      case "month":
        return { onMonthChange: C };
      case "quarter":
        return { onQuarterChange: C };
      case "week":
        return { onWeekChange: C };
      case "date":
      default:
        return { onDayChange: C };
    }
  }, [c, C]);
  return /* @__PURE__ */ s(
    "div",
    {
      className: `land-date-picker ${r}`,
      style: n,
      children: /* @__PURE__ */ s(
        hn,
        {
          open: p,
          disabled: e,
          trigger: "click",
          onOpen: T,
          dropContent: /* @__PURE__ */ m("div", { className: "land-date-picker-dropdown-content", children: [
            /* @__PURE__ */ s(
              N0,
              {
                viewMode: z,
                ...P,
                ...a
              }
            ),
            u && /* @__PURE__ */ m("div", { className: "land-date-picker-dropdown-actions", children: [
              /* @__PURE__ */ s(
                he,
                {
                  text: "取消",
                  type: "outline",
                  className: "land-date-picker-dropdown-cancel-button",
                  onClick: S
                }
              ),
              /* @__PURE__ */ s(
                he,
                {
                  text: "确定",
                  type: "background",
                  className: "land-date-picker-dropdown-confirm-button",
                  onClick: $
                }
              )
            ] })
          ] }),
          ...o,
          children: /* @__PURE__ */ m("div", { className: `land-date-picker-input ${y ? "" : "empty"} ${b ? "input-mode" : ""} `, children: [
            /* @__PURE__ */ s(
              Qn,
              {
                type: "transparent",
                className: "land-date-picker-input-value",
                placeholder: B,
                value: b ? L : y,
                onFocus: A,
                onBlur: I,
                onChange: h && c === "date" && !e ? j : void 0,
                onClear: N,
                onEnter: F,
                ...i
              }
            ),
            /* @__PURE__ */ s(Y, { name: "calendar", className: "land-date-picker-icon" })
          ] })
        }
      )
    }
  );
}, km = ({
  show: e,
  mask: t,
  title: n,
  headerLeftComponent: r,
  headerRightComponent: o,
  headerComponent: i,
  useHeaderDivider: a,
  footerLeftComponent: c,
  footerRightComponent: l,
  footerComponent: d,
  useFooterDivider: u,
  cancelLabel: h = "取消",
  submitLabel: p = "确定",
  submitDisabled: f,
  size: k = "medium",
  onClose: v,
  onSubmit: y,
  onCancel: g,
  enableEsc: L = !0,
  children: w,
  wrapStyle: b,
  wrapClassName: V,
  contentStyle: M,
  contentClassName: x,
  bodyStyle: C,
  bodyClassName: $,
  maskStyle: S
}) => {
  const T = K(() => {
    let N = "320px";
    switch (k) {
      case "small":
        N = "320px";
        break;
      case "medium":
        N = "600px";
        break;
      case "large":
        N = "1000px";
        break;
    }
    return N;
  }, [k]);
  return Z(() => {
    const N = (j) => {
      j.key === "Escape" && L && e && v && v();
    };
    return e && L && document.addEventListener("keydown", N), () => {
      document.removeEventListener("keydown", N);
    };
  }, [e, L, v]), /* @__PURE__ */ m(
    "div",
    {
      className: `land-dialog ${e ? "show" : ""} ${V}`,
      style: {
        "--land-dialog-content-width": T,
        ...b
      },
      children: [
        t && e && /* @__PURE__ */ s(
          we.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            className: "land-dialog-mask",
            style: S
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
            className: `land-dialog-content ${x}`,
            style: {
              ...M,
              width: T
            },
            children: [
              i || (n || v || r || o ? /* @__PURE__ */ m("div", { className: "land-dialog-header", children: [
                r || /* @__PURE__ */ s("div", { className: "land-dialog-header-title", children: n }),
                o || v && /* @__PURE__ */ s("div", { className: "land-dialog-header-close", children: /* @__PURE__ */ s(Y, { name: "close", onClick: v, size: 24 }) })
              ] }) : null),
              a && /* @__PURE__ */ s(Re, {}),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `land-dialog-body ${$}`,
                  style: C,
                  children: w
                }
              ),
              u && /* @__PURE__ */ s(Re, {}),
              d || /* @__PURE__ */ m("div", { className: "land-dialog-footer", children: [
                l || (h || p || g || y) && /* @__PURE__ */ m("div", { className: "land-dialog-footer-btn", children: [
                  g && /* @__PURE__ */ s(he, { type: "fill", status: "default", onClick: g, children: h }),
                  y && /* @__PURE__ */ s(
                    he,
                    {
                      type: "background",
                      status: "primary",
                      onClick: y,
                      disabled: f,
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
}, Lm = ({
  show: e,
  placement: t = "right",
  mask: n,
  title: r,
  headerLeftComponent: o,
  headerRightComponent: i,
  headerComponent: a,
  useHeaderDivider: c = !0,
  footerLeftComponent: l,
  footerRightComponent: d,
  footerComponent: u,
  useFooterDivider: h = !0,
  cancelLabel: p = "取消",
  submitLabel: f = "确定",
  cancelDisabled: k,
  submitDisabled: v,
  cancelButtonProps: y,
  submitButtonProps: g,
  minWidth: L,
  maxWidth: w,
  size: b = "auto",
  onClose: V,
  onSubmit: M,
  onCancel: x,
  enableEsc: C = !0,
  children: $,
  wrapStyle: S,
  wrapClassName: T = "",
  contentStyle: N,
  contentClassName: j = "",
  bodyStyle: A,
  bodyClassName: I = "",
  maskStyle: F
}) => {
  const B = K(() => {
    let R = "320px";
    if (t === "bottom")
      R = "100%";
    else
      switch (b) {
        case "small":
          R = "32%";
          break;
        case "medium":
          R = "60%";
          break;
        case "large":
          R = "80%";
          break;
        case "auto":
          R = "fit-content";
          break;
      }
    return R;
  }, [b, t]), z = K(() => {
    let R = "100%";
    if (t === "bottom")
      switch (b) {
        case "small":
          R = "30%";
          break;
        case "medium":
          R = "60%";
          break;
        case "large":
          R = "90%";
          break;
        case "auto":
          R = "fit-content";
          break;
      }
    return R;
  }, [t]), P = K(() => V && (r || a || o), [V, a, o]);
  return Z(() => {
    const R = (H) => {
      H.key === "Escape" && C && e && V && V();
    };
    return e && C && document.addEventListener("keydown", R), () => {
      document.removeEventListener("keydown", R);
    };
  }, [e, C, V]), /* @__PURE__ */ m(
    "div",
    {
      className: `land-drawer ${e ? "show" : ""} ${t} ${T}`,
      style: S,
      children: [
        n && e && /* @__PURE__ */ s(
          we.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            className: "land-drawer-mask",
            style: F
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
            className: `land-drawer-content ${j}`,
            style: {
              width: B,
              height: z,
              minWidth: L,
              maxWidth: w,
              ...N
            },
            children: [
              /* @__PURE__ */ m("div", { className: "land-drawer-header-wrapper", children: [
                V && /* @__PURE__ */ s("div", { className: "land-drawer-header-close", children: /* @__PURE__ */ s(Y, { name: "close", onClick: V, strokeWidth: 3 }) }),
                P && /* @__PURE__ */ s(Re, { direction: "column", lineLength: "36px", gap: 12 }),
                a || (r || V || o || i ? /* @__PURE__ */ m("div", { className: "land-drawer-header", children: [
                  o || /* @__PURE__ */ s("div", { className: "land-drawer-header-title", children: r }),
                  i && /* @__PURE__ */ s("div", { className: "land-drawer-header-right", children: i })
                ] }) : null)
              ] }),
              c && (a || V || o || i) && /* @__PURE__ */ s(Re, {}),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `land-drawer-body ${I}`,
                  style: A,
                  children: $
                }
              ),
              h && (u || M || x || l || d) && /* @__PURE__ */ s(Re, {}),
              (u || M || x || l || d) && /* @__PURE__ */ m("div", { className: "land-drawer-footer", children: [
                d || (p || f || x || M) && /* @__PURE__ */ m("div", { className: "land-drawer-footer-btn", children: [
                  x && /* @__PURE__ */ s(
                    he,
                    {
                      type: "fill",
                      disabled: k,
                      status: "default",
                      onClick: x,
                      ...y,
                      children: p
                    }
                  ),
                  M && /* @__PURE__ */ s(
                    he,
                    {
                      type: "background",
                      disabled: v,
                      status: "primary",
                      onClick: M,
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
}, A0 = (e, t) => {
  let n;
  return function(...o) {
    const i = () => {
      clearTimeout(n), e(...o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  };
}, wm = ({
  line: e = 1,
  text: t,
  children: n,
  open: r = !0,
  style: o,
  className: i,
  popoverProps: a,
  setMaxWidth: c
}) => {
  const l = q(null), [d, u] = E(!1), [h, p] = E(0), f = t || n || "", k = O(() => {
    const g = l.current;
    if (g)
      if (e === 1) {
        const L = g.offsetWidth < g.scrollWidth;
        p(g.offsetWidth), u(L);
      } else {
        const L = g.offsetHeight < g.scrollHeight;
        p(g.offsetWidth), u(L);
      }
  }, [e]), v = O(
    A0(k, 100),
    [k]
  );
  Z(() => {
    const g = l.current;
    if (!g) return;
    const L = new ResizeObserver(() => {
      v();
    });
    L.observe(g);
    let w = g.parentElement;
    const b = [];
    for (; w && w !== document.body; ) {
      const x = new ResizeObserver(() => {
        v();
      });
      x.observe(w), b.push(x), w = w.parentElement;
    }
    const V = () => {
      v();
    };
    window.addEventListener("resize", V);
    const M = new MutationObserver((x) => {
      let C = !1;
      x.forEach(($) => {
        if ($.type === "childList" || $.type === "attributes") {
          const S = $.target;
          (g.contains(S) || S.contains(g) || g.parentElement && g.parentElement.contains(S)) && (C = !0);
        }
      }), C && v();
    });
    return M.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style", "class"]
    }), k(), () => {
      L.disconnect(), b.forEach((x) => x.disconnect()), window.removeEventListener("resize", V), M.disconnect();
    };
  }, [k, v, f]), Z(() => {
    const g = setTimeout(() => {
      k();
    }, 0);
    return () => clearTimeout(g);
  }, [f, k]);
  const y = /* @__PURE__ */ s(
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
  return !d || !r ? y : /* @__PURE__ */ s(
    ve,
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
      children: y
    }
  );
}, Ai = ({
  width: e = "100%",
  height: t,
  column: n,
  wrap: r,
  justify: o = "start",
  align: i = "start",
  gap: a,
  bothCenter: c,
  children: l,
  style: d,
  className: u = ""
}) => /* @__PURE__ */ s(
  "div",
  {
    className: `land-flex ${u}`,
    style: {
      width: e,
      height: t,
      flexDirection: n ? "column" : "unset",
      gap: typeof a == "number" ? `${a}px` : a,
      flexWrap: r ? "wrap" : "nowrap",
      justifyContent: c ? "center" : o,
      alignItems: c ? "center" : i,
      ...d
    },
    children: l
  }
), ym = ({ children: e, style: t, className: n }) => /* @__PURE__ */ s("div", { className: `land-footer ${n}`, style: t, children: e });
var Be = /* @__PURE__ */ ((e) => (e.ColumnFit = "column-fit", e.ColumnFill = "column-fill", e.RowFit = "row-fit", e.RowFill = "row-fill", e.ColumnRepeat = "column-repeat", e.RowRepeat = "row-repeat", e.Default = "default", e))(Be || {});
const P0 = ({
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
  const d = K(() => {
    let u = {
      display: "grid",
      columnGap: o || r,
      rowGap: i || r
    };
    if (e === Be.Default)
      return { ...u, ...c };
    switch (e) {
      case Be.ColumnFit:
        return { ...u, gridTemplateColumns: `repeat(auto-fit, minmax(${t}px, 1fr))`, ...c };
      case Be.ColumnFill:
        return { ...u, gridTemplateColumns: `repeat(auto-fill, minmax(${t}px, 1fr))`, ...c };
      case Be.RowFit:
        return { ...u, gridTemplateRows: `repeat(auto-fit, minmax(${t}px, 1fr))`, ...c };
      case Be.RowFill:
        return { ...u, gridTemplateRows: `repeat(auto-fill, minmax(${t}px, 1fr))`, ...c };
      case Be.ColumnRepeat:
        return { ...u, gridTemplateColumns: `repeat(${n}, 1fr)`, ...c };
      case Be.RowRepeat:
        return { ...u, gridTemplateRows: `repeat(${n}, 1fr)`, ...c };
      default:
        return { ...u, ...c };
    }
  }, [e, t, n, r, c]);
  return /* @__PURE__ */ s("div", { className: `land-grid ${l}`, style: d, children: a });
};
var Pn = /* @__PURE__ */ ((e) => (e.SELF = "self", e.OTHERS = "others", e.SIMPLE = "simple", e.DISABLED = "disabled", e))(Pn || {});
const Zc = ({
  active: e,
  data: t,
  direction: n = "row",
  titleDirection: r = "row",
  border: o = !0,
  titleDeputy: i,
  onChange: a,
  onDropChange: c,
  dropProps: l,
  itemStyle: d,
  itemClassName: u = "",
  style: h,
  className: p = "",
  scrollToView: f = !1
}) => {
  const k = q(null), v = q(null);
  return Z(() => {
    f && e && v.current && v.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [e, f, n]), /* @__PURE__ */ s(
    "div",
    {
      ref: k,
      className: `land-menu ${p} ${n === "column" ? "column" : ""} ${o ? "borderBottom" : ""} ${f ? "scroll-to-view" : ""}`,
      style: h,
      children: t == null ? void 0 : t.map((y, g) => /* @__PURE__ */ m(
        "div",
        {
          ref: e === y.key ? v : null,
          className: `land-menu-item ${y.clickType === Pn.SIMPLE ? "simple" : ""} ${y.clickType === Pn.DISABLED || y.disabled ? "disabled" : ""}`,
          style: d,
          children: [
            /* @__PURE__ */ m(
              "div",
              {
                role: "button",
                className: `land-menu-link ${n === "column" ? "column" : ""} ${r === "column" && !y.titleDeputy ? "titleColumn" : ""} ${e === y.key && !(y.titleDeputy || i) ? "active" : ""} ${y.titleDeputy || i ? "title-deputy" : ""} ${u}`,
                onClick: (L) => {
                  y.titleDeputy || i || y.clickType === Pn.DISABLED || y.disabled || (L.stopPropagation(), a == null || a(y));
                },
                children: [
                  typeof y.icon == "string" ? /* @__PURE__ */ s("img", { src: y.icon, className: "land-menu-icon" }) : y.icon,
                  /* @__PURE__ */ m("div", { className: "land-menu-title-wrap", children: [
                    /* @__PURE__ */ s("p", { className: `land-menu-title ${y.titleDeputy || i ? "title-deputy" : ""}`, "data-title": y.label, children: y.label }),
                    y.subText && /* @__PURE__ */ s("span", { className: "land-menu-sub-title", children: y.subText })
                  ] }),
                  y.isNew && /* @__PURE__ */ s("i", { className: "land-menu-new", children: typeof y.isNew == "boolean" ? "NEW" : y.isNew })
                ]
              },
              y.key
            ),
            y.dropData && /* @__PURE__ */ s("div", { className: `land-menu-drop-wrap ${y.open ? "open" : ""}`, children: /* @__PURE__ */ s("div", { className: "land-menu-drop", children: /* @__PURE__ */ s(
              Zc,
              {
                data: y.dropData,
                onChange: (L) => c == null ? void 0 : c(L, y),
                direction: "column",
                titleDirection: r,
                scrollToView: f,
                ...l
              }
            ) }) })
          ]
        },
        y.key ?? g
      ))
    }
  );
}, Mm = ({
  height: e = "64px",
  fixed: t,
  filter: n = 0,
  borderBottom: r = !0,
  applications: o,
  logo: i,
  name: a,
  onLogoClick: c,
  divider: l = !0,
  align: d,
  menuProps: u,
  rightComponent: h,
  mobileSize: p = 767,
  style: f,
  className: k = ""
}) => {
  var g;
  const [v, y] = E(!1);
  return Z(() => {
    const L = () => y(!1), w = () => y(!1);
    return window.addEventListener("scroll", L, { passive: !0 }), window.addEventListener("resize", w, { passive: !0 }), () => {
      window.removeEventListener("scroll", L), window.removeEventListener("resize", w);
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
              onClick: (L) => L.stopPropagation(),
              children: [
                /* @__PURE__ */ s(Y, { name: "application" }),
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
              justifyContent: d
            },
            children: u && /* @__PURE__ */ s(
              Zc,
              {
                border: !1,
                ...u,
                onChange: (L) => {
                  var w;
                  (w = u.onChange) == null || w.call(u, L), y(!1);
                },
                onDropChange: (L, w) => {
                  var b;
                  (b = u.onDropChange) == null || b.call(u, L, w), y(!1);
                }
              }
            )
          }
        ),
        h && /* @__PURE__ */ s("div", { className: "land-header-right", children: h }),
        u && u.data && ((g = u.data) == null ? void 0 : g.length) > 0 && /* @__PURE__ */ s(
          he,
          {
            className: "land-mobile-toggle-button",
            icon: /* @__PURE__ */ s(Y, { name: "more-line" }),
            type: "text",
            onClick: () => y(!v)
          }
        )
      ]
    }
  );
}, I0 = ({
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
), H0 = ({
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
  const d = q(null), [u, h] = E("loading"), [p, f] = E(e), [k, v] = E("auto"), [y, g] = E(!1), [L, w] = E("idle");
  Z(() => {
    h("loading"), f(e), g(!1), w("idle");
  }, [e]);
  const b = () => {
    y ? w("success") : h("success"), setTimeout(() => {
      y ? w("success") : h("success");
    }, 150), d.current && v(`${d.current.width / d.current.height}`);
  }, V = () => {
    y ? w("error") : (h("error"), l && !y ? (g(!0), w("loading"), f(l)) : c && typeof c == "string" && !y && (g(!0), w("loading"), f(c)));
  };
  Z(() => {
    const S = d.current;
    if (!S) {
      h("idle"), setTimeout(() => {
        h("idle");
      }, 300);
      return;
    }
    return S.complete && (y ? w("success") : h("success"), setTimeout(() => {
      y ? w("success") : h("success");
    }, 150), v(`${d.current.width / d.current.height}`)), S.addEventListener("load", b), S.addEventListener("error", V), () => {
      S == null || S.removeEventListener("load", b), S == null || S.removeEventListener("error", V);
    };
  }, [p, y]);
  const M = n || (u === "success" || L === "success" ? k : "1"), x = () => c && typeof c != "string" && u === "error" && (L === "error" || !l) ? c : u === "error" && (L === "error" || !l) && (!c || typeof c == "string") ? /* @__PURE__ */ s(Pc, { type: "error", title: "加载失败", direction: "column", className: "land-image-alert", noBg: !0 }) : null, C = u === "loading" || y && L === "loading", $ = p && (u === "success" || L === "success" || C);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-image ${C ? "loading" : u === "success" || L === "success" ? "success" : "error"} ${r ?? ""}`,
      style: {
        aspectRatio: M,
        ...a
      },
      children: [
        C && /* @__PURE__ */ s(
          I0,
          {
            width: "100%",
            height: "100%",
            radius: "var(--radius-m)",
            className: "land-image-skeleton"
          }
        ),
        x(),
        $ && /* @__PURE__ */ s(
          "img",
          {
            ref: d,
            alt: t,
            src: p,
            className: `land-image-img ${u === "success" || L === "success" ? "loaded" : ""} ${o}`,
            style: {
              opacity: u === "success" || L === "success" ? 1 : 0,
              ...i
            }
          }
        )
      ]
    }
  );
}, Cm = ({ children: e, style: t, className: n }) => /* @__PURE__ */ s("div", { className: `land-layout ${n}`, style: t, children: e });
var Ve = function() {
  return Ve = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ve.apply(this, arguments);
};
function $t(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function R0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var E0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, D0 = /* @__PURE__ */ R0(
  function(e) {
    return E0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ce = "-ms-", qt = "-moz-", ie = "-webkit-", Yc = "comm", Wn = "rule", qo = "decl", B0 = "@import", _c = "@keyframes", O0 = "@layer", Uc = Math.abs, Jo = String.fromCharCode, eo = Object.assign;
function F0(e, t) {
  return ke(e, 0) ^ 45 ? (((t << 2 ^ ke(e, 0)) << 2 ^ ke(e, 1)) << 2 ^ ke(e, 2)) << 2 ^ ke(e, 3) : 0;
}
function zc(e) {
  return e.trim();
}
function _e(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ne(e, t, n) {
  return e.replace(t, n);
}
function In(e, t, n) {
  return e.indexOf(t, n);
}
function ke(e, t) {
  return e.charCodeAt(t) | 0;
}
function Tt(e, t, n) {
  return e.slice(t, n);
}
function Oe(e) {
  return e.length;
}
function Xc(e) {
  return e.length;
}
function Ut(e, t) {
  return t.push(e), e;
}
function Z0(e, t) {
  return e.map(t).join("");
}
function Pi(e, t) {
  return e.filter(function(n) {
    return !_e(n, t);
  });
}
var er = 1, jt = 1, Kc = 0, Ae = 0, ge = 0, Ft = "";
function tr(e, t, n, r, o, i, a, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: er, column: jt, length: a, return: "", siblings: c };
}
function Je(e, t) {
  return eo(tr("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function kt(e) {
  for (; e.root; )
    e = Je(e.root, { children: [e] });
  Ut(e, e.siblings);
}
function Y0() {
  return ge;
}
function _0() {
  return ge = Ae > 0 ? ke(Ft, --Ae) : 0, jt--, ge === 10 && (jt = 1, er--), ge;
}
function Ee() {
  return ge = Ae < Kc ? ke(Ft, Ae++) : 0, jt++, ge === 10 && (jt = 1, er++), ge;
}
function ut() {
  return ke(Ft, Ae);
}
function Hn() {
  return Ae;
}
function nr(e, t) {
  return Tt(Ft, e, t);
}
function to(e) {
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
function U0(e) {
  return er = jt = 1, Kc = Oe(Ft = e), Ae = 0, [];
}
function z0(e) {
  return Ft = "", e;
}
function Tr(e) {
  return zc(nr(Ae - 1, no(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function X0(e) {
  for (; (ge = ut()) && ge < 33; )
    Ee();
  return to(e) > 2 || to(ge) > 3 ? "" : " ";
}
function K0(e, t) {
  for (; --t && Ee() && !(ge < 48 || ge > 102 || ge > 57 && ge < 65 || ge > 70 && ge < 97); )
    ;
  return nr(e, Hn() + (t < 6 && ut() == 32 && Ee() == 32));
}
function no(e) {
  for (; Ee(); )
    switch (ge) {
      case e:
        return Ae;
      case 34:
      case 39:
        e !== 34 && e !== 39 && no(ge);
        break;
      case 40:
        e === 41 && no(e);
        break;
      case 92:
        Ee();
        break;
    }
  return Ae;
}
function G0(e, t) {
  for (; Ee() && e + ge !== 57; )
    if (e + ge === 84 && ut() === 47)
      break;
  return "/*" + nr(t, Ae - 1) + "*" + Jo(e === 47 ? e : Ee());
}
function q0(e) {
  for (; !to(ut()); )
    Ee();
  return nr(e, Ae);
}
function J0(e) {
  return z0(Rn("", null, null, null, [""], e = U0(e), 0, [0], e));
}
function Rn(e, t, n, r, o, i, a, c, l) {
  for (var d = 0, u = 0, h = a, p = 0, f = 0, k = 0, v = 1, y = 1, g = 1, L = 0, w = "", b = o, V = i, M = r, x = w; y; )
    switch (k = L, L = Ee()) {
      case 40:
        if (k != 108 && ke(x, h - 1) == 58) {
          In(x += ne(Tr(L), "&", "&\f"), "&\f", Uc(d ? c[d - 1] : 0)) != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Tr(L);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += X0(k);
        break;
      case 92:
        x += K0(Hn() - 1, 7);
        continue;
      case 47:
        switch (ut()) {
          case 42:
          case 47:
            Ut(Q0(G0(Ee(), Hn()), t, n, l), l);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * v:
        c[d++] = Oe(x) * g;
      case 125 * v:
      case 59:
      case 0:
        switch (L) {
          case 0:
          case 125:
            y = 0;
          case 59 + u:
            g == -1 && (x = ne(x, /\f/g, "")), f > 0 && Oe(x) - h && Ut(f > 32 ? Hi(x + ";", r, n, h - 1, l) : Hi(ne(x, " ", "") + ";", r, n, h - 2, l), l);
            break;
          case 59:
            x += ";";
          default:
            if (Ut(M = Ii(x, t, n, d, u, o, c, w, b = [], V = [], h, i), i), L === 123)
              if (u === 0)
                Rn(x, t, M, M, b, i, h, c, V);
              else
                switch (p === 99 && ke(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Rn(e, M, M, r && Ut(Ii(e, M, M, 0, 0, o, c, w, o, b = [], h, V), V), o, V, h, c, r ? b : V);
                    break;
                  default:
                    Rn(x, M, M, M, [""], V, 0, c, V);
                }
        }
        d = u = f = 0, v = g = 1, w = x = "", h = a;
        break;
      case 58:
        h = 1 + Oe(x), f = k;
      default:
        if (v < 1) {
          if (L == 123)
            --v;
          else if (L == 125 && v++ == 0 && _0() == 125)
            continue;
        }
        switch (x += Jo(L), L * v) {
          case 38:
            g = u > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            c[d++] = (Oe(x) - 1) * g, g = 1;
            break;
          case 64:
            ut() === 45 && (x += Tr(Ee())), p = ut(), u = h = Oe(w = x += q0(Hn())), L++;
            break;
          case 45:
            k === 45 && Oe(x) == 2 && (v = 0);
        }
    }
  return i;
}
function Ii(e, t, n, r, o, i, a, c, l, d, u, h) {
  for (var p = o - 1, f = o === 0 ? i : [""], k = Xc(f), v = 0, y = 0, g = 0; v < r; ++v)
    for (var L = 0, w = Tt(e, p + 1, p = Uc(y = a[v])), b = e; L < k; ++L)
      (b = zc(y > 0 ? f[L] + " " + w : ne(w, /&\f/g, f[L]))) && (l[g++] = b);
  return tr(e, t, n, o === 0 ? Wn : c, l, d, u, h);
}
function Q0(e, t, n, r) {
  return tr(e, t, n, Yc, Jo(Y0()), Tt(e, 2, -2), 0, r);
}
function Hi(e, t, n, r, o) {
  return tr(e, t, n, qo, Tt(e, 0, r), Tt(e, r + 1, -1), r, o);
}
function Gc(e, t, n) {
  switch (F0(e, t)) {
    case 5103:
      return ie + "print-" + e + e;
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
      return ie + e + e;
    case 4789:
      return qt + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ie + e + qt + e + ce + e + e;
    case 5936:
      switch (ke(e, t + 11)) {
        case 114:
          return ie + e + ce + ne(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ie + e + ce + ne(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ie + e + ce + ne(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ie + e + ce + e + e;
    case 6165:
      return ie + e + ce + "flex-" + e + e;
    case 5187:
      return ie + e + ne(e, /(\w+).+(:[^]+)/, ie + "box-$1$2" + ce + "flex-$1$2") + e;
    case 5443:
      return ie + e + ce + "flex-item-" + ne(e, /flex-|-self/g, "") + (_e(e, /flex-|baseline/) ? "" : ce + "grid-row-" + ne(e, /flex-|-self/g, "")) + e;
    case 4675:
      return ie + e + ce + "flex-line-pack" + ne(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return ie + e + ce + ne(e, "shrink", "negative") + e;
    case 5292:
      return ie + e + ce + ne(e, "basis", "preferred-size") + e;
    case 6060:
      return ie + "box-" + ne(e, "-grow", "") + ie + e + ce + ne(e, "grow", "positive") + e;
    case 4554:
      return ie + ne(e, /([^-])(transform)/g, "$1" + ie + "$2") + e;
    case 6187:
      return ne(ne(ne(e, /(zoom-|grab)/, ie + "$1"), /(image-set)/, ie + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ne(e, /(image-set\([^]*)/, ie + "$1$`$1");
    case 4968:
      return ne(ne(e, /(.+:)(flex-)?(.*)/, ie + "box-pack:$3" + ce + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ie + e + e;
    case 4200:
      if (!_e(e, /flex-|baseline/)) return ce + "grid-column-align" + Tt(e, t) + e;
      break;
    case 2592:
    case 3360:
      return ce + ne(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, _e(r.props, /grid-\w+-end/);
      }) ? ~In(e + (n = n[t].value), "span", 0) ? e : ce + ne(e, "-start", "") + e + ce + "grid-row-span:" + (~In(n, "span", 0) ? _e(n, /\d+/) : +_e(n, /\d+/) - +_e(e, /\d+/)) + ";" : ce + ne(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return _e(r.props, /grid-\w+-start/);
      }) ? e : ce + ne(ne(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ne(e, /(.+)-inline(.+)/, ie + "$1$2") + e;
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
      if (Oe(e) - 1 - t > 6)
        switch (ke(e, t + 1)) {
          case 109:
            if (ke(e, t + 4) !== 45)
              break;
          case 102:
            return ne(e, /(.+:)(.+)-([^]+)/, "$1" + ie + "$2-$3$1" + qt + (ke(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~In(e, "stretch", 0) ? Gc(ne(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return ne(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, c, l, d) {
        return ce + o + ":" + i + d + (a ? ce + o + "-span:" + (c ? l : +l - +i) + d : "") + e;
      });
    case 4949:
      if (ke(e, t + 6) === 121)
        return ne(e, ":", ":" + ie) + e;
      break;
    case 6444:
      switch (ke(e, ke(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return ne(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ie + (ke(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ie + "$2$3$1" + ce + "$2box$3") + e;
        case 100:
          return ne(e, ":", ":" + ce) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ne(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Un(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function W0(e, t, n, r) {
  switch (e.type) {
    case O0:
      if (e.children.length) break;
    case B0:
    case qo:
      return e.return = e.return || e.value;
    case Yc:
      return "";
    case _c:
      return e.return = e.value + "{" + Un(e.children, r) + "}";
    case Wn:
      if (!Oe(e.value = e.props.join(","))) return "";
  }
  return Oe(n = Un(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function e3(e) {
  var t = Xc(e);
  return function(n, r, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, i) || "";
    return a;
  };
}
function t3(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function n3(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case qo:
        e.return = Gc(e.value, e.length, n);
        return;
      case _c:
        return Un([Je(e, { value: ne(e.value, "@", "@" + ie) })], r);
      case Wn:
        if (e.length)
          return Z0(n = e.props, function(o) {
            switch (_e(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                kt(Je(e, { props: [ne(o, /:(read-\w+)/, ":" + qt + "$1")] })), kt(Je(e, { props: [o] })), eo(e, { props: Pi(n, r) });
                break;
              case "::placeholder":
                kt(Je(e, { props: [ne(o, /:(plac\w+)/, ":" + ie + "input-$1")] })), kt(Je(e, { props: [ne(o, /:(plac\w+)/, ":" + qt + "$1")] })), kt(Je(e, { props: [ne(o, /:(plac\w+)/, ce + "input-$1")] })), kt(Je(e, { props: [o] })), eo(e, { props: Pi(n, r) });
                break;
            }
            return "";
          });
    }
}
var r3 = {
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
}, pt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", qc = "active", Jc = "data-styled-version", rr = "6.1.18", Qo = `/*!sc*/
`, zn = typeof window < "u" && typeof document < "u", o3 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ri = /invalid hook call/i, bn = /* @__PURE__ */ new Set(), s3 = function(e, t) {
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
        Ri.test(a) ? (i = !1, bn.delete(r)) : o.apply(void 0, $t([a], c, !1));
      }, q(), i && !bn.has(r) && (console.warn(r), bn.add(r));
    } catch (a) {
      Ri.test(a.message) && bn.delete(r);
    } finally {
      console.error = o;
    }
  }
}, or = Object.freeze([]), At = Object.freeze({});
function i3(e, t, n) {
  return n === void 0 && (n = At), e.theme !== n.theme && e.theme || t || n.theme;
}
var ro = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), a3 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, c3 = /(^-|-$)/g;
function Ei(e) {
  return e.replace(a3, "-").replace(c3, "");
}
var l3 = /(a)(d)/gi, Nn = 52, Di = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function oo(e) {
  var t, n = "";
  for (t = Math.abs(e); t > Nn; t = t / Nn | 0) n = Di(t % Nn) + n;
  return (Di(t % Nn) + n).replace(l3, "$1-$2");
}
var jr, Qc = 5381, st = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Wc = function(e) {
  return st(Qc, e);
};
function d3(e) {
  return oo(Wc(e) >>> 0);
}
function el(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ar(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var tl = typeof Symbol == "function" && Symbol.for, nl = tl ? Symbol.for("react.memo") : 60115, u3 = tl ? Symbol.for("react.forward_ref") : 60112, h3 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, p3 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, rl = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, f3 = ((jr = {})[u3] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, jr[nl] = rl, jr);
function Bi(e) {
  return ("type" in (t = e) && t.type.$$typeof) === nl ? rl : "$$typeof" in e ? f3[e.$$typeof] : h3;
  var t;
}
var m3 = Object.defineProperty, g3 = Object.getOwnPropertyNames, Oi = Object.getOwnPropertySymbols, v3 = Object.getOwnPropertyDescriptor, k3 = Object.getPrototypeOf, Fi = Object.prototype;
function ol(e, t, n) {
  if (typeof t != "string") {
    if (Fi) {
      var r = k3(t);
      r && r !== Fi && ol(e, r, n);
    }
    var o = g3(t);
    Oi && (o = o.concat(Oi(t)));
    for (var i = Bi(e), a = Bi(t), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!(l in p3 || n && n[l] || a && l in a || i && l in i)) {
        var d = v3(t, l);
        try {
          m3(e, l, d);
        } catch {
        }
      }
    }
  }
  return e;
}
function Pt(e) {
  return typeof e == "function";
}
function Wo(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ct(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Zi(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function It(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function so(e, t, n) {
  if (n === void 0 && (n = !1), !n && !It(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = so(e[r], t[r]);
  else if (It(t)) for (var r in t) e[r] = so(e[r], t[r]);
  return e;
}
function es(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var L3 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function w3() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function Zt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(w3.apply(void 0, $t([L3[e]], t, !1)).trim());
}
var y3 = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Zt(16, "".concat(t));
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(Qo);
    return n;
  }, e;
}(), M3 = 1 << 30, En = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map(), Dn = 1, Vn = function(e) {
  if (En.has(e)) return En.get(e);
  for (; Xn.has(Dn); ) Dn++;
  var t = Dn++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > M3)) throw Zt(16, "".concat(t));
  return En.set(e, t), Xn.set(t, e), t;
}, C3 = function(e, t) {
  Dn = t + 1, En.set(e, t), Xn.set(t, e);
}, x3 = "style[".concat(pt, "][").concat(Jc, '="').concat(rr, '"]'), b3 = new RegExp("^".concat(pt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), N3 = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, V3 = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Qo), o = [], i = 0, a = r.length; i < a; i++) {
    var c = r[i].trim();
    if (c) {
      var l = c.match(b3);
      if (l) {
        var d = 0 | parseInt(l[1], 10), u = l[2];
        d !== 0 && (C3(u, d), N3(e, u, l[3]), e.getTag().insertRules(d, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, Yi = function(e) {
  for (var t = document.querySelectorAll(x3), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(pt) !== qc && (V3(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function S3() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var sl = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var l = Array.from(c.querySelectorAll("style[".concat(pt, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(pt, qc), r.setAttribute(Jc, rr);
  var a = S3();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, $3 = function() {
  function e(t) {
    this.element = sl(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
      }
      throw Zt(17);
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
}(), T3 = function() {
  function e(t) {
    this.element = sl(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), j3 = function() {
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
}(), _i = zn, A3 = { isServer: !zn, useCSSOMInjection: !o3 }, il = function() {
  function e(t, n, r) {
    t === void 0 && (t = At), n === void 0 && (n = {});
    var o = this;
    this.options = Ve(Ve({}, A3), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && zn && _i && (_i = !1, Yi(this)), es(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, l = "", d = function(h) {
          var p = function(g) {
            return Xn.get(g);
          }(h);
          if (p === void 0) return "continue";
          var f = i.names.get(p), k = a.getGroup(h);
          if (f === void 0 || !f.size || k.length === 0) return "continue";
          var v = "".concat(pt, ".g").concat(h, '[id="').concat(p, '"]'), y = "";
          f !== void 0 && f.forEach(function(g) {
            g.length > 0 && (y += "".concat(g, ","));
          }), l += "".concat(k).concat(v, '{content:"').concat(y, '"}').concat(Qo);
        }, u = 0; u < c; u++) d(u);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Vn(t);
  }, e.prototype.rehydrate = function() {
    !this.server && zn && Yi(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ve(Ve({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new j3(o) : r ? new $3(o) : new T3(o);
    }(this.options), new y3(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (Vn(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(Vn(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Vn(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), P3 = /&/g, I3 = /^\s*\/\/.*$/gm;
function al(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = al(n.children, t)), n;
  });
}
function H3(e) {
  var t, n, r, o = At, i = o.options, a = i === void 0 ? At : i, c = o.plugins, l = c === void 0 ? or : c, d = function(p, f, k) {
    return k.startsWith(n) && k.endsWith(n) && k.replaceAll(n, "").length > 0 ? ".".concat(t) : p;
  }, u = l.slice();
  u.push(function(p) {
    p.type === Wn && p.value.includes("&") && (p.props[0] = p.props[0].replace(P3, n).replace(r, d));
  }), a.prefix && u.push(n3), u.push(W0);
  var h = function(p, f, k, v) {
    f === void 0 && (f = ""), k === void 0 && (k = ""), v === void 0 && (v = "&"), t = v, n = f, r = new RegExp("\\".concat(n, "\\b"), "g");
    var y = p.replace(I3, ""), g = J0(k || f ? "".concat(k, " ").concat(f, " { ").concat(y, " }") : y);
    a.namespace && (g = al(g, a.namespace));
    var L = [];
    return Un(g, e3(u.concat(t3(function(w) {
      return L.push(w);
    })))), L;
  };
  return h.hash = l.length ? l.reduce(function(p, f) {
    return f.name || Zt(15), st(p, f.name);
  }, Qc).toString() : "", h;
}
var R3 = new il(), io = H3(), cl = je.createContext({ shouldForwardProp: void 0, styleSheet: R3, stylis: io });
cl.Consumer;
je.createContext(void 0);
function Ui() {
  return ye(cl);
}
var zi = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = io);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, es(this, function() {
      throw Zt(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = io), this.name + t.hash;
  }, e;
}(), E3 = function(e) {
  return e >= "A" && e <= "Z";
};
function Xi(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    E3(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var ll = function(e) {
  return e == null || e === !1 || e === "";
}, dl = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !ll(i) && (Array.isArray(i) && i.isCss || Pt(i) ? r.push("".concat(Xi(o), ":"), i, ";") : It(i) ? r.push.apply(r, $t($t(["".concat(o, " {")], dl(i), !1), ["}"], !1)) : r.push("".concat(Xi(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in r3 || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function ht(e, t, n, r) {
  if (ll(e)) return [];
  if (Wo(e)) return [".".concat(e.styledComponentId)];
  if (Pt(e)) {
    if (!Pt(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof zi || It(o) || o === null || console.error("".concat(el(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ht(o, t, n, r);
  }
  var i;
  return e instanceof zi ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : It(e) ? dl(e) : Array.isArray(e) ? Array.prototype.concat.apply(or, e.map(function(a) {
    return ht(a, t, n, r);
  })) : [e.toString()];
}
function D3(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Pt(n) && !Wo(n)) return !1;
  }
  return !0;
}
var B3 = Wc(rr), O3 = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && D3(t), this.componentId = n, this.baseHash = st(B3, n), this.baseStyle = r, il.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = ct(o, this.staticRulesId);
    else {
      var i = Zi(ht(this.rules, t, n, r)), a = oo(st(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var c = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, c);
      }
      o = ct(o, a), this.staticRulesId = a;
    }
    else {
      for (var l = st(this.baseHash, r.hash), d = "", u = 0; u < this.rules.length; u++) {
        var h = this.rules[u];
        if (typeof h == "string") d += h, process.env.NODE_ENV !== "production" && (l = st(l, h));
        else if (h) {
          var p = Zi(ht(h, t, n, r));
          l = st(l, p + u), d += p;
        }
      }
      if (d) {
        var f = oo(l >>> 0);
        n.hasNameForId(this.componentId, f) || n.insertRules(this.componentId, f, r(d, ".".concat(f), void 0, this.componentId)), o = ct(o, f);
      }
    }
    return o;
  }, e;
}(), ul = je.createContext(void 0);
ul.Consumer;
var Pr = {}, Ki = /* @__PURE__ */ new Set();
function F3(e, t, n) {
  var r = Wo(e), o = e, i = !Ar(e), a = t.attrs, c = a === void 0 ? or : a, l = t.componentId, d = l === void 0 ? function(b, V) {
    var M = typeof b != "string" ? "sc" : Ei(b);
    Pr[M] = (Pr[M] || 0) + 1;
    var x = "".concat(M, "-").concat(d3(rr + M + Pr[M]));
    return V ? "".concat(V, "-").concat(x) : x;
  }(t.displayName, t.parentComponentId) : l, u = t.displayName, h = u === void 0 ? function(b) {
    return Ar(b) ? "styled.".concat(b) : "Styled(".concat(el(b), ")");
  }(e) : u, p = t.displayName && t.componentId ? "".concat(Ei(t.displayName), "-").concat(t.componentId) : t.componentId || d, f = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, k = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var v = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var y = t.shouldForwardProp;
      k = function(b, V) {
        return v(b, V) && y(b, V);
      };
    } else k = v;
  }
  var g = new O3(n, p, r ? o.componentStyle : void 0);
  function L(b, V) {
    return function(M, x, C) {
      var $ = M.attrs, S = M.componentStyle, T = M.defaultProps, N = M.foldedComponentIds, j = M.styledComponentId, A = M.target, I = je.useContext(ul), F = Ui(), B = M.shouldForwardProp || F.shouldForwardProp;
      process.env.NODE_ENV !== "production" && ls(j);
      var z = i3(x, I, T) || At, P = function(_, W, J) {
        for (var Q, te = Ve(Ve({}, W), { className: void 0, theme: J }), oe = 0; oe < _.length; oe += 1) {
          var ae = Pt(Q = _[oe]) ? Q(te) : Q;
          for (var Me in ae) te[Me] = Me === "className" ? ct(te[Me], ae[Me]) : Me === "style" ? Ve(Ve({}, te[Me]), ae[Me]) : ae[Me];
        }
        return W.className && (te.className = ct(te.className, W.className)), te;
      }($, x, z), R = P.as || A, H = {};
      for (var D in P) P[D] === void 0 || D[0] === "$" || D === "as" || D === "theme" && P.theme === z || (D === "forwardedAs" ? H.as = P.forwardedAs : B && !B(D, R) || (H[D] = P[D], B || process.env.NODE_ENV !== "development" || D0(D) || Ki.has(D) || !ro.has(R) || (Ki.add(D), console.warn('styled-components: it looks like an unknown prop "'.concat(D, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var U = function(_, W) {
        var J = Ui(), Q = _.generateAndInjectStyles(W, J.styleSheet, J.stylis);
        return process.env.NODE_ENV !== "production" && ls(Q), Q;
      }(S, P);
      process.env.NODE_ENV !== "production" && M.warnTooManyClasses && M.warnTooManyClasses(U);
      var X = ct(N, j);
      return U && (X += " " + U), P.className && (X += " " + P.className), H[Ar(R) && !ro.has(R) ? "class" : "className"] = X, C && (H.ref = C), ea(R, H);
    }(w, b, V);
  }
  L.displayName = h;
  var w = je.forwardRef(L);
  return w.attrs = f, w.componentStyle = g, w.displayName = h, w.shouldForwardProp = k, w.foldedComponentIds = r ? ct(o.foldedComponentIds, o.styledComponentId) : "", w.styledComponentId = p, w.target = r ? o.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = r ? function(V) {
      for (var M = [], x = 1; x < arguments.length; x++) M[x - 1] = arguments[x];
      for (var C = 0, $ = M; C < $.length; C++) so(V, $[C], !0);
      return V;
    }({}, o.defaultProps, b) : b;
  } }), process.env.NODE_ENV !== "production" && (s3(h, p), w.warnTooManyClasses = /* @__PURE__ */ function(b, V) {
    var M = {}, x = !1;
    return function(C) {
      if (!x && (M[C] = !0, Object.keys(M).length >= 200)) {
        var $ = V ? ' with the id of "'.concat(V, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat($, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), x = !0, M = {};
      }
    };
  }(h, p)), es(w, function() {
    return ".".concat(w.styledComponentId);
  }), i && ol(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function Gi(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var qi = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Z3(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Pt(e) || It(e)) return qi(ht(Gi(or, $t([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? ht(r) : qi(ht(Gi(r, t)));
}
function ao(e, t, n) {
  if (n === void 0 && (n = At), !t) throw Zt(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, Z3.apply(void 0, $t([o], i, !1)));
  };
  return r.attrs = function(o) {
    return ao(e, t, Ve(Ve({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return ao(e, t, Ve(Ve({}, n), o));
  }, r;
}
var hl = function(e) {
  return ao(F3, e);
}, mn = hl;
ro.forEach(function(e) {
  mn[e] = hl(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Sn = "__sc-".concat(pt, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Sn] || (window[Sn] = 0), window[Sn] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Sn] += 1);
const xm = ({
  type: e = "info",
  text: t = "这是一条全局提示",
  simple: n = !1,
  style: r,
  className: o = ""
}) => /* @__PURE__ */ m(
  Y3,
  {
    className: `StyleToastContainer ${o} ${n ? "simple" : ""}`,
    style: {
      ...r
    },
    children: [
      !n && /* @__PURE__ */ m(pe, { children: [
        e === "info" && /* @__PURE__ */ s(Y, { name: "info-fill", size: 20, color: "var(--color-primary-6)" }),
        e === "error" && /* @__PURE__ */ s(Y, { name: "attention-fill", size: 20, color: "var(--color-red-6)" }),
        e === "fail" && /* @__PURE__ */ s(Y, { name: "error-fill", size: 20, color: "var(--color-red-6)" }),
        e === "warn" && /* @__PURE__ */ s(Y, { name: "attention-fill", size: 20, color: "var(--color-orange-6)" }),
        e === "success" && /* @__PURE__ */ s(Y, { name: "check-fill", size: 20, color: "var(--color-green-6)" })
      ] }),
      t
    ]
  }
), Y3 = mn.div`
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
`, Qe = class Qe {
  constructor() {
    gt(this, "container", null);
    gt(this, "messageQueue", /* @__PURE__ */ new Map());
    gt(this, "messageId", 0);
    gt(this, "isDestroyed", !1);
    this.initContainer();
  }
  static getInstance() {
    return Qe.instance || (Qe.instance = new Qe()), Qe.instance;
  }
  /**
   * 检查是否在浏览器环境中
   */
  isBrowser() {
    return typeof window < "u" && typeof document < "u";
  }
  /**
   * 安全地执行 DOM 操作
   */
  safeDOMOperation(t, n) {
    try {
      return this.isBrowser() ? t() : (console.warn("MessagePlugin: 不在浏览器环境中，无法执行 DOM 操作"), n);
    } catch (r) {
      return console.error("MessagePlugin: DOM 操作失败", r), n;
    }
  }
  /**
   * 验证消息选项
   */
  validateOptions(t) {
    return !t || typeof t != "object" ? (console.error("MessagePlugin: 无效的选项参数"), !1) : !t.content || typeof t.content != "string" ? (console.error("MessagePlugin: 消息内容不能为空且必须是字符串"), !1) : t.duration !== void 0 && (typeof t.duration != "number" || t.duration < 0) ? (console.error("MessagePlugin: duration 必须是大于等于 0 的数字"), !1) : t.type && !["success", "error", "warning", "info", "fail"].includes(t.type) ? (console.error("MessagePlugin: 无效的消息类型"), !1) : !0;
  }
  /**
   * 初始化消息容器
   */
  initContainer() {
    this.container || this.isDestroyed || this.safeDOMOperation(() => {
      const t = document.getElementById("message-plugin-container");
      if (t) {
        this.container = t;
        return;
      }
      this.container = document.createElement("div"), this.container.id = "message-plugin-container", this.container.style.cssText = `
        position: fixed;
        top: 80px;
        right: 50%;
        z-index: 9999;
        pointer-events: none;
        transform: translateX(50%);
      `, document.body.appendChild(this.container);
    });
  }
  /**
   * 创建消息元素
   */
  createMessageElement(t) {
    return this.validateOptions(t) ? this.safeDOMOperation(() => {
      const n = `message-${++this.messageId}`, r = document.createElement("div");
      r.id = n, r.className = `message-item ${t.className || ""}`.trim();
      const o = t.simple ? `
      background: var(--color-bg-secondary);
      color: var(--color-text-primary);
      border-radius: var(--radius-s);
      padding: var(--gap-m) var(--gap-l);
      max-width: 400px;
      font-size: var(--font-content-m);
      transition: all 0.3s ease;
      ` : `
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
      `;
      if (r.style.cssText = o, t.style)
        try {
          Object.assign(r.style, t.style);
        } catch (h) {
          console.warn("MessagePlugin: 应用自定义样式失败", h);
        }
      const i = document.createElement("div");
      i.textContent = t.content, i.style.flex = "1";
      const a = document.createElement("div"), c = `
        width: 16px;
        height: 16px;
        background-color: #1890ff;
        border-radius: 50%;
        display: flex;
      `, l = {
        success: "background-color: #52c41a;clipPath:path('M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM11.8174 5.14648C11.6221 4.95123 11.3056 4.95122 11.1104 5.14648L7.06445 9.19238L4.90332 7.03223C4.70806 6.83698 4.39155 6.83697 4.19629 7.03223L3.64648 7.58203C3.45123 7.77729 3.45123 8.0938 3.64648 8.28906L6.1582 10.8008L6.16016 10.8037L6.71094 11.3535C6.90622 11.5485 7.22281 11.5487 7.41797 11.3535L12.3672 6.40332C12.5624 6.20806 12.5624 5.89155 12.3672 5.69629L11.8174 5.14648Z')",
        fail: "background-color: #E63D2E;clipPath:path('M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15ZM4.58165 5.85883C4.40958 5.68921 4.4076 5.41223 4.57723 5.24015L5.1915 4.61702C5.36113 4.44495 5.63816 4.44297 5.81023 4.6126L7.99116 6.76258L10.1411 4.58162C10.3107 4.40955 10.5878 4.40757 10.7598 4.5772L11.383 5.19148C11.555 5.3611 11.557 5.63811 11.3874 5.81018L9.23742 7.99112L11.4184 10.1411C11.5904 10.3107 11.5924 10.5877 11.4228 10.7598L10.8085 11.3829C10.6389 11.555 10.3619 11.557 10.1898 11.3873L8.00884 9.23738L5.85887 11.4183C5.68926 11.5904 5.41223 11.5924 5.24018 11.4227L4.61705 10.8085C4.44498 10.6388 4.44299 10.3618 4.61263 10.1898L6.76258 8.00884L4.58165 5.85883Z')",
        warning: "background-color: #FA8E00;clipPath: path('M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15ZM7.5625 3.625C7.32087 3.625 7.125 3.82088 7.125 4.0625V8.875C7.125 9.11663 7.32087 9.3125 7.5625 9.3125H8.4375C8.67913 9.3125 8.875 9.11663 8.875 8.875V4.0625C8.875 3.82088 8.67913 3.625 8.4375 3.625H7.5625ZM7.5625 10.625C7.32087 10.625 7.125 10.8209 7.125 11.0625V11.9375C7.125 12.1791 7.32087 12.375 7.5625 12.375H8.4375C8.67913 12.375 8.875 12.1791 8.875 11.9375V11.0625C8.875 10.8209 8.67913 10.625 8.4375 10.625H7.5625Z')",
        error: "background-color: #E63D2E;clipPath: path('M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15ZM7.5625 3.625C7.32087 3.625 7.125 3.82088 7.125 4.0625V8.875C7.125 9.11663 7.32087 9.3125 7.5625 9.3125H8.4375C8.67913 9.3125 8.875 9.11663 8.875 8.875V4.0625C8.875 3.82088 8.67913 3.625 8.4375 3.625H7.5625ZM7.5625 10.625C7.32087 10.625 7.125 10.8209 7.125 11.0625V11.9375C7.125 12.1791 7.32087 12.375 7.5625 12.375H8.4375C8.67913 12.375 8.875 12.1791 8.875 11.9375V11.0625C8.875 10.8209 8.67913 10.625 8.4375 10.625H7.5625Z')",
        info: "background-color: #1890ff;clipPath:path('M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15ZM7.5625 12.375C7.32087 12.375 7.125 12.1791 7.125 11.9375V7.125C7.125 6.88337 7.32087 6.6875 7.5625 6.6875H8.4375C8.67913 6.6875 8.875 6.88337 8.875 7.125V11.9375C8.875 12.1791 8.67913 12.375 8.4375 12.375H7.5625ZM7.5625 5.375C7.32087 5.375 7.125 5.17913 7.125 4.9375V4.0625C7.125 3.82088 7.32087 3.625 7.5625 3.625H8.4375C8.67913 3.625 8.875 3.82088 8.875 4.0625V4.9375C8.875 5.17913 8.67913 5.375 8.4375 5.375H7.5625Z')"
      }, d = t.type || "info", u = l[d] || l.info;
      if (a.style.cssText = c + u, t.simple || r.appendChild(a), r.appendChild(i), t.showClose) {
        const h = document.createElement("span");
        h.innerHTML = "×", h.style.cssText = `
          margin-left: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          opacity: 0.6;
          transition: opacity 0.2s;
        `, h.onmouseenter = () => h.style.opacity = "1", h.onmouseleave = () => h.style.opacity = "0.6", h.onclick = () => this.close(n), r.appendChild(h);
      }
      return this.messageQueue.set(n, r), r;
    }, null) : null;
  }
  /**
   * 显示消息
   */
  show(t) {
    if (this.isDestroyed)
      return console.warn("MessagePlugin: 插件已销毁，无法显示消息"), this.createDummyInstance();
    if (!this.validateOptions(t))
      return this.createDummyInstance();
    this.container || this.initContainer();
    const n = this.createMessageElement(t);
    if (!n)
      return this.createDummyInstance();
    this.safeDOMOperation(() => {
      this.container && this.container.appendChild(n);
    }), this.safeDOMOperation(() => {
      n.style.transform = "translateY(-100%)", n.style.opacity = "0", requestAnimationFrame(() => {
        this.safeDOMOperation(() => {
          n.style.transform = "translateX(0)", n.style.opacity = "1";
        });
      });
    });
    const r = n.id, o = {
      close: () => this.close(r),
      update: (i) => this.update(r, i)
    };
    if (t.duration !== 0) {
      const i = t.duration || 2e3;
      setTimeout(() => {
        var a;
        this.close(r);
        try {
          (a = t.onClose) == null || a.call(t);
        } catch (c) {
          console.error("MessagePlugin: onClose 回调执行失败", c);
        }
      }, i);
    }
    return o;
  }
  /**
   * 创建虚拟实例（用于错误情况）
   */
  createDummyInstance() {
    return {
      close: () => {
      },
      update: () => {
      }
    };
  }
  /**
   * 关闭指定消息
   */
  close(t) {
    if (!t || typeof t != "string") {
      console.warn("MessagePlugin: 无效的消息ID");
      return;
    }
    const n = this.messageQueue.get(t);
    n && (this.safeDOMOperation(() => {
      n.style.transform = "translateY(-100%)", n.style.opacity = "0";
    }), setTimeout(() => {
      this.safeDOMOperation(() => {
        n.parentNode && n.parentNode.removeChild(n), this.messageQueue.delete(t);
      });
    }, 300));
  }
  /**
   * 更新消息内容
   */
  update(t, n) {
    if (!t || typeof t != "string") {
      console.warn("MessagePlugin: 无效的消息ID");
      return;
    }
    if (!n || typeof n != "object") {
      console.warn("MessagePlugin: 无效的更新选项");
      return;
    }
    const r = this.messageQueue.get(t);
    r && this.safeDOMOperation(() => {
      if (n.content) {
        const o = r.querySelector("div");
        o && (o.textContent = n.content);
      }
      if (n.style)
        try {
          Object.assign(r.style, n.style);
        } catch (o) {
          console.warn("MessagePlugin: 更新样式失败", o);
        }
    });
  }
  /**
   * 关闭所有消息
   */
  closeAll() {
    if (this.isDestroyed) return;
    Array.from(this.messageQueue.keys()).forEach((n) => {
      this.close(n);
    });
  }
  /**
   * 成功消息
   */
  success(t, n) {
    return !t || typeof t != "string" ? (console.error("MessagePlugin: 消息内容不能为空"), this.createDummyInstance()) : this.show({ content: t, type: "success", ...n });
  }
  /**
   * 错误消息
   */
  error(t, n) {
    return !t || typeof t != "string" ? (console.error("MessagePlugin: 消息内容不能为空"), this.createDummyInstance()) : this.show({ content: t, type: "error", ...n });
  }
  /**
   * 失败消息
   */
  fail(t, n) {
    return !t || typeof t != "string" ? (console.error("MessagePlugin: 消息内容不能为空"), this.createDummyInstance()) : this.show({ content: t, type: "fail", ...n });
  }
  /**
   * 警告消息
   */
  warning(t, n) {
    return !t || typeof t != "string" ? (console.error("MessagePlugin: 消息内容不能为空"), this.createDummyInstance()) : this.show({ content: t, type: "warning", ...n });
  }
  /**
   * 信息消息
   */
  info(t, n) {
    return !t || typeof t != "string" ? (console.error("MessagePlugin: 消息内容不能为空"), this.createDummyInstance()) : this.show({ content: t, type: "info", ...n });
  }
  /**
   * 销毁插件
   */
  destroy() {
    this.isDestroyed || (this.isDestroyed = !0, this.closeAll(), this.safeDOMOperation(() => {
      this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container);
    }), this.container = null, this.messageQueue.clear(), Qe.instance = void 0);
  }
};
gt(Qe, "instance");
let co = Qe;
const Ge = co.getInstance(), bm = {
  show: (e) => {
    try {
      return Ge.show(e);
    } catch (t) {
      return console.error("MessagePlugin: show 方法执行失败", t), { close: () => {
      }, update: () => {
      } };
    }
  },
  success: (e, t) => {
    try {
      return Ge.success(e, t);
    } catch (n) {
      return console.error("MessagePlugin: success 方法执行失败", n), { close: () => {
      }, update: () => {
      } };
    }
  },
  error: (e, t) => {
    try {
      return Ge.error(e, t);
    } catch (n) {
      return console.error("MessagePlugin: error 方法执行失败", n), { close: () => {
      }, update: () => {
      } };
    }
  },
  fail: (e, t) => {
    try {
      return Ge.fail(e, t);
    } catch (n) {
      return console.error("MessagePlugin: fail 方法执行失败", n), { close: () => {
      }, update: () => {
      } };
    }
  },
  warning: (e, t) => {
    try {
      return Ge.warning(e, t);
    } catch (n) {
      return console.error("MessagePlugin: warning 方法执行失败", n), { close: () => {
      }, update: () => {
      } };
    }
  },
  info: (e, t) => {
    try {
      return Ge.info(e, t);
    } catch (n) {
      return console.error("MessagePlugin: info 方法执行失败", n), { close: () => {
      }, update: () => {
      } };
    }
  },
  closeAll: () => {
    try {
      Ge.closeAll();
    } catch (e) {
      console.error("MessagePlugin: closeAll 方法执行失败", e);
    }
  },
  destroy: () => {
    try {
      Ge.destroy();
    } catch (e) {
      console.error("MessagePlugin: destroy 方法执行失败", e);
    }
  }
}, Nm = ({
  current: e = 1,
  pageSize: t = 1,
  total: n = 1,
  showTotal: r = !1,
  showInput: o = !1,
  onChange: i,
  style: a,
  className: c = ""
}) => {
  var b, V;
  const [l, d] = E(e);
  Z(() => {
    d(e);
  }, [e]);
  const { pageData: u, curStart: h, isStartPreOut: p, isStartNextOut: f } = K(() => {
    const M = t;
    let x = 2;
    l > M + 1 && (x = Math.max(2, l - Math.floor(M / 2))), x + M > n && (x = Math.max(2, n - M + 1));
    const C = Array.from({ length: n }).map((T, N) => ({ id: N + 1 })).filter((T) => T.id > 1 && T.id < n).filter((T) => T.id >= x && T.id < x + M), $ = x <= M * 2, S = n - x < M * 2;
    return { pageData: C, curStart: x, isStartPreOut: $, isStartNextOut: S };
  }, [n, t, l]), k = O((M) => {
    M >= 1 && M <= n && M !== l && (d(M), i == null || i(M));
  }, [l, n, i]), v = O(() => {
    l > 1 && k(l - 1);
  }, [l, k]), y = O(() => {
    l < n && k(l + 1);
  }, [l, n, k]), g = O((M) => {
    if (M === "prev" && !p) {
      const x = Math.max(1, h - t);
      k(x);
    } else if (M === "next" && !f) {
      const x = Math.min(n, h + t);
      k(x);
    }
  }, [h, t, p, f, n, k]), L = O((M) => {
    const x = M;
    !isNaN(x) && x >= 1 && x <= n && (d(x), k(x));
  }, [n, k]), w = O((M) => {
    M.stopPropagation();
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
        onClick: (M) => {
          w(M), v();
        },
        className: `land-pagination-arrow-prev ${l === 1 ? "disabled" : ""}`,
        children: /* @__PURE__ */ s(Y, { name: "arrow", className: "land-pagination-arrow-prev-icon", strokeWidth: 4 })
      }
    ),
    /* @__PURE__ */ m("div", { className: "land-pagination-page", children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: `land-pagination-num-item ${l === 1 ? "active" : ""}`,
          onClick: (M) => {
            w(M), k(1);
          },
          children: "1"
        }
      ),
      ((b = u[0]) == null ? void 0 : b.id) > 2 && /* @__PURE__ */ m(
        "div",
        {
          onClick: (M) => {
            w(M), g("prev");
          },
          className: "land-pagination-arrow-double-prev",
          children: [
            /* @__PURE__ */ s(Y, { name: "more", size: 16 }),
            /* @__PURE__ */ s(Y, { name: "arrow-double", className: "land-pagination-arrow-double-prev-icon", size: 24 })
          ]
        }
      ),
      u == null ? void 0 : u.map((M) => /* @__PURE__ */ s(
        "div",
        {
          className: `land-pagination-num-item ${l === M.id ? "active" : ""}`,
          onClick: (x) => {
            w(x), k(M.id);
          },
          children: M.id
        },
        M.id
      )),
      ((V = u[(u == null ? void 0 : u.length) - 1]) == null ? void 0 : V.id) < n - 1 && /* @__PURE__ */ m(
        "div",
        {
          onClick: (M) => {
            w(M), g("next");
          },
          className: "land-pagination-arrow-double-next",
          children: [
            /* @__PURE__ */ s(Y, { name: "more", size: 16 }),
            /* @__PURE__ */ s(Y, { name: "arrow-double", className: "land-pagination-arrow-double-next-icon", size: 24 })
          ]
        }
      ),
      /* @__PURE__ */ s(
        "div",
        {
          className: `land-pagination-num-item ${l === n ? "active" : ""}`,
          onClick: (M) => {
            w(M), k(n);
          },
          children: n
        }
      )
    ] }),
    /* @__PURE__ */ s(
      "div",
      {
        onClick: (M) => {
          w(M), y();
        },
        className: `land-pagination-arrow-next ${l === n ? "disabled" : ""}`,
        children: /* @__PURE__ */ s(Y, { name: "arrow", className: "land-pagination-arrow-next-icon", strokeWidth: 4 })
      }
    ),
    o && /* @__PURE__ */ m("div", { className: "land-pagination-input", children: [
      "跳转至",
      /* @__PURE__ */ s(
        Pe,
        {
          hideArrowButton: !0,
          value: l,
          onChange: L,
          className: "land-pagination-page-input",
          textAlign: "center"
        }
      ),
      "/ ",
      n,
      " 页"
    ] })
  ] });
}, Vm = ({
  show: e,
  content: t,
  theme: n = "light",
  placement: r = "top",
  hideArrow: o = !1,
  cancelButtonProps: i,
  submitButtonProps: a,
  cancelLabel: c = "取消",
  submitLabel: l = "确认",
  onCancel: d,
  onSubmit: u,
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
        /* @__PURE__ */ s(he, { type: "fill", size: "small", onClick: d, ...i, children: c }),
        /* @__PURE__ */ s(he, { type: "background", size: "small", onClick: u, ...a, children: l })
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
), Sm = ({
  value: e = 0.6,
  status: t = "default",
  type: n = "line",
  hideLabel: r = !1,
  strokeWidth: o = 8,
  style: i,
  className: a = ""
}) => {
  const c = Math.max(0, Math.min(1, e)), l = () => `scaleX(${c})`, d = () => {
    if (t === "default") return null;
    const h = {
      size: n === "circle" ? 20 : 16
    };
    switch (t) {
      case "success":
        return /* @__PURE__ */ s(Y, { name: "check-fill", ...h, color: "var(--color-green-6)" });
      case "fail":
        return /* @__PURE__ */ s(Y, { name: "error-fill", ...h, color: "var(--color-red-6)" });
      default:
        return null;
    }
  }, u = () => {
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
    u(),
    !r && t == "default" && /* @__PURE__ */ m("div", { className: "land-progress-circle-label", children: [
      Math.round(c * 100),
      "%"
    ] }),
    t !== "default" && /* @__PURE__ */ s("div", { className: "land-progress-status-icon", children: d() })
  ] }) : /* @__PURE__ */ m(pe, { children: [
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
    t !== "default" && /* @__PURE__ */ s("div", { className: "land-progress-status-icon", children: d() })
  ] }) }) });
}, _3 = ({
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
  /* @__PURE__ */ s(ve, { content: t, theme: "dark", style: { maxWidth: "200px" } }),
  /* @__PURE__ */ m(
    "div",
    {
      onClick: a,
      className: "land-radio-label",
      children: [
        /* @__PURE__ */ s("div", { className: `land-radio-circle ${c ? "checked" : ""} ${l ? "animated" : "no-animation"}`, children: /* @__PURE__ */ s(Y, { name: "check", size: 10, className: "land-radio-circle-icon" }) }),
        e
      ]
    }
  ),
  r && /* @__PURE__ */ m("div", { className: "land-radio-pop hover-pop", children: [
    /* @__PURE__ */ s(Y, { name: "info-stroke", color: "var(--color-gray-rgba-9)", size: 12 }),
    /* @__PURE__ */ s(ve, { content: r, theme: "dark", style: { maxWidth: "200px" } })
  ] })
] }), $m = ({
  checked: e,
  data: t = [],
  animated: n,
  onChange: r,
  style: o,
  className: i = ""
}) => /* @__PURE__ */ s("div", { className: `land-radio-group ${i}`, style: o, children: t == null ? void 0 : t.map(
  (a) => /* @__PURE__ */ s(
    _3,
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
) }), Tm = ({
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
  const [d, u] = je.useState(0);
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
                className: `land-rate-character-item left ${p + 1 + p * 2 <= e || p + 1 + p * 2 <= d ? "active" : ""}`,
                onClick: () => a == null ? void 0 : a(p + 1 + p * 2),
                onMouseEnter: () => u(p + 1 + p * 2),
                onMouseLeave: () => u(0),
                children: o || /* @__PURE__ */ s("svg", { width: "24", viewBox: "0 0 48 48", children: /* @__PURE__ */ s("path", { d: "M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z" }) })
              }
            ),
            /* @__PURE__ */ s(
              "div",
              {
                className: `land-rate-character-item right ${p + 2 + p * 2 <= e || p + 2 + p * 2 <= d ? "active" : ""}`,
                onClick: () => a == null ? void 0 : a(p + 2 + p * 2),
                onMouseOver: () => u(p + 2 + p * 2),
                onMouseLeave: () => u(0),
                children: o || /* @__PURE__ */ s("svg", { width: "24", viewBox: "0 0 48 48", children: /* @__PURE__ */ s("path", { d: "M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z" }) })
              }
            )
          ]
        },
        p
      ))
    }
  );
}, Lt = (e) => {
  const t = [];
  return e.children && e.children.forEach((n) => {
    t.push(n.key), t.push(...Lt(n));
  }), t;
}, pl = (e) => {
  const t = [];
  return e.children && e.children.forEach((n) => {
    t.push(n), t.push(...pl(n));
  }), t;
}, jm = ({
  type: e,
  disabled: t,
  multiple: n,
  customValueDisplay: r,
  tip: o,
  tipProps: i,
  selected: a,
  selectedValues: c,
  separator: l,
  maxDisplayCount: d,
  placeholder: u = "请选择",
  data: h,
  onChange: p
}) => {
  const [f, k] = E([]), v = O(() => {
    if (n) {
      const S = c.map((T) => T.label);
      return !S || S.length === 0 ? u : S.length <= d ? S.join(l) : `${S.slice(0, d).join(l)}等${S.length}个选项`;
    } else
      return !a || !a.label ? u : a.label;
  }, [n, c, a, u, l, d]), y = O(() => {
    if (!r)
      return v();
    if (n)
      return r({
        values: c.map((S) => S.key),
        items: c,
        isMultiple: !0,
        placeholder: u
      });
    {
      const S = a ? [a] : [], T = a ? [a.key] : [];
      return r({
        values: T,
        items: S,
        isMultiple: !1,
        placeholder: u
      });
    }
  }, [r, v, n, c, a, u]), g = O((S) => {
    if (S === 0)
      return h || [];
    let T = h || [];
    for (let N = 0; N < S; N++) {
      const j = f[N], A = T.find((I) => I.key === j);
      if (A != null && A.children)
        T = A.children;
      else
        return [];
    }
    return T;
  }, [h, f]), L = O((S) => n ? c.some((T) => T.key === S.key) : (a == null ? void 0 : a.key) === S.key, [n, c, a]), w = O((S) => {
    if (!n || !S.children) return !1;
    const T = Lt(S), N = T.filter(
      (j) => c.some((A) => A.key === j)
    ).length;
    return N > 0 && N < T.length;
  }, [n, c]), b = O((S) => {
    let T = [...S];
    const N = (A) => {
      const I = [];
      return A.forEach((F) => {
        F.children && F.children.length > 0 && (I.push(F), I.push(...N(F.children)));
      }), I;
    };
    return N(h || []).forEach((A) => {
      const I = Lt(A), F = I.filter(
        (z) => T.some((P) => P.key === z)
      ).length, B = T.some((z) => z.key === A.key);
      F === I.length && !B ? T.push(A) : F === 0 && B && (T = T.filter((z) => z.key !== A.key));
    }), T;
  }, [h, Lt]), V = O((S, T) => {
    if (S.children && S.children.length > 0) {
      const N = f[T] === S.key;
      k(N ? f.slice(0, T) : [...f.slice(0, T), S.key]);
    } else if (n) {
      const N = L(S);
      let j;
      N ? j = c.filter((A) => A.key !== S.key) : j = [...c, S], j = b(j), p == null || p(j, S);
    } else
      p == null || p(S, S);
  }, [f, n, L, c, p, b]), M = O((S, T) => {
    if (!n) return;
    let N = [...c];
    if (L(S)) {
      const A = [S.key, ...Lt(S)];
      N = N.filter(
        (I) => !A.includes(I.key)
      );
    } else
      [S, ...pl(S)].forEach((I) => {
        N.some((F) => F.key === I.key) || N.push(I);
      });
    N = b(N), p == null || p(N, S);
  }, [n, c, p, L, Lt, b]), x = O(() => {
    k([]);
  }, []), C = K(() => g(0), [g]), $ = K(() => f.map((S, T) => {
    const N = T + 1, j = g(N);
    return { level: N, levelData: j };
  }).filter(({ levelData: S }) => S.length > 0), [f, g]);
  return /* @__PURE__ */ s("div", { className: "land-select-tree", children: /* @__PURE__ */ s(
    hn,
    {
      disabled: t,
      trigger: "click",
      onClose: x,
      dropContent: /* @__PURE__ */ m("div", { className: "land-select-tree-drop", children: [
        /* @__PURE__ */ s(
          lo,
          {
            data: C,
            multiple: n,
            level: 0,
            expandedPath: f,
            onClick: V,
            onCheckedChange: M,
            isItemSelected: L,
            isItemIndeterminate: w
          }
        ),
        $.map(({ level: S, levelData: T }) => /* @__PURE__ */ s(
          lo,
          {
            data: T,
            multiple: n,
            level: S,
            expandedPath: f,
            onClick: V,
            onCheckedChange: M,
            isItemSelected: L,
            isItemIndeterminate: w
          },
          `level-${S}`
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
                children: r ? y() : v()
              }
            ),
            /* @__PURE__ */ s(Y, { name: "arrow-triangle", className: "land-select-value-arrow", size: 16 }),
            o && /* @__PURE__ */ s(ve, { content: o, theme: "dark", ...i })
          ]
        }
      )
    }
  ) });
}, lo = je.memo(({
  data: e,
  multiple: t,
  level: n,
  expandedPath: r,
  onClick: o,
  onCheckedChange: i,
  isItemSelected: a,
  isItemIndeterminate: c
}) => {
  const l = O((u, h) => {
    u.stopPropagation(), o(h, n);
  }, [o, n]), d = O((u, h) => {
    u.children && h && h.stopPropagation(), i(u, !1);
  }, [i]);
  return /* @__PURE__ */ s("div", { className: "land-select-tree-drop-list", children: e == null ? void 0 : e.map((u) => {
    const h = r[n] === u.key, p = u.children && u.children.length > 0, f = a(u), k = c(u);
    return /* @__PURE__ */ m(
      "div",
      {
        className: `land-select-tree-drop-list-item ${h ? "expanded" : ""} ${f ? "selected" : ""}`,
        onClick: (v) => l(v, u),
        children: [
          /* @__PURE__ */ m("div", { className: "land-select-tree-drop-list-item-content", children: [
            t && /* @__PURE__ */ s(
              Go,
              {
                label: "",
                checked: f,
                indeterminate: k,
                onCheckedChange: (v, y) => d(u, y)
              }
            ),
            u.label
          ] }),
          p && /* @__PURE__ */ s(
            Y,
            {
              name: "arrow-triangle",
              className: `land-select-tree-drop-list-item-arrow ${h ? "expanded" : ""}`
            }
          )
        ]
      },
      u.key
    );
  }) });
});
lo.displayName = "TreeList";
const Am = ({
  type: e = "empty",
  title: t,
  subTitle: n,
  titleLink: r,
  subTitleLink: o,
  button: i,
  onTiTleLinkClick: a,
  onSubTitleLinkClick: c,
  onButtonClick: l,
  buttonProps: d,
  emptyIcon: u,
  offlineIcon: h,
  className: p,
  style: f,
  titleLinkProps: k,
  subTitleLinkProps: v
}) => /* @__PURE__ */ m("div", { className: `land-state ${p}`, style: f, children: [
  e === "empty" && (u || /* @__PURE__ */ m(
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
    r && /* @__PURE__ */ m(pe, { children: [
      "，",
      /* @__PURE__ */ s(
        on,
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
    /* @__PURE__ */ m(pe, { children: [
      "，",
      /* @__PURE__ */ s(
        on,
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
    he,
    {
      className: "land-state-button",
      onClick: l,
      ...d,
      children: i
    }
  )
] }), U3 = {
  linear: (e) => e,
  easeIn: (e) => e * e,
  easeOut: (e) => 1 - Math.pow(1 - e, 2),
  easeInOut: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
  bounce: (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  elastic: (e) => Math.pow(2, -10 * e) * Math.sin((e - 0.3 / 4) * (2 * Math.PI) / 0.3) + 1
}, Pm = ({
  value: e = 0,
  prefix: t,
  suffix: n,
  unit: r,
  trendIcon: o,
  animation: i = "none",
  animationConfig: a = {},
  precision: c = 0,
  style: l,
  className: d
}) => {
  const [u, h] = E(""), [p, f] = E(!1), [k, v] = E(!1), y = q(null), g = q(null), L = q(e), b = { ...{
    duration: 1e3,
    easing: "easeOut",
    delay: 0,
    loop: !1,
    loopInterval: 2e3
  }, ...a }, V = O((N) => c > 0 ? N.toFixed(c) : Math.floor(N).toString(), [c]), M = O(() => {
    y.current && (cancelAnimationFrame(y.current), y.current = null);
  }, []), x = O(() => {
    g.current && (clearTimeout(g.current), g.current = null);
  }, []), C = O((N, j) => {
    const F = b.duration / 1e3 * 60;
    let B = 0;
    const z = U3[b.easing], P = () => {
      B++;
      const R = B / F, H = z(R), D = N + (j - N) * H;
      h(V(D)), B < F ? y.current = requestAnimationFrame(P) : (h(V(j)), y.current = null);
    };
    y.current = requestAnimationFrame(P);
  }, [b.duration, b.easing, V]);
  Z(() => {
    if (i === "none") {
      h(V(e));
      return;
    }
    return g.current = setTimeout(() => {
      switch (v(!0), i) {
        case "increase":
          C(0, e);
          break;
        case "decrease":
          C(e * 1.5, e);
          break;
        case "bounce":
          h(V(e)), f(!0);
          break;
        case "fade":
        case "slide":
        case "scale":
        case "flip":
          h(V(e)), f(!0);
          break;
        case "random":
          h(V(e)), f(!0);
          break;
        default:
          h(V(e));
      }
    }, b.delay), () => {
      x(), M();
    };
  }, [i, e, b.delay, b.duration, C, V, x, M]), Z(() => {
    if (!b.loop || i === "none") return;
    const N = () => {
      g.current = setTimeout(() => {
        f(!1), setTimeout(() => f(!0), 100), N();
      }, b.loopInterval);
    };
    return p && N(), () => x();
  }, [b.loop, b.loopInterval, p, i, x]), Z(() => () => {
    M(), x();
  }, [M, x]), Z(() => {
    L.current !== e && i !== "none" && (f(!1), setTimeout(() => f(!0), 50)), L.current = e;
  }, [e, i]);
  const $ = K(() => V(e).split("").map((j) => j === "." ? "." : j === "-" ? "-" : parseInt(j, 10)), [e, V]), S = {
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
  }, T = () => i === "bounce" ? S.bounce : i === "fade" ? S.fade : i === "slide" ? S.slide : i === "scale" ? S.scale : i === "flip" ? S.flip : S.fade;
  return /* @__PURE__ */ m("div", { className: `land-statistic ${d || ""}`, style: l, children: [
    t && /* @__PURE__ */ s("div", { className: "land-statistic-prefix", children: t }),
    /* @__PURE__ */ m("div", { className: "land-statistic-value", children: [
      /* @__PURE__ */ s(N4, { mode: "wait", children: i === "random" ? /* @__PURE__ */ s("div", { className: "flex items-center", children: $.map((N, j) => /* @__PURE__ */ s(
        "div",
        {
          className: "land-statistic-random",
          style: { height: "45px" },
          children: /* @__PURE__ */ s(
            we.div,
            {
              animate: { y: p ? -Number(N) * 45 : 0 },
              transition: {
                duration: 1.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              },
              className: "land-statistic-random-list",
              children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((A) => /* @__PURE__ */ s("div", { children: A }, A))
            }
          )
        },
        `digit-${j}-${N}`
      )) }, "random") : i !== "none" && (i === "increase" || i === "decrease") ? /* @__PURE__ */ s(
        we.div,
        {
          layout: !0,
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.3, ease: "easeOut" },
          children: u
        },
        "number-animation"
      ) : i !== "none" ? /* @__PURE__ */ s(
        we.div,
        {
          initial: T().initial,
          animate: p ? T().animate : T().initial,
          exit: T().initial,
          children: u
        },
        `${i}-${e}`
      ) : /* @__PURE__ */ s(
        we.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.3 },
          children: u
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
            Y,
            {
              name: "increase",
              strokeWidth: 0,
              color: "var(--color-success)"
            }
          ),
          o === "down" && /* @__PURE__ */ s(
            Y,
            {
              name: "increase",
              style: { transform: "rotate(180deg)" },
              strokeWidth: 0,
              color: "var(--color-error)"
            }
          ),
          o === "default" && /* @__PURE__ */ s(
            Y,
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
}, Im = ({}) => /* @__PURE__ */ s("div", { children: "Swiper" }), fl = je.memo(({ item: e, index: t, isActive: n, isFinished: r, onClick: o, direction: i }) => {
  const a = O(() => {
    o == null || o(e);
  }, [o, e]), c = O((d) => {
    (d.key === "Enter" || d.key === " ") && (d.preventDefault(), o == null || o(e));
  }, [o, e]), l = K(() => r ? /* @__PURE__ */ s(Y, { name: "check", size: 12 }) : t + 1, [r, t]);
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
fl.displayName = "StepsItem";
const Hm = ({
  data: e = [],
  current: t,
  finished: n = [],
  onClick: r,
  useDivider: o = !0,
  dividerWidth: i = "32px",
  direction: a = "horizontal",
  style: c,
  className: l,
  children: d,
  ...u
}) => {
  const h = K(() => t !== void 0 ? t : e.length > 0 ? e[0].key : void 0, [t, e]), p = K(() => Array.isArray(e) ? e.filter((L) => L && typeof L == "object" && L.key !== void 0) : [], [e]);
  if (p.length === 0)
    return d ? /* @__PURE__ */ s(pe, { children: d }) : null;
  const k = K(() => h !== void 0 && p.some((L) => L.key === h), [h, p]) ? h : p[0].key, v = O((L) => L.finished !== void 0 ? L.finished : n.includes(L.key), [n]), y = K(() => ["land-steps", a === "vertical" ? "vertical" : "", l].filter(Boolean).join(" "), [a, l]), g = O(() => p.map((L, w) => {
    const b = k === L.key, V = v(L);
    return /* @__PURE__ */ m(an, { children: [
      o && w !== 0 && /* @__PURE__ */ s(
        Re,
        {
          lineLength: i,
          style: a === "horizontal" ? { marginTop: "12px" } : { marginLeft: "8px" },
          direction: a === "vertical" ? "column" : "row"
        }
      ),
      /* @__PURE__ */ s(
        fl,
        {
          item: L,
          index: w,
          isActive: b,
          isFinished: V,
          onClick: r,
          direction: a
        }
      )
    ] }, L.key);
  }), [p, k, v, o, i, a, r]);
  return /* @__PURE__ */ s(
    "div",
    {
      className: y,
      style: c,
      role: "list",
      "aria-label": "步骤导航",
      ...u,
      children: g()
    }
  );
}, z3 = ({
  checked: e,
  label: t,
  checkedLabel: n,
  icon: r,
  checkedIcon: o,
  tip: i,
  iconTip: a,
  tipProps: c,
  iconTipProps: l,
  onChange: d,
  dark: u,
  disabled: h,
  style: p,
  className: f = ""
}) => {
  const [k, v] = E(e);
  return Z(() => v(e), [e]), /* @__PURE__ */ m(
    "div",
    {
      className: `land-switch ${i ? "hover-pop" : ""} ${h ? "disabled" : ""}`,
      children: [
        /* @__PURE__ */ s(ve, { content: i, theme: "dark", ...c }),
        /* @__PURE__ */ m(
          "div",
          {
            className: `land-switch-content ${u ? "dark" : ""} ${k ? "checked" : ""} ${f}`,
            style: p,
            onClick: (y) => {
              y.stopPropagation(), !h && (v(!k), d == null || d(k));
            },
            children: [
              /* @__PURE__ */ s("div", { className: "land-switch-bar", children: /* @__PURE__ */ s(we.div, { animate: { x: k ? 16 : 0 }, transition: { duration: 0.6, type: "spring" }, className: "land-switch-indicator", children: k ? o : r }) }),
              (t || n) && /* @__PURE__ */ s("div", { className: "land-switch-label", children: k ? n : t })
            ]
          }
        ),
        a && /* @__PURE__ */ m("div", { className: "land-switch-label-iconTip hover-pop", children: [
          /* @__PURE__ */ s(Y, { name: "info-stroke", size: 16 }),
          /* @__PURE__ */ s(ve, { content: a, theme: "dark", ...l })
        ] })
      ]
    }
  );
};
function Rm({
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
      children: n == null ? void 0 : n.map((d, u) => {
        var h;
        return /* @__PURE__ */ m(an, { children: [
          r && u !== 0 && /* @__PURE__ */ s(
            Re,
            {
              direction: "column",
              gap: 0,
              lineLength: "14px",
              className: `land-tabs-divider ${t !== d.key && t !== ((h = n[u - 1]) == null ? void 0 : h.key) ? "" : "hidden"}`
            }
          ),
          /* @__PURE__ */ m(
            "div",
            {
              className: `land-tabs-item 
               ${t === d.key ? `selected ${i}` : d.disabled || c ? "disabled" : ""}`,
              onClick: (p) => {
                p.stopPropagation(), !d.disabled && !c && (o == null || o(d.key, d));
              },
              children: [
                d.label,
                d.showIcon && /* @__PURE__ */ m("div", { className: "size-icon-16 fs-12 flex items-center color-icon-secondary hover-pop relative cursor-default", children: [
                  /* @__PURE__ */ s(Y, { name: "info-stroke", size: 16 }),
                  /* @__PURE__ */ s(ve, { content: d.iconTip, theme: "dark" })
                ] })
              ]
            }
          )
        ] }, d.key);
      })
    }
  );
}
const X3 = ({
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
        Y,
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
), Em = ({
  tagData: e = [],
  placeholder: t = "按下回车以输入标签",
  width: n = "100%",
  maxLength: r = 5,
  highlightStr: o = [],
  highlightStyle: i = { background: "var(--color-primary-2)", color: "var(--color-primary-6)" },
  showClear: a = !0,
  onChange: c,
  onEnter: l,
  onFocus: d,
  onBlur: u,
  onClear: h,
  onDelete: p,
  tagStyle: f,
  tagClassName: k = "",
  className: v = "",
  style: y
}) => {
  const [g, L] = E(""), [w, b] = E(e), V = (M) => {
    w.length === r || !M || (b([...w, M]), L(""));
  };
  return Z(() => {
    const M = (x) => {
      x.code === "Backspace" && (w == null ? void 0 : w.length) > 0 && !g && (b((C) => C.slice(0, -1)), console.log(x.code));
    };
    return document.body.addEventListener("keydown", M), () => document.body.removeEventListener("keydown", M);
  }, [g, w]), /* @__PURE__ */ m(
    "div",
    {
      className: `land-tag-input ${a ? "widthClear" : ""} ${v}`,
      style: { width: typeof n == "number" ? `${n}px` : n, paddingLeft: (w == null ? void 0 : w.length) > 0 ? "4px" : "12px", ...y },
      children: [
        /* @__PURE__ */ m("div", { className: "land-tag-input-container", children: [
          w == null ? void 0 : w.map((M, x) => /* @__PURE__ */ s(X3, { className: `land-tag-input-tag ${k}`, canDelete: !0, onDelete: () => {
            b(w.filter((C) => C !== M)), p == null || p(M);
          }, style: f, children: M }, x)),
          /* @__PURE__ */ s(
            Qn,
            {
              type: "transparent",
              value: g,
              placeholder: t,
              onEnter: (M, x) => {
                V == null || V(M), l == null || l(w, x);
              },
              onBlur: (M) => {
                V == null || V(g), u == null || u(w, M);
              },
              onChange: (M, x) => {
                L(M), c == null || c(w, x);
              },
              className: "land-tag-input-input",
              onFocus: d,
              highlightStr: o,
              highlightStyle: i
            }
          )
        ] }),
        a && (w == null ? void 0 : w.length) > 0 && /* @__PURE__ */ s("div", { className: "land-input-clear-icon", onClick: () => {
          b([]), h == null || h();
        }, children: /* @__PURE__ */ s(Y, { name: "error-fill" }) })
      ]
    }
  );
}, Dm = ({
  titleData: e,
  data: t = [],
  style: n,
  className: r = "",
  striped: o = !1,
  crossHighlight: i = !1,
  headFixed: a = !1,
  fixedColumns: c = 0
}) => {
  const [l, d] = E(null), [u, h] = E({ row: {}, col: {} }), p = q(null), f = q(null), k = (L, w) => {
    i && d({ row: L, col: w });
  }, v = () => {
    i && d(null);
  }, y = O(() => {
    if (i && l && p.current) {
      const L = p.current, w = L.querySelector("thead tr"), b = L.querySelectorAll("tbody tr");
      if (w && b.length > 0) {
        const V = w.getBoundingClientRect().height, M = b[0].getBoundingClientRect().height;
        let x = 0, C = 0;
        for (let $ = 0; $ < w.children.length; $++) {
          const T = w.children[$].getBoundingClientRect().width;
          if ($ === l.col) {
            C = T;
            break;
          }
          x += T;
        }
        h({
          row: {
            top: `${V + l.row * M}px`,
            height: `${M}px`
          },
          col: {
            left: `${x}px`,
            width: `${C}px`
          }
        });
      }
    }
  }, [i, l]), g = O(() => {
    if (c > 0 && p.current) {
      const L = p.current, w = L.querySelector("thead tr");
      if (w) {
        const b = {};
        let V = 0;
        for (let x = 0; x < Math.min(c, w.children.length); x++) {
          const $ = w.children[x].getBoundingClientRect().width;
          b[x] = {
            left: `${V}px`
          }, V += $;
        }
        const M = L.parentElement;
        M && Object.entries(b).forEach(([x, C]) => {
          M.style.setProperty(`--fixed-col-${x}-left`, C.left);
        });
      }
    }
  }, [c]);
  return Z(() => {
    g();
  }, [g]), Z(() => {
    c > 0 && requestAnimationFrame(() => {
      g();
    });
  }, [c, g]), Z(() => {
    y();
  }, [y]), Z(() => {
    if ((i || c > 0) && p.current)
      return f.current = new ResizeObserver(() => {
        l && y(), c > 0 && g();
      }), f.current.observe(p.current), () => {
        f.current && f.current.disconnect();
      };
  }, [i, c, l, y, g]), /* @__PURE__ */ m("div", { className: `land-table-wrapper ${i ? "land-table-wrapper--cross-highlight" : ""} ${a ? "land-table-wrapper--head-fixed" : ""} ${c > 0 ? "land-table-wrapper--fixed-columns" : ""} ${r}`, style: n, children: [
    /* @__PURE__ */ m("table", { ref: p, className: `land-table ${o ? "land-table--striped" : ""} ${a ? "land-table--head-fixed" : ""} ${c > 0 ? "land-table--fixed-columns" : ""}`, children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: e == null ? void 0 : e.map((L, w) => /* @__PURE__ */ s(
        "th",
        {
          className: w < c ? "land-table__cell--fixed" : "",
          children: L.title
        },
        w
      )) }) }),
      /* @__PURE__ */ s("tbody", { children: t.map((L, w) => /* @__PURE__ */ s("tr", { children: Object.values(L).map((b, V) => /* @__PURE__ */ s(
        "td",
        {
          "data-row": w,
          "data-col": V,
          className: V < c ? "land-table__cell--fixed" : "",
          onMouseEnter: () => k(w, V),
          onMouseLeave: v,
          children: b
        },
        V
      )) }, w)) })
    ] }),
    i && l && /* @__PURE__ */ m(pe, { children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: "land-table__row-overlay",
          style: u.row
        }
      ),
      /* @__PURE__ */ s(
        "div",
        {
          className: "land-table__col-overlay",
          style: u.col
        }
      )
    ] })
  ] });
}, Bm = ({ data: e, direction: t = "column", icon: n }) => /* @__PURE__ */ s("div", { className: `land-timeline ${t === "row" ? "row" : ""}`, children: e == null ? void 0 : e.map((r, o) => /* @__PURE__ */ m("div", { className: `land-timeline-item ${t === "row" ? "row" : ""}`, children: [
  /* @__PURE__ */ m("div", { className: "land-timeline-indicator-wrapper", children: [
    r.icon || n || /* @__PURE__ */ s("div", { className: "land-timeline-indicator" }),
    o !== (e == null ? void 0 : e.length) - 1 && /* @__PURE__ */ s(Re, { direction: t })
  ] }),
  /* @__PURE__ */ m("div", { className: "land-timeline-content", children: [
    r.title && /* @__PURE__ */ s("div", { className: "land-timeline-title", children: r.title }),
    r.subTitle && /* @__PURE__ */ s("div", { className: "land-timeline-subTitle", children: r.subTitle }),
    r.desc && /* @__PURE__ */ s("div", { className: "land-timeline-desc", children: r.desc })
  ] })
] }, o)) }), Om = ({
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
        /* @__PURE__ */ s(Y, { name: "info-stroke", stroke: "var(--color-text-secondary)" }),
        /* @__PURE__ */ s(ve, { content: o, theme: "dark", style: { maxWidth: "200px" } })
      ] }),
      r && typeof r == "string" ? /* @__PURE__ */ s("div", { className: "land-title-sub", children: r }) : /* @__PURE__ */ s(pe, { children: r })
    ]
  }
), Fm = ({
  type: e = "border",
  value: t,
  placeholder: n = "请输入",
  beforeContent: r,
  afterContent: o,
  width: i,
  height: a,
  maxLength: c,
  showNumber: l = !1,
  disabled: d,
  textAlign: u = "left",
  rows: h = 4,
  resize: p = "vertical",
  onChange: f,
  onFocus: k,
  onBlur: v,
  onClear: y,
  onKeyDown: g,
  className: L = "",
  style: w,
  ...b
}) => {
  const V = q(null), M = O((S) => {
    v == null || v(S);
  }, [v]), x = O((S) => {
    f == null || f(S.target.value, S);
  }, [f]), C = (t == null ? void 0 : t.length) || 0, $ = l && c;
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-textarea ${d ? "disabled" : ""} ${y ? "clear" : ""} ${e} text-${u} ${L}`,
      style: {
        width: typeof i == "number" ? `${i}px` : i,
        height: typeof a == "number" ? `${a}px` : a,
        ...w
      },
      children: [
        r && /* @__PURE__ */ s("div", { className: "textarea-beforeContent", children: r }),
        /* @__PURE__ */ s("div", { className: "land-textarea-content", children: /* @__PURE__ */ s("div", { className: "textarea-input-wrapper", children: /* @__PURE__ */ s(
          "textarea",
          {
            ref: V,
            placeholder: n,
            value: t,
            maxLength: c,
            rows: h,
            disabled: d,
            onFocus: k,
            onBlur: M,
            onChange: x,
            onKeyDown: g,
            style: {
              resize: p
            },
            ...b
          }
        ) }) }),
        o && /* @__PURE__ */ s("div", { className: "textarea-afterContent", children: o }),
        y && /* @__PURE__ */ s(
          "div",
          {
            className: `land-textarea-clear-icon ${t ? "" : "hide"}`,
            onClick: y,
            children: /* @__PURE__ */ s(Y, { name: "error-fill" })
          }
        ),
        $ && /* @__PURE__ */ m("div", { className: "land-textarea-count", children: [
          /* @__PURE__ */ s("span", { className: C > c ? "error" : "", children: C }),
          "/",
          c
        ] })
      ]
    }
  );
}, Zm = ({
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
  const d = q(null), [u, h] = E(), [p, f] = E(), [k, v] = E(!1), y = (w, b) => {
    w.preventDefault(), v(!0), b && (f(b), new FileReader().readAsDataURL(b), h(URL.createObjectURL(b)), v(!1));
  };
  Z(() => {
    n == null || n(u, p);
  }, [u]);
  const [g, L] = E(!1);
  return /* @__PURE__ */ m(
    "label",
    {
      className: `land-uploader ${g ? "drag" : ""} ${c}`,
      style: {
        width: o,
        height: i,
        ...a
      },
      onDragOver: (w) => {
        L(!0), w.preventDefault();
      },
      onDrop: (w) => {
        L(!1), y(w, w.dataTransfer.files[0]);
      },
      onDragLeave: () => L(!1),
      children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: d,
            type: "file",
            accept: t,
            className: `land-uploader-input ${l}`,
            onChange: (w) => {
              y(w, w.target.files[0]);
            }
          }
        ),
        r || (k ? /* @__PURE__ */ s(pe, { children: "上传中" }) : g ? /* @__PURE__ */ s("div", { className: "land-uploader-desc", children: "释放即可上传" }) : /* @__PURE__ */ m(pe, { children: [
          /* @__PURE__ */ s("div", { className: "land-uploader-icon", children: /* @__PURE__ */ s(Y, { name: "upload" }) }),
          e && /* @__PURE__ */ s("div", { className: "land-uploader-desc", children: e })
        ] }))
      ]
    }
  );
}, Ym = ({
  children: e,
  content: t,
  url: n,
  width: r = 120,
  height: o = 64,
  gap: i = [180, 120],
  offset: a = [50, 50],
  rotate: c = -22,
  fontSize: l = "var(--font-content-m)",
  fontColor: d = "var(--color-text-quaternary)",
  fontWeight: u = "normal",
  fontFamily: h = "sans-serif",
  zIndex: p = 9,
  style: f,
  className: k
}) => {
  const v = q(null), y = q(null), [g, L] = E({ width: 0, height: 0 }), w = O(() => {
    const { width: C, height: $ } = g;
    if (C === 0 || $ === 0) return [];
    const [S, T] = i, [N, j] = a, A = Math.max(S, r), I = Math.max(T, o), F = C - r, B = $ - o, z = Math.max(0, Math.min(N, F)), P = Math.max(0, Math.min(j, B)), R = Math.ceil((F - z) / A) + 1, H = Math.ceil((B - P) / I) + 1, D = [];
    for (let U = 0; U < H; U++)
      for (let X = 0; X < R; X++) {
        const _ = z + X * A, W = P + U * I;
        _ + r <= C && W + o <= $ && D.push({
          id: `${U}-${X}`,
          x: _,
          y: W
        });
      }
    if (D.length < 4) {
      const U = [], X = (C - r) / 2, _ = ($ - o) / 2;
      U.push({
        id: "center",
        x: X,
        y: _
      });
      const W = 20;
      return [
        { x: W, y: W },
        { x: C - r - W, y: W },
        { x: W, y: $ - o - W },
        {
          x: C - r - W,
          y: $ - o - W
        }
      ].forEach((Q, te) => {
        Q.x >= 0 && Q.y >= 0 && U.push({
          id: `corner-${te}`,
          x: Q.x,
          y: Q.y
        });
      }), [...D, ...U];
    }
    return D;
  }, [g, i, a, r, o]), b = K(() => w(), [w]), V = O(() => {
    if (v.current) {
      const { offsetWidth: C, offsetHeight: $ } = v.current;
      L({ width: C, height: $ });
    }
  }, []);
  Z(() => {
    V();
  }, [V]), Z(() => (y.current && (y.current.disconnect(), y.current = null), y.current = new ResizeObserver(() => {
    V();
  }), v.current && y.current.observe(v.current), () => {
    y.current && (y.current.disconnect(), y.current = null);
  }), [V]), Z(() => () => {
    y.current && (y.current.disconnect(), y.current = null);
  }, []);
  const M = K(
    () => ({
      width: `${r}px`,
      height: `${o}px`,
      color: d,
      fontSize: `${l}px`,
      fontWeight: u,
      fontFamily: h,
      zIndex: p,
      transform: `rotate(${c}deg)`
    }),
    [r, o, d, l, u, h, p, c]
  ), x = O(
    (C) => {
      const $ = {
        ...M,
        left: `${C.x}px`,
        top: `${C.y}px`
      };
      return /* @__PURE__ */ s("div", { className: `land-watermark-item ${n ? "img" : ""}`, style: $, children: n ? /* @__PURE__ */ s("img", { src: n, alt: "watermark" }) : t }, C.id);
    },
    [M, n, t]
  );
  return /* @__PURE__ */ m(
    "div",
    {
      ref: v,
      className: `land-watermark  ${k ?? ""}`,
      style: f,
      children: [
        e,
        /* @__PURE__ */ s("div", { className: "land-watermark-content", children: b.map(x) })
      ]
    }
  );
}, K3 = ({
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
  const d = q(null), [u, h] = E(), [p, f] = E(!1), [k, v] = E(!1), [y, g] = E(0);
  Z(() => {
    const x = ($) => {
      $.forEach((S) => {
        h(S.contentRect.width);
      });
    }, C = new ResizeObserver(x);
    return d.current && C.observe(d.current), () => C.disconnect();
  }, []);
  const L = O((x) => {
    x.stopPropagation(), x.preventDefault();
    const C = x.currentTarget.getBoundingClientRect();
    if (C) {
      const $ = (x.clientX - C.left) / C.width;
      g($), k && (r == null || r($, x)), o == null || o($, x.clientX - C.left, C.width, x);
    }
  }, [k, r, o]), w = O((x) => {
    x.preventDefault(), v(!0), c == null || c();
    const C = x.currentTarget.getBoundingClientRect();
    if (C) {
      const $ = (x.clientX - C.left) / C.width;
      r == null || r($, x);
    }
  }, [r, c]), b = O(() => {
    k && (v(!1), l == null || l());
  }, [k, l]), V = O((x) => {
    g(0), f(!1), k && (v(!1), l == null || l()), a == null || a(x);
  }, [k, l, a]), M = O(() => {
    f(!0);
  }, []);
  return Z(() => {
    if (k) {
      const x = () => {
        v(!1), l == null || l();
      };
      return document.addEventListener("mouseup", x), () => {
        document.removeEventListener("mouseup", x);
      };
    }
  }, [k, l]), /* @__PURE__ */ m(G3, { ref: d, className: `land-video-progress-bar ${p ? "hover" : ""}`, children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: "land-video-progress-bar-list",
        onMouseMove: L,
        onMouseEnter: i ? (x) => i(y, x.clientX - x.currentTarget.getBoundingClientRect().left, x.currentTarget.getBoundingClientRect().width, x) : void 0,
        onMouseDown: w,
        onMouseUp: b,
        onMouseLeave: V,
        onMouseOver: M,
        children: [
          /* @__PURE__ */ s("div", { className: "land-video-progress-bar default" }),
          /* @__PURE__ */ s("div", { className: "land-video-progress-bar buffer", style: { transform: `scaleX(${t})` } }),
          /* @__PURE__ */ s("div", { className: "land-video-progress-bar hover", style: { transform: `scaleX(${y})` } }),
          /* @__PURE__ */ s("div", { className: "land-video-progress-bar marker", style: { transform: `scaleX(${e})`, backgroundColor: n } })
        ]
      }
    ),
    /* @__PURE__ */ s("div", { className: "land-video-progress-bar-thumb", style: { transform: `translateX(${e * (u || 0)}px)`, backgroundColor: n } })
  ] });
}, G3 = mn.div`
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
`, q3 = ({
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
}) => /* @__PURE__ */ m(J3, { children: [
  /* @__PURE__ */ m(Ai, { gap: 8, column: !0, children: [
    /* @__PURE__ */ s("span", { children: "倍数" }),
    /* @__PURE__ */ s(P0, { gap: 4, type: Be.ColumnRepeat, repeatNum: 3, children: e == null ? void 0 : e.map((i, a) => /* @__PURE__ */ m(
      Q3,
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
  /* @__PURE__ */ m(Ai, { justify: "space-between", width: "100%", children: [
    "自动循环",
    /* @__PURE__ */ s(z3, { checked: r, dark: !0, onChange: o })
  ] })
] }), J3 = mn.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  white-space: nowrap;
`, Q3 = mn.div`
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
`, Ji = (e) => {
  if (!e) return "00:00";
  if (typeof e == "string") return e;
  const t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), r = Math.round(e % 60), o = t < 10 ? "0" + t : t, i = n < 10 ? "0" + n : n, a = r < 10 ? "0" + r : r;
  return t > 0 ? o + ":" + i + ":" + a : i + ":" + a;
}, W3 = ({
  className: e = "",
  style: t,
  value: n,
  min: r = 0,
  max: o = 100,
  step: i = 1,
  range: a = !1,
  useDivider: c = !1,
  prefix: l,
  suffix: d,
  showTooltip: u = !1,
  tooltipPlacement: h = "top",
  tooltipFormatter: p = (x) => x.toString(),
  height: f = 4,
  thumbSize: k = 16,
  defaultBg: v = "var(--color-gray-4)",
  activeBg: y = "var(--color-primary-6)",
  thumbStyle: g,
  thumbClassName: L = "",
  onChange: w,
  onAfterChange: b,
  disabled: V = !1,
  ...M
}) => {
  const x = q(null), [C, $] = E(null), [S, T] = E(null), N = () => {
    if (a)
      return Array.isArray(n) ? [n[0], n[1]] : [r, o];
    const J = typeof n == "number" ? n : r;
    return [J, J];
  }, [j, A] = E(N);
  Z(() => {
    A(N());
  }, [n, r, o, a]);
  const I = (J) => (J - r) / (o - r) * 100, F = (J) => {
    const Q = J / 100 * (o - r) + r, te = Math.round(Q / i) * i;
    return Math.min(o, Math.max(r, te));
  }, B = (J) => {
    if (!x.current) return 0;
    const Q = x.current.getBoundingClientRect(), te = (J.clientX - Q.left) / Q.width * 100;
    return Math.min(100, Math.max(0, te));
  }, z = O((J, Q) => {
    V || A((te) => {
      const oe = [...te];
      if (oe[J] = Q, a && oe[0] > oe[1])
        return J === 0 ? [oe[0], oe[0]] : [oe[1], oe[1]];
      if (w) {
        const ae = a ? oe : oe[0];
        w(ae);
      }
      return oe;
    });
  }, [a, V, w]), P = (J) => (Q) => {
    Q.preventDefault(), $(J);
  };
  Z(() => {
    if (C === null) return;
    const J = (te) => {
      const oe = B(te), ae = F(oe);
      z(C, ae);
    }, Q = () => {
      if ($(null), b) {
        const te = a ? j : j[0];
        b(te);
      }
    };
    return document.addEventListener("mousemove", J), document.addEventListener("mouseup", Q), () => {
      document.removeEventListener("mousemove", J), document.removeEventListener("mouseup", Q);
    };
  }, [C, z, b, a, j]);
  const R = (J) => {
    if (V || C !== null) return;
    const Q = B(J), te = F(Q);
    if (a) {
      const oe = Math.abs(te - j[0]), ae = Math.abs(te - j[1]), Me = oe <= ae ? 0 : 1;
      z(Me, te);
    } else
      z(0, te);
  }, H = () => {
    if (!c) return null;
    const J = [], Q = Math.floor((o - r) / i);
    for (let te = 0; te <= Q; te++) {
      const oe = r + te * i, ae = I(oe);
      J.push(
        /* @__PURE__ */ s(
          "div",
          {
            className: "land-slider-divider",
            style: { left: `${ae}%` }
          },
          te
        )
      );
    }
    return J;
  }, D = (J, Q) => !u || !(C === J || S === J) ? null : /* @__PURE__ */ s(
    "div",
    {
      className: `land-slider-tooltip land-slider-tooltip-${h}`,
      children: p(Q)
    }
  ), U = I(j[0]), X = a ? I(j[1]) : U, _ = a ? U : 0, W = a ? X - U : U;
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-slider-wrapper ${V ? "land-slider-disabled" : ""} ${e}`,
      style: t,
      ...M,
      children: [
        l && /* @__PURE__ */ s("div", { className: "land-slider-prefix", children: l }),
        /* @__PURE__ */ m(
          "div",
          {
            ref: x,
            className: "land-slider",
            onClick: R,
            children: [
              /* @__PURE__ */ m(
                "div",
                {
                  className: "land-slider-track",
                  style: {
                    height: `${f}px`,
                    backgroundColor: v
                  },
                  children: [
                    /* @__PURE__ */ s(
                      "div",
                      {
                        className: "land-slider-track-active",
                        style: {
                          left: `${_}%`,
                          width: `${W}%`,
                          backgroundColor: y
                        }
                      }
                    ),
                    H()
                  ]
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `land-slider-thumb ${L} ${C === 0 ? "land-slider-thumb-dragging" : ""}`,
                  style: {
                    left: `${U}%`,
                    width: `${k}px`,
                    height: `${k}px`,
                    ...g
                  },
                  onMouseDown: P(0),
                  onMouseEnter: () => T(0),
                  onMouseLeave: () => T(null),
                  children: D(0, j[0])
                }
              ),
              a && /* @__PURE__ */ s(
                "div",
                {
                  className: `land-slider-thumb ${L} ${C === 1 ? "land-slider-thumb-dragging" : ""}`,
                  style: {
                    left: `${X}%`,
                    width: `${k}px`,
                    height: `${k}px`,
                    ...g
                  },
                  onMouseDown: P(1),
                  onMouseEnter: () => T(1),
                  onMouseLeave: () => T(null),
                  children: D(1, j[1])
                }
              )
            ]
          }
        ),
        d && /* @__PURE__ */ s("div", { className: "land-slider-suffix", children: d })
      ]
    }
  );
}, _m = ({
  src: e,
  ratio: t,
  radius: n = "0px",
  forwardSecond: r = 5,
  useKeyImg: o,
  onFullWidthChange: i,
  useKeyControls: a,
  autoPlay: c,
  className: l = "",
  style: d,
  videoClassName: u = "",
  videoStyle: h,
  showControls: p,
  usePrevEpisode: f,
  useNextEpisode: k,
  onPrevEpisodeClick: v,
  onNextEpisodeClick: y
}) => {
  const g = q(null), L = q(null), w = q(null), [b, V] = E(1), [M, x] = E(0), [C, $] = E(0), [S, T] = E(0), [N, j] = E(!0), [A, I] = E(!1), [F, B] = E(!1), [z, P] = E(!1), [R, H] = E(!1), [D, U] = E(!1);
  q(null);
  const X = O(() => {
    if (g.current && !z) {
      const G = g.current;
      if ($(G.currentTime), G.buffered.length > 0) {
        const re = G.buffered.end(G.buffered.length - 1);
        T(re);
      }
      g.current.currentTime === 0 && j(!0);
    }
  }, [z]), _ = O(async () => {
    if (g.current)
      try {
        g.current.paused ? (await g.current.play(), H(!0)) : (g.current.pause(), H(!1));
      } catch (G) {
        console.error("播放失败:", G), H(!1);
      }
  }, []), [W, J] = E(0), [Q, te] = E(!1), oe = K(() => (b || Number(t) || 1.7777777777777777) < 1 ? 100 : 200, [b, t]), ae = O((G, re, Ce) => {
    if (!o) return;
    const De = L.current;
    De && (De.currentTime = G * M, re < oe / 2 ? J(0) : re < Ce - oe / 2 ? J(re - oe / 2) : J(Ce - oe));
  }, [Q]), Me = O(() => {
    P(!0);
  }, []), sr = O(() => {
    P(!1);
  }, []), ir = O((G) => {
    if (!g.current || !M) return;
    const re = G * M;
    g.current.currentTime = re, $(re), g.current.paused && N && _();
  }, [M, N, _]), [Ye, gn] = E(100), [vn, ml] = E(100), [Ke, kn] = E(!0), ts = q(null), [ns, rs] = E(!1);
  O((G) => {
    g.current && (gn(G), g.current.volume = G / 100, G > 0 && Ke && kn(!1));
  }, [Ke]), Z(() => {
    Ye !== 0 && (ml(Ye), kn(!1), rs(Ye < 100)), Ye === 0 && kn(!0);
  }, [Ye]);
  const ar = O(() => {
    g.current && (Ke ? vn > 0 ? (g.current.volume = vn / 100, gn(vn)) : (g.current.volume = 1, gn(100)) : (g.current.volume = 0, gn(0)), kn(!Ke));
  }, [Ke, vn]);
  Z(() => {
    g.current && (g.current.pause(), H(!1), $(0), T(0), x(0), j(!0), I(!1), B(!1), lr(!1), ur(!1), pr(!1), te(!1)), L.current && (L.current.currentTime = 0);
  }, [e]), Ec(ts, () => {
    ns && rs(!1);
  });
  const [os, gl] = E(1), Ln = O((G, re) => {
    gl(re.value), g.current && (console.log(G, g.current.playbackRate), g.current.playbackRate = G);
  }, []), [ft, ss] = E(!1), is = async () => {
    if (!g.current) return;
    const G = g.current;
    try {
      G !== document.pictureInPictureElement ? await G.requestPictureInPicture() : await document.exitPictureInPicture();
    } catch (re) {
      console.error("Error with Picture-in-Picture:", re);
    }
  }, [mt, as] = E(!1), [nt, cs] = E(!1), wn = O(() => {
    if (!g.current) return;
    const G = g.current;
    G.requestFullscreen && G.requestFullscreen();
  }, []), [cr, lr] = E(!1), [dr, ur] = E(!1), [hr, pr] = E(!1);
  Z(() => {
    if (cr) {
      const G = setTimeout(() => {
        lr(!1);
      }, 800);
      return () => clearTimeout(G);
    }
  }, [cr]), Z(() => {
    if (dr) {
      const G = setTimeout(() => {
        ur(!1);
      }, 800);
      return () => clearTimeout(G);
    }
  }, [dr]), Z(() => {
    if (hr) {
      const G = setTimeout(() => {
        pr(!1);
      }, 800);
      return () => clearTimeout(G);
    }
  }, [hr]);
  const fr = O((G) => {
    if (!g.current || !a) return;
    const re = g.current;
    if (!(document.activeElement !== re && !document.fullscreenElement))
      switch (G.preventDefault(), G.code) {
        case "ArrowLeft":
          if (re.paused) return;
          const Ce = Math.max(0, re.currentTime - r);
          re.currentTime = Ce, $(Ce), lr(!0);
          break;
        case "ArrowRight":
          if (re.paused) return;
          const De = Math.min(re.duration, re.currentTime + r);
          re.currentTime = De, $(De), ur(!0);
          break;
        case "Space":
          G.preventDefault(), _(), pr(!0);
          break;
        case "KeyM":
          G.preventDefault(), ar();
          break;
        case "KeyF":
          G.preventDefault(), wn();
          break;
      }
  }, [a, r, _, ar, wn]);
  Z(() => {
    if (a)
      return document.addEventListener("keydown", fr), () => {
        document.removeEventListener("keydown", fr);
      };
  }, [a, fr]), Z(() => {
    if (!g.current) return;
    const G = g.current, re = () => {
      H(!0), j(!1);
    }, Ce = () => {
      H(!1);
    }, De = () => {
      H(!1), j(!0);
    };
    return G.addEventListener("play", re), G.addEventListener("pause", Ce), G.addEventListener("ended", De), () => {
      G.removeEventListener("play", re), G.removeEventListener("pause", Ce), G.removeEventListener("ended", De);
    };
  }, []);
  const vl = O((G) => {
    const re = G.target, Ce = re.clientWidth / re.clientHeight;
    V(Ce), x(re.duration), $(0), T(0), j(!0), I(!1), B(!1);
  }, []), mr = O(() => {
    if (!w.current) return;
    const re = w.current.offsetWidth, Ce = 120, De = 60, Ll = f || k ? 80 : 0, wl = Ce + De + Ll, yl = re < wl + 240 + 30;
    U(yl);
  }, [f, k]);
  Z(() => {
    mr();
    const G = new ResizeObserver(() => {
      mr();
    });
    return w.current && G.observe(w.current), () => {
      G.disconnect();
    };
  }, [mr]);
  const kl = K(() => t || (b && b > 0 ? b.toString() : "auto"), [t, b]);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-video ${A ? "error" : ""} ${nt ? "fullView" : ""} ${l}`,
      style: { aspectRatio: kl, ...d },
      children: [
        A ? /* @__PURE__ */ s(Pc, { type: "error", title: "视频错误", direction: "column", noBg: !0 }) : /* @__PURE__ */ s(pe, { children: /* @__PURE__ */ s(
          "video",
          {
            ref: g,
            src: e,
            loop: ft,
            autoPlay: c,
            muted: Ke,
            onTimeUpdate: X,
            onWaiting: () => B(!0),
            onCanPlay: () => B(!1),
            onError: () => I(!0),
            onLoadedMetadata: vl,
            style: { borderRadius: n, aspectRatio: t || "auto", objectFit: t ? "cover" : "contain", ...h },
            className: `land-video ${u}`
          }
        ) }),
        !A && /* @__PURE__ */ s(
          $l,
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
                    /* @__PURE__ */ m(pe, { children: [
                      /* @__PURE__ */ s(
                        K3,
                        {
                          curPercentage: C / M,
                          bufferPercentage: S / M,
                          onClick: ir,
                          onMouseEnter: o ? (G, re, Ce) => {
                            te(!0), ae(G, re, Ce);
                          } : void 0,
                          onMove: o ? (G, re, Ce) => ae == null ? void 0 : ae(G, re, Ce) : void 0,
                          onMouseLeave: o ? () => te(!1) : void 0,
                          onDragStart: Me,
                          onDragEnd: sr
                        }
                      ),
                      o && /* @__PURE__ */ s(
                        "div",
                        {
                          className: "land-video-controls-keyImg-container",
                          style: { transform: `translateX(${W}px)`, opacity: Q ? 1 : 0 },
                          children: o && /* @__PURE__ */ s(
                            "video",
                            {
                              ref: L,
                              src: e,
                              muted: !0,
                              preload: "metadata",
                              style: { width: oe, height: oe / (b || Number(t) || 16 / 9), objectFit: "cover" },
                              onLoadedMetadata: () => {
                                L.current && g.current && (L.current.currentTime = g.current.currentTime);
                              }
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ m("div", { className: "land-video-controls-container", ref: w, children: [
                      /* @__PURE__ */ m("div", { className: "land-video-controls-left", children: [
                        f && /* @__PURE__ */ s(
                          "a",
                          {
                            className: "land-video-controls-button prev",
                            role: "button",
                            onClick: v,
                            children: /* @__PURE__ */ s(Y, { name: "arrow-nav", size: 20 })
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
                            children: R ? /* @__PURE__ */ s(Y, { name: "video-play", size: 20 }) : /* @__PURE__ */ s(Y, { name: "video-pause", size: 32 })
                          }
                        ),
                        k && /* @__PURE__ */ s(
                          "a",
                          {
                            className: "land-video-controls-button next",
                            role: "button",
                            onClick: y,
                            title: "下一个",
                            children: /* @__PURE__ */ s(Y, { name: "arrow-nav", size: 20 })
                          }
                        ),
                        /* @__PURE__ */ m("div", { className: "land-video-controls-time", children: [
                          Ji(C),
                          " /",
                          " ",
                          Ji(M)
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
                                  onClick: ar,
                                  title: `${Ke ? "取消静音" : "静音"} (M)`,
                                  children: Ke ? /* @__PURE__ */ s(
                                    Y,
                                    {
                                      name: "volume-muted",
                                      size: 20
                                    }
                                  ) : /* @__PURE__ */ s(
                                    Y,
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
                                  ref: ts,
                                  className: `land-video-volume-slider ${ns ? "show" : ""}`,
                                  children: /* @__PURE__ */ s(
                                    W3,
                                    {
                                      value: Ye,
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
                      D ? /* @__PURE__ */ s("div", { className: "land-video-controls-right", children: /* @__PURE__ */ s(
                        hn,
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
                                  className: `land-video-controls-dropdown-speed-btn ${os === G ? "active" : ""}`,
                                  onClick: () => Ln(G, { value: G }),
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
                                className: `land-video-controls-dropdown-toggle-btn ${ft ? "active" : ""}`,
                                onClick: () => ss(!ft),
                                children: [
                                  /* @__PURE__ */ s(Y, { name: "loop", size: 16 }),
                                  /* @__PURE__ */ s("span", { children: "循环播放" }),
                                  /* @__PURE__ */ s("div", { className: `land-video-controls-dropdown-toggle ${ft ? "active" : ""}` })
                                ]
                              }
                            ) }),
                            /* @__PURE__ */ s("div", { className: "land-video-controls-dropdown-divider" }),
                            /* @__PURE__ */ m("div", { className: "land-video-controls-dropdown-buttons", children: [
                              /* @__PURE__ */ m(
                                "button",
                                {
                                  className: "land-video-controls-button small-screen",
                                  onClick: is,
                                  children: [
                                    /* @__PURE__ */ s(Y, { name: "video-small-screen", size: 20 }),
                                    /* @__PURE__ */ s("span", { children: "画中画" })
                                  ]
                                }
                              ),
                              i && /* @__PURE__ */ m(
                                "button",
                                {
                                  className: "land-video-controls-button full-width",
                                  onClick: () => {
                                    as(!mt), i == null || i(!mt);
                                  },
                                  children: [
                                    /* @__PURE__ */ s(
                                      Y,
                                      {
                                        name: "video-full-width",
                                        size: 20,
                                        reverse: mt
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
                                  onClick: () => cs(!nt),
                                  children: [
                                    nt ? /* @__PURE__ */ s(Y, { name: "zoom-out", size: 20 }) : /* @__PURE__ */ s(Y, { name: "zoom-in", size: 20 }),
                                    /* @__PURE__ */ s("span", { children: nt ? "退出网页全屏" : "网页全屏" })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ m(
                                "button",
                                {
                                  className: "land-video-controls-button full-screen",
                                  onClick: wn,
                                  children: [
                                    /* @__PURE__ */ s(Y, { name: "zoom-in-arrow", size: 20 }),
                                    /* @__PURE__ */ s("span", { children: "全屏模式" })
                                  ]
                                }
                              )
                            ] })
                          ] }),
                          children: /* @__PURE__ */ s("button", { className: "land-video-controls-button more", children: /* @__PURE__ */ s(Y, { name: "more", size: 20 }) })
                        }
                      ) }) : /* @__PURE__ */ m("div", { className: "land-video-controls-right", children: [
                        /* @__PURE__ */ m("button", { className: "land-video-controls-button setting hover-pop", children: [
                          /* @__PURE__ */ s(Y, { name: "setting", size: 20 }),
                          /* @__PURE__ */ s("div", { className: "land-video-setting-panel", children: /* @__PURE__ */ s("div", { className: "land-video-setting-content", children: /* @__PURE__ */ s(
                            q3,
                            {
                              rateValue: os,
                              onRateChange: (G, re) => Ln == null ? void 0 : Ln(G, re),
                              loop: ft,
                              onLoopChange: () => ss(!ft)
                            }
                          ) }) })
                        ] }),
                        /* @__PURE__ */ m(
                          "button",
                          {
                            className: "land-video-controls-button small-screen hover-pop",
                            onClick: is,
                            children: [
                              /* @__PURE__ */ s(
                                Y,
                                {
                                  name: "video-small-screen",
                                  size: 20
                                }
                              ),
                              /* @__PURE__ */ s(ve, { content: "画中画模式", theme: "dark" })
                            ]
                          }
                        ),
                        i && /* @__PURE__ */ m(
                          "button",
                          {
                            className: "land-video-controls-button full-width hover-pop",
                            onClick: () => {
                              as(!mt), i == null || i(!mt);
                            },
                            children: [
                              /* @__PURE__ */ s(
                                Y,
                                {
                                  name: "video-full-width",
                                  size: 20,
                                  reverse: mt
                                }
                              ),
                              /* @__PURE__ */ s(ve, { content: "宽屏模式", theme: "dark" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ m(
                          "button",
                          {
                            className: "land-video-controls-button full-view hover-pop",
                            onClick: () => cs(!nt),
                            children: [
                              nt ? /* @__PURE__ */ s(Y, { name: "zoom-out", size: 20 }) : /* @__PURE__ */ s(Y, { name: "zoom-in", size: 20 }),
                              /* @__PURE__ */ s(
                                ve,
                                {
                                  content: nt ? "退出网页全屏模式" : "网页全屏模式",
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
                            onClick: wn,
                            title: "全屏模式 (F)",
                            children: [
                              /* @__PURE__ */ s(Y, { name: "zoom-in-arrow", size: 20 }),
                              /* @__PURE__ */ s(ve, { content: "全屏模式", theme: "dark" })
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
              content: F && !N ? /* @__PURE__ */ s(Ac, { size: 32, color: "white", strokeSize: 4 }) : /* @__PURE__ */ s("div", { className: "land-video-tags-container", children: R ? /* @__PURE__ */ s(Y, { name: "video-play", size: 20 }) : /* @__PURE__ */ s(Y, { name: "video-pause", size: 32 }) }),
              style: {
                opacity: hr || F || !R ? 1 : 0,
                pointerEvents: "none"
              }
            },
            lcOption: {
              content: /* @__PURE__ */ m("div", { className: "land-video-tags-container", children: [
                /* @__PURE__ */ s(Y, { name: "arrow-double", className: "back", size: 28 }),
                r,
                "秒"
              ] }),
              style: { opacity: cr ? 1 : 0 }
            },
            rcOption: {
              content: /* @__PURE__ */ m("div", { className: "land-video-tags-container", children: [
                /* @__PURE__ */ s(Y, { name: "arrow-double", className: "front", size: 28 }),
                r,
                "秒"
              ] }),
              style: { opacity: dr ? 1 : 0 }
            }
          }
        )
      ]
    }
  );
}, Um = ({
  placeholder: e = "请输入",
  value: t,
  onChange: n,
  maxHeight: r = 80
}) => {
  const [o, i] = E(40), [a, c] = E(32), l = q(null);
  return Z(() => {
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
        onChange: (d) => n == null ? void 0 : n(d.target.value, d)
      }
    )
  ] });
}, zm = ({
  type: e = "input",
  value: t = "",
  onChange: n,
  height: r = "auto",
  maxHeight: o,
  placeholder: i,
  className: a = "",
  style: c
}) => {
  const [l, d] = E(!1), [u, h] = E(t), p = q(null);
  Z(() => {
    h(t);
  }, [t]);
  const f = () => {
    d(!0), setTimeout(() => {
      if (p.current) {
        p.current.focus();
        const L = p.current.value.length;
        p.current.setSelectionRange(L, L), p.current.scrollTop = p.current.scrollHeight;
      }
    }, 0);
  }, k = () => {
    d(!1), n && u !== t && n(u);
  }, v = (L) => {
    L.key === "Enter" && !L.shiftKey && (L.preventDefault(), k()), L.key === "Escape" && (h(t), d(!1));
  }, y = (L) => {
    h(L.target.value);
  }, g = () => {
    const L = {};
    return r !== "auto" && (L.height = `${r}px`), o && (L.maxHeight = `${o}px`), L;
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
          value: u,
          onChange: y,
          onBlur: k,
          onKeyDown: v,
          placeholder: i
        }
      ) : /* @__PURE__ */ s(
        "textarea",
        {
          ref: p,
          value: u,
          onChange: y,
          onBlur: k,
          onKeyDown: v,
          placeholder: i,
          style: g()
        }
      ) : /* @__PURE__ */ s("div", { className: `display-text ${e} ${u ? "" : "placeholder"}`, style: e === "textarea" ? g() : {}, children: u || i })
    }
  );
}, Xm = ({
  type: e = "1",
  ratio: t = 1,
  gap: n = 2,
  style: r,
  className: o = "",
  gridStyle: i,
  gridClassName: a = "",
  children: c
}) => {
  const l = K(() => {
    const u = e == null ? void 0 : e.split("-")[0];
    return Number(u) ? Number(u) : 1;
  }, [e]), d = K(() => t > 1 ? "horizontal" : t < 1 ? "vertical" : "square", [t]);
  return /* @__PURE__ */ m("div", { className: `land-grid-template ${d} type-${e} ${o}`, style: { gap: n, aspectRatio: t, ...r }, children: [
    c,
    !c && /* @__PURE__ */ s(pe, { children: Array.from({ length: l }).map((u, h) => /* @__PURE__ */ s("div", { className: `land-grid-template-item ${a}`, style: i }, h)) })
  ] });
}, em = [], tm = Wi(
  ({
    highlightString: e = em,
    highlightBg: t = "var(--color-error-light)",
    highlightColor: n = "var(--color-error)",
    formatHighlightString: r,
    className: o,
    style: i,
    inputClassName: a,
    inputStyle: c,
    contentClassName: l,
    contentStyle: d,
    value: u = "",
    onScroll: h,
    onChange: p,
    textAreaRef: f,
    placeholder: k = "请输入",
    disabled: v,
    autoResize: y,
    ...g
  }, L) => {
    const w = q(null), b = q(null), V = O(() => {
      !w.current || !b.current || (w.current.scrollTop = b.current.scrollTop);
    }, []), M = O(
      (S) => {
        console.log(1), h == null || h(S), V();
      },
      [h]
    ), x = O(
      (S) => {
        p == null || p(S), y ? C() : V();
      },
      [p]
    );
    Sl(L, () => ({
      focus: () => {
        b != null && b.current && b.current.focus();
      }
      // 你可以在这里添加更多的属性或方法
    })), Z(() => {
      !b.current || !f || (f.current = b.current);
    }, []);
    const C = () => {
      b.current && (b.current.style.height = "auto", b.current.style.height = `${b.current.scrollHeight}px`);
    }, $ = K(() => {
      const S = [];
      let T = "", N = "default", j = 0;
      for (let I = 0; I < u.length; I++)
        T += u[I], S[j] = {
          type: N,
          msg: T
        }, e.some((B) => T.includes(B) ? (N = B, !0) : !1) && (S[j].msg = T.split(N)[0], S.push({
          type: N,
          msg: N
        }), j += 2, T = "", N = "default");
      const A = S.map(
        (I) => {
          var F;
          return (F = I.msg) != null && F.includes(`
`) ? Object.assign(I, {
            msg: /* @__PURE__ */ s(pe, { children: I.msg })
          }) : I;
        }
      );
      return u.endsWith(`
`) && A.push({ type: "default", msg: /* @__PURE__ */ s("br", {}) }), A;
    }, [u, e]);
    return /* @__PURE__ */ m("div", { className: `land-highlight-textarea ${o}`, style: i, children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: `land-highlight-textarea-content ${l}`,
          style: d,
          ref: w,
          children: $.length > 0 ? $.map((S, T) => S.type === "default" ? S.msg : r ? r(S.msg) : /* @__PURE__ */ s(
            "span",
            {
              className: "radius-4",
              style: {
                color: n,
                backgroundColor: t
              },
              children: S.msg
            },
            S.msg + T
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
          value: u,
          onScroll: y ? void 0 : M,
          onChange: x,
          ref: b,
          placeholder: k,
          disabled: v
        }
      )
    ] });
  }
), nm = (e, t) => {
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
}, Km = ({
  value: e = "",
  showNum: t = !0,
  maxLength: n = 300,
  fail: r,
  disabledInput: o = !1,
  onChange: i,
  onFocus: a,
  onBlur: c,
  placeholder: l,
  highlightString: d = [],
  formatHighlightString: u,
  className: h = "",
  style: p,
  ...f
}) => {
  const k = K(() => nm(e, d), [e, d]), v = q(null), y = q(null), g = O(() => {
    !v.current || !y.current || (v.current.scrollLeft = y.current.scrollLeft);
  }, []), L = O(() => {
    v.current && (v.current.scrollLeft = 0), c == null || c();
  }, []), [w, b] = E(!1);
  return /* @__PURE__ */ m("div", { className: `land-highlight-input ${h}`, style: p, children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: `land-highlight-input-container  ${r || Number(e == null ? void 0 : e.length) > n ? "error" : ""} ${w ? "hover" : ""}`,
        onMouseOver: () => b(!0),
        onMouseOut: () => b(!1),
        children: [
          /* @__PURE__ */ m("div", { className: "land-highlight-input-content", children: [
            e ? /* @__PURE__ */ s(
              "div",
              {
                ref: v,
                className: `land-highlight-input-hight-string ${o ? "disabled" : ""}`,
                children: k.map((V, M) => V.type === "default" ? V.msg : u ? u(V.msg) : /* @__PURE__ */ s("span", { className: "land-highlight-input-hight-string-item", children: V.msg }, V.msg + M))
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
                ref: y,
                id: "highlight-input",
                type: "text",
                className: "land-highlight-input-input",
                disabled: o,
                value: e,
                onChange: (V) => {
                  g == null || g(), i == null || i(V);
                },
                onScroll: () => g(),
                onFocus: () => a == null ? void 0 : a(),
                onBlur: L,
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
}, Gm = ({
  value: e,
  prefix: t,
  ...n
}) => {
  const r = q(null), [o, i] = E(0), a = q(null), [c, l] = E(0);
  return Z(() => {
    var d, u;
    (d = r.current) != null && d.clientWidth ? i((u = r.current) == null ? void 0 : u.clientWidth) : i(0);
  }, [t]), Z(() => {
    const d = document.querySelector(".land-prefix-input .prefix-textarea");
    if (r.current && d) {
      const u = (h) => {
        r.current.style = `top: ${1 - Number(h.target.scrollTop)}px`;
      };
      return d == null || d.addEventListener("scroll", u), () => {
        d == null || d.removeEventListener("scroll", u);
      };
    }
  }, [t]), Z(() => {
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
      tm,
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
}, qm = ({
  data: e = [],
  activeGroup: t,
  value: n,
  onChange: r,
  keyboardControl: o = !1
}) => {
  if (e.length <= 1) return null;
  const [i, a] = E(n ?? ""), [c, l] = E(t ?? "");
  Z(() => a(n ?? ""), [n]), Z(() => l(t ?? ""), [t]);
  const d = q(), u = K(() => {
    var v, y;
    return (y = (v = e == null ? void 0 : e.filter((g) => g.id === c)[0]) == null ? void 0 : v.mediaData) == null ? void 0 : y.map((g) => g.id);
  }, [e, c]), h = K(() => e == null ? void 0 : e.map((v) => v.id), [e]), p = K(() => u == null ? void 0 : u.indexOf(i), [u, i]), f = K(() => h == null ? void 0 : h.indexOf(c), [h, c]), k = (v) => e.slice(0, v).reduce((y, g) => y + g.mediaData.length, 0);
  return Z(() => {
    if (n === void 0 || f === -1 || p === -1) return;
    let v = k(f);
    u.length <= 6 ? d.current && d.current.scrollTo({ top: (v - 1) * 96 + f * 8 + (v - f) * 1, behavior: "smooth" }) : p <= 5 ? d.current && d.current.scrollTo({ top: (v - 1) * 96 + f * 8 + (v - f) * 1, behavior: "smooth" }) : f === 0 ? d.current && d.current.scrollTo({ top: (v + Math.floor(p / 7) * 7) * 96 + f * 8 + (v - f + Math.floor(p / 7) * 7) * 1, behavior: "smooth" }) : d.current && d.current.scrollTo({ top: (v + 6 + Math.floor((p - 6) / 7) * 7) * 96 + f * 8 + (v - f + 6 + Math.floor((p - 6) / 7) * 7) * 1, behavior: "smooth" });
  }, [p, f]), Z(() => {
    if (!o) return;
    const v = (y) => {
      var g, L, w, b, V, M, x, C, $;
      if (!(y.repeat || f === -1 || p === -1))
        if (["TEXTAREA", "INPUT"].indexOf(y.target.tagName) === -1 && y.preventDefault(), y.code === "ArrowUp" || y.key === "ArrowUp") {
          if (p > 0)
            a(u[p - 1]), r == null || r((g = e[f]) == null ? void 0 : g.mediaData[p - 1], e[f]);
          else if (f > 0) {
            l(h[f - 1] ?? "");
            const S = (w = (L = e == null ? void 0 : e.filter((T) => T.id === h[f - 1])[0]) == null ? void 0 : L.mediaData) == null ? void 0 : w.length;
            a((V = (b = e[f - 1]) == null ? void 0 : b.mediaData[S - 1]) == null ? void 0 : V.id), r == null || r((M = e[f - 1]) == null ? void 0 : M.mediaData[S - 1], e[f - 1]);
          }
        } else (y.code === "ArrowDown" || y.key === "ArrowDown") && (p < (u == null ? void 0 : u.length) - 1 ? (a(u[p + 1]), r == null || r((x = e[f]) == null ? void 0 : x.mediaData[p + 1], e[f])) : f < h.length - 1 && (l(h[f + 1] ?? ""), a((C = e[f + 1]) == null ? void 0 : C.mediaData[0].id), r == null || r(($ = e[f + 1]) == null ? void 0 : $.mediaData[0], e[f + 1])));
    };
    return window.addEventListener("keydown", v), () => {
      window.removeEventListener("keydown", v);
    };
  }, [i, c, o]), Z(() => {
    const v = document.querySelector(".currentPreviewCard");
    v && v.scrollIntoView({ behavior: "smooth" });
  }, []), /* @__PURE__ */ s("div", { className: "land-swiper-media-preview", onClick: (v) => v.stopPropagation(), children: /* @__PURE__ */ s(
    "div",
    {
      ref: d,
      className: "land-swiper-media-preview-content",
      children: e == null ? void 0 : e.map((v, y) => {
        var g;
        return /* @__PURE__ */ s(
          "div",
          {
            className: `land-swiper-media-preview-group ${v.id === t ? "active" : ""}`,
            children: (g = v.mediaData) == null ? void 0 : g.map((L, w) => /* @__PURE__ */ m(pe, { children: [
              w !== 0 && /* @__PURE__ */ s(Re, { gap: 8 }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `land-swiper-media-preview-item ${n === L.id ? "active" : ""}`,
                  onClick: () => {
                    r == null || r(L, v);
                  },
                  children: /* @__PURE__ */ s(
                    H0,
                    {
                      url: L.url,
                      ratio: 1,
                      style: { width: "80px", borderRadius: "8px" },
                      imgStyle: { objectFit: "cover", borderRadius: "8px" }
                    }
                  )
                }
              )
            ] }, L.id ?? w))
          },
          v.id ?? y
        );
      })
    }
  ) });
};
export {
  Be as GridType,
  Y as Icon,
  $l as LandAffixContainer,
  Pc as LandAlert,
  cm as LandAnchor,
  Ko as LandAudio,
  lm as LandAutoContainer,
  Um as LandAutoWidthHeightTextarea,
  dm as LandBadge,
  um as LandBreadCrumb,
  he as LandButton,
  N0 as LandCalendar,
  Go as LandCheck,
  hm as LandCheckbox,
  pm as LandCheckedContainer,
  fm as LandCollapse,
  gm as LandColorPicker,
  mm as LandContent,
  vm as LandDatePicker,
  km as LandDialog,
  Re as LandDivider,
  zm as LandDoubleClickInput,
  Lm as LandDrawer,
  hn as LandDropdown,
  wm as LandEllipsis,
  Ai as LandFlex,
  ym as LandFooter,
  P0 as LandGrid,
  Xm as LandGridTemplate,
  Mm as LandHeader,
  Km as LandHighlightInput,
  tm as LandHighlightTextarea,
  H0 as LandImage,
  Qn as LandInput,
  Cm as LandLayout,
  on as LandLink,
  Ac as LandLoading,
  Zc as LandMenu,
  xm as LandMessage,
  Pe as LandNumberInput,
  Nm as LandPagination,
  Vm as LandPopConfirm,
  ve as LandPopOver,
  Gm as LandPrefixValueInput,
  Sm as LandProgress,
  _3 as LandRadio,
  $m as LandRadioGroup,
  Tm as LandRate,
  Dc as LandSelect,
  jm as LandSelectTree,
  I0 as LandSkeleton,
  Am as LandState,
  Pm as LandStatistic,
  Hm as LandSteps,
  Im as LandSwiper,
  qm as LandSwiperMediaPreview,
  z3 as LandSwitch,
  Dm as LandTable,
  Rm as LandTabs,
  X3 as LandTag,
  Em as LandTagInput,
  Fm as LandTextarea,
  Bm as LandTimeline,
  Om as LandTitle,
  Zm as LandUploader,
  _m as LandVideo,
  Ym as LandWatermark,
  bm as message,
  Ec as useClickOutside,
  Ji as useFormateTime,
  nm as useGetHighlightStr
};
//# sourceMappingURL=index.es.js.map
