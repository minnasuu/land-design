import { jsxs as m, jsx as i, Fragment as he } from "react/jsx-runtime";
import * as $r from "react";
import De, { useMemo as U, useState as B, useEffect as Y, createContext as Ct, useRef as q, useLayoutEffect as Nc, useId as Tr, useContext as ge, useInsertionEffect as cs, useCallback as O, Children as Vc, isValidElement as Sc, forwardRef as ls, Fragment as Gt, createElement as ds, Component as jc, useDebugValue as yo, useImperativeHandle as $c } from "react";
const r3 = ({
  ltOption: e,
  rtOption: t,
  rtOption2: n,
  lbOption: r,
  rbOption: o,
  tcOption: s,
  bcOption: a,
  centerOption: c,
  lcOption: l,
  rcOption: d,
  customOption: u,
  disabled: h,
  onClick: p,
  children: f,
  className: k,
  style: g,
  ...C
}) => {
  const v = U(
    () => [
      { option: e, placement: "lt" },
      { option: t, placement: "rt" },
      { option: n, placement: "rt" },
      { option: r, placement: "lb" },
      { option: o, placement: "rb" },
      { option: l, placement: "lc" },
      { option: d, placement: "rc" },
      { option: s, placement: "tc" },
      { option: a, placement: "bc" },
      { option: c, placement: "center" },
      { option: u, placement: "custom" }
    ],
    [e, t, r, o, l, d, s, a, c, u]
  ), [w, y] = B(!1), [x, N] = B(!1), L = (A) => A.hoverShow ? w ? 1 : 0 : A.hoverHide && x ? 0 : 1;
  Y(() => {
    const A = (T) => {
      y(!1), N(!1), T.stopPropagation();
    };
    return document.body.addEventListener("wheel", A), () => {
      document.body.removeEventListener("wheel", A);
    };
  }, []);
  const M = "var(--padding-m)", b = (A, T, H) => {
    const F = T !== void 0 ? T : M;
    switch (A) {
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
        return H;
      default:
        return "auto";
    }
  }, j = (A, T) => {
    const H = T !== void 0 ? T : M;
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
        return H;
      default:
        return "auto";
    }
  }, S = (A, T, H) => {
    const F = T !== void 0 ? T : M;
    switch (A) {
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
        return H;
      default:
        return "auto";
    }
  }, D = (A, T) => {
    const H = T !== void 0 ? T : M;
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
        return H;
      default:
        return "auto";
    }
  }, V = (A) => {
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
      style: g,
      onClick: (A) => p == null ? void 0 : p(A),
      onMouseOver: () => {
        h || (y(!0), N(!0));
      },
      onMouseLeave: () => {
        y(!1), N(!1);
      },
      onWheel: (A) => A.stopPropagation(),
      ...C,
      children: [
        f,
        v == null ? void 0 : v.map(
          (A, T) => {
            var H;
            return A.option ? /* @__PURE__ */ i(
              "div",
              {
                style: {
                  left: b(A.placement, A.option.gap, A.option.left || 0),
                  right: j(A.placement, A.option.gap),
                  top: S(A.placement, A.option.gap, A.option.top || 0),
                  bottom: D(A.placement, A.option.gap),
                  transform: V(A.placement),
                  opacity: L(A.option),
                  zIndex: A.option.zIndex || 2,
                  animation: A.option.hoverShow && w ? A.option.showAnimation : "none",
                  ...A.option.style
                },
                className: `land-affix-container-item ${A.option.hoverShow ? "hoverShow" : ""} ${A.placement} absolute ${A.option.className ?? ""}`,
                onClick: (F) => {
                  var E, K;
                  F.stopPropagation(), (K = (E = A.option) == null ? void 0 : E.onClick) == null || K.call(E, F);
                },
                children: (H = A.option) == null ? void 0 : H.content
              },
              T
            ) : null;
          }
        )
      ]
    }
  );
}, Tc = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `home ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9 18V42H39V18L24 6L9 18Z",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ac = ({
  color: e = "currentColor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `home-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i("path", { d: "M39.6207 17.229C39.8603 17.4186 40 17.7074 40 18.013V41.8622C40 42.4145 39.5523 42.8622 39 42.8622H30.333C29.7807 42.8622 29.333 42.4145 29.333 41.8622V30.1396C29.333 29.5873 28.8853 29.1396 28.333 29.1396H19.667C19.1147 29.1396 18.667 29.5873 18.667 30.1396V41.8622C18.667 42.4145 18.2193 42.8622 17.667 42.8622H9C8.44772 42.8622 8 42.4145 8 41.8622V18.013C8 17.7074 8.13971 17.4186 8.37929 17.229L23.3793 5.35366C23.743 5.06571 24.257 5.06571 24.6207 5.35366L39.6207 17.229Z", fill: e })
  }
), Ic = ({
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z",
          fill: t
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z",
          fill: t
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z",
          fill: t
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z",
          fill: t
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z",
          fill: t
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z",
          fill: t
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z",
          fill: t
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z",
          fill: t
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z",
          fill: t
        }
      )
    ]
  }
), Hc = ({
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
      /* @__PURE__ */ i("circle", { cx: "12", cy: "24", r: "4", fill: t }),
      /* @__PURE__ */ i("circle", { cx: "24", cy: "24", r: "4", fill: t }),
      /* @__PURE__ */ i("circle", { cx: "36", cy: "24", r: "4", fill: t })
    ]
  }
), Pc = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `more-line ${r}`,
    style: o,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7.94971 11.9497H39.9497",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7.94971 23.9497H39.9497",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Rc = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `refresh ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 8V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 24L6 40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Dc = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M38.3785 9.85132C32.9112 4.38398 24.0468 4.38398 18.5795 9.85132C15.8458 12.585 14.479 16.1679 14.479 19.7508C14.479 23.3337 15.8458 26.9166 18.5795 29.6503C24.0468 35.1176 32.9112 35.1176 38.3785 29.6503C43.8458 24.183 43.8458 15.3187 38.3785 9.85132Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18.4642 29.5353L5.73633 42.2632",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ec = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M41.9517 15.0483V6.04834H32.9517",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M10.4135 38.0007C15.8808 43.4681 24.7451 43.4681 30.2125 38.0007C32.9462 35.2671 34.313 31.6841 34.313 28.1012C34.313 24.5183 32.9462 20.9354 30.2125 18.2017C24.7451 12.7344 15.8808 12.7344 10.4135 18.2017C4.94615 23.6691 4.94615 32.5334 10.4135 38.0007Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Bc = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Fc = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 16C6.63472 17.2193 7.59646 18.3504 8.82276 19.3554C12.261 22.1733 17.779 24 24 24C30.221 24 35.739 22.1733 39.1772 19.3554C40.4035 18.3504 41.3653 17.2193 42 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28.9775 24L31.048 31.7274",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M37.3535 21.3536L43.0103 27.0104",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5.00004 27.0103L10.6569 21.3534",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Oc = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), Zc = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Yc = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i("path", { d: "M18.2838 43.1708C14.9327 42.1731 11.9498 40.3208 9.58787 37.8665C10.469 36.8222 11 35.4729 11 33.9996C11 30.6859 8.31371 27.9996 5 27.9996C4.79955 27.9996 4.60139 28.0095 4.40599 28.0287C4.13979 26.7272 4 25.3798 4 23.9996C4 21.909 4.32077 19.8933 4.91579 17.999C4.94381 17.9994 4.97188 17.9996 5 17.9996C8.31371 17.9996 11 15.3133 11 11.9996C11 11.0483 10.7786 10.1488 10.3846 9.34963C12.6975 7.19902 15.5205 5.58954 18.6521 4.72266C19.6444 6.66771 21.6667 7.99965 24 7.99965C26.3333 7.99965 28.3556 6.66771 29.3479 4.72266C32.4795 5.58954 35.3025 7.19902 37.6154 9.34963C37.2214 10.1488 37 11.0483 37 11.9996C37 15.3133 39.6863 17.9996 43 17.9996C43.0281 17.9996 43.0562 17.9994 43.0842 17.999C43.6792 19.8933 44 21.909 44 23.9996C44 25.3798 43.8602 26.7272 43.594 28.0287C43.3986 28.0095 43.2005 27.9996 43 27.9996C39.6863 27.9996 37 30.6859 37 33.9996C37 35.4729 37.531 36.8222 38.4121 37.8665C36.0502 40.3208 33.0673 42.1731 29.7162 43.1708C28.9428 40.7515 26.676 38.9996 24 38.9996C21.324 38.9996 19.0572 40.7515 18.2838 43.1708Z", stroke: e, "stroke-width": n, strokeLinejoin: "round" }),
      /* @__PURE__ */ i("path", { d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z", stroke: e, "stroke-width": n, strokeLinejoin: "round" })
    ]
  }
), _c = ({
  color: e = "currentColor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
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
    children: /* @__PURE__ */ i("path", { d: "M30.1995 3.7271C30.4664 3.3222 30.9558 3.09498 31.4158 3.24837C34.1559 4.16208 36.6509 5.64551 38.7721 7.56441C39.0901 7.85203 39.1651 8.31297 39.0243 8.71793C38.7822 9.41432 38.6504 10.1656 38.6504 10.949C38.6504 14.5688 41.4708 17.5036 44.9502 17.5036V17.5036C45.0022 17.5036 45.0485 17.537 45.0633 17.5868C45.6719 19.6316 46 21.8046 46 24.0574C46 25.3491 45.8919 26.6146 45.6852 27.8448C45.6266 28.1935 45.3038 28.4275 44.9502 28.4275V28.4275C41.4708 28.4275 38.6505 31.3614 38.6504 34.9812C38.6504 36.2755 39.0108 37.4824 39.6331 38.4988C39.8928 38.9229 39.8839 39.4787 39.5318 39.8299C37.3893 41.9671 34.8118 43.6362 31.9516 44.6796C31.432 44.8692 30.8767 44.5657 30.6368 44.0673C29.6028 41.9185 27.467 40.4431 25 40.4431C22.533 40.4431 20.3972 41.9185 19.3632 44.0673C19.1233 44.5657 18.568 44.8692 18.0484 44.6796C15.1882 43.6362 12.6108 41.9671 10.4682 39.8299C10.1161 39.4787 10.1073 38.9229 10.3669 38.4988C10.9892 37.4824 11.3496 36.2755 11.3496 34.9812C11.3495 31.3614 8.52916 28.4275 5.0498 28.4275V28.4275C4.69619 28.4275 4.37345 28.1935 4.31484 27.8448C4.10809 26.6146 4 25.3491 4 24.0574C4.00001 21.8046 4.32808 19.6316 4.93668 17.5868C4.95153 17.537 4.99778 17.5036 5.0498 17.5036V17.5036C8.5292 17.5036 11.3496 14.5688 11.3496 10.949C11.3496 10.1656 11.2178 9.41432 10.9757 8.71793C10.8349 8.31297 10.9099 7.85203 11.2279 7.56441C13.3491 5.64551 15.8441 4.16208 18.5842 3.24837C19.0442 3.09498 19.5336 3.3222 19.8005 3.7271C20.9356 5.44961 22.841 6.57982 25 6.57982C27.159 6.57982 29.0644 5.44961 30.1995 3.7271ZM25 16.8249C21.0375 16.825 17.8253 20.0372 17.8252 23.9997C17.8252 27.9623 21.0374 31.1744 25 31.1745C28.9626 31.1745 32.1748 27.9624 32.1748 23.9997C32.1747 20.0372 28.9626 16.8249 25 16.8249Z", fill: e })
  }
), Uc = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M41.5 10H35.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M27.5 6V14",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M27.5 10L5.5 10",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M13.5 24H5.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21.5 20V28",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M43.5 24H21.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M41.5 38H35.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M27.5 34V42",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Gc = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `collection ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Kc = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 6H42V20",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Xc = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16 6L17 9",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 11H28",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), qc = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9.15039 9.15088L11.3778 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M3 24H6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9.15039 38.8495L11.3778 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M38.8495 38.8495L36.6221 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M44.9996 24H41.8496",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M38.8495 9.15088L36.6221 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 3V6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), zc = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9.15039 9.15088L11.3778 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M3 24H6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9.15039 38.8495L11.3778 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M38.8495 38.8495L36.6221 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M44.9996 24H41.8496",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M38.8495 9.15088L36.6221 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 3V6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",
          fill: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Jc = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `dark ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",
        stroke: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), Qc = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    className: `dark-fill ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",
        fill: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), Wc = ({
  color: e = "currentcolor",
  size: t = 20,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), el = ({
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
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), tl = ({
  size: e = 16,
  color: t = "currentColor",
  style: n,
  className: r = ""
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: n,
    className: `video-play ${r}`,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M16.875 3.75V16.25C16.875 16.5815 16.7433 16.8995 16.5089 17.1339C16.2745 17.3683 15.9565 17.5 15.625 17.5H12.5C12.1685 17.5 11.8505 17.3683 11.6161 17.1339C11.3817 16.8995 11.25 16.5815 11.25 16.25V3.75C11.25 3.41848 11.3817 3.10054 11.6161 2.86612C11.8505 2.6317 12.1685 2.5 12.5 2.5H15.625C15.9565 2.5 16.2745 2.6317 16.5089 2.86612C16.7433 3.10054 16.875 3.41848 16.875 3.75ZM7.5 2.5H4.375C4.04348 2.5 3.72554 2.6317 3.49112 2.86612C3.2567 3.10054 3.125 3.41848 3.125 3.75V16.25C3.125 16.5815 3.2567 16.8995 3.49112 17.1339C3.72554 17.3683 4.04348 17.5 4.375 17.5H7.5C7.83152 17.5 8.14946 17.3683 8.38388 17.1339C8.6183 16.8995 8.75 16.5815 8.75 16.25V3.75C8.75 3.41848 8.6183 3.10054 8.38388 2.86612C8.14946 2.6317 7.83152 2.5 7.5 2.5Z",
        fill: t,
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }
    )
  }
), nl = ({
  size: e = 16,
  color: t = "currentColor",
  style: n,
  className: r = ""
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 21 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: n,
    className: `video-pause ${r}`,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M14.3077 9.79704C15.2308 10.3317 15.2308 11.6683 14.3077 12.203L8.07693 15.8118C7.15385 16.3465 6 15.6782 6 14.6089V7.39113C6 6.32183 7.15385 5.65352 8.07692 6.18817L14.3077 9.79704Z",
        fill: t,
        strokeLinejoin: "round"
      }
    )
  }
), rl = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M25 6V42L12.1884 32.839H6.1C4.94019 32.839 4 31.9436 4 30.839V17.0108C4 15.9062 4.94019 15.0108 6.1 15.0108H12.1884L25 6Z",
          stroke: e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 15C32.6232 15.5565 33.1882 16.1797 33.6842 16.8588C35.1388 18.8504 36 21.3222 36 24C36 26.6546 35.1536 29.1068 33.7218 31.0894C33.2168 31.7886 32.6392 32.4294 32 33",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), ol = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    onClick: s,
    style: r,
    className: `volume-muted ${o}`,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M25 6V42L12.1884 32.839H6.1C4.94019 32.839 4 31.9436 4 30.839V17.0108C4 15.9062 4.94019 15.0108 6.1 15.0108H12.1884L25 6Z",
          stroke: e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M41 19L32 29",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), il = ({
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16 40H6C4.89543 40 4 39.1046 4 38V10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), sl = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  reverse: s,
  onClick: a
}) => /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", width: t, height: t, viewBox: "0 0 48 48", fill: "none", className: `video-fill-width ${o}`, style: r, onClick: a, children: [
  /* @__PURE__ */ i("path", { d: "M30.3633 18L36.7273 24.364L30.3633 30.728", stroke: e, strokeWidth: n, strokeLinejoin: "round", style: { transform: s ? "scale(1.-1)" : "" } }),
  /* @__PURE__ */ i("path", { d: "M16.363 30.7279L9.99902 24.3639L16.363 18", stroke: e, strokeWidth: n, strokeLinejoin: "round", style: { transform: s ? "scale(1.-1)" : "" } }),
  /* @__PURE__ */ i(
    "path",
    {
      d: "M42 9H6C3.79086 9 2 10.7909 2 13V37C2 39.2091 3.79086 41 6 41H42C44.2091 41 46 39.2091 46 37V13C46 10.7909 44.2091 9 42 9Z",
      stroke: e,
      strokeWidth: n,
      strokeLinejoin: "round"
    }
  )
] }), al = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `loop ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), cl = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `file ${r}`,
    style: o,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: t,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), ll = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `download ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 24.0083V42H42V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M33 23L24 32L15 23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), dl = ({
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 24.0083V42H42V24",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M33 15L24 6L15 15",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), ul = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `web-add ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M25 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V24.9412",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 35H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M38 29V41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "circle",
        {
          r: n,
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)",
          fill: e
        }
      ),
      /* @__PURE__ */ i(
        "circle",
        {
          r: n,
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)",
          fill: e
        }
      )
    ]
  }
), hl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `announcement ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 24H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), pl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `audio-file ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 14L26 16.9688V31.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), fl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `book ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M8 40C8 36 8 10 8 10C8 6.68629 10.8654 4 14.4 4H40V36C40 36 19.9815 36 14.4 36C9.36225 36 8 36.6842 8 40Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), ml = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `clipboard ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M17 7H16H10C8.89543 7 8 7.89543 8 9L8 42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V9C40 7.89543 39.1046 7 38 7H33.0499H31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), gl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `document ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 6H22V42H32V6Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 6H32V42H42V6Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M10 6L18 7L14.5 42L6 41L10 6Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M37 18V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), vl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `email-download ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M36 15H44V28V41H4V28V15H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 19V5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 13L24 19L18 13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), kl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `email-push ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M36 15H44V28V41H4V28V15H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 19V5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 11L24 5L18 11",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ll = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `email-success ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M44 24V9H24H4V24V39H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M31 36L36 40L44 30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), wl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `email-fail ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M44 24V9H24H4V24V39H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M40 31L32 39",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 31L40 39",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), yl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `file-add ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M33 29V43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M26 36H33H40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Cl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `code-file ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 4L40 14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M27 24L32 29L27 34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ml = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `star-file ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 4L40 14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), xl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-file ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 4L40 14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 22V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), bl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `folder ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M43 22H5",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 16V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Nl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `code-folder ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 22L33 27L28 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Vl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `folder-download ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 28L23.9933 34L18 28.0134",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Sl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `folder-add ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 27H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), jl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `folder-upload ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 25.9867L24 20L18 26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), $l = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `formatting-brush ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), Tl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `instruction ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M25 23L23 34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M31 23L37 28L31 34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Al = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `list-view ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 14H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 24H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 32H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 24H14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Il = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `list-view ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
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
), Hl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `log ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21 22H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Pl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `email ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 39H44V24V9H24H4V24V39Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 9L24 24L44 9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 9H4V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Rl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `email-open ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M44 18V39.8182C44 41.0232 43.1046 42 42 42H6C4.89543 42 4 41.0232 4 39.8182V18L24 31L44 18Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Dl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `note-pad ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 8H11C10.4477 8 10 8.44772 10 9V43C10 43.5523 10.4477 44 11 44H39C39.5523 44 40 43.5523 40 43V9C40 8.44772 39.5523 8 39 8H32",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ i(
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
), El = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `schedule ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14 6V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M25 23L14 23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M34 31L14 31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Bl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-scan ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 15V35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Fl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `web-page ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ i(
        "circle",
        {
          r: "2",
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)",
          fill: e
        }
      ),
      /* @__PURE__ */ i(
        "circle",
        {
          r: "2",
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)",
          fill: e
        }
      )
    ]
  }
), Ol = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `web-page ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16 31L22 37L34 25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16 5V13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Zl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `calendar ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 19H43V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V19Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 9C5 7.89543 5.89543 7 7 7H41C42.1046 7 43 7.89543 43 9V19H5V9Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16 4V12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 4V12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 34H34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14 34H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 26H34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Yl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `code ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i("path", { d: "M16 13L4 25.4322L16 37", stroke: e, "stroke-width": n, strokeLinecap: "round", "stroke-linejoin": "round" }),
      /* @__PURE__ */ i("path", { d: "M32 13L44 25.4322L32 37", stroke: e, "stroke-width": n, strokeLinecap: "round", "stroke-linejoin": "round" }),
      /* @__PURE__ */ i("path", { d: "M28 13L21 37", stroke: e, "stroke-width": n, strokeLinecap: "round" })
    ]
  }
), _l = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `coupon ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9.00013 16.0001L34 6.00008L38.0004 16.0001",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M17 25.3848H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ul = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `ticket ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M17 19V21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M17 27L17 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M25 21H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Gl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `bank-card ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 16H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M27 32H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M44 10V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Kl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `consume ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V14Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M19 19L24 24L29 19",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 25H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 31H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 25V35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Xl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `commodity ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9.78101 9.75193C9.90612 8.75107 10.7569 8 11.7656 8H36.2344C37.2431 8 38.0939 8.75107 38.219 9.75193L41.719 37.7519C41.8682 38.9456 40.9374 40 39.7344 40H8.26556C7.06257 40 6.1318 38.9456 6.28101 37.7519L9.78101 9.75193Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), ql = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `dollar ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 2V46",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M35 6C35 6 24.9706 6 20 6C15.0294 6 11 10.0294 11 15C11 19.9706 15.0294 24 20 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), zl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `check-stroke ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Jl = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `check-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM11.4142 24C11.4142 24.4142 11.7475 24.7475 12.4142 25.4142L19.5858 32.5858C20.2525 33.2525 20.5858 33.5858 21 33.5858C21.4142 33.5858 21.7475 33.2525 22.4142 32.5858L36.2525 18.7475C36.9191 18.0809 37.2525 17.7475 37.2525 17.3333C37.2525 16.9191 36.9191 16.5858 36.2525 15.9191L35.7475 15.4142C35.0809 14.7475 34.7475 14.4142 34.3333 14.4142C33.9191 14.4142 33.5858 14.7475 32.9191 15.4142L22.4142 25.9191C21.7475 26.5858 21.4142 26.9191 21 26.9191C20.5858 26.9191 20.2525 26.5858 19.5858 25.9191L15.7475 22.0809C15.0809 21.4142 14.7475 21.0809 14.3333 21.0809C13.9191 21.0809 13.5858 21.4142 12.9191 22.0809L12.4142 22.5858C11.7475 23.2525 11.4142 23.5858 11.4142 24Z",
        fill: e
      }
    )
  }
), Ql = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `check ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
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
), Wl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `error-stroke ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M29.6567 18.3432L18.343 29.6569",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), ed = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `error-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM14.4146 16.8059C14.4258 17.2036 14.7468 17.5246 15.3889 18.1667L19.808 22.5858C20.4747 23.2525 20.808 23.5858 20.808 24C20.808 24.4142 20.4747 24.7475 19.808 25.4142L15.3889 29.8333C14.7468 30.4754 14.4258 30.7964 14.4146 31.1941C14.4141 31.2128 14.4141 31.2316 14.4146 31.2503C14.4258 31.648 14.7468 31.9691 15.3889 32.6111C16.0309 33.2532 16.352 33.5742 16.7497 33.5854C16.7684 33.5859 16.7872 33.5859 16.8059 33.5854C17.2036 33.5742 17.5246 33.2532 18.1667 32.6111L22.5858 28.192C23.2525 27.5253 23.5858 27.192 24 27.192C24.4142 27.192 24.7475 27.5253 25.4142 28.192L29.8333 32.6111C30.4754 33.2532 30.7964 33.5742 31.1941 33.5854C31.2128 33.5859 31.2316 33.5859 31.2503 33.5854C31.648 33.5742 31.9691 33.2532 32.6111 32.6111C33.2532 31.9691 33.5742 31.648 33.5854 31.2503C33.5859 31.2316 33.5859 31.2128 33.5854 31.1941C33.5742 30.7964 33.2532 30.4754 32.6111 29.8333L28.192 25.4142C27.5253 24.7475 27.192 24.4142 27.192 24C27.192 23.5858 27.5253 23.2525 28.192 22.5858L32.6111 18.1667C33.2532 17.5246 33.5742 17.2036 33.5854 16.8059C33.5859 16.7872 33.5859 16.7684 33.5854 16.7497C33.5742 16.352 33.2532 16.0309 32.6111 15.3889C31.9691 14.7468 31.648 14.4258 31.2503 14.4146C31.2316 14.4141 31.2128 14.4141 31.1941 14.4146C30.7964 14.4258 30.4754 14.7468 29.8333 15.3889L25.4142 19.808C24.7475 20.4747 24.4142 20.808 24 20.808C23.5858 20.808 23.2525 20.4747 22.5858 19.808L18.1667 15.3889C17.5246 14.7468 17.2036 14.4258 16.8059 14.4146C16.7872 14.4141 16.7684 14.4141 16.7497 14.4146C16.352 14.4258 16.0309 14.7468 15.3889 15.3889C14.7468 16.0309 14.4258 16.352 14.4146 16.7497C14.4141 16.7684 14.4141 16.7872 14.4146 16.8059Z",
        fill: e
      }
    )
  }
), us = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `error ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
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
), td = ({
  size: e = 16,
  color: t = "currentcolor",
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `info-stroke ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",
        stroke: t,
        strokeWidth: "2"
      }
    )
  }
), nd = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `info-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 12.5C26.5 13.4428 26.5 13.9142 26.2071 14.2071C25.9142 14.5 25.4428 14.5 24.5 14.5H24C23.0572 14.5 22.5858 14.5 22.2929 14.2071C22 13.9142 22 13.4428 22 12.5V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V12.5ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V21.5C22 20.5572 22 20.0858 22.2929 19.7929C22.5858 19.5 23.0572 19.5 24 19.5H24.5C25.4428 19.5 25.9142 19.5 26.2071 19.7929C26.5 20.0858 26.5 20.5572 26.5 21.5V36.5Z",
        fill: e
      }
    )
  }
), rd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `info ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41L21 21C21 20.0572 21 19.5858 21.2929 19.2929C21.5858 19 22.0572 19 23 19H26C26.9428 19 27.4142 19 27.7071 19.2929C28 19.5858 28 20.0572 28 21L28 41Z",
          fill: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 10C28 10.9428 28 11.4142 27.7071 11.7071C27.4142 12 26.9428 12 26 12H23C22.0572 12 21.5858 12 21.2929 11.7071C21 11.4142 21 10.9428 21 10V7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5L26 5C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7V10Z",
          fill: e,
          strokeWidth: n
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
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `attention-stroke ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",
        stroke: e,
        strokeWidth: n
      }
    )
  }
), id = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `attention-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",
        fill: e
      }
    )
  }
), sd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `attention ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",
          fill: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",
          fill: e,
          strokeWidth: n
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
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `question-stroke ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",
        stroke: e,
        strokeWidth: n
      }
    )
  }
), cd = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `question-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",
        fill: e
      }
    )
  }
), ld = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `question ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",
          fill: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",
          fill: e,
          strokeWidth: n
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
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `hourglass-empty ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7 4H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7 44H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), ud = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `hourglass-full ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7 4H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7 44H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M37 4C34.3333 17.3389 30 24.0056 24 24C18 23.9944 13.6667 17.3278 11 4H37Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21 15H27",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), hd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    fill: "none",
    viewBox: "0 0 24 24",
    width: t,
    height: t,
    className: `increase ${o}`,
    style: r,
    onClick: s,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M15 12h4.5L12 2 4.5 12H9v10h6V12z",
        fill: e,
        strokeWidth: n
      }
    )
  }
), pd = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14.5 8C13.8406 8.37652 13.2062 8.79103 12.6 9.24051C11.5625 10.0097 10.6074 10.8814 9.75 11.8402C6.79377 15.1463 5 19.4891 5 24.2455C5 34.6033 13.5066 43 24 43C34.4934 43 43 34.6033 43 24.2455C43 19.4891 41.2062 15.1463 38.25 11.8402C37.3926 10.8814 36.4375 10.0097 35.4 9.24051C34.7938 8.79103 34.1594 8.37652 33.5 8",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), fd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `toggle ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 9L42 9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 19L42 19",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), md = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `collapse ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M44 20H28V4",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), gd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `reload ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), vd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `undo ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), kd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `sort ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M19 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7 17.8994L19 5.89941",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M29 42.1006V6.10059",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ld = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `sort-descending ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M23 8H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14 41L6 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14 7V41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M23 18H39",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M23 28H35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), wd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `sort-ascending ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M23 9H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 16L13 8",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M13 8V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M23 19H39",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M23 29H35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), yd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `back ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Cd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `last-step ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
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
), Md = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `last-step-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i(
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
), xd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `next-step ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
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
), bd = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `next-step-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i(
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
), Nd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `ahead ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Vd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `drag ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Sd = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n,
  className: r = "",
  style: o,
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `add ${r}`,
    style: o,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24.0605 10L24.0239 38",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), jd = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `dec ${r}`,
    style: o,
    onClick: s,
    children: /* @__PURE__ */ i("path", { d: "M10 24H38", stroke: t, strokeWidth: n, strokeLinecap: "round", strokeLinejoin: "round" })
  }
), $d = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `clear ${r}`,
    style: o,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14 14L34 34",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Td = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
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
    onClick: (a) => s == null ? void 0 : s(a),
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9 10V44H39V10H9Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 20V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 20V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 10H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ad = ({
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Id = ({
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14 14L34 34",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Hd = ({
  color: e = "currentcolor",
  size: t = 20,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
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
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",
        fill: e
      }
    )
  }
), Pd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `zoom-in-arrow ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 6L16 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 41.8995L16 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42.0001 41.8995L32.1006 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M41.8995 6L32 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M33 6H42V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 33V42H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M15 42H6V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Rd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `zoom-out-arrow ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 6L16 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 41.8995L16 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42.0001 41.8995L32.1006 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M41.8995 6L32 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 7V16H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16 7V16H7",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16 41V32H7",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Dd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `zoom-in ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M33 6H42V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 33V42H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M15 42H6V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ed = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `zoom-out ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M33 6V15H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M15 6V15H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M15 42V33H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Bd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `out ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M23.9917 6H6V42H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M33 33L42 24L33 15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Fd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `zoom-in-btn ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21 15L21 27",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M15.0156 21.0156L27 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Od = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `zoom-in-btn ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M15 21L27 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Zd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `square-add ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16 6H8C6.89543 6 6 6.89543 6 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16 42H8C6.89543 42 6 41.1046 6 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 42H40C41.1046 42 42 41.1046 42 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 6H40C41.1046 6 42 6.89543 42 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 24L16 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Yd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `dash-add ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 32L24 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 27L42 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 27L6 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14 6H8C6.89543 6 6 6.89543 6 8V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M34 6H40C41.1046 6 42 6.89543 42 8V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M34 42H40C41.1046 42 42 41.1046 42 40V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14 42H8C6.89543 42 6 41.1046 6 40V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M27 6H21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 24L16 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), _d = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `adjustment ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M36 12L12 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 16H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M27 33H35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ud = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `alphabetical-sorting ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M36 4V43.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7 28H23L7 44H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7 20L15.2759 4L23 20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Gd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `alphabetical-sorting-reverse ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M36 4V43.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7 4H23L7 20H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7 44L15.2759 28L23 44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Kd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `brightness ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24.0205 35.3535C30.0956 35.3535 35.0205 30.4286 35.0205 24.3535C35.0205 18.2784 30.0956 13.3535 24.0205 13.3535C17.9454 13.3535 13.0205 18.2784 13.0205 24.3535C13.0205 30.4286 17.9454 35.3535 24.0205 35.3535Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M38.9603 9.00977L36.5 11.4842",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M11.0674 36.7451L9.02051 38.8037",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 41.3533L24 44.3533",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M43.9998 23.3535L39.9998 23.3535",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M37.5324 36.3361L39.9998 38.8035",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M24.0205 17.3535C20.1545 17.3535 17.0205 20.4875 17.0205 24.3535C17.0205 28.2195 20.1545 31.3535 24.0205 31.3535",
          fill: e
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4.00019 24.3535L8.00019 24.3535",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M10.0444 9.00974L12.0972 11.0625",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Xd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `layer-front ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M41 18H19C18.4477 18 18 18.4477 18 19V41C18 41.5523 18.4477 42 19 42H41C41.5523 42 42 41.5523 42 41V19C42 18.4477 41.5523 18 41 18Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9.96906 6H6V10.0336",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9.99705 30H6V26.012",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M26.0023 6H30V10.0152",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16.0283 6H20.0083",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 16C6 18.6536 6 19.9869 6 20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 16C30 18.6765 30 19.3456 30 18.0074",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), qd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `layer-back ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 18H41C41.5523 18 42 18.4477 42 19V41C42 41.5523 41.5523 42 41 42H19C18.4477 42 18 41.5523 18 41V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9.96906 6H6V10.0336",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9.99705 30H6V26.012",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M26 30H29.9971V26.012",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M26.0023 6H30V9.99785",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16.0283 6H20.0083",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 16V20.0148",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 16V20.0148",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), zd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `clear-formate ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ m("g", { clipPath: "url(#icon-388a63e7c11bad3)", children: [
        /* @__PURE__ */ i(
          "path",
          {
            d: "M44.7818 24.1702L31.918 7.09935L14.1348 20.5L27.5 37L30.8556 34.6643L44.7818 24.1702Z",
            fill: "none",
            stroke: e,
            strokeWidth: n,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M27.4998 37L23.6613 40.0748L13.0978 40.074L10.4973 36.6231L4.06543 28.0876L14.4998 20.2248",
            stroke: e,
            strokeWidth: n,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M13.2056 40.072L44.5653 40.072",
            stroke: e,
            strokeWidth: n,
            strokeLinecap: "round"
          }
        )
      ] }),
      /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("clipPath", { id: "icon-388a63e7c11bad3", children: /* @__PURE__ */ i("rect", { width: "48", height: "48", fill: e }) }) })
    ]
  }
), Jd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `edit ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7 42H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Qd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `clip-edit ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M8 6L32 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Wd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `filter ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
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
), eu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `lock ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14 22V14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), tu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `unlock ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14 22V14.0047C13.9948 8.87022 17.9227 4.56718 23.0859 4.05117C28.249 3.53516 32.9673 6.97408 34 12.0059",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), nu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `merge-cells ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 14V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V43C4 43.5523 4.44772 44 5 44H19C19.5523 44 20 43.5523 20 43V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 34V43C28 43.5523 28.4477 44 29 44H43C43.5523 44 44 43.5523 44 43V5C44 4.44772 43.5523 4 43 4H29C28.4477 4 28 4.44772 28 5V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 24H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 24H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32.7485 28.8184L31.1575 27.2274L27.9756 24.0454L31.1575 20.8634L32.7485 19.2724",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), ru = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `split-cells ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 14V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V43C20 43.5523 19.5523 44 19 44H5C4.44772 44 4 43.5523 4 43V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M44 34V43C44 43.5523 43.5523 44 43 44H29C28.4477 44 28 43.5523 28 43V5C28 4.44772 28.4477 4 29 4H43C43.5523 4 44 4.44772 44 5V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M28 24L44 24.0132",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 24.0132L20 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M39.2275 28.7778L40.8185 27.1868L44.0005 24.0049L40.8185 20.8229L39.2275 19.2319",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), ou = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `cursor-move ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
        stroke: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), iu = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `cursor-move-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
        fill: e,
        strokeLinejoin: "round"
      }
    )
  }
), su = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `line-break ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 9H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 19H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 29H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 39H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), au = ({
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
      /* @__PURE__ */ i(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z",
          fill: e
        }
      ),
      /* @__PURE__ */ i(
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
), cu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `scan ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16 6H8C6.89543 6 6 6.89543 6 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M16 42H8C6.89543 42 6 41.1046 6 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 42H40C41.1046 42 42 41.1046 42 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 6H40C41.1046 6 42 6.89543 42 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M34 24L14 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M34 16L14 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), lu = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `like ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
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
), du = ({
  size: e = 16,
  color: t = "currentcolor",
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `like-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
        fill: t,
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }
    )
  }
), uu = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `star ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",
        stroke: t,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), hu = ({
  size: e = 16,
  color: t = "currentcolor",
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `star-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",
        fill: t,
        strokeLinejoin: "round"
      }
    )
  }
), pu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `pen ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), fu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-bottom ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), mu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-top ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), gu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-left ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), vu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-right ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), ku = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-horizontally ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), Lu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-vertically ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), wu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-align-left ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M34 19H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), yu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-align-right ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 19H14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Cu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-align-center ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M36 19H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Mu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-align-justify ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 19H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), xu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-align-middle ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 36L24 30L30 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M23.9999 30.9998V43.9998",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 12L24 18L30 12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M23.9999 17.0002V4.00022",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), bu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-bottom-center ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 32V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 24V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Nu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-bottom-left ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 32V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 24V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Vu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-bottom-right ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 32V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 24V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Su = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-horizontal-bottom ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M22 36H26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 30H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), ju = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-horizontal-center ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M22 30H26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 24H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), $u = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-horizontal-top ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M22 24H26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 18H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Tu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-left-bottom ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 36H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 30H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Au = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-left-center ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 30H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 24H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Iu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-left-top ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 24H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 18H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Hu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-right-bottom ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 36H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 30H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Pu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-right-center ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 30H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 24H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ru = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-right-top ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M32 24H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 18H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Du = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-top-center ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 12V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 12V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Eu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-top-left ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 12V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 12V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Bu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-top-right ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 12V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 12V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Fu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-vertical-center ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 22V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 18V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ou = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-vertical-left ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 22V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 18V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Zu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `align-vertical-right ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 22V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M30 18V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Yu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `flip-horizontally ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 34L16 12V34H4Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), _u = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `flip-vertically ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 24L6 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14 4L36 16H14V4Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Uu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `font-size ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M8 10.9333L8 6H40V10.9333",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Gu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `line-height ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 7H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 41H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 13L14 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 28L30 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ku = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `line-width ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 40L5 8",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 13L14 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M18 28L30 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 13L34 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Xu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `title-h1 ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M25 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 24H25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), qu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `title-h2 ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7 24H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), zu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `title-h3 ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M7 24H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Ju = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `indent-left ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 9H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M19 19H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M19 29H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M11 19L6 24L11 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Qu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `indent-right ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M29 19H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M29 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M37 19L42 24L37 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Wu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `drop-shadow-up ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), eh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `drop-shadow-down ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), th = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `drop-shadow-left ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), nh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `drop-shadow-right ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), rh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `inner-shadow-left ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), oh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `inner-shadow-down ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), ih = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `inner-shadow-left ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), sh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `inner-shadow-right ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), ah = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `layer ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 11.9143L24 19L44 11.9143L24 5L4 11.9143Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 20L24 27L44 20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M4 28L24 35L44 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), ch = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `check-list ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 10L8 13L14 7",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 24L8 27L14 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 38L8 41L14 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21 38H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), lh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `alphabet-list ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 9H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 19H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 29H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 39H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 29H12L6 39H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i("path", { d: "M11 8.9999L7 9L6.3 16H11.7L11 8.9999Z", fill: "none" }),
      /* @__PURE__ */ i(
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
), dh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `checkbox-list ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20 24H44H20Z",
          fill: "none"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 24H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20 38H44H20Z",
          fill: "none"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 38H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20 10H44H20Z",
          fill: "none"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 10H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), uh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `radio-list ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9 42C11.2091 42 13 40.2091 13 38C13 35.7909 11.2091 34 9 34C6.79086 34 5 35.7909 5 38C5 40.2091 6.79086 42 9 42Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9 14C11.2091 14 13 12.2092 13 10C13 7.79086 11.2091 6 9 6C6.79086 6 5 7.79086 5 10C5 12.2092 6.79086 14 9 14Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9 28C11.2091 28 13 26.2092 13 24C13 21.7908 11.2091 20 9 20C6.79086 20 5 21.7908 5 24C5 26.2092 6.79086 28 9 28Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21 38H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), hh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `number-list ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9 4V13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 13H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 27H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6 19.9998C6 19.9998 9 16.9998 11 19.9998C13 22.9999 6 26.9998 6 26.9998",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M6.00016 34.5001C6.00016 34.5001 8.00016 31.5 11.0002 33.5C14.0002 35.5 11.0002 38 11.0002 38C11.0002 38 14.0002 40.5 11.0002 42.5C8.00015 44.5 6.00015 41.5 6.00015 41.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M11 38H9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M9 4L6 6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M21 38H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), ph = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `mask ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i("circle", { cx: "24", cy: "24", r: "20", stroke: e, strokeWidth: n }),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M31 5.25928C23.4067 8.09675 18 15.417 18 24.0001C18 32.5831 23.4067 39.9034 31 42.7408",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M37 9L18 22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M41 14L19 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M43 20L22 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), fh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `delete-strike ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M5 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 24C40 30 34 44 24 44C13.9999 44 12 36 12 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M35.9999 12C35.9999 12 33 4 23.9999 4C14.9999 4 11.4359 11.5995 15.6096 18",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), mh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `tail ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 4V36H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 12H36V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 12H4",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), gh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-bold ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), vh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-italic ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M20 6H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M12 42H28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), kh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `text-underline ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M8 44H40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), Lh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `arrow-line ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24 42V6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), wh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `arrow-double ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M36 24L24 36L12 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), yh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `arrow ${o}`,
    onClick: s,
    children: /* @__PURE__ */ i(
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
), Ch = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ i(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `arrow-triangle ${r}`,
    onClick: o,
    children: /* @__PURE__ */ i(
      "path",
      {
        d: "M36 19L24 31L12 19H36Z",
        fill: e,
        strokeLinejoin: "round"
      }
    )
  }
), Mh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `arrow-to ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M24.0083 33.8995V6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
        "path",
        {
          d: "M36 22L24 34L12 22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), xh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: s
}) => /* @__PURE__ */ m(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `arrow-nav ${o}`,
    onClick: s,
    children: [
      /* @__PURE__ */ i(
        "path",
        {
          d: "M14 12L26 24L14 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
), bh = ({
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
      /* @__PURE__ */ i(
        "path",
        {
          d: "M15 12L18 6H30L33 12H15Z",
          fill: "none",
          stroke: e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
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
), Nh = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = ""
}) => /* @__PURE__ */ i("svg", { xmlns: "http://www.w3.org/2000/svg", width: t, height: t, viewBox: "0 0 16 16", fill: "none", style: n, className: r, children: /* @__PURE__ */ i("path", { d: "M14.0726 5.46403C13.5517 5.78293 13.1202 6.22878 12.8186 6.75984C12.5169 7.2909 12.3549 7.88981 12.3478 8.50053C12.3498 9.18788 12.5535 9.85953 12.9335 10.4323C13.3135 11.005 13.8532 11.4538 14.4857 11.7228C14.2363 12.5274 13.8672 13.2899 13.3909 13.9846C12.7093 14.9658 11.9966 15.9469 10.9122 15.9469C9.82777 15.9469 9.54887 15.3169 8.29917 15.3169C7.08047 15.3169 6.64667 15.9676 5.65517 15.9676C4.66367 15.9676 3.97177 15.0587 3.17647 13.9433C2.12594 12.3808 1.54858 10.5483 1.51367 8.66573C1.51367 5.56733 3.52767 3.92523 5.51057 3.92523C6.56407 3.92523 7.44197 4.61713 8.10297 4.61713C8.73297 4.61713 9.71417 3.88383 10.9122 3.88383C11.5281 3.86793 12.1386 4.00375 12.6897 4.27931C13.2408 4.55487 13.7157 4.96172 14.0726 5.46403ZM10.3442 2.57223C10.8723 1.95099 11.1712 1.16735 11.1911 0.352226C11.192 0.244769 11.1816 0.137514 11.1601 0.0322266C10.2529 0.12084 9.41408 0.553201 8.81557 1.24063C8.28238 1.83711 7.97217 2.59982 7.93767 3.39913C7.93807 3.49633 7.94846 3.59324 7.96867 3.68833C8.04019 3.70185 8.11279 3.70877 8.18557 3.70903C8.60365 3.67576 9.01059 3.55783 9.38167 3.3624C9.75275 3.16698 10.0802 2.89814 10.3442 2.57223Z", fill: e }) }), Vh = {
  // Navigation
  home: Tc,
  "home-fill": Ac,
  application: Ic,
  more: Hc,
  "more-line": Pc,
  search: Wc,
  // Interface
  refresh: Rc,
  female: Dc,
  male: Ec,
  "preview-open": Bc,
  "preview-close": Fc,
  avatar: Oc,
  tag: Zc,
  setting: Yc,
  "config-setting": Uc,
  collection: Gc,
  share: Kc,
  translate: Xc,
  light: qc,
  dark: Jc,
  "light-fill": zc,
  "dark-fill": Qc,
  "setting-fill": _c,
  // Media
  image: el,
  "video-play": tl,
  "video-pause": nl,
  volume: rl,
  "volume-muted": ol,
  "video-small-screen": il,
  "video-full-width": sl,
  loop: al,
  // File
  file: cl,
  download: ll,
  upload: dl,
  "web-add": ul,
  announcement: hl,
  "audio-file": pl,
  book: fl,
  clipboard: ml,
  document: gl,
  email: Pl,
  "email-download": vl,
  "email-push": kl,
  "email-success": Ll,
  "email-fail": wl,
  "email-open": Rl,
  "file-add": yl,
  "code-file": Cl,
  "star-file": Ml,
  "text-file": xl,
  "text-scan": Bl,
  folder: bl,
  "code-folder": Nl,
  "folder-download": Vl,
  "folder-add": Sl,
  "folder-upload": jl,
  "formatting-brush": $l,
  instruction: Tl,
  "list-view": Al,
  link: Il,
  log: Hl,
  "note-pad": Dl,
  schedule: El,
  "web-page": Fl,
  plan: Ol,
  calendar: Zl,
  code: Yl,
  // Ecommerce
  coupon: _l,
  ticket: Ul,
  "bank-card": Gl,
  consume: Kl,
  commodity: Xl,
  dollar: ql,
  // State
  "check-stroke": zl,
  "check-fill": Jl,
  check: Ql,
  "error-stroke": Wl,
  "error-fill": ed,
  error: us,
  "info-stroke": td,
  "info-fill": nd,
  info: rd,
  "attention-stroke": od,
  "attention-fill": id,
  attention: sd,
  "question-stroke": ad,
  "question-fill": cd,
  question: ld,
  "hourglass-empty": dd,
  "hourglass-full": ud,
  increase: hd,
  // Operate
  "switch-gear": pd,
  toggle: fd,
  collapse: md,
  reload: gd,
  undo: vd,
  sort: kd,
  "sort-descending": Ld,
  "sort-ascending": wd,
  back: yd,
  "last-step": Cd,
  "last-step-fill": Md,
  "next-step": xd,
  "next-step-fill": bd,
  ahead: Nd,
  drag: Vd,
  add: Sd,
  dec: jd,
  "square-add": Zd,
  "dash-add": Yd,
  clear: $d,
  delete: Td,
  copy: Ad,
  close: Id,
  "color-picker": Hd,
  "zoom-in-arrow": Pd,
  "zoom-out-arrow": Rd,
  "zoom-in": Dd,
  "zoom-out": Ed,
  "zoom-in-btn": Fd,
  "zoom-out-btn": Od,
  out: Bd,
  adjustment: _d,
  "alphabetical-sorting": Ud,
  "alphabetical-sorting-reverse": Gd,
  brightness: Kd,
  layer: ah,
  "layer-front": Xd,
  "layer-back": qd,
  "clear-formate": zd,
  edit: Jd,
  "clip-edit": Qd,
  filter: Wd,
  lock: eu,
  unlock: tu,
  "merge-cells": nu,
  "split-cells": ru,
  "cursor-move": ou,
  "cursor-move-fill": iu,
  "line-break": su,
  quote: au,
  scan: cu,
  like: lu,
  "like-fill": du,
  star: uu,
  "star-fill": hu,
  pen: pu,
  // Arrow
  "arrow-line": Lh,
  "arrow-double": wh,
  arrow: yh,
  "arrow-triangle": Ch,
  "arrow-to": Mh,
  "arrow-nav": xh,
  // Device
  camera: bh,
  apple: Nh,
  // Style
  "align-bottom": fu,
  "align-top": mu,
  "align-left": gu,
  "align-right": vu,
  "align-horizontally": ku,
  "align-vertically": Lu,
  "text-align-left": wu,
  "text-align-right": yu,
  "text-align-center": Cu,
  "text-align-justify": Mu,
  "text-align-middle": xu,
  "align-bottom-center": bu,
  "align-bottom-left": Nu,
  "align-bottom-right": Vu,
  "align-horizontal-bottom": Su,
  "align-horizontal-center": ju,
  "align-horizontal-top": $u,
  "align-left-bottom": Tu,
  "align-left-center": Au,
  "align-left-top": Iu,
  "align-right-bottom": Hu,
  "align-right-center": Pu,
  "align-right-top": Ru,
  "align-top-center": Du,
  "align-top-left": Eu,
  "align-top-right": Bu,
  "align-vertical-left": Ou,
  "align-vertical-center": Fu,
  "align-vertical-right": Zu,
  "flip-horizontally": Yu,
  "flip-vertically": _u,
  "font-size": Uu,
  "line-height": Gu,
  "text-bold": gh,
  "text-italic": vh,
  "text-underline": kh,
  "line-width": Ku,
  "title-h1": Xu,
  "title-h2": qu,
  "title-h3": zu,
  "indent-left": Ju,
  "indent-right": Qu,
  "drop-shadow-up": Wu,
  "drop-shadow-down": eh,
  "drop-shadow-left": th,
  "drop-shadow-right": nh,
  "inner-shadow-up": rh,
  "inner-shadow-down": oh,
  "inner-shadow-left": ih,
  "inner-shadow-right": sh,
  "check-list": ch,
  "alphabet-list": lh,
  "checkbox-list": dh,
  "radio-list": uh,
  "number-list": hh,
  mask: ph,
  "delete-strike": fh,
  tail: mh
}, X = ({ name: e, ...t }) => {
  const n = Vh[e];
  return n ? /* @__PURE__ */ i(n, { ...t }) : (console.warn(`Icon "${e}" not found`), /* @__PURE__ */ i(us, { ...t }));
}, Ar = Ct({});
function Ir(e) {
  const t = q(null);
  return t.current === null && (t.current = e()), t.current;
}
const Hr = typeof window < "u", hs = Hr ? Nc : Y, Vn = /* @__PURE__ */ Ct(null);
function Pr(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Rr(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Fe = (e, t, n) => n > t ? t : n < e ? e : n;
let Mt = () => {
}, Oe = () => {
};
process.env.NODE_ENV !== "production" && (Mt = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Oe = (e, t) => {
  if (!e)
    throw new Error(t);
});
const Ze = {}, ps = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function fs(e) {
  return typeof e == "object" && e !== null;
}
const ms = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function Dr(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ne = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Sh = (e, t) => (n) => t(e(n)), Kt = (...e) => e.reduce(Sh), Et = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class Er {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Pr(this.subscriptions, t), () => Rr(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < o; s++) {
          const a = this.subscriptions[s];
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
const Te = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Pe = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function gs(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Co = /* @__PURE__ */ new Set();
function Br(e, t, n) {
  e || Co.has(t) || (console.warn(t), Co.add(t));
}
const vs = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, jh = 1e-7, $h = 12;
function Th(e, t, n, r, o) {
  let s, a, c = 0;
  do
    a = t + (n - t) / 2, s = vs(a, r, o) - e, s > 0 ? n = a : t = a;
  while (Math.abs(s) > jh && ++c < $h);
  return a;
}
function Xt(e, t, n, r) {
  if (e === t && n === r)
    return Ne;
  const o = (s) => Th(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : vs(o(s), t, r);
}
const ks = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ls = (e) => (t) => 1 - e(1 - t), ws = /* @__PURE__ */ Xt(0.33, 1.53, 0.69, 0.99), Fr = /* @__PURE__ */ Ls(ws), ys = /* @__PURE__ */ ks(Fr), Cs = (e) => (e *= 2) < 1 ? 0.5 * Fr(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Or = (e) => 1 - Math.sin(Math.acos(e)), Ms = Ls(Or), xs = ks(Or), Ah = /* @__PURE__ */ Xt(0.42, 0, 1, 1), Ih = /* @__PURE__ */ Xt(0, 0, 0.58, 1), bs = /* @__PURE__ */ Xt(0.42, 0, 0.58, 1), Hh = (e) => Array.isArray(e) && typeof e[0] != "number", Ns = (e) => Array.isArray(e) && typeof e[0] == "number", Mo = {
  linear: Ne,
  easeIn: Ah,
  easeInOut: bs,
  easeOut: Ih,
  circIn: Or,
  circInOut: xs,
  circOut: Ms,
  backIn: Fr,
  backInOut: ys,
  backOut: ws,
  anticipate: Cs
}, Ph = (e) => typeof e == "string", xo = (e) => {
  if (Ns(e)) {
    Oe(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return Xt(t, n, r, o);
  } else if (Ph(e))
    return Oe(Mo[e] !== void 0, `Invalid easing type '${e}'`), Mo[e];
  return e;
}, Wt = [
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
], bo = {
  value: null
};
function Rh(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = !1, s = !1;
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
      const g = f && o ? n : r;
      return p && a.add(h), g.has(h) || g.add(h), h;
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
        s = !0;
        return;
      }
      o = !0, [n, r] = [r, n], n.forEach(d), t && bo.value && bo.value.frameloop[t].push(l), l = 0, n.clear(), o = !1, s && (s = !1, u.process(h));
    }
  };
  return u;
}
const Dh = 40;
function Vs(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, a = Wt.reduce((y, x) => (y[x] = Rh(s, t ? x : void 0), y), {}), { setup: c, read: l, resolveKeyframes: d, preUpdate: u, update: h, preRender: p, render: f, postRender: k } = a, g = () => {
    const y = Ze.useManualTiming ? o.timestamp : performance.now();
    n = !1, Ze.useManualTiming || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(y - o.timestamp, Dh), 1)), o.timestamp = y, o.isProcessing = !0, c.process(o), l.process(o), d.process(o), u.process(o), h.process(o), p.process(o), f.process(o), k.process(o), o.isProcessing = !1, n && t && (r = !1, e(g));
  }, C = () => {
    n = !0, r = !0, o.isProcessing || e(g);
  };
  return { schedule: Wt.reduce((y, x) => {
    const N = a[x];
    return y[x] = (L, M = !1, b = !1) => (n || C(), N.schedule(L, M, b)), y;
  }, {}), cancel: (y) => {
    for (let x = 0; x < Wt.length; x++)
      a[Wt[x]].cancel(y);
  }, state: o, steps: a };
}
const { schedule: oe, cancel: Ue, state: fe, steps: En } = /* @__PURE__ */ Vs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ne, !0);
let cn;
function Eh() {
  cn = void 0;
}
const ye = {
  now: () => (cn === void 0 && ye.set(fe.isProcessing || Ze.useManualTiming ? fe.timestamp : performance.now()), cn),
  set: (e) => {
    cn = e, queueMicrotask(Eh);
  }
}, Ss = (e) => (t) => typeof t == "string" && t.startsWith(e), Zr = /* @__PURE__ */ Ss("--"), Bh = /* @__PURE__ */ Ss("var(--"), Yr = (e) => Bh(e) ? Fh.test(e.split("/*")[0].trim()) : !1, Fh = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, xt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Bt = {
  ...xt,
  transform: (e) => Fe(0, 1, e)
}, en = {
  ...xt,
  default: 1
}, It = (e) => Math.round(e * 1e5) / 1e5, _r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Oh(e) {
  return e == null;
}
const Zh = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ur = (e, t) => (n) => !!(typeof n == "string" && Zh.test(n) && n.startsWith(e) || t && !Oh(n) && Object.prototype.hasOwnProperty.call(n, t)), js = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, a, c] = r.match(_r);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(a),
    alpha: c !== void 0 ? parseFloat(c) : 1
  };
}, Yh = (e) => Fe(0, 255, e), Bn = {
  ...xt,
  transform: (e) => Math.round(Yh(e))
}, Je = {
  test: /* @__PURE__ */ Ur("rgb", "red"),
  parse: /* @__PURE__ */ js("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Bn.transform(e) + ", " + Bn.transform(t) + ", " + Bn.transform(n) + ", " + It(Bt.transform(r)) + ")"
};
function _h(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const nr = {
  test: /* @__PURE__ */ Ur("#"),
  parse: _h,
  transform: Je.transform
}, qt = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Ye = /* @__PURE__ */ qt("deg"), Re = /* @__PURE__ */ qt("%"), z = /* @__PURE__ */ qt("px"), Uh = /* @__PURE__ */ qt("vh"), Gh = /* @__PURE__ */ qt("vw"), No = {
  ...Re,
  parse: (e) => Re.parse(e) / 100,
  transform: (e) => Re.transform(e * 100)
}, at = {
  test: /* @__PURE__ */ Ur("hsl", "hue"),
  parse: /* @__PURE__ */ js("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Re.transform(It(t)) + ", " + Re.transform(It(n)) + ", " + It(Bt.transform(r)) + ")"
}, de = {
  test: (e) => Je.test(e) || nr.test(e) || at.test(e),
  parse: (e) => Je.test(e) ? Je.parse(e) : at.test(e) ? at.parse(e) : nr.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Je.transform(e) : at.transform(e),
  getAnimatableNone: (e) => {
    const t = de.parse(e);
    return t.alpha = 0, de.transform(t);
  }
}, Kh = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Xh(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(_r)) == null ? void 0 : t.length) || 0) + (((n = e.match(Kh)) == null ? void 0 : n.length) || 0) > 0;
}
const $s = "number", Ts = "color", qh = "var", zh = "var(", Vo = "${}", Jh = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ft(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const c = t.replace(Jh, (l) => (de.test(l) ? (r.color.push(s), o.push(Ts), n.push(de.parse(l))) : l.startsWith(zh) ? (r.var.push(s), o.push(qh), n.push(l)) : (r.number.push(s), o.push($s), n.push(parseFloat(l))), ++s, Vo)).split(Vo);
  return { values: n, split: c, indexes: r, types: o };
}
function As(e) {
  return Ft(e).values;
}
function Is(e) {
  const { split: t, types: n } = Ft(e), r = t.length;
  return (o) => {
    let s = "";
    for (let a = 0; a < r; a++)
      if (s += t[a], o[a] !== void 0) {
        const c = n[a];
        c === $s ? s += It(o[a]) : c === Ts ? s += de.transform(o[a]) : s += o[a];
      }
    return s;
  };
}
const Qh = (e) => typeof e == "number" ? 0 : de.test(e) ? de.getAnimatableNone(e) : e;
function Wh(e) {
  const t = As(e);
  return Is(e)(t.map(Qh));
}
const Ge = {
  test: Xh,
  parse: As,
  createTransformer: Is,
  getAnimatableNone: Wh
};
function Fn(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function e1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, a = 0;
  if (!t)
    o = s = a = n;
  else {
    const c = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - c;
    o = Fn(l, c, e + 1 / 3), s = Fn(l, c, e), a = Fn(l, c, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
function kn(e, t) {
  return (n) => n > 0 ? t : e;
}
const se = (e, t, n) => e + (t - e) * n, On = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, t1 = [nr, Je, at], n1 = (e) => t1.find((t) => t.test(e));
function So(e) {
  const t = n1(e);
  if (Mt(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === at && (n = e1(n)), n;
}
const jo = (e, t) => {
  const n = So(e), r = So(t);
  if (!n || !r)
    return kn(e, t);
  const o = { ...n };
  return (s) => (o.red = On(n.red, r.red, s), o.green = On(n.green, r.green, s), o.blue = On(n.blue, r.blue, s), o.alpha = se(n.alpha, r.alpha, s), Je.transform(o));
}, rr = /* @__PURE__ */ new Set(["none", "hidden"]);
function r1(e, t) {
  return rr.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function o1(e, t) {
  return (n) => se(e, t, n);
}
function Gr(e) {
  return typeof e == "number" ? o1 : typeof e == "string" ? Yr(e) ? kn : de.test(e) ? jo : a1 : Array.isArray(e) ? Hs : typeof e == "object" ? de.test(e) ? jo : i1 : kn;
}
function Hs(e, t) {
  const n = [...e], r = n.length, o = e.map((s, a) => Gr(s)(s, t[a]));
  return (s) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](s);
    return n;
  };
}
function i1(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Gr(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function s1(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o], a = e.indexes[s][r[s]], c = e.values[a] ?? 0;
    n[o] = c, r[s]++;
  }
  return n;
}
const a1 = (e, t) => {
  const n = Ge.createTransformer(t), r = Ft(e), o = Ft(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? rr.has(e) && !o.values.length || rr.has(t) && !r.values.length ? r1(e, t) : Kt(Hs(s1(r, o), o.values), n) : (Mt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), kn(e, t));
};
function Ps(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? se(e, t, n) : Gr(e)(e, t);
}
const c1 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => oe.update(t, n),
    stop: () => Ue(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => fe.isProcessing ? fe.timestamp : ye.now()
  };
}, Rs = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += Math.round(e(s / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Ln = 2e4;
function Kr(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ln; )
    t += n, r = e.next(t);
  return t >= Ln ? 1 / 0 : t;
}
function l1(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), o = Math.min(Kr(r), Ln);
  return {
    type: "keyframes",
    ease: (s) => r.next(o * s).value / t,
    duration: /* @__PURE__ */ Pe(o)
  };
}
const d1 = 5;
function Ds(e, t, n) {
  const r = Math.max(t - d1, 0);
  return gs(n - e(r), t - r);
}
const ie = {
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
}, Zn = 1e-3;
function u1({ duration: e = ie.duration, bounce: t = ie.bounce, velocity: n = ie.velocity, mass: r = ie.mass }) {
  let o, s;
  Mt(e <= /* @__PURE__ */ Te(ie.maxDuration), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  a = Fe(ie.minDamping, ie.maxDamping, a), e = Fe(ie.minDuration, ie.maxDuration, /* @__PURE__ */ Pe(e)), a < 1 ? (o = (d) => {
    const u = d * a, h = u * e, p = u - n, f = or(d, a), k = Math.exp(-h);
    return Zn - p / f * k;
  }, s = (d) => {
    const h = d * a * e, p = h * n + n, f = Math.pow(a, 2) * Math.pow(d, 2) * e, k = Math.exp(-h), g = or(Math.pow(d, 2), a);
    return (-o(d) + Zn > 0 ? -1 : 1) * ((p - f) * k) / g;
  }) : (o = (d) => {
    const u = Math.exp(-d * e), h = (d - n) * e + 1;
    return -Zn + u * h;
  }, s = (d) => {
    const u = Math.exp(-d * e), h = (n - d) * (e * e);
    return u * h;
  });
  const c = 5 / e, l = p1(o, s, c);
  if (e = /* @__PURE__ */ Te(e), isNaN(l))
    return {
      stiffness: ie.stiffness,
      damping: ie.damping,
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
const h1 = 12;
function p1(e, t, n) {
  let r = n;
  for (let o = 1; o < h1; o++)
    r = r - e(r) / t(r);
  return r;
}
function or(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const f1 = ["duration", "bounce"], m1 = ["stiffness", "damping", "mass"];
function $o(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function g1(e) {
  let t = {
    velocity: ie.velocity,
    stiffness: ie.stiffness,
    damping: ie.damping,
    mass: ie.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!$o(e, m1) && $o(e, f1))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * Fe(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: ie.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = u1(e);
      t = {
        ...t,
        ...n,
        mass: ie.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function wn(e = ie.visualDuration, t = ie.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], a = n.keyframes[n.keyframes.length - 1], c = { done: !1, value: s }, { stiffness: l, damping: d, mass: u, duration: h, velocity: p, isResolvedFromDuration: f } = g1({
    ...n,
    velocity: -/* @__PURE__ */ Pe(n.velocity || 0)
  }), k = p || 0, g = d / (2 * Math.sqrt(l * u)), C = a - s, v = /* @__PURE__ */ Pe(Math.sqrt(l / u)), w = Math.abs(C) < 5;
  r || (r = w ? ie.restSpeed.granular : ie.restSpeed.default), o || (o = w ? ie.restDelta.granular : ie.restDelta.default);
  let y;
  if (g < 1) {
    const N = or(v, g);
    y = (L) => {
      const M = Math.exp(-g * v * L);
      return a - M * ((k + g * v * C) / N * Math.sin(N * L) + C * Math.cos(N * L));
    };
  } else if (g === 1)
    y = (N) => a - Math.exp(-v * N) * (C + (k + v * C) * N);
  else {
    const N = v * Math.sqrt(g * g - 1);
    y = (L) => {
      const M = Math.exp(-g * v * L), b = Math.min(N * L, 300);
      return a - M * ((k + g * v * C) * Math.sinh(b) + N * C * Math.cosh(b)) / N;
    };
  }
  const x = {
    calculatedDuration: f && h || null,
    next: (N) => {
      const L = y(N);
      if (f)
        c.done = N >= h;
      else {
        let M = N === 0 ? k : 0;
        g < 1 && (M = N === 0 ? /* @__PURE__ */ Te(k) : Ds(y, N, L));
        const b = Math.abs(M) <= r, j = Math.abs(a - L) <= o;
        c.done = b && j;
      }
      return c.value = c.done ? a : L, c;
    },
    toString: () => {
      const N = Math.min(Kr(x), Ln), L = Rs((M) => x.next(N * M).value, N, 30);
      return N + "ms " + L;
    },
    toTransition: () => {
    }
  };
  return x;
}
wn.applyToOptions = (e) => {
  const t = l1(e, 100, wn);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ Te(t.duration), e.type = "keyframes", e;
};
function ir({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: a, min: c, max: l, restDelta: d = 0.5, restSpeed: u }) {
  const h = e[0], p = {
    done: !1,
    value: h
  }, f = (b) => c !== void 0 && b < c || l !== void 0 && b > l, k = (b) => c === void 0 ? l : l === void 0 || Math.abs(c - b) < Math.abs(l - b) ? c : l;
  let g = n * t;
  const C = h + g, v = a === void 0 ? C : a(C);
  v !== C && (g = v - h);
  const w = (b) => -g * Math.exp(-b / r), y = (b) => v + w(b), x = (b) => {
    const j = w(b), S = y(b);
    p.done = Math.abs(j) <= d, p.value = p.done ? v : S;
  };
  let N, L;
  const M = (b) => {
    f(p.value) && (N = b, L = wn({
      keyframes: [p.value, k(p.value)],
      velocity: Ds(y, b, p.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: d,
      restSpeed: u
    }));
  };
  return M(0), {
    calculatedDuration: null,
    next: (b) => {
      let j = !1;
      return !L && N === void 0 && (j = !0, x(b), M(b)), N !== void 0 && b >= N ? L.next(b - N) : (!j && x(b), p);
    }
  };
}
function v1(e, t, n) {
  const r = [], o = n || Ze.mix || Ps, s = e.length - 1;
  for (let a = 0; a < s; a++) {
    let c = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Ne : t;
      c = Kt(l, c);
    }
    r.push(c);
  }
  return r;
}
function k1(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (Oe(s === t.length, "Both input and output ranges must be the same length"), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const a = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const c = v1(t, r, o), l = c.length, d = (u) => {
    if (a && u < e[0])
      return t[0];
    let h = 0;
    if (l > 1)
      for (; h < e.length - 2 && !(u < e[h + 1]); h++)
        ;
    const p = /* @__PURE__ */ Et(e[h], e[h + 1], u);
    return c[h](p);
  };
  return n ? (u) => d(Fe(e[0], e[s - 1], u)) : d;
}
function L1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ Et(0, t, r);
    e.push(se(n, 1, o));
  }
}
function w1(e) {
  const t = [0];
  return L1(t, e.length - 1), t;
}
function y1(e, t) {
  return e.map((n) => n * t);
}
function C1(e, t) {
  return e.map(() => t || bs).splice(0, e.length - 1);
}
function ct({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = Hh(r) ? r.map(xo) : xo(r), s = {
    done: !1,
    value: t[0]
  }, a = y1(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : w1(t),
    e
  ), c = k1(a, t, {
    ease: Array.isArray(o) ? o : C1(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = c(l), s.done = l >= e, s)
  };
}
const M1 = (e) => e !== null;
function Xr(e, { repeat: t, repeatType: n = "loop" }, r, o = 1) {
  const s = e.filter(M1), c = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !c || r === void 0 ? s[c] : r;
}
const x1 = {
  decay: ir,
  inertia: ir,
  tween: ct,
  keyframes: ct,
  spring: wn
};
function Es(e) {
  typeof e.type == "string" && (e.type = x1[e.type]);
}
class qr {
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
const b1 = (e) => e / 100;
class zr extends qr {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var r, o;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== ye.now() && this.tick(ye.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (o = (r = this.options).onStop) == null || o.call(r));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Es(t);
    const { type: n = ct, repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: a = 0 } = t;
    let { keyframes: c } = t;
    const l = n || ct;
    process.env.NODE_ENV !== "production" && l !== ct && Oe(c.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${c}`), l !== ct && typeof c[0] != "number" && (this.mixKeyframes = Kt(b1, Ps(c[0], c[1])), c = [0, 100]);
    const d = l({ ...t, keyframes: c });
    s === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...c].reverse(),
      velocity: -a
    })), d.calculatedDuration === null && (d.calculatedDuration = Kr(d));
    const { calculatedDuration: u } = d;
    this.calculatedDuration = u, this.resolvedDuration = u + o, this.totalDuration = this.resolvedDuration * (r + 1) - o, this.generator = d;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: o, mixKeyframes: s, mirroredGenerator: a, resolvedDuration: c, calculatedDuration: l } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: d = 0, keyframes: u, repeat: h, repeatType: p, repeatDelay: f, type: k, onUpdate: g, finalKeyframe: C } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const v = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), w = this.playbackSpeed >= 0 ? v < 0 : v > o;
    this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let y = this.currentTime, x = r;
    if (h) {
      const b = Math.min(this.currentTime, o) / c;
      let j = Math.floor(b), S = b % 1;
      !S && b >= 1 && (S = 1), S === 1 && j--, j = Math.min(j, h + 1), !!(j % 2) && (p === "reverse" ? (S = 1 - S, f && (S -= f / c)) : p === "mirror" && (x = a)), y = Fe(0, 1, S) * c;
    }
    const N = w ? { done: !1, value: u[0] } : x.next(y);
    s && (N.value = s(N.value));
    let { done: L } = N;
    !w && l !== null && (L = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const M = this.holdTime === null && (this.state === "finished" || this.state === "running" && L);
    return M && k !== ir && (N.value = Xr(u, this.options, C, this.speed)), g && g(N.value), M && this.finish(), N;
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
    return /* @__PURE__ */ Pe(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ Pe(this.currentTime);
  }
  set time(t) {
    var n;
    t = /* @__PURE__ */ Te(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(ye.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ Pe(this.currentTime));
  }
  play() {
    var o, s;
    if (this.isStopped)
      return;
    const { driver: t = c1, startTime: n } = this.options;
    this.driver || (this.driver = t((a) => this.tick(a))), (s = (o = this.options).onPlay) == null || s.call(o);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ye.now()), this.holdTime = this.currentTime;
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
function N1(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const Qe = (e) => e * 180 / Math.PI, sr = (e) => {
  const t = Qe(Math.atan2(e[1], e[0]));
  return ar(t);
}, V1 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: sr,
  rotateZ: sr,
  skewX: (e) => Qe(Math.atan(e[1])),
  skewY: (e) => Qe(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, ar = (e) => (e = e % 360, e < 0 && (e += 360), e), To = sr, Ao = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Io = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), S1 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Ao,
  scaleY: Io,
  scale: (e) => (Ao(e) + Io(e)) / 2,
  rotateX: (e) => ar(Qe(Math.atan2(e[6], e[5]))),
  rotateY: (e) => ar(Qe(Math.atan2(-e[2], e[0]))),
  rotateZ: To,
  rotate: To,
  skewX: (e) => Qe(Math.atan(e[4])),
  skewY: (e) => Qe(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function cr(e) {
  return e.includes("scale") ? 1 : 0;
}
function lr(e, t) {
  if (!e || e === "none")
    return cr(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n)
    r = S1, o = n;
  else {
    const c = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = V1, o = c;
  }
  if (!o)
    return cr(t);
  const s = r[t], a = o[1].split(",").map($1);
  return typeof s == "function" ? s(a) : a[s];
}
const j1 = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return lr(n, t);
};
function $1(e) {
  return parseFloat(e.trim());
}
const bt = [
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
], Nt = new Set(bt), Ho = (e) => e === xt || e === z, T1 = /* @__PURE__ */ new Set(["x", "y", "z"]), A1 = bt.filter((e) => !T1.has(e));
function I1(e) {
  const t = [];
  return A1.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const et = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => lr(t, "x"),
  y: (e, { transform: t }) => lr(t, "y")
};
et.translateX = et.x;
et.translateY = et.y;
const tt = /* @__PURE__ */ new Set();
let dr = !1, ur = !1, hr = !1;
function Bs() {
  if (ur) {
    const e = Array.from(tt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = I1(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([s, a]) => {
        var c;
        (c = r.getValue(s)) == null || c.set(a);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  ur = !1, dr = !1, tt.forEach((e) => e.complete(hr)), tt.clear();
}
function Fs() {
  tt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ur = !0);
  });
}
function H1() {
  hr = !0, Fs(), Bs(), hr = !1;
}
class Jr {
  constructor(t, n, r, o, s, a = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = a;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (tt.add(this), dr || (dr = !0, oe.read(Fs), oe.resolveKeyframes(Bs))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    if (t[0] === null) {
      const s = o == null ? void 0 : o.get(), a = t[t.length - 1];
      if (s !== void 0)
        t[0] = s;
      else if (r && n) {
        const c = r.readValue(n, a);
        c != null && (t[0] = c);
      }
      t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
    }
    N1(t);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), tt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (tt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const P1 = (e) => e.startsWith("--");
function R1(e, t, n) {
  P1(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const D1 = /* @__PURE__ */ Dr(() => window.ScrollTimeline !== void 0), E1 = {};
function B1(e, t) {
  const n = /* @__PURE__ */ Dr(e);
  return () => E1[t] ?? n();
}
const Os = /* @__PURE__ */ B1(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Tt = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Po = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Tt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Tt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Tt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Tt([0.33, 1.53, 0.69, 0.99])
};
function Zs(e, t) {
  if (e)
    return typeof e == "function" ? Os() ? Rs(e, t) : "ease-out" : Ns(e) ? Tt(e) : Array.isArray(e) ? e.map((n) => Zs(n, t) || Po.easeOut) : Po[e];
}
function F1(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: a = "loop", ease: c = "easeOut", times: l } = {}, d = void 0) {
  const u = {
    [t]: n
  };
  l && (u.offset = l);
  const h = Zs(c, o);
  Array.isArray(h) && (u.easing = h);
  const p = {
    delay: r,
    duration: o,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: s + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  };
  return d && (p.pseudoElement = d), e.animate(u, p);
}
function Ys(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function O1({ type: e, ...t }) {
  return Ys(e) && Os() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Z1 extends qr {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: o, pseudoElement: s, allowFlatten: a = !1, finalKeyframe: c, onComplete: l } = t;
    this.isPseudoElement = !!s, this.allowFlatten = a, this.options = t, Oe(typeof t.type != "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
    const d = O1(t);
    this.animation = F1(n, r, o, d, s), d.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !s) {
        const u = Xr(o, this.options, c, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : R1(n, r, u), this.animation.cancel();
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
    return /* @__PURE__ */ Pe(Number(t));
  }
  get time() {
    return /* @__PURE__ */ Pe(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Te(t);
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
    return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && D1() ? (this.animation.timeline = t, Ne) : n(this);
  }
}
const _s = {
  anticipate: Cs,
  backInOut: ys,
  circInOut: xs
};
function Y1(e) {
  return e in _s;
}
function _1(e) {
  typeof e.ease == "string" && Y1(e.ease) && (e.ease = _s[e.ease]);
}
const Ro = 10;
class U1 extends Z1 {
  constructor(t) {
    _1(t), Es(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
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
    const { motionValue: n, onUpdate: r, onComplete: o, element: s, ...a } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const c = new zr({
      ...a,
      autoplay: !1
    }), l = /* @__PURE__ */ Te(this.finishedTime ?? this.time);
    n.setWithVelocity(c.sample(l - Ro).value, c.sample(l).value, Ro), c.stop();
  }
}
const Do = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Ge.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function G1(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function K1(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], a = Do(o, t), c = Do(s, t);
  return Mt(a === c, `You are trying to animate ${t} from "${o}" to "${s}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${s} via the \`style\` property.`), !a || !c ? !1 : G1(e) || (n === "spring" || Ys(n)) && r;
}
function Qr(e) {
  return fs(e) && "offsetHeight" in e;
}
const X1 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), q1 = /* @__PURE__ */ Dr(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function z1(e) {
  var d;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: o, damping: s, type: a } = e;
  if (!Qr((d = t == null ? void 0 : t.owner) == null ? void 0 : d.current))
    return !1;
  const { onUpdate: c, transformTemplate: l } = t.owner.getProps();
  return q1() && n && X1.has(n) && (n !== "transform" || !l) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !r && o !== "mirror" && s !== 0 && a !== "inertia";
}
const J1 = 40;
class Q1 extends qr {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: a = "loop", keyframes: c, name: l, motionValue: d, element: u, ...h }) {
    var k;
    super(), this.stop = () => {
      var g, C;
      this._animation && (this._animation.stop(), (g = this.stopTimeline) == null || g.call(this)), (C = this.keyframeResolver) == null || C.cancel();
    }, this.createdAt = ye.now();
    const p = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: s,
      repeatType: a,
      name: l,
      motionValue: d,
      element: u,
      ...h
    }, f = (u == null ? void 0 : u.KeyframeResolver) || Jr;
    this.keyframeResolver = new f(c, (g, C, v) => this.onKeyframesResolved(g, C, p, !v), l, d, u), (k = this.keyframeResolver) == null || k.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, o) {
    this.keyframeResolver = void 0;
    const { name: s, type: a, velocity: c, delay: l, isHandoff: d, onUpdate: u } = r;
    this.resolvedAt = ye.now(), K1(t, s, a, c) || ((Ze.instantAnimations || !l) && (u == null || u(Xr(t, r, n))), t[0] = t[t.length - 1], r.duration = 0, r.repeat = 0);
    const p = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > J1 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, f = !d && z1(p) ? new U1({
      ...p,
      element: p.motionValue.owner.current
    }) : new zr(p);
    f.finished.then(() => this.notifyFinished()).catch(Ne), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
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
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), H1()), this._animation;
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
const W1 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function e4(e) {
  const t = W1.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const t4 = 4;
function Us(e, t, n = 1) {
  Oe(n <= t4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = e4(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const a = s.trim();
    return ps(a) ? parseFloat(a) : a;
  }
  return Yr(o) ? Us(o, t, n + 1) : o;
}
function Wr(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Gs = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...bt
]), n4 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Ks = (e) => (t) => t.test(e), Xs = [xt, z, Re, Ye, Gh, Uh, n4], Eo = (e) => Xs.find(Ks(e));
function r4(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ms(e) : !0;
}
const o4 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function i4(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(_r) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = o4.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const s4 = /\b([a-z-]*)\(.*?\)/gu, pr = {
  ...Ge,
  getAnimatableNone: (e) => {
    const t = e.match(s4);
    return t ? t.map(i4).join(" ") : e;
  }
}, Bo = {
  ...xt,
  transform: Math.round
}, a4 = {
  rotate: Ye,
  rotateX: Ye,
  rotateY: Ye,
  rotateZ: Ye,
  scale: en,
  scaleX: en,
  scaleY: en,
  scaleZ: en,
  skew: Ye,
  skewX: Ye,
  skewY: Ye,
  distance: z,
  translateX: z,
  translateY: z,
  translateZ: z,
  x: z,
  y: z,
  z,
  perspective: z,
  transformPerspective: z,
  opacity: Bt,
  originX: No,
  originY: No,
  originZ: z
}, eo = {
  // Border props
  borderWidth: z,
  borderTopWidth: z,
  borderRightWidth: z,
  borderBottomWidth: z,
  borderLeftWidth: z,
  borderRadius: z,
  radius: z,
  borderTopLeftRadius: z,
  borderTopRightRadius: z,
  borderBottomRightRadius: z,
  borderBottomLeftRadius: z,
  // Positioning props
  width: z,
  maxWidth: z,
  height: z,
  maxHeight: z,
  top: z,
  right: z,
  bottom: z,
  left: z,
  // Spacing props
  padding: z,
  paddingTop: z,
  paddingRight: z,
  paddingBottom: z,
  paddingLeft: z,
  margin: z,
  marginTop: z,
  marginRight: z,
  marginBottom: z,
  marginLeft: z,
  // Misc
  backgroundPositionX: z,
  backgroundPositionY: z,
  ...a4,
  zIndex: Bo,
  // SVG
  fillOpacity: Bt,
  strokeOpacity: Bt,
  numOctaves: Bo
}, c4 = {
  ...eo,
  // Color props
  color: de,
  backgroundColor: de,
  outlineColor: de,
  fill: de,
  stroke: de,
  // Border props
  borderColor: de,
  borderTopColor: de,
  borderRightColor: de,
  borderBottomColor: de,
  borderLeftColor: de,
  filter: pr,
  WebkitFilter: pr
}, qs = (e) => c4[e];
function zs(e, t) {
  let n = qs(e);
  return n !== pr && (n = Ge), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const l4 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function d4(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !l4.has(s) && Ft(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = zs(n, o);
}
class u4 extends Jr {
  constructor(t, n, r, o, s) {
    super(t, n, r, o, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let d = t[l];
      if (typeof d == "string" && (d = d.trim(), Yr(d))) {
        const u = Us(d, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !Gs.has(r) || t.length !== 2)
      return;
    const [o, s] = t, a = Eo(o), c = Eo(s);
    if (a !== c)
      if (Ho(a) && Ho(c))
        for (let l = 0; l < t.length; l++) {
          const d = t[l];
          typeof d == "string" && (t[l] = parseFloat(d));
        }
      else et[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      (t[o] === null || r4(t[o])) && r.push(o);
    r.length && d4(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = et[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    const s = r.length - 1, a = r[s];
    r[s] = et[n](t.measureViewportBox(), window.getComputedStyle(t.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), (c = this.removedTransforms) != null && c.length && this.removedTransforms.forEach(([l, d]) => {
      t.getValue(l).set(d);
    }), this.resolveNoneKeyframes();
  }
}
function h4(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const o = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
const Js = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Fo = 30, p4 = (e) => !isNaN(parseFloat(e));
class f4 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      var a, c;
      const s = ye.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((a = this.events.change) == null || a.notify(this.current), this.dependents))
        for (const l of this.dependents)
          l.dirty();
      o && ((c = this.events.renderRequest) == null || c.notify(this.current));
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = ye.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = p4(this.current));
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
    return process.env.NODE_ENV !== "production" && Br(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Er());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), oe.read(() => {
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
    const t = ye.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Fo)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Fo);
    return gs(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function pt(e, t) {
  return new f4(e, t);
}
const { schedule: to } = /* @__PURE__ */ Vs(queueMicrotask, !1), $e = {
  x: !1,
  y: !1
};
function Qs() {
  return $e.x || $e.y;
}
function m4(e) {
  return e === "x" || e === "y" ? $e[e] ? null : ($e[e] = !0, () => {
    $e[e] = !1;
  }) : $e.x || $e.y ? null : ($e.x = $e.y = !0, () => {
    $e.x = $e.y = !1;
  });
}
function Ws(e, t) {
  const n = h4(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function Oo(e) {
  return !(e.pointerType === "touch" || Qs());
}
function g4(e, t, n = {}) {
  const [r, o, s] = Ws(e, n), a = (c) => {
    if (!Oo(c))
      return;
    const { target: l } = c, d = t(l, c);
    if (typeof d != "function" || !l)
      return;
    const u = (h) => {
      Oo(h) && (d(h), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, o);
  };
  return r.forEach((c) => {
    c.addEventListener("pointerenter", a, o);
  }), s;
}
const ea = (e, t) => t ? e === t ? !0 : ea(e, t.parentElement) : !1, no = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, v4 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function k4(e) {
  return v4.has(e.tagName) || e.tabIndex !== -1;
}
const ln = /* @__PURE__ */ new WeakSet();
function Zo(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Yn(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const L4 = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Zo(() => {
    if (ln.has(n))
      return;
    Yn(n, "down");
    const o = Zo(() => {
      Yn(n, "up");
    }), s = () => Yn(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Yo(e) {
  return no(e) && !Qs();
}
function w4(e, t, n = {}) {
  const [r, o, s] = Ws(e, n), a = (c) => {
    const l = c.currentTarget;
    if (!Yo(c))
      return;
    ln.add(l);
    const d = t(l, c), u = (f, k) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", p), ln.has(l) && ln.delete(l), Yo(f) && typeof d == "function" && d(f, { success: k });
    }, h = (f) => {
      u(f, l === window || l === document || n.useGlobalTarget || ea(l, f.target));
    }, p = (f) => {
      u(f, !1);
    };
    window.addEventListener("pointerup", h, o), window.addEventListener("pointercancel", p, o);
  };
  return r.forEach((c) => {
    (n.useGlobalTarget ? window : c).addEventListener("pointerdown", a, o), Qr(c) && (c.addEventListener("focus", (d) => L4(d, o)), !k4(c) && !c.hasAttribute("tabindex") && (c.tabIndex = 0));
  }), s;
}
function ta(e) {
  return fs(e) && "ownerSVGElement" in e;
}
function y4(e) {
  return ta(e) && e.tagName === "svg";
}
const ve = (e) => !!(e && e.getVelocity), C4 = [...Xs, de, Ge], M4 = (e) => C4.find(Ks(e)), ro = Ct({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class x4 extends $r.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, o = Qr(r) && r.offsetWidth || 0, s = this.props.sizeRef.current;
      s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft, s.right = o - s.width - s.left;
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
function b4({ children: e, isPresent: t, anchorX: n, root: r }) {
  const o = Tr(), s = q(null), a = q({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: c } = ge(ro);
  return cs(() => {
    const { width: l, height: d, top: u, left: h, right: p } = a.current;
    if (t || !s.current || !l || !d)
      return;
    const f = n === "left" ? `left: ${h}` : `right: ${p}`;
    s.current.dataset.motionPopId = o;
    const k = document.createElement("style");
    c && (k.nonce = c);
    const g = r ?? document.head;
    return g.appendChild(k), k.sheet && k.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${d}px !important;
            ${f}px !important;
            top: ${u}px !important;
          }
        `), () => {
      g.removeChild(k), g.contains(k) && g.removeChild(k);
    };
  }, [t]), i(x4, { isPresent: t, childRef: s, sizeRef: a, children: $r.cloneElement(e, { ref: s }) });
}
const N4 = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: a, anchorX: c, root: l }) => {
  const d = Ir(V4), u = Tr();
  let h = !0, p = U(() => (h = !1, {
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
  return s && h && (p = { ...p }), U(() => {
    d.forEach((f, k) => d.set(k, !1));
  }, [n]), $r.useEffect(() => {
    !n && !d.size && r && r();
  }, [n]), a === "popLayout" && (e = i(b4, { isPresent: n, anchorX: c, root: l, children: e })), i(Vn.Provider, { value: p, children: e });
};
function V4() {
  return /* @__PURE__ */ new Map();
}
function na(e = !0) {
  const t = ge(Vn);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = Tr();
  Y(() => {
    if (e)
      return o(s);
  }, [e]);
  const a = O(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, a] : [!0];
}
const tn = (e) => e.key || "";
function _o(e) {
  const t = [];
  return Vc.forEach(e, (n) => {
    Sc(n) && t.push(n);
  }), t;
}
const S4 = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: a = !1, anchorX: c = "left", root: l }) => {
  const [d, u] = na(a), h = U(() => _o(e), [e]), p = a && !d ? [] : h.map(tn), f = q(!0), k = q(h), g = Ir(() => /* @__PURE__ */ new Map()), [C, v] = B(h), [w, y] = B(h);
  hs(() => {
    f.current = !1, k.current = h;
    for (let L = 0; L < w.length; L++) {
      const M = tn(w[L]);
      p.includes(M) ? g.delete(M) : g.get(M) !== !0 && g.set(M, !1);
    }
  }, [w, p.length, p.join("-")]);
  const x = [];
  if (h !== C) {
    let L = [...h];
    for (let M = 0; M < w.length; M++) {
      const b = w[M], j = tn(b);
      p.includes(j) || (L.splice(M, 0, b), x.push(b));
    }
    return s === "wait" && x.length && (L = x), y(_o(L)), v(h), null;
  }
  process.env.NODE_ENV !== "production" && s === "wait" && w.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: N } = ge(Ar);
  return i(he, { children: w.map((L) => {
    const M = tn(L), b = a && !d ? !1 : h === w || p.includes(M), j = () => {
      if (g.has(M))
        g.set(M, !0);
      else
        return;
      let S = !0;
      g.forEach((D) => {
        D || (S = !1);
      }), S && (N == null || N(), y(k.current), a && (u == null || u()), r && r());
    };
    return i(N4, { isPresent: b, initial: !f.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: o, mode: s, root: l, onExitComplete: b ? void 0 : j, anchorX: c, children: L }, M);
  }) });
}, ra = Ct({ strict: !1 }), Uo = {
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
}, ft = {};
for (const e in Uo)
  ft[e] = {
    isEnabled: (t) => Uo[e].some((n) => !!t[n])
  };
function j4(e) {
  for (const t in e)
    ft[t] = {
      ...ft[t],
      ...e[t]
    };
}
const $4 = /* @__PURE__ */ new Set([
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
function yn(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || $4.has(e);
}
let oa = (e) => !yn(e);
function T4(e) {
  typeof e == "function" && (oa = (t) => t.startsWith("on") ? !yn(t) : e(t));
}
try {
  T4(require("@emotion/is-prop-valid").default);
} catch {
}
function A4(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (oa(o) || n === !0 && yn(o) || !t && !yn(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function I4(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && Br(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
const Sn = /* @__PURE__ */ Ct({});
function jn(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Ot(e) {
  return typeof e == "string" || Array.isArray(e);
}
const oo = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], io = ["initial", ...oo];
function $n(e) {
  return jn(e.animate) || io.some((t) => Ot(e[t]));
}
function ia(e) {
  return !!($n(e) || e.variants);
}
function H4(e, t) {
  if ($n(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ot(n) ? n : void 0,
      animate: Ot(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function P4(e) {
  const { initial: t, animate: n } = H4(e, ge(Sn));
  return U(() => ({ initial: t, animate: n }), [Go(t), Go(n)]);
}
function Go(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const R4 = Symbol.for("motionComponentSymbol");
function lt(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function D4(e, t, n) {
  return O(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : lt(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const so = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), E4 = "framerAppearId", sa = "data-" + so(E4), aa = Ct({});
function B4(e, t, n, r, o) {
  var g, C;
  const { visualElement: s } = ge(Sn), a = ge(ra), c = ge(Vn), l = ge(ro).reducedMotion, d = q(null);
  r = r || a.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: s,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const u = d.current, h = ge(aa);
  u && !u.projection && o && (u.type === "html" || u.type === "svg") && F4(d.current, n, o, h);
  const p = q(!1);
  cs(() => {
    u && p.current && u.update(n, c);
  });
  const f = n[sa], k = q(!!f && !((g = window.MotionHandoffIsComplete) != null && g.call(window, f)) && ((C = window.MotionHasOptimisedAnimation) == null ? void 0 : C.call(window, f)));
  return hs(() => {
    u && (p.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), to.render(u.render), k.current && u.animationState && u.animationState.animateChanges());
  }), Y(() => {
    u && (!k.current && u.animationState && u.animationState.animateChanges(), k.current && (queueMicrotask(() => {
      var v;
      (v = window.MotionHandoffMarkAsComplete) == null || v.call(window, f);
    }), k.current = !1));
  }), u;
}
function F4(e, t, n, r) {
  const { layoutId: o, layout: s, drag: a, dragConstraints: c, layoutScroll: l, layoutRoot: d, layoutCrossfade: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : ca(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!a || c && lt(c),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: r,
    crossfade: u,
    layoutScroll: l,
    layoutRoot: d
  });
}
function ca(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : ca(e.parent);
}
function O4({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && j4(e);
  function s(c, l) {
    let d;
    const u = {
      ...ge(ro),
      ...c,
      layoutId: Z4(c)
    }, { isStatic: h } = u, p = P4(c), f = r(c, h);
    if (!h && Hr) {
      Y4(u, e);
      const k = _4(u);
      d = k.MeasureLayout, p.visualElement = B4(o, f, u, t, k.ProjectionNode);
    }
    return m(Sn.Provider, { value: p, children: [d && p.visualElement ? i(d, { visualElement: p.visualElement, ...u }) : null, n(o, c, D4(f, p.visualElement, l), f, h, p.visualElement)] });
  }
  s.displayName = `motion.${typeof o == "string" ? o : `create(${o.displayName ?? o.name ?? ""})`}`;
  const a = ls(s);
  return a[R4] = o, a;
}
function Z4({ layoutId: e }) {
  const t = ge(Ar).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Y4(e, t) {
  const n = ge(ra).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Mt(!1, r) : Oe(!1, r);
  }
}
function _4(e) {
  const { drag: t, layout: n } = ft;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const Zt = {};
function U4(e) {
  for (const t in e)
    Zt[t] = e[t], Zr(t) && (Zt[t].isCSSVariable = !0);
}
function la(e, { layout: t, layoutId: n }) {
  return Nt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Zt[e] || e === "opacity");
}
const G4 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, K4 = bt.length;
function X4(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < K4; s++) {
    const a = bt[s], c = e[a];
    if (c === void 0)
      continue;
    let l = !0;
    if (typeof c == "number" ? l = c === (a.startsWith("scale") ? 1 : 0) : l = parseFloat(c) === 0, !l || n) {
      const d = Js(c, eo[a]);
      if (!l) {
        o = !1;
        const u = G4[a] || a;
        r += `${u}(${d}) `;
      }
      n && (t[a] = d);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function ao(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let a = !1, c = !1;
  for (const l in t) {
    const d = t[l];
    if (Nt.has(l)) {
      a = !0;
      continue;
    } else if (Zr(l)) {
      o[l] = d;
      continue;
    } else {
      const u = Js(d, eo[l]);
      l.startsWith("origin") ? (c = !0, s[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (a || n ? r.transform = X4(t, e.transform, n) : r.transform && (r.transform = "none")), c) {
    const { originX: l = "50%", originY: d = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${l} ${d} ${u}`;
  }
}
const co = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function da(e, t, n) {
  for (const r in t)
    !ve(t[r]) && !la(r, n) && (e[r] = t[r]);
}
function q4({ transformTemplate: e }, t) {
  return U(() => {
    const n = co();
    return ao(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function z4(e, t) {
  const n = e.style || {}, r = {};
  return da(r, n, e), Object.assign(r, q4(e, t)), r;
}
function J4(e, t) {
  const n = {}, r = z4(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const Q4 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, W4 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function e2(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? Q4 : W4;
  e[s.offset] = z.transform(-r);
  const a = z.transform(t), c = z.transform(n);
  e[s.array] = `${a} ${c}`;
}
function ua(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: o,
  pathSpacing: s = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, l, d, u) {
  if (ao(e, c, d), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: p } = e;
  h.transform && (p.transform = h.transform, delete h.transform), (p.transform || h.transformOrigin) && (p.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), p.transform && (p.transformBox = (u == null ? void 0 : u.transformBox) ?? "fill-box", delete h.transformBox), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), o !== void 0 && e2(h, o, s, a, !1);
}
const ha = () => ({
  ...co(),
  attrs: {}
}), pa = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function t2(e, t, n, r) {
  const o = U(() => {
    const s = ha();
    return ua(s, t, pa(r), e.transformTemplate, e.style), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    da(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
const n2 = [
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
function lo(e) {
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
      !!(n2.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function r2(e = !1) {
  return (n, r, o, { latestValues: s }, a) => {
    const l = (lo(n) ? t2 : J4)(r, s, a, n), d = A4(r, typeof n == "string", e), u = n !== Gt ? { ...d, ...l, ref: o } : {}, { children: h } = r, p = U(() => ve(h) ? h.get() : h, [h]);
    return ds(n, {
      ...u,
      children: p
    });
  };
}
function Ko(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function uo(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = Ko(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = Ko(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
function dn(e) {
  return ve(e) ? e.get() : e;
}
function o2({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, o) {
  return {
    latestValues: i2(n, r, o, e),
    renderState: t()
  };
}
const fa = (e) => (t, n) => {
  const r = ge(Sn), o = ge(Vn), s = () => o2(e, t, r, o);
  return n ? s() : Ir(s);
};
function i2(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const p in s)
    o[p] = dn(s[p]);
  let { initial: a, animate: c } = e;
  const l = $n(e), d = ia(e);
  t && d && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), c === void 0 && (c = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || a === !1;
  const h = u ? c : a;
  if (h && typeof h != "boolean" && !jn(h)) {
    const p = Array.isArray(h) ? h : [h];
    for (let f = 0; f < p.length; f++) {
      const k = uo(e, p[f]);
      if (k) {
        const { transitionEnd: g, transition: C, ...v } = k;
        for (const w in v) {
          let y = v[w];
          if (Array.isArray(y)) {
            const x = u ? y.length - 1 : 0;
            y = y[x];
          }
          y !== null && (o[w] = y);
        }
        for (const w in g)
          o[w] = g[w];
      }
    }
  }
  return o;
}
function ho(e, t, n) {
  var s;
  const { style: r } = e, o = {};
  for (const a in r)
    (ve(r[a]) || t.style && ve(t.style[a]) || la(a, e) || ((s = n == null ? void 0 : n.getValue(a)) == null ? void 0 : s.liveStyle) !== void 0) && (o[a] = r[a]);
  return o;
}
const s2 = {
  useVisualState: fa({
    scrapeMotionValuesFromProps: ho,
    createRenderState: co
  })
};
function ma(e, t, n) {
  const r = ho(e, t, n);
  for (const o in e)
    if (ve(e[o]) || ve(t[o])) {
      const s = bt.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
const a2 = {
  useVisualState: fa({
    scrapeMotionValuesFromProps: ma,
    createRenderState: ha
  })
};
function c2(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const a = {
      ...lo(r) ? a2 : s2,
      preloadedFeatures: e,
      useRender: r2(o),
      createVisualElement: t,
      Component: r
    };
    return O4(a);
  };
}
function Yt(e, t, n) {
  const r = e.getProps();
  return uo(r, t, n !== void 0 ? n : r.custom, e);
}
const fr = (e) => Array.isArray(e);
function l2(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pt(n));
}
function d2(e) {
  return fr(e) ? e[e.length - 1] || 0 : e;
}
function u2(e, t) {
  const n = Yt(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const a in s) {
    const c = d2(s[a]);
    l2(e, a, c);
  }
}
function h2(e) {
  return !!(ve(e) && e.add);
}
function mr(e, t) {
  const n = e.getValue("willChange");
  if (h2(n))
    return n.add(t);
  if (!n && Ze.WillChange) {
    const r = new Ze.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function ga(e) {
  return e.props[sa];
}
const p2 = (e) => e !== null;
function f2(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(p2), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return o[s];
}
const m2 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, g2 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), v2 = {
  type: "keyframes",
  duration: 0.8
}, k2 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, L2 = (e, { keyframes: t }) => t.length > 2 ? v2 : Nt.has(e) ? e.startsWith("scale") ? g2(t[1]) : m2 : k2;
function w2({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: a, repeatDelay: c, from: l, elapsed: d, ...u }) {
  return !!Object.keys(u).length;
}
const po = (e, t, n, r = {}, o, s) => (a) => {
  const c = Wr(r, e) || {}, l = c.delay || r.delay || 0;
  let { elapsed: d = 0 } = r;
  d = d - /* @__PURE__ */ Te(l);
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
    element: s ? void 0 : o
  };
  w2(c) || Object.assign(u, L2(e, u)), u.duration && (u.duration = /* @__PURE__ */ Te(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Te(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let h = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (h = !0)), (Ze.instantAnimations || Ze.skipAnimations) && (h = !0, u.duration = 0, u.delay = 0), u.allowFlatten = !c.type && !c.ease, h && !s && t.get() !== void 0) {
    const p = f2(u.keyframes, c);
    if (p !== void 0) {
      oe.update(() => {
        u.onUpdate(p), u.onComplete();
      });
      return;
    }
  }
  return c.isSync ? new zr(u) : new Q1(u);
};
function y2({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function va(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...c } = t;
  r && (s = r);
  const l = [], d = o && e.animationState && e.animationState.getState()[o];
  for (const u in c) {
    const h = e.getValue(u, e.latestValues[u] ?? null), p = c[u];
    if (p === void 0 || d && y2(d, u))
      continue;
    const f = {
      delay: n,
      ...Wr(s || {}, u)
    }, k = h.get();
    if (k !== void 0 && !h.isAnimating && !Array.isArray(p) && p === k && !f.velocity)
      continue;
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const v = ga(e);
      if (v) {
        const w = window.MotionHandoffAnimation(v, u, oe);
        w !== null && (f.startTime = w, g = !0);
      }
    }
    mr(e, u), h.start(po(u, h, p, e.shouldReduceMotion && Gs.has(u) ? { type: !1 } : f, e, g));
    const C = h.animation;
    C && l.push(C);
  }
  return a && Promise.all(l).then(() => {
    oe.update(() => {
      a && u2(e, a);
    });
  }), l;
}
function gr(e, t, n = {}) {
  var l;
  const r = Yt(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = r ? () => Promise.all(va(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (d = 0) => {
    const { delayChildren: u = 0, staggerChildren: h, staggerDirection: p } = o;
    return C2(e, t, d, u, h, p, n);
  } : () => Promise.resolve(), { when: c } = o;
  if (c) {
    const [d, u] = c === "beforeChildren" ? [s, a] : [a, s];
    return d().then(() => u());
  } else
    return Promise.all([s(), a(n.delay)]);
}
function C2(e, t, n = 0, r = 0, o = 0, s = 1, a) {
  const c = [], l = e.variantChildren.size, d = (l - 1) * o, u = typeof r == "function", h = u ? (p) => r(p, l) : (
    // Support deprecated staggerChildren
    s === 1 ? (p = 0) => p * o : (p = 0) => d - p * o
  );
  return Array.from(e.variantChildren).sort(M2).forEach((p, f) => {
    p.notify("AnimationStart", t), c.push(gr(p, t, {
      ...a,
      delay: n + (u ? 0 : r) + h(f)
    }).then(() => p.notify("AnimationComplete", t)));
  }), Promise.all(c);
}
function M2(e, t) {
  return e.sortNodePosition(t);
}
function x2(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => gr(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = gr(e, t, n);
  else {
    const o = typeof t == "function" ? Yt(e, t, n.custom) : t;
    r = Promise.all(va(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function ka(e, t) {
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
const b2 = io.length;
function La(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? La(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < b2; n++) {
    const r = io[n], o = e.props[r];
    (Ot(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const N2 = [...oo].reverse(), V2 = oo.length;
function S2(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => x2(e, n, r)));
}
function j2(e) {
  let t = S2(e), n = Xo(), r = !0;
  const o = (l) => (d, u) => {
    var p;
    const h = Yt(e, u, l === "exit" ? (p = e.presenceContext) == null ? void 0 : p.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: k, ...g } = h;
      d = { ...d, ...g, ...k };
    }
    return d;
  };
  function s(l) {
    t = l(e);
  }
  function a(l) {
    const { props: d } = e, u = La(e.parent) || {}, h = [], p = /* @__PURE__ */ new Set();
    let f = {}, k = 1 / 0;
    for (let C = 0; C < V2; C++) {
      const v = N2[C], w = n[v], y = d[v] !== void 0 ? d[v] : u[v], x = Ot(y), N = v === l ? w.isActive : null;
      N === !1 && (k = C);
      let L = y === u[v] && y !== d[v] && x;
      if (L && r && e.manuallyAnimateOnMount && (L = !1), w.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && N === null || // If we didn't and don't have any defined prop for this animation type
      !y && !w.prevProp || // Or if the prop doesn't define an animation
      jn(y) || typeof y == "boolean")
        continue;
      const M = $2(w.prevProp, y);
      let b = M || // If we're making this variant active, we want to always make it active
      v === l && w.isActive && !L && x || // If we removed a higher-priority variant (i is in reverse order)
      C > k && x, j = !1;
      const S = Array.isArray(y) ? y : [y];
      let D = S.reduce(o(v), {});
      N === !1 && (D = {});
      const { prevResolvedValues: V = {} } = w, A = {
        ...V,
        ...D
      }, T = (E) => {
        b = !0, p.has(E) && (j = !0, p.delete(E)), w.needsAnimating[E] = !0;
        const K = e.getValue(E);
        K && (K.liveStyle = !1);
      };
      for (const E in A) {
        const K = D[E], $ = V[E];
        if (f.hasOwnProperty(E))
          continue;
        let P = !1;
        fr(K) && fr($) ? P = !ka(K, $) : P = K !== $, P ? K != null ? T(E) : p.add(E) : K !== void 0 && p.has(E) ? T(E) : w.protectedKeys[E] = !0;
      }
      w.prevProp = y, w.prevResolvedValues = D, w.isActive && (f = { ...f, ...D }), r && e.blockInitialAnimation && (b = !1), b && (!(L && M) || j) && h.push(...S.map((E) => ({
        animation: E,
        options: { type: v }
      })));
    }
    if (p.size) {
      const C = {};
      if (typeof d.initial != "boolean") {
        const v = Yt(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        v && v.transition && (C.transition = v.transition);
      }
      p.forEach((v) => {
        const w = e.getBaseTarget(v), y = e.getValue(v);
        y && (y.liveStyle = !0), C[v] = w ?? null;
      }), h.push({ animation: C });
    }
    let g = !!h.length;
    return r && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (g = !1), r = !1, g ? t(h) : Promise.resolve();
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
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = Xo(), r = !0;
    }
  };
}
function $2(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ka(t, e) : !1;
}
function Xe(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Xo() {
  return {
    animate: Xe(!0),
    whileInView: Xe(),
    whileHover: Xe(),
    whileTap: Xe(),
    whileDrag: Xe(),
    whileFocus: Xe(),
    exit: Xe()
  };
}
class Ke {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class T2 extends Ke {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = j2(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    jn(t) && (this.unmountControls = t.subscribe(this.node));
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
let A2 = 0;
class I2 extends Ke {
  constructor() {
    super(...arguments), this.id = A2++;
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
const H2 = {
  animation: {
    Feature: T2
  },
  exit: {
    Feature: I2
  }
};
function _t(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function zt(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const P2 = (e) => (t) => no(t) && e(t, zt(t));
function Ht(e, t, n, r) {
  return _t(e, t, P2(n), r);
}
function wa({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function R2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function D2(e, t) {
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
const ya = 1e-4, E2 = 1 - ya, B2 = 1 + ya, Ca = 0.01, F2 = 0 - Ca, O2 = 0 + Ca;
function ke(e) {
  return e.max - e.min;
}
function Z2(e, t, n) {
  return Math.abs(e - t) <= n;
}
function qo(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = se(t.min, t.max, e.origin), e.scale = ke(n) / ke(t), e.translate = se(n.min, n.max, e.origin) - e.originPoint, (e.scale >= E2 && e.scale <= B2 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= F2 && e.translate <= O2 || isNaN(e.translate)) && (e.translate = 0);
}
function Pt(e, t, n, r) {
  qo(e.x, t.x, n.x, r ? r.originX : void 0), qo(e.y, t.y, n.y, r ? r.originY : void 0);
}
function zo(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ke(t);
}
function Y2(e, t, n) {
  zo(e.x, t.x, n.x), zo(e.y, t.y, n.y);
}
function Jo(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ke(t);
}
function Rt(e, t, n) {
  Jo(e.x, t.x, n.x), Jo(e.y, t.y, n.y);
}
const Qo = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), dt = () => ({
  x: Qo(),
  y: Qo()
}), Wo = () => ({ min: 0, max: 0 }), ce = () => ({
  x: Wo(),
  y: Wo()
});
function be(e) {
  return [e("x"), e("y")];
}
function _n(e) {
  return e === void 0 || e === 1;
}
function vr({ scale: e, scaleX: t, scaleY: n }) {
  return !_n(e) || !_n(t) || !_n(n);
}
function qe(e) {
  return vr(e) || Ma(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Ma(e) {
  return ei(e.x) || ei(e.y);
}
function ei(e) {
  return e && e !== "0%";
}
function Cn(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function ti(e, t, n, r, o) {
  return o !== void 0 && (e = Cn(e, o, r)), Cn(e, n, r) + t;
}
function kr(e, t = 0, n = 1, r, o) {
  e.min = ti(e.min, t, n, r, o), e.max = ti(e.max, t, n, r, o);
}
function xa(e, { x: t, y: n }) {
  kr(e.x, t.translate, t.scale, t.originPoint), kr(e.y, n.translate, n.scale, n.originPoint);
}
const ni = 0.999999999999, ri = 1.0000000000001;
function _2(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, a;
  for (let c = 0; c < o; c++) {
    s = n[c], a = s.projectionDelta;
    const { visualElement: l } = s.options;
    l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && ht(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, xa(e, a)), r && qe(s.latestValues) && ht(e, s.latestValues));
  }
  t.x < ri && t.x > ni && (t.x = 1), t.y < ri && t.y > ni && (t.y = 1);
}
function ut(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function oi(e, t, n, r, o = 0.5) {
  const s = se(e.min, e.max, o);
  kr(e, t, n, s, r);
}
function ht(e, t) {
  oi(e.x, t.x, t.scaleX, t.scale, t.originX), oi(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function ba(e, t) {
  return wa(D2(e.getBoundingClientRect(), t));
}
function U2(e, t, n) {
  const r = ba(e, n), { scroll: o } = t;
  return o && (ut(r.x, o.offset.x), ut(r.y, o.offset.y)), r;
}
const Na = ({ current: e }) => e ? e.ownerDocument.defaultView : null, ii = (e, t) => Math.abs(e - t);
function G2(e, t) {
  const n = ii(e.x, t.x), r = ii(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Va {
  constructor(t, n, { transformPagePoint: r, contextWindow: o = window, dragSnapToOrigin: s = !1, distanceThreshold: a = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const p = Gn(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, k = G2(p.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!f && !k)
        return;
      const { point: g } = p, { timestamp: C } = fe;
      this.history.push({ ...g, timestamp: C });
      const { onStart: v, onMove: w } = this.handlers;
      f || (v && v(this.lastMoveEvent, p), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, p);
    }, this.handlePointerMove = (p, f) => {
      this.lastMoveEvent = p, this.lastMoveEventInfo = Un(f, this.transformPagePoint), oe.update(this.updatePoint, !0);
    }, this.handlePointerUp = (p, f) => {
      this.end();
      const { onEnd: k, onSessionEnd: g, resumeAnimation: C } = this.handlers;
      if (this.dragSnapToOrigin && C && C(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const v = Gn(p.type === "pointercancel" ? this.lastMoveEventInfo : Un(f, this.transformPagePoint), this.history);
      this.startEvent && k && k(p, v), g && g(p, v);
    }, !no(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = a, this.contextWindow = o || window;
    const c = zt(t), l = Un(c, this.transformPagePoint), { point: d } = l, { timestamp: u } = fe;
    this.history = [{ ...d, timestamp: u }];
    const { onSessionStart: h } = n;
    h && h(t, Gn(l, this.history)), this.removeListeners = Kt(Ht(this.contextWindow, "pointermove", this.handlePointerMove), Ht(this.contextWindow, "pointerup", this.handlePointerUp), Ht(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ue(this.updatePoint);
  }
}
function Un(e, t) {
  return t ? { point: t(e.point) } : e;
}
function si(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Gn({ point: e }, t) {
  return {
    point: e,
    delta: si(e, Sa(t)),
    offset: si(e, K2(t)),
    velocity: X2(t, 0.1)
  };
}
function K2(e) {
  return e[0];
}
function Sa(e) {
  return e[e.length - 1];
}
function X2(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Sa(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ Te(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ Pe(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function q2(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? se(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? se(n, e, r.max) : Math.min(e, n)), e;
}
function ai(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function z2(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: ai(e.x, n, o),
    y: ai(e.y, t, r)
  };
}
function ci(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function J2(e, t) {
  return {
    x: ci(e.x, t.x),
    y: ci(e.y, t.y)
  };
}
function Q2(e, t) {
  let n = 0.5;
  const r = ke(e), o = ke(t);
  return o > r ? n = /* @__PURE__ */ Et(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ Et(e.min, e.max - o, t.min)), Fe(0, 1, n);
}
function W2(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Lr = 0.35;
function ep(e = Lr) {
  return e === !1 ? e = 0 : e === !0 && (e = Lr), {
    x: li(e, "left", "right"),
    y: li(e, "top", "bottom")
  };
}
function li(e, t, n) {
  return {
    min: di(e, t),
    max: di(e, n)
  };
}
function di(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const tp = /* @__PURE__ */ new WeakMap();
class np {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ce(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const s = (h) => {
      const { dragSnapToOrigin: p } = this.getProps();
      p ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(zt(h).point);
    }, a = (h, p) => {
      const { drag: f, dragPropagation: k, onDragStart: g } = this.getProps();
      if (f && !k && (this.openDragLock && this.openDragLock(), this.openDragLock = m4(f), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = p, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), be((v) => {
        let w = this.getAxisMotionValue(v).get() || 0;
        if (Re.test(w)) {
          const { projection: y } = this.visualElement;
          if (y && y.layout) {
            const x = y.layout.layoutBox[v];
            x && (w = ke(x) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[v] = w;
      }), g && oe.postRender(() => g(h, p)), mr(this.visualElement, "transform");
      const { animationState: C } = this.visualElement;
      C && C.setActive("whileDrag", !0);
    }, c = (h, p) => {
      this.latestPointerEvent = h, this.latestPanInfo = p;
      const { dragPropagation: f, dragDirectionLock: k, onDirectionLock: g, onDrag: C } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: v } = p;
      if (k && this.currentDirection === null) {
        this.currentDirection = rp(v), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", p.point, v), this.updateAxis("y", p.point, v), this.visualElement.render(), C && C(h, p);
    }, l = (h, p) => {
      this.latestPointerEvent = h, this.latestPanInfo = p, this.stop(h, p), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, d = () => be((h) => {
      var p;
      return this.getAnimationState(h) === "paused" && ((p = this.getAxisMotionValue(h).animation) == null ? void 0 : p.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Va(t, {
      onSessionStart: s,
      onStart: a,
      onMove: c,
      onSessionEnd: l,
      resumeAnimation: d
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: r,
      contextWindow: Na(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const r = t || this.latestPointerEvent, o = n || this.latestPanInfo, s = this.isDragging;
    if (this.cancel(), !s || !o || !r)
      return;
    const { velocity: a } = o;
    this.startAnimation(a);
    const { onDragEnd: c } = this.getProps();
    c && oe.postRender(() => c(r, o));
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
    if (!r || !nn(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = q2(a, this.constraints[t], this.elastic[t])), s.set(a);
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout, o = this.constraints;
    t && lt(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = z2(r.layoutBox, t) : this.constraints = !1, this.elastic = ep(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && be((a) => {
      this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = W2(r.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !lt(t))
      return !1;
    const r = t.current;
    Oe(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = U2(r, o.root, this.visualElement.getTransformPagePoint());
    let a = J2(o.layout.layoutBox, s);
    if (n) {
      const c = n(R2(a));
      this.hasMutatedConstraints = !!c, c && (a = wa(c));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: a, onDragTransitionEnd: c } = this.getProps(), l = this.constraints || {}, d = be((u) => {
      if (!nn(u, n, this.currentDirection))
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
        ...s,
        ...h
      };
      return this.startAxisValueAnimation(u, k);
    });
    return Promise.all(d).then(c);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return mr(this.visualElement, t), r.start(po(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    be((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    be((t) => {
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
    be((n) => {
      const { drag: r } = this.getProps();
      if (!nn(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: c } = o.layout.layoutBox[n];
        s.set(t[n] - se(a, c, 0.5));
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
    if (!lt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    be((a) => {
      const c = this.getAxisMotionValue(a);
      if (c && this.constraints !== !1) {
        const l = c.get();
        o[a] = Q2({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), be((a) => {
      if (!nn(a, t, null))
        return;
      const c = this.getAxisMotionValue(a), { min: l, max: d } = this.constraints[a];
      c.set(se(l, d, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    tp.set(this.visualElement, this);
    const t = this.visualElement.current, n = Ht(t, "pointerdown", (l) => {
      const { drag: d, dragListener: u = !0 } = this.getProps();
      d && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      lt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), oe.read(r);
    const a = _t(window, "resize", () => this.scalePositionWithinConstraints()), c = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: d }) => {
      this.isDragging && d && (be((u) => {
        const h = this.getAxisMotionValue(u);
        h && (this.originPoint[u] += l[u].translate, h.set(h.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), s(), c && c();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: a = Lr, dragMomentum: c = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: a,
      dragMomentum: c
    };
  }
}
function nn(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function rp(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class op extends Ke {
  constructor(t) {
    super(t), this.removeGroupControls = Ne, this.removeListeners = Ne, this.controls = new np(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ne;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ui = (e) => (t, n) => {
  e && oe.postRender(() => e(t, n));
};
class ip extends Ke {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ne;
  }
  onPointerDown(t) {
    this.session = new Va(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Na(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: ui(t),
      onStart: ui(n),
      onMove: r,
      onEnd: (s, a) => {
        delete this.session, o && oe.postRender(() => o(s, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ht(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const un = {
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
function hi(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const $t = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (z.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = hi(e, t.target.x), r = hi(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, sp = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Ge.parse(e);
    if (o.length > 5)
      return r;
    const s = Ge.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, c = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + a] /= c, o[1 + a] /= l;
    const d = se(c, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= d), typeof o[3 + a] == "number" && (o[3 + a] /= d), s(o);
  }
};
let pi = !1;
class ap extends jc {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    U4(cp), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), pi && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), un.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, { projection: a } = r;
    return a && (a.isPresent = s, pi = !0, o || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? a.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? a.promote() : a.relegate() || oe.postRender(() => {
      const c = a.getStack();
      (!c || !c.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), to.postRender(() => {
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
function ja(e) {
  const [t, n] = na(), r = ge(Ar);
  return i(ap, { ...e, layoutGroup: r, switchLayoutGroup: ge(aa), isPresent: t, safeToRemove: n });
}
const cp = {
  borderRadius: {
    ...$t,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: $t,
  borderTopRightRadius: $t,
  borderBottomLeftRadius: $t,
  borderBottomRightRadius: $t,
  boxShadow: sp
};
function lp(e, t, n) {
  const r = ve(e) ? e : pt(e);
  return r.start(po("", r, t, n)), r.animation;
}
const dp = (e, t) => e.depth - t.depth;
class up {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Pr(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Rr(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(dp), this.isDirty = !1, this.children.forEach(t);
  }
}
function hp(e, t) {
  const n = ye.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (Ue(r), e(s - t));
  };
  return oe.setup(r, !0), () => Ue(r);
}
const $a = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], pp = $a.length, fi = (e) => typeof e == "string" ? parseFloat(e) : e, mi = (e) => typeof e == "number" || z.test(e);
function fp(e, t, n, r, o, s) {
  o ? (e.opacity = se(0, n.opacity ?? 1, mp(r)), e.opacityExit = se(t.opacity ?? 1, 0, gp(r))) : s && (e.opacity = se(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let a = 0; a < pp; a++) {
    const c = `border${$a[a]}Radius`;
    let l = gi(t, c), d = gi(n, c);
    if (l === void 0 && d === void 0)
      continue;
    l || (l = 0), d || (d = 0), l === 0 || d === 0 || mi(l) === mi(d) ? (e[c] = Math.max(se(fi(l), fi(d), r), 0), (Re.test(d) || Re.test(l)) && (e[c] += "%")) : e[c] = d;
  }
  (t.rotate || n.rotate) && (e.rotate = se(t.rotate || 0, n.rotate || 0, r));
}
function gi(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const mp = /* @__PURE__ */ Ta(0, 0.5, Ms), gp = /* @__PURE__ */ Ta(0.5, 0.95, Ne);
function Ta(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Et(e, t, r));
}
function vi(e, t) {
  e.min = t.min, e.max = t.max;
}
function xe(e, t) {
  vi(e.x, t.x), vi(e.y, t.y);
}
function ki(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Li(e, t, n, r, o) {
  return e -= t, e = Cn(e, 1 / n, r), o !== void 0 && (e = Cn(e, 1 / o, r)), e;
}
function vp(e, t = 0, n = 1, r = 0.5, o, s = e, a = e) {
  if (Re.test(t) && (t = parseFloat(t), t = se(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let c = se(s.min, s.max, r);
  e === s && (c -= t), e.min = Li(e.min, t, n, c, o), e.max = Li(e.max, t, n, c, o);
}
function wi(e, t, [n, r, o], s, a) {
  vp(e, t[n], t[r], t[o], t.scale, s, a);
}
const kp = ["x", "scaleX", "originX"], Lp = ["y", "scaleY", "originY"];
function yi(e, t, n, r) {
  wi(e.x, t, kp, n ? n.x : void 0, r ? r.x : void 0), wi(e.y, t, Lp, n ? n.y : void 0, r ? r.y : void 0);
}
function Ci(e) {
  return e.translate === 0 && e.scale === 1;
}
function Aa(e) {
  return Ci(e.x) && Ci(e.y);
}
function Mi(e, t) {
  return e.min === t.min && e.max === t.max;
}
function wp(e, t) {
  return Mi(e.x, t.x) && Mi(e.y, t.y);
}
function xi(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Ia(e, t) {
  return xi(e.x, t.x) && xi(e.y, t.y);
}
function bi(e) {
  return ke(e.x) / ke(e.y);
}
function Ni(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class yp {
  constructor() {
    this.members = [];
  }
  add(t) {
    Pr(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Rr(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
      const s = this.members[o];
      if (s.isPresent !== !1) {
        r = s;
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
function Cp(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, a = (n == null ? void 0 : n.z) || 0;
  if ((o || s || a) && (r = `translate3d(${o}px, ${s}px, ${a}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: d, rotate: u, rotateX: h, rotateY: p, skewX: f, skewY: k } = n;
    d && (r = `perspective(${d}px) ${r}`), u && (r += `rotate(${u}deg) `), h && (r += `rotateX(${h}deg) `), p && (r += `rotateY(${p}deg) `), f && (r += `skewX(${f}deg) `), k && (r += `skewY(${k}deg) `);
  }
  const c = e.x.scale * t.x, l = e.y.scale * t.y;
  return (c !== 1 || l !== 1) && (r += `scale(${c}, ${l})`), r || "none";
}
const Kn = ["", "X", "Y", "Z"], Mp = 1e3;
let xp = 0;
function Xn(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ha(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = ga(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", oe, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Ha(r);
}
function Pa({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, c = t == null ? void 0 : t()) {
      this.id = xp++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Vp), this.nodes.forEach(Tp), this.nodes.forEach(Ap), this.nodes.forEach(Sp);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = c ? c.root || c : this, this.path = c ? [...c.path, c] : [], this.parent = c, this.depth = c ? c.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new up());
    }
    addEventListener(a, c) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Er()), this.eventHandlers.get(a).add(c);
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
      this.isSVG = ta(a) && !y4(a), this.instance = a;
      const { layoutId: c, layout: l, visualElement: d } = this.options;
      if (d && !d.current && d.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || c) && (this.isLayoutDirty = !0), e) {
        let u, h = 0;
        const p = () => this.root.updateBlockedByResize = !1;
        oe.read(() => {
          h = window.innerWidth;
        }), e(a, () => {
          const f = window.innerWidth;
          f !== h && (h = f, this.root.updateBlockedByResize = !0, u && u(), u = hp(p, 250), un.hasAnimatedSinceResize && (un.hasAnimatedSinceResize = !1, this.nodes.forEach(ji)));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: h, hasRelativeLayoutChanged: p, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const k = this.options.transition || d.getDefaultTransition() || Dp, { onLayoutAnimationStart: g, onLayoutAnimationComplete: C } = d.getProps(), v = !this.targetLayout || !Ia(this.targetLayout, f), w = !h && p;
        if (this.options.layoutRoot || this.resumeFrom || w || h && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const y = {
            ...Wr(k, "layout"),
            onPlay: g,
            onComplete: C
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0, y.type = !1), this.startAnimation(y), this.setAnimationOrigin(u, w);
        } else
          h || ji(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = f;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Ue(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Ip), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ha(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Vi);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Si);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach($p), this.nodes.forEach(bp), this.nodes.forEach(Np)) : this.nodes.forEach(Si), this.clearAllSnapshots();
      const c = ye.now();
      fe.delta = Fe(0, 1e3 / 60, c - fe.timestamp), fe.timestamp = c, fe.isProcessing = !0, En.update.process(fe), En.preRender.process(fe), En.render.process(fe), fe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, to.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(jp), this.sharedNodes.forEach(Hp);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, oe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      oe.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ke(this.snapshot.measuredBox.x) && !ke(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ce(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, c = this.projectionDelta && !Aa(this.projectionDelta), l = this.getTransformTemplate(), d = l ? l(this.latestValues, "") : void 0, u = d !== this.prevTransformTemplateValue;
      a && this.instance && (c || qe(this.latestValues) || u) && (o(this.instance, d), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const c = this.measurePageBox();
      let l = this.removeElementScroll(c);
      return a && (l = this.removeTransform(l)), Ep(l), {
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
        return ce();
      const c = a.measureViewportBox();
      if (!(((d = this.scroll) == null ? void 0 : d.wasRoot) || this.path.some(Bp))) {
        const { scroll: u } = this.root;
        u && (ut(c.x, u.offset.x), ut(c.y, u.offset.y));
      }
      return c;
    }
    removeElementScroll(a) {
      var l;
      const c = ce();
      if (xe(c, a), (l = this.scroll) != null && l.wasRoot)
        return c;
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d], { scroll: h, options: p } = u;
        u !== this.root && h && p.layoutScroll && (h.wasRoot && xe(c, a), ut(c.x, h.offset.x), ut(c.y, h.offset.y));
      }
      return c;
    }
    applyTransform(a, c = !1) {
      const l = ce();
      xe(l, a);
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        !c && u.options.layoutScroll && u.scroll && u !== u.root && ht(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), qe(u.latestValues) && ht(l, u.latestValues);
      }
      return qe(this.latestValues) && ht(l, this.latestValues), l;
    }
    removeTransform(a) {
      const c = ce();
      xe(c, a);
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l];
        if (!d.instance || !qe(d.latestValues))
          continue;
        vr(d.latestValues) && d.updateSnapshot();
        const u = ce(), h = d.measurePageBox();
        xe(u, h), yi(c, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, u);
      }
      return qe(this.latestValues) && yi(c, this.latestValues), c;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== fe.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = fe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ce(), this.relativeTargetOrigin = ce(), Rt(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), xe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ce(), this.targetWithTransforms = ce()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Y2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : xe(this.target, this.layout.layoutBox), xa(this.target, this.targetDelta)) : xe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ce(), this.relativeTargetOrigin = ce(), Rt(this.relativeTargetOrigin, this.target, f.target), xe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || vr(this.parent.latestValues) || Ma(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var k;
      const a = this.getLead(), c = !!this.resumingFrom || this !== a;
      let l = !0;
      if ((this.isProjectionDirty || (k = this.parent) != null && k.isProjectionDirty) && (l = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === fe.timestamp && (l = !1), l)
        return;
      const { layout: d, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || u))
        return;
      xe(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, p = this.treeScale.y;
      _2(this.layoutCorrected, this.treeScale, this.path, c), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ce());
      const { target: f } = a;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ki(this.prevProjectionDelta.x, this.projectionDelta.x), ki(this.prevProjectionDelta.y, this.projectionDelta.y)), Pt(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== p || !Ni(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ni(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
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
      this.prevProjectionDelta = dt(), this.projectionDelta = dt(), this.projectionDeltaWithTransform = dt();
    }
    setAnimationOrigin(a, c = !1) {
      const l = this.snapshot, d = l ? l.latestValues : {}, u = { ...this.latestValues }, h = dt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !c;
      const p = ce(), f = l ? l.source : void 0, k = this.layout ? this.layout.source : void 0, g = f !== k, C = this.getStack(), v = !C || C.members.length <= 1, w = !!(g && !v && this.options.crossfade === !0 && !this.path.some(Rp));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (x) => {
        const N = x / 1e3;
        $i(h.x, a.x, N), $i(h.y, a.y, N), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Rt(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Pp(this.relativeTarget, this.relativeTargetOrigin, p, N), y && wp(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = ce()), xe(y, this.relativeTarget)), g && (this.animationValues = u, fp(u, d, this.latestValues, N, w, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = N;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      var c, l, d;
      this.notifyListeners("animationStart"), (c = this.currentAnimation) == null || c.stop(), (d = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || d.stop(), this.pendingAnimation && (Ue(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = oe.update(() => {
        un.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = pt(0)), this.currentAnimation = lp(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Mp), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: c, target: l, layout: d, latestValues: u } = a;
      if (!(!c || !l || !d)) {
        if (this !== a && this.layout && d && Ra(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
          l = this.target || ce();
          const h = ke(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + h;
          const p = ke(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + p;
        }
        xe(c, l), ht(c, u), Pt(this.projectionDeltaWithTransform, this.layoutCorrected, c, u);
      }
    }
    registerSharedNode(a, c) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new yp()), this.sharedNodes.get(a).add(c);
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
      l.z && Xn("z", a, d, this.animationValues);
      for (let u = 0; u < Kn.length; u++)
        Xn(`rotate${Kn[u]}`, a, d, this.animationValues), Xn(`skew${Kn[u]}`, a, d, this.animationValues);
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
        this.needsReset = !1, a.visibility = "", a.opacity = "", a.pointerEvents = dn(c == null ? void 0 : c.pointerEvents) || "", a.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        this.options.layoutId && (a.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, a.pointerEvents = dn(c == null ? void 0 : c.pointerEvents) || ""), this.hasProjected && !qe(this.latestValues) && (a.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      a.visibility = "";
      const u = d.animationValues || d.latestValues;
      this.applyTransformsToTarget();
      let h = Cp(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (h = l(u, h)), a.transform = h;
      const { x: p, y: f } = this.projectionDelta;
      a.transformOrigin = `${p.origin * 100}% ${f.origin * 100}% 0`, d.animationValues ? a.opacity = d === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : a.opacity = d === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const k in Zt) {
        if (u[k] === void 0)
          continue;
        const { correct: g, applyTo: C, isCSSVariable: v } = Zt[k], w = h === "none" ? u[k] : g(u[k], d);
        if (C) {
          const y = C.length;
          for (let x = 0; x < y; x++)
            a[C[x]] = w;
        } else
          v ? this.options.visualElement.renderState.vars[k] = w : a[k] = w;
      }
      this.options.layoutId && (a.pointerEvents = d === this ? dn(c == null ? void 0 : c.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var c;
        return (c = a.currentAnimation) == null ? void 0 : c.stop();
      }), this.root.nodes.forEach(Vi), this.root.sharedNodes.clear();
    }
  };
}
function bp(e) {
  e.updateLayout();
}
function Np(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, a = t.source !== e.layout.source;
    s === "size" ? be((h) => {
      const p = a ? t.measuredBox[h] : t.layoutBox[h], f = ke(p);
      p.min = r[h].min, p.max = p.min + f;
    }) : Ra(s, t.layoutBox, r) && be((h) => {
      const p = a ? t.measuredBox[h] : t.layoutBox[h], f = ke(r[h]);
      p.max = p.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[h].max = e.relativeTarget[h].min + f);
    });
    const c = dt();
    Pt(c, r, t.layoutBox);
    const l = dt();
    a ? Pt(l, e.applyTransform(o, !0), t.measuredBox) : Pt(l, r, t.layoutBox);
    const d = !Aa(c);
    let u = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: p, layout: f } = h;
        if (p && f) {
          const k = ce();
          Rt(k, t.layoutBox, p.layoutBox);
          const g = ce();
          Rt(g, r, f.layoutBox), Ia(k, g) || (u = !0), h.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = k, e.relativeParent = h);
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
function Vp(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Sp(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function jp(e) {
  e.clearSnapshot();
}
function Vi(e) {
  e.clearMeasurements();
}
function Si(e) {
  e.isLayoutDirty = !1;
}
function $p(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function ji(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Tp(e) {
  e.resolveTargetDelta();
}
function Ap(e) {
  e.calcProjection();
}
function Ip(e) {
  e.resetSkewAndRotation();
}
function Hp(e) {
  e.removeLeadSnapshot();
}
function $i(e, t, n) {
  e.translate = se(t.translate, 0, n), e.scale = se(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Ti(e, t, n, r) {
  e.min = se(t.min, n.min, r), e.max = se(t.max, n.max, r);
}
function Pp(e, t, n, r) {
  Ti(e.x, t.x, n.x, r), Ti(e.y, t.y, n.y, r);
}
function Rp(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Dp = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ai = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Ii = Ai("applewebkit/") && !Ai("chrome/") ? Math.round : Ne;
function Hi(e) {
  e.min = Ii(e.min), e.max = Ii(e.max);
}
function Ep(e) {
  Hi(e.x), Hi(e.y);
}
function Ra(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Z2(bi(t), bi(n), 0.2);
}
function Bp(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Fp = Pa({
  attachResizeListener: (e, t) => _t(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), qn = {
  current: void 0
}, Da = Pa({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!qn.current) {
      const e = new Fp({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), qn.current = e;
    }
    return qn.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Op = {
  pan: {
    Feature: ip
  },
  drag: {
    Feature: op,
    ProjectionNode: Da,
    MeasureLayout: ja
  }
};
function Pi(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && oe.postRender(() => s(t, zt(t)));
}
class Zp extends Ke {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = g4(t, (n, r) => (Pi(this.node, r, "Start"), (o) => Pi(this.node, o, "End"))));
  }
  unmount() {
  }
}
class Yp extends Ke {
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
    this.unmount = Kt(_t(this.node.current, "focus", () => this.onFocus()), _t(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Ri(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && oe.postRender(() => s(t, zt(t)));
}
class _p extends Ke {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = w4(t, (n, r) => (Ri(this.node, r, "Start"), (o, { success: s }) => Ri(this.node, o, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const wr = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap(), Up = (e) => {
  const t = wr.get(e.target);
  t && t(e);
}, Gp = (e) => {
  e.forEach(Up);
};
function Kp({ root: e, ...t }) {
  const n = e || document;
  zn.has(n) || zn.set(n, {});
  const r = zn.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Gp, { root: e, ...t })), r[o];
}
function Xp(e, t, n) {
  const r = Kp(t);
  return wr.set(e, n), r.observe(e), () => {
    wr.delete(e), r.unobserve(e);
  };
}
const qp = {
  some: 0,
  all: 1
};
class zp extends Ke {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : qp[o]
    }, c = (l) => {
      const { isIntersecting: d } = l;
      if (this.isInView === d || (this.isInView = d, s && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), p = d ? u : h;
      p && p(l);
    };
    return Xp(this.node.current, a, c);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Jp(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Jp({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Qp = {
  inView: {
    Feature: zp
  },
  tap: {
    Feature: _p
  },
  focus: {
    Feature: Yp
  },
  hover: {
    Feature: Zp
  }
}, Wp = {
  layout: {
    ProjectionNode: Da,
    MeasureLayout: ja
  }
}, yr = { current: null }, Ea = { current: !1 };
function ef() {
  if (Ea.current = !0, !!Hr)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => yr.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      yr.current = !1;
}
const tf = /* @__PURE__ */ new WeakMap();
function nf(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (ve(o))
      e.addValue(r, o);
    else if (ve(s))
      e.addValue(r, pt(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const a = e.getValue(r);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = e.getStaticValue(r);
        e.addValue(r, pt(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Di = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class rf {
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
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: s, visualState: a }, c = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Jr, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = ye.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, oe.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: d } = a;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = d, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = c, this.blockInitialAnimation = !!s, this.isControllingVariants = $n(n), this.isVariantNode = ia(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in h) {
      const f = h[p];
      l[p] !== void 0 && ve(f) && f.set(l[p], !1);
    }
  }
  mount(t) {
    this.current = t, tf.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Ea.current || ef(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : yr.current, process.env.NODE_ENV !== "production" && Br(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Ue(this.notifyUpdate), Ue(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = Nt.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (c) => {
      this.latestValues[t] = c, this.props.onUpdate && oe.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    let a;
    window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), s(), a && a(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in ft) {
      const n = ft[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: o } = n;
      if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ce();
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
    for (let r = 0; r < Di.length; r++) {
      const o = Di[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, a = t[s];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = nf(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return r === void 0 && n !== void 0 && (r = pt(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (ps(r) || ms(r)) ? r = parseFloat(r) : !M4(r) && Ge.test(n) && (r = zs(t, n)), this.setBaseTarget(t, ve(r) ? r.get() : r)), ve(r) ? r.get() : r;
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
    var s;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const a = uo(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
      a && (r = a[t]);
    }
    if (n && r !== void 0)
      return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !ve(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Er()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Ba extends rf {
  constructor() {
    super(...arguments), this.KeyframeResolver = u4;
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
    ve(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Fa(e, { style: t, vars: n }, r, o) {
  const s = e.style;
  let a;
  for (a in t)
    s[a] = t[a];
  o == null || o.applyProjectionStyles(s, r);
  for (a in n)
    s.setProperty(a, n[a]);
}
function of(e) {
  return window.getComputedStyle(e);
}
class sf extends Ba {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Fa;
  }
  readValueFromInstance(t, n) {
    var r;
    if (Nt.has(n))
      return (r = this.projection) != null && r.isProjecting ? cr(n) : j1(t, n);
    {
      const o = of(t), s = (Zr(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ba(t, n);
  }
  build(t, n, r) {
    ao(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ho(t, n, r);
  }
}
const Oa = /* @__PURE__ */ new Set([
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
function af(e, t, n, r) {
  Fa(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Oa.has(o) ? o : so(o), t.attrs[o]);
}
class cf extends Ba {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ce;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Nt.has(n)) {
      const r = qs(n);
      return r && r.default || 0;
    }
    return n = Oa.has(n) ? n : so(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ma(t, n, r);
  }
  build(t, n, r) {
    ua(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, o) {
    af(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = pa(t.tagName), super.mount(t);
  }
}
const lf = (e, t) => lo(e) ? new cf(t) : new sf(t, {
  allowProjection: e !== Gt
}), df = /* @__PURE__ */ c2({
  ...H2,
  ...Qp,
  ...Op,
  ...Wp
}, lf), me = /* @__PURE__ */ I4(df), Le = ({
  show: e,
  content: t,
  theme: n = "light",
  placement: r = "top",
  hideArrow: o = !1,
  targetBody: s = !1,
  trigger: a = "hover",
  onVisibleChange: c,
  popoverStyle: l,
  popoverClassName: d,
  style: u,
  className: h = "",
  children: p
}) => {
  const [f, k] = B(e), [g, C] = B({ top: 0, left: 0 }), [v, w] = B({ width: 0, height: 0 }), [y, x] = B(r), N = q(null), L = q(null);
  Y(() => {
    e !== void 0 && k(e);
  }, [e]), Y(() => {
    c == null || c(f);
  }, [f, c]);
  const M = 8, b = O(() => {
    if (!N.current || !s || v.width === 0 || v.height === 0) return;
    const H = N.current.getBoundingClientRect(), F = window.innerWidth, E = window.innerHeight;
    let K = 0, $ = 0, P = r;
    const I = (G) => {
      switch (G) {
        case "top":
          return {
            top: H.top - H.height - M,
            left: H.left + (H.width / 2 - v.width / 2),
            placement: "top"
          };
        case "bottom":
          return {
            top: H.top + H.height + M,
            left: H.left + (H.width / 2 - v.width / 2),
            placement: "bottom"
          };
        case "left":
          return {
            top: H.top + (H.height / 2 - v.height / 2),
            left: H.left - v.width - M,
            placement: "left"
          };
        case "right":
          return {
            top: H.top + (H.height / 2 - v.height / 2),
            left: H.right + M,
            placement: "right"
          };
        default:
          return {
            top: H.bottom + M,
            left: H.left + H.width / 2 - v.width / 2,
            placement: "bottom"
          };
      }
    };
    let R = I(P);
    K = R.top, $ = R.left, P = R.placement, (() => {
      if ($ < M && ($ = M), $ + v.width > F - M && ($ = F - v.width - M), K < M) {
        if (P === "top") {
          const G = I("bottom");
          G.top + v.height <= E - M ? (K = G.top, $ = G.left, P = "bottom") : K = M;
        }
      } else if (K + v.height > E - M && P === "bottom") {
        const G = I("top");
        G.top >= M ? (K = G.top, $ = G.left, P = "top") : K = E - v.height - M;
      }
      if (($ < M || $ + v.width > F - M) && (P === "top" || P === "bottom")) {
        const G = I("left");
        if (G.left >= M)
          K = G.top, $ = G.left, P = "left";
        else {
          const Z = I("right");
          Z.left + v.width <= F - M && (K = Z.top, $ = Z.left, P = "right");
        }
      }
    })(), C({ top: K, left: $ }), x(P);
  }, [r, s, v]);
  Y(() => {
    if (!s) return;
    const H = () => {
      b();
    }, F = () => {
      b();
    };
    return window.addEventListener("resize", H), window.addEventListener("scroll", F, !0), () => {
      window.removeEventListener("resize", H), window.removeEventListener("scroll", F, !0);
    };
  }, [b, s]), Y(() => {
    if (L.current && f && s) {
      const H = new ResizeObserver((F) => {
        for (const E of F) {
          const { width: K, height: $ } = E.target.getBoundingClientRect();
          w({ width: K, height: $ });
        }
      });
      return H.observe(L.current), () => {
        H.disconnect();
      };
    }
  }, [f, s]), Y(() => {
    f && s && v.width > 0 && v.height > 0 && b();
  }, [f, s, v, b]), Y(() => {
    if (a === "click" && f) {
      const H = (F) => {
        N.current && !N.current.contains(F.target) && k(!1);
      };
      return document.addEventListener("mousedown", H), () => {
        document.removeEventListener("mousedown", H);
      };
    }
  }, [a, f]);
  const j = () => {
    a === "hover" && e === void 0 && k(!0);
  }, S = () => {
    a === "hover" && e === void 0 && k(!1);
  }, D = () => {
    a === "click" && e === void 0 && k(!f);
  };
  if (!t) return /* @__PURE__ */ i(he, { children: p });
  const V = () => {
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
    if (!N.current || !s || v.width === 0 || v.height === 0) return {};
    const H = N.current.getBoundingClientRect(), F = 12, E = H.left + H.width / 2, K = H.top + H.height / 2, $ = g.left, P = g.top, I = E - $, R = K - P, _ = (G, Z, J) => Z >= 0 && Z <= J ? Math.max(F, Math.min(J - F, Z)) : Z < 0 ? F : J - F;
    switch (y) {
      case "top":
        return {
          left: `${_(!0, I, v.width) / v.width * 100}%`,
          top: "100%",
          transform: "translate(-50%,-50%) rotate(45deg)"
        };
      case "bottom":
        return {
          left: `${_(!0, I, v.width) / v.width * 100}%`,
          top: "0",
          transform: "translate(-50%,-50%) rotate(-135deg)"
        };
      case "left":
        return {
          left: "100%",
          top: `${_(!1, R, v.height) / v.height * 100}%`,
          transform: "translate(-50%,-50%) rotate(-45deg)"
        };
      case "right":
        return {
          left: "0",
          top: `${_(!1, R, v.height) / v.height * 100}%`,
          transform: "translate(-50%,-50%) rotate(135deg)"
        };
      default:
        return {};
    }
  }, T = /* @__PURE__ */ m(
    me.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: f ? 1 : 0 },
      transition: { duration: 0.2, type: "spring" },
      ref: L,
      className: `land-pop ${f ? "show" : ""} ${o ? "hide-arrow" : ""} ${n} ${d ?? ""}`,
      style: {
        position: s ? "fixed" : "absolute",
        ...s ? {
          top: g.top,
          left: g.left
        } : V(),
        zIndex: s ? 1e3 : 100,
        opacity: f ? 1 : 0,
        pointerEvents: f ? "auto" : "none",
        transition: "opacity 0.2s ease-in-out",
        ...l
      },
      children: [
        t,
        !o && /* @__PURE__ */ i(
          "div",
          {
            className: "land-pop-arrow",
            style: s ? A() : {
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
      style: u,
      onMouseEnter: j,
      onMouseLeave: S,
      onClick: D,
      children: [
        p,
        T
      ]
    }
  );
}, uf = ({
  animation: e = !0,
  transform: t,
  children: n,
  underline: r,
  ...o
}) => /* @__PURE__ */ m(Ut, { underline: t ? !0 : r, className: `link-wave ${e ? "animation" : ""} ${t ? "transform" : ""}`, ...o, children: [
  n,
  /* @__PURE__ */ i("div", { className: "land-link-wave" })
] }), Ut = ({
  href: e,
  target: t = "_self",
  status: n = "default",
  anchor: r,
  disabled: o = !1,
  underline: s = !1,
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
  const g = () => ({
    default: "var(--color-blue-",
    primary: "var(--color-primary-",
    success: "var(--color-green-",
    danger: "var(--color-red-",
    warning: "var(--color-orange-"
  })[n], C = (y) => {
    if (o) {
      y.preventDefault();
      return;
    }
    p == null || p(y);
  }, v = (y, x) => {
    if (!y) return null;
    const N = typeof y == "boolean" ? t === "_blank" ? /* @__PURE__ */ i(X, { name: "share", size: 16 }) : /* @__PURE__ */ i(X, { name: "link", size: 16 }) : y;
    return /* @__PURE__ */ i("span", { className: `land-link-${x}-icon`, children: N });
  }, w = (y) => {
    if (y.preventDefault(), r) {
      const x = document.getElementById(r);
      x && x.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ m(
    "a",
    {
      href: e,
      target: t,
      className: `land-link hover-pop ${n} ${o ? "disabled" : ""} ${a ? "hoverUnderline" : ""} ${s ? "underline" : ""} ${k}`,
      style: {
        "--land-link-color": `${g()}6)`,
        "--land-link-hover-color": `${g()}7)`,
        "--land-link-active-color": `${g()}8)`,
        "--land-link-disabled-color": `${g()}3)`,
        ...f
      },
      onClick: r ? w : C,
      "aria-disabled": o,
      children: [
        v(d, "prefix"),
        h,
        v(u, "suffix"),
        c && /* @__PURE__ */ i(Le, { content: c, ...l })
      ]
    }
  );
};
Ut.LinkWave = uf;
const hf = ({
  size: e = "var(--icon-size-l)",
  strokeSize: t = 3,
  color: n = "var(--color-text-primary)",
  style: r,
  className: o = ""
}) => /* @__PURE__ */ i(
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
), pf = ({
  type: e = "default",
  direction: t = "row",
  title: n,
  link: r,
  onLinkClick: o,
  noBg: s,
  className: a,
  style: c
}) => {
  const l = U(() => t === "row" ? 16 : 24, [t]), d = U(() => {
    if (e === "fail") return "var(--color-red-";
    if (e === "default") return "";
    if (e === "warn") return "var(--color-orange-";
    if (e === "error") return "var(--color-red-";
    if (e === "success") return "var(--color-green-";
    if (e === "loading") return "";
  }, [e]);
  return /* @__PURE__ */ m("div", { className: `land-alert ${t} ${d} ${s ? "no-bg" : ""} ${a}`, style: c, children: [
    e === "fail" && /* @__PURE__ */ i(X, { name: "error-fill", size: l, color: d + "6)" }),
    e === "default" && /* @__PURE__ */ i(
      X,
      {
        name: "attention-fill",
        size: l,
        color: "var(--color-primary-6)"
      }
    ),
    e === "warn" && /* @__PURE__ */ i(
      X,
      {
        name: "attention-fill",
        size: l,
        color: d + "6)"
      }
    ),
    e === "error" && /* @__PURE__ */ i(X, { name: "attention-fill", size: l, color: d + "6)" }),
    e === "success" && /* @__PURE__ */ i(X, { name: "check-fill", size: l, color: d + "6)" }),
    e === "loading" && /* @__PURE__ */ i(hf, { size: l, color: "var(--color-primary-6)" }),
    /* @__PURE__ */ m("div", { className: "land-alert-title", children: [
      n,
      r && /* @__PURE__ */ m(he, { children: [
        "，",
        /* @__PURE__ */ i(Ut, { onClick: o, children: r })
      ] })
    ] })
  ] });
}, i3 = ({
  data: e = [],
  onChange: t,
  offsetTop: n = 0,
  gap: r = 4,
  showIndicator: o = !0,
  indicatorStyle: s,
  style: a,
  className: c,
  getContainer: l = () => window
}) => {
  const d = q(null), [u, h] = B(""), [p, f] = B(0), k = O(() => l(), [l]), g = O((b) => b === window ? window.pageYOffset || document.documentElement.scrollTop : b.scrollTop, []), C = O((b, j) => {
    b === window ? window.scrollTo({
      top: j,
      behavior: "smooth"
    }) : b.scrollTo({
      top: j,
      behavior: "smooth"
    });
  }, []), v = U(() => {
    const b = [], j = (S) => {
      S.forEach((D) => {
        D.key && b.push(D.key), D.children && j(D.children);
      });
    };
    return j(e), b;
  }, [e]), w = O((b, j) => {
    h(b), f(j);
    const S = document.getElementById(b);
    console.log("targetElement", S);
    const D = k();
    if (S)
      if (n === 0)
        S.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      else {
        const V = D === window ? { top: 0 } : D.getBoundingClientRect(), T = S.getBoundingClientRect().top - V.top, F = g(D) + T - n;
        C(D, F);
      }
    t == null || t(b);
  }, [n, t, k, g, C]);
  Y(() => {
    const b = (D) => {
      const V = D.filter(
        (A) => A.isIntersecting && A.intersectionRatio >= 0.5
      );
      if (V.length > 0) {
        const T = V[0].target.id;
        h(T), f(v.indexOf(T)), t == null || t(T);
      } else
        D.forEach((A) => {
          const T = A.target.id;
          if (!A.isIntersecting && u === T) {
            const H = v.indexOf(T), F = v[H - 1] || null;
            h(F), f(v.indexOf(F)), F && (t == null || t(F));
          }
        });
    }, j = k(), S = new IntersectionObserver(b, {
      threshold: [0, 0.5, 1],
      root: j === window ? null : j,
      rootMargin: `-${n}px 0px 0px 0px`
    });
    return v.forEach((D) => {
      const V = document.getElementById(D);
      V && S.observe(V);
    }), () => {
      v.forEach((D) => {
        const V = document.getElementById(D);
        V && S.unobserve(V);
      });
    };
  }, [v, u, n, t, k]);
  const y = (b, j = 0) => b.map((S, D) => /* @__PURE__ */ m(
    "li",
    {
      style: { textIndent: j > 0 ? `${j * 0.5}em` : 0, paddingTop: D > 0 ? `${r}px` : 0 },
      onMouseEnter: () => {
        D !== p && (M(!0), N(D));
      },
      onMouseLeave: () => M(!1),
      children: [
        /* @__PURE__ */ i(
          "a",
          {
            className: `land-anchor-link ${u === S.key ? "active" : ""}`,
            onClick: () => w(S.key, D),
            "aria-current": u === S.key ? "location" : void 0,
            children: S.title
          }
        ),
        S.children && y(S.children, j + 1)
      ]
    },
    S.key
  )), [x, N] = B(-1), [L, M] = B(!1);
  return /* @__PURE__ */ m(
    "div",
    {
      ref: d,
      className: `land-anchor ${c || ""}`,
      style: a,
      role: "navigation",
      "aria-label": "Anchor navigation",
      children: [
        /* @__PURE__ */ i("ol", { className: "land-anchor-list", children: y(e) }),
        /* @__PURE__ */ i(
          me.div,
          {
            className: "land-anchor-hover-indicator",
            animate: {
              opacity: L ? 1 : 0,
              y: x * 38 + x * r
            },
            transition: { type: "spring", stiffness: 200, damping: 30, mass: 1, restDelta: 0.1 },
            style: s
          }
        ),
        o && /* @__PURE__ */ i(
          me.div,
          {
            className: "land-anchor-active-indicator",
            animate: {
              y: p * 38 + p * r
            },
            transition: { type: "spring", stiffness: 200, damping: 30, mass: 1, restDelta: 0.1 },
            style: s
          }
        )
      ]
    }
  );
}, s3 = ({
  ratio: e = 1,
  children: t,
  contentClassName: n = "",
  contentStyle: r,
  style: o,
  className: s = ""
}) => {
  const a = q(null), [c, l] = B(1);
  Y(() => {
    if (!a.current) return;
    const u = (p) => {
      p.forEach((f) => {
        l(f.contentRect.width / f.contentRect.height);
      });
    };
    new ResizeObserver(u).observe(a.current);
  }, []);
  const d = U(() => e > c, [e, c]);
  return /* @__PURE__ */ i(
    "div",
    {
      ref: a,
      className: `land-auto-container ${s}`,
      style: o,
      children: /* @__PURE__ */ i(
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
}, Za = ({
  color: e,
  size: t = 12
}) => /* @__PURE__ */ i(
  "div",
  {
    className: "land-audio-animation-icon",
    style: { width: `${t}px`, height: `${t}px` },
    children: Array.from({ length: 4 }).map((n, r) => /* @__PURE__ */ i(
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
), Ya = ({
  play: e,
  animation: t = !1,
  iconSize: n = 24,
  color: r = "var(--color-text-primary)",
  style: o,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ i(
  "div",
  {
    className: `land-audio-play-icon ${s}`,
    style: {
      width: `${n}px`,
      height: `${n}px`,
      ...o
    },
    onClick: a,
    children: e ? t ? /* @__PURE__ */ i(X, { name: "video-play", size: n / 1.8, color: r }) : /* @__PURE__ */ i(Za, { size: n / 1.8, color: r }) : /* @__PURE__ */ i(X, { name: "video-pause", size: 24, color: r })
  }
);
function Ei(e, t, n) {
  const r = (s, a, c, l, d) => (s - a) / (c - a) * (d - l) + l;
  return e.map((s) => r(s, t, n, 0, 1));
}
function ff(e, t, n, r, o = 2, s = 2, a = "#999", c = "#FF0000", l, d) {
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
      const M = Math.max(...e);
      M > 0 && (h = Ei(e, 0, M));
    }
    if (d) {
      const M = Math.min(...e), b = Math.max(...e), j = Math.min(...e.filter((S) => S !== M));
      h = Ei(
        e.filter((S) => S !== M),
        j,
        b
      );
    }
    const p = t.width, f = t.height;
    if (p === 0 || f === 0) {
      console.warn("Canvas has no size");
      return;
    }
    const k = n.currentTime || 0, g = n.duration || 1, C = Math.floor(k / g * r);
    u.clearRect(0, 0, p, f);
    const v = o + s, w = Math.floor(p / v), y = Math.min(h.length, w), x = Math.max(...h), N = 2, L = x > 0 ? Math.max(f * 0.8 / x, N / x) : 1;
    console.log("Drawing bars:", y, "maxValue:", x, "scale:", L);
    for (let M = 0; M < y; M++) {
      const b = h[M] || 0, j = M * v, S = Math.max(b * L, N), D = f - S;
      u.fillStyle = M < C ? c : a, u.fillRect(j, D, o, S);
    }
  } catch (u) {
    console.warn("Canvas operation failed:", u);
  }
}
function mf(e, t) {
  console.log("drawWaveform", e);
  const n = e.getChannelData(0), r = Math.floor(n.length / t);
  let o = [];
  for (let s = 0; s < t; s++) {
    let a = r * s, c = 0;
    for (let d = 0; d < r; d++)
      c = c + Math.abs(n[a + d]);
    const l = c / r;
    Number.isNaN(l) || o.push(l);
  }
  return o;
}
function gf({
  audioUrl: e,
  play: t = !1,
  onPlayChange: n,
  sampleCount: r = 100,
  barWidth: o = 2,
  barGap: s = 1,
  defaultColor: a = "var(--color-gray-12)",
  activeColor: c = "var(--color-primary-6)",
  normalize: l = !0,
  amplify: d = !1,
  type: u = "bar"
}) {
  const h = q(null), p = q(null), f = q(), [k, g] = B([]), [C, v] = B(!1), [w, y] = B(null), [x, N] = B(t), L = O(async () => {
    if (e) {
      v(!0), y(null);
      try {
        const V = new (window.AudioContext || window.webkitAudioContext)(), T = await (await fetch(e)).arrayBuffer(), H = await V.decodeAudioData(T), F = mf(H, r);
        g(F || []), V.close();
      } catch (V) {
        y(V instanceof Error ? V.message : "Failed to generate wave data"), console.error("Error generating wave data:", V);
      } finally {
        v(!1);
      }
    }
  }, [e, r]), M = O(() => {
    if (!h.current || k.length === 0) return;
    const V = h.current, A = V.parentElement;
    if (A) {
      const H = A.getBoundingClientRect();
      V.width = H.width, V.height = H.height;
    }
    const T = p.current || new Audio(e);
    u === "bar" ? ff(
      k,
      V,
      T,
      r,
      o,
      s,
      a,
      c,
      l,
      d
    ) : b(
      k,
      V,
      T,
      a,
      c
    );
  }, [k, r, o, s, a, c, l, d, u, e]), b = O((V, A, T, H, F) => {
    try {
      const E = A.getContext("2d");
      if (!E) {
        console.warn("Failed to get canvas context");
        return;
      }
      const K = A.width, $ = A.height;
      if (K === 0 || $ === 0) {
        console.warn("Canvas has no size for line waveform");
        return;
      }
      const P = T.currentTime || 0, I = T.duration || 1, R = Math.floor(P / I * V.length);
      if (E.clearRect(0, 0, K, $), V.length === 0) {
        console.warn("No data for line waveform");
        return;
      }
      const _ = Math.max(...V), G = _ > 0 ? $ * 0.6 / _ : 1, Z = K / (V.length - 1);
      if (E.beginPath(), E.strokeStyle = H, E.lineWidth = 1, E.setLineDash([2, 2]), E.moveTo(0, $ / 2), E.lineTo(K, $ / 2), E.stroke(), E.setLineDash([]), E.beginPath(), E.strokeStyle = H, E.lineWidth = 2, V.forEach((J, re) => {
        const te = re * Z, le = $ / 2 - J * G;
        re === 0 ? E.moveTo(te, le) : E.lineTo(te, le);
      }), E.stroke(), R > 0) {
        E.beginPath(), E.strokeStyle = F, E.lineWidth = 3;
        for (let J = 0; J < Math.min(R, V.length); J++) {
          const re = J * Z, te = $ / 2 - V[J] * G;
          J === 0 ? E.moveTo(re, te) : E.lineTo(re, te);
        }
        E.stroke();
      }
    } catch (E) {
      console.warn("Canvas operation failed:", E);
    }
  }, []), j = O(() => {
    M(), f.current = requestAnimationFrame(j);
  }, [M]), S = O(() => {
    f.current && cancelAnimationFrame(f.current), j();
  }, [j]), D = O(() => {
    f.current && (cancelAnimationFrame(f.current), f.current = void 0);
  }, []);
  return Y(() => {
    L();
  }, [L]), Y(() => {
    const V = p.current;
    V && (t ? V.play().catch((A) => {
      console.error("Failed to play audio:", A), N(!1), n == null || n(!1);
    }) : V.pause());
  }, [t, n]), Y(() => {
    const V = p.current;
    if (!V) return;
    const A = () => {
      N(!0), n == null || n(!0), S();
    }, T = () => {
      N(!1), n == null || n(!1), D();
    }, H = () => {
      N(!1), n == null || n(!1), D();
    };
    return V.addEventListener("play", A), V.addEventListener("pause", T), V.addEventListener("ended", H), () => {
      V.removeEventListener("play", A), V.removeEventListener("pause", T), V.removeEventListener("ended", H), D();
    };
  }, [S, D, n]), Y(() => () => {
    D();
  }, [D]), {
    canvasRef: h,
    audioRef: p,
    waveData: k,
    isLoading: C,
    error: w,
    isPlaying: x,
    drawWaveform: M,
    startAnimation: S,
    stopAnimation: D
  };
}
const _a = ({
  audioUrl: e,
  play: t = !1,
  onPlayChange: n,
  canvas: r,
  audio: o,
  samples: s,
  barWidth: a = 2,
  barGap: c = 1,
  defaultColor: l = "var(--color-gray-12)",
  activeColor: d = "var(--color-primary-6)",
  normalize: u = !0,
  amplify: h = !1,
  type: p = "bar",
  sampleCount: f = 100,
  style: k,
  className: g = "",
  children: C
}) => {
  const {
    canvasRef: v,
    audioRef: w,
    waveData: y,
    isLoading: x,
    error: N,
    drawWaveform: L
  } = gf({
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
  }), M = r ? { current: r } : v, b = s || y;
  return De.useEffect(() => {
    b.length > 0 && setTimeout(() => {
      L();
    }, 100);
  }, [b, L]), De.useEffect(() => {
    const j = M.current;
    if (!j) return;
    const S = new ResizeObserver(() => {
      b.length > 0 && L();
    });
    return S.observe(j), () => S.disconnect();
  }, [b, L, M]), N ? /* @__PURE__ */ i("div", { className: `land-audio-wave error ${g}`, style: k, children: /* @__PURE__ */ m("div", { className: "error-message", children: [
    "Failed to load audio: ",
    N
  ] }) }) : x ? /* @__PURE__ */ i("div", { className: `land-audio-wave loading ${g}`, style: k, children: /* @__PURE__ */ i("div", { className: "loading-spinner", children: "Loading waveform..." }) }) : /* @__PURE__ */ m(
    "div",
    {
      className: `land-audio-wave ${p} ${g}`,
      style: {
        position: "relative",
        width: "100%",
        height: "60px",
        ...k
      },
      children: [
        /* @__PURE__ */ i("audio", { ref: w, src: e, className: "land-audio-wave-audio" }),
        /* @__PURE__ */ i(
          "canvas",
          {
            ref: M,
            style: {
              width: "100%",
              height: "100%",
              display: "block"
            }
          }
        ),
        C
      ]
    }
  );
}, fo = ({
  audioUrl: e,
  showWave: t = !1,
  waveType: n = "bar",
  waveSampleCount: r = 100,
  waveBarWidth: o = 2,
  waveBarGap: s = 1,
  waveDefaultColor: a = "var(--color-gray-12)",
  waveActiveColor: c = "var(--color-primary-12)",
  waveNormalize: l = !0,
  waveAmplify: d = !1,
  style: u,
  className: h = ""
}) => {
  const p = q(null), [f, k] = B(!1);
  return Y(() => {
    if (!p.current) return;
    const g = p.current;
    f ? g.play() : g.pause();
  }, [f]), /* @__PURE__ */ m("div", { className: `land-audio ${h}`, style: u, children: [
    /* @__PURE__ */ i(
      Ya,
      {
        play: f,
        onClick: (g) => {
          g.stopPropagation(), k(!f);
        }
      }
    ),
    t && /* @__PURE__ */ i(
      _a,
      {
        audioUrl: e,
        audio: p.current,
        type: n,
        sampleCount: r,
        barWidth: o,
        barGap: s,
        defaultColor: a,
        activeColor: c,
        normalize: l,
        amplify: d
      }
    ),
    !t && /* @__PURE__ */ i("audio", { ref: p, src: e })
  ] });
};
fo.AudioButton = Ya;
fo.AudioAnimationIcon = Za;
fo.AudioWave = _a;
const a3 = ({
  isDot: e,
  count: t,
  exceedCount: n = 99,
  content: r,
  children: o,
  className: s,
  style: a
}) => {
  function c(l) {
    return /^[A-Z]+$/.test(l);
  }
  return /* @__PURE__ */ m("div", { className: `land-badge ${s}`, style: a, children: [
    /* @__PURE__ */ i("div", { className: `land-badge-content ${e ? "dot" : ""} ${c(`${t || r}`) ? "large" : ""}`, children: e ? null : r || (t <= n ? t : `${n}+`) }),
    o
  ] });
}, vf = ({
  item: e,
  active: t,
  onChange: n,
  index: r,
  hoverPreview: o
}) => {
  const s = q(null), [a, c] = B(!1);
  return Y(() => {
    s.current && (s.current.scrollWidth > s.current.offsetWidth ? c(!0) : c(!1));
  }, [e]), /* @__PURE__ */ i(Le, { targetBody: !0, content: e.tip || (o && a ? e.label : ""), children: /* @__PURE__ */ m(
    "div",
    {
      className: `land-breadCrumb-item hover-pop ${t ? "active" : ""}`,
      onClick: () => n == null ? void 0 : n(),
      children: [
        /* @__PURE__ */ i("div", { ref: s, className: `land-breadcrumb-label ${e.maxWidth ? "ellipsis" : ""}`, style: { maxWidth: `${e.maxWidth}px` }, children: e.label }),
        r > 0 && /* @__PURE__ */ i(X, { name: "arrow", className: "land-breadCrumb-item-arrow", size: 16, strokeWidth: 4 })
      ]
    }
  ) });
}, c3 = ({
  data: e = [],
  current: t,
  showMask: n = !1,
  hoverPreview: r = !1,
  onChange: o,
  style: s,
  className: a = ""
}) => {
  var p;
  const c = q(null), [l, d] = B(!1), [u, h] = B(!0);
  return Y(() => {
    if (!n || !c.current) return;
    const f = () => {
      c.current && (d(c.current.scrollLeft <= c.current.clientWidth - c.current.scrollWidth), h(c.current.scrollLeft >= 0));
    };
    return c.current.addEventListener("scroll", f), () => {
      var k;
      (k = c.current) == null || k.removeEventListener("scroll", f);
    };
  }, []), /* @__PURE__ */ m("div", { className: `land-breadCrumb  ${a}`, style: s, children: [
    n && /* @__PURE__ */ i("div", { className: `land-breadCrumb-prefixMask ${l ? "hidden" : ""}` }),
    /* @__PURE__ */ i("div", { ref: c, className: "land-breadCrumb-container", children: (p = Array.from(e)) == null ? void 0 : p.reverse().map((f, k) => /* @__PURE__ */ i(
      vf,
      {
        index: k,
        item: f,
        active: t === f.value,
        hoverPreview: r,
        onChange: () => o == null ? void 0 : o(f)
      },
      f.value
    )) }),
    n && /* @__PURE__ */ i("div", { className: `land-breadCrumb-suffixMask ${u ? "hidden" : ""}` })
  ] });
}, kf = ({
  style: e,
  ...t
}) => {
  const [n, r] = B(!1);
  return /* @__PURE__ */ i(
    ae,
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
      children: /* @__PURE__ */ i(X, { name: "arrow-line", size: 16, strokeWidth: 3, className: `land-button-arrow-icon ${n ? "button-hover-arrow" : ""}` })
    }
  );
}, Lf = ({
  defaultSide: e,
  hoverSide: t,
  ...n
}) => {
  const [r, o] = B(!1);
  return /* @__PURE__ */ m(
    ae,
    {
      ...n,
      nativeEvent: {
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1)
      },
      children: [
        /* @__PURE__ */ i(me.div, { animate: { opacity: r ? 1 : 0, scaleY: r ? 1 : -1 }, transition: { duration: 0.6, type: "spring" }, className: "land-button-change-hover", children: t }),
        /* @__PURE__ */ i(me.div, { animate: { opacity: r ? 0 : 1 }, transition: { duration: 0.6, type: "spring" }, className: "land-button-change-default", children: e })
      ]
    }
  );
}, ae = ({
  // 基础属性
  type: e = "outline",
  status: t = "default",
  size: n = "default",
  disabled: r = !1,
  block: o = !1,
  bold: s = !1,
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
  icon: g,
  // 尺寸属性
  capsule: C,
  // 气泡属性
  tip: v,
  tipProps: w,
  // 原生事件
  nativeEvent: y
}) => {
  const x = U(() => !!(g && !f && !k), [g, f, k]), N = U(() => [
    "land-button",
    e,
    t,
    x && "iconOnly",
    v && "hover-pop",
    o && "block",
    s && "bold",
    a && "hover-bold",
    C && "capsule",
    c && "hover-animation",
    l && "active-animation",
    n && `size-${n}`,
    u
  ].filter(Boolean).join(" "), [e, t, x, r, v, u]), L = () => /* @__PURE__ */ m(Le, { targetBody: !0, theme: "dark", content: v, ...w, children: [
    g && /* @__PURE__ */ i("div", { className: "land-button-icon", children: g }),
    !x && (f || k) && /* @__PURE__ */ m("div", { className: "land-button-mask-content-wrapper", children: [
      /* @__PURE__ */ i("span", { children: f }),
      k && /* @__PURE__ */ i("span", { className: "subText", children: k }),
      (a || e === "transparent") && /* @__PURE__ */ m("div", { className: "land-button-mask-content", children: [
        /* @__PURE__ */ i("span", { children: f }),
        k && /* @__PURE__ */ i("span", { className: "subText", children: k })
      ] })
    ] }),
    p
  ] }), M = {
    style: d,
    className: N,
    disabled: r,
    onClick: (b) => {
      r || h == null || h(b);
    },
    ...y
    // 原生事件
  };
  return /* @__PURE__ */ i(
    "button",
    {
      ...M,
      children: L()
    }
  );
};
ae.ButtonArrow = kf;
ae.ButtonChange = Lf;
const wf = (e, t) => {
  const n = q(t);
  Y(() => {
    n.current = t;
  }, [t]);
  const r = O((o) => {
    e.current && !e.current.contains(o.target) && n.current(o);
  }, [e]);
  Y(() => (document.body.addEventListener("mousedown", r), document.body.addEventListener("touchstart", r), () => {
    document.body.removeEventListener("mousedown", r), document.body.removeEventListener("touchstart", r);
  }), [r]);
}, mo = ({
  trigger: e = "hover",
  targetBody: t = !1,
  dropData: n,
  dropContent: r,
  children: o,
  placement: s = "bottom",
  alignment: a = "left",
  disabled: c,
  onChange: l,
  onOpen: d,
  onClose: u,
  toggleClassName: h = "",
  toggleStyle: p,
  dropClassName: f = "",
  dropStyle: k,
  open: g = !1
}) => {
  const C = q(null), v = q(null), [w, y] = B(g);
  Y(() => {
    c && w && y(!1);
  }, [c, w]), Y(() => {
    c || y(g);
  }, [g, c]);
  const [x, N] = B({
    top: 0,
    left: 0
  }), [L, M] = B(
    s
  ), [b, j] = B(a), S = O(() => {
    if (!C.current) return;
    const F = C.current.getBoundingClientRect(), E = window.innerWidth, K = window.innerHeight, $ = window.pageXOffset || document.documentElement.scrollLeft, P = window.pageYOffset || document.documentElement.scrollTop, I = 200, R = 150, _ = 0;
    let G = 0, Z = 0, J = s, re = a;
    const te = K - F.bottom - _, le = F.top - _;
    if (s === "bottom" && te < R && le > R ? J = "top" : s === "top" && le < R && te > R && (J = "bottom"), t) {
      if (!v.current) return;
      const Se = v.current.getBoundingClientRect(), we = Se.width || I, Me = Se.height || R;
      J === "bottom" ? G = F.bottom + _ + P : G = F.top - Me - _ + P;
      let Mc = F.left + F.width / 2, xc = F.left, bc = F.right;
      switch (a) {
        case "center":
          Z = Mc - we / 2;
          break;
        case "right":
          Z = bc - we;
          break;
        default:
          Z = xc;
          break;
      }
      Z < $ ? (Z = $ + _, re = "left") : Z + we > $ + E && (Z = $ + E - we - _, re = "right"), G < P ? G = P + _ : G + Me > P + K && (G = P + K - Me - _);
    } else
      re = a;
    N({ top: G, left: Z }), M(J), j(re);
  }, [s, a, t]);
  Y(() => {
    if (w && !c) {
      const F = setTimeout(S, 0);
      return () => clearTimeout(F);
    }
  }, [w, c, S]), Y(() => {
    if (w && !c) {
      const F = () => S(), E = () => S();
      return window.addEventListener("resize", F), window.addEventListener("scroll", E, !0), document.addEventListener("scroll", E, !0), () => {
        window.removeEventListener("resize", F), window.removeEventListener("scroll", E, !0), document.removeEventListener("scroll", E, !0);
      };
    }
  }, [w, c, S]), Y(() => {
    w ? d == null || d(w) : u == null || u(w);
  }, [w, d, u]);
  const D = (F) => {
    c || (l == null || l(F), e === "click" && y(!1));
  }, V = /* @__PURE__ */ i(
    "div",
    {
      ref: v,
      className: `land-dropdown-results ${w ? "show" : ""} ${b} ${L}`,
      style: t ? {
        position: "fixed",
        top: x.top,
        left: x.left,
        transform: "none"
      } : void 0,
      "data-debug": `alignment: ${b}, placement: ${L}, targetBody: ${t}`,
      onClick: (F) => F.stopPropagation(),
      children: /* @__PURE__ */ m("div", { className: `land-dropdown-drop ${f}`, style: k, children: [
        n && !r && /* @__PURE__ */ i("ul", { className: "land-dropdown-drop-list", children: n == null ? void 0 : n.map((F) => /* @__PURE__ */ i(
          "div",
          {
            className: "land-dropdown-drop-item",
            onClick: () => D(F),
            children: F.label
          },
          F.key
        )) }),
        r
      ] })
    }
  );
  wf(C, () => {
    w && !c && y(!1);
  });
  const A = () => {
    c || e === "click" && y(!w);
  }, T = () => {
    c || e === "hover" && y(!0);
  }, H = () => {
    e === "hover" && y(!1);
  };
  return /* @__PURE__ */ m(Gt, { children: [
    /* @__PURE__ */ m(
      "div",
      {
        ref: C,
        className: `land-dropdown-toggle ${w ? "show" : ""} ${h} ${c ? "disabled" : ""}`,
        style: p,
        onClick: A,
        onMouseEnter: T,
        onMouseLeave: H,
        "aria-disabled": c,
        "aria-expanded": w,
        "aria-haspopup": "true",
        children: [
          o,
          !t && V
        ]
      }
    ),
    t && w && !c && V
  ] });
}, Ua = ({
  checked: e = !1,
  indeterminate: t = !1,
  label: n = "选项",
  tip: r,
  disabled: o,
  className: s,
  style: a,
  animated: c,
  onCheckedChange: l
}) => {
  const [d, u] = B(e);
  return Y(() => {
    u(e);
  }, [e]), /* @__PURE__ */ m("div", { className: `land-check ${s}`, style: a, children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: `land-check-label ${d ? "checked" : ""} ${o ? "disabled" : ""}`,
        onClick: (h) => {
          o || (u(!d), l == null || l(d, h));
        },
        children: [
          /* @__PURE__ */ m("div", { className: `land-check-circle ${d ? "checked" : ""} ${t ? "indeterminate" : ""} ${c && !t ? "animated" : "no-animation"}`, children: [
            /* @__PURE__ */ i(X, { name: "check", size: 10, className: "land-check-circle-icon" }),
            /* @__PURE__ */ i(X, { name: "dec", strokeWidth: 8, size: 10, className: "land-check-indeterminate-icon" })
          ] }),
          n
        ]
      }
    ),
    r && /* @__PURE__ */ m("div", { className: "land-check-pop hover-pop", children: [
      /* @__PURE__ */ i(X, { name: "info-fill", className: "land-check-pop-icon" }),
      /* @__PURE__ */ i(
        Le,
        {
          content: r,
          theme: "dark",
          style: { maxWidth: "200px" },
          placement: "top"
        }
      )
    ] })
  ] });
}, Ga = ({
  data: e,
  placeholder: t = "请选择",
  selected: n,
  selectedValues: r = [],
  multiple: o = !1,
  separator: s = "，",
  maxDisplayCount: a,
  showCheckbox: c = !1,
  customValueDisplay: l,
  type: d = "border",
  tip: u,
  tipProps: h,
  disabled: p,
  onChange: f,
  open: k = !1,
  className: g = "",
  style: C,
  ...v
}) => {
  const [w, y] = B(n), [x, N] = B(r);
  Y(() => {
    n !== w && y(n);
  }, [n, w]), Y(() => {
    JSON.stringify(r) !== JSON.stringify(x) && N(r);
  }, [r, x]);
  const L = U(() => e ? e.filter((T) => x.includes(T.key)).map((T) => T.label) : [], [e, x]), M = U(() => e ? e.filter((T) => x.includes(T.key)) : [], [e, x]), b = O(() => {
    var T;
    return e ? o ? L.length === 0 ? t : a !== void 0 && L.length > a ? `${L.slice(0, a).join(s)}等${L.length}个选项` : L.join(s) : w === void 0 || w === "" ? t : (T = e == null ? void 0 : e.filter((H) => H.key === w)[0]) == null ? void 0 : T.label : t;
  }, [
    o,
    L,
    a,
    s,
    w,
    e,
    t
  ]), j = O(() => {
    if (!l)
      return b();
    if (o)
      return l({
        values: x,
        items: M,
        isMultiple: !0,
        placeholder: t
      });
    {
      const T = e == null ? void 0 : e.filter((E) => E.key === w)[0], H = T ? [T] : [], F = T ? [T.key] : [];
      return l({
        values: F,
        items: H,
        isMultiple: !1,
        placeholder: t
      });
    }
  }, [
    l,
    o,
    x,
    M,
    w,
    e,
    t,
    b
  ]), S = O(
    (T) => {
      if (!T.disabled)
        if (o) {
          const H = [...x], F = H.indexOf(T.key);
          F > -1 ? H.splice(F, 1) : H.push(T.key), N(H);
          const E = (e == null ? void 0 : e.filter((K) => H.includes(K.key))) || [];
          f == null || f(T, E);
        } else
          y(T.key), f == null || f(T);
    },
    [o, x, e, f]
  ), D = O(
    (T) => o ? x.includes(T) : w === T,
    [o, x, w]
  ), V = U(
    () => /* @__PURE__ */ i("div", { className: "land-select-list", children: e && e.length > 0 ? e == null ? void 0 : e.map((T) => /* @__PURE__ */ m(
      "div",
      {
        className: `land-select-drop-item ${T.tip ? "hover-pop" : ""} ${D(T.key) ? "selected" : ""} ${T.disabled ? "disabled" : ""}`,
        onClick: (H) => {
          H.stopPropagation(), S(T);
        },
        children: [
          o && c && /* @__PURE__ */ i("div", { className: "land-select-checkbox", children: /* @__PURE__ */ i(
            Ua,
            {
              checked: D(T.key),
              disabled: T.disabled
            }
          ) }),
          !c && /* @__PURE__ */ i("div", { className: "land-select-results-item-label", children: T.label }),
          T.iconTip && /* @__PURE__ */ m(
            "div",
            {
              className: `land-select-item-info ${T.iconTip ? "hover-pop" : ""}`,
              children: [
                /* @__PURE__ */ i(X, { name: "info-stroke", size: 12 }),
                T.iconTip && /* @__PURE__ */ i(
                  Le,
                  {
                    content: T.iconTip,
                    placement: "right",
                    theme: "dark",
                    style: { marginLeft: "12px" }
                  }
                )
              ]
            }
          ),
          T.tip && /* @__PURE__ */ i(
            Le,
            {
              content: T.tip,
              placement: "right",
              theme: "dark",
              style: { marginLeft: "8px" }
            }
          )
        ]
      },
      T.key
    )) : /* @__PURE__ */ i("span", { className: "land-select-drop-empty", children: "暂无内容" }) }),
    [e, D, S, o, c]
  ), A = U(() => e ? l ? j() : b() : t, [
    l,
    j,
    b,
    t
  ]);
  return /* @__PURE__ */ i("div", { className: `land-select ${g}`, style: C, children: /* @__PURE__ */ i(mo, { trigger: "click", disabled: p, dropContent: V, ...v, children: /* @__PURE__ */ m(
    "div",
    {
      className: `land-select-input ${d} ${p ? "disabled" : ""}`,
      children: [
        /* @__PURE__ */ i(
          "p",
          {
            className: `${(o ? x.length > 0 : w !== void 0 && w !== "") ? "land-select-trigger" : "land-select-placeholder"}`,
            children: A
          }
        ),
        /* @__PURE__ */ i(
          X,
          {
            name: "arrow-triangle",
            className: "land-select-value-arrow",
            size: 16
          }
        ),
        u && /* @__PURE__ */ i(Le, { targetBody: !0, content: u, theme: "dark", ...h })
      ]
    }
  ) }) });
}, Jt = ({
  language: e = "zh",
  currentYear: t,
  currentMonth: n,
  shouldShowYearSelector: r,
  yearRange: o,
  monthPrevDisabled: s = !1,
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
  const g = De.useMemo(() => {
    if (!r) return [];
    if (u)
      return u;
    const [x, N] = o, L = N - x + 1;
    return Array.from({ length: L }, (M, b) => ({
      key: `${x + b}`,
      label: `${x + b}`
    }));
  }, [r, o, u]), C = De.useMemo(() => ({
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
  }), []), v = k === "date" || k === "week", w = k === "date" || k === "week" || k === "month" || k === "quarter" || k === "year", y = k === "date" || k === "week";
  return /* @__PURE__ */ m("div", { className: `land-calendar-header ${p}`, style: f, children: [
    /* @__PURE__ */ m("div", { className: "land-calendar-header-btn-group", children: [
      w && /* @__PURE__ */ i(
        ae,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ i(X, { name: "arrow-double" }),
          className: "land-calendar-btn prev",
          disabled: s,
          onClick: () => l == null ? void 0 : l(t - 1)
        }
      ),
      y && /* @__PURE__ */ i(
        ae,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ i(X, { name: "arrow" }),
          className: "land-calendar-btn prev",
          disabled: s,
          onClick: () => c == null ? void 0 : c(n !== void 0 ? n - 1 : -1)
        }
      )
    ] }),
    /* @__PURE__ */ m("div", { className: "land-calendar-header-center", children: [
      /* @__PURE__ */ i("div", { className: "land-calendar-year", children: r ? /* @__PURE__ */ i(
        Ga,
        {
          type: "transparent",
          selected: t.toString(),
          data: g,
          onChange: (x) => l == null ? void 0 : l(Number(x.key))
        }
      ) : /* @__PURE__ */ i("div", { className: "land-calendar-year-input", children: d || t }) }),
      v && n !== void 0 && /* @__PURE__ */ i(he, { children: e === "zh" ? C[n + 1].zh : C[n + 1].en })
    ] }),
    h && /* @__PURE__ */ i("div", { className: "land-calendar-right-content", children: h }),
    /* @__PURE__ */ m("div", { className: "land-calendar-header-btn-group", children: [
      y && /* @__PURE__ */ i(
        ae,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ i(X, { name: "arrow" }),
          className: "land-calendar-btn next",
          disabled: a,
          onClick: () => c == null ? void 0 : c(n !== void 0 ? n + 1 : 1)
        }
      ),
      w && /* @__PURE__ */ i(
        ae,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ i(X, { name: "arrow-double" }),
          className: "land-calendar-btn next",
          disabled: a,
          onClick: () => l == null ? void 0 : l(t + 1)
        }
      )
    ] })
  ] });
};
function Mn(e) {
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
function mt(e, t, n) {
  const r = t ? Mn(t) : null, o = n ? Mn(n) : null;
  return !(r && e < r || o && e > o);
}
function Ka(e) {
  if (!e) return;
  const t = Mn(e);
  return t ? t.getFullYear() : void 0;
}
function Xa(e) {
  if (!e) return;
  const t = Mn(e);
  return t ? t.getFullYear() : void 0;
}
function yf(e, t, n) {
  const r = Ka(t), o = Xa(n);
  return !(r && e < r || o && e > o);
}
function Cf(e, t, n, r) {
  const o = new Date(e, t, 1);
  return mt(o, n, r);
}
function Mf(e, t, n, r) {
  const o = (t - 1) * 3, s = new Date(e, o, 1), a = new Date(e, o + 2, 31);
  return mt(s, n, r) || mt(a, n, r);
}
function Bi(e, t, n, r) {
  return mt(e, n, r) || mt(t, n, r);
}
function Jn(e, t, n, r, o) {
  const s = new Date(e, t, n);
  return mt(s, r, o);
}
function Vt(e, t) {
  const n = (/* @__PURE__ */ new Date()).getFullYear(), r = Ka(e), o = Xa(t);
  return !r && !o ? [n, n] : r && !o ? [r, n] : !r && o ? [n, o] : r && o ? [r, o] : [n, n];
}
function Qt(e, t) {
  const [n, r] = Vt(e, t);
  return r > n;
}
function xf(e, t, n, r, o) {
  const s = new Date(e, t, 1), a = new Date(e, t + 1, 0), c = s.getDay(), l = a.getDate(), d = /* @__PURE__ */ new Date(), u = [];
  for (let p = 0; p < c; p++) {
    const f = new Date(e, t, 0), k = new Date(f.getTime() - (c - p - 1) * 24 * 60 * 60 * 1e3), g = k.getDate(), C = k.getMonth(), v = k.getFullYear();
    u.push({
      date: k,
      isCurrentMonth: !1,
      isToday: k.toDateString() === d.toDateString(),
      isSelected: !1,
      isDisabled: !Jn(v, C, g, r, o),
      dayNumber: g,
      month: C,
      year: v
    });
  }
  for (let p = 1; p <= l; p++) {
    const f = new Date(e, t, p);
    u.push({
      date: f,
      isCurrentMonth: !0,
      isToday: f.toDateString() === d.toDateString(),
      isSelected: n === p,
      isDisabled: !Jn(e, t, p, r, o),
      dayNumber: p,
      month: t,
      year: e
    });
  }
  const h = u.length;
  for (let p = 1; p <= 42 - h; p++) {
    const f = new Date(e, t + 1, p), k = f.getDate(), g = f.getMonth(), C = f.getFullYear();
    u.push({
      date: f,
      isCurrentMonth: !1,
      isToday: f.toDateString() === d.toDateString(),
      isSelected: !1,
      isDisabled: !Jn(C, g, k, r, o),
      dayNumber: k,
      month: g,
      year: C
    });
  }
  return u;
}
function it(e, t, n, r, o) {
  const s = new Date(e, t, 1), a = new Date(e, t + 1, 0), c = s.getDay(), l = a.getDate(), d = /* @__PURE__ */ new Date(), u = [];
  let h = [];
  for (let p = 0; p < c; p++) {
    const f = new Date(e, t, 0), k = new Date(f.getTime() - (c - p - 1) * 24 * 60 * 60 * 1e3);
    h.push(k);
  }
  for (let p = 1; p <= l; p++)
    if (h.push(new Date(e, t, p)), h.length === 7) {
      const f = h[0], k = h[6], g = u.length;
      u.push({
        dates: [...h],
        isCurrentWeek: Fi(h, d),
        isSelected: n === g + 1,
        isDisabled: !Bi(f, k, r, o),
        weekStart: f,
        weekEnd: k
      }), h = [];
    }
  if (h.length > 0) {
    for (let g = h.length; g < 7; g++) {
      const C = new Date(e, t + 1, g - h.length + 1);
      h.push(C);
    }
    const p = h[0], f = h[6], k = u.length;
    u.push({
      dates: h,
      isCurrentWeek: Fi(h, d),
      isSelected: n === k + 1,
      isDisabled: !Bi(p, f, r, o),
      weekStart: p,
      weekEnd: f
    });
  }
  return u;
}
function Fi(e, t) {
  return e.some(
    (n) => n.getDate() === t.getDate() && n.getMonth() === t.getMonth() && n.getFullYear() === t.getFullYear()
  );
}
const bf = [
  { zh: "日", en: "Su" },
  { zh: "一", en: "Mo" },
  { zh: "二", en: "Tu" },
  { zh: "三", en: "We" },
  { zh: "四", en: "Th" },
  { zh: "五", en: "Fr" },
  { zh: "六", en: "Sa" }
];
async function Nf(e, t = "zh") {
  try {
    return (await (await fetch(
      `https://date.nager.at/api/v3/publicholidays/${e}/${t}`
    )).json()).map((o) => {
      const s = o.date.split("-");
      return {
        date: `${Number(s[1])}-${Number(s[2])}`,
        zhName: o.localName,
        enName: o.name
      };
    });
  } catch {
    return [];
  }
}
const qa = ({
  language: e = "zh",
  className: t = ""
}) => /* @__PURE__ */ i("div", { className: `land-calendar-weekdays ${t}`, children: bf.map((n, r) => /* @__PURE__ */ i("div", { className: "land-calendar-item weekday", children: e === "zh" ? n.zh : n.en }, r)) }), Vf = ({
  day: e,
  onDayClick: t,
  onDayMouseOver: n,
  onDayMouseOut: r,
  onDayMouseEnter: o,
  onDayMouseLeave: s,
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
    !e.isDisabled && s && s(e, f);
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
        /* @__PURE__ */ i("div", { className: "day-number", children: e.dayNumber }),
        a
      ]
    }
  );
}, Oi = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onDayChange: r,
  onDayMouseOver: o,
  onDayMouseOut: s,
  onDayMouseEnter: a,
  onDayMouseLeave: c,
  className: l = "",
  style: d
}) => {
  const [u, h] = B(/* @__PURE__ */ new Date()), [p, f] = B((/* @__PURE__ */ new Date()).getDate()), [k, g] = B((/* @__PURE__ */ new Date()).getFullYear()), [C, v] = B([]), w = (/* @__PURE__ */ new Date()).getDate(), y = (/* @__PURE__ */ new Date()).getMonth(), x = (/* @__PURE__ */ new Date()).getFullYear(), N = u.getFullYear(), L = u.getMonth();
  Y(() => {
    Nf(N, e).then(v);
  }, [N, e]);
  const { yearRange: M, shouldShowYearSelector: b } = U(() => {
    const I = Vt(t, n), R = Qt(t, n);
    return {
      yearRange: I,
      shouldShowYearSelector: R
    };
  }, [t, n]), j = U(
    () => !b && L <= 0,
    [L, b]
  ), S = U(
    () => !b && L >= 11,
    [L, b]
  ), D = () => {
    h(/* @__PURE__ */ new Date()), f(w), g(x), r == null || r(w, y, x);
  }, V = (I) => {
    h((R) => new Date(R.getFullYear(), I, 1));
  }, A = (I) => {
    isNaN(I) || (h((R) => new Date(I, R.getMonth(), 1)), I == x ? p === void 0 && f(w) : f(void 0), g(I));
  }, T = N === x && L === y, H = xf(N, L, p, t, n), F = (I) => {
    I.isCurrentMonth && (f(I.dayNumber), r == null || r(I.dayNumber, I.month, I.year));
  }, E = (I, R) => {
    I.isCurrentMonth && (o == null || o(I.dayNumber, I.month, I.year, "date", R));
  }, K = (I, R) => {
    I.isCurrentMonth && (s == null || s(I.dayNumber, I.month, I.year, "date", R));
  }, $ = (I, R) => {
    I.isCurrentMonth && (a == null || a(I.dayNumber, I.month, I.year, "date", R));
  }, P = (I, R) => {
    I.isCurrentMonth && (c == null || c(I.dayNumber, I.month, I.year, "date", R));
  };
  return /* @__PURE__ */ m("div", { className: `land-calendar-date ${l}`, style: d, children: [
    /* @__PURE__ */ i(
      Jt,
      {
        language: e,
        currentYear: k,
        currentMonth: L,
        viewMode: "date",
        shouldShowYearSelector: b,
        yearRange: M,
        monthPrevDisabled: j,
        monthNextDisabled: S,
        onMonthChange: V,
        onYearChange: A
      }
    ),
    /* @__PURE__ */ i(qa, { language: e }),
    /* @__PURE__ */ i("div", { className: "land-calendar-days", children: H.map((I, R) => /* @__PURE__ */ i(
      Vf,
      {
        day: I,
        onDayClick: F,
        onDayMouseOver: E,
        onDayMouseOut: K,
        onDayMouseEnter: $,
        onDayMouseLeave: P,
        children: I.isCurrentMonth && C.map((_) => _.date).includes(`${I.month}-${I.dayNumber}`) && /* @__PURE__ */ i("div", { className: "land-calendar-bottom-dot" })
      },
      `${I.year}-${I.month}-${I.dayNumber}-${R}`
    )) }),
    !T && /* @__PURE__ */ i(
      ae,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: D
      }
    )
  ] });
}, Sf = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onWeekChange: r,
  onWeekMouseOver: o,
  onWeekMouseOut: s,
  className: a = "",
  style: c
}) => {
  const [l, d] = B(/* @__PURE__ */ new Date()), [u, h] = B(() => {
    const L = /* @__PURE__ */ new Date(), M = it(L.getFullYear(), L.getMonth());
    let b = 0;
    for (let S = 0; S < M.length; S++)
      if (M[S].isCurrentWeek) {
        b = S;
        break;
      }
    const j = b + 1;
    return setTimeout(() => {
      const S = M[b];
      r == null || r(S.weekStart, S.weekEnd, L.getFullYear());
    }, 0), j;
  }), p = l.getFullYear(), { yearRange: f, shouldShowYearSelector: k } = U(() => {
    const L = Vt(t, n), M = Qt(t, n);
    return {
      yearRange: L,
      shouldShowYearSelector: M
    };
  }, [t, n]), g = () => {
    const L = new Date(l.getFullYear(), l.getMonth() - 1, 1);
    d(L);
    const M = it(L.getFullYear(), L.getMonth());
    let b = 0;
    for (let S = 0; S < M.length; S++)
      if (M[S].isCurrentWeek) {
        b = S;
        break;
      }
    h(b + 1);
    const j = M[b];
    r == null || r(j.weekStart, j.weekEnd, L.getFullYear());
  }, C = () => {
    const L = new Date(l.getFullYear(), l.getMonth() + 1, 1);
    d(L);
    const M = it(L.getFullYear(), L.getMonth());
    let b = 0;
    for (let S = 0; S < M.length; S++)
      if (M[S].isCurrentWeek) {
        b = S;
        break;
      }
    h(b + 1);
    const j = M[b];
    r == null || r(j.weekStart, j.weekEnd, L.getFullYear());
  }, v = (L) => {
    if (!isNaN(L)) {
      const M = new Date(L, l.getMonth(), l.getDate());
      d(M);
      const b = it(L, M.getMonth());
      let j = 0;
      for (let D = 0; D < b.length; D++)
        if (b[D].isCurrentWeek) {
          j = D;
          break;
        }
      h(j + 1);
      const S = b[j];
      r == null || r(S.weekStart, S.weekEnd, L);
    }
  }, w = (L) => {
    const M = L + 1;
    h(M);
    const b = x[L];
    r == null || r(b.weekStart, b.weekEnd, p);
  }, y = () => {
    const L = /* @__PURE__ */ new Date();
    d(L);
    const M = it(L.getFullYear(), L.getMonth());
    let b = 0;
    for (let S = 0; S < M.length; S++)
      if (M[S].isCurrentWeek) {
        b = S;
        break;
      }
    h(b + 1);
    const j = M[b];
    r == null || r(j.weekStart, j.weekEnd, L.getFullYear());
  }, x = it(p, l.getMonth(), u, t, n);
  Array.from({ length: x.length }, (L, M) => ({
    key: `${M + 1}`,
    label: `${e === "zh" ? "第" : "Week "}${M + 1}${e === "zh" ? "周" : ""}`
  }));
  const N = x.some((L) => L.isCurrentWeek);
  return /* @__PURE__ */ m("div", { className: `land-calendar-week ${a}`, style: c, children: [
    /* @__PURE__ */ i(
      Jt,
      {
        language: e,
        currentYear: p,
        currentMonth: l.getMonth(),
        viewMode: "week",
        shouldShowYearSelector: k,
        yearRange: f,
        onMonthChange: (L) => {
          const M = l.getMonth(), b = L - M;
          b === 1 || b === -11 ? C() : (b === -1 || b === 11) && g();
        },
        onYearChange: v
      }
    ),
    /* @__PURE__ */ i(qa, { language: e }),
    /* @__PURE__ */ i("div", { className: "land-calendar-week-days", children: x.map((L, M) => /* @__PURE__ */ i(
      "div",
      {
        className: `land-calendar-week-row ${L.isSelected ? "selected" : ""} ${L.isCurrentWeek ? "current" : ""} ${L.isDisabled ? "disabled" : ""}`,
        onClick: () => !L.isDisabled && w(M),
        onMouseOver: (b) => {
          L.isDisabled || o == null || o(L.weekStart, L.weekEnd, p, "week", b);
        },
        onMouseOut: (b) => {
          L.isDisabled || s == null || s(L.weekStart, L.weekEnd, p, "week", b);
        },
        children: L.dates.map((b, j) => /* @__PURE__ */ i(
          "div",
          {
            className: `land-calendar-item day ${b.toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? "current" : ""} ${b.getMonth() !== l.getMonth() ? "other-month" : ""}`,
            children: /* @__PURE__ */ i("div", { className: "day-number", children: b.getDate() })
          },
          j
        ))
      },
      M
    )) }),
    !N && /* @__PURE__ */ i(
      ae,
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
}, jf = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onMonthChange: r,
  onMonthMouseOver: o,
  onMonthMouseOut: s,
  className: a = "",
  style: c
}) => {
  const l = /* @__PURE__ */ new Date(), d = l.getMonth(), u = l.getFullYear(), [h, p] = B(u), [f, k] = B(d), [g, C] = B(u), { yearRange: v, shouldShowYearSelector: w } = U(() => {
    const V = Vt(t, n), A = Qt(t, n);
    return {
      yearRange: V,
      shouldShowYearSelector: A
    };
  }, [t, n]), y = () => {
    const V = h - 1;
    p(V);
  }, x = () => {
    const V = h + 1;
    p(V);
  }, N = (V) => {
    isNaN(V) || p(V);
  }, L = (V) => {
    k(V), C(h), r == null || r(V, h);
  }, M = () => {
    p(u), k(d), C(u), r == null || r(d, u);
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
  ], j = (V) => h === u && V === d, S = (V) => h === g && V === f, D = h === u;
  return /* @__PURE__ */ m("div", { className: `land-calendar-month ${a}`, style: c, children: [
    /* @__PURE__ */ i(
      Jt,
      {
        language: e,
        currentYear: h,
        viewMode: "month",
        shouldShowYearSelector: w,
        yearRange: v,
        onMonthChange: (V) => {
          V > 11 ? x() : V < 0 && y();
        },
        onYearChange: N
      }
    ),
    /* @__PURE__ */ i("div", { className: "land-calendar-months-grid", children: b.map((V, A) => {
      const T = Cf(h, V.value, t, n);
      return /* @__PURE__ */ i(
        "div",
        {
          className: `land-calendar-month-item ${j(V.value) ? "current" : ""} ${S(V.value) ? "selected" : ""} ${T ? "" : "disabled"}`,
          onClick: () => T && L(V.value),
          onMouseOver: (H) => {
            T && (o == null || o(V.value, h, "month", H));
          },
          onMouseOut: (H) => {
            T && (s == null || s(V.value, h, "month", H));
          },
          children: /* @__PURE__ */ i("div", { className: "month-name", children: e === "zh" ? V.zh : V.en })
        },
        A
      );
    }) }),
    !D && /* @__PURE__ */ i(
      ae,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: M
      }
    )
  ] });
}, $f = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onQuarterChange: r,
  onQuarterMouseOver: o,
  onQuarterMouseOut: s,
  className: a = "",
  style: c
}) => {
  const d = (/* @__PURE__ */ new Date()).getFullYear();
  function u() {
    const V = (/* @__PURE__ */ new Date()).getMonth();
    return Math.floor(V / 3) + 1;
  }
  const [h, p] = B(d), [f, k] = B(u()), [g, C] = B(d), { yearRange: v, shouldShowYearSelector: w } = U(() => {
    const V = Vt(t, n), A = Qt(t, n);
    return {
      yearRange: V,
      shouldShowYearSelector: A
    };
  }, [t, n]), y = () => {
    const V = h - 1;
    p(V);
  }, x = () => {
    const V = h + 1;
    p(V);
  }, N = (V) => {
    isNaN(V) || p(V);
  }, L = (V) => {
    k(V), C(h), r == null || r(V, h);
  }, M = () => {
    const V = u();
    p(d), k(V), C(d), r == null || r(V, d);
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
  ], j = (V) => h === d && V === u(), S = (V) => h === g && V === f, D = h === d;
  return /* @__PURE__ */ m("div", { className: `land-calendar-quarter ${a}`, style: c, children: [
    /* @__PURE__ */ i(
      Jt,
      {
        language: e,
        currentYear: h,
        viewMode: "quarter",
        shouldShowYearSelector: w,
        yearRange: v,
        onMonthChange: (V) => {
          V > 11 ? x() : V < 0 && y();
        },
        onYearChange: N
      }
    ),
    /* @__PURE__ */ i("div", { className: "land-calendar-quarters-grid", children: b.map((V, A) => {
      const T = Mf(h, V.value, t, n);
      return /* @__PURE__ */ m(
        "div",
        {
          className: `land-calendar-quarter-item ${j(V.value) ? "current" : ""} ${S(V.value) ? "selected" : ""} ${T ? "" : "disabled"}`,
          onClick: () => T && L(V.value),
          onMouseOver: (H) => {
            T && (o == null || o(V.value, h, "quarter", H));
          },
          onMouseOut: (H) => {
            T && (s == null || s(V.value, h, "quarter", H));
          },
          children: [
            /* @__PURE__ */ i("div", { className: "quarter-header", children: /* @__PURE__ */ i("div", { className: "quarter-name", children: e === "zh" ? V.zh : V.en }) }),
            /* @__PURE__ */ i("div", { className: "quarter-months", children: V.months }),
            /* @__PURE__ */ i("div", { className: "quarter-description", children: V.description })
          ]
        },
        A
      );
    }) }),
    !D && /* @__PURE__ */ i(
      ae,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: M
      }
    )
  ] });
}, Tf = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onYearChange: r,
  onYearMouseOver: o,
  onYearMouseOut: s,
  className: a = "",
  style: c
}) => {
  const d = (/* @__PURE__ */ new Date()).getFullYear();
  function u() {
    return Math.floor(d / 10) * 10;
  }
  const [h, p] = B(u()), [f, k] = B(d), { yearRange: g, shouldShowYearSelector: C } = U(() => {
    const V = Vt(t, n), A = Qt(t, n);
    return {
      yearRange: V,
      shouldShowYearSelector: A
    };
  }, [t, n, d]), v = () => {
    const V = h - 10;
    p(V);
  }, w = () => {
    const V = h + 10;
    p(V);
  }, y = (V) => {
    p(V);
  }, x = (V) => {
    k(V), r == null || r(V);
  }, N = () => {
    p(u()), k(d), r == null || r(d);
  }, L = U(() => {
    const V = [];
    for (let A = 0; A < 10; A++) {
      const T = h + A;
      V.push(T);
    }
    return V;
  }, [h]), M = U(() => {
    const V = [], [A, T] = g, H = Math.floor(A / 10) * 10, F = Math.floor(T / 10) * 10;
    for (let E = H; E <= F; E += 10)
      V.push({
        key: E.toString(),
        label: `${E}-${E + 9}`
      });
    return V;
  }, [g]), b = (V) => V === d, j = (V) => V === f, S = (V) => yf(V, t, n), D = L.includes(d);
  return /* @__PURE__ */ m("div", { className: `land-calendar-year ${a}`, style: c, children: [
    /* @__PURE__ */ i(
      Jt,
      {
        language: e,
        currentYear: h,
        viewMode: "year",
        shouldShowYearSelector: C,
        yearRange: g,
        onMonthChange: (V) => {
          V > 11 ? w() : V < 0 && v();
        },
        onYearChange: y,
        customYearDisplay: `${h}-${h + 9}`,
        customYearOptions: M
      }
    ),
    /* @__PURE__ */ i("div", { className: "land-calendar-years-grid", children: L.map((V, A) => {
      const T = S(V);
      return /* @__PURE__ */ m(
        "div",
        {
          className: `land-calendar-year-item ${b(V) ? "current" : ""} ${j(V) ? "selected" : ""} ${T ? "" : "disabled"}`,
          onClick: () => T && x(V),
          onMouseOver: (H) => {
            T && (o == null || o(V, "year", H));
          },
          onMouseOut: (H) => {
            T && (s == null || s(V, "year", H));
          },
          children: [
            /* @__PURE__ */ i("div", { className: "year-number", children: V }),
            !T && /* @__PURE__ */ i("div", { className: "disabled-overlay", children: e === "zh" ? "超出范围" : "Out of range" })
          ]
        },
        A
      );
    }) }),
    !D && /* @__PURE__ */ i(
      ae,
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
}, Af = ({
  viewMode: e = "date",
  language: t = "zh",
  minDate: n,
  maxDate: r,
  onDayChange: o,
  onWeekChange: s,
  onMonthChange: a,
  onQuarterChange: c,
  onYearChange: l,
  onDayMouseOver: d,
  onDayMouseOut: u,
  onDayMouseEnter: h,
  onDayMouseLeave: p,
  onWeekMouseOver: f,
  onWeekMouseOut: k,
  onMonthMouseOver: g,
  onMonthMouseOut: C,
  onQuarterMouseOver: v,
  onQuarterMouseOut: w,
  onYearMouseOver: y,
  onYearMouseOut: x,
  className: N,
  style: L,
  ...M
}) => {
  const b = () => {
    switch (e) {
      case "date":
        return /* @__PURE__ */ i(
          Oi,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onDayChange: o,
            onDayMouseOver: d,
            onDayMouseOut: u,
            onDayMouseEnter: h,
            onDayMouseLeave: p,
            className: N
          }
        );
      case "week":
        return /* @__PURE__ */ i(
          Sf,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onWeekChange: s,
            onWeekMouseOver: f,
            onWeekMouseOut: k
          }
        );
      case "month":
        return /* @__PURE__ */ i(
          jf,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onMonthChange: a,
            onMonthMouseOver: g,
            onMonthMouseOut: C
          }
        );
      case "quarter":
        return /* @__PURE__ */ i(
          $f,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onQuarterChange: c,
            onQuarterMouseOver: v,
            onQuarterMouseOut: w
          }
        );
      case "year":
        return /* @__PURE__ */ i(
          Tf,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onYearChange: l,
            onYearMouseOver: y,
            onYearMouseOut: x
          }
        );
      default:
        return /* @__PURE__ */ i(
          Oi,
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
  return /* @__PURE__ */ i(
    "div",
    {
      className: `land-calendar land-calendar-${e} ${N}`,
      style: L,
      ...M,
      children: b()
    }
  );
}, l3 = ({
  checked: e,
  data: t,
  animated: n,
  onChange: r,
  style: o,
  className: s = ""
}) => /* @__PURE__ */ i("div", { className: `land-checkbox ${s}`, style: o, children: t == null ? void 0 : t.map(
  (a) => /* @__PURE__ */ i(
    Ua,
    {
      checked: e.includes(a.key),
      onCheckedChange: () => r == null ? void 0 : r(a),
      animated: n,
      ...a
    },
    a.key
  )
) }), d3 = ({
  checked: e = !1,
  gap: t = 2,
  strokeWidth: n = 2,
  radius: r = 6,
  children: o,
  className: s,
  style: a
}) => /* @__PURE__ */ i(
  "div",
  {
    className: `land-checked-container ${e ? "checked" : ""} ${s}`,
    style: {
      "--land-checked-container-gap": `${t}px`,
      "--land-checked-container-size": `${n}px`,
      "--land-checked-container-radius": `${r}px`,
      ...a
    },
    children: o
  }
), u3 = ({
  open: e = !1,
  title: t,
  hideIcon: n,
  content: r,
  className: o = "",
  style: s
}) => /* @__PURE__ */ m("details", { className: `land-collapse ${o}`, style: s, open: e, children: [
  /* @__PURE__ */ m(
    "summary",
    {
      className: "land-collapse-title",
      children: [
        !n && /* @__PURE__ */ i(X, { name: "arrow", strokeWidth: 4, size: 16, stroke: "var(--color-gray-10)" }),
        t
      ]
    }
  ),
  /* @__PURE__ */ i("div", { className: "land-collapse-content", children: /* @__PURE__ */ i("div", { className: "land-collapse-content-details", children: r }) })
] }), h3 = ({ children: e, style: t, className: n }) => {
  const [r, o] = B(132), s = document.querySelector(".land-header"), a = document.querySelector(".land-footer");
  return Y(() => {
    let c, l;
    s ? c = s.getBoundingClientRect().height : c = 0, a ? l = a.getBoundingClientRect().height : l = 0, o(c + l);
  }), /* @__PURE__ */ i("div", { className: `land-content ${n}`, style: {
    "--land-content-min-height": `${r}px`,
    ...t
  }, children: e });
}, If = [
  { key: "hex", label: "HEX" },
  { key: "rgb", label: "RGB" },
  { key: "hsv", label: "HSV" },
  { key: "hsl", label: "HSL" }
], Hf = "hex", Zi = { h: 0, s: 100, v: 100 }, Yi = "var(--color-gray-3)", W = {
  // RGB转HSV
  rgbToHsv: (e, t, n) => {
    e = Math.max(0, Math.min(255, Math.round(e))), t = Math.max(0, Math.min(255, Math.round(t))), n = Math.max(0, Math.min(255, Math.round(n))), e /= 255, t /= 255, n /= 255;
    const r = Math.max(e, t, n), o = Math.min(e, t, n), s = r - o;
    let a = 0, c = 0;
    const l = r;
    if (s !== 0) {
      switch (c = s / r, r) {
        case e:
          a = (t - n) / s + (t < n ? 6 : 0);
          break;
        case t:
          a = (n - e) / s + 2;
          break;
        case n:
          a = (e - t) / s + 4;
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
    const r = Math.floor(e * 6), o = e * 6 - r, s = n * (1 - t), a = n * (1 - o * t), c = n * (1 - (1 - o) * t);
    let l = 0, d = 0, u = 0;
    switch (r % 6) {
      case 0:
        l = n, d = c, u = s;
        break;
      case 1:
        l = a, d = n, u = s;
        break;
      case 2:
        l = s, d = n, u = c;
        break;
      case 3:
        l = s, d = a, u = n;
        break;
      case 4:
        l = c, d = s, u = n;
        break;
      case 5:
        l = n, d = s, u = a;
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
    const r = Math.max(e, t, n), o = Math.min(e, t, n), s = r - o, a = r + o;
    let c = 0, l = 0;
    const d = a / 2;
    if (s !== 0) {
      switch (l = d > 0.5 ? s / (2 - a) : s / a, r) {
        case e:
          c = (t - n) / s + (t < n ? 6 : 0);
          break;
        case t:
          c = (n - e) / s + 2;
          break;
        case n:
          c = (e - t) / s + 4;
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
    let o, s, a;
    if (t === 0)
      o = s = a = n;
    else {
      const c = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - c;
      o = r(l, c, e + 1 / 3), s = r(l, c, e), a = r(l, c, e - 1 / 3);
    }
    return {
      r: Math.max(0, Math.min(255, Math.round(o * 255))),
      g: Math.max(0, Math.min(255, Math.round(s * 255))),
      b: Math.max(0, Math.min(255, Math.round(a * 255)))
    };
  }
}, Pf = ({ hue: e, onPanelChange: t }) => {
  const n = q(null), [r, o] = B(!1), [s, a] = B({ x: 0, y: 0 }), c = U(() => {
    const f = W.hsvToRgb(e, 100, 100);
    return {
      background: `linear-gradient(to right, #fff 0%, ${W.rgbToHex(f.r, f.g, f.b)} 100%),
                   linear-gradient(to top, #000 0%, transparent 100%)`
    };
  }, [e]), l = O(() => {
    o(!1);
  }, []), d = O(
    (f) => {
      if (!r || !n.current) return;
      const { left: k, top: g } = n.current.getBoundingClientRect(), C = f.clientX - k, v = f.clientY - g, w = n.current.clientWidth, y = n.current.clientHeight, x = Math.max(0, Math.min(w, C)), N = Math.max(0, Math.min(y, v));
      a({ x, y: N });
      const L = x / w, M = 1 - N / y;
      t(L, M);
    },
    [r, t]
  );
  Y(() => {
    if (r)
      return document.addEventListener("mousemove", d), document.addEventListener("mouseup", l), () => {
        document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", l);
      };
  }, [r, d, l]);
  const u = O(
    (f) => {
      var b, j, S;
      f.preventDefault(), o(!0);
      const { left: k, top: g } = ((b = n.current) == null ? void 0 : b.getBoundingClientRect()) || {
        left: 0,
        top: 0
      }, C = f.clientX - k, v = f.clientY - g, w = ((j = n.current) == null ? void 0 : j.clientWidth) || 0, y = ((S = n.current) == null ? void 0 : S.clientHeight) || 0, x = Math.max(0, Math.min(w, C)), N = Math.max(0, Math.min(y, v));
      a({ x, y: N });
      const L = x / w, M = 1 - N / y;
      t(L, M);
    },
    [t]
  ), h = O(
    (f) => {
      var b, j, S;
      if (!r) return;
      f.preventDefault();
      const { left: k, top: g } = ((b = n.current) == null ? void 0 : b.getBoundingClientRect()) || {
        left: 0,
        top: 0
      }, C = f.clientX - k, v = f.clientY - g, w = ((j = n.current) == null ? void 0 : j.clientWidth) || 0, y = ((S = n.current) == null ? void 0 : S.clientHeight) || 0, x = Math.max(0, Math.min(w, C)), N = Math.max(0, Math.min(y, v));
      a({ x, y: N });
      const L = x / w, M = 1 - N / y;
      t(L, M);
    },
    [r, t]
  ), p = O(() => {
    o(!1);
  }, []);
  return /* @__PURE__ */ i(
    "div",
    {
      ref: n,
      className: "land-color-picker-panel-move-area",
      style: c,
      onMouseDown: u,
      onMouseMove: h,
      onMouseUp: p,
      children: /* @__PURE__ */ i(
        "div",
        {
          className: "land-color-picker-pointer",
          style: {
            left: `${s.x}px`,
            top: `${s.y}px`
          }
        }
      )
    }
  );
}, Rf = ({ hue: e, onHueChange: t }) => {
  const n = q(null), r = O(
    (s) => {
      if (!n.current) return;
      const a = n.current.getBoundingClientRect(), c = Math.max(0, Math.min(1, (s.clientX - a.left) / a.width));
      t(c * 360);
    },
    [t]
  ), o = O(
    (s) => {
      if (!n.current) return;
      r(s);
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
        /* @__PURE__ */ i("div", { className: "land-color-picker-slider-track" }),
        /* @__PURE__ */ i(
          "div",
          {
            className: "land-color-picker-slider-thumb",
            style: { left: `${e / 360 * 100}%` }
          }
        )
      ]
    }
  );
}, Df = ({
  hue: e,
  alpha: t,
  onAlphaChange: n
}) => {
  const r = q(null), o = U(() => {
    const c = W.hsvToRgb(e, 100, 100);
    return {
      background: `linear-gradient(to right, transparent 0%, ${W.rgbToHex(c.r, c.g, c.b)} 100%)`
    };
  }, [e]), s = O(
    (c) => {
      if (!r.current) return;
      const l = r.current.getBoundingClientRect(), d = Math.max(0, Math.min(1, (c.clientX - l.left) / l.width));
      n(d);
    },
    [n]
  ), a = O(
    (c) => {
      if (!r.current) return;
      s(c);
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
    [n, s]
  );
  return /* @__PURE__ */ m(
    "div",
    {
      ref: r,
      className: "land-color-picker-slider land-color-picker-alpha-slider",
      onClick: s,
      onMouseDown: a,
      children: [
        /* @__PURE__ */ i("div", { className: "land-color-picker-slider-track" }),
        /* @__PURE__ */ i(
          "div",
          {
            className: "land-color-picker-slider-track",
            style: o
          }
        ),
        /* @__PURE__ */ i(
          "div",
          {
            className: "land-color-picker-slider-thumb",
            style: { left: `${t * 100}%` }
          }
        )
      ]
    }
  );
}, Tn = ({
  type: e = "border",
  value: t,
  inputType: n = "text",
  placeholder: r = "请输入",
  beforeContent: o,
  afterContent: s,
  prefix: a,
  suffix: c,
  width: l,
  maxLength: d,
  disabled: u,
  textAlign: h = "left",
  onChange: p,
  onEnter: f,
  onFocus: k,
  onBlur: g,
  onClear: C,
  className: v = "",
  style: w,
  ...y
}) => {
  const x = q(null), N = q(null), L = O(() => {
    !x.current || !N.current || (x.current.scrollLeft = N.current.scrollLeft);
  }, []), M = O((b) => {
    x.current && (x.current.scrollLeft = 0), g == null || g(b);
  }, []);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-input ${u ? "disabled" : ""} ${C ? "clear" : ""} ${e} text-${h} ${v}`,
      style: {
        width: typeof l == "number" ? `${l}px` : l,
        ...w
      },
      children: [
        o && /* @__PURE__ */ i("div", { className: "input-beforeContent", children: o }),
        /* @__PURE__ */ m("div", { className: "land-input-content", children: [
          a && /* @__PURE__ */ m("div", { className: "input-prefix-content", children: [
            /* @__PURE__ */ i("p", { className: "input-prefix", children: a }),
            /* @__PURE__ */ i("div", { className: "prefix-value", children: t || r })
          ] }),
          a && /* @__PURE__ */ i("p", { className: "input-prefix-empty", children: a }),
          /* @__PURE__ */ i(
            "input",
            {
              ref: N,
              placeholder: r,
              type: n,
              value: t,
              max: d,
              onKeyDown: (b) => {
                b.code === "Enter" && (f == null || f(t, b));
              },
              onClick: (b) => b.stopPropagation(),
              onFocus: k,
              onBlur: M,
              onChange: (b) => {
                L == null || L(), p == null || p(b.target.value, b);
              },
              onScroll: L,
              ...y
            }
          ),
          c && t && /* @__PURE__ */ m("div", { className: "input-suffix-content", children: [
            a && /* @__PURE__ */ i("p", { className: "input-prefix-empty", children: a }),
            /* @__PURE__ */ i("div", { className: "suffix-value", children: t }),
            /* @__PURE__ */ i("p", { className: "input-suffix", children: c })
          ] })
        ] }),
        c && t && /* @__PURE__ */ i("p", { className: "input-suffix-empty", children: c }),
        s && /* @__PURE__ */ i("div", { children: s }),
        C && /* @__PURE__ */ i(
          "div",
          {
            className: `land-input-clear-icon ${t ? "" : "hide"}`,
            onClick: C,
            children: /* @__PURE__ */ i(X, { name: "error-fill" })
          }
        )
      ]
    }
  );
}, Ae = ({
  direction: e = "row",
  lineLength: t = "100%",
  gap: n = 0,
  type: r = "solid",
  content: o,
  align: s = "center",
  style: a,
  className: c = "",
  dashedGap: l = 5,
  dashedLength: d = 10
}) => /* @__PURE__ */ m(
  "div",
  {
    className: `land-divider ${e} ${r} ${o ? "width-content" : ""} ${s} ${c}`,
    style: {
      width: e === "row" ? `${t}` : "1px",
      height: e === "column" ? `${t}` : "1px",
      margin: e === "row" ? `${n}px 0` : `0 ${n}px`,
      "--land-divider-dashed-gap": `${l}px`,
      "--land-divider-dashed-length": `${d}px`,
      ...a
    },
    children: [
      /* @__PURE__ */ i("div", { className: "land-divider-line" }),
      o && /* @__PURE__ */ m(he, { children: [
        /* @__PURE__ */ i("div", { className: "land-divider-content", children: o }),
        /* @__PURE__ */ i("div", { className: "land-divider-line land-divider-line-right" })
      ] })
    ]
  }
), je = ({
  value: e = 0,
  type: t = "border",
  step: n = 1,
  min: r = 0,
  max: o = 100,
  prefix: s,
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
  const [g, C] = B(e);
  Y(() => e !== void 0 && C(e), [e]);
  const v = (x, N) => {
    c || x < r - n / 2 || x > o + n / 2 || (C(x), l == null || l(x, N));
  }, w = O(
    (x, N) => {
      const L = Number(x);
      L > o || L < r || typeof L == "number" && L % n || (C(L), l == null || l(L, N));
    },
    [o, r, n, l]
  ), y = O(
    (x) => {
      if (!p || c) return;
      x.preventDefault(), x.stopPropagation();
      const N = x.deltaY > 0 ? -n : n, L = g + N;
      L >= r && L <= o && v(L, x);
    },
    [p, c, g, n, r, o]
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
      onClick: (x) => x.stopPropagation(),
      onWheel: y,
      children: [
        /* @__PURE__ */ i(
          Le,
          {
            targetBody: !0,
            className: "land-number-input-wheel-popover",
            content: p ? "滚动鼠标滚轮调整数值" : "",
            placement: "top",
            theme: "dark",
            children: /* @__PURE__ */ i(
              Tn,
              {
                className: "land-number-input-input",
                type: t,
                inputType: "number",
                value: String(g),
                disabled: c,
                prefix: s,
                suffix: a,
                onChange: (x, N) => w(x, N),
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
              /* @__PURE__ */ i(
                "div",
                {
                  className: `land-numberInput-add ${g === o || c ? "disabled" : ""}`,
                  onClick: (x) => v == null ? void 0 : v(g + n, x),
                  children: /* @__PURE__ */ i(X, { name: "arrow", size: 16 })
                }
              ),
              t === "border" && /* @__PURE__ */ i(Ae, { gap: 0, lineLength: "32px" }),
              /* @__PURE__ */ i(
                "div",
                {
                  className: `land-numberInput-dec ${g === r || c ? "disabled" : ""}`,
                  onClick: (x) => v == null ? void 0 : v(g - n, x),
                  children: /* @__PURE__ */ i(X, { name: "arrow", size: 16 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, p3 = ({
  color: e = Yi,
  onChange: t,
  style: n,
  className: r = "",
  disabled: o
}) => {
  const [s, a] = B(Hf), [c, l] = B(Zi.h), [d, u] = B(1), [h, p] = B(""), [f, k] = B({ r: 0, g: 0, b: 0 }), [g, C] = B(Zi), [v, w] = B({ h: 0, s: 0, l: 0 }), [y, x] = B({ x: 0, y: 0 }), N = q(!1), L = q(""), M = U(() => {
    switch (s) {
      case "hex":
        return h || "#000000";
      case "rgb":
        return `rgb(${f.r}, ${f.g}, ${f.b})`;
      case "hsv":
        return `hsv(${g.h}, ${g.s}%, ${g.v}%)`;
      case "hsl":
        return `hsl(${v.h}, ${v.s}%, ${v.l}%)`;
      default:
        return "#000000";
    }
  }, [s, h, f, g, v]), b = U(() => {
    switch (s) {
      case "hex":
        return h || "#000000";
      case "rgb":
        return W.rgbToHex(
          f.r,
          f.g,
          f.b
        );
      case "hsv":
        const $ = W.hsvToRgb(
          g.h,
          g.s,
          g.v
        );
        return W.rgbToHex($.r, $.g, $.b);
      case "hsl":
        const P = W.hslToRgb(
          v.h,
          v.s,
          v.l
        );
        return W.rgbToHex(P.r, P.g, P.b);
      default:
        return "#000000";
    }
  }, [s, h, f, g, v]), j = U(() => {
    const $ = W.hexToRgb(b);
    return $ ? `rgba(${$.r}, ${$.g}, ${$.b}, ${d})` : `rgba(0, 0, 0, ${d})`;
  }, [b, d]), S = U(
    () => ({
      background: j,
      ...n
    }),
    [j, n]
  );
  Y(() => {
    if (e && e !== Yi && !N.current) {
      const $ = W.hexToRgb(e);
      if ($) {
        const P = W.rgbToHsv($.r, $.g, $.b), I = W.rgbToHsl($.r, $.g, $.b);
        p(e), k($), C(P), w(I), l(P.h), N.current = !0;
      }
    } else N.current || (l(0), C({ h: 0, s: 0, v: 50 }), w({ h: 0, s: 0, l: 50 }), k({ r: 128, g: 128, b: 128 }), p("#808080"), N.current = !0);
  }, [e]);
  const D = O(() => {
    const $ = `${M}-${b}-${j}`;
    $ !== L.current && (L.current = $, t == null || t(M, b, j));
  }, [t, M, b, j]);
  Y(() => {
    N.current && D();
  }, [M, b, j, D]);
  const V = O(
    ($, P) => {
      x({ x: $, y: P });
      const I = $ * 100, R = P * 100;
      C({ h: c, s: I, v: R });
      const G = W.hsvToRgb(c, I, R), Z = W.rgbToHsl(G.r, G.g, G.b), J = W.rgbToHex(G.r, G.g, G.b);
      k(G), w(Z), p(J);
    },
    [c]
  ), A = ($) => {
    l($);
    const P = { ...g, h: $ };
    C(P);
    const I = W.hsvToRgb($, P.s, P.v), R = W.rgbToHsl(I.r, I.g, I.b), _ = W.rgbToHex(I.r, I.g, I.b);
    k(I), w(R), p(_);
  }, T = ($) => {
    u($);
  }, H = ($) => {
    let P = $.replace("#", "").toUpperCase();
    P.length > 6 && (P = P.slice(0, 6)), P = P.replace(/[^0-9A-F]/g, "");
    const I = P.length > 0 ? `#${P}` : "#";
    if (p(I), P.length === 6) {
      const R = W.hexToRgb(I);
      if (R) {
        const _ = W.rgbToHsv(R.r, R.g, R.b), G = W.rgbToHsl(R.r, R.g, R.b);
        k(R), C(_), w(G), l(_.h);
      }
    }
  }, F = ($, P) => {
    const I = Math.max(0, Math.min(255, Math.round(P))), R = { ...f, [$]: I };
    k(R);
    const _ = W.rgbToHsv(R.r, R.g, R.b), G = W.rgbToHsl(R.r, R.g, R.b), Z = W.rgbToHex(R.r, R.g, R.b);
    C(_), w(G), p(Z), l(_.h);
  }, E = ($, P) => {
    let I = P;
    $ === "h" ? I = (P % 360 + 360) % 360 : I = Math.max(0, Math.min(100, Math.round(P)));
    const R = { ...g, [$]: I };
    C(R);
    const _ = W.hsvToRgb(R.h, R.s, R.v), G = W.rgbToHsl(_.r, _.g, _.b), Z = W.rgbToHex(_.r, _.g, _.b);
    k(_), w(G), p(Z), l(R.h);
  }, K = ($, P) => {
    let I = P;
    $ === "h" ? I = (P % 360 + 360) % 360 : I = Math.max(0, Math.min(100, Math.round(P)));
    const R = { ...v, [$]: I };
    w(R);
    const _ = W.hslToRgb(R.h, R.s, R.l), G = W.rgbToHsv(_.r, _.g, _.b), Z = W.rgbToHex(_.r, _.g, _.b);
    k(_), C(G), p(Z), l(R.h);
  };
  return /* @__PURE__ */ i(
    "div",
    {
      className: `land-color-picker ${o ? "disabled" : ""} ${r}`,
      children: /* @__PURE__ */ i(
        mo,
        {
          trigger: "click",
          disabled: o,
          dropContent: /* @__PURE__ */ m(
            "div",
            {
              className: "land-color-picker-drop-panel",
              onClick: ($) => $.stopPropagation(),
              children: [
                /* @__PURE__ */ i(Pf, { hue: c, onPanelChange: V }),
                /* @__PURE__ */ m("div", { className: "land-color-picker-panel-move-sliders", children: [
                  /* @__PURE__ */ i(
                    Rf,
                    {
                      hue: c,
                      onHueChange: ($) => A($)
                    }
                  ),
                  /* @__PURE__ */ i(
                    Df,
                    {
                      hue: c,
                      alpha: d,
                      onAlphaChange: T
                    }
                  )
                ] }),
                /* @__PURE__ */ m("div", { className: "land-color-picker-panel-color-mode", children: [
                  /* @__PURE__ */ i(
                    Ga,
                    {
                      type: "transparent",
                      data: If,
                      onChange: ($) => a($.key),
                      selected: s,
                      placeholder: "选择模式"
                    }
                  ),
                  /* @__PURE__ */ m("div", { className: "land-color-picker-panel-color-input", children: [
                    /* @__PURE__ */ m("div", { className: "land-color-picker-panel-color-input-numbers", children: [
                      s === "hex" && /* @__PURE__ */ i(
                        Tn,
                        {
                          prefix: "#",
                          value: h.replace("#", ""),
                          onChange: ($) => H($)
                        }
                      ),
                      s === "rgb" && /* @__PURE__ */ m(he, { children: [
                        /* @__PURE__ */ i(
                          je,
                          {
                            width: 48,
                            placeholder: "R",
                            value: f.r,
                            onChange: ($) => F("r", $),
                            min: 0,
                            max: 255,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ i(
                          je,
                          {
                            width: 48,
                            placeholder: "G",
                            value: f.g,
                            onChange: ($) => F("g", $),
                            min: 0,
                            max: 255,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ i(
                          je,
                          {
                            width: 48,
                            placeholder: "B",
                            value: f.b,
                            onChange: ($) => F("b", $),
                            min: 0,
                            max: 255,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        )
                      ] }),
                      s === "hsv" && /* @__PURE__ */ m(he, { children: [
                        /* @__PURE__ */ i(
                          je,
                          {
                            width: 48,
                            placeholder: "H",
                            value: g.h,
                            onChange: ($) => E("h", $),
                            min: 0,
                            max: 360,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ i(
                          je,
                          {
                            width: 48,
                            placeholder: "S",
                            value: g.s,
                            onChange: ($) => E("s", $),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ i(
                          je,
                          {
                            width: 48,
                            placeholder: "V",
                            value: g.v,
                            onChange: ($) => E("v", $),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        )
                      ] }),
                      s === "hsl" && /* @__PURE__ */ m(he, { children: [
                        /* @__PURE__ */ i(
                          je,
                          {
                            width: 48,
                            placeholder: "H",
                            value: v.h,
                            onChange: ($) => K("h", $),
                            min: 0,
                            max: 360,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ i(
                          je,
                          {
                            width: 48,
                            placeholder: "S",
                            value: v.s,
                            onChange: ($) => K("s", $),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ i(
                          je,
                          {
                            width: 48,
                            placeholder: "L",
                            value: v.l,
                            onChange: ($) => K("l", $),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ i(
                      je,
                      {
                        width: 56,
                        value: Math.round(d * 100),
                        onChange: ($) => {
                          const P = Math.max(
                            0,
                            Math.min(100, Math.round($))
                          );
                          u(P / 100);
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
          children: /* @__PURE__ */ i(
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
}, f3 = ({
  disabled: e,
  onChange: t,
  style: n,
  className: r = "",
  dropdownProps: o,
  inputProps: s,
  calendarProps: a,
  pickerType: c = "date",
  value: l,
  placeholder: d,
  showConfirmButton: u,
  allowInput: h = !1
}) => {
  const [p, f] = B(!1), [k, g] = B(l ? new Date(l) : null), [C, v] = B(""), [w, y] = B(""), [x, N] = B(!1);
  U(() => {
    e && p && f(!1);
  }, [e, p]);
  const L = O((P, I) => {
    if (!P) return "";
    const R = P.getFullYear(), _ = P.getMonth() + 1, G = P.getDate();
    switch (I) {
      case "year":
        return `${R}年`;
      case "month":
        return `${R}年${_}月`;
      case "quarter":
        const Z = Math.ceil(_ / 3);
        return `${R}年第${Z}季度`;
      case "week":
        const J = new Date(R, 0, 1), re = Math.floor((P.getTime() - J.getTime()) / (24 * 60 * 60 * 1e3)), te = Math.ceil((re + J.getDay() + 1) / 7);
        return `${R}年第${te}周`;
      case "date":
      default:
        return `${R}-${_.toString().padStart(2, "0")}-${G.toString().padStart(2, "0")}`;
    }
  }, []), M = O((P) => {
    if (!P.trim()) return null;
    const I = /* @__PURE__ */ new Date(), R = I.getFullYear(), _ = I.getMonth() + 1;
    I.getDate();
    const G = [
      // YYYY-MM-DD
      {
        pattern: /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
        extract: (Z) => ({
          year: parseInt(Z[1]),
          month: parseInt(Z[2]),
          day: parseInt(Z[3])
        })
      },
      // YYYY/MM/DD
      {
        pattern: /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/,
        extract: (Z) => ({
          year: parseInt(Z[1]),
          month: parseInt(Z[2]),
          day: parseInt(Z[3])
        })
      },
      // YYYY年MM月DD日
      {
        pattern: /^(\d{4})年(\d{1,2})月(\d{1,2})日$/,
        extract: (Z) => ({
          year: parseInt(Z[1]),
          month: parseInt(Z[2]),
          day: parseInt(Z[3])
        })
      },
      // YYYY年MM月
      {
        pattern: /^(\d{4})年(\d{1,2})月$/,
        extract: (Z) => ({
          year: parseInt(Z[1]),
          month: parseInt(Z[2]),
          day: 1
        })
      },
      // YYYY年
      {
        pattern: /^(\d{4})年$/,
        extract: (Z) => ({
          year: parseInt(Z[1]),
          month: 1,
          day: 1
        })
      },
      // MM月DD日
      {
        pattern: /^(\d{1,2})月(\d{1,2})日$/,
        extract: (Z) => ({
          year: R,
          month: parseInt(Z[1]),
          day: parseInt(Z[2])
        })
      },
      // DD日
      {
        pattern: /^(\d{1,2})日$/,
        extract: (Z) => ({
          year: R,
          month: _,
          day: parseInt(Z[1])
        })
      }
    ];
    for (const { pattern: Z, extract: J } of G) {
      const re = P.match(Z);
      if (re)
        try {
          const { year: te, month: le, day: Se } = J(re), we = new Date(te, le - 1, Se);
          if (we.getFullYear() === te && we.getMonth() === le - 1 && we.getDate() === Se)
            return we;
        } catch {
          continue;
        }
    }
    return null;
  }, []);
  U(() => {
    v(l ? L(new Date(l), c) : "");
  }, [l, c, L]);
  const b = O((...P) => {
    if (e) return;
    let I = null;
    switch (c) {
      case "year":
        const R = P[0];
        I = new Date(R, 0, 1);
        break;
      case "month":
        const [_, G] = P;
        I = new Date(G, _ - 1, 1);
        break;
      case "quarter":
        const [Z, J] = P, re = (Z - 1) * 3;
        I = new Date(J, re, 1);
        break;
      case "week":
        I = P[0];
        break;
      case "date":
      default:
        const [te, le, Se] = P;
        I = new Date(Se, le - 1, te);
        break;
    }
    g(I), u || (v(L(I, c)), t == null || t(I), f(!1));
  }, [c, u, L, t, e]), j = O(() => {
    e || (k && (v(L(k, c)), t == null || t(k)), f(!1));
  }, [k, c, L, t, e]), S = O(() => {
    e || (g(l ? new Date(l) : null), f(!1));
  }, [l, e]), D = O((P) => {
    if (e) {
      f(!1);
      return;
    }
    !P && u && g(l ? new Date(l) : null), f(P);
  }, [u, l, e]), V = O(() => {
    e || (g(null), v(""), y(""), t == null || t(null));
  }, [t, e]), A = O((P, I) => {
    e || y(P);
  }, [e]), T = O(() => {
    e || (h && c === "date" ? (N(!0), y(C)) : f(!0));
  }, [e, h, c, C]), H = O(() => {
    if (!e && h && c === "date") {
      if (N(!1), w.trim()) {
        const P = M(w);
        P ? (g(P), v(L(P, c)), t == null || t(P)) : v(L(k, c));
      } else
        g(null), v(""), t == null || t(null);
      y("");
    }
  }, [h, c, w, M, k, L, t, e]), F = O((P) => {
    if (!e && h && c === "date" && P.trim()) {
      const I = M(P);
      I && (g(I), v(L(I, c)), t == null || t(I), N(!1), y(""));
    }
  }, [h, c, M, L, t, e]), E = U(() => {
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
  }, [c, d]), K = U(() => {
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
  }, [c]), $ = U(() => {
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
  return /* @__PURE__ */ i(
    "div",
    {
      className: `land-date-picker ${r}`,
      style: n,
      children: /* @__PURE__ */ i(
        mo,
        {
          open: p,
          disabled: e,
          trigger: "click",
          onOpen: D,
          dropContent: /* @__PURE__ */ m("div", { className: "land-date-picker-dropdown-content", children: [
            /* @__PURE__ */ i(
              Af,
              {
                viewMode: K,
                ...$,
                ...a
              }
            ),
            u && /* @__PURE__ */ m("div", { className: "land-date-picker-dropdown-actions", children: [
              /* @__PURE__ */ i(
                ae,
                {
                  text: "取消",
                  type: "outline",
                  className: "land-date-picker-dropdown-cancel-button",
                  onClick: S
                }
              ),
              /* @__PURE__ */ i(
                ae,
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
          children: /* @__PURE__ */ m("div", { className: `land-date-picker-input ${C ? "" : "empty"} ${x ? "input-mode" : ""} `, children: [
            /* @__PURE__ */ i(
              Tn,
              {
                type: "transparent",
                className: "land-date-picker-input-value",
                placeholder: E,
                value: x ? w : C,
                onFocus: T,
                onBlur: H,
                onChange: h && c === "date" && !e ? A : void 0,
                onClear: V,
                onEnter: F,
                ...s
              }
            ),
            /* @__PURE__ */ i(X, { name: "calendar", className: "land-date-picker-icon" })
          ] })
        }
      )
    }
  );
}, m3 = ({
  show: e,
  mask: t,
  title: n,
  headerLeftComponent: r,
  headerRightComponent: o,
  headerComponent: s,
  useHeaderDivider: a,
  footerLeftComponent: c,
  footerRightComponent: l,
  footerComponent: d,
  useFooterDivider: u,
  cancelLabel: h = "取消",
  submitLabel: p = "确定",
  size: f = "medium",
  onClose: k,
  onSubmit: g,
  onCancel: C,
  children: v,
  wrapStyle: w,
  wrapClassName: y,
  contentStyle: x,
  contentClassName: N,
  bodyStyle: L,
  bodyClassName: M,
  maskStyle: b
}) => {
  const j = U(() => {
    let S = "320px";
    switch (f) {
      case "small":
        S = "320px";
        break;
      case "medium":
        S = "600px";
        break;
      case "large":
        S = "1000px";
        break;
    }
    return S;
  }, [f]);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-dialog ${e ? "show" : ""} ${y}`,
      style: {
        "--land-dialog-content-width": j,
        ...w
      },
      children: [
        t && e && /* @__PURE__ */ i(
          me.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            className: "land-dialog-mask",
            style: b
          }
        ),
        e && /* @__PURE__ */ m(
          me.div,
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
              s || (n || k || r || o ? /* @__PURE__ */ m("div", { className: "land-dialog-header", children: [
                r || /* @__PURE__ */ i("div", { className: "land-dialog-header-title", children: n }),
                o || k && /* @__PURE__ */ i("div", { className: "land-dialog-header-close", children: /* @__PURE__ */ i(X, { name: "close", onClick: k, size: 24 }) })
              ] }) : null),
              a && /* @__PURE__ */ i(Ae, {}),
              /* @__PURE__ */ i(
                "div",
                {
                  className: `land-dialog-body ${M}`,
                  style: L,
                  children: v
                }
              ),
              u && /* @__PURE__ */ i(Ae, {}),
              d || /* @__PURE__ */ m("div", { className: "land-dialog-footer", children: [
                l || (h || p || C || g) && /* @__PURE__ */ m("div", { className: "land-dialog-footer-btn", children: [
                  C && /* @__PURE__ */ i(ae, { type: "fill", status: "default", onClick: C, children: h }),
                  g && /* @__PURE__ */ i(
                    ae,
                    {
                      type: "background",
                      status: "primary",
                      onClick: g,
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
}, g3 = ({
  show: e,
  placement: t = "right",
  mask: n,
  title: r,
  headerLeftComponent: o,
  headerRightComponent: s,
  headerComponent: a,
  useHeaderDivider: c = !0,
  footerLeftComponent: l,
  footerRightComponent: d,
  footerComponent: u,
  useFooterDivider: h = !0,
  cancelLabel: p = "取消",
  submitLabel: f = "确定",
  cancelDisabled: k,
  submitDisabled: g,
  cancelButtonProps: C,
  submitButtonProps: v,
  minWidth: w,
  maxWidth: y,
  size: x = "auto",
  onClose: N,
  onSubmit: L,
  onCancel: M,
  children: b,
  wrapStyle: j,
  wrapClassName: S = "",
  contentStyle: D,
  contentClassName: V = "",
  bodyStyle: A,
  bodyClassName: T = "",
  maskStyle: H
}) => {
  const F = U(() => {
    let $ = "320px";
    if (t === "bottom")
      $ = "100%";
    else
      switch (x) {
        case "small":
          $ = "32%";
          break;
        case "medium":
          $ = "60%";
          break;
        case "large":
          $ = "80%";
          break;
        case "auto":
          $ = "fit-content";
          break;
      }
    return $;
  }, [x, t]), E = U(() => {
    let $ = "100%";
    if (t === "bottom")
      switch (x) {
        case "small":
          $ = "30%";
          break;
        case "medium":
          $ = "60%";
          break;
        case "large":
          $ = "90%";
          break;
        case "auto":
          $ = "fit-content";
          break;
      }
    return $;
  }, [t]), K = U(() => N && (r || a || o), [N, a, o]);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-drawer ${e ? "show" : ""} ${t} ${S}`,
      style: j,
      children: [
        n && e && /* @__PURE__ */ i(
          me.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            className: "land-drawer-mask",
            style: H
          }
        ),
        e && /* @__PURE__ */ m(
          me.div,
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
            className: `land-drawer-content ${V}`,
            style: {
              width: F,
              height: E,
              minWidth: w,
              maxWidth: y,
              ...D
            },
            children: [
              /* @__PURE__ */ m("div", { className: "land-drawer-header-wrapper", children: [
                N && /* @__PURE__ */ i("div", { className: "land-drawer-header-close", children: /* @__PURE__ */ i(X, { name: "close", onClick: N, strokeWidth: 3 }) }),
                K && /* @__PURE__ */ i(Ae, { direction: "column", lineLength: "36px", gap: 12 }),
                a || (r || N || o || s ? /* @__PURE__ */ m("div", { className: "land-drawer-header", children: [
                  o || /* @__PURE__ */ i("div", { className: "land-drawer-header-title", children: r }),
                  s && /* @__PURE__ */ i("div", { className: "land-drawer-header-right", children: s })
                ] }) : null)
              ] }),
              c && (a || N || o || s) && /* @__PURE__ */ i(Ae, {}),
              /* @__PURE__ */ i(
                "div",
                {
                  className: `land-drawer-body ${T}`,
                  style: A,
                  children: b
                }
              ),
              h && (u || L || M || l || d) && /* @__PURE__ */ i(Ae, {}),
              (u || L || M || l || d) && /* @__PURE__ */ m("div", { className: "land-drawer-footer", children: [
                d || (p || f || M || L) && /* @__PURE__ */ m("div", { className: "land-drawer-footer-btn", children: [
                  M && /* @__PURE__ */ i(
                    ae,
                    {
                      type: "fill",
                      disabled: k,
                      status: "default",
                      onClick: M,
                      ...C,
                      children: p
                    }
                  ),
                  L && /* @__PURE__ */ i(
                    ae,
                    {
                      type: "background",
                      disabled: g,
                      status: "primary",
                      onClick: L,
                      ...v,
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
}, Ef = (e, t) => {
  let n;
  return function(...o) {
    const s = () => {
      clearTimeout(n), e(...o);
    };
    clearTimeout(n), n = setTimeout(s, t);
  };
}, v3 = ({
  line: e = 1,
  text: t,
  children: n,
  open: r = !0,
  style: o,
  className: s,
  popoverProps: a,
  setMaxWidth: c
}) => {
  const l = q(null), [d, u] = B(!1), [h, p] = B(0), f = t || n || "", k = O(() => {
    const v = l.current;
    if (v)
      if (e === 1) {
        const w = v.offsetWidth < v.scrollWidth;
        p(v.offsetWidth), u(w);
      } else {
        const w = v.offsetHeight < v.scrollHeight;
        p(v.offsetWidth), u(w);
      }
  }, [e]), g = O(
    Ef(k, 100),
    [k]
  );
  Y(() => {
    const v = l.current;
    if (!v) return;
    const w = new ResizeObserver(() => {
      g();
    });
    w.observe(v);
    let y = v.parentElement;
    const x = [];
    for (; y && y !== document.body; ) {
      const M = new ResizeObserver(() => {
        g();
      });
      M.observe(y), x.push(M), y = y.parentElement;
    }
    const N = () => {
      g();
    };
    window.addEventListener("resize", N);
    const L = new MutationObserver((M) => {
      let b = !1;
      M.forEach((j) => {
        if (j.type === "childList" || j.type === "attributes") {
          const S = j.target;
          (v.contains(S) || S.contains(v) || v.parentElement && v.parentElement.contains(S)) && (b = !0);
        }
      }), b && g();
    });
    return L.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style", "class"]
    }), k(), () => {
      w.disconnect(), x.forEach((M) => M.disconnect()), window.removeEventListener("resize", N), L.disconnect();
    };
  }, [k, g, f]), Y(() => {
    const v = setTimeout(() => {
      k();
    }, 0);
    return () => clearTimeout(v);
  }, [f, k]);
  const C = /* @__PURE__ */ i(
    "div",
    {
      className: `land-ellipsis ${e > 1 ? "line-multiple" : "line-single"} ${s || ""}`,
      style: o,
      children: /* @__PURE__ */ i(
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
  return !d || !r ? C : /* @__PURE__ */ i(
    Le,
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
      children: C
    }
  );
}, k3 = ({
  width: e = "100%",
  height: t,
  column: n,
  wrap: r,
  justify: o = "start",
  align: s = "start",
  gap: a,
  bothCenter: c,
  children: l,
  style: d,
  className: u = ""
}) => /* @__PURE__ */ i(
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
      alignItems: c ? "center" : s,
      ...d
    },
    children: l
  }
), L3 = ({ children: e, style: t, className: n }) => /* @__PURE__ */ i("div", { className: `land-footer ${n}`, style: t, children: e });
var Ee = /* @__PURE__ */ ((e) => (e.ColumnFit = "column-fit", e.ColumnFill = "column-fill", e.RowFit = "row-fit", e.RowFill = "row-fill", e.ColumnRepeat = "column-repeat", e.RowRepeat = "row-repeat", e.Default = "default", e))(Ee || {});
const w3 = ({
  type: e = Ee.Default,
  autoSize: t = 100,
  repeatNum: n = 1,
  gap: r = 8,
  columnGap: o,
  rowGap: s,
  children: a,
  style: c,
  className: l = ""
}) => {
  const d = U(() => {
    let u = {
      display: "grid",
      columnGap: o || r,
      rowGap: s || r
    };
    if (e === Ee.Default)
      return { ...u, ...c };
    switch (e) {
      case Ee.ColumnFit:
        return { ...u, gridTemplateColumns: `repeat(auto-fit, minmax(${t}px, 1fr))`, ...c };
      case Ee.ColumnFill:
        return { ...u, gridTemplateColumns: `repeat(auto-fill, minmax(${t}px, 1fr))`, ...c };
      case Ee.RowFit:
        return { ...u, gridTemplateRows: `repeat(auto-fit, minmax(${t}px, 1fr))`, ...c };
      case Ee.RowFill:
        return { ...u, gridTemplateRows: `repeat(auto-fill, minmax(${t}px, 1fr))`, ...c };
      case Ee.ColumnRepeat:
        return { ...u, gridTemplateColumns: `repeat(${n}, 1fr)`, ...c };
      case Ee.RowRepeat:
        return { ...u, gridTemplateRows: `repeat(${n}, 1fr)`, ...c };
      default:
        return { ...u, ...c };
    }
  }, [e, t, n, r, c]);
  return /* @__PURE__ */ i("div", { className: `land-grid ${l}`, style: d, children: a });
};
var hn = /* @__PURE__ */ ((e) => (e.SELF = "self", e.OTHERS = "others", e.SIMPLE = "simple", e.DISABLED = "disabled", e))(hn || {});
const za = ({
  active: e,
  data: t,
  direction: n = "row",
  titleDirection: r = "row",
  border: o = !0,
  titleDeputy: s,
  onChange: a,
  onDropChange: c,
  dropProps: l,
  itemStyle: d,
  itemClassName: u = "",
  style: h,
  className: p = "",
  scrollToView: f = !1
}) => {
  const k = q(null), g = q(null);
  return Y(() => {
    f && e && g.current && g.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [e, f, n]), /* @__PURE__ */ i(
    "div",
    {
      ref: k,
      className: `land-menu ${p} ${n === "column" ? "column" : ""} ${o ? "borderBottom" : ""} ${f ? "scroll-to-view" : ""}`,
      style: h,
      children: t == null ? void 0 : t.map((C, v) => /* @__PURE__ */ m(
        "div",
        {
          ref: e === C.key ? g : null,
          className: `land-menu-item ${C.clickType === hn.SIMPLE ? "simple" : ""} ${C.clickType === hn.DISABLED || C.disabled ? "disabled" : ""}`,
          style: d,
          children: [
            /* @__PURE__ */ m(
              "div",
              {
                role: "button",
                className: `land-menu-link ${n === "column" ? "column" : ""} ${r === "column" && !C.titleDeputy ? "titleColumn" : ""} ${e === C.key && !(C.titleDeputy || s) ? "active" : ""} ${C.titleDeputy || s ? "title-deputy" : ""} ${u}`,
                onClick: (w) => {
                  C.titleDeputy || s || C.clickType === hn.DISABLED || C.disabled || (w.stopPropagation(), a == null || a(C));
                },
                children: [
                  typeof C.icon == "string" ? /* @__PURE__ */ i("img", { src: C.icon, className: "land-menu-icon" }) : C.icon,
                  /* @__PURE__ */ m("div", { className: "land-menu-title-wrap", children: [
                    /* @__PURE__ */ i("p", { className: `land-menu-title ${C.titleDeputy || s ? "title-deputy" : ""}`, "data-title": C.label, children: C.label }),
                    C.subText && /* @__PURE__ */ i("span", { className: "land-menu-sub-title", children: C.subText })
                  ] }),
                  C.isNew && /* @__PURE__ */ i("i", { className: "land-menu-new", children: typeof C.isNew == "boolean" ? "NEW" : C.isNew })
                ]
              },
              C.key
            ),
            C.dropData && /* @__PURE__ */ i("div", { className: `land-menu-drop-wrap ${C.open ? "open" : ""}`, children: /* @__PURE__ */ i("div", { className: "land-menu-drop", children: /* @__PURE__ */ i(
              za,
              {
                data: C.dropData,
                onChange: (w) => c == null ? void 0 : c(w, C),
                direction: "column",
                titleDirection: r,
                scrollToView: f,
                ...l
              }
            ) }) })
          ]
        },
        C.key ?? v
      ))
    }
  );
}, y3 = ({
  height: e = "64px",
  fixed: t,
  filter: n = 0,
  borderBottom: r = !0,
  applications: o,
  logo: s,
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
  var v;
  const [g, C] = B(!1);
  return Y(() => {
    const w = () => C(!1), y = () => C(!1);
    return window.addEventListener("scroll", w, { passive: !0 }), window.addEventListener("resize", y, { passive: !0 }), () => {
      window.removeEventListener("scroll", w), window.removeEventListener("resize", y);
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
                /* @__PURE__ */ i(X, { name: "application" }),
                /* @__PURE__ */ i("div", { className: "land-application-drop", children: o })
              ]
            }
          ),
          typeof s == "string" ? /* @__PURE__ */ i("img", { src: s }) : s,
          l && s && a && /* @__PURE__ */ i(Ae, { direction: "column", lineLength: "24px" }),
          a
        ] }),
        /* @__PURE__ */ i(
          "div",
          {
            className: `land-header-nav ${g ? "showMobileNav" : ""}`,
            style: {
              justifyContent: d
            },
            children: u && /* @__PURE__ */ i(
              za,
              {
                border: !1,
                ...u,
                onChange: (w) => {
                  var y;
                  (y = u.onChange) == null || y.call(u, w), C(!1);
                },
                onDropChange: (w, y) => {
                  var x;
                  (x = u.onDropChange) == null || x.call(u, w, y), C(!1);
                }
              }
            )
          }
        ),
        h && /* @__PURE__ */ i("div", { className: "land-header-right", children: h }),
        u && u.data && ((v = u.data) == null ? void 0 : v.length) > 0 && /* @__PURE__ */ i(
          ae,
          {
            className: "land-mobile-toggle-button",
            icon: /* @__PURE__ */ i(X, { name: "more-line" }),
            type: "text",
            onClick: () => C(!g)
          }
        )
      ]
    }
  );
}, Bf = ({
  width: e = "100%",
  height: t = 24,
  radius: n = "var(--radius-m)",
  start: r = "var(--color-bg-secondary)",
  stop: o = "var(--color-bg-tertiary)",
  style: s,
  className: a = ""
}) => /* @__PURE__ */ i(
  "div",
  {
    className: `land-skeleton ${a}`,
    style: {
      width: typeof e == "number" ? `${e}px` : e,
      height: typeof t == "number" ? `${t}px` : t,
      borderRadius: typeof n == "number" ? `${n}px` : n,
      ...s
    },
    children: /* @__PURE__ */ i(
      "div",
      {
        className: "land-skeleton-content",
        style: {
          background: `linear-gradient(90deg, ${r} 0%, ${r} 20%, ${o} 50%, ${o} 80%, ${r} 100%, ${r} 120%, ${o} 150%, ${o} 180%, ${r} 200%)`
        }
      }
    )
  }
), Ff = ({
  url: e,
  alt: t = "",
  ratio: n,
  className: r,
  imgClassName: o,
  imgStyle: s,
  style: a,
  fallback: c,
  fallbackUrl: l
}) => {
  const d = q(null), [u, h] = B("loading"), [p, f] = B(e), [k, g] = B("auto"), [C, v] = B(!1), [w, y] = B("idle");
  Y(() => {
    h("loading"), f(e), v(!1), y("idle");
  }, [e]);
  const x = () => {
    C ? y("success") : h("success"), setTimeout(() => {
      C ? y("success") : h("success");
    }, 150), d.current && g(`${d.current.width / d.current.height}`);
  }, N = () => {
    C ? y("error") : (h("error"), l && !C ? (v(!0), y("loading"), f(l)) : c && typeof c == "string" && !C && (v(!0), y("loading"), f(c)));
  };
  Y(() => {
    const S = d.current;
    if (!S) {
      h("idle"), setTimeout(() => {
        h("idle");
      }, 300);
      return;
    }
    return S.complete && (C ? y("success") : h("success"), setTimeout(() => {
      C ? y("success") : h("success");
    }, 150), g(`${d.current.width / d.current.height}`)), S.addEventListener("load", x), S.addEventListener("error", N), () => {
      S == null || S.removeEventListener("load", x), S == null || S.removeEventListener("error", N);
    };
  }, [p, C]);
  const L = n || (u === "success" || w === "success" ? k : "1"), M = () => c && typeof c != "string" && u === "error" && (w === "error" || !l) ? c : u === "error" && (w === "error" || !l) && (!c || typeof c == "string") ? /* @__PURE__ */ i(pf, { type: "error", title: "加载失败", direction: "column", className: "land-image-alert", noBg: !0 }) : null, b = u === "loading" || C && w === "loading", j = p && (u === "success" || w === "success" || b);
  return /* @__PURE__ */ m(
    "div",
    {
      className: `land-image ${b ? "loading" : u === "success" || w === "success" ? "success" : "error"} ${r ?? ""}`,
      style: {
        aspectRatio: L,
        ...a
      },
      children: [
        b && /* @__PURE__ */ i(
          Bf,
          {
            width: "100%",
            height: "100%",
            radius: "var(--radius-m)",
            className: "land-image-skeleton"
          }
        ),
        M(),
        j && /* @__PURE__ */ i(
          "img",
          {
            ref: d,
            alt: t,
            src: p,
            className: `land-image-img ${u === "success" || w === "success" ? "loaded" : ""} ${o}`,
            style: {
              opacity: u === "success" || w === "success" ? 1 : 0,
              ...s
            }
          }
        )
      ]
    }
  );
}, C3 = ({ children: e, style: t, className: n }) => /* @__PURE__ */ i("div", { className: `land-layout ${n}`, style: t, children: e });
var Ce = function() {
  return Ce = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ce.apply(this, arguments);
};
function gt(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function Of(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Zf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yf = /* @__PURE__ */ Of(
  function(e) {
    return Zf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ne = "-ms-", Dt = "-moz-", ee = "-webkit-", Ja = "comm", An = "rule", go = "decl", _f = "@import", Qa = "@keyframes", Uf = "@layer", Wa = Math.abs, vo = String.fromCharCode, Cr = Object.assign;
function Gf(e, t) {
  return pe(e, 0) ^ 45 ? (((t << 2 ^ pe(e, 0)) << 2 ^ pe(e, 1)) << 2 ^ pe(e, 2)) << 2 ^ pe(e, 3) : 0;
}
function ec(e) {
  return e.trim();
}
function Be(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, n) {
  return e.replace(t, n);
}
function pn(e, t, n) {
  return e.indexOf(t, n);
}
function pe(e, t) {
  return e.charCodeAt(t) | 0;
}
function vt(e, t, n) {
  return e.slice(t, n);
}
function He(e) {
  return e.length;
}
function tc(e) {
  return e.length;
}
function At(e, t) {
  return t.push(e), e;
}
function Kf(e, t) {
  return e.map(t).join("");
}
function _i(e, t) {
  return e.filter(function(n) {
    return !Be(n, t);
  });
}
var In = 1, kt = 1, nc = 0, Ve = 0, ue = 0, St = "";
function Hn(e, t, n, r, o, s, a, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: s, line: In, column: kt, length: a, return: "", siblings: c };
}
function _e(e, t) {
  return Cr(Hn("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function st(e) {
  for (; e.root; )
    e = _e(e.root, { children: [e] });
  At(e, e.siblings);
}
function Xf() {
  return ue;
}
function qf() {
  return ue = Ve > 0 ? pe(St, --Ve) : 0, kt--, ue === 10 && (kt = 1, In--), ue;
}
function Ie() {
  return ue = Ve < nc ? pe(St, Ve++) : 0, kt++, ue === 10 && (kt = 1, In++), ue;
}
function nt() {
  return pe(St, Ve);
}
function fn() {
  return Ve;
}
function Pn(e, t) {
  return vt(St, e, t);
}
function Mr(e) {
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
function zf(e) {
  return In = kt = 1, nc = He(St = e), Ve = 0, [];
}
function Jf(e) {
  return St = "", e;
}
function Qn(e) {
  return ec(Pn(Ve - 1, xr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qf(e) {
  for (; (ue = nt()) && ue < 33; )
    Ie();
  return Mr(e) > 2 || Mr(ue) > 3 ? "" : " ";
}
function Wf(e, t) {
  for (; --t && Ie() && !(ue < 48 || ue > 102 || ue > 57 && ue < 65 || ue > 70 && ue < 97); )
    ;
  return Pn(e, fn() + (t < 6 && nt() == 32 && Ie() == 32));
}
function xr(e) {
  for (; Ie(); )
    switch (ue) {
      case e:
        return Ve;
      case 34:
      case 39:
        e !== 34 && e !== 39 && xr(ue);
        break;
      case 40:
        e === 41 && xr(e);
        break;
      case 92:
        Ie();
        break;
    }
  return Ve;
}
function e0(e, t) {
  for (; Ie() && e + ue !== 57; )
    if (e + ue === 84 && nt() === 47)
      break;
  return "/*" + Pn(t, Ve - 1) + "*" + vo(e === 47 ? e : Ie());
}
function t0(e) {
  for (; !Mr(nt()); )
    Ie();
  return Pn(e, Ve);
}
function n0(e) {
  return Jf(mn("", null, null, null, [""], e = zf(e), 0, [0], e));
}
function mn(e, t, n, r, o, s, a, c, l) {
  for (var d = 0, u = 0, h = a, p = 0, f = 0, k = 0, g = 1, C = 1, v = 1, w = 0, y = "", x = o, N = s, L = r, M = y; C; )
    switch (k = w, w = Ie()) {
      case 40:
        if (k != 108 && pe(M, h - 1) == 58) {
          pn(M += Q(Qn(w), "&", "&\f"), "&\f", Wa(d ? c[d - 1] : 0)) != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        M += Qn(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        M += Qf(k);
        break;
      case 92:
        M += Wf(fn() - 1, 7);
        continue;
      case 47:
        switch (nt()) {
          case 42:
          case 47:
            At(r0(e0(Ie(), fn()), t, n, l), l);
            break;
          default:
            M += "/";
        }
        break;
      case 123 * g:
        c[d++] = He(M) * v;
      case 125 * g:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            C = 0;
          case 59 + u:
            v == -1 && (M = Q(M, /\f/g, "")), f > 0 && He(M) - h && At(f > 32 ? Gi(M + ";", r, n, h - 1, l) : Gi(Q(M, " ", "") + ";", r, n, h - 2, l), l);
            break;
          case 59:
            M += ";";
          default:
            if (At(L = Ui(M, t, n, d, u, o, c, y, x = [], N = [], h, s), s), w === 123)
              if (u === 0)
                mn(M, t, L, L, x, s, h, c, N);
              else
                switch (p === 99 && pe(M, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mn(e, L, L, r && At(Ui(e, L, L, 0, 0, o, c, y, o, x = [], h, N), N), o, N, h, c, r ? x : N);
                    break;
                  default:
                    mn(M, L, L, L, [""], N, 0, c, N);
                }
        }
        d = u = f = 0, g = v = 1, y = M = "", h = a;
        break;
      case 58:
        h = 1 + He(M), f = k;
      default:
        if (g < 1) {
          if (w == 123)
            --g;
          else if (w == 125 && g++ == 0 && qf() == 125)
            continue;
        }
        switch (M += vo(w), w * g) {
          case 38:
            v = u > 0 ? 1 : (M += "\f", -1);
            break;
          case 44:
            c[d++] = (He(M) - 1) * v, v = 1;
            break;
          case 64:
            nt() === 45 && (M += Qn(Ie())), p = nt(), u = h = He(y = M += t0(fn())), w++;
            break;
          case 45:
            k === 45 && He(M) == 2 && (g = 0);
        }
    }
  return s;
}
function Ui(e, t, n, r, o, s, a, c, l, d, u, h) {
  for (var p = o - 1, f = o === 0 ? s : [""], k = tc(f), g = 0, C = 0, v = 0; g < r; ++g)
    for (var w = 0, y = vt(e, p + 1, p = Wa(C = a[g])), x = e; w < k; ++w)
      (x = ec(C > 0 ? f[w] + " " + y : Q(y, /&\f/g, f[w]))) && (l[v++] = x);
  return Hn(e, t, n, o === 0 ? An : c, l, d, u, h);
}
function r0(e, t, n, r) {
  return Hn(e, t, n, Ja, vo(Xf()), vt(e, 2, -2), 0, r);
}
function Gi(e, t, n, r, o) {
  return Hn(e, t, n, go, vt(e, 0, r), vt(e, r + 1, -1), r, o);
}
function rc(e, t, n) {
  switch (Gf(e, t)) {
    case 5103:
      return ee + "print-" + e + e;
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
      return ee + e + e;
    case 4789:
      return Dt + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + e + Dt + e + ne + e + e;
    case 5936:
      switch (pe(e, t + 11)) {
        case 114:
          return ee + e + ne + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ee + e + ne + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ee + e + ne + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ee + e + ne + e + e;
    case 6165:
      return ee + e + ne + "flex-" + e + e;
    case 5187:
      return ee + e + Q(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + ne + "flex-$1$2") + e;
    case 5443:
      return ee + e + ne + "flex-item-" + Q(e, /flex-|-self/g, "") + (Be(e, /flex-|baseline/) ? "" : ne + "grid-row-" + Q(e, /flex-|-self/g, "")) + e;
    case 4675:
      return ee + e + ne + "flex-line-pack" + Q(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return ee + e + ne + Q(e, "shrink", "negative") + e;
    case 5292:
      return ee + e + ne + Q(e, "basis", "preferred-size") + e;
    case 6060:
      return ee + "box-" + Q(e, "-grow", "") + ee + e + ne + Q(e, "grow", "positive") + e;
    case 4554:
      return ee + Q(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
    case 6187:
      return Q(Q(Q(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Q(e, /(image-set\([^]*)/, ee + "$1$`$1");
    case 4968:
      return Q(Q(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + ne + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + e + e;
    case 4200:
      if (!Be(e, /flex-|baseline/)) return ne + "grid-column-align" + vt(e, t) + e;
      break;
    case 2592:
    case 3360:
      return ne + Q(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Be(r.props, /grid-\w+-end/);
      }) ? ~pn(e + (n = n[t].value), "span", 0) ? e : ne + Q(e, "-start", "") + e + ne + "grid-row-span:" + (~pn(n, "span", 0) ? Be(n, /\d+/) : +Be(n, /\d+/) - +Be(e, /\d+/)) + ";" : ne + Q(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Be(r.props, /grid-\w+-start/);
      }) ? e : ne + Q(Q(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Q(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
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
      if (He(e) - 1 - t > 6)
        switch (pe(e, t + 1)) {
          case 109:
            if (pe(e, t + 4) !== 45)
              break;
          case 102:
            return Q(e, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + Dt + (pe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~pn(e, "stretch", 0) ? rc(Q(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return Q(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, s, a, c, l, d) {
        return ne + o + ":" + s + d + (a ? ne + o + "-span:" + (c ? l : +l - +s) + d : "") + e;
      });
    case 4949:
      if (pe(e, t + 6) === 121)
        return Q(e, ":", ":" + ee) + e;
      break;
    case 6444:
      switch (pe(e, pe(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return Q(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (pe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + ne + "$2box$3") + e;
        case 100:
          return Q(e, ":", ":" + ne) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Q(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function xn(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function o0(e, t, n, r) {
  switch (e.type) {
    case Uf:
      if (e.children.length) break;
    case _f:
    case go:
      return e.return = e.return || e.value;
    case Ja:
      return "";
    case Qa:
      return e.return = e.value + "{" + xn(e.children, r) + "}";
    case An:
      if (!He(e.value = e.props.join(","))) return "";
  }
  return He(n = xn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function i0(e) {
  var t = tc(e);
  return function(n, r, o, s) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, s) || "";
    return a;
  };
}
function s0(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function a0(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case go:
        e.return = rc(e.value, e.length, n);
        return;
      case Qa:
        return xn([_e(e, { value: Q(e.value, "@", "@" + ee) })], r);
      case An:
        if (e.length)
          return Kf(n = e.props, function(o) {
            switch (Be(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                st(_e(e, { props: [Q(o, /:(read-\w+)/, ":" + Dt + "$1")] })), st(_e(e, { props: [o] })), Cr(e, { props: _i(n, r) });
                break;
              case "::placeholder":
                st(_e(e, { props: [Q(o, /:(plac\w+)/, ":" + ee + "input-$1")] })), st(_e(e, { props: [Q(o, /:(plac\w+)/, ":" + Dt + "$1")] })), st(_e(e, { props: [Q(o, /:(plac\w+)/, ne + "input-$1")] })), st(_e(e, { props: [o] })), Cr(e, { props: _i(n, r) });
                break;
            }
            return "";
          });
    }
}
var c0 = {
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
}, ot = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", oc = "active", ic = "data-styled-version", Rn = "6.1.18", ko = `/*!sc*/
`, bn = typeof window < "u" && typeof document < "u", l0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ki = /invalid hook call/i, rn = /* @__PURE__ */ new Set(), d0 = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var s = !0;
      console.error = function(a) {
        for (var c = [], l = 1; l < arguments.length; l++) c[l - 1] = arguments[l];
        Ki.test(a) ? (s = !1, rn.delete(r)) : o.apply(void 0, gt([a], c, !1));
      }, q(), s && !rn.has(r) && (console.warn(r), rn.add(r));
    } catch (a) {
      Ki.test(a.message) && rn.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Dn = Object.freeze([]), Lt = Object.freeze({});
function u0(e, t, n) {
  return n === void 0 && (n = Lt), e.theme !== n.theme && e.theme || t || n.theme;
}
var br = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), h0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, p0 = /(^-|-$)/g;
function Xi(e) {
  return e.replace(h0, "-").replace(p0, "");
}
var f0 = /(a)(d)/gi, on = 52, qi = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Nr(e) {
  var t, n = "";
  for (t = Math.abs(e); t > on; t = t / on | 0) n = qi(t % on) + n;
  return (qi(t % on) + n).replace(f0, "$1-$2");
}
var Wn, sc = 5381, ze = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, ac = function(e) {
  return ze(sc, e);
};
function m0(e) {
  return Nr(ac(e) >>> 0);
}
function cc(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function er(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var lc = typeof Symbol == "function" && Symbol.for, dc = lc ? Symbol.for("react.memo") : 60115, g0 = lc ? Symbol.for("react.forward_ref") : 60112, v0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, k0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, uc = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, L0 = ((Wn = {})[g0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Wn[dc] = uc, Wn);
function zi(e) {
  return ("type" in (t = e) && t.type.$$typeof) === dc ? uc : "$$typeof" in e ? L0[e.$$typeof] : v0;
  var t;
}
var w0 = Object.defineProperty, y0 = Object.getOwnPropertyNames, Ji = Object.getOwnPropertySymbols, C0 = Object.getOwnPropertyDescriptor, M0 = Object.getPrototypeOf, Qi = Object.prototype;
function hc(e, t, n) {
  if (typeof t != "string") {
    if (Qi) {
      var r = M0(t);
      r && r !== Qi && hc(e, r, n);
    }
    var o = y0(t);
    Ji && (o = o.concat(Ji(t)));
    for (var s = zi(e), a = zi(t), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!(l in k0 || n && n[l] || a && l in a || s && l in s)) {
        var d = C0(t, l);
        try {
          w0(e, l, d);
        } catch {
        }
      }
    }
  }
  return e;
}
function wt(e) {
  return typeof e == "function";
}
function Lo(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function We(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Wi(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function yt(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Vr(e, t, n) {
  if (n === void 0 && (n = !1), !n && !yt(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Vr(e[r], t[r]);
  else if (yt(t)) for (var r in t) e[r] = Vr(e[r], t[r]);
  return e;
}
function wo(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var x0 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function b0() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, s = e.length; o < s; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function jt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(b0.apply(void 0, gt([x0[e]], t, !1)).trim());
}
var N0 = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, s = o; t >= s; ) if ((s <<= 1) < 0) throw jt(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(r), this.length = s;
      for (var a = o; a < s; a++) this.groupSizes[a] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), l = (a = 0, n.length); a < l; a++) this.tag.insertRule(c, n[a]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var s = r; s < o; s++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), s = o + r, a = o; a < s; a++) n += "".concat(this.tag.getRule(a)).concat(ko);
    return n;
  }, e;
}(), V0 = 1 << 30, gn = /* @__PURE__ */ new Map(), Nn = /* @__PURE__ */ new Map(), vn = 1, sn = function(e) {
  if (gn.has(e)) return gn.get(e);
  for (; Nn.has(vn); ) vn++;
  var t = vn++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > V0)) throw jt(16, "".concat(t));
  return gn.set(e, t), Nn.set(t, e), t;
}, S0 = function(e, t) {
  vn = t + 1, gn.set(e, t), Nn.set(t, e);
}, j0 = "style[".concat(ot, "][").concat(ic, '="').concat(Rn, '"]'), $0 = new RegExp("^".concat(ot, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), T0 = function(e, t, n) {
  for (var r, o = n.split(","), s = 0, a = o.length; s < a; s++) (r = o[s]) && e.registerName(t, r);
}, A0 = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(ko), o = [], s = 0, a = r.length; s < a; s++) {
    var c = r[s].trim();
    if (c) {
      var l = c.match($0);
      if (l) {
        var d = 0 | parseInt(l[1], 10), u = l[2];
        d !== 0 && (S0(u, d), T0(e, u, l[3]), e.getTag().insertRules(d, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, es = function(e) {
  for (var t = document.querySelectorAll(j0), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(ot) !== oc && (A0(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function I0() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var pc = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var l = Array.from(c.querySelectorAll("style[".concat(ot, "]")));
    return l[l.length - 1];
  }(n), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ot, oc), r.setAttribute(ic, Rn);
  var a = I0();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, s), r;
}, H0 = function() {
  function e(t) {
    this.element = pc(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, s = r.length; o < s; o++) {
        var a = r[o];
        if (a.ownerNode === n) return a;
      }
      throw jt(17);
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
}(), P0 = function() {
  function e(t) {
    this.element = pc(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), R0 = function() {
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
}(), ts = bn, D0 = { isServer: !bn, useCSSOMInjection: !l0 }, fc = function() {
  function e(t, n, r) {
    t === void 0 && (t = Lt), n === void 0 && (n = {});
    var o = this;
    this.options = Ce(Ce({}, D0), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && bn && ts && (ts = !1, es(this)), wo(this, function() {
      return function(s) {
        for (var a = s.getTag(), c = a.length, l = "", d = function(h) {
          var p = function(v) {
            return Nn.get(v);
          }(h);
          if (p === void 0) return "continue";
          var f = s.names.get(p), k = a.getGroup(h);
          if (f === void 0 || !f.size || k.length === 0) return "continue";
          var g = "".concat(ot, ".g").concat(h, '[id="').concat(p, '"]'), C = "";
          f !== void 0 && f.forEach(function(v) {
            v.length > 0 && (C += "".concat(v, ","));
          }), l += "".concat(k).concat(g, '{content:"').concat(C, '"}').concat(ko);
        }, u = 0; u < c; u++) d(u);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return sn(t);
  }, e.prototype.rehydrate = function() {
    !this.server && bn && es(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ce(Ce({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new R0(o) : r ? new H0(o) : new P0(o);
    }(this.options), new N0(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (sn(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(sn(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(sn(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), E0 = /&/g, B0 = /^\s*\/\/.*$/gm;
function mc(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = mc(n.children, t)), n;
  });
}
function F0(e) {
  var t, n, r, o = Lt, s = o.options, a = s === void 0 ? Lt : s, c = o.plugins, l = c === void 0 ? Dn : c, d = function(p, f, k) {
    return k.startsWith(n) && k.endsWith(n) && k.replaceAll(n, "").length > 0 ? ".".concat(t) : p;
  }, u = l.slice();
  u.push(function(p) {
    p.type === An && p.value.includes("&") && (p.props[0] = p.props[0].replace(E0, n).replace(r, d));
  }), a.prefix && u.push(a0), u.push(o0);
  var h = function(p, f, k, g) {
    f === void 0 && (f = ""), k === void 0 && (k = ""), g === void 0 && (g = "&"), t = g, n = f, r = new RegExp("\\".concat(n, "\\b"), "g");
    var C = p.replace(B0, ""), v = n0(k || f ? "".concat(k, " ").concat(f, " { ").concat(C, " }") : C);
    a.namespace && (v = mc(v, a.namespace));
    var w = [];
    return xn(v, i0(u.concat(s0(function(y) {
      return w.push(y);
    })))), w;
  };
  return h.hash = l.length ? l.reduce(function(p, f) {
    return f.name || jt(15), ze(p, f.name);
  }, sc).toString() : "", h;
}
var O0 = new fc(), Sr = F0(), gc = De.createContext({ shouldForwardProp: void 0, styleSheet: O0, stylis: Sr });
gc.Consumer;
De.createContext(void 0);
function ns() {
  return ge(gc);
}
var rs = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Sr);
      var a = r.name + s.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, s(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, wo(this, function() {
      throw jt(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Sr), this.name + t.hash;
  }, e;
}(), Z0 = function(e) {
  return e >= "A" && e <= "Z";
};
function os(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Z0(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var vc = function(e) {
  return e == null || e === !1 || e === "";
}, kc = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var s = e[o];
    e.hasOwnProperty(o) && !vc(s) && (Array.isArray(s) && s.isCss || wt(s) ? r.push("".concat(os(o), ":"), s, ";") : yt(s) ? r.push.apply(r, gt(gt(["".concat(o, " {")], kc(s), !1), ["}"], !1)) : r.push("".concat(os(o), ": ").concat((t = o, (n = s) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in c0 || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function rt(e, t, n, r) {
  if (vc(e)) return [];
  if (Lo(e)) return [".".concat(e.styledComponentId)];
  if (wt(e)) {
    if (!wt(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof rs || yt(o) || o === null || console.error("".concat(cc(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), rt(o, t, n, r);
  }
  var s;
  return e instanceof rs ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : yt(e) ? kc(e) : Array.isArray(e) ? Array.prototype.concat.apply(Dn, e.map(function(a) {
    return rt(a, t, n, r);
  })) : [e.toString()];
}
function Y0(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (wt(n) && !Lo(n)) return !1;
  }
  return !0;
}
var _0 = ac(Rn), U0 = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Y0(t), this.componentId = n, this.baseHash = ze(_0, n), this.baseStyle = r, fc.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = We(o, this.staticRulesId);
    else {
      var s = Wi(rt(this.rules, t, n, r)), a = Nr(ze(this.baseHash, s) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var c = r(s, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, c);
      }
      o = We(o, a), this.staticRulesId = a;
    }
    else {
      for (var l = ze(this.baseHash, r.hash), d = "", u = 0; u < this.rules.length; u++) {
        var h = this.rules[u];
        if (typeof h == "string") d += h, process.env.NODE_ENV !== "production" && (l = ze(l, h));
        else if (h) {
          var p = Wi(rt(h, t, n, r));
          l = ze(l, p + u), d += p;
        }
      }
      if (d) {
        var f = Nr(l >>> 0);
        n.hasNameForId(this.componentId, f) || n.insertRules(this.componentId, f, r(d, ".".concat(f), void 0, this.componentId)), o = We(o, f);
      }
    }
    return o;
  }, e;
}(), Lc = De.createContext(void 0);
Lc.Consumer;
var tr = {}, is = /* @__PURE__ */ new Set();
function G0(e, t, n) {
  var r = Lo(e), o = e, s = !er(e), a = t.attrs, c = a === void 0 ? Dn : a, l = t.componentId, d = l === void 0 ? function(x, N) {
    var L = typeof x != "string" ? "sc" : Xi(x);
    tr[L] = (tr[L] || 0) + 1;
    var M = "".concat(L, "-").concat(m0(Rn + L + tr[L]));
    return N ? "".concat(N, "-").concat(M) : M;
  }(t.displayName, t.parentComponentId) : l, u = t.displayName, h = u === void 0 ? function(x) {
    return er(x) ? "styled.".concat(x) : "Styled(".concat(cc(x), ")");
  }(e) : u, p = t.displayName && t.componentId ? "".concat(Xi(t.displayName), "-").concat(t.componentId) : t.componentId || d, f = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, k = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var C = t.shouldForwardProp;
      k = function(x, N) {
        return g(x, N) && C(x, N);
      };
    } else k = g;
  }
  var v = new U0(n, p, r ? o.componentStyle : void 0);
  function w(x, N) {
    return function(L, M, b) {
      var j = L.attrs, S = L.componentStyle, D = L.defaultProps, V = L.foldedComponentIds, A = L.styledComponentId, T = L.target, H = De.useContext(Lc), F = ns(), E = L.shouldForwardProp || F.shouldForwardProp;
      process.env.NODE_ENV !== "production" && yo(A);
      var K = u0(M, H, D) || Lt, $ = function(Z, J, re) {
        for (var te, le = Ce(Ce({}, J), { className: void 0, theme: re }), Se = 0; Se < Z.length; Se += 1) {
          var we = wt(te = Z[Se]) ? te(le) : te;
          for (var Me in we) le[Me] = Me === "className" ? We(le[Me], we[Me]) : Me === "style" ? Ce(Ce({}, le[Me]), we[Me]) : we[Me];
        }
        return J.className && (le.className = We(le.className, J.className)), le;
      }(j, M, K), P = $.as || T, I = {};
      for (var R in $) $[R] === void 0 || R[0] === "$" || R === "as" || R === "theme" && $.theme === K || (R === "forwardedAs" ? I.as = $.forwardedAs : E && !E(R, P) || (I[R] = $[R], E || process.env.NODE_ENV !== "development" || Yf(R) || is.has(R) || !br.has(P) || (is.add(R), console.warn('styled-components: it looks like an unknown prop "'.concat(R, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var _ = function(Z, J) {
        var re = ns(), te = Z.generateAndInjectStyles(J, re.styleSheet, re.stylis);
        return process.env.NODE_ENV !== "production" && yo(te), te;
      }(S, $);
      process.env.NODE_ENV !== "production" && L.warnTooManyClasses && L.warnTooManyClasses(_);
      var G = We(V, A);
      return _ && (G += " " + _), $.className && (G += " " + $.className), I[er(P) && !br.has(P) ? "class" : "className"] = G, b && (I.ref = b), ds(P, I);
    }(y, x, N);
  }
  w.displayName = h;
  var y = De.forwardRef(w);
  return y.attrs = f, y.componentStyle = v, y.displayName = h, y.shouldForwardProp = k, y.foldedComponentIds = r ? We(o.foldedComponentIds, o.styledComponentId) : "", y.styledComponentId = p, y.target = r ? o.target : e, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = r ? function(N) {
      for (var L = [], M = 1; M < arguments.length; M++) L[M - 1] = arguments[M];
      for (var b = 0, j = L; b < j.length; b++) Vr(N, j[b], !0);
      return N;
    }({}, o.defaultProps, x) : x;
  } }), process.env.NODE_ENV !== "production" && (d0(h, p), y.warnTooManyClasses = /* @__PURE__ */ function(x, N) {
    var L = {}, M = !1;
    return function(b) {
      if (!M && (L[b] = !0, Object.keys(L).length >= 200)) {
        var j = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(x).concat(j, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), M = !0, L = {};
      }
    };
  }(h, p)), wo(y, function() {
    return ".".concat(y.styledComponentId);
  }), s && hc(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), y;
}
function ss(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var as = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function K0(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (wt(e) || yt(e)) return as(rt(ss(Dn, gt([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? rt(r) : as(rt(ss(r, t)));
}
function jr(e, t, n) {
  if (n === void 0 && (n = Lt), !t) throw jt(1, t);
  var r = function(o) {
    for (var s = [], a = 1; a < arguments.length; a++) s[a - 1] = arguments[a];
    return e(t, n, K0.apply(void 0, gt([o], s, !1)));
  };
  return r.attrs = function(o) {
    return jr(e, t, Ce(Ce({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return jr(e, t, Ce(Ce({}, n), o));
  }, r;
}
var wc = function(e) {
  return jr(G0, e);
}, yc = wc;
br.forEach(function(e) {
  yc[e] = wc(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var an = "__sc-".concat(ot, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[an] || (window[an] = 0), window[an] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[an] += 1);
const M3 = ({
  type: e = "info",
  text: t = "这是一条全局提示",
  simple: n = !1,
  style: r,
  className: o = ""
}) => /* @__PURE__ */ m(
  X0,
  {
    className: `StyleToastContainer ${o} ${n ? "simple" : ""}`,
    style: {
      ...r
    },
    children: [
      !n && /* @__PURE__ */ m(he, { children: [
        e === "info" && /* @__PURE__ */ i(X, { name: "info-fill", size: 20, color: "var(--color-primary-6)" }),
        e === "error" && /* @__PURE__ */ i(X, { name: "attention-fill", size: 20, color: "var(--color-red-6)" }),
        e === "fail" && /* @__PURE__ */ i(X, { name: "error-fill", size: 20, color: "var(--color-red-6)" }),
        e === "warn" && /* @__PURE__ */ i(X, { name: "attention-fill", size: 20, color: "var(--color-orange-6)" }),
        e === "success" && /* @__PURE__ */ i(X, { name: "check-fill", size: 20, color: "var(--color-green-6)" })
      ] }),
      t
    ]
  }
), X0 = yc.div`
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
`, x3 = ({
  current: e = 1,
  pageSize: t = 1,
  total: n = 1,
  showTotal: r = !1,
  showInput: o = !1,
  onChange: s,
  style: a,
  className: c = ""
}) => {
  var x, N;
  const [l, d] = B(e);
  Y(() => {
    d(e);
  }, [e]);
  const { pageData: u, curStart: h, isStartPreOut: p, isStartNextOut: f } = U(() => {
    const L = t;
    let M = 2;
    l > L + 1 && (M = Math.max(2, l - Math.floor(L / 2))), M + L > n && (M = Math.max(2, n - L + 1));
    const b = Array.from({ length: n }).map((D, V) => ({ id: V + 1 })).filter((D) => D.id > 1 && D.id < n).filter((D) => D.id >= M && D.id < M + L), j = M <= L * 2, S = n - M < L * 2;
    return { pageData: b, curStart: M, isStartPreOut: j, isStartNextOut: S };
  }, [n, t, l]), k = O((L) => {
    L >= 1 && L <= n && L !== l && (d(L), s == null || s(L));
  }, [l, n, s]), g = O(() => {
    l > 1 && k(l - 1);
  }, [l, k]), C = O(() => {
    l < n && k(l + 1);
  }, [l, n, k]), v = O((L) => {
    if (L === "prev" && !p) {
      const M = Math.max(1, h - t);
      k(M);
    } else if (L === "next" && !f) {
      const M = Math.min(n, h + t);
      k(M);
    }
  }, [h, t, p, f, n, k]), w = O((L) => {
    const M = L;
    !isNaN(M) && M >= 1 && M <= n && (d(M), k(M));
  }, [n, k]), y = O((L) => {
    L.stopPropagation();
  }, []);
  return /* @__PURE__ */ m("div", { className: `land-pagination ${c}`, style: a, children: [
    r && /* @__PURE__ */ m("div", { className: "land-pagination-total", children: [
      "共",
      n,
      "页"
    ] }),
    /* @__PURE__ */ i(
      "div",
      {
        onClick: (L) => {
          y(L), g();
        },
        className: `land-pagination-arrow-prev ${l === 1 ? "disabled" : ""}`,
        children: /* @__PURE__ */ i(X, { name: "arrow", className: "land-pagination-arrow-prev-icon", strokeWidth: 4 })
      }
    ),
    /* @__PURE__ */ m("div", { className: "land-pagination-page", children: [
      /* @__PURE__ */ i(
        "div",
        {
          className: `land-pagination-num-item ${l === 1 ? "active" : ""}`,
          onClick: (L) => {
            y(L), k(1);
          },
          children: "1"
        }
      ),
      ((x = u[0]) == null ? void 0 : x.id) > 2 && /* @__PURE__ */ m(
        "div",
        {
          onClick: (L) => {
            y(L), v("prev");
          },
          className: "land-pagination-arrow-double-prev",
          children: [
            /* @__PURE__ */ i(X, { name: "more", size: 16 }),
            /* @__PURE__ */ i(X, { name: "arrow-double", className: "land-pagination-arrow-double-prev-icon", size: 24 })
          ]
        }
      ),
      u == null ? void 0 : u.map((L) => /* @__PURE__ */ i(
        "div",
        {
          className: `land-pagination-num-item ${l === L.id ? "active" : ""}`,
          onClick: (M) => {
            y(M), k(L.id);
          },
          children: L.id
        },
        L.id
      )),
      ((N = u[(u == null ? void 0 : u.length) - 1]) == null ? void 0 : N.id) < n - 1 && /* @__PURE__ */ m(
        "div",
        {
          onClick: (L) => {
            y(L), v("next");
          },
          className: "land-pagination-arrow-double-next",
          children: [
            /* @__PURE__ */ i(X, { name: "more", size: 16 }),
            /* @__PURE__ */ i(X, { name: "arrow-double", className: "land-pagination-arrow-double-next-icon", size: 24 })
          ]
        }
      ),
      /* @__PURE__ */ i(
        "div",
        {
          className: `land-pagination-num-item ${l === n ? "active" : ""}`,
          onClick: (L) => {
            y(L), k(n);
          },
          children: n
        }
      )
    ] }),
    /* @__PURE__ */ i(
      "div",
      {
        onClick: (L) => {
          y(L), C();
        },
        className: `land-pagination-arrow-next ${l === n ? "disabled" : ""}`,
        children: /* @__PURE__ */ i(X, { name: "arrow", className: "land-pagination-arrow-next-icon", strokeWidth: 4 })
      }
    ),
    o && /* @__PURE__ */ m("div", { className: "land-pagination-input", children: [
      "跳转至",
      /* @__PURE__ */ i(
        je,
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
}, b3 = ({
  show: e,
  content: t,
  theme: n = "light",
  placement: r = "top",
  hideArrow: o = !1,
  cancelButtonProps: s,
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
      /* @__PURE__ */ i("div", { className: "land-popConfirm-content", children: t }),
      /* @__PURE__ */ m("div", { className: "land-popConfirm-btn", children: [
        /* @__PURE__ */ i(ae, { type: "fill", size: "small", onClick: d, ...s, children: c }),
        /* @__PURE__ */ i(ae, { type: "background", size: "small", onClick: u, ...a, children: l })
      ] }),
      !o && /* @__PURE__ */ i(
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
), N3 = ({
  value: e = 0.6,
  status: t = "default",
  type: n = "line",
  hideLabel: r = !1,
  strokeWidth: o = 8,
  style: s,
  className: a = ""
}) => {
  const c = Math.max(0, Math.min(1, e)), l = () => `scaleX(${c})`, d = () => {
    if (t === "default") return null;
    const h = {
      size: n === "circle" ? 20 : 16
    };
    switch (t) {
      case "success":
        return /* @__PURE__ */ i(X, { name: "check-fill", ...h, color: "var(--color-green-6)" });
      case "fail":
        return /* @__PURE__ */ i(X, { name: "error-fill", ...h, color: "var(--color-red-6)" });
      default:
        return null;
    }
  }, u = () => {
    const p = (80 - o) / 2, f = 2 * Math.PI * p, k = f, g = f - c * f;
    return /* @__PURE__ */ m("svg", { width: 80, height: 80, className: "land-progress-circle-svg", children: [
      /* @__PURE__ */ i(
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
      /* @__PURE__ */ i(
        "circle",
        {
          cx: 80 / 2,
          cy: 80 / 2,
          r: p,
          stroke: "var(--color-primary)",
          strokeWidth: o,
          fill: "none",
          strokeDasharray: k,
          strokeDashoffset: g,
          strokeLinecap: "round",
          transform: `rotate(-90 ${80 / 2} ${80 / 2})`,
          style: { transition: "stroke-dashoffset 0.3s ease" }
        }
      )
    ] });
  };
  return /* @__PURE__ */ i("div", { className: `land-progress ${n} ${a}`, style: s, children: /* @__PURE__ */ i("div", { className: "land-progress-content", children: n === "circle" ? /* @__PURE__ */ m("div", { className: "land-progress-circle-container", children: [
    u(),
    !r && t == "default" && /* @__PURE__ */ m("div", { className: "land-progress-circle-label", children: [
      Math.round(c * 100),
      "%"
    ] }),
    t !== "default" && /* @__PURE__ */ i("div", { className: "land-progress-status-icon", children: d() })
  ] }) : /* @__PURE__ */ m(he, { children: [
    !r && t == "default" && /* @__PURE__ */ m("div", { className: "land-progress-label", style: { left: `${e * 100}%` }, children: [
      Math.round(c * 100),
      "%"
    ] }),
    /* @__PURE__ */ i("div", { className: "land-progress-bar", children: /* @__PURE__ */ i(
      "div",
      {
        className: "land-progress-bar-finished",
        style: { transform: l() }
      }
    ) }),
    t !== "default" && /* @__PURE__ */ i("div", { className: "land-progress-status-icon", children: d() })
  ] }) }) });
}, q0 = ({
  label: e,
  tip: t,
  disabled: n,
  iconTip: r,
  style: o,
  className: s = "",
  onClick: a,
  checked: c,
  animated: l
}) => /* @__PURE__ */ m("div", { className: `land-radio-item ${t ? "hover-pop" : ""} ${n ? "disabled" : ""} ${s}`, style: o, children: [
  /* @__PURE__ */ i(Le, { content: t, theme: "dark", style: { maxWidth: "200px" } }),
  /* @__PURE__ */ m(
    "div",
    {
      onClick: a,
      className: "land-radio-label",
      children: [
        /* @__PURE__ */ i("div", { className: `land-radio-circle ${c ? "checked" : ""} ${l ? "animated" : "no-animation"}`, children: /* @__PURE__ */ i(X, { name: "check", size: 10, className: "land-radio-circle-icon" }) }),
        e
      ]
    }
  ),
  r && /* @__PURE__ */ m("div", { className: "land-radio-pop hover-pop", children: [
    /* @__PURE__ */ i(X, { name: "info-stroke", color: "var(--color-gray-rgba-9)", size: 12 }),
    /* @__PURE__ */ i(Le, { content: r, theme: "dark", style: { maxWidth: "200px" } })
  ] })
] }), V3 = ({
  checked: e,
  data: t = [],
  animated: n,
  onChange: r,
  style: o,
  className: s = ""
}) => /* @__PURE__ */ i("div", { className: `land-radio-group ${s}`, style: o, children: t == null ? void 0 : t.map(
  (a) => /* @__PURE__ */ i(
    q0,
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
) }), S3 = ({
  type: e = "empty",
  title: t,
  subTitle: n,
  titleLink: r,
  subTitleLink: o,
  button: s,
  onTiTleLinkClick: a,
  onSubTitleLinkClick: c,
  onButtonClick: l,
  buttonProps: d,
  emptyIcon: u,
  offlineIcon: h,
  className: p,
  style: f,
  titleLinkProps: k,
  subTitleLinkProps: g
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
          /* @__PURE__ */ i(
            "path",
            {
              d: "M43 30.5L36.5788 19.4923C36.2204 18.8778 35.5626 18.5 34.8513 18.5H13.1487C12.4374 18.5 11.7796 18.8778 11.4212 19.4923L5 30.5M43 30.5V40.5C43 41.6046 42.1046 42.5 41 42.5H7C5.89543 42.5 5 41.6046 5 40.5V30.5M43 30.5H5",
              stroke: "currentColor",
              "stroke-width": "3"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M24 12V6",
              stroke: "currentColor",
              "stroke-width": "3",
              strokeLinecap: "round"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M30.9995 12.7426L35.2422 8.5",
              stroke: "currentColor",
              "stroke-width": "3",
              strokeLinecap: "round"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M17.2426 12.7426L13 8.5",
              stroke: "currentColor",
              "stroke-width": "3",
              strokeLinecap: "round"
            }
          )
        ] }),
        /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ i("clipPath", { id: "clip0_1578_7158", children: /* @__PURE__ */ i("rect", { width: "48", height: "48", fill: "white" }) }) })
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
        /* @__PURE__ */ i(
          "path",
          {
            d: "M44 18.9653C37.2253 12.545 28.1189 10.0059 19.5 11.3481",
            stroke: "currentColor",
            "stroke-width": "4",
            strokeLinecap: "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M38 25.799C35.2866 23.0855 31.9815 21.3243 28.5 20.5154",
            stroke: "currentColor",
            "stroke-width": "4",
            strokeLinecap: "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M10 25.799C11.3276 24.4714 12.7969 23.3717 14.3591 22.5",
            stroke: "currentColor",
            "stroke-width": "4",
            strokeLinecap: "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M16 32.3138C17.4388 30.875 19.1686 29.9048 21 29.4031",
            stroke: "currentColor",
            "stroke-width": "4",
            strokeLinecap: "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M24 40C25.3807 40 26.5 38.8807 26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ i(
          "path",
          {
            d: "M40 40L8 8",
            stroke: "currentColor",
            "stroke-width": "4",
            strokeLinecap: "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ i(
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
    r && /* @__PURE__ */ m(he, { children: [
      "，",
      /* @__PURE__ */ i(
        Ut,
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
    /* @__PURE__ */ m(he, { children: [
      "，",
      /* @__PURE__ */ i(
        Ut,
        {
          className: "land-state-subTitle-link",
          onClick: c,
          ...g,
          children: o
        }
      )
    ] })
  ] }),
  s && /* @__PURE__ */ i(
    ae,
    {
      className: "land-state-button",
      onClick: l,
      ...d,
      children: s
    }
  )
] }), z0 = {
  linear: (e) => e,
  easeIn: (e) => e * e,
  easeOut: (e) => 1 - Math.pow(1 - e, 2),
  easeInOut: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
  bounce: (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  elastic: (e) => Math.pow(2, -10 * e) * Math.sin((e - 0.3 / 4) * (2 * Math.PI) / 0.3) + 1
}, j3 = ({
  value: e = 0,
  prefix: t,
  suffix: n,
  unit: r,
  trendIcon: o,
  animation: s = "none",
  animationConfig: a = {},
  precision: c = 0,
  style: l,
  className: d
}) => {
  const [u, h] = B(""), [p, f] = B(!1), [k, g] = B(!1), C = q(null), v = q(null), w = q(e), x = { ...{
    duration: 1e3,
    easing: "easeOut",
    delay: 0,
    loop: !1,
    loopInterval: 2e3
  }, ...a }, N = O((V) => c > 0 ? V.toFixed(c) : Math.floor(V).toString(), [c]), L = O(() => {
    C.current && (cancelAnimationFrame(C.current), C.current = null);
  }, []), M = O(() => {
    v.current && (clearTimeout(v.current), v.current = null);
  }, []), b = O((V, A) => {
    const F = x.duration / 1e3 * 60;
    let E = 0;
    const K = z0[x.easing], $ = () => {
      E++;
      const P = E / F, I = K(P), R = V + (A - V) * I;
      h(N(R)), E < F ? C.current = requestAnimationFrame($) : (h(N(A)), C.current = null);
    };
    C.current = requestAnimationFrame($);
  }, [x.duration, x.easing, N]);
  Y(() => {
    if (s === "none") {
      h(N(e));
      return;
    }
    return v.current = setTimeout(() => {
      switch (g(!0), s) {
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
      M(), L();
    };
  }, [s, e, x.delay, x.duration, b, N, M, L]), Y(() => {
    if (!x.loop || s === "none") return;
    const V = () => {
      v.current = setTimeout(() => {
        f(!1), setTimeout(() => f(!0), 100), V();
      }, x.loopInterval);
    };
    return p && V(), () => M();
  }, [x.loop, x.loopInterval, p, s, M]), Y(() => () => {
    L(), M();
  }, [L, M]), Y(() => {
    w.current !== e && s !== "none" && (f(!1), setTimeout(() => f(!0), 50)), w.current = e;
  }, [e, s]);
  const j = U(() => N(e).split("").map((A) => A === "." ? "." : A === "-" ? "-" : parseInt(A, 10)), [e, N]), S = {
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
  }, D = () => s === "bounce" ? S.bounce : s === "fade" ? S.fade : s === "slide" ? S.slide : s === "scale" ? S.scale : s === "flip" ? S.flip : S.fade;
  return /* @__PURE__ */ m("div", { className: `land-statistic ${d || ""}`, style: l, children: [
    t && /* @__PURE__ */ i("div", { className: "land-statistic-prefix", children: t }),
    /* @__PURE__ */ m("div", { className: "land-statistic-value", children: [
      /* @__PURE__ */ i(S4, { mode: "wait", children: s === "random" ? /* @__PURE__ */ i("div", { className: "flex items-center", children: j.map((V, A) => /* @__PURE__ */ i(
        "div",
        {
          className: "land-statistic-random",
          style: { height: "45px" },
          children: /* @__PURE__ */ i(
            me.div,
            {
              animate: { y: p ? -Number(V) * 45 : 0 },
              transition: {
                duration: 1.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              },
              className: "land-statistic-random-list",
              children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((T) => /* @__PURE__ */ i("div", { children: T }, T))
            }
          )
        },
        `digit-${A}-${V}`
      )) }, "random") : s !== "none" && (s === "increase" || s === "decrease") ? /* @__PURE__ */ i(
        me.div,
        {
          layout: !0,
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.3, ease: "easeOut" },
          children: u
        },
        "number-animation"
      ) : s !== "none" ? /* @__PURE__ */ i(
        me.div,
        {
          initial: D().initial,
          animate: p ? D().animate : D().initial,
          exit: D().initial,
          children: u
        },
        `${s}-${e}`
      ) : /* @__PURE__ */ i(
        me.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.3 },
          children: u
        },
        "static"
      ) }),
      r && /* @__PURE__ */ i(
        me.div,
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
      me.div,
      {
        className: "land-statistic-trend-icon",
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.3, delay: 0.2 },
        children: [
          o === "up" && /* @__PURE__ */ i(
            X,
            {
              name: "increase",
              strokeWidth: 0,
              color: "var(--color-success)"
            }
          ),
          o === "down" && /* @__PURE__ */ i(
            X,
            {
              name: "increase",
              style: { transform: "rotate(180deg)" },
              strokeWidth: 0,
              color: "var(--color-error)"
            }
          ),
          o === "default" && /* @__PURE__ */ i(
            X,
            {
              name: "increase",
              strokeWidth: 0,
              color: "var(--color-text-secondary)"
            }
          )
        ]
      }
    ),
    n && /* @__PURE__ */ i(
      me.div,
      {
        className: "land-statistic-suffix",
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.3, delay: 0.1 },
        children: n
      }
    )
  ] });
}, $3 = ({}) => /* @__PURE__ */ i("div", { children: "Swiper" }), T3 = ({
  children: e,
  value: t,
  min: n,
  max: r,
  step: o,
  range: s,
  useDivider: a,
  prefix: c,
  suffix: l,
  showTooltip: d,
  tooltipPlacement: u,
  tooltipFormatter: h,
  height: p,
  thumbSize: f,
  defaultBg: k,
  activeBg: g,
  style: C,
  className: v,
  onChange: w,
  onStart: y,
  onEnd: x
}) => /* @__PURE__ */ i("div", { className: "land-slider", children: /* @__PURE__ */ i("div", { className: "land-slider-track" }) }), Cc = De.memo(({ item: e, index: t, isActive: n, isFinished: r, onClick: o, direction: s }) => {
  const a = O(() => {
    o == null || o(e);
  }, [o, e]), c = O((d) => {
    (d.key === "Enter" || d.key === " ") && (d.preventDefault(), o == null || o(e));
  }, [o, e]), l = U(() => r ? /* @__PURE__ */ i(X, { name: "check", size: 12 }) : t + 1, [r, t]);
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
        /* @__PURE__ */ i(
          "div",
          {
            className: "land-steps-num",
            "aria-label": r ? "已完成" : `步骤 ${t + 1}`,
            children: l
          }
        ),
        /* @__PURE__ */ m("div", { className: "land-steps-title", children: [
          e.title,
          e.desc && /* @__PURE__ */ i("div", { className: "land-steps-desc", children: e.desc })
        ] })
      ]
    }
  );
});
Cc.displayName = "StepsItem";
const A3 = ({
  data: e = [],
  current: t,
  finished: n = [],
  onClick: r,
  useDivider: o = !0,
  dividerWidth: s = "32px",
  direction: a = "horizontal",
  style: c,
  className: l,
  children: d,
  ...u
}) => {
  const h = U(() => t !== void 0 ? t : e.length > 0 ? e[0].key : void 0, [t, e]), p = U(() => Array.isArray(e) ? e.filter((w) => w && typeof w == "object" && w.key !== void 0) : [], [e]);
  if (p.length === 0)
    return d ? /* @__PURE__ */ i(he, { children: d }) : null;
  const k = U(() => h !== void 0 && p.some((w) => w.key === h), [h, p]) ? h : p[0].key, g = O((w) => w.finished !== void 0 ? w.finished : n.includes(w.key), [n]), C = U(() => ["land-steps", a === "vertical" ? "vertical" : "", l].filter(Boolean).join(" "), [a, l]), v = O(() => p.map((w, y) => {
    const x = k === w.key, N = g(w);
    return /* @__PURE__ */ m(Gt, { children: [
      o && y !== 0 && /* @__PURE__ */ i(
        Ae,
        {
          lineLength: s,
          style: a === "horizontal" ? { marginTop: "12px" } : { marginLeft: "8px" },
          direction: a === "vertical" ? "column" : "row"
        }
      ),
      /* @__PURE__ */ i(
        Cc,
        {
          item: w,
          index: y,
          isActive: x,
          isFinished: N,
          onClick: r,
          direction: a
        }
      )
    ] }, w.key);
  }), [p, k, g, o, s, a, r]);
  return /* @__PURE__ */ i(
    "div",
    {
      className: C,
      style: c,
      role: "list",
      "aria-label": "步骤导航",
      ...u,
      children: v()
    }
  );
}, I3 = ({
  checked: e,
  label: t,
  checkedLabel: n,
  icon: r,
  checkedIcon: o,
  tip: s,
  iconTip: a,
  tipProps: c,
  iconTipProps: l,
  onChange: d,
  dark: u,
  disabled: h,
  style: p,
  className: f = ""
}) => {
  const [k, g] = B(e);
  return Y(() => g(e), [e]), /* @__PURE__ */ m(
    "div",
    {
      className: `land-switch ${s ? "hover-pop" : ""} ${h ? "disabled" : ""}`,
      children: [
        /* @__PURE__ */ i(Le, { content: s, theme: "dark", ...c }),
        /* @__PURE__ */ m(
          "div",
          {
            className: `land-switch-content ${u ? "dark" : ""} ${k ? "checked" : ""} ${f}`,
            style: p,
            onClick: (C) => {
              C.stopPropagation(), !h && (g(!k), d == null || d(k));
            },
            children: [
              /* @__PURE__ */ i("div", { className: "land-switch-bar", children: /* @__PURE__ */ i(me.div, { animate: { x: k ? 16 : 0 }, transition: { duration: 0.6, type: "spring" }, className: "land-switch-indicator", children: k ? o : r }) }),
              (t || n) && /* @__PURE__ */ i("div", { className: "land-switch-label", children: k ? n : t })
            ]
          }
        ),
        a && /* @__PURE__ */ m("div", { className: "land-switch-label-iconTip hover-pop", children: [
          /* @__PURE__ */ i(X, { name: "info-stroke", size: 16 }),
          /* @__PURE__ */ i(Le, { content: a, theme: "dark", ...l })
        ] })
      ]
    }
  );
};
function H3({
  width: e = "100%",
  checked: t,
  data: n,
  useDivider: r = !1,
  onChange: o,
  activeClassName: s = "",
  className: a = "",
  switchDisabled: c,
  style: l
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      className: `land-tabs  ${a}`,
      style: { width: e, ...l },
      children: n == null ? void 0 : n.map((d, u) => {
        var h;
        return /* @__PURE__ */ m(Gt, { children: [
          r && u !== 0 && /* @__PURE__ */ i(
            Ae,
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
               ${t === d.key ? `selected ${s}` : d.disabled || c ? "disabled" : ""}`,
              onClick: (p) => {
                p.stopPropagation(), !d.disabled && !c && (o == null || o(d.key, d));
              },
              children: [
                d.label,
                d.showIcon && /* @__PURE__ */ m("div", { className: "size-icon-16 fs-12 flex items-center color-icon-secondary hover-pop relative cursor-default", children: [
                  /* @__PURE__ */ i(X, { name: "info-stroke", size: 16 }),
                  /* @__PURE__ */ i(Le, { content: d.iconTip, theme: "dark" })
                ] })
              ]
            }
          )
        ] }, d.key);
      })
    }
  );
}
const J0 = ({
  children: e,
  icon: t,
  canDelete: n,
  onDelete: r,
  style: o,
  className: s,
  theme: a = "gray"
}) => /* @__PURE__ */ m(
  "div",
  {
    className: `land-tag land-tag--${a} ${s}`,
    style: o,
    children: [
      t,
      e,
      n && /* @__PURE__ */ i(
        X,
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
), P3 = ({
  tagData: e = [],
  placeholder: t = "按下回车以输入标签",
  width: n = "100%",
  maxLength: r = 5,
  highlightStr: o = [],
  highlightStyle: s = { background: "var(--color-primary-2)", color: "var(--color-primary-6)" },
  showClear: a = !0,
  onChange: c,
  onEnter: l,
  onFocus: d,
  onBlur: u,
  onClear: h,
  onDelete: p,
  tagStyle: f,
  tagClassName: k = "",
  className: g = "",
  style: C
}) => {
  const [v, w] = B(""), [y, x] = B(e), N = (L) => {
    y.length === r || !L || (x([...y, L]), w(""));
  };
  return Y(() => {
    const L = (M) => {
      M.code === "Backspace" && (y == null ? void 0 : y.length) > 0 && !v && (x((b) => b.slice(0, -1)), console.log(M.code));
    };
    return document.body.addEventListener("keydown", L), () => document.body.removeEventListener("keydown", L);
  }, [v, y]), /* @__PURE__ */ m(
    "div",
    {
      className: `land-tag-input ${a ? "widthClear" : ""} ${g}`,
      style: { width: typeof n == "number" ? `${n}px` : n, paddingLeft: (y == null ? void 0 : y.length) > 0 ? "4px" : "12px", ...C },
      children: [
        /* @__PURE__ */ m("div", { className: "land-tag-input-container", children: [
          y == null ? void 0 : y.map((L, M) => /* @__PURE__ */ i(J0, { className: `land-tag-input-tag ${k}`, canDelete: !0, onDelete: () => {
            x(y.filter((b) => b !== L)), p == null || p(L);
          }, style: f, children: L }, M)),
          /* @__PURE__ */ i(
            Tn,
            {
              type: "transparent",
              value: v,
              placeholder: t,
              onEnter: (L, M) => {
                N == null || N(L), l == null || l(y, M);
              },
              onBlur: (L) => {
                N == null || N(v), u == null || u(y, L);
              },
              onChange: (L, M) => {
                w(L), c == null || c(y, M);
              },
              className: "land-tag-input-input",
              onFocus: d,
              highlightStr: o,
              highlightStyle: s
            }
          )
        ] }),
        a && (y == null ? void 0 : y.length) > 0 && /* @__PURE__ */ i("div", { className: "land-input-clear-icon", onClick: () => {
          x([]), h == null || h();
        }, children: /* @__PURE__ */ i(X, { name: "error-fill" }) })
      ]
    }
  );
}, R3 = ({
  titleData: e,
  data: t = [],
  style: n,
  className: r = "",
  striped: o = !1,
  crossHighlight: s = !1,
  headFixed: a = !1,
  fixedColumns: c = 0
}) => {
  const [l, d] = B(null), [u, h] = B({ row: {}, col: {} }), p = q(null), f = q(null), k = (w, y) => {
    s && d({ row: w, col: y });
  }, g = () => {
    s && d(null);
  }, C = O(() => {
    if (s && l && p.current) {
      const w = p.current, y = w.querySelector("thead tr"), x = w.querySelectorAll("tbody tr");
      if (y && x.length > 0) {
        const N = y.getBoundingClientRect().height, L = x[0].getBoundingClientRect().height;
        let M = 0, b = 0;
        for (let j = 0; j < y.children.length; j++) {
          const D = y.children[j].getBoundingClientRect().width;
          if (j === l.col) {
            b = D;
            break;
          }
          M += D;
        }
        h({
          row: {
            top: `${N + l.row * L}px`,
            height: `${L}px`
          },
          col: {
            left: `${M}px`,
            width: `${b}px`
          }
        });
      }
    }
  }, [s, l]), v = O(() => {
    if (c > 0 && p.current) {
      const w = p.current, y = w.querySelector("thead tr");
      if (y) {
        const x = {};
        let N = 0;
        for (let M = 0; M < Math.min(c, y.children.length); M++) {
          const j = y.children[M].getBoundingClientRect().width;
          x[M] = {
            left: `${N}px`
          }, N += j;
        }
        const L = w.parentElement;
        L && Object.entries(x).forEach(([M, b]) => {
          L.style.setProperty(`--fixed-col-${M}-left`, b.left);
        });
      }
    }
  }, [c]);
  return Y(() => {
    v();
  }, [v]), Y(() => {
    c > 0 && requestAnimationFrame(() => {
      v();
    });
  }, [c, v]), Y(() => {
    C();
  }, [C]), Y(() => {
    if ((s || c > 0) && p.current)
      return f.current = new ResizeObserver(() => {
        l && C(), c > 0 && v();
      }), f.current.observe(p.current), () => {
        f.current && f.current.disconnect();
      };
  }, [s, c, l, C, v]), /* @__PURE__ */ m("div", { className: `land-table-wrapper ${s ? "land-table-wrapper--cross-highlight" : ""} ${a ? "land-table-wrapper--head-fixed" : ""} ${c > 0 ? "land-table-wrapper--fixed-columns" : ""} ${r}`, style: n, children: [
    /* @__PURE__ */ m("table", { ref: p, className: `land-table ${o ? "land-table--striped" : ""} ${a ? "land-table--head-fixed" : ""} ${c > 0 ? "land-table--fixed-columns" : ""}`, children: [
      /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: e == null ? void 0 : e.map((w, y) => /* @__PURE__ */ i(
        "th",
        {
          className: y < c ? "land-table__cell--fixed" : "",
          children: w.title
        },
        y
      )) }) }),
      /* @__PURE__ */ i("tbody", { children: t.map((w, y) => /* @__PURE__ */ i("tr", { children: Object.values(w).map((x, N) => /* @__PURE__ */ i(
        "td",
        {
          "data-row": y,
          "data-col": N,
          className: N < c ? "land-table__cell--fixed" : "",
          onMouseEnter: () => k(y, N),
          onMouseLeave: g,
          children: x
        },
        N
      )) }, y)) })
    ] }),
    s && l && /* @__PURE__ */ m(he, { children: [
      /* @__PURE__ */ i(
        "div",
        {
          className: "land-table__row-overlay",
          style: u.row
        }
      ),
      /* @__PURE__ */ i(
        "div",
        {
          className: "land-table__col-overlay",
          style: u.col
        }
      )
    ] })
  ] });
}, D3 = ({ data: e, direction: t = "column", icon: n }) => /* @__PURE__ */ i("div", { className: `land-timeline ${t === "row" ? "row" : ""}`, children: e == null ? void 0 : e.map((r, o) => /* @__PURE__ */ m("div", { className: `land-timeline-item ${t === "row" ? "row" : ""}`, children: [
  /* @__PURE__ */ m("div", { className: "land-timeline-indicator-wrapper", children: [
    r.icon || n || /* @__PURE__ */ i("div", { className: "land-timeline-indicator" }),
    o !== (e == null ? void 0 : e.length) - 1 && /* @__PURE__ */ i(Ae, { direction: t })
  ] }),
  /* @__PURE__ */ m("div", { className: "land-timeline-content", children: [
    r.title && /* @__PURE__ */ i("div", { className: "land-timeline-title", children: r.title }),
    r.subTitle && /* @__PURE__ */ i("div", { className: "land-timeline-subTitle", children: r.subTitle }),
    r.desc && /* @__PURE__ */ i("div", { className: "land-timeline-desc", children: r.desc })
  ] })
] }, o)) }), E3 = ({
  title: e,
  type: t = "h1",
  prefix: n,
  sub: r,
  tip: o,
  style: s,
  className: a = "",
  onClick: c
}) => /* @__PURE__ */ m(
  "div",
  {
    className: `land-title ${a}`,
    style: s,
    onClick: () => c == null ? void 0 : c(),
    children: [
      n && /* @__PURE__ */ i("span", { className: "land-title-prefix", children: n }),
      t === "h1" && /* @__PURE__ */ i("h1", { children: e }),
      t === "h2" && /* @__PURE__ */ i("h2", { children: e }),
      t === "h3" && /* @__PURE__ */ i("h3", { children: e }),
      t === "h4" && /* @__PURE__ */ i("h4", { children: e }),
      o && /* @__PURE__ */ m("div", { className: "land-title-tip hover-pop", children: [
        /* @__PURE__ */ i(X, { name: "info-stroke", stroke: "var(--color-text-secondary)" }),
        /* @__PURE__ */ i(Le, { content: o, theme: "dark", style: { maxWidth: "200px" } })
      ] }),
      r && typeof r == "string" ? /* @__PURE__ */ i("div", { className: "land-title-sub", children: r }) : /* @__PURE__ */ i(he, { children: r })
    ]
  }
), B3 = ({
  desc: e,
  fileType: t,
  onUpload: n,
  children: r,
  width: o = "100%",
  height: s = "100px",
  style: a,
  className: c = "",
  innerClassName: l = ""
}) => {
  const d = q(null), [u, h] = B(), [p, f] = B(), [k, g] = B(!1), C = (y, x) => {
    y.preventDefault(), g(!0), x && (f(x), new FileReader().readAsDataURL(x), h(URL.createObjectURL(x)), g(!1));
  };
  Y(() => {
    n == null || n(u, p);
  }, [u]);
  const [v, w] = B(!1);
  return /* @__PURE__ */ m(
    "label",
    {
      className: `land-uploader ${v ? "drag" : ""} ${c}`,
      style: {
        width: o,
        height: s,
        ...a
      },
      onDragOver: (y) => {
        w(!0), y.preventDefault();
      },
      onDrop: (y) => {
        w(!1), C(y, y.dataTransfer.files[0]);
      },
      onDragLeave: () => w(!1),
      children: [
        /* @__PURE__ */ i(
          "input",
          {
            ref: d,
            type: "file",
            accept: t,
            className: `land-uploader-input ${l}`,
            onChange: (y) => {
              C(y, y.target.files[0]);
            }
          }
        ),
        r || (k ? /* @__PURE__ */ i(he, { children: "上传中" }) : v ? /* @__PURE__ */ i("div", { className: "land-uploader-desc", children: "释放即可上传" }) : /* @__PURE__ */ m(he, { children: [
          /* @__PURE__ */ i("div", { className: "land-uploader-icon", children: /* @__PURE__ */ i(X, { name: "upload" }) }),
          e && /* @__PURE__ */ i("div", { className: "land-uploader-desc", children: e })
        ] }))
      ]
    }
  );
}, F3 = ({
  children: e,
  content: t,
  url: n,
  width: r = 120,
  height: o = 64,
  gap: s = [180, 120],
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
  const g = q(null), C = q(null), [v, w] = B({ width: 0, height: 0 }), y = O(() => {
    const { width: b, height: j } = v;
    if (b === 0 || j === 0) return [];
    const [S, D] = s, [V, A] = a, T = Math.max(S, r), H = Math.max(D, o), F = b - r, E = j - o, K = Math.max(0, Math.min(V, F)), $ = Math.max(0, Math.min(A, E)), P = Math.ceil((F - K) / T) + 1, I = Math.ceil((E - $) / H) + 1, R = [];
    for (let _ = 0; _ < I; _++)
      for (let G = 0; G < P; G++) {
        const Z = K + G * T, J = $ + _ * H;
        Z + r <= b && J + o <= j && R.push({
          id: `${_}-${G}`,
          x: Z,
          y: J
        });
      }
    if (R.length < 4) {
      const _ = [], G = (b - r) / 2, Z = (j - o) / 2;
      _.push({
        id: "center",
        x: G,
        y: Z
      });
      const J = 20;
      return [
        { x: J, y: J },
        { x: b - r - J, y: J },
        { x: J, y: j - o - J },
        {
          x: b - r - J,
          y: j - o - J
        }
      ].forEach((te, le) => {
        te.x >= 0 && te.y >= 0 && _.push({
          id: `corner-${le}`,
          x: te.x,
          y: te.y
        });
      }), [...R, ..._];
    }
    return R;
  }, [v, s, a, r, o]), x = U(() => y(), [y]), N = O(() => {
    if (g.current) {
      const { offsetWidth: b, offsetHeight: j } = g.current;
      w({ width: b, height: j });
    }
  }, []);
  Y(() => {
    N();
  }, [N]), Y(() => (C.current && (C.current.disconnect(), C.current = null), C.current = new ResizeObserver(() => {
    N();
  }), g.current && C.current.observe(g.current), () => {
    C.current && (C.current.disconnect(), C.current = null);
  }), [N]), Y(() => () => {
    C.current && (C.current.disconnect(), C.current = null);
  }, []);
  const L = U(
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
  ), M = O(
    (b) => {
      const j = {
        ...L,
        left: `${b.x}px`,
        top: `${b.y}px`
      };
      return /* @__PURE__ */ i("div", { className: `land-watermark-item ${n ? "img" : ""}`, style: j, children: n ? /* @__PURE__ */ i("img", { src: n, alt: "watermark" }) : t }, b.id);
    },
    [L, n, t]
  );
  return /* @__PURE__ */ m(
    "div",
    {
      ref: g,
      className: `land-watermark  ${k ?? ""}`,
      style: f,
      children: [
        e,
        /* @__PURE__ */ i("div", { className: "land-watermark-content", children: x.map(M) })
      ]
    }
  );
}, O3 = ({
  placeholder: e = "请输入",
  value: t,
  onChange: n,
  maxHeight: r = 80
}) => {
  const [o, s] = B(40), [a, c] = B(32), l = q(null);
  return Y(() => {
    l.current && (s(l.current.offsetWidth + 2), l.current.offsetHeight <= r && c(l.current.offsetHeight));
  }, [e, t]), /* @__PURE__ */ m("div", { className: "land-auto-width-height-textarea", style: { maxHeight: `${r}px` }, children: [
    /* @__PURE__ */ i("div", { ref: l, className: "land-auto-width-height-textarea-holder", children: (t == null ? void 0 : t.trimEnd()) || (e == null ? void 0 : e.trimEnd()) }),
    /* @__PURE__ */ i(
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
}, Z3 = ({
  type: e = "input",
  value: t = "",
  onChange: n,
  height: r = "auto",
  maxHeight: o,
  placeholder: s,
  className: a = "",
  style: c
}) => {
  const [l, d] = B(!1), [u, h] = B(t), p = q(null);
  Y(() => {
    h(t);
  }, [t]);
  const f = () => {
    d(!0), setTimeout(() => {
      if (p.current) {
        p.current.focus();
        const w = p.current.value.length;
        p.current.setSelectionRange(w, w), p.current.scrollTop = p.current.scrollHeight;
      }
    }, 0);
  }, k = () => {
    d(!1), n && u !== t && n(u);
  }, g = (w) => {
    w.key === "Enter" && !w.shiftKey && (w.preventDefault(), k()), w.key === "Escape" && (h(t), d(!1));
  }, C = (w) => {
    h(w.target.value);
  }, v = () => {
    const w = {};
    return r !== "auto" && (w.height = `${r}px`), o && (w.maxHeight = `${o}px`), w;
  };
  return /* @__PURE__ */ i(
    "div",
    {
      className: `double-click-input ${a}`,
      onDoubleClick: f,
      style: c,
      children: l ? e === "input" ? /* @__PURE__ */ i(
        "input",
        {
          ref: p,
          type: "text",
          value: u,
          onChange: C,
          onBlur: k,
          onKeyDown: g,
          placeholder: s
        }
      ) : /* @__PURE__ */ i(
        "textarea",
        {
          ref: p,
          value: u,
          onChange: C,
          onBlur: k,
          onKeyDown: g,
          placeholder: s,
          style: v()
        }
      ) : /* @__PURE__ */ i("div", { className: `display-text ${e} ${u ? "" : "placeholder"}`, style: e === "textarea" ? v() : {}, children: u || s })
    }
  );
}, Y3 = ({
  type: e = "1",
  ratio: t = 1,
  gap: n = 2,
  style: r,
  className: o = "",
  gridStyle: s,
  gridClassName: a = "",
  children: c
}) => {
  const l = U(() => {
    const u = e == null ? void 0 : e.split("-")[0];
    return Number(u) ? Number(u) : 1;
  }, [e]), d = U(() => t > 1 ? "horizontal" : t < 1 ? "vertical" : "square", [t]);
  return /* @__PURE__ */ m("div", { className: `land-grid-template ${d} type-${e} ${o}`, style: { gap: n, aspectRatio: t, ...r }, children: [
    c,
    !c && /* @__PURE__ */ i(he, { children: Array.from({ length: l }).map((u, h) => /* @__PURE__ */ i("div", { className: `land-grid-template-item ${a}`, style: s }, h)) })
  ] });
}, Q0 = [], W0 = ls(
  ({
    highlightString: e = Q0,
    highlightBg: t = "var(--color-error-light)",
    highlightColor: n = "var(--color-error)",
    formatHighlightString: r,
    className: o,
    style: s,
    inputClassName: a,
    inputStyle: c,
    contentClassName: l,
    contentStyle: d,
    value: u = "",
    onScroll: h,
    onChange: p,
    textAreaRef: f,
    placeholder: k = "请输入",
    disabled: g,
    autoResize: C,
    ...v
  }, w) => {
    const y = q(null), x = q(null), N = O(() => {
      !y.current || !x.current || (y.current.scrollTop = x.current.scrollTop);
    }, []), L = O(
      (S) => {
        console.log(1), h == null || h(S), N();
      },
      [h]
    ), M = O(
      (S) => {
        p == null || p(S), C ? b() : N();
      },
      [p]
    );
    $c(w, () => ({
      focus: () => {
        x != null && x.current && x.current.focus();
      }
      // 你可以在这里添加更多的属性或方法
    })), Y(() => {
      !x.current || !f || (f.current = x.current);
    }, []);
    const b = () => {
      x.current && (x.current.style.height = "auto", x.current.style.height = `${x.current.scrollHeight}px`);
    }, j = U(() => {
      const S = [];
      let D = "", V = "default", A = 0;
      for (let H = 0; H < u.length; H++)
        D += u[H], S[A] = {
          type: V,
          msg: D
        }, e.some((E) => D.includes(E) ? (V = E, !0) : !1) && (S[A].msg = D.split(V)[0], S.push({
          type: V,
          msg: V
        }), A += 2, D = "", V = "default");
      const T = S.map(
        (H) => {
          var F;
          return (F = H.msg) != null && F.includes(`
`) ? Object.assign(H, {
            msg: /* @__PURE__ */ i(he, { children: H.msg })
          }) : H;
        }
      );
      return u.endsWith(`
`) && T.push({ type: "default", msg: /* @__PURE__ */ i("br", {}) }), T;
    }, [u, e]);
    return /* @__PURE__ */ m("div", { className: `land-highlight-textarea ${o}`, style: s, children: [
      /* @__PURE__ */ i(
        "div",
        {
          className: `land-highlight-textarea-content ${l}`,
          style: d,
          ref: y,
          children: j.length > 0 ? j.map((S, D) => S.type === "default" ? S.msg : r ? r(S.msg) : /* @__PURE__ */ i(
            "span",
            {
              className: "radius-4",
              style: {
                color: n,
                backgroundColor: t
              },
              children: S.msg
            },
            S.msg + D
          )) : /* @__PURE__ */ i("span", { className: "land-highlight-textarea-placeholder", children: k })
        }
      ),
      /* @__PURE__ */ i(
        "textarea",
        {
          id: "land-highlight-textarea",
          ...v,
          className: `land-highlight-textarea-input ${a}`,
          style: c,
          value: u,
          onScroll: C ? void 0 : L,
          onChange: M,
          ref: x,
          placeholder: k,
          disabled: g
        }
      )
    ] });
  }
), e3 = (e, t) => {
  const n = [];
  let r = "", o = "default", s = 0;
  for (let a = 0; a < e.length; a++)
    r += e[a], n[s] = {
      type: o,
      msg: r
    }, t.some((l) => r.includes(l) ? (o = l, !0) : !1) && (n[s].msg = r.split(o)[0], n.push({
      type: o,
      msg: o
    }), s += 2, r = "", o = "default");
  return n;
}, _3 = ({
  value: e = "",
  showNum: t = !0,
  maxLength: n = 300,
  fail: r,
  disabledInput: o = !1,
  onChange: s,
  onFocus: a,
  onBlur: c,
  placeholder: l,
  highlightString: d = [],
  formatHighlightString: u,
  className: h = "",
  style: p,
  ...f
}) => {
  const k = U(() => e3(e, d), [e, d]), g = q(null), C = q(null), v = O(() => {
    !g.current || !C.current || (g.current.scrollLeft = C.current.scrollLeft);
  }, []), w = O(() => {
    g.current && (g.current.scrollLeft = 0), c == null || c();
  }, []), [y, x] = B(!1);
  return /* @__PURE__ */ m("div", { className: `land-highlight-input ${h}`, style: p, children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: `land-highlight-input-container  ${r || Number(e == null ? void 0 : e.length) > n ? "error" : ""} ${y ? "hover" : ""}`,
        onMouseOver: () => x(!0),
        onMouseOut: () => x(!1),
        children: [
          /* @__PURE__ */ m("div", { className: "land-highlight-input-content", children: [
            e ? /* @__PURE__ */ i(
              "div",
              {
                ref: g,
                className: `land-highlight-input-hight-string ${o ? "disabled" : ""}`,
                children: k.map((N, L) => N.type === "default" ? N.msg : u ? u(N.msg) : /* @__PURE__ */ i("span", { className: "land-highlight-input-hight-string-item", children: N.msg }, N.msg + L))
              }
            ) : /* @__PURE__ */ i(
              "div",
              {
                className: "land-highlight-input-placeholder",
                children: l
              }
            ),
            /* @__PURE__ */ i(
              "input",
              {
                ref: C,
                id: "highlight-input",
                type: "text",
                className: "land-highlight-input-input",
                disabled: o,
                value: e,
                onChange: (N) => {
                  v == null || v(), s == null || s(N);
                },
                onScroll: () => v(),
                onFocus: () => a == null ? void 0 : a(),
                onBlur: w,
                ...f
              }
            )
          ] }),
          (Number(e == null ? void 0 : e.length) > n || t) && /* @__PURE__ */ m("div", { className: "land-highlight-input-operation", children: [
            /* @__PURE__ */ i(
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
    r && /* @__PURE__ */ i("p", { className: "land-highlight-input-fail", children: r })
  ] });
}, U3 = ({
  value: e,
  prefix: t,
  ...n
}) => {
  const r = q(null), [o, s] = B(0), a = q(null), [c, l] = B(0);
  return Y(() => {
    var d, u;
    (d = r.current) != null && d.clientWidth ? s((u = r.current) == null ? void 0 : u.clientWidth) : s(0);
  }, [t]), Y(() => {
    const d = document.querySelector(".land-prefix-input .prefix-textarea");
    if (r.current && d) {
      const u = (h) => {
        r.current.style = `top: ${1 - Number(h.target.scrollTop)}px`;
      };
      return d == null || d.addEventListener("scroll", u), () => {
        d == null || d.removeEventListener("scroll", u);
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
          /* @__PURE__ */ i("p", { className: "land-prefix-value-input-prefix-text", children: t }),
          "]"
        ]
      }
    ),
    /* @__PURE__ */ i(
      W0,
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
}, G3 = ({
  data: e = [],
  activeGroup: t,
  value: n,
  onChange: r,
  keyboardControl: o = !1
}) => {
  if (e.length <= 1) return null;
  const [s, a] = B(n ?? ""), [c, l] = B(t ?? "");
  Y(() => a(n ?? ""), [n]), Y(() => l(t ?? ""), [t]);
  const d = q(), u = U(() => {
    var g, C;
    return (C = (g = e == null ? void 0 : e.filter((v) => v.id === c)[0]) == null ? void 0 : g.mediaData) == null ? void 0 : C.map((v) => v.id);
  }, [e, c]), h = U(() => e == null ? void 0 : e.map((g) => g.id), [e]), p = U(() => u == null ? void 0 : u.indexOf(s), [u, s]), f = U(() => h == null ? void 0 : h.indexOf(c), [h, c]), k = (g) => e.slice(0, g).reduce((C, v) => C + v.mediaData.length, 0);
  return Y(() => {
    if (n === void 0 || f === -1 || p === -1) return;
    let g = k(f);
    u.length <= 6 ? d.current && d.current.scrollTo({ top: (g - 1) * 96 + f * 8 + (g - f) * 1, behavior: "smooth" }) : p <= 5 ? d.current && d.current.scrollTo({ top: (g - 1) * 96 + f * 8 + (g - f) * 1, behavior: "smooth" }) : f === 0 ? d.current && d.current.scrollTo({ top: (g + Math.floor(p / 7) * 7) * 96 + f * 8 + (g - f + Math.floor(p / 7) * 7) * 1, behavior: "smooth" }) : d.current && d.current.scrollTo({ top: (g + 6 + Math.floor((p - 6) / 7) * 7) * 96 + f * 8 + (g - f + 6 + Math.floor((p - 6) / 7) * 7) * 1, behavior: "smooth" });
  }, [p, f]), Y(() => {
    if (!o) return;
    const g = (C) => {
      var v, w, y, x, N, L, M, b, j;
      if (!(C.repeat || f === -1 || p === -1))
        if (["TEXTAREA", "INPUT"].indexOf(C.target.tagName) === -1 && C.preventDefault(), C.code === "ArrowUp" || C.key === "ArrowUp") {
          if (p > 0)
            a(u[p - 1]), r == null || r((v = e[f]) == null ? void 0 : v.mediaData[p - 1], e[f]);
          else if (f > 0) {
            l(h[f - 1] ?? "");
            const S = (y = (w = e == null ? void 0 : e.filter((D) => D.id === h[f - 1])[0]) == null ? void 0 : w.mediaData) == null ? void 0 : y.length;
            a((N = (x = e[f - 1]) == null ? void 0 : x.mediaData[S - 1]) == null ? void 0 : N.id), r == null || r((L = e[f - 1]) == null ? void 0 : L.mediaData[S - 1], e[f - 1]);
          }
        } else (C.code === "ArrowDown" || C.key === "ArrowDown") && (p < (u == null ? void 0 : u.length) - 1 ? (a(u[p + 1]), r == null || r((M = e[f]) == null ? void 0 : M.mediaData[p + 1], e[f])) : f < h.length - 1 && (l(h[f + 1] ?? ""), a((b = e[f + 1]) == null ? void 0 : b.mediaData[0].id), r == null || r((j = e[f + 1]) == null ? void 0 : j.mediaData[0], e[f + 1])));
    };
    return window.addEventListener("keydown", g), () => {
      window.removeEventListener("keydown", g);
    };
  }, [s, c, o]), Y(() => {
    const g = document.querySelector(".currentPreviewCard");
    g && g.scrollIntoView({ behavior: "smooth" });
  }, []), /* @__PURE__ */ i("div", { className: "land-swiper-media-preview", onClick: (g) => g.stopPropagation(), children: /* @__PURE__ */ i(
    "div",
    {
      ref: d,
      className: "land-swiper-media-preview-content",
      children: e == null ? void 0 : e.map((g, C) => {
        var v;
        return /* @__PURE__ */ i(
          "div",
          {
            className: `land-swiper-media-preview-group ${g.id === t ? "active" : ""}`,
            children: (v = g.mediaData) == null ? void 0 : v.map((w, y) => /* @__PURE__ */ m(he, { children: [
              y !== 0 && /* @__PURE__ */ i(Ae, { gap: 8 }),
              /* @__PURE__ */ i(
                "div",
                {
                  className: `land-swiper-media-preview-item ${n === w.id ? "active" : ""}`,
                  onClick: () => {
                    r == null || r(w, g);
                  },
                  children: /* @__PURE__ */ i(
                    Ff,
                    {
                      url: w.url,
                      ratio: 1,
                      style: { width: "80px", borderRadius: "8px" },
                      imgStyle: { objectFit: "cover", borderRadius: "8px" }
                    }
                  )
                }
              )
            ] }, w.id ?? y))
          },
          g.id ?? C
        );
      })
    }
  ) });
}, K3 = (e) => {
  if (!e) return "00:00";
  if (typeof e == "string") return e;
  const t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), r = Math.round(e % 60), o = t < 10 ? "0" + t : t, s = n < 10 ? "0" + n : n, a = r < 10 ? "0" + r : r;
  return t > 0 ? o + ":" + s + ":" + a : s + ":" + a;
};
export {
  Ee as GridType,
  X as Icon,
  r3 as LandAffixContainer,
  pf as LandAlert,
  i3 as LandAnchor,
  fo as LandAudio,
  s3 as LandAutoContainer,
  O3 as LandAutoWidthHeightTextarea,
  a3 as LandBadge,
  c3 as LandBreadCrumb,
  ae as LandButton,
  Af as LandCalendar,
  Ua as LandCheck,
  l3 as LandCheckbox,
  d3 as LandCheckedContainer,
  u3 as LandCollapse,
  p3 as LandColorPicker,
  h3 as LandContent,
  f3 as LandDatePicker,
  m3 as LandDialog,
  Ae as LandDivider,
  Z3 as LandDoubleClickInput,
  g3 as LandDrawer,
  mo as LandDropdown,
  v3 as LandEllipsis,
  k3 as LandFlex,
  L3 as LandFooter,
  w3 as LandGrid,
  Y3 as LandGridTemplate,
  y3 as LandHeader,
  _3 as LandHighlightInput,
  W0 as LandHighlightTextarea,
  Ff as LandImage,
  Tn as LandInput,
  C3 as LandLayout,
  Ut as LandLink,
  hf as LandLoading,
  za as LandMenu,
  M3 as LandMessage,
  je as LandNumberInput,
  x3 as LandPagination,
  b3 as LandPopConfirm,
  Le as LandPopOver,
  U3 as LandPrefixValueInput,
  N3 as LandProgress,
  q0 as LandRadio,
  V3 as LandRadioGroup,
  T3 as LandSlider,
  S3 as LandState,
  j3 as LandStatistic,
  A3 as LandSteps,
  $3 as LandSwiper,
  G3 as LandSwiperMediaPreview,
  I3 as LandSwitch,
  R3 as LandTable,
  H3 as LandTabs,
  J0 as LandTag,
  P3 as LandTagInput,
  D3 as LandTimeline,
  E3 as LandTitle,
  B3 as LandUploader,
  F3 as LandWatermark,
  wf as useClickOutside,
  K3 as useFormateTime,
  e3 as useGetHighlightStr
};
//# sourceMappingURL=index.es.js.map
