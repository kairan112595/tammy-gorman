/*! For license information please see contentScript.js.LICENSE.txt */
( () => {
    var e = {
        938: (e, t, n) => {
            "use strict";
            n.d(t, {
                a0: () => s,
                es: () => a
            });
            class r extends Error {
                constructor(e) {
                    super(null != e ? `Timed out after waiting for ${e} ms` : "Timed out"),
                    Object.setPrototypeOf(this, r.prototype)
                }
            }
            const i = (e, t) => new Promise(( (n, r) => {
                try {
                    e.schedule(n, t)
                } catch (e) {
                    r(e)
                }
            }
            ))
              , o = {
                schedule: (e, t) => {
                    let n;
                    const r = e => {
                        null != e && clearTimeout(e),
                        n = void 0
                    }
                    ;
                    return n = setTimeout(( () => {
                        r(n),
                        e()
                    }
                    ), t),
                    {
                        cancel: () => r(n)
                    }
                }
            }
              , a = Number.POSITIVE_INFINITY
              , s = (e, t, n) => {
                var s, u;
                const c = null !== (s = "number" == typeof t ? t : null == t ? void 0 : t.timeout) && void 0 !== s ? s : 5e3
                  , l = null !== (u = "number" == typeof t ? n : null == t ? void 0 : t.intervalBetweenAttempts) && void 0 !== u ? u : 50;
                let f = !1;
                const p = () => new Promise(( (t, n) => {
                    const r = () => {
                        f || new Promise(( (t, n) => {
                            try {
                                t(e())
                            } catch (t) {
                                n(t)
                            }
                        }
                        )).then((e => {
                            e ? t(e) : i(o, l).then(r).catch(n)
                        }
                        )).catch(n)
                    }
                    ;
                    r()
                }
                ))
                  , d = c !== a ? () => i(o, c).then(( () => {
                    throw f = !0,
                    new r(c)
                }
                )) : void 0;
                return null != d ? Promise.race([p(), d()]) : p()
            }
        }
        ,
        8263: (e, t, n) => {
            "use strict";
            var r = n(8175)
              , i = n(6873)
              , o = n(6596)
              , a = n(148)
              , s = n(214);
            (e.exports = function(e, t) {
                var n, i, u, c, l;
                return arguments.length < 2 || "string" != typeof e ? (c = t,
                t = e,
                e = null) : c = arguments[2],
                r(e) ? (n = s.call(e, "c"),
                i = s.call(e, "e"),
                u = s.call(e, "w")) : (n = u = !0,
                i = !1),
                l = {
                    value: t,
                    configurable: n,
                    enumerable: i,
                    writable: u
                },
                c ? o(a(c), l) : l
            }
            ).gs = function(e, t, n) {
                var u, c, l, f;
                return "string" != typeof e ? (l = n,
                n = t,
                t = e,
                e = null) : l = arguments[3],
                r(t) ? i(t) ? r(n) ? i(n) || (l = n,
                n = void 0) : n = void 0 : (l = t,
                t = n = void 0) : t = void 0,
                r(e) ? (u = s.call(e, "c"),
                c = s.call(e, "e")) : (u = !0,
                c = !1),
                f = {
                    get: t,
                    set: n,
                    configurable: u,
                    enumerable: c
                },
                l ? o(a(l), f) : f
            }
        }
        ,
        7910: (e, t, n) => {
            "use strict";
            var r = n(4295)
              , i = n(2665)
              , o = n(7134)
              , a = Array.prototype.indexOf
              , s = Object.prototype.hasOwnProperty
              , u = Math.abs
              , c = Math.floor;
            e.exports = function(e) {
                var t, n, l, f;
                if (!r(e))
                    return a.apply(this, arguments);
                for (n = i(o(this).length),
                l = arguments[1],
                t = l = isNaN(l) ? 0 : l >= 0 ? c(l) : i(this.length) - c(u(l)); t < n; ++t)
                    if (s.call(this, t) && (f = this[t],
                    r(f)))
                        return t;
                return -1
            }
        }
        ,
        4645: (e, t, n) => {
            "use strict";
            e.exports = n(3916)() ? Array.from : n(5552)
        }
        ,
        3916: e => {
            "use strict";
            e.exports = function() {
                var e, t, n = Array.from;
                return "function" == typeof n && (t = n(e = ["raz", "dwa"]),
                Boolean(t && t !== e && "dwa" === t[1]))
            }
        }
        ,
        5552: (e, t, n) => {
            "use strict";
            var r = n(2380).iterator
              , i = n(8746)
              , o = n(459)
              , a = n(2665)
              , s = n(5499)
              , u = n(7134)
              , c = n(9762)
              , l = n(3748)
              , f = Array.isArray
              , p = Function.prototype.call
              , d = {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: null
            }
              , h = Object.defineProperty;
            e.exports = function(e) {
                var t, n, g, m, v, y, b, x, w, A, T = arguments[1], _ = arguments[2];
                if (e = Object(u(e)),
                c(T) && s(T),
                this && this !== Array && o(this))
                    t = this;
                else {
                    if (!T) {
                        if (i(e))
                            return 1 !== (v = e.length) ? Array.apply(null, e) : ((m = new Array(1))[0] = e[0],
                            m);
                        if (f(e)) {
                            for (m = new Array(v = e.length),
                            n = 0; n < v; ++n)
                                m[n] = e[n];
                            return m
                        }
                    }
                    m = []
                }
                if (!f(e))
                    if (void 0 !== (w = e[r])) {
                        for (b = s(w).call(e),
                        t && (m = new t),
                        x = b.next(),
                        n = 0; !x.done; )
                            A = T ? p.call(T, _, x.value, n) : x.value,
                            t ? (d.value = A,
                            h(m, n, d)) : m[n] = A,
                            x = b.next(),
                            ++n;
                        v = n
                    } else if (l(e)) {
                        for (v = e.length,
                        t && (m = new t),
                        n = 0,
                        g = 0; n < v; ++n)
                            A = e[n],
                            n + 1 < v && (y = A.charCodeAt(0)) >= 55296 && y <= 56319 && (A += e[++n]),
                            A = T ? p.call(T, _, A, g) : A,
                            t ? (d.value = A,
                            h(m, g, d)) : m[g] = A,
                            ++g;
                        v = g
                    }
                if (void 0 === v)
                    for (v = a(e.length),
                    t && (m = new t(v)),
                    n = 0; n < v; ++n)
                        A = T ? p.call(T, _, e[n], n) : e[n],
                        t ? (d.value = A,
                        h(m, n, d)) : m[n] = A;
                return t && (d.value = null,
                m.length = v),
                m
            }
        }
        ,
        7391: (e, t, n) => {
            "use strict";
            var r = n(4645)
              , i = Array.isArray;
            e.exports = function(e) {
                return i(e) ? e : r(e)
            }
        }
        ,
        3484: (e, t, n) => {
            "use strict";
            var r = n(6596)
              , i = n(3052)
              , o = n(9762)
              , a = Error.captureStackTrace;
            e.exports = function(t) {
                var n = new Error(t)
                  , s = arguments[1]
                  , u = arguments[2];
                return o(u) || i(s) && (u = s,
                s = null),
                o(u) && r(n, u),
                o(s) && (n.code = s),
                a && a(n, e.exports),
                n
            }
        }
        ,
        5378: (e, t, n) => {
            "use strict";
            var r, i, o, a, s, u = n(2665), c = function(e, t) {
                return t
            };
            try {
                Object.defineProperty(c, "length", {
                    configurable: !0,
                    writable: !1,
                    enumerable: !1,
                    value: 1
                })
            } catch (e) {}
            1 === c.length ? (r = {
                configurable: !0,
                writable: !1,
                enumerable: !1
            },
            i = Object.defineProperty,
            e.exports = function(e, t) {
                return t = u(t),
                e.length === t ? e : (r.value = t,
                i(e, "length", r))
            }
            ) : (a = n(6069),
            s = [],
            o = function(e) {
                var t, n = 0;
                if (s[e])
                    return s[e];
                for (t = []; e--; )
                    t.push("a" + (++n).toString(36));
                return new Function("fn","return function (" + t.join(", ") + ") { return fn.apply(this, arguments); };")
            }
            ,
            e.exports = function(e, t) {
                var n;
                if (t = u(t),
                e.length === t)
                    return e;
                n = o(t)(e);
                try {
                    a(n, e)
                } catch (e) {}
                return n
            }
            )
        }
        ,
        8746: e => {
            "use strict";
            var t = Object.prototype.toString
              , n = t.call(function() {
                return arguments
            }());
            e.exports = function(e) {
                return t.call(e) === n
            }
        }
        ,
        459: e => {
            "use strict";
            var t = Object.prototype.toString
              , n = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
            e.exports = function(e) {
                return "function" == typeof e && n(t.call(e))
            }
        }
        ,
        6011: e => {
            "use strict";
            e.exports = function() {}
        }
        ,
        9911: (e, t, n) => {
            "use strict";
            e.exports = n(2734)() ? Math.sign : n(3670)
        }
        ,
        2734: e => {
            "use strict";
            e.exports = function() {
                var e = Math.sign;
                return "function" == typeof e && (1 === e(10) && -1 === e(-20))
            }
        }
        ,
        3670: e => {
            "use strict";
            e.exports = function(e) {
                return e = Number(e),
                isNaN(e) || 0 === e ? e : e > 0 ? 1 : -1
            }
        }
        ,
        4295: (e, t, n) => {
            "use strict";
            e.exports = n(8686)() ? Number.isNaN : n(6073)
        }
        ,
        8686: e => {
            "use strict";
            e.exports = function() {
                var e = Number.isNaN;
                return "function" == typeof e && (!e({}) && e(NaN) && !e(34))
            }
        }
        ,
        6073: e => {
            "use strict";
            e.exports = function(e) {
                return e != e
            }
        }
        ,
        9806: (e, t, n) => {
            "use strict";
            var r = n(9911)
              , i = Math.abs
              , o = Math.floor;
            e.exports = function(e) {
                return isNaN(e) ? 0 : 0 !== (e = Number(e)) && isFinite(e) ? r(e) * o(i(e)) : e
            }
        }
        ,
        2665: (e, t, n) => {
            "use strict";
            var r = n(9806)
              , i = Math.max;
            e.exports = function(e) {
                return i(0, r(e))
            }
        }
        ,
        8191: (e, t, n) => {
            "use strict";
            var r = n(5499)
              , i = n(7134)
              , o = Function.prototype.bind
              , a = Function.prototype.call
              , s = Object.keys
              , u = Object.prototype.propertyIsEnumerable;
            e.exports = function(e, t) {
                return function(n, c) {
                    var l, f = arguments[2], p = arguments[3];
                    return n = Object(i(n)),
                    r(c),
                    l = s(n),
                    p && l.sort("function" == typeof p ? o.call(p, n) : void 0),
                    "function" != typeof e && (e = l[e]),
                    a.call(e, l, (function(e, r) {
                        return u.call(n, e) ? a.call(c, f, n[e], e, n, r) : t
                    }
                    ))
                }
            }
        }
        ,
        6596: (e, t, n) => {
            "use strict";
            e.exports = n(5339)() ? Object.assign : n(3595)
        }
        ,
        5339: e => {
            "use strict";
            e.exports = function() {
                var e, t = Object.assign;
                return "function" == typeof t && (t(e = {
                    foo: "raz"
                }, {
                    bar: "dwa"
                }, {
                    trzy: "trzy"
                }),
                e.foo + e.bar + e.trzy === "razdwatrzy")
            }
        }
        ,
        3595: (e, t, n) => {
            "use strict";
            var r = n(2093)
              , i = n(7134)
              , o = Math.max;
            e.exports = function(e, t) {
                var n, a, s, u = o(arguments.length, 2);
                for (e = Object(i(e)),
                s = function(r) {
                    try {
                        e[r] = t[r]
                    } catch (e) {
                        n || (n = e)
                    }
                }
                ,
                a = 1; a < u; ++a)
                    r(t = arguments[a]).forEach(s);
                if (void 0 !== n)
                    throw n;
                return e
            }
        }
        ,
        5921: (e, t, n) => {
            "use strict";
            e.exports = n(8191)("forEach")
        }
        ,
        9575: e => {
            "use strict";
            e.exports = function(e) {
                return "function" == typeof e
            }
        }
        ,
        3052: (e, t, n) => {
            "use strict";
            var r = n(9762)
              , i = {
                function: !0,
                object: !0
            };
            e.exports = function(e) {
                return r(e) && i[typeof e] || !1
            }
        }
        ,
        9762: (e, t, n) => {
            "use strict";
            var r = n(6011)();
            e.exports = function(e) {
                return e !== r && null !== e
            }
        }
        ,
        2093: (e, t, n) => {
            "use strict";
            e.exports = n(3380)() ? Object.keys : n(4232)
        }
        ,
        3380: e => {
            "use strict";
            e.exports = function() {
                try {
                    return Object.keys("primitive"),
                    !0
                } catch (e) {
                    return !1
                }
            }
        }
        ,
        4232: (e, t, n) => {
            "use strict";
            var r = n(9762)
              , i = Object.keys;
            e.exports = function(e) {
                return i(r(e) ? Object(e) : e)
            }
        }
        ,
        498: (e, t, n) => {
            "use strict";
            var r = n(5499)
              , i = n(5921)
              , o = Function.prototype.call;
            e.exports = function(e, t) {
                var n = {}
                  , a = arguments[2];
                return r(t),
                i(e, (function(e, r, i, s) {
                    n[r] = o.call(t, a, e, r, i, s)
                }
                )),
                n
            }
        }
        ,
        6069: (e, t, n) => {
            "use strict";
            var r = n(7134)
              , i = Object.defineProperty
              , o = Object.getOwnPropertyDescriptor
              , a = Object.getOwnPropertyNames
              , s = Object.getOwnPropertySymbols;
            e.exports = function(e, t) {
                var n, u = Object(r(t));
                if (e = Object(r(e)),
                a(u).forEach((function(r) {
                    try {
                        i(e, r, o(t, r))
                    } catch (e) {
                        n = e
                    }
                }
                )),
                "function" == typeof s && s(u).forEach((function(r) {
                    try {
                        i(e, r, o(t, r))
                    } catch (e) {
                        n = e
                    }
                }
                )),
                void 0 !== n)
                    throw n;
                return e
            }
        }
        ,
        148: (e, t, n) => {
            "use strict";
            var r = n(9762)
              , i = Array.prototype.forEach
              , o = Object.create;
            e.exports = function(e) {
                var t = o(null);
                return i.call(arguments, (function(e) {
                    r(e) && function(e, t) {
                        var n;
                        for (n in e)
                            t[n] = e[n]
                    }(Object(e), t)
                }
                )),
                t
            }
        }
        ,
        7724: e => {
            "use strict";
            var t = Array.prototype.forEach
              , n = Object.create;
            e.exports = function(e) {
                var r = n(null);
                return t.call(arguments, (function(e) {
                    r[e] = !0
                }
                )),
                r
            }
        }
        ,
        5499: e => {
            "use strict";
            e.exports = function(e) {
                if ("function" != typeof e)
                    throw new TypeError(e + " is not a function");
                return e
            }
        }
        ,
        7134: (e, t, n) => {
            "use strict";
            var r = n(9762);
            e.exports = function(e) {
                if (!r(e))
                    throw new TypeError("Cannot use null or undefined");
                return e
            }
        }
        ,
        7292: (e, t, n) => {
            "use strict";
            var r = n(7134)
              , i = n(1484);
            e.exports = function(e) {
                return i(r(e))
            }
        }
        ,
        1484: (e, t, n) => {
            "use strict";
            var r = n(9575);
            e.exports = function(e) {
                try {
                    return e && r(e.toString) ? e.toString() : String(e)
                } catch (e) {
                    throw new TypeError("Passed argument cannot be stringifed")
                }
            }
        }
        ,
        1029: (e, t, n) => {
            "use strict";
            var r = n(9575);
            e.exports = function(e) {
                try {
                    return e && r(e.toString) ? e.toString() : String(e)
                } catch (e) {
                    return "<Non-coercible to string value>"
                }
            }
        }
        ,
        214: (e, t, n) => {
            "use strict";
            e.exports = n(525)() ? String.prototype.contains : n(1521)
        }
        ,
        525: e => {
            "use strict";
            var t = "razdwatrzy";
            e.exports = function() {
                return "function" == typeof t.contains && (!0 === t.contains("dwa") && !1 === t.contains("foo"))
            }
        }
        ,
        1521: e => {
            "use strict";
            var t = String.prototype.indexOf;
            e.exports = function(e) {
                return t.call(this, e, arguments[1]) > -1
            }
        }
        ,
        3748: e => {
            "use strict";
            var t = Object.prototype.toString
              , n = t.call("");
            e.exports = function(e) {
                return "string" == typeof e || e && "object" == typeof e && (e instanceof String || t.call(e) === n) || !1
            }
        }
        ,
        9438: (e, t, n) => {
            "use strict";
            var r = n(1029)
              , i = /[\n\r\u2028\u2029]/g;
            e.exports = function(e) {
                var t = r(e);
                return t.length > 100 && (t = t.slice(0, 99) + "…"),
                t = t.replace(i, (function(e) {
                    return JSON.stringify(e).slice(1, -1)
                }
                ))
            }
        }
        ,
        2380: (e, t, n) => {
            "use strict";
            e.exports = n(4195)() ? n(8209).Symbol : n(6613)
        }
        ,
        4195: (e, t, n) => {
            "use strict";
            var r = n(8209)
              , i = {
                object: !0,
                symbol: !0
            };
            e.exports = function() {
                var e, t = r.Symbol;
                if ("function" != typeof t)
                    return !1;
                e = t("test symbol");
                try {
                    String(e)
                } catch (e) {
                    return !1
                }
                return !!i[typeof t.iterator] && (!!i[typeof t.toPrimitive] && !!i[typeof t.toStringTag])
            }
        }
        ,
        3055: e => {
            "use strict";
            e.exports = function(e) {
                return !!e && ("symbol" == typeof e || !!e.constructor && ("Symbol" === e.constructor.name && "Symbol" === e[e.constructor.toStringTag]))
            }
        }
        ,
        2941: (e, t, n) => {
            "use strict";
            var r = n(8263)
              , i = Object.create
              , o = Object.defineProperty
              , a = Object.prototype
              , s = i(null);
            e.exports = function(e) {
                for (var t, n, i = 0; s[e + (i || "")]; )
                    ++i;
                return s[e += i || ""] = !0,
                o(a, t = "@@" + e, r.gs(null, (function(e) {
                    n || (n = !0,
                    o(this, t, r(e)),
                    n = !1)
                }
                ))),
                t
            }
        }
        ,
        3333: (e, t, n) => {
            "use strict";
            var r = n(8263)
              , i = n(8209).Symbol;
            e.exports = function(e) {
                return Object.defineProperties(e, {
                    hasInstance: r("", i && i.hasInstance || e("hasInstance")),
                    isConcatSpreadable: r("", i && i.isConcatSpreadable || e("isConcatSpreadable")),
                    iterator: r("", i && i.iterator || e("iterator")),
                    match: r("", i && i.match || e("match")),
                    replace: r("", i && i.replace || e("replace")),
                    search: r("", i && i.search || e("search")),
                    species: r("", i && i.species || e("species")),
                    split: r("", i && i.split || e("split")),
                    toPrimitive: r("", i && i.toPrimitive || e("toPrimitive")),
                    toStringTag: r("", i && i.toStringTag || e("toStringTag")),
                    unscopables: r("", i && i.unscopables || e("unscopables"))
                })
            }
        }
        ,
        8118: (e, t, n) => {
            "use strict";
            var r = n(8263)
              , i = n(3297)
              , o = Object.create(null);
            e.exports = function(e) {
                return Object.defineProperties(e, {
                    for: r((function(t) {
                        return o[t] ? o[t] : o[t] = e(String(t))
                    }
                    )),
                    keyFor: r((function(e) {
                        var t;
                        for (t in i(e),
                        o)
                            if (o[t] === e)
                                return t
                    }
                    ))
                })
            }
        }
        ,
        6613: (e, t, n) => {
            "use strict";
            var r, i, o, a = n(8263), s = n(3297), u = n(8209).Symbol, c = n(2941), l = n(3333), f = n(8118), p = Object.create, d = Object.defineProperties, h = Object.defineProperty;
            if ("function" == typeof u)
                try {
                    String(u()),
                    o = !0
                } catch (e) {}
            else
                u = null;
            i = function(e) {
                if (this instanceof i)
                    throw new TypeError("Symbol is not a constructor");
                return r(e)
            }
            ,
            e.exports = r = function e(t) {
                var n;
                if (this instanceof e)
                    throw new TypeError("Symbol is not a constructor");
                return o ? u(t) : (n = p(i.prototype),
                t = void 0 === t ? "" : String(t),
                d(n, {
                    __description__: a("", t),
                    __name__: a("", c(t))
                }))
            }
            ,
            l(r),
            f(r),
            d(i.prototype, {
                constructor: a(r),
                toString: a("", (function() {
                    return this.__name__
                }
                ))
            }),
            d(r.prototype, {
                toString: a((function() {
                    return "Symbol (" + s(this).__description__ + ")"
                }
                )),
                valueOf: a((function() {
                    return s(this)
                }
                ))
            }),
            h(r.prototype, r.toPrimitive, a("", (function() {
                var e = s(this);
                return "symbol" == typeof e ? e : e.toString()
            }
            ))),
            h(r.prototype, r.toStringTag, a("c", "Symbol")),
            h(i.prototype, r.toStringTag, a("c", r.prototype[r.toStringTag])),
            h(i.prototype, r.toPrimitive, a("c", r.prototype[r.toPrimitive]))
        }
        ,
        3297: (e, t, n) => {
            "use strict";
            var r = n(3055);
            e.exports = function(e) {
                if (!r(e))
                    throw new TypeError(e + " is not a symbol");
                return e
            }
        }
        ,
        2834: e => {
            "use strict";
            var t = /[|\\{}()[\]^$+*?.]/g;
            e.exports = function(e) {
                if ("string" != typeof e)
                    throw new TypeError("Expected a string");
                return e.replace(t, "\\$&")
            }
        }
        ,
        3068: (e, t, n) => {
            "use strict";
            var r, i, o, a, s, u, c, l = n(8263), f = n(5499), p = Function.prototype.apply, d = Function.prototype.call, h = Object.create, g = Object.defineProperty, m = Object.defineProperties, v = Object.prototype.hasOwnProperty, y = {
                configurable: !0,
                enumerable: !1,
                writable: !0
            };
            i = function(e, t) {
                var n, i;
                return f(t),
                i = this,
                r.call(this, e, n = function() {
                    o.call(i, e, n),
                    p.call(t, this, arguments)
                }
                ),
                n.__eeOnceListener__ = t,
                this
            }
            ,
            s = {
                on: r = function(e, t) {
                    var n;
                    return f(t),
                    v.call(this, "__ee__") ? n = this.__ee__ : (n = y.value = h(null),
                    g(this, "__ee__", y),
                    y.value = null),
                    n[e] ? "object" == typeof n[e] ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t,
                    this
                }
                ,
                once: i,
                off: o = function(e, t) {
                    var n, r, i, o;
                    if (f(t),
                    !v.call(this, "__ee__"))
                        return this;
                    if (!(n = this.__ee__)[e])
                        return this;
                    if ("object" == typeof (r = n[e]))
                        for (o = 0; i = r[o]; ++o)
                            i !== t && i.__eeOnceListener__ !== t || (2 === r.length ? n[e] = r[o ? 0 : 1] : r.splice(o, 1));
                    else
                        r !== t && r.__eeOnceListener__ !== t || delete n[e];
                    return this
                }
                ,
                emit: a = function(e) {
                    var t, n, r, i, o;
                    if (v.call(this, "__ee__") && (i = this.__ee__[e]))
                        if ("object" == typeof i) {
                            for (n = arguments.length,
                            o = new Array(n - 1),
                            t = 1; t < n; ++t)
                                o[t - 1] = arguments[t];
                            for (i = i.slice(),
                            t = 0; r = i[t]; ++t)
                                p.call(r, this, o)
                        } else
                            switch (arguments.length) {
                            case 1:
                                d.call(i, this);
                                break;
                            case 2:
                                d.call(i, this, arguments[1]);
                                break;
                            case 3:
                                d.call(i, this, arguments[1], arguments[2]);
                                break;
                            default:
                                for (n = arguments.length,
                                o = new Array(n - 1),
                                t = 1; t < n; ++t)
                                    o[t - 1] = arguments[t];
                                p.call(i, this, o)
                            }
                }
            },
            u = {
                on: l(r),
                once: l(i),
                off: l(o),
                emit: l(a)
            },
            c = m({}, u),
            e.exports = t = function(e) {
                return null == e ? h(c) : m(Object(e), u)
            }
            ,
            t.methods = s
        }
        ,
        2215: e => {
            var t = function() {
                if ("object" == typeof self && self)
                    return self;
                if ("object" == typeof window && window)
                    return window;
                throw new Error("Unable to resolve global `this`")
            };
            e.exports = function() {
                if (this)
                    return this;
                try {
                    Object.defineProperty(Object.prototype, "__global__", {
                        get: function() {
                            return this
                        },
                        configurable: !0
                    })
                } catch (e) {
                    return t()
                }
                try {
                    return __global__ || t()
                } finally {
                    delete Object.prototype.__global__
                }
            }()
        }
        ,
        8209: (e, t, n) => {
            "use strict";
            e.exports = n(4744)() ? globalThis : n(2215)
        }
        ,
        4744: e => {
            "use strict";
            e.exports = function() {
                return "object" == typeof globalThis && (!!globalThis && globalThis.Array === Array)
            }
        }
        ,
        4866: e => {
            e.exports = function() {
                return "undefined" != typeof window && "object" == typeof window.process && "renderer" === window.process.type || (!("undefined" == typeof process || "object" != typeof process.versions || !process.versions.electron) || "object" == typeof navigator && "string" == typeof navigator.userAgent && navigator.userAgent.indexOf("Electron") >= 0)
            }
        }
        ,
        7297: e => {
            function t(e) {
                return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
            }
            e.exports = t,
            e.exports.default = t
        }
        ,
        2673: e => {
            e.exports = function(e) {
                if ("string" != typeof e)
                    return !1;
                var i = e.match(t);
                if (!i)
                    return !1;
                var o = i[1];
                if (!o)
                    return !1;
                if (n.test(o) || r.test(o))
                    return !0;
                return !1
            }
            ;
            var t = /^(?:\w+:)?\/\/(\S+)$/
              , n = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/
              , r = /^[^\s\.]+\.\S{2,}$/
        }
        ,
        2543: function(e, t, n) {
            var r;
            e = n.nmd(e),
            function() {
                var i, o = "Expected a function", a = "__lodash_hash_undefined__", s = "__lodash_placeholder__", u = 16, c = 32, l = 64, f = 128, p = 256, d = 1 / 0, h = 9007199254740991, g = NaN, m = 4294967295, v = [["ary", f], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", u], ["flip", 512], ["partial", c], ["partialRight", l], ["rearg", p]], y = "[object Arguments]", b = "[object Array]", x = "[object Boolean]", w = "[object Date]", A = "[object Error]", T = "[object Function]", _ = "[object GeneratorFunction]", S = "[object Map]", E = "[object Number]", N = "[object Object]", k = "[object Promise]", L = "[object RegExp]", C = "[object Set]", O = "[object String]", P = "[object Symbol]", j = "[object WeakMap]", R = "[object ArrayBuffer]", I = "[object DataView]", M = "[object Float32Array]", D = "[object Float64Array]", B = "[object Int8Array]", q = "[object Int16Array]", F = "[object Int32Array]", H = "[object Uint8Array]", W = "[object Uint8ClampedArray]", U = "[object Uint16Array]", z = "[object Uint32Array]", $ = /\b__p \+= '';/g, K = /\b(__p \+=) '' \+/g, V = /(__e\(.*?\)|\b__t\)) \+\n'';/g, G = /&(?:amp|lt|gt|quot|#39);/g, Y = /[&<>"']/g, J = RegExp(G.source), X = RegExp(Y.source), Z = /<%-([\s\S]+?)%>/g, Q = /<%([\s\S]+?)%>/g, ee = /<%=([\s\S]+?)%>/g, te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ne = /^\w*$/, re = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ie = /[\\^$.*+?()[\]{}|]/g, oe = RegExp(ie.source), ae = /^\s+/, se = /\s/, ue = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ce = /\{\n\/\* \[wrapped with (.+)\] \*/, le = /,? & /, fe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, pe = /[()=,{}\[\]\/\s]/, de = /\\(\\)?/g, he = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ge = /\w*$/, me = /^[-+]0x[0-9a-f]+$/i, ve = /^0b[01]+$/i, ye = /^\[object .+?Constructor\]$/, be = /^0o[0-7]+$/i, xe = /^(?:0|[1-9]\d*)$/, we = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ae = /($^)/, Te = /['\n\r\u2028\u2029\\]/g, _e = "\\ud800-\\udfff", Se = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Ee = "\\u2700-\\u27bf", Ne = "a-z\\xdf-\\xf6\\xf8-\\xff", ke = "A-Z\\xc0-\\xd6\\xd8-\\xde", Le = "\\ufe0e\\ufe0f", Ce = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Oe = "['’]", Pe = "[" + _e + "]", je = "[" + Ce + "]", Re = "[" + Se + "]", Ie = "\\d+", Me = "[" + Ee + "]", De = "[" + Ne + "]", Be = "[^" + _e + Ce + Ie + Ee + Ne + ke + "]", qe = "\\ud83c[\\udffb-\\udfff]", Fe = "[^" + _e + "]", He = "(?:\\ud83c[\\udde6-\\uddff]){2}", We = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ue = "[" + ke + "]", ze = "\\u200d", $e = "(?:" + De + "|" + Be + ")", Ke = "(?:" + Ue + "|" + Be + ")", Ve = "(?:['’](?:d|ll|m|re|s|t|ve))?", Ge = "(?:['’](?:D|LL|M|RE|S|T|VE))?", Ye = "(?:" + Re + "|" + qe + ")" + "?", Je = "[" + Le + "]?", Xe = Je + Ye + ("(?:" + ze + "(?:" + [Fe, He, We].join("|") + ")" + Je + Ye + ")*"), Ze = "(?:" + [Me, He, We].join("|") + ")" + Xe, Qe = "(?:" + [Fe + Re + "?", Re, He, We, Pe].join("|") + ")", et = RegExp(Oe, "g"), tt = RegExp(Re, "g"), nt = RegExp(qe + "(?=" + qe + ")|" + Qe + Xe, "g"), rt = RegExp([Ue + "?" + De + "+" + Ve + "(?=" + [je, Ue, "$"].join("|") + ")", Ke + "+" + Ge + "(?=" + [je, Ue + $e, "$"].join("|") + ")", Ue + "?" + $e + "+" + Ve, Ue + "+" + Ge, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ie, Ze].join("|"), "g"), it = RegExp("[" + ze + _e + Se + Le + "]"), ot = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, at = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], st = -1, ut = {};
                ut[M] = ut[D] = ut[B] = ut[q] = ut[F] = ut[H] = ut[W] = ut[U] = ut[z] = !0,
                ut[y] = ut[b] = ut[R] = ut[x] = ut[I] = ut[w] = ut[A] = ut[T] = ut[S] = ut[E] = ut[N] = ut[L] = ut[C] = ut[O] = ut[j] = !1;
                var ct = {};
                ct[y] = ct[b] = ct[R] = ct[I] = ct[x] = ct[w] = ct[M] = ct[D] = ct[B] = ct[q] = ct[F] = ct[S] = ct[E] = ct[N] = ct[L] = ct[C] = ct[O] = ct[P] = ct[H] = ct[W] = ct[U] = ct[z] = !0,
                ct[A] = ct[T] = ct[j] = !1;
                var lt = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }
                  , ft = parseFloat
                  , pt = parseInt
                  , dt = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
                  , ht = "object" == typeof self && self && self.Object === Object && self
                  , gt = dt || ht || Function("return this")()
                  , mt = t && !t.nodeType && t
                  , vt = mt && e && !e.nodeType && e
                  , yt = vt && vt.exports === mt
                  , bt = yt && dt.process
                  , xt = function() {
                    try {
                        var e = vt && vt.require && vt.require("util").types;
                        return e || bt && bt.binding && bt.binding("util")
                    } catch (e) {}
                }()
                  , wt = xt && xt.isArrayBuffer
                  , At = xt && xt.isDate
                  , Tt = xt && xt.isMap
                  , _t = xt && xt.isRegExp
                  , St = xt && xt.isSet
                  , Et = xt && xt.isTypedArray;
                function Nt(e, t, n) {
                    switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                    }
                    return e.apply(t, n)
                }
                function kt(e, t, n, r) {
                    for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
                        var a = e[i];
                        t(r, a, n(a), e)
                    }
                    return r
                }
                function Lt(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); )
                        ;
                    return e
                }
                function Ct(e, t) {
                    for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); )
                        ;
                    return e
                }
                function Ot(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                        if (!t(e[n], n, e))
                            return !1;
                    return !0
                }
                function Pt(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r; ) {
                        var a = e[n];
                        t(a, n, e) && (o[i++] = a)
                    }
                    return o
                }
                function jt(e, t) {
                    return !!(null == e ? 0 : e.length) && Ut(e, t, 0) > -1
                }
                function Rt(e, t, n) {
                    for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                        if (n(t, e[r]))
                            return !0;
                    return !1
                }
                function It(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
                        i[n] = t(e[n], n, e);
                    return i
                }
                function Mt(e, t) {
                    for (var n = -1, r = t.length, i = e.length; ++n < r; )
                        e[i + n] = t[n];
                    return e
                }
                function Dt(e, t, n, r) {
                    var i = -1
                      , o = null == e ? 0 : e.length;
                    for (r && o && (n = e[++i]); ++i < o; )
                        n = t(n, e[i], i, e);
                    return n
                }
                function Bt(e, t, n, r) {
                    var i = null == e ? 0 : e.length;
                    for (r && i && (n = e[--i]); i--; )
                        n = t(n, e[i], i, e);
                    return n
                }
                function qt(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                        if (t(e[n], n, e))
                            return !0;
                    return !1
                }
                var Ft = Vt("length");
                function Ht(e, t, n) {
                    var r;
                    return n(e, (function(e, n, i) {
                        if (t(e, n, i))
                            return r = n,
                            !1
                    }
                    )),
                    r
                }
                function Wt(e, t, n, r) {
                    for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
                        if (t(e[o], o, e))
                            return o;
                    return -1
                }
                function Ut(e, t, n) {
                    return t == t ? function(e, t, n) {
                        var r = n - 1
                          , i = e.length;
                        for (; ++r < i; )
                            if (e[r] === t)
                                return r;
                        return -1
                    }(e, t, n) : Wt(e, $t, n)
                }
                function zt(e, t, n, r) {
                    for (var i = n - 1, o = e.length; ++i < o; )
                        if (r(e[i], t))
                            return i;
                    return -1
                }
                function $t(e) {
                    return e != e
                }
                function Kt(e, t) {
                    var n = null == e ? 0 : e.length;
                    return n ? Jt(e, t) / n : g
                }
                function Vt(e) {
                    return function(t) {
                        return null == t ? i : t[e]
                    }
                }
                function Gt(e) {
                    return function(t) {
                        return null == e ? i : e[t]
                    }
                }
                function Yt(e, t, n, r, i) {
                    return i(e, (function(e, i, o) {
                        n = r ? (r = !1,
                        e) : t(n, e, i, o)
                    }
                    )),
                    n
                }
                function Jt(e, t) {
                    for (var n, r = -1, o = e.length; ++r < o; ) {
                        var a = t(e[r]);
                        a !== i && (n = n === i ? a : n + a)
                    }
                    return n
                }
                function Xt(e, t) {
                    for (var n = -1, r = Array(e); ++n < e; )
                        r[n] = t(n);
                    return r
                }
                function Zt(e) {
                    return e ? e.slice(0, mn(e) + 1).replace(ae, "") : e
                }
                function Qt(e) {
                    return function(t) {
                        return e(t)
                    }
                }
                function en(e, t) {
                    return It(t, (function(t) {
                        return e[t]
                    }
                    ))
                }
                function tn(e, t) {
                    return e.has(t)
                }
                function nn(e, t) {
                    for (var n = -1, r = e.length; ++n < r && Ut(t, e[n], 0) > -1; )
                        ;
                    return n
                }
                function rn(e, t) {
                    for (var n = e.length; n-- && Ut(t, e[n], 0) > -1; )
                        ;
                    return n
                }
                var on = Gt({
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    Ç: "C",
                    ç: "c",
                    Ð: "D",
                    ð: "d",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    Ñ: "N",
                    ñ: "n",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    Ý: "Y",
                    ý: "y",
                    ÿ: "y",
                    Æ: "Ae",
                    æ: "ae",
                    Þ: "Th",
                    þ: "th",
                    ß: "ss",
                    Ā: "A",
                    Ă: "A",
                    Ą: "A",
                    ā: "a",
                    ă: "a",
                    ą: "a",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    Ď: "D",
                    Đ: "D",
                    ď: "d",
                    đ: "d",
                    Ē: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ę: "E",
                    Ě: "E",
                    ē: "e",
                    ĕ: "e",
                    ė: "e",
                    ę: "e",
                    ě: "e",
                    Ĝ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ģ: "G",
                    ĝ: "g",
                    ğ: "g",
                    ġ: "g",
                    ģ: "g",
                    Ĥ: "H",
                    Ħ: "H",
                    ĥ: "h",
                    ħ: "h",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    Į: "I",
                    İ: "I",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    į: "i",
                    ı: "i",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    ĸ: "k",
                    Ĺ: "L",
                    Ļ: "L",
                    Ľ: "L",
                    Ŀ: "L",
                    Ł: "L",
                    ĺ: "l",
                    ļ: "l",
                    ľ: "l",
                    ŀ: "l",
                    ł: "l",
                    Ń: "N",
                    Ņ: "N",
                    Ň: "N",
                    Ŋ: "N",
                    ń: "n",
                    ņ: "n",
                    ň: "n",
                    ŋ: "n",
                    Ō: "O",
                    Ŏ: "O",
                    Ő: "O",
                    ō: "o",
                    ŏ: "o",
                    ő: "o",
                    Ŕ: "R",
                    Ŗ: "R",
                    Ř: "R",
                    ŕ: "r",
                    ŗ: "r",
                    ř: "r",
                    Ś: "S",
                    Ŝ: "S",
                    Ş: "S",
                    Š: "S",
                    ś: "s",
                    ŝ: "s",
                    ş: "s",
                    š: "s",
                    Ţ: "T",
                    Ť: "T",
                    Ŧ: "T",
                    ţ: "t",
                    ť: "t",
                    ŧ: "t",
                    Ũ: "U",
                    Ū: "U",
                    Ŭ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ų: "U",
                    ũ: "u",
                    ū: "u",
                    ŭ: "u",
                    ů: "u",
                    ű: "u",
                    ų: "u",
                    Ŵ: "W",
                    ŵ: "w",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Ź: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    ź: "z",
                    ż: "z",
                    ž: "z",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Œ: "Oe",
                    œ: "oe",
                    ŉ: "'n",
                    ſ: "s"
                })
                  , an = Gt({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                });
                function sn(e) {
                    return "\\" + lt[e]
                }
                function un(e) {
                    return it.test(e)
                }
                function cn(e) {
                    var t = -1
                      , n = Array(e.size);
                    return e.forEach((function(e, r) {
                        n[++t] = [r, e]
                    }
                    )),
                    n
                }
                function ln(e, t) {
                    return function(n) {
                        return e(t(n))
                    }
                }
                function fn(e, t) {
                    for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                        var a = e[n];
                        a !== t && a !== s || (e[n] = s,
                        o[i++] = n)
                    }
                    return o
                }
                function pn(e) {
                    var t = -1
                      , n = Array(e.size);
                    return e.forEach((function(e) {
                        n[++t] = e
                    }
                    )),
                    n
                }
                function dn(e) {
                    var t = -1
                      , n = Array(e.size);
                    return e.forEach((function(e) {
                        n[++t] = [e, e]
                    }
                    )),
                    n
                }
                function hn(e) {
                    return un(e) ? function(e) {
                        var t = nt.lastIndex = 0;
                        for (; nt.test(e); )
                            ++t;
                        return t
                    }(e) : Ft(e)
                }
                function gn(e) {
                    return un(e) ? function(e) {
                        return e.match(nt) || []
                    }(e) : function(e) {
                        return e.split("")
                    }(e)
                }
                function mn(e) {
                    for (var t = e.length; t-- && se.test(e.charAt(t)); )
                        ;
                    return t
                }
                var vn = Gt({
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                });
                var yn = function e(t) {
                    var n, r = (t = null == t ? gt : yn.defaults(gt.Object(), t, yn.pick(gt, at))).Array, se = t.Date, _e = t.Error, Se = t.Function, Ee = t.Math, Ne = t.Object, ke = t.RegExp, Le = t.String, Ce = t.TypeError, Oe = r.prototype, Pe = Se.prototype, je = Ne.prototype, Re = t["__core-js_shared__"], Ie = Pe.toString, Me = je.hasOwnProperty, De = 0, Be = (n = /[^.]+$/.exec(Re && Re.keys && Re.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "", qe = je.toString, Fe = Ie.call(Ne), He = gt._, We = ke("^" + Ie.call(Me).replace(ie, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ue = yt ? t.Buffer : i, ze = t.Symbol, $e = t.Uint8Array, Ke = Ue ? Ue.allocUnsafe : i, Ve = ln(Ne.getPrototypeOf, Ne), Ge = Ne.create, Ye = je.propertyIsEnumerable, Je = Oe.splice, Xe = ze ? ze.isConcatSpreadable : i, Ze = ze ? ze.iterator : i, Qe = ze ? ze.toStringTag : i, nt = function() {
                        try {
                            var e = po(Ne, "defineProperty");
                            return e({}, "", {}),
                            e
                        } catch (e) {}
                    }(), it = t.clearTimeout !== gt.clearTimeout && t.clearTimeout, lt = se && se.now !== gt.Date.now && se.now, dt = t.setTimeout !== gt.setTimeout && t.setTimeout, ht = Ee.ceil, mt = Ee.floor, vt = Ne.getOwnPropertySymbols, bt = Ue ? Ue.isBuffer : i, xt = t.isFinite, Ft = Oe.join, Gt = ln(Ne.keys, Ne), bn = Ee.max, xn = Ee.min, wn = se.now, An = t.parseInt, Tn = Ee.random, _n = Oe.reverse, Sn = po(t, "DataView"), En = po(t, "Map"), Nn = po(t, "Promise"), kn = po(t, "Set"), Ln = po(t, "WeakMap"), Cn = po(Ne, "create"), On = Ln && new Ln, Pn = {}, jn = qo(Sn), Rn = qo(En), In = qo(Nn), Mn = qo(kn), Dn = qo(Ln), Bn = ze ? ze.prototype : i, qn = Bn ? Bn.valueOf : i, Fn = Bn ? Bn.toString : i;
                    function Hn(e) {
                        if (ns(e) && !$a(e) && !(e instanceof $n)) {
                            if (e instanceof zn)
                                return e;
                            if (Me.call(e, "__wrapped__"))
                                return Fo(e)
                        }
                        return new zn(e)
                    }
                    var Wn = function() {
                        function e() {}
                        return function(t) {
                            if (!ts(t))
                                return {};
                            if (Ge)
                                return Ge(t);
                            e.prototype = t;
                            var n = new e;
                            return e.prototype = i,
                            n
                        }
                    }();
                    function Un() {}
                    function zn(e, t) {
                        this.__wrapped__ = e,
                        this.__actions__ = [],
                        this.__chain__ = !!t,
                        this.__index__ = 0,
                        this.__values__ = i
                    }
                    function $n(e) {
                        this.__wrapped__ = e,
                        this.__actions__ = [],
                        this.__dir__ = 1,
                        this.__filtered__ = !1,
                        this.__iteratees__ = [],
                        this.__takeCount__ = m,
                        this.__views__ = []
                    }
                    function Kn(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function Vn(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function Gn(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function Yn(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.__data__ = new Gn; ++t < n; )
                            this.add(e[t])
                    }
                    function Jn(e) {
                        var t = this.__data__ = new Vn(e);
                        this.size = t.size
                    }
                    function Xn(e, t) {
                        var n = $a(e)
                          , r = !n && za(e)
                          , i = !n && !r && Ya(e)
                          , o = !n && !r && !i && ls(e)
                          , a = n || r || i || o
                          , s = a ? Xt(e.length, Le) : []
                          , u = s.length;
                        for (var c in e)
                            !t && !Me.call(e, c) || a && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || xo(c, u)) || s.push(c);
                        return s
                    }
                    function Zn(e) {
                        var t = e.length;
                        return t ? e[Yr(0, t - 1)] : i
                    }
                    function Qn(e, t) {
                        return Mo(Ci(e), ur(t, 0, e.length))
                    }
                    function er(e) {
                        return Mo(Ci(e))
                    }
                    function tr(e, t, n) {
                        (n !== i && !Ha(e[t], n) || n === i && !(t in e)) && ar(e, t, n)
                    }
                    function nr(e, t, n) {
                        var r = e[t];
                        Me.call(e, t) && Ha(r, n) && (n !== i || t in e) || ar(e, t, n)
                    }
                    function rr(e, t) {
                        for (var n = e.length; n--; )
                            if (Ha(e[n][0], t))
                                return n;
                        return -1
                    }
                    function ir(e, t, n, r) {
                        return dr(e, (function(e, i, o) {
                            t(r, e, n(e), o)
                        }
                        )),
                        r
                    }
                    function or(e, t) {
                        return e && Oi(t, Ps(t), e)
                    }
                    function ar(e, t, n) {
                        "__proto__" == t && nt ? nt(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: n,
                            writable: !0
                        }) : e[t] = n
                    }
                    function sr(e, t) {
                        for (var n = -1, o = t.length, a = r(o), s = null == e; ++n < o; )
                            a[n] = s ? i : Ns(e, t[n]);
                        return a
                    }
                    function ur(e, t, n) {
                        return e == e && (n !== i && (e = e <= n ? e : n),
                        t !== i && (e = e >= t ? e : t)),
                        e
                    }
                    function cr(e, t, n, r, o, a) {
                        var s, u = 1 & t, c = 2 & t, l = 4 & t;
                        if (n && (s = o ? n(e, r, o, a) : n(e)),
                        s !== i)
                            return s;
                        if (!ts(e))
                            return e;
                        var f = $a(e);
                        if (f) {
                            if (s = function(e) {
                                var t = e.length
                                  , n = new e.constructor(t);
                                t && "string" == typeof e[0] && Me.call(e, "index") && (n.index = e.index,
                                n.input = e.input);
                                return n
                            }(e),
                            !u)
                                return Ci(e, s)
                        } else {
                            var p = mo(e)
                              , d = p == T || p == _;
                            if (Ya(e))
                                return _i(e, u);
                            if (p == N || p == y || d && !o) {
                                if (s = c || d ? {} : yo(e),
                                !u)
                                    return c ? function(e, t) {
                                        return Oi(e, go(e), t)
                                    }(e, function(e, t) {
                                        return e && Oi(t, js(t), e)
                                    }(s, e)) : function(e, t) {
                                        return Oi(e, ho(e), t)
                                    }(e, or(s, e))
                            } else {
                                if (!ct[p])
                                    return o ? e : {};
                                s = function(e, t, n) {
                                    var r = e.constructor;
                                    switch (t) {
                                    case R:
                                        return Si(e);
                                    case x:
                                    case w:
                                        return new r(+e);
                                    case I:
                                        return function(e, t) {
                                            var n = t ? Si(e.buffer) : e.buffer;
                                            return new e.constructor(n,e.byteOffset,e.byteLength)
                                        }(e, n);
                                    case M:
                                    case D:
                                    case B:
                                    case q:
                                    case F:
                                    case H:
                                    case W:
                                    case U:
                                    case z:
                                        return Ei(e, n);
                                    case S:
                                        return new r;
                                    case E:
                                    case O:
                                        return new r(e);
                                    case L:
                                        return function(e) {
                                            var t = new e.constructor(e.source,ge.exec(e));
                                            return t.lastIndex = e.lastIndex,
                                            t
                                        }(e);
                                    case C:
                                        return new r;
                                    case P:
                                        return i = e,
                                        qn ? Ne(qn.call(i)) : {}
                                    }
                                    var i
                                }(e, p, u)
                            }
                        }
                        a || (a = new Jn);
                        var h = a.get(e);
                        if (h)
                            return h;
                        a.set(e, s),
                        ss(e) ? e.forEach((function(r) {
                            s.add(cr(r, t, n, r, e, a))
                        }
                        )) : rs(e) && e.forEach((function(r, i) {
                            s.set(i, cr(r, t, n, i, e, a))
                        }
                        ));
                        var g = f ? i : (l ? c ? oo : io : c ? js : Ps)(e);
                        return Lt(g || e, (function(r, i) {
                            g && (r = e[i = r]),
                            nr(s, i, cr(r, t, n, i, e, a))
                        }
                        )),
                        s
                    }
                    function lr(e, t, n) {
                        var r = n.length;
                        if (null == e)
                            return !r;
                        for (e = Ne(e); r--; ) {
                            var o = n[r]
                              , a = t[o]
                              , s = e[o];
                            if (s === i && !(o in e) || !a(s))
                                return !1
                        }
                        return !0
                    }
                    function fr(e, t, n) {
                        if ("function" != typeof e)
                            throw new Ce(o);
                        return Po((function() {
                            e.apply(i, n)
                        }
                        ), t)
                    }
                    function pr(e, t, n, r) {
                        var i = -1
                          , o = jt
                          , a = !0
                          , s = e.length
                          , u = []
                          , c = t.length;
                        if (!s)
                            return u;
                        n && (t = It(t, Qt(n))),
                        r ? (o = Rt,
                        a = !1) : t.length >= 200 && (o = tn,
                        a = !1,
                        t = new Yn(t));
                        e: for (; ++i < s; ) {
                            var l = e[i]
                              , f = null == n ? l : n(l);
                            if (l = r || 0 !== l ? l : 0,
                            a && f == f) {
                                for (var p = c; p--; )
                                    if (t[p] === f)
                                        continue e;
                                u.push(l)
                            } else
                                o(t, f, r) || u.push(l)
                        }
                        return u
                    }
                    Hn.templateSettings = {
                        escape: Z,
                        evaluate: Q,
                        interpolate: ee,
                        variable: "",
                        imports: {
                            _: Hn
                        }
                    },
                    Hn.prototype = Un.prototype,
                    Hn.prototype.constructor = Hn,
                    zn.prototype = Wn(Un.prototype),
                    zn.prototype.constructor = zn,
                    $n.prototype = Wn(Un.prototype),
                    $n.prototype.constructor = $n,
                    Kn.prototype.clear = function() {
                        this.__data__ = Cn ? Cn(null) : {},
                        this.size = 0
                    }
                    ,
                    Kn.prototype.delete = function(e) {
                        var t = this.has(e) && delete this.__data__[e];
                        return this.size -= t ? 1 : 0,
                        t
                    }
                    ,
                    Kn.prototype.get = function(e) {
                        var t = this.__data__;
                        if (Cn) {
                            var n = t[e];
                            return n === a ? i : n
                        }
                        return Me.call(t, e) ? t[e] : i
                    }
                    ,
                    Kn.prototype.has = function(e) {
                        var t = this.__data__;
                        return Cn ? t[e] !== i : Me.call(t, e)
                    }
                    ,
                    Kn.prototype.set = function(e, t) {
                        var n = this.__data__;
                        return this.size += this.has(e) ? 0 : 1,
                        n[e] = Cn && t === i ? a : t,
                        this
                    }
                    ,
                    Vn.prototype.clear = function() {
                        this.__data__ = [],
                        this.size = 0
                    }
                    ,
                    Vn.prototype.delete = function(e) {
                        var t = this.__data__
                          , n = rr(t, e);
                        return !(n < 0) && (n == t.length - 1 ? t.pop() : Je.call(t, n, 1),
                        --this.size,
                        !0)
                    }
                    ,
                    Vn.prototype.get = function(e) {
                        var t = this.__data__
                          , n = rr(t, e);
                        return n < 0 ? i : t[n][1]
                    }
                    ,
                    Vn.prototype.has = function(e) {
                        return rr(this.__data__, e) > -1
                    }
                    ,
                    Vn.prototype.set = function(e, t) {
                        var n = this.__data__
                          , r = rr(n, e);
                        return r < 0 ? (++this.size,
                        n.push([e, t])) : n[r][1] = t,
                        this
                    }
                    ,
                    Gn.prototype.clear = function() {
                        this.size = 0,
                        this.__data__ = {
                            hash: new Kn,
                            map: new (En || Vn),
                            string: new Kn
                        }
                    }
                    ,
                    Gn.prototype.delete = function(e) {
                        var t = lo(this, e).delete(e);
                        return this.size -= t ? 1 : 0,
                        t
                    }
                    ,
                    Gn.prototype.get = function(e) {
                        return lo(this, e).get(e)
                    }
                    ,
                    Gn.prototype.has = function(e) {
                        return lo(this, e).has(e)
                    }
                    ,
                    Gn.prototype.set = function(e, t) {
                        var n = lo(this, e)
                          , r = n.size;
                        return n.set(e, t),
                        this.size += n.size == r ? 0 : 1,
                        this
                    }
                    ,
                    Yn.prototype.add = Yn.prototype.push = function(e) {
                        return this.__data__.set(e, a),
                        this
                    }
                    ,
                    Yn.prototype.has = function(e) {
                        return this.__data__.has(e)
                    }
                    ,
                    Jn.prototype.clear = function() {
                        this.__data__ = new Vn,
                        this.size = 0
                    }
                    ,
                    Jn.prototype.delete = function(e) {
                        var t = this.__data__
                          , n = t.delete(e);
                        return this.size = t.size,
                        n
                    }
                    ,
                    Jn.prototype.get = function(e) {
                        return this.__data__.get(e)
                    }
                    ,
                    Jn.prototype.has = function(e) {
                        return this.__data__.has(e)
                    }
                    ,
                    Jn.prototype.set = function(e, t) {
                        var n = this.__data__;
                        if (n instanceof Vn) {
                            var r = n.__data__;
                            if (!En || r.length < 199)
                                return r.push([e, t]),
                                this.size = ++n.size,
                                this;
                            n = this.__data__ = new Gn(r)
                        }
                        return n.set(e, t),
                        this.size = n.size,
                        this
                    }
                    ;
                    var dr = Ri(wr)
                      , hr = Ri(Ar, !0);
                    function gr(e, t) {
                        var n = !0;
                        return dr(e, (function(e, r, i) {
                            return n = !!t(e, r, i)
                        }
                        )),
                        n
                    }
                    function mr(e, t, n) {
                        for (var r = -1, o = e.length; ++r < o; ) {
                            var a = e[r]
                              , s = t(a);
                            if (null != s && (u === i ? s == s && !cs(s) : n(s, u)))
                                var u = s
                                  , c = a
                        }
                        return c
                    }
                    function vr(e, t) {
                        var n = [];
                        return dr(e, (function(e, r, i) {
                            t(e, r, i) && n.push(e)
                        }
                        )),
                        n
                    }
                    function yr(e, t, n, r, i) {
                        var o = -1
                          , a = e.length;
                        for (n || (n = bo),
                        i || (i = []); ++o < a; ) {
                            var s = e[o];
                            t > 0 && n(s) ? t > 1 ? yr(s, t - 1, n, r, i) : Mt(i, s) : r || (i[i.length] = s)
                        }
                        return i
                    }
                    var br = Ii()
                      , xr = Ii(!0);
                    function wr(e, t) {
                        return e && br(e, t, Ps)
                    }
                    function Ar(e, t) {
                        return e && xr(e, t, Ps)
                    }
                    function Tr(e, t) {
                        return Pt(t, (function(t) {
                            return Za(e[t])
                        }
                        ))
                    }
                    function _r(e, t) {
                        for (var n = 0, r = (t = xi(t, e)).length; null != e && n < r; )
                            e = e[Bo(t[n++])];
                        return n && n == r ? e : i
                    }
                    function Sr(e, t, n) {
                        var r = t(e);
                        return $a(e) ? r : Mt(r, n(e))
                    }
                    function Er(e) {
                        return null == e ? e === i ? "[object Undefined]" : "[object Null]" : Qe && Qe in Ne(e) ? function(e) {
                            var t = Me.call(e, Qe)
                              , n = e[Qe];
                            try {
                                e[Qe] = i;
                                var r = !0
                            } catch (e) {}
                            var o = qe.call(e);
                            r && (t ? e[Qe] = n : delete e[Qe]);
                            return o
                        }(e) : function(e) {
                            return qe.call(e)
                        }(e)
                    }
                    function Nr(e, t) {
                        return e > t
                    }
                    function kr(e, t) {
                        return null != e && Me.call(e, t)
                    }
                    function Lr(e, t) {
                        return null != e && t in Ne(e)
                    }
                    function Cr(e, t, n) {
                        for (var o = n ? Rt : jt, a = e[0].length, s = e.length, u = s, c = r(s), l = 1 / 0, f = []; u--; ) {
                            var p = e[u];
                            u && t && (p = It(p, Qt(t))),
                            l = xn(p.length, l),
                            c[u] = !n && (t || a >= 120 && p.length >= 120) ? new Yn(u && p) : i
                        }
                        p = e[0];
                        var d = -1
                          , h = c[0];
                        e: for (; ++d < a && f.length < l; ) {
                            var g = p[d]
                              , m = t ? t(g) : g;
                            if (g = n || 0 !== g ? g : 0,
                            !(h ? tn(h, m) : o(f, m, n))) {
                                for (u = s; --u; ) {
                                    var v = c[u];
                                    if (!(v ? tn(v, m) : o(e[u], m, n)))
                                        continue e
                                }
                                h && h.push(m),
                                f.push(g)
                            }
                        }
                        return f
                    }
                    function Or(e, t, n) {
                        var r = null == (e = Lo(e, t = xi(t, e))) ? e : e[Bo(Xo(t))];
                        return null == r ? i : Nt(r, e, n)
                    }
                    function Pr(e) {
                        return ns(e) && Er(e) == y
                    }
                    function jr(e, t, n, r, o) {
                        return e === t || (null == e || null == t || !ns(e) && !ns(t) ? e != e && t != t : function(e, t, n, r, o, a) {
                            var s = $a(e)
                              , u = $a(t)
                              , c = s ? b : mo(e)
                              , l = u ? b : mo(t)
                              , f = (c = c == y ? N : c) == N
                              , p = (l = l == y ? N : l) == N
                              , d = c == l;
                            if (d && Ya(e)) {
                                if (!Ya(t))
                                    return !1;
                                s = !0,
                                f = !1
                            }
                            if (d && !f)
                                return a || (a = new Jn),
                                s || ls(e) ? no(e, t, n, r, o, a) : function(e, t, n, r, i, o, a) {
                                    switch (n) {
                                    case I:
                                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                            return !1;
                                        e = e.buffer,
                                        t = t.buffer;
                                    case R:
                                        return !(e.byteLength != t.byteLength || !o(new $e(e), new $e(t)));
                                    case x:
                                    case w:
                                    case E:
                                        return Ha(+e, +t);
                                    case A:
                                        return e.name == t.name && e.message == t.message;
                                    case L:
                                    case O:
                                        return e == t + "";
                                    case S:
                                        var s = cn;
                                    case C:
                                        var u = 1 & r;
                                        if (s || (s = pn),
                                        e.size != t.size && !u)
                                            return !1;
                                        var c = a.get(e);
                                        if (c)
                                            return c == t;
                                        r |= 2,
                                        a.set(e, t);
                                        var l = no(s(e), s(t), r, i, o, a);
                                        return a.delete(e),
                                        l;
                                    case P:
                                        if (qn)
                                            return qn.call(e) == qn.call(t)
                                    }
                                    return !1
                                }(e, t, c, n, r, o, a);
                            if (!(1 & n)) {
                                var h = f && Me.call(e, "__wrapped__")
                                  , g = p && Me.call(t, "__wrapped__");
                                if (h || g) {
                                    var m = h ? e.value() : e
                                      , v = g ? t.value() : t;
                                    return a || (a = new Jn),
                                    o(m, v, n, r, a)
                                }
                            }
                            if (!d)
                                return !1;
                            return a || (a = new Jn),
                            function(e, t, n, r, o, a) {
                                var s = 1 & n
                                  , u = io(e)
                                  , c = u.length
                                  , l = io(t)
                                  , f = l.length;
                                if (c != f && !s)
                                    return !1;
                                var p = c;
                                for (; p--; ) {
                                    var d = u[p];
                                    if (!(s ? d in t : Me.call(t, d)))
                                        return !1
                                }
                                var h = a.get(e)
                                  , g = a.get(t);
                                if (h && g)
                                    return h == t && g == e;
                                var m = !0;
                                a.set(e, t),
                                a.set(t, e);
                                var v = s;
                                for (; ++p < c; ) {
                                    var y = e[d = u[p]]
                                      , b = t[d];
                                    if (r)
                                        var x = s ? r(b, y, d, t, e, a) : r(y, b, d, e, t, a);
                                    if (!(x === i ? y === b || o(y, b, n, r, a) : x)) {
                                        m = !1;
                                        break
                                    }
                                    v || (v = "constructor" == d)
                                }
                                if (m && !v) {
                                    var w = e.constructor
                                      , A = t.constructor;
                                    w == A || !("constructor"in e) || !("constructor"in t) || "function" == typeof w && w instanceof w && "function" == typeof A && A instanceof A || (m = !1)
                                }
                                return a.delete(e),
                                a.delete(t),
                                m
                            }(e, t, n, r, o, a)
                        }(e, t, n, r, jr, o))
                    }
                    function Rr(e, t, n, r) {
                        var o = n.length
                          , a = o
                          , s = !r;
                        if (null == e)
                            return !a;
                        for (e = Ne(e); o--; ) {
                            var u = n[o];
                            if (s && u[2] ? u[1] !== e[u[0]] : !(u[0]in e))
                                return !1
                        }
                        for (; ++o < a; ) {
                            var c = (u = n[o])[0]
                              , l = e[c]
                              , f = u[1];
                            if (s && u[2]) {
                                if (l === i && !(c in e))
                                    return !1
                            } else {
                                var p = new Jn;
                                if (r)
                                    var d = r(l, f, c, e, t, p);
                                if (!(d === i ? jr(f, l, 3, r, p) : d))
                                    return !1
                            }
                        }
                        return !0
                    }
                    function Ir(e) {
                        return !(!ts(e) || (t = e,
                        Be && Be in t)) && (Za(e) ? We : ye).test(qo(e));
                        var t
                    }
                    function Mr(e) {
                        return "function" == typeof e ? e : null == e ? iu : "object" == typeof e ? $a(e) ? Wr(e[0], e[1]) : Hr(e) : du(e)
                    }
                    function Dr(e) {
                        if (!So(e))
                            return Gt(e);
                        var t = [];
                        for (var n in Ne(e))
                            Me.call(e, n) && "constructor" != n && t.push(n);
                        return t
                    }
                    function Br(e) {
                        if (!ts(e))
                            return function(e) {
                                var t = [];
                                if (null != e)
                                    for (var n in Ne(e))
                                        t.push(n);
                                return t
                            }(e);
                        var t = So(e)
                          , n = [];
                        for (var r in e)
                            ("constructor" != r || !t && Me.call(e, r)) && n.push(r);
                        return n
                    }
                    function qr(e, t) {
                        return e < t
                    }
                    function Fr(e, t) {
                        var n = -1
                          , i = Va(e) ? r(e.length) : [];
                        return dr(e, (function(e, r, o) {
                            i[++n] = t(e, r, o)
                        }
                        )),
                        i
                    }
                    function Hr(e) {
                        var t = fo(e);
                        return 1 == t.length && t[0][2] ? No(t[0][0], t[0][1]) : function(n) {
                            return n === e || Rr(n, e, t)
                        }
                    }
                    function Wr(e, t) {
                        return Ao(e) && Eo(t) ? No(Bo(e), t) : function(n) {
                            var r = Ns(n, e);
                            return r === i && r === t ? ks(n, e) : jr(t, r, 3)
                        }
                    }
                    function Ur(e, t, n, r, o) {
                        e !== t && br(t, (function(a, s) {
                            if (o || (o = new Jn),
                            ts(a))
                                !function(e, t, n, r, o, a, s) {
                                    var u = Co(e, n)
                                      , c = Co(t, n)
                                      , l = s.get(c);
                                    if (l)
                                        return void tr(e, n, l);
                                    var f = a ? a(u, c, n + "", e, t, s) : i
                                      , p = f === i;
                                    if (p) {
                                        var d = $a(c)
                                          , h = !d && Ya(c)
                                          , g = !d && !h && ls(c);
                                        f = c,
                                        d || h || g ? $a(u) ? f = u : Ga(u) ? f = Ci(u) : h ? (p = !1,
                                        f = _i(c, !0)) : g ? (p = !1,
                                        f = Ei(c, !0)) : f = [] : os(c) || za(c) ? (f = u,
                                        za(u) ? f = ys(u) : ts(u) && !Za(u) || (f = yo(c))) : p = !1
                                    }
                                    p && (s.set(c, f),
                                    o(f, c, r, a, s),
                                    s.delete(c));
                                    tr(e, n, f)
                                }(e, t, s, n, Ur, r, o);
                            else {
                                var u = r ? r(Co(e, s), a, s + "", e, t, o) : i;
                                u === i && (u = a),
                                tr(e, s, u)
                            }
                        }
                        ), js)
                    }
                    function zr(e, t) {
                        var n = e.length;
                        if (n)
                            return xo(t += t < 0 ? n : 0, n) ? e[t] : i
                    }
                    function $r(e, t, n) {
                        t = t.length ? It(t, (function(e) {
                            return $a(e) ? function(t) {
                                return _r(t, 1 === e.length ? e[0] : e)
                            }
                            : e
                        }
                        )) : [iu];
                        var r = -1;
                        t = It(t, Qt(co()));
                        var i = Fr(e, (function(e, n, i) {
                            var o = It(t, (function(t) {
                                return t(e)
                            }
                            ));
                            return {
                                criteria: o,
                                index: ++r,
                                value: e
                            }
                        }
                        ));
                        return function(e, t) {
                            var n = e.length;
                            for (e.sort(t); n--; )
                                e[n] = e[n].value;
                            return e
                        }(i, (function(e, t) {
                            return function(e, t, n) {
                                var r = -1
                                  , i = e.criteria
                                  , o = t.criteria
                                  , a = i.length
                                  , s = n.length;
                                for (; ++r < a; ) {
                                    var u = Ni(i[r], o[r]);
                                    if (u)
                                        return r >= s ? u : u * ("desc" == n[r] ? -1 : 1)
                                }
                                return e.index - t.index
                            }(e, t, n)
                        }
                        ))
                    }
                    function Kr(e, t, n) {
                        for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                            var a = t[r]
                              , s = _r(e, a);
                            n(s, a) && ei(o, xi(a, e), s)
                        }
                        return o
                    }
                    function Vr(e, t, n, r) {
                        var i = r ? zt : Ut
                          , o = -1
                          , a = t.length
                          , s = e;
                        for (e === t && (t = Ci(t)),
                        n && (s = It(e, Qt(n))); ++o < a; )
                            for (var u = 0, c = t[o], l = n ? n(c) : c; (u = i(s, l, u, r)) > -1; )
                                s !== e && Je.call(s, u, 1),
                                Je.call(e, u, 1);
                        return e
                    }
                    function Gr(e, t) {
                        for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                            var i = t[n];
                            if (n == r || i !== o) {
                                var o = i;
                                xo(i) ? Je.call(e, i, 1) : pi(e, i)
                            }
                        }
                        return e
                    }
                    function Yr(e, t) {
                        return e + mt(Tn() * (t - e + 1))
                    }
                    function Jr(e, t) {
                        var n = "";
                        if (!e || t < 1 || t > h)
                            return n;
                        do {
                            t % 2 && (n += e),
                            (t = mt(t / 2)) && (e += e)
                        } while (t);
                        return n
                    }
                    function Xr(e, t) {
                        return jo(ko(e, t, iu), e + "")
                    }
                    function Zr(e) {
                        return Zn(Hs(e))
                    }
                    function Qr(e, t) {
                        var n = Hs(e);
                        return Mo(n, ur(t, 0, n.length))
                    }
                    function ei(e, t, n, r) {
                        if (!ts(e))
                            return e;
                        for (var o = -1, a = (t = xi(t, e)).length, s = a - 1, u = e; null != u && ++o < a; ) {
                            var c = Bo(t[o])
                              , l = n;
                            if ("__proto__" === c || "constructor" === c || "prototype" === c)
                                return e;
                            if (o != s) {
                                var f = u[c];
                                (l = r ? r(f, c, u) : i) === i && (l = ts(f) ? f : xo(t[o + 1]) ? [] : {})
                            }
                            nr(u, c, l),
                            u = u[c]
                        }
                        return e
                    }
                    var ti = On ? function(e, t) {
                        return On.set(e, t),
                        e
                    }
                    : iu
                      , ni = nt ? function(e, t) {
                        return nt(e, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: tu(t),
                            writable: !0
                        })
                    }
                    : iu;
                    function ri(e) {
                        return Mo(Hs(e))
                    }
                    function ii(e, t, n) {
                        var i = -1
                          , o = e.length;
                        t < 0 && (t = -t > o ? 0 : o + t),
                        (n = n > o ? o : n) < 0 && (n += o),
                        o = t > n ? 0 : n - t >>> 0,
                        t >>>= 0;
                        for (var a = r(o); ++i < o; )
                            a[i] = e[i + t];
                        return a
                    }
                    function oi(e, t) {
                        var n;
                        return dr(e, (function(e, r, i) {
                            return !(n = t(e, r, i))
                        }
                        )),
                        !!n
                    }
                    function ai(e, t, n) {
                        var r = 0
                          , i = null == e ? r : e.length;
                        if ("number" == typeof t && t == t && i <= 2147483647) {
                            for (; r < i; ) {
                                var o = r + i >>> 1
                                  , a = e[o];
                                null !== a && !cs(a) && (n ? a <= t : a < t) ? r = o + 1 : i = o
                            }
                            return i
                        }
                        return si(e, t, iu, n)
                    }
                    function si(e, t, n, r) {
                        var o = 0
                          , a = null == e ? 0 : e.length;
                        if (0 === a)
                            return 0;
                        for (var s = (t = n(t)) != t, u = null === t, c = cs(t), l = t === i; o < a; ) {
                            var f = mt((o + a) / 2)
                              , p = n(e[f])
                              , d = p !== i
                              , h = null === p
                              , g = p == p
                              , m = cs(p);
                            if (s)
                                var v = r || g;
                            else
                                v = l ? g && (r || d) : u ? g && d && (r || !h) : c ? g && d && !h && (r || !m) : !h && !m && (r ? p <= t : p < t);
                            v ? o = f + 1 : a = f
                        }
                        return xn(a, 4294967294)
                    }
                    function ui(e, t) {
                        for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                            var a = e[n]
                              , s = t ? t(a) : a;
                            if (!n || !Ha(s, u)) {
                                var u = s;
                                o[i++] = 0 === a ? 0 : a
                            }
                        }
                        return o
                    }
                    function ci(e) {
                        return "number" == typeof e ? e : cs(e) ? g : +e
                    }
                    function li(e) {
                        if ("string" == typeof e)
                            return e;
                        if ($a(e))
                            return It(e, li) + "";
                        if (cs(e))
                            return Fn ? Fn.call(e) : "";
                        var t = e + "";
                        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                    }
                    function fi(e, t, n) {
                        var r = -1
                          , i = jt
                          , o = e.length
                          , a = !0
                          , s = []
                          , u = s;
                        if (n)
                            a = !1,
                            i = Rt;
                        else if (o >= 200) {
                            var c = t ? null : Ji(e);
                            if (c)
                                return pn(c);
                            a = !1,
                            i = tn,
                            u = new Yn
                        } else
                            u = t ? [] : s;
                        e: for (; ++r < o; ) {
                            var l = e[r]
                              , f = t ? t(l) : l;
                            if (l = n || 0 !== l ? l : 0,
                            a && f == f) {
                                for (var p = u.length; p--; )
                                    if (u[p] === f)
                                        continue e;
                                t && u.push(f),
                                s.push(l)
                            } else
                                i(u, f, n) || (u !== s && u.push(f),
                                s.push(l))
                        }
                        return s
                    }
                    function pi(e, t) {
                        return null == (e = Lo(e, t = xi(t, e))) || delete e[Bo(Xo(t))]
                    }
                    function di(e, t, n, r) {
                        return ei(e, t, n(_r(e, t)), r)
                    }
                    function hi(e, t, n, r) {
                        for (var i = e.length, o = r ? i : -1; (r ? o-- : ++o < i) && t(e[o], o, e); )
                            ;
                        return n ? ii(e, r ? 0 : o, r ? o + 1 : i) : ii(e, r ? o + 1 : 0, r ? i : o)
                    }
                    function gi(e, t) {
                        var n = e;
                        return n instanceof $n && (n = n.value()),
                        Dt(t, (function(e, t) {
                            return t.func.apply(t.thisArg, Mt([e], t.args))
                        }
                        ), n)
                    }
                    function mi(e, t, n) {
                        var i = e.length;
                        if (i < 2)
                            return i ? fi(e[0]) : [];
                        for (var o = -1, a = r(i); ++o < i; )
                            for (var s = e[o], u = -1; ++u < i; )
                                u != o && (a[o] = pr(a[o] || s, e[u], t, n));
                        return fi(yr(a, 1), t, n)
                    }
                    function vi(e, t, n) {
                        for (var r = -1, o = e.length, a = t.length, s = {}; ++r < o; ) {
                            var u = r < a ? t[r] : i;
                            n(s, e[r], u)
                        }
                        return s
                    }
                    function yi(e) {
                        return Ga(e) ? e : []
                    }
                    function bi(e) {
                        return "function" == typeof e ? e : iu
                    }
                    function xi(e, t) {
                        return $a(e) ? e : Ao(e, t) ? [e] : Do(bs(e))
                    }
                    var wi = Xr;
                    function Ai(e, t, n) {
                        var r = e.length;
                        return n = n === i ? r : n,
                        !t && n >= r ? e : ii(e, t, n)
                    }
                    var Ti = it || function(e) {
                        return gt.clearTimeout(e)
                    }
                    ;
                    function _i(e, t) {
                        if (t)
                            return e.slice();
                        var n = e.length
                          , r = Ke ? Ke(n) : new e.constructor(n);
                        return e.copy(r),
                        r
                    }
                    function Si(e) {
                        var t = new e.constructor(e.byteLength);
                        return new $e(t).set(new $e(e)),
                        t
                    }
                    function Ei(e, t) {
                        var n = t ? Si(e.buffer) : e.buffer;
                        return new e.constructor(n,e.byteOffset,e.length)
                    }
                    function Ni(e, t) {
                        if (e !== t) {
                            var n = e !== i
                              , r = null === e
                              , o = e == e
                              , a = cs(e)
                              , s = t !== i
                              , u = null === t
                              , c = t == t
                              , l = cs(t);
                            if (!u && !l && !a && e > t || a && s && c && !u && !l || r && s && c || !n && c || !o)
                                return 1;
                            if (!r && !a && !l && e < t || l && n && o && !r && !a || u && n && o || !s && o || !c)
                                return -1
                        }
                        return 0
                    }
                    function ki(e, t, n, i) {
                        for (var o = -1, a = e.length, s = n.length, u = -1, c = t.length, l = bn(a - s, 0), f = r(c + l), p = !i; ++u < c; )
                            f[u] = t[u];
                        for (; ++o < s; )
                            (p || o < a) && (f[n[o]] = e[o]);
                        for (; l--; )
                            f[u++] = e[o++];
                        return f
                    }
                    function Li(e, t, n, i) {
                        for (var o = -1, a = e.length, s = -1, u = n.length, c = -1, l = t.length, f = bn(a - u, 0), p = r(f + l), d = !i; ++o < f; )
                            p[o] = e[o];
                        for (var h = o; ++c < l; )
                            p[h + c] = t[c];
                        for (; ++s < u; )
                            (d || o < a) && (p[h + n[s]] = e[o++]);
                        return p
                    }
                    function Ci(e, t) {
                        var n = -1
                          , i = e.length;
                        for (t || (t = r(i)); ++n < i; )
                            t[n] = e[n];
                        return t
                    }
                    function Oi(e, t, n, r) {
                        var o = !n;
                        n || (n = {});
                        for (var a = -1, s = t.length; ++a < s; ) {
                            var u = t[a]
                              , c = r ? r(n[u], e[u], u, n, e) : i;
                            c === i && (c = e[u]),
                            o ? ar(n, u, c) : nr(n, u, c)
                        }
                        return n
                    }
                    function Pi(e, t) {
                        return function(n, r) {
                            var i = $a(n) ? kt : ir
                              , o = t ? t() : {};
                            return i(n, e, co(r, 2), o)
                        }
                    }
                    function ji(e) {
                        return Xr((function(t, n) {
                            var r = -1
                              , o = n.length
                              , a = o > 1 ? n[o - 1] : i
                              , s = o > 2 ? n[2] : i;
                            for (a = e.length > 3 && "function" == typeof a ? (o--,
                            a) : i,
                            s && wo(n[0], n[1], s) && (a = o < 3 ? i : a,
                            o = 1),
                            t = Ne(t); ++r < o; ) {
                                var u = n[r];
                                u && e(t, u, r, a)
                            }
                            return t
                        }
                        ))
                    }
                    function Ri(e, t) {
                        return function(n, r) {
                            if (null == n)
                                return n;
                            if (!Va(n))
                                return e(n, r);
                            for (var i = n.length, o = t ? i : -1, a = Ne(n); (t ? o-- : ++o < i) && !1 !== r(a[o], o, a); )
                                ;
                            return n
                        }
                    }
                    function Ii(e) {
                        return function(t, n, r) {
                            for (var i = -1, o = Ne(t), a = r(t), s = a.length; s--; ) {
                                var u = a[e ? s : ++i];
                                if (!1 === n(o[u], u, o))
                                    break
                            }
                            return t
                        }
                    }
                    function Mi(e) {
                        return function(t) {
                            var n = un(t = bs(t)) ? gn(t) : i
                              , r = n ? n[0] : t.charAt(0)
                              , o = n ? Ai(n, 1).join("") : t.slice(1);
                            return r[e]() + o
                        }
                    }
                    function Di(e) {
                        return function(t) {
                            return Dt(Zs(zs(t).replace(et, "")), e, "")
                        }
                    }
                    function Bi(e) {
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0],t[1]);
                            case 3:
                                return new e(t[0],t[1],t[2]);
                            case 4:
                                return new e(t[0],t[1],t[2],t[3]);
                            case 5:
                                return new e(t[0],t[1],t[2],t[3],t[4]);
                            case 6:
                                return new e(t[0],t[1],t[2],t[3],t[4],t[5]);
                            case 7:
                                return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])
                            }
                            var n = Wn(e.prototype)
                              , r = e.apply(n, t);
                            return ts(r) ? r : n
                        }
                    }
                    function qi(e) {
                        return function(t, n, r) {
                            var o = Ne(t);
                            if (!Va(t)) {
                                var a = co(n, 3);
                                t = Ps(t),
                                n = function(e) {
                                    return a(o[e], e, o)
                                }
                            }
                            var s = e(t, n, r);
                            return s > -1 ? o[a ? t[s] : s] : i
                        }
                    }
                    function Fi(e) {
                        return ro((function(t) {
                            var n = t.length
                              , r = n
                              , a = zn.prototype.thru;
                            for (e && t.reverse(); r--; ) {
                                var s = t[r];
                                if ("function" != typeof s)
                                    throw new Ce(o);
                                if (a && !u && "wrapper" == so(s))
                                    var u = new zn([],!0)
                            }
                            for (r = u ? r : n; ++r < n; ) {
                                var c = so(s = t[r])
                                  , l = "wrapper" == c ? ao(s) : i;
                                u = l && To(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? u[so(l[0])].apply(u, l[3]) : 1 == s.length && To(s) ? u[c]() : u.thru(s)
                            }
                            return function() {
                                var e = arguments
                                  , r = e[0];
                                if (u && 1 == e.length && $a(r))
                                    return u.plant(r).value();
                                for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n; )
                                    o = t[i].call(this, o);
                                return o
                            }
                        }
                        ))
                    }
                    function Hi(e, t, n, o, a, s, u, c, l, p) {
                        var d = t & f
                          , h = 1 & t
                          , g = 2 & t
                          , m = 24 & t
                          , v = 512 & t
                          , y = g ? i : Bi(e);
                        return function f() {
                            for (var b = arguments.length, x = r(b), w = b; w--; )
                                x[w] = arguments[w];
                            if (m)
                                var A = uo(f)
                                  , T = function(e, t) {
                                    for (var n = e.length, r = 0; n--; )
                                        e[n] === t && ++r;
                                    return r
                                }(x, A);
                            if (o && (x = ki(x, o, a, m)),
                            s && (x = Li(x, s, u, m)),
                            b -= T,
                            m && b < p) {
                                var _ = fn(x, A);
                                return Gi(e, t, Hi, f.placeholder, n, x, _, c, l, p - b)
                            }
                            var S = h ? n : this
                              , E = g ? S[e] : e;
                            return b = x.length,
                            c ? x = function(e, t) {
                                var n = e.length
                                  , r = xn(t.length, n)
                                  , o = Ci(e);
                                for (; r--; ) {
                                    var a = t[r];
                                    e[r] = xo(a, n) ? o[a] : i
                                }
                                return e
                            }(x, c) : v && b > 1 && x.reverse(),
                            d && l < b && (x.length = l),
                            this && this !== gt && this instanceof f && (E = y || Bi(E)),
                            E.apply(S, x)
                        }
                    }
                    function Wi(e, t) {
                        return function(n, r) {
                            return function(e, t, n, r) {
                                return wr(e, (function(e, i, o) {
                                    t(r, n(e), i, o)
                                }
                                )),
                                r
                            }(n, e, t(r), {})
                        }
                    }
                    function Ui(e, t) {
                        return function(n, r) {
                            var o;
                            if (n === i && r === i)
                                return t;
                            if (n !== i && (o = n),
                            r !== i) {
                                if (o === i)
                                    return r;
                                "string" == typeof n || "string" == typeof r ? (n = li(n),
                                r = li(r)) : (n = ci(n),
                                r = ci(r)),
                                o = e(n, r)
                            }
                            return o
                        }
                    }
                    function zi(e) {
                        return ro((function(t) {
                            return t = It(t, Qt(co())),
                            Xr((function(n) {
                                var r = this;
                                return e(t, (function(e) {
                                    return Nt(e, r, n)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    function $i(e, t) {
                        var n = (t = t === i ? " " : li(t)).length;
                        if (n < 2)
                            return n ? Jr(t, e) : t;
                        var r = Jr(t, ht(e / hn(t)));
                        return un(t) ? Ai(gn(r), 0, e).join("") : r.slice(0, e)
                    }
                    function Ki(e) {
                        return function(t, n, o) {
                            return o && "number" != typeof o && wo(t, n, o) && (n = o = i),
                            t = hs(t),
                            n === i ? (n = t,
                            t = 0) : n = hs(n),
                            function(e, t, n, i) {
                                for (var o = -1, a = bn(ht((t - e) / (n || 1)), 0), s = r(a); a--; )
                                    s[i ? a : ++o] = e,
                                    e += n;
                                return s
                            }(t, n, o = o === i ? t < n ? 1 : -1 : hs(o), e)
                        }
                    }
                    function Vi(e) {
                        return function(t, n) {
                            return "string" == typeof t && "string" == typeof n || (t = vs(t),
                            n = vs(n)),
                            e(t, n)
                        }
                    }
                    function Gi(e, t, n, r, o, a, s, u, f, p) {
                        var d = 8 & t;
                        t |= d ? c : l,
                        4 & (t &= ~(d ? l : c)) || (t &= -4);
                        var h = [e, t, o, d ? a : i, d ? s : i, d ? i : a, d ? i : s, u, f, p]
                          , g = n.apply(i, h);
                        return To(e) && Oo(g, h),
                        g.placeholder = r,
                        Ro(g, e, t)
                    }
                    function Yi(e) {
                        var t = Ee[e];
                        return function(e, n) {
                            if (e = vs(e),
                            (n = null == n ? 0 : xn(gs(n), 292)) && xt(e)) {
                                var r = (bs(e) + "e").split("e");
                                return +((r = (bs(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
                            }
                            return t(e)
                        }
                    }
                    var Ji = kn && 1 / pn(new kn([, -0]))[1] == d ? function(e) {
                        return new kn(e)
                    }
                    : cu;
                    function Xi(e) {
                        return function(t) {
                            var n = mo(t);
                            return n == S ? cn(t) : n == C ? dn(t) : function(e, t) {
                                return It(t, (function(t) {
                                    return [t, e[t]]
                                }
                                ))
                            }(t, e(t))
                        }
                    }
                    function Zi(e, t, n, a, d, h, g, m) {
                        var v = 2 & t;
                        if (!v && "function" != typeof e)
                            throw new Ce(o);
                        var y = a ? a.length : 0;
                        if (y || (t &= -97,
                        a = d = i),
                        g = g === i ? g : bn(gs(g), 0),
                        m = m === i ? m : gs(m),
                        y -= d ? d.length : 0,
                        t & l) {
                            var b = a
                              , x = d;
                            a = d = i
                        }
                        var w = v ? i : ao(e)
                          , A = [e, t, n, a, d, b, x, h, g, m];
                        if (w && function(e, t) {
                            var n = e[1]
                              , r = t[1]
                              , i = n | r
                              , o = i < 131
                              , a = r == f && 8 == n || r == f && n == p && e[7].length <= t[8] || 384 == r && t[7].length <= t[8] && 8 == n;
                            if (!o && !a)
                                return e;
                            1 & r && (e[2] = t[2],
                            i |= 1 & n ? 0 : 4);
                            var u = t[3];
                            if (u) {
                                var c = e[3];
                                e[3] = c ? ki(c, u, t[4]) : u,
                                e[4] = c ? fn(e[3], s) : t[4]
                            }
                            (u = t[5]) && (c = e[5],
                            e[5] = c ? Li(c, u, t[6]) : u,
                            e[6] = c ? fn(e[5], s) : t[6]);
                            (u = t[7]) && (e[7] = u);
                            r & f && (e[8] = null == e[8] ? t[8] : xn(e[8], t[8]));
                            null == e[9] && (e[9] = t[9]);
                            e[0] = t[0],
                            e[1] = i
                        }(A, w),
                        e = A[0],
                        t = A[1],
                        n = A[2],
                        a = A[3],
                        d = A[4],
                        !(m = A[9] = A[9] === i ? v ? 0 : e.length : bn(A[9] - y, 0)) && 24 & t && (t &= -25),
                        t && 1 != t)
                            T = 8 == t || t == u ? function(e, t, n) {
                                var o = Bi(e);
                                return function a() {
                                    for (var s = arguments.length, u = r(s), c = s, l = uo(a); c--; )
                                        u[c] = arguments[c];
                                    var f = s < 3 && u[0] !== l && u[s - 1] !== l ? [] : fn(u, l);
                                    return (s -= f.length) < n ? Gi(e, t, Hi, a.placeholder, i, u, f, i, i, n - s) : Nt(this && this !== gt && this instanceof a ? o : e, this, u)
                                }
                            }(e, t, m) : t != c && 33 != t || d.length ? Hi.apply(i, A) : function(e, t, n, i) {
                                var o = 1 & t
                                  , a = Bi(e);
                                return function t() {
                                    for (var s = -1, u = arguments.length, c = -1, l = i.length, f = r(l + u), p = this && this !== gt && this instanceof t ? a : e; ++c < l; )
                                        f[c] = i[c];
                                    for (; u--; )
                                        f[c++] = arguments[++s];
                                    return Nt(p, o ? n : this, f)
                                }
                            }(e, t, n, a);
                        else
                            var T = function(e, t, n) {
                                var r = 1 & t
                                  , i = Bi(e);
                                return function t() {
                                    return (this && this !== gt && this instanceof t ? i : e).apply(r ? n : this, arguments)
                                }
                            }(e, t, n);
                        return Ro((w ? ti : Oo)(T, A), e, t)
                    }
                    function Qi(e, t, n, r) {
                        return e === i || Ha(e, je[n]) && !Me.call(r, n) ? t : e
                    }
                    function eo(e, t, n, r, o, a) {
                        return ts(e) && ts(t) && (a.set(t, e),
                        Ur(e, t, i, eo, a),
                        a.delete(t)),
                        e
                    }
                    function to(e) {
                        return os(e) ? i : e
                    }
                    function no(e, t, n, r, o, a) {
                        var s = 1 & n
                          , u = e.length
                          , c = t.length;
                        if (u != c && !(s && c > u))
                            return !1;
                        var l = a.get(e)
                          , f = a.get(t);
                        if (l && f)
                            return l == t && f == e;
                        var p = -1
                          , d = !0
                          , h = 2 & n ? new Yn : i;
                        for (a.set(e, t),
                        a.set(t, e); ++p < u; ) {
                            var g = e[p]
                              , m = t[p];
                            if (r)
                                var v = s ? r(m, g, p, t, e, a) : r(g, m, p, e, t, a);
                            if (v !== i) {
                                if (v)
                                    continue;
                                d = !1;
                                break
                            }
                            if (h) {
                                if (!qt(t, (function(e, t) {
                                    if (!tn(h, t) && (g === e || o(g, e, n, r, a)))
                                        return h.push(t)
                                }
                                ))) {
                                    d = !1;
                                    break
                                }
                            } else if (g !== m && !o(g, m, n, r, a)) {
                                d = !1;
                                break
                            }
                        }
                        return a.delete(e),
                        a.delete(t),
                        d
                    }
                    function ro(e) {
                        return jo(ko(e, i, Ko), e + "")
                    }
                    function io(e) {
                        return Sr(e, Ps, ho)
                    }
                    function oo(e) {
                        return Sr(e, js, go)
                    }
                    var ao = On ? function(e) {
                        return On.get(e)
                    }
                    : cu;
                    function so(e) {
                        for (var t = e.name + "", n = Pn[t], r = Me.call(Pn, t) ? n.length : 0; r--; ) {
                            var i = n[r]
                              , o = i.func;
                            if (null == o || o == e)
                                return i.name
                        }
                        return t
                    }
                    function uo(e) {
                        return (Me.call(Hn, "placeholder") ? Hn : e).placeholder
                    }
                    function co() {
                        var e = Hn.iteratee || ou;
                        return e = e === ou ? Mr : e,
                        arguments.length ? e(arguments[0], arguments[1]) : e
                    }
                    function lo(e, t) {
                        var n, r, i = e.__data__;
                        return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map
                    }
                    function fo(e) {
                        for (var t = Ps(e), n = t.length; n--; ) {
                            var r = t[n]
                              , i = e[r];
                            t[n] = [r, i, Eo(i)]
                        }
                        return t
                    }
                    function po(e, t) {
                        var n = function(e, t) {
                            return null == e ? i : e[t]
                        }(e, t);
                        return Ir(n) ? n : i
                    }
                    var ho = vt ? function(e) {
                        return null == e ? [] : (e = Ne(e),
                        Pt(vt(e), (function(t) {
                            return Ye.call(e, t)
                        }
                        )))
                    }
                    : mu
                      , go = vt ? function(e) {
                        for (var t = []; e; )
                            Mt(t, ho(e)),
                            e = Ve(e);
                        return t
                    }
                    : mu
                      , mo = Er;
                    function vo(e, t, n) {
                        for (var r = -1, i = (t = xi(t, e)).length, o = !1; ++r < i; ) {
                            var a = Bo(t[r]);
                            if (!(o = null != e && n(e, a)))
                                break;
                            e = e[a]
                        }
                        return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && es(i) && xo(a, i) && ($a(e) || za(e))
                    }
                    function yo(e) {
                        return "function" != typeof e.constructor || So(e) ? {} : Wn(Ve(e))
                    }
                    function bo(e) {
                        return $a(e) || za(e) || !!(Xe && e && e[Xe])
                    }
                    function xo(e, t) {
                        var n = typeof e;
                        return !!(t = null == t ? h : t) && ("number" == n || "symbol" != n && xe.test(e)) && e > -1 && e % 1 == 0 && e < t
                    }
                    function wo(e, t, n) {
                        if (!ts(n))
                            return !1;
                        var r = typeof t;
                        return !!("number" == r ? Va(n) && xo(t, n.length) : "string" == r && t in n) && Ha(n[t], e)
                    }
                    function Ao(e, t) {
                        if ($a(e))
                            return !1;
                        var n = typeof e;
                        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !cs(e)) || (ne.test(e) || !te.test(e) || null != t && e in Ne(t))
                    }
                    function To(e) {
                        var t = so(e)
                          , n = Hn[t];
                        if ("function" != typeof n || !(t in $n.prototype))
                            return !1;
                        if (e === n)
                            return !0;
                        var r = ao(n);
                        return !!r && e === r[0]
                    }
                    (Sn && mo(new Sn(new ArrayBuffer(1))) != I || En && mo(new En) != S || Nn && mo(Nn.resolve()) != k || kn && mo(new kn) != C || Ln && mo(new Ln) != j) && (mo = function(e) {
                        var t = Er(e)
                          , n = t == N ? e.constructor : i
                          , r = n ? qo(n) : "";
                        if (r)
                            switch (r) {
                            case jn:
                                return I;
                            case Rn:
                                return S;
                            case In:
                                return k;
                            case Mn:
                                return C;
                            case Dn:
                                return j
                            }
                        return t
                    }
                    );
                    var _o = Re ? Za : vu;
                    function So(e) {
                        var t = e && e.constructor;
                        return e === ("function" == typeof t && t.prototype || je)
                    }
                    function Eo(e) {
                        return e == e && !ts(e)
                    }
                    function No(e, t) {
                        return function(n) {
                            return null != n && (n[e] === t && (t !== i || e in Ne(n)))
                        }
                    }
                    function ko(e, t, n) {
                        return t = bn(t === i ? e.length - 1 : t, 0),
                        function() {
                            for (var i = arguments, o = -1, a = bn(i.length - t, 0), s = r(a); ++o < a; )
                                s[o] = i[t + o];
                            o = -1;
                            for (var u = r(t + 1); ++o < t; )
                                u[o] = i[o];
                            return u[t] = n(s),
                            Nt(e, this, u)
                        }
                    }
                    function Lo(e, t) {
                        return t.length < 2 ? e : _r(e, ii(t, 0, -1))
                    }
                    function Co(e, t) {
                        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t)
                            return e[t]
                    }
                    var Oo = Io(ti)
                      , Po = dt || function(e, t) {
                        return gt.setTimeout(e, t)
                    }
                      , jo = Io(ni);
                    function Ro(e, t, n) {
                        var r = t + "";
                        return jo(e, function(e, t) {
                            var n = t.length;
                            if (!n)
                                return e;
                            var r = n - 1;
                            return t[r] = (n > 1 ? "& " : "") + t[r],
                            t = t.join(n > 2 ? ", " : " "),
                            e.replace(ue, "{\n/* [wrapped with " + t + "] */\n")
                        }(r, function(e, t) {
                            return Lt(v, (function(n) {
                                var r = "_." + n[0];
                                t & n[1] && !jt(e, r) && e.push(r)
                            }
                            )),
                            e.sort()
                        }(function(e) {
                            var t = e.match(ce);
                            return t ? t[1].split(le) : []
                        }(r), n)))
                    }
                    function Io(e) {
                        var t = 0
                          , n = 0;
                        return function() {
                            var r = wn()
                              , o = 16 - (r - n);
                            if (n = r,
                            o > 0) {
                                if (++t >= 800)
                                    return arguments[0]
                            } else
                                t = 0;
                            return e.apply(i, arguments)
                        }
                    }
                    function Mo(e, t) {
                        var n = -1
                          , r = e.length
                          , o = r - 1;
                        for (t = t === i ? r : t; ++n < t; ) {
                            var a = Yr(n, o)
                              , s = e[a];
                            e[a] = e[n],
                            e[n] = s
                        }
                        return e.length = t,
                        e
                    }
                    var Do = function(e) {
                        var t = Ia(e, (function(e) {
                            return 500 === n.size && n.clear(),
                            e
                        }
                        ))
                          , n = t.cache;
                        return t
                    }((function(e) {
                        var t = [];
                        return 46 === e.charCodeAt(0) && t.push(""),
                        e.replace(re, (function(e, n, r, i) {
                            t.push(r ? i.replace(de, "$1") : n || e)
                        }
                        )),
                        t
                    }
                    ));
                    function Bo(e) {
                        if ("string" == typeof e || cs(e))
                            return e;
                        var t = e + "";
                        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                    }
                    function qo(e) {
                        if (null != e) {
                            try {
                                return Ie.call(e)
                            } catch (e) {}
                            try {
                                return e + ""
                            } catch (e) {}
                        }
                        return ""
                    }
                    function Fo(e) {
                        if (e instanceof $n)
                            return e.clone();
                        var t = new zn(e.__wrapped__,e.__chain__);
                        return t.__actions__ = Ci(e.__actions__),
                        t.__index__ = e.__index__,
                        t.__values__ = e.__values__,
                        t
                    }
                    var Ho = Xr((function(e, t) {
                        return Ga(e) ? pr(e, yr(t, 1, Ga, !0)) : []
                    }
                    ))
                      , Wo = Xr((function(e, t) {
                        var n = Xo(t);
                        return Ga(n) && (n = i),
                        Ga(e) ? pr(e, yr(t, 1, Ga, !0), co(n, 2)) : []
                    }
                    ))
                      , Uo = Xr((function(e, t) {
                        var n = Xo(t);
                        return Ga(n) && (n = i),
                        Ga(e) ? pr(e, yr(t, 1, Ga, !0), i, n) : []
                    }
                    ));
                    function zo(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var i = null == n ? 0 : gs(n);
                        return i < 0 && (i = bn(r + i, 0)),
                        Wt(e, co(t, 3), i)
                    }
                    function $o(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var o = r - 1;
                        return n !== i && (o = gs(n),
                        o = n < 0 ? bn(r + o, 0) : xn(o, r - 1)),
                        Wt(e, co(t, 3), o, !0)
                    }
                    function Ko(e) {
                        return (null == e ? 0 : e.length) ? yr(e, 1) : []
                    }
                    function Vo(e) {
                        return e && e.length ? e[0] : i
                    }
                    var Go = Xr((function(e) {
                        var t = It(e, yi);
                        return t.length && t[0] === e[0] ? Cr(t) : []
                    }
                    ))
                      , Yo = Xr((function(e) {
                        var t = Xo(e)
                          , n = It(e, yi);
                        return t === Xo(n) ? t = i : n.pop(),
                        n.length && n[0] === e[0] ? Cr(n, co(t, 2)) : []
                    }
                    ))
                      , Jo = Xr((function(e) {
                        var t = Xo(e)
                          , n = It(e, yi);
                        return (t = "function" == typeof t ? t : i) && n.pop(),
                        n.length && n[0] === e[0] ? Cr(n, i, t) : []
                    }
                    ));
                    function Xo(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? e[t - 1] : i
                    }
                    var Zo = Xr(Qo);
                    function Qo(e, t) {
                        return e && e.length && t && t.length ? Vr(e, t) : e
                    }
                    var ea = ro((function(e, t) {
                        var n = null == e ? 0 : e.length
                          , r = sr(e, t);
                        return Gr(e, It(t, (function(e) {
                            return xo(e, n) ? +e : e
                        }
                        )).sort(Ni)),
                        r
                    }
                    ));
                    function ta(e) {
                        return null == e ? e : _n.call(e)
                    }
                    var na = Xr((function(e) {
                        return fi(yr(e, 1, Ga, !0))
                    }
                    ))
                      , ra = Xr((function(e) {
                        var t = Xo(e);
                        return Ga(t) && (t = i),
                        fi(yr(e, 1, Ga, !0), co(t, 2))
                    }
                    ))
                      , ia = Xr((function(e) {
                        var t = Xo(e);
                        return t = "function" == typeof t ? t : i,
                        fi(yr(e, 1, Ga, !0), i, t)
                    }
                    ));
                    function oa(e) {
                        if (!e || !e.length)
                            return [];
                        var t = 0;
                        return e = Pt(e, (function(e) {
                            if (Ga(e))
                                return t = bn(e.length, t),
                                !0
                        }
                        )),
                        Xt(t, (function(t) {
                            return It(e, Vt(t))
                        }
                        ))
                    }
                    function aa(e, t) {
                        if (!e || !e.length)
                            return [];
                        var n = oa(e);
                        return null == t ? n : It(n, (function(e) {
                            return Nt(t, i, e)
                        }
                        ))
                    }
                    var sa = Xr((function(e, t) {
                        return Ga(e) ? pr(e, t) : []
                    }
                    ))
                      , ua = Xr((function(e) {
                        return mi(Pt(e, Ga))
                    }
                    ))
                      , ca = Xr((function(e) {
                        var t = Xo(e);
                        return Ga(t) && (t = i),
                        mi(Pt(e, Ga), co(t, 2))
                    }
                    ))
                      , la = Xr((function(e) {
                        var t = Xo(e);
                        return t = "function" == typeof t ? t : i,
                        mi(Pt(e, Ga), i, t)
                    }
                    ))
                      , fa = Xr(oa);
                    var pa = Xr((function(e) {
                        var t = e.length
                          , n = t > 1 ? e[t - 1] : i;
                        return n = "function" == typeof n ? (e.pop(),
                        n) : i,
                        aa(e, n)
                    }
                    ));
                    function da(e) {
                        var t = Hn(e);
                        return t.__chain__ = !0,
                        t
                    }
                    function ha(e, t) {
                        return t(e)
                    }
                    var ga = ro((function(e) {
                        var t = e.length
                          , n = t ? e[0] : 0
                          , r = this.__wrapped__
                          , o = function(t) {
                            return sr(t, e)
                        };
                        return !(t > 1 || this.__actions__.length) && r instanceof $n && xo(n) ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                            func: ha,
                            args: [o],
                            thisArg: i
                        }),
                        new zn(r,this.__chain__).thru((function(e) {
                            return t && !e.length && e.push(i),
                            e
                        }
                        ))) : this.thru(o)
                    }
                    ));
                    var ma = Pi((function(e, t, n) {
                        Me.call(e, n) ? ++e[n] : ar(e, n, 1)
                    }
                    ));
                    var va = qi(zo)
                      , ya = qi($o);
                    function ba(e, t) {
                        return ($a(e) ? Lt : dr)(e, co(t, 3))
                    }
                    function xa(e, t) {
                        return ($a(e) ? Ct : hr)(e, co(t, 3))
                    }
                    var wa = Pi((function(e, t, n) {
                        Me.call(e, n) ? e[n].push(t) : ar(e, n, [t])
                    }
                    ));
                    var Aa = Xr((function(e, t, n) {
                        var i = -1
                          , o = "function" == typeof t
                          , a = Va(e) ? r(e.length) : [];
                        return dr(e, (function(e) {
                            a[++i] = o ? Nt(t, e, n) : Or(e, t, n)
                        }
                        )),
                        a
                    }
                    ))
                      , Ta = Pi((function(e, t, n) {
                        ar(e, n, t)
                    }
                    ));
                    function _a(e, t) {
                        return ($a(e) ? It : Fr)(e, co(t, 3))
                    }
                    var Sa = Pi((function(e, t, n) {
                        e[n ? 0 : 1].push(t)
                    }
                    ), (function() {
                        return [[], []]
                    }
                    ));
                    var Ea = Xr((function(e, t) {
                        if (null == e)
                            return [];
                        var n = t.length;
                        return n > 1 && wo(e, t[0], t[1]) ? t = [] : n > 2 && wo(t[0], t[1], t[2]) && (t = [t[0]]),
                        $r(e, yr(t, 1), [])
                    }
                    ))
                      , Na = lt || function() {
                        return gt.Date.now()
                    }
                    ;
                    function ka(e, t, n) {
                        return t = n ? i : t,
                        t = e && null == t ? e.length : t,
                        Zi(e, f, i, i, i, i, t)
                    }
                    function La(e, t) {
                        var n;
                        if ("function" != typeof t)
                            throw new Ce(o);
                        return e = gs(e),
                        function() {
                            return --e > 0 && (n = t.apply(this, arguments)),
                            e <= 1 && (t = i),
                            n
                        }
                    }
                    var Ca = Xr((function(e, t, n) {
                        var r = 1;
                        if (n.length) {
                            var i = fn(n, uo(Ca));
                            r |= c
                        }
                        return Zi(e, r, t, n, i)
                    }
                    ))
                      , Oa = Xr((function(e, t, n) {
                        var r = 3;
                        if (n.length) {
                            var i = fn(n, uo(Oa));
                            r |= c
                        }
                        return Zi(t, r, e, n, i)
                    }
                    ));
                    function Pa(e, t, n) {
                        var r, a, s, u, c, l, f = 0, p = !1, d = !1, h = !0;
                        if ("function" != typeof e)
                            throw new Ce(o);
                        function g(t) {
                            var n = r
                              , o = a;
                            return r = a = i,
                            f = t,
                            u = e.apply(o, n)
                        }
                        function m(e) {
                            var n = e - l;
                            return l === i || n >= t || n < 0 || d && e - f >= s
                        }
                        function v() {
                            var e = Na();
                            if (m(e))
                                return y(e);
                            c = Po(v, function(e) {
                                var n = t - (e - l);
                                return d ? xn(n, s - (e - f)) : n
                            }(e))
                        }
                        function y(e) {
                            return c = i,
                            h && r ? g(e) : (r = a = i,
                            u)
                        }
                        function b() {
                            var e = Na()
                              , n = m(e);
                            if (r = arguments,
                            a = this,
                            l = e,
                            n) {
                                if (c === i)
                                    return function(e) {
                                        return f = e,
                                        c = Po(v, t),
                                        p ? g(e) : u
                                    }(l);
                                if (d)
                                    return Ti(c),
                                    c = Po(v, t),
                                    g(l)
                            }
                            return c === i && (c = Po(v, t)),
                            u
                        }
                        return t = vs(t) || 0,
                        ts(n) && (p = !!n.leading,
                        s = (d = "maxWait"in n) ? bn(vs(n.maxWait) || 0, t) : s,
                        h = "trailing"in n ? !!n.trailing : h),
                        b.cancel = function() {
                            c !== i && Ti(c),
                            f = 0,
                            r = l = a = c = i
                        }
                        ,
                        b.flush = function() {
                            return c === i ? u : y(Na())
                        }
                        ,
                        b
                    }
                    var ja = Xr((function(e, t) {
                        return fr(e, 1, t)
                    }
                    ))
                      , Ra = Xr((function(e, t, n) {
                        return fr(e, vs(t) || 0, n)
                    }
                    ));
                    function Ia(e, t) {
                        if ("function" != typeof e || null != t && "function" != typeof t)
                            throw new Ce(o);
                        var n = function() {
                            var r = arguments
                              , i = t ? t.apply(this, r) : r[0]
                              , o = n.cache;
                            if (o.has(i))
                                return o.get(i);
                            var a = e.apply(this, r);
                            return n.cache = o.set(i, a) || o,
                            a
                        };
                        return n.cache = new (Ia.Cache || Gn),
                        n
                    }
                    function Ma(e) {
                        if ("function" != typeof e)
                            throw new Ce(o);
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                            case 0:
                                return !e.call(this);
                            case 1:
                                return !e.call(this, t[0]);
                            case 2:
                                return !e.call(this, t[0], t[1]);
                            case 3:
                                return !e.call(this, t[0], t[1], t[2])
                            }
                            return !e.apply(this, t)
                        }
                    }
                    Ia.Cache = Gn;
                    var Da = wi((function(e, t) {
                        var n = (t = 1 == t.length && $a(t[0]) ? It(t[0], Qt(co())) : It(yr(t, 1), Qt(co()))).length;
                        return Xr((function(r) {
                            for (var i = -1, o = xn(r.length, n); ++i < o; )
                                r[i] = t[i].call(this, r[i]);
                            return Nt(e, this, r)
                        }
                        ))
                    }
                    ))
                      , Ba = Xr((function(e, t) {
                        var n = fn(t, uo(Ba));
                        return Zi(e, c, i, t, n)
                    }
                    ))
                      , qa = Xr((function(e, t) {
                        var n = fn(t, uo(qa));
                        return Zi(e, l, i, t, n)
                    }
                    ))
                      , Fa = ro((function(e, t) {
                        return Zi(e, p, i, i, i, t)
                    }
                    ));
                    function Ha(e, t) {
                        return e === t || e != e && t != t
                    }
                    var Wa = Vi(Nr)
                      , Ua = Vi((function(e, t) {
                        return e >= t
                    }
                    ))
                      , za = Pr(function() {
                        return arguments
                    }()) ? Pr : function(e) {
                        return ns(e) && Me.call(e, "callee") && !Ye.call(e, "callee")
                    }
                      , $a = r.isArray
                      , Ka = wt ? Qt(wt) : function(e) {
                        return ns(e) && Er(e) == R
                    }
                    ;
                    function Va(e) {
                        return null != e && es(e.length) && !Za(e)
                    }
                    function Ga(e) {
                        return ns(e) && Va(e)
                    }
                    var Ya = bt || vu
                      , Ja = At ? Qt(At) : function(e) {
                        return ns(e) && Er(e) == w
                    }
                    ;
                    function Xa(e) {
                        if (!ns(e))
                            return !1;
                        var t = Er(e);
                        return t == A || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !os(e)
                    }
                    function Za(e) {
                        if (!ts(e))
                            return !1;
                        var t = Er(e);
                        return t == T || t == _ || "[object AsyncFunction]" == t || "[object Proxy]" == t
                    }
                    function Qa(e) {
                        return "number" == typeof e && e == gs(e)
                    }
                    function es(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= h
                    }
                    function ts(e) {
                        var t = typeof e;
                        return null != e && ("object" == t || "function" == t)
                    }
                    function ns(e) {
                        return null != e && "object" == typeof e
                    }
                    var rs = Tt ? Qt(Tt) : function(e) {
                        return ns(e) && mo(e) == S
                    }
                    ;
                    function is(e) {
                        return "number" == typeof e || ns(e) && Er(e) == E
                    }
                    function os(e) {
                        if (!ns(e) || Er(e) != N)
                            return !1;
                        var t = Ve(e);
                        if (null === t)
                            return !0;
                        var n = Me.call(t, "constructor") && t.constructor;
                        return "function" == typeof n && n instanceof n && Ie.call(n) == Fe
                    }
                    var as = _t ? Qt(_t) : function(e) {
                        return ns(e) && Er(e) == L
                    }
                    ;
                    var ss = St ? Qt(St) : function(e) {
                        return ns(e) && mo(e) == C
                    }
                    ;
                    function us(e) {
                        return "string" == typeof e || !$a(e) && ns(e) && Er(e) == O
                    }
                    function cs(e) {
                        return "symbol" == typeof e || ns(e) && Er(e) == P
                    }
                    var ls = Et ? Qt(Et) : function(e) {
                        return ns(e) && es(e.length) && !!ut[Er(e)]
                    }
                    ;
                    var fs = Vi(qr)
                      , ps = Vi((function(e, t) {
                        return e <= t
                    }
                    ));
                    function ds(e) {
                        if (!e)
                            return [];
                        if (Va(e))
                            return us(e) ? gn(e) : Ci(e);
                        if (Ze && e[Ze])
                            return function(e) {
                                for (var t, n = []; !(t = e.next()).done; )
                                    n.push(t.value);
                                return n
                            }(e[Ze]());
                        var t = mo(e);
                        return (t == S ? cn : t == C ? pn : Hs)(e)
                    }
                    function hs(e) {
                        return e ? (e = vs(e)) === d || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                    }
                    function gs(e) {
                        var t = hs(e)
                          , n = t % 1;
                        return t == t ? n ? t - n : t : 0
                    }
                    function ms(e) {
                        return e ? ur(gs(e), 0, m) : 0
                    }
                    function vs(e) {
                        if ("number" == typeof e)
                            return e;
                        if (cs(e))
                            return g;
                        if (ts(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = ts(t) ? t + "" : t
                        }
                        if ("string" != typeof e)
                            return 0 === e ? e : +e;
                        e = Zt(e);
                        var n = ve.test(e);
                        return n || be.test(e) ? pt(e.slice(2), n ? 2 : 8) : me.test(e) ? g : +e
                    }
                    function ys(e) {
                        return Oi(e, js(e))
                    }
                    function bs(e) {
                        return null == e ? "" : li(e)
                    }
                    var xs = ji((function(e, t) {
                        if (So(t) || Va(t))
                            Oi(t, Ps(t), e);
                        else
                            for (var n in t)
                                Me.call(t, n) && nr(e, n, t[n])
                    }
                    ))
                      , ws = ji((function(e, t) {
                        Oi(t, js(t), e)
                    }
                    ))
                      , As = ji((function(e, t, n, r) {
                        Oi(t, js(t), e, r)
                    }
                    ))
                      , Ts = ji((function(e, t, n, r) {
                        Oi(t, Ps(t), e, r)
                    }
                    ))
                      , _s = ro(sr);
                    var Ss = Xr((function(e, t) {
                        e = Ne(e);
                        var n = -1
                          , r = t.length
                          , o = r > 2 ? t[2] : i;
                        for (o && wo(t[0], t[1], o) && (r = 1); ++n < r; )
                            for (var a = t[n], s = js(a), u = -1, c = s.length; ++u < c; ) {
                                var l = s[u]
                                  , f = e[l];
                                (f === i || Ha(f, je[l]) && !Me.call(e, l)) && (e[l] = a[l])
                            }
                        return e
                    }
                    ))
                      , Es = Xr((function(e) {
                        return e.push(i, eo),
                        Nt(Is, i, e)
                    }
                    ));
                    function Ns(e, t, n) {
                        var r = null == e ? i : _r(e, t);
                        return r === i ? n : r
                    }
                    function ks(e, t) {
                        return null != e && vo(e, t, Lr)
                    }
                    var Ls = Wi((function(e, t, n) {
                        null != t && "function" != typeof t.toString && (t = qe.call(t)),
                        e[t] = n
                    }
                    ), tu(iu))
                      , Cs = Wi((function(e, t, n) {
                        null != t && "function" != typeof t.toString && (t = qe.call(t)),
                        Me.call(e, t) ? e[t].push(n) : e[t] = [n]
                    }
                    ), co)
                      , Os = Xr(Or);
                    function Ps(e) {
                        return Va(e) ? Xn(e) : Dr(e)
                    }
                    function js(e) {
                        return Va(e) ? Xn(e, !0) : Br(e)
                    }
                    var Rs = ji((function(e, t, n) {
                        Ur(e, t, n)
                    }
                    ))
                      , Is = ji((function(e, t, n, r) {
                        Ur(e, t, n, r)
                    }
                    ))
                      , Ms = ro((function(e, t) {
                        var n = {};
                        if (null == e)
                            return n;
                        var r = !1;
                        t = It(t, (function(t) {
                            return t = xi(t, e),
                            r || (r = t.length > 1),
                            t
                        }
                        )),
                        Oi(e, oo(e), n),
                        r && (n = cr(n, 7, to));
                        for (var i = t.length; i--; )
                            pi(n, t[i]);
                        return n
                    }
                    ));
                    var Ds = ro((function(e, t) {
                        return null == e ? {} : function(e, t) {
                            return Kr(e, t, (function(t, n) {
                                return ks(e, n)
                            }
                            ))
                        }(e, t)
                    }
                    ));
                    function Bs(e, t) {
                        if (null == e)
                            return {};
                        var n = It(oo(e), (function(e) {
                            return [e]
                        }
                        ));
                        return t = co(t),
                        Kr(e, n, (function(e, n) {
                            return t(e, n[0])
                        }
                        ))
                    }
                    var qs = Xi(Ps)
                      , Fs = Xi(js);
                    function Hs(e) {
                        return null == e ? [] : en(e, Ps(e))
                    }
                    var Ws = Di((function(e, t, n) {
                        return t = t.toLowerCase(),
                        e + (n ? Us(t) : t)
                    }
                    ));
                    function Us(e) {
                        return Xs(bs(e).toLowerCase())
                    }
                    function zs(e) {
                        return (e = bs(e)) && e.replace(we, on).replace(tt, "")
                    }
                    var $s = Di((function(e, t, n) {
                        return e + (n ? "-" : "") + t.toLowerCase()
                    }
                    ))
                      , Ks = Di((function(e, t, n) {
                        return e + (n ? " " : "") + t.toLowerCase()
                    }
                    ))
                      , Vs = Mi("toLowerCase");
                    var Gs = Di((function(e, t, n) {
                        return e + (n ? "_" : "") + t.toLowerCase()
                    }
                    ));
                    var Ys = Di((function(e, t, n) {
                        return e + (n ? " " : "") + Xs(t)
                    }
                    ));
                    var Js = Di((function(e, t, n) {
                        return e + (n ? " " : "") + t.toUpperCase()
                    }
                    ))
                      , Xs = Mi("toUpperCase");
                    function Zs(e, t, n) {
                        return e = bs(e),
                        (t = n ? i : t) === i ? function(e) {
                            return ot.test(e)
                        }(e) ? function(e) {
                            return e.match(rt) || []
                        }(e) : function(e) {
                            return e.match(fe) || []
                        }(e) : e.match(t) || []
                    }
                    var Qs = Xr((function(e, t) {
                        try {
                            return Nt(e, i, t)
                        } catch (e) {
                            return Xa(e) ? e : new _e(e)
                        }
                    }
                    ))
                      , eu = ro((function(e, t) {
                        return Lt(t, (function(t) {
                            t = Bo(t),
                            ar(e, t, Ca(e[t], e))
                        }
                        )),
                        e
                    }
                    ));
                    function tu(e) {
                        return function() {
                            return e
                        }
                    }
                    var nu = Fi()
                      , ru = Fi(!0);
                    function iu(e) {
                        return e
                    }
                    function ou(e) {
                        return Mr("function" == typeof e ? e : cr(e, 1))
                    }
                    var au = Xr((function(e, t) {
                        return function(n) {
                            return Or(n, e, t)
                        }
                    }
                    ))
                      , su = Xr((function(e, t) {
                        return function(n) {
                            return Or(e, n, t)
                        }
                    }
                    ));
                    function uu(e, t, n) {
                        var r = Ps(t)
                          , i = Tr(t, r);
                        null != n || ts(t) && (i.length || !r.length) || (n = t,
                        t = e,
                        e = this,
                        i = Tr(t, Ps(t)));
                        var o = !(ts(n) && "chain"in n && !n.chain)
                          , a = Za(e);
                        return Lt(i, (function(n) {
                            var r = t[n];
                            e[n] = r,
                            a && (e.prototype[n] = function() {
                                var t = this.__chain__;
                                if (o || t) {
                                    var n = e(this.__wrapped__);
                                    return (n.__actions__ = Ci(this.__actions__)).push({
                                        func: r,
                                        args: arguments,
                                        thisArg: e
                                    }),
                                    n.__chain__ = t,
                                    n
                                }
                                return r.apply(e, Mt([this.value()], arguments))
                            }
                            )
                        }
                        )),
                        e
                    }
                    function cu() {}
                    var lu = zi(It)
                      , fu = zi(Ot)
                      , pu = zi(qt);
                    function du(e) {
                        return Ao(e) ? Vt(Bo(e)) : function(e) {
                            return function(t) {
                                return _r(t, e)
                            }
                        }(e)
                    }
                    var hu = Ki()
                      , gu = Ki(!0);
                    function mu() {
                        return []
                    }
                    function vu() {
                        return !1
                    }
                    var yu = Ui((function(e, t) {
                        return e + t
                    }
                    ), 0)
                      , bu = Yi("ceil")
                      , xu = Ui((function(e, t) {
                        return e / t
                    }
                    ), 1)
                      , wu = Yi("floor");
                    var Au, Tu = Ui((function(e, t) {
                        return e * t
                    }
                    ), 1), _u = Yi("round"), Su = Ui((function(e, t) {
                        return e - t
                    }
                    ), 0);
                    return Hn.after = function(e, t) {
                        if ("function" != typeof t)
                            throw new Ce(o);
                        return e = gs(e),
                        function() {
                            if (--e < 1)
                                return t.apply(this, arguments)
                        }
                    }
                    ,
                    Hn.ary = ka,
                    Hn.assign = xs,
                    Hn.assignIn = ws,
                    Hn.assignInWith = As,
                    Hn.assignWith = Ts,
                    Hn.at = _s,
                    Hn.before = La,
                    Hn.bind = Ca,
                    Hn.bindAll = eu,
                    Hn.bindKey = Oa,
                    Hn.castArray = function() {
                        if (!arguments.length)
                            return [];
                        var e = arguments[0];
                        return $a(e) ? e : [e]
                    }
                    ,
                    Hn.chain = da,
                    Hn.chunk = function(e, t, n) {
                        t = (n ? wo(e, t, n) : t === i) ? 1 : bn(gs(t), 0);
                        var o = null == e ? 0 : e.length;
                        if (!o || t < 1)
                            return [];
                        for (var a = 0, s = 0, u = r(ht(o / t)); a < o; )
                            u[s++] = ii(e, a, a += t);
                        return u
                    }
                    ,
                    Hn.compact = function(e) {
                        for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n; ) {
                            var o = e[t];
                            o && (i[r++] = o)
                        }
                        return i
                    }
                    ,
                    Hn.concat = function() {
                        var e = arguments.length;
                        if (!e)
                            return [];
                        for (var t = r(e - 1), n = arguments[0], i = e; i--; )
                            t[i - 1] = arguments[i];
                        return Mt($a(n) ? Ci(n) : [n], yr(t, 1))
                    }
                    ,
                    Hn.cond = function(e) {
                        var t = null == e ? 0 : e.length
                          , n = co();
                        return e = t ? It(e, (function(e) {
                            if ("function" != typeof e[1])
                                throw new Ce(o);
                            return [n(e[0]), e[1]]
                        }
                        )) : [],
                        Xr((function(n) {
                            for (var r = -1; ++r < t; ) {
                                var i = e[r];
                                if (Nt(i[0], this, n))
                                    return Nt(i[1], this, n)
                            }
                        }
                        ))
                    }
                    ,
                    Hn.conforms = function(e) {
                        return function(e) {
                            var t = Ps(e);
                            return function(n) {
                                return lr(n, e, t)
                            }
                        }(cr(e, 1))
                    }
                    ,
                    Hn.constant = tu,
                    Hn.countBy = ma,
                    Hn.create = function(e, t) {
                        var n = Wn(e);
                        return null == t ? n : or(n, t)
                    }
                    ,
                    Hn.curry = function e(t, n, r) {
                        var o = Zi(t, 8, i, i, i, i, i, n = r ? i : n);
                        return o.placeholder = e.placeholder,
                        o
                    }
                    ,
                    Hn.curryRight = function e(t, n, r) {
                        var o = Zi(t, u, i, i, i, i, i, n = r ? i : n);
                        return o.placeholder = e.placeholder,
                        o
                    }
                    ,
                    Hn.debounce = Pa,
                    Hn.defaults = Ss,
                    Hn.defaultsDeep = Es,
                    Hn.defer = ja,
                    Hn.delay = Ra,
                    Hn.difference = Ho,
                    Hn.differenceBy = Wo,
                    Hn.differenceWith = Uo,
                    Hn.drop = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r ? ii(e, (t = n || t === i ? 1 : gs(t)) < 0 ? 0 : t, r) : []
                    }
                    ,
                    Hn.dropRight = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r ? ii(e, 0, (t = r - (t = n || t === i ? 1 : gs(t))) < 0 ? 0 : t) : []
                    }
                    ,
                    Hn.dropRightWhile = function(e, t) {
                        return e && e.length ? hi(e, co(t, 3), !0, !0) : []
                    }
                    ,
                    Hn.dropWhile = function(e, t) {
                        return e && e.length ? hi(e, co(t, 3), !0) : []
                    }
                    ,
                    Hn.fill = function(e, t, n, r) {
                        var o = null == e ? 0 : e.length;
                        return o ? (n && "number" != typeof n && wo(e, t, n) && (n = 0,
                        r = o),
                        function(e, t, n, r) {
                            var o = e.length;
                            for ((n = gs(n)) < 0 && (n = -n > o ? 0 : o + n),
                            (r = r === i || r > o ? o : gs(r)) < 0 && (r += o),
                            r = n > r ? 0 : ms(r); n < r; )
                                e[n++] = t;
                            return e
                        }(e, t, n, r)) : []
                    }
                    ,
                    Hn.filter = function(e, t) {
                        return ($a(e) ? Pt : vr)(e, co(t, 3))
                    }
                    ,
                    Hn.flatMap = function(e, t) {
                        return yr(_a(e, t), 1)
                    }
                    ,
                    Hn.flatMapDeep = function(e, t) {
                        return yr(_a(e, t), d)
                    }
                    ,
                    Hn.flatMapDepth = function(e, t, n) {
                        return n = n === i ? 1 : gs(n),
                        yr(_a(e, t), n)
                    }
                    ,
                    Hn.flatten = Ko,
                    Hn.flattenDeep = function(e) {
                        return (null == e ? 0 : e.length) ? yr(e, d) : []
                    }
                    ,
                    Hn.flattenDepth = function(e, t) {
                        return (null == e ? 0 : e.length) ? yr(e, t = t === i ? 1 : gs(t)) : []
                    }
                    ,
                    Hn.flip = function(e) {
                        return Zi(e, 512)
                    }
                    ,
                    Hn.flow = nu,
                    Hn.flowRight = ru,
                    Hn.fromPairs = function(e) {
                        for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
                            var i = e[t];
                            r[i[0]] = i[1]
                        }
                        return r
                    }
                    ,
                    Hn.functions = function(e) {
                        return null == e ? [] : Tr(e, Ps(e))
                    }
                    ,
                    Hn.functionsIn = function(e) {
                        return null == e ? [] : Tr(e, js(e))
                    }
                    ,
                    Hn.groupBy = wa,
                    Hn.initial = function(e) {
                        return (null == e ? 0 : e.length) ? ii(e, 0, -1) : []
                    }
                    ,
                    Hn.intersection = Go,
                    Hn.intersectionBy = Yo,
                    Hn.intersectionWith = Jo,
                    Hn.invert = Ls,
                    Hn.invertBy = Cs,
                    Hn.invokeMap = Aa,
                    Hn.iteratee = ou,
                    Hn.keyBy = Ta,
                    Hn.keys = Ps,
                    Hn.keysIn = js,
                    Hn.map = _a,
                    Hn.mapKeys = function(e, t) {
                        var n = {};
                        return t = co(t, 3),
                        wr(e, (function(e, r, i) {
                            ar(n, t(e, r, i), e)
                        }
                        )),
                        n
                    }
                    ,
                    Hn.mapValues = function(e, t) {
                        var n = {};
                        return t = co(t, 3),
                        wr(e, (function(e, r, i) {
                            ar(n, r, t(e, r, i))
                        }
                        )),
                        n
                    }
                    ,
                    Hn.matches = function(e) {
                        return Hr(cr(e, 1))
                    }
                    ,
                    Hn.matchesProperty = function(e, t) {
                        return Wr(e, cr(t, 1))
                    }
                    ,
                    Hn.memoize = Ia,
                    Hn.merge = Rs,
                    Hn.mergeWith = Is,
                    Hn.method = au,
                    Hn.methodOf = su,
                    Hn.mixin = uu,
                    Hn.negate = Ma,
                    Hn.nthArg = function(e) {
                        return e = gs(e),
                        Xr((function(t) {
                            return zr(t, e)
                        }
                        ))
                    }
                    ,
                    Hn.omit = Ms,
                    Hn.omitBy = function(e, t) {
                        return Bs(e, Ma(co(t)))
                    }
                    ,
                    Hn.once = function(e) {
                        return La(2, e)
                    }
                    ,
                    Hn.orderBy = function(e, t, n, r) {
                        return null == e ? [] : ($a(t) || (t = null == t ? [] : [t]),
                        $a(n = r ? i : n) || (n = null == n ? [] : [n]),
                        $r(e, t, n))
                    }
                    ,
                    Hn.over = lu,
                    Hn.overArgs = Da,
                    Hn.overEvery = fu,
                    Hn.overSome = pu,
                    Hn.partial = Ba,
                    Hn.partialRight = qa,
                    Hn.partition = Sa,
                    Hn.pick = Ds,
                    Hn.pickBy = Bs,
                    Hn.property = du,
                    Hn.propertyOf = function(e) {
                        return function(t) {
                            return null == e ? i : _r(e, t)
                        }
                    }
                    ,
                    Hn.pull = Zo,
                    Hn.pullAll = Qo,
                    Hn.pullAllBy = function(e, t, n) {
                        return e && e.length && t && t.length ? Vr(e, t, co(n, 2)) : e
                    }
                    ,
                    Hn.pullAllWith = function(e, t, n) {
                        return e && e.length && t && t.length ? Vr(e, t, i, n) : e
                    }
                    ,
                    Hn.pullAt = ea,
                    Hn.range = hu,
                    Hn.rangeRight = gu,
                    Hn.rearg = Fa,
                    Hn.reject = function(e, t) {
                        return ($a(e) ? Pt : vr)(e, Ma(co(t, 3)))
                    }
                    ,
                    Hn.remove = function(e, t) {
                        var n = [];
                        if (!e || !e.length)
                            return n;
                        var r = -1
                          , i = []
                          , o = e.length;
                        for (t = co(t, 3); ++r < o; ) {
                            var a = e[r];
                            t(a, r, e) && (n.push(a),
                            i.push(r))
                        }
                        return Gr(e, i),
                        n
                    }
                    ,
                    Hn.rest = function(e, t) {
                        if ("function" != typeof e)
                            throw new Ce(o);
                        return Xr(e, t = t === i ? t : gs(t))
                    }
                    ,
                    Hn.reverse = ta,
                    Hn.sampleSize = function(e, t, n) {
                        return t = (n ? wo(e, t, n) : t === i) ? 1 : gs(t),
                        ($a(e) ? Qn : Qr)(e, t)
                    }
                    ,
                    Hn.set = function(e, t, n) {
                        return null == e ? e : ei(e, t, n)
                    }
                    ,
                    Hn.setWith = function(e, t, n, r) {
                        return r = "function" == typeof r ? r : i,
                        null == e ? e : ei(e, t, n, r)
                    }
                    ,
                    Hn.shuffle = function(e) {
                        return ($a(e) ? er : ri)(e)
                    }
                    ,
                    Hn.slice = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r ? (n && "number" != typeof n && wo(e, t, n) ? (t = 0,
                        n = r) : (t = null == t ? 0 : gs(t),
                        n = n === i ? r : gs(n)),
                        ii(e, t, n)) : []
                    }
                    ,
                    Hn.sortBy = Ea,
                    Hn.sortedUniq = function(e) {
                        return e && e.length ? ui(e) : []
                    }
                    ,
                    Hn.sortedUniqBy = function(e, t) {
                        return e && e.length ? ui(e, co(t, 2)) : []
                    }
                    ,
                    Hn.split = function(e, t, n) {
                        return n && "number" != typeof n && wo(e, t, n) && (t = n = i),
                        (n = n === i ? m : n >>> 0) ? (e = bs(e)) && ("string" == typeof t || null != t && !as(t)) && !(t = li(t)) && un(e) ? Ai(gn(e), 0, n) : e.split(t, n) : []
                    }
                    ,
                    Hn.spread = function(e, t) {
                        if ("function" != typeof e)
                            throw new Ce(o);
                        return t = null == t ? 0 : bn(gs(t), 0),
                        Xr((function(n) {
                            var r = n[t]
                              , i = Ai(n, 0, t);
                            return r && Mt(i, r),
                            Nt(e, this, i)
                        }
                        ))
                    }
                    ,
                    Hn.tail = function(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? ii(e, 1, t) : []
                    }
                    ,
                    Hn.take = function(e, t, n) {
                        return e && e.length ? ii(e, 0, (t = n || t === i ? 1 : gs(t)) < 0 ? 0 : t) : []
                    }
                    ,
                    Hn.takeRight = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r ? ii(e, (t = r - (t = n || t === i ? 1 : gs(t))) < 0 ? 0 : t, r) : []
                    }
                    ,
                    Hn.takeRightWhile = function(e, t) {
                        return e && e.length ? hi(e, co(t, 3), !1, !0) : []
                    }
                    ,
                    Hn.takeWhile = function(e, t) {
                        return e && e.length ? hi(e, co(t, 3)) : []
                    }
                    ,
                    Hn.tap = function(e, t) {
                        return t(e),
                        e
                    }
                    ,
                    Hn.throttle = function(e, t, n) {
                        var r = !0
                          , i = !0;
                        if ("function" != typeof e)
                            throw new Ce(o);
                        return ts(n) && (r = "leading"in n ? !!n.leading : r,
                        i = "trailing"in n ? !!n.trailing : i),
                        Pa(e, t, {
                            leading: r,
                            maxWait: t,
                            trailing: i
                        })
                    }
                    ,
                    Hn.thru = ha,
                    Hn.toArray = ds,
                    Hn.toPairs = qs,
                    Hn.toPairsIn = Fs,
                    Hn.toPath = function(e) {
                        return $a(e) ? It(e, Bo) : cs(e) ? [e] : Ci(Do(bs(e)))
                    }
                    ,
                    Hn.toPlainObject = ys,
                    Hn.transform = function(e, t, n) {
                        var r = $a(e)
                          , i = r || Ya(e) || ls(e);
                        if (t = co(t, 4),
                        null == n) {
                            var o = e && e.constructor;
                            n = i ? r ? new o : [] : ts(e) && Za(o) ? Wn(Ve(e)) : {}
                        }
                        return (i ? Lt : wr)(e, (function(e, r, i) {
                            return t(n, e, r, i)
                        }
                        )),
                        n
                    }
                    ,
                    Hn.unary = function(e) {
                        return ka(e, 1)
                    }
                    ,
                    Hn.union = na,
                    Hn.unionBy = ra,
                    Hn.unionWith = ia,
                    Hn.uniq = function(e) {
                        return e && e.length ? fi(e) : []
                    }
                    ,
                    Hn.uniqBy = function(e, t) {
                        return e && e.length ? fi(e, co(t, 2)) : []
                    }
                    ,
                    Hn.uniqWith = function(e, t) {
                        return t = "function" == typeof t ? t : i,
                        e && e.length ? fi(e, i, t) : []
                    }
                    ,
                    Hn.unset = function(e, t) {
                        return null == e || pi(e, t)
                    }
                    ,
                    Hn.unzip = oa,
                    Hn.unzipWith = aa,
                    Hn.update = function(e, t, n) {
                        return null == e ? e : di(e, t, bi(n))
                    }
                    ,
                    Hn.updateWith = function(e, t, n, r) {
                        return r = "function" == typeof r ? r : i,
                        null == e ? e : di(e, t, bi(n), r)
                    }
                    ,
                    Hn.values = Hs,
                    Hn.valuesIn = function(e) {
                        return null == e ? [] : en(e, js(e))
                    }
                    ,
                    Hn.without = sa,
                    Hn.words = Zs,
                    Hn.wrap = function(e, t) {
                        return Ba(bi(t), e)
                    }
                    ,
                    Hn.xor = ua,
                    Hn.xorBy = ca,
                    Hn.xorWith = la,
                    Hn.zip = fa,
                    Hn.zipObject = function(e, t) {
                        return vi(e || [], t || [], nr)
                    }
                    ,
                    Hn.zipObjectDeep = function(e, t) {
                        return vi(e || [], t || [], ei)
                    }
                    ,
                    Hn.zipWith = pa,
                    Hn.entries = qs,
                    Hn.entriesIn = Fs,
                    Hn.extend = ws,
                    Hn.extendWith = As,
                    uu(Hn, Hn),
                    Hn.add = yu,
                    Hn.attempt = Qs,
                    Hn.camelCase = Ws,
                    Hn.capitalize = Us,
                    Hn.ceil = bu,
                    Hn.clamp = function(e, t, n) {
                        return n === i && (n = t,
                        t = i),
                        n !== i && (n = (n = vs(n)) == n ? n : 0),
                        t !== i && (t = (t = vs(t)) == t ? t : 0),
                        ur(vs(e), t, n)
                    }
                    ,
                    Hn.clone = function(e) {
                        return cr(e, 4)
                    }
                    ,
                    Hn.cloneDeep = function(e) {
                        return cr(e, 5)
                    }
                    ,
                    Hn.cloneDeepWith = function(e, t) {
                        return cr(e, 5, t = "function" == typeof t ? t : i)
                    }
                    ,
                    Hn.cloneWith = function(e, t) {
                        return cr(e, 4, t = "function" == typeof t ? t : i)
                    }
                    ,
                    Hn.conformsTo = function(e, t) {
                        return null == t || lr(e, t, Ps(t))
                    }
                    ,
                    Hn.deburr = zs,
                    Hn.defaultTo = function(e, t) {
                        return null == e || e != e ? t : e
                    }
                    ,
                    Hn.divide = xu,
                    Hn.endsWith = function(e, t, n) {
                        e = bs(e),
                        t = li(t);
                        var r = e.length
                          , o = n = n === i ? r : ur(gs(n), 0, r);
                        return (n -= t.length) >= 0 && e.slice(n, o) == t
                    }
                    ,
                    Hn.eq = Ha,
                    Hn.escape = function(e) {
                        return (e = bs(e)) && X.test(e) ? e.replace(Y, an) : e
                    }
                    ,
                    Hn.escapeRegExp = function(e) {
                        return (e = bs(e)) && oe.test(e) ? e.replace(ie, "\\$&") : e
                    }
                    ,
                    Hn.every = function(e, t, n) {
                        var r = $a(e) ? Ot : gr;
                        return n && wo(e, t, n) && (t = i),
                        r(e, co(t, 3))
                    }
                    ,
                    Hn.find = va,
                    Hn.findIndex = zo,
                    Hn.findKey = function(e, t) {
                        return Ht(e, co(t, 3), wr)
                    }
                    ,
                    Hn.findLast = ya,
                    Hn.findLastIndex = $o,
                    Hn.findLastKey = function(e, t) {
                        return Ht(e, co(t, 3), Ar)
                    }
                    ,
                    Hn.floor = wu,
                    Hn.forEach = ba,
                    Hn.forEachRight = xa,
                    Hn.forIn = function(e, t) {
                        return null == e ? e : br(e, co(t, 3), js)
                    }
                    ,
                    Hn.forInRight = function(e, t) {
                        return null == e ? e : xr(e, co(t, 3), js)
                    }
                    ,
                    Hn.forOwn = function(e, t) {
                        return e && wr(e, co(t, 3))
                    }
                    ,
                    Hn.forOwnRight = function(e, t) {
                        return e && Ar(e, co(t, 3))
                    }
                    ,
                    Hn.get = Ns,
                    Hn.gt = Wa,
                    Hn.gte = Ua,
                    Hn.has = function(e, t) {
                        return null != e && vo(e, t, kr)
                    }
                    ,
                    Hn.hasIn = ks,
                    Hn.head = Vo,
                    Hn.identity = iu,
                    Hn.includes = function(e, t, n, r) {
                        e = Va(e) ? e : Hs(e),
                        n = n && !r ? gs(n) : 0;
                        var i = e.length;
                        return n < 0 && (n = bn(i + n, 0)),
                        us(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Ut(e, t, n) > -1
                    }
                    ,
                    Hn.indexOf = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var i = null == n ? 0 : gs(n);
                        return i < 0 && (i = bn(r + i, 0)),
                        Ut(e, t, i)
                    }
                    ,
                    Hn.inRange = function(e, t, n) {
                        return t = hs(t),
                        n === i ? (n = t,
                        t = 0) : n = hs(n),
                        function(e, t, n) {
                            return e >= xn(t, n) && e < bn(t, n)
                        }(e = vs(e), t, n)
                    }
                    ,
                    Hn.invoke = Os,
                    Hn.isArguments = za,
                    Hn.isArray = $a,
                    Hn.isArrayBuffer = Ka,
                    Hn.isArrayLike = Va,
                    Hn.isArrayLikeObject = Ga,
                    Hn.isBoolean = function(e) {
                        return !0 === e || !1 === e || ns(e) && Er(e) == x
                    }
                    ,
                    Hn.isBuffer = Ya,
                    Hn.isDate = Ja,
                    Hn.isElement = function(e) {
                        return ns(e) && 1 === e.nodeType && !os(e)
                    }
                    ,
                    Hn.isEmpty = function(e) {
                        if (null == e)
                            return !0;
                        if (Va(e) && ($a(e) || "string" == typeof e || "function" == typeof e.splice || Ya(e) || ls(e) || za(e)))
                            return !e.length;
                        var t = mo(e);
                        if (t == S || t == C)
                            return !e.size;
                        if (So(e))
                            return !Dr(e).length;
                        for (var n in e)
                            if (Me.call(e, n))
                                return !1;
                        return !0
                    }
                    ,
                    Hn.isEqual = function(e, t) {
                        return jr(e, t)
                    }
                    ,
                    Hn.isEqualWith = function(e, t, n) {
                        var r = (n = "function" == typeof n ? n : i) ? n(e, t) : i;
                        return r === i ? jr(e, t, i, n) : !!r
                    }
                    ,
                    Hn.isError = Xa,
                    Hn.isFinite = function(e) {
                        return "number" == typeof e && xt(e)
                    }
                    ,
                    Hn.isFunction = Za,
                    Hn.isInteger = Qa,
                    Hn.isLength = es,
                    Hn.isMap = rs,
                    Hn.isMatch = function(e, t) {
                        return e === t || Rr(e, t, fo(t))
                    }
                    ,
                    Hn.isMatchWith = function(e, t, n) {
                        return n = "function" == typeof n ? n : i,
                        Rr(e, t, fo(t), n)
                    }
                    ,
                    Hn.isNaN = function(e) {
                        return is(e) && e != +e
                    }
                    ,
                    Hn.isNative = function(e) {
                        if (_o(e))
                            throw new _e("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                        return Ir(e)
                    }
                    ,
                    Hn.isNil = function(e) {
                        return null == e
                    }
                    ,
                    Hn.isNull = function(e) {
                        return null === e
                    }
                    ,
                    Hn.isNumber = is,
                    Hn.isObject = ts,
                    Hn.isObjectLike = ns,
                    Hn.isPlainObject = os,
                    Hn.isRegExp = as,
                    Hn.isSafeInteger = function(e) {
                        return Qa(e) && e >= -9007199254740991 && e <= h
                    }
                    ,
                    Hn.isSet = ss,
                    Hn.isString = us,
                    Hn.isSymbol = cs,
                    Hn.isTypedArray = ls,
                    Hn.isUndefined = function(e) {
                        return e === i
                    }
                    ,
                    Hn.isWeakMap = function(e) {
                        return ns(e) && mo(e) == j
                    }
                    ,
                    Hn.isWeakSet = function(e) {
                        return ns(e) && "[object WeakSet]" == Er(e)
                    }
                    ,
                    Hn.join = function(e, t) {
                        return null == e ? "" : Ft.call(e, t)
                    }
                    ,
                    Hn.kebabCase = $s,
                    Hn.last = Xo,
                    Hn.lastIndexOf = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var o = r;
                        return n !== i && (o = (o = gs(n)) < 0 ? bn(r + o, 0) : xn(o, r - 1)),
                        t == t ? function(e, t, n) {
                            for (var r = n + 1; r--; )
                                if (e[r] === t)
                                    return r;
                            return r
                        }(e, t, o) : Wt(e, $t, o, !0)
                    }
                    ,
                    Hn.lowerCase = Ks,
                    Hn.lowerFirst = Vs,
                    Hn.lt = fs,
                    Hn.lte = ps,
                    Hn.max = function(e) {
                        return e && e.length ? mr(e, iu, Nr) : i
                    }
                    ,
                    Hn.maxBy = function(e, t) {
                        return e && e.length ? mr(e, co(t, 2), Nr) : i
                    }
                    ,
                    Hn.mean = function(e) {
                        return Kt(e, iu)
                    }
                    ,
                    Hn.meanBy = function(e, t) {
                        return Kt(e, co(t, 2))
                    }
                    ,
                    Hn.min = function(e) {
                        return e && e.length ? mr(e, iu, qr) : i
                    }
                    ,
                    Hn.minBy = function(e, t) {
                        return e && e.length ? mr(e, co(t, 2), qr) : i
                    }
                    ,
                    Hn.stubArray = mu,
                    Hn.stubFalse = vu,
                    Hn.stubObject = function() {
                        return {}
                    }
                    ,
                    Hn.stubString = function() {
                        return ""
                    }
                    ,
                    Hn.stubTrue = function() {
                        return !0
                    }
                    ,
                    Hn.multiply = Tu,
                    Hn.nth = function(e, t) {
                        return e && e.length ? zr(e, gs(t)) : i
                    }
                    ,
                    Hn.noConflict = function() {
                        return gt._ === this && (gt._ = He),
                        this
                    }
                    ,
                    Hn.noop = cu,
                    Hn.now = Na,
                    Hn.pad = function(e, t, n) {
                        e = bs(e);
                        var r = (t = gs(t)) ? hn(e) : 0;
                        if (!t || r >= t)
                            return e;
                        var i = (t - r) / 2;
                        return $i(mt(i), n) + e + $i(ht(i), n)
                    }
                    ,
                    Hn.padEnd = function(e, t, n) {
                        e = bs(e);
                        var r = (t = gs(t)) ? hn(e) : 0;
                        return t && r < t ? e + $i(t - r, n) : e
                    }
                    ,
                    Hn.padStart = function(e, t, n) {
                        e = bs(e);
                        var r = (t = gs(t)) ? hn(e) : 0;
                        return t && r < t ? $i(t - r, n) + e : e
                    }
                    ,
                    Hn.parseInt = function(e, t, n) {
                        return n || null == t ? t = 0 : t && (t = +t),
                        An(bs(e).replace(ae, ""), t || 0)
                    }
                    ,
                    Hn.random = function(e, t, n) {
                        if (n && "boolean" != typeof n && wo(e, t, n) && (t = n = i),
                        n === i && ("boolean" == typeof t ? (n = t,
                        t = i) : "boolean" == typeof e && (n = e,
                        e = i)),
                        e === i && t === i ? (e = 0,
                        t = 1) : (e = hs(e),
                        t === i ? (t = e,
                        e = 0) : t = hs(t)),
                        e > t) {
                            var r = e;
                            e = t,
                            t = r
                        }
                        if (n || e % 1 || t % 1) {
                            var o = Tn();
                            return xn(e + o * (t - e + ft("1e-" + ((o + "").length - 1))), t)
                        }
                        return Yr(e, t)
                    }
                    ,
                    Hn.reduce = function(e, t, n) {
                        var r = $a(e) ? Dt : Yt
                          , i = arguments.length < 3;
                        return r(e, co(t, 4), n, i, dr)
                    }
                    ,
                    Hn.reduceRight = function(e, t, n) {
                        var r = $a(e) ? Bt : Yt
                          , i = arguments.length < 3;
                        return r(e, co(t, 4), n, i, hr)
                    }
                    ,
                    Hn.repeat = function(e, t, n) {
                        return t = (n ? wo(e, t, n) : t === i) ? 1 : gs(t),
                        Jr(bs(e), t)
                    }
                    ,
                    Hn.replace = function() {
                        var e = arguments
                          , t = bs(e[0]);
                        return e.length < 3 ? t : t.replace(e[1], e[2])
                    }
                    ,
                    Hn.result = function(e, t, n) {
                        var r = -1
                          , o = (t = xi(t, e)).length;
                        for (o || (o = 1,
                        e = i); ++r < o; ) {
                            var a = null == e ? i : e[Bo(t[r])];
                            a === i && (r = o,
                            a = n),
                            e = Za(a) ? a.call(e) : a
                        }
                        return e
                    }
                    ,
                    Hn.round = _u,
                    Hn.runInContext = e,
                    Hn.sample = function(e) {
                        return ($a(e) ? Zn : Zr)(e)
                    }
                    ,
                    Hn.size = function(e) {
                        if (null == e)
                            return 0;
                        if (Va(e))
                            return us(e) ? hn(e) : e.length;
                        var t = mo(e);
                        return t == S || t == C ? e.size : Dr(e).length
                    }
                    ,
                    Hn.snakeCase = Gs,
                    Hn.some = function(e, t, n) {
                        var r = $a(e) ? qt : oi;
                        return n && wo(e, t, n) && (t = i),
                        r(e, co(t, 3))
                    }
                    ,
                    Hn.sortedIndex = function(e, t) {
                        return ai(e, t)
                    }
                    ,
                    Hn.sortedIndexBy = function(e, t, n) {
                        return si(e, t, co(n, 2))
                    }
                    ,
                    Hn.sortedIndexOf = function(e, t) {
                        var n = null == e ? 0 : e.length;
                        if (n) {
                            var r = ai(e, t);
                            if (r < n && Ha(e[r], t))
                                return r
                        }
                        return -1
                    }
                    ,
                    Hn.sortedLastIndex = function(e, t) {
                        return ai(e, t, !0)
                    }
                    ,
                    Hn.sortedLastIndexBy = function(e, t, n) {
                        return si(e, t, co(n, 2), !0)
                    }
                    ,
                    Hn.sortedLastIndexOf = function(e, t) {
                        if (null == e ? 0 : e.length) {
                            var n = ai(e, t, !0) - 1;
                            if (Ha(e[n], t))
                                return n
                        }
                        return -1
                    }
                    ,
                    Hn.startCase = Ys,
                    Hn.startsWith = function(e, t, n) {
                        return e = bs(e),
                        n = null == n ? 0 : ur(gs(n), 0, e.length),
                        t = li(t),
                        e.slice(n, n + t.length) == t
                    }
                    ,
                    Hn.subtract = Su,
                    Hn.sum = function(e) {
                        return e && e.length ? Jt(e, iu) : 0
                    }
                    ,
                    Hn.sumBy = function(e, t) {
                        return e && e.length ? Jt(e, co(t, 2)) : 0
                    }
                    ,
                    Hn.template = function(e, t, n) {
                        var r = Hn.templateSettings;
                        n && wo(e, t, n) && (t = i),
                        e = bs(e),
                        t = As({}, t, r, Qi);
                        var o, a, s = As({}, t.imports, r.imports, Qi), u = Ps(s), c = en(s, u), l = 0, f = t.interpolate || Ae, p = "__p += '", d = ke((t.escape || Ae).source + "|" + f.source + "|" + (f === ee ? he : Ae).source + "|" + (t.evaluate || Ae).source + "|$", "g"), h = "//# sourceURL=" + (Me.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++st + "]") + "\n";
                        e.replace(d, (function(t, n, r, i, s, u) {
                            return r || (r = i),
                            p += e.slice(l, u).replace(Te, sn),
                            n && (o = !0,
                            p += "' +\n__e(" + n + ") +\n'"),
                            s && (a = !0,
                            p += "';\n" + s + ";\n__p += '"),
                            r && (p += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                            l = u + t.length,
                            t
                        }
                        )),
                        p += "';\n";
                        var g = Me.call(t, "variable") && t.variable;
                        if (g) {
                            if (pe.test(g))
                                throw new _e("Invalid `variable` option passed into `_.template`")
                        } else
                            p = "with (obj) {\n" + p + "\n}\n";
                        p = (a ? p.replace($, "") : p).replace(K, "$1").replace(V, "$1;"),
                        p = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                        var m = Qs((function() {
                            return Se(u, h + "return " + p).apply(i, c)
                        }
                        ));
                        if (m.source = p,
                        Xa(m))
                            throw m;
                        return m
                    }
                    ,
                    Hn.times = function(e, t) {
                        if ((e = gs(e)) < 1 || e > h)
                            return [];
                        var n = m
                          , r = xn(e, m);
                        t = co(t),
                        e -= m;
                        for (var i = Xt(r, t); ++n < e; )
                            t(n);
                        return i
                    }
                    ,
                    Hn.toFinite = hs,
                    Hn.toInteger = gs,
                    Hn.toLength = ms,
                    Hn.toLower = function(e) {
                        return bs(e).toLowerCase()
                    }
                    ,
                    Hn.toNumber = vs,
                    Hn.toSafeInteger = function(e) {
                        return e ? ur(gs(e), -9007199254740991, h) : 0 === e ? e : 0
                    }
                    ,
                    Hn.toString = bs,
                    Hn.toUpper = function(e) {
                        return bs(e).toUpperCase()
                    }
                    ,
                    Hn.trim = function(e, t, n) {
                        if ((e = bs(e)) && (n || t === i))
                            return Zt(e);
                        if (!e || !(t = li(t)))
                            return e;
                        var r = gn(e)
                          , o = gn(t);
                        return Ai(r, nn(r, o), rn(r, o) + 1).join("")
                    }
                    ,
                    Hn.trimEnd = function(e, t, n) {
                        if ((e = bs(e)) && (n || t === i))
                            return e.slice(0, mn(e) + 1);
                        if (!e || !(t = li(t)))
                            return e;
                        var r = gn(e);
                        return Ai(r, 0, rn(r, gn(t)) + 1).join("")
                    }
                    ,
                    Hn.trimStart = function(e, t, n) {
                        if ((e = bs(e)) && (n || t === i))
                            return e.replace(ae, "");
                        if (!e || !(t = li(t)))
                            return e;
                        var r = gn(e);
                        return Ai(r, nn(r, gn(t))).join("")
                    }
                    ,
                    Hn.truncate = function(e, t) {
                        var n = 30
                          , r = "...";
                        if (ts(t)) {
                            var o = "separator"in t ? t.separator : o;
                            n = "length"in t ? gs(t.length) : n,
                            r = "omission"in t ? li(t.omission) : r
                        }
                        var a = (e = bs(e)).length;
                        if (un(e)) {
                            var s = gn(e);
                            a = s.length
                        }
                        if (n >= a)
                            return e;
                        var u = n - hn(r);
                        if (u < 1)
                            return r;
                        var c = s ? Ai(s, 0, u).join("") : e.slice(0, u);
                        if (o === i)
                            return c + r;
                        if (s && (u += c.length - u),
                        as(o)) {
                            if (e.slice(u).search(o)) {
                                var l, f = c;
                                for (o.global || (o = ke(o.source, bs(ge.exec(o)) + "g")),
                                o.lastIndex = 0; l = o.exec(f); )
                                    var p = l.index;
                                c = c.slice(0, p === i ? u : p)
                            }
                        } else if (e.indexOf(li(o), u) != u) {
                            var d = c.lastIndexOf(o);
                            d > -1 && (c = c.slice(0, d))
                        }
                        return c + r
                    }
                    ,
                    Hn.unescape = function(e) {
                        return (e = bs(e)) && J.test(e) ? e.replace(G, vn) : e
                    }
                    ,
                    Hn.uniqueId = function(e) {
                        var t = ++De;
                        return bs(e) + t
                    }
                    ,
                    Hn.upperCase = Js,
                    Hn.upperFirst = Xs,
                    Hn.each = ba,
                    Hn.eachRight = xa,
                    Hn.first = Vo,
                    uu(Hn, (Au = {},
                    wr(Hn, (function(e, t) {
                        Me.call(Hn.prototype, t) || (Au[t] = e)
                    }
                    )),
                    Au), {
                        chain: !1
                    }),
                    Hn.VERSION = "4.17.21",
                    Lt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
                        Hn[e].placeholder = Hn
                    }
                    )),
                    Lt(["drop", "take"], (function(e, t) {
                        $n.prototype[e] = function(n) {
                            n = n === i ? 1 : bn(gs(n), 0);
                            var r = this.__filtered__ && !t ? new $n(this) : this.clone();
                            return r.__filtered__ ? r.__takeCount__ = xn(n, r.__takeCount__) : r.__views__.push({
                                size: xn(n, m),
                                type: e + (r.__dir__ < 0 ? "Right" : "")
                            }),
                            r
                        }
                        ,
                        $n.prototype[e + "Right"] = function(t) {
                            return this.reverse()[e](t).reverse()
                        }
                    }
                    )),
                    Lt(["filter", "map", "takeWhile"], (function(e, t) {
                        var n = t + 1
                          , r = 1 == n || 3 == n;
                        $n.prototype[e] = function(e) {
                            var t = this.clone();
                            return t.__iteratees__.push({
                                iteratee: co(e, 3),
                                type: n
                            }),
                            t.__filtered__ = t.__filtered__ || r,
                            t
                        }
                    }
                    )),
                    Lt(["head", "last"], (function(e, t) {
                        var n = "take" + (t ? "Right" : "");
                        $n.prototype[e] = function() {
                            return this[n](1).value()[0]
                        }
                    }
                    )),
                    Lt(["initial", "tail"], (function(e, t) {
                        var n = "drop" + (t ? "" : "Right");
                        $n.prototype[e] = function() {
                            return this.__filtered__ ? new $n(this) : this[n](1)
                        }
                    }
                    )),
                    $n.prototype.compact = function() {
                        return this.filter(iu)
                    }
                    ,
                    $n.prototype.find = function(e) {
                        return this.filter(e).head()
                    }
                    ,
                    $n.prototype.findLast = function(e) {
                        return this.reverse().find(e)
                    }
                    ,
                    $n.prototype.invokeMap = Xr((function(e, t) {
                        return "function" == typeof e ? new $n(this) : this.map((function(n) {
                            return Or(n, e, t)
                        }
                        ))
                    }
                    )),
                    $n.prototype.reject = function(e) {
                        return this.filter(Ma(co(e)))
                    }
                    ,
                    $n.prototype.slice = function(e, t) {
                        e = gs(e);
                        var n = this;
                        return n.__filtered__ && (e > 0 || t < 0) ? new $n(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)),
                        t !== i && (n = (t = gs(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                        n)
                    }
                    ,
                    $n.prototype.takeRightWhile = function(e) {
                        return this.reverse().takeWhile(e).reverse()
                    }
                    ,
                    $n.prototype.toArray = function() {
                        return this.take(m)
                    }
                    ,
                    wr($n.prototype, (function(e, t) {
                        var n = /^(?:filter|find|map|reject)|While$/.test(t)
                          , r = /^(?:head|last)$/.test(t)
                          , o = Hn[r ? "take" + ("last" == t ? "Right" : "") : t]
                          , a = r || /^find/.test(t);
                        o && (Hn.prototype[t] = function() {
                            var t = this.__wrapped__
                              , s = r ? [1] : arguments
                              , u = t instanceof $n
                              , c = s[0]
                              , l = u || $a(t)
                              , f = function(e) {
                                var t = o.apply(Hn, Mt([e], s));
                                return r && p ? t[0] : t
                            };
                            l && n && "function" == typeof c && 1 != c.length && (u = l = !1);
                            var p = this.__chain__
                              , d = !!this.__actions__.length
                              , h = a && !p
                              , g = u && !d;
                            if (!a && l) {
                                t = g ? t : new $n(this);
                                var m = e.apply(t, s);
                                return m.__actions__.push({
                                    func: ha,
                                    args: [f],
                                    thisArg: i
                                }),
                                new zn(m,p)
                            }
                            return h && g ? e.apply(this, s) : (m = this.thru(f),
                            h ? r ? m.value()[0] : m.value() : m)
                        }
                        )
                    }
                    )),
                    Lt(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                        var t = Oe[e]
                          , n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
                          , r = /^(?:pop|shift)$/.test(e);
                        Hn.prototype[e] = function() {
                            var e = arguments;
                            if (r && !this.__chain__) {
                                var i = this.value();
                                return t.apply($a(i) ? i : [], e)
                            }
                            return this[n]((function(n) {
                                return t.apply($a(n) ? n : [], e)
                            }
                            ))
                        }
                    }
                    )),
                    wr($n.prototype, (function(e, t) {
                        var n = Hn[t];
                        if (n) {
                            var r = n.name + "";
                            Me.call(Pn, r) || (Pn[r] = []),
                            Pn[r].push({
                                name: t,
                                func: n
                            })
                        }
                    }
                    )),
                    Pn[Hi(i, 2).name] = [{
                        name: "wrapper",
                        func: i
                    }],
                    $n.prototype.clone = function() {
                        var e = new $n(this.__wrapped__);
                        return e.__actions__ = Ci(this.__actions__),
                        e.__dir__ = this.__dir__,
                        e.__filtered__ = this.__filtered__,
                        e.__iteratees__ = Ci(this.__iteratees__),
                        e.__takeCount__ = this.__takeCount__,
                        e.__views__ = Ci(this.__views__),
                        e
                    }
                    ,
                    $n.prototype.reverse = function() {
                        if (this.__filtered__) {
                            var e = new $n(this);
                            e.__dir__ = -1,
                            e.__filtered__ = !0
                        } else
                            (e = this.clone()).__dir__ *= -1;
                        return e
                    }
                    ,
                    $n.prototype.value = function() {
                        var e = this.__wrapped__.value()
                          , t = this.__dir__
                          , n = $a(e)
                          , r = t < 0
                          , i = n ? e.length : 0
                          , o = function(e, t, n) {
                            var r = -1
                              , i = n.length;
                            for (; ++r < i; ) {
                                var o = n[r]
                                  , a = o.size;
                                switch (o.type) {
                                case "drop":
                                    e += a;
                                    break;
                                case "dropRight":
                                    t -= a;
                                    break;
                                case "take":
                                    t = xn(t, e + a);
                                    break;
                                case "takeRight":
                                    e = bn(e, t - a)
                                }
                            }
                            return {
                                start: e,
                                end: t
                            }
                        }(0, i, this.__views__)
                          , a = o.start
                          , s = o.end
                          , u = s - a
                          , c = r ? s : a - 1
                          , l = this.__iteratees__
                          , f = l.length
                          , p = 0
                          , d = xn(u, this.__takeCount__);
                        if (!n || !r && i == u && d == u)
                            return gi(e, this.__actions__);
                        var h = [];
                        e: for (; u-- && p < d; ) {
                            for (var g = -1, m = e[c += t]; ++g < f; ) {
                                var v = l[g]
                                  , y = v.iteratee
                                  , b = v.type
                                  , x = y(m);
                                if (2 == b)
                                    m = x;
                                else if (!x) {
                                    if (1 == b)
                                        continue e;
                                    break e
                                }
                            }
                            h[p++] = m
                        }
                        return h
                    }
                    ,
                    Hn.prototype.at = ga,
                    Hn.prototype.chain = function() {
                        return da(this)
                    }
                    ,
                    Hn.prototype.commit = function() {
                        return new zn(this.value(),this.__chain__)
                    }
                    ,
                    Hn.prototype.next = function() {
                        this.__values__ === i && (this.__values__ = ds(this.value()));
                        var e = this.__index__ >= this.__values__.length;
                        return {
                            done: e,
                            value: e ? i : this.__values__[this.__index__++]
                        }
                    }
                    ,
                    Hn.prototype.plant = function(e) {
                        for (var t, n = this; n instanceof Un; ) {
                            var r = Fo(n);
                            r.__index__ = 0,
                            r.__values__ = i,
                            t ? o.__wrapped__ = r : t = r;
                            var o = r;
                            n = n.__wrapped__
                        }
                        return o.__wrapped__ = e,
                        t
                    }
                    ,
                    Hn.prototype.reverse = function() {
                        var e = this.__wrapped__;
                        if (e instanceof $n) {
                            var t = e;
                            return this.__actions__.length && (t = new $n(this)),
                            (t = t.reverse()).__actions__.push({
                                func: ha,
                                args: [ta],
                                thisArg: i
                            }),
                            new zn(t,this.__chain__)
                        }
                        return this.thru(ta)
                    }
                    ,
                    Hn.prototype.toJSON = Hn.prototype.valueOf = Hn.prototype.value = function() {
                        return gi(this.__wrapped__, this.__actions__)
                    }
                    ,
                    Hn.prototype.first = Hn.prototype.head,
                    Ze && (Hn.prototype[Ze] = function() {
                        return this
                    }
                    ),
                    Hn
                }();
                gt._ = yn,
                (r = function() {
                    return yn
                }
                .call(t, n, t, e)) === i || (e.exports = r)
            }
            .call(this)
        },
        5675: (e, t, n) => {
            "use strict";
            var r = n(2665)
              , i = Object.create
              , o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t, n = 0, a = 1, s = i(null), u = i(null), c = 0;
                return e = r(e),
                {
                    hit: function(r) {
                        var i = u[r]
                          , l = ++c;
                        if (s[l] = r,
                        u[r] = l,
                        !i) {
                            if (++n <= e)
                                return;
                            return r = s[a],
                            t(r),
                            r
                        }
                        if (delete s[i],
                        a === i)
                            for (; !o.call(s, ++a); )
                                continue
                    },
                    delete: t = function(e) {
                        var t = u[e];
                        if (t && (delete s[t],
                        delete u[e],
                        --n,
                        a === t)) {
                            if (!n)
                                return c = 0,
                                void (a = 1);
                            for (; !o.call(s, ++a); )
                                continue
                        }
                    }
                    ,
                    clear: function() {
                        n = 0,
                        a = 1,
                        s = i(null),
                        u = i(null),
                        c = 0
                    }
                }
            }
        }
        ,
        3: (e, t, n) => {
            var r = n(2834)
              , i = /^\*\./
              , o = /\.\*$/
              , a = /\/.{0,10000}$/
              , s = /:(\d+)$/
              , u = /^(\w+):\/\//
              , c = /\\\.\\\*/g;
            function l(e) {
                if (!e || "string" != typeof e)
                    return null;
                var t = e.match(u);
                t = t ? t[1] : null;
                var n = (e = (e = e.replace(u, "")).replace(a, "")).match(s);
                return n = n ? parseInt(n[1], 10) : null,
                {
                    protocol: t,
                    url: e = e.replace(s, ""),
                    port: n
                }
            }
            e.exports = function(e, t) {
                return Array.isArray(t) || (t = [t]),
                t.some((t => function(e, t) {
                    if (!e || !t)
                        return !1;
                    var n = !t.protocol || !e.protocol || t.protocol === e.protocol
                      , i = !t.port || e.port === t.port
                      , o = t.url.startsWith(".")
                      , a = t.url.endsWith(".")
                      , s = "^";
                    return o && (s += ".+"),
                    s += r(t.url).replace(c, "\\..*"),
                    a && (s += ".+"),
                    s += "$",
                    new RegExp(s).test(e.url) && n && i
                }(l(e), function(e) {
                    var t = l(e);
                    return t && (t.url = t.url.replace(i, "."),
                    t.url = t.url.replace(o, ".")),
                    t
                }(t))))
            }
        }
        ,
        6821: (e, t, n) => {
            "use strict";
            var r = n(4645)
              , i = n(498)
              , o = n(6069)
              , a = n(5378)
              , s = n(6826)
              , u = Array.prototype.slice
              , c = Function.prototype.apply
              , l = Object.create;
            n(3923).async = function(e, t) {
                var n, f, p, d = l(null), h = l(null), g = t.memoized, m = t.original;
                t.memoized = a((function(e) {
                    var t = arguments
                      , r = t[t.length - 1];
                    return "function" == typeof r && (n = r,
                    t = u.call(t, 0, -1)),
                    g.apply(f = this, p = t)
                }
                ), g);
                try {
                    o(t.memoized, g)
                } catch (e) {}
                t.on("get", (function(e) {
                    var r, i, o;
                    if (n) {
                        if (d[e])
                            return "function" == typeof d[e] ? d[e] = [d[e], n] : d[e].push(n),
                            void (n = null);
                        r = n,
                        i = f,
                        o = p,
                        n = f = p = null,
                        s((function() {
                            var a;
                            hasOwnProperty.call(h, e) ? (a = h[e],
                            t.emit("getasync", e, o, i),
                            c.call(r, a.context, a.args)) : (n = r,
                            f = i,
                            p = o,
                            g.apply(i, o))
                        }
                        ))
                    }
                }
                )),
                t.original = function() {
                    var e, i, o, a;
                    return n ? (e = r(arguments),
                    i = function e(n) {
                        var i, o, u = e.id;
                        if (null != u) {
                            if (delete e.id,
                            i = d[u],
                            delete d[u],
                            i)
                                return o = r(arguments),
                                t.has(u) && (n ? t.delete(u) : (h[u] = {
                                    context: this,
                                    args: o
                                },
                                t.emit("setasync", u, "function" == typeof i ? 1 : i.length))),
                                "function" == typeof i ? a = c.call(i, this, o) : i.forEach((function(e) {
                                    a = c.call(e, this, o)
                                }
                                ), this),
                                a
                        } else
                            s(c.bind(e, this, arguments))
                    }
                    ,
                    o = n,
                    n = f = p = null,
                    e.push(i),
                    a = c.call(m, this, e),
                    i.cb = o,
                    n = i,
                    a) : c.call(m, this, arguments)
                }
                ,
                t.on("set", (function(e) {
                    n ? (d[e] ? "function" == typeof d[e] ? d[e] = [d[e], n.cb] : d[e].push(n.cb) : d[e] = n.cb,
                    delete n.cb,
                    n.id = e,
                    n = null) : t.delete(e)
                }
                )),
                t.on("delete", (function(e) {
                    var n;
                    hasOwnProperty.call(d, e) || h[e] && (n = h[e],
                    delete h[e],
                    t.emit("deleteasync", e, u.call(n.args, 1)))
                }
                )),
                t.on("clear", (function() {
                    var e = h;
                    h = l(null),
                    t.emit("clearasync", i(e, (function(e) {
                        return u.call(e.args, 1)
                    }
                    )))
                }
                ))
            }
        }
        ,
        8839: (e, t, n) => {
            "use strict";
            var r = n(5499)
              , i = n(5921)
              , o = n(3923)
              , a = Function.prototype.apply;
            o.dispose = function(e, t, n) {
                var s;
                if (r(e),
                n.async && o.async || n.promise && o.promise)
                    return t.on("deleteasync", s = function(t, n) {
                        a.call(e, null, n)
                    }
                    ),
                    void t.on("clearasync", (function(e) {
                        i(e, (function(e, t) {
                            s(t, e)
                        }
                        ))
                    }
                    ));
                t.on("delete", s = function(t, n) {
                    e(n)
                }
                ),
                t.on("clear", (function(e) {
                    i(e, (function(e, t) {
                        s(t, e)
                    }
                    ))
                }
                ))
            }
        }
        ,
        9162: (e, t, n) => {
            "use strict";
            var r = n(4645)
              , i = n(5921)
              , o = n(6826)
              , a = n(7297)
              , s = n(569)
              , u = n(3923)
              , c = Function.prototype
              , l = Math.max
              , f = Math.min
              , p = Object.create;
            u.maxAge = function(e, t, n) {
                var d, h, g, m;
                (e = s(e)) && (d = p(null),
                h = n.async && u.async || n.promise && u.promise ? "async" : "",
                t.on("set" + h, (function(n) {
                    d[n] = setTimeout((function() {
                        t.delete(n)
                    }
                    ), e),
                    "function" == typeof d[n].unref && d[n].unref(),
                    m && (m[n] && "nextTick" !== m[n] && clearTimeout(m[n]),
                    m[n] = setTimeout((function() {
                        delete m[n]
                    }
                    ), g),
                    "function" == typeof m[n].unref && m[n].unref())
                }
                )),
                t.on("delete" + h, (function(e) {
                    clearTimeout(d[e]),
                    delete d[e],
                    m && ("nextTick" !== m[e] && clearTimeout(m[e]),
                    delete m[e])
                }
                )),
                n.preFetch && (g = !0 === n.preFetch || isNaN(n.preFetch) ? .333 : l(f(Number(n.preFetch), 1), 0)) && (m = {},
                g = (1 - g) * e,
                t.on("get" + h, (function(e, i, s) {
                    m[e] || (m[e] = "nextTick",
                    o((function() {
                        var o;
                        "nextTick" === m[e] && (delete m[e],
                        t.delete(e),
                        n.async && (i = r(i)).push(c),
                        o = t.memoized.apply(s, i),
                        n.promise && a(o) && ("function" == typeof o.done ? o.done(c, c) : o.then(c, c)))
                    }
                    )))
                }
                ))),
                t.on("clear" + h, (function() {
                    i(d, (function(e) {
                        clearTimeout(e)
                    }
                    )),
                    d = {},
                    m && (i(m, (function(e) {
                        "nextTick" !== e && clearTimeout(e)
                    }
                    )),
                    m = {})
                }
                )))
            }
        }
        ,
        7260: (e, t, n) => {
            "use strict";
            var r = n(2665)
              , i = n(5675)
              , o = n(3923);
            o.max = function(e, t, n) {
                var a, s, u;
                (e = r(e)) && (s = i(e),
                a = n.async && o.async || n.promise && o.promise ? "async" : "",
                t.on("set" + a, u = function(e) {
                    void 0 !== (e = s.hit(e)) && t.delete(e)
                }
                ),
                t.on("get" + a, u),
                t.on("delete" + a, s.delete),
                t.on("clear" + a, s.clear))
            }
        }
        ,
        9515: (e, t, n) => {
            "use strict";
            var r = n(498)
              , i = n(7724)
              , o = n(7292)
              , a = n(9438)
              , s = n(7297)
              , u = n(6826)
              , c = Object.create
              , l = i("then", "then:finally", "done", "done:finally");
            n(3923).promise = function(e, t) {
                var n = c(null)
                  , i = c(null)
                  , f = c(null);
                if (!0 === e)
                    e = null;
                else if (e = o(e),
                !l[e])
                    throw new TypeError("'" + a(e) + "' is not valid promise mode");
                t.on("set", (function(r, o, a) {
                    var c = !1;
                    if (!s(a))
                        return i[r] = a,
                        void t.emit("setasync", r, 1);
                    n[r] = 1,
                    f[r] = a;
                    var l = function(e) {
                        var o = n[r];
                        if (c)
                            throw new Error("Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.");
                        o && (delete n[r],
                        i[r] = e,
                        t.emit("setasync", r, o))
                    }
                      , p = function() {
                        c = !0,
                        n[r] && (delete n[r],
                        delete f[r],
                        t.delete(r))
                    }
                      , d = e;
                    if (d || (d = "then"),
                    "then" === d) {
                        var h = function() {
                            u(p)
                        };
                        "function" == typeof (a = a.then((function(e) {
                            u(l.bind(this, e))
                        }
                        ), h)).finally && a.finally(h)
                    } else if ("done" === d) {
                        if ("function" != typeof a.done)
                            throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
                        a.done(l, p)
                    } else if ("done:finally" === d) {
                        if ("function" != typeof a.done)
                            throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
                        if ("function" != typeof a.finally)
                            throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
                        a.done(l),
                        a.finally(p)
                    }
                }
                )),
                t.on("get", (function(e, r, i) {
                    var o;
                    if (n[e])
                        ++n[e];
                    else {
                        o = f[e];
                        var a = function() {
                            t.emit("getasync", e, r, i)
                        };
                        s(o) ? "function" == typeof o.done ? o.done(a) : o.then((function() {
                            u(a)
                        }
                        )) : a()
                    }
                }
                )),
                t.on("delete", (function(e) {
                    if (delete f[e],
                    n[e])
                        delete n[e];
                    else if (hasOwnProperty.call(i, e)) {
                        var r = i[e];
                        delete i[e],
                        t.emit("deleteasync", e, [r])
                    }
                }
                )),
                t.on("clear", (function() {
                    var e = i;
                    i = c(null),
                    n = c(null),
                    f = c(null),
                    t.emit("clearasync", r(e, (function(e) {
                        return [e]
                    }
                    )))
                }
                ))
            }
        }
        ,
        6690: (e, t, n) => {
            "use strict";
            var r = n(8263)
              , i = n(3923)
              , o = Object.create
              , a = Object.defineProperties;
            i.refCounter = function(e, t, n) {
                var s, u;
                s = o(null),
                u = n.async && i.async || n.promise && i.promise ? "async" : "",
                t.on("set" + u, (function(e, t) {
                    s[e] = t || 1
                }
                )),
                t.on("get" + u, (function(e) {
                    ++s[e]
                }
                )),
                t.on("delete" + u, (function(e) {
                    delete s[e]
                }
                )),
                t.on("clear" + u, (function() {
                    s = {}
                }
                )),
                a(t.memoized, {
                    deleteRef: r((function() {
                        var e = t.get(arguments);
                        return null === e ? null : s[e] ? !--s[e] && (t.delete(e),
                        !0) : null
                    }
                    )),
                    getRefCount: r((function() {
                        var e = t.get(arguments);
                        return null === e ? 0 : s[e] ? s[e] : 0
                    }
                    ))
                })
            }
        }
        ,
        3614: (e, t, n) => {
            "use strict";
            var r = n(148)
              , i = n(1659)
              , o = n(3874);
            e.exports = function(e) {
                var t, a = r(arguments[1]);
                return a.normalizer || 0 !== (t = a.length = i(a.length, e.length, a.async)) && (a.primitive ? !1 === t ? a.normalizer = n(2404) : t > 1 && (a.normalizer = n(9634)(t)) : a.normalizer = !1 === t ? n(8521)() : 1 === t ? n(4895)() : n(3870)(t)),
                a.async && n(6821),
                a.promise && n(9515),
                a.dispose && n(8839),
                a.maxAge && n(9162),
                a.max && n(7260),
                a.refCounter && n(6690),
                o(e, a)
            }
        }
        ,
        4489: (e, t, n) => {
            "use strict";
            var r = n(3484)
              , i = n(5378)
              , o = n(8263)
              , a = n(3068).methods
              , s = n(8883)
              , u = n(512)
              , c = Function.prototype.apply
              , l = Function.prototype.call
              , f = Object.create
              , p = Object.defineProperties
              , d = a.on
              , h = a.emit;
            e.exports = function(e, t, n) {
                var a, g, m, v, y, b, x, w, A, T, _, S, E, N, k, L = f(null);
                return g = !1 !== t ? t : isNaN(e.length) ? 1 : e.length,
                n.normalizer && (T = u(n.normalizer),
                m = T.get,
                v = T.set,
                y = T.delete,
                b = T.clear),
                null != n.resolvers && (k = s(n.resolvers)),
                N = m ? i((function(t) {
                    var n, i, o = arguments;
                    if (k && (o = k(o)),
                    null !== (n = m(o)) && hasOwnProperty.call(L, n))
                        return _ && a.emit("get", n, o, this),
                        L[n];
                    if (i = 1 === o.length ? l.call(e, this, o[0]) : c.call(e, this, o),
                    null === n) {
                        if (null !== (n = m(o)))
                            throw r("Circular invocation", "CIRCULAR_INVOCATION");
                        n = v(o)
                    } else if (hasOwnProperty.call(L, n))
                        throw r("Circular invocation", "CIRCULAR_INVOCATION");
                    return L[n] = i,
                    S && a.emit("set", n, null, i),
                    i
                }
                ), g) : 0 === t ? function() {
                    var t;
                    if (hasOwnProperty.call(L, "data"))
                        return _ && a.emit("get", "data", arguments, this),
                        L.data;
                    if (t = arguments.length ? c.call(e, this, arguments) : l.call(e, this),
                    hasOwnProperty.call(L, "data"))
                        throw r("Circular invocation", "CIRCULAR_INVOCATION");
                    return L.data = t,
                    S && a.emit("set", "data", null, t),
                    t
                }
                : function(t) {
                    var n, i, o = arguments;
                    if (k && (o = k(arguments)),
                    i = String(o[0]),
                    hasOwnProperty.call(L, i))
                        return _ && a.emit("get", i, o, this),
                        L[i];
                    if (n = 1 === o.length ? l.call(e, this, o[0]) : c.call(e, this, o),
                    hasOwnProperty.call(L, i))
                        throw r("Circular invocation", "CIRCULAR_INVOCATION");
                    return L[i] = n,
                    S && a.emit("set", i, null, n),
                    n
                }
                ,
                a = {
                    original: e,
                    memoized: N,
                    profileName: n.profileName,
                    get: function(e) {
                        return k && (e = k(e)),
                        m ? m(e) : String(e[0])
                    },
                    has: function(e) {
                        return hasOwnProperty.call(L, e)
                    },
                    delete: function(e) {
                        var t;
                        hasOwnProperty.call(L, e) && (y && y(e),
                        t = L[e],
                        delete L[e],
                        E && a.emit("delete", e, t))
                    },
                    clear: function() {
                        var e = L;
                        b && b(),
                        L = f(null),
                        a.emit("clear", e)
                    },
                    on: function(e, t) {
                        return "get" === e ? _ = !0 : "set" === e ? S = !0 : "delete" === e && (E = !0),
                        d.call(this, e, t)
                    },
                    emit: h,
                    updateEnv: function() {
                        e = a.original
                    }
                },
                x = m ? i((function(e) {
                    var t, n = arguments;
                    k && (n = k(n)),
                    null !== (t = m(n)) && a.delete(t)
                }
                ), g) : 0 === t ? function() {
                    return a.delete("data")
                }
                : function(e) {
                    return k && (e = k(arguments)[0]),
                    a.delete(e)
                }
                ,
                w = i((function() {
                    var e, n = arguments;
                    return 0 === t ? L.data : (k && (n = k(n)),
                    e = m ? m(n) : String(n[0]),
                    L[e])
                }
                )),
                A = i((function() {
                    var e, n = arguments;
                    return 0 === t ? a.has("data") : (k && (n = k(n)),
                    null !== (e = m ? m(n) : String(n[0])) && a.has(e))
                }
                )),
                p(N, {
                    __memoized__: o(!0),
                    delete: o(x),
                    clear: o(a.clear),
                    _get: o(w),
                    _has: o(A)
                }),
                a
            }
        }
        ,
        3923: () => {}
        ,
        1659: (e, t, n) => {
            "use strict";
            var r = n(2665);
            e.exports = function(e, t, n) {
                var i;
                return isNaN(e) ? (i = t) >= 0 ? n && i ? i - 1 : i : 1 : !1 !== e && r(e)
            }
        }
        ,
        512: (e, t, n) => {
            "use strict";
            var r = n(5499);
            e.exports = function(e) {
                var t;
                return "function" == typeof e ? {
                    set: e,
                    get: e
                } : (t = {
                    get: r(e.get)
                },
                void 0 !== e.set ? (t.set = r(e.set),
                e.delete && (t.delete = r(e.delete)),
                e.clear && (t.clear = r(e.clear)),
                t) : (t.set = t.get,
                t))
            }
        }
        ,
        8883: (e, t, n) => {
            "use strict";
            var r, i = n(7391), o = n(9762), a = n(5499), s = Array.prototype.slice;
            r = function(e) {
                return this.map((function(t, n) {
                    return t ? t(e[n]) : e[n]
                }
                )).concat(s.call(e, this.length))
            }
            ,
            e.exports = function(e) {
                return (e = i(e)).forEach((function(e) {
                    o(e) && a(e)
                }
                )),
                r.bind(e)
            }
        }
        ,
        4895: (e, t, n) => {
            "use strict";
            var r = n(7910);
            e.exports = function() {
                var e = 0
                  , t = []
                  , n = [];
                return {
                    get: function(e) {
                        var i = r.call(t, e[0]);
                        return -1 === i ? null : n[i]
                    },
                    set: function(r) {
                        return t.push(r[0]),
                        n.push(++e),
                        e
                    },
                    delete: function(e) {
                        var i = r.call(n, e);
                        -1 !== i && (t.splice(i, 1),
                        n.splice(i, 1))
                    },
                    clear: function() {
                        t = [],
                        n = []
                    }
                }
            }
        }
        ,
        3870: (e, t, n) => {
            "use strict";
            var r = n(7910)
              , i = Object.create;
            e.exports = function(e) {
                var t = 0
                  , n = [[], []]
                  , o = i(null);
                return {
                    get: function(t) {
                        for (var i, o = 0, a = n; o < e - 1; ) {
                            if (-1 === (i = r.call(a[0], t[o])))
                                return null;
                            a = a[1][i],
                            ++o
                        }
                        return -1 === (i = r.call(a[0], t[o])) ? null : a[1][i] || null
                    },
                    set: function(i) {
                        for (var a, s = 0, u = n; s < e - 1; )
                            -1 === (a = r.call(u[0], i[s])) && (a = u[0].push(i[s]) - 1,
                            u[1].push([[], []])),
                            u = u[1][a],
                            ++s;
                        return -1 === (a = r.call(u[0], i[s])) && (a = u[0].push(i[s]) - 1),
                        u[1][a] = ++t,
                        o[t] = i,
                        t
                    },
                    delete: function(t) {
                        for (var i, a = 0, s = n, u = [], c = o[t]; a < e - 1; ) {
                            if (-1 === (i = r.call(s[0], c[a])))
                                return;
                            u.push(s, i),
                            s = s[1][i],
                            ++a
                        }
                        if (-1 !== (i = r.call(s[0], c[a]))) {
                            for (t = s[1][i],
                            s[0].splice(i, 1),
                            s[1].splice(i, 1); !s[0].length && u.length; )
                                i = u.pop(),
                                (s = u.pop())[0].splice(i, 1),
                                s[1].splice(i, 1);
                            delete o[t]
                        }
                    },
                    clear: function() {
                        n = [[], []],
                        o = i(null)
                    }
                }
            }
        }
        ,
        9634: e => {
            "use strict";
            e.exports = function(e) {
                return e ? function(t) {
                    for (var n = String(t[0]), r = 0, i = e; --i; )
                        n += "" + t[++r];
                    return n
                }
                : function() {
                    return ""
                }
            }
        }
        ,
        8521: (e, t, n) => {
            "use strict";
            var r = n(7910)
              , i = Object.create;
            e.exports = function() {
                var e = 0
                  , t = []
                  , n = i(null);
                return {
                    get: function(e) {
                        var n, i = 0, o = t, a = e.length;
                        if (0 === a)
                            return o[a] || null;
                        if (o = o[a]) {
                            for (; i < a - 1; ) {
                                if (-1 === (n = r.call(o[0], e[i])))
                                    return null;
                                o = o[1][n],
                                ++i
                            }
                            return -1 === (n = r.call(o[0], e[i])) ? null : o[1][n] || null
                        }
                        return null
                    },
                    set: function(i) {
                        var o, a = 0, s = t, u = i.length;
                        if (0 === u)
                            s[u] = ++e;
                        else {
                            for (s[u] || (s[u] = [[], []]),
                            s = s[u]; a < u - 1; )
                                -1 === (o = r.call(s[0], i[a])) && (o = s[0].push(i[a]) - 1,
                                s[1].push([[], []])),
                                s = s[1][o],
                                ++a;
                            -1 === (o = r.call(s[0], i[a])) && (o = s[0].push(i[a]) - 1),
                            s[1][o] = ++e
                        }
                        return n[e] = i,
                        e
                    },
                    delete: function(e) {
                        var i, o = 0, a = t, s = n[e], u = s.length, c = [];
                        if (0 === u)
                            delete a[u];
                        else if (a = a[u]) {
                            for (; o < u - 1; ) {
                                if (-1 === (i = r.call(a[0], s[o])))
                                    return;
                                c.push(a, i),
                                a = a[1][i],
                                ++o
                            }
                            if (-1 === (i = r.call(a[0], s[o])))
                                return;
                            for (e = a[1][i],
                            a[0].splice(i, 1),
                            a[1].splice(i, 1); !a[0].length && c.length; )
                                i = c.pop(),
                                (a = c.pop())[0].splice(i, 1),
                                a[1].splice(i, 1)
                        }
                        delete n[e]
                    },
                    clear: function() {
                        t = [],
                        n = i(null)
                    }
                }
            }
        }
        ,
        2404: e => {
            "use strict";
            e.exports = function(e) {
                var t, n, r = e.length;
                if (!r)
                    return "";
                for (t = String(e[n = 0]); --r; )
                    t += "" + e[++n];
                return t
            }
        }
        ,
        3874: (e, t, n) => {
            "use strict";
            var r = n(5499)
              , i = n(5921)
              , o = n(3923)
              , a = n(4489)
              , s = n(1659);
            e.exports = function e(t) {
                var n, u, c;
                if (r(t),
                (n = Object(arguments[1])).async && n.promise)
                    throw new Error("Options 'async' and 'promise' cannot be used together");
                return hasOwnProperty.call(t, "__memoized__") && !n.force ? t : (u = s(n.length, t.length, n.async && o.async),
                c = a(t, u, n),
                i(o, (function(e, t) {
                    n[t] && e(n[t], c, n)
                }
                )),
                e.__profiler__ && e.__profiler__(c),
                c.updateEnv(),
                c.memoized)
            }
        }
        ,
        6826: e => {
            "use strict";
            var t = function(e) {
                if ("function" != typeof e)
                    throw new TypeError(e + " is not a function");
                return e
            }
              , n = function(e) {
                var n, r, i = document.createTextNode(""), o = 0;
                return new e((function() {
                    var e;
                    if (n)
                        r && (n = r.concat(n));
                    else {
                        if (!r)
                            return;
                        n = r
                    }
                    if (r = n,
                    n = null,
                    "function" == typeof r)
                        return e = r,
                        r = null,
                        void e();
                    for (i.data = o = ++o % 2; r; )
                        e = r.shift(),
                        r.length || (r = null),
                        e()
                }
                )).observe(i, {
                    characterData: !0
                }),
                function(e) {
                    t(e),
                    n ? "function" == typeof n ? n = [n, e] : n.push(e) : (n = e,
                    i.data = o = ++o % 2)
                }
            };
            e.exports = function() {
                if ("object" == typeof process && process && "function" == typeof process.nextTick)
                    return process.nextTick;
                if ("function" == typeof queueMicrotask)
                    return function(e) {
                        queueMicrotask(t(e))
                    }
                    ;
                if ("object" == typeof document && document) {
                    if ("function" == typeof MutationObserver)
                        return n(MutationObserver);
                    if ("function" == typeof WebKitMutationObserver)
                        return n(WebKitMutationObserver)
                }
                return "function" == typeof setImmediate ? function(e) {
                    setImmediate(t(e))
                }
                : "function" == typeof setTimeout || "object" == typeof setTimeout ? function(e) {
                    setTimeout(t(e), 0)
                }
                : null
            }()
        }
        ,
        7452: e => {
            var t = function(e) {
                "use strict";
                var t, n = Object.prototype, r = n.hasOwnProperty, i = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                }
                , o = "function" == typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag";
                function c(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    e[t]
                }
                try {
                    c({}, "")
                } catch (e) {
                    c = function(e, t, n) {
                        return e[t] = n
                    }
                }
                function l(e, t, n, r) {
                    var o = t && t.prototype instanceof v ? t : v
                      , a = Object.create(o.prototype)
                      , s = new C(r || []);
                    return i(a, "_invoke", {
                        value: E(e, n, s)
                    }),
                    a
                }
                function f(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var p = "suspendedStart"
                  , d = "suspendedYield"
                  , h = "executing"
                  , g = "completed"
                  , m = {};
                function v() {}
                function y() {}
                function b() {}
                var x = {};
                c(x, a, (function() {
                    return this
                }
                ));
                var w = Object.getPrototypeOf
                  , A = w && w(w(O([])));
                A && A !== n && r.call(A, a) && (x = A);
                var T = b.prototype = v.prototype = Object.create(x);
                function _(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        c(e, t, (function(e) {
                            return this._invoke(t, e)
                        }
                        ))
                    }
                    ))
                }
                function S(e, t) {
                    function n(i, o, a, s) {
                        var u = f(e[i], e, o);
                        if ("throw" !== u.type) {
                            var c = u.arg
                              , l = c.value;
                            return l && "object" == typeof l && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                                n("next", e, a, s)
                            }
                            ), (function(e) {
                                n("throw", e, a, s)
                            }
                            )) : t.resolve(l).then((function(e) {
                                c.value = e,
                                a(c)
                            }
                            ), (function(e) {
                                return n("throw", e, a, s)
                            }
                            ))
                        }
                        s(u.arg)
                    }
                    var o;
                    i(this, "_invoke", {
                        value: function(e, r) {
                            function i() {
                                return new t((function(t, i) {
                                    n(e, r, t, i)
                                }
                                ))
                            }
                            return o = o ? o.then(i, i) : i()
                        }
                    })
                }
                function E(e, t, n) {
                    var r = p;
                    return function(i, o) {
                        if (r === h)
                            throw new Error("Generator is already running");
                        if (r === g) {
                            if ("throw" === i)
                                throw o;
                            return P()
                        }
                        for (n.method = i,
                        n.arg = o; ; ) {
                            var a = n.delegate;
                            if (a) {
                                var s = N(a, n);
                                if (s) {
                                    if (s === m)
                                        continue;
                                    return s
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === p)
                                    throw r = g,
                                    n.arg;
                                n.dispatchException(n.arg)
                            } else
                                "return" === n.method && n.abrupt("return", n.arg);
                            r = h;
                            var u = f(e, t, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? g : d,
                                u.arg === m)
                                    continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (r = g,
                            n.method = "throw",
                            n.arg = u.arg)
                        }
                    }
                }
                function N(e, n) {
                    var r = n.method
                      , i = e.iterator[r];
                    if (i === t)
                        return n.delegate = null,
                        "throw" === r && e.iterator.return && (n.method = "return",
                        n.arg = t,
                        N(e, n),
                        "throw" === n.method) || "return" !== r && (n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                        m;
                    var o = f(i, e.iterator, n.arg);
                    if ("throw" === o.type)
                        return n.method = "throw",
                        n.arg = o.arg,
                        n.delegate = null,
                        m;
                    var a = o.arg;
                    return a ? a.done ? (n[e.resultName] = a.value,
                    n.next = e.nextLoc,
                    "return" !== n.method && (n.method = "next",
                    n.arg = t),
                    n.delegate = null,
                    m) : a : (n.method = "throw",
                    n.arg = new TypeError("iterator result is not an object"),
                    n.delegate = null,
                    m)
                }
                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]),
                    2 in e && (t.finallyLoc = e[2],
                    t.afterLoc = e[3]),
                    this.tryEntries.push(t)
                }
                function L(e) {
                    var t = e.completion || {};
                    t.type = "normal",
                    delete t.arg,
                    e.completion = t
                }
                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    e.forEach(k, this),
                    this.reset(!0)
                }
                function O(e) {
                    if (e) {
                        var n = e[a];
                        if (n)
                            return n.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var i = -1
                              , o = function n() {
                                for (; ++i < e.length; )
                                    if (r.call(e, i))
                                        return n.value = e[i],
                                        n.done = !1,
                                        n;
                                return n.value = t,
                                n.done = !0,
                                n
                            };
                            return o.next = o
                        }
                    }
                    return {
                        next: P
                    }
                }
                function P() {
                    return {
                        value: t,
                        done: !0
                    }
                }
                return y.prototype = b,
                i(T, "constructor", {
                    value: b,
                    configurable: !0
                }),
                i(b, "constructor", {
                    value: y,
                    configurable: !0
                }),
                y.displayName = c(b, u, "GeneratorFunction"),
                e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
                }
                ,
                e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b,
                    c(e, u, "GeneratorFunction")),
                    e.prototype = Object.create(T),
                    e
                }
                ,
                e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }
                ,
                _(S.prototype),
                c(S.prototype, s, (function() {
                    return this
                }
                )),
                e.AsyncIterator = S,
                e.async = function(t, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new S(l(t, n, r, i),o);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }
                    ))
                }
                ,
                _(T),
                c(T, u, "Generator"),
                c(T, a, (function() {
                    return this
                }
                )),
                c(T, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                e.keys = function(e) {
                    var t = Object(e)
                      , n = [];
                    for (var r in t)
                        n.push(r);
                    return n.reverse(),
                    function e() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in t)
                                return e.value = r,
                                e.done = !1,
                                e
                        }
                        return e.done = !0,
                        e
                    }
                }
                ,
                e.values = O,
                C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = t,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = t,
                        this.tryEntries.forEach(L),
                        !e)
                            for (var n in this)
                                "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type)
                            throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done)
                            throw e;
                        var n = this;
                        function i(r, i) {
                            return s.type = "throw",
                            s.arg = e,
                            n.next = r,
                            i && (n.method = "next",
                            n.arg = t),
                            !!i
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o]
                              , s = a.completion;
                            if ("root" === a.tryLoc)
                                return i("end");
                            if (a.tryLoc <= this.prev) {
                                var u = r.call(a, "catchLoc")
                                  , c = r.call(a, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < a.catchLoc)
                                        return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return i(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc)
                                        return i(a.catchLoc, !0)
                                } else {
                                    if (!c)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc)
                                        return i(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = e,
                        a.arg = t,
                        o ? (this.method = "next",
                        this.next = o.finallyLoc,
                        m) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type)
                            throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === e.type && t && (this.next = t),
                        m
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                                return this.complete(n.completion, n.afterLoc),
                                L(n),
                                m
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    L(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, r) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: n,
                            nextLoc: r
                        },
                        "next" === this.method && (this.arg = t),
                        m
                    }
                },
                e
            }(e.exports);
            try {
                regeneratorRuntime = t
            } catch (e) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
            }
        }
        ,
        7465: (e, t, n) => {
            const r = n(2477);
            e.exports = {
                recognize: async (e, t, n) => {
                    const i = await r(t, 1, n);
                    return i.recognize(e).finally((async () => {
                        await i.terminate()
                    }
                    ))
                }
                ,
                detect: async (e, t) => {
                    const n = await r("osd", 0, t);
                    return n.detect(e).finally((async () => {
                        await n.terminate()
                    }
                    ))
                }
            }
        }
        ,
        9742: e => {
            e.exports = {
                TESSERACT_ONLY: 0,
                LSTM_ONLY: 1,
                TESSERACT_LSTM_COMBINED: 2,
                DEFAULT: 3
            }
        }
        ,
        949: e => {
            e.exports = {
                OSD_ONLY: "0",
                AUTO_OSD: "1",
                AUTO_ONLY: "2",
                AUTO: "3",
                SINGLE_COLUMN: "4",
                SINGLE_BLOCK_VERT_TEXT: "5",
                SINGLE_BLOCK: "6",
                SINGLE_LINE: "7",
                SINGLE_WORD: "8",
                CIRCLE_WORD: "9",
                SINGLE_CHAR: "10",
                SPARSE_TEXT: "11",
                SPARSE_TEXT_OSD: "12",
                RAW_LINE: "13"
            }
        }
        ,
        4500: e => {
            e.exports = {
                workerBlobURL: !0,
                logger: () => {}
            }
        }
        ,
        2646: e => {
            e.exports = {
                AFR: "afr",
                AMH: "amh",
                ARA: "ara",
                ASM: "asm",
                AZE: "aze",
                AZE_CYRL: "aze_cyrl",
                BEL: "bel",
                BEN: "ben",
                BOD: "bod",
                BOS: "bos",
                BUL: "bul",
                CAT: "cat",
                CEB: "ceb",
                CES: "ces",
                CHI_SIM: "chi_sim",
                CHI_TRA: "chi_tra",
                CHR: "chr",
                CYM: "cym",
                DAN: "dan",
                DEU: "deu",
                DZO: "dzo",
                ELL: "ell",
                ENG: "eng",
                ENM: "enm",
                EPO: "epo",
                EST: "est",
                EUS: "eus",
                FAS: "fas",
                FIN: "fin",
                FRA: "fra",
                FRK: "frk",
                FRM: "frm",
                GLE: "gle",
                GLG: "glg",
                GRC: "grc",
                GUJ: "guj",
                HAT: "hat",
                HEB: "heb",
                HIN: "hin",
                HRV: "hrv",
                HUN: "hun",
                IKU: "iku",
                IND: "ind",
                ISL: "isl",
                ITA: "ita",
                ITA_OLD: "ita_old",
                JAV: "jav",
                JPN: "jpn",
                KAN: "kan",
                KAT: "kat",
                KAT_OLD: "kat_old",
                KAZ: "kaz",
                KHM: "khm",
                KIR: "kir",
                KOR: "kor",
                KUR: "kur",
                LAO: "lao",
                LAT: "lat",
                LAV: "lav",
                LIT: "lit",
                MAL: "mal",
                MAR: "mar",
                MKD: "mkd",
                MLT: "mlt",
                MSA: "msa",
                MYA: "mya",
                NEP: "nep",
                NLD: "nld",
                NOR: "nor",
                ORI: "ori",
                PAN: "pan",
                POL: "pol",
                POR: "por",
                PUS: "pus",
                RON: "ron",
                RUS: "rus",
                SAN: "san",
                SIN: "sin",
                SLK: "slk",
                SLV: "slv",
                SPA: "spa",
                SPA_OLD: "spa_old",
                SQI: "sqi",
                SRP: "srp",
                SRP_LATN: "srp_latn",
                SWA: "swa",
                SWE: "swe",
                SYR: "syr",
                TAM: "tam",
                TEL: "tel",
                TGK: "tgk",
                TGL: "tgl",
                THA: "tha",
                TIR: "tir",
                TUR: "tur",
                UIG: "uig",
                UKR: "ukr",
                URD: "urd",
                UZB: "uzb",
                UZB_CYRL: "uzb_cyrl",
                VIE: "vie",
                YID: "yid"
            }
        }
        ,
        9500: (e, t, n) => {
            const r = n(1028);
            let i = 0;
            e.exports = ({id: e, action: t, payload: n={}}) => {
                let o = e;
                return void 0 === o && (o = r("Job", i),
                i += 1),
                {
                    id: o,
                    action: t,
                    payload: n
                }
            }
        }
        ,
        882: function(e, t, n) {
            const r = n(9500)
              , {log: i} = n(8787)
              , o = n(1028);
            let a = 0;
            e.exports = () => {
                const e = o("Scheduler", a)
                  , t = {}
                  , n = {};
                let s = [];
                a += 1;
                const u = () => Object.keys(t).length
                  , c = () => {
                    if (0 !== s.length) {
                        const e = Object.keys(t);
                        for (let r = 0; r < e.length; r += 1)
                            if (void 0 === n[e[r]]) {
                                s[0](t[e[r]]);
                                break
                            }
                    }
                }
                  , l = (t, o) => new Promise(( (a, u) => {
                    const l = r({
                        action: t,
                        payload: o
                    });
                    s.push((async e => {
                        s.shift(),
                        n[e.id] = l;
                        try {
                            a(await e[t].apply(this, [...o, l.id]))
                        } catch (e) {
                            u(e)
                        } finally {
                            delete n[e.id],
                            c()
                        }
                    }
                    )),
                    i(`[${e}]: Add ${l.id} to JobQueue`),
                    i(`[${e}]: JobQueue length=${s.length}`),
                    c()
                }
                ));
                return {
                    addWorker: n => (t[n.id] = n,
                    i(`[${e}]: Add ${n.id}`),
                    i(`[${e}]: Number of workers=${u()}`),
                    c(),
                    n.id),
                    addJob: async (t, ...n) => {
                        if (0 === u())
                            throw Error(`[${e}]: You need to have at least one worker before adding jobs`);
                        return l(t, n)
                    }
                    ,
                    terminate: async () => {
                        Object.keys(t).forEach((async e => {
                            await t[e].terminate()
                        }
                        )),
                        s = []
                    }
                    ,
                    getQueueLen: () => s.length,
                    getNumWorkers: u
                }
            }
        },
        2477: (e, t, n) => {
            const r = n(5981)
              , i = n(4760)
              , o = n(9500)
              , {log: a} = n(8787)
              , s = n(1028)
              , u = n(9742)
              , {defaultOptions: c, spawnWorker: l, terminateWorker: f, onMessage: p, loadImage: d, send: h} = n(5321);
            let g = 0;
            e.exports = async (e="eng", t=u.LSTM_ONLY, n={}, m={}) => {
                const v = s("Worker", g)
                  , {logger: y, errorHandler: b, ...x} = r({
                    ...c,
                    ...n
                })
                  , w = {}
                  , A = {}
                  , T = "string" == typeof e ? e.split("+") : e;
                let _ = t
                  , S = m;
                const E = [u.DEFAULT, u.LSTM_ONLY].includes(t) && !x.legacyCore;
                let N, k;
                const L = new Promise(( (e, t) => {
                    k = e,
                    N = t
                }
                ));
                let C = l(x);
                C.onerror = e => {
                    N(e.message)
                }
                ,
                g += 1;
                const O = (e, t) => {
                    w[e] = t
                }
                  , P = (e, t) => {
                    A[e] = t
                }
                  , j = ({id: e, action: t, payload: n}) => new Promise(( (r, i) => {
                    a(`[${v}]: Start ${e}, action=${t}`),
                    O(t, r),
                    P(t, i),
                    h(C, {
                        workerId: v,
                        jobId: e,
                        action: t,
                        payload: n
                    })
                }
                ))
                  , R = (e, t) => j(o({
                    id: t,
                    action: "loadLanguage",
                    payload: {
                        langs: e,
                        options: {
                            langPath: x.langPath,
                            dataPath: x.dataPath,
                            cachePath: x.cachePath,
                            cacheMethod: x.cacheMethod,
                            gzip: x.gzip,
                            lstmOnly: [u.LSTM_ONLY, u.TESSERACT_LSTM_COMBINED].includes(_) && !x.legacyLang
                        }
                    }
                }))
                  , I = (e, t, n, r) => j(o({
                    id: r,
                    action: "initialize",
                    payload: {
                        langs: e,
                        oem: t,
                        config: n
                    }
                }));
                p(C, ( ({workerId: e, jobId: t, status: n, action: r, data: o}) => {
                    if ("resolve" === n) {
                        a(`[${e}]: Complete ${t}`);
                        let n = o;
                        "recognize" === r ? n = i(o) : "getPDF" === r && (n = Array.from({
                            ...o,
                            length: Object.keys(o).length
                        })),
                        w[r]({
                            jobId: t,
                            data: n
                        })
                    } else if ("reject" === n) {
                        if (A[r](o),
                        "load" === r && N(o),
                        !b)
                            throw Error(o);
                        b(o)
                    } else
                        "progress" === n && y({
                            ...o,
                            userJobId: t
                        })
                }
                ));
                const M = {
                    id: v,
                    worker: C,
                    setResolve: O,
                    setReject: P,
                    load: () => {}
                    ,
                    writeText: (e, t, n) => j(o({
                        id: n,
                        action: "FS",
                        payload: {
                            method: "writeFile",
                            args: [e, t]
                        }
                    })),
                    readText: (e, t) => j(o({
                        id: t,
                        action: "FS",
                        payload: {
                            method: "readFile",
                            args: [e, {
                                encoding: "utf8"
                            }]
                        }
                    })),
                    removeFile: (e, t) => j(o({
                        id: t,
                        action: "FS",
                        payload: {
                            method: "unlink",
                            args: [e]
                        }
                    })),
                    FS: (e, t, n) => j(o({
                        id: n,
                        action: "FS",
                        payload: {
                            method: e,
                            args: t
                        }
                    })),
                    loadLanguage: () => {}
                    ,
                    initialize: () => {}
                    ,
                    reinitialize: (e="eng", t, n, r) => {
                        if (E && [u.TESSERACT_ONLY, u.TESSERACT_LSTM_COMBINED].includes(t))
                            throw Error("Legacy model requested but code missing.");
                        const i = t || _;
                        _ = i;
                        const o = n || S;
                        S = o;
                        const a = ("string" == typeof e ? e.split("+") : e).filter((e => !T.includes(e)));
                        return T.push(...a),
                        a.length > 0 ? R(a, r).then(( () => I(e, i, o, r))) : I(e, i, o, r)
                    }
                    ,
                    setParameters: (e={}, t) => j(o({
                        id: t,
                        action: "setParameters",
                        payload: {
                            params: e
                        }
                    })),
                    recognize: async (e, t={}, n={
                        blocks: !0,
                        text: !0,
                        hocr: !0,
                        tsv: !0
                    }, r) => j(o({
                        id: r,
                        action: "recognize",
                        payload: {
                            image: await d(e),
                            options: t,
                            output: n
                        }
                    })),
                    getPDF: (e="Tesseract OCR Result", t=!1, n) => j(o({
                        id: n,
                        action: "getPDF",
                        payload: {
                            title: e,
                            textonly: t
                        }
                    })),
                    detect: async (e, t) => {
                        if (E)
                            throw Error("`worker.detect` requires Legacy model, which was not loaded.");
                        return j(o({
                            id: t,
                            action: "detect",
                            payload: {
                                image: await d(e)
                            }
                        }))
                    }
                    ,
                    terminate: async () => (null !== C && (f(C),
                    C = null),
                    Promise.resolve())
                };
                var D;
                return j(o({
                    id: D,
                    action: "load",
                    payload: {
                        options: {
                            lstmOnly: E,
                            corePath: x.corePath,
                            logging: x.logging
                        }
                    }
                })).then(( () => R(e))).then(( () => I(e, t, m))).then(( () => k(M))).catch(( () => {}
                )),
                L
            }
        }
        ,
        4995: (e, t, n) => {
            n(7452);
            const r = n(882)
              , i = n(2477)
              , o = n(7465)
              , a = n(2646)
              , s = n(9742)
              , u = n(949)
              , {setLogging: c} = n(8787);
            e.exports = {
                languages: a,
                OEM: s,
                PSM: u,
                createScheduler: r,
                createWorker: i,
                setLogging: c,
                ...o
            }
        }
        ,
        4760: e => {
            e.exports = e => {
                const t = []
                  , n = []
                  , r = []
                  , i = []
                  , o = [];
                return e.blocks && e.blocks.forEach((a => {
                    a.paragraphs.forEach((t => {
                        t.lines.forEach((n => {
                            n.words.forEach((r => {
                                r.symbols.forEach((i => {
                                    o.push({
                                        ...i,
                                        page: e,
                                        block: a,
                                        paragraph: t,
                                        line: n,
                                        word: r
                                    })
                                }
                                )),
                                i.push({
                                    ...r,
                                    page: e,
                                    block: a,
                                    paragraph: t,
                                    line: n
                                })
                            }
                            )),
                            r.push({
                                ...n,
                                page: e,
                                block: a,
                                paragraph: t
                            })
                        }
                        )),
                        n.push({
                            ...t,
                            page: e,
                            block: a
                        })
                    }
                    )),
                    t.push({
                        ...a,
                        page: e
                    })
                }
                )),
                {
                    ...e,
                    blocks: t,
                    paragraphs: n,
                    lines: r,
                    words: i,
                    symbols: o
                }
            }
        }
        ,
        3820: (e, t, n) => {
            const r = n(4866);
            e.exports = e => {
                const t = {};
                return "undefined" != typeof WorkerGlobalScope ? t.type = "webworker" : r() ? t.type = "electron" : "object" == typeof document ? t.type = "browser" : "object" == typeof process && (t.type = "node"),
                void 0 === e ? t : t[e]
            }
        }
        ,
        1028: e => {
            e.exports = (e, t) => `${e}-${t}-${Math.random().toString(16).slice(3, 8)}`
        }
        ,
        8787: function(e, t) {
            let n = !1;
            t.logging = n,
            t.setLogging = e => {
                n = e
            }
            ,
            t.log = (...e) => n ? void 0 : null
        },
        5981: (e, t, n) => {
            const r = "browser" === n(3820)("type") ? e => new URL(e,window.location.href).href : e => e;
            e.exports = e => {
                const t = {
                    ...e
                };
                return ["corePath", "workerPath", "langPath"].forEach((n => {
                    e[n] && (t[n] = r(t[n]))
                }
                )),
                t
            }
        }
        ,
        1848: (e, t, n) => {
            const r = n(6125).rE
              , i = n(4500);
            e.exports = {
                ...i,
                workerPath: `https://cdn.jsdelivr.net/npm/tesseract.js@v${r}/dist/worker.min.js`
            }
        }
        ,
        5321: (e, t, n) => {
            const r = n(1848)
              , i = n(7456)
              , o = n(9548)
              , a = n(5381)
              , s = n(5039)
              , u = n(9996);
            e.exports = {
                defaultOptions: r,
                spawnWorker: i,
                terminateWorker: o,
                onMessage: a,
                send: s,
                loadImage: u
            }
        }
        ,
        9996: e => {
            const t = e => new Promise(( (t, n) => {
                const r = new FileReader;
                r.onload = () => {
                    t(r.result)
                }
                ,
                r.onerror = ({target: {error: {code: e}}}) => {
                    n(Error(`File could not be read! Code=${e}`))
                }
                ,
                r.readAsArrayBuffer(e)
            }
            ))
              , n = async e => {
                let r = e;
                if (void 0 === e)
                    return "undefined";
                if ("string" == typeof e)
                    if (/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e))
                        r = atob(e.split(",")[1]).split("").map((e => e.charCodeAt(0)));
                    else {
                        const t = await fetch(e);
                        r = await t.arrayBuffer()
                    }
                else if ("undefined" != typeof HTMLElement && e instanceof HTMLElement)
                    "IMG" === e.tagName && (r = await n(e.src)),
                    "VIDEO" === e.tagName && (r = await n(e.poster)),
                    "CANVAS" === e.tagName && await new Promise((n => {
                        e.toBlob((async e => {
                            r = await t(e),
                            n()
                        }
                        ))
                    }
                    ));
                else if ("undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas) {
                    const n = await e.convertToBlob();
                    r = await t(n)
                } else
                    (e instanceof File || e instanceof Blob) && (r = await t(e));
                return new Uint8Array(r)
            }
            ;
            e.exports = n
        }
        ,
        5381: e => {
            e.exports = (e, t) => {
                e.onmessage = ({data: e}) => {
                    t(e)
                }
            }
        }
        ,
        5039: e => {
            e.exports = async (e, t) => {
                e.postMessage(t)
            }
        }
        ,
        7456: e => {
            e.exports = ({workerPath: e, workerBlobURL: t}) => {
                let n;
                if (Blob && URL && t) {
                    const t = new Blob([`importScripts("${e}");`],{
                        type: "application/javascript"
                    });
                    n = new Worker(URL.createObjectURL(t))
                } else
                    n = new Worker(e);
                return n
            }
        }
        ,
        9548: e => {
            e.exports = e => {
                e.terminate()
            }
        }
        ,
        5955: function(e, t, n) {
            var r, i, o;
            !function() {
                "use strict";
                i = [],
                void 0 === (o = "function" == typeof (r = function() {
                    var e = {
                        alignVert: !1,
                        alignHoriz: !1,
                        multiLine: !1,
                        detectMultiLine: !0,
                        minFontSize: 6,
                        maxFontSize: 80,
                        reProcess: !0,
                        widthOnly: !1,
                        alignVertWithFlexbox: !1
                    };
                    return function(n, r) {
                        r || (r = {});
                        var i = {};
                        for (var o in e)
                            r.hasOwnProperty(o) ? i[o] = r[o] : i[o] = e[o];
                        "function" == typeof n.toArray && (n = n.toArray());
                        var a = Object.prototype.toString.call(n);
                        "[object Array]" !== a && "[object NodeList]" !== a && "[object HTMLCollection]" !== a && (n = [n]);
                        for (var s = 0; s < n.length; s++)
                            t(n[s], i)
                    }
                    ;
                    function t(e, t) {
                        if (!i(e) || !t.reProcess && e.getAttribute("textFitted"))
                            return !1;
                        var s, u, c, l, f, p, d;
                        if (t.reProcess || e.setAttribute("textFitted", 1),
                        c = e.innerHTML,
                        l = r(e),
                        u = n(e),
                        !l || !t.widthOnly && !u)
                            throw t.widthOnly ? new Error("Set a static width on the target element " + e.outerHTML + " before using textFit!") : new Error("Set a static height and width on the target element " + e.outerHTML + " before using textFit!");
                        -1 === c.indexOf("textFitted") ? ((s = document.createElement("span")).className = "textFitted",
                        s.style.display = "inline-block",
                        s.innerHTML = c,
                        e.innerHTML = "",
                        e.appendChild(s)) : o(s = e.querySelector("span.textFitted"), "textFitAlignVert") && (s.className = s.className.replace("textFitAlignVert", ""),
                        s.style.height = "",
                        e.className.replace("textFitAlignVertFlex", "")),
                        t.alignHoriz && (e.style["text-align"] = "center",
                        s.style["text-align"] = "center");
                        var h = t.multiLine;
                        t.detectMultiLine && !h && s.scrollHeight >= 2 * parseInt(window.getComputedStyle(s)["font-size"], 10) && (h = !0),
                        h || (e.style["white-space"] = "nowrap"),
                        f = t.minFontSize,
                        d = t.maxFontSize;
                        for (var g = f; f <= d; )
                            p = d + f >> 1,
                            s.style.fontSize = p + "px",
                            s.scrollWidth <= l && (t.widthOnly || s.scrollHeight <= u) ? (g = p,
                            f = p + 1) : d = p - 1;
                        if (s.style.fontSize != g + "px" && (s.style.fontSize = g + "px"),
                        t.alignVert) {
                            a();
                            var m = s.scrollHeight;
                            "static" === window.getComputedStyle(e).position && (e.style.position = "relative"),
                            o(s, "textFitAlignVert") || (s.className = s.className + " textFitAlignVert"),
                            s.style.height = m + "px",
                            t.alignVertWithFlexbox && !o(e, "textFitAlignVertFlex") && (e.className = e.className + " textFitAlignVertFlex")
                        }
                    }
                    function n(e) {
                        var t = window.getComputedStyle(e, null);
                        return e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10)
                    }
                    function r(e) {
                        var t = window.getComputedStyle(e, null);
                        return e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10)
                    }
                    function i(e) {
                        return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
                    }
                    function o(e, t) {
                        return (" " + e.className + " ").indexOf(" " + t + " ") > -1
                    }
                    function a() {
                        if (!document.getElementById("textFitStyleSheet")) {
                            var e = [".textFitAlignVert{", "position: absolute;", "top: 0; right: 0; bottom: 0; left: 0;", "margin: auto;", "display: flex;", "justify-content: center;", "flex-direction: column;", "}", ".textFitAlignVertFlex{", "display: flex;", "}", ".textFitAlignVertFlex .textFitAlignVert{", "position: static;", "}"].join("")
                              , t = document.createElement("style");
                            t.type = "text/css",
                            t.id = "textFitStyleSheet",
                            t.innerHTML = e,
                            document.body.appendChild(t)
                        }
                    }
                }
                ) ? r.apply(t, i) : r) || (e.exports = o)
            }("object" == typeof n.g && n.g)
        },
        5481: e => {
            "use strict";
            e.exports = 2147483647
        }
        ,
        569: (e, t, n) => {
            "use strict";
            var r = n(2665)
              , i = n(5481);
            e.exports = function(e) {
                if ((e = r(e)) > i)
                    throw new TypeError(e + " exceeds maximum possible timeout");
                return e
            }
        }
        ,
        9244: (e, t, n) => {
            "use strict";
            function r(e) {
                if (null == e)
                    return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }
            function i(e) {
                return e instanceof r(e).Element || e instanceof Element
            }
            function o(e) {
                return e instanceof r(e).HTMLElement || e instanceof HTMLElement
            }
            function a(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof r(e).ShadowRoot || e instanceof ShadowRoot)
            }
            n.d(t, {
                Ay: () => ht,
                cJ: () => ft,
                qf: () => pt
            });
            var s = Math.max
              , u = Math.min
              , c = Math.round;
            function l() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
                    return e.brand + "/" + e.version
                }
                )).join(" ") : navigator.userAgent
            }
            function f() {
                return !/^((?!chrome|android).)*safari/i.test(l())
            }
            function p(e, t, n) {
                void 0 === t && (t = !1),
                void 0 === n && (n = !1);
                var a = e.getBoundingClientRect()
                  , s = 1
                  , u = 1;
                t && o(e) && (s = e.offsetWidth > 0 && c(a.width) / e.offsetWidth || 1,
                u = e.offsetHeight > 0 && c(a.height) / e.offsetHeight || 1);
                var l = (i(e) ? r(e) : window).visualViewport
                  , p = !f() && n
                  , d = (a.left + (p && l ? l.offsetLeft : 0)) / s
                  , h = (a.top + (p && l ? l.offsetTop : 0)) / u
                  , g = a.width / s
                  , m = a.height / u;
                return {
                    width: g,
                    height: m,
                    top: h,
                    right: d + g,
                    bottom: h + m,
                    left: d,
                    x: d,
                    y: h
                }
            }
            function d(e) {
                var t = r(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }
            function h(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }
            function g(e) {
                return ((i(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }
            function m(e) {
                return p(g(e)).left + d(e).scrollLeft
            }
            function v(e) {
                return r(e).getComputedStyle(e)
            }
            function y(e) {
                var t = v(e)
                  , n = t.overflow
                  , r = t.overflowX
                  , i = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + i + r)
            }
            function b(e, t, n) {
                void 0 === n && (n = !1);
                var i, a, s = o(t), u = o(t) && function(e) {
                    var t = e.getBoundingClientRect()
                      , n = c(t.width) / e.offsetWidth || 1
                      , r = c(t.height) / e.offsetHeight || 1;
                    return 1 !== n || 1 !== r
                }(t), l = g(t), f = p(e, u, n), v = {
                    scrollLeft: 0,
                    scrollTop: 0
                }, b = {
                    x: 0,
                    y: 0
                };
                return (s || !s && !n) && (("body" !== h(t) || y(l)) && (v = (i = t) !== r(i) && o(i) ? {
                    scrollLeft: (a = i).scrollLeft,
                    scrollTop: a.scrollTop
                } : d(i)),
                o(t) ? ((b = p(t, !0)).x += t.clientLeft,
                b.y += t.clientTop) : l && (b.x = m(l))),
                {
                    x: f.left + v.scrollLeft - b.x,
                    y: f.top + v.scrollTop - b.y,
                    width: f.width,
                    height: f.height
                }
            }
            function x(e) {
                var t = p(e)
                  , n = e.offsetWidth
                  , r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width),
                Math.abs(t.height - r) <= 1 && (r = t.height),
                {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }
            function w(e) {
                return "html" === h(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || g(e)
            }
            function A(e) {
                return ["html", "body", "#document"].indexOf(h(e)) >= 0 ? e.ownerDocument.body : o(e) && y(e) ? e : A(w(e))
            }
            function T(e, t) {
                var n;
                void 0 === t && (t = []);
                var i = A(e)
                  , o = i === (null == (n = e.ownerDocument) ? void 0 : n.body)
                  , a = r(i)
                  , s = o ? [a].concat(a.visualViewport || [], y(i) ? i : []) : i
                  , u = t.concat(s);
                return o ? u : u.concat(T(w(s)))
            }
            function _(e) {
                return ["table", "td", "th"].indexOf(h(e)) >= 0
            }
            function S(e) {
                return o(e) && "fixed" !== v(e).position ? e.offsetParent : null
            }
            function E(e) {
                for (var t = r(e), n = S(e); n && _(n) && "static" === v(n).position; )
                    n = S(n);
                return n && ("html" === h(n) || "body" === h(n) && "static" === v(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(l());
                    if (/Trident/i.test(l()) && o(e) && "fixed" === v(e).position)
                        return null;
                    var n = w(e);
                    for (a(n) && (n = n.host); o(n) && ["html", "body"].indexOf(h(n)) < 0; ) {
                        var r = v(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter)
                            return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var N = "top"
              , k = "bottom"
              , L = "right"
              , C = "left"
              , O = "auto"
              , P = [N, k, L, C]
              , j = "start"
              , R = "end"
              , I = "clippingParents"
              , M = "viewport"
              , D = "popper"
              , B = "reference"
              , q = P.reduce((function(e, t) {
                return e.concat([t + "-" + j, t + "-" + R])
            }
            ), [])
              , F = [].concat(P, [O]).reduce((function(e, t) {
                return e.concat([t, t + "-" + j, t + "-" + R])
            }
            ), [])
              , H = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
            function W(e) {
                var t = new Map
                  , n = new Set
                  , r = [];
                function i(e) {
                    n.add(e.name),
                    [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && i(r)
                        }
                    }
                    )),
                    r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                }
                )),
                e.forEach((function(e) {
                    n.has(e.name) || i(e)
                }
                )),
                r
            }
            var U = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };
            function z() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                }
                ))
            }
            function $(e) {
                void 0 === e && (e = {});
                var t = e
                  , n = t.defaultModifiers
                  , r = void 0 === n ? [] : n
                  , o = t.defaultOptions
                  , a = void 0 === o ? U : o;
                return function(e, t, n) {
                    void 0 === n && (n = a);
                    var o, s, u = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, U, a),
                        modifiersData: {},
                        elements: {
                            reference: e,
                            popper: t
                        },
                        attributes: {},
                        styles: {}
                    }, c = [], l = !1, f = {
                        state: u,
                        setOptions: function(n) {
                            var o = "function" == typeof n ? n(u.options) : n;
                            p(),
                            u.options = Object.assign({}, a, u.options, o),
                            u.scrollParents = {
                                reference: i(e) ? T(e) : e.contextElement ? T(e.contextElement) : [],
                                popper: T(t)
                            };
                            var s, l, d = function(e) {
                                var t = W(e);
                                return H.reduce((function(e, n) {
                                    return e.concat(t.filter((function(e) {
                                        return e.phase === n
                                    }
                                    )))
                                }
                                ), [])
                            }((s = [].concat(r, u.options.modifiers),
                            l = s.reduce((function(e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign({}, n, t, {
                                    options: Object.assign({}, n.options, t.options),
                                    data: Object.assign({}, n.data, t.data)
                                }) : t,
                                e
                            }
                            ), {}),
                            Object.keys(l).map((function(e) {
                                return l[e]
                            }
                            ))));
                            return u.orderedModifiers = d.filter((function(e) {
                                return e.enabled
                            }
                            )),
                            u.orderedModifiers.forEach((function(e) {
                                var t = e.name
                                  , n = e.options
                                  , r = void 0 === n ? {} : n
                                  , i = e.effect;
                                if ("function" == typeof i) {
                                    var o = i({
                                        state: u,
                                        name: t,
                                        instance: f,
                                        options: r
                                    })
                                      , a = function() {};
                                    c.push(o || a)
                                }
                            }
                            )),
                            f.update()
                        },
                        forceUpdate: function() {
                            if (!l) {
                                var e = u.elements
                                  , t = e.reference
                                  , n = e.popper;
                                if (z(t, n)) {
                                    u.rects = {
                                        reference: b(t, E(n), "fixed" === u.options.strategy),
                                        popper: x(n)
                                    },
                                    u.reset = !1,
                                    u.placement = u.options.placement,
                                    u.orderedModifiers.forEach((function(e) {
                                        return u.modifiersData[e.name] = Object.assign({}, e.data)
                                    }
                                    ));
                                    for (var r = 0; r < u.orderedModifiers.length; r++)
                                        if (!0 !== u.reset) {
                                            var i = u.orderedModifiers[r]
                                              , o = i.fn
                                              , a = i.options
                                              , s = void 0 === a ? {} : a
                                              , c = i.name;
                                            "function" == typeof o && (u = o({
                                                state: u,
                                                options: s,
                                                name: c,
                                                instance: f
                                            }) || u)
                                        } else
                                            u.reset = !1,
                                            r = -1
                                }
                            }
                        },
                        update: (o = function() {
                            return new Promise((function(e) {
                                f.forceUpdate(),
                                e(u)
                            }
                            ))
                        }
                        ,
                        function() {
                            return s || (s = new Promise((function(e) {
                                Promise.resolve().then((function() {
                                    s = void 0,
                                    e(o())
                                }
                                ))
                            }
                            ))),
                            s
                        }
                        ),
                        destroy: function() {
                            p(),
                            l = !0
                        }
                    };
                    if (!z(e, t))
                        return f;
                    function p() {
                        c.forEach((function(e) {
                            return e()
                        }
                        )),
                        c = []
                    }
                    return f.setOptions(n).then((function(e) {
                        !l && n.onFirstUpdate && n.onFirstUpdate(e)
                    }
                    )),
                    f
                }
            }
            var K = {
                passive: !0
            };
            function V(e) {
                return e.split("-")[0]
            }
            function G(e) {
                return e.split("-")[1]
            }
            function Y(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }
            function J(e) {
                var t, n = e.reference, r = e.element, i = e.placement, o = i ? V(i) : null, a = i ? G(i) : null, s = n.x + n.width / 2 - r.width / 2, u = n.y + n.height / 2 - r.height / 2;
                switch (o) {
                case N:
                    t = {
                        x: s,
                        y: n.y - r.height
                    };
                    break;
                case k:
                    t = {
                        x: s,
                        y: n.y + n.height
                    };
                    break;
                case L:
                    t = {
                        x: n.x + n.width,
                        y: u
                    };
                    break;
                case C:
                    t = {
                        x: n.x - r.width,
                        y: u
                    };
                    break;
                default:
                    t = {
                        x: n.x,
                        y: n.y
                    }
                }
                var c = o ? Y(o) : null;
                if (null != c) {
                    var l = "y" === c ? "height" : "width";
                    switch (a) {
                    case j:
                        t[c] = t[c] - (n[l] / 2 - r[l] / 2);
                        break;
                    case R:
                        t[c] = t[c] + (n[l] / 2 - r[l] / 2)
                    }
                }
                return t
            }
            var X = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };
            function Z(e) {
                var t, n = e.popper, i = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, u = e.position, l = e.gpuAcceleration, f = e.adaptive, p = e.roundOffsets, d = e.isFixed, h = s.x, m = void 0 === h ? 0 : h, y = s.y, b = void 0 === y ? 0 : y, x = "function" == typeof p ? p({
                    x: m,
                    y: b
                }) : {
                    x: m,
                    y: b
                };
                m = x.x,
                b = x.y;
                var w = s.hasOwnProperty("x")
                  , A = s.hasOwnProperty("y")
                  , T = C
                  , _ = N
                  , S = window;
                if (f) {
                    var O = E(n)
                      , P = "clientHeight"
                      , j = "clientWidth";
                    if (O === r(n) && "static" !== v(O = g(n)).position && "absolute" === u && (P = "scrollHeight",
                    j = "scrollWidth"),
                    o === N || (o === C || o === L) && a === R)
                        _ = k,
                        b -= (d && O === S && S.visualViewport ? S.visualViewport.height : O[P]) - i.height,
                        b *= l ? 1 : -1;
                    if (o === C || (o === N || o === k) && a === R)
                        T = L,
                        m -= (d && O === S && S.visualViewport ? S.visualViewport.width : O[j]) - i.width,
                        m *= l ? 1 : -1
                }
                var I, M = Object.assign({
                    position: u
                }, f && X), D = !0 === p ? function(e, t) {
                    var n = e.x
                      , r = e.y
                      , i = t.devicePixelRatio || 1;
                    return {
                        x: c(n * i) / i || 0,
                        y: c(r * i) / i || 0
                    }
                }({
                    x: m,
                    y: b
                }, r(n)) : {
                    x: m,
                    y: b
                };
                return m = D.x,
                b = D.y,
                l ? Object.assign({}, M, ((I = {})[_] = A ? "0" : "",
                I[T] = w ? "0" : "",
                I.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)",
                I)) : Object.assign({}, M, ((t = {})[_] = A ? b + "px" : "",
                t[T] = w ? m + "px" : "",
                t.transform = "",
                t))
            }
            const Q = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach((function(e) {
                        var n = t.styles[e] || {}
                          , r = t.attributes[e] || {}
                          , i = t.elements[e];
                        o(i) && h(i) && (Object.assign(i.style, n),
                        Object.keys(r).forEach((function(e) {
                            var t = r[e];
                            !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                        }
                        )))
                    }
                    ))
                },
                effect: function(e) {
                    var t = e.state
                      , n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                    return Object.assign(t.elements.popper.style, n.popper),
                    t.styles = n,
                    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                    function() {
                        Object.keys(t.elements).forEach((function(e) {
                            var r = t.elements[e]
                              , i = t.attributes[e] || {}
                              , a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                return e[t] = "",
                                e
                            }
                            ), {});
                            o(r) && h(r) && (Object.assign(r.style, a),
                            Object.keys(i).forEach((function(e) {
                                r.removeAttribute(e)
                            }
                            )))
                        }
                        ))
                    }
                },
                requires: ["computeStyles"]
            };
            const ee = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state
                      , n = e.options
                      , r = e.name
                      , i = n.offset
                      , o = void 0 === i ? [0, 0] : i
                      , a = F.reduce((function(e, n) {
                        return e[n] = function(e, t, n) {
                            var r = V(e)
                              , i = [C, N].indexOf(r) >= 0 ? -1 : 1
                              , o = "function" == typeof n ? n(Object.assign({}, t, {
                                placement: e
                            })) : n
                              , a = o[0]
                              , s = o[1];
                            return a = a || 0,
                            s = (s || 0) * i,
                            [C, L].indexOf(r) >= 0 ? {
                                x: s,
                                y: a
                            } : {
                                x: a,
                                y: s
                            }
                        }(n, t.rects, o),
                        e
                    }
                    ), {})
                      , s = a[t.placement]
                      , u = s.x
                      , c = s.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u,
                    t.modifiersData.popperOffsets.y += c),
                    t.modifiersData[r] = a
                }
            };
            var te = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            function ne(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return te[e]
                }
                ))
            }
            var re = {
                start: "end",
                end: "start"
            };
            function ie(e) {
                return e.replace(/start|end/g, (function(e) {
                    return re[e]
                }
                ))
            }
            function oe(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t))
                    return !0;
                if (n && a(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r))
                            return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }
            function ae(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }
            function se(e, t, n) {
                return t === M ? ae(function(e, t) {
                    var n = r(e)
                      , i = g(e)
                      , o = n.visualViewport
                      , a = i.clientWidth
                      , s = i.clientHeight
                      , u = 0
                      , c = 0;
                    if (o) {
                        a = o.width,
                        s = o.height;
                        var l = f();
                        (l || !l && "fixed" === t) && (u = o.offsetLeft,
                        c = o.offsetTop)
                    }
                    return {
                        width: a,
                        height: s,
                        x: u + m(e),
                        y: c
                    }
                }(e, n)) : i(t) ? function(e, t) {
                    var n = p(e, !1, "fixed" === t);
                    return n.top = n.top + e.clientTop,
                    n.left = n.left + e.clientLeft,
                    n.bottom = n.top + e.clientHeight,
                    n.right = n.left + e.clientWidth,
                    n.width = e.clientWidth,
                    n.height = e.clientHeight,
                    n.x = n.left,
                    n.y = n.top,
                    n
                }(t, n) : ae(function(e) {
                    var t, n = g(e), r = d(e), i = null == (t = e.ownerDocument) ? void 0 : t.body, o = s(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = s(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), u = -r.scrollLeft + m(e), c = -r.scrollTop;
                    return "rtl" === v(i || n).direction && (u += s(n.clientWidth, i ? i.clientWidth : 0) - o),
                    {
                        width: o,
                        height: a,
                        x: u,
                        y: c
                    }
                }(g(e)))
            }
            function ue(e, t, n, r) {
                var a = "clippingParents" === t ? function(e) {
                    var t = T(w(e))
                      , n = ["absolute", "fixed"].indexOf(v(e).position) >= 0 && o(e) ? E(e) : e;
                    return i(n) ? t.filter((function(e) {
                        return i(e) && oe(e, n) && "body" !== h(e)
                    }
                    )) : []
                }(e) : [].concat(t)
                  , c = [].concat(a, [n])
                  , l = c[0]
                  , f = c.reduce((function(t, n) {
                    var i = se(e, n, r);
                    return t.top = s(i.top, t.top),
                    t.right = u(i.right, t.right),
                    t.bottom = u(i.bottom, t.bottom),
                    t.left = s(i.left, t.left),
                    t
                }
                ), se(e, l, r));
                return f.width = f.right - f.left,
                f.height = f.bottom - f.top,
                f.x = f.left,
                f.y = f.top,
                f
            }
            function ce(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }
            function le(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e,
                    t
                }
                ), {})
            }
            function fe(e, t) {
                void 0 === t && (t = {});
                var n = t
                  , r = n.placement
                  , o = void 0 === r ? e.placement : r
                  , a = n.strategy
                  , s = void 0 === a ? e.strategy : a
                  , u = n.boundary
                  , c = void 0 === u ? I : u
                  , l = n.rootBoundary
                  , f = void 0 === l ? M : l
                  , d = n.elementContext
                  , h = void 0 === d ? D : d
                  , m = n.altBoundary
                  , v = void 0 !== m && m
                  , y = n.padding
                  , b = void 0 === y ? 0 : y
                  , x = ce("number" != typeof b ? b : le(b, P))
                  , w = h === D ? B : D
                  , A = e.rects.popper
                  , T = e.elements[v ? w : h]
                  , _ = ue(i(T) ? T : T.contextElement || g(e.elements.popper), c, f, s)
                  , S = p(e.elements.reference)
                  , E = J({
                    reference: S,
                    element: A,
                    strategy: "absolute",
                    placement: o
                })
                  , C = ae(Object.assign({}, A, E))
                  , O = h === D ? C : S
                  , j = {
                    top: _.top - O.top + x.top,
                    bottom: O.bottom - _.bottom + x.bottom,
                    left: _.left - O.left + x.left,
                    right: O.right - _.right + x.right
                }
                  , R = e.modifiersData.offset;
                if (h === D && R) {
                    var q = R[o];
                    Object.keys(j).forEach((function(e) {
                        var t = [L, k].indexOf(e) >= 0 ? 1 : -1
                          , n = [N, k].indexOf(e) >= 0 ? "y" : "x";
                        j[e] += q[n] * t
                    }
                    ))
                }
                return j
            }
            function pe(e, t, n) {
                return s(e, u(t, n))
            }
            const de = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state
                      , n = e.options
                      , r = e.name
                      , i = n.mainAxis
                      , o = void 0 === i || i
                      , a = n.altAxis
                      , c = void 0 !== a && a
                      , l = n.boundary
                      , f = n.rootBoundary
                      , p = n.altBoundary
                      , d = n.padding
                      , h = n.tether
                      , g = void 0 === h || h
                      , m = n.tetherOffset
                      , v = void 0 === m ? 0 : m
                      , y = fe(t, {
                        boundary: l,
                        rootBoundary: f,
                        padding: d,
                        altBoundary: p
                    })
                      , b = V(t.placement)
                      , w = G(t.placement)
                      , A = !w
                      , T = Y(b)
                      , _ = "x" === T ? "y" : "x"
                      , S = t.modifiersData.popperOffsets
                      , O = t.rects.reference
                      , P = t.rects.popper
                      , R = "function" == typeof v ? v(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : v
                      , I = "number" == typeof R ? {
                        mainAxis: R,
                        altAxis: R
                    } : Object.assign({
                        mainAxis: 0,
                        altAxis: 0
                    }, R)
                      , M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
                      , D = {
                        x: 0,
                        y: 0
                    };
                    if (S) {
                        if (o) {
                            var B, q = "y" === T ? N : C, F = "y" === T ? k : L, H = "y" === T ? "height" : "width", W = S[T], U = W + y[q], z = W - y[F], $ = g ? -P[H] / 2 : 0, K = w === j ? O[H] : P[H], J = w === j ? -P[H] : -O[H], X = t.elements.arrow, Z = g && X ? x(X) : {
                                width: 0,
                                height: 0
                            }, Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }, ee = Q[q], te = Q[F], ne = pe(0, O[H], Z[H]), re = A ? O[H] / 2 - $ - ne - ee - I.mainAxis : K - ne - ee - I.mainAxis, ie = A ? -O[H] / 2 + $ + ne + te + I.mainAxis : J + ne + te + I.mainAxis, oe = t.elements.arrow && E(t.elements.arrow), ae = oe ? "y" === T ? oe.clientTop || 0 : oe.clientLeft || 0 : 0, se = null != (B = null == M ? void 0 : M[T]) ? B : 0, ue = W + ie - se, ce = pe(g ? u(U, W + re - se - ae) : U, W, g ? s(z, ue) : z);
                            S[T] = ce,
                            D[T] = ce - W
                        }
                        if (c) {
                            var le, de = "x" === T ? N : C, he = "x" === T ? k : L, ge = S[_], me = "y" === _ ? "height" : "width", ve = ge + y[de], ye = ge - y[he], be = -1 !== [N, C].indexOf(b), xe = null != (le = null == M ? void 0 : M[_]) ? le : 0, we = be ? ve : ge - O[me] - P[me] - xe + I.altAxis, Ae = be ? ge + O[me] + P[me] - xe - I.altAxis : ye, Te = g && be ? function(e, t, n) {
                                var r = pe(e, t, n);
                                return r > n ? n : r
                            }(we, ge, Ae) : pe(g ? we : ve, ge, g ? Ae : ye);
                            S[_] = Te,
                            D[_] = Te - ge
                        }
                        t.modifiersData[r] = D
                    }
                },
                requiresIfExists: ["offset"]
            };
            const he = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state, r = e.name, i = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, s = V(n.placement), u = Y(s), c = [C, L].indexOf(s) >= 0 ? "height" : "width";
                    if (o && a) {
                        var l = function(e, t) {
                            return ce("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : e) ? e : le(e, P))
                        }(i.padding, n)
                          , f = x(o)
                          , p = "y" === u ? N : C
                          , d = "y" === u ? k : L
                          , h = n.rects.reference[c] + n.rects.reference[u] - a[u] - n.rects.popper[c]
                          , g = a[u] - n.rects.reference[u]
                          , m = E(o)
                          , v = m ? "y" === u ? m.clientHeight || 0 : m.clientWidth || 0 : 0
                          , y = h / 2 - g / 2
                          , b = l[p]
                          , w = v - f[c] - l[d]
                          , A = v / 2 - f[c] / 2 + y
                          , T = pe(b, A, w)
                          , _ = u;
                        n.modifiersData[r] = ((t = {})[_] = T,
                        t.centerOffset = T - A,
                        t)
                    }
                },
                effect: function(e) {
                    var t = e.state
                      , n = e.options.element
                      , r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && oe(t.elements.popper, r) && (t.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };
            function ge(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }),
                {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }
            function me(e) {
                return [N, L, k, C].some((function(t) {
                    return e[t] >= 0
                }
                ))
            }
            var ve = $({
                defaultModifiers: [{
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(e) {
                        var t = e.state
                          , n = e.instance
                          , i = e.options
                          , o = i.scroll
                          , a = void 0 === o || o
                          , s = i.resize
                          , u = void 0 === s || s
                          , c = r(t.elements.popper)
                          , l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return a && l.forEach((function(e) {
                            e.addEventListener("scroll", n.update, K)
                        }
                        )),
                        u && c.addEventListener("resize", n.update, K),
                        function() {
                            a && l.forEach((function(e) {
                                e.removeEventListener("scroll", n.update, K)
                            }
                            )),
                            u && c.removeEventListener("resize", n.update, K)
                        }
                    },
                    data: {}
                }, {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state
                          , n = e.name;
                        t.modifiersData[n] = J({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                }, {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(e) {
                        var t = e.state
                          , n = e.options
                          , r = n.gpuAcceleration
                          , i = void 0 === r || r
                          , o = n.adaptive
                          , a = void 0 === o || o
                          , s = n.roundOffsets
                          , u = void 0 === s || s
                          , c = {
                            placement: V(t.placement),
                            variation: G(t.placement),
                            popper: t.elements.popper,
                            popperRect: t.rects.popper,
                            gpuAcceleration: i,
                            isFixed: "fixed" === t.options.strategy
                        };
                        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Z(Object.assign({}, c, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: a,
                            roundOffsets: u
                        })))),
                        null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Z(Object.assign({}, c, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: u
                        })))),
                        t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-placement": t.placement
                        })
                    },
                    data: {}
                }, Q, ee, {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state
                          , n = e.options
                          , r = e.name;
                        if (!t.modifiersData[r]._skip) {
                            for (var i = n.mainAxis, o = void 0 === i || i, a = n.altAxis, s = void 0 === a || a, u = n.fallbackPlacements, c = n.padding, l = n.boundary, f = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, h = void 0 === d || d, g = n.allowedAutoPlacements, m = t.options.placement, v = V(m), y = u || (v === m || !h ? [ne(m)] : function(e) {
                                if (V(e) === O)
                                    return [];
                                var t = ne(e);
                                return [ie(e), t, ie(t)]
                            }(m)), b = [m].concat(y).reduce((function(e, n) {
                                return e.concat(V(n) === O ? function(e, t) {
                                    void 0 === t && (t = {});
                                    var n = t
                                      , r = n.placement
                                      , i = n.boundary
                                      , o = n.rootBoundary
                                      , a = n.padding
                                      , s = n.flipVariations
                                      , u = n.allowedAutoPlacements
                                      , c = void 0 === u ? F : u
                                      , l = G(r)
                                      , f = l ? s ? q : q.filter((function(e) {
                                        return G(e) === l
                                    }
                                    )) : P
                                      , p = f.filter((function(e) {
                                        return c.indexOf(e) >= 0
                                    }
                                    ));
                                    0 === p.length && (p = f);
                                    var d = p.reduce((function(t, n) {
                                        return t[n] = fe(e, {
                                            placement: n,
                                            boundary: i,
                                            rootBoundary: o,
                                            padding: a
                                        })[V(n)],
                                        t
                                    }
                                    ), {});
                                    return Object.keys(d).sort((function(e, t) {
                                        return d[e] - d[t]
                                    }
                                    ))
                                }(t, {
                                    placement: n,
                                    boundary: l,
                                    rootBoundary: f,
                                    padding: c,
                                    flipVariations: h,
                                    allowedAutoPlacements: g
                                }) : n)
                            }
                            ), []), x = t.rects.reference, w = t.rects.popper, A = new Map, T = !0, _ = b[0], S = 0; S < b.length; S++) {
                                var E = b[S]
                                  , R = V(E)
                                  , I = G(E) === j
                                  , M = [N, k].indexOf(R) >= 0
                                  , D = M ? "width" : "height"
                                  , B = fe(t, {
                                    placement: E,
                                    boundary: l,
                                    rootBoundary: f,
                                    altBoundary: p,
                                    padding: c
                                })
                                  , H = M ? I ? L : C : I ? k : N;
                                x[D] > w[D] && (H = ne(H));
                                var W = ne(H)
                                  , U = [];
                                if (o && U.push(B[R] <= 0),
                                s && U.push(B[H] <= 0, B[W] <= 0),
                                U.every((function(e) {
                                    return e
                                }
                                ))) {
                                    _ = E,
                                    T = !1;
                                    break
                                }
                                A.set(E, U)
                            }
                            if (T)
                                for (var z = function(e) {
                                    var t = b.find((function(t) {
                                        var n = A.get(t);
                                        if (n)
                                            return n.slice(0, e).every((function(e) {
                                                return e
                                            }
                                            ))
                                    }
                                    ));
                                    if (t)
                                        return _ = t,
                                        "break"
                                }, $ = h ? 3 : 1; $ > 0; $--) {
                                    if ("break" === z($))
                                        break
                                }
                            t.placement !== _ && (t.modifiersData[r]._skip = !0,
                            t.placement = _,
                            t.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                }, de, he, {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(e) {
                        var t = e.state
                          , n = e.name
                          , r = t.rects.reference
                          , i = t.rects.popper
                          , o = t.modifiersData.preventOverflow
                          , a = fe(t, {
                            elementContext: "reference"
                        })
                          , s = fe(t, {
                            altBoundary: !0
                        })
                          , u = ge(a, r)
                          , c = ge(s, i, o)
                          , l = me(u)
                          , f = me(c);
                        t.modifiersData[n] = {
                            referenceClippingOffsets: u,
                            popperEscapeOffsets: c,
                            isReferenceHidden: l,
                            hasPopperEscaped: f
                        },
                        t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-reference-hidden": l,
                            "data-popper-escaped": f
                        })
                    }
                }]
            })
              , ye = "tippy-content"
              , be = "tippy-backdrop"
              , xe = "tippy-arrow"
              , we = "tippy-svg-arrow"
              , Ae = {
                passive: !0,
                capture: !0
            }
              , Te = function() {
                return document.body
            };
            function _e(e, t, n) {
                if (Array.isArray(e)) {
                    var r = e[t];
                    return null == r ? Array.isArray(n) ? n[t] : n : r
                }
                return e
            }
            function Se(e, t) {
                var n = {}.toString.call(e);
                return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1
            }
            function Ee(e, t) {
                return "function" == typeof e ? e.apply(void 0, t) : e
            }
            function Ne(e, t) {
                return 0 === t ? e : function(r) {
                    clearTimeout(n),
                    n = setTimeout((function() {
                        e(r)
                    }
                    ), t)
                }
                ;
                var n
            }
            function ke(e) {
                return [].concat(e)
            }
            function Le(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }
            function Ce(e) {
                return e.split("-")[0]
            }
            function Oe(e) {
                return [].slice.call(e)
            }
            function Pe(e) {
                return Object.keys(e).reduce((function(t, n) {
                    return void 0 !== e[n] && (t[n] = e[n]),
                    t
                }
                ), {})
            }
            function je() {
                return document.createElement("div")
            }
            function Re(e) {
                return ["Element", "Fragment"].some((function(t) {
                    return Se(e, t)
                }
                ))
            }
            function Ie(e) {
                return Se(e, "MouseEvent")
            }
            function Me(e) {
                return !(!e || !e._tippy || e._tippy.reference !== e)
            }
            function De(e) {
                return Re(e) ? [e] : function(e) {
                    return Se(e, "NodeList")
                }(e) ? Oe(e) : Array.isArray(e) ? e : Oe(document.querySelectorAll(e))
            }
            function Be(e, t) {
                e.forEach((function(e) {
                    e && (e.style.transitionDuration = t + "ms")
                }
                ))
            }
            function qe(e, t) {
                e.forEach((function(e) {
                    e && e.setAttribute("data-state", t)
                }
                ))
            }
            function Fe(e) {
                var t, n = ke(e)[0];
                return null != n && null != (t = n.ownerDocument) && t.body ? n.ownerDocument : document
            }
            function He(e, t, n) {
                var r = t + "EventListener";
                ["transitionend", "webkitTransitionEnd"].forEach((function(t) {
                    e[r](t, n)
                }
                ))
            }
            function We(e, t) {
                for (var n = t; n; ) {
                    var r;
                    if (e.contains(n))
                        return !0;
                    n = null == n.getRootNode || null == (r = n.getRootNode()) ? void 0 : r.host
                }
                return !1
            }
            var Ue = {
                isTouch: !1
            }
              , ze = 0;
            function $e() {
                Ue.isTouch || (Ue.isTouch = !0,
                window.performance && document.addEventListener("mousemove", Ke))
            }
            function Ke() {
                var e = performance.now();
                e - ze < 20 && (Ue.isTouch = !1,
                document.removeEventListener("mousemove", Ke)),
                ze = e
            }
            function Ve() {
                var e = document.activeElement;
                if (Me(e)) {
                    var t = e._tippy;
                    e.blur && !t.state.isVisible && e.blur()
                }
            }
            var Ge = !!("undefined" != typeof window && "undefined" != typeof document) && !!window.msCrypto;
            var Ye = {
                animateFill: !1,
                followCursor: !1,
                inlinePositioning: !1,
                sticky: !1
            }
              , Je = Object.assign({
                appendTo: Te,
                aria: {
                    content: "auto",
                    expanded: "auto"
                },
                delay: 0,
                duration: [300, 250],
                getReferenceClientRect: null,
                hideOnClick: !0,
                ignoreAttributes: !1,
                interactive: !1,
                interactiveBorder: 2,
                interactiveDebounce: 0,
                moveTransition: "",
                offset: [0, 10],
                onAfterUpdate: function() {},
                onBeforeUpdate: function() {},
                onCreate: function() {},
                onDestroy: function() {},
                onHidden: function() {},
                onHide: function() {},
                onMount: function() {},
                onShow: function() {},
                onShown: function() {},
                onTrigger: function() {},
                onUntrigger: function() {},
                onClickOutside: function() {},
                placement: "top",
                plugins: [],
                popperOptions: {},
                render: null,
                showOnCreate: !1,
                touch: !0,
                trigger: "mouseenter focus",
                triggerTarget: null
            }, Ye, {
                allowHTML: !1,
                animation: "fade",
                arrow: !0,
                content: "",
                inertia: !1,
                maxWidth: 350,
                role: "tooltip",
                theme: "",
                zIndex: 9999
            })
              , Xe = Object.keys(Je);
            function Ze(e) {
                var t = (e.plugins || []).reduce((function(t, n) {
                    var r, i = n.name, o = n.defaultValue;
                    i && (t[i] = void 0 !== e[i] ? e[i] : null != (r = Je[i]) ? r : o);
                    return t
                }
                ), {});
                return Object.assign({}, e, t)
            }
            function Qe(e, t) {
                var n = Object.assign({}, t, {
                    content: Ee(t.content, [e])
                }, t.ignoreAttributes ? {} : function(e, t) {
                    return (t ? Object.keys(Ze(Object.assign({}, Je, {
                        plugins: t
                    }))) : Xe).reduce((function(t, n) {
                        var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                        if (!r)
                            return t;
                        if ("content" === n)
                            t[n] = r;
                        else
                            try {
                                t[n] = JSON.parse(r)
                            } catch (e) {
                                t[n] = r
                            }
                        return t
                    }
                    ), {})
                }(e, t.plugins));
                return n.aria = Object.assign({}, Je.aria, n.aria),
                n.aria = {
                    expanded: "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
                    content: "auto" === n.aria.content ? t.interactive ? null : "describedby" : n.aria.content
                },
                n
            }
            var et = function() {
                return "innerHTML"
            };
            function tt(e, t) {
                e[et()] = t
            }
            function nt(e) {
                var t = je();
                return !0 === e ? t.className = xe : (t.className = we,
                Re(e) ? t.appendChild(e) : tt(t, e)),
                t
            }
            function rt(e, t) {
                Re(t.content) ? (tt(e, ""),
                e.appendChild(t.content)) : "function" != typeof t.content && (t.allowHTML ? tt(e, t.content) : e.textContent = t.content)
            }
            function it(e) {
                var t = e.firstElementChild
                  , n = Oe(t.children);
                return {
                    box: t,
                    content: n.find((function(e) {
                        return e.classList.contains(ye)
                    }
                    )),
                    arrow: n.find((function(e) {
                        return e.classList.contains(xe) || e.classList.contains(we)
                    }
                    )),
                    backdrop: n.find((function(e) {
                        return e.classList.contains(be)
                    }
                    ))
                }
            }
            function ot(e) {
                var t = je()
                  , n = je();
                n.className = "tippy-box",
                n.setAttribute("data-state", "hidden"),
                n.setAttribute("tabindex", "-1");
                var r = je();
                function i(n, r) {
                    var i = it(t)
                      , o = i.box
                      , a = i.content
                      , s = i.arrow;
                    r.theme ? o.setAttribute("data-theme", r.theme) : o.removeAttribute("data-theme"),
                    "string" == typeof r.animation ? o.setAttribute("data-animation", r.animation) : o.removeAttribute("data-animation"),
                    r.inertia ? o.setAttribute("data-inertia", "") : o.removeAttribute("data-inertia"),
                    o.style.maxWidth = "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth,
                    r.role ? o.setAttribute("role", r.role) : o.removeAttribute("role"),
                    n.content === r.content && n.allowHTML === r.allowHTML || rt(a, e.props),
                    r.arrow ? s ? n.arrow !== r.arrow && (o.removeChild(s),
                    o.appendChild(nt(r.arrow))) : o.appendChild(nt(r.arrow)) : s && o.removeChild(s)
                }
                return r.className = ye,
                r.setAttribute("data-state", "hidden"),
                rt(r, e.props),
                t.appendChild(n),
                n.appendChild(r),
                i(e.props, e.props),
                {
                    popper: t,
                    onUpdate: i
                }
            }
            ot.$$tippy = !0;
            var at = 1
              , st = []
              , ut = [];
            function ct(e, t) {
                var n, r, i, o, a, s, u, c, l = Qe(e, Object.assign({}, Je, Ze(Pe(t)))), f = !1, p = !1, d = !1, h = !1, g = [], m = Ne(V, l.interactiveDebounce), v = at++, y = (c = l.plugins).filter((function(e, t) {
                    return c.indexOf(e) === t
                }
                )), b = {
                    id: v,
                    reference: e,
                    popper: je(),
                    popperInstance: null,
                    props: l,
                    state: {
                        isEnabled: !0,
                        isVisible: !1,
                        isDestroyed: !1,
                        isMounted: !1,
                        isShown: !1
                    },
                    plugins: y,
                    clearDelayTimeouts: function() {
                        clearTimeout(n),
                        clearTimeout(r),
                        cancelAnimationFrame(i)
                    },
                    setProps: function(t) {
                        0;
                        if (b.state.isDestroyed)
                            return;
                        j("onBeforeUpdate", [b, t]),
                        $();
                        var n = b.props
                          , r = Qe(e, Object.assign({}, n, Pe(t), {
                            ignoreAttributes: !0
                        }));
                        b.props = r,
                        z(),
                        n.interactiveDebounce !== r.interactiveDebounce && (M(),
                        m = Ne(V, r.interactiveDebounce));
                        n.triggerTarget && !r.triggerTarget ? ke(n.triggerTarget).forEach((function(e) {
                            e.removeAttribute("aria-expanded")
                        }
                        )) : r.triggerTarget && e.removeAttribute("aria-expanded");
                        I(),
                        P(),
                        A && A(n, r);
                        b.popperInstance && (X(),
                        Q().forEach((function(e) {
                            requestAnimationFrame(e._tippy.popperInstance.forceUpdate)
                        }
                        )));
                        j("onAfterUpdate", [b, t])
                    },
                    setContent: function(e) {
                        b.setProps({
                            content: e
                        })
                    },
                    show: function() {
                        0;
                        var e = b.state.isVisible
                          , t = b.state.isDestroyed
                          , n = !b.state.isEnabled
                          , r = Ue.isTouch && !b.props.touch
                          , i = _e(b.props.duration, 0, Je.duration);
                        if (e || t || n || r)
                            return;
                        if (k().hasAttribute("disabled"))
                            return;
                        if (j("onShow", [b], !1),
                        !1 === b.props.onShow(b))
                            return;
                        b.state.isVisible = !0,
                        N() && (w.style.visibility = "visible");
                        P(),
                        F(),
                        b.state.isMounted || (w.style.transition = "none");
                        if (N()) {
                            var o = C();
                            Be([o.box, o.content], 0)
                        }
                        s = function() {
                            var e;
                            if (b.state.isVisible && !h) {
                                if (h = !0,
                                w.offsetHeight,
                                w.style.transition = b.props.moveTransition,
                                N() && b.props.animation) {
                                    var t = C()
                                      , n = t.box
                                      , r = t.content;
                                    Be([n, r], i),
                                    qe([n, r], "visible")
                                }
                                R(),
                                I(),
                                Le(ut, b),
                                null == (e = b.popperInstance) || e.forceUpdate(),
                                j("onMount", [b]),
                                b.props.animation && N() && function(e, t) {
                                    W(e, t)
                                }(i, (function() {
                                    b.state.isShown = !0,
                                    j("onShown", [b])
                                }
                                ))
                            }
                        }
                        ,
                        function() {
                            var e, t = b.props.appendTo, n = k();
                            e = b.props.interactive && t === Te || "parent" === t ? n.parentNode : Ee(t, [n]);
                            e.contains(w) || e.appendChild(w);
                            b.state.isMounted = !0,
                            X(),
                            !1
                        }()
                    },
                    hide: function() {
                        0;
                        var e = !b.state.isVisible
                          , t = b.state.isDestroyed
                          , n = !b.state.isEnabled
                          , r = _e(b.props.duration, 1, Je.duration);
                        if (e || t || n)
                            return;
                        if (j("onHide", [b], !1),
                        !1 === b.props.onHide(b))
                            return;
                        b.state.isVisible = !1,
                        b.state.isShown = !1,
                        h = !1,
                        f = !1,
                        N() && (w.style.visibility = "hidden");
                        if (M(),
                        H(),
                        P(!0),
                        N()) {
                            var i = C()
                              , o = i.box
                              , a = i.content;
                            b.props.animation && (Be([o, a], r),
                            qe([o, a], "hidden"))
                        }
                        R(),
                        I(),
                        b.props.animation ? N() && function(e, t) {
                            W(e, (function() {
                                !b.state.isVisible && w.parentNode && w.parentNode.contains(w) && t()
                            }
                            ))
                        }(r, b.unmount) : b.unmount()
                    },
                    hideWithInteractivity: function(e) {
                        0;
                        L().addEventListener("mousemove", m),
                        Le(st, m),
                        m(e)
                    },
                    enable: function() {
                        b.state.isEnabled = !0
                    },
                    disable: function() {
                        b.hide(),
                        b.state.isEnabled = !1
                    },
                    unmount: function() {
                        0;
                        b.state.isVisible && b.hide();
                        if (!b.state.isMounted)
                            return;
                        Z(),
                        Q().forEach((function(e) {
                            e._tippy.unmount()
                        }
                        )),
                        w.parentNode && w.parentNode.removeChild(w);
                        ut = ut.filter((function(e) {
                            return e !== b
                        }
                        )),
                        b.state.isMounted = !1,
                        j("onHidden", [b])
                    },
                    destroy: function() {
                        0;
                        if (b.state.isDestroyed)
                            return;
                        b.clearDelayTimeouts(),
                        b.unmount(),
                        $(),
                        delete e._tippy,
                        b.state.isDestroyed = !0,
                        j("onDestroy", [b])
                    }
                };
                if (!l.render)
                    return b;
                var x = l.render(b)
                  , w = x.popper
                  , A = x.onUpdate;
                w.setAttribute("data-tippy-root", ""),
                w.id = "tippy-" + b.id,
                b.popper = w,
                e._tippy = b,
                w._tippy = b;
                var T = y.map((function(e) {
                    return e.fn(b)
                }
                ))
                  , _ = e.hasAttribute("aria-expanded");
                return z(),
                I(),
                P(),
                j("onCreate", [b]),
                l.showOnCreate && ee(),
                w.addEventListener("mouseenter", (function() {
                    b.props.interactive && b.state.isVisible && b.clearDelayTimeouts()
                }
                )),
                w.addEventListener("mouseleave", (function() {
                    b.props.interactive && b.props.trigger.indexOf("mouseenter") >= 0 && L().addEventListener("mousemove", m)
                }
                )),
                b;
                function S() {
                    var e = b.props.touch;
                    return Array.isArray(e) ? e : [e, 0]
                }
                function E() {
                    return "hold" === S()[0]
                }
                function N() {
                    var e;
                    return !(null == (e = b.props.render) || !e.$$tippy)
                }
                function k() {
                    return u || e
                }
                function L() {
                    var e = k().parentNode;
                    return e ? Fe(e) : document
                }
                function C() {
                    return it(w)
                }
                function O(e) {
                    return b.state.isMounted && !b.state.isVisible || Ue.isTouch || o && "focus" === o.type ? 0 : _e(b.props.delay, e ? 0 : 1, Je.delay)
                }
                function P(e) {
                    void 0 === e && (e = !1),
                    w.style.pointerEvents = b.props.interactive && !e ? "" : "none",
                    w.style.zIndex = "" + b.props.zIndex
                }
                function j(e, t, n) {
                    var r;
                    (void 0 === n && (n = !0),
                    T.forEach((function(n) {
                        n[e] && n[e].apply(n, t)
                    }
                    )),
                    n) && (r = b.props)[e].apply(r, t)
                }
                function R() {
                    var t = b.props.aria;
                    if (t.content) {
                        var n = "aria-" + t.content
                          , r = w.id;
                        ke(b.props.triggerTarget || e).forEach((function(e) {
                            var t = e.getAttribute(n);
                            if (b.state.isVisible)
                                e.setAttribute(n, t ? t + " " + r : r);
                            else {
                                var i = t && t.replace(r, "").trim();
                                i ? e.setAttribute(n, i) : e.removeAttribute(n)
                            }
                        }
                        ))
                    }
                }
                function I() {
                    !_ && b.props.aria.expanded && ke(b.props.triggerTarget || e).forEach((function(e) {
                        b.props.interactive ? e.setAttribute("aria-expanded", b.state.isVisible && e === k() ? "true" : "false") : e.removeAttribute("aria-expanded")
                    }
                    ))
                }
                function M() {
                    L().removeEventListener("mousemove", m),
                    st = st.filter((function(e) {
                        return e !== m
                    }
                    ))
                }
                function D(t) {
                    if (!Ue.isTouch || !d && "mousedown" !== t.type) {
                        var n = t.composedPath && t.composedPath()[0] || t.target;
                        if (!b.props.interactive || !We(w, n)) {
                            if (ke(b.props.triggerTarget || e).some((function(e) {
                                return We(e, n)
                            }
                            ))) {
                                if (Ue.isTouch)
                                    return;
                                if (b.state.isVisible && b.props.trigger.indexOf("click") >= 0)
                                    return
                            } else
                                j("onClickOutside", [b, t]);
                            !0 === b.props.hideOnClick && (b.clearDelayTimeouts(),
                            b.hide(),
                            p = !0,
                            setTimeout((function() {
                                p = !1
                            }
                            )),
                            b.state.isMounted || H())
                        }
                    }
                }
                function B() {
                    d = !0
                }
                function q() {
                    d = !1
                }
                function F() {
                    var e = L();
                    e.addEventListener("mousedown", D, !0),
                    e.addEventListener("touchend", D, Ae),
                    e.addEventListener("touchstart", q, Ae),
                    e.addEventListener("touchmove", B, Ae)
                }
                function H() {
                    var e = L();
                    e.removeEventListener("mousedown", D, !0),
                    e.removeEventListener("touchend", D, Ae),
                    e.removeEventListener("touchstart", q, Ae),
                    e.removeEventListener("touchmove", B, Ae)
                }
                function W(e, t) {
                    var n = C().box;
                    function r(e) {
                        e.target === n && (He(n, "remove", r),
                        t())
                    }
                    if (0 === e)
                        return t();
                    He(n, "remove", a),
                    He(n, "add", r),
                    a = r
                }
                function U(t, n, r) {
                    void 0 === r && (r = !1),
                    ke(b.props.triggerTarget || e).forEach((function(e) {
                        e.addEventListener(t, n, r),
                        g.push({
                            node: e,
                            eventType: t,
                            handler: n,
                            options: r
                        })
                    }
                    ))
                }
                function z() {
                    var e;
                    E() && (U("touchstart", K, {
                        passive: !0
                    }),
                    U("touchend", G, {
                        passive: !0
                    })),
                    (e = b.props.trigger,
                    e.split(/\s+/).filter(Boolean)).forEach((function(e) {
                        if ("manual" !== e)
                            switch (U(e, K),
                            e) {
                            case "mouseenter":
                                U("mouseleave", G);
                                break;
                            case "focus":
                                U(Ge ? "focusout" : "blur", Y);
                                break;
                            case "focusin":
                                U("focusout", Y)
                            }
                    }
                    ))
                }
                function $() {
                    g.forEach((function(e) {
                        var t = e.node
                          , n = e.eventType
                          , r = e.handler
                          , i = e.options;
                        t.removeEventListener(n, r, i)
                    }
                    )),
                    g = []
                }
                function K(e) {
                    var t, n = !1;
                    if (b.state.isEnabled && !J(e) && !p) {
                        var r = "focus" === (null == (t = o) ? void 0 : t.type);
                        o = e,
                        u = e.currentTarget,
                        I(),
                        !b.state.isVisible && Ie(e) && st.forEach((function(t) {
                            return t(e)
                        }
                        )),
                        "click" === e.type && (b.props.trigger.indexOf("mouseenter") < 0 || f) && !1 !== b.props.hideOnClick && b.state.isVisible ? n = !0 : ee(e),
                        "click" === e.type && (f = !n),
                        n && !r && te(e)
                    }
                }
                function V(e) {
                    var t = e.target
                      , n = k().contains(t) || w.contains(t);
                    if ("mousemove" !== e.type || !n) {
                        var r = Q().concat(w).map((function(e) {
                            var t, n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                            return n ? {
                                popperRect: e.getBoundingClientRect(),
                                popperState: n,
                                props: l
                            } : null
                        }
                        )).filter(Boolean);
                        (function(e, t) {
                            var n = t.clientX
                              , r = t.clientY;
                            return e.every((function(e) {
                                var t = e.popperRect
                                  , i = e.popperState
                                  , o = e.props.interactiveBorder
                                  , a = Ce(i.placement)
                                  , s = i.modifiersData.offset;
                                if (!s)
                                    return !0;
                                var u = "bottom" === a ? s.top.y : 0
                                  , c = "top" === a ? s.bottom.y : 0
                                  , l = "right" === a ? s.left.x : 0
                                  , f = "left" === a ? s.right.x : 0
                                  , p = t.top - r + u > o
                                  , d = r - t.bottom - c > o
                                  , h = t.left - n + l > o
                                  , g = n - t.right - f > o;
                                return p || d || h || g
                            }
                            ))
                        }
                        )(r, e) && (M(),
                        te(e))
                    }
                }
                function G(e) {
                    J(e) || b.props.trigger.indexOf("click") >= 0 && f || (b.props.interactive ? b.hideWithInteractivity(e) : te(e))
                }
                function Y(e) {
                    b.props.trigger.indexOf("focusin") < 0 && e.target !== k() || b.props.interactive && e.relatedTarget && w.contains(e.relatedTarget) || te(e)
                }
                function J(e) {
                    return !!Ue.isTouch && E() !== e.type.indexOf("touch") >= 0
                }
                function X() {
                    Z();
                    var t = b.props
                      , n = t.popperOptions
                      , r = t.placement
                      , i = t.offset
                      , o = t.getReferenceClientRect
                      , a = t.moveTransition
                      , u = N() ? it(w).arrow : null
                      , c = o ? {
                        getBoundingClientRect: o,
                        contextElement: o.contextElement || k()
                    } : e
                      , l = {
                        name: "$$tippy",
                        enabled: !0,
                        phase: "beforeWrite",
                        requires: ["computeStyles"],
                        fn: function(e) {
                            var t = e.state;
                            if (N()) {
                                var n = C().box;
                                ["placement", "reference-hidden", "escaped"].forEach((function(e) {
                                    "placement" === e ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e)
                                }
                                )),
                                t.attributes.popper = {}
                            }
                        }
                    }
                      , f = [{
                        name: "offset",
                        options: {
                            offset: i
                        }
                    }, {
                        name: "preventOverflow",
                        options: {
                            padding: {
                                top: 2,
                                bottom: 2,
                                left: 5,
                                right: 5
                            }
                        }
                    }, {
                        name: "flip",
                        options: {
                            padding: 5
                        }
                    }, {
                        name: "computeStyles",
                        options: {
                            adaptive: !a
                        }
                    }, l];
                    N() && u && f.push({
                        name: "arrow",
                        options: {
                            element: u,
                            padding: 3
                        }
                    }),
                    f.push.apply(f, (null == n ? void 0 : n.modifiers) || []),
                    b.popperInstance = ve(c, w, Object.assign({}, n, {
                        placement: r,
                        onFirstUpdate: s,
                        modifiers: f
                    }))
                }
                function Z() {
                    b.popperInstance && (b.popperInstance.destroy(),
                    b.popperInstance = null)
                }
                function Q() {
                    return Oe(w.querySelectorAll("[data-tippy-root]"))
                }
                function ee(e) {
                    b.clearDelayTimeouts(),
                    e && j("onTrigger", [b, e]),
                    F();
                    var t = O(!0)
                      , r = S()
                      , i = r[0]
                      , o = r[1];
                    Ue.isTouch && "hold" === i && o && (t = o),
                    t ? n = setTimeout((function() {
                        b.show()
                    }
                    ), t) : b.show()
                }
                function te(e) {
                    if (b.clearDelayTimeouts(),
                    j("onUntrigger", [b, e]),
                    b.state.isVisible) {
                        if (!(b.props.trigger.indexOf("mouseenter") >= 0 && b.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && f)) {
                            var t = O(!1);
                            t ? r = setTimeout((function() {
                                b.state.isVisible && b.hide()
                            }
                            ), t) : i = requestAnimationFrame((function() {
                                b.hide()
                            }
                            ))
                        }
                    } else
                        H()
                }
            }
            function lt(e, t) {
                void 0 === t && (t = {});
                var n = Je.plugins.concat(t.plugins || []);
                document.addEventListener("touchstart", $e, Ae),
                window.addEventListener("blur", Ve);
                var r = Object.assign({}, t, {
                    plugins: n
                })
                  , i = De(e).reduce((function(e, t) {
                    var n = t && ct(t, r);
                    return n && e.push(n),
                    e
                }
                ), []);
                return Re(e) ? i[0] : i
            }
            lt.defaultProps = Je,
            lt.setDefaultProps = function(e) {
                Object.keys(e).forEach((function(t) {
                    Je[t] = e[t]
                }
                ))
            }
            ,
            lt.currentInput = Ue;
            var ft = function(e) {
                var t = void 0 === e ? {} : e
                  , n = t.exclude
                  , r = t.duration;
                ut.forEach((function(e) {
                    var t = !1;
                    if (n && (t = Me(n) ? e.reference === n : e.popper === n.popper),
                    !t) {
                        var i = e.props.duration;
                        e.setProps({
                            duration: r
                        }),
                        e.hide(),
                        e.state.isDestroyed || e.setProps({
                            duration: i
                        })
                    }
                }
                ))
            };
            Object.assign({}, Q, {
                effect: function(e) {
                    var t = e.state
                      , n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                    Object.assign(t.elements.popper.style, n.popper),
                    t.styles = n,
                    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow)
                }
            });
            var pt = {
                name: "sticky",
                defaultValue: !1,
                fn: function(e) {
                    var t = e.reference
                      , n = e.popper;
                    function r(t) {
                        return !0 === e.props.sticky || e.props.sticky === t
                    }
                    var i = null
                      , o = null;
                    function a() {
                        var s = r("reference") ? (e.popperInstance ? e.popperInstance.state.elements.reference : t).getBoundingClientRect() : null
                          , u = r("popper") ? n.getBoundingClientRect() : null;
                        (s && dt(i, s) || u && dt(o, u)) && e.popperInstance && e.popperInstance.update(),
                        i = s,
                        o = u,
                        e.state.isMounted && requestAnimationFrame(a)
                    }
                    return {
                        onMount: function() {
                            e.props.sticky && a()
                        }
                    }
                }
            };
            function dt(e, t) {
                return !e || !t || (e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left)
            }
            lt.setDefaultProps({
                render: ot
            });
            const ht = lt
        }
        ,
        4080: (e, t, n) => {
            "use strict";
            var r = n(9202);
            e.exports = function(e) {
                if ("function" != typeof e)
                    return !1;
                if (!hasOwnProperty.call(e, "length"))
                    return !1;
                try {
                    if ("number" != typeof e.length)
                        return !1;
                    if ("function" != typeof e.call)
                        return !1;
                    if ("function" != typeof e.apply)
                        return !1
                } catch (e) {
                    return !1
                }
                return !r(e)
            }
        }
        ,
        181: (e, t, n) => {
            "use strict";
            var r = n(8175)
              , i = {
                object: !0,
                function: !0,
                undefined: !0
            };
            e.exports = function(e) {
                return !!r(e) && hasOwnProperty.call(i, typeof e)
            }
        }
        ,
        6873: (e, t, n) => {
            "use strict";
            var r = n(4080)
              , i = /^\s*class[\s{/}]/
              , o = Function.prototype.toString;
            e.exports = function(e) {
                return !!r(e) && !i.test(o.call(e))
            }
        }
        ,
        9202: (e, t, n) => {
            "use strict";
            var r = n(181);
            e.exports = function(e) {
                if (!r(e))
                    return !1;
                try {
                    return !!e.constructor && e.constructor.prototype === e
                } catch (e) {
                    return !1
                }
            }
        }
        ,
        8175: e => {
            "use strict";
            e.exports = function(e) {
                return null != e
            }
        }
        ,
        6815: function(e, t) {
            var n, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
            r = [e],
            n = function(e) {
                "use strict";
                if (!globalThis.chrome?.runtime?.id)
                    throw new Error("This script should only be loaded in a browser extension.");
                if (void 0 === globalThis.browser || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                    const t = "The message port closed before a response was received."
                      , n = e => {
                        const n = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            bookmarks: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getChildren: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getRecent: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getSubTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTree: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            browserAction: {
                                disable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                enable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                openPopup: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            browsingData: {
                                remove: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                removeCache: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCookies: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeDownloads: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFormData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeHistory: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeLocalStorage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePasswords: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePluginData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                settings: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            devtools: {
                                inspectedWindow: {
                                    eval: {
                                        minArgs: 1,
                                        maxArgs: 2,
                                        singleCallbackArg: !1
                                    }
                                },
                                panels: {
                                    create: {
                                        minArgs: 3,
                                        maxArgs: 3,
                                        singleCallbackArg: !0
                                    },
                                    elements: {
                                        createSidebarPane: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    }
                                }
                            },
                            downloads: {
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            identity: {
                                launchWebAuthFlow: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setEnabled: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            permissions: {
                                contains: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                request: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            sessions: {
                                getDevices: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getRecentlyClosed: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                restore: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                discard: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goBack: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goForward: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            topSites: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (0 === Object.keys(n).length)
                            throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class r extends WeakMap {
                            constructor(e, t=void 0) {
                                super(t),
                                this.createItem = e
                            }
                            get(e) {
                                return this.has(e) || this.set(e, this.createItem(e)),
                                super.get(e)
                            }
                        }
                        const i = e => e && "object" == typeof e && "function" == typeof e.then
                          , o = (t, n) => (...r) => {
                            e.runtime.lastError ? t.reject(new Error(e.runtime.lastError.message)) : n.singleCallbackArg || r.length <= 1 && !1 !== n.singleCallbackArg ? t.resolve(r[0]) : t.resolve(r)
                        }
                          , a = e => 1 == e ? "argument" : "arguments"
                          , s = (e, t) => function(n, ...r) {
                            if (r.length < t.minArgs)
                                throw new Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${r.length}`);
                            if (r.length > t.maxArgs)
                                throw new Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${r.length}`);
                            return new Promise(( (i, a) => {
                                if (t.fallbackToNoCallback)
                                    try {
                                        n[e](...r, o({
                                            resolve: i,
                                            reject: a
                                        }, t))
                                    } catch (o) {
                                        n[e](...r),
                                        t.fallbackToNoCallback = !1,
                                        t.noCallback = !0,
                                        i()
                                    }
                                else
                                    t.noCallback ? (n[e](...r),
                                    i()) : n[e](...r, o({
                                        resolve: i,
                                        reject: a
                                    }, t))
                            }
                            ))
                        }
                          , u = (e, t, n) => new Proxy(t,{
                            apply: (t, r, i) => n.call(r, e, ...i)
                        });
                        let c = Function.call.bind(Object.prototype.hasOwnProperty);
                        const l = (e, t={}, n={}) => {
                            let r = Object.create(null)
                              , i = {
                                has: (t, n) => n in e || n in r,
                                get(i, o, a) {
                                    if (o in r)
                                        return r[o];
                                    if (!(o in e))
                                        return;
                                    let f = e[o];
                                    if ("function" == typeof f)
                                        if ("function" == typeof t[o])
                                            f = u(e, e[o], t[o]);
                                        else if (c(n, o)) {
                                            let t = s(o, n[o]);
                                            f = u(e, e[o], t)
                                        } else
                                            f = f.bind(e);
                                    else if ("object" == typeof f && null !== f && (c(t, o) || c(n, o)))
                                        f = l(f, t[o], n[o]);
                                    else {
                                        if (!c(n, "*"))
                                            return Object.defineProperty(r, o, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get: () => e[o],
                                                set(t) {
                                                    e[o] = t
                                                }
                                            }),
                                            f;
                                        f = l(f, t[o], n["*"])
                                    }
                                    return r[o] = f,
                                    f
                                },
                                set: (t, n, i, o) => (n in r ? r[n] = i : e[n] = i,
                                !0),
                                defineProperty: (e, t, n) => Reflect.defineProperty(r, t, n),
                                deleteProperty: (e, t) => Reflect.deleteProperty(r, t)
                            }
                              , o = Object.create(e);
                            return new Proxy(o,i)
                        }
                          , f = e => ({
                            addListener(t, n, ...r) {
                                t.addListener(e.get(n), ...r)
                            },
                            hasListener: (t, n) => t.hasListener(e.get(n)),
                            removeListener(t, n) {
                                t.removeListener(e.get(n))
                            }
                        })
                          , p = new r((e => "function" != typeof e ? e : function(t) {
                            const n = l(t, {}, {
                                getContent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            });
                            e(n)
                        }
                        ))
                          , d = new r((e => "function" != typeof e ? e : function(t, n, r) {
                            let o, a, s = !1, u = new Promise((e => {
                                o = function(t) {
                                    s = !0,
                                    e(t)
                                }
                            }
                            ));
                            try {
                                a = e(t, n, o)
                            } catch (e) {
                                a = Promise.reject(e)
                            }
                            const c = !0 !== a && i(a);
                            if (!0 !== a && !c && !s)
                                return !1;
                            const l = e => {
                                e.then((e => {
                                    r(e)
                                }
                                ), (e => {
                                    let t;
                                    t = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred",
                                    r({
                                        __mozWebExtensionPolyfillReject__: !0,
                                        message: t
                                    })
                                }
                                )).catch((e => {}
                                ))
                            }
                            ;
                            return l(c ? a : u),
                            !0
                        }
                        ))
                          , h = ({reject: n, resolve: r}, i) => {
                            e.runtime.lastError ? e.runtime.lastError.message === t ? r() : n(new Error(e.runtime.lastError.message)) : i && i.__mozWebExtensionPolyfillReject__ ? n(new Error(i.message)) : r(i)
                        }
                          , g = (e, t, n, ...r) => {
                            if (r.length < t.minArgs)
                                throw new Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${r.length}`);
                            if (r.length > t.maxArgs)
                                throw new Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${r.length}`);
                            return new Promise(( (e, t) => {
                                const i = h.bind(null, {
                                    resolve: e,
                                    reject: t
                                });
                                r.push(i),
                                n.sendMessage(...r)
                            }
                            ))
                        }
                          , m = {
                            devtools: {
                                network: {
                                    onRequestFinished: f(p)
                                }
                            },
                            runtime: {
                                onMessage: f(d),
                                onMessageExternal: f(d),
                                sendMessage: g.bind(null, "sendMessage", {
                                    minArgs: 1,
                                    maxArgs: 3
                                })
                            },
                            tabs: {
                                sendMessage: g.bind(null, "sendMessage", {
                                    minArgs: 2,
                                    maxArgs: 3
                                })
                            }
                        }
                          , v = {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        };
                        return n.privacy = {
                            network: {
                                "*": v
                            },
                            services: {
                                "*": v
                            },
                            websites: {
                                "*": v
                            }
                        },
                        l(e, m, n)
                    }
                    ;
                    e.exports = n(chrome)
                } else
                    e.exports = globalThis.browser
            }
            ,
            void 0 === (i = "function" == typeof n ? n.apply(t, r) : n) || (e.exports = i)
        },
        2439: function(e) {
            var t;
            t = function() {
                return function(e) {
                    var t = {};
                    function n(r) {
                        if (t[r])
                            return t[r].exports;
                        var i = t[r] = {
                            exports: {},
                            id: r,
                            loaded: !1
                        };
                        return e[r].call(i.exports, i, i.exports, n),
                        i.loaded = !0,
                        i.exports
                    }
                    return n.m = e,
                    n.c = t,
                    n.p = "",
                    n(0)
                }([function(e, t) {
                    "use strict";
                    var n = function() {
                        function e(t) {
                            var n = this;
                            void 0 === t && (t = {
                                processTrackingProperties: {
                                    addTrackingProperties: e.defaultAddTrackingProperties,
                                    getTrackingProperties: e.defaultGetTrackingProperties
                                },
                                isErrorMessage: e.defaultIsErrorMessage,
                                receiveWindow: window,
                                name: e.createRandomString()
                            }),
                            this.pendingRequestPromises = {},
                            this.addTrackingProperties = t.processTrackingProperties && t.processTrackingProperties.addTrackingProperties || e.defaultAddTrackingProperties,
                            this.getTrackingProperties = t.processTrackingProperties && t.processTrackingProperties.getTrackingProperties || e.defaultGetTrackingProperties,
                            this.isErrorMessage = t.isErrorMessage || e.defaultIsErrorMessage,
                            this.receiveWindow = t.receiveWindow || window,
                            this.name = t.name || e.createRandomString(),
                            this.logMessages = t.logMessages || !1,
                            this.eventSourceOverrideWindow = t.eventSourceOverrideWindow,
                            this.suppressWarnings = t.suppressWarnings || !1,
                            this.logMessages,
                            this.handlers = [],
                            this.windowMessageHandler = function(e) {
                                return n.onMessageReceived(e)
                            }
                            ,
                            this.start()
                        }
                        return e.defaultAddTrackingProperties = function(t, n) {
                            return t[e.messagePropertyName] = n,
                            t
                        }
                        ,
                        e.defaultGetTrackingProperties = function(t) {
                            return t[e.messagePropertyName]
                        }
                        ,
                        e.defaultIsErrorMessage = function(e) {
                            return !!e.error
                        }
                        ,
                        e.createDeferred = function() {
                            var e = {
                                resolve: null,
                                reject: null,
                                promise: null
                            }
                              , t = new Promise((function(t, n) {
                                e.resolve = t,
                                e.reject = n
                            }
                            ));
                            return e.promise = t,
                            e
                        }
                        ,
                        e.createRandomString = function() {
                            var e = window.crypto || window.msCrypto
                              , t = new Uint32Array(1);
                            return e.getRandomValues(t),
                            t[0].toString(36).substring(1)
                        }
                        ,
                        e.prototype.addHandler = function(e) {
                            this.handlers.push(e)
                        }
                        ,
                        e.prototype.removeHandler = function(e) {
                            var t = this.handlers.indexOf(e);
                            if (-1 === t)
                                throw new Error("You attempted to remove a handler but no matching handler was found.");
                            this.handlers.splice(t, 1)
                        }
                        ,
                        e.prototype.start = function() {
                            this.receiveWindow.addEventListener("message", this.windowMessageHandler)
                        }
                        ,
                        e.prototype.stop = function() {
                            this.receiveWindow.removeEventListener("message", this.windowMessageHandler)
                        }
                        ,
                        e.prototype.postMessage = function(t, n) {
                            var r = {
                                id: e.createRandomString()
                            };
                            this.addTrackingProperties(n, r),
                            this.logMessages,
                            t.postMessage(n, "*");
                            var i = e.createDeferred();
                            return this.pendingRequestPromises[r.id] = i,
                            i.promise
                        }
                        ,
                        e.prototype.sendResponse = function(e, t, n) {
                            this.addTrackingProperties(t, n),
                            this.logMessages,
                            e.postMessage(t, "*")
                        }
                        ,
                        e.prototype.onMessageReceived = function(e) {
                            var t = this;
                            this.logMessages;
                            var n = this.eventSourceOverrideWindow || e.source
                              , r = e.data;
                            if ("object" == typeof r) {
                                var i, o;
                                try {
                                    i = this.getTrackingProperties(r)
                                } catch (e) {
                                    this.suppressWarnings
                                }
                                if (i && (o = this.pendingRequestPromises[i.id]),
                                o) {
                                    var a = !0;
                                    try {
                                        a = this.isErrorMessage(r)
                                    } catch (e) {}
                                    a ? o.reject(r) : o.resolve(r),
                                    delete this.pendingRequestPromises[i.id]
                                } else
                                    !this.handlers.some((function(e) {
                                        var o = !1;
                                        try {
                                            o = e.test(r)
                                        } catch (e) {
                                            t.suppressWarnings
                                        }
                                        if (o) {
                                            var a = void 0;
                                            try {
                                                a = Promise.resolve(e.handle(r))
                                            } catch (e) {
                                                t.suppressWarnings,
                                                a = Promise.resolve()
                                            }
                                            return a.then((function(e) {
                                                if (!e) {
                                                    var o = "Handler for message: " + JSON.stringify(r, null, "  ") + " did not return a response message. The default response message will be returned instead.";
                                                    t.suppressWarnings,
                                                    e = {
                                                        warning: o
                                                    }
                                                }
                                                t.sendResponse(n, e, i)
                                            }
                                            )),
                                            !0
                                        }
                                    }
                                    )) && this.suppressWarnings
                            } else
                                this.suppressWarnings
                        }
                        ,
                        e.messagePropertyName = "windowPostMessageProxy",
                        e
                    }();
                    t.WindowPostMessageProxy = n
                }
                ])
            }
            ,
            e.exports = t()
        },
        1902: (e, t, n) => {
            "use strict";
            n.d(t, {
                Pc: () => y,
                cT: () => g,
                u2: () => L
            });
            n(4995);
            var r, i, o = n(8669), a = n(2543), s = 0, u = 0, c = !1;
            const l = ["STYLE", "SCRIPT", "TITLE"];
            var f = {}
              , p = null;
            const d = new WeakMap;
            var h = 0;
            function g(e=window, t) {
                f = t;
                var n = f?.mouseoverEventInterval || 300;
                r = e,
                n = Number(n);
                const i = (0,
                a.debounce)((async () => {
                    v(await y(s, u))
                }
                ), n);
                window.addEventListener("mousemove", (async e => {
                    !function(e) {
                        (function(e) {
                            e.ebookWindow && (r = e.ebookWindow,
                            c = !0,
                            s = e.iframeX,
                            u = e.iframeY,
                            p = e.target)
                        }
                        )(e),
                        function(e) {
                            if (c)
                                return;
                            s = e.clientX,
                            u = e.clientY,
                            p = e.target
                        }(e)
                    }(e),
                    i()
                }
                )),
                window.addEventListener("scroll", (e => {
                    i()
                }
                ))
            }
            function m() {
                var e, t = f.mouseoverTextType;
                return e = p?.classList,
                t = ["ocr_text_div", "textFitted"].some((t => e?.contains(t))) ? "container" : t
            }
            const v = e => {
                var t = new CustomEvent("mouseoverText",{
                    bubbles: !0,
                    cancelable: !1
                });
                t.mouseoverText = e,
                document.dispatchEvent(t)
            }
            ;
            async function y(e, t) {
                var n = m();
                if (o.gt())
                    return await async function(e, t, n) {
                        var r, o = function(e, t) {
                            if (!i) {
                                (i = document.createElement("style")).id = "enable-pointer-events-on-rect",
                                i.textContent = [".kix-canvas-tile-content{pointer-events:none!important;}", "#kix-current-user-cursor-caret{pointer-events:none!important;}", ".kix-canvas-tile-content svg>g>rect{pointer-events:all!important; stroke-width:7px !important;}"].join("\n");
                                const e = document.head || document.documentElement;
                                null !== e && e.appendChild(i)
                            }
                            i.disabled = !1;
                            const n = document.elementFromPoint(e, t);
                            return i.disabled = !0,
                            n
                        }(e, t), {textElement: r, range: a} = function(e, t, n) {
                            const r = e?.getAttribute("aria-label")
                              , i = document.createTextNode(r)
                              , o = function(e, t, n) {
                                if (!e || "rect" !== e.tagName)
                                    return {};
                                const r = document.createElementNS("http://www.w3.org/2000/svg", "text")
                                  , i = e.getAttribute("transform") || ""
                                  , o = e.getAttribute("data-font-css") || "";
                                r.setAttribute("x", e.getAttribute("x")),
                                r.setAttribute("y", e.getAttribute("y")),
                                r.appendChild(n),
                                r.style.setProperty("all", "initial", "important"),
                                r.style.setProperty("transform", i, "important"),
                                r.style.setProperty("font", o, "important"),
                                r.style.setProperty("text-anchor", "start", "important"),
                                e.parentNode.appendChild(r);
                                const a = e.getBoundingClientRect()
                                  , s = r.getBoundingClientRect()
                                  , u = .5 * (a.top - s.top + (a.bottom - s.bottom));
                                return r.style.setProperty("transform", `translate(0px,${u}px) ${i}`, "important"),
                                r
                            }(e, 0, i);
                            if (!r || !o || !i)
                                return {};
                            let a = document.createRange()
                              , s = 0
                              , u = i.nodeValue.length;
                            for (; u - s > 1; ) {
                                const e = Math.floor((s + u) / 2);
                                a.setStart(i, e),
                                a.setEnd(i, u);
                                j(t, n, a.getClientRects()) ? s = e : t > a.getClientRects()[0].right ? s = u : u = e
                            }
                            return {
                                textElement: o,
                                range: a
                            }
                        }(o, e, t), s = await b(a, n);
                        return r?.remove(),
                        s
                    }(e, t, n);
                var a = function(e, t) {
                    return function(e, t, n=document) {
                        var r;
                        if (n?.caretRangeFromPoint)
                            r = n?.caretRangeFromPoint(e, t);
                        else {
                            var i = n.caretPositionFromPoint(e, t);
                            (r = document.createRange()).setStart(i.offsetNode, i.offset),
                            r.setEnd(i.offsetNode, i.offset)
                        }
                        if (r?.startContainer.nodeType !== Node.TEXT_NODE)
                            return;
                        return r
                    }(e, t, r.document) || function(e, t) {
                        var n = document.elementsFromPoint(e, t);
                        if (0 == (n = n.filter((e => e.offsetHeight < 1e3 && e.offsetWidth < 1e3))).length)
                            return;
                        var r = T(n[n.length - 1]);
                        return A(e, t, r)
                    }(e, t) || function(e, t) {
                        var n = o.T2().filter((n => _(n?.host, e, t))).map((e => Array.from(T(e)))).flat();
                        return A(e, t, n)
                    }(e, t)
                }(e, t)
                  , s = b(a, n);
                return x() || "word" !== n && "sentence" !== n || s.mouseoverText || !function(e) {
                    var t = b(e, "container");
                    return t.mouseoverText ? t : null
                }(a) ? s : b(a, n, !0)
            }
            function b(e, t, n=!1) {
                var r = {
                    mouseoverText: "",
                    mouseoverRange: e
                }
                  , i = w(e, t, n);
                return _(i, s, u) && (r.mouseoverText = o.CJ(i),
                r.mouseoverRange = i),
                r
            }
            function x() {
                return !document.createRange().expand || o.VD()
            }
            function w(e, t, n) {
                try {
                    if (!e)
                        return;
                    return e = "container" == t ? function(e) {
                        var t = e.cloneRange();
                        return t.setStartBefore(t.startContainer),
                        t.setEndAfter(t.startContainer),
                        t.setStart(t.startContainer, 0),
                        t
                    }(e) : x() || n ? function(e, t="word") {
                        var n = e.cloneRange();
                        const {x: r, y: i} = function(e) {
                            if (!e || !e.getClientRects)
                                return {
                                    x: 0,
                                    y: 0
                                };
                            const t = e.getClientRects();
                            if (0 === t.length)
                                return {
                                    x: 0,
                                    y: 0
                                };
                            const n = t[0]
                              , r = n.left + n.width / 2
                              , i = n.top + n.height / 2;
                            return {
                                x: r,
                                y: i
                            }
                        }(n);
                        var o = w(n, "container");
                        const a = o.commonAncestorContainer;
                        var s = function(e, t) {
                            const n = new Intl.Segmenter("en-US",{
                                granularity: t
                            });
                            return [...n.segment(e)]
                        }(k(a), t)
                          , u = function(e, t, n) {
                            if (!e || e.startContainer.nodeType !== Node.TEXT_NODE)
                                return null;
                            const r = e.startContainer.textContent;
                            if (!r)
                                return null;
                            const i = e.cloneRange();
                            for (let o = 0; o < r.length; o++)
                                if (i.setStart(e.startContainer, o),
                                i.setEnd(e.startContainer, o + 1),
                                S(i, t, n))
                                    return r[o];
                            return null
                        }(e, r, i)
                          , c = function(e, t) {
                            if (!t)
                                return [];
                            var n = e.map(( (e, t) => ({
                                segment: e.segment,
                                index: e.index,
                                newLine: 0,
                                itemIndex: t
                            }))).filter((e => e.segment.length > 0)).filter((e => e.segment.includes(t)));
                            return n
                        }(s, u);
                        return function(e, t, n, r) {
                            e.sort(( (e, t) => Math.abs(e.itemIndex - h) - Math.abs(t.itemIndex - h)));
                            for (const s of e)
                                try {
                                    var i = s.index + s.newLine
                                      , o = s.segment.length
                                      , a = document.createRange();
                                    const e = E(t, i)
                                      , u = E(t, i + o);
                                    if (a.setStart(e.node, e.index),
                                    a.setEnd(u.node, u.index),
                                    S(a, n, r))
                                        return h = s.itemIndex,
                                        a
                                } catch (e) {}
                            return null
                        }(c, a, r, i)
                    }(e, t) : function(e, t) {
                        var n = e.cloneRange();
                        return n.expand(t),
                        n
                    }(e, t),
                    e
                } catch (e) {}
            }
            function A(e, t, n) {
                var r;
                if ((r = (r = n.filter((e => e.data.trim())).filter((n => _(function(e) {
                    var t = document.createRange();
                    return t.setStart(e, 0),
                    t.setEnd(e, e.length),
                    t
                }(n), e, t))).map((e => Array.from(function(e) {
                    var t = [];
                    for (let r = 0; r < e.length - 1; r++) {
                        var n = document.createRange();
                        n.setStart(e, r),
                        n.setEnd(e, r + 1),
                        t.push(n)
                    }
                    return t
                }(e)))).flat()).filter((n => _(n, e, t)))).length)
                    return r[0]
            }
            function T(e) {
                return function(e, t=NodeFilter.SHOW_ALL, {inspect: n, collect: r, callback: i}={}) {
                    const o = document.createTreeWalker(e, t, {
                        acceptNode: e => n && !n(e) ? NodeFilter.FILTER_REJECT : r && !r(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                    })
                      , a = [];
                    let s;
                    for (; s = o.nextNode(); )
                        i?.(s),
                        a.push(s);
                    return a
                }(e, NodeFilter.SHOW_TEXT, {
                    inspect: e => !l.includes(e?.parentElement?.nodeName)
                })
            }
            function _(e, t, n) {
                try {
                    if (!e)
                        return !1;
                    var r = e.getBoundingClientRect();
                    return !(r.left > t || r.right < t || r.top > n || r.bottom < n)
                } catch (e) {
                    return !1
                }
            }
            function S(e, t, n) {
                const r = e.getClientRects();
                for (const e of r)
                    if (t >= e.left && t <= e.right && n >= e.top && n <= e.bottom)
                        return !0;
                return !1
            }
            function E(e, t) {
                if (e.nodeType === Node.TEXT_NODE)
                    return {
                        node: e,
                        index: t
                    };
                let n = 0;
                for (const r of e.childNodes) {
                    const e = N(r);
                    if (n <= t && t <= n + e)
                        return E(r, t - n);
                    n += e
                }
                return {
                    node: e,
                    index: t
                }
            }
            function N(e) {
                if (d.has(e))
                    return d.get(e);
                let t;
                return t = e.nodeType === Node.TEXT_NODE ? e?.textContent?.length || 0 : Array.from(e.childNodes).reduce(( (e, t) => e + N(t)), 0),
                d.set(e, t),
                t
            }
            function k(e) {
                return e.nodeType === Node.TEXT_NODE ? e.textContent || "" : Array.from(e.childNodes).reduce(( (e, t) => e + k(t)), "")
            }
            function L(e, t) {
                let n = e
                  , r = 1;
                for (; n && (o = e,
                (i = n).startContainer === o.startContainer && i.startOffset === o.startOffset && i.endContainer === o.endContainer && i.endOffset === o.endOffset); )
                    n = C(n, r),
                    n = w(n, t),
                    r += 1;
                var i, o;
                return n
            }
            function C(e, t=1) {
                const n = e.endContainer
                  , r = e.endOffset
                  , i = e.cloneRange()
                  , {node: o, index: a} = O(n, r + t);
                return i.setStart(o, a),
                i.setEnd(o, a),
                i
            }
            function O(e, t) {
                if (!e)
                    return;
                const {node: n, index: r} = E(e, t);
                if (!n.length || r >= n.length) {
                    return O(P(e), 0)
                }
                return {
                    node: n,
                    index: r
                }
            }
            function P(e) {
                if (!(e === document.body || e instanceof ShadowRoot))
                    return e.nextElementSibling || P(e.parentElement)
            }
            function j(e, t, n) {
                for (const r of n)
                    if (e >= Math.floor(r.left) && e <= Math.floor(r.right) && t >= Math.floor(r.top) && t <= Math.floor(r.bottom))
                        return !0;
                return !1
            }
        }
        ,
        5093: (e, t, n) => {
            "use strict";
            n.d(t, {
                Rh: () => u,
                u0: () => l
            });
            var r, i = n(5652), o = n(2543), a = n(8669), s = !1;
            function u(e=window, t=.7) {
                r = e,
                t = 1e3 * Number(t);
                const n = (0,
                o.debounce)(( () => {
                    c(l())
                }
                ), t);
                function i(e) {
                    try {
                        return "none" == getComputedStyle(e).getPropertyValue("user-select")
                    } catch (e) {
                        return !1
                    }
                }
                r.document.addEventListener("selectionchange", n, !1),
                r.document.addEventListener("mouseup", (function(e) {
                    var t = i(e.target) && s ? "" : l();
                    c(t)
                }
                ), !1),
                r.document.addEventListener("mousedown", (function(e) {
                    s = i(e.target)
                }
                ), !1)
            }
            const c = e => {
                var t = new CustomEvent("selectionEnd",{
                    bubbles: !0,
                    cancelable: !1
                });
                t.selectedText = e,
                document.dispatchEvent(t)
            }
            ;
            function l() {
                return a.gt() ? function() {
                    var e = (0,
                    i.A)(".docs-texteventtarget-iframe").contents()
                      , t = e.find("[contenteditable=true]").get(0)
                      , n = new CustomEvent("copy");
                    t?.dispatchEvent(n);
                    var r = "";
                    return e.find("span").each((function() {
                        r += (0,
                        i.A)(this).text() + " "
                    }
                    )),
                    r = r.trim()
                }() : (e = function() {
                    var e = r.getSelection()
                      , t = document.createElement("div");
                    if (e.rangeCount)
                        for (var n = 0, i = e.rangeCount; n < i; ++n)
                            t.appendChild(e.getRangeAt(n).cloneContents());
                    return t
                }(),
                t = a.c5(e),
                n = r?.getSelection()?.toString(),
                n || t);
                var e, t, n
            }
        }
        ,
        1454: (e, t, n) => {
            "use strict";
            n.d(t, {
                H: () => x,
                c: () => b
            });
            var r = n(5652)
              , i = n(2439)
              , o = (n(5955),
            n(8619),
            n(8669))
              , a = n(8941)
              , s = n(9244)
              , u = n(7333);
            const c = new i.WindowPostMessageProxy({
                suppressWarnings: !0
            });
            var l, f = {}, p = {}, d = {}, h = {}, g = "ocrFrame", m = "opencvFrame";
            const v = .8;
            var y = 7;
            async function b(e, t, n, r) {
                if (r[n.keyDownOCR]) {
                    var i = o.fZ(e, t);
                    if (i && !f[i?.src]) {
                        l = n,
                        f[i.src] = i,
                        h[i.src] = [],
                        d[i.src] = [];
                        var a = l.ocrLang;
                        i.style.cursor = "wait";
                        var s = (await Promise.all([E(i.src), A().then(( () => async function(e) {
                            _(e, "auto"),
                            _(e, "bbox")
                        }(a)))]))[0];
                        await Promise.all([w(i.src, a, s, i, "BLUE", "auto"), w(i.src, a, s, i, "RED", "bbox_small"), w(i.src, a, s, i, "GREEN", "bbox"), w(i.src, a, s, i, "ORANGE", "bbox_white_useOpencvImg"), w(i.src, a, s, i, "PURPLE", "bbox_black_useOpencvImg")]),
                        O(i)
                    }
                }
            }
            function x() {
                for (var e in f)
                    O(f[e]);
                !function() {
                    for (let e in p)
                        p[e].remove()
                }(),
                (0,
                r.A)(".ocr_text_div").remove(),
                p = {},
                f = {},
                (0,
                s.cJ)({
                    duration: 0
                }),
                d = {},
                h = {}
            }
            async function w(e, t, n, r, i, o="auto") {
                if (n) {
                    var s = 1
                      , u = [[]];
                    if (o.includes("bbox"))
                        var {bboxList: u, base64Url: n, ratio: s} = await async function(e, t, n, r) {
                            return await S({
                                type: "segmentBox",
                                mainUrl: e,
                                lang: t,
                                base64Url: n,
                                mode: r
                            }, p[m])
                        }(e, t, n, o);
                    await Promise.all(u.map((async i => {
                        var u = await async function(e, t, n, r, i) {
                            return await S({
                                type: "ocr",
                                mainUrl: e,
                                lang: t,
                                bboxList: n,
                                base64Url: r,
                                mode: i
                            }, p[g])
                        }(e, t, [i], n, o);
                        !async function(e, t, n) {
                            var r = function(e) {
                                var t = [];
                                for (var n of e) {
                                    var {data: r} = n;
                                    for (var i of r.blocks) {
                                        var o = C(i.text);
                                        o = a.A.filterWord(o),
                                        /^\s*$/.test(o) || o.length < 2 || i.confidence < 70 || (i.confidence = parseInt(i.confidence),
                                        i.text = o,
                                        t.push(i))
                                    }
                                }
                                return t
                            }(t);
                            r.forEach((e => function(e, t) {
                                e.bbox.x0 = Math.floor(e.bbox.x0 / t),
                                e.bbox.y0 = Math.floor(e.bbox.y0 / t),
                                e.bbox.x1 = Math.ceil(e.bbox.x1 / t),
                                e.bbox.y1 = Math.ceil(e.bbox.y1 / t)
                            }(e, n))),
                            async function(e, t) {
                                var n = function(e, t) {
                                    const n = 15
                                      , r = t.filter((t => !d[e.src].some((e => {
                                        const r = Math.abs(e.bbox.x0 - t.bbox.x0) < n && Math.abs(e.bbox.y0 - t.bbox.y0) < n && Math.abs(e.bbox.x1 - t.bbox.x1) < n && Math.abs(e.bbox.y1 - t.bbox.y1) < n
                                          , i = N(e.text, t.text) > v;
                                        return r || i
                                    }
                                    ))));
                                    return d[e.src] = d[e.src].concat(t),
                                    r
                                }(e, t);
                                for (var r of n) {
                                    var {targetText: i, sourceLang: o, targetLang: a} = await P(r.text);
                                    if (!i || i.length < 2)
                                        continue;
                                    const t = h[e.src].some((e => N(e, i) > v));
                                    i.length > r.text.length * y || t || (h[e.src].push(i),
                                    k(e, r, i, a))
                                }
                            }(e, r)
                        }(r, u.ocrData, s)
                    }
                    )))
                }
            }
            async function A() {
                await Promise.all([T(m, "/opencvHandler.html"), T(g, "/ocr.html")])
            }
            async function T(e, t) {
                return p[e] || (p[e] = await function(e, t) {
                    var n = {
                        width: "700",
                        height: "700",
                        pointerEvents: "auto",
                        opacity: 1
                    }
                      , i = {
                        width: "1",
                        height: "1",
                        pointerEvents: "none",
                        opacity: 0
                    };
                    return new Promise((function(a, s) {
                        var u = (0,
                        r.A)("<iframe />", {
                            name: e,
                            id: e,
                            src: o.be(t),
                            css: e.includes("Debug") ? n : i
                        }).appendTo("body").on("load", ( () => {
                            a(u)
                        }
                        )).get(0)
                    }
                    ))
                }(e, t)),
                p[e]
            }
            async function _(e, t) {
                return await S({
                    type: "init",
                    lang: e,
                    mode: t
                }, p[g])
            }
            async function S(e, t) {
                return await c.postMessage(t.contentWindow, e)
            }
            async function E(e) {
                var t;
                if (!(t = await o.In(e)))
                    var {base64Url: t} = await o.JU(e);
                return t
            }
            function N(e, t) {
                const n = e.length
                  , r = t.length
                  , i = Array.from({
                    length: n + 1
                }, ( () => Array(r + 1).fill(0)));
                for (let e = 0; e <= n; e++)
                    i[e][0] = e;
                for (let e = 0; e <= r; e++)
                    i[0][e] = e;
                for (let o = 1; o <= n; o++)
                    for (let n = 1; n <= r; n++)
                        e[o - 1] === t[n - 1] ? i[o][n] = i[o - 1][n - 1] : i[o][n] = Math.min(i[o - 1][n], i[o][n - 1], i[o - 1][n - 1]) + 1;
                return 1 - i[n][r] / Math.max(n, r)
            }
            function k(e, t, n, i) {
                var o = 1e5 + t.text.length + t.confidence
                  , a = Math.max(200, t.bbox.x1 - t.bbox.x0);
                const {left: c, top: l, width: f, height: p} = L(e, t.bbox)
                  , d = (0,
                r.A)("<span/>", {
                    text: n,
                    css: {
                        wordWrap: "break-word",
                        zIndex: 1e5,
                        pointerEvents: "auto",
                        dir: (0,
                        u.sO)(i)
                    }
                })
                  , h = (0,
                r.A)("<div/>", {
                    css: {
                        position: "absolute",
                        left: `${c}px`,
                        top: `${l + .7 * p}px`,
                        width: `${f}px`,
                        height: "1px",
                        zIndex: o,
                        pointerEvents: "none"
                    }
                }).appendTo(e.parentElement)
                  , g = (0,
                s.Ay)(h[0], {
                    content: d[0],
                    allowHTML: !0,
                    theme: "ocr",
                    placement: "top",
                    zIndex: o,
                    arrow: !1,
                    role: "mtttooltip",
                    showOnCreate: !0,
                    hideOnClick: !1,
                    maxWidth: `${a}px`,
                    popperOptions: {
                        modifiers: [{
                            name: "flip",
                            options: {
                                fallbackPlacements: []
                            }
                        }, {
                            name: "preventOverflow",
                            options: {
                                altAxis: !1,
                                tether: !1
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [0, 0]
                            }
                        }]
                    }
                });
                d.on("mouseenter", ( () => {
                    g.setProps({
                        theme: "transparent"
                    }),
                    d.css("opacity", 0)
                }
                )),
                d.on("mouseleave", ( () => {
                    g.setProps({
                        theme: "ocr"
                    }),
                    d.css("opacity", 1)
                }
                )),
                (0,
                r.A)(window).on("resize", ( () => {
                    const {left: n, top: r, width: i, height: o} = L(e, t.bbox);
                    h.css({
                        left: `${n}px`,
                        top: `${r + .7 * o}px`,
                        width: `${i}px`,
                        height: "1px"
                    })
                }
                ))
            }
            function L(e, t) {
                const n = e.offsetLeft
                  , r = e.offsetTop
                  , i = e.offsetWidth / e.naturalWidth
                  , o = e.offsetHeight / e.naturalHeight;
                return {
                    left: n + i * t.x0,
                    top: r + o * t.y0,
                    width: i * (t.x1 - t.x0),
                    height: o * (t.y1 - t.y0)
                }
            }
            function C(e) {
                return e.replace(/[`・〉«¢~「」〃ゝゞヽヾ●▲♩ヽ÷①↓®▽■◆『£〆∴∞▼™↑←~@#$%^&“*()_|+\-=;…【】:'"<>\{\}\[\]\\\/]/gi, "")
            }
            function O(e) {
                e.style.cursor = ""
            }
            async function P(e) {
                var t = l.translatorVendor;
                return "bing" !== t && "google" !== t && (t = "google"),
                await o.yC(e, l.translateSource, l.translateTarget, l.translateReverseTarget, t)
            }
        }
        ,
        7700: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => re
            });
            var r = new TextEncoder;
            var i = new Set([101, 103, 204, 205, 304]);
            var o = /(%?)(%([sdijo]))/g;
            function a(e, ...t) {
                if (0 === t.length)
                    return e;
                let n = 0
                  , r = e.replace(o, ( (e, r, i, o) => {
                    const a = function(e, t) {
                        switch (t) {
                        case "s":
                            return e;
                        case "d":
                        case "i":
                            return Number(e);
                        case "j":
                            return JSON.stringify(e);
                        case "o":
                            {
                                if ("string" == typeof e)
                                    return e;
                                const t = JSON.stringify(e);
                                return "{}" === t || "[]" === t || /^\[object .+?\]$/.test(t) ? e : t
                            }
                        }
                    }(t[n], o);
                    return r ? e : (n++,
                    a)
                }
                ));
                return n < t.length && (r += ` ${t.slice(n).join(" ")}`),
                r = r.replace(/%{2,2}/g, "%"),
                r
            }
            var s = class extends Error {
                constructor(e, ...t) {
                    super(e),
                    this.message = e,
                    this.name = "Invariant Violation",
                    this.message = a(e, ...t),
                    function(e) {
                        if (!e.stack)
                            return;
                        const t = e.stack.split("\n");
                        t.splice(1, 2),
                        e.stack = t.join("\n")
                    }(this)
                }
            }
              , u = (e, t, ...n) => {
                if (!e)
                    throw new s(t,...n)
            }
            ;
            u.as = (e, t, n, ...r) => {
                if (!t) {
                    const t = 0 === r.length ? n : a(n, r);
                    let i;
                    try {
                        i = Reflect.construct(e, [t])
                    } catch (n) {
                        i = e(t)
                    }
                    throw i
                }
            }
            ;
            var c = class extends Promise {
                #e;
                resolve;
                reject;
                constructor(e=null) {
                    const t = function() {
                        const e = (t, n) => {
                            e.state = "pending",
                            e.resolve = n => {
                                if ("pending" === e.state)
                                    return e.result = n,
                                    t(n instanceof Promise ? n : Promise.resolve(n).then((t => (e.state = "fulfilled",
                                    t))))
                            }
                            ,
                            e.reject = t => {
                                if ("pending" === e.state)
                                    return queueMicrotask(( () => {
                                        e.state = "rejected"
                                    }
                                    )),
                                    n(e.rejectionReason = t)
                            }
                        }
                        ;
                        return e
                    }();
                    super(( (n, r) => {
                        t(n, r),
                        e?.(t.resolve, t.reject)
                    }
                    )),
                    this.#e = t,
                    this.resolve = this.#e.resolve,
                    this.reject = this.#e.reject
                }
                get state() {
                    return this.#e.state
                }
                get rejectionReason() {
                    return this.#e.rejectionReason
                }
                then(e, t) {
                    return this.#t(super.then(e, t))
                }
                catch(e) {
                    return this.#t(super.catch(e))
                }
                finally(e) {
                    return this.#t(super.finally(e))
                }
                #t(e) {
                    return Object.defineProperties(e, {
                        resolve: {
                            configurable: !0,
                            value: this.resolve
                        },
                        reject: {
                            configurable: !0,
                            value: this.reject
                        }
                    })
                }
            }
              , l = class {
                constructor(e) {
                    this.request = e,
                    this.responsePromise = new c
                }
                respondWith(e) {
                    u("pending" === this.responsePromise.state, 'Failed to respond to "%s %s" request: the "request" event has already been responded to.', this.request.method, this.request.url),
                    this.responsePromise.resolve(e)
                }
            }
            ;
            var f = Symbol("isPatchedModule");
            function p() {
                if ("undefined" != typeof navigator && "ReactNative" === navigator.product)
                    return !0;
                if ("undefined" != typeof process) {
                    const e = process.type;
                    return "renderer" !== e && "worker" !== e && !(!process.versions || !process.versions.node)
                }
                return !1
            }
            var d = Object.defineProperty
              , h = {};
            function g(e) {
                return `[33m${e}[0m`
            }
            function m(e) {
                return `[34m${e}[0m`
            }
            function v(e) {
                return `[90m${e}[0m`
            }
            function y(e) {
                return `[31m${e}[0m`
            }
            function b(e) {
                return `[32m${e}[0m`
            }
            ( (e, t) => {
                for (var n in t)
                    d(e, n, {
                        get: t[n],
                        enumerable: !0
                    })
            }
            )(h, {
                blue: () => m,
                gray: () => v,
                green: () => b,
                red: () => y,
                yellow: () => g
            });
            var x = p()
              , w = class {
                constructor(e) {
                    this.name = e,
                    this.prefix = `[${this.name}]`;
                    const t = N("DEBUG")
                      , n = N("LOG_LEVEL");
                    "1" === t || "true" === t || void 0 !== t && this.name.startsWith(t) ? (this.debug = k(n, "debug") ? T : this.debug,
                    this.info = k(n, "info") ? T : this.info,
                    this.success = k(n, "success") ? T : this.success,
                    this.warning = k(n, "warning") ? T : this.warning,
                    this.error = k(n, "error") ? T : this.error) : (this.info = T,
                    this.success = T,
                    this.warning = T,
                    this.error = T,
                    this.only = T)
                }
                prefix;
                extend(e) {
                    return new w(`${this.name}:${e}`)
                }
                debug(e, ...t) {
                    this.logEntry({
                        level: "debug",
                        message: v(e),
                        positionals: t,
                        prefix: this.prefix,
                        colors: {
                            prefix: "gray"
                        }
                    })
                }
                info(e, ...t) {
                    this.logEntry({
                        level: "info",
                        message: e,
                        positionals: t,
                        prefix: this.prefix,
                        colors: {
                            prefix: "blue"
                        }
                    });
                    const n = new A;
                    return (e, ...t) => {
                        n.measure(),
                        this.logEntry({
                            level: "info",
                            message: `${e} ${v(`${n.deltaTime}ms`)}`,
                            positionals: t,
                            prefix: this.prefix,
                            colors: {
                                prefix: "blue"
                            }
                        })
                    }
                }
                success(e, ...t) {
                    this.logEntry({
                        level: "info",
                        message: e,
                        positionals: t,
                        prefix: `✔ ${this.prefix}`,
                        colors: {
                            timestamp: "green",
                            prefix: "green"
                        }
                    })
                }
                warning(e, ...t) {
                    this.logEntry({
                        level: "warning",
                        message: e,
                        positionals: t,
                        prefix: `⚠ ${this.prefix}`,
                        colors: {
                            timestamp: "yellow",
                            prefix: "yellow"
                        }
                    })
                }
                error(e, ...t) {
                    this.logEntry({
                        level: "error",
                        message: e,
                        positionals: t,
                        prefix: `✖ ${this.prefix}`,
                        colors: {
                            timestamp: "red",
                            prefix: "red"
                        }
                    })
                }
                only(e) {
                    e()
                }
                createEntry(e, t) {
                    return {
                        timestamp: new Date,
                        level: e,
                        message: t
                    }
                }
                logEntry(e) {
                    const {level: t, message: n, prefix: r, colors: i, positionals: o=[]} = e
                      , a = this.createEntry(t, n)
                      , s = {
                        timestamp: h[i?.timestamp || "gray"],
                        prefix: h[i?.prefix || "gray"]
                    };
                    this.getWriter(t)([s.timestamp(this.formatTimestamp(a.timestamp))].concat(null != r ? s.prefix(r) : []).concat(L(n)).join(" "), ...o.map(L))
                }
                formatTimestamp(e) {
                    return `${e.toLocaleTimeString("en-GB")}:${e.getMilliseconds()}`
                }
                getWriter(e) {
                    switch (e) {
                    case "debug":
                    case "success":
                    case "info":
                        return _;
                    case "warning":
                        return S;
                    case "error":
                        return E
                    }
                }
            }
              , A = class {
                startTime;
                endTime;
                deltaTime;
                constructor() {
                    this.startTime = performance.now()
                }
                measure() {
                    this.endTime = performance.now();
                    const e = this.endTime - this.startTime;
                    this.deltaTime = e.toFixed(2)
                }
            }
              , T = () => {}
            ;
            function _(e, ...t) {
                x && process.stdout.write(a(e, ...t) + "\n")
            }
            function S(e, ...t) {
                x && process.stderr.write(a(e, ...t) + "\n")
            }
            function E(e, ...t) {
                x && process.stderr.write(a(e, ...t) + "\n")
            }
            function N(e) {
                return x ? process.env[e] : globalThis[e]?.toString()
            }
            function k(e, t) {
                return void 0 !== e && e !== t
            }
            function L(e) {
                return void 0 === e ? "undefined" : null === e ? "null" : "string" == typeof e ? e : "object" == typeof e ? JSON.stringify(e) : e.toString()
            }
            var C = class extends Error {
                constructor(e, t, n) {
                    super(`Possible EventEmitter memory leak detected. ${n} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`),
                    this.emitter = e,
                    this.type = t,
                    this.count = n,
                    this.name = "MaxListenersExceededWarning"
                }
            }
              , O = class {
                static listenerCount(e, t) {
                    return e.listenerCount(t)
                }
                constructor() {
                    this.events = new Map,
                    this.maxListeners = O.defaultMaxListeners,
                    this.hasWarnedAboutPotentialMemoryLeak = !1
                }
                _emitInternalEvent(e, t, n) {
                    this.emit(e, t, n)
                }
                _getListeners(e) {
                    return Array.prototype.concat.apply([], this.events.get(e)) || []
                }
                _removeListener(e, t) {
                    const n = e.indexOf(t);
                    return n > -1 && e.splice(n, 1),
                    []
                }
                _wrapOnceListener(e, t) {
                    const n = (...r) => (this.removeListener(e, n),
                    t.apply(this, r));
                    return Object.defineProperty(n, "name", {
                        value: t.name
                    }),
                    n
                }
                setMaxListeners(e) {
                    return this.maxListeners = e,
                    this
                }
                getMaxListeners() {
                    return this.maxListeners
                }
                eventNames() {
                    return Array.from(this.events.keys())
                }
                emit(e, ...t) {
                    const n = this._getListeners(e);
                    return n.forEach((e => {
                        e.apply(this, t)
                    }
                    )),
                    n.length > 0
                }
                addListener(e, t) {
                    this._emitInternalEvent("newListener", e, t);
                    const n = this._getListeners(e).concat(t);
                    if (this.events.set(e, n),
                    this.maxListeners > 0 && this.listenerCount(e) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
                        this.hasWarnedAboutPotentialMemoryLeak = !0;
                        new C(this,e,this.listenerCount(e))
                    }
                    return this
                }
                on(e, t) {
                    return this.addListener(e, t)
                }
                once(e, t) {
                    return this.addListener(e, this._wrapOnceListener(e, t))
                }
                prependListener(e, t) {
                    const n = this._getListeners(e);
                    if (n.length > 0) {
                        const r = [t].concat(n);
                        this.events.set(e, r)
                    } else
                        this.events.set(e, n.concat(t));
                    return this
                }
                prependOnceListener(e, t) {
                    return this.prependListener(e, this._wrapOnceListener(e, t))
                }
                removeListener(e, t) {
                    const n = this._getListeners(e);
                    return n.length > 0 && (this._removeListener(n, t),
                    this.events.set(e, n),
                    this._emitInternalEvent("removeListener", e, t)),
                    this
                }
                off(e, t) {
                    return this.removeListener(e, t)
                }
                removeAllListeners(e) {
                    return e ? this.events.delete(e) : this.events.clear(),
                    this
                }
                listeners(e) {
                    return Array.from(this._getListeners(e))
                }
                listenerCount(e) {
                    return this._getListeners(e).length
                }
                rawListeners(e) {
                    return this.listeners(e)
                }
            }
              , P = O;
            function j(e) {
                return globalThis[e] || void 0
            }
            P.defaultMaxListeners = 10;
            var R = class {
                constructor(e) {
                    this.symbol = e,
                    this.readyState = "INACTIVE",
                    this.emitter = new P,
                    this.subscriptions = [],
                    this.logger = new w(e.description),
                    this.emitter.setMaxListeners(0),
                    this.logger.info("constructing the interceptor...")
                }
                checkEnvironment() {
                    return !0
                }
                apply() {
                    const e = this.logger.extend("apply");
                    if (e.info("applying the interceptor..."),
                    "APPLIED" === this.readyState)
                        return void e.info("intercepted already applied!");
                    if (!this.checkEnvironment())
                        return void e.info("the interceptor cannot be applied in this environment!");
                    this.readyState = "APPLYING";
                    const t = this.getInstance();
                    if (t)
                        return e.info("found a running instance, reusing..."),
                        this.on = (n, r) => (e.info('proxying the "%s" listener', n),
                        t.emitter.addListener(n, r),
                        this.subscriptions.push(( () => {
                            t.emitter.removeListener(n, r),
                            e.info('removed proxied "%s" listener!', n)
                        }
                        )),
                        this),
                        void (this.readyState = "APPLIED");
                    e.info("no running instance found, setting up a new instance..."),
                    this.setup(),
                    this.setInstance(),
                    this.readyState = "APPLIED"
                }
                setup() {}
                on(e, t) {
                    const n = this.logger.extend("on");
                    return "DISPOSING" === this.readyState || "DISPOSED" === this.readyState ? (n.info("cannot listen to events, already disposed!"),
                    this) : (n.info('adding "%s" event listener:', e, t),
                    this.emitter.on(e, t),
                    this)
                }
                once(e, t) {
                    return this.emitter.once(e, t),
                    this
                }
                off(e, t) {
                    return this.emitter.off(e, t),
                    this
                }
                removeAllListeners(e) {
                    return this.emitter.removeAllListeners(e),
                    this
                }
                dispose() {
                    const e = this.logger.extend("dispose");
                    if ("DISPOSED" !== this.readyState)
                        if (e.info("disposing the interceptor..."),
                        this.readyState = "DISPOSING",
                        this.getInstance()) {
                            if (this.clearInstance(),
                            e.info("global symbol deleted:", j(this.symbol)),
                            this.subscriptions.length > 0) {
                                e.info("disposing of %d subscriptions...", this.subscriptions.length);
                                for (const e of this.subscriptions)
                                    e();
                                this.subscriptions = [],
                                e.info("disposed of all subscriptions!", this.subscriptions.length)
                            }
                            this.emitter.removeAllListeners(),
                            e.info("destroyed the listener!"),
                            this.readyState = "DISPOSED"
                        } else
                            e.info("no interceptors running, skipping dispose...");
                    else
                        e.info("cannot dispose, already disposed!")
                }
                getInstance() {
                    var e;
                    const t = j(this.symbol);
                    return this.logger.info("retrieved global instance:", null == (e = null == t ? void 0 : t.constructor) ? void 0 : e.name),
                    t
                }
                setInstance() {
                    var e, t;
                    e = this.symbol,
                    t = this,
                    globalThis[e] = t,
                    this.logger.info("set global instance!", this.symbol.description)
                }
                clearInstance() {
                    var e;
                    e = this.symbol,
                    delete globalThis[e],
                    this.logger.info("cleared global instance!", this.symbol.description)
                }
            }
            ;
            var I = class {
                constructor(e, t) {
                    this.AT_TARGET = 0,
                    this.BUBBLING_PHASE = 0,
                    this.CAPTURING_PHASE = 0,
                    this.NONE = 0,
                    this.type = "",
                    this.srcElement = null,
                    this.currentTarget = null,
                    this.eventPhase = 0,
                    this.isTrusted = !0,
                    this.composed = !1,
                    this.cancelable = !0,
                    this.defaultPrevented = !1,
                    this.bubbles = !0,
                    this.lengthComputable = !0,
                    this.loaded = 0,
                    this.total = 0,
                    this.cancelBubble = !1,
                    this.returnValue = !0,
                    this.type = e,
                    this.target = (null == t ? void 0 : t.target) || null,
                    this.currentTarget = (null == t ? void 0 : t.currentTarget) || null,
                    this.timeStamp = Date.now()
                }
                composedPath() {
                    return []
                }
                initEvent(e, t, n) {
                    this.type = e,
                    this.bubbles = !!t,
                    this.cancelable = !!n
                }
                preventDefault() {
                    this.defaultPrevented = !0
                }
                stopPropagation() {}
                stopImmediatePropagation() {}
            }
              , M = class extends I {
                constructor(e, t) {
                    super(e),
                    this.lengthComputable = (null == t ? void 0 : t.lengthComputable) || !1,
                    this.composed = (null == t ? void 0 : t.composed) || !1,
                    this.loaded = (null == t ? void 0 : t.loaded) || 0,
                    this.total = (null == t ? void 0 : t.total) || 0
                }
            }
              , D = "undefined" != typeof ProgressEvent;
            function B(e, t) {
                if (!(t in e))
                    return null;
                if (Object.prototype.hasOwnProperty.call(e, t))
                    return e;
                const n = Reflect.getPrototypeOf(e);
                return n ? B(n, t) : null
            }
            function q(e, t) {
                const n = new Proxy(e,function(e) {
                    const {constructorCall: t, methodCall: n, getProperty: r, setProperty: i} = e
                      , o = {};
                    void 0 !== t && (o.construct = function(e, n, r) {
                        const i = Reflect.construct.bind(null, e, n, r);
                        return t.call(r, n, i)
                    }
                    );
                    return o.set = function(e, t, n) {
                        const r = () => {
                            const r = B(e, t) || e
                              , i = Reflect.getOwnPropertyDescriptor(r, t);
                            return void 0 !== (null == i ? void 0 : i.set) ? (i.set.apply(e, [n]),
                            !0) : Reflect.defineProperty(r, t, {
                                writable: !0,
                                enumerable: !0,
                                configurable: !0,
                                value: n
                            })
                        }
                        ;
                        return void 0 !== i ? i.call(e, [t, n], r) : r()
                    }
                    ,
                    o.get = function(e, t, i) {
                        const o = () => e[t]
                          , a = void 0 !== r ? r.call(e, [t, i], o) : o();
                        return "function" == typeof a ? (...r) => {
                            const i = a.bind(e, ...r);
                            return void 0 !== n ? n.call(e, [t, r], i) : i()
                        }
                        : a
                    }
                    ,
                    o
                }(t));
                return n
            }
            function F(e, t) {
                const n = (r = e.status,
                i.has(r) ? null : t);
                var r;
                return new Response(n,{
                    status: e.status,
                    statusText: e.statusText,
                    headers: H(e.getAllResponseHeaders())
                })
            }
            function H(e) {
                const t = new Headers
                  , n = e.split(/[\r\n]+/);
                for (const e of n) {
                    if ("" === e.trim())
                        continue;
                    const [n,...r] = e.split(": ")
                      , i = r.join(": ");
                    t.append(n, i)
                }
                return t
            }
            var W = Symbol("isMockedResponse")
              , U = p()
              , z = class {
                constructor(e, t) {
                    this.initialRequest = e,
                    this.logger = t,
                    this.method = "GET",
                    this.url = null,
                    this.events = new Map,
                    this.requestId = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                        const t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16)
                    }
                    )),
                    this.requestHeaders = new Headers,
                    this.responseBuffer = new Uint8Array,
                    this.request = q(e, {
                        setProperty: ([e,t], n) => {
                            if ("ontimeout" === e) {
                                const r = e.slice(2);
                                return this.request.addEventListener(r, t),
                                n()
                            }
                            return n()
                        }
                        ,
                        methodCall: ([e,t], n) => {
                            var i, o;
                            switch (e) {
                            case "open":
                                {
                                    const [e,r] = t;
                                    return void 0 === r ? (this.method = "GET",
                                    this.url = $(e)) : (this.method = e,
                                    this.url = $(r)),
                                    this.logger = this.logger.extend(`${this.method} ${this.url.href}`),
                                    this.logger.info("open", this.method, this.url.href),
                                    n()
                                }
                            case "addEventListener":
                                {
                                    const [e,r] = t;
                                    return this.registerEvent(e, r),
                                    this.logger.info("addEventListener", e, r),
                                    n()
                                }
                            case "setRequestHeader":
                                {
                                    const [e,r] = t;
                                    return this.requestHeaders.set(e, r),
                                    this.logger.info("setRequestHeader", e, r),
                                    n()
                                }
                            case "send":
                                {
                                    const [e] = t;
                                    null != e && (this.requestBody = "string" == typeof e ? (o = e,
                                    r.encode(o)) : e),
                                    this.request.addEventListener("load", ( () => {
                                        if (void 0 !== this.onResponse) {
                                            const e = F(this.request, this.request.response);
                                            this.onResponse.call(this, {
                                                response: e,
                                                isMockedResponse: W in this.request,
                                                request: a,
                                                requestId: this.requestId
                                            })
                                        }
                                    }
                                    ));
                                    const a = this.toFetchApiRequest();
                                    ((null == (i = this.onRequest) ? void 0 : i.call(this, {
                                        request: a,
                                        requestId: this.requestId
                                    })) || Promise.resolve()).finally(( () => {
                                        if (this.request.readyState < this.request.LOADING)
                                            return this.logger.info("request callback settled but request has not been handled (readystate %d), performing as-is...", this.request.readyState),
                                            U && this.request.setRequestHeader("X-Request-Id", this.requestId),
                                            n()
                                    }
                                    ));
                                    break
                                }
                            default:
                                return n()
                            }
                        }
                    })
                }
                registerEvent(e, t) {
                    const n = (this.events.get(e) || []).concat(t);
                    this.events.set(e, n),
                    this.logger.info('registered event "%s"', e, t)
                }
                respondWith(e) {
                    this.logger.info("responding with a mocked response: %d %s", e.status, e.statusText),
                    K(this.request, W, !0),
                    K(this.request, "status", e.status),
                    K(this.request, "statusText", e.statusText),
                    K(this.request, "responseURL", this.url.href),
                    this.request.getResponseHeader = new Proxy(this.request.getResponseHeader,{
                        apply: (t, n, r) => {
                            if (this.logger.info("getResponseHeader", r[0]),
                            this.request.readyState < this.request.HEADERS_RECEIVED)
                                return this.logger.info("headers not received yet, returning null"),
                                null;
                            const i = e.headers.get(r[0]);
                            return this.logger.info('resolved response header "%s" to', r[0], i),
                            i
                        }
                    }),
                    this.request.getAllResponseHeaders = new Proxy(this.request.getAllResponseHeaders,{
                        apply: () => {
                            if (this.logger.info("getAllResponseHeaders"),
                            this.request.readyState < this.request.HEADERS_RECEIVED)
                                return this.logger.info("headers not received yet, returning empty string"),
                                "";
                            const t = Array.from(e.headers.entries()).map(( ([e,t]) => `${e}: ${t}`)).join("\r\n");
                            return this.logger.info("resolved all response headers to", t),
                            t
                        }
                    }),
                    Object.defineProperties(this.request, {
                        response: {
                            enumerable: !0,
                            configurable: !1,
                            get: () => this.response
                        },
                        responseText: {
                            enumerable: !0,
                            configurable: !1,
                            get: () => this.responseText
                        },
                        responseXML: {
                            enumerable: !0,
                            configurable: !1,
                            get: () => this.responseXML
                        }
                    });
                    const t = e.headers.has("Content-Length") ? Number(e.headers.get("Content-Length")) : void 0;
                    this.logger.info("calculated response body length", t),
                    this.trigger("loadstart", {
                        loaded: 0,
                        total: t
                    }),
                    this.setReadyState(this.request.HEADERS_RECEIVED),
                    this.setReadyState(this.request.LOADING);
                    const n = () => {
                        this.logger.info("finalizing the mocked response..."),
                        this.setReadyState(this.request.DONE),
                        this.trigger("load", {
                            loaded: this.responseBuffer.byteLength,
                            total: t
                        }),
                        this.trigger("loadend", {
                            loaded: this.responseBuffer.byteLength,
                            total: t
                        })
                    }
                    ;
                    if (e.body) {
                        this.logger.info("mocked response has body, streaming...");
                        const r = e.body.getReader()
                          , i = async () => {
                            const {value: e, done: o} = await r.read();
                            if (o)
                                return this.logger.info("response body stream done!"),
                                void n();
                            e && (this.logger.info("read response body chunk:", e),
                            this.responseBuffer = function(e, t) {
                                const n = new Uint8Array(e.byteLength + t.byteLength);
                                return n.set(e, 0),
                                n.set(t, e.byteLength),
                                n
                            }(this.responseBuffer, e),
                            this.trigger("progress", {
                                loaded: this.responseBuffer.byteLength,
                                total: t
                            })),
                            i()
                        }
                        ;
                        i()
                    } else
                        n()
                }
                responseBufferToText() {
                    return e = this.responseBuffer,
                    new TextDecoder(t).decode(e);
                    var e, t
                }
                get response() {
                    if (this.logger.info("getResponse (responseType: %s)", this.request.responseType),
                    this.request.readyState !== this.request.DONE)
                        return null;
                    switch (this.request.responseType) {
                    case "json":
                        {
                            const e = function(e) {
                                try {
                                    return JSON.parse(e)
                                } catch (e) {
                                    return null
                                }
                            }(this.responseBufferToText());
                            return this.logger.info("resolved response JSON", e),
                            e
                        }
                    case "arraybuffer":
                        {
                            const t = (e = this.responseBuffer).buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                            return this.logger.info("resolved response ArrayBuffer", t),
                            t
                        }
                    case "blob":
                        {
                            const e = this.request.getResponseHeader("Content-Type") || "text/plain"
                              , t = new Blob([this.responseBufferToText()],{
                                type: e
                            });
                            return this.logger.info("resolved response Blob (mime type: %s)", t, e),
                            t
                        }
                    default:
                        {
                            const e = this.responseBufferToText();
                            return this.logger.info('resolving "%s" response type as text', this.request.responseType, e),
                            e
                        }
                    }
                    var e
                }
                get responseText() {
                    if (u("" === this.request.responseType || "text" === this.request.responseType, "InvalidStateError: The object is in invalid state."),
                    this.request.readyState !== this.request.LOADING && this.request.readyState !== this.request.DONE)
                        return "";
                    const e = this.responseBufferToText();
                    return this.logger.info('getResponseText: "%s"', e),
                    e
                }
                get responseXML() {
                    if (u("" === this.request.responseType || "document" === this.request.responseType, "InvalidStateError: The object is in invalid state."),
                    this.request.readyState !== this.request.DONE)
                        return null;
                    const e = this.request.getResponseHeader("Content-Type") || "";
                    return "undefined" == typeof DOMParser ? null : (t = e,
                    ["application/xhtml+xml", "application/xml", "image/svg+xml", "text/html", "text/xml"].some((e => t.startsWith(e))) ? (new DOMParser).parseFromString(this.responseBufferToText(), e) : null);
                    var t
                }
                errorWith(e) {
                    this.logger.info("responding with an error"),
                    this.setReadyState(this.request.DONE),
                    this.trigger("error"),
                    this.trigger("loadend")
                }
                setReadyState(e) {
                    this.logger.info("setReadyState: %d -> %d", this.request.readyState, e),
                    this.request.readyState !== e ? (K(this.request, "readyState", e),
                    this.logger.info("set readyState to: %d", e),
                    e !== this.request.UNSENT && (this.logger.info('triggerring "readystatechange" event...'),
                    this.trigger("readystatechange"))) : this.logger.info("ready state identical, skipping transition...")
                }
                trigger(e, t) {
                    const n = this.request[`on${e}`]
                      , r = function(e, t, n) {
                        const r = D ? ProgressEvent : M;
                        return ["error", "progress", "loadstart", "loadend", "load", "timeout", "abort"].includes(t) ? new r(t,{
                            lengthComputable: !0,
                            loaded: (null == n ? void 0 : n.loaded) || 0,
                            total: (null == n ? void 0 : n.total) || 0
                        }) : new I(t,{
                            target: e,
                            currentTarget: e
                        })
                    }(this.request, e, t);
                    this.logger.info('trigger "%s"', e, t || ""),
                    "function" == typeof n && (this.logger.info('found a direct "%s" callback, calling...', e),
                    n.call(this.request, r));
                    for (const [t,n] of this.events)
                        t === e && (this.logger.info('found %d listener(s) for "%s" event, calling...', n.length, e),
                        n.forEach((e => e.call(this.request, r))))
                }
                toFetchApiRequest() {
                    this.logger.info("converting request to a Fetch API Request...");
                    const e = new Request(this.url.href,{
                        method: this.method,
                        headers: this.requestHeaders,
                        credentials: this.request.withCredentials ? "include" : "same-origin",
                        body: ["GET", "HEAD"].includes(this.method) ? null : this.requestBody
                    });
                    return K(e, "headers", q(e.headers, {
                        methodCall: ([e,t], n) => {
                            switch (e) {
                            case "append":
                            case "set":
                                {
                                    const [e,n] = t;
                                    this.request.setRequestHeader(e, n);
                                    break
                                }
                            case "delete":
                                {
                                    const [e] = t;
                                    break
                                }
                            }
                            return n()
                        }
                    })),
                    this.logger.info("converted request to a Fetch API Request!", e),
                    e
                }
            }
            ;
            function $(e) {
                return "undefined" == typeof location ? new URL(e) : new URL(e.toString(),location.href)
            }
            function K(e, t, n) {
                Reflect.defineProperty(e, t, {
                    writable: !0,
                    enumerable: !0,
                    value: n
                })
            }
            function V({emitter: e, logger: t}) {
                const n = new Proxy(globalThis.XMLHttpRequest,{
                    construct(n, r, i) {
                        t.info("constructed new XMLHttpRequest");
                        const o = Reflect.construct(n, r, i)
                          , a = Object.getOwnPropertyDescriptors(n.prototype);
                        for (const e in a)
                            Reflect.defineProperty(o, e, a[e]);
                        const s = new z(o,t);
                        return s.onRequest = async function({request: t, requestId: n}) {
                            const {interactiveRequest: r, requestController: i} = function(e) {
                                const t = new l(e);
                                return Reflect.set(e, "respondWith", t.respondWith.bind(t)),
                                {
                                    interactiveRequest: e,
                                    requestController: t
                                }
                            }(t);
                            this.logger.info("awaiting mocked response..."),
                            e.once("request", ( ({requestId: e}) => {
                                e === n && "pending" === i.responsePromise.state && i.respondWith(void 0)
                            }
                            ));
                            const o = await (async e => {
                                try {
                                    const t = await e().catch((e => {
                                        throw e
                                    }
                                    ));
                                    return {
                                        error: null,
                                        data: t
                                    }
                                } catch (e) {
                                    return {
                                        error: e,
                                        data: null
                                    }
                                }
                            }
                            )((async () => {
                                this.logger.info('emitting the "request" event for %s listener(s)...', e.listenerCount("request")),
                                await async function(e, t, ...n) {
                                    const r = e.listeners(t);
                                    if (0 !== r.length)
                                        for (const t of r)
                                            await t.apply(e, n)
                                }(e, "request", {
                                    request: r,
                                    requestId: n
                                }),
                                this.logger.info('all "request" listeners settled!');
                                const t = await i.responsePromise;
                                return this.logger.info("event.respondWith called with:", t),
                                t
                            }
                            ));
                            if (o.error)
                                return this.logger.info("request listener threw an exception, aborting request...", o.error),
                                void s.errorWith(o.error);
                            const a = o.data;
                            if (void 0 !== a)
                                return this.logger.info("received mocked response: %d %s", a.status, a.statusText),
                                "error" === a.type ? (this.logger.info("received a network error response, rejecting the request promise..."),
                                void s.errorWith(new TypeError("Network error"))) : s.respondWith(a);
                            this.logger.info("no mocked response received, performing request as-is...")
                        }
                        ,
                        s.onResponse = async function({response: t, isMockedResponse: n, request: r, requestId: i}) {
                            this.logger.info('emitting the "response" event for %s listener(s)...', e.listenerCount("response")),
                            e.emit("response", {
                                response: t,
                                isMockedResponse: n,
                                request: r,
                                requestId: i
                            })
                        }
                        ,
                        s.request
                    }
                });
                return n
            }
            var G = class extends R {
                constructor() {
                    super(G.interceptorSymbol)
                }
                checkEnvironment() {
                    return void 0 !== globalThis.XMLHttpRequest
                }
                setup() {
                    const e = this.logger.extend("setup");
                    e.info('patching "XMLHttpRequest" module...');
                    const t = globalThis.XMLHttpRequest;
                    u(!t[f], 'Failed to patch the "XMLHttpRequest" module: already patched.'),
                    globalThis.XMLHttpRequest = V({
                        emitter: this.emitter,
                        logger: this.logger
                    }),
                    e.info('native "XMLHttpRequest" module patched!', globalThis.XMLHttpRequest.name),
                    Object.defineProperty(globalThis.XMLHttpRequest, f, {
                        enumerable: !0,
                        configurable: !0,
                        value: !0
                    }),
                    this.subscriptions.push(( () => {
                        Object.defineProperty(globalThis.XMLHttpRequest, f, {
                            value: void 0
                        }),
                        globalThis.XMLHttpRequest = t,
                        e.info('native "XMLHttpRequest" module restored!', globalThis.XMLHttpRequest.name)
                    }
                    ))
                }
            }
              , Y = G;
            function J(e, t, n) {
                var r = (n || {}).atBegin;
                return function(e, t, n) {
                    var r, i = n || {}, o = i.noTrailing, a = void 0 !== o && o, s = i.noLeading, u = void 0 !== s && s, c = i.debounceMode, l = void 0 === c ? void 0 : c, f = !1, p = 0;
                    function d() {
                        r && clearTimeout(r)
                    }
                    function h() {
                        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                            i[o] = arguments[o];
                        var s = this
                          , c = Date.now() - p;
                        function h() {
                            p = Date.now(),
                            t.apply(s, i)
                        }
                        function g() {
                            r = void 0
                        }
                        f || (u || !l || r || h(),
                        d(),
                        void 0 === l && c > e ? u ? (p = Date.now(),
                        a || (r = setTimeout(l ? g : h, e))) : h() : !0 !== a && (r = setTimeout(l ? g : h, void 0 === l ? e - c : e)))
                    }
                    return h.cancel = function(e) {
                        var t = (e || {}).upcomingOnly
                          , n = void 0 !== t && t;
                        d(),
                        f = !n
                    }
                    ,
                    h
                }(e, t, {
                    debounceMode: !1 !== (void 0 !== r && r)
                })
            }
            Y.interceptorSymbol = Symbol("xhr");
            var X, Z = n(5652), Q = n(3614), ee = n.n(Q), te = n(938), ne = n(8941);
            try {
                X = n(6815)
            } catch (E) {}
            class re {
                static sitePattern = /^(https:\/\/)(example\.com)/;
                static captionRequestPattern = /^(https:\/\/)(example\.com)/;
                static baseUrl = "https://example.com";
                static playerSelector = "video";
                static captionContainerSelector = "";
                static captionWindowSelector = "";
                static captionBoxSelector = "";
                static listenButtonSelector = "";
                static isPaused = !1;
                static pausedByExtension = !1;
                static isEventListenerLoaded = !1;
                static interceptorLoaded = !1;
                static scriptUrl = "subtitle.js";
                static interceptKillTime = 6e4;
                static interceptor = new Y;
                static setting = {};
                static useManualIntercept = !1;
                static subtitleLangDict = {};
                static async handleVideo(e) {
                    this.isVideoSite() && "null" != e.detectSubtitle && (this.initVariable(e),
                    await this.initInjectScript(e),
                    await this.loadEventListener(),
                    this.handleUrlChange())
                }
                static initVariable(e) {
                    this.setting = e
                }
                static async loadEventListener() {
                    this.isEventListenerLoaded || (this.isEventListenerLoaded = !0,
                    this.listenUrl(),
                    this.listenPlayer())
                }
                static async listenPlayer() {
                    await this.waitPlayer(),
                    this.listenPlay(),
                    this.listenPause(),
                    this.listenCaptionHover(),
                    this.listenButton(),
                    this.listenKey()
                }
                static isVideoSite(e=window.location.href) {
                    return this.sitePattern.test(e)
                }
                static getVideoId(e=window.location.href) {
                    throw new Error("Not implemented")
                }
                static guessVideoLang(e) {
                    throw new Error("Not implemented")
                }
                static guessSubtitleLang(e, t) {
                    throw new Error("Not implemented")
                }
                static requestSubtitle(e, t, n, r) {
                    throw new Error("Not implemented")
                }
                static parseSubtitle(e, t) {
                    throw new Error("Not implemented")
                }
                static mergeSubtitles(e, t) {
                    throw new Error("Not implemented")
                }
                static async getPreferredSourceLang(e) {
                    return "targetsinglesub" == this.setting.detectSubtitle ? this.getTargetLangMeta() : await this.guessVideoLang(e)
                }
                static async getTargetLangMeta() {
                    return this.getSettingTargetLang()
                }
                static getPreferredTargetLang() {
                    return this.getSettingTargetLang()
                }
                static getSettingTargetLang() {
                    var e = this.setting.translateTarget;
                    return this.subtitleLangDict[e] || e
                }
                static play() {
                    0 != this.pausedByExtension && (this.pausedByExtension = !1,
                    this.playPlayer())
                }
                static pause() {
                    1 != this.isPaused && "false" != this.setting.mouseoverPauseSubtitle && (this.pausedByExtension = !0,
                    this.pausePlayer())
                }
                static handleUrlChange(e=window.location.href) {
                    this.pausedByExtension = !1
                }
                static getPlayer() {
                    return (0,
                    Z.A)(this.playerSelector)?.get(0)
                }
                static playPlayer() {
                    this.getPlayer()?.play()
                }
                static pausePlayer() {
                    this.getPlayer()?.pause()
                }
                static checkPlayerReady() {
                    return this.getPlayer()?.readyState >= 3
                }
                static async listenCaptionHover() {
                    if (!this.captionContainerSelector)
                        return;
                    await this.waitUntil(( () => (0,
                    Z.A)(this.captionContainerSelector).get(0)));
                    new MutationObserver((e => {
                        (0,
                        Z.A)(this.captionBoxSelector).off().on("contextmenu", (e => {
                            e.stopPropagation()
                        }
                        )).on("mousedown", (e => {
                            e.stopPropagation()
                        }
                        )),
                        (0,
                        Z.A)(this.captionWindowSelector).off().on("mouseenter", (e => {
                            this.pause()
                        }
                        )).on("mouseleave", (e => {
                            this.play()
                        }
                        )).attr("draggable", "false")
                    }
                    )).observe((0,
                    Z.A)(this.captionContainerSelector).get(0), {
                        subtree: !0,
                        childList: !0
                    })
                }
                static listenUrl() {
                    navigation.addEventListener("navigate", (e => {
                        this.handleUrlChange(e.destination.url)
                    }
                    ))
                }
                static listenPlay() {
                    this.getPlayer()?.addEventListener("play", (e => {
                        this.isPaused = !1
                    }
                    ))
                }
                static listenPause() {
                    this.getPlayer()?.addEventListener("pause", (e => {
                        this.isPaused = !0
                    }
                    ))
                }
                static listenButton() {
                    (0,
                    Z.A)(this.listenButtonSelector).on("click", (e => {
                        this.handleButtonKey(e)
                    }
                    ))
                }
                static listenKey() {
                    (0,
                    Z.A)(document).on("keydown", (e => {
                        this.handleButtonKey(e)
                    }
                    ))
                }
                static handleButtonKey(e) {}
                static async interceptCaption() {
                    this.interceptorLoaded || (this.interceptorLoaded = !0,
                    this.interceptor.apply(),
                    this.interceptor.on("request", (async ({request: e, requestId: t}) => {
                        try {
                            if (this.captionRequestPattern.test(e.url)) {
                                var n = await this.requestSubtitleCached(e.url)
                                  , r = this.getPreferredTargetLang()
                                  , i = this.guessSubtitleLang(e.url)
                                  , o = this.parseSubtitle(n, i)
                                  , a = o;
                                if (i != r && "dualsub" == this.setting.detectSubtitle) {
                                    await this.waitRandom(300, 2e3);
                                    var s = await this.requestSubtitleCached(e.url, r);
                                    s = this.parseSubtitle(s, r);
                                    a = this.mergeSubtitles(o, s)
                                }
                                e.respondWith(new Response(JSON.stringify(a),n))
                            }
                        } catch (e) {}
                    }
                    )))
                }
                static killIntercept() {
                    this.interceptor.dispose(),
                    this.interceptorLoaded = !1
                }
                static killInterceptDebounce = J(this.interceptKillTime, this.killIntercept);
                static requestSubtitleCached = ee()((async function(e, t, n, r) {
                    return await this.requestSubtitle(...arguments)
                }
                ));
                static async waitPlayer() {
                    await this.waitUntil(( () => this.getPlayer()))
                }
                static async waitPlayerReady() {
                    await this.waitUntil(( () => this.checkPlayerReady()))
                }
                static async wait(e) {
                    await new Promise((t => setTimeout(t, e)))
                }
                static async waitRandom(e, t) {
                    const n = Math.random() * (t - e) + e;
                    await this.wait(n)
                }
                static async waitUntil(e, t) {
                    t = t || te.es;
                    await (0,
                    te.a0)(e, {
                        timeout: te.es
                    })
                }
                static getUrlParam(e) {
                    var t = {}
                      , n = new URL(e).pathname.split("/");
                    for (var [r,i] of n.entries())
                        t[r] = i;
                    let o = new URL(e).searchParams;
                    var a = Object.fromEntries(o);
                    return ne.A.concatJson(t, a)
                }
                static filterSpecialText(e) {
                    return e.replace(/[^a-zA-Z ]/g, "")
                }
                static async initInjectScript(e) {
                    this.checkIsInjectedScript() || (await this.injectScript(),
                    this.resetInjectScript(e))
                }
                static async resetInject(e) {
                    this.initVariable(e),
                    this.useManualIntercept || this.interceptCaption()
                }
                static checkIsInjectedScript() {
                    return null == X?.runtime?.id
                }
                static injectScript(e=this.scriptUrl) {
                    return new Promise((t => {
                        var n = X.runtime.getURL(e)
                          , r = this.filterSpecialText(n);
                        e && !(0,
                        Z.A)(`#${r}`)?.get(0) ? (0,
                        Z.A)("<script>", {
                            id: r
                        }).on("load", ( () => t())).appendTo("head").attr("src", n) : t()
                    }
                    ))
                }
                static listenMessageFrameFromInject() {
                    this.isVideoSite() && this.checkIsInjectedScript() && window.addEventListener("message", ( ({data: e}) => {
                        "resetInjectScript" == e?.type ? this?.resetInject(e?.setting) : "callMethod" == e?.type && this?.[e?.name]?.(...e?.args)
                    }
                    ))
                }
                static callMethodFromInject(e, ...t) {
                    this.sendMessageFrame({
                        type: "callMethod",
                        name: e,
                        args: t
                    })
                }
                static resetInjectScript(e) {
                    this.sendMessageFrame({
                        type: "resetInjectScript",
                        setting: e
                    })
                }
                static sendMessageFrame(e) {
                    window.postMessage(e, "*")
                }
            }
        }
        ,
        4933: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n(7700);
            class i extends r.A {
                static sitePattern = /^(https:\/\/)(www\.netflix\.com)/;
                static captionRequestPattern = /^(https:\/\/).*(nflxvideo\.net)\/\?o=1/;
                static baseUrl = "https://www.netflix.com";
                static playerSelector = "";
                static playerApiSelector = "";
                static captionContainerSelector = "";
                static captionWindowSelector = "";
                static captionBoxSelector = "";
                static sub = {};
                static subtitleLangDict = {
                    "zh-CN": "zh-Hans",
                    "zh-TW": "zh-Hant"
                };
                static #n = ( () => {
                    this.listenMessageFrameFromInject()
                }
                )();
                static async listenPlayer() {}
                static async handleUrlChange(e=window.location.href) {
                    this.pausedByExtension = !1,
                    this.callMethodFromInject("activateCaption", e)
                }
                static async activateCaption(e) {
                    if (this.isVideoUrl(e)) {
                        await this.waitPlayerReady(),
                        this.killInterceptDebounce(),
                        await this.interceptCaption(),
                        await this.wait(3e3),
                        await this.waitUntil(( () => this.getVideoId()));
                        var t = await this.getPreferredSourceLang();
                        if (this.checkPlayerCaptionOff())
                            ;
                        else {
                            var n = this.getVideoId();
                            this.requestTrack(t, n)
                        }
                    }
                }
                static async isVideoUrl(e) {
                    return e.includes(`${this.baseUrl}/watch`)
                }
                static async waitPlayerReady() {
                    await this.waitUntil(( () => this.getPlayer()));
                    var e = this.getPlayer();
                    await this.waitUntil(( () => e.getAudioTrack()))
                }
                static setPlayerCaption(e) {
                    this.getPlayer().setTimedTextTrack(e)
                }
                static getOffTrack() {
                    var e = this.getPlayer()?.getTimedTextTrackList();
                    return e?.find((e => e.trackId.includes("NONE"))) || e?.find((e => e.trackId.includes("1;1;0;"))) || e?.[0]
                }
                static setPlayerCaptionOff() {
                    this.getPlayer().setTimedTextTrack(this.getOffTrack())
                }
                static checkPlayerCaptionOff() {
                    var e = this.getPlayer().getTextTrack()
                      , t = this.getOffTrack();
                    return !e || e.trackId === t?.trackId
                }
                static getPlayer() {
                    var e = window?.netflix?.appContext?.state?.playerApp?.getAPI().videoPlayer
                      , t = e?.getAllPlayerSessionIds()
                      , n = t?.find((e => e.includes("watch"))) || t?.find((e => e.includes("preview"))) || t?.[0]
                      , r = e?.getVideoPlayerBySessionId(n);
                    return r
                }
                static getVideoId() {
                    return String(this.getPlayer()?.getMovieId())
                }
                static extractVideoId(e) {
                    const t = e.match(/\/watch\/(\d+)/);
                    return t ? t[1] : null
                }
                static async interceptCaption() {
                    this.interceptorLoaded || (this.interceptorLoaded = !0,
                    this.interceptor.apply(),
                    this.interceptor.on("request", (async ({request: e, requestId: t}) => {
                        try {
                            if (this.captionRequestPattern.test(e.url)) {
                                var n = await this.requestSubtitle(e.url)
                                  , r = this.getCurrentSubtitleLang()
                                  , i = this.getPreferredTargetLang()
                                  , o = this.getVideoId()
                                  , a = await n.text()
                                  , s = this.parseSubtitle(a, o)
                                  , u = s;
                                if (r != i && "dualsub" == this.setting.detectSubtitle) {
                                    var c = await this.requestSubtitleWithReset(i);
                                    u = this.mergeSubtitles(s, c)
                                }
                                var l = this.encodeMergedSubtitles(u);
                                e.respondWith(new Response(l))
                            }
                        } catch (e) {}
                    }
                    )))
                }
                static async guessSubtitleLang(e, t) {
                    return this.getPlayer()?.getTimedTextTrack()?.bcp47
                }
                static async guessVideoLang() {
                    return this.getPlayer()?.getAudioTrack()?.bcp47
                }
                static getCurrentSubtitle() {
                    return this.getPlayer()?.getTimedTextTrack()
                }
                static getCurrentSubtitleLang() {
                    return this.getCurrentSubtitle()?.bcp47
                }
                static getTrackList() {
                    return this.getPlayer()?.getTimedTextTrackList() || []
                }
                static async requestSubtitle(e, t, n, r) {
                    return await fetch(e)
                }
                static async setTextTrack(e) {
                    e && this.getPlayer()?.setTextTrack(e)
                }
                static async requestSubtitleWithReset(e, t) {
                    var n = this.getCurrentSubtitle()
                      , r = await this.requestTrack(e, t);
                    return this.setTextTrack(n),
                    r
                }
                static async requestTrack(e, t) {
                    t = t || this.getVideoId();
                    if (this.sub?.[t]?.[e])
                        return this.sub?.[t]?.[e];
                    var n = this.getTrackList()
                      , r = this.getOffTrack();
                    const i = n?.sort(( (e, t) => "ASSISTIVE" === e.trackType ? -1 : 1))?.filter((e => !1 === e.isImageBased))?.filter((e => e.trackId !== r?.trackId))?.find((t => t.bcp47 === e || t.bcp47.includes(e)));
                    return i ? (this.setTextTrack(i),
                    await this.waitUntil(( () => this.sub?.[t]?.[e]), 2500),
                    this.sub?.[t]?.[e]) : null
                }
                static parseSubtitle(e, t) {
                    var n = {}
                      , r = {};
                    const i = []
                      , o = (new DOMParser).parseFromString(e, "text/xml")
                      , a = Array.from(o.getElementsByTagName("p")).map((e => e.cloneNode(!0)));
                    var s = this.getCurrentSubtitleLang();
                    const u = o.querySelector("div");
                    u?.parentNode?.removeChild(u);
                    const c = o.getElementsByTagName("layout")[0];
                    c && (r = Array.from(c.getElementsByTagName("region"))).forEach(( (e, t) => {
                        const n = `region${t}_${s}`;
                        e.setAttribute("xml:id", n)
                    }
                    ));
                    const l = o.getElementsByTagName("styling")[0];
                    l && (n = Array.from(l.getElementsByTagName("style"))).forEach((e => {
                        const t = `${e.getAttribute("xml:id")}_${s}`;
                        e.setAttribute("xml:id", t)
                    }
                    ));
                    for (let e = 0; e < a.length; e++) {
                        const t = a[e]
                          , n = parseInt(t.getAttribute("begin").replace("t", ""))
                          , r = parseInt(t.getAttribute("end").replace("t", ""))
                          , o = t.textContent
                          , u = t.getAttribute("region") + "_" + s
                          , c = t.getElementsByTagName("span")[0]?.getAttribute("style") + "_" + s;
                        var f = i?.[i.length - 1];
                        f && f.start === n && f.end === r ? f.text += " " + o : i.push({
                            start: n,
                            end: r,
                            text: o,
                            region: u,
                            style: c
                        })
                    }
                    var p = {
                        xmlDoc: o,
                        lang: s,
                        subtitles: i,
                        regions: r,
                        styles: n
                    };
                    return this.sub[t] || (this.sub[t] = {}),
                    this.sub[t][s] = p,
                    p
                }
                static mergeSubtitles(e, t) {
                    if (!e || !t)
                        return null;
                    if (!e)
                        return t;
                    if (!t)
                        return e;
                    var n = []
                      , r = e.subtitles
                      , i = t.subtitles
                      , o = {
                        ...e
                    };
                    const a = o?.xmlDoc?.getElementsByTagName("layout")?.[0];
                    t?.regions?.forEach((e => {
                        a?.appendChild(e)
                    }
                    ));
                    const s = e?.xmlDoc?.getElementsByTagName("styling")?.[0];
                    t?.styles?.forEach((e => {
                        s?.appendChild(e)
                    }
                    ));
                    for (let[e,t] of r.entries()) {
                        var u = t
                          , c = "";
                        if (i.forEach((e => {
                            e.overlap = Math.max(t.end - e.start, e.end - t.start)
                        }
                        )),
                        i.sort(( (e, t) => e.overlap - t.overlap)),
                        n.push(u),
                        i.length && 0 < i[0].overlap) {
                            c = i[0];
                            let e = {
                                ...u
                            };
                            e.text = c.text,
                            n.push(e)
                        }
                    }
                    return o.subtitles = n,
                    o
                }
                static encodeMergedSubtitles(e) {
                    var t = e.xmlDoc
                      , n = e.subtitles;
                    const r = t.getElementsByTagName("body")[0];
                    let i = r.getElementsByTagName("div")[0];
                    i || (i = t.createElement("div"),
                    r.appendChild(i)),
                    n.forEach((e => {
                        const r = t.createElement("p");
                        r.setAttribute("xml:id", `subtitle${n.indexOf(e) + 1}`),
                        r.setAttribute("begin", `${e.start}t`),
                        r.setAttribute("end", `${e.end}t`),
                        r.setAttribute("region", e.region),
                        r.setAttribute("style", e.style);
                        const o = t.createElement("span");
                        o.setAttribute("style", "style0"),
                        o.textContent = e.text,
                        r.appendChild(o),
                        i.appendChild(r)
                    }
                    ));
                    return (new XMLSerializer).serializeToString(t)
                }
                static encodeSubtitle(e) {
                    return e
                }
            }
        }
        ,
        6669: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n(3472)
              , i = n(4933)
              , o = n(7088);
            const a = {
                Youtube: r.A,
                Netflix: i.A,
                YoutubeNoCookie: o.A
            }
        }
        ,
        7088: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n(3472);
            class i extends r.A {
                static sitePattern = /^(https:\/\/)(www\.youtube\-nocookie\.com)/;
                static captionRequestPattern = /^(https:\/\/)(www\.youtube\-nocookie\.com)(\/api\/timedtext)/;
                static baseUrl = "https://www.youtube-nocookie.com";
                static #n = ( () => {
                    this.listenMessageFrameFromInject()
                }
                )()
            }
        }
        ,
        3472: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n(5652)
              , i = n(3614)
              , o = n.n(i)
              , a = n(7700);
            n(8669);
            class s extends a.A {
                static sitePattern = /^(https:\/\/)(www\.youtube\.com)/;
                static captionRequestPattern = /^(https:\/\/)(www\.youtube\.com)(\/api\/timedtext)/;
                static baseUrl = "https://www.youtube.com";
                static playerSelector = "#movie_player video";
                static playerApiSelector = ".html5-video-player";
                static captionContainerSelector = "#movie_player .ytp-caption-window-container";
                static captionWindowSelector = "#movie_player .caption-window";
                static captionBoxSelector = "#movie_player .ytp-caption-segment";
                static listenButtonSelector = ".ytp-subtitles-button";
                static isSubtitleRequestFailed = !1;
                static useManualIntercept = !0;
                static #n = ( () => {
                    this.listenMessageFrameFromInject()
                }
                )();
                static async handleUrlChange(e=window.location.href) {
                    this.pausedByExtension = !1,
                    this.callMethodFromInject("activateCaption", e)
                }
                static async activateCaption(e) {
                    if ("false" != this.setting.subtitleButtonToggle && this.isVideoUrl(e)) {
                        var {lang: t, tlang: n} = await this.guessVideoLang(e);
                        await this.waitPlayerReady(),
                        this.killInterceptDebounce(),
                        await this.interceptCaption(),
                        this.loadCaption(),
                        this.setPlayerCaption(t, n),
                        await this.waitRandom(4e3, 5e3),
                        this.reloadCaption()
                    }
                }
                static getPlayerApi() {
                    return (0,
                    r.A)(this.playerApiSelector)
                }
                static reloadCaption() {
                    this.getPlayerApi().each(( (e, t) => {
                        t.setOption("captions", "reload", !0)
                    }
                    ))
                }
                static loadCaption() {
                    this.getPlayerApi().each(( (e, t) => {
                        t.loadModule("captions")
                    }
                    ))
                }
                static unloadCaption() {
                    this.getPlayerApi().each(( (e, t) => {
                        t.unloadModule("captions")
                    }
                    ))
                }
                static setPlayerCaption(e, t) {
                    this.getPlayerApi().each(( (n, r) => {
                        r.setOption("captions", "track", {
                            languageCode: e,
                            translationLanguage: t
                        })
                    }
                    ))
                }
                static async handleButtonKey(e) {
                    this.handleCaptionOnOff(e)
                }
                static async handleCaptionOnOff(e) {
                    "KeyC" != e?.code && 0 != e?.button || (this.setting.subtitleButtonToggle = (0,
                    r.A)(this.listenButtonSelector).attr("aria-pressed"),
                    this.setting.save())
                }
                static async requestSubtitle(e, t, n, r) {
                    var i;
                    t && (e = await this.getTranslatedSubtitleUrl(e, t));
                    try {
                        var o = await fetch(this.getTrafficSafeUrl(e));
                        i = await o.json()
                    } catch (e) {}
                    try {
                        if (!i) {
                            this.isSubtitleRequestFailed = !this.isSubtitleRequestFailed;
                            const t = await fetch(this.getTrafficSafeUrl(e));
                            i = await t.json()
                        }
                    } catch (e) {}
                    return i
                }
                static getTrafficSafeUrl(e) {
                    if (this.isSubtitleRequestFailed) {
                        const t = new URL(e);
                        return t.hostname = "video.google.com",
                        t.pathname = "/timedtext",
                        t.toString()
                    }
                    return e
                }
                static async getTranslatedSubtitleUrl(e, t) {
                    var n, r = this.getVideoId(e);
                    (n = await this.getUserGeneratedSubUrl(r, t)) || (n = new URL(e)).searchParams.set("tlang", t);
                    return n.toString()
                }
                static async getUserGeneratedSubUrl(e, t) {
                    var n = await this.getYoutubeMetaDataCached(e)
                      , r = n?.captions?.playerCaptionsTracklistRenderer?.captionTracks
                      , i = r.filter((e => !e?.kind && e.languageCode == t))?.[0]?.baseUrl;
                    return i ? i + "&fmt=json3" : ""
                }
                static parseSubtitle(e, t) {
                    if (!e?.events)
                        return {
                            events: [],
                            pens: [{}],
                            wireMagic: "pb3",
                            wpWinPositions: [{}],
                            wsWinStyles: [{}]
                        };
                    var n = [];
                    for (var r of e.events)
                        if (r.segs && r.dDurationMs) {
                            var i = r.segs.reduce(( (e, t) => e + t.utf8), "")
                              , o = i.replace(/\s+/g, " ").trim();
                            0 == n.length || "\n" == i || n[n.length - 1].tStartMs + n[n.length - 1].dDurationMs <= r.tStartMs ? (n.push({
                                tStartMs: r.tStartMs,
                                dDurationMs: r.dDurationMs,
                                segs: [{
                                    utf8: o
                                }]
                            }),
                            n.length > 2 && n[n.length - 2].tStartMs + n[n.length - 2].dDurationMs > r.tStartMs && (n[n.length - 2].dDurationMs = r.tStartMs - n[n.length - 2].tStartMs - 1)) : (n[n.length - 1].segs[0].utf8 += o ? ` ${o}` : "",
                            n[n.length - 1].dDurationMs = r.tStartMs - n[n.length - 1].tStartMs + r.dDurationMs)
                        }
                    return {
                        events: n,
                        pens: [{}],
                        wireMagic: "pb3",
                        wpWinPositions: [{}, {
                            apPoint: 6,
                            ahHorPos: 20,
                            avVerPos: 100,
                            rcRows: 2,
                            ccCols: 40
                        }],
                        wsWinStyles: [{}, {
                            mhModeHint: 2,
                            juJustifCode: 0,
                            sdScrollDir: 3
                        }, {
                            mhModeHint: 2,
                            juJustifCode: 1,
                            sdScrollDir: 3
                        }]
                    }
                }
                static mergeSubtitles(e, t) {
                    for (let[r,i] of e.events.entries()) {
                        i.segs[0].utf8;
                        var n = "";
                        t.events.forEach((e => {
                            e.overlap = Math.max(i.tStartMs + i.dDurationMs - e.tStartMs, e.tStartMs + e.dDurationMs - i.tStartMs)
                        }
                        )),
                        t.events.sort(( (e, t) => e.overlap - t.overlap)),
                        t.events.length && 0 < t.events[0].overlap && ((n = t.events[0]).segs[0].utf8 = "\n" + n.segs[0].utf8),
                        n && i.segs.push(n.segs[0])
                    }
                    return e
                }
                static isVideoUrl(e) {
                    return this.isShorts(e) || this.isEmbed(e) || this.isMainVideoUrl(e)
                }
                static isMainVideoUrl(e) {
                    return e.includes(`${this.baseUrl}/watch`)
                }
                static isShorts(e) {
                    return e.includes(`${this.baseUrl}/shorts`)
                }
                static isEmbed(e) {
                    return e.includes(`${this.baseUrl}/embed`)
                }
                static getVideoId(e) {
                    return this.getUrlParam(e)?.v || this.getUrlParam(e)?.[2]
                }
                static guessSubtitleLang(e, t) {
                    return this.getUrlParam(e)?.lang
                }
                static async guessVideoLang(e) {
                    var t, n = this.getVideoId(e), r = await this.getYoutubeMetaDataCached(n), i = r?.captions?.playerCaptionsTracklistRenderer?.captionTracks, o = i?.filter((e => e.kind)), a = o?.[0]?.languageCode;
                    if ("targetsinglesub" == this.setting.detectSubtitle) {
                        var s = i?.filter((e => e.languageCode == this.setting.translateTarget));
                        t = (a = s?.[0]?.languageCode || a) != this.setting.translateTarget ? {
                            languageCode: this.setting.translateTarget
                        } : ""
                    }
                    return {
                        lang: a || "en",
                        tlang: t
                    }
                }
                static getYoutubeMetaDataCached = o()(this.getYoutubeMetaData);
                static async getYoutubeMetaData(e) {
                    if (window?.ytInitialPlayerResponse?.videoDetails?.videoId == e)
                        return window.ytInitialPlayerResponse;
                    var t = await this.getYoutubeMetaDataFromAPI(e);
                    return t?.captions ? t : t = await this.getYoutubeMetaDataFromWatch(e)
                }
                static async getYoutubeMetaDataFromWatch(e) {
                    try {
                        var t = await fetch(`${this.baseUrl}/watch?v=${e}`)
                          , n = (await t.text()).match(/ytInitialPlayerResponse\s*=\s*({.+?})\s*;\s*(?:var\s+meta|<\/script|\n)/);
                        return JSON.parse(n[1])
                    } catch (e) {
                        return {}
                    }
                }
                static async getYoutubeMetaDataFromAPI(e) {
                    try {
                        let t = await fetch(`${this.baseUrl}/youtubei/v1/player?key=${window.yt.config_.INNERTUBE_API_KEY}`, {
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({
                                videoId: e,
                                context: {
                                    client: {
                                        clientName: window.yt.config_.INNERTUBE_CLIENT_NAME,
                                        clientVersion: window.yt.config_.INNERTUBE_CLIENT_VERSION
                                    }
                                }
                            }),
                            method: "POST"
                        });
                        return await t.json()
                    } catch (e) {
                        return {}
                    }
                }
            }
        }
        ,
        1141: (e, t, n) => {
            "use strict";
            n.d(t, {
                V: () => o,
                i: () => a
            });
            var r = n(5652)
              , i = n(8669);
            function o() {
                var e = (0,
                r.A)(i.bq());
                if (e.is(i.dy))
                    return e.get(0)
            }
            function a() {
                return new Promise((async (e, t) => {
                    (0,
                    r.A)(( () => {
                        e()
                    }
                    ))
                }
                ))
            }
        }
        ,
        8669: (e, t, n) => {
            "use strict";
            n.d(t, {
                CJ: () => C,
                In: () => f,
                JU: () => M,
                Ju: () => _,
                N8: () => p,
                Nx: () => h,
                OW: () => b,
                Ps: () => y,
                Pz: () => v,
                T2: () => B,
                UP: () => k,
                UU: () => g,
                V5: () => A,
                VD: () => x,
                Yy: () => D,
                aQ: () => N,
                bB: () => m,
                be: () => S,
                bp: () => E,
                bq: () => T,
                c5: () => L,
                dK: () => u,
                dy: () => s,
                fZ: () => q,
                gt: () => w,
                nI: () => j,
                rv: () => I,
                wr: () => O,
                yC: () => P,
                zK: () => R
            });
            var r, i = n(938), o = n(8941), a = n(2439);
            try {
                r = n(6815)
            } catch (e) {}
            try {
                new a.WindowPostMessageProxy({
                    suppressWarnings: !0
                })
            } catch (e) {}
            var s = 'input[type="text"], input[type="search"], input:not([type]), textarea, [contenteditable], [contenteditable="true"], [role=textbox], [spellcheck]';
            function u(e) {
                var t = new Set;
                return e = (e = Array.from(e).filter((e => {
                    var n = c(e);
                    return !t.has(n) && (t.add(n),
                    !0)
                }
                ))).filter((t => {
                    for (const n of e)
                        if (c(t) != c(n) && l(t, n))
                            return !1;
                    return !0
                }
                ))
            }
            function c(e) {
                return `${e.left}${e.top}${e.width}${e.height}`
            }
            function l(e, t) {
                return t.top <= e.top && e.top <= t.bottom && t.top <= e.bottom && e.bottom <= t.bottom && t.left <= e.left && e.left <= t.right && t.left <= e.right && e.right <= t.right
            }
            function f(e) {
                return new Promise((function(t, n) {
                    fetch(e).then((e => e.blob())).then((e => {
                        var n = new FileReader;
                        n.onload = function() {
                            t(this.result)
                        }
                        ,
                        n.readAsDataURL(e)
                    }
                    )).catch((async e => {
                        t("")
                    }
                    ))
                }
                ))
            }
            function p(e, t) {
                window.addEventListener("message", (function(n) {
                    n?.data?.type == e && t(n?.data)
                }
                ))
            }
            async function d(e) {
                try {
                    return await r.runtime.sendMessage(e)
                } catch (e) {}
                return {}
            }
            function h(e, t) {
                r.runtime.onMessage.addListener(( (n, r, i) => {
                    n.type == e && (t(n),
                    i({}))
                }
                ))
            }
            function g() {
                return window.location.href == r.runtime.getURL("/foliate-js/reader.html")
            }
            async function m(e) {
                var t = await fetch(e).then((e => e.blob()));
                return e = URL.createObjectURL(t)
            }
            function v() {
                return "application/pdf" == document?.body?.children?.[0]?.type
            }
            function y() {
                var e = B()
                  , t = e?.[1]?.querySelectorAll("iframe")[0];
                return t
            }
            function b(e) {
                return r.runtime.getURL(`/pdfjs/web/viewer.html?file=${encodeURIComponent(e)}`)
            }
            function x() {
                return document.location.href.includes("pdfjs/web/viewer.html")
            }
            function w() {
                return document.location.href.includes("https://docs.google.com/document") || document.location.href.includes("https://docs.google.com/presentation")
            }
            async function A(e) {
                await (0,
                i.a0)(e, {
                    timeout: i.es
                })
            }
            function T(e=document) {
                const t = e.activeElement;
                return t ? t.shadowRoot ? T(t.shadowRoot) : t : null
            }
            function _() {
                return r.runtime?.id
            }
            function S(e) {
                return r.runtime.getURL(e)
            }
            function E() {
                return window.location != window.parent.location ? document.referrer : document.location.href
            }
            function N(e) {
                return /Key|Digit|Numpad|Space/.test(e)
            }
            function k() {
                return /Edg\//.test(window.navigator.userAgent)
            }
            function L(e) {
                !function(e) {
                    e.querySelectorAll("ruby>rt").forEach((e => e.remove()))
                }(e);
                var t = e.textContent;
                return t = o.A.filterWord(t)
            }
            function C(e) {
                return L(e.cloneContents())
            }
            function O() {
                window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty()
            }
            async function P(e, t, n, r, i) {
                return await d({
                    type: "translate",
                    data: {
                        text: e,
                        sourceLang: t,
                        targetLang: n,
                        reverseLang: r,
                        engine: i
                    }
                })
            }
            async function j(e, t, n, r, i=Date.now(), o) {
                return await d({
                    type: "tts",
                    data: {
                        sourceText: e,
                        sourceLang: t,
                        targetText: n,
                        targetLang: r,
                        timestamp: i,
                        noInterrupt: o
                    }
                })
            }
            async function R(e, t) {
                return await d({
                    type: "stopTTS",
                    data: {
                        timestamp: e,
                        force: t
                    }
                })
            }
            async function I(e, t, n, r, i, o) {
                return await d({
                    type: "recordTooltipText",
                    data: {
                        sourceText: e,
                        sourceLang: t,
                        targetText: n,
                        targetLang: r,
                        dict: i,
                        actionType: o
                    }
                })
            }
            async function M(e) {
                return await d({
                    type: "requestBase64",
                    url: e
                })
            }
            async function D(e) {
                return await d({
                    type: "killAutoReaderTabs",
                    data: {
                        includeCaller: e
                    }
                })
            }
            function B(e=document.body) {
                const t = Array.from(e.querySelectorAll("*")).map((e => e.shadowRoot)).filter(Boolean)
                  , n = t.map((e => B(e)));
                return Array.from(t).concat(n).flat()
            }
            function q(e, t) {
                const n = function(e, t) {
                    let n = document.elementFromPoint(e, t);
                    for (; n && n.shadowRoot; ) {
                        const r = n.shadowRoot.elementFromPoint(e, t);
                        if (!r || r === n)
                            break;
                        n = r
                    }
                    return n
                }(e, t);
                if (W(n))
                    return n;
                const r = document.elementsFromPoint(e, t)
                  , i = r.find(W);
                if (i)
                    return i;
                const o = r.find(F);
                return o ? function(e) {
                    const t = H(e.style.backgroundImage)
                      , n = document.createElement("img");
                    n.src = t,
                    n.style.position = "absolute",
                    n.style.opacity = "0",
                    n.style.zIndex = "-999";
                    const r = e.getBoundingClientRect();
                    return n.style.left = `${r.left + window.scrollX}px`,
                    n.style.top = `${r.top + window.scrollY}px`,
                    n.style.width = `${e.offsetWidth}px`,
                    n.style.height = `${e.offsetHeight}px`,
                    document.body.appendChild(n),
                    n
                }(o) : null
            }
            function F(e) {
                if (!e || !e.style || !e.style.backgroundImage)
                    return !1;
                const t = H(e.style.backgroundImage);
                return /\.(jpg|jpeg|png|gif|webp)$/i.test(t)
            }
            function H(e) {
                let t = e.replace(/^url\(["']?/, "").replace(/["']?\)$/, "").trim();
                return t.startsWith("//") ? t = "https:" + t : t.startsWith("/") && (t = window.location.origin + t),
                t
            }
            function W(e) {
                return "IMG" == e?.tagName && e?.src && e?.complete && 0 !== e?.naturalHeight && e?.width > 150 && e?.height > 150
            }
        }
        ,
        7333: (e, t, n) => {
            "use strict";
            n.d(t, {
                L1: () => i,
                SL: () => s,
                Vr: () => c,
                gY: () => l,
                q6: () => o,
                sO: () => f,
                xE: () => u
            });
            var r = n(2543)
              , i = {
                Abkhaz: "ab",
                Acehnese: "ace",
                Acholi: "ach",
                Afrikaans: "af",
                Albanian: "sq",
                Alur: "alz",
                Amharic: "am",
                Arabic: "ar",
                Armenian: "hy",
                Assamese: "as",
                Awadhi: "awa",
                Aymara: "ay",
                Azerbaijani: "az",
                Balinese: "ban",
                Bambara: "bm",
                Bashkir: "ba",
                Basque: "eu",
                Belarusian: "be",
                Bemba: "bem",
                Bengali: "bn",
                Betawi: "bew",
                Bhojpuri: "bho",
                Bikol: "bik",
                Bosnian: "bs",
                Breton: "br",
                Bulgarian: "bg",
                Buryat: "bua",
                Cantonese: "yue",
                Catalan: "ca",
                Cebuano: "ceb",
                "Chichewa (Nyanja)": "ny",
                "Chinese (Simplified)": "zh-CN",
                "Chinese (Traditional)": "zh-TW",
                Chuvash: "cv",
                Corsican: "co",
                "Crimean Tatar": "crh",
                Croatian: "hr",
                Czech: "cs",
                Danish: "da",
                Dinka: "din",
                Divehi: "dv",
                Dogri: "doi",
                Dombe: "dov",
                Dutch: "nl",
                Dzongkha: "dz",
                English: "en",
                Esperanto: "eo",
                Estonian: "et",
                Ewe: "ee",
                Fijian: "fj",
                "Filipino (Tagalog)": "fil",
                Finnish: "fi",
                French: "fr",
                "French (French)": "fr-FR",
                "French (Canadian)": "fr-CA",
                Frisian: "fy",
                Fulfulde: "ff",
                Ga: "gaa",
                Galician: "gl",
                "Ganda (Luganda)": "lg",
                Georgian: "ka",
                German: "de",
                Greek: "el",
                Guarani: "gn",
                Gujarati: "gu",
                "Haitian Creole": "ht",
                "Hakha Chin": "cnh",
                Hausa: "ha",
                Hawaiian: "haw",
                Hebrew: "iw",
                Hiligaynon: "hil",
                Hindi: "hi",
                Hmong: "hmn",
                Hungarian: "hu",
                Hunsrik: "hrx",
                Icelandic: "is",
                Igbo: "ig",
                Iloko: "ilo",
                Indonesian: "id",
                Irish: "ga",
                Italian: "it",
                Japanese: "ja",
                Javanese: "jw",
                Kannada: "kn",
                Kapampangan: "pam",
                Kazakh: "kk",
                Khmer: "km",
                Kiga: "cgg",
                Kinyarwanda: "rw",
                Kituba: "ktu",
                Konkani: "gom",
                Korean: "ko",
                Krio: "kri",
                "Kurdish (Kurmanji)": "ku",
                "Kurdish (Sorani)": "ckb",
                Kyrgyz: "ky",
                Lao: "lo",
                Latgalian: "ltg",
                Latin: "la",
                Latvian: "lv",
                Ligurian: "lij",
                Limburgan: "li",
                Lingala: "ln",
                Lithuanian: "lt",
                Lombard: "lmo",
                Luo: "luo",
                Luxembourgish: "lb",
                Macedonian: "mk",
                Maithili: "mai",
                Malagasy: "mg",
                Malay: "ms",
                "Malay (Jawi)": "ms-Arab",
                Malayalam: "ml",
                Maltese: "mt",
                Maori: "mi",
                Marathi: "mr",
                "Meadow Mari": "chm",
                "Meiteilon (Manipuri)": "mni-Mtei",
                Minang: "min",
                Mizo: "lus",
                Mongolian: "mn",
                "Myanmar (Burmese)": "my",
                "Ndebele (South)": "nr",
                "Nepalbhasa (Newari)": "new",
                Nepali: "ne",
                "Northern Sotho (Sepedi)": "nso",
                Norwegian: "no",
                Nuer: "nus",
                Occitan: "oc",
                "Odia (Oriya)": "or",
                Oromo: "om",
                Pangasinan: "pag",
                Papiamento: "pap",
                Pashto: "ps",
                Persian: "fa",
                Polish: "pl",
                Portuguese: "pt",
                "Portuguese (Portugal)": "pt-PT",
                "Portuguese (Brazil)": "pt-BR",
                Punjabi: "pa",
                "Punjabi (Shahmukhi)": "pa-Arab",
                Quechua: "qu",
                Romani: "rom",
                Romanian: "ro",
                Rundi: "rn",
                Russian: "ru",
                Samoan: "sm",
                Sango: "sg",
                Sanskrit: "sa",
                "Scots Gaelic": "gd",
                Serbian: "sr",
                Sesotho: "st",
                "Seychellois Creole": "crs",
                Shan: "shn",
                Shona: "sn",
                Sicilian: "scn",
                Silesian: "szl",
                Sindhi: "sd",
                "Sinhala (Sinhalese)": "si",
                Slovak: "sk",
                Slovenian: "sl",
                Somali: "so",
                Spanish: "es",
                Sundanese: "su",
                Swahili: "sw",
                Swati: "ss",
                Swedish: "sv",
                Tajik: "tg",
                Tamil: "ta",
                Tatar: "tt",
                Telugu: "te",
                Tetum: "tet",
                Thai: "th",
                Tigrinya: "ti",
                Tsonga: "ts",
                Tswana: "tn",
                Turkish: "tr",
                Turkmen: "tk",
                "Twi (Akan)": "ak",
                Ukrainian: "uk",
                Urdu: "ur",
                Uyghur: "ug",
                Uzbek: "uz",
                Vietnamese: "vi",
                Welsh: "cy",
                Xhosa: "xh",
                Yiddish: "yi",
                Yoruba: "yo",
                "Yucatec Maya": "yua",
                Zulu: "zu"
            }
              , o = n.n(r)().invert(i)
              , a = ["ar", "az", "bm", "dv", "doi", "ha", "iw", "kk", "ku", "ckb", "ky", "ml", "ms-Arab", "pa-Arab", "ps", "fa", "sd", "so", "su", "tg", "tk", "ur", "ug", "uz", "yi", "yo"]
              , s = {
                af: ["af-ZA-AdriNeural", "af-ZA-WillemNeural"],
                sq: ["sq-AL-AnilaNeural", "sq-AL-IlirNeural"],
                am: ["am-ET-AmehaNeural", "am-ET-MekdesNeural"],
                ar: ["ar-DZ-AminaNeural", "ar-DZ-IsmaelNeural", "ar-BH-AliNeural", "ar-BH-LailaNeural", "ar-EG-SalmaNeural", "ar-EG-ShakirNeural", "ar-IQ-BasselNeural", "ar-IQ-RanaNeural", "ar-JO-SanaNeural", "ar-JO-TaimNeural", "ar-KW-FahedNeural", "ar-KW-NouraNeural", "ar-LB-LaylaNeural", "ar-LB-RamiNeural", "ar-LY-ImanNeural", "ar-LY-OmarNeural", "ar-MA-JamalNeural", "ar-MA-MounaNeural", "ar-OM-AbdullahNeural", "ar-OM-AyshaNeural", "ar-QA-AmalNeural", "ar-QA-MoazNeural", "ar-SA-HamedNeural", "ar-SA-ZariyahNeural", "ar-SY-AmanyNeural", "ar-SY-LaithNeural", "ar-TN-HediNeural", "ar-TN-ReemNeural", "ar-AE-FatimaNeural", "ar-AE-HamdanNeural", "ar-YE-MaryamNeural", "ar-YE-SalehNeural"],
                az: ["az-AZ-BabekNeural", "az-AZ-BanuNeural"],
                bn: ["bn-BD-NabanitaNeural", "bn-BD-PradeepNeural", "bn-IN-BashkarNeural", "bn-IN-TanishaaNeural"],
                bs: ["bs-BA-GoranNeural", "bs-BA-VesnaNeural"],
                bg: ["bg-BG-BorislavNeural", "bg-BG-KalinaNeural"],
                my: ["my-MM-NilarNeural", "my-MM-ThihaNeural"],
                ca: ["ca-ES-EnricNeural", "ca-ES-JoanaNeural"],
                "zh-HK": ["zh-HK-HiuGaaiNeural", "zh-HK-HiuMaanNeural", "zh-HK-WanLungNeural"],
                "zh-CN": ["zh-CN-XiaoxiaoNeural", "zh-CN-XiaoyiNeural", "zh-CN-YunjianNeural", "zh-CN-YunxiNeural", "zh-CN-YunxiaNeural", "zh-CN-YunyangNeural"],
                "zh-CN-liaoning": ["zh-CN-liaoning-XiaobeiNeural"],
                "zh-TW": ["zh-TW-HsiaoChenNeural", "zh-TW-YunJheNeural", "zh-TW-HsiaoYuNeural"],
                "zh-CN-shaanxi": ["zh-CN-shaanxi-XiaoniNeural"],
                hr: ["hr-HR-GabrijelaNeural", "hr-HR-SreckoNeural"],
                cs: ["cs-CZ-AntoninNeural", "cs-CZ-VlastaNeural"],
                da: ["da-DK-ChristelNeural", "da-DK-JeppeNeural"],
                nl: ["nl-BE-ArnaudNeural", "nl-BE-DenaNeural", "nl-NL-ColetteNeural", "nl-NL-FennaNeural", "nl-NL-MaartenNeural"],
                en: ["en-AU-NatashaNeural", "en-AU-WilliamNeural", "en-CA-ClaraNeural", "en-CA-LiamNeural", "en-HK-SamNeural", "en-HK-YanNeural", "en-IN-NeerjaNeural", "en-IN-NeerjaNeural", "en-IN-PrabhatNeural", "en-IE-ConnorNeural", "en-IE-EmilyNeural", "en-KE-AsiliaNeural", "en-KE-ChilembaNeural", "en-NZ-MitchellNeural", "en-NZ-MollyNeural", "en-NG-AbeoNeural", "en-NG-EzinneNeural", "en-PH-JamesNeural", "en-PH-RosaNeural", "en-SG-LunaNeural", "en-SG-WayneNeural", "en-ZA-LeahNeural", "en-ZA-LukeNeural", "en-TZ-ElimuNeural", "en-TZ-ImaniNeural", "en-GB-LibbyNeural", "en-GB-MaisieNeural", "en-GB-RyanNeural", "en-GB-SoniaNeural", "en-GB-ThomasNeural", "en-US-AriaNeural", "en-US-AnaNeural", "en-US-ChristopherNeural", "en-US-EricNeural", "en-US-GuyNeural", "en-US-JennyNeural", "en-US-MichelleNeural", "en-US-RogerNeural", "en-US-SteffanNeural"],
                et: ["et-EE-AnuNeural", "et-EE-KertNeural"],
                tl: ["fil-PH-AngeloNeural", "fil-PH-BlessicaNeural"],
                fi: ["fi-FI-HarriNeural", "fi-FI-NooraNeural"],
                fr: ["fr-BE-CharlineNeural", "fr-BE-GerardNeural", "fr-CA-AntoineNeural", "fr-CA-JeanNeural", "fr-CA-SylvieNeural", "fr-FR-DeniseNeural", "fr-FR-EloiseNeural", "fr-FR-HenriNeural", "fr-CH-ArianeNeural", "fr-CH-FabriceNeural"],
                gl: ["gl-ES-RoiNeural", "gl-ES-SabelaNeural"],
                ka: ["ka-GE-EkaNeural", "ka-GE-GiorgiNeural"],
                de: ["de-AT-IngridNeural", "de-AT-JonasNeural", "de-DE-AmalaNeural", "de-DE-ConradNeural", "de-DE-KatjaNeural", "de-DE-KillianNeural", "de-CH-JanNeural", "de-CH-LeniNeural"],
                el: ["el-GR-AthinaNeural", "el-GR-NestorasNeural"],
                gu: ["gu-IN-DhwaniNeural", "gu-IN-NiranjanNeural"],
                iw: ["he-IL-AvriNeural", "he-IL-HilaNeural"],
                hi: ["hi-IN-MadhurNeural", "hi-IN-SwaraNeural"],
                hu: ["hu-HU-NoemiNeural", "hu-HU-TamasNeural"],
                is: ["is-IS-GudrunNeural", "is-IS-GunnarNeural"],
                id: ["id-ID-ArdiNeural", "id-ID-GadisNeural"],
                ga: ["ga-IE-ColmNeural", "ga-IE-OrlaNeural"],
                it: ["it-IT-DiegoNeural", "it-IT-ElsaNeural", "it-IT-IsabellaNeural"],
                ja: ["ja-JP-KeitaNeural", "ja-JP-NanamiNeural"],
                jv: ["jv-ID-DimasNeural", "jv-ID-SitiNeural"],
                kn: ["kn-IN-GaganNeural", "kn-IN-SapnaNeural"],
                kk: ["kk-KZ-AigulNeural", "kk-KZ-DauletNeural"],
                km: ["km-KH-PisethNeural", "km-KH-SreymomNeural"],
                ko: ["ko-KR-InJoonNeural", "ko-KR-SunHiNeural"],
                lo: ["lo-LA-ChanthavongNeural", "lo-LA-KeomanyNeural"],
                lv: ["lv-LV-EveritaNeural", "lv-LV-NilsNeural"],
                lt: ["lt-LT-LeonasNeural", "lt-LT-OnaNeural"],
                mk: ["mk-MK-AleksandarNeural", "mk-MK-MarijaNeural"],
                ms: ["ms-MY-OsmanNeural", "ms-MY-YasminNeural"],
                ml: ["ml-IN-MidhunNeural", "ml-IN-SobhanaNeural"],
                mt: ["mt-MT-GraceNeural", "mt-MT-JosephNeural"],
                mr: ["mr-IN-AarohiNeural", "mr-IN-ManoharNeural"],
                mn: ["mn-MN-BataaNeural", "mn-MN-YesuiNeural"],
                ne: ["ne-NP-HemkalaNeural", "ne-NP-SagarNeural"],
                nb: ["nb-NO-FinnNeural", "nb-NO-PernilleNeural"],
                ps: ["ps-AF-GulNawazNeural", "ps-AF-LatifaNeural"],
                fa: ["fa-IR-DilaraNeural", "fa-IR-FaridNeural"],
                pl: ["pl-PL-MarekNeural", "pl-PL-ZofiaNeural"],
                pt: ["pt-BR-AntonioNeural", "pt-BR-FranciscaNeural", "pt-PT-DuarteNeural", "pt-PT-RaquelNeural"],
                ro: ["ro-RO-AlinaNeural", "ro-RO-EmilNeural"],
                ru: ["ru-RU-DmitryNeural", "ru-RU-SvetlanaNeural"],
                sr: ["sr-RS-NicholasNeural", "sr-RS-SophieNeural"],
                si: ["si-LK-SameeraNeural", "si-LK-ThiliniNeural"],
                sk: ["sk-SK-LukasNeural", "sk-SK-ViktoriaNeural"],
                sl: ["sl-SI-PetraNeural", "sl-SI-RokNeural"],
                so: ["so-SO-MuuseNeural", "so-SO-UbaxNeural"],
                es: ["es-AR-ElenaNeural", "es-AR-TomasNeural", "es-BO-MarceloNeural", "es-BO-SofiaNeural", "es-CL-CatalinaNeural", "es-CL-LorenzoNeural", "es-CO-GonzaloNeural", "es-CO-SalomeNeural", "es-CR-JuanNeural", "es-CR-MariaNeural", "es-CU-BelkysNeural", "es-CU-ManuelNeural", "es-DO-EmilioNeural", "es-DO-RamonaNeural", "es-EC-AndreaNeural", "es-EC-LuisNeural", "es-SV-LorenaNeural", "es-SV-RodrigoNeural", "es-GQ-JavierNeural", "es-GQ-TeresaNeural", "es-GT-AndresNeural", "es-GT-MartaNeural", "es-HN-CarlosNeural", "es-HN-KarlaNeural", "es-MX-DaliaNeural", "es-MX-JorgeNeural", "es-NI-FedericoNeural", "es-NI-YolandaNeural", "es-PA-MargaritaNeural", "es-PA-RobertoNeural", "es-PY-MarioNeural", "es-PY-TaniaNeural", "es-PE-AlexNeural", "es-PE-CamilaNeural", "es-PR-KarinaNeural", "es-PR-VictorNeural", "es-ES-AlvaroNeural", "es-ES-ElviraNeural", "es-US-AlonsoNeural", "es-US-PalomaNeural", "es-UY-MateoNeural", "es-UY-ValentinaNeural", "es-VE-PaolaNeural", "es-VE-SebastianNeural"],
                su: ["su-ID-JajangNeural", "su-ID-TutiNeural"],
                sw: ["sw-KE-RafikiNeural", "sw-KE-ZuriNeural", "sw-TZ-DaudiNeural", "sw-TZ-RehemaNeural"],
                sv: ["sv-SE-MattiasNeural", "sv-SE-SofieNeural"],
                ta: ["ta-IN-PallaviNeural", "ta-IN-ValluvarNeural", "ta-MY-KaniNeural", "ta-MY-SuryaNeural", "ta-SG-AnbuNeural", "ta-SG-VenbaNeural", "ta-LK-KumarNeural", "ta-LK-SaranyaNeural"],
                te: ["te-IN-MohanNeural", "te-IN-ShrutiNeural"],
                th: ["th-TH-NiwatNeural", "th-TH-PremwadeeNeural"],
                tr: ["tr-TR-AhmetNeural", "tr-TR-EmelNeural"],
                uk: ["uk-UA-OstapNeural", "uk-UA-PolinaNeural"],
                ur: ["ur-IN-GulNeural", "ur-IN-SalmanNeural", "ur-PK-AsadNeural", "ur-PK-UzmaNeural"],
                uz: ["uz-UZ-MadinaNeural", "uz-UZ-SardorNeural"],
                vi: ["vi-VN-HoaiMyNeural", "vi-VN-NamMinhNeural"],
                cy: ["cy-GB-AledNeural", "cy-GB-NiaNeural"],
                zu: ["zu-ZA-ThandoNeural", "zu-ZA-ThembaNeural"]
            }
              , u = ["af", "sq", "ar", "bn", "bs", "bg", "ca", "zh-CN", "zh-TW", "hr", "cs", "da", "nl", "en", "et", "tl", "fi", "fr", "de", "el", "gu", "iw", "hi", "hu", "is", "id", "it", "ja", "jw", "kn", "km", "ko", "la", "lv", "ms", "ml", "mr", "my", "ne", "no", "pl", "pt", "ro", "ru", "sr", "si", "sk", "es", "su", "sw", "sv", "ta", "te", "th", "tr", "uk", "ur", "vi"]
              , c = {
                Afrikaans: "afr",
                Albanian: "sqi",
                Amharic: "amh",
                Arabic: "ara",
                Armenian: "hye",
                Azerbaijani: "aze",
                Basque: "eus",
                Belarusian: "bel",
                Bengali: "ben",
                Bosnian: "bos",
                Bulgarian: "bul",
                Burmese: "mya",
                Catalan: "cat",
                Cebuano: "ceb",
                "Chinese Simplified": "chi_sim",
                "Chinese Simplified (vertical)": "chi_sim_vert",
                "Chinese Traditional": "chi_tra",
                "Chinese Traditional (vertical)": "chi_tra_vert",
                Corsican: "cos",
                Croatian: "hrv",
                Czech: "ces",
                Danish: "dan",
                Dutch: "nld",
                English: "eng",
                Esperanto: "epo",
                Estonian: "est",
                Filipino: "fil",
                Finnish: "fin",
                French: "fra",
                Frisian: "fry",
                Galician: "glg",
                Georgian: "kat",
                German: "deu",
                Greek: "ell",
                Gujarati: "guj",
                Haitian: "hat",
                Hebrew: "heb",
                Hindi: "hin",
                Hungarian: "hun",
                Icelandic: "isl",
                Indonesian: "ind",
                Irish: "gle",
                Italian: "ita",
                Japanese: "jpn",
                "Japanese (vertical)": "jpn_vert",
                Javanese: "jav",
                Kannada: "kan",
                Kazakh: "kaz",
                Khmer: "khm",
                Korean: "kor",
                "Korean (vertical)": "kor_vert",
                Kurdish: "kmr",
                Lao: "lao",
                Latin: "lat",
                Latvian: "lav",
                Lithuanian: "lit",
                Luxembourgish: "ltz",
                Macedonian: "mkd",
                Malay: "msa",
                Malayalam: "mal",
                Maltese: "mlt",
                Maori: "mri",
                Marathi: "mar",
                Mongolian: "mon",
                Nepali: "nep",
                Norwegian: "nor",
                Persian: "fas",
                Polish: "pol",
                Portuguese: "por",
                Romanian: "ron",
                Russian: "rus",
                "Scottish Gaelic": "gla",
                Serbian: "srp",
                Sindhi: "snd",
                Sinhala: "sin",
                Slovak: "slk",
                Slovenian: "slv",
                Spanish: "spa",
                Sundanese: "sun",
                Swahili: "swa",
                Swedish: "swe",
                Tajik: "tgk",
                Tamil: "tam",
                Telugu: "tel",
                Thai: "tha",
                Turkish: "tur",
                Ukrainian: "ukr",
                Urdu: "urd",
                Uzbek: "uzb",
                Vietnamese: "vie",
                Welsh: "cym",
                Yiddish: "yid",
                Yoruba: "yor"
            }
              , l = {
                Afrikaans: "af-ZA",
                Amharic: "am-ET",
                "Arabic_Uni Arab Emirates": "ar-AE",
                Arabic_Bahrain: "ar-BH",
                Arabic_Algeria: "ar-DZ",
                Arabic_Egypt: "ar-EG",
                Arabic_Iraq: "ar-IQ",
                Arabic_Jordan: "ar-JO",
                Arabic_Kuwait: "ar-KW",
                Arabic_Lebanon: "ar-LB",
                Arabic_Libya: "ar-LY",
                Arabic_Maroco: "ar-MA",
                Arabic_Oman: "ar-OM",
                Arabic_Qatar: "ar-QA",
                "Arabic_Saudi Arabia": "ar-SA",
                Arabic_Syria: "ar-SY",
                Arabic_Tunisia: "ar-TN",
                Arabic_Yemen: "ar-YE",
                Armenian: "hy-AM",
                Azerbaijani: "az-AZ",
                Bangla_Bangladesh: "bn-BD",
                Bangla_India: "bn-IN",
                Basque: "eu-ES",
                Bulgarian: "bg-BG",
                Catalan: "ca-ES",
                "Chinese_Chinese Mandarin (Mainland China)": "cmn-Hans-CN",
                "Chinese_Chinese Mandarin (Hongkong)": "cmn-Hans-HK",
                "Chinese_Chinese (Taiwan)": "cmn-Hant-TW",
                "Chinese_Chinese Cantonese (Hongkong)": "yue-Hant-HK",
                Croatian: "hr-HR",
                Czech: "cs-CZ",
                Dansk: "da-DK",
                Deutsch: "de-DE",
                Dutch: "nl-NL",
                English_Australia: "en-AU",
                English_Canada: "en-CA",
                English_India: "en-IN",
                English_Kenya: "en-KE",
                English_Tanzania: "en-TZ",
                English_Ghana: "en-GH",
                "English_New Zealand": "en-NZ",
                English_Nigeria: "en-NG",
                "English_South Africa": "en-ZA",
                English_Philippines: "en-PH",
                "English_United Kingdom": "en-GB",
                "English_United States": "en-US",
                Filipino: "fil-PH",
                Finland: "fi-FI",
                French: "fr-FR",
                Galician: "gl-ES",
                Georgian: "ka-GE",
                Greek: "el-GR",
                Gujarati: "gu-IN",
                Hindi: "hi-IN",
                Hungarian: "hu-HU",
                Icelandic: "is-IS",
                Indonesian: "id-ID",
                Italian_Italia: "it-IT",
                Italian_Svizzera: "it-CH",
                Japanese: "ja-JP",
                Javanese: "jv-ID",
                Kannada: "kn-IN",
                Khmer: "km-KH",
                Kiswahili_Tanzania: "sw-TZ",
                Kiswahili_Kenya: "sw-KE",
                Korean: "ko-KR",
                Lao: "lo-LA",
                Latvian: "lv-LV",
                Lithuanian: "lt-LT",
                Malay: "ms-MY",
                Malayalam: "ml-IN",
                Marathi: "mr-IN",
                Myanmar: "my-MM",
                Nepali: "ne-NP",
                "Norwegian Bokmål": "nb-NO",
                Polish: "pl-PL",
                Portuguese_Brasil: "pt-BR",
                Portuguese_Portugal: "pt-PT",
                Romania: "ro-RO",
                Russian: "ru-RU",
                Serbian: "sr-RS",
                Sinhala: "si-LK",
                Slovene: "sl-SI",
                Slovak: "sk-SK",
                Spanish_Argentina: "es-AR",
                Spanish_Bolivia: "es-BO",
                Spanish_Chile: "es-CL",
                Spanish_Colombia: "es-CO",
                "Spanish_Costa Rica": "es-CR",
                Spanish_Ecuador: "es-EC",
                "Spanish_El Salvador": "es-SV",
                Spanish_España: "es-ES",
                "Spanish_Estados Unidos": "es-US",
                Spanish_Guatemala: "es-GT",
                Spanish_Honduras: "es-HN",
                Spanish_México: "es-MX",
                Spanish_Nicaragua: "es-NI",
                Spanish_Panamá: "es-PA",
                Spanish_Paraguay: "es-PY",
                Spanish_Perú: "es-PE",
                "Spanish_Puerto Rico": "es-PR",
                "Spanish_República Dominicana": "es-DO",
                Spanish_Uruguay: "es-UY",
                Spanish_Venezuela: "es-VE",
                Sundanese: "su-ID",
                Swedish_undefined: "sv-SE",
                Swedish_Kenya: "sw-KE",
                Tamil_India: "ta-IN",
                Tamil_Singapore: "ta-SG",
                "Tamil_Sri Lanka": "ta-LK",
                Tamil_Malaysia: "ta-MY",
                Telugu: "te-IN",
                Thai: "th-TH",
                Turkish: "tr-TR",
                Urdu_Pakistan: "ur-PK",
                Urdu_India: "ur-IN",
                Vietnamese: "vi-VN",
                Ukrainian: "uk-UA",
                Zulu: "zu-ZA"
            };
            function f(e) {
                return a.includes(e) ? "rtl" : "ltr"
            }
        }
        ,
        1955: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n(2543)
              , i = n.n(r);
            class o {
                static getRangeOption(e, t, n=1, r=0) {
                    return i().keyBy(i().range(e, t, n).map((e => e.toFixed(r))).map((e => String(e))))
                }
                static getRecordNoDate(e) {
                    return i().pick(e, ["sourceText", "sourceLang", "targetText", "targetLang", "actionType"])
                }
                static getRecordID(e) {
                    return JSON.stringify(this.getRecordNoDate(e))
                }
            }
        }
        ,
        8933: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                B: () => a
            });
            try {
                r = n(6815)
            } catch (e) {}
            var i = []
              , o = {};
            class a {
                constructor() {}
                static async loadSetting(e={}, t) {
                    o = e,
                    i = t;
                    const n = new a;
                    return await n.initialize(),
                    n
                }
                async initialize() {
                    this.loadDefaultData(),
                    await this.loadStorageData(),
                    this.initSettingListener()
                }
                async loadDefaultData() {
                    this.loadData(o)
                }
                async loadData(e) {
                    for (let[t,n] of Object.entries(e))
                        null != n && (this[t] = n)
                }
                async loadStorageData() {
                    var e = await r.storage.local.get(Object.keys(this));
                    this.loadData(e)
                }
                initSettingListener() {
                    r.storage.onChanged.addListener(( (e, t) => {
                        for (var n in e)
                            this[n] = e[n].newValue;
                        this.runSettingCallback(e)
                    }
                    ))
                }
                runSettingCallback(e) {
                    0 != Object.keys(e).filter((e => !this.ignoreCallbackOptionList.includes(e))).length && i && i(e)
                }
                save() {
                    r.storage.local.set(this)
                }
                async clear() {
                    await r.storage.local.clear()
                }
            }
        }
        ,
        1239: (e, t, n) => {
            "use strict";
            n.d(t, {
                g: () => E
            });
            var r, i = n(8941), o = n(7333), a = n(1955);
            try {
                r = n(6815)
            } catch (e) {}
            var s = i.A.concatJson({
                Auto: "auto"
            }, o.L1)
              , u = i.A.concatJson({
                None: "null"
            }, o.L1)
              , c = i.A.concatJson({
                Default: "default"
            }, o.L1)
              , l = {
                On: "true",
                Off: "false"
            }
              , f = {
                None: "null",
                Ctrl_Left: "ControlLeft",
                Ctrl_Right: "ControlRight",
                Alt_Left: "AltLeft",
                Alt_Right: "AltRight",
                Shift_Left: "ShiftLeft",
                Shift_Right: "ShiftRight",
                Meta_Left: "MetaLeft",
                Meta_Right: "MetaRight",
                Click_Left: "ClickLeft",
                Click_Middle: "ClickMiddle",
                Click_Right: "ClickRight",
                F2: "F2",
                F8: "F8",
                F9: "F9"
            }
              , p = a.A.getRangeOption(6, 41, 2, 0)
              , d = a.A.getRangeOption(100, 1001, 100, 0)
              , h = a.A.getRangeOption(0, 1.1, .1, 1)
              , g = a.A.getRangeOption(.5, 2.1, .1, 1)
              , m = a.A.getRangeOption(1, 11)
              , v = a.A.getRangeOption(0, 21)
              , y = a.A.getRangeOption(0, 41)
              , b = a.A.getRangeOption(.1, 2.1, .1, 1)
              , x = _.cloneDeep(f);
            x.Always = "always";
            var w = _.cloneDeep(f);
            w.Select = "select",
            w.Always = "always";
            var A = {
                Center: "center",
                Left: "left",
                Right: "right",
                Justify: "justify"
            }
              , T = i.A.concatJson({
                Default: "default"
            }, g)
              , S = {
                translateSource: {
                    default: "auto",
                    i18nKey: "Translate_From",
                    optionList: s,
                    settingTab: "main"
                },
                translateTarget: {
                    default: "en",
                    i18nKey: "Translate_Into",
                    optionList: o.L1,
                    settingTab: "main"
                },
                translatorVendor: {
                    default: "google",
                    i18nKey: "Translator_Engine",
                    optionList: {
                        google: "google",
                        bing: "bing",
                        "deepl (Experimental)": "deepl",
                        "yandex (Experimental)": "yandex",
                        "baidu (Experimental)": "baidu",
                        "papago (Experimental)": "papago",
                        "browser API (Experimental)": "browserAPI",
                        "googleWebImage (Experimental)": "googleWebImage",
                        "googleGTX (Experimental)": "googleGTX",
                        "googleWeb (Experimental)": "googleWeb",
                        "googleV2 (Experimental)": "googleV2"
                    },
                    settingTab: "main"
                },
                translateWhen: {
                    default: "mouseoverselect",
                    i18nKey: "Translate_When",
                    optionList: {
                        Select: "select",
                        Mouseover: "mouseover",
                        Mouseover_n_Select: "mouseoverselect"
                    },
                    settingTab: "main"
                },
                mouseoverTextType: {
                    default: "sentence",
                    i18nKey: "Mouseover_Text_Type",
                    optionList: {
                        Word: "word",
                        Sentence: "sentence",
                        Container: "container"
                    },
                    settingTab: "main"
                },
                writingLanguage: {
                    default: "en",
                    i18nKey: "Writing_Language",
                    optionList: o.L1,
                    settingTab: "main"
                },
                ocrLang: {
                    default: "jpn_vert",
                    i18nKey: "OCR_Language",
                    optionList: o.Vr,
                    settingTab: "main"
                },
                translateReverseTarget: {
                    default: "null",
                    i18nKey: "Reverse_Translate_Language",
                    optionList: u,
                    settingTab: "main"
                },
                detectSubtitle: {
                    default: "dualsub",
                    i18nKey: "Detect_Subtitle",
                    optionList: {
                        Dual_Subtitle: "dualsub",
                        Target_Single_Subtitle: "targetsinglesub",
                        Source_Single_Subtitle: "sourcesinglesub",
                        None: "null"
                    },
                    settingTab: "main"
                },
                showTooltipWhen: {
                    default: "always",
                    i18nKey: "Show_Tooltip_When",
                    optionList: x,
                    settingTab: "keyboard"
                },
                TTSWhen: {
                    default: "ControlLeft",
                    i18nKey: "Voice_When",
                    optionList: w,
                    settingTab: "keyboard"
                },
                keyDownTranslateWriting: {
                    default: "AltRight",
                    i18nKey: "Translate_Writing_When",
                    optionList: f,
                    settingTab: "keyboard"
                },
                keyDownAutoReader: {
                    default: "F2",
                    i18nKey: "Auto_Reader_When",
                    optionList: f,
                    settingTab: "keyboard"
                },
                keyDownOCR: {
                    default: "ShiftLeft",
                    i18nKey: "OCR_When",
                    optionList: x,
                    settingTab: "keyboard"
                },
                keySpeechRecognition: {
                    default: "ControlRight",
                    i18nKey: "Speech_Recognition_When",
                    optionList: f,
                    settingTab: "keyboard"
                },
                voiceVolume: {
                    default: "1.0",
                    i18nKey: "Voice_Volume",
                    optionList: h,
                    settingTab: "voice"
                },
                voiceRate: {
                    default: "1.0",
                    i18nKey: "Voice_Speed",
                    optionList: g,
                    settingTab: "voice"
                },
                voiceTarget: {
                    default: "source",
                    i18nKey: "Voice_Target",
                    optionList: {
                        Source_Text: "source",
                        Translated_Text: "target",
                        Source_n_Translated: "sourcetarget",
                        Translated_n_Source: "targetsource"
                    },
                    settingTab: "voice"
                },
                voiceRepeat: {
                    default: "1",
                    i18nKey: "Voice_Repeat",
                    optionList: m,
                    settingTab: "voice"
                },
                tooltipFontSize: {
                    default: "18",
                    i18nKey: "Tooltip_Font_Size",
                    optionList: p,
                    settingTab: "graphic"
                },
                tooltipWidth: {
                    default: "200",
                    i18nKey: "Tooltip_Width",
                    optionList: d,
                    settingTab: "graphic"
                },
                tooltipDistance: {
                    default: "20",
                    i18nKey: "Tooltip_Distance",
                    optionList: y,
                    settingTab: "graphic"
                },
                tooltipAnimation: {
                    default: "fade",
                    i18nKey: "Tooltip_Animation",
                    optionList: {
                        None: "",
                        Fade: "fade",
                        Scale: "scale",
                        Shift_away: "shift-away",
                        Shift_toward: "shift-toward",
                        Perspective: "perspective"
                    },
                    settingTab: "graphic"
                },
                tooltipPosition: {
                    default: "follow",
                    i18nKey: "Tooltip_Position",
                    optionList: {
                        Follow: "follow",
                        Fixed: "fixed"
                    },
                    settingTab: "graphic"
                },
                tooltipTextAlign: {
                    default: "center",
                    i18nKey: "Tooltip_Text_Align",
                    optionList: A,
                    settingTab: "graphic"
                },
                tooltipBackgroundBlur: {
                    default: "6",
                    i18nKey: "Tooltip_Background_Blur",
                    optionList: v,
                    settingTab: "graphic"
                },
                mouseoverHighlightText: {
                    default: "false",
                    i18nKey: "Mouseover_Highlight_Text",
                    optionList: l,
                    settingTab: "graphic"
                },
                tooltipFontColor: {
                    default: "#ffffffff",
                    i18nKey: "Tooltip_Font_Color",
                    optionList: {},
                    optionType: "colorPicker",
                    menu: !1,
                    settingTab: "graphic"
                },
                tooltipBackgroundColor: {
                    default: "#00000080",
                    i18nKey: "Tooltip_Background_Color",
                    optionList: {},
                    optionType: "colorPicker",
                    menu: !1,
                    settingTab: "graphic"
                },
                tooltipBorderColor: {
                    default: "#ffffff00",
                    i18nKey: "Tooltip_Border_Color",
                    optionList: {},
                    optionType: "colorPicker",
                    menu: !1,
                    settingTab: "graphic"
                },
                mouseoverTextHighlightColor: {
                    default: "#21dc6d40",
                    i18nKey: "Mouseover_Text_Highlight_Color",
                    optionList: {},
                    optionType: "colorPicker",
                    menu: !1,
                    settingTab: "graphic"
                },
                speechRecognitionLanguage: {
                    default: "en-US",
                    i18nKey: "Speech_Recognition_Language",
                    optionList: o.gY,
                    settingTab: "speech"
                },
                voicePanelTranslateLanguage: {
                    default: "default",
                    i18nKey: "Voice_Panel_Translate_Language",
                    optionList: c,
                    settingTab: "speech"
                },
                voicePanelTextTarget: {
                    default: "sourcetarget",
                    i18nKey: "Voice_Panel_Text_Target",
                    optionList: {
                        Source: "source",
                        Translated: "target",
                        Source_n_Translated: "sourcetarget"
                    },
                    settingTab: "speech"
                },
                voicePanelPadding: {
                    default: "20",
                    i18nKey: "Voice_Panel_Padding",
                    optionList: y,
                    settingTab: "speech"
                },
                voicePanelTextAlign: {
                    default: "center",
                    i18nKey: "Voice_Panel_Text_Align",
                    optionList: A,
                    settingTab: "speech"
                },
                voicePanelSourceFontSize: {
                    default: "18",
                    i18nKey: "Voice_Panel_Source_Font_Size",
                    optionList: p,
                    settingTab: "speech"
                },
                voicePanelTargetFontSize: {
                    default: "18",
                    i18nKey: "Voice_Panel_Target_Font_Size",
                    optionList: p,
                    settingTab: "speech"
                },
                voicePanelSourceFontColor: {
                    default: "#ffffffff",
                    i18nKey: "Voice_Panel_Source_Font_Color",
                    optionList: {},
                    optionType: "colorPicker",
                    menu: !1,
                    settingTab: "speech"
                },
                voicePanelTargetFontColor: {
                    default: "#ffffffff",
                    i18nKey: "Voice_Panel_Target_Font_Color",
                    optionList: {},
                    optionType: "colorPicker",
                    menu: !1,
                    settingTab: "speech"
                },
                voicePanelSourceBorderColor: {
                    default: "#000000b8",
                    i18nKey: "Voice_Panel_Source_Border_Color",
                    optionList: {},
                    optionType: "colorPicker",
                    menu: !1,
                    settingTab: "speech"
                },
                voicePanelTargetBorderColor: {
                    default: "#000000b8",
                    i18nKey: "Voice_Panel_Target_Border_Color",
                    optionList: {},
                    optionType: "colorPicker",
                    menu: !1,
                    settingTab: "speech"
                },
                voicePanelBackgroundColor: {
                    default: "#333333",
                    i18nKey: "Voice_Panel_Background_Color",
                    optionList: {},
                    optionType: "colorPicker",
                    menu: !1,
                    settingTab: "speech"
                },
                detectPDF: {
                    default: "true",
                    i18nKey: "Detect_PDF",
                    optionList: l,
                    settingTab: "advanced"
                },
                mouseoverPauseSubtitle: {
                    default: "true",
                    i18nKey: "Mouseover_Pause_Subtitle",
                    optionList: l,
                    settingTab: "advanced"
                },
                tooltipInfoSourceText: {
                    default: "false",
                    i18nKey: "Tooltip_Info_Source_Text",
                    optionList: l,
                    settingTab: "advanced"
                },
                tooltipInfoSourceLanguage: {
                    default: "false",
                    i18nKey: "Tooltip_Info_Source_Language",
                    optionList: l,
                    settingTab: "advanced"
                },
                tooltipInfoTransliteration: {
                    default: "false",
                    i18nKey: "Tooltip_Info_Transliteration",
                    optionList: l,
                    settingTab: "advanced"
                },
                tooltipWordDictionary: {
                    default: "true",
                    i18nKey: "Tooltip_Word_Dictionary",
                    optionList: l,
                    settingTab: "advanced"
                },
                voiceTranslatedRate: {
                    default: "default",
                    i18nKey: "Voice_Translated_Speed",
                    optionList: T,
                    settingTab: "advanced"
                },
                fallbackTranslatorEngine: {
                    default: "true",
                    i18nKey: "Fallback_Translator_Engine",
                    optionList: l,
                    settingTab: "advanced"
                },
                langExcludeList: {
                    default: [],
                    i18nKey: "Exclude_Language",
                    optionList: o.L1,
                    optionType: "multipleSelect",
                    settingTab: "exclude"
                },
                websiteExcludeList: {
                    default: ["*.example.com"],
                    i18nKey: "Exclude_Website",
                    optionList: "",
                    optionType: "comboBox",
                    settingTab: "exclude"
                },
                websiteWhiteList: {
                    default: [],
                    i18nKey: "Whitelist_Website",
                    optionList: "",
                    optionType: "comboBox",
                    settingTab: "exclude"
                },
                subtitleButtonToggle: {
                    default: "true",
                    i18nKey: "Subtitle_Button_Toggle",
                    optionList: l,
                    settingTab: "remains"
                },
                historyList: {
                    default: [],
                    i18nKey: "History_List",
                    optionList: [],
                    settingTab: "remains"
                },
                historyRecordActions: {
                    default: [],
                    i18nKey: "History_Record_Actions",
                    optionList: [],
                    settingTab: "remains"
                },
                ignoreCallbackOptionList: {
                    default: ["historyList"],
                    i18nKey: "Ignore_Callback_Option_List",
                    optionList: [],
                    settingTab: "remains"
                },
                popupCount: {
                    default: "0",
                    i18nKey: "Popup_Count",
                    optionList: [],
                    settingTab: "remains"
                },
                coffeeCount: {
                    default: "0",
                    i18nKey: "Coffee_Count",
                    optionList: [],
                    settingTab: "remains"
                },
                langPriority: {
                    default: {
                        auto: 9999999,
                        null: 9999999
                    },
                    i18nKey: "Language_Priority",
                    optionList: [],
                    settingTab: "remains"
                },
                mouseoverEventInterval: {
                    default: "300",
                    i18nKey: "Mouseover_Event_Interval",
                    optionList: b,
                    settingTab: "remains"
                },
                cardPlayMeta: {
                    default: ["image"],
                    i18nKey: "Card_Play_Meta",
                    optionList: [],
                    settingTab: "remains"
                },
                cardTagSelected: {
                    default: [],
                    i18nKey: "Card_Tag_Selected",
                    optionList: [],
                    settingTab: "remains"
                },
                deckStatus: {
                    default: {},
                    i18nKey: "Deck_Status",
                    optionList: [],
                    settingTab: "remains"
                },
                cardLen: {
                    default: {},
                    i18nKey: "Card_Length",
                    optionList: [],
                    settingTab: "remains"
                },
                importSetting: {
                    i18nKey: "Import_Setting",
                    optionList: [],
                    settingTab: "backup",
                    optionType: "button",
                    icon: "mdi-file-upload",
                    color: "primary",
                    onClick: () => {
                        !function() {
                            const e = document.createElement("input");
                            e.type = "file",
                            e.accept = ".json",
                            e.onchange = e => {
                                const t = e.target.files[0];
                                if (t) {
                                    const e = new FileReader;
                                    e.onload = e => {
                                        try {
                                            const t = JSON.parse(e.target.result);
                                            r.runtime.sendMessage({
                                                type: "importSetting",
                                                data: t
                                            })
                                        } catch (e) {}
                                    }
                                    ,
                                    e.readAsText(t)
                                }
                            }
                            ,
                            e.click()
                        }()
                    }
                },
                exportSetting: {
                    i18nKey: "Export_Setting",
                    optionList: [],
                    settingTab: "backup",
                    optionType: "button",
                    icon: "mdi-content-save",
                    color: "green",
                    onClick: async () => {
                        !async function() {
                            var e = await r.runtime.sendMessage({
                                type: "exportSetting"
                            });
                            const t = JSON.stringify(e?.settingData, null, 2)
                              , n = new Blob([t],{
                                type: "application/json"
                            })
                              , i = URL.createObjectURL(n)
                              , o = document.createElement("a");
                            o.href = i,
                            o.download = "mouse-tooltip-translator-settings.json",
                            o.click(),
                            URL.revokeObjectURL(i)
                        }()
                    }
                },
                resetSetting: {
                    i18nKey: "Reset_Setting",
                    optionList: [],
                    settingTab: "backup",
                    optionType: "button",
                    icon: "mdi-restore",
                    color: "red",
                    onClick: () => {
                        r.runtime.sendMessage({
                            type: "resetSetting"
                        })
                    }
                }
            };
            var E = Object.fromEntries(Object.entries(S).map(( ([e,t]) => [e, t.default])))
        }
        ,
        9632: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r, i = n(8933), o = n(1239), a = n(1651), s = n(7333), u = n(8941);
            try {
                r = n(6815)
            } catch (e) {}
            class c {
                static async loadSetting(e) {
                    const t = await this.getDefaultDataAll();
                    return i.B.loadSetting(t, e)
                }
                static async getDefaultDataAll() {
                    let e = u.A.concatJson({}, o.g);
                    return e.translateTarget = this.getDefaultLang(),
                    e = u.A.concatJson(e, await this.getDefaultVoice()),
                    e
                }
                static getDefaultLang() {
                    return this.parseLocaleLang(navigator.language)
                }
                static parseLocaleLang(e) {
                    let t = (0,
                    a.q)(e).language;
                    return t = {
                        zh: "zh-CN",
                        he: "iw",
                        fil: "tl"
                    }[t] || t,
                    "zh-TW" === e ? "zh-TW" : t
                }
                static async getDefaultVoice() {
                    const e = {}
                      , t = await this.getAllVoiceList();
                    for (const n in t)
                        e[`ttsVoice_${n}`] = t[n][0];
                    return e
                }
                static async getAllVoiceList() {
                    const e = await this.getBrowserTtsVoiceList()
                      , t = this.getBingTtsVoiceList()
                      , n = this.getGoogleTranslateTtsVoiceList();
                    let r = this.concatVoice(e, t);
                    return r = this.concatVoice(r, n),
                    u.A.sortJsonByKey(r)
                }
                static getBrowserTtsVoiceList() {
                    return new Promise((async e => {
                        const t = {};
                        try {
                            const n = await (r?.tts?.getVoices())
                              , i = n?.filter((e => null != e.remote && null != e.lang && null != e.voiceName)).sort(( (e, t) => t.remote - e.remote));
                            if (!i)
                                return void e(t);
                            for (const e of i) {
                                const n = this.parseLocaleLang(e.lang);
                                t[n] = t[n] || [],
                                t[n].push(e.voiceName)
                            }
                        } catch (e) {}
                        e(t)
                    }
                    ))
                }
                static getBingTtsVoiceList() {
                    const e = {};
                    for (const t in s.SL) {
                        const n = s.SL[t].map((e => `BingTTS_${e}`));
                        e[t] = n
                    }
                    return e
                }
                static getGoogleTranslateTtsVoiceList() {
                    const e = {};
                    for (const t of s.xE)
                        e[t] = [`GoogleTranslateTTS_${t}`];
                    return e
                }
                static concatVoice(e, t) {
                    const n = {
                        ...e
                    };
                    for (const e in t)
                        n[e] = n[e] ? n[e].concat(t[e]) : t[e];
                    return n
                }
                static async getSpeechTTSVoiceList() {
                    if (this.isBacgroundServiceWorker())
                        return {};
                    const e = {}
                      , t = (await this.getSpeechVoices()).filter((e => e.lang && e.name)).sort(( (e, t) => t.localService - e.localService));
                    for (const n of t) {
                        const t = this.parseLocaleLang(n.lang);
                        e[t] = e[t] || [],
                        e[t].push(n.name)
                    }
                    return e
                }
                static getSpeechVoices() {
                    return new Promise((e => {
                        let t = window.speechSynthesis.getVoices();
                        0 !== t.length ? e(t) : window.speechSynthesis.addEventListener("voiceschanged", ( () => {
                            t = window.speechSynthesis.getVoices(),
                            e(t)
                        }
                        ))
                    }
                    ))
                }
                static isBacgroundServiceWorker() {
                    try {
                        return !document
                    } catch (e) {
                        return !0
                    }
                }
                static async resetSetting() {
                    const e = await this.loadSetting();
                    await e.clear(),
                    e.save();
                    const t = await this.loadSetting();
                    return t.save(),
                    t
                }
                static async importSetting(e) {
                    const t = await this.loadSetting();
                    return t.loadData(e),
                    t.save(),
                    t
                }
                static async exportSetting() {
                    const e = await this.loadSetting();
                    return JSON.parse(JSON.stringify(e))
                }
            }
        }
        ,
        8941: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n(2673)
              , i = n.n(r);
            class o {
                static concatJson(e, t) {
                    return Object.assign(e, t)
                }
                static copyJson(e) {
                    return JSON.parse(JSON.stringify(e))
                }
                static sortJsonByKey(e) {
                    return Object.keys(e).sort().reduce(( (t, n) => (t[n] = e[n],
                    t)), {})
                }
                static getJsonFromList(e) {
                    var t = {};
                    for (const [n,r] of Object.entries(e))
                        t[r] = r;
                    return t
                }
                static filterWord(e) {
                    return ((e = this.trimAllSpace(e)).length > 1e3 || i()(e) || !/[^\s\d»«…~`!@#$%^&*()「」‑_+\-=\[\]{};、':"\\|,.<>\/?\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6\p{Extended_Pictographic}]/gu.test(e)) && (e = ""),
                    e
                }
                static trimAllSpace(e) {
                    return e ? e = (e = e.replace(/\s+/g, " ")).trim() : ""
                }
                static filterSpeechText(e) {
                    return e = this.trimAllSpace(e),
                    e = i()(e) ? "" : e,
                    e = this.filterEmoji(e),
                    e = this.filterHtmlTag(e),
                    e = this.filterNonSoundText(e),
                    e = this.filterParenthesis(e)
                }
                static filterNonSoundText(e) {
                    return e.replace(/[「」»<>«]/g, "")
                }
                static filterEmoji(e) {
                    return e.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|\p{Extended_Pictographic})/g, "")
                }
                static filterHtmlTag(e) {
                    return e.replace(/([<>])/g, "")
                }
                static filterParenthesis(e) {
                    return e.replace(/\([^\)]*\)/g, "")
                }
                static truncate(e, t) {
                    return e.length > t ? e.slice(0, t - 1) + "..." : e
                }
                static copyTextToClipboard(e) {
                    navigator.clipboard.writeText(e)
                }
            }
        }
        ,
        1651: (e, t, n) => {
            "use strict";
            function r(e) {
                var t = "string" == typeof e ? e.charCodeAt(0) : e;
                return t >= 97 && t <= 122 || t >= 65 && t <= 90
            }
            function i(e) {
                var t = "string" == typeof e ? e.charCodeAt(0) : e;
                return t >= 48 && t <= 57
            }
            function o(e) {
                return r(e) || i(e)
            }
            n.d(t, {
                q: () => c
            });
            var a = ["art-lojban", "cel-gaulish", "no-bok", "no-nyn", "zh-guoyu", "zh-hakka", "zh-min", "zh-min-nan", "zh-xiang"]
              , s = {
                "en-gb-oed": "en-GB-oxendict",
                "i-ami": "ami",
                "i-bnn": "bnn",
                "i-default": null,
                "i-enochian": null,
                "i-hak": "hak",
                "i-klingon": "tlh",
                "i-lux": "lb",
                "i-mingo": null,
                "i-navajo": "nv",
                "i-pwn": "pwn",
                "i-tao": "tao",
                "i-tay": "tay",
                "i-tsu": "tsu",
                "sgn-be-fr": "sfb",
                "sgn-be-nl": "vgt",
                "sgn-ch-de": "sgg",
                "art-lojban": "jbo",
                "cel-gaulish": null,
                "no-bok": "nb",
                "no-nyn": "nn",
                "zh-guoyu": "cmn",
                "zh-hakka": "hak",
                "zh-min": null,
                "zh-min-nan": "nan",
                "zh-xiang": "hsn"
            }
              , u = {}.hasOwnProperty;
            function c(e, t) {
                var n, l, f, p = t || {}, d = {
                    language: null,
                    extendedLanguageSubtags: [],
                    script: null,
                    region: null,
                    variants: [],
                    extensions: [],
                    privateuse: [],
                    irregular: null,
                    regular: null
                }, h = String(e), g = h.toLowerCase(), m = 0;
                if (null == e)
                    throw new Error("Expected string, got `" + e + "`");
                if (u.call(s, g))
                    return (void 0 === p.normalize || null === p.normalize || p.normalize) && s[g] ? c(s[g]) : (d[a.includes(g) ? "regular" : "irregular"] = h,
                    d);
                for (; r(g.charCodeAt(m)) && m < 9; )
                    m++;
                if (m > 1 && m < 9) {
                    if (d.language = h.slice(0, m),
                    m < 4)
                        for (l = 0; 45 === g.charCodeAt(m) && r(g.charCodeAt(m + 1)) && r(g.charCodeAt(m + 2)) && r(g.charCodeAt(m + 3)) && !r(g.charCodeAt(m + 4)); ) {
                            if (l > 2)
                                return v(m, 3, "Too many extended language subtags, expected at most 3 subtags");
                            d.extendedLanguageSubtags.push(h.slice(m + 1, m + 4)),
                            m += 4,
                            l++
                        }
                    for (45 === g.charCodeAt(m) && r(g.charCodeAt(m + 1)) && r(g.charCodeAt(m + 2)) && r(g.charCodeAt(m + 3)) && r(g.charCodeAt(m + 4)) && !r(g.charCodeAt(m + 5)) && (d.script = h.slice(m + 1, m + 5),
                    m += 5),
                    45 === g.charCodeAt(m) && (r(g.charCodeAt(m + 1)) && r(g.charCodeAt(m + 2)) && !r(g.charCodeAt(m + 3)) ? (d.region = h.slice(m + 1, m + 3),
                    m += 3) : i(g.charCodeAt(m + 1)) && i(g.charCodeAt(m + 2)) && i(g.charCodeAt(m + 3)) && !i(g.charCodeAt(m + 4)) && (d.region = h.slice(m + 1, m + 4),
                    m += 4)); 45 === g.charCodeAt(m); ) {
                        for (f = n = m + 1; o(g.charCodeAt(f)); ) {
                            if (f - n > 7)
                                return v(f, 1, "Too long variant, expected at most 8 characters");
                            f++
                        }
                        if (!(f - n > 4 || f - n > 3 && i(g.charCodeAt(n))))
                            break;
                        d.variants.push(h.slice(n, f)),
                        m = f
                    }
                    for (; 45 === g.charCodeAt(m) && 120 !== g.charCodeAt(m + 1) && o(g.charCodeAt(m + 1)) && 45 === g.charCodeAt(m + 2) && o(g.charCodeAt(m + 3)); ) {
                        for (f = m + 2,
                        l = 0; 45 === g.charCodeAt(f) && o(g.charCodeAt(f + 1)) && o(g.charCodeAt(f + 2)); )
                            for (f = (n = f + 1) + 2,
                            l++; o(g.charCodeAt(f)); ) {
                                if (f - n > 7)
                                    return v(f, 2, "Too long extension, expected at most 8 characters");
                                f++
                            }
                        if (!l)
                            return v(f, 4, "Empty extension, extensions must have at least 2 characters of content");
                        d.extensions.push({
                            singleton: h.charAt(m + 1),
                            extensions: h.slice(m + 3, f).split("-")
                        }),
                        m = f
                    }
                } else
                    m = 0;
                if (0 === m && 120 === g.charCodeAt(m) || 45 === g.charCodeAt(m) && 120 === g.charCodeAt(m + 1))
                    for (f = m = m ? m + 2 : 1; 45 === g.charCodeAt(f) && o(g.charCodeAt(f + 1)); ) {
                        for (f = n = m + 1; o(g.charCodeAt(f)); ) {
                            if (f - n > 7)
                                return v(f, 5, "Too long private-use area, expected at most 8 characters");
                            f++
                        }
                        d.privateuse.push(h.slice(m + 1, f)),
                        m = f
                    }
                return m !== h.length ? v(m, 6, "Found superfluous content after tag") : d;
                function v(e, t, n) {
                    return p.warning && p.warning(n, t, e),
                    p.forgiving ? d : {
                        language: null,
                        extendedLanguageSubtags: [],
                        script: null,
                        region: null,
                        variants: [],
                        extensions: [],
                        privateuse: [],
                        irregular: null,
                        regular: null
                    }
                }
            }
        }
        ,
        8619: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => a
            });
            const r = () => {
                const e = new Error("Delay aborted");
                return e.name = "AbortError",
                e
            }
              , i = new WeakMap;
            const o = function({clearTimeout: e, setTimeout: t}={}) {
                return (n, {value: o, signal: a}={}) => {
                    if (a?.aborted)
                        return Promise.reject(r());
                    let s, u, c;
                    const l = e ?? clearTimeout
                      , f = () => {
                        l(s),
                        c(r())
                    }
                      , p = new Promise(( (e, r) => {
                        u = () => {
                            a && a.removeEventListener("abort", f),
                            e(o)
                        }
                        ,
                        c = r,
                        s = (t ?? setTimeout)(u, n)
                    }
                    ));
                    return a && a.addEventListener("abort", f, {
                        once: !0
                    }),
                    i.set(p, ( () => {
                        l(s),
                        s = null,
                        u()
                    }
                    )),
                    p
                }
            }()
              , a = o
        }
        ,
        5652: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            const r = function(e, t) {
                if (void 0 === e || !e.document)
                    throw Error("jQuery requires a window with a document");
                var n = []
                  , r = Object.getPrototypeOf
                  , i = n.slice
                  , o = n.flat ? function(e) {
                    return n.flat.call(e)
                }
                : function(e) {
                    return n.concat.apply([], e)
                }
                  , a = n.push
                  , s = n.indexOf
                  , u = {}
                  , c = u.toString
                  , l = u.hasOwnProperty
                  , f = l.toString
                  , p = f.call(Object)
                  , d = {};
                function h(e) {
                    return null == e ? e + "" : "object" == typeof e ? u[c.call(e)] || "object" : typeof e
                }
                function g(e) {
                    return null != e && e === e.window
                }
                function m(e) {
                    var t = !!e && e.length
                      , n = h(e);
                    return !("function" == typeof e || g(e)) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }
                var v = e.document
                  , y = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };
                function b(e, t, n) {
                    var r, i = (n = n || v).createElement("script");
                    for (r in i.text = e,
                    y)
                        t && t[r] && (i[r] = t[r]);
                    n.head.appendChild(i).parentNode && i.parentNode.removeChild(i)
                }
                var x = "4.0.0-beta"
                  , w = /HTML$/i
                  , A = function(e, t) {
                    return new A.fn.init(e,t)
                };
                function T(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                A.fn = A.prototype = {
                    jquery: x,
                    constructor: A,
                    length: 0,
                    toArray: function() {
                        return i.call(this)
                    },
                    get: function(e) {
                        return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = A.merge(this.constructor(), e);
                        return t.prevObject = this,
                        t
                    },
                    each: function(e) {
                        return A.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(A.map(this, (function(t, n) {
                            return e.call(t, n, t)
                        }
                        )))
                    },
                    slice: function() {
                        return this.pushStack(i.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(A.grep(this, (function(e, t) {
                            return (t + 1) % 2
                        }
                        )))
                    },
                    odd: function() {
                        return this.pushStack(A.grep(this, (function(e, t) {
                            return t % 2
                        }
                        )))
                    },
                    eq: function(e) {
                        var t = this.length
                          , n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    }
                },
                A.extend = A.fn.extend = function() {
                    var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
                    for ("boolean" == typeof a && (c = a,
                    a = arguments[s] || {},
                    s++),
                    "object" != typeof a && "function" != typeof a && (a = {}),
                    s === u && (a = this,
                    s--); s < u; s++)
                        if (null != (e = arguments[s]))
                            for (t in e)
                                r = e[t],
                                "__proto__" !== t && a !== r && (c && r && (A.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                                o = i && !Array.isArray(n) ? [] : i || A.isPlainObject(n) ? n : {},
                                i = !1,
                                a[t] = A.extend(c, o, r)) : void 0 !== r && (a[t] = r));
                    return a
                }
                ,
                A.extend({
                    expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !!e && "[object Object]" === c.call(e) && (!(t = r(e)) || "function" == typeof (n = l.call(t, "constructor") && t.constructor) && f.call(n) === p)
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        b(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (m(e))
                            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                                ;
                        else
                            for (r in e)
                                if (!1 === t.call(e[r], r, e[r]))
                                    break;
                        return e
                    },
                    text: function(e) {
                        var t, n = "", r = 0, i = e.nodeType;
                        if (!i)
                            for (; t = e[r++]; )
                                n += A.text(t);
                        return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (m(Object(e)) ? A.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
                        n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : s.call(t, e, n)
                    },
                    isXMLDoc: function(e) {
                        var t = e && e.namespaceURI
                          , n = e && (e.ownerDocument || e).documentElement;
                        return !w.test(t || n && n.nodeName || "HTML")
                    },
                    contains: function(e, t) {
                        var n = t && t.parentNode;
                        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                            e[i++] = t[r];
                        return e.length = i,
                        e
                    },
                    grep: function(e, t, n) {
                        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                            !t(e[i], i) !== a && r.push(e[i]);
                        return r
                    },
                    map: function(e, t, n) {
                        var r, i, a = 0, s = [];
                        if (m(e))
                            for (r = e.length; a < r; a++)
                                null != (i = t(e[a], a, n)) && s.push(i);
                        else
                            for (a in e)
                                null != (i = t(e[a], a, n)) && s.push(i);
                        return o(s)
                    },
                    guid: 1,
                    support: d
                }),
                "function" == typeof Symbol && (A.fn[Symbol.iterator] = n[Symbol.iterator]),
                A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                    u["[object " + t + "]"] = t.toLowerCase()
                }
                ));
                var _ = n.pop
                  , S = "[\\x20\\t\\r\\n\\f]"
                  , E = v.documentMode;
                try {
                    v.querySelector(":has(*,:jqfake)"),
                    d.cssHas = !1
                } catch (e) {
                    d.cssHas = !0
                }
                var N = [];
                E && N.push(":enabled", ":disabled", "\\[" + S + "*name" + S + "*=" + S + "*(?:''|\"\")"),
                d.cssHas || N.push(":has"),
                N = N.length && new RegExp(N.join("|"));
                var k = RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$", "g")
                  , L = "(?:\\\\[\\da-fA-F]{1,6}" + S + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+"
                  , C = RegExp("^" + S + "*([>+~]|" + S + ")" + S + "*")
                  , O = RegExp(S + "|>")
                  , P = /[+~]/
                  , j = v.documentElement
                  , R = j.matches || j.msMatchesSelector;
                function I() {
                    var e = [];
                    return function t(n, r) {
                        return e.push(n + " ") > A.expr.cacheLength && delete t[e.shift()],
                        t[n + " "] = r
                    }
                }
                function M(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                var D = "\\[" + S + "*(" + L + ")(?:" + S + "*([*^$|!~]?=)" + S + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + S + "*\\]"
                  , B = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + D + ")*)|.*)\\)|)"
                  , q = {
                    ID: RegExp("^#(" + L + ")"),
                    CLASS: RegExp("^\\.(" + L + ")"),
                    TAG: RegExp("^(" + L + "|[*])"),
                    ATTR: RegExp("^" + D),
                    PSEUDO: RegExp("^" + B),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)", "i")
                }
                  , F = new RegExp(B)
                  , H = RegExp("\\\\[\\da-fA-F]{1,6}" + S + "?|\\\\([^\\r\\n\\f])", "g")
                  , W = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                };
                function U(e) {
                    return e.replace(H, W)
                }
                function z(e) {
                    A.error("Syntax error, unrecognized expression: " + e)
                }
                var $ = RegExp("^" + S + "*," + S + "*")
                  , K = I();
                function V(e, t) {
                    var n, r, i, o, a, s, u, c = K[e + " "];
                    if (c)
                        return t ? 0 : c.slice(0);
                    for (a = e,
                    s = [],
                    u = A.expr.preFilter; a; ) {
                        for (o in (!n || (r = $.exec(a))) && (r && (a = a.slice(r[0].length) || a),
                        s.push(i = [])),
                        n = !1,
                        (r = C.exec(a)) && (n = r.shift(),
                        i.push({
                            value: n,
                            type: r[0].replace(k, " ")
                        }),
                        a = a.slice(n.length)),
                        q)
                            (r = A.expr.match[o].exec(a)) && (!u[o] || (r = u[o](r))) && (n = r.shift(),
                            i.push({
                                value: n,
                                type: o,
                                matches: r
                            }),
                            a = a.slice(n.length));
                        if (!n)
                            break
                    }
                    return t ? a.length : a ? z(e) : K(e, s).slice(0)
                }
                function G(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++)
                        r += e[t].value;
                    return r
                }
                function Y(e, t, n, r, i, o, a) {
                    var s = 0
                      , u = e.length
                      , c = null == n;
                    if ("object" === h(n))
                        for (s in i = !0,
                        n)
                            Y(e, t, s, n[s], !0, o, a);
                    else if (void 0 !== r && (i = !0,
                    "function" != typeof r && (a = !0),
                    c && (a ? (t.call(e, r),
                    t = null) : (c = t,
                    t = function(e, t, n) {
                        return c.call(A(e), n)
                    }
                    )),
                    t))
                        for (; s < u; s++)
                            t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
                }
                var J = /[^\x20\t\r\n\f]+/g;
                A.fn.extend({
                    attr: function(e, t) {
                        return Y(this, A.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            A.removeAttr(this, e)
                        }
                        ))
                    }
                }),
                A.extend({
                    attr: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return void 0 === e.getAttribute ? A.prop(e, t, n) : (1 === o && A.isXMLDoc(e) || (i = A.attrHooks[t.toLowerCase()]),
                            void 0 !== n ? null === n ? void A.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n),
                            n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = e.getAttribute(t)) ? void 0 : r)
                    },
                    attrHooks: {},
                    removeAttr: function(e, t) {
                        var n, r = 0, i = t && t.match(J);
                        if (i && 1 === e.nodeType)
                            for (; n = i[r++]; )
                                e.removeAttribute(n)
                    }
                }),
                E && (A.attrHooks.type = {
                    set: function(e, t) {
                        if ("radio" === t && T(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }),
                A.each("checked selected async autofocus autoplay controls defer disabled hidden ismap loop multiple open readonly required scoped".split(" "), (function(e, t) {
                    A.attrHooks[t] = {
                        get: function(e) {
                            return null != e.getAttribute(t) ? t.toLowerCase() : null
                        },
                        set: function(e, t, n) {
                            return !1 === t ? A.removeAttr(e, n) : e.setAttribute(n, n),
                            n
                        }
                    }
                }
                ));
                var X = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                function Z(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }
                A.escapeSelector = function(e) {
                    return (e + "").replace(X, Z)
                }
                ;
                var Q = n.sort
                  , ee = n.splice;
                function te(e, t) {
                    if (e === t)
                        return ne = !0,
                        0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ? e == v || e.ownerDocument == v && A.contains(v, e) ? -1 : t == v || t.ownerDocument == v && A.contains(v, t) ? 1 : 0 : 4 & n ? -1 : 1)
                }
                A.uniqueSort = function(e) {
                    var t, n = [], r = 0, i = 0;
                    if (ne = !1,
                    Q.call(e, te),
                    ne) {
                        for (; t = e[i++]; )
                            t === e[i] && (r = n.push(i));
                        for (; r--; )
                            ee.call(e, n[r], 1)
                    }
                    return e
                }
                ,
                A.fn.uniqueSort = function() {
                    return this.pushStack(A.uniqueSort(i.apply(this)))
                }
                ;
                var ne, re, ie, oe, ae, se, ue = 0, ce = 0, le = I(), fe = I(), pe = I(), de = RegExp(S + "+", "g"), he = RegExp("^" + L + "$"), ge = A.extend({
                    needsContext: RegExp("^" + S + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)", "i")
                }, q), me = /^(?:input|select|textarea|button)$/i, ve = /^h\d$/i, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = function() {
                    Se()
                }, xe = Ne((function(e) {
                    return !0 === e.disabled && T(e, "fieldset")
                }
                ), {
                    dir: "parentNode",
                    next: "legend"
                });
                function we(e, t, n, r) {
                    var i, o, s, u, c, l, f, p = t && t.ownerDocument, d = t ? t.nodeType : 9;
                    if (n = n || [],
                    "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d)
                        return n;
                    if (!r && (Se(t),
                    t = t || oe,
                    se)) {
                        if (11 !== d && (c = ye.exec(e)))
                            if (i = c[1]) {
                                if (9 === d)
                                    return (s = t.getElementById(i)) && a.call(n, s),
                                    n;
                                if (p && (s = p.getElementById(i)) && A.contains(t, s))
                                    return a.call(n, s),
                                    n
                            } else {
                                if (c[2])
                                    return a.apply(n, t.getElementsByTagName(e)),
                                    n;
                                if ((i = c[3]) && t.getElementsByClassName)
                                    return a.apply(n, t.getElementsByClassName(i)),
                                    n
                            }
                        if (!(pe[e + " "] || N && N.test(e))) {
                            if (f = e,
                            p = t,
                            1 === d && (O.test(e) || C.test(e))) {
                                for (((p = P.test(e) && M(t.parentNode) || t) != t || E) && ((u = t.getAttribute("id")) ? u = A.escapeSelector(u) : t.setAttribute("id", u = A.expando)),
                                o = (l = V(e)).length; o--; )
                                    l[o] = (u ? "#" + u : ":scope") + " " + G(l[o]);
                                f = l.join(",")
                            }
                            try {
                                return a.apply(n, p.querySelectorAll(f)),
                                n
                            } catch (t) {
                                pe(e, !0)
                            } finally {
                                u === A.expando && t.removeAttribute("id")
                            }
                        }
                    }
                    return Oe(e.replace(k, "$1"), t, n, r)
                }
                function Ae(e) {
                    return e[A.expando] = !0,
                    e
                }
                function Te(e) {
                    return function(t) {
                        return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || !e !== t.isDisabled && xe(t) === e : t.disabled === e : "label"in t && t.disabled === e
                    }
                }
                function _e(e) {
                    return Ae((function(t) {
                        return t = +t,
                        Ae((function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--; )
                                n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        }
                        ))
                    }
                    ))
                }
                function Se(e) {
                    var t, n = e ? e.ownerDocument || e : v;
                    n != oe && 9 === n.nodeType && (ae = (oe = n).documentElement,
                    se = !A.isXMLDoc(oe),
                    E && v != oe && (t = oe.defaultView) && t.top !== t && t.addEventListener("unload", be))
                }
                for (re in we.matches = function(e, t) {
                    return we(e, null, null, t)
                }
                ,
                we.matchesSelector = function(e, t) {
                    if (Se(e),
                    se && !pe[t + " "] && (!N || !N.test(t)))
                        try {
                            return R.call(e, t)
                        } catch (e) {
                            pe(t, !0)
                        }
                    return we(t, oe, null, [e]).length > 0
                }
                ,
                A.expr = {
                    cacheLength: 50,
                    createPseudo: Ae,
                    match: ge,
                    find: {
                        ID: function(e, t) {
                            if (void 0 !== t.getElementById && se) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        },
                        TAG: function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
                        },
                        CLASS: function(e, t) {
                            if (void 0 !== t.getElementsByClassName && se)
                                return t.getElementsByClassName(e)
                        }
                    },
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = U(e[1]),
                            e[3] = U(e[3] || e[4] || e[5] || ""),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || z(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && z(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && F.test(n) && (t = V(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                        }
                    },
                    filter: {
                        ID: function(e) {
                            var t = U(e);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        },
                        TAG: function(e) {
                            var t = U(e).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return T(e, t)
                            }
                        },
                        CLASS: function(e) {
                            var t = le[e + " "];
                            return t || (t = RegExp("(^|" + S + ")" + e + "(" + S + "|$)"),
                            le(e, (function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            }
                            )))
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = A.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "",
                                "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(de, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3)
                              , a = "last" !== e.slice(-4)
                              , s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, u) {
                                var c, l, f, p, d, h = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, m = s && t.nodeName.toLowerCase(), v = !u && !s, y = !1;
                                if (g) {
                                    if (o) {
                                        for (; h; ) {
                                            for (f = t; f = f[h]; )
                                                if (s ? T(f, m) : 1 === f.nodeType)
                                                    return !1;
                                            d = h = "only" === e && !d && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (d = [a ? g.firstChild : g.lastChild],
                                    a && v) {
                                        for (y = (p = (c = (l = g[A.expando] || (g[A.expando] = {}))[e] || [])[0] === ue && c[1]) && c[2],
                                        f = p && g.childNodes[p]; f = ++p && f && f[h] || (y = p = 0) || d.pop(); )
                                            if (1 === f.nodeType && ++y && f === t) {
                                                l[e] = [ue, p, y];
                                                break
                                            }
                                    } else if (v && (y = p = (c = (l = t[A.expando] || (t[A.expando] = {}))[e] || [])[0] === ue && c[1]),
                                    !1 === y)
                                        for (; (f = ++p && f && f[h] || (y = p = 0) || d.pop()) && (!(s ? T(f, m) : 1 === f.nodeType) || !++y || (v && ((l = f[A.expando] || (f[A.expando] = {}))[e] = [ue, y]),
                                        f !== t)); )
                                            ;
                                    return (y -= i) === r || y % r == 0 && y / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n = A.expr.pseudos[e] || A.expr.setFilters[e.toLowerCase()] || z("unsupported pseudo: " + e);
                            return n[A.expando] ? n(t) : n
                        }
                    },
                    pseudos: {
                        not: Ae((function(e) {
                            var t = []
                              , n = []
                              , r = Ce(e.replace(k, "$1"));
                            return r[A.expando] ? Ae((function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--; )
                                    (o = a[s]) && (e[s] = !(t[s] = o))
                            }
                            )) : function(e, i, o) {
                                return t[0] = e,
                                r(t, null, o, n),
                                t[0] = null,
                                !n.pop()
                            }
                        }
                        )),
                        has: Ae((function(e) {
                            return function(t) {
                                return we(e, t).length > 0
                            }
                        }
                        )),
                        contains: Ae((function(e) {
                            return e = U(e),
                            function(t) {
                                return (t.textContent || A.text(t)).indexOf(e) > -1
                            }
                        }
                        )),
                        lang: Ae((function(e) {
                            return he.test(e || "") || z("unsupported lang: " + e),
                            e = U(e).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = se ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }
                        )),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === ae
                        },
                        focus: function(e) {
                            return e === oe.activeElement && oe.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: Te(!1),
                        disabled: Te(!0),
                        checked: function(e) {
                            return T(e, "input") && !!e.checked || T(e, "option") && !!e.selected
                        },
                        selected: function(e) {
                            return E && e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !A.expr.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ve.test(e.nodeName)
                        },
                        input: function(e) {
                            return me.test(e.nodeName)
                        },
                        button: function(e) {
                            return T(e, "input") && "button" === e.type || T(e, "button")
                        },
                        text: function(e) {
                            return T(e, "input") && "text" === e.type
                        },
                        first: _e((function() {
                            return [0]
                        }
                        )),
                        last: _e((function(e, t) {
                            return [t - 1]
                        }
                        )),
                        eq: _e((function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }
                        )),
                        even: _e((function(e, t) {
                            for (var n = 0; n < t; n += 2)
                                e.push(n);
                            return e
                        }
                        )),
                        odd: _e((function(e, t) {
                            for (var n = 1; n < t; n += 2)
                                e.push(n);
                            return e
                        }
                        )),
                        lt: _e((function(e, t, n) {
                            var r;
                            for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                                e.push(r);
                            return e
                        }
                        )),
                        gt: _e((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; )
                                e.push(r);
                            return e
                        }
                        ))
                    }
                },
                A.expr.pseudos.nth = A.expr.pseudos.eq,
                {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    A.expr.pseudos[re] = function(e) {
                        return function(t) {
                            return T(t, "input") && t.type === e
                        }
                    }(re);
                for (re in {
                    submit: !0,
                    reset: !0
                })
                    A.expr.pseudos[re] = function(e) {
                        return function(t) {
                            return (T(t, "input") || T(t, "button")) && t.type === e
                        }
                    }(re);
                function Ee() {}
                function Ne(e, t, n) {
                    var r = t.dir
                      , i = t.next
                      , o = i || r
                      , a = n && "parentNode" === o
                      , s = ce++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r]; )
                            if (1 === t.nodeType || a)
                                return e(t, n, i);
                        return !1
                    }
                    : function(t, n, u) {
                        var c, l, f = [ue, s];
                        if (u) {
                            for (; t = t[r]; )
                                if ((1 === t.nodeType || a) && e(t, n, u))
                                    return !0
                        } else
                            for (; t = t[r]; )
                                if (1 === t.nodeType || a)
                                    if (l = t[A.expando] || (t[A.expando] = {}),
                                    i && T(t, i))
                                        t = t[r] || t;
                                    else {
                                        if ((c = l[o]) && c[0] === ue && c[1] === s)
                                            return f[2] = c[2];
                                        if (l[o] = f,
                                        f[2] = e(t, n, u))
                                            return !0
                                    }
                        return !1
                    }
                }
                function ke(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--; )
                            if (!e[i](t, n, r))
                                return !1;
                        return !0
                    }
                    : e[0]
                }
                function Le(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
                        (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                        c && t.push(s));
                    return a
                }
                function Ce(e, t) {
                    var n, r, i, o, u = [], c = [], l = fe[e + " "];
                    if (!l) {
                        for (t || (t = V(e)),
                        o = t.length; o--; )
                            (l = function e(t) {
                                for (var n, r, i, o = t.length, u = A.expr.relative[t[0].type], c = u || A.expr.relative[" "], l = u ? 1 : 0, f = Ne((function(e) {
                                    return e === n
                                }
                                ), c, !0), p = Ne((function(e) {
                                    return s.call(n, e) > -1
                                }
                                ), c, !0), d = [function(e, t, r) {
                                    var i = !u && (r || t != ie) || ((n = t).nodeType ? f(e, t, r) : p(e, t, r));
                                    return n = null,
                                    i
                                }
                                ]; l < o; l++)
                                    if (r = A.expr.relative[t[l].type])
                                        d = [Ne(ke(d), r)];
                                    else {
                                        if ((r = A.expr.filter[t[l].type].apply(null, t[l].matches))[A.expando]) {
                                            for (i = ++l; i < o && !A.expr.relative[t[i].type]; i++)
                                                ;
                                            return function e(t, n, r, i, o, u) {
                                                return i && !i[A.expando] && (i = e(i)),
                                                o && !o[A.expando] && (o = e(o, u)),
                                                Ae((function(e, u, c, l) {
                                                    var f, p, d, h, g = [], m = [], v = u.length, y = e || function(e, t, n) {
                                                        for (var r = 0, i = t.length; r < i; r++)
                                                            we(e, t[r], n);
                                                        return n
                                                    }(n || "*", c.nodeType ? [c] : c, []), b = !t || !e && n ? y : Le(y, g, t, c, l);
                                                    if (r ? r(b, h = o || (e ? t : v || i) ? [] : u, c, l) : h = b,
                                                    i)
                                                        for (f = Le(h, m),
                                                        i(f, [], c, l),
                                                        p = f.length; p--; )
                                                            (d = f[p]) && (h[m[p]] = !(b[m[p]] = d));
                                                    if (e) {
                                                        if (o || t) {
                                                            if (o) {
                                                                for (f = [],
                                                                p = h.length; p--; )
                                                                    (d = h[p]) && f.push(b[p] = d);
                                                                o(null, h = [], f, l)
                                                            }
                                                            for (p = h.length; p--; )
                                                                (d = h[p]) && (f = o ? s.call(e, d) : g[p]) > -1 && (e[f] = !(u[f] = d))
                                                        }
                                                    } else
                                                        h = Le(h === u ? h.splice(v, h.length) : h),
                                                        o ? o(null, u, h, l) : a.apply(u, h)
                                                }
                                                ))
                                            }(l > 1 && ke(d), l > 1 && G(t.slice(0, l - 1).concat({
                                                value: " " === t[l - 2].type ? "*" : ""
                                            })).replace(k, "$1"), r, l < i && e(t.slice(l, i)), i < o && e(t = t.slice(i)), i < o && G(t))
                                        }
                                        d.push(r)
                                    }
                                return ke(d)
                            }(t[o]))[A.expando] ? u.push(l) : c.push(l);
                        (l = fe(e, (n = u.length > 0,
                        r = c.length > 0,
                        i = function(e, t, i, o, s) {
                            var l, f, p, d = 0, h = "0", g = e && [], m = [], v = ie, y = e || r && A.expr.find.TAG("*", s), b = ue += null == v ? 1 : Math.random() || .1;
                            for (s && (ie = t == oe || t || s); null != (l = y[h]); h++) {
                                if (r && l) {
                                    for (f = 0,
                                    t || l.ownerDocument == oe || (Se(l),
                                    i = !se); p = c[f++]; )
                                        if (p(l, t || oe, i)) {
                                            a.call(o, l);
                                            break
                                        }
                                    s && (ue = b)
                                }
                                n && ((l = !p && l) && d--,
                                e && g.push(l))
                            }
                            if (d += h,
                            n && h !== d) {
                                for (f = 0; p = u[f++]; )
                                    p(g, m, t, i);
                                if (e) {
                                    if (d > 0)
                                        for (; h--; )
                                            g[h] || m[h] || (m[h] = _.call(o));
                                    m = Le(m)
                                }
                                a.apply(o, m),
                                s && !e && m.length > 0 && d + u.length > 1 && A.uniqueSort(o)
                            }
                            return s && (ue = b,
                            ie = v),
                            g
                        }
                        ,
                        n ? Ae(i) : i))).selector = e
                    }
                    return l
                }
                function Oe(e, t, n, r) {
                    var i, o, s, u, c, l = "function" == typeof e && e, f = !r && V(e = l.selector || e);
                    if (n = n || [],
                    1 === f.length) {
                        if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && se && A.expr.relative[o[1].type]) {
                            if (!(t = (A.expr.find.ID(U(s.matches[0]), t) || [])[0]))
                                return n;
                            l && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                        }
                        for (i = ge.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                        !A.expr.relative[u = s.type]); )
                            if ((c = A.expr.find[u]) && (r = c(U(s.matches[0]), P.test(o[0].type) && M(t.parentNode) || t))) {
                                if (o.splice(i, 1),
                                !(e = r.length && G(o)))
                                    return a.apply(n, r),
                                    n;
                                break
                            }
                    }
                    return (l || Ce(e, f))(r, t, !se, n, !t || P.test(e) && M(t.parentNode) || t),
                    n
                }
                function Pe(e, t, n) {
                    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (i && A(e).is(n))
                                break;
                            r.push(e)
                        }
                    return r
                }
                function je(e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
                Ee.prototype = A.expr.filters = A.expr.pseudos,
                A.expr.setFilters = new Ee,
                Se(),
                A.find = we,
                we.compile = Ce,
                we.select = Oe,
                we.setDocument = Se,
                we.tokenize = V;
                var Re = A.expr.match.needsContext
                  , Ie = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function Me(e) {
                    return "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                }
                function De(e, t, n) {
                    return "function" == typeof t ? A.grep(e, (function(e, r) {
                        return !!t.call(e, r, e) !== n
                    }
                    )) : t.nodeType ? A.grep(e, (function(e) {
                        return e === t !== n
                    }
                    )) : "string" != typeof t ? A.grep(e, (function(e) {
                        return s.call(t, e) > -1 !== n
                    }
                    )) : A.filter(t, e, n)
                }
                A.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType ? A.find.matchesSelector(r, e) ? [r] : [] : A.find.matches(e, A.grep(t, (function(e) {
                        return 1 === e.nodeType
                    }
                    )))
                }
                ,
                A.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length, i = this;
                        if ("string" != typeof e)
                            return this.pushStack(A(e).filter((function() {
                                for (t = 0; t < r; t++)
                                    if (A.contains(i[t], this))
                                        return !0
                            }
                            )));
                        for (t = 0,
                        n = this.pushStack([]); t < r; t++)
                            A.find(e, i[t], n);
                        return r > 1 ? A.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(De(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(De(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!De(this, "string" == typeof e && Re.test(e) ? A(e) : e || [], !1).length
                    }
                });
                var Be, qe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (A.fn.init = function(e, t) {
                    var n, r;
                    if (!e)
                        return this;
                    if (e.nodeType)
                        return this[0] = e,
                        this.length = 1,
                        this;
                    if ("function" == typeof e)
                        return void 0 !== Be.ready ? Be.ready(e) : e(A);
                    if (Me(n = e + ""))
                        n = [null, e, null];
                    else {
                        if ("string" != typeof e)
                            return A.makeArray(e, this);
                        n = qe.exec(e)
                    }
                    if (n && (n[1] || !t)) {
                        if (!n[1])
                            return (r = v.getElementById(n[2])) && (this[0] = r,
                            this.length = 1),
                            this;
                        if (t = t instanceof A ? t[0] : t,
                        A.merge(this, A.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : v, !0)),
                        Ie.test(n[1]) && A.isPlainObject(t))
                            for (n in t)
                                "function" == typeof this[n] ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return !t || t.jquery ? (t || Be).find(e) : this.constructor(t).find(e)
                }
                ).prototype = A.fn,
                Be = A(v);
                var Fe = /^(?:parents|prev(?:Until|All))/
                  , He = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
                function We(e, t) {
                    for (; (e = e[t]) && 1 !== e.nodeType; )
                        ;
                    return e
                }
                function Ue(e) {
                    return e
                }
                function ze(e) {
                    throw e
                }
                function $e(e, t, n, r) {
                    var i;
                    try {
                        e && "function" == typeof (i = e.promise) ? i.call(e).done(t).fail(n) : e && "function" == typeof (i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n(e)
                    }
                }
                A.fn.extend({
                    has: function(e) {
                        var t = A(e, this)
                          , n = t.length;
                        return this.filter((function() {
                            for (var e = 0; e < n; e++)
                                if (A.contains(this, t[e]))
                                    return !0
                        }
                        ))
                    },
                    closest: function(e, t) {
                        var n, r = 0, i = this.length, o = [], a = "string" != typeof e && A(e);
                        if (!Re.test(e))
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && A.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                        return this.pushStack(o.length > 1 ? A.uniqueSort(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? s.call(A(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(A.uniqueSort(A.merge(this.get(), A(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }),
                A.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return Pe(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return Pe(e, "parentNode", n)
                    },
                    next: function(e) {
                        return We(e, "nextSibling")
                    },
                    prev: function(e) {
                        return We(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return Pe(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return Pe(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return Pe(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return Pe(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return je((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return je(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (T(e, "template") && (e = e.content || e),
                        A.merge([], e.childNodes))
                    }
                }, (function(e, t) {
                    A.fn[e] = function(n, r) {
                        var i = A.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n),
                        r && "string" == typeof r && (i = A.filter(r, i)),
                        this.length > 1 && (He[e] || A.uniqueSort(i),
                        Fe.test(e) && i.reverse()),
                        this.pushStack(i)
                    }
                }
                )),
                A.Callbacks = function(e) {
                    e = "string" == typeof e ? (t = e,
                    n = {},
                    A.each(t.match(J) || [], (function(e, t) {
                        n[t] = !0
                    }
                    )),
                    n) : A.extend({}, e);
                    var t, n, r, i, o, a, s = [], u = [], c = -1, l = function() {
                        for (a = a || e.once,
                        o = r = !0; u.length; c = -1)
                            for (i = u.shift(); ++c < s.length; )
                                !1 === s[c].apply(i[0], i[1]) && e.stopOnFalse && (c = s.length,
                                i = !1);
                        e.memory || (i = !1),
                        r = !1,
                        a && (s = i ? [] : "")
                    }, f = {
                        add: function() {
                            return s && (i && !r && (c = s.length - 1,
                            u.push(i)),
                            function t(n) {
                                A.each(n, (function(n, r) {
                                    "function" == typeof r ? e.unique && f.has(r) || s.push(r) : r && r.length && "string" !== h(r) && t(r)
                                }
                                ))
                            }(arguments),
                            i && !r && l()),
                            this
                        },
                        remove: function() {
                            return A.each(arguments, (function(e, t) {
                                for (var n; (n = A.inArray(t, s, n)) > -1; )
                                    s.splice(n, 1),
                                    n <= c && c--
                            }
                            )),
                            this
                        },
                        has: function(e) {
                            return e ? A.inArray(e, s) > -1 : s.length > 0
                        },
                        empty: function() {
                            return s && (s = []),
                            this
                        },
                        disable: function() {
                            return a = u = [],
                            s = i = "",
                            this
                        },
                        disabled: function() {
                            return !s
                        },
                        lock: function() {
                            return a = u = [],
                            i || r || (s = i = ""),
                            this
                        },
                        locked: function() {
                            return !!a
                        },
                        fireWith: function(e, t) {
                            return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                            u.push(t),
                            r || l()),
                            this
                        },
                        fire: function() {
                            return f.fireWith(this, arguments),
                            this
                        },
                        fired: function() {
                            return !!o
                        }
                    };
                    return f
                }
                ,
                A.extend({
                    Deferred: function(t) {
                        var n = [["notify", "progress", A.Callbacks("memory"), A.Callbacks("memory"), 2], ["resolve", "done", A.Callbacks("once memory"), A.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", A.Callbacks("once memory"), A.Callbacks("once memory"), 1, "rejected"]]
                          , r = "pending"
                          , i = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments),
                                this
                            },
                            catch: function(e) {
                                return i.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return A.Deferred((function(t) {
                                    A.each(n, (function(n, r) {
                                        var i = "function" == typeof e[r[4]] && e[r[4]];
                                        o[r[1]]((function() {
                                            var e = i && i.apply(this, arguments);
                                            e && "function" == typeof e.promise ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                        }
                                        ))
                                    }
                                    )),
                                    e = null
                                }
                                )).promise()
                            },
                            then: function(t, r, i) {
                                var o = 0;
                                function a(t, n, r, i) {
                                    return function() {
                                        var s = this
                                          , u = arguments
                                          , c = function() {
                                            var e, c;
                                            if (!(t < o)) {
                                                if ((e = r.apply(s, u)) === n.promise())
                                                    throw TypeError("Thenable self-resolution");
                                                "function" == typeof (c = e && ("object" == typeof e || "function" == typeof e) && e.then) ? i ? c.call(e, a(o, n, Ue, i), a(o, n, ze, i)) : (o++,
                                                c.call(e, a(o, n, Ue, i), a(o, n, ze, i), a(o, n, Ue, n.notifyWith))) : (r !== Ue && (s = void 0,
                                                u = [e]),
                                                (i || n.resolveWith)(s, u))
                                            }
                                        }
                                          , l = i ? c : function() {
                                            try {
                                                c()
                                            } catch (e) {
                                                A.Deferred.exceptionHook && A.Deferred.exceptionHook(e, l.error),
                                                t + 1 >= o && (r !== ze && (s = void 0,
                                                u = [e]),
                                                n.rejectWith(s, u))
                                            }
                                        }
                                        ;
                                        t ? l() : (A.Deferred.getErrorHook && (l.error = A.Deferred.getErrorHook()),
                                        e.setTimeout(l))
                                    }
                                }
                                return A.Deferred((function(e) {
                                    n[0][3].add(a(0, e, "function" == typeof i ? i : Ue, e.notifyWith)),
                                    n[1][3].add(a(0, e, "function" == typeof t ? t : Ue)),
                                    n[2][3].add(a(0, e, "function" == typeof r ? r : ze))
                                }
                                )).promise()
                            },
                            promise: function(e) {
                                return null != e ? A.extend(e, i) : i
                            }
                        }
                          , o = {};
                        return A.each(n, (function(e, t) {
                            var a = t[2]
                              , s = t[5];
                            i[t[1]] = a.add,
                            s && a.add((function() {
                                r = s
                            }
                            ), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                            a.add(t[3].fire),
                            o[t[0]] = function() {
                                return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                                this
                            }
                            ,
                            o[t[0] + "With"] = a.fireWith
                        }
                        )),
                        i.promise(o),
                        t && t.call(o, o),
                        o
                    },
                    when: function(e) {
                        var t = arguments.length
                          , n = t
                          , r = Array(n)
                          , o = i.call(arguments)
                          , a = A.Deferred()
                          , s = function(e) {
                            return function(n) {
                                r[e] = this,
                                o[e] = arguments.length > 1 ? i.call(arguments) : n,
                                --t || a.resolveWith(r, o)
                            }
                        };
                        if (t <= 1 && ($e(e, a.done(s(n)).resolve, a.reject, !t),
                        "pending" === a.state() || "function" == typeof (o[n] && o[n].then)))
                            return a.then();
                        for (; n--; )
                            $e(o[n], s(n), a.reject);
                        return a.promise()
                    }
                });
                var Ke = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                A.Deferred.exceptionHook = function(t, n) {
                    t && Ke.test(t.name) && e.console.warn("jQuery.Deferred exception", t, n)
                }
                ,
                A.readyException = function(t) {
                    e.setTimeout((function() {
                        throw t
                    }
                    ))
                }
                ;
                var Ve = A.Deferred();
                function Ge() {
                    v.removeEventListener("DOMContentLoaded", Ge),
                    e.removeEventListener("load", Ge),
                    A.ready()
                }
                A.fn.ready = function(e) {
                    return Ve.then(e).catch((function(e) {
                        A.readyException(e)
                    }
                    )),
                    this
                }
                ,
                A.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        !(!0 === e ? --A.readyWait : A.isReady) && (A.isReady = !0,
                        !0 !== e && --A.readyWait > 0 || Ve.resolveWith(v, [A]))
                    }
                }),
                A.ready.then = Ve.then,
                "loading" !== v.readyState ? e.setTimeout(A.ready) : (v.addEventListener("DOMContentLoaded", Ge),
                e.addEventListener("load", Ge));
                var Ye = /-([a-z])/g;
                function Je(e, t) {
                    return t.toUpperCase()
                }
                function Xe(e) {
                    return e.replace(Ye, Je)
                }
                function Ze(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                }
                function Qe() {
                    this.expando = A.expando + Qe.uid++
                }
                Qe.uid = 1,
                Qe.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return !t && (t = Object.create(null),
                        Ze(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))),
                        t
                    },
                    set: function(e, t, n) {
                        var r, i = this.cache(e);
                        if ("string" == typeof t)
                            i[Xe(t)] = n;
                        else
                            for (r in t)
                                i[Xe(r)] = t[r];
                        return n
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Xe(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                        void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(Xe) : (t = Xe(t))in r ? [t] : t.match(J) || []).length;
                                for (; n--; )
                                    delete r[t[n]]
                            }
                            (void 0 === t || A.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !A.isEmptyObject(t)
                    }
                };
                var et = new Qe
                  , tt = new Qe
                  , nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                  , rt = /[A-Z]/g;
                function it(e, t, n) {
                    var r, i;
                    if (void 0 === n && 1 === e.nodeType)
                        if (r = "data-" + t.replace(rt, "-$&").toLowerCase(),
                        "string" == typeof (n = e.getAttribute(r))) {
                            try {
                                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : nt.test(i) ? JSON.parse(i) : i)
                            } catch (e) {}
                            tt.set(e, t, n)
                        } else
                            n = void 0;
                    return n
                }
                A.extend({
                    hasData: function(e) {
                        return tt.hasData(e) || et.hasData(e)
                    },
                    data: function(e, t, n) {
                        return tt.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        tt.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return et.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        et.remove(e, t)
                    }
                }),
                A.fn.extend({
                    data: function(e, t) {
                        var n, r, i, o = this[0], a = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = tt.get(o),
                            1 === o.nodeType && !et.get(o, "hasDataAttrs"))) {
                                for (n = a.length; n--; )
                                    a[n] && 0 === (r = a[n].name).indexOf("data-") && it(o, r = Xe(r.slice(5)), i[r]);
                                et.set(o, "hasDataAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each((function() {
                            tt.set(this, e)
                        }
                        )) : Y(this, (function(t) {
                            var n;
                            if (o && void 0 === t)
                                return void 0 !== (n = tt.get(o, e)) || void 0 !== (n = it(o, e)) ? n : void 0;
                            this.each((function() {
                                tt.set(this, e, t)
                            }
                            ))
                        }
                        ), null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            tt.remove(this, e)
                        }
                        ))
                    }
                }),
                A.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e)
                            return t = (t || "fx") + "queue",
                            r = et.get(e, t),
                            n && (!r || Array.isArray(n) ? r = et.set(e, t, A.makeArray(n)) : r.push(n)),
                            r || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = A.queue(e, t)
                          , r = n.length
                          , i = n.shift()
                          , o = A._queueHooks(e, t);
                        "inprogress" === i && (i = n.shift(),
                        r--),
                        i && ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, (function() {
                            A.dequeue(e, t)
                        }
                        ), o)),
                        !r && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return et.get(e, n) || et.set(e, n, {
                            empty: A.Callbacks("once memory").add((function() {
                                et.remove(e, [t + "queue", n])
                            }
                            ))
                        })
                    }
                }),
                A.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e,
                        e = "fx",
                        n--),
                        arguments.length < n ? A.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = A.queue(this, e, t);
                            A._queueHooks(this, e),
                            "fx" === e && "inprogress" !== n[0] && A.dequeue(this, e)
                        }
                        ))
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            A.dequeue(this, e)
                        }
                        ))
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1, i = A.Deferred(), o = this, a = this.length, s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                        for ("string" != typeof e && (t = e,
                        e = void 0),
                        e = e || "fx"; a--; )
                            (n = et.get(o[a], e + "queueHooks")) && n.empty && (r++,
                            n.empty.add(s));
                        return s(),
                        i.promise(t)
                    }
                });
                var ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                  , at = RegExp("^(?:([+-])=|)(" + ot + ")([a-z%]*)$", "i")
                  , st = ["Top", "Right", "Bottom", "Left"];
                function ut(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && "none" === A.css(e, "display")
                }
                var ct = /^[a-z]/
                  , lt = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
                function ft(e) {
                    return ct.test(e) && lt.test(e[0].toUpperCase() + e.slice(1))
                }
                function pt(e, t, n, r) {
                    var i, o, a = 20, s = r ? function() {
                        return r.cur()
                    }
                    : function() {
                        return A.css(e, t, "")
                    }
                    , u = s(), c = n && n[3] || (ft(t) ? "px" : ""), l = e.nodeType && (!ft(t) || "px" !== c && +u) && at.exec(A.css(e, t));
                    if (l && l[3] !== c) {
                        for (u /= 2,
                        c = c || l[3],
                        l = +u || 1; a--; )
                            A.style(e, t, l + c),
                            (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                            l /= o;
                        l *= 2,
                        A.style(e, t, l + c),
                        n = n || []
                    }
                    return n && (l = +l || +u || 0,
                    i = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
                    r && (r.unit = c,
                    r.start = l,
                    r.end = i)),
                    i
                }
                var dt = /^-ms-/;
                function ht(e) {
                    return Xe(e.replace(dt, "ms-"))
                }
                var gt = {};
                function mt(e, t) {
                    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
                        (r = e[o]).style && (n = r.style.display,
                        t ? ("none" !== n || (i[o] = et.get(r, "display") || null,
                        i[o] || (r.style.display = "")),
                        "" === r.style.display && ut(r) && (i[o] = function(e) {
                            var t, n = e.ownerDocument, r = e.nodeName, i = gt[r];
                            return i || (t = n.body.appendChild(n.createElement(r)),
                            i = A.css(t, "display"),
                            t.parentNode.removeChild(t),
                            "none" === i && (i = "block"),
                            gt[r] = i),
                            i
                        }(r))) : "none" !== n && (i[o] = "none",
                        et.set(r, "display", n)));
                    for (o = 0; o < a; o++)
                        null != i[o] && (e[o].style.display = i[o]);
                    return e
                }
                A.fn.extend({
                    show: function() {
                        return mt(this, !0)
                    },
                    hide: function() {
                        return mt(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            ut(this) ? A(this).show() : A(this).hide()
                        }
                        ))
                    }
                });
                var vt = function(e) {
                    return A.contains(e.ownerDocument, e) || e.getRootNode(yt) === e.ownerDocument
                }
                  , yt = {
                    composed: !0
                };
                j.getRootNode || (vt = function(e) {
                    return A.contains(e.ownerDocument, e)
                }
                );
                var bt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
                  , xt = {
                    thead: ["table"],
                    col: ["colgroup", "table"],
                    tr: ["tbody", "table"],
                    td: ["tr", "tbody", "table"]
                };
                function wt(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                    void 0 === t || t && T(e, t) ? A.merge([e], n) : n
                }
                xt.tbody = xt.tfoot = xt.colgroup = xt.caption = xt.thead,
                xt.th = xt.td;
                var At = /^$|^module$|\/(?:java|ecma)script/i;
                function Tt(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        et.set(e[n], "globalEval", !t || et.get(t[n], "globalEval"))
                }
                var _t = /<|&#?\w+;/;
                function St(e, t, r, i, o) {
                    for (var a, s, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, g = e.length; d < g; d++)
                        if ((a = e[d]) || 0 === a)
                            if ("object" === h(a) && (a.nodeType || m(a)))
                                A.merge(p, a.nodeType ? [a] : a);
                            else if (_t.test(a)) {
                                for (s = s || f.appendChild(t.createElement("div")),
                                l = (u = xt[(bt.exec(a) || ["", ""])[1].toLowerCase()] || n).length; --l > -1; )
                                    s = s.appendChild(t.createElement(u[l]));
                                s.innerHTML = A.htmlPrefilter(a),
                                A.merge(p, s.childNodes),
                                (s = f.firstChild).textContent = ""
                            } else
                                p.push(t.createTextNode(a));
                    for (f.textContent = "",
                    d = 0; a = p[d++]; )
                        if (i && A.inArray(a, i) > -1)
                            o && o.push(a);
                        else if (c = vt(a),
                        s = wt(f.appendChild(a), "script"),
                        c && Tt(s),
                        r)
                            for (l = 0; a = s[l++]; )
                                At.test(a.type || "") && r.push(a);
                    return f
                }
                function Et(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                    e
                }
                function Nt(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                    e
                }
                function kt(e, t, n, r) {
                    t = o(t);
                    var i, a, s, u, c, l, f = 0, p = e.length, d = p - 1, h = t[0];
                    if ("function" == typeof h)
                        return e.each((function(i) {
                            var o = e.eq(i);
                            t[0] = h.call(this, i, o.html()),
                            kt(o, t, n, r)
                        }
                        ));
                    if (p && (a = (i = St(t, e[0].ownerDocument, !1, e, r)).firstChild,
                    1 === i.childNodes.length && (i = a),
                    a || r)) {
                        for (u = (s = A.map(wt(i, "script"), Et)).length; f < p; f++)
                            c = i,
                            f !== d && (c = A.clone(c, !0, !0),
                            u && A.merge(s, wt(c, "script"))),
                            n.call(e[f], c, f);
                        if (u)
                            for (l = s[s.length - 1].ownerDocument,
                            A.map(s, Nt),
                            f = 0; f < u; f++)
                                c = s[f],
                                At.test(c.type || "") && !et.get(c, "globalEval") && A.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? A._evalUrl && !c.noModule && A._evalUrl(c.src, {
                                    nonce: c.nonce,
                                    crossOrigin: c.crossOrigin
                                }, l) : b(c.textContent, c, l))
                    }
                    return e
                }
                var Lt = /^(?:checkbox|radio)$/i
                  , Ct = /^([^.]*)(?:\.(.+)|)/;
                function Ot() {
                    return !0
                }
                function Pt() {
                    return !1
                }
                function jt(e, t, n, r, i, o) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in "string" != typeof n && (r = r || n,
                        n = void 0),
                        t)
                            jt(e, s, n, r, t[s], o);
                        return e
                    }
                    if (null == r && null == i ? (i = n,
                    r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                    r = void 0) : (i = r,
                    r = n,
                    n = void 0)),
                    !1 === i)
                        i = Pt;
                    else if (!i)
                        return e;
                    return 1 === o && (a = i,
                    (i = function(e) {
                        return A().off(e),
                        a.apply(this, arguments)
                    }
                    ).guid = a.guid || (a.guid = A.guid++)),
                    e.each((function() {
                        A.event.add(this, t, i, r, n)
                    }
                    ))
                }
                function Rt(e, t, n) {
                    n ? (et.set(e, t, !1),
                    A.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var n, r = et.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (r)
                                    (A.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (r = i.call(arguments),
                                et.set(this, t, r),
                                this[t](),
                                n = et.get(this, t),
                                et.set(this, t, !1),
                                r !== n)
                                    return e.stopImmediatePropagation(),
                                    e.preventDefault(),
                                    n
                            } else
                                r && (et.set(this, t, A.event.trigger(r[0], r.slice(1), this)),
                                e.stopPropagation(),
                                e.isImmediatePropagationStopped = Ot)
                        }
                    })) : void 0 === et.get(e, t) && A.event.add(e, t, Ot)
                }
                A.event = {
                    add: function(e, t, n, r, i) {
                        var o, a, s, u, c, l, f, p, d, h, g, m = et.get(e);
                        if (Ze(e))
                            for (n.handler && (n = (o = n).handler,
                            i = o.selector),
                            i && A.find.matchesSelector(j, i),
                            n.guid || (n.guid = A.guid++),
                            (u = m.events) || (u = m.events = Object.create(null)),
                            (a = m.handle) || (a = m.handle = function(t) {
                                return A.event.triggered !== t.type ? A.event.dispatch.apply(e, arguments) : void 0
                            }
                            ),
                            c = (t = (t || "").match(J) || [""]).length; c--; )
                                d = g = (s = Ct.exec(t[c]) || [])[1],
                                h = (s[2] || "").split(".").sort(),
                                d && (f = A.event.special[d] || {},
                                d = (i ? f.delegateType : f.bindType) || d,
                                f = A.event.special[d] || {},
                                l = A.extend({
                                    type: d,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && A.expr.match.needsContext.test(i),
                                    namespace: h.join(".")
                                }, o),
                                (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                                (!f.setup || !1 === f.setup.call(e, r, h, a)) && e.addEventListener && e.addEventListener(d, a)),
                                f.add && (f.add.call(e, l),
                                l.handler.guid || (l.handler.guid = n.guid)),
                                i ? p.splice(p.delegateCount++, 0, l) : p.push(l))
                    },
                    remove: function(e, t, n, r, i) {
                        var o, a, s, u, c, l, f, p, d, h, g, m = et.hasData(e) && et.get(e);
                        if (m && (u = m.events)) {
                            for (c = (t = (t || "").match(J) || [""]).length; c--; )
                                if (d = g = (s = Ct.exec(t[c]) || [])[1],
                                h = (s[2] || "").split(".").sort(),
                                d) {
                                    for (f = A.event.special[d] || {},
                                    p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                                    s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    a = o = p.length; o--; )
                                        l = p[o],
                                        (i || g === l.origType) && (!n || n.guid === l.guid) && (!s || s.test(l.namespace)) && (!r || r === l.selector || "**" === r && l.selector) && (p.splice(o, 1),
                                        l.selector && p.delegateCount--,
                                        f.remove && f.remove.call(e, l));
                                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || A.removeEvent(e, d, m.handle),
                                    delete u[d])
                                } else
                                    for (d in u)
                                        A.event.remove(e, d + t[c], n, r, !0);
                            A.isEmptyObject(u) && et.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, i, o, a, s = Array(arguments.length), u = A.event.fix(e), c = (et.get(this, "events") || Object.create(null))[u.type] || [], l = A.event.special[u.type] || {};
                        for (t = 1,
                        s[0] = u; t < arguments.length; t++)
                            s[t] = arguments[t];
                        if (u.delegateTarget = this,
                        !l.preDispatch || !1 !== l.preDispatch.call(this, u)) {
                            for (a = A.event.handlers.call(this, u, c),
                            t = 0; (i = a[t++]) && !u.isPropagationStopped(); )
                                for (u.currentTarget = i.elem,
                                n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                                    (!u.rnamespace || !1 === o.namespace || u.rnamespace.test(o.namespace)) && (u.handleObj = o,
                                    u.data = o.data,
                                    void 0 !== (r = ((A.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                                    u.stopPropagation()));
                            return l.postDispatch && l.postDispatch.call(this, u),
                            u.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, i, o, a, s = [], u = t.delegateCount, c = e.target;
                        if (u && !("click" === e.type && e.button >= 1))
                            for (; c !== this; c = c.parentNode || this)
                                if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                    for (n = 0,
                                    o = [],
                                    a = {}; n < u; n++)
                                        void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? A(i, this).index(c) > -1 : A.find(i, this, null, [c]).length),
                                        a[i] && o.push(r);
                                    o.length && s.push({
                                        elem: c,
                                        handlers: o
                                    })
                                }
                        return c = this,
                        u < t.length && s.push({
                            elem: c,
                            handlers: t.slice(u)
                        }),
                        s
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(A.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: "function" == typeof t ? function() {
                                if (this.originalEvent)
                                    return t(this.originalEvent)
                            }
                            : function() {
                                if (this.originalEvent)
                                    return this.originalEvent[e]
                            }
                            ,
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[A.expando] ? e : new A.Event(e)
                    },
                    special: A.extend(Object.create(null), {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return Lt.test(t.type) && t.click && T(t, "input") && Rt(t, "click", !0),
                                !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return Lt.test(t.type) && t.click && T(t, "input") && Rt(t, "click"),
                                !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return Lt.test(t.type) && t.click && T(t, "input") && et.get(t, "click") || T(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    })
                },
                A.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }
                ,
                A.Event = function(e, t) {
                    if (!(this instanceof A.Event))
                        return new A.Event(e,t);
                    e && e.type ? (this.originalEvent = e,
                    this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented ? Ot : Pt,
                    this.target = e.target,
                    this.currentTarget = e.currentTarget,
                    this.relatedTarget = e.relatedTarget) : this.type = e,
                    t && A.extend(this, t),
                    this.timeStamp = e && e.timeStamp || Date.now(),
                    this[A.expando] = !0
                }
                ,
                A.Event.prototype = {
                    constructor: A.Event,
                    isDefaultPrevented: Pt,
                    isPropagationStopped: Pt,
                    isImmediatePropagationStopped: Pt,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = Ot,
                        e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = Ot,
                        e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = Ot,
                        e && !this.isSimulated && e.stopImmediatePropagation(),
                        this.stopPropagation()
                    }
                },
                A.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, A.event.addProp),
                A.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    function n(e) {
                        var t = A.event.fix(e);
                        t.type = "focusin" === e.type ? "focus" : "blur",
                        t.isSimulated = !0,
                        t.target === t.currentTarget && et.get(this, "handle")(t)
                    }
                    A.event.special[e] = {
                        setup: function() {
                            if (Rt(this, e, !0),
                            !E)
                                return !1;
                            this.addEventListener(t, n)
                        },
                        trigger: function() {
                            return Rt(this, e),
                            !0
                        },
                        teardown: function() {
                            if (!E)
                                return !1;
                            this.removeEventListener(t, n)
                        },
                        _default: function(t) {
                            return et.get(t.target, e)
                        },
                        delegateType: t
                    }
                }
                )),
                A.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                    A.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = e.relatedTarget, i = e.handleObj;
                            return r && (r === this || A.contains(this, r)) || (e.type = i.origType,
                            n = i.handler.apply(this, arguments),
                            e.type = t),
                            n
                        }
                    }
                }
                )),
                A.fn.extend({
                    on: function(e, t, n, r) {
                        return jt(this, e, t, n, r)
                    },
                    one: function(e, t, n, r) {
                        return jt(this, e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj)
                            return r = e.handleObj,
                            A(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                            this;
                        if ("object" == typeof e) {
                            for (i in e)
                                this.off(i, t, e[i]);
                            return this
                        }
                        return (!1 === t || "function" == typeof t) && (n = t,
                        t = void 0),
                        !1 === n && (n = Pt),
                        this.each((function() {
                            A.event.remove(this, e, n, t)
                        }
                        ))
                    }
                });
                var It = /<script|<style|<link/i;
                function Mt(e, t) {
                    return T(e, "table") && T(11 !== t.nodeType ? t : t.firstChild, "tr") && A(e).children("tbody")[0] || e
                }
                function Dt(e, t) {
                    var n, r, i, o = et.get(e, "events");
                    if (1 === t.nodeType) {
                        if (o)
                            for (n in et.remove(t, "handle events"),
                            o)
                                for (r = 0,
                                i = o[n].length; r < i; r++)
                                    A.event.add(t, n, o[n][r]);
                        tt.hasData(e) && tt.set(t, A.extend({}, tt.get(e)))
                    }
                }
                function Bt(e, t, n) {
                    for (var r, i = t ? A.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                        n || 1 !== r.nodeType || A.cleanData(wt(r)),
                        r.parentNode && (n && vt(r) && Tt(wt(r, "script")),
                        r.parentNode.removeChild(r));
                    return e
                }
                A.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var r, i, o, a, s = e.cloneNode(!0), u = vt(e);
                        if (E && (1 === e.nodeType || 11 === e.nodeType) && !A.isXMLDoc(e))
                            for (r = 0,
                            a = wt(s),
                            i = (o = wt(e)).length; r < i; r++)
                                T(a[r], "textarea") && (a[r].defaultValue = o[r].defaultValue);
                        if (t)
                            if (n)
                                for (r = 0,
                                o = o || wt(e),
                                a = a || wt(s),
                                i = o.length; r < i; r++)
                                    Dt(o[r], a[r]);
                            else
                                Dt(e, s);
                        return (a = wt(s, "script")).length > 0 && Tt(a, !u && wt(e, "script")),
                        s
                    },
                    cleanData: function(e) {
                        for (var t, n, r, i = A.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (Ze(n)) {
                                if (t = n[et.expando]) {
                                    if (t.events)
                                        for (r in t.events)
                                            i[r] ? A.event.remove(n, r) : A.removeEvent(n, r, t.handle);
                                    n[et.expando] = void 0
                                }
                                n[tt.expando] && (n[tt.expando] = void 0)
                            }
                    }
                }),
                A.fn.extend({
                    detach: function(e) {
                        return Bt(this, e, !0)
                    },
                    remove: function(e) {
                        return Bt(this, e)
                    },
                    text: function(e) {
                        return Y(this, (function(e) {
                            return void 0 === e ? A.text(this) : this.empty().each((function() {
                                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                            }
                            ))
                        }
                        ), null, e, arguments.length)
                    },
                    append: function() {
                        return kt(this, arguments, (function(e) {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && Mt(this, e).appendChild(e)
                        }
                        ))
                    },
                    prepend: function() {
                        return kt(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Mt(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        }
                        ))
                    },
                    before: function() {
                        return kt(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        }
                        ))
                    },
                    after: function() {
                        return kt(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        }
                        ))
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++)
                            1 === e.nodeType && (A.cleanData(wt(e, !1)),
                            e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e,
                        t = null == t ? e : t,
                        this.map((function() {
                            return A.clone(this, e, t)
                        }
                        ))
                    },
                    html: function(e) {
                        return Y(this, (function(e) {
                            var t = this[0] || {}
                              , n = 0
                              , r = this.length;
                            if (void 0 === e && 1 === t.nodeType)
                                return t.innerHTML;
                            if ("string" == typeof e && !It.test(e) && !xt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = A.htmlPrefilter(e);
                                try {
                                    for (; n < r; n++)
                                        1 === (t = this[n] || {}).nodeType && (A.cleanData(wt(t, !1)),
                                        t.innerHTML = e);
                                    t = 0
                                } catch (e) {}
                            }
                            t && this.empty().append(e)
                        }
                        ), null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return kt(this, arguments, (function(t) {
                            var n = this.parentNode;
                            0 > A.inArray(this, e) && (A.cleanData(wt(this)),
                            n && n.replaceChild(t, this))
                        }
                        ), e)
                    }
                }),
                A.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                    A.fn[e] = function(e) {
                        for (var n, r = [], i = A(e), o = i.length - 1, s = 0; s <= o; s++)
                            n = s === o ? this : this.clone(!0),
                            A(i[s])[t](n),
                            a.apply(r, n);
                        return this.pushStack(r)
                    }
                }
                ));
                var qt = RegExp("^(" + ot + ")(?!px)[a-z%]+$", "i")
                  , Ft = /^--/;
                function Ht(t) {
                    var n = t.ownerDocument.defaultView;
                    return n || (n = e),
                    n.getComputedStyle(t)
                }
                function Wt(e, t, n) {
                    var r, i = Ft.test(t);
                    return (n = n || Ht(e)) && (r = n.getPropertyValue(t) || n[t],
                    i && r && (r = r.replace(k, "$1") || void 0),
                    "" !== r || vt(e) || (r = A.style(e, t))),
                    void 0 !== r ? r + "" : r
                }
                var Ut = ["Webkit", "Moz", "ms"]
                  , zt = v.createElement("div").style
                  , $t = {};
                function Kt(e) {
                    return $t[e] || (e in zt ? e : $t[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Ut.length; n--; )
                            if ((e = Ut[n] + t)in zt)
                                return e
                    }(e) || e)
                }
                (tn = v.createElement("div")).style && (d.reliableTrDimensions = function() {
                    var t, n, r;
                    if (null == en) {
                        if (t = v.createElement("table"),
                        n = v.createElement("tr"),
                        t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                        n.style.cssText = "box-sizing:content-box;border:1px solid",
                        n.style.height = "1px",
                        tn.style.height = "9px",
                        tn.style.display = "block",
                        j.appendChild(t).appendChild(n).appendChild(tn),
                        0 === t.offsetWidth)
                            return void j.removeChild(t);
                        en = parseInt((r = e.getComputedStyle(n)).height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight,
                        j.removeChild(t)
                    }
                    return en
                }
                );
                var Vt = /^(none|table(?!-c[ea]).+)/
                  , Gt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                  , Yt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function Jt(e, t, n) {
                    var r = at.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }
                function Xt(e, t, n, r, i, o) {
                    var a = "width" === t ? 1 : 0
                      , s = 0
                      , u = 0
                      , c = 0;
                    if (n === (r ? "border" : "content"))
                        return 0;
                    for (; a < 4; a += 2)
                        "margin" === n && (c += A.css(e, n + st[a], !0, i)),
                        r ? ("content" === n && (u -= A.css(e, "padding" + st[a], !0, i)),
                        "margin" !== n && (u -= A.css(e, "border" + st[a] + "Width", !0, i))) : (u += A.css(e, "padding" + st[a], !0, i),
                        "padding" !== n ? u += A.css(e, "border" + st[a] + "Width", !0, i) : s += A.css(e, "border" + st[a] + "Width", !0, i));
                    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
                    u + c
                }
                function Zt(e, t, n) {
                    var r = Ht(e)
                      , i = (E || n) && "border-box" === A.css(e, "boxSizing", !1, r)
                      , o = i
                      , a = Wt(e, t, r)
                      , s = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (qt.test(a)) {
                        if (!n)
                            return a;
                        a = "auto"
                    }
                    return ("auto" === a || E && i || !d.reliableTrDimensions() && T(e, "tr")) && e.getClientRects().length && (i = "border-box" === A.css(e, "boxSizing", !1, r),
                    (o = s in e) && (a = e[s])),
                    (a = parseFloat(a) || 0) + Xt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                }
                function Qt(e, t, n, r, i) {
                    return new Qt.prototype.init(e,t,n,r,i)
                }
                A.extend({
                    cssHooks: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i, o, a, s = ht(t), u = Ft.test(t), c = e.style;
                            if (u || (t = Kt(s)),
                            a = A.cssHooks[t] || A.cssHooks[s],
                            void 0 === n)
                                return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                            "string" == (o = typeof n) && (i = at.exec(n)) && i[1] && (n = pt(e, t, i),
                            o = "number"),
                            null != n && n == n && ("number" === o && (n += i && i[3] || (ft(s) ? "px" : "")),
                            E && "" === n && 0 === t.indexOf("background") && (c[t] = "inherit"),
                            a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))
                        }
                    },
                    css: function(e, t, n, r) {
                        var i, o, a, s = ht(t);
                        return Ft.test(t) || (t = Kt(s)),
                        (a = A.cssHooks[t] || A.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
                        void 0 === i && (i = Wt(e, t, r)),
                        "normal" === i && t in Yt && (i = Yt[t]),
                        "" === n || n ? (o = parseFloat(i),
                        !0 === n || isFinite(o) ? o || 0 : i) : i
                    }
                }),
                A.each(["height", "width"], (function(e, t) {
                    A.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n)
                                return !Vt.test(A.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Zt(e, t, r) : function(e, t, n) {
                                    var r, i, o = {};
                                    for (i in t)
                                        o[i] = e.style[i],
                                        e.style[i] = t[i];
                                    for (i in r = n.call(e),
                                    t)
                                        e.style[i] = o[i];
                                    return r
                                }(e, Gt, (function() {
                                    return Zt(e, t, r)
                                }
                                ))
                        },
                        set: function(e, n, r) {
                            var i, o = Ht(e), a = r && "border-box" === A.css(e, "boxSizing", !1, o), s = r ? Xt(e, t, r, a, o) : 0;
                            return s && (i = at.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                            n = A.css(e, t)),
                            Jt(0, n, s)
                        }
                    }
                }
                )),
                A.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    A.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                                i[e + st[r] + t] = o[r] || o[r - 2] || o[0];
                            return i
                        }
                    },
                    "margin" !== e && (A.cssHooks[e + t].set = Jt)
                }
                )),
                A.fn.extend({
                    css: function(e, t) {
                        return Y(this, (function(e, t, n) {
                            var r, i, o = {}, a = 0;
                            if (Array.isArray(t)) {
                                for (r = Ht(e),
                                i = t.length; a < i; a++)
                                    o[t[a]] = A.css(e, t[a], !1, r);
                                return o
                            }
                            return void 0 !== n ? A.style(e, t, n) : A.css(e, t)
                        }
                        ), e, t, arguments.length > 1)
                    }
                }),
                A.Tween = Qt,
                Qt.prototype = {
                    constructor: Qt,
                    init: function(e, t, n, r, i, o) {
                        this.elem = e,
                        this.prop = n,
                        this.easing = i || A.easing._default,
                        this.options = t,
                        this.start = this.now = this.cur(),
                        this.end = r,
                        this.unit = o || (ft(n) ? "px" : "")
                    },
                    cur: function() {
                        var e = Qt.propHooks[this.prop];
                        return e && e.get ? e.get(this) : Qt.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = Qt.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = A.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                        this.now = (this.end - this.start) * t + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : Qt.propHooks._default.set(this),
                        this
                    }
                },
                Qt.prototype.init.prototype = Qt.prototype,
                Qt.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = A.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            A.fx.step[e.prop] ? A.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !A.cssHooks[e.prop] && null == e.elem.style[Kt(e.prop)] ? e.elem[e.prop] = e.now : A.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                },
                A.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                },
                A.fx = Qt.prototype.init,
                A.fx.step = {};
                var en, tn, nn, rn, on = /^(?:toggle|show|hide)$/, an = /queueHooks$/;
                function sn() {
                    return e.setTimeout((function() {
                        nn = void 0
                    }
                    )),
                    nn = Date.now()
                }
                function un(e, t) {
                    var n, r = 0, i = {
                        height: e
                    };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t)
                        i["margin" + (n = st[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e),
                    i
                }
                function cn(e, t, n) {
                    for (var r, i = (ln.tweeners[t] || []).concat(ln.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                        if (r = i[o].call(n, t, e))
                            return r
                }
                function ln(e, t, n) {
                    var r, i, o = 0, a = ln.prefilters.length, s = A.Deferred().always((function() {
                        delete u.elem
                    }
                    )), u = function() {
                        if (i)
                            return !1;
                        for (var t = nn || sn(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++)
                            c.tweens[o].run(r);
                        return s.notifyWith(e, [c, r, n]),
                        r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]),
                        s.resolveWith(e, [c]),
                        !1)
                    }, c = s.promise({
                        elem: e,
                        props: A.extend({}, t),
                        opts: A.extend(!0, {
                            specialEasing: {},
                            easing: A.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: nn || sn(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = A.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(r),
                            r
                        },
                        stop: function(t) {
                            var n = 0
                              , r = t ? c.tweens.length : 0;
                            if (i)
                                return this;
                            for (i = !0; n < r; n++)
                                c.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [c, 1, 0]),
                            s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]),
                            this
                        }
                    }), l = c.props;
                    for (function(e, t) {
                        var n, r, i, o, a;
                        for (n in e)
                            if (i = t[r = ht(n)],
                            Array.isArray(o = e[n]) && (i = o[1],
                            o = e[n] = o[0]),
                            n !== r && (e[r] = o,
                            delete e[n]),
                            (a = A.cssHooks[r]) && "expand"in a)
                                for (n in o = a.expand(o),
                                delete e[r],
                                o)
                                    n in e || (e[n] = o[n],
                                    t[n] = i);
                            else
                                t[r] = i
                    }(l, c.opts.specialEasing); o < a; o++)
                        if (r = ln.prefilters[o].call(c, e, l, c.opts))
                            return "function" == typeof r.stop && (A._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                            r;
                    return A.map(l, cn, c),
                    "function" == typeof c.opts.start && c.opts.start.call(e, c),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                    A.fx.timer(A.extend(u, {
                        elem: e,
                        anim: c,
                        queue: c.opts.queue
                    })),
                    c
                }
                A.Animation = A.extend(ln, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return pt(n.elem, e, at.exec(t), n),
                            n
                        }
                        ]
                    },
                    tweener: function(e, t) {
                        "function" == typeof e ? (t = e,
                        e = ["*"]) : e = e.match(J);
                        for (var n, r = 0, i = e.length; r < i; r++)
                            n = e[r],
                            ln.tweeners[n] = ln.tweeners[n] || [],
                            ln.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var r, i, o, a, s, u, c, l, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ut(e), m = et.get(e, "fxshow");
                        for (r in n.queue || (null == (a = A._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                        s = a.empty.fire,
                        a.empty.fire = function() {
                            a.unqueued || s()
                        }
                        ),
                        a.unqueued++,
                        p.always((function() {
                            p.always((function() {
                                a.unqueued--,
                                A.queue(e, "fx").length || a.empty.fire()
                            }
                            ))
                        }
                        ))),
                        t)
                            if (i = t[r],
                            on.test(i)) {
                                if (delete t[r],
                                o = o || "toggle" === i,
                                i === (g ? "hide" : "show")) {
                                    if ("show" !== i || !m || void 0 === m[r])
                                        continue;
                                    g = !0
                                }
                                d[r] = m && m[r] || A.style(e, r)
                            }
                        if ((u = !A.isEmptyObject(t)) || !A.isEmptyObject(d))
                            for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                            null == (c = m && m.display) && (c = et.get(e, "display")),
                            "none" === (l = A.css(e, "display")) && (c ? l = c : (mt([e], !0),
                            c = e.style.display || c,
                            l = A.css(e, "display"),
                            mt([e]))),
                            ("inline" === l || "inline-block" === l && null != c) && "none" === A.css(e, "float") && (u || (p.done((function() {
                                h.display = c
                            }
                            )),
                            null != c || (c = "none" === (l = h.display) ? "" : l)),
                            h.display = "inline-block")),
                            n.overflow && (h.overflow = "hidden",
                            p.always((function() {
                                h.overflow = n.overflow[0],
                                h.overflowX = n.overflow[1],
                                h.overflowY = n.overflow[2]
                            }
                            ))),
                            u = !1,
                            d)
                                u || (m ? "hidden"in m && (g = m.hidden) : m = et.set(e, "fxshow", {
                                    display: c
                                }),
                                o && (m.hidden = !g),
                                g && mt([e], !0),
                                p.done((function() {
                                    for (r in g || mt([e]),
                                    et.remove(e, "fxshow"),
                                    d)
                                        A.style(e, r, d[r])
                                }
                                ))),
                                u = cn(g ? m[r] : 0, r, p),
                                r in m || (m[r] = u.start,
                                g && (u.end = u.start,
                                u.start = 0))
                    }
                    ],
                    prefilter: function(e, t) {
                        t ? ln.prefilters.unshift(e) : ln.prefilters.push(e)
                    }
                }),
                A.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? A.extend({}, e) : {
                        complete: n || t || "function" == typeof e && e,
                        duration: e,
                        easing: n && t || t && "function" != typeof t && t
                    };
                    return A.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in A.fx.speeds ? r.duration = A.fx.speeds[r.duration] : r.duration = A.fx.speeds._default),
                    (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
                    r.old = r.complete,
                    r.complete = function() {
                        "function" == typeof r.old && r.old.call(this),
                        r.queue && A.dequeue(this, r.queue)
                    }
                    ,
                    r
                }
                ,
                A.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(ut).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = A.isEmptyObject(e)
                          , o = A.speed(t, n, r)
                          , a = function() {
                            var t = ln(this, A.extend({}, e), o);
                            (i || et.get(this, "finish")) && t.stop(!0)
                        };
                        return a.finish = a,
                        i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop,
                            t(n)
                        };
                        return "string" != typeof e && (n = t,
                        t = e,
                        e = void 0),
                        t && this.queue(e || "fx", []),
                        this.each((function() {
                            var t = !0
                              , i = null != e && e + "queueHooks"
                              , o = A.timers
                              , a = et.get(this);
                            if (i)
                                a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a)
                                    a[i] && a[i].stop && an.test(i) && r(a[i]);
                            for (i = o.length; i--; )
                                o[i].elem === this && (null == e || o[i].queue === e) && (o[i].anim.stop(n),
                                t = !1,
                                o.splice(i, 1));
                            (t || !n) && A.dequeue(this, e)
                        }
                        ))
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"),
                        this.each((function() {
                            var t, n = et.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = A.timers, a = r ? r.length : 0;
                            for (n.finish = !0,
                            A.queue(this, e, []),
                            i && i.stop && i.stop.call(this, !0),
                            t = o.length; t--; )
                                o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                            for (t = 0; t < a; t++)
                                r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        }
                        ))
                    }
                }),
                A.each(["toggle", "show", "hide"], (function(e, t) {
                    var n = A.fn[t];
                    A.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(un(t, !0), e, r, i)
                    }
                }
                )),
                A.each({
                    slideDown: un("show"),
                    slideUp: un("hide"),
                    slideToggle: un("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    A.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }
                )),
                A.timers = [],
                A.fx.tick = function() {
                    var e, t = 0, n = A.timers;
                    for (nn = Date.now(); t < n.length; t++)
                        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || A.fx.stop(),
                    nn = void 0
                }
                ,
                A.fx.timer = function(e) {
                    A.timers.push(e),
                    A.fx.start()
                }
                ,
                A.fx.start = function() {
                    rn || (rn = !0,
                    function t() {
                        rn && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(t) : e.setTimeout(t, 13),
                        A.fx.tick())
                    }())
                }
                ,
                A.fx.stop = function() {
                    rn = null
                }
                ,
                A.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                A.fn.delay = function(t, n) {
                    return t = A.fx && A.fx.speeds[t] || t,
                    n = n || "fx",
                    this.queue(n, (function(n, r) {
                        var i = e.setTimeout(n, t);
                        r.stop = function() {
                            e.clearTimeout(i)
                        }
                    }
                    ))
                }
                ;
                var fn = /^(?:input|select|textarea|button)$/i
                  , pn = /^(?:a|area)$/i;
                function dn(e) {
                    return (e.match(J) || []).join(" ")
                }
                function hn(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }
                function gn(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(J) || []
                }
                A.fn.extend({
                    prop: function(e, t) {
                        return Y(this, A.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[A.propFix[e] || e]
                        }
                        ))
                    }
                }),
                A.extend({
                    prop: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return 1 === o && A.isXMLDoc(e) || (t = A.propFix[t] || t,
                            i = A.propHooks[t]),
                            void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = e.getAttribute("tabindex");
                                return t ? parseInt(t, 10) : fn.test(e.nodeName) || pn.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }),
                E && (A.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex,
                        null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex)
                    }
                }),
                A.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    A.propFix[this.toLowerCase()] = this
                }
                )),
                A.fn.extend({
                    addClass: function(e) {
                        var t, n, r, i, o, a;
                        return "function" == typeof e ? this.each((function(t) {
                            A(this).addClass(e.call(this, t, hn(this)))
                        }
                        )) : (t = gn(e)).length ? this.each((function() {
                            if (r = hn(this),
                            n = 1 === this.nodeType && " " + dn(r) + " ") {
                                for (o = 0; o < t.length; o++)
                                    i = t[o],
                                    0 > n.indexOf(" " + i + " ") && (n += i + " ");
                                r !== (a = dn(n)) && this.setAttribute("class", a)
                            }
                        }
                        )) : this
                    },
                    removeClass: function(e) {
                        var t, n, r, i, o, a;
                        return "function" == typeof e ? this.each((function(t) {
                            A(this).removeClass(e.call(this, t, hn(this)))
                        }
                        )) : arguments.length ? (t = gn(e)).length ? this.each((function() {
                            if (r = hn(this),
                            n = 1 === this.nodeType && " " + dn(r) + " ") {
                                for (o = 0; o < t.length; o++)
                                    for (i = t[o]; n.indexOf(" " + i + " ") > -1; )
                                        n = n.replace(" " + i + " ", " ");
                                r !== (a = dn(n)) && this.setAttribute("class", a)
                            }
                        }
                        )) : this : this.attr("class", "")
                    },
                    toggleClass: function(e, t) {
                        var n, r, i, o;
                        return "function" == typeof e ? this.each((function(n) {
                            A(this).toggleClass(e.call(this, n, hn(this), t), t)
                        }
                        )) : "boolean" == typeof t ? t ? this.addClass(e) : this.removeClass(e) : (n = gn(e)).length ? this.each((function() {
                            for (i = 0,
                            o = A(this); i < n.length; i++)
                                r = n[i],
                                o.hasClass(r) ? o.removeClass(r) : o.addClass(r)
                        }
                        )) : this
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++]; )
                            if (1 === n.nodeType && (" " + dn(hn(n)) + " ").indexOf(t) > -1)
                                return !0;
                        return !1
                    }
                }),
                A.fn.extend({
                    val: function(e) {
                        var t, n, r, i = this[0];
                        return arguments.length ? (r = "function" == typeof e,
                        this.each((function(n) {
                            var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, A(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = A.map(i, (function(e) {
                                return null == e ? "" : e + ""
                            }
                            ))),
                            (t = A.valHooks[this.type] || A.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        }
                        ))) : i ? (t = A.valHooks[i.type] || A.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : null == (n = i.value) ? "" : n : void 0
                    }
                }),
                A.extend({
                    valHooks: {
                        select: {
                            get: function(e) {
                                var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                    if ((n = i[r]).selected && !n.disabled && (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))) {
                                        if (t = A(n).val(),
                                        a)
                                            return t;
                                        s.push(t)
                                    }
                                return s
                            },
                            set: function(e, t) {
                                for (var n, r, i = e.options, o = A.makeArray(t), a = i.length; a--; )
                                    ((r = i[a]).selected = A.inArray(A(r).val(), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1),
                                o
                            }
                        }
                    }
                }),
                E && (A.valHooks.option = {
                    get: function(e) {
                        var t = e.getAttribute("value");
                        return null != t ? t : dn(A.text(e))
                    }
                }),
                A.each(["radio", "checkbox"], (function() {
                    A.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t))
                                return e.checked = A.inArray(A(e).val(), t) > -1
                        }
                    }
                }
                ));
                var mn = /^(?:focusinfocus|focusoutblur)$/
                  , vn = function(e) {
                    e.stopPropagation()
                };
                A.extend(A.event, {
                    trigger: function(t, n, r, i) {
                        var o, a, s, u, c, f, p, d, h = [r || v], m = l.call(t, "type") ? t.type : t, y = l.call(t, "namespace") ? t.namespace.split(".") : [];
                        if (a = d = s = r = r || v,
                        3 !== r.nodeType && 8 !== r.nodeType && !mn.test(m + A.event.triggered) && (m.indexOf(".") > -1 && (m = (y = m.split(".")).shift(),
                        y.sort()),
                        c = 0 > m.indexOf(":") && "on" + m,
                        (t = t[A.expando] ? t : new A.Event(m,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
                        t.namespace = y.join("."),
                        t.rnamespace = t.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        t.result = void 0,
                        t.target || (t.target = r),
                        n = null == n ? [t] : A.makeArray(n, [t]),
                        p = A.event.special[m] || {},
                        i || !p.trigger || !1 !== p.trigger.apply(r, n))) {
                            if (!i && !p.noBubble && !g(r)) {
                                for (u = p.delegateType || m,
                                mn.test(u + m) || (a = a.parentNode); a; a = a.parentNode)
                                    h.push(a),
                                    s = a;
                                s === (r.ownerDocument || v) && h.push(s.defaultView || s.parentWindow || e)
                            }
                            for (o = 0; (a = h[o++]) && !t.isPropagationStopped(); )
                                d = a,
                                t.type = o > 1 ? u : p.bindType || m,
                                (f = (et.get(a, "events") || Object.create(null))[t.type] && et.get(a, "handle")) && f.apply(a, n),
                                (f = c && a[c]) && f.apply && Ze(a) && (t.result = f.apply(a, n),
                                !1 === t.result && t.preventDefault());
                            return t.type = m,
                            !i && !t.isDefaultPrevented() && (!p._default || !1 === p._default.apply(h.pop(), n)) && Ze(r) && c && "function" == typeof r[m] && !g(r) && ((s = r[c]) && (r[c] = null),
                            A.event.triggered = m,
                            t.isPropagationStopped() && d.addEventListener(m, vn),
                            r[m](),
                            t.isPropagationStopped() && d.removeEventListener(m, vn),
                            A.event.triggered = void 0,
                            s && (r[c] = s)),
                            t.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = A.extend(new A.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        A.event.trigger(r, null, t)
                    }
                }),
                A.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                            A.event.trigger(e, t, this)
                        }
                        ))
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n)
                            return A.event.trigger(e, t, n, !0)
                    }
                });
                var yn = e.location
                  , bn = {
                    guid: Date.now()
                }
                  , xn = /\?/;
                A.parseXML = function(t) {
                    var n, r;
                    if (!t || "string" != typeof t)
                        return null;
                    try {
                        n = (new e.DOMParser).parseFromString(t, "text/xml")
                    } catch (e) {}
                    return r = n && n.getElementsByTagName("parsererror")[0],
                    (!n || r) && A.error("Invalid XML: " + (r ? A.map(r.childNodes, (function(e) {
                        return e.textContent
                    }
                    )).join("\n") : t)),
                    n
                }
                ;
                var wn = /\[\]$/
                  , An = /\r?\n/g
                  , Tn = /^(?:submit|button|image|reset|file)$/i
                  , _n = /^(?:input|select|textarea|keygen)/i;
                A.param = function(e, t) {
                    var n, r = [], i = function(e, t) {
                        var n = "function" == typeof t ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                    if (null == e)
                        return "";
                    if (Array.isArray(e) || e.jquery && !A.isPlainObject(e))
                        A.each(e, (function() {
                            i(this.name, this.value)
                        }
                        ));
                    else
                        for (n in e)
                            !function e(t, n, r, i) {
                                var o;
                                if (Array.isArray(n))
                                    A.each(n, (function(n, o) {
                                        r || wn.test(t) ? i(t, o) : e(t + "[" + ("object" == typeof o && null != o ? n : "") + "]", o, r, i)
                                    }
                                    ));
                                else if (r || "object" !== h(n))
                                    i(t, n);
                                else
                                    for (o in n)
                                        e(t + "[" + o + "]", n[o], r, i)
                            }(n, e[n], t, i);
                    return r.join("&")
                }
                ,
                A.fn.extend({
                    serialize: function() {
                        return A.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = A.prop(this, "elements");
                            return e ? A.makeArray(e) : this
                        }
                        )).filter((function() {
                            var e = this.type;
                            return this.name && !A(this).is(":disabled") && _n.test(this.nodeName) && !Tn.test(e) && (this.checked || !Lt.test(e))
                        }
                        )).map((function(e, t) {
                            var n = A(this).val();
                            return null == n ? null : Array.isArray(n) ? A.map(n, (function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(An, "\r\n")
                                }
                            }
                            )) : {
                                name: t.name,
                                value: n.replace(An, "\r\n")
                            }
                        }
                        )).get()
                    }
                });
                var Sn = /%20/g
                  , En = /#.*$/
                  , Nn = /([?&])_=[^&]*/
                  , kn = /^(.*?):[ \t]*([^\r\n]*)$/gm
                  , Ln = /^(?:GET|HEAD)$/
                  , Cn = /^\/\//
                  , On = {}
                  , Pn = {}
                  , jn = "*/".concat("*")
                  , Rn = v.createElement("a");
                function In(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t,
                        t = "*");
                        var r, i = 0, o = t.toLowerCase().match(J) || [];
                        if ("function" == typeof n)
                            for (; r = o[i++]; )
                                "+" === r[0] ? (e[r = r.slice(1) || "*"] = e[r] || []).unshift(n) : (e[r] = e[r] || []).push(n)
                    }
                }
                function Mn(e, t, n, r) {
                    var i = {}
                      , o = e === Pn;
                    function a(s) {
                        var u;
                        return i[s] = !0,
                        A.each(e[s] || [], (function(e, s) {
                            var c = s(t, n, r);
                            return "string" != typeof c || o || i[c] ? o ? !(u = c) : void 0 : (t.dataTypes.unshift(c),
                            a(c),
                            !1)
                        }
                        )),
                        u
                    }
                    return a(t.dataTypes[0]) || !i["*"] && a("*")
                }
                function Dn(e, t) {
                    var n, r, i = A.ajaxSettings.flatOptions || {};
                    for (n in t)
                        void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && A.extend(!0, e, r),
                    e
                }
                Rn.href = yn.href,
                A.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: yn.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yn.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": jn,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": A.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? Dn(Dn(e, A.ajaxSettings), t) : Dn(A.ajaxSettings, e)
                    },
                    ajaxPrefilter: In(On),
                    ajaxTransport: In(Pn),
                    ajax: function(t, n) {
                        "object" == typeof t && (n = t,
                        t = void 0),
                        n = n || {};
                        var r, i, o, a, s, u, c, l, f, p, d = A.ajaxSetup({}, n), h = d.context || d, g = d.context && (h.nodeType || h.jquery) ? A(h) : A.event, m = A.Deferred(), y = A.Callbacks("once memory"), b = d.statusCode || {}, x = {}, w = {}, T = "canceled", _ = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (c) {
                                    if (!a)
                                        for (a = {}; t = kn.exec(o); )
                                            a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = a[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return c ? o : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == c && (x[e = w[e.toLowerCase()] = w[e.toLowerCase()] || e] = t),
                                this
                            },
                            overrideMimeType: function(e) {
                                return null == c && (d.mimeType = e),
                                this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (c)
                                        _.always(e[_.status]);
                                    else
                                        for (t in e)
                                            b[t] = [b[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || T;
                                return r && r.abort(t),
                                S(0, t),
                                this
                            }
                        };
                        if (m.promise(_),
                        d.url = ((t || d.url || yn.href) + "").replace(Cn, yn.protocol + "//"),
                        d.type = n.method || n.type || d.method || d.type,
                        d.dataTypes = (d.dataType || "*").toLowerCase().match(J) || [""],
                        null == d.crossDomain) {
                            u = v.createElement("a");
                            try {
                                u.href = d.url,
                                u.href = u.href,
                                d.crossDomain = Rn.protocol + "//" + Rn.host != u.protocol + "//" + u.host
                            } catch (e) {
                                d.crossDomain = !0
                            }
                        }
                        if (Mn(On, d, n, _),
                        d.data && d.processData && "string" != typeof d.data && (d.data = A.param(d.data, d.traditional)),
                        c)
                            return _;
                        for (f in (l = A.event && d.global) && 0 == A.active++ && A.event.trigger("ajaxStart"),
                        d.type = d.type.toUpperCase(),
                        d.hasContent = !Ln.test(d.type),
                        i = d.url.replace(En, ""),
                        d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Sn, "+")) : (p = d.url.slice(i.length),
                        d.data && (d.processData || "string" == typeof d.data) && (i += (xn.test(i) ? "&" : "?") + d.data,
                        delete d.data),
                        !1 === d.cache && (i = i.replace(Nn, "$1"),
                        p = (xn.test(i) ? "&" : "?") + "_=" + bn.guid++ + p),
                        d.url = i + p),
                        d.ifModified && (A.lastModified[i] && _.setRequestHeader("If-Modified-Since", A.lastModified[i]),
                        A.etag[i] && _.setRequestHeader("If-None-Match", A.etag[i])),
                        (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && _.setRequestHeader("Content-Type", d.contentType),
                        _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + jn + "; q=0.01" : "") : d.accepts["*"]),
                        d.headers)
                            _.setRequestHeader(f, d.headers[f]);
                        if (d.beforeSend && (!1 === d.beforeSend.call(h, _, d) || c))
                            return _.abort();
                        if (T = "abort",
                        y.add(d.complete),
                        _.done(d.success),
                        _.fail(d.error),
                        r = Mn(Pn, d, n, _)) {
                            if (_.readyState = 1,
                            l && g.trigger("ajaxSend", [_, d]),
                            c)
                                return _;
                            d.async && d.timeout > 0 && (s = e.setTimeout((function() {
                                _.abort("timeout")
                            }
                            ), d.timeout));
                            try {
                                c = !1,
                                r.send(x, S)
                            } catch (e) {
                                if (c)
                                    throw e;
                                S(-1, e)
                            }
                        } else
                            S(-1, "No Transport");
                        function S(t, n, a, u) {
                            var f, p, v, x, w, T = n;
                            !c && (c = !0,
                            s && e.clearTimeout(s),
                            r = void 0,
                            o = u || "",
                            _.readyState = t > 0 ? 4 : 0,
                            f = t >= 200 && t < 300 || 304 === t,
                            a && (x = function(e, t, n) {
                                for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                                    u.shift(),
                                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break
                                        }
                                if (u[0]in n)
                                    o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break
                                        }
                                        a || (a = i)
                                    }
                                    o = o || a
                                }
                                if (o)
                                    return o !== u[0] && u.unshift(o),
                                    n[o]
                            }(d, _, a)),
                            !f && A.inArray("script", d.dataTypes) > -1 && 0 > A.inArray("json", d.dataTypes) && (d.converters["text script"] = function() {}
                            ),
                            x = function(e, t, n, r) {
                                var i, o, a, s, u, c = {}, l = e.dataTypes.slice();
                                if (l[1])
                                    for (a in e.converters)
                                        c[a.toLowerCase()] = e.converters[a];
                                for (o = l.shift(); o; )
                                    if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                    u = o,
                                    o = l.shift())
                                        if ("*" === o)
                                            o = u;
                                        else if ("*" !== u && u !== o) {
                                            if (!(a = c[u + " " + o] || c["* " + o]))
                                                for (i in c)
                                                    if ((s = i.split(" "))[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                                        !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0],
                                                        l.unshift(s[1]));
                                                        break
                                                    }
                                            if (!0 !== a)
                                                if (a && e.throws)
                                                    t = a(t);
                                                else
                                                    try {
                                                        t = a(t)
                                                    } catch (e) {
                                                        return {
                                                            state: "parsererror",
                                                            error: a ? e : "No conversion from " + u + " to " + o
                                                        }
                                                    }
                                        }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(d, x, _, f),
                            f ? (d.ifModified && ((w = _.getResponseHeader("Last-Modified")) && (A.lastModified[i] = w),
                            (w = _.getResponseHeader("etag")) && (A.etag[i] = w)),
                            204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state,
                            p = x.data,
                            f = !(v = x.error))) : (v = T,
                            (t || !T) && (T = "error",
                            t < 0 && (t = 0))),
                            _.status = t,
                            _.statusText = (n || T) + "",
                            f ? m.resolveWith(h, [p, T, _]) : m.rejectWith(h, [_, T, v]),
                            _.statusCode(b),
                            b = void 0,
                            l && g.trigger(f ? "ajaxSuccess" : "ajaxError", [_, d, f ? p : v]),
                            y.fireWith(h, [_, T]),
                            !l || (g.trigger("ajaxComplete", [_, d]),
                            --A.active || A.event.trigger("ajaxStop")))
                        }
                        return _
                    },
                    getJSON: function(e, t, n) {
                        return A.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return A.get(e, void 0, t, "script")
                    }
                }),
                A.each(["get", "post"], (function(e, t) {
                    A[t] = function(e, n, r, i) {
                        return ("function" == typeof n || null === n) && (i = i || r,
                        r = n,
                        n = void 0),
                        A.ajax(A.extend({
                            url: e,
                            type: t,
                            dataType: i,
                            data: n,
                            success: r
                        }, A.isPlainObject(e) && e))
                    }
                }
                )),
                A.ajaxPrefilter((function(e) {
                    var t;
                    for (t in e.headers)
                        "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                }
                )),
                A._evalUrl = function(e, t, n) {
                    return A.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        scriptAttrs: t.crossOrigin ? {
                            crossOrigin: t.crossOrigin
                        } : void 0,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            A.globalEval(e, t, n)
                        }
                    })
                }
                ,
                A.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && ("function" == typeof e && (e = e.call(this[0])),
                        t = A(e, this[0].ownerDocument).eq(0).clone(!0),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t.map((function() {
                            for (var e = this; e.firstElementChild; )
                                e = e.firstElementChild;
                            return e
                        }
                        )).append(this)),
                        this
                    },
                    wrapInner: function(e) {
                        return "function" == typeof e ? this.each((function(t) {
                            A(this).wrapInner(e.call(this, t))
                        }
                        )) : this.each((function() {
                            var t = A(this)
                              , n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        }
                        ))
                    },
                    wrap: function(e) {
                        var t = "function" == typeof e;
                        return this.each((function(n) {
                            A(this).wrapAll(t ? e.call(this, n) : e)
                        }
                        ))
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            A(this).replaceWith(this.childNodes)
                        }
                        )),
                        this
                    }
                }),
                A.expr.pseudos.hidden = function(e) {
                    return !A.expr.pseudos.visible(e)
                }
                ,
                A.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }
                ,
                A.ajaxSettings.xhr = function() {
                    return new e.XMLHttpRequest
                }
                ;
                var Bn = {
                    0: 200
                };
                function qn(e) {
                    return e.scriptAttrs || !e.headers && (e.crossDomain || e.async && 0 > A.inArray("json", e.dataTypes))
                }
                A.ajaxTransport((function(e) {
                    var t;
                    return {
                        send: function(n, r) {
                            var i, o = e.xhr();
                            if (o.open(e.type, e.url, e.async, e.username, e.password),
                            e.xhrFields)
                                for (i in e.xhrFields)
                                    o[i] = e.xhrFields[i];
                            for (i in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                            e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"),
                            n)
                                o.setRequestHeader(i, n[i]);
                            t = function(e) {
                                return function() {
                                    t && (t = o.onload = o.onerror = o.onabort = o.ontimeout = null,
                                    "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Bn[o.status] || o.status, o.statusText, "text" === (o.responseType || "text") ? {
                                        text: o.responseText
                                    } : {
                                        binary: o.response
                                    }, o.getAllResponseHeaders()))
                                }
                            }
                            ,
                            o.onload = t(),
                            o.onabort = o.onerror = o.ontimeout = t("error"),
                            t = t("abort");
                            try {
                                o.send(e.hasContent && e.data || null)
                            } catch (e) {
                                if (t)
                                    throw e
                            }
                        },
                        abort: function() {
                            t && t()
                        }
                    }
                }
                )),
                A.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    converters: {
                        "text script": function(e) {
                            return A.globalEval(e),
                            e
                        }
                    }
                }),
                A.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1),
                    qn(e) && (e.type = "GET")
                }
                )),
                A.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (qn(e))
                        return {
                            send: function(r, i) {
                                t = A("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(e) {
                                    t.remove(),
                                    n = null,
                                    e && i("error" === e.type ? 404 : 200, e.type)
                                }
                                ),
                                v.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                }
                ));
                var Fn = []
                  , Hn = /(=)\?(?=&|$)|\?\?/;
                A.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Fn.pop() || A.expando + "_" + bn.guid++;
                        return this[e] = !0,
                        e
                    }
                }),
                A.ajaxPrefilter("jsonp", (function(t, n, r) {
                    var i, o, a, s = !1 !== t.jsonp && (Hn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Hn.test(t.data) && "data");
                    return i = t.jsonpCallback = "function" == typeof t.jsonpCallback ? t.jsonpCallback() : t.jsonpCallback,
                    s ? t[s] = t[s].replace(Hn, "$1" + i) : !1 !== t.jsonp && (t.url += (xn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    t.converters["script json"] = function() {
                        return a || A.error(i + " was not called"),
                        a[0]
                    }
                    ,
                    t.dataTypes[0] = "json",
                    o = e[i],
                    e[i] = function() {
                        a = arguments
                    }
                    ,
                    r.always((function() {
                        void 0 === o ? A(e).removeProp(i) : e[i] = o,
                        t[i] && (t.jsonpCallback = n.jsonpCallback,
                        Fn.push(i)),
                        a && "function" == typeof o && o(a[0]),
                        a = o = void 0
                    }
                    )),
                    "script"
                }
                )),
                A.ajaxPrefilter((function(t, n) {
                    "string" == typeof t.data || A.isPlainObject(t.data) || Array.isArray(t.data) || "processData"in n || (t.processData = !1),
                    t.data instanceof e.FormData && (t.contentType = !1)
                }
                )),
                A.parseHTML = function(e, t, n) {
                    var r, i, o;
                    return "string" == typeof e || Me(e + "") ? ("boolean" == typeof t && (n = t,
                    t = !1),
                    t || ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href,
                    t.head.appendChild(r)),
                    o = !n && [],
                    (i = Ie.exec(e)) ? [t.createElement(i[1])] : (i = St([e], t, o),
                    o && o.length && A(o).remove(),
                    A.merge([], i.childNodes))) : []
                }
                ,
                A.fn.load = function(e, t, n) {
                    var r, i, o, a = this, s = e.indexOf(" ");
                    return s > -1 && (r = dn(e.slice(s)),
                    e = e.slice(0, s)),
                    "function" == typeof t ? (n = t,
                    t = void 0) : t && "object" == typeof t && (i = "POST"),
                    a.length > 0 && A.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                        o = arguments,
                        a.html(r ? A("<div>").append(A.parseHTML(e)).find(r) : e)
                    }
                    )).always(n && function(e, t) {
                        a.each((function() {
                            n.apply(this, o || [e.responseText, t, e])
                        }
                        ))
                    }
                    ),
                    this
                }
                ,
                A.expr.pseudos.animated = function(e) {
                    return A.grep(A.timers, (function(t) {
                        return e === t.elem
                    }
                    )).length
                }
                ,
                A.offset = {
                    setOffset: function(e, t, n) {
                        var r, i, o, a, s, u, c = A.css(e, "position"), l = A(e), f = {};
                        "static" === c && (e.style.position = "relative"),
                        s = l.offset(),
                        o = A.css(e, "top"),
                        u = A.css(e, "left"),
                        ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (a = (r = l.position()).top,
                        i = r.left) : (a = parseFloat(o) || 0,
                        i = parseFloat(u) || 0),
                        "function" == typeof t && (t = t.call(e, n, A.extend({}, s))),
                        null != t.top && (f.top = t.top - s.top + a),
                        null != t.left && (f.left = t.left - s.left + i),
                        "using"in t ? t.using.call(e, f) : l.css(f)
                    }
                },
                A.fn.extend({
                    offset: function(e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each((function(t) {
                                A.offset.setOffset(this, e, t)
                            }
                            ));
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                        n = r.ownerDocument.defaultView,
                        {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0], i = {
                                top: 0,
                                left: 0
                            };
                            if ("fixed" === A.css(r, "position"))
                                t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(),
                                n = r.ownerDocument,
                                e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === A.css(e, "position"); )
                                    e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((i = A(e).offset()).top += A.css(e, "borderTopWidth", !0),
                                i.left += A.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - i.top - A.css(r, "marginTop", !0),
                                left: t.left - i.left - A.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === A.css(e, "position"); )
                                e = e.offsetParent;
                            return e || j
                        }
                        ))
                    }
                }),
                A.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    A.fn[e] = function(r) {
                        return Y(this, (function(e, r, i) {
                            var o;
                            if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                            void 0 === i)
                                return o ? o[t] : e[r];
                            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                        }
                        ), e, r, arguments.length)
                    }
                }
                )),
                A.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                    A.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, (function(n, r) {
                        A.fn[r] = function(i, o) {
                            var a = arguments.length && (n || "boolean" != typeof i)
                              , s = n || (!0 === i || !0 === o ? "margin" : "border");
                            return Y(this, (function(t, n, i) {
                                var o;
                                return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                                Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? A.css(t, n, s) : A.style(t, n, i, s)
                            }
                            ), t, a ? i : void 0, a)
                        }
                    }
                    ))
                }
                )),
                A.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                    A.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }
                )),
                A.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 == arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    hover: function(e, t) {
                        return this.on("mouseenter", e).on("mouseleave", t || e)
                    }
                }),
                A.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                    A.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }
                )),
                A.proxy = function(e, t) {
                    var n, r, o;
                    if ("string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    "function" == typeof e)
                        return r = i.call(arguments, 2),
                        (o = function() {
                            return e.apply(t || this, r.concat(i.call(arguments)))
                        }
                        ).guid = e.guid = e.guid || A.guid++,
                        o
                }
                ,
                A.holdReady = function(e) {
                    e ? A.readyWait++ : A.ready(!0)
                }
                ,
                "function" == typeof define && define.amd && define("jquery", [], (function() {
                    return A
                }
                ));
                var Wn = e.jQuery
                  , Un = e.$;
                return A.noConflict = function(t) {
                    return e.$ === A && (e.$ = Un),
                    t && e.jQuery === A && (e.jQuery = Wn),
                    A
                }
                ,
                void 0 === t && (e.jQuery = e.$ = A),
                A
            }(window, !0)
        }
        ,
        6125: e => {
            "use strict";
            e.exports = {
                rE: "5.0.3"
            }
        }
    }
      , t = {};
    function n(r) {
        var i = t[r];
        if (void 0 !== i)
            return i.exports;
        var o = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.loaded = !0,
        o.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e, t) => {
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    n.nmd = e => (e.paths = [],
    e.children || (e.children = []),
    e),
    ( () => {
        "use strict";
        var e, t, r, i, o, a, s, u = n(5652), c = n(9244), l = n(3), f = n.n(l), p = n(8619), d = n(6815), h = n.n(d), g = n(8941), m = n(9632), v = n(7333), y = n(5093), b = n(1902), x = n(8669), w = n(1141), A = n(1454), T = n(6669), _ = !1;
        function S(t) {
            !function(t) {
                if (!e)
                    return;
                e.lang = t
            }(t.speechRecognitionLanguage)
        }
        function E() {
            _ && e?.stop()
        }
        var N = 0
          , k = 0
          , L = null
          , C = !1
          , O = 0
          , P = {
            always: !0
        }
          , j = {}
          , R = {}
          , I = ["ClickLeft", "ClickMiddle", "ClickRight"]
          , M = "destructmyextension_MouseTooltipTranslator";
        const D = new AbortController
          , {signal: B} = D;
        var q = ""
          , F = ""
          , H = {}
          , W = null
          , U = ""
          , z = !1
          , $ = !1
          , K = ""
          , V = 3e3
          , G = 400
          , Y = "";
        function J(e, n=!0) {
            if (H = n ? e?.mouseoverText : H,
            t.translateWhen.includes("mouseover") && H && !Z()) {
                var {mouseoverText: r, mouseoverRange: i} = H;
                Q(r, "mouseover", i)
            }
        }
        function X(e, n=!0) {
            t.translateWhen.includes("select") && !Z(!0) && (F = q,
            Q(q = n ? e?.selectedText : q, "select"))
        }
        function Z(e=!1) {
            return Y || z || !e && q
        }
        async function Q(e, n, i) {
            var o = P[t.TTSWhen] || "select" == t.TTSWhen && "select" == n
              , a = j[t.TTSWhen]
              , s = P[t.showTooltipWhen]
              , c = Number(Date.now());
            if (C && "visible" == document.visibilityState && !function() {
                try {
                    return (0,
                    u.A)(r?.popper)?.get(0)?.contains(L)
                } catch (e) {
                    return !1
                }
            }() && W != e && x.Ju() && (q != F || e || "select" != n)) {
                if (!e)
                    return W = e,
                    void ne();
                if (s || o) {
                    s || ne(),
                    W = e;
                    var l = await x.yC(e, t.translateSource, t.translateTarget, t.translateReverseTarget)
                      , {targetText: f, sourceLang: d, targetLang: h} = l;
                    W == e && (f && d != h && !t.langExcludeList.includes(d) ? (s && function(e, n, r, i) {
                        var {targetText: o, sourceLang: a, targetLang: s, transliteration: c, dict: l, imageUrl: f} = n
                          , p = "true" == t.tooltipInfoSourceText
                          , d = "true" == t.tooltipInfoSourceLanguage
                          , h = "true" == t.tooltipInfoTransliteration ? c : ""
                          , g = d ? v.q6[a] : ""
                          , m = p ? e : ""
                          , y = "true" == t.tooltipWordDictionary ? function(e, t) {
                            if (!e)
                                return "";
                            var n = oe(e, t);
                            return e.split("\n").map((e => e.split(":")[0])).map((e => n = n.replace(e, (0,
                            u.A)("<b/>", {
                                text: e
                            }).prop("outerHTML")))),
                            n
                        }(l, s) : ""
                          , b = function(e) {
                            if (!e)
                                return "";
                            return (0,
                            u.A)("<img/>", {
                                src: e,
                                class: "mtt-image"
                            }).prop("outerHTML")
                        }(f) || y || oe(o, s)
                          , w = ae(m, "i", a) + ae(h, "b") + ae(g, "sup");
                        te(b + w),
                        x.rv(e, a, o, s, l, r),
                        se(i)
                    }(e, l, n, i),
                    o && async function(e, t, n, r, i, o, a) {
                        x.Yy(!0),
                        await (0,
                        p.Ay)(50),
                        ee(e, t, n, r, i, o, a)
                    }(e, d, f, h, c, !1, a)) : ne())
                } else
                    ne()
            }
        }
        async function ee(e, t, n, r, i, o, a) {
            a ? await x.nI(n, r, e, t, i + 100, o) : await x.nI(e, t, n, r, i + 100, o)
        }
        function te(e) {
            U != e && ne(!0),
            U = e,
            re(),
            (0,
            u.A)("#mttContainer").get(0) || a.appendTo(document.body),
            (0,
            u.A)("#mttstyle").get(0) || i.appendTo("head"),
            r?.setContent(e),
            r?.show()
        }
        function ne(e=!1) {
            r?.hide(),
            ie(),
            re(),
            K = setTimeout(( () => {
                (0,
                u.A)("#mttContainer").remove()
            }
            ), V)
        }
        function re() {
            clearTimeout(K)
        }
        function ie(e) {
            e && z || (0,
            u.A)(".mtt-highlight")?.remove()
        }
        function oe(e, t) {
            return e ? (0,
            u.A)("<span/>", {
                dir: (0,
                v.sO)(t),
                text: e
            }).prop("outerHTML") : ""
        }
        function ae(e, t, n=null) {
            return e ? (0,
            u.A)(`<${t}/>`, {
                dir: (0,
                v.sO)(n),
                text: "\n" + e
            }).prop("outerHTML") : ""
        }
        function se(e, n=!1) {
            if (n || e && "false" != t.mouseoverHighlightText) {
                ie();
                var r = e.getClientRects();
                r = x.dK(r);
                var i = window.scrollX
                  , o = window.scrollY;
                if (x.UU()) {
                    var a = x.Ps()?.getBoundingClientRect();
                    i += a?.left,
                    o += a?.top
                }
                for (var s of r)
                    (0,
                    u.A)("<div/>", {
                        class: "mtt-highlight",
                        css: {
                            position: "absolute",
                            left: s.left + i,
                            top: s.top + o,
                            width: s.width,
                            height: s.height
                        }
                    }).appendTo("body")
            }
        }
        async function ue() {
            if (w.V() || x.gt()) {
                var e = await async function() {
                    if (ce() && (0,
                    y.u0)()?.length > 1)
                        return (0,
                        y.u0)();
                    document.execCommand("selectAll", !1, null);
                    var e = (0,
                    y.u0)();
                    return await async function() {
                        await (0,
                        p.Ay)(10);
                        var e = x.bq();
                        window.getSelection().removeAllRanges(),
                        e?.blur(),
                        await (0,
                        p.Ay)(10),
                        e?.focus(),
                        await (0,
                        p.Ay)(50),
                        document.execCommand("selectAll", !1, null),
                        await (0,
                        p.Ay)(50)
                    }(),
                    e
                }();
                if (e) {
                    var {targetText: n, isBroken: r} = await x.yC(e, "auto", t.writingLanguage, t.translateTarget);
                    r || async function(e) {
                        var t = w.V();
                        if (!e)
                            return;
                        x.gt() ? function(e) {
                            var t = document.getElementsByClassName("docs-texteventtarget-iframe")?.[0];
                            pe(t = t.contentDocument.querySelector("[contenteditable=true]"), e)
                        }(e) : (0,
                        u.A)(t).is("[spellcheck='true']") ? (await fe(e),
                        await le(e)) : (await le(e),
                        await fe(e))
                    }(n)
                }
            }
        }
        function ce() {
            return "Caret" != window.getSelection().type
        }
        async function le(e) {
            ce() && (document.execCommand("insertText", !1, e),
            await (0,
            p.Ay)(300))
        }
        async function fe(e) {
            ce() && (pe(x.bq(), e),
            await (0,
            p.Ay)(300))
        }
        function pe(e, t) {
            var n = new DataTransfer;
            n.setData("text/plain", t);
            var r = new ClipboardEvent("paste",{
                clipboardData: n,
                data: t,
                dataType: "text/plain",
                bubbles: !0,
                cancelable: !0
            });
            r.docs_plus_ = !0,
            e.dispatchEvent(r),
            n.clearData()
        }
        function de(e) {
            var n, r;
            (function(e, t) {
                0 == C && Math.abs(e - N) + Math.abs(t - k) > 3 && O < 3 ? O += 1 : 3 <= O && (C = !0);
                return C
            }
            )(e.clientX, e.clientY) ? (Se(e),
            n = e.clientX,
            r = e.clientY,
            a?.css("transform", `translate(${n}px,${r}px)`),
            A.c(e.clientX, e.clientY, t, P)) : Se(e)
        }
        function he(e) {
            C = !0
        }
        function ge(e) {
            if (/KeyA|KeyF/.test(e.code) && e.ctrlKey)
                C = !1,
                ne();
            else if ("Escape" == e.code)
                x.zK(),
                x.Yy(!0);
            else {
                if ("HangulMode" == e.key || "Process" == e.key)
                    return;
                "Alt" == e.key && e.preventDefault()
            }
            be(e.code)
        }
        function me(e) {
            Te(e.code)
        }
        function ve(e) {
            be(I[e.button])
        }
        function ye(e) {
            Te(I[e.button])
        }
        function be(n) {
            var r = !1;
            if (!n || P[n] || x.aQ(n) || (P[n] = !0,
            r = !0),
            P[n]) {
                Date.now() - R[n] < 1e3 ? j[n] = !0 : j[n] = !1,
                R[n] = Date.now()
            } else
                P[n] = {
                    lastPressed: Date.now()
                };
            r && (async function() {
                await (0,
                p.Ay)(10);
                var e = (0,
                y.u0)();
                W = null,
                e ? X("", !1) : J("", !1)
            }(),
            P[t.keyDownTranslateWriting] && ue(),
            P[t.keySpeechRecognition] && !_ && e && e?.start(),
            P[t.keyDownAutoReader] && async function() {
                if (!P[t.keyDownAutoReader])
                    return;
                var e = j[t.keyDownAutoReader];
                x.wr(),
                x.Yy(),
                await we();
                var {mouseoverText: n, mouseoverRange: r} = await (0,
                b.Pc)(N, k);
                xe(r, e)
            }()),
            x.aQ(n) && (x.zK(Date.now() + 500),
            we())
        }
        async function xe(e, n) {
            if (!e || $)
                return ne(),
                $ = !1,
                void (z = !1);
            z = !0;
            var r = x.CJ(e)
              , i = await x.yC(r, t.translateSource, t.translateTarget, t.translateReverseTarget)
              , {targetText: o, sourceLang: a, targetLang: s} = i;
            !function(e) {
                var t = e.getBoundingClientRect();
                const n = x.VD() ? (0,
                u.A)("#viewerContainer") : (0,
                u.A)("body,html")
                  , r = x.VD() ? (0,
                u.A)("#viewerContainer").scrollTop() + t.top - (0,
                u.A)("#viewerContainer").height() / 2 : window.scrollY + t.top - window.innerHeight / 2;
                n.animate({
                    scrollTop: r
                }, G)
            }(e),
            setTimeout(( () => {
                se(e, !0)
            }
            ), G),
            te(o);
            var c = (0,
            b.u2)(e, t.mouseoverTextType);
            !async function(e) {
                if (!e)
                    return;
                await (0,
                p.Ay)(700);
                var n = x.CJ(e);
                x.yC(n, t.translateSource, t.translateTarget, t.translateReverseTarget)
            }(c),
            await ee(r, a, o, s, Date.now(), !0, n),
            xe(c, n)
        }
        async function we() {
            z && !$ && ($ = !0,
            x.zK(Date.now(), !0),
            await x.V5(( () => !z)),
            $ = !1)
        }
        function Ae(e) {
            x.UP() && "ClickLeft" == I[e.button] && e.preventDefault()
        }
        async function Te(e) {
            await (0,
            p.Ay)(20),
            P[e] = !1,
            e == t.keySpeechRecognition && E()
        }
        function _e() {
            P = {
                always: !0
            },
            C = !1,
            O = 0,
            q = "",
            W = null,
            ne(),
            A.H(),
            Y = "",
            E()
        }
        function Se(e) {
            N = e.clientX,
            k = e.clientY,
            L = e.target
        }
        function Ee() {
            var e = "follow" == t.tooltipPosition;
            r.setProps({
                offset: [0, t.tooltipDistance],
                sticky: e ? "reference" : "popper",
                appendTo: e ? s : document.body,
                animation: t.tooltipAnimation
            });
            var n = (0,
            v.sO)(t.translateTarget);
            i.html(`\n    #mttContainer {\n      left: 0 !important;\n      top: 0 !important;\n      width: 1000px !important;\n      margin: 0px !important;\n      margin-left: -500px !important;\n      position: fixed !important;\n      z-index: 2147483647 !important; /* Maximum z-index to overcome overlays */\n      background: none !important;\n      pointer-events: none !important;\n      display: inline-block !important;\n      visibility: visible  !important;\n      white-space: pre-line;\n    }\n    .tippy-box[data-theme~="custom"], .tippy-box[data-theme~="ocr"], .tippy-content *{\n      font-size: ${t.tooltipFontSize}px  !important;\n      text-align: ${t.tooltipTextAlign} !important;\n      overflow-wrap: break-word !important;\n      color: ${t.tooltipFontColor} !important;\n      font-family: \n        -apple-system, BlinkMacSystemFont,\n        "Segoe UI", "Roboto", "Oxygen",\n        "Ubuntu", "Cantarell", "Fira Sans",\n        "Droid Sans", "Helvetica Neue", sans-serif  !important;\n      white-space: pre-line;\n    }\n    .tippy-box[data-theme~="custom"]{\n      max-width: ${t.tooltipWidth}px  !important;\n      backdrop-filter: blur(${t.tooltipBackgroundBlur}px) !important;\n      background-color: ${t.tooltipBackgroundColor} !important;\n      border: 1px solid ${t.tooltipBorderColor}; \n      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n      opacity: 1.0; /* Adjusted opacity for transparency */\n    }\n    .tippy-box[data-theme~="ocr"]{\n      max-width: $1000px  !important;\n      backdrop-filter: blur(${t.tooltipBackgroundBlur}px) !important;\n      background-color: ${t.tooltipBackgroundColor} !important;\n      border: 1px solid ${t.tooltipBorderColor}; \n      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n      opacity: 1.0; /* Adjusted opacity for transparency */\n    }\n    .tippy-box[data-theme~="transparent"] {\n      max-width: $1000px  !important;\n      backdrop-filter: blur(${t.tooltipBackgroundBlur}px) !important;\n      background-color: ${t.tooltipBackgroundColor} !important;\n      border: 1px solid ${t.tooltipBorderColor}; \n      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n      opacity: 0.0; /* Adjusted opacity for transparency */\n      transition: opacity 0.3s ease-in-out; /* Added transition for opacity */\n    }\n    [data-tippy-root] {\n      display: inline-block !important;\n      visibility: visible  !important;\n    }\n    .tippy-box[data-theme~='custom'][data-placement^='top'] > .tippy-arrow::before, .tippy-box[data-theme~='ocr'][data-placement^='top'] > .tippy-arrow::before { \n      border-top-color: ${t.tooltipBackgroundColor} !important;\n    }\n    .tippy-box[data-theme~='custom'][data-placement^='bottom'] > .tippy-arrow::before, .tippy-box[data-theme~='ocr'][data-placement^='bottom'] > .tippy-arrow::before {\n      border-bottom-color: ${t.tooltipBackgroundColor} !important;\n    }\n    .tippy-box[data-theme~='custom'][data-placement^='left'] > .tippy-arrow::before, .tippy-box[data-theme~='ocr'][data-placement^='left'] > .tippy-arrow::before {\n      border-left-color: ${t.tooltipBackgroundColor} !important;\n    }\n    .tippy-box[data-theme~='custom'][data-placement^='right'] > .tippy-arrow::before, .tippy-box[data-theme~='ocr'][data-placement^='right'] > .tippy-arrow::before {\n      border-right-color: ${t.tooltipBackgroundColor} !important;\n    }\n\n    .mtt-highlight{\n      background-color: ${t.mouseoverTextHighlightColor}  !important;\n      position: absolute !important;   \n      z-index: 2147483646 !important; /* Slightly lower than tooltip */\n      pointer-events: none !important;\n      display: inline !important;\n      border-radius: 3px !important;\n    }\n    .mtt-image{\n      width: ${Number(t.tooltipWidth) - 20}px  !important;\n      border-radius: 3px !important;\n    }\n    .ocr_text_div{\n      position: absolute;\n      opacity: 0.4;\n      color: transparent !important;\n      border: 2px solid CornflowerBlue;\n      background: none !important;\n      border-radius: 3px !important;\n    }`),
            o.html(`\n    #ytp-caption-window-container .ytp-caption-segment {\n      cursor: text !important;\n      user-select: text !important;\n      font-family: \n      -apple-system, BlinkMacSystemFont,\n      "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans",\n      "Droid Sans", "Helvetica Neue", sans-serif  !important;\n    }\n    .caption-visual-line{\n      display: flex  !important;\n      align-items: stretch  !important;\n      direction: ${n}\n    }\n    .captions-text .caption-visual-line:first-of-type:after {\n      content: '⣿⣿';\n      border-radius: 3px !important;\n      color: white !important;\n      background: transparent !important;\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n      display: inline-block;\n      vertical-align: top;\n      opacity:0;\n      transition: opacity 0.7s ease-in-out;\n    }\n    .ytp-caption-segment{\n      color: white !important;\n      text-shadow: 1px 1px 2px black !important;\n      backdrop-filter: blur(3px) !important;\n      background: rgba(8, 8, 8, 0.1)  !important;\n    }\n    .captions-text:hover .caption-visual-line:first-of-type:after {\n      opacity:1;\n    }\n    .ytp-pause-overlay {\n      display: none !important;\n    }\n    .ytp-expand-pause-overlay .caption-window {\n      display: block !important;\n    }\n  `).prop("disabled", "null" == t.detectSubtitle)
        }
        async function Ne() {
            var e = window.location.href;
            ke(e = await x.bB(e))
        }
        function ke(e) {
            (0,
            u.A)("embed").remove(),
            (0,
            u.A)("<embed/>", {
                id: "mttPdfIframe",
                src: x.OW(e),
                css: {
                    display: "block",
                    border: "none",
                    height: "100vh",
                    width: "100vw",
                    overflow: "hidden"
                }
            }).appendTo("body")
        }
        function Le() {
            for (var e in T.A)
                T.A[e].handleVideo(t)
        }
        function Ce() {
            _e(),
            (0,
            u.A)("#mttstyle").remove(),
            (0,
            u.A)("#mttstyleSubtitle").remove(),
            r?.destroy(),
            D.abort()
        }
        function Oe(e, t, n=!0) {
            return window.addEventListener(e, t, {
                capture: n,
                signal: B
            })
        }
        !async function() {
            try {
                if (function() {
                    if (!x.gt())
                        return;
                    var e = document.createElement("script");
                    e.src = h().runtime.getURL("googleDocInject.js"),
                    document.documentElement.appendChild(e)
                }(),
                window.dispatchEvent(new CustomEvent(M)),
                Oe(M, Ce),
                await async function() {
                    t = await m.A.loadSetting((function() {
                        _e(),
                        Ee(),
                        Le(),
                        S(t)
                    }
                    ))
                }(),
                function() {
                    var e = x.bp()
                      , n = f()(e, t.websiteExcludeList)
                      , r = 0 != t.websiteWhiteList?.length && !f()(e, t.websiteWhiteList);
                    if (n || r)
                        return !0
                }())
                    return;
                await w.i(),
                async function() {
                    "true" == t.detectPDF && x.Pz() && (x.N8("pdfErrorLoadDocument", Ne),
                    ke(window.location.href))
                }(),
                Le(),
                function() {
                    if (!x.gt())
                        return;
                    !async function() {
                        await x.V5(( () => (0,
                        u.A)(".docs-texteventtarget-iframe")?.get(0)));
                        var e = (0,
                        u.A)(".docs-texteventtarget-iframe")?.get(0);
                        ["keydown", "keyup"].forEach((t => {
                            e?.contentWindow.addEventListener(t, (e => {
                                var n = new CustomEvent(t,{
                                    bubbles: !0,
                                    cancelable: !1
                                });
                                n.key = e?.key,
                                n.code = e?.code,
                                n.ctrlKey = e?.ctrlKey,
                                window.dispatchEvent(n),
                                document.dispatchEvent(n)
                            }
                            ))
                        }
                        ))
                    }()
                }(),
                async function() {
                    a = (0,
                    u.A)("<div/>", {
                        id: "mttContainer",
                        class: "notranslate"
                    }),
                    s = a.get(0),
                    i = (0,
                    u.A)("<style/>", {
                        id: "mttstyle"
                    }).appendTo("head"),
                    o = (0,
                    u.A)("<style/>", {
                        id: "mttstyleSubtitle"
                    }).appendTo("head"),
                    r = (0,
                    c.Ay)(s, {
                        content: "",
                        trigger: "manual",
                        allowHTML: !0,
                        theme: "custom",
                        zIndex: 100000200,
                        hideOnClick: !1,
                        role: "mtttooltip",
                        interactive: !0,
                        plugins: [c.qf]
                    })
                }(),
                Ee(),
                x.Nx("CopyRequest", (e => {
                    g.A.copyTextToClipboard(e.text)
                }
                )),
                x.Nx("killAutoReaderTabs", we),
                Oe("mousemove", de),
                Oe("touchstart", he),
                Oe("scroll", ( () => ie(!0))),
                Oe("keydown", ge),
                Oe("keyup", me),
                Oe("mousedown", ve),
                Oe("mouseup", ye),
                Oe("mouseup", Ae, !1),
                Oe("blur", _e),
                Oe("beforeunload", we),
                function(t, n) {
                    const r = window.SpeechRecognition || window.webkitSpeechRecognition;
                    r && ((e = new r).continuous = !0,
                    e.interimResults = !0,
                    e.onstart = function() {
                        _ = !0
                    }
                    ,
                    e.onerror = function(e) {}
                    ,
                    e.onend = function() {
                        _ = !1,
                        n()
                    }
                    ,
                    e.onresult = function(e) {
                        for (var n = !1, r = "", i = "", o = e.resultIndex; o < e.results.length; ++o)
                            e.results[o].isFinal ? (i = e.results[o][0].transcript,
                            n = !0) : r += e.results[o][0].transcript;
                        t(i || r, n)
                    }
                    )
                }(( (e, t) => {
                    t && Q(Y = e, "listen")
                }
                ), ( () => {
                    Y = ""
                }
                )),
                S(t),
                (0,
                b.cT)(window, t),
                Oe("mouseoverText", J),
                (0,
                y.Rh)(window, t.tooltipEventInterval),
                Oe("selectionEnd", X)
            } catch (e) {}
        }()
    }
    )()
}
)();
