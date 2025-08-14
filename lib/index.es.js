import * as rs from "react";
import Le, { useMemo as X, useState as F, useEffect as K, createContext as Ht, useRef as J, useLayoutEffect as Dl, useId as ss, useContext as Me, useInsertionEffect as Qi, useCallback as _, Children as Bl, isValidElement as Fl, forwardRef as Wi, Fragment as un, createElement as ea, Component as Ol, useDebugValue as ao, useImperativeHandle as _l } from "react";
var Sr = { exports: {} }, Kt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function Yl() {
  if (co) return Kt;
  co = 1;
  var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, d) {
    var u, h = {}, p = null, f = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (f = l.ref);
    for (u in l) r.call(l, u) && !i.hasOwnProperty(u) && (h[u] = l[u]);
    if (c && c.defaultProps) for (u in l = c.defaultProps, l) h[u] === void 0 && (h[u] = l[u]);
    return { $$typeof: t, type: c, key: p, ref: f, props: h, _owner: o.current };
  }
  return Kt.Fragment = n, Kt.jsx = a, Kt.jsxs = a, Kt;
}
var Gt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function Zl() {
  return lo || (lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), x = Symbol.iterator, g = "@@iterator";
    function L(b) {
      if (b === null || typeof b != "object")
        return null;
      var B = x && b[x] || b[g];
      return typeof B == "function" ? B : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(b) {
      {
        for (var B = arguments.length, U = new Array(B > 1 ? B - 1 : 0), ee = 1; ee < B; ee++)
          U[ee - 1] = arguments[ee];
        k("error", b, U);
      }
    }
    function k(b, B, U) {
      {
        var ee = m.ReactDebugCurrentFrame, ie = ee.getStackAddendum();
        ie !== "" && (B += "%s", U = U.concat([ie]));
        var le = U.map(function(re) {
          return String(re);
        });
        le.unshift("Warning: " + B), Function.prototype.apply.call(console[b], console, le);
      }
    }
    var y = !1, M = !1, v = !1, w = !1, C = !1, V;
    V = Symbol.for("react.module.reference");
    function S(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === r || b === i || C || b === o || b === d || b === u || w || b === f || y || M || v || typeof b == "object" && b !== null && (b.$$typeof === p || b.$$typeof === h || b.$$typeof === a || b.$$typeof === c || b.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === V || b.getModuleId !== void 0));
    }
    function H(b, B, U) {
      var ee = b.displayName;
      if (ee)
        return ee;
      var ie = B.displayName || B.name || "";
      return ie !== "" ? U + "(" + ie + ")" : U;
    }
    function N(b) {
      return b.displayName || "Context";
    }
    function R(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case c:
            var B = b;
            return N(B) + ".Consumer";
          case a:
            var U = b;
            return N(U._context) + ".Provider";
          case l:
            return H(b, b.render, "ForwardRef");
          case h:
            var ee = b.displayName || null;
            return ee !== null ? ee : R(b.type) || "Memo";
          case p: {
            var ie = b, le = ie._payload, re = ie._init;
            try {
              return R(re(le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, I = 0, O, D, q, T, E, A, P;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function G() {
      {
        if (I === 0) {
          O = console.log, D = console.info, q = console.warn, T = console.error, E = console.group, A = console.groupCollapsed, P = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: Z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        I++;
      }
    }
    function Y() {
      {
        if (I--, I === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, b, {
              value: O
            }),
            info: $({}, b, {
              value: D
            }),
            warn: $({}, b, {
              value: q
            }),
            error: $({}, b, {
              value: T
            }),
            group: $({}, b, {
              value: E
            }),
            groupCollapsed: $({}, b, {
              value: A
            }),
            groupEnd: $({}, b, {
              value: P
            })
          });
        }
        I < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = m.ReactCurrentDispatcher, ce;
    function se(b, B, U) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (ie) {
            var ee = ie.stack.trim().match(/\n( *(at )?)/);
            ce = ee && ee[1] || "";
          }
        return `
` + ce + b;
      }
    }
    var ue = !1, be;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      be = new Ne();
    }
    function Ve(b, B) {
      if (!b || ue)
        return "";
      {
        var U = be.get(b);
        if (U !== void 0)
          return U;
      }
      var ee;
      ue = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var le;
      le = Q.current, Q.current = null, G();
      try {
        if (B) {
          var re = function() {
            throw Error();
          };
          if (Object.defineProperty(re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(re, []);
            } catch (Ae) {
              ee = Ae;
            }
            Reflect.construct(b, [], re);
          } else {
            try {
              re.call();
            } catch (Ae) {
              ee = Ae;
            }
            b.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ae) {
            ee = Ae;
          }
          b();
        }
      } catch (Ae) {
        if (Ae && ee && typeof Ae.stack == "string") {
          for (var ne = Ae.stack.split(`
`), Te = ee.stack.split(`
`), ge = ne.length - 1, ve = Te.length - 1; ge >= 1 && ve >= 0 && ne[ge] !== Te[ve]; )
            ve--;
          for (; ge >= 1 && ve >= 0; ge--, ve--)
            if (ne[ge] !== Te[ve]) {
              if (ge !== 1 || ve !== 1)
                do
                  if (ge--, ve--, ve < 0 || ne[ge] !== Te[ve]) {
                    var Pe = `
` + ne[ge].replace(" at new ", " at ");
                    return b.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", b.displayName)), typeof b == "function" && be.set(b, Pe), Pe;
                  }
                while (ge >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        ue = !1, Q.current = le, Y(), Error.prepareStackTrace = ie;
      }
      var jt = b ? b.displayName || b.name : "", ot = jt ? se(jt) : "";
      return typeof b == "function" && be.set(b, ot), ot;
    }
    function rr(b, B, U) {
      return Ve(b, !1);
    }
    function sr(b) {
      var B = b.prototype;
      return !!(B && B.isReactComponent);
    }
    function xt(b, B, U) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return Ve(b, sr(b));
      if (typeof b == "string")
        return se(b);
      switch (b) {
        case d:
          return se("Suspense");
        case u:
          return se("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case l:
            return rr(b.render);
          case h:
            return xt(b.type, B, U);
          case p: {
            var ee = b, ie = ee._payload, le = ee._init;
            try {
              return xt(le(ie), B, U);
            } catch {
            }
          }
        }
      return "";
    }
    var Ut = Object.prototype.hasOwnProperty, Gs = {}, Xs = m.ReactDebugCurrentFrame;
    function vn(b) {
      if (b) {
        var B = b._owner, U = xt(b.type, b._source, B ? B.type : null);
        Xs.setExtraStackFrame(U);
      } else
        Xs.setExtraStackFrame(null);
    }
    function gl(b, B, U, ee, ie) {
      {
        var le = Function.call.bind(Ut);
        for (var re in b)
          if (le(b, re)) {
            var ne = void 0;
            try {
              if (typeof b[re] != "function") {
                var Te = Error((ee || "React class") + ": " + U + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Te.name = "Invariant Violation", Te;
              }
              ne = b[re](B, re, ee, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              ne = ge;
            }
            ne && !(ne instanceof Error) && (vn(ie), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ee || "React class", U, re, typeof ne), vn(null)), ne instanceof Error && !(ne.message in Gs) && (Gs[ne.message] = !0, vn(ie), j("Failed %s type: %s", U, ne.message), vn(null));
          }
      }
    }
    var xl = Array.isArray;
    function or(b) {
      return xl(b);
    }
    function vl(b) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, U = B && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return U;
      }
    }
    function jl(b) {
      try {
        return qs(b), !1;
      } catch {
        return !0;
      }
    }
    function qs(b) {
      return "" + b;
    }
    function zs(b) {
      if (jl(b))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vl(b)), qs(b);
    }
    var Js = m.ReactCurrentOwner, kl = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qs, Ws;
    function Ll(b) {
      if (Ut.call(b, "ref")) {
        var B = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function wl(b) {
      if (Ut.call(b, "key")) {
        var B = Object.getOwnPropertyDescriptor(b, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function yl(b, B) {
      typeof b.ref == "string" && Js.current;
    }
    function Cl(b, B) {
      {
        var U = function() {
          Qs || (Qs = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        U.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: U,
          configurable: !0
        });
      }
    }
    function Ml(b, B) {
      {
        var U = function() {
          Ws || (Ws = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        U.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: U,
          configurable: !0
        });
      }
    }
    var bl = function(b, B, U, ee, ie, le, re) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: b,
        key: B,
        ref: U,
        props: re,
        // Record the component responsible for creating this element.
        _owner: le
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function Nl(b, B, U, ee, ie) {
      {
        var le, re = {}, ne = null, Te = null;
        U !== void 0 && (zs(U), ne = "" + U), wl(B) && (zs(B.key), ne = "" + B.key), Ll(B) && (Te = B.ref, yl(B, ie));
        for (le in B)
          Ut.call(B, le) && !kl.hasOwnProperty(le) && (re[le] = B[le]);
        if (b && b.defaultProps) {
          var ge = b.defaultProps;
          for (le in ge)
            re[le] === void 0 && (re[le] = ge[le]);
        }
        if (ne || Te) {
          var ve = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ne && Cl(re, ve), Te && Ml(re, ve);
        }
        return bl(b, ne, Te, ie, ee, Js.current, re);
      }
    }
    var ir = m.ReactCurrentOwner, eo = m.ReactDebugCurrentFrame;
    function vt(b) {
      if (b) {
        var B = b._owner, U = xt(b.type, b._source, B ? B.type : null);
        eo.setExtraStackFrame(U);
      } else
        eo.setExtraStackFrame(null);
    }
    var ar;
    ar = !1;
    function cr(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function to() {
      {
        if (ir.current) {
          var b = R(ir.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function Sl(b) {
      return "";
    }
    var no = {};
    function Vl(b) {
      {
        var B = to();
        if (!B) {
          var U = typeof b == "string" ? b : b.displayName || b.name;
          U && (B = `

Check the top-level render call using <` + U + ">.");
        }
        return B;
      }
    }
    function ro(b, B) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var U = Vl(B);
        if (no[U])
          return;
        no[U] = !0;
        var ee = "";
        b && b._owner && b._owner !== ir.current && (ee = " It was passed a child from " + R(b._owner.type) + "."), vt(b), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, ee), vt(null);
      }
    }
    function so(b, B) {
      {
        if (typeof b != "object")
          return;
        if (or(b))
          for (var U = 0; U < b.length; U++) {
            var ee = b[U];
            cr(ee) && ro(ee, B);
          }
        else if (cr(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var ie = L(b);
          if (typeof ie == "function" && ie !== b.entries)
            for (var le = ie.call(b), re; !(re = le.next()).done; )
              cr(re.value) && ro(re.value, B);
        }
      }
    }
    function Tl(b) {
      {
        var B = b.type;
        if (B == null || typeof B == "string")
          return;
        var U;
        if (typeof B == "function")
          U = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === h))
          U = B.propTypes;
        else
          return;
        if (U) {
          var ee = R(B);
          gl(U, b.props, "prop", ee, b);
        } else if (B.PropTypes !== void 0 && !ar) {
          ar = !0;
          var ie = R(B);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $l(b) {
      {
        for (var B = Object.keys(b.props), U = 0; U < B.length; U++) {
          var ee = B[U];
          if (ee !== "children" && ee !== "key") {
            vt(b), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ee), vt(null);
            break;
          }
        }
        b.ref !== null && (vt(b), j("Invalid attribute `ref` supplied to `React.Fragment`."), vt(null));
      }
    }
    var oo = {};
    function io(b, B, U, ee, ie, le) {
      {
        var re = S(b);
        if (!re) {
          var ne = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Te = Sl();
          Te ? ne += Te : ne += to();
          var ge;
          b === null ? ge = "null" : or(b) ? ge = "array" : b !== void 0 && b.$$typeof === t ? (ge = "<" + (R(b.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof b, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, ne);
        }
        var ve = Nl(b, B, U, ie, le);
        if (ve == null)
          return ve;
        if (re) {
          var Pe = B.children;
          if (Pe !== void 0)
            if (ee)
              if (or(Pe)) {
                for (var jt = 0; jt < Pe.length; jt++)
                  so(Pe[jt], b);
                Object.freeze && Object.freeze(Pe);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              so(Pe, b);
        }
        if (Ut.call(B, "key")) {
          var ot = R(b), Ae = Object.keys(B).filter(function(Hl) {
            return Hl !== "key";
          }), lr = Ae.length > 0 ? "{key: someKey, " + Ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!oo[ot + lr]) {
            var Pl = Ae.length > 0 ? "{" + Ae.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, lr, ot, Pl, ot), oo[ot + lr] = !0;
          }
        }
        return b === r ? $l(ve) : Tl(ve), ve;
      }
    }
    function Rl(b, B, U) {
      return io(b, B, U, !0);
    }
    function Al(b, B, U) {
      return io(b, B, U, !1);
    }
    var Il = Al, El = Rl;
    Gt.Fragment = r, Gt.jsx = Il, Gt.jsxs = El;
  }()), Gt;
}
process.env.NODE_ENV === "production" ? Sr.exports = Yl() : Sr.exports = Zl();
var s = Sr.exports;
const vm = ({
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
  className: x,
  style: g,
  ...L
}) => {
  const m = X(
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
  ), [j, k] = F(!1), [y, M] = F(!1), v = (R) => R.hoverShow ? j ? 1 : 0 : R.hoverHide && y ? 0 : 1;
  K(() => {
    const R = ($) => {
      k(!1), M(!1), $.stopPropagation();
    };
    return document.body.addEventListener("wheel", R), () => {
      document.body.removeEventListener("wheel", R);
    };
  }, []);
  const w = "var(--padding-m)", C = (R, $, I) => {
    const O = $ !== void 0 ? $ : w;
    switch (R) {
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
        return I;
      default:
        return "auto";
    }
  }, V = (R, $) => {
    const I = $ !== void 0 ? $ : w;
    switch (R) {
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
  }, S = (R, $, I) => {
    const O = $ !== void 0 ? $ : w;
    switch (R) {
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
        return I;
      default:
        return "auto";
    }
  }, H = (R, $) => {
    const I = $ !== void 0 ? $ : w;
    switch (R) {
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
  }, N = (R) => {
    switch (R) {
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
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-affix-container ${h ? "disabled" : ""} ${x}`,
      style: g,
      onClick: (R) => p == null ? void 0 : p(R),
      onMouseOver: () => {
        h || (k(!0), M(!0));
      },
      onMouseLeave: () => {
        k(!1), M(!1);
      },
      onWheel: (R) => R.stopPropagation(),
      ...L,
      children: [
        f,
        m == null ? void 0 : m.map(
          (R, $) => {
            var I;
            return R.option ? /* @__PURE__ */ s.jsx(
              "div",
              {
                style: {
                  left: C(R.placement, R.option.gap, R.option.left || 0),
                  right: V(R.placement, R.option.gap),
                  top: S(R.placement, R.option.gap, R.option.top || 0),
                  bottom: H(R.placement, R.option.gap),
                  transform: N(R.placement),
                  opacity: v(R.option),
                  zIndex: R.option.zIndex || 2,
                  animation: R.option.hoverShow && j ? R.option.showAnimation : "none",
                  ...R.option.style
                },
                className: `land-affix-container-item ${R.option.hoverShow ? "hoverShow" : ""} ${R.placement} absolute ${R.option.className ?? ""}`,
                onClick: (O) => {
                  var D, q;
                  O.stopPropagation(), (q = (D = R.option) == null ? void 0 : D.onClick) == null || q.call(D, O);
                },
                children: (I = R.option) == null ? void 0 : I.content
              },
              $
            ) : null;
          }
        )
      ]
    }
  );
}, Ul = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9 18V42H39V18L24 6L9 18Z",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Kl = ({
  color: e = "currentColor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `home-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx("path", { d: "M39.6207 17.229C39.8603 17.4186 40 17.7074 40 18.013V41.8622C40 42.4145 39.5523 42.8622 39 42.8622H30.333C29.7807 42.8622 29.333 42.4145 29.333 41.8622V30.1396C29.333 29.5873 28.8853 29.1396 28.333 29.1396H19.667C19.1147 29.1396 18.667 29.5873 18.667 30.1396V41.8622C18.667 42.4145 18.2193 42.8622 17.667 42.8622H9C8.44772 42.8622 8 42.4145 8 41.8622V18.013C8 17.7074 8.13971 17.4186 8.37929 17.229L23.3793 5.35366C23.743 5.06571 24.257 5.06571 24.6207 5.35366L39.6207 17.229Z", fill: e })
  }
), Gl = ({
  size: e = 16,
  color: t = "currentcolor",
  className: n = "",
  onClick: r
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z",
          fill: t
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z",
          fill: t
        }
      )
    ]
  }
), Xl = ({
  size: e = 16,
  color: t = "currentcolor",
  className: n = "",
  style: r,
  onClick: o
}) => /* @__PURE__ */ s.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `more ${n}`,
    style: r,
    onClick: o,
    children: [
      /* @__PURE__ */ s.jsx("circle", { cx: "12", cy: "24", r: "4", fill: t }),
      /* @__PURE__ */ s.jsx("circle", { cx: "24", cy: "24", r: "4", fill: t }),
      /* @__PURE__ */ s.jsx("circle", { cx: "36", cy: "24", r: "4", fill: t })
    ]
  }
), ql = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `more-line ${r}`,
    style: o,
    onClick: i,
    children: [
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7.94971 11.9497H39.9497",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7.94971 23.9497H39.9497",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), zl = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 8V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 24L6 40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Jl = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M38.3785 9.85132C32.9112 4.38398 24.0468 4.38398 18.5795 9.85132C15.8458 12.585 14.479 16.1679 14.479 19.7508C14.479 23.3337 15.8458 26.9166 18.5795 29.6503C24.0468 35.1176 32.9112 35.1176 38.3785 29.6503C43.8458 24.183 43.8458 15.3187 38.3785 9.85132Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18.4642 29.5353L5.73633 42.2632",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Ql = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M41.9517 15.0483V6.04834H32.9517",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M10.4135 38.0007C15.8808 43.4681 24.7451 43.4681 30.2125 38.0007C32.9462 35.2671 34.313 31.6841 34.313 28.1012C34.313 24.5183 32.9462 20.9354 30.2125 18.2017C24.7451 12.7344 15.8808 12.7344 10.4135 18.2017C4.94615 23.6691 4.94615 32.5334 10.4135 38.0007Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Wl = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), ed = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 16C6.63472 17.2193 7.59646 18.3504 8.82276 19.3554C12.261 22.1733 17.779 24 24 24C30.221 24 35.739 22.1733 39.1772 19.3554C40.4035 18.3504 41.3653 17.2193 42 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28.9775 24L31.048 31.7274",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M37.3535 21.3536L43.0103 27.0104",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5.00004 27.0103L10.6569 21.3534",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), td = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), nd = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), rd = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx("path", { d: "M18.2838 43.1708C14.9327 42.1731 11.9498 40.3208 9.58787 37.8665C10.469 36.8222 11 35.4729 11 33.9996C11 30.6859 8.31371 27.9996 5 27.9996C4.79955 27.9996 4.60139 28.0095 4.40599 28.0287C4.13979 26.7272 4 25.3798 4 23.9996C4 21.909 4.32077 19.8933 4.91579 17.999C4.94381 17.9994 4.97188 17.9996 5 17.9996C8.31371 17.9996 11 15.3133 11 11.9996C11 11.0483 10.7786 10.1488 10.3846 9.34963C12.6975 7.19902 15.5205 5.58954 18.6521 4.72266C19.6444 6.66771 21.6667 7.99965 24 7.99965C26.3333 7.99965 28.3556 6.66771 29.3479 4.72266C32.4795 5.58954 35.3025 7.19902 37.6154 9.34963C37.2214 10.1488 37 11.0483 37 11.9996C37 15.3133 39.6863 17.9996 43 17.9996C43.0281 17.9996 43.0562 17.9994 43.0842 17.999C43.6792 19.8933 44 21.909 44 23.9996C44 25.3798 43.8602 26.7272 43.594 28.0287C43.3986 28.0095 43.2005 27.9996 43 27.9996C39.6863 27.9996 37 30.6859 37 33.9996C37 35.4729 37.531 36.8222 38.4121 37.8665C36.0502 40.3208 33.0673 42.1731 29.7162 43.1708C28.9428 40.7515 26.676 38.9996 24 38.9996C21.324 38.9996 19.0572 40.7515 18.2838 43.1708Z", stroke: e, "stroke-width": n, strokeLinejoin: "round" }),
      /* @__PURE__ */ s.jsx("path", { d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z", stroke: e, "stroke-width": n, strokeLinejoin: "round" })
    ]
  }
), sd = ({
  color: e = "currentColor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
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
    children: /* @__PURE__ */ s.jsx("path", { d: "M30.1995 3.7271C30.4664 3.3222 30.9558 3.09498 31.4158 3.24837C34.1559 4.16208 36.6509 5.64551 38.7721 7.56441C39.0901 7.85203 39.1651 8.31297 39.0243 8.71793C38.7822 9.41432 38.6504 10.1656 38.6504 10.949C38.6504 14.5688 41.4708 17.5036 44.9502 17.5036V17.5036C45.0022 17.5036 45.0485 17.537 45.0633 17.5868C45.6719 19.6316 46 21.8046 46 24.0574C46 25.3491 45.8919 26.6146 45.6852 27.8448C45.6266 28.1935 45.3038 28.4275 44.9502 28.4275V28.4275C41.4708 28.4275 38.6505 31.3614 38.6504 34.9812C38.6504 36.2755 39.0108 37.4824 39.6331 38.4988C39.8928 38.9229 39.8839 39.4787 39.5318 39.8299C37.3893 41.9671 34.8118 43.6362 31.9516 44.6796C31.432 44.8692 30.8767 44.5657 30.6368 44.0673C29.6028 41.9185 27.467 40.4431 25 40.4431C22.533 40.4431 20.3972 41.9185 19.3632 44.0673C19.1233 44.5657 18.568 44.8692 18.0484 44.6796C15.1882 43.6362 12.6108 41.9671 10.4682 39.8299C10.1161 39.4787 10.1073 38.9229 10.3669 38.4988C10.9892 37.4824 11.3496 36.2755 11.3496 34.9812C11.3495 31.3614 8.52916 28.4275 5.0498 28.4275V28.4275C4.69619 28.4275 4.37345 28.1935 4.31484 27.8448C4.10809 26.6146 4 25.3491 4 24.0574C4.00001 21.8046 4.32808 19.6316 4.93668 17.5868C4.95153 17.537 4.99778 17.5036 5.0498 17.5036V17.5036C8.5292 17.5036 11.3496 14.5688 11.3496 10.949C11.3496 10.1656 11.2178 9.41432 10.9757 8.71793C10.8349 8.31297 10.9099 7.85203 11.2279 7.56441C13.3491 5.64551 15.8441 4.16208 18.5842 3.24837C19.0442 3.09498 19.5336 3.3222 19.8005 3.7271C20.9356 5.44961 22.841 6.57982 25 6.57982C27.159 6.57982 29.0644 5.44961 30.1995 3.7271ZM25 16.8249C21.0375 16.825 17.8253 20.0372 17.8252 23.9997C17.8252 27.9623 21.0374 31.1744 25 31.1745C28.9626 31.1745 32.1748 27.9624 32.1748 23.9997C32.1747 20.0372 28.9626 16.8249 25 16.8249Z", fill: e })
  }
), od = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M41.5 10H35.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M27.5 6V14",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M27.5 10L5.5 10",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M13.5 24H5.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21.5 20V28",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M43.5 24H21.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M41.5 38H35.5",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M27.5 34V42",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), id = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), ad = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 6H42V20",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), cd = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16 6L17 9",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 11H28",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), ld = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9.15039 9.15088L11.3778 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M3 24H6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9.15039 38.8495L11.3778 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M38.8495 38.8495L36.6221 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M44.9996 24H41.8496",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M38.8495 9.15088L36.6221 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 3V6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), dd = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9.15039 9.15088L11.3778 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M3 24H6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9.15039 38.8495L11.3778 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M38.8495 38.8495L36.6221 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M44.9996 24H41.8496",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M38.8495 9.15088L36.6221 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 3V6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",
          fill: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), ud = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsx(
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
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",
        stroke: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), hd = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsx(
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
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",
        fill: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), pd = ({
  color: e = "currentcolor",
  size: t = 20,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), fd = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = ""
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), md = ({
  size: e = 16,
  color: t = "currentColor",
  style: n,
  className: r = ""
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: n,
    className: `video-play ${r}`,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M16.875 3.75V16.25C16.875 16.5815 16.7433 16.8995 16.5089 17.1339C16.2745 17.3683 15.9565 17.5 15.625 17.5H12.5C12.1685 17.5 11.8505 17.3683 11.6161 17.1339C11.3817 16.8995 11.25 16.5815 11.25 16.25V3.75C11.25 3.41848 11.3817 3.10054 11.6161 2.86612C11.8505 2.6317 12.1685 2.5 12.5 2.5H15.625C15.9565 2.5 16.2745 2.6317 16.5089 2.86612C16.7433 3.10054 16.875 3.41848 16.875 3.75ZM7.5 2.5H4.375C4.04348 2.5 3.72554 2.6317 3.49112 2.86612C3.2567 3.10054 3.125 3.41848 3.125 3.75V16.25C3.125 16.5815 3.2567 16.8995 3.49112 17.1339C3.72554 17.3683 4.04348 17.5 4.375 17.5H7.5C7.83152 17.5 8.14946 17.3683 8.38388 17.1339C8.6183 16.8995 8.75 16.5815 8.75 16.25V3.75C8.75 3.41848 8.6183 3.10054 8.38388 2.86612C8.14946 2.6317 7.83152 2.5 7.5 2.5Z",
        fill: t,
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }
    )
  }
), gd = ({
  size: e = 16,
  color: t = "currentColor",
  style: n,
  className: r = ""
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 21 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: n,
    className: `video-pause ${r}`,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M14.3077 9.79704C15.2308 10.3317 15.2308 11.6683 14.3077 12.203L8.07693 15.8118C7.15385 16.3465 6 15.6782 6 14.6089V7.39113C6 6.32183 7.15385 5.65352 8.07692 6.18817L14.3077 9.79704Z",
        fill: t,
        strokeLinejoin: "round"
      }
    )
  }
), xd = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M25 6V42L12.1884 32.839H6.1C4.94019 32.839 4 31.9436 4 30.839V17.0108C4 15.9062 4.94019 15.0108 6.1 15.0108H12.1884L25 6Z",
          stroke: e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 15C32.6232 15.5565 33.1882 16.1797 33.6842 16.8588C35.1388 18.8504 36 21.3222 36 24C36 26.6546 35.1536 29.1068 33.7218 31.0894C33.2168 31.7886 32.6392 32.4294 32 33",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), vd = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M25 6V42L12.1884 32.839H6.1C4.94019 32.839 4 31.9436 4 30.839V17.0108C4 15.9062 4.94019 15.0108 6.1 15.0108H12.1884L25 6Z",
          stroke: e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M41 19L32 29",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), jd = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = ""
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16 40H6C4.89543 40 4 39.1046 4 38V10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), kd = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  reverse: i,
  onClick: a
}) => /* @__PURE__ */ s.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: t, height: t, viewBox: "0 0 48 48", fill: "none", className: `video-fill-width ${o}`, style: r, onClick: a, children: [
  /* @__PURE__ */ s.jsx("path", { d: "M30.3633 18L36.7273 24.364L30.3633 30.728", stroke: e, strokeWidth: n, strokeLinejoin: "round", style: { transform: i ? "scale(1.-1)" : "" } }),
  /* @__PURE__ */ s.jsx("path", { d: "M16.363 30.7279L9.99902 24.3639L16.363 18", stroke: e, strokeWidth: n, strokeLinejoin: "round", style: { transform: i ? "scale(1.-1)" : "" } }),
  /* @__PURE__ */ s.jsx(
    "path",
    {
      d: "M42 9H6C3.79086 9 2 10.7909 2 13V37C2 39.2091 3.79086 41 6 41H42C44.2091 41 46 39.2091 46 37V13C46 10.7909 44.2091 9 42 9Z",
      stroke: e,
      strokeWidth: n,
      strokeLinejoin: "round"
    }
  )
] }), Ld = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), wd = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `file ${r}`,
    style: o,
    onClick: i,
    children: [
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: t,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), yd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 24.0083V42H42V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M33 23L24 32L15 23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Cd = ({
  size: e = 20,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 24.0083V42H42V24",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M33 15L24 6L15 15",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Md = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M25 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V24.9412",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 35H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M38 29V41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "circle",
        {
          r: n,
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)",
          fill: e
        }
      ),
      /* @__PURE__ */ s.jsx(
        "circle",
        {
          r: n,
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)",
          fill: e
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 24H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Nd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 14L26 16.9688V31.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Sd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M8 40C8 36 8 10 8 10C8 6.68629 10.8654 4 14.4 4H40V36C40 36 19.9815 36 14.4 36C9.36225 36 8 36.6842 8 40Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Vd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M17 7H16H10C8.89543 7 8 7.89543 8 9L8 42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V9C40 7.89543 39.1046 7 38 7H33.0499H31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Td = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 6H22V42H32V6Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 6H32V42H42V6Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M10 6L18 7L14.5 42L6 41L10 6Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M37 18V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), $d = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M36 15H44V28V41H4V28V15H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 19V5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 13L24 19L18 13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Rd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M36 15H44V28V41H4V28V15H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 19V5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 11L24 5L18 11",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Ad = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M44 24V9H24H4V24V39H24",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M31 36L36 40L44 30",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 9L24 24L44 9",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M44 24V9H24H4V24V39H24",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M40 31L32 39",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 31L40 39",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 9L24 24L44 9",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M33 29V43",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M26 36H33H40",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 4V14H40",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 4L40 14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M27 24L32 29L27 34",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 24L16 29L21 34",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 4L40 14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20.85 21C18.7237 21 17 23.0086 17 25.4864C17 29.9727 21.55 34.0513 24 35C26.45 34.0513 31 29.9727 31 25.4864C31 23.0086 29.2763 21 27.15 21C25.8479 21 24.6967 21.7533 24 22.9062C23.3033 21.7533 22.1521 21 20.85 21Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 4L40 14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 22V36",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 22H24L30 22",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M43 22H5",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 16V28",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M43 16V28",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 22L33 27L28 32",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 22L15 27L20 32",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 28L23.9933 34L18 28.0134",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 20V34",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 27H30",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 21L24 33",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 25.9867L24 20L18 26",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 20V34",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "rect",
        {
          x: "8",
          y: "24",
          width: "32",
          height: "18",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 13H18V6H30V13H44V24H4V13Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16 32L16 42",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "rect",
        {
          x: "4",
          y: "8",
          width: "40",
          height: "32",
          rx: "2",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16H4V10Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M25 23L23 34",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M31 23L37 28L31 34",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M17 22.9999L11 27.9999L17 33.9999",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "rect",
        {
          x: "4",
          y: "6",
          width: "40",
          height: "36",
          rx: "3",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 14H44",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 24H36",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 32H36",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 24H14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 32H14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `list-view ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M24.7073 9.56521L9.85801 24.4145C6.34329 27.9292 6.34329 33.6277 9.85801 37.1424V37.1424C13.3727 40.6571 19.0712 40.6571 22.5859 37.1424L40.2636 19.4647C42.6067 17.1216 42.6067 13.3226 40.2636 10.9794V10.9794C37.9205 8.63628 34.1215 8.63628 31.7783 10.9794L14.1007 28.6571C12.9291 29.8287 12.9291 31.7282 14.1007 32.8997V32.8997C15.2722 34.0713 17.1717 34.0713 18.3433 32.8997L33.1925 18.0505",
        stroke: e,
        strokeWidth: n,
        "stroke-linecap": "round",
        strokeLinejoin: "round"
      }
    )
  }
), Xd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 22H33",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 30H33",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 39H44V24V9H24H4V24V39Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 9L24 24L44 9",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 9H4V24",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M44 24V9H24",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M44 18V39.8182C44 41.0232 43.1046 42 42 42H6C4.89543 42 4 41.0232 4 39.8182V18L24 31L44 18Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 17.7839L24 4L44 17.7839",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 8H11C10.4477 8 10 8.44772 10 9V43C10 43.5523 10.4477 44 11 44H39C39.5523 44 40 43.5523 40 43V9C40 8.44772 39.5523 8 39 8H32",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Qd = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14 6V14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M25 23L14 23",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M34 31L14 31",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M34 6V14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 15V35",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M17 15H24H31",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s.jsx(
        "circle",
        {
          r: "2",
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)",
          fill: e
        }
      ),
      /* @__PURE__ */ s.jsx(
        "circle",
        {
          r: "2",
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)",
          fill: e
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16 31L22 37L34 25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16 5V13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), nu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 19H43V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V19Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 9C5 7.89543 5.89543 7 7 7H41C42.1046 7 43 7.89543 43 9V19H5V9Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16 4V12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 4V12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 34H34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14 34H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 26H34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), ru = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx("path", { d: "M16 13L4 25.4322L16 37", stroke: e, "stroke-width": n, "stroke-linecap": "round", "stroke-linejoin": "round" }),
      /* @__PURE__ */ s.jsx("path", { d: "M32 13L44 25.4322L32 37", stroke: e, "stroke-width": n, "stroke-linecap": "round", "stroke-linejoin": "round" }),
      /* @__PURE__ */ s.jsx("path", { d: "M28 13L21 37", stroke: e, "stroke-width": n, "stroke-linecap": "round" })
    ]
  }
), su = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9.00013 16.0001L34 6.00008L38.0004 16.0001",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M17 25.3848H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), ou = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M17 19V21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M17 27L17 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M25 21H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), iu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 16H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M27 32H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M44 10V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), au = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V14Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M19 19L24 24L29 19",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 25H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 31H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 25V35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), cu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9.78101 9.75193C9.90612 8.75107 10.7569 8 11.7656 8H36.2344C37.2431 8 38.0939 8.75107 38.219 9.75193L41.719 37.7519C41.8682 38.9456 40.9374 40 39.7344 40H8.26556C7.06257 40 6.1318 38.9456 6.28101 37.7519L9.78101 9.75193Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), lu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 2V46",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M35 6C35 6 24.9706 6 20 6C15.0294 6 11 10.0294 11 15C11 19.9706 15.0294 24 20 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), du = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), uu = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `check-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM11.4142 24C11.4142 24.4142 11.7475 24.7475 12.4142 25.4142L19.5858 32.5858C20.2525 33.2525 20.5858 33.5858 21 33.5858C21.4142 33.5858 21.7475 33.2525 22.4142 32.5858L36.2525 18.7475C36.9191 18.0809 37.2525 17.7475 37.2525 17.3333C37.2525 16.9191 36.9191 16.5858 36.2525 15.9191L35.7475 15.4142C35.0809 14.7475 34.7475 14.4142 34.3333 14.4142C33.9191 14.4142 33.5858 14.7475 32.9191 15.4142L22.4142 25.9191C21.7475 26.5858 21.4142 26.9191 21 26.9191C20.5858 26.9191 20.2525 26.5858 19.5858 25.9191L15.7475 22.0809C15.0809 21.4142 14.7475 21.0809 14.3333 21.0809C13.9191 21.0809 13.5858 21.4142 12.9191 22.0809L12.4142 22.5858C11.7475 23.2525 11.4142 23.5858 11.4142 24Z",
        fill: e
      }
    )
  }
), hu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `check ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
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
), pu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M29.6567 18.3432L18.343 29.6569",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), fu = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `error-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx(
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
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `error ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
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
), mu = ({
  size: e = 16,
  color: t = "currentcolor",
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `info-stroke ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",
        stroke: t,
        strokeWidth: "2"
      }
    )
  }
), gu = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `info-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 12.5C26.5 13.4428 26.5 13.9142 26.2071 14.2071C25.9142 14.5 25.4428 14.5 24.5 14.5H24C23.0572 14.5 22.5858 14.5 22.2929 14.2071C22 13.9142 22 13.4428 22 12.5V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V12.5ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V21.5C22 20.5572 22 20.0858 22.2929 19.7929C22.5858 19.5 23.0572 19.5 24 19.5H24.5C25.4428 19.5 25.9142 19.5 26.2071 19.7929C26.5 20.0858 26.5 20.5572 26.5 21.5V36.5Z",
        fill: e
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41L21 21C21 20.0572 21 19.5858 21.2929 19.2929C21.5858 19 22.0572 19 23 19H26C26.9428 19 27.4142 19 27.7071 19.2929C28 19.5858 28 20.0572 28 21L28 41Z",
          fill: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 10C28 10.9428 28 11.4142 27.7071 11.7071C27.4142 12 26.9428 12 26 12H23C22.0572 12 21.5858 12 21.2929 11.7071C21 11.4142 21 10.9428 21 10V7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5L26 5C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7V10Z",
          fill: e,
          strokeWidth: n
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
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `attention-stroke ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",
        stroke: e,
        strokeWidth: n
      }
    )
  }
), ju = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `attention-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",
        fill: e
      }
    )
  }
), ku = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",
          fill: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",
          fill: e,
          strokeWidth: n
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
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `question-stroke ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",
        stroke: e,
        strokeWidth: n
      }
    )
  }
), wu = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `question-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",
        fill: e
      }
    )
  }
), yu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",
          fill: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",
          fill: e,
          strokeWidth: n
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
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 4H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 44H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Mu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 4H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 44H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M37 4C34.3333 17.3389 30 24.0056 24 24C18 23.9944 13.6667 17.3278 11 4H37Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 15H27",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), bu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    fill: "none",
    viewBox: "0 0 24 24",
    width: t,
    height: t,
    className: `increase ${o}`,
    style: r,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M15 12h4.5L12 2 4.5 12H9v10h6V12z",
        fill: e,
        strokeWidth: n
      }
    )
  }
), Nu = ({
  color: e = "currentColor",
  strokeWidth: t = 3,
  size: n = 16,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14.5 8C13.8406 8.37652 13.2062 8.79103 12.6 9.24051C11.5625 10.0097 10.6074 10.8814 9.75 11.8402C6.79377 15.1463 5 19.4891 5 24.2455C5 34.6033 13.5066 43 24 43C34.4934 43 43 34.6033 43 24.2455C43 19.4891 41.2062 15.1463 38.25 11.8402C37.3926 10.8814 36.4375 10.0097 35.4 9.24051C34.7938 8.79103 34.1594 8.37652 33.5 8",
          stroke: e,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Su = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 9L42 9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 19L42 19",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Vu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M44 20H28V4",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Tu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), $u = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Ru = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M19 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 17.8994L19 5.89941",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M29 42.1006V6.10059",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Au = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M23 8H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14 41L6 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14 7V41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M23 18H39",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M23 28H35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Iu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M23 9H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 16L13 8",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M13 8V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M23 19H39",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M23 29H35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Eu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Pu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `last-step ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
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
), Hu = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `last-step-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx(
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
), Du = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `next-step ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
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
), Bu = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `next-step-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx(
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
), Fu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Ou = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), _u = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `add ${r}`,
    style: o,
    onClick: i,
    children: [
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24.0605 10L24.0239 38",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Yu = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `dec ${r}`,
    style: o,
    onClick: i,
    children: /* @__PURE__ */ s.jsx("path", { d: "M10 24H38", stroke: t, strokeWidth: n, strokeLinecap: "round", strokeLinejoin: "round" })
  }
), Zu = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  style: o,
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `clear ${r}`,
    style: o,
    onClick: i,
    children: [
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14 14L34 34",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Uu = ({
  color: e = "currentColor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9 10V44H39V10H9Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 20V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 20V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 10H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Ku = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsxs(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    className: `copy ${r}`,
    onClick: o,
    children: [
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Gu = ({
  size: e = 20,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14 14L34 34",
          stroke: t,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Xu = ({
  color: e = "currentcolor",
  size: t = 20,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
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
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",
        fill: e
      }
    )
  }
), qu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 6L16 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 41.8995L16 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42.0001 41.8995L32.1006 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M41.8995 6L32 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M33 6H42V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 33V42H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M15 42H6V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), zu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 6L16 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 41.8995L16 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42.0001 41.8995L32.1006 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M41.8995 6L32 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 7V16H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16 7V16H7",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16 41V32H7",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Ju = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M33 6H42V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 33V42H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M15 42H6V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Qu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M33 6V15H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M15 6V15H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M15 42V33H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Wu = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M23.9917 6H6V42H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M33 33L42 24L33 15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), eh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 15L21 27",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M15.0156 21.0156L27 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), th = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M15 21L27 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), nh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16 6H8C6.89543 6 6 6.89543 6 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16 42H8C6.89543 42 6 41.1046 6 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 42H40C41.1046 42 42 41.1046 42 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 6H40C41.1046 6 42 6.89543 42 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 24L16 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), rh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 32L24 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 27L42 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 27L6 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14 6H8C6.89543 6 6 6.89543 6 8V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M34 6H40C41.1046 6 42 6.89543 42 8V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M34 42H40C41.1046 42 42 41.1046 42 40V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14 42H8C6.89543 42 6 41.1046 6 40V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M27 6H21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 24L16 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), sh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M36 12L12 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 16H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M27 33H35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), oh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M36 4V43.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 28H23L7 44H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 20L15.2759 4L23 20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), ih = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M36 4V43.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 4H23L7 20H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 44L15.2759 28L23 44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), ah = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24.0205 35.3535C30.0956 35.3535 35.0205 30.4286 35.0205 24.3535C35.0205 18.2784 30.0956 13.3535 24.0205 13.3535C17.9454 13.3535 13.0205 18.2784 13.0205 24.3535C13.0205 30.4286 17.9454 35.3535 24.0205 35.3535Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M38.9603 9.00977L36.5 11.4842",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M11.0674 36.7451L9.02051 38.8037",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 41.3533L24 44.3533",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M43.9998 23.3535L39.9998 23.3535",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M37.5324 36.3361L39.9998 38.8035",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M24.0205 17.3535C20.1545 17.3535 17.0205 20.4875 17.0205 24.3535C17.0205 28.2195 20.1545 31.3535 24.0205 31.3535",
          fill: e
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4.00019 24.3535L8.00019 24.3535",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M10.0444 9.00974L12.0972 11.0625",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), ch = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M41 18H19C18.4477 18 18 18.4477 18 19V41C18 41.5523 18.4477 42 19 42H41C41.5523 42 42 41.5523 42 41V19C42 18.4477 41.5523 18 41 18Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9.96906 6H6V10.0336",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9.99705 30H6V26.012",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M26.0023 6H30V10.0152",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16.0283 6H20.0083",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 16C6 18.6536 6 19.9869 6 20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 16C30 18.6765 30 19.3456 30 18.0074",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), lh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 18H41C41.5523 18 42 18.4477 42 19V41C42 41.5523 41.5523 42 41 42H19C18.4477 42 18 41.5523 18 41V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9.96906 6H6V10.0336",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9.99705 30H6V26.012",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M26 30H29.9971V26.012",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M26.0023 6H30V9.99785",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16.0283 6H20.0083",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 16V20.0148",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 16V20.0148",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), dh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsxs("g", { "clip-path": "url(#icon-388a63e7c11bad3)", children: [
        /* @__PURE__ */ s.jsx(
          "path",
          {
            d: "M44.7818 24.1702L31.918 7.09935L14.1348 20.5L27.5 37L30.8556 34.6643L44.7818 24.1702Z",
            fill: "none",
            stroke: e,
            strokeWidth: n,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "path",
          {
            d: "M27.4998 37L23.6613 40.0748L13.0978 40.074L10.4973 36.6231L4.06543 28.0876L14.4998 20.2248",
            stroke: e,
            strokeWidth: n,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "path",
          {
            d: "M13.2056 40.072L44.5653 40.072",
            stroke: e,
            strokeWidth: n,
            strokeLinecap: "round"
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx("defs", { children: /* @__PURE__ */ s.jsx("clipPath", { id: "icon-388a63e7c11bad3", children: /* @__PURE__ */ s.jsx("rect", { width: "48", height: "48", fill: e }) }) })
    ]
  }
), uh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 42H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), hh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M8 6L32 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), ph = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `filter ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
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
), fh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14 22V14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), mh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14 22V14.0047C13.9948 8.87022 17.9227 4.56718 23.0859 4.05117C28.249 3.53516 32.9673 6.97408 34 12.0059",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), gh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 14V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V43C4 43.5523 4.44772 44 5 44H19C19.5523 44 20 43.5523 20 43V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 34V43C28 43.5523 28.4477 44 29 44H43C43.5523 44 44 43.5523 44 43V5C44 4.44772 43.5523 4 43 4H29C28.4477 4 28 4.44772 28 5V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 24H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 24H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32.7485 28.8184L31.1575 27.2274L27.9756 24.0454L31.1575 20.8634L32.7485 19.2724",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 14V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V43C20 43.5523 19.5523 44 19 44H5C4.44772 44 4 43.5523 4 43V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M44 34V43C44 43.5523 43.5523 44 43 44H29C28.4477 44 28 43.5523 28 43V5C28 4.44772 28.4477 4 29 4H43C43.5523 4 44 4.44772 44 5V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M28 24L44 24.0132",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 24.0132L20 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M39.2275 28.7778L40.8185 27.1868L44.0005 24.0049L40.8185 20.8229L39.2275 19.2319",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), vh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `cursor-move ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
        stroke: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), jh = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `cursor-move-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
        fill: e,
        strokeLinejoin: "round"
      }
    )
  }
), kh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 9H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 19H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 29H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 39H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Lh = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z",
          fill: e
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), wh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16 6H8C6.89543 6 6 6.89543 6 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M16 42H8C6.89543 42 6 41.1046 6 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 42H40C41.1046 42 42 41.1046 42 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 6H40C41.1046 6 42 6.89543 42 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M34 24L14 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M34 16L14 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), yh = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `like ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
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
), Ch = ({
  size: e = 16,
  color: t = "currentcolor",
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `like-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
        fill: t,
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }
    )
  }
), Mh = ({
  size: e = 16,
  color: t = "currentcolor",
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `star ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",
        stroke: t,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), bh = ({
  size: e = 16,
  color: t = "currentcolor",
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `star-fill ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",
        fill: t,
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Sh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), Vh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), Th = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), $h = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), Rh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), Ah = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), Ih = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M34 19H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Eh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 19H14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Ph = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M36 19H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Hh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 19H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Dh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 36L24 30L30 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M23.9999 30.9998V43.9998",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 12L24 18L30 12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M23.9999 17.0002V4.00022",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Bh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 32V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 24V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Fh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 32V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 24V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Oh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 32V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 24V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), _h = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M22 36H26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 30H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Yh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M22 30H26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 24H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Zh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M22 24H26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 18H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Uh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 36H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 30H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Kh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 30H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 24H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Gh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 24H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 18H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Xh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 36H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 30H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), qh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 30H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 24H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), zh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M32 24H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 18H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Jh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 12V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 12V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Qh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 12V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 12V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), Wh = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 12V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 12V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), e1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 22V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 18V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), t1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 22V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 18V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), n1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 22V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M30 18V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), r1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 34L16 12V34H4Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), s1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 24L6 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14 4L36 16H14V4Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), o1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M8 10.9333L8 6H40V10.9333",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), i1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 7H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 41H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 13L14 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 28L30 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), a1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 40L5 8",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 13L14 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M18 28L30 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 13L34 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), c1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M25 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 24H25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), l1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 24H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), d1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M7 24H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), u1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 9H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M19 19H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M19 29H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M11 19L6 24L11 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), h1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M29 19H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M29 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M37 19L42 24L37 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), p1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), f1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), m1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), g1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), v1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), j1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), k1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), L1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 11.9143L24 19L44 11.9143L24 5L4 11.9143Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 20L24 27L44 20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M4 28L24 35L44 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), w1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 10L8 13L14 7",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 24L8 27L14 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 38L8 41L14 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 38H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), y1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 9H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 19H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 29H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 39H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 29H12L6 39H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx("path", { d: "M11 8.9999L7 9L6.3 16H11.7L11 8.9999Z", fill: "none" }),
      /* @__PURE__ */ s.jsx(
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
), C1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20 24H44H20Z",
          fill: "none"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 24H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20 38H44H20Z",
          fill: "none"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 38H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20 10H44H20Z",
          fill: "none"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 10H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), M1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9 42C11.2091 42 13 40.2091 13 38C13 35.7909 11.2091 34 9 34C6.79086 34 5 35.7909 5 38C5 40.2091 6.79086 42 9 42Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9 14C11.2091 14 13 12.2092 13 10C13 7.79086 11.2091 6 9 6C6.79086 6 5 7.79086 5 10C5 12.2092 6.79086 14 9 14Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9 28C11.2091 28 13 26.2092 13 24C13 21.7908 11.2091 20 9 20C6.79086 20 5 21.7908 5 24C5 26.2092 6.79086 28 9 28Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 38H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), b1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9 4V13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 13H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 27H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 19.9998C6 19.9998 9 16.9998 11 19.9998C13 22.9999 6 26.9998 6 26.9998",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6.00016 34.5001C6.00016 34.5001 8.00016 31.5 11.0002 33.5C14.0002 35.5 11.0002 38 11.0002 38C11.0002 38 14.0002 40.5 11.0002 42.5C8.00015 44.5 6.00015 41.5 6.00015 41.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M11 38H9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M9 4L6 6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M21 38H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), N1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx("circle", { cx: "24", cy: "24", r: "20", stroke: e, strokeWidth: n }),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M31 5.25928C23.4067 8.09675 18 15.417 18 24.0001C18 32.5831 23.4067 39.9034 31 42.7408",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M37 9L18 22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M41 14L19 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M43 20L22 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), S1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M5 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 24C40 30 34 44 24 44C13.9999 44 12 36 12 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M35.9999 12C35.9999 12 33 4 23.9999 4C14.9999 4 11.4359 11.5995 15.6096 18",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), V1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 4V36H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 12H36V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 12H4",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), T1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), $1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M20 6H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M12 42H28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), R1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M8 44H40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), A1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24 42V6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), I1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M36 24L24 36L12 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), E1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: r,
    className: `arrow ${o}`,
    onClick: i,
    children: /* @__PURE__ */ s.jsx(
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
), P1 = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsx(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `arrow-triangle ${r}`,
    onClick: o,
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M36 19L24 31L12 19H36Z",
        fill: e,
        strokeLinejoin: "round"
      }
    )
  }
), H1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M24.0083 33.8995V6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M36 22L24 34L12 22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), D1 = ({
  color: e = "currentcolor",
  size: t = 16,
  strokeWidth: n = 3,
  style: r,
  className: o = "",
  onClick: i
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14 12L26 24L14 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
), B1 = ({
  color: e = "currentcolor",
  strokeWidth: t = 3,
  size: n = 16,
  className: r = "",
  onClick: o
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M15 12L18 6H30L33 12H15Z",
          fill: "none",
          stroke: e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
), F1 = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = ""
}) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: t, height: t, viewBox: "0 0 16 16", fill: "none", style: n, className: r, children: /* @__PURE__ */ s.jsx("path", { d: "M14.0726 5.46403C13.5517 5.78293 13.1202 6.22878 12.8186 6.75984C12.5169 7.2909 12.3549 7.88981 12.3478 8.50053C12.3498 9.18788 12.5535 9.85953 12.9335 10.4323C13.3135 11.005 13.8532 11.4538 14.4857 11.7228C14.2363 12.5274 13.8672 13.2899 13.3909 13.9846C12.7093 14.9658 11.9966 15.9469 10.9122 15.9469C9.82777 15.9469 9.54887 15.3169 8.29917 15.3169C7.08047 15.3169 6.64667 15.9676 5.65517 15.9676C4.66367 15.9676 3.97177 15.0587 3.17647 13.9433C2.12594 12.3808 1.54858 10.5483 1.51367 8.66573C1.51367 5.56733 3.52767 3.92523 5.51057 3.92523C6.56407 3.92523 7.44197 4.61713 8.10297 4.61713C8.73297 4.61713 9.71417 3.88383 10.9122 3.88383C11.5281 3.86793 12.1386 4.00375 12.6897 4.27931C13.2408 4.55487 13.7157 4.96172 14.0726 5.46403ZM10.3442 2.57223C10.8723 1.95099 11.1712 1.16735 11.1911 0.352226C11.192 0.244769 11.1816 0.137514 11.1601 0.0322266C10.2529 0.12084 9.41408 0.553201 8.81557 1.24063C8.28238 1.83711 7.97217 2.59982 7.93767 3.39913C7.93807 3.49633 7.94846 3.59324 7.96867 3.68833C8.04019 3.70185 8.11279 3.70877 8.18557 3.70903C8.60365 3.67576 9.01059 3.55783 9.38167 3.3624C9.75275 3.16698 10.0802 2.89814 10.3442 2.57223Z", fill: e }) }), O1 = {
  // Navigation
  home: Ul,
  "home-fill": Kl,
  application: Gl,
  more: Xl,
  "more-line": ql,
  search: pd,
  // Interface
  refresh: zl,
  female: Jl,
  male: Ql,
  "preview-open": Wl,
  "preview-close": ed,
  avatar: td,
  tag: nd,
  setting: rd,
  "config-setting": od,
  collection: id,
  share: ad,
  translate: cd,
  light: ld,
  dark: ud,
  "light-fill": dd,
  "dark-fill": hd,
  "setting-fill": sd,
  // Media
  image: fd,
  "video-play": md,
  "video-pause": gd,
  volume: xd,
  "volume-muted": vd,
  "video-small-screen": jd,
  "video-full-width": kd,
  loop: Ld,
  // File
  file: wd,
  download: yd,
  upload: Cd,
  "web-add": Md,
  announcement: bd,
  "audio-file": Nd,
  book: Sd,
  clipboard: Vd,
  document: Td,
  email: qd,
  "email-download": $d,
  "email-push": Rd,
  "email-success": Ad,
  "email-fail": Id,
  "email-open": zd,
  "file-add": Ed,
  "code-file": Pd,
  "star-file": Hd,
  "text-file": Dd,
  "text-scan": Wd,
  folder: Bd,
  "code-folder": Fd,
  "folder-download": Od,
  "folder-add": _d,
  "folder-upload": Yd,
  "formatting-brush": Zd,
  instruction: Ud,
  "list-view": Kd,
  link: Gd,
  log: Xd,
  "note-pad": Jd,
  schedule: Qd,
  "web-page": eu,
  plan: tu,
  calendar: nu,
  code: ru,
  // Ecommerce
  coupon: su,
  ticket: ou,
  "bank-card": iu,
  consume: au,
  commodity: cu,
  dollar: lu,
  // State
  "check-stroke": du,
  "check-fill": uu,
  check: hu,
  "error-stroke": pu,
  "error-fill": fu,
  error: ta,
  "info-stroke": mu,
  "info-fill": gu,
  info: xu,
  "attention-stroke": vu,
  "attention-fill": ju,
  attention: ku,
  "question-stroke": Lu,
  "question-fill": wu,
  question: yu,
  "hourglass-empty": Cu,
  "hourglass-full": Mu,
  increase: bu,
  // Operate
  "switch-gear": Nu,
  toggle: Su,
  collapse: Vu,
  reload: Tu,
  undo: $u,
  sort: Ru,
  "sort-descending": Au,
  "sort-ascending": Iu,
  back: Eu,
  "last-step": Pu,
  "last-step-fill": Hu,
  "next-step": Du,
  "next-step-fill": Bu,
  ahead: Fu,
  drag: Ou,
  add: _u,
  dec: Yu,
  "square-add": nh,
  "dash-add": rh,
  clear: Zu,
  delete: Uu,
  copy: Ku,
  close: Gu,
  "color-picker": Xu,
  "zoom-in-arrow": qu,
  "zoom-out-arrow": zu,
  "zoom-in": Ju,
  "zoom-out": Qu,
  "zoom-in-btn": eh,
  "zoom-out-btn": th,
  out: Wu,
  adjustment: sh,
  "alphabetical-sorting": oh,
  "alphabetical-sorting-reverse": ih,
  brightness: ah,
  layer: L1,
  "layer-front": ch,
  "layer-back": lh,
  "clear-formate": dh,
  edit: uh,
  "clip-edit": hh,
  filter: ph,
  lock: fh,
  unlock: mh,
  "merge-cells": gh,
  "split-cells": xh,
  "cursor-move": vh,
  "cursor-move-fill": jh,
  "line-break": kh,
  quote: Lh,
  scan: wh,
  like: yh,
  "like-fill": Ch,
  star: Mh,
  "star-fill": bh,
  pen: Nh,
  // Arrow
  "arrow-line": A1,
  "arrow-double": I1,
  arrow: E1,
  "arrow-triangle": P1,
  "arrow-to": H1,
  "arrow-nav": D1,
  // Device
  camera: B1,
  apple: F1,
  // Style
  "align-bottom": Sh,
  "align-top": Vh,
  "align-left": Th,
  "align-right": $h,
  "align-horizontally": Rh,
  "align-vertically": Ah,
  "text-align-left": Ih,
  "text-align-right": Eh,
  "text-align-center": Ph,
  "text-align-justify": Hh,
  "text-align-middle": Dh,
  "align-bottom-center": Bh,
  "align-bottom-left": Fh,
  "align-bottom-right": Oh,
  "align-horizontal-bottom": _h,
  "align-horizontal-center": Yh,
  "align-horizontal-top": Zh,
  "align-left-bottom": Uh,
  "align-left-center": Kh,
  "align-left-top": Gh,
  "align-right-bottom": Xh,
  "align-right-center": qh,
  "align-right-top": zh,
  "align-top-center": Jh,
  "align-top-left": Qh,
  "align-top-right": Wh,
  "align-vertical-left": t1,
  "align-vertical-center": e1,
  "align-vertical-right": n1,
  "flip-horizontally": r1,
  "flip-vertically": s1,
  "font-size": o1,
  "line-height": i1,
  "text-bold": T1,
  "text-italic": $1,
  "text-underline": R1,
  "line-width": a1,
  "title-h1": c1,
  "title-h2": l1,
  "title-h3": d1,
  "indent-left": u1,
  "indent-right": h1,
  "drop-shadow-up": p1,
  "drop-shadow-down": f1,
  "drop-shadow-left": m1,
  "drop-shadow-right": g1,
  "inner-shadow-up": x1,
  "inner-shadow-down": v1,
  "inner-shadow-left": j1,
  "inner-shadow-right": k1,
  "check-list": w1,
  "alphabet-list": y1,
  "checkbox-list": C1,
  "radio-list": M1,
  "number-list": b1,
  mask: N1,
  "delete-strike": S1,
  tail: V1
}, z = ({ name: e, ...t }) => {
  const n = O1[e];
  return n ? /* @__PURE__ */ s.jsx(n, { ...t }) : (console.warn(`Icon "${e}" not found`), /* @__PURE__ */ s.jsx(ta, { ...t }));
}, os = Ht({});
function is(e) {
  const t = J(null);
  return t.current === null && (t.current = e()), t.current;
}
const as = typeof window < "u", na = as ? Dl : K, Kn = /* @__PURE__ */ Ht(null);
function cs(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ls(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Je = (e, t, n) => n > t ? t : n < e ? e : n;
let Dt = () => {
}, Qe = () => {
};
process.env.NODE_ENV !== "production" && (Dt = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Qe = (e, t) => {
  if (!e)
    throw new Error(t);
});
const We = {}, ra = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function sa(e) {
  return typeof e == "object" && e !== null;
}
const oa = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function ds(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Be = /* @__NO_SIDE_EFFECTS__ */ (e) => e, _1 = (e, t) => (n) => t(e(n)), hn = (...e) => e.reduce(_1), nn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class us {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return cs(this.subscriptions, t), () => ls(this.subscriptions, t);
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
const Ye = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Ge = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function ia(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const uo = /* @__PURE__ */ new Set();
function hs(e, t, n) {
  e || uo.has(t) || (console.warn(t), uo.add(t));
}
const aa = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Y1 = 1e-7, Z1 = 12;
function U1(e, t, n, r, o) {
  let i, a, c = 0;
  do
    a = t + (n - t) / 2, i = aa(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > Y1 && ++c < Z1);
  return a;
}
function pn(e, t, n, r) {
  if (e === t && n === r)
    return Be;
  const o = (i) => U1(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : aa(o(i), t, r);
}
const ca = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, la = (e) => (t) => 1 - e(1 - t), da = /* @__PURE__ */ pn(0.33, 1.53, 0.69, 0.99), ps = /* @__PURE__ */ la(da), ua = /* @__PURE__ */ ca(ps), ha = (e) => (e *= 2) < 1 ? 0.5 * ps(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), fs = (e) => 1 - Math.sin(Math.acos(e)), pa = la(fs), fa = ca(fs), K1 = /* @__PURE__ */ pn(0.42, 0, 1, 1), G1 = /* @__PURE__ */ pn(0, 0, 0.58, 1), ma = /* @__PURE__ */ pn(0.42, 0, 0.58, 1), X1 = (e) => Array.isArray(e) && typeof e[0] != "number", ga = (e) => Array.isArray(e) && typeof e[0] == "number", ho = {
  linear: Be,
  easeIn: K1,
  easeInOut: ma,
  easeOut: G1,
  circIn: fs,
  circInOut: fa,
  circOut: pa,
  backIn: ps,
  backInOut: ua,
  backOut: da,
  anticipate: ha
}, q1 = (e) => typeof e == "string", po = (e) => {
  if (ga(e)) {
    Qe(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return pn(t, n, r, o);
  } else if (q1(e))
    return Qe(ho[e] !== void 0, `Invalid easing type '${e}'`), ho[e];
  return e;
}, jn = [
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
], fo = {
  value: null
};
function z1(e, t) {
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
        i = !0;
        return;
      }
      o = !0, [n, r] = [r, n], n.forEach(d), t && fo.value && fo.value.frameloop[t].push(l), l = 0, n.clear(), o = !1, i && (i = !1, u.process(h));
    }
  };
  return u;
}
const J1 = 40;
function xa(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, a = jn.reduce((k, y) => (k[y] = z1(i, t ? y : void 0), k), {}), { setup: c, read: l, resolveKeyframes: d, preUpdate: u, update: h, preRender: p, render: f, postRender: x } = a, g = () => {
    const k = We.useManualTiming ? o.timestamp : performance.now();
    n = !1, We.useManualTiming || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(k - o.timestamp, J1), 1)), o.timestamp = k, o.isProcessing = !0, c.process(o), l.process(o), d.process(o), u.process(o), h.process(o), p.process(o), f.process(o), x.process(o), o.isProcessing = !1, n && t && (r = !1, e(g));
  }, L = () => {
    n = !0, r = !0, o.isProcessing || e(g);
  };
  return { schedule: jn.reduce((k, y) => {
    const M = a[y];
    return k[y] = (v, w = !1, C = !1) => (n || L(), M.schedule(v, w, C)), k;
  }, {}), cancel: (k) => {
    for (let y = 0; y < jn.length; y++)
      a[jn[y]].cancel(k);
  }, state: o, steps: a };
}
const { schedule: he, cancel: nt, state: ye, steps: dr } = /* @__PURE__ */ xa(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0);
let Nn;
function Q1() {
  Nn = void 0;
}
const Ie = {
  now: () => (Nn === void 0 && Ie.set(ye.isProcessing || We.useManualTiming ? ye.timestamp : performance.now()), Nn),
  set: (e) => {
    Nn = e, queueMicrotask(Q1);
  }
}, va = (e) => (t) => typeof t == "string" && t.startsWith(e), ms = /* @__PURE__ */ va("--"), W1 = /* @__PURE__ */ va("var(--"), gs = (e) => W1(e) ? e4.test(e.split("/*")[0].trim()) : !1, e4 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Bt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, rn = {
  ...Bt,
  transform: (e) => Je(0, 1, e)
}, kn = {
  ...Bt,
  default: 1
}, Jt = (e) => Math.round(e * 1e5) / 1e5, xs = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function t4(e) {
  return e == null;
}
const n4 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, vs = (e, t) => (n) => !!(typeof n == "string" && n4.test(n) && n.startsWith(e) || t && !t4(n) && Object.prototype.hasOwnProperty.call(n, t)), ja = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, i, a, c] = r.match(xs);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: c !== void 0 ? parseFloat(c) : 1
  };
}, r4 = (e) => Je(0, 255, e), ur = {
  ...Bt,
  transform: (e) => Math.round(r4(e))
}, lt = {
  test: /* @__PURE__ */ vs("rgb", "red"),
  parse: /* @__PURE__ */ ja("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ur.transform(e) + ", " + ur.transform(t) + ", " + ur.transform(n) + ", " + Jt(rn.transform(r)) + ")"
};
function s4(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Vr = {
  test: /* @__PURE__ */ vs("#"),
  parse: s4,
  transform: lt.transform
}, fn = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), et = /* @__PURE__ */ fn("deg"), Xe = /* @__PURE__ */ fn("%"), W = /* @__PURE__ */ fn("px"), o4 = /* @__PURE__ */ fn("vh"), i4 = /* @__PURE__ */ fn("vw"), mo = {
  ...Xe,
  parse: (e) => Xe.parse(e) / 100,
  transform: (e) => Xe.transform(e * 100)
}, wt = {
  test: /* @__PURE__ */ vs("hsl", "hue"),
  parse: /* @__PURE__ */ ja("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Xe.transform(Jt(t)) + ", " + Xe.transform(Jt(n)) + ", " + Jt(rn.transform(r)) + ")"
}, je = {
  test: (e) => lt.test(e) || Vr.test(e) || wt.test(e),
  parse: (e) => lt.test(e) ? lt.parse(e) : wt.test(e) ? wt.parse(e) : Vr.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? lt.transform(e) : wt.transform(e),
  getAnimatableNone: (e) => {
    const t = je.parse(e);
    return t.alpha = 0, je.transform(t);
  }
}, a4 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function c4(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(xs)) == null ? void 0 : t.length) || 0) + (((n = e.match(a4)) == null ? void 0 : n.length) || 0) > 0;
}
const ka = "number", La = "color", l4 = "var", d4 = "var(", go = "${}", u4 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function sn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const c = t.replace(u4, (l) => (je.test(l) ? (r.color.push(i), o.push(La), n.push(je.parse(l))) : l.startsWith(d4) ? (r.var.push(i), o.push(l4), n.push(l)) : (r.number.push(i), o.push(ka), n.push(parseFloat(l))), ++i, go)).split(go);
  return { values: n, split: c, indexes: r, types: o };
}
function wa(e) {
  return sn(e).values;
}
function ya(e) {
  const { split: t, types: n } = sn(e), r = t.length;
  return (o) => {
    let i = "";
    for (let a = 0; a < r; a++)
      if (i += t[a], o[a] !== void 0) {
        const c = n[a];
        c === ka ? i += Jt(o[a]) : c === La ? i += je.transform(o[a]) : i += o[a];
      }
    return i;
  };
}
const h4 = (e) => typeof e == "number" ? 0 : je.test(e) ? je.getAnimatableNone(e) : e;
function p4(e) {
  const t = wa(e);
  return ya(e)(t.map(h4));
}
const rt = {
  test: c4,
  parse: wa,
  createTransformer: ya,
  getAnimatableNone: p4
};
function hr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function f4({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const c = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - c;
    o = hr(l, c, e + 1 / 3), i = hr(l, c, e), a = hr(l, c, e - 1 / 3);
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
const fe = (e, t, n) => e + (t - e) * n, pr = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, m4 = [Vr, lt, wt], g4 = (e) => m4.find((t) => t.test(e));
function xo(e) {
  const t = g4(e);
  if (Dt(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === wt && (n = f4(n)), n;
}
const vo = (e, t) => {
  const n = xo(e), r = xo(t);
  if (!n || !r)
    return Hn(e, t);
  const o = { ...n };
  return (i) => (o.red = pr(n.red, r.red, i), o.green = pr(n.green, r.green, i), o.blue = pr(n.blue, r.blue, i), o.alpha = fe(n.alpha, r.alpha, i), lt.transform(o));
}, Tr = /* @__PURE__ */ new Set(["none", "hidden"]);
function x4(e, t) {
  return Tr.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function v4(e, t) {
  return (n) => fe(e, t, n);
}
function js(e) {
  return typeof e == "number" ? v4 : typeof e == "string" ? gs(e) ? Hn : je.test(e) ? vo : L4 : Array.isArray(e) ? Ca : typeof e == "object" ? je.test(e) ? vo : j4 : Hn;
}
function Ca(e, t) {
  const n = [...e], r = n.length, o = e.map((i, a) => js(i)(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}
function j4(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = js(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function k4(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const i = t.types[o], a = e.indexes[i][r[i]], c = e.values[a] ?? 0;
    n[o] = c, r[i]++;
  }
  return n;
}
const L4 = (e, t) => {
  const n = rt.createTransformer(t), r = sn(e), o = sn(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Tr.has(e) && !o.values.length || Tr.has(t) && !r.values.length ? x4(e, t) : hn(Ca(k4(r, o), o.values), n) : (Dt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Hn(e, t));
};
function Ma(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? fe(e, t, n) : js(e)(e, t);
}
const w4 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => he.update(t, n),
    stop: () => nt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ye.isProcessing ? ye.timestamp : Ie.now()
  };
}, ba = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < o; i++)
    r += Math.round(e(i / (o - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Dn = 2e4;
function ks(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Dn; )
    t += n, r = e.next(t);
  return t >= Dn ? 1 / 0 : t;
}
function y4(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), o = Math.min(ks(r), Dn);
  return {
    type: "keyframes",
    ease: (i) => r.next(o * i).value / t,
    duration: /* @__PURE__ */ Ge(o)
  };
}
const C4 = 5;
function Na(e, t, n) {
  const r = Math.max(t - C4, 0);
  return ia(n - e(r), t - r);
}
const pe = {
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
}, fr = 1e-3;
function M4({ duration: e = pe.duration, bounce: t = pe.bounce, velocity: n = pe.velocity, mass: r = pe.mass }) {
  let o, i;
  Dt(e <= /* @__PURE__ */ Ye(pe.maxDuration), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  a = Je(pe.minDamping, pe.maxDamping, a), e = Je(pe.minDuration, pe.maxDuration, /* @__PURE__ */ Ge(e)), a < 1 ? (o = (d) => {
    const u = d * a, h = u * e, p = u - n, f = $r(d, a), x = Math.exp(-h);
    return fr - p / f * x;
  }, i = (d) => {
    const h = d * a * e, p = h * n + n, f = Math.pow(a, 2) * Math.pow(d, 2) * e, x = Math.exp(-h), g = $r(Math.pow(d, 2), a);
    return (-o(d) + fr > 0 ? -1 : 1) * ((p - f) * x) / g;
  }) : (o = (d) => {
    const u = Math.exp(-d * e), h = (d - n) * e + 1;
    return -fr + u * h;
  }, i = (d) => {
    const u = Math.exp(-d * e), h = (n - d) * (e * e);
    return u * h;
  });
  const c = 5 / e, l = N4(o, i, c);
  if (e = /* @__PURE__ */ Ye(e), isNaN(l))
    return {
      stiffness: pe.stiffness,
      damping: pe.damping,
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
const b4 = 12;
function N4(e, t, n) {
  let r = n;
  for (let o = 1; o < b4; o++)
    r = r - e(r) / t(r);
  return r;
}
function $r(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const S4 = ["duration", "bounce"], V4 = ["stiffness", "damping", "mass"];
function jo(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function T4(e) {
  let t = {
    velocity: pe.velocity,
    stiffness: pe.stiffness,
    damping: pe.damping,
    mass: pe.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!jo(e, V4) && jo(e, S4))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, i = 2 * Je(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: pe.mass,
        stiffness: o,
        damping: i
      };
    } else {
      const n = M4(e);
      t = {
        ...t,
        ...n,
        mass: pe.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Bn(e = pe.visualDuration, t = pe.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const i = n.keyframes[0], a = n.keyframes[n.keyframes.length - 1], c = { done: !1, value: i }, { stiffness: l, damping: d, mass: u, duration: h, velocity: p, isResolvedFromDuration: f } = T4({
    ...n,
    velocity: -/* @__PURE__ */ Ge(n.velocity || 0)
  }), x = p || 0, g = d / (2 * Math.sqrt(l * u)), L = a - i, m = /* @__PURE__ */ Ge(Math.sqrt(l / u)), j = Math.abs(L) < 5;
  r || (r = j ? pe.restSpeed.granular : pe.restSpeed.default), o || (o = j ? pe.restDelta.granular : pe.restDelta.default);
  let k;
  if (g < 1) {
    const M = $r(m, g);
    k = (v) => {
      const w = Math.exp(-g * m * v);
      return a - w * ((x + g * m * L) / M * Math.sin(M * v) + L * Math.cos(M * v));
    };
  } else if (g === 1)
    k = (M) => a - Math.exp(-m * M) * (L + (x + m * L) * M);
  else {
    const M = m * Math.sqrt(g * g - 1);
    k = (v) => {
      const w = Math.exp(-g * m * v), C = Math.min(M * v, 300);
      return a - w * ((x + g * m * L) * Math.sinh(C) + M * L * Math.cosh(C)) / M;
    };
  }
  const y = {
    calculatedDuration: f && h || null,
    next: (M) => {
      const v = k(M);
      if (f)
        c.done = M >= h;
      else {
        let w = M === 0 ? x : 0;
        g < 1 && (w = M === 0 ? /* @__PURE__ */ Ye(x) : Na(k, M, v));
        const C = Math.abs(w) <= r, V = Math.abs(a - v) <= o;
        c.done = C && V;
      }
      return c.value = c.done ? a : v, c;
    },
    toString: () => {
      const M = Math.min(ks(y), Dn), v = ba((w) => y.next(M * w).value, M, 30);
      return M + "ms " + v;
    },
    toTransition: () => {
    }
  };
  return y;
}
Bn.applyToOptions = (e) => {
  const t = y4(e, 100, Bn);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ Ye(t.duration), e.type = "keyframes", e;
};
function Rr({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: c, max: l, restDelta: d = 0.5, restSpeed: u }) {
  const h = e[0], p = {
    done: !1,
    value: h
  }, f = (C) => c !== void 0 && C < c || l !== void 0 && C > l, x = (C) => c === void 0 ? l : l === void 0 || Math.abs(c - C) < Math.abs(l - C) ? c : l;
  let g = n * t;
  const L = h + g, m = a === void 0 ? L : a(L);
  m !== L && (g = m - h);
  const j = (C) => -g * Math.exp(-C / r), k = (C) => m + j(C), y = (C) => {
    const V = j(C), S = k(C);
    p.done = Math.abs(V) <= d, p.value = p.done ? m : S;
  };
  let M, v;
  const w = (C) => {
    f(p.value) && (M = C, v = Bn({
      keyframes: [p.value, x(p.value)],
      velocity: Na(k, C, p.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: d,
      restSpeed: u
    }));
  };
  return w(0), {
    calculatedDuration: null,
    next: (C) => {
      let V = !1;
      return !v && M === void 0 && (V = !0, y(C), w(C)), M !== void 0 && C >= M ? v.next(C - M) : (!V && y(C), p);
    }
  };
}
function $4(e, t, n) {
  const r = [], o = n || We.mix || Ma, i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let c = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Be : t;
      c = hn(l, c);
    }
    r.push(c);
  }
  return r;
}
function R4(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (Qe(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const a = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const c = $4(t, r, o), l = c.length, d = (u) => {
    if (a && u < e[0])
      return t[0];
    let h = 0;
    if (l > 1)
      for (; h < e.length - 2 && !(u < e[h + 1]); h++)
        ;
    const p = /* @__PURE__ */ nn(e[h], e[h + 1], u);
    return c[h](p);
  };
  return n ? (u) => d(Je(e[0], e[i - 1], u)) : d;
}
function A4(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ nn(0, t, r);
    e.push(fe(n, 1, o));
  }
}
function I4(e) {
  const t = [0];
  return A4(t, e.length - 1), t;
}
function E4(e, t) {
  return e.map((n) => n * t);
}
function P4(e, t) {
  return e.map(() => t || ma).splice(0, e.length - 1);
}
function yt({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = X1(r) ? r.map(po) : po(r), i = {
    done: !1,
    value: t[0]
  }, a = E4(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : I4(t),
    e
  ), c = R4(a, t, {
    ease: Array.isArray(o) ? o : P4(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = c(l), i.done = l >= e, i)
  };
}
const H4 = (e) => e !== null;
function Ls(e, { repeat: t, repeatType: n = "loop" }, r, o = 1) {
  const i = e.filter(H4), c = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !c || r === void 0 ? i[c] : r;
}
const D4 = {
  decay: Rr,
  inertia: Rr,
  tween: yt,
  keyframes: yt,
  spring: Bn
};
function Sa(e) {
  typeof e.type == "string" && (e.type = D4[e.type]);
}
class ws {
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
const B4 = (e) => e / 100;
class ys extends ws {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var r, o;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Ie.now() && this.tick(Ie.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (o = (r = this.options).onStop) == null || o.call(r));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Sa(t);
    const { type: n = yt, repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: a = 0 } = t;
    let { keyframes: c } = t;
    const l = n || yt;
    process.env.NODE_ENV !== "production" && l !== yt && Qe(c.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${c}`), l !== yt && typeof c[0] != "number" && (this.mixKeyframes = hn(B4, Ma(c[0], c[1])), c = [0, 100]);
    const d = l({ ...t, keyframes: c });
    i === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...c].reverse(),
      velocity: -a
    })), d.calculatedDuration === null && (d.calculatedDuration = ks(d));
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
    const { delay: d = 0, keyframes: u, repeat: h, repeatType: p, repeatDelay: f, type: x, onUpdate: g, finalKeyframe: L } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const m = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), j = this.playbackSpeed >= 0 ? m < 0 : m > o;
    this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let k = this.currentTime, y = r;
    if (h) {
      const C = Math.min(this.currentTime, o) / c;
      let V = Math.floor(C), S = C % 1;
      !S && C >= 1 && (S = 1), S === 1 && V--, V = Math.min(V, h + 1), !!(V % 2) && (p === "reverse" ? (S = 1 - S, f && (S -= f / c)) : p === "mirror" && (y = a)), k = Je(0, 1, S) * c;
    }
    const M = j ? { done: !1, value: u[0] } : y.next(k);
    i && (M.value = i(M.value));
    let { done: v } = M;
    !j && l !== null && (v = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const w = this.holdTime === null && (this.state === "finished" || this.state === "running" && v);
    return w && x !== Rr && (M.value = Ls(u, this.options, L, this.speed)), g && g(M.value), w && this.finish(), M;
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
    return /* @__PURE__ */ Ge(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ Ge(this.currentTime);
  }
  set time(t) {
    var n;
    t = /* @__PURE__ */ Ye(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Ie.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ Ge(this.currentTime));
  }
  play() {
    var o, i;
    if (this.isStopped)
      return;
    const { driver: t = w4, startTime: n } = this.options;
    this.driver || (this.driver = t((a) => this.tick(a))), (i = (o = this.options).onPlay) == null || i.call(o);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ie.now()), this.holdTime = this.currentTime;
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
function F4(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const dt = (e) => e * 180 / Math.PI, Ar = (e) => {
  const t = dt(Math.atan2(e[1], e[0]));
  return Ir(t);
}, O4 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Ar,
  rotateZ: Ar,
  skewX: (e) => dt(Math.atan(e[1])),
  skewY: (e) => dt(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Ir = (e) => (e = e % 360, e < 0 && (e += 360), e), ko = Ar, Lo = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), wo = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), _4 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Lo,
  scaleY: wo,
  scale: (e) => (Lo(e) + wo(e)) / 2,
  rotateX: (e) => Ir(dt(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Ir(dt(Math.atan2(-e[2], e[0]))),
  rotateZ: ko,
  rotate: ko,
  skewX: (e) => dt(Math.atan(e[4])),
  skewY: (e) => dt(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Er(e) {
  return e.includes("scale") ? 1 : 0;
}
function Pr(e, t) {
  if (!e || e === "none")
    return Er(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n)
    r = _4, o = n;
  else {
    const c = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = O4, o = c;
  }
  if (!o)
    return Er(t);
  const i = r[t], a = o[1].split(",").map(Z4);
  return typeof i == "function" ? i(a) : a[i];
}
const Y4 = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Pr(n, t);
};
function Z4(e) {
  return parseFloat(e.trim());
}
const Ft = [
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
], Ot = new Set(Ft), yo = (e) => e === Bt || e === W, U4 = /* @__PURE__ */ new Set(["x", "y", "z"]), K4 = Ft.filter((e) => !U4.has(e));
function G4(e) {
  const t = [];
  return K4.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const ht = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => Pr(t, "x"),
  y: (e, { transform: t }) => Pr(t, "y")
};
ht.translateX = ht.x;
ht.translateY = ht.y;
const pt = /* @__PURE__ */ new Set();
let Hr = !1, Dr = !1, Br = !1;
function Va() {
  if (Dr) {
    const e = Array.from(pt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = G4(r);
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
  Dr = !1, Hr = !1, pt.forEach((e) => e.complete(Br)), pt.clear();
}
function Ta() {
  pt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Dr = !0);
  });
}
function X4() {
  Br = !0, Ta(), Va(), Br = !1;
}
class Cs {
  constructor(t, n, r, o, i, a = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = a;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (pt.add(this), Hr || (Hr = !0, he.read(Ta), he.resolveKeyframes(Va))) : (this.readKeyframes(), this.complete());
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
    F4(t);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), pt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (pt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const q4 = (e) => e.startsWith("--");
function z4(e, t, n) {
  q4(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const J4 = /* @__PURE__ */ ds(() => window.ScrollTimeline !== void 0), Q4 = {};
function W4(e, t) {
  const n = /* @__PURE__ */ ds(e);
  return () => Q4[t] ?? n();
}
const $a = /* @__PURE__ */ W4(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), qt = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Co = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ qt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ qt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ qt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ qt([0.33, 1.53, 0.69, 0.99])
};
function Ra(e, t) {
  if (e)
    return typeof e == "function" ? $a() ? ba(e, t) : "ease-out" : ga(e) ? qt(e) : Array.isArray(e) ? e.map((n) => Ra(n, t) || Co.easeOut) : Co[e];
}
function e2(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: a = "loop", ease: c = "easeOut", times: l } = {}, d = void 0) {
  const u = {
    [t]: n
  };
  l && (u.offset = l);
  const h = Ra(c, o);
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
function Aa(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function t2({ type: e, ...t }) {
  return Aa(e) && $a() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class n2 extends ws {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: o, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: c, onComplete: l } = t;
    this.isPseudoElement = !!i, this.allowFlatten = a, this.options = t, Qe(typeof t.type != "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
    const d = t2(t);
    this.animation = e2(n, r, o, d, i), d.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !i) {
        const u = Ls(o, this.options, c, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : z4(n, r, u), this.animation.cancel();
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
    return /* @__PURE__ */ Ge(Number(t));
  }
  get time() {
    return /* @__PURE__ */ Ge(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Ye(t);
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
    return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && J4() ? (this.animation.timeline = t, Be) : n(this);
  }
}
const Ia = {
  anticipate: ha,
  backInOut: ua,
  circInOut: fa
};
function r2(e) {
  return e in Ia;
}
function s2(e) {
  typeof e.ease == "string" && r2(e.ease) && (e.ease = Ia[e.ease]);
}
const Mo = 10;
class o2 extends n2 {
  constructor(t) {
    s2(t), Sa(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
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
    const c = new ys({
      ...a,
      autoplay: !1
    }), l = /* @__PURE__ */ Ye(this.finishedTime ?? this.time);
    n.setWithVelocity(c.sample(l - Mo).value, c.sample(l).value, Mo), c.stop();
  }
}
const bo = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(rt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function i2(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function a2(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], a = bo(o, t), c = bo(i, t);
  return Dt(a === c, `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`), !a || !c ? !1 : i2(e) || (n === "spring" || Aa(n)) && r;
}
function Ms(e) {
  return sa(e) && "offsetHeight" in e;
}
const c2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), l2 = /* @__PURE__ */ ds(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function d2(e) {
  var d;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: o, damping: i, type: a } = e;
  if (!Ms((d = t == null ? void 0 : t.owner) == null ? void 0 : d.current))
    return !1;
  const { onUpdate: c, transformTemplate: l } = t.owner.getProps();
  return l2() && n && c2.has(n) && (n !== "transform" || !l) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !r && o !== "mirror" && i !== 0 && a !== "inertia";
}
const u2 = 40;
class h2 extends ws {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: c, name: l, motionValue: d, element: u, ...h }) {
    var x;
    super(), this.stop = () => {
      var g, L;
      this._animation && (this._animation.stop(), (g = this.stopTimeline) == null || g.call(this)), (L = this.keyframeResolver) == null || L.cancel();
    }, this.createdAt = Ie.now();
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
    }, f = (u == null ? void 0 : u.KeyframeResolver) || Cs;
    this.keyframeResolver = new f(c, (g, L, m) => this.onKeyframesResolved(g, L, p, !m), l, d, u), (x = this.keyframeResolver) == null || x.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, o) {
    this.keyframeResolver = void 0;
    const { name: i, type: a, velocity: c, delay: l, isHandoff: d, onUpdate: u } = r;
    this.resolvedAt = Ie.now(), a2(t, i, a, c) || ((We.instantAnimations || !l) && (u == null || u(Ls(t, r, n))), t[0] = t[t.length - 1], r.duration = 0, r.repeat = 0);
    const p = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > u2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, f = !d && d2(p) ? new o2({
      ...p,
      element: p.motionValue.owner.current
    }) : new ys(p);
    f.finished.then(() => this.notifyFinished()).catch(Be), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
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
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), X4()), this._animation;
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
const p2 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function f2(e) {
  const t = p2.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const m2 = 4;
function Ea(e, t, n = 1) {
  Qe(n <= m2, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = f2(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return ra(a) ? parseFloat(a) : a;
  }
  return gs(o) ? Ea(o, t, n + 1) : o;
}
function bs(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Pa = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ft
]), g2 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Ha = (e) => (t) => t.test(e), Da = [Bt, W, Xe, et, i4, o4, g2], No = (e) => Da.find(Ha(e));
function x2(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || oa(e) : !0;
}
const v2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function j2(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(xs) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = v2.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const k2 = /\b([a-z-]*)\(.*?\)/gu, Fr = {
  ...rt,
  getAnimatableNone: (e) => {
    const t = e.match(k2);
    return t ? t.map(j2).join(" ") : e;
  }
}, So = {
  ...Bt,
  transform: Math.round
}, L2 = {
  rotate: et,
  rotateX: et,
  rotateY: et,
  rotateZ: et,
  scale: kn,
  scaleX: kn,
  scaleY: kn,
  scaleZ: kn,
  skew: et,
  skewX: et,
  skewY: et,
  distance: W,
  translateX: W,
  translateY: W,
  translateZ: W,
  x: W,
  y: W,
  z: W,
  perspective: W,
  transformPerspective: W,
  opacity: rn,
  originX: mo,
  originY: mo,
  originZ: W
}, Ns = {
  // Border props
  borderWidth: W,
  borderTopWidth: W,
  borderRightWidth: W,
  borderBottomWidth: W,
  borderLeftWidth: W,
  borderRadius: W,
  radius: W,
  borderTopLeftRadius: W,
  borderTopRightRadius: W,
  borderBottomRightRadius: W,
  borderBottomLeftRadius: W,
  // Positioning props
  width: W,
  maxWidth: W,
  height: W,
  maxHeight: W,
  top: W,
  right: W,
  bottom: W,
  left: W,
  // Spacing props
  padding: W,
  paddingTop: W,
  paddingRight: W,
  paddingBottom: W,
  paddingLeft: W,
  margin: W,
  marginTop: W,
  marginRight: W,
  marginBottom: W,
  marginLeft: W,
  // Misc
  backgroundPositionX: W,
  backgroundPositionY: W,
  ...L2,
  zIndex: So,
  // SVG
  fillOpacity: rn,
  strokeOpacity: rn,
  numOctaves: So
}, w2 = {
  ...Ns,
  // Color props
  color: je,
  backgroundColor: je,
  outlineColor: je,
  fill: je,
  stroke: je,
  // Border props
  borderColor: je,
  borderTopColor: je,
  borderRightColor: je,
  borderBottomColor: je,
  borderLeftColor: je,
  filter: Fr,
  WebkitFilter: Fr
}, Ba = (e) => w2[e];
function Fa(e, t) {
  let n = Ba(e);
  return n !== Fr && (n = rt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const y2 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function C2(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !y2.has(i) && sn(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = Fa(n, o);
}
class M2 extends Cs {
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
      if (typeof d == "string" && (d = d.trim(), gs(d))) {
        const u = Ea(d, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !Pa.has(r) || t.length !== 2)
      return;
    const [o, i] = t, a = No(o), c = No(i);
    if (a !== c)
      if (yo(a) && yo(c))
        for (let l = 0; l < t.length; l++) {
          const d = t[l];
          typeof d == "string" && (t[l] = parseFloat(d));
        }
      else ht[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      (t[o] === null || x2(t[o])) && r.push(o);
    r.length && C2(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ht[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    r[i] = ht[n](t.measureViewportBox(), window.getComputedStyle(t.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), (c = this.removedTransforms) != null && c.length && this.removedTransforms.forEach(([l, d]) => {
      t.getValue(l).set(d);
    }), this.resolveNoneKeyframes();
  }
}
function b2(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const o = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
const Oa = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Vo = 30, N2 = (e) => !isNaN(parseFloat(e));
class S2 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      var a, c;
      const i = Ie.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((a = this.events.change) == null || a.notify(this.current), this.dependents))
        for (const l of this.dependents)
          l.dirty();
      o && ((c = this.events.renderRequest) == null || c.notify(this.current));
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ie.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = N2(this.current));
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
    return process.env.NODE_ENV !== "production" && hs(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new us());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), he.read(() => {
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
    const t = Ie.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Vo)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Vo);
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
function St(e, t) {
  return new S2(e, t);
}
const { schedule: Ss } = /* @__PURE__ */ xa(queueMicrotask, !1), _e = {
  x: !1,
  y: !1
};
function _a() {
  return _e.x || _e.y;
}
function V2(e) {
  return e === "x" || e === "y" ? _e[e] ? null : (_e[e] = !0, () => {
    _e[e] = !1;
  }) : _e.x || _e.y ? null : (_e.x = _e.y = !0, () => {
    _e.x = _e.y = !1;
  });
}
function Ya(e, t) {
  const n = b2(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function To(e) {
  return !(e.pointerType === "touch" || _a());
}
function T2(e, t, n = {}) {
  const [r, o, i] = Ya(e, n), a = (c) => {
    if (!To(c))
      return;
    const { target: l } = c, d = t(l, c);
    if (typeof d != "function" || !l)
      return;
    const u = (h) => {
      To(h) && (d(h), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, o);
  };
  return r.forEach((c) => {
    c.addEventListener("pointerenter", a, o);
  }), i;
}
const Za = (e, t) => t ? e === t ? !0 : Za(e, t.parentElement) : !1, Vs = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, $2 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function R2(e) {
  return $2.has(e.tagName) || e.tabIndex !== -1;
}
const Sn = /* @__PURE__ */ new WeakSet();
function $o(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function mr(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const A2 = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = $o(() => {
    if (Sn.has(n))
      return;
    mr(n, "down");
    const o = $o(() => {
      mr(n, "up");
    }), i = () => mr(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Ro(e) {
  return Vs(e) && !_a();
}
function I2(e, t, n = {}) {
  const [r, o, i] = Ya(e, n), a = (c) => {
    const l = c.currentTarget;
    if (!Ro(c))
      return;
    Sn.add(l);
    const d = t(l, c), u = (f, x) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", p), Sn.has(l) && Sn.delete(l), Ro(f) && typeof d == "function" && d(f, { success: x });
    }, h = (f) => {
      u(f, l === window || l === document || n.useGlobalTarget || Za(l, f.target));
    }, p = (f) => {
      u(f, !1);
    };
    window.addEventListener("pointerup", h, o), window.addEventListener("pointercancel", p, o);
  };
  return r.forEach((c) => {
    (n.useGlobalTarget ? window : c).addEventListener("pointerdown", a, o), Ms(c) && (c.addEventListener("focus", (d) => A2(d, o)), !R2(c) && !c.hasAttribute("tabindex") && (c.tabIndex = 0));
  }), i;
}
function Ua(e) {
  return sa(e) && "ownerSVGElement" in e;
}
function E2(e) {
  return Ua(e) && e.tagName === "svg";
}
const Se = (e) => !!(e && e.getVelocity), P2 = [...Da, je, rt], H2 = (e) => P2.find(Ha(e)), Ts = Ht({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class D2 extends rs.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, o = Ms(r) && r.offsetWidth || 0, i = this.props.sizeRef.current;
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
function B2({ children: e, isPresent: t, anchorX: n, root: r }) {
  const o = ss(), i = J(null), a = J({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: c } = Me(Ts);
  return Qi(() => {
    const { width: l, height: d, top: u, left: h, right: p } = a.current;
    if (t || !i.current || !l || !d)
      return;
    const f = n === "left" ? `left: ${h}` : `right: ${p}`;
    i.current.dataset.motionPopId = o;
    const x = document.createElement("style");
    c && (x.nonce = c);
    const g = r ?? document.head;
    return g.appendChild(x), x.sheet && x.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${d}px !important;
            ${f}px !important;
            top: ${u}px !important;
          }
        `), () => {
      g.removeChild(x), g.contains(x) && g.removeChild(x);
    };
  }, [t]), s.jsx(D2, { isPresent: t, childRef: i, sizeRef: a, children: rs.cloneElement(e, { ref: i }) });
}
const F2 = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a, anchorX: c, root: l }) => {
  const d = is(O2), u = ss();
  let h = !0, p = X(() => (h = !1, {
    id: u,
    initial: t,
    isPresent: n,
    custom: o,
    onExitComplete: (f) => {
      d.set(f, !0);
      for (const x of d.values())
        if (!x)
          return;
      r && r();
    },
    register: (f) => (d.set(f, !1), () => d.delete(f))
  }), [n, d, r]);
  return i && h && (p = { ...p }), X(() => {
    d.forEach((f, x) => d.set(x, !1));
  }, [n]), rs.useEffect(() => {
    !n && !d.size && r && r();
  }, [n]), a === "popLayout" && (e = s.jsx(B2, { isPresent: n, anchorX: c, root: l, children: e })), s.jsx(Kn.Provider, { value: p, children: e });
};
function O2() {
  return /* @__PURE__ */ new Map();
}
function Ka(e = !0) {
  const t = Me(Kn);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, i = ss();
  K(() => {
    if (e)
      return o(i);
  }, [e]);
  const a = _(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, a] : [!0];
}
const Ln = (e) => e.key || "";
function Ao(e) {
  const t = [];
  return Bl.forEach(e, (n) => {
    Fl(n) && t.push(n);
  }), t;
}
const _2 = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: i = "sync", propagate: a = !1, anchorX: c = "left", root: l }) => {
  const [d, u] = Ka(a), h = X(() => Ao(e), [e]), p = a && !d ? [] : h.map(Ln), f = J(!0), x = J(h), g = is(() => /* @__PURE__ */ new Map()), [L, m] = F(h), [j, k] = F(h);
  na(() => {
    f.current = !1, x.current = h;
    for (let v = 0; v < j.length; v++) {
      const w = Ln(j[v]);
      p.includes(w) ? g.delete(w) : g.get(w) !== !0 && g.set(w, !1);
    }
  }, [j, p.length, p.join("-")]);
  const y = [];
  if (h !== L) {
    let v = [...h];
    for (let w = 0; w < j.length; w++) {
      const C = j[w], V = Ln(C);
      p.includes(V) || (v.splice(w, 0, C), y.push(C));
    }
    return i === "wait" && y.length && (v = y), k(Ao(v)), m(h), null;
  }
  process.env.NODE_ENV !== "production" && i === "wait" && j.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: M } = Me(os);
  return s.jsx(s.Fragment, { children: j.map((v) => {
    const w = Ln(v), C = a && !d ? !1 : h === j || p.includes(w), V = () => {
      if (g.has(w))
        g.set(w, !0);
      else
        return;
      let S = !0;
      g.forEach((H) => {
        H || (S = !1);
      }), S && (M == null || M(), k(x.current), a && (u == null || u()), r && r());
    };
    return s.jsx(F2, { isPresent: C, initial: !f.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: o, mode: i, root: l, onExitComplete: C ? void 0 : V, anchorX: c, children: v }, w);
  }) });
}, Ga = Ht({ strict: !1 }), Io = {
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
for (const e in Io)
  Vt[e] = {
    isEnabled: (t) => Io[e].some((n) => !!t[n])
  };
function Y2(e) {
  for (const t in e)
    Vt[t] = {
      ...Vt[t],
      ...e[t]
    };
}
const Z2 = /* @__PURE__ */ new Set([
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
function Fn(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Z2.has(e);
}
let Xa = (e) => !Fn(e);
function U2(e) {
  typeof e == "function" && (Xa = (t) => t.startsWith("on") ? !Fn(t) : e(t));
}
try {
  U2(require("@emotion/is-prop-valid").default);
} catch {
}
function K2(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Xa(o) || n === !0 && Fn(o) || !t && !Fn(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function G2(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && hs(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
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
function Xn(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function on(e) {
  return typeof e == "string" || Array.isArray(e);
}
const $s = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Rs = ["initial", ...$s];
function qn(e) {
  return Xn(e.animate) || Rs.some((t) => on(e[t]));
}
function qa(e) {
  return !!(qn(e) || e.variants);
}
function X2(e, t) {
  if (qn(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || on(n) ? n : void 0,
      animate: on(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function q2(e) {
  const { initial: t, animate: n } = X2(e, Me(Gn));
  return X(() => ({ initial: t, animate: n }), [Eo(t), Eo(n)]);
}
function Eo(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const z2 = Symbol.for("motionComponentSymbol");
function Ct(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function J2(e, t, n) {
  return _(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ct(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const As = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Q2 = "framerAppearId", za = "data-" + As(Q2), Ja = Ht({});
function W2(e, t, n, r, o) {
  var g, L;
  const { visualElement: i } = Me(Gn), a = Me(Ga), c = Me(Kn), l = Me(Ts).reducedMotion, d = J(null);
  r = r || a.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const u = d.current, h = Me(Ja);
  u && !u.projection && o && (u.type === "html" || u.type === "svg") && ep(d.current, n, o, h);
  const p = J(!1);
  Qi(() => {
    u && p.current && u.update(n, c);
  });
  const f = n[za], x = J(!!f && !((g = window.MotionHandoffIsComplete) != null && g.call(window, f)) && ((L = window.MotionHasOptimisedAnimation) == null ? void 0 : L.call(window, f)));
  return na(() => {
    u && (p.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), Ss.render(u.render), x.current && u.animationState && u.animationState.animateChanges());
  }), K(() => {
    u && (!x.current && u.animationState && u.animationState.animateChanges(), x.current && (queueMicrotask(() => {
      var m;
      (m = window.MotionHandoffMarkAsComplete) == null || m.call(window, f);
    }), x.current = !1));
  }), u;
}
function ep(e, t, n, r) {
  const { layoutId: o, layout: i, drag: a, dragConstraints: c, layoutScroll: l, layoutRoot: d, layoutCrossfade: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Qa(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: !!a || c && Ct(c),
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
function tp({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && Y2(e);
  function i(c, l) {
    let d;
    const u = {
      ...Me(Ts),
      ...c,
      layoutId: np(c)
    }, { isStatic: h } = u, p = q2(c), f = r(c, h);
    if (!h && as) {
      rp(u, e);
      const x = sp(u);
      d = x.MeasureLayout, p.visualElement = W2(o, f, u, t, x.ProjectionNode);
    }
    return s.jsxs(Gn.Provider, { value: p, children: [d && p.visualElement ? s.jsx(d, { visualElement: p.visualElement, ...u }) : null, n(o, c, J2(f, p.visualElement, l), f, h, p.visualElement)] });
  }
  i.displayName = `motion.${typeof o == "string" ? o : `create(${o.displayName ?? o.name ?? ""})`}`;
  const a = Wi(i);
  return a[z2] = o, a;
}
function np({ layoutId: e }) {
  const t = Me(os).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function rp(e, t) {
  const n = Me(Ga).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Dt(!1, r) : Qe(!1, r);
  }
}
function sp(e) {
  const { drag: t, layout: n } = Vt;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const an = {};
function op(e) {
  for (const t in e)
    an[t] = e[t], ms(t) && (an[t].isCSSVariable = !0);
}
function Wa(e, { layout: t, layoutId: n }) {
  return Ot.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!an[e] || e === "opacity");
}
const ip = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ap = Ft.length;
function cp(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < ap; i++) {
    const a = Ft[i], c = e[a];
    if (c === void 0)
      continue;
    let l = !0;
    if (typeof c == "number" ? l = c === (a.startsWith("scale") ? 1 : 0) : l = parseFloat(c) === 0, !l || n) {
      const d = Oa(c, Ns[a]);
      if (!l) {
        o = !1;
        const u = ip[a] || a;
        r += `${u}(${d}) `;
      }
      n && (t[a] = d);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Is(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let a = !1, c = !1;
  for (const l in t) {
    const d = t[l];
    if (Ot.has(l)) {
      a = !0;
      continue;
    } else if (ms(l)) {
      o[l] = d;
      continue;
    } else {
      const u = Oa(d, Ns[l]);
      l.startsWith("origin") ? (c = !0, i[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (a || n ? r.transform = cp(t, e.transform, n) : r.transform && (r.transform = "none")), c) {
    const { originX: l = "50%", originY: d = "50%", originZ: u = 0 } = i;
    r.transformOrigin = `${l} ${d} ${u}`;
  }
}
const Es = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ec(e, t, n) {
  for (const r in t)
    !Se(t[r]) && !Wa(r, n) && (e[r] = t[r]);
}
function lp({ transformTemplate: e }, t) {
  return X(() => {
    const n = Es();
    return Is(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function dp(e, t) {
  const n = e.style || {}, r = {};
  return ec(r, n, e), Object.assign(r, lp(e, t)), r;
}
function up(e, t) {
  const n = {}, r = dp(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const hp = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, pp = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function fp(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? hp : pp;
  e[i.offset] = W.transform(-r);
  const a = W.transform(t), c = W.transform(n);
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
  if (Is(e, c, d), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: p } = e;
  h.transform && (p.transform = h.transform, delete h.transform), (p.transform || h.transformOrigin) && (p.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), p.transform && (p.transformBox = (u == null ? void 0 : u.transformBox) ?? "fill-box", delete h.transformBox), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), o !== void 0 && fp(h, o, i, a, !1);
}
const nc = () => ({
  ...Es(),
  attrs: {}
}), rc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function mp(e, t, n, r) {
  const o = X(() => {
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
const gp = [
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
function Ps(e) {
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
      !!(gp.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function xp(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Ps(n) ? mp : up)(r, i, a, n), d = K2(r, typeof n == "string", e), u = n !== un ? { ...d, ...l, ref: o } : {}, { children: h } = r, p = X(() => Se(h) ? h.get() : h, [h]);
    return ea(n, {
      ...u,
      children: p
    });
  };
}
function Po(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Hs(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = Po(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = Po(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function Vn(e) {
  return Se(e) ? e.get() : e;
}
function vp({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, o) {
  return {
    latestValues: jp(n, r, o, e),
    renderState: t()
  };
}
const sc = (e) => (t, n) => {
  const r = Me(Gn), o = Me(Kn), i = () => vp(e, t, r, o);
  return n ? i() : is(i);
};
function jp(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const p in i)
    o[p] = Vn(i[p]);
  let { initial: a, animate: c } = e;
  const l = qn(e), d = qa(e);
  t && d && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), c === void 0 && (c = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || a === !1;
  const h = u ? c : a;
  if (h && typeof h != "boolean" && !Xn(h)) {
    const p = Array.isArray(h) ? h : [h];
    for (let f = 0; f < p.length; f++) {
      const x = Hs(e, p[f]);
      if (x) {
        const { transitionEnd: g, transition: L, ...m } = x;
        for (const j in m) {
          let k = m[j];
          if (Array.isArray(k)) {
            const y = u ? k.length - 1 : 0;
            k = k[y];
          }
          k !== null && (o[j] = k);
        }
        for (const j in g)
          o[j] = g[j];
      }
    }
  }
  return o;
}
function Ds(e, t, n) {
  var i;
  const { style: r } = e, o = {};
  for (const a in r)
    (Se(r[a]) || t.style && Se(t.style[a]) || Wa(a, e) || ((i = n == null ? void 0 : n.getValue(a)) == null ? void 0 : i.liveStyle) !== void 0) && (o[a] = r[a]);
  return o;
}
const kp = {
  useVisualState: sc({
    scrapeMotionValuesFromProps: Ds,
    createRenderState: Es
  })
};
function oc(e, t, n) {
  const r = Ds(e, t, n);
  for (const o in e)
    if (Se(e[o]) || Se(t[o])) {
      const i = Ft.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
const Lp = {
  useVisualState: sc({
    scrapeMotionValuesFromProps: oc,
    createRenderState: nc
  })
};
function wp(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const a = {
      ...Ps(r) ? Lp : kp,
      preloadedFeatures: e,
      useRender: xp(o),
      createVisualElement: t,
      Component: r
    };
    return tp(a);
  };
}
function cn(e, t, n) {
  const r = e.getProps();
  return Hs(r, t, n !== void 0 ? n : r.custom, e);
}
const Or = (e) => Array.isArray(e);
function yp(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, St(n));
}
function Cp(e) {
  return Or(e) ? e[e.length - 1] || 0 : e;
}
function Mp(e, t) {
  const n = cn(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const a in i) {
    const c = Cp(i[a]);
    yp(e, a, c);
  }
}
function bp(e) {
  return !!(Se(e) && e.add);
}
function _r(e, t) {
  const n = e.getValue("willChange");
  if (bp(n))
    return n.add(t);
  if (!n && We.WillChange) {
    const r = new We.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function ic(e) {
  return e.props[za];
}
const Np = (e) => e !== null;
function Sp(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(Np), i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return o[i];
}
const Vp = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Tp = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), $p = {
  type: "keyframes",
  duration: 0.8
}, Rp = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Ap = (e, { keyframes: t }) => t.length > 2 ? $p : Ot.has(e) ? e.startsWith("scale") ? Tp(t[1]) : Vp : Rp;
function Ip({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: c, from: l, elapsed: d, ...u }) {
  return !!Object.keys(u).length;
}
const Bs = (e, t, n, r = {}, o, i) => (a) => {
  const c = bs(r, e) || {}, l = c.delay || r.delay || 0;
  let { elapsed: d = 0 } = r;
  d = d - /* @__PURE__ */ Ye(l);
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
  Ip(c) || Object.assign(u, Ap(e, u)), u.duration && (u.duration = /* @__PURE__ */ Ye(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Ye(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let h = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (h = !0)), (We.instantAnimations || We.skipAnimations) && (h = !0, u.duration = 0, u.delay = 0), u.allowFlatten = !c.type && !c.ease, h && !i && t.get() !== void 0) {
    const p = Sp(u.keyframes, c);
    if (p !== void 0) {
      he.update(() => {
        u.onUpdate(p), u.onComplete();
      });
      return;
    }
  }
  return c.isSync ? new ys(u) : new h2(u);
};
function Ep({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function ac(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...c } = t;
  r && (i = r);
  const l = [], d = o && e.animationState && e.animationState.getState()[o];
  for (const u in c) {
    const h = e.getValue(u, e.latestValues[u] ?? null), p = c[u];
    if (p === void 0 || d && Ep(d, u))
      continue;
    const f = {
      delay: n,
      ...bs(i || {}, u)
    }, x = h.get();
    if (x !== void 0 && !h.isAnimating && !Array.isArray(p) && p === x && !f.velocity)
      continue;
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const m = ic(e);
      if (m) {
        const j = window.MotionHandoffAnimation(m, u, he);
        j !== null && (f.startTime = j, g = !0);
      }
    }
    _r(e, u), h.start(Bs(u, h, p, e.shouldReduceMotion && Pa.has(u) ? { type: !1 } : f, e, g));
    const L = h.animation;
    L && l.push(L);
  }
  return a && Promise.all(l).then(() => {
    he.update(() => {
      a && Mp(e, a);
    });
  }), l;
}
function Yr(e, t, n = {}) {
  var l;
  const r = cn(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(ac(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (d = 0) => {
    const { delayChildren: u = 0, staggerChildren: h, staggerDirection: p } = o;
    return Pp(e, t, d, u, h, p, n);
  } : () => Promise.resolve(), { when: c } = o;
  if (c) {
    const [d, u] = c === "beforeChildren" ? [i, a] : [a, i];
    return d().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function Pp(e, t, n = 0, r = 0, o = 0, i = 1, a) {
  const c = [], l = e.variantChildren.size, d = (l - 1) * o, u = typeof r == "function", h = u ? (p) => r(p, l) : (
    // Support deprecated staggerChildren
    i === 1 ? (p = 0) => p * o : (p = 0) => d - p * o
  );
  return Array.from(e.variantChildren).sort(Hp).forEach((p, f) => {
    p.notify("AnimationStart", t), c.push(Yr(p, t, {
      ...a,
      delay: n + (u ? 0 : r) + h(f)
    }).then(() => p.notify("AnimationComplete", t)));
  }), Promise.all(c);
}
function Hp(e, t) {
  return e.sortNodePosition(t);
}
function Dp(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Yr(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Yr(e, t, n);
  else {
    const o = typeof t == "function" ? cn(e, t, n.custom) : t;
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
const Bp = Rs.length;
function lc(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? lc(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Bp; n++) {
    const r = Rs[n], o = e.props[r];
    (on(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const Fp = [...$s].reverse(), Op = $s.length;
function _p(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Dp(e, n, r)));
}
function Yp(e) {
  let t = _p(e), n = Ho(), r = !0;
  const o = (l) => (d, u) => {
    var p;
    const h = cn(e, u, l === "exit" ? (p = e.presenceContext) == null ? void 0 : p.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: x, ...g } = h;
      d = { ...d, ...g, ...x };
    }
    return d;
  };
  function i(l) {
    t = l(e);
  }
  function a(l) {
    const { props: d } = e, u = lc(e.parent) || {}, h = [], p = /* @__PURE__ */ new Set();
    let f = {}, x = 1 / 0;
    for (let L = 0; L < Op; L++) {
      const m = Fp[L], j = n[m], k = d[m] !== void 0 ? d[m] : u[m], y = on(k), M = m === l ? j.isActive : null;
      M === !1 && (x = L);
      let v = k === u[m] && k !== d[m] && y;
      if (v && r && e.manuallyAnimateOnMount && (v = !1), j.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !j.isActive && M === null || // If we didn't and don't have any defined prop for this animation type
      !k && !j.prevProp || // Or if the prop doesn't define an animation
      Xn(k) || typeof k == "boolean")
        continue;
      const w = Zp(j.prevProp, k);
      let C = w || // If we're making this variant active, we want to always make it active
      m === l && j.isActive && !v && y || // If we removed a higher-priority variant (i is in reverse order)
      L > x && y, V = !1;
      const S = Array.isArray(k) ? k : [k];
      let H = S.reduce(o(m), {});
      M === !1 && (H = {});
      const { prevResolvedValues: N = {} } = j, R = {
        ...N,
        ...H
      }, $ = (D) => {
        C = !0, p.has(D) && (V = !0, p.delete(D)), j.needsAnimating[D] = !0;
        const q = e.getValue(D);
        q && (q.liveStyle = !1);
      };
      for (const D in R) {
        const q = H[D], T = N[D];
        if (f.hasOwnProperty(D))
          continue;
        let E = !1;
        Or(q) && Or(T) ? E = !cc(q, T) : E = q !== T, E ? q != null ? $(D) : p.add(D) : q !== void 0 && p.has(D) ? $(D) : j.protectedKeys[D] = !0;
      }
      j.prevProp = k, j.prevResolvedValues = H, j.isActive && (f = { ...f, ...H }), r && e.blockInitialAnimation && (C = !1), C && (!(v && w) || V) && h.push(...S.map((D) => ({
        animation: D,
        options: { type: m }
      })));
    }
    if (p.size) {
      const L = {};
      if (typeof d.initial != "boolean") {
        const m = cn(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        m && m.transition && (L.transition = m.transition);
      }
      p.forEach((m) => {
        const j = e.getBaseTarget(m), k = e.getValue(m);
        k && (k.liveStyle = !0), L[m] = j ?? null;
      }), h.push({ animation: L });
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
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = Ho(), r = !0;
    }
  };
}
function Zp(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !cc(t, e) : !1;
}
function it(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ho() {
  return {
    animate: it(!0),
    whileInView: it(),
    whileHover: it(),
    whileTap: it(),
    whileDrag: it(),
    whileFocus: it(),
    exit: it()
  };
}
class st {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class Up extends st {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Yp(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Xn(t) && (this.unmountControls = t.subscribe(this.node));
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
let Kp = 0;
class Gp extends st {
  constructor() {
    super(...arguments), this.id = Kp++;
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
const Xp = {
  animation: {
    Feature: Up
  },
  exit: {
    Feature: Gp
  }
};
function ln(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function mn(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const qp = (e) => (t) => Vs(t) && e(t, mn(t));
function Qt(e, t, n, r) {
  return ln(e, t, qp(n), r);
}
function dc({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function zp({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Jp(e, t) {
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
const uc = 1e-4, Qp = 1 - uc, Wp = 1 + uc, hc = 0.01, ef = 0 - hc, tf = 0 + hc;
function $e(e) {
  return e.max - e.min;
}
function nf(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Do(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = fe(t.min, t.max, e.origin), e.scale = $e(n) / $e(t), e.translate = fe(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Qp && e.scale <= Wp || isNaN(e.scale)) && (e.scale = 1), (e.translate >= ef && e.translate <= tf || isNaN(e.translate)) && (e.translate = 0);
}
function Wt(e, t, n, r) {
  Do(e.x, t.x, n.x, r ? r.originX : void 0), Do(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Bo(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + $e(t);
}
function rf(e, t, n) {
  Bo(e.x, t.x, n.x), Bo(e.y, t.y, n.y);
}
function Fo(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + $e(t);
}
function en(e, t, n) {
  Fo(e.x, t.x, n.x), Fo(e.y, t.y, n.y);
}
const Oo = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Mt = () => ({
  x: Oo(),
  y: Oo()
}), _o = () => ({ min: 0, max: 0 }), xe = () => ({
  x: _o(),
  y: _o()
});
function De(e) {
  return [e("x"), e("y")];
}
function gr(e) {
  return e === void 0 || e === 1;
}
function Zr({ scale: e, scaleX: t, scaleY: n }) {
  return !gr(e) || !gr(t) || !gr(n);
}
function at(e) {
  return Zr(e) || pc(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function pc(e) {
  return Yo(e.x) || Yo(e.y);
}
function Yo(e) {
  return e && e !== "0%";
}
function On(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Zo(e, t, n, r, o) {
  return o !== void 0 && (e = On(e, o, r)), On(e, n, r) + t;
}
function Ur(e, t = 0, n = 1, r, o) {
  e.min = Zo(e.min, t, n, r, o), e.max = Zo(e.max, t, n, r, o);
}
function fc(e, { x: t, y: n }) {
  Ur(e.x, t.translate, t.scale, t.originPoint), Ur(e.y, n.translate, n.scale, n.originPoint);
}
const Uo = 0.999999999999, Ko = 1.0000000000001;
function sf(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let c = 0; c < o; c++) {
    i = n[c], a = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Nt(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, fc(e, a)), r && at(i.latestValues) && Nt(e, i.latestValues));
  }
  t.x < Ko && t.x > Uo && (t.x = 1), t.y < Ko && t.y > Uo && (t.y = 1);
}
function bt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Go(e, t, n, r, o = 0.5) {
  const i = fe(e.min, e.max, o);
  Ur(e, t, n, i, r);
}
function Nt(e, t) {
  Go(e.x, t.x, t.scaleX, t.scale, t.originX), Go(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function mc(e, t) {
  return dc(Jp(e.getBoundingClientRect(), t));
}
function of(e, t, n) {
  const r = mc(e, n), { scroll: o } = t;
  return o && (bt(r.x, o.offset.x), bt(r.y, o.offset.y)), r;
}
const gc = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Xo = (e, t) => Math.abs(e - t);
function af(e, t) {
  const n = Xo(e.x, t.x), r = Xo(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class xc {
  constructor(t, n, { transformPagePoint: r, contextWindow: o = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const p = vr(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, x = af(p.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!f && !x)
        return;
      const { point: g } = p, { timestamp: L } = ye;
      this.history.push({ ...g, timestamp: L });
      const { onStart: m, onMove: j } = this.handlers;
      f || (m && m(this.lastMoveEvent, p), this.startEvent = this.lastMoveEvent), j && j(this.lastMoveEvent, p);
    }, this.handlePointerMove = (p, f) => {
      this.lastMoveEvent = p, this.lastMoveEventInfo = xr(f, this.transformPagePoint), he.update(this.updatePoint, !0);
    }, this.handlePointerUp = (p, f) => {
      this.end();
      const { onEnd: x, onSessionEnd: g, resumeAnimation: L } = this.handlers;
      if (this.dragSnapToOrigin && L && L(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const m = vr(p.type === "pointercancel" ? this.lastMoveEventInfo : xr(f, this.transformPagePoint), this.history);
      this.startEvent && x && x(p, m), g && g(p, m);
    }, !Vs(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = a, this.contextWindow = o || window;
    const c = mn(t), l = xr(c, this.transformPagePoint), { point: d } = l, { timestamp: u } = ye;
    this.history = [{ ...d, timestamp: u }];
    const { onSessionStart: h } = n;
    h && h(t, vr(l, this.history)), this.removeListeners = hn(Qt(this.contextWindow, "pointermove", this.handlePointerMove), Qt(this.contextWindow, "pointerup", this.handlePointerUp), Qt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), nt(this.updatePoint);
  }
}
function xr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function qo(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function vr({ point: e }, t) {
  return {
    point: e,
    delta: qo(e, vc(t)),
    offset: qo(e, cf(t)),
    velocity: lf(t, 0.1)
  };
}
function cf(e) {
  return e[0];
}
function vc(e) {
  return e[e.length - 1];
}
function lf(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = vc(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ Ye(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = /* @__PURE__ */ Ge(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function df(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? fe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)), e;
}
function zo(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function uf(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: zo(e.x, n, o),
    y: zo(e.y, t, r)
  };
}
function Jo(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function hf(e, t) {
  return {
    x: Jo(e.x, t.x),
    y: Jo(e.y, t.y)
  };
}
function pf(e, t) {
  let n = 0.5;
  const r = $e(e), o = $e(t);
  return o > r ? n = /* @__PURE__ */ nn(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ nn(e.min, e.max - o, t.min)), Je(0, 1, n);
}
function ff(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Kr = 0.35;
function mf(e = Kr) {
  return e === !1 ? e = 0 : e === !0 && (e = Kr), {
    x: Qo(e, "left", "right"),
    y: Qo(e, "top", "bottom")
  };
}
function Qo(e, t, n) {
  return {
    min: Wo(e, t),
    max: Wo(e, n)
  };
}
function Wo(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const gf = /* @__PURE__ */ new WeakMap();
class xf {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = xe(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const i = (h) => {
      const { dragSnapToOrigin: p } = this.getProps();
      p ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(mn(h).point);
    }, a = (h, p) => {
      const { drag: f, dragPropagation: x, onDragStart: g } = this.getProps();
      if (f && !x && (this.openDragLock && this.openDragLock(), this.openDragLock = V2(f), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = p, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), De((m) => {
        let j = this.getAxisMotionValue(m).get() || 0;
        if (Xe.test(j)) {
          const { projection: k } = this.visualElement;
          if (k && k.layout) {
            const y = k.layout.layoutBox[m];
            y && (j = $e(y) * (parseFloat(j) / 100));
          }
        }
        this.originPoint[m] = j;
      }), g && he.postRender(() => g(h, p)), _r(this.visualElement, "transform");
      const { animationState: L } = this.visualElement;
      L && L.setActive("whileDrag", !0);
    }, c = (h, p) => {
      this.latestPointerEvent = h, this.latestPanInfo = p;
      const { dragPropagation: f, dragDirectionLock: x, onDirectionLock: g, onDrag: L } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: m } = p;
      if (x && this.currentDirection === null) {
        this.currentDirection = vf(m), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", p.point, m), this.updateAxis("y", p.point, m), this.visualElement.render(), L && L(h, p);
    }, l = (h, p) => {
      this.latestPointerEvent = h, this.latestPanInfo = p, this.stop(h, p), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, d = () => De((h) => {
      var p;
      return this.getAnimationState(h) === "paused" && ((p = this.getAxisMotionValue(h).animation) == null ? void 0 : p.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new xc(t, {
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
    c && he.postRender(() => c(r, o));
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
    this.constraints && this.constraints[t] && (a = df(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, o = this.constraints;
    t && Ct(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = uf(r.layoutBox, t) : this.constraints = !1, this.elastic = mf(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && De((a) => {
      this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = ff(r.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ct(t))
      return !1;
    const r = t.current;
    Qe(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = of(r, o.root, this.visualElement.getTransformPagePoint());
    let a = hf(o.layout.layoutBox, i);
    if (n) {
      const c = n(zp(a));
      this.hasMutatedConstraints = !!c, c && (a = dc(c));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: c } = this.getProps(), l = this.constraints || {}, d = De((u) => {
      if (!wn(u, n, this.currentDirection))
        return;
      let h = l && l[u] || {};
      a && (h = { min: 0, max: 0 });
      const p = o ? 200 : 1e6, f = o ? 40 : 1e7, x = {
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
      return this.startAxisValueAnimation(u, x);
    });
    return Promise.all(d).then(c);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return _r(this.visualElement, t), r.start(Bs(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    De((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    De((t) => {
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
    De((n) => {
      const { drag: r } = this.getProps();
      if (!wn(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: c } = o.layout.layoutBox[n];
        i.set(t[n] - fe(a, c, 0.5));
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
    if (!Ct(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    De((a) => {
      const c = this.getAxisMotionValue(a);
      if (c && this.constraints !== !1) {
        const l = c.get();
        o[a] = pf({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), De((a) => {
      if (!wn(a, t, null))
        return;
      const c = this.getAxisMotionValue(a), { min: l, max: d } = this.constraints[a];
      c.set(fe(l, d, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    gf.set(this.visualElement, this);
    const t = this.visualElement.current, n = Qt(t, "pointerdown", (l) => {
      const { drag: d, dragListener: u = !0 } = this.getProps();
      d && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Ct(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), he.read(r);
    const a = ln(window, "resize", () => this.scalePositionWithinConstraints()), c = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: d }) => {
      this.isDragging && d && (De((u) => {
        const h = this.getAxisMotionValue(u);
        h && (this.originPoint[u] += l[u].translate, h.set(h.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), i(), c && c();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Kr, dragMomentum: c = !0 } = t;
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
function vf(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class jf extends st {
  constructor(t) {
    super(t), this.removeGroupControls = Be, this.removeListeners = Be, this.controls = new xf(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Be;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ei = (e) => (t, n) => {
  e && he.postRender(() => e(t, n));
};
class kf extends st {
  constructor() {
    super(...arguments), this.removePointerDownListener = Be;
  }
  onPointerDown(t) {
    this.session = new xc(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: gc(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: ei(t),
      onStart: ei(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && he.postRender(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Qt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Tn = {
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
function ti(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Xt = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (W.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = ti(e, t.target.x), r = ti(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Lf = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = rt.parse(e);
    if (o.length > 5)
      return r;
    const i = rt.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, c = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + a] /= c, o[1 + a] /= l;
    const d = fe(c, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= d), typeof o[3 + a] == "number" && (o[3 + a] /= d), i(o);
  }
};
let ni = !1;
class wf extends Ol {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    op(yf), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), ni && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Tn.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, { projection: a } = r;
    return a && (a.isPresent = i, ni = !0, o || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || he.postRender(() => {
      const c = a.getStack();
      (!c || !c.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Ss.postRender(() => {
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
function jc(e) {
  const [t, n] = Ka(), r = Me(os);
  return s.jsx(wf, { ...e, layoutGroup: r, switchLayoutGroup: Me(Ja), isPresent: t, safeToRemove: n });
}
const yf = {
  borderRadius: {
    ...Xt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Xt,
  borderTopRightRadius: Xt,
  borderBottomLeftRadius: Xt,
  borderBottomRightRadius: Xt,
  boxShadow: Lf
};
function Cf(e, t, n) {
  const r = Se(e) ? e : St(e);
  return r.start(Bs("", r, t, n)), r.animation;
}
const Mf = (e, t) => e.depth - t.depth;
class bf {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    cs(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    ls(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Mf), this.isDirty = !1, this.children.forEach(t);
  }
}
function Nf(e, t) {
  const n = Ie.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (nt(r), e(i - t));
  };
  return he.setup(r, !0), () => nt(r);
}
const kc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Sf = kc.length, ri = (e) => typeof e == "string" ? parseFloat(e) : e, si = (e) => typeof e == "number" || W.test(e);
function Vf(e, t, n, r, o, i) {
  o ? (e.opacity = fe(0, n.opacity ?? 1, Tf(r)), e.opacityExit = fe(t.opacity ?? 1, 0, $f(r))) : i && (e.opacity = fe(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let a = 0; a < Sf; a++) {
    const c = `border${kc[a]}Radius`;
    let l = oi(t, c), d = oi(n, c);
    if (l === void 0 && d === void 0)
      continue;
    l || (l = 0), d || (d = 0), l === 0 || d === 0 || si(l) === si(d) ? (e[c] = Math.max(fe(ri(l), ri(d), r), 0), (Xe.test(d) || Xe.test(l)) && (e[c] += "%")) : e[c] = d;
  }
  (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r));
}
function oi(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Tf = /* @__PURE__ */ Lc(0, 0.5, pa), $f = /* @__PURE__ */ Lc(0.5, 0.95, Be);
function Lc(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ nn(e, t, r));
}
function ii(e, t) {
  e.min = t.min, e.max = t.max;
}
function He(e, t) {
  ii(e.x, t.x), ii(e.y, t.y);
}
function ai(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function ci(e, t, n, r, o) {
  return e -= t, e = On(e, 1 / n, r), o !== void 0 && (e = On(e, 1 / o, r)), e;
}
function Rf(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (Xe.test(t) && (t = parseFloat(t), t = fe(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let c = fe(i.min, i.max, r);
  e === i && (c -= t), e.min = ci(e.min, t, n, c, o), e.max = ci(e.max, t, n, c, o);
}
function li(e, t, [n, r, o], i, a) {
  Rf(e, t[n], t[r], t[o], t.scale, i, a);
}
const Af = ["x", "scaleX", "originX"], If = ["y", "scaleY", "originY"];
function di(e, t, n, r) {
  li(e.x, t, Af, n ? n.x : void 0, r ? r.x : void 0), li(e.y, t, If, n ? n.y : void 0, r ? r.y : void 0);
}
function ui(e) {
  return e.translate === 0 && e.scale === 1;
}
function wc(e) {
  return ui(e.x) && ui(e.y);
}
function hi(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Ef(e, t) {
  return hi(e.x, t.x) && hi(e.y, t.y);
}
function pi(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function yc(e, t) {
  return pi(e.x, t.x) && pi(e.y, t.y);
}
function fi(e) {
  return $e(e.x) / $e(e.y);
}
function mi(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Pf {
  constructor() {
    this.members = [];
  }
  add(t) {
    cs(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (ls(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function Hf(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, a = (n == null ? void 0 : n.z) || 0;
  if ((o || i || a) && (r = `translate3d(${o}px, ${i}px, ${a}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: d, rotate: u, rotateX: h, rotateY: p, skewX: f, skewY: x } = n;
    d && (r = `perspective(${d}px) ${r}`), u && (r += `rotate(${u}deg) `), h && (r += `rotateX(${h}deg) `), p && (r += `rotateY(${p}deg) `), f && (r += `skewX(${f}deg) `), x && (r += `skewY(${x}deg) `);
  }
  const c = e.x.scale * t.x, l = e.y.scale * t.y;
  return (c !== 1 || l !== 1) && (r += `scale(${c}, ${l})`), r || "none";
}
const jr = ["", "X", "Y", "Z"], Df = 1e3;
let Bf = 0;
function kr(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Cc(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = ic(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", he, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Cc(r);
}
function Mc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, c = t == null ? void 0 : t()) {
      this.id = Bf++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(_f), this.nodes.forEach(Kf), this.nodes.forEach(Gf), this.nodes.forEach(Yf);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = c ? c.root || c : this, this.path = c ? [...c.path, c] : [], this.parent = c, this.depth = c ? c.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new bf());
    }
    addEventListener(a, c) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new us()), this.eventHandlers.get(a).add(c);
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
      this.isSVG = Ua(a) && !E2(a), this.instance = a;
      const { layoutId: c, layout: l, visualElement: d } = this.options;
      if (d && !d.current && d.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || c) && (this.isLayoutDirty = !0), e) {
        let u, h = 0;
        const p = () => this.root.updateBlockedByResize = !1;
        he.read(() => {
          h = window.innerWidth;
        }), e(a, () => {
          const f = window.innerWidth;
          f !== h && (h = f, this.root.updateBlockedByResize = !0, u && u(), u = Nf(p, 250), Tn.hasAnimatedSinceResize && (Tn.hasAnimatedSinceResize = !1, this.nodes.forEach(vi)));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: h, hasRelativeLayoutChanged: p, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const x = this.options.transition || d.getDefaultTransition() || Qf, { onLayoutAnimationStart: g, onLayoutAnimationComplete: L } = d.getProps(), m = !this.targetLayout || !yc(this.targetLayout, f), j = !h && p;
        if (this.options.layoutRoot || this.resumeFrom || j || h && (m || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const k = {
            ...bs(x, "layout"),
            onPlay: g,
            onComplete: L
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k), this.setAnimationOrigin(u, j);
        } else
          h || vi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = f;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), nt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Xf), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Cc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(gi);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(xi);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Uf), this.nodes.forEach(Ff), this.nodes.forEach(Of)) : this.nodes.forEach(xi), this.clearAllSnapshots();
      const c = Ie.now();
      ye.delta = Je(0, 1e3 / 60, c - ye.timestamp), ye.timestamp = c, ye.isProcessing = !0, dr.update.process(ye), dr.preRender.process(ye), dr.render.process(ye), ye.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ss.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Zf), this.sharedNodes.forEach(qf);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, he.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      he.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !$e(this.snapshot.measuredBox.x) && !$e(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = xe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, c = this.projectionDelta && !wc(this.projectionDelta), l = this.getTransformTemplate(), d = l ? l(this.latestValues, "") : void 0, u = d !== this.prevTransformTemplateValue;
      a && this.instance && (c || at(this.latestValues) || u) && (o(this.instance, d), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const c = this.measurePageBox();
      let l = this.removeElementScroll(c);
      return a && (l = this.removeTransform(l)), Wf(l), {
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
        return xe();
      const c = a.measureViewportBox();
      if (!(((d = this.scroll) == null ? void 0 : d.wasRoot) || this.path.some(e0))) {
        const { scroll: u } = this.root;
        u && (bt(c.x, u.offset.x), bt(c.y, u.offset.y));
      }
      return c;
    }
    removeElementScroll(a) {
      var l;
      const c = xe();
      if (He(c, a), (l = this.scroll) != null && l.wasRoot)
        return c;
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d], { scroll: h, options: p } = u;
        u !== this.root && h && p.layoutScroll && (h.wasRoot && He(c, a), bt(c.x, h.offset.x), bt(c.y, h.offset.y));
      }
      return c;
    }
    applyTransform(a, c = !1) {
      const l = xe();
      He(l, a);
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        !c && u.options.layoutScroll && u.scroll && u !== u.root && Nt(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), at(u.latestValues) && Nt(l, u.latestValues);
      }
      return at(this.latestValues) && Nt(l, this.latestValues), l;
    }
    removeTransform(a) {
      const c = xe();
      He(c, a);
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l];
        if (!d.instance || !at(d.latestValues))
          continue;
        Zr(d.latestValues) && d.updateSnapshot();
        const u = xe(), h = d.measurePageBox();
        He(u, h), di(c, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, u);
      }
      return at(this.latestValues) && di(c, this.latestValues), c;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ye.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = ye.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = xe(), this.relativeTargetOrigin = xe(), en(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), He(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = xe(), this.targetWithTransforms = xe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), rf(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : He(this.target, this.layout.layoutBox), fc(this.target, this.targetDelta)) : He(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = xe(), this.relativeTargetOrigin = xe(), en(this.relativeTargetOrigin, this.target, f.target), He(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Zr(this.parent.latestValues) || pc(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var x;
      const a = this.getLead(), c = !!this.resumingFrom || this !== a;
      let l = !0;
      if ((this.isProjectionDirty || (x = this.parent) != null && x.isProjectionDirty) && (l = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === ye.timestamp && (l = !1), l)
        return;
      const { layout: d, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || u))
        return;
      He(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, p = this.treeScale.y;
      sf(this.layoutCorrected, this.treeScale, this.path, c), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = xe());
      const { target: f } = a;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ai(this.prevProjectionDelta.x, this.projectionDelta.x), ai(this.prevProjectionDelta.y, this.projectionDelta.y)), Wt(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== p || !mi(this.projectionDelta.x, this.prevProjectionDelta.x) || !mi(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
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
      this.prevProjectionDelta = Mt(), this.projectionDelta = Mt(), this.projectionDeltaWithTransform = Mt();
    }
    setAnimationOrigin(a, c = !1) {
      const l = this.snapshot, d = l ? l.latestValues : {}, u = { ...this.latestValues }, h = Mt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !c;
      const p = xe(), f = l ? l.source : void 0, x = this.layout ? this.layout.source : void 0, g = f !== x, L = this.getStack(), m = !L || L.members.length <= 1, j = !!(g && !m && this.options.crossfade === !0 && !this.path.some(Jf));
      this.animationProgress = 0;
      let k;
      this.mixTargetDelta = (y) => {
        const M = y / 1e3;
        ji(h.x, a.x, M), ji(h.y, a.y, M), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (en(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), zf(this.relativeTarget, this.relativeTargetOrigin, p, M), k && Ef(this.relativeTarget, k) && (this.isProjectionDirty = !1), k || (k = xe()), He(k, this.relativeTarget)), g && (this.animationValues = u, Vf(u, d, this.latestValues, M, j, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = M;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      var c, l, d;
      this.notifyListeners("animationStart"), (c = this.currentAnimation) == null || c.stop(), (d = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || d.stop(), this.pendingAnimation && (nt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = he.update(() => {
        Tn.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = St(0)), this.currentAnimation = Cf(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Df), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: c, target: l, layout: d, latestValues: u } = a;
      if (!(!c || !l || !d)) {
        if (this !== a && this.layout && d && bc(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
          l = this.target || xe();
          const h = $e(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + h;
          const p = $e(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + p;
        }
        He(c, l), Nt(c, u), Wt(this.projectionDeltaWithTransform, this.layoutCorrected, c, u);
      }
    }
    registerSharedNode(a, c) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new Pf()), this.sharedNodes.get(a).add(c);
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
      l.z && kr("z", a, d, this.animationValues);
      for (let u = 0; u < jr.length; u++)
        kr(`rotate${jr[u]}`, a, d, this.animationValues), kr(`skew${jr[u]}`, a, d, this.animationValues);
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
        this.needsReset = !1, a.visibility = "", a.opacity = "", a.pointerEvents = Vn(c == null ? void 0 : c.pointerEvents) || "", a.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        this.options.layoutId && (a.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, a.pointerEvents = Vn(c == null ? void 0 : c.pointerEvents) || ""), this.hasProjected && !at(this.latestValues) && (a.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      a.visibility = "";
      const u = d.animationValues || d.latestValues;
      this.applyTransformsToTarget();
      let h = Hf(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (h = l(u, h)), a.transform = h;
      const { x: p, y: f } = this.projectionDelta;
      a.transformOrigin = `${p.origin * 100}% ${f.origin * 100}% 0`, d.animationValues ? a.opacity = d === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : a.opacity = d === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const x in an) {
        if (u[x] === void 0)
          continue;
        const { correct: g, applyTo: L, isCSSVariable: m } = an[x], j = h === "none" ? u[x] : g(u[x], d);
        if (L) {
          const k = L.length;
          for (let y = 0; y < k; y++)
            a[L[y]] = j;
        } else
          m ? this.options.visualElement.renderState.vars[x] = j : a[x] = j;
      }
      this.options.layoutId && (a.pointerEvents = d === this ? Vn(c == null ? void 0 : c.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var c;
        return (c = a.currentAnimation) == null ? void 0 : c.stop();
      }), this.root.nodes.forEach(gi), this.root.sharedNodes.clear();
    }
  };
}
function Ff(e) {
  e.updateLayout();
}
function Of(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
    i === "size" ? De((h) => {
      const p = a ? t.measuredBox[h] : t.layoutBox[h], f = $e(p);
      p.min = r[h].min, p.max = p.min + f;
    }) : bc(i, t.layoutBox, r) && De((h) => {
      const p = a ? t.measuredBox[h] : t.layoutBox[h], f = $e(r[h]);
      p.max = p.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[h].max = e.relativeTarget[h].min + f);
    });
    const c = Mt();
    Wt(c, r, t.layoutBox);
    const l = Mt();
    a ? Wt(l, e.applyTransform(o, !0), t.measuredBox) : Wt(l, r, t.layoutBox);
    const d = !wc(c);
    let u = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: p, layout: f } = h;
        if (p && f) {
          const x = xe();
          en(x, t.layoutBox, p.layoutBox);
          const g = xe();
          en(g, r, f.layoutBox), yc(x, g) || (u = !0), h.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = x, e.relativeParent = h);
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
function _f(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Yf(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Zf(e) {
  e.clearSnapshot();
}
function gi(e) {
  e.clearMeasurements();
}
function xi(e) {
  e.isLayoutDirty = !1;
}
function Uf(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function vi(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Kf(e) {
  e.resolveTargetDelta();
}
function Gf(e) {
  e.calcProjection();
}
function Xf(e) {
  e.resetSkewAndRotation();
}
function qf(e) {
  e.removeLeadSnapshot();
}
function ji(e, t, n) {
  e.translate = fe(t.translate, 0, n), e.scale = fe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ki(e, t, n, r) {
  e.min = fe(t.min, n.min, r), e.max = fe(t.max, n.max, r);
}
function zf(e, t, n, r) {
  ki(e.x, t.x, n.x, r), ki(e.y, t.y, n.y, r);
}
function Jf(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Qf = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Li = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), wi = Li("applewebkit/") && !Li("chrome/") ? Math.round : Be;
function yi(e) {
  e.min = wi(e.min), e.max = wi(e.max);
}
function Wf(e) {
  yi(e.x), yi(e.y);
}
function bc(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !nf(fi(t), fi(n), 0.2);
}
function e0(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const t0 = Mc({
  attachResizeListener: (e, t) => ln(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Lr = {
  current: void 0
}, Nc = Mc({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Lr.current) {
      const e = new t0({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Lr.current = e;
    }
    return Lr.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), n0 = {
  pan: {
    Feature: kf
  },
  drag: {
    Feature: jf,
    ProjectionNode: Nc,
    MeasureLayout: jc
  }
};
function Ci(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, i = r[o];
  i && he.postRender(() => i(t, mn(t)));
}
class r0 extends st {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = T2(t, (n, r) => (Ci(this.node, r, "Start"), (o) => Ci(this.node, o, "End"))));
  }
  unmount() {
  }
}
class s0 extends st {
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
    this.unmount = hn(ln(this.node.current, "focus", () => this.onFocus()), ln(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Mi(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), i = r[o];
  i && he.postRender(() => i(t, mn(t)));
}
class o0 extends st {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = I2(t, (n, r) => (Mi(this.node, r, "Start"), (o, { success: i }) => Mi(this.node, o, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Gr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), i0 = (e) => {
  const t = Gr.get(e.target);
  t && t(e);
}, a0 = (e) => {
  e.forEach(i0);
};
function c0({ root: e, ...t }) {
  const n = e || document;
  wr.has(n) || wr.set(n, {});
  const r = wr.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(a0, { root: e, ...t })), r[o];
}
function l0(e, t, n) {
  const r = c0(t);
  return Gr.set(e, n), r.observe(e), () => {
    Gr.delete(e), r.unobserve(e);
  };
}
const d0 = {
  some: 0,
  all: 1
};
class u0 extends st {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : d0[o]
    }, c = (l) => {
      const { isIntersecting: d } = l;
      if (this.isInView === d || (this.isInView = d, i && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), p = d ? u : h;
      p && p(l);
    };
    return l0(this.node.current, a, c);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(h0(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function h0({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const p0 = {
  inView: {
    Feature: u0
  },
  tap: {
    Feature: o0
  },
  focus: {
    Feature: s0
  },
  hover: {
    Feature: r0
  }
}, f0 = {
  layout: {
    ProjectionNode: Nc,
    MeasureLayout: jc
  }
}, Xr = { current: null }, Sc = { current: !1 };
function m0() {
  if (Sc.current = !0, !!as)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Xr.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Xr.current = !1;
}
const g0 = /* @__PURE__ */ new WeakMap();
function x0(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (Se(o))
      e.addValue(r, o);
    else if (Se(i))
      e.addValue(r, St(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const a = e.getValue(r);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = e.getStaticValue(r);
        e.addValue(r, St(a !== void 0 ? a : o, { owner: e }));
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
class v0 {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Cs, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = Ie.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, he.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: d } = a;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = d, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = c, this.blockInitialAnimation = !!i, this.isControllingVariants = qn(n), this.isVariantNode = qa(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in h) {
      const f = h[p];
      l[p] !== void 0 && Se(f) && f.set(l[p], !1);
    }
  }
  mount(t) {
    this.current = t, g0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Sc.current || m0(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Xr.current, process.env.NODE_ENV !== "production" && hs(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), nt(this.notifyUpdate), nt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = Ot.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const o = n.on("change", (c) => {
      this.latestValues[t] = c, this.props.onUpdate && he.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : xe();
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
    this.prevMotionValues = x0(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return r === void 0 && n !== void 0 && (r = St(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (ra(r) || oa(r)) ? r = parseFloat(r) : !H2(r) && rt.test(n) && (r = Fa(t, n)), this.setBaseTarget(t, Se(r) ? r.get() : r)), Se(r) ? r.get() : r;
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
      const a = Hs(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
      a && (r = a[t]);
    }
    if (n && r !== void 0)
      return r;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Se(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new us()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Vc extends v0 {
  constructor() {
    super(...arguments), this.KeyframeResolver = M2;
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
    Se(t) && (this.childSubscription = t.on("change", (n) => {
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
function j0(e) {
  return window.getComputedStyle(e);
}
class k0 extends Vc {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Tc;
  }
  readValueFromInstance(t, n) {
    var r;
    if (Ot.has(n))
      return (r = this.projection) != null && r.isProjecting ? Er(n) : Y4(t, n);
    {
      const o = j0(t), i = (ms(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return mc(t, n);
  }
  build(t, n, r) {
    Is(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ds(t, n, r);
  }
}
const $c = /* @__PURE__ */ new Set([
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
function L0(e, t, n, r) {
  Tc(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute($c.has(o) ? o : As(o), t.attrs[o]);
}
class w0 extends Vc {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = xe;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ot.has(n)) {
      const r = Ba(n);
      return r && r.default || 0;
    }
    return n = $c.has(n) ? n : As(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return oc(t, n, r);
  }
  build(t, n, r) {
    tc(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, o) {
    L0(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = rc(t.tagName), super.mount(t);
  }
}
const y0 = (e, t) => Ps(e) ? new w0(t) : new k0(t, {
  allowProjection: e !== un
}), C0 = /* @__PURE__ */ wp({
  ...Xp,
  ...p0,
  ...n0,
  ...f0
}, y0), Ce = /* @__PURE__ */ G2(C0), Re = ({
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
  const [f, x] = F(e), [g, L] = F({ top: 0, left: 0 }), [m, j] = F({ width: 0, height: 0 }), [k, y] = F(r), M = J(null), v = J(null);
  K(() => {
    e !== void 0 && x(e);
  }, [e]), K(() => {
    c == null || c(f);
  }, [f, c]);
  const w = 8, C = _(() => {
    if (!M.current || !i || m.width === 0 || m.height === 0) return;
    const I = M.current.getBoundingClientRect(), O = window.innerWidth, D = window.innerHeight;
    let q = 0, T = 0, E = r;
    const A = (G) => {
      switch (G) {
        case "top":
          return {
            top: I.top - I.height - w,
            left: I.left + (I.width / 2 - m.width / 2),
            placement: "top"
          };
        case "bottom":
          return {
            top: I.top + I.height + w,
            left: I.left + (I.width / 2 - m.width / 2),
            placement: "bottom"
          };
        case "left":
          return {
            top: I.top + (I.height / 2 - m.height / 2),
            left: I.left - m.width - w,
            placement: "left"
          };
        case "right":
          return {
            top: I.top + (I.height / 2 - m.height / 2),
            left: I.right + w,
            placement: "right"
          };
        default:
          return {
            top: I.bottom + w,
            left: I.left + I.width / 2 - m.width / 2,
            placement: "bottom"
          };
      }
    };
    let P = A(E);
    q = P.top, T = P.left, E = P.placement, (() => {
      if (T < w && (T = w), T + m.width > O - w && (T = O - m.width - w), q < w) {
        if (E === "top") {
          const G = A("bottom");
          G.top + m.height <= D - w ? (q = G.top, T = G.left, E = "bottom") : q = w;
        }
      } else if (q + m.height > D - w && E === "bottom") {
        const G = A("top");
        G.top >= w ? (q = G.top, T = G.left, E = "top") : q = D - m.height - w;
      }
      if ((T < w || T + m.width > O - w) && (E === "top" || E === "bottom")) {
        const G = A("left");
        if (G.left >= w)
          q = G.top, T = G.left, E = "left";
        else {
          const Y = A("right");
          Y.left + m.width <= O - w && (q = Y.top, T = Y.left, E = "right");
        }
      }
    })(), L({ top: q, left: T }), y(E);
  }, [r, i, m]);
  K(() => {
    if (!i) return;
    const I = () => {
      C();
    }, O = () => {
      C();
    };
    return window.addEventListener("resize", I), window.addEventListener("scroll", O, !0), () => {
      window.removeEventListener("resize", I), window.removeEventListener("scroll", O, !0);
    };
  }, [C, i]), K(() => {
    if (v.current && f && i) {
      const I = new ResizeObserver((O) => {
        for (const D of O) {
          const { width: q, height: T } = D.target.getBoundingClientRect();
          j({ width: q, height: T });
        }
      });
      return I.observe(v.current), () => {
        I.disconnect();
      };
    }
  }, [f, i]), K(() => {
    f && i && m.width > 0 && m.height > 0 && C();
  }, [f, i, m, C]), K(() => {
    if (a === "click" && f) {
      const I = (O) => {
        M.current && !M.current.contains(O.target) && x(!1);
      };
      return document.addEventListener("mousedown", I), () => {
        document.removeEventListener("mousedown", I);
      };
    }
  }, [a, f]);
  const V = () => {
    a === "hover" && e === void 0 && x(!0);
  }, S = () => {
    a === "hover" && e === void 0 && x(!1);
  }, H = () => {
    a === "click" && e === void 0 && x(!f);
  };
  if (!t) return /* @__PURE__ */ s.jsx(s.Fragment, { children: p });
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
  }, R = () => {
    if (!M.current || !i || m.width === 0 || m.height === 0) return {};
    const I = M.current.getBoundingClientRect(), O = 12, D = I.left + I.width / 2, q = I.top + I.height / 2, T = g.left, E = g.top, A = D - T, P = q - E, Z = (G, Y, Q) => Y >= 0 && Y <= Q ? Math.max(O, Math.min(Q - O, Y)) : Y < 0 ? O : Q - O;
    switch (k) {
      case "top":
        return {
          left: `${Z(!0, A, m.width) / m.width * 100}%`,
          top: "100%",
          transform: "translate(-50%,-50%) rotate(45deg)"
        };
      case "bottom":
        return {
          left: `${Z(!0, A, m.width) / m.width * 100}%`,
          top: "0",
          transform: "translate(-50%,-50%) rotate(-135deg)"
        };
      case "left":
        return {
          left: "100%",
          top: `${Z(!1, P, m.height) / m.height * 100}%`,
          transform: "translate(-50%,-50%) rotate(-45deg)"
        };
      case "right":
        return {
          left: "0",
          top: `${Z(!1, P, m.height) / m.height * 100}%`,
          transform: "translate(-50%,-50%) rotate(135deg)"
        };
      default:
        return {};
    }
  }, $ = /* @__PURE__ */ s.jsxs(
    Ce.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: f ? 1 : 0 },
      transition: { duration: 0.2, type: "spring" },
      ref: v,
      className: `land-pop ${f ? "show" : ""} ${o ? "hide-arrow" : ""} ${n} ${d ?? ""}`,
      style: {
        position: i ? "fixed" : "absolute",
        ...i ? {
          top: g.top,
          left: g.left
        } : N(),
        zIndex: i ? 1e3 : 100,
        opacity: f ? 1 : 0,
        pointerEvents: f ? "auto" : "none",
        transition: "opacity 0.2s ease-in-out",
        ...l
      },
      children: [
        t,
        !o && /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "land-pop-arrow",
            style: i ? R() : {
              left: r === "left" ? "100%" : r === "right" ? "0" : "50%",
              top: r === "top" ? "100%" : r === "bottom" ? "0" : "50%",
              transform: `translate(-50%, -50%) rotate(${r === "top" ? "45" : r === "bottom" ? "-135" : r === "right" ? "135" : "-45"}deg)`
            }
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: M,
      className: `land-pop-target ${h ?? ""}`,
      style: u,
      onMouseEnter: V,
      onMouseLeave: S,
      onClick: H,
      children: [
        p,
        $
      ]
    }
  );
}, M0 = ({
  animation: e = !0,
  transform: t,
  children: n,
  underline: r,
  ...o
}) => /* @__PURE__ */ s.jsxs(dn, { underline: t ? !0 : r, className: `link-wave ${e ? "animation" : ""} ${t ? "transform" : ""}`, ...o, children: [
  n,
  /* @__PURE__ */ s.jsx("div", { className: "land-link-wave" })
] }), dn = ({
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
  className: x = ""
}) => {
  const g = () => ({
    default: "var(--color-blue-",
    primary: "var(--color-primary-",
    success: "var(--color-green-",
    danger: "var(--color-red-",
    warning: "var(--color-orange-"
  })[n], L = (k) => {
    if (o) {
      k.preventDefault();
      return;
    }
    p == null || p(k);
  }, m = (k, y) => {
    if (!k) return null;
    const M = typeof k == "boolean" ? t === "_blank" ? /* @__PURE__ */ s.jsx(z, { name: "share", size: 16 }) : /* @__PURE__ */ s.jsx(z, { name: "link", size: 16 }) : k;
    return /* @__PURE__ */ s.jsx("span", { className: `land-link-${y}-icon`, children: M });
  }, j = (k) => {
    if (k.preventDefault(), r) {
      const y = document.getElementById(r);
      y && y.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ s.jsxs(
    "a",
    {
      href: e,
      target: t,
      className: `land-link hover-pop ${n} ${o ? "disabled" : ""} ${a ? "hoverUnderline" : ""} ${i ? "underline" : ""} ${x}`,
      style: {
        "--land-link-color": `${g()}6)`,
        "--land-link-hover-color": `${g()}7)`,
        "--land-link-active-color": `${g()}8)`,
        "--land-link-disabled-color": `${g()}3)`,
        ...f
      },
      onClick: r ? j : L,
      "aria-disabled": o,
      children: [
        m(d, "prefix"),
        h,
        m(u, "suffix"),
        c && /* @__PURE__ */ s.jsx(Re, { content: c, ...l })
      ]
    }
  );
};
dn.LinkWave = M0;
const b0 = ({
  size: e = "var(--icon-size-l)",
  strokeSize: t = 3,
  color: n = "var(--color-text-primary)",
  style: r,
  className: o = ""
}) => /* @__PURE__ */ s.jsx(
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
), N0 = ({
  type: e = "default",
  direction: t = "row",
  title: n,
  link: r,
  onLinkClick: o,
  noBg: i,
  className: a,
  style: c
}) => {
  const l = X(() => t === "row" ? 16 : 24, [t]), d = X(() => {
    if (e === "fail") return "var(--color-red-";
    if (e === "default") return "";
    if (e === "warn") return "var(--color-orange-";
    if (e === "error") return "var(--color-red-";
    if (e === "success") return "var(--color-green-";
    if (e === "loading") return "";
  }, [e]);
  return /* @__PURE__ */ s.jsxs("div", { className: `land-alert ${t} ${d} ${i ? "no-bg" : ""} ${a}`, style: c, children: [
    e === "fail" && /* @__PURE__ */ s.jsx(z, { name: "error-fill", size: l, color: d + "6)" }),
    e === "default" && /* @__PURE__ */ s.jsx(
      z,
      {
        name: "attention-fill",
        size: l,
        color: "var(--color-primary-6)"
      }
    ),
    e === "warn" && /* @__PURE__ */ s.jsx(
      z,
      {
        name: "attention-fill",
        size: l,
        color: d + "6)"
      }
    ),
    e === "error" && /* @__PURE__ */ s.jsx(z, { name: "attention-fill", size: l, color: d + "6)" }),
    e === "success" && /* @__PURE__ */ s.jsx(z, { name: "check-fill", size: l, color: d + "6)" }),
    e === "loading" && /* @__PURE__ */ s.jsx(b0, { size: l, color: "var(--color-primary-6)" }),
    /* @__PURE__ */ s.jsxs("div", { className: "land-alert-title", children: [
      n,
      r && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        "，",
        /* @__PURE__ */ s.jsx(dn, { onClick: o, children: r })
      ] })
    ] })
  ] });
}, km = ({
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
  const d = J(null), [u, h] = F(""), [p, f] = F(0), x = _(() => l(), [l]), g = _((C) => C === window ? window.pageYOffset || document.documentElement.scrollTop : C.scrollTop, []), L = _((C, V) => {
    C === window ? window.scrollTo({
      top: V,
      behavior: "smooth"
    }) : C.scrollTo({
      top: V,
      behavior: "smooth"
    });
  }, []), m = X(() => {
    const C = [], V = (S) => {
      S.forEach((H) => {
        H.key && C.push(H.key), H.children && V(H.children);
      });
    };
    return V(e), C;
  }, [e]), j = _((C, V) => {
    h(C), f(V);
    const S = document.getElementById(C);
    console.log("targetElement", S);
    const H = x();
    if (S)
      if (n === 0)
        S.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      else {
        const N = H === window ? { top: 0 } : H.getBoundingClientRect(), $ = S.getBoundingClientRect().top - N.top, O = g(H) + $ - n;
        L(H, O);
      }
    t == null || t(C);
  }, [n, t, x, g, L]);
  K(() => {
    const C = (H) => {
      const N = H.filter(
        (R) => R.isIntersecting && R.intersectionRatio >= 0.5
      );
      if (N.length > 0) {
        const $ = N[0].target.id;
        h($), f(m.indexOf($)), t == null || t($);
      } else
        H.forEach((R) => {
          const $ = R.target.id;
          if (!R.isIntersecting && u === $) {
            const I = m.indexOf($), O = m[I - 1] || null;
            h(O), f(m.indexOf(O)), O && (t == null || t(O));
          }
        });
    }, V = x(), S = new IntersectionObserver(C, {
      threshold: [0, 0.5, 1],
      root: V === window ? null : V,
      rootMargin: `-${n}px 0px 0px 0px`
    });
    return m.forEach((H) => {
      const N = document.getElementById(H);
      N && S.observe(N);
    }), () => {
      m.forEach((H) => {
        const N = document.getElementById(H);
        N && S.unobserve(N);
      });
    };
  }, [m, u, n, t, x]);
  const k = (C, V = 0) => C.map((S, H) => /* @__PURE__ */ s.jsxs(
    "li",
    {
      style: { textIndent: V > 0 ? `${V * 0.5}em` : 0, paddingTop: H > 0 ? `${r}px` : 0 },
      onMouseEnter: () => {
        H !== p && (w(!0), M(H));
      },
      onMouseLeave: () => w(!1),
      children: [
        /* @__PURE__ */ s.jsx(
          "a",
          {
            className: `land-anchor-link ${u === S.key ? "active" : ""}`,
            onClick: () => j(S.key, H),
            "aria-current": u === S.key ? "location" : void 0,
            children: S.title
          }
        ),
        S.children && k(S.children, V + 1)
      ]
    },
    S.key
  )), [y, M] = F(-1), [v, w] = F(!1);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: d,
      className: `land-anchor ${c || ""}`,
      style: a,
      role: "navigation",
      "aria-label": "Anchor navigation",
      children: [
        /* @__PURE__ */ s.jsx("ol", { className: "land-anchor-list", children: k(e) }),
        /* @__PURE__ */ s.jsx(
          Ce.div,
          {
            className: "land-anchor-hover-indicator",
            animate: {
              opacity: v ? 1 : 0,
              y: y * 38 + y * r
            },
            transition: { type: "spring", stiffness: 200, damping: 30, mass: 1, restDelta: 0.1 },
            style: i
          }
        ),
        o && /* @__PURE__ */ s.jsx(
          Ce.div,
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
}, Lm = ({
  ratio: e = 1,
  children: t,
  contentClassName: n = "",
  contentStyle: r,
  style: o,
  className: i = ""
}) => {
  const a = J(null), [c, l] = F(1);
  K(() => {
    if (!a.current) return;
    const u = (p) => {
      p.forEach((f) => {
        l(f.contentRect.width / f.contentRect.height);
      });
    };
    new ResizeObserver(u).observe(a.current);
  }, []);
  const d = X(() => e > c, [e, c]);
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: a,
      className: `land-auto-container ${i}`,
      style: o,
      children: /* @__PURE__ */ s.jsx(
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
}, Rc = ({
  color: e,
  size: t = 12
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: "land-audio-animation-icon",
    style: { width: `${t}px`, height: `${t}px` },
    children: Array.from({ length: 4 }).map((n, r) => /* @__PURE__ */ s.jsx(
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
), Ac = ({
  play: e,
  animation: t = !1,
  iconSize: n = 24,
  color: r = "var(--color-text-primary)",
  style: o,
  className: i = "",
  onClick: a
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: `land-audio-play-icon ${i}`,
    style: {
      width: `${n}px`,
      height: `${n}px`,
      ...o
    },
    onClick: a,
    children: e ? t ? /* @__PURE__ */ s.jsx(z, { name: "video-play", size: n / 1.8, color: r }) : /* @__PURE__ */ s.jsx(Rc, { size: n / 1.8, color: r }) : /* @__PURE__ */ s.jsx(z, { name: "video-pause", size: 24, color: r })
  }
);
function Ni(e, t, n) {
  const r = (i, a, c, l, d) => (i - a) / (c - a) * (d - l) + l;
  return e.map((i) => r(i, t, n, 0, 1));
}
const Ic = () => Le.version.startsWith("19") ? "19" : "18", S0 = () => Ic() === "19", wm = (e) => Le.memo(e), ym = (e, t) => S0() ? t : e, Cm = (e) => Le.useState(e), Mm = (e, t) => Le.useEffect(e, t), bm = (e, t) => Le.useCallback(e, t), Nm = (e, t) => Le.useMemo(e, t), Sm = (e) => Le.useRef(e), Si = (e, t = "2d") => {
  try {
    let n = e.getContext(t);
    return !n && Pc && requestAnimationFrame(() => {
      try {
        e.getContext(t) && console.log("Canvas context retry successful");
      } catch (r) {
        console.warn("Canvas context retry failed:", r);
      }
    }), n;
  } catch (n) {
    return console.warn("Canvas getContext failed:", n), null;
  }
}, Ec = (e, t, n) => {
  try {
    const r = Si(e, "2d");
    return r && e.width > 0 && e.height > 0 ? t(r) : (Pc && setTimeout(() => {
      try {
        const o = Si(e, "2d");
        o && e.width > 0 && e.height > 0 && t(o);
      } catch (o) {
        console.warn("Canvas operation retry failed:", o);
      }
    }, 100), n);
  } catch (r) {
    return console.warn("Canvas operation failed:", r), n;
  }
}, V0 = Ic(), Pc = V0 === "19";
function T0(e, t, n, r, o = 2, i = 2, a = "#999", c = "#FF0000", l, d) {
  console.log("drawWave", e, "canvas size:", t.width, "x", t.height), Ec(t, (u) => {
    let h = e;
    if (h.length === 0) {
      console.warn("No wave data to draw");
      return;
    }
    if (l) {
      const w = Math.max(...e);
      w > 0 && (h = Ni(e, 0, w));
    }
    if (d) {
      const w = Math.min(...e), C = Math.max(...e), V = Math.min(...e.filter((S) => S !== w));
      h = Ni(
        e.filter((S) => S !== w),
        V,
        C
      );
    }
    const p = t.width, f = t.height;
    if (p === 0 || f === 0) {
      console.warn("Canvas has no size");
      return;
    }
    const x = n.currentTime || 0, g = n.duration || 1, L = Math.floor(x / g * r);
    u.clearRect(0, 0, p, f);
    const m = o + i, j = Math.floor(p / m), k = Math.min(h.length, j), y = Math.max(...h), M = 2, v = y > 0 ? Math.max(f * 0.8 / y, M / y) : 1;
    console.log("Drawing bars:", k, "maxValue:", y, "scale:", v);
    for (let w = 0; w < k; w++) {
      const C = h[w] || 0, V = w * m, S = Math.max(C * v, M), H = f - S;
      u.fillStyle = w < L ? c : a, u.fillRect(V, H, o, S);
    }
  });
}
function $0(e, t) {
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
function R0({
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
  const h = J(null), p = J(null), f = J(), [x, g] = F([]), [L, m] = F(!1), [j, k] = F(null), [y, M] = F(t), v = _(async () => {
    if (e) {
      m(!0), k(null);
      try {
        const N = new (window.AudioContext || window.webkitAudioContext)(), $ = await (await fetch(e)).arrayBuffer(), I = await N.decodeAudioData($), O = $0(I, r);
        g(O || []), N.close();
      } catch (N) {
        k(N instanceof Error ? N.message : "Failed to generate wave data"), console.error("Error generating wave data:", N);
      } finally {
        m(!1);
      }
    }
  }, [e, r]), w = _(() => {
    if (!h.current || x.length === 0) return;
    const N = h.current, R = N.parentElement;
    if (R) {
      const I = R.getBoundingClientRect();
      N.width = I.width, N.height = I.height;
    }
    const $ = p.current || new Audio(e);
    u === "bar" ? T0(
      x,
      N,
      $,
      r,
      o,
      i,
      a,
      c,
      l,
      d
    ) : C(
      x,
      N,
      $,
      a,
      c
    );
  }, [x, r, o, i, a, c, l, d, u, e]), C = _((N, R, $, I, O) => {
    Ec(R, (D) => {
      const q = R.width, T = R.height;
      if (q === 0 || T === 0) {
        console.warn("Canvas has no size for line waveform");
        return;
      }
      const E = $.currentTime || 0, A = $.duration || 1, P = Math.floor(E / A * N.length);
      if (D.clearRect(0, 0, q, T), N.length === 0) {
        console.warn("No data for line waveform");
        return;
      }
      const Z = Math.max(...N), G = Z > 0 ? T * 0.6 / Z : 1, Y = q / (N.length - 1);
      if (D.beginPath(), D.strokeStyle = I, D.lineWidth = 1, D.setLineDash([2, 2]), D.moveTo(0, T / 2), D.lineTo(q, T / 2), D.stroke(), D.setLineDash([]), D.beginPath(), D.strokeStyle = I, D.lineWidth = 2, N.forEach((Q, ce) => {
        const se = ce * Y, ue = T / 2 - Q * G;
        ce === 0 ? D.moveTo(se, ue) : D.lineTo(se, ue);
      }), D.stroke(), P > 0) {
        D.beginPath(), D.strokeStyle = O, D.lineWidth = 3;
        for (let Q = 0; Q < Math.min(P, N.length); Q++) {
          const ce = Q * Y, se = T / 2 - N[Q] * G;
          Q === 0 ? D.moveTo(ce, se) : D.lineTo(ce, se);
        }
        D.stroke();
      }
    });
  }, []), V = _(() => {
    w(), f.current = requestAnimationFrame(V);
  }, [w]), S = _(() => {
    f.current && cancelAnimationFrame(f.current), V();
  }, [V]), H = _(() => {
    f.current && (cancelAnimationFrame(f.current), f.current = void 0);
  }, []);
  return K(() => {
    v();
  }, [v]), K(() => {
    const N = p.current;
    N && (t ? N.play().catch((R) => {
      console.error("Failed to play audio:", R), M(!1), n == null || n(!1);
    }) : N.pause());
  }, [t, n]), K(() => {
    const N = p.current;
    if (!N) return;
    const R = () => {
      M(!0), n == null || n(!0), S();
    }, $ = () => {
      M(!1), n == null || n(!1), H();
    }, I = () => {
      M(!1), n == null || n(!1), H();
    };
    return N.addEventListener("play", R), N.addEventListener("pause", $), N.addEventListener("ended", I), () => {
      N.removeEventListener("play", R), N.removeEventListener("pause", $), N.removeEventListener("ended", I), H();
    };
  }, [S, H, n]), K(() => () => {
    H();
  }, [H]), {
    canvasRef: h,
    audioRef: p,
    waveData: x,
    isLoading: L,
    error: j,
    isPlaying: y,
    drawWaveform: w,
    startAnimation: S,
    stopAnimation: H
  };
}
const Hc = ({
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
  style: x,
  className: g = "",
  children: L
}) => {
  const {
    canvasRef: m,
    audioRef: j,
    waveData: k,
    isLoading: y,
    error: M,
    drawWaveform: v
  } = R0({
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
  }), w = r ? { current: r } : m, C = i || k;
  return Le.useEffect(() => {
    C.length > 0 && setTimeout(() => {
      v();
    }, 100);
  }, [C, v]), Le.useEffect(() => {
    const V = w.current;
    if (!V) return;
    const S = new ResizeObserver(() => {
      C.length > 0 && v();
    });
    return S.observe(V), () => S.disconnect();
  }, [C, v, w]), M ? /* @__PURE__ */ s.jsx("div", { className: `land-audio-wave error ${g}`, style: x, children: /* @__PURE__ */ s.jsxs("div", { className: "error-message", children: [
    "Failed to load audio: ",
    M
  ] }) }) : y ? /* @__PURE__ */ s.jsx("div", { className: `land-audio-wave loading ${g}`, style: x, children: /* @__PURE__ */ s.jsx("div", { className: "loading-spinner", children: "Loading waveform..." }) }) : /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-audio-wave ${p} ${g}`,
      style: {
        position: "relative",
        width: "100%",
        height: "60px",
        ...x
      },
      children: [
        /* @__PURE__ */ s.jsx("audio", { ref: j, src: e, className: "land-audio-wave-audio" }),
        /* @__PURE__ */ s.jsx(
          "canvas",
          {
            ref: w,
            style: {
              width: "100%",
              height: "100%",
              display: "block"
            }
          }
        ),
        L
      ]
    }
  );
}, Fs = ({
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
  const p = J(null), [f, x] = F(!1);
  return K(() => {
    if (!p.current) return;
    const g = p.current;
    f ? g.play() : g.pause();
  }, [f]), /* @__PURE__ */ s.jsxs("div", { className: `land-audio ${h}`, style: u, children: [
    /* @__PURE__ */ s.jsx(
      Ac,
      {
        play: f,
        onClick: (g) => {
          g.stopPropagation(), x(!f);
        }
      }
    ),
    t && /* @__PURE__ */ s.jsx(
      Hc,
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
    !t && /* @__PURE__ */ s.jsx("audio", { ref: p, src: e })
  ] });
};
Fs.AudioButton = Ac;
Fs.AudioAnimationIcon = Rc;
Fs.AudioWave = Hc;
const Vm = ({
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
  return /* @__PURE__ */ s.jsxs("div", { className: `land-badge ${i}`, style: a, children: [
    /* @__PURE__ */ s.jsx("div", { className: `land-badge-content ${e ? "dot" : ""} ${c(`${t || r}`) ? "large" : ""}`, children: e ? null : r || (t <= n ? t : `${n}+`) }),
    o
  ] });
}, A0 = ({
  item: e,
  active: t,
  onChange: n,
  index: r,
  hoverPreview: o
}) => {
  const i = J(null), [a, c] = F(!1);
  return K(() => {
    i.current && (i.current.scrollWidth > i.current.offsetWidth ? c(!0) : c(!1));
  }, [e]), /* @__PURE__ */ s.jsx(Re, { targetBody: !0, content: e.tip || (o && a ? e.label : ""), children: /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-breadCrumb-item hover-pop ${t ? "active" : ""}`,
      onClick: () => n == null ? void 0 : n(),
      children: [
        /* @__PURE__ */ s.jsx("div", { ref: i, className: `land-breadcrumb-label ${e.maxWidth ? "ellipsis" : ""}`, style: { maxWidth: `${e.maxWidth}px` }, children: e.label }),
        r > 0 && /* @__PURE__ */ s.jsx(z, { name: "arrow", className: "land-breadCrumb-item-arrow", size: 16, strokeWidth: 4 })
      ]
    }
  ) });
}, Tm = ({
  data: e = [],
  current: t,
  showMask: n = !1,
  hoverPreview: r = !1,
  onChange: o,
  style: i,
  className: a = ""
}) => {
  var p;
  const c = J(null), [l, d] = F(!1), [u, h] = F(!0);
  return K(() => {
    if (!n || !c.current) return;
    const f = () => {
      c.current && (d(c.current.scrollLeft <= c.current.clientWidth - c.current.scrollWidth), h(c.current.scrollLeft >= 0));
    };
    return c.current.addEventListener("scroll", f), () => {
      var x;
      (x = c.current) == null || x.removeEventListener("scroll", f);
    };
  }, []), /* @__PURE__ */ s.jsxs("div", { className: `land-breadCrumb  ${a}`, style: i, children: [
    n && /* @__PURE__ */ s.jsx("div", { className: `land-breadCrumb-prefixMask ${l ? "hidden" : ""}` }),
    /* @__PURE__ */ s.jsx("div", { ref: c, className: "land-breadCrumb-container", children: (p = Array.from(e)) == null ? void 0 : p.reverse().map((f, x) => /* @__PURE__ */ s.jsx(
      A0,
      {
        index: x,
        item: f,
        active: t === f.value,
        hoverPreview: r,
        onChange: () => o == null ? void 0 : o(f)
      },
      f.value
    )) }),
    n && /* @__PURE__ */ s.jsx("div", { className: `land-breadCrumb-suffixMask ${u ? "hidden" : ""}` })
  ] });
}, I0 = ({
  style: e,
  ...t
}) => {
  const [n, r] = F(!1);
  return /* @__PURE__ */ s.jsx(
    me,
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
      children: /* @__PURE__ */ s.jsx(z, { name: "arrow-line", size: 16, strokeWidth: 3, className: `land-button-arrow-icon ${n ? "button-hover-arrow" : ""}` })
    }
  );
}, E0 = ({
  defaultSide: e,
  hoverSide: t,
  ...n
}) => {
  const [r, o] = F(!1);
  return /* @__PURE__ */ s.jsxs(
    me,
    {
      ...n,
      nativeEvent: {
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1)
      },
      children: [
        /* @__PURE__ */ s.jsx(Ce.div, { animate: { opacity: r ? 1 : 0, scaleY: r ? 1 : -1 }, transition: { duration: 0.6, type: "spring" }, className: "land-button-change-hover", children: t }),
        /* @__PURE__ */ s.jsx(Ce.div, { animate: { opacity: r ? 0 : 1 }, transition: { duration: 0.6, type: "spring" }, className: "land-button-change-default", children: e })
      ]
    }
  );
}, me = ({
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
  subText: x,
  icon: g,
  // 尺寸属性
  capsule: L,
  // 气泡属性
  tip: m,
  tipProps: j,
  // 原生事件
  nativeEvent: k
}) => {
  const y = X(() => !!(g && !f && !x), [g, f, x]), M = X(() => [
    "land-button",
    e,
    t,
    y && "iconOnly",
    m && "hover-pop",
    o && "block",
    i && "bold",
    a && "hover-bold",
    L && "capsule",
    c && "hover-animation",
    l && "active-animation",
    n && `size-${n}`,
    u
  ].filter(Boolean).join(" "), [e, t, y, r, m, u]), v = () => /* @__PURE__ */ s.jsxs(Re, { targetBody: !0, theme: "dark", content: m, ...j, children: [
    g && /* @__PURE__ */ s.jsx("div", { className: "land-button-icon", children: g }),
    !y && (f || x) && /* @__PURE__ */ s.jsxs("div", { className: "land-button-mask-content-wrapper", children: [
      /* @__PURE__ */ s.jsx("span", { children: f }),
      x && /* @__PURE__ */ s.jsx("span", { className: "subText", children: x }),
      (a || e === "transparent") && /* @__PURE__ */ s.jsxs("div", { className: "land-button-mask-content", children: [
        /* @__PURE__ */ s.jsx("span", { children: f }),
        x && /* @__PURE__ */ s.jsx("span", { className: "subText", children: x })
      ] })
    ] }),
    p
  ] }), w = {
    style: d,
    className: M,
    disabled: r,
    onClick: (C) => {
      r || h == null || h(C);
    },
    ...k
    // 原生事件
  };
  return /* @__PURE__ */ s.jsx(
    "button",
    {
      ...w,
      children: v()
    }
  );
};
me.ButtonArrow = I0;
me.ButtonChange = E0;
const P0 = (e, t) => {
  const n = J(t);
  K(() => {
    n.current = t;
  }, [t]);
  const r = _((o) => {
    e.current && !e.current.contains(o.target) && n.current(o);
  }, [e]);
  K(() => (document.body.addEventListener("mousedown", r), document.body.addEventListener("touchstart", r), () => {
    document.body.removeEventListener("mousedown", r), document.body.removeEventListener("touchstart", r);
  }), [r]);
}, Os = ({
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
  dropStyle: x,
  open: g = !1
}) => {
  const L = J(null), m = J(null), [j, k] = F(g);
  K(() => {
    c && j && k(!1);
  }, [c, j]), K(() => {
    c || k(g);
  }, [g, c]);
  const [y, M] = F({
    top: 0,
    left: 0
  }), [v, w] = F(
    i
  ), [C, V] = F(a), S = _(() => {
    if (!L.current) return;
    const O = L.current.getBoundingClientRect(), D = window.innerWidth, q = window.innerHeight, T = window.pageXOffset || document.documentElement.scrollLeft, E = window.pageYOffset || document.documentElement.scrollTop, A = 200, P = 150, Z = 0;
    let G = 0, Y = 0, Q = i, ce = a;
    const se = q - O.bottom - Z, ue = O.top - Z;
    if (i === "bottom" && se < P && ue > P ? Q = "top" : i === "top" && ue < P && se > P && (Q = "bottom"), t) {
      if (!m.current) return;
      const be = m.current.getBoundingClientRect(), Ne = be.width || A, Ve = be.height || P;
      Q === "bottom" ? G = O.bottom + Z + E : G = O.top - Ve - Z + E;
      let rr = O.left + O.width / 2, sr = O.left, xt = O.right;
      switch (a) {
        case "center":
          Y = rr - Ne / 2;
          break;
        case "right":
          Y = xt - Ne;
          break;
        default:
          Y = sr;
          break;
      }
      Y < T ? (Y = T + Z, ce = "left") : Y + Ne > T + D && (Y = T + D - Ne - Z, ce = "right"), G < E ? G = E + Z : G + Ve > E + q && (G = E + q - Ve - Z);
    } else
      ce = a;
    M({ top: G, left: Y }), w(Q), V(ce);
  }, [i, a, t]);
  K(() => {
    if (j && !c) {
      const O = setTimeout(S, 0);
      return () => clearTimeout(O);
    }
  }, [j, c, S]), K(() => {
    if (j && !c) {
      const O = () => S(), D = () => S();
      return window.addEventListener("resize", O), window.addEventListener("scroll", D, !0), document.addEventListener("scroll", D, !0), () => {
        window.removeEventListener("resize", O), window.removeEventListener("scroll", D, !0), document.removeEventListener("scroll", D, !0);
      };
    }
  }, [j, c, S]), K(() => {
    j ? d == null || d(j) : u == null || u(j);
  }, [j, d, u]);
  const H = (O) => {
    c || (l == null || l(O), e === "click" && k(!1));
  }, N = /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: m,
      className: `land-dropdown-results ${j ? "show" : ""} ${C} ${v}`,
      style: t ? {
        position: "fixed",
        top: y.top,
        left: y.left,
        transform: "none"
      } : void 0,
      "data-debug": `alignment: ${C}, placement: ${v}, targetBody: ${t}`,
      onClick: (O) => O.stopPropagation(),
      children: /* @__PURE__ */ s.jsxs("div", { className: `land-dropdown-drop ${f}`, style: x, children: [
        n && !r && /* @__PURE__ */ s.jsx("ul", { className: "land-dropdown-drop-list", children: n == null ? void 0 : n.map((O) => /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "land-dropdown-drop-item",
            onClick: () => H(O),
            children: O.label
          },
          O.key
        )) }),
        r
      ] })
    }
  );
  P0(L, () => {
    j && !c && k(!1);
  });
  const R = () => {
    c || e === "click" && k(!j);
  }, $ = () => {
    c || e === "hover" && k(!0);
  }, I = () => {
    e === "hover" && k(!1);
  };
  return /* @__PURE__ */ s.jsxs(un, { children: [
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: L,
        className: `land-dropdown-toggle ${j ? "show" : ""} ${h} ${c ? "disabled" : ""}`,
        style: p,
        onClick: R,
        onMouseEnter: $,
        onMouseLeave: I,
        "aria-disabled": c,
        "aria-expanded": j,
        "aria-haspopup": "true",
        children: [
          o,
          !t && N
        ]
      }
    ),
    t && j && !c && N
  ] });
}, Dc = ({
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
  const [d, u] = F(e);
  return K(() => {
    u(e);
  }, [e]), /* @__PURE__ */ s.jsxs("div", { className: `land-check ${i}`, style: a, children: [
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `land-check-label ${d ? "checked" : ""} ${o ? "disabled" : ""}`,
        onClick: (h) => {
          o || (u(!d), l == null || l(d, h));
        },
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: `land-check-circle ${d ? "checked" : ""} ${t ? "indeterminate" : ""} ${c && !t ? "animated" : "no-animation"}`, children: [
            /* @__PURE__ */ s.jsx(z, { name: "check", size: 10, className: "land-check-circle-icon" }),
            /* @__PURE__ */ s.jsx(z, { name: "dec", strokeWidth: 8, size: 10, className: "land-check-indeterminate-icon" })
          ] }),
          n
        ]
      }
    ),
    r && /* @__PURE__ */ s.jsxs("div", { className: "land-check-pop hover-pop", children: [
      /* @__PURE__ */ s.jsx(z, { name: "info-fill", className: "land-check-pop-icon" }),
      /* @__PURE__ */ s.jsx(
        Re,
        {
          content: r,
          theme: "dark",
          style: { maxWidth: "200px" },
          placement: "top"
        }
      )
    ] })
  ] });
}, Bc = ({
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
  open: x = !1,
  className: g = "",
  style: L,
  ...m
}) => {
  const [j, k] = F(n), [y, M] = F(r);
  K(() => {
    n !== j && k(n);
  }, [n, j]), K(() => {
    JSON.stringify(r) !== JSON.stringify(y) && M(r);
  }, [r, y]);
  const v = X(() => e ? e.filter(($) => y.includes($.key)).map(($) => $.label) : [], [e, y]), w = X(() => e ? e.filter(($) => y.includes($.key)) : [], [e, y]), C = _(() => {
    var $;
    return e ? o ? v.length === 0 ? t : a !== void 0 && v.length > a ? `${v.slice(0, a).join(i)}等${v.length}个选项` : v.join(i) : j === void 0 || j === "" ? t : ($ = e == null ? void 0 : e.filter((I) => I.key === j)[0]) == null ? void 0 : $.label : t;
  }, [
    o,
    v,
    a,
    i,
    j,
    e,
    t
  ]), V = _(() => {
    if (!l)
      return C();
    if (o)
      return l({
        values: y,
        items: w,
        isMultiple: !0,
        placeholder: t
      });
    {
      const $ = e == null ? void 0 : e.filter((D) => D.key === j)[0], I = $ ? [$] : [], O = $ ? [$.key] : [];
      return l({
        values: O,
        items: I,
        isMultiple: !1,
        placeholder: t
      });
    }
  }, [
    l,
    o,
    y,
    w,
    j,
    e,
    t,
    C
  ]), S = _(
    ($) => {
      if (!$.disabled)
        if (o) {
          const I = [...y], O = I.indexOf($.key);
          O > -1 ? I.splice(O, 1) : I.push($.key), M(I);
          const D = (e == null ? void 0 : e.filter((q) => I.includes(q.key))) || [];
          f == null || f($, D);
        } else
          k($.key), f == null || f($);
    },
    [o, y, e, f]
  ), H = _(
    ($) => o ? y.includes($) : j === $,
    [o, y, j]
  ), N = X(
    () => /* @__PURE__ */ s.jsx("div", { className: "land-select-list", children: e && e.length > 0 ? e == null ? void 0 : e.map(($) => /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `land-select-drop-item ${$.tip ? "hover-pop" : ""} ${H($.key) ? "selected" : ""} ${$.disabled ? "disabled" : ""}`,
        onClick: (I) => {
          I.stopPropagation(), S($);
        },
        children: [
          o && c && /* @__PURE__ */ s.jsx("div", { className: "land-select-checkbox", children: /* @__PURE__ */ s.jsx(
            Dc,
            {
              checked: H($.key),
              disabled: $.disabled
            }
          ) }),
          !c && /* @__PURE__ */ s.jsx("div", { className: "land-select-results-item-label", children: $.label }),
          $.iconTip && /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: `land-select-item-info ${$.iconTip ? "hover-pop" : ""}`,
              children: [
                /* @__PURE__ */ s.jsx(z, { name: "info-stroke", size: 12 }),
                $.iconTip && /* @__PURE__ */ s.jsx(
                  Re,
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
          $.tip && /* @__PURE__ */ s.jsx(
            Re,
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
    )) : /* @__PURE__ */ s.jsx("span", { className: "land-select-drop-empty", children: "暂无内容" }) }),
    [e, H, S, o, c]
  ), R = X(() => e ? l ? V() : C() : t, [
    l,
    V,
    C,
    t
  ]);
  return /* @__PURE__ */ s.jsx("div", { className: `land-select ${g}`, style: L, children: /* @__PURE__ */ s.jsx(Os, { trigger: "click", disabled: p, dropContent: N, ...m, children: /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-select-input ${d} ${p ? "disabled" : ""}`,
      children: [
        /* @__PURE__ */ s.jsx(
          "p",
          {
            className: `${(o ? y.length > 0 : j !== void 0 && j !== "") ? "land-select-trigger" : "land-select-placeholder"}`,
            children: R
          }
        ),
        /* @__PURE__ */ s.jsx(
          z,
          {
            name: "arrow-triangle",
            className: "land-select-value-arrow",
            size: 16
          }
        ),
        u && /* @__PURE__ */ s.jsx(Re, { targetBody: !0, content: u, theme: "dark", ...h })
      ]
    }
  ) }) });
}, gn = ({
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
  viewMode: x = "date"
}) => {
  const g = Le.useMemo(() => {
    if (!r) return [];
    if (u)
      return u;
    const [y, M] = o, v = M - y + 1;
    return Array.from({ length: v }, (w, C) => ({
      key: `${y + C}`,
      label: `${y + C}`
    }));
  }, [r, o, u]), L = Le.useMemo(() => ({
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
  }), []), m = x === "date" || x === "week", j = x === "date" || x === "week" || x === "month" || x === "quarter" || x === "year", k = x === "date" || x === "week";
  return /* @__PURE__ */ s.jsxs("div", { className: `land-calendar-header ${p}`, style: f, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "land-calendar-header-btn-group", children: [
      j && /* @__PURE__ */ s.jsx(
        me,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s.jsx(z, { name: "arrow-double" }),
          className: "land-calendar-btn prev",
          disabled: i,
          onClick: () => l == null ? void 0 : l(t - 1)
        }
      ),
      k && /* @__PURE__ */ s.jsx(
        me,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s.jsx(z, { name: "arrow" }),
          className: "land-calendar-btn prev",
          disabled: i,
          onClick: () => c == null ? void 0 : c(n !== void 0 ? n - 1 : -1)
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "land-calendar-header-center", children: [
      /* @__PURE__ */ s.jsx("div", { className: "land-calendar-year", children: r ? /* @__PURE__ */ s.jsx(
        Bc,
        {
          type: "transparent",
          selected: t.toString(),
          data: g,
          onChange: (y) => l == null ? void 0 : l(Number(y.key))
        }
      ) : /* @__PURE__ */ s.jsx("div", { className: "land-calendar-year-input", children: d || t }) }),
      m && n !== void 0 && /* @__PURE__ */ s.jsx(s.Fragment, { children: e === "zh" ? L[n + 1].zh : L[n + 1].en })
    ] }),
    h && /* @__PURE__ */ s.jsx("div", { className: "land-calendar-right-content", children: h }),
    /* @__PURE__ */ s.jsxs("div", { className: "land-calendar-header-btn-group", children: [
      k && /* @__PURE__ */ s.jsx(
        me,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s.jsx(z, { name: "arrow" }),
          className: "land-calendar-btn next",
          disabled: a,
          onClick: () => c == null ? void 0 : c(n !== void 0 ? n + 1 : 1)
        }
      ),
      j && /* @__PURE__ */ s.jsx(
        me,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s.jsx(z, { name: "arrow-double" }),
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
function Tt(e, t, n) {
  const r = t ? _n(t) : null, o = n ? _n(n) : null;
  return !(r && e < r || o && e > o);
}
function Fc(e) {
  if (!e) return;
  const t = _n(e);
  return t ? t.getFullYear() : void 0;
}
function Oc(e) {
  if (!e) return;
  const t = _n(e);
  return t ? t.getFullYear() : void 0;
}
function H0(e, t, n) {
  const r = Fc(t), o = Oc(n);
  return !(r && e < r || o && e > o);
}
function D0(e, t, n, r) {
  const o = new Date(e, t, 1);
  return Tt(o, n, r);
}
function B0(e, t, n, r) {
  const o = (t - 1) * 3, i = new Date(e, o, 1), a = new Date(e, o + 2, 31);
  return Tt(i, n, r) || Tt(a, n, r);
}
function Vi(e, t, n, r) {
  return Tt(e, n, r) || Tt(t, n, r);
}
function yr(e, t, n, r, o) {
  const i = new Date(e, t, n);
  return Tt(i, r, o);
}
function _t(e, t) {
  const n = (/* @__PURE__ */ new Date()).getFullYear(), r = Fc(e), o = Oc(t);
  return !r && !o ? [n, n] : r && !o ? [r, n] : !r && o ? [n, o] : r && o ? [r, o] : [n, n];
}
function xn(e, t) {
  const [n, r] = _t(e, t);
  return r > n;
}
function F0(e, t, n, r, o) {
  const i = new Date(e, t, 1), a = new Date(e, t + 1, 0), c = i.getDay(), l = a.getDate(), d = /* @__PURE__ */ new Date(), u = [];
  for (let p = 0; p < c; p++) {
    const f = new Date(e, t, 0), x = new Date(f.getTime() - (c - p - 1) * 24 * 60 * 60 * 1e3), g = x.getDate(), L = x.getMonth(), m = x.getFullYear();
    u.push({
      date: x,
      isCurrentMonth: !1,
      isToday: x.toDateString() === d.toDateString(),
      isSelected: !1,
      isDisabled: !yr(m, L, g, r, o),
      dayNumber: g,
      month: L,
      year: m
    });
  }
  for (let p = 1; p <= l; p++) {
    const f = new Date(e, t, p);
    u.push({
      date: f,
      isCurrentMonth: !0,
      isToday: f.toDateString() === d.toDateString(),
      isSelected: n === p,
      isDisabled: !yr(e, t, p, r, o),
      dayNumber: p,
      month: t,
      year: e
    });
  }
  const h = u.length;
  for (let p = 1; p <= 42 - h; p++) {
    const f = new Date(e, t + 1, p), x = f.getDate(), g = f.getMonth(), L = f.getFullYear();
    u.push({
      date: f,
      isCurrentMonth: !1,
      isToday: f.toDateString() === d.toDateString(),
      isSelected: !1,
      isDisabled: !yr(L, g, x, r, o),
      dayNumber: x,
      month: g,
      year: L
    });
  }
  return u;
}
function kt(e, t, n, r, o) {
  const i = new Date(e, t, 1), a = new Date(e, t + 1, 0), c = i.getDay(), l = a.getDate(), d = /* @__PURE__ */ new Date(), u = [];
  let h = [];
  for (let p = 0; p < c; p++) {
    const f = new Date(e, t, 0), x = new Date(f.getTime() - (c - p - 1) * 24 * 60 * 60 * 1e3);
    h.push(x);
  }
  for (let p = 1; p <= l; p++)
    if (h.push(new Date(e, t, p)), h.length === 7) {
      const f = h[0], x = h[6], g = u.length;
      u.push({
        dates: [...h],
        isCurrentWeek: Ti(h, d),
        isSelected: n === g + 1,
        isDisabled: !Vi(f, x, r, o),
        weekStart: f,
        weekEnd: x
      }), h = [];
    }
  if (h.length > 0) {
    for (let g = h.length; g < 7; g++) {
      const L = new Date(e, t + 1, g - h.length + 1);
      h.push(L);
    }
    const p = h[0], f = h[6], x = u.length;
    u.push({
      dates: h,
      isCurrentWeek: Ti(h, d),
      isSelected: n === x + 1,
      isDisabled: !Vi(p, f, r, o),
      weekStart: p,
      weekEnd: f
    });
  }
  return u;
}
function Ti(e, t) {
  return e.some(
    (n) => n.getDate() === t.getDate() && n.getMonth() === t.getMonth() && n.getFullYear() === t.getFullYear()
  );
}
const O0 = [
  { zh: "日", en: "Su" },
  { zh: "一", en: "Mo" },
  { zh: "二", en: "Tu" },
  { zh: "三", en: "We" },
  { zh: "四", en: "Th" },
  { zh: "五", en: "Fr" },
  { zh: "六", en: "Sa" }
];
async function _0(e, t = "zh") {
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
const _c = ({
  language: e = "zh",
  className: t = ""
}) => /* @__PURE__ */ s.jsx("div", { className: `land-calendar-weekdays ${t}`, children: O0.map((n, r) => /* @__PURE__ */ s.jsx("div", { className: "land-calendar-item weekday", children: e === "zh" ? n.zh : n.en }, r)) }), Y0 = ({
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
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-calendar-item day ${e.isToday ? "current" : ""}${e.isSelected ? " selected" : ""}${e.isDisabled ? " disabled" : ""}${e.isCurrentMonth ? "" : " other-month"} ${c}`,
      onClick: l,
      onMouseOver: d,
      onMouseOut: u,
      onMouseEnter: h,
      onMouseLeave: p,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "day-number", children: e.dayNumber }),
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
  const [u, h] = F(/* @__PURE__ */ new Date()), [p, f] = F((/* @__PURE__ */ new Date()).getDate()), [x, g] = F((/* @__PURE__ */ new Date()).getFullYear()), [L, m] = F([]), j = (/* @__PURE__ */ new Date()).getDate(), k = (/* @__PURE__ */ new Date()).getMonth(), y = (/* @__PURE__ */ new Date()).getFullYear(), M = u.getFullYear(), v = u.getMonth();
  K(() => {
    _0(M, e).then(m);
  }, [M, e]);
  const { yearRange: w, shouldShowYearSelector: C } = X(() => {
    const A = _t(t, n), P = xn(t, n);
    return {
      yearRange: A,
      shouldShowYearSelector: P
    };
  }, [t, n]), V = X(
    () => !C && v <= 0,
    [v, C]
  ), S = X(
    () => !C && v >= 11,
    [v, C]
  ), H = () => {
    h(/* @__PURE__ */ new Date()), f(j), g(y), r == null || r(j, k, y);
  }, N = (A) => {
    h((P) => new Date(P.getFullYear(), A, 1));
  }, R = (A) => {
    isNaN(A) || (h((P) => new Date(A, P.getMonth(), 1)), A == y ? p === void 0 && f(j) : f(void 0), g(A));
  }, $ = M === y && v === k, I = F0(M, v, p, t, n), O = (A) => {
    A.isCurrentMonth && (f(A.dayNumber), r == null || r(A.dayNumber, A.month, A.year));
  }, D = (A, P) => {
    A.isCurrentMonth && (o == null || o(A.dayNumber, A.month, A.year, "date", P));
  }, q = (A, P) => {
    A.isCurrentMonth && (i == null || i(A.dayNumber, A.month, A.year, "date", P));
  }, T = (A, P) => {
    A.isCurrentMonth && (a == null || a(A.dayNumber, A.month, A.year, "date", P));
  }, E = (A, P) => {
    A.isCurrentMonth && (c == null || c(A.dayNumber, A.month, A.year, "date", P));
  };
  return /* @__PURE__ */ s.jsxs("div", { className: `land-calendar-date ${l}`, style: d, children: [
    /* @__PURE__ */ s.jsx(
      gn,
      {
        language: e,
        currentYear: x,
        currentMonth: v,
        viewMode: "date",
        shouldShowYearSelector: C,
        yearRange: w,
        monthPrevDisabled: V,
        monthNextDisabled: S,
        onMonthChange: N,
        onYearChange: R
      }
    ),
    /* @__PURE__ */ s.jsx(_c, { language: e }),
    /* @__PURE__ */ s.jsx("div", { className: "land-calendar-days", children: I.map((A, P) => /* @__PURE__ */ s.jsx(
      Y0,
      {
        day: A,
        onDayClick: O,
        onDayMouseOver: D,
        onDayMouseOut: q,
        onDayMouseEnter: T,
        onDayMouseLeave: E,
        children: A.isCurrentMonth && L.map((Z) => Z.date).includes(`${A.month}-${A.dayNumber}`) && /* @__PURE__ */ s.jsx("div", { className: "land-calendar-bottom-dot" })
      },
      `${A.year}-${A.month}-${A.dayNumber}-${P}`
    )) }),
    !$ && /* @__PURE__ */ s.jsx(
      me,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: H
      }
    )
  ] });
}, Z0 = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onWeekChange: r,
  onWeekMouseOver: o,
  onWeekMouseOut: i,
  className: a = "",
  style: c
}) => {
  const [l, d] = F(/* @__PURE__ */ new Date()), [u, h] = F(() => {
    const v = /* @__PURE__ */ new Date(), w = kt(v.getFullYear(), v.getMonth());
    let C = 0;
    for (let S = 0; S < w.length; S++)
      if (w[S].isCurrentWeek) {
        C = S;
        break;
      }
    const V = C + 1;
    return setTimeout(() => {
      const S = w[C];
      r == null || r(S.weekStart, S.weekEnd, v.getFullYear());
    }, 0), V;
  }), p = l.getFullYear(), { yearRange: f, shouldShowYearSelector: x } = X(() => {
    const v = _t(t, n), w = xn(t, n);
    return {
      yearRange: v,
      shouldShowYearSelector: w
    };
  }, [t, n]), g = () => {
    const v = new Date(l.getFullYear(), l.getMonth() - 1, 1);
    d(v);
    const w = kt(v.getFullYear(), v.getMonth());
    let C = 0;
    for (let S = 0; S < w.length; S++)
      if (w[S].isCurrentWeek) {
        C = S;
        break;
      }
    h(C + 1);
    const V = w[C];
    r == null || r(V.weekStart, V.weekEnd, v.getFullYear());
  }, L = () => {
    const v = new Date(l.getFullYear(), l.getMonth() + 1, 1);
    d(v);
    const w = kt(v.getFullYear(), v.getMonth());
    let C = 0;
    for (let S = 0; S < w.length; S++)
      if (w[S].isCurrentWeek) {
        C = S;
        break;
      }
    h(C + 1);
    const V = w[C];
    r == null || r(V.weekStart, V.weekEnd, v.getFullYear());
  }, m = (v) => {
    if (!isNaN(v)) {
      const w = new Date(v, l.getMonth(), l.getDate());
      d(w);
      const C = kt(v, w.getMonth());
      let V = 0;
      for (let H = 0; H < C.length; H++)
        if (C[H].isCurrentWeek) {
          V = H;
          break;
        }
      h(V + 1);
      const S = C[V];
      r == null || r(S.weekStart, S.weekEnd, v);
    }
  }, j = (v) => {
    const w = v + 1;
    h(w);
    const C = y[v];
    r == null || r(C.weekStart, C.weekEnd, p);
  }, k = () => {
    const v = /* @__PURE__ */ new Date();
    d(v);
    const w = kt(v.getFullYear(), v.getMonth());
    let C = 0;
    for (let S = 0; S < w.length; S++)
      if (w[S].isCurrentWeek) {
        C = S;
        break;
      }
    h(C + 1);
    const V = w[C];
    r == null || r(V.weekStart, V.weekEnd, v.getFullYear());
  }, y = kt(p, l.getMonth(), u, t, n);
  Array.from({ length: y.length }, (v, w) => ({
    key: `${w + 1}`,
    label: `${e === "zh" ? "第" : "Week "}${w + 1}${e === "zh" ? "周" : ""}`
  }));
  const M = y.some((v) => v.isCurrentWeek);
  return /* @__PURE__ */ s.jsxs("div", { className: `land-calendar-week ${a}`, style: c, children: [
    /* @__PURE__ */ s.jsx(
      gn,
      {
        language: e,
        currentYear: p,
        currentMonth: l.getMonth(),
        viewMode: "week",
        shouldShowYearSelector: x,
        yearRange: f,
        onMonthChange: (v) => {
          const w = l.getMonth(), C = v - w;
          C === 1 || C === -11 ? L() : (C === -1 || C === 11) && g();
        },
        onYearChange: m
      }
    ),
    /* @__PURE__ */ s.jsx(_c, { language: e }),
    /* @__PURE__ */ s.jsx("div", { className: "land-calendar-week-days", children: y.map((v, w) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `land-calendar-week-row ${v.isSelected ? "selected" : ""} ${v.isCurrentWeek ? "current" : ""} ${v.isDisabled ? "disabled" : ""}`,
        onClick: () => !v.isDisabled && j(w),
        onMouseOver: (C) => {
          v.isDisabled || o == null || o(v.weekStart, v.weekEnd, p, "week", C);
        },
        onMouseOut: (C) => {
          v.isDisabled || i == null || i(v.weekStart, v.weekEnd, p, "week", C);
        },
        children: v.dates.map((C, V) => /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `land-calendar-item day ${C.toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? "current" : ""} ${C.getMonth() !== l.getMonth() ? "other-month" : ""}`,
            children: /* @__PURE__ */ s.jsx("div", { className: "day-number", children: C.getDate() })
          },
          V
        ))
      },
      w
    )) }),
    !M && /* @__PURE__ */ s.jsx(
      me,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: k
      }
    )
  ] });
}, U0 = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onMonthChange: r,
  onMonthMouseOver: o,
  onMonthMouseOut: i,
  className: a = "",
  style: c
}) => {
  const l = /* @__PURE__ */ new Date(), d = l.getMonth(), u = l.getFullYear(), [h, p] = F(u), [f, x] = F(d), [g, L] = F(u), { yearRange: m, shouldShowYearSelector: j } = X(() => {
    const N = _t(t, n), R = xn(t, n);
    return {
      yearRange: N,
      shouldShowYearSelector: R
    };
  }, [t, n]), k = () => {
    const N = h - 1;
    p(N);
  }, y = () => {
    const N = h + 1;
    p(N);
  }, M = (N) => {
    isNaN(N) || p(N);
  }, v = (N) => {
    x(N), L(h), r == null || r(N, h);
  }, w = () => {
    p(u), x(d), L(u), r == null || r(d, u);
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
  ], V = (N) => h === u && N === d, S = (N) => h === g && N === f, H = h === u;
  return /* @__PURE__ */ s.jsxs("div", { className: `land-calendar-month ${a}`, style: c, children: [
    /* @__PURE__ */ s.jsx(
      gn,
      {
        language: e,
        currentYear: h,
        viewMode: "month",
        shouldShowYearSelector: j,
        yearRange: m,
        onMonthChange: (N) => {
          N > 11 ? y() : N < 0 && k();
        },
        onYearChange: M
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "land-calendar-months-grid", children: C.map((N, R) => {
      const $ = D0(h, N.value, t, n);
      return /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `land-calendar-month-item ${V(N.value) ? "current" : ""} ${S(N.value) ? "selected" : ""} ${$ ? "" : "disabled"}`,
          onClick: () => $ && v(N.value),
          onMouseOver: (I) => {
            $ && (o == null || o(N.value, h, "month", I));
          },
          onMouseOut: (I) => {
            $ && (i == null || i(N.value, h, "month", I));
          },
          children: /* @__PURE__ */ s.jsx("div", { className: "month-name", children: e === "zh" ? N.zh : N.en })
        },
        R
      );
    }) }),
    !H && /* @__PURE__ */ s.jsx(
      me,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: w
      }
    )
  ] });
}, K0 = ({
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
  const [h, p] = F(d), [f, x] = F(u()), [g, L] = F(d), { yearRange: m, shouldShowYearSelector: j } = X(() => {
    const N = _t(t, n), R = xn(t, n);
    return {
      yearRange: N,
      shouldShowYearSelector: R
    };
  }, [t, n]), k = () => {
    const N = h - 1;
    p(N);
  }, y = () => {
    const N = h + 1;
    p(N);
  }, M = (N) => {
    isNaN(N) || p(N);
  }, v = (N) => {
    x(N), L(h), r == null || r(N, h);
  }, w = () => {
    const N = u();
    p(d), x(N), L(d), r == null || r(N, d);
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
  ], V = (N) => h === d && N === u(), S = (N) => h === g && N === f, H = h === d;
  return /* @__PURE__ */ s.jsxs("div", { className: `land-calendar-quarter ${a}`, style: c, children: [
    /* @__PURE__ */ s.jsx(
      gn,
      {
        language: e,
        currentYear: h,
        viewMode: "quarter",
        shouldShowYearSelector: j,
        yearRange: m,
        onMonthChange: (N) => {
          N > 11 ? y() : N < 0 && k();
        },
        onYearChange: M
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "land-calendar-quarters-grid", children: C.map((N, R) => {
      const $ = B0(h, N.value, t, n);
      return /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: `land-calendar-quarter-item ${V(N.value) ? "current" : ""} ${S(N.value) ? "selected" : ""} ${$ ? "" : "disabled"}`,
          onClick: () => $ && v(N.value),
          onMouseOver: (I) => {
            $ && (o == null || o(N.value, h, "quarter", I));
          },
          onMouseOut: (I) => {
            $ && (i == null || i(N.value, h, "quarter", I));
          },
          children: [
            /* @__PURE__ */ s.jsx("div", { className: "quarter-header", children: /* @__PURE__ */ s.jsx("div", { className: "quarter-name", children: e === "zh" ? N.zh : N.en }) }),
            /* @__PURE__ */ s.jsx("div", { className: "quarter-months", children: N.months }),
            /* @__PURE__ */ s.jsx("div", { className: "quarter-description", children: N.description })
          ]
        },
        R
      );
    }) }),
    !H && /* @__PURE__ */ s.jsx(
      me,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: w
      }
    )
  ] });
}, G0 = ({
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
  const [h, p] = F(u()), [f, x] = F(d), { yearRange: g, shouldShowYearSelector: L } = X(() => {
    const N = _t(t, n), R = xn(t, n);
    return {
      yearRange: N,
      shouldShowYearSelector: R
    };
  }, [t, n, d]), m = () => {
    const N = h - 10;
    p(N);
  }, j = () => {
    const N = h + 10;
    p(N);
  }, k = (N) => {
    p(N);
  }, y = (N) => {
    x(N), r == null || r(N);
  }, M = () => {
    p(u()), x(d), r == null || r(d);
  }, v = X(() => {
    const N = [];
    for (let R = 0; R < 10; R++) {
      const $ = h + R;
      N.push($);
    }
    return N;
  }, [h]), w = X(() => {
    const N = [], [R, $] = g, I = Math.floor(R / 10) * 10, O = Math.floor($ / 10) * 10;
    for (let D = I; D <= O; D += 10)
      N.push({
        key: D.toString(),
        label: `${D}-${D + 9}`
      });
    return N;
  }, [g]), C = (N) => N === d, V = (N) => N === f, S = (N) => H0(N, t, n), H = v.includes(d);
  return /* @__PURE__ */ s.jsxs("div", { className: `land-calendar-year ${a}`, style: c, children: [
    /* @__PURE__ */ s.jsx(
      gn,
      {
        language: e,
        currentYear: h,
        viewMode: "year",
        shouldShowYearSelector: L,
        yearRange: g,
        onMonthChange: (N) => {
          N > 11 ? j() : N < 0 && m();
        },
        onYearChange: k,
        customYearDisplay: `${h}-${h + 9}`,
        customYearOptions: w
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "land-calendar-years-grid", children: v.map((N, R) => {
      const $ = S(N);
      return /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: `land-calendar-year-item ${C(N) ? "current" : ""} ${V(N) ? "selected" : ""} ${$ ? "" : "disabled"}`,
          onClick: () => $ && y(N),
          onMouseOver: (I) => {
            $ && (o == null || o(N, "year", I));
          },
          onMouseOut: (I) => {
            $ && (i == null || i(N, "year", I));
          },
          children: [
            /* @__PURE__ */ s.jsx("div", { className: "year-number", children: N }),
            !$ && /* @__PURE__ */ s.jsx("div", { className: "disabled-overlay", children: e === "zh" ? "超出范围" : "Out of range" })
          ]
        },
        R
      );
    }) }),
    !H && /* @__PURE__ */ s.jsx(
      me,
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
}, X0 = ({
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
  onWeekMouseOut: x,
  onMonthMouseOver: g,
  onMonthMouseOut: L,
  onQuarterMouseOver: m,
  onQuarterMouseOut: j,
  onYearMouseOver: k,
  onYearMouseOut: y,
  className: M,
  style: v,
  ...w
}) => {
  const C = () => {
    switch (e) {
      case "date":
        return /* @__PURE__ */ s.jsx(
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
            className: M
          }
        );
      case "week":
        return /* @__PURE__ */ s.jsx(
          Z0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onWeekChange: i,
            onWeekMouseOver: f,
            onWeekMouseOut: x
          }
        );
      case "month":
        return /* @__PURE__ */ s.jsx(
          U0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onMonthChange: a,
            onMonthMouseOver: g,
            onMonthMouseOut: L
          }
        );
      case "quarter":
        return /* @__PURE__ */ s.jsx(
          K0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onQuarterChange: c,
            onQuarterMouseOver: m,
            onQuarterMouseOut: j
          }
        );
      case "year":
        return /* @__PURE__ */ s.jsx(
          G0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onYearChange: l,
            onYearMouseOver: k,
            onYearMouseOut: y
          }
        );
      default:
        return /* @__PURE__ */ s.jsx(
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
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `land-calendar land-calendar-${e} ${M}`,
      style: v,
      ...w,
      children: C()
    }
  );
}, $m = ({
  checked: e,
  data: t,
  animated: n,
  onChange: r,
  style: o,
  className: i = ""
}) => /* @__PURE__ */ s.jsx("div", { className: `land-checkbox ${i}`, style: o, children: t == null ? void 0 : t.map(
  (a) => /* @__PURE__ */ s.jsx(
    Dc,
    {
      checked: e.includes(a.key),
      onCheckedChange: () => r == null ? void 0 : r(a),
      animated: n,
      ...a
    },
    a.key
  )
) }), Rm = ({
  checked: e = !1,
  gap: t = 2,
  strokeWidth: n = 2,
  radius: r = 6,
  children: o,
  className: i,
  style: a
}) => /* @__PURE__ */ s.jsx(
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
), Am = ({
  open: e = !1,
  title: t,
  hideIcon: n,
  content: r,
  className: o = "",
  style: i
}) => /* @__PURE__ */ s.jsxs("details", { className: `land-collapse ${o}`, style: i, open: e, children: [
  /* @__PURE__ */ s.jsxs(
    "summary",
    {
      className: "land-collapse-title",
      children: [
        !n && /* @__PURE__ */ s.jsx(z, { name: "arrow", strokeWidth: 4, size: 16, stroke: "var(--color-gray-10)" }),
        t
      ]
    }
  ),
  /* @__PURE__ */ s.jsx("div", { className: "land-collapse-content", children: /* @__PURE__ */ s.jsx("div", { className: "land-collapse-content-details", children: r }) })
] }), Im = ({ children: e, style: t, className: n }) => {
  const [r, o] = F(132), i = document.querySelector(".land-header"), a = document.querySelector(".land-footer");
  return K(() => {
    let c, l;
    i ? c = i.getBoundingClientRect().height : c = 0, a ? l = a.getBoundingClientRect().height : l = 0, o(c + l);
  }), /* @__PURE__ */ s.jsx("div", { className: `land-content ${n}`, style: {
    "--land-content-min-height": `${r}px`,
    ...t
  }, children: e });
}, q0 = [
  { key: "hex", label: "HEX" },
  { key: "rgb", label: "RGB" },
  { key: "hsv", label: "HSV" },
  { key: "hsl", label: "HSL" }
], z0 = "hex", Ri = { h: 0, s: 100, v: 100 }, Ai = "var(--color-gray-3)", oe = {
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
}, J0 = ({ hue: e, onPanelChange: t }) => {
  const n = J(null), [r, o] = F(!1), [i, a] = F({ x: 0, y: 0 }), c = X(() => {
    const f = oe.hsvToRgb(e, 100, 100);
    return {
      background: `linear-gradient(to right, #fff 0%, ${oe.rgbToHex(f.r, f.g, f.b)} 100%),
                   linear-gradient(to top, #000 0%, transparent 100%)`
    };
  }, [e]), l = _(() => {
    o(!1);
  }, []), d = _(
    (f) => {
      if (!r || !n.current) return;
      const { left: x, top: g } = n.current.getBoundingClientRect(), L = f.clientX - x, m = f.clientY - g, j = n.current.clientWidth, k = n.current.clientHeight, y = Math.max(0, Math.min(j, L)), M = Math.max(0, Math.min(k, m));
      a({ x: y, y: M });
      const v = y / j, w = 1 - M / k;
      t(v, w);
    },
    [r, t]
  );
  K(() => {
    if (r)
      return document.addEventListener("mousemove", d), document.addEventListener("mouseup", l), () => {
        document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", l);
      };
  }, [r, d, l]);
  const u = _(
    (f) => {
      var C, V, S;
      f.preventDefault(), o(!0);
      const { left: x, top: g } = ((C = n.current) == null ? void 0 : C.getBoundingClientRect()) || {
        left: 0,
        top: 0
      }, L = f.clientX - x, m = f.clientY - g, j = ((V = n.current) == null ? void 0 : V.clientWidth) || 0, k = ((S = n.current) == null ? void 0 : S.clientHeight) || 0, y = Math.max(0, Math.min(j, L)), M = Math.max(0, Math.min(k, m));
      a({ x: y, y: M });
      const v = y / j, w = 1 - M / k;
      t(v, w);
    },
    [t]
  ), h = _(
    (f) => {
      var C, V, S;
      if (!r) return;
      f.preventDefault();
      const { left: x, top: g } = ((C = n.current) == null ? void 0 : C.getBoundingClientRect()) || {
        left: 0,
        top: 0
      }, L = f.clientX - x, m = f.clientY - g, j = ((V = n.current) == null ? void 0 : V.clientWidth) || 0, k = ((S = n.current) == null ? void 0 : S.clientHeight) || 0, y = Math.max(0, Math.min(j, L)), M = Math.max(0, Math.min(k, m));
      a({ x: y, y: M });
      const v = y / j, w = 1 - M / k;
      t(v, w);
    },
    [r, t]
  ), p = _(() => {
    o(!1);
  }, []);
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: n,
      className: "land-color-picker-panel-move-area",
      style: c,
      onMouseDown: u,
      onMouseMove: h,
      onMouseUp: p,
      children: /* @__PURE__ */ s.jsx(
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
}, Q0 = ({ hue: e, onHueChange: t }) => {
  const n = J(null), r = _(
    (i) => {
      if (!n.current) return;
      const a = n.current.getBoundingClientRect(), c = Math.max(0, Math.min(1, (i.clientX - a.left) / a.width));
      t(c * 360);
    },
    [t]
  ), o = _(
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
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: n,
      className: "land-color-picker-slider land-color-picker-hue-slider",
      onClick: r,
      onMouseDown: o,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "land-color-picker-slider-track" }),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "land-color-picker-slider-thumb",
            style: { left: `${e / 360 * 100}%` }
          }
        )
      ]
    }
  );
}, W0 = ({
  hue: e,
  alpha: t,
  onAlphaChange: n
}) => {
  const r = J(null), o = X(() => {
    const c = oe.hsvToRgb(e, 100, 100);
    return {
      background: `linear-gradient(to right, transparent 0%, ${oe.rgbToHex(c.r, c.g, c.b)} 100%)`
    };
  }, [e]), i = _(
    (c) => {
      if (!r.current) return;
      const l = r.current.getBoundingClientRect(), d = Math.max(0, Math.min(1, (c.clientX - l.left) / l.width));
      n(d);
    },
    [n]
  ), a = _(
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
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: r,
      className: "land-color-picker-slider land-color-picker-alpha-slider",
      onClick: i,
      onMouseDown: a,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "land-color-picker-slider-track" }),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "land-color-picker-slider-track",
            style: o
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "land-color-picker-slider-thumb",
            style: { left: `${t * 100}%` }
          }
        )
      ]
    }
  );
}, zn = ({
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
  onFocus: x,
  onBlur: g,
  onClear: L,
  className: m = "",
  style: j,
  ...k
}) => {
  const y = J(null), M = J(null), v = _(() => {
    !y.current || !M.current || (y.current.scrollLeft = M.current.scrollLeft);
  }, []), w = _((C) => {
    y.current && (y.current.scrollLeft = 0), g == null || g(C);
  }, []);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-input ${u ? "disabled" : ""} ${L ? "clear" : ""} ${e} text-${h} ${m}`,
      style: {
        width: typeof l == "number" ? `${l}px` : l,
        ...j
      },
      children: [
        o && /* @__PURE__ */ s.jsx("div", { className: "input-beforeContent", children: o }),
        /* @__PURE__ */ s.jsxs("div", { className: "land-input-content", children: [
          a && /* @__PURE__ */ s.jsxs("div", { className: "input-prefix-content", children: [
            /* @__PURE__ */ s.jsx("p", { className: "input-prefix", children: a }),
            /* @__PURE__ */ s.jsx("div", { className: "prefix-value", children: t || r })
          ] }),
          a && /* @__PURE__ */ s.jsx("p", { className: "input-prefix-empty", children: a }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              ref: M,
              placeholder: r,
              type: n,
              value: t,
              max: d,
              onKeyDown: (C) => {
                C.code === "Enter" && (f == null || f(t, C));
              },
              onClick: (C) => C.stopPropagation(),
              onFocus: x,
              onBlur: w,
              onChange: (C) => {
                v == null || v(), p == null || p(C.target.value, C);
              },
              onScroll: v,
              ...k
            }
          ),
          c && t && /* @__PURE__ */ s.jsxs("div", { className: "input-suffix-content", children: [
            a && /* @__PURE__ */ s.jsx("p", { className: "input-prefix-empty", children: a }),
            /* @__PURE__ */ s.jsx("div", { className: "suffix-value", children: t }),
            /* @__PURE__ */ s.jsx("p", { className: "input-suffix", children: c })
          ] })
        ] }),
        c && t && /* @__PURE__ */ s.jsx("p", { className: "input-suffix-empty", children: c }),
        i && /* @__PURE__ */ s.jsx("div", { children: i }),
        L && /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `land-input-clear-icon ${t ? "" : "hide"}`,
            onClick: L,
            children: /* @__PURE__ */ s.jsx(z, { name: "error-fill" })
          }
        )
      ]
    }
  );
}, Ze = ({
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx("div", { className: "land-divider-line" }),
      o && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("div", { className: "land-divider-content", children: o }),
        /* @__PURE__ */ s.jsx("div", { className: "land-divider-line land-divider-line-right" })
      ] })
    ]
  }
), Oe = ({
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
  ...x
}) => {
  const [g, L] = F(e);
  K(() => e !== void 0 && L(e), [e]);
  const m = (y, M) => {
    c || y < r - n / 2 || y > o + n / 2 || (L(y), l == null || l(y, M));
  }, j = _(
    (y, M) => {
      const v = Number(y);
      v > o || v < r || typeof v == "number" && v % n || (L(v), l == null || l(v, M));
    },
    [o, r, n, l]
  ), k = _(
    (y) => {
      if (!p || c) return;
      y.preventDefault(), y.stopPropagation();
      const M = y.deltaY > 0 ? -n : n, v = g + M;
      v >= r && v <= o && m(v, y);
    },
    [p, c, g, n, r, o]
  );
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-number-input ${u ? "hide-arrow-button" : ""}`,
      "data-wheel-enabled": p,
      style: {
        width: typeof d == "number" ? `${d}px` : d,
        ...f
      },
      onClick: (y) => y.stopPropagation(),
      onWheel: k,
      children: [
        /* @__PURE__ */ s.jsx(
          Re,
          {
            targetBody: !0,
            className: "land-number-input-wheel-popover",
            content: p ? "滚动鼠标滚轮调整数值" : "",
            placement: "top",
            theme: "dark",
            children: /* @__PURE__ */ s.jsx(
              zn,
              {
                className: "land-number-input-input",
                type: t,
                inputType: "number",
                value: String(g),
                disabled: c,
                prefix: i,
                suffix: a,
                onChange: (y, M) => j(y, M),
                style: {
                  paddingRight: u ? "0" : "40px"
                },
                textAlign: h,
                placeholder: x.placeholder,
                ...x
              }
            )
          }
        ),
        !u && /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "land-numberInput-arrow",
            style: {
              borderLeft: t === "border" ? "1px solid var(--color-border-primary)" : "",
              background: "inherit"
            },
            children: [
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `land-numberInput-add ${g === o || c ? "disabled" : ""}`,
                  onClick: (y) => m == null ? void 0 : m(g + n, y),
                  children: /* @__PURE__ */ s.jsx(z, { name: "arrow", size: 16 })
                }
              ),
              t === "border" && /* @__PURE__ */ s.jsx(Ze, { gap: 0, lineLength: "32px" }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `land-numberInput-dec ${g === r || c ? "disabled" : ""}`,
                  onClick: (y) => m == null ? void 0 : m(g - n, y),
                  children: /* @__PURE__ */ s.jsx(z, { name: "arrow", size: 16 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Em = ({
  color: e = Ai,
  onChange: t,
  style: n,
  className: r = "",
  disabled: o
}) => {
  const [i, a] = F(z0), [c, l] = F(Ri.h), [d, u] = F(1), [h, p] = F(""), [f, x] = F({ r: 0, g: 0, b: 0 }), [g, L] = F(Ri), [m, j] = F({ h: 0, s: 0, l: 0 }), [k, y] = F({ x: 0, y: 0 }), M = J(!1), v = J(""), w = X(() => {
    switch (i) {
      case "hex":
        return h || "#000000";
      case "rgb":
        return `rgb(${f.r}, ${f.g}, ${f.b})`;
      case "hsv":
        return `hsv(${g.h}, ${g.s}%, ${g.v}%)`;
      case "hsl":
        return `hsl(${m.h}, ${m.s}%, ${m.l}%)`;
      default:
        return "#000000";
    }
  }, [i, h, f, g, m]), C = X(() => {
    switch (i) {
      case "hex":
        return h || "#000000";
      case "rgb":
        return oe.rgbToHex(
          f.r,
          f.g,
          f.b
        );
      case "hsv":
        const T = oe.hsvToRgb(
          g.h,
          g.s,
          g.v
        );
        return oe.rgbToHex(T.r, T.g, T.b);
      case "hsl":
        const E = oe.hslToRgb(
          m.h,
          m.s,
          m.l
        );
        return oe.rgbToHex(E.r, E.g, E.b);
      default:
        return "#000000";
    }
  }, [i, h, f, g, m]), V = X(() => {
    const T = oe.hexToRgb(C);
    return T ? `rgba(${T.r}, ${T.g}, ${T.b}, ${d})` : `rgba(0, 0, 0, ${d})`;
  }, [C, d]), S = X(
    () => ({
      background: V,
      ...n
    }),
    [V, n]
  );
  K(() => {
    if (e && e !== Ai && !M.current) {
      const T = oe.hexToRgb(e);
      if (T) {
        const E = oe.rgbToHsv(T.r, T.g, T.b), A = oe.rgbToHsl(T.r, T.g, T.b);
        p(e), x(T), L(E), j(A), l(E.h), M.current = !0;
      }
    } else M.current || (l(0), L({ h: 0, s: 0, v: 50 }), j({ h: 0, s: 0, l: 50 }), x({ r: 128, g: 128, b: 128 }), p("#808080"), M.current = !0);
  }, [e]);
  const H = _(() => {
    const T = `${w}-${C}-${V}`;
    T !== v.current && (v.current = T, t == null || t(w, C, V));
  }, [t, w, C, V]);
  K(() => {
    M.current && H();
  }, [w, C, V, H]);
  const N = _(
    (T, E) => {
      y({ x: T, y: E });
      const A = T * 100, P = E * 100;
      L({ h: c, s: A, v: P });
      const G = oe.hsvToRgb(c, A, P), Y = oe.rgbToHsl(G.r, G.g, G.b), Q = oe.rgbToHex(G.r, G.g, G.b);
      x(G), j(Y), p(Q);
    },
    [c]
  ), R = (T) => {
    l(T);
    const E = { ...g, h: T };
    L(E);
    const A = oe.hsvToRgb(T, E.s, E.v), P = oe.rgbToHsl(A.r, A.g, A.b), Z = oe.rgbToHex(A.r, A.g, A.b);
    x(A), j(P), p(Z);
  }, $ = (T) => {
    u(T);
  }, I = (T) => {
    let E = T.replace("#", "").toUpperCase();
    E.length > 6 && (E = E.slice(0, 6)), E = E.replace(/[^0-9A-F]/g, "");
    const A = E.length > 0 ? `#${E}` : "#";
    if (p(A), E.length === 6) {
      const P = oe.hexToRgb(A);
      if (P) {
        const Z = oe.rgbToHsv(P.r, P.g, P.b), G = oe.rgbToHsl(P.r, P.g, P.b);
        x(P), L(Z), j(G), l(Z.h);
      }
    }
  }, O = (T, E) => {
    const A = Math.max(0, Math.min(255, Math.round(E))), P = { ...f, [T]: A };
    x(P);
    const Z = oe.rgbToHsv(P.r, P.g, P.b), G = oe.rgbToHsl(P.r, P.g, P.b), Y = oe.rgbToHex(P.r, P.g, P.b);
    L(Z), j(G), p(Y), l(Z.h);
  }, D = (T, E) => {
    let A = E;
    T === "h" ? A = (E % 360 + 360) % 360 : A = Math.max(0, Math.min(100, Math.round(E)));
    const P = { ...g, [T]: A };
    L(P);
    const Z = oe.hsvToRgb(P.h, P.s, P.v), G = oe.rgbToHsl(Z.r, Z.g, Z.b), Y = oe.rgbToHex(Z.r, Z.g, Z.b);
    x(Z), j(G), p(Y), l(P.h);
  }, q = (T, E) => {
    let A = E;
    T === "h" ? A = (E % 360 + 360) % 360 : A = Math.max(0, Math.min(100, Math.round(E)));
    const P = { ...m, [T]: A };
    j(P);
    const Z = oe.hslToRgb(P.h, P.s, P.l), G = oe.rgbToHsv(Z.r, Z.g, Z.b), Y = oe.rgbToHex(Z.r, Z.g, Z.b);
    x(Z), L(G), p(Y), l(P.h);
  };
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `land-color-picker ${o ? "disabled" : ""} ${r}`,
      children: /* @__PURE__ */ s.jsx(
        Os,
        {
          trigger: "click",
          disabled: o,
          dropContent: /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "land-color-picker-drop-panel",
              onClick: (T) => T.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsx(J0, { hue: c, onPanelChange: N }),
                /* @__PURE__ */ s.jsxs("div", { className: "land-color-picker-panel-move-sliders", children: [
                  /* @__PURE__ */ s.jsx(
                    Q0,
                    {
                      hue: c,
                      onHueChange: (T) => R(T)
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    W0,
                    {
                      hue: c,
                      alpha: d,
                      onAlphaChange: $
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsxs("div", { className: "land-color-picker-panel-color-mode", children: [
                  /* @__PURE__ */ s.jsx(
                    Bc,
                    {
                      type: "transparent",
                      data: q0,
                      onChange: (T) => a(T.key),
                      selected: i,
                      placeholder: "选择模式"
                    }
                  ),
                  /* @__PURE__ */ s.jsxs("div", { className: "land-color-picker-panel-color-input", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "land-color-picker-panel-color-input-numbers", children: [
                      i === "hex" && /* @__PURE__ */ s.jsx(
                        zn,
                        {
                          prefix: "#",
                          value: h.replace("#", ""),
                          onChange: (T) => I(T)
                        }
                      ),
                      i === "rgb" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                        /* @__PURE__ */ s.jsx(
                          Oe,
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
                        /* @__PURE__ */ s.jsx(
                          Oe,
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
                        /* @__PURE__ */ s.jsx(
                          Oe,
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
                      i === "hsv" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                        /* @__PURE__ */ s.jsx(
                          Oe,
                          {
                            width: 48,
                            placeholder: "H",
                            value: g.h,
                            onChange: (T) => D("h", T),
                            min: 0,
                            max: 360,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          Oe,
                          {
                            width: 48,
                            placeholder: "S",
                            value: g.s,
                            onChange: (T) => D("s", T),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          Oe,
                          {
                            width: 48,
                            placeholder: "V",
                            value: g.v,
                            onChange: (T) => D("v", T),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        )
                      ] }),
                      i === "hsl" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                        /* @__PURE__ */ s.jsx(
                          Oe,
                          {
                            width: 48,
                            placeholder: "H",
                            value: m.h,
                            onChange: (T) => q("h", T),
                            min: 0,
                            max: 360,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          Oe,
                          {
                            width: 48,
                            placeholder: "S",
                            value: m.s,
                            onChange: (T) => q("s", T),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          Oe,
                          {
                            width: 48,
                            placeholder: "L",
                            value: m.l,
                            onChange: (T) => q("l", T),
                            min: 0,
                            max: 100,
                            step: 1,
                            hideArrowButton: !0,
                            textAlign: "center"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ s.jsx(
                      Oe,
                      {
                        width: 56,
                        value: Math.round(d * 100),
                        onChange: (T) => {
                          const E = Math.max(
                            0,
                            Math.min(100, Math.round(T))
                          );
                          u(E / 100);
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
          children: /* @__PURE__ */ s.jsx(
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
}, Pm = ({
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
  const [p, f] = F(!1), [x, g] = F(l ? new Date(l) : null), [L, m] = F(""), [j, k] = F(""), [y, M] = F(!1);
  X(() => {
    e && p && f(!1);
  }, [e, p]);
  const v = _((E, A) => {
    if (!E) return "";
    const P = E.getFullYear(), Z = E.getMonth() + 1, G = E.getDate();
    switch (A) {
      case "year":
        return `${P}年`;
      case "month":
        return `${P}年${Z}月`;
      case "quarter":
        const Y = Math.ceil(Z / 3);
        return `${P}年第${Y}季度`;
      case "week":
        const Q = new Date(P, 0, 1), ce = Math.floor((E.getTime() - Q.getTime()) / (24 * 60 * 60 * 1e3)), se = Math.ceil((ce + Q.getDay() + 1) / 7);
        return `${P}年第${se}周`;
      case "date":
      default:
        return `${P}-${Z.toString().padStart(2, "0")}-${G.toString().padStart(2, "0")}`;
    }
  }, []), w = _((E) => {
    if (!E.trim()) return null;
    const A = /* @__PURE__ */ new Date(), P = A.getFullYear(), Z = A.getMonth() + 1;
    A.getDate();
    const G = [
      // YYYY-MM-DD
      {
        pattern: /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
        extract: (Y) => ({
          year: parseInt(Y[1]),
          month: parseInt(Y[2]),
          day: parseInt(Y[3])
        })
      },
      // YYYY/MM/DD
      {
        pattern: /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/,
        extract: (Y) => ({
          year: parseInt(Y[1]),
          month: parseInt(Y[2]),
          day: parseInt(Y[3])
        })
      },
      // YYYY年MM月DD日
      {
        pattern: /^(\d{4})年(\d{1,2})月(\d{1,2})日$/,
        extract: (Y) => ({
          year: parseInt(Y[1]),
          month: parseInt(Y[2]),
          day: parseInt(Y[3])
        })
      },
      // YYYY年MM月
      {
        pattern: /^(\d{4})年(\d{1,2})月$/,
        extract: (Y) => ({
          year: parseInt(Y[1]),
          month: parseInt(Y[2]),
          day: 1
        })
      },
      // YYYY年
      {
        pattern: /^(\d{4})年$/,
        extract: (Y) => ({
          year: parseInt(Y[1]),
          month: 1,
          day: 1
        })
      },
      // MM月DD日
      {
        pattern: /^(\d{1,2})月(\d{1,2})日$/,
        extract: (Y) => ({
          year: P,
          month: parseInt(Y[1]),
          day: parseInt(Y[2])
        })
      },
      // DD日
      {
        pattern: /^(\d{1,2})日$/,
        extract: (Y) => ({
          year: P,
          month: Z,
          day: parseInt(Y[1])
        })
      }
    ];
    for (const { pattern: Y, extract: Q } of G) {
      const ce = E.match(Y);
      if (ce)
        try {
          const { year: se, month: ue, day: be } = Q(ce), Ne = new Date(se, ue - 1, be);
          if (Ne.getFullYear() === se && Ne.getMonth() === ue - 1 && Ne.getDate() === be)
            return Ne;
        } catch {
          continue;
        }
    }
    return null;
  }, []);
  X(() => {
    m(l ? v(new Date(l), c) : "");
  }, [l, c, v]);
  const C = _((...E) => {
    if (e) return;
    let A = null;
    switch (c) {
      case "year":
        const P = E[0];
        A = new Date(P, 0, 1);
        break;
      case "month":
        const [Z, G] = E;
        A = new Date(G, Z - 1, 1);
        break;
      case "quarter":
        const [Y, Q] = E, ce = (Y - 1) * 3;
        A = new Date(Q, ce, 1);
        break;
      case "week":
        A = E[0];
        break;
      case "date":
      default:
        const [se, ue, be] = E;
        A = new Date(be, ue - 1, se);
        break;
    }
    g(A), u || (m(v(A, c)), t == null || t(A), f(!1));
  }, [c, u, v, t, e]), V = _(() => {
    e || (x && (m(v(x, c)), t == null || t(x)), f(!1));
  }, [x, c, v, t, e]), S = _(() => {
    e || (g(l ? new Date(l) : null), f(!1));
  }, [l, e]), H = _((E) => {
    if (e) {
      f(!1);
      return;
    }
    !E && u && g(l ? new Date(l) : null), f(E);
  }, [u, l, e]), N = _(() => {
    e || (g(null), m(""), k(""), t == null || t(null));
  }, [t, e]), R = _((E, A) => {
    e || k(E);
  }, [e]), $ = _(() => {
    e || (h && c === "date" ? (M(!0), k(L)) : f(!0));
  }, [e, h, c, L]), I = _(() => {
    if (!e && h && c === "date") {
      if (M(!1), j.trim()) {
        const E = w(j);
        E ? (g(E), m(v(E, c)), t == null || t(E)) : m(v(x, c));
      } else
        g(null), m(""), t == null || t(null);
      k("");
    }
  }, [h, c, j, w, x, v, t, e]), O = _((E) => {
    if (!e && h && c === "date" && E.trim()) {
      const A = w(E);
      A && (g(A), m(v(A, c)), t == null || t(A), M(!1), k(""));
    }
  }, [h, c, w, v, t, e]), D = X(() => {
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
  }, [c, d]), q = X(() => {
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
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `land-date-picker ${r}`,
      style: n,
      children: /* @__PURE__ */ s.jsx(
        Os,
        {
          open: p,
          disabled: e,
          trigger: "click",
          onOpen: H,
          dropContent: /* @__PURE__ */ s.jsxs("div", { className: "land-date-picker-dropdown-content", children: [
            /* @__PURE__ */ s.jsx(
              X0,
              {
                viewMode: q,
                ...T,
                ...a
              }
            ),
            u && /* @__PURE__ */ s.jsxs("div", { className: "land-date-picker-dropdown-actions", children: [
              /* @__PURE__ */ s.jsx(
                me,
                {
                  text: "取消",
                  type: "outline",
                  className: "land-date-picker-dropdown-cancel-button",
                  onClick: S
                }
              ),
              /* @__PURE__ */ s.jsx(
                me,
                {
                  text: "确定",
                  type: "background",
                  className: "land-date-picker-dropdown-confirm-button",
                  onClick: V
                }
              )
            ] })
          ] }),
          ...o,
          children: /* @__PURE__ */ s.jsxs("div", { className: `land-date-picker-input ${L ? "" : "empty"} ${y ? "input-mode" : ""} `, children: [
            /* @__PURE__ */ s.jsx(
              zn,
              {
                type: "transparent",
                className: "land-date-picker-input-value",
                placeholder: D,
                value: y ? j : L,
                onFocus: $,
                onBlur: I,
                onChange: h && c === "date" && !e ? R : void 0,
                onClear: N,
                onEnter: O,
                ...i
              }
            ),
            /* @__PURE__ */ s.jsx(z, { name: "calendar", className: "land-date-picker-icon" })
          ] })
        }
      )
    }
  );
}, Hm = ({
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
  size: f = "medium",
  onClose: x,
  onSubmit: g,
  onCancel: L,
  children: m,
  wrapStyle: j,
  wrapClassName: k,
  contentStyle: y,
  contentClassName: M,
  bodyStyle: v,
  bodyClassName: w,
  maskStyle: C
}) => {
  const V = X(() => {
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
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-dialog ${e ? "show" : ""} ${k}`,
      style: {
        "--land-dialog-content-width": V,
        ...j
      },
      children: [
        t && e && /* @__PURE__ */ s.jsx(
          Ce.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            className: "land-dialog-mask",
            style: C
          }
        ),
        e && /* @__PURE__ */ s.jsxs(
          Ce.div,
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
            className: `land-dialog-content ${M}`,
            style: {
              ...y,
              width: V
            },
            children: [
              i || (n || x || r || o ? /* @__PURE__ */ s.jsxs("div", { className: "land-dialog-header", children: [
                r || /* @__PURE__ */ s.jsx("div", { className: "land-dialog-header-title", children: n }),
                o || x && /* @__PURE__ */ s.jsx("div", { className: "land-dialog-header-close", children: /* @__PURE__ */ s.jsx(z, { name: "close", onClick: x, size: 24 }) })
              ] }) : null),
              a && /* @__PURE__ */ s.jsx(Ze, {}),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `land-dialog-body ${w}`,
                  style: v,
                  children: m
                }
              ),
              u && /* @__PURE__ */ s.jsx(Ze, {}),
              d || /* @__PURE__ */ s.jsxs("div", { className: "land-dialog-footer", children: [
                l || (h || p || L || g) && /* @__PURE__ */ s.jsxs("div", { className: "land-dialog-footer-btn", children: [
                  L && /* @__PURE__ */ s.jsx(me, { type: "fill", status: "default", onClick: L, children: h }),
                  g && /* @__PURE__ */ s.jsx(
                    me,
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
}, Dm = ({
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
  cancelDisabled: x,
  submitDisabled: g,
  cancelButtonProps: L,
  submitButtonProps: m,
  minWidth: j,
  maxWidth: k,
  size: y = "auto",
  onClose: M,
  onSubmit: v,
  onCancel: w,
  children: C,
  wrapStyle: V,
  wrapClassName: S = "",
  contentStyle: H,
  contentClassName: N = "",
  bodyStyle: R,
  bodyClassName: $ = "",
  maskStyle: I
}) => {
  const O = X(() => {
    let T = "320px";
    if (t === "bottom")
      T = "100%";
    else
      switch (y) {
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
  }, [y, t]), D = X(() => {
    let T = "100%";
    if (t === "bottom")
      switch (y) {
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
  }, [t]), q = X(() => M && (r || a || o), [M, a, o]);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-drawer ${e ? "show" : ""} ${t} ${S}`,
      style: V,
      children: [
        n && e && /* @__PURE__ */ s.jsx(
          Ce.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            className: "land-drawer-mask",
            style: I
          }
        ),
        e && /* @__PURE__ */ s.jsxs(
          Ce.div,
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
            className: `land-drawer-content ${N}`,
            style: {
              width: O,
              height: D,
              minWidth: j,
              maxWidth: k,
              ...H
            },
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "land-drawer-header-wrapper", children: [
                M && /* @__PURE__ */ s.jsx("div", { className: "land-drawer-header-close", children: /* @__PURE__ */ s.jsx(z, { name: "close", onClick: M, strokeWidth: 3 }) }),
                q && /* @__PURE__ */ s.jsx(Ze, { direction: "column", lineLength: "36px", gap: 12 }),
                a || (r || M || o || i ? /* @__PURE__ */ s.jsxs("div", { className: "land-drawer-header", children: [
                  o || /* @__PURE__ */ s.jsx("div", { className: "land-drawer-header-title", children: r }),
                  i && /* @__PURE__ */ s.jsx("div", { className: "land-drawer-header-right", children: i })
                ] }) : null)
              ] }),
              c && (a || M || o || i) && /* @__PURE__ */ s.jsx(Ze, {}),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `land-drawer-body ${$}`,
                  style: R,
                  children: C
                }
              ),
              h && (u || v || w || l || d) && /* @__PURE__ */ s.jsx(Ze, {}),
              (u || v || w || l || d) && /* @__PURE__ */ s.jsxs("div", { className: "land-drawer-footer", children: [
                d || (p || f || w || v) && /* @__PURE__ */ s.jsxs("div", { className: "land-drawer-footer-btn", children: [
                  w && /* @__PURE__ */ s.jsx(
                    me,
                    {
                      type: "fill",
                      disabled: x,
                      status: "default",
                      onClick: w,
                      ...L,
                      children: p
                    }
                  ),
                  v && /* @__PURE__ */ s.jsx(
                    me,
                    {
                      type: "background",
                      disabled: g,
                      status: "primary",
                      onClick: v,
                      ...m,
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
}, e3 = (e, t) => {
  let n;
  return function(...o) {
    const i = () => {
      clearTimeout(n), e(...o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  };
}, Bm = ({
  line: e = 1,
  text: t,
  children: n,
  open: r = !0,
  style: o,
  className: i,
  popoverProps: a,
  setMaxWidth: c
}) => {
  const l = J(null), [d, u] = F(!1), [h, p] = F(0), f = t || n || "", x = _(() => {
    const m = l.current;
    if (m)
      if (e === 1) {
        const j = m.offsetWidth < m.scrollWidth;
        p(m.offsetWidth), u(j);
      } else {
        const j = m.offsetHeight < m.scrollHeight;
        p(m.offsetWidth), u(j);
      }
  }, [e]), g = _(
    e3(x, 100),
    [x]
  );
  K(() => {
    const m = l.current;
    if (!m) return;
    const j = new ResizeObserver(() => {
      g();
    });
    j.observe(m);
    let k = m.parentElement;
    const y = [];
    for (; k && k !== document.body; ) {
      const w = new ResizeObserver(() => {
        g();
      });
      w.observe(k), y.push(w), k = k.parentElement;
    }
    const M = () => {
      g();
    };
    window.addEventListener("resize", M);
    const v = new MutationObserver((w) => {
      let C = !1;
      w.forEach((V) => {
        if (V.type === "childList" || V.type === "attributes") {
          const S = V.target;
          (m.contains(S) || S.contains(m) || m.parentElement && m.parentElement.contains(S)) && (C = !0);
        }
      }), C && g();
    });
    return v.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style", "class"]
    }), x(), () => {
      j.disconnect(), y.forEach((w) => w.disconnect()), window.removeEventListener("resize", M), v.disconnect();
    };
  }, [x, g, f]), K(() => {
    const m = setTimeout(() => {
      x();
    }, 0);
    return () => clearTimeout(m);
  }, [f, x]);
  const L = /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `land-ellipsis ${e > 1 ? "line-multiple" : "line-single"} ${i || ""}`,
      style: o,
      children: /* @__PURE__ */ s.jsx(
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
  return !d || !r ? L : /* @__PURE__ */ s.jsx(
    Re,
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
      children: L
    }
  );
}, Fm = ({
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
}) => /* @__PURE__ */ s.jsx(
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
), Om = ({ children: e, style: t, className: n }) => /* @__PURE__ */ s.jsx("div", { className: `land-footer ${n}`, style: t, children: e });
var qe = /* @__PURE__ */ ((e) => (e.ColumnFit = "column-fit", e.ColumnFill = "column-fill", e.RowFit = "row-fit", e.RowFill = "row-fill", e.ColumnRepeat = "column-repeat", e.RowRepeat = "row-repeat", e.Default = "default", e))(qe || {});
const _m = ({
  type: e = qe.Default,
  autoSize: t = 100,
  repeatNum: n = 1,
  gap: r = 8,
  columnGap: o,
  rowGap: i,
  children: a,
  style: c,
  className: l = ""
}) => {
  const d = X(() => {
    let u = {
      display: "grid",
      columnGap: o || r,
      rowGap: i || r
    };
    if (e === qe.Default)
      return { ...u, ...c };
    switch (e) {
      case qe.ColumnFit:
        return { ...u, gridTemplateColumns: `repeat(auto-fit, minmax(${t}px, 1fr))`, ...c };
      case qe.ColumnFill:
        return { ...u, gridTemplateColumns: `repeat(auto-fill, minmax(${t}px, 1fr))`, ...c };
      case qe.RowFit:
        return { ...u, gridTemplateRows: `repeat(auto-fit, minmax(${t}px, 1fr))`, ...c };
      case qe.RowFill:
        return { ...u, gridTemplateRows: `repeat(auto-fill, minmax(${t}px, 1fr))`, ...c };
      case qe.ColumnRepeat:
        return { ...u, gridTemplateColumns: `repeat(${n}, 1fr)`, ...c };
      case qe.RowRepeat:
        return { ...u, gridTemplateRows: `repeat(${n}, 1fr)`, ...c };
      default:
        return { ...u, ...c };
    }
  }, [e, t, n, r, c]);
  return /* @__PURE__ */ s.jsx("div", { className: `land-grid ${l}`, style: d, children: a });
};
var $n = /* @__PURE__ */ ((e) => (e.SELF = "self", e.OTHERS = "others", e.SIMPLE = "simple", e.DISABLED = "disabled", e))($n || {});
const Yc = ({
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
  const x = J(null), g = J(null);
  return K(() => {
    f && e && g.current && g.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [e, f, n]), /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: x,
      className: `land-menu ${p} ${n === "column" ? "column" : ""} ${o ? "borderBottom" : ""} ${f ? "scroll-to-view" : ""}`,
      style: h,
      children: t == null ? void 0 : t.map((L, m) => /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: e === L.key ? g : null,
          className: `land-menu-item ${L.clickType === $n.SIMPLE ? "simple" : ""} ${L.clickType === $n.DISABLED || L.disabled ? "disabled" : ""}`,
          style: d,
          children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                role: "button",
                className: `land-menu-link ${n === "column" ? "column" : ""} ${r === "column" && !L.titleDeputy ? "titleColumn" : ""} ${e === L.key && !(L.titleDeputy || i) ? "active" : ""} ${L.titleDeputy || i ? "title-deputy" : ""} ${u}`,
                onClick: (j) => {
                  L.titleDeputy || i || L.clickType === $n.DISABLED || L.disabled || (j.stopPropagation(), a == null || a(L));
                },
                children: [
                  typeof L.icon == "string" ? /* @__PURE__ */ s.jsx("img", { src: L.icon, className: "land-menu-icon" }) : L.icon,
                  /* @__PURE__ */ s.jsxs("div", { className: "land-menu-title-wrap", children: [
                    /* @__PURE__ */ s.jsx("p", { className: `land-menu-title ${L.titleDeputy || i ? "title-deputy" : ""}`, "data-title": L.label, children: L.label }),
                    L.subText && /* @__PURE__ */ s.jsx("span", { className: "land-menu-sub-title", children: L.subText })
                  ] }),
                  L.isNew && /* @__PURE__ */ s.jsx("i", { className: "land-menu-new", children: typeof L.isNew == "boolean" ? "NEW" : L.isNew })
                ]
              },
              L.key
            ),
            L.dropData && /* @__PURE__ */ s.jsx("div", { className: `land-menu-drop-wrap ${L.open ? "open" : ""}`, children: /* @__PURE__ */ s.jsx("div", { className: "land-menu-drop", children: /* @__PURE__ */ s.jsx(
              Yc,
              {
                data: L.dropData,
                onChange: (j) => c == null ? void 0 : c(j, L),
                direction: "column",
                titleDirection: r,
                scrollToView: f,
                ...l
              }
            ) }) })
          ]
        },
        L.key ?? m
      ))
    }
  );
}, Ym = ({
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
  className: x = ""
}) => {
  var m;
  const [g, L] = F(!1);
  return K(() => {
    const j = () => L(!1), k = () => L(!1);
    return window.addEventListener("scroll", j, { passive: !0 }), window.addEventListener("resize", k, { passive: !0 }), () => {
      window.removeEventListener("scroll", j), window.removeEventListener("resize", k);
    };
  }, []), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-header ${t ? "fixed" : ""} ${n ? "filter" : ""} ${r ? "border-bottom" : ""} ${o ? "applications" : ""} ${x}`,
      style: {
        height: e,
        "--land-header-mobile-size": `${p}px`,
        ...f
      },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "land-header-logo", onClick: c, children: [
          o && /* @__PURE__ */ s.jsxs(
            "button",
            {
              className: "land-header-application",
              onClick: (j) => j.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsx(z, { name: "application" }),
                /* @__PURE__ */ s.jsx("div", { className: "land-application-drop", children: o })
              ]
            }
          ),
          typeof i == "string" ? /* @__PURE__ */ s.jsx("img", { src: i }) : i,
          l && i && a && /* @__PURE__ */ s.jsx(Ze, { direction: "column", lineLength: "24px" }),
          a
        ] }),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `land-header-nav ${g ? "showMobileNav" : ""}`,
            style: {
              justifyContent: d
            },
            children: u && /* @__PURE__ */ s.jsx(
              Yc,
              {
                border: !1,
                ...u,
                onChange: (j) => {
                  var k;
                  (k = u.onChange) == null || k.call(u, j), L(!1);
                },
                onDropChange: (j, k) => {
                  var y;
                  (y = u.onDropChange) == null || y.call(u, j, k), L(!1);
                }
              }
            )
          }
        ),
        h && /* @__PURE__ */ s.jsx("div", { className: "land-header-right", children: h }),
        u && u.data && ((m = u.data) == null ? void 0 : m.length) > 0 && /* @__PURE__ */ s.jsx(
          me,
          {
            className: "land-mobile-toggle-button",
            icon: /* @__PURE__ */ s.jsx(z, { name: "more-line" }),
            type: "text",
            onClick: () => L(!g)
          }
        )
      ]
    }
  );
}, t3 = ({
  width: e = "100%",
  height: t = 24,
  radius: n = "var(--radius-m)",
  start: r = "var(--color-bg-secondary)",
  stop: o = "var(--color-bg-tertiary)",
  style: i,
  className: a = ""
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: `land-skeleton ${a}`,
    style: {
      width: typeof e == "number" ? `${e}px` : e,
      height: typeof t == "number" ? `${t}px` : t,
      borderRadius: typeof n == "number" ? `${n}px` : n,
      ...i
    },
    children: /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "land-skeleton-content",
        style: {
          background: `linear-gradient(90deg, ${r} 0%, ${r} 20%, ${o} 50%, ${o} 80%, ${r} 100%, ${r} 120%, ${o} 150%, ${o} 180%, ${r} 200%)`
        }
      }
    )
  }
), n3 = ({
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
  const d = J(null), [u, h] = F("loading"), [p, f] = F(e), [x, g] = F("auto"), [L, m] = F(!1), [j, k] = F("idle");
  K(() => {
    h("loading"), f(e), m(!1), k("idle");
  }, [e]);
  const y = () => {
    L ? k("success") : h("success"), setTimeout(() => {
      L ? k("success") : h("success");
    }, 150), d.current && g(`${d.current.width / d.current.height}`);
  }, M = () => {
    L ? k("error") : (h("error"), l && !L ? (m(!0), k("loading"), f(l)) : c && typeof c == "string" && !L && (m(!0), k("loading"), f(c)));
  };
  K(() => {
    const S = d.current;
    if (!S) {
      h("idle"), setTimeout(() => {
        h("idle");
      }, 300);
      return;
    }
    return S.complete && (L ? k("success") : h("success"), setTimeout(() => {
      L ? k("success") : h("success");
    }, 150), g(`${d.current.width / d.current.height}`)), S.addEventListener("load", y), S.addEventListener("error", M), () => {
      S == null || S.removeEventListener("load", y), S == null || S.removeEventListener("error", M);
    };
  }, [p, L]);
  const v = n || (u === "success" || j === "success" ? x : "1"), w = () => c && typeof c != "string" && u === "error" && (j === "error" || !l) ? c : u === "error" && (j === "error" || !l) && (!c || typeof c == "string") ? /* @__PURE__ */ s.jsx(N0, { type: "error", title: "加载失败", direction: "column", className: "land-image-alert", noBg: !0 }) : null, C = u === "loading" || L && j === "loading", V = p && (u === "success" || j === "success" || C);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-image ${C ? "loading" : u === "success" || j === "success" ? "success" : "error"} ${r ?? ""}`,
      style: {
        aspectRatio: v,
        ...a
      },
      children: [
        C && /* @__PURE__ */ s.jsx(
          t3,
          {
            width: "100%",
            height: "100%",
            radius: "var(--radius-m)",
            className: "land-image-skeleton"
          }
        ),
        w(),
        V && /* @__PURE__ */ s.jsx(
          "img",
          {
            ref: d,
            alt: t,
            src: p,
            className: `land-image-img ${u === "success" || j === "success" ? "loaded" : ""} ${o}`,
            style: {
              opacity: u === "success" || j === "success" ? 1 : 0,
              ...i
            }
          }
        )
      ]
    }
  );
}, Zm = ({ children: e, style: t, className: n }) => /* @__PURE__ */ s.jsx("div", { className: `land-layout ${n}`, style: t, children: e });
var Ee = function() {
  return Ee = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ee.apply(this, arguments);
};
function $t(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function r3(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var s3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, o3 = /* @__PURE__ */ r3(
  function(e) {
    return s3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), de = "-ms-", tn = "-moz-", ae = "-webkit-", Zc = "comm", Jn = "rule", _s = "decl", i3 = "@import", Uc = "@keyframes", a3 = "@layer", Kc = Math.abs, Ys = String.fromCharCode, qr = Object.assign;
function c3(e, t) {
  return we(e, 0) ^ 45 ? (((t << 2 ^ we(e, 0)) << 2 ^ we(e, 1)) << 2 ^ we(e, 2)) << 2 ^ we(e, 3) : 0;
}
function Gc(e) {
  return e.trim();
}
function ze(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, n) {
  return e.replace(t, n);
}
function Rn(e, t, n) {
  return e.indexOf(t, n);
}
function we(e, t) {
  return e.charCodeAt(t) | 0;
}
function Rt(e, t, n) {
  return e.slice(t, n);
}
function Ke(e) {
  return e.length;
}
function Xc(e) {
  return e.length;
}
function zt(e, t) {
  return t.push(e), e;
}
function l3(e, t) {
  return e.map(t).join("");
}
function Ii(e, t) {
  return e.filter(function(n) {
    return !ze(n, t);
  });
}
var Qn = 1, At = 1, qc = 0, Fe = 0, ke = 0, Yt = "";
function Wn(e, t, n, r, o, i, a, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Qn, column: At, length: a, return: "", siblings: c };
}
function tt(e, t) {
  return qr(Wn("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Lt(e) {
  for (; e.root; )
    e = tt(e.root, { children: [e] });
  zt(e, e.siblings);
}
function d3() {
  return ke;
}
function u3() {
  return ke = Fe > 0 ? we(Yt, --Fe) : 0, At--, ke === 10 && (At = 1, Qn--), ke;
}
function Ue() {
  return ke = Fe < qc ? we(Yt, Fe++) : 0, At++, ke === 10 && (At = 1, Qn++), ke;
}
function ft() {
  return we(Yt, Fe);
}
function An() {
  return Fe;
}
function er(e, t) {
  return Rt(Yt, e, t);
}
function zr(e) {
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
function h3(e) {
  return Qn = At = 1, qc = Ke(Yt = e), Fe = 0, [];
}
function p3(e) {
  return Yt = "", e;
}
function Cr(e) {
  return Gc(er(Fe - 1, Jr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function f3(e) {
  for (; (ke = ft()) && ke < 33; )
    Ue();
  return zr(e) > 2 || zr(ke) > 3 ? "" : " ";
}
function m3(e, t) {
  for (; --t && Ue() && !(ke < 48 || ke > 102 || ke > 57 && ke < 65 || ke > 70 && ke < 97); )
    ;
  return er(e, An() + (t < 6 && ft() == 32 && Ue() == 32));
}
function Jr(e) {
  for (; Ue(); )
    switch (ke) {
      case e:
        return Fe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Jr(ke);
        break;
      case 40:
        e === 41 && Jr(e);
        break;
      case 92:
        Ue();
        break;
    }
  return Fe;
}
function g3(e, t) {
  for (; Ue() && e + ke !== 57; )
    if (e + ke === 84 && ft() === 47)
      break;
  return "/*" + er(t, Fe - 1) + "*" + Ys(e === 47 ? e : Ue());
}
function x3(e) {
  for (; !zr(ft()); )
    Ue();
  return er(e, Fe);
}
function v3(e) {
  return p3(In("", null, null, null, [""], e = h3(e), 0, [0], e));
}
function In(e, t, n, r, o, i, a, c, l) {
  for (var d = 0, u = 0, h = a, p = 0, f = 0, x = 0, g = 1, L = 1, m = 1, j = 0, k = "", y = o, M = i, v = r, w = k; L; )
    switch (x = j, j = Ue()) {
      case 40:
        if (x != 108 && we(w, h - 1) == 58) {
          Rn(w += te(Cr(j), "&", "&\f"), "&\f", Kc(d ? c[d - 1] : 0)) != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Cr(j);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += f3(x);
        break;
      case 92:
        w += m3(An() - 1, 7);
        continue;
      case 47:
        switch (ft()) {
          case 42:
          case 47:
            zt(j3(g3(Ue(), An()), t, n, l), l);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * g:
        c[d++] = Ke(w) * m;
      case 125 * g:
      case 59:
      case 0:
        switch (j) {
          case 0:
          case 125:
            L = 0;
          case 59 + u:
            m == -1 && (w = te(w, /\f/g, "")), f > 0 && Ke(w) - h && zt(f > 32 ? Pi(w + ";", r, n, h - 1, l) : Pi(te(w, " ", "") + ";", r, n, h - 2, l), l);
            break;
          case 59:
            w += ";";
          default:
            if (zt(v = Ei(w, t, n, d, u, o, c, k, y = [], M = [], h, i), i), j === 123)
              if (u === 0)
                In(w, t, v, v, y, i, h, c, M);
              else
                switch (p === 99 && we(w, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    In(e, v, v, r && zt(Ei(e, v, v, 0, 0, o, c, k, o, y = [], h, M), M), o, M, h, c, r ? y : M);
                    break;
                  default:
                    In(w, v, v, v, [""], M, 0, c, M);
                }
        }
        d = u = f = 0, g = m = 1, k = w = "", h = a;
        break;
      case 58:
        h = 1 + Ke(w), f = x;
      default:
        if (g < 1) {
          if (j == 123)
            --g;
          else if (j == 125 && g++ == 0 && u3() == 125)
            continue;
        }
        switch (w += Ys(j), j * g) {
          case 38:
            m = u > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            c[d++] = (Ke(w) - 1) * m, m = 1;
            break;
          case 64:
            ft() === 45 && (w += Cr(Ue())), p = ft(), u = h = Ke(k = w += x3(An())), j++;
            break;
          case 45:
            x === 45 && Ke(w) == 2 && (g = 0);
        }
    }
  return i;
}
function Ei(e, t, n, r, o, i, a, c, l, d, u, h) {
  for (var p = o - 1, f = o === 0 ? i : [""], x = Xc(f), g = 0, L = 0, m = 0; g < r; ++g)
    for (var j = 0, k = Rt(e, p + 1, p = Kc(L = a[g])), y = e; j < x; ++j)
      (y = Gc(L > 0 ? f[j] + " " + k : te(k, /&\f/g, f[j]))) && (l[m++] = y);
  return Wn(e, t, n, o === 0 ? Jn : c, l, d, u, h);
}
function j3(e, t, n, r) {
  return Wn(e, t, n, Zc, Ys(d3()), Rt(e, 2, -2), 0, r);
}
function Pi(e, t, n, r, o) {
  return Wn(e, t, n, _s, Rt(e, 0, r), Rt(e, r + 1, -1), r, o);
}
function zc(e, t, n) {
  switch (c3(e, t)) {
    case 5103:
      return ae + "print-" + e + e;
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
      return ae + e + e;
    case 4789:
      return tn + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + e + tn + e + de + e + e;
    case 5936:
      switch (we(e, t + 11)) {
        case 114:
          return ae + e + de + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ae + e + de + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ae + e + de + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ae + e + de + e + e;
    case 6165:
      return ae + e + de + "flex-" + e + e;
    case 5187:
      return ae + e + te(e, /(\w+).+(:[^]+)/, ae + "box-$1$2" + de + "flex-$1$2") + e;
    case 5443:
      return ae + e + de + "flex-item-" + te(e, /flex-|-self/g, "") + (ze(e, /flex-|baseline/) ? "" : de + "grid-row-" + te(e, /flex-|-self/g, "")) + e;
    case 4675:
      return ae + e + de + "flex-line-pack" + te(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return ae + e + de + te(e, "shrink", "negative") + e;
    case 5292:
      return ae + e + de + te(e, "basis", "preferred-size") + e;
    case 6060:
      return ae + "box-" + te(e, "-grow", "") + ae + e + de + te(e, "grow", "positive") + e;
    case 4554:
      return ae + te(e, /([^-])(transform)/g, "$1" + ae + "$2") + e;
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, ae + "$1$`$1");
    case 4968:
      return te(te(e, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + de + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ae + e + e;
    case 4200:
      if (!ze(e, /flex-|baseline/)) return de + "grid-column-align" + Rt(e, t) + e;
      break;
    case 2592:
    case 3360:
      return de + te(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, ze(r.props, /grid-\w+-end/);
      }) ? ~Rn(e + (n = n[t].value), "span", 0) ? e : de + te(e, "-start", "") + e + de + "grid-row-span:" + (~Rn(n, "span", 0) ? ze(n, /\d+/) : +ze(n, /\d+/) - +ze(e, /\d+/)) + ";" : de + te(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return ze(r.props, /grid-\w+-start/);
      }) ? e : de + te(te(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, ae + "$1$2") + e;
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
      if (Ke(e) - 1 - t > 6)
        switch (we(e, t + 1)) {
          case 109:
            if (we(e, t + 4) !== 45)
              break;
          case 102:
            return te(e, /(.+:)(.+)-([^]+)/, "$1" + ae + "$2-$3$1" + tn + (we(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Rn(e, "stretch", 0) ? zc(te(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return te(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, c, l, d) {
        return de + o + ":" + i + d + (a ? de + o + "-span:" + (c ? l : +l - +i) + d : "") + e;
      });
    case 4949:
      if (we(e, t + 6) === 121)
        return te(e, ":", ":" + ae) + e;
      break;
    case 6444:
      switch (we(e, we(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return te(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ae + (we(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ae + "$2$3$1" + de + "$2box$3") + e;
        case 100:
          return te(e, ":", ":" + de) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return te(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Yn(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function k3(e, t, n, r) {
  switch (e.type) {
    case a3:
      if (e.children.length) break;
    case i3:
    case _s:
      return e.return = e.return || e.value;
    case Zc:
      return "";
    case Uc:
      return e.return = e.value + "{" + Yn(e.children, r) + "}";
    case Jn:
      if (!Ke(e.value = e.props.join(","))) return "";
  }
  return Ke(n = Yn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function L3(e) {
  var t = Xc(e);
  return function(n, r, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, i) || "";
    return a;
  };
}
function w3(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function y3(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case _s:
        e.return = zc(e.value, e.length, n);
        return;
      case Uc:
        return Yn([tt(e, { value: te(e.value, "@", "@" + ae) })], r);
      case Jn:
        if (e.length)
          return l3(n = e.props, function(o) {
            switch (ze(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Lt(tt(e, { props: [te(o, /:(read-\w+)/, ":" + tn + "$1")] })), Lt(tt(e, { props: [o] })), qr(e, { props: Ii(n, r) });
                break;
              case "::placeholder":
                Lt(tt(e, { props: [te(o, /:(plac\w+)/, ":" + ae + "input-$1")] })), Lt(tt(e, { props: [te(o, /:(plac\w+)/, ":" + tn + "$1")] })), Lt(tt(e, { props: [te(o, /:(plac\w+)/, de + "input-$1")] })), Lt(tt(e, { props: [o] })), qr(e, { props: Ii(n, r) });
                break;
            }
            return "";
          });
    }
}
var C3 = {
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
}, gt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Jc = "active", Qc = "data-styled-version", tr = "6.1.18", Zs = `/*!sc*/
`, Zn = typeof window < "u" && typeof document < "u", M3 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Hi = /invalid hook call/i, yn = /* @__PURE__ */ new Set(), b3 = function(e, t) {
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
        Hi.test(a) ? (i = !1, yn.delete(r)) : o.apply(void 0, $t([a], c, !1));
      }, J(), i && !yn.has(r) && (console.warn(r), yn.add(r));
    } catch (a) {
      Hi.test(a.message) && yn.delete(r);
    } finally {
      console.error = o;
    }
  }
}, nr = Object.freeze([]), It = Object.freeze({});
function N3(e, t, n) {
  return n === void 0 && (n = It), e.theme !== n.theme && e.theme || t || n.theme;
}
var Qr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), S3 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, V3 = /(^-|-$)/g;
function Di(e) {
  return e.replace(S3, "-").replace(V3, "");
}
var T3 = /(a)(d)/gi, Cn = 52, Bi = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Wr(e) {
  var t, n = "";
  for (t = Math.abs(e); t > Cn; t = t / Cn | 0) n = Bi(t % Cn) + n;
  return (Bi(t % Cn) + n).replace(T3, "$1-$2");
}
var Mr, Wc = 5381, ct = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, el = function(e) {
  return ct(Wc, e);
};
function $3(e) {
  return Wr(el(e) >>> 0);
}
function tl(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function br(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var nl = typeof Symbol == "function" && Symbol.for, rl = nl ? Symbol.for("react.memo") : 60115, R3 = nl ? Symbol.for("react.forward_ref") : 60112, A3 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, I3 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, sl = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, E3 = ((Mr = {})[R3] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Mr[rl] = sl, Mr);
function Fi(e) {
  return ("type" in (t = e) && t.type.$$typeof) === rl ? sl : "$$typeof" in e ? E3[e.$$typeof] : A3;
  var t;
}
var P3 = Object.defineProperty, H3 = Object.getOwnPropertyNames, Oi = Object.getOwnPropertySymbols, D3 = Object.getOwnPropertyDescriptor, B3 = Object.getPrototypeOf, _i = Object.prototype;
function ol(e, t, n) {
  if (typeof t != "string") {
    if (_i) {
      var r = B3(t);
      r && r !== _i && ol(e, r, n);
    }
    var o = H3(t);
    Oi && (o = o.concat(Oi(t)));
    for (var i = Fi(e), a = Fi(t), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!(l in I3 || n && n[l] || a && l in a || i && l in i)) {
        var d = D3(t, l);
        try {
          P3(e, l, d);
        } catch {
        }
      }
    }
  }
  return e;
}
function Et(e) {
  return typeof e == "function";
}
function Us(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ut(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Yi(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Pt(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function es(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Pt(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = es(e[r], t[r]);
  else if (Pt(t)) for (var r in t) e[r] = es(e[r], t[r]);
  return e;
}
function Ks(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var F3 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function O3() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function Zt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(O3.apply(void 0, $t([F3[e]], t, !1)).trim());
}
var _3 = function() {
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(Zs);
    return n;
  }, e;
}(), Y3 = 1 << 30, En = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new Map(), Pn = 1, Mn = function(e) {
  if (En.has(e)) return En.get(e);
  for (; Un.has(Pn); ) Pn++;
  var t = Pn++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Y3)) throw Zt(16, "".concat(t));
  return En.set(e, t), Un.set(t, e), t;
}, Z3 = function(e, t) {
  Pn = t + 1, En.set(e, t), Un.set(t, e);
}, U3 = "style[".concat(gt, "][").concat(Qc, '="').concat(tr, '"]'), K3 = new RegExp("^".concat(gt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), G3 = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, X3 = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Zs), o = [], i = 0, a = r.length; i < a; i++) {
    var c = r[i].trim();
    if (c) {
      var l = c.match(K3);
      if (l) {
        var d = 0 | parseInt(l[1], 10), u = l[2];
        d !== 0 && (Z3(u, d), G3(e, u, l[3]), e.getTag().insertRules(d, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, Zi = function(e) {
  for (var t = document.querySelectorAll(U3), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(gt) !== Jc && (X3(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function q3() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var il = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var l = Array.from(c.querySelectorAll("style[".concat(gt, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(gt, Jc), r.setAttribute(Qc, tr);
  var a = q3();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, z3 = function() {
  function e(t) {
    this.element = il(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
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
}(), J3 = function() {
  function e(t) {
    this.element = il(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Q3 = function() {
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
}(), Ui = Zn, W3 = { isServer: !Zn, useCSSOMInjection: !M3 }, al = function() {
  function e(t, n, r) {
    t === void 0 && (t = It), n === void 0 && (n = {});
    var o = this;
    this.options = Ee(Ee({}, W3), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Zn && Ui && (Ui = !1, Zi(this)), Ks(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, l = "", d = function(h) {
          var p = function(m) {
            return Un.get(m);
          }(h);
          if (p === void 0) return "continue";
          var f = i.names.get(p), x = a.getGroup(h);
          if (f === void 0 || !f.size || x.length === 0) return "continue";
          var g = "".concat(gt, ".g").concat(h, '[id="').concat(p, '"]'), L = "";
          f !== void 0 && f.forEach(function(m) {
            m.length > 0 && (L += "".concat(m, ","));
          }), l += "".concat(x).concat(g, '{content:"').concat(L, '"}').concat(Zs);
        }, u = 0; u < c; u++) d(u);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Mn(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Zn && Zi(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ee(Ee({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Q3(o) : r ? new z3(o) : new J3(o);
    }(this.options), new _3(t)));
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
}(), em = /&/g, tm = /^\s*\/\/.*$/gm;
function cl(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = cl(n.children, t)), n;
  });
}
function nm(e) {
  var t, n, r, o = It, i = o.options, a = i === void 0 ? It : i, c = o.plugins, l = c === void 0 ? nr : c, d = function(p, f, x) {
    return x.startsWith(n) && x.endsWith(n) && x.replaceAll(n, "").length > 0 ? ".".concat(t) : p;
  }, u = l.slice();
  u.push(function(p) {
    p.type === Jn && p.value.includes("&") && (p.props[0] = p.props[0].replace(em, n).replace(r, d));
  }), a.prefix && u.push(y3), u.push(k3);
  var h = function(p, f, x, g) {
    f === void 0 && (f = ""), x === void 0 && (x = ""), g === void 0 && (g = "&"), t = g, n = f, r = new RegExp("\\".concat(n, "\\b"), "g");
    var L = p.replace(tm, ""), m = v3(x || f ? "".concat(x, " ").concat(f, " { ").concat(L, " }") : L);
    a.namespace && (m = cl(m, a.namespace));
    var j = [];
    return Yn(m, L3(u.concat(w3(function(k) {
      return j.push(k);
    })))), j;
  };
  return h.hash = l.length ? l.reduce(function(p, f) {
    return f.name || Zt(15), ct(p, f.name);
  }, Wc).toString() : "", h;
}
var rm = new al(), ts = nm(), ll = Le.createContext({ shouldForwardProp: void 0, styleSheet: rm, stylis: ts });
ll.Consumer;
Le.createContext(void 0);
function Ki() {
  return Me(ll);
}
var Gi = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = ts);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Ks(this, function() {
      throw Zt(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ts), this.name + t.hash;
  }, e;
}(), sm = function(e) {
  return e >= "A" && e <= "Z";
};
function Xi(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    sm(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var dl = function(e) {
  return e == null || e === !1 || e === "";
}, ul = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !dl(i) && (Array.isArray(i) && i.isCss || Et(i) ? r.push("".concat(Xi(o), ":"), i, ";") : Pt(i) ? r.push.apply(r, $t($t(["".concat(o, " {")], ul(i), !1), ["}"], !1)) : r.push("".concat(Xi(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in C3 || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function mt(e, t, n, r) {
  if (dl(e)) return [];
  if (Us(e)) return [".".concat(e.styledComponentId)];
  if (Et(e)) {
    if (!Et(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Gi || Pt(o) || o === null || console.error("".concat(tl(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), mt(o, t, n, r);
  }
  var i;
  return e instanceof Gi ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Pt(e) ? ul(e) : Array.isArray(e) ? Array.prototype.concat.apply(nr, e.map(function(a) {
    return mt(a, t, n, r);
  })) : [e.toString()];
}
function om(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Et(n) && !Us(n)) return !1;
  }
  return !0;
}
var im = el(tr), am = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && om(t), this.componentId = n, this.baseHash = ct(im, n), this.baseStyle = r, al.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = ut(o, this.staticRulesId);
    else {
      var i = Yi(mt(this.rules, t, n, r)), a = Wr(ct(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, a)) {
        var c = r(i, ".".concat(a), void 0, this.componentId);
        n.insertRules(this.componentId, a, c);
      }
      o = ut(o, a), this.staticRulesId = a;
    }
    else {
      for (var l = ct(this.baseHash, r.hash), d = "", u = 0; u < this.rules.length; u++) {
        var h = this.rules[u];
        if (typeof h == "string") d += h, process.env.NODE_ENV !== "production" && (l = ct(l, h));
        else if (h) {
          var p = Yi(mt(h, t, n, r));
          l = ct(l, p + u), d += p;
        }
      }
      if (d) {
        var f = Wr(l >>> 0);
        n.hasNameForId(this.componentId, f) || n.insertRules(this.componentId, f, r(d, ".".concat(f), void 0, this.componentId)), o = ut(o, f);
      }
    }
    return o;
  }, e;
}(), hl = Le.createContext(void 0);
hl.Consumer;
var Nr = {}, qi = /* @__PURE__ */ new Set();
function cm(e, t, n) {
  var r = Us(e), o = e, i = !br(e), a = t.attrs, c = a === void 0 ? nr : a, l = t.componentId, d = l === void 0 ? function(y, M) {
    var v = typeof y != "string" ? "sc" : Di(y);
    Nr[v] = (Nr[v] || 0) + 1;
    var w = "".concat(v, "-").concat($3(tr + v + Nr[v]));
    return M ? "".concat(M, "-").concat(w) : w;
  }(t.displayName, t.parentComponentId) : l, u = t.displayName, h = u === void 0 ? function(y) {
    return br(y) ? "styled.".concat(y) : "Styled(".concat(tl(y), ")");
  }(e) : u, p = t.displayName && t.componentId ? "".concat(Di(t.displayName), "-").concat(t.componentId) : t.componentId || d, f = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, x = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var L = t.shouldForwardProp;
      x = function(y, M) {
        return g(y, M) && L(y, M);
      };
    } else x = g;
  }
  var m = new am(n, p, r ? o.componentStyle : void 0);
  function j(y, M) {
    return function(v, w, C) {
      var V = v.attrs, S = v.componentStyle, H = v.defaultProps, N = v.foldedComponentIds, R = v.styledComponentId, $ = v.target, I = Le.useContext(hl), O = Ki(), D = v.shouldForwardProp || O.shouldForwardProp;
      process.env.NODE_ENV !== "production" && ao(R);
      var q = N3(w, I, H) || It, T = function(Y, Q, ce) {
        for (var se, ue = Ee(Ee({}, Q), { className: void 0, theme: ce }), be = 0; be < Y.length; be += 1) {
          var Ne = Et(se = Y[be]) ? se(ue) : se;
          for (var Ve in Ne) ue[Ve] = Ve === "className" ? ut(ue[Ve], Ne[Ve]) : Ve === "style" ? Ee(Ee({}, ue[Ve]), Ne[Ve]) : Ne[Ve];
        }
        return Q.className && (ue.className = ut(ue.className, Q.className)), ue;
      }(V, w, q), E = T.as || $, A = {};
      for (var P in T) T[P] === void 0 || P[0] === "$" || P === "as" || P === "theme" && T.theme === q || (P === "forwardedAs" ? A.as = T.forwardedAs : D && !D(P, E) || (A[P] = T[P], D || process.env.NODE_ENV !== "development" || o3(P) || qi.has(P) || !Qr.has(E) || (qi.add(P), console.warn('styled-components: it looks like an unknown prop "'.concat(P, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Z = function(Y, Q) {
        var ce = Ki(), se = Y.generateAndInjectStyles(Q, ce.styleSheet, ce.stylis);
        return process.env.NODE_ENV !== "production" && ao(se), se;
      }(S, T);
      process.env.NODE_ENV !== "production" && v.warnTooManyClasses && v.warnTooManyClasses(Z);
      var G = ut(N, R);
      return Z && (G += " " + Z), T.className && (G += " " + T.className), A[br(E) && !Qr.has(E) ? "class" : "className"] = G, C && (A.ref = C), ea(E, A);
    }(k, y, M);
  }
  j.displayName = h;
  var k = Le.forwardRef(j);
  return k.attrs = f, k.componentStyle = m, k.displayName = h, k.shouldForwardProp = x, k.foldedComponentIds = r ? ut(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = p, k.target = r ? o.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(y) {
    this._foldedDefaultProps = r ? function(M) {
      for (var v = [], w = 1; w < arguments.length; w++) v[w - 1] = arguments[w];
      for (var C = 0, V = v; C < V.length; C++) es(M, V[C], !0);
      return M;
    }({}, o.defaultProps, y) : y;
  } }), process.env.NODE_ENV !== "production" && (b3(h, p), k.warnTooManyClasses = /* @__PURE__ */ function(y, M) {
    var v = {}, w = !1;
    return function(C) {
      if (!w && (v[C] = !0, Object.keys(v).length >= 200)) {
        var V = M ? ' with the id of "'.concat(M, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(y).concat(V, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), w = !0, v = {};
      }
    };
  }(h, p)), Ks(k, function() {
    return ".".concat(k.styledComponentId);
  }), i && ol(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function zi(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var Ji = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function lm(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Et(e) || Pt(e)) return Ji(mt(zi(nr, $t([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? mt(r) : Ji(mt(zi(r, t)));
}
function ns(e, t, n) {
  if (n === void 0 && (n = It), !t) throw Zt(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, lm.apply(void 0, $t([o], i, !1)));
  };
  return r.attrs = function(o) {
    return ns(e, t, Ee(Ee({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return ns(e, t, Ee(Ee({}, n), o));
  }, r;
}
var pl = function(e) {
  return ns(cm, e);
}, fl = pl;
Qr.forEach(function(e) {
  fl[e] = pl(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var bn = "__sc-".concat(gt, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[bn] || (window[bn] = 0), window[bn] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[bn] += 1);
const Um = ({
  type: e = "info",
  text: t = "这是一条全局提示",
  simple: n = !1,
  style: r,
  className: o = ""
}) => /* @__PURE__ */ s.jsxs(
  dm,
  {
    className: `StyleToastContainer ${o} ${n ? "simple" : ""}`,
    style: {
      ...r
    },
    children: [
      !n && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        e === "info" && /* @__PURE__ */ s.jsx(z, { name: "info-fill", size: 20, color: "var(--color-primary-6)" }),
        e === "error" && /* @__PURE__ */ s.jsx(z, { name: "attention-fill", size: 20, color: "var(--color-red-6)" }),
        e === "fail" && /* @__PURE__ */ s.jsx(z, { name: "error-fill", size: 20, color: "var(--color-red-6)" }),
        e === "warn" && /* @__PURE__ */ s.jsx(z, { name: "attention-fill", size: 20, color: "var(--color-orange-6)" }),
        e === "success" && /* @__PURE__ */ s.jsx(z, { name: "check-fill", size: 20, color: "var(--color-green-6)" })
      ] }),
      t
    ]
  }
), dm = fl.div`
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
`, Km = ({
  current: e = 1,
  pageSize: t = 1,
  total: n = 1,
  showTotal: r = !1,
  showInput: o = !1,
  onChange: i,
  style: a,
  className: c = ""
}) => {
  var y, M;
  const [l, d] = F(e);
  K(() => {
    d(e);
  }, [e]);
  const { pageData: u, curStart: h, isStartPreOut: p, isStartNextOut: f } = X(() => {
    const v = t;
    let w = 2;
    l > v + 1 && (w = Math.max(2, l - Math.floor(v / 2))), w + v > n && (w = Math.max(2, n - v + 1));
    const C = Array.from({ length: n }).map((H, N) => ({ id: N + 1 })).filter((H) => H.id > 1 && H.id < n).filter((H) => H.id >= w && H.id < w + v), V = w <= v * 2, S = n - w < v * 2;
    return { pageData: C, curStart: w, isStartPreOut: V, isStartNextOut: S };
  }, [n, t, l]), x = _((v) => {
    v >= 1 && v <= n && v !== l && (d(v), i == null || i(v));
  }, [l, n, i]), g = _(() => {
    l > 1 && x(l - 1);
  }, [l, x]), L = _(() => {
    l < n && x(l + 1);
  }, [l, n, x]), m = _((v) => {
    if (v === "prev" && !p) {
      const w = Math.max(1, h - t);
      x(w);
    } else if (v === "next" && !f) {
      const w = Math.min(n, h + t);
      x(w);
    }
  }, [h, t, p, f, n, x]), j = _((v) => {
    const w = v;
    !isNaN(w) && w >= 1 && w <= n && (d(w), x(w));
  }, [n, x]), k = _((v) => {
    v.stopPropagation();
  }, []);
  return /* @__PURE__ */ s.jsxs("div", { className: `land-pagination ${c}`, style: a, children: [
    r && /* @__PURE__ */ s.jsxs("div", { className: "land-pagination-total", children: [
      "共",
      n,
      "页"
    ] }),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        onClick: (v) => {
          k(v), g();
        },
        className: `land-pagination-arrow-prev ${l === 1 ? "disabled" : ""}`,
        children: /* @__PURE__ */ s.jsx(z, { name: "arrow", className: "land-pagination-arrow-prev-icon", strokeWidth: 4 })
      }
    ),
    /* @__PURE__ */ s.jsxs("div", { className: "land-pagination-page", children: [
      /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `land-pagination-num-item ${l === 1 ? "active" : ""}`,
          onClick: (v) => {
            k(v), x(1);
          },
          children: "1"
        }
      ),
      ((y = u[0]) == null ? void 0 : y.id) > 2 && /* @__PURE__ */ s.jsxs(
        "div",
        {
          onClick: (v) => {
            k(v), m("prev");
          },
          className: "land-pagination-arrow-double-prev",
          children: [
            /* @__PURE__ */ s.jsx(z, { name: "more", size: 16 }),
            /* @__PURE__ */ s.jsx(z, { name: "arrow-double", className: "land-pagination-arrow-double-prev-icon", size: 24 })
          ]
        }
      ),
      u == null ? void 0 : u.map((v) => /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `land-pagination-num-item ${l === v.id ? "active" : ""}`,
          onClick: (w) => {
            k(w), x(v.id);
          },
          children: v.id
        },
        v.id
      )),
      ((M = u[(u == null ? void 0 : u.length) - 1]) == null ? void 0 : M.id) < n - 1 && /* @__PURE__ */ s.jsxs(
        "div",
        {
          onClick: (v) => {
            k(v), m("next");
          },
          className: "land-pagination-arrow-double-next",
          children: [
            /* @__PURE__ */ s.jsx(z, { name: "more", size: 16 }),
            /* @__PURE__ */ s.jsx(z, { name: "arrow-double", className: "land-pagination-arrow-double-next-icon", size: 24 })
          ]
        }
      ),
      /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `land-pagination-num-item ${l === n ? "active" : ""}`,
          onClick: (v) => {
            k(v), x(n);
          },
          children: n
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        onClick: (v) => {
          k(v), L();
        },
        className: `land-pagination-arrow-next ${l === n ? "disabled" : ""}`,
        children: /* @__PURE__ */ s.jsx(z, { name: "arrow", className: "land-pagination-arrow-next-icon", strokeWidth: 4 })
      }
    ),
    o && /* @__PURE__ */ s.jsxs("div", { className: "land-pagination-input", children: [
      "跳转至",
      /* @__PURE__ */ s.jsx(
        Oe,
        {
          hideArrowButton: !0,
          value: l,
          onChange: j,
          className: "land-pagination-page-input",
          textAlign: "center"
        }
      ),
      "/ ",
      n,
      " 页"
    ] })
  ] });
}, Gm = ({
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
}) => /* @__PURE__ */ s.jsxs(
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
      /* @__PURE__ */ s.jsx("div", { className: "land-popConfirm-content", children: t }),
      /* @__PURE__ */ s.jsxs("div", { className: "land-popConfirm-btn", children: [
        /* @__PURE__ */ s.jsx(me, { type: "fill", size: "small", onClick: d, ...i, children: c }),
        /* @__PURE__ */ s.jsx(me, { type: "background", size: "small", onClick: u, ...a, children: l })
      ] }),
      !o && /* @__PURE__ */ s.jsx(
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
), Xm = ({
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
        return /* @__PURE__ */ s.jsx(z, { name: "check-fill", ...h, color: "var(--color-green-6)" });
      case "fail":
        return /* @__PURE__ */ s.jsx(z, { name: "error-fill", ...h, color: "var(--color-red-6)" });
      default:
        return null;
    }
  }, u = () => {
    const p = (80 - o) / 2, f = 2 * Math.PI * p, x = f, g = f - c * f;
    return /* @__PURE__ */ s.jsxs("svg", { width: 80, height: 80, className: "land-progress-circle-svg", children: [
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        "circle",
        {
          cx: 80 / 2,
          cy: 80 / 2,
          r: p,
          stroke: "var(--color-primary)",
          strokeWidth: o,
          fill: "none",
          strokeDasharray: x,
          strokeDashoffset: g,
          strokeLinecap: "round",
          transform: `rotate(-90 ${80 / 2} ${80 / 2})`,
          style: { transition: "stroke-dashoffset 0.3s ease" }
        }
      )
    ] });
  };
  return /* @__PURE__ */ s.jsx("div", { className: `land-progress ${n} ${a}`, style: i, children: /* @__PURE__ */ s.jsx("div", { className: "land-progress-content", children: n === "circle" ? /* @__PURE__ */ s.jsxs("div", { className: "land-progress-circle-container", children: [
    u(),
    !r && t == "default" && /* @__PURE__ */ s.jsxs("div", { className: "land-progress-circle-label", children: [
      Math.round(c * 100),
      "%"
    ] }),
    t !== "default" && /* @__PURE__ */ s.jsx("div", { className: "land-progress-status-icon", children: d() })
  ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    !r && t == "default" && /* @__PURE__ */ s.jsxs("div", { className: "land-progress-label", style: { left: `${e * 100}%` }, children: [
      Math.round(c * 100),
      "%"
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "land-progress-bar", children: /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "land-progress-bar-finished",
        style: { transform: l() }
      }
    ) }),
    t !== "default" && /* @__PURE__ */ s.jsx("div", { className: "land-progress-status-icon", children: d() })
  ] }) }) });
}, um = ({
  label: e,
  tip: t,
  disabled: n,
  iconTip: r,
  style: o,
  className: i = "",
  onClick: a,
  checked: c,
  animated: l
}) => /* @__PURE__ */ s.jsxs("div", { className: `land-radio-item ${t ? "hover-pop" : ""} ${n ? "disabled" : ""} ${i}`, style: o, children: [
  /* @__PURE__ */ s.jsx(Re, { content: t, theme: "dark", style: { maxWidth: "200px" } }),
  /* @__PURE__ */ s.jsxs(
    "div",
    {
      onClick: a,
      className: "land-radio-label",
      children: [
        /* @__PURE__ */ s.jsx("div", { className: `land-radio-circle ${c ? "checked" : ""} ${l ? "animated" : "no-animation"}`, children: /* @__PURE__ */ s.jsx(z, { name: "check", size: 10, className: "land-radio-circle-icon" }) }),
        e
      ]
    }
  ),
  r && /* @__PURE__ */ s.jsxs("div", { className: "land-radio-pop hover-pop", children: [
    /* @__PURE__ */ s.jsx(z, { name: "info-stroke", color: "var(--color-gray-rgba-9)", size: 12 }),
    /* @__PURE__ */ s.jsx(Re, { content: r, theme: "dark", style: { maxWidth: "200px" } })
  ] })
] }), qm = ({
  checked: e,
  data: t = [],
  animated: n,
  onChange: r,
  style: o,
  className: i = ""
}) => /* @__PURE__ */ s.jsx("div", { className: `land-radio-group ${i}`, style: o, children: t == null ? void 0 : t.map(
  (a) => /* @__PURE__ */ s.jsx(
    um,
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
) }), zm = ({
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
  titleLinkProps: x,
  subTitleLinkProps: g
}) => /* @__PURE__ */ s.jsxs("div", { className: `land-state ${p}`, style: f, children: [
  e === "empty" && (u || /* @__PURE__ */ s.jsxs(
    "svg",
    {
      width: "48",
      height: "48",
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "land-state-empty-icon",
      children: [
        /* @__PURE__ */ s.jsxs("g", { "clip-path": "url(#clip0_1578_7158)", children: [
          /* @__PURE__ */ s.jsx(
            "path",
            {
              d: "M43 30.5L36.5788 19.4923C36.2204 18.8778 35.5626 18.5 34.8513 18.5H13.1487C12.4374 18.5 11.7796 18.8778 11.4212 19.4923L5 30.5M43 30.5V40.5C43 41.6046 42.1046 42.5 41 42.5H7C5.89543 42.5 5 41.6046 5 40.5V30.5M43 30.5H5",
              stroke: "currentColor",
              "stroke-width": "3"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "path",
            {
              d: "M24 12V6",
              stroke: "currentColor",
              "stroke-width": "3",
              "stroke-linecap": "round"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "path",
            {
              d: "M30.9995 12.7426L35.2422 8.5",
              stroke: "currentColor",
              "stroke-width": "3",
              "stroke-linecap": "round"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "path",
            {
              d: "M17.2426 12.7426L13 8.5",
              stroke: "currentColor",
              "stroke-width": "3",
              "stroke-linecap": "round"
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx("defs", { children: /* @__PURE__ */ s.jsx("clipPath", { id: "clip0_1578_7158", children: /* @__PURE__ */ s.jsx("rect", { width: "48", height: "48", fill: "white" }) }) })
      ]
    }
  )),
  e === "offline" && (h || /* @__PURE__ */ s.jsxs(
    "svg",
    {
      width: "48",
      height: "48",
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "land-state-offline-icon",
      children: [
        /* @__PURE__ */ s.jsx(
          "path",
          {
            d: "M44 18.9653C37.2253 12.545 28.1189 10.0059 19.5 11.3481",
            stroke: "currentColor",
            "stroke-width": "4",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "path",
          {
            d: "M38 25.799C35.2866 23.0855 31.9815 21.3243 28.5 20.5154",
            stroke: "currentColor",
            "stroke-width": "4",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "path",
          {
            d: "M10 25.799C11.3276 24.4714 12.7969 23.3717 14.3591 22.5",
            stroke: "currentColor",
            "stroke-width": "4",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "path",
          {
            d: "M16 32.3138C17.4388 30.875 19.1686 29.9048 21 29.4031",
            stroke: "currentColor",
            "stroke-width": "4",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M24 40C25.3807 40 26.5 38.8807 26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "path",
          {
            d: "M40 40L8 8",
            stroke: "currentColor",
            "stroke-width": "4",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "path",
          {
            d: "M4 18.9652C4.5888 18.4072 5.19522 17.8785 5.81741 17.3792C6.36642 16.9385 6.92771 16.5207 7.49999 16.1257",
            stroke: "currentColor",
            "stroke-width": "4",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        )
      ]
    }
  )),
  /* @__PURE__ */ s.jsxs("div", { className: "land-state-title", children: [
    t,
    r && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      "，",
      /* @__PURE__ */ s.jsx(
        dn,
        {
          className: "land-state-title-link",
          onClick: a,
          ...x,
          children: r
        }
      )
    ] })
  ] }),
  (n || o) && /* @__PURE__ */ s.jsxs("div", { className: "land-state-subTitle", children: [
    n,
    /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      "，",
      /* @__PURE__ */ s.jsx(
        dn,
        {
          className: "land-state-subTitle-link",
          onClick: c,
          ...g,
          children: o
        }
      )
    ] })
  ] }),
  i && /* @__PURE__ */ s.jsx(
    me,
    {
      className: "land-state-button",
      onClick: l,
      ...d,
      children: i
    }
  )
] }), hm = {
  linear: (e) => e,
  easeIn: (e) => e * e,
  easeOut: (e) => 1 - Math.pow(1 - e, 2),
  easeInOut: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
  bounce: (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  elastic: (e) => Math.pow(2, -10 * e) * Math.sin((e - 0.3 / 4) * (2 * Math.PI) / 0.3) + 1
}, Jm = ({
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
  const [u, h] = F(""), [p, f] = F(!1), [x, g] = F(!1), L = J(null), m = J(null), j = J(e), y = { ...{
    duration: 1e3,
    easing: "easeOut",
    delay: 0,
    loop: !1,
    loopInterval: 2e3
  }, ...a }, M = _((N) => c > 0 ? N.toFixed(c) : Math.floor(N).toString(), [c]), v = _(() => {
    L.current && (cancelAnimationFrame(L.current), L.current = null);
  }, []), w = _(() => {
    m.current && (clearTimeout(m.current), m.current = null);
  }, []), C = _((N, R) => {
    const O = y.duration / 1e3 * 60;
    let D = 0;
    const q = hm[y.easing], T = () => {
      D++;
      const E = D / O, A = q(E), P = N + (R - N) * A;
      h(M(P)), D < O ? L.current = requestAnimationFrame(T) : (h(M(R)), L.current = null);
    };
    L.current = requestAnimationFrame(T);
  }, [y.duration, y.easing, M]);
  K(() => {
    if (i === "none") {
      h(M(e));
      return;
    }
    return m.current = setTimeout(() => {
      switch (g(!0), i) {
        case "increase":
          C(0, e);
          break;
        case "decrease":
          C(e * 1.5, e);
          break;
        case "bounce":
          h(M(e)), f(!0);
          break;
        case "fade":
        case "slide":
        case "scale":
        case "flip":
          h(M(e)), f(!0);
          break;
        case "random":
          h(M(e)), f(!0);
          break;
        default:
          h(M(e));
      }
    }, y.delay), () => {
      w(), v();
    };
  }, [i, e, y.delay, y.duration, C, M, w, v]), K(() => {
    if (!y.loop || i === "none") return;
    const N = () => {
      m.current = setTimeout(() => {
        f(!1), setTimeout(() => f(!0), 100), N();
      }, y.loopInterval);
    };
    return p && N(), () => w();
  }, [y.loop, y.loopInterval, p, i, w]), K(() => () => {
    v(), w();
  }, [v, w]), K(() => {
    j.current !== e && i !== "none" && (f(!1), setTimeout(() => f(!0), 50)), j.current = e;
  }, [e, i]);
  const V = X(() => M(e).split("").map((R) => R === "." ? "." : R === "-" ? "-" : parseInt(R, 10)), [e, M]), S = {
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
  }, H = () => i === "bounce" ? S.bounce : i === "fade" ? S.fade : i === "slide" ? S.slide : i === "scale" ? S.scale : i === "flip" ? S.flip : S.fade;
  return /* @__PURE__ */ s.jsxs("div", { className: `land-statistic ${d || ""}`, style: l, children: [
    t && /* @__PURE__ */ s.jsx("div", { className: "land-statistic-prefix", children: t }),
    /* @__PURE__ */ s.jsxs("div", { className: "land-statistic-value", children: [
      /* @__PURE__ */ s.jsx(_2, { mode: "wait", children: i === "random" ? /* @__PURE__ */ s.jsx("div", { className: "flex items-center", children: V.map((N, R) => /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "land-statistic-random",
          style: { height: "45px" },
          children: /* @__PURE__ */ s.jsx(
            Ce.div,
            {
              animate: { y: p ? -Number(N) * 45 : 0 },
              transition: {
                duration: 1.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              },
              className: "land-statistic-random-list",
              children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(($) => /* @__PURE__ */ s.jsx("div", { children: $ }, $))
            }
          )
        },
        `digit-${R}-${N}`
      )) }, "random") : i !== "none" && (i === "increase" || i === "decrease") ? /* @__PURE__ */ s.jsx(
        Ce.div,
        {
          layout: !0,
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.3, ease: "easeOut" },
          children: u
        },
        "number-animation"
      ) : i !== "none" ? /* @__PURE__ */ s.jsx(
        Ce.div,
        {
          initial: H().initial,
          animate: p ? H().animate : H().initial,
          exit: H().initial,
          children: u
        },
        `${i}-${e}`
      ) : /* @__PURE__ */ s.jsx(
        Ce.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.3 },
          children: u
        },
        "static"
      ) }),
      r && /* @__PURE__ */ s.jsx(
        Ce.div,
        {
          className: "land-statistic-unit",
          initial: { opacity: 0, x: 10 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.3, delay: 0.1 },
          children: r
        }
      )
    ] }),
    o && /* @__PURE__ */ s.jsxs(
      Ce.div,
      {
        className: "land-statistic-trend-icon",
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.3, delay: 0.2 },
        children: [
          o === "up" && /* @__PURE__ */ s.jsx(
            z,
            {
              name: "increase",
              strokeWidth: 0,
              color: "var(--color-success)"
            }
          ),
          o === "down" && /* @__PURE__ */ s.jsx(
            z,
            {
              name: "increase",
              style: { transform: "rotate(180deg)" },
              strokeWidth: 0,
              color: "var(--color-error)"
            }
          ),
          o === "default" && /* @__PURE__ */ s.jsx(
            z,
            {
              name: "increase",
              strokeWidth: 0,
              color: "var(--color-text-secondary)"
            }
          )
        ]
      }
    ),
    n && /* @__PURE__ */ s.jsx(
      Ce.div,
      {
        className: "land-statistic-suffix",
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.3, delay: 0.1 },
        children: n
      }
    )
  ] });
}, Qm = ({}) => /* @__PURE__ */ s.jsx("div", { children: "Swiper" }), Wm = ({
  children: e,
  value: t,
  min: n,
  max: r,
  step: o,
  range: i,
  useDivider: a,
  prefix: c,
  suffix: l,
  showTooltip: d,
  tooltipPlacement: u,
  tooltipFormatter: h,
  height: p,
  thumbSize: f,
  defaultBg: x,
  activeBg: g,
  style: L,
  className: m,
  onChange: j,
  onStart: k,
  onEnd: y
}) => /* @__PURE__ */ s.jsx("div", { className: "land-slider", children: /* @__PURE__ */ s.jsx("div", { className: "land-slider-track" }) }), ml = Le.memo(({ item: e, index: t, isActive: n, isFinished: r, onClick: o, direction: i }) => {
  const a = _(() => {
    o == null || o(e);
  }, [o, e]), c = _((d) => {
    (d.key === "Enter" || d.key === " ") && (d.preventDefault(), o == null || o(e));
  }, [o, e]), l = X(() => r ? /* @__PURE__ */ s.jsx(z, { name: "check", size: 12 }) : t + 1, [r, t]);
  return /* @__PURE__ */ s.jsxs(
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
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "land-steps-num",
            "aria-label": r ? "已完成" : `步骤 ${t + 1}`,
            children: l
          }
        ),
        /* @__PURE__ */ s.jsxs("div", { className: "land-steps-title", children: [
          e.title,
          e.desc && /* @__PURE__ */ s.jsx("div", { className: "land-steps-desc", children: e.desc })
        ] })
      ]
    }
  );
});
ml.displayName = "StepsItem";
const e8 = ({
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
  const h = X(() => t !== void 0 ? t : e.length > 0 ? e[0].key : void 0, [t, e]), p = X(() => Array.isArray(e) ? e.filter((j) => j && typeof j == "object" && j.key !== void 0) : [], [e]);
  if (p.length === 0)
    return d ? /* @__PURE__ */ s.jsx(s.Fragment, { children: d }) : null;
  const x = X(() => h !== void 0 && p.some((j) => j.key === h), [h, p]) ? h : p[0].key, g = _((j) => j.finished !== void 0 ? j.finished : n.includes(j.key), [n]), L = X(() => ["land-steps", a === "vertical" ? "vertical" : "", l].filter(Boolean).join(" "), [a, l]), m = _(() => p.map((j, k) => {
    const y = x === j.key, M = g(j);
    return /* @__PURE__ */ s.jsxs(un, { children: [
      o && k !== 0 && /* @__PURE__ */ s.jsx(
        Ze,
        {
          lineLength: i,
          style: a === "horizontal" ? { marginTop: "12px" } : { marginLeft: "8px" },
          direction: a === "vertical" ? "column" : "row"
        }
      ),
      /* @__PURE__ */ s.jsx(
        ml,
        {
          item: j,
          index: k,
          isActive: y,
          isFinished: M,
          onClick: r,
          direction: a
        }
      )
    ] }, j.key);
  }), [p, x, g, o, i, a, r]);
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: L,
      style: c,
      role: "list",
      "aria-label": "步骤导航",
      ...u,
      children: m()
    }
  );
}, t8 = ({
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
  const [x, g] = F(e);
  return K(() => g(e), [e]), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-switch ${i ? "hover-pop" : ""} ${h ? "disabled" : ""}`,
      children: [
        /* @__PURE__ */ s.jsx(Re, { content: i, theme: "dark", ...c }),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `land-switch-content ${u ? "dark" : ""} ${x ? "checked" : ""} ${f}`,
            style: p,
            onClick: (L) => {
              L.stopPropagation(), !h && (g(!x), d == null || d(x));
            },
            children: [
              /* @__PURE__ */ s.jsx("div", { className: "land-switch-bar", children: /* @__PURE__ */ s.jsx(Ce.div, { animate: { x: x ? 16 : 0 }, transition: { duration: 0.6, type: "spring" }, className: "land-switch-indicator", children: x ? o : r }) }),
              (t || n) && /* @__PURE__ */ s.jsx("div", { className: "land-switch-label", children: x ? n : t })
            ]
          }
        ),
        a && /* @__PURE__ */ s.jsxs("div", { className: "land-switch-label-iconTip hover-pop", children: [
          /* @__PURE__ */ s.jsx(z, { name: "info-stroke", size: 16 }),
          /* @__PURE__ */ s.jsx(Re, { content: a, theme: "dark", ...l })
        ] })
      ]
    }
  );
};
function n8({
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
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `land-tabs  ${a}`,
      style: { width: e, ...l },
      children: n == null ? void 0 : n.map((d, u) => {
        var h;
        return /* @__PURE__ */ s.jsxs(un, { children: [
          r && u !== 0 && /* @__PURE__ */ s.jsx(
            Ze,
            {
              direction: "column",
              gap: 0,
              lineLength: "14px",
              className: `land-tabs-divider ${t !== d.key && t !== ((h = n[u - 1]) == null ? void 0 : h.key) ? "" : "hidden"}`
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: `land-tabs-item 
               ${t === d.key ? `selected ${i}` : d.disabled || c ? "disabled" : ""}`,
              onClick: (p) => {
                p.stopPropagation(), !d.disabled && !c && (o == null || o(d.key, d));
              },
              children: [
                d.label,
                d.showIcon && /* @__PURE__ */ s.jsxs("div", { className: "size-icon-16 fs-12 flex items-center color-icon-secondary hover-pop relative cursor-default", children: [
                  /* @__PURE__ */ s.jsx(z, { name: "info-stroke", size: 16 }),
                  /* @__PURE__ */ s.jsx(Re, { content: d.iconTip, theme: "dark" })
                ] })
              ]
            }
          )
        ] }, d.key);
      })
    }
  );
}
const pm = ({
  children: e,
  icon: t,
  canDelete: n,
  onDelete: r,
  style: o,
  className: i,
  theme: a = "gray"
}) => /* @__PURE__ */ s.jsxs(
  "div",
  {
    className: `land-tag land-tag--${a} ${i}`,
    style: o,
    children: [
      t,
      e,
      n && /* @__PURE__ */ s.jsx(
        z,
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
), r8 = ({
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
  tagClassName: x = "",
  className: g = "",
  style: L
}) => {
  const [m, j] = F(""), [k, y] = F(e), M = (v) => {
    k.length === r || !v || (y([...k, v]), j(""));
  };
  return K(() => {
    const v = (w) => {
      w.code === "Backspace" && (k == null ? void 0 : k.length) > 0 && !m && (y((C) => C.slice(0, -1)), console.log(w.code));
    };
    return document.body.addEventListener("keydown", v), () => document.body.removeEventListener("keydown", v);
  }, [m, k]), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-tag-input ${a ? "widthClear" : ""} ${g}`,
      style: { width: typeof n == "number" ? `${n}px` : n, paddingLeft: (k == null ? void 0 : k.length) > 0 ? "4px" : "12px", ...L },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "land-tag-input-container", children: [
          k == null ? void 0 : k.map((v, w) => /* @__PURE__ */ s.jsx(pm, { className: `land-tag-input-tag ${x}`, canDelete: !0, onDelete: () => {
            y(k.filter((C) => C !== v)), p == null || p(v);
          }, style: f, children: v }, w)),
          /* @__PURE__ */ s.jsx(
            zn,
            {
              type: "transparent",
              value: m,
              placeholder: t,
              onEnter: (v, w) => {
                M == null || M(v), l == null || l(k, w);
              },
              onBlur: (v) => {
                M == null || M(m), u == null || u(k, v);
              },
              onChange: (v, w) => {
                j(v), c == null || c(k, w);
              },
              className: "land-tag-input-input",
              onFocus: d,
              highlightStr: o,
              highlightStyle: i
            }
          )
        ] }),
        a && (k == null ? void 0 : k.length) > 0 && /* @__PURE__ */ s.jsx("div", { className: "land-input-clear-icon", onClick: () => {
          y([]), h == null || h();
        }, children: /* @__PURE__ */ s.jsx(z, { name: "error-fill" }) })
      ]
    }
  );
}, s8 = ({
  titleData: e,
  data: t = [],
  style: n,
  className: r = "",
  striped: o = !1,
  crossHighlight: i = !1,
  headFixed: a = !1,
  fixedColumns: c = 0
}) => {
  const [l, d] = F(null), [u, h] = F({ row: {}, col: {} }), p = J(null), f = J(null), x = (j, k) => {
    i && d({ row: j, col: k });
  }, g = () => {
    i && d(null);
  }, L = _(() => {
    if (i && l && p.current) {
      const j = p.current, k = j.querySelector("thead tr"), y = j.querySelectorAll("tbody tr");
      if (k && y.length > 0) {
        const M = k.getBoundingClientRect().height, v = y[0].getBoundingClientRect().height;
        let w = 0, C = 0;
        for (let V = 0; V < k.children.length; V++) {
          const H = k.children[V].getBoundingClientRect().width;
          if (V === l.col) {
            C = H;
            break;
          }
          w += H;
        }
        h({
          row: {
            top: `${M + l.row * v}px`,
            height: `${v}px`
          },
          col: {
            left: `${w}px`,
            width: `${C}px`
          }
        });
      }
    }
  }, [i, l]), m = _(() => {
    if (c > 0 && p.current) {
      const j = p.current, k = j.querySelector("thead tr");
      if (k) {
        const y = {};
        let M = 0;
        for (let w = 0; w < Math.min(c, k.children.length); w++) {
          const V = k.children[w].getBoundingClientRect().width;
          y[w] = {
            left: `${M}px`
          }, M += V;
        }
        const v = j.parentElement;
        v && Object.entries(y).forEach(([w, C]) => {
          v.style.setProperty(`--fixed-col-${w}-left`, C.left);
        });
      }
    }
  }, [c]);
  return K(() => {
    m();
  }, [m]), K(() => {
    c > 0 && requestAnimationFrame(() => {
      m();
    });
  }, [c, m]), K(() => {
    L();
  }, [L]), K(() => {
    if ((i || c > 0) && p.current)
      return f.current = new ResizeObserver(() => {
        l && L(), c > 0 && m();
      }), f.current.observe(p.current), () => {
        f.current && f.current.disconnect();
      };
  }, [i, c, l, L, m]), /* @__PURE__ */ s.jsxs("div", { className: `land-table-wrapper ${i ? "land-table-wrapper--cross-highlight" : ""} ${a ? "land-table-wrapper--head-fixed" : ""} ${c > 0 ? "land-table-wrapper--fixed-columns" : ""} ${r}`, style: n, children: [
    /* @__PURE__ */ s.jsxs("table", { ref: p, className: `land-table ${o ? "land-table--striped" : ""} ${a ? "land-table--head-fixed" : ""} ${c > 0 ? "land-table--fixed-columns" : ""}`, children: [
      /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsx("tr", { children: e == null ? void 0 : e.map((j, k) => /* @__PURE__ */ s.jsx(
        "th",
        {
          className: k < c ? "land-table__cell--fixed" : "",
          children: j.title
        },
        k
      )) }) }),
      /* @__PURE__ */ s.jsx("tbody", { children: t.map((j, k) => /* @__PURE__ */ s.jsx("tr", { children: Object.values(j).map((y, M) => /* @__PURE__ */ s.jsx(
        "td",
        {
          "data-row": k,
          "data-col": M,
          className: M < c ? "land-table__cell--fixed" : "",
          onMouseEnter: () => x(k, M),
          onMouseLeave: g,
          children: y
        },
        M
      )) }, k)) })
    ] }),
    i && l && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "land-table__row-overlay",
          style: u.row
        }
      ),
      /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "land-table__col-overlay",
          style: u.col
        }
      )
    ] })
  ] });
}, o8 = ({ data: e, direction: t = "column", icon: n }) => /* @__PURE__ */ s.jsx("div", { className: `land-timeline ${t === "row" ? "row" : ""}`, children: e == null ? void 0 : e.map((r, o) => /* @__PURE__ */ s.jsxs("div", { className: `land-timeline-item ${t === "row" ? "row" : ""}`, children: [
  /* @__PURE__ */ s.jsxs("div", { className: "land-timeline-indicator-wrapper", children: [
    r.icon || n || /* @__PURE__ */ s.jsx("div", { className: "land-timeline-indicator" }),
    o !== (e == null ? void 0 : e.length) - 1 && /* @__PURE__ */ s.jsx(Ze, { direction: t })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "land-timeline-content", children: [
    r.title && /* @__PURE__ */ s.jsx("div", { className: "land-timeline-title", children: r.title }),
    r.subTitle && /* @__PURE__ */ s.jsx("div", { className: "land-timeline-subTitle", children: r.subTitle }),
    r.desc && /* @__PURE__ */ s.jsx("div", { className: "land-timeline-desc", children: r.desc })
  ] })
] }, o)) }), i8 = ({
  title: e,
  type: t = "h1",
  prefix: n,
  sub: r,
  tip: o,
  style: i,
  className: a = "",
  onClick: c
}) => /* @__PURE__ */ s.jsxs(
  "div",
  {
    className: `land-title ${a}`,
    style: i,
    onClick: () => c == null ? void 0 : c(),
    children: [
      n && /* @__PURE__ */ s.jsx("span", { className: "land-title-prefix", children: n }),
      t === "h1" && /* @__PURE__ */ s.jsx("h1", { children: e }),
      t === "h2" && /* @__PURE__ */ s.jsx("h2", { children: e }),
      t === "h3" && /* @__PURE__ */ s.jsx("h3", { children: e }),
      t === "h4" && /* @__PURE__ */ s.jsx("h4", { children: e }),
      o && /* @__PURE__ */ s.jsxs("div", { className: "land-title-tip hover-pop", children: [
        /* @__PURE__ */ s.jsx(z, { name: "info-stroke", stroke: "var(--color-text-secondary)" }),
        /* @__PURE__ */ s.jsx(Re, { content: o, theme: "dark", style: { maxWidth: "200px" } })
      ] }),
      r && typeof r == "string" ? /* @__PURE__ */ s.jsx("div", { className: "land-title-sub", children: r }) : /* @__PURE__ */ s.jsx(s.Fragment, { children: r })
    ]
  }
), a8 = ({
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
  const d = J(null), [u, h] = F(), [p, f] = F(), [x, g] = F(!1), L = (k, y) => {
    k.preventDefault(), g(!0), y && (f(y), new FileReader().readAsDataURL(y), h(URL.createObjectURL(y)), g(!1));
  };
  K(() => {
    n == null || n(u, p);
  }, [u]);
  const [m, j] = F(!1);
  return /* @__PURE__ */ s.jsxs(
    "label",
    {
      className: `land-uploader ${m ? "drag" : ""} ${c}`,
      style: {
        width: o,
        height: i,
        ...a
      },
      onDragOver: (k) => {
        j(!0), k.preventDefault();
      },
      onDrop: (k) => {
        j(!1), L(k, k.dataTransfer.files[0]);
      },
      onDragLeave: () => j(!1),
      children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            ref: d,
            type: "file",
            accept: t,
            className: `land-uploader-input ${l}`,
            onChange: (k) => {
              L(k, k.target.files[0]);
            }
          }
        ),
        r || (x ? /* @__PURE__ */ s.jsx(s.Fragment, { children: "上传中" }) : m ? /* @__PURE__ */ s.jsx("div", { className: "land-uploader-desc", children: "释放即可上传" }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("div", { className: "land-uploader-icon", children: /* @__PURE__ */ s.jsx(z, { name: "upload" }) }),
          e && /* @__PURE__ */ s.jsx("div", { className: "land-uploader-desc", children: e })
        ] }))
      ]
    }
  );
}, c8 = ({
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
  className: x
}) => {
  const g = J(null), L = J(null), [m, j] = F({ width: 0, height: 0 }), k = _(() => {
    const { width: C, height: V } = m;
    if (C === 0 || V === 0) return [];
    const [S, H] = i, [N, R] = a, $ = Math.max(S, r), I = Math.max(H, o), O = C - r, D = V - o, q = Math.max(0, Math.min(N, O)), T = Math.max(0, Math.min(R, D)), E = Math.ceil((O - q) / $) + 1, A = Math.ceil((D - T) / I) + 1, P = [];
    for (let Z = 0; Z < A; Z++)
      for (let G = 0; G < E; G++) {
        const Y = q + G * $, Q = T + Z * I;
        Y + r <= C && Q + o <= V && P.push({
          id: `${Z}-${G}`,
          x: Y,
          y: Q
        });
      }
    if (P.length < 4) {
      const Z = [], G = (C - r) / 2, Y = (V - o) / 2;
      Z.push({
        id: "center",
        x: G,
        y: Y
      });
      const Q = 20;
      return [
        { x: Q, y: Q },
        { x: C - r - Q, y: Q },
        { x: Q, y: V - o - Q },
        {
          x: C - r - Q,
          y: V - o - Q
        }
      ].forEach((se, ue) => {
        se.x >= 0 && se.y >= 0 && Z.push({
          id: `corner-${ue}`,
          x: se.x,
          y: se.y
        });
      }), [...P, ...Z];
    }
    return P;
  }, [m, i, a, r, o]), y = X(() => k(), [k]), M = _(() => {
    if (g.current) {
      const { offsetWidth: C, offsetHeight: V } = g.current;
      j({ width: C, height: V });
    }
  }, []);
  K(() => {
    M();
  }, [M]), K(() => (L.current && (L.current.disconnect(), L.current = null), L.current = new ResizeObserver(() => {
    M();
  }), g.current && L.current.observe(g.current), () => {
    L.current && (L.current.disconnect(), L.current = null);
  }), [M]), K(() => () => {
    L.current && (L.current.disconnect(), L.current = null);
  }, []);
  const v = X(
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
  ), w = _(
    (C) => {
      const V = {
        ...v,
        left: `${C.x}px`,
        top: `${C.y}px`
      }, S = `land-watermark-item ${n ? "img" : ""}`;
      return /* @__PURE__ */ s.jsx("div", { className: S, style: V, children: n ? /* @__PURE__ */ s.jsx("img", { src: n, alt: "watermark" }) : t }, C.id);
    },
    [v, n, t]
  );
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: g,
      className: `land-watermark  ${x ?? ""}`,
      style: f,
      children: [
        e,
        /* @__PURE__ */ s.jsx("div", { className: "land-watermark-content", children: y.map(w) })
      ]
    }
  );
}, l8 = ({
  placeholder: e = "请输入",
  value: t,
  onChange: n,
  maxHeight: r = 80
}) => {
  const [o, i] = F(40), [a, c] = F(32), l = J(null);
  return K(() => {
    l.current && (i(l.current.offsetWidth + 2), l.current.offsetHeight <= r && c(l.current.offsetHeight));
  }, [e, t]), /* @__PURE__ */ s.jsxs("div", { className: "land-auto-width-height-textarea", style: { maxHeight: `${r}px` }, children: [
    /* @__PURE__ */ s.jsx("div", { ref: l, className: "land-auto-width-height-textarea-holder", children: (t == null ? void 0 : t.trimEnd()) || (e == null ? void 0 : e.trimEnd()) }),
    /* @__PURE__ */ s.jsx(
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
}, d8 = ({
  type: e = "input",
  value: t = "",
  onChange: n,
  height: r = "auto",
  maxHeight: o,
  placeholder: i,
  className: a = "",
  style: c
}) => {
  const [l, d] = F(!1), [u, h] = F(t), p = J(null);
  K(() => {
    h(t);
  }, [t]);
  const f = () => {
    d(!0), setTimeout(() => {
      if (p.current) {
        p.current.focus();
        const j = p.current.value.length;
        p.current.setSelectionRange(j, j), p.current.scrollTop = p.current.scrollHeight;
      }
    }, 0);
  }, x = () => {
    d(!1), n && u !== t && n(u);
  }, g = (j) => {
    j.key === "Enter" && !j.shiftKey && (j.preventDefault(), x()), j.key === "Escape" && (h(t), d(!1));
  }, L = (j) => {
    h(j.target.value);
  }, m = () => {
    const j = {};
    return r !== "auto" && (j.height = `${r}px`), o && (j.maxHeight = `${o}px`), j;
  };
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `double-click-input ${a}`,
      onDoubleClick: f,
      style: c,
      children: l ? e === "input" ? /* @__PURE__ */ s.jsx(
        "input",
        {
          ref: p,
          type: "text",
          value: u,
          onChange: L,
          onBlur: x,
          onKeyDown: g,
          placeholder: i
        }
      ) : /* @__PURE__ */ s.jsx(
        "textarea",
        {
          ref: p,
          value: u,
          onChange: L,
          onBlur: x,
          onKeyDown: g,
          placeholder: i,
          style: m()
        }
      ) : /* @__PURE__ */ s.jsx("div", { className: `display-text ${e} ${u ? "" : "placeholder"}`, style: e === "textarea" ? m() : {}, children: u || i })
    }
  );
}, u8 = ({
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
    const u = e == null ? void 0 : e.split("-")[0];
    return Number(u) ? Number(u) : 1;
  }, [e]), d = X(() => t > 1 ? "horizontal" : t < 1 ? "vertical" : "square", [t]);
  return /* @__PURE__ */ s.jsxs("div", { className: `land-grid-template ${d} type-${e} ${o}`, style: { gap: n, aspectRatio: t, ...r }, children: [
    c,
    !c && /* @__PURE__ */ s.jsx(s.Fragment, { children: Array.from({ length: l }).map((u, h) => /* @__PURE__ */ s.jsx("div", { className: `land-grid-template-item ${a}`, style: i }, h)) })
  ] });
}, fm = [], mm = Wi(
  ({
    highlightString: e = fm,
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
    placeholder: x = "请输入",
    disabled: g,
    autoResize: L,
    ...m
  }, j) => {
    const k = J(null), y = J(null), M = _(() => {
      !k.current || !y.current || (k.current.scrollTop = y.current.scrollTop);
    }, []), v = _(
      (S) => {
        console.log(1), h == null || h(S), M();
      },
      [h]
    ), w = _(
      (S) => {
        p == null || p(S), L ? C() : M();
      },
      [p]
    );
    _l(j, () => ({
      focus: () => {
        y != null && y.current && y.current.focus();
      }
      // 你可以在这里添加更多的属性或方法
    })), K(() => {
      !y.current || !f || (f.current = y.current);
    }, []);
    const C = () => {
      y.current && (y.current.style.height = "auto", y.current.style.height = `${y.current.scrollHeight}px`);
    }, V = X(() => {
      const S = [];
      let H = "", N = "default", R = 0;
      for (let I = 0; I < u.length; I++)
        H += u[I], S[R] = {
          type: N,
          msg: H
        }, e.some((D) => H.includes(D) ? (N = D, !0) : !1) && (S[R].msg = H.split(N)[0], S.push({
          type: N,
          msg: N
        }), R += 2, H = "", N = "default");
      const $ = S.map(
        (I) => {
          var O;
          return (O = I.msg) != null && O.includes(`
`) ? Object.assign(I, {
            msg: /* @__PURE__ */ s.jsx(s.Fragment, { children: I.msg })
          }) : I;
        }
      );
      return u.endsWith(`
`) && $.push({ type: "default", msg: /* @__PURE__ */ s.jsx("br", {}) }), $;
    }, [u, e]);
    return /* @__PURE__ */ s.jsxs("div", { className: `land-highlight-textarea ${o}`, style: i, children: [
      /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `land-highlight-textarea-content ${l}`,
          style: d,
          ref: k,
          children: V.length > 0 ? V.map((S, H) => S.type === "default" ? S.msg : r ? r(S.msg) : /* @__PURE__ */ s.jsx(
            "span",
            {
              className: "radius-4",
              style: {
                color: n,
                backgroundColor: t
              },
              children: S.msg
            },
            S.msg + H
          )) : /* @__PURE__ */ s.jsx("span", { className: "land-highlight-textarea-placeholder", children: x })
        }
      ),
      /* @__PURE__ */ s.jsx(
        "textarea",
        {
          id: "land-highlight-textarea",
          ...m,
          className: `land-highlight-textarea-input ${a}`,
          style: c,
          value: u,
          onScroll: L ? void 0 : v,
          onChange: w,
          ref: y,
          placeholder: x,
          disabled: g
        }
      )
    ] });
  }
), gm = (e, t) => {
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
}, h8 = ({
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
  const x = X(() => gm(e, d), [e, d]), g = J(null), L = J(null), m = _(() => {
    !g.current || !L.current || (g.current.scrollLeft = L.current.scrollLeft);
  }, []), j = _(() => {
    g.current && (g.current.scrollLeft = 0), c == null || c();
  }, []), [k, y] = F(!1);
  return /* @__PURE__ */ s.jsxs("div", { className: `land-highlight-input ${h}`, style: p, children: [
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `land-highlight-input-container  ${r || Number(e == null ? void 0 : e.length) > n ? "error" : ""} ${k ? "hover" : ""}`,
        onMouseOver: () => y(!0),
        onMouseOut: () => y(!1),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "land-highlight-input-content", children: [
            e ? /* @__PURE__ */ s.jsx(
              "div",
              {
                ref: g,
                className: `land-highlight-input-hight-string ${o ? "disabled" : ""}`,
                children: x.map((M, v) => M.type === "default" ? M.msg : u ? u(M.msg) : /* @__PURE__ */ s.jsx("span", { className: "land-highlight-input-hight-string-item", children: M.msg }, M.msg + v))
              }
            ) : /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "land-highlight-input-placeholder",
                children: l
              }
            ),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                ref: L,
                id: "highlight-input",
                type: "text",
                className: "land-highlight-input-input",
                disabled: o,
                value: e,
                onChange: (M) => {
                  m == null || m(), i == null || i(M);
                },
                onScroll: () => m(),
                onFocus: () => a == null ? void 0 : a(),
                onBlur: j,
                ...f
              }
            )
          ] }),
          (Number(e == null ? void 0 : e.length) > n || t) && /* @__PURE__ */ s.jsxs("div", { className: "land-highlight-input-operation", children: [
            /* @__PURE__ */ s.jsx(
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
    r && /* @__PURE__ */ s.jsx("p", { className: "land-highlight-input-fail", children: r })
  ] });
}, p8 = ({
  value: e,
  prefix: t,
  ...n
}) => {
  const r = J(null), [o, i] = F(0), a = J(null), [c, l] = F(0);
  return K(() => {
    var d, u;
    (d = r.current) != null && d.clientWidth ? i((u = r.current) == null ? void 0 : u.clientWidth) : i(0);
  }, [t]), K(() => {
    const d = document.querySelector(".land-prefix-input .prefix-textarea");
    if (r.current && d) {
      const u = (h) => {
        r.current.style = `top: ${1 - Number(h.target.scrollTop)}px`;
      };
      return d == null || d.addEventListener("scroll", u), () => {
        d == null || d.removeEventListener("scroll", u);
      };
    }
  }, [t]), K(() => {
    a.current && l(a.current.clientWidth);
  }, [a]), /* @__PURE__ */ s.jsxs("div", { ref: a, className: "land-prefix-input", children: [
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: r,
        style: { width: t ? "" : "0px" },
        className: `land-prefix-value-input-prefix ${t ? "withPrefix" : ""}`,
        children: [
          "[",
          /* @__PURE__ */ s.jsx("p", { className: "land-prefix-value-input-prefix-text", children: t }),
          "]"
        ]
      }
    ),
    /* @__PURE__ */ s.jsx(
      mm,
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
}, f8 = ({
  data: e = [],
  activeGroup: t,
  value: n,
  onChange: r,
  keyboardControl: o = !1
}) => {
  if (e.length <= 1) return null;
  const [i, a] = F(n ?? ""), [c, l] = F(t ?? "");
  K(() => a(n ?? ""), [n]), K(() => l(t ?? ""), [t]);
  const d = J(), u = X(() => {
    var g, L;
    return (L = (g = e == null ? void 0 : e.filter((m) => m.id === c)[0]) == null ? void 0 : g.mediaData) == null ? void 0 : L.map((m) => m.id);
  }, [e, c]), h = X(() => e == null ? void 0 : e.map((g) => g.id), [e]), p = X(() => u == null ? void 0 : u.indexOf(i), [u, i]), f = X(() => h == null ? void 0 : h.indexOf(c), [h, c]), x = (g) => e.slice(0, g).reduce((L, m) => L + m.mediaData.length, 0);
  return K(() => {
    if (n === void 0 || f === -1 || p === -1) return;
    let g = x(f);
    u.length <= 6 ? d.current && d.current.scrollTo({ top: (g - 1) * 96 + f * 8 + (g - f) * 1, behavior: "smooth" }) : p <= 5 ? d.current && d.current.scrollTo({ top: (g - 1) * 96 + f * 8 + (g - f) * 1, behavior: "smooth" }) : f === 0 ? d.current && d.current.scrollTo({ top: (g + Math.floor(p / 7) * 7) * 96 + f * 8 + (g - f + Math.floor(p / 7) * 7) * 1, behavior: "smooth" }) : d.current && d.current.scrollTo({ top: (g + 6 + Math.floor((p - 6) / 7) * 7) * 96 + f * 8 + (g - f + 6 + Math.floor((p - 6) / 7) * 7) * 1, behavior: "smooth" });
  }, [p, f]), K(() => {
    if (!o) return;
    const g = (L) => {
      var m, j, k, y, M, v, w, C, V;
      if (!(L.repeat || f === -1 || p === -1))
        if (["TEXTAREA", "INPUT"].indexOf(L.target.tagName) === -1 && L.preventDefault(), L.code === "ArrowUp" || L.key === "ArrowUp") {
          if (p > 0)
            a(u[p - 1]), r == null || r((m = e[f]) == null ? void 0 : m.mediaData[p - 1], e[f]);
          else if (f > 0) {
            l(h[f - 1] ?? "");
            const S = (k = (j = e == null ? void 0 : e.filter((H) => H.id === h[f - 1])[0]) == null ? void 0 : j.mediaData) == null ? void 0 : k.length;
            a((M = (y = e[f - 1]) == null ? void 0 : y.mediaData[S - 1]) == null ? void 0 : M.id), r == null || r((v = e[f - 1]) == null ? void 0 : v.mediaData[S - 1], e[f - 1]);
          }
        } else (L.code === "ArrowDown" || L.key === "ArrowDown") && (p < (u == null ? void 0 : u.length) - 1 ? (a(u[p + 1]), r == null || r((w = e[f]) == null ? void 0 : w.mediaData[p + 1], e[f])) : f < h.length - 1 && (l(h[f + 1] ?? ""), a((C = e[f + 1]) == null ? void 0 : C.mediaData[0].id), r == null || r((V = e[f + 1]) == null ? void 0 : V.mediaData[0], e[f + 1])));
    };
    return window.addEventListener("keydown", g), () => {
      window.removeEventListener("keydown", g);
    };
  }, [i, c, o]), K(() => {
    const g = document.querySelector(".currentPreviewCard");
    g && g.scrollIntoView({ behavior: "smooth" });
  }, []), /* @__PURE__ */ s.jsx("div", { className: "land-swiper-media-preview", onClick: (g) => g.stopPropagation(), children: /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: d,
      className: "land-swiper-media-preview-content",
      children: e == null ? void 0 : e.map((g, L) => {
        var m;
        return /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `land-swiper-media-preview-group ${g.id === t ? "active" : ""}`,
            children: (m = g.mediaData) == null ? void 0 : m.map((j, k) => /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
              k !== 0 && /* @__PURE__ */ s.jsx(Ze, { gap: 8 }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `land-swiper-media-preview-item ${n === j.id ? "active" : ""}`,
                  onClick: () => {
                    r == null || r(j, g);
                  },
                  children: /* @__PURE__ */ s.jsx(
                    n3,
                    {
                      url: j.url,
                      ratio: 1,
                      style: { width: "80px", borderRadius: "8px" },
                      imgStyle: { objectFit: "cover", borderRadius: "8px" }
                    }
                  )
                }
              )
            ] }, j.id ?? k))
          },
          g.id ?? L
        );
      })
    }
  ) });
}, m8 = (e) => {
  if (!e) return "00:00";
  if (typeof e == "string") return e;
  const t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), r = Math.round(e % 60), o = t < 10 ? "0" + t : t, i = n < 10 ? "0" + n : n, a = r < 10 ? "0" + r : r;
  return t > 0 ? o + ":" + i + ":" + a : i + ":" + a;
};
export {
  qe as GridType,
  Pc as IS_REACT_19,
  z as Icon,
  vm as LandAffixContainer,
  N0 as LandAlert,
  km as LandAnchor,
  Fs as LandAudio,
  Lm as LandAutoContainer,
  l8 as LandAutoWidthHeightTextarea,
  Vm as LandBadge,
  Tm as LandBreadCrumb,
  me as LandButton,
  X0 as LandCalendar,
  Dc as LandCheck,
  $m as LandCheckbox,
  Rm as LandCheckedContainer,
  Am as LandCollapse,
  Em as LandColorPicker,
  Im as LandContent,
  Pm as LandDatePicker,
  Hm as LandDialog,
  Ze as LandDivider,
  d8 as LandDoubleClickInput,
  Dm as LandDrawer,
  Os as LandDropdown,
  Bm as LandEllipsis,
  Fm as LandFlex,
  Om as LandFooter,
  _m as LandGrid,
  u8 as LandGridTemplate,
  Ym as LandHeader,
  h8 as LandHighlightInput,
  mm as LandHighlightTextarea,
  n3 as LandImage,
  zn as LandInput,
  Zm as LandLayout,
  dn as LandLink,
  b0 as LandLoading,
  Yc as LandMenu,
  Um as LandMessage,
  Oe as LandNumberInput,
  Km as LandPagination,
  Gm as LandPopConfirm,
  Re as LandPopOver,
  p8 as LandPrefixValueInput,
  Xm as LandProgress,
  um as LandRadio,
  qm as LandRadioGroup,
  Wm as LandSlider,
  zm as LandState,
  Jm as LandStatistic,
  e8 as LandSteps,
  Qm as LandSwiper,
  f8 as LandSwiperMediaPreview,
  t8 as LandSwitch,
  s8 as LandTable,
  n8 as LandTabs,
  pm as LandTag,
  r8 as LandTagInput,
  o8 as LandTimeline,
  i8 as LandTitle,
  a8 as LandUploader,
  c8 as LandWatermark,
  V0 as REACT_VERSION,
  ym as conditionalRender,
  wm as createCompatibleComponent,
  bm as createSafeCallback,
  Mm as createSafeEffect,
  Nm as createSafeMemo,
  Sm as createSafeRef,
  Cm as createSafeState,
  Ic as getReactVersion,
  S0 as supportsReact19Features,
  P0 as useClickOutside,
  m8 as useFormateTime,
  gm as useGetHighlightStr
};
//# sourceMappingURL=index.es.js.map
