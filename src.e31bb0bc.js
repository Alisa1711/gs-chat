// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = D;
exports.hydrate = H;
exports.h = exports.createElement = a;
exports.Fragment = p;
exports.createRef = v;
exports.Component = d;
exports.cloneElement = I;
exports.createContext = L;
exports.toChildArray = _;
exports._unmount = O;
exports.options = void 0;
var n,
    l,
    u,
    t,
    i,
    r,
    f = {},
    e = [],
    o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
exports.options = n;

function c(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function s(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function a(n, l, u) {
  var t,
      i,
      r,
      f,
      e = arguments;
  if (l = c({}, l), arguments.length > 3) for (u = [u], t = 3; t < arguments.length; t++) u.push(e[t]);
  if (null != u && (l.children = u), null != n && null != n.defaultProps) for (i in n.defaultProps) void 0 === l[i] && (l[i] = n.defaultProps[i]);
  return f = l.key, null != (r = l.ref) && delete l.ref, null != f && delete l.key, h(n, l, f, r);
}

function h(l, u, t, i) {
  var r = {
    type: l,
    props: u,
    key: t,
    ref: i,
    __k: null,
    __p: null,
    __b: 0,
    __e: null,
    l: null,
    __c: null,
    constructor: void 0
  };
  return n.vnode && n.vnode(r), r;
}

function v() {
  return {};
}

function p(n) {
  return n.children;
}

function y(n) {
  if (null == n || "boolean" == typeof n) return null;
  if ("string" == typeof n || "number" == typeof n) return h(null, n, null, null);

  if (null != n.__e || null != n.__c) {
    var l = h(n.type, n.props, n.key, null);
    return l.__e = n.__e, l;
  }

  return n;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function m(n, l) {
  if (null == l) return n.__p ? m(n.__p, n.__p.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l])) return "function" != typeof u.type ? u.__e : m(u, 0);

  return "function" == typeof n.type ? m(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__p) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function b(t) {
  !t.__d && (t.__d = !0) && 1 === l.push(t) && (n.debounceRendering || u)(k);
}

function k() {
  var n;

  for (l.sort(function (n, l) {
    return l.__v.__b - n.__v.__b;
  }); n = l.pop();) n.__d && n.forceUpdate(!1);
}

function g(n, l, u, t, i, r, o, c) {
  var a,
      h,
      v,
      p,
      d,
      m,
      w,
      b,
      k = l.__k || _(l.props.children, l.__k = [], y, !0),
      g = u && u.__k || e,
      x = g.length;

  if (c == f) if (c = null, null != r) c = r[0];else for (h = 0; !c && h < x; h++) c = g[h] && g[h].__e;

  for (h = 0; h < k.length; h++) if (null != (a = k[h] = y(k[h]))) {
    if (a.__p = l, a.__b = l.__b + 1, null === (p = g[h]) || p && a.key == p.key && a.type === p.type) g[h] = void 0;else for (v = 0; v < x; v++) {
      if ((p = g[v]) && a.key == p.key && a.type === p.type) {
        g[v] = void 0;
        break;
      }

      p = null;
    }

    if (d = N(n, a, p = p || f, t, i, r, o, null, c), (v = a.ref) && p.ref != v && (b || (b = [])).push(v, a.__c || d), null != d) {
      if (null == w && (w = d), null != a.l) d = a.l, a.l = null;else if (r == p || d != c || null == d.parentNode) n: if (null == c || c.parentNode !== n) n.appendChild(d);else {
        for (m = c, v = 0; (m = m.nextSibling) && v < x; v += 2) if (m == d) break n;

        n.insertBefore(d, c);
      }
      c = d.nextSibling, "function" == typeof l.type && (l.l = d);
    }
  }

  if (l.__e = w, null != r && "function" != typeof l.type) for (h = r.length; h--;) null != r[h] && s(r[h]);

  for (h = x; h--;) null != g[h] && O(g[h], l);

  if (b) for (h = 0; h < b.length; h++) A(b[h], b[++h], l);
}

function _(n, l, u, t) {
  if (null == l && (l = []), null == n || "boolean" == typeof n) t && l.push(null);else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) _(n[i], l, u, t);else l.push(u ? u(n) : n);
  return l;
}

function x(n, l, u, t) {
  var i,
      r,
      f = Object.keys(l).sort();

  for (i = 0; i < f.length; i++) "children" === (r = f[i]) || "key" === r || u && ("value" === r || "checked" === r ? n : u)[r] === l[r] || C(n, r, l[r], u[r], t);

  for (i in u) "children" === i || "key" === i || i in l || C(n, i, null, u[i], t);
}

function C(n, l, u, r, e) {
  var s, a, h, v;
  if ("style" === (l = e ? "className" === l ? "class" : l : "class" === l ? "className" : l)) for (a in s = c(c({}, r), u)) (u || f)[a] !== (r || f)[a] && n.style.setProperty("-" === a[0] && "-" === a[1] ? a : a.replace(t, "-$&"), u && a in u ? "number" == typeof s[a] && !1 === o.test(a) ? s[a] + "px" : s[a] : "");else if ("o" === l[0] && "n" === l[1]) h = l !== (l = l.replace(/Capture$/, "")), v = l.toLowerCase(), l = (v in n ? v : l).slice(2), u ? (r || n.addEventListener(l, P, h), (n.u || (n.u = {}))[l] = u) : n.removeEventListener(l, P, h);else if ("list" !== l && "tagName" !== l && !e && l in n) {
    if (n.length && "value" == l) for (l = n.length; l--;) n.options[l].selected = n.options[l].value == u;else n[l] = null == u ? "" : u;
  } else "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS(i, l.toLowerCase()) : n.setAttributeNS(i, l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function P(l) {
  return this.u[l.type](n.event ? n.event(l) : l);
}

function N(l, u, t, i, r, f, e, o, s) {
  var a,
      h,
      v,
      m,
      w,
      b,
      k,
      x,
      C,
      P,
      N = u.type;
  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof N) {
      if (x = u.props, C = (a = N.contextType) && i[a.__c], P = a ? C ? C.props.value : a.__p : i, t.__c ? k = (h = u.__c = t.__c).__p = h.__E : (N.prototype && N.prototype.render ? u.__c = h = new N(x, P) : (u.__c = h = new d(x, P), h.constructor = N, h.render = T), C && C.sub(h), h.props = x, h.state || (h.state = {}), h.context = P, h.__n = i, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != N.getDerivedStateFromProps && c(h.__s == h.state ? h.__s = c({}, h.__s) : h.__s, N.getDerivedStateFromProps(x, h.__s)), v) null == N.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && e.push(h);else {
        if (null == N.getDerivedStateFromProps && null == o && null != h.componentWillReceiveProps && h.componentWillReceiveProps(x, P), !o && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(x, h.__s, P)) {
          h.props = x, h.state = h.__s, h.__d = !1, h.__v = u, u.__e = t.__e, u.__k = t.__k;
          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(x, h.__s, P);
      }
      m = h.props, w = h.state, h.context = P, h.props = x, h.state = h.__s, (a = n.__r) && a(u), h.__d = !1, h.__v = u, h.__P = l;

      try {
        _(null != (a = h.render(h.props, h.state, h.context)) && a.type == p && null == a.key ? a.props.children : a, u.__k = [], y, !0);
      } catch (l) {
        if ((a = n.__E) && a(l, u, t)) break n;
        throw l;
      }

      for (null != h.getChildContext && (i = c(c({}, i), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (b = h.getSnapshotBeforeUpdate(m, w)), g(l, u, t, i, r, f, e, s), h.base = u.__e; a = h.__h.pop();) a.call(h);

      v || null == m || null == h.componentDidUpdate || h.componentDidUpdate(m, w, b), k && (h.__E = h.__p = null);
    } else u.__e = j(t.__e, u, t, i, r, f, e);

    (a = n.diffed) && a(u);
  } catch (n) {
    z(n, u.__p);
  }

  return u.__e;
}

function $(l, u) {
  for (var t; t = l.pop();) try {
    t.componentDidMount();
  } catch (n) {
    z(n, t.__v.__p);
  }

  n.__c && n.__c(u);
}

function j(n, l, u, t, i, r, o) {
  var c,
      s,
      a,
      h,
      v = u.props,
      p = l.props;
  if (i = "svg" === l.type || i, null == n && null != r) for (c = 0; c < r.length; c++) if (null != (s = r[c]) && (null === l.type ? 3 === s.nodeType : s.localName === l.type)) {
    n = s, r[c] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(p);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), r = null;
  }

  return null === l.type ? v !== p && (n.data = p) : l !== u && (null != r && (r = e.slice.call(n.childNodes)), a = (v = u.props || f).dangerouslySetInnerHTML, ((h = p.dangerouslySetInnerHTML) || a) && null == r && (h && a && h.__html == a.__html || (n.innerHTML = h && h.__html || "")), p.multiple && (n.multiple = p.multiple), g(n, l, u, t, "foreignObject" !== l.type && i, r, o, f), x(n, p, v, i)), n;
}

function A(n, l, u) {
  try {
    "function" == typeof n ? n(l) : n.current = l;
  } catch (n) {
    z(n, u);
  }
}

function O(l, u, t) {
  var i, r, f;

  if (n.unmount && n.unmount(l), (i = l.ref) && A(i, null, u), t || "function" == typeof l.type || (t = null != (r = l.__e)), l.__e = l.l = null, null != (i = l.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (n) {
      z(n, u);
    }
    i.base = i.__P = null;
  }

  if (i = l.__k) for (f = 0; f < i.length; f++) i[f] && O(i[f], u, t);
  null != r && s(r);
}

function T(n, l, u) {
  return this.constructor(n, u);
}

function z(l, u) {
  var t;

  for (n.__e && n.__e(l, u); u; u = u.__p) if ((t = u.__c) && !t.__p) try {
    if (t.constructor && null != t.constructor.getDerivedStateFromError) t.setState(t.constructor.getDerivedStateFromError(l));else {
      if (null == t.componentDidCatch) continue;
      t.componentDidCatch(l);
    }
    return b(t.__E = t);
  } catch (n) {
    l = n;
  }

  throw l;
}

function D(l, u, t) {
  var i, r;
  n.__p && n.__p(l, u), i = u.__k, l = a(p, null, [l]), r = [], N(u, t ? l : u.__k = l, i || f, f, void 0 !== u.ownerSVGElement, t ? [t] : i ? null : e.slice.call(u.childNodes), r, !1, t || f), $(r, l);
}

function H(n, l) {
  l.__k = null, D(n, l);
}

function I(n, l) {
  return l = c(c({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), h(n.type, l, l.key || n.key, l.ref || n.ref);
}

function L(n) {
  var l = {},
      u = {
    __c: "__cC" + r++,
    __p: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var t,
          i = this;
      return this.getChildContext || (t = [], this.getChildContext = function () {
        return l[u.__c] = i, l;
      }, this.shouldComponentUpdate = function (n) {
        t.some(function (l) {
          l.__P && (l.context = n.value, b(l));
        });
      }, this.sub = function (n) {
        t.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          t.splice(t.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u;
}

exports.options = n = {}, d.prototype.setState = function (n, l) {
  var u = this.__s !== this.state && this.__s || (this.__s = c({}, this.state));
  ("function" != typeof n || (n = n(u, this.props))) && c(u, n), null != n && this.__v && (l && this.__h.push(l), b(this));
}, d.prototype.forceUpdate = function (n) {
  var l,
      u,
      t,
      i = this.__v,
      r = this.__v.__e,
      f = this.__P;
  f && (l = !1 !== n, u = [], t = N(f, i, c({}, i), this.__n, void 0 !== f.ownerSVGElement, null, u, l, null == r ? m(i) : r), $(u, i), t != r && w(i)), n && n();
}, d.prototype.render = p, l = [], u = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, t = /[A-Z]/g, i = "http://www.w3.org/1999/xlink", r = 0;
},{}],"../node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = e;
exports.useReducer = a;
exports.useEffect = v;
exports.useLayoutEffect = p;
exports.useRef = d;
exports.useImperativeHandle = l;
exports.useMemo = m;
exports.useCallback = s;
exports.useContext = y;
exports.useDebugValue = _;

var _preact = require("preact");

var t,
    r,
    u = [],
    f = _preact.options.__r;

_preact.options.__r = function (n) {
  f && f(n), t = 0, (r = n.__c).__H && (r.__H.t = q(r.__H.t));
};

var i = _preact.options.diffed;

_preact.options.diffed = function (n) {
  i && i(n);
  var t = n.__c;

  if (t) {
    var r = t.__H;
    r && (r.u = q(r.u));
  }
};

var o = _preact.options.unmount;

function c(t) {
  _preact.options.__h && _preact.options.__h(r);
  var u = r.__H || (r.__H = {
    i: [],
    t: [],
    u: []
  });
  return t >= u.i.length && u.i.push({}), u.i[t];
}

function e(n) {
  return a(L, n);
}

function a(n, u, f) {
  var i = c(t++);
  return i.__c || (i.__c = r, i.o = [f ? f(u) : L(null, u), function (t) {
    var r = n(i.o[0], t);
    i.o[0] !== r && (i.o[0] = r, i.__c.setState({}));
  }]), i.o;
}

function v(n, u) {
  var f = c(t++);
  F(f.v, u) && (f.o = n, f.v = u, r.__H.t.push(f), g(r));
}

function p(n, u) {
  var f = c(t++);
  F(f.v, u) && (f.o = n, f.v = u, r.__H.u.push(f));
}

function d(n) {
  return m(function () {
    return {
      current: n
    };
  }, []);
}

function l(n, r, u) {
  var f = c(t++);
  F(f.v, u) && (f.v = u, n && (n.current = r()));
}

function m(n, r) {
  var u = c(t++);
  return F(u.v, r) ? (u.v = r, u.p = n, u.o = n()) : u.o;
}

function s(n, t) {
  return m(function () {
    return n;
  }, t);
}

function y(n) {
  var u = r.context[n.__c];
  if (!u) return n.__p;
  var f = c(t++);
  return null == f.o && (f.o = !0, u.sub(r)), u.props.value;
}

function _(t, r) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(r ? r(t) : t);
}

_preact.options.unmount = function (n) {
  o && o(n);
  var t = n.__c;

  if (t) {
    var r = t.__H;
    r && r.i.forEach(function (n) {
      return n.l && n.l();
    });
  }
};

var g = function () {};

function w() {
  u.some(function (n) {
    n.m = !1, n.__P && (n.__H.t = q(n.__H.t));
  }), u = [];
}

function E() {
  setTimeout(w);
}

function q(n) {
  return n.forEach(x), n.forEach(A), [];
}

function x(n) {
  n.l && n.l();
}

function A(n) {
  var t = n.o();
  "function" == typeof t && (n.l = t);
}

function F(n, t) {
  return !n || t.some(function (t, r) {
    return t !== n[r];
  });
}

function L(n, t) {
  return "function" == typeof t ? t(n) : t;
}

"undefined" != typeof window && (g = function (t) {
  !t.m && (t.m = !0) && 1 === u.push(t) && (_preact.options.requestAnimationFrame ? _preact.options.requestAnimationFrame(w) : requestAnimationFrame(E));
});
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact/compat/dist/compat.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  version: true,
  Children: true,
  render: true,
  hydrate: true,
  unmountComponentAtNode: true,
  createPortal: true,
  createElement: true,
  createFactory: true,
  cloneElement: true,
  isValidElement: true,
  findDOMNode: true,
  PureComponent: true,
  memo: true,
  forwardRef: true,
  unstable_batchedUpdates: true,
  Suspense: true,
  lazy: true,
  createContext: true,
  createRef: true,
  Fragment: true,
  Component: true
};
exports.hydrate = exports.render = C;
exports.unmountComponentAtNode = _;
exports.createPortal = E;
exports.createElement = N;
exports.createFactory = x;
exports.cloneElement = S;
exports.isValidElement = O;
exports.findDOMNode = M;
exports.memo = U;
exports.forwardRef = Z;
exports.unstable_batchedUpdates = L;
Object.defineProperty(exports, "createContext", {
  enumerable: true,
  get: function () {
    return _preact.createContext;
  }
});
Object.defineProperty(exports, "createRef", {
  enumerable: true,
  get: function () {
    return _preact.createRef;
  }
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _preact.Fragment;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function () {
    return _preact.Component;
  }
});
exports.lazy = exports.Suspense = exports.PureComponent = exports.Children = exports.version = exports.default = void 0;

var n = _interopRequireWildcard(require("preact/hooks"));

Object.keys(n).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return n[key];
    }
  });
});

var _preact = require("preact");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function d(n, t) {
  for (var r in t) n[r] = t[r];

  return n;
}

function h() {
  this.t = [];
}

(h.prototype = new _preact.Component()).o = function (n) {
  var t = this;
  t.t.push(n);

  var r = function () {
    t.t[t.t.indexOf(n)] = t.t[t.t.length - 1], t.t.pop(), 0 == t.t.length && ((0, _preact._unmount)(t.props.fallback), t.__v.__e = null, t.__v.__k = t.state.i, t.setState({
      i: null
    }));
  };

  null == t.state.i && (t.setState({
    i: t.__v.__k
  }), function n(t) {
    for (var r = 0; r < t.length; r++) {
      var e = t[r];
      null != e && ("function" != typeof e.type && e.__e ? (i = void 0, (i = (o = e.__e).parentNode) && i.removeChild(o)) : e.__k && n(e.__k));
    }

    var o, i;
  }(t.__v.__k), t.__v.__k = []), n.then(r, r);
}, h.prototype.render = function (n, t) {
  return t.i ? n.fallback : n.children;
};
var p = "16.8.0",
    m = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    y = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
    b = _preact.options.event;
exports.version = p;

_preact.options.event = function (n) {
  return b && (n = b(n)), n.persist = function () {}, n.nativeEvent = n;
};

var g = _preact.options.__E;

function x(n) {
  return N.bind(null, n);
}

function C(n, t, r) {
  return (0, _preact.render)(n, t), "function" == typeof r && r(), n ? n.__c : null;
}

_preact.options.__E = function (n, t, r) {
  return g && g(n, t, r) || function (n, t, r) {
    if (n.then) for (var e, o = t; o; o = o.__p) if ((e = o.__c) && e.o) return r && (t.__e = r.__e, t.__k = r.__k), e.o(n), !0;
    return !1;
  }(n, t, r);
};

var w = function () {};

function k(n) {
  var t = (0, _preact.h)(w, {
    context: this.context
  }, n.vnode),
      r = n.container;
  return n.container !== this.container && ((0, _preact.hydrate)("", r), this.container = r), C(t, r), this.componentWillUnmount = function () {
    C(null, r);
  }, null;
}

function E(n, t) {
  return (0, _preact.h)(k, {
    vnode: n,
    container: t
  });
}

w.prototype.getChildContext = function () {
  return this.props.context;
}, w.prototype.render = function (n) {
  return n.children;
};

var A = function (n, t) {
  return n ? (0, _preact.toChildArray)(n).map(t) : null;
},
    F = {
  map: A,
  forEach: A,
  count: function (n) {
    return n ? (0, _preact.toChildArray)(n).length : 0;
  },
  only: function (n) {
    if (1 !== (n = (0, _preact.toChildArray)(n)).length) throw new Error("Children.only() expects only one child.");
    return n[0];
  },
  toArray: _preact.toChildArray
};

exports.Children = F;

function N() {
  for (var n = [], t = arguments.length; t--;) n[t] = arguments[t];

  var r = _preact.h.apply(void 0, n),
      e = r.type,
      o = r.props;

  return "function" != typeof e && (o.defaultValue && (o.value || 0 === o.value || (o.value = o.defaultValue), delete o.defaultValue), Array.isArray(o.value) && o.multiple && "select" === e && ((0, _preact.toChildArray)(o.children).forEach(function (n) {
    -1 != o.value.indexOf(n.props.value) && (n.props.selected = !0);
  }), delete o.value), function (n, t) {
    var r, e, o;

    for (o in t) if (r = y.test(o)) break;

    if (r) for (o in e = n.props = {}, t) e[y.test(o) ? o.replace(/([A-Z0-9])/, "-$1").toLowerCase() : o] = t[o];
  }(r, o)), r.preactCompatNormalized = !1, R(r);
}

function R(n) {
  return n.preactCompatNormalized = !0, function (n) {
    var t = n.props;
    (t.class || t.className) && (j.enumerable = "className" in t, t.className && (t.class = t.className), Object.defineProperty(t, "className", j));
  }(n), n;
}

function S(n) {
  if (!O(n)) return n;
  var t = R(_preact.cloneElement.apply(null, arguments));
  return t.$$typeof = m, t;
}

function O(n) {
  return !!n && n.$$typeof === m;
}

function _(n) {
  return !!n.__k && ((0, _preact.render)(null, n), !0);
}

var j = {
  configurable: !0,
  get: function () {
    return this.class;
  }
};

function z(n, t) {
  for (var r in n) if (!(r in t)) return !0;

  for (var e in t) if (n[e] !== t[e]) return !0;

  return !1;
}

function M(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}

var P = function (n) {
  function t(t) {
    n.call(this, t), this.isPureReactComponent = !0;
  }

  return n && (t.__proto__ = n), (t.prototype = Object.create(n && n.prototype)).constructor = t, t.prototype.shouldComponentUpdate = function (n, t) {
    return z(this.props, n) || z(this.state, t);
  }, t;
}(_preact.Component);

exports.PureComponent = P;

function U(n, t) {
  function r(n) {
    var r = this.props.ref,
        e = r == n.ref;
    return e || (r.call ? r(null) : r.current = null), (t ? !t(this.props, n) : z(this.props, n)) || !e;
  }

  function e(t) {
    return this.shouldComponentUpdate = r, (0, _preact.h)(n, d({}, t));
  }

  return e.displayName = "Memo(" + (n.displayName || n.name) + ")", e.u = !0, e;
}

function W(n, t) {
  Object.defineProperty(n.prototype, "UNSAFE_" + t, {
    configurable: !0,
    get: function () {
      return this[t];
    },
    set: function (n) {
      this[t] = n;
    }
  });
}

function Z(n) {
  function t(t) {
    var r = t.ref;
    return delete t.ref, n(t, r);
  }

  return t.u = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}

_preact.Component.prototype.isReactComponent = {}, W(_preact.Component, "componentWillMount"), W(_preact.Component, "componentWillReceiveProps"), W(_preact.Component, "componentWillUpdate");
var D = _preact.options.vnode;

function L(n, t) {
  n(t);
}

_preact.options.vnode = function (n) {
  n.$$typeof = m, function (t) {
    var r = n.type,
        e = n.props;

    if (e && "string" == typeof r) {
      var o = {};

      for (var i in e) o[i.toLowerCase()] = i;

      if (o.ondoubleclick && (e.ondblclick = e[o.ondoubleclick], delete e[o.ondoubleclick]), o.onbeforeinput && (e.onbeforeinput = e[o.onbeforeinput], delete e[o.onbeforeinput]), o.onchange && ("textarea" === r || "input" === r.toLowerCase() && !/^fil|che|rad/i.test(e.type))) {
        var u = o.oninput || "oninput";
        e[u] || (e[u] = e[o.onchange], delete e[o.onchange]);
      }
    }
  }();
  var t = n.type;
  t && t.u && n.ref && (n.props.ref = n.ref, n.ref = null), D && D(n);
};

var V = h,
    $ = function (n) {
  var t, e, o;

  function i(i) {
    if (t || (t = n()).then(function (n) {
      e = n.default;
    }, function (n) {
      o = n;
    }), o) throw o;
    if (!e) throw t;
    return (0, _preact.createElement)(e, i);
  }

  return i.displayName = "Lazy", i;
};

exports.lazy = $;
exports.Suspense = V;

var _default = d({
  version: "16.8.0",
  Children: F,
  render: C,
  hydrate: C,
  unmountComponentAtNode: _,
  createPortal: E,
  createElement: N,
  createContext: _preact.createContext,
  createFactory: x,
  cloneElement: S,
  createRef: _preact.createRef,
  Fragment: _preact.Fragment,
  isValidElement: O,
  findDOMNode: M,
  Component: _preact.Component,
  PureComponent: P,
  memo: U,
  forwardRef: Z,
  unstable_batchedUpdates: L
}, n);

exports.default = _default;
},{"preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","preact":"../node_modules/preact/dist/preact.module.js"}],"HotManager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  register: function register(moduleId) {
    this._moduleId = moduleId;
  },
  getRegistered: function getRegistered() {
    return this._moduleId;
  }
};
exports.default = _default;
},{}],"../node_modules/wouter/history.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createHistory;

function createHistory() {
  monkeyPatchHistoryEvents();
  return {
    path: () => location.pathname,
    push: to => history.pushState({}, null, to),
    subscribe: cb => {
      const handler = () => cb(location.pathname);

      return on(handler, "popstate", "pushState", "replaceState");
    }
  };
} // subscribe to multiple window events at once


const on = (cb, ...events) => {
  events.map(e => window.addEventListener(e, cb));
  return () => events.map(e => window.removeEventListener(e, cb));
}; // While History API does have `popState` event, the only
// proper way to listen to changes via `push/replaceState`
// is to monkey-patch these methods.
//
// See https://stackoverflow.com/a/4585031


const monkeyPatchHistoryEvents = (() => {
  let patched = false;
  return () => {
    if (patched) return false;

    const patchEvent = type => {
      const orig = history[type];
      return function () {
        const result = orig.apply(this, arguments);
        const event = new Event(type);
        event.arguments = arguments;
        window.dispatchEvent(event);
        return result;
      };
    };

    history.pushState = patchEvent("pushState");
    history.replaceState = patchEvent("replaceState");
    return patched = true;
  };
})();
},{}],"../node_modules/wouter/matcher.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeMatcher;

// creates a matcher function
function makeMatcher(makeRegexpFn = pathToRegexp) {
  let cache = {}; // obtains a cached regexp version of the pattern

  const getRegexp = pattern => {
    if (cache[pattern]) return cache[pattern];
    let keys = [];
    return cache[pattern] = [makeRegexpFn(pattern, keys), keys];
  };

  return (pattern, path) => {
    const [regexp, keys] = getRegexp(pattern || "");
    const out = regexp.exec(path);
    if (!out) return [false, null]; // formats an object with matched params

    const params = keys.reduce((params, key, i) => {
      params[key.name] = out[i + 1];
      return params;
    }, {});
    return [true, params];
  };
} // escapes a regexp string (borrowed from path-to-regexp sources)
// https://github.com/pillarjs/path-to-regexp/blob/v3.0.0/index.js#L202


const escapeRx = str => str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"); // returns a segment representation in RegExp based on flags
// adapted and simplified version from path-to-regexp sources


const rxForSegment = (repeat, optional, prefix) => {
  let capture = repeat ? "((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)" : "([^\\/]+?)";
  if (optional && prefix) capture = "(?:\\/" + capture + ")";
  return capture + (optional ? "?" : "");
};

const pathToRegexp = (pattern, keys) => {
  const groupRx = /:([A-Za-z0-9_]+)([?+*]?)/g;
  let match = null,
      lastIndex = 0,
      result = "";

  while ((match = groupRx.exec(pattern)) !== null) {
    const [_, segment, mod] = match; // :foo  [1]      (  )
    // :foo? [0 - 1]  ( o)
    // :foo+ [1 - ∞]  (r )
    // :foo* [0 - ∞]  (ro)

    const repeat = mod === "+" || mod === "*";
    const optional = mod === "?" || mod === "*";
    const prefix = optional && pattern[match.index - 1] === "/" ? 1 : 0;
    const prev = pattern.substring(lastIndex, match.index - prefix);
    if (keys) keys.push({
      name: segment
    });
    lastIndex = groupRx.lastIndex;
    result += escapeRx(prev) + rxForSegment(repeat, optional, prefix);
  }

  result += escapeRx(pattern.substring(lastIndex));
  return new RegExp("^" + result + "(?:\\/)?$", "i");
};
},{}],"../node_modules/wouter/react-deps.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useRef", {
  enumerable: true,
  get: function () {
    return _react.useRef;
  }
});
Object.defineProperty(exports, "useMemo", {
  enumerable: true,
  get: function () {
    return _react.useMemo;
  }
});
Object.defineProperty(exports, "useEffect", {
  enumerable: true,
  get: function () {
    return _react.useEffect;
  }
});
Object.defineProperty(exports, "useState", {
  enumerable: true,
  get: function () {
    return _react.useState;
  }
});
Object.defineProperty(exports, "useContext", {
  enumerable: true,
  get: function () {
    return _react.useContext;
  }
});
Object.defineProperty(exports, "useCallback", {
  enumerable: true,
  get: function () {
    return _react.useCallback;
  }
});
Object.defineProperty(exports, "createContext", {
  enumerable: true,
  get: function () {
    return _react.createContext;
  }
});
Object.defineProperty(exports, "isValidElement", {
  enumerable: true,
  get: function () {
    return _react.isValidElement;
  }
});
Object.defineProperty(exports, "cloneElement", {
  enumerable: true,
  get: function () {
    return _react.cloneElement;
  }
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function () {
    return _react.createElement;
  }
});

var _react = require("react");
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"../node_modules/wouter/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Redirect = exports.Switch = exports.Link = exports.Route = exports.Router = exports.useRoute = exports.useLocation = exports.useRouter = exports.buildRouter = void 0;

var _history = _interopRequireDefault(require("./history.js"));

var _matcher = _interopRequireDefault(require("./matcher.js"));

var _reactDeps = require("./react-deps.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Part 1, Hooks API: useRouter, useRoute and useLocation
 */
const RouterCtx = (0, _reactDeps.createContext)();

const buildRouter = (options = {}) => {
  return {
    history: options.history || (0, _history.default)(),
    matcher: options.matcher || (0, _matcher.default)()
  };
};

exports.buildRouter = buildRouter;

const useRouter = () => {
  const providedRouter = (0, _reactDeps.useContext)(RouterCtx); // either obtain the router from the outer context
  // (provided by the `<Router /> component) or create
  // a default one on demand.

  const router = (0, _reactDeps.useMemo)(() => providedRouter ? providedRouter : buildRouter(), [providedRouter]);
  return router;
};

exports.useRouter = useRouter;

const useLocation = () => {
  const history = useRouter().history;
  const [location, update] = (0, _reactDeps.useState)(history.path()); // subscribe to history updates

  (0, _reactDeps.useEffect)(() => history.subscribe(x => update(x)), [history]);
  const pushLocation = (0, _reactDeps.useCallback)(y => history.push(y), [history]);
  return [location, pushLocation];
};

exports.useLocation = useLocation;

const useRoute = pattern => {
  const router = useRouter();
  const [path] = useLocation();
  return router.matcher(pattern, path);
};
/*
 * Part 2, Low Carb Router API: Router, Route, Link, Switch
 */


exports.useRoute = useRoute;

const Router = props => {
  const ref = (0, _reactDeps.useRef)(null); // this little trick allows to avoid having unnecessary
  // calls to potentially expensive `buildRouter` method.
  // https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily

  function getRouter() {
    if (ref.current !== null) {
      return ref.current;
    } else {
      return ref.current = buildRouter(props);
    }
  }

  return (0, _reactDeps.createElement)(RouterCtx.Provider, {
    value: getRouter(),
    children: props.children
  });
};

exports.Router = Router;

const Route = props => {
  const [matches, params] = useRoute(props.path);

  if (!matches && !props.match) {
    return null;
  } // React-Router style `component` prop


  if (props.component) {
    return (0, _reactDeps.createElement)(props.component, {
      params: params
    });
  } // support render prop or plain children


  return typeof props.children === "function" ? props.children(params) : props.children;
};

exports.Route = Route;

const Link = props => {
  const [, navigate] = useLocation();
  const href = props.href || props.to;
  const {
    children,
    onClick
  } = props;
  const handleClick = (0, _reactDeps.useCallback)(event => {
    event.preventDefault();
    navigate(href);
    onClick && onClick();
  }, [href, onClick, navigate]); // wraps children in `a` if needed

  const extraProps = {
    href,
    onClick: handleClick,
    to: null
  };
  const jsx = (0, _reactDeps.isValidElement)(children) ? children : (0, _reactDeps.createElement)("a", props);
  return (0, _reactDeps.cloneElement)(jsx, extraProps);
};

exports.Link = Link;

const Switch = ({
  children,
  location
}) => {
  const {
    matcher
  } = useRouter();
  const [originalLocation] = useLocation(); // make sure the `children` prop is always an array
  // this is a bit hacky, because it returns [[]], in
  // case of an empty array, but this case should be
  // properly handled below in the loop.

  children = children && children.length ? children : [children];

  for (const element of children) {
    if ((0, _reactDeps.isValidElement)(element) && // we don't require an element to be of type Route,
    // but we do require it to contain a truthy `path` prop.
    // this allows to use different components that wrap Route
    // inside of a switch, for example <AnimatedRoute />.
    element.props.path && matcher(element.props.path, location || originalLocation)[0]) return (0, _reactDeps.cloneElement)(element, {
      match: true
    });
  }

  return null;
};

exports.Switch = Switch;

const Redirect = props => {
  const [, push] = useLocation();
  (0, _reactDeps.useEffect)(() => push(props.href || props.to));
  return null;
};

exports.Redirect = Redirect;
var _default = useRoute;
exports.default = _default;
},{"./history.js":"../node_modules/wouter/history.js","./matcher.js":"../node_modules/wouter/matcher.js","./react-deps.js":"../node_modules/wouter/react-deps.js"}],"assets/svg/support-unactive.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("g", {
  className: "support-unactive_svg__color"
}, _react.default.createElement("path", {
  d: "M22.998 11.999c0 6.074-4.925 10.999-11 10.999-6.074 0-10.998-4.925-10.998-11C1 5.925 5.924 1 11.999 1c6.074 0 10.999 4.924 10.999 10.999z",
  stroke: "#FFD05D",
  strokeWidth: 2
}), _react.default.createElement("path", {
  d: "M7.086 13.81c-.31-.295-.803.029-.648.437.887 2.211 3.056 3.788 5.591 3.788a5.979 5.979 0 0 0 5.535-3.675c.169-.395-.338-.733-.634-.437-1.76 1.704-5.492 4.127-9.844-.113zM8.466 9.853c0 .817-.394 1.493-.887 1.493s-.887-.662-.887-1.493c0-.817.394-1.493.887-1.493s.887.662.887 1.493zM17.31 9.853c0 .817-.394 1.493-.887 1.493-.492 0-.887-.662-.887-1.493 0-.817.395-1.493.887-1.493.493 0 .888.662.888 1.493z",
  fill: "#FFD05D"
}));

var SvgSupportUnactive = function SvgSupportUnactive(props) {
  return _react.default.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), _ref);
};

var _default = SvgSupportUnactive;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/support-active.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("g", {
  filter: "url(#support-active_svg__filter0_dd)"
}, _react.default.createElement("path", {
  d: "M13.999 25.998c6.627 0 11.999-5.372 11.999-12 0-6.626-5.372-11.998-12-11.998C7.373 2 2 7.372 2 13.999c0 6.627 5.372 11.999 11.999 11.999z",
  fill: "#FFD05D"
}));

var _ref2 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M20.281 3.754a11.946 11.946 0 0 1 1.887 6.465c0 6.633-5.38 11.999-11.999 11.999-2.295 0-4.45-.648-6.28-1.775A12.005 12.005 0 0 0 14 25.978c6.633 0 11.999-5.38 11.999-12 .014-4.323-2.281-8.111-5.718-10.224z",
  fill: "#FDC453"
});

var _ref3 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M3.635 15.26c0-6.154 4.986-11.139 11.14-11.139 3.591 0 6.803 1.704 8.83 4.352a11.122 11.122 0 0 0-9.66-5.591c-6.155 0-11.14 4.985-11.14 11.14 0 2.563.859 4.915 2.31 6.788a10.996 10.996 0 0 1-1.48-5.55z",
  fill: "#FFD77F"
});

var _ref4 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M9.086 15.81c-.31-.295-.803.029-.648.437.887 2.211 3.056 3.788 5.591 3.788a5.979 5.979 0 0 0 5.535-3.675c.169-.395-.338-.733-.634-.437-1.76 1.704-5.492 4.127-9.844-.113z",
  fill: "#5E4939"
});

var _ref5 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M10.466 11.853c0 .817-.394 1.493-.887 1.493s-.887-.662-.887-1.493c0-.817.394-1.493.887-1.493s.887.662.887 1.493zM19.31 11.853c0 .817-.394 1.493-.887 1.493-.492 0-.887-.662-.887-1.493 0-.817.394-1.493.887-1.493s.888.662.888 1.493z",
  fill: "#303030"
});

var _ref6 =
/*#__PURE__*/
_react.default.createElement("defs", null, _react.default.createElement("filter", {
  id: "support-active_svg__filter0_dd",
  x: 0,
  y: 0,
  width: 27.998,
  height: 29.998,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, _react.default.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), _react.default.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), _react.default.createElement("feOffset", {
  dy: 2
}), _react.default.createElement("feGaussianBlur", {
  stdDeviation: 1
}), _react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0"
}), _react.default.createElement("feBlend", {
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), _react.default.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), _react.default.createElement("feOffset", null), _react.default.createElement("feGaussianBlur", {
  stdDeviation: 1
}), _react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
}), _react.default.createElement("feBlend", {
  in2: "effect1_dropShadow",
  result: "effect2_dropShadow"
}), _react.default.createElement("feBlend", {
  "in": "SourceGraphic",
  in2: "effect2_dropShadow",
  result: "shape"
})));

var SvgSupportActive = function SvgSupportActive(props) {
  return _react.default.createElement("svg", _extends({
    width: 28,
    height: 30,
    viewBox: "0 0 28 30",
    fill: "none"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6);
};

var _default = SvgSupportActive;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/chat-active.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("g", {
  filter: "url(#chat-active_svg__filter0_dd)"
}, _react.default.createElement("path", {
  d: "M2 26l2.064-6.192a11.737 11.737 0 0 1-1.65-6.015C2.414 7.28 7.694 2 14.207 2 20.72 2 26 7.28 26 13.793c0 6.513-5.28 11.793-11.793 11.793a11.73 11.73 0 0 1-5.487-1.354L2 26z",
  fill: "#FFD05D"
}));

var _ref2 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M20.281 3.754a11.946 11.946 0 0 1 1.887 6.465c0 6.633-5.38 11.999-11.999 11.999-2.295 0-4.45-.648-6.28-1.775A12.005 12.005 0 0 0 14 25.978c6.633 0 11.999-5.38 11.999-12 .014-4.323-2.282-8.111-5.718-10.224z",
  fill: "#FDC453"
});

var _ref3 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M3.636 15.26c0-6.154 4.985-11.139 11.14-11.139 3.59 0 6.802 1.704 8.83 4.352a11.122 11.122 0 0 0-9.661-5.591c-6.155 0-11.14 4.985-11.14 11.14 0 2.563.859 4.915 2.31 6.788a10.996 10.996 0 0 1-1.48-5.55z",
  fill: "#FFD77F"
});

var _ref4 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M9.774 13.493c0 .817-.394 1.493-.887 1.493S8 14.324 8 13.493c0-.817.394-1.493.887-1.493s.887.662.887 1.493zM19.774 13.493c0 .817-.394 1.493-.887 1.493S18 14.324 18 13.493c0-.817.394-1.493.887-1.493s.887.662.887 1.493zM14.774 13.493c0 .817-.394 1.493-.887 1.493S13 14.324 13 13.493c0-.817.394-1.493.887-1.493s.887.662.887 1.493z",
  fill: "#303030"
});

var _ref5 =
/*#__PURE__*/
_react.default.createElement("defs", null, _react.default.createElement("filter", {
  id: "chat-active_svg__filter0_dd",
  x: 0,
  y: 0,
  width: 28,
  height: 30,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, _react.default.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), _react.default.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), _react.default.createElement("feOffset", {
  dy: 2
}), _react.default.createElement("feGaussianBlur", {
  stdDeviation: 1
}), _react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0"
}), _react.default.createElement("feBlend", {
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), _react.default.createElement("feColorMatrix", {
  "in": "SourceAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), _react.default.createElement("feOffset", null), _react.default.createElement("feGaussianBlur", {
  stdDeviation: 1
}), _react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
}), _react.default.createElement("feBlend", {
  in2: "effect1_dropShadow",
  result: "effect2_dropShadow"
}), _react.default.createElement("feBlend", {
  "in": "SourceGraphic",
  in2: "effect2_dropShadow",
  result: "shape"
})));

var SvgChatActive = function SvgChatActive(props) {
  return _react.default.createElement("svg", _extends({
    width: 28,
    height: 30,
    viewBox: "0 0 28 30",
    fill: "none"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5);
};

var _default = SvgChatActive;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/chat-unactive.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  className: "chat-unactive_svg__color",
  d: "M1.533 22.563l1.48-4.438.144-.434-.233-.393a10.737 10.737 0 0 1-1.51-5.505h0C1.414 5.833 6.246 1 12.207 1 18.167 1 23 5.832 23 11.793c0 5.961-4.832 10.793-10.793 10.793a10.73 10.73 0 0 1-5.02-1.239l-.345-.181-.376.099-4.933 1.297z",
  stroke: "#FFD05D",
  strokeWidth: 2
});

var SvgChatUnactive = function SvgChatUnactive(props) {
  return _react.default.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), _ref);
};

var _default = SvgChatUnactive;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/sound.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  className: "sound_svg__color",
  d: "M0 6v6h4l5 5V1L4 6H0zm13.5 3A4.5 4.5 0 0 0 11 4.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM11 .23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z",
  fill: "#fff"
});

var SvgSound = function SvgSound(props) {
  return _react.default.createElement("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none"
  }, props), _ref);
};

var _default = SvgSound;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/arrow.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  className: "arrow_svg__color",
  d: "M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16V7z",
  fill: "#2E4D6A"
});

var SvgArrow = function SvgArrow(props) {
  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none"
  }, props), _ref);
};

var _default = SvgArrow;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/trash.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  className: "trash_svg__color",
  d: "M1 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4H1v12zM14 1h-3.5l-1-1h-5l-1 1H0v2h14V1z",
  fill: "#2E4D6A"
});

var SvgTrash = function SvgTrash(props) {
  return _react.default.createElement("svg", _extends({
    width: 14,
    height: 18,
    viewBox: "0 0 14 18",
    fill: "none"
  }, props), _ref);
};

var _default = SvgTrash;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/attach.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M9.5 5v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V4a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V5H3v9.5a2.5 2.5 0 0 0 5 0V4c0-2.21-1.79-4-4-4S0 1.79 0 4v12.5C0 19.54 2.46 22 5.5 22s5.5-2.46 5.5-5.5V5H9.5z",
  fill: "#2E4D6A"
});

var SvgAttach = function SvgAttach(props) {
  return _react.default.createElement("svg", _extends({
    width: 11,
    height: 22,
    viewBox: "0 0 11 22",
    fill: "none"
  }, props), _ref);
};

var _default = SvgAttach;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/send.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  className: "send_svg__color",
  d: "M.01 18L21 9 .01 0 0 7l15 2-15 2 .01 7z",
  fill: "#2E4D6A"
});

var SvgSend = function SvgSend(props) {
  return _react.default.createElement("svg", _extends({
    width: 21,
    height: 18,
    viewBox: "0 0 21 18",
    fill: "none"
  }, props), _ref);
};

var _default = SvgSend;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/notsend.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M8 19a6.999 6.999 0 0 1-6.93-6h.001c.486 3.39 3.406 6 6.929 6zm0 0c3.868 0 7-3.132 7-7m-7 7c3.862 0 7-3.138 7-7m0 0c0-3.868-3.132-7-7-7 3.862 0 7 3.138 7 7zM7 4V7.586L4.414 5 7 2.414V4z",
  stroke: "#009FD1",
  strokeWidth: 2
});

var SvgNotsend = function SvgNotsend(props) {
  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 20,
    viewBox: "0 0 16 20",
    fill: "none"
  }, props), _ref);
};

var _default = SvgNotsend;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/loader.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("circle", {
  className: "loader_svg__circle",
  cx: 8,
  cy: 8,
  r: 7,
  stroke: "#009FD1",
  strokeWidth: 2
});

var SvgLoader = function SvgLoader(props) {
  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none"
  }, props), _ref);
};

var _default = SvgLoader;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/tolast.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  className: "tolast_svg__color",
  d: "M1.41.59L6 5.17 10.59.59 12 2 6 8 0 2 1.41.59z",
  fill: "#2E4D6A"
});

var SvgTolast = function SvgTolast(props) {
  return _react.default.createElement("svg", _extends({
    width: 12,
    height: 8,
    viewBox: "0 0 12 8",
    fill: "none"
  }, props), _ref);
};

var _default = SvgTolast;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/search.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  className: "search_svg__color",
  d: "M12.5 11h-.79l-.28-.27A6.471 6.471 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z",
  fill: "#2E4D6A"
});

var SvgSearch = function SvgSearch(props) {
  return _react.default.createElement("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none"
  }, props), _ref);
};

var _default = SvgSearch;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/error.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M44 84.333c19.113 0 35.131-13.314 39.28-31.166C79.13 35.315 63.112 22 44 22 24.888 22 8.87 35.315 4.721 53.167c4.148 17.852 20.167 31.166 39.28 31.166z",
  fill: "#E3EFFA"
});

var _ref2 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M25.804 62.104l1.902-1.673a24.732 24.732 0 0 1 16.34-6.141 24.768 24.768 0 0 1 16.316 6.118l1.903 1.673-3.37 3.781-1.901-1.672A19.666 19.666 0 0 0 44 59.308a19.71 19.71 0 0 0-12.994 4.882l-1.902 1.672-3.3-3.758z",
  fill: "#009FD1"
});

var _ref3 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M44 0C19.731 0 0 19.731 0 44s19.731 44 44 44 44-19.731 44-44S68.269 0 44 0zm0 82.523C22.756 82.523 5.477 65.243 5.477 44 5.477 22.756 22.757 5.477 44 5.477c21.244 0 38.523 17.28 38.523 38.523 0 21.244-17.28 38.523-38.523 38.523z",
  fill: "#009FD1"
});

var _ref4 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M25.667 33H33v7.333h-7.333V33zM55 33h7.333v7.333H55V33z",
  fill: "#009FD1"
});

var SvgError = function SvgError(props) {
  return _react.default.createElement("svg", _extends({
    width: 80,
    height: 88,
    viewBox: "0 0 88 88",
    fill: "none"
  }, props), _ref, _ref2, _ref3, _ref4);
};

var _default = SvgError;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/success.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  opacity: 0.2,
  d: "M12 23c5.212 0 9.581-3.631 10.712-8.5C21.582 9.631 17.212 6 12 6 6.787 6 2.419 9.631 1.287 14.5 2.42 19.369 6.787 23 12 23z",
  fill: "#08D6B7"
});

var _ref2 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M16.969 15.844l-.519.456a6.745 6.745 0 0 1-4.456 1.675 6.755 6.755 0 0 1-4.45-1.669l-.519-.456.906-1.031.52.456a5.363 5.363 0 0 0 3.543 1.331 5.375 5.375 0 0 0 3.544-1.331l.518-.456.913 1.025z",
  fill: "#08D6B7"
});

var _ref3 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M12 0C5.381 0 0 5.381 0 12s5.381 12 12 12 12-5.381 12-12S18.619 0 12 0zm0 22.506C6.206 22.506 1.494 17.794 1.494 12 1.494 6.206 6.206 1.494 12 1.494c5.794 0 10.506 4.712 10.506 10.506 0 5.794-4.712 10.506-10.506 10.506z",
  fill: "#08D6B7"
});

var _ref4 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M7 9h2v2H7V9zM15 9h2v2h-2V9z",
  fill: "#08D6B7"
});

var SvgSuccess = function SvgSuccess(props) {
  return _react.default.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), _ref, _ref2, _ref3, _ref4);
};

var _default = SvgSuccess;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/cross.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  className: "cross_svg__color",
  d: "M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41z",
  fill: "#2E4D6A"
});

var SvgCross = function SvgCross(props) {
  return _react.default.createElement("svg", _extends({
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none"
  }, props), _ref);
};

var _default = SvgCross;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/question.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 17H9v-2h2v2zm2.07-7.75l-.9.92C11.45 10.9 11 11.5 11 13H9v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z",
  fill: "#9878B6"
});

var _ref2 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 17H9v-2h2v2zm2.07-7.75l-.9.92C11.45 10.9 11 11.5 11 13H9v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z",
  fill: "#000",
  fillOpacity: 0.24
});

var SvgQuestion = function SvgQuestion(props) {
  return _react.default.createElement("svg", _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none"
  }, props), _ref, _ref2);
};

var _default = SvgQuestion;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/points.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M3 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
  fill: "#9878B6"
});

var SvgPoints = function SvgPoints(props) {
  return _react.default.createElement("svg", _extends({
    width: 14,
    height: 3,
    viewBox: "0 0 14 3",
    fill: "none"
  }, props), _ref);
};

var _default = SvgPoints;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/file.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  className: "file_svg__color",
  d: "M85.975 8.807H61.033C60.272 3.823 56.106 0 51.097 0H21.726c-5.547 0-10.06 4.688-10.06 10.45v2.52h-1.572c-5.547 0-10.06 4.688-10.06 10.45v61.594C.035 86.665 1.323 88 2.91 88h78.62c1.588 0 2.874-1.336 2.874-2.986V75.03h8.758c1.587 0 2.874-1.337 2.874-2.986V19.258c0-5.762-4.513-10.45-10.06-10.45zm-36.574 12.97c-.76-4.984-4.926-8.807-9.936-8.807h-22.05v-2.52c0-2.47 1.934-4.479 4.31-4.479h29.372c2.378 0 4.312 2.01 4.312 4.479v1.343c0 1.649 1.287 2.985 2.874 2.985h27.692c2.378 0 4.312 2.01 4.312 4.479v49.802h-5.884V32.227c0-5.762-4.513-10.45-10.06-10.45H49.401zM78.655 82.03H5.783v-58.61c0-2.469 1.934-4.478 4.311-4.478h29.371c2.378 0 4.312 2.009 4.312 4.478v1.344c0 1.649 1.287 2.985 2.874 2.985h27.692c2.378 0 4.312 2.01 4.312 4.48v49.8z",
  fill: "#08D6B7"
});

var SvgFile = function SvgFile(props) {
  return _react.default.createElement("svg", _extends({
    width: 97,
    height: 88,
    viewBox: "0 0 97 88",
    fill: "none"
  }, props), _ref);
};

var _default = SvgFile;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/file-loader.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("circle", {
  cx: 44,
  cy: 44,
  r: 41,
  stroke: "#08D6B7",
  strokeWidth: 6
});

var SvgFileLoader = function SvgFileLoader(props) {
  return _react.default.createElement("svg", _extends({
    width: 88,
    height: 88,
    viewBox: "0 0 88 88",
    fill: "none"
  }, props), _ref);
};

var _default = SvgFileLoader;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/file-min.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  className: "file-min_svg__color",
  d: "M2 0C.9 0 .01.9.01 2L0 18c0 1.1.89 2 1.99 2H14c1.1 0 2-.9 2-2V6l-6-6H2zm7 7V1.5L14.5 7H9z",
  fill: "#2E4D6A"
});

var SvgFileMin = function SvgFileMin(props) {
  return _react.default.createElement("svg", _extends({
    width: 16,
    height: 20,
    viewBox: "0 0 16 20",
    fill: "none"
  }, props), _ref);
};

var _default = SvgFileMin;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/svg/mute.svg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var _ref =
/*#__PURE__*/
_react.default.createElement("path", {
  className: "mute_svg__color",
  d: "M13.5 9A4.5 4.5 0 0 0 11 4.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zM16 9c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 18 9c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM1.27 0L0 1.27 4.73 6H0v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L16.73 18 18 16.73l-9-9L1.27 0zM9 1L6.91 3.09 9 5.18V1z",
  fill: "#fff"
});

var SvgMute = function SvgMute(props) {
  return _react.default.createElement("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none"
  }, props), _ref);
};

var _default = SvgMute;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"assets/assets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SupportUnactive", {
  enumerable: true,
  get: function () {
    return _supportUnactive.default;
  }
});
Object.defineProperty(exports, "SupportActive", {
  enumerable: true,
  get: function () {
    return _supportActive.default;
  }
});
Object.defineProperty(exports, "ChatActive", {
  enumerable: true,
  get: function () {
    return _chatActive.default;
  }
});
Object.defineProperty(exports, "ChatUnactive", {
  enumerable: true,
  get: function () {
    return _chatUnactive.default;
  }
});
Object.defineProperty(exports, "Sound", {
  enumerable: true,
  get: function () {
    return _sound.default;
  }
});
Object.defineProperty(exports, "Arrow", {
  enumerable: true,
  get: function () {
    return _arrow.default;
  }
});
Object.defineProperty(exports, "Trash", {
  enumerable: true,
  get: function () {
    return _trash.default;
  }
});
Object.defineProperty(exports, "Attach", {
  enumerable: true,
  get: function () {
    return _attach.default;
  }
});
Object.defineProperty(exports, "Send", {
  enumerable: true,
  get: function () {
    return _send.default;
  }
});
Object.defineProperty(exports, "NotSent", {
  enumerable: true,
  get: function () {
    return _notsend.default;
  }
});
Object.defineProperty(exports, "Loader", {
  enumerable: true,
  get: function () {
    return _loader.default;
  }
});
Object.defineProperty(exports, "ToLast", {
  enumerable: true,
  get: function () {
    return _tolast.default;
  }
});
Object.defineProperty(exports, "Search", {
  enumerable: true,
  get: function () {
    return _search.default;
  }
});
Object.defineProperty(exports, "Error", {
  enumerable: true,
  get: function () {
    return _error.default;
  }
});
Object.defineProperty(exports, "Success", {
  enumerable: true,
  get: function () {
    return _success.default;
  }
});
Object.defineProperty(exports, "Cross", {
  enumerable: true,
  get: function () {
    return _cross.default;
  }
});
Object.defineProperty(exports, "Question", {
  enumerable: true,
  get: function () {
    return _question.default;
  }
});
Object.defineProperty(exports, "Points", {
  enumerable: true,
  get: function () {
    return _points.default;
  }
});
Object.defineProperty(exports, "File", {
  enumerable: true,
  get: function () {
    return _file.default;
  }
});
Object.defineProperty(exports, "FileLoader", {
  enumerable: true,
  get: function () {
    return _fileLoader.default;
  }
});
Object.defineProperty(exports, "FileMin", {
  enumerable: true,
  get: function () {
    return _fileMin.default;
  }
});
Object.defineProperty(exports, "Mute", {
  enumerable: true,
  get: function () {
    return _mute.default;
  }
});

var _supportUnactive = _interopRequireDefault(require("./svg/support-unactive.svg"));

var _supportActive = _interopRequireDefault(require("./svg/support-active.svg"));

var _chatActive = _interopRequireDefault(require("./svg/chat-active.svg"));

var _chatUnactive = _interopRequireDefault(require("./svg/chat-unactive.svg"));

var _sound = _interopRequireDefault(require("./svg/sound.svg"));

var _arrow = _interopRequireDefault(require("./svg/arrow.svg"));

var _trash = _interopRequireDefault(require("./svg/trash.svg"));

var _attach = _interopRequireDefault(require("./svg/attach.svg"));

var _send = _interopRequireDefault(require("./svg/send.svg"));

var _notsend = _interopRequireDefault(require("./svg/notsend.svg"));

var _loader = _interopRequireDefault(require("./svg/loader.svg"));

var _tolast = _interopRequireDefault(require("./svg/tolast.svg"));

var _search = _interopRequireDefault(require("./svg/search.svg"));

var _error = _interopRequireDefault(require("./svg/error.svg"));

var _success = _interopRequireDefault(require("./svg/success.svg"));

var _cross = _interopRequireDefault(require("./svg/cross.svg"));

var _question = _interopRequireDefault(require("./svg/question.svg"));

var _points = _interopRequireDefault(require("./svg/points.svg"));

var _file = _interopRequireDefault(require("./svg/file.svg"));

var _fileLoader = _interopRequireDefault(require("./svg/file-loader.svg"));

var _fileMin = _interopRequireDefault(require("./svg/file-min.svg"));

var _mute = _interopRequireDefault(require("./svg/mute.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./svg/support-unactive.svg":"assets/svg/support-unactive.svg","./svg/support-active.svg":"assets/svg/support-active.svg","./svg/chat-active.svg":"assets/svg/chat-active.svg","./svg/chat-unactive.svg":"assets/svg/chat-unactive.svg","./svg/sound.svg":"assets/svg/sound.svg","./svg/arrow.svg":"assets/svg/arrow.svg","./svg/trash.svg":"assets/svg/trash.svg","./svg/attach.svg":"assets/svg/attach.svg","./svg/send.svg":"assets/svg/send.svg","./svg/notsend.svg":"assets/svg/notsend.svg","./svg/loader.svg":"assets/svg/loader.svg","./svg/tolast.svg":"assets/svg/tolast.svg","./svg/search.svg":"assets/svg/search.svg","./svg/error.svg":"assets/svg/error.svg","./svg/success.svg":"assets/svg/success.svg","./svg/cross.svg":"assets/svg/cross.svg","./svg/question.svg":"assets/svg/question.svg","./svg/points.svg":"assets/svg/points.svg","./svg/file.svg":"assets/svg/file.svg","./svg/file-loader.svg":"assets/svg/file-loader.svg","./svg/file-min.svg":"assets/svg/file-min.svg","./svg/mute.svg":"assets/svg/mute.svg"}],"components/TopPanel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopPanel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _assets = require("../assets/assets");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TopPanel = function TopPanel(_ref) {
  var state = _ref.state,
      support = _ref.support,
      chat = _ref.chat,
      newChat = _ref.newChat,
      newSupport = _ref.newSupport,
      mute = _ref.mute;

  var _useState = (0, _react.useState)(mute),
      _useState2 = _slicedToArray(_useState, 2),
      sound = _useState2[0],
      setSound = _useState2[1];

  return _react.default.createElement("div", {
    class: "gs-chat__top-panel \n       ".concat(newSupport && "gs-chat__top-panel_new-support", "\n       ").concat(newChat && "gs-chat__top-panel_new-chat", " \n       ").concat(chat && "gs-chat__top-panel_chat", " \n       ").concat(support && "gs-chat__top-panel_support", " \n       ").concat('gs-chat__top-panel_' + state)
  }, _react.default.createElement("div", {
    class: "gs-chat__tabs"
  }, _react.default.createElement("div", {
    class: "gs-chat__tab gs-chat__tab-support"
  }, _react.default.createElement("div", {
    className: "gs-chat__tab-icon"
  }, _react.default.createElement(_assets.SupportUnactive, null), _react.default.createElement(_assets.SupportActive, null)), _react.default.createElement("span", null, "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430")), _react.default.createElement("div", {
    class: "gs-chat__tab gs-chat__tab-chat"
  }, _react.default.createElement("div", {
    className: "gs-chat__tab-icon"
  }, _react.default.createElement(_assets.ChatUnactive, null), _react.default.createElement(_assets.ChatActive, null)), _react.default.createElement("span", null, "\u0427\u0430\u0442"))), _react.default.createElement("div", {
    class: "gs-chat__top-panel-sound",
    onClick: function onClick() {
      return setSound(!sound);
    }
  }, sound ? _react.default.createElement(_assets.Mute, null) : _react.default.createElement(_assets.Sound, null)));
};

exports.TopPanel = TopPanel;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/assets":"assets/assets.js"}],"components/BlockedPanel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockedPanel = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockedPanel = function BlockedPanel() {
  return _react.default.createElement("div", {
    className: "gs-chat__blocked-panel"
  }, _react.default.createElement("button", {
    className: "gs-chat__blocked-panel__text"
  }, "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"));
};

exports.BlockedPanel = BlockedPanel;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"components/ChatItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _assets = require("../assets/assets");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ChatItem = function ChatItem(_ref) {
  var avatar = _ref.avatar,
      title = _ref.title,
      info = _ref.info,
      time = _ref.time,
      newMessage = _ref.newMessage,
      unsent = _ref.unsent,
      blocked = _ref.blocked,
      alignItem = _ref.alignItem;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      stateMessage = _useState2[0],
      setStateMessage = _useState2[1];

  if (newMessage) setStateMessage('gs-chat__chat-item_new');
  if (unsent) setStateMessage('gs-chat__chat-item_notsent');
  return _react.default.createElement("div", {
    class: "gs-chat__chat-item ".concat(stateMessage, " ").concat(alignItem && "gs-chat__chat-item_align-".concat(alignItem), " ").concat(blocked && "gs-chat__chat-item_blocked")
  }, _react.default.createElement("a", {
    href: "#",
    class: "gs-chat__chat-item__avatar"
  }, _react.default.createElement("img", {
    src: avatar,
    alt: "avatar"
  })), _react.default.createElement("div", {
    class: "gs-chat__chat-item__descr-wrapper"
  }, _react.default.createElement("div", {
    class: "gs-chat__chat-item__descr"
  }, _react.default.createElement("div", {
    class: "gs-chat__chat-item__title"
  }, _react.default.createElement("span", null, title)), _react.default.createElement("div", {
    class: "gs-chat__chat-item__info"
  }, info)), _react.default.createElement("div", {
    class: "gs-chat__chat-item__time"
  }, time), _react.default.createElement("div", {
    class: "gs-chat__chat-item__trash"
  }, _react.default.createElement(_assets.Trash, null))));
};

exports.ChatItem = ChatItem;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/assets":"assets/assets.js"}],"components/Chats.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chats = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ChatItem = require("./ChatItem");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Chats = function Chats(_ref) {
  var blockedMembers = _ref.blockedMembers,
      info = _ref.info,
      top = _ref.top,
      alignItem = _ref.alignItem;
  return _react.default.createElement("div", {
    class: "gs-chat__chats"
  }, top, info.map(function (item) {
    return _react.default.createElement(_ChatItem.ChatItem, _extends({
      alignItem: alignItem
    }, item));
  }), blockedMembers && _react.default.createElement("div", {
    className: "gs-chat__chats__blocked"
  }, "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"));
};

exports.Chats = Chats;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","./ChatItem":"components/ChatItem.js"}],"assets/avatars/1.jpg":[function(require,module,exports) {
module.exports = "/1.899dc9a8.jpg";
},{}],"assets/avatars/2.jpg":[function(require,module,exports) {
module.exports = "/2.f8fb58ab.jpg";
},{}],"assets/avatars/3.jpg":[function(require,module,exports) {
module.exports = "/3.e930199d.jpg";
},{}],"assets/avatars/4.jpg":[function(require,module,exports) {
module.exports = "/4.7d197233.jpg";
},{}],"assets/avatars/5.jpg":[function(require,module,exports) {
module.exports = "/5.80daf542.jpg";
},{}],"assets/avatars.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.avatars = void 0;
var avatars = [require('./avatars/1.jpg'), require('./avatars/2.jpg'), require('./avatars/3.jpg'), require('./avatars/4.jpg'), require('./avatars/5.jpg')];
exports.avatars = avatars;
},{"./avatars/1.jpg":"assets/avatars/1.jpg","./avatars/2.jpg":"assets/avatars/2.jpg","./avatars/3.jpg":"assets/avatars/3.jpg","./avatars/4.jpg":"assets/avatars/4.jpg","./avatars/5.jpg":"assets/avatars/5.jpg"}],"components/ToLast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToLast = void 0;

var _react = _interopRequireDefault(require("react"));

var _assets = require("../assets/assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToLast = function ToLast() {
  return _react.default.createElement("div", {
    className: "gs-chat__tolast"
  }, _react.default.createElement(_assets.ToLast, null));
};

exports.ToLast = ToLast;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/assets":"assets/assets.js"}],"pages/Chat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chat = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopPanel = require("../components/TopPanel");

var _BlockedPanel = require("../components/BlockedPanel");

var _Chats = require("../components/Chats");

var _avatars = require("../assets/avatars");

var _ToLast = require("../components/ToLast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  avatar: _avatars.avatars[0],
  time: "11:23",
  title: "Общий чат",
  info: "Решение вопросов блокировки счета, подготовка"
}, {
  avatar: _avatars.avatars[1],
  time: "11:23",
  title: "Общий чат",
  info: "Решение вопросов блокировки счета, подготовка"
}, {
  avatar: _avatars.avatars[2],
  title: "Алиса Пахомова"
}, {
  avatar: _avatars.avatars[3],
  title: "Екатерина Зверева"
}];

var Chat = function Chat() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    chat: true,
    newChat: true,
    state: 'static'
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_Chats.Chats, {
    info: items
  })), _react.default.createElement(_BlockedPanel.BlockedPanel, null));
};

exports.Chat = Chat;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/BlockedPanel":"components/BlockedPanel.js","../components/Chats":"components/Chats.js","../assets/avatars":"assets/avatars.js","../components/ToLast":"components/ToLast.js"}],"components/Member.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoreMembers = exports.Member = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Member = function Member(_ref) {
  var src = _ref.src,
      name = _ref.name,
      size = _ref.size;
  return _react.default.createElement("div", {
    class: "gs-chat__member gs-chat__member_size-".concat(size)
  }, _react.default.createElement("a", {
    href: "#",
    class: "gs-chat__member__avatar"
  }, _react.default.createElement("img", {
    src: src,
    alt: ""
  })), _react.default.createElement("div", {
    class: "gs-chat__member__name"
  }, name));
};

exports.Member = Member;

var MoreMembers = function MoreMembers(_ref2) {
  var count = _ref2.count;
  return _react.default.createElement("button", {
    class: "gs-chat__member-more"
  }, "+", count);
};

exports.MoreMembers = MoreMembers;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"components/BackPanel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackPanel = void 0;

var _assets = require("../assets/assets");

var _react = _interopRequireWildcard(require("react"));

var _Member = require("./Member");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BackPanel = function BackPanel(_ref) {
  var state = _ref.state,
      size = _ref.size,
      text = _ref.text,
      avatar = _ref.avatar,
      children = _ref.children,
      _onClick = _ref.onClick,
      members = _ref.members,
      memberSize = _ref.memberSize;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      fullHeader = _useState2[0],
      setFullHeader = _useState2[1];

  return _react.default.createElement("a", {
    onClick: function onClick() {
      if (typeof _onClick === 'function') _onClick();
      setFullHeader(!fullHeader);
    },
    className: "gs-chat__back-panel ".concat(fullHeader && 'gs-chat__back-panel_fullheader', " gs-chat__back-panel_").concat(state, " gs-chat__back-panel_size-").concat(size)
  }, _react.default.createElement("div", {
    className: "gs-chat__back-panel__icon"
  }, _react.default.createElement(_assets.Arrow, null)), avatar && _react.default.createElement("div", {
    className: "gs-chat__back-panel__avatar"
  }, _react.default.createElement("img", {
    src: avatar,
    alt: ""
  })), _react.default.createElement("div", {
    className: "gs-chat__back-panel__text"
  }, text || children), _react.default.createElement("div", {
    class: "gs-chat__back-panel__full"
  }, _react.default.createElement("div", {
    className: "gs-chat__back-panel__icon"
  }, _react.default.createElement(_assets.Arrow, null)), _react.default.createElement("div", {
    className: "gs-chat__back-panel__full__members"
  }, members && members.map(function (_ref2, i, array) {
    var name = _ref2.name,
        avatar = _ref2.avatar;
    return _react.default.createElement("div", {
      className: "gs-chat__back-panel__full__member"
    }, _react.default.createElement(_Member.Member, {
      size: memberSize,
      src: avatar,
      name: name
    }));
  }))));
};

exports.BackPanel = BackPanel;
},{"../assets/assets":"assets/assets.js","react":"../node_modules/preact/compat/dist/compat.module.js","./Member":"components/Member.js"}],"pages/ChatBlocked.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatBlocked = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopPanel = require("../components/TopPanel");

var _BackPanel = require("../components/BackPanel");

var _Chats = require("../components/Chats");

var _avatars = require("../assets/avatars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  avatar: _avatars.avatars[0],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[2],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[3],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[4],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[1],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[4],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[4],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[1],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[5],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[5],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[6],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}];

var ChatBlocked = function ChatBlocked() {
  return _react.default.createElement("div", {
    className: "gs-chat gs-chat_blocked"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    state: "static",
    chat: true
  }), _react.default.createElement(_BackPanel.BackPanel, {
    state: "static",
    text: "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u044B\u0435"
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_Chats.Chats, {
    info: items
  })));
};

exports.ChatBlocked = ChatBlocked;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/BackPanel":"components/BackPanel.js","../components/Chats":"components/Chats.js","../assets/avatars":"assets/avatars.js"}],"components/UserInfo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfo = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserInfo = function UserInfo(_ref) {
  var url = _ref.url,
      name = _ref.name,
      job = _ref.job,
      tel = _ref.tel,
      email = _ref.email;
  return _react.default.createElement("div", {
    class: "gs-chat__user-info"
  }, _react.default.createElement("div", {
    class: "gs-chat__user-info__avatar"
  }, _react.default.createElement("img", {
    src: url,
    alt: ""
  })), _react.default.createElement("div", {
    class: "gs-chat__user-info__descr"
  }, _react.default.createElement("div", {
    class: "gs-chat__user-info__name"
  }, name), _react.default.createElement("div", {
    class: "gs-chat__user-info__job"
  }, job), _react.default.createElement("a", {
    href: "tel:000",
    class: "gs-chat__user-info__tel"
  }, tel), _react.default.createElement("a", {
    href: "mailto:test@mail.ru",
    class: "gs-chat__user-info__email"
  }, email)));
};

exports.UserInfo = UserInfo;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"pages/CoWorkerContacts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoWorkerContacts = void 0;

var _react = _interopRequireDefault(require("react"));

var _avatars = require("../assets/avatars");

var _TopPanel = require("../components/TopPanel");

var _UserInfo = require("../components/UserInfo");

var _BlockedPanel = require("../components/BlockedPanel");

var _BackPanel = require("../components/BackPanel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoWorkerContacts = function CoWorkerContacts() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    newChat: true,
    chat: true
  }), _react.default.createElement(_BackPanel.BackPanel, {
    size: "min"
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_UserInfo.UserInfo, {
    email: "mail@mfdfdfdf.ru",
    tel: "+7 911 775 63 17",
    job: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
    name: "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D \u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u043E\u043F\u043E\u043B\u044C\u0441\u043A\u0438\u0439",
    url: _avatars.avatars[1]
  })));
};

exports.CoWorkerContacts = CoWorkerContacts;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/avatars":"assets/avatars.js","../components/TopPanel":"components/TopPanel.js","../components/UserInfo":"components/UserInfo.js","../components/BlockedPanel":"components/BlockedPanel.js","../components/BackPanel":"components/BackPanel.js"}],"components/ChatView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatView = exports.Data = exports.Divider = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Новые сообщения' : _ref$text;
  return _react.default.createElement("div", {
    class: "gs-chat__chat-view__divider"
  }, _react.default.createElement("div", {
    className: "gs-chat__chat-view__divider__inner"
  }, _react.default.createElement("span", null, " ", text)));
};

exports.Divider = Divider;

var Data = function Data(_ref2) {
  var data = _ref2.data;
  return _react.default.createElement("div", {
    class: "gs-chat__chat-view__data"
  }, data);
};

exports.Data = Data;

var ChatView = function ChatView(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement("div", {
    class: "gs-chat__chat-view"
  }, _react.default.createElement("div", {
    className: "gs-chat__chat-view__loader"
  }), children);
};

exports.ChatView = ChatView;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"components/SentButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SentButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _assets = require("../assets/assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SentButton = function SentButton(_ref) {
  var state = _ref.state,
      size = _ref.size,
      parent = _ref.parent,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    class: "gs-chat__sent-button gs-chat__sent-button_parent-".concat(parent, " gs-chat__sent-button_size-").concat(size)
  }, _react.default.createElement("button", {
    onClick: onClick
  }, _react.default.createElement(_assets.Send, null)), _react.default.createElement("span", null, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440"));
};

exports.SentButton = SentButton;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/assets":"assets/assets.js"}],"components/Input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _react = _interopRequireDefault(require("react"));

var _SentButton = require("./SentButton");

var _assets = require("../assets/assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
  var value = _ref.value;
  return _react.default.createElement("div", {
    class: "gs-chat__input"
  }, _react.default.createElement("textarea", {
    value: value,
    placeholder: "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
  }, value), _react.default.createElement("div", {
    class: "gs-chat__input__icons"
  }, _react.default.createElement("button", {
    className: "gs-chat__input__attach"
  }, _react.default.createElement(_assets.Attach, null)), _react.default.createElement("button", {
    className: "gs-chat__input__send"
  }, value ? _react.default.createElement(_SentButton.SentButton, {
    position: "absolute",
    parent: "input",
    size: "min"
  }) : _react.default.createElement(_SentButton.SentButton, {
    parent: "input",
    size: "nano"
  }))));
};

exports.Input = Input;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","./SentButton":"components/SentButton.js","../assets/assets":"assets/assets.js"}],"components/Message.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = exports.Link = exports.ImageMessage = exports.FileMessage = exports.MessageStatus = exports.Message = void 0;

var _react = _interopRequireDefault(require("react"));

var _assets = require("../assets/assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
  var children = _ref.children,
      avatar = _ref.avatar,
      name = _ref.name,
      text = _ref.text,
      date = _ref.date,
      position = _ref.position,
      fileMessage = _ref.fileMessage,
      imageMessage = _ref.imageMessage,
      typing = _ref.typing;
  return _react.default.createElement("div", {
    class: "gs-chat__message gs-chat__message_position-".concat(position, " ").concat(typing && "gs-chat__message_typing", " ").concat(fileMessage && "gs-chat__message_type-file", " ").concat(imageMessage && "gs-chat__message_type-image")
  }, _react.default.createElement("div", {
    class: "gs-chat__message__top"
  }, _react.default.createElement("div", {
    class: "gs-chat__message__avatar"
  }, _react.default.createElement("img", {
    src: avatar,
    alt: ""
  })), _react.default.createElement("div", {
    class: "gs-chat__message__name"
  }, name)), _react.default.createElement("div", {
    className: "gs-chat__message__text"
  }, typing && _react.default.createElement("div", {
    className: "gs-chat__message__dots"
  }), text || imageMessage || fileMessage || children, _react.default.createElement("div", {
    className: "gs-chat__message__date"
  }, date)));
};

exports.Message = Message;

var MessageStatus = function MessageStatus(_ref2) {
  var state = _ref2.state,
      text = _ref2.text,
      date = _ref2.date,
      children = _ref2.children;
  return _react.default.createElement("div", {
    class: "gs-chat__message__status ".concat(state === 'notsent' && "gs-chat__message__status_notsent")
  }, text || children, _react.default.createElement("div", {
    class: "gs-chat__message__status-icon"
  }, state === 'unread' && _react.default.createElement("div", {
    class: "gs-chat__message__status-icon-unread"
  }), state === 'loading' && _react.default.createElement("div", {
    class: "gs-chat__message__status-icon_loader"
  }), state === 'notsent' && _react.default.createElement("div", {
    class: "gs-chat__message__status-icon_notsent"
  }, _react.default.createElement(_assets.NotSent, null))), _react.default.createElement("div", {
    class: "gs-chat__message__status-date"
  }, date));
};

exports.MessageStatus = MessageStatus;

var FileMessage = function FileMessage(_ref3) {
  var filename = _ref3.filename;
  return _react.default.createElement("div", {
    class: "gs-chat__file-message"
  }, _react.default.createElement("div", {
    className: "gs-chat__file-message__icon"
  }, _react.default.createElement(_assets.FileMin, null)), _react.default.createElement("div", {
    className: "gs-chat__file-message__text"
  }, filename));
};

exports.FileMessage = FileMessage;

var ImageMessage = function ImageMessage(_ref4) {
  var loading = _ref4.loading,
      loaded = _ref4.loaded,
      src = _ref4.src;
  return _react.default.createElement("div", {
    class: "gs-chat__image-message ".concat(loaded && "gs-chat__image-message_loaded", " ").concat(loading && "gs-chat__image-message_loading")
  }, _react.default.createElement("div", {
    className: "gs-chat__image-message__inner"
  }, _react.default.createElement("div", {
    className: "gs-chat__image-message__loader"
  }), _react.default.createElement("div", {
    className: "gs-chat__image-message__img"
  }, _react.default.createElement("img", {
    src: src,
    alt: ""
  }))));
};

exports.ImageMessage = ImageMessage;

var Link = function Link(_ref5) {
  var text = _ref5.text,
      href = _ref5.href;
  return _react.default.createElement("span", {
    class: "gs-chat__message__link"
  }, _react.default.createElement("a", {
    href: href
  }, text));
};

exports.Link = Link;

var Notification = function Notification(_ref6) {
  var text = _ref6.text,
      size = _ref6.size,
      questions = _ref6.questions;
  return _react.default.createElement("div", {
    class: "gs-chat__message__notification ".concat(size && "gs-chat__message__notification_".concat(size))
  }, _react.default.createElement("div", {
    className: "gs-chat__message__notification-info"
  }, _react.default.createElement("p", {
    className: "gs-chat__message__notification-text"
  }, text)), questions && _react.default.createElement("div", {
    className: "gs-chat__message__notification-buttons"
  }, _react.default.createElement("button", {
    className: "gs-chat__message__notification-no"
  }, _react.default.createElement(_assets.Error, null), _react.default.createElement("span", null, "\u041D\u0435\u0442")), _react.default.createElement("button", {
    className: "gs-chat__message__notification-yes"
  }, _react.default.createElement(_assets.Success, null), _react.default.createElement("span", null, "\u0414\u0430"))));
};

exports.Notification = Notification;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/assets":"assets/assets.js"}],"components/DatePanel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePanel = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePanel = function DatePanel(_ref) {
  var text = _ref.text;
  return _react.default.createElement("div", {
    class: "gs-chat__date-panel"
  }, _react.default.createElement("div", {
    className: "gs-chat__date-panel__inner"
  }, text));
};

exports.DatePanel = DatePanel;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"pages/CommonChat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonChat = void 0;

var _react = _interopRequireDefault(require("react"));

var _avatars = require("../assets/avatars");

var _TopPanel = require("../components/TopPanel");

var _ChatView = require("../components/ChatView");

var _Input = require("../components/Input");

var _Message = require("../components/Message");

var _BackPanel = require("../components/BackPanel");

var _ToLast = require("../components/ToLast");

var _DatePanel = require("../components/DatePanel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Members = [{
  name: 'Екатерина',
  avatar: _avatars.avatars[1]
}, {
  name: 'Екатерина',
  avatar: _avatars.avatars[1]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[2]
}];

var CommonChat = function CommonChat() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    state: "static",
    newChat: true,
    chat: true
  }), _react.default.createElement(_BackPanel.BackPanel, {
    memberSize: "min",
    members: Members,
    state: "static",
    text: "\u041E\u0431\u0449\u0438\u0439 \u0447\u0430\u0442",
    avatar: _avatars.avatars[2]
  }), _react.default.createElement(_DatePanel.DatePanel, {
    text: "12 \u0434\u0435\u043A, \u0432\u0442\u043E\u0440\u043D\u0438\u043A"
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_ChatView.ChatView, null, _react.default.createElement(_ChatView.Data, {
    data: "12 \u0434\u0435\u043A, \u0432\u0442\u043E\u0440\u043D\u0438\u043A"
  }), _react.default.createElement(_Message.Message, {
    date: "11:30",
    name: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0418\u0432\u0447\u0435\u043D\u043A\u043E",
    avatar: _avatars.avatars[0]
  }, "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0410\u043D\u0430\u0442\u043E\u043B\u0438\u0439.", _react.default.createElement("br", null), _react.default.createElement("p", null, "\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0443\u043C\u0430\u044E\u0442, \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u043E\u0442\u0447\u0435\u0442 \u043F\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0440\u0430\u0437 \u0432 \u043C\u0435\u0441\u044F\u0446, \u0442\u043E \u0438 \u0440\u0430\u0431\u043E\u0442\u0430 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0430 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0440\u0430\u0437 \u0432 \u043C\u0435\u0441\u044F\u0446. \u0423 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0430 \u043F\u043E\u043C\u0438\u043C\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u0438, \u0435\u0441\u0442\u044C \u0435\u0449\u0435 \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 1\u0421 \u0431\u0430\u0437\u044B \u043F\u043E \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F\u043C \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438, \u043A\u0430\u0441\u0441\u043E\u0432\u0430\u044F \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u0430 \u043F\u043E \u0432\u0430\u0448\u0435\u0439 \u0432\u044B\u043F\u0438\u0441\u043A\u0435, \u0432\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u043E\u043C \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u0430\u0436\u0434\u044B\u0439 \u043C\u0435\u0441\u044F\u0446 \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u0432 1\u0421, \u0441 \u0440\u0430\u0437\u043D\u043E\u0441\u043E\u043C \u043F\u043E \u0441\u0442\u0430\u0442\u044C\u044F\u043C \u0434\u0435\u0431\u0435\u0442\u0430/\u043A\u0440\u0435\u0434\u0438\u0442\u0430. \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0430 \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0430 \"\u0443\u0441\u043B\u0443\u0433 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0430 \u043F\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435 \u0438 \u0441\u0434\u0430\u0447\u0435 \u0435\u0436\u0435\u043A\u0432\u0430\u0440\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043B\u0438\u0446\u0430 \u0438\u043B\u0438 \u0418\u041F \u0424\u0440\u0430\u043D\u0447\u0430\u0439\u0437\u0438\", \u043F\u0443\u043D\u043A\u0442 3.3. \u0411\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u0445 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u043C\u044B \u0432\u0430\u043C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u043C, \u0442\u0430\u043A \u043A\u0430\u043A \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C \u0432\u0441\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043D\u0435 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u0438\u0437\u0438\u0440\u0443\u044E\u0442\u0441\u044F, \u0430 \u043D\u0435 \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u043C\u044B \u043D\u0435 \u0445\u043E\u0442\u0438\u043C :) \u042D\u0442\u043E \u0433\u0440\u043E\u043C\u0430\u0434\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043C\u0435\u0440, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u0442\u043E, \u0447\u0442\u043E\u0431\u044B \u043A \u0432\u0430\u043C \u043D\u0435 \u0431\u044B\u043B\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0443 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u0445 \u043E\u0440\u0433\u0430\u043D\u043E\u0432. \u0412 \u0434\u0430\u043D\u043D\u0443\u044E \u0443\u0441\u043B\u0443\u0433\u0443 \u0432\u0445\u043E\u0434\u0438\u0442 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432,"), _react.default.createElement("p", null, "\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u043C \u043E\u0440\u0433\u0430\u043D\u043E\u043C, \u0444\u043E\u043D\u0434\u0430\u043C\u0438 (\u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u0430\u0445, \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u043D\u044B\u0439, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438), \u0431\u0430\u043D\u043A\u043E\u043C, \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u043F\u043E\u0434\u0430\u0447\u0438 \u044D\u043B \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u043B\u044E\u0431\u043E\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 \u0440\u0430\u0431\u043E\u0442\u044B \u0432\u0430\u0448\u0435\u0433\u043E \u0418\u041F/\u041E\u041E\u041E. \u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0438 \u0441\u0447\u0435\u0442\u0430, \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 \u0442.\u043F. \u0420\u0430\u0441\u0447\u0435\u0442 \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0421\u0417\u0412\u041C \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438, \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430 \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u0435. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0443\u0441\u043B\u0443\u0433\u0430 \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u0435 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0430\u0431\u043E\u043D\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u043F\u043B\u0430\u0442\u044B, \u0438 \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0445 \u043C\u0435\u0441\u044F\u0446\u0435\u0432 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 \u0431\u044B\u0442\u044C \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E. \u0412\u0441\u0435 \u043D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 (\u0440\u043E\u044F\u043B\u0442\u0438, \u0441\u043C\u0441, \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u044F) \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0430\u0431\u043E\u043D\u0435\u043D\u0442\u0441\u043A\u0438\u043C\u0438. \u0424\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 3.3. \u0424\u0440\u0430\u043D\u0447\u0430\u0439\u0437\u0438 \u0443\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u0413\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432-\u0421\u0435\u0440\u0432\u0438\u0441 \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u0443\u044E \u043F\u043B\u0430\u0442\u0443 5 000 (\u043F\u044F\u0442\u044C \u0442\u044B\u0441\u044F\u0447) \u0440\u0443\u0431.00 \u043A\u043E\u043F\u0435\u0435\u043A. \u0412 \u043D\u0435\u0435 \u0432\u0445\u043E\u0434\u0438\u0442 \u043E\u043F\u043B\u0430\u0442\u0430 \u0443\u0441\u043B\u0443\u0433 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0430 \u043F\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435 \u0438 \u0441\u0434\u0430\u0447\u0435 \u0435\u0436\u0435\u043A\u0432\u0430\u0440\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043B\u0438\u0446\u0430 \u0438\u043B\u0438 \u0418\u041F \u0424\u0440\u0430\u043D\u0447\u0430\u0439\u0437\u0438. \u0414\u0430\u043D\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430 \u0413\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432-\u0421\u0435\u0440\u0432\u0438\u0441 \u0432 \u043E\u0434\u043D\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u043D\u043E \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043D\u0430 20 (\u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044C)% \u0432 \u0433\u043E\u0434 \u043F\u0443\u0442\u0435\u043C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0424\u0440\u0430\u043D\u0447\u0430\u0439\u0437\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F.")), _react.default.createElement(_Message.Message, {
    date: "11:30",
    position: "right"
  }, "\u0418\u0434\u0435\u0439\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432\u044B\u0441\u0448\u0435\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0444\u043E\u0440\u043C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439. \u0418\u0434\u0435\u0439\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432\u044B\u0441\u0448\u0435\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0430."), _react.default.createElement(_Message.Message, {
    date: "11:30",
    name: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0418\u0432\u0447\u0435\u043D\u043A\u043E",
    avatar: _avatars.avatars[0],
    imageMessage: _react.default.createElement(_Message.ImageMessage, {
      loading: true
    })
  }), _react.default.createElement(_Message.Message, {
    date: "11:30",
    name: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0418\u0432\u0447\u0435\u043D\u043A\u043E",
    avatar: _avatars.avatars[0],
    imageMessage: _react.default.createElement(_Message.ImageMessage, {
      loaded: true,
      src: _avatars.avatars[2]
    })
  }), _react.default.createElement(_Message.Message, {
    date: "11:30",
    name: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0418\u0432\u0447\u0435\u043D\u043A\u043E",
    avatar: _avatars.avatars[0],
    fileMessage: _react.default.createElement(_Message.FileMessage, {
      filename: "filename.zip"
    })
  }), _react.default.createElement(_Message.Message, {
    date: "11:30",
    name: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0418\u0432\u0447\u0435\u043D\u043A\u043E",
    avatar: _avatars.avatars[0]
  }, _react.default.createElement(_Message.Link, {
    href: "#",
    text: "\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439"
  }), _react.default.createElement("div", null, "spb.gruzchik-online.ru")), _react.default.createElement(_ChatView.Data, {
    data: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F"
  }), _react.default.createElement(_Message.Message, {
    date: "11:30",
    name: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0418\u0432\u0447\u0435\u043D\u043A\u043E",
    avatar: _avatars.avatars[0]
  }, "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430", _react.default.createElement(_Message.Link, {
    href: "#",
    text: "\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439"
  }), "\u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"), _react.default.createElement(_ChatView.Divider, null), _react.default.createElement(_Message.Message, {
    date: "11:30",
    name: "\u0412\u0430\u0441\u0438\u043B\u0438\u0441\u0430",
    avatar: _avatars.avatars[0],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 <\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.Message, {
    date: "11:30",
    name: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0437\u0432\u0435\u0440\u0435\u0432\u0430",
    avatar: _avatars.avatars[2],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.MessageStatus, {
    date: "11:30",
    state: "unread",
    text: "\u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "loading",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "notsent",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"
  }), _react.default.createElement(_Message.Message, {
    name: "\u0412\u0430\u0441\u0438\u043B\u0438\u0441\u0430",
    avatar: _avatars.avatars[0],
    typing: true
  }), _react.default.createElement(_Message.Notification, {
    questions: true,
    text: _react.default.createElement("div", null, _react.default.createElement("div", null, "\u0412\u044B \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u044B \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u043C \u043E\u0442\u0432\u0435\u0442\u043E\u043C?"), _react.default.createElement("div", null, "\u042D\u0442\u043E \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0439 \u043E\u043F\u0440\u043E\u0441, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0439."))
  })), _react.default.createElement(_Input.Input, null), _react.default.createElement(_ToLast.ToLast, null)));
};

exports.CommonChat = CommonChat;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/avatars":"assets/avatars.js","../components/TopPanel":"components/TopPanel.js","../components/ChatView":"components/ChatView.js","../components/Input":"components/Input.js","../components/Message":"components/Message.js","../components/BackPanel":"components/BackPanel.js","../components/ToLast":"components/ToLast.js","../components/DatePanel":"components/DatePanel.js"}],"components/TeamsView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamsView = void 0;

var _react = _interopRequireDefault(require("react"));

var _Member = require("./Member");

var _avatars = require("../assets/avatars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TeamsView = function TeamsView(_ref) {
  var state = _ref.state,
      members = _ref.members,
      memberSize = _ref.memberSize,
      moreMembers = _ref.moreMembers,
      title = _ref.title,
      subtitle = _ref.subtitle,
      sentButton = _ref.sentButton,
      children = _ref.children;
  return _react.default.createElement("div", {
    class: "gs-chat__teams-view gs-chat__teams-view_".concat(state)
  }, _react.default.createElement("div", {
    class: "gs-chat__teams-view__title"
  }, title), _react.default.createElement("div", {
    class: "gs-chat__teams-view__subtitle"
  }, subtitle), _react.default.createElement("div", {
    className: "gs-chat__teams-view__list"
  }, members.map(function (_ref2, i, array) {
    var name = _ref2.name,
        avatar = _ref2.avatar;
    return _react.default.createElement("div", {
      className: "gs-chat__teams-view__member"
    }, _react.default.createElement(_Member.Member, {
      size: memberSize,
      src: avatar,
      name: name
    }));
  }), _react.default.createElement("div", {
    className: "gs-chat__teams-view__member"
  }, moreMembers)), _react.default.createElement("div", {
    class: "gs-chat__teams-view__sent"
  }, sentButton));
};

exports.TeamsView = TeamsView;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","./Member":"components/Member.js","../assets/avatars":"assets/avatars.js"}],"components/Views.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = exports.Views = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Views = function Views(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    class: "gs-chat__views"
  }, children);
};

exports.Views = Views;

var View = function View(_ref2) {
  var children = _ref2.children,
      state = _ref2.state;
  return _react.default.createElement("div", {
    className: "gs-chat__view gs-chat__view_".concat(state)
  }, children);
};

exports.View = View;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"components/Questions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Questions = void 0;

var _react = _interopRequireWildcard(require("react"));

var _assets = require("../assets/assets");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Questions = function Questions(_ref) {
  var data = _ref.data;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      questionOpen = _useState2[0],
      setQuestionOpen = _useState2[1];

  return _react.default.createElement("div", {
    class: "gs-chat__questions ".concat(questionOpen ? "gs-chat__questions_open" : '', " ").concat(!questionOpen ? "gs-chat__questions_close" : '')
  }, _react.default.createElement("div", {
    class: "gs-chat__questions__title"
  }, "\u041F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), _react.default.createElement("div", {
    class: "gs-chat__questions__list"
  }, data.map(function (_ref2) {
    var text = _ref2.text,
        link = _ref2.link;
    return _react.default.createElement("div", {
      className: "gs-chat__questions__question"
    }, _react.default.createElement("div", {
      class: "gs-chat__questions__question-icon"
    }, _react.default.createElement(_assets.Question, null)), _react.default.createElement("a", {
      href: link,
      className: "gs-chat__questions__question-text"
    }, text));
  }), _react.default.createElement("div", {
    className: "gs-chat__questions__question"
  }, _react.default.createElement("div", {
    className: "gs-chat__questions__question-more"
  }, _react.default.createElement("div", {
    className: "gs-chat__questions__question-icon"
  }, _react.default.createElement(_assets.Points, null)), _react.default.createElement("a", {
    onClick: function onClick(e) {
      e.preventDefault();
      console.log(e);
      setQuestionOpen(!questionOpen);
    },
    href: "#",
    className: "gs-chat__questions__question-text"
  }, " \u0415\u0449\u0435 4")))));
};

exports.Questions = Questions;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/assets":"assets/assets.js"}],"pages/SupportEmtyState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupportEmtyState = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TopPanel = require("../components/TopPanel");

var _TeamsView = require("../components/TeamsView");

var _SentButton = require("../components/SentButton");

var _Member = require("../components/Member");

var _Views = require("../components/Views");

var _avatars = require("../assets/avatars");

var _BackPanel = require("../components/BackPanel");

var _ChatView = require("../components/ChatView");

var _Message = require("../components/Message");

var _Questions = require("../components/Questions");

var _Input = require("../components/Input");

var _ToLast = require("../components/ToLast");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var qustions = [{
  text: 'Как понять эффективность рекламы',
  link: '#'
}, {
  text: 'Черный список исполнителей',
  link: '#'
}];
var Members = [{
  name: 'Екатерина',
  avatar: _avatars.avatars[1]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[2]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[1]
}, {
  name: 'Константин',
  avatar: _avatars.avatars[2]
}, {
  name: 'Константин',
  avatar: _avatars.avatars[2]
}, {
  name: 'Дима',
  avatar: _avatars.avatars[1]
}, {
  name: 'Константин',
  avatar: _avatars.avatars[2]
}];

var SupportEmtyState = function SupportEmtyState() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // for example


  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      firstView = _useState4[0],
      setFirstView = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      secondView = _useState6[0],
      setSecondView = _useState6[1];

  var SlideIn = function SlideIn() {
    setFirstView('slide-right');
    setSecondView('slide-right-second');
  };

  var SlideOut = function SlideOut() {
    setFirstView('slide-left');
    setSecondView('slide-left-second');
  };

  return _react.default.createElement(_Views.Views, null, _react.default.createElement(_Views.View, {
    state: firstView
  }, _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    state: "static",
    support: true
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_TeamsView.TeamsView, {
    moreMembers: _react.default.createElement(_Member.MoreMembers, {
      count: 5
    }),
    sentButton: _react.default.createElement(_SentButton.SentButton, {
      onClick: SlideOut,
      parent: "teamsview",
      size: "big"
    }),
    members: Members,
    title: "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D, \u0434\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E",
    subtitle: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u0447\u0430\u0441\u0430"
  })))), _react.default.createElement(_Views.View, {
    state: secondView
  }, _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    support: true
  }), _react.default.createElement(_BackPanel.BackPanel, {
    onClick: SlideIn,
    text: "\u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440"
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_ChatView.ChatView, null, _react.default.createElement(_ChatView.Data, {
    data: "12 \u0434\u0435\u043A, \u0432\u0442\u043E\u0440\u043D\u0438\u043A"
  }), _react.default.createElement(_Message.Message, {
    name: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0418\u0432\u0447\u0435\u043D\u043A\u043E",
    avatar: _avatars.avatars[0]
  }, "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430", _react.default.createElement(_Message.Link, {
    href: "#",
    text: "\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439"
  }), "\u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"), _react.default.createElement(_ChatView.Divider, null), _react.default.createElement(_Message.Message, {
    name: "\u0412\u0430\u0441\u0438\u043B\u0438\u0441\u0430",
    avatar: _avatars.avatars[0],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 <\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.Message, {
    name: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0437\u0432\u0435\u0440\u0435\u0432\u0430",
    avatar: _avatars.avatars[2],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "unread",
    text: "\u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "loading",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "notsent",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"
  })), _react.default.createElement(_Questions.Questions, {
    data: qustions
  }), _react.default.createElement(_Input.Input, {
    value: "\u0421\u043A\u0430\u0436\u0438\u0442\u0435, \u0430 \u043A\u0430\u043A\u043E\u0433\u043E \u0445\u0440\u0435\u043D\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0438\u0434\u0435\u0442 \u0438\u0437 \u0433\u0443\u0433\u043B\u0430?"
  }), _react.default.createElement(_ToLast.ToLast, null)))));
};

exports.SupportEmtyState = SupportEmtyState;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/TeamsView":"components/TeamsView.js","../components/SentButton":"components/SentButton.js","../components/Member":"components/Member.js","../components/Views":"components/Views.js","../assets/avatars":"assets/avatars.js","../components/BackPanel":"components/BackPanel.js","../components/ChatView":"components/ChatView.js","../components/Message":"components/Message.js","../components/Questions":"components/Questions.js","../components/Input":"components/Input.js","../components/ToLast":"components/ToLast.js"}],"pages/SupportList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupportList = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopPanel = require("../components/TopPanel");

var _BlockedPanel = require("../components/BlockedPanel");

var _Chats = require("../components/Chats");

var _avatars = require("../assets/avatars");

var _TeamsView = require("../components/TeamsView");

var _SentButton = require("../components/SentButton");

var _Member = require("../components/Member");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  avatar: _avatars.avatars[0],
  time: "11:23",
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц, то и работа бухгалтера проводится раз в ",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п. Расчет и подготовка СЗВМ отчетов в",
  newMessage: true
}, {
  avatar: _avatars.avatars[1],
  time: "11:23",
  title: "28124 — может быть вы найдете дешевле услуги бухгалтера, но вряд ли ваш новый бухгалтер будет понимать специфику оказываемых",
  info: "Сообщение не отправлено",
  unsent: true
}, {
  avatar: _avatars.avatars[2],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
}, {
  avatar: _avatars.avatars[3],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
}];
var Members = [{
  name: 'Екатерина',
  avatar: _avatars.avatars[1]
}, {
  name: 'Екатерина',
  avatar: _avatars.avatars[1]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[2]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[2]
}];

var SupportList = function SupportList() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    support: true,
    state: 'static'
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_TeamsView.TeamsView, {
    moreMembers: _react.default.createElement(_Member.MoreMembers, {
      count: 5
    }),
    sentButton: _react.default.createElement(_SentButton.SentButton, {
      parent: "teamsview",
      size: "min"
    }),
    members: Members,
    state: "chat",
    title: "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D, \u0434\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E",
    subtitle: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u0447\u0430\u0441\u0430"
  }), _react.default.createElement(_Chats.Chats, {
    alignItem: "start",
    blockedMembers: false,
    info: items
  })));
};

exports.SupportList = SupportList;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/BlockedPanel":"components/BlockedPanel.js","../components/Chats":"components/Chats.js","../assets/avatars":"assets/avatars.js","../components/TeamsView":"components/TeamsView.js","../components/SentButton":"components/SentButton.js","../components/Member":"components/Member.js"}],"components/Search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = void 0;

var _react = _interopRequireDefault(require("react"));

var _assets = require("../assets/assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function Search(_ref) {
  var state = _ref.state,
      value = _ref.value,
      placeholder = _ref.placeholder,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: "gs-chat__search gs-chat__search_".concat(state)
  }, _react.default.createElement("div", {
    className: "gs-chat__search__input"
  }, _react.default.createElement("input", {
    value: value,
    placeholder: placeholder,
    type: "text"
  })), _react.default.createElement("div", {
    className: "gs-chat__search__icon"
  }, state === 'empty' ? _react.default.createElement(_assets.Cross, null) : _react.default.createElement(_assets.Search, null)));
};

exports.Search = Search;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/assets":"assets/assets.js"}],"pages/SupportListScrollUp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupportListScrollUp = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopPanel = require("../components/TopPanel");

var _BlockedPanel = require("../components/BlockedPanel");

var _TeamsView = require("../components/TeamsView");

var _Chats = require("../components/Chats");

var _Search = require("../components/Search");

var _avatars = require("../assets/avatars");

var _SentButton = require("../components/SentButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  avatar: _avatars.avatars[0],
  time: "11:23",
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц, то и работа бухгалтера проводится раз в ",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п. Расчет и подготовка СЗВМ отчетов в",
  newMessage: true
}, {
  avatar: _avatars.avatars[1],
  time: "11:23",
  title: "28124 — может быть вы найдете дешевле услуги бухгалтера, но вряд ли ваш новый бухгалтер будет понимать специфику оказываемых",
  info: "Сообщение не отправлено",
  unsent: true
}, {
  avatar: _avatars.avatars[2],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
}, {
  avatar: _avatars.avatars[3],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
},, {
  avatar: _avatars.avatars[3],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
},, {
  avatar: _avatars.avatars[3],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
}];

var SupportListScrollUp = function SupportListScrollUp() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    support: true,
    state: 'static'
  }), _react.default.createElement(_Search.Search, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u044E\u0431\u043E\u0435 \u0441\u043B\u043E\u0432\u043E, \u043D\u043E\u043C\u0435\u0440 \u0432\u043E\u043F\u0440\u043E\u0441\u0430 \u0438\u043B\u0438 \u0434\u0430\u0442\u0443"
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_Chats.Chats, {
    blockedMembers: false,
    info: items
  })), _react.default.createElement(_SentButton.SentButton, {
    size: "min"
  }));
};

exports.SupportListScrollUp = SupportListScrollUp;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/BlockedPanel":"components/BlockedPanel.js","../components/TeamsView":"components/TeamsView.js","../components/Chats":"components/Chats.js","../components/Search":"components/Search.js","../assets/avatars":"assets/avatars.js","../components/SentButton":"components/SentButton.js"}],"components/ErrorView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorView = void 0;

var _react = _interopRequireDefault(require("react"));

var _assets = require("../assets/assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorView = function ErrorView() {
  return _react.default.createElement("div", {
    class: "gs-chat__error-view"
  }, _react.default.createElement("div", {
    class: "gs-chat__error-view__inner"
  }, _react.default.createElement("div", {
    class: "gs-chat__error-view__icon"
  }, _react.default.createElement(_assets.Error, null)), _react.default.createElement("div", {
    className: "gs-chat__error-view__text"
  }, "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")));
};

exports.ErrorView = ErrorView;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/assets":"assets/assets.js"}],"pages/SearchEmtyState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchEmtyState = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopPanel = require("../components/TopPanel");

var _Search = require("../components/Search");

var _SentButton = require("../components/SentButton");

var _ErrorView = require("../components/ErrorView");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchEmtyState = function SearchEmtyState() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    support: true,
    state: 'static'
  }), _react.default.createElement(_Search.Search, {
    value: "2323",
    state: "empty",
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u044E\u0431\u043E\u0435 \u0441\u043B\u043E\u0432\u043E, \u043D\u043E\u043C\u0435\u0440 \u0432\u043E\u043F\u0440\u043E\u0441\u0430 \u0438\u043B\u0438 \u0434\u0430\u0442\u0443"
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_ErrorView.ErrorView, null)), _react.default.createElement(_SentButton.SentButton, {
    size: "min"
  }));
};

exports.SearchEmtyState = SearchEmtyState;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/Search":"components/Search.js","../components/SentButton":"components/SentButton.js","../components/ErrorView":"components/ErrorView.js"}],"pages/SupportTeam.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupportTeam = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopPanel = require("../components/TopPanel");

var _TeamsView = require("../components/TeamsView");

var _BackPanel = require("../components/BackPanel");

var _avatars = require("../assets/avatars");

var _Member = require("../components/Member");

var _SentButton = require("../components/SentButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Members = [{
  name: 'Екатерина',
  avatar: _avatars.avatars[1]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[2]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[2]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[1]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[1]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[1]
}, {
  name: 'Константин',
  avatar: _avatars.avatars[2]
}, {
  name: 'Константин',
  avatar: _avatars.avatars[2]
}, {
  name: 'Константин',
  avatar: _avatars.avatars[2]
}, {
  name: 'Дима',
  avatar: _avatars.avatars[1]
}, {
  name: 'Дима',
  avatar: _avatars.avatars[1]
}, {
  name: 'Константин',
  avatar: _avatars.avatars[2]
}, {
  name: 'Константин',
  avatar: _avatars.avatars[2]
}];

var SupportTeam = function SupportTeam() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    support: true,
    state: "static"
  }), _react.default.createElement(_BackPanel.BackPanel, {
    state: "static",
    text: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438"
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_TeamsView.TeamsView, {
    memberSize: "large",
    sentButton: _react.default.createElement(_SentButton.SentButton, {
      parent: "teamsview",
      size: "min"
    }),
    members: Members,
    state: "full",
    title: "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D, \u0434\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E",
    subtitle: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u0447\u0430\u0441\u0430"
  })));
};

exports.SupportTeam = SupportTeam;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/TeamsView":"components/TeamsView.js","../components/BackPanel":"components/BackPanel.js","../assets/avatars":"assets/avatars.js","../components/Member":"components/Member.js","../components/SentButton":"components/SentButton.js"}],"pages/SupportNewConversation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupportNewConversation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TopPanel = require("../components/TopPanel");

var _BackPanel = require("../components/BackPanel");

var _avatars = require("../assets/avatars");

var _ChatView = require("../components/ChatView");

var _Message = require("../components/Message");

var _Input = require("../components/Input");

var _ToLast = require("../components/ToLast");

var _Questions = require("../components/Questions");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var qustions = [{
  text: 'Как понять эффективность рекламы',
  link: '#'
}, {
  text: 'Черный список исполнителей',
  link: '#'
}, {
  text: 'Черный список исполнителей',
  link: '#'
}, {
  text: 'Черный список исполнителей',
  link: '#'
}, {
  text: 'Черный список исполнителей',
  link: '#'
}, {
  text: 'Черный список исполнителей',
  link: '#'
}];

var SupportNewConversation = function SupportNewConversation() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    support: true
  }), _react.default.createElement(_BackPanel.BackPanel, {
    text: "\u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440"
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_ChatView.ChatView, null, _react.default.createElement(_ChatView.Data, {
    data: "12 \u0434\u0435\u043A, \u0432\u0442\u043E\u0440\u043D\u0438\u043A"
  }), _react.default.createElement(_Message.Message, {
    name: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0418\u0432\u0447\u0435\u043D\u043A\u043E",
    avatar: _avatars.avatars[0]
  }, "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430", _react.default.createElement(_Message.Link, {
    href: "#",
    text: "\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439"
  }), "\u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"), _react.default.createElement(_ChatView.Divider, null), _react.default.createElement(_Message.Message, {
    name: "\u0412\u0430\u0441\u0438\u043B\u0438\u0441\u0430",
    avatar: _avatars.avatars[0],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 <\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.Message, {
    name: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0437\u0432\u0435\u0440\u0435\u0432\u0430",
    avatar: _avatars.avatars[2],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "unread",
    text: "\u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "loading",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "notsent",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"
  }), _react.default.createElement(_Message.Notification, {
    size: "medium",
    text: _react.default.createElement("div", null, _react.default.createElement("div", null, "\u0414\u043E\u0440\u043E\u0433\u043E\u0439 \u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D,"), _react.default.createElement("div", null, "\u043C\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u043E\u0433\u043E \u0432\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u0432 ", _react.default.createElement("span", null, _react.default.createElement(_Message.Link, {
      text: "\u0421\u043F\u0440\u0430\u0432\u043A\u0435.",
      href: "#"
    }))))
  })), _react.default.createElement(_Questions.Questions, {
    data: qustions
  }), _react.default.createElement(_Input.Input, {
    value: "\u0421\u043A\u0430\u0436\u0438\u0442\u0435, \u0430 \u043A\u0430\u043A\u043E\u0433\u043E \u0445\u0440\u0435\u043D\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0438\u0434\u0435\u0442 \u0438\u0437 \u0433\u0443\u0433\u043B\u0430?"
  }), _react.default.createElement(_ToLast.ToLast, null)));
};

exports.SupportNewConversation = SupportNewConversation;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/BackPanel":"components/BackPanel.js","../assets/avatars":"assets/avatars.js","../components/ChatView":"components/ChatView.js","../components/Message":"components/Message.js","../components/Input":"components/Input.js","../components/ToLast":"components/ToLast.js","../components/Questions":"components/Questions.js"}],"pages/SupportConversation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupportConversation = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopPanel = require("../components/TopPanel");

var _BackPanel = require("../components/BackPanel");

var _ChatView = require("../components/ChatView");

var _Message = require("../components/Message");

var _avatars = require("../assets/avatars");

var _Questions = require("../components/Questions");

var _Input = require("../components/Input");

var _ToLast = require("../components/ToLast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var qustions = [{
  text: 'Как понять эффективность рекламы',
  link: '#'
}, {
  text: 'Черный список исполнителей',
  link: '#'
}];

var SupportConversation = function SupportConversation() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    support: true
  }), _react.default.createElement(_BackPanel.BackPanel, {
    text: "28124 \u2014 \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0438\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043A\u0430\u043A \u044F..."
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_ChatView.ChatView, null, _react.default.createElement(_ChatView.Data, {
    data: "12 \u0434\u0435\u043A, \u0432\u0442\u043E\u0440\u043D\u0438\u043A"
  }), _react.default.createElement(_Message.Message, {
    name: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0418\u0432\u0447\u0435\u043D\u043A\u043E",
    avatar: _avatars.avatars[0]
  }, "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430", _react.default.createElement(_Message.Link, {
    href: "#",
    text: "\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439"
  }), "\u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"), _react.default.createElement(_ChatView.Divider, null), _react.default.createElement(_Message.Message, {
    name: "\u0412\u0430\u0441\u0438\u043B\u0438\u0441\u0430",
    avatar: _avatars.avatars[0],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 <\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.Message, {
    name: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0437\u0432\u0435\u0440\u0435\u0432\u0430",
    avatar: _avatars.avatars[2],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "unread",
    text: "\u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "loading",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "notsent",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"
  }), _react.default.createElement(_Message.Notification, {
    text: _react.default.createElement("div", null, _react.default.createElement("span", null, "\u0412\u044B \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u044B \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u043C \u043E\u0442\u0432\u0435\u0442\u043E\u043C?"), _react.default.createElement("span", null, "\u042D\u0442\u043E \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0439 \u043E\u043F\u0440\u043E\u0441, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0439."))
  })), _react.default.createElement(_Input.Input, {
    value: "\u0421\u043A\u0430\u0436\u0438\u0442\u0435, \u0430 \u043A\u0430\u043A\u043E\u0433\u043E \u0445\u0440\u0435\u043D\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0438\u0434\u0435\u0442 \u0438\u0437 \u0433\u0443\u0433\u043B\u0430?"
  }), _react.default.createElement(_ToLast.ToLast, null)));
};

exports.SupportConversation = SupportConversation;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/BackPanel":"components/BackPanel.js","../components/ChatView":"components/ChatView.js","../components/Message":"components/Message.js","../assets/avatars":"assets/avatars.js","../components/Questions":"components/Questions.js","../components/Input":"components/Input.js","../components/ToLast":"components/ToLast.js"}],"components/Info.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Info = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = function Info(_ref) {
  var title = _ref.title,
      theme = _ref.theme;
  return _react.default.createElement("div", {
    className: "gs-chat__info gs-chat__info_theme-".concat(theme)
  }, _react.default.createElement("div", {
    className: "gs-chat__info__title"
  }, title));
};

exports.Info = Info;
},{"react":"../node_modules/preact/compat/dist/compat.module.js"}],"pages/HappyBirthday.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HappyBirthday = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopPanel = require("../components/TopPanel");

var _BlockedPanel = require("../components/BlockedPanel");

var _TeamsView = require("../components/TeamsView");

var _Member = require("../components/Member");

var _SentButton = require("../components/SentButton");

var _Chats = require("../components/Chats");

var _Info = require("../components/Info");

var _avatars = require("../assets/avatars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  avatar: _avatars.avatars[0],
  time: "11:23",
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц, то и работа бухгалтера проводится раз в ",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п. Расчет и подготовка СЗВМ отчетов в",
  newMessage: true
}, {
  avatar: _avatars.avatars[1],
  time: "11:23",
  title: "28124 — может быть вы найдете дешевле услуги бухгалтера, но вряд ли ваш новый бухгалтер будет понимать специфику оказываемых",
  info: "Сообщение не отправлено",
  unsent: true
}, {
  avatar: _avatars.avatars[2],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
}, {
  avatar: _avatars.avatars[3],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
}];
var Members = [{
  name: 'Екатерина',
  avatar: _avatars.avatars[1]
}, {
  name: 'Екатерина',
  avatar: _avatars.avatars[1]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[2]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[2]
}];

var HappyBirthday = function HappyBirthday() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    state: 'static'
  }), _react.default.createElement(_Info.Info, {
    theme: "bear",
    title: "\u0421 \u0414\u043D\u0435\u043C \u0420\u043E\u0436\u0434\u0435\u043D\u0438\u044F, \u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D!"
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_Chats.Chats, {
    blockedMembers: false,
    info: items
  })), _react.default.createElement(_SentButton.SentButton, {
    size: "min"
  }));
};

exports.HappyBirthday = HappyBirthday;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/BlockedPanel":"components/BlockedPanel.js","../components/TeamsView":"components/TeamsView.js","../components/Member":"components/Member.js","../components/SentButton":"components/SentButton.js","../components/Chats":"components/Chats.js","../components/Info":"components/Info.js","../assets/avatars":"assets/avatars.js"}],"pages/HappyBirthdayCat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HappyBirthdayCat = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopPanel = require("../components/TopPanel");

var _BlockedPanel = require("../components/BlockedPanel");

var _TeamsView = require("../components/TeamsView");

var _Member = require("../components/Member");

var _SentButton = require("../components/SentButton");

var _Chats = require("../components/Chats");

var _Info = require("../components/Info");

var _avatars = require("../assets/avatars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  avatar: _avatars.avatars[0],
  time: "11:23",
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц, то и работа бухгалтера проводится раз в ",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п. Расчет и подготовка СЗВМ отчетов в",
  newMessage: true
}, {
  avatar: _avatars.avatars[1],
  time: "11:23",
  title: "28124 — может быть вы найдете дешевле услуги бухгалтера, но вряд ли ваш новый бухгалтер будет понимать специфику оказываемых",
  info: "Сообщение не отправлено",
  unsent: true
}, {
  avatar: _avatars.avatars[2],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
}, {
  avatar: _avatars.avatars[3],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
}];
var Members = [{
  name: 'Екатерина',
  avatar: _avatars.avatars[1]
}, {
  name: 'Екатерина',
  avatar: _avatars.avatars[1]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[2]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[2]
}];

var HappyBirthdayCat = function HappyBirthdayCat() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    state: 'static'
  }), _react.default.createElement(_Info.Info, {
    theme: "cat",
    title: "\u0421 \u0414\u043D\u0435\u043C \u0420\u043E\u0436\u0434\u0435\u043D\u0438\u044F, \u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D!"
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_Chats.Chats, {
    blockedMembers: false,
    info: items
  })), _react.default.createElement(_SentButton.SentButton, {
    size: "min"
  }));
};

exports.HappyBirthdayCat = HappyBirthdayCat;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/BlockedPanel":"components/BlockedPanel.js","../components/TeamsView":"components/TeamsView.js","../components/Member":"components/Member.js","../components/SentButton":"components/SentButton.js","../components/Chats":"components/Chats.js","../components/Info":"components/Info.js","../assets/avatars":"assets/avatars.js"}],"components/Dropdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;

var _react = _interopRequireDefault(require("react"));

var _assets = require("../assets/assets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function Dropdown(_ref) {
  var state = _ref.state;
  return _react.default.createElement("div", {
    className: "gs-chat__dropdown gs-chat__dropdown_state-".concat(state)
  }, _react.default.createElement("div", {
    className: "gs-chat__dropdown__inner"
  }, _react.default.createElement("div", {
    className: "gs-chat__dropdown__center"
  }, _react.default.createElement("div", {
    class: "gs-chat__dropdown__icon"
  }, _react.default.createElement("div", {
    className: "gs-chat__dropdown__icon-file"
  }, _react.default.createElement(_assets.File, null)), _react.default.createElement("div", {
    className: "gs-chat__dropdown__icon-loader"
  }, _react.default.createElement(_assets.FileLoader, null)), _react.default.createElement("div", {
    className: "gs-chat__dropdown__icon-error"
  }, _react.default.createElement(_assets.Error, null))), _react.default.createElement("div", {
    class: "gs-chat__dropdown__text"
  }, "\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B, \u0447\u0442\u043E\u0431\u044B ", _react.default.createElement("br", null), " \u0438\u0445 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _react.default.createElement("div", {
    class: "gs-chat__dropdown__text-error"
  }, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 ", _react.default.createElement("br", null), " \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10 \u0444\u0430\u0439\u043B\u043E\u0432 \u0437\u0430 \u0440\u0430\u0437, ", _react.default.createElement("br", null), " \u0432\u0435\u0441\u043E\u043C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 5 \u041C\u0411 \u043A\u0430\u0436\u0434\u044B\u0439")), _react.default.createElement("div", {
    className: "gs-chat__dropdown__bottom"
  }, "\u041C\u0430\u043A\u0438\u0441\u043C\u0443\u043C 10 \u0444\u0430\u0439\u043B\u043E\u0432 \u0437\u0430 \u0440\u0430\u0437, \u0432\u0435\u0441\u043E\u043C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 5 \u041C\u0411 \u043A\u0430\u0436\u0434\u044B\u0439")));
};

exports.Dropdown = Dropdown;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/assets":"assets/assets.js"}],"pages/DropdownPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownPage = void 0;

var _react = _interopRequireDefault(require("react"));

var _avatars = require("../assets/avatars");

var _TopPanel = require("../components/TopPanel");

var _ChatView = require("../components/ChatView");

var _Input = require("../components/Input");

var _Message = require("../components/Message");

var _BackPanel = require("../components/BackPanel");

var _ToLast = require("../components/ToLast");

var _Dropdown = require("../components/Dropdown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownPage = function DropdownPage() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, null), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_ChatView.ChatView, null, _react.default.createElement(_ChatView.Data, {
    data: "12 \u0434\u0435\u043A, \u0432\u0442\u043E\u0440\u043D\u0438\u043A"
  }), _react.default.createElement(_Message.Message, {
    name: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0418\u0432\u0447\u0435\u043D\u043A\u043E",
    avatar: _avatars.avatars[0]
  }, "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430", _react.default.createElement(_Message.Link, {
    href: "#",
    text: "\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439"
  }), "\u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"), _react.default.createElement(_ChatView.Divider, null), _react.default.createElement(_Message.Message, {
    name: "\u0412\u0430\u0441\u0438\u043B\u0438\u0441\u0430",
    avatar: _avatars.avatars[0],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 <\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.Message, {
    name: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0437\u0432\u0435\u0440\u0435\u0432\u0430",
    avatar: _avatars.avatars[2],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "unread",
    text: "\u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "loading",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "notsent",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"
  })), _react.default.createElement(_Input.Input, null), _react.default.createElement(_ToLast.ToLast, null), _react.default.createElement(_Dropdown.Dropdown, null)));
};

exports.DropdownPage = DropdownPage;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/avatars":"assets/avatars.js","../components/TopPanel":"components/TopPanel.js","../components/ChatView":"components/ChatView.js","../components/Input":"components/Input.js","../components/Message":"components/Message.js","../components/BackPanel":"components/BackPanel.js","../components/ToLast":"components/ToLast.js","../components/Dropdown":"components/Dropdown.js"}],"pages/DragnDropProcess.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragnDropProcess = void 0;

var _react = _interopRequireDefault(require("react"));

var _avatars = require("../assets/avatars");

var _TopPanel = require("../components/TopPanel");

var _ChatView = require("../components/ChatView");

var _Input = require("../components/Input");

var _Message = require("../components/Message");

var _BackPanel = require("../components/BackPanel");

var _ToLast = require("../components/ToLast");

var _Dropdown = require("../components/Dropdown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DragnDropProcess = function DragnDropProcess() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, null), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_ChatView.ChatView, null, _react.default.createElement(_ChatView.Data, {
    data: "12 \u0434\u0435\u043A, \u0432\u0442\u043E\u0440\u043D\u0438\u043A"
  }), _react.default.createElement(_Message.Message, {
    name: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0418\u0432\u0447\u0435\u043D\u043A\u043E",
    avatar: _avatars.avatars[0]
  }, "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430", _react.default.createElement(_Message.Link, {
    href: "#",
    text: "\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439"
  }), "\u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"), _react.default.createElement(_ChatView.Divider, null), _react.default.createElement(_Message.Message, {
    name: "\u0412\u0430\u0441\u0438\u043B\u0438\u0441\u0430",
    avatar: _avatars.avatars[0],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 <\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.Message, {
    name: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0437\u0432\u0435\u0440\u0435\u0432\u0430",
    avatar: _avatars.avatars[2],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "unread",
    text: "\u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "loading",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "notsent",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"
  })), _react.default.createElement(_Input.Input, null), _react.default.createElement(_ToLast.ToLast, null), _react.default.createElement(_Dropdown.Dropdown, {
    state: "process"
  })));
};

exports.DragnDropProcess = DragnDropProcess;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/avatars":"assets/avatars.js","../components/TopPanel":"components/TopPanel.js","../components/ChatView":"components/ChatView.js","../components/Input":"components/Input.js","../components/Message":"components/Message.js","../components/BackPanel":"components/BackPanel.js","../components/ToLast":"components/ToLast.js","../components/Dropdown":"components/Dropdown.js"}],"pages/DragnDropError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragnDropError = void 0;

var _react = _interopRequireDefault(require("react"));

var _avatars = require("../assets/avatars");

var _TopPanel = require("../components/TopPanel");

var _ChatView = require("../components/ChatView");

var _Input = require("../components/Input");

var _Message = require("../components/Message");

var _BackPanel = require("../components/BackPanel");

var _ToLast = require("../components/ToLast");

var _Dropdown = require("../components/Dropdown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DragnDropError = function DragnDropError() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, null), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_ChatView.ChatView, null, _react.default.createElement(_ChatView.Data, {
    data: "12 \u0434\u0435\u043A, \u0432\u0442\u043E\u0440\u043D\u0438\u043A"
  }), _react.default.createElement(_Message.Message, {
    name: "\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0418\u0432\u0447\u0435\u043D\u043A\u043E",
    avatar: _avatars.avatars[0]
  }, "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430", _react.default.createElement(_Message.Link, {
    href: "#",
    text: "\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439"
  }), "\u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"), _react.default.createElement(_ChatView.Divider, null), _react.default.createElement(_Message.Message, {
    name: "\u0412\u0430\u0441\u0438\u043B\u0438\u0441\u0430",
    avatar: _avatars.avatars[0],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 <\u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.Message, {
    name: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0437\u0432\u0435\u0440\u0435\u0432\u0430",
    avatar: _avatars.avatars[2],
    text: "\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0413\u0440\u0443\u0437\u0447\u0438\u043A\u0438 \u0432 \u0421\u041F\u0431 | \u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u0447\u0438\u043A\u043E\u0432 \u043E\u0442 177 \u0440\u0443\u0431\u043B\u0435\u0439. \u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E\u0434\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "unread",
    text: "\u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "loading",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F"
  }), _react.default.createElement(_Message.MessageStatus, {
    state: "notsent",
    text: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"
  })), _react.default.createElement(_Input.Input, null), _react.default.createElement(_ToLast.ToLast, null), _react.default.createElement(_Dropdown.Dropdown, {
    state: "error"
  })));
};

exports.DragnDropError = DragnDropError;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/avatars":"assets/avatars.js","../components/TopPanel":"components/TopPanel.js","../components/ChatView":"components/ChatView.js","../components/Input":"components/Input.js","../components/Message":"components/Message.js","../components/BackPanel":"components/BackPanel.js","../components/ToLast":"components/ToLast.js","../components/Dropdown":"components/Dropdown.js"}],"components/StatusMessage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusMessage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _assets = require("../assets/assets");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StatusMessage = function StatusMessage() {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return _react.default.createElement("div", {
    class: "gs-chat__status-message ".concat(!state ? 'gs-chat__status-message_close' : '')
  }, _react.default.createElement("div", {
    className: "gs-chat__status-message__icon"
  }, _react.default.createElement(_assets.Error, null)), _react.default.createElement("div", {
    className: "gs-chat__status-message__content"
  }, _react.default.createElement("div", {
    className: "gs-chat__status-message__text"
  }, "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043D\u0435 \u0431\u044B\u043B\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"), _react.default.createElement("div", {
    className: "gs-chat__status-message__buttons"
  }, _react.default.createElement("button", {
    onClick: function onClick() {
      return setState(false);
    },
    className: "gs-chat__status-message__close"
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"), _react.default.createElement("button", {
    className: "gs-chat__status-message__action"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437"))));
};

exports.StatusMessage = StatusMessage;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/assets":"assets/assets.js"}],"pages/Messages.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopPanel = require("../components/TopPanel");

var _BlockedPanel = require("../components/BlockedPanel");

var _TeamsView = require("../components/TeamsView");

var _Chats = require("../components/Chats");

var _Search = require("../components/Search");

var _avatars = require("../assets/avatars");

var _SentButton = require("../components/SentButton");

var _StatusMessage = require("../components/StatusMessage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  avatar: _avatars.avatars[0],
  time: "11:23",
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц, то и работа бухгалтера проводится раз в ",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п. Расчет и подготовка СЗВМ отчетов в",
  newMessage: true
}, {
  avatar: _avatars.avatars[1],
  time: "11:23",
  title: "28124 — может быть вы найдете дешевле услуги бухгалтера, но вряд ли ваш новый бухгалтер будет понимать специфику оказываемых",
  info: "Сообщение не отправлено",
  unsent: true
}, {
  avatar: _avatars.avatars[2],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
}, {
  avatar: _avatars.avatars[3],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
},, {
  avatar: _avatars.avatars[3],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
},, {
  avatar: _avatars.avatars[3],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
}];

var Messages = function Messages() {
  return _react.default.createElement("div", {
    className: "gs-chat"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    state: 'static'
  }), _react.default.createElement(_Search.Search, {
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u044E\u0431\u043E\u0435 \u0441\u043B\u043E\u0432\u043E, \u043D\u043E\u043C\u0435\u0440 \u0432\u043E\u043F\u0440\u043E\u0441\u0430 \u0438\u043B\u0438 \u0434\u0430\u0442\u0443"
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_Chats.Chats, {
    alignItem: "start",
    top: _react.default.createElement(_StatusMessage.StatusMessage, null),
    blockedMembers: false,
    info: items
  })), _react.default.createElement(_SentButton.SentButton, {
    size: "min"
  }));
};

exports.Messages = Messages;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/BlockedPanel":"components/BlockedPanel.js","../components/TeamsView":"components/TeamsView.js","../components/Chats":"components/Chats.js","../components/Search":"components/Search.js","../assets/avatars":"assets/avatars.js","../components/SentButton":"components/SentButton.js","../components/StatusMessage":"components/StatusMessage.js"}],"pages/PersonalChat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonalChat = void 0;

var _react = _interopRequireDefault(require("react"));

var _avatars = require("../assets/avatars");

var _TopPanel = require("../components/TopPanel");

var _ChatView = require("../components/ChatView");

var _Input = require("../components/Input");

var _Message = require("../components/Message");

var _BackPanel = require("../components/BackPanel");

var _ToLast = require("../components/ToLast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PersonalChat = function PersonalChat() {
  return _react.default.createElement("div", {
    className: "gs-chat gs-chat_clapped"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    newChat: true,
    chat: true
  }), _react.default.createElement(_BackPanel.BackPanel, {
    text: "\u041E\u0431\u0449\u0438\u0439 \u0447\u0430\u0442",
    avatar: _avatars.avatars[2]
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }));
};

exports.PersonalChat = PersonalChat;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/avatars":"assets/avatars.js","../components/TopPanel":"components/TopPanel.js","../components/ChatView":"components/ChatView.js","../components/Input":"components/Input.js","../components/Message":"components/Message.js","../components/BackPanel":"components/BackPanel.js","../components/ToLast":"components/ToLast.js"}],"pages/Desktop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Desktop = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TopPanel = require("../components/TopPanel");

var _BlockedPanel = require("../components/BlockedPanel");

var _TeamsView = require("../components/TeamsView");

var _Member = require("../components/Member");

var _SentButton = require("../components/SentButton");

var _Chats = require("../components/Chats");

var _assets = require("../assets/assets");

var _avatars = require("../assets/avatars");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var items = [{
  avatar: _avatars.avatars[0],
  time: "11:23",
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц, то и работа бухгалтера проводится раз в ",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п. Расчет и подготовка СЗВМ отчетов в",
  newMessage: true
}, {
  avatar: _avatars.avatars[1],
  time: "11:23",
  title: "28124 — может быть вы найдете дешевле услуги бухгалтера, но вряд ли ваш новый бухгалтер будет понимать специфику оказываемых",
  info: "Сообщение не отправлено",
  unsent: true
}, {
  avatar: _avatars.avatars[2],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
}, {
  avatar: _avatars.avatars[3],
  title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
  info: "Решение вопросов блокировки счета, подготовка документов и т.п."
}];
var Members = [{
  name: 'Екатерина',
  avatar: _avatars.avatars[1]
}, {
  name: 'Екатерина',
  avatar: _avatars.avatars[1]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[2]
}, {
  name: 'Наталья',
  avatar: _avatars.avatars[2]
}];

var Desktop = function Desktop() {
  var _useState = (0, _react.useState)('gs-chat_hide'),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "gs-chat-mini ".concat(state !== 'gs-chat_hide' && "gs-chat-mini_close"),
    onClick: function onClick() {
      if (state === 'gs-chat_hide') {
        setState('gs-chat_show');
      } else {
        setState('gs-chat_hide');
      }
    }
  }, _react.default.createElement("div", {
    className: "gs-chat-mini__icon"
  }, _react.default.createElement("div", {
    className: "gs-chat-mini__icon-open"
  }, _react.default.createElement(_assets.Send, null)), _react.default.createElement("div", {
    className: "gs-chat-mini__icon-close"
  }, _react.default.createElement(_assets.Cross, null)))), _react.default.createElement("div", {
    className: "gs-chat ".concat(state)
  }, _react.default.createElement(_TopPanel.TopPanel, {
    state: 'static'
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_TeamsView.TeamsView, {
    moreMembers: _react.default.createElement(_Member.MoreMembers, {
      count: 5
    }),
    sentButton: _react.default.createElement(_SentButton.SentButton, {
      parent: "teamsview",
      size: "min"
    }),
    members: Members,
    state: "chat",
    title: "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D, \u0434\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E",
    subtitle: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u0447\u0430\u0441\u0430"
  }), _react.default.createElement(_Chats.Chats, {
    alignItem: "start",
    blockedMembers: false,
    info: items
  }))));
};

exports.Desktop = Desktop;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/BlockedPanel":"components/BlockedPanel.js","../components/TeamsView":"components/TeamsView.js","../components/Member":"components/Member.js","../components/SentButton":"components/SentButton.js","../components/Chats":"components/Chats.js","../assets/assets":"assets/assets.js","../assets/avatars":"assets/avatars.js"}],"components/ModalDeleteMessage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalDeleteMessage = void 0;

var _react = _interopRequireDefault(require("react"));

var _avatars = require("../assets/avatars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalDeleteMessage = function ModalDeleteMessage() {
  return _react.default.createElement("div", {
    class: "gs-chat__modal-delete-message"
  }, _react.default.createElement("div", {
    className: "gs-chat__modal-delete-message__inner"
  }, _react.default.createElement("div", {
    className: "gs-chat__modal-delete-message__top"
  }, _react.default.createElement("div", {
    className: "gs-chat__modal-delete-message__avatar"
  }, _react.default.createElement("img", {
    src: _avatars.avatars[2],
    alt: ""
  })), _react.default.createElement("div", {
    className: "gs-chat__modal-delete-message__name"
  }, "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u041F\u0443\u0448\u043A\u0438\u043D")), _react.default.createElement("div", {
    className: "gs-chat__modal-delete-message__text"
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u044E \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0443?"), _react.default.createElement("div", {
    className: "gs-chat__modal-delete-message__descr"
  }, "\u0415\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u0431\u0443\u0434\u0435\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"), _react.default.createElement("div", {
    className: "gs-chat__modal-delete-message__buttons"
  }, _react.default.createElement("button", {
    className: "gs-chat__modal-delete-message__button"
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"), _react.default.createElement("button", {
    className: "gs-chat__modal-delete-message__button"
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))));
};

exports.ModalDeleteMessage = ModalDeleteMessage;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../assets/avatars":"assets/avatars.js"}],"pages/ChatBlockedWithModal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatBlockedWithModal = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopPanel = require("../components/TopPanel");

var _BackPanel = require("../components/BackPanel");

var _Chats = require("../components/Chats");

var _avatars = require("../assets/avatars");

var _ModalDeleteMessage = require("../components/ModalDeleteMessage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  avatar: _avatars.avatars[0],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[2],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[3],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[4],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[1],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[4],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[4],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[1],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[5],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[5],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}, {
  avatar: _avatars.avatars[6],
  blocked: true,
  time: '11:23',
  title: 'Общий чат',
  info: 'Решение вопросов блокировки счета, подготовка'
}];

var ChatBlockedWithModal = function ChatBlockedWithModal() {
  return _react.default.createElement("div", {
    className: "gs-chat gs-chat_blocked"
  }, _react.default.createElement(_TopPanel.TopPanel, {
    state: "static",
    chat: true
  }), _react.default.createElement(_BackPanel.BackPanel, {
    state: "static",
    text: "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u044B\u0435"
  }), _react.default.createElement("div", {
    className: "gs-chat__content"
  }, _react.default.createElement(_ModalDeleteMessage.ModalDeleteMessage, null), _react.default.createElement(_Chats.Chats, {
    info: items
  })));
};

exports.ChatBlockedWithModal = ChatBlockedWithModal;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","../components/TopPanel":"components/TopPanel.js","../components/BackPanel":"components/BackPanel.js","../components/Chats":"components/Chats.js","../assets/avatars":"assets/avatars.js","../components/ModalDeleteMessage":"components/ModalDeleteMessage.js"}],"pages/All.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.All = void 0;

var _react = _interopRequireDefault(require("react"));

var _wouter = require("wouter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var All = function All() {
  return _react.default.createElement("div", null, _react.default.createElement(_wouter.Link, {
    href: "/chat"
  }, _react.default.createElement("p", {
    className: "link"
  }, "chat")), _react.default.createElement(_wouter.Link, {
    href: "/chat-blocked"
  }, _react.default.createElement("p", {
    className: "link"
  }, "chat-blocked")), _react.default.createElement(_wouter.Link, {
    href: "/co-worker-contacts"
  }, _react.default.createElement("p", {
    className: "link"
  }, "co-worker-contacts")), _react.default.createElement(_wouter.Link, {
    href: "/common-chat"
  }, _react.default.createElement("p", {
    className: "link"
  }, "common-chat")), _react.default.createElement(_wouter.Link, {
    href: "/support-emty-state"
  }, _react.default.createElement("p", {
    className: "link"
  }, "support-emty-state")), _react.default.createElement(_wouter.Link, {
    href: "/support-list"
  }, _react.default.createElement("p", {
    className: "link"
  }, "support-list")), _react.default.createElement(_wouter.Link, {
    href: "/support-list-scroll-up"
  }, _react.default.createElement("p", {
    className: "link"
  }, "support-list-scroll-up")), _react.default.createElement(_wouter.Link, {
    href: "/search-emty-state"
  }, _react.default.createElement("p", {
    className: "link"
  }, "search-emty-state")), _react.default.createElement(_wouter.Link, {
    href: "/support-team"
  }, _react.default.createElement("p", {
    className: "link"
  }, "support-team")), _react.default.createElement(_wouter.Link, {
    href: "/support-new-conversation"
  }, _react.default.createElement("p", {
    className: "link"
  }, "support-new-conversation")), _react.default.createElement(_wouter.Link, {
    href: "/support-conversation"
  }, _react.default.createElement("p", {
    className: "link"
  }, "support-conversation")), _react.default.createElement(_wouter.Link, {
    href: "/happy-birthday/bear"
  }, _react.default.createElement("p", {
    className: "link"
  }, "happy-birthday bear")), _react.default.createElement(_wouter.Link, {
    href: "/happy-birthday/cat"
  }, _react.default.createElement("p", {
    className: "link"
  }, "happy-birthday cat")), _react.default.createElement(_wouter.Link, {
    href: "/dropdown"
  }, _react.default.createElement("p", {
    className: "link"
  }, "dropdown")), _react.default.createElement(_wouter.Link, {
    href: "/drag-n-drop-process"
  }, _react.default.createElement("p", {
    className: "link"
  }, "drag-n-drop-process")), _react.default.createElement(_wouter.Link, {
    href: "/drag-n-drop-error"
  }, _react.default.createElement("p", {
    className: "link"
  }, "drag-n-drop-error")), _react.default.createElement(_wouter.Link, {
    href: "/messages"
  }, _react.default.createElement("p", {
    className: "link"
  }, "messages")), _react.default.createElement(_wouter.Link, {
    href: "/desktop"
  }, _react.default.createElement("p", {
    className: "link"
  }, "Desktop")), _react.default.createElement(_wouter.Link, {
    href: "/modal-delete-message"
  }, _react.default.createElement("p", {
    className: "link"
  }, "modal-delete-message")), _react.default.createElement(_wouter.Link, {
    href: "/chat-blocked-with-modal"
  }, _react.default.createElement("p", {
    className: "link"
  }, "chat-blocked-with-modal")));
};

exports.All = All;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","wouter":"../node_modules/wouter/index.js"}],"App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _wouter = require("wouter");

var _HotManager = _interopRequireDefault(require("./HotManager"));

var _Chat = require("./pages/Chat");

var _ChatBlocked = require("./pages/ChatBlocked");

var _CoWorkerContacts = require("./pages/CoWorkerContacts");

var _CommonChat = require("./pages/CommonChat");

var _SupportEmtyState = require("./pages/SupportEmtyState");

var _SupportList = require("./pages/SupportList");

var _SupportListScrollUp = require("./pages/SupportListScrollUp");

var _SearchEmtyState = require("./pages/SearchEmtyState");

var _SupportTeam = require("./pages/SupportTeam");

var _SupportNewConversation = require("./pages/SupportNewConversation");

var _SupportConversation = require("./pages/SupportConversation");

var _HappyBirthday = require("./pages/HappyBirthday");

var _HappyBirthdayCat = require("./pages/HappyBirthdayCat");

var _DropdownPage = require("./pages/DropdownPage");

var _DragnDropProcess = require("./pages/DragnDropProcess");

var _DragnDropError = require("./pages/DragnDropError");

var _Messages = require("./pages/Messages");

var _PersonalChat = require("./pages/PersonalChat");

var _Desktop = require("./pages/Desktop");

var _ModalDeleteMessage = require("./components/ModalDeleteMessage");

var _ChatBlockedWithModal = require("./pages/ChatBlockedWithModal");

var _All = require("./pages/All");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//#if _DEBUG
//#endif
var App = function App() {
  return _react.default.createElement("div", null, _react.default.createElement(_wouter.Route, {
    path: "/",
    component: _All.All
  }), _react.default.createElement(_wouter.Route, {
    path: "/chat",
    component: _Chat.Chat
  }), _react.default.createElement(_wouter.Route, {
    path: "/chat-blocked",
    component: _ChatBlocked.ChatBlocked
  }), _react.default.createElement(_wouter.Route, {
    path: "/co-worker-contacts",
    component: _CoWorkerContacts.CoWorkerContacts
  }), _react.default.createElement(_wouter.Route, {
    path: "/common-chat",
    component: _CommonChat.CommonChat
  }), _react.default.createElement(_wouter.Route, {
    path: "/support-emty-state",
    component: _SupportEmtyState.SupportEmtyState
  }), _react.default.createElement(_wouter.Route, {
    path: "/support-list",
    component: _SupportList.SupportList
  }), _react.default.createElement(_wouter.Route, {
    path: "/support-list-scroll-up",
    component: _SupportListScrollUp.SupportListScrollUp
  }), _react.default.createElement(_wouter.Route, {
    path: "/search-emty-state",
    component: _SearchEmtyState.SearchEmtyState
  }), _react.default.createElement(_wouter.Route, {
    path: "/support-team",
    component: _SupportTeam.SupportTeam
  }), _react.default.createElement(_wouter.Route, {
    path: "/support-new-conversation",
    component: _SupportNewConversation.SupportNewConversation
  }), _react.default.createElement(_wouter.Route, {
    path: "/support-conversation",
    component: _SupportConversation.SupportConversation
  }), _react.default.createElement(_wouter.Route, {
    path: "/happy-birthday/bear",
    component: _HappyBirthday.HappyBirthday
  }), _react.default.createElement(_wouter.Route, {
    path: "/happy-birthday/cat",
    component: _HappyBirthdayCat.HappyBirthdayCat
  }), _react.default.createElement(_wouter.Route, {
    path: "/dropdown",
    component: _DropdownPage.DropdownPage
  }), _react.default.createElement(_wouter.Route, {
    path: "/drag-n-drop-process",
    component: _DragnDropProcess.DragnDropProcess
  }), _react.default.createElement(_wouter.Route, {
    path: "/drag-n-drop-error",
    component: _DragnDropError.DragnDropError
  }), _react.default.createElement(_wouter.Route, {
    path: "/messages",
    component: _Messages.Messages
  }), _react.default.createElement(_wouter.Route, {
    path: "/desktop",
    component: _Desktop.Desktop
  }), _react.default.createElement(_wouter.Route, {
    path: "/modal-delete-message",
    component: _ModalDeleteMessage.ModalDeleteMessage
  }), _react.default.createElement(_wouter.Route, {
    path: "/chat-blocked-with-modal",
    component: _ChatBlockedWithModal.ChatBlockedWithModal
  }));
}; //#if _DEBUG


_HotManager.default.register(module.id); //#endif


var _default = App;
exports.default = _default;
},{"react":"../node_modules/preact/compat/dist/compat.module.js","wouter":"../node_modules/wouter/index.js","./HotManager":"HotManager.js","./pages/Chat":"pages/Chat.js","./pages/ChatBlocked":"pages/ChatBlocked.js","./pages/CoWorkerContacts":"pages/CoWorkerContacts.js","./pages/CommonChat":"pages/CommonChat.js","./pages/SupportEmtyState":"pages/SupportEmtyState.js","./pages/SupportList":"pages/SupportList.js","./pages/SupportListScrollUp":"pages/SupportListScrollUp.js","./pages/SearchEmtyState":"pages/SearchEmtyState.js","./pages/SupportTeam":"pages/SupportTeam.js","./pages/SupportNewConversation":"pages/SupportNewConversation.js","./pages/SupportConversation":"pages/SupportConversation.js","./pages/HappyBirthday":"pages/HappyBirthday.js","./pages/HappyBirthdayCat":"pages/HappyBirthdayCat.js","./pages/DropdownPage":"pages/DropdownPage.js","./pages/DragnDropProcess":"pages/DragnDropProcess.js","./pages/DragnDropError":"pages/DragnDropError.js","./pages/Messages":"pages/Messages.js","./pages/PersonalChat":"pages/PersonalChat.js","./pages/Desktop":"pages/Desktop.js","./components/ModalDeleteMessage":"components/ModalDeleteMessage.js","./pages/ChatBlockedWithModal":"pages/ChatBlockedWithModal.js","./pages/All":"pages/All.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _HotManager = _interopRequireDefault(require("./HotManager"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = document.querySelector('.gs');

var el = _reactDom.default.render(_react.default.createElement(_App.default, null), root); //#if _DEBUG


module.hot.accept(function () {
  var App = require(_HotManager.default.getRegistered()).default;

  el = _reactDom.default.render(_react.default.createElement(App, null), root);
}); //#endif
},{"react":"../node_modules/preact/compat/dist/compat.module.js","react-dom":"../node_modules/preact/compat/dist/compat.module.js","./HotManager":"HotManager.js","./App":"App.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49592" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map