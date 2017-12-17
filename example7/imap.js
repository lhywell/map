! function (t, e, i) {
    function n() {
        var e = t.L;
        o.noConflict = function () {
            return t.L = e, this
        }, t.L = o, t.LD = s, t.IMAP = s
    }
    var o = {
        version: '1.0.0-rc.1 ("a3da46b")'
    }, s = {
            version: "3.6.3"
        };
    "object" == typeof module && "object" == typeof module.exports ? module.exports = o : "function" == typeof define &&
        define.amd && define(o), "undefined" != typeof t && n(), o.Util = {
        extend: function (t) {
            var e, i, n, o;
            for (i = 1, n = arguments.length; i < n; i++) {
                o = arguments[i];
                for (e in o) t[e] = o[e]
            }
            return t
        },
        create: Object.create || function () {
            function t() {}
            return function (e) {
                return t.prototype = e, new t
            }
        }(),
        bind: function (t, e) {
            var i = Array.prototype.slice;
            if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
            var n = i.call(arguments, 2);
            return function () {
                return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
            }
        },
        stamp: function (t) {
            return t._leaflet_id = t._leaflet_id || ++o.Util.lastId, t._leaflet_id
        },
        lastId: 0,
        throttle: function (t, e, i) {
            var n, o, s, a;
            return a = function () {
                n = !1, o && (s.apply(i, o), o = !1)
            }, s = function () {
                n ? o = arguments : (t.apply(i, arguments), setTimeout(a, e), n = !0)
            }
        },
        wrapNum: function (t, e, i) {
            var n = e[1],
                o = e[0],
                s = n - o;
            return t === n && i ? t : ((t - o) % s + s) % s + o
        },
        falseFn: function () {
            return !1
        },
        formatNum: function (t, e) {
            var i = Math.pow(10, e || 5);
            return Math.round(t * i) / i
        },
        trim: function (t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        },
        splitWords: function (t) {
            return o.Util.trim(t).split(/\s+/)
        },
        setOptions: function (t, e) {
            t.hasOwnProperty("options") || (t.options = t.options ? o.Util.create(t.options) : {});
            for (var i in e) t.options[i] = e[i];
            return t.options
        },
        getParamString: function (t, e, i) {
            var n = [];
            for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
            return (e && e.indexOf("?") !== -1 ? "&" : "?") + n.join("&")
        },
        template: function (t, e) {
            return t.replace(o.Util.templateRe, function (t, n) {
                var o = e[n];
                if (o === i) throw new Error("No value provided for variable " + t);
                return "function" == typeof o && (o = o(e)), o
            })
        },
        templateRe: /\{ *([\w_\-]+) *\}/g,
        isArray: Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        indexOf: function (t, e) {
            for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
            return -1
        },
        emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
    },
    function () {
        function e(e) {
            return t["webkit" + e] || t["moz" + e] || t["ms" + e]
        }
        function i(e) {
            var i = +new Date,
                o = Math.max(0, 16 - (i - n));
            return n = i + o, t.setTimeout(e, o)
        }
        var n = 0,
            s = t.requestAnimationFrame || e("RequestAnimationFrame") || i,
            a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function (e) {
                t.clearTimeout(e)
            };
        o.Util.requestAnimFrame = function (e, n, a) {
            return a && s === i ? void e.call(n) : s.call(t, o.bind(e, n))
        }, o.Util.cancelAnimFrame = function (e) {
            e && a.call(t, e)
        }
    }(), o.extend = o.Util.extend, o.bind = o.Util.bind, o.stamp = o.Util.stamp, o.setOptions = o.Util.setOptions, o.Class = function () {},
        o.Class.extend = function (t) {
        var e = function () {
            this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
        }, i = e.__super__ = this.prototype,
            n = o.Util.create(i);
        n.constructor = e, e.prototype = n;
        for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
        return t.statics && (o.extend(e, t.statics), delete t.statics), t.includes && (o.Util.extend.apply(null, [n].concat(
            t.includes)), delete t.includes), n.options && (t.options = o.Util.extend(o.Util.create(n.options), t.options)),
            o.extend(n, t), n._initHooks = [], n.callInitHooks = function () {
            if (!this._initHooksCalled) {
                i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, e = n._initHooks.length; t < e; t++) n._initHooks[t].call(this)
            }
        }, e
    }, o.Class.include = function (t) {
        return o.extend(this.prototype, t), this
    }, o.Class.mergeOptions = function (t) {
        return o.extend(this.prototype.options, t), this
    }, o.Class.addInitHook = function (t) {
        var e = Array.prototype.slice.call(arguments, 1),
            i = "function" == typeof t ? t : function () {
                this[t].apply(this, e)
            };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this
    }, o.Evented = o.Class.extend({
        on: function (t, e, i) {
            if ("object" == typeof t) for (var n in t) this._on(n, t[n], e);
            else {
                t = o.Util.splitWords(t);
                for (var s = 0, a = t.length; s < a; s++) this._on(t[s], e, i)
            }
            return this
        },
        off: function (t, e, i) {
            if (t) if ("object" == typeof t) for (var n in t) this._off(n, t[n], e);
                else {
                    t = o.Util.splitWords(t);
                    for (var s = 0, a = t.length; s < a; s++) this._off(t[s], e, i)
                } else delete this._events;
            return this
        },
        _on: function (t, e, n) {
            this._events = this._events || {};
            var o = this._events[t];
            o || (o = [], this._events[t] = o), n === this && (n = i);
            for (var s = {
                fn: e,
                ctx: n
            }, a = o, r = 0, h = a.length; r < h; r++) if (a[r].fn === e && a[r].ctx === n) return;
            a.push(s), o.count++
        },
        _off: function (t, e, n) {
            var s, a, r;
            if (this._events && (s = this._events[t])) {
                if (!e) {
                    for (a = 0, r = s.length; a < r; a++) s[a].fn = o.Util.falseFn;
                    return void delete this._events[t]
                }
                if (n === this && (n = i), s) for (a = 0, r = s.length; a < r; a++) {
                        var h = s[a];
                        if (h.ctx === n && h.fn === e) return h.fn = o.Util.falseFn, this._firingCount && (this._events[
                                t] = s = s.slice()), void s.splice(a, 1)
                }
            }
        },
        fire: function (t, e, i) {
            if (!this.listens(t, i)) return this;
            var n = o.Util.extend({}, e, {
                type: t,
                target: this
            });
            if (this._events) {
                var s = this._events[t];
                if (s) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var a = 0, r = s.length; a < r; a++) {
                        var h = s[a];
                        h.fn.call(h.ctx || this, n)
                    }
                    this._firingCount--
                }
            }
            return i && this._propagateEvent(n), this
        },
        listens: function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) return !0;
            if (e) for (var n in this._eventParents) if (this._eventParents[n].listens(t, e)) return !0;
            return !1
        },
        once: function (t, e, i) {
            if ("object" == typeof t) {
                for (var n in t) this.once(n, t[n], e);
                return this
            }
            var s = o.bind(function () {
                this.off(t, e, i).off(t, s, i)
            }, this);
            return this.on(t, e, i).on(t, s, i)
        },
        addEventParent: function (t) {
            return this._eventParents = this._eventParents || {}, this._eventParents[o.stamp(t)] = t, this
        },
        removeEventParent: function (t) {
            return this._eventParents && delete this._eventParents[o.stamp(t)], this
        },
        _propagateEvent: function (t) {
            for (var e in this._eventParents) this._eventParents[e].fire(t.type, o.extend({
                    layer: t.target
                }, t), !0)
        }
    });
    var a = o.Evented.prototype;
    a.addEventListener = a.on, a.removeEventListener = a.clearAllEventListeners = a.off, a.addOneTimeEventListener = a.once,
        a.fireEvent = a.fire, a.hasEventListeners = a.listens, o.Mixin = {
        Events: a
    },
    function () {
        var i = navigator.userAgent.toLowerCase(),
            n = e.documentElement,
            s = "ActiveXObject" in t,
            a = i.indexOf("webkit") !== -1,
            r = i.indexOf("phantom") !== -1,
            h = i.search("android [23]") !== -1,
            l = i.indexOf("chrome") !== -1,
            d = i.indexOf("gecko") !== -1 && !a && !t.opera && !s,
            u = 0 === navigator.platform.indexOf("Win"),
            c = "undefined" != typeof orientation || i.indexOf("mobile") !== -1,
            p = !t.PointerEvent && t.MSPointerEvent,
            _ = t.PointerEvent || p,
            m = s && "transition" in n.style,
            f = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix && !h,
            g = "MozPerspective" in n.style,
            v = "OTransition" in n.style,
            y = !t.L_NO_TOUCH && (_ || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch);
        o.Browser = {
            ie: s,
            ielt9: s && !e.addEventListener,
            edge: "msLaunchUri" in navigator && !("documentMode" in e),
            webkit: a,
            gecko: d,
            android: i.indexOf("android") !== -1,
            android23: h,
            chrome: l,
            safari: !l && i.indexOf("safari") !== -1,
            win: u,
            ie3d: m,
            webkit3d: f,
            gecko3d: g,
            opera12: v,
            any3d: !t.L_DISABLE_3D && (m || f || g) && !v && !r,
            mobile: c,
            mobileWebkit: c && a,
            mobileWebkit3d: c && f,
            mobileOpera: c && t.opera,
            mobileGecko: c && d,
            touch: !! y,
            msPointer: !! p,
            pointer: !! _,
            retina: (t.devicePixelRatio || t.screen.deviceXDPI / t.screen.logicalXDPI) > 1
        }
    }(), o.Point = function (t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
    }, o.Point.prototype = {
        clone: function () {
            return new o.Point(this.x, this.y)
        },
        add: function (t) {
            return this.clone()._add(o.point(t))
        },
        _add: function (t) {
            return this.x += t.x, this.y += t.y, this
        },
        subtract: function (t) {
            return this.clone()._subtract(o.point(t))
        },
        _subtract: function (t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        divideBy: function (t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function (t) {
            return this.x /= t, this.y /= t, this
        },
        multiplyBy: function (t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function (t) {
            return this.x *= t, this.y *= t, this
        },
        scaleBy: function (t) {
            return new o.Point(this.x * t.x, this.y * t.y)
        },
        unscaleBy: function (t) {
            return new o.Point(this.x / t.x, this.y / t.y)
        },
        round: function () {
            return this.clone()._round()
        },
        _round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        floor: function () {
            return this.clone()._floor()
        },
        _floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function () {
            return this.clone()._ceil()
        },
        _ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        distanceTo: function (t) {
            t = o.point(t);
            var e = t.x - this.x,
                i = t.y - this.y;
            return Math.sqrt(e * e + i * i)
        },
        equals: function (t) {
            return t = o.point(t), t.x === this.x && t.y === this.y
        },
        contains: function (t) {
            return t = o.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function () {
            return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")"
        }
    }, o.point = function (t, e, n) {
        return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1]) : t === i || null === t ? t :
            "object" == typeof t && "x" in t && "y" in t ? new o.Point(t.x, t.y) : new o.Point(t, e, n)
    }, o.Bounds = function (t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
    }, o.Bounds.prototype = {
        extend: function (t) {
            return t = o.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(
                t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (
                this.min = t.clone(), this.max = t.clone()), this
        },
        getCenter: function (t) {
            return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function () {
            return new o.Point(this.min.x, this.max.y)
        },
        getTopRight: function () {
            return new o.Point(this.max.x, this.min.y)
        },
        getSize: function () {
            return this.max.subtract(this.min)
        },
        contains: function (t) {
            var e, i;
            return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t), t instanceof o.Bounds ?
                (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <=
                this.max.y
        },
        intersects: function (t) {
            t = o.bounds(t);
            var e = this.min,
                i = this.max,
                n = t.min,
                s = t.max,
                a = s.x >= e.x && n.x <= i.x,
                r = s.y >= e.y && n.y <= i.y;
            return a && r
        },
        overlaps: function (t) {
            t = o.bounds(t);
            var e = this.min,
                i = this.max,
                n = t.min,
                s = t.max,
                a = s.x > e.x && n.x < i.x,
                r = s.y > e.y && n.y < i.y;
            return a && r
        },
        isValid: function () {
            return !(!this.min || !this.max)
        }
    }, o.bounds = function (t, e) {
        return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e)
    }, o.Transformation = function (t, e, i, n) {
        this._a = t, this._b = e, this._c = i, this._d = n
    }, o.Transformation.prototype = {
        transform: function (t, e) {
            return this._transform(t.clone(), e)
        },
        _transform: function (t, e) {
            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
        },
        untransform: function (t, e) {
            return e = e || 1, new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        }
    }, o.DomUtil = {
        get: function (t) {
            return "string" == typeof t ? e.getElementById(t) : t
        },
        getStyle: function (t, i) {
            var n = t.style[i] || t.currentStyle && t.currentStyle[i];
            if ((!n || "auto" === n) && e.defaultView) {
                var o = e.defaultView.getComputedStyle(t, null);
                n = o ? o[i] : null
            }
            return "auto" === n ? null : n
        },
        create: function (t, i, n) {
            var o = e.createElement(t);
            return o.className = i || "", n && n.appendChild(o), o
        },
        remove: function (t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        },
        empty: function (t) {
            for (; t.firstChild;) t.removeChild(t.firstChild)
        },
        toFront: function (t) {
            t.parentNode.appendChild(t)
        },
        toBack: function (t) {
            var e = t.parentNode;
            e.insertBefore(t, e.firstChild)
        },
        hasClass: function (t, e) {
            if (t.classList !== i) return t.classList.contains(e);
            var n = o.DomUtil.getClass(t);
            return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
        },
        addClass: function (t, e) {
            if (t.classList !== i) for (var n = o.Util.splitWords(e), s = 0, a = n.length; s < a; s++) t.classList.add(
                        n[s]);
            else if (!o.DomUtil.hasClass(t, e)) {
                var r = o.DomUtil.getClass(t);
                o.DomUtil.setClass(t, (r ? r + " " : "") + e)
            }
        },
        removeClass: function (t, e) {
            t.classList !== i ? t.classList.remove(e) : o.DomUtil.setClass(t, o.Util.trim((" " + o.DomUtil.getClass(t) +
                " ").replace(" " + e + " ", " ")))
        },
        setClass: function (t, e) {
            t.className.baseVal === i ? t.className = e : t.className.baseVal = e
        },
        getClass: function (t) {
            return t.className.baseVal === i ? t.className : t.className.baseVal
        },
        setOpacity: function (t, e) {
            "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && o.DomUtil._setOpacityIE(t, e)
        },
        _setOpacityIE: function (t, e) {
            var i = !1,
                n = "DXImageTransform.Microsoft.Alpha";
            try {
                i = t.filters.item(n)
            } catch (t) {
                if (1 === e) return
            }
            e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n +
                "(opacity=" + e + ")"
        },
        testProp: function (t) {
            for (var i = e.documentElement.style, n = 0; n < t.length; n++) if (t[n] in i) return t[n];
            return !1
        },
        setTransform: function (t, e, i) {
            var n = e || new o.Point(0, 0);
            t.style[o.DomUtil.TRANSFORM] = (o.Browser.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" +
                n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "")
        },
        setPosition: function (t, e) {
            t._leaflet_pos = e, o.Browser.any3d ? o.DomUtil.setTransform(t, e) : (t.style.left = e.x + "px", t.style.top =
                e.y + "px")
        },
        getPosition: function (t) {
            return t._leaflet_pos || new o.Point(0, 0)
        }
    },
    function () {
        o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform",
                "msTransform"]);
        var i = o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition",
                "MozTransition", "msTransition"]);
        if (o.DomUtil.TRANSITION_END = "webkitTransition" === i || "OTransition" === i ? i + "End" : "transitionend",
            "onselectstart" in e) o.DomUtil.disableTextSelection = function () {
                o.DomEvent.on(t, "selectstart", o.DomEvent.preventDefault)
        }, o.DomUtil.enableTextSelection = function () {
            o.DomEvent.off(t, "selectstart", o.DomEvent.preventDefault)
        };
        else {
            var n = o.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect",
                    "msUserSelect"]);
            o.DomUtil.disableTextSelection = function () {
                if (n) {
                    var t = e.documentElement.style;
                    this._userSelect = t[n], t[n] = "none"
                }
            }, o.DomUtil.enableTextSelection = function () {
                n && (e.documentElement.style[n] = this._userSelect, delete this._userSelect)
            }
        }
        o.DomUtil.disableImageDrag = function () {
            o.DomEvent.on(t, "dragstart", o.DomEvent.preventDefault)
        }, o.DomUtil.enableImageDrag = function () {
            o.DomEvent.off(t, "dragstart", o.DomEvent.preventDefault)
        }, o.DomUtil.preventOutline = function (e) {
            for (; e.tabIndex === -1;) e = e.parentNode;
            e && e.style && (o.DomUtil.restoreOutline(), this._outlineElement = e, this._outlineStyle = e.style.outline,
                e.style.outline = "none", o.DomEvent.on(t, "keydown", o.DomUtil.restoreOutline, this))
        }, o.DomUtil.restoreOutline = function () {
            this._outlineElement && (this._outlineElement.style.outline = this._outlineStyle, delete this._outlineElement,
                delete this._outlineStyle, o.DomEvent.off(t, "keydown", o.DomUtil.restoreOutline, this))
        }
    }(), o.LatLng = function (t, e, n) {
        if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, n !== i && (this.alt = +n)
    }, o.LatLng.prototype = {
        equals: function (t, e) {
            if (!t) return !1;
            t = o.latLng(t);
            var n = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
            return n <= (e === i ? 1e-9 : e)
        },
        toString: function (t) {
            return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")"
        },
        distanceTo: function (t) {
            return o.CRS.Earth.distance(this, o.latLng(t))
        },
        wrap: function () {
            return o.CRS.Earth.wrapLatLng(this)
        },
        toBounds: function (t) {
            var e = 180 * t / 40075017,
                i = e / Math.cos(Math.PI / 180 * this.lat);
            return o.latLngBounds([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
        },
        clone: function () {
            return new o.LatLng(this.lat, this.lng, this.alt)
        }
    }, o.latLng = function (t, e, n) {
        return t instanceof o.LatLng ? t : o.Util.isArray(t) && "object" != typeof t[0] ? 3 === t.length ? new o.LatLng(
            t[0], t[1], t[2]) : 2 === t.length ? new o.LatLng(t[0], t[1]) : null : t === i || null === t ? t : "object" ==
            typeof t && "lat" in t ? new o.LatLng(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === i ? null : new o.LatLng(
            t, e, n)
    }, o.LatLngBounds = function (t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
    }, o.LatLngBounds.prototype = {
        extend: function (t) {
            var e, i, n = this._southWest,
                s = this._northEast;
            if (t instanceof o.LatLng) e = t, i = t;
            else {
                if (!(t instanceof o.LatLngBounds)) return t ? this.extend(o.latLng(t) || o.latLngBounds(t)) : this;
                if (e = t._southWest, i = t._northEast, !e || !i) return this
            }
            return n || s ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), s.lat = Math.max(i.lat, s.lat),
                s.lng = Math.max(i.lng, s.lng)) : (this._southWest = new o.LatLng(e.lat, e.lng), this._northEast = new o
                .LatLng(i.lat, i.lng)), this
        },
        pad: function (t) {
            var e = this._southWest,
                i = this._northEast,
                n = Math.abs(e.lat - i.lat) * t,
                s = Math.abs(e.lng - i.lng) * t;
            return new o.LatLngBounds(new o.LatLng(e.lat - n, e.lng - s), new o.LatLng(i.lat + n, i.lng + s))
        },
        getCenter: function () {
            return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast
                .lng) / 2)
        },
        getSouthWest: function () {
            return this._southWest
        },
        getNorthEast: function () {
            return this._northEast
        },
        getNorthWest: function () {
            return new o.LatLng(this.getNorth(), this.getWest())
        },
        getSouthEast: function () {
            return new o.LatLng(this.getSouth(), this.getEast())
        },
        getWest: function () {
            return this._southWest.lng
        },
        getSouth: function () {
            return this._southWest.lat
        },
        getEast: function () {
            return this._northEast.lng
        },
        getNorth: function () {
            return this._northEast.lat
        },
        contains: function (t) {
            t = "number" == typeof t[0] || t instanceof o.LatLng ? o.latLng(t) : o.latLngBounds(t);
            var e, i, n = this._southWest,
                s = this._northEast;
            return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat &&
                i.lat <= s.lat && e.lng >= n.lng && i.lng <= s.lng
        },
        intersects: function (t) {
            t = o.latLngBounds(t);
            var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                s = t.getNorthEast(),
                a = s.lat >= e.lat && n.lat <= i.lat,
                r = s.lng >= e.lng && n.lng <= i.lng;
            return a && r
        },
        overlaps: function (t) {
            t = o.latLngBounds(t);
            var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                s = t.getNorthEast(),
                a = s.lat > e.lat && n.lat < i.lat,
                r = s.lng > e.lng && n.lng < i.lng;
            return a && r
        },
        toBBoxString: function () {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function (t) {
            return !!t && (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast()))
        },
        isValid: function () {
            return !(!this._southWest || !this._northEast)
        }
    }, o.latLngBounds = function (t, e) {
        return t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e)
    }, o.Projection = {}, o.Projection.LonLat = {
        project: function (t) {
            return new o.Point(t.lng, t.lat)
        },
        unproject: function (t) {
            return new o.LatLng(t.y, t.x)
        },
        bounds: o.bounds([-180, -90], [180, 90])
    }, o.Projection.SphericalMercator = {
        R: 6378137,
        MAX_LATITUDE: 85.0511287798,
        project: function (t) {
            var e = Math.PI / 180,
                i = this.MAX_LATITUDE,
                n = Math.max(Math.min(i, t.lat), -i),
                s = Math.sin(n * e);
            return new o.Point(this.R * t.lng * e, this.R * Math.log((1 + s) / (1 - s)) / 2)
        },
        unproject: function (t) {
            var e = 180 / Math.PI;
            return new o.LatLng((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
        },
        bounds: function () {
            var t = 6378137 * Math.PI;
            return o.bounds([-t, -t], [t, t])
        }()
    }, o.CRS = {
        latLngToPoint: function (t, e) {
            var i = this.projection.project(t),
                n = this.scale(e);
            return this.transformation._transform(i, n)
        },
        pointToLatLng: function (t, e) {
            var i = this.scale(e),
                n = this.transformation.untransform(t, i);
            return this.projection.unproject(n)
        },
        project: function (t) {
            return this.projection.project(t)
        },
        unproject: function (t) {
            return this.projection.unproject(t)
        },
        scale: function (t) {
            return 256 * Math.pow(2, t)
        },
        zoom: function (t) {
            return Math.log(t / 256) / Math.LN2
        },
        getProjectedBounds: function (t) {
            if (this.infinite) return null;
            var e = this.projection.bounds,
                i = this.scale(t),
                n = this.transformation.transform(e.min, i),
                s = this.transformation.transform(e.max, i);
            return o.bounds(n, s)
        },
        infinite: !1,
        wrapLatLng: function (t) {
            var e = this.wrapLng ? o.Util.wrapNum(t.lng, this.wrapLng, !0) : t.lng,
                i = this.wrapLat ? o.Util.wrapNum(t.lat, this.wrapLat, !0) : t.lat,
                n = t.alt;
            return o.latLng(i, e, n)
        }
    }, o.CRS.Simple = o.extend({}, o.CRS, {
        projection: o.Projection.LonLat,
        transformation: new o.Transformation(1, 0, -1, 0),
        scale: function (t) {
            return Math.pow(2, t)
        },
        zoom: function (t) {
            return Math.log(t) / Math.LN2
        },
        distance: function (t, e) {
            var i = e.lng - t.lng,
                n = e.lat - t.lat;
            return Math.sqrt(i * i + n * n)
        },
        infinite: !0
    }), o.CRS.Earth = o.extend({}, o.CRS, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (t, e) {
            var i = Math.PI / 180,
                n = t.lat * i,
                o = e.lat * i,
                s = Math.sin(n) * Math.sin(o) + Math.cos(n) * Math.cos(o) * Math.cos((e.lng - t.lng) * i);
            return this.R * Math.acos(Math.min(s, 1))
        }
    }), o.CRS.EPSG3857 = o.extend({}, o.CRS.Earth, {
        code: "EPSG:3857",
        projection: o.Projection.SphericalMercator,
        transformation: function () {
            var t = .5 / (Math.PI * o.Projection.SphericalMercator.R);
            return new o.Transformation(t, .5, -t, .5)
        }()
    }), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {
        code: "EPSG:900913"
    }), o.CRS.EPSG4326 = o.extend({}, o.CRS.Earth, {
        code: "EPSG:4326",
        projection: o.Projection.LonLat,
        transformation: new o.Transformation(1 / 180, 1, -1 / 180, .5)
    }), o.Map = o.Evented.extend({
        options: {
            crs: o.CRS.EPSG3857,
            center: i,
            zoom: i,
            minZoom: i,
            maxZoom: i,
            layers: [],
            maxBounds: i,
            renderer: i,
            zoomAnimation: !0,
            zoomAnimationThreshold: 4,
            fadeAnimation: !0,
            markerZoomAnimation: !0,
            transform3DLimit: 8388608,
            zoomSnap: 1,
            zoomDelta: 1,
            trackResize: !0
        },
        initialize: function (t, e) {
            e = o.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = o.bind(this._onResize,
                this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== i && (this._zoom =
                this._limitZoom(e.zoom)), e.center && e.zoom !== i && this.setView(o.latLng(e.center), e.zoom, {
                reset: !0
            }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(),
                this._zoomAnimated = o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.mobileOpera && this.options.zoomAnimation,
                this._zoomAnimated && (this._createAnimProxy(), o.DomEvent.on(this._proxy, o.DomUtil.TRANSITION_END,
                this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
        },
        setView: function (t, e, n) {
            if (e = e === i ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds),
                n = n || {}, this._stop(), this._loaded && !n.reset && n !== !0) {
                n.animate !== i && (n.zoom = o.extend({
                    animate: n.animate
                }, n.zoom), n.pan = o.extend({
                    animate: n.animate,
                    duration: n.duration
                }, n.pan));
                var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(
                    t, n.pan);
                if (s) return clearTimeout(this._sizeTimer), this
            }
            return this._resetView(t, e), this
        },
        setZoom: function (t, e) {
            return this._loaded ? this.setView(this.getCenter(), t, {
                zoom: e
            }) : (this._zoom = t, this)
        },
        zoomIn: function (t, e) {
            return t = t || (o.Browser.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
        },
        zoomOut: function (t, e) {
            return t = t || (o.Browser.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
        },
        setZoomAround: function (t, e, i) {
            var n = this.getZoomScale(e),
                s = this.getSize().divideBy(2),
                a = t instanceof o.Point ? t : this.latLngToContainerPoint(t),
                r = a.subtract(s).multiplyBy(1 - 1 / n),
                h = this.containerPointToLatLng(s.add(r));
            return this.setView(h, e, {
                zoom: i
            })
        },
        _getBoundsCenterZoom: function (t, e) {
            e = e || {}, t = t.getBounds ? t.getBounds() : o.latLngBounds(t);
            var i = o.point(e.paddingTopLeft || e.padding || [0, 0]),
                n = o.point(e.paddingBottomRight || e.padding || [0, 0]),
                s = this.getBoundsZoom(t, !1, i.add(n));
            s = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, s) : s;
            var a = n.subtract(i).divideBy(2),
                r = this.project(t.getSouthWest(), s),
                h = this.project(t.getNorthEast(), s),
                l = this.unproject(r.add(h).divideBy(2).add(a), s);
            return {
                center: l,
                zoom: s
            }
        },
        fitBounds: function (t, e) {
            if (t = o.latLngBounds(t), !t.isValid()) throw new Error("Bounds are not valid.");
            var i = this._getBoundsCenterZoom(t, e);
            return this.setView(i.center, i.zoom, e)
        },
        fitWorld: function (t) {
            return this.fitBounds([[-90, -180], [90, 180]], t)
        },
        panTo: function (t, e) {
            return this.setView(t, this._zoom, {
                pan: e
            })
        },
        panBy: function (t, e) {
            if (t = o.point(t).round(), e = e || {}, !t.x && !t.y) return this.fire("moveend");
            if (e.animate !== !0 && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(
                    this.getCenter()).add(t)), this.getZoom()), this;
            if (this._panAnim || (this._panAnim = new o.PosAnimation, this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
            }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
                o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                var i = this._getMapPanePos().subtract(t).round();
                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
            } else this._rawPanBy(t), this.fire("move").fire("moveend");
            return this
        },
        flyTo: function (t, e, n) {
            function s(t) {
                var e = t ? -1 : 1,
                    i = t ? v : g,
                    n = v * v - g * g + e * x * x * y * y,
                    o = 2 * i * x * y,
                    s = n / o,
                    a = Math.sqrt(s * s + 1) - s,
                    r = a < 1e-9 ? -18 : Math.log(a);
                return r
            }
            function a(t) {
                return (Math.exp(t) - Math.exp(-t)) / 2
            }
            function r(t) {
                return (Math.exp(t) + Math.exp(-t)) / 2
            }
            function h(t) {
                return a(t) / r(t)
            }
            function l(t) {
                return g * (r(w) / r(w + L * t))
            }
            function d(t) {
                return g * (r(w) * h(w + L * t) - a(w)) / x
            }
            function u(t) {
                return 1 - Math.pow(1 - t, 1.5)
            }
            function c() {
                var i = (Date.now() - b) / M,
                    n = u(i) * P;
                i <= 1 ? (this._flyToFrame = o.Util.requestAnimFrame(c, this), this._move(this.unproject(p.add(_.subtract(
                    p).multiplyBy(d(n) / y)), f), this.getScaleZoom(g / l(n), f), {
                    flyTo: !0
                })) : this._move(t, e)._moveEnd(!0)
            }
            if (n = n || {}, n.animate === !1 || !o.Browser.any3d) return this.setView(t, e, n);
            this._stop();
            var p = this.project(this.getCenter()),
                _ = this.project(t),
                m = this.getSize(),
                f = this._zoom;
            t = o.latLng(t), e = e === i ? f : e;
            var g = Math.max(m.x, m.y),
                v = g * this.getZoomScale(f, e),
                y = _.distanceTo(p) || 1,
                L = 1.42,
                x = L * L,
                w = s(0),
                b = Date.now(),
                P = (s(1) - w) / L,
                M = n.duration ? 1e3 * n.duration : 1e3 * P * .8;
            return this._moveStart(!0), c.call(this), this
        },
        flyToBounds: function (t, e) {
            var i = this._getBoundsCenterZoom(t, e);
            return this.flyTo(i.center, i.zoom, e)
        },
        setMaxBounds: function (t) {
            return t = o.latLngBounds(t), t.isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds),
                this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) :
                (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
        },
        setMinZoom: function (t) {
            return this.options.minZoom = t, this._loaded && this.getZoom() < this.options.minZoom ? this.setZoom(t) :
                this
        },
        setMaxZoom: function (t) {
            return this.options.maxZoom = t, this._loaded && this.getZoom() > this.options.maxZoom ? this.setZoom(t) :
                this
        },
        panInsideBounds: function (t, e) {
            this._enforcingBounds = !0;
            var i = this.getCenter(),
                n = this._limitCenter(i, this._zoom, o.latLngBounds(t));
            return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this
        },
        invalidateSize: function (t) {
            if (!this._loaded) return this;
            t = o.extend({
                animate: !1,
                pan: !0
            }, t === !0 ? {
                animate: !0
            } : t);
            var e = this.getSize();
            this._sizeChanged = !0, this._lastCenter = null;
            var i = this.getSize(),
                n = e.divideBy(2).round(),
                s = i.divideBy(2).round(),
                a = n.subtract(s);
            return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t
                .debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this,
                "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                oldSize: e,
                newSize: i
            })) : this
        },
        stop: function () {
            return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
        },
        locate: function (t) {
            if (t = this._locateOptions = o.extend({
                timeout: 1e4,
                watch: !1
            }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
            var e = o.bind(this._handleGeolocationResponse, this),
                i = o.bind(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation
                .getCurrentPosition(e, i, t), this
        },
        stopLocate: function () {
            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
                this._locateOptions && (this._locateOptions.setView = !1), this
        },
        _handleGeolocationError: function (t) {
            var e = t.code,
                i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + i + "."
            })
        },
        _handleGeolocationResponse: function (t) {
            var e = t.coords.latitude,
                i = t.coords.longitude,
                n = new o.LatLng(e, i),
                s = n.toBounds(t.coords.accuracy),
                a = this._locateOptions;
            if (a.setView) {
                var r = this.getBoundsZoom(s);
                this.setView(n, a.maxZoom ? Math.min(r, a.maxZoom) : r)
            }
            var h = {
                latlng: n,
                bounds: s,
                timestamp: t.timestamp
            };
            for (var l in t.coords) "number" == typeof t.coords[l] && (h[l] = t.coords[l]);
            this.fire("locationfound", h)
        },
        addHandler: function (t, e) {
            if (!e) return this;
            var i = this[t] = new e(this);
            return this._handlers.push(i), this.options[t] && i.enable(), this
        },
        remove: function () {
            if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error(
                    "Map container is being reused by another instance");
            try {
                delete this._container._leaflet_id, delete this._containerId
            } catch (t) {
                this._container._leaflet_id = i, this._containerId = i
            }
            o.DomUtil.remove(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(),
                this._loaded && this.fire("unload");
            for (var t in this._layers) this._layers[t].remove();
            return this
        },
        createPane: function (t, e) {
            var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
                n = o.DomUtil.create("div", i, e || this._mapPane);
            return t && (this._panes[t] = n), n
        },
        getCenter: function () {
            return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(
                this._getCenterLayerPoint())
        },
        getZoom: function () {
            return this._zoom
        },
        getBounds: function () {
            var t = this.getPixelBounds(),
                e = this.unproject(t.getBottomLeft()),
                i = this.unproject(t.getTopRight());
            return new o.LatLngBounds(e, i)
        },
        getMinZoom: function () {
            return this.options.minZoom === i ? this._layersMinZoom || 0 : this.options.minZoom
        },
        getMaxZoom: function () {
            return this.options.maxZoom === i ? this._layersMaxZoom === i ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
        },
        getBoundsZoom: function (t, e, i) {
            t = o.latLngBounds(t), i = o.point(i || [0, 0]);
            var n = this.getZoom() || 0,
                s = this.getMinZoom(),
                a = this.getMaxZoom(),
                r = t.getNorthWest(),
                h = t.getSouthEast(),
                l = this.getSize().subtract(i),
                d = this.project(h, n).subtract(this.project(r, n)),
                u = o.Browser.any3d ? this.options.zoomSnap : 1,
                c = Math.min(l.x / d.x, l.y / d.y);
            return n = this.getScaleZoom(c, n), u && (n = Math.round(n / (u / 100)) * (u / 100), n = e ? Math.ceil(n /
                u) * u : Math.floor(n / u) * u), Math.max(s, Math.min(a, n))
        },
        getSize: function () {
            return this._size && !this._sizeChanged || (this._size = new o.Point(this._container.clientWidth, this._container
                .clientHeight), this._sizeChanged = !1), this._size.clone()
        },
        getPixelBounds: function (t, e) {
            var i = this._getTopLeftPoint(t, e);
            return new o.Bounds(i, i.add(this.getSize()))
        },
        getPixelOrigin: function () {
            return this._checkIfLoaded(), this._pixelOrigin
        },
        getPixelWorldBounds: function (t) {
            return this.options.crs.getProjectedBounds(t === i ? this.getZoom() : t)
        },
        getPane: function (t) {
            return "string" == typeof t ? this._panes[t] : t
        },
        getPanes: function () {
            return this._panes
        },
        getContainer: function () {
            return this._container
        },
        getZoomScale: function (t, e) {
            var n = this.options.crs;
            return e = e === i ? this._zoom : e, n.scale(t) / n.scale(e)
        },
        getScaleZoom: function (t, e) {
            var n = this.options.crs;
            e = e === i ? this._zoom : e;
            var o = n.zoom(t * n.scale(e));
            return isNaN(o) ? 1 / 0 : o
        },
        project: function (t, e) {
            return e = e === i ? this._zoom : e, this.options.crs.latLngToPoint(o.latLng(t), e)
        },
        unproject: function (t, e) {
            return e = e === i ? this._zoom : e, this.options.crs.pointToLatLng(o.point(t), e)
        },
        layerPointToLatLng: function (t) {
            var e = o.point(t).add(this.getPixelOrigin());
            return this.unproject(e)
        },
        latLngToLayerPoint: function (t) {
            var e = this.project(o.latLng(t))._round();
            return e._subtract(this.getPixelOrigin())
        },
        wrapLatLng: function (t) {
            return this.options.crs.wrapLatLng(o.latLng(t))
        },
        distance: function (t, e) {
            return this.options.crs.distance(o.latLng(t), o.latLng(e))
        },
        containerPointToLayerPoint: function (t) {
            return o.point(t).subtract(this._getMapPanePos())
        },
        layerPointToContainerPoint: function (t) {
            return o.point(t).add(this._getMapPanePos())
        },
        containerPointToLatLng: function (t) {
            var e = this.containerPointToLayerPoint(o.point(t));
            return this.layerPointToLatLng(e)
        },
        latLngToContainerPoint: function (t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))
        },
        mouseEventToContainerPoint: function (t) {
            return o.DomEvent.getMousePosition(t, this._container)
        },
        mouseEventToLayerPoint: function (t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
        },
        mouseEventToLatLng: function (t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
        },
        _initContainer: function (t) {
            var e = this._container = o.DomUtil.get(t);
            if (!e) throw new Error("Map container not found.");
            if (e._leaflet_id) throw new Error("Map container is already initialized.");
            o.DomEvent.addListener(e, "scroll", this._onScroll, this), this._containerId = o.Util.stamp(e)
        },
        _initLayout: function () {
            var t = this._container;
            this._fadeAnimated = this.options.fadeAnimation && o.Browser.any3d, o.DomUtil.addClass(t,
                "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ? " leaflet-retina" :
                "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (o.Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ?
                " leaflet-fade-anim" : ""));
            var e = o.DomUtil.getStyle(t, "position");
            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"),
            this._initPanes(), this._initControlPos && this._initControlPos()
        },
        _initPanes: function () {
            var t = this._panes = {};
            this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), o.DomUtil.setPosition(
                this._mapPane, new o.Point(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane(
                "overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane(
                "popupPane"), this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, "leaflet-zoom-hide"),
                o.DomUtil.addClass(t.shadowPane, "leaflet-zoom-hide"))
        },
        _resetView: function (t, e) {
            o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0));
            var i = !this._loaded;
            this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
            var n = this._zoom !== e;
            this._moveStart(n)._move(t, e)._moveEnd(n), this.fire("viewreset"), i && this.fire("load")
        },
        _moveStart: function (t) {
            return t && this.fire("zoomstart"), this.fire("movestart")
        },
        _move: function (t, e, n) {
            e === i && (e = this._zoom);
            var o = this._zoom !== e;
            return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (o || n && n.pinch) &&
                this.fire("zoom", n), this.fire("move", n)
        },
        _moveEnd: function (t) {
            return t && this.fire("zoomend"), this.fire("moveend")
        },
        _stop: function () {
            return o.Util.cancelAnimFrame(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
        },
        _rawPanBy: function (t) {
            o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
        },
        _getZoomSpan: function () {
            return this.getMaxZoom() - this.getMinZoom()
        },
        _panInsideMaxBounds: function () {
            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
        },
        _checkIfLoaded: function () {
            if (!this._loaded) throw new Error("Set map center and zoom first.")
        },
        _initEvents: function (e) {
            if (o.DomEvent) {
                this._targets = {}, this._targets[o.stamp(this._container)] = this;
                var i = e ? "off" : "on";
                o.DomEvent[i](this._container,
                    "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent,
                    this), this.options.trackResize && o.DomEvent[i](t, "resize", this._onResize, this), o.Browser.any3d &&
                    this.options.transform3DLimit && this[i]("moveend", this._onMoveEnd)
            }
        },
        _onResize: function () {
            o.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = o.Util.requestAnimFrame(function () {
                this.invalidateSize({
                    debounceMoveend: !0
                })
            }, this)
        },
        _onScroll: function () {
            this._container.scrollTop = 0, this._container.scrollLeft = 0
        },
        _onMoveEnd: function () {
            var t = this._getMapPanePos();
            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(),
                this.getZoom())
        },
        _findEventTargets: function (t, e) {
            for (var i, n = [], s = "mouseout" === e || "mouseover" === e, a = t.target || t.srcElement, r = !1; a;) {
                if (i = this._targets[o.stamp(a)], i && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(
                    i)) {
                    r = !0;
                    break
                }
                if (i && i.listens(e, !0)) {
                    if (s && !o.DomEvent._isExternalTarget(a, t)) break;
                    if (n.push(i), s) break
                }
                if (a === this._container) break;
                a = a.parentNode
            }
            return n.length || r || s || !o.DomEvent._isExternalTarget(a, t) || (n = [this]), n
        },
        _handleDOMEvent: function (t) {
            if (this._loaded && !o.DomEvent._skipped(t)) {
                var e = "keypress" === t.type && 13 === t.keyCode ? "click" : t.type;
                "mousedown" === e && o.DomUtil.preventOutline(t.target || t.srcElement), this._fireDOMEvent(t, e)
            }
        },
        _fireDOMEvent: function (t, e, i) {
            if ("click" === t.type) {
                var n = o.Util.extend({}, t);
                n.type = "preclick", this._fireDOMEvent(n, n.type, i)
            }
            if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e)), i.length)) {
                var s = i[0];
                "contextmenu" === e && s.listens(e, !0) && o.DomEvent.preventDefault(t);
                var a = {
                    originalEvent: t
                };
                if ("keypress" !== t.type) {
                    var r = s instanceof o.Marker;
                    a.containerPoint = r ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(
                        t), a.layerPoint = this.containerPointToLayerPoint(a.containerPoint), a.latlng = r ? s.getLatLng() :
                        this.layerPointToLatLng(a.layerPoint)
                }
                for (var h = 0; h < i.length; h++) if (i[h].fire(e, a, !0), a.originalEvent._stopped || i[h].options.nonBubblingEvents &&
                        o.Util.indexOf(i[h].options.nonBubblingEvents, e) !== -1) return
            }
        },
        _draggableMoved: function (t) {
            return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom &&
                this.boxZoom.moved()
        },
        _clearHandlers: function () {
            for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
        },
        whenReady: function (t, e) {
            return this._loaded ? t.call(e || this, {
                target: this
            }) : this.on("load", t, e), this
        },
        _getMapPanePos: function () {
            return o.DomUtil.getPosition(this._mapPane) || new o.Point(0, 0)
        },
        _moved: function () {
            var t = this._getMapPanePos();
            return t && !t.equals([0, 0])
        },
        _getTopLeftPoint: function (t, e) {
            var n = t && e !== i ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
            return n.subtract(this._getMapPanePos())
        },
        _getNewPixelOrigin: function (t, e) {
            var i = this.getSize()._divideBy(2);
            return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
        },
        _latLngToNewLayerPoint: function (t, e, i) {
            var n = this._getNewPixelOrigin(i, e);
            return this.project(t, e)._subtract(n)
        },
        _latLngBoundsToNewLayerBounds: function (t, e, i) {
            var n = this._getNewPixelOrigin(i, e);
            return o.bounds([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(
                    n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)])
        },
        _getCenterLayerPoint: function () {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
        },
        _getCenterOffset: function (t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
        },
        _limitCenter: function (t, e, i) {
            if (!i) return t;
            var n = this.project(t, e),
                s = this.getSize().divideBy(2),
                a = new o.Bounds(n.subtract(s), n.add(s)),
                r = this._getBoundsOffset(a, i, e);
            return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), e)
        },
        _limitOffset: function (t, e) {
            if (!e) return t;
            var i = this.getPixelBounds(),
                n = new o.Bounds(i.min.add(t), i.max.add(t));
            return t.add(this._getBoundsOffset(n, e))
        },
        _getBoundsOffset: function (t, e, i) {
            var n = o.bounds(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                s = n.min.subtract(t.min),
                a = n.max.subtract(t.max),
                r = this._rebound(s.x, -a.x),
                h = this._rebound(s.y, -a.y);
            return new o.Point(r, h)
        },
        _rebound: function (t, e) {
            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
        },
        _limitZoom: function (t) {
            var e = this.getMinZoom(),
                i = this.getMaxZoom(),
                n = o.Browser.any3d ? this.options.zoomSnap : 1;
            return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t))
        },
        _onPanTransitionStep: function () {
            this.fire("move")
        },
        _onPanTransitionEnd: function () {
            o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
        },
        _tryAnimatedPan: function (t, e) {
            var i = this._getCenterOffset(t)._floor();
            return !((e && e.animate) !== !0 && !this.getSize().contains(i)) && (this.panBy(i, e), !0)
        },
        _createAnimProxy: function () {
            var t = this._proxy = o.DomUtil.create("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(t), this.on("zoomanim", function (e) {
                var i = o.DomUtil.TRANSFORM,
                    n = t.style[i];
                o.DomUtil.setTransform(t, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === t.style[
                    i] && this._animatingZoom && this._onZoomTransitionEnd()
            }, this), this.on("load moveend", function () {
                var e = this.getCenter(),
                    i = this.getZoom();
                o.DomUtil.setTransform(t, this.project(e, i), this.getZoomScale(i, 1))
            }, this)
        },
        _catchTransitionEnd: function (t) {
            this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
        },
        _nothingToAnimate: function () {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
        },
        _tryAnimatedZoom: function (t, e, i) {
            if (this._animatingZoom) return !0;
            if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) >
                this.options.zoomAnimationThreshold) return !1;
            var n = this.getZoomScale(e),
                s = this._getCenterOffset(t)._divideBy(1 - 1 / n);
            return !(i.animate !== !0 && !this.getSize().contains(s)) && (o.Util.requestAnimFrame(function () {
                this._moveStart(!0)._animateZoom(t, e, !0)
            }, this), !0)
        },
        _animateZoom: function (t, e, i, n) {
            i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, o.DomUtil.addClass(this
                ._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                center: t,
                zoom: e,
                noUpdate: n
            }), setTimeout(o.bind(this._onZoomTransitionEnd, this), 250)
        },
        _onZoomTransitionEnd: function () {
            this._animatingZoom && (o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1,
                this._move(this._animateToCenter, this._animateToZoom), o.Util.requestAnimFrame(function () {
                this._moveEnd(!0)
            }, this))
        }
    }), o.map = function (t, e) {
        return new o.Map(t, e)
    }, o.Layer = o.Evented.extend({
        options: {
            pane: "overlayPane",
            nonBubblingEvents: [],
            attribution: null
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        remove: function () {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function (t) {
            return t && t.removeLayer(this), this
        },
        getPane: function (t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function (t) {
            return this._map._targets[o.stamp(t)] = this, this
        },
        removeInteractiveTarget: function (t) {
            return delete this._map._targets[o.stamp(t)], this
        },
        getAttribution: function () {
            return this.options.attribution
        },
        _layerAdd: function (t) {
            var e = t.target;
            if (e.hasLayer(this)) {
                if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                    var i = this.getEvents();
                    e.on(i, this), this.once("remove", function () {
                        e.off(i, this)
                    }, this)
                }
                this.onAdd(e), this.getAttribution && this._map.attributionControl && this._map.attributionControl.addAttribution(
                    this.getAttribution()), this.fire("add"), e.fire("layeradd", {
                    layer: this
                })
            }
        }
    }), o.Map.include({
        addLayer: function (t) {
            var e = o.stamp(t);
            return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this),
                this.whenReady(t._layerAdd, t), this)
        },
        removeLayer: function (t) {
            var e = o.stamp(t);
            return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl &&
                this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded &&
                (this.fire("layerremove", {
                layer: t
            }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
        },
        hasLayer: function (t) {
            return !!t && o.stamp(t) in this._layers
        },
        eachLayer: function (t, e) {
            for (var i in this._layers) t.call(e, this._layers[i]);
            return this
        },
        _addLayers: function (t) {
            t = t ? o.Util.isArray(t) ? t : [t] : [];
            for (var e = 0, i = t.length; e < i; e++) this.addLayer(t[e])
        },
        _addZoomLimit: function (t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[o.stamp(t)] = t, this._updateZoomLevels())
        },
        _removeZoomLimit: function (t) {
            var e = o.stamp(t);
            this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
        },
        _updateZoomLevels: function () {
            var t = 1 / 0,
                e = -(1 / 0),
                n = this._getZoomSpan();
            for (var o in this._zoomBoundLayers) {
                var s = this._zoomBoundLayers[o].options;
                t = s.minZoom === i ? t : Math.min(t, s.minZoom), e = s.maxZoom === i ? e : Math.max(e, s.maxZoom)
            }
            this._layersMaxZoom = e === -(1 / 0) ? i : e, this._layersMinZoom = t === 1 / 0 ? i : t, n !== this._getZoomSpan() &&
                this.fire("zoomlevelschange"), this.options.maxZoom === i && this._layersMaxZoom && this.getZoom() >
                this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === i && this._layersMinZoom &&
                this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    }), o.CRS.EPSG3857_360 = o.extend({}, o.CRS.Earth, {
        code: "EPSG:3857_360",
        projection: o.Projection.SphericalMercator,
        transformation: function () {
            var t = .5 / (Math.PI * o.Projection.SphericalMercator.R);
            return new o.Transformation(t, .5, -t, .5)
        }()
    }), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {
        code: "EPSG:3857_360"
    }), o.CRS.latLngToPoint = function (t, e) {
        var i = this.projection.project(t, e),
            n = this.scale(e);
        return this.transformation._transform(i, n)
    }, o.Http = {}, o.Http.Request = o.Evented.extend({
        options: {
            callback: "callback",
            type: "json",
            charset: "utf-8"
        },
        initialize: function (t, e) {
            o.Util.setOptions(this, e), this.send(t)
        },
        send: function (t) {
            var i = o.DomUtil.create("script");
            i.type = "text/javascript", i.charset = this.options.charset;
            var n = this;
            o.Browser.ielt9 ? i.onreadystatechange = function () {
                "loaded" != this.readyState && "complete" != this.readyState || n.emit("complete")
            } : (i.onload = function () {
                n.emit("complete")
            }, i.onerror = function () {
                n.emit("error", {
                    status: 0,
                    info: "service error",
                    url: t
                })
            }), i.src = t, e.getElementsByTagName("head")[0].appendChild(i)
        }
    }), o.Http.JSONP = o.Http.Request.extend({
        send: function (i) {
            var n = o.Util.getGuid("_", 5) + "_",
                s = o.DomUtil.create("script");
            s.type = "text/javascript", s.charset = this.options.charset;
            var a = this;
            s.onerror = function () {
                a.emit("error", {
                    status: 0,
                    info: "service error",
                    url: i
                }), e.getElementsByTagName("head")[0].removeChild(s)
            };
            var r = function (i) {
                a.emit("complete", i), o[n] = null, t[n] = null, e.getElementsByTagName("head")[0].removeChild(s)
            };
            t[n] = r, s.src = i + "&" + this.options.callback + "=window." + n, e.getElementsByTagName("head")[0].appendChild(
                s)
        }
    }), o.Util.trim = function (t) {
        return t ? t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") : ""
    }, o.Util.getGuid = function (t, e) {
        return (t || "") + Math.round(Math.random() * Math.pow(10, e || 6))
    }, o.Util.extend(o.Evented.prototype, {
        has_events: function (t, e, i) {
            var n = this._events;
            if (e && i) {
                if (n && t in n) for (var o = 0; o < n[t].length; o++) if (n[t].fn === e && n[t].context === i) return !
                                0;
                return !1
            }
            return n && t in n && n[t] && n[t].length > 0
        },
        emit: function (t, e) {
            if (!this.has_events(t)) return this;
            for (var i = o.extend({
                type: t
            }, e), n = [].concat(this._events[t]), s = 0; s < n.length; s++) n[s].fn && (n[s].fn.call(n[s].context ||
                    this, i), n[s].once && this._events[t].splice(s, 1));
            return this
        }
    }),
    function () {
        var t = navigator.userAgent.toLowerCase(),
            e = t.indexOf("android") !== -1,
            i = t.indexOf("windows nt") !== -1,
            n = t.indexOf("macintosh") !== -1,
            s = t.indexOf("ipad;") !== -1,
            a = t.indexOf("ipod touch;") !== -1,
            r = t.indexOf("iphone;") !== -1,
            h = r || s || a;
        o.Browser.pf = e ? "android" : h ? "ios" : i ? "windows" : n ? "mac" : "other"
    }(), o.DomUtil.removeClass = function (t, e) {
        e && (t.classList !== i ? t.classList.remove(e) : o.DomUtil.setClass(t, o.Util.trim((" " + o.DomUtil.getClass(t) +
            " ").replace(" " + e + " ", " "))))
    }, o.DomUtil.setTransform = function (t, e, i, n) {
        var s = e || new o.Point(0, 0);
        t.style[o.DomUtil.TRANSFORM] = (o.Browser.ie3d ? "translate(" + s.x + "px," + s.y + "px)" : "translate3d(" + s.x +
            "px," + s.y + "px,0) rotate(" + (n || 0) + "deg)") + (i ? " scale(" + i + ")" : "")
    }, o.DomUtil.setPosition = function (t, e, i) {
        t && (t._leaflet_pos = e, o.Browser.any3d ? o.DomUtil.setTransform(t, e, null, i) : (t.style.left = e.x + "px",
            t.style.top = e.y + "px", t.style.position = "absolute"))
    }, o.Util.extend(o.Point.prototype, {
        scaleBy: function (t, e) {
            var i = "EPSG:3857_360" == e ? -(this.y * t.y) + Math.pow(2, this.z) * t.y - 256 : this.y * t.y;
            return new o.Point(this.x * t.x, i)
        }
    }), o.Util.extend(o.Layer.prototype, {
        options: o.Util.extend(o.Layer.prototype.options, {
            visible: !0
        }),
        _layerAdd: function (t) {
            var e = t.target;
            e.hasLayer(this) && (this._map = e, this._zoomAnimated = e._zoomAnimated, this.options.visible && this.getEvents &&
                e.on(this.getEvents(), this), this.onAdd(e), this.fire("add"), e.fire("layeradd", {
                layer: this
            }))
        }
    }), o.Map.include({
        addLayer: function (t) {
            var e = o.stamp(t);
            return this._layers[e] ? t : (this._layers[e] = t, 0 == t.type && (this._baseLayer && this.removeLayer(this
                ._baseLayer, !0), this._baseLayer = t), t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(
                t._layerAdd, t), this)
        },
        removeLayer: function (t, e, i) {
            var n = o.stamp(t);
            return this._layers[n] ? (0 != t.type || e || delete this._baseLayer, this._loaded && t.onRemove(this, i),
                t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()),
                t.getEvents && this.off(t.getEvents(), t), e || (delete this._layers[n], this._loaded && (this.fire(
                "layerremove", {
                layer: t
            }), t.fire("remove"))), t._map = t._mapToAdd = null, this) : this
        },
        getBGLayerIds: function () {
            var t = [],
                e = this._layers;
            for (var i in e) 0 == e[i].type && t.push(o.stamp(e[i]));
            return t
        },
        changeBGLayer: function (t) {
            var e = this;
            if (0 == t.type) {
                var i = o.stamp(t);
                return e._layers[i] ? (e._baseLayer = t, t.beforeAdd(e)) : e.addLayer(t), !0
            }
            return !1
        },
        getLayer: function (t) {
            return this._layers[t] ? this._layers[t] : null
        },
        layerToTop: function (t) {
            var e = this;
            if (t) {
                var i, n = 0;
                for (var o in e._layers) {
                    var s = e._layers[o];
                    0 != s.type && (o == t && (i = s), s.getZIndex() > n && (n = s.getZIndex()))
                }
                i && i.setZIndex(n + 1)
            }
        }
    }), o.Util.extend(o.Map.prototype, {
        inertia: function (t) {
            this.options.inertia = t
        },
        setZoom: function (t, e) {
            var e = e || {};
            return this._loaded ? this.setView(e.center || this.getCenter(), t, {
                zoom: e
            }) : (this._zoom = t, this)
        },
        panBy: function (t) {
            return this.fire("movestart"), this._rawPanBy(o.point(t)), this.fire("move").fire("change"), this.fire(
                "moveend").fire("changed")
        },
        setMaxBounds: function (t) {
            return t = o.latLngBounds(t), this.options.maxBounds = t, t ? (this.options.maxBounds && this.off("moveend",
                this._panInsideMaxBounds), this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) :
                this.off("moveend", this._panInsideMaxBounds)
        },
        setZoomLevels: function (t, e, i) {
            if (this.options.maxZoom = e, this.options.minZoom = t, !i) return this._loaded && this.getZoom() > this.options
                    .maxZoom ? this.setZoom(e) : this._loaded && this.getZoom() < this.options.minZoom ? this.setZoom(t) :
                    this
        },
        invalidateSize: function (t) {
            if (!this._loaded) return this;
            t = o.extend({
                animate: !1,
                pan: !0
            }, t === !0 ? {
                animate: !0
            } : t);
            var e = this.getSize();
            this._sizeChanged = !0, this._lastCenter = null;
            var i = this.getSize(),
                n = e.divideBy(2).round(),
                s = i.divideBy(2).round(),
                a = n.subtract(s);
            return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move").fire(
                "change"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this
                .fire, this, "moveend"), 200)) : this.fire("moveend").fire("changed")), this.fire("resize", {
                oldSize: e,
                newSize: i
            })) : this
        },
        plugin: function (t, e, i) {
            if ("string" == typeof t && (t = [t]), 0 === t.length) return e(), this;
            var i = i || this.options.pUrl || "pluginUrl not config~",
                n = i + t.join(",").replace(/LD\.|IMAP\./g, "plugins/"),
                s = new o.Http.Request(n);
            return s.on("complete", function () {
                e()
            }), s.on("error", function () {
                throw "Plugin service error!"
            }), this
        },
        latLngToProjectedPoint: function (t) {
            var e = this.project(o.latLng(t))._round();
            return e
        },
        projectedPointToLatlng: function (t) {
            var e = this.unproject(t);
            return e
        },
        _initLayout: function () {
            var t = this._container;
            this._fadeAnimated = this.options.fadeAnimation && o.Browser.any3d, o.DomUtil.addClass(t,
                "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ? " leaflet-retina" :
                "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (o.Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ?
                " leaflet-fade-anim" : "")), this.options.vector ? t.style.background = "#fcf9f2" : this.options.backgoundImg &&
                (t.style.backgroundImage = "url(" + this.options.backgoundImg + ")");
            var e = o.DomUtil.getStyle(t, "position");
            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(),
                this._initControlPos && this._initControlPos()
        },
        _move: function (t, e, n) {
            e === i && (e = this._zoom);
            var o = this._zoom !== e;
            return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), o && this.fire(
                "zoom", n), this.fire("move", n).fire("change")
        },
        _moveEnd: function (t) {
            return t && this.fire("zoomend"), this.fire("moveend").fire("changed")
        },
        _fireDOMEvent: function (t, e, i) {
            if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e)), i.length)) {
                var n = i[0];
                if ("contextmenu" === e && o.DomEvent.preventDefault(t), "click" !== t.type && "preclick" !== t.type ||
                    t._simulated || !this._draggableMoved(n)) {
                    var s = {
                        originalEvent: t
                    };
                    if ("keypress" !== t.type) {
                        var a = n instanceof o.Marker;
                        s.containerPoint = a ? this.latLngToContainerPoint(n.getLatLng()) : this.mouseEventToContainerPoint(
                            t), s.layerPoint = this.containerPointToLayerPoint(s.containerPoint), s.latlng = a ? n.getLatLng() :
                            this.layerPointToLatLng(s.layerPoint)
                    }
                    for (var r = 0; r < i.length; r++) if (i[r].fire(e, s, !0), s.originalEvent._stopped || i[r].options
                            .nonBubblingEvents && o.Util.indexOf(i[r].options.nonBubblingEvents, e) !== -1) return
                }
            }
        },
        _limitCenter: function (t, e, i) {
            if (!i) return t;
            var n = this.project(t, e),
                s = this.getSize().divideBy(2),
                a = new o.Bounds(n.subtract(s), n.add(s)),
                r = this._getBoundsOffset(a, i, e);
            return this.unproject(n.add(r), e)
        },
        _getBoundsOffset: function (t, e, i) {
            var n = this.project(e.getNorthWest(), i).subtract(t.min),
                s = this.project(e.getSouthEast(), i).subtract(t.max),
                a = this._rebound(n.x, -s.x),
                r = this._rebound(n.y, -s.y);
            return new o.Point(a, r)
        },
        _getTileId: function (t) {
            var e = this.project(t, this._zoom).floor(),
                i = e.unscaleBy(this._baseLayer.getTileSize()).floor();
            return i.y = -(i.y + 1 - Math.pow(2, this._zoom)), i.z = this._zoom, i
        }
    }), o.Projection.Mercator = {
        R: 6378137,
        R_MINOR: 6356752.314245179,
        bounds: o.bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
        project: function (t) {
            var e = Math.PI / 180,
                i = this.R,
                n = t.lat * e,
                s = this.R_MINOR / i,
                a = Math.sqrt(1 - s * s),
                r = a * Math.sin(n),
                h = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), a / 2);
            return n = -i * Math.log(Math.max(h, 1e-10)), new o.Point(t.lng * e * i, n)
        },
        unproject: function (t) {
            for (var e, i = 180 / Math.PI, n = this.R, s = this.R_MINOR / n, a = Math.sqrt(1 - s * s), r = Math.exp(-t.y /
                    n), h = Math.PI / 2 - 2 * Math.atan(r), l = 0, d = .1; l < 15 && Math.abs(d) > 1e-7; l++) e = a *
                    Math.sin(h), e = Math.pow((1 - e) / (1 + e), a / 2), d = Math.PI / 2 - 2 * Math.atan(r * e) - h, h +=
                    d;
            return new o.LatLng(h * i, t.x * i / n)
        }
    }, o.CRS.EPSG3395 = o.extend({}, o.CRS.Earth, {
        code: "EPSG:3395",
        projection: o.Projection.Mercator,
        transformation: function () {
            var t = .5 / (Math.PI * o.Projection.Mercator.R);
            return new o.Transformation(t, .5, -t, .5)
        }()
    }), o.GridLayer = o.Layer.extend({
        options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: o.Browser.mobile,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: i,
            noWrap: !1,
            pane: "tilePane",
            className: "",
            keepBuffer: 2
        },
        initialize: function (t) {
            o.setOptions(this, t)
        },
        onAdd: function () {
            this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
        },
        beforeAdd: function (t) {
            t._addZoomLimit(this)
        },
        onRemove: function (t) {
            this._removeAllTiles(), o.DomUtil.remove(this._container), t._removeZoomLimit(this), this._container = null,
                this._tileZoom = null
        },
        bringToFront: function () {
            return this._map && (o.DomUtil.toFront(this._container), this._setAutoZIndex(Math.max)), this
        },
        bringToBack: function () {
            return this._map && (o.DomUtil.toBack(this._container), this._setAutoZIndex(Math.min)), this
        },
        getContainer: function () {
            return this._container
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._updateOpacity(), this
        },
        setZIndex: function (t) {
            return this.options.zIndex = t, this._updateZIndex(), this
        },
        isLoading: function () {
            return this._loading
        },
        redraw: function () {
            return this._map && (this._removeAllTiles(), this._update()), this
        },
        getEvents: function () {
            var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            return this.options.updateWhenIdle || (this._onMove || (this._onMove = o.Util.throttle(this._onMoveEnd,
                this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom),
                t
        },
        createTile: function () {
            return e.createElement("div")
        },
        getTileSize: function () {
            var t = this.options.tileSize;
            return t instanceof o.Point ? t : new o.Point(t, t)
        },
        _updateZIndex: function () {
            this._container && this.options.zIndex !== i && null !== this.options.zIndex && (this._container.style.zIndex =
                this.options.zIndex)
        },
        _setAutoZIndex: function (t) {
            for (var e, i = this.getPane().children, n = -t(-(1 / 0), 1 / 0), o = 0, s = i.length; o < s; o++) e = i[o]
                    .style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
            isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
        },
        _updateOpacity: function () {
            if (this._map && !o.Browser.ielt9) {
                o.DomUtil.setOpacity(this._container, this.options.opacity);
                var t = +new Date,
                    e = !1,
                    i = !1;
                for (var n in this._tiles) {
                    var s = this._tiles[n];
                    if (s.current && s.loaded) {
                        var a = Math.min(1, (t - s.loaded) / 200);
                        o.DomUtil.setOpacity(s.el, a), a < 1 ? e = !0 : (s.active && (i = !0), s.active = !0)
                    }
                }
                i && !this._noPrune && this._pruneTiles(), e && (o.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame =
                    o.Util.requestAnimFrame(this._updateOpacity, this))
            }
        },
        _initContainer: function () {
            this._container || (this._container = o.DomUtil.create("div", "leaflet-layer " + (this.options.className ||
                "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(
                this._container))
        },
        _updateLevels: function () {
            var t = this._tileZoom,
                e = this.options.maxZoom;
            if (t === i) return i;
            for (var n in this._levels) this._levels[n].el.children.length || n === t ? this._levels[n].el.style.zIndex =
                    e - Math.abs(t - n) : (o.DomUtil.remove(this._levels[n].el), this._removeTilesAtZoom(n), delete this
                    ._levels[n]);
            var s = this._levels[t],
                a = this._map;
            return s || (s = this._levels[t] = {}, s.el = o.DomUtil.create("div",
                "leaflet-tile-container leaflet-zoom-animated", this._container), s.el.style.zIndex = e, s.origin = a.project(
                a.unproject(a.getPixelOrigin()), t).round(), s.zoom = t, this._setZoomTransform(s, a.getCenter(), a.getZoom()),
                o.Util.falseFn(s.el.offsetWidth)), this._level = s, s
        },
        _pruneTiles: function () {
            if (this._map) {
                var t, e, i = this._map.getZoom();
                if (i > this.options.maxZoom || i < this.options.minZoom) return void this._removeAllTiles();
                for (t in this._tiles) e = this._tiles[t], e.retain = e.current;
                for (t in this._tiles) if (e = this._tiles[t], e.current && !e.active) {
                        var n = e.coords;
                        this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                    }
                for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
            }
        },
        _removeTilesAtZoom: function (t) {
            for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
        },
        _removeAllTiles: function () {
            for (var t in this._tiles) this._removeTile(t)
        },
        _invalidateAll: function () {
            for (var t in this._levels) o.DomUtil.remove(this._levels[t].el), delete this._levels[t];
            this._removeAllTiles(), this._tileZoom = null
        },
        _retainParent: function (t, e, i, n) {
            var s = Math.floor(t / 2),
                a = Math.floor(e / 2),
                r = i - 1,
                h = new o.Point(+s, +a);
            h.z = +r;
            var l = this._tileCoordsToKey(h),
                d = this._tiles[l];
            return d && d.active ? (d.retain = !0, !0) : (d && d.loaded && (d.retain = !0), r > n && this._retainParent(
                s, a, r, n))
        },
        _retainChildren: function (t, e, i, n) {
            for (var s = 2 * t; s < 2 * t + 2; s++) for (var a = 2 * e; a < 2 * e + 2; a++) {
                    var r = new o.Point(s, a);
                    r.z = i + 1;
                    var h = this._tileCoordsToKey(r),
                        l = this._tiles[h];
                    l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), i + 1 < n && this._retainChildren(
                        s, a, i + 1, n))
            }
        },
        _resetView: function (t) {
            var e = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
        },
        _animateZoom: function (t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate)
        },
        _setView: function (t, e, n, o) {
            var s = Math.round(e);
            (this.options.maxZoom !== i && s > this.options.maxZoom || this.options.minZoom !== i && s < this.options.minZoom) &&
                (s = i);
            var a = this.options.updateWhenZooming && s !== this._tileZoom;
            o && !a || (this._tileZoom = s, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(),
                s !== i && this._update(t), n || this._pruneTiles(), this._noPrune = !! n), this._setZoomTransforms(t,
                e)
        },
        _setZoomTransforms: function (t, e) {
            for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e)
        },
        _setZoomTransform: function (t, e, i) {
            var n = this._map.getZoomScale(i, t.zoom),
                s = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
            o.Browser.any3d ? o.DomUtil.setTransform(t.el, s, n) : o.DomUtil.setPosition(t.el, s)
        },
        _resetGrid: function () {
            var t = this._map,
                e = t.options.crs,
                i = this._tileSize = this.getTileSize(),
                n = this._tileZoom,
                o = this._map.getPixelWorldBounds(this._tileZoom);
            o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [
                    Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x /
                    i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0],
                    n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
        },
        _onMoveEnd: function () {
            this._map && !this._map._animatingZoom && this._update()
        },
        _getTiledPixelBounds: function (t) {
            var e = this._map,
                i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                n = e.getZoomScale(i, this._tileZoom),
                s = e.project(t, this._tileZoom).floor(),
                a = e.getSize().divideBy(2 * n);
            return new o.Bounds(s.subtract(a), s.add(a))
        },
        _update: function (t) {
            var n = this._map;
            if (n) {
                var s = n.getZoom();
                if (t === i && (t = n.getCenter()), this._tileZoom !== i) {
                    var a = this._getTiledPixelBounds(t),
                        r = this._pxBoundsToTileRange(a),
                        h = r.getCenter(),
                        l = [],
                        d = this.options.keepBuffer,
                        u = new o.Bounds(r.getBottomLeft().subtract([d, -d]), r.getTopRight().add([d, -d]));
                    for (var c in this._tiles) {
                        var p = this._tiles[c].coords;
                        p.z === this._tileZoom && u.contains(o.point(p.x, p.y)) || (this._tiles[c].current = !1)
                    }
                    if (Math.abs(s - this._tileZoom) > 1) return void this._setView(t, s);
                    for (var _ = r.min.y; _ <= r.max.y; _++) for (var m = r.min.x; m <= r.max.x; m++) {
                            var f = new o.Point(m, _);
                            if (f.z = this._tileZoom, this._isValidTile(f)) {
                                var g = this._tiles[this._tileCoordsToKey(f)];
                                g ? g.current = !0 : l.push(f)
                            }
                    }
                    if (l.sort(function (t, e) {
                        return t.distanceTo(h) - e.distanceTo(h)
                    }), 0 !== l.length) {
                        this._loading || (this._loading = !0, this.fire("loading"));
                        var v = e.createDocumentFragment();
                        for (m = 0; m < l.length; m++) this._addTile(l[m], v);
                        this._level.el.appendChild(v)
                    }
                }
            }
        },
        _isValidTile: function (t) {
            var e = this._map.options.crs;
            if (!e.infinite) {
                var i = this._globalTileRange;
                if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
                    return !1
            }
            if (!this.options.bounds) return !0;
            var n = this._tileCoordsToBounds(t);
            return o.latLngBounds(this.options.bounds).overlaps(n)
        },
        _keyToBounds: function (t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t))
        },
        _tileCoordsToBounds: function (t) {
            var e = this._map,
                i = this.getTileSize(),
                n = t.scaleBy(i),
                s = n.add(i),
                a = e.unproject(n, t.z),
                r = e.unproject(s, t.z);
            return this.options.noWrap || (a = e.wrapLatLng(a), r = e.wrapLatLng(r)), new o.LatLngBounds(a, r)
        },
        _tileCoordsToKey: function (t) {
            return t.x + ":" + t.y + ":" + t.z
        },
        _keyToTileCoords: function (t) {
            var e = t.split(":"),
                i = new o.Point(+e[0], +e[1]);
            return i.z = +e[2], i
        },
        _removeTile: function (t) {
            var e = this._tiles[t];
            e && (o.DomUtil.remove(e.el), delete this._tiles[t], this.fire("tileunload", {
                tile: e.el,
                coords: this._keyToTileCoords(t)
            }))
        },
        _initTile: function (t) {
            o.DomUtil.addClass(t, "leaflet-tile");
            var e = this.getTileSize();
            t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = o.Util.falseFn, t.onmousemove =
                o.Util.falseFn, o.Browser.ielt9 && this.options.opacity < 1 && o.DomUtil.setOpacity(t, this.options.opacity),
                o.Browser.android && !o.Browser.android23 && (t.style.WebkitBackfaceVisibility = "hidden")
        },
        _addTile: function (t, e) {
            var i = this._getTilePos(t),
                n = this._tileCoordsToKey(t),
                s = this.createTile(this._wrapCoords(t), o.bind(this._tileReady, this, t));
            this._initTile(s), this.createTile.length < 2 && o.Util.requestAnimFrame(o.bind(this._tileReady, this, t,
                null, s)), o.DomUtil.setPosition(s, i), this._tiles[n] = {
                el: s,
                coords: t,
                current: !0
            }, e.appendChild(s), this.fire("tileloadstart", {
                tile: s,
                coords: t
            })
        },
        _tileReady: function (t, e, i) {
            if (this._map) {
                e && this.fire("tileerror", {
                    error: e,
                    tile: i,
                    coords: t
                });
                var n = this._tileCoordsToKey(t);
                i = this._tiles[n], i && (i.loaded = +new Date, this._map._fadeAnimated ? (o.DomUtil.setOpacity(i.el, 0),
                    o.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = o.Util.requestAnimFrame(this._updateOpacity,
                    this)) : (i.active = !0, this._pruneTiles()), e || (o.DomUtil.addClass(i.el, "leaflet-tile-loaded"),
                    this.fire("tileload", {
                    tile: i.el,
                    coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), o.Browser.ielt9 || !this._map._fadeAnimated ?
                    o.Util.requestAnimFrame(this._pruneTiles, this) : setTimeout(o.bind(this._pruneTiles, this), 250)))
            }
        },
        _getTilePos: function (t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
        },
        _wrapCoords: function (t) {
            var e = new o.Point(this._wrapX ? o.Util.wrapNum(t.x, this._wrapX) : t.x, this._wrapY ? o.Util.wrapNum(t.y,
                this._wrapY) : t.y);
            return e.z = t.z, e
        },
        _pxBoundsToTileRange: function (t) {
            var e = this.getTileSize();
            return new o.Bounds(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
        },
        _noTilesToLoad: function () {
            for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
            return !0
        }
    }), o.gridLayer = function (t) {
        return new o.GridLayer(t)
    }, o.Util.extend(o.GridLayer.prototype, {
        options: o.Util.extend(o.GridLayer.prototype.options, {
            visible: !0,
            zIndex: 2
        }),
        onAdd: function () {
            this._initContainer(), this._levels = {}, this._tiles = {}, this.options.visible && (this._resetView(),
                this._update())
        },
        visible: function (t) {
            this.options.visible = t, this._container && this.options.visible !== i && null !== this.options.visible &&
                (this._container.style.display = t ? "block" : "none")
        },
        getVisible: function () {
            return this.options.visible
        },
        getOpacity: function () {
            return this.options.opacity
        },
        getZIndex: function (t) {
            return this.options.zIndex
        },
        _initContainer: function () {
            this._container || (this._container = o.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this.options
                .opacity < 1 && this._updateOpacity(), this._container.style.display = this.options.visible ? "block" :
                "none", this.getPane().appendChild(this._container))
        },
        _getTiledPixelBounds: function (t) {
            var e = this._map,
                i = e.project(t, this._tileZoom).floor(),
                n = e.getSize().divideBy(2);
            return new o.Bounds(i.subtract(n), i.add(n))
        },
        _update: function (t) {
            var n = this._map;
            if (n) {
                var s = n.getZoom();
                if (t === i && (t = n.getCenter()), this._tileZoom !== i) {
                    var a = this._getTiledPixelBounds(t),
                        r = this._pxBoundsToTileRange(a),
                        h = r.getCenter(),
                        l = [];
                    for (var d in this._tiles) this._tiles[d].current = !1;
                    if (Math.abs(s - this._tileZoom) > 1) return void this._setView(t, s);
                    for (var u = r.min.y; u <= r.max.y; u++) for (var c = r.min.x; c <= r.max.x; c++) {
                            var p = new o.Point(c, u);
                            if (p.z = this._tileZoom, this._isValidTile(p)) {
                                var _ = this._tiles[this._tileCoordsToKey(p)];
                                _ ? _.current = !0 : l.push(p)
                            }
                    }
                    if (l.sort(function (t, e) {
                        return t.distanceTo(h) - e.distanceTo(h)
                    }), 0 !== l.length) {
                        this._loading || (this._loading = !0, this.fire("loading"));
                        var m = e.createDocumentFragment();
                        for (c = 0; c < l.length; c++) this._addTile(l[c], m);
                        this._level.el.appendChild(m)
                    }
                }
            }
        },
        _getTilePos: function (t) {
            var e = this._map;
            return t.scaleBy(this.getTileSize(), e.options.crs.code).subtract(this._level.origin)
        }
    }), o.TileLayer = o.GridLayer.extend({
        options: {
            minZoom: 0,
            maxZoom: 18,
            maxNativeZoom: null,
            minNativeZoom: null,
            subdomains: "abc",
            errorTileUrl: "",
            zoomOffset: 0,
            tms: !1,
            zoomReverse: !1,
            detectRetina: !1,
            crossOrigin: !1
        },
        initialize: function (t, e) {
            this._url = t, e = o.setOptions(this, e), e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize =
                Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--),
                e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split(
                "")), o.Browser.android || this.on("tileunload", this._onTileRemove)
        },
        setUrl: function (t, e) {
            return this._url = t, e || this.redraw(), this
        },
        createTile: function (t, i) {
            var n = e.createElement("img");
            return o.DomEvent.on(n, "load", o.bind(this._tileOnLoad, this, i, n)), o.DomEvent.on(n, "error", o.bind(
                this._tileOnError, this, i, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.setAttribute(
                "role", "presentation"), n.src = this.getTileUrl(t), n
        },
        getTileUrl: function (t) {
            var e = {
                r: o.Browser.retina ? "@2x" : "",
                s: this._getSubdomain(t),
                x: t.x,
                y: t.y,
                z: this._getZoomForUrl()
            };
            if (this._map && !this._map.options.crs.infinite) {
                var i = this._globalTileRange.max.y - t.y;
                this.options.tms && (e.y = i), e["-y"] = i
            }
            return o.Util.template(this._url, o.extend(e, this.options))
        },
        _tileOnLoad: function (t, e) {
            o.Browser.ielt9 ? setTimeout(o.bind(t, this, null, e), 0) : t(null, e)
        },
        _tileOnError: function (t, e, i) {
            var n = this.options.errorTileUrl;
            n && (e.src = n), t(i, e)
        },
        getTileSize: function () {
            var t = this._map,
                e = o.GridLayer.prototype.getTileSize.call(this),
                i = this._tileZoom + this.options.zoomOffset,
                n = this.options.minNativeZoom,
                s = this.options.maxNativeZoom;
            return null !== n && i < n ? e.divideBy(t.getZoomScale(n, i)).round() : null !== s && i > s ? e.divideBy(t.getZoomScale(
                s, i)).round() : e
        },
        _onTileRemove: function (t) {
            t.tile.onload = null
        },
        _getZoomForUrl: function () {
            var t = this._tileZoom,
                e = this.options.maxZoom,
                i = this.options.zoomReverse,
                n = this.options.zoomOffset,
                o = this.options.minNativeZoom,
                s = this.options.maxNativeZoom;
            return i && (t = e - t), t += n, null !== o && t < o ? o : null !== s && t > s ? s : t
        },
        _getSubdomain: function (t) {
            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[e]
        },
        _abortLoading: function () {
            var t, e;
            for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = o.Util
                    .falseFn, e.onerror = o.Util.falseFn, e.complete || (e.src = o.Util.emptyImageUrl, o.DomUtil.remove(
                    e)))
        }
    }), o.tileLayer = function (t, e) {
        return new o.TileLayer(t, e)
    }, o.Util.extend(o.TileLayer.prototype, {
        options: o.Util.extend(o.TileLayer.prototype.options, {
            tileSize: 256
        }),
        createTile: function (t, i) {
            var n = e.createElement("img");
            return o.DomEvent.on(n, "load", o.bind(this._tileOnLoad, this, i, n)), o.DomEvent.on(n, "error", o.bind(
                this._tileOnError, this, i, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.src =
                this.getTileUrl(t.x, t.y, this._getZoomForUrl(), t), n
        },
        getTileUrl: function (t, e, i, n) {
            return o.Util.template(this._url, o.extend({
                r: this.options.detectRetina && o.Browser.retina && this.options.maxZoom > 0 ? "@2x" : "",
                s: this._getSubdomain(n),
                x: t,
                y: this.options.tms ? this._globalTileRange.max.y - e : e,
                z: i
            }, this.options))
        },
        setTileUrlFunc: function (t) {
            this.getTileUrl = t
        }
    }), o.TileLayer.WMS = o.TileLayer.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1,
            version: "1.1.1"
        },
        options: {
            crs: null,
            uppercase: !1
        },
        initialize: function (t, e) {
            this._url = t;
            var i = o.extend({}, this.defaultWmsParams);
            for (var n in e) n in this.options || (i[n] = e[n]);
            e = o.setOptions(this, e), i.width = i.height = e.tileSize * (e.detectRetina && o.Browser.retina ? 2 : 1),
                this.wmsParams = i
        },
        onAdd: function (t) {
            this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
            this.wmsParams[e] = this._crs.code, o.TileLayer.prototype.onAdd.call(this, t)
        },
        getTileUrl: function (t) {
            var e = this._tileCoordsToBounds(t),
                i = this._crs.project(e.getNorthWest()),
                n = this._crs.project(e.getSouthEast()),
                s = (this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [n.y, i.x, i.y, n.x] : [i.x, n.y, n.x, i
                        .y]).join(","),
                a = o.TileLayer.prototype.getTileUrl.call(this, t);
            return a + o.Util.getParamString(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ?
                "&BBOX=" : "&bbox=") + s
        },
        setParams: function (t, e) {
            return o.extend(this.wmsParams, t), e || this.redraw(), this
        }
    }), o.tileLayer.wms = function (t, e) {
        return new o.TileLayer.WMS(t, e)
    }, o.Util.extend(o.TileLayer.WMS.prototype, {
        defaultWmsParams: o.Util.extend(o.TileLayer.WMS.prototype.defaultWmsParams, {
            version: "1.1.0",
            format: "image/png",
            layers: "default",
            transparent: !0
        }),
        getTileUrl: function (t, e, i, n) {
            var s = this._tileCoordsToBounds(n),
                a = this._crs.project(s.getNorthWest()),
                r = this._crs.project(s.getSouthEast()),
                h = [a.x, r.y, r.x, a.y].join(","),
                l = o.TileLayer.prototype.getTileUrl.call(this, t, e, i, n);
            return l + o.Util.getParamString(this.wmsParams, l, this.options.uppercase) + (this.options.uppercase ?
                "&BBOX=" : "&bbox=") + h
        }
    }), o.TileLayer.WMTS = o.TileLayer.extend({
        defaultWmsParams: {
            service: "WMTS",
            request: "GetTile",
            version: "1.0.0",
            layer: "default",
            format: "image/jpeg",
            uppercase: !1,
            style: "normal",
            tilematrixSet: ""
        },
        options: {
            crs: null,
            uppercase: !1
        },
        initialize: function (t, e) {
            this._url = t;
            var i = o.extend({}, this.defaultWmsParams);
            for (var n in e) n in i && (i[n] = e[n]);
            e = o.setOptions(this, e), i.width = i.height = e.tileSize * (e.detectRetina && o.Browser.retina ? 2 : 1),
                this.wmsParams = i
        },
        onAdd: function (t) {
            this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version), o.TileLayer
                .prototype.onAdd.call(this, t)
        },
        getTileUrl: function (t, e, i, n) {
            var s = o.TileLayer.prototype.getTileUrl.call(this, t, e, i, n);
            if (this.options.uppercase) var a = "&TILECOL=" + t + "&TILEROW=" + (this.options.tms ? this._globalTileRange
                    .max.y - e : String(e)) + "&TILEMATRIX=" + String(i);
            else var a = "&tilecol=" + t + "&tilerow=" + (this.options.tms ? this._globalTileRange.max.y - e : String(e)) +
                    "&tilematrix=" + String(i);
            return s + o.Util.getParamString(this.wmsParams, s, this.options.uppercase) + a
        },
        setParams: function (t, e) {
            return o.extend(this.wmsParams, t), e || this.redraw(), this
        }
    }), o.tileLayer.wmts = function (t, e) {
        return new o.TileLayer.WMTS(t, e)
    }, o.ImageOverlay = o.Layer.extend({
        options: {
            opacity: 1,
            alt: "",
            interactive: !1,
            crossOrigin: !1
        },
        initialize: function (t, e, i) {
            this._url = t, this._bounds = o.latLngBounds(e), o.setOptions(this, i)
        },
        onAdd: function () {
            this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive &&
                (o.DomUtil.addClass(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane()
                .appendChild(this._image), this._reset()
        },
        onRemove: function () {
            o.DomUtil.remove(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._image && this._updateOpacity(), this
        },
        setStyle: function (t) {
            return t.opacity && this.setOpacity(t.opacity), this
        },
        bringToFront: function () {
            return this._map && o.DomUtil.toFront(this._image), this
        },
        bringToBack: function () {
            return this._map && o.DomUtil.toBack(this._image), this
        },
        setUrl: function (t) {
            return this._url = t, this._image && (this._image.src = t), this
        },
        setBounds: function (t) {
            return this._bounds = t, this._map && this._reset(), this
        },
        getEvents: function () {
            var t = {
                zoom: this._reset,
                viewreset: this._reset
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
        },
        getBounds: function () {
            return this._bounds
        },
        getElement: function () {
            return this._image
        },
        _initImage: function () {
            var t = this._image = o.DomUtil.create("img", "leaflet-image-layer " + (this._zoomAnimated ?
                "leaflet-zoom-animated" : ""));
            t.onselectstart = o.Util.falseFn, t.onmousemove = o.Util.falseFn, t.onload = o.bind(this.fire, this, "load"),
                this.options.crossOrigin && (t.crossOrigin = ""), t.src = this._url, t.alt = this.options.alt
        },
        _animateZoom: function (t) {
            var e = this._map.getZoomScale(t.zoom),
                i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
            o.DomUtil.setTransform(this._image, i, e)
        },
        _reset: function () {
            var t = this._image,
                e = new o.Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(
                    this._bounds.getSouthEast())),
                i = e.getSize();
            o.DomUtil.setPosition(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px"
        },
        _updateOpacity: function () {
            o.DomUtil.setOpacity(this._image, this.options.opacity)
        }
    }), o.imageOverlay = function (t, e, i) {
        return new o.ImageOverlay(t, e, i)
    }, o.Icon = o.Class.extend({
        initialize: function (t) {
            o.setOptions(this, t)
        },
        createIcon: function (t) {
            return this._createIcon("icon", t)
        },
        createShadow: function (t) {
            return this._createIcon("shadow", t)
        },
        _createIcon: function (t, e) {
            var i = this._getIconUrl(t);
            if (!i) {
                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
            return this._setIconStyles(n, t), n
        },
        _setIconStyles: function (t, e) {
            var i = this.options,
                n = i[e + "Size"];
            "number" == typeof n && (n = [n, n]);
            var s = o.point(n),
                a = o.point("shadow" === e && i.shadowAnchor || i.iconAnchor || s && s.divideBy(2, !0));
            t.className = "leaflet-marker-" + e + " " + (i.className || ""), a && (t.style.marginLeft = -a.x + "px", t.style
                .marginTop = -a.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px")
        },
        _createImg: function (t, i) {
            return i = i || e.createElement("img"), i.src = t, i
        },
        _getIconUrl: function (t) {
            return o.Browser.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
        }
    }), o.icon = function (t) {
        return new o.Icon(t)
    }, o.VectorIcon = {}, o.VectorIcon.version = "1.0.0", o.VectorIcon.MAP_POINT_PIN =
        "M16,1 C7.7146,1 1,7.65636364 1,15.8648485 C1,24.0760606 16,51 16,51 C16,51 31,24.0760606 31,15.8648485 C31,7.65636364 24.2815,1 16,1 L16,1 Z",
        o.VectorIcon.Icon = o.Icon.extend({
        options: {
            iconSize: [0, 0],
            anchor: [15, 50],
            offset: [0, 0],
            popupAnchor: [0, -50],
            shadowAnchor: [7, 45],
            shadowSize: [54, 51],
            className: "vector-marker",
            prefix: "fa",
            spinClass: "fa-spin",
            extraClasses: "",
            icon: "home",
            markerColor: "blue",
            iconColor: "white",
            type: 1,
            width: 0,
            height: 0
        },
        initialize: function (t) {
            return t = o.Util.setOptions(this, t)
        },
        createIcon: function (t) {
            var i, n, s, a, r, h = "";
            i = t && "DIV" === t.tagName ? t : e.createElement("div"), n = this.options, n.icon && (h = this._createInner()),
                a = "filter:alpha(opacity=" + 10 * n.alpha + ");opacity:" + n.alpha, s = o.VectorIcon.MAP_POINT_PIN;
            var l = n.iconSize[0] + Number(n.strokewidth),
                d = n.iconSize[1] + Number(n.strokewidth);
            return 1 == n.type ? (l = 32, d = 52, r = '<path d="' + s + '" fill="' + n.markerColor + '" stroke="' + n.strokecolor +
                '" stroke-width="' + n.strokewidth + '" style="' + a + '"></path>') : 2 == n.type ? r = '<rect x="' +
                Math.floor(n.strokewidth) + '" y="' + n.strokewidth + '" width="' + Math.floor(n.iconSize[0] - n.strokewidth) +
                '" height="' + Math.floor(n.iconSize[1] - n.strokewidth) + '" fill="' + n.markerColor + '" stroke="' +
                n.strokecolor + '" stroke-width="' + n.strokewidth + '" style="' + a + '"></rect>' : 3 == n.type && (r =
                '<circle cx="' + Math.floor(n.iconSize[0] / 2 + n.strokewidth) + '" cy="' + Math.floor(n.iconSize[1] /
                2 + n.strokewidth) + '" r="' + (Math.floor(n.iconSize[1] / 2) - n.strokewidth) + '" fill="' + n.markerColor +
                '" stroke="' + n.strokecolor + '" stroke-width="' + n.strokewidth + '" style="' + a + '"></circle>'), i
                .innerHTML = '<svg width="' + n.iconSize[0] + 'px" height="' + n.iconSize[1] + 'px" viewBox="0 0 ' + l +
                " " + d +
                '" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + r +
                h + "</svg>", this._setIconStyles(i, "icon"), i
        },
        _createInner: function () {
            var t, e, i, n, o;
            return t = void 0, n = "", e = "", i = "", o = this.options, t = "" === o.prefix || o.icon.slice(0, o.prefix
                .length + 1) === o.prefix + "-" ? o.icon : o.prefix + "-" + o.icon, o.spin && "string" == typeof o.spinClass &&
                (n = o.spinClass), o.iconColor && ("white" === o.iconColor || "black" === o.iconColor ? e = "icon-" + o
                .iconColor : i = "style='color: " + o.iconColor + "' "), "<i " + i + "class='" + o.extraClasses + " " +
                o.prefix + " " + t + " " + n + " " + e + "'></i>"
        },
        _setIconStyles: function (t, e) {
            var i = this.options,
                n = i.iconSize || [23, 36],
                s = o.point(i.offset) || {
                    x: 0,
                    y: 0
                }, a = i.anchor || {
                    x: 0,
                    y: 0
                }, r = (i[e + "Visibility"], "");
            a && (t.style.marginLeft = -a.x + "px", t.style.marginTop = -a.y + "px"), s && (t.style.left = s.x + "px",
                t.style.top = s.y + "px"), n && (t.style.width = n.x + "px", t.style.height = n.y + "px"), t.style.visibility =
                r, t.className = "vector-marker-" + e + " " + i.className, t.style.position = "relative"
        },
        createShadow: function () {
            var t;
            return t = e.createElement("div"), this._setIconStyles(t, "shadow"), t
        }
    }), o.VectorIcon.icon = function (t) {
        return new o.VectorIcon.Icon(t)
    }, o.ImagDivIcon = o.Icon.extend({
        updateIcon: function (t, e) {
            this._setIconStyles(t, e)
        },
        _createIcon: function (t, e) {
            var i = this._getIconUrl(t);
            if (!i) {
                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            var n = this._createImg(e && "IMG" === e.tagName ? e : null);
            return n.src = i, this._setIconStyles(n, t), n
        },
        _setIconStyles: function (t, e) {
            var i = this.options,
                n = o.point(i[e + "Size"]),
                s = o.point(i.offset) || {
                    x: 0,
                    y: 0
                }, a = i.anchor || {
                    x: 0,
                    y: 0
                }, r = (i[e + "Visibility"], ""),
                h = o.point(i[e + "Position"]) || {
                    x: 0,
                    y: 0
                };
            t.className = "leaflet-marker-" + e + " " + (i.className || ""), a && (t.style.marginLeft = -a.x + s.x +
                "px", t.style.marginTop = -a.y + s.y + "px"), n && (t.style.width = n.x + "px", t.style.height = n.y +
                "px"), t.src && (t.style.background = "url(" + t.src + ") no-repeat  " + h.x + "px  " + h.y + "px"), t.style
                .visibility = r
        },
        _createImg: function (t, i) {
            return i = i || e.createElement("div")
        }
    }), o.TextDivIcon = o.ImagDivIcon.extend({
        options: {
            iconUrl: "",
            text: "",
            style: "",
            shadowUrl: null,
            iconSize: new o.Point(25, 41),
            iconAnchor: new o.Point(13, 41),
            popupAnchor: new o.Point(0, -33),
            className: "leaflet-div-icon"
        },
        createIcon: function (t) {
            return this._createIcon("icon", t)
        },
        _createIcon: function (t, i) {
            var n = this._getIconUrl(t);
            if (!n) {
                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            var o = e.createElement("div"),
                s = this._createImg(i && "IMG" === i.tagName ? i : null);
            s.src = n;
            var a = e.createElement("div");
            return a.setAttribute("class", this.options.style), a.innerHTML = this.options.text || "", o.appendChild(s),
                o.appendChild(a), this._setIconStyles(o, s, "icon"), o
        },
        _setIconStyles: function (t, e, i) {
            var n = this.options,
                s = o.point(n[i + "Size"]),
                a = o.point(n.offset) || {
                    x: 0,
                    y: 0
                }, r = n.anchor || {
                    x: 0,
                    y: 0
                }, h = (n[i + "Visibility"], ""),
                l = o.point(n[i + "Position"]) || {
                    x: 0,
                    y: 0
                };
            t.className = "leador-marker-" + i + " " + (n.className || ""), r && (t.style.marginLeft = -r.x + a.x +
                "px", t.style.marginTop = -r.y + a.y + "px"), s && (e.style.width = s.x + "px", e.style.height = s.y +
                "px", t.style.width = s.x + "px", t.style.height = s.y + "px"), e.src && (e.style.background = "url(" +
                e.src + ") no-repeat  " + l.x + "px  " + l.y + "px"), t.style.visibility = h
        },
        createShadow: function () {
            return null
        }
    }), o.Icon.Default = o.Icon.extend({
        options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        },
        _getIconUrl: function (t) {
            return o.Icon.Default.imagePath || (o.Icon.Default.imagePath = this._detectIconPath()), (this.options.imagePath ||
                o.Icon.Default.imagePath) + o.Icon.prototype._getIconUrl.call(this, t)
        },
        _detectIconPath: function () {
            var t = o.DomUtil.create("div", "leaflet-default-icon-path", e.body),
                i = o.DomUtil.getStyle(t, "background-image") || o.DomUtil.getStyle(t, "backgroundImage");
            return e.body.removeChild(t), 0 === i.indexOf("url") ? i.replace(/^url\([\"\']?/, "").replace(
                /marker-icon\.png[\"\']?\)$/, "") : ""
        }
    }), o.Marker = o.Layer.extend({
        options: {
            icon: new o.Icon.Default,
            interactive: !0,
            draggable: !1,
            keyboard: !0,
            title: "",
            alt: "",
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250,
            pane: "markerPane",
            nonBubblingEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"]
        },
        initialize: function (t, e) {
            o.setOptions(this, e), this._latlng = o.latLng(t)
        },
        onAdd: function (t) {
            this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on(
                "zoomanim", this._animateZoom, this), this._initIcon(), this.update()
        },
        onRemove: function (t) {
            this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()),
                this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
        },
        getEvents: function () {
            return {
                zoom: this.update,
                viewreset: this.update
            }
        },
        getLatLng: function () {
            return this._latlng
        },
        setLatLng: function (t) {
            var e = this._latlng;
            return this._latlng = o.latLng(t), this.update(), this.fire("move", {
                oldLatLng: e,
                latlng: this._latlng
            })
        },
        setZIndexOffset: function (t) {
            return this.options.zIndexOffset = t, this.update()
        },
        setIcon: function (t) {
            return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(
                this._popup, this._popup.options), this
        },
        getElement: function () {
            return this._icon
        },
        update: function () {
            if (this._icon) {
                var t = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(t)
            }
            return this
        },
        _initIcon: function () {
            var t = this.options,
                e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                i = t.icon.createIcon(this._icon),
                n = !1;
            i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), t.alt && (i.alt =
                t.alt)), o.DomUtil.addClass(i, e), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover &&
                this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            var s = t.icon.createShadow(this._shadow),
                a = !1;
            s !== this._shadow && (this._removeShadow(), a = !0), s && o.DomUtil.addClass(s, e), this._shadow = s, t.opacity <
                1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), s &&
                a && this.getPane("shadowPane").appendChild(this._shadow)
        },
        _removeIcon: function () {
            this.options.riseOnHover && this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }), o.DomUtil.remove(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
        },
        _removeShadow: function () {
            this._shadow && o.DomUtil.remove(this._shadow), this._shadow = null
        },
        _setPos: function (t) {
            o.DomUtil.setPosition(this._icon, t), this._shadow && o.DomUtil.setPosition(this._shadow, t), this._zIndex =
                t.y + this.options.zIndexOffset, this._resetZIndex()
        },
        _updateZIndex: function (t) {
            this._icon.style.zIndex = this._zIndex + t
        },
        _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(e)
        },
        _initInteraction: function () {
            if (this.options.interactive && (o.DomUtil.addClass(this._icon, "leaflet-interactive"), this.addInteractiveTarget(
                this._icon), o.Handler.MarkerDrag)) {
                var t = this.options.draggable;
                this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new o.Handler.MarkerDrag(
                    this), t && this.dragging.enable()
            }
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._map && this._updateOpacity(), this
        },
        _updateOpacity: function () {
            var t = this.options.opacity;
            o.DomUtil.setOpacity(this._icon, t), this._shadow && o.DomUtil.setOpacity(this._shadow, t)
        },
        _bringToFront: function () {
            this._updateZIndex(this.options.riseOffset)
        },
        _resetZIndex: function () {
            this._updateZIndex(0)
        },
        _getPopupAnchor: function () {
            return this.options.icon.options.popupAnchor || [0, 0]
        },
        _getTooltipAnchor: function () {
            return this.options.icon.options.tooltipAnchor || [0, 0]
        }
    }), o.marker = function (t, e) {
        return new o.Marker(t, e)
    }, o.Util.extend(o.Marker.prototype, {
        options: o.Util.extend(o.Marker.prototype.options, {
            zIndexOffset: 2,
            raiseOnDrag: !1,
            angleOffsetX: null,
            rotate: 0
        }),
        getIcon: function () {
            return this.options.icon
        },
        rotate: function (t) {
            this.options.rotate = t, this.update()
        },
        _initIcon: function () {
            var t = this.options,
                e = ("leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), t.icon.createIcon(this._icon,
                    "marker")),
                i = !1;
            if (e !== this._icon && (this._icon && this._removeIcon(), i = !0, t.title && (e.title = t.title), t.alt &&
                (e.alt = t.alt)), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }), t.opacity < 1 && this._updateOpacity(), i) if (t.icon.options.isBefore) {
                    var n = this.getPane().childNodes[0];
                    n ? this.getPane().insertBefore(this._icon, n) : this.getPane().appendChild(this._icon)
                } else this.getPane().appendChild(this._icon);
            this._initInteraction()
        },
        _removeIcon: function () {
            this.options.riseOnHover && this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }), this._icon && (o.DomUtil.remove(this._icon), this.removeInteractiveTarget(this._icon)), this._icon =
                null
        },
        _setPos: function (t) {
            var e = this._icon;
            if (o.Browser.ie) {
                e.style.left = t.x + "px", e.style.top = t.y + "px", e.style.position = "absolute";
                var i = this._transform();
                if (i) e.style[i] = "rotate(" + this.options.rotate + "deg)";
                else {
                    var n = Math.cos(this.options.rotate * Math.PI / 180),
                        s = Math.sin(this.options.rotate * Math.PI / 180);
                    e.style.filter = "progid:DXImageTransform.Microsoft.Matrix(" + self.sizingMethod + ",M11=" + n +
                        ",M12=" + -s + ",M21=" + s + ",M22=" + n + ")"
                }
            } else o.DomUtil.setPosition(this._icon, t, this.options.rotate);
            this._shadow && o.DomUtil.setPosition(this._shadow, t), this.options.zIndexOffset != -1 && (this._zIndex =
                this.options.zIndexOffset), this._resetZIndex()
        },
        _transform: function () {
            for (var t = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"], i = 0; i < t.length; i++) if (
                    t[i] in e.documentElement.style) return t[i];
            return !1
        },
        _updateZIndex: function (t) {
            this._icon && (this._icon.style.zIndex = this._zIndex + t)
        }
    }), o.Util.extend(o.Icon.prototype, {
        updateIcon: function (t, e) {
            this._setIconStyles(t, e)
        },
        _setIconStyles: function (t, e) {
            var i = this.options,
                n = i[e + "Size"],
                s = o.point(i[e + "Position"]) || {
                    x: 0,
                    y: 0
                };
            "number" == typeof n && (n = [n, n]);
            var a = o.point(n),
                r = o.point(i.offset) || {
                    x: 0,
                    y: 0
                }, h = i.anchor || {
                    x: 0,
                    y: 0
                };
            t.className = "leaflet-marker-" + e + " " + (i.className || ""), h && (t.style.marginLeft = -h.x + r.x +
                "px", t.style.marginTop = -h.y + r.y + "px"), a && (t.style.width = a.x + "px", t.style.height = a.y +
                "px"), t.imgurl && (t.style.background = "url(" + t.imgurl + ") no-repeat  " + s.x + "px  " + s.y +
                "px")
        },
        _createDiv: function (t, i) {
            return i = i || e.createElement("div")
        },
        _createImg: function (t, i) {
            return i = i || e.createElement("img"), i.src = t, i
        },
        createIcon: function (t, e) {
            return this._createIcon("icon", t, e)
        },
        _createIcon: function (t, e, i) {
            var n = this._getIconUrl(t);
            if (!n) {
                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            if ("marker" == i) {
                var o = this._createDiv(e && "IMG" === e.tagName ? e : null);
                o.imgurl = n
            } else if ("groundimage" == i) var o = this._createImg(n, e && "IMG" === e.tagName ? e : null);
            return this._setIconStyles(o, t), o
        }
    }), o.GroundImage = o.Marker.extend({
        initialize: function (t, e) {
            o.setOptions(this, e), t && (this._bounds = o.latLngBounds(t), this._latlng = o.latLng(t.getNorthWest()))
        },
        update: function () {
            var t = this._icon;
            if (t) {
                var e = this._getIconSize({
                    zoom: this._map.getZoom(),
                    center: this._map.getCenter()
                }),
                    i = new o.point(e[0] * this.options.anchor[0], e[1] * this.options.anchor[1]),
                    n = this.options.offset;
                t.style.marginLeft = -i.x + n.x + "px", t.style.marginTop = -i.y + n.y + "px", t.style.width = e[0] +
                    "px", t.style.height = e[1] + "px";
                var s = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(s)
            }
            return this
        },
        setBounds: function (t, e) {
            if (this._bounds = o.latLngBounds(t), this._latlng = o.latLng(t.getNorthWest()), !e) {
                var i = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(i)
            }
        },
        getBounds: function () {
            return this._bounds
        },
        _initIcon: function () {
            var t = this.options,
                e = t.icon.createIcon(this._icon, "groundimage"),
                i = !1;
            e !== this._icon && (this._icon && this._removeIcon(), i = !0, t.title && (e.title = t.title), t.alt && (e.alt =
                t.alt)), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }), t.opacity < 1 && this._updateOpacity(), i && this.getPane().appendChild(this._icon), this._initInteraction()
        },
        _setPos: function (t) {
            o.DomUtil.setPosition(this._icon, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
        },
        _animateZoom: function (t) {
            this.update()
        },
        _initInteraction: function () {
            if (this.options.interactive && (o.DomUtil.addClass(this._icon, "leaflet-interactive"), this.addInteractiveTarget(
                this._icon), o.Handler.GroundImageDrag)) {
                var t = this.options.draggable;
                this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new o.Handler.GroundImageDrag(
                    this), t && this.dragging.enable()
            }
        },
        _getIconSize: function (t) {
            var e = this._map;
            if (!e) return [0, 0];
            var i = this._map._latLngToNewLayerPoint(this._bounds.getNorthWest(), t.zoom, t.center).round(),
                n = this._map._latLngToNewLayerPoint(this._bounds.getSouthEast(), t.zoom, t.center).round();
            return [n.x - i.x, n.y - i.y]
        }
    }), o.DivIcon = o.Icon.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function (t) {
            var i = t && "DIV" === t.tagName ? t : e.createElement("div"),
                n = this.options;
            if (i.innerHTML = n.html !== !1 ? n.html : "", n.bgPos) {
                var s = o.point(n.bgPos);
                i.style.backgroundPosition = -s.x + "px " + -s.y + "px"
            }
            return this._setIconStyles(i, "icon"), i
        },
        createShadow: function () {
            return null
        }
    }), o.divIcon = function (t) {
        return new o.DivIcon(t)
    },
    function (t) {
        o.Icon.Pulse = o.DivIcon.extend({
            options: {
                className: "",
                iconSize: [1, 1],
                color: "red",
                animate: !0,
                heartbeat: 2
            },
            initialize: function (t) {
                o.setOptions(this, t);
                var i = "lpi-" + (new Date).getTime() + "-" + Math.round(1e5 * Math.random()),
                    n = ["background-color: " + this.options.color],
                    s = ["box-shadow: 0 0 35px 20px " + this.options.color, "animation: pulsate " + this.options.heartbeat +
                            "s ease-out", "animation-iteration-count: infinite", "animation-delay: " + (this.options.heartbeat +
                            .1) + "s"];
                this.options.animate || (s.push("animation: none"), s.push("box-shadow:none"));
                var a = ["." + i + "{" + n.join(";") + ";}", "." + i + ":after{" + s.join(";") + ";}"].join(""),
                    r = e.createElement("style");
                r.styleSheet ? r.styleSheet.cssText = a : r.appendChild(e.createTextNode(a)), e.getElementsByTagName(
                    "head")[0].appendChild(r), this.options.className = this.options.className +
                    " leaflet-pulsing-icon " + i, o.DivIcon.prototype.initialize.call(this, t)
            }
        }), o.icon.pulse = function (t) {
            return new o.Icon.Pulse(t)
        }, o.Marker.Pulse = o.Marker.extend({
            initialize: function (t, e) {
                e.icon = o.icon.pulse(e), o.Marker.prototype.initialize.call(this, t, e)
            }
        }), o.marker.pulse = function (t, e) {
            return new o.Marker.Pulse(t, e)
        }
    }(t), o.Util.extend(o.DivIcon.prototype, {
        createIcon: function (t) {
            var i = t && "DIV" === t.tagName ? t : e.createElement("div"),
                n = this.options;
            return i.innerHTML = n.html !== !1 ? n.html : "", n.bgPos && (i.style.backgroundPosition = -n.bgPos.x +
                "px " + -n.bgPos.y + "px"), this._setIconStyles(i, "icon"), i
        }
    }), o.DivOverlay = o.Layer.extend({
        options: {
            offset: [0, 7],
            className: "",
            pane: "popupPane"
        },
        initialize: function (t, e) {
            o.setOptions(this, t), this._source = e
        },
        onAdd: function (t) {
            this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && o.DomUtil.setOpacity(
                this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container),
                this.update(), t._fadeAnimated && o.DomUtil.setOpacity(this._container, 1), this.bringToFront()
        },
        onRemove: function (t) {
            t._fadeAnimated ? (o.DomUtil.setOpacity(this._container, 0), this._removeTimeout = setTimeout(o.bind(o.DomUtil
                .remove, o.DomUtil, this._container), 200)) : o.DomUtil.remove(this._container)
        },
        getLatLng: function () {
            return this._latlng
        },
        setLatLng: function (t) {
            return this._latlng = o.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
        },
        getContent: function () {
            return this._content
        },
        setContent: function (t) {
            return this._content = t, this.update(), this
        },
        getElement: function () {
            return this._container
        },
        update: function () {
            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(),
                this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
        },
        getEvents: function () {
            var t = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
        },
        isOpen: function () {
            return !!this._map && this._map.hasLayer(this)
        },
        bringToFront: function () {
            return this._map && o.DomUtil.toFront(this._container), this
        },
        bringToBack: function () {
            return this._map && o.DomUtil.toBack(this._container), this
        },
        _updateContent: function () {
            if (this._content) {
                var t = this._contentNode,
                    e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                if ("string" == typeof e) t.innerHTML = e;
                else {
                    for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.appendChild(e)
                }
                this.fire("contentupdate")
            }
        },
        _updatePosition: function () {
            if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng),
                    e = o.point(this.options.offset),
                    i = this._getAnchor();
                this._zoomAnimated ? o.DomUtil.setPosition(this._container, t.add(i)) : e = e.add(t).add(i);
                var n = this._containerBottom = -e.y,
                    s = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                this._container.style.bottom = n + "px", this._container.style.left = s + "px"
            }
        },
        _getAnchor: function () {
            return [0, 0]
        }
    }), o.Popup = o.DivOverlay.extend({
        options: {
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            autoPan: !0,
            autoPanPaddingTopLeft: null,
            autoPanPaddingBottomRight: null,
            autoPanPadding: [5, 5],
            keepInView: !1,
            closeButton: !0,
            autoClose: !0,
            className: ""
        },
        openOn: function (t) {
            return t.openPopup(this), this
        },
        onAdd: function (t) {
            o.DivOverlay.prototype.onAdd.call(this, t), t.fire("popupopen", {
                popup: this
            }), this._source && (this._source.fire("popupopen", {
                popup: this
            }, !0), this._source instanceof o.Path || this._source.on("preclick", o.DomEvent.stopPropagation))
        },
        onRemove: function (t) {
            o.DivOverlay.prototype.onRemove.call(this, t), t.fire("popupclose", {
                popup: this
            }), this._source && (this._source.fire("popupclose", {
                popup: this
            }, !0), this._source instanceof o.Path || this._source.off("preclick", o.DomEvent.stopPropagation))
        },
        getEvents: function () {
            var t = o.DivOverlay.prototype.getEvents.call(this);
            return ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) &&
                (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
        },
        _close: function () {
            this._map && this._map.closePopup(this)
        },
        _initLayout: function () {
            var t = "leaflet-popup",
                e = this._container = o.DomUtil.create("div", t + " " + (this.options.className || "") +
                    " leaflet-zoom-animated");
            if (this.options.closeButton) {
                var i = this._closeButton = o.DomUtil.create("a", t + "-close-button", e);
                i.href = "#close", i.innerHTML = "×", o.DomEvent.on(i, "click", this._onCloseButtonClick, this)
            }
            var n = this._wrapper = o.DomUtil.create("div", t + "-content-wrapper", e);
            this._contentNode = o.DomUtil.create("div", t + "-content", n), o.DomEvent.disableClickPropagation(n).disableScrollPropagation(
                this._contentNode).on(n, "contextmenu", o.DomEvent.stopPropagation), this._tipContainer = o.DomUtil.create(
                "div", t + "-tip-container", e), this._tip = o.DomUtil.create("div", t + "-tip", this._tipContainer)
        },
        _updateLayout: function () {
            var t = this._contentNode,
                e = t.style;
            e.width = "", e.whiteSpace = "nowrap";
            var i = t.offsetWidth;
            i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace =
                "", e.height = "";
            var n = t.offsetHeight,
                s = this.options.maxHeight,
                a = "leaflet-popup-scrolled";
            s && n > s ? (e.height = s + "px", o.DomUtil.addClass(t, a)) : o.DomUtil.removeClass(t, a), this._containerWidth =
                this._container.offsetWidth
        },
        _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                i = this._getAnchor();
            o.DomUtil.setPosition(this._container, e.add(i))
        },
        _adjustPan: function () {
            if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                var t = this._map,
                    e = parseInt(o.DomUtil.getStyle(this._container, "marginBottom"), 10) || 0,
                    i = this._container.offsetHeight + e,
                    n = this._containerWidth,
                    s = new o.Point(this._containerLeft, -i - this._containerBottom);
                s._add(o.DomUtil.getPosition(this._container));
                var a = t.layerPointToContainerPoint(s),
                    r = o.point(this.options.autoPanPadding),
                    h = o.point(this.options.autoPanPaddingTopLeft || r),
                    l = o.point(this.options.autoPanPaddingBottomRight || r),
                    d = t.getSize(),
                    u = 0,
                    c = 0;
                a.x + n + l.x > d.x && (u = a.x + n - d.x + l.x), a.x - u - h.x < 0 && (u = a.x - h.x), a.y + i + l.y >
                    d.y && (c = a.y + i - d.y + l.y), a.y - c - h.y < 0 && (c = a.y - h.y), (u || c) && t.fire(
                    "autopanstart").panBy([u, c])
            }
        },
        _onCloseButtonClick: function (t) {
            this._close(), o.DomEvent.stop(t)
        },
        _getAnchor: function () {
            return o.point(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
        }
    }), o.popup = function (t, e) {
        return new o.Popup(t, e)
    }, o.Map.mergeOptions({
        closePopupOnClick: !0
    }), o.Map.include({
        openPopup: function (t, e, i) {
            return t instanceof o.Popup || (t = new o.Popup(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ?
                this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(
                t))
        },
        closePopup: function (t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
        }
    }), o.Layer.include({
        bindPopup: function (t, e) {
            return t instanceof o.Popup ? (o.setOptions(t, e),
                this._popup = t, t._source = this) : (this._popup && !e || (this._popup = new o.Popup(e, this)), this._popup
                .setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !0), this
        },
        unbindPopup: function () {
            return this._popup && (this.off({
                click: this._openPopup,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !1, this._popup = null), this
        },
        openPopup: function (t, e) {
            if (t instanceof o.Layer || (e = t, t = this), t instanceof o.FeatureGroup) for (var i in this._layers) {
                    t = this._layers[i];
                    break
            }
            return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source =
                t, this._popup.update(), this._map.openPopup(this._popup, e)), this
        },
        closePopup: function () {
            return this._popup && this._popup._close(), this
        },
        togglePopup: function (t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
        },
        isPopupOpen: function () {
            return this._popup.isOpen()
        },
        setPopupContent: function (t) {
            return this._popup && this._popup.setContent(t), this
        },
        getPopup: function () {
            return this._popup
        },
        _openPopup: function (t) {
            var e = t.layer || t.target;
            if (this._popup && this._map) return o.DomEvent.stop(t), e instanceof o.Path ? void this.openPopup(t.layer ||
                    t.target, t.latlng) : void(this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() :
                    this.openPopup(e, t.latlng))
        },
        _movePopup: function (t) {
            this._popup.setLatLng(t.latlng)
        }
    }), o.Map.mergeOptions({
        closePopupOnClick: !1
    }), o.Util.extend(o.Popup.prototype, {
        options: o.Util.extend(o.Popup.prototype.options, {
            maxWidth: 700,
            minHeight: 50,
            maxHeight: 700,
            closeOnClick: !1,
            anchor: [.5, 1],
            zoomAnimation: !1,
            width: 0,
            height: 0,
            title: ""
        }),
        initialize: function (t, e) {
            if (o.setOptions(this, t), this._source = e, 0 == t.type) {
                this._anchorOffset = [-.5, -1], this._popupContent = o.DomUtil.create("div", "leafletmap-window"), this
                    ._popupContent.style.width = t.width + 4 + "px", this._popupContent.style.left = "18px";
                var i = o.DomUtil.create("div", "leafletmap-window-title");
                i.style.width = t.width - 6 + "px", i.innerHTML = t.title;
                var n = o.DomUtil.create("div", "leafletmap-window-content");
                n.style.width = t.width - 6 + "px", n.style.height = t.height - 28 + "px", this._popupContent.appendChild(
                    i), this._popupContent.appendChild(n)
            } else this._anchorOffset = [0, 0], this._popupContent = o.DomUtil.create("div", "leaflet-zoom-animated"),
                    this._popupContent.style.position = "absolute", o.DomEvent.disableClickPropagation(this._popupContent)
                    .disableScrollPropagation(this._popupContent).on(this._popupContent, "contextmenu", o.DomEvent.stopPropagation)
        },
        onAdd: function (t) {
            this._zoomAnimated = this._zoomAnimated && this.options.zoomAnimation, this._container || this._initLayout(),
                t._fadeAnimated && !this.options.type && o.DomUtil.setOpacity(this._container, 0), clearTimeout(this._removeTimeout),
                "string" == typeof this._container ? this.getPane().innerHTML = this._container : this.getPane().appendChild(
                this._container), this.update(), t._fadeAnimated && !this.options.type && o.DomUtil.setOpacity(this._container,
                1), t.fire("popupopen", {
                popup: this
            }), this._source && (this._source.fire("popupopen", {
                popup: this
            }, !0), this._source.on("preclick", o.DomEvent.stopPropagation))
        },
        onRemove: function (t, e) {
            t && t._fadeAnimated ? (o.DomUtil.setOpacity(this._container, 0), this._removeTimeout = setTimeout(o.bind(o
                .DomUtil.remove, o.DomUtil, this._container), 200)) : o.DomUtil.remove(this._container), e && this.fire(
                "removetip", {
                type: "removetip"
            }), t && t.fire("popupclose", {
                popup: this
            }), this._source && (this._source.fire("popupclose", {
                popup: this
            }, !0), this._source.off("preclick", o.DomEvent.stopPropagation))
        },
        setTitle: function (t) {
            this.options.type || (this._popupContent.childNodes[0].innerHTML = t), this._content = this._popupContent,
                this.update()
        },
        setContent: function (t) {
            return this.options.type ? (this._popupContent.innerHTML = t, this._container = this._popupContent) : this._popupContent
                .childNodes[1].innerHTML = t, this._content = this._popupContent, this.update(), this
        },
        setSize: function (t, e) {
            this.options.width = t, this.options.height = e, this.options.type ? (this._popupContent.childNodes[0].style
                .width = t + "px", this._popupContent.childNodes[0].style.height = e + "px") : (this._popupContent.style
                .width = t + 4 + "px", this._popupContent.style.left = "18px", this._popupContent.childNodes[0].style.width =
                t - 6 + "px", this._popupContent.childNodes[1].style.width = t - 6 + "px", this._popupContent.childNodes[
                1].style.height = e - 28 + "px")
        },
        update: function (t) {
            t instanceof Array && (this.options.autoPanPaddingTopLeft = [t[0].x, t[0].y], this.options.autoPanPaddingBottomRight = [
                    t[1].x, t[1].y]), this._map && (this._container.style.visibility = "hidden", this.options.type || (
                this._updateContent(), this._updateLayout()), this._updatePosition(), this._container.style.visibility =
                "", this._adjustPan())
        },
        _close: function () {
            this._map && (this._map.closePopup(this), this.fire("tipclick", {
                type: "tipclick"
            }))
        },
        _updateLayout: function () {
            var t = this._contentNode,
                e = t.style;
            e.width = "", e.height = "", e.whiteSpace = "nowrap";
            var i = t.offsetWidth || this.options.width;
            i || (i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth)), e.width = i + 1 +
                "px", this.options.width = i;
            var n = t.offsetHeight || this.options.height;
            n || (n = Math.min(n, this.options.maxHeight), n = Math.max(n, this.options.minHeight)), e.height = n + 1 +
                "px", this.options.height = n, e.whiteSpace = "";
            var s = this.options.maxHeight,
                a = "leaflet-popup-scrolled";
            s && n > s ? (e.height = s + "px", o.DomUtil.addClass(t, a)) : o.DomUtil.removeClass(t, a)
        },
        _updatePosition: function () {
            if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng),
                    e = o.point(this.options.offset),
                    i = this.options.anchor;
                t = t.subtract([this.options.width * (i[0] + this._anchorOffset[0]), this.options.height * (i[1] + this
                        ._anchorOffset[1])]), this._zoomAnimated ? o.DomUtil.setPosition(this._container, t) : e = e.add(
                    t);
                var n = this._containerBottom = -e.y,
                    s = this._containerLeft = -Math.round(this._container.offsetWidth / 2) + e.x;
                this._container.style.bottom = n + "px", this._container.style.left = s + "px"
            }
        },
        _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            if (0 != this.options.type) {
                var i = this.options.anchor;
                e = e.subtract([this.options.width * (i[0] + this._anchorOffset[0]), this.options.height * (i[1] + this
                        ._anchorOffset[1])])
            }
            o.DomUtil.setPosition(this._container, e)
        },
        _adjustPan: function () {
            if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                var t = this._map,
                    e = this._container.offsetHeight,
                    i = this._container.offsetWidth,
                    n = new o.Point(this._containerLeft, -e - this._containerBottom || 0);
                this._zoomAnimated && n._add(o.DomUtil.getPosition(this._container));
                var s = t.layerPointToContainerPoint(n),
                    a = o.point(this.options.autoPanPadding),
                    r = o.point(this.options.autoPanPaddingTopLeft || a),
                    h = o.point(this.options.autoPanPaddingBottomRight || a),
                    l = t.getSize(),
                    d = 0,
                    u = 0;
                s.x + i + h.x > l.x && (d = s.x + i - l.x + h.x), s.x - d - r.x < 0 && (d = s.x - r.x), s.y + e + h.y >
                    l.y && (u = s.y + e - l.y + h.y), s.y - u - r.y < 0 && (u = s.y - r.y), (d || u) && t.fire(
                    "autopanstart").panBy([d, u])
            }
        }
    }), o.Map.include({
        openPopup: function (t, e, i) {
            return t instanceof o.Popup || (t = new o.Popup(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ?
                this : (this._popup && this._popup.options.autoClose && (o.stamp(this._popup) != o.stamp(t) && this._popup
                .fire("tipclose", {
                type: "tipclose"
            }), this.closePopup()), this._popup = t, this.addLayer(t))
        }
    }), o.Marker.include({
        _getPopupAnchor: function () {
            return this.options.anchor || [0, 0]
        }
    }), o.LayerGroup = o.Layer.extend({
        initialize: function (t) {
            this._layers = {};
            var e, i;
            if (t) for (e = 0, i = t.length; e < i; e++) this.addLayer(t[e])
        },
        addLayer: function (t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t, this._map && this._map.addLayer(t), this
        },
        removeLayer: function (t) {
            var e = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
        },
        hasLayer: function (t) {
            return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
        },
        clearLayers: function () {
            for (var t in this._layers) this.removeLayer(this._layers[t]);
            return this
        },
        invoke: function (t) {
            var e, i, n = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers) i = this._layers[e], i[t] && i[t].apply(i, n);
            return this
        },
        onAdd: function (t) {
            for (var e in this._layers) t.addLayer(this._layers[e])
        },
        onRemove: function (t) {
            for (var e in this._layers) t.removeLayer(this._layers[e])
        },
        eachLayer: function (t, e) {
            for (var i in this._layers) t.call(e, this._layers[i]);
            return this
        },
        getLayer: function (t) {
            return this._layers[t]
        },
        getLayers: function () {
            var t = [];
            for (var e in this._layers) t.push(this._layers[e]);
            return t
        },
        setZIndex: function (t) {
            return this.invoke("setZIndex", t)
        },
        getLayerId: function (t) {
            return o.stamp(t)
        }
    }), o.layerGroup = function (t) {
        return new o.LayerGroup(t)
    }, o.FeatureGroup = o.LayerGroup.extend({
        addLayer: function (t) {
            return this.hasLayer(t) ? this : (t.addEventParent(this), o.LayerGroup.prototype.addLayer.call(this, t),
                this.fire("layeradd", {
                layer: t
            }))
        },
        removeLayer: function (t) {
            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), o.LayerGroup
                .prototype.removeLayer.call(this, t), this.fire("layerremove", {
                layer: t
            })) : this
        },
        setStyle: function (t) {
            return this.invoke("setStyle", t)
        },
        bringToFront: function () {
            return this.invoke("bringToFront")
        },
        bringToBack: function () {
            return this.invoke("bringToBack")
        },
        getBounds: function () {
            var t = new o.LatLngBounds;
            for (var e in this._layers) {
                var i = this._layers[e];
                t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
            }
            return t
        }
    }), o.featureGroup = function (t) {
        return new o.FeatureGroup(t)
    }, o.Renderer = o.Layer.extend({
        options: {
            padding: .1
        },
        initialize: function (t) {
            o.setOptions(this, t), o.stamp(this), this._layers = this._layers || {}
        },
        onAdd: function () {
            this._container || (this._initContainer(), this._zoomAnimated && o.DomUtil.addClass(this._container,
                "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on(
                "update", this._updatePaths, this)
        },
        onRemove: function () {
            o.DomUtil.remove(this._container), this.off("update", this._updatePaths, this)
        },
        getEvents: function () {
            var t = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd
            };
            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
        },
        _onAnimZoom: function (t) {
            this._updateTransform(t.center, t.zoom)
        },
        _onZoom: function () {
            this._updateTransform(this._map.getCenter(), this._map.getZoom())
        },
        _updateTransform: function (t, e) {
            var i = this._map.getZoomScale(e, this._zoom),
                n = o.DomUtil.getPosition(this._container),
                s = this._map.getSize().multiplyBy(.5 + this.options.padding),
                a = this._map.project(this._center, e),
                r = this._map.project(t, e),
                h = r.subtract(a),
                l = s.multiplyBy(-i).add(n).add(s).subtract(h);
            o.Browser.any3d ? o.DomUtil.setTransform(this._container, l, i) : o.DomUtil.setPosition(this._container, l)
        },
        _reset: function () {
            this._update(), this._updateTransform(this._center, this._zoom);
            for (var t in this._layers) this._layers[t]._reset()
        },
        _onZoomEnd: function () {
            for (var t in this._layers) this._layers[t]._project()
        },
        _updatePaths: function () {
            for (var t in this._layers) this._layers[t]._update()
        },
        _update: function () {
            var t = this.options.padding,
                e = this._map.getSize(),
                i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
            this._bounds = new o.Bounds(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(),
                this._zoom = this._map.getZoom()
        }
    }), o.Map.include({
        getRenderer: function (t) {
            var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return e || (e = this._renderer = this.options.preferCanvas && o.canvas() || o.svg()), this.hasLayer(e) ||
                this.addLayer(e), e
        },
        _getPaneRenderer: function (t) {
            if ("overlayPane" === t || t === i) return !1;
            var e = this._paneRenderers[t];
            return e === i && (e = o.SVG && o.svg({
                pane: t
            }) || o.Canvas && o.canvas({
                pane: t
            }), this._paneRenderers[t] = e), e
        }
    }), o.Path = o.Layer.extend({
        options: {
            stroke: !0,
            color: "#3388ff",
            weight: 3,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            dashArray: null,
            dashOffset: null,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            fillRule: "evenodd",
            interactive: !0
        },
        beforeAdd: function (t) {
            this._renderer = t.getRenderer(this)
        },
        onAdd: function () {
            this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
        },
        onRemove: function () {
            this._renderer._removePath(this)
        },
        redraw: function () {
            return this._map && this._renderer._updatePath(this), this
        },
        setStyle: function (t) {
            return o.setOptions(this, t), this._renderer && this._renderer._updateStyle(this), this
        },
        bringToFront: function () {
            return this._renderer && this._renderer._bringToFront(this), this
        },
        bringToBack: function () {
            return this._renderer && this._renderer._bringToBack(this), this
        },
        getElement: function () {
            return this._path
        },
        _reset: function () {
            this._project(), this._update()
        },
        _clickTolerance: function () {
            return (this.options.stroke ? this.options.weight / 2 : 0) + (o.Browser.touch ? 10 : 0)
        }
    }), o.LineUtil = {
        simplify: function (t, e) {
            if (!e || !t.length) return t.slice();
            var i = e * e;
            return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
        },
        pointToSegmentDistance: function (t, e, i) {
            return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
        },
        closestPointOnSegment: function (t, e, i) {
            return this._sqClosestPointOnSegment(t, e, i)
        },
        _simplifyDP: function (t, e) {
            var n = t.length,
                o = typeof Uint8Array != i + "" ? Uint8Array : Array,
                s = new o(n);
            s[0] = s[n - 1] = 1, this._simplifyDPStep(t, s, e, 0, n - 1);
            var a, r = [];
            for (a = 0; a < n; a++) s[a] && r.push(t[a]);
            return r
        },
        _simplifyDPStep: function (t, e, i, n, o) {
            var s, a, r, h = 0;
            for (a = n + 1; a <= o - 1; a++) r = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0), r > h && (s = a,
                    h = r);
            h > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o))
        },
        _reducePoints: function (t, e) {
            for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) this._sqDist(t[n], t[o]) > e && (i.push(t[n]),
                    o = n);
            return o < s - 1 && i.push(t[s - 1]), i
        },
        clipSegment: function (t, e, i, n, o) {
            var s, a, r, h = n ? this._lastCode : this._getBitCode(t, i),
                l = this._getBitCode(e, i);
            for (this._lastCode = l;;) {
                if (!(h | l)) return [t, e];
                if (h & l) return !1;
                s = h || l, a = this._getEdgeIntersection(t, e, s, i, o), r = this._getBitCode(a, i), s === h ? (t = a,
                    h = r) : (e = a, l = r)
            }
        },
        _getEdgeIntersection: function (t, e, i, n, s) {
            var a, r, h = e.x - t.x,
                l = e.y - t.y,
                d = n.min,
                u = n.max;
            return 8 & i ? (a = t.x + h * (u.y - t.y) / l, r = u.y) : 4 & i ? (a = t.x + h * (d.y - t.y) / l, r = d.y) :
                2 & i ? (a = u.x, r = t.y + l * (u.x - t.x) / h) : 1 & i && (a = d.x, r = t.y + l * (d.x - t.x) / h),
                new o.Point(a, r, s)
        },
        _getBitCode: function (t, e) {
            var i = 0;
            return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |=
                8), i
        },
        _sqDist: function (t, e) {
            var i = e.x - t.x,
                n = e.y - t.y;
            return i * i + n * n
        },
        _sqClosestPointOnSegment: function (t, e, i, n) {
            var s, a = e.x,
                r = e.y,
                h = i.x - a,
                l = i.y - r,
                d = h * h + l * l;
            return d > 0 && (s = ((t.x - a) * h + (t.y - r) * l) / d, s > 1 ? (a = i.x, r = i.y) : s > 0 && (a += h * s,
                r += l * s)), h = t.x - a, l = t.y - r, n ? h * h + l * l : new o.Point(a, r)
        }
    }, o.Polyline = o.Path.extend({
        options: {
            smoothFactor: 1,
            noClip: !1
        },
        initialize: function (t, e) {
            o.setOptions(this, e), this._setLatLngs(t)
        },
        getLatLngs: function () {
            return this._latlngs
        },
        setLatLngs: function (t) {
            return this._setLatLngs(t), this.redraw()
        },
        isEmpty: function () {
            return !this._latlngs.length
        },
        closestLayerPoint: function (t) {
            for (var e, i, n = 1 / 0, s = null, a = o.LineUtil._sqClosestPointOnSegment, r = 0, h = this._parts.length; r <
                h; r++) for (var l = this._parts[r], d = 1, u = l.length; d < u; d++) {
                    e = l[d - 1], i = l[d];
                    var c = a(t, e, i, !0);
                    c < n && (n = c, s = a(t, e, i))
            }
            return s && (s.distance = Math.sqrt(n)), s
        },
        getCenter: function () {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t, e, i, n, o, s, a, r = this._rings[0],
                h = r.length;
            if (!h) return null;
            for (t = 0, e = 0; t < h - 1; t++) e += r[t].distanceTo(r[t + 1]) / 2;
            if (0 === e) return this._map.layerPointToLatLng(r[0]);
            for (t = 0, n = 0; t < h - 1; t++) if (o = r[t], s = r[t + 1], i = o.distanceTo(s), n += i, n > e) return a =
                        (n - e) / i, this._map.layerPointToLatLng([s.x - a * (s.x - o.x), s.y - a * (s.y - o.y)])
        },
        getBounds: function () {
            return this._bounds
        },
        addLatLng: function (t, e) {
            return e = e || this._defaultShape(), t = o.latLng(t), e.push(t), this._bounds.extend(t), this.redraw()
        },
        _setLatLngs: function (t) {
            this._bounds = new o.LatLngBounds, this._latlngs = this._convertLatLngs(t)
        },
        _defaultShape: function () {
            return o.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0]
        },
        _convertLatLngs: function (t) {
            for (var e = [], i = o.Polyline._flat(t), n = 0, s = t.length; n < s; n++) i ? (e[n] = o.latLng(t[n]), this
                    ._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
            return e
        },
        _project: function () {
            var t = new o.Bounds;
            this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
            var e = this._clickTolerance(),
                i = new o.Point(e, e);
            this._bounds.isValid() && t.isValid() && (t.min._subtract(i), t.max._add(i), this._pxBounds = t)
        },
        _projectLatlngs: function (t, e, i) {
            var n, s, a = t[0] instanceof o.LatLng,
                r = t.length;
            if (a) {
                for (s = [], n = 0; n < r; n++) s[n] = this._map.latLngToLayerPoint(t[n]), i.extend(s[n]);
                e.push(s)
            } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], e, i)
        },
        _clipPoints: function () {
            var t = this._renderer._bounds;
            if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
                if (this.options.noClip) return void(this._parts = this._rings);
                var e, i, n, s, a, r, h, l = this._parts;
                for (e = 0, n = 0, s = this._rings.length; e < s; e++) for (h = this._rings[e], i = 0, a = h.length; i <
                        a - 1; i++) r = o.LineUtil.clipSegment(h[i], h[i + 1], t, i, !0), r && (l[n] = l[n] || [], l[n]
                            .push(r[0]), r[1] === h[i + 1] && i !== a - 2 || (l[n].push(r[1]), n++))
            }
        },
        _simplifyPoints: function () {
            for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = o.LineUtil
                    .simplify(t[i], e)
        },
        _update: function () {
            this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
        },
        _updatePath: function () {
            this._renderer._updatePoly(this)
        }
    }), o.polyline = function (t, e) {
        return new o.Polyline(t, e)
    }, o.Polyline._flat = function (t) {
        return !o.Util.isArray(t[0]) || "object" != typeof t[0][0] && "undefined" != typeof t[0][0]
    }, o.Util.extend(o.Polyline.prototype, {
        spliceLatLngs: function () {
            var t = this._latlngs.length > 1 ? this._latlngs : this._latlngs[0],
                e = [].splice.apply(t, arguments);
            return this._convertLatLngs(t, !0), this.redraw(), e
        }
    }), o.PolyUtil = {}, o.PolyUtil.clipPolygon = function (t, e, i) {
        var n, s, a, r, h, l, d, u, c, p = [1, 4, 2, 8],
            _ = o.LineUtil;
        for (s = 0, d = t.length; s < d; s++) t[s]._code = _._getBitCode(t[s], e);
        for (r = 0; r < 4; r++) {
            for (u = p[r], n = [], s = 0, d = t.length, a = d - 1; s < d; a = s++) h = t[s], l = t[a], h._code & u ? l._code &
                    u || (c = _._getEdgeIntersection(l, h, u, e, i), c._code = _._getBitCode(c, e), n.push(c)) : (l._code &
                    u && (c = _._getEdgeIntersection(l, h, u, e, i), c._code = _._getBitCode(c, e), n.push(c)), n.push(
                    h));
            t = n
        }
        return t
    }, o.Polygon = o.Polyline.extend({
        options: {
            fill: !0
        },
        isEmpty: function () {
            return !this._latlngs.length || !this._latlngs[0].length
        },
        getCenter: function () {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t, e, i, n, o, s, a, r, h, l = this._rings[0],
                d = l.length;
            if (!d) return null;
            for (s = a = r = 0, t = 0, e = d - 1; t < d; e = t++) i = l[t], n = l[e], o = i.y * n.x - n.y * i.x, a += (
                    i.x + n.x) * o, r += (i.y + n.y) * o, s += 3 * o;
            return h = 0 === s ? l[0] : [a / s, r / s], this._map.layerPointToLatLng(h)
        },
        _convertLatLngs: function (t) {
            var e = o.Polyline.prototype._convertLatLngs.call(this, t),
                i = e.length;
            return i >= 2 && e[0] instanceof o.LatLng && e[0].equals(e[i - 1]) && e.pop(), e
        },
        _setLatLngs: function (t) {
            o.Polyline.prototype._setLatLngs.call(this, t), o.Polyline._flat(this._latlngs) && (this._latlngs = [this._latlngs])
        },
        _defaultShape: function () {
            return o.Polyline._flat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
        },
        _clipPoints: function () {
            var t = this._renderer._bounds,
                e = this.options.weight,
                i = new o.Point(e, e);
            if (t = new o.Bounds(t.min.subtract(i), t.max.add(i)), this._parts = [], this._pxBounds && this._pxBounds.intersects(
                t)) {
                if (this.options.noClip) return void(this._parts = this._rings);
                for (var n, s = 0, a = this._rings.length; s < a; s++) n = o.PolyUtil.clipPolygon(this._rings[s], t, !0),
                        n.length && this._parts.push(n)
            }
        },
        _updatePath: function () {
            this._renderer._updatePoly(this, !0)
        }
    }), o.polygon = function (t, e) {
        return new o.Polygon(t, e)
    }, o.Rectangle = o.Polygon.extend({
        initialize: function (t, e) {
            o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function (t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function (t) {
            return t = o.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    }), o.rectangle = function (t, e) {
        return new o.Rectangle(t, e)
    }, o.CircleMarker = o.Path.extend({
        options: {
            fill: !0,
            radius: 10
        },
        initialize: function (t, e) {
            o.setOptions(this, e), this._latlng = o.latLng(t), this._radius = this.options.radius
        },
        setLatLng: function (t) {
            return this._latlng = o.latLng(t), this.redraw(), this.fire("move", {
                latlng: this._latlng
            })
        },
        getLatLng: function () {
            return this._latlng
        },
        setRadius: function (t) {
            return this.options.radius = this._radius = t, this.redraw()
        },
        getRadius: function () {
            return this._radius
        },
        setStyle: function (t) {
            var e = t && t.radius || this._radius;
            return o.Path.prototype.setStyle.call(this, t), this.setRadius(e), this
        },
        _project: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
        },
        _updateBounds: function () {
            var t = this._radius,
                e = this._radiusY || t,
                i = this._clickTolerance(),
                n = [t + i, e + i];
            this._pxBounds = new o.Bounds(this._point.subtract(n), this._point.add(n))
        },
        _update: function () {
            this._map && this._updatePath()
        },
        _updatePath: function () {
            this._renderer._updateCircle(this)
        },
        _empty: function () {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        }
    }), o.circleMarker = function (t, e) {
        return new o.CircleMarker(t, e)
    }, o.Circle = o.CircleMarker.extend({
        initialize: function (t, e, i) {
            if ("number" == typeof e && (e = o.extend({}, i, {
                radius: e
            })), o.setOptions(this, e), this._latlng = o.latLng(t), isNaN(this.options.radius)) throw new Error(
                    "Circle radius cannot be NaN");
            this._mRadius = this.options.radius
        },
        setRadius: function (t) {
            return this._mRadius = t, this.redraw()
        },
        getRadius: function () {
            return this._mRadius
        },
        getBounds: function () {
            var t = [this._radius, this._radiusY || this._radius];
            return new o.LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(
                this._point.add(t)))
        },
        setStyle: o.Path.prototype.setStyle,
        _project: function () {
            var t = this._latlng.lng,
                e = this._latlng.lat,
                i = this._map,
                n = i.options.crs;
            if (n.distance === o.CRS.Earth.distance) {
                var s = Math.PI / 180,
                    a = this._mRadius / o.CRS.Earth.R / s,
                    r = i.project([e + a, t]),
                    h = i.project([e - a, t]),
                    l = r.add(h).divideBy(2),
                    d = i.unproject(l).lat,
                    u = Math.acos((Math.cos(a * s) - Math.sin(e * s) * Math.sin(d * s)) / (Math.cos(e * s) * Math.cos(d *
                        s))) / s;
                (isNaN(u) || 0 === u) && (u = a / Math.cos(Math.PI / 180 * e)), this._point = l.subtract(i.getPixelOrigin()),
                    this._radius = isNaN(u) ? 0 : Math.max(Math.round(l.x - i.project([d, t - u]).x), 1), this._radiusY =
                    Math.max(Math.round(l.y - r.y), 1)
            } else {
                var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(c)
                    .x
            }
            this._updateBounds()
        }
    }), o.circle = function (t, e, i) {
        return new o.Circle(t, e, i)
    }, o.SVG = o.Renderer.extend({
        getEvents: function () {
            var t = o.Renderer.prototype.getEvents.call(this);
            return t.zoomstart = this._onZoomStart, t
        },
        _initContainer: function () {
            this._container = o.SVG.create("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup =
                o.SVG.create("g"), this._container.appendChild(this._rootGroup)
        },
        _onZoomStart: function () {
            this._update()
        },
        _update: function () {
            if (!this._map._animatingZoom || !this._bounds) {
                o.Renderer.prototype._update.call(this);
                var t = this._bounds,
                    e = t.getSize(),
                    i = this._container;
                this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute(
                    "height", e.y)), o.DomUtil.setPosition(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x,
                        e.y].join(" ")), this.fire("update")
            }
        },
        _initPath: function (t) {
            var e = t._path = o.SVG.create("path");
            t.options.className && o.DomUtil.addClass(e, t.options.className), t.options.interactive && o.DomUtil.addClass(
                e, "leaflet-interactive"), this._updateStyle(t), this._layers[o.stamp(t)] = t
        },
        _addPath: function (t) {
            this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
        },
        _removePath: function (t) {
            o.DomUtil.remove(t._path), t.removeInteractiveTarget(t._path), delete this._layers[o.stamp(t)]
        },
        _updatePath: function (t) {
            t._project(), t._update()
        },
        _updateStyle: function (t) {
            var e = t._path,
                i = t.options;
            e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute(
                "stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute(
                "stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute(
                "stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute(
                "stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor ||
                i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule ||
                "evenodd")) : e.setAttribute("fill", "none"))
        },
        _updatePoly: function (t, e) {
            this._setPath(t, o.SVG.pointsToPath(t._parts, e))
        },
        _updateCircle: function (t) {
            var e = t._point,
                i = t._radius,
                n = t._radiusY || i,
                o = "a" + i + "," + n + " 0 1,0 ",
                s = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + 2 * i + ",0 " + o + 2 * -i + ",0 ";
            this._setPath(t, s)
        },
        _setPath: function (t, e) {
            t._path.setAttribute("d", e)
        },
        _bringToFront: function (t) {
            o.DomUtil.toFront(t._path)
        },
        _bringToBack: function (t) {
            o.DomUtil.toBack(t._path)
        }
    }), o.extend(o.SVG, {
        create: function (t) {
            return e.createElementNS("http://www.w3.org/2000/svg", t)
        },
        pointsToPath: function (t, e) {
            var i, n, s, a, r, h, l = "";
            for (i = 0, s = t.length; i < s; i++) {
                for (r = t[i], n = 0, a = r.length; n < a; n++) h = r[n], l += (n ? "L" : "M") + h.x + " " + h.y;
                l += e ? o.Browser.svg ? "z" : "x" : ""
            }
            return l || "M0 0"
        }
    }), o.Browser.svg = !(!e.createElementNS || !o.SVG.create("svg").createSVGRect), o.svg = function (t) {
        return o.Browser.svg || o.Browser.vml ? new o.SVG(t) : null
    }, o.Util.extend(o.SVG.prototype, {
        _initPath: function (t) {
            var e = t._path = o.SVG.create("path");
            t.options.className && o.DomUtil.addClass(e, t.options.className), t.options.interactive && o.DomUtil.addClass(
                e, "leaflet-interactive"), o.DomEvent.on(e, "click dblclick mousedown mouseup contextmenu", function (t) {
                this.fire("click")
            }, this), this._updateStyle(t), this._layers[o.stamp(t)] = t
        },
        _fireEvent: function (t, e, i) {
            this._map._fireDOMEvent(e, i || e.type, t)
        },
        _updatePoly: function (t, e) {
            this._setPath(t, o.SVG.pointsToPath(t._parts, e, t.options))
        },
        _updateSector: function (t) {
            var e = t._parts,
                i = e ? "M " + e.x + " " + e.y + " " + e.x2 + " " + e.y2 + " C " + e.x2 + " " + e.y2 + " " + e.x3 + " " +
                    e.y3 + " " + e.x1 + " " + e.y1 + " z" : "M 0 0 z";
            this._setPath(t, i)
        }
    }), o.extend(o.SVG, {
        pointsToPath: function (t, e, i) {
            var n, s, a, r, h, l, d, u = "",
                c = "",
                p = i.arrow,
                _ = parseInt(i.weight) + 3;
            for (n = 0, a = t.length; n < a; n++) {
                for (h = t[n], s = 0, r = h.length; s < r; s++) l = h[s], u += (s ? " L" : "M") + l.x + " " + l.y, p &&
                        s < r - 1 && (d = {
                        x: Math.round(2 * h[s + 1].x - l.x),
                        y: Math.round(2 * h[s + 1].y - l.y)
                    }, c += this._drawPolylineArrow(h[s + 1], d, _));
                u += e ? o.Browser.svg ? "z" : "x" : ""
            }
            return u + c || "M0 0"
        },
        _drawPolylineArrow: function (t, e, i) {
            var n, o, s, a, r, h, l = Math.sqrt((t.y - e.y) * (t.y - e.y) + (t.x - e.x) * (t.x - e.x));
            n = parseInt(t.x) + parseInt(1 * i * (t.x - e.x + (t.y - e.y) / 2) / l), o = parseInt(t.y) + parseInt(1 * i *
                (t.y - e.y - (t.x - e.x) / 2) / l), s = parseInt(t.x) + parseInt(1 * i * (t.x - e.x - (t.y - e.y) / 2) /
                l), a = parseInt(t.y) + parseInt(1 * i * (t.y - e.y + (t.x - e.x) / 2) / l), r = Math.round(t.x), h =
                Math.round(t.y);
            var d = "",
                u = "";
            return n && (d = " M" + n + " " + o + " L" + r + " " + h, u = " M" + s + " " + a + " L" + r + " " + h), d +
                u
        }
    }), o.Browser.vml = !o.Browser.svg && function () {
        try {
            var t = e.createElement("div");
            t.innerHTML = '<v:shape adj="1"/>';
            var i = t.firstChild;
            return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
        } catch (t) {
            return !1
        }
    }(), o.SVG.include(o.Browser.vml ? {
        _initContainer: function () {
            this._container = o.DomUtil.create("div", "leaflet-vml-container")
        },
        _update: function () {
            this._map._animatingZoom || (o.Renderer.prototype._update.call(this), this.fire("update"))
        },
        _initPath: function (t) {
            var e = t._container = o.SVG.create("shape");
            o.DomUtil.addClass(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path =
                o.SVG.create("path"), e.appendChild(t._path), this._updateStyle(t)
        },
        _addPath: function (t) {
            var e = t._container;
            this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
        },
        _removePath: function (t) {
            var e = t._container;
            o.DomUtil.remove(e), t.removeInteractiveTarget(e)
        },
        _updateStyle: function (t) {
            var e = t._stroke,
                i = t._fill,
                n = t.options,
                s = t._container;
            s.stroked = !! n.stroke, s.filled = !! n.fill, n.stroke ? (e || (e = t._stroke = o.SVG.create("stroke")), s
                .appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle =
                o.Util.isArray(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle =
                "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (s.removeChild(e), t
                ._stroke = null), n.fill ? (i || (i = t._fill = o.SVG.create("fill")), s.appendChild(i), i.color = n.fillColor ||
                n.color, i.opacity = n.fillOpacity) : i && (s.removeChild(i), t._fill = null)
        },
        _updateCircle: function (t) {
            var e = t._point.round(),
                i = Math.round(t._radius),
                n = Math.round(t._radiusY || i);
            this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
        },
        _setPath: function (t, e) {
            t._path.v = e
        },
        _bringToFront: function (t) {
            o.DomUtil.toFront(t._container)
        },
        _bringToBack: function (t) {
            o.DomUtil.toBack(t._container)
        }
    } : {}), o.Browser.vml && (o.SVG.create = function () {
        try {
            return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function (t) {
                return e.createElement("<lvml:" + t + ' class="lvml">')
            }
        } catch (t) {
            return function (t) {
                return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
            }
        }
    }()), o.SVG.include(o.Browser.vml ? {
        _updateSector: function (t) {
            var e = t._parts,
                i = e ? "m " + e.x + " " + e.y + " l " + e.x2 + " " + e.y2 + " c " + e.x2 + " " + e.y2 + " " + e.x3 +
                    " " + e.y3 + " " + e.x1 + " " + e.y1 + " x e" : "m 0,0 x e";
            this._setPath(t, i)
        }
    } : {}), o.Canvas = o.Renderer.extend({
        onAdd: function () {
            o.Renderer.prototype.onAdd.call(this), this._draw()
        },
        _initContainer: function () {
            var t = this._container = e.createElement("canvas");
            o.DomEvent.on(t, "mousemove", o.Util.throttle(this._onMouseMove, 32, this), this).on(t,
                "click dblclick mousedown mouseup contextmenu", this._onClick, this).on(t, "mouseout", this._handleMouseOut,
                this), this._ctx = t.getContext("2d")
        },
        _updatePaths: function () {
            var t;
            this._redrawBounds = null;
            for (var e in this._layers) t = this._layers[e], t._update();
            this._redraw()
        },
        _update: function () {
            if (!this._map._animatingZoom || !this._bounds) {
                this._drawnLayers = {}, o.Renderer.prototype._update.call(this);
                var t = this._bounds,
                    e = this._container,
                    i = t.getSize(),
                    n = o.Browser.retina ? 2 : 1;
                o.DomUtil.setPosition(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style
                    .height = i.y + "px", o.Browser.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min
                    .y), this.fire("update")
            }
        },
        _initPath: function (t) {
            this._updateDashArray(t), this._layers[o.stamp(t)] = t;
            var e = t._order = {
                layer: t,
                prev: this._drawLast,
                next: null
            };
            this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
        },
        _addPath: function (t) {
            this._requestRedraw(t)
        },
        _removePath: function (t) {
            var e = t._order,
                i = e.next,
                n = e.prev;
            i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[
                o.stamp(t)], this._requestRedraw(t)
        },
        _updatePath: function (t) {
            this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
        },
        _updateStyle: function (t) {
            this._updateDashArray(t), this._requestRedraw(t)
        },
        _updateDashArray: function (t) {
            if (t.options.dashArray) {
                var e, i = t.options.dashArray.split(","),
                    n = [];
                for (e = 0; e < i.length; e++) n.push(Number(i[e]));
                t.options._dashArray = n
            }
        },
        _requestRedraw: function (t) {
            this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || o.Util.requestAnimFrame(
                this._redraw, this))
        },
        _extendRedrawBounds: function (t) {
            var e = (t.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new o.Bounds, this._redrawBounds.extend(t._pxBounds.min.subtract([
                    e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
        },
        _redraw: function () {
            this._redrawRequest = null, this._clear(), this._draw(), this._redrawBounds = null
        },
        _clear: function () {
            var t = this._redrawBounds;
            if (t) {
                var e = t.getSize();
                this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
            } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
        },
        _draw: function () {
            var t, e = this._redrawBounds;
            if (this._ctx.save(), e) {
                var i = e.getSize();
                this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip()
            }
            this._drawing = !0;
            for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) &&
                    t._updatePath();
            this._drawing = !1, this._ctx.restore()
        },
        _updatePoly: function (t, e) {
            if (this._drawing) {
                var i, n, o, s, a = t._parts,
                    r = a.length,
                    h = this._ctx;
                if (r) {
                    for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), h.setLineDash && h.setLineDash(t.options &&
                        t.options._dashArray || []), i = 0; i < r; i++) {
                        for (n = 0, o = a[i].length; n < o; n++) s = a[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                        e && h.closePath()
                    }
                    this._fillStroke(h, t)
                }
            }
        },
        _updateCircle: function (t) {
            if (this._drawing && !t._empty()) {
                var e = t._point,
                    i = this._ctx,
                    n = t._radius,
                    o = (t._radiusY || n) / n;
                this._drawnLayers[t._leaflet_id] = t, 1 !== o && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e
                    .y / o, n, 0, 2 * Math.PI, !1), 1 !== o && i.restore(), this._fillStroke(i, t)
            }
        },
        _fillStroke: function (t, e) {
            var i = e.options;
            i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule ||
                "evenodd")),
            i.stroke && 0 !== i.weight && (t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color,
                t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke())
        },
        _onClick: function (t) {
            for (var e, i, n = this._map.mouseEventToLayerPoint(t), s = this._drawFirst; s; s = s.next) e = s.layer, e.options
                    .interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
            i && (o.DomEvent._fakeStop(t), this._fireEvent([i], t))
        },
        _onMouseMove: function (t) {
            if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                var e = this._map.mouseEventToLayerPoint(t);
                this._handleMouseHover(t, e)
            }
        },
        _handleMouseOut: function (t) {
            var e = this._hoveredLayer;
            e && (o.DomUtil.removeClass(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"),
                this._hoveredLayer = null)
        },
        _handleMouseHover: function (t, e) {
            for (var i, n, s = this._drawFirst; s; s = s.next) i = s.layer, i.options.interactive && i._containsPoint(e) &&
                    (n = i);
            n !== this._hoveredLayer && (this._handleMouseOut(t), n && (o.DomUtil.addClass(this._container,
                "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer &&
                this._fireEvent([this._hoveredLayer], t)
        },
        _fireEvent: function (t, e, i) {
            this._map._fireDOMEvent(e, i || e.type, t)
        },
        _bringToFront: function (t) {
            var e = t._order,
                i = e.next,
                n = e.prev;
            i && (i.prev = n, n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next =
                e, e.next = null, this._drawLast = e, this._requestRedraw(t))
        },
        _bringToBack: function (t) {
            var e = t._order,
                i = e.next,
                n = e.prev;
            n && (n.next = i, i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this
                ._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
        }
    }), o.Browser.canvas = function () {
        return !!e.createElement("canvas").getContext
    }(), o.canvas = function (t) {
        return o.Browser.canvas ? new o.Canvas(t) : null
    }, o.Polyline.prototype._containsPoint = function (t, e) {
        var i, n, s, a, r, h, l = this._clickTolerance();
        if (!this._pxBounds.contains(t)) return !1;
        for (i = 0, a = this._parts.length; i < a; i++) for (h = this._parts[i], n = 0, r = h.length, s = r - 1; n < r; s =
                n++) if ((e || 0 !== n) && o.LineUtil.pointToSegmentDistance(t, h[s], h[n]) <= l) return !0;
        return !1
    }, o.Polygon.prototype._containsPoint = function (t) {
        var e, i, n, s, a, r, h, l, d = !1;
        if (!this._pxBounds.contains(t)) return !1;
        for (s = 0, h = this._parts.length; s < h; s++) for (e = this._parts[s], a = 0, l = e.length, r = l - 1; a < l; r =
                a++) i = e[a], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x &&
                    (d = !d);
        return d || o.Polyline.prototype._containsPoint.call(this, t, !0)
    }, o.CircleMarker.prototype._containsPoint = function (t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
    }, o.Util.extend(o.Canvas.prototype, {
        _updateCircle: function (t) {
            if (!t._empty()) {
                var e = t._point,
                    i = this._ctx,
                    n = t._radius,
                    o = (t._radiusY || n) / n;
                1 !== o && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 !==
                    o && i.restore(), this._fillStroke(i, t)
            }
        },
        _handleMouseHover: function (t, e) {
            var i, n;
            if (!this._hoveredLayer) for (i in this._drawnLayers) if (n = this._drawnLayers[i], n.options.interactive &&
                        n._containsPoint(e)) {
                        o.DomUtil.addClass(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"),
                            this._hoveredLayer = n;
                        break
                    }
            this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
        }
    });
    var r = "_leaflet_events";
    o.DomEvent = {
        on: function (t, e, i, n) {
            if ("object" == typeof e) for (var s in e) this._on(t, s, e[s], i);
            else {
                e = o.Util.splitWords(e);
                for (var a = 0, r = e.length; a < r; a++) this._on(t, e[a], i, n)
            }
            return this
        },
        off: function (t, e, i, n) {
            if ("object" == typeof e) for (var s in e) this._off(t, s, e[s], i);
            else {
                e = o.Util.splitWords(e);
                for (var a = 0, r = e.length; a < r; a++) this._off(t, e[a], i, n)
            }
            return this
        },
        _on: function (e, i, n, s) {
            var a = i + o.stamp(n) + (s ? "_" + o.stamp(s) : "");
            if (e[r] && e[r][a]) return this;
            var h = function (i) {
                return n.call(s || e, i || t.event)
            }, l = h;
            return o.Browser.pointer && 0 === i.indexOf("touch") ? this.addPointerListener(e, i, h, a) : o.Browser.touch &&
                "dblclick" === i && this.addDoubleTapListener ? this.addDoubleTapListener(e, h, a) : "addEventListener" in
                e ? "mousewheel" === i ? e.addEventListener("onwheel" in e ? "wheel" : "mousewheel", h, !1) :
                "mouseenter" === i || "mouseleave" === i ? (h = function (i) {
                i = i || t.event, o.DomEvent._isExternalTarget(e, i) && l(i)
            }, e.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", h, !1)) : ("click" === i && o.Browser.android &&
                (h = function (t) {
                return o.DomEvent._filterClick(t, l)
            }), e.addEventListener(i, h, !1)) : "attachEvent" in e && e.attachEvent("on" + i, h), e[r] = e[r] || {}, e[
                r][a] = h, this
        },
        _off: function (t, e, i, n) {
            var s = e + o.stamp(i) + (n ? "_" + o.stamp(n) : ""),
                a = t[r] && t[r][s];
            return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, s) : o.Browser
                .touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, s) :
                "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" :
                "mousewheel", a, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ?
                "mouseout" : e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[r][s] = null, this) : this
        },
        stopPropagation: function (t) {
            return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !
                0, o.DomEvent._skipped(t), this
        },
        disableScrollPropagation: function (t) {
            return o.DomEvent.on(t, "mousewheel", o.DomEvent.stopPropagation)
        },
        disableClickPropagation: function (t) {
            var e = o.DomEvent.stopPropagation;
            return o.DomEvent.on(t, o.Draggable.START.join(" "), e), o.DomEvent.on(t, {
                click: o.DomEvent._fakeStop,
                dblclick: e
            })
        },
        preventDefault: function (t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
        },
        stop: function (t) {
            return o.DomEvent.preventDefault(t).stopPropagation(t)
        },
        getMousePosition: function (t, e) {
            if (!e) return new o.Point(t.clientX, t.clientY);
            var i = e.getBoundingClientRect();
            return new o.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
        },
        _wheelPxFactor: o.Browser.win && o.Browser.chrome ? 2 : o.Browser.gecko ? t.devicePixelRatio : 1,
        getWheelDelta: function (t) {
            return o.Browser.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / o.DomEvent._wheelPxFactor :
                t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX ||
                t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) <
                32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
        },
        _skipEvents: {},
        _fakeStop: function (t) {
            o.DomEvent._skipEvents[t.type] = !0
        },
        _skipped: function (t) {
            var e = this._skipEvents[t.type];
            return this._skipEvents[t.type] = !1, e
        },
        _isExternalTarget: function (t, e) {
            var i = e.relatedTarget;
            if (!i) return !0;
            try {
                for (; i && i !== t;) i = i.parentNode
            } catch (t) {
                return !1
            }
            return i !== t
        },
        _filterClick: function (t, e) {
            var i = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                n = o.DomEvent._lastClick && i - o.DomEvent._lastClick;
            return n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? void o.DomEvent.stop(t) : (o.DomEvent
                ._lastClick = i, void e(t))
        }
    }, o.DomEvent.addListener = o.DomEvent.on, o.DomEvent.removeListener = o.DomEvent.off, o.Draggable = o.Evented.extend({
        options: {
            clickTolerance: 3
        },
        statics: {
            START: o.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
            END: {
                mousedown: "mouseup",
                touchstart: "touchend",
                pointerdown: "touchend",
                MSPointerDown: "touchend"
            },
            MOVE: {
                mousedown: "mousemove",
                touchstart: "touchmove",
                pointerdown: "touchmove",
                MSPointerDown: "touchmove"
            }
        },
        initialize: function (t, e, i) {
            this._element = t, this._dragStartTarget = e || t, this._preventOutline = i
        },
        enable: function () {
            this._enabled || (o.DomEvent.on(this._dragStartTarget, o.Draggable.START.join(" "), this._onDown, this),
                this._enabled = !0)
        },
        disable: function () {
            this._enabled && (o.Draggable._dragging === this && this.finishDrag(), o.DomEvent.off(this._dragStartTarget,
                o.Draggable.START.join(" "), this._onDown, this), this._enabled = !1, this._moved = !1)
        },
        _onDown: function (t) {
            if (!t._simulated && this._enabled && (this._moved = !1, !o.DomUtil.hasClass(this._element,
                "leaflet-zoom-anim") && !(o.Draggable._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches ||
                (o.Draggable._dragging = this, this._preventOutline && o.DomUtil.preventOutline(this._element), o.DomUtil
                .disableImageDrag(), o.DomUtil.disableTextSelection(), this._moving)))) {
                this.fire("down");
                var i = t.touches ? t.touches[0] : t;
                this._startPoint = new o.Point(i.clientX, i.clientY), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove,
                    this).on(e, o.Draggable.END[t.type], this._onUp, this)
            }
        },
        _onMove: function (i) {
            if (!i._simulated && this._enabled) {
                if (i.touches && i.touches.length > 1) return void(this._moved = !0);
                var n = i.touches && 1 === i.touches.length ? i.touches[0] : i,
                    s = new o.Point(n.clientX, n.clientY),
                    a = s.subtract(this._startPoint);
                (a.x || a.y) && (Math.abs(a.x) + Math.abs(a.y) < this.options.clickTolerance || (o.DomEvent.preventDefault(
                    i), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = o.DomUtil.getPosition(
                    this._element).subtract(a), o.DomUtil.addClass(e.body, "leaflet-dragging"), this._lastTarget = i.target ||
                    i.srcElement, t.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget =
                    this._lastTarget.correspondingUseElement), o.DomUtil.addClass(this._lastTarget,
                    "leaflet-drag-target")), this._newPos = this._startPos.add(a), this._moving = !0, o.Util.cancelAnimFrame(
                    this._animRequest), this._lastEvent = i, this._animRequest = o.Util.requestAnimFrame(this._updatePosition,
                    this, !0)))
            }
        },
        _updatePosition: function () {
            var t = {
                originalEvent: this._lastEvent
            };
            this.fire("predrag", t), o.DomUtil.setPosition(this._element, this._newPos), this.fire("drag", t)
        },
        _onUp: function (t) {
            !t._simulated && this._enabled && this.finishDrag()
        },
        finishDrag: function () {
            o.DomUtil.removeClass(e.body, "leaflet-dragging"), this._lastTarget && (o.DomUtil.removeClass(this._lastTarget,
                "leaflet-drag-target"), this._lastTarget = null);
            for (var t in o.Draggable.MOVE) o.DomEvent.off(e, o.Draggable.MOVE[t], this._onMove, this).off(e, o.Draggable
                    .END[t], this._onUp, this);
            o.DomUtil.enableImageDrag(), o.DomUtil.enableTextSelection(), this._moved && this._moving && (o.Util.cancelAnimFrame(
                this._animRequest), this.fire("dragend", {
                distance: this._newPos.distanceTo(this._startPos)
            })), this._moving = !1, o.Draggable._dragging = !1
        }
    }), o.Handler = o.Class.extend({
        initialize: function (t) {
            this._map = t
        },
        enable: function () {
            return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
        },
        disable: function () {
            return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
        },
        enabled: function () {
            return !!this._enabled
        }
    }), o.Map.mergeOptions({
        dragging: !0,
        inertia: !o.Browser.android23,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    }), o.Map.Drag = o.Handler.extend({
        addHooks: function () {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new o.Draggable(t._mapPane, t._container), this._draggable.on({
                    down: this._onDown,
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable
                    .on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this
                    ._onZoomEnd, this))
            }
            o.DomUtil.addClass(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this
                ._positions = [], this._times = []
        },
        removeHooks: function () {
            o.DomUtil.removeClass(this._map._container, "leaflet-grab"), o.DomUtil.removeClass(this._map._container,
                "leaflet-touch-drag"), this._draggable.disable()
        },
        moved: function () {
            return this._draggable && this._draggable._moved
        },
        moving: function () {
            return this._draggable && this._draggable._moving
        },
        _onDown: function () {
            this._map._stop()
        },
        _onDragStart: function () {
            var t = this._map;
            if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var e = o.latLngBounds(this._map.options.maxBounds);
                this._offsetLimit = o.bounds(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map
                    .latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity =
                    Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        },
        _onDrag: function (t) {
            if (this._map.options.inertia) {
                var e = this._lastTime = +new Date,
                    i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(i), this._times.push(e), e - this._times[0] > 50 && (this._positions.shift(), this
                    ._times.shift())
            }
            this._map.fire("move", t).fire("drag", t)
        },
        _onZoomEnd: function () {
            var t = this._map.getSize().divideBy(2),
                e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function (t, e) {
            return t - (t - e) * this._viscosity
        },
        _onPreDragLimit: function () {
            if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                    e = this._offsetLimit;
                t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t
                    .y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y =
                    this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
            }
        },
        _onPreDragWrap: function () {
            var t = this._worldWidth,
                e = Math.round(t / 2),
                i = this._initialWorldOffset,
                n = this._draggable._newPos.x,
                o = (n - e + i) % t + e - i,
                s = (n + e + i) % t - e - i,
                a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = a
        },
        _onDragEnd: function (t) {
            var e = this._map,
                i = e.options,
                n = !i.inertia || this._times.length < 2;
            if (e.fire("dragend", t), n) e.fire("moveend");
            else {
                var s = this._lastPos.subtract(this._positions[0]),
                    a = (this._lastTime - this._times[0]) / 1e3,
                    r = i.easeLinearity,
                    h = s.multiplyBy(r / a),
                    l = h.distanceTo([0, 0]),
                    d = Math.min(i.inertiaMaxSpeed, l),
                    u = h.multiplyBy(d / l),
                    c = d / (i.inertiaDeceleration * r),
                    p = u.multiplyBy(-c / 2).round();
                p.x || p.y ? (p = e._limitOffset(p, e.options.maxBounds), o.Util.requestAnimFrame(function () {
                    e.panBy(p, {
                        duration: c,
                        easeLinearity: r,
                        noMoveStart: !0,
                        animate: !0
                    })
                })) : e.fire("moveend")
            }
        }
    }), o.Map.addInitHook("addHandler", "dragging", o.Map.Drag), o.DomEvent._on = function (e, i, n, s) {
        var a = i + o.stamp(n) + (s ? "_" + o.stamp(s) : "");
        if (e[r] && e[r][a]) return this;
        var h = function (i) {
            return n.call(s || e, i || t.event)
        }, l = h;
        return o.Browser.pointer && 0 === i.indexOf("touch") ? this.addPointerListener(e, i, h, a) : o.Browser.touch &&
            "dblclick" === i && this.addDoubleTapListener ? this.addDoubleTapListener(e, h, a) : "addEventListener" in
            e ? "mousewheel" === i ? (e.addEventListener("DOMMouseScroll", h, !1), e.addEventListener(i, h, !1)) :
            "mouseenter" === i || "mouseleave" === i ? (h = function (i) {
            i = i || t.event, o.DomEvent._isExternalTarget(e, i) && l(i)
        }, e.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", h, !1)) : ("click" === i && o.Browser.android &&
            (h = function (t) {
            return o.DomEvent._filterClick(t, l)
        }), e.addEventListener(i, h, !1)) : "attachEvent" in e && e.attachEvent("on" + i, h), e[r] = e[r] || {}, e[r][a] =
            h, this
    }, o.DomEvent._off = function (t, e, i, n) {
        var s = e + o.stamp(i) + (n ? "_" + o.stamp(n) : ""),
            a = t[r] && t[r][s];
        return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, s) : o.Browser.touch &&
            "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, s) :
            "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1), t.removeEventListener(
            e, a, !1)) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e,
            a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[r][s] = null, this) : this
    }, o.DomEvent.disableScrollPropagation = function (t) {
        return o.DomEvent.on(t, "mousewheel MozMousePixelScroll", o.DomEvent.stopPropagation)
    }, o.DomEvent.getWheelDelta = function (t) {
        var e = 0;
        return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
    }, o.Util.extend(o.Draggable.prototype, {
        initialize: function (t, e, i) {
            this._element = t, this._dragStartTarget = e || t, this._preventOutline = i, o.DomUtil.disableImageDrag(),
                o.DomUtil.disableTextSelection()
        },
        _onDown: function (t) {
            if (this._moved = !1, !o.DomUtil.hasClass(this._element, "leaflet-zoom-anim") && !(o.Draggable._dragging ||
                t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches) && this._enabled && (o.Draggable._dragging = !
                0, this._preventOutline && o.DomUtil.preventOutline(this._element), !this._moving)) {
                this.fire("down");
                var i = t.touches ? t.touches[0] : t;
                this._startPoint = new o.Point(i.clientX, i.clientY), this._startPos = this._newPos = o.DomUtil.getPosition(
                    this._element), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[
                    t.type], this._onUp, this)
            }
        },
        _updatePosition: function () {
            var t = {
                originalEvent: this._lastEvent
            };
            this.fire("predrag", t), o.DomUtil.setPosition(this._element, this._newPos, this._element.rotate), this.fire(
                "drag", t)
        },
        _onUp: function () {
            o.DomUtil.removeClass(e.body, "leaflet-dragging"), this._lastTarget && (o.DomUtil.removeClass(this._lastTarget,
                "leaflet-drag-target"), this._lastTarget = null);
            for (var t in o.Draggable.MOVE) o.DomEvent.off(e, o.Draggable.MOVE[t], this._onMove, this).off(e, o.Draggable
                    .END[t], this._onUp, this);
            this._moved && this._moving && (o.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
                distance: this._newPos.distanceTo(this._startPos)
            })), this._moving = !1, o.Draggable._dragging = !1
        }
    }), o.Util.extend(o.Map.Drag.prototype, {
        _onDrag: function (t) {
            if (this._map.options.inertia) {
                var e = this._lastTime = +new Date,
                    i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(i), this._times.push(e), e - this._times[0] > 50 && (this._positions.shift(), this
                    ._times.shift())
            }
            this._map.fire("move", t).fire("drag", t).fire("change")
        },
        _onDragEnd: function (t) {
            var e = this._map,
                i = e.options,
                n = !i.inertia || this._times.length < 2;
            if (e.fire("dragend", t), n) e.fire("moveend").fire("changed");
            else {
                var s = this._lastPos.subtract(this._positions[0]),
                    a = (this._lastTime - this._times[0]) / 1e3,
                    r = i.easeLinearity,
                    h = s.multiplyBy(r / a),
                    l = h.distanceTo([0, 0]),
                    d = Math.min(i.inertiaMaxSpeed, l),
                    u = h.multiplyBy(d / l),
                    c = d / (i.inertiaDeceleration * r),
                    p = u.multiplyBy(-c / 2).round();
                p.x || p.y ? (p = e._limitOffset(p, e.options.maxBounds), o.Util.requestAnimFrame(function () {
                    e.panBy(p, {
                        duration: c,
                        easeLinearity: r,
                        noMoveStart: !0,
                        animate: !0
                    })
                })) : e.fire("moveend").fire("changed")
            }
        }
    }), o.Map.mergeOptions({
        doubleClickZoom: !0
    }), o.Map.DoubleClickZoom = o.Handler.extend({
        addHooks: function () {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function () {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function (t) {
            var e = this._map,
                i = e.getZoom(),
                n = e.options.zoomDelta,
                o = t.originalEvent.shiftKey ? i - n : i + n;
            "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
        }
    }), o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom), o.Map.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    }), o.Map.ScrollWheelZoom = o.Handler.extend({
        addHooks: function () {
            o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
        },
        removeHooks: function () {
            o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function (t) {
            var e = o.DomEvent.getWheelDelta(t),
                i = this._map.options.wheelDebounceTime;
            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +
                new Date);
            var n = Math.max(i - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(o.bind(this._performZoom, this), n), o.DomEvent.stop(t)
        },
        _performZoom: function () {
            var t = this._map,
                e = t.getZoom(),
                i = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                s = i ? Math.ceil(o / i) * i : o,
                a = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
            this._delta = 0, this._startTime = null, a && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + a) :
                t.setZoomAround(this._lastMousePos, e + a))
        }
    }), o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom), o.Util.extend(o.Map.ScrollWheelZoom.prototype, {
        addHooks: function () {
            o.DomEvent.on(this._map._container, {
                mousewheel: this._onWheelScroll,
                MozMousePixelScroll: o.DomEvent.preventDefault
            }, this), this._delta = 0
        },
        removeHooks: function () {
            o.DomEvent.off(this._map._container, {
                mousewheel: this._onWheelScroll,
                MozMousePixelScroll: o.DomEvent.preventDefault
            }, this)
        },
        _performZoom: function () {
            var t = this._map,
                e = this._delta,
                i = t.getZoom();
            t.stop(), e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i +
                e) - i, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(
                i + e) : t.setZoomAround(this._lastMousePos, i + e))
        }
    }), o.extend(o.DomEvent, {
        _touchstart: o.Browser.msPointer ? "MSPointerDown" : o.Browser.pointer ? "pointerdown" : "touchstart",
        _touchend: o.Browser.msPointer ? "MSPointerUp" : o.Browser.pointer ? "pointerup" : "touchend",
        addDoubleTapListener: function (t, e, i) {
            function n(t) {
                var e;
                if (e = o.Browser.pointer ? o.DomEvent._pointersCount : t.touches.length, !(e > 1)) {
                    var i = Date.now(),
                        n = i - (a || i);
                    r = t.touches ? t.touches[0] : t, h = n > 0 && n <= l, a = i
                }
            }
            function s() {
                if (h && !r.cancelBubble) {
                    if (o.Browser.pointer) {
                        var t, i, n = {};
                        for (i in r) t = r[i], n[i] = t && t.bind ? t.bind(r) : t;
                        r = n
                    }
                    r.type = "dblclick", e(r), a = null
                }
            }
            var a, r, h = !1,
                l = 250,
                d = "_leaflet_",
                u = this._touchstart,
                c = this._touchend;
            return t[d + u + i] = n, t[d + c + i] = s, t[d + "dblclick" + i] = e, t.addEventListener(u, n, !1), t.addEventListener(
                c, s, !1), o.Browser.edge || t.addEventListener("dblclick", e, !1), this
        },
        removeDoubleTapListener: function (t, e) {
            var i = "_leaflet_",
                n = t[i + this._touchstart + e],
                s = t[i + this._touchend + e],
                a = t[i + "dblclick" + e];
            return t.removeEventListener(this._touchstart, n, !1), t.removeEventListener(this._touchend, s, !1), o.Browser
                .edge || t.removeEventListener("dblclick", a, !1), this
        }
    }), o.extend(o.DomEvent, {
        POINTER_DOWN: o.Browser.msPointer ? "MSPointerDown" : "pointerdown",
        POINTER_MOVE: o.Browser.msPointer ? "MSPointerMove" : "pointermove",
        POINTER_UP: o.Browser.msPointer ? "MSPointerUp" : "pointerup",
        POINTER_CANCEL: o.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
        TAG_WHITE_LIST: ["INPUT", "SELECT", "OPTION"],
        _pointers: {},
        _pointersCount: 0,
        addPointerListener: function (t, e, i, n) {
            return "touchstart" === e ? this._addPointerStart(t, i, n) : "touchmove" === e ? this._addPointerMove(t, i,
                n) : "touchend" === e && this._addPointerEnd(t, i, n), this
        },
        removePointerListener: function (t, e, i) {
            var n = t["_leaflet_" + e + i];
            return "touchstart" === e ? t.removeEventListener(this.POINTER_DOWN, n, !1) : "touchmove" === e ? t.removeEventListener(
                this.POINTER_MOVE, n, !1) : "touchend" === e && (t.removeEventListener(this.POINTER_UP, n, !1), t.removeEventListener(
                this.POINTER_CANCEL, n, !1)), this
        },
        _addPointerStart: function (t, i, n) {
            var s = o.bind(function (t) {
                if ("mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                    if (!(this.TAG_WHITE_LIST.indexOf(t.target.tagName) < 0)) return;
                    o.DomEvent.preventDefault(t)
                }
                this._handlePointer(t, i)
            }, this);
            if (t["_leaflet_touchstart" + n] = s, t.addEventListener(this.POINTER_DOWN, s, !1), !this._pointerDocListener) {
                var a = o.bind(this._globalPointerUp, this);
                e.documentElement.addEventListener(this.POINTER_DOWN, o.bind(this._globalPointerDown, this), !0), e.documentElement
                    .addEventListener(this.POINTER_MOVE, o.bind(this._globalPointerMove, this), !0), e.documentElement.addEventListener(
                    this.POINTER_UP, a, !0), e.documentElement.addEventListener(this.POINTER_CANCEL, a, !0), this._pointerDocListener = !
                    0
            }
        },
        _globalPointerDown: function (t) {
            this._pointers[t.pointerId] = t, this._pointersCount++
        },
        _globalPointerMove: function (t) {
            this._pointers[t.pointerId] && (this._pointers[t.pointerId] = t)
        },
        _globalPointerUp: function (t) {
            delete this._pointers[t.pointerId], this._pointersCount--
        },
        _handlePointer: function (t, e) {
            t.touches = [];
            for (var i in this._pointers) t.touches.push(this._pointers[i]);
            t.changedTouches = [t], e(t)
        },
        _addPointerMove: function (t, e, i) {
            var n = o.bind(function (t) {
                (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && this._handlePointer(
                    t, e)
            }, this);
            t["_leaflet_touchmove" + i] = n, t.addEventListener(this.POINTER_MOVE, n, !1)
        },
        _addPointerEnd: function (t, e, i) {
            var n = o.bind(function (t) {
                this._handlePointer(t, e)
            }, this);
            t["_leaflet_touchend" + i] = n, t.addEventListener(this.POINTER_UP, n, !1), t.addEventListener(this.POINTER_CANCEL,
                n, !1)
        }
    }), o.Map.mergeOptions({
        touchZoom: o.Browser.touch && !o.Browser.android23,
        bounceAtZoomLimits: !0
    }), o.Map.TouchZoom = o.Handler.extend({
        addHooks: function () {
            o.DomUtil.addClass(this._map._container, "leaflet-touch-zoom"), o.DomEvent.on(this._map._container,
                "touchstart", this._onTouchStart, this)
        },
        removeHooks: function () {
            o.DomUtil.removeClass(this._map._container, "leaflet-touch-zoom"), o.DomEvent.off(this._map._container,
                "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function (t) {
            var i = this._map;
            if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                var n = i.mouseEventToContainerPoint(t.touches[0]),
                    s = i.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint),
                    "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(n.add(s)._divideBy(
                    2))), this._startDist = n.distanceTo(s), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !
                    0, i._stop(), o.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd,
                    this), o.DomEvent.preventDefault(t)
            }
        },
        _onTouchMove: function (t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map,
                    i = e.mouseEventToContainerPoint(t.touches[0]),
                    n = e.mouseEventToContainerPoint(t.touches[1]),
                    s = i.distanceTo(n) / this._startDist;
                if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() &&
                    s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" ===
                    e.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 === s) return
                } else {
                    var a = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                    if (1 === s && 0 === a.x && 0 === a.y) return;
                    this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(a), this._zoom)
                }
                this._moved || (e._moveStart(!0), this._moved = !0), o.Util.cancelAnimFrame(this._animRequest);
                var r = o.bind(e._move, e, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = o.Util.requestAnimFrame(r, this, !0), o.DomEvent.preventDefault(t)
            }
        },
        _onTouchEnd: function () {
            return this._moved && this._zooming ? (this._zooming = !1, o.Util.cancelAnimFrame(this._animRequest), o.DomEvent
                .off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd), void(this._map.options.zoomAnimation ?
                this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) :
                this._map._resetView(this._center, this._map._limitZoom(this._zoom)))) : void(this._zooming = !1)
        }
    }), o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom), o.Map.mergeOptions({
        tap: !0,
        tapTolerance: 15
    }), o.Map.Tap = o.Handler.extend({
        addHooks: function () {
            o.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function () {
            o.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function (t) {
            if (t.touches) {
                if (o.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !
                        1, void clearTimeout(this._holdTimeout);
                var i = t.touches[0],
                    n = i.target;
                this._startPos = this._newPos = new o.Point(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() &&
                    o.DomUtil.addClass(n, "leaflet-active"), this._holdTimeout = setTimeout(o.bind(function () {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
                }, this), 1e3), this._simulateEvent("mousedown", i), o.DomEvent.on(e, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this)
            }
        },
        _onUp: function (t) {
            if (clearTimeout(this._holdTimeout), o.DomEvent.off(e, {
                touchmove: this._onMove,
                touchend: this._onUp
            }, this), this._fireClick && t && t.changedTouches) {
                var i = t.changedTouches[0],
                    n = i.target;
                n && n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.removeClass(n, "leaflet-active"), this._simulateEvent(
                    "mouseup", i), this._isTapValid() && this._simulateEvent("click", i)
            }
        },
        _isTapValid: function () {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function (t) {
            var e = t.touches[0];
            this._newPos = new o.Point(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
        },
        _simulateEvent: function (i, n) {
            var o = e.createEvent("MouseEvents");
            o._simulated = !0, n.target._simulatedClick = !0, o.initMouseEvent(i, !0, !0, t, 1, n.screenX, n.screenY, n
                .clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(o)
        }
    }), o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook("addHandler", "tap", o.Map.Tap), o.Map.mergeOptions({
        boxZoom: !0
    }), o.Map.BoxZoom = o.Handler.extend({
        initialize: function (t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane
        },
        addHooks: function () {
            o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function () {
            o.DomEvent.off(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function () {
            return this._moved
        },
        _resetState: function () {
            this._moved = !1
        },
        _onMouseDown: function (t) {
            return !(!t.shiftKey || 1 !== t.which && 1 !== t.button) && (this._resetState(), o.DomUtil.disableTextSelection(),
                o.DomUtil.disableImageDrag(), this._startPoint = this._map.mouseEventToContainerPoint(t), void o.DomEvent
                .on(e, {
                contextmenu: o.DomEvent.stop,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this))
        },
        _onMouseMove: function (t) {
            this._moved || (this._moved = !0, this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._container),
                o.DomUtil.addClass(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point =
                this._map.mouseEventToContainerPoint(t);
            var e = new o.Bounds(this._point, this._startPoint),
                i = e.getSize();
            o.DomUtil.setPosition(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y +
                "px"
        },
        _finish: function () {
            this._moved && (o.DomUtil.remove(this._box), o.DomUtil.removeClass(this._container, "leaflet-crosshair")),
                o.DomUtil.enableTextSelection(), o.DomUtil.enableImageDrag(), o.DomEvent.off(e, {
                contextmenu: o.DomEvent.stop,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function (t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                setTimeout(o.bind(this._resetState, this), 0);
                var e = new o.LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(
                    this._point));
                this._map.fitBounds(e).fire("boxzoomend", {
                    boxZoomBounds: e
                })
            }
        },
        _onKeyDown: function (t) {
            27 === t.keyCode && this._finish()
        }
    }), o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom), o.Map.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    }), o.Map.Keyboard = o.Handler.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function (t) {
            this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function () {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), o.DomEvent.on(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        removeHooks: function () {
            this._removeHooks(), o.DomEvent.off(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function () {
            if (!this._focused) {
                var i = e.body,
                    n = e.documentElement,
                    o = i.scrollTop || n.scrollTop,
                    s = i.scrollLeft || n.scrollLeft;
                this._map._container.focus(), t.scrollTo(s, o)
            }
        },
        _onFocus: function () {
            this._focused = !0, this._map.fire("focus")
        },
        _onBlur: function () {
            this._focused = !1, this._map.fire("blur")
        },
        _setPanDelta: function (t) {
            var e, i, n = this._panKeys = {}, o = this.keyCodes;
            for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
            for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
            for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
            for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t]
        },
        _setZoomDelta: function (t) {
            var e, i, n = this._zoomKeys = {}, o = this.keyCodes;
            for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
            for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t
        },
        _addHooks: function () {
            o.DomEvent.on(e, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function () {
            o.DomEvent.off(e, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function (t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e, i = t.keyCode,
                    n = this._map;
                if (i in this._panKeys) {
                    if (n._panAnim && n._panAnim._inProgress) return;
                    e = this._panKeys[i], t.shiftKey && (e = o.point(e).multiplyBy(3)), n.panBy(e), n.options.maxBounds &&
                        n.panInsideBounds(n.options.maxBounds)
                } else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                else {
                    if (27 !== i) return;
                    n.closePopup()
                }
                o.DomEvent.stop(t)
            }
        }
    }), o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard), o.Util.extend(o.Map.Keyboard.prototype, {
        keyCodes: o.Util.extend(o.Map.Keyboard.prototype.keyCodes, {
            left: [37, 36, 65],
            right: [39, 35, 68],
            down: [40, 34, 83],
            up: [38, 33, 87]
        })
    }), o.Handler.MarkerDrag = o.Handler.extend({
        initialize: function (t) {
            this._marker = t
        },
        addHooks: function () {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new o.Draggable(t, t, !0)), this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).enable(),
            o.DomUtil.addClass(t, "leaflet-marker-draggable")
        },
        removeHooks: function () {
            this._draggable.off({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).disable(), this._marker._icon && o.DomUtil.removeClass(this._marker._icon,
                "leaflet-marker-draggable")
        },
        moved: function () {
            return this._draggable && this._draggable._moved
        },
        _onDragStart: function () {
            this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
        },
        _onDrag: function (t) {
            var e = this._marker,
                i = e._shadow,
                n = o.DomUtil.getPosition(e._icon),
                s = e._map.layerPointToLatLng(n);
            i && o.DomUtil.setPosition(i, n), e._latlng = s, t.latlng = s, t.oldLatLng = this._oldLatLng, e.fire("move",
                t).fire("drag", t)
        },
        _onDragEnd: function (t) {
            delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
        }
    }), o.Util.extend(o.Handler.MarkerDrag.prototype, {
        _ischangeOffset: !1,
        addHooks: function () {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new o.Draggable(t, t, !0), this._draggable._updatePosition = function () {
                var t = this._lastEvent;
                this.fire("predrag", t);
                var e = t.touches ? t.touches[0] : t;
                this.fire("drag", {
                    offset: this._startPoint.subtract(new o.Point(e.clientX, e.clientY))
                }), this._startPoint = new o.Point(e.clientX, e.clientY)
            }), this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).enable(), o.DomUtil.addClass(t, "leaflet-marker-draggable")
        },
        removeHooks: function () {
            this._draggable.off({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).disable(), this._marker._icon && o.DomUtil.removeClass(this._marker._icon,
                "leaflet-marker-draggable")
        },
        _onDragStart: function () {
            this._marker.closePopup().fire("movestart").fire("dragstart");
            var t = this._marker.options,
                e = this._marker.getElement(),
                i = this._marker.dragging;
            if (t.raiseOnDrag && !i._ischangeOffset) {
                i._ischangeOffset = !0;
                var n = t.icon.options.iconSize,
                    s = t.angleOffsetX,
                    a = parseInt(n[0]);
                null == t.angleOffsetX && (s = a / 2);
                var r = parseInt(e.style.marginLeft) + s - 5.5,
                    h = parseInt(e.style.marginTop) + (n[1] - 11) + 5.5,
                    l = o.DomUtil.create("div", "");
                l.style.cssText = "position:absolute;background:url(" + t.raiseUrl +
                    ") ;width:11px;height:11px;overflow: hidden;margin-top:" + h + "px;margin-left:" + r + "px", o.Browser
                    .ie ? (l.style.transform = e.style.transform, l.style.top = e.style.top, l.style.left = e.style.left,
                    l.style.position = "absolute") : l.style.transform = e.style.transform, i._bottomEle = l, e.parentNode
                    .appendChild(l), e.style.marginTop = parseInt(e.style.marginTop) - 25 + "px"
            }
        },
        _onDrag: function (t) {
            this._transformPoints(t.offset, t), this._marker.fire("move", t).fire("drag", t)
        },
        _transformPoints: function (t, e) {
            var i = this._marker;
            if (i._latlng) {
                var n = i._map.containerPointToLatLng(i._map.latLngToContainerPoint(i._latlng)._subtract(t));
                i._latlng = n, e.latlng = n, i.setLatLng(n)
            }
            var s = this._marker.getElement(),
                a = this._marker.dragging;
            a._bottomEle && (o.Browser.ie ? (a._bottomEle.style.top = s.style.top, a._bottomEle.style.left = s.style.left) :
                a._bottomEle.style.transform = s.style.transform)
        },
        _onDragEnd: function (t) {
            t.latlng = this._marker._latlng, this._marker.fire("moveend").fire("dragend", t);
            var e = this._marker.getElement(),
                i = this._marker.dragging;
            if (e) {
                i._ischangeOffset && (i._ischangeOffset = !1, e.style.marginTop = parseInt(e.style.marginTop) + 25 +
                    "px");
                var n = i._bottomEle;
                n && (e.parentNode.removeChild(n), i._bottomEle = null)
            }
        }
    }), o.Handler.GroundImageDrag = o.Handler.MarkerDrag.extend({
        _transformPoints: function (t, e) {
            var i = this._marker;
            if (i._latlng) {
                var n = i._map.containerPointToLatLng(i._map.latLngToContainerPoint(i._latlng)._subtract(t));
                i._latlng = n, e.latlng = n;
                var s = i._bounds;
                s._northEast = i._map.containerPointToLatLng(i._map.latLngToContainerPoint(s._northEast)._subtract(t)),
                    s._southWest = i._map.containerPointToLatLng(i._map.latLngToContainerPoint(s._southWest)._subtract(
                    t)), i.setLatLng(n)
            }
            var a = this._marker.getElement(),
                r = this._marker.dragging;
            r._bottomEle && (o.Browser.ie ? (r._bottomEle.style.top = a.style.top, r._bottomEle.style.left = a.style.left) :
                r._bottomEle.style.transform = a.style.transform)
        }
    }), o.Browser.svg ? o.Path.include({
        _resetTransform: function () {
            this._renderer._rootGroup.setAttributeNS(null, "transform", "")
        },
        _applyTransform: function (t) {
            this._renderer._rootGroup.setAttributeNS(null, "transform", "matrix(" + t.join(" ") + ")")
        }
    }) : o.Path.include({
        _resetTransform: function () {
            this._skew && (this._skew.on = !1, this._renderer._rootGroup.removeChild(this._skew), this._skew = null)
        },
        _applyTransform: function (t) {
            var e = this._skew;
            e || (e = this._createElement("skew"), this._renderer._rootGroup.appendChild(e), e.style.behavior =
                "url(#default#VML)", this._skew = e);
            var i = t[0].toFixed(8) + " " + t[1].toFixed(8) + " " + t[2].toFixed(8) + " " + t[3].toFixed(8) + " 0 0",
                n = Math.floor(t[4]).toFixed() + ", " + Math.floor(t[5]).toFixed(),
                o = this._renderer._rootGroup.style,
                s = parseFloat(o.left),
                a = parseFloat(o.top),
                r = parseFloat(o.width),
                h = parseFloat(o.height);
            isNaN(s) && (s = 0), isNaN(a) && (a = 0), !isNaN(r) && r || (r = 1), !isNaN(h) && h || (h = 1);
            var l = (-s / r - .5).toFixed(8) + " " + (-a / h - .5).toFixed(8);
            e.on = "f", e.matrix = i, e.origin = l, e.offset = n, e.on = !0
        }
    }), o.Path.include({
        _onMouseClick: function (t) {
            this.dragging && this.dragging.moved() || this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(
                t)
        }
    }), o.Handler.PathDrag = o.Handler.extend({
        initialize: function (t) {
            this._Object = t
        },
        addHooks: function () {
            var t = this._Object._path;
            this._draggable || (this._draggable = new o.Draggable(t, t, !0), this._draggable._updatePosition = function () {
                var t = this._lastEvent;
                this.fire("predrag", t);
                var e = t.touches ? t.touches[0] : t;
                this.fire("drag", {
                    offset: this._startPoint.subtract(new o.Point(e.clientX, e.clientY))
                }), this._startPoint = new o.Point(e.clientX, e.clientY)
            }), this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).enable(), o.DomUtil.addClass(this._Object._renderer._rootGroup, "leaflet-path-draggable")
        },
        removeHooks: function () {
            this._draggable.off({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).disable(), o.Path.CANVAS || o.DomUtil.removeClass(this._Object._renderer._rootGroup,
                "leaflet-path-draggable")
        },
        moved: function () {
            return this._draggable && this._draggable._moved
        },
        _onDragStart: function (t) {
            this._Object.fire("movestart").fire("dragstart")
        },
        _onDrag: function (t) {
            this._transformPoints(t.offset), this._Object.fire("move", t).fire("drag", t)
        },
        _onDragEnd: function (t) {
            this._Object.fire("moveend").fire("dragend")
        },
        _transformPoints: function (t) {
            var e, i, n, o = this._Object;
            if (o._latlng = o._latlng || o._position, o._latlng) o._latlng = o._map.containerPointToLatLng(o._map.latLngToContainerPoint(
                    o._latlng)._subtract(t)), o.setLatLng(o._latlng);
            else if (o._latlngs) {
                for (o._latlngs = o._latlngs.length > 1 ? o._latlngs : o._latlngs[0], e = 0, i = o._latlngs.length; e <
                    i; e++) {
                    var n = o._latlngs[e],
                        s = o._map.latLngToContainerPoint(n)._subtract(t);
                    o._latlngs[e] = o._map.containerPointToLatLng(s)
                }
                o.setLatLngs(o._latlngs)
            }
        }
    }), o.Path.prototype.drag = function (t) {
        t ? (this.dragging || (this.dragging = new o.Handler.PathDrag(this)), this.dragging.enable()) : this.dragging &&
            this.dragging.disable()
    }, o.Edit = o.Edit || {}, o.Edit.Poly = o.Handler.extend({
        options: {
            icon: new o.DivIcon({
                iconSize: new o.Point(8, 8),
                className: "leaflet-div-icon leaflet-editing-icon",
                offset: [-5, -6]
            })
        },
        initialize: function (t, e) {
            this._poly = t, o.setOptions(this, e)
        },
        addHooks: function () {
            this._poly._map && (this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup))
        },
        removeHooks: function () {
            this._poly._map && (this._poly._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers)
        },
        updateMarkers: function () {
            this._markerGroup.clearLayers(), this._initMarkers()
        },
        _initMarkers: function () {
            this._markerGroup || (this._markerGroup = new o.LayerGroup), this._markers = [];
            var t, e, i, n, s = this._poly._latlngs.length > 1 ? this._poly._latlngs : this._poly._latlngs[0];
            for (t = 0, i = s.length; t < i; t++) n = this._createMarker(s[t], t), n.on("click", this._onMarkerClick,
                    this), this._markers.push(n);
            var a, r;
            for (t = 0, e = i - 1; t < i; e = t++)(0 !== t || o.Polygon && this._poly instanceof o.Polygon) && (a =
                    this._markers[e], r = this._markers[t], this._createMiddleMarker(a, r), this._updatePrevNext(a, r))
        },
        _createMarker: function (t, e) {
            var i = new o.Marker(t, {
                draggable: !0,
                icon: this.options.icon
            });
            return i._origLatLng = t, i._index = e, i.on("mousedown", this._onMarkerStart, this), i.on("drag", this._onMarkerDrag,
                this), i.on("dragend", this._fireEdit, this), this._markerGroup.addLayer(i), i
        },
        _fireEdit: function () {
            this._poly.fire("editend")
        },
        _onMarkerStart: function (t) {
            this._poly.fire("editstart")
        },
        _onMarkerDrag: function (t) {
            var e = t.target;
            o.extend(e._origLatLng, e._latlng), e._middleLeft && e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev,
                e)), e._middleRight && e._middleRight.setLatLng(this._getMiddleLatLng(e, e._next)), this._poly.redraw(),
                this._poly.fire("editing")
        },
        _onMarkerClick: function (t) {
            if (!(this._poly._latlngs.length < 3)) {
                var e = t.target,
                    i = e._index;
                this._markerGroup.removeLayer(e), this._markers.splice(i, 1), this._poly.spliceLatLngs(i, 1), this._updateIndexes(
                    i, -1), this._updatePrevNext(e._prev, e._next), e._middleLeft && this._markerGroup.removeLayer(e._middleLeft),
                    e._middleRight && this._markerGroup.removeLayer(e._middleRight), e._prev && e._next ? this._createMiddleMarker(
                    e._prev, e._next) : e._prev ? e._next || (e._prev._middleRight = null) : e._next._middleLeft = null,
                    this._poly.fire("removeedit")
            }
        },
        _updateIndexes: function (t, e) {
            this._markerGroup.eachLayer(function (i) {
                i._index > t && (i._index += e)
            })
        },
        _createMiddleMarker: function (t, e) {
            var i, n, o, s = this._getMiddleLatLng(t, e),
                a = this._createMarker(s);
            a.setOpacity(.6), t._middleRight = e._middleLeft = a, n = function () {
                var i = e._index;
                a._index = i, a.on("click", this._onMarkerClick, this), s.lat = a.getLatLng().lat, s.lng = a.getLatLng()
                    .lng, this._poly.spliceLatLngs(i, 0, s), this._markers.splice(i, 0, a), a.setOpacity(1), this._updateIndexes(
                    i, 1), e._index++, this._updatePrevNext(t, a), this._updatePrevNext(a, e), this._poly.fire(
                    "editstart")
            }, o = function () {
                a.off("dragstart", n, this), a.off("dragend", o, this), this._createMiddleMarker(t, a), this._createMiddleMarker(
                    a, e)
            }, i = function () {}, a.on("dragstart", n, this).on("dragend", o, this), this._markerGroup.addLayer(a)
        },
        _updatePrevNext: function (t, e) {
            t && (t._next = e), e && (e._prev = t)
        },
        _getMiddleLatLng: function (t, e) {
            var i = this._poly._map,
                n = i.latLngToLayerPoint(t.getLatLng()),
                o = i.latLngToLayerPoint(e.getLatLng());
            return i.layerPointToLatLng(n._add(o)._divideBy(2))
        }
    }), o.Polyline.addInitHook(function () {
        this.editing || (o.Edit.Poly && (this.editing = new o.Edit.Poly(this), this.options.editable && this.editing.enable()),
            this.on("add", function () {
            this.editing && this.editing.enabled() && this.editing.addHooks()
        }), this.on("remove", function () {
            this.editing && this.editing.enabled() && this.editing.removeHooks()
        }))
    }), o.Edit = o.Edit || {}, o.Edit.SimpleShape = o.Handler.extend({
        options: {
            moveIcon: new o.DivIcon({
                iconSize: new o.Point(8, 8),
                className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move"
            }),
            resizeIcon: new o.DivIcon({
                iconSize: new o.Point(8, 8),
                offset: new o.Point(-6, -5),
                className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
            })
        },
        initialize: function (t, e) {
            this._shape = t, o.Util.setOptions(this, e)
        },
        addHooks: function () {
            this._shape._map && (this._map = this._shape._map, this._markerGroup || this._initMarkers(), this._map.addLayer(
                this._markerGroup))
        },
        removeHooks: function () {
            if (this._shape._map) {
                for (var t = 0, e = this._resizeMarkers.length; t < e; t++) this._unbindMarker(this._resizeMarkers[t]);
                this._resizeMarkers = null, this._map.removeLayer(this._markerGroup), delete this._markerGroup
            }
            this._map = null
        },
        updateMarkers: function () {
            this._markerGroup.clearLayers(), this._initMarkers()
        },
        _initMarkers: function () {
            this._markerGroup || (this._markerGroup = new o.LayerGroup), this._createResizeMarker()
        },
        _createResizeMarker: function () {},
        _createMarker: function (t, e) {
            var i = new o.Marker(t, {
                draggable: !0,
                icon: e,
                zIndexOffset: 10
            });
            return this._bindMarker(i), this._markerGroup.addLayer(i), i
        },
        _bindMarker: function (t) {
            t.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd,
                this)
        },
        _unbindMarker: function (t) {
            t.off("dragstart", this._onMarkerDragStart).off("drag", this._onMarkerDrag).off("dragend", this._onMarkerDragEnd)
        },
        _onMarkerDragStart: function (t) {
            var e = t.target;
            e.setOpacity(0)
        },
        _onMarkerDrag: function (t) {
            var e = t.target,
                i = e.getLatLng();
            e === this._moveMarker ? this._move(i) : this._resize(i), this._shape.redraw()
        },
        _onMarkerDragEnd: function (t) {
            var e = t.target;
            e.setOpacity(1), this._shape.fire("edit")
        },
        _move: function () {},
        _resize: function () {}
    }), o.Edit = o.Edit || {}, o.Edit.Rectangle = o.Edit.SimpleShape.extend({
        _createMoveMarker: function () {
            var t = this._shape.getBounds();
            t.getCenter()
        },
        _createResizeMarker: function () {
            var t = this._getCorners();
            this._resizeMarkers = [];
            for (var e = 0, i = t.length; e < i; e++) this._resizeMarkers.push(this._createMarker(t[e], this.options.resizeIcon)),
                    this._resizeMarkers[e]._cornerIndex = e
        },
        _onMarkerDragStart: function (t) {
            o.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t);
            var e = this._getCorners(),
                i = t.target,
                n = i._cornerIndex;
            this._oppositeCorner = e[(n + 2) % 4], this._toggleCornerMarkers(0, n)
        },
        _onMarkerDragEnd: function (t) {
            var e, i, n = t.target;
            n === this._moveMarker && (e = this._shape.getBounds(), i = e.getCenter(), n.setLatLng(i)), this._toggleCornerMarkers(
                1), this._repositionCornerMarkers(), o.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t)
        },
        _move: function (t) {
            for (var e, i = this._shape.getLatLngs(), n = this._shape.getBounds(), o = n.getCenter(), s = [], a = 0, r =
                    i.length; a < r; a++) e = [i[a].lat - o.lat, i[a].lng - o.lng], s.push([t.lat + e[0], t.lng + e[1]]);
            this._shape.setLatLngs(s), this._repositionCornerMarkers()
        },
        _resize: function (t) {
            var e;
            this._shape.setBounds(o.latLngBounds(t, this._oppositeCorner)), e = this._shape.getBounds()
        },
        _getCorners: function () {
            var t = this._shape.getBounds(),
                e = t.getNorthWest(),
                i = t.getNorthEast(),
                n = t.getSouthEast(),
                o = t.getSouthWest();
            return [e, i, n, o]
        },
        _toggleCornerMarkers: function (t) {
            for (var e = 0, i = this._resizeMarkers.length; e < i; e++) this._resizeMarkers[e].setOpacity(t)
        },
        _repositionCornerMarkers: function () {
            for (var t = this._getCorners(), e = 0, i = this._resizeMarkers.length; e < i; e++) this._resizeMarkers[e].setLatLng(
                    t[e])
        }
    }), o.Rectangle.addInitHook(function () {
        o.Edit.Rectangle && (this.editing = new o.Edit.Rectangle(this), this.options.editable && this.editing.enable())
    }), o.Edit = o.Edit || {}, o.Edit.Circle = o.Edit.SimpleShape.extend({
        _createResizeMarker: function () {
            var t = this._shape.getLatLng(),
                e = this._getResizeMarkerPoint(t);
            this._resizeMarkers = [], this._resizeMarkers.push(this._createMarker(e, this.options.resizeIcon))
        },
        _getResizeMarkerPoint: function (t) {
            var e = this._shape._radius * Math.cos(Math.PI / 4),
                i = this._map.project(t);
            return this._map.unproject([i.x + e, i.y - e])
        },
        _move: function (t) {
            var e = this._getResizeMarkerPoint(t);
            this._resizeMarkers[0].setLatLng(e), this._shape.setLatLng(t)
        },
        _resize: function (t) {
            var e = this._shape.getLatLng(),
                i = e.distanceTo(t);
            this._shape.setRadius(i)
        }
    }), o.Circle.addInitHook(function () {
        o.Edit.Circle && (this.editing = new o.Edit.Circle(this), this.options.editable && this.editing.enable()), this
            .on("add", function () {
            this.editing && this.editing.enabled() && this.editing.addHooks()
        }), this.on("remove", function () {
            this.editing && this.editing.enabled() && this.editing.removeHooks()
        })
    }), o.Control = o.Class.extend({
        options: {
            position: "topright"
        },
        initialize: function (t) {
            o.setOptions(this, t)
        },
        getPosition: function () {
            return this.options.position
        },
        setPosition: function (t) {
            var e = this._map;
            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
        },
        getContainer: function () {
            return this._container
        },
        addTo: function (t) {
            this.remove(), this._map = t;
            var e = this._container = this.onAdd(t),
                i = this.getPosition(),
                n = t._controlCorners[i];
            return o.DomUtil.addClass(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) :
                n.appendChild(e), this
        },
        remove: function () {
            return this._map ? (o.DomUtil.remove(this._container), this.onRemove && this.onRemove(this._map), this._map =
                null, this) : this
        },
        _refocusOnMap: function (t) {
            this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
        }
    }), o.control = function (t) {
        return new o.Control(t)
    }, o.Map.include({
        addControl: function (t) {
            return t.addTo(this), this
        },
        removeControl: function (t) {
            return t.remove(), this
        },
        _initControlPos: function () {
            function t(t, s) {
                var a = i + t + " " + i + s;
                e[t + s] = o.DomUtil.create("div", a, n)
            }
            var e = this._controlCorners = {}, i = "leaflet-",
                n = this._controlContainer = o.DomUtil.create("div", i + "control-container", this._container);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        },
        _clearControlPos: function () {
            o.DomUtil.remove(this._controlContainer)
        }
    }), o.Control.Zoom = o.Control.extend({
        options: {
            position: "topleft",
            zoomInText: "+",
            zoomInTitle: "Zoom in",
            zoomOutText: "-",
            zoomOutTitle: "Zoom out"
        },
        onAdd: function (t) {
            var e = "leaflet-control-zoom",
                i = o.DomUtil.create("div", e + " leaflet-bar"),
                n = this.options;
            return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn),
                this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut),
                this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
        },
        onRemove: function (t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
        },
        disable: function () {
            return this._disabled = !0, this._updateDisabled(), this
        },
        enable: function () {
            return this._disabled = !1, this._updateDisabled(), this
        },
        _zoomIn: function (t) {
            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta *
                (t.shiftKey ? 3 : 1))
        },
        _zoomOut: function (t) {
            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta *
                (t.shiftKey ? 3 : 1))
        },
        _createButton: function (t, e, i, n, s) {
            var a = o.DomUtil.create("a", i, n);
            return a.innerHTML = t, a.href = "#", a.title = e, a.setAttribute("role", "button"), a.setAttribute(
                "aria-label", e), o.DomEvent.on(a, "mousedown dblclick", o.DomEvent.stopPropagation).on(a, "click", o.DomEvent
                .stop).on(a, "click", s, this).on(a, "click", this._refocusOnMap, this), a
        },
        _updateDisabled: function () {
            var t = this._map,
                e = "leaflet-disabled";
            o.DomUtil.removeClass(this._zoomInButton, e), o.DomUtil.removeClass(this._zoomOutButton, e), (this._disabled ||
                t._zoom === t.getMinZoom()) && o.DomUtil.addClass(this._zoomOutButton, e), (this._disabled || t._zoom ===
                t.getMaxZoom()) && o.DomUtil.addClass(this._zoomInButton, e)
        }
    }), o.control.zoom = function (t) {
        return new o.Control.Zoom(t)
    }, o.Util.extend(o.Control.prototype, {
        options: o.Util.extend(o.Control.prototype.options, {
            position: [0, 0],
            visible: !0
        }),
        setPosition: function (t) {
            this._map;
            return this.options.position = t, this._calculatePosition(), this
        },
        setOffset: function (t) {
            this.options.offset = t, this._calculatePosition()
        },
        visible: function (t) {
            var e = this._container;
            e && (t ? e.style.visibility = "inherit" : e.style.visibility = "hidden"), this.options.visible = t
        },
        addTo: function (t) {
            this.remove(), this._map = t;
            var e = this._container = this.onAdd(t),
                i = this.getPosition();
            o.DomUtil.addClass(e, "leaflet-control");
            var n = o.DomUtil.create("div", "leaflet-top leaflet-left", t._controlContainer);
            return i.indexOf && i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this.visible(
                this.options.visible), this._calculatePosition(), t.on("resize", this._calculatePosition, this), this
        },
        _calculatePosition: function () {
            var t = this,
                e = t._container;
            if (e && t._map) {
                var i = t.options,
                    n = t._map.getSize(),
                    o = n.x,
                    s = n.y,
                    a = o * i.position[0],
                    r = s * i.position[1],
                    h = e.offsetWidth || e.style.width,
                    l = e.offsetHeight || e.style.height;
                switch (i.position.join(",")) {
                case "0,0":
                    break;
                case "0.5,0":
                    a -= h / 2;
                    break;
                case "1,0":
                    a -= h;
                    break;
                case "1,0.5":
                    a -= h, r -= l / 2;
                    break;
                case "1,1":
                    a -= h, r -= l;
                    break;
                case "0.5,1":
                    a -= h / 2, r -= l;
                    break;
                case "0,0.5":
                    r -= l / 2;
                    break;
                case "0,1":
                    r -= l;
                    break;
                default:
                    r -= l / 2
                }
                a += Math.floor(i.offset.x), r += Math.floor(i.offset.y), e.style.left = a + "px", e.style.top = r +
                    "px"
            }
        },
        remove: function () {
            return this._map ? (o.DomUtil.remove(this._container), this.onRemove && this.onRemove(this._map), this._map
                .off("resize", this._calculatePosition, this), this._map = null, this) : this
        }
    }), o.Util.extend(o.Control.Zoom.prototype, {
        options: o.Util.extend(o.Control.Zoom.prototype.options, {
            position: [0, 0],
            offset: {
                x: 10,
                y: 10
            }
        })
    }), o.Control.Attribution = o.Control.extend({
        options: {
            position: "bottomright",
            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        },
        initialize: function (t) {
            o.setOptions(this, t), this._attributions = {}
        },
        onAdd: function (t) {
            t.attributionControl = this, this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent &&
                o.DomEvent.disableClickPropagation(this._container);
            for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return this._update(), this._container
        },
        setPrefix: function (t) {
            return this.options.prefix = t, this._update(), this
        },
        addAttribution: function (t) {
            return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(),
                this) : this
        },
        removeAttribution: function (t) {
            return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
        },
        _update: function () {
            if (this._map) {
                var t = [];
                for (var e in this._attributions) this._attributions[e] && t.push(e);
                var i = [];
                this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML =
                    i.join(" | ")
            }
        }
    }), o.control.attribution = function (t) {
        return new o.Control.Attribution(t)
    }, o.Util.extend(o.Control.Attribution.prototype, {
        options: o.Util.extend(o.Control.Attribution.prototype.options, {
            position: [1, 1],
            offset: {
                x: -5,
                y: -5
            },
            prefix: ""
        }),
        onAdd: function (t) {
            return this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent && o.DomEvent.disableClickPropagation(
                this._container), this._update(), this._container
        },
        addAttribution: function (t) {
            return t || t.id ? (this._attributions[t.id] = t, this._update(), this) : this
        },
        removeAttribution: function (t) {
            if (t && this._attributions[t]) return this._attributions[t] = i, this._update(), this
        },
        getAttribution: function (t) {
            return this._attributions[t]
        },
        getAttributions: function () {
            var t = [];
            for (var e in this._attributions) this._attributions[e] && t.push(this._attributions[e]);
            return t
        },
        _update: function () {
            if (this._map) {
                var t = [];
                for (var e in this._attributions) this._attributions[e] && t.push(this._attributions[e].content);
                this._container.innerHTML = t.join(" | "), this._calculatePosition()
            }
        }
    }), o.Control.Scale = o.Control.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0
        },
        onAdd: function (t) {
            var e = "leaflet-control-scale",
                i = o.DomUtil.create("div", e),
                n = this.options;
            return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
                t.whenReady(this._update, this), i
        },
        onRemove: function (t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        },
        _addScales: function (t, e, i) {
            t.metric && (this._mScale = o.DomUtil.create("div", e, i)), t.imperial && (this._iScale = o.DomUtil.create(
                "div", e, i))
        },
        _update: function () {
            var t = this._map,
                e = t.getSize().y / 2,
                i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
            this._updateScales(i)
        },
        _updateScales: function (t) {
            this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
        },
        _updateMetric: function (t) {
            var e = this._getRoundNum(t),
                i = e < 1e3 ? e + " m" : e / 1e3 + " km";
            this._updateScale(this._mScale, i, e / t)
        },
        _updateImperial: function (t) {
            var e, i, n, o = 3.2808399 * t;
            o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (n =
                this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
        },
        _updateScale: function (t, e, i) {
            t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e
        },
        _getRoundNum: function (t) {
            var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                i = t / e;
            return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
        }
    }), o.control.scale = function (t) {
        return new o.Control.Scale(t)
    }, o.Util.extend(o.Control.Scale.prototype, {
        options: o.Util.extend(o.Control.Scale.prototype.options, {
            position: [0, 1],
            offset: {
                x: 5,
                y: -5
            },
            maxWidth: 150
        }),
        _updateMetric: function (t) {
            var e = this._getRoundNum(t),
                i = e < 1e3 ? e + "ç±³" : e / 1e3 + "å…¬é‡Œ";
            this._updateScale(this._mScale, i, e / t)
        },
        _updateImperial: function (t) {
            var e, i, n, o = 3.2808399 * t;
            o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + "è‹±é‡Œ", i / e)) :
                (n = this._getRoundNum(o), this._updateScale(this._iScale, n + "è‹±å°º", n / o))
        }
    }), o.PosAnimation = o.Evented.extend({
        run: function (t, e, i, n) {
            this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(
                n || .5, .2), this._startPos = o.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos),
                this._startTime = +new Date, this.fire("start"), this._animate()
        },
        stop: function () {
            this._inProgress && (this._step(!0), this._complete())
        },
        _animate: function () {
            this._animId = o.Util.requestAnimFrame(this._animate, this), this._step()
        },
        _step: function (t) {
            var e = +new Date - this._startTime,
                i = 1e3 * this._duration;
            e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete())
        },
        _runFrame: function (t, e) {
            var i = this._startPos.add(this._offset.multiplyBy(t));
            e && i._round(), o.DomUtil.setPosition(this._el, i), this.fire("step")
        },
        _complete: function () {
            o.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
        },
        _easeOut: function (t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
        }
    }), o.Map.include({
        setView: function (t, e, n) {
            if (e = e === i ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds),
                n = n || {}, this._stop(), this._loaded && !n.reset && n !== !0) {
                n.animate !== i && (n.zoom = o.extend({
                    animate: n.animate
                }, n.zoom), n.pan = o.extend({
                    animate: n.animate,
                    duration: n.duration
                }, n.pan));
                var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(
                    t, n.pan);
                if (s) return clearTimeout(this._sizeTimer), this
            }
            return this._resetView(t, e), this.fire("moveend").fire("changed"), this
        },
        panBy: function (t, e) {
            if (t = o.point(t).round(), e = e || {}, !t.x && !t.y) return this.fire("moveend").fire("changed");
            if (e.animate !== !0 && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(
                    this.getCenter()).add(t)), this.getZoom()), this;
            if (this._panAnim || (this._panAnim = new o.PosAnimation, this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
            }, this)), e.noMoveStart || this.fire("movestart").fire("changed"), e.animate !== !1) {
                o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                var i = this._getMapPanePos().subtract(t);
                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
            } else this._rawPanBy(t), this.fire("move").fire("moveend").fire("changed");
            return this
        },
        _onPanTransitionStep: function () {
            this.fire("move").fire("change")
        },
        _onPanTransitionEnd: function () {
            o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend").fire("changed")
        }
    }), o.Map.include({
        _defaultLocateOptions: {
            timeout: 1e4,
            watch: !1
        },
        locate: function (t) {
            if (t = this._locateOptions = o.extend({}, this._defaultLocateOptions, t), !("geolocation" in navigator))
                return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
            var e = o.bind(this._handleGeolocationResponse, this),
                i = o.bind(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation
                .getCurrentPosition(e, i, t), this
        },
        stopLocate: function () {
            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
                this._locateOptions && (this._locateOptions.setView = !1), this
        },
        _handleGeolocationError: function (t) {
            var e = t.code,
                i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + i + "."
            })
        },
        _handleGeolocationResponse: function (t) {
            var e = t.coords.latitude,
                i = t.coords.longitude,
                n = new o.LatLng(e, i),
                s = n.toBounds(t.coords.accuracy),
                a = this._locateOptions;
            if (a.setView) {
                var r = this.getBoundsZoom(s);
                this.setView(n, a.maxZoom ? Math.min(r, a.maxZoom) : r)
            }
            var h = {
                latlng: n,
                bounds: s,
                timestamp: t.timestamp
            };
            for (var l in t.coords) "number" == typeof t.coords[l] && (h[l] = t.coords[l]);
            this.fire("locationfound", h)
        }
    }), o.Label = (o.Layer ? o.Layer : o.Class).extend({
        includes: o.Mixin.Events,
        options: {
            className: "",
            clickable: !0,
            direction: "right",
            noHide: !1,
            offset: [0, 0],
            anchor: [0, 0],
            opacity: 1,
            zoomAnimation: !0,
            fontName: "å®‹ä½“",
            fontColor: "#ffffff",
            fontSize: 12,
            fontBold: !0,
            title: "",
            type: "0"
        },
        initialize: function (t, e) {
            o.setOptions(this, t), this._source = e, this._animated = o.Browser.any3d && this.options.zoomAnimation,
                this._isOpen = !1
        },
        onAdd: function (t) {
            this._map = t, this._pane = this.options.pane ? t._panes[this.options.pane] : this._source instanceof o.Marker ?
                t._panes.markerPane : t._panes.popupPane, this._parentContainer || this._initLayout(), this._pane.appendChild(
                this._parentContainer), this._initInteraction(), this._update(), this.setOpacity(this.options.opacity),
                t.on("moveend", this._onMoveEnd, this).on("viewreset", this._onViewReset, this), this._animated && t.on(
                "zoom", this._zoomAnimation, this)
        },
        onRemove: function (t) {
            this._pane.removeChild(this._parentContainer), t.off({
                zoom: this._zoomAnimation,
                moveend: this._onMoveEnd,
                viewreset: this._onViewReset
            }, this), this._removeInteraction(), this._map = null
        },
        setLatLng: function (t) {
            return this._latlng = o.latLng(t), this._map && this._updatePosition(), this
        },
        getLatLng: function () {
            return this._latlng
        },
        setContent: function (t) {
            return this._previousContent = this._content, this._content = t, this._updateContent(), this
        },
        close: function () {
            var t = this._map;
            t && t.removeLayer(this)
        },
        updateZIndex: function (t) {
            this._zIndex = t, this._parentContainer && this._zIndex && (this._parentContainer.style.zIndex = t)
        },
        setOpacity: function (t) {
            this.options.opacity = t, this._container && o.DomUtil.setOpacity(this._container, t)
        },
        getOptions: function () {
            return this.options
        },
        getLabelSize: function () {
            return [this._labelWidth, this._labelHeight]
        },
        getElement: function () {
            return this._parentContainer
        },
        _initLayout: function () {
            this._parentContainer = o.DomUtil.create("div", ""), this._parentContainer.style.position = "absolute",
                this._parentContainer.style.zIndex = 210, this._container = o.DomUtil.create("div", "leafletmap-label " +
                this.options.className + " leafletmap-zoom-animated"), this._container.style.color = this.options.fontColor,
                this._container.style.font = this.options.fontSize + 'px "' + this.options.fontName + '"', this._container
                .style.fontWeight = this.options.fontBold ? "bold" : "normal", this._container.style.border =
                "1px solid rgb(128, 128, 128)", this._container.style.backgroundColor = "rgb(255, 255, 255)", this._container
                .style.padding = "1px 2px", this._container.style.whiteSpace = "nowrap", this._parentContainer.appendChild(
                this._container), this.updateZIndex(this._zIndex)
        },
        _update: function () {
            this._map && (this._parentContainer.style.visibility = "hidden", this._updateContent(), this._updatePosition(),
                this._parentContainer.style.visibility = "")
        },
        _updateContent: function () {
            this._content && this._map && ("0" == this.options.type ? (this._container.className = this.options.className +
                " leafletmap-zoom-animated", this._container.style.color = this.options.fontColor, this._container.style
                .font = this.options.fontSize + 'px "' + this.options.fontName + '"', this._container.style.fontWeight =
                this.options.fontBold ? "bold" : "normal", this._container.innerHTML = this._content, this._prevContent =
                this._content) : (this._parentContainer.removeChild(this._container), "string" == typeof this._content ?
                (this._container = o.DomUtil.create("div", ""), this._container.innerHTML = this._content) : this._container =
                this._content, this._container.style.whiteSpace = "nowrap", this._parentContainer.appendChild(this._container)),
                this._labelWidth = this._container.offsetWidth, this._labelHeight = this._container.offsetHeight)
        },
        _updatePosition: function () {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        _setPosition: function (t) {
            var e = this._map,
                i = this._parentContainer,
                n = e.latLngToContainerPoint(e.getCenter()),
                s = e.layerPointToContainerPoint(t),
                a = this.options.direction,
                r = this._labelWidth,
                h = (this._labelHeight, o.point(this.options.offset)),
                l = o.point(this.options.anchor);
            "right" === a || "auto" === a && s.x < n.x ? (o.DomUtil.removeClass(i, "leafletmap-label-left"), t = t.add(
                h)) : (o.DomUtil.addClass(i, "leafletmap-label-left"), o.DomUtil.removeClass(i,
                "leafletmap-label-right"), t = t.add(o.point(-h.x - r, h.y))), t = t.subtract(l), o.DomUtil.setPosition(
                i, t)
        },
        _zoomAnimation: function (t) {
            var e = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPosition(e)
        },
        _onMoveEnd: function () {
            this._updatePosition()
        },
        _onViewReset: function (t) {
            t && t.hard && this._update()
        },
        _initInteraction: function () {
            if (this.options.clickable) {
                var t = this._parentContainer,
                    e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                o.DomUtil.addClass(t, "leafletmap-clickable"), o.DomEvent.on(t, "click", this._onMouseClick, this),
                o.DomEvent.on(t, "contextmenu", function (t) {
                    o.DomEvent.preventDefault(t)
                }, this);
                for (var i = 0; i < e.length; i++) o.DomEvent.on(t, e[i], this._fireMouseEvent, this)
            }
        },
        _removeInteraction: function () {
            if (this.options.clickable) {
                var t = this._parentContainer,
                    e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                o.DomUtil.removeClass(t, "leafletmap-clickable"), o.DomEvent.off(t, "click", this._onMouseClick, this);
                for (var i = 0; i < e.length; i++) o.DomEvent.off(t, e[i], this._fireMouseEvent, this)
            }
        },
        _onMouseClick: function (t) {
            this.hasEventListeners(t.type) && o.DomEvent.stopPropagation(t), this.fire(t.type, {
                originalEvent: t
            })
        },
        _fireMouseEvent: function (t) {
            this.fire(t.type, {
                originalEvent: t
            }), "contextmenu" === t.type && this.hasEventListeners(t.type) && o.DomEvent.preventDefault(t), "mousedown" !==
                t.type ? o.DomEvent.stopPropagation(t) : o.DomEvent.preventDefault(t)
        }
    }), o.BaseMarkerMethods = {
        showLabel: function () {
            return this.label && this._map && (this.label.setLatLng(this._latlng), this._map.showLabel(this.label)),
                this
        },
        hideLabel: function () {
            return this.label && this.label.close(), this
        },
        setLabelNoHide: function (t) {
            this._labelNoHide !== t && (this._labelNoHide = t, t ? (this._removeLabelRevealHandlers(), this.showLabel()) :
                (this._addLabelRevealHandlers(), this.hideLabel()))
        },
        bindLabel: function (t, e) {
            return this._labelNoHide = e.noHide, this.label || (this._labelNoHide || this._addLabelRevealHandlers(),
                this.on("remove", this.hideLabel, this).on("move", this._moveLabel, this).on("add", this._onMarkerAdd,
                this), this._hasLabelHandlers = !0), "object" == typeof t ? this.label = t : this.label = new o.Label(e,
                this).setContent(t), this
        },
        unbindLabel: function () {
            return this.label && (this.hideLabel(), this.label = null, this._hasLabelHandlers && (this._labelNoHide ||
                this._removeLabelRevealHandlers(), this.off("remove", this.hideLabel, this).off("move", this._moveLabel,
                this).off("add", this._onMarkerAdd, this)), this._hasLabelHandlers = !1), this
        },
        updateLabelContent: function (t) {
            this.label && this.label.setContent(t)
        },
        getLabel: function () {
            return this.label
        },
        _onMarkerAdd: function () {
            this._labelNoHide && this.showLabel()
        },
        _addLabelRevealHandlers: function () {
            this.on("mouseover", this.showLabel, this).on("mouseout", this.hideLabel, this), o.Browser.touch && this.on(
                "click", this.showLabel, this)
        },
        _removeLabelRevealHandlers: function () {
            this.off("mouseover", this.showLabel, this).off("mouseout", this.hideLabel, this), o.Browser.touch && this.off(
                "click", this.showLabel, this)
        },
        _moveLabel: function (t) {
            this.label.setLatLng(t.latlng)
        }
    }, o.Icon.Default.mergeOptions({
        labelAnchor: new o.Point(9, -20)
    }), o.Marker.mergeOptions({
        icon: new o.Icon.Default
    }), o.Marker.include(o.BaseMarkerMethods), o.Marker.include({
        _originalUpdateZIndex: o.Marker.prototype._updateZIndex,
        _updateZIndex: function (t) {
            var e = this._zIndex;
            this._originalUpdateZIndex(t), this.label && this.label.updateZIndex(e)
        },
        _originalSetOpacity: o.Marker.prototype.setOpacity,
        setOpacity: function (t, e) {
            this.options.labelHasSemiTransparency = e, this._originalSetOpacity(t)
        },
        _originalUpdateOpacity: o.Marker.prototype._updateOpacity,
        _updateOpacity: function () {
            var t = 0 === this.options.opacity ? 0 : 1;
            this._originalUpdateOpacity(), this.label && this.label.setOpacity(this.options.labelHasSemiTransparency ?
                this.options.opacity : t)
        },
        _originalSetLatLng: o.Marker.prototype.setLatLng,
        setLatLng: function (t) {
            return this.label && !this._labelNoHide && this.hideLabel(), this._originalSetLatLng(t)
        }
    }), o.CircleMarker.mergeOptions({
        labelAnchor: new o.Point(0, 0)
    }), o.CircleMarker.include(o.BaseMarkerMethods), o.Path.include({
        bindLabel: function (t, e) {
            return this.label && this.label.options === e || (this.label = new o.Label(e, this)), this.label.setContent(
                t), this._showLabelAdded || (this.on("mouseover", this._showLabel, this).on("mousemove", this._moveLabel,
                this).on("mouseout remove", this._hideLabel, this), o.Browser.touch && this.on("click", this._showLabel,
                this), this._showLabelAdded = !0), this
        },
        unbindLabel: function () {
            return this.label && (this._hideLabel(), this.label = null, this._showLabelAdded = !1, this.off("mouseover",
                this._showLabel, this).off("mousemove", this._moveLabel, this).off("mouseout remove", this._hideLabel,
                this)), this
        },
        updateLabelContent: function (t) {
            this.label && this.label.setContent(t)
        },
        _showLabel: function (t) {
            this.label.setLatLng(t.latlng), this._map.showLabel(this.label)
        },
        _moveLabel: function (t) {
            this.label.setLatLng(t.latlng)
        },
        _hideLabel: function () {
            this.label.close()
        }
    }), o.Map.include({
        showLabel: function (t) {
            return this.addLayer(t)
        }
    }), o.FeatureGroup.include({
        clearLayers: function () {
            return this.unbindLabel(), this.eachLayer(this.removeLayer, this), this
        },
        bindLabel: function (t, e) {
            return this.invoke("bindLabel", t, e)
        },
        unbindLabel: function () {
            return this.invoke("unbindLabel")
        },
        updateLabelContent: function (t) {
            this.invoke("updateLabelContent", t)
        }
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["leaflet"], t) : "object" == typeof exports && (module.exports =
            t(require("leaflet"))), "undefined" != typeof e && e.L && t(e.L)
    }(function (e) {
        e.Editable = e.Evented.extend({
            statics: {
                FORWARD: 1,
                BACKWARD: -1
            },
            options: {
                zIndex: 1e3,
                polygonClass: e.Polygon,
                polylineClass: e.Polyline,
                markerClass: e.Marker,
                rectangleClass: e.Rectangle,
                circleClass: e.Circle,
                drawingCSSClass: "leaflet-editable-drawing",
                drawingCursor: "crosshair",
                editLayer: i,
                featuresLayer: i,
                polylineEditorClass: i,
                polygonEditorClass: i,
                markerEditorClass: i,
                rectangleEditorClass: i,
                circleEditorClass: i,
                lineGuideOptions: {},
                skipMiddleMarkers: !1
            },
            initialize: function (t, i) {
                e.setOptions(this, i), this._lastZIndex = this.options.zIndex, this.map = t, this.editLayer = this.createEditLayer(),
                    this.featuresLayer = this.createFeaturesLayer(), this.forwardLineGuide = this.createLineGuide(),
                    this.backwardLineGuide = this.createLineGuide();
                var n = this;
                this.map.on("dblclick", function (t) {
                    n.map.doubleClickZoom.enable()
                })
            },
            fireAndForward: function (t, e) {
                e = e || {}, e.editTools = this, this.fire(t, e), this.map.fire(t, e)
            },
            createLineGuide: function () {
                var t = e.extend({
                    dashArray: "5,10",
                    weight: 1,
                    interactive: !1
                }, this.options.lineGuideOptions);
                return e.polyline([], t)
            },
            createVertexIcon: function (t) {
                return e.Browser.touch ? new e.Editable.TouchVertexIcon(t) : new e.Editable.VertexIcon(t)
            },
            createEditLayer: function () {
                return this.options.editLayer || (new e.LayerGroup).addTo(this.map)
            },
            createFeaturesLayer: function () {
                return this.options.featuresLayer || (new e.LayerGroup).addTo(this.map)
            },
            moveForwardLineGuide: function (t) {
                this.forwardLineGuide._latlngs.length && (this.forwardLineGuide._latlngs[1] = t, this.forwardLineGuide._bounds
                    .extend(t), this.forwardLineGuide.redraw())
            },
            moveBackwardLineGuide: function (t) {
                this.backwardLineGuide._latlngs.length && (this.backwardLineGuide._latlngs[1] = t, this.backwardLineGuide
                    ._bounds.extend(t), this.backwardLineGuide.redraw())
            },
            anchorForwardLineGuide: function (t) {
                this.forwardLineGuide._latlngs[0] = t, this.forwardLineGuide._bounds.extend(t), this.forwardLineGuide.redraw()
            },
            anchorBackwardLineGuide: function (t) {
                this.backwardLineGuide._latlngs[0] = t, this.backwardLineGuide._bounds.extend(t), this.backwardLineGuide
                    .redraw()
            },
            attachForwardLineGuide: function () {
                this.editLayer.addLayer(this.forwardLineGuide)
            },
            attachBackwardLineGuide: function () {
                this.editLayer.addLayer(this.backwardLineGuide)
            },
            detachForwardLineGuide: function () {
                this.forwardLineGuide.setLatLngs([]), this.editLayer.removeLayer(this.forwardLineGuide)
            },
            detachBackwardLineGuide: function () {
                this.backwardLineGuide.setLatLngs([]), this.editLayer.removeLayer(this.backwardLineGuide)
            },
            blockEvents: function () {
                this._oldTargets || (this._oldTargets = this.map._targets, this.map._targets = {})
            },
            unblockEvents: function () {
                this._oldTargets && (this.map._targets = e.extend(this.map._targets, this._oldTargets), delete this._oldTargets)
            },
            registerForDrawing: function (t) {
                this._drawingEditor && this.unregisterForDrawing(this._drawingEditor), this.blockEvents(), t.reset(),
                    this._drawingEditor = t, this.map.on("mousemove touchmove", t.onDrawingMouseMove, t), this.map.on(
                    "mousedown", this.onMousedown, this), this.map.on("mouseup", this.onMouseup, this), e.DomUtil.addClass(
                    this.map._container, this.options.drawingCSSClass), this.defaultMapCursor = this.map._container.style
                    .cursor, this.map._container.style.cursor = this.options.drawingCursor
            },
            unregisterForDrawing: function (t) {
                this.unblockEvents(), e.DomUtil.removeClass(this.map._container, this.options.drawingCSSClass), this.map
                    ._container.style.cursor = this.defaultMapCursor, t = t || this._drawingEditor, t && (this.map.off(
                    "mousemove touchmove", t.onDrawingMouseMove, t), this.map.off("mousedown", this.onMousedown, this),
                    this.map.off("mouseup", this.onMouseup, this), t === this._drawingEditor && (delete this._drawingEditor,
                    t._drawing && t.cancelDrawing()))
            },
            onMousedown: function (t) {
                this._mouseDown = t, this._drawingEditor.onDrawingMouseDown(t)
            },
            onMouseup: function (i) {
                if (this._mouseDown) {
                    var n = this._drawingEditor,
                        o = this._mouseDown;
                    if (this._mouseDown = null, n.onDrawingMouseUp(i), this._drawingEditor !== n) return;
                    var s = e.point(o.originalEvent.clientX, o.originalEvent.clientY),
                        a = e.point(i.originalEvent.clientX, i.originalEvent.clientY).distanceTo(s);
                    Math.abs(a) < 9 * (t.devicePixelRatio || 1) && this._drawingEditor.onDrawingClick(i)
                }
            },
            drawing: function () {
                return this._drawingEditor && this._drawingEditor.drawing()
            },
            stopDrawing: function () {
                this.unregisterForDrawing()
            },
            commitDrawing: function (t) {
                this._drawingEditor && this._drawingEditor.commitDrawing(t)
            },
            connectCreatedToMap: function (t) {
                return this.featuresLayer.addLayer(t)
            },
            startPolyline: function (t, e) {
                var i = this.createPolyline([], e);
                return i.enableEdit(this.map).newShape(t), i
            },
            startPolygon: function (t, e) {
                var i = this.createPolygon([], e);
                return i.enableEdit(this.map).newShape(t), i
            },
            startMarker: function (t, e) {
                t = t || this.map.getCenter().clone();
                var i = this.createMarker(t, e);
                return i.enableEdit(this.map).startDrawing(), i
            },
            startRectangle: function (t, i) {
                var n = t || e.latLng([0, 0]),
                    o = new e.LatLngBounds(n, n),
                    s = this.createRectangle(o, i);
                return s.enableEdit(this.map).startDrawing(), s
            },
            startCircle: function (t, e) {
                t = t || this.map.getCenter().clone();
                var i = this.createCircle(t, e);
                return i.enableEdit(this.map).startDrawing(), i
            },
            startHole: function (t, e) {
                t.newHole(e)
            },
            createLayer: function (t, i, n) {
                n = e.Util.extend({
                    editOptions: {
                        editTools: this
                    }
                }, n);
                var o = new t(i, n);
                return this.fireAndForward("editable:created", {
                    layer: o
                }), o
            },
            createPolyline: function (t, e) {
                return this.createLayer(e && e.polylineClass || this.options.polylineClass, t, e)
            },
            createPolygon: function (t, e) {
                return this.createLayer(e && e.polygonClass || this.options.polygonClass, t, e)
            },
            createMarker: function (t, e) {
                return this.createLayer(e && e.markerClass || this.options.markerClass, t, e)
            },
            createRectangle: function (t, e) {
                return this.createLayer(e && e.rectangleClass || this.options.rectangleClass, t, e)
            },
            createCircle: function (t, e) {
                return this.createLayer(e && e.circleClass || this.options.circleClass, t, e)
            }
        }), e.extend(e.Editable, {
            makeCancellable: function (t) {
                t.cancel = function () {
                    t._cancelled = !0
                }
            }
        }), e.Map.mergeOptions({
            editToolsClass: e.Editable,
            editable: !1,
            editOptions: {}
        }), e.Editable.VertexIcon = e.DivIcon.extend({
            options: {
                iconSize: new e.Point(8, 8)
            }
        }), e.Editable.TouchVertexIcon = e.Editable.VertexIcon.extend({
            options: {
                iconSize: new e.Point(20, 20)
            }
        }), e.Editable.VertexMarker = e.Marker.extend({
            options: {
                draggable: !0,
                className: "leaflet-div-icon leaflet-vertex-icon"
            },
            initialize: function (t, i, n, o) {
                this.latlng = t, this.latlngs = i, this.editor = n, e.Marker.prototype.initialize.call(this, t, o),
                    this.options.icon = this.editor.tools.createVertexIcon({
                    className: this.options.className
                }), this.latlng.__vertex = this, this.editor.editLayer.addLayer(this), this.setZIndexOffset(n.tools._lastZIndex +
                    1)
            },
            onAdd: function (t) {
                e.Marker.prototype.onAdd.call(this, t), this.on("drag", this.onDrag), this.on("dragstart", this.onDragStart),
                    this.on("dragend", this.onDragEnd), this.on("mouseup", this.onMouseup), this.on("click", this.onClick),
                    this.on("contextmenu", this.onContextMenu), this.on("mousedown touchstart", this.onMouseDown), this
                    .addMiddleMarkers()
            },
            onRemove: function (t) {
                this.middleMarker && this.middleMarker.delete(), delete this.latlng.__vertex, this.off("drag", this.onDrag),
                    this.off("dragstart", this.onDragStart), this.off("dragend", this.onDragEnd), this.off("mouseup",
                    this.onMouseup), this.off("click", this.onClick), this.off("contextmenu", this.onContextMenu), this
                    .off("mousedown touchstart", this.onMouseDown), e.Marker.prototype.onRemove.call(this, t)
            },
            onDrag: function (t) {
                t.vertex = this, this.editor.onVertexMarkerDrag(t);
                var i = e.DomUtil.getPosition(this._icon),
                    n = this._map.layerPointToLatLng(i);
                this.latlng.update(n), this._latlng = this.latlng, this.editor.refresh(), this.middleMarker && this.middleMarker
                    .updateLatLng();
                var o = this.getNext();
                o && o.middleMarker && o.middleMarker.updateLatLng()
            },
            onDragStart: function (t) {
                t.vertex = this, this.editor.onVertexMarkerDragStart(t)
            },
            onDragEnd: function (t) {
                t.vertex = this, this.editor.onVertexMarkerDragEnd(t)
            },
            onClick: function (t) {
                t.vertex = this, this.editor.onVertexMarkerClick(t)
            },
            onMouseup: function (t) {
                e.DomEvent.stop(t), t.vertex = this, this.editor.map.fire("mouseup", t)
            },
            onContextMenu: function (t) {
                t.vertex = this, this.editor.onVertexMarkerContextMenu(t)
            },
            onMouseDown: function (t) {
                t.vertex = this, this.editor.onVertexMarkerMouseDown(t)
            },
            delete: function () {
                var t = this.getNext();
                this.latlngs.splice(this.getIndex(), 1), this.editor.editLayer.removeLayer(this), this.editor.onVertexDeleted({
                    latlng: this.latlng,
                    vertex: this
                }), this.latlngs.length || this.editor.deleteShape(this.latlngs), t && t.resetMiddleMarker(), this.editor
                    .refresh()
            },
            getIndex: function () {
                return this.latlngs.indexOf(this.latlng)
            },
            getLastIndex: function () {
                return this.latlngs.length - 1
            },
            getPrevious: function () {
                if (!(this.latlngs.length < 2)) {
                    var t = this.getIndex(),
                        e = t - 1;
                    0 === t && this.editor.CLOSED && (e = this.getLastIndex());
                    var i = this.latlngs[e];
                    return i ? i.__vertex : void 0
                }
            },
            getNext: function () {
                if (!(this.latlngs.length < 2)) {
                    var t = this.getIndex(),
                        e = t + 1;
                    t === this.getLastIndex() && this.editor.CLOSED && (e = 0);
                    var i = this.latlngs[e];
                    return i ? i.__vertex : void 0
                }
            },
            addMiddleMarker: function (t) {
                this.editor.hasMiddleMarkers() && (t = t || this.getPrevious(), t && !this.middleMarker && (this.middleMarker =
                    this.editor.addMiddleMarker(t, this, this.latlngs, this.editor)))
            },
            addMiddleMarkers: function () {
                if (this.editor.hasMiddleMarkers()) {
                    var t = this.getPrevious();
                    t && this.addMiddleMarker(t);
                    var e = this.getNext();
                    e && e.resetMiddleMarker()
                }
            },
            resetMiddleMarker: function () {
                this.middleMarker && this.middleMarker.delete(), this.addMiddleMarker()
            },
            split: function () {
                this.editor.splitShape && this.editor.splitShape(this.latlngs, this.getIndex())
            },
            continue: function () {
                if (this.editor.continueBackward) {
                    var t = this.getIndex();
                    0 === t ? this.editor.continueBackward(this.latlngs) : t === this.getLastIndex() && this.editor.continueForward(
                        this.latlngs)
                }
            }
        }), e.Editable.mergeOptions({
            vertexMarkerClass: e.Editable.VertexMarker
        }), e.Editable.MiddleMarker = e.Marker.extend({
            options: {
                opacity: .5,
                className: "leaflet-div-icon leaflet-middle-icon",
                draggable: !0
            },
            initialize: function (t, i, n, o, s) {
                this.left = t, this.right = i, this.editor = o, this.latlngs = n, e.Marker.prototype.initialize.call(
                    this, this.computeLatLng(), s), this._opacity = this.options.opacity, this.options.icon = this.editor
                    .tools.createVertexIcon({
                    className: this.options.className
                }), this.editor.editLayer.addLayer(this), this.setVisibility()
            },
            setVisibility: function () {
                var t = this._map.latLngToContainerPoint(this.left.latlng),
                    i = this._map.latLngToContainerPoint(this.right.latlng),
                    n = e.point(this.options.icon.options.iconSize);
                t.distanceTo(i) < 3 * n.x ? this.hide() : this.show()
            },
            show: function () {
                this.setOpacity(this._opacity)
            },
            hide: function () {
                this.setOpacity(0)
            },
            updateLatLng: function () {
                this.setLatLng(this.computeLatLng()), this.setVisibility()
            },
            computeLatLng: function () {
                var t = this.editor.map.latLngToContainerPoint(this.left.latlng),
                    e = this.editor.map.latLngToContainerPoint(this.right.latlng),
                    i = (t.y + e.y) / 2,
                    n = (t.x + e.x) / 2;
                return this.editor.map.containerPointToLatLng([n, i])
            },
            onAdd: function (t) {
                e.Marker.prototype.onAdd.call(this, t), e.DomEvent.on(this._icon, "mousedown touchstart", this.onMouseDown,
                    this), t.on("zoomend", this.setVisibility, this)
            },
            onRemove: function (t) {
                delete this.right.middleMarker, e.DomEvent.off(this._icon, "mousedown touchstart", this.onMouseDown,
                    this), t.off("zoomend", this.setVisibility, this), e.Marker.prototype.onRemove.call(this, t)
            },
            onMouseDown: function (t) {
                var i = e.DomUtil.getPosition(this._icon),
                    n = this.editor.map.layerPointToLatLng(i);
                if (t = {
                    originalEvent: t,
                    latlng: n
                }, 0 !== this.options.opacity && (e.Editable.makeCancellable(t), this.editor.onMiddleMarkerMouseDown(t), !
                    t._cancelled)) {
                    this.latlngs.splice(this.index(), 0, t.latlng), this.editor.refresh();
                    var o = this._icon,
                        s = this.editor.addVertexMarker(t.latlng, this.latlngs),
                        a = s._icon.parentNode;
                    a.removeChild(s._icon), s._icon = o, a.appendChild(s._icon), s._initIcon(), s._initInteraction(), s
                        .setOpacity(1), e.Draggable._dragging = !1, s.dragging._draggable._onDown(t.originalEvent),
                        this.delete()
                }
            },
            delete: function () {
                this.editor.editLayer.removeLayer(this)
            },
            index: function () {
                return this.latlngs.indexOf(this.right.latlng)
            }
        }), e.Editable.mergeOptions({
            middleMarkerClass: e.Editable.MiddleMarker
        }), e.Editable.BaseEditor = e.Handler.extend({
            initialize: function (t, i, n) {
                e.setOptions(this, n), this.map = t, this.feature = i, this.feature.editor = this, this.editLayer = new e
                    .LayerGroup, this.tools = this.options.editTools || t.editTools
            },
            addHooks: function () {
                this.isConnected() ? this.onFeatureAdd() : this.feature.once("add", this.onFeatureAdd, this), this.onEnable(),
                    this.feature.on(this._getEvents(), this)
            },
            removeHooks: function () {
                this.feature.off(this._getEvents(), this), this.feature.dragging && this.feature.dragging.disable(),
                    this.editLayer.clearLayers(), this.tools.editLayer.removeLayer(this.editLayer), this.onDisable(),
                    this._drawing && this.cancelDrawing()
            },
            drawing: function () {
                return !!this._drawing
            },
            reset: function () {},
            onFeatureAdd: function () {
                this.tools.editLayer.addLayer(this.editLayer), this.feature.dragging && this.feature.dragging.enable()
            },
            hasMiddleMarkers: function () {
                return !this.options.skipMiddleMarkers && !this.tools.options.skipMiddleMarkers
            },
            fireAndForward: function (t, e) {
                e = e || {}, e.layer = this.feature, this.feature.fire(t, e), this.tools.fireAndForward(t, e)
            },
            onEnable: function () {
                this.fireAndForward("editable:enable")
            },
            onDisable: function () {
                this.fireAndForward("editable:disable")
            },
            onEditing: function () {
                this.fireAndForward("editable:editing")
            },
            onStartDrawing: function () {
                this.fireAndForward("editable:drawing:start")
            },
            onEndDrawing: function () {
                this.fireAndForward("editable:drawing:end")
            },
            onCancelDrawing: function () {
                this.fireAndForward("editable:drawing:cancel")
            },
            onCommitDrawing: function (t) {
                this.fireAndForward("editable:drawing:commit", t)
            },
            onDrawingMouseDown: function (t) {
                this.fireAndForward("editable:drawing:mousedown", t)
            },
            onDrawingMouseUp: function (t) {
                this.fireAndForward("editable:drawing:mouseup", t)
            },
            startDrawing: function () {
                this._drawing || (this._drawing = e.Editable.FORWARD), this.tools.registerForDrawing(this), this.onStartDrawing()
            },
            commitDrawing: function (t) {
                this.onCommitDrawing(t), this.endDrawing()
            },
            cancelDrawing: function () {
                e.Draggable._dragging = !1, this.onCancelDrawing(), this.endDrawing()
            },
            endDrawing: function () {
                this._drawing = !1, this.tools.unregisterForDrawing(this), this.onEndDrawing()
            },
            onDrawingClick: function (t) {
                this.drawing() && (e.Editable.makeCancellable(t), this.fireAndForward("editable:drawing:click", t), t._cancelled ||
                    (this.isConnected() || this.connect(t), this.processDrawingClick(t)))
            },
            isConnected: function () {
                return this.map.hasLayer(this.feature)
            },
            connect: function (t) {
                this.tools.connectCreatedToMap(this.feature), this.tools.editLayer.addLayer(this.editLayer)
            },
            onMove: function (t) {
                this.fireAndForward("editable:drawing:move", t)
            },
            onDrawingMouseMove: function (t) {
                this.onMove(t)
            },
            _getEvents: function () {
                return {
                    dragstart: this.onDragStart,
                    drag: this.onDrag,
                    dragend: this.onDragEnd,
                    remove: this.disable
                }
            },
            onDragStart: function (t) {
                this.onEditing(), this.fireAndForward("editable:dragstart", t)
            },
            onDrag: function (t) {
                this.onMove(t), this.fireAndForward("editable:drag", t)
            },
            onDragEnd: function (t) {
                this.fireAndForward("editable:dragend", t)
            }
        }), e.Editable.MarkerEditor = e.Editable.BaseEditor.extend({
            onDrawingMouseMove: function (t) {
                e.Editable.BaseEditor.prototype.onDrawingMouseMove.call(this, t), this._drawing && this.feature.setLatLng(
                    t.latlng)
            },
            processDrawingClick: function (t) {
                this.fireAndForward("editable:drawing:clicked", t), this.commitDrawing(t)
            },
            connect: function (t) {
                t && (this.feature._latlng = t.latlng), e.Editable.BaseEditor.prototype.connect.call(this, t)
            }
        }), e.Editable.PathEditor = e.Editable.BaseEditor.extend({
            CLOSED: !1,
            MIN_VERTEX: 2,
            addHooks: function () {
                return e.Editable.BaseEditor.prototype.addHooks.call(this), this.feature && this.initVertexMarkers(),
                    this
            },
            initVertexMarkers: function (t) {
                if (this.enabled()) if (t = t || this.getLatLngs(), e.Polyline._flat(t)) this.addVertexMarkers(t);
                    else for (var i = 0; i < t.length; i++) this.initVertexMarkers(t[i])
            },
            getLatLngs: function () {
                return this.feature.getLatLngs()
            },
            reset: function () {
                this.editLayer.clearLayers(), this.initVertexMarkers()
            },
            addVertexMarker: function (t, e) {
                return new this.tools.options.vertexMarkerClass(t, e, this)
            },
            addVertexMarkers: function (t) {
                for (var e = 0; e < t.length; e++) this.addVertexMarker(t[e], t)
            },
            refreshVertexMarkers: function (t) {
                t = t || this.getDefaultLatLngs();
                for (var e = 0; e < t.length; e++) t[e].__vertex.update()
            },
            addMiddleMarker: function (t, e, i) {
                return new this.tools.options.middleMarkerClass(t, e, i, this)
            },
            onVertexMarkerClick: function (t) {
                if (e.Editable.makeCancellable(t), this.fireAndForward("editable:vertex:click", t), !(t._cancelled ||
                    this.tools.drawing() && this.tools._drawingEditor !== this)) {
                    var i, n = t.vertex.getIndex();
                    t.originalEvent.ctrlKey ? this.onVertexMarkerCtrlClick(t) : t.originalEvent.altKey ? this.onVertexMarkerAltClick(
                        t) : t.originalEvent.shiftKey ? this.onVertexMarkerShiftClick(t) : t.originalEvent.metaKey ?
                        this.onVertexMarkerMetaKeyClick(t) : n === t.vertex.getLastIndex() && this._drawing === e.Editable
                        .FORWARD ? n >= this.MIN_VERTEX - 1 && (i = !0) : 0 === n && this._drawing === e.Editable.BACKWARD &&
                        this._drawnLatLngs.length >= this.MIN_VERTEX ? i = !0 : 0 === n && this._drawing === e.Editable
                        .FORWARD && this._drawnLatLngs.length >= this.MIN_VERTEX && this.CLOSED ? i = !0 : this.onVertexRawMarkerClick(
                        t), this.fireAndForward("editable:vertex:clicked", t), i && this.commitDrawing(t)
                }
            },
            onVertexRawMarkerClick: function (t) {
                this.fireAndForward("editable:vertex:rawclick", t), t._cancelled || this.vertexCanBeDeleted(t.vertex) &&
                    t.vertex.delete()
            },
            vertexCanBeDeleted: function (t) {
                return t.latlngs.length > this.MIN_VERTEX
            },
            onVertexDeleted: function (t) {
                this.fireAndForward("editable:vertex:deleted", t)
            },
            onVertexMarkerCtrlClick: function (t) {
                this.fireAndForward("editable:vertex:ctrlclick", t)
            },
            onVertexMarkerShiftClick: function (t) {
                this.fireAndForward("editable:vertex:shiftclick", t)
            },
            onVertexMarkerMetaKeyClick: function (t) {
                this.fireAndForward("editable:vertex:metakeyclick", t)
            },
            onVertexMarkerAltClick: function (t) {
                this.fireAndForward("editable:vertex:altclick", t)
            },
            onVertexMarkerContextMenu: function (t) {
                this.fireAndForward("editable:vertex:contextmenu", t)
            },
            onVertexMarkerMouseDown: function (t) {
                this.fireAndForward("editable:vertex:mousedown", t)
            },
            onMiddleMarkerMouseDown: function (t) {
                this.fireAndForward("editable:middlemarker:mousedown", t)
            },
            onVertexMarkerDrag: function (t) {
                this.onMove(t), this.feature._bounds && this.extendBounds(t), this.fireAndForward(
                    "editable:vertex:drag", t)
            },
            onVertexMarkerDragStart: function (t) {
                this.fireAndForward("editable:vertex:dragstart", t)
            },
            onVertexMarkerDragEnd: function (t) {
                this.fireAndForward("editable:vertex:dragend", t)
            },
            setDrawnLatLngs: function (t) {
                this._drawnLatLngs = t || this.getDefaultLatLngs()
            },
            startDrawing: function () {
                this._drawnLatLngs || this.setDrawnLatLngs(), e.Editable.BaseEditor.prototype.startDrawing.call(this)
            },
            startDrawingForward: function () {
                this.startDrawing()
            },
            endDrawing: function () {
                this.tools.detachForwardLineGuide(), this.tools.detachBackwardLineGuide(), this._drawnLatLngs && this._drawnLatLngs
                    .length < this.MIN_VERTEX && this.deleteShape(this._drawnLatLngs), e.Editable.BaseEditor.prototype.endDrawing
                    .call(this), delete this._drawnLatLngs
            },
            addLatLng: function (t) {
                this._drawing === e.Editable.FORWARD ? this._drawnLatLngs.push(t) : this._drawnLatLngs.unshift(t), this
                    .feature._bounds.extend(t), this.addVertexMarker(t, this._drawnLatLngs), this.refresh()
            },
            newPointForward: function (t) {
                this.addLatLng(t), this.tools.attachForwardLineGuide(), this.tools.anchorForwardLineGuide(t)
            },
            newPointBackward: function (t) {
                this.addLatLng(t), this.tools.anchorBackwardLineGuide(t)
            },
            push: function (t) {
                return t ? void(this._drawing === e.Editable.FORWARD ? this.newPointForward(t) : this.newPointBackward(
                    t)) : console.error("L.Editable.PathEditor.push expect a vaild latlng as parameter")
            },
            removeLatLng: function (t) {
                t.__vertex.delete(), this.refresh()
            },
            pop: function () {
                if (!(this._drawnLatLngs.length <= 1)) {
                    var t;
                    return t = this._drawing === e.Editable.FORWARD ? this._drawnLatLngs[this._drawnLatLngs.length - 1] :
                        this._drawnLatLngs[0], this.removeLatLng(t), this._drawing === e.Editable.FORWARD ? this.tools.anchorForwardLineGuide(
                        this._drawnLatLngs[this._drawnLatLngs.length - 1]) : this.tools.anchorForwardLineGuide(this._drawnLatLngs[
                        0]), t
                }
            },
            processDrawingClick: function (t) {
                t.vertex && t.vertex.editor === this || (this._drawing === e.Editable.FORWARD ? this.newPointForward(t.latlng) :
                    this.newPointBackward(t.latlng), this.fireAndForward("editable:drawing:clicked", t))
            },
            onDrawingMouseMove: function (t) {
                e.Editable.BaseEditor.prototype.onDrawingMouseMove.call(this, t), this._drawing && (this.tools.moveForwardLineGuide(
                    t.latlng), this.tools.moveBackwardLineGuide(t.latlng))
            },
            refresh: function () {
                this.feature.redraw(), this.onEditing()
            },
            newShape: function (t) {
                var e = this.addNewEmptyShape();
                e && (this.setDrawnLatLngs(e[0] || e), this.startDrawingForward(), this.fireAndForward(
                    "editable:shape:new", {
                    shape: e
                }), t && this.newPointForward(t))
            },
            deleteShape: function (t, i) {
                var n = {
                    shape: t
                };
                if (e.Editable.makeCancellable(n), this.fireAndForward("editable:shape:delete", n), !n._cancelled)
                    return t = this._deleteShape(t, i), this.ensureNotFlat && this.ensureNotFlat(), this.feature.setLatLngs(
                        this.getLatLngs()), this.refresh(), this.reset(), this.fireAndForward("editable:shape:deleted", {
                        shape: t
                    }), t
            },
            _deleteShape: function (t, e) {
                if (e = e || this.getLatLngs(), e.length) {
                    var i = this,
                        n = function (t, e) {
                            return e = t.splice(0, Number.MAX_VALUE)
                        }, o = function (t, e) {
                            return t.splice(t.indexOf(e), 1), t.length || i._deleteShape(t), e
                        };
                    if (e === t) return n(e, t);
                    for (var s = 0; s < e.length; s++) {
                        if (e[s] === t) return o(e, t);
                        if (e[s].indexOf(t) !== -1) return o(e[s], t)
                    }
                }
            },
            deleteShapeAt: function (t) {
                var e = this.feature.shapeAt(t);
                if (e) return this.deleteShape(e)
            },
            appendShape: function (t) {
                this.insertShape(t)
            },
            prependShape: function (t) {
                this.insertShape(t, 0)
            },
            insertShape: function (t, e) {
                this.ensureMulti(), t = this.formatShape(t), "undefined" == typeof e && (e = this.feature._latlngs.length),
                    this.feature._latlngs.splice(e, 0, t), this.feature.redraw(), this._enabled && this.reset()
            },
            extendBounds: function (t) {
                this.feature._bounds.extend(t.vertex.latlng)
            },
            onDragStart: function (t) {
                this.editLayer.clearLayers(), e.Editable.BaseEditor.prototype.onDragStart.call(this, t)
            },
            onDragEnd: function (t) {
                this.initVertexMarkers(), e.Editable.BaseEditor.prototype.onDragEnd.call(this, t)
            }
        }), e.Editable.PolylineEditor = e.Editable.PathEditor.extend({
            startDrawingBackward: function () {
                this._drawing = e.Editable.BACKWARD, this.startDrawing()
            },
            continueBackward: function (t) {
                this.drawing() || (t = t || this.getDefaultLatLngs(), this.setDrawnLatLngs(t), t.length > 0 && (this.tools
                    .attachBackwardLineGuide(), this.tools.anchorBackwardLineGuide(t[0])), this.startDrawingBackward())
            },
            continueForward: function (t) {
                this.drawing() || (t = t || this.getDefaultLatLngs(), this.setDrawnLatLngs(t), t.length > 0 && (this.tools
                    .attachForwardLineGuide(), this.tools.anchorForwardLineGuide(t[t.length - 1])), this.startDrawingForward())
            },
            getDefaultLatLngs: function (t) {
                return t = t || this.feature._latlngs, !t.length || t[0] instanceof e.LatLng ? t : this.getDefaultLatLngs(
                    t[0])
            },
            ensureMulti: function () {
                this.feature._latlngs.length && e.Polyline._flat(this.feature._latlngs) && (this.feature._latlngs = [
                        this.feature._latlngs])
            },
            addNewEmptyShape: function () {
                if (this.feature._latlngs.length) {
                    var t = [];
                    return this.appendShape(t), t
                }
                return this.feature._latlngs
            },
            formatShape: function (t) {
                return e.Polyline._flat(t) ? t : t[0] ? this.formatShape(t[0]) : void 0
            },
            splitShape: function (t, i) {
                if (i && !(i >= t.length - 1)) {
                    this.ensureMulti();
                    var n = this.feature._latlngs.indexOf(t);
                    if (n !== -1) {
                        var o = t.slice(0, i + 1),
                            s = t.slice(i);
                        s[0] = e.latLng(s[0].lat, s[0].lng, s[0].alt), this.feature._latlngs.splice(n, 1, o, s), this.refresh(),
                            this.reset()
                    }
                }
            }
        }), e.Editable.PolygonEditor = e.Editable.PathEditor.extend({
            CLOSED: !0,
            MIN_VERTEX: 3,
            newPointForward: function (t) {
                e.Editable.PathEditor.prototype.newPointForward.call(this, t), this.tools.backwardLineGuide._latlngs.length ||
                    this.tools.anchorBackwardLineGuide(t), 2 === this._drawnLatLngs.length && this.tools.attachBackwardLineGuide()
            },
            addNewEmptyHole: function (t) {
                this.ensureNotFlat();
                var e = this.feature.shapeAt(t);
                if (e) {
                    var i = [];
                    return e.push(i), i
                }
            },
            newHole: function (t) {
                var e = this.addNewEmptyHole(t);
                e && (this.setDrawnLatLngs(e), this.startDrawingForward(), t && this.newPointForward(t))
            },
            addNewEmptyShape: function () {
                if (this.feature._latlngs.length && this.feature._latlngs[0].length) {
                    var t = [];
                    return this.appendShape(t), t
                }
                return this.feature._latlngs
            },
            ensureMulti: function () {
                this.feature._latlngs.length && e.Polyline._flat(this.feature._latlngs[0]) && (this.feature._latlngs = [
                        this.feature._latlngs])
            },
            ensureNotFlat: function () {
                this.feature._latlngs.length && !e.Polyline._flat(this.feature._latlngs) || (this.feature._latlngs = [
                        this.feature._latlngs])
            },
            vertexCanBeDeleted: function (t) {
                var i = this.feature.parentShape(t.latlngs),
                    n = e.Util.indexOf(i, t.latlngs);
                return n > 0 || e.Editable.PathEditor.prototype.vertexCanBeDeleted.call(this, t)
            },
            getDefaultLatLngs: function () {
                return this.feature._latlngs.length || this.feature._latlngs.push([]), this.feature._latlngs[0]
            },
            formatShape: function (t) {
                return !e.Polyline._flat(t) || t[0] && 0 === t[0].length ? t : [t]
            }
        }), e.Editable.RectangleEditor = e.Editable.PathEditor.extend({
            CLOSED: !0,
            MIN_VERTEX: 4,
            options: {
                skipMiddleMarkers: !0
            },
            extendBounds: function (t) {
                var i = t.vertex.getIndex(),
                    n = t.vertex.getNext(),
                    o = t.vertex.getPrevious(),
                    s = (i + 2) % 4,
                    a = t.vertex.latlngs[s],
                    r = new e.LatLngBounds(t.latlng, a);
                o.latlng.update([t.latlng.lat, a.lng]), n.latlng.update([a.lat, t.latlng.lng]), this.updateBounds(r),
                    this.refreshVertexMarkers()
            },
            onDrawingMouseDown: function (t) {
                e.Editable.PathEditor.prototype.onDrawingMouseDown.call(this, t), this.connect();
                var i = this.getDefaultLatLngs();
                3 === i.length && i.push(t.latlng);
                var n = new e.LatLngBounds(t.latlng, t.latlng);
                this.updateBounds(n), this.updateLatLngs(n), this.refresh(), this.reset(), t.originalEvent._simulated = !
                    1, this.map.dragging._draggable._onUp(t.originalEvent), i[3].__vertex.dragging._draggable._onDown(t
                    .originalEvent)
            },
            onDrawingMouseUp: function (t) {
                this.commitDrawing(t), t.originalEvent._simulated = !1, e.Editable.PathEditor.prototype.onDrawingMouseUp
                    .call(this, t)
            },
            onDrawingMouseMove: function (t) {
                t.originalEvent._simulated = !1, e.Editable.PathEditor.prototype.onDrawingMouseMove.call(this, t)
            },
            getDefaultLatLngs: function (t) {
                return t || this.feature._latlngs[0]
            },
            updateBounds: function (t) {
                this.feature._bounds = t
            },
            updateLatLngs: function (t) {
                for (var e = this.getDefaultLatLngs(), i = this.feature._boundsToLatLngs(t), n = 0; n < e.length; n++) e[
                        n].update(i[n])
            }
        }), e.Editable.CircleEditor = e.Editable.PathEditor.extend({
            MIN_VERTEX: 2,
            options: {
                skipMiddleMarkers: !0
            },
            initialize: function (t, i, n) {
                e.Editable.PathEditor.prototype.initialize.call(this, t, i, n), this._resizeLatLng = this.computeResizeLatLng()
            },
            computeResizeLatLng: function () {
                var t = (this.feature._radius || this.feature._mRadius) * Math.cos(Math.PI / 4),
                    e = this.map.project(this.feature._latlng);
                return this.map.unproject([e.x + t, e.y - t])
            },
            updateResizeLatLng: function () {
                this._resizeLatLng.update(this.computeResizeLatLng()), this._resizeLatLng.__vertex.update()
            },
            getLatLngs: function () {
                return [this.feature._latlng, this._resizeLatLng]
            },
            getDefaultLatLngs: function () {
                return this.getLatLngs()
            },
            onVertexMarkerDrag: function (t) {
                1 === t.vertex.getIndex() ? this.resize(t) : this.updateResizeLatLng(t), e.Editable.PathEditor.prototype
                    .onVertexMarkerDrag.call(this, t)
            },
            resize: function (t) {
                var e = this.feature._latlng.distanceTo(t.latlng);
                this.feature.setRadius(e), this.feature._resizeLatLng = this._resizeLatLng
            },
            onDrawingMouseDown: function (t) {
                e.Editable.PathEditor.prototype.onDrawingMouseDown.call(this, t), this._resizeLatLng.update(t.latlng),
                    this.feature._latlng.update(t.latlng), this.connect(), t.originalEvent._simulated = !1, this.map.dragging
                    ._draggable._onUp(t.originalEvent), this._resizeLatLng.__vertex.dragging._draggable._onDown(t.originalEvent)
            },
            onDrawingMouseUp: function (t) {
                this.commitDrawing(t), t.originalEvent._simulated = !1, e.Editable.PathEditor.prototype.onDrawingMouseUp
                    .call(this, t);
            },
            onDrawingMouseMove: function (t) {
                t.originalEvent._simulated = !1, e.Editable.PathEditor.prototype.onDrawingMouseMove.call(this, t)
            },
            onDrag: function (t) {
                e.Editable.PathEditor.prototype.onDrag.call(this, t), this.feature.dragging.updateLatLng(this._resizeLatLng)
            }
        });
        var n = {
            createEditor: function (t) {
                t = t || this._map;
                var e = (this.options.editOptions || {}).editTools || t.editTools;
                if (!e) throw Error("Unable to detect Editable instance.");
                var i = this.options.editorClass || this.getEditorClass(e);
                return new i(t, this, this.options.editOptions)
            },
            enableEdit: function (t) {
                return this.editor || this.createEditor(t), this.editor.enable(), this.editor
            },
            editEnabled: function () {
                return this.editor && this.editor.enabled()
            },
            disableEdit: function () {
                this.editor && (this.editor.disable(), delete this.editor)
            },
            toggleEdit: function () {
                this.editEnabled() ? this.disableEdit() : this.enableEdit()
            },
            _onEditableAdd: function () {
                this.editor && this.enableEdit()
            }
        }, o = {
                getEditorClass: function (t) {
                    return t && t.options.polylineEditorClass ? t.options.polylineEditorClass : e.Editable.PolylineEditor
                },
                shapeAt: function (t, i) {
                    var n = null;
                    if (i = i || this._latlngs, !i.length) return n;
                    if (e.Polyline._flat(i) && this.isInLatLngs(t, i)) n = i;
                    else for (var o = 0; o < i.length; o++) if (this.isInLatLngs(t, i[o])) return i[o]; return n
                },
                isInLatLngs: function (t, i) {
                    if (!i) return !1;
                    var n, o, s, a, r = [],
                        h = this._clickTolerance();
                    if (this._projectLatlngs(i, r, this._pxBounds), r = r[0], a = this._map.latLngToLayerPoint(t), !
                        this._pxBounds.contains(a)) return !1;
                    for (n = 1, s = r.length, o = 0; n < s; o = n++) if (e.LineUtil.pointToSegmentDistance(a, r[o], r[n]) <=
                            h) return !0;
                    return !1
                }
            }, s = {
                getEditorClass: function (t) {
                    return t && t.options.polygonEditorClass ? t.options.polygonEditorClass : e.Editable.PolygonEditor
                },
                shapeAt: function (t, i) {
                    var n = null;
                    if (i = i || this._latlngs, !i.length) return n;
                    if (e.Polyline._flat(i) && this.isInLatLngs(t, i)) n = i;
                    else if (e.Polyline._flat(i[0]) && this.isInLatLngs(t, i[0])) n = i;
                    else for (var o = 0; o < i.length; o++) if (this.isInLatLngs(t, i[o][0])) return i[o]; return n
                },
                isInLatLngs: function (t, e) {
                    var i, n, o, s, a, r = !1;
                    for (o = 0, a = e.length, s = a - 1; o < a; s = o++) i = e[o], n = e[s], i.lat > t.lat != n.lat > t
                            .lat && t.lng < (n.lng - i.lng) * (t.lat - i.lat) / (n.lat - i.lat) + i.lng && (r = !r);
                    return r
                },
                parentShape: function (t, i) {
                    if (i = i || this._latlngs) {
                        var n = e.Util.indexOf(i, t);
                        if (n !== -1) return i;
                        for (var o = 0; o < i.length; o++) if (n = e.Util.indexOf(i[o], t), n !== -1) return i[o]
                    }
                }
            }, a = {
                getEditorClass: function (t) {
                    return t && t.options.markerEditorClass ? t.options.markerEditorClass : e.Editable.MarkerEditor
                }
            }, r = {
                getEditorClass: function (t) {
                    return t && t.options.rectangleEditorClass ? t.options.rectangleEditorClass : e.Editable.RectangleEditor
                }
            }, h = {
                getEditorClass: function (t) {
                    return t && t.options.circleEditorClass ? t.options.circleEditorClass : e.Editable.CircleEditor
                }
            }, l = function () {
                this.on("add", this._onEditableAdd)
            };
        e.Polyline && (e.Polyline.include(n), e.Polyline.include(o), e.Polyline.addInitHook(l)), e.Polygon && (e.Polygon
            .include(n), e.Polygon.include(s)), e.Marker && (e.Marker.include(n), e.Marker.include(a), e.Marker.addInitHook(
            l)), e.Rectangle && (e.Rectangle.include(n), e.Rectangle.include(r)), e.Circle && (e.Circle.include(n), e.Circle
            .include(h)), e.LatLng.prototype.update = function (t) {
            t = e.latLng(t), this.lat = t.lat, this.lng = t.lng
        }
    }, t), o.Util.extend(o.Editable.prototype, {
        createMarker: function (t, e) {
            var i = o.VectorIcon.icon({
                icon: "",
                iconSize: [25, 41],
                prefix: "fa",
                markerColor: e.markerColor,
                strokewidth: 3,
                strokecolor: e.strokecolor,
                alpha: .9,
                anchor: {
                    x: 12,
                    y: 40
                },
                spin: !0,
                type: 1
            });
            return e = e || {}, e.icon = i, this.createLayer(e && e.markerClass || this.options.markerClass, t, e)
        }
    }), o.Util.extend(o.Editable.VertexMarker.prototype, {
        initialize: function (t, e, i, n) {
            this.latlng = t, this.latlngs = e, this.editor = i, o.Marker.prototype.initialize.call(this, t, n), this.options
                .icon = this.editor.tools.createVertexIcon({
                className: this.options.className
            }), this.options.icon.options.anchor = n.anchor, this.latlng.__vertex = this, this.editor.editLayer.addLayer(
                this), this.setZIndexOffset(i.tools._lastZIndex + 1)
        }
    }), o.Util.extend(o.Editable.MiddleMarker.prototype, {
        initialize: function (t, e, i, n, s) {
            this.left = t, this.right = e, this.editor = n, this.latlngs = i, o.Marker.prototype.initialize.call(this,
                this.computeLatLng(), s), this._opacity = this.options.opacity, this.options.icon = this.editor.tools.createVertexIcon({
                className: this.options.className
            }), this.options.icon.options.anchor = s.anchor, this.editor.editLayer.addLayer(this), this.setVisibility()
        }
    }), o.Util.extend(o.Editable.PathEditor.prototype, {
        addVertexMarker: function (t, e) {
            var i = {
                anchor: {
                    x: 5,
                    y: 5
                }
            };
            return new this.tools.options.vertexMarkerClass(t, e, this, i)
        },
        addMiddleMarker: function (t, e, i) {
            var n = {
                anchor: {
                    x: 5,
                    y: 5
                }
            };
            return new this.tools.options.middleMarkerClass(t, e, i, this, n)
        },
        startDrawing: function () {
            this.map.doubleClickZoom.disable(), this._drawnLatLngs || this.setDrawnLatLngs(), o.Editable.BaseEditor.prototype
                .startDrawing.call(this)
        }
    })
}(window, document);