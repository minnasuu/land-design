var Fc = Object.defineProperty;
var Zc = (e, t, n) => t in e ? Fc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Hn = (e, t, n) => Zc(e, typeof t != "symbol" ? t + "" : t, n);
import { jsxs as g, jsx as s, Fragment as tt } from "react/jsx-runtime";
import * as Qs from "react";
import pn, { useMemo as j, useState as F, useEffect as de, createContext as Yn, useRef as ae, useLayoutEffect as Uc, useId as Js, useContext as ft, useInsertionEffect as Ca, useCallback as M, Children as Yc, isValidElement as Kc, forwardRef as Ma, Fragment as vr, createElement as zc, Component as Xc, useImperativeHandle as qc } from "react";
import { createPortal as Gc } from "react-dom";
const Qn = "land-affix-container", ba = {
  topStart: "top-start",
  topEnd: "top-end",
  topCenter: "top-center",
  bottomStart: "bottom-start",
  bottomEnd: "bottom-end",
  bottomCenter: "bottom-center",
  startCenter: "start-center",
  endCenter: "end-center",
  center: "center",
  custom: "custom"
}, Qc = "var(--padding-m)", Jc = (e, t) => {
  const n = t.offset !== void 0 ? t.offset : Qc, r = ba[e], o = r.includes("start"), i = r.includes("end"), a = r.startsWith("top"), l = r.startsWith("bottom"), c = e === "topCenter" || e === "bottomCenter" || e === "center", u = e === "startCenter" || e === "endCenter" || e === "center", d = e === "custom", p = d ? t.left : o ? n : c ? "50%" : "auto", h = i ? n : "auto", f = d ? t.top : a ? n : u ? "50%" : "auto", m = l ? n : "auto";
  let v = "";
  return c && u ? v = "translate(-50%, -50%)" : c ? v = "translateX(-50%)" : u && (v = "translateY(-50%)"), { left: p, right: h, top: f, bottom: m, transform: v };
}, Wc = (e) => e ? Array.isArray(e) ? e : [e] : [], tm = ({
  items: e,
  disabled: t,
  onClick: n,
  children: r,
  className: o = "",
  style: i,
  htmlProps: a
}) => {
  const l = j(() => Wc(e), [e]), [c, u] = F(!1);
  de(() => {
    const h = () => u(!1);
    return document.body.addEventListener("wheel", h), () => document.body.removeEventListener("wheel", h);
  }, []);
  const d = (h) => {
    const f = h.display ?? "always";
    return f === "hoverShow" ? c ? 1 : 0 : f === "hoverHide" && c ? 0 : 1;
  }, p = j(() => [
    Qn,
    t && `${Qn}--disabled`,
    o
  ].filter(Boolean).join(" "), [t, o]);
  return /* @__PURE__ */ g(
    "div",
    {
      className: p,
      style: i,
      onClick: (h) => n == null ? void 0 : n(h),
      onMouseOver: () => {
        t || u(!0);
      },
      onMouseLeave: () => u(!1),
      onWheel: (h) => h.stopPropagation(),
      ...a,
      children: [
        r,
        l.map((h, f) => {
          const m = h.placement ?? "center", v = ba[m], L = Jc(m, h), k = d(h), y = (h.display ?? "always") === "hoverShow", C = [
            `${Qn}__item`,
            `${Qn}__item--${v}`,
            y && `${Qn}__item--hover-show`,
            h.className
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ s(
            "div",
            {
              className: C,
              style: {
                ...L,
                opacity: k,
                zIndex: h.zIndex ?? 2,
                animation: y && c ? h.animation : "none",
                ...h.style
              },
              onClick: (w) => {
                var b;
                w.stopPropagation(), (b = h.onClick) == null || b.call(h, w);
              },
              children: h.content
            },
            `${m}-${f}`
          );
        })
      ]
    }
  );
}, ed = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), td = ({
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
), nd = ({
  size: e = 16,
  color: t = "currentcolor",
  className: n = "",
  onClick: r
}) => /* @__PURE__ */ g(
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
), rd = ({
  size: e = 16,
  color: t = "currentcolor",
  className: n = "",
  style: r,
  onClick: o
}) => /* @__PURE__ */ g(
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
), sd = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ g(
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
), od = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), id = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), ad = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), ld = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), cd = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), dd = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), ud = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), hd = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), fd = ({
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
), pd = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), md = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), gd = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), vd = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), kd = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Ld = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), yd = ({
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
), wd = ({
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
), Cd = ({
  color: e = "currentcolor",
  size: t = 20,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Md = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = ""
}) => /* @__PURE__ */ g(
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
), bd = ({
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
), xd = ({
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
), _d = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), $d = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Nd = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = ""
}) => /* @__PURE__ */ g(
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
), jd = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  reverse: i,
  onClick: a
}) => /* @__PURE__ */ g("svg", { xmlns: "http://www.w3.org/2000/svg", width: t, height: t, viewBox: "0 0 48 48", fill: "none", className: `video-fill-width ${o}`, style: r, onClick: a, children: [
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
] }), Vd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Td = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ g(
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
), Sd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Hd = ({
  size: e = 20,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ g(
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
), Dd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Id = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Pd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Ad = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Bd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Rd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Ed = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Od = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Fd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Zd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Ud = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Yd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Kd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), zd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Xd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), qd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Gd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Qd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Jd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Wd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), eu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), tu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), nu = ({
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
), ru = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), su = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), ou = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), iu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), au = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), lu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), cu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), du = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), uu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), hu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), fu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), pu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), mu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), gu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), vu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), ku = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Lu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Cu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Mu = ({
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
), xa = ({
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
), bu = ({
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
), xu = ({
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
), _u = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), $u = ({
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
), Nu = ({
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
), ju = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Vu = ({
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
), Tu = ({
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
), Su = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Hu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Du = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Iu = ({
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
), Pu = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Au = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Bu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Ru = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Eu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Ou = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Fu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Zu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Uu = ({
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
), Yu = ({
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
), Ku = ({
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
), zu = ({
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
), Xu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), qu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Gu = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ g(
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
), Qu = ({
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
), Ju = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ g(
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
), Wu = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), eh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ g(
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
), th = ({
  size: e = 20,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ g(
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
), nh = ({
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
), rh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), sh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), oh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), ih = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), ah = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), lh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), ch = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), dh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), uh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), hh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), fh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), ph = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), mh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), gh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), vh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), kh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
      /* @__PURE__ */ g("g", { clipPath: "url(#icon-388a63e7c11bad3)", children: [
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
), Lh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), yh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), wh = ({
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
), Ch = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Mh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), bh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), xh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), _h = ({
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
), $h = ({
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
), Nh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), jh = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ g(
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
), Vh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Th = ({
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
), Sh = ({
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
), Hh = ({
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
), Dh = ({
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
), Ih = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Ph = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Ah = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Bh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Rh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Eh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Oh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Fh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Zh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Uh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Yh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Kh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), zh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Xh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), qh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Gh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Qh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Jh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Wh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), e1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), t1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), n1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), r1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), s1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), o1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), i1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), a1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), l1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), c1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), d1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), u1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), h1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), f1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), p1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), m1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), g1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), v1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), k1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), L1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), y1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), w1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), C1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), M1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), b1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), x1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), _1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), $1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), N1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), j1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), V1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), T1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), S1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), H1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), D1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), I1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), P1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), A1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), B1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), R1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), E1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), _a = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), O1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), F1 = ({
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
), Z1 = ({
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
), U1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), Y1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ g(
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
), K1 = ({
  color: e = "currentcolor",
  strokeWidth: t = 3,
  size: n = 16,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ g(
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
), z1 = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = ""
}) => /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", width: t, height: t, viewBox: "0 0 16 16", fill: "none", style: n, className: r, children: /* @__PURE__ */ s("path", { d: "M14.0726 5.46403C13.5517 5.78293 13.1202 6.22878 12.8186 6.75984C12.5169 7.2909 12.3549 7.88981 12.3478 8.50053C12.3498 9.18788 12.5535 9.85953 12.9335 10.4323C13.3135 11.005 13.8532 11.4538 14.4857 11.7228C14.2363 12.5274 13.8672 13.2899 13.3909 13.9846C12.7093 14.9658 11.9966 15.9469 10.9122 15.9469C9.82777 15.9469 9.54887 15.3169 8.29917 15.3169C7.08047 15.3169 6.64667 15.9676 5.65517 15.9676C4.66367 15.9676 3.97177 15.0587 3.17647 13.9433C2.12594 12.3808 1.54858 10.5483 1.51367 8.66573C1.51367 5.56733 3.52767 3.92523 5.51057 3.92523C6.56407 3.92523 7.44197 4.61713 8.10297 4.61713C8.73297 4.61713 9.71417 3.88383 10.9122 3.88383C11.5281 3.86793 12.1386 4.00375 12.6897 4.27931C13.2408 4.55487 13.7157 4.96172 14.0726 5.46403ZM10.3442 2.57223C10.8723 1.95099 11.1712 1.16735 11.1911 0.352226C11.192 0.244769 11.1816 0.137514 11.1601 0.0322266C10.2529 0.12084 9.41408 0.553201 8.81557 1.24063C8.28238 1.83711 7.97217 2.59982 7.93767 3.39913C7.93807 3.49633 7.94846 3.59324 7.96867 3.68833C8.04019 3.70185 8.11279 3.70877 8.18557 3.70903C8.60365 3.67576 9.01059 3.55783 9.38167 3.3624C9.75275 3.16698 10.0802 2.89814 10.3442 2.57223Z", fill: e }) }), $a = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i,
  value: a = 1
}) => {
  const l = Math.min(99, Math.max(0, Math.floor(a))), c = l > 9 ? 18 : 22;
  return /* @__PURE__ */ g(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: r,
      className: `number-stroke ${o}`,
      onClick: i,
      children: [
        /* @__PURE__ */ s(
          "circle",
          {
            cx: "24",
            cy: "24",
            r: "20",
            stroke: e,
            strokeWidth: n,
            fill: "none"
          }
        ),
        /* @__PURE__ */ s(
          "text",
          {
            x: "24",
            y: "24",
            textAnchor: "middle",
            dominantBaseline: "central",
            fill: e,
            fontSize: c,
            fontWeight: "600",
            fontFamily: "system-ui, -apple-system, sans-serif",
            children: l
          }
        )
      ]
    }
  );
}, X1 = ({
  color: e = "currentColor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o,
  value: i = 1
}) => {
  const a = Math.min(99, Math.max(0, Math.floor(i))), l = a > 9 ? 18 : 22;
  return /* @__PURE__ */ g(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: n,
      className: `number-fill ${r}`,
      onClick: o,
      children: [
        /* @__PURE__ */ s(
          "circle",
          {
            cx: "24",
            cy: "24",
            r: "22",
            fill: e
          }
        ),
        /* @__PURE__ */ s(
          "text",
          {
            x: "24",
            y: "24",
            textAnchor: "middle",
            dominantBaseline: "central",
            fill: "white",
            fontSize: l,
            fontWeight: "600",
            fontFamily: "system-ui, -apple-system, sans-serif",
            children: a
          }
        )
      ]
    }
  );
}, q1 = (e) => /* @__PURE__ */ s($a, { ...e }), G1 = {
  // Navigation
  home: ed,
  "home-fill": td,
  application: nd,
  more: rd,
  "more-line": sd,
  search: Cd,
  // Interface
  refresh: od,
  female: id,
  male: ad,
  "preview-open": ld,
  "preview-close": cd,
  avatar: dd,
  tag: ud,
  setting: hd,
  "config-setting": pd,
  collection: md,
  share: gd,
  translate: vd,
  light: kd,
  dark: yd,
  "light-fill": Ld,
  "dark-fill": wd,
  "setting-fill": fd,
  // Media
  image: Md,
  "video-play": bd,
  "video-pause": xd,
  volume: _d,
  "volume-muted": $d,
  "video-small-screen": Nd,
  "video-full-width": jd,
  loop: Vd,
  // File
  file: Td,
  download: Sd,
  upload: Hd,
  "web-add": Dd,
  announcement: Id,
  "audio-file": Pd,
  book: Ad,
  clipboard: Bd,
  document: Rd,
  email: su,
  "email-download": Ed,
  "email-push": Od,
  "email-success": Fd,
  "email-fail": Zd,
  "email-open": ou,
  "file-add": Ud,
  "code-file": Yd,
  "star-file": Kd,
  "text-file": zd,
  "text-scan": lu,
  folder: Xd,
  "code-folder": qd,
  "folder-download": Gd,
  "folder-add": Qd,
  "folder-upload": Jd,
  "formatting-brush": Wd,
  instruction: eu,
  "list-view": tu,
  link: nu,
  log: ru,
  "note-pad": iu,
  schedule: au,
  "web-page": cu,
  plan: du,
  calendar: uu,
  code: hu,
  // Ecommerce
  coupon: fu,
  ticket: pu,
  "bank-card": mu,
  consume: gu,
  commodity: vu,
  dollar: ku,
  // State
  "check-stroke": Lu,
  "check-fill": yu,
  check: wu,
  "error-stroke": Cu,
  "error-fill": Mu,
  error: xa,
  "info-stroke": bu,
  "info-fill": xu,
  info: _u,
  "attention-stroke": $u,
  "attention-fill": Nu,
  attention: ju,
  "question-stroke": Vu,
  "question-fill": Tu,
  question: Su,
  "hourglass-empty": Hu,
  "hourglass-full": Du,
  increase: Iu,
  // Operate
  "switch-gear": Pu,
  toggle: Au,
  reload: Bu,
  undo: Ru,
  sort: Eu,
  "sort-descending": Ou,
  "sort-ascending": Fu,
  back: Zu,
  "last-step": Uu,
  "last-step-fill": Yu,
  "next-step": Ku,
  "next-step-fill": zu,
  ahead: Xu,
  drag: qu,
  add: Gu,
  dec: Qu,
  "square-add": dh,
  "dash-add": uh,
  clear: Ju,
  delete: Wu,
  copy: eh,
  close: th,
  "color-picker": nh,
  "zoom-in-arrow": rh,
  "zoom-out-arrow": sh,
  "zoom-in": oh,
  "zoom-out": ih,
  "zoom-in-btn": lh,
  "zoom-out-btn": ch,
  out: ah,
  adjustment: hh,
  "alphabetical-sorting": fh,
  "alphabetical-sorting-reverse": ph,
  brightness: mh,
  layer: j1,
  "layer-front": gh,
  "layer-back": vh,
  "clear-formate": kh,
  edit: Lh,
  "clip-edit": yh,
  filter: wh,
  lock: Ch,
  unlock: Mh,
  "merge-cells": bh,
  "split-cells": xh,
  "cursor-move": _h,
  "cursor-move-fill": $h,
  "line-break": Nh,
  quote: jh,
  scan: Vh,
  like: Th,
  "like-fill": Sh,
  star: Hh,
  "star-fill": Dh,
  pen: Ih,
  // Arrow
  "arrow-line": _a,
  "arrow-double": O1,
  arrow: F1,
  "arrow-triangle": Z1,
  "arrow-to": U1,
  "arrow-nav": Y1,
  // Device
  camera: K1,
  apple: z1,
  // Number
  number: q1,
  "number-stroke": $a,
  "number-fill": X1,
  // Style
  "align-bottom": Ph,
  "align-top": Ah,
  "align-left": Bh,
  "align-right": Rh,
  "align-horizontally": Eh,
  "align-vertically": Oh,
  "text-align-left": Fh,
  "text-align-right": Zh,
  "text-align-center": Uh,
  "text-align-justify": Yh,
  "text-align-middle": Kh,
  "align-bottom-center": zh,
  "align-bottom-left": Xh,
  "align-bottom-right": qh,
  "align-horizontal-bottom": Gh,
  "align-horizontal-center": Qh,
  "align-horizontal-top": Jh,
  "align-left-bottom": Wh,
  "align-left-center": e1,
  "align-left-top": t1,
  "align-right-bottom": n1,
  "align-right-center": r1,
  "align-right-top": s1,
  "align-top-center": o1,
  "align-top-left": i1,
  "align-top-right": a1,
  "align-vertical-left": c1,
  "align-vertical-center": l1,
  "align-vertical-right": d1,
  "flip-horizontally": u1,
  "flip-vertically": h1,
  "font-size": f1,
  "line-height": p1,
  "text-bold": B1,
  "text-italic": R1,
  "text-underline": E1,
  "line-width": m1,
  "title-h1": g1,
  "title-h2": v1,
  "title-h3": k1,
  "indent-left": L1,
  "indent-right": y1,
  "drop-shadow-up": w1,
  "drop-shadow-down": C1,
  "drop-shadow-left": M1,
  "drop-shadow-right": b1,
  "inner-shadow-up": x1,
  "inner-shadow-down": _1,
  "inner-shadow-left": $1,
  "inner-shadow-right": N1,
  "check-list": V1,
  "alphabet-list": T1,
  "checkbox-list": S1,
  "radio-list": H1,
  "number-list": D1,
  mask: I1,
  "delete-strike": P1,
  tail: A1
}, Le = ({ name: e, value: t, ...n }) => {
  const r = G1[e];
  return r ? e === "number" || e === "number-stroke" || e === "number-fill" ? /* @__PURE__ */ s(r, { value: t, ...n }) : /* @__PURE__ */ s(r, { ...n }) : (console.warn(`Icon "${e}" not found`), /* @__PURE__ */ s(xa, { ...n }));
}, Ws = Yn({});
function eo(e) {
  const t = ae(null);
  return t.current === null && (t.current = e()), t.current;
}
const to = typeof window < "u", Na = to ? Uc : de, qr = /* @__PURE__ */ Yn(null);
function no(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ro(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const en = (e, t, n) => n > t ? t : n < e ? e : n;
let Kn = () => {
}, tn = () => {
};
process.env.NODE_ENV !== "production" && (Kn = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, tn = (e, t) => {
  if (!e)
    throw new Error(t);
});
const nn = {}, ja = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Va(e) {
  return typeof e == "object" && e !== null;
}
const Ta = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function so(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const jt = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Q1 = (e, t) => (n) => t(e(n)), kr = (...e) => e.reduce(Q1), cr = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class oo {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return no(this.subscriptions, t), () => ro(this.subscriptions, t);
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
const Rt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, zt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function Sa(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Xo = /* @__PURE__ */ new Set();
function io(e, t, n) {
  e || Xo.has(t) || (console.warn(t), Xo.add(t));
}
const Ha = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, J1 = 1e-7, W1 = 12;
function e4(e, t, n, r, o) {
  let i, a, l = 0;
  do
    a = t + (n - t) / 2, i = Ha(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > J1 && ++l < W1);
  return a;
}
function Lr(e, t, n, r) {
  if (e === t && n === r)
    return jt;
  const o = (i) => e4(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : Ha(o(i), t, r);
}
const Da = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ia = (e) => (t) => 1 - e(1 - t), Pa = /* @__PURE__ */ Lr(0.33, 1.53, 0.69, 0.99), ao = /* @__PURE__ */ Ia(Pa), Aa = /* @__PURE__ */ Da(ao), Ba = (e) => (e *= 2) < 1 ? 0.5 * ao(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), lo = (e) => 1 - Math.sin(Math.acos(e)), Ra = Ia(lo), Ea = Da(lo), t4 = /* @__PURE__ */ Lr(0.42, 0, 1, 1), n4 = /* @__PURE__ */ Lr(0, 0, 0.58, 1), Oa = /* @__PURE__ */ Lr(0.42, 0, 0.58, 1), r4 = (e) => Array.isArray(e) && typeof e[0] != "number", Fa = (e) => Array.isArray(e) && typeof e[0] == "number", qo = {
  linear: jt,
  easeIn: t4,
  easeInOut: Oa,
  easeOut: n4,
  circIn: lo,
  circInOut: Ea,
  circOut: Ra,
  backIn: ao,
  backInOut: Aa,
  backOut: Pa,
  anticipate: Ba
}, s4 = (e) => typeof e == "string", Go = (e) => {
  if (Fa(e)) {
    tn(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return Lr(t, n, r, o);
  } else if (s4(e))
    return tn(qo[e] !== void 0, `Invalid easing type '${e}'`), qo[e];
  return e;
}, jr = [
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
], Qo = {
  value: null
};
function o4(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = !1, i = !1;
  const a = /* @__PURE__ */ new WeakSet();
  let l = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = 0;
  function u(p) {
    a.has(p) && (d.schedule(p), e()), c++, p(l);
  }
  const d = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (p, h = !1, f = !1) => {
      const v = f && o ? n : r;
      return h && a.add(p), v.has(p) || v.add(p), p;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (p) => {
      r.delete(p), a.delete(p);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (p) => {
      if (l = p, o) {
        i = !0;
        return;
      }
      o = !0, [n, r] = [r, n], n.forEach(u), t && Qo.value && Qo.value.frameloop[t].push(c), c = 0, n.clear(), o = !1, i && (i = !1, d.process(p));
    }
  };
  return d;
}
const i4 = 40;
function Za(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, a = jr.reduce((C, w) => (C[w] = o4(i, t ? w : void 0), C), {}), { setup: l, read: c, resolveKeyframes: u, preUpdate: d, update: p, preRender: h, render: f, postRender: m } = a, v = () => {
    const C = nn.useManualTiming ? o.timestamp : performance.now();
    n = !1, nn.useManualTiming || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(C - o.timestamp, i4), 1)), o.timestamp = C, o.isProcessing = !0, l.process(o), c.process(o), u.process(o), d.process(o), p.process(o), h.process(o), f.process(o), m.process(o), o.isProcessing = !1, n && t && (r = !1, e(v));
  }, L = () => {
    n = !0, r = !0, o.isProcessing || e(v);
  };
  return { schedule: jr.reduce((C, w) => {
    const b = a[w];
    return C[w] = (x, N = !1, T = !1) => (n || L(), b.schedule(x, N, T)), C;
  }, {}), cancel: (C) => {
    for (let w = 0; w < jr.length; w++)
      a[jr[w]].cancel(C);
  }, state: o, steps: a };
}
const { schedule: Ke, cancel: mn, state: ct, steps: as } = /* @__PURE__ */ Za(typeof requestAnimationFrame < "u" ? requestAnimationFrame : jt, !0);
let Pr;
function a4() {
  Pr = void 0;
}
const yt = {
  now: () => (Pr === void 0 && yt.set(ct.isProcessing || nn.useManualTiming ? ct.timestamp : performance.now()), Pr),
  set: (e) => {
    Pr = e, queueMicrotask(a4);
  }
}, Ua = (e) => (t) => typeof t == "string" && t.startsWith(e), co = /* @__PURE__ */ Ua("--"), l4 = /* @__PURE__ */ Ua("var(--"), uo = (e) => l4(e) ? c4.test(e.split("/*")[0].trim()) : !1, c4 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, zn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, dr = {
  ...zn,
  transform: (e) => en(0, 1, e)
}, Vr = {
  ...zn,
  default: 1
}, or = (e) => Math.round(e * 1e5) / 1e5, ho = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function d4(e) {
  return e == null;
}
const u4 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, fo = (e, t) => (n) => !!(typeof n == "string" && u4.test(n) && n.startsWith(e) || t && !d4(n) && Object.prototype.hasOwnProperty.call(n, t)), Ya = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, i, a, l] = r.match(ho);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, h4 = (e) => en(0, 255, e), ls = {
  ...zn,
  transform: (e) => Math.round(h4(e))
}, $n = {
  test: /* @__PURE__ */ fo("rgb", "red"),
  parse: /* @__PURE__ */ Ya("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ls.transform(e) + ", " + ls.transform(t) + ", " + ls.transform(n) + ", " + or(dr.transform(r)) + ")"
};
function f4(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Ns = {
  test: /* @__PURE__ */ fo("#"),
  parse: f4,
  transform: $n.transform
}, yr = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), hn = /* @__PURE__ */ yr("deg"), Xt = /* @__PURE__ */ yr("%"), Ne = /* @__PURE__ */ yr("px"), p4 = /* @__PURE__ */ yr("vh"), m4 = /* @__PURE__ */ yr("vw"), Jo = {
  ...Xt,
  parse: (e) => Xt.parse(e) / 100,
  transform: (e) => Xt.transform(e * 100)
}, Pn = {
  test: /* @__PURE__ */ fo("hsl", "hue"),
  parse: /* @__PURE__ */ Ya("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Xt.transform(or(t)) + ", " + Xt.transform(or(n)) + ", " + or(dr.transform(r)) + ")"
}, rt = {
  test: (e) => $n.test(e) || Ns.test(e) || Pn.test(e),
  parse: (e) => $n.test(e) ? $n.parse(e) : Pn.test(e) ? Pn.parse(e) : Ns.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? $n.transform(e) : Pn.transform(e),
  getAnimatableNone: (e) => {
    const t = rt.parse(e);
    return t.alpha = 0, rt.transform(t);
  }
}, g4 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function v4(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ho)) == null ? void 0 : t.length) || 0) + (((n = e.match(g4)) == null ? void 0 : n.length) || 0) > 0;
}
const Ka = "number", za = "color", k4 = "var", L4 = "var(", Wo = "${}", y4 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ur(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const l = t.replace(y4, (c) => (rt.test(c) ? (r.color.push(i), o.push(za), n.push(rt.parse(c))) : c.startsWith(L4) ? (r.var.push(i), o.push(k4), n.push(c)) : (r.number.push(i), o.push(Ka), n.push(parseFloat(c))), ++i, Wo)).split(Wo);
  return { values: n, split: l, indexes: r, types: o };
}
function Xa(e) {
  return ur(e).values;
}
function qa(e) {
  const { split: t, types: n } = ur(e), r = t.length;
  return (o) => {
    let i = "";
    for (let a = 0; a < r; a++)
      if (i += t[a], o[a] !== void 0) {
        const l = n[a];
        l === Ka ? i += or(o[a]) : l === za ? i += rt.transform(o[a]) : i += o[a];
      }
    return i;
  };
}
const w4 = (e) => typeof e == "number" ? 0 : rt.test(e) ? rt.getAnimatableNone(e) : e;
function C4(e) {
  const t = Xa(e);
  return qa(e)(t.map(w4));
}
const gn = {
  test: v4,
  parse: Xa,
  createTransformer: qa,
  getAnimatableNone: C4
};
function cs(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function M4({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - l;
    o = cs(c, l, e + 1 / 3), i = cs(c, l, e), a = cs(c, l, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
function Or(e, t) {
  return (n) => n > 0 ? t : e;
}
const qe = (e, t, n) => e + (t - e) * n, ds = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, b4 = [Ns, $n, Pn], x4 = (e) => b4.find((t) => t.test(e));
function ei(e) {
  const t = x4(e);
  if (Kn(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === Pn && (n = M4(n)), n;
}
const ti = (e, t) => {
  const n = ei(e), r = ei(t);
  if (!n || !r)
    return Or(e, t);
  const o = { ...n };
  return (i) => (o.red = ds(n.red, r.red, i), o.green = ds(n.green, r.green, i), o.blue = ds(n.blue, r.blue, i), o.alpha = qe(n.alpha, r.alpha, i), $n.transform(o));
}, js = /* @__PURE__ */ new Set(["none", "hidden"]);
function _4(e, t) {
  return js.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function $4(e, t) {
  return (n) => qe(e, t, n);
}
function po(e) {
  return typeof e == "number" ? $4 : typeof e == "string" ? uo(e) ? Or : rt.test(e) ? ti : V4 : Array.isArray(e) ? Ga : typeof e == "object" ? rt.test(e) ? ti : N4 : Or;
}
function Ga(e, t) {
  const n = [...e], r = n.length, o = e.map((i, a) => po(i)(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}
function N4(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = po(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function j4(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const i = t.types[o], a = e.indexes[i][r[i]], l = e.values[a] ?? 0;
    n[o] = l, r[i]++;
  }
  return n;
}
const V4 = (e, t) => {
  const n = gn.createTransformer(t), r = ur(e), o = ur(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? js.has(e) && !o.values.length || js.has(t) && !r.values.length ? _4(e, t) : kr(Ga(j4(r, o), o.values), n) : (Kn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Or(e, t));
};
function Qa(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? qe(e, t, n) : po(e)(e, t);
}
const T4 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => Ke.update(t, n),
    stop: () => mn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ct.isProcessing ? ct.timestamp : yt.now()
  };
}, Ja = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < o; i++)
    r += Math.round(e(i / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Fr = 2e4;
function mo(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Fr; )
    t += n, r = e.next(t);
  return t >= Fr ? 1 / 0 : t;
}
function S4(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), o = Math.min(mo(r), Fr);
  return {
    type: "keyframes",
    ease: (i) => r.next(o * i).value / t,
    duration: /* @__PURE__ */ zt(o)
  };
}
const H4 = 5;
function Wa(e, t, n) {
  const r = Math.max(t - H4, 0);
  return Sa(n - e(r), t - r);
}
const Xe = {
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
}, us = 1e-3;
function D4({ duration: e = Xe.duration, bounce: t = Xe.bounce, velocity: n = Xe.velocity, mass: r = Xe.mass }) {
  let o, i;
  Kn(e <= /* @__PURE__ */ Rt(Xe.maxDuration), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  a = en(Xe.minDamping, Xe.maxDamping, a), e = en(Xe.minDuration, Xe.maxDuration, /* @__PURE__ */ zt(e)), a < 1 ? (o = (u) => {
    const d = u * a, p = d * e, h = d - n, f = Vs(u, a), m = Math.exp(-p);
    return us - h / f * m;
  }, i = (u) => {
    const p = u * a * e, h = p * n + n, f = Math.pow(a, 2) * Math.pow(u, 2) * e, m = Math.exp(-p), v = Vs(Math.pow(u, 2), a);
    return (-o(u) + us > 0 ? -1 : 1) * ((h - f) * m) / v;
  }) : (o = (u) => {
    const d = Math.exp(-u * e), p = (u - n) * e + 1;
    return -us + d * p;
  }, i = (u) => {
    const d = Math.exp(-u * e), p = (n - u) * (e * e);
    return d * p;
  });
  const l = 5 / e, c = P4(o, i, l);
  if (e = /* @__PURE__ */ Rt(e), isNaN(c))
    return {
      stiffness: Xe.stiffness,
      damping: Xe.damping,
      duration: e
    };
  {
    const u = Math.pow(c, 2) * r;
    return {
      stiffness: u,
      damping: a * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const I4 = 12;
function P4(e, t, n) {
  let r = n;
  for (let o = 1; o < I4; o++)
    r = r - e(r) / t(r);
  return r;
}
function Vs(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const A4 = ["duration", "bounce"], B4 = ["stiffness", "damping", "mass"];
function ni(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function R4(e) {
  let t = {
    velocity: Xe.velocity,
    stiffness: Xe.stiffness,
    damping: Xe.damping,
    mass: Xe.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!ni(e, B4) && ni(e, A4))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, i = 2 * en(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: Xe.mass,
        stiffness: o,
        damping: i
      };
    } else {
      const n = D4(e);
      t = {
        ...t,
        ...n,
        mass: Xe.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Zr(e = Xe.visualDuration, t = Xe.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0], a = n.keyframes[n.keyframes.length - 1], l = { done: !1, value: i }, { stiffness: c, damping: u, mass: d, duration: p, velocity: h, isResolvedFromDuration: f } = R4({
    ...n,
    velocity: -/* @__PURE__ */ zt(n.velocity || 0)
  }), m = h || 0, v = u / (2 * Math.sqrt(c * d)), L = a - i, k = /* @__PURE__ */ zt(Math.sqrt(c / d)), y = Math.abs(L) < 5;
  r || (r = y ? Xe.restSpeed.granular : Xe.restSpeed.default), o || (o = y ? Xe.restDelta.granular : Xe.restDelta.default);
  let C;
  if (v < 1) {
    const b = Vs(k, v);
    C = (x) => {
      const N = Math.exp(-v * k * x);
      return a - N * ((m + v * k * L) / b * Math.sin(b * x) + L * Math.cos(b * x));
    };
  } else if (v === 1)
    C = (b) => a - Math.exp(-k * b) * (L + (m + k * L) * b);
  else {
    const b = k * Math.sqrt(v * v - 1);
    C = (x) => {
      const N = Math.exp(-v * k * x), T = Math.min(b * x, 300);
      return a - N * ((m + v * k * L) * Math.sinh(T) + b * L * Math.cosh(T)) / b;
    };
  }
  const w = {
    calculatedDuration: f && p || null,
    next: (b) => {
      const x = C(b);
      if (f)
        l.done = b >= p;
      else {
        let N = b === 0 ? m : 0;
        v < 1 && (N = b === 0 ? /* @__PURE__ */ Rt(m) : Wa(C, b, x));
        const T = Math.abs(N) <= r, _ = Math.abs(a - x) <= o;
        l.done = T && _;
      }
      return l.value = l.done ? a : x, l;
    },
    toString: () => {
      const b = Math.min(mo(w), Fr), x = Ja((N) => w.next(b * N).value, b, 30);
      return b + "ms " + x;
    },
    toTransition: () => {
    }
  };
  return w;
}
Zr.applyToOptions = (e) => {
  const t = S4(e, 100, Zr);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ Rt(t.duration), e.type = "keyframes", e;
};
function Ts({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: l, max: c, restDelta: u = 0.5, restSpeed: d }) {
  const p = e[0], h = {
    done: !1,
    value: p
  }, f = (T) => l !== void 0 && T < l || c !== void 0 && T > c, m = (T) => l === void 0 ? c : c === void 0 || Math.abs(l - T) < Math.abs(c - T) ? l : c;
  let v = n * t;
  const L = p + v, k = a === void 0 ? L : a(L);
  k !== L && (v = k - p);
  const y = (T) => -v * Math.exp(-T / r), C = (T) => k + y(T), w = (T) => {
    const _ = y(T), V = C(T);
    h.done = Math.abs(_) <= u, h.value = h.done ? k : V;
  };
  let b, x;
  const N = (T) => {
    f(h.value) && (b = T, x = Zr({
      keyframes: [h.value, m(h.value)],
      velocity: Wa(C, T, h.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: d
    }));
  };
  return N(0), {
    calculatedDuration: null,
    next: (T) => {
      let _ = !1;
      return !x && b === void 0 && (_ = !0, w(T), N(T)), b !== void 0 && T >= b ? x.next(T - b) : (!_ && w(T), h);
    }
  };
}
function E4(e, t, n) {
  const r = [], o = n || nn.mix || Qa, i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let l = o(e[a], e[a + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[a] || jt : t;
      l = kr(c, l);
    }
    r.push(l);
  }
  return r;
}
function O4(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (tn(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const a = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const l = E4(t, r, o), c = l.length, u = (d) => {
    if (a && d < e[0])
      return t[0];
    let p = 0;
    if (c > 1)
      for (; p < e.length - 2 && !(d < e[p + 1]); p++)
        ;
    const h = /* @__PURE__ */ cr(e[p], e[p + 1], d);
    return l[p](h);
  };
  return n ? (d) => u(en(e[0], e[i - 1], d)) : u;
}
function F4(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ cr(0, t, r);
    e.push(qe(n, 1, o));
  }
}
function Z4(e) {
  const t = [0];
  return F4(t, e.length - 1), t;
}
function U4(e, t) {
  return e.map((n) => n * t);
}
function Y4(e, t) {
  return e.map(() => t || Oa).splice(0, e.length - 1);
}
function An({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = r4(r) ? r.map(Go) : Go(r), i = {
    done: !1,
    value: t[0]
  }, a = U4(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Z4(t),
    e
  ), l = O4(a, t, {
    ease: Array.isArray(o) ? o : Y4(t, o)
  });
  return {
    calculatedDuration: e,
    next: (c) => (i.value = l(c), i.done = c >= e, i)
  };
}
const K4 = (e) => e !== null;
function go(e, { repeat: t, repeatType: n = "loop" }, r, o = 1) {
  const i = e.filter(K4), l = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !l || r === void 0 ? i[l] : r;
}
const z4 = {
  decay: Ts,
  inertia: Ts,
  tween: An,
  keyframes: An,
  spring: Zr
};
function el(e) {
  typeof e.type == "string" && (e.type = z4[e.type]);
}
class vo {
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
const X4 = (e) => e / 100;
class ko extends vo {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var r, o;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== yt.now() && this.tick(yt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (o = (r = this.options).onStop) == null || o.call(r));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    el(t);
    const { type: n = An, repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: a = 0 } = t;
    let { keyframes: l } = t;
    const c = n || An;
    process.env.NODE_ENV !== "production" && c !== An && tn(l.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${l}`), c !== An && typeof l[0] != "number" && (this.mixKeyframes = kr(X4, Qa(l[0], l[1])), l = [0, 100]);
    const u = c({ ...t, keyframes: l });
    i === "mirror" && (this.mirroredGenerator = c({
      ...t,
      keyframes: [...l].reverse(),
      velocity: -a
    })), u.calculatedDuration === null && (u.calculatedDuration = mo(u));
    const { calculatedDuration: d } = u;
    this.calculatedDuration = d, this.resolvedDuration = d + o, this.totalDuration = this.resolvedDuration * (r + 1) - o, this.generator = u;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: o, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: l, calculatedDuration: c } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: u = 0, keyframes: d, repeat: p, repeatType: h, repeatDelay: f, type: m, onUpdate: v, finalKeyframe: L } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const k = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), y = this.playbackSpeed >= 0 ? k < 0 : k > o;
    this.currentTime = Math.max(k, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let C = this.currentTime, w = r;
    if (p) {
      const T = Math.min(this.currentTime, o) / l;
      let _ = Math.floor(T), V = T % 1;
      !V && T >= 1 && (V = 1), V === 1 && _--, _ = Math.min(_, p + 1), !!(_ % 2) && (h === "reverse" ? (V = 1 - V, f && (V -= f / l)) : h === "mirror" && (w = a)), C = en(0, 1, V) * l;
    }
    const b = y ? { done: !1, value: d[0] } : w.next(C);
    i && (b.value = i(b.value));
    let { done: x } = b;
    !y && c !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const N = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
    return N && m !== Ts && (b.value = go(d, this.options, L, this.speed)), v && v(b.value), N && this.finish(), b;
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
    return /* @__PURE__ */ zt(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ zt(this.currentTime);
  }
  set time(t) {
    var n;
    t = /* @__PURE__ */ Rt(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(yt.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ zt(this.currentTime));
  }
  play() {
    var o, i;
    if (this.isStopped)
      return;
    const { driver: t = T4, startTime: n } = this.options;
    this.driver || (this.driver = t((a) => this.tick(a))), (i = (o = this.options).onPlay) == null || i.call(o);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(yt.now()), this.holdTime = this.currentTime;
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
function q4(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const Nn = (e) => e * 180 / Math.PI, Ss = (e) => {
  const t = Nn(Math.atan2(e[1], e[0]));
  return Hs(t);
}, G4 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Ss,
  rotateZ: Ss,
  skewX: (e) => Nn(Math.atan(e[1])),
  skewY: (e) => Nn(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Hs = (e) => (e = e % 360, e < 0 && (e += 360), e), ri = Ss, si = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), oi = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Q4 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: si,
  scaleY: oi,
  scale: (e) => (si(e) + oi(e)) / 2,
  rotateX: (e) => Hs(Nn(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Hs(Nn(Math.atan2(-e[2], e[0]))),
  rotateZ: ri,
  rotate: ri,
  skewX: (e) => Nn(Math.atan(e[4])),
  skewY: (e) => Nn(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Ds(e) {
  return e.includes("scale") ? 1 : 0;
}
function Is(e, t) {
  if (!e || e === "none")
    return Ds(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n)
    r = Q4, o = n;
  else {
    const l = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = G4, o = l;
  }
  if (!o)
    return Ds(t);
  const i = r[t], a = o[1].split(",").map(W4);
  return typeof i == "function" ? i(a) : a[i];
}
const J4 = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Is(n, t);
};
function W4(e) {
  return parseFloat(e.trim());
}
const Xn = [
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
], qn = new Set(Xn), ii = (e) => e === zn || e === Ne, e2 = /* @__PURE__ */ new Set(["x", "y", "z"]), t2 = Xn.filter((e) => !e2.has(e));
function n2(e) {
  const t = [];
  return t2.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const jn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => Is(t, "x"),
  y: (e, { transform: t }) => Is(t, "y")
};
jn.translateX = jn.x;
jn.translateY = jn.y;
const Vn = /* @__PURE__ */ new Set();
let Ps = !1, As = !1, Bs = !1;
function tl() {
  if (As) {
    const e = Array.from(Vn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = n2(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([i, a]) => {
        var l;
        (l = r.getValue(i)) == null || l.set(a);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  As = !1, Ps = !1, Vn.forEach((e) => e.complete(Bs)), Vn.clear();
}
function nl() {
  Vn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (As = !0);
  });
}
function r2() {
  Bs = !0, nl(), tl(), Bs = !1;
}
class Lo {
  constructor(t, n, r, o, i, a = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = a;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Vn.add(this), Ps || (Ps = !0, Ke.read(nl), Ke.resolveKeyframes(tl))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    if (t[0] === null) {
      const i = o == null ? void 0 : o.get(), a = t[t.length - 1];
      if (i !== void 0)
        t[0] = i;
      else if (r && n) {
        const l = r.readValue(n, a);
        l != null && (t[0] = l);
      }
      t[0] === void 0 && (t[0] = a), o && i === void 0 && o.set(t[0]);
    }
    q4(t);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Vn.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Vn.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const s2 = (e) => e.startsWith("--");
function o2(e, t, n) {
  s2(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const i2 = /* @__PURE__ */ so(() => window.ScrollTimeline !== void 0), a2 = {};
function l2(e, t) {
  const n = /* @__PURE__ */ so(e);
  return () => a2[t] ?? n();
}
const rl = /* @__PURE__ */ l2(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), sr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, ai = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ sr([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ sr([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ sr([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ sr([0.33, 1.53, 0.69, 0.99])
};
function sl(e, t) {
  if (e)
    return typeof e == "function" ? rl() ? Ja(e, t) : "ease-out" : Fa(e) ? sr(e) : Array.isArray(e) ? e.map((n) => sl(n, t) || ai.easeOut) : ai[e];
}
function c2(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: a = "loop", ease: l = "easeOut", times: c } = {}, u = void 0) {
  const d = {
    [t]: n
  };
  c && (d.offset = c);
  const p = sl(l, o);
  Array.isArray(p) && (d.easing = p);
  const h = {
    delay: r,
    duration: o,
    easing: Array.isArray(p) ? "linear" : p,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  };
  return u && (h.pseudoElement = u), e.animate(d, h);
}
function ol(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function d2({ type: e, ...t }) {
  return ol(e) && rl() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class u2 extends vo {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: o, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: l, onComplete: c } = t;
    this.isPseudoElement = !!i, this.allowFlatten = a, this.options = t, tn(typeof t.type != "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
    const u = d2(t);
    this.animation = c2(n, r, o, u, i), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !i) {
        const d = go(o, this.options, l, this.speed);
        this.updateMotionValue ? this.updateMotionValue(d) : o2(n, r, d), this.animation.cancel();
      }
      c == null || c(), this.notifyFinished();
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
    return /* @__PURE__ */ zt(Number(t));
  }
  get time() {
    return /* @__PURE__ */ zt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Rt(t);
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
    return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && i2() ? (this.animation.timeline = t, jt) : n(this);
  }
}
const il = {
  anticipate: Ba,
  backInOut: Aa,
  circInOut: Ea
};
function h2(e) {
  return e in il;
}
function f2(e) {
  typeof e.ease == "string" && h2(e.ease) && (e.ease = il[e.ease]);
}
const li = 10;
class p2 extends u2 {
  constructor(t) {
    f2(t), el(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
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
    const l = new ko({
      ...a,
      autoplay: !1
    }), c = /* @__PURE__ */ Rt(this.finishedTime ?? this.time);
    n.setWithVelocity(l.sample(c - li).value, l.sample(c).value, li), l.stop();
  }
}
const ci = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(gn.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function m2(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function g2(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], a = ci(o, t), l = ci(i, t);
  return Kn(a === l, `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`), !a || !l ? !1 : m2(e) || (n === "spring" || ol(n)) && r;
}
function yo(e) {
  return Va(e) && "offsetHeight" in e;
}
const v2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), k2 = /* @__PURE__ */ so(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function L2(e) {
  var u;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: o, damping: i, type: a } = e;
  if (!yo((u = t == null ? void 0 : t.owner) == null ? void 0 : u.current))
    return !1;
  const { onUpdate: l, transformTemplate: c } = t.owner.getProps();
  return k2() && n && v2.has(n) && (n !== "transform" || !c) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !r && o !== "mirror" && i !== 0 && a !== "inertia";
}
const y2 = 40;
class w2 extends vo {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: l, name: c, motionValue: u, element: d, ...p }) {
    var m;
    super(), this.stop = () => {
      var v, L;
      this._animation && (this._animation.stop(), (v = this.stopTimeline) == null || v.call(this)), (L = this.keyframeResolver) == null || L.cancel();
    }, this.createdAt = yt.now();
    const h = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: i,
      repeatType: a,
      name: c,
      motionValue: u,
      element: d,
      ...p
    }, f = (d == null ? void 0 : d.KeyframeResolver) || Lo;
    this.keyframeResolver = new f(l, (v, L, k) => this.onKeyframesResolved(v, L, h, !k), c, u, d), (m = this.keyframeResolver) == null || m.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, o) {
    this.keyframeResolver = void 0;
    const { name: i, type: a, velocity: l, delay: c, isHandoff: u, onUpdate: d } = r;
    this.resolvedAt = yt.now(), g2(t, i, a, l) || ((nn.instantAnimations || !c) && (d == null || d(go(t, r, n))), t[0] = t[t.length - 1], r.duration = 0, r.repeat = 0);
    const h = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > y2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, f = !u && L2(h) ? new p2({
      ...h,
      element: h.motionValue.owner.current
    }) : new ko(h);
    f.finished.then(() => this.notifyFinished()).catch(jt), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
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
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), r2()), this._animation;
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
const C2 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function M2(e) {
  const t = C2.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const b2 = 4;
function al(e, t, n = 1) {
  tn(n <= b2, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = M2(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return ja(a) ? parseFloat(a) : a;
  }
  return uo(o) ? al(o, t, n + 1) : o;
}
function wo(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const ll = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Xn
]), x2 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, cl = (e) => (t) => t.test(e), dl = [zn, Ne, Xt, hn, m4, p4, x2], di = (e) => dl.find(cl(e));
function _2(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Ta(e) : !0;
}
const $2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function N2(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ho) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = $2.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const j2 = /\b([a-z-]*)\(.*?\)/gu, Rs = {
  ...gn,
  getAnimatableNone: (e) => {
    const t = e.match(j2);
    return t ? t.map(N2).join(" ") : e;
  }
}, ui = {
  ...zn,
  transform: Math.round
}, V2 = {
  rotate: hn,
  rotateX: hn,
  rotateY: hn,
  rotateZ: hn,
  scale: Vr,
  scaleX: Vr,
  scaleY: Vr,
  scaleZ: Vr,
  skew: hn,
  skewX: hn,
  skewY: hn,
  distance: Ne,
  translateX: Ne,
  translateY: Ne,
  translateZ: Ne,
  x: Ne,
  y: Ne,
  z: Ne,
  perspective: Ne,
  transformPerspective: Ne,
  opacity: dr,
  originX: Jo,
  originY: Jo,
  originZ: Ne
}, Co = {
  // Border props
  borderWidth: Ne,
  borderTopWidth: Ne,
  borderRightWidth: Ne,
  borderBottomWidth: Ne,
  borderLeftWidth: Ne,
  borderRadius: Ne,
  radius: Ne,
  borderTopLeftRadius: Ne,
  borderTopRightRadius: Ne,
  borderBottomRightRadius: Ne,
  borderBottomLeftRadius: Ne,
  // Positioning props
  width: Ne,
  maxWidth: Ne,
  height: Ne,
  maxHeight: Ne,
  top: Ne,
  right: Ne,
  bottom: Ne,
  left: Ne,
  // Spacing props
  padding: Ne,
  paddingTop: Ne,
  paddingRight: Ne,
  paddingBottom: Ne,
  paddingLeft: Ne,
  margin: Ne,
  marginTop: Ne,
  marginRight: Ne,
  marginBottom: Ne,
  marginLeft: Ne,
  // Misc
  backgroundPositionX: Ne,
  backgroundPositionY: Ne,
  ...V2,
  zIndex: ui,
  // SVG
  fillOpacity: dr,
  strokeOpacity: dr,
  numOctaves: ui
}, T2 = {
  ...Co,
  // Color props
  color: rt,
  backgroundColor: rt,
  outlineColor: rt,
  fill: rt,
  stroke: rt,
  // Border props
  borderColor: rt,
  borderTopColor: rt,
  borderRightColor: rt,
  borderBottomColor: rt,
  borderLeftColor: rt,
  filter: Rs,
  WebkitFilter: Rs
}, ul = (e) => T2[e];
function hl(e, t) {
  let n = ul(e);
  return n !== Rs && (n = gn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const S2 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function H2(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !S2.has(i) && ur(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = hl(n, o);
}
class D2 extends Lo {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let u = t[c];
      if (typeof u == "string" && (u = u.trim(), uo(u))) {
        const d = al(u, n.current);
        d !== void 0 && (t[c] = d), c === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !ll.has(r) || t.length !== 2)
      return;
    const [o, i] = t, a = di(o), l = di(i);
    if (a !== l)
      if (ii(a) && ii(l))
        for (let c = 0; c < t.length; c++) {
          const u = t[c];
          typeof u == "string" && (t[c] = parseFloat(u));
        }
      else jn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      (t[o] === null || _2(t[o])) && r.push(o);
    r.length && H2(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = jn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var l;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current)
      return;
    const o = t.getValue(n);
    o && o.jump(this.measuredOrigin, !1);
    const i = r.length - 1, a = r[i];
    r[i] = jn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), (l = this.removedTransforms) != null && l.length && this.removedTransforms.forEach(([c, u]) => {
      t.getValue(c).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function I2(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const o = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
const fl = (e, t) => t && typeof e == "number" ? t.transform(e) : e, hi = 30, P2 = (e) => !isNaN(parseFloat(e));
class A2 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      var a, l;
      const i = yt.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((a = this.events.change) == null || a.notify(this.current), this.dependents))
        for (const c of this.dependents)
          c.dirty();
      o && ((l = this.events.renderRequest) == null || l.notify(this.current));
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = yt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = P2(this.current));
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
    return process.env.NODE_ENV !== "production" && io(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new oo());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), Ke.read(() => {
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
    const t = yt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > hi)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, hi);
    return Sa(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Fn(e, t) {
  return new A2(e, t);
}
const { schedule: Mo } = /* @__PURE__ */ Za(queueMicrotask, !1), Bt = {
  x: !1,
  y: !1
};
function pl() {
  return Bt.x || Bt.y;
}
function B2(e) {
  return e === "x" || e === "y" ? Bt[e] ? null : (Bt[e] = !0, () => {
    Bt[e] = !1;
  }) : Bt.x || Bt.y ? null : (Bt.x = Bt.y = !0, () => {
    Bt.x = Bt.y = !1;
  });
}
function ml(e, t) {
  const n = I2(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function fi(e) {
  return !(e.pointerType === "touch" || pl());
}
function R2(e, t, n = {}) {
  const [r, o, i] = ml(e, n), a = (l) => {
    if (!fi(l))
      return;
    const { target: c } = l, u = t(c, l);
    if (typeof u != "function" || !c)
      return;
    const d = (p) => {
      fi(p) && (u(p), c.removeEventListener("pointerleave", d));
    };
    c.addEventListener("pointerleave", d, o);
  };
  return r.forEach((l) => {
    l.addEventListener("pointerenter", a, o);
  }), i;
}
const gl = (e, t) => t ? e === t ? !0 : gl(e, t.parentElement) : !1, bo = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, E2 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function O2(e) {
  return E2.has(e.tagName) || e.tabIndex !== -1;
}
const Ar = /* @__PURE__ */ new WeakSet();
function pi(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function hs(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const F2 = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = pi(() => {
    if (Ar.has(n))
      return;
    hs(n, "down");
    const o = pi(() => {
      hs(n, "up");
    }), i = () => hs(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function mi(e) {
  return bo(e) && !pl();
}
function Z2(e, t, n = {}) {
  const [r, o, i] = ml(e, n), a = (l) => {
    const c = l.currentTarget;
    if (!mi(l))
      return;
    Ar.add(c);
    const u = t(c, l), d = (f, m) => {
      window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", h), Ar.has(c) && Ar.delete(c), mi(f) && typeof u == "function" && u(f, { success: m });
    }, p = (f) => {
      d(f, c === window || c === document || n.useGlobalTarget || gl(c, f.target));
    }, h = (f) => {
      d(f, !1);
    };
    window.addEventListener("pointerup", p, o), window.addEventListener("pointercancel", h, o);
  };
  return r.forEach((l) => {
    (n.useGlobalTarget ? window : l).addEventListener("pointerdown", a, o), yo(l) && (l.addEventListener("focus", (u) => F2(u, o)), !O2(l) && !l.hasAttribute("tabindex") && (l.tabIndex = 0));
  }), i;
}
function vl(e) {
  return Va(e) && "ownerSVGElement" in e;
}
function U2(e) {
  return vl(e) && e.tagName === "svg";
}
const pt = (e) => !!(e && e.getVelocity), Y2 = [...dl, rt, gn], K2 = (e) => Y2.find(cl(e)), xo = Yn({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class z2 extends Qs.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, o = yo(r) && r.offsetWidth || 0, i = this.props.sizeRef.current;
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
function X2({ children: e, isPresent: t, anchorX: n, root: r }) {
  const o = Js(), i = ae(null), a = ae({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: l } = ft(xo);
  return Ca(() => {
    const { width: c, height: u, top: d, left: p, right: h } = a.current;
    if (t || !i.current || !c || !u)
      return;
    const f = n === "left" ? `left: ${p}` : `right: ${h}`;
    i.current.dataset.motionPopId = o;
    const m = document.createElement("style");
    l && (m.nonce = l);
    const v = r ?? document.head;
    return v.appendChild(m), m.sheet && m.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${f}px !important;
            top: ${d}px !important;
          }
        `), () => {
      v.removeChild(m), v.contains(m) && v.removeChild(m);
    };
  }, [t]), s(z2, { isPresent: t, childRef: i, sizeRef: a, children: Qs.cloneElement(e, { ref: i }) });
}
const q2 = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a, anchorX: l, root: c }) => {
  const u = eo(G2), d = Js();
  let p = !0, h = j(() => (p = !1, {
    id: d,
    initial: t,
    isPresent: n,
    custom: o,
    onExitComplete: (f) => {
      u.set(f, !0);
      for (const m of u.values())
        if (!m)
          return;
      r && r();
    },
    register: (f) => (u.set(f, !1), () => u.delete(f))
  }), [n, u, r]);
  return i && p && (h = { ...h }), j(() => {
    u.forEach((f, m) => u.set(m, !1));
  }, [n]), Qs.useEffect(() => {
    !n && !u.size && r && r();
  }, [n]), a === "popLayout" && (e = s(X2, { isPresent: n, anchorX: l, root: c, children: e })), s(qr.Provider, { value: h, children: e });
};
function G2() {
  return /* @__PURE__ */ new Map();
}
function kl(e = !0) {
  const t = ft(qr);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, i = Js();
  de(() => {
    if (e)
      return o(i);
  }, [e]);
  const a = M(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, a] : [!0];
}
const Tr = (e) => e.key || "";
function gi(e) {
  const t = [];
  return Yc.forEach(e, (n) => {
    Kc(n) && t.push(n);
  }), t;
}
const Q2 = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: i = "sync", propagate: a = !1, anchorX: l = "left", root: c }) => {
  const [u, d] = kl(a), p = j(() => gi(e), [e]), h = a && !u ? [] : p.map(Tr), f = ae(!0), m = ae(p), v = eo(() => /* @__PURE__ */ new Map()), [L, k] = F(p), [y, C] = F(p);
  Na(() => {
    f.current = !1, m.current = p;
    for (let x = 0; x < y.length; x++) {
      const N = Tr(y[x]);
      h.includes(N) ? v.delete(N) : v.get(N) !== !0 && v.set(N, !1);
    }
  }, [y, h.length, h.join("-")]);
  const w = [];
  if (p !== L) {
    let x = [...p];
    for (let N = 0; N < y.length; N++) {
      const T = y[N], _ = Tr(T);
      h.includes(_) || (x.splice(N, 0, T), w.push(T));
    }
    return i === "wait" && w.length && (x = w), C(gi(x)), k(p), null;
  }
  process.env.NODE_ENV !== "production" && i === "wait" && y.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: b } = ft(Ws);
  return s(tt, { children: y.map((x) => {
    const N = Tr(x), T = a && !u ? !1 : p === y || h.includes(N), _ = () => {
      if (v.has(N))
        v.set(N, !0);
      else
        return;
      let V = !0;
      v.forEach((H) => {
        H || (V = !1);
      }), V && (b == null || b(), C(m.current), a && (d == null || d()), r && r());
    };
    return s(q2, { isPresent: T, initial: !f.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: o, mode: i, root: c, onExitComplete: T ? void 0 : _, anchorX: l, children: x }, N);
  }) });
}, Ll = Yn({ strict: !1 }), vi = {
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
}, Zn = {};
for (const e in vi)
  Zn[e] = {
    isEnabled: (t) => vi[e].some((n) => !!t[n])
  };
function J2(e) {
  for (const t in e)
    Zn[t] = {
      ...Zn[t],
      ...e[t]
    };
}
const W2 = /* @__PURE__ */ new Set([
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
function Ur(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || W2.has(e);
}
let yl = (e) => !Ur(e);
function ef(e) {
  typeof e == "function" && (yl = (t) => t.startsWith("on") ? !Ur(t) : e(t));
}
try {
  ef(require("@emotion/is-prop-valid").default);
} catch {
}
function tf(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (yl(o) || n === !0 && Ur(o) || !t && !Ur(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function nf(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && io(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
const Gr = /* @__PURE__ */ Yn({});
function Qr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function hr(e) {
  return typeof e == "string" || Array.isArray(e);
}
const _o = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], $o = ["initial", ..._o];
function Jr(e) {
  return Qr(e.animate) || $o.some((t) => hr(e[t]));
}
function wl(e) {
  return !!(Jr(e) || e.variants);
}
function rf(e, t) {
  if (Jr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || hr(n) ? n : void 0,
      animate: hr(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function sf(e) {
  const { initial: t, animate: n } = rf(e, ft(Gr));
  return j(() => ({ initial: t, animate: n }), [ki(t), ki(n)]);
}
function ki(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const of = Symbol.for("motionComponentSymbol");
function Bn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function af(e, t, n) {
  return M(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Bn(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const No = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), lf = "framerAppearId", Cl = "data-" + No(lf), Ml = Yn({});
function cf(e, t, n, r, o) {
  var v, L;
  const { visualElement: i } = ft(Gr), a = ft(Ll), l = ft(qr), c = ft(xo).reducedMotion, u = ae(null);
  r = r || a.renderer, !u.current && r && (u.current = r(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = u.current, p = ft(Ml);
  d && !d.projection && o && (d.type === "html" || d.type === "svg") && df(u.current, n, o, p);
  const h = ae(!1);
  Ca(() => {
    d && h.current && d.update(n, l);
  });
  const f = n[Cl], m = ae(!!f && !((v = window.MotionHandoffIsComplete) != null && v.call(window, f)) && ((L = window.MotionHasOptimisedAnimation) == null ? void 0 : L.call(window, f)));
  return Na(() => {
    d && (h.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Mo.render(d.render), m.current && d.animationState && d.animationState.animateChanges());
  }), de(() => {
    d && (!m.current && d.animationState && d.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      var k;
      (k = window.MotionHandoffMarkAsComplete) == null || k.call(window, f);
    }), m.current = !1));
  }), d;
}
function df(e, t, n, r) {
  const { layoutId: o, layout: i, drag: a, dragConstraints: l, layoutScroll: c, layoutRoot: u, layoutCrossfade: d } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : bl(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!a || l && Bn(l),
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
    layoutScroll: c,
    layoutRoot: u
  });
}
function bl(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : bl(e.parent);
}
function uf({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && J2(e);
  function i(l, c) {
    let u;
    const d = {
      ...ft(xo),
      ...l,
      layoutId: hf(l)
    }, { isStatic: p } = d, h = sf(l), f = r(l, p);
    if (!p && to) {
      ff(d, e);
      const m = pf(d);
      u = m.MeasureLayout, h.visualElement = cf(o, f, d, t, m.ProjectionNode);
    }
    return g(Gr.Provider, { value: h, children: [u && h.visualElement ? s(u, { visualElement: h.visualElement, ...d }) : null, n(o, l, af(f, h.visualElement, c), f, p, h.visualElement)] });
  }
  i.displayName = `motion.${typeof o == "string" ? o : `create(${o.displayName ?? o.name ?? ""})`}`;
  const a = Ma(i);
  return a[of] = o, a;
}
function hf({ layoutId: e }) {
  const t = ft(Ws).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function ff(e, t) {
  const n = ft(Ll).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Kn(!1, r) : tn(!1, r);
  }
}
function pf(e) {
  const { drag: t, layout: n } = Zn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const fr = {};
function mf(e) {
  for (const t in e)
    fr[t] = e[t], co(t) && (fr[t].isCSSVariable = !0);
}
function xl(e, { layout: t, layoutId: n }) {
  return qn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!fr[e] || e === "opacity");
}
const gf = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, vf = Xn.length;
function kf(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < vf; i++) {
    const a = Xn[i], l = e[a];
    if (l === void 0)
      continue;
    let c = !0;
    if (typeof l == "number" ? c = l === (a.startsWith("scale") ? 1 : 0) : c = parseFloat(l) === 0, !c || n) {
      const u = fl(l, Co[a]);
      if (!c) {
        o = !1;
        const d = gf[a] || a;
        r += `${d}(${u}) `;
      }
      n && (t[a] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function jo(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let a = !1, l = !1;
  for (const c in t) {
    const u = t[c];
    if (qn.has(c)) {
      a = !0;
      continue;
    } else if (co(c)) {
      o[c] = u;
      continue;
    } else {
      const d = fl(u, Co[c]);
      c.startsWith("origin") ? (l = !0, i[c] = d) : r[c] = d;
    }
  }
  if (t.transform || (a || n ? r.transform = kf(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
    const { originX: c = "50%", originY: u = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${c} ${u} ${d}`;
  }
}
const Vo = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function _l(e, t, n) {
  for (const r in t)
    !pt(t[r]) && !xl(r, n) && (e[r] = t[r]);
}
function Lf({ transformTemplate: e }, t) {
  return j(() => {
    const n = Vo();
    return jo(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function yf(e, t) {
  const n = e.style || {}, r = {};
  return _l(r, n, e), Object.assign(r, Lf(e, t)), r;
}
function wf(e, t) {
  const n = {}, r = yf(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const Cf = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Mf = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function bf(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? Cf : Mf;
  e[i.offset] = Ne.transform(-r);
  const a = Ne.transform(t), l = Ne.transform(n);
  e[i.array] = `${a} ${l}`;
}
function $l(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: o,
  pathSpacing: i = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, c, u, d) {
  if (jo(e, l, u), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: h } = e;
  p.transform && (h.transform = p.transform, delete p.transform), (h.transform || p.transformOrigin) && (h.transformOrigin = p.transformOrigin ?? "50% 50%", delete p.transformOrigin), h.transform && (h.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box", delete p.transformBox), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), o !== void 0 && bf(p, o, i, a, !1);
}
const Nl = () => ({
  ...Vo(),
  attrs: {}
}), jl = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function xf(e, t, n, r) {
  const o = j(() => {
    const i = Nl();
    return $l(i, t, jl(r), e.transformTemplate, e.style), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    _l(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
const _f = [
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
function To(e) {
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
      !!(_f.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function $f(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const c = (To(n) ? xf : wf)(r, i, a, n), u = tf(r, typeof n == "string", e), d = n !== vr ? { ...u, ...c, ref: o } : {}, { children: p } = r, h = j(() => pt(p) ? p.get() : p, [p]);
    return zc(n, {
      ...d,
      children: h
    });
  };
}
function Li(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function So(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = Li(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = Li(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function Br(e) {
  return pt(e) ? e.get() : e;
}
function Nf({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, o) {
  return {
    latestValues: jf(n, r, o, e),
    renderState: t()
  };
}
const Vl = (e) => (t, n) => {
  const r = ft(Gr), o = ft(qr), i = () => Nf(e, t, r, o);
  return n ? i() : eo(i);
};
function jf(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const h in i)
    o[h] = Br(i[h]);
  let { initial: a, animate: l } = e;
  const c = Jr(e), u = wl(e);
  t && u && !c && e.inherit !== !1 && (a === void 0 && (a = t.initial), l === void 0 && (l = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || a === !1;
  const p = d ? l : a;
  if (p && typeof p != "boolean" && !Qr(p)) {
    const h = Array.isArray(p) ? p : [p];
    for (let f = 0; f < h.length; f++) {
      const m = So(e, h[f]);
      if (m) {
        const { transitionEnd: v, transition: L, ...k } = m;
        for (const y in k) {
          let C = k[y];
          if (Array.isArray(C)) {
            const w = d ? C.length - 1 : 0;
            C = C[w];
          }
          C !== null && (o[y] = C);
        }
        for (const y in v)
          o[y] = v[y];
      }
    }
  }
  return o;
}
function Ho(e, t, n) {
  var i;
  const { style: r } = e, o = {};
  for (const a in r)
    (pt(r[a]) || t.style && pt(t.style[a]) || xl(a, e) || ((i = n == null ? void 0 : n.getValue(a)) == null ? void 0 : i.liveStyle) !== void 0) && (o[a] = r[a]);
  return o;
}
const Vf = {
  useVisualState: Vl({
    scrapeMotionValuesFromProps: Ho,
    createRenderState: Vo
  })
};
function Tl(e, t, n) {
  const r = Ho(e, t, n);
  for (const o in e)
    if (pt(e[o]) || pt(t[o])) {
      const i = Xn.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
const Tf = {
  useVisualState: Vl({
    scrapeMotionValuesFromProps: Tl,
    createRenderState: Nl
  })
};
function Sf(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const a = {
      ...To(r) ? Tf : Vf,
      preloadedFeatures: e,
      useRender: $f(o),
      createVisualElement: t,
      Component: r
    };
    return uf(a);
  };
}
function pr(e, t, n) {
  const r = e.getProps();
  return So(r, t, n !== void 0 ? n : r.custom, e);
}
const Es = (e) => Array.isArray(e);
function Hf(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Fn(n));
}
function Df(e) {
  return Es(e) ? e[e.length - 1] || 0 : e;
}
function If(e, t) {
  const n = pr(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const a in i) {
    const l = Df(i[a]);
    Hf(e, a, l);
  }
}
function Pf(e) {
  return !!(pt(e) && e.add);
}
function Os(e, t) {
  const n = e.getValue("willChange");
  if (Pf(n))
    return n.add(t);
  if (!n && nn.WillChange) {
    const r = new nn.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Sl(e) {
  return e.props[Cl];
}
const Af = (e) => e !== null;
function Bf(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(Af), i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return o[i];
}
const Rf = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Ef = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Of = {
  type: "keyframes",
  duration: 0.8
}, Ff = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Zf = (e, { keyframes: t }) => t.length > 2 ? Of : qn.has(e) ? e.startsWith("scale") ? Ef(t[1]) : Rf : Ff;
function Uf({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: l, from: c, elapsed: u, ...d }) {
  return !!Object.keys(d).length;
}
const Do = (e, t, n, r = {}, o, i) => (a) => {
  const l = wo(r, e) || {}, c = l.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ Rt(c);
  const d = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...l,
    delay: -u,
    onUpdate: (h) => {
      t.set(h), l.onUpdate && l.onUpdate(h);
    },
    onComplete: () => {
      a(), l.onComplete && l.onComplete();
    },
    name: e,
    motionValue: t,
    element: i ? void 0 : o
  };
  Uf(l) || Object.assign(d, Zf(e, d)), d.duration && (d.duration = /* @__PURE__ */ Rt(d.duration)), d.repeatDelay && (d.repeatDelay = /* @__PURE__ */ Rt(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
  let p = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0, d.delay === 0 && (p = !0)), (nn.instantAnimations || nn.skipAnimations) && (p = !0, d.duration = 0, d.delay = 0), d.allowFlatten = !l.type && !l.ease, p && !i && t.get() !== void 0) {
    const h = Bf(d.keyframes, l);
    if (h !== void 0) {
      Ke.update(() => {
        d.onUpdate(h), d.onComplete();
      });
      return;
    }
  }
  return l.isSync ? new ko(d) : new w2(d);
};
function Yf({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Hl(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const p = e.getValue(d, e.latestValues[d] ?? null), h = l[d];
    if (h === void 0 || u && Yf(u, d))
      continue;
    const f = {
      delay: n,
      ...wo(i || {}, d)
    }, m = p.get();
    if (m !== void 0 && !p.isAnimating && !Array.isArray(h) && h === m && !f.velocity)
      continue;
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const k = Sl(e);
      if (k) {
        const y = window.MotionHandoffAnimation(k, d, Ke);
        y !== null && (f.startTime = y, v = !0);
      }
    }
    Os(e, d), p.start(Do(d, p, h, e.shouldReduceMotion && ll.has(d) ? { type: !1 } : f, e, v));
    const L = p.animation;
    L && c.push(L);
  }
  return a && Promise.all(c).then(() => {
    Ke.update(() => {
      a && If(e, a);
    });
  }), c;
}
function Fs(e, t, n = {}) {
  var c;
  const r = pr(e, t, n.type === "exit" ? (c = e.presenceContext) == null ? void 0 : c.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(Hl(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: d = 0, staggerChildren: p, staggerDirection: h } = o;
    return Kf(e, t, u, d, p, h, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [u, d] = l === "beforeChildren" ? [i, a] : [a, i];
    return u().then(() => d());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function Kf(e, t, n = 0, r = 0, o = 0, i = 1, a) {
  const l = [], c = e.variantChildren.size, u = (c - 1) * o, d = typeof r == "function", p = d ? (h) => r(h, c) : (
    // Support deprecated staggerChildren
    i === 1 ? (h = 0) => h * o : (h = 0) => u - h * o
  );
  return Array.from(e.variantChildren).sort(zf).forEach((h, f) => {
    h.notify("AnimationStart", t), l.push(Fs(h, t, {
      ...a,
      delay: n + (d ? 0 : r) + p(f)
    }).then(() => h.notify("AnimationComplete", t)));
  }), Promise.all(l);
}
function zf(e, t) {
  return e.sortNodePosition(t);
}
function Xf(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Fs(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Fs(e, t, n);
  else {
    const o = typeof t == "function" ? pr(e, t, n.custom) : t;
    r = Promise.all(Hl(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Dl(e, t) {
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
const qf = $o.length;
function Il(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Il(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < qf; n++) {
    const r = $o[n], o = e.props[r];
    (hr(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const Gf = [..._o].reverse(), Qf = _o.length;
function Jf(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Xf(e, n, r)));
}
function Wf(e) {
  let t = Jf(e), n = yi(), r = !0;
  const o = (c) => (u, d) => {
    var h;
    const p = pr(e, d, c === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
    if (p) {
      const { transition: f, transitionEnd: m, ...v } = p;
      u = { ...u, ...v, ...m };
    }
    return u;
  };
  function i(c) {
    t = c(e);
  }
  function a(c) {
    const { props: u } = e, d = Il(e.parent) || {}, p = [], h = /* @__PURE__ */ new Set();
    let f = {}, m = 1 / 0;
    for (let L = 0; L < Qf; L++) {
      const k = Gf[L], y = n[k], C = u[k] !== void 0 ? u[k] : d[k], w = hr(C), b = k === c ? y.isActive : null;
      b === !1 && (m = L);
      let x = C === d[k] && C !== u[k] && w;
      if (x && r && e.manuallyAnimateOnMount && (x = !1), y.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !y.isActive && b === null || // If we didn't and don't have any defined prop for this animation type
      !C && !y.prevProp || // Or if the prop doesn't define an animation
      Qr(C) || typeof C == "boolean")
        continue;
      const N = ep(y.prevProp, C);
      let T = N || // If we're making this variant active, we want to always make it active
      k === c && y.isActive && !x && w || // If we removed a higher-priority variant (i is in reverse order)
      L > m && w, _ = !1;
      const V = Array.isArray(C) ? C : [C];
      let H = V.reduce(o(k), {});
      b === !1 && (H = {});
      const { prevResolvedValues: S = {} } = y, A = {
        ...S,
        ...H
      }, O = (R) => {
        T = !0, h.has(R) && (_ = !0, h.delete(R)), y.needsAnimating[R] = !0;
        const q = e.getValue(R);
        q && (q.liveStyle = !1);
      };
      for (const R in A) {
        const q = H[R], J = S[R];
        if (f.hasOwnProperty(R))
          continue;
        let z = !1;
        Es(q) && Es(J) ? z = !Dl(q, J) : z = q !== J, z ? q != null ? O(R) : h.add(R) : q !== void 0 && h.has(R) ? O(R) : y.protectedKeys[R] = !0;
      }
      y.prevProp = C, y.prevResolvedValues = H, y.isActive && (f = { ...f, ...H }), r && e.blockInitialAnimation && (T = !1), T && (!(x && N) || _) && p.push(...V.map((R) => ({
        animation: R,
        options: { type: k }
      })));
    }
    if (h.size) {
      const L = {};
      if (typeof u.initial != "boolean") {
        const k = pr(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        k && k.transition && (L.transition = k.transition);
      }
      h.forEach((k) => {
        const y = e.getBaseTarget(k), C = e.getValue(k);
        C && (C.liveStyle = !0), L[k] = y ?? null;
      }), p.push({ animation: L });
    }
    let v = !!p.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(p) : Promise.resolve();
  }
  function l(c, u) {
    var p;
    if (n[c].isActive === u)
      return Promise.resolve();
    (p = e.variantChildren) == null || p.forEach((h) => {
      var f;
      return (f = h.animationState) == null ? void 0 : f.setActive(c, u);
    }), n[c].isActive = u;
    const d = a(c);
    for (const h in n)
      n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = yi(), r = !0;
    }
  };
}
function ep(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Dl(t, e) : !1;
}
function kn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function yi() {
  return {
    animate: kn(!0),
    whileInView: kn(),
    whileHover: kn(),
    whileTap: kn(),
    whileDrag: kn(),
    whileFocus: kn(),
    exit: kn()
  };
}
class vn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class tp extends vn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Wf(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Qr(t) && (this.unmountControls = t.subscribe(this.node));
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
let np = 0;
class rp extends vn {
  constructor() {
    super(...arguments), this.id = np++;
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
const sp = {
  animation: {
    Feature: tp
  },
  exit: {
    Feature: rp
  }
};
function mr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function wr(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const op = (e) => (t) => bo(t) && e(t, wr(t));
function ir(e, t, n, r) {
  return mr(e, t, op(n), r);
}
function Pl({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function ip({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function ap(e, t) {
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
const Al = 1e-4, lp = 1 - Al, cp = 1 + Al, Bl = 0.01, dp = 0 - Bl, up = 0 + Bl;
function gt(e) {
  return e.max - e.min;
}
function hp(e, t, n) {
  return Math.abs(e - t) <= n;
}
function wi(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = qe(t.min, t.max, e.origin), e.scale = gt(n) / gt(t), e.translate = qe(n.min, n.max, e.origin) - e.originPoint, (e.scale >= lp && e.scale <= cp || isNaN(e.scale)) && (e.scale = 1), (e.translate >= dp && e.translate <= up || isNaN(e.translate)) && (e.translate = 0);
}
function ar(e, t, n, r) {
  wi(e.x, t.x, n.x, r ? r.originX : void 0), wi(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ci(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + gt(t);
}
function fp(e, t, n) {
  Ci(e.x, t.x, n.x), Ci(e.y, t.y, n.y);
}
function Mi(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + gt(t);
}
function lr(e, t, n) {
  Mi(e.x, t.x, n.x), Mi(e.y, t.y, n.y);
}
const bi = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Rn = () => ({
  x: bi(),
  y: bi()
}), xi = () => ({ min: 0, max: 0 }), We = () => ({
  x: xi(),
  y: xi()
});
function Nt(e) {
  return [e("x"), e("y")];
}
function fs(e) {
  return e === void 0 || e === 1;
}
function Zs({ scale: e, scaleX: t, scaleY: n }) {
  return !fs(e) || !fs(t) || !fs(n);
}
function _n(e) {
  return Zs(e) || Rl(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Rl(e) {
  return _i(e.x) || _i(e.y);
}
function _i(e) {
  return e && e !== "0%";
}
function Yr(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function $i(e, t, n, r, o) {
  return o !== void 0 && (e = Yr(e, o, r)), Yr(e, n, r) + t;
}
function Us(e, t = 0, n = 1, r, o) {
  e.min = $i(e.min, t, n, r, o), e.max = $i(e.max, t, n, r, o);
}
function El(e, { x: t, y: n }) {
  Us(e.x, t.translate, t.scale, t.originPoint), Us(e.y, n.translate, n.scale, n.originPoint);
}
const Ni = 0.999999999999, ji = 1.0000000000001;
function pp(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let l = 0; l < o; l++) {
    i = n[l], a = i.projectionDelta;
    const { visualElement: c } = i.options;
    c && c.props.style && c.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && On(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, El(e, a)), r && _n(i.latestValues) && On(e, i.latestValues));
  }
  t.x < ji && t.x > Ni && (t.x = 1), t.y < ji && t.y > Ni && (t.y = 1);
}
function En(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Vi(e, t, n, r, o = 0.5) {
  const i = qe(e.min, e.max, o);
  Us(e, t, n, i, r);
}
function On(e, t) {
  Vi(e.x, t.x, t.scaleX, t.scale, t.originX), Vi(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Ol(e, t) {
  return Pl(ap(e.getBoundingClientRect(), t));
}
function mp(e, t, n) {
  const r = Ol(e, n), { scroll: o } = t;
  return o && (En(r.x, o.offset.x), En(r.y, o.offset.y)), r;
}
const Fl = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Ti = (e, t) => Math.abs(e - t);
function gp(e, t) {
  const n = Ti(e.x, t.x), r = Ti(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Zl {
  constructor(t, n, { transformPagePoint: r, contextWindow: o = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = ms(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, m = gp(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!f && !m)
        return;
      const { point: v } = h, { timestamp: L } = ct;
      this.history.push({ ...v, timestamp: L });
      const { onStart: k, onMove: y } = this.handlers;
      f || (k && k(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, f) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = ps(f, this.transformPagePoint), Ke.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, f) => {
      this.end();
      const { onEnd: m, onSessionEnd: v, resumeAnimation: L } = this.handlers;
      if (this.dragSnapToOrigin && L && L(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const k = ms(h.type === "pointercancel" ? this.lastMoveEventInfo : ps(f, this.transformPagePoint), this.history);
      this.startEvent && m && m(h, k), v && v(h, k);
    }, !bo(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = a, this.contextWindow = o || window;
    const l = wr(t), c = ps(l, this.transformPagePoint), { point: u } = c, { timestamp: d } = ct;
    this.history = [{ ...u, timestamp: d }];
    const { onSessionStart: p } = n;
    p && p(t, ms(c, this.history)), this.removeListeners = kr(ir(this.contextWindow, "pointermove", this.handlePointerMove), ir(this.contextWindow, "pointerup", this.handlePointerUp), ir(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), mn(this.updatePoint);
  }
}
function ps(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Si(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ms({ point: e }, t) {
  return {
    point: e,
    delta: Si(e, Ul(t)),
    offset: Si(e, vp(t)),
    velocity: kp(t, 0.1)
  };
}
function vp(e) {
  return e[0];
}
function Ul(e) {
  return e[e.length - 1];
}
function kp(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Ul(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ Rt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = /* @__PURE__ */ zt(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Lp(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? qe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? qe(n, e, r.max) : Math.min(e, n)), e;
}
function Hi(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function yp(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Hi(e.x, n, o),
    y: Hi(e.y, t, r)
  };
}
function Di(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function wp(e, t) {
  return {
    x: Di(e.x, t.x),
    y: Di(e.y, t.y)
  };
}
function Cp(e, t) {
  let n = 0.5;
  const r = gt(e), o = gt(t);
  return o > r ? n = /* @__PURE__ */ cr(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ cr(e.min, e.max - o, t.min)), en(0, 1, n);
}
function Mp(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Ys = 0.35;
function bp(e = Ys) {
  return e === !1 ? e = 0 : e === !0 && (e = Ys), {
    x: Ii(e, "left", "right"),
    y: Ii(e, "top", "bottom")
  };
}
function Ii(e, t, n) {
  return {
    min: Pi(e, t),
    max: Pi(e, n)
  };
}
function Pi(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const xp = /* @__PURE__ */ new WeakMap();
class _p {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = We(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const i = (p) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(wr(p).point);
    }, a = (p, h) => {
      const { drag: f, dragPropagation: m, onDragStart: v } = this.getProps();
      if (f && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = B2(f), !this.openDragLock))
        return;
      this.latestPointerEvent = p, this.latestPanInfo = h, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Nt((k) => {
        let y = this.getAxisMotionValue(k).get() || 0;
        if (Xt.test(y)) {
          const { projection: C } = this.visualElement;
          if (C && C.layout) {
            const w = C.layout.layoutBox[k];
            w && (y = gt(w) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[k] = y;
      }), v && Ke.postRender(() => v(p, h)), Os(this.visualElement, "transform");
      const { animationState: L } = this.visualElement;
      L && L.setActive("whileDrag", !0);
    }, l = (p, h) => {
      this.latestPointerEvent = p, this.latestPanInfo = h;
      const { dragPropagation: f, dragDirectionLock: m, onDirectionLock: v, onDrag: L } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: k } = h;
      if (m && this.currentDirection === null) {
        this.currentDirection = $p(k), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, k), this.updateAxis("y", h.point, k), this.visualElement.render(), L && L(p, h);
    }, c = (p, h) => {
      this.latestPointerEvent = p, this.latestPanInfo = h, this.stop(p, h), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => Nt((p) => {
      var h;
      return this.getAnimationState(p) === "paused" && ((h = this.getAxisMotionValue(p).animation) == null ? void 0 : h.play());
    }), { dragSnapToOrigin: d } = this.getProps();
    this.panSession = new Zl(t, {
      onSessionStart: i,
      onStart: a,
      onMove: l,
      onSessionEnd: c,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: d,
      distanceThreshold: r,
      contextWindow: Fl(this.visualElement)
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
    const { onDragEnd: l } = this.getProps();
    l && Ke.postRender(() => l(r, o));
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
    if (!r || !Sr(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = Lp(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, o = this.constraints;
    t && Bn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = yp(r.layoutBox, t) : this.constraints = !1, this.elastic = bp(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Nt((a) => {
      this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = Mp(r.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Bn(t))
      return !1;
    const r = t.current;
    tn(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = mp(r, o.root, this.visualElement.getTransformPagePoint());
    let a = wp(o.layout.layoutBox, i);
    if (n) {
      const l = n(ip(a));
      this.hasMutatedConstraints = !!l, l && (a = Pl(l));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: l } = this.getProps(), c = this.constraints || {}, u = Nt((d) => {
      if (!Sr(d, n, this.currentDirection))
        return;
      let p = c && c[d] || {};
      a && (p = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, f = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: r ? t[d] : 0,
        bounceStiffness: h,
        bounceDamping: f,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...p
      };
      return this.startAxisValueAnimation(d, m);
    });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Os(this.visualElement, t), r.start(Do(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Nt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Nt((t) => {
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
    Nt((n) => {
      const { drag: r } = this.getProps();
      if (!Sr(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: l } = o.layout.layoutBox[n];
        i.set(t[n] - qe(a, l, 0.5));
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
    if (!Bn(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Nt((a) => {
      const l = this.getAxisMotionValue(a);
      if (l && this.constraints !== !1) {
        const c = l.get();
        o[a] = Cp({ min: c, max: c }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Nt((a) => {
      if (!Sr(a, t, null))
        return;
      const l = this.getAxisMotionValue(a), { min: c, max: u } = this.constraints[a];
      l.set(qe(c, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    xp.set(this.visualElement, this);
    const t = this.visualElement.current, n = ir(t, "pointerdown", (c) => {
      const { drag: u, dragListener: d = !0 } = this.getProps();
      u && d && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      Bn(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), Ke.read(r);
    const a = mr(window, "resize", () => this.scalePositionWithinConstraints()), l = o.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: u }) => {
      this.isDragging && u && (Nt((d) => {
        const p = this.getAxisMotionValue(d);
        p && (this.originPoint[d] += c[d].translate, p.set(p.get() + c[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), i(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Ys, dragMomentum: l = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: l
    };
  }
}
function Sr(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function $p(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Np extends vn {
  constructor(t) {
    super(t), this.removeGroupControls = jt, this.removeListeners = jt, this.controls = new _p(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || jt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ai = (e) => (t, n) => {
  e && Ke.postRender(() => e(t, n));
};
class jp extends vn {
  constructor() {
    super(...arguments), this.removePointerDownListener = jt;
  }
  onPointerDown(t) {
    this.session = new Zl(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Fl(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Ai(t),
      onStart: Ai(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && Ke.postRender(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ir(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Rr = {
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
function Bi(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Jn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (Ne.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Bi(e, t.target.x), r = Bi(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Vp = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = gn.parse(e);
    if (o.length > 5)
      return r;
    const i = gn.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, l = n.x.scale * t.x, c = n.y.scale * t.y;
    o[0 + a] /= l, o[1 + a] /= c;
    const u = qe(l, c, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
let Ri = !1;
class Tp extends Xc {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    mf(Sp), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), Ri && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Rr.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, { projection: a } = r;
    return a && (a.isPresent = i, Ri = !0, o || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || Ke.postRender(() => {
      const l = a.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Mo.postRender(() => {
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
function Yl(e) {
  const [t, n] = kl(), r = ft(Ws);
  return s(Tp, { ...e, layoutGroup: r, switchLayoutGroup: ft(Ml), isPresent: t, safeToRemove: n });
}
const Sp = {
  borderRadius: {
    ...Jn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Jn,
  borderTopRightRadius: Jn,
  borderBottomLeftRadius: Jn,
  borderBottomRightRadius: Jn,
  boxShadow: Vp
};
function Hp(e, t, n) {
  const r = pt(e) ? e : Fn(e);
  return r.start(Do("", r, t, n)), r.animation;
}
const Dp = (e, t) => e.depth - t.depth;
class Ip {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    no(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    ro(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Dp), this.isDirty = !1, this.children.forEach(t);
  }
}
function Pp(e, t) {
  const n = yt.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (mn(r), e(i - t));
  };
  return Ke.setup(r, !0), () => mn(r);
}
const Kl = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Ap = Kl.length, Ei = (e) => typeof e == "string" ? parseFloat(e) : e, Oi = (e) => typeof e == "number" || Ne.test(e);
function Bp(e, t, n, r, o, i) {
  o ? (e.opacity = qe(0, n.opacity ?? 1, Rp(r)), e.opacityExit = qe(t.opacity ?? 1, 0, Ep(r))) : i && (e.opacity = qe(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let a = 0; a < Ap; a++) {
    const l = `border${Kl[a]}Radius`;
    let c = Fi(t, l), u = Fi(n, l);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || Oi(c) === Oi(u) ? (e[l] = Math.max(qe(Ei(c), Ei(u), r), 0), (Xt.test(u) || Xt.test(c)) && (e[l] += "%")) : e[l] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = qe(t.rotate || 0, n.rotate || 0, r));
}
function Fi(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Rp = /* @__PURE__ */ zl(0, 0.5, Ra), Ep = /* @__PURE__ */ zl(0.5, 0.95, jt);
function zl(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ cr(e, t, r));
}
function Zi(e, t) {
  e.min = t.min, e.max = t.max;
}
function xt(e, t) {
  Zi(e.x, t.x), Zi(e.y, t.y);
}
function Ui(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Yi(e, t, n, r, o) {
  return e -= t, e = Yr(e, 1 / n, r), o !== void 0 && (e = Yr(e, 1 / o, r)), e;
}
function Op(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (Xt.test(t) && (t = parseFloat(t), t = qe(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let l = qe(i.min, i.max, r);
  e === i && (l -= t), e.min = Yi(e.min, t, n, l, o), e.max = Yi(e.max, t, n, l, o);
}
function Ki(e, t, [n, r, o], i, a) {
  Op(e, t[n], t[r], t[o], t.scale, i, a);
}
const Fp = ["x", "scaleX", "originX"], Zp = ["y", "scaleY", "originY"];
function zi(e, t, n, r) {
  Ki(e.x, t, Fp, n ? n.x : void 0, r ? r.x : void 0), Ki(e.y, t, Zp, n ? n.y : void 0, r ? r.y : void 0);
}
function Xi(e) {
  return e.translate === 0 && e.scale === 1;
}
function Xl(e) {
  return Xi(e.x) && Xi(e.y);
}
function qi(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Up(e, t) {
  return qi(e.x, t.x) && qi(e.y, t.y);
}
function Gi(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ql(e, t) {
  return Gi(e.x, t.x) && Gi(e.y, t.y);
}
function Qi(e) {
  return gt(e.x) / gt(e.y);
}
function Ji(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Yp {
  constructor() {
    this.members = [];
  }
  add(t) {
    no(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (ro(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function Kp(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, a = (n == null ? void 0 : n.z) || 0;
  if ((o || i || a) && (r = `translate3d(${o}px, ${i}px, ${a}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: d, rotateX: p, rotateY: h, skewX: f, skewY: m } = n;
    u && (r = `perspective(${u}px) ${r}`), d && (r += `rotate(${d}deg) `), p && (r += `rotateX(${p}deg) `), h && (r += `rotateY(${h}deg) `), f && (r += `skewX(${f}deg) `), m && (r += `skewY(${m}deg) `);
  }
  const l = e.x.scale * t.x, c = e.y.scale * t.y;
  return (l !== 1 || c !== 1) && (r += `scale(${l}, ${c})`), r || "none";
}
const gs = ["", "X", "Y", "Z"], zp = 1e3;
let Xp = 0;
function vs(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Gl(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Sl(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Ke, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Gl(r);
}
function Ql({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, l = t == null ? void 0 : t()) {
      this.id = Xp++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Qp), this.nodes.forEach(t0), this.nodes.forEach(n0), this.nodes.forEach(Jp);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Ip());
    }
    addEventListener(a, l) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new oo()), this.eventHandlers.get(a).add(l);
    }
    notifyListeners(a, ...l) {
      const c = this.eventHandlers.get(a);
      c && c.notify(...l);
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
      this.isSVG = vl(a) && !U2(a), this.instance = a;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (c || l) && (this.isLayoutDirty = !0), e) {
        let d, p = 0;
        const h = () => this.root.updateBlockedByResize = !1;
        Ke.read(() => {
          p = window.innerWidth;
        }), e(a, () => {
          const f = window.innerWidth;
          f !== p && (p = f, this.root.updateBlockedByResize = !0, d && d(), d = Pp(h, 250), Rr.hasAnimatedSinceResize && (Rr.hasAnimatedSinceResize = !1, this.nodes.forEach(ta)));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: p, hasRelativeLayoutChanged: h, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || u.getDefaultTransition() || a0, { onLayoutAnimationStart: v, onLayoutAnimationComplete: L } = u.getProps(), k = !this.targetLayout || !ql(this.targetLayout, f), y = !p && h;
        if (this.options.layoutRoot || this.resumeFrom || y || p && (k || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const C = {
            ...wo(m, "layout"),
            onPlay: v,
            onComplete: L
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0, C.type = !1), this.startAnimation(C), this.setAnimationOrigin(d, y);
        } else
          p || ta(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = f;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), mn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(r0), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Gl(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const p = this.path[d];
        p.shouldResetTransform = !0, p.updateScroll("snapshot"), p.options.layoutRoot && p.willUpdate(!1);
      }
      const { layoutId: l, layout: c } = this.options;
      if (l === void 0 && !c)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Wi);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ea);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(e0), this.nodes.forEach(qp), this.nodes.forEach(Gp)) : this.nodes.forEach(ea), this.clearAllSnapshots();
      const l = yt.now();
      ct.delta = en(0, 1e3 / 60, l - ct.timestamp), ct.timestamp = l, ct.isProcessing = !0, as.update.process(ct), as.preRender.process(ct), as.render.process(ct), ct.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Mo.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Wp), this.sharedNodes.forEach(s0);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ke.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ke.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !gt(this.snapshot.measuredBox.x) && !gt(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = We(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (l = !1), l && this.instance) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: a,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !Xl(this.projectionDelta), c = this.getTransformTemplate(), u = c ? c(this.latestValues, "") : void 0, d = u !== this.prevTransformTemplateValue;
      a && this.instance && (l || _n(this.latestValues) || d) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const l = this.measurePageBox();
      let c = this.removeElementScroll(l);
      return a && (c = this.removeTransform(c)), l0(c), {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var u;
      const { visualElement: a } = this.options;
      if (!a)
        return We();
      const l = a.measureViewportBox();
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(c0))) {
        const { scroll: d } = this.root;
        d && (En(l.x, d.offset.x), En(l.y, d.offset.y));
      }
      return l;
    }
    removeElementScroll(a) {
      var c;
      const l = We();
      if (xt(l, a), (c = this.scroll) != null && c.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u], { scroll: p, options: h } = d;
        d !== this.root && p && h.layoutScroll && (p.wasRoot && xt(l, a), En(l.x, p.offset.x), En(l.y, p.offset.y));
      }
      return l;
    }
    applyTransform(a, l = !1) {
      const c = We();
      xt(c, a);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !l && d.options.layoutScroll && d.scroll && d !== d.root && On(c, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), _n(d.latestValues) && On(c, d.latestValues);
      }
      return _n(this.latestValues) && On(c, this.latestValues), c;
    }
    removeTransform(a) {
      const l = We();
      xt(l, a);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !_n(u.latestValues))
          continue;
        Zs(u.latestValues) && u.updateSnapshot();
        const d = We(), p = u.measurePageBox();
        xt(d, p), zi(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d);
      }
      return _n(this.latestValues) && zi(l, this.latestValues), l;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ct.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var h;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(a || c && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: p } = this.options;
      if (!(!this.layout || !(d || p))) {
        if (this.resolvedRelativeTargetAt = ct.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = We(), this.relativeTargetOrigin = We(), lr(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = We(), this.targetWithTransforms = We()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), fp(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : xt(this.target, this.layout.layoutBox), El(this.target, this.targetDelta)) : xt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = We(), this.relativeTargetOrigin = We(), lr(this.relativeTargetOrigin, this.target, f.target), xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Zs(this.parent.latestValues) || Rl(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var m;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || (m = this.parent) != null && m.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === ct.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      xt(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x, h = this.treeScale.y;
      pp(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = We());
      const { target: f } = a;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ui(this.prevProjectionDelta.x, this.projectionDelta.x), Ui(this.prevProjectionDelta.y, this.projectionDelta.y)), ar(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== p || this.treeScale.y !== h || !Ji(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ji(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      var l;
      if ((l = this.options.visualElement) == null || l.scheduleRender(), a) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Rn(), this.projectionDelta = Rn(), this.projectionDeltaWithTransform = Rn();
    }
    setAnimationOrigin(a, l = !1) {
      const c = this.snapshot, u = c ? c.latestValues : {}, d = { ...this.latestValues }, p = Rn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const h = We(), f = c ? c.source : void 0, m = this.layout ? this.layout.source : void 0, v = f !== m, L = this.getStack(), k = !L || L.members.length <= 1, y = !!(v && !k && this.options.crossfade === !0 && !this.path.some(i0));
      this.animationProgress = 0;
      let C;
      this.mixTargetDelta = (w) => {
        const b = w / 1e3;
        na(p.x, a.x, b), na(p.y, a.y, b), this.setTargetDelta(p), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (lr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), o0(this.relativeTarget, this.relativeTargetOrigin, h, b), C && Up(this.relativeTarget, C) && (this.isProjectionDirty = !1), C || (C = We()), xt(C, this.relativeTarget)), v && (this.animationValues = d, Bp(d, u, this.latestValues, b, y, k)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      var l, c, u;
      this.notifyListeners("animationStart"), (l = this.currentAnimation) == null || l.stop(), (u = (c = this.resumingFrom) == null ? void 0 : c.currentAnimation) == null || u.stop(), this.pendingAnimation && (mn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ke.update(() => {
        Rr.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Fn(0)), this.currentAnimation = Hp(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(zp), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: l, target: c, layout: u, latestValues: d } = a;
      if (!(!l || !c || !u)) {
        if (this !== a && this.layout && u && Jl(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || We();
          const p = gt(this.layout.layoutBox.x);
          c.x.min = a.target.x.min, c.x.max = c.x.min + p;
          const h = gt(this.layout.layoutBox.y);
          c.y.min = a.target.y.min, c.y.max = c.y.min + h;
        }
        xt(l, c), On(l, d), ar(this.projectionDeltaWithTransform, this.layoutCorrected, l, d);
      }
    }
    registerSharedNode(a, l) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new Yp()), this.sharedNodes.get(a).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var l;
      const { layoutId: a } = this.options;
      return a ? ((l = this.getStack()) == null ? void 0 : l.lead) || this : this;
    }
    getPrevLead() {
      var l;
      const { layoutId: a } = this.options;
      return a ? (l = this.getStack()) == null ? void 0 : l.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: l, preserveFollowOpacity: c } = {}) {
      const u = this.getStack();
      u && u.promote(this, c), a && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({ transition: l });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let l = !1;
      const { latestValues: c } = a;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (l = !0), !l)
        return;
      const u = {};
      c.z && vs("z", a, u, this.animationValues);
      for (let d = 0; d < gs.length; d++)
        vs(`rotate${gs[d]}`, a, u, this.animationValues), vs(`skew${gs[d]}`, a, u, this.animationValues);
      a.render();
      for (const d in u)
        a.setStaticValue(d, u[d]), this.animationValues && (this.animationValues[d] = u[d]);
      a.scheduleRender();
    }
    applyProjectionStyles(a, l) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        a.visibility = "hidden";
        return;
      }
      const c = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, a.visibility = "", a.opacity = "", a.pointerEvents = Br(l == null ? void 0 : l.pointerEvents) || "", a.transform = c ? c(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (a.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, a.pointerEvents = Br(l == null ? void 0 : l.pointerEvents) || ""), this.hasProjected && !_n(this.latestValues) && (a.transform = c ? c({}, "") : "none", this.hasProjected = !1);
        return;
      }
      a.visibility = "";
      const d = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let p = Kp(this.projectionDeltaWithTransform, this.treeScale, d);
      c && (p = c(d, p)), a.transform = p;
      const { x: h, y: f } = this.projectionDelta;
      a.transformOrigin = `${h.origin * 100}% ${f.origin * 100}% 0`, u.animationValues ? a.opacity = u === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : a.opacity = u === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const m in fr) {
        if (d[m] === void 0)
          continue;
        const { correct: v, applyTo: L, isCSSVariable: k } = fr[m], y = p === "none" ? d[m] : v(d[m], u);
        if (L) {
          const C = L.length;
          for (let w = 0; w < C; w++)
            a[L[w]] = y;
        } else
          k ? this.options.visualElement.renderState.vars[m] = y : a[m] = y;
      }
      this.options.layoutId && (a.pointerEvents = u === this ? Br(l == null ? void 0 : l.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var l;
        return (l = a.currentAnimation) == null ? void 0 : l.stop();
      }), this.root.nodes.forEach(Wi), this.root.sharedNodes.clear();
    }
  };
}
function qp(e) {
  e.updateLayout();
}
function Gp(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
    i === "size" ? Nt((p) => {
      const h = a ? t.measuredBox[p] : t.layoutBox[p], f = gt(h);
      h.min = r[p].min, h.max = h.min + f;
    }) : Jl(i, t.layoutBox, r) && Nt((p) => {
      const h = a ? t.measuredBox[p] : t.layoutBox[p], f = gt(r[p]);
      h.max = h.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[p].max = e.relativeTarget[p].min + f);
    });
    const l = Rn();
    ar(l, r, t.layoutBox);
    const c = Rn();
    a ? ar(c, e.applyTransform(o, !0), t.measuredBox) : ar(c, r, t.layoutBox);
    const u = !Xl(l);
    let d = !1;
    if (!e.resumeFrom) {
      const p = e.getClosestProjectingParent();
      if (p && !p.resumeFrom) {
        const { snapshot: h, layout: f } = p;
        if (h && f) {
          const m = We();
          lr(m, t.layoutBox, h.layoutBox);
          const v = We();
          lr(v, r, f.layoutBox), ql(m, v) || (d = !0), p.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = m, e.relativeParent = p);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: c,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Qp(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Jp(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Wp(e) {
  e.clearSnapshot();
}
function Wi(e) {
  e.clearMeasurements();
}
function ea(e) {
  e.isLayoutDirty = !1;
}
function e0(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function ta(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function t0(e) {
  e.resolveTargetDelta();
}
function n0(e) {
  e.calcProjection();
}
function r0(e) {
  e.resetSkewAndRotation();
}
function s0(e) {
  e.removeLeadSnapshot();
}
function na(e, t, n) {
  e.translate = qe(t.translate, 0, n), e.scale = qe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ra(e, t, n, r) {
  e.min = qe(t.min, n.min, r), e.max = qe(t.max, n.max, r);
}
function o0(e, t, n, r) {
  ra(e.x, t.x, n.x, r), ra(e.y, t.y, n.y, r);
}
function i0(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const a0 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, sa = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), oa = sa("applewebkit/") && !sa("chrome/") ? Math.round : jt;
function ia(e) {
  e.min = oa(e.min), e.max = oa(e.max);
}
function l0(e) {
  ia(e.x), ia(e.y);
}
function Jl(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !hp(Qi(t), Qi(n), 0.2);
}
function c0(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const d0 = Ql({
  attachResizeListener: (e, t) => mr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ks = {
  current: void 0
}, Wl = Ql({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!ks.current) {
      const e = new d0({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), ks.current = e;
    }
    return ks.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), u0 = {
  pan: {
    Feature: jp
  },
  drag: {
    Feature: Np,
    ProjectionNode: Wl,
    MeasureLayout: Yl
  }
};
function aa(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, i = r[o];
  i && Ke.postRender(() => i(t, wr(t)));
}
class h0 extends vn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = R2(t, (n, r) => (aa(this.node, r, "Start"), (o) => aa(this.node, o, "End"))));
  }
  unmount() {
  }
}
class f0 extends vn {
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
    this.unmount = kr(mr(this.node.current, "focus", () => this.onFocus()), mr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function la(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), i = r[o];
  i && Ke.postRender(() => i(t, wr(t)));
}
class p0 extends vn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Z2(t, (n, r) => (la(this.node, r, "Start"), (o, { success: i }) => la(this.node, o, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ks = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), m0 = (e) => {
  const t = Ks.get(e.target);
  t && t(e);
}, g0 = (e) => {
  e.forEach(m0);
};
function v0({ root: e, ...t }) {
  const n = e || document;
  Ls.has(n) || Ls.set(n, {});
  const r = Ls.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(g0, { root: e, ...t })), r[o];
}
function k0(e, t, n) {
  const r = v0(t);
  return Ks.set(e, n), r.observe(e), () => {
    Ks.delete(e), r.unobserve(e);
  };
}
const L0 = {
  some: 0,
  all: 1
};
class y0 extends vn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : L0[o]
    }, l = (c) => {
      const { isIntersecting: u } = c;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: d, onViewportLeave: p } = this.node.getProps(), h = u ? d : p;
      h && h(c);
    };
    return k0(this.node.current, a, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(w0(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function w0({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const C0 = {
  inView: {
    Feature: y0
  },
  tap: {
    Feature: p0
  },
  focus: {
    Feature: f0
  },
  hover: {
    Feature: h0
  }
}, M0 = {
  layout: {
    ProjectionNode: Wl,
    MeasureLayout: Yl
  }
}, zs = { current: null }, ec = { current: !1 };
function b0() {
  if (ec.current = !0, !!to)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => zs.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      zs.current = !1;
}
const x0 = /* @__PURE__ */ new WeakMap();
function _0(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (pt(o))
      e.addValue(r, o);
    else if (pt(i))
      e.addValue(r, Fn(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const a = e.getValue(r);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = e.getStaticValue(r);
        e.addValue(r, Fn(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const ca = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class $0 {
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
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: i, visualState: a }, l = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Lo, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = yt.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, Ke.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: u } = a;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = l, this.blockInitialAnimation = !!i, this.isControllingVariants = Jr(n), this.isVariantNode = wl(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...p } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in p) {
      const f = p[h];
      c[h] !== void 0 && pt(f) && f.set(c[h], !1);
    }
  }
  mount(t) {
    this.current = t, x0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), ec.current || b0(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : zs.current, process.env.NODE_ENV !== "production" && io(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), mn(this.notifyUpdate), mn(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = qn.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (l) => {
      this.latestValues[t] = l, this.props.onUpdate && Ke.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in Zn) {
      const n = Zn[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : We();
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
    for (let r = 0; r < ca.length; r++) {
      const o = ca[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = "on" + o, a = t[i];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = _0(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return r === void 0 && n !== void 0 && (r = Fn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (ja(r) || Ta(r)) ? r = parseFloat(r) : !K2(r) && gn.test(n) && (r = hl(t, n)), this.setBaseTarget(t, pt(r) ? r.get() : r)), pt(r) ? r.get() : r;
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
      const a = So(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
      a && (r = a[t]);
    }
    if (n && r !== void 0)
      return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !pt(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new oo()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class tc extends $0 {
  constructor() {
    super(...arguments), this.KeyframeResolver = D2;
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
    pt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function nc(e, { style: t, vars: n }, r, o) {
  const i = e.style;
  let a;
  for (a in t)
    i[a] = t[a];
  o == null || o.applyProjectionStyles(i, r);
  for (a in n)
    i.setProperty(a, n[a]);
}
function N0(e) {
  return window.getComputedStyle(e);
}
class j0 extends tc {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = nc;
  }
  readValueFromInstance(t, n) {
    var r;
    if (qn.has(n))
      return (r = this.projection) != null && r.isProjecting ? Ds(n) : J4(t, n);
    {
      const o = N0(t), i = (co(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Ol(t, n);
  }
  build(t, n, r) {
    jo(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ho(t, n, r);
  }
}
const rc = /* @__PURE__ */ new Set([
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
function V0(e, t, n, r) {
  nc(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(rc.has(o) ? o : No(o), t.attrs[o]);
}
class T0 extends tc {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = We;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (qn.has(n)) {
      const r = ul(n);
      return r && r.default || 0;
    }
    return n = rc.has(n) ? n : No(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Tl(t, n, r);
  }
  build(t, n, r) {
    $l(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, o) {
    V0(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = jl(t.tagName), super.mount(t);
  }
}
const S0 = (e, t) => To(e) ? new T0(t) : new j0(t, {
  allowProjection: e !== vr
}), H0 = /* @__PURE__ */ Sf({
  ...sp,
  ...C0,
  ...u0,
  ...M0
}, S0), dt = /* @__PURE__ */ nf(H0), Dn = "land-popover", at = ({
  show: e,
  content: t,
  trigger: n = "hover",
  onVisibleChange: r,
  theme: o = "light",
  placement: i = "top",
  hideArrow: a = !1,
  attach: l = "parent",
  className: c = "",
  style: u,
  popoverClassName: d = "",
  popoverStyle: p,
  children: h
}) => {
  const [f, m] = F(e ?? !1), [v, L] = F(null), [k, y] = F({ width: 0, height: 0 }), [C, w] = F(i), [b, x] = F(!1), N = ae(null), T = ae(null), _ = ae(r), V = ae(!0), H = ae(i);
  de(() => {
    _.current = r, H.current = i;
  }), de(() => (V.current = !0, () => {
    V.current = !1;
  }), []);
  const S = 8, A = 8, O = 12, U = l === "body";
  de(() => {
    e !== void 0 && m(e);
  }, [e]), de(() => {
    if (!f && U) {
      const D = setTimeout(() => {
        x(!1), L(null);
      }, 150);
      return () => clearTimeout(D);
    }
  }, [f, U]);
  const re = ae(f);
  de(() => {
    var D;
    re.current !== f && (re.current = f, (D = _.current) == null || D.call(_, f));
  }, [f]);
  const R = ae(k);
  R.current = k;
  const q = ae();
  q.current = () => {
    if (!N.current || !U || !V.current) return;
    const D = R.current;
    if (D.width === 0 || D.height === 0) return;
    const he = N.current.getBoundingClientRect(), ne = window.innerWidth, ge = window.innerHeight, I = (se) => {
      switch (se) {
        case "top":
          return {
            top: he.top - D.height - S,
            left: he.left + (he.width - D.width) / 2
          };
        case "bottom":
          return {
            top: he.bottom + S,
            left: he.left + (he.width - D.width) / 2
          };
        case "left":
          return {
            top: he.top + (he.height - D.height) / 2,
            left: he.left - D.width - S
          };
        case "right":
          return {
            top: he.top + (he.height - D.height) / 2,
            left: he.right + S
          };
      }
    }, E = (se, ve) => {
      const { top: _e, left: Se } = se, we = _e + D.height, Ie = Se + D.width;
      return ve === "top" || ve === "bottom" ? _e >= A && we <= ge - A : Se >= A && Ie <= ne - A;
    }, W = (se) => ({
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    })[se];
    let fe = H.current, K = I(fe);
    if (!E(K, fe)) {
      const se = W(fe), ve = I(se);
      E(ve, se) && (fe = se, K = ve);
    }
    let { top: P, left: oe } = K;
    P = Math.max(A, Math.min(ge - D.height - A, P)), oe = Math.max(A, Math.min(ne - D.width - A, oe)), L((se) => se && se.top === P && se.left === oe ? se : { top: P, left: oe }), w((se) => se === fe ? se : fe), x(!0);
  }, de(() => {
    if (!U || !f) return;
    const D = () => {
      var he;
      return (he = q.current) == null ? void 0 : he.call(q);
    };
    return window.addEventListener("resize", D), window.addEventListener("scroll", D, !0), () => {
      window.removeEventListener("resize", D), window.removeEventListener("scroll", D, !0);
    };
  }, [U, f]), de(() => {
    if (!T.current || !f || !U) return;
    const D = new ResizeObserver((he) => {
      for (const ne of he) {
        const { width: ge, height: I } = ne.target.getBoundingClientRect();
        y((E) => E.width === ge && E.height === I ? E : { width: ge, height: I });
      }
    });
    return D.observe(T.current), () => D.disconnect();
  }, [f, U]), de(() => {
    var D;
    f && U && k.width > 0 && k.height > 0 && ((D = q.current) == null || D.call(q));
  }, [f, U, k]), de(() => {
    if (n !== "click" || !f) return;
    const D = (he) => {
      N.current && !N.current.contains(he.target) && m(!1);
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [n, f]);
  const J = M(() => {
    n === "hover" && e === void 0 && m(!0);
  }, [n, e]), z = M(() => {
    n === "hover" && e === void 0 && m(!1);
  }, [n, e]), Q = M(() => {
    n === "click" && e === void 0 && m((D) => !D);
  }, [n, e]), X = j(() => ({
    top: {
      bottom: "100%",
      left: "50%",
      marginBottom: `${S}px`
    },
    bottom: {
      top: "100%",
      left: "50%",
      marginTop: `${S}px`
    },
    left: {
      right: "100%",
      top: "50%",
      marginRight: `${S}px`
    },
    right: {
      left: "100%",
      top: "50%",
      marginLeft: `${S}px`
    }
  })[i], [i, S]), $ = j(() => {
    const D = {
      top: 45,
      bottom: -135,
      left: -45,
      right: 135
    };
    if (!U)
      return {
        ...{
          top: { left: "50%", top: "100%" },
          bottom: { left: "50%", top: "0" },
          left: { left: "100%", top: "50%" },
          right: { left: "0", top: "50%" }
        }[i],
        transform: `translate(-50%, -50%) rotate(${D[i]}deg)`
      };
    if (!N.current || k.width === 0 || k.height === 0 || !v)
      return {};
    const he = N.current.getBoundingClientRect(), ne = he.left + he.width / 2, ge = he.top + he.height / 2, I = (W, fe) => Math.max(O, Math.min(fe - O, W)), E = D[C];
    switch (C) {
      case "top":
        return {
          left: `${I(ne - v.left, k.width) / k.width * 100}%`,
          top: "100%",
          transform: `translate(-50%, -50%) rotate(${E}deg)`
        };
      case "bottom":
        return {
          left: `${I(ne - v.left, k.width) / k.width * 100}%`,
          top: "0",
          transform: `translate(-50%, -50%) rotate(${E}deg)`
        };
      case "left":
        return {
          left: "100%",
          top: `${I(ge - v.top, k.height) / k.height * 100}%`,
          transform: `translate(-50%, -50%) rotate(${E}deg)`
        };
      case "right":
        return {
          left: "0",
          top: `${I(ge - v.top, k.height) / k.height * 100}%`,
          transform: `translate(-50%, -50%) rotate(${E}deg)`
        };
    }
  }, [U, i, C, v, k, O]), Z = j(() => [Dn, c].filter(Boolean).join(" "), [c]), te = j(() => [
    `${Dn}__bubble`,
    `${Dn}__bubble--${o}`,
    f && `${Dn}__bubble--visible`,
    a && `${Dn}__bubble--no-arrow`,
    d
  ].filter(Boolean).join(" "), [o, f, a, d]), pe = j(() => {
    const D = {
      zIndex: U ? 1e3 : 100,
      pointerEvents: f ? "auto" : "none",
      ...p
    };
    return U ? !v || !b ? {
      ...D,
      position: "fixed",
      visibility: "hidden",
      opacity: 0
    } : {
      ...D,
      position: "fixed",
      top: v.top,
      left: v.left
    } : {
      ...D,
      position: "absolute",
      ...X
    };
  }, [U, v, X, f, p, b]);
  if (!t)
    return /* @__PURE__ */ s(tt, { children: h });
  const ue = j(() => U ? f && b : f, [U, f, b]), le = M(() => {
    const D = U ? C : i;
    if (U) {
      const ge = {
        top: { y: 4 },
        bottom: { y: -4 },
        left: { x: 4 },
        right: { x: -4 }
      }[D];
      return {
        hidden: {
          opacity: 0,
          scale: 0.96,
          x: ge.x ?? 0,
          y: ge.y ?? 0
        },
        visible: {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0
        }
      };
    }
    return {
      top: {
        hidden: { opacity: 0, x: "-50%", y: 0 },
        visible: { opacity: 1, x: "-50%", y: -4 }
      },
      bottom: {
        hidden: { opacity: 0, x: "-50%", y: 0 },
        visible: { opacity: 1, x: "-50%", y: 4 }
      },
      left: {
        hidden: { opacity: 0, x: 0, y: "-50%" },
        visible: { opacity: 1, x: -4, y: "-50%" }
      },
      right: {
        hidden: { opacity: 0, x: 0, y: "-50%" },
        visible: { opacity: 1, x: 4, y: "-50%" }
      }
    }[D];
  }, [U, C, i]), be = j(() => ({
    duration: 0.15,
    delay: 0.15,
    ease: [0.65, 0.05, 0.36, 1]
    // Material Design 标准缓动曲线
  }), []);
  return /* @__PURE__ */ g(
    "div",
    {
      ref: N,
      className: Z,
      style: u,
      onMouseEnter: J,
      onMouseLeave: z,
      onClick: Q,
      children: [
        h,
        /* @__PURE__ */ g(
          dt.div,
          {
            ref: T,
            className: te,
            style: pe,
            variants: le(),
            initial: "hidden",
            animate: ue ? "visible" : "hidden",
            transition: be,
            children: [
              t,
              !a && /* @__PURE__ */ s("div", { className: `${Dn}__arrow`, style: $ })
            ]
          }
        )
      ]
    }
  );
}, D0 = ({
  animation: e = !0,
  transform: t,
  children: n,
  underline: r,
  className: o = "",
  ...i
}) => {
  const a = [
    "land-link-wave",
    e && "land-link-wave--animation",
    t && "land-link-wave--transform",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ g(Kr, { underline: t ? "always" : r, className: a, ...i, children: [
    n,
    /* @__PURE__ */ s("div", { className: "land-link-wave__line" })
  ] });
}, sn = "land-link", I0 = {
  default: "var(--color-blue-",
  primary: "var(--color-primary-",
  success: "var(--color-green-",
  danger: "var(--color-red-",
  warning: "var(--color-orange-"
}, Kr = ({
  href: e,
  target: t = "_self",
  status: n = "default",
  size: r = "default",
  anchor: o,
  disabled: i = !1,
  underline: a = "hover",
  tip: l,
  popoverProps: c,
  startIcon: u,
  endIcon: d,
  children: p,
  onClick: h,
  style: f,
  className: m = ""
}) => {
  const v = I0[n], L = j(
    () => [
      sn,
      `${sn}--${n}`,
      `${sn}--size-${r}`,
      a !== "none" && `${sn}--underline-${a}`,
      i && `${sn}--disabled`,
      l && "hover-pop",
      m
    ].filter(Boolean).join(" "),
    [n, r, a, i, l, m]
  ), k = j(
    () => ({
      "--land-link-color": `${v}6)`,
      "--land-link-hover-color": `${v}7)`,
      "--land-link-active-color": `${v}8)`,
      "--land-link-disabled-color": `${v}3)`,
      ...f
    }),
    [v, f]
  ), y = (x) => {
    if (i) {
      x.preventDefault();
      return;
    }
    if (o) {
      x.preventDefault();
      const N = document.getElementById(o);
      N == null || N.scrollIntoView({ behavior: "smooth" });
      return;
    }
    h == null || h(x);
  }, C = (x, N) => {
    if (!x) return null;
    const T = typeof x == "boolean" ? t === "_blank" ? /* @__PURE__ */ s(Le, { name: "share", size: 16 }) : /* @__PURE__ */ s(Le, { name: "link", size: 16 }) : x;
    return /* @__PURE__ */ s("span", { className: `${sn}__icon ${sn}__icon--${N}`, children: T });
  }, w = /* @__PURE__ */ g(
    "a",
    {
      href: i ? void 0 : e,
      target: t,
      className: L,
      style: k,
      onClick: y,
      "aria-disabled": i,
      children: [
        C(u, "start"),
        p,
        C(d, "end")
      ]
    }
  ), b = i ? /* @__PURE__ */ s("span", { className: `${sn}-disabled-wrapper`, children: w }) : w;
  return /* @__PURE__ */ s(at, { content: l, ...c, children: b });
};
Kr.LinkWave = D0;
const P0 = "land-loading", Gn = ({
  size: e = "var(--icon-size-l)",
  strokeSize: t = 3,
  color: n = "var(--color-text-primary)",
  style: r,
  className: o = ""
}) => {
  const i = j(() => ({
    "--land-loading-size": typeof e == "number" ? `${e}px` : e,
    "--land-loading-stroke-size": typeof t == "number" ? `${t}px` : t,
    "--land-loading-color": n
  }), [e, t, n]), a = j(() => [P0, o].filter(Boolean).join(" "), [o]);
  return /* @__PURE__ */ s(
    "div",
    {
      className: a,
      style: { ...i, ...r }
    }
  );
}, ut = "land-alert", A0 = {
  default: "info",
  fail: "error",
  warn: "warning",
  error: "error",
  success: "success",
  loading: "loading",
  info: "info",
  warning: "warning"
}, B0 = {
  row: "horizontal",
  column: "vertical",
  horizontal: "horizontal",
  vertical: "vertical"
}, R0 = {
  info: { name: "info-fill", color: "var(--color-primary-6)" },
  success: { name: "check-fill", color: "var(--color-success-6)" },
  warning: { name: "attention-fill", color: "var(--color-warning-6)" },
  error: { name: "error-fill", color: "var(--color-danger-6)" },
  loading: { name: "", color: "var(--color-primary-6)" }
}, E0 = ({
  // 基础属性
  type: e = "info",
  variant: t = "light",
  direction: n = "horizontal",
  size: r = "medium",
  title: o,
  description: i,
  icon: a,
  closable: l = !1,
  closeIcon: c,
  bordered: u = !0,
  animated: d = !0,
  // 链接属性
  link: p,
  onLinkClick: h,
  action: f,
  // 样式属性
  noBg: m,
  className: v,
  style: L,
  iconStyle: k,
  contentStyle: y,
  // 事件属性
  onClose: C,
  afterClose: w,
  // 其他
  children: b
}) => {
  const [x, N] = F(!0), [T, _] = F(!1), V = j(() => A0[e] || "info", [e]), H = j(() => B0[n] || "horizontal", [n]), S = j(() => m ? "text" : t, [m, t]), A = j(() => ({
    small: { horizontal: 14, vertical: 20 },
    medium: { horizontal: 16, vertical: 24 },
    large: { horizontal: 18, vertical: 28 }
  })[r][H], [r, H]), O = j(() => [
    ut,
    `${ut}--${V}`,
    `${ut}--${S}`,
    `${ut}--${H}`,
    `${ut}--${r}`,
    u && `${ut}--bordered`,
    T && `${ut}--closing`,
    v
  ].filter(Boolean).join(" "), [V, S, H, r, u, T, v]), U = M((J) => {
    d ? (_(!0), setTimeout(() => {
      N(!1), w == null || w();
    }, 300)) : (N(!1), w == null || w()), C == null || C(J);
  }, [d, C, w]), re = () => {
    if (a === !1) return null;
    if (a)
      return /* @__PURE__ */ s("span", { className: `${ut}__icon`, style: k, children: a });
    const J = R0[V];
    return V === "loading" ? /* @__PURE__ */ s("span", { className: `${ut}__icon`, style: k, children: /* @__PURE__ */ s(Gn, { size: A, color: J.color }) }) : /* @__PURE__ */ s("span", { className: `${ut}__icon`, style: k, children: /* @__PURE__ */ s(Le, { name: J.name, size: A, color: J.color }) });
  }, R = () => /* @__PURE__ */ g("div", { className: `${ut}__content`, style: y, children: [
    o && /* @__PURE__ */ g("div", { className: `${ut}__title`, children: [
      o,
      p && /* @__PURE__ */ g(tt, { children: [
        "，",
        /* @__PURE__ */ s(Kr, { onClick: h, children: p })
      ] })
    ] }),
    i && /* @__PURE__ */ s("div", { className: `${ut}__description`, children: i }),
    b && !o && !i && /* @__PURE__ */ g("div", { className: `${ut}__title`, children: [
      b,
      p && /* @__PURE__ */ g(tt, { children: [
        "，",
        /* @__PURE__ */ s(Kr, { onClick: h, children: p })
      ] })
    ] })
  ] }), q = () => !f && !l ? null : /* @__PURE__ */ g("div", { className: `${ut}__actions`, children: [
    f,
    l && /* @__PURE__ */ s("span", { className: `${ut}__close`, onClick: U, children: c || /* @__PURE__ */ s(Le, { name: "close", size: 14 }) })
  ] });
  return x ? /* @__PURE__ */ g("div", { className: O, style: L, role: "alert", children: [
    re(),
    R(),
    q()
  ] }) : null;
}, Ln = "land-anchor", O0 = (e) => {
  const t = [], n = (r) => {
    r.forEach((o) => {
      o.key && t.push(o.key), o.children && n(o.children);
    });
  };
  return n(e), t;
}, rm = ({
  items: e = [],
  onChange: t,
  offsetTop: n = 0,
  gap: r = 4,
  renderItem: o,
  style: i,
  className: a,
  getContainer: l = () => window
}) => {
  const c = ae(null), [u, d] = F(""), [p, h] = F(0), [f, m] = F(-1), [v, L] = F(!1), k = M(() => l(), [l]), y = M((_) => _ === window ? window.pageYOffset || document.documentElement.scrollTop : _.scrollTop, []), C = M((_, V) => {
    _ === window ? window.scrollTo({ top: V, behavior: "smooth" }) : _.scrollTo({ top: V, behavior: "smooth" });
  }, []), w = j(() => O0(e), [e]), b = M((_, V) => {
    d(_), h(V);
    const H = document.getElementById(_), S = k();
    if (H)
      if (n === 0)
        H.scrollIntoView({ behavior: "smooth", block: "start" });
      else {
        const A = S === window ? { top: 0 } : S.getBoundingClientRect(), U = H.getBoundingClientRect().top - A.top, R = y(S) + U - n;
        C(S, R);
      }
    t == null || t(_);
  }, [n, t, k, y, C]);
  de(() => {
    const _ = (S) => {
      const A = S.filter(
        (O) => O.isIntersecting && O.intersectionRatio >= 0.5
      );
      if (A.length > 0) {
        const O = A[0].target.id;
        d(O), h(w.indexOf(O)), t == null || t(O);
      } else
        S.forEach((O) => {
          const U = O.target.id;
          if (!O.isIntersecting && u === U) {
            const re = w.indexOf(U), R = w[re - 1] || null;
            d(R), h(w.indexOf(R)), R && (t == null || t(R));
          }
        });
    }, V = k(), H = new IntersectionObserver(_, {
      threshold: [0, 0.5, 1],
      root: V === window ? null : V,
      rootMargin: `-${n}px 0px 0px 0px`
    });
    return w.forEach((S) => {
      const A = document.getElementById(S);
      A && H.observe(A);
    }), () => {
      w.forEach((S) => {
        const A = document.getElementById(S);
        A && H.unobserve(A);
      });
    };
  }, [w, u, n, t, k]);
  const x = (_, V = 0) => _.map((H, S) => {
    const A = u === H.key, O = /* @__PURE__ */ s(
      "a",
      {
        className: `${Ln}__link${A ? ` ${Ln}__link--active` : ""}`,
        "aria-current": A ? "location" : void 0,
        children: H.title
      }
    );
    return /* @__PURE__ */ g(
      "li",
      {
        style: {
          textIndent: V > 0 ? `${V * 0.5}em` : 0,
          paddingTop: S > 0 ? `${r}px` : 0
        },
        onClick: () => b(H.key, S),
        onMouseEnter: () => {
          S !== p && (L(!0), m(S));
        },
        onMouseLeave: () => L(!1),
        children: [
          o ? o(H, S, A, O) : O,
          H.children && x(H.children, V + 1)
        ]
      },
      H.key
    );
  }), N = j(() => [Ln, o && `${Ln}--custom`, a].filter(Boolean).join(" "), [a]), T = (_) => _ * 38 + _ * r;
  return /* @__PURE__ */ g(
    "div",
    {
      ref: c,
      className: N,
      style: i,
      role: "navigation",
      "aria-label": "Anchor navigation",
      children: [
        /* @__PURE__ */ s("ol", { className: `${Ln}__list`, children: x(e) }),
        !o && /* @__PURE__ */ g(tt, { children: [
          /* @__PURE__ */ s(
            dt.div,
            {
              className: `${Ln}__hover-indicator`,
              animate: { opacity: v ? 1 : 0, y: T(f) },
              transition: { type: "spring", stiffness: 200, damping: 30, mass: 1, restDelta: 0.1 }
            }
          ),
          /* @__PURE__ */ s(
            dt.div,
            {
              className: `${Ln}__active-indicator`,
              animate: { y: T(p) },
              transition: { type: "spring", stiffness: 200, damping: 30, mass: 1, restDelta: 0.1 }
            }
          )
        ] })
      ]
    }
  );
}, da = "land-auto-container", sm = ({
  ratio: e = 1,
  children: t,
  contentClassName: n = "",
  contentStyle: r,
  style: o,
  className: i = "",
  onResize: a
}) => {
  const l = ae(null), [c, u] = F(1);
  de(() => {
    if (!l.current) return;
    const m = (L) => {
      L.forEach((k) => {
        const { width: y, height: C } = k.contentRect, w = y / C;
        u(w), a == null || a({ width: y, height: C, ratio: w });
      });
    }, v = new ResizeObserver(m);
    return v.observe(l.current), () => {
      v.disconnect();
    };
  }, [a]);
  const d = j(() => e > c, [e, c]), p = j(() => [da, i].filter(Boolean).join(" "), [i]), h = j(() => [`${da}__content`, n].filter(Boolean).join(" "), [n]), f = j(() => ({
    width: d ? "100%" : "auto",
    height: d ? "auto" : "100%",
    aspectRatio: `${e}`,
    ...r
  }), [d, e, r]);
  return /* @__PURE__ */ s(
    "div",
    {
      ref: l,
      className: p,
      style: o,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: h,
          style: f,
          children: t
        }
      )
    }
  );
}, sc = ({
  color: e = "currentColor",
  size: t = 16,
  playing: n = !0,
  barCount: r = 4,
  speed: o = 1,
  className: i = "",
  style: a
}) => {
  const l = j(() => {
    const d = ["land-audio-animation"];
    return n && d.push("land-audio-animation--playing"), i && d.push(i), d.join(" ");
  }, [n, i]), c = j(() => Math.max(1, Math.round(t / 6)), [t]), u = j(() => Array.from({ length: r }, (d, p) => {
    const h = -(o * (r - 1 - p) * 0.15);
    return /* @__PURE__ */ s(
      "div",
      {
        className: "land-audio-animation__bar",
        style: {
          width: c,
          backgroundColor: e,
          animationDuration: `${o}s`,
          animationDelay: `${h}s`
        }
      },
      p
    );
  }), [r, c, e, o]);
  return /* @__PURE__ */ s(
    "div",
    {
      className: l,
      style: {
        width: t,
        height: t,
        ...a
      },
      "aria-hidden": "true",
      children: u
    }
  );
}, oc = 100, ic = 2, ac = 1, lc = 48, F0 = 100, ua = {
  small: 24,
  medium: 32,
  large: 40
}, cc = ({
  playing: e = !1,
  size: t = "medium",
  color: n = "var(--color-text-2)",
  disabled: r = !1,
  animated: o = !0,
  loading: i = !1,
  onClick: a,
  className: l = "",
  style: c
}) => {
  const u = j(() => typeof t == "number" ? t : ua[t] || ua.medium, [t]), d = j(() => Math.round(u * 0.625), [u]), p = j(() => {
    const m = ["land-audio-button"];
    return e && m.push("land-audio-button--playing"), r && m.push("land-audio-button--disabled"), i && m.push("land-audio-button--loading"), l && m.push(l), m.join(" ");
  }, [e, r, i, l]), h = (m) => {
    r || i || a == null || a(m);
  }, f = () => i ? /* @__PURE__ */ s(Gn, { size: d, color: n, strokeSize: 2 }) : e ? o ? /* @__PURE__ */ s(sc, { size: d, color: n, playing: !0 }) : /* @__PURE__ */ s(Le, { name: "video-play", size: d, color: n }) : /* @__PURE__ */ s(Le, { name: "video-pause", size: d + 4, color: n });
  return /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      className: p,
      style: {
        width: u,
        height: u,
        ...c
      },
      onClick: h,
      disabled: r,
      "aria-label": e ? "暂停" : "播放",
      children: f()
    }
  );
};
function Z0(e, t) {
  const n = e.getChannelData(0), r = Math.floor(n.length / t), o = [];
  for (let i = 0; i < t; i++) {
    const a = r * i;
    let l = 0;
    for (let u = 0; u < r; u++)
      l += Math.abs(n[a + u]);
    const c = l / r;
    Number.isNaN(c) || o.push(c);
  }
  return o;
}
function ha(e, t, n) {
  return n === t ? e.map(() => 0.5) : e.map((r) => (r - t) / (n - t));
}
function U0({
  data: e,
  canvas: t,
  progress: n,
  barWidth: r = 2,
  barGap: o = 1,
  defaultColor: i = "#999",
  activeColor: a = "#FF0000",
  normalize: l = !0,
  amplify: c = !1
}) {
  const u = t.getContext("2d");
  if (!u || e.length === 0) return;
  let d = [...e];
  if (l) {
    const w = Math.max(...e);
    w > 0 && (d = ha(e, 0, w));
  }
  if (c) {
    const w = Math.min(...e), b = Math.max(...e), x = e.filter((N) => N !== w);
    if (x.length > 0) {
      const N = Math.min(...x);
      d = ha(x, N, b);
    }
  }
  const { width: p, height: h } = t;
  if (p === 0 || h === 0) return;
  u.clearRect(0, 0, p, h);
  const f = r + o, m = Math.floor(p / f), v = Math.min(d.length, m), L = Math.max(...d), k = 2, y = L > 0 ? Math.max(h * 0.85 / L, k / L) : 1, C = Math.floor(n * v);
  for (let w = 0; w < v; w++) {
    const b = d[w] || 0, x = w * f, N = Math.max(b * y, k), T = (h - N) / 2;
    u.fillStyle = w < C ? a : i, u.beginPath(), u.roundRect(x, T, r, N, r / 2), u.fill();
  }
}
function Y0({
  data: e,
  canvas: t,
  progress: n,
  defaultColor: r = "#999",
  activeColor: o = "#FF0000"
}) {
  const i = t.getContext("2d");
  if (!i || e.length === 0) return;
  const { width: a, height: l } = t;
  if (a === 0 || l === 0) return;
  i.clearRect(0, 0, a, l);
  const c = Math.max(...e), u = c > 0 ? l * 0.7 / c : 1, d = a / (e.length - 1), p = Math.floor(n * e.length);
  if (i.beginPath(), i.strokeStyle = r, i.lineWidth = 1, i.setLineDash([2, 2]), i.moveTo(0, l / 2), i.lineTo(a, l / 2), i.stroke(), i.setLineDash([]), i.beginPath(), i.strokeStyle = r, i.lineWidth = 2, i.lineJoin = "round", i.lineCap = "round", e.forEach((h, f) => {
    const m = f * d, v = l / 2 - h * u;
    f === 0 ? i.moveTo(m, v) : i.lineTo(m, v);
  }), i.stroke(), p > 0) {
    i.beginPath(), i.strokeStyle = o, i.lineWidth = 3;
    for (let h = 0; h < Math.min(p, e.length); h++) {
      const f = h * d, m = l / 2 - e[h] * u;
      h === 0 ? i.moveTo(f, m) : i.lineTo(f, m);
    }
    i.stroke();
  }
}
const dc = ({
  src: e,
  audioRef: t,
  playing: n = !1,
  currentTime: r,
  duration: o,
  type: i = "bar",
  sampleCount: a = oc,
  barWidth: l = ic,
  barGap: c = ac,
  defaultColor: u = "var(--color-border-2)",
  activeColor: d = "var(--color-primary-6)",
  normalize: p = !0,
  amplify: h = !1,
  height: f = lc,
  onPlayChange: m,
  onSeek: v,
  className: L = "",
  style: k
}) => {
  const y = ae(null), C = ae(null), w = ae(), b = ae(null), [x, N] = F([]), [T, _] = F(!0), [V, H] = F(null), [S, A] = F(0), [O, U] = F(0), re = r ?? S, R = o ?? O;
  de(() => {
    if (!e) return;
    (async () => {
      _(!0), H(null);
      try {
        const Z = new (window.AudioContext || window.webkitAudioContext)(), pe = await (await fetch(e)).arrayBuffer(), ue = await Z.decodeAudioData(pe), le = Z0(ue, a);
        N(le), Z.close();
      } catch (Z) {
        H(Z instanceof Error ? Z.message : "波形加载失败"), console.error("波形生成失败:", Z);
      } finally {
        _(!1);
      }
    })();
  }, [e, a]);
  const q = M(() => {
    const $ = y.current;
    if (!$ || x.length === 0) return;
    const Z = b.current;
    if (Z) {
      const pe = Z.getBoundingClientRect();
      ($.width !== pe.width || $.height !== pe.height) && ($.width = pe.width, $.height = pe.height);
    }
    const te = R > 0 ? re / R : 0;
    i === "bar" ? U0({
      data: x,
      canvas: $,
      progress: te,
      barWidth: l,
      barGap: c,
      defaultColor: u,
      activeColor: d,
      normalize: p,
      amplify: h
    }) : Y0({
      data: x,
      canvas: $,
      progress: te,
      defaultColor: u,
      activeColor: d
    });
  }, [x, re, R, i, l, c, u, d, p, h]), J = M(() => {
    const $ = () => {
      q(), w.current = requestAnimationFrame($);
    };
    $();
  }, [q]), z = M(() => {
    w.current && (cancelAnimationFrame(w.current), w.current = void 0);
  }, []);
  de(() => (n ? J() : (z(), q()), () => z()), [n, J, z, q]), de(() => {
    const $ = C.current;
    if (!$ || t) return;
    const Z = () => {
      A($.currentTime);
    }, te = () => {
      U($.duration);
    }, pe = () => {
      m == null || m(!0);
    }, ue = () => {
      m == null || m(!1);
    };
    return $.addEventListener("timeupdate", Z), $.addEventListener("loadedmetadata", te), $.addEventListener("play", pe), $.addEventListener("pause", ue), () => {
      $.removeEventListener("timeupdate", Z), $.removeEventListener("loadedmetadata", te), $.removeEventListener("play", pe), $.removeEventListener("pause", ue);
    };
  }, [t, m]), de(() => {
    x.length > 0 && setTimeout(() => q(), 50);
  }, [x, q]), de(() => {
    const $ = b.current;
    if (!$) return;
    const Z = new ResizeObserver(() => {
      x.length > 0 && q();
    });
    return Z.observe($), () => Z.disconnect();
  }, [x, q]);
  const Q = M(($) => {
    if (!v || !b.current) return;
    const Z = b.current.getBoundingClientRect(), te = $.clientX - Z.left, pe = Math.max(0, Math.min(1, te / Z.width));
    v(pe);
  }, [v]), X = j(() => {
    const $ = ["land-audio-wave"];
    return i && $.push(`land-audio-wave--${i}`), T && $.push("land-audio-wave--loading"), V && $.push("land-audio-wave--error"), L && $.push(L), $.join(" ");
  }, [i, T, V, L]);
  return V ? /* @__PURE__ */ s("div", { className: X, style: { height: f, ...k }, children: /* @__PURE__ */ s("div", { className: "land-audio-wave__error", children: V }) }) : T ? /* @__PURE__ */ s("div", { className: X, style: { height: f, ...k }, children: /* @__PURE__ */ s(Gn, { size: 20, color: "var(--color-text-3)", strokeSize: 2 }) }) : /* @__PURE__ */ g(
    "div",
    {
      ref: b,
      className: X,
      style: { height: f, ...k },
      onClick: Q,
      children: [
        !t && /* @__PURE__ */ s(
          "audio",
          {
            ref: C,
            src: e,
            preload: "metadata",
            className: "land-audio-wave__audio"
          }
        ),
        /* @__PURE__ */ s(
          "canvas",
          {
            ref: y,
            className: "land-audio-wave__canvas"
          }
        )
      ]
    }
  );
}, uc = ({
  progress: e = 0,
  buffered: t = 0,
  activeColor: n = "var(--color-primary-6)",
  disabled: r = !1,
  onChange: o,
  onDragStart: i,
  onDragEnd: a,
  className: l = "",
  style: c
}) => {
  const u = ae(null), [d, p] = F(!1), [h, f] = F(!1), m = M((C) => {
    if (!u.current) return 0;
    const w = u.current.getBoundingClientRect(), b = C - w.left;
    return Math.max(0, Math.min(1, b / w.width));
  }, []), v = M((C) => {
    if (r) return;
    C.preventDefault(), p(!0), i == null || i();
    const w = m(C.clientX);
    o == null || o(w);
  }, [r, m, o, i]), L = M((C) => {
    if (!d || r) return;
    const w = m(C.clientX);
    o == null || o(w);
  }, [d, r, m, o]), k = M(() => {
    d && (p(!1), a == null || a());
  }, [d, a]);
  de(() => {
    if (d)
      return document.addEventListener("mousemove", L), document.addEventListener("mouseup", k), () => {
        document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", k);
      };
  }, [d, L, k]);
  const y = [
    "land-audio-progress",
    h && "land-audio-progress--hover",
    d && "land-audio-progress--dragging",
    r && "land-audio-progress--disabled",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ g(
    "div",
    {
      ref: u,
      className: y,
      style: c,
      onMouseDown: v,
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      children: [
        /* @__PURE__ */ g("div", { className: "land-audio-progress__track", children: [
          /* @__PURE__ */ s(
            "div",
            {
              className: "land-audio-progress__buffered",
              style: { transform: `scaleX(${t})` }
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: "land-audio-progress__fill",
              style: {
                transform: `scaleX(${e})`,
                backgroundColor: n
              }
            }
          )
        ] }),
        /* @__PURE__ */ s(
          "div",
          {
            className: "land-audio-progress__thumb",
            style: {
              left: `${e * 100}%`,
              backgroundColor: n
            }
          }
        )
      ]
    }
  );
}, zr = (e) => {
  if (!e) return "00:00";
  if (typeof e == "string") return e;
  const t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), r = Math.round(e % 60), o = t < 10 ? "0" + t : t, i = n < 10 ? "0" + n : n, a = r < 10 ? "0" + r : r;
  return t > 0 ? o + ":" + i + ":" + a : i + ":" + a;
}, Wr = ({
  // 基础属性
  src: e,
  title: t,
  cover: n,
  // 播放控制
  autoPlay: r = !1,
  loop: o = !1,
  muted: i = !1,
  volume: a = F0,
  playbackRate: l = 1,
  preload: c = "metadata",
  // 控件配置
  showPlayButton: u = !0,
  showProgress: d = !0,
  showTime: p = !0,
  showVolume: h = !1,
  // 波形配置
  showWave: f = !1,
  waveType: m = "bar",
  waveSampleCount: v = oc,
  waveBarWidth: L = ic,
  waveBarGap: k = ac,
  waveDefaultColor: y = "var(--color-border-2)",
  waveActiveColor: C = "var(--color-primary-6)",
  waveNormalize: w = !0,
  waveAmplify: b = !1,
  waveHeight: x = lc,
  // 事件回调
  onPlay: N,
  onPause: T,
  onEnded: _,
  onTimeUpdate: V,
  onVolumeChange: H,
  onSeek: S,
  onLoaded: A,
  onError: O,
  onStatusChange: U,
  // 样式定制
  className: re = "",
  style: R,
  progressColor: q = "var(--color-primary-6)",
  children: J
}) => {
  const z = ae(null), [Q, X] = F("idle"), [$, Z] = F(!1), [te, pe] = F(0), [ue, le] = F(0), [be, ie] = F(0), [D, he] = F(a), [ne, ge] = F(i), [I, E] = F(!1), W = M(() => ({
    currentTime: te,
    duration: ue,
    progress: ue > 0 ? te / ue : 0,
    volume: D,
    muted: ne,
    playbackRate: l,
    status: Q
  }), [te, ue, D, ne, l, Q]), fe = M((Ve) => {
    X(Ve), U == null || U(Ve);
  }, [U]), K = M(async () => {
    if (z.current)
      try {
        z.current.paused ? await z.current.play() : z.current.pause();
      } catch (Ve) {
        console.error("播放失败:", Ve), fe("error"), O == null || O(Ve);
      }
  }, [fe, O]), P = M((Ve) => {
    if (!z.current || !ue) return;
    const Oe = Ve * ue;
    z.current.currentTime = Oe, pe(Oe), S == null || S(Oe);
  }, [ue, S]);
  M((Ve) => {
    if (!z.current) return;
    const Oe = Math.max(0, Math.min(100, Ve));
    he(Oe), z.current.volume = Oe / 100, Oe > 0 && ne && (ge(!1), z.current.muted = !1), H == null || H(Oe, Oe === 0);
  }, [ne, H]);
  const oe = M(() => {
    if (!z.current || I) return;
    const Ve = z.current;
    pe(Ve.currentTime), Ve.buffered.length > 0 && ie(Ve.buffered.end(Ve.buffered.length - 1)), V == null || V(W());
  }, [I, W, V]), se = M(() => {
    if (!z.current) return;
    const Ve = z.current;
    le(Ve.duration), fe("idle"), A == null || A(W());
  }, [W, fe, A]), ve = M(() => {
    Z(!0), fe("playing"), N == null || N(W());
  }, [W, fe, N]), _e = M(() => {
    Z(!1), fe("paused"), T == null || T(W());
  }, [W, fe, T]), Se = M(() => {
    Z(!1), fe("ended"), _ == null || _(W());
  }, [W, fe, _]), we = M(() => {
    fe("error"), O == null || O(new Error("音频加载失败"));
  }, [fe, O]);
  de(() => {
    z.current && (z.current.volume = D / 100, z.current.muted = ne, z.current.playbackRate = l);
  }, []);
  const Ie = j(() => {
    const Ve = ["land-audio"];
    return Q === "error" && Ve.push("land-audio--error"), f && Ve.push("land-audio--with-wave"), re && Ve.push(re), Ve.join(" ");
  }, [Q, f, re]);
  return /* @__PURE__ */ g("div", { className: Ie, style: R, children: [
    /* @__PURE__ */ s(
      "audio",
      {
        ref: z,
        src: e,
        autoPlay: r,
        loop: o,
        muted: ne,
        preload: c,
        onTimeUpdate: oe,
        onLoadedMetadata: se,
        onPlay: ve,
        onPause: _e,
        onEnded: Se,
        onError: we,
        className: "land-audio__element"
      }
    ),
    n && /* @__PURE__ */ s("div", { className: "land-audio__cover", children: /* @__PURE__ */ s("img", { src: n, alt: t || "audio cover" }) }),
    /* @__PURE__ */ g("div", { className: "land-audio__content", children: [
      t && /* @__PURE__ */ s("div", { className: "land-audio__title", children: t }),
      /* @__PURE__ */ g("div", { className: "land-audio__controls", children: [
        u && /* @__PURE__ */ s(
          cc,
          {
            playing: $,
            loading: Q === "loading",
            onClick: K
          }
        ),
        /* @__PURE__ */ s("div", { className: "land-audio__progress-area", children: f ? /* @__PURE__ */ s(
          dc,
          {
            src: e,
            audioRef: z,
            playing: $,
            currentTime: te,
            duration: ue,
            type: m,
            sampleCount: v,
            barWidth: L,
            barGap: k,
            defaultColor: y,
            activeColor: C,
            normalize: w,
            amplify: b,
            height: x,
            onSeek: P
          }
        ) : d ? /* @__PURE__ */ s(
          uc,
          {
            progress: ue > 0 ? te / ue : 0,
            buffered: ue > 0 ? be / ue : 0,
            activeColor: q,
            onChange: P,
            onDragStart: () => E(!0),
            onDragEnd: () => E(!1)
          }
        ) : null }),
        p && /* @__PURE__ */ g("div", { className: "land-audio__time", children: [
          /* @__PURE__ */ s("span", { className: "land-audio__time-current", children: zr(te) }),
          /* @__PURE__ */ s("span", { className: "land-audio__time-separator", children: "/" }),
          /* @__PURE__ */ s("span", { className: "land-audio__time-duration", children: zr(ue) })
        ] })
      ] })
    ] }),
    J
  ] });
};
Wr.Button = cc;
Wr.AnimationIcon = sc;
Wr.Wave = dc;
Wr.Progress = uc;
const om = ({
  fixed: e = !0,
  target: t,
  visibleHeight: n = 600,
  offsetRight: r = 24,
  offsetBottom: o = 24,
  scrollBehavior: i = "smooth",
  icon: a,
  disabled: l,
  onClick: c,
  onVisibilityChange: u,
  className: d,
  style: p
}) => {
  const h = ae(null), [f, m] = F(!1), v = M(() => {
    var y;
    return t || (e ? document.documentElement : ((y = h.current) == null ? void 0 : y.parentElement) || null);
  }, [e, t]);
  de(() => {
    const y = v();
    if (!y) return;
    const C = e && !t ? window : y, w = () => {
      const b = C === window ? window.scrollY : y.scrollTop;
      m(b > n);
    };
    return w(), C.addEventListener("scroll", w, { passive: !0 }), () => C.removeEventListener("scroll", w);
  }, [e, t, n, v]), de(() => {
    u == null || u(f);
  }, [f, u]);
  const L = M((y) => {
    if (l) return;
    c == null || c(y);
    const C = v();
    C && (e && !t ? window.scrollTo({ top: 0, behavior: i }) : C.scrollTo({ top: 0, behavior: i }));
  }, [l, c, v, e, t, i]), k = [
    "land-back-to-top",
    e && "land-back-to-top--fixed",
    f && "land-back-to-top--visible",
    l && "land-back-to-top--disabled",
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s(
    "div",
    {
      ref: h,
      className: k,
      style: { right: r, bottom: o, ...p },
      onClick: L,
      "aria-label": "Back to top",
      children: a || /* @__PURE__ */ s(_a, { className: "land-back-to-top__icon", size: 18, strokeWidth: 3 })
    }
  );
}, yn = {
  variant: "standard",
  status: "default",
  placement: "top-right",
  max: 99,
  dot: !1,
  showZero: !1,
  hidden: !1
}, Ft = "land-badge", im = (e) => {
  const {
    // 外观属性
    variant: t = yn.variant,
    status: n = yn.status,
    placement: r = yn.placement,
    // 内容属性
    count: o,
    max: i = yn.max,
    dot: a = yn.dot,
    content: l,
    showZero: c = yn.showZero,
    children: u,
    // 状态属性
    hidden: d = yn.hidden,
    offset: p,
    // 事件属性
    onClick: h,
    // 样式属性
    className: f,
    style: m,
    badgeClassName: v,
    badgeStyle: L,
    htmlProps: k
  } = e, y = j(() => a ? null : l !== void 0 ? l : o !== void 0 ? o > i ? `${i}+` : o : null, [a, l, o, i]), C = j(() => d ? !1 : a || l !== void 0 ? !0 : o !== void 0 ? o > 0 || c : !1, [d, a, l, o, c]), w = j(() => {
    const _ = [Ft];
    return u ? _.push(`${Ft}--has-children`) : _.push(`${Ft}--standalone`), f && _.push(f), _.join(" ");
  }, [u, f]), b = j(() => {
    const _ = [`${Ft}__sup`];
    return _.push(`${Ft}__sup--${t}`), _.push(`${Ft}__sup--${n}`), _.push(`${Ft}__sup--${r}`), a && _.push(`${Ft}__sup--dot`), !a && o !== void 0 && o > 9 && _.push(`${Ft}__sup--multiple`), !a && l !== void 0 && _.push(`${Ft}__sup--custom`), v && _.push(v), _.join(" ");
  }, [t, n, r, a, o, l, v]), x = j(() => {
    const _ = { ...L };
    if (p) {
      const [V, H] = p;
      r != null && r.includes("right") ? _.right = -V : _.left = -V, r != null && r.includes("top") ? _.top = -H : _.bottom = -H;
    }
    return _;
  }, [p, r, L]), N = (_) => {
    h == null || h(_);
  };
  return /* @__PURE__ */ g("span", { className: w, style: m, ...k, children: [
    u,
    C ? /* @__PURE__ */ s(
      "span",
      {
        className: b,
        style: x,
        onClick: h ? N : void 0,
        children: y
      }
    ) : null
  ] });
}, K0 = (e, t = {}) => {
  const { deps: n = [], line: r = 1 } = t, [o, i] = F(!1);
  return de(() => {
    const a = e.current;
    a && (r > 1 ? i(a.scrollHeight > a.offsetHeight) : i(a.scrollWidth > a.offsetWidth));
  }, [e, r, ...n]), o;
}, Wn = "land-bread-crumb", z0 = ({
  item: e,
  active: t,
  onChange: n,
  index: r,
  hoverPreview: o
}) => {
  const i = ae(null), a = K0(i, { deps: [e] });
  return /* @__PURE__ */ s(at, { attach: "body", content: e.tip || (o && a ? e.label : ""), children: /* @__PURE__ */ g(
    "div",
    {
      className: `${Wn}__item hover-pop${t ? ` ${Wn}__item--active` : ""}`,
      onClick: () => n == null ? void 0 : n(),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            ref: i,
            className: `${Wn}__label${e.maxWidth ? ` ${Wn}__label--ellipsis` : ""}`,
            style: e.maxWidth ? { maxWidth: `${e.maxWidth}px` } : void 0,
            children: e.label
          }
        ),
        r > 0 && /* @__PURE__ */ s(Le, { name: "arrow", className: `${Wn}__arrow`, size: 16, strokeWidth: 4 })
      ]
    }
  ) });
}, on = "land-bread-crumb", am = ({
  items: e = [],
  current: t,
  showMask: n = !1,
  hoverPreview: r = !1,
  onChange: o,
  style: i,
  className: a
}) => {
  const l = ae(null), [c, u] = F(!1), [d, p] = F(!0);
  de(() => {
    if (!n || !l.current) return;
    const f = l.current, m = () => {
      u(f.scrollLeft <= f.clientWidth - f.scrollWidth), p(f.scrollLeft >= 0);
    };
    return f.addEventListener("scroll", m), () => f.removeEventListener("scroll", m);
  }, [n]);
  const h = j(() => [on, a].filter(Boolean).join(" "), [a]);
  return /* @__PURE__ */ g("div", { className: h, style: i, children: [
    n && /* @__PURE__ */ s("div", { className: `${on}__mask ${on}__mask--start${c ? ` ${on}__mask--hidden` : ""}` }),
    /* @__PURE__ */ s("div", { ref: l, className: `${on}__container`, children: [...e].reverse().map((f, m) => /* @__PURE__ */ s(
      z0,
      {
        index: m,
        item: f,
        active: t === f.value,
        hoverPreview: r,
        onChange: () => o == null ? void 0 : o(f)
      },
      f.value
    )) }),
    n && /* @__PURE__ */ s("div", { className: `${on}__mask ${on}__mask--end${d ? ` ${on}__mask--hidden` : ""}` })
  ] });
}, X0 = ({
  style: e,
  ...t
}) => {
  const [n, r] = F(!1);
  return /* @__PURE__ */ s(
    et,
    {
      style: {
        paddingRight: "12px",
        ...e
      },
      ...t,
      htmlProps: {
        onMouseEnter: () => r(!0),
        onMouseLeave: () => r(!1)
      },
      children: /* @__PURE__ */ s(Le, { name: "arrow-line", size: 16, strokeWidth: 3, className: `land-button-arrow-icon ${n ? "button-hover-arrow" : ""}` })
    }
  );
}, q0 = ({
  defaultSide: e,
  hoverSide: t,
  ...n
}) => {
  const [r, o] = F(!1);
  return /* @__PURE__ */ g(
    et,
    {
      ...n,
      htmlProps: {
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1)
      },
      children: [
        /* @__PURE__ */ s(dt.div, { animate: { opacity: r ? 1 : 0, scaleY: r ? 1 : -1 }, transition: { duration: 0.6, type: "spring" }, className: "land-button-change-hover", children: t }),
        /* @__PURE__ */ s(dt.div, { animate: { opacity: r ? 0 : 1 }, transition: { duration: 0.6, type: "spring" }, className: "land-button-change-default", children: e })
      ]
    }
  );
}, st = "land-button", et = ({
  variant: e = "outline",
  status: t = "default",
  size: n = "default",
  disabled: r = !1,
  block: o = !1,
  bold: i = !1,
  hoverBold: a = !1,
  hoverAnimation: l = !1,
  activeAnimation: c,
  style: u,
  className: d = "",
  onClick: p,
  children: h,
  text: f,
  subText: m,
  icon: v,
  capsule: L,
  tip: k,
  popoverProps: y,
  htmlProps: C
}) => {
  const w = j(() => !!(v && !f && !m), [v, f, m]), b = j(() => [
    st,
    `${st}--${e}`,
    `${st}--${t}`,
    `${st}--${n}`,
    w && `${st}--icon-only`,
    k && `${st}--has-tip`,
    o && `${st}--block`,
    i && `${st}--bold`,
    a && `${st}--hover-bold`,
    L && `${st}--capsule`,
    l && `${st}--hover-animation`,
    c && `${st}--active-animation`,
    d
  ].filter(Boolean).join(" "), [e, t, n, w, r, k, o, i, a, L, l, c, d]), x = () => /* @__PURE__ */ g(tt, { children: [
    v && /* @__PURE__ */ s("div", { className: `${st}__icon`, children: v }),
    !w && (f || m) && /* @__PURE__ */ g("div", { className: `${st}__content-wrapper`, children: [
      /* @__PURE__ */ s("span", { className: `${st}__text`, children: f }),
      m && /* @__PURE__ */ s("span", { className: `${st}__sub-text`, children: m }),
      (a || e === "transparent") && /* @__PURE__ */ g("div", { className: `${st}__mask-content`, children: [
        /* @__PURE__ */ s("span", { className: `${st}__mask-text`, children: f }),
        m && /* @__PURE__ */ s("span", { className: `${st}__sub-text`, children: m })
      ] })
    ] }),
    h
  ] }), N = {
    style: u,
    className: b,
    disabled: r,
    onClick: (T) => {
      r || p == null || p(T);
    },
    ...C
  };
  return /* @__PURE__ */ s(at, { theme: "dark", content: k, ...y, children: /* @__PURE__ */ s(
    "button",
    {
      ...N,
      children: x()
    }
  ) });
};
et.ButtonArrow = X0;
et.ButtonChange = q0;
const Qt = {
  mode: "date",
  language: "zh",
  size: "default",
  weekStartDay: 0,
  showHolidays: !1,
  showWeekNumber: !1,
  showTodayButton: !0,
  showOtherMonthDays: !0,
  allowOtherMonthSelect: !0
}, Tt = "land-dropdown";
function G0(e) {
  if (!e) return null;
  if (e instanceof HTMLElement) return e;
  try {
    return document.querySelector(e);
  } catch {
    return null;
  }
}
const Cr = ({
  trigger: e = "hover",
  attach: t,
  items: n,
  content: r,
  children: o,
  placement: i = "bottom",
  alignment: a = "left",
  disabled: l,
  onChange: c,
  onOpen: u,
  onClose: d,
  toggleClassName: p,
  toggleStyle: h,
  contentClassName: f,
  contentStyle: m,
  open: v = !1,
  className: L,
  style: k
}) => {
  const y = ae(null), C = ae(null), [w, b] = F(v), x = ae(!0), N = ae(u), T = ae(d), _ = ae(i), V = ae(a);
  de(() => {
    N.current = u, T.current = d, _.current = i, V.current = a;
  }), de(() => (x.current = !0, () => {
    x.current = !1;
  }), []);
  const H = j(() => G0(t), [t]), S = !!H;
  de(() => {
    l && w && b(!1);
  }, [l, w]), de(() => {
    l || b(v);
  }, [v, l]);
  const [A, O] = F({ top: 0, left: 0 }), [U, re] = F(i), [R, q] = F(a), J = ae();
  J.current = () => {
    if (!y.current || !x.current) return;
    const ie = y.current.getBoundingClientRect(), D = window.innerWidth, he = window.innerHeight, ne = C.current, ge = (ne == null ? void 0 : ne.offsetWidth) || 200, I = (ne == null ? void 0 : ne.offsetHeight) || 150;
    let E = _.current, W = V.current;
    const fe = he - ie.bottom, K = ie.top;
    if (_.current === "bottom" && fe < I && K > I ? E = "top" : _.current === "top" && K < I && fe > I && (E = "bottom"), S) {
      const P = parseFloat(
        getComputedStyle(y.current).getPropertyValue("--land-dropdown-gap")
      ) || parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--padding-s")
      ) || 0;
      let oe = E === "bottom" ? ie.bottom + P : ie.top - I - P, se;
      switch (V.current) {
        case "center":
          se = ie.left + ie.width / 2 - ge / 2;
          break;
        case "right":
          se = ie.right - ge;
          break;
        default:
          se = ie.left;
          break;
      }
      se < 0 ? (se = 0, W = "left") : se + ge > D && (se = D - ge, W = "right"), oe < 0 ? oe = 0 : oe + I > he && (oe = he - I), O((ve) => ve.top === oe && ve.left === se ? ve : { top: oe, left: se });
    }
    re((P) => P === E ? P : E), q((P) => P === W ? P : W);
  };
  const z = M(() => {
    var ie;
    (ie = J.current) == null || ie.call(J);
  }, []);
  de(() => {
    if (w && !l) {
      const ie = setTimeout(z, 0);
      return () => clearTimeout(ie);
    }
  }, [w, l, z]), de(() => {
    if (!w || l) return;
    const ie = () => {
      var he;
      return (he = J.current) == null ? void 0 : he.call(J);
    }, D = () => {
      var he;
      return (he = J.current) == null ? void 0 : he.call(J);
    };
    return window.addEventListener("resize", ie), window.addEventListener("scroll", D, !0), document.addEventListener("scroll", D, !0), () => {
      window.removeEventListener("resize", ie), window.removeEventListener("scroll", D, !0), document.removeEventListener("scroll", D, !0);
    };
  }, [w, l]);
  const Q = ae(w);
  de(() => {
    var ie, D;
    Q.current !== w && (Q.current = w, w ? (ie = N.current) == null || ie.call(N) : (D = T.current) == null || D.call(T));
  }, [w]), de(() => {
    if (!w || l) return;
    const ie = (D) => {
      var ne, ge;
      const he = D.target;
      (ne = y.current) != null && ne.contains(he) || (ge = C.current) != null && ge.contains(he) || b(!1);
    };
    return document.addEventListener("mousedown", ie), () => document.removeEventListener("mousedown", ie);
  }, [w, l]);
  const X = M((ie) => {
    l || (c == null || c(ie), e === "click" && b(!1));
  }, [l, c, e]), $ = j(() => [
    Tt,
    w && `${Tt}--open`,
    l && `${Tt}--disabled`,
    p,
    L
  ].filter(Boolean).join(" "), [w, l, p, L]), Z = j(() => [
    `${Tt}__panel`,
    w && `${Tt}__panel--open`,
    S && `${Tt}__panel--portal`,
    `${Tt}__panel--${R}`,
    `${Tt}__panel--${U}`
  ].filter(Boolean).join(" "), [w, S, R, U]), te = j(() => [`${Tt}__content`, f].filter(Boolean).join(" "), [f]), pe = M(() => {
    l || e === "click" && b((ie) => !ie);
  }, [l, e]), ue = M(() => {
    l || e !== "hover" || b(!0);
  }, [l, e]), le = M(() => {
    e === "hover" && b(!1);
  }, [e]), be = /* @__PURE__ */ s(
    "div",
    {
      ref: C,
      className: Z,
      style: S ? { top: A.top, left: A.left } : void 0,
      onClick: (ie) => ie.stopPropagation(),
      onMouseEnter: S ? ue : void 0,
      onMouseLeave: S ? le : void 0,
      children: /* @__PURE__ */ g("div", { className: te, style: m, children: [
        n && !r && /* @__PURE__ */ s("ul", { className: `${Tt}__list`, children: n.map((ie) => /* @__PURE__ */ s(
          "li",
          {
            className: `${Tt}__item`,
            onClick: () => X(ie),
            children: ie.label
          },
          ie.key
        )) }),
        r
      ] })
    }
  );
  return /* @__PURE__ */ g(vr, { children: [
    /* @__PURE__ */ g(
      "div",
      {
        ref: y,
        className: $,
        style: { ...k, ...h },
        onClick: pe,
        onMouseEnter: ue,
        onMouseLeave: le,
        "aria-disabled": l,
        "aria-expanded": w,
        "aria-haspopup": "true",
        children: [
          o,
          !S && be
        ]
      }
    ),
    S && w && !l && Gc(be, H)
  ] });
}, er = {
  defaultChecked: !1,
  indeterminate: !1,
  disabled: !1,
  size: "default",
  animated: !0
}, ot = "land-checkbox", Io = ({
  // 核心属性
  value: e,
  name: t,
  checked: n,
  defaultChecked: r = er.defaultChecked,
  indeterminate: o = er.indeterminate,
  disabled: i = er.disabled,
  // 内容属性
  label: a,
  children: l,
  // 外观属性
  size: c = er.size,
  animated: u = er.animated,
  // 提示属性
  tip: d,
  // 样式属性
  className: p = "",
  style: h,
  labelClassName: f = "",
  labelStyle: m,
  // 事件属性
  onCheckedChange: v,
  onChange: L
}) => {
  const [k, y] = F(() => n !== void 0 ? n : r ?? !1);
  de(() => {
    n !== void 0 && y(n);
  }, [n]);
  const C = l ?? a, w = j(() => [
    ot,
    `${ot}--${c}`,
    i && `${ot}--disabled`,
    k && `${ot}--checked`,
    o && `${ot}--indeterminate`,
    p
  ].filter(Boolean).join(" "), [c, i, k, o, p]), b = j(() => [
    `${ot}__wrapper`,
    k && `${ot}__wrapper--checked`
  ].filter(Boolean).join(" "), [k]), x = j(() => [
    `${ot}__box`,
    k && `${ot}__box--checked`,
    o && `${ot}__box--indeterminate`,
    u && !o ? `${ot}__box--animated` : `${ot}__box--no-animation`
  ].filter(Boolean).join(" "), [k, o, u]), N = j(() => [
    `${ot}__text`,
    f
  ].filter(Boolean).join(" "), [f]), T = M((_) => {
    if (i) return;
    const V = !k;
    y(V), v == null || v(V, _), L == null || L(V, _);
  }, [i, k, v, L]);
  return /* @__PURE__ */ g(
    "div",
    {
      className: w,
      style: h,
      "data-value": e,
      "data-name": t,
      children: [
        /* @__PURE__ */ g(
          "div",
          {
            className: b,
            onClick: T,
            role: "checkbox",
            "aria-checked": o ? "mixed" : k,
            "aria-disabled": i,
            tabIndex: i ? -1 : 0,
            children: [
              /* @__PURE__ */ g("div", { className: x, children: [
                /* @__PURE__ */ s(
                  Le,
                  {
                    name: "check",
                    size: 10,
                    className: `${ot}__icon ${ot}__icon--check`
                  }
                ),
                /* @__PURE__ */ s(
                  Le,
                  {
                    name: "dec",
                    strokeWidth: 8,
                    size: 10,
                    className: `${ot}__icon ${ot}__icon--indeterminate`
                  }
                )
              ] }),
              C && /* @__PURE__ */ s("span", { className: N, style: m, children: C })
            ]
          }
        ),
        d && /* @__PURE__ */ g("div", { className: `${ot}__tip hover-pop`, children: [
          /* @__PURE__ */ s(
            Le,
            {
              name: "info-stroke",
              size: 12,
              className: `${ot}__tip-icon`
            }
          ),
          /* @__PURE__ */ s(
            at,
            {
              content: d,
              theme: "dark",
              style: { maxWidth: "200px" },
              placement: "top"
            }
          )
        ] })
      ]
    }
  );
}, nt = "land-select", Q0 = {
  border: "outline",
  background: "fill",
  transparent: "transparent",
  text: "text"
}, hc = ({
  // 核心属性
  options: e,
  data: t,
  value: n,
  selected: r,
  values: o,
  selectedValues: i = [],
  multiple: a = !1,
  placeholder: l = "请选择",
  // 外观属性
  variant: c,
  type: u = "border",
  size: d = "default",
  disabled: p = !1,
  width: h,
  // 多选属性
  showCheckbox: f = !1,
  separator: m = "，",
  maxDisplayCount: v,
  // 提示属性
  tip: L,
  tipProps: k,
  // 自定义渲染
  customValueDisplay: y,
  renderOption: C,
  emptyContent: w = "暂无数据",
  // 样式属性
  className: b = "",
  style: x,
  dropdownClassName: N = "",
  dropdownStyle: T,
  // 事件属性
  onChange: _,
  // 其他属性透传给 Dropdown
  ...V
}) => {
  const H = e ?? t ?? [], S = c ?? Q0[u] ?? "outline", A = n ?? r, O = o ?? i, [U, re] = F(A), [R, q] = F(O), [J, z] = F(!1), Q = ae(O), X = ae(R);
  X.current = R, de(() => {
    A !== void 0 && re((I) => I === A ? I : A);
  }, [A]), de(() => {
    const I = Q.current;
    I.length === O.length && I.every((W, fe) => W === O[fe]) || (Q.current = O, q(O));
  });
  const $ = j(() => a ? H.filter((I) => R.includes(I.key)) : H.filter((I) => I.key === U), [a, H, R, U]), Z = j(() => $.map((I) => I.label), [$]), te = M(
    (I) => a ? R.includes(I) : U === I,
    [a, R, U]
  ), pe = M(
    (I, E) => {
      if (E.stopPropagation(), !I.disabled)
        if (a) {
          const fe = [...X.current], K = fe.indexOf(I.key);
          K > -1 ? fe.splice(K, 1) : fe.push(I.key), q(fe);
          const P = H.filter(
            (oe) => fe.includes(oe.key)
          );
          _ == null || _(fe, I, P);
        } else
          re(I.key), _ == null || _(I.key, I), z(!1);
    },
    [a, H, _]
  ), ue = M(() => {
    z(!0);
  }, []), le = M(() => {
    z(!1);
  }, []), be = M(() => {
    var I;
    return y ? y({
      values: a ? R : U !== void 0 ? [U] : [],
      items: $,
      isMultiple: a,
      placeholder: l
    }) : (a ? Z.length === 0 : U === void 0 || U === "") ? /* @__PURE__ */ s("span", { className: `${nt}__placeholder`, children: l }) : a ? v !== void 0 && Z.length > v ? /* @__PURE__ */ g("span", { className: `${nt}__value`, children: [
      Z.slice(0, v).join(m),
      "等",
      Z.length,
      "个选项"
    ] }) : /* @__PURE__ */ s("span", { className: `${nt}__value`, children: Z.join(m) }) : /* @__PURE__ */ s("span", { className: `${nt}__value`, children: (I = $[0]) == null ? void 0 : I.label });
  }, [
    y,
    a,
    R,
    U,
    $,
    Z,
    l,
    v,
    m
  ]), ie = M(
    (I) => {
      const E = te(I.key), W = [
        `${nt}__option`,
        E && `${nt}__option--selected`,
        I.disabled && `${nt}__option--disabled`,
        I.className
      ].filter(Boolean).join(" ");
      return C ? /* @__PURE__ */ s(
        "div",
        {
          className: W,
          style: I.style,
          onClick: (fe) => pe(I, fe),
          children: C(I, E)
        },
        I.key
      ) : /* @__PURE__ */ g(
        "div",
        {
          className: W,
          style: I.style,
          onClick: (fe) => pe(I, fe),
          children: [
            a && f && /* @__PURE__ */ s(
              Io,
              {
                className: `${nt}__checkbox`,
                checked: E,
                disabled: I.disabled
              }
            ),
            /* @__PURE__ */ s("span", { className: `${nt}__option-label`, children: I.label }),
            I.iconTip && /* @__PURE__ */ g("div", { className: `${nt}__option-icon`, children: [
              /* @__PURE__ */ s(Le, { name: "info-stroke", size: 12 }),
              /* @__PURE__ */ s(at, { content: I.iconTip, placement: "right", theme: "dark" })
            ] }),
            I.tip && /* @__PURE__ */ s(at, { content: I.tip, placement: "right", theme: "dark" })
          ]
        },
        I.key
      );
    },
    [te, C, pe, a, f]
  ), D = j(
    () => /* @__PURE__ */ s("div", { className: `${nt}__dropdown ${N}`, style: T, children: H.length > 0 ? H.map(ie) : /* @__PURE__ */ s("div", { className: `${nt}__empty`, children: w }) }),
    [H, ie, w, N, T]
  ), he = j(() => [nt, b].filter(Boolean).join(" "), [b]), ne = j(() => ({
    width: typeof h == "number" ? `${h}px` : h,
    ...x
  }), [h, x]), ge = j(() => [
    `${nt}__trigger`,
    `${nt}__trigger--${S}`,
    `${nt}__trigger--${d}`,
    p && `${nt}__trigger--disabled`,
    J && `${nt}__trigger--open`
  ].filter(Boolean).join(" "), [S, d, p, J]);
  return /* @__PURE__ */ s("div", { className: he, style: ne, children: /* @__PURE__ */ s(
    Cr,
    {
      trigger: "click",
      disabled: p,
      content: D,
      onOpen: ue,
      onClose: le,
      ...V,
      children: /* @__PURE__ */ g("div", { className: ge, children: [
        /* @__PURE__ */ s("div", { className: `${nt}__content`, children: be() }),
        /* @__PURE__ */ s(Le, { name: "arrow-triangle", className: `${nt}__arrow`, size: 16 }),
        L && /* @__PURE__ */ s(at, { attach: "body", content: L, theme: "dark", ...k })
      ] })
    }
  ) });
};
function St(e) {
  return "currentYear" in e;
}
const J0 = (e) => {
  const t = e.language || "zh", n = St(e) ? e.currentYear : e.year, r = St(e) ? e.currentMonth : e.month, o = St(e) ? e.viewMode : e.mode, i = St(e) ? e.shouldShowYearSelector : e.showYearSelector, a = e.yearRange || [1970, 2100], l = St(e) ? e.monthPrevDisabled : e.prevDisabled, c = St(e) ? e.monthNextDisabled : e.nextDisabled, u = St(e) ? e.customYearDisplay : e.yearDisplay, d = St(e) ? e.customYearOptions : e.yearOptions, p = St(e) ? e.rightContent : e.extra, h = St(e) ? () => {
    var x;
    return (x = e.onMonthChange) == null ? void 0 : x.call(e, r !== void 0 ? r - 1 : -1);
  } : e.onPrev, f = St(e) ? () => {
    var x;
    return (x = e.onMonthChange) == null ? void 0 : x.call(e, r !== void 0 ? r + 1 : 1);
  } : e.onNext, m = e.onYearChange, v = e.className || "", L = e.style, k = j(() => {
    if (!i) return [];
    if (d) return d;
    const [x, N] = a;
    return Array.from({ length: N - x + 1 }, (T, _) => ({
      key: `${x + _}`,
      label: `${x + _}`
    }));
  }, [i, a, d]), y = j(() => ({
    0: { en: "January", zh: "一月" },
    1: { en: "February", zh: "二月" },
    2: { en: "March", zh: "三月" },
    3: { en: "April", zh: "四月" },
    4: { en: "May", zh: "五月" },
    5: { en: "June", zh: "六月" },
    6: { en: "July", zh: "七月" },
    7: { en: "August", zh: "八月" },
    8: { en: "September", zh: "九月" },
    9: { en: "October", zh: "十月" },
    10: { en: "November", zh: "十一月" },
    11: { en: "December", zh: "十二月" }
  }), []), C = o === "date" || o === "week", w = o === "date" || o === "week", b = o === "date" || o === "week";
  return /* @__PURE__ */ g("div", { className: `land-calendar__header ${v}`, style: L, children: [
    /* @__PURE__ */ g("div", { className: "land-calendar__header-nav", children: [
      w && /* @__PURE__ */ s(
        et,
        {
          variant: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Le, { name: "arrow-double" }),
          className: "land-calendar__nav-btn land-calendar__nav-btn--prev-year",
          disabled: l,
          onClick: () => m == null ? void 0 : m(n - 1)
        }
      ),
      b && /* @__PURE__ */ s(
        et,
        {
          variant: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Le, { name: "arrow" }),
          className: "land-calendar__nav-btn land-calendar__nav-btn--prev",
          disabled: l,
          onClick: h
        }
      ),
      !b && /* @__PURE__ */ s(
        et,
        {
          variant: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Le, { name: "arrow" }),
          className: "land-calendar__nav-btn land-calendar__nav-btn--prev",
          disabled: l,
          onClick: h
        }
      )
    ] }),
    /* @__PURE__ */ g("div", { className: "land-calendar__header-title", children: [
      /* @__PURE__ */ s("div", { className: "land-calendar__year", children: i && k.length > 0 ? /* @__PURE__ */ s(
        hc,
        {
          variant: "transparent",
          value: n.toString(),
          options: k,
          onChange: (x) => m == null ? void 0 : m(Number(x))
        }
      ) : /* @__PURE__ */ s("span", { className: "land-calendar__year-text", children: u || n }) }),
      C && r !== void 0 && /* @__PURE__ */ s("span", { className: "land-calendar__month", children: t === "zh" ? y[r].zh : y[r].en })
    ] }),
    p && /* @__PURE__ */ s("div", { className: "land-calendar__header-extra", children: p }),
    /* @__PURE__ */ g("div", { className: "land-calendar__header-nav", children: [
      b && /* @__PURE__ */ s(
        et,
        {
          variant: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Le, { name: "arrow" }),
          className: "land-calendar__nav-btn land-calendar__nav-btn--next",
          disabled: c,
          onClick: f
        }
      ),
      !b && /* @__PURE__ */ s(
        et,
        {
          variant: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Le, { name: "arrow" }),
          className: "land-calendar__nav-btn land-calendar__nav-btn--next",
          disabled: c,
          onClick: f
        }
      ),
      w && /* @__PURE__ */ s(
        et,
        {
          variant: "text",
          size: "small",
          icon: /* @__PURE__ */ s(Le, { name: "arrow-double" }),
          className: "land-calendar__nav-btn land-calendar__nav-btn--next-year",
          disabled: c,
          onClick: () => m == null ? void 0 : m(n + 1)
        }
      )
    ] })
  ] });
}, fa = ({
  language: e = "zh",
  weekStartDay: t = 0,
  className: n = ""
}) => {
  const r = j(() => {
    const o = [
      { zh: "日", en: "Su" },
      { zh: "一", en: "Mo" },
      { zh: "二", en: "Tu" },
      { zh: "三", en: "We" },
      { zh: "四", en: "Th" },
      { zh: "五", en: "Fr" },
      { zh: "六", en: "Sa" }
    ];
    return t > 0 ? [...o.slice(t), ...o.slice(0, t)] : o;
  }, [t]);
  return /* @__PURE__ */ s("div", { className: `land-calendar__weekdays ${n}`, children: r.map((o, i) => /* @__PURE__ */ s("div", { className: "land-calendar__weekday", children: e === "zh" ? o.zh : o.en }, i)) });
};
function W0(e) {
  return "day" in e && !("date" in e);
}
const e3 = (e) => {
  if (W0(e)) {
    const {
      day: f,
      onDayClick: m,
      onOtherMonthDayClick: v,
      onDayMouseOver: L,
      onDayMouseOut: k,
      onDayMouseEnter: y,
      onDayMouseLeave: C,
      children: w,
      className: b = ""
    } = e, x = (S) => {
      S.stopPropagation(), !f.isDisabled && (f.isCurrentMonth ? m == null || m(f) : v == null || v(f));
    }, N = (S) => {
      !f.isDisabled && L && L(f, S);
    }, T = (S) => {
      !f.isDisabled && k && k(f, S);
    }, _ = (S) => {
      !f.isDisabled && y && y(f, S);
    }, V = (S) => {
      !f.isDisabled && C && C(f, S);
    }, H = [
      "land-calendar__cell",
      f.isToday && "land-calendar__cell--today",
      f.isSelected && "land-calendar__cell--selected",
      f.isDisabled && "land-calendar__cell--disabled",
      !f.isCurrentMonth && "land-calendar__cell--other",
      b
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ g(
      "div",
      {
        className: H,
        onClick: x,
        onMouseOver: N,
        onMouseOut: T,
        onMouseEnter: _,
        onMouseLeave: V,
        children: [
          /* @__PURE__ */ s("span", { className: "land-calendar__cell-text", children: f.dayNumber }),
          w
        ]
      }
    );
  }
  const {
    date: t,
    showOtherMonth: n = !0,
    onClick: r,
    onOtherMonthClick: o,
    onMouseEnter: i,
    onMouseLeave: a,
    children: l,
    className: c = ""
  } = e;
  if (!n && !t.isCurrentMonth)
    return /* @__PURE__ */ s("div", { className: "land-calendar__cell land-calendar__cell--empty" });
  const u = (f) => {
    f.stopPropagation(), !t.isDisabled && (t.isCurrentMonth ? r == null || r(t) : o && o(t));
  }, d = (f) => {
    t.isDisabled || i == null || i(t, f);
  }, p = (f) => {
    t.isDisabled || a == null || a(t, f);
  }, h = [
    "land-calendar__cell",
    t.isToday && "land-calendar__cell--today",
    t.isSelected && "land-calendar__cell--selected",
    t.isDisabled && "land-calendar__cell--disabled",
    !t.isCurrentMonth && "land-calendar__cell--other",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ g(
    "div",
    {
      className: h,
      onClick: u,
      onMouseEnter: d,
      onMouseLeave: p,
      children: [
        /* @__PURE__ */ s("span", { className: "land-calendar__cell-text", children: t.day }),
        l
      ]
    }
  );
};
function Xr(e) {
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
function Un(e, t, n) {
  const r = t ? Xr(t) : null, o = n ? Xr(n) : null;
  return !(r && e < r || o && e > o);
}
function fc(e) {
  if (!e) return;
  const t = Xr(e);
  return t ? t.getFullYear() : void 0;
}
function pc(e) {
  if (!e) return;
  const t = Xr(e);
  return t ? t.getFullYear() : void 0;
}
function t3(e, t, n) {
  const r = fc(t), o = pc(n);
  return !(r && e < r || o && e > o);
}
function ys(e, t, n, r) {
  const o = new Date(e, t, 1);
  return Un(o, n, r);
}
function n3(e, t, n, r) {
  const o = (t - 1) * 3, i = new Date(e, o, 1), a = new Date(e, o + 2, 31);
  return Un(i, n, r) || Un(a, n, r);
}
function pa(e, t, n, r) {
  return Un(e, n, r) || Un(t, n, r);
}
function ws(e, t, n, r, o) {
  const i = new Date(e, t, n);
  return Un(i, r, o);
}
function mc(e, t) {
  const n = (/* @__PURE__ */ new Date()).getFullYear(), r = fc(e), o = pc(t);
  return !r && !o ? [n, n] : r && !o ? [r, n] : !r && o ? [n, o] : r && o ? [r, o] : [n, n];
}
function r3(e, t) {
  const [n, r] = mc(e, t);
  return r > n;
}
function s3(e, t, n, r, o) {
  const i = new Date(e, t, 1), a = new Date(e, t + 1, 0), l = i.getDay(), c = a.getDate(), u = /* @__PURE__ */ new Date(), d = [];
  for (let h = 0; h < l; h++) {
    const f = new Date(e, t, 0), m = new Date(f.getTime() - (l - h - 1) * 24 * 60 * 60 * 1e3), v = m.getDate(), L = m.getMonth(), k = m.getFullYear();
    d.push({
      date: m,
      isCurrentMonth: !1,
      isToday: m.toDateString() === u.toDateString(),
      isSelected: !1,
      isDisabled: !ws(k, L, v, r, o),
      dayNumber: v,
      month: L,
      year: k
    });
  }
  for (let h = 1; h <= c; h++) {
    const f = new Date(e, t, h);
    d.push({
      date: f,
      isCurrentMonth: !0,
      isToday: f.toDateString() === u.toDateString(),
      isSelected: n === h,
      isDisabled: !ws(e, t, h, r, o),
      dayNumber: h,
      month: t,
      year: e
    });
  }
  const p = d.length;
  for (let h = 1; h <= 42 - p; h++) {
    const f = new Date(e, t + 1, h), m = f.getDate(), v = f.getMonth(), L = f.getFullYear();
    d.push({
      date: f,
      isCurrentMonth: !1,
      isToday: f.toDateString() === u.toDateString(),
      isSelected: !1,
      isDisabled: !ws(L, v, m, r, o),
      dayNumber: m,
      month: v,
      year: L
    });
  }
  return d;
}
function o3(e, t, n, r, o) {
  const i = new Date(e, t, 1), a = new Date(e, t + 1, 0), l = i.getDay(), c = a.getDate(), u = /* @__PURE__ */ new Date(), d = [];
  let p = [];
  for (let h = 0; h < l; h++) {
    const f = new Date(e, t, 0), m = new Date(f.getTime() - (l - h - 1) * 24 * 60 * 60 * 1e3);
    p.push(m);
  }
  for (let h = 1; h <= c; h++)
    if (p.push(new Date(e, t, h)), p.length === 7) {
      const f = p[0], m = p[6], v = d.length;
      d.push({
        dates: [...p],
        isCurrentWeek: ma(p, u),
        isSelected: n === v + 1,
        isDisabled: !pa(f, m, r, o),
        weekStart: f,
        weekEnd: m
      }), p = [];
    }
  if (p.length > 0) {
    for (let v = p.length; v < 7; v++) {
      const L = new Date(e, t + 1, v - p.length + 1);
      p.push(L);
    }
    const h = p[0], f = p[6], m = d.length;
    d.push({
      dates: p,
      isCurrentWeek: ma(p, u),
      isSelected: n === m + 1,
      isDisabled: !pa(h, f, r, o),
      weekStart: h,
      weekEnd: f
    });
  }
  return d;
}
function ma(e, t) {
  return e.some(
    (n) => n.getDate() === t.getDate() && n.getMonth() === t.getMonth() && n.getFullYear() === t.getFullYear()
  );
}
const i3 = (e) => {
  const {
    value: t,
    defaultValue: n,
    mode: r = Qt.mode,
    language: o = Qt.language,
    size: i = Qt.size,
    minDate: a,
    maxDate: l,
    disabledDate: c,
    weekStartDay: u = Qt.weekStartDay,
    showHolidays: d = Qt.showHolidays,
    showWeekNumber: p = Qt.showWeekNumber,
    showTodayButton: h = Qt.showTodayButton,
    showOtherMonthDays: f = Qt.showOtherMonthDays,
    allowOtherMonthSelect: m = Qt.allowOtherMonthSelect,
    headerRender: v,
    dateRender: L,
    monthRender: k,
    onChange: y,
    onDateSelect: C,
    onWeekSelect: w,
    onMonthSelect: b,
    onQuarterSelect: x,
    onYearSelect: N,
    onPanelChange: T,
    onDateMouseEnter: _,
    onDateMouseLeave: V,
    className: H = "",
    style: S,
    children: A,
    ...O
  } = e, U = /* @__PURE__ */ new Date(), [re, R] = F(() => t || n || U), [q, J] = F(() => t ?? n ?? null), z = t !== void 0, Q = z ? t : q, X = re.getFullYear(), $ = re.getMonth(), { yearRange: Z, showYearSelector: te } = j(() => ({
    yearRange: mc(a, l),
    showYearSelector: r3(a, l)
  }), [a, l]), pe = j(() => {
    if (!a && !l) return !1;
    const Y = $ <= 0 ? 11 : $ - 1, Ce = $ <= 0 ? X - 1 : X;
    return !ys(Ce, Y, a, l);
  }, [$, X, a, l]), ue = j(() => {
    if (!a && !l) return !1;
    const Y = $ >= 11 ? 0 : $ + 1, Ce = $ >= 11 ? X + 1 : X;
    return !ys(Ce, Y, a, l);
  }, [$, X, a, l]), le = j(() => h ? X !== U.getFullYear() || $ !== U.getMonth() : !1, [h, X, $]), be = j(() => {
    const Y = Q == null ? void 0 : Q.getDate(), Ce = Q == null ? void 0 : Q.getMonth(), xe = Q == null ? void 0 : Q.getFullYear();
    return s3(X, $, void 0, a, l).map((De) => ({
      ...De,
      isSelected: De.isCurrentMonth && De.dayNumber === Y && De.month === Ce && De.year === xe
    }));
  }, [X, $, Q, a, l]), ie = j(() => o3(X, $, void 0, a, l), [X, $, a, l]), D = j(() => [
    { zh: "一月", en: "Jan" },
    { zh: "二月", en: "Feb" },
    { zh: "三月", en: "Mar" },
    { zh: "四月", en: "Apr" },
    { zh: "五月", en: "May" },
    { zh: "六月", en: "Jun" },
    { zh: "七月", en: "Jul" },
    { zh: "八月", en: "Aug" },
    { zh: "九月", en: "Sep" },
    { zh: "十月", en: "Oct" },
    { zh: "十一月", en: "Nov" },
    { zh: "十二月", en: "Dec" }
  ].map((Ce, xe) => ({
    ...Ce,
    value: xe,
    isCurrentMonth: X === U.getFullYear() && xe === U.getMonth(),
    isSelected: Q ? X === Q.getFullYear() && xe === Q.getMonth() : !1,
    isDisabled: !ys(X, xe, a, l)
  })), [X, Q, a, l]), he = j(() => {
    const Y = Math.floor(U.getMonth() / 3) + 1, Ce = Q ? Math.floor(Q.getMonth() / 3) + 1 : null;
    return [
      { zh: "第一季度", en: "Q1", value: 1, months: o === "zh" ? "1-3月" : "Jan-Mar", desc: o === "zh" ? "春季" : "Spring" },
      { zh: "第二季度", en: "Q2", value: 2, months: o === "zh" ? "4-6月" : "Apr-Jun", desc: o === "zh" ? "夏季" : "Summer" },
      { zh: "第三季度", en: "Q3", value: 3, months: o === "zh" ? "7-9月" : "Jul-Sep", desc: o === "zh" ? "秋季" : "Autumn" },
      { zh: "第四季度", en: "Q4", value: 4, months: o === "zh" ? "10-12月" : "Oct-Dec", desc: o === "zh" ? "冬季" : "Winter" }
    ].map((xe) => ({
      ...xe,
      isCurrentQuarter: X === U.getFullYear() && xe.value === Y,
      isSelected: Q ? X === Q.getFullYear() && xe.value === Ce : !1,
      isDisabled: !n3(X, xe.value, a, l)
    }));
  }, [X, Q, o, a, l]), ne = Math.floor(X / 10) * 10, ge = j(() => Array.from({ length: 10 }, (Y, Ce) => {
    const xe = ne + Ce;
    return {
      year: xe,
      isCurrentYear: xe === U.getFullYear(),
      isSelected: Q ? xe === Q.getFullYear() : !1,
      isDisabled: !t3(xe, a, l)
    };
  }), [ne, Q, a, l]), I = M((Y) => {
    R(Y), T == null || T(Y, r);
  }, [r, T]), E = M(() => {
    let Y;
    r === "date" || r === "week" ? Y = new Date(X, $ - 1, 1) : r === "month" || r === "quarter" ? Y = new Date(X - 1, $, 1) : Y = new Date(ne - 10, 0, 1), I(Y);
  }, [r, X, $, ne, I]), W = M(() => {
    let Y;
    r === "date" || r === "week" ? Y = new Date(X, $ + 1, 1) : r === "month" || r === "quarter" ? Y = new Date(X + 1, $, 1) : Y = new Date(ne + 10, 0, 1), I(Y);
  }, [r, X, $, ne, I]), fe = M((Y) => {
    if (!isNaN(Y)) {
      const Ce = new Date(Y, $, 1);
      I(Ce);
    }
  }, [$, I]), K = M(() => {
    const Y = /* @__PURE__ */ new Date();
    R(Y), z || J(Y);
    const Ce = {
      date: Y,
      day: Y.getDate(),
      month: Y.getMonth(),
      year: Y.getFullYear(),
      isCurrentMonth: !0,
      isToday: !0,
      isSelected: !0,
      isDisabled: !1
    };
    y == null || y(Y, Ce), C == null || C(Y, Ce);
  }, [z, y, C]), P = M((Y) => {
    if (Y.isDisabled) return;
    const Ce = Y.date;
    z || J(Ce);
    const xe = {
      date: Ce,
      day: Y.dayNumber,
      month: Y.month,
      year: Y.year,
      isCurrentMonth: Y.isCurrentMonth,
      isToday: Y.isToday,
      isSelected: !0,
      isDisabled: !1
    };
    y == null || y(Ce, xe), C == null || C(Ce, xe);
  }, [z, y, C]), oe = M((Y) => {
    if (!m || Y.isDisabled) return;
    R(new Date(Y.year, Y.month, 1));
    const Ce = Y.date;
    z || J(Ce);
    const xe = {
      date: Ce,
      day: Y.dayNumber,
      month: Y.month,
      year: Y.year,
      isCurrentMonth: !0,
      isToday: Y.isToday,
      isSelected: !0,
      isDisabled: !1
    };
    y == null || y(Ce, xe), C == null || C(Ce, xe);
  }, [m, z, y, C]), se = M((Y, Ce) => {
    if (Y.isDisabled) return;
    const xe = Y.weekStart;
    z || J(xe);
    const De = {
      startDate: Y.weekStart,
      endDate: Y.weekEnd,
      dates: Y.dates,
      weekNumber: Ce + 1,
      isCurrentWeek: Y.isCurrentWeek,
      isSelected: !0,
      isDisabled: !1
    };
    y == null || y(xe, De), w == null || w(xe, De);
  }, [z, y, w]), ve = M((Y) => {
    const Ce = D[Y];
    if (Ce.isDisabled) return;
    const xe = new Date(X, Y, 1);
    z || J(xe);
    const De = {
      month: Y,
      year: X,
      isCurrentMonth: Ce.isCurrentMonth,
      isSelected: !0,
      isDisabled: !1
    };
    y == null || y(xe, De), b == null || b(Y, X, De);
  }, [X, D, z, y, b]), _e = M((Y) => {
    const Ce = he.find((lt) => lt.value === Y);
    if (!Ce || Ce.isDisabled) return;
    const xe = new Date(X, (Y - 1) * 3, 1);
    z || J(xe);
    const De = {
      quarter: Y,
      year: X,
      isCurrentQuarter: Ce.isCurrentQuarter,
      isSelected: !0,
      isDisabled: !1
    };
    y == null || y(xe, De), x == null || x(Y, X, De);
  }, [X, he, z, y, x]), Se = M((Y) => {
    const Ce = ge.find((lt) => lt.year === Y);
    if (!Ce || Ce.isDisabled) return;
    const xe = new Date(Y, 0, 1);
    z || J(xe);
    const De = {
      year: Y,
      isCurrentYear: Ce.isCurrentYear,
      isSelected: !0,
      isDisabled: !1
    };
    y == null || y(xe, De), N == null || N(Y, De);
  }, [ge, z, y, N]), we = () => {
    if (v)
      return v({ year: X, month: $, mode: r });
    let Y, Ce;
    if (r === "year") {
      Y = `${ne}-${ne + 9}`;
      const [xe, De] = Z, lt = Math.floor(xe / 10) * 10, wt = Math.floor(De / 10) * 10;
      Ce = [];
      for (let ce = lt; ce <= wt; ce += 10)
        Ce.push({ key: ce.toString(), label: `${ce}-${ce + 9}` });
    }
    return /* @__PURE__ */ s(
      J0,
      {
        language: o,
        year: X,
        month: $,
        mode: r,
        showYearSelector: te,
        yearRange: Z,
        prevDisabled: pe,
        nextDisabled: ue,
        yearDisplay: Y,
        yearOptions: Ce,
        onPrev: E,
        onNext: W,
        onYearChange: fe
      }
    );
  }, Ie = () => /* @__PURE__ */ g(tt, { children: [
    /* @__PURE__ */ s(fa, { language: o, weekStartDay: u }),
    /* @__PURE__ */ s("div", { className: "land-calendar__grid land-calendar__grid--date", children: be.map((Y, Ce) => /* @__PURE__ */ s(
      e3,
      {
        day: Y,
        onDayClick: P,
        onOtherMonthDayClick: m ? oe : void 0,
        children: L == null ? void 0 : L({
          date: Y.date,
          day: Y.dayNumber,
          month: Y.month,
          year: Y.year,
          isCurrentMonth: Y.isCurrentMonth,
          isToday: Y.isToday,
          isSelected: Y.isSelected,
          isDisabled: Y.isDisabled
        })
      },
      `${Y.year}-${Y.month}-${Y.dayNumber}-${Ce}`
    )) })
  ] }), Ue = () => /* @__PURE__ */ g(tt, { children: [
    /* @__PURE__ */ s(fa, { language: o, weekStartDay: u }),
    /* @__PURE__ */ s("div", { className: "land-calendar__grid land-calendar__grid--week", children: ie.map((Y, Ce) => {
      const xe = Q ? Y.dates.some((De) => De.toDateString() === Q.toDateString()) : !1;
      return /* @__PURE__ */ s(
        "div",
        {
          className: `land-calendar__week-row ${xe ? "land-calendar__week-row--selected" : ""} ${Y.isCurrentWeek ? "land-calendar__week-row--current" : ""} ${Y.isDisabled ? "land-calendar__week-row--disabled" : ""}`,
          onClick: () => se(Y, Ce),
          children: Y.dates.map((De, lt) => /* @__PURE__ */ s(
            "div",
            {
              className: `land-calendar__cell ${De.toDateString() === U.toDateString() ? "land-calendar__cell--today" : ""} ${De.getMonth() !== $ ? "land-calendar__cell--other" : ""}`,
              children: /* @__PURE__ */ s("span", { className: "land-calendar__cell-text", children: De.getDate() })
            },
            lt
          ))
        },
        Ce
      );
    }) })
  ] }), Ve = () => /* @__PURE__ */ s("div", { className: "land-calendar__grid land-calendar__grid--month", children: D.map((Y, Ce) => /* @__PURE__ */ s(
    "div",
    {
      className: `land-calendar__month-cell ${Y.isCurrentMonth ? "land-calendar__month-cell--current" : ""} ${Y.isSelected ? "land-calendar__month-cell--selected" : ""} ${Y.isDisabled ? "land-calendar__month-cell--disabled" : ""}`,
      onClick: () => ve(Ce),
      children: /* @__PURE__ */ s("span", { className: "land-calendar__month-text", children: o === "zh" ? Y.zh : Y.en })
    },
    Ce
  )) }), Oe = () => /* @__PURE__ */ s("div", { className: "land-calendar__grid land-calendar__grid--quarter", children: he.map((Y, Ce) => /* @__PURE__ */ g(
    "div",
    {
      className: `land-calendar__quarter-cell ${Y.isCurrentQuarter ? "land-calendar__quarter-cell--current" : ""} ${Y.isSelected ? "land-calendar__quarter-cell--selected" : ""} ${Y.isDisabled ? "land-calendar__quarter-cell--disabled" : ""}`,
      onClick: () => _e(Y.value),
      children: [
        /* @__PURE__ */ s("div", { className: "land-calendar__quarter-header", children: /* @__PURE__ */ s("span", { className: "land-calendar__quarter-name", children: o === "zh" ? Y.zh : Y.en }) }),
        /* @__PURE__ */ s("span", { className: "land-calendar__quarter-months", children: Y.months }),
        /* @__PURE__ */ s("span", { className: "land-calendar__quarter-desc", children: Y.desc })
      ]
    },
    Ce
  )) }), Re = () => /* @__PURE__ */ s("div", { className: "land-calendar__grid land-calendar__grid--year", children: ge.map((Y, Ce) => /* @__PURE__ */ s(
    "div",
    {
      className: `land-calendar__year-cell ${Y.isCurrentYear ? "land-calendar__year-cell--current" : ""} ${Y.isSelected ? "land-calendar__year-cell--selected" : ""} ${Y.isDisabled ? "land-calendar__year-cell--disabled" : ""}`,
      onClick: () => Se(Y.year),
      children: /* @__PURE__ */ s("span", { className: "land-calendar__year-text", children: Y.year })
    },
    Ce
  )) }), Ge = () => {
    switch (r) {
      case "date":
        return Ie();
      case "week":
        return Ue();
      case "month":
        return Ve();
      case "quarter":
        return Oe();
      case "year":
        return Re();
      default:
        return Ie();
    }
  }, ze = [
    "land-calendar",
    `land-calendar--${r}`,
    `land-calendar--${i}`,
    H
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ g("div", { className: ze, style: S, ...O, children: [
    we(),
    /* @__PURE__ */ s("div", { className: "land-calendar__body", children: Ge() }),
    le && /* @__PURE__ */ s(
      et,
      {
        variant: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        icon: /* @__PURE__ */ s(Le, { name: "last-step" }),
        text: o === "zh" ? "返回今天" : "Today",
        className: "land-calendar__today-btn",
        onClick: K
      }
    ),
    A
  ] });
}, lm = ({
  checked: e,
  data: t,
  animated: n,
  onChange: r,
  style: o,
  className: i = ""
}) => /* @__PURE__ */ s("div", { className: `land-checkbox ${i}`, style: o, children: t == null ? void 0 : t.map(
  (a) => /* @__PURE__ */ s(
    Io,
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
), an = {
  variant: "default",
  arrowPosition: "start",
  defaultExpanded: !1,
  disabled: !1,
  hideArrow: !1,
  destroyOnCollapse: !1,
  animated: !0,
  duration: 200
}, kt = "land-collapse", dm = (e) => {
  const {
    // 外观属性
    variant: t = an.variant,
    arrowPosition: n = an.arrowPosition,
    // 内容属性
    title: r,
    content: o,
    children: i,
    extra: a,
    arrow: l,
    // 状态属性
    expanded: c,
    defaultExpanded: u = an.defaultExpanded,
    disabled: d = an.disabled,
    hideArrow: p = an.hideArrow,
    destroyOnCollapse: h = an.destroyOnCollapse,
    // 动画属性
    animated: f = an.animated,
    duration: m = an.duration,
    // 事件属性
    onChange: v,
    onHeaderClick: L,
    onKeyDown: k,
    // 样式属性
    className: y,
    style: C,
    headerClassName: w,
    headerStyle: b,
    contentClassName: x,
    contentStyle: N,
    htmlProps: T
  } = e, _ = c !== void 0, [V, H] = F(u), S = _ ? c : V, A = ae(null), O = ae(null), [U, re] = F(S ? "auto" : 0), [R, q] = F(!1), [J, z] = F(S || !h), Q = M(() => O.current ? O.current.scrollHeight : 0, []);
  de(() => {
    if (!f) {
      re(S ? "auto" : 0), z(S || !h);
      return;
    }
    if (S)
      z(!0), q(!0), requestAnimationFrame(() => {
        const D = Q();
        re(D), setTimeout(() => {
          re("auto"), q(!1);
        }, m);
      });
    else {
      q(!0);
      const D = Q();
      re(D), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          re(0), setTimeout(() => {
            q(!1), h && z(!1);
          }, m);
        });
      });
    }
  }, [S, f, m, h, Q]);
  const X = M(() => {
    if (d || R) return;
    const D = !S;
    _ || H(D), v == null || v(D);
  }, [d, R, S, _, v]), $ = M((D) => {
    L == null || L(D), X();
  }, [L, X]), Z = M((D) => {
    k == null || k(D), (D.key === "Enter" || D.key === " ") && (D.preventDefault(), X());
  }, [k, X]), te = j(() => {
    const D = [kt];
    return D.push(`${kt}--${t}`), S && D.push(`${kt}--expanded`), d && D.push(`${kt}--disabled`), R && D.push(`${kt}--animating`), y && D.push(y), D.join(" ");
  }, [t, S, d, R, y]), pe = j(() => {
    const D = [`${kt}__header`];
    return D.push(`${kt}__header--arrow-${n}`), w && D.push(w), D.join(" ");
  }, [n, w]), ue = j(() => {
    const D = [`${kt}__content`];
    return x && D.push(x), D.join(" ");
  }, [x]), le = j(() => ({
    ...N,
    height: U === "auto" ? "auto" : `${U}px`,
    transitionDuration: f ? `${m}ms` : "0ms"
  }), [N, U, f, m]), be = () => p ? null : l !== void 0 ? typeof l == "function" ? /* @__PURE__ */ s("span", { className: `${kt}__arrow`, children: l(S) }) : /* @__PURE__ */ s("span", { className: `${kt}__arrow`, children: l }) : /* @__PURE__ */ s("span", { className: `${kt}__arrow`, children: /* @__PURE__ */ s(
    Le,
    {
      name: "arrow",
      strokeWidth: 4,
      size: 16,
      stroke: "var(--color-text-tertiary)"
    }
  ) }), ie = () => i ?? o;
  return /* @__PURE__ */ g("div", { className: te, style: C, ...T, children: [
    /* @__PURE__ */ g(
      "div",
      {
        className: pe,
        style: b,
        onClick: $,
        onKeyDown: Z,
        role: "button",
        tabIndex: d ? -1 : 0,
        "aria-expanded": S,
        "aria-disabled": d,
        children: [
          n === "start" && be(),
          /* @__PURE__ */ s("div", { className: `${kt}__title`, children: r }),
          a && /* @__PURE__ */ s("div", { className: `${kt}__extra`, children: a }),
          n === "end" && be()
        ]
      }
    ),
    /* @__PURE__ */ s(
      "div",
      {
        ref: A,
        className: ue,
        style: le,
        "aria-hidden": !S,
        children: /* @__PURE__ */ s("div", { ref: O, className: `${kt}__content-inner`, children: J && ie() })
      }
    )
  ] });
}, um = ({ children: e, style: t, className: n }) => {
  const [r, o] = F(132), i = document.querySelector(".land-header"), a = document.querySelector(".land-footer");
  return de(() => {
    let l, c;
    i ? l = i.getBoundingClientRect().height : l = 0, a ? c = a.getBoundingClientRect().height : c = 0, o(l + c);
  }), /* @__PURE__ */ s("div", { className: `land-content ${n}`, style: {
    "--land-content-min-height": `${r}px`,
    ...t
  }, children: e });
}, Zt = {
  defaultValue: "#1677ff",
  showAlpha: !0,
  disabled: !1,
  size: "default",
  trigger: "default",
  allowClear: !1,
  showInput: !0,
  showFormatSwitch: !0,
  panelWidth: 280,
  panelHeight: 200
}, a3 = [
  "#f5222d",
  "#fa541c",
  "#fa8c16",
  "#faad14",
  "#fadb14",
  "#a0d911",
  "#52c41a",
  "#13c2c2",
  "#1677ff",
  "#2f54eb",
  "#722ed1",
  "#eb2f96",
  "#000000",
  "#434343",
  "#666666",
  "#999999",
  "#cccccc",
  "#ffffff"
], Qe = "land-input", l3 = (e, t) => {
  if (!e || t.length === 0)
    return e ? [{ type: "default", text: e }] : [];
  const n = [];
  let r = e;
  for (; r.length > 0; ) {
    let o = null;
    for (const i of t) {
      const a = typeof i == "string" ? i : i.text, l = r.indexOf(a);
      l !== -1 && (o === null || l < o.index) && (o = {
        index: l,
        text: a,
        item: typeof i == "object" ? i : void 0
      });
    }
    if (o === null) {
      n.push({ type: "default", text: r });
      break;
    }
    o.index > 0 && n.push({ type: "default", text: r.slice(0, o.index) }), n.push({
      type: "highlight",
      text: o.text,
      item: o.item
    }), r = r.slice(o.index + o.text.length);
  }
  return n;
}, c3 = ({
  variant: e = "outline",
  status: t = "default",
  size: n = "default",
  textAlign: r = "left",
  inputType: o = "text",
  value: i,
  placeholder: a = "请输入",
  disabled: l = !1,
  maxLength: c,
  block: u = !1,
  beforeContent: d,
  afterContent: p,
  onChange: h,
  onEnter: f,
  onFocus: m,
  onBlur: v,
  onClear: L,
  className: k = "",
  style: y,
  htmlProps: C,
  highlights: w = [],
  renderHighlight: b
}) => {
  const x = ae(null), N = ae(null), [T, _] = F(i ?? ""), V = ae(!1);
  de(() => {
    V.current || _(i ?? "");
  }, [i]);
  const H = j(
    () => l3(T, w),
    [T, w]
  ), S = j(() => [
    Qe,
    `${Qe}--${e}`,
    `${Qe}--${t}`,
    `${Qe}--${n}`,
    `${Qe}--align-${r}`,
    `${Qe}--highlight`,
    l && `${Qe}--disabled`,
    u && `${Qe}--block`,
    L && `${Qe}--clearable`,
    k
  ].filter(Boolean).join(" "), [e, t, n, r, l, u, L, k]), A = M(() => {
    !N.current || !x.current || (N.current.scrollLeft = x.current.scrollLeft);
  }, []), O = M(
    ($) => {
      N.current && (N.current.scrollLeft = 0), v == null || v($);
    },
    [v]
  ), U = M(
    ($) => {
      $.key === "Enter" && (f == null || f(T, $));
    },
    [f, T]
  ), re = M(
    ($) => {
      const Z = $.target.value;
      _(Z), A(), h == null || h(Z, $);
    },
    [A, h]
  ), R = M(() => {
    V.current = !0;
  }, []), q = M(
    ($) => {
      V.current = !1;
      const Z = $.target.value;
      _(Z), h == null || h(Z);
    },
    [h]
  ), J = {
    ref: x,
    type: o,
    placeholder: a,
    value: T,
    maxLength: c,
    disabled: l,
    onKeyDown: U,
    onClick: ($) => $.stopPropagation(),
    onFocus: m,
    onBlur: O,
    onChange: re,
    onScroll: A,
    onCompositionStart: R,
    onCompositionEnd: q,
    ...C
  }, z = ($, Z) => {
    var pe, ue, le;
    if ($.type === "default")
      return /* @__PURE__ */ s("span", { children: $.text }, Z);
    if (b)
      return /* @__PURE__ */ s(pn.Fragment, { children: b($.text, $.item) }, Z);
    const te = {};
    return (pe = $.item) != null && pe.color && (te.color = $.item.color), (ue = $.item) != null && ue.backgroundColor && (te.backgroundColor = $.item.backgroundColor), /* @__PURE__ */ s(
      "span",
      {
        className: `${Qe}__highlight-item ${((le = $.item) == null ? void 0 : le.className) || ""}`,
        style: te,
        children: $.text
      },
      Z
    );
  }, Q = () => T ? /* @__PURE__ */ s(
    "div",
    {
      ref: N,
      className: `${Qe}__highlight-overlay ${l ? `${Qe}__highlight-overlay--disabled` : ""}`,
      children: H.map(($, Z) => z($, Z))
    }
  ) : /* @__PURE__ */ s("div", { className: `${Qe}__highlight-placeholder`, children: a }), X = () => L ? /* @__PURE__ */ s(
    "div",
    {
      className: `${Qe}__clear ${T ? `${Qe}__clear--active` : ""}`,
      onClick: L,
      children: /* @__PURE__ */ s(Le, { name: "error-fill" })
    }
  ) : null;
  return /* @__PURE__ */ s("div", { className: S, style: y, children: /* @__PURE__ */ g("div", { className: `${Qe}__content`, children: [
    d && /* @__PURE__ */ s("div", { className: `${Qe}__before`, children: d }),
    /* @__PURE__ */ g("div", { className: `${Qe}__body ${Qe}__body--highlight`, children: [
      Q(),
      /* @__PURE__ */ s("input", { className: `${Qe}__input--transparent`, ...J })
    ] }),
    p && /* @__PURE__ */ s("div", { className: `${Qe}__after`, children: p }),
    X()
  ] }) });
}, Fe = "land-input", gr = ({
  variant: e = "outline",
  status: t = "default",
  size: n = "default",
  textAlign: r = "left",
  inputType: o = "text",
  value: i,
  placeholder: a = "请输入",
  disabled: l = !1,
  maxLength: c,
  block: u = !1,
  autoWidth: d = !1,
  beforeContent: p,
  afterContent: h,
  prefix: f,
  suffix: m,
  onChange: v,
  onEnter: L,
  onFocus: k,
  onBlur: y,
  onClear: C,
  className: w = "",
  style: b,
  htmlProps: x
}) => {
  const N = ae(null), T = ae(null), [_, V] = F(i ?? ""), H = ae(!1);
  de(() => {
    H.current || V(i ?? "");
  }, [i]);
  const S = j(() => [
    Fe,
    `${Fe}--${e}`,
    `${Fe}--${t}`,
    `${Fe}--${n}`,
    `${Fe}--align-${r}`,
    l && `${Fe}--disabled`,
    u && `${Fe}--block`,
    d && `${Fe}--auto-width`,
    C && `${Fe}--clearable`,
    w
  ].filter(Boolean).join(" "), [e, t, n, r, l, u, d, C, w]), A = M(() => {
    !N.current || !T.current || (N.current.scrollLeft = T.current.scrollLeft);
  }, []), O = M(($) => {
    N.current && (N.current.scrollLeft = 0), y == null || y($);
  }, [y]), U = M(($) => {
    $.key === "Enter" && (L == null || L(_, $));
  }, [L, _]), re = M(($) => {
    const Z = $.target.value;
    V(Z), A(), v == null || v(Z, $);
  }, [A, v]), R = M(() => {
    H.current = !0;
  }, []), q = M(($) => {
    H.current = !1;
    const Z = $.target.value;
    V(Z), v == null || v(Z);
  }, [v]), J = {
    ref: T,
    type: o,
    placeholder: a,
    value: _,
    maxLength: c,
    disabled: l,
    onKeyDown: U,
    onClick: ($) => $.stopPropagation(),
    onFocus: k,
    onBlur: O,
    onChange: re,
    onScroll: A,
    onCompositionStart: R,
    onCompositionEnd: q,
    ...x
  }, z = () => f ? /* @__PURE__ */ g(tt, { children: [
    /* @__PURE__ */ g("div", { className: `${Fe}__prefix-ghost`, children: [
      /* @__PURE__ */ s("span", { className: `${Fe}__affix-label`, children: f }),
      /* @__PURE__ */ s("span", { className: `${Fe}__affix-value`, children: _ || a })
    ] }),
    /* @__PURE__ */ s("span", { className: `${Fe}__affix-spacer`, children: f })
  ] }) : null, Q = () => !m || !_ ? null : /* @__PURE__ */ g("div", { className: `${Fe}__suffix-ghost`, children: [
    f && /* @__PURE__ */ s("span", { className: `${Fe}__affix-spacer`, children: f }),
    /* @__PURE__ */ s("span", { className: `${Fe}__affix-value`, children: _ }),
    /* @__PURE__ */ s("span", { className: `${Fe}__affix-label ${Fe}__affix-label--suffix`, children: m })
  ] }), X = () => C ? /* @__PURE__ */ s(
    "div",
    {
      className: `${Fe}__clear ${_ ? `${Fe}__clear--active` : ""}`,
      onClick: C,
      children: /* @__PURE__ */ s(Le, { name: "error-fill" })
    }
  ) : null;
  return /* @__PURE__ */ s("div", { className: S, style: b, children: /* @__PURE__ */ g("div", { className: `${Fe}__content`, children: [
    p && /* @__PURE__ */ s("div", { className: `${Fe}__before`, children: p }),
    /* @__PURE__ */ g("div", { className: `${Fe}__body`, children: [
      z(),
      /* @__PURE__ */ s("input", { ...J }),
      d && /* @__PURE__ */ s("span", { className: `${Fe}__mirror`, "aria-hidden": !0, children: _ || a }),
      Q()
    ] }),
    m && _ && /* @__PURE__ */ s("span", { className: `${Fe}__affix-spacer ${Fe}__affix-spacer--suffix`, children: m }),
    h && /* @__PURE__ */ s("div", { className: `${Fe}__after`, children: h }),
    X()
  ] }) });
};
gr.InputHighlight = c3;
const ln = "land-divider", qt = ({
  direction: e = "horizontal",
  variant: t = "solid",
  align: n = "center",
  content: r,
  length: o = "100%",
  spacing: i = 0,
  dashLength: a = 10,
  dashGap: l = 5,
  className: c = "",
  style: u
}) => {
  const d = e === "vertical", p = r != null, h = j(
    () => [
      ln,
      `${ln}--${e}`,
      `${ln}--${t}`,
      p && `${ln}--with-content`,
      p && `${ln}--align-${n}`,
      c
    ].filter(Boolean).join(" "),
    [e, t, p, n, c]
  ), f = j(
    () => ({
      "--land-divider-length": o,
      "--land-divider-spacing": `${i}px`,
      "--land-divider-dash-length": `${a}px`,
      "--land-divider-dash-gap": `${l}px`,
      ...d ? { height: o, margin: `0 ${i}px` } : { width: o, margin: `${i}px 0` },
      ...u
    }),
    [o, i, a, l, d, u]
  );
  return /* @__PURE__ */ g("div", { className: h, style: f, children: [
    /* @__PURE__ */ s("div", { className: `${ln}__line` }),
    p && /* @__PURE__ */ g(tt, { children: [
      /* @__PURE__ */ s("div", { className: `${ln}__content`, children: r }),
      /* @__PURE__ */ s("div", { className: `${ln}__line` })
    ] })
  ] });
}, _t = {
  defaultValue: 0,
  variant: "outline",
  size: "default",
  stepperPosition: "right",
  textAlign: "left",
  step: 1,
  min: -1 / 0,
  max: 1 / 0,
  disabled: !1,
  readOnly: !1,
  wheelable: !1,
  autoWidth: !1
}, At = ({
  // 基础属性
  value: e,
  defaultValue: t = _t.defaultValue,
  name: n,
  placeholder: r,
  // 外观属性
  variant: o = _t.variant,
  size: i = _t.size,
  stepperPosition: a = _t.stepperPosition,
  textAlign: l = _t.textAlign,
  // 数值属性
  step: c = _t.step,
  min: u = _t.min,
  max: d = _t.max,
  precision: p,
  strictStep: h = !1,
  // 内容属性
  prefix: f,
  suffix: m,
  formatter: v,
  parser: L,
  // 交互属性
  disabled: k = _t.disabled,
  readOnly: y = _t.readOnly,
  wheelable: C = _t.wheelable,
  // 样式属性
  className: w,
  style: b,
  width: x,
  autoWidth: N = _t.autoWidth,
  inputClassName: T,
  inputStyle: _,
  // 事件属性
  onChange: V,
  onStep: H,
  onFocus: S,
  onBlur: A,
  onPressEnter: O
}) => {
  const U = e !== void 0, [re, R] = F(() => e !== void 0 ? e : t);
  de(() => {
    e !== void 0 && R(e);
  }, [e]);
  const q = U ? e : re, J = M(
    (ne) => p !== void 0 ? Number(ne.toFixed(p)) : ne,
    [p]
  ), z = M(
    (ne) => {
      let ge = ne;
      return u !== void 0 && ge < u && (ge = u), d !== void 0 && ge > d && (ge = d), J(ge);
    },
    [u, d, J]
  ), Q = M(
    (ne) => {
      if (!h || c === void 0) return !0;
      const I = Math.abs((ne - (u !== -1 / 0 ? u : 0)) % c);
      return I < 1e-10 || Math.abs(I - c) < 1e-10;
    },
    [h, c, u]
  ), X = j(() => q === void 0 ? "" : v ? v(q) : String(q), [q, v]), $ = M(
    (ne, ge) => {
      if (k) return;
      let I = ne;
      I !== void 0 && (I = z(I), h && !Q(I)) || (U || R(I), V == null || V(I, ge));
    },
    [k, z, h, Q, U, V]
  ), Z = M(
    (ne, ge) => {
      if (k || y) return;
      if (ne === "" || ne === "-") {
        $(void 0, { source: "input", event: ge });
        return;
      }
      let I;
      L ? I = L(ne) : I = Number(ne), !isNaN(I) && $(I, { source: "input", event: ge });
    },
    [k, y, L, $]
  ), te = M(
    (ne, ge) => {
      if (k) return;
      const I = q ?? 0, E = ne === "up" ? c : -c, W = J(I + E);
      ne === "up" && W > d || ne === "down" && W < u || ($(W, { source: "step", event: ge }), H == null || H(W, ne));
    },
    [k, q, c, J, d, u, $, H]
  ), pe = M(
    (ne) => {
      if (!C || k) return;
      ne.preventDefault(), ne.stopPropagation();
      const ge = ne.deltaY > 0 ? "down" : "up";
      te(ge, ne);
    },
    [C, k, te]
  ), ue = M(
    (ne, ge) => {
      ge && (O == null || O(ge));
    },
    [O]
  ), le = M(
    (ne) => {
      if (q !== void 0) {
        const ge = z(q);
        ge !== q && $(ge, { source: "input", event: ne });
      }
      A == null || A(ne);
    },
    [q, z, $, A]
  ), be = j(() => {
    const ne = ["land-number-input"];
    return o && ne.push(`land-number-input--${o}`), i && i !== "default" && ne.push(`land-number-input--${i}`), a === "none" && ne.push("land-number-input--no-stepper"), a === "both" && ne.push("land-number-input--stepper-both"), k && ne.push("land-number-input--disabled"), C && ne.push("land-number-input--wheelable"), N && ne.push("land-number-input--auto-width"), w && ne.push(w), ne.join(" ");
  }, [o, i, a, k, C, N, w]), ie = q !== void 0 && q <= u, D = q !== void 0 && q >= d, he = (ne) => {
    const ge = k || (ne === "up" ? D : ie), I = [
      "land-number-input__step-btn",
      `land-number-input__step-btn--${ne}`,
      ge ? "land-number-input__step-btn--disabled" : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s(
      "div",
      {
        className: I,
        onClick: (E) => {
          E.stopPropagation(), ge || te(ne, E);
        },
        role: "button",
        "aria-label": ne === "up" ? "增加" : "减少",
        "aria-disabled": ge,
        tabIndex: ge ? -1 : 0,
        children: /* @__PURE__ */ s(Le, { name: "arrow", size: i === "small" ? 14 : i === "large" ? 18 : 16 })
      }
    );
  };
  return /* @__PURE__ */ g(
    "div",
    {
      className: be,
      style: {
        width: typeof x == "number" ? `${x}px` : x,
        ...b
      },
      onClick: (ne) => ne.stopPropagation(),
      onWheel: pe,
      "data-name": n,
      "data-value": q,
      children: [
        a === "both" && /* @__PURE__ */ s("div", { className: "land-number-input__stepper land-number-input__stepper--left", children: he("down") }),
        C ? /* @__PURE__ */ s(
          at,
          {
            attach: "body",
            className: "land-number-input__popover",
            content: "滚动鼠标滚轮调整数值",
            placement: "top",
            theme: "dark",
            children: /* @__PURE__ */ s(
              gr,
              {
                className: `land-number-input__input ${T ?? ""}`,
                variant: o,
                inputType: "text",
                value: X,
                disabled: k || y,
                autoWidth: N,
                prefix: f,
                suffix: m,
                placeholder: r,
                textAlign: l,
                onChange: Z,
                onEnter: ue,
                onFocus: S,
                onBlur: le,
                style: {
                  paddingRight: a === "right" ? "32px" : void 0,
                  paddingLeft: a === "both" ? "32px" : void 0,
                  ..._
                }
              }
            )
          }
        ) : /* @__PURE__ */ s("div", { className: "land-number-input__popover", children: /* @__PURE__ */ s(
          gr,
          {
            className: `land-number-input__input ${T ?? ""}`,
            variant: o,
            inputType: "text",
            value: X,
            disabled: k || y,
            autoWidth: N,
            prefix: f,
            suffix: m,
            placeholder: r,
            textAlign: l,
            onChange: Z,
            onEnter: ue,
            onFocus: S,
            onBlur: le,
            style: {
              paddingRight: a === "right" ? "32px" : void 0,
              paddingLeft: a === "both" ? "32px" : void 0,
              ..._
            }
          }
        ) }),
        a === "right" && /* @__PURE__ */ g("div", { className: "land-number-input__stepper land-number-input__stepper--right", children: [
          he("up"),
          o !== "transparent" && /* @__PURE__ */ s(qt, { spacing: 0, length: "32px" }),
          he("down")
        ] }),
        a === "both" && /* @__PURE__ */ s("div", { className: "land-number-input__stepper land-number-input__stepper--right", children: he("up") })
      ]
    }
  );
}, Te = {
  // RGB转HSV
  rgbToHsv: (e, t, n) => {
    e = Math.max(0, Math.min(255, Math.round(e))), t = Math.max(0, Math.min(255, Math.round(t))), n = Math.max(0, Math.min(255, Math.round(n))), e /= 255, t /= 255, n /= 255;
    const r = Math.max(e, t, n), o = Math.min(e, t, n), i = r - o;
    let a = 0, l = 0;
    const c = r;
    if (i !== 0) {
      switch (l = i / r, r) {
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
      s: Math.round(l * 100),
      v: Math.round(c * 100)
    };
  },
  // HSV转RGB
  hsvToRgb: (e, t, n) => {
    e = (e % 360 + 360) % 360, t = Math.max(0, Math.min(100, t)), n = Math.max(0, Math.min(100, n)), e /= 360, t /= 100, n /= 100;
    const r = Math.floor(e * 6), o = e * 6 - r, i = n * (1 - t), a = n * (1 - o * t), l = n * (1 - (1 - o) * t);
    let c = 0, u = 0, d = 0;
    switch (r % 6) {
      case 0:
        c = n, u = l, d = i;
        break;
      case 1:
        c = a, u = n, d = i;
        break;
      case 2:
        c = i, u = n, d = l;
        break;
      case 3:
        c = i, u = a, d = n;
        break;
      case 4:
        c = l, u = i, d = n;
        break;
      case 5:
        c = n, u = i, d = a;
        break;
    }
    return {
      r: Math.max(0, Math.min(255, Math.round(c * 255))),
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
    let l = 0, c = 0;
    const u = a / 2;
    if (i !== 0) {
      switch (c = u > 0.5 ? i / (2 - a) : i / a, r) {
        case e:
          l = (t - n) / i + (t < n ? 6 : 0);
          break;
        case t:
          l = (n - e) / i + 2;
          break;
        case n:
          l = (e - t) / i + 4;
          break;
      }
      l /= 6;
    }
    return {
      h: Math.round(l * 360),
      s: Math.round(c * 100),
      l: Math.round(u * 100)
    };
  },
  // HSL转RGB
  hslToRgb: (e, t, n) => {
    e = (e % 360 + 360) % 360, t = Math.max(0, Math.min(100, t)), n = Math.max(0, Math.min(100, n)), e /= 360, t /= 100, n /= 100;
    const r = (l, c, u) => (u < 0 && (u += 1), u > 1 && (u -= 1), u < 1 / 6 ? l + (c - l) * 6 * u : u < 1 / 2 ? c : u < 2 / 3 ? l + (c - l) * (2 / 3 - u) * 6 : l);
    let o, i, a;
    if (t === 0)
      o = i = a = n;
    else {
      const l = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - l;
      o = r(c, l, e + 1 / 3), i = r(c, l, e), a = r(c, l, e - 1 / 3);
    }
    return {
      r: Math.max(0, Math.min(255, Math.round(o * 255))),
      g: Math.max(0, Math.min(255, Math.round(i * 255))),
      b: Math.max(0, Math.min(255, Math.round(a * 255)))
    };
  }
}, d3 = [
  { key: "hex", label: "HEX" },
  { key: "rgb", label: "RGB" },
  { key: "hsl", label: "HSL" },
  { key: "hsv", label: "HSV" }
], hm = (e) => {
  const {
    value: t,
    defaultValue: n = Zt.defaultValue,
    format: r,
    showAlpha: o = Zt.showAlpha,
    disabled: i = Zt.disabled,
    size: a = Zt.size,
    trigger: l = Zt.trigger,
    allowClear: c = Zt.allowClear,
    name: u,
    presets: d,
    showInput: p = Zt.showInput,
    showFormatSwitch: h = Zt.showFormatSwitch,
    panelWidth: f = Zt.panelWidth,
    panelHeight: m = Zt.panelHeight,
    style: v,
    className: L,
    triggerWidth: k,
    triggerHeight: y,
    triggerStyle: C,
    triggerClassName: w,
    panelStyle: b,
    panelClassName: x,
    children: N,
    onChange: T,
    onColorChange: _,
    onFormatChange: V,
    onOpenChange: H,
    onClear: S
  } = e, [A, O] = F(n), [U, re] = F(r || "hex"), [R, q] = F(!1), [J, z] = F(0), [Q, X] = F(100), [$, Z] = F(100), [te, pe] = F(1), [ue, le] = F(""), [be, ie] = F({ r: 0, g: 0, b: 0 }), [D, he] = F({ h: 0, s: 0, l: 0 }), [ne, ge] = F({ h: 0, s: 0, v: 0 }), I = ae(!1), E = ae(null), W = ae(null), fe = ae(null), K = t !== void 0, P = K ? t : A, oe = M((B) => {
    const G = Te.hexToRgb(B);
    return G ? Te.rgbToHsv(G.r, G.g, G.b) : null;
  }, []);
  de(() => {
    if (!I.current && P) {
      const B = oe(P);
      if (B) {
        z(B.h), X(B.s), Z(B.v), ge(B);
        const G = Te.hsvToRgb(B.h, B.s, B.v), me = Te.rgbToHex(G.r, G.g, G.b), ee = Te.rgbToHsl(G.r, G.g, G.b);
        le(me), ie(G), he(ee);
      }
      I.current = !0;
    }
  }, [P, oe]);
  const se = j(() => {
    const B = Te.hsvToRgb(J, Q, $), G = Te.rgbToHex(B.r, B.g, B.b), me = Te.rgbToHsl(B.r, B.g, B.b), ee = { h: J, s: Q, v: $ }, ke = `rgb(${B.r}, ${B.g}, ${B.b})`, je = `rgba(${B.r}, ${B.g}, ${B.b}, ${te})`, Me = `hsl(${me.h}, ${me.s}%, ${me.l}%)`, Ze = `hsv(${ee.h}, ${ee.s}%, ${ee.v}%)`;
    let Vt = G;
    switch (U) {
      case "rgb":
        Vt = ke;
        break;
      case "rgba":
        Vt = je;
        break;
      case "hsl":
        Vt = Me;
        break;
      case "hsv":
        Vt = Ze;
        break;
    }
    return {
      color: Vt,
      hex: G,
      rgb: ke,
      rgba: je,
      hsl: Me,
      hsv: Ze,
      alpha: te,
      rgbObject: B,
      hsvObject: ee,
      hslObject: me
    };
  }, [J, Q, $, te, U]), ve = M(
    (B) => {
      K || O(B.hex), T == null || T(B), _ == null || _(B.color, B.hex, B.rgba);
    },
    [K, T, _]
  ), _e = M(
    (B) => {
      const G = Te.hsvToRgb(B.h, B.s, B.v), me = Te.rgbToHex(G.r, G.g, G.b), ee = Te.rgbToHsl(G.r, G.g, G.b);
      le(me), ie(G), he(ee), ge(B);
    },
    []
  ), Se = M(
    (B, G) => {
      X(B), Z(G);
      const me = { h: J, s: B, v: G };
      _e(me);
      const ee = Te.hsvToRgb(J, B, G), ke = Te.rgbToHex(ee.r, ee.g, ee.b), je = Te.rgbToHsl(ee.r, ee.g, ee.b), Me = {
        color: ke,
        hex: ke,
        rgb: `rgb(${ee.r}, ${ee.g}, ${ee.b})`,
        rgba: `rgba(${ee.r}, ${ee.g}, ${ee.b}, ${te})`,
        hsl: `hsl(${je.h}, ${je.s}%, ${je.l}%)`,
        hsv: `hsv(${J}, ${B}%, ${G}%)`,
        alpha: te,
        rgbObject: ee,
        hsvObject: me,
        hslObject: je
      };
      ve(Me);
    },
    [J, te, _e, ve]
  ), we = M(
    (B) => {
      z(B);
      const G = { h: B, s: Q, v: $ };
      _e(G);
      const me = Te.hsvToRgb(B, Q, $), ee = Te.rgbToHex(me.r, me.g, me.b), ke = Te.rgbToHsl(me.r, me.g, me.b), je = {
        color: ee,
        hex: ee,
        rgb: `rgb(${me.r}, ${me.g}, ${me.b})`,
        rgba: `rgba(${me.r}, ${me.g}, ${me.b}, ${te})`,
        hsl: `hsl(${ke.h}, ${ke.s}%, ${ke.l}%)`,
        hsv: `hsv(${B}, ${Q}%, ${$}%)`,
        alpha: te,
        rgbObject: me,
        hsvObject: G,
        hslObject: ke
      };
      ve(je);
    },
    [Q, $, te, _e, ve]
  ), Ie = M(
    (B) => {
      pe(B);
      const G = Te.hsvToRgb(J, Q, $), me = Te.rgbToHex(G.r, G.g, G.b), ee = Te.rgbToHsl(G.r, G.g, G.b), ke = { h: J, s: Q, v: $ }, je = {
        color: me,
        hex: me,
        rgb: `rgb(${G.r}, ${G.g}, ${G.b})`,
        rgba: `rgba(${G.r}, ${G.g}, ${G.b}, ${B})`,
        hsl: `hsl(${ee.h}, ${ee.s}%, ${ee.l}%)`,
        hsv: `hsv(${J}, ${Q}%, ${$}%)`,
        alpha: B,
        rgbObject: G,
        hsvObject: ke,
        hslObject: ee
      };
      ve(je);
    },
    [J, Q, $, ve]
  ), Ue = M(
    (B) => {
      re(B), V == null || V(B);
    },
    [V]
  ), Ve = M(
    (B) => {
      let G = B.replace("#", "").toUpperCase();
      G = G.replace(/[^0-9A-F]/g, "").slice(0, 6);
      const me = G.length > 0 ? `#${G}` : "#";
      if (le(me), G.length === 6) {
        const ee = Te.hexToRgb(me);
        if (ee) {
          const ke = Te.rgbToHsv(ee.r, ee.g, ee.b);
          z(ke.h), X(ke.s), Z(ke.v), _e(ke);
          const je = Te.rgbToHsl(ee.r, ee.g, ee.b), Me = {
            color: me,
            hex: me,
            rgb: `rgb(${ee.r}, ${ee.g}, ${ee.b})`,
            rgba: `rgba(${ee.r}, ${ee.g}, ${ee.b}, ${te})`,
            hsl: `hsl(${je.h}, ${je.s}%, ${je.l}%)`,
            hsv: `hsv(${ke.h}, ${ke.s}%, ${ke.v}%)`,
            alpha: te,
            rgbObject: ee,
            hsvObject: ke,
            hslObject: je
          };
          ve(Me);
        }
      }
    },
    [te, _e, ve]
  ), Oe = M(
    (B, G) => {
      const me = Math.max(0, Math.min(255, Math.round(G))), ee = { ...be, [B]: me };
      ie(ee);
      const ke = Te.rgbToHsv(ee.r, ee.g, ee.b), je = Te.rgbToHex(ee.r, ee.g, ee.b), Me = Te.rgbToHsl(ee.r, ee.g, ee.b);
      z(ke.h), X(ke.s), Z(ke.v), le(je), ge(ke), he(Me);
      const Ze = {
        color: `rgb(${ee.r}, ${ee.g}, ${ee.b})`,
        hex: je,
        rgb: `rgb(${ee.r}, ${ee.g}, ${ee.b})`,
        rgba: `rgba(${ee.r}, ${ee.g}, ${ee.b}, ${te})`,
        hsl: `hsl(${Me.h}, ${Me.s}%, ${Me.l}%)`,
        hsv: `hsv(${ke.h}, ${ke.s}%, ${ke.v}%)`,
        alpha: te,
        rgbObject: ee,
        hsvObject: ke,
        hslObject: Me
      };
      ve(Ze);
    },
    [be, te, ve]
  ), Re = M(
    (B, G) => {
      let me = G;
      B === "h" ? me = (G % 360 + 360) % 360 : me = Math.max(0, Math.min(100, Math.round(G)));
      const ee = { ...ne, [B]: me };
      ge(ee), z(ee.h), X(ee.s), Z(ee.v);
      const ke = Te.hsvToRgb(ee.h, ee.s, ee.v), je = Te.rgbToHex(ke.r, ke.g, ke.b), Me = Te.rgbToHsl(ke.r, ke.g, ke.b);
      le(je), ie(ke), he(Me);
      const Ze = {
        color: `hsv(${ee.h}, ${ee.s}%, ${ee.v}%)`,
        hex: je,
        rgb: `rgb(${ke.r}, ${ke.g}, ${ke.b})`,
        rgba: `rgba(${ke.r}, ${ke.g}, ${ke.b}, ${te})`,
        hsl: `hsl(${Me.h}, ${Me.s}%, ${Me.l}%)`,
        hsv: `hsv(${ee.h}, ${ee.s}%, ${ee.v}%)`,
        alpha: te,
        rgbObject: ke,
        hsvObject: ee,
        hslObject: Me
      };
      ve(Ze);
    },
    [ne, te, ve]
  ), Ge = M(
    (B, G) => {
      let me = G;
      B === "h" ? me = (G % 360 + 360) % 360 : me = Math.max(0, Math.min(100, Math.round(G)));
      const ee = { ...D, [B]: me };
      he(ee);
      const ke = Te.hslToRgb(ee.h, ee.s, ee.l), je = Te.rgbToHsv(ke.r, ke.g, ke.b), Me = Te.rgbToHex(ke.r, ke.g, ke.b);
      z(je.h), X(je.s), Z(je.v), le(Me), ie(ke), ge(je);
      const Ze = {
        color: `hsl(${ee.h}, ${ee.s}%, ${ee.l}%)`,
        hex: Me,
        rgb: `rgb(${ke.r}, ${ke.g}, ${ke.b})`,
        rgba: `rgba(${ke.r}, ${ke.g}, ${ke.b}, ${te})`,
        hsl: `hsl(${ee.h}, ${ee.s}%, ${ee.l}%)`,
        hsv: `hsv(${je.h}, ${je.s}%, ${je.v}%)`,
        alpha: te,
        rgbObject: ke,
        hsvObject: je,
        hslObject: ee
      };
      ve(Ze);
    },
    [D, te, ve]
  ), ze = M(
    (B) => {
      const G = Te.hexToRgb(B);
      if (G) {
        const me = Te.rgbToHsv(G.r, G.g, G.b), ee = Te.rgbToHsl(G.r, G.g, G.b);
        z(me.h), X(me.s), Z(me.v), le(B), ie(G), ge(me), he(ee);
        const ke = {
          color: B,
          hex: B,
          rgb: `rgb(${G.r}, ${G.g}, ${G.b})`,
          rgba: `rgba(${G.r}, ${G.g}, ${G.b}, ${te})`,
          hsl: `hsl(${ee.h}, ${ee.s}%, ${ee.l}%)`,
          hsv: `hsv(${me.h}, ${me.s}%, ${me.v}%)`,
          alpha: te,
          rgbObject: G,
          hsvObject: me,
          hslObject: ee
        };
        ve(ke);
      }
    },
    [te, ve]
  ), Y = M(() => {
    K || O(""), S == null || S();
  }, [K, S]), Ce = M(
    (B) => {
      if (!E.current) return;
      const G = (ke, je) => {
        const Me = E.current.getBoundingClientRect(), Ze = Math.max(0, Math.min(1, (ke - Me.left) / Me.width)), Vt = Math.max(0, Math.min(1, (je - Me.top) / Me.height));
        Se(Ze * 100, (1 - Vt) * 100);
      };
      G(B.clientX, B.clientY);
      const me = (ke) => {
        G(ke.clientX, ke.clientY);
      }, ee = () => {
        document.removeEventListener("mousemove", me), document.removeEventListener("mouseup", ee);
      };
      document.addEventListener("mousemove", me), document.addEventListener("mouseup", ee);
    },
    [Se]
  ), xe = M(
    (B) => {
      if (!W.current) return;
      const G = (ke) => {
        const je = W.current.getBoundingClientRect(), Me = Math.max(0, Math.min(1, (ke - je.left) / je.width));
        we(Me * 360);
      };
      G(B.clientX);
      const me = (ke) => {
        G(ke.clientX);
      }, ee = () => {
        document.removeEventListener("mousemove", me), document.removeEventListener("mouseup", ee);
      };
      document.addEventListener("mousemove", me), document.addEventListener("mouseup", ee);
    },
    [we]
  ), De = M(
    (B) => {
      if (!fe.current) return;
      const G = (ke) => {
        const je = fe.current.getBoundingClientRect(), Me = Math.max(0, Math.min(1, (ke - je.left) / je.width));
        Ie(Me);
      };
      G(B.clientX);
      const me = (ke) => {
        G(ke.clientX);
      }, ee = () => {
        document.removeEventListener("mousemove", me), document.removeEventListener("mouseup", ee);
      };
      document.addEventListener("mousemove", me), document.addEventListener("mouseup", ee);
    },
    [Ie]
  ), lt = j(() => {
    const B = ["land-color-picker"];
    return a && a !== "default" && B.push(`land-color-picker--${a}`), i && B.push("land-color-picker--disabled"), L && B.push(L), B.join(" ");
  }, [a, i, L]), wt = j(() => {
    const B = Te.hsvToRgb(J, 100, 100);
    return { backgroundColor: Te.rgbToHex(B.r, B.g, B.b) };
  }, [J]), ce = j(() => {
    const B = Te.hsvToRgb(J, Q, $);
    return {
      background: `linear-gradient(to right, transparent 0%, ${Te.rgbToHex(B.r, B.g, B.b)} 100%)`
    };
  }, [J, Q, $]), $e = j(
    () => ({
      width: k,
      height: y,
      backgroundColor: se.rgba,
      ...C
    }),
    [k, y, se.rgba, C]
  ), Be = M(() => l === "custom" && N ? N : l === "input" ? /* @__PURE__ */ g("div", { className: `land-color-picker__trigger-input ${w || ""}`, children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: "land-color-picker__trigger-preview",
        style: { backgroundColor: se.rgba }
      }
    ),
    /* @__PURE__ */ s("span", { className: "land-color-picker__trigger-value", children: se.hex })
  ] }) : /* @__PURE__ */ s(
    "div",
    {
      className: `land-color-picker__trigger ${w || ""}`,
      style: $e
    }
  ), [l, N, w, se, $e]), He = M(() => p ? /* @__PURE__ */ g("div", { className: "land-color-picker__inputs", children: [
    h && /* @__PURE__ */ s(
      hc,
      {
        variant: "transparent",
        options: d3,
        onChange: (B, G) => Ue(G.key),
        value: U,
        placeholder: "格式"
      }
    ),
    /* @__PURE__ */ g("div", { className: "land-color-picker__input-values", children: [
      U === "hex" && /* @__PURE__ */ s(
        gr,
        {
          prefix: "#",
          value: ue.replace("#", ""),
          onChange: Ve
        }
      ),
      U === "rgb" && /* @__PURE__ */ g(tt, { children: [
        /* @__PURE__ */ s(
          At,
          {
            width: 48,
            placeholder: "R",
            value: be.r,
            onChange: (B) => Oe("r", B),
            min: 0,
            max: 255,
            stepperPosition: "none"
          }
        ),
        /* @__PURE__ */ s(
          At,
          {
            width: 48,
            placeholder: "G",
            value: be.g,
            onChange: (B) => Oe("g", B),
            min: 0,
            max: 255,
            stepperPosition: "none"
          }
        ),
        /* @__PURE__ */ s(
          At,
          {
            width: 48,
            placeholder: "B",
            value: be.b,
            onChange: (B) => Oe("b", B),
            min: 0,
            max: 255,
            stepperPosition: "none"
          }
        )
      ] }),
      U === "hsv" && /* @__PURE__ */ g(tt, { children: [
        /* @__PURE__ */ s(
          At,
          {
            width: 48,
            placeholder: "H",
            value: ne.h,
            onChange: (B) => Re("h", B),
            min: 0,
            max: 360,
            stepperPosition: "none"
          }
        ),
        /* @__PURE__ */ s(
          At,
          {
            width: 48,
            placeholder: "S",
            value: ne.s,
            onChange: (B) => Re("s", B),
            min: 0,
            max: 100,
            stepperPosition: "none"
          }
        ),
        /* @__PURE__ */ s(
          At,
          {
            width: 48,
            placeholder: "V",
            value: ne.v,
            onChange: (B) => Re("v", B),
            min: 0,
            max: 100,
            stepperPosition: "none"
          }
        )
      ] }),
      U === "hsl" && /* @__PURE__ */ g(tt, { children: [
        /* @__PURE__ */ s(
          At,
          {
            width: 48,
            placeholder: "H",
            value: D.h,
            onChange: (B) => Ge("h", B),
            min: 0,
            max: 360,
            stepperPosition: "none"
          }
        ),
        /* @__PURE__ */ s(
          At,
          {
            width: 48,
            placeholder: "S",
            value: D.s,
            onChange: (B) => Ge("s", B),
            min: 0,
            max: 100,
            stepperPosition: "none"
          }
        ),
        /* @__PURE__ */ s(
          At,
          {
            width: 48,
            placeholder: "L",
            value: D.l,
            onChange: (B) => Ge("l", B),
            min: 0,
            max: 100,
            stepperPosition: "none"
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ s(
      At,
      {
        width: 56,
        value: Math.round(te * 100),
        onChange: (B) => Ie(Math.max(0, Math.min(100, Math.round(B))) / 100),
        min: 0,
        max: 100,
        suffix: "%",
        stepperPosition: "none"
      }
    )
  ] }) : null, [
    p,
    h,
    U,
    ue,
    be,
    ne,
    D,
    te,
    o,
    Ue,
    Ve,
    Oe,
    Re,
    Ge,
    Ie
  ]), Ee = M(() => {
    const B = d || a3;
    return !B || B.length === 0 ? null : /* @__PURE__ */ s("div", { className: "land-color-picker__presets", children: B.map((G, me) => /* @__PURE__ */ s(
      "div",
      {
        className: `land-color-picker__preset-item ${G.toLowerCase() === se.hex.toLowerCase() ? "land-color-picker__preset-item--active" : ""}`,
        style: { backgroundColor: G },
        onClick: () => ze(G),
        title: G
      },
      `${G}-${me}`
    )) });
  }, [d, se.hex, ze]), Pe = M(
    () => /* @__PURE__ */ g(
      "div",
      {
        className: `land-color-picker__panel ${x || ""}`,
        style: { width: f, ...b },
        onClick: (B) => B.stopPropagation(),
        children: [
          /* @__PURE__ */ g(
            "div",
            {
              ref: E,
              className: "land-color-picker__color-area",
              style: { ...wt, height: m },
              onMouseDown: Ce,
              children: [
                /* @__PURE__ */ s("div", { className: "land-color-picker__color-area-white" }),
                /* @__PURE__ */ s("div", { className: "land-color-picker__color-area-black" }),
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: "land-color-picker__pointer",
                    style: {
                      left: `${Q}%`,
                      top: `${100 - $}%`
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ g("div", { className: "land-color-picker__sliders", children: [
            /* @__PURE__ */ g(
              "div",
              {
                ref: W,
                className: "land-color-picker__slider land-color-picker__slider--hue",
                onMouseDown: xe,
                children: [
                  /* @__PURE__ */ s("div", { className: "land-color-picker__slider-track" }),
                  /* @__PURE__ */ s(
                    "div",
                    {
                      className: "land-color-picker__slider-thumb",
                      style: { left: `${J / 360 * 100}%` }
                    }
                  )
                ]
              }
            ),
            o && /* @__PURE__ */ g(
              "div",
              {
                ref: fe,
                className: "land-color-picker__slider land-color-picker__slider--alpha",
                onMouseDown: De,
                children: [
                  /* @__PURE__ */ s("div", { className: "land-color-picker__slider-track land-color-picker__slider-track--checker" }),
                  /* @__PURE__ */ s(
                    "div",
                    {
                      className: "land-color-picker__slider-track",
                      style: ce
                    }
                  ),
                  /* @__PURE__ */ s(
                    "div",
                    {
                      className: "land-color-picker__slider-thumb",
                      style: { left: `${te * 100}%` }
                    }
                  )
                ]
              }
            )
          ] }),
          He(),
          Ee(),
          c && /* @__PURE__ */ g(
            "button",
            {
              type: "button",
              className: "land-color-picker__clear",
              onClick: Y,
              children: [
                /* @__PURE__ */ s(Le, { name: "close", size: 12 }),
                "清空"
              ]
            }
          )
        ]
      }
    ),
    [
      x,
      f,
      b,
      wt,
      m,
      Q,
      $,
      J,
      o,
      te,
      ce,
      c,
      Ce,
      xe,
      De,
      Y,
      He,
      Ee
    ]
  );
  return /* @__PURE__ */ s("div", { className: lt, style: v, "data-name": u, children: /* @__PURE__ */ s(
    Cr,
    {
      trigger: "click",
      disabled: i,
      content: Pe(),
      onOpen: () => {
        q(!0), H == null || H(!0);
      },
      onClose: () => {
        q(!1), H == null || H(!1);
      },
      children: Be()
    }
  ) });
}, Lt = {
  type: "date",
  language: "zh",
  size: "default",
  variant: "filled",
  allowClear: !0,
  allowInput: !1,
  showConfirm: !1,
  showToday: !1,
  showIcon: !0,
  disabled: !1,
  readOnly: !1,
  autoFocus: !1,
  autoWidth: !1,
  minWidth: 120
};
function u3(e, t) {
  return {
    date: { zh: "请选择日期", en: "Select date" },
    week: { zh: "请选择周", en: "Select week" },
    month: { zh: "请选择月份", en: "Select month" },
    quarter: { zh: "请选择季度", en: "Select quarter" },
    year: { zh: "请选择年份", en: "Select year" }
  }[e][t];
}
function h3(e, t, n) {
  const r = e.getFullYear(), o = e.getMonth() + 1, i = e.getDate();
  switch (t) {
    case "year":
      return n === "zh" ? `${r}年` : `${r}`;
    case "month":
      return n === "zh" ? `${r}年${o}月` : `${r}-${o.toString().padStart(2, "0")}`;
    case "quarter":
      const a = Math.ceil(o / 3);
      return n === "zh" ? `${r}年第${a}季度` : `${r} Q${a}`;
    case "week":
      const l = new Date(r, 0, 1), c = Math.floor((e.getTime() - l.getTime()) / (24 * 60 * 60 * 1e3)), u = Math.ceil((c + l.getDay() + 1) / 7);
      return n === "zh" ? `${r}年第${u}周` : `${r} W${u}`;
    case "date":
    default:
      return `${r}-${o.toString().padStart(2, "0")}-${i.toString().padStart(2, "0")}`;
  }
}
function ga(e) {
  if (!e.trim()) return null;
  const t = /* @__PURE__ */ new Date(), n = t.getFullYear(), r = t.getMonth() + 1, o = [
    // YYYY-MM-DD
    { pattern: /^(\d{4})-(\d{1,2})-(\d{1,2})$/, extract: (i) => ({ year: +i[1], month: +i[2], day: +i[3] }) },
    // YYYY/MM/DD
    { pattern: /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/, extract: (i) => ({ year: +i[1], month: +i[2], day: +i[3] }) },
    // YYYY年MM月DD日
    { pattern: /^(\d{4})年(\d{1,2})月(\d{1,2})日$/, extract: (i) => ({ year: +i[1], month: +i[2], day: +i[3] }) },
    // YYYY年MM月
    { pattern: /^(\d{4})年(\d{1,2})月$/, extract: (i) => ({ year: +i[1], month: +i[2], day: 1 }) },
    // YYYY年
    { pattern: /^(\d{4})年$/, extract: (i) => ({ year: +i[1], month: 1, day: 1 }) },
    // MM月DD日
    { pattern: /^(\d{1,2})月(\d{1,2})日$/, extract: (i) => ({ year: n, month: +i[1], day: +i[2] }) },
    // DD日
    { pattern: /^(\d{1,2})日$/, extract: (i) => ({ year: n, month: r, day: +i[1] }) }
  ];
  for (const { pattern: i, extract: a } of o) {
    const l = e.match(i);
    if (l)
      try {
        const { year: c, month: u, day: d } = a(l), p = new Date(c, u - 1, d);
        if (p.getFullYear() === c && p.getMonth() === u - 1 && p.getDate() === d)
          return p;
      } catch {
        continue;
      }
  }
  return null;
}
const fm = (e) => {
  const {
    value: t,
    defaultValue: n,
    type: r = Lt.type,
    language: o = Lt.language,
    size: i = Lt.size,
    variant: a = Lt.variant,
    minDate: l,
    maxDate: c,
    disabledDate: u,
    placeholder: d,
    format: p,
    allowClear: h = Lt.allowClear,
    allowInput: f = Lt.allowInput,
    showConfirm: m = Lt.showConfirm,
    confirmText: v,
    cancelText: L,
    showToday: k = Lt.showToday,
    todayText: y,
    showIcon: C = Lt.showIcon,
    icon: w,
    suffixIcon: b,
    disabled: x = Lt.disabled,
    readOnly: N = Lt.readOnly,
    open: T,
    defaultOpen: _ = !1,
    autoFocus: V = Lt.autoFocus,
    onChange: H,
    onOpenChange: S,
    onPanelChange: A,
    onFocus: O,
    onBlur: U,
    onClear: re,
    onConfirm: R,
    dropdownProps: q,
    inputProps: J,
    calendarProps: z,
    width: Q,
    autoWidth: X = Lt.autoWidth,
    minWidth: $ = Lt.minWidth,
    style: Z,
    className: te = "",
    dropdownStyle: pe,
    dropdownClassName: ue,
    children: le,
    // 兼容旧 API
    ...be
  } = e, ie = be.pickerType || r, D = be.showConfirmButton ?? m, he = be.clearable ?? h, [ne, ge] = F(_), [I, E] = F(() => {
    const Me = t ?? n ?? be.value;
    return Me ? new Date(Me) : null;
  }), [W, fe] = F(null), [K, P] = F(""), [oe, se] = F(!1), ve = ae(null), [_e, Se] = F(void 0), we = t !== void 0 || be.value !== void 0, Ie = T !== void 0, Ue = we ? t ?? be.value ? new Date(t ?? be.value) : null : I, Ve = Ie ? T : ne, Oe = M((Me) => Me ? typeof p == "function" ? p(Me, ie, o) : h3(Me, ie, o) : "", [p, ie, o]), Re = j(() => Oe(Ue), [Ue, Oe]), Ge = j(() => d || u3(ie, o), [d, ie, o]), ze = j(() => ({
    date: "date",
    week: "week",
    month: "month",
    quarter: "quarter",
    year: "year"
  })[ie], [ie]), Y = M((Me) => {
    x || N || (Ie || ge(Me), S == null || S(Me), !Me && D && fe(null));
  }, [x, N, Ie, D, S]), Ce = M(() => {
    Y(!0);
  }, [Y]), xe = M(() => {
    Y(!1);
  }, [Y]), De = M((Me, Ze) => {
    x || N || (D ? fe(Me) : (we || E(Me), H == null || H(Me, Ze), xe()));
  }, [x, N, D, we, H, xe]), lt = M(() => {
    if (x) return;
    const Me = W || Ue;
    !we && W && E(W), H == null || H(Me), R == null || R(Me), fe(null), xe();
  }, [x, W, Ue, we, H, R, xe]), wt = M(() => {
    fe(null), xe();
  }, [xe]), ce = M(() => {
    x || N || (we || E(null), H == null || H(null), re == null || re(), P(""));
  }, [x, N, we, H, re]), $e = M((Me) => {
    x || N || !f || ie !== "date" || P(Me);
  }, [x, N, f, ie]), Be = M((Me) => {
    x || N || (f && ie === "date" ? (se(!0), P(Re)) : Ce(), O == null || O(Me));
  }, [x, N, f, ie, Re, Ce, O]), He = M((Me) => {
    if (!(x || N)) {
      if (f && ie === "date") {
        if (se(!1), K.trim()) {
          const Ze = ga(K);
          Ze && (we || E(Ze), H == null || H(Ze));
        } else K === "" && ce();
        P("");
      }
      U == null || U(Me);
    }
  }, [x, N, f, ie, K, we, H, ce, U]), Ee = M((Me) => {
    if (!(x || N || !f || ie !== "date") && Me.trim()) {
      const Ze = ga(Me);
      Ze && (we || E(Ze), H == null || H(Ze), se(!1), P(""));
    }
  }, [x, N, f, ie, we, H]), Pe = M(() => {
    if (x || N) return;
    const Me = /* @__PURE__ */ new Date();
    we || E(Me), H == null || H(Me), xe();
  }, [x, N, we, H, xe]), B = M((Me, Ze) => {
    A == null || A(Me, Ze);
  }, [A]);
  de(() => {
    x && Ve && xe();
  }, [x, Ve, xe]), de(() => {
    if (X && ve.current) {
      const Me = Re || Ge;
      ve.current.textContent = Me;
      const Vt = ve.current.offsetWidth + 64, Tn = typeof $ == "number" ? $ : parseInt($, 10) || 120;
      Se(Math.max(Vt, Tn));
    }
  }, [X, Re, Ge, $]);
  const G = () => C ? b || w || /* @__PURE__ */ s(Le, { name: "calendar" }) : null, me = () => /* @__PURE__ */ g("div", { className: `land-date-picker__dropdown ${ue || ""}`, style: pe, children: [
    /* @__PURE__ */ s(
      i3,
      {
        mode: ze,
        language: o,
        value: W || Ue,
        minDate: l,
        maxDate: c,
        disabledDate: u,
        showTodayButton: !1,
        onChange: De,
        onPanelChange: B,
        ...z
      }
    ),
    (D || k) && /* @__PURE__ */ g("div", { className: "land-date-picker__footer", children: [
      k && /* @__PURE__ */ s(
        et,
        {
          variant: "text",
          size: "small",
          text: y || (o === "zh" ? "今天" : "Today"),
          onClick: Pe
        }
      ),
      D && /* @__PURE__ */ g("div", { className: "land-date-picker__actions", children: [
        /* @__PURE__ */ s(
          et,
          {
            variant: "outline",
            size: "small",
            text: L || (o === "zh" ? "取消" : "Cancel"),
            onClick: wt
          }
        ),
        /* @__PURE__ */ s(
          et,
          {
            variant: "background",
            size: "small",
            text: v || (o === "zh" ? "确定" : "Confirm"),
            onClick: lt
          }
        )
      ] })
    ] })
  ] }), ee = () => le || /* @__PURE__ */ g(
    "div",
    {
      className: `land-date-picker__trigger ${Re ? "" : "land-date-picker__trigger--empty"} ${oe ? "land-date-picker__trigger--input" : ""}`,
      children: [
        /* @__PURE__ */ s(
          gr,
          {
            variant: "transparent",
            size: i,
            placeholder: Ge,
            value: oe ? K : Re,
            disabled: x,
            onFocus: Be,
            onBlur: He,
            onChange: f && ie === "date" ? $e : void 0,
            onClear: he ? ce : void 0,
            onEnter: Ee,
            className: "land-date-picker__input",
            htmlProps: { readOnly: N || !f || ie !== "date" },
            ...J
          }
        ),
        /* @__PURE__ */ s("span", { className: "land-date-picker__icon", children: G() })
      ]
    }
  ), ke = [
    "land-date-picker",
    `land-date-picker--${i}`,
    `land-date-picker--${a}`,
    X && "land-date-picker--auto-width",
    x && "land-date-picker--disabled",
    N && "land-date-picker--readonly",
    Ve && "land-date-picker--open",
    te
  ].filter(Boolean).join(" "), je = {
    ...Z,
    ...Q ? { width: typeof Q == "number" ? `${Q}px` : Q } : {},
    ...X && _e ? { width: `${_e}px` } : {}
  };
  return /* @__PURE__ */ g("div", { className: ke, style: je, children: [
    X && /* @__PURE__ */ s(
      "span",
      {
        ref: ve,
        className: "land-date-picker__measure",
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ s(
      Cr,
      {
        open: Ve,
        disabled: x,
        trigger: "click",
        onOpen: Ce,
        onClose: xe,
        content: me(),
        ...q,
        children: ee()
      }
    )
  ] });
}, Ut = "land-dialog", pm = ({
  show: e,
  mask: t,
  title: n,
  headerLeftComponent: r,
  headerRightComponent: o,
  headerComponent: i,
  useHeaderDivider: a,
  footerLeftComponent: l,
  footerRightComponent: c,
  footerComponent: u,
  useFooterDivider: d,
  cancelLabel: p = "取消",
  submitLabel: h = "确定",
  submitDisabled: f,
  cancelButtonProps: m,
  submitButtonProps: v,
  size: L = "medium",
  onClose: k,
  onSubmit: y,
  onCancel: C,
  enableEsc: w = !0,
  enableEnter: b = !1,
  children: x,
  wrapStyle: N,
  wrapClassName: T = "",
  contentStyle: _,
  contentClassName: V = "",
  bodyStyle: H,
  bodyClassName: S = "",
  maskStyle: A
}) => {
  const O = j(() => {
    switch (L) {
      case "small":
        return "320px";
      case "medium":
        return "600px";
      case "large":
        return "1000px";
      default:
        return "600px";
    }
  }, [L]), U = j(() => [
    Ut,
    e && `${Ut}--show`,
    T
  ].filter(Boolean).join(" "), [e, T]), re = M((J) => {
    if (J.key === "Escape" && w && e && k && k(), J.key === "Enter" && b && e && y && !f) {
      const z = J.target;
      z.tagName === "INPUT" || z.tagName === "TEXTAREA" || z.isContentEditable || y();
    }
  }, [w, b, e, k, y, f]);
  de(() => (e && (w || b) && document.addEventListener("keydown", re), () => {
    document.removeEventListener("keydown", re);
  }), [e, w, b, re]);
  const R = j(() => i || k || r || o || n, [i, k, r, o, n]), q = j(() => u || y || C || l || c, [u, y, C, l, c]);
  return /* @__PURE__ */ g(
    "div",
    {
      className: U,
      style: {
        "--land-dialog-content-width": O,
        ...N
      },
      children: [
        t && e && /* @__PURE__ */ s(
          dt.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            className: `${Ut}__mask`,
            style: A
          }
        ),
        e && /* @__PURE__ */ g(
          dt.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.5, type: "spring" },
            className: `${Ut}__content ${V}`,
            style: { ..._, width: O },
            children: [
              i || R && /* @__PURE__ */ g("div", { className: `${Ut}__header`, children: [
                r || /* @__PURE__ */ s("div", { className: `${Ut}__title`, children: n }),
                o || k && /* @__PURE__ */ s("div", { className: `${Ut}__close`, children: /* @__PURE__ */ s(Le, { name: "close", onClick: k, size: 24 }) })
              ] }),
              a && R && /* @__PURE__ */ s(qt, {}),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `${Ut}__body ${S}`,
                  style: H,
                  children: x
                }
              ),
              d && q && /* @__PURE__ */ s(qt, {}),
              u || q && /* @__PURE__ */ g("div", { className: `${Ut}__footer`, children: [
                c || (C || y) && /* @__PURE__ */ g("div", { className: `${Ut}__footer-btns`, children: [
                  C && /* @__PURE__ */ s(
                    et,
                    {
                      variant: "fill",
                      status: "default",
                      onClick: C,
                      ...m,
                      children: p
                    }
                  ),
                  y && /* @__PURE__ */ s(
                    et,
                    {
                      variant: "background",
                      status: "primary",
                      onClick: y,
                      disabled: f,
                      ...v,
                      children: h
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
}, Mt = "land-drawer", mm = ({
  show: e = !1,
  placement: t = "right",
  mask: n = !1,
  title: r,
  headerLeftComponent: o,
  headerRightComponent: i,
  headerComponent: a,
  useHeaderDivider: l = !0,
  footerLeftComponent: c,
  footerRightComponent: u,
  footerComponent: d,
  useFooterDivider: p = !0,
  cancelLabel: h = "取消",
  submitLabel: f = "确定",
  cancelDisabled: m = !1,
  submitDisabled: v = !1,
  cancelButtonProps: L,
  submitButtonProps: k,
  minWidth: y,
  maxWidth: C,
  size: w = "auto",
  onClose: b,
  onSubmit: x,
  onCancel: N,
  enableEsc: T = !0,
  enableEnter: _ = !1,
  children: V,
  wrapStyle: H,
  wrapClassName: S = "",
  contentStyle: A,
  contentClassName: O = "",
  bodyStyle: U,
  bodyClassName: re = "",
  maskStyle: R
}) => {
  const q = j(() => {
    if (t === "bottom") return "100%";
    switch (w) {
      case "small":
        return "32%";
      case "medium":
        return "60%";
      case "large":
        return "80%";
      case "auto":
        return "fit-content";
      default:
        return "320px";
    }
  }, [w, t]), J = j(() => {
    if (t !== "bottom") return "100%";
    switch (w) {
      case "small":
        return "30%";
      case "medium":
        return "60%";
      case "large":
        return "90%";
      case "auto":
        return "fit-content";
      default:
        return "100%";
    }
  }, [w, t]), z = j(() => b && (r || a || o), [b, r, a, o]), Q = j(() => a || b || o || i, [a, b, o, i]), X = j(() => d || x || N || c || u, [d, x, N, c, u]), $ = j(() => [
    Mt,
    e && `${Mt}--show`,
    `${Mt}--${t}`,
    S
  ].filter(Boolean).join(" "), [e, t, S]), Z = M((pe) => {
    if (pe.key === "Escape" && T && e && b && b(), pe.key === "Enter" && _ && e && x && !v) {
      const ue = pe.target;
      ue.tagName === "INPUT" || ue.tagName === "TEXTAREA" || ue.isContentEditable || x();
    }
  }, [T, _, e, b, x, v]);
  de(() => (e && (T || _) && document.addEventListener("keydown", Z), () => {
    document.removeEventListener("keydown", Z);
  }), [e, T, _, Z]);
  const te = j(() => ({
    opacity: 0,
    x: t === "right" ? "20%" : "0%",
    y: t === "bottom" ? "20%" : "0%"
  }), [t]);
  return /* @__PURE__ */ g("div", { className: $, style: H, children: [
    n && e && /* @__PURE__ */ s(
      dt.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        className: `${Mt}__mask`,
        style: R
      }
    ),
    e && /* @__PURE__ */ g(
      dt.div,
      {
        initial: te,
        animate: { opacity: 1, x: 0, y: 0 },
        transition: { duration: 0.6, type: "spring" },
        className: `${Mt}__content ${O}`,
        style: {
          width: q,
          height: J,
          minWidth: y,
          maxWidth: C,
          ...A
        },
        children: [
          /* @__PURE__ */ g("div", { className: `${Mt}__header-wrapper`, children: [
            b && /* @__PURE__ */ s("div", { className: `${Mt}__close`, children: /* @__PURE__ */ s(Le, { name: "close", onClick: b, strokeWidth: 3 }) }),
            z && /* @__PURE__ */ s(qt, { direction: "vertical", length: "36px", spacing: 12 }),
            a || (r || o || i) && /* @__PURE__ */ g("div", { className: `${Mt}__header`, children: [
              o || /* @__PURE__ */ s("div", { className: `${Mt}__title`, children: r }),
              i && /* @__PURE__ */ s("div", { className: `${Mt}__header-right`, children: i })
            ] })
          ] }),
          l && Q && /* @__PURE__ */ s(qt, {}),
          /* @__PURE__ */ s(
            "div",
            {
              className: `${Mt}__body ${re}`,
              style: U,
              children: V
            }
          ),
          p && X && /* @__PURE__ */ s(qt, {}),
          X && /* @__PURE__ */ g("div", { className: `${Mt}__footer`, children: [
            u || (N || x) && /* @__PURE__ */ g("div", { className: `${Mt}__footer-btns`, children: [
              N && /* @__PURE__ */ s(
                et,
                {
                  variant: "fill",
                  disabled: m,
                  status: "default",
                  onClick: N,
                  ...L,
                  children: h
                }
              ),
              x && /* @__PURE__ */ s(
                et,
                {
                  variant: "background",
                  disabled: v,
                  status: "primary",
                  onClick: x,
                  ...k,
                  children: f
                }
              )
            ] }),
            c
          ] })
        ]
      }
    )
  ] });
}, tr = "land-ellipsis", f3 = (e, t) => {
  let n;
  return function(...o) {
    const i = () => {
      clearTimeout(n), e(...o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  };
}, gm = ({
  line: e = 1,
  text: t,
  children: n,
  open: r = !0,
  style: o,
  className: i,
  popoverProps: a,
  setMaxWidth: l
}) => {
  const c = ae(null), [u, d] = F(!1), [p, h] = F(0), f = j(() => t || n || "", [t, n]), m = j(() => {
    const w = e > 1 ? `${tr}--multiple` : `${tr}--single`;
    return [tr, w, i].filter(Boolean).join(" ");
  }, [e, i]), v = j(() => ({
    display: e > 1 ? "-webkit-box" : "block",
    WebkitLineClamp: `${e}`,
    WebkitBoxOrient: e > 1 ? "vertical" : "horizontal"
  }), [e]), L = M(() => {
    const w = c.current;
    if (w)
      if (e === 1) {
        const b = w.offsetWidth < w.scrollWidth;
        h(w.offsetWidth), d(b);
      } else {
        const b = w.offsetHeight < w.scrollHeight;
        h(w.offsetWidth), d(b);
      }
  }, [e]), k = M(
    f3(L, 100),
    [L]
  );
  de(() => {
    const w = c.current;
    if (!w) return;
    const b = new ResizeObserver(() => {
      k();
    });
    b.observe(w);
    let x = w.parentElement;
    const N = [];
    for (; x && x !== document.body; ) {
      const V = new ResizeObserver(() => {
        k();
      });
      V.observe(x), N.push(V), x = x.parentElement;
    }
    const T = () => {
      k();
    };
    window.addEventListener("resize", T);
    const _ = new MutationObserver((V) => {
      let H = !1;
      V.forEach((S) => {
        if (S.type === "childList" || S.type === "attributes") {
          const A = S.target;
          (w.contains(A) || A.contains(w) || w.parentElement && w.parentElement.contains(A)) && (H = !0);
        }
      }), H && k();
    });
    return _.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style", "class"]
    }), L(), () => {
      b.disconnect(), N.forEach((V) => V.disconnect()), window.removeEventListener("resize", T), _.disconnect();
    };
  }, [L, k, f]), de(() => {
    const w = setTimeout(() => {
      L();
    }, 0);
    return () => clearTimeout(w);
  }, [f, L]);
  const y = j(() => l ? l(p) : p, [l, p]), C = j(() => /* @__PURE__ */ s(
    "div",
    {
      className: m,
      style: o,
      children: /* @__PURE__ */ s(
        "div",
        {
          ref: c,
          className: `${tr}__content`,
          style: v,
          children: f
        }
      )
    }
  ), [m, o, v, f]);
  return !u || !r ? C : /* @__PURE__ */ s(
    at,
    {
      attach: "body",
      placement: "bottom",
      hideArrow: !0,
      content: f,
      className: `${tr}__popover`,
      popoverStyle: { maxWidth: y },
      ...a,
      children: C
    }
  );
}, vm = ({
  width: e = "100%",
  height: t,
  column: n,
  wrap: r,
  justify: o = "start",
  align: i = "start",
  gap: a,
  bothCenter: l,
  children: c,
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
      justifyContent: l ? "center" : o,
      alignItems: l ? "center" : i,
      ...u
    },
    children: c
  }
), km = ({ children: e, style: t, className: n }) => /* @__PURE__ */ s("div", { className: `land-footer ${n}`, style: t, children: e });
var Wt = /* @__PURE__ */ ((e) => (e.ColumnFit = "column-fit", e.ColumnFill = "column-fill", e.RowFit = "row-fit", e.RowFill = "row-fill", e.ColumnRepeat = "column-repeat", e.RowRepeat = "row-repeat", e.Default = "default", e))(Wt || {});
const Lm = ({
  type: e = Wt.Default,
  autoSize: t = 100,
  repeatNum: n = 1,
  gap: r = 8,
  columnGap: o,
  rowGap: i,
  children: a,
  style: l,
  className: c = ""
}) => {
  const u = j(() => {
    let d = {
      display: "grid",
      columnGap: o || r,
      rowGap: i || r
    };
    if (e === Wt.Default)
      return { ...d, ...l };
    switch (e) {
      case Wt.ColumnFit:
        return { ...d, gridTemplateColumns: `repeat(auto-fit, minmax(${t}px, 1fr))`, ...l };
      case Wt.ColumnFill:
        return { ...d, gridTemplateColumns: `repeat(auto-fill, minmax(${t}px, 1fr))`, ...l };
      case Wt.RowFit:
        return { ...d, gridTemplateRows: `repeat(auto-fit, minmax(${t}px, 1fr))`, ...l };
      case Wt.RowFill:
        return { ...d, gridTemplateRows: `repeat(auto-fill, minmax(${t}px, 1fr))`, ...l };
      case Wt.ColumnRepeat:
        return { ...d, gridTemplateColumns: `repeat(${n}, 1fr)`, ...l };
      case Wt.RowRepeat:
        return { ...d, gridTemplateRows: `repeat(${n}, 1fr)`, ...l };
      default:
        return { ...d, ...l };
    }
  }, [e, t, n, r, l]);
  return /* @__PURE__ */ s("div", { className: `land-grid ${c}`, style: u, children: a });
};
var Xs = /* @__PURE__ */ ((e) => (e.SELF = "self", e.OTHERS = "others", e.SIMPLE = "simple", e.DISABLED = "disabled", e))(Xs || {});
const Je = "land-menu", gc = ({
  active: e,
  items: t = [],
  direction: n = "row",
  titleDirection: r = "row",
  border: o = !0,
  titleDeputy: i,
  onChange: a,
  onDropChange: l,
  dropProps: c,
  itemStyle: u,
  itemClassName: d,
  style: p,
  className: h,
  scrollToView: f = !1
}) => {
  const m = ae(null), v = ae(null);
  de(() => {
    f && e && v.current && v.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [e, f, n]);
  const L = j(() => [
    Je,
    n === "column" && `${Je}--column`,
    o && `${Je}--border`,
    f && `${Je}--scroll`,
    h
  ].filter(Boolean).join(" "), [n, o, f, h]);
  return /* @__PURE__ */ s("div", { ref: m, className: L, style: p, children: t.map((k, y) => {
    const C = k.clickType === Xs.SIMPLE, w = k.clickType === Xs.DISABLED || k.disabled, b = k.titleDeputy || i, x = e === k.key && !b, N = [
      `${Je}__item`,
      C && `${Je}__item--simple`,
      w && `${Je}__item--disabled`,
      d
    ].filter(Boolean).join(" "), T = [
      `${Je}__link`,
      n === "column" && `${Je}__link--column`,
      r === "column" && !b && `${Je}__link--title-column`,
      x && `${Je}__link--active`,
      b && `${Je}__link--deputy`
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ g(
      "div",
      {
        ref: e === k.key ? v : null,
        className: N,
        style: u,
        children: [
          /* @__PURE__ */ g(
            "div",
            {
              role: "button",
              className: T,
              onClick: (_) => {
                b || w || (_.stopPropagation(), a == null || a(k));
              },
              children: [
                typeof k.icon == "string" ? /* @__PURE__ */ s("img", { src: k.icon, className: `${Je}__icon` }) : k.icon,
                /* @__PURE__ */ g("div", { className: `${Je}__title-wrap`, children: [
                  /* @__PURE__ */ s(
                    "p",
                    {
                      className: `${Je}__title${b ? ` ${Je}__title--deputy` : ""}`,
                      "data-title": k.label,
                      children: k.label
                    }
                  ),
                  k.subText && /* @__PURE__ */ s("span", { className: `${Je}__sub-title`, children: k.subText })
                ] }),
                k.isNew && /* @__PURE__ */ s("i", { className: `${Je}__badge`, children: typeof k.isNew == "boolean" ? "NEW" : k.isNew })
              ]
            }
          ),
          k.children && /* @__PURE__ */ s("div", { className: `${Je}__drop-wrap${k.open ? ` ${Je}__drop-wrap--open` : ""}`, children: /* @__PURE__ */ s("div", { className: `${Je}__drop`, children: /* @__PURE__ */ s(
            gc,
            {
              items: k.children,
              onChange: (_) => l == null ? void 0 : l(_, k),
              direction: "column",
              titleDirection: r,
              scrollToView: f,
              ...c
            }
          ) }) })
        ]
      },
      k.key ?? y
    );
  }) });
}, ym = ({
  height: e = "64px",
  fixed: t,
  filter: n = 0,
  borderBottom: r = !0,
  applications: o,
  logo: i,
  name: a,
  onLogoClick: l,
  divider: c = !0,
  align: u,
  menuProps: d,
  rightComponent: p,
  mobileSize: h = 767,
  style: f,
  className: m = ""
}) => {
  var k;
  const [v, L] = F(!1);
  return de(() => {
    const y = () => L(!1), C = () => L(!1);
    return window.addEventListener("scroll", y, { passive: !0 }), window.addEventListener("resize", C, { passive: !0 }), () => {
      window.removeEventListener("scroll", y), window.removeEventListener("resize", C);
    };
  }, []), /* @__PURE__ */ g(
    "div",
    {
      className: `land-header ${t ? "fixed" : ""} ${n ? "filter" : ""} ${r ? "border-bottom" : ""} ${o ? "applications" : ""} ${m}`,
      style: {
        height: e,
        "--land-header-mobile-size": `${h}px`,
        ...f
      },
      children: [
        /* @__PURE__ */ g("div", { className: "land-header-logo", onClick: l, children: [
          o && /* @__PURE__ */ g(
            "button",
            {
              className: "land-header-application",
              onClick: (y) => y.stopPropagation(),
              children: [
                /* @__PURE__ */ s(Le, { name: "application" }),
                /* @__PURE__ */ s("div", { className: "land-application-drop", children: o })
              ]
            }
          ),
          typeof i == "string" ? /* @__PURE__ */ s("img", { src: i }) : i,
          c && i && a && /* @__PURE__ */ s(qt, { direction: "vertical", length: "24px" }),
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
              gc,
              {
                border: !1,
                ...d,
                onChange: (y) => {
                  var C;
                  (C = d.onChange) == null || C.call(d, y), L(!1);
                },
                onDropChange: (y, C) => {
                  var w;
                  (w = d.onDropChange) == null || w.call(d, y, C), L(!1);
                }
              }
            )
          }
        ),
        p && /* @__PURE__ */ s("div", { className: "land-header-right", children: p }),
        d && d.items && ((k = d.items) == null ? void 0 : k.length) > 0 && /* @__PURE__ */ s(
          et,
          {
            className: "land-mobile-toggle-button",
            icon: /* @__PURE__ */ s(Le, { name: "more-line" }),
            variant: "text",
            onClick: () => L(!v)
          }
        )
      ]
    }
  );
}, wn = {
  alt: "",
  fit: "cover",
  position: "center",
  round: !1,
  lazy: !1,
  showSkeleton: !0,
  showError: !0
}, va = "land-skeleton", p3 = ({
  width: e = "100%",
  height: t = 24,
  radius: n = "var(--radius-m)",
  start: r = "var(--color-bg-secondary)",
  stop: o = "var(--color-bg-tertiary)",
  style: i,
  className: a = ""
}) => {
  const l = j(() => ({
    width: typeof e == "number" ? `${e}px` : e,
    height: typeof t == "number" ? `${t}px` : t,
    borderRadius: typeof n == "number" ? `${n}px` : n
  }), [e, t, n]), c = j(() => ({
    background: `linear-gradient(90deg, ${r} 0%, ${r} 20%, ${o} 50%, ${o} 80%, ${r} 100%, ${r} 120%, ${o} 150%, ${o} 180%, ${r} 200%)`
  }), [r, o]), u = j(() => [va, a].filter(Boolean).join(" "), [a]);
  return /* @__PURE__ */ s(
    "div",
    {
      className: u,
      style: { ...l, ...i },
      children: /* @__PURE__ */ s("div", { className: `${va}__content`, style: c })
    }
  );
}, Ht = "land-image", m3 = {
  center: "center",
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
  "top-left": "top left",
  "top-right": "top right",
  "bottom-left": "bottom left",
  "bottom-right": "bottom right"
}, g3 = (e) => {
  const {
    // 基础属性
    src: t,
    alt: n = wn.alt,
    width: r,
    height: o,
    // 显示属性
    fit: i = wn.fit,
    position: a = wn.position,
    ratio: l,
    radius: c,
    round: u = wn.round,
    // 加载属性
    lazy: d = wn.lazy,
    preview: p,
    fallbackSrc: h,
    fallback: f,
    placeholder: m,
    showSkeleton: v = wn.showSkeleton,
    showError: L = wn.showError,
    // 事件属性
    onLoad: k,
    onError: y,
    onClick: C,
    // 样式属性
    className: w,
    style: b,
    imgClassName: x,
    imgStyle: N,
    htmlProps: T,
    imgProps: _
  } = e, [V, H] = F("idle"), [S, A] = F(t), [O, U] = F(!1), [re, R] = F(), q = ae(null);
  de(() => {
    t ? (H("loading"), A(t), U(!1), R(void 0)) : (H("idle"), A(void 0));
  }, [t]);
  const J = M((le) => {
    const be = le.currentTarget;
    be.naturalWidth && be.naturalHeight && R(be.naturalWidth / be.naturalHeight), H("success"), k == null || k(le);
  }, [k]), z = M((le) => {
    if (!O && h) {
      U(!0), A(h);
      return;
    }
    H("error"), y == null || y(le);
  }, [O, h, y]), Q = M((le) => {
    C == null || C(le);
  }, [C]), X = j(() => {
    const le = [Ht];
    return le.push(`${Ht}--${V}`), u && le.push(`${Ht}--round`), C && le.push(`${Ht}--clickable`), w && le.push(w), le.join(" ");
  }, [V, u, C, w]), $ = j(() => {
    const le = { ...b };
    r !== void 0 && (le.width = typeof r == "number" ? `${r}px` : r), o !== void 0 && (le.height = typeof o == "number" ? `${o}px` : o);
    const be = l ?? (V === "success" ? re : void 0);
    return be !== void 0 && (le.aspectRatio = `${be}`), u ? le.borderRadius = "50%" : c !== void 0 && (le.borderRadius = typeof c == "number" ? `${c}px` : c), le;
  }, [b, r, o, l, re, V, u, c]), Z = j(() => ({
    objectFit: i,
    objectPosition: m3[a] || "center",
    ...N
  }), [i, a, N]), te = () => m ? /* @__PURE__ */ s("div", { className: `${Ht}__placeholder`, children: m }) : v ? /* @__PURE__ */ s(
    p3,
    {
      width: "100%",
      height: "100%",
      radius: u ? "50%" : c ?? "var(--radius-m)",
      className: `${Ht}__skeleton`
    }
  ) : null, pe = () => f ? /* @__PURE__ */ s("div", { className: `${Ht}__fallback`, children: f }) : L ? /* @__PURE__ */ g("div", { className: `${Ht}__error`, children: [
    /* @__PURE__ */ s(Le, { name: "image", size: 24, stroke: "var(--color-text-quaternary)" }),
    /* @__PURE__ */ s("span", { className: `${Ht}__error-text`, children: "加载失败" })
  ] }) : null, ue = S && V !== "error";
  return /* @__PURE__ */ g(
    "div",
    {
      className: X,
      style: $,
      onClick: C ? Q : void 0,
      ...T,
      children: [
        V === "loading" && te(),
        V === "error" && pe(),
        ue && /* @__PURE__ */ s(
          "img",
          {
            ref: q,
            src: S,
            alt: n,
            loading: d ? "lazy" : void 0,
            className: `${Ht}__img ${V === "success" ? `${Ht}__img--loaded` : ""} ${x || ""}`,
            style: Z,
            onLoad: J,
            onError: z,
            ..._
          }
        )
      ]
    }
  );
}, wm = ({ children: e, style: t, className: n }) => /* @__PURE__ */ s("div", { className: `land-layout ${n}`, style: t, children: e }), Jt = "land-message", v3 = {
  info: "info",
  success: "success",
  fail: "error",
  warn: "warning",
  warning: "warning",
  error: "error",
  loading: "loading"
}, k3 = {
  info: { name: "info-fill", color: "var(--color-primary-6)" },
  success: { name: "check-fill", color: "var(--color-success-6)" },
  warning: { name: "attention-fill", color: "var(--color-warning-6)" },
  error: { name: "error-fill", color: "var(--color-danger-6)" },
  loading: { name: "", color: "var(--color-primary-6)" }
}, Cm = ({
  type: e = "info",
  content: t,
  text: n,
  variant: r = "light",
  simple: o = !1,
  icon: i,
  closable: a = !1,
  closeIcon: l,
  style: c,
  className: u = ""
}) => {
  const d = j(() => v3[e] || "info", [e]), p = t ?? n, h = j(() => [
    Jt,
    `${Jt}--${d}`,
    `${Jt}--${r}`,
    o && `${Jt}--simple`,
    u
  ].filter(Boolean).join(" "), [d, r, o, u]);
  return /* @__PURE__ */ g("div", { className: h, style: c, children: [
    (() => {
      if (o || i === !1) return null;
      if (i)
        return /* @__PURE__ */ s("span", { className: `${Jt}__icon`, children: i });
      const m = k3[d];
      return d === "loading" ? /* @__PURE__ */ s("span", { className: `${Jt}__icon`, children: /* @__PURE__ */ s(Gn, { size: 18, color: m.color }) }) : /* @__PURE__ */ s("span", { className: `${Jt}__icon`, children: /* @__PURE__ */ s(Le, { name: m.name, size: 18, color: m.color }) });
    })(),
    /* @__PURE__ */ s("span", { className: `${Jt}__content`, children: p }),
    a && /* @__PURE__ */ s("span", { className: `${Jt}__close`, children: l || /* @__PURE__ */ s(Le, { name: "close", size: 14 }) })
  ] });
}, fn = class fn {
  constructor() {
    Hn(this, "container", null);
    Hn(this, "messageQueue", /* @__PURE__ */ new Map());
    Hn(this, "messageId", 0);
    Hn(this, "isDestroyed", !1);
    this.initContainer();
  }
  static getInstance() {
    return fn.instance || (fn.instance = new fn()), fn.instance;
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
        } catch (p) {
          console.warn("MessagePlugin: 应用自定义样式失败", p);
        }
      const i = document.createElement("div");
      i.textContent = String(t.content), i.style.flex = "1";
      const a = document.createElement("div"), l = `
        width: 16px;
        height: 16px;
        background-color: #1890ff;
        border-radius: 50%;
        display: flex;
      `, c = {
        success: "background-color: #52c41a;clipPath:path('M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM11.8174 5.14648C11.6221 4.95123 11.3056 4.95122 11.1104 5.14648L7.06445 9.19238L4.90332 7.03223C4.70806 6.83698 4.39155 6.83697 4.19629 7.03223L3.64648 7.58203C3.45123 7.77729 3.45123 8.0938 3.64648 8.28906L6.1582 10.8008L6.16016 10.8037L6.71094 11.3535C6.90622 11.5485 7.22281 11.5487 7.41797 11.3535L12.3672 6.40332C12.5624 6.20806 12.5624 5.89155 12.3672 5.69629L11.8174 5.14648Z')",
        fail: "background-color: #E63D2E;clipPath:path('M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15ZM4.58165 5.85883C4.40958 5.68921 4.4076 5.41223 4.57723 5.24015L5.1915 4.61702C5.36113 4.44495 5.63816 4.44297 5.81023 4.6126L7.99116 6.76258L10.1411 4.58162C10.3107 4.40955 10.5878 4.40757 10.7598 4.5772L11.383 5.19148C11.555 5.3611 11.557 5.63811 11.3874 5.81018L9.23742 7.99112L11.4184 10.1411C11.5904 10.3107 11.5924 10.5877 11.4228 10.7598L10.8085 11.3829C10.6389 11.555 10.3619 11.557 10.1898 11.3873L8.00884 9.23738L5.85887 11.4183C5.68926 11.5904 5.41223 11.5924 5.24018 11.4227L4.61705 10.8085C4.44498 10.6388 4.44299 10.3618 4.61263 10.1898L6.76258 8.00884L4.58165 5.85883Z')",
        warning: "background-color: #FA8E00;clipPath: path('M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15ZM7.5625 3.625C7.32087 3.625 7.125 3.82088 7.125 4.0625V8.875C7.125 9.11663 7.32087 9.3125 7.5625 9.3125H8.4375C8.67913 9.3125 8.875 9.11663 8.875 8.875V4.0625C8.875 3.82088 8.67913 3.625 8.4375 3.625H7.5625ZM7.5625 10.625C7.32087 10.625 7.125 10.8209 7.125 11.0625V11.9375C7.125 12.1791 7.32087 12.375 7.5625 12.375H8.4375C8.67913 12.375 8.875 12.1791 8.875 11.9375V11.0625C8.875 10.8209 8.67913 10.625 8.4375 10.625H7.5625Z')",
        error: "background-color: #E63D2E;clipPath: path('M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15ZM7.5625 3.625C7.32087 3.625 7.125 3.82088 7.125 4.0625V8.875C7.125 9.11663 7.32087 9.3125 7.5625 9.3125H8.4375C8.67913 9.3125 8.875 9.11663 8.875 8.875V4.0625C8.875 3.82088 8.67913 3.625 8.4375 3.625H7.5625ZM7.5625 10.625C7.32087 10.625 7.125 10.8209 7.125 11.0625V11.9375C7.125 12.1791 7.32087 12.375 7.5625 12.375H8.4375C8.67913 12.375 8.875 12.1791 8.875 11.9375V11.0625C8.875 10.8209 8.67913 10.625 8.4375 10.625H7.5625Z')",
        info: "background-color: #1890ff;clipPath:path('M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15ZM7.5625 12.375C7.32087 12.375 7.125 12.1791 7.125 11.9375V7.125C7.125 6.88337 7.32087 6.6875 7.5625 6.6875H8.4375C8.67913 6.6875 8.875 6.88337 8.875 7.125V11.9375C8.875 12.1791 8.67913 12.375 8.4375 12.375H7.5625ZM7.5625 5.375C7.32087 5.375 7.125 5.17913 7.125 4.9375V4.0625C7.125 3.82088 7.32087 3.625 7.5625 3.625H8.4375C8.67913 3.625 8.875 3.82088 8.875 4.0625V4.9375C8.875 5.17913 8.67913 5.375 8.4375 5.375H7.5625Z')"
      }, u = t.type || "info", d = c[u] || c.info;
      if (a.style.cssText = l + d, t.simple || r.appendChild(a), r.appendChild(i), t.closable) {
        const p = document.createElement("span");
        p.innerHTML = "×", p.style.cssText = `
          margin-left: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          opacity: 0.6;
          transition: opacity 0.2s;
        `, p.onmouseenter = () => p.style.opacity = "1", p.onmouseleave = () => p.style.opacity = "0.6", p.onclick = () => this.close(n), r.appendChild(p);
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
        } catch (l) {
          console.error("MessagePlugin: onClose 回调执行失败", l);
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
        o && (o.textContent = String(n.content));
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
    }), this.container = null, this.messageQueue.clear(), fn.instance = void 0);
  }
};
Hn(fn, "instance");
let qs = fn;
const cn = qs.getInstance(), Mm = {
  show: (e) => {
    try {
      return cn.show(e);
    } catch (t) {
      return console.error("MessagePlugin: show 方法执行失败", t), { close: () => {
      }, update: () => {
      } };
    }
  },
  success: (e, t) => {
    try {
      return cn.success(e, t);
    } catch (n) {
      return console.error("MessagePlugin: success 方法执行失败", n), { close: () => {
      }, update: () => {
      } };
    }
  },
  error: (e, t) => {
    try {
      return cn.error(e, t);
    } catch (n) {
      return console.error("MessagePlugin: error 方法执行失败", n), { close: () => {
      }, update: () => {
      } };
    }
  },
  fail: (e, t) => {
    try {
      return cn.error(e, t);
    } catch (n) {
      return console.error("MessagePlugin: fail 方法执行失败", n), { close: () => {
      }, update: () => {
      } };
    }
  },
  warning: (e, t) => {
    try {
      return cn.warning(e, t);
    } catch (n) {
      return console.error("MessagePlugin: warning 方法执行失败", n), { close: () => {
      }, update: () => {
      } };
    }
  },
  info: (e, t) => {
    try {
      return cn.info(e, t);
    } catch (n) {
      return console.error("MessagePlugin: info 方法执行失败", n), { close: () => {
      }, update: () => {
      } };
    }
  },
  closeAll: () => {
    try {
      cn.closeAll();
    } catch (e) {
      console.error("MessagePlugin: closeAll 方法执行失败", e);
    }
  },
  destroy: () => {
    try {
      cn.destroy();
    } catch (e) {
      console.error("MessagePlugin: destroy 方法执行失败", e);
    }
  }
}, Ye = "land-pagination", bm = ({
  current: e = 1,
  pageSize: t = 5,
  total: n = 1,
  showTotal: r = !1,
  showInput: o = !1,
  onChange: i,
  style: a,
  className: l
}) => {
  var y, C;
  const [c, u] = F(e);
  de(() => {
    u(e);
  }, [e]);
  const { pageData: d, curStart: p, isStartPreOut: h, isStartNextOut: f } = j(() => {
    const w = t;
    let b = 2;
    return c > w + 1 && (b = Math.max(2, c - Math.floor(w / 2))), b + w > n && (b = Math.max(2, n - w + 1)), {
      pageData: Array.from({ length: n }).map((N, T) => ({ id: T + 1 })).filter((N) => N.id > 1 && N.id < n).filter((N) => N.id >= b && N.id < b + w),
      curStart: b,
      isStartPreOut: b <= w * 2,
      isStartNextOut: n - b < w * 2
    };
  }, [n, t, c]), m = M(
    (w) => {
      w >= 1 && w <= n && w !== c && (u(w), i == null || i(w));
    },
    [c, n, i]
  ), v = M(
    (w) => {
      w === "prev" && !h ? m(Math.max(1, p - t)) : w === "next" && !f && m(Math.min(n, p + t));
    },
    [p, t, h, f, n, m]
  ), L = M(
    (w) => {
      !isNaN(w) && w >= 1 && w <= n && (u(w), m(w));
    },
    [n, m]
  ), k = j(
    () => [Ye, l].filter(Boolean).join(" "),
    [l]
  );
  return /* @__PURE__ */ g("div", { className: k, style: a, children: [
    r && /* @__PURE__ */ g("div", { className: `${Ye}__total`, children: [
      "共",
      n,
      "页"
    ] }),
    /* @__PURE__ */ s(
      "div",
      {
        className: `${Ye}__arrow${c === 1 ? ` ${Ye}__arrow--disabled` : ""}`,
        onClick: () => c > 1 && m(c - 1),
        children: /* @__PURE__ */ s(Le, { name: "arrow", className: `${Ye}__arrow-icon ${Ye}__arrow-icon--prev`, strokeWidth: 4 })
      }
    ),
    /* @__PURE__ */ g("div", { className: `${Ye}__page`, children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: `${Ye}__item${c === 1 ? ` ${Ye}__item--active` : ""}`,
          onClick: () => m(1),
          children: "1"
        }
      ),
      ((y = d[0]) == null ? void 0 : y.id) > 2 && /* @__PURE__ */ g("div", { className: `${Ye}__ellipsis`, onClick: () => v("prev"), children: [
        /* @__PURE__ */ s(Le, { name: "more", size: 16 }),
        /* @__PURE__ */ s(Le, { name: "arrow-double", className: `${Ye}__ellipsis-icon ${Ye}__ellipsis-icon--prev`, size: 16 })
      ] }),
      d.map((w) => /* @__PURE__ */ s(
        "div",
        {
          className: `${Ye}__item${c === w.id ? ` ${Ye}__item--active` : ""}`,
          onClick: () => m(w.id),
          children: w.id
        },
        w.id
      )),
      ((C = d[d.length - 1]) == null ? void 0 : C.id) < n - 1 && /* @__PURE__ */ g("div", { className: `${Ye}__ellipsis`, onClick: () => v("next"), children: [
        /* @__PURE__ */ s(Le, { name: "more", size: 16 }),
        /* @__PURE__ */ s(Le, { name: "arrow-double", className: `${Ye}__ellipsis-icon ${Ye}__ellipsis-icon--next`, size: 16 })
      ] }),
      /* @__PURE__ */ s(
        "div",
        {
          className: `${Ye}__item${c === n ? ` ${Ye}__item--active` : ""}`,
          onClick: () => m(n),
          children: n
        }
      )
    ] }),
    /* @__PURE__ */ s(
      "div",
      {
        className: `${Ye}__arrow${c === n ? ` ${Ye}__arrow--disabled` : ""}`,
        onClick: () => c < n && m(c + 1),
        children: /* @__PURE__ */ s(Le, { name: "arrow", className: `${Ye}__arrow-icon ${Ye}__arrow-icon--next`, strokeWidth: 4 })
      }
    ),
    o && /* @__PURE__ */ g("div", { className: `${Ye}__input`, children: [
      "跳转至",
      /* @__PURE__ */ s(
        At,
        {
          stepperPosition: "none",
          value: c,
          onChange: L,
          className: `${Ye}__input-field`,
          textAlign: "center"
        }
      ),
      "/ ",
      n,
      " 页"
    ] })
  ] });
}, Cn = "land-pop-confirm", xm = ({
  show: e,
  content: t,
  theme: n = "light",
  placement: r = "top",
  hideArrow: o = !1,
  cancelButtonProps: i,
  submitButtonProps: a,
  cancelLabel: l = "取消",
  submitLabel: c = "确认",
  onCancel: u,
  onSubmit: d,
  style: p,
  className: h = ""
}) => {
  const f = j(() => [
    Cn,
    e && `${Cn}--show`,
    o && `${Cn}--hide-arrow`,
    n === "dark" && `${Cn}--dark`,
    h
  ].filter(Boolean).join(" "), [e, o, n, h]), m = j(() => {
    const L = {};
    switch (r) {
      case "top":
        L.bottom = "100%", L.left = "50%", L.transform = "translate(-50%, -12px)";
        break;
      case "bottom":
        L.top = "100%", L.left = "50%", L.transform = "translate(-50%, 12px)";
        break;
      case "left":
        L.right = "100%", L.top = "50%", L.transform = "translate(-12px, -50%)";
        break;
      case "right":
        L.left = "100%", L.top = "50%", L.transform = "translate(12px, -50%)";
        break;
    }
    return { ...L, ...p };
  }, [r, p]), v = j(() => {
    const L = {};
    switch (r) {
      case "top":
        L.left = "50%", L.top = "100%", L.transform = "translate(-50%, -50%) rotate(45deg)";
        break;
      case "bottom":
        L.left = "50%", L.bottom = "100%", L.transform = "translate(-50%, 50%) rotate(-135deg)";
        break;
      case "left":
        L.left = "100%", L.top = "50%", L.transform = "translate(-50%, -50%) rotate(-45deg)";
        break;
      case "right":
        L.left = "0", L.top = "50%", L.transform = "translate(-50%, -50%) rotate(135deg)";
        break;
    }
    return L;
  }, [r]);
  return /* @__PURE__ */ g("div", { className: f, style: m, children: [
    /* @__PURE__ */ s("div", { className: `${Cn}__content`, children: t }),
    /* @__PURE__ */ g("div", { className: `${Cn}__btns`, children: [
      /* @__PURE__ */ s(
        et,
        {
          variant: "fill",
          size: "small",
          onClick: u,
          ...i,
          children: l
        }
      ),
      /* @__PURE__ */ s(
        et,
        {
          variant: "background",
          size: "small",
          onClick: d,
          ...a,
          children: c
        }
      )
    ] }),
    !o && /* @__PURE__ */ s("div", { className: `${Cn}__arrow`, style: v })
  ] });
}, $t = "land-progress", _m = ({
  value: e = 0.6,
  status: t = "default",
  type: n = "line",
  hideLabel: r = !1,
  strokeWidth: o = 8,
  style: i,
  className: a = ""
}) => {
  const l = j(() => Math.max(0, Math.min(1, e)), [e]), c = j(() => [
    $t,
    `${$t}--${n}`,
    `${$t}--${t}`,
    a
  ].filter(Boolean).join(" "), [n, t, a]), u = j(() => `scaleX(${l})`, [l]), d = M(() => {
    if (t === "default") return null;
    const m = n === "circle" ? 20 : 16;
    switch (t) {
      case "success":
        return /* @__PURE__ */ s(Le, { name: "check-fill", size: m, color: "var(--color-green-6)" });
      case "fail":
        return /* @__PURE__ */ s(Le, { name: "error-fill", size: m, color: "var(--color-red-6)" });
      default:
        return null;
    }
  }, [t, n]), p = j(() => {
    const v = (80 - o) / 2, L = 2 * Math.PI * v, k = L - l * L;
    return { size: 80, radius: v, circumference: L, strokeDashoffset: k };
  }, [o, l]), h = () => {
    const { size: m, radius: v, circumference: L, strokeDashoffset: k } = p;
    return /* @__PURE__ */ g("svg", { width: m, height: m, className: `${$t}__circle-svg`, children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: m / 2,
          cy: m / 2,
          r: v,
          stroke: "var(--color-border-primary)",
          strokeWidth: o,
          fill: "none"
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: m / 2,
          cy: m / 2,
          r: v,
          stroke: "var(--color-primary)",
          strokeWidth: o,
          fill: "none",
          strokeDasharray: L,
          strokeDashoffset: k,
          strokeLinecap: "round",
          transform: `rotate(-90 ${m / 2} ${m / 2})`,
          style: { transition: "stroke-dashoffset 0.3s ease" }
        }
      )
    ] });
  }, f = j(() => `${Math.round(l * 100)}%`, [l]);
  return /* @__PURE__ */ s("div", { className: c, style: i, children: /* @__PURE__ */ s("div", { className: `${$t}__content`, children: n === "circle" ? /* @__PURE__ */ g("div", { className: `${$t}__circle-container`, children: [
    h(),
    !r && t === "default" && /* @__PURE__ */ s("div", { className: `${$t}__circle-label`, children: f }),
    t !== "default" && /* @__PURE__ */ s("div", { className: `${$t}__status-icon`, children: d() })
  ] }) : /* @__PURE__ */ g(tt, { children: [
    !r && t === "default" && /* @__PURE__ */ s(
      "div",
      {
        className: `${$t}__label`,
        style: { left: `${l * 100}%` },
        children: f
      }
    ),
    /* @__PURE__ */ s("div", { className: `${$t}__bar`, children: /* @__PURE__ */ s(
      "div",
      {
        className: `${$t}__bar-finished`,
        style: { transform: u }
      }
    ) }),
    t !== "default" && /* @__PURE__ */ s("div", { className: `${$t}__status-icon`, children: d() })
  ] }) }) });
}, Hr = {
  checked: !1,
  defaultChecked: !1,
  disabled: !1,
  animated: !0
}, Dt = "land-radio", L3 = ({
  // 基础属性
  value: e,
  name: t,
  label: n,
  checked: r = Hr.checked,
  defaultChecked: o = Hr.defaultChecked,
  disabled: i = Hr.disabled,
  // 动效属性
  animated: a = Hr.animated,
  // 提示属性
  tip: l,
  // 样式属性
  style: c,
  className: u = "",
  labelStyle: d,
  labelClassName: p = "",
  // 事件属性
  onCheckedChange: h,
  onClick: f
}) => {
  const [m, v] = F(o || r);
  de(() => {
    r !== void 0 && v(r);
  }, [r]);
  const L = j(() => [
    Dt,
    i && `${Dt}--disabled`,
    m && `${Dt}--checked`,
    u
  ].filter(Boolean).join(" "), [i, m, u]), k = j(() => [
    `${Dt}__circle`,
    m && `${Dt}__circle--checked`,
    a ? `${Dt}__circle--animated` : `${Dt}__circle--no-animation`
  ].filter(Boolean).join(" "), [m, a]), y = j(() => [
    `${Dt}__text`,
    p
  ].filter(Boolean).join(" "), [p]), C = M((w) => {
    i || (f == null || f(w), m || (v(!0), h == null || h(!0, w)));
  }, [i, m, f, h]);
  return /* @__PURE__ */ g(
    "div",
    {
      className: L,
      style: c,
      "data-value": e,
      "data-name": t,
      children: [
        /* @__PURE__ */ g(
          "div",
          {
            className: `${Dt}__label`,
            onClick: C,
            role: "radio",
            "aria-checked": m,
            "aria-disabled": i,
            tabIndex: i ? -1 : 0,
            children: [
              /* @__PURE__ */ s("div", { className: k, children: /* @__PURE__ */ s(Le, { name: "check", size: 10, className: `${Dt}__icon` }) }),
              n && /* @__PURE__ */ s("span", { className: y, style: d, children: n })
            ]
          }
        ),
        l && /* @__PURE__ */ g("div", { className: `${Dt}__tip hover-pop`, children: [
          /* @__PURE__ */ s(
            Le,
            {
              name: "info-stroke",
              color: "var(--color-text-tertiary)",
              size: 12
            }
          ),
          /* @__PURE__ */ s(
            at,
            {
              content: l,
              theme: "dark",
              style: { maxWidth: "200px" },
              placement: "top"
            }
          )
        ] })
      ]
    }
  );
}, $m = ({
  checked: e,
  data: t = [],
  animated: n,
  onChange: r,
  style: o,
  className: i = ""
}) => /* @__PURE__ */ s("div", { className: `land-radio-group ${i}`, style: o, children: t == null ? void 0 : t.map(
  (a) => /* @__PURE__ */ s(
    L3,
    {
      label: a.label,
      tip: a.tip,
      disabled: a.disabled,
      checked: e === a.key,
      animated: n,
      onClick: (l) => r == null ? void 0 : r(a.key, a, l)
    },
    a.key
  )
) }), It = {
  count: 5,
  allowHalf: !0,
  allowClear: !0,
  size: "default",
  disabled: !1,
  readOnly: !1,
  autoFocus: !1,
  showTooltip: !1,
  gap: 8,
  inactiveColor: "var(--color-fill-tertiary)",
  activeColor: "var(--color-warning)"
};
function ka(e) {
  return typeof e == "function";
}
const y3 = ({ className: e }) => /* @__PURE__ */ s("svg", { className: e, viewBox: "0 0 48 48", fill: "currentColor", children: /* @__PURE__ */ s("path", { d: "M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z" }) }), Nm = (e) => {
  const {
    value: t,
    defaultValue: n = 0,
    count: r = It.count,
    allowHalf: o = It.allowHalf,
    allowClear: i = It.allowClear,
    size: a = It.size,
    disabled: l = It.disabled,
    readOnly: c = It.readOnly,
    autoFocus: u = It.autoFocus,
    name: d,
    showTooltip: p = It.showTooltip,
    tooltips: h,
    style: f,
    className: m,
    gap: v = It.gap,
    inactiveColor: L = It.inactiveColor,
    activeColor: k = It.activeColor,
    hoverColor: y,
    characterStyle: C,
    characterClassName: w,
    character: b,
    activeCharacter: x,
    onChange: N,
    onHoverChange: T,
    onFocus: _,
    onBlur: V,
    onKeyDown: H
  } = e, [S, A] = F(n), [O, U] = F(void 0), [re, R] = F(!1), q = ae(null), J = t !== void 0, z = J ? t : S, Q = O ?? z;
  de(() => {
    u && q.current && !l && !c && q.current.focus();
  }, [u, l, c]);
  const X = M(
    (I, E) => E && x ? ka(x) ? x(I) : x : b ? ka(b) ? b(I) : b : /* @__PURE__ */ s(y3, {}),
    [b, x]
  ), $ = M(
    (I, E) => o && E ? I + 0.5 : I + 1,
    [o]
  ), Z = M(
    (I, E) => {
      const W = $(I, E);
      return Q >= W;
    },
    [Q, $]
  ), te = M(
    (I, E) => {
      if (l || c) return;
      const W = $(I, E);
      let fe = W;
      i && W === z && (fe = 0), J || A(fe), N == null || N(fe);
    },
    [l, c, $, i, z, J, N]
  ), pe = M(
    (I, E) => {
      if (l || c) return;
      const W = $(I, E);
      U(W), T == null || T(W);
    },
    [l, c, $, T]
  ), ue = M(() => {
    l || c || (U(void 0), T == null || T(void 0));
  }, [l, c, T]), le = M(
    (I) => {
      l || (R(!0), _ == null || _(I));
    },
    [l, _]
  ), be = M(
    (I) => {
      R(!1), V == null || V(I);
    },
    [V]
  ), ie = M(
    (I) => {
      if (l || c) return;
      const E = o ? 0.5 : 1;
      let W = z;
      switch (I.key) {
        case "ArrowRight":
        case "ArrowUp":
          I.preventDefault(), W = Math.min(z + E, r);
          break;
        case "ArrowLeft":
        case "ArrowDown":
          I.preventDefault(), W = Math.max(z - E, 0);
          break;
        case "Home":
          I.preventDefault(), W = 0;
          break;
        case "End":
          I.preventDefault(), W = r;
          break;
      }
      W !== z && (J || A(W), N == null || N(W)), H == null || H(I);
    },
    [l, c, o, z, r, J, N, H]
  ), D = M(
    (I) => {
      if (!(!p || !h))
        return h[I];
    },
    [p, h]
  ), he = j(() => {
    const I = ["land-rate"];
    return a && a !== "default" && I.push(`land-rate--${a}`), l && I.push("land-rate--disabled"), c && I.push("land-rate--readonly"), re && I.push("land-rate--focused"), m && I.push(m), I.join(" ");
  }, [a, l, c, re, m]), ne = j(
    () => ({
      "--land-rate-gap": typeof v == "number" ? `${v}px` : v,
      "--land-rate-inactive-color": L,
      "--land-rate-active-color": k,
      "--land-rate-hover-color": y || k,
      ...f
    }),
    [v, L, k, y, f]
  ), ge = M(
    (I) => {
      const E = Z(I, !0), W = Z(I, !1), fe = E && W, K = E && !W, P = D(I);
      return /* @__PURE__ */ g(
        "div",
        {
          className: `land-rate__character ${w || ""} ${fe ? "land-rate__character--active" : ""} ${K ? "land-rate__character--half" : ""}`,
          style: C,
          title: P,
          children: [
            o && /* @__PURE__ */ s(
              "div",
              {
                className: "land-rate__character-half land-rate__character-half--first",
                onClick: () => te(I, !0),
                onMouseEnter: () => pe(I, !0),
                onMouseLeave: ue
              }
            ),
            /* @__PURE__ */ s(
              "div",
              {
                className: `land-rate__character-half land-rate__character-half--second ${o ? "" : "land-rate__character-half--full"}`,
                onClick: () => te(I, !1),
                onMouseEnter: () => pe(I, !1),
                onMouseLeave: ue
              }
            ),
            /* @__PURE__ */ g("div", { className: "land-rate__character-icon", children: [
              /* @__PURE__ */ s("div", { className: "land-rate__character-icon-inactive", children: X(I, !1) }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: "land-rate__character-icon-active",
                  style: {
                    width: K ? "50%" : fe ? "100%" : "0%"
                  },
                  children: X(I, !0)
                }
              )
            ] })
          ]
        },
        I
      );
    },
    [
      Z,
      D,
      w,
      C,
      o,
      te,
      pe,
      ue,
      X
    ]
  );
  return /* @__PURE__ */ s(
    "div",
    {
      ref: q,
      className: he,
      style: ne,
      role: "slider",
      "aria-label": "评分",
      "aria-valuemin": 0,
      "aria-valuemax": r,
      "aria-valuenow": z,
      "aria-valuetext": h == null ? void 0 : h[Math.ceil(z) - 1],
      "aria-disabled": l,
      "aria-readonly": c,
      tabIndex: l ? -1 : 0,
      "data-name": d,
      onFocus: le,
      onBlur: be,
      onKeyDown: ie,
      onMouseLeave: ue,
      children: Array.from({ length: r }).map((I, E) => ge(E))
    }
  );
}, Mn = {
  size: "default",
  placeholder: "请选择",
  separator: "，",
  maxDisplayCount: 3,
  multiple: !1,
  disabled: !1,
  emptyContent: "暂无数据"
}, w3 = {
  border: "outline",
  background: "fill",
  transparent: "transparent",
  text: "text"
}, ht = "land-select-tree", Er = (e) => {
  const t = [];
  return e.children && e.children.forEach((n) => {
    t.push(n.key), t.push(...Er(n));
  }), t;
}, vc = (e) => {
  const t = [];
  return e.children && e.children.forEach((n) => {
    t.push(n), t.push(...vc(n));
  }), t;
}, Po = (e, t) => {
  for (const n of e) {
    if (n.key === t) return n;
    if (n.children) {
      const r = Po(n.children, t);
      if (r) return r;
    }
  }
}, Cs = (e, t) => t.map((n) => Po(e, n)).filter(Boolean), jm = ({
  // 核心属性（新）
  options: e,
  value: t,
  values: n,
  defaultValue: r,
  defaultValues: o,
  // 核心属性（旧，兼容）
  data: i,
  selected: a,
  selectedValues: l,
  // 通用属性
  multiple: c = Mn.multiple,
  placeholder: u = Mn.placeholder,
  // 外观属性
  variant: d,
  type: p,
  size: h = Mn.size,
  disabled: f = Mn.disabled,
  width: m,
  // 多选属性
  separator: v = Mn.separator,
  maxDisplayCount: L = Mn.maxDisplayCount,
  // 提示属性
  tip: k,
  tipProps: y,
  // 自定义渲染
  customValueDisplay: C,
  renderOption: w,
  emptyContent: b = Mn.emptyContent,
  // 样式属性
  className: x = "",
  style: N,
  dropdownClassName: T,
  dropdownStyle: _,
  // 事件属性
  onChange: V,
  onExpand: H
}) => {
  const S = j(() => e ?? i ?? [], [e, i]), A = j(() => d || (p ? w3[p] ?? "outline" : "outline"), [d, p]), [O, U] = F(() => t !== void 0 ? t : a != null && a.key !== void 0 ? a.key : r), [re, R] = F(() => n !== void 0 ? n : l != null && Array.isArray(l) ? l.filter((E) => E != null).map((E) => E.key) : o ?? []);
  de(() => {
    t !== void 0 ? U(t) : a != null && a.key !== void 0 && U(a.key);
  }, [t, a]), de(() => {
    n !== void 0 ? R(n) : l != null && Array.isArray(l) && R(l.filter((E) => E != null).map((E) => E.key));
  }, [n, l]);
  const [q, J] = F([]), z = j(() => {
    if (c)
      return Cs(S, re);
    if (O) {
      const E = Po(S, O);
      return E ? [E] : [];
    }
    return [];
  }, [c, re, O, S]), Q = M(() => {
    if (c) {
      const E = z.map((W) => W.label);
      return E.length === 0 ? /* @__PURE__ */ s("span", { className: `${ht}__placeholder`, children: u }) : E.length <= L ? /* @__PURE__ */ s("span", { className: `${ht}__value`, children: E.join(v) }) : /* @__PURE__ */ g("span", { className: `${ht}__value`, children: [
        E.slice(0, L).join(v),
        "等",
        E.length,
        "个选项"
      ] });
    } else {
      const E = z[0];
      return E ? /* @__PURE__ */ s("span", { className: `${ht}__value`, children: E.label }) : /* @__PURE__ */ s("span", { className: `${ht}__placeholder`, children: u });
    }
  }, [c, z, u, v, L]), X = M(() => C ? C({
    values: c ? re : O ? [O] : [],
    items: z,
    isMultiple: !!c,
    placeholder: u
  }) : Q(), [C, Q, c, re, O, z, u]), $ = M((E) => {
    if (E === 0) return S;
    let W = S;
    for (let fe = 0; fe < E; fe++) {
      const K = q[fe], P = W.find((oe) => oe.key === K);
      if (P != null && P.children)
        W = P.children;
      else
        return [];
    }
    return W;
  }, [S, q]), Z = M((E) => c ? re.includes(E.key) : O === E.key, [c, re, O]), te = M((E) => {
    if (!c || !E.children) return !1;
    const W = Er(E), fe = W.filter((K) => re.includes(K)).length;
    return fe > 0 && fe < W.length;
  }, [c, re]), pe = M((E) => {
    let W = [...E];
    const fe = (P) => {
      const oe = [];
      return P.forEach((se) => {
        se.children && se.children.length > 0 && (oe.push(se), oe.push(...fe(se.children)));
      }), oe;
    };
    return fe(S).forEach((P) => {
      const oe = Er(P), se = oe.filter((_e) => W.includes(_e)).length, ve = W.includes(P.key);
      se === oe.length && !ve ? W.push(P.key) : se === 0 && ve && (W = W.filter((_e) => _e !== P.key));
    }), W;
  }, [S]), ue = M((E, W) => {
    if (E.children && E.children.length > 0) {
      const K = q[W] === E.key ? q.slice(0, W) : [...q.slice(0, W), E.key];
      J(K), H == null || H(K);
    } else if (c) {
      let K = Z(E) ? re.filter((oe) => oe !== E.key) : [...re, E.key];
      K = pe(K), R(K);
      const P = Cs(S, K);
      V == null || V(K, E, P);
    } else
      U(E.key), V == null || V(E.key, E, [E]);
  }, [q, c, Z, re, V, pe, S, H]), le = M((E) => {
    if (!c) return;
    let W = [...re];
    if (Z(E)) {
      const P = [E.key, ...Er(E)];
      W = W.filter((oe) => !P.includes(oe));
    } else
      [E, ...vc(E)].forEach((oe) => {
        W.includes(oe.key) || W.push(oe.key);
      });
    W = pe(W), R(W);
    const K = Cs(S, W);
    V == null || V(W, E, K);
  }, [c, re, Z, pe, S, V]), be = M(() => {
    J([]);
  }, []), ie = j(() => $(0), [$]), D = j(() => q.map((E, W) => {
    const fe = W + 1, K = $(fe);
    return { level: fe, levelData: K };
  }).filter(({ levelData: E }) => E.length > 0), [q, $]), he = j(() => [
    ht,
    `${ht}--${h}`,
    x
  ].filter(Boolean).join(" "), [h, x]), ne = j(() => [
    `${ht}__trigger`,
    `${ht}__trigger--${A}`,
    f && `${ht}__trigger--disabled`
  ].filter(Boolean).join(" "), [A, f]), ge = j(() => [
    `${ht}__dropdown`,
    T
  ].filter(Boolean).join(" "), [T]), I = j(() => {
    const E = { ...N };
    return m && (E.width = typeof m == "number" ? `${m}px` : m), E;
  }, [N, m]);
  return /* @__PURE__ */ s("div", { className: he, style: I, children: /* @__PURE__ */ s(
    Cr,
    {
      disabled: f,
      trigger: "click",
      onClose: be,
      content: /* @__PURE__ */ s("div", { className: ge, style: _, children: S.length === 0 ? /* @__PURE__ */ s("div", { className: `${ht}__empty`, children: b }) : /* @__PURE__ */ g(tt, { children: [
        /* @__PURE__ */ s(
          Gs,
          {
            prefixCls: ht,
            data: ie,
            multiple: c,
            level: 0,
            expandedPath: q,
            onClick: ue,
            onCheckedChange: le,
            isItemSelected: Z,
            isItemIndeterminate: te,
            renderOption: w
          }
        ),
        D.map(({ level: E, levelData: W }) => /* @__PURE__ */ s(
          Gs,
          {
            prefixCls: ht,
            data: W,
            multiple: c,
            level: E,
            expandedPath: q,
            onClick: ue,
            onCheckedChange: le,
            isItemSelected: Z,
            isItemIndeterminate: te,
            renderOption: w
          },
          `level-${E}`
        ))
      ] }) }),
      children: /* @__PURE__ */ g("div", { className: ne, children: [
        /* @__PURE__ */ s("div", { className: `${ht}__content`, children: C ? X() : Q() }),
        /* @__PURE__ */ s(Le, { name: "arrow-triangle", className: `${ht}__arrow`, size: 16 }),
        k && /* @__PURE__ */ s(at, { attach: "body", content: k, theme: "dark", ...y })
      ] })
    }
  ) });
}, Gs = pn.memo(({
  prefixCls: e,
  data: t,
  multiple: n,
  level: r,
  expandedPath: o,
  onClick: i,
  onCheckedChange: a,
  isItemSelected: l,
  isItemIndeterminate: c,
  renderOption: u
}) => {
  const d = M((m, v) => {
    m.stopPropagation(), i(v, r);
  }, [i, r]), p = M((m, v) => {
    m.children && v && v.stopPropagation(), a(m);
  }, [a]), h = M((m, v) => [
    `${e}__option`,
    m && `${e}__option--expanded`,
    v && `${e}__option--selected`
  ].filter(Boolean).join(" "), [e]), f = M((m) => [
    `${e}__option-arrow`,
    m && `${e}__option-arrow--expanded`
  ].filter(Boolean).join(" "), [e]);
  return /* @__PURE__ */ s("div", { className: `${e}__list`, children: t == null ? void 0 : t.map((m) => {
    const v = o[r] === m.key, L = m.children && m.children.length > 0, k = l(m), y = c(m);
    return u ? /* @__PURE__ */ s(
      "div",
      {
        className: h(v, k),
        onClick: (C) => d(C, m),
        children: u(m, {
          selected: k,
          expanded: v,
          indeterminate: y,
          level: r
        })
      },
      m.key
    ) : /* @__PURE__ */ g(
      "div",
      {
        className: h(v, k),
        onClick: (C) => d(C, m),
        children: [
          /* @__PURE__ */ g("div", { className: `${e}__option-content`, children: [
            n && /* @__PURE__ */ s(
              Io,
              {
                checked: k,
                indeterminate: y,
                onCheckedChange: (C, w) => p(m, w)
              }
            ),
            /* @__PURE__ */ s("span", { className: `${e}__option-label`, children: m.label })
          ] }),
          L && /* @__PURE__ */ s(
            Le,
            {
              name: "arrow-triangle",
              className: f(v)
            }
          )
        ]
      },
      m.key
    );
  }) });
});
Gs.displayName = "TreeList";
const La = {
  type: "empty",
  size: "default"
}, Yt = "land-state", C3 = ({ className: e }) => /* @__PURE__ */ g(
  "svg",
  {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M43 30.5L36.5788 19.4923C36.2204 18.8778 35.5626 18.5 34.8513 18.5H13.1487C12.4374 18.5 11.7796 18.8778 11.4212 19.4923L5 30.5M43 30.5V40.5C43 41.6046 42.1046 42.5 41 42.5H7C5.89543 42.5 5 41.6046 5 40.5V30.5M43 30.5H5",
          stroke: "currentColor",
          strokeWidth: "3"
        }
      ),
      /* @__PURE__ */ s("path", { d: "M24 12V6", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" }),
      /* @__PURE__ */ s("path", { d: "M30.9995 12.7426L35.2422 8.5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" }),
      /* @__PURE__ */ s("path", { d: "M17.2426 12.7426L13 8.5", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" })
    ]
  }
), M3 = ({ className: e }) => /* @__PURE__ */ g(
  "svg",
  {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: [
      /* @__PURE__ */ s("circle", { cx: "24", cy: "24", r: "20", stroke: "currentColor", strokeWidth: "3" }),
      /* @__PURE__ */ s("path", { d: "M24 14V28", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" }),
      /* @__PURE__ */ s("circle", { cx: "24", cy: "34", r: "2", fill: "currentColor" })
    ]
  }
), b3 = ({ className: e }) => /* @__PURE__ */ g(
  "svg",
  {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M44 18.9653C37.2253 12.545 28.1189 10.0059 19.5 11.3481",
          stroke: "currentColor",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M38 25.799C35.2866 23.0855 31.9815 21.3243 28.5 20.5154",
          stroke: "currentColor",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M10 25.799C11.3276 24.4714 12.7969 23.3717 14.3591 22.5",
          stroke: "currentColor",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M16 32.3138C17.4388 30.875 19.1686 29.9048 21 29.4031",
          stroke: "currentColor",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s("circle", { cx: "24", cy: "37.5", r: "2.5", fill: "currentColor" }),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M40 40L8 8",
          stroke: "currentColor",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          d: "M4 18.9652C4.5888 18.4072 5.19522 17.8785 5.81741 17.3792C6.36642 16.9385 6.92771 16.5207 7.49999 16.1257",
          stroke: "currentColor",
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), x3 = ({ className: e }) => /* @__PURE__ */ g(
  "svg",
  {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: [
      /* @__PURE__ */ s("circle", { cx: "24", cy: "24", r: "20", stroke: "currentColor", strokeWidth: "3" }),
      /* @__PURE__ */ s("path", { d: "M10 38L38 10", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" })
    ]
  }
), _3 = ({ className: e }) => /* @__PURE__ */ g(
  "svg",
  {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
          stroke: "currentColor",
          strokeWidth: "3"
        }
      ),
      /* @__PURE__ */ s("path", { d: "M4 16H44", stroke: "currentColor", strokeWidth: "3" }),
      /* @__PURE__ */ s("circle", { cx: "9", cy: "12", r: "1.5", fill: "currentColor" }),
      /* @__PURE__ */ s("circle", { cx: "14", cy: "12", r: "1.5", fill: "currentColor" }),
      /* @__PURE__ */ s("circle", { cx: "19", cy: "12", r: "1.5", fill: "currentColor" }),
      /* @__PURE__ */ s("path", { d: "M17 28L24 35L31 28", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ s("path", { d: "M24 24V35", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" })
    ]
  }
), $3 = ({ className: e }) => /* @__PURE__ */ g(
  "svg",
  {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: [
      /* @__PURE__ */ s("circle", { cx: "24", cy: "24", r: "20", stroke: "currentColor", strokeWidth: "3" }),
      /* @__PURE__ */ s("path", { d: "M16 24L22 30L34 18", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })
    ]
  }
), N3 = ({ className: e }) => /* @__PURE__ */ g(
  "svg",
  {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: "M24 6L44 42H4L24 6Z",
          stroke: "currentColor",
          strokeWidth: "3",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s("path", { d: "M24 20V30", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round" }),
      /* @__PURE__ */ s("circle", { cx: "24", cy: "36", r: "2", fill: "currentColor" })
    ]
  }
), j3 = {
  empty: C3,
  error: M3,
  offline: b3,
  forbidden: x3,
  notFound: _3,
  success: $3,
  warning: N3
}, Vm = (e) => {
  const {
    // 外观属性
    type: t = La.type,
    size: n = La.size,
    // 内容属性
    icon: r,
    image: o,
    imageWidth: i,
    imageHeight: a,
    title: l,
    description: c,
    actions: u,
    children: d,
    // 事件属性
    onClick: p,
    // 样式属性
    className: h,
    style: f,
    iconClassName: m,
    iconStyle: v,
    titleClassName: L,
    titleStyle: k,
    descriptionClassName: y,
    descriptionStyle: C,
    htmlProps: w
  } = e, b = j(() => {
    const _ = [Yt];
    return _.push(`${Yt}--${n}`), p && _.push(`${Yt}--clickable`), h && _.push(h), _.join(" ");
  }, [n, p, h]), x = j(() => {
    const _ = [`${Yt}__icon`];
    return t && _.push(`${Yt}__icon--${t}`), m && _.push(m), _.join(" ");
  }, [t, m]);
  return /* @__PURE__ */ g(
    "div",
    {
      className: b,
      style: f,
      onClick: p ? (_) => {
        p == null || p(_);
      } : void 0,
      ...w,
      children: [
        (() => {
          if (r)
            return /* @__PURE__ */ s("div", { className: x, style: v, children: r });
          if (o) {
            const _ = {
              ...v,
              width: i,
              height: a
            };
            return /* @__PURE__ */ s("div", { className: x, style: _, children: /* @__PURE__ */ s("img", { src: o, alt: "", style: { width: "100%", height: "100%", objectFit: "contain" } }) });
          }
          if (t) {
            const _ = j3[t];
            return /* @__PURE__ */ s("div", { className: x, style: v, children: /* @__PURE__ */ s(_, { className: `${Yt}__icon-svg` }) });
          }
          return null;
        })(),
        l && /* @__PURE__ */ s(
          "div",
          {
            className: `${Yt}__title ${L || ""}`,
            style: k,
            children: l
          }
        ),
        c && /* @__PURE__ */ s(
          "div",
          {
            className: `${Yt}__description ${y || ""}`,
            style: C,
            children: c
          }
        ),
        u && /* @__PURE__ */ s("div", { className: `${Yt}__actions`, children: u }),
        d && /* @__PURE__ */ s("div", { className: `${Yt}__extra`, children: d })
      ]
    }
  );
}, Kt = "land-statistic", V3 = {
  linear: (e) => e,
  easeIn: (e) => e * e,
  easeOut: (e) => 1 - Math.pow(1 - e, 2),
  easeInOut: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
  bounce: (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  elastic: (e) => Math.pow(2, -10 * e) * Math.sin((e - 0.3 / 4) * (2 * Math.PI) / 0.3) + 1
}, Tm = ({
  value: e = 0,
  prefix: t,
  suffix: n,
  unit: r,
  trendIcon: o,
  animation: i = "none",
  animationConfig: a = {},
  precision: l = 0,
  style: c,
  className: u
}) => {
  const [d, p] = F(""), [h, f] = F(!1), m = ae(null), v = ae(null), L = ae(null), k = ae(null), y = ae(e), C = ae(!0), b = { ...{
    duration: 1e3,
    easing: "easeOut",
    delay: 0,
    loop: !1,
    loopInterval: 2e3
  }, ...a }, x = M((re) => l > 0 ? re.toFixed(l) : Math.floor(re).toString(), [l]), N = M(() => {
    m.current && (cancelAnimationFrame(m.current), m.current = null);
  }, []), T = M(() => {
    v.current && (clearTimeout(v.current), v.current = null);
  }, []), _ = M(() => {
    L.current && (clearTimeout(L.current), L.current = null);
  }, []), V = M(() => {
    k.current && (clearTimeout(k.current), k.current = null);
  }, []), H = M((re, R, q, J) => {
    const Q = q / 1e3 * 60;
    let X = 0;
    const $ = V3[J], Z = () => {
      if (!C.current) return;
      X++;
      const te = X / Q, pe = $(te), ue = re + (R - re) * pe;
      p(x(ue)), X < Q ? m.current = requestAnimationFrame(Z) : (p(x(R)), m.current = null);
    };
    m.current = requestAnimationFrame(Z);
  }, [x]);
  de(() => {
    if (i === "none") {
      p(x(e));
      return;
    }
    return v.current = setTimeout(() => {
      if (C.current)
        switch (i) {
          case "increase":
            H(0, e, b.duration, b.easing);
            break;
          case "decrease":
            H(e * 1.5, e, b.duration, b.easing);
            break;
          case "bounce":
            p(x(e)), f(!0);
            break;
          case "fade":
          case "slide":
          case "scale":
          case "flip":
            p(x(e)), f(!0);
            break;
          case "random":
            p(x(e)), f(!0);
            break;
          default:
            p(x(e));
        }
    }, b.delay), () => {
      T(), N();
    };
  }, [i, e, b.delay, b.duration, b.easing]), de(() => {
    if (!b.loop || i === "none") return;
    const re = () => {
      L.current = setTimeout(() => {
        C.current && (f(!1), k.current = setTimeout(() => {
          C.current && f(!0);
        }, 100), re());
      }, b.loopInterval);
    };
    return h && re(), () => {
      _(), V();
    };
  }, [b.loop, b.loopInterval, h, i]), de(() => (C.current = !0, () => {
    C.current = !1, N(), T(), _(), V();
  }), []), de(() => (y.current !== e && i !== "none" && (f(!1), k.current = setTimeout(() => {
    C.current && f(!0);
  }, 50)), y.current = e, () => {
    V();
  }), [e, i]);
  const S = j(() => x(e).split("").map((R) => R === "." ? "." : R === "-" ? "-" : parseInt(R, 10)), [e, x]), A = j(() => ({
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
  }), []), O = M(() => i === "bounce" ? A.bounce : i === "fade" ? A.fade : i === "slide" ? A.slide : i === "scale" ? A.scale : i === "flip" ? A.flip : A.fade, [i, A]), U = j(() => [
    Kt,
    h && `${Kt}--animating`,
    u
  ].filter(Boolean).join(" "), [h, u]);
  return /* @__PURE__ */ g("div", { className: U, style: c, children: [
    t && /* @__PURE__ */ s("div", { className: `${Kt}__prefix`, children: t }),
    /* @__PURE__ */ g("div", { className: `${Kt}__value`, children: [
      /* @__PURE__ */ s(Q2, { mode: "wait", children: i === "random" ? /* @__PURE__ */ s("div", { className: `${Kt}__random-wrapper`, children: S.map((re, R) => /* @__PURE__ */ s(
        "div",
        {
          className: `${Kt}__random-digit`,
          style: { height: "45px" },
          children: /* @__PURE__ */ s(
            dt.div,
            {
              animate: { y: h ? -Number(re) * 45 : 0 },
              transition: {
                duration: 1.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              },
              className: `${Kt}__random-list`,
              children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((q) => /* @__PURE__ */ s("div", { children: q }, q))
            }
          )
        },
        `digit-${R}-${re}`
      )) }, "random") : i !== "none" && (i === "increase" || i === "decrease") ? /* @__PURE__ */ s(
        dt.div,
        {
          layout: !0,
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.3, ease: "easeOut" },
          children: d
        },
        "number-animation"
      ) : i !== "none" ? /* @__PURE__ */ s(
        dt.div,
        {
          initial: O().initial,
          animate: h ? O().animate : O().initial,
          exit: O().initial,
          children: d
        },
        `${i}-${e}`
      ) : /* @__PURE__ */ s(
        dt.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.3 },
          children: d
        },
        "static"
      ) }),
      r && /* @__PURE__ */ s(
        dt.div,
        {
          className: `${Kt}__unit`,
          initial: { opacity: 0, x: 10 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.3, delay: 0.1 },
          children: r
        }
      )
    ] }),
    o && /* @__PURE__ */ g(
      dt.div,
      {
        className: `${Kt}__trend-icon`,
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.3, delay: 0.2 },
        children: [
          o === "up" && /* @__PURE__ */ s(
            Le,
            {
              name: "increase",
              strokeWidth: 0,
              color: "var(--color-success)"
            }
          ),
          o === "down" && /* @__PURE__ */ s(
            Le,
            {
              name: "increase",
              style: { transform: "rotate(180deg)" },
              strokeWidth: 0,
              color: "var(--color-error)"
            }
          ),
          o === "default" && /* @__PURE__ */ s(
            Le,
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
      dt.div,
      {
        className: `${Kt}__suffix`,
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.3, delay: 0.1 },
        children: n
      }
    )
  ] });
}, Sm = ({}) => /* @__PURE__ */ s("div", { children: "Swiper" }), dn = "land-steps", Hm = ({
  items: e = [],
  current: t,
  finished: n = [],
  onClick: r,
  useDivider: o = !0,
  dividerWidth: i = "32px",
  direction: a = "horizontal",
  style: l,
  className: c
}) => {
  const u = j(() => t !== void 0 ? t : e.length > 0 ? e[0].key : void 0, [t, e]), d = M(
    (h) => h.finished !== void 0 ? h.finished : n.includes(h.key),
    [n]
  ), p = j(
    () => [
      dn,
      a === "vertical" && `${dn}--vertical`,
      c
    ].filter(Boolean).join(" "),
    [a, c]
  );
  return /* @__PURE__ */ s("div", { className: p, style: l, role: "list", "aria-label": "步骤导航", children: e.map((h, f) => {
    const m = u === h.key, v = d(h), L = [
      `${dn}__item`,
      m && `${dn}__item--active`,
      v && `${dn}__item--finished`
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ g(vr, { children: [
      o && f !== 0 && /* @__PURE__ */ s(
        qt,
        {
          length: i,
          style: a === "horizontal" ? { marginTop: "12px" } : { marginLeft: "8px" },
          direction: a === "vertical" ? "vertical" : "horizontal"
        }
      ),
      /* @__PURE__ */ g(
        "div",
        {
          className: L,
          onClick: () => r == null ? void 0 : r(h),
          tabIndex: 0,
          role: "button",
          "aria-label": `步骤 ${f + 1}: ${h.title}`,
          "aria-current": m ? "step" : void 0,
          children: [
            /* @__PURE__ */ s("div", { className: `${dn}__num`, children: v ? /* @__PURE__ */ s(Le, { name: "check", size: 10 }) : f + 1 }),
            /* @__PURE__ */ g("div", { className: `${dn}__title`, children: [
              h.title,
              h.desc && /* @__PURE__ */ s("div", { className: `${dn}__desc`, children: h.desc })
            ] })
          ]
        }
      )
    ] }, h.key);
  }) });
}, In = {
  defaultChecked: !1,
  size: "default",
  labelPosition: "right",
  loading: !1,
  disabled: !1,
  readOnly: !1
}, T3 = (e) => {
  const {
    // 基础属性
    checked: t,
    defaultChecked: n = In.defaultChecked,
    name: r,
    value: o,
    // 内容属性
    label: i,
    checkedLabel: a,
    uncheckedContent: l,
    checkedContent: c,
    icon: u,
    checkedIcon: d,
    // 提示属性
    tip: p,
    iconTip: h,
    tipProps: f,
    iconTipProps: m,
    // 外观属性
    size: v = In.size,
    labelPosition: L = In.labelPosition,
    loading: k = In.loading,
    // 状态属性
    disabled: y = In.disabled,
    readOnly: C = In.readOnly,
    // 样式属性
    className: w,
    style: b,
    trackClassName: x,
    trackStyle: N,
    thumbClassName: T,
    thumbStyle: _,
    // 事件属性
    onChange: V,
    onClick: H,
    onFocus: S,
    onBlur: A
  } = e, O = t !== void 0, [U, re] = F(n), R = O ? t : U, q = !y && !C && !k, J = j(() => {
    switch (v) {
      case "small":
        return 12;
      case "large":
        return 20;
      default:
        return 16;
    }
  }, [v]), z = !!(l || c), Q = j(() => {
    const D = ["land-switch"];
    return v && v !== "default" && D.push(`land-switch--${v}`), L === "left" && D.push("land-switch--label-left"), R && D.push("land-switch--checked"), y && D.push("land-switch--disabled"), C && D.push("land-switch--readonly"), k && D.push("land-switch--loading"), z && D.push("land-switch--has-content"), w && D.push(w), D.join(" ");
  }, [v, L, R, y, C, k, z, w]), X = j(() => {
    const D = ["land-switch__track"];
    return x && D.push(x), D.join(" ");
  }, [x]), $ = j(() => {
    const D = ["land-switch__thumb"];
    return T && D.push(T), D.join(" ");
  }, [T]), Z = M(
    (D) => {
      if (D.stopPropagation(), H == null || H(D), !q) return;
      const he = !R;
      O || re(he), V == null || V(he, D);
    },
    [q, R, O, H, V]
  ), te = M(
    (D) => {
      if (q && (D.key === "Enter" || D.key === " ")) {
        D.preventDefault();
        const he = !R;
        O || re(he), V == null || V(he, D);
      }
    },
    [q, R, O, V]
  ), pe = () => {
    const D = R && a ? a : i;
    return D ? /* @__PURE__ */ s("span", { className: "land-switch__label", children: D }) : null;
  }, ue = () => !l && !c ? null : /* @__PURE__ */ s("span", { className: "land-switch__track-content", children: R ? c : l }), le = () => k ? /* @__PURE__ */ s(Gn, { className: "land-switch__loading-icon", strokeSize: 2, size: v === "small" ? 10 : v === "large" ? 14 : 12 }) : (R ? d : u) || null, be = () => h ? /* @__PURE__ */ s("div", { className: "land-switch__icon-tip", children: /* @__PURE__ */ s(at, { content: h, theme: "dark", ...m, children: /* @__PURE__ */ s(Le, { name: "info-stroke", size: v === "small" ? 14 : 16 }) }) }) : null, ie = /* @__PURE__ */ g(
    "div",
    {
      className: Q,
      style: b,
      onClick: Z,
      onKeyDown: te,
      onFocus: S,
      onBlur: A,
      role: "switch",
      "aria-checked": R,
      "aria-disabled": y,
      "aria-readonly": C,
      tabIndex: y ? -1 : 0,
      "data-name": r,
      "data-value": o,
      children: [
        L === "left" && pe(),
        /* @__PURE__ */ g("div", { className: X, style: N, children: [
          z && !R && /* @__PURE__ */ s("div", { className: $, style: _, children: le() }),
          ue(),
          z ? R && /* @__PURE__ */ s("div", { className: $, style: _, children: le() }) : /* @__PURE__ */ s(
            dt.div,
            {
              className: $,
              style: _,
              animate: { x: R ? J : 0 },
              transition: { duration: 0.2, type: "spring", stiffness: 500, damping: 30 },
              children: le()
            }
          )
        ] }),
        L === "right" && pe(),
        be()
      ]
    }
  );
  return p ? /* @__PURE__ */ s(at, { content: p, theme: "dark", ...f, children: ie }) : ie;
}, un = "land-tabs", Dm = ({
  width: e = "100%",
  checked: t,
  data: n = [],
  useDivider: r = !1,
  onChange: o,
  activeClassName: i = "",
  className: a = "",
  switchDisabled: l = !1,
  style: c
}) => {
  const u = j(() => [un, a].filter(Boolean).join(" "), [a]), d = M((f, m) => {
    m.stopPropagation(), !(f.disabled || l) && (o == null || o(f.key, f));
  }, [l, o]), p = M((f, m) => {
    var L;
    const v = (L = n[f - 1]) == null ? void 0 : L.key;
    return t === m || t === v;
  }, [t, n]), h = M((f) => {
    const m = t === f.key, v = f.disabled || l;
    return [
      `${un}__item`,
      m && `${un}__item--selected`,
      m && i,
      !m && v && `${un}__item--disabled`
    ].filter(Boolean).join(" ");
  }, [t, l, i]);
  return /* @__PURE__ */ s("div", { className: u, style: { width: e, ...c }, children: n.map((f, m) => /* @__PURE__ */ g(vr, { children: [
    r && m !== 0 && /* @__PURE__ */ s(
      qt,
      {
        direction: "vertical",
        spacing: 0,
        length: "14px",
        className: `${un}__divider ${p(m, f.key) ? `${un}__divider--hidden` : ""}`
      }
    ),
    /* @__PURE__ */ g(
      "div",
      {
        className: h(f),
        onClick: (v) => d(f, v),
        children: [
          /* @__PURE__ */ s("span", { className: `${un}__item-label`, children: f.label }),
          f.showIcon && /* @__PURE__ */ g("div", { className: `${un}__item-icon hover-pop`, children: [
            /* @__PURE__ */ s(Le, { name: "info-stroke", size: 16 }),
            /* @__PURE__ */ s(at, { content: f.iconTip, theme: "dark" })
          ] })
        ]
      }
    )
  ] }, f.key)) });
}, Ms = (e) => typeof e == "string" && ["default", "primary", "success", "warning", "error", "info"].includes(e), S3 = (e) => {
  const { canDelete: t, onDelete: n, theme: r, background: o, ...i } = e;
  return {
    ...i,
    closable: t ?? i.closable,
    onClose: n ?? i.onClose,
    backgroundColor: o ?? i.backgroundColor,
    // theme 转换: gray -> default, white -> default with light variant
    variant: r === "white" ? "filled" : i.variant,
    color: r ? "default" : i.color
  };
}, Mr = (e) => {
  const t = S3(e), {
    // 基础属性
    children: n,
    icon: r,
    suffixIcon: o,
    visible: i,
    defaultVisible: a = !0,
    // 样式属性
    size: l = "medium",
    variant: c = "light",
    color: u = "default",
    shape: d = "rounded",
    bold: p = !1,
    backgroundColor: h,
    textColor: f,
    borderColor: m,
    border: v,
    style: L,
    className: k = "",
    // 交互属性
    closable: y = !1,
    clickable: C = !1,
    checkable: w = !1,
    checked: b,
    defaultChecked: x = !1,
    disabled: N = !1,
    closeIcon: T,
    // 事件属性
    onClick: _,
    onClose: V,
    onVisibleChange: H,
    onCheck: S
  } = t, [A, O] = F(a), [U, re] = F(x), R = i ?? A, q = b ?? U, J = M(
    ($) => {
      if (!N) {
        if (w) {
          const Z = !q;
          b === void 0 && re(Z), S == null || S(Z);
        }
        _ == null || _($);
      }
    },
    [N, w, q, b, S, _]
  ), z = M(
    ($) => {
      $.stopPropagation(), !N && (i === void 0 && O(!1), H == null || H(!1), V == null || V($));
    },
    [N, i, H, V]
  ), Q = j(() => {
    const $ = { ...L };
    return u && !Ms(u) && ($["--tag-custom-color"] = u), h && ($["--tag-bg-color"] = h), f && ($["--tag-text-color"] = f), m && ($["--tag-border-color"] = m), v && ($.border = v), $;
  }, [L, u, h, f, m, v]), X = j(() => [
    "land-tag",
    `land-tag--${l}`,
    `land-tag--${c}`,
    `land-tag--${d}`,
    Ms(u) && `land-tag--${u}`,
    !Ms(u) && u && "land-tag--custom-color",
    p && "land-tag--bold",
    C && "land-tag--clickable",
    w && "land-tag--checkable",
    q && "land-tag--checked",
    N && "land-tag--disabled",
    y && "land-tag--closable",
    k
  ].filter(Boolean).join(" "), [l, c, d, u, p, C, w, q, N, y, k]);
  return R ? /* @__PURE__ */ g(
    "span",
    {
      className: X,
      style: Q,
      onClick: J,
      role: w ? "checkbox" : C ? "button" : void 0,
      "aria-checked": w ? q : void 0,
      "aria-disabled": N,
      children: [
        r && /* @__PURE__ */ s("span", { className: "land-tag__icon", children: r }),
        n && /* @__PURE__ */ s("span", { className: "land-tag__content", children: n }),
        o && /* @__PURE__ */ s("span", { className: "land-tag__suffix-icon", children: o }),
        y && /* @__PURE__ */ s(
          "span",
          {
            className: "land-tag__close",
            onClick: z,
            role: "button",
            "aria-label": "关闭",
            children: T || /* @__PURE__ */ s(Le, { name: "close", size: 12 })
          }
        )
      ]
    }
  ) : null;
}, H3 = ({
  checked: e,
  defaultChecked: t = !1,
  onChange: n,
  onClick: r,
  ...o
}) => {
  const [i, a] = F(t), l = e ?? i, c = M(
    (u) => {
      const d = !l;
      e === void 0 && a(d), n == null || n(d), r == null || r(u);
    },
    [l, e, n, r]
  );
  return /* @__PURE__ */ s(
    Mr,
    {
      ...o,
      checkable: !0,
      checked: l,
      onClick: c
    }
  );
}, D3 = ({
  children: e,
  gap: t = 8,
  wrap: n = !0,
  align: r = "flex-start",
  maxCount: o,
  maxCountRender: i,
  style: a,
  className: l = ""
}) => {
  const c = pn.Children.toArray(e), u = o ? c.slice(0, o) : c, d = o ? Math.max(0, c.length - o) : 0, p = {
    display: "flex",
    flexWrap: n ? "wrap" : "nowrap",
    alignItems: r,
    gap: typeof t == "number" ? `${t}px` : t,
    ...a
  };
  return /* @__PURE__ */ g("div", { className: `land-tag-group ${l}`, style: p, children: [
    u,
    d > 0 && (i ? i(d) : /* @__PURE__ */ g(Mr, { color: "default", variant: "light", children: [
      "+",
      d
    ] }))
  ] });
};
Mr.CheckableTag = H3;
Mr.Group = D3;
const bt = "land-tag-input", bs = (e) => typeof e == "string" ? e : e.label, I3 = (e, t) => typeof e == "string" ? `${e}-${t}` : e.key ?? `${e.label}-${t}`, P3 = (e) => typeof e == "string" ? !0 : e.closable !== !1, Im = ({
  // 核心属性
  value: e,
  tagData: t,
  defaultValue: n,
  placeholder: r = "按下回车以输入标签",
  // 限制属性
  maxCount: o,
  maxLength: i = 10,
  maxTagLength: a,
  allowDuplicate: l = !1,
  // 外观属性
  variant: c = "fill",
  size: u = "default",
  disabled: d = !1,
  readOnly: p = !1,
  showClear: h = !0,
  // 样式属性
  className: f = "",
  style: m,
  width: v = "100%",
  tagClassName: L = "",
  tagStyle: k,
  // 自定义渲染
  renderTag: y,
  prefix: C,
  suffix: w,
  // 事件属性
  onChange: b,
  onAdd: x,
  onRemove: N,
  onClear: T,
  onEnter: _,
  onInputChange: V,
  onFocus: H,
  onBlur: S,
  // 废弃属性兼容
  onDelete: A
}) => {
  const [O, U] = F(""), [re, R] = F(
    e ?? t ?? n ?? []
  ), [q, J] = F(!1), z = ae(null), Q = ae(null), X = e !== void 0, $ = X ? e : re, Z = o ?? i, te = $.length >= Z, pe = h && $.length > 0 && !d && !p;
  de(() => {
    X && R(e);
  }, [X, e]);
  const ue = M(
    (K, P) => {
      X || R(K), b == null || b(K, P);
    },
    [X, b]
  ), le = M(
    (K) => {
      const P = K.trim();
      if (!P || te || a && P.length > a || !l && $.some((ve) => bs(ve) === P))
        return;
      const oe = [...$, P];
      ue(oe, "add"), x == null || x(P), U("");
    },
    [$, te, a, l, ue, x]
  ), be = M(
    (K) => {
      if (d || p) return;
      const P = $[K], oe = $.filter((se, ve) => ve !== K);
      ue(oe, "remove"), N == null || N(P, K), A == null || A(bs(P));
    },
    [$, d, p, ue, N, A]
  ), ie = M(() => {
    var K;
    d || p || (ue([], "clear"), T == null || T(), (K = Q.current) == null || K.focus());
  }, [d, p, ue, T]), D = M(
    (K) => {
      if (K.key === "Enter") {
        K.preventDefault(), le(O), _ == null || _(O, K);
        return;
      }
      K.key === "Backspace" && !O && $.length > 0 && be($.length - 1);
    },
    [O, $.length, le, be, _]
  ), he = M(
    (K) => {
      const P = K.target.value;
      U(P), V == null || V(P, K);
    },
    [V]
  ), ne = M(
    (K) => {
      J(!0), H == null || H(K);
    },
    [H]
  ), ge = M(
    (K) => {
      J(!1), O.trim() && le(O), S == null || S(K);
    },
    [O, le, S]
  ), I = M(() => {
    var K;
    !d && !p && ((K = Q.current) == null || K.focus());
  }, [d, p]), E = j(() => [
    bt,
    `${bt}--${c}`,
    `${bt}--${u}`,
    q && `${bt}--focused`,
    d && `${bt}--disabled`,
    p && `${bt}--readonly`,
    f
  ].filter(Boolean).join(" "), [c, u, q, d, p, f]), W = j(() => ({
    width: typeof v == "number" ? `${v}px` : v,
    ...m
  }), [v, m]), fe = M(
    (K, P) => {
      const oe = bs(K), se = I3(K, P), ve = P3(K) && !d && !p, _e = typeof K == "object" ? { ...k, ...K.style } : k, Se = typeof K == "object" ? `${bt}__tag ${L} ${K.className ?? ""}` : `${bt}__tag ${L}`;
      return y ? /* @__PURE__ */ s(pn.Fragment, { children: y(K, P, () => be(P)) }, se) : /* @__PURE__ */ s(
        Mr,
        {
          className: Se,
          style: _e,
          canDelete: ve,
          onDelete: () => be(P),
          children: oe
        },
        se
      );
    },
    [k, L, d, p, y, be]
  );
  return /* @__PURE__ */ g(
    "div",
    {
      ref: z,
      className: E,
      style: W,
      onClick: I,
      children: [
        C && /* @__PURE__ */ s("div", { className: `${bt}__prefix`, children: C }),
        /* @__PURE__ */ g("div", { className: `${bt}__content`, children: [
          $.map(fe),
          !p && /* @__PURE__ */ s(
            "input",
            {
              ref: Q,
              type: "text",
              className: `${bt}__input`,
              value: O,
              placeholder: $.length === 0 ? r : "",
              disabled: d,
              readOnly: p,
              onChange: he,
              onKeyDown: D,
              onFocus: ne,
              onBlur: ge
            }
          )
        ] }),
        pe && /* @__PURE__ */ s(
          "div",
          {
            className: `${bt}__clear`,
            onClick: (K) => {
              K.stopPropagation(), ie();
            },
            children: /* @__PURE__ */ s(Le, { name: "error-fill" })
          }
        ),
        w && /* @__PURE__ */ s("div", { className: `${bt}__suffix`, children: w })
      ]
    }
  );
};
function A3(e, t, n = "key") {
  return typeof n == "function" ? n(e, t) : e[n] ?? t;
}
function xs(e, t) {
  if (!t) return;
  const n = t.split(".");
  let r = e;
  for (const o of n) {
    if (r == null) return;
    r = r[o];
  }
  return r;
}
function B3(e) {
  const { titleData: t, data: n, headFixed: r, fixedColumns: o, ...i } = e, a = t == null ? void 0 : t.map((l) => ({
    key: l.value,
    title: l.title,
    dataIndex: l.value
  }));
  return {
    ...i,
    columns: a || [],
    dataSource: n,
    stickyHeader: r
  };
}
function R3(e) {
  return "titleData" in e || "data" in e || "headFixed" in e;
}
function Pm(e) {
  const t = R3(e) ? { ...B3(e), ...e } : e, {
    // 基础属性
    columns: n = [],
    dataSource: r = [],
    rowKey: o = "key",
    title: i,
    footer: a,
    summary: l,
    empty: c = "暂无数据",
    showHeader: u = !0,
    // 样式属性
    size: d = "medium",
    bordered: p = !0,
    striped: h = !1,
    crossHighlight: f = !1,
    crossHighlightColor: m,
    rowHover: v = !0,
    // 固定属性
    stickyHeader: L = !1,
    stickyHeaderOffset: k = 0,
    scroll: y,
    // 功能属性
    // rowSelection, // TODO: 未来实现
    // pagination,   // TODO: 未来实现
    // expandable,   // TODO: 未来实现
    loading: C = !1,
    loadingText: w,
    // 事件属性
    onRow: b,
    // onHeaderRow, // TODO: 未来实现
    onCell: x,
    onHeaderCell: N,
    onSortChange: T,
    onChange: _,
    // 通用属性
    className: V = "",
    style: H,
    // 兼容旧版
    fixedColumns: S = 0
  } = t, [A, O] = F(null), [U, re] = F({
    row: {},
    col: {}
  }), [R, q] = F({ field: void 0, order: null }), J = ae(null), z = ae(null), Q = ae(null), X = j(() => n.filter((P) => !P.hidden), [n]), $ = j(() => {
    const P = [];
    return X.forEach((oe, se) => {
      S > 0 && se < S ? P.push({ ...oe, fixed: "left" }) : (oe.fixed === "left" || oe.fixed === !0) && P.push(oe);
    }), P;
  }, [X, S]), Z = j(() => {
    if (!R.field || !R.order)
      return r;
    const P = n.find((ve) => ve.dataIndex === R.field);
    if (!(P != null && P.sorter))
      return r;
    const oe = typeof P.sorter == "object" ? P.sorter.compare : void 0;
    return [...r].sort((ve, _e) => {
      const Se = xs(ve, R.field), we = xs(_e, R.field);
      if (oe) {
        const Ue = oe(ve, _e);
        return R.order === "descend" ? -Ue : Ue;
      }
      if (Se === we) return 0;
      if (Se == null) return 1;
      if (we == null) return -1;
      const Ie = Se > we ? 1 : -1;
      return R.order === "descend" ? -Ie : Ie;
    });
  }, [r, R, n]), te = M(
    (P, oe) => {
      f && O({ row: P, col: oe });
    },
    [f]
  ), pe = M(() => {
    f && O(null);
  }, [f]), ue = M(() => {
    if (!f || !A || !J.current) return;
    const P = J.current, oe = P.querySelector("thead tr"), se = P.querySelectorAll("tbody tr");
    if (!oe || se.length === 0) return;
    const ve = oe.getBoundingClientRect().height, _e = se[0].getBoundingClientRect().height;
    let Se = 0, we = 0;
    for (let Ie = 0; Ie < oe.children.length; Ie++) {
      const Ve = oe.children[Ie].getBoundingClientRect().width;
      if (Ie === A.col) {
        we = Ve;
        break;
      }
      Se += Ve;
    }
    re({
      row: {
        top: `${ve + A.row * _e}px`,
        height: `${_e}px`
      },
      col: {
        left: `${Se}px`,
        width: `${we}px`
      }
    });
  }, [f, A]), le = M(() => {
    if ($.length === 0 || !J.current) return;
    const oe = J.current.querySelector("thead tr");
    if (!oe) return;
    let se = 0;
    const ve = z.current;
    if (ve)
      for (let _e = 0; _e < Math.min($.length, oe.children.length); _e++) {
        const we = oe.children[_e].getBoundingClientRect().width;
        ve.style.setProperty(`--fixed-col-${_e}-left`, `${se}px`), se += we;
      }
  }, [$.length]), be = M(
    (P) => {
      if (!P.sorter) return;
      const oe = R.field !== P.dataIndex ? "ascend" : R.order === "ascend" ? "descend" : R.order === "descend" ? null : "ascend", se = {
        field: oe ? P.dataIndex : void 0,
        order: oe
      };
      q(se), T == null || T(se), _ == null || _({
        data: Z,
        sorter: se
      });
    },
    [R, T, _, Z]
  );
  de(() => {
    ue();
  }, [ue]), de(() => {
    le();
  }, [le]), de(() => {
    $.length > 0 && requestAnimationFrame(le);
  }, [$.length, le]), de(() => {
    if ((f || $.length > 0) && J.current)
      return Q.current = new ResizeObserver(() => {
        A && ue(), $.length > 0 && le();
      }), Q.current.observe(J.current), () => {
        var P;
        (P = Q.current) == null || P.disconnect();
      };
  }, [f, $.length, A, ue, le]);
  const ie = (P, oe) => {
    const se = P.fixed === "left" || P.fixed === !0 || S > 0 && oe < S, ve = !!P.sorter, _e = R.field === P.dataIndex, Se = (N == null ? void 0 : N(P, oe)) || {}, we = [
      "land-table__header-cell",
      se && "land-table__cell--fixed",
      ve && "land-table__header-cell--sortable",
      _e && `land-table__header-cell--sorted-${R.order}`,
      P.headerClassName
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s(
      "th",
      {
        className: we,
        style: {
          width: P.width,
          minWidth: P.minWidth,
          maxWidth: P.maxWidth,
          textAlign: P.align,
          ...P.headerStyle
        },
        onClick: ve ? () => be(P) : void 0,
        ...Se,
        children: /* @__PURE__ */ g("div", { className: "land-table__header-content", children: [
          P.renderHeader ? P.renderHeader(P) : P.title,
          ve && /* @__PURE__ */ g("span", { className: "land-table__sorter", children: [
            /* @__PURE__ */ s(
              "span",
              {
                className: `land-table__sorter-icon land-table__sorter-icon--ascend ${_e && R.order === "ascend" ? "land-table__sorter-icon--active" : ""}`,
                children: "▲"
              }
            ),
            /* @__PURE__ */ s(
              "span",
              {
                className: `land-table__sorter-icon land-table__sorter-icon--descend ${_e && R.order === "descend" ? "land-table__sorter-icon--active" : ""}`,
                children: "▼"
              }
            )
          ] })
        ] })
      },
      P.key || P.dataIndex || oe
    );
  }, D = (P, oe, se, ve) => {
    const _e = se.fixed === "left" || se.fixed === !0 || S > 0 && ve < S, Se = xs(P, se.dataIndex), we = (x == null ? void 0 : x(P, oe, se, ve)) || {}, Ie = [
      "land-table__cell",
      _e && "land-table__cell--fixed",
      se.ellipsis && "land-table__cell--ellipsis",
      se.className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s(
      "td",
      {
        className: Ie,
        style: {
          textAlign: se.align,
          ...se.cellStyle
        },
        "data-row": oe,
        "data-col": ve,
        onMouseEnter: () => te(oe, ve),
        onMouseLeave: pe,
        ...we,
        children: se.render ? se.render(Se, P, oe) : Se
      },
      se.key || se.dataIndex || ve
    );
  }, he = (P, oe) => {
    const se = A3(P, oe, o), ve = (b == null ? void 0 : b(P, oe)) || {}, _e = [
      "land-table__row",
      h && oe % 2 === 1 && "land-table__row--striped"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s("tr", { className: _e, ...ve, children: X.map((Se, we) => D(P, oe, Se, we)) }, se);
  }, ne = [
    "land-table-wrapper",
    `land-table-wrapper--${d}`,
    p && "land-table-wrapper--bordered",
    f && "land-table-wrapper--cross-highlight",
    L && "land-table-wrapper--sticky-header",
    $.length > 0 && "land-table-wrapper--fixed-columns",
    C && "land-table-wrapper--loading",
    V
  ].filter(Boolean).join(" "), ge = [
    "land-table",
    h && "land-table--striped",
    v && "land-table--row-hover",
    L && "land-table--sticky-header",
    $.length > 0 && "land-table--fixed-columns"
  ].filter(Boolean).join(" "), I = () => i ? /* @__PURE__ */ s("div", { className: "land-table__title", children: typeof i == "function" ? i() : i }) : null, E = () => a ? /* @__PURE__ */ s("div", { className: "land-table__footer", children: typeof a == "function" ? a(Z) : a }) : null, W = () => /* @__PURE__ */ s("tr", { className: "land-table__empty-row", children: /* @__PURE__ */ s("td", { colSpan: X.length, className: "land-table__empty-cell", children: c }) }), fe = () => C ? /* @__PURE__ */ g("div", { className: "land-table__loading", children: [
    /* @__PURE__ */ s("div", { className: "land-table__loading-spinner" }),
    w && /* @__PURE__ */ s("div", { className: "land-table__loading-text", children: w })
  ] }) : null, K = {};
  return y != null && y.x && (K.overflowX = "auto", typeof y.x == "number" && (K.minWidth = y.x)), y != null && y.y && (K.overflowY = "auto", K.maxHeight = y.y), /* @__PURE__ */ g(
    "div",
    {
      ref: z,
      className: ne,
      style: {
        ...H,
        ...K,
        ...m ? { "--table-cross-highlight-color": m } : {},
        ...k ? { "--table-sticky-header-offset": `${k}px` } : {}
      },
      children: [
        I(),
        /* @__PURE__ */ g("table", { ref: J, className: ge, children: [
          u && /* @__PURE__ */ s("thead", { className: "land-table__header", children: /* @__PURE__ */ s("tr", { className: "land-table__header-row", children: X.map((P, oe) => ie(P, oe)) }) }),
          /* @__PURE__ */ s("tbody", { className: "land-table__body", children: Z.length > 0 ? Z.map(he) : W() }),
          l && /* @__PURE__ */ s("tfoot", { className: "land-table__summary", children: l(Z) })
        ] }),
        f && A && /* @__PURE__ */ g(tt, { children: [
          /* @__PURE__ */ s("div", { className: "land-table__row-overlay", style: U.row }),
          /* @__PURE__ */ s("div", { className: "land-table__col-overlay", style: U.col })
        ] }),
        fe(),
        E()
      ]
    }
  );
}
const _s = (e) => typeof e == "string" && ["default", "primary", "success", "warning", "error", "info"].includes(e), E3 = (e) => {
  const { data: t, direction: n, ...r } = e;
  return {
    ...r,
    items: t ?? r.items,
    // 兼容旧版 direction: 'row' -> 'horizontal', 'column' -> 'vertical'
    direction: n === "row" ? "horizontal" : n === "column" ? "vertical" : n
  };
}, kc = ({
  children: e,
  title: t,
  subTitle: n,
  desc: r,
  extra: o,
  icon: i,
  color: a = "default",
  active: l = !1,
  disabled: c = !1,
  dotStyle: u,
  contentStyle: d,
  className: p = "",
  onClick: h,
  isLast: f = !1,
  index: m = 0,
  mode: v = "right",
  direction: L = "vertical",
  lineType: k = "solid",
  showLine: y = !0,
  globalIcon: C,
  onItemClick: w
}) => {
  const b = j(() => v === "alternate" ? m % 2 === 0 ? "right" : "left" : v, [v, m]), x = M(
    (A) => {
      c || (h == null || h(A), w == null || w(A));
    },
    [c, h, w]
  ), N = [
    "land-timeline__item",
    `land-timeline__item--${b}`,
    L === "horizontal" && "land-timeline__item--horizontal",
    l && "land-timeline__item--active",
    c && "land-timeline__item--disabled",
    (h || w) && !c && "land-timeline__item--clickable",
    p
  ].filter(Boolean).join(" "), T = [
    "land-timeline__dot",
    _s(a) && `land-timeline__dot--${a}`,
    !_s(a) && a && "land-timeline__dot--custom",
    i && "land-timeline__dot--icon"
  ].filter(Boolean).join(" "), _ = {
    ...u,
    ...!_s(a) && a ? { "--timeline-dot-custom-color": a } : {}
  }, V = () => {
    const A = i || C;
    return A ? /* @__PURE__ */ s("span", { className: T, style: _, children: A }) : /* @__PURE__ */ s("span", { className: T, style: _ });
  }, H = () => t || n || r || o || e ? /* @__PURE__ */ g("div", { className: "land-timeline__content", style: d, children: [
    t && /* @__PURE__ */ s("div", { className: "land-timeline__title", children: t }),
    n && /* @__PURE__ */ s("div", { className: "land-timeline__subtitle", children: n }),
    r && /* @__PURE__ */ s("div", { className: "land-timeline__desc", children: r }),
    o && /* @__PURE__ */ s("div", { className: "land-timeline__extra", children: o }),
    e
  ] }) : null, S = () => {
    if (f || !y) return null;
    const A = [
      "land-timeline__line",
      `land-timeline__line--${k}`
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s("span", { className: A });
  };
  return /* @__PURE__ */ g("div", { className: N, onClick: x, children: [
    /* @__PURE__ */ g("div", { className: "land-timeline__indicator", children: [
      V(),
      S()
    ] }),
    H()
  ] });
}, O3 = (e) => {
  const t = E3(e), {
    // 基础属性
    children: n,
    items: r = [],
    icon: o,
    pending: i,
    pendingIcon: a,
    reverse: l = !1,
    // 布局属性
    direction: c = "vertical",
    mode: u = "right",
    gap: d,
    // 样式属性
    style: p,
    className: h = "",
    lineType: f = "solid",
    lineColor: m,
    lineWidth: v,
    dotSize: L,
    dotColor: k,
    showLine: y = !0,
    // 事件属性
    onItemClick: C
  } = t, w = j(() => {
    let _ = [...r];
    return i && _.push({
      title: typeof i == "boolean" ? void 0 : i,
      icon: a,
      className: "land-timeline__item--pending"
    }), l && (_ = _.reverse()), _;
  }, [r, i, a, l]), b = [
    "land-timeline",
    `land-timeline--${c}`,
    `land-timeline--${u}`,
    h
  ].filter(Boolean).join(" "), x = {
    ...p,
    ...d ? { "--timeline-gap": typeof d == "number" ? `${d}px` : d } : {},
    ...m ? { "--timeline-line-color": m } : {},
    ...v ? { "--timeline-line-width": `${v}px` } : {},
    ...L ? { "--timeline-dot-size": `${L}px` } : {},
    ...k ? { "--timeline-dot-color": k } : {}
  }, N = M(
    (_, V) => (H) => {
      C == null || C(_, V, H);
    },
    [C]
  );
  return /* @__PURE__ */ s("div", { className: b, style: x, children: n ? pn.Children.map(n, (_, V) => {
    if (!pn.isValidElement(_)) return _;
    const H = pn.Children.count(n);
    return pn.cloneElement(_, {
      index: V,
      isLast: V === H - 1,
      mode: u,
      direction: c,
      lineType: f,
      showLine: y,
      globalIcon: o
    });
  }) : w.map((_, V) => /* @__PURE__ */ s(
    kc,
    {
      ..._,
      index: V,
      isLast: V === w.length - 1,
      mode: u,
      direction: c,
      lineType: f,
      showLine: y,
      globalIcon: o,
      onItemClick: N(_, V)
    },
    _.key ?? V
  )) });
};
O3.Item = kc;
const Dr = "land-title", Am = ({
  title: e,
  type: t = "h1",
  prefix: n,
  sub: r,
  tip: o,
  style: i,
  className: a = "",
  onClick: l
}) => {
  const c = j(() => [Dr, a].filter(Boolean).join(" "), [a]), u = M(() => {
    l == null || l();
  }, [l]), d = j(() => /* @__PURE__ */ s(t, { children: e }), [t, e]), p = j(() => r ? typeof r == "string" ? /* @__PURE__ */ s("div", { className: `${Dr}__sub`, children: r }) : /* @__PURE__ */ s(tt, { children: r }) : null, [r]);
  return /* @__PURE__ */ g(
    "div",
    {
      className: c,
      style: i,
      onClick: u,
      children: [
        n && /* @__PURE__ */ s("span", { className: `${Dr}__prefix`, children: n }),
        d,
        o && /* @__PURE__ */ g("div", { className: `${Dr}__tip hover-pop`, children: [
          /* @__PURE__ */ s(Le, { name: "info-stroke", stroke: "var(--color-text-secondary)" }),
          /* @__PURE__ */ s(at, { content: o, theme: "dark", style: { maxWidth: "200px" } })
        ] }),
        p
      ]
    }
  );
}, Pt = {
  variant: "outline",
  status: "default",
  textAlign: "left",
  placeholder: "请输入",
  disabled: !1,
  readOnly: !1,
  showCount: !1,
  rows: 4,
  autoSize: !1,
  resize: "none",
  block: !1
}, it = "land-textarea", Bm = ({
  variant: e = Pt.variant,
  status: t = Pt.status,
  textAlign: n = Pt.textAlign,
  value: r,
  defaultValue: o,
  placeholder: i = Pt.placeholder,
  disabled: a = Pt.disabled,
  readOnly: l = Pt.readOnly,
  maxLength: c,
  showCount: u = Pt.showCount,
  countFormatter: d,
  rows: p = Pt.rows,
  minRows: h,
  maxRows: f,
  autoSize: m = Pt.autoSize,
  resize: v = Pt.resize,
  block: L = Pt.block,
  width: k,
  height: y,
  beforeContent: C,
  afterContent: w,
  onChange: b,
  onFocus: x,
  onBlur: N,
  onKeyDown: T,
  onEnter: _,
  onClear: V,
  className: H = "",
  style: S,
  htmlProps: A,
  ...O
}) => {
  const U = ae(null), [re, R] = F(o ?? ""), [q, J] = F(!1), z = ae(!1), Q = r !== void 0, X = Q ? r : re, $ = M(() => {
    if (!m || !U.current) return;
    const K = U.current;
    K.style.height = "auto";
    const P = window.getComputedStyle(K), oe = parseFloat(P.lineHeight) || 22, se = parseFloat(P.paddingTop) || 0, ve = parseFloat(P.paddingBottom) || 0, _e = parseFloat(P.borderTopWidth) || 0, Se = parseFloat(P.borderBottomWidth) || 0;
    let we = 0, Ie = 1 / 0;
    if (typeof m == "object") {
      const Oe = m.minRows ?? h, Re = m.maxRows ?? f;
      Oe && (we = Oe * oe + se + ve + _e + Se), Re && (Ie = Re * oe + se + ve + _e + Se);
    } else
      h && (we = h * oe + se + ve + _e + Se), f && (Ie = f * oe + se + ve + _e + Se);
    const Ue = K.scrollHeight, Ve = Math.min(Math.max(Ue, we), Ie);
    K.style.height = `${Ve}px`;
  }, [m, h, f]);
  de(() => {
    $();
  }, [X, $]);
  const Z = M((K) => {
    const P = K.target.value;
    Q || R(P), b == null || b(P, K);
  }, [Q, b]), te = M((K) => {
    J(!0), x == null || x(K);
  }, [x]), pe = M((K) => {
    J(!1), N == null || N(K);
  }, [N]), ue = M((K) => {
    T == null || T(K), K.key === "Enter" && !K.shiftKey && (_ == null || _(X, K));
  }, [T, _, X]), le = M(() => {
    z.current = !0;
  }, []), be = M((K) => {
    z.current = !1;
    const P = K.target.value;
    Q || R(P), b == null || b(P);
  }, [Q, b]), ie = M(() => {
    Q || R(""), b == null || b(""), V == null || V();
  }, [Q, b, V]), D = X.length, he = c !== void 0 && D > c, ne = j(() => u ? d ? d(D, c) : c !== void 0 ? `${D}/${c}` : `${D}` : null, [u, d, D, c]), ge = j(() => [
    it,
    `${it}--${e}`,
    `${it}--${t}`,
    `${it}--align-${n}`,
    a && `${it}--disabled`,
    l && `${it}--readonly`,
    L && `${it}--block`,
    q && `${it}--focused`,
    V && `${it}--clearable`,
    he && `${it}--over-limit`,
    H
  ].filter(Boolean).join(" "), [e, t, n, a, l, L, q, V, he, H]), I = !m && v !== "none", E = j(() => ({
    ...S,
    ...k !== void 0 ? { width: typeof k == "number" ? `${k}px` : k } : {},
    // 允许 resize 时不设置固定高度，避免限制拖动
    ...!I && y !== void 0 ? { height: typeof y == "number" ? `${y}px` : y } : {}
  }), [S, k, y, I]), W = j(() => ({
    resize: m ? "none" : v
  }), [m, v]), fe = {
    ref: U,
    value: X,
    placeholder: i,
    disabled: a,
    readOnly: l,
    maxLength: c,
    rows: m ? void 0 : p,
    style: W,
    onFocus: te,
    onBlur: pe,
    onChange: Z,
    onKeyDown: ue,
    onCompositionStart: le,
    onCompositionEnd: be,
    ...A,
    ...O
  };
  return /* @__PURE__ */ g("div", { className: ge, style: E, children: [
    C && /* @__PURE__ */ s("div", { className: `${it}__before`, children: C }),
    /* @__PURE__ */ g("div", { className: `${it}__body`, children: [
      /* @__PURE__ */ g("div", { className: `${it}__wrapper`, children: [
        /* @__PURE__ */ s("textarea", { ...fe }),
        V && /* @__PURE__ */ s(
          "div",
          {
            className: `${it}__clear ${X ? `${it}__clear--visible` : ""}`,
            onClick: ie,
            children: /* @__PURE__ */ s(Le, { name: "error-fill" })
          }
        )
      ] }),
      u && /* @__PURE__ */ s("div", { className: `${it}__count ${he ? `${it}__count--error` : ""}`, children: ne })
    ] }),
    w && /* @__PURE__ */ s("div", { className: `${it}__after`, children: w })
  ] });
}, mt = {
  variant: "dragger",
  disabled: !1,
  readOnly: !1,
  multiple: !1,
  directory: !1,
  method: "POST",
  withCredentials: !1,
  draggable: !0,
  dropHint: "释放文件即可上传",
  uploadingHint: "上传中...",
  showFileList: !0,
  listType: "text",
  showProgress: !0,
  showRemoveButton: !0,
  showPreviewButton: !0
};
function F3() {
  return `upload-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function ya(e) {
  return {
    uid: F3(),
    name: e.name,
    size: e.size,
    type: e.type,
    status: "uploading",
    percent: 0,
    originFile: e
  };
}
function Z3(e) {
  if (e === 0) return "0 B";
  const t = 1024, n = ["B", "KB", "MB", "GB", "TB"], r = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, r)).toFixed(2)) + " " + n[r];
}
function U3(e, t) {
  if (!t) return !0;
  const n = t.split(",").map((i) => i.trim().toLowerCase()), r = e.type.toLowerCase(), o = e.name.toLowerCase();
  return n.some((i) => {
    if (i.endsWith("/*")) {
      const a = i.slice(0, -2);
      return r.startsWith(a);
    }
    return i.includes("/") ? r === i : i.startsWith(".") ? o.endsWith(i) : !1;
  });
}
function wa(e) {
  const t = "type" in e ? e.type : "", n = "name" in e ? e.name : "";
  return t.startsWith("image/") || /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(n);
}
const Rm = (e) => {
  const {
    children: t,
    variant: n = mt.variant,
    disabled: r = mt.disabled,
    readOnly: o = mt.readOnly,
    name: i,
    accept: a,
    multiple: l = mt.multiple,
    directory: c = mt.directory,
    maxCount: u,
    maxSize: d,
    action: p,
    method: h = mt.method,
    headers: f,
    data: m,
    withCredentials: v = mt.withCredentials,
    draggable: L = mt.draggable,
    title: k,
    hint: y,
    dropHint: C = mt.dropHint,
    uploadingHint: w = mt.uploadingHint,
    icon: b,
    showFileList: x = mt.showFileList,
    listType: N = mt.listType,
    showProgress: T = mt.showProgress,
    showRemoveButton: _ = mt.showRemoveButton,
    showPreviewButton: V = mt.showPreviewButton,
    style: H,
    className: S,
    width: A,
    height: O,
    dropzoneStyle: U,
    dropzoneClassName: re,
    fileListStyle: R,
    fileListClassName: q,
    fileList: J,
    defaultFileList: z = [],
    onChange: Q,
    beforeUpload: X,
    onProgress: $,
    onSuccess: Z,
    onError: te,
    onRemove: pe,
    onPreview: ue,
    onDragEnter: le,
    onDragLeave: be,
    onDrop: ie,
    onExceed: D
  } = e, [he, ne] = F(z), [ge, I] = F(!1), E = ae(null), W = ae(0), fe = J !== void 0, K = fe ? J : he, P = M(
    (ce, $e) => {
      fe || ne($e), Q == null || Q(ce, $e);
    },
    [fe, Q]
  ), oe = M((ce) => new Promise(($e) => {
    if (wa({ name: ce.name, type: ce.type })) {
      const Be = URL.createObjectURL(ce);
      $e(Be);
    } else
      $e("");
  }), []), se = M(
    async (ce, $e) => {
      if (!p) {
        const Ee = await oe(ce), Pe = {
          ...$e,
          status: "done",
          percent: 100,
          url: Ee,
          thumbUrl: Ee
        }, B = K.map((G) => G.uid === $e.uid ? Pe : G);
        P(Pe, B), Z == null || Z(null, Pe);
        return;
      }
      const Be = new FormData();
      if (Be.append(i || "file", ce), m) {
        const Ee = typeof m == "function" ? m($e) : m;
        Object.entries(Ee).forEach(([Pe, B]) => {
          B instanceof Blob ? Be.append(Pe, B) : B != null && Be.append(Pe, String(B));
        });
      }
      const He = new XMLHttpRequest();
      He.open(h, p, !0), f && Object.entries(f).forEach(([Ee, Pe]) => {
        He.setRequestHeader(Ee, Pe);
      }), He.withCredentials = v, He.upload.onprogress = (Ee) => {
        if (Ee.lengthComputable) {
          const Pe = Math.round(Ee.loaded / Ee.total * 100), B = { ...$e, percent: Pe }, G = K.map((me) => me.uid === $e.uid ? B : me);
          P(B, G), $ == null || $(Pe, B);
        }
      }, He.onload = async () => {
        const Ee = await oe(ce);
        if (He.status >= 200 && He.status < 300) {
          let Pe;
          try {
            Pe = JSON.parse(He.responseText);
          } catch {
            Pe = He.responseText;
          }
          const B = {
            ...$e,
            status: "done",
            percent: 100,
            url: Ee,
            thumbUrl: Ee,
            response: Pe
          }, G = K.map((me) => me.uid === $e.uid ? B : me);
          P(B, G), Z == null || Z(Pe, B);
        } else {
          const Pe = new Error(`Upload failed with status ${He.status}`), B = {
            ...$e,
            status: "error",
            error: Pe.message,
            url: Ee,
            thumbUrl: Ee
          }, G = K.map((me) => me.uid === $e.uid ? B : me);
          P(B, G), te == null || te(Pe, B);
        }
      }, He.onerror = async () => {
        const Ee = await oe(ce), Pe = new Error("Network error"), B = {
          ...$e,
          status: "error",
          error: Pe.message,
          url: Ee,
          thumbUrl: Ee
        }, G = K.map((me) => me.uid === $e.uid ? B : me);
        P(B, G), te == null || te(Pe, B);
      }, He.send(Be);
    },
    [
      p,
      i,
      h,
      f,
      m,
      v,
      K,
      oe,
      P,
      $,
      Z,
      te
    ]
  ), ve = M(
    async (ce) => {
      if (r || o) return;
      let $e = Array.from(ce);
      if (u) {
        const Be = u - K.length;
        if (Be <= 0) {
          D == null || D($e);
          return;
        }
        $e.length > Be && (D == null || D($e.slice(Be)), $e = $e.slice(0, Be));
      }
      for (const Be of $e) {
        if (!U3(Be, a) || d && Be.size > d)
          continue;
        if (X)
          try {
            const Pe = await X(Be, $e);
            if (Pe === !1)
              continue;
            if (Pe instanceof File) {
              const B = ya(Pe), G = [...K, B];
              P(B, G), se(Pe, B);
              continue;
            }
          } catch {
            continue;
          }
        const He = ya(Be), Ee = [...K, He];
        P(He, Ee), se(Be, He);
      }
    },
    [
      r,
      o,
      u,
      K,
      a,
      d,
      X,
      P,
      se,
      D
    ]
  ), _e = M(() => {
    var ce;
    r || o || (ce = E.current) == null || ce.click();
  }, [r, o]), Se = M(
    (ce) => {
      const $e = ce.target.files;
      $e && $e.length > 0 && ve($e), ce.target.value = "";
    },
    [ve]
  ), we = M(
    (ce) => {
      ce.preventDefault(), ce.stopPropagation(), !(r || o || !L) && (W.current++, ce.dataTransfer.items && ce.dataTransfer.items.length > 0 && (I(!0), le == null || le(ce)));
    },
    [r, o, L, le]
  ), Ie = M(
    (ce) => {
      ce.preventDefault(), ce.stopPropagation(), !(r || o || !L) && (W.current--, W.current === 0 && (I(!1), be == null || be(ce)));
    },
    [r, o, L, be]
  ), Ue = M(
    (ce) => {
      ce.preventDefault(), ce.stopPropagation();
    },
    []
  ), Ve = M(
    (ce) => {
      if (ce.preventDefault(), ce.stopPropagation(), r || o || !L) return;
      W.current = 0, I(!1);
      const $e = ce.dataTransfer.files;
      $e && $e.length > 0 && (ve($e), ie == null || ie(ce));
    },
    [r, o, L, ve, ie]
  ), Oe = M(
    async (ce) => {
      if (r || o || pe && await pe(ce) === !1)
        return;
      ce.url && ce.url.startsWith("blob:") && URL.revokeObjectURL(ce.url);
      const $e = { ...ce, status: "removed" }, Be = K.filter((He) => He.uid !== ce.uid);
      P($e, Be);
    },
    [r, o, K, P, pe]
  ), Re = M(
    (ce) => {
      ue == null || ue(ce);
    },
    [ue]
  ), Ge = j(() => {
    const ce = ["land-uploader"];
    return n && ce.push(`land-uploader--${n}`), r && ce.push("land-uploader--disabled"), o && ce.push("land-uploader--readonly"), S && ce.push(S), ce.join(" ");
  }, [n, r, o, S]), ze = j(() => {
    const ce = ["land-uploader__dropzone"];
    return ge && ce.push("land-uploader__dropzone--dragging"), re && ce.push(re), ce.join(" ");
  }, [ge, re]), Y = j(
    () => ({
      width: typeof A == "number" ? `${A}px` : A,
      ...H
    }),
    [A, H]
  ), Ce = j(
    () => ({
      height: typeof O == "number" ? `${O}px` : O,
      ...U
    }),
    [O, U]
  ), xe = M(() => b || /* @__PURE__ */ s(Le, { name: n === "avatar" ? "user" : "upload" }), [b, n]), De = M(() => t || (ge ? /* @__PURE__ */ s("div", { className: "land-uploader__hint", children: C }) : /* @__PURE__ */ g(tt, { children: [
    /* @__PURE__ */ s("div", { className: "land-uploader__icon", children: xe() }),
    k && /* @__PURE__ */ s("div", { className: "land-uploader__title", children: k }),
    y && /* @__PURE__ */ s("div", { className: "land-uploader__hint", children: y })
  ] })), [t, ge, C, k, y, xe]), lt = M(
    (ce) => {
      const $e = wa(ce), Be = N !== "text" && $e && ce.thumbUrl;
      return /* @__PURE__ */ g(
        "div",
        {
          className: `land-uploader__file-item land-uploader__file-item--${ce.status}`,
          children: [
            Be && /* @__PURE__ */ s("div", { className: "land-uploader__file-thumb", children: /* @__PURE__ */ s("img", { src: ce.thumbUrl, alt: ce.name }) }),
            !Be && /* @__PURE__ */ s("div", { className: "land-uploader__file-icon", children: /* @__PURE__ */ s(Le, { name: $e ? "image" : "file" }) }),
            /* @__PURE__ */ g("div", { className: "land-uploader__file-info", children: [
              /* @__PURE__ */ s("div", { className: "land-uploader__file-name", title: ce.name, children: ce.name }),
              ce.status === "uploading" && T && /* @__PURE__ */ s("div", { className: "land-uploader__file-progress", children: /* @__PURE__ */ s(
                "div",
                {
                  className: "land-uploader__file-progress-bar",
                  style: { width: `${ce.percent || 0}%` }
                }
              ) }),
              ce.status === "done" && /* @__PURE__ */ s("div", { className: "land-uploader__file-size", children: Z3(ce.size) }),
              ce.status === "error" && /* @__PURE__ */ s("div", { className: "land-uploader__file-error", children: ce.error || "上传失败" })
            ] }),
            /* @__PURE__ */ g("div", { className: "land-uploader__file-actions", children: [
              V && $e && ce.url && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: "land-uploader__file-action",
                  onClick: () => Re(ce),
                  title: "预览",
                  children: /* @__PURE__ */ s(Le, { name: "visible", size: 14 })
                }
              ),
              _ && !o && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: "land-uploader__file-action land-uploader__file-action--remove",
                  onClick: () => Oe(ce),
                  title: "删除",
                  children: /* @__PURE__ */ s(Le, { name: "close", size: 14 })
                }
              )
            ] })
          ]
        },
        ce.uid
      );
    },
    [N, T, V, _, o, Re, Oe]
  ), wt = M(() => !x || K.length === 0 ? null : /* @__PURE__ */ s(
    "div",
    {
      className: `land-uploader__file-list land-uploader__file-list--${N} ${q || ""}`,
      style: R,
      children: K.map(lt)
    }
  ), [x, K, N, q, R, lt]);
  return /* @__PURE__ */ g("div", { className: Ge, style: Y, children: [
    /* @__PURE__ */ s(
      "input",
      {
        ref: E,
        type: "file",
        className: "land-uploader__input",
        accept: a,
        multiple: l,
        webkitdirectory: c ? "" : void 0,
        onChange: Se,
        disabled: r
      }
    ),
    /* @__PURE__ */ s(
      "div",
      {
        className: ze,
        style: Ce,
        onClick: _e,
        onDragEnter: we,
        onDragLeave: Ie,
        onDragOver: Ue,
        onDrop: Ve,
        role: "button",
        tabIndex: r ? -1 : 0,
        "aria-disabled": r,
        children: De()
      }
    ),
    wt()
  ] });
}, Ir = "land-watermark", Em = ({
  children: e,
  content: t,
  url: n,
  width: r = 120,
  height: o = 64,
  gap: i = [180, 120],
  offset: a = [50, 50],
  rotate: l = -22,
  fontSize: c = "var(--font-content-m)",
  fontColor: u = "var(--color-text-quaternary)",
  fontWeight: d = "normal",
  fontFamily: p = "sans-serif",
  zIndex: h = 9,
  style: f,
  className: m = ""
}) => {
  const v = ae(null), L = ae(null), [k, y] = F({ width: 0, height: 0 }), C = j(() => [Ir, m].filter(Boolean).join(" "), [m]), w = M(() => {
    const { width: _, height: V } = k;
    if (_ === 0 || V === 0) return [];
    const [H, S] = i, [A, O] = a, U = Math.max(H, r), re = Math.max(S, o), R = _ - r, q = V - o, J = Math.max(0, Math.min(A, R)), z = Math.max(0, Math.min(O, q)), Q = Math.ceil((R - J) / U) + 1, X = Math.ceil((q - z) / re) + 1, $ = [];
    for (let Z = 0; Z < X; Z++)
      for (let te = 0; te < Q; te++) {
        const pe = J + te * U, ue = z + Z * re;
        pe + r <= _ && ue + o <= V && $.push({ id: `${Z}-${te}`, x: pe, y: ue });
      }
    if ($.length < 4) {
      const Z = (_ - r) / 2, te = (V - o) / 2;
      $.push({ id: "center", x: Z, y: te });
      const pe = 20;
      [
        { x: pe, y: pe },
        { x: _ - r - pe, y: pe },
        { x: pe, y: V - o - pe },
        { x: _ - r - pe, y: V - o - pe }
      ].forEach((le, be) => {
        le.x >= 0 && le.y >= 0 && $.push({ id: `corner-${be}`, x: le.x, y: le.y });
      });
    }
    return $;
  }, [k, i, a, r, o]), b = j(() => w(), [w]), x = M(() => {
    if (v.current) {
      const { offsetWidth: _, offsetHeight: V } = v.current;
      y({ width: _, height: V });
    }
  }, []);
  de(() => {
    x();
  }, [x]), de(() => (L.current && (L.current.disconnect(), L.current = null), L.current = new ResizeObserver(() => {
    x();
  }), v.current && L.current.observe(v.current), () => {
    L.current && (L.current.disconnect(), L.current = null);
  }), [x]), de(() => () => {
    L.current && (L.current.disconnect(), L.current = null);
  }, []);
  const N = j(() => ({
    width: `${r}px`,
    height: `${o}px`,
    color: u,
    fontSize: `${c}px`,
    fontWeight: d,
    fontFamily: p,
    zIndex: h,
    transform: `rotate(${l}deg)`
  }), [r, o, u, c, d, p, h, l]), T = M((_) => {
    const V = {
      ...N,
      left: `${_.x}px`,
      top: `${_.y}px`
    }, H = `${Ir}__item ${n ? `${Ir}__item--img` : ""}`;
    return /* @__PURE__ */ s("div", { className: H, style: V, children: n ? /* @__PURE__ */ s("img", { src: n, alt: "watermark" }) : t }, _.id);
  }, [N, n, t]);
  return /* @__PURE__ */ g("div", { ref: v, className: C, style: f, children: [
    e,
    /* @__PURE__ */ s("div", { className: `${Ir}__content`, children: b.map(T) })
  ] });
}, Y3 = ({
  progress: e = 0,
  buffered: t = 0,
  activeColor: n = "white",
  bufferedColor: r = "rgba(255,255,255,0.5)",
  disabled: o = !1,
  onChange: i,
  onMouseEnter: a,
  onMouseMove: l,
  onMouseLeave: c,
  onDragStart: u,
  onDragEnd: d,
  isExternalDragging: p = !1
}) => {
  const h = ae(null), [f, m] = F(0), [v, L] = F(!1), [k, y] = F(!1), [C, w] = F(0);
  de(() => {
    if (!h.current) return;
    const S = new ResizeObserver((A) => {
      A.forEach((O) => {
        m(O.contentRect.width);
      });
    });
    return S.observe(h.current), () => S.disconnect();
  }, []);
  const b = M((S) => {
    if (!h.current) return 0;
    const A = h.current.getBoundingClientRect(), O = S - A.left;
    return Math.max(0, Math.min(1, O / A.width));
  }, []), x = M((S) => {
    if (o) return;
    S.preventDefault(), y(!0), u == null || u();
    const A = b(S.clientX);
    i == null || i(A);
  }, [o, b, i, u]), N = M((S) => {
    var U;
    if (o) return;
    const A = (U = h.current) == null ? void 0 : U.getBoundingClientRect();
    if (!A) return;
    const O = b(S.clientX);
    w(O), k && (i == null || i(O)), l == null || l(O, S.clientX - A.left, A.width);
  }, [o, k, b, i, l]), T = M((S) => {
    var U;
    if (o) return;
    L(!0);
    const A = (U = h.current) == null ? void 0 : U.getBoundingClientRect();
    if (!A) return;
    const O = b(S.clientX);
    w(O), a == null || a(O, S.clientX - A.left, A.width);
  }, [o, b, a]), _ = M(() => {
    L(!1), w(0), !p && k && (y(!1), d == null || d()), c == null || c();
  }, [k, p, d, c]), V = M(() => {
    k && (y(!1), d == null || d());
  }, [k, d]);
  de(() => {
    if (!k) return;
    const S = () => {
      y(!1), d == null || d();
    };
    return document.addEventListener("mouseup", S), () => document.removeEventListener("mouseup", S);
  }, [k, d]);
  const H = [
    "land-video-progress",
    v && "land-video-progress--hover",
    (k || p) && "land-video-progress--dragging",
    o && "land-video-progress--disabled"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ g(
    "div",
    {
      ref: h,
      className: H,
      onMouseDown: x,
      onMouseMove: N,
      onMouseEnter: T,
      onMouseLeave: _,
      onMouseUp: V,
      children: [
        /* @__PURE__ */ g("div", { className: "land-video-progress__track", children: [
          /* @__PURE__ */ s("div", { className: "land-video-progress__bg" }),
          /* @__PURE__ */ s(
            "div",
            {
              className: "land-video-progress__buffered",
              style: {
                transform: `scaleX(${t})`,
                backgroundColor: r
              }
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: "land-video-progress__hover",
              style: { transform: `scaleX(${C})` }
            }
          ),
          /* @__PURE__ */ s(
            "div",
            {
              className: "land-video-progress__fill",
              style: {
                transform: `scaleX(${e})`,
                backgroundColor: n
              }
            }
          )
        ] }),
        /* @__PURE__ */ s(
          "div",
          {
            className: "land-video-progress__thumb",
            style: {
              transform: `translateX(${e * f}px)`,
              backgroundColor: n
            }
          }
        )
      ]
    }
  );
}, Lc = [
  { label: "0.5x", value: 0.5 },
  { label: "0.75x", value: 0.75 },
  { label: "1x", value: 1 },
  { label: "1.25x", value: 1.25 },
  { label: "1.5x", value: 1.5 },
  { label: "2x", value: 2 }
], K3 = 5, z3 = 10, X3 = 160, q3 = ({
  rateOptions: e = Lc,
  currentRate: t = 1,
  onRateChange: n,
  loop: r = !1,
  onLoopChange: o
}) => /* @__PURE__ */ g("div", { className: "land-video-setting", children: [
  /* @__PURE__ */ g("div", { className: "land-video-setting__section", children: [
    /* @__PURE__ */ s("div", { className: "land-video-setting__label", children: "播放速度" }),
    /* @__PURE__ */ s("div", { className: "land-video-setting__rates", children: e.map((i) => /* @__PURE__ */ s(
      "button",
      {
        className: `land-video-setting__rate ${t === i.value ? "land-video-setting__rate--active" : ""}`,
        onClick: () => n == null ? void 0 : n(i.value),
        children: i.label
      },
      i.value
    )) })
  ] }),
  /* @__PURE__ */ s("div", { className: "land-video-setting__section", children: /* @__PURE__ */ g("div", { className: "land-video-setting__row", children: [
    /* @__PURE__ */ s("span", { className: "land-video-setting__text", children: "自动循环" }),
    /* @__PURE__ */ s(
      T3,
      {
        checked: r,
        onChange: () => o == null ? void 0 : o(!r)
      }
    )
  ] }) })
] }), G3 = (e, t) => {
  const n = ae(t);
  de(() => {
    n.current = t;
  }, [t]);
  const r = M((o) => {
    e.current && !e.current.contains(o.target) && n.current(o);
  }, [e]);
  de(() => (document.body.addEventListener("mousedown", r), document.body.addEventListener("touchstart", r), () => {
    document.body.removeEventListener("mousedown", r), document.body.removeEventListener("touchstart", r);
  }), [r]);
}, Om = ({
  // 基础属性
  children: e,
  src: t,
  poster: n,
  type: r,
  // 尺寸与样式
  width: o,
  height: i,
  ratio: a,
  radius: l = 0,
  fit: c = "contain",
  // 播放控制
  autoPlay: u = !1,
  loop: d = !1,
  muted: p = !0,
  volume: h = 100,
  playbackRate: f = 1,
  preload: m = "metadata",
  rateOptions: v = Lc,
  // 控制栏配置
  controls: L = !0,
  showPlayButton: k = !0,
  showProgress: y = !0,
  showTime: C = !0,
  showVolume: w = !0,
  showRate: b = !0,
  showPip: x = !0,
  showWebFullscreen: N = !0,
  showFullscreen: T = !0,
  showLoop: _ = !0,
  showSettings: V = !0,
  // 关键帧预览
  previewEnabled: H = !1,
  previewWidth: S = X3,
  // 键盘控制
  keyboard: A = !0,
  seekStep: O = K3,
  volumeStep: U = z3,
  // 剧集导航
  showPrev: re = !1,
  showNext: R = !1,
  prevDisabled: q = !1,
  nextDisabled: J = !1,
  // 事件回调
  onPlay: z,
  onPause: Q,
  onEnded: X,
  onTimeUpdate: $,
  onVolumeChange: Z,
  onRateChange: te,
  onFullscreenEnter: pe,
  onFullscreenExit: ue,
  onWebFullscreenChange: le,
  onLoaded: be,
  onError: ie,
  onWaiting: D,
  onCanPlay: he,
  onSeek: ne,
  onPrevClick: ge,
  onNextClick: I,
  onPipEnter: E,
  onPipExit: W,
  // 样式定制
  className: fe = "",
  style: K,
  videoClassName: P = "",
  videoStyle: oe,
  controlsClassName: se = "",
  controlsStyle: ve,
  progressColor: _e,
  videoProps: Se
}) => {
  const we = ae(null), Ie = ae(null), Ue = ae(null), Ve = ae(null), Oe = ae(null), [Re, Ge] = F("idle"), [ze, Y] = F(0), [Ce, xe] = F(0), [De, lt] = F(0), [wt, ce] = F(16 / 9), [$e, Be] = F(!1), [He, Ee] = F(h), [Pe, B] = F(h), [G, me] = F(p), [ee, ke] = F(d), [je, Me] = F(f), [Ze, Vt] = F(!1), [Tn, br] = F(!1), [rn, wc] = F(!1), [Cc, Mc] = F(!1), [Gt, xr] = F(!1), es = ae(null), [bc, Ao] = F(!1), [xc, _c] = F(0), [ts, Bo] = F(!1), [ns, Ro] = F(!1), [rs, Eo] = F(!1), _r = j(() => typeof l == "number" ? `${l}px` : l, [l]), Oo = j(() => a || wt, [a, wt]), $c = j(() => S / (wt || 1.7777777777777777), [S, wt]), Et = M(() => ({
    currentTime: Ce,
    duration: ze,
    buffered: ze > 0 ? De / ze : 0,
    volume: He,
    muted: G,
    playbackRate: je,
    status: Re
  }), [Ce, ze, De, He, G, je, Re]), Sn = M(async () => {
    if (we.current)
      try {
        we.current.paused ? await we.current.play() : we.current.pause();
      } catch (ye) {
        console.error("播放失败:", ye);
      }
  }, []), $r = M((ye) => {
    if (!we.current) return;
    const Ae = Math.max(0, Math.min(100, ye));
    Ee(Ae), we.current.volume = Ae / 100, Ae > 0 && G && (me(!1), we.current.muted = !1), Z == null || Z(Ae, Ae === 0);
  }, [G, Z]), ss = M(() => {
    if (we.current)
      if (G) {
        const ye = Pe > 0 ? Pe : 100;
        we.current.volume = ye / 100, we.current.muted = !1, Ee(ye), me(!1), Z == null || Z(ye, !1);
      } else
        B(He), we.current.volume = 0, we.current.muted = !0, Ee(0), me(!0), Z == null || Z(0, !0);
  }, [G, Pe, He, Z]), Fo = M((ye) => {
    we.current && (we.current.playbackRate = ye, Me(ye), te == null || te(ye));
  }, [te]), Zo = M((ye) => {
    ke(ye), we.current && (we.current.loop = ye);
  }, []), os = M((ye) => {
    if (!we.current || !ze) return;
    const Ae = ye * ze;
    we.current.currentTime = Ae, xe(Ae), ne == null || ne(Ae);
  }, [ze, ne]), Uo = M(async () => {
    if (we.current)
      try {
        document.pictureInPictureElement === we.current ? (await document.exitPictureInPicture(), W == null || W()) : (await we.current.requestPictureInPicture(), E == null || E());
      } catch (ye) {
        console.error("画中画操作失败:", ye);
      }
  }, [E, W]), Yo = M(() => {
    const ye = !rn;
    wc(ye), le == null || le(ye);
  }, [rn, le]), Nr = M(() => {
    Ue.current && (document.fullscreenElement ? (document.exitFullscreen(), ue == null || ue()) : (Ue.current.requestFullscreen(), pe == null || pe()));
  }, [pe, ue]), Ko = M((ye, Ae, Ct) => {
    if (!H || !Ie.current) return;
    Ie.current.currentTime = ye * ze;
    const Ot = S / 2;
    let vt = Ae - Ot;
    vt < 0 && (vt = 0), vt > Ct - S && (vt = Ct - S), _c(vt);
  }, [H, ze, S]), Nc = M(() => {
    if (!we.current || Tn) return;
    const ye = we.current;
    xe(ye.currentTime), ye.buffered.length > 0 && lt(ye.buffered.end(ye.buffered.length - 1)), $ == null || $(Et());
  }, [Tn, Et, $]), jc = M(() => {
    if (!we.current) return;
    const ye = we.current;
    Y(ye.duration), ce(ye.videoWidth / ye.videoHeight || 16 / 9), Ge("idle"), be == null || be(Et());
  }, [Et, be]), Vc = M(() => {
    Be(!0), Ge("playing"), z == null || z(Et());
  }, [Et, z]), Tc = M(() => {
    Be(!1), Ge("paused"), Q == null || Q(Et());
  }, [Et, Q]), Sc = M(() => {
    Be(!1), Ge("ended"), X == null || X(Et());
  }, [Et, X]), Hc = M(() => {
    Ge("buffering"), D == null || D();
  }, [D]), Dc = M(() => {
    Re === "buffering" && Ge($e ? "playing" : "paused"), he == null || he();
  }, [Re, $e, he]), Ic = M(() => {
    Ge("error"), ie == null || ie(new Error("视频加载失败"));
  }, [ie]), is = M((ye) => {
    var Ot;
    if (!A || !we.current) return;
    const Ae = we.current;
    if (document.activeElement === Ae || (Ot = Ue.current) != null && Ot.contains(document.activeElement) || document.fullscreenElement)
      switch (ye.code) {
        case "Space":
          ye.preventDefault(), Sn(), Eo(!0);
          break;
        case "ArrowLeft":
          if (ye.preventDefault(), !Ae.paused) {
            const vt = Math.max(0, Ae.currentTime - O);
            Ae.currentTime = vt, xe(vt), Bo(!0);
          }
          break;
        case "ArrowRight":
          if (ye.preventDefault(), !Ae.paused) {
            const vt = Math.min(Ae.duration, Ae.currentTime + O);
            Ae.currentTime = vt, xe(vt), Ro(!0);
          }
          break;
        case "ArrowUp":
          ye.preventDefault(), $r(He + U);
          break;
        case "ArrowDown":
          ye.preventDefault(), $r(He - U);
          break;
        case "KeyM":
          ye.preventDefault(), ss();
          break;
        case "KeyF":
          ye.preventDefault(), Nr();
          break;
      }
  }, [A, Sn, O, $r, He, U, ss, Nr]);
  de(() => {
    if (A)
      return document.addEventListener("keydown", is), () => document.removeEventListener("keydown", is);
  }, [A, is]), de(() => {
    if (ts) {
      const ye = setTimeout(() => Bo(!1), 800);
      return () => clearTimeout(ye);
    }
  }, [ts]), de(() => {
    if (ns) {
      const ye = setTimeout(() => Ro(!1), 800);
      return () => clearTimeout(ye);
    }
  }, [ns]), de(() => {
    if (rs) {
      const ye = setTimeout(() => Eo(!1), 800);
      return () => clearTimeout(ye);
    }
  }, [rs]), de(() => {
    we.current && (we.current.pause(), Be(!1), xe(0), lt(0), Y(0), Ge("idle"));
  }, [t]), G3(Oe, () => {
    Ze && Vt(!1);
  }), de(() => {
    const ye = () => {
      if (!Ve.current) return;
      const Ct = Ve.current.offsetWidth, Ot = 150 + (re || R ? 80 : 0);
      Mc(Ct < Ot + 280 + 30);
    };
    ye();
    const Ae = new ResizeObserver(ye);
    return Ve.current && Ae.observe(Ve.current), () => Ae.disconnect();
  }, [re, R]);
  const Pc = M((ye) => {
    if (!Gt || !es.current) return;
    const Ae = es.current.getBoundingClientRect(), Ct = ye.clientX - Ae.left, Ot = Math.max(0, Math.min(1, Ct / Ae.width));
    os(Ot);
  }, [Gt, os]), Ac = M(() => {
    Gt && (xr(!1), br(!1));
  }, [Gt]), Bc = M(() => {
    Gt && (xr(!1), br(!1));
  }, [Gt]), Rc = M((ye) => {
    if (Gt || Tn) return;
    const Ae = ye.target, Ct = Ae.closest(".land-video__controls"), Ot = Ae.closest(".land-video__button"), vt = Ae.closest(".land-video__center-icon");
    Ct || Ot || vt || Sn();
  }, [Gt, Tn, Sn]), zo = j(() => {
    const ye = ["land-video"];
    return Re === "error" && ye.push("land-video--error"), rn && ye.push("land-video--web-fullscreen"), fe && ye.push(fe), ye.join(" ");
  }, [Re, rn, fe]), Ec = j(() => {
    const ye = ["land-video__player"];
    return P && ye.push(P), ye.join(" ");
  }, [P]);
  if (Re === "error")
    return /* @__PURE__ */ s(
      "div",
      {
        ref: Ue,
        className: zo,
        style: {
          width: o,
          height: i,
          aspectRatio: String(Oo),
          borderRadius: _r,
          ...K
        },
        children: /* @__PURE__ */ s(E0, { type: "error", title: "视频加载失败", direction: "vertical", variant: "text" })
      }
    );
  const Oc = () => Cc ? /* @__PURE__ */ s("div", { className: "land-video__controls-right", children: /* @__PURE__ */ s(
    Cr,
    {
      trigger: "click",
      placement: "top",
      alignment: "left",
      content: /* @__PURE__ */ g("div", { className: "land-video__dropdown", children: [
        b && /* @__PURE__ */ g("div", { className: "land-video__dropdown-section", children: [
          /* @__PURE__ */ s("div", { className: "land-video__dropdown-title", children: "播放速度" }),
          /* @__PURE__ */ s("div", { className: "land-video__dropdown-rates", children: v.map((ye) => /* @__PURE__ */ s(
            "button",
            {
              className: `land-video__dropdown-rate ${je === ye.value ? "land-video__dropdown-rate--active" : ""}`,
              onClick: () => Fo(ye.value),
              children: ye.label
            },
            ye.value
          )) })
        ] }),
        _ && /* @__PURE__ */ s("div", { className: "land-video__dropdown-section", children: /* @__PURE__ */ g(
          "button",
          {
            className: `land-video__dropdown-toggle ${ee ? "land-video__dropdown-toggle--active" : ""}`,
            onClick: () => Zo(!ee),
            children: [
              /* @__PURE__ */ s(Le, { name: "loop", size: 16 }),
              /* @__PURE__ */ s("span", { children: "循环播放" }),
              /* @__PURE__ */ s("div", { className: `land-video__dropdown-switch ${ee ? "land-video__dropdown-switch--active" : ""}` })
            ]
          }
        ) }),
        /* @__PURE__ */ s("div", { className: "land-video__dropdown-divider" }),
        /* @__PURE__ */ g("div", { className: "land-video__dropdown-actions", children: [
          x && /* @__PURE__ */ g("button", { className: "land-video__dropdown-action", onClick: Uo, children: [
            /* @__PURE__ */ s(Le, { name: "video-small-screen", size: 20 }),
            /* @__PURE__ */ s("span", { children: "画中画" })
          ] }),
          N && /* @__PURE__ */ g("button", { className: "land-video__dropdown-action", onClick: Yo, children: [
            /* @__PURE__ */ s(Le, { name: rn ? "zoom-out" : "zoom-in", size: 20 }),
            /* @__PURE__ */ s("span", { children: rn ? "退出网页全屏" : "网页全屏" })
          ] }),
          T && /* @__PURE__ */ g("button", { className: "land-video__dropdown-action", onClick: Nr, children: [
            /* @__PURE__ */ s(Le, { name: "zoom-in-arrow", size: 20 }),
            /* @__PURE__ */ s("span", { children: "全屏模式" })
          ] })
        ] })
      ] }),
      children: /* @__PURE__ */ s("button", { className: "land-video__button land-video__button--more", children: /* @__PURE__ */ s(Le, { name: "more", size: 20 }) })
    }
  ) }) : /* @__PURE__ */ g("div", { className: "land-video__controls-right", children: [
    V && /* @__PURE__ */ g("button", { className: "land-video__button land-video__button--settings", children: [
      /* @__PURE__ */ s(Le, { name: "setting", size: 20 }),
      /* @__PURE__ */ s("div", { className: "land-video__settings-panel", children: /* @__PURE__ */ s(
        q3,
        {
          rateOptions: v,
          currentRate: je,
          onRateChange: Fo,
          loop: ee,
          onLoopChange: Zo
        }
      ) })
    ] }),
    x && /* @__PURE__ */ g("button", { className: "land-video__button", onClick: Uo, children: [
      /* @__PURE__ */ s(Le, { name: "video-small-screen", size: 20 }),
      /* @__PURE__ */ s(at, { content: "画中画模式", theme: "dark" })
    ] }),
    N && /* @__PURE__ */ g("button", { className: "land-video__button", onClick: Yo, children: [
      /* @__PURE__ */ s(Le, { name: rn ? "zoom-out" : "zoom-in", size: 20 }),
      /* @__PURE__ */ s(at, { content: rn ? "退出网页全屏" : "网页全屏", theme: "dark" })
    ] }),
    T && /* @__PURE__ */ g("button", { className: "land-video__button", onClick: Nr, children: [
      /* @__PURE__ */ s(Le, { name: "zoom-in-arrow", size: 20 }),
      /* @__PURE__ */ s(at, { content: "全屏模式", theme: "dark" })
    ] })
  ] });
  return /* @__PURE__ */ g(
    "div",
    {
      ref: Ue,
      className: zo,
      style: {
        width: o,
        height: i,
        aspectRatio: String(Oo),
        borderRadius: _r,
        ...K
      },
      tabIndex: 0,
      onClick: Rc,
      onMouseMove: Pc,
      onMouseUp: Ac,
      onMouseLeave: Bc,
      children: [
        /* @__PURE__ */ s(
          "video",
          {
            ref: we,
            className: Ec,
            src: t,
            poster: n,
            loop: ee,
            muted: G,
            autoPlay: u,
            preload: m,
            playsInline: !0,
            onTimeUpdate: Nc,
            onLoadedMetadata: jc,
            onPlay: Vc,
            onPause: Tc,
            onEnded: Sc,
            onWaiting: Hc,
            onCanPlay: Dc,
            onError: Ic,
            style: {
              borderRadius: _r,
              objectFit: c,
              ...oe
            },
            ...Se,
            children: r && /* @__PURE__ */ s("source", { src: t, type: r })
          }
        ),
        L && /* @__PURE__ */ g(
          "div",
          {
            className: `land-video__controls ${se}`,
            style: { borderRadius: _r, ...ve },
            onClick: (ye) => ye.stopPropagation(),
            children: [
              y && /* @__PURE__ */ g("div", { className: "land-video__progress-wrapper", ref: es, children: [
                /* @__PURE__ */ s(
                  Y3,
                  {
                    progress: ze > 0 ? Ce / ze : 0,
                    buffered: ze > 0 ? De / ze : 0,
                    activeColor: _e,
                    onChange: os,
                    onMouseEnter: H ? (ye, Ae, Ct) => {
                      Ao(!0), Ko(ye, Ae, Ct);
                    } : void 0,
                    onMouseMove: H ? Ko : void 0,
                    onMouseLeave: H ? () => Ao(!1) : void 0,
                    onDragStart: () => {
                      br(!0), xr(!0);
                    },
                    onDragEnd: () => {
                      br(!1), xr(!1);
                    },
                    isExternalDragging: Gt
                  }
                ),
                H && /* @__PURE__ */ s(
                  "div",
                  {
                    className: "land-video__preview",
                    style: {
                      transform: `translateX(${xc}px)`,
                      opacity: bc ? 1 : 0
                    },
                    children: /* @__PURE__ */ s(
                      "video",
                      {
                        ref: Ie,
                        src: t,
                        muted: !0,
                        preload: "metadata",
                        style: {
                          width: S,
                          height: $c,
                          objectFit: "cover",
                          borderRadius: 4
                        }
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ g("div", { className: "land-video__controls-bar", ref: Ve, children: [
                /* @__PURE__ */ g("div", { className: "land-video__controls-left", children: [
                  re && /* @__PURE__ */ s(
                    "button",
                    {
                      className: `land-video__button land-video__button--prev ${q ? "land-video__button--disabled" : ""}`,
                      onClick: ge,
                      disabled: q,
                      children: /* @__PURE__ */ s(Le, { name: "arrow-nav", size: 20 })
                    }
                  ),
                  k && /* @__PURE__ */ s("button", { className: "land-video__button land-video__button--play", onClick: Sn, children: $e ? /* @__PURE__ */ s(Le, { name: "video-play", size: 20 }) : /* @__PURE__ */ s(Le, { name: "video-pause", size: 32 }) }),
                  R && /* @__PURE__ */ s(
                    "button",
                    {
                      className: `land-video__button land-video__button--next ${J ? "land-video__button--disabled" : ""}`,
                      onClick: I,
                      disabled: J,
                      children: /* @__PURE__ */ s(Le, { name: "arrow-nav", size: 20 })
                    }
                  ),
                  C && /* @__PURE__ */ g("div", { className: "land-video__time", children: [
                    zr(Ce),
                    " / ",
                    zr(ze)
                  ] }),
                  w && /* @__PURE__ */ g("div", { className: "land-video__volume", children: [
                    /* @__PURE__ */ s("button", { className: "land-video__button", onClick: ss, children: G || He === 0 ? /* @__PURE__ */ s(Le, { name: "volume-muted", size: 20 }) : /* @__PURE__ */ s(Le, { name: "volume", size: 20, className: He < 50 ? "land-video__volume-icon--low" : "" }) }),
                    /* @__PURE__ */ s(
                      "div",
                      {
                        ref: Oe,
                        className: `land-video__volume-slider ${Ze || He < 100 ? "land-video__volume-slider--show" : ""}`,
                        children: /* @__PURE__ */ g(
                          "div",
                          {
                            className: "land-video__volume-track",
                            onClick: (ye) => {
                              ye.stopPropagation();
                              const Ae = ye.currentTarget.getBoundingClientRect(), Ct = (ye.clientX - Ae.left) / Ae.width;
                              $r(Math.round(Ct * 100));
                            },
                            children: [
                              /* @__PURE__ */ s("div", { className: "land-video__volume-bg" }),
                              /* @__PURE__ */ s(
                                "div",
                                {
                                  className: "land-video__volume-fill",
                                  style: { transform: `scaleX(${He / 100})` }
                                }
                              ),
                              /* @__PURE__ */ s(
                                "div",
                                {
                                  className: "land-video__volume-thumb",
                                  style: { left: `${He}%` }
                                }
                              )
                            ]
                          }
                        )
                      }
                    )
                  ] })
                ] }),
                Oc()
              ] })
            ]
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            className: "land-video__center-icon",
            style: { opacity: rs || Re === "buffering" || !$e ? 1 : 0 },
            onClick: Sn,
            children: Re === "buffering" ? /* @__PURE__ */ s(Gn, { size: 32, color: "white", strokeSize: 4 }) : /* @__PURE__ */ s("div", { className: "land-video__center-badge", children: $e ? /* @__PURE__ */ s(Le, { name: "video-play", size: 20 }) : /* @__PURE__ */ s(Le, { name: "video-pause", size: 32 }) })
          }
        ),
        /* @__PURE__ */ s("div", { className: "land-video__feedback land-video__feedback--left", style: { opacity: ts ? 1 : 0 }, children: /* @__PURE__ */ g("div", { className: "land-video__feedback-badge", children: [
          /* @__PURE__ */ s(Le, { name: "arrow-double", size: 28, className: "land-video__feedback-icon--backward" }),
          O,
          "秒"
        ] }) }),
        /* @__PURE__ */ s("div", { className: "land-video__feedback land-video__feedback--right", style: { opacity: ns ? 1 : 0 }, children: /* @__PURE__ */ g("div", { className: "land-video__feedback-badge", children: [
          /* @__PURE__ */ s(Le, { name: "arrow-double", size: 28, className: "land-video__feedback-icon--forward" }),
          O,
          "秒"
        ] }) }),
        e
      ]
    }
  );
}, $s = "land-auto-textarea", Fm = ({
  placeholder: e = "请输入",
  value: t,
  onChange: n,
  maxHeight: r = 80,
  className: o = "",
  style: i
}) => {
  const [a, l] = F(40), [c, u] = F(32), d = ae(null);
  return de(() => {
    d.current && (l(d.current.offsetWidth + 2), d.current.offsetHeight <= r && u(d.current.offsetHeight));
  }, [e, t, r]), /* @__PURE__ */ g("div", { className: `${$s} ${o}`, style: { maxHeight: `${r}px`, ...i }, children: [
    /* @__PURE__ */ s("div", { ref: d, className: `${$s}__holder`, children: (t == null ? void 0 : t.trimEnd()) || (e == null ? void 0 : e.trimEnd()) }),
    /* @__PURE__ */ s(
      "textarea",
      {
        style: { width: a, height: c },
        className: `${$s}__input`,
        placeholder: e,
        value: t,
        onChange: (p) => n == null ? void 0 : n(p.target.value, p)
      }
    )
  ] });
}, bn = "land-double-click-input", Zm = ({
  type: e = "input",
  value: t = "",
  onChange: n,
  height: r = "auto",
  maxHeight: o,
  placeholder: i,
  className: a = "",
  style: l
}) => {
  const [c, u] = F(!1), [d, p] = F(t), h = ae(null);
  de(() => {
    p(t);
  }, [t]);
  const f = () => {
    u(!0), setTimeout(() => {
      if (h.current) {
        h.current.focus();
        const y = h.current.value.length;
        h.current.setSelectionRange(y, y), h.current.scrollTop = h.current.scrollHeight;
      }
    }, 0);
  }, m = () => {
    u(!1), n && d !== t && n(d);
  }, v = (y) => {
    y.key === "Enter" && !y.shiftKey && (y.preventDefault(), m()), y.key === "Escape" && (p(t), u(!1));
  }, L = (y) => {
    p(y.target.value);
  }, k = () => {
    const y = {};
    return r !== "auto" && (y.height = `${r}px`), o && (y.maxHeight = `${o}px`), y;
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: `${bn} ${a}`,
      onDoubleClick: f,
      style: l,
      children: c ? e === "input" ? /* @__PURE__ */ s(
        "input",
        {
          ref: h,
          type: "text",
          className: `${bn}__input`,
          value: d,
          onChange: L,
          onBlur: m,
          onKeyDown: v,
          placeholder: i
        }
      ) : /* @__PURE__ */ s(
        "textarea",
        {
          ref: h,
          className: `${bn}__textarea`,
          value: d,
          onChange: L,
          onBlur: m,
          onKeyDown: v,
          placeholder: i,
          style: k()
        }
      ) : /* @__PURE__ */ s(
        "div",
        {
          className: `${bn}__display ${e === "input" ? `${bn}__display--input` : `${bn}__display--textarea`} ${d ? "" : `${bn}__display--placeholder`}`,
          style: e === "textarea" ? k() : {},
          children: d || i
        }
      )
    }
  );
}, Um = ({
  type: e = "1",
  ratio: t = 1,
  gap: n = 2,
  style: r,
  className: o = "",
  gridStyle: i,
  gridClassName: a = "",
  children: l
}) => {
  const c = j(() => {
    const d = e == null ? void 0 : e.split("-")[0];
    return Number(d) ? Number(d) : 1;
  }, [e]), u = j(() => t > 1 ? "horizontal" : t < 1 ? "vertical" : "square", [t]);
  return /* @__PURE__ */ g("div", { className: `land-grid-template ${u} type-${e} ${o}`, style: { gap: n, aspectRatio: t, ...r }, children: [
    l,
    !l && /* @__PURE__ */ s(tt, { children: Array.from({ length: c }).map((d, p) => /* @__PURE__ */ s("div", { className: `land-grid-template-item ${a}`, style: i }, p)) })
  ] });
}, yc = (e, t) => {
  const n = [];
  let r = "", o = "default", i = 0;
  for (let a = 0; a < e.length; a++)
    r += e[a], n[i] = {
      type: o,
      msg: r
    }, t.some((c) => r.includes(c) ? (o = c, !0) : !1) && (n[i].msg = r.split(o)[0], n.push({
      type: o,
      msg: o
    }), i += 2, r = "", o = "default");
  return n;
}, nr = "land-highlight-textarea", Ym = Ma(
  ({
    value: e = "",
    highlightString: t = [],
    formatHighlightString: n,
    className: r = "",
    style: o,
    onChange: i,
    onScroll: a,
    textAreaRef: l,
    placeholder: c,
    autoResize: u,
    ...d
  }, p) => {
    const h = ae(null), f = ae(null), m = j(() => {
      const w = yc(e, t).map(
        (b) => {
          var x;
          return (x = b.msg) != null && x.includes(`
`) ? Object.assign(b, { msg: /* @__PURE__ */ s(tt, { children: b.msg }) }) : b;
        }
      );
      return e.endsWith(`
`) && w.push({ type: "default", msg: /* @__PURE__ */ s("br", {}) }), w;
    }, [e, t]), v = M(() => {
      !h.current || !f.current || (h.current.scrollTop = f.current.scrollTop);
    }, []), L = M(
      (C) => {
        a == null || a(C), v();
      },
      [a]
    ), k = () => {
      f.current && (f.current.style.height = "auto", f.current.style.height = `${f.current.scrollHeight}px`);
    }, y = M(
      (C) => {
        i == null || i(C), u ? k() : v();
      },
      [i]
    );
    return qc(p, () => ({
      focus: () => {
        var C;
        (C = f.current) == null || C.focus();
      }
    })), de(() => {
      !f.current || !l || (l.current = f.current);
    }, []), /* @__PURE__ */ g("div", { className: `${nr} ${r}`, style: o, children: [
      /* @__PURE__ */ s("div", { className: `${nr}__content`, ref: h, children: m.length > 0 ? m.map((C, w) => C.type === "default" ? C.msg : n ? n(C.msg) : /* @__PURE__ */ s(
        "span",
        {
          className: `${nr}__highlight-item`,
          children: C.msg
        },
        C.msg + w
      )) : /* @__PURE__ */ s("span", { className: `${nr}__placeholder`, children: c }) }),
      /* @__PURE__ */ s(
        "textarea",
        {
          ...d,
          className: `${nr}__input`,
          value: e,
          onScroll: u ? void 0 : L,
          onChange: y,
          ref: f,
          placeholder: c
        }
      )
    ] });
  }
), rr = "land-highlight-input", Km = ({
  value: e = "",
  onChange: t,
  onFocus: n,
  onBlur: r,
  placeholder: o,
  highlightString: i = [],
  formatHighlightString: a,
  className: l = "",
  style: c,
  ...u
}) => {
  const d = j(() => yc(e, i), [e, i]), p = ae(null), h = ae(null), f = M(() => {
    !p.current || !h.current || (p.current.scrollLeft = h.current.scrollLeft);
  }, []), m = M(() => {
    p.current && (p.current.scrollLeft = 0), r == null || r();
  }, []);
  return /* @__PURE__ */ g("div", { className: `${rr} ${l}`, style: c, children: [
    e ? /* @__PURE__ */ s(
      "div",
      {
        ref: p,
        className: `${rr}__highlight-string`,
        children: d.map((v, L) => v.type === "default" ? v.msg : a ? a(v.msg) : /* @__PURE__ */ s("span", { className: `${rr}__highlight-item`, children: v.msg }, v.msg + L))
      }
    ) : /* @__PURE__ */ s("div", { className: `${rr}__placeholder`, children: o }),
    /* @__PURE__ */ s(
      "input",
      {
        ref: h,
        type: "text",
        className: `${rr}__input`,
        value: e,
        onChange: (v) => {
          f == null || f(), t == null || t(v);
        },
        onScroll: () => f(),
        onFocus: () => n == null ? void 0 : n(),
        onBlur: m,
        ...u
      }
    )
  ] });
}, xn = "land-prefix-value-input", zm = ({
  value: e = "",
  prefix: t,
  onChange: n,
  onScroll: r,
  autoResize: o,
  placeholder: i,
  className: a = "",
  style: l,
  ...c
}) => {
  const u = ae(null), d = ae(null), p = ae(null), [h, f] = F(0);
  de(() => {
    var y;
    f(((y = p.current) == null ? void 0 : y.offsetWidth) ?? 0);
  }, [t]);
  const m = M(() => {
    d.current && u.current && (d.current.scrollTop = u.current.scrollTop);
  }, []), v = M(() => {
    u.current && (u.current.style.height = "auto", u.current.style.height = `${u.current.scrollHeight}px`);
  }, []), L = M(
    (y) => {
      n == null || n(y), o ? v() : m();
    },
    [n, o]
  ), k = M(
    (y) => {
      r == null || r(y), m();
    },
    [r]
  );
  return /* @__PURE__ */ g("div", { className: `${xn} ${a}`, style: l, children: [
    /* @__PURE__ */ g("div", { ref: d, className: `${xn}__mirror`, children: [
      t && /* @__PURE__ */ g("span", { ref: p, className: `${xn}__prefix`, children: [
        "[",
        /* @__PURE__ */ s("span", { className: `${xn}__prefix-text`, children: t }),
        "]"
      ] }),
      /* @__PURE__ */ s("span", { className: `${xn}__mirror-value`, children: e || /* @__PURE__ */ s("span", { className: `${xn}__placeholder`, children: i }) })
    ] }),
    /* @__PURE__ */ s(
      "textarea",
      {
        ref: u,
        className: `${xn}__textarea`,
        style: h ? { textIndent: `${h + 4}px` } : void 0,
        value: e,
        placeholder: i,
        onChange: L,
        onScroll: o ? void 0 : k,
        ...c
      }
    )
  ] });
}, Xm = ({
  data: e = [],
  activeGroup: t,
  value: n,
  onChange: r,
  keyboardControl: o = !1
}) => {
  if (e.length <= 1) return null;
  const [i, a] = F(n ?? ""), [l, c] = F(t ?? "");
  de(() => a(n ?? ""), [n]), de(() => c(t ?? ""), [t]);
  const u = ae(), d = j(() => {
    var v, L;
    return (L = (v = e == null ? void 0 : e.filter((k) => k.id === l)[0]) == null ? void 0 : v.mediaData) == null ? void 0 : L.map((k) => k.id);
  }, [e, l]), p = j(() => e == null ? void 0 : e.map((v) => v.id), [e]), h = j(() => d == null ? void 0 : d.indexOf(i), [d, i]), f = j(() => p == null ? void 0 : p.indexOf(l), [p, l]), m = (v) => e.slice(0, v).reduce((L, k) => L + k.mediaData.length, 0);
  return de(() => {
    if (n === void 0 || f === -1 || h === -1) return;
    let v = m(f);
    d.length <= 6 ? u.current && u.current.scrollTo({ top: (v - 1) * 96 + f * 8 + (v - f) * 1, behavior: "smooth" }) : h <= 5 ? u.current && u.current.scrollTo({ top: (v - 1) * 96 + f * 8 + (v - f) * 1, behavior: "smooth" }) : f === 0 ? u.current && u.current.scrollTo({ top: (v + Math.floor(h / 7) * 7) * 96 + f * 8 + (v - f + Math.floor(h / 7) * 7) * 1, behavior: "smooth" }) : u.current && u.current.scrollTo({ top: (v + 6 + Math.floor((h - 6) / 7) * 7) * 96 + f * 8 + (v - f + 6 + Math.floor((h - 6) / 7) * 7) * 1, behavior: "smooth" });
  }, [h, f]), de(() => {
    if (!o) return;
    const v = (L) => {
      var k, y, C, w, b, x, N, T, _;
      if (!(L.repeat || f === -1 || h === -1))
        if (["TEXTAREA", "INPUT"].indexOf(L.target.tagName) === -1 && L.preventDefault(), L.code === "ArrowUp" || L.key === "ArrowUp") {
          if (h > 0)
            a(d[h - 1]), r == null || r((k = e[f]) == null ? void 0 : k.mediaData[h - 1], e[f]);
          else if (f > 0) {
            c(p[f - 1] ?? "");
            const V = (C = (y = e == null ? void 0 : e.filter((H) => H.id === p[f - 1])[0]) == null ? void 0 : y.mediaData) == null ? void 0 : C.length;
            a((b = (w = e[f - 1]) == null ? void 0 : w.mediaData[V - 1]) == null ? void 0 : b.id), r == null || r((x = e[f - 1]) == null ? void 0 : x.mediaData[V - 1], e[f - 1]);
          }
        } else (L.code === "ArrowDown" || L.key === "ArrowDown") && (h < (d == null ? void 0 : d.length) - 1 ? (a(d[h + 1]), r == null || r((N = e[f]) == null ? void 0 : N.mediaData[h + 1], e[f])) : f < p.length - 1 && (c(p[f + 1] ?? ""), a((T = e[f + 1]) == null ? void 0 : T.mediaData[0].id), r == null || r((_ = e[f + 1]) == null ? void 0 : _.mediaData[0], e[f + 1])));
    };
    return window.addEventListener("keydown", v), () => {
      window.removeEventListener("keydown", v);
    };
  }, [i, l, o]), de(() => {
    const v = document.querySelector(".currentPreviewCard");
    v && v.scrollIntoView({ behavior: "smooth" });
  }, []), /* @__PURE__ */ s("div", { className: "land-swiper-media-preview", onClick: (v) => v.stopPropagation(), children: /* @__PURE__ */ s(
    "div",
    {
      ref: u,
      className: "land-swiper-media-preview-content",
      children: e == null ? void 0 : e.map((v, L) => {
        var k;
        return /* @__PURE__ */ s(
          "div",
          {
            className: `land-swiper-media-preview-group ${v.id === t ? "active" : ""}`,
            children: (k = v.mediaData) == null ? void 0 : k.map((y, C) => /* @__PURE__ */ g(tt, { children: [
              C !== 0 && /* @__PURE__ */ s(qt, { spacing: 8 }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: `land-swiper-media-preview-item ${n === y.id ? "active" : ""}`,
                  onClick: () => {
                    r == null || r(y, v);
                  },
                  children: /* @__PURE__ */ s(
                    g3,
                    {
                      src: y.url,
                      ratio: 1,
                      style: { width: "80px", borderRadius: "8px" },
                      imgStyle: { objectFit: "cover", borderRadius: "8px" }
                    }
                  )
                }
              )
            ] }, y.id ?? C))
          },
          v.id ?? L
        );
      })
    }
  ) });
};
export {
  Wt as GridType,
  Le as Icon,
  tm as LandAffixContainer,
  E0 as LandAlert,
  rm as LandAnchor,
  Wr as LandAudio,
  sm as LandAutoContainer,
  Fm as LandAutoWidthHeightTextarea,
  om as LandBackToTop,
  im as LandBadge,
  am as LandBreadCrumb,
  et as LandButton,
  i3 as LandCalendar,
  Io as LandCheck,
  lm as LandCheckbox,
  cm as LandCheckedContainer,
  dm as LandCollapse,
  hm as LandColorPicker,
  um as LandContent,
  fm as LandDatePicker,
  pm as LandDialog,
  qt as LandDivider,
  Zm as LandDoubleClickInput,
  mm as LandDrawer,
  Cr as LandDropdown,
  gm as LandEllipsis,
  vm as LandFlex,
  km as LandFooter,
  Lm as LandGrid,
  Um as LandGridTemplate,
  ym as LandHeader,
  Km as LandHighlightInput,
  Ym as LandHighlightTextarea,
  g3 as LandImage,
  gr as LandInput,
  wm as LandLayout,
  Kr as LandLink,
  Gn as LandLoading,
  gc as LandMenu,
  Cm as LandMessage,
  At as LandNumberInput,
  bm as LandPagination,
  xm as LandPopConfirm,
  at as LandPopOver,
  zm as LandPrefixValueInput,
  _m as LandProgress,
  L3 as LandRadio,
  $m as LandRadioGroup,
  Nm as LandRate,
  hc as LandSelect,
  jm as LandSelectTree,
  p3 as LandSkeleton,
  Vm as LandState,
  Tm as LandStatistic,
  Hm as LandSteps,
  Sm as LandSwiper,
  Xm as LandSwiperMediaPreview,
  T3 as LandSwitch,
  Pm as LandTable,
  Dm as LandTabs,
  Mr as LandTag,
  Im as LandTagInput,
  Bm as LandTextarea,
  O3 as LandTimeline,
  Am as LandTitle,
  Rm as LandUploader,
  Om as LandVideo,
  Em as LandWatermark,
  Mm as message,
  G3 as useClickOutside,
  zr as useFormateTime,
  yc as useGetHighlightStr,
  K0 as useTextOverflow
};
//# sourceMappingURL=index.es.js.map
