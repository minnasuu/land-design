import * as rs from "react";
import Le, { useMemo as z, useState as O, useEffect as X, createContext as Ht, useRef as ee, useLayoutEffect as Il, useId as ss, useContext as Me, useInsertionEffect as Ji, useCallback as U, Children as Pl, isValidElement as El, forwardRef as Hl, Fragment as un, createElement as Qi, Component as Dl, useDebugValue as ao } from "react";
var Nr = { exports: {} }, Gt = {};
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
function Bl() {
  if (co) return Gt;
  co = 1;
  var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, d) {
    var u, h = {}, p = null, f = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (f = l.ref);
    for (u in l) r.call(l, u) && !i.hasOwnProperty(u) && (h[u] = l[u]);
    if (c && c.defaultProps) for (u in l = c.defaultProps, l) h[u] === void 0 && (h[u] = l[u]);
    return { $$typeof: t, type: c, key: p, ref: f, props: h, _owner: o.current };
  }
  return Gt.Fragment = n, Gt.jsx = a, Gt.jsxs = a, Gt;
}
var Kt = {};
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
function Fl() {
  return lo || (lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), g = Symbol.iterator, j = "@@iterator";
    function w(M) {
      if (M === null || typeof M != "object")
        return null;
      var H = g && M[g] || M[j];
      return typeof H == "function" ? H : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(M) {
      {
        for (var H = arguments.length, Z = new Array(H > 1 ? H - 1 : 0), W = 1; W < H; W++)
          Z[W - 1] = arguments[W];
        k("error", M, Z);
      }
    }
    function k(M, H, Z) {
      {
        var W = x.ReactDebugCurrentFrame, ie = W.getStackAddendum();
        ie !== "" && (H += "%s", Z = Z.concat([ie]));
        var le = Z.map(function(re) {
          return String(re);
        });
        le.unshift("Warning: " + H), Function.prototype.apply.call(console[M], console, le);
      }
    }
    var y = !1, b = !1, m = !1, L = !1, C = !1, T;
    T = Symbol.for("react.module.reference");
    function N(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === i || C || M === o || M === d || M === u || L || M === f || y || b || m || typeof M == "object" && M !== null && (M.$$typeof === p || M.$$typeof === h || M.$$typeof === a || M.$$typeof === c || M.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === T || M.getModuleId !== void 0));
    }
    function B(M, H, Z) {
      var W = M.displayName;
      if (W)
        return W;
      var ie = H.displayName || H.name || "";
      return ie !== "" ? Z + "(" + ie + ")" : Z;
    }
    function S(M) {
      return M.displayName || "Context";
    }
    function A(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
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
      if (typeof M == "object")
        switch (M.$$typeof) {
          case c:
            var H = M;
            return S(H) + ".Consumer";
          case a:
            var Z = M;
            return S(Z._context) + ".Provider";
          case l:
            return B(M, M.render, "ForwardRef");
          case h:
            var W = M.displayName || null;
            return W !== null ? W : A(M.type) || "Memo";
          case p: {
            var ie = M, le = ie._payload, re = ie._init;
            try {
              return A(re(le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, I = 0, F, D, K, V, P, R, E;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function G() {
      {
        if (I === 0) {
          F = console.log, D = console.info, K = console.warn, V = console.error, P = console.group, R = console.groupCollapsed, E = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: Y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        I++;
      }
    }
    function _() {
      {
        if (I--, I === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, M, {
              value: F
            }),
            info: $({}, M, {
              value: D
            }),
            warn: $({}, M, {
              value: K
            }),
            error: $({}, M, {
              value: V
            }),
            group: $({}, M, {
              value: P
            }),
            groupCollapsed: $({}, M, {
              value: R
            }),
            groupEnd: $({}, M, {
              value: E
            })
          });
        }
        I < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = x.ReactCurrentDispatcher, ce;
    function se(M, H, Z) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (ie) {
            var W = ie.stack.trim().match(/\n( *(at )?)/);
            ce = W && W[1] || "";
          }
        return `
` + ce + M;
      }
    }
    var ue = !1, be;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      be = new Se();
    }
    function Ve(M, H) {
      if (!M || ue)
        return "";
      {
        var Z = be.get(M);
        if (Z !== void 0)
          return Z;
      }
      var W;
      ue = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var le;
      le = J.current, J.current = null, G();
      try {
        if (H) {
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
            } catch (Re) {
              W = Re;
            }
            Reflect.construct(M, [], re);
          } else {
            try {
              re.call();
            } catch (Re) {
              W = Re;
            }
            M.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            W = Re;
          }
          M();
        }
      } catch (Re) {
        if (Re && W && typeof Re.stack == "string") {
          for (var ne = Re.stack.split(`
`), Te = W.stack.split(`
`), ge = ne.length - 1, ve = Te.length - 1; ge >= 1 && ve >= 0 && ne[ge] !== Te[ve]; )
            ve--;
          for (; ge >= 1 && ve >= 0; ge--, ve--)
            if (ne[ge] !== Te[ve]) {
              if (ge !== 1 || ve !== 1)
                do
                  if (ge--, ve--, ve < 0 || ne[ge] !== Te[ve]) {
                    var Ee = `
` + ne[ge].replace(" at new ", " at ");
                    return M.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", M.displayName)), typeof M == "function" && be.set(M, Ee), Ee;
                  }
                while (ge >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        ue = !1, J.current = le, _(), Error.prepareStackTrace = ie;
      }
      var jt = M ? M.displayName || M.name : "", ot = jt ? se(jt) : "";
      return typeof M == "function" && be.set(M, ot), ot;
    }
    function rr(M, H, Z) {
      return Ve(M, !1);
    }
    function sr(M) {
      var H = M.prototype;
      return !!(H && H.isReactComponent);
    }
    function xt(M, H, Z) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return Ve(M, sr(M));
      if (typeof M == "string")
        return se(M);
      switch (M) {
        case d:
          return se("Suspense");
        case u:
          return se("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case l:
            return rr(M.render);
          case h:
            return xt(M.type, H, Z);
          case p: {
            var W = M, ie = W._payload, le = W._init;
            try {
              return xt(le(ie), H, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var Ut = Object.prototype.hasOwnProperty, Ks = {}, Xs = x.ReactDebugCurrentFrame;
    function vn(M) {
      if (M) {
        var H = M._owner, Z = xt(M.type, M._source, H ? H.type : null);
        Xs.setExtraStackFrame(Z);
      } else
        Xs.setExtraStackFrame(null);
    }
    function hl(M, H, Z, W, ie) {
      {
        var le = Function.call.bind(Ut);
        for (var re in M)
          if (le(M, re)) {
            var ne = void 0;
            try {
              if (typeof M[re] != "function") {
                var Te = Error((W || "React class") + ": " + Z + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Te.name = "Invariant Violation", Te;
              }
              ne = M[re](H, re, W, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              ne = ge;
            }
            ne && !(ne instanceof Error) && (vn(ie), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", Z, re, typeof ne), vn(null)), ne instanceof Error && !(ne.message in Ks) && (Ks[ne.message] = !0, vn(ie), v("Failed %s type: %s", Z, ne.message), vn(null));
          }
      }
    }
    var pl = Array.isArray;
    function or(M) {
      return pl(M);
    }
    function fl(M) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, Z = H && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return Z;
      }
    }
    function ml(M) {
      try {
        return qs(M), !1;
      } catch {
        return !0;
      }
    }
    function qs(M) {
      return "" + M;
    }
    function zs(M) {
      if (ml(M))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fl(M)), qs(M);
    }
    var Js = x.ReactCurrentOwner, gl = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qs, Ws;
    function xl(M) {
      if (Ut.call(M, "ref")) {
        var H = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function vl(M) {
      if (Ut.call(M, "key")) {
        var H = Object.getOwnPropertyDescriptor(M, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function jl(M, H) {
      typeof M.ref == "string" && Js.current;
    }
    function kl(M, H) {
      {
        var Z = function() {
          Qs || (Qs = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        Z.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function Ll(M, H) {
      {
        var Z = function() {
          Ws || (Ws = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        Z.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var wl = function(M, H, Z, W, ie, le, re) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: M,
        key: H,
        ref: Z,
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
        value: W
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function yl(M, H, Z, W, ie) {
      {
        var le, re = {}, ne = null, Te = null;
        Z !== void 0 && (zs(Z), ne = "" + Z), vl(H) && (zs(H.key), ne = "" + H.key), xl(H) && (Te = H.ref, jl(H, ie));
        for (le in H)
          Ut.call(H, le) && !gl.hasOwnProperty(le) && (re[le] = H[le]);
        if (M && M.defaultProps) {
          var ge = M.defaultProps;
          for (le in ge)
            re[le] === void 0 && (re[le] = ge[le]);
        }
        if (ne || Te) {
          var ve = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          ne && kl(re, ve), Te && Ll(re, ve);
        }
        return wl(M, ne, Te, ie, W, Js.current, re);
      }
    }
    var ir = x.ReactCurrentOwner, eo = x.ReactDebugCurrentFrame;
    function vt(M) {
      if (M) {
        var H = M._owner, Z = xt(M.type, M._source, H ? H.type : null);
        eo.setExtraStackFrame(Z);
      } else
        eo.setExtraStackFrame(null);
    }
    var ar;
    ar = !1;
    function cr(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function to() {
      {
        if (ir.current) {
          var M = A(ir.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function Cl(M) {
      return "";
    }
    var no = {};
    function Ml(M) {
      {
        var H = to();
        if (!H) {
          var Z = typeof M == "string" ? M : M.displayName || M.name;
          Z && (H = `

Check the top-level render call using <` + Z + ">.");
        }
        return H;
      }
    }
    function ro(M, H) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var Z = Ml(H);
        if (no[Z])
          return;
        no[Z] = !0;
        var W = "";
        M && M._owner && M._owner !== ir.current && (W = " It was passed a child from " + A(M._owner.type) + "."), vt(M), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, W), vt(null);
      }
    }
    function so(M, H) {
      {
        if (typeof M != "object")
          return;
        if (or(M))
          for (var Z = 0; Z < M.length; Z++) {
            var W = M[Z];
            cr(W) && ro(W, H);
          }
        else if (cr(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var ie = w(M);
          if (typeof ie == "function" && ie !== M.entries)
            for (var le = ie.call(M), re; !(re = le.next()).done; )
              cr(re.value) && ro(re.value, H);
        }
      }
    }
    function bl(M) {
      {
        var H = M.type;
        if (H == null || typeof H == "string")
          return;
        var Z;
        if (typeof H == "function")
          Z = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === h))
          Z = H.propTypes;
        else
          return;
        if (Z) {
          var W = A(H);
          hl(Z, M.props, "prop", W, M);
        } else if (H.PropTypes !== void 0 && !ar) {
          ar = !0;
          var ie = A(H);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sl(M) {
      {
        for (var H = Object.keys(M.props), Z = 0; Z < H.length; Z++) {
          var W = H[Z];
          if (W !== "children" && W !== "key") {
            vt(M), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), vt(null);
            break;
          }
        }
        M.ref !== null && (vt(M), v("Invalid attribute `ref` supplied to `React.Fragment`."), vt(null));
      }
    }
    var oo = {};
    function io(M, H, Z, W, ie, le) {
      {
        var re = N(M);
        if (!re) {
          var ne = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Te = Cl();
          Te ? ne += Te : ne += to();
          var ge;
          M === null ? ge = "null" : or(M) ? ge = "array" : M !== void 0 && M.$$typeof === t ? (ge = "<" + (A(M.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof M, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, ne);
        }
        var ve = yl(M, H, Z, ie, le);
        if (ve == null)
          return ve;
        if (re) {
          var Ee = H.children;
          if (Ee !== void 0)
            if (W)
              if (or(Ee)) {
                for (var jt = 0; jt < Ee.length; jt++)
                  so(Ee[jt], M);
                Object.freeze && Object.freeze(Ee);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              so(Ee, M);
        }
        if (Ut.call(H, "key")) {
          var ot = A(M), Re = Object.keys(H).filter(function(Rl) {
            return Rl !== "key";
          }), lr = Re.length > 0 ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!oo[ot + lr]) {
            var Al = Re.length > 0 ? "{" + Re.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, lr, ot, Al, ot), oo[ot + lr] = !0;
          }
        }
        return M === r ? Sl(ve) : bl(ve), ve;
      }
    }
    function Nl(M, H, Z) {
      return io(M, H, Z, !0);
    }
    function Vl(M, H, Z) {
      return io(M, H, Z, !1);
    }
    var Tl = Vl, $l = Nl;
    Kt.Fragment = r, Kt.jsx = Tl, Kt.jsxs = $l;
  }()), Kt;
}
process.env.NODE_ENV === "production" ? Nr.exports = Bl() : Nr.exports = Fl();
var s = Nr.exports;
const dm = ({
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
  className: g,
  style: j,
  ...w
}) => {
  const x = z(
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
  ), [v, k] = O(!1), [y, b] = O(!1), m = (A) => A.hoverShow ? v ? 1 : 0 : A.hoverHide && y ? 0 : 1;
  X(() => {
    const A = ($) => {
      k(!1), b(!1), $.stopPropagation();
    };
    return document.body.addEventListener("wheel", A), () => {
      document.body.removeEventListener("wheel", A);
    };
  }, []);
  const L = "var(--padding-m)", C = (A, $, I) => {
    const F = $ !== void 0 ? $ : L;
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
        return I;
      default:
        return "auto";
    }
  }, T = (A, $) => {
    const I = $ !== void 0 ? $ : L;
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
        return I;
      default:
        return "auto";
    }
  }, N = (A, $, I) => {
    const F = $ !== void 0 ? $ : L;
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
        return I;
      default:
        return "auto";
    }
  }, B = (A, $) => {
    const I = $ !== void 0 ? $ : L;
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
        return I;
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
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-affix-container ${h ? "disabled" : ""} ${g}`,
      style: j,
      onClick: (A) => p == null ? void 0 : p(A),
      onMouseOver: () => {
        h || (k(!0), b(!0));
      },
      onMouseLeave: () => {
        k(!1), b(!1);
      },
      onWheel: (A) => A.stopPropagation(),
      ...w,
      children: [
        f,
        x == null ? void 0 : x.map(
          (A, $) => {
            var I;
            return A.option ? /* @__PURE__ */ s.jsx(
              "div",
              {
                style: {
                  left: C(A.placement, A.option.gap, A.option.left || 0),
                  right: T(A.placement, A.option.gap),
                  top: N(A.placement, A.option.gap, A.option.top || 0),
                  bottom: B(A.placement, A.option.gap),
                  transform: S(A.placement),
                  opacity: m(A.option),
                  zIndex: A.option.zIndex || 2,
                  animation: A.option.hoverShow && v ? A.option.showAnimation : "none",
                  ...A.option.style
                },
                className: `land-affix-container-item ${A.option.hoverShow ? "hoverShow" : ""} ${A.placement} absolute ${A.option.className ?? ""}`,
                onClick: (F) => {
                  var D, K;
                  F.stopPropagation(), (K = (D = A.option) == null ? void 0 : D.onClick) == null || K.call(D, F);
                },
                children: (I = A.option) == null ? void 0 : I.content
              },
              $
            ) : null;
          }
        )
      ]
    }
  );
}, Ol = ({
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
), _l = ({
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
), Yl = ({
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
), Zl = ({
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
), Ul = ({
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
), Gl = ({
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
), Kl = ({
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
), Xl = ({
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
), ql = ({
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
), zl = ({
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
    className: `setting ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s.jsx("path", { d: "M18.2838 43.1708C14.9327 42.1731 11.9498 40.3208 9.58787 37.8665C10.469 36.8222 11 35.4729 11 33.9996C11 30.6859 8.31371 27.9996 5 27.9996C4.79955 27.9996 4.60139 28.0095 4.40599 28.0287C4.13979 26.7272 4 25.3798 4 23.9996C4 21.909 4.32077 19.8933 4.91579 17.999C4.94381 17.9994 4.97188 17.9996 5 17.9996C8.31371 17.9996 11 15.3133 11 11.9996C11 11.0483 10.7786 10.1488 10.3846 9.34963C12.6975 7.19902 15.5205 5.58954 18.6521 4.72266C19.6444 6.66771 21.6667 7.99965 24 7.99965C26.3333 7.99965 28.3556 6.66771 29.3479 4.72266C32.4795 5.58954 35.3025 7.19902 37.6154 9.34963C37.2214 10.1488 37 11.0483 37 11.9996C37 15.3133 39.6863 17.9996 43 17.9996C43.0281 17.9996 43.0562 17.9994 43.0842 17.999C43.6792 19.8933 44 21.909 44 23.9996C44 25.3798 43.8602 26.7272 43.594 28.0287C43.3986 28.0095 43.2005 27.9996 43 27.9996C39.6863 27.9996 37 30.6859 37 33.9996C37 35.4729 37.531 36.8222 38.4121 37.8665C36.0502 40.3208 33.0673 42.1731 29.7162 43.1708C28.9428 40.7515 26.676 38.9996 24 38.9996C21.324 38.9996 19.0572 40.7515 18.2838 43.1708Z", stroke: e, "stroke-width": n, strokeLinejoin: "round" }),
      /* @__PURE__ */ s.jsx("path", { d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z", stroke: e, "stroke-width": n, strokeLinejoin: "round" })
    ]
  }
), ed = ({
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
), td = ({
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
), nd = ({
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
), rd = ({
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
), sd = ({
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
), od = ({
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
), id = ({
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
), ad = ({
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
), cd = ({
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
), ld = ({
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
), dd = ({
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
), ud = ({
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
), hd = ({
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
), pd = ({
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
), fd = ({
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
), md = ({
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
), gd = ({
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
] }), xd = ({
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
), vd = ({
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
), jd = ({
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
), kd = ({
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
), Ld = ({
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
), wd = ({
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
), Cd = ({
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
), Yd = ({
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
), Gd = ({
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
    className: `code ${o}`,
    onClick: i,
    children: [
      /* @__PURE__ */ s.jsx("path", { d: "M16 13L4 25.4322L16 37", stroke: e, "stroke-width": n, "stroke-linecap": "round", "stroke-linejoin": "round" }),
      /* @__PURE__ */ s.jsx("path", { d: "M32 13L44 25.4322L32 37", stroke: e, "stroke-width": n, "stroke-linecap": "round", "stroke-linejoin": "round" }),
      /* @__PURE__ */ s.jsx("path", { d: "M28 13L21 37", stroke: e, "stroke-width": n, "stroke-linecap": "round" })
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
), au = ({
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
), cu = ({
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
), du = ({
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
), Wi = ({
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
), uu = ({
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
), hu = ({
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
), fu = ({
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
), mu = ({
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
), gu = ({
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
), xu = ({
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
), vu = ({
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
), ju = ({
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
), Lu = ({
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
), wu = ({
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
), yu = ({
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
), bu = ({
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
), Nu = ({
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
), Au = ({
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
), Ru = ({
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
), Iu = ({
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
), Pu = ({
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
), Hu = ({
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
), Du = ({
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
), Bu = ({
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
), Fu = ({
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
), Ou = ({
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
), _u = ({
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
), Yu = ({
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
), Zu = ({
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
), Uu = ({
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
), Gu = ({
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
), Ku = ({
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
), Xu = ({
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
), lh = ({
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
), ph = ({
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
), fh = ({
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
), mh = ({
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
), xh = ({
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
), vh = ({
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
), jh = ({
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
), kh = ({
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
), Lh = ({
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
), wh = ({
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
), yh = ({
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
), Ch = ({
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
), Mh = ({
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
), bh = ({
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
), $1 = ({
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
), A1 = ({
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
), P1 = ({
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
), E1 = ({
  color: e = "currentcolor",
  size: t = 16,
  style: n,
  className: r = ""
}) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: t, height: t, viewBox: "0 0 16 16", fill: "none", style: n, className: r, children: /* @__PURE__ */ s.jsx("path", { d: "M14.0726 5.46403C13.5517 5.78293 13.1202 6.22878 12.8186 6.75984C12.5169 7.2909 12.3549 7.88981 12.3478 8.50053C12.3498 9.18788 12.5535 9.85953 12.9335 10.4323C13.3135 11.005 13.8532 11.4538 14.4857 11.7228C14.2363 12.5274 13.8672 13.2899 13.3909 13.9846C12.7093 14.9658 11.9966 15.9469 10.9122 15.9469C9.82777 15.9469 9.54887 15.3169 8.29917 15.3169C7.08047 15.3169 6.64667 15.9676 5.65517 15.9676C4.66367 15.9676 3.97177 15.0587 3.17647 13.9433C2.12594 12.3808 1.54858 10.5483 1.51367 8.66573C1.51367 5.56733 3.52767 3.92523 5.51057 3.92523C6.56407 3.92523 7.44197 4.61713 8.10297 4.61713C8.73297 4.61713 9.71417 3.88383 10.9122 3.88383C11.5281 3.86793 12.1386 4.00375 12.6897 4.27931C13.2408 4.55487 13.7157 4.96172 14.0726 5.46403ZM10.3442 2.57223C10.8723 1.95099 11.1712 1.16735 11.1911 0.352226C11.192 0.244769 11.1816 0.137514 11.1601 0.0322266C10.2529 0.12084 9.41408 0.553201 8.81557 1.24063C8.28238 1.83711 7.97217 2.59982 7.93767 3.39913C7.93807 3.49633 7.94846 3.59324 7.96867 3.68833C8.04019 3.70185 8.11279 3.70877 8.18557 3.70903C8.60365 3.67576 9.01059 3.55783 9.38167 3.3624C9.75275 3.16698 10.0802 2.89814 10.3442 2.57223Z", fill: e }) }), H1 = {
  // Navigation
  home: Ol,
  "home-fill": _l,
  application: Yl,
  more: Zl,
  "more-line": Ul,
  search: ld,
  // Interface
  refresh: Gl,
  female: Kl,
  male: Xl,
  "preview-open": ql,
  "preview-close": zl,
  avatar: Jl,
  tag: Ql,
  setting: Wl,
  "config-setting": td,
  collection: nd,
  share: rd,
  translate: sd,
  light: od,
  dark: ad,
  "light-fill": id,
  "dark-fill": cd,
  "setting-fill": ed,
  // Media
  image: dd,
  "video-play": ud,
  "video-pause": hd,
  volume: pd,
  "volume-muted": fd,
  "video-small-screen": md,
  "video-full-width": gd,
  loop: xd,
  // File
  file: vd,
  download: jd,
  upload: kd,
  "web-add": Ld,
  announcement: wd,
  "audio-file": yd,
  book: Cd,
  clipboard: Md,
  document: bd,
  email: Ud,
  "email-download": Sd,
  "email-push": Nd,
  "email-success": Vd,
  "email-fail": Td,
  "email-open": Gd,
  "file-add": $d,
  "code-file": Ad,
  "star-file": Rd,
  "text-file": Id,
  "text-scan": qd,
  folder: Pd,
  "code-folder": Ed,
  "folder-download": Hd,
  "folder-add": Dd,
  "folder-upload": Bd,
  "formatting-brush": Fd,
  instruction: Od,
  "list-view": _d,
  link: Yd,
  log: Zd,
  "note-pad": Kd,
  schedule: Xd,
  "web-page": zd,
  plan: Jd,
  calendar: Qd,
  code: Wd,
  // Ecommerce
  coupon: eu,
  ticket: tu,
  "bank-card": nu,
  consume: ru,
  commodity: su,
  dollar: ou,
  // State
  "check-stroke": iu,
  "check-fill": au,
  check: cu,
  "error-stroke": lu,
  "error-fill": du,
  error: Wi,
  "info-stroke": uu,
  "info-fill": hu,
  info: pu,
  "attention-stroke": fu,
  "attention-fill": mu,
  attention: gu,
  "question-stroke": xu,
  "question-fill": vu,
  question: ju,
  "hourglass-empty": ku,
  "hourglass-full": Lu,
  increase: wu,
  // Operate
  "switch-gear": yu,
  toggle: Cu,
  collapse: Mu,
  reload: bu,
  undo: Su,
  sort: Nu,
  "sort-descending": Vu,
  "sort-ascending": Tu,
  back: $u,
  "last-step": Au,
  "last-step-fill": Ru,
  "next-step": Iu,
  "next-step-fill": Pu,
  ahead: Eu,
  drag: Hu,
  add: Du,
  dec: Bu,
  "square-add": Qu,
  "dash-add": Wu,
  clear: Fu,
  delete: Ou,
  copy: _u,
  close: Yu,
  "color-picker": Zu,
  "zoom-in-arrow": Uu,
  "zoom-out-arrow": Gu,
  "zoom-in": Ku,
  "zoom-out": Xu,
  "zoom-in-btn": zu,
  "zoom-out-btn": Ju,
  out: qu,
  adjustment: eh,
  "alphabetical-sorting": th,
  "alphabetical-sorting-reverse": nh,
  brightness: rh,
  layer: x1,
  "layer-front": sh,
  "layer-back": oh,
  "clear-formate": ih,
  edit: ah,
  "clip-edit": ch,
  filter: lh,
  lock: dh,
  unlock: uh,
  "merge-cells": hh,
  "split-cells": ph,
  "cursor-move": fh,
  "cursor-move-fill": mh,
  "line-break": gh,
  quote: xh,
  scan: vh,
  like: jh,
  "like-fill": kh,
  star: Lh,
  "star-fill": wh,
  pen: yh,
  // Arrow
  "arrow-line": V1,
  "arrow-double": T1,
  arrow: $1,
  "arrow-triangle": A1,
  "arrow-to": R1,
  "arrow-nav": I1,
  // Device
  camera: P1,
  apple: E1,
  // Style
  "align-bottom": Ch,
  "align-top": Mh,
  "align-left": bh,
  "align-right": Sh,
  "align-horizontally": Nh,
  "align-vertically": Vh,
  "text-align-left": Th,
  "text-align-right": $h,
  "text-align-center": Ah,
  "text-align-justify": Rh,
  "text-align-middle": Ih,
  "align-bottom-center": Ph,
  "align-bottom-left": Eh,
  "align-bottom-right": Hh,
  "align-horizontal-bottom": Dh,
  "align-horizontal-center": Bh,
  "align-horizontal-top": Fh,
  "align-left-bottom": Oh,
  "align-left-center": _h,
  "align-left-top": Yh,
  "align-right-bottom": Zh,
  "align-right-center": Uh,
  "align-right-top": Gh,
  "align-top-center": Kh,
  "align-top-left": Xh,
  "align-top-right": qh,
  "align-vertical-left": Jh,
  "align-vertical-center": zh,
  "align-vertical-right": Qh,
  "flip-horizontally": Wh,
  "flip-vertically": e1,
  "font-size": t1,
  "line-height": n1,
  "text-bold": b1,
  "text-italic": S1,
  "text-underline": N1,
  "line-width": r1,
  "title-h1": s1,
  "title-h2": o1,
  "title-h3": i1,
  "indent-left": a1,
  "indent-right": c1,
  "drop-shadow-up": l1,
  "drop-shadow-down": d1,
  "drop-shadow-left": u1,
  "drop-shadow-right": h1,
  "inner-shadow-up": p1,
  "inner-shadow-down": f1,
  "inner-shadow-left": m1,
  "inner-shadow-right": g1,
  "check-list": v1,
  "alphabet-list": j1,
  "checkbox-list": k1,
  "radio-list": L1,
  "number-list": w1,
  mask: y1,
  "delete-strike": C1,
  tail: M1
}, q = ({ name: e, ...t }) => {
  const n = H1[e];
  return n ? /* @__PURE__ */ s.jsx(n, { ...t }) : (console.warn(`Icon "${e}" not found`), /* @__PURE__ */ s.jsx(Wi, { ...t }));
}, os = Ht({});
function is(e) {
  const t = ee(null);
  return t.current === null && (t.current = e()), t.current;
}
const as = typeof window < "u", ea = as ? Il : X, Gn = /* @__PURE__ */ Ht(null);
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
const We = {}, ta = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function na(e) {
  return typeof e == "object" && e !== null;
}
const ra = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function ds(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Be = /* @__NO_SIDE_EFFECTS__ */ (e) => e, D1 = (e, t) => (n) => t(e(n)), hn = (...e) => e.reduce(D1), nn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
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
function sa(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const uo = /* @__PURE__ */ new Set();
function hs(e, t, n) {
  e || uo.has(t) || (console.warn(t), uo.add(t));
}
const oa = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, B1 = 1e-7, F1 = 12;
function O1(e, t, n, r, o) {
  let i, a, c = 0;
  do
    a = t + (n - t) / 2, i = oa(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > B1 && ++c < F1);
  return a;
}
function pn(e, t, n, r) {
  if (e === t && n === r)
    return Be;
  const o = (i) => O1(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : oa(o(i), t, r);
}
const ia = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, aa = (e) => (t) => 1 - e(1 - t), ca = /* @__PURE__ */ pn(0.33, 1.53, 0.69, 0.99), ps = /* @__PURE__ */ aa(ca), la = /* @__PURE__ */ ia(ps), da = (e) => (e *= 2) < 1 ? 0.5 * ps(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), fs = (e) => 1 - Math.sin(Math.acos(e)), ua = aa(fs), ha = ia(fs), _1 = /* @__PURE__ */ pn(0.42, 0, 1, 1), Y1 = /* @__PURE__ */ pn(0, 0, 0.58, 1), pa = /* @__PURE__ */ pn(0.42, 0, 0.58, 1), Z1 = (e) => Array.isArray(e) && typeof e[0] != "number", fa = (e) => Array.isArray(e) && typeof e[0] == "number", ho = {
  linear: Be,
  easeIn: _1,
  easeInOut: pa,
  easeOut: Y1,
  circIn: fs,
  circInOut: ha,
  circOut: ua,
  backIn: ps,
  backInOut: la,
  backOut: ca,
  anticipate: da
}, U1 = (e) => typeof e == "string", po = (e) => {
  if (fa(e)) {
    Qe(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return pn(t, n, r, o);
  } else if (U1(e))
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
function G1(e, t) {
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
      const j = f && o ? n : r;
      return p && a.add(h), j.has(h) || j.add(h), h;
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
const K1 = 40;
function ma(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, a = jn.reduce((k, y) => (k[y] = G1(i, t ? y : void 0), k), {}), { setup: c, read: l, resolveKeyframes: d, preUpdate: u, update: h, preRender: p, render: f, postRender: g } = a, j = () => {
    const k = We.useManualTiming ? o.timestamp : performance.now();
    n = !1, We.useManualTiming || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(k - o.timestamp, K1), 1)), o.timestamp = k, o.isProcessing = !0, c.process(o), l.process(o), d.process(o), u.process(o), h.process(o), p.process(o), f.process(o), g.process(o), o.isProcessing = !1, n && t && (r = !1, e(j));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(j);
  };
  return { schedule: jn.reduce((k, y) => {
    const b = a[y];
    return k[y] = (m, L = !1, C = !1) => (n || w(), b.schedule(m, L, C)), k;
  }, {}), cancel: (k) => {
    for (let y = 0; y < jn.length; y++)
      a[jn[y]].cancel(k);
  }, state: o, steps: a };
}
const { schedule: he, cancel: nt, state: ye, steps: dr } = /* @__PURE__ */ ma(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0);
let Sn;
function X1() {
  Sn = void 0;
}
const Ie = {
  now: () => (Sn === void 0 && Ie.set(ye.isProcessing || We.useManualTiming ? ye.timestamp : performance.now()), Sn),
  set: (e) => {
    Sn = e, queueMicrotask(X1);
  }
}, ga = (e) => (t) => typeof t == "string" && t.startsWith(e), ms = /* @__PURE__ */ ga("--"), q1 = /* @__PURE__ */ ga("var(--"), gs = (e) => q1(e) ? z1.test(e.split("/*")[0].trim()) : !1, z1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Bt = {
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
function J1(e) {
  return e == null;
}
const Q1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, vs = (e, t) => (n) => !!(typeof n == "string" && Q1.test(n) && n.startsWith(e) || t && !J1(n) && Object.prototype.hasOwnProperty.call(n, t)), xa = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, i, a, c] = r.match(xs);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: c !== void 0 ? parseFloat(c) : 1
  };
}, W1 = (e) => Je(0, 255, e), ur = {
  ...Bt,
  transform: (e) => Math.round(W1(e))
}, lt = {
  test: /* @__PURE__ */ vs("rgb", "red"),
  parse: /* @__PURE__ */ xa("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ur.transform(e) + ", " + ur.transform(t) + ", " + ur.transform(n) + ", " + Jt(rn.transform(r)) + ")"
};
function e4(e) {
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
  parse: e4,
  transform: lt.transform
}, fn = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), et = /* @__PURE__ */ fn("deg"), Ke = /* @__PURE__ */ fn("%"), Q = /* @__PURE__ */ fn("px"), t4 = /* @__PURE__ */ fn("vh"), n4 = /* @__PURE__ */ fn("vw"), mo = {
  ...Ke,
  parse: (e) => Ke.parse(e) / 100,
  transform: (e) => Ke.transform(e * 100)
}, wt = {
  test: /* @__PURE__ */ vs("hsl", "hue"),
  parse: /* @__PURE__ */ xa("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ke.transform(Jt(t)) + ", " + Ke.transform(Jt(n)) + ", " + Jt(rn.transform(r)) + ")"
}, je = {
  test: (e) => lt.test(e) || Vr.test(e) || wt.test(e),
  parse: (e) => lt.test(e) ? lt.parse(e) : wt.test(e) ? wt.parse(e) : Vr.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? lt.transform(e) : wt.transform(e),
  getAnimatableNone: (e) => {
    const t = je.parse(e);
    return t.alpha = 0, je.transform(t);
  }
}, r4 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function s4(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(xs)) == null ? void 0 : t.length) || 0) + (((n = e.match(r4)) == null ? void 0 : n.length) || 0) > 0;
}
const va = "number", ja = "color", o4 = "var", i4 = "var(", go = "${}", a4 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function sn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let i = 0;
  const c = t.replace(a4, (l) => (je.test(l) ? (r.color.push(i), o.push(ja), n.push(je.parse(l))) : l.startsWith(i4) ? (r.var.push(i), o.push(o4), n.push(l)) : (r.number.push(i), o.push(va), n.push(parseFloat(l))), ++i, go)).split(go);
  return { values: n, split: c, indexes: r, types: o };
}
function ka(e) {
  return sn(e).values;
}
function La(e) {
  const { split: t, types: n } = sn(e), r = t.length;
  return (o) => {
    let i = "";
    for (let a = 0; a < r; a++)
      if (i += t[a], o[a] !== void 0) {
        const c = n[a];
        c === va ? i += Jt(o[a]) : c === ja ? i += je.transform(o[a]) : i += o[a];
      }
    return i;
  };
}
const c4 = (e) => typeof e == "number" ? 0 : je.test(e) ? je.getAnimatableNone(e) : e;
function l4(e) {
  const t = ka(e);
  return La(e)(t.map(c4));
}
const rt = {
  test: s4,
  parse: ka,
  createTransformer: La,
  getAnimatableNone: l4
};
function hr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function d4({ hue: e, saturation: t, lightness: n, alpha: r }) {
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
}, u4 = [Vr, lt, wt], h4 = (e) => u4.find((t) => t.test(e));
function xo(e) {
  const t = h4(e);
  if (Dt(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === wt && (n = d4(n)), n;
}
const vo = (e, t) => {
  const n = xo(e), r = xo(t);
  if (!n || !r)
    return Hn(e, t);
  const o = { ...n };
  return (i) => (o.red = pr(n.red, r.red, i), o.green = pr(n.green, r.green, i), o.blue = pr(n.blue, r.blue, i), o.alpha = fe(n.alpha, r.alpha, i), lt.transform(o));
}, Tr = /* @__PURE__ */ new Set(["none", "hidden"]);
function p4(e, t) {
  return Tr.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function f4(e, t) {
  return (n) => fe(e, t, n);
}
function js(e) {
  return typeof e == "number" ? f4 : typeof e == "string" ? gs(e) ? Hn : je.test(e) ? vo : x4 : Array.isArray(e) ? wa : typeof e == "object" ? je.test(e) ? vo : m4 : Hn;
}
function wa(e, t) {
  const n = [...e], r = n.length, o = e.map((i, a) => js(i)(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}
function m4(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = js(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}
function g4(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const i = t.types[o], a = e.indexes[i][r[i]], c = e.values[a] ?? 0;
    n[o] = c, r[i]++;
  }
  return n;
}
const x4 = (e, t) => {
  const n = rt.createTransformer(t), r = sn(e), o = sn(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Tr.has(e) && !o.values.length || Tr.has(t) && !r.values.length ? p4(e, t) : hn(wa(g4(r, o), o.values), n) : (Dt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Hn(e, t));
};
function ya(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? fe(e, t, n) : js(e)(e, t);
}
const v4 = (e) => {
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
}, Ca = (e, t, n = 10) => {
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
function j4(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), o = Math.min(ks(r), Dn);
  return {
    type: "keyframes",
    ease: (i) => r.next(o * i).value / t,
    duration: /* @__PURE__ */ Ge(o)
  };
}
const k4 = 5;
function Ma(e, t, n) {
  const r = Math.max(t - k4, 0);
  return sa(n - e(r), t - r);
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
function L4({ duration: e = pe.duration, bounce: t = pe.bounce, velocity: n = pe.velocity, mass: r = pe.mass }) {
  let o, i;
  Dt(e <= /* @__PURE__ */ Ye(pe.maxDuration), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  a = Je(pe.minDamping, pe.maxDamping, a), e = Je(pe.minDuration, pe.maxDuration, /* @__PURE__ */ Ge(e)), a < 1 ? (o = (d) => {
    const u = d * a, h = u * e, p = u - n, f = $r(d, a), g = Math.exp(-h);
    return fr - p / f * g;
  }, i = (d) => {
    const h = d * a * e, p = h * n + n, f = Math.pow(a, 2) * Math.pow(d, 2) * e, g = Math.exp(-h), j = $r(Math.pow(d, 2), a);
    return (-o(d) + fr > 0 ? -1 : 1) * ((p - f) * g) / j;
  }) : (o = (d) => {
    const u = Math.exp(-d * e), h = (d - n) * e + 1;
    return -fr + u * h;
  }, i = (d) => {
    const u = Math.exp(-d * e), h = (n - d) * (e * e);
    return u * h;
  });
  const c = 5 / e, l = y4(o, i, c);
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
const w4 = 12;
function y4(e, t, n) {
  let r = n;
  for (let o = 1; o < w4; o++)
    r = r - e(r) / t(r);
  return r;
}
function $r(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const C4 = ["duration", "bounce"], M4 = ["stiffness", "damping", "mass"];
function jo(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function b4(e) {
  let t = {
    velocity: pe.velocity,
    stiffness: pe.stiffness,
    damping: pe.damping,
    mass: pe.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!jo(e, M4) && jo(e, C4))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, i = 2 * Je(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: pe.mass,
        stiffness: o,
        damping: i
      };
    } else {
      const n = L4(e);
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
  const i = n.keyframes[0], a = n.keyframes[n.keyframes.length - 1], c = { done: !1, value: i }, { stiffness: l, damping: d, mass: u, duration: h, velocity: p, isResolvedFromDuration: f } = b4({
    ...n,
    velocity: -/* @__PURE__ */ Ge(n.velocity || 0)
  }), g = p || 0, j = d / (2 * Math.sqrt(l * u)), w = a - i, x = /* @__PURE__ */ Ge(Math.sqrt(l / u)), v = Math.abs(w) < 5;
  r || (r = v ? pe.restSpeed.granular : pe.restSpeed.default), o || (o = v ? pe.restDelta.granular : pe.restDelta.default);
  let k;
  if (j < 1) {
    const b = $r(x, j);
    k = (m) => {
      const L = Math.exp(-j * x * m);
      return a - L * ((g + j * x * w) / b * Math.sin(b * m) + w * Math.cos(b * m));
    };
  } else if (j === 1)
    k = (b) => a - Math.exp(-x * b) * (w + (g + x * w) * b);
  else {
    const b = x * Math.sqrt(j * j - 1);
    k = (m) => {
      const L = Math.exp(-j * x * m), C = Math.min(b * m, 300);
      return a - L * ((g + j * x * w) * Math.sinh(C) + b * w * Math.cosh(C)) / b;
    };
  }
  const y = {
    calculatedDuration: f && h || null,
    next: (b) => {
      const m = k(b);
      if (f)
        c.done = b >= h;
      else {
        let L = b === 0 ? g : 0;
        j < 1 && (L = b === 0 ? /* @__PURE__ */ Ye(g) : Ma(k, b, m));
        const C = Math.abs(L) <= r, T = Math.abs(a - m) <= o;
        c.done = C && T;
      }
      return c.value = c.done ? a : m, c;
    },
    toString: () => {
      const b = Math.min(ks(y), Dn), m = Ca((L) => y.next(b * L).value, b, 30);
      return b + "ms " + m;
    },
    toTransition: () => {
    }
  };
  return y;
}
Bn.applyToOptions = (e) => {
  const t = j4(e, 100, Bn);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ Ye(t.duration), e.type = "keyframes", e;
};
function Ar({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: c, max: l, restDelta: d = 0.5, restSpeed: u }) {
  const h = e[0], p = {
    done: !1,
    value: h
  }, f = (C) => c !== void 0 && C < c || l !== void 0 && C > l, g = (C) => c === void 0 ? l : l === void 0 || Math.abs(c - C) < Math.abs(l - C) ? c : l;
  let j = n * t;
  const w = h + j, x = a === void 0 ? w : a(w);
  x !== w && (j = x - h);
  const v = (C) => -j * Math.exp(-C / r), k = (C) => x + v(C), y = (C) => {
    const T = v(C), N = k(C);
    p.done = Math.abs(T) <= d, p.value = p.done ? x : N;
  };
  let b, m;
  const L = (C) => {
    f(p.value) && (b = C, m = Bn({
      keyframes: [p.value, g(p.value)],
      velocity: Ma(k, C, p.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: i,
      restDelta: d,
      restSpeed: u
    }));
  };
  return L(0), {
    calculatedDuration: null,
    next: (C) => {
      let T = !1;
      return !m && b === void 0 && (T = !0, y(C), L(C)), b !== void 0 && C >= b ? m.next(C - b) : (!T && y(C), p);
    }
  };
}
function S4(e, t, n) {
  const r = [], o = n || We.mix || ya, i = e.length - 1;
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
function N4(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (Qe(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const a = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const c = S4(t, r, o), l = c.length, d = (u) => {
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
function V4(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ nn(0, t, r);
    e.push(fe(n, 1, o));
  }
}
function T4(e) {
  const t = [0];
  return V4(t, e.length - 1), t;
}
function $4(e, t) {
  return e.map((n) => n * t);
}
function A4(e, t) {
  return e.map(() => t || pa).splice(0, e.length - 1);
}
function yt({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = Z1(r) ? r.map(po) : po(r), i = {
    done: !1,
    value: t[0]
  }, a = $4(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : T4(t),
    e
  ), c = N4(a, t, {
    ease: Array.isArray(o) ? o : A4(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = c(l), i.done = l >= e, i)
  };
}
const R4 = (e) => e !== null;
function Ls(e, { repeat: t, repeatType: n = "loop" }, r, o = 1) {
  const i = e.filter(R4), c = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !c || r === void 0 ? i[c] : r;
}
const I4 = {
  decay: Ar,
  inertia: Ar,
  tween: yt,
  keyframes: yt,
  spring: Bn
};
function ba(e) {
  typeof e.type == "string" && (e.type = I4[e.type]);
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
const P4 = (e) => e / 100;
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
    ba(t);
    const { type: n = yt, repeat: r = 0, repeatDelay: o = 0, repeatType: i, velocity: a = 0 } = t;
    let { keyframes: c } = t;
    const l = n || yt;
    process.env.NODE_ENV !== "production" && l !== yt && Qe(c.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${c}`), l !== yt && typeof c[0] != "number" && (this.mixKeyframes = hn(P4, ya(c[0], c[1])), c = [0, 100]);
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
    const { delay: d = 0, keyframes: u, repeat: h, repeatType: p, repeatDelay: f, type: g, onUpdate: j, finalKeyframe: w } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const x = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), v = this.playbackSpeed >= 0 ? x < 0 : x > o;
    this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
    let k = this.currentTime, y = r;
    if (h) {
      const C = Math.min(this.currentTime, o) / c;
      let T = Math.floor(C), N = C % 1;
      !N && C >= 1 && (N = 1), N === 1 && T--, T = Math.min(T, h + 1), !!(T % 2) && (p === "reverse" ? (N = 1 - N, f && (N -= f / c)) : p === "mirror" && (y = a)), k = Je(0, 1, N) * c;
    }
    const b = v ? { done: !1, value: u[0] } : y.next(k);
    i && (b.value = i(b.value));
    let { done: m } = b;
    !v && l !== null && (m = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
    const L = this.holdTime === null && (this.state === "finished" || this.state === "running" && m);
    return L && g !== Ar && (b.value = Ls(u, this.options, w, this.speed)), j && j(b.value), L && this.finish(), b;
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
    const { driver: t = v4, startTime: n } = this.options;
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
function E4(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const dt = (e) => e * 180 / Math.PI, Rr = (e) => {
  const t = dt(Math.atan2(e[1], e[0]));
  return Ir(t);
}, H4 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Rr,
  rotateZ: Rr,
  skewX: (e) => dt(Math.atan(e[1])),
  skewY: (e) => dt(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Ir = (e) => (e = e % 360, e < 0 && (e += 360), e), ko = Rr, Lo = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), wo = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), D4 = {
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
function Pr(e) {
  return e.includes("scale") ? 1 : 0;
}
function Er(e, t) {
  if (!e || e === "none")
    return Pr(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, o;
  if (n)
    r = D4, o = n;
  else {
    const c = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = H4, o = c;
  }
  if (!o)
    return Pr(t);
  const i = r[t], a = o[1].split(",").map(F4);
  return typeof i == "function" ? i(a) : a[i];
}
const B4 = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Er(n, t);
};
function F4(e) {
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
], Ot = new Set(Ft), yo = (e) => e === Bt || e === Q, O4 = /* @__PURE__ */ new Set(["x", "y", "z"]), _4 = Ft.filter((e) => !O4.has(e));
function Y4(e) {
  const t = [];
  return _4.forEach((n) => {
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
  x: (e, { transform: t }) => Er(t, "x"),
  y: (e, { transform: t }) => Er(t, "y")
};
ht.translateX = ht.x;
ht.translateY = ht.y;
const pt = /* @__PURE__ */ new Set();
let Hr = !1, Dr = !1, Br = !1;
function Sa() {
  if (Dr) {
    const e = Array.from(pt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = Y4(r);
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
function Na() {
  pt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Dr = !0);
  });
}
function Z4() {
  Br = !0, Na(), Sa(), Br = !1;
}
class Cs {
  constructor(t, n, r, o, i, a = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = a;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (pt.add(this), Hr || (Hr = !0, he.read(Na), he.resolveKeyframes(Sa))) : (this.readKeyframes(), this.complete());
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
    E4(t);
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
const U4 = (e) => e.startsWith("--");
function G4(e, t, n) {
  U4(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const K4 = /* @__PURE__ */ ds(() => window.ScrollTimeline !== void 0), X4 = {};
function q4(e, t) {
  const n = /* @__PURE__ */ ds(e);
  return () => X4[t] ?? n();
}
const Va = /* @__PURE__ */ q4(() => {
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
function Ta(e, t) {
  if (e)
    return typeof e == "function" ? Va() ? Ca(e, t) : "ease-out" : fa(e) ? qt(e) : Array.isArray(e) ? e.map((n) => Ta(n, t) || Co.easeOut) : Co[e];
}
function z4(e, t, n, { delay: r = 0, duration: o = 300, repeat: i = 0, repeatType: a = "loop", ease: c = "easeOut", times: l } = {}, d = void 0) {
  const u = {
    [t]: n
  };
  l && (u.offset = l);
  const h = Ta(c, o);
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
function $a(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function J4({ type: e, ...t }) {
  return $a(e) && Va() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Q4 extends ws {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: o, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: c, onComplete: l } = t;
    this.isPseudoElement = !!i, this.allowFlatten = a, this.options = t, Qe(typeof t.type != "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
    const d = J4(t);
    this.animation = z4(n, r, o, d, i), d.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !i) {
        const u = Ls(o, this.options, c, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : G4(n, r, u), this.animation.cancel();
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
    return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && K4() ? (this.animation.timeline = t, Be) : n(this);
  }
}
const Aa = {
  anticipate: da,
  backInOut: la,
  circInOut: ha
};
function W4(e) {
  return e in Aa;
}
function e2(e) {
  typeof e.ease == "string" && W4(e.ease) && (e.ease = Aa[e.ease]);
}
const Mo = 10;
class t2 extends Q4 {
  constructor(t) {
    e2(t), ba(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
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
function n2(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function r2(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], a = bo(o, t), c = bo(i, t);
  return Dt(a === c, `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`), !a || !c ? !1 : n2(e) || (n === "spring" || $a(n)) && r;
}
function Ms(e) {
  return na(e) && "offsetHeight" in e;
}
const s2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), o2 = /* @__PURE__ */ ds(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function i2(e) {
  var d;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: o, damping: i, type: a } = e;
  if (!Ms((d = t == null ? void 0 : t.owner) == null ? void 0 : d.current))
    return !1;
  const { onUpdate: c, transformTemplate: l } = t.owner.getProps();
  return o2() && n && s2.has(n) && (n !== "transform" || !l) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !r && o !== "mirror" && i !== 0 && a !== "inertia";
}
const a2 = 40;
class c2 extends ws {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: c, name: l, motionValue: d, element: u, ...h }) {
    var g;
    super(), this.stop = () => {
      var j, w;
      this._animation && (this._animation.stop(), (j = this.stopTimeline) == null || j.call(this)), (w = this.keyframeResolver) == null || w.cancel();
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
    this.keyframeResolver = new f(c, (j, w, x) => this.onKeyframesResolved(j, w, p, !x), l, d, u), (g = this.keyframeResolver) == null || g.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, o) {
    this.keyframeResolver = void 0;
    const { name: i, type: a, velocity: c, delay: l, isHandoff: d, onUpdate: u } = r;
    this.resolvedAt = Ie.now(), r2(t, i, a, c) || ((We.instantAnimations || !l) && (u == null || u(Ls(t, r, n))), t[0] = t[t.length - 1], r.duration = 0, r.repeat = 0);
    const p = {
      startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > a2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, f = !d && i2(p) ? new t2({
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
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), Z4()), this._animation;
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
const l2 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function d2(e) {
  const t = l2.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const u2 = 4;
function Ra(e, t, n = 1) {
  Qe(n <= u2, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = d2(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return ta(a) ? parseFloat(a) : a;
  }
  return gs(o) ? Ra(o, t, n + 1) : o;
}
function bs(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Ia = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ft
]), h2 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Pa = (e) => (t) => t.test(e), Ea = [Bt, Q, Ke, et, n4, t4, h2], So = (e) => Ea.find(Pa(e));
function p2(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ra(e) : !0;
}
const f2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function m2(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(xs) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = f2.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const g2 = /\b([a-z-]*)\(.*?\)/gu, Fr = {
  ...rt,
  getAnimatableNone: (e) => {
    const t = e.match(g2);
    return t ? t.map(m2).join(" ") : e;
  }
}, No = {
  ...Bt,
  transform: Math.round
}, x2 = {
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
  distance: Q,
  translateX: Q,
  translateY: Q,
  translateZ: Q,
  x: Q,
  y: Q,
  z: Q,
  perspective: Q,
  transformPerspective: Q,
  opacity: rn,
  originX: mo,
  originY: mo,
  originZ: Q
}, Ss = {
  // Border props
  borderWidth: Q,
  borderTopWidth: Q,
  borderRightWidth: Q,
  borderBottomWidth: Q,
  borderLeftWidth: Q,
  borderRadius: Q,
  radius: Q,
  borderTopLeftRadius: Q,
  borderTopRightRadius: Q,
  borderBottomRightRadius: Q,
  borderBottomLeftRadius: Q,
  // Positioning props
  width: Q,
  maxWidth: Q,
  height: Q,
  maxHeight: Q,
  top: Q,
  right: Q,
  bottom: Q,
  left: Q,
  // Spacing props
  padding: Q,
  paddingTop: Q,
  paddingRight: Q,
  paddingBottom: Q,
  paddingLeft: Q,
  margin: Q,
  marginTop: Q,
  marginRight: Q,
  marginBottom: Q,
  marginLeft: Q,
  // Misc
  backgroundPositionX: Q,
  backgroundPositionY: Q,
  ...x2,
  zIndex: No,
  // SVG
  fillOpacity: rn,
  strokeOpacity: rn,
  numOctaves: No
}, v2 = {
  ...Ss,
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
}, Ha = (e) => v2[e];
function Da(e, t) {
  let n = Ha(e);
  return n !== Fr && (n = rt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const j2 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function k2(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !j2.has(i) && sn(i).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const i of t)
      e[i] = Da(n, o);
}
class L2 extends Cs {
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
        const u = Ra(d, n.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !Ia.has(r) || t.length !== 2)
      return;
    const [o, i] = t, a = So(o), c = So(i);
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
      (t[o] === null || p2(t[o])) && r.push(o);
    r.length && k2(t, r, n);
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
function w2(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const o = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
const Ba = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Vo = 30, y2 = (e) => !isNaN(parseFloat(e));
class C2 {
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
    this.current = t, this.updatedAt = Ie.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = y2(this.current));
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
    return sa(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  return new C2(e, t);
}
const { schedule: Ns } = /* @__PURE__ */ ma(queueMicrotask, !1), _e = {
  x: !1,
  y: !1
};
function Fa() {
  return _e.x || _e.y;
}
function M2(e) {
  return e === "x" || e === "y" ? _e[e] ? null : (_e[e] = !0, () => {
    _e[e] = !1;
  }) : _e.x || _e.y ? null : (_e.x = _e.y = !0, () => {
    _e.x = _e.y = !1;
  });
}
function Oa(e, t) {
  const n = w2(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function To(e) {
  return !(e.pointerType === "touch" || Fa());
}
function b2(e, t, n = {}) {
  const [r, o, i] = Oa(e, n), a = (c) => {
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
const _a = (e, t) => t ? e === t ? !0 : _a(e, t.parentElement) : !1, Vs = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, S2 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function N2(e) {
  return S2.has(e.tagName) || e.tabIndex !== -1;
}
const Nn = /* @__PURE__ */ new WeakSet();
function $o(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function mr(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const V2 = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = $o(() => {
    if (Nn.has(n))
      return;
    mr(n, "down");
    const o = $o(() => {
      mr(n, "up");
    }), i = () => mr(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Ao(e) {
  return Vs(e) && !Fa();
}
function T2(e, t, n = {}) {
  const [r, o, i] = Oa(e, n), a = (c) => {
    const l = c.currentTarget;
    if (!Ao(c))
      return;
    Nn.add(l);
    const d = t(l, c), u = (f, g) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", p), Nn.has(l) && Nn.delete(l), Ao(f) && typeof d == "function" && d(f, { success: g });
    }, h = (f) => {
      u(f, l === window || l === document || n.useGlobalTarget || _a(l, f.target));
    }, p = (f) => {
      u(f, !1);
    };
    window.addEventListener("pointerup", h, o), window.addEventListener("pointercancel", p, o);
  };
  return r.forEach((c) => {
    (n.useGlobalTarget ? window : c).addEventListener("pointerdown", a, o), Ms(c) && (c.addEventListener("focus", (d) => V2(d, o)), !N2(c) && !c.hasAttribute("tabindex") && (c.tabIndex = 0));
  }), i;
}
function Ya(e) {
  return na(e) && "ownerSVGElement" in e;
}
function $2(e) {
  return Ya(e) && e.tagName === "svg";
}
const Ne = (e) => !!(e && e.getVelocity), A2 = [...Ea, je, rt], R2 = (e) => A2.find(Pa(e)), Ts = Ht({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class I2 extends rs.Component {
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
function P2({ children: e, isPresent: t, anchorX: n, root: r }) {
  const o = ss(), i = ee(null), a = ee({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: c } = Me(Ts);
  return Ji(() => {
    const { width: l, height: d, top: u, left: h, right: p } = a.current;
    if (t || !i.current || !l || !d)
      return;
    const f = n === "left" ? `left: ${h}` : `right: ${p}`;
    i.current.dataset.motionPopId = o;
    const g = document.createElement("style");
    c && (g.nonce = c);
    const j = r ?? document.head;
    return j.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${d}px !important;
            ${f}px !important;
            top: ${u}px !important;
          }
        `), () => {
      j.removeChild(g), j.contains(g) && j.removeChild(g);
    };
  }, [t]), s.jsx(I2, { isPresent: t, childRef: i, sizeRef: a, children: rs.cloneElement(e, { ref: i }) });
}
const E2 = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a, anchorX: c, root: l }) => {
  const d = is(H2), u = ss();
  let h = !0, p = z(() => (h = !1, {
    id: u,
    initial: t,
    isPresent: n,
    custom: o,
    onExitComplete: (f) => {
      d.set(f, !0);
      for (const g of d.values())
        if (!g)
          return;
      r && r();
    },
    register: (f) => (d.set(f, !1), () => d.delete(f))
  }), [n, d, r]);
  return i && h && (p = { ...p }), z(() => {
    d.forEach((f, g) => d.set(g, !1));
  }, [n]), rs.useEffect(() => {
    !n && !d.size && r && r();
  }, [n]), a === "popLayout" && (e = s.jsx(P2, { isPresent: n, anchorX: c, root: l, children: e })), s.jsx(Gn.Provider, { value: p, children: e });
};
function H2() {
  return /* @__PURE__ */ new Map();
}
function Za(e = !0) {
  const t = Me(Gn);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, i = ss();
  X(() => {
    if (e)
      return o(i);
  }, [e]);
  const a = U(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, a] : [!0];
}
const Ln = (e) => e.key || "";
function Ro(e) {
  const t = [];
  return Pl.forEach(e, (n) => {
    El(n) && t.push(n);
  }), t;
}
const D2 = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: i = "sync", propagate: a = !1, anchorX: c = "left", root: l }) => {
  const [d, u] = Za(a), h = z(() => Ro(e), [e]), p = a && !d ? [] : h.map(Ln), f = ee(!0), g = ee(h), j = is(() => /* @__PURE__ */ new Map()), [w, x] = O(h), [v, k] = O(h);
  ea(() => {
    f.current = !1, g.current = h;
    for (let m = 0; m < v.length; m++) {
      const L = Ln(v[m]);
      p.includes(L) ? j.delete(L) : j.get(L) !== !0 && j.set(L, !1);
    }
  }, [v, p.length, p.join("-")]);
  const y = [];
  if (h !== w) {
    let m = [...h];
    for (let L = 0; L < v.length; L++) {
      const C = v[L], T = Ln(C);
      p.includes(T) || (m.splice(L, 0, C), y.push(C));
    }
    return i === "wait" && y.length && (m = y), k(Ro(m)), x(h), null;
  }
  process.env.NODE_ENV !== "production" && i === "wait" && v.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: b } = Me(os);
  return s.jsx(s.Fragment, { children: v.map((m) => {
    const L = Ln(m), C = a && !d ? !1 : h === v || p.includes(L), T = () => {
      if (j.has(L))
        j.set(L, !0);
      else
        return;
      let N = !0;
      j.forEach((B) => {
        B || (N = !1);
      }), N && (b == null || b(), k(g.current), a && (u == null || u()), r && r());
    };
    return s.jsx(E2, { isPresent: C, initial: !f.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: o, mode: i, root: l, onExitComplete: C ? void 0 : T, anchorX: c, children: m }, L);
  }) });
}, Ua = Ht({ strict: !1 }), Io = {
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
function B2(e) {
  for (const t in e)
    Vt[t] = {
      ...Vt[t],
      ...e[t]
    };
}
const F2 = /* @__PURE__ */ new Set([
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
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || F2.has(e);
}
let Ga = (e) => !Fn(e);
function O2(e) {
  typeof e == "function" && (Ga = (t) => t.startsWith("on") ? !Fn(t) : e(t));
}
try {
  O2(require("@emotion/is-prop-valid").default);
} catch {
}
function _2(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Ga(o) || n === !0 && Fn(o) || !t && !Fn(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function Y2(e) {
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
const Kn = /* @__PURE__ */ Ht({});
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
], As = ["initial", ...$s];
function qn(e) {
  return Xn(e.animate) || As.some((t) => on(e[t]));
}
function Ka(e) {
  return !!(qn(e) || e.variants);
}
function Z2(e, t) {
  if (qn(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || on(n) ? n : void 0,
      animate: on(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function U2(e) {
  const { initial: t, animate: n } = Z2(e, Me(Kn));
  return z(() => ({ initial: t, animate: n }), [Po(t), Po(n)]);
}
function Po(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const G2 = Symbol.for("motionComponentSymbol");
function Ct(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function K2(e, t, n) {
  return U(
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
const Rs = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), X2 = "framerAppearId", Xa = "data-" + Rs(X2), qa = Ht({});
function q2(e, t, n, r, o) {
  var j, w;
  const { visualElement: i } = Me(Kn), a = Me(Ua), c = Me(Gn), l = Me(Ts).reducedMotion, d = ee(null);
  r = r || a.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const u = d.current, h = Me(qa);
  u && !u.projection && o && (u.type === "html" || u.type === "svg") && z2(d.current, n, o, h);
  const p = ee(!1);
  Ji(() => {
    u && p.current && u.update(n, c);
  });
  const f = n[Xa], g = ee(!!f && !((j = window.MotionHandoffIsComplete) != null && j.call(window, f)) && ((w = window.MotionHasOptimisedAnimation) == null ? void 0 : w.call(window, f)));
  return ea(() => {
    u && (p.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), Ns.render(u.render), g.current && u.animationState && u.animationState.animateChanges());
  }), X(() => {
    u && (!g.current && u.animationState && u.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      var x;
      (x = window.MotionHandoffMarkAsComplete) == null || x.call(window, f);
    }), g.current = !1));
  }), u;
}
function z2(e, t, n, r) {
  const { layoutId: o, layout: i, drag: a, dragConstraints: c, layoutScroll: l, layoutRoot: d, layoutCrossfade: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : za(e.parent)), e.projection.setOptions({
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
function za(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : za(e.parent);
}
function J2({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && B2(e);
  function i(c, l) {
    let d;
    const u = {
      ...Me(Ts),
      ...c,
      layoutId: Q2(c)
    }, { isStatic: h } = u, p = U2(c), f = r(c, h);
    if (!h && as) {
      W2(u, e);
      const g = ep(u);
      d = g.MeasureLayout, p.visualElement = q2(o, f, u, t, g.ProjectionNode);
    }
    return s.jsxs(Kn.Provider, { value: p, children: [d && p.visualElement ? s.jsx(d, { visualElement: p.visualElement, ...u }) : null, n(o, c, K2(f, p.visualElement, l), f, h, p.visualElement)] });
  }
  i.displayName = `motion.${typeof o == "string" ? o : `create(${o.displayName ?? o.name ?? ""})`}`;
  const a = Hl(i);
  return a[G2] = o, a;
}
function Q2({ layoutId: e }) {
  const t = Me(os).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function W2(e, t) {
  const n = Me(Ua).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Dt(!1, r) : Qe(!1, r);
  }
}
function ep(e) {
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
function tp(e) {
  for (const t in e)
    an[t] = e[t], ms(t) && (an[t].isCSSVariable = !0);
}
function Ja(e, { layout: t, layoutId: n }) {
  return Ot.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!an[e] || e === "opacity");
}
const np = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, rp = Ft.length;
function sp(e, t, n) {
  let r = "", o = !0;
  for (let i = 0; i < rp; i++) {
    const a = Ft[i], c = e[a];
    if (c === void 0)
      continue;
    let l = !0;
    if (typeof c == "number" ? l = c === (a.startsWith("scale") ? 1 : 0) : l = parseFloat(c) === 0, !l || n) {
      const d = Ba(c, Ss[a]);
      if (!l) {
        o = !1;
        const u = np[a] || a;
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
      const u = Ba(d, Ss[l]);
      l.startsWith("origin") ? (c = !0, i[l] = u) : r[l] = u;
    }
  }
  if (t.transform || (a || n ? r.transform = sp(t, e.transform, n) : r.transform && (r.transform = "none")), c) {
    const { originX: l = "50%", originY: d = "50%", originZ: u = 0 } = i;
    r.transformOrigin = `${l} ${d} ${u}`;
  }
}
const Ps = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Qa(e, t, n) {
  for (const r in t)
    !Ne(t[r]) && !Ja(r, n) && (e[r] = t[r]);
}
function op({ transformTemplate: e }, t) {
  return z(() => {
    const n = Ps();
    return Is(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function ip(e, t) {
  const n = e.style || {}, r = {};
  return Qa(r, n, e), Object.assign(r, op(e, t)), r;
}
function ap(e, t) {
  const n = {}, r = ip(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const cp = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, lp = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function dp(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? cp : lp;
  e[i.offset] = Q.transform(-r);
  const a = Q.transform(t), c = Q.transform(n);
  e[i.array] = `${a} ${c}`;
}
function Wa(e, {
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
  h.transform && (p.transform = h.transform, delete h.transform), (p.transform || h.transformOrigin) && (p.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), p.transform && (p.transformBox = (u == null ? void 0 : u.transformBox) ?? "fill-box", delete h.transformBox), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), o !== void 0 && dp(h, o, i, a, !1);
}
const ec = () => ({
  ...Ps(),
  attrs: {}
}), tc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function up(e, t, n, r) {
  const o = z(() => {
    const i = ec();
    return Wa(i, t, tc(r), e.transformTemplate, e.style), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    Qa(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
const hp = [
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
function Es(e) {
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
      !!(hp.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function pp(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Es(n) ? up : ap)(r, i, a, n), d = _2(r, typeof n == "string", e), u = n !== un ? { ...d, ...l, ref: o } : {}, { children: h } = r, p = z(() => Ne(h) ? h.get() : h, [h]);
    return Qi(n, {
      ...u,
      children: p
    });
  };
}
function Eo(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Hs(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = Eo(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, i] = Eo(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function Vn(e) {
  return Ne(e) ? e.get() : e;
}
function fp({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, o) {
  return {
    latestValues: mp(n, r, o, e),
    renderState: t()
  };
}
const nc = (e) => (t, n) => {
  const r = Me(Kn), o = Me(Gn), i = () => fp(e, t, r, o);
  return n ? i() : is(i);
};
function mp(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const p in i)
    o[p] = Vn(i[p]);
  let { initial: a, animate: c } = e;
  const l = qn(e), d = Ka(e);
  t && d && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), c === void 0 && (c = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || a === !1;
  const h = u ? c : a;
  if (h && typeof h != "boolean" && !Xn(h)) {
    const p = Array.isArray(h) ? h : [h];
    for (let f = 0; f < p.length; f++) {
      const g = Hs(e, p[f]);
      if (g) {
        const { transitionEnd: j, transition: w, ...x } = g;
        for (const v in x) {
          let k = x[v];
          if (Array.isArray(k)) {
            const y = u ? k.length - 1 : 0;
            k = k[y];
          }
          k !== null && (o[v] = k);
        }
        for (const v in j)
          o[v] = j[v];
      }
    }
  }
  return o;
}
function Ds(e, t, n) {
  var i;
  const { style: r } = e, o = {};
  for (const a in r)
    (Ne(r[a]) || t.style && Ne(t.style[a]) || Ja(a, e) || ((i = n == null ? void 0 : n.getValue(a)) == null ? void 0 : i.liveStyle) !== void 0) && (o[a] = r[a]);
  return o;
}
const gp = {
  useVisualState: nc({
    scrapeMotionValuesFromProps: Ds,
    createRenderState: Ps
  })
};
function rc(e, t, n) {
  const r = Ds(e, t, n);
  for (const o in e)
    if (Ne(e[o]) || Ne(t[o])) {
      const i = Ft.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[i] = e[o];
    }
  return r;
}
const xp = {
  useVisualState: nc({
    scrapeMotionValuesFromProps: rc,
    createRenderState: ec
  })
};
function vp(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const a = {
      ...Es(r) ? xp : gp,
      preloadedFeatures: e,
      useRender: pp(o),
      createVisualElement: t,
      Component: r
    };
    return J2(a);
  };
}
function cn(e, t, n) {
  const r = e.getProps();
  return Hs(r, t, n !== void 0 ? n : r.custom, e);
}
const Or = (e) => Array.isArray(e);
function jp(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Nt(n));
}
function kp(e) {
  return Or(e) ? e[e.length - 1] || 0 : e;
}
function Lp(e, t) {
  const n = cn(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const a in i) {
    const c = kp(i[a]);
    jp(e, a, c);
  }
}
function wp(e) {
  return !!(Ne(e) && e.add);
}
function _r(e, t) {
  const n = e.getValue("willChange");
  if (wp(n))
    return n.add(t);
  if (!n && We.WillChange) {
    const r = new We.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function sc(e) {
  return e.props[Xa];
}
const yp = (e) => e !== null;
function Cp(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(yp), i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return o[i];
}
const Mp = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, bp = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Sp = {
  type: "keyframes",
  duration: 0.8
}, Np = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Vp = (e, { keyframes: t }) => t.length > 2 ? Sp : Ot.has(e) ? e.startsWith("scale") ? bp(t[1]) : Mp : Np;
function Tp({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: c, from: l, elapsed: d, ...u }) {
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
  Tp(c) || Object.assign(u, Vp(e, u)), u.duration && (u.duration = /* @__PURE__ */ Ye(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Ye(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let h = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (h = !0)), (We.instantAnimations || We.skipAnimations) && (h = !0, u.duration = 0, u.delay = 0), u.allowFlatten = !c.type && !c.ease, h && !i && t.get() !== void 0) {
    const p = Cp(u.keyframes, c);
    if (p !== void 0) {
      he.update(() => {
        u.onUpdate(p), u.onComplete();
      });
      return;
    }
  }
  return c.isSync ? new ys(u) : new c2(u);
};
function $p({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function oc(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...c } = t;
  r && (i = r);
  const l = [], d = o && e.animationState && e.animationState.getState()[o];
  for (const u in c) {
    const h = e.getValue(u, e.latestValues[u] ?? null), p = c[u];
    if (p === void 0 || d && $p(d, u))
      continue;
    const f = {
      delay: n,
      ...bs(i || {}, u)
    }, g = h.get();
    if (g !== void 0 && !h.isAnimating && !Array.isArray(p) && p === g && !f.velocity)
      continue;
    let j = !1;
    if (window.MotionHandoffAnimation) {
      const x = sc(e);
      if (x) {
        const v = window.MotionHandoffAnimation(x, u, he);
        v !== null && (f.startTime = v, j = !0);
      }
    }
    _r(e, u), h.start(Bs(u, h, p, e.shouldReduceMotion && Ia.has(u) ? { type: !1 } : f, e, j));
    const w = h.animation;
    w && l.push(w);
  }
  return a && Promise.all(l).then(() => {
    he.update(() => {
      a && Lp(e, a);
    });
  }), l;
}
function Yr(e, t, n = {}) {
  var l;
  const r = cn(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(oc(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (d = 0) => {
    const { delayChildren: u = 0, staggerChildren: h, staggerDirection: p } = o;
    return Ap(e, t, d, u, h, p, n);
  } : () => Promise.resolve(), { when: c } = o;
  if (c) {
    const [d, u] = c === "beforeChildren" ? [i, a] : [a, i];
    return d().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function Ap(e, t, n = 0, r = 0, o = 0, i = 1, a) {
  const c = [], l = e.variantChildren.size, d = (l - 1) * o, u = typeof r == "function", h = u ? (p) => r(p, l) : (
    // Support deprecated staggerChildren
    i === 1 ? (p = 0) => p * o : (p = 0) => d - p * o
  );
  return Array.from(e.variantChildren).sort(Rp).forEach((p, f) => {
    p.notify("AnimationStart", t), c.push(Yr(p, t, {
      ...a,
      delay: n + (u ? 0 : r) + h(f)
    }).then(() => p.notify("AnimationComplete", t)));
  }), Promise.all(c);
}
function Rp(e, t) {
  return e.sortNodePosition(t);
}
function Ip(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Yr(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Yr(e, t, n);
  else {
    const o = typeof t == "function" ? cn(e, t, n.custom) : t;
    r = Promise.all(oc(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function ic(e, t) {
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
const Pp = As.length;
function ac(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? ac(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Pp; n++) {
    const r = As[n], o = e.props[r];
    (on(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const Ep = [...$s].reverse(), Hp = $s.length;
function Dp(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Ip(e, n, r)));
}
function Bp(e) {
  let t = Dp(e), n = Ho(), r = !0;
  const o = (l) => (d, u) => {
    var p;
    const h = cn(e, u, l === "exit" ? (p = e.presenceContext) == null ? void 0 : p.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: g, ...j } = h;
      d = { ...d, ...j, ...g };
    }
    return d;
  };
  function i(l) {
    t = l(e);
  }
  function a(l) {
    const { props: d } = e, u = ac(e.parent) || {}, h = [], p = /* @__PURE__ */ new Set();
    let f = {}, g = 1 / 0;
    for (let w = 0; w < Hp; w++) {
      const x = Ep[w], v = n[x], k = d[x] !== void 0 ? d[x] : u[x], y = on(k), b = x === l ? v.isActive : null;
      b === !1 && (g = w);
      let m = k === u[x] && k !== d[x] && y;
      if (m && r && e.manuallyAnimateOnMount && (m = !1), v.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && b === null || // If we didn't and don't have any defined prop for this animation type
      !k && !v.prevProp || // Or if the prop doesn't define an animation
      Xn(k) || typeof k == "boolean")
        continue;
      const L = Fp(v.prevProp, k);
      let C = L || // If we're making this variant active, we want to always make it active
      x === l && v.isActive && !m && y || // If we removed a higher-priority variant (i is in reverse order)
      w > g && y, T = !1;
      const N = Array.isArray(k) ? k : [k];
      let B = N.reduce(o(x), {});
      b === !1 && (B = {});
      const { prevResolvedValues: S = {} } = v, A = {
        ...S,
        ...B
      }, $ = (D) => {
        C = !0, p.has(D) && (T = !0, p.delete(D)), v.needsAnimating[D] = !0;
        const K = e.getValue(D);
        K && (K.liveStyle = !1);
      };
      for (const D in A) {
        const K = B[D], V = S[D];
        if (f.hasOwnProperty(D))
          continue;
        let P = !1;
        Or(K) && Or(V) ? P = !ic(K, V) : P = K !== V, P ? K != null ? $(D) : p.add(D) : K !== void 0 && p.has(D) ? $(D) : v.protectedKeys[D] = !0;
      }
      v.prevProp = k, v.prevResolvedValues = B, v.isActive && (f = { ...f, ...B }), r && e.blockInitialAnimation && (C = !1), C && (!(m && L) || T) && h.push(...N.map((D) => ({
        animation: D,
        options: { type: x }
      })));
    }
    if (p.size) {
      const w = {};
      if (typeof d.initial != "boolean") {
        const x = cn(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        x && x.transition && (w.transition = x.transition);
      }
      p.forEach((x) => {
        const v = e.getBaseTarget(x), k = e.getValue(x);
        k && (k.liveStyle = !0), w[x] = v ?? null;
      }), h.push({ animation: w });
    }
    let j = !!h.length;
    return r && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (j = !1), r = !1, j ? t(h) : Promise.resolve();
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
function Fp(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ic(t, e) : !1;
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
class Op extends st {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Bp(t));
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
let _p = 0;
class Yp extends st {
  constructor() {
    super(...arguments), this.id = _p++;
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
const Zp = {
  animation: {
    Feature: Op
  },
  exit: {
    Feature: Yp
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
const Up = (e) => (t) => Vs(t) && e(t, mn(t));
function Qt(e, t, n, r) {
  return ln(e, t, Up(n), r);
}
function cc({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Gp({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Kp(e, t) {
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
const lc = 1e-4, Xp = 1 - lc, qp = 1 + lc, dc = 0.01, zp = 0 - dc, Jp = 0 + dc;
function $e(e) {
  return e.max - e.min;
}
function Qp(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Do(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = fe(t.min, t.max, e.origin), e.scale = $e(n) / $e(t), e.translate = fe(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Xp && e.scale <= qp || isNaN(e.scale)) && (e.scale = 1), (e.translate >= zp && e.translate <= Jp || isNaN(e.translate)) && (e.translate = 0);
}
function Wt(e, t, n, r) {
  Do(e.x, t.x, n.x, r ? r.originX : void 0), Do(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Bo(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + $e(t);
}
function Wp(e, t, n) {
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
  return Zr(e) || uc(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function uc(e) {
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
function hc(e, { x: t, y: n }) {
  Ur(e.x, t.translate, t.scale, t.originPoint), Ur(e.y, n.translate, n.scale, n.originPoint);
}
const Uo = 0.999999999999, Go = 1.0000000000001;
function ef(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let c = 0; c < o; c++) {
    i = n[c], a = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && St(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, hc(e, a)), r && at(i.latestValues) && St(e, i.latestValues));
  }
  t.x < Go && t.x > Uo && (t.x = 1), t.y < Go && t.y > Uo && (t.y = 1);
}
function bt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Ko(e, t, n, r, o = 0.5) {
  const i = fe(e.min, e.max, o);
  Ur(e, t, n, i, r);
}
function St(e, t) {
  Ko(e.x, t.x, t.scaleX, t.scale, t.originX), Ko(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function pc(e, t) {
  return cc(Kp(e.getBoundingClientRect(), t));
}
function tf(e, t, n) {
  const r = pc(e, n), { scroll: o } = t;
  return o && (bt(r.x, o.offset.x), bt(r.y, o.offset.y)), r;
}
const fc = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Xo = (e, t) => Math.abs(e - t);
function nf(e, t) {
  const n = Xo(e.x, t.x), r = Xo(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class mc {
  constructor(t, n, { transformPagePoint: r, contextWindow: o = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const p = vr(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, g = nf(p.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!f && !g)
        return;
      const { point: j } = p, { timestamp: w } = ye;
      this.history.push({ ...j, timestamp: w });
      const { onStart: x, onMove: v } = this.handlers;
      f || (x && x(this.lastMoveEvent, p), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, p);
    }, this.handlePointerMove = (p, f) => {
      this.lastMoveEvent = p, this.lastMoveEventInfo = xr(f, this.transformPagePoint), he.update(this.updatePoint, !0);
    }, this.handlePointerUp = (p, f) => {
      this.end();
      const { onEnd: g, onSessionEnd: j, resumeAnimation: w } = this.handlers;
      if (this.dragSnapToOrigin && w && w(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = vr(p.type === "pointercancel" ? this.lastMoveEventInfo : xr(f, this.transformPagePoint), this.history);
      this.startEvent && g && g(p, x), j && j(p, x);
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
    delta: qo(e, gc(t)),
    offset: qo(e, rf(t)),
    velocity: sf(t, 0.1)
  };
}
function rf(e) {
  return e[0];
}
function gc(e) {
  return e[e.length - 1];
}
function sf(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = gc(e);
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
function of(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? fe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)), e;
}
function zo(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function af(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: zo(e.x, n, o),
    y: zo(e.y, t, r)
  };
}
function Jo(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function cf(e, t) {
  return {
    x: Jo(e.x, t.x),
    y: Jo(e.y, t.y)
  };
}
function lf(e, t) {
  let n = 0.5;
  const r = $e(e), o = $e(t);
  return o > r ? n = /* @__PURE__ */ nn(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ nn(e.min, e.max - o, t.min)), Je(0, 1, n);
}
function df(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Gr = 0.35;
function uf(e = Gr) {
  return e === !1 ? e = 0 : e === !0 && (e = Gr), {
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
const hf = /* @__PURE__ */ new WeakMap();
class pf {
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
      const { drag: f, dragPropagation: g, onDragStart: j } = this.getProps();
      if (f && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = M2(f), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = p, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), De((x) => {
        let v = this.getAxisMotionValue(x).get() || 0;
        if (Ke.test(v)) {
          const { projection: k } = this.visualElement;
          if (k && k.layout) {
            const y = k.layout.layoutBox[x];
            y && (v = $e(y) * (parseFloat(v) / 100));
          }
        }
        this.originPoint[x] = v;
      }), j && he.postRender(() => j(h, p)), _r(this.visualElement, "transform");
      const { animationState: w } = this.visualElement;
      w && w.setActive("whileDrag", !0);
    }, c = (h, p) => {
      this.latestPointerEvent = h, this.latestPanInfo = p;
      const { dragPropagation: f, dragDirectionLock: g, onDirectionLock: j, onDrag: w } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: x } = p;
      if (g && this.currentDirection === null) {
        this.currentDirection = ff(x), this.currentDirection !== null && j && j(this.currentDirection);
        return;
      }
      this.updateAxis("x", p.point, x), this.updateAxis("y", p.point, x), this.visualElement.render(), w && w(h, p);
    }, l = (h, p) => {
      this.latestPointerEvent = h, this.latestPanInfo = p, this.stop(h, p), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, d = () => De((h) => {
      var p;
      return this.getAnimationState(h) === "paused" && ((p = this.getAxisMotionValue(h).animation) == null ? void 0 : p.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new mc(t, {
      onSessionStart: i,
      onStart: a,
      onMove: c,
      onSessionEnd: l,
      resumeAnimation: d
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: r,
      contextWindow: fc(this.visualElement)
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
    this.constraints && this.constraints[t] && (a = of(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, o = this.constraints;
    t && Ct(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = af(r.layoutBox, t) : this.constraints = !1, this.elastic = uf(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && De((a) => {
      this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = df(r.layoutBox[a], this.constraints[a]));
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
    const i = tf(r, o.root, this.visualElement.getTransformPagePoint());
    let a = cf(o.layout.layoutBox, i);
    if (n) {
      const c = n(Gp(a));
      this.hasMutatedConstraints = !!c, c && (a = cc(c));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: c } = this.getProps(), l = this.constraints || {}, d = De((u) => {
      if (!wn(u, n, this.currentDirection))
        return;
      let h = l && l[u] || {};
      a && (h = { min: 0, max: 0 });
      const p = o ? 200 : 1e6, f = o ? 40 : 1e7, g = {
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
      return this.startAxisValueAnimation(u, g);
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
        o[a] = lf({ min: l, max: l }, this.constraints[a]);
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
    hf.set(this.visualElement, this);
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
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Gr, dragMomentum: c = !0 } = t;
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
function ff(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class mf extends st {
  constructor(t) {
    super(t), this.removeGroupControls = Be, this.removeListeners = Be, this.controls = new pf(t);
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
class gf extends st {
  constructor() {
    super(...arguments), this.removePointerDownListener = Be;
  }
  onPointerDown(t) {
    this.session = new mc(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: fc(this.node)
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
      if (Q.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = ti(e, t.target.x), r = ti(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, xf = {
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
class vf extends Dl {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    tp(jf), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), ni && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
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
    t && (t.root.didUpdate(), Ns.postRender(() => {
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
function xc(e) {
  const [t, n] = Za(), r = Me(os);
  return s.jsx(vf, { ...e, layoutGroup: r, switchLayoutGroup: Me(qa), isPresent: t, safeToRemove: n });
}
const jf = {
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
  boxShadow: xf
};
function kf(e, t, n) {
  const r = Ne(e) ? e : Nt(e);
  return r.start(Bs("", r, t, n)), r.animation;
}
const Lf = (e, t) => e.depth - t.depth;
class wf {
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
    this.isDirty && this.children.sort(Lf), this.isDirty = !1, this.children.forEach(t);
  }
}
function yf(e, t) {
  const n = Ie.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (nt(r), e(i - t));
  };
  return he.setup(r, !0), () => nt(r);
}
const vc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Cf = vc.length, ri = (e) => typeof e == "string" ? parseFloat(e) : e, si = (e) => typeof e == "number" || Q.test(e);
function Mf(e, t, n, r, o, i) {
  o ? (e.opacity = fe(0, n.opacity ?? 1, bf(r)), e.opacityExit = fe(t.opacity ?? 1, 0, Sf(r))) : i && (e.opacity = fe(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let a = 0; a < Cf; a++) {
    const c = `border${vc[a]}Radius`;
    let l = oi(t, c), d = oi(n, c);
    if (l === void 0 && d === void 0)
      continue;
    l || (l = 0), d || (d = 0), l === 0 || d === 0 || si(l) === si(d) ? (e[c] = Math.max(fe(ri(l), ri(d), r), 0), (Ke.test(d) || Ke.test(l)) && (e[c] += "%")) : e[c] = d;
  }
  (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r));
}
function oi(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const bf = /* @__PURE__ */ jc(0, 0.5, ua), Sf = /* @__PURE__ */ jc(0.5, 0.95, Be);
function jc(e, t, n) {
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
function Nf(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (Ke.test(t) && (t = parseFloat(t), t = fe(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let c = fe(i.min, i.max, r);
  e === i && (c -= t), e.min = ci(e.min, t, n, c, o), e.max = ci(e.max, t, n, c, o);
}
function li(e, t, [n, r, o], i, a) {
  Nf(e, t[n], t[r], t[o], t.scale, i, a);
}
const Vf = ["x", "scaleX", "originX"], Tf = ["y", "scaleY", "originY"];
function di(e, t, n, r) {
  li(e.x, t, Vf, n ? n.x : void 0, r ? r.x : void 0), li(e.y, t, Tf, n ? n.y : void 0, r ? r.y : void 0);
}
function ui(e) {
  return e.translate === 0 && e.scale === 1;
}
function kc(e) {
  return ui(e.x) && ui(e.y);
}
function hi(e, t) {
  return e.min === t.min && e.max === t.max;
}
function $f(e, t) {
  return hi(e.x, t.x) && hi(e.y, t.y);
}
function pi(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Lc(e, t) {
  return pi(e.x, t.x) && pi(e.y, t.y);
}
function fi(e) {
  return $e(e.x) / $e(e.y);
}
function mi(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Af {
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
function Rf(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y, a = (n == null ? void 0 : n.z) || 0;
  if ((o || i || a) && (r = `translate3d(${o}px, ${i}px, ${a}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: d, rotate: u, rotateX: h, rotateY: p, skewX: f, skewY: g } = n;
    d && (r = `perspective(${d}px) ${r}`), u && (r += `rotate(${u}deg) `), h && (r += `rotateX(${h}deg) `), p && (r += `rotateY(${p}deg) `), f && (r += `skewX(${f}deg) `), g && (r += `skewY(${g}deg) `);
  }
  const c = e.x.scale * t.x, l = e.y.scale * t.y;
  return (c !== 1 || l !== 1) && (r += `scale(${c}, ${l})`), r || "none";
}
const jr = ["", "X", "Y", "Z"], If = 1e3;
let Pf = 0;
function kr(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function wc(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = sc(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", he, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && wc(r);
}
function yc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, c = t == null ? void 0 : t()) {
      this.id = Pf++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Df), this.nodes.forEach(_f), this.nodes.forEach(Yf), this.nodes.forEach(Bf);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = c ? c.root || c : this, this.path = c ? [...c.path, c] : [], this.parent = c, this.depth = c ? c.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new wf());
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
      this.isSVG = Ya(a) && !$2(a), this.instance = a;
      const { layoutId: c, layout: l, visualElement: d } = this.options;
      if (d && !d.current && d.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || c) && (this.isLayoutDirty = !0), e) {
        let u, h = 0;
        const p = () => this.root.updateBlockedByResize = !1;
        he.read(() => {
          h = window.innerWidth;
        }), e(a, () => {
          const f = window.innerWidth;
          f !== h && (h = f, this.root.updateBlockedByResize = !0, u && u(), u = yf(p, 250), Tn.hasAnimatedSinceResize && (Tn.hasAnimatedSinceResize = !1, this.nodes.forEach(vi)));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: h, hasRelativeLayoutChanged: p, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || d.getDefaultTransition() || Xf, { onLayoutAnimationStart: j, onLayoutAnimationComplete: w } = d.getProps(), x = !this.targetLayout || !Lc(this.targetLayout, f), v = !h && p;
        if (this.options.layoutRoot || this.resumeFrom || v || h && (x || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const k = {
            ...bs(g, "layout"),
            onPlay: j,
            onComplete: w
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k), this.setAnimationOrigin(u, v);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Zf), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && wc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Of), this.nodes.forEach(Ef), this.nodes.forEach(Hf)) : this.nodes.forEach(xi), this.clearAllSnapshots();
      const c = Ie.now();
      ye.delta = Je(0, 1e3 / 60, c - ye.timestamp), ye.timestamp = c, ye.isProcessing = !0, dr.update.process(ye), dr.preRender.process(ye), dr.render.process(ye), ye.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ns.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ff), this.sharedNodes.forEach(Uf);
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
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, c = this.projectionDelta && !kc(this.projectionDelta), l = this.getTransformTemplate(), d = l ? l(this.latestValues, "") : void 0, u = d !== this.prevTransformTemplateValue;
      a && this.instance && (c || at(this.latestValues) || u) && (o(this.instance, d), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const c = this.measurePageBox();
      let l = this.removeElementScroll(c);
      return a && (l = this.removeTransform(l)), qf(l), {
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
      if (!(((d = this.scroll) == null ? void 0 : d.wasRoot) || this.path.some(zf))) {
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
        !c && u.options.layoutScroll && u.scroll && u !== u.root && St(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), at(u.latestValues) && St(l, u.latestValues);
      }
      return at(this.latestValues) && St(l, this.latestValues), l;
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
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = xe(), this.targetWithTransforms = xe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Wp(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : He(this.target, this.layout.layoutBox), hc(this.target, this.targetDelta)) : He(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = xe(), this.relativeTargetOrigin = xe(), en(this.relativeTargetOrigin, this.target, f.target), He(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Zr(this.parent.latestValues) || uc(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var g;
      const a = this.getLead(), c = !!this.resumingFrom || this !== a;
      let l = !0;
      if ((this.isProjectionDirty || (g = this.parent) != null && g.isProjectionDirty) && (l = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === ye.timestamp && (l = !1), l)
        return;
      const { layout: d, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || u))
        return;
      He(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, p = this.treeScale.y;
      ef(this.layoutCorrected, this.treeScale, this.path, c), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = xe());
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
      const p = xe(), f = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, j = f !== g, w = this.getStack(), x = !w || w.members.length <= 1, v = !!(j && !x && this.options.crossfade === !0 && !this.path.some(Kf));
      this.animationProgress = 0;
      let k;
      this.mixTargetDelta = (y) => {
        const b = y / 1e3;
        ji(h.x, a.x, b), ji(h.y, a.y, b), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (en(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Gf(this.relativeTarget, this.relativeTargetOrigin, p, b), k && $f(this.relativeTarget, k) && (this.isProjectionDirty = !1), k || (k = xe()), He(k, this.relativeTarget)), j && (this.animationValues = u, Mf(u, d, this.latestValues, b, v, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      var c, l, d;
      this.notifyListeners("animationStart"), (c = this.currentAnimation) == null || c.stop(), (d = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || d.stop(), this.pendingAnimation && (nt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = he.update(() => {
        Tn.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Nt(0)), this.currentAnimation = kf(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(If), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: c, target: l, layout: d, latestValues: u } = a;
      if (!(!c || !l || !d)) {
        if (this !== a && this.layout && d && Cc(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
          l = this.target || xe();
          const h = $e(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + h;
          const p = $e(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + p;
        }
        He(c, l), St(c, u), Wt(this.projectionDeltaWithTransform, this.layoutCorrected, c, u);
      }
    }
    registerSharedNode(a, c) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new Af()), this.sharedNodes.get(a).add(c);
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
      let h = Rf(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (h = l(u, h)), a.transform = h;
      const { x: p, y: f } = this.projectionDelta;
      a.transformOrigin = `${p.origin * 100}% ${f.origin * 100}% 0`, d.animationValues ? a.opacity = d === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : a.opacity = d === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const g in an) {
        if (u[g] === void 0)
          continue;
        const { correct: j, applyTo: w, isCSSVariable: x } = an[g], v = h === "none" ? u[g] : j(u[g], d);
        if (w) {
          const k = w.length;
          for (let y = 0; y < k; y++)
            a[w[y]] = v;
        } else
          x ? this.options.visualElement.renderState.vars[g] = v : a[g] = v;
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
function Ef(e) {
  e.updateLayout();
}
function Hf(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
    i === "size" ? De((h) => {
      const p = a ? t.measuredBox[h] : t.layoutBox[h], f = $e(p);
      p.min = r[h].min, p.max = p.min + f;
    }) : Cc(i, t.layoutBox, r) && De((h) => {
      const p = a ? t.measuredBox[h] : t.layoutBox[h], f = $e(r[h]);
      p.max = p.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[h].max = e.relativeTarget[h].min + f);
    });
    const c = Mt();
    Wt(c, r, t.layoutBox);
    const l = Mt();
    a ? Wt(l, e.applyTransform(o, !0), t.measuredBox) : Wt(l, r, t.layoutBox);
    const d = !kc(c);
    let u = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: p, layout: f } = h;
        if (p && f) {
          const g = xe();
          en(g, t.layoutBox, p.layoutBox);
          const j = xe();
          en(j, r, f.layoutBox), Lc(g, j) || (u = !0), h.options.layoutRoot && (e.relativeTarget = j, e.relativeTargetOrigin = g, e.relativeParent = h);
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
function Df(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Bf(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Ff(e) {
  e.clearSnapshot();
}
function gi(e) {
  e.clearMeasurements();
}
function xi(e) {
  e.isLayoutDirty = !1;
}
function Of(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function vi(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function _f(e) {
  e.resolveTargetDelta();
}
function Yf(e) {
  e.calcProjection();
}
function Zf(e) {
  e.resetSkewAndRotation();
}
function Uf(e) {
  e.removeLeadSnapshot();
}
function ji(e, t, n) {
  e.translate = fe(t.translate, 0, n), e.scale = fe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ki(e, t, n, r) {
  e.min = fe(t.min, n.min, r), e.max = fe(t.max, n.max, r);
}
function Gf(e, t, n, r) {
  ki(e.x, t.x, n.x, r), ki(e.y, t.y, n.y, r);
}
function Kf(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Xf = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Li = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), wi = Li("applewebkit/") && !Li("chrome/") ? Math.round : Be;
function yi(e) {
  e.min = wi(e.min), e.max = wi(e.max);
}
function qf(e) {
  yi(e.x), yi(e.y);
}
function Cc(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Qp(fi(t), fi(n), 0.2);
}
function zf(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Jf = yc({
  attachResizeListener: (e, t) => ln(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Lr = {
  current: void 0
}, Mc = yc({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Lr.current) {
      const e = new Jf({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Lr.current = e;
    }
    return Lr.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Qf = {
  pan: {
    Feature: gf
  },
  drag: {
    Feature: mf,
    ProjectionNode: Mc,
    MeasureLayout: xc
  }
};
function Ci(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, i = r[o];
  i && he.postRender(() => i(t, mn(t)));
}
class Wf extends st {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = b2(t, (n, r) => (Ci(this.node, r, "Start"), (o) => Ci(this.node, o, "End"))));
  }
  unmount() {
  }
}
class e0 extends st {
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
class t0 extends st {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = T2(t, (n, r) => (Mi(this.node, r, "Start"), (o, { success: i }) => Mi(this.node, o, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Kr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), n0 = (e) => {
  const t = Kr.get(e.target);
  t && t(e);
}, r0 = (e) => {
  e.forEach(n0);
};
function s0({ root: e, ...t }) {
  const n = e || document;
  wr.has(n) || wr.set(n, {});
  const r = wr.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(r0, { root: e, ...t })), r[o];
}
function o0(e, t, n) {
  const r = s0(t);
  return Kr.set(e, n), r.observe(e), () => {
    Kr.delete(e), r.unobserve(e);
  };
}
const i0 = {
  some: 0,
  all: 1
};
class a0 extends st {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : i0[o]
    }, c = (l) => {
      const { isIntersecting: d } = l;
      if (this.isInView === d || (this.isInView = d, i && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), p = d ? u : h;
      p && p(l);
    };
    return o0(this.node.current, a, c);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(c0(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function c0({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const l0 = {
  inView: {
    Feature: a0
  },
  tap: {
    Feature: t0
  },
  focus: {
    Feature: e0
  },
  hover: {
    Feature: Wf
  }
}, d0 = {
  layout: {
    ProjectionNode: Mc,
    MeasureLayout: xc
  }
}, Xr = { current: null }, bc = { current: !1 };
function u0() {
  if (bc.current = !0, !!as)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Xr.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Xr.current = !1;
}
const h0 = /* @__PURE__ */ new WeakMap();
function p0(e, t, n) {
  for (const r in t) {
    const o = t[r], i = n[r];
    if (Ne(o))
      e.addValue(r, o);
    else if (Ne(i))
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
class f0 {
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
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = d, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = c, this.blockInitialAnimation = !!i, this.isControllingVariants = qn(n), this.isVariantNode = Ka(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in h) {
      const f = h[p];
      l[p] !== void 0 && Ne(f) && f.set(l[p], !1);
    }
  }
  mount(t) {
    this.current = t, h0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), bc.current || u0(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Xr.current, process.env.NODE_ENV !== "production" && hs(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
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
    this.prevMotionValues = p0(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return r != null && (typeof r == "string" && (ta(r) || ra(r)) ? r = parseFloat(r) : !R2(r) && rt.test(n) && (r = Da(t, n)), this.setBaseTarget(t, Ne(r) ? r.get() : r)), Ne(r) ? r.get() : r;
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
    return o !== void 0 && !Ne(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new us()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Sc extends f0 {
  constructor() {
    super(...arguments), this.KeyframeResolver = L2;
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
    Ne(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Nc(e, { style: t, vars: n }, r, o) {
  const i = e.style;
  let a;
  for (a in t)
    i[a] = t[a];
  o == null || o.applyProjectionStyles(i, r);
  for (a in n)
    i.setProperty(a, n[a]);
}
function m0(e) {
  return window.getComputedStyle(e);
}
class g0 extends Sc {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Nc;
  }
  readValueFromInstance(t, n) {
    var r;
    if (Ot.has(n))
      return (r = this.projection) != null && r.isProjecting ? Pr(n) : B4(t, n);
    {
      const o = m0(t), i = (ms(n) ? o.getPropertyValue(n) : o[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return pc(t, n);
  }
  build(t, n, r) {
    Is(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ds(t, n, r);
  }
}
const Vc = /* @__PURE__ */ new Set([
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
function x0(e, t, n, r) {
  Nc(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Vc.has(o) ? o : Rs(o), t.attrs[o]);
}
class v0 extends Sc {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = xe;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ot.has(n)) {
      const r = Ha(n);
      return r && r.default || 0;
    }
    return n = Vc.has(n) ? n : Rs(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return rc(t, n, r);
  }
  build(t, n, r) {
    Wa(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, o) {
    x0(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = tc(t.tagName), super.mount(t);
  }
}
const j0 = (e, t) => Es(e) ? new v0(t) : new g0(t, {
  allowProjection: e !== un
}), k0 = /* @__PURE__ */ vp({
  ...Zp,
  ...l0,
  ...Qf,
  ...d0
}, j0), Ce = /* @__PURE__ */ Y2(k0), Ae = ({
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
  const [f, g] = O(e), [j, w] = O({ top: 0, left: 0 }), [x, v] = O({ width: 0, height: 0 }), [k, y] = O(r), b = ee(null), m = ee(null);
  X(() => {
    e !== void 0 && g(e);
  }, [e]), X(() => {
    c == null || c(f);
  }, [f, c]);
  const L = 8, C = U(() => {
    if (!b.current || !i || x.width === 0 || x.height === 0) return;
    const I = b.current.getBoundingClientRect(), F = window.innerWidth, D = window.innerHeight;
    let K = 0, V = 0, P = r;
    const R = (G) => {
      switch (G) {
        case "top":
          return {
            top: I.top - I.height - L,
            left: I.left + (I.width / 2 - x.width / 2),
            placement: "top"
          };
        case "bottom":
          return {
            top: I.top + I.height + L,
            left: I.left + (I.width / 2 - x.width / 2),
            placement: "bottom"
          };
        case "left":
          return {
            top: I.top + (I.height / 2 - x.height / 2),
            left: I.left - x.width - L,
            placement: "left"
          };
        case "right":
          return {
            top: I.top + (I.height / 2 - x.height / 2),
            left: I.right + L,
            placement: "right"
          };
        default:
          return {
            top: I.bottom + L,
            left: I.left + I.width / 2 - x.width / 2,
            placement: "bottom"
          };
      }
    };
    let E = R(P);
    K = E.top, V = E.left, P = E.placement, (() => {
      if (V < L && (V = L), V + x.width > F - L && (V = F - x.width - L), K < L) {
        if (P === "top") {
          const G = R("bottom");
          G.top + x.height <= D - L ? (K = G.top, V = G.left, P = "bottom") : K = L;
        }
      } else if (K + x.height > D - L && P === "bottom") {
        const G = R("top");
        G.top >= L ? (K = G.top, V = G.left, P = "top") : K = D - x.height - L;
      }
      if ((V < L || V + x.width > F - L) && (P === "top" || P === "bottom")) {
        const G = R("left");
        if (G.left >= L)
          K = G.top, V = G.left, P = "left";
        else {
          const _ = R("right");
          _.left + x.width <= F - L && (K = _.top, V = _.left, P = "right");
        }
      }
    })(), w({ top: K, left: V }), y(P);
  }, [r, i, x]);
  X(() => {
    if (!i) return;
    const I = () => {
      C();
    }, F = () => {
      C();
    };
    return window.addEventListener("resize", I), window.addEventListener("scroll", F, !0), () => {
      window.removeEventListener("resize", I), window.removeEventListener("scroll", F, !0);
    };
  }, [C, i]), X(() => {
    if (m.current && f && i) {
      const I = new ResizeObserver((F) => {
        for (const D of F) {
          const { width: K, height: V } = D.target.getBoundingClientRect();
          v({ width: K, height: V });
        }
      });
      return I.observe(m.current), () => {
        I.disconnect();
      };
    }
  }, [f, i]), X(() => {
    f && i && x.width > 0 && x.height > 0 && C();
  }, [f, i, x, C]), X(() => {
    if (a === "click" && f) {
      const I = (F) => {
        b.current && !b.current.contains(F.target) && g(!1);
      };
      return document.addEventListener("mousedown", I), () => {
        document.removeEventListener("mousedown", I);
      };
    }
  }, [a, f]);
  const T = () => {
    a === "hover" && e === void 0 && g(!0);
  }, N = () => {
    a === "hover" && e === void 0 && g(!1);
  }, B = () => {
    a === "click" && e === void 0 && g(!f);
  };
  if (!t) return /* @__PURE__ */ s.jsx(s.Fragment, { children: p });
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
    if (!b.current || !i || x.width === 0 || x.height === 0) return {};
    const I = b.current.getBoundingClientRect(), F = 12, D = I.left + I.width / 2, K = I.top + I.height / 2, V = j.left, P = j.top, R = D - V, E = K - P, Y = (G, _, J) => _ >= 0 && _ <= J ? Math.max(F, Math.min(J - F, _)) : _ < 0 ? F : J - F;
    switch (k) {
      case "top":
        return {
          left: `${Y(!0, R, x.width) / x.width * 100}%`,
          top: "100%",
          transform: "translate(-50%,-50%) rotate(45deg)"
        };
      case "bottom":
        return {
          left: `${Y(!0, R, x.width) / x.width * 100}%`,
          top: "0",
          transform: "translate(-50%,-50%) rotate(-135deg)"
        };
      case "left":
        return {
          left: "100%",
          top: `${Y(!1, E, x.height) / x.height * 100}%`,
          transform: "translate(-50%,-50%) rotate(-45deg)"
        };
      case "right":
        return {
          left: "0",
          top: `${Y(!1, E, x.height) / x.height * 100}%`,
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
      ref: m,
      className: `land-pop ${f ? "show" : ""} ${o ? "hide-arrow" : ""} ${n} ${d ?? ""}`,
      style: {
        position: i ? "fixed" : "absolute",
        ...i ? {
          top: j.top,
          left: j.left
        } : S(),
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
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: b,
      className: `land-pop-target ${h ?? ""}`,
      style: u,
      onMouseEnter: T,
      onMouseLeave: N,
      onClick: B,
      children: [
        p,
        $
      ]
    }
  );
}, L0 = ({
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
  className: g = ""
}) => {
  const j = () => ({
    default: "var(--color-blue-",
    primary: "var(--color-primary-",
    success: "var(--color-green-",
    danger: "var(--color-red-",
    warning: "var(--color-orange-"
  })[n], w = (k) => {
    if (o) {
      k.preventDefault();
      return;
    }
    p == null || p(k);
  }, x = (k, y) => {
    if (!k) return null;
    const b = typeof k == "boolean" ? t === "_blank" ? /* @__PURE__ */ s.jsx(q, { name: "share", size: 16 }) : /* @__PURE__ */ s.jsx(q, { name: "link", size: 16 }) : k;
    return /* @__PURE__ */ s.jsx("span", { className: `land-link-${y}-icon`, children: b });
  }, v = (k) => {
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
      className: `land-link hover-pop ${n} ${o ? "disabled" : ""} ${a ? "hoverUnderline" : ""} ${i ? "underline" : ""} ${g}`,
      style: {
        "--land-link-color": `${j()}6)`,
        "--land-link-hover-color": `${j()}7)`,
        "--land-link-active-color": `${j()}8)`,
        "--land-link-disabled-color": `${j()}3)`,
        ...f
      },
      onClick: r ? v : w,
      "aria-disabled": o,
      children: [
        x(d, "prefix"),
        h,
        x(u, "suffix"),
        c && /* @__PURE__ */ s.jsx(Ae, { content: c, ...l })
      ]
    }
  );
};
dn.LinkWave = L0;
const w0 = ({
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
), y0 = ({
  type: e = "default",
  direction: t = "row",
  title: n,
  link: r,
  onLinkClick: o,
  noBg: i,
  className: a,
  style: c
}) => {
  const l = z(() => t === "row" ? 16 : 24, [t]), d = z(() => {
    if (e === "fail") return "var(--color-red-";
    if (e === "default") return "";
    if (e === "warn") return "var(--color-orange-";
    if (e === "error") return "var(--color-red-";
    if (e === "success") return "var(--color-green-";
    if (e === "loading") return "";
  }, [e]);
  return /* @__PURE__ */ s.jsxs("div", { className: `land-alert ${t} ${d} ${i ? "no-bg" : ""} ${a}`, style: c, children: [
    e === "fail" && /* @__PURE__ */ s.jsx(q, { name: "error-fill", size: l, color: d + "6)" }),
    e === "default" && /* @__PURE__ */ s.jsx(
      q,
      {
        name: "attention-fill",
        size: l,
        color: "var(--color-primary-6)"
      }
    ),
    e === "warn" && /* @__PURE__ */ s.jsx(
      q,
      {
        name: "attention-fill",
        size: l,
        color: d + "6)"
      }
    ),
    e === "error" && /* @__PURE__ */ s.jsx(q, { name: "attention-fill", size: l, color: d + "6)" }),
    e === "success" && /* @__PURE__ */ s.jsx(q, { name: "check-fill", size: l, color: d + "6)" }),
    e === "loading" && /* @__PURE__ */ s.jsx(w0, { size: l, color: "var(--color-primary-6)" }),
    /* @__PURE__ */ s.jsxs("div", { className: "land-alert-title", children: [
      n,
      r && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        "，",
        /* @__PURE__ */ s.jsx(dn, { onClick: o, children: r })
      ] })
    ] })
  ] });
}, hm = ({
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
  const d = ee(null), [u, h] = O(""), [p, f] = O(0), g = U(() => l(), [l]), j = U((C) => C === window ? window.pageYOffset || document.documentElement.scrollTop : C.scrollTop, []), w = U((C, T) => {
    C === window ? window.scrollTo({
      top: T,
      behavior: "smooth"
    }) : C.scrollTo({
      top: T,
      behavior: "smooth"
    });
  }, []), x = z(() => {
    const C = [], T = (N) => {
      N.forEach((B) => {
        B.key && C.push(B.key), B.children && T(B.children);
      });
    };
    return T(e), C;
  }, [e]), v = U((C, T) => {
    h(C), f(T);
    const N = document.getElementById(C);
    console.log("targetElement", N);
    const B = g();
    if (N)
      if (n === 0)
        N.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      else {
        const S = B === window ? { top: 0 } : B.getBoundingClientRect(), $ = N.getBoundingClientRect().top - S.top, F = j(B) + $ - n;
        w(B, F);
      }
    t == null || t(C);
  }, [n, t, g, j, w]);
  X(() => {
    const C = (B) => {
      const S = B.filter(
        (A) => A.isIntersecting && A.intersectionRatio >= 0.5
      );
      if (S.length > 0) {
        const $ = S[0].target.id;
        h($), f(x.indexOf($)), t == null || t($);
      } else
        B.forEach((A) => {
          const $ = A.target.id;
          if (!A.isIntersecting && u === $) {
            const I = x.indexOf($), F = x[I - 1] || null;
            h(F), f(x.indexOf(F)), F && (t == null || t(F));
          }
        });
    }, T = g(), N = new IntersectionObserver(C, {
      threshold: [0, 0.5, 1],
      root: T === window ? null : T,
      rootMargin: `-${n}px 0px 0px 0px`
    });
    return x.forEach((B) => {
      const S = document.getElementById(B);
      S && N.observe(S);
    }), () => {
      x.forEach((B) => {
        const S = document.getElementById(B);
        S && N.unobserve(S);
      });
    };
  }, [x, u, n, t, g]);
  const k = (C, T = 0) => C.map((N, B) => /* @__PURE__ */ s.jsxs(
    "li",
    {
      style: { textIndent: T > 0 ? `${T * 0.5}em` : 0, paddingTop: B > 0 ? `${r}px` : 0 },
      onMouseEnter: () => {
        B !== p && (L(!0), b(B));
      },
      onMouseLeave: () => L(!1),
      children: [
        /* @__PURE__ */ s.jsx(
          "a",
          {
            className: `land-anchor-link ${u === N.key ? "active" : ""}`,
            onClick: () => v(N.key, B),
            "aria-current": u === N.key ? "location" : void 0,
            children: N.title
          }
        ),
        N.children && k(N.children, T + 1)
      ]
    },
    N.key
  )), [y, b] = O(-1), [m, L] = O(!1);
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
              opacity: m ? 1 : 0,
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
}, pm = ({
  ratio: e = 1,
  children: t,
  contentClassName: n = "",
  contentStyle: r,
  style: o,
  className: i = ""
}) => {
  const a = ee(null), [c, l] = O(1);
  X(() => {
    if (!a.current) return;
    const u = (p) => {
      p.forEach((f) => {
        l(f.contentRect.width / f.contentRect.height);
      });
    };
    new ResizeObserver(u).observe(a.current);
  }, []);
  const d = z(() => e > c, [e, c]);
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
}, Tc = ({
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
), $c = ({
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
    children: e ? t ? /* @__PURE__ */ s.jsx(q, { name: "video-play", size: n / 1.8, color: r }) : /* @__PURE__ */ s.jsx(Tc, { size: n / 1.8, color: r }) : /* @__PURE__ */ s.jsx(q, { name: "video-pause", size: 24, color: r })
  }
);
function Si(e, t, n) {
  const r = (i, a, c, l, d) => (i - a) / (c - a) * (d - l) + l;
  return e.map((i) => r(i, t, n, 0, 1));
}
function C0(e, t, n, r, o = 2, i = 2, a = "#999", c = "#FF0000", l, d) {
  console.log("drawWave", e, "canvas size:", t.width, "x", t.height);
  const u = t.getContext("2d");
  if (!u) return;
  let h = e;
  if (h.length === 0) {
    console.warn("No wave data to draw");
    return;
  }
  if (l) {
    const L = Math.max(...e);
    L > 0 && (h = Si(e, 0, L));
  }
  if (d) {
    const L = Math.min(...e), C = Math.max(...e), T = Math.min(...e.filter((N) => N !== L));
    h = Si(
      e.filter((N) => N !== L),
      T,
      C
    );
  }
  const p = t.width, f = t.height;
  if (p === 0 || f === 0) {
    console.warn("Canvas has no size");
    return;
  }
  const g = n.currentTime || 0, j = n.duration || 1, w = Math.floor(g / j * r);
  u.clearRect(0, 0, p, f);
  const x = o + i, v = Math.floor(p / x), k = Math.min(h.length, v), y = Math.max(...h), b = 2, m = y > 0 ? Math.max(f * 0.8 / y, b / y) : 1;
  console.log("Drawing bars:", k, "maxValue:", y, "scale:", m);
  for (let L = 0; L < k; L++) {
    const C = h[L] || 0, T = L * x, N = Math.max(C * m, b), B = f - N;
    u.fillStyle = L < w ? c : a, u.fillRect(T, B, o, N);
  }
}
function M0(e, t) {
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
function b0({
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
  const h = ee(null), p = ee(null), f = ee(), [g, j] = O([]), [w, x] = O(!1), [v, k] = O(null), [y, b] = O(t), m = U(async () => {
    if (e) {
      x(!0), k(null);
      try {
        const S = new (window.AudioContext || window.webkitAudioContext)(), $ = await (await fetch(e)).arrayBuffer(), I = await S.decodeAudioData($), F = M0(I, r);
        j(F || []), S.close();
      } catch (S) {
        k(S instanceof Error ? S.message : "Failed to generate wave data"), console.error("Error generating wave data:", S);
      } finally {
        x(!1);
      }
    }
  }, [e, r]), L = U(() => {
    if (!h.current || g.length === 0) return;
    const S = h.current, A = S.parentElement;
    if (A) {
      const I = A.getBoundingClientRect();
      S.width = I.width, S.height = I.height;
    }
    const $ = p.current || new Audio(e);
    u === "bar" ? C0(
      g,
      S,
      $,
      r,
      o,
      i,
      a,
      c,
      l,
      d
    ) : C(
      g,
      S,
      $,
      a,
      c
    );
  }, [g, r, o, i, a, c, l, d, u, e]), C = U((S, A, $, I, F) => {
    const D = A.getContext("2d");
    if (!D) return;
    const K = A.width, V = A.height;
    if (K === 0 || V === 0) {
      console.warn("Canvas has no size for line waveform");
      return;
    }
    const P = $.currentTime || 0, R = $.duration || 1, E = Math.floor(P / R * S.length);
    if (D.clearRect(0, 0, K, V), S.length === 0) {
      console.warn("No data for line waveform");
      return;
    }
    const Y = Math.max(...S), G = Y > 0 ? V * 0.6 / Y : 1, _ = K / (S.length - 1);
    if (D.beginPath(), D.strokeStyle = I, D.lineWidth = 1, D.setLineDash([2, 2]), D.moveTo(0, V / 2), D.lineTo(K, V / 2), D.stroke(), D.setLineDash([]), D.beginPath(), D.strokeStyle = I, D.lineWidth = 2, S.forEach((J, ce) => {
      const se = ce * _, ue = V / 2 - J * G;
      ce === 0 ? D.moveTo(se, ue) : D.lineTo(se, ue);
    }), D.stroke(), E > 0) {
      D.beginPath(), D.strokeStyle = F, D.lineWidth = 3;
      for (let J = 0; J < Math.min(E, S.length); J++) {
        const ce = J * _, se = V / 2 - S[J] * G;
        J === 0 ? D.moveTo(ce, se) : D.lineTo(ce, se);
      }
      D.stroke();
    }
  }, []), T = U(() => {
    L(), f.current = requestAnimationFrame(T);
  }, [L]), N = U(() => {
    f.current && cancelAnimationFrame(f.current), T();
  }, [T]), B = U(() => {
    f.current && (cancelAnimationFrame(f.current), f.current = void 0);
  }, []);
  return X(() => {
    m();
  }, [m]), X(() => {
    const S = p.current;
    S && (t ? S.play().catch((A) => {
      console.error("Failed to play audio:", A), b(!1), n == null || n(!1);
    }) : S.pause());
  }, [t, n]), X(() => {
    const S = p.current;
    if (!S) return;
    const A = () => {
      b(!0), n == null || n(!0), N();
    }, $ = () => {
      b(!1), n == null || n(!1), B();
    }, I = () => {
      b(!1), n == null || n(!1), B();
    };
    return S.addEventListener("play", A), S.addEventListener("pause", $), S.addEventListener("ended", I), () => {
      S.removeEventListener("play", A), S.removeEventListener("pause", $), S.removeEventListener("ended", I), B();
    };
  }, [N, B, n]), X(() => () => {
    B();
  }, [B]), {
    canvasRef: h,
    audioRef: p,
    waveData: g,
    isLoading: w,
    error: v,
    isPlaying: y,
    drawWaveform: L,
    startAnimation: N,
    stopAnimation: B
  };
}
const Ac = ({
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
  style: g,
  className: j = "",
  children: w
}) => {
  const {
    canvasRef: x,
    waveData: v,
    isLoading: k,
    error: y,
    drawWaveform: b
  } = b0({
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
  }), m = r ? { current: r } : x, L = i || v;
  return Le.useEffect(() => {
    L.length > 0 && setTimeout(() => {
      b();
    }, 100);
  }, [L, b]), Le.useEffect(() => {
    const C = m.current;
    if (!C) return;
    const T = new ResizeObserver(() => {
      L.length > 0 && b();
    });
    return T.observe(C), () => T.disconnect();
  }, [L, b, m]), y ? /* @__PURE__ */ s.jsx("div", { className: `land-audio-wave error ${j}`, style: g, children: /* @__PURE__ */ s.jsxs("div", { className: "error-message", children: [
    "Failed to load audio: ",
    y
  ] }) }) : k ? /* @__PURE__ */ s.jsx("div", { className: `land-audio-wave loading ${j}`, style: g, children: /* @__PURE__ */ s.jsx("div", { className: "loading-spinner", children: "Loading waveform..." }) }) : /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-audio-wave ${p} ${j}`,
      style: {
        position: "relative",
        width: "100%",
        height: "60px",
        ...g
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "canvas",
          {
            ref: m,
            style: {
              width: "100%",
              height: "100%",
              display: "block"
            }
          }
        ),
        w
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
  const p = ee(null), [f, g] = O(!1);
  return X(() => {
    if (!p.current) return;
    const j = p.current;
    f ? j.play() : j.pause();
  }, [f]), /* @__PURE__ */ s.jsxs("div", { className: `land-audio ${h}`, style: u, children: [
    /* @__PURE__ */ s.jsx(
      $c,
      {
        play: f,
        onClick: (j) => {
          j.stopPropagation(), g(!f);
        }
      }
    ),
    t && /* @__PURE__ */ s.jsx(
      Ac,
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
    /* @__PURE__ */ s.jsx("audio", { ref: p, src: e })
  ] });
};
Fs.AudioButton = $c;
Fs.AudioAnimationIcon = Tc;
Fs.AudioWave = Ac;
const fm = ({
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
}, S0 = ({
  item: e,
  active: t,
  onChange: n,
  index: r,
  hoverPreview: o
}) => {
  const i = ee(null), [a, c] = O(!1);
  return X(() => {
    i.current && (i.current.scrollWidth > i.current.offsetWidth ? c(!0) : c(!1));
  }, [e]), /* @__PURE__ */ s.jsx(Ae, { targetBody: !0, content: e.tip || (o && a ? e.label : ""), children: /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-breadCrumb-item hover-pop ${t ? "active" : ""}`,
      onClick: () => n == null ? void 0 : n(),
      children: [
        /* @__PURE__ */ s.jsx("div", { ref: i, className: `land-breadcrumb-label ${e.maxWidth ? "ellipsis" : ""}`, style: { maxWidth: `${e.maxWidth}px` }, children: e.label }),
        r > 0 && /* @__PURE__ */ s.jsx(q, { name: "arrow", className: "land-breadCrumb-item-arrow", size: 16, strokeWidth: 4 })
      ]
    }
  ) });
}, mm = ({
  data: e = [],
  current: t,
  showMask: n = !1,
  hoverPreview: r = !1,
  onChange: o,
  style: i,
  className: a = ""
}) => {
  var p;
  const c = ee(null), [l, d] = O(!1), [u, h] = O(!0);
  return X(() => {
    if (!n || !c.current) return;
    const f = () => {
      c.current && (d(c.current.scrollLeft <= c.current.clientWidth - c.current.scrollWidth), h(c.current.scrollLeft >= 0));
    };
    return c.current.addEventListener("scroll", f), () => {
      var g;
      (g = c.current) == null || g.removeEventListener("scroll", f);
    };
  }, []), /* @__PURE__ */ s.jsxs("div", { className: `land-breadCrumb  ${a}`, style: i, children: [
    n && /* @__PURE__ */ s.jsx("div", { className: `land-breadCrumb-prefixMask ${l ? "hidden" : ""}` }),
    /* @__PURE__ */ s.jsx("div", { ref: c, className: "land-breadCrumb-container", children: (p = Array.from(e)) == null ? void 0 : p.reverse().map((f, g) => /* @__PURE__ */ s.jsx(
      S0,
      {
        index: g,
        item: f,
        active: t === f.value,
        hoverPreview: r,
        onChange: () => o == null ? void 0 : o(f)
      },
      f.value
    )) }),
    n && /* @__PURE__ */ s.jsx("div", { className: `land-breadCrumb-suffixMask ${u ? "hidden" : ""}` })
  ] });
}, N0 = ({
  style: e,
  ...t
}) => {
  const [n, r] = O(!1);
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
      children: /* @__PURE__ */ s.jsx(q, { name: "arrow-line", size: 16, strokeWidth: 3, className: `land-button-arrow-icon ${n ? "button-hover-arrow" : ""}` })
    }
  );
}, V0 = ({
  defaultSide: e,
  hoverSide: t,
  ...n
}) => {
  const [r, o] = O(!1);
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
        /* @__PURE__ */ s.jsx(Ce.div, { animate: { opacity: r ? 0 : 1 }, className: "land-button-change-default", children: e })
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
  subText: g,
  icon: j,
  // 尺寸属性
  capsule: w,
  // 气泡属性
  tip: x,
  tipProps: v,
  // 原生事件
  nativeEvent: k
}) => {
  const y = z(() => !!(j && !f && !g), [j, f, g]), b = z(() => [
    "land-button",
    e,
    t,
    y && "iconOnly",
    x && "hover-pop",
    o && "block",
    i && "bold",
    a && "hover-bold",
    w && "capsule",
    c && "hover-animation",
    l && "active-animation",
    n && `size-${n}`,
    u
  ].filter(Boolean).join(" "), [e, t, y, r, x, u]), m = () => /* @__PURE__ */ s.jsxs(Ae, { targetBody: !0, theme: "dark", content: x, ...v, children: [
    j && /* @__PURE__ */ s.jsx("div", { className: "land-button-icon", children: j }),
    !y && (f || g) && /* @__PURE__ */ s.jsxs("div", { className: "land-button-mask-content-wrapper", children: [
      /* @__PURE__ */ s.jsx("span", { children: f }),
      g && /* @__PURE__ */ s.jsx("span", { className: "subText", children: g }),
      (a || e === "transparent") && /* @__PURE__ */ s.jsxs("div", { className: "land-button-mask-content", children: [
        /* @__PURE__ */ s.jsx("span", { children: f }),
        g && /* @__PURE__ */ s.jsx("span", { className: "subText", children: g })
      ] })
    ] }),
    p
  ] }), L = {
    style: d,
    className: b,
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
      ...L,
      children: m()
    }
  );
};
me.ButtonArrow = N0;
me.ButtonChange = V0;
const T0 = (e, t) => {
  const n = ee(t);
  X(() => {
    n.current = t;
  }, [t]);
  const r = U((o) => {
    e.current && !e.current.contains(o.target) && n.current(o);
  }, [e]);
  X(() => (document.body.addEventListener("mousedown", r), document.body.addEventListener("touchstart", r), () => {
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
  dropStyle: g,
  open: j = !1
}) => {
  const w = ee(null), x = ee(null), [v, k] = O(j);
  X(() => {
    c && v && k(!1);
  }, [c, v]), X(() => {
    c || k(j);
  }, [j, c]);
  const [y, b] = O({
    top: 0,
    left: 0
  }), [m, L] = O(
    i
  ), [C, T] = O(a), N = U(() => {
    if (!w.current) return;
    const F = w.current.getBoundingClientRect(), D = window.innerWidth, K = window.innerHeight, V = window.pageXOffset || document.documentElement.scrollLeft, P = window.pageYOffset || document.documentElement.scrollTop, R = 200, E = 150, Y = 0;
    let G = 0, _ = 0, J = i, ce = a;
    const se = K - F.bottom - Y, ue = F.top - Y;
    if (i === "bottom" && se < E && ue > E ? J = "top" : i === "top" && ue < E && se > E && (J = "bottom"), t) {
      if (!x.current) return;
      const be = x.current.getBoundingClientRect(), Se = be.width || R, Ve = be.height || E;
      J === "bottom" ? G = F.bottom + Y + P : G = F.top - Ve - Y + P;
      let rr = F.left + F.width / 2, sr = F.left, xt = F.right;
      switch (a) {
        case "center":
          _ = rr - Se / 2;
          break;
        case "right":
          _ = xt - Se;
          break;
        default:
          _ = sr;
          break;
      }
      _ < V ? (_ = V + Y, ce = "left") : _ + Se > V + D && (_ = V + D - Se - Y, ce = "right"), G < P ? G = P + Y : G + Ve > P + K && (G = P + K - Ve - Y);
    } else
      ce = a;
    b({ top: G, left: _ }), L(J), T(ce);
  }, [i, a, t]);
  X(() => {
    if (v && !c) {
      const F = setTimeout(N, 0);
      return () => clearTimeout(F);
    }
  }, [v, c, N]), X(() => {
    if (v && !c) {
      const F = () => N(), D = () => N();
      return window.addEventListener("resize", F), window.addEventListener("scroll", D, !0), document.addEventListener("scroll", D, !0), () => {
        window.removeEventListener("resize", F), window.removeEventListener("scroll", D, !0), document.removeEventListener("scroll", D, !0);
      };
    }
  }, [v, c, N]), X(() => {
    v ? d == null || d(v) : u == null || u(v);
  }, [v, d, u]);
  const B = (F) => {
    c || (l == null || l(F), e === "click" && k(!1));
  }, S = /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: x,
      className: `land-dropdown-results ${v ? "show" : ""} ${C} ${m}`,
      style: t ? {
        position: "fixed",
        top: y.top,
        left: y.left,
        transform: "none"
      } : void 0,
      "data-debug": `alignment: ${C}, placement: ${m}, targetBody: ${t}`,
      onClick: (F) => F.stopPropagation(),
      children: /* @__PURE__ */ s.jsxs("div", { className: `land-dropdown-drop ${f}`, style: g, children: [
        n && !r && /* @__PURE__ */ s.jsx("ul", { className: "land-dropdown-drop-list", children: n == null ? void 0 : n.map((F) => /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "land-dropdown-drop-item",
            onClick: () => B(F),
            children: F.label
          },
          F.key
        )) }),
        r
      ] })
    }
  );
  T0(w, () => {
    v && !c && k(!1);
  });
  const A = () => {
    c || e === "click" && k(!v);
  }, $ = () => {
    c || e === "hover" && k(!0);
  }, I = () => {
    e === "hover" && k(!1);
  };
  return /* @__PURE__ */ s.jsxs(un, { children: [
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: w,
        className: `land-dropdown-toggle ${v ? "show" : ""} ${h} ${c ? "disabled" : ""}`,
        style: p,
        onClick: A,
        onMouseEnter: $,
        onMouseLeave: I,
        "aria-disabled": c,
        "aria-expanded": v,
        "aria-haspopup": "true",
        children: [
          o,
          !t && S
        ]
      }
    ),
    t && v && !c && S
  ] });
}, Rc = ({
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
  const [d, u] = O(e);
  return X(() => {
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
            /* @__PURE__ */ s.jsx(q, { name: "check", size: 10, className: "land-check-circle-icon" }),
            /* @__PURE__ */ s.jsx(q, { name: "dec", strokeWidth: 8, size: 10, className: "land-check-indeterminate-icon" })
          ] }),
          n
        ]
      }
    ),
    r && /* @__PURE__ */ s.jsxs("div", { className: "land-check-pop hover-pop", children: [
      /* @__PURE__ */ s.jsx(q, { name: "info-fill", className: "land-check-pop-icon" }),
      /* @__PURE__ */ s.jsx(
        Ae,
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
  type: d = "border",
  tip: u,
  tipProps: h,
  disabled: p,
  onChange: f,
  open: g = !1,
  className: j = "",
  style: w,
  ...x
}) => {
  const [v, k] = O(n), [y, b] = O(r);
  X(() => {
    n !== v && k(n);
  }, [n, v]), X(() => {
    JSON.stringify(r) !== JSON.stringify(y) && b(r);
  }, [r, y]);
  const m = z(() => e ? e.filter(($) => y.includes($.key)).map(($) => $.label) : [], [e, y]), L = z(() => e ? e.filter(($) => y.includes($.key)) : [], [e, y]), C = U(() => {
    var $;
    return e ? o ? m.length === 0 ? t : a !== void 0 && m.length > a ? `${m.slice(0, a).join(i)}等${m.length}个选项` : m.join(i) : v === void 0 || v === "" ? t : ($ = e == null ? void 0 : e.filter((I) => I.key === v)[0]) == null ? void 0 : $.label : t;
  }, [
    o,
    m,
    a,
    i,
    v,
    e,
    t
  ]), T = U(() => {
    if (!l)
      return C();
    if (o)
      return l({
        values: y,
        items: L,
        isMultiple: !0,
        placeholder: t
      });
    {
      const $ = e == null ? void 0 : e.filter((D) => D.key === v)[0], I = $ ? [$] : [], F = $ ? [$.key] : [];
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
    y,
    L,
    v,
    e,
    t,
    C
  ]), N = U(
    ($) => {
      if (!$.disabled)
        if (o) {
          const I = [...y], F = I.indexOf($.key);
          F > -1 ? I.splice(F, 1) : I.push($.key), b(I);
          const D = (e == null ? void 0 : e.filter((K) => I.includes(K.key))) || [];
          f == null || f($, D);
        } else
          k($.key), f == null || f($);
    },
    [o, y, e, f]
  ), B = U(
    ($) => o ? y.includes($) : v === $,
    [o, y, v]
  ), S = z(
    () => /* @__PURE__ */ s.jsx("div", { className: "land-select-list", children: e && e.length > 0 ? e == null ? void 0 : e.map(($) => /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `land-select-drop-item ${$.tip ? "hover-pop" : ""} ${B($.key) ? "selected" : ""} ${$.disabled ? "disabled" : ""}`,
        onClick: (I) => {
          I.stopPropagation(), N($);
        },
        children: [
          o && c && /* @__PURE__ */ s.jsx("div", { className: "land-select-checkbox", children: /* @__PURE__ */ s.jsx(
            Rc,
            {
              checked: B($.key),
              disabled: $.disabled
            }
          ) }),
          !c && /* @__PURE__ */ s.jsx("div", { className: "land-select-results-item-label", children: $.label }),
          $.iconTip && /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: `land-select-item-info ${$.iconTip ? "hover-pop" : ""}`,
              children: [
                /* @__PURE__ */ s.jsx(q, { name: "info-stroke", size: 12 }),
                $.iconTip && /* @__PURE__ */ s.jsx(
                  Ae,
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
            Ae,
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
    [e, B, N, o, c]
  ), A = z(() => e ? l ? T() : C() : t, [
    l,
    T,
    C,
    t
  ]);
  return /* @__PURE__ */ s.jsx("div", { className: `land-select ${j}`, style: w, children: /* @__PURE__ */ s.jsx(Os, { trigger: "click", disabled: p, dropContent: S, ...x, children: /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-select-input ${d} ${p ? "disabled" : ""}`,
      children: [
        /* @__PURE__ */ s.jsx(
          "p",
          {
            className: `${(o ? y.length > 0 : v !== void 0 && v !== "") ? "land-select-trigger" : "land-select-placeholder"}`,
            children: A
          }
        ),
        /* @__PURE__ */ s.jsx(
          q,
          {
            name: "arrow-triangle",
            className: "land-select-value-arrow",
            size: 16
          }
        ),
        u && /* @__PURE__ */ s.jsx(Ae, { targetBody: !0, content: u, theme: "dark", ...h })
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
  viewMode: g = "date"
}) => {
  const j = Le.useMemo(() => {
    if (!r) return [];
    if (u)
      return u;
    const [y, b] = o, m = b - y + 1;
    return Array.from({ length: m }, (L, C) => ({
      key: `${y + C}`,
      label: `${y + C}`
    }));
  }, [r, o, u]), w = Le.useMemo(() => ({
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
  }), []), x = g === "date" || g === "week", v = g === "date" || g === "week" || g === "month" || g === "quarter" || g === "year", k = g === "date" || g === "week";
  return /* @__PURE__ */ s.jsxs("div", { className: `land-calendar-header ${p}`, style: f, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "land-calendar-header-btn-group", children: [
      v && /* @__PURE__ */ s.jsx(
        me,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s.jsx(q, { name: "arrow-double" }),
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
          icon: /* @__PURE__ */ s.jsx(q, { name: "arrow" }),
          className: "land-calendar-btn prev",
          disabled: i,
          onClick: () => c == null ? void 0 : c(n !== void 0 ? n - 1 : -1)
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "land-calendar-header-center", children: [
      /* @__PURE__ */ s.jsx("div", { className: "land-calendar-year", children: r ? /* @__PURE__ */ s.jsx(
        Ic,
        {
          type: "transparent",
          selected: t.toString(),
          data: j,
          onChange: (y) => l == null ? void 0 : l(Number(y.key))
        }
      ) : /* @__PURE__ */ s.jsx("div", { className: "land-calendar-year-input", children: d || t }) }),
      x && n !== void 0 && /* @__PURE__ */ s.jsx(s.Fragment, { children: e === "zh" ? w[n + 1].zh : w[n + 1].en })
    ] }),
    h && /* @__PURE__ */ s.jsx("div", { className: "land-calendar-right-content", children: h }),
    /* @__PURE__ */ s.jsxs("div", { className: "land-calendar-header-btn-group", children: [
      k && /* @__PURE__ */ s.jsx(
        me,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s.jsx(q, { name: "arrow" }),
          className: "land-calendar-btn next",
          disabled: a,
          onClick: () => c == null ? void 0 : c(n !== void 0 ? n + 1 : 1)
        }
      ),
      v && /* @__PURE__ */ s.jsx(
        me,
        {
          type: "text",
          size: "small",
          icon: /* @__PURE__ */ s.jsx(q, { name: "arrow-double" }),
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
function Pc(e) {
  if (!e) return;
  const t = _n(e);
  return t ? t.getFullYear() : void 0;
}
function Ec(e) {
  if (!e) return;
  const t = _n(e);
  return t ? t.getFullYear() : void 0;
}
function $0(e, t, n) {
  const r = Pc(t), o = Ec(n);
  return !(r && e < r || o && e > o);
}
function A0(e, t, n, r) {
  const o = new Date(e, t, 1);
  return Tt(o, n, r);
}
function R0(e, t, n, r) {
  const o = (t - 1) * 3, i = new Date(e, o, 1), a = new Date(e, o + 2, 31);
  return Tt(i, n, r) || Tt(a, n, r);
}
function Ni(e, t, n, r) {
  return Tt(e, n, r) || Tt(t, n, r);
}
function yr(e, t, n, r, o) {
  const i = new Date(e, t, n);
  return Tt(i, r, o);
}
function _t(e, t) {
  const n = (/* @__PURE__ */ new Date()).getFullYear(), r = Pc(e), o = Ec(t);
  return !r && !o ? [n, n] : r && !o ? [r, n] : !r && o ? [n, o] : r && o ? [r, o] : [n, n];
}
function xn(e, t) {
  const [n, r] = _t(e, t);
  return r > n;
}
function I0(e, t, n, r, o) {
  const i = new Date(e, t, 1), a = new Date(e, t + 1, 0), c = i.getDay(), l = a.getDate(), d = /* @__PURE__ */ new Date(), u = [];
  for (let p = 0; p < c; p++) {
    const f = new Date(e, t, 0), g = new Date(f.getTime() - (c - p - 1) * 24 * 60 * 60 * 1e3), j = g.getDate(), w = g.getMonth(), x = g.getFullYear();
    u.push({
      date: g,
      isCurrentMonth: !1,
      isToday: g.toDateString() === d.toDateString(),
      isSelected: !1,
      isDisabled: !yr(x, w, j, r, o),
      dayNumber: j,
      month: w,
      year: x
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
    const f = new Date(e, t + 1, p), g = f.getDate(), j = f.getMonth(), w = f.getFullYear();
    u.push({
      date: f,
      isCurrentMonth: !1,
      isToday: f.toDateString() === d.toDateString(),
      isSelected: !1,
      isDisabled: !yr(w, j, g, r, o),
      dayNumber: g,
      month: j,
      year: w
    });
  }
  return u;
}
function kt(e, t, n, r, o) {
  const i = new Date(e, t, 1), a = new Date(e, t + 1, 0), c = i.getDay(), l = a.getDate(), d = /* @__PURE__ */ new Date(), u = [];
  let h = [];
  for (let p = 0; p < c; p++) {
    const f = new Date(e, t, 0), g = new Date(f.getTime() - (c - p - 1) * 24 * 60 * 60 * 1e3);
    h.push(g);
  }
  for (let p = 1; p <= l; p++)
    if (h.push(new Date(e, t, p)), h.length === 7) {
      const f = h[0], g = h[6], j = u.length;
      u.push({
        dates: [...h],
        isCurrentWeek: Vi(h, d),
        isSelected: n === j + 1,
        isDisabled: !Ni(f, g, r, o),
        weekStart: f,
        weekEnd: g
      }), h = [];
    }
  if (h.length > 0) {
    for (let j = h.length; j < 7; j++) {
      const w = new Date(e, t + 1, j - h.length + 1);
      h.push(w);
    }
    const p = h[0], f = h[6], g = u.length;
    u.push({
      dates: h,
      isCurrentWeek: Vi(h, d),
      isSelected: n === g + 1,
      isDisabled: !Ni(p, f, r, o),
      weekStart: p,
      weekEnd: f
    });
  }
  return u;
}
function Vi(e, t) {
  return e.some(
    (n) => n.getDate() === t.getDate() && n.getMonth() === t.getMonth() && n.getFullYear() === t.getFullYear()
  );
}
const P0 = [
  { zh: "日", en: "Su" },
  { zh: "一", en: "Mo" },
  { zh: "二", en: "Tu" },
  { zh: "三", en: "We" },
  { zh: "四", en: "Th" },
  { zh: "五", en: "Fr" },
  { zh: "六", en: "Sa" }
];
async function E0(e, t = "zh") {
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
const Hc = ({
  language: e = "zh",
  className: t = ""
}) => /* @__PURE__ */ s.jsx("div", { className: `land-calendar-weekdays ${t}`, children: P0.map((n, r) => /* @__PURE__ */ s.jsx("div", { className: "land-calendar-item weekday", children: e === "zh" ? n.zh : n.en }, r)) }), H0 = ({
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
}, Ti = ({
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
  const [u, h] = O(/* @__PURE__ */ new Date()), [p, f] = O((/* @__PURE__ */ new Date()).getDate()), [g, j] = O((/* @__PURE__ */ new Date()).getFullYear()), [w, x] = O([]), v = (/* @__PURE__ */ new Date()).getDate(), k = (/* @__PURE__ */ new Date()).getMonth(), y = (/* @__PURE__ */ new Date()).getFullYear(), b = u.getFullYear(), m = u.getMonth();
  X(() => {
    E0(b, e).then(x);
  }, [b, e]);
  const { yearRange: L, shouldShowYearSelector: C } = z(() => {
    const R = _t(t, n), E = xn(t, n);
    return {
      yearRange: R,
      shouldShowYearSelector: E
    };
  }, [t, n]), T = z(
    () => !C && m <= 0,
    [m, C]
  ), N = z(
    () => !C && m >= 11,
    [m, C]
  ), B = () => {
    h(/* @__PURE__ */ new Date()), f(v), j(y), r == null || r(v, k, y);
  }, S = (R) => {
    h((E) => new Date(E.getFullYear(), R, 1));
  }, A = (R) => {
    isNaN(R) || (h((E) => new Date(R, E.getMonth(), 1)), R == y ? p === void 0 && f(v) : f(void 0), j(R));
  }, $ = b === y && m === k, I = I0(b, m, p, t, n), F = (R) => {
    R.isCurrentMonth && (f(R.dayNumber), r == null || r(R.dayNumber, R.month, R.year));
  }, D = (R, E) => {
    R.isCurrentMonth && (o == null || o(R.dayNumber, R.month, R.year, "date", E));
  }, K = (R, E) => {
    R.isCurrentMonth && (i == null || i(R.dayNumber, R.month, R.year, "date", E));
  }, V = (R, E) => {
    R.isCurrentMonth && (a == null || a(R.dayNumber, R.month, R.year, "date", E));
  }, P = (R, E) => {
    R.isCurrentMonth && (c == null || c(R.dayNumber, R.month, R.year, "date", E));
  };
  return /* @__PURE__ */ s.jsxs("div", { className: `land-calendar-date ${l}`, style: d, children: [
    /* @__PURE__ */ s.jsx(
      gn,
      {
        language: e,
        currentYear: g,
        currentMonth: m,
        viewMode: "date",
        shouldShowYearSelector: C,
        yearRange: L,
        monthPrevDisabled: T,
        monthNextDisabled: N,
        onMonthChange: S,
        onYearChange: A
      }
    ),
    /* @__PURE__ */ s.jsx(Hc, { language: e }),
    /* @__PURE__ */ s.jsx("div", { className: "land-calendar-days", children: I.map((R, E) => /* @__PURE__ */ s.jsx(
      H0,
      {
        day: R,
        onDayClick: F,
        onDayMouseOver: D,
        onDayMouseOut: K,
        onDayMouseEnter: V,
        onDayMouseLeave: P,
        children: R.isCurrentMonth && w.map((Y) => Y.date).includes(`${R.month}-${R.dayNumber}`) && /* @__PURE__ */ s.jsx("div", { className: "land-calendar-bottom-dot" })
      },
      `${R.year}-${R.month}-${R.dayNumber}-${E}`
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
        onClick: B
      }
    )
  ] });
}, D0 = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onWeekChange: r,
  onWeekMouseOver: o,
  onWeekMouseOut: i,
  className: a = "",
  style: c
}) => {
  const [l, d] = O(/* @__PURE__ */ new Date()), [u, h] = O(() => {
    const m = /* @__PURE__ */ new Date(), L = kt(m.getFullYear(), m.getMonth());
    let C = 0;
    for (let N = 0; N < L.length; N++)
      if (L[N].isCurrentWeek) {
        C = N;
        break;
      }
    const T = C + 1;
    return setTimeout(() => {
      const N = L[C];
      r == null || r(N.weekStart, N.weekEnd, m.getFullYear());
    }, 0), T;
  }), p = l.getFullYear(), { yearRange: f, shouldShowYearSelector: g } = z(() => {
    const m = _t(t, n), L = xn(t, n);
    return {
      yearRange: m,
      shouldShowYearSelector: L
    };
  }, [t, n]), j = () => {
    const m = new Date(l.getFullYear(), l.getMonth() - 1, 1);
    d(m);
    const L = kt(m.getFullYear(), m.getMonth());
    let C = 0;
    for (let N = 0; N < L.length; N++)
      if (L[N].isCurrentWeek) {
        C = N;
        break;
      }
    h(C + 1);
    const T = L[C];
    r == null || r(T.weekStart, T.weekEnd, m.getFullYear());
  }, w = () => {
    const m = new Date(l.getFullYear(), l.getMonth() + 1, 1);
    d(m);
    const L = kt(m.getFullYear(), m.getMonth());
    let C = 0;
    for (let N = 0; N < L.length; N++)
      if (L[N].isCurrentWeek) {
        C = N;
        break;
      }
    h(C + 1);
    const T = L[C];
    r == null || r(T.weekStart, T.weekEnd, m.getFullYear());
  }, x = (m) => {
    if (!isNaN(m)) {
      const L = new Date(m, l.getMonth(), l.getDate());
      d(L);
      const C = kt(m, L.getMonth());
      let T = 0;
      for (let B = 0; B < C.length; B++)
        if (C[B].isCurrentWeek) {
          T = B;
          break;
        }
      h(T + 1);
      const N = C[T];
      r == null || r(N.weekStart, N.weekEnd, m);
    }
  }, v = (m) => {
    const L = m + 1;
    h(L);
    const C = y[m];
    r == null || r(C.weekStart, C.weekEnd, p);
  }, k = () => {
    const m = /* @__PURE__ */ new Date();
    d(m);
    const L = kt(m.getFullYear(), m.getMonth());
    let C = 0;
    for (let N = 0; N < L.length; N++)
      if (L[N].isCurrentWeek) {
        C = N;
        break;
      }
    h(C + 1);
    const T = L[C];
    r == null || r(T.weekStart, T.weekEnd, m.getFullYear());
  }, y = kt(p, l.getMonth(), u, t, n);
  Array.from({ length: y.length }, (m, L) => ({
    key: `${L + 1}`,
    label: `${e === "zh" ? "第" : "Week "}${L + 1}${e === "zh" ? "周" : ""}`
  }));
  const b = y.some((m) => m.isCurrentWeek);
  return /* @__PURE__ */ s.jsxs("div", { className: `land-calendar-week ${a}`, style: c, children: [
    /* @__PURE__ */ s.jsx(
      gn,
      {
        language: e,
        currentYear: p,
        currentMonth: l.getMonth(),
        viewMode: "week",
        shouldShowYearSelector: g,
        yearRange: f,
        onMonthChange: (m) => {
          const L = l.getMonth(), C = m - L;
          C === 1 || C === -11 ? w() : (C === -1 || C === 11) && j();
        },
        onYearChange: x
      }
    ),
    /* @__PURE__ */ s.jsx(Hc, { language: e }),
    /* @__PURE__ */ s.jsx("div", { className: "land-calendar-week-days", children: y.map((m, L) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `land-calendar-week-row ${m.isSelected ? "selected" : ""} ${m.isCurrentWeek ? "current" : ""} ${m.isDisabled ? "disabled" : ""}`,
        onClick: () => !m.isDisabled && v(L),
        onMouseOver: (C) => {
          m.isDisabled || o == null || o(m.weekStart, m.weekEnd, p, "week", C);
        },
        onMouseOut: (C) => {
          m.isDisabled || i == null || i(m.weekStart, m.weekEnd, p, "week", C);
        },
        children: m.dates.map((C, T) => /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `land-calendar-item day ${C.toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? "current" : ""} ${C.getMonth() !== l.getMonth() ? "other-month" : ""}`,
            children: /* @__PURE__ */ s.jsx("div", { className: "day-number", children: C.getDate() })
          },
          T
        ))
      },
      L
    )) }),
    !b && /* @__PURE__ */ s.jsx(
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
}, B0 = ({
  language: e = "zh",
  minDate: t,
  maxDate: n,
  onMonthChange: r,
  onMonthMouseOver: o,
  onMonthMouseOut: i,
  className: a = "",
  style: c
}) => {
  const l = /* @__PURE__ */ new Date(), d = l.getMonth(), u = l.getFullYear(), [h, p] = O(u), [f, g] = O(d), [j, w] = O(u), { yearRange: x, shouldShowYearSelector: v } = z(() => {
    const S = _t(t, n), A = xn(t, n);
    return {
      yearRange: S,
      shouldShowYearSelector: A
    };
  }, [t, n]), k = () => {
    const S = h - 1;
    p(S);
  }, y = () => {
    const S = h + 1;
    p(S);
  }, b = (S) => {
    isNaN(S) || p(S);
  }, m = (S) => {
    g(S), w(h), r == null || r(S, h);
  }, L = () => {
    p(u), g(d), w(u), r == null || r(d, u);
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
  ], T = (S) => h === u && S === d, N = (S) => h === j && S === f, B = h === u;
  return /* @__PURE__ */ s.jsxs("div", { className: `land-calendar-month ${a}`, style: c, children: [
    /* @__PURE__ */ s.jsx(
      gn,
      {
        language: e,
        currentYear: h,
        viewMode: "month",
        shouldShowYearSelector: v,
        yearRange: x,
        onMonthChange: (S) => {
          S > 11 ? y() : S < 0 && k();
        },
        onYearChange: b
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "land-calendar-months-grid", children: C.map((S, A) => {
      const $ = A0(h, S.value, t, n);
      return /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `land-calendar-month-item ${T(S.value) ? "current" : ""} ${N(S.value) ? "selected" : ""} ${$ ? "" : "disabled"}`,
          onClick: () => $ && m(S.value),
          onMouseOver: (I) => {
            $ && (o == null || o(S.value, h, "month", I));
          },
          onMouseOut: (I) => {
            $ && (i == null || i(S.value, h, "month", I));
          },
          children: /* @__PURE__ */ s.jsx("div", { className: "month-name", children: e === "zh" ? S.zh : S.en })
        },
        A
      );
    }) }),
    !B && /* @__PURE__ */ s.jsx(
      me,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: L
      }
    )
  ] });
}, F0 = ({
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
    const S = (/* @__PURE__ */ new Date()).getMonth();
    return Math.floor(S / 3) + 1;
  }
  const [h, p] = O(d), [f, g] = O(u()), [j, w] = O(d), { yearRange: x, shouldShowYearSelector: v } = z(() => {
    const S = _t(t, n), A = xn(t, n);
    return {
      yearRange: S,
      shouldShowYearSelector: A
    };
  }, [t, n]), k = () => {
    const S = h - 1;
    p(S);
  }, y = () => {
    const S = h + 1;
    p(S);
  }, b = (S) => {
    isNaN(S) || p(S);
  }, m = (S) => {
    g(S), w(h), r == null || r(S, h);
  }, L = () => {
    const S = u();
    p(d), g(S), w(d), r == null || r(S, d);
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
  ], T = (S) => h === d && S === u(), N = (S) => h === j && S === f, B = h === d;
  return /* @__PURE__ */ s.jsxs("div", { className: `land-calendar-quarter ${a}`, style: c, children: [
    /* @__PURE__ */ s.jsx(
      gn,
      {
        language: e,
        currentYear: h,
        viewMode: "quarter",
        shouldShowYearSelector: v,
        yearRange: x,
        onMonthChange: (S) => {
          S > 11 ? y() : S < 0 && k();
        },
        onYearChange: b
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "land-calendar-quarters-grid", children: C.map((S, A) => {
      const $ = R0(h, S.value, t, n);
      return /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: `land-calendar-quarter-item ${T(S.value) ? "current" : ""} ${N(S.value) ? "selected" : ""} ${$ ? "" : "disabled"}`,
          onClick: () => $ && m(S.value),
          onMouseOver: (I) => {
            $ && (o == null || o(S.value, h, "quarter", I));
          },
          onMouseOut: (I) => {
            $ && (i == null || i(S.value, h, "quarter", I));
          },
          children: [
            /* @__PURE__ */ s.jsx("div", { className: "quarter-header", children: /* @__PURE__ */ s.jsx("div", { className: "quarter-name", children: e === "zh" ? S.zh : S.en }) }),
            /* @__PURE__ */ s.jsx("div", { className: "quarter-months", children: S.months }),
            /* @__PURE__ */ s.jsx("div", { className: "quarter-description", children: S.description })
          ]
        },
        A
      );
    }) }),
    !B && /* @__PURE__ */ s.jsx(
      me,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: L
      }
    )
  ] });
}, O0 = ({
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
  const [h, p] = O(u()), [f, g] = O(d), { yearRange: j, shouldShowYearSelector: w } = z(() => {
    const S = _t(t, n), A = xn(t, n);
    return {
      yearRange: S,
      shouldShowYearSelector: A
    };
  }, [t, n, d]), x = () => {
    const S = h - 10;
    p(S);
  }, v = () => {
    const S = h + 10;
    p(S);
  }, k = (S) => {
    p(S);
  }, y = (S) => {
    g(S), r == null || r(S);
  }, b = () => {
    p(u()), g(d), r == null || r(d);
  }, m = z(() => {
    const S = [];
    for (let A = 0; A < 10; A++) {
      const $ = h + A;
      S.push($);
    }
    return S;
  }, [h]), L = z(() => {
    const S = [], [A, $] = j, I = Math.floor(A / 10) * 10, F = Math.floor($ / 10) * 10;
    for (let D = I; D <= F; D += 10)
      S.push({
        key: D.toString(),
        label: `${D}-${D + 9}`
      });
    return S;
  }, [j]), C = (S) => S === d, T = (S) => S === f, N = (S) => $0(S, t, n), B = m.includes(d);
  return /* @__PURE__ */ s.jsxs("div", { className: `land-calendar-year ${a}`, style: c, children: [
    /* @__PURE__ */ s.jsx(
      gn,
      {
        language: e,
        currentYear: h,
        viewMode: "year",
        shouldShowYearSelector: w,
        yearRange: j,
        onMonthChange: (S) => {
          S > 11 ? v() : S < 0 && x();
        },
        onYearChange: k,
        customYearDisplay: `${h}-${h + 9}`,
        customYearOptions: L
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "land-calendar-years-grid", children: m.map((S, A) => {
      const $ = N(S);
      return /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: `land-calendar-year-item ${C(S) ? "current" : ""} ${T(S) ? "selected" : ""} ${$ ? "" : "disabled"}`,
          onClick: () => $ && y(S),
          onMouseOver: (I) => {
            $ && (o == null || o(S, "year", I));
          },
          onMouseOut: (I) => {
            $ && (i == null || i(S, "year", I));
          },
          children: [
            /* @__PURE__ */ s.jsx("div", { className: "year-number", children: S }),
            !$ && /* @__PURE__ */ s.jsx("div", { className: "disabled-overlay", children: e === "zh" ? "超出范围" : "Out of range" })
          ]
        },
        A
      );
    }) }),
    !B && /* @__PURE__ */ s.jsx(
      me,
      {
        type: "transparent",
        status: "primary",
        block: !0,
        size: "small",
        text: e === "zh" ? "返回今天" : "Today",
        className: "land-calendar-btn back",
        onClick: b
      }
    )
  ] });
}, _0 = ({
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
  onWeekMouseOut: g,
  onMonthMouseOver: j,
  onMonthMouseOut: w,
  onQuarterMouseOver: x,
  onQuarterMouseOut: v,
  onYearMouseOver: k,
  onYearMouseOut: y,
  className: b,
  style: m,
  ...L
}) => {
  const C = () => {
    switch (e) {
      case "date":
        return /* @__PURE__ */ s.jsx(
          Ti,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onDayChange: o,
            onDayMouseOver: d,
            onDayMouseOut: u,
            onDayMouseEnter: h,
            onDayMouseLeave: p,
            className: b
          }
        );
      case "week":
        return /* @__PURE__ */ s.jsx(
          D0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onWeekChange: i,
            onWeekMouseOver: f,
            onWeekMouseOut: g
          }
        );
      case "month":
        return /* @__PURE__ */ s.jsx(
          B0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onMonthChange: a,
            onMonthMouseOver: j,
            onMonthMouseOut: w
          }
        );
      case "quarter":
        return /* @__PURE__ */ s.jsx(
          F0,
          {
            language: t,
            minDate: n,
            maxDate: r,
            onQuarterChange: c,
            onQuarterMouseOver: x,
            onQuarterMouseOut: v
          }
        );
      case "year":
        return /* @__PURE__ */ s.jsx(
          O0,
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
          Ti,
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
      className: `land-calendar land-calendar-${e} ${b}`,
      style: m,
      ...L,
      children: C()
    }
  );
}, gm = ({
  checked: e,
  data: t,
  animated: n,
  onChange: r,
  style: o,
  className: i = ""
}) => /* @__PURE__ */ s.jsx("div", { className: `land-checkbox ${i}`, style: o, children: t == null ? void 0 : t.map(
  (a) => /* @__PURE__ */ s.jsx(
    Rc,
    {
      checked: e.includes(a.key),
      onCheckedChange: () => r == null ? void 0 : r(a),
      animated: n,
      ...a
    },
    a.key
  )
) }), xm = ({
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
), vm = ({
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
        !n && /* @__PURE__ */ s.jsx(q, { name: "arrow", strokeWidth: 4, size: 16, stroke: "var(--color-gray-10)" }),
        t
      ]
    }
  ),
  /* @__PURE__ */ s.jsx("div", { className: "land-collapse-content", children: /* @__PURE__ */ s.jsx("div", { className: "land-collapse-content-details", children: r }) })
] }), jm = ({ children: e, style: t, className: n }) => {
  const [r, o] = O(132), i = document.querySelector(".land-header"), a = document.querySelector(".land-footer");
  return X(() => {
    let c, l;
    i ? c = i.getBoundingClientRect().height : c = 0, a ? l = a.getBoundingClientRect().height : l = 0, o(c + l);
  }), /* @__PURE__ */ s.jsx("div", { className: `land-content ${n}`, style: {
    "--land-content-min-height": `${r}px`,
    ...t
  }, children: e });
}, Y0 = [
  { key: "hex", label: "HEX" },
  { key: "rgb", label: "RGB" },
  { key: "hsv", label: "HSV" },
  { key: "hsl", label: "HSL" }
], Z0 = "hex", $i = { h: 0, s: 100, v: 100 }, Ai = "var(--color-gray-3)", oe = {
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
}, U0 = ({ hue: e, onPanelChange: t }) => {
  const n = ee(null), [r, o] = O(!1), [i, a] = O({ x: 0, y: 0 }), c = z(() => {
    const f = oe.hsvToRgb(e, 100, 100);
    return {
      background: `linear-gradient(to right, #fff 0%, ${oe.rgbToHex(f.r, f.g, f.b)} 100%),
                   linear-gradient(to top, #000 0%, transparent 100%)`
    };
  }, [e]), l = U(() => {
    o(!1);
  }, []), d = U(
    (f) => {
      if (!r || !n.current) return;
      const { left: g, top: j } = n.current.getBoundingClientRect(), w = f.clientX - g, x = f.clientY - j, v = n.current.clientWidth, k = n.current.clientHeight, y = Math.max(0, Math.min(v, w)), b = Math.max(0, Math.min(k, x));
      a({ x: y, y: b });
      const m = y / v, L = 1 - b / k;
      t(m, L);
    },
    [r, t]
  );
  X(() => {
    if (r)
      return document.addEventListener("mousemove", d), document.addEventListener("mouseup", l), () => {
        document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", l);
      };
  }, [r, d, l]);
  const u = U(
    (f) => {
      var C, T, N;
      f.preventDefault(), o(!0);
      const { left: g, top: j } = ((C = n.current) == null ? void 0 : C.getBoundingClientRect()) || {
        left: 0,
        top: 0
      }, w = f.clientX - g, x = f.clientY - j, v = ((T = n.current) == null ? void 0 : T.clientWidth) || 0, k = ((N = n.current) == null ? void 0 : N.clientHeight) || 0, y = Math.max(0, Math.min(v, w)), b = Math.max(0, Math.min(k, x));
      a({ x: y, y: b });
      const m = y / v, L = 1 - b / k;
      t(m, L);
    },
    [t]
  ), h = U(
    (f) => {
      var C, T, N;
      if (!r) return;
      f.preventDefault();
      const { left: g, top: j } = ((C = n.current) == null ? void 0 : C.getBoundingClientRect()) || {
        left: 0,
        top: 0
      }, w = f.clientX - g, x = f.clientY - j, v = ((T = n.current) == null ? void 0 : T.clientWidth) || 0, k = ((N = n.current) == null ? void 0 : N.clientHeight) || 0, y = Math.max(0, Math.min(v, w)), b = Math.max(0, Math.min(k, x));
      a({ x: y, y: b });
      const m = y / v, L = 1 - b / k;
      t(m, L);
    },
    [r, t]
  ), p = U(() => {
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
}, G0 = ({ hue: e, onHueChange: t }) => {
  const n = ee(null), r = U(
    (i) => {
      if (!n.current) return;
      const a = n.current.getBoundingClientRect(), c = Math.max(0, Math.min(1, (i.clientX - a.left) / a.width));
      t(c * 360);
    },
    [t]
  ), o = U(
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
}, K0 = ({
  hue: e,
  alpha: t,
  onAlphaChange: n
}) => {
  const r = ee(null), o = z(() => {
    const c = oe.hsvToRgb(e, 100, 100);
    return {
      background: `linear-gradient(to right, transparent 0%, ${oe.rgbToHex(c.r, c.g, c.b)} 100%)`
    };
  }, [e]), i = U(
    (c) => {
      if (!r.current) return;
      const l = r.current.getBoundingClientRect(), d = Math.max(0, Math.min(1, (c.clientX - l.left) / l.width));
      n(d);
    },
    [n]
  ), a = U(
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
  onFocus: g,
  onBlur: j,
  onClear: w,
  className: x = "",
  style: v,
  ...k
}) => {
  const y = ee(null), b = ee(null), m = U(() => {
    !y.current || !b.current || (y.current.scrollLeft = b.current.scrollLeft);
  }, []), L = U((C) => {
    y.current && (y.current.scrollLeft = 0), j == null || j(C);
  }, []);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-input ${u ? "disabled" : ""} ${w ? "clear" : ""} ${e} text-${h} ${x}`,
      style: {
        width: typeof l == "number" ? `${l}px` : l,
        ...v
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
              ref: b,
              placeholder: r,
              type: n,
              value: t,
              max: d,
              onKeyDown: (C) => {
                C.code === "Enter" && (f == null || f(t, C));
              },
              onClick: (C) => C.stopPropagation(),
              onFocus: g,
              onBlur: L,
              onChange: (C) => {
                m == null || m(), p == null || p(C.target.value, C);
              },
              onScroll: m,
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
        w && /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `land-input-clear-icon ${t ? "" : "hide"}`,
            onClick: w,
            children: /* @__PURE__ */ s.jsx(q, { name: "error-fill" })
          }
        )
      ]
    }
  );
}, Xe = ({
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
  ...g
}) => {
  const [j, w] = O(e);
  X(() => e !== void 0 && w(e), [e]);
  const x = (y, b) => {
    c || y < r - n / 2 || y > o + n / 2 || (w(y), l == null || l(y, b));
  }, v = U(
    (y, b) => {
      const m = Number(y);
      m > o || m < r || typeof m == "number" && m % n || (w(m), l == null || l(m, b));
    },
    [o, r, n, l]
  ), k = U(
    (y) => {
      if (!p || c) return;
      y.preventDefault(), y.stopPropagation();
      const b = y.deltaY > 0 ? -n : n, m = j + b;
      m >= r && m <= o && x(m, y);
    },
    [p, c, j, n, r, o]
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
          Ae,
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
                value: String(j),
                disabled: c,
                prefix: i,
                suffix: a,
                onChange: (y, b) => v(y, b),
                style: {
                  paddingRight: u ? "0" : "40px"
                },
                textAlign: h,
                placeholder: g.placeholder,
                ...g
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
                  className: `land-numberInput-add ${j === o || c ? "disabled" : ""}`,
                  onClick: (y) => x == null ? void 0 : x(j + n, y),
                  children: /* @__PURE__ */ s.jsx(q, { name: "arrow", size: 16 })
                }
              ),
              t === "border" && /* @__PURE__ */ s.jsx(Xe, { gap: 0, lineLength: "32px" }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `land-numberInput-dec ${j === r || c ? "disabled" : ""}`,
                  onClick: (y) => x == null ? void 0 : x(j - n, y),
                  children: /* @__PURE__ */ s.jsx(q, { name: "arrow", size: 16 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, km = ({
  color: e = Ai,
  onChange: t,
  style: n,
  className: r = "",
  disabled: o
}) => {
  const [i, a] = O(Z0), [c, l] = O($i.h), [d, u] = O(1), [h, p] = O(""), [f, g] = O({ r: 0, g: 0, b: 0 }), [j, w] = O($i), [x, v] = O({ h: 0, s: 0, l: 0 }), [k, y] = O({ x: 0, y: 0 }), b = ee(!1), m = ee(""), L = z(() => {
    switch (i) {
      case "hex":
        return h || "#000000";
      case "rgb":
        return `rgb(${f.r}, ${f.g}, ${f.b})`;
      case "hsv":
        return `hsv(${j.h}, ${j.s}%, ${j.v}%)`;
      case "hsl":
        return `hsl(${x.h}, ${x.s}%, ${x.l}%)`;
      default:
        return "#000000";
    }
  }, [i, h, f, j, x]), C = z(() => {
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
        const V = oe.hsvToRgb(
          j.h,
          j.s,
          j.v
        );
        return oe.rgbToHex(V.r, V.g, V.b);
      case "hsl":
        const P = oe.hslToRgb(
          x.h,
          x.s,
          x.l
        );
        return oe.rgbToHex(P.r, P.g, P.b);
      default:
        return "#000000";
    }
  }, [i, h, f, j, x]), T = z(() => {
    const V = oe.hexToRgb(C);
    return V ? `rgba(${V.r}, ${V.g}, ${V.b}, ${d})` : `rgba(0, 0, 0, ${d})`;
  }, [C, d]), N = z(
    () => ({
      background: T,
      ...n
    }),
    [T, n]
  );
  X(() => {
    if (e && e !== Ai && !b.current) {
      const V = oe.hexToRgb(e);
      if (V) {
        const P = oe.rgbToHsv(V.r, V.g, V.b), R = oe.rgbToHsl(V.r, V.g, V.b);
        p(e), g(V), w(P), v(R), l(P.h), b.current = !0;
      }
    } else b.current || (l(0), w({ h: 0, s: 0, v: 50 }), v({ h: 0, s: 0, l: 50 }), g({ r: 128, g: 128, b: 128 }), p("#808080"), b.current = !0);
  }, [e]);
  const B = U(() => {
    const V = `${L}-${C}-${T}`;
    V !== m.current && (m.current = V, t == null || t(L, C, T));
  }, [t, L, C, T]);
  X(() => {
    b.current && B();
  }, [L, C, T, B]);
  const S = U(
    (V, P) => {
      y({ x: V, y: P });
      const R = V * 100, E = P * 100;
      w({ h: c, s: R, v: E });
      const G = oe.hsvToRgb(c, R, E), _ = oe.rgbToHsl(G.r, G.g, G.b), J = oe.rgbToHex(G.r, G.g, G.b);
      g(G), v(_), p(J);
    },
    [c]
  ), A = (V) => {
    l(V);
    const P = { ...j, h: V };
    w(P);
    const R = oe.hsvToRgb(V, P.s, P.v), E = oe.rgbToHsl(R.r, R.g, R.b), Y = oe.rgbToHex(R.r, R.g, R.b);
    g(R), v(E), p(Y);
  }, $ = (V) => {
    u(V);
  }, I = (V) => {
    let P = V.replace("#", "").toUpperCase();
    P.length > 6 && (P = P.slice(0, 6)), P = P.replace(/[^0-9A-F]/g, "");
    const R = P.length > 0 ? `#${P}` : "#";
    if (p(R), P.length === 6) {
      const E = oe.hexToRgb(R);
      if (E) {
        const Y = oe.rgbToHsv(E.r, E.g, E.b), G = oe.rgbToHsl(E.r, E.g, E.b);
        g(E), w(Y), v(G), l(Y.h);
      }
    }
  }, F = (V, P) => {
    const R = Math.max(0, Math.min(255, Math.round(P))), E = { ...f, [V]: R };
    g(E);
    const Y = oe.rgbToHsv(E.r, E.g, E.b), G = oe.rgbToHsl(E.r, E.g, E.b), _ = oe.rgbToHex(E.r, E.g, E.b);
    w(Y), v(G), p(_), l(Y.h);
  }, D = (V, P) => {
    let R = P;
    V === "h" ? R = (P % 360 + 360) % 360 : R = Math.max(0, Math.min(100, Math.round(P)));
    const E = { ...j, [V]: R };
    w(E);
    const Y = oe.hsvToRgb(E.h, E.s, E.v), G = oe.rgbToHsl(Y.r, Y.g, Y.b), _ = oe.rgbToHex(Y.r, Y.g, Y.b);
    g(Y), v(G), p(_), l(E.h);
  }, K = (V, P) => {
    let R = P;
    V === "h" ? R = (P % 360 + 360) % 360 : R = Math.max(0, Math.min(100, Math.round(P)));
    const E = { ...x, [V]: R };
    v(E);
    const Y = oe.hslToRgb(E.h, E.s, E.l), G = oe.rgbToHsv(Y.r, Y.g, Y.b), _ = oe.rgbToHex(Y.r, Y.g, Y.b);
    g(Y), w(G), p(_), l(E.h);
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
              onClick: (V) => V.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsx(U0, { hue: c, onPanelChange: S }),
                /* @__PURE__ */ s.jsxs("div", { className: "land-color-picker-panel-move-sliders", children: [
                  /* @__PURE__ */ s.jsx(
                    G0,
                    {
                      hue: c,
                      onHueChange: (V) => A(V)
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    K0,
                    {
                      hue: c,
                      alpha: d,
                      onAlphaChange: $
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsxs("div", { className: "land-color-picker-panel-color-mode", children: [
                  /* @__PURE__ */ s.jsx(
                    Ic,
                    {
                      type: "transparent",
                      data: Y0,
                      onChange: (V) => a(V.key),
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
                          onChange: (V) => I(V)
                        }
                      ),
                      i === "rgb" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                        /* @__PURE__ */ s.jsx(
                          Oe,
                          {
                            width: 48,
                            placeholder: "R",
                            value: f.r,
                            onChange: (V) => F("r", V),
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
                            onChange: (V) => F("g", V),
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
                            onChange: (V) => F("b", V),
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
                            value: j.h,
                            onChange: (V) => D("h", V),
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
                            value: j.s,
                            onChange: (V) => D("s", V),
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
                            value: j.v,
                            onChange: (V) => D("v", V),
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
                            value: x.h,
                            onChange: (V) => K("h", V),
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
                            value: x.s,
                            onChange: (V) => K("s", V),
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
                            value: x.l,
                            onChange: (V) => K("l", V),
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
                        onChange: (V) => {
                          const P = Math.max(
                            0,
                            Math.min(100, Math.round(V))
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
          children: /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `land-picker-color-display ${r}`,
              style: N
            }
          )
        }
      )
    }
  );
}, Lm = ({
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
  const [p, f] = O(!1), [g, j] = O(l ? new Date(l) : null), [w, x] = O(""), [v, k] = O(""), [y, b] = O(!1);
  z(() => {
    e && p && f(!1);
  }, [e, p]);
  const m = U((P, R) => {
    if (!P) return "";
    const E = P.getFullYear(), Y = P.getMonth() + 1, G = P.getDate();
    switch (R) {
      case "year":
        return `${E}年`;
      case "month":
        return `${E}年${Y}月`;
      case "quarter":
        const _ = Math.ceil(Y / 3);
        return `${E}年第${_}季度`;
      case "week":
        const J = new Date(E, 0, 1), ce = Math.floor((P.getTime() - J.getTime()) / (24 * 60 * 60 * 1e3)), se = Math.ceil((ce + J.getDay() + 1) / 7);
        return `${E}年第${se}周`;
      case "date":
      default:
        return `${E}-${Y.toString().padStart(2, "0")}-${G.toString().padStart(2, "0")}`;
    }
  }, []), L = U((P) => {
    if (!P.trim()) return null;
    const R = /* @__PURE__ */ new Date(), E = R.getFullYear(), Y = R.getMonth() + 1;
    R.getDate();
    const G = [
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
          year: E,
          month: parseInt(_[1]),
          day: parseInt(_[2])
        })
      },
      // DD日
      {
        pattern: /^(\d{1,2})日$/,
        extract: (_) => ({
          year: E,
          month: Y,
          day: parseInt(_[1])
        })
      }
    ];
    for (const { pattern: _, extract: J } of G) {
      const ce = P.match(_);
      if (ce)
        try {
          const { year: se, month: ue, day: be } = J(ce), Se = new Date(se, ue - 1, be);
          if (Se.getFullYear() === se && Se.getMonth() === ue - 1 && Se.getDate() === be)
            return Se;
        } catch {
          continue;
        }
    }
    return null;
  }, []);
  z(() => {
    x(l ? m(new Date(l), c) : "");
  }, [l, c, m]);
  const C = U((...P) => {
    if (e) return;
    let R = null;
    switch (c) {
      case "year":
        const E = P[0];
        R = new Date(E, 0, 1);
        break;
      case "month":
        const [Y, G] = P;
        R = new Date(G, Y - 1, 1);
        break;
      case "quarter":
        const [_, J] = P, ce = (_ - 1) * 3;
        R = new Date(J, ce, 1);
        break;
      case "week":
        R = P[0];
        break;
      case "date":
      default:
        const [se, ue, be] = P;
        R = new Date(be, ue - 1, se);
        break;
    }
    j(R), u || (x(m(R, c)), t == null || t(R), f(!1));
  }, [c, u, m, t, e]), T = U(() => {
    e || (g && (x(m(g, c)), t == null || t(g)), f(!1));
  }, [g, c, m, t, e]), N = U(() => {
    e || (j(l ? new Date(l) : null), f(!1));
  }, [l, e]), B = U((P) => {
    if (e) {
      f(!1);
      return;
    }
    !P && u && j(l ? new Date(l) : null), f(P);
  }, [u, l, e]), S = U(() => {
    e || (j(null), x(""), k(""), t == null || t(null));
  }, [t, e]), A = U((P, R) => {
    e || k(P);
  }, [e]), $ = U(() => {
    e || (h && c === "date" ? (b(!0), k(w)) : f(!0));
  }, [e, h, c, w]), I = U(() => {
    if (!e && h && c === "date") {
      if (b(!1), v.trim()) {
        const P = L(v);
        P ? (j(P), x(m(P, c)), t == null || t(P)) : x(m(g, c));
      } else
        j(null), x(""), t == null || t(null);
      k("");
    }
  }, [h, c, v, L, g, m, t, e]), F = U((P) => {
    if (!e && h && c === "date" && P.trim()) {
      const R = L(P);
      R && (j(R), x(m(R, c)), t == null || t(R), b(!1), k(""));
    }
  }, [h, c, L, m, t, e]), D = z(() => {
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
  }, [c, d]), K = z(() => {
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
  }, [c]), V = z(() => {
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
          onOpen: B,
          dropContent: /* @__PURE__ */ s.jsxs("div", { className: "land-date-picker-dropdown-content", children: [
            /* @__PURE__ */ s.jsx(
              _0,
              {
                viewMode: K,
                ...V,
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
                  onClick: N
                }
              ),
              /* @__PURE__ */ s.jsx(
                me,
                {
                  text: "确定",
                  type: "background",
                  className: "land-date-picker-dropdown-confirm-button",
                  onClick: T
                }
              )
            ] })
          ] }),
          ...o,
          children: /* @__PURE__ */ s.jsxs("div", { className: `land-date-picker-input ${w ? "" : "empty"} ${y ? "input-mode" : ""} `, children: [
            /* @__PURE__ */ s.jsx(
              zn,
              {
                type: "transparent",
                className: "land-date-picker-input-value",
                placeholder: D,
                value: y ? v : w,
                onFocus: $,
                onBlur: I,
                onChange: h && c === "date" && !e ? A : void 0,
                onClear: S,
                onEnter: F,
                ...i
              }
            ),
            /* @__PURE__ */ s.jsx(q, { name: "calendar", className: "land-date-picker-icon" })
          ] })
        }
      )
    }
  );
}, wm = ({
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
  onClose: g,
  onSubmit: j,
  onCancel: w,
  children: x,
  wrapStyle: v,
  wrapClassName: k,
  contentStyle: y,
  contentClassName: b,
  bodyStyle: m,
  bodyClassName: L,
  maskStyle: C
}) => {
  const T = z(() => {
    let N = "320px";
    switch (f) {
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
  }, [f]);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-dialog ${e ? "show" : ""} ${k}`,
      style: {
        "--land-dialog-content-width": T,
        ...v
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
            className: `land-dialog-content ${b}`,
            style: {
              ...y,
              width: T
            },
            children: [
              i || (n || g || r || o ? /* @__PURE__ */ s.jsxs("div", { className: "land-dialog-header", children: [
                r || /* @__PURE__ */ s.jsx("div", { className: "land-dialog-header-title", children: n }),
                o || g && /* @__PURE__ */ s.jsx("div", { className: "land-dialog-header-close", children: /* @__PURE__ */ s.jsx(q, { name: "close", onClick: g, size: 24 }) })
              ] }) : null),
              a && /* @__PURE__ */ s.jsx(Xe, {}),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `land-dialog-body ${L}`,
                  style: m,
                  children: x
                }
              ),
              u && /* @__PURE__ */ s.jsx(Xe, {}),
              d || /* @__PURE__ */ s.jsxs("div", { className: "land-dialog-footer", children: [
                l || (h || p || w || j) && /* @__PURE__ */ s.jsxs("div", { className: "land-dialog-footer-btn", children: [
                  w && /* @__PURE__ */ s.jsx(me, { type: "fill", status: "default", onClick: w, children: h }),
                  j && /* @__PURE__ */ s.jsx(
                    me,
                    {
                      type: "background",
                      status: "primary",
                      onClick: j,
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
}, ym = ({
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
  cancelDisabled: g,
  submitDisabled: j,
  cancelButtonProps: w,
  submitButtonProps: x,
  minWidth: v,
  maxWidth: k,
  size: y = "auto",
  onClose: b,
  onSubmit: m,
  onCancel: L,
  children: C,
  wrapStyle: T,
  wrapClassName: N = "",
  contentStyle: B,
  contentClassName: S = "",
  bodyStyle: A,
  bodyClassName: $ = "",
  maskStyle: I
}) => {
  const F = z(() => {
    let V = "320px";
    if (t === "bottom")
      V = "100%";
    else
      switch (y) {
        case "small":
          V = "32%";
          break;
        case "medium":
          V = "60%";
          break;
        case "large":
          V = "80%";
          break;
        case "auto":
          V = "fit-content";
          break;
      }
    return V;
  }, [y, t]), D = z(() => {
    let V = "100%";
    if (t === "bottom")
      switch (y) {
        case "small":
          V = "30%";
          break;
        case "medium":
          V = "60%";
          break;
        case "large":
          V = "90%";
          break;
        case "auto":
          V = "fit-content";
          break;
      }
    return V;
  }, [t]), K = z(() => b && (r || a || o), [b, a, o]);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-drawer ${e ? "show" : ""} ${t} ${N}`,
      style: T,
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
            className: `land-drawer-content ${S}`,
            style: {
              width: F,
              height: D,
              minWidth: v,
              maxWidth: k,
              ...B
            },
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "land-drawer-header-wrapper", children: [
                b && /* @__PURE__ */ s.jsx("div", { className: "land-drawer-header-close", children: /* @__PURE__ */ s.jsx(q, { name: "close", onClick: b, strokeWidth: 3 }) }),
                K && /* @__PURE__ */ s.jsx(Xe, { direction: "column", lineLength: "36px", gap: 12 }),
                a || (r || b || o || i ? /* @__PURE__ */ s.jsxs("div", { className: "land-drawer-header", children: [
                  o || /* @__PURE__ */ s.jsx("div", { className: "land-drawer-header-title", children: r }),
                  i && /* @__PURE__ */ s.jsx("div", { className: "land-drawer-header-right", children: i })
                ] }) : null)
              ] }),
              c && (a || b || o || i) && /* @__PURE__ */ s.jsx(Xe, {}),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `land-drawer-body ${$}`,
                  style: A,
                  children: C
                }
              ),
              h && (u || m || L || l || d) && /* @__PURE__ */ s.jsx(Xe, {}),
              (u || m || L || l || d) && /* @__PURE__ */ s.jsxs("div", { className: "land-drawer-footer", children: [
                d || (p || f || L || m) && /* @__PURE__ */ s.jsxs("div", { className: "land-drawer-footer-btn", children: [
                  L && /* @__PURE__ */ s.jsx(
                    me,
                    {
                      type: "fill",
                      disabled: g,
                      status: "default",
                      onClick: L,
                      ...w,
                      children: p
                    }
                  ),
                  m && /* @__PURE__ */ s.jsx(
                    me,
                    {
                      type: "background",
                      disabled: j,
                      status: "primary",
                      onClick: m,
                      ...x,
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
}, X0 = (e, t) => {
  let n;
  return function(...o) {
    const i = () => {
      clearTimeout(n), e(...o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  };
}, Cm = ({
  line: e = 1,
  text: t,
  children: n,
  open: r = !0,
  style: o,
  className: i,
  popoverProps: a,
  setMaxWidth: c
}) => {
  const l = ee(null), [d, u] = O(!1), [h, p] = O(0), f = t || n || "", g = U(() => {
    const x = l.current;
    if (x)
      if (e === 1) {
        const v = x.offsetWidth < x.scrollWidth;
        p(x.offsetWidth), u(v);
      } else {
        const v = x.offsetHeight < x.scrollHeight;
        p(x.offsetWidth), u(v);
      }
  }, [e]), j = U(
    X0(g, 100),
    [g]
  );
  X(() => {
    const x = l.current;
    if (!x) return;
    const v = new ResizeObserver(() => {
      j();
    });
    v.observe(x);
    let k = x.parentElement;
    const y = [];
    for (; k && k !== document.body; ) {
      const L = new ResizeObserver(() => {
        j();
      });
      L.observe(k), y.push(L), k = k.parentElement;
    }
    const b = () => {
      j();
    };
    window.addEventListener("resize", b);
    const m = new MutationObserver((L) => {
      let C = !1;
      L.forEach((T) => {
        if (T.type === "childList" || T.type === "attributes") {
          const N = T.target;
          (x.contains(N) || N.contains(x) || x.parentElement && x.parentElement.contains(N)) && (C = !0);
        }
      }), C && j();
    });
    return m.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["style", "class"]
    }), g(), () => {
      v.disconnect(), y.forEach((L) => L.disconnect()), window.removeEventListener("resize", b), m.disconnect();
    };
  }, [g, j, f]), X(() => {
    const x = setTimeout(() => {
      g();
    }, 0);
    return () => clearTimeout(x);
  }, [f, g]);
  const w = /* @__PURE__ */ s.jsx(
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
  return !d || !r ? w : /* @__PURE__ */ s.jsx(
    Ae,
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
      children: w
    }
  );
}, Mm = ({
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
), bm = ({ children: e, style: t, className: n }) => /* @__PURE__ */ s.jsx("div", { className: `land-footer ${n}`, style: t, children: e });
var qe = /* @__PURE__ */ ((e) => (e.ColumnFit = "column-fit", e.ColumnFill = "column-fill", e.RowFit = "row-fit", e.RowFill = "row-fill", e.ColumnRepeat = "column-repeat", e.RowRepeat = "row-repeat", e.Default = "default", e))(qe || {});
const Sm = ({
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
  const d = z(() => {
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
const Dc = ({
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
  const g = ee(null), j = ee(null);
  return X(() => {
    f && e && j.current && j.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [e, f, n]), /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: g,
      className: `land-menu ${p} ${n === "column" ? "column" : ""} ${o ? "borderBottom" : ""} ${f ? "scroll-to-view" : ""}`,
      style: h,
      children: t == null ? void 0 : t.map((w, x) => /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: e === w.key ? j : null,
          className: `land-menu-item ${w.clickType === $n.SIMPLE ? "simple" : ""} ${w.clickType === $n.DISABLED || w.disabled ? "disabled" : ""}`,
          style: d,
          children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                role: "button",
                className: `land-menu-link ${n === "column" ? "column" : ""} ${r === "column" && !w.titleDeputy ? "titleColumn" : ""} ${e === w.key && !(w.titleDeputy || i) ? "active" : ""} ${w.titleDeputy || i ? "title-deputy" : ""} ${u}`,
                onClick: (v) => {
                  w.titleDeputy || i || w.clickType === $n.DISABLED || w.disabled || (v.stopPropagation(), a == null || a(w));
                },
                children: [
                  typeof w.icon == "string" ? /* @__PURE__ */ s.jsx("img", { src: w.icon, className: "land-menu-icon" }) : w.icon,
                  /* @__PURE__ */ s.jsxs("div", { className: "land-menu-title-wrap", children: [
                    /* @__PURE__ */ s.jsx("p", { className: `land-menu-title ${w.titleDeputy || i ? "title-deputy" : ""}`, "data-title": w.label, children: w.label }),
                    w.subText && /* @__PURE__ */ s.jsx("span", { className: "land-menu-sub-title", children: w.subText })
                  ] }),
                  w.isNew && /* @__PURE__ */ s.jsx("i", { className: "land-menu-new", children: typeof w.isNew == "boolean" ? "NEW" : w.isNew })
                ]
              },
              w.key
            ),
            w.dropData && /* @__PURE__ */ s.jsx("div", { className: `land-menu-drop-wrap ${w.open ? "open" : ""}`, children: /* @__PURE__ */ s.jsx("div", { className: "land-menu-drop", children: /* @__PURE__ */ s.jsx(
              Dc,
              {
                data: w.dropData,
                onChange: (v) => c == null ? void 0 : c(v, w),
                direction: "column",
                titleDirection: r,
                scrollToView: f,
                ...l
              }
            ) }) })
          ]
        },
        w.key ?? x
      ))
    }
  );
}, Nm = ({
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
  className: g = ""
}) => {
  var x;
  const [j, w] = O(!1);
  return X(() => {
    const v = () => w(!1), k = () => w(!1);
    return window.addEventListener("scroll", v, { passive: !0 }), window.addEventListener("resize", k, { passive: !0 }), () => {
      window.removeEventListener("scroll", v), window.removeEventListener("resize", k);
    };
  }, []), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-header ${t ? "fixed" : ""} ${n ? "filter" : ""} ${r ? "border-bottom" : ""} ${o ? "applications" : ""} ${g}`,
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
              onClick: (v) => v.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsx(q, { name: "application" }),
                /* @__PURE__ */ s.jsx("div", { className: "land-application-drop", children: o })
              ]
            }
          ),
          typeof i == "string" ? /* @__PURE__ */ s.jsx("img", { src: i }) : i,
          l && i && a && /* @__PURE__ */ s.jsx(Xe, { direction: "column", lineLength: "24px" }),
          a
        ] }),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `land-header-nav ${j ? "showMobileNav" : ""}`,
            style: {
              justifyContent: d
            },
            children: u && /* @__PURE__ */ s.jsx(
              Dc,
              {
                border: !1,
                ...u,
                onChange: (v) => {
                  var k;
                  (k = u.onChange) == null || k.call(u, v), w(!1);
                },
                onDropChange: (v, k) => {
                  var y;
                  (y = u.onDropChange) == null || y.call(u, v, k), w(!1);
                }
              }
            )
          }
        ),
        h && /* @__PURE__ */ s.jsx("div", { className: "land-header-right", children: h }),
        u && u.data && ((x = u.data) == null ? void 0 : x.length) > 0 && /* @__PURE__ */ s.jsx(
          me,
          {
            className: "land-mobile-toggle-button",
            icon: /* @__PURE__ */ s.jsx(q, { name: "more-line" }),
            type: "text",
            onClick: () => w(!j)
          }
        )
      ]
    }
  );
}, q0 = ({
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
), Vm = ({
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
  const d = ee(null), [u, h] = O("loading"), [p, f] = O(e), [g, j] = O("auto"), [w, x] = O(!1), [v, k] = O("idle");
  X(() => {
    h("loading"), f(e), x(!1), k("idle");
  }, [e]);
  const y = () => {
    w ? k("success") : h("success"), setTimeout(() => {
      w ? k("success") : h("success");
    }, 150), d.current && j(`${d.current.width / d.current.height}`);
  }, b = () => {
    w ? k("error") : (h("error"), l && !w ? (x(!0), k("loading"), f(l)) : c && typeof c == "string" && !w && (x(!0), k("loading"), f(c)));
  };
  X(() => {
    const N = d.current;
    if (!N) {
      h("idle"), setTimeout(() => {
        h("idle");
      }, 300);
      return;
    }
    return N.complete && (w ? k("success") : h("success"), setTimeout(() => {
      w ? k("success") : h("success");
    }, 150), j(`${d.current.width / d.current.height}`)), N.addEventListener("load", y), N.addEventListener("error", b), () => {
      N == null || N.removeEventListener("load", y), N == null || N.removeEventListener("error", b);
    };
  }, [p, w]);
  const m = n || (u === "success" || v === "success" ? g : "1"), L = () => c && typeof c != "string" && u === "error" && (v === "error" || !l) ? c : u === "error" && (v === "error" || !l) && (!c || typeof c == "string") ? /* @__PURE__ */ s.jsx(y0, { type: "error", title: "加载失败", direction: "column", className: "land-image-alert", noBg: !0 }) : null, C = u === "loading" || w && v === "loading", T = p && (u === "success" || v === "success" || C);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-image ${C ? "loading" : u === "success" || v === "success" ? "success" : "error"} ${r ?? ""}`,
      style: {
        aspectRatio: m,
        ...a
      },
      children: [
        C && /* @__PURE__ */ s.jsx(
          q0,
          {
            width: "100%",
            height: "100%",
            radius: "var(--radius-m)",
            className: "land-image-skeleton"
          }
        ),
        L(),
        T && /* @__PURE__ */ s.jsx(
          "img",
          {
            ref: d,
            alt: t,
            src: p,
            className: `land-image-img ${u === "success" || v === "success" ? "loaded" : ""} ${o}`,
            style: {
              opacity: u === "success" || v === "success" ? 1 : 0,
              ...i
            }
          }
        )
      ]
    }
  );
}, Tm = ({ children: e, style: t, className: n }) => /* @__PURE__ */ s.jsx("div", { className: `land-layout ${n}`, style: t, children: e });
var Pe = function() {
  return Pe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Pe.apply(this, arguments);
};
function $t(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function z0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var J0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Q0 = /* @__PURE__ */ z0(
  function(e) {
    return J0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), de = "-ms-", tn = "-moz-", ae = "-webkit-", Bc = "comm", Jn = "rule", _s = "decl", W0 = "@import", Fc = "@keyframes", e3 = "@layer", Oc = Math.abs, Ys = String.fromCharCode, qr = Object.assign;
function t3(e, t) {
  return we(e, 0) ^ 45 ? (((t << 2 ^ we(e, 0)) << 2 ^ we(e, 1)) << 2 ^ we(e, 2)) << 2 ^ we(e, 3) : 0;
}
function _c(e) {
  return e.trim();
}
function ze(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, n) {
  return e.replace(t, n);
}
function An(e, t, n) {
  return e.indexOf(t, n);
}
function we(e, t) {
  return e.charCodeAt(t) | 0;
}
function At(e, t, n) {
  return e.slice(t, n);
}
function Ue(e) {
  return e.length;
}
function Yc(e) {
  return e.length;
}
function zt(e, t) {
  return t.push(e), e;
}
function n3(e, t) {
  return e.map(t).join("");
}
function Ri(e, t) {
  return e.filter(function(n) {
    return !ze(n, t);
  });
}
var Qn = 1, Rt = 1, Zc = 0, Fe = 0, ke = 0, Yt = "";
function Wn(e, t, n, r, o, i, a, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Qn, column: Rt, length: a, return: "", siblings: c };
}
function tt(e, t) {
  return qr(Wn("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Lt(e) {
  for (; e.root; )
    e = tt(e.root, { children: [e] });
  zt(e, e.siblings);
}
function r3() {
  return ke;
}
function s3() {
  return ke = Fe > 0 ? we(Yt, --Fe) : 0, Rt--, ke === 10 && (Rt = 1, Qn--), ke;
}
function Ze() {
  return ke = Fe < Zc ? we(Yt, Fe++) : 0, Rt++, ke === 10 && (Rt = 1, Qn++), ke;
}
function ft() {
  return we(Yt, Fe);
}
function Rn() {
  return Fe;
}
function er(e, t) {
  return At(Yt, e, t);
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
function o3(e) {
  return Qn = Rt = 1, Zc = Ue(Yt = e), Fe = 0, [];
}
function i3(e) {
  return Yt = "", e;
}
function Cr(e) {
  return _c(er(Fe - 1, Jr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function a3(e) {
  for (; (ke = ft()) && ke < 33; )
    Ze();
  return zr(e) > 2 || zr(ke) > 3 ? "" : " ";
}
function c3(e, t) {
  for (; --t && Ze() && !(ke < 48 || ke > 102 || ke > 57 && ke < 65 || ke > 70 && ke < 97); )
    ;
  return er(e, Rn() + (t < 6 && ft() == 32 && Ze() == 32));
}
function Jr(e) {
  for (; Ze(); )
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
        Ze();
        break;
    }
  return Fe;
}
function l3(e, t) {
  for (; Ze() && e + ke !== 57; )
    if (e + ke === 84 && ft() === 47)
      break;
  return "/*" + er(t, Fe - 1) + "*" + Ys(e === 47 ? e : Ze());
}
function d3(e) {
  for (; !zr(ft()); )
    Ze();
  return er(e, Fe);
}
function u3(e) {
  return i3(In("", null, null, null, [""], e = o3(e), 0, [0], e));
}
function In(e, t, n, r, o, i, a, c, l) {
  for (var d = 0, u = 0, h = a, p = 0, f = 0, g = 0, j = 1, w = 1, x = 1, v = 0, k = "", y = o, b = i, m = r, L = k; w; )
    switch (g = v, v = Ze()) {
      case 40:
        if (g != 108 && we(L, h - 1) == 58) {
          An(L += te(Cr(v), "&", "&\f"), "&\f", Oc(d ? c[d - 1] : 0)) != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        L += Cr(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        L += a3(g);
        break;
      case 92:
        L += c3(Rn() - 1, 7);
        continue;
      case 47:
        switch (ft()) {
          case 42:
          case 47:
            zt(h3(l3(Ze(), Rn()), t, n, l), l);
            break;
          default:
            L += "/";
        }
        break;
      case 123 * j:
        c[d++] = Ue(L) * x;
      case 125 * j:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            w = 0;
          case 59 + u:
            x == -1 && (L = te(L, /\f/g, "")), f > 0 && Ue(L) - h && zt(f > 32 ? Pi(L + ";", r, n, h - 1, l) : Pi(te(L, " ", "") + ";", r, n, h - 2, l), l);
            break;
          case 59:
            L += ";";
          default:
            if (zt(m = Ii(L, t, n, d, u, o, c, k, y = [], b = [], h, i), i), v === 123)
              if (u === 0)
                In(L, t, m, m, y, i, h, c, b);
              else
                switch (p === 99 && we(L, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    In(e, m, m, r && zt(Ii(e, m, m, 0, 0, o, c, k, o, y = [], h, b), b), o, b, h, c, r ? y : b);
                    break;
                  default:
                    In(L, m, m, m, [""], b, 0, c, b);
                }
        }
        d = u = f = 0, j = x = 1, k = L = "", h = a;
        break;
      case 58:
        h = 1 + Ue(L), f = g;
      default:
        if (j < 1) {
          if (v == 123)
            --j;
          else if (v == 125 && j++ == 0 && s3() == 125)
            continue;
        }
        switch (L += Ys(v), v * j) {
          case 38:
            x = u > 0 ? 1 : (L += "\f", -1);
            break;
          case 44:
            c[d++] = (Ue(L) - 1) * x, x = 1;
            break;
          case 64:
            ft() === 45 && (L += Cr(Ze())), p = ft(), u = h = Ue(k = L += d3(Rn())), v++;
            break;
          case 45:
            g === 45 && Ue(L) == 2 && (j = 0);
        }
    }
  return i;
}
function Ii(e, t, n, r, o, i, a, c, l, d, u, h) {
  for (var p = o - 1, f = o === 0 ? i : [""], g = Yc(f), j = 0, w = 0, x = 0; j < r; ++j)
    for (var v = 0, k = At(e, p + 1, p = Oc(w = a[j])), y = e; v < g; ++v)
      (y = _c(w > 0 ? f[v] + " " + k : te(k, /&\f/g, f[v]))) && (l[x++] = y);
  return Wn(e, t, n, o === 0 ? Jn : c, l, d, u, h);
}
function h3(e, t, n, r) {
  return Wn(e, t, n, Bc, Ys(r3()), At(e, 2, -2), 0, r);
}
function Pi(e, t, n, r, o) {
  return Wn(e, t, n, _s, At(e, 0, r), At(e, r + 1, -1), r, o);
}
function Uc(e, t, n) {
  switch (t3(e, t)) {
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
      if (!ze(e, /flex-|baseline/)) return de + "grid-column-align" + At(e, t) + e;
      break;
    case 2592:
    case 3360:
      return de + te(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, ze(r.props, /grid-\w+-end/);
      }) ? ~An(e + (n = n[t].value), "span", 0) ? e : de + te(e, "-start", "") + e + de + "grid-row-span:" + (~An(n, "span", 0) ? ze(n, /\d+/) : +ze(n, /\d+/) - +ze(e, /\d+/)) + ";" : de + te(e, "-start", "") + e;
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
      if (Ue(e) - 1 - t > 6)
        switch (we(e, t + 1)) {
          case 109:
            if (we(e, t + 4) !== 45)
              break;
          case 102:
            return te(e, /(.+:)(.+)-([^]+)/, "$1" + ae + "$2-$3$1" + tn + (we(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~An(e, "stretch", 0) ? Uc(te(e, "stretch", "fill-available"), t, n) + e : e;
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
function p3(e, t, n, r) {
  switch (e.type) {
    case e3:
      if (e.children.length) break;
    case W0:
    case _s:
      return e.return = e.return || e.value;
    case Bc:
      return "";
    case Fc:
      return e.return = e.value + "{" + Yn(e.children, r) + "}";
    case Jn:
      if (!Ue(e.value = e.props.join(","))) return "";
  }
  return Ue(n = Yn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function f3(e) {
  var t = Yc(e);
  return function(n, r, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, i) || "";
    return a;
  };
}
function m3(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function g3(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case _s:
        e.return = Uc(e.value, e.length, n);
        return;
      case Fc:
        return Yn([tt(e, { value: te(e.value, "@", "@" + ae) })], r);
      case Jn:
        if (e.length)
          return n3(n = e.props, function(o) {
            switch (ze(o, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Lt(tt(e, { props: [te(o, /:(read-\w+)/, ":" + tn + "$1")] })), Lt(tt(e, { props: [o] })), qr(e, { props: Ri(n, r) });
                break;
              case "::placeholder":
                Lt(tt(e, { props: [te(o, /:(plac\w+)/, ":" + ae + "input-$1")] })), Lt(tt(e, { props: [te(o, /:(plac\w+)/, ":" + tn + "$1")] })), Lt(tt(e, { props: [te(o, /:(plac\w+)/, de + "input-$1")] })), Lt(tt(e, { props: [o] })), qr(e, { props: Ri(n, r) });
                break;
            }
            return "";
          });
    }
}
var x3 = {
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
}, gt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Gc = "active", Kc = "data-styled-version", tr = "6.1.18", Zs = `/*!sc*/
`, Zn = typeof window < "u" && typeof document < "u", v3 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ei = /invalid hook call/i, yn = /* @__PURE__ */ new Set(), j3 = function(e, t) {
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
        Ei.test(a) ? (i = !1, yn.delete(r)) : o.apply(void 0, $t([a], c, !1));
      }, ee(), i && !yn.has(r) && (console.warn(r), yn.add(r));
    } catch (a) {
      Ei.test(a.message) && yn.delete(r);
    } finally {
      console.error = o;
    }
  }
}, nr = Object.freeze([]), It = Object.freeze({});
function k3(e, t, n) {
  return n === void 0 && (n = It), e.theme !== n.theme && e.theme || t || n.theme;
}
var Qr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), L3 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, w3 = /(^-|-$)/g;
function Hi(e) {
  return e.replace(L3, "-").replace(w3, "");
}
var y3 = /(a)(d)/gi, Cn = 52, Di = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Wr(e) {
  var t, n = "";
  for (t = Math.abs(e); t > Cn; t = t / Cn | 0) n = Di(t % Cn) + n;
  return (Di(t % Cn) + n).replace(y3, "$1-$2");
}
var Mr, Xc = 5381, ct = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, qc = function(e) {
  return ct(Xc, e);
};
function C3(e) {
  return Wr(qc(e) >>> 0);
}
function zc(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function br(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Jc = typeof Symbol == "function" && Symbol.for, Qc = Jc ? Symbol.for("react.memo") : 60115, M3 = Jc ? Symbol.for("react.forward_ref") : 60112, b3 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, S3 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Wc = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, N3 = ((Mr = {})[M3] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Mr[Qc] = Wc, Mr);
function Bi(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Qc ? Wc : "$$typeof" in e ? N3[e.$$typeof] : b3;
  var t;
}
var V3 = Object.defineProperty, T3 = Object.getOwnPropertyNames, Fi = Object.getOwnPropertySymbols, $3 = Object.getOwnPropertyDescriptor, A3 = Object.getPrototypeOf, Oi = Object.prototype;
function el(e, t, n) {
  if (typeof t != "string") {
    if (Oi) {
      var r = A3(t);
      r && r !== Oi && el(e, r, n);
    }
    var o = T3(t);
    Fi && (o = o.concat(Fi(t)));
    for (var i = Bi(e), a = Bi(t), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!(l in S3 || n && n[l] || a && l in a || i && l in i)) {
        var d = $3(t, l);
        try {
          V3(e, l, d);
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
function Us(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ut(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function _i(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Et(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function es(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Et(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = es(e[r], t[r]);
  else if (Et(t)) for (var r in t) e[r] = es(e[r], t[r]);
  return e;
}
function Gs(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var R3 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function I3() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
function Zt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(I3.apply(void 0, $t([R3[e]], t, !1)).trim());
}
var P3 = function() {
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
}(), E3 = 1 << 30, Pn = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new Map(), En = 1, Mn = function(e) {
  if (Pn.has(e)) return Pn.get(e);
  for (; Un.has(En); ) En++;
  var t = En++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > E3)) throw Zt(16, "".concat(t));
  return Pn.set(e, t), Un.set(t, e), t;
}, H3 = function(e, t) {
  En = t + 1, Pn.set(e, t), Un.set(t, e);
}, D3 = "style[".concat(gt, "][").concat(Kc, '="').concat(tr, '"]'), B3 = new RegExp("^".concat(gt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), F3 = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++) (r = o[i]) && e.registerName(t, r);
}, O3 = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Zs), o = [], i = 0, a = r.length; i < a; i++) {
    var c = r[i].trim();
    if (c) {
      var l = c.match(B3);
      if (l) {
        var d = 0 | parseInt(l[1], 10), u = l[2];
        d !== 0 && (H3(u, d), F3(e, u, l[3]), e.getTag().insertRules(d, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, Yi = function(e) {
  for (var t = document.querySelectorAll(D3), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(gt) !== Gc && (O3(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function _3() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var tl = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var l = Array.from(c.querySelectorAll("style[".concat(gt, "]")));
    return l[l.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(gt, Gc), r.setAttribute(Kc, tr);
  var a = _3();
  return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
}, Y3 = function() {
  function e(t) {
    this.element = tl(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
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
}(), Z3 = function() {
  function e(t) {
    this.element = tl(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), U3 = function() {
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
}(), Zi = Zn, G3 = { isServer: !Zn, useCSSOMInjection: !v3 }, nl = function() {
  function e(t, n, r) {
    t === void 0 && (t = It), n === void 0 && (n = {});
    var o = this;
    this.options = Pe(Pe({}, G3), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Zn && Zi && (Zi = !1, Yi(this)), Gs(this, function() {
      return function(i) {
        for (var a = i.getTag(), c = a.length, l = "", d = function(h) {
          var p = function(x) {
            return Un.get(x);
          }(h);
          if (p === void 0) return "continue";
          var f = i.names.get(p), g = a.getGroup(h);
          if (f === void 0 || !f.size || g.length === 0) return "continue";
          var j = "".concat(gt, ".g").concat(h, '[id="').concat(p, '"]'), w = "";
          f !== void 0 && f.forEach(function(x) {
            x.length > 0 && (w += "".concat(x, ","));
          }), l += "".concat(g).concat(j, '{content:"').concat(w, '"}').concat(Zs);
        }, u = 0; u < c; u++) d(u);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Mn(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Zn && Yi(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Pe(Pe({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new U3(o) : r ? new Y3(o) : new Z3(o);
    }(this.options), new P3(t)));
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
}(), K3 = /&/g, X3 = /^\s*\/\/.*$/gm;
function rl(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = rl(n.children, t)), n;
  });
}
function q3(e) {
  var t, n, r, o = It, i = o.options, a = i === void 0 ? It : i, c = o.plugins, l = c === void 0 ? nr : c, d = function(p, f, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : p;
  }, u = l.slice();
  u.push(function(p) {
    p.type === Jn && p.value.includes("&") && (p.props[0] = p.props[0].replace(K3, n).replace(r, d));
  }), a.prefix && u.push(g3), u.push(p3);
  var h = function(p, f, g, j) {
    f === void 0 && (f = ""), g === void 0 && (g = ""), j === void 0 && (j = "&"), t = j, n = f, r = new RegExp("\\".concat(n, "\\b"), "g");
    var w = p.replace(X3, ""), x = u3(g || f ? "".concat(g, " ").concat(f, " { ").concat(w, " }") : w);
    a.namespace && (x = rl(x, a.namespace));
    var v = [];
    return Yn(x, f3(u.concat(m3(function(k) {
      return v.push(k);
    })))), v;
  };
  return h.hash = l.length ? l.reduce(function(p, f) {
    return f.name || Zt(15), ct(p, f.name);
  }, Xc).toString() : "", h;
}
var z3 = new nl(), ts = q3(), sl = Le.createContext({ shouldForwardProp: void 0, styleSheet: z3, stylis: ts });
sl.Consumer;
Le.createContext(void 0);
function Ui() {
  return Me(sl);
}
var Gi = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = ts);
      var a = r.name + i.hash;
      o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Gs(this, function() {
      throw Zt(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ts), this.name + t.hash;
  }, e;
}(), J3 = function(e) {
  return e >= "A" && e <= "Z";
};
function Ki(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    J3(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var ol = function(e) {
  return e == null || e === !1 || e === "";
}, il = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !ol(i) && (Array.isArray(i) && i.isCss || Pt(i) ? r.push("".concat(Ki(o), ":"), i, ";") : Et(i) ? r.push.apply(r, $t($t(["".concat(o, " {")], il(i), !1), ["}"], !1)) : r.push("".concat(Ki(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in x3 || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function mt(e, t, n, r) {
  if (ol(e)) return [];
  if (Us(e)) return [".".concat(e.styledComponentId)];
  if (Pt(e)) {
    if (!Pt(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Gi || Et(o) || o === null || console.error("".concat(zc(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), mt(o, t, n, r);
  }
  var i;
  return e instanceof Gi ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Et(e) ? il(e) : Array.isArray(e) ? Array.prototype.concat.apply(nr, e.map(function(a) {
    return mt(a, t, n, r);
  })) : [e.toString()];
}
function Q3(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Pt(n) && !Us(n)) return !1;
  }
  return !0;
}
var W3 = qc(tr), em = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Q3(t), this.componentId = n, this.baseHash = ct(W3, n), this.baseStyle = r, nl.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = ut(o, this.staticRulesId);
    else {
      var i = _i(mt(this.rules, t, n, r)), a = Wr(ct(this.baseHash, i) >>> 0);
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
          var p = _i(mt(h, t, n, r));
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
}(), al = Le.createContext(void 0);
al.Consumer;
var Sr = {}, Xi = /* @__PURE__ */ new Set();
function tm(e, t, n) {
  var r = Us(e), o = e, i = !br(e), a = t.attrs, c = a === void 0 ? nr : a, l = t.componentId, d = l === void 0 ? function(y, b) {
    var m = typeof y != "string" ? "sc" : Hi(y);
    Sr[m] = (Sr[m] || 0) + 1;
    var L = "".concat(m, "-").concat(C3(tr + m + Sr[m]));
    return b ? "".concat(b, "-").concat(L) : L;
  }(t.displayName, t.parentComponentId) : l, u = t.displayName, h = u === void 0 ? function(y) {
    return br(y) ? "styled.".concat(y) : "Styled(".concat(zc(y), ")");
  }(e) : u, p = t.displayName && t.componentId ? "".concat(Hi(t.displayName), "-").concat(t.componentId) : t.componentId || d, f = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var j = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var w = t.shouldForwardProp;
      g = function(y, b) {
        return j(y, b) && w(y, b);
      };
    } else g = j;
  }
  var x = new em(n, p, r ? o.componentStyle : void 0);
  function v(y, b) {
    return function(m, L, C) {
      var T = m.attrs, N = m.componentStyle, B = m.defaultProps, S = m.foldedComponentIds, A = m.styledComponentId, $ = m.target, I = Le.useContext(al), F = Ui(), D = m.shouldForwardProp || F.shouldForwardProp;
      process.env.NODE_ENV !== "production" && ao(A);
      var K = k3(L, I, B) || It, V = function(_, J, ce) {
        for (var se, ue = Pe(Pe({}, J), { className: void 0, theme: ce }), be = 0; be < _.length; be += 1) {
          var Se = Pt(se = _[be]) ? se(ue) : se;
          for (var Ve in Se) ue[Ve] = Ve === "className" ? ut(ue[Ve], Se[Ve]) : Ve === "style" ? Pe(Pe({}, ue[Ve]), Se[Ve]) : Se[Ve];
        }
        return J.className && (ue.className = ut(ue.className, J.className)), ue;
      }(T, L, K), P = V.as || $, R = {};
      for (var E in V) V[E] === void 0 || E[0] === "$" || E === "as" || E === "theme" && V.theme === K || (E === "forwardedAs" ? R.as = V.forwardedAs : D && !D(E, P) || (R[E] = V[E], D || process.env.NODE_ENV !== "development" || Q0(E) || Xi.has(E) || !Qr.has(P) || (Xi.add(E), console.warn('styled-components: it looks like an unknown prop "'.concat(E, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Y = function(_, J) {
        var ce = Ui(), se = _.generateAndInjectStyles(J, ce.styleSheet, ce.stylis);
        return process.env.NODE_ENV !== "production" && ao(se), se;
      }(N, V);
      process.env.NODE_ENV !== "production" && m.warnTooManyClasses && m.warnTooManyClasses(Y);
      var G = ut(S, A);
      return Y && (G += " " + Y), V.className && (G += " " + V.className), R[br(P) && !Qr.has(P) ? "class" : "className"] = G, C && (R.ref = C), Qi(P, R);
    }(k, y, b);
  }
  v.displayName = h;
  var k = Le.forwardRef(v);
  return k.attrs = f, k.componentStyle = x, k.displayName = h, k.shouldForwardProp = g, k.foldedComponentIds = r ? ut(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = p, k.target = r ? o.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(y) {
    this._foldedDefaultProps = r ? function(b) {
      for (var m = [], L = 1; L < arguments.length; L++) m[L - 1] = arguments[L];
      for (var C = 0, T = m; C < T.length; C++) es(b, T[C], !0);
      return b;
    }({}, o.defaultProps, y) : y;
  } }), process.env.NODE_ENV !== "production" && (j3(h, p), k.warnTooManyClasses = /* @__PURE__ */ function(y, b) {
    var m = {}, L = !1;
    return function(C) {
      if (!L && (m[C] = !0, Object.keys(m).length >= 200)) {
        var T = b ? ' with the id of "'.concat(b, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(y).concat(T, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), L = !0, m = {};
      }
    };
  }(h, p)), Gs(k, function() {
    return ".".concat(k.styledComponentId);
  }), i && el(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function qi(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var zi = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function nm(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Pt(e) || Et(e)) return zi(mt(qi(nr, $t([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? mt(r) : zi(mt(qi(r, t)));
}
function ns(e, t, n) {
  if (n === void 0 && (n = It), !t) throw Zt(1, t);
  var r = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, nm.apply(void 0, $t([o], i, !1)));
  };
  return r.attrs = function(o) {
    return ns(e, t, Pe(Pe({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return ns(e, t, Pe(Pe({}, n), o));
  }, r;
}
var cl = function(e) {
  return ns(tm, e);
}, ll = cl;
Qr.forEach(function(e) {
  ll[e] = cl(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var bn = "__sc-".concat(gt, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[bn] || (window[bn] = 0), window[bn] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[bn] += 1);
const $m = ({
  type: e = "info",
  text: t = "这是一条全局提示",
  simple: n = !1,
  style: r,
  className: o = ""
}) => /* @__PURE__ */ s.jsxs(
  rm,
  {
    className: `StyleToastContainer ${o} ${n ? "simple" : ""}`,
    style: {
      ...r
    },
    children: [
      !n && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        e === "info" && /* @__PURE__ */ s.jsx(q, { name: "info-fill", size: 20, color: "var(--color-primary-6)" }),
        e === "error" && /* @__PURE__ */ s.jsx(q, { name: "attention-fill", size: 20, color: "var(--color-red-6)" }),
        e === "fail" && /* @__PURE__ */ s.jsx(q, { name: "error-fill", size: 20, color: "var(--color-red-6)" }),
        e === "warn" && /* @__PURE__ */ s.jsx(q, { name: "attention-fill", size: 20, color: "var(--color-orange-6)" }),
        e === "success" && /* @__PURE__ */ s.jsx(q, { name: "check-fill", size: 20, color: "var(--color-green-6)" })
      ] }),
      t
    ]
  }
), rm = ll.div`
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
`, Am = ({
  current: e = 1,
  pageSize: t = 1,
  total: n = 1,
  showTotal: r = !1,
  showInput: o = !1,
  onChange: i,
  style: a,
  className: c = ""
}) => {
  var y, b;
  const [l, d] = O(e);
  X(() => {
    d(e);
  }, [e]);
  const { pageData: u, curStart: h, isStartPreOut: p, isStartNextOut: f } = z(() => {
    const m = t;
    let L = 2;
    l > m + 1 && (L = Math.max(2, l - Math.floor(m / 2))), L + m > n && (L = Math.max(2, n - m + 1));
    const C = Array.from({ length: n }).map((B, S) => ({ id: S + 1 })).filter((B) => B.id > 1 && B.id < n).filter((B) => B.id >= L && B.id < L + m), T = L <= m * 2, N = n - L < m * 2;
    return { pageData: C, curStart: L, isStartPreOut: T, isStartNextOut: N };
  }, [n, t, l]), g = U((m) => {
    m >= 1 && m <= n && m !== l && (d(m), i == null || i(m));
  }, [l, n, i]), j = U(() => {
    l > 1 && g(l - 1);
  }, [l, g]), w = U(() => {
    l < n && g(l + 1);
  }, [l, n, g]), x = U((m) => {
    if (m === "prev" && !p) {
      const L = Math.max(1, h - t);
      g(L);
    } else if (m === "next" && !f) {
      const L = Math.min(n, h + t);
      g(L);
    }
  }, [h, t, p, f, n, g]), v = U((m) => {
    const L = m;
    !isNaN(L) && L >= 1 && L <= n && (d(L), g(L));
  }, [n, g]), k = U((m) => {
    m.stopPropagation();
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
        onClick: (m) => {
          k(m), j();
        },
        className: `land-pagination-arrow-prev ${l === 1 ? "disabled" : ""}`,
        children: /* @__PURE__ */ s.jsx(q, { name: "arrow", className: "land-pagination-arrow-prev-icon", strokeWidth: 4 })
      }
    ),
    /* @__PURE__ */ s.jsxs("div", { className: "land-pagination-page", children: [
      /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `land-pagination-num-item ${l === 1 ? "active" : ""}`,
          onClick: (m) => {
            k(m), g(1);
          },
          children: "1"
        }
      ),
      ((y = u[0]) == null ? void 0 : y.id) > 2 && /* @__PURE__ */ s.jsxs(
        "div",
        {
          onClick: (m) => {
            k(m), x("prev");
          },
          className: "land-pagination-arrow-double-prev",
          children: [
            /* @__PURE__ */ s.jsx(q, { name: "more", size: 16 }),
            /* @__PURE__ */ s.jsx(q, { name: "arrow-double", className: "land-pagination-arrow-double-prev-icon", size: 24 })
          ]
        }
      ),
      u == null ? void 0 : u.map((m) => /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `land-pagination-num-item ${l === m.id ? "active" : ""}`,
          onClick: (L) => {
            k(L), g(m.id);
          },
          children: m.id
        },
        m.id
      )),
      ((b = u[(u == null ? void 0 : u.length) - 1]) == null ? void 0 : b.id) < n - 1 && /* @__PURE__ */ s.jsxs(
        "div",
        {
          onClick: (m) => {
            k(m), x("next");
          },
          className: "land-pagination-arrow-double-next",
          children: [
            /* @__PURE__ */ s.jsx(q, { name: "more", size: 16 }),
            /* @__PURE__ */ s.jsx(q, { name: "arrow-double", className: "land-pagination-arrow-double-next-icon", size: 24 })
          ]
        }
      ),
      /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `land-pagination-num-item ${l === n ? "active" : ""}`,
          onClick: (m) => {
            k(m), g(n);
          },
          children: n
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        onClick: (m) => {
          k(m), w();
        },
        className: `land-pagination-arrow-next ${l === n ? "disabled" : ""}`,
        children: /* @__PURE__ */ s.jsx(q, { name: "arrow", className: "land-pagination-arrow-next-icon", strokeWidth: 4 })
      }
    ),
    o && /* @__PURE__ */ s.jsxs("div", { className: "land-pagination-input", children: [
      "跳转至",
      /* @__PURE__ */ s.jsx(
        Oe,
        {
          hideArrowButton: !0,
          value: l,
          onChange: v,
          className: "land-pagination-page-input",
          textAlign: "center"
        }
      ),
      "/ ",
      n,
      " 页"
    ] })
  ] });
}, Rm = ({
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
), Im = ({
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
        return /* @__PURE__ */ s.jsx(q, { name: "check-fill", ...h, color: "var(--color-green-6)" });
      case "fail":
        return /* @__PURE__ */ s.jsx(q, { name: "error-fill", ...h, color: "var(--color-red-6)" });
      default:
        return null;
    }
  }, u = () => {
    const p = (80 - o) / 2, f = 2 * Math.PI * p, g = f, j = f - c * f;
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
          strokeDasharray: g,
          strokeDashoffset: j,
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
}, sm = ({
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
  /* @__PURE__ */ s.jsx(Ae, { content: t, theme: "dark", style: { maxWidth: "200px" } }),
  /* @__PURE__ */ s.jsxs(
    "div",
    {
      onClick: a,
      className: "land-radio-label",
      children: [
        /* @__PURE__ */ s.jsx("div", { className: `land-radio-circle ${c ? "checked" : ""} ${l ? "animated" : "no-animation"}`, children: /* @__PURE__ */ s.jsx(q, { name: "check", size: 10, className: "land-radio-circle-icon" }) }),
        e
      ]
    }
  ),
  r && /* @__PURE__ */ s.jsxs("div", { className: "land-radio-pop hover-pop", children: [
    /* @__PURE__ */ s.jsx(q, { name: "info-stroke", color: "var(--color-gray-rgba-9)", size: 12 }),
    /* @__PURE__ */ s.jsx(Ae, { content: r, theme: "dark", style: { maxWidth: "200px" } })
  ] })
] }), Pm = ({
  checked: e,
  data: t = [],
  animated: n,
  onChange: r,
  style: o,
  className: i = ""
}) => /* @__PURE__ */ s.jsx("div", { className: `land-radio-group ${i}`, style: o, children: t == null ? void 0 : t.map(
  (a) => /* @__PURE__ */ s.jsx(
    sm,
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
) }), Em = ({
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
  titleLinkProps: g,
  subTitleLinkProps: j
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
          ...g,
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
          ...j,
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
] }), om = {
  linear: (e) => e,
  easeIn: (e) => e * e,
  easeOut: (e) => 1 - Math.pow(1 - e, 2),
  easeInOut: (e) => e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
  bounce: (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  elastic: (e) => Math.pow(2, -10 * e) * Math.sin((e - 0.3 / 4) * (2 * Math.PI) / 0.3) + 1
}, Hm = ({
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
  const [u, h] = O(""), [p, f] = O(!1), [g, j] = O(!1), w = ee(null), x = ee(null), v = ee(e), y = { ...{
    duration: 1e3,
    easing: "easeOut",
    delay: 0,
    loop: !1,
    loopInterval: 2e3
  }, ...a }, b = U((S) => c > 0 ? S.toFixed(c) : Math.floor(S).toString(), [c]), m = U(() => {
    w.current && (cancelAnimationFrame(w.current), w.current = null);
  }, []), L = U(() => {
    x.current && (clearTimeout(x.current), x.current = null);
  }, []), C = U((S, A) => {
    const F = y.duration / 1e3 * 60;
    let D = 0;
    const K = om[y.easing], V = () => {
      D++;
      const P = D / F, R = K(P), E = S + (A - S) * R;
      h(b(E)), D < F ? w.current = requestAnimationFrame(V) : (h(b(A)), w.current = null);
    };
    w.current = requestAnimationFrame(V);
  }, [y.duration, y.easing, b]);
  X(() => {
    if (i === "none") {
      h(b(e));
      return;
    }
    return x.current = setTimeout(() => {
      switch (j(!0), i) {
        case "increase":
          C(0, e);
          break;
        case "decrease":
          C(e * 1.5, e);
          break;
        case "bounce":
          h(b(e)), f(!0);
          break;
        case "fade":
        case "slide":
        case "scale":
        case "flip":
          h(b(e)), f(!0);
          break;
        case "random":
          h(b(e)), f(!0);
          break;
        default:
          h(b(e));
      }
    }, y.delay), () => {
      L(), m();
    };
  }, [i, e, y.delay, y.duration, C, b, L, m]), X(() => {
    if (!y.loop || i === "none") return;
    const S = () => {
      x.current = setTimeout(() => {
        f(!1), setTimeout(() => f(!0), 100), S();
      }, y.loopInterval);
    };
    return p && S(), () => L();
  }, [y.loop, y.loopInterval, p, i, L]), X(() => () => {
    m(), L();
  }, [m, L]), X(() => {
    v.current !== e && i !== "none" && (f(!1), setTimeout(() => f(!0), 50)), v.current = e;
  }, [e, i]);
  const T = z(() => b(e).split("").map((A) => A === "." ? "." : A === "-" ? "-" : parseInt(A, 10)), [e, b]), N = {
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
  }, B = () => i === "bounce" ? N.bounce : i === "fade" ? N.fade : i === "slide" ? N.slide : i === "scale" ? N.scale : i === "flip" ? N.flip : N.fade;
  return /* @__PURE__ */ s.jsxs("div", { className: `land-statistic ${d || ""}`, style: l, children: [
    t && /* @__PURE__ */ s.jsx("div", { className: "land-statistic-prefix", children: t }),
    /* @__PURE__ */ s.jsxs("div", { className: "land-statistic-value", children: [
      /* @__PURE__ */ s.jsx(D2, { mode: "wait", children: i === "random" ? /* @__PURE__ */ s.jsx("div", { className: "flex items-center", children: T.map((S, A) => /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "land-statistic-random",
          style: { height: "45px" },
          children: /* @__PURE__ */ s.jsx(
            Ce.div,
            {
              animate: { y: p ? -Number(S) * 45 : 0 },
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
        `digit-${A}-${S}`
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
          initial: B().initial,
          animate: p ? B().animate : B().initial,
          exit: B().initial,
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
            q,
            {
              name: "increase",
              strokeWidth: 0,
              color: "var(--color-success)"
            }
          ),
          o === "down" && /* @__PURE__ */ s.jsx(
            q,
            {
              name: "increase",
              style: { transform: "rotate(180deg)" },
              strokeWidth: 0,
              color: "var(--color-error)"
            }
          ),
          o === "default" && /* @__PURE__ */ s.jsx(
            q,
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
}, Dm = ({}) => /* @__PURE__ */ s.jsx("div", { children: "Swiper" }), Bm = ({
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
  defaultBg: g,
  activeBg: j,
  style: w,
  className: x,
  onChange: v,
  onStart: k,
  onEnd: y
}) => /* @__PURE__ */ s.jsx("div", { className: "land-slider", children: /* @__PURE__ */ s.jsx("div", { className: "land-slider-track" }) }), dl = Le.memo(({ item: e, index: t, isActive: n, isFinished: r, onClick: o, direction: i }) => {
  const a = U(() => {
    o == null || o(e);
  }, [o, e]), c = U((d) => {
    (d.key === "Enter" || d.key === " ") && (d.preventDefault(), o == null || o(e));
  }, [o, e]), l = z(() => r ? /* @__PURE__ */ s.jsx(q, { name: "check", size: 12 }) : t + 1, [r, t]);
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
dl.displayName = "StepsItem";
const Fm = ({
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
  const h = z(() => t !== void 0 ? t : e.length > 0 ? e[0].key : void 0, [t, e]), p = z(() => Array.isArray(e) ? e.filter((v) => v && typeof v == "object" && v.key !== void 0) : [], [e]);
  if (p.length === 0)
    return d ? /* @__PURE__ */ s.jsx(s.Fragment, { children: d }) : null;
  const g = z(() => h !== void 0 && p.some((v) => v.key === h), [h, p]) ? h : p[0].key, j = U((v) => v.finished !== void 0 ? v.finished : n.includes(v.key), [n]), w = z(() => ["land-steps", a === "vertical" ? "vertical" : "", l].filter(Boolean).join(" "), [a, l]), x = U(() => p.map((v, k) => {
    const y = g === v.key, b = j(v);
    return /* @__PURE__ */ s.jsxs(un, { children: [
      o && k !== 0 && /* @__PURE__ */ s.jsx(
        Xe,
        {
          lineLength: i,
          style: a === "horizontal" ? { marginTop: "12px" } : { marginLeft: "8px" },
          direction: a === "vertical" ? "column" : "row"
        }
      ),
      /* @__PURE__ */ s.jsx(
        dl,
        {
          item: v,
          index: k,
          isActive: y,
          isFinished: b,
          onClick: r,
          direction: a
        }
      )
    ] }, v.key);
  }), [p, g, j, o, i, a, r]);
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: w,
      style: c,
      role: "list",
      "aria-label": "步骤导航",
      ...u,
      children: x()
    }
  );
}, Om = ({
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
  const [g, j] = O(e);
  return X(() => j(e), [e]), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-switch ${i ? "hover-pop" : ""} ${h ? "disabled" : ""}`,
      children: [
        /* @__PURE__ */ s.jsx(Ae, { content: i, theme: "dark", ...c }),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `land-switch-content ${u ? "dark" : ""} ${g ? "checked" : ""} ${f}`,
            style: p,
            onClick: (w) => {
              w.stopPropagation(), !h && (j(!g), d == null || d(g));
            },
            children: [
              /* @__PURE__ */ s.jsx("div", { className: "land-switch-bar", children: /* @__PURE__ */ s.jsx(Ce.div, { animate: { x: g ? 16 : 0 }, transition: { duration: 0.6, type: "spring" }, className: "land-switch-indicator", children: g ? o : r }) }),
              (t || n) && /* @__PURE__ */ s.jsx("div", { className: "land-switch-label", children: g ? n : t })
            ]
          }
        ),
        a && /* @__PURE__ */ s.jsxs("div", { className: "land-switch-label-iconTip hover-pop", children: [
          /* @__PURE__ */ s.jsx(q, { name: "info-stroke", size: 16 }),
          /* @__PURE__ */ s.jsx(Ae, { content: a, theme: "dark", ...l })
        ] })
      ]
    }
  );
};
function _m({
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
            Xe,
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
                  /* @__PURE__ */ s.jsx(q, { name: "info-stroke", size: 16 }),
                  /* @__PURE__ */ s.jsx(Ae, { content: d.iconTip, theme: "dark" })
                ] })
              ]
            }
          )
        ] }, d.key);
      })
    }
  );
}
const im = ({
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
        q,
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
), Ym = ({
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
  tagClassName: g = "",
  className: j = "",
  style: w
}) => {
  const [x, v] = O(""), [k, y] = O(e), b = (m) => {
    k.length === r || !m || (y([...k, m]), v(""));
  };
  return X(() => {
    const m = (L) => {
      L.code === "Backspace" && (k == null ? void 0 : k.length) > 0 && !x && (y((C) => C.slice(0, -1)), console.log(L.code));
    };
    return document.body.addEventListener("keydown", m), () => document.body.removeEventListener("keydown", m);
  }, [x, k]), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `land-tag-input ${a ? "widthClear" : ""} ${j}`,
      style: { width: typeof n == "number" ? `${n}px` : n, paddingLeft: (k == null ? void 0 : k.length) > 0 ? "4px" : "12px", ...w },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "land-tag-input-container", children: [
          k == null ? void 0 : k.map((m, L) => /* @__PURE__ */ s.jsx(im, { className: `land-tag-input-tag ${g}`, canDelete: !0, onDelete: () => {
            y(k.filter((C) => C !== m)), p == null || p(m);
          }, style: f, children: m }, L)),
          /* @__PURE__ */ s.jsx(
            zn,
            {
              type: "transparent",
              value: x,
              placeholder: t,
              onEnter: (m, L) => {
                b == null || b(m), l == null || l(k, L);
              },
              onBlur: (m) => {
                b == null || b(x), u == null || u(k, m);
              },
              onChange: (m, L) => {
                v(m), c == null || c(k, L);
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
        }, children: /* @__PURE__ */ s.jsx(q, { name: "error-fill" }) })
      ]
    }
  );
}, Zm = ({
  titleData: e,
  data: t = [],
  style: n,
  className: r = "",
  striped: o = !1,
  crossHighlight: i = !1,
  headFixed: a = !1,
  fixedColumns: c = 0
}) => {
  const [l, d] = O(null), [u, h] = O({ row: {}, col: {} }), p = ee(null), f = ee(null), g = (v, k) => {
    i && d({ row: v, col: k });
  }, j = () => {
    i && d(null);
  }, w = U(() => {
    if (i && l && p.current) {
      const v = p.current, k = v.querySelector("thead tr"), y = v.querySelectorAll("tbody tr");
      if (k && y.length > 0) {
        const b = k.getBoundingClientRect().height, m = y[0].getBoundingClientRect().height;
        let L = 0, C = 0;
        for (let T = 0; T < k.children.length; T++) {
          const B = k.children[T].getBoundingClientRect().width;
          if (T === l.col) {
            C = B;
            break;
          }
          L += B;
        }
        h({
          row: {
            top: `${b + l.row * m}px`,
            height: `${m}px`
          },
          col: {
            left: `${L}px`,
            width: `${C}px`
          }
        });
      }
    }
  }, [i, l]), x = U(() => {
    if (c > 0 && p.current) {
      const v = p.current, k = v.querySelector("thead tr");
      if (k) {
        const y = {};
        let b = 0;
        for (let L = 0; L < Math.min(c, k.children.length); L++) {
          const T = k.children[L].getBoundingClientRect().width;
          y[L] = {
            left: `${b}px`
          }, b += T;
        }
        const m = v.parentElement;
        m && Object.entries(y).forEach(([L, C]) => {
          m.style.setProperty(`--fixed-col-${L}-left`, C.left);
        });
      }
    }
  }, [c]);
  return X(() => {
    x();
  }, [x]), X(() => {
    c > 0 && requestAnimationFrame(() => {
      x();
    });
  }, [c, x]), X(() => {
    w();
  }, [w]), X(() => {
    if ((i || c > 0) && p.current)
      return f.current = new ResizeObserver(() => {
        l && w(), c > 0 && x();
      }), f.current.observe(p.current), () => {
        f.current && f.current.disconnect();
      };
  }, [i, c, l, w, x]), /* @__PURE__ */ s.jsxs("div", { className: `land-table-wrapper ${i ? "land-table-wrapper--cross-highlight" : ""} ${a ? "land-table-wrapper--head-fixed" : ""} ${c > 0 ? "land-table-wrapper--fixed-columns" : ""} ${r}`, style: n, children: [
    /* @__PURE__ */ s.jsxs("table", { ref: p, className: `land-table ${o ? "land-table--striped" : ""} ${a ? "land-table--head-fixed" : ""} ${c > 0 ? "land-table--fixed-columns" : ""}`, children: [
      /* @__PURE__ */ s.jsx("thead", { children: /* @__PURE__ */ s.jsx("tr", { children: e == null ? void 0 : e.map((v, k) => /* @__PURE__ */ s.jsx(
        "th",
        {
          className: k < c ? "land-table__cell--fixed" : "",
          children: v.title
        },
        k
      )) }) }),
      /* @__PURE__ */ s.jsx("tbody", { children: t.map((v, k) => /* @__PURE__ */ s.jsx("tr", { children: Object.values(v).map((y, b) => /* @__PURE__ */ s.jsx(
        "td",
        {
          "data-row": k,
          "data-col": b,
          className: b < c ? "land-table__cell--fixed" : "",
          onMouseEnter: () => g(k, b),
          onMouseLeave: j,
          children: y
        },
        b
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
}, Um = ({ data: e, direction: t = "column", icon: n }) => /* @__PURE__ */ s.jsx("div", { className: `land-timeline ${t === "row" ? "row" : ""}`, children: e == null ? void 0 : e.map((r, o) => /* @__PURE__ */ s.jsxs("div", { className: `land-timeline-item ${t === "row" ? "row" : ""}`, children: [
  /* @__PURE__ */ s.jsxs("div", { className: "land-timeline-indicator-wrapper", children: [
    r.icon || n || /* @__PURE__ */ s.jsx("div", { className: "land-timeline-indicator" }),
    o !== (e == null ? void 0 : e.length) - 1 && /* @__PURE__ */ s.jsx(Xe, { direction: t })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "land-timeline-content", children: [
    r.title && /* @__PURE__ */ s.jsx("div", { className: "land-timeline-title", children: r.title }),
    r.subTitle && /* @__PURE__ */ s.jsx("div", { className: "land-timeline-subTitle", children: r.subTitle }),
    r.desc && /* @__PURE__ */ s.jsx("div", { className: "land-timeline-desc", children: r.desc })
  ] })
] }, o)) }), Gm = ({
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
        /* @__PURE__ */ s.jsx(q, { name: "info-stroke", stroke: "var(--color-text-secondary)" }),
        /* @__PURE__ */ s.jsx(Ae, { content: o, theme: "dark", style: { maxWidth: "200px" } })
      ] }),
      r && typeof r == "string" ? /* @__PURE__ */ s.jsx("div", { className: "land-title-sub", children: r }) : /* @__PURE__ */ s.jsx(s.Fragment, { children: r })
    ]
  }
), Km = ({
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
  const d = ee(null), [u, h] = O(), [p, f] = O(), [g, j] = O(!1), w = (k, y) => {
    k.preventDefault(), j(!0), y && (f(y), new FileReader().readAsDataURL(y), h(URL.createObjectURL(y)), j(!1));
  };
  X(() => {
    n == null || n(u, p);
  }, [u]);
  const [x, v] = O(!1);
  return /* @__PURE__ */ s.jsxs(
    "label",
    {
      className: `land-uploader ${x ? "drag" : ""} ${c}`,
      style: {
        width: o,
        height: i,
        ...a
      },
      onDragOver: (k) => {
        v(!0), k.preventDefault();
      },
      onDrop: (k) => {
        v(!1), w(k, k.dataTransfer.files[0]);
      },
      onDragLeave: () => v(!1),
      children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            ref: d,
            type: "file",
            accept: t,
            className: `land-uploader-input ${l}`,
            onChange: (k) => {
              w(k, k.target.files[0]);
            }
          }
        ),
        r || (g ? /* @__PURE__ */ s.jsx(s.Fragment, { children: "上传中" }) : x ? /* @__PURE__ */ s.jsx("div", { className: "land-uploader-desc", children: "释放即可上传" }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("div", { className: "land-uploader-icon", children: /* @__PURE__ */ s.jsx(q, { name: "upload" }) }),
          e && /* @__PURE__ */ s.jsx("div", { className: "land-uploader-desc", children: e })
        ] }))
      ]
    }
  );
}, Xm = ({
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
  className: g
}) => {
  const j = ee(null), w = ee(null), [x, v] = O({ width: 0, height: 0 }), k = U(() => {
    const { width: C, height: T } = x;
    if (C === 0 || T === 0) return [];
    const [N, B] = i, [S, A] = a, $ = Math.max(N, r), I = Math.max(B, o), F = C - r, D = T - o, K = Math.max(0, Math.min(S, F)), V = Math.max(0, Math.min(A, D)), P = Math.ceil((F - K) / $) + 1, R = Math.ceil((D - V) / I) + 1, E = [];
    for (let Y = 0; Y < R; Y++)
      for (let G = 0; G < P; G++) {
        const _ = K + G * $, J = V + Y * I;
        _ + r <= C && J + o <= T && E.push({
          id: `${Y}-${G}`,
          x: _,
          y: J
        });
      }
    if (E.length < 4) {
      const Y = [], G = (C - r) / 2, _ = (T - o) / 2;
      Y.push({
        id: "center",
        x: G,
        y: _
      });
      const J = 20;
      return [
        { x: J, y: J },
        { x: C - r - J, y: J },
        { x: J, y: T - o - J },
        {
          x: C - r - J,
          y: T - o - J
        }
      ].forEach((se, ue) => {
        se.x >= 0 && se.y >= 0 && Y.push({
          id: `corner-${ue}`,
          x: se.x,
          y: se.y
        });
      }), [...E, ...Y];
    }
    return E;
  }, [x, i, a, r, o]), y = z(() => k(), [k]), b = U(() => {
    if (j.current) {
      const { offsetWidth: C, offsetHeight: T } = j.current;
      v({ width: C, height: T });
    }
  }, []);
  X(() => {
    b();
  }, [b]), X(() => (w.current && (w.current.disconnect(), w.current = null), w.current = new ResizeObserver(() => {
    b();
  }), j.current && w.current.observe(j.current), () => {
    w.current && (w.current.disconnect(), w.current = null);
  }), [b]), X(() => () => {
    w.current && (w.current.disconnect(), w.current = null);
  }, []);
  const m = z(
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
  ), L = U(
    (C) => {
      const T = {
        ...m,
        left: `${C.x}px`,
        top: `${C.y}px`
      }, N = `land-watermark-item ${n ? "img" : ""}`;
      return /* @__PURE__ */ s.jsx("div", { className: N, style: T, children: n ? /* @__PURE__ */ s.jsx("img", { src: n, alt: "watermark" }) : t }, C.id);
    },
    [m, n, t]
  );
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: j,
      className: `land-watermark  ${g ?? ""}`,
      style: f,
      children: [
        e,
        /* @__PURE__ */ s.jsx("div", { className: "land-watermark-content", children: y.map(L) })
      ]
    }
  );
}, ul = () => Le.version.startsWith("19") ? "19" : "18", am = () => ul() === "19", qm = (e) => Le.memo(e), zm = (e, t) => am() ? t : e, Jm = (e) => Le.useState(e), Qm = (e, t) => Le.useEffect(e, t), Wm = (e, t) => Le.useCallback(e, t), e8 = (e, t) => Le.useMemo(e, t), t8 = (e) => Le.useRef(e), cm = ul(), n8 = cm === "19", r8 = (e) => {
  if (!e) return "00:00";
  if (typeof e == "string") return e;
  const t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), r = Math.round(e % 60), o = t < 10 ? "0" + t : t, i = n < 10 ? "0" + n : n, a = r < 10 ? "0" + r : r;
  return t > 0 ? o + ":" + i + ":" + a : i + ":" + a;
}, s8 = (e, t) => {
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
};
export {
  qe as GridType,
  n8 as IS_REACT_19,
  q as Icon,
  dm as LandAffixContainer,
  y0 as LandAlert,
  hm as LandAnchor,
  Fs as LandAudio,
  pm as LandAutoContainer,
  fm as LandBadge,
  mm as LandBreadCrumb,
  me as LandButton,
  _0 as LandCalendar,
  Rc as LandCheck,
  gm as LandCheckbox,
  xm as LandCheckedContainer,
  vm as LandCollapse,
  km as LandColorPicker,
  jm as LandContent,
  Lm as LandDatePicker,
  wm as LandDialog,
  Xe as LandDivider,
  ym as LandDrawer,
  Os as LandDropdown,
  Cm as LandEllipsis,
  Mm as LandFlex,
  bm as LandFooter,
  Sm as LandGrid,
  Nm as LandHeader,
  Vm as LandImage,
  zn as LandInput,
  Tm as LandLayout,
  dn as LandLink,
  w0 as LandLoading,
  Dc as LandMenu,
  $m as LandMessage,
  Oe as LandNumberInput,
  Am as LandPagination,
  Rm as LandPopConfirm,
  Ae as LandPopOver,
  Im as LandProgress,
  sm as LandRadio,
  Pm as LandRadioGroup,
  Bm as LandSlider,
  Em as LandState,
  Hm as LandStatistic,
  Fm as LandSteps,
  Dm as LandSwiper,
  Om as LandSwitch,
  Zm as LandTable,
  _m as LandTabs,
  im as LandTag,
  Ym as LandTagInput,
  Um as LandTimeline,
  Gm as LandTitle,
  Km as LandUploader,
  Xm as LandWatermark,
  cm as REACT_VERSION,
  zm as conditionalRender,
  qm as createCompatibleComponent,
  Wm as createSafeCallback,
  Qm as createSafeEffect,
  e8 as createSafeMemo,
  t8 as createSafeRef,
  Jm as createSafeState,
  ul as getReactVersion,
  am as supportsReact19Features,
  T0 as useClickOutside,
  r8 as useFormateTime,
  s8 as useGetHighlightStr
};
//# sourceMappingURL=index.es.js.map
