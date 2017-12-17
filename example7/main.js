function m() {
    return function () {}
}
function q(e) {
    return function (a) {
        this[e] = a
    }
}
function s(e) {
    return function () {
        return this[e]
    }
}(function () {
    var e = {};
    window.IMAP = window.LD = e;
    e.SRV_URL = "undefined" == typeof IMAP_CONFIG ? "http://api.ishowchina.com/" : IMAP_CONFIG.MSP_SERVICE_URL;
    e.MSP_VERSIONS = "v3";
    e.SRVConfig = {
        SRV_POI_DETAILS_URL: e.SRV_URL + "/poim?",
        SRV_GEO_URL: e.SRV_URL + e.MSP_VERSIONS + "/geo?",
        SRV_RGEO_URL: e.SRV_URL + e.MSP_VERSIONS + "/rgeo?",
        SRV_POI_URL: e.SRV_URL + e.MSP_VERSIONS + "/search/poi?",
        SRV_POI_AROUND_URL: e.SRV_URL + e.MSP_VERSIONS + "/search/poi?",
        SRV_POI_BOX_URL: e.SRV_URL + e.MSP_VERSIONS + "/search/poi?",
        SRV_SUGGEST_URL: e.SRV_URL + e.MSP_VERSIONS + "/sug?",
        SRV_BUS_TRANSFER_URL: e.SRV_URL + e.MSP_VERSIONS + "/route/bus?",
        SRV_BUS_LINE_ID_URL: e.SRV_URL + e.MSP_VERSIONS + "/search/busline/byid?",
        SRV_BUS_LINE_NAME_URL: e.SRV_URL + e.MSP_VERSIONS + "/search/busline/byname?",
        SRV_BUS_STATION_NAME_URL: e.SRV_URL + e.MSP_VERSIONS + "/search/busstop/byname?",
        SRV_BUS_STATION_ID_URL: e.SRV_URL + e.MSP_VERSIONS + "/search/busstop/byid?",
        SRV_DRIVING_URL: e.SRV_URL + e.MSP_VERSIONS + "/route/car?",
        SRV_WALKING_URL: e.SRV_URL + e.MSP_VERSIONS + "/route/walk?",
        SRV_BOUNDARY_URL: e.SRV_URL + e.MSP_VERSIONS + "/search/district?",
        SRV_CONVERT_URL: e.SRV_URL + e.MSP_VERSIONS + "/coord/convert?",
        SRV_AK: "undefined" == typeof IMAP_CONFIG ? "" : IMAP_CONFIG.KEY
    };
    e.STATIC_URL = "undefined" == typeof IMAP_CONFIG ? "http://webapi.ishowchina.com/jsmap/3.4.3/" : IMAP_CONFIG.JSMAP_SERVICE_URL +
        IMAP_CONFIG.JSMAP_SERVICE_VERSION + "/";
    e.MapConfig = {
        API_REALM_NAME: e.STATIC_URL,
        _MAP_PCIMG_SIZE: 256,
        _MAP_PCBGIMG_URL: "undefined" == typeof IMAP_CONFIG ? ["http://{s}.ishowchina.com/v3/tile/{z}/{x}/{y}.png", [
                    "tile4", "tile5", "tile6"]] : IMAP_CONFIG.TILE_URL,
        _MAP_VECTOR_BGIMG_URL: "undefined" == typeof IMAP_CONFIG ? "" : IMAP_CONFIG.VECTOR_TILE_URL,
        _MAP_PCIMG_ERROR: "http://tile1.ishowchina.com/404.png",
        _MAP_PC_DATAS_URL: ["http://{s}.ishowchina.com/v3/hotspot/{z}/{x}/{y}.js?algorithm=tms&s=hotspot", ["hs1",
                    "hs2", "hs3"]],
        _CONTROL_COPYRIGHT: "undefined" == typeof IMAP_CONFIG ? "" : IMAP_CONFIG.COPYRIGHT,
        _MAP_BGIMG_URL: "images/backgroundimg.png",
        _CONTROL_OVERVIEW_BTNIMG: "images/overview.png",
        _MAP_MARKER_PCICON: "images/point_1.png",
        _MAP_POINT_URL: "images/point_1.png",
        _MAP_IS_POINT_URL: "images/bubble.png",
        _MAP_IS_SEARCH_URL: "images/search_03.png",
        _MAP_IS_DEFIMG_URL: "images/img_1.gif",
        _MAP_CLOSE1_URL: "images/close_1.png",
        _MAP_CLOSE2_URL: "images/close_2.png",
        _MAP_TOOL_ZOOMIN: e.STATIC_URL + "images/tool/zoomin.png",
        _MAP_TOOL_ZOOMOUT: e.STATIC_URL + "images/tool/zoomout.png",
        _MAP_TOOL_MARKER: e.STATIC_URL + "images/tool/drawmarker.png",
        _MAP_TOOL_LINE: e.STATIC_URL + "images/tool/drawpolyline.png",
        _MAP_TOOL_POLYGON: e.STATIC_URL + "images/tool/drawpolygon.png",
        _MAP_TOOL_RECT: e.STATIC_URL + "images/tool/drawrect.png",
        _MAP_TOOL_CIRCLE: e.STATIC_URL + "images/tool/drawcircle.png",
        _MAP_TOOL_DIS: e.STATIC_URL + "images/tool/dis.png",
        _MAP_TOOL_AREA: e.STATIC_URL + "images/tool/area.png",
        _MAP_TOOL_RESTCENTER: e.STATIC_URL + "images/tool/restcenter.png",
        _MAP_TOOL_FOLLOWLNGLAT: e.STATIC_URL + "images/tool/followlnglat.png",
        _MAP_TOOL_FOLLOWLNGLAT2: e.STATIC_URL + "images/tool/followlnglat2.png",
        _MAP_OTHER_URL: "images/other.png",
        _MAP_SCALE_UNITS: [[1E3, "鍏噷"], [1, "绫�"]],
        _MAP_HAND: ["images/cur/openhand.cur", "images/cur/closedhand.cur"],
        _MAP_NAVIIMAGE: ["images/navi.png", "images/newNavi.gif"],
        _MAP_TOUCHALL: "images/touch.png",
        _MAP_ICON_BLAND_URL: "images/blank.png",
        _MAP_HOTSPOT_RECT_IMG_URL: "images/mhotspot.png",
        _MAP_CUR: "images/cur/",
        _MAP_CLUSTER_ICON: "images/cluster/",
        _CONTROL_COPYRIGHT_LOGO: "images/logoCP.png",
        _PLUGINS_URL: IMAP.SRV_URL + "v4/webapi/js/auth?v=" + ("undefined" == typeof IMAP_CONFIG ? "3.4.3" :
            IMAP_CONFIG.JSMAP_SERVICE_VERSION) + "&t=jsmap&ak=" + IMAP.SRVConfig.SRV_AK + "&m=",
        _MAP_PANORAMA_MARKER_ICON: "images/monkeys.png",
        _VERSIONS: "undefined" == typeof IMAP_CONFIG ? "3.4.3" : IMAP_CONFIG.JSMAP_SERVICE_VERSION,
        LOG_SERVICE: "",
        _V: "3.5.0"
    };
    e.Function = {
        isWebGL: function () {
            var a = document.createElement("canvas");
            return a.getContext ? a.getContext("webgl", {
                antialias: !0
            }) || a.getContext("experimental-webgl", {
                antialias: !0
            }) : !1
        },
        isInDocument: function (a) {
            return a.parentNode && 11 != a.parentNode.nodeType
        },
        getLngLatByOffset: function (a, b, c) {
            a.lng = Number(a.lng);
            a.lat = Number(a.lat);
            return new e.LngLat(a.lng + 360 * Math.asin(Math.sin(Math.round(b) / 12756274) / Math.cos(a.lat * Math.PI /
                180)) / Math.PI, a.lat + 360 * Math.asin(Math.round(c) / 12756274) / Math.PI)
        },
        createElement: function (a) {
            var b = document.createElement(a.name);
            a.id && (b.id = a.id);
            a.cssText && (b.style.cssText = a.cssText);
            return b
        },
        createElementNS: function (a) {
            var b = document.createElementNS(a.xmlns, a.name);
            a.cssText && (b.style.cssText = a.cssText);
            a.id && b.setAttribute("id", a.id);
            return b
        },
        getElement: function (a) {
            "string" == typeof a && (a = document.getElementById(a));
            return a
        },
        getElementsByClassName: function (a, b, c) {
            var d = [],
                e = [],
                e = b instanceof Element ? b.getElementsByTagName(c || "*") : document.getElementsByTagName(c || "*");
            for (b = 0; b < e.length; b++) e[b].className.match(RegExp("(\\s|^)" + a + "(\\s|$)")) && (d[d.length] = e[
                    b]);
            return d
        },
        isNotNull: function () {
            var a = arguments;
            null != a[0] && e.Function.isArray(a[0]) && (a = a[0]);
            for (var b = 0; b < a.length; b++) if (null == a[b]) return !1;
            return !0
        },
        isInstance: function (a) {
            var b = !1;
            if (a === String || a === Boolean || a === Number) b = !0;
            var c = arguments;
            null != c[1] && e.Function.isArray(c[1]) && (c = c[1]);
            if (null == a) return !1;
            for (var d = 1; d < c.length; d++) {
                if (null == c[d]) return !1;
                if (!(c[d] instanceof a)) if (b) {
                        if (c[d].constructor.prototype !== a.prototype) return !1
                    } else return !1
            }
            return !0
        },
        isArray: function (a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        },
        convert2Param: function (a, b) {
            b = e.Function.isArray(b) || [];
            var c = "";
            if (null != a) if ("string" == typeof a) c = a;
                else if (a instanceof Object) {
                var d = {}, f;
                for (f in b) {
                    var g = a[b[f]];
                    null != g && (d[b[f]] = g, delete a[b[f]])
                }
                for (f in a) null != a[f] && (c += "&" + f + "=" + a[f]);
                c = c.substr(1);
                e.Function.extend(a, d)
            }
            return c
        },
        unSelect: function (a) {
            "WebkitUserSelect" in document.documentElement.style ? (a.style.WebkitUserSelect = "none", a.style.onselectstart =
                "return false;") : "MozUserSelect" in document.documentElement.style ? a.style.MozUserSelect = "none" :
                "OUserSelect" in document.documentElement.style ? a.style.Gb = "none" : "msUserSelect" in document.documentElement
                .style ? a.style.gb = "none" : (a.unselectable = "on", a.style.gb = "none", a.onselectstart =
                "return false;")
        },
        pageSize: function (a) {
            return new e.Size(a.offsetWidth || document.body.clientWidth, a.offsetHeight || (e.Browser.isIE ?
                "CSS1Compat" == document.compatMode ? document.documentElement.offsetHeight : document.body.offsetHeight :
                self.innerHeight))
        },
        lastSeqID: 0,
        createUniqueID: function () {
            e.Function.lastSeqID += 1;
            return e.Function.lastSeqID
        },
        applyDefaults: function (a, b, c) {
            b = b || {};
            if (c) for (var d in b) a[c + d] = b[d];
            else for (d in b) a[d] = b[d]
        },
        extend: function (a, b) {
            if (a && b && "object" == typeof b) {
                for (var c in b) a[c] = b[c];
                c = "initialize hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
                    " ");
                for (var d = 0, e; d < c.length; d++) e = c[d], Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[
                        e])
            }
            return a
        },
        createInterval: function (a, b) {
            return window.setInterval(a, b)
        },
        clearInterval: function (a) {
            window.clearInterval(a)
        },
        setCapture: function (a) {
            a.setCapture && a.setCapture()
        },
        releaseCapture: function (a) {
            a.releaseCapture && a.releaseCapture()
        },
        distanceByPixel: function (a, b) {
            return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
        },
        distanceByLngLat: function (a, b) {
            var c = a.lat * Math.PI / 180,
                d = b.lat * Math.PI / 180;
            return parseFloat((12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin((c - d) / 2), 2) + Math.cos(c) * Math.cos(
                d) * Math.pow(Math.sin((a.lng - b.lng) * Math.PI / 180 / 2), 2)))).toFixed(2))
        },
        stringLength: function (a) {
            var b = a.match(/[^\x00-\xff]/ig);
            return a.length + (null == b ? 0 : b.length)
        },
        bind: function (a, b) {
            var c = Array.prototype.slice.apply(arguments, [2]);
            return function () {
                var d = c.concat(Array.prototype.slice.apply(arguments, [0]));
                return a.apply(b, d)
            }
        },
        transform: function () {
            for (var a = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"], b = 0; b < a.length; b++) if (
                    a[b] in document.documentElement.style) return a[b];
            return !1
        },
        deleteFromArray: function (a, b, c) {
            for (var d = a.length - 1; 0 <= d; d--) {
                var e = a[d];
                c && (e = a[d][c]);
                e == b && a.splice(d, 1)
            }
        },
        calculateArea: function (a) {
            for (var b = 0, c = a.length, d = 1; d < c; d++) b += (a[d].lng - a[d - 1].lng) * (a[d].lat + a[d - 1].lat) /
                    2;
            b += (a[0].lng - a[c - 1].lng) * (a[0].lat + a[c - 1].lat) / 2;
            return Number(parseFloat(1E4 * Math.abs(b), 10))
        },
        getCurrentStyle: function (a, b) {
            if (a.currentStyle) return a.currentStyle[b];
            if (a.style[b]) return a.style[b];
            if (document.defaultView && document.defaultView.getComputedStyle) var c = document.defaultView.getComputedStyle(
                    a, null);
            else window.getComputedStyle && (c = window.getComputedStyle(a, null));
            return c ? c[b] || c.getPropertyValue(b) : null
        },
        calculateShortestDist: function (a, b, c, d) {
            for (var f = {
                dis: Number.MAX_VALUE
            }, g = a.length - 1, h = 0, k = 0; k < g; k++) {
                if (!a[k]) return null;
                var l = this.$a([a[k], a[k + 1]], b);
                l.dis < f.dis && (h = k, f = {
                    lnglat: new e.LngLat(l.lng, l.lat),
                    dis: l.dis,
                    i: k,
                    lnglat1: a[k],
                    lnglat2: a[k + 1]
                })
            }
            f.index = h;
            f.dis = Math.round(e.Function.distanceByLngLat(b, f.lnglat) / c);
            f.preDis = Math.round(e.Function.distanceByLngLat(f.lnglat, d ? a[0] : f.lnglat1) / c);
            f.nextDis = Math.round(e.Function.distanceByLngLat(f.lnglat, d ? a[g - 1] : f.lnglat2) / c);
            return f
        },
        $a: function (a, b) {
            var c = 0,
                d = 0,
                c = a[1].lng - a[0].lng,
                d = a[1].lat - a[0].lat,
                e = -(a[0].lat - b.lat) * d - (a[0].lng - b.lng) * c,
                g;
            0 >= e ? (c = a[0].lng, d = a[0].lat) : e >= (g = c * c + d * d) ? (c = a[1].lng, d = a[1].lat) : (c = a[0]
                .lng + e * c / g, d = a[0].lat + e * d / g);
            return {
                lng: c,
                lat: d,
                dis: Math.pow(b.lng - c, 2) + Math.pow(b.lat - d, 2)
            }
        },
        calculatePedal: function (a, b) {
            for (var c = null, d = null, f = null, c = null, g = -1, h = d = -1, k = 1, l = a.length; k < l; k++) if (c =
                    a[k - 1], d = a[k], c = e.Function.Ia(b, c, d), null != c && (d = e.Function.Ga(b, c), -1 == g || d <
                    g)) g = d, f = c, h = k;
            return [h, f]
        },
        Ia: function (a, b, c) {
            var d = e.Function.oa(e.Function.Q(b.lng, b.lat, a.lng, a.lat), e.Function.Q(b.lng, b.lat, c.lng, c.lat));
            if (90 < d || 90 < e.Function.oa(e.Function.Q(c.lng, c.lat, a.lng, a.lat), e.Function.Q(c.lng, c.lat, b.lng,
                b.lat))) return null;
            var f = Math.sqrt((c.lng - b.lng) * (c.lng - b.lng) + (c.lat - b.lat) * (c.lat - b.lat));
            a = Math.cos(d * Math.PI / 180) * Math.sqrt((a.lng - b.lng) * (a.lng - b.lng) + (a.lat - b.lat) * (a.lat -
                b.lat));
            return new e.LngLat(b.lng + (c.lng - b.lng) * a / f, b.lat + (c.lat - b.lat) * a / f)
        },
        Ga: function (a, b) {
            var c = b.lng - a.lng,
                d = b.lat - a.lat;
            return Math.sqrt(c * c + d * d)
        },
        Q: function (a, b, c, d) {
            a = Math.round(180 * Math.atan2(c - a, d - b) / Math.PI);
            return 0 > a ? a + 360 : a
        },
        oa: function (a, b) {
            if (-1 == a || -1 == b) return 0;
            var c = Math.abs(b - a);
            return 180 >= c ? c : 360 - c
        },
        split: function (a, b) {
            for (var c = [], d = [], f = e.Function.calculatePedal(a, b)[0], g = 0; g < f; ++g) c.push(a[g]);
            c.push(b);
            for (d.push(b); f < a.length; ++f) d.push(a[f]);
            return [c, d]
        },
        merge: function (a, b) {
            for (var c = [], d = 0; d < a.length - 1; ++d) c.push(a[d]);
            for (d = 0; d < b.length; ++d) c.push(b[d]);
            return c
        },
        getEventPosition: function (a, b) {
            try {
                if ("undefined" != typeof a.pageX) {
                    var c = e.Function.getPageOffset(b);
                    return [a.pageX - c[0], a.pageY - c[1]]
                }
                if ("undefined" != typeof a.offsetX) {
                    for (var d = a.target || a.srcElement, c = [a.offsetX, a.offsetY]; d && d != b;) {
                        var f = d.style.zoom;
                        f && (c[0] *= f, c[1] *= f);
                        0 == d.clientWidth && 0 == d.clientHeight && d.offsetParent && "TD" == d.offsetParent.nodeName ||
                            (c[0] += d.offsetLeft, c[1] += d.offsetTop);
                        d = d.offsetParent
                    }
                    return c
                }
                return [0, 0]
            } catch (g) {}
        },
        getPageOffset: function (a) {
            var b = 0,
                c = 0;
            if (c = a.getBoundingClientRect()) {
                b = Math.floor(c.left) + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
                c = Math.floor(c.top) + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                b -= document.documentElement.clientLeft;
                c -= document.documentElement.clientTop;
                if ("CSS1Compat" != document.compatMode && e.Browser.isIE()) {
                    a = document.body.style.borderLeftWidth;
                    var d = document.body.style.borderTopWidth,
                        b = b - (isNaN(a) ? 2 : a),
                        c = c - (isNaN(d) ? 2 : d)
                }
                return [b, c]
            }
            for (b = [0, 0]; a && a.offsetParent;) b[0] += a.offsetLeft, b[1] += a.offsetTop, a = a.offsetParent;
            return b
        },
        getOffset: function (a, b) {
            a = this.Ka(a);
            var c = new e.Pixel(a.offsetX, a.offsetY),
                d = a.target;
            if (-1 < "svg,path,circle,".indexOf(a.target.nodeName) && !e.Browser.isIE9()) {
                "svg" != d.nodeName && (d = d.parentNode);
                try {
                    c.x = parseInt(d.style.left) + a.offsetX, c.y = parseInt(d.style.top) + a.offsetY
                } catch (f) {
                    return c
                }
                d = d.parentNode
            }
            try {
                for (; d && "ldmapc" != d.id;) c.x += d.offsetLeft || 0, c.y += d.offsetTop || 0, d = d.offsetParent
            } catch (g) {} finally {
                return d || (c.x -= b.layerOffset.x, c.y -= b.layerOffset.y), c
            }
        },
        Ka: function (a) {
            e.Browser.isIE() && (a.charCode = "keypress" == a.type ? a.keyCode : 0, a.eventPhase = 2, a.isChar = 0 < a.charCode,
                a.pageX = a.clientX + document.body.scrollLeft, a.pageY = a.clientY + document.body.scrollTop, a.preventDefault = function () {
                this.returnValue = !1
            }, "mouseout" == a.type ? a.relatedTarget = a.toElement : "mouseover" == a.type && (a.relatedTarget = a.fromElement),
                a.stopPropagation = function () {
                this.cancelBubble = !0
            }, a.target = a.srcElement, a.time = (new Date).getTime());
            e.Browser.isFirefox() && (a.offsetX = a.layerX, a.offsetY = a.layerY);
            a.wheelDelta && (a.detail = a.wheelDelta);
            return a
        },
        getTouchEventOffset: function (a) {
            a = a.touches || a.Ec;
            for (var b = {
                x: 0,
                y: 0
            }, c = 0; c < a.length; c++) b.x += a[c].clientX, b.y += a[c].clientY;
            return b
        },
        getViewportElement: function () {
            var a = arguments.callee.hb;
            void 0 == a && (a = e.Browser.isIE() && "CSS1Compat" != document.compatMode ? document.body : document.documentElement,
                arguments.callee.hb = a);
            return a
        },
        pagePosition: function (a) {
            var b = [0, 0],
                c = e.Function.getViewportElement();
            if (!a || a == window || a == c) return b;
            var d = e.Browser.isFirefox() && document.getBoxObjectFor && "absolute" == a.style.position && ("" == a.style
                .top || "" == a.style.left),
                f = null;
            if (a.getBoundingClientRect) a = a.getBoundingClientRect(), d = window.pageYOffset || c.scrollTop, b[0] = a
                    .left + (window.pageXOffset || c.scrollLeft), b[1] = a.top + d;
            else if (document.getBoxObjectFor && !d) a = document.getBoxObjectFor(a), c = document.getBoxObjectFor(c),
                    b[0] = a.screenX - c.screenX, b[1] = a.screenY - c.screenY;
            else {
                b[0] = a.offsetLeft;
                b[1] = a.offsetTop;
                f = a.offsetParent;
                if (f != a) for (; f;) b[0] += f.offsetLeft, b[1] += f.offsetTop, f = f.offsetParent;
                if (e.Browser.isOpera() || e.Browser.isSafari() && "absolute" == a.style.position) b[1] -= document.body
                        .offsetTop;
                for (f = a.offsetParent; f && f != document.body;) b[0] -= f.scrollLeft, e.Browser.isOpera() && "TR" ==
                        f.tagName || (b[1] -= f.scrollTop), f = f.offsetParent
            }
            return b
        },
        indexOf: function (a, b, c) {
            for (var d = 0, e = a.length; d < e; d++) {
                var g = a[d];
                if (g && (c && (g = g[c]), g == b)) return d
            }
            return -1
        },
        getStyle: function (a, b) {
            a = e.Function.getElement(a);
            var c = null;
            if (a && a.style) {
                c = a.style[this.pa(b)];
                c || (document.defaultView && document.defaultView.getComputedStyle ? c = (c = document.defaultView.getComputedStyle(
                    a, null)) ? c.getPropertyValue(b) : null : a.currentStyle && (c = a.currentStyle[this.pa(b)]));
                var d = ["left", "top", "right", "bottom"];
                window.opera && -1 != e.Function.indexOf(d, b) && "static" == e.Function.getStyle(a, "position") && (c =
                    "auto")
            }
            return "auto" == c ? null : c
        },
        pa: function (a) {
            a = a.split("-");
            for (var b = a[0], c = 1, d = a.length; c < d; c++) var e = a[c],
            b = b + (e.charAt(0).toUpperCase() + e.substring(1));
            return b
        },
        testNumber: function (a) {
            var b = {};
            b.nonNum = isNaN(a);
            b.appointNum = /^[0-9]*$/.test(a);
            return b
        },
        getNumberLength: function (a) {
            return a.toString().length
        },
        cutStrLength: function (a, b) {
            for (var c = 0, d = 0, e = 0, g = 0; g < b; g++) {
                255 < a.charCodeAt(g) ? c += 2 : d += 1;
                e += 1;
                if (c + d == b) return a.substring(0, e);
                if (c + d > b) return a.substring(0, e - 1) + ""
            }
        },
        checkFieldLength: function (a, b) {
            var c = 0;
            for (i = 0; i < a.length; i++) c = 255 < a.charCodeAt(i) ? c + 2 : c + 1;
            return c > b ? this.cutStrLength(a, b) : a
        },
        formatNumber: function (a, b) {
            var c = a.toString(),
                d = c.indexOf(".");
            return 0 < d ? (c = c.substring(0, d + b + 1), eval(c)) : a
        },
        clone: function (a) {
            if ("object" != typeof a || null == a) return a;
            var b = {}, c;
            for (c in a) b[c] = e.Function.clone(a[c]);
            return b
        },
        getRotation: function (a, b) {
            var c = 0,
                d = b.y - a.y,
                e = b.x - a.x;
            0 != b.x - a.x ? (c = Math.atan((b.y - a.y) / (b.x - a.x)), 0 <= d && 0 > e ? c = Math.PI + c : 0 > d && 0 >=
                e ? c = Math.PI + c : 0 > d && 0 <= e && (c = 2 * Math.PI + c)) : c = b.y > a.y ? Math.PI / 2 : 3 *
                Math.PI / 2;
            return (180 * c / Math.PI).toFixed(1)
        },
        unique: function (a) {
            for (var b = [], c = {}, d = 0, e; null != (e = a[d]); d++) c[e] || (b.push(e), c[e] = !0);
            return b
        },
        containsLngLat: function (a, b) {
            for (var c = a.lng, d = a.lat, e = !1, g = 0, h = b.length, k = h - 1; g < h; k = g, g++) {
                var l = b[g].lng,
                    p = b[g].lat,
                    n = b[k].lng,
                    k = b[k].lat;
                if (l === c && p === d || n === c && k === d) return !0;
                if (p < d && k >= d || p >= d && k < d) {
                    l += (d - p) * (n - l) / (k - p);
                    if (l === c) return !0;
                    l > c && (e = !e)
                }
            }
            return e
        }
    };
    e.Function.vendorPrefix = function () {
        function a(a) {
            return a ? a.replace(/([A-Z])/g, function (a) {
                return "-" + a.toLowerCase()
            }).replace(/^ms-/, "-ms-") : null
        }
        function b(a, b) {
            if (void 0 === h[b]) {
                var c, e = 0,
                    f = d.length,
                    g = "undefined" !== typeof a.cssText;
                for (h[b] = null; e < f; e++) if ((c = d[e]) ? (g || (c = c.toLowerCase()), c = c + b.charAt(0).toUpperCase() +
                        b.slice(1)) : c = b, void 0 !== a[c]) {
                        h[b] = c;
                        break
                    }
            }
            return h[b]
        }
        function c(a) {
            return b(e, a)
        }
        var d = ["", "O", "ms", "Moz", "Webkit"],
            e = document.createElement("div").style,
            g = {}, h = {};
        return {
            css: function (b) {
                if (void 0 === g[b]) {
                    var d = b.replace(/(-[\s\S])/g, function (a) {
                        return a.charAt(1).toUpperCase()
                    }),
                        d = c(d);
                    g[b] = a(d)
                }
                return g[b]
            },
            js: b,
            style: c,
            cssCache: g,
            jsCache: h
        }
    }();
    e.Class = function () {
        function a() {
            arguments && arguments[0] != e.Class.Ac && this.initialize && this.initialize.apply(this, arguments)
        }
        for (var b = {}, c, d = 0, f = arguments.length; d < f; ++d) "function" == typeof arguments[d] ? (0 == d && 1 <
                f && (c = arguments[d].prototype.initialize, arguments[d].prototype.initialize = m(), b = new arguments[
                d], void 0 === c ? delete arguments[d].prototype.initialize : arguments[d].prototype.initialize = c), c =
                arguments[d].prototype) : c = arguments[d], e.Function.extend(b, c);
        a.prototype = b;
        return a
    };
    e.Class.Ac = m();
    e.Ajax = function (a) {
        var b = a || {};
        if (b.success && b.url) {
            a = b.url + e.Function.convert2Param(b.data || {});
            var c = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            c.open(this.type || "POST", a, this.async || !1);
            c.onreadystatechange = function () {
                4 == c.readyState && (200 == c.status ? b.success(JSON.parse(c.responseText)) : b.error instanceof Function &&
                    b.error(c.status))
            };
            c.send()
        }
    };
    e.convert = function (a, b, c) {
        function d(a) {
            for (var b = [], c, d = 0, e = a.length; d < e; ++d) c = a[d], b.push(Number(c.lng).toFixed(6) + "," +
                    Number(c.lat).toFixed(6));
            return b.join(";")
        }
        if (!c || !c[0]) return c;
        for (var f = [], g = c.length, h = [], k = 0; k < g; k += 360) f.push(c.slice(k, k + 360));
        a = {
            url: IMAP.SRVConfig.SRV_CONVERT_URL + "ak=" + IMAP.SRVConfig.SRV_AK + "&",
            data: {
                coord_type: a,
                out_coord_type: b
            },
            success: function (a) {
                a = a.result;
                for (var b = 0, c = a.length; b < c; ++b) h.push(new e.LngLat(Number(a[b].x), Number(a[b].y)))
            },
            error: function () {
                h = c
            }
        };
        b = 0;
        for (g = f.length; b < g; ++b) a.data.coords = d(f[b]), e.Ajax(a);
        return h
    };
    e.Browser = {
        wc: window.navigator,
        u: function () {
            return window.navigator.userAgent.toLowerCase()
        },
        isIE: function () {
            return /msie/i.test(this.u())
        },
        isIE6: function () {
            return /msie 6.0/i.test(this.u())
        },
        isIE7: function () {
            return /msie 7.0/i.test(this.u())
        },
        isIE8: function () {
            return /msie 8.0/i.test(this.u())
        },
        isIE9: function () {
            return /msie 9.0/i.test(this.u())
        },
        isIE10: function () {
            return /msie 10\.0/i.test(this.u())
        },
        isChrome: function () {
            return /chrome/i.test(this.u()) && /webkit/i.test(this.u()) && /mozilla/i.test(this.u())
        },
        isSafari: function () {
            return /webkit/i.test(this.u()) && !(/chrome/i.test(this.u()) && /webkit/i.test(this.u()) && /mozilla/i.test(
                this.u()))
        },
        isFirefox: function () {
            return /gecko/i.test(this.u()) && !/like gecko/i.test(this.u())
        },
        isOpera: function () {
            return /opera/i.test(this.u())
        },
        isSupportKeypress: function () {
            return !this.wc.appVersion.match(/Konqueror|Safari|KHLDL/)
        }
    };
    e.Constants = {
        _SUCC_TYPE: 0,
        _ERROR_TYPE: -1,
        _REMOVE_TOOL: "removetool",
        _Click_Interval: 500,
        _DBLClick_Interval: 250,
        _TOUCH_START: "touchstart",
        _TOUCH_ZOOM: "touchzoom",
        _TOUCH_ZOOM_END: "touchzoomEnd",
        _TOUCH_MOVE: "touchmove",
        _TOUCH_DOWN: "touchstart",
        _TOUCH_UP: "touchend",
        _TOUCH_DBLCLICK: "touchDBLClick",
        _TOUCH_CLICK: "touchClick",
        LONGPRESS: "longpress",
        _GESTURE_START: "gesturedown",
        _GESTURE_CHANGE: "gesturemove",
        _GESTURE_END: "gestureup",
        _MOUSE_SCROLL: e.Browser.isFirefox() ? "DOMMouseScroll" : "mousewheel",
        RESIZE: "resize",
        LOAD: "load",
        ADD_LAYER: "layeradd",
        CHAGE_BGLAYER: "changeBgLayer",
        REMOVE_LAYER: "layerremove",
        MOVE_START: "movestart",
        MOVING: "move",
        MOVE_END: "moveend",
        MOVE_ALONG_END: "moveAlongend",
        CLICK: "click",
        HOVER: "hover",
        CHANGED: "changed",
        CHANGE: "change",
        MOUSE_CONTEXTMENU: "contextmenu",
        DBLCLICK: "dblclick",
        MOUSE_DOWN: "mousedown",
        MOUSE_UP: "mouseup",
        MOUSE_MOVE: "mousemove",
        MOUSE_OVER: "mouseover",
        MOUSE_OUT: "mouseout",
        MOUSE_WHEEL: "mousewheel",
        KEY_DOWN: "keydown",
        KEY_UP: "keyup",
        DRAG_END: "dragend",
        DRAG_START: "dragstart",
        EDIT_START: "editstart",
        EDIT_ING: "editing",
        EDIT_END: "editend",
        REMOVE_EDIT: "removeedit",
        DRAG_ING: "drag",
        ZOOM_START: "zoomstart",
        ZOOM_CHANGED: "zoom",
        ZOOM_END: "zoomend",
        ZOOM_LEVELS_CHANGED: "zoomLevelschange",
        ADD_OVERLAY: "addoverlay",
        REMOVE_OVERLAY: "removeoverlay",
        MENU_OPEN: "menuopen",
        MENU_CLOSE: "menuclose",
        TIP_CLOSE: "tipclose",
        TIP_CLICK: "tipclick",
        TIP_REMOVE: "removetip",
        CONTROL_OVERVIEW_OPEN: "overviewopen",
        CONTROL_OVERVIEW_CLOSE: "overviewclose",
        CONTROL_OVERVIEW_CHANGE: "overviewchange",
        LEFT_TOP: [0, 0],
        TOP_CENTER: [0.5, 0],
        RIGHT_TOP: [1, 0],
        RIGHT_CENTER: [1, 0.5],
        RIGHT_BOTTOM: [1, 1],
        BOTTOM_CENTER: [0.5, 1],
        LEFT_BOTTOM: [0, 1],
        LEFT_CENTER: [0, 0.5],
        CENTER: [0.5, 0.5],
        OVERLAY_LABEL_DEFAULT: 0,
        OVERLAY_LABEL_HTML: 1,
        OVERLAY_LABEL_TEXT: 0,
        OVERLAY_INFOWINDOW_DEFAULT: 0,
        OVERLAY_INFOWINDOW_CUSTOM: 1,
        OVERLAY_LINE_SOLID: "solid",
        OVERLAY_LINE_DASHED: "5, 5",
        OVERLAY_MARKER_POINT: 1,
        OVERLAY_MARKER_SQUAREANGLE: 2,
        OVERLAY_MARKER_CIRCLE: 3,
        NODE_MOVE: "nodemove",
        TOOL_ZOOM_IN: "zoomIn",
        TOOL_ZOOM_OUT: "zoomOut",
        TOOL_BOX_H: "toolboxh",
        TOOL_BOX_V: "toolboxv",
        CONTROL_NAVIGATION_LARGE: 0,
        CONTROL_NAVIGATION_SMALL: 1,
        CONTROL_NAVIGATION_PAN: 2,
        CONTROL_NAVIGATION_ZOOM: 3,
        CONTROL_NAVIGATION_ZOOMBAR: 4,
        LAYER_HOTSPOT_ICON_TYPE: 0,
        LAYER_HOTSPOT_RECT_TYPE: 1,
        LAYER_HOTSPOT_HAND_TYPE: 2,
        HOTSPOT_CLICK: "hotspotclick",
        HOTSPOT_OVER: "hotspotover",
        HOTSPOT_OUT: "hotspotout",
        DELETE_END: "deleteend",
        SPLIT_END: "splitend",
        DELETE_NODE_END: "deletenodeend",
        ADD_NODE_END: "addnodeend",
        ERROR: "error",
        SCALE_UNIT_METRIC: "metric",
        SCALE_UNIT_IMPERIAL: "imperial",
        INCHES_PER_UNIT: {
            inches: 1,
            ft: 12,
            mi: 63360,
            m: 39.37,
            km: 39370,
            dd: 4374754,
            yd: 36
        },
        DRIVING_POLICY_LEAST_TIME: 0,
        DRIVING_POLICY_LEAST_DISTANCE: 1,
        DRIVING_POLICY_AVOID_HIGHWAYS: 2,
        POINT_SIZE_SMALL: 1,
        POINT_SIZE_MIDDLE: 2,
        POINT_SIZE_BIG: 3,
        POINT_SHAPE_STAR: 1,
        POINT_SHAPE_CIRCLE: 2,
        POINT_SHAPE_SQUAREANGLE: 3,
        POINT_SHAPE_PONT: 4,
        GPS_WGS84: "wgs84",
        GPS_GCJ02: "gcj02",
        GPS_BD: "baidu",
        EPSG4326: "EPSG:4326",
        EPSG3857: "EPSG:3857"
    };
    e.Function = {
        isWebGL: function () {
            var a = document.createElement("canvas");
            return a.getContext ? a.getContext("webgl", {
                antialias: !0
            }) || a.getContext("experimental-webgl", {
                antialias: !0
            }) : !1
        },
        isInDocument: function (a) {
            return a.parentNode && 11 != a.parentNode.nodeType
        },
        getLngLatByOffset: function (a, b, c) {
            a.lng = Number(a.lng);
            a.lat = Number(a.lat);
            return new e.LngLat(a.lng + 360 * Math.asin(Math.sin(Math.round(b) / 12756274) / Math.cos(a.lat * Math.PI /
                180)) / Math.PI, a.lat + 360 * Math.asin(Math.round(c) / 12756274) / Math.PI)
        },
        createElement: function (a) {
            var b = document.createElement(a.name);
            a.id && (b.id = a.id);
            a.cssText && (b.style.cssText = a.cssText);
            return b
        },
        createElementNS: function (a) {
            var b = document.createElementNS(a.xmlns, a.name);
            a.cssText && (b.style.cssText = a.cssText);
            a.id && b.setAttribute("id", a.id);
            return b
        },
        getElement: function (a) {
            "string" == typeof a && (a = document.getElementById(a));
            return a
        },
        getElementsByClassName: function (a, b, c) {
            var d = [],
                e = [],
                e = b instanceof Element ? b.getElementsByTagName(c || "*") : document.getElementsByTagName(c || "*");
            for (b = 0; b < e.length; b++) e[b].className.match(RegExp("(\\s|^)" + a + "(\\s|$)")) && (d[d.length] = e[
                    b]);
            return d
        },
        isNotNull: function () {
            var a = arguments;
            null != a[0] && e.Function.isArray(a[0]) && (a = a[0]);
            for (var b = 0; b < a.length; b++) if (null == a[b]) return !1;
            return !0
        },
        isInstance: function (a) {
            var b = !1;
            if (a === String || a === Boolean || a === Number) b = !0;
            var c = arguments;
            null != c[1] && e.Function.isArray(c[1]) && (c = c[1]);
            if (null == a) return !1;
            for (var d = 1; d < c.length; d++) {
                if (null == c[d]) return !1;
                if (!(c[d] instanceof a)) if (b) {
                        if (c[d].constructor.prototype !== a.prototype) return !1
                    } else return !1
            }
            return !0
        },
        isArray: function (a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        },
        convert2Param: function (a, b) {
            b = e.Function.isArray(b) || [];
            var c = "";
            if (null != a) if ("string" == typeof a) c = a;
                else if (a instanceof Object) {
                var d = {}, f;
                for (f in b) {
                    var g = a[b[f]];
                    null != g && (d[b[f]] = g, delete a[b[f]])
                }
                for (f in a) null != a[f] && (c += "&" + f + "=" + a[f]);
                c = c.substr(1);
                e.Function.extend(a, d)
            }
            return c
        },
        unSelect: function (a) {
            "WebkitUserSelect" in document.documentElement.style ? (a.style.WebkitUserSelect = "none", a.style.onselectstart =
                "return false;") : "MozUserSelect" in document.documentElement.style ? a.style.MozUserSelect = "none" :
                "OUserSelect" in document.documentElement.style ? a.style.Gb = "none" : "msUserSelect" in document.documentElement
                .style ? a.style.gb = "none" : (a.unselectable = "on", a.style.gb = "none", a.onselectstart =
                "return false;")
        },
        pageSize: function (a) {
            return new e.Size(a.offsetWidth || document.body.clientWidth, a.offsetHeight || (e.Browser.isIE ?
                "CSS1Compat" == document.compatMode ? document.documentElement.offsetHeight : document.body.offsetHeight :
                self.innerHeight))
        },
        lastSeqID: 0,
        createUniqueID: function () {
            e.Function.lastSeqID += 1;
            return e.Function.lastSeqID
        },
        applyDefaults: function (a, b, c) {
            b = b || {};
            if (c) for (var d in b) a[c + d] = b[d];
            else for (d in b) a[d] = b[d]
        },
        extend: function (a, b) {
            if (a && b && "object" == typeof b) {
                for (var c in b) a[c] = b[c];
                c = "initialize hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
                    " ");
                for (var d = 0, e; d < c.length; d++) e = c[d], Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[
                        e])
            }
            return a
        },
        createInterval: function (a, b) {
            return window.setInterval(a, b)
        },
        clearInterval: function (a) {
            window.clearInterval(a)
        },
        setCapture: function (a) {
            a.setCapture && a.setCapture()
        },
        releaseCapture: function (a) {
            a.releaseCapture && a.releaseCapture()
        },
        distanceByPixel: function (a, b) {
            return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
        },
        distanceByLngLat: function (a, b) {
            var c = a.lat * Math.PI / 180,
                d = b.lat * Math.PI / 180;
            return parseFloat((12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin((c - d) / 2), 2) + Math.cos(c) * Math.cos(
                d) * Math.pow(Math.sin((a.lng - b.lng) * Math.PI / 180 / 2), 2)))).toFixed(2))
        },
        stringLength: function (a) {
            var b = a.match(/[^\x00-\xff]/ig);
            return a.length + (null == b ? 0 : b.length)
        },
        bind: function (a, b) {
            var c = Array.prototype.slice.apply(arguments, [2]);
            return function () {
                var d = c.concat(Array.prototype.slice.apply(arguments, [0]));
                return a.apply(b, d)
            }
        },
        transform: function () {
            for (var a = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"], b = 0; b < a.length; b++) if (
                    a[b] in document.documentElement.style) return a[b];
            return !1
        },
        deleteFromArray: function (a, b, c) {
            for (var d = a.length - 1; 0 <= d; d--) {
                var e = a[d];
                c && (e = a[d][c]);
                e == b && a.splice(d, 1)
            }
        },
        calculateArea: function (a) {
            for (var b = 0, c = a.length, d = 1; d < c; d++) b += (a[d].lng - a[d - 1].lng) * (a[d].lat + a[d - 1].lat) /
                    2;
            b += (a[0].lng - a[c - 1].lng) * (a[0].lat + a[c - 1].lat) / 2;
            return Number(parseFloat(1E4 * Math.abs(b), 10))
        },
        getCurrentStyle: function (a, b) {
            if (a.currentStyle) return a.currentStyle[b];
            if (a.style[b]) return a.style[b];
            if (document.defaultView && document.defaultView.getComputedStyle) var c = document.defaultView.getComputedStyle(
                    a, null);
            else window.getComputedStyle && (c = window.getComputedStyle(a, null));
            return c ? c[b] || c.getPropertyValue(b) : null
        },
        calculateShortestDist: function (a, b, c, d) {
            for (var f = {
                dis: Number.MAX_VALUE
            }, g = a.length - 1, h = 0, k = 0; k < g; k++) {
                if (!a[k]) return null;
                var l = this.$a([a[k], a[k + 1]], b);
                l.dis < f.dis && (h = k, f = {
                    lnglat: new e.LngLat(l.lng, l.lat),
                    dis: l.dis,
                    i: k,
                    lnglat1: a[k],
                    lnglat2: a[k + 1]
                })
            }
            f.index = h;
            f.dis = Math.round(e.Function.distanceByLngLat(b, f.lnglat) / c);
            f.preDis = Math.round(e.Function.distanceByLngLat(f.lnglat, d ? a[0] : f.lnglat1) / c);
            f.nextDis = Math.round(e.Function.distanceByLngLat(f.lnglat, d ? a[g - 1] : f.lnglat2) / c);
            return f
        },
        $a: function (a, b) {
            var c = 0,
                d = 0,
                c = a[1].lng - a[0].lng,
                d = a[1].lat - a[0].lat,
                e = -(a[0].lat - b.lat) * d - (a[0].lng - b.lng) * c,
                g;
            0 >= e ? (c = a[0].lng, d = a[0].lat) : e >= (g = c * c + d * d) ? (c = a[1].lng, d = a[1].lat) : (c = a[0]
                .lng + e * c / g, d = a[0].lat + e * d / g);
            return {
                lng: c,
                lat: d,
                dis: Math.pow(b.lng - c, 2) + Math.pow(b.lat - d, 2)
            }
        },
        calculatePedal: function (a, b) {
            for (var c = null, d = null, f = null, c = null, g = -1, h = d = -1, k = 1, l = a.length; k < l; k++) if (c =
                    a[k - 1], d = a[k], c = e.Function.Ia(b, c, d), null != c && (d = e.Function.Ga(b, c), -1 == g || d <
                    g)) g = d, f = c, h = k;
            return [h, f]
        },
        Ia: function (a, b, c) {
            var d = e.Function.oa(e.Function.Q(b.lng, b.lat, a.lng, a.lat), e.Function.Q(b.lng, b.lat, c.lng, c.lat));
            if (90 < d || 90 < e.Function.oa(e.Function.Q(c.lng, c.lat, a.lng, a.lat), e.Function.Q(c.lng, c.lat, b.lng,
                b.lat))) return null;
            var f = Math.sqrt((c.lng - b.lng) * (c.lng - b.lng) + (c.lat - b.lat) * (c.lat - b.lat));
            a = Math.cos(d * Math.PI / 180) * Math.sqrt((a.lng - b.lng) * (a.lng - b.lng) + (a.lat - b.lat) * (a.lat -
                b.lat));
            return new e.LngLat(b.lng + (c.lng - b.lng) * a / f, b.lat + (c.lat - b.lat) * a / f)
        },
        Ga: function (a, b) {
            var c = b.lng - a.lng,
                d = b.lat - a.lat;
            return Math.sqrt(c * c + d * d)
        },
        Q: function (a, b, c, d) {
            a = Math.round(180 * Math.atan2(c - a, d - b) / Math.PI);
            return 0 > a ? a + 360 : a
        },
        oa: function (a, b) {
            if (-1 == a || -1 == b) return 0;
            var c = Math.abs(b - a);
            return 180 >= c ? c : 360 - c
        },
        split: function (a, b) {
            for (var c = [], d = [], f = e.Function.calculatePedal(a, b)[0], g = 0; g < f; ++g) c.push(a[g]);
            c.push(b);
            for (d.push(b); f < a.length; ++f) d.push(a[f]);
            return [c, d]
        },
        merge: function (a, b) {
            for (var c = [], d = 0; d < a.length - 1; ++d) c.push(a[d]);
            for (d = 0; d < b.length; ++d) c.push(b[d]);
            return c
        },
        getEventPosition: function (a, b) {
            try {
                if ("undefined" != typeof a.pageX) {
                    var c = e.Function.getPageOffset(b);
                    return [a.pageX - c[0], a.pageY - c[1]]
                }
                if ("undefined" != typeof a.offsetX) {
                    for (var d = a.target || a.srcElement, c = [a.offsetX, a.offsetY]; d && d != b;) {
                        var f = d.style.zoom;
                        f && (c[0] *= f, c[1] *= f);
                        0 == d.clientWidth && 0 == d.clientHeight && d.offsetParent && "TD" == d.offsetParent.nodeName ||
                            (c[0] += d.offsetLeft, c[1] += d.offsetTop);
                        d = d.offsetParent
                    }
                    return c
                }
                return [0, 0]
            } catch (g) {}
        },
        getPageOffset: function (a) {
            var b = 0,
                c = 0;
            if (c = a.getBoundingClientRect()) {
                b = Math.floor(c.left) + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
                c = Math.floor(c.top) + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                b -= document.documentElement.clientLeft;
                c -= document.documentElement.clientTop;
                if ("CSS1Compat" != document.compatMode && e.Browser.isIE()) {
                    a = document.body.style.borderLeftWidth;
                    var d = document.body.style.borderTopWidth,
                        b = b - (isNaN(a) ? 2 : a),
                        c = c - (isNaN(d) ? 2 : d)
                }
                return [b, c]
            }
            for (b = [0, 0]; a && a.offsetParent;) b[0] += a.offsetLeft, b[1] += a.offsetTop, a = a.offsetParent;
            return b
        },
        getOffset: function (a, b) {
            a = this.Ka(a);
            var c = new e.Pixel(a.offsetX, a.offsetY),
                d = a.target;
            if (-1 < "svg,path,circle,".indexOf(a.target.nodeName) && !e.Browser.isIE9()) {
                "svg" != d.nodeName && (d = d.parentNode);
                try {
                    c.x = parseInt(d.style.left) + a.offsetX, c.y = parseInt(d.style.top) + a.offsetY
                } catch (f) {
                    return c
                }
                d = d.parentNode
            }
            try {
                for (; d && "ldmapc" != d.id;) c.x += d.offsetLeft || 0, c.y += d.offsetTop || 0, d = d.offsetParent
            } catch (g) {} finally {
                return d || (c.x -= b.layerOffset.x, c.y -= b.layerOffset.y), c
            }
        },
        Ka: function (a) {
            e.Browser.isIE() && (a.charCode = "keypress" == a.type ? a.keyCode : 0, a.eventPhase = 2, a.isChar = 0 < a.charCode,
                a.pageX = a.clientX + document.body.scrollLeft, a.pageY = a.clientY + document.body.scrollTop, a.preventDefault = function () {
                this.returnValue = !1
            }, "mouseout" == a.type ? a.relatedTarget = a.toElement : "mouseover" == a.type && (a.relatedTarget = a.fromElement),
                a.stopPropagation = function () {
                this.cancelBubble = !0
            }, a.target = a.srcElement, a.time = (new Date).getTime());
            e.Browser.isFirefox() && (a.offsetX = a.layerX, a.offsetY = a.layerY);
            a.wheelDelta && (a.detail = a.wheelDelta);
            return a
        },
        getTouchEventOffset: function (a) {
            a = a.touches || a.Ec;
            for (var b = {
                x: 0,
                y: 0
            }, c = 0; c < a.length; c++) b.x += a[c].clientX, b.y += a[c].clientY;
            return b
        },
        getViewportElement: function () {
            var a = arguments.callee.hb;
            void 0 == a && (a = e.Browser.isIE() && "CSS1Compat" != document.compatMode ? document.body : document.documentElement,
                arguments.callee.hb = a);
            return a
        },
        pagePosition: function (a) {
            var b = [0, 0],
                c = e.Function.getViewportElement();
            if (!a || a == window || a == c) return b;
            var d = e.Browser.isFirefox() && document.getBoxObjectFor && "absolute" == a.style.position && ("" == a.style
                .top || "" == a.style.left),
                f = null;
            if (a.getBoundingClientRect) a = a.getBoundingClientRect(), d = window.pageYOffset || c.scrollTop, b[0] = a
                    .left + (window.pageXOffset || c.scrollLeft), b[1] = a.top + d;
            else if (document.getBoxObjectFor && !d) a = document.getBoxObjectFor(a), c = document.getBoxObjectFor(c),
                    b[0] = a.screenX - c.screenX, b[1] = a.screenY - c.screenY;
            else {
                b[0] = a.offsetLeft;
                b[1] = a.offsetTop;
                f = a.offsetParent;
                if (f != a) for (; f;) b[0] += f.offsetLeft, b[1] += f.offsetTop, f = f.offsetParent;
                if (e.Browser.isOpera() || e.Browser.isSafari() && "absolute" == a.style.position) b[1] -= document.body
                        .offsetTop;
                for (f = a.offsetParent; f && f != document.body;) b[0] -= f.scrollLeft, e.Browser.isOpera() && "TR" ==
                        f.tagName || (b[1] -= f.scrollTop), f = f.offsetParent
            }
            return b
        },
        indexOf: function (a, b, c) {
            for (var d = 0, e = a.length; d < e; d++) {
                var g = a[d];
                if (g && (c && (g = g[c]), g == b)) return d
            }
            return -1
        },
        getStyle: function (a, b) {
            a = e.Function.getElement(a);
            var c = null;
            if (a && a.style) {
                c = a.style[this.pa(b)];
                c || (document.defaultView && document.defaultView.getComputedStyle ? c = (c = document.defaultView.getComputedStyle(
                    a, null)) ? c.getPropertyValue(b) : null : a.currentStyle && (c = a.currentStyle[this.pa(b)]));
                var d = ["left", "top", "right", "bottom"];
                window.opera && -1 != e.Function.indexOf(d, b) && "static" == e.Function.getStyle(a, "position") && (c =
                    "auto")
            }
            return "auto" == c ? null : c
        },
        pa: function (a) {
            a = a.split("-");
            for (var b = a[0], c = 1, d = a.length; c < d; c++) var e = a[c],
            b = b + (e.charAt(0).toUpperCase() + e.substring(1));
            return b
        },
        testNumber: function (a) {
            var b = {};
            b.nonNum = isNaN(a);
            b.appointNum = /^[0-9]*$/.test(a);
            return b
        },
        getNumberLength: function (a) {
            return a.toString().length
        },
        cutStrLength: function (a, b) {
            for (var c = 0, d = 0, e = 0, g = 0; g < b; g++) {
                255 < a.charCodeAt(g) ? c += 2 : d += 1;
                e += 1;
                if (c + d == b) return a.substring(0, e);
                if (c + d > b) return a.substring(0, e - 1) + ""
            }
        },
        checkFieldLength: function (a, b) {
            var c = 0;
            for (i = 0; i < a.length; i++) c = 255 < a.charCodeAt(i) ? c + 2 : c + 1;
            return c > b ? this.cutStrLength(a, b) : a
        },
        formatNumber: function (a, b) {
            var c = a.toString(),
                d = c.indexOf(".");
            return 0 < d ? (c = c.substring(0, d + b + 1), eval(c)) : a
        },
        clone: function (a) {
            if ("object" != typeof a || null == a) return a;
            var b = {}, c;
            for (c in a) b[c] = e.Function.clone(a[c]);
            return b
        },
        getRotation: function (a, b) {
            var c = 0,
                d = b.y - a.y,
                e = b.x - a.x;
            0 != b.x - a.x ? (c = Math.atan((b.y - a.y) / (b.x - a.x)), 0 <= d && 0 > e ? c = Math.PI + c : 0 > d && 0 >=
                e ? c = Math.PI + c : 0 > d && 0 <= e && (c = 2 * Math.PI + c)) : c = b.y > a.y ? Math.PI / 2 : 3 *
                Math.PI / 2;
            return (180 * c / Math.PI).toFixed(1)
        },
        unique: function (a) {
            for (var b = [], c = {}, d = 0, e; null != (e = a[d]); d++) c[e] || (b.push(e), c[e] = !0);
            return b
        },
        containsLngLat: function (a, b) {
            for (var c = a.lng, d = a.lat, e = !1, g = 0, h = b.length, k = h - 1; g < h; k = g, g++) {
                var l = b[g].lng,
                    p = b[g].lat,
                    n = b[k].lng,
                    k = b[k].lat;
                if (l === c && p === d || n === c && k === d) return !0;
                if (p < d && k >= d || p >= d && k < d) {
                    l += (d - p) * (n - l) / (k - p);
                    if (l === c) return !0;
                    l > c && (e = !e)
                }
            }
            return e
        }
    };
    e.Function.vendorPrefix = function () {
        function a(a) {
            return a ? a.replace(/([A-Z])/g, function (a) {
                return "-" + a.toLowerCase()
            }).replace(/^ms-/, "-ms-") : null
        }
        function b(a, b) {
            if (void 0 === h[b]) {
                var c, e = 0,
                    f = d.length,
                    g = "undefined" !== typeof a.cssText;
                for (h[b] = null; e < f; e++) if ((c = d[e]) ? (g || (c = c.toLowerCase()), c = c + b.charAt(0).toUpperCase() +
                        b.slice(1)) : c = b, void 0 !== a[c]) {
                        h[b] = c;
                        break
                    }
            }
            return h[b]
        }
        function c(a) {
            return b(e, a)
        }
        var d = ["", "O", "ms", "Moz", "Webkit"],
            e = document.createElement("div").style,
            g = {}, h = {};
        return {
            css: function (b) {
                if (void 0 === g[b]) {
                    var d = b.replace(/(-[\s\S])/g, function (a) {
                        return a.charAt(1).toUpperCase()
                    }),
                        d = c(d);
                    g[b] = a(d)
                }
                return g[b]
            },
            js: b,
            style: c,
            cssCache: g,
            jsCache: h
        }
    }();
    e.Event = {
        isLeftClick: function (a) {
            return 2 != a.which && 1 == a.button || 0 == a.button
        },
        stop: function (a, b) {
            b || e.Event.preventDefault(a);
            a.stopPropagation ? (a.stopPropagation(), a.preventDefault()) : a.cancelBubble = !0
        },
        preventDefault: function (a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }
    };
    e.Events = e.Class({
        initialize: function () {
            this.K = {};
            this.da = {}
        },
        addEventListener: function (a, b, c, d) {
            if (b && "function" === typeof b) {
                var e = this.K[a];
                e || (e = []);
                b = {
                    obj: c || this,
                    func: b,
                    type: a,
                    stop: d
                };
                e.push(b);
                this.K[a] = e;
                return b
            }
        },
        removeEventListener: function (a, b) {
            if (a) {
                var c, d = this.K[a.type];
                if (null != d) for (var e = 0, g = d.length; e < g; e++) if (c = d[e], a.func == c.func || b && a.obj ==
                            c.obj) {
                            d.splice(e, 1);
                            break
                        }
            }
        },
        triggerEvent: function (a, b) {
            var c = this.K[a];
            if (c && 0 != c.length) {
                b || (b = {});
                for (var c = c.slice(), d, f = 0, g = c.length; f < g; ++f) d = c[f], b.stop = d.stop, d.func.apply(d.obj, [
                            b]);
                e.Event.stop(b, !0)
            }
        },
        clearListener: function () {
            this.K = {}
        },
        getListeners: s("K")
    });
    e.DOMEvents = e.Class({
        initialize: function () {
            this.da = {}
        },
        attachToElement: function (a) {
            for (var b, c = 0, d = a.length; c < d; ++c) b = a[c], this.hc(b.element, b.name, this.Y(b.callback, b.object,
                    b.stop))
        },
        detachToElement: function (a) {
            for (var b, c = 0, d = a.length; c < d; ++c) b = a[c], this.xb(b.element, b.name)
        },
        hc: function (a, b, c) {
            a = e.Function.getElement(a);
            "keypress" == b && (e.Browser.isSupportKeypress() || a.attachEvent) && (b = "keydown");
            a.xa || (a.xa = "eventCacheID_" + e.Function.createUniqueID());
            var d = a.xa;
            this.da[d] || (this.da[d] = []);
            this.da[d].push({
                element: a,
                type: b,
                observer: c
            });
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        xb: function (a, b) {
            var c = a.xa,
                d = this.da[c],
                e = !1;
            if (d) for (var g, h = 0, k = d.length; h < k; ++h) if (g = d[h], g.type == b) {
                        d.splice(h, 1);
                        0 == d.length && (this.da[c] = null);
                        e = !0;
                        break
                    }
            e && (a.removeEventListener ? a.removeEventListener(b, g.observer, !1) : a.detachEvent && a.detachEvent(
                "on" + b, g.observer))
        },
        Y: function (a, b, c) {
            return function (d) {
                d.stop = c || ("boolean" == typeof b.stop ? b.stop : !1);
                return a.call(b, d || window.event)
            }
        },
        yb: function (a) {
            a = e.Function.getElement(a);
            this.mc(this.da[a.xa])
        },
        mc: function (a) {
            if (a) for (var b = a.length - 1; 0 <= b; b--) {
                    var c = a[b];
                    this.xb.apply(this, [c.element, c.type])
            }
        }
    });
    e.Loader = e.Class(e.DOMEvents, e.Events, {
        initialize: function () {
            this.Bb = window;
            this._charset = "utf-8";
            this._name = "_OLR";
            this._url = null;
            e.DOMEvents.prototype.initialize.apply(this, []);
            e.Events.prototype.initialize.apply(this, [])
        },
        load: function (a) {
            var b = this;
            e.Function.applyDefaults(b, a, "_");
            var c = b.Bb;
            b._alias = a.alias || null;
            b._name = a.name ? a.name + (a.nameCode || "") : b._name;
            c[b._name] = b._name;
            var d = b.Xb();
            e.Browser.isIE() ? d.onreadystatechange = function () {
                "loaded" != this.readyState && "complete" != this.readyState || b.jb(this, b._alias)
            } : d.onload = function () {
                b.jb(this, b._alias)
            };
            d.onerror = function () {
                b.triggerEvent("error", b._alias);
                b.running = !1
            };
            c.document.body.insertBefore(d, c.document.body.firstChild);
            setTimeout(function () {
                try {
                    c[a.url + "done"] ? (c.document.body.removeChild(d), c[a.url + "done"] = null) : d = null
                } catch (b) {
                    d = null, c[a.url + "done"] = null
                }
            }, 5E3);
            b.running = !0
        },
        jb: function (a, b) {
            var c = this.Bb;
            a && (c[a.src + "done"] = !0, c[this._name] ? (b && (c[this._name].alias = b), this.triggerEvent("loaded",
                c[this._name]), c[this._name] = null) : this.triggerEvent("error", b), a && a.parentNode == c.document.body &&
                a.removeAttribute("src"));
            this.running = !1
        },
        register: function (a, b, c, d) {
            if (b && "function" === typeof b) {
                var e = this.K[a];
                e || (e = []);
                b = {
                    obj: c || this,
                    func: b,
                    type: a,
                    stop: d
                };
                e.push(b);
                this.K[a] = e;
                return b
            }
        },
        triggerEvent: function (a, b) {
            var c = this.K[a];
            if (c && 0 != c.length) {
                b || (b = {});
                for (var c = c.slice(), d, f = 0, g = c.length; f < g; ++f) d = c[f], b.stop = d.stop, d.func.apply(d.obj, [
                            b]);
                e.Event.stop(b, !0)
            }
        },
        clearListener: function () {
            this.K = {}
        },
        Xb: function () {
            var a = document.createElement("script");
            a.setAttribute("type", "text/javascript");
            a.setAttribute("src", this._url);
            a.setAttribute("charset", this._charset);
            a.alias = this._alias;
            return a
        }
    });
    e.LoaderManager = {
        Ub: [],
        getEntity: function () {
            for (var a = this.Ub, b, c = 0, d = a.length; c < d; ++c) if (!1 == a[c].running) {
                    b = a[c];
                    b.clearListener();
                    break
                }
            b || (b = new e.Loader, a.push(b));
            return b
        }
    };
    e.LngLat = e.Class({
        lng: -1,
        lat: -1,
        initialize: function (a, b) {
            isNaN(a) || isNaN(b) || (this.lng = Number(Number(a).toFixed(8)), this.lat = Number(Number(b).toFixed(8)))
        },
        clone: function () {
            return new e.LngLat(this.lng, this.lat)
        },
        setLng: function (a) {
            isNaN(a) || (this.lng = a)
        },
        setLat: function (a) {
            isNaN(a) || (this.lat = a)
        },
        getLng: s("lng"),
        getLat: s("lat"),
        transform: function (a, b, c) {
            if (a != b) {
                a = proj4(Proj4js.defs[a], Proj4js.defs[b], [this.lng, this.lat]);
                a[0] = Number(Number(a[0]).toFixed(8));
                a[1] = Number(Number(a[1]).toFixed(8));
                if (c) return c = this.clone(), c.lng = a[0], c.lat = a[1], c;
                this.lng = a[0];
                this.lat = a[1]
            }
        },
        equals: function (a) {
            return "object" != typeof a || isNaN(a.lng) || isNaN(a.lat) ? !1 : a.lng == this.lng && a.lat == this.lat
        },
        toString: function (a) {
            return this.lng + (a || ",") + this.lat
        },
        isNull: function () {
            return !((this.lng && !isNaN(this.lng) || -1 == this.lng) && (this.lat && !isNaN(this.lat) || -1 == this.lat))
        },
        offset: function (a, b) {
            return isNaN(a) || isNaN(b) ? !1 : new e.LngLat(this.lng + 360 * Math.asin(Math.sin(Math.round(a) /
                12756274) / Math.cos(this.lat * Math.PI / 180)) / Math.PI, this.lat + 360 * Math.asin(Math.round(b) /
                12756274) / Math.PI)
        }
    });
    e.Pixel = e.Class({
        x: 0,
        y: 0,
        initialize: function (a, b) {
            isNaN(a) || isNaN(b) || (this.x = Number(a), this.y = Number(b))
        },
        clone: function () {
            return new e.Pixel(this.x, this.y)
        },
        setX: function (a) {
            isNaN(a) || (this.x = a)
        },
        getX: s("x"),
        setY: function (a) {
            isNaN(a) || (this.y = a)
        },
        getY: s("y"),
        appendX: function (a) {
            this.x += a
        },
        appendY: function (a) {
            this.y += a
        },
        equals: function (a) {
            return "object" != typeof a || isNaN(a.x) || isNaN(a.y) ? !1 : a.x == this.x && a.y == this.y
        },
        isNull: function () {
            return !((this.x && !isNaN(this.x) || 0 == this.x) && (this.y && !isNaN(this.y) || 0 == this.y))
        },
        toString: function (a) {
            return this.x + (a || ",") + this.y
        }
    });
    e.LngLatBounds = e.Class({
        southwest: null,
        northeast: null,
        initialize: function (a, b) {
            if ("object" == typeof a || -1 == a.lng && -1 == a.lat && "object" == typeof b || -1 == b.lng && -1 == b.lat)
                this.southwest = a, this.northeast = b
        },
        equals: function (a) {
            return "object" != typeof a || "object" != typeof a.southwest || "object" != typeof a.northeast || isNaN(a.southwest
                .lng) || isNaN(a.southwest.lat) || isNaN(a.northeast.lng) || isNaN(a.northeast.lat) ? !1 : a.southwest.lng ==
                this.southwest.lng && a.southwest.lat == this.southwest.lat && a.northeast.lng == this.northeast.lng &&
                a.northeast.lat == this.northeast.lat
        },
        containsLngLat: function (a) {
            if ("object" != typeof a || isNaN(a.lng) || isNaN(a.lat)) return !1;
            var b = this.southwest,
                c = this.northeast;
            return a.lat >= b.lat && a.lat <= c.lat && a.lng >= b.lng && a.lng <= c.lng
        },
        containsBounds: function (a) {
            if ("object" != typeof a) return !1;
            var b = a.southwest;
            a = a.northeast;
            var c = this.southwest,
                d = this.northeast;
            return b.lat >= c.lat && a.lat <= d.lat && b.lng >= c.lng && a.lng <= d.lng
        },
        intersects: function (a) {
            var b = Math.min(a.northeast.lng, this.northeast.lng),
                c = Math.min(a.northeast.lat, this.northeast.lat),
                d = Math.max(a.southwest.lng, this.southwest.lng);
            a = Math.max(a.southwest.lat, this.southwest.lat);
            return b >= d && c >= a ? new e.LngLatBounds(new e.LngLat(d, a), new e.LngLat(b, a)) : null
        },
        getIntersection: function (a, b) {
            var c = [],
                d = this.northeast,
                f = this.southwest;
            if (a.lat == b.lat) {
                if (a.lng == b.lng) return c;
                if (a.lat >= f.lat && a.lat < d.lat) {
                    var g = a.lng <= f.lng ? -1 : a.lng >= d.lng ? 1 : 0,
                        h = b.lng <= f.lng ? -1 : b.lng >= d.lng ? 1 : 0;
                    if (g == h) return c;
                    0 >= g + h && c.push(new e.LngLat(f.lng, a.lat));
                    0 <= g + h && c.push(new e.LngLat(d.lng, a.lat))
                }
                return c
            }
            if (a.lng == b.lng) {
                if (a.lng >= f.lng && a.lng < d.lng) {
                    g = a.lat <= f.lat ? -1 : a.lat >= d.lat ? 1 : 0;
                    h = b.lat <= f.lat ? -1 : b.lat >= d.lat ? 1 : 0;
                    if (g == h) return c;
                    0 >= g + h && c.push(new e.LngLat(a.lng, f.lat));
                    0 <= g + h && c.push(new e.LngLat(a.lng, d.lat))
                }
                return c
            }
            g = (b.lat - a.lat) * (f.lng - a.lng) / (b.lng - a.lng) + a.lat;
            g >= f.lat && g < d.lat && 0 >= (g - a.lat) * (g - b.lat) && c.push(new e.LngLat(f.lng, g));
            g = (b.lat - a.lat) * (d.lng - a.lng) / (b.lng - a.lng) + a.lat;
            g >= f.lat && g < d.lat && 0 >= (g - a.lat) * (g - b.lat) && c.push(new e.LngLat(d.lng, g));
            g = (b.lng - a.lng) * (d.lat - a.lat) / (b.lat - a.lat) + a.lng;
            g >= f.lng && g < d.lng && 0 >= (g - a.lng) * (g - b.lng) && c.push(new e.LngLat(g, d.lat));
            g = (b.lng - a.lng) * (f.lat - a.lat) / (b.lat - a.lat) + a.lng;
            g >= f.lng && g < d.lng && 0 >= (g - a.lng) * (g - b.lng) && c.push(new e.LngLat(g, f.lat));
            2 == c.length && c[0].lng == c[1].lng && c.pop();
            return c
        },
        extend: function (a) {
            var b = this.southwest,
                c = this.northeast,
                d;
            if (a instanceof e.LngLat || a instanceof IMAP.LngLat) d = a;
            else if (a instanceof e.LngLatBounds || a instanceof IMAP.LngLatBounds) {
                if (d = a.southwest, a = a.northeast, !d || !a) return this
            } else return this;
            b || c ? (b.lat = Math.min(d.lat, b.lat), b.lng = Math.min(d.lng, b.lng), c.lat = Math.max(a.lat, c.lat), c
                .lng = Math.max(a.lng, c.lng)) : (this.southwest = new e.LngLat(d.lng, d.lat), this.northeast = new e.LngLat(
                a.lng, a.lat));
            return this
        },
        getCenter: function () {
            return new e.LngLat((this.southwest.lng + this.northeast.lng) / 2, (this.northeast.lat + this.southwest.lat) /
                2)
        },
        setSouthWest: q("southwest"),
        getSouthWest: s("southwest"),
        setNorthEast: q("northeast"),
        getNorthEast: s("northeast"),
        getWidth: function () {
            return this.northeast.lng - this.southwest.lng
        },
        getHeight: function () {
            return this.northeast.lat - this.southwest.lat
        },
        clone: function () {
            return new e.LngLatBounds(this.southwest, this.northeast)
        }
    });
    e.Size = e.Class({
        width: 0,
        height: 0,
        initialize: function (a, b) {
            isNaN(a) && (a = 0);
            isNaN(b) && (b = 0);
            this.width = Number(a);
            this.height = Number(b)
        },
        getWidth: s("width"),
        getHeight: s("height"),
        equals: function (a) {
            return "object" != typeof a || isNaN(a.width) || isNaN(a.height) ? !1 : a.width == this.width && a.height ==
                this.height
        },
        toString: function (a) {
            return this.width + (a || ",") + this.height
        }
    });
    e.Layer = e.Class({
        initialize: function (a) {
            a = a || {};
            this.sb = "";
            this.tb = 1;
            this.T = a.visible = "boolean" == typeof a.visible ? a.visible : !0;
            this.qa = "ldlayer_" + e.Function.createUniqueID();
            this._options = a
        },
        getElement: s("M"),
        getOptions: s("_options"),
        setZIndex: function (a) {
            isNaN(a) || (this.eb = a, this.M.style.zIndex = this.eb)
        },
        getZIndex: s("eb"),
        getId: s("qa"),
        setName: q("sb"),
        getName: s("sb"),
        destroy: m(),
        getMap: s("d"),
        setOpacity: function (a) {
            if (!isNaN(a)) {
                this.tb = a;
                for (var b = 0, c = this.M.childNodes.length; b < c; b++) e.Browser.isIE7() || e.Browser.isIE8() ? this
                        .M.childNodes[b].style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * a +
                        ")" : this.M.childNodes[b].style.opacity = a
            }
        },
        getOpacity: s("tb"),
        visible: function (a) {
            this.T = a;
            this.M && (this.M.style.display = a ? "block" : "none")
        },
        getVisible: s("T"),
        setType: q("bc"),
        getType: s("bc"),
        isLayerSwitcher: function () {
            return this._options.isLayerSwitcher
        },
        getTiles: function () {
            return this.p._tiles
        }
    });
    e.LayerOptions = e.Class({
        hotspotOptions: null,
        maxZoom: null,
        minZoom: null,
        baseUrl: null,
        tileSize: null
    });
    e.OverlayOptions = e.Class({
        initialize: function () {
            this.visible = this.anchor = this.position = this.title = this.offset = null
        }
    });
    e.InfoWindowOptions = e.Class(e.OverlayOptions, {
        initialize: function () {
            this.autoPan = this.type = null;
            e.OverlayOptions.prototype.initialize.apply(this)
        }
    });
    e.LabelOptions = e.Class(e.OverlayOptions, {
        initialize: function () {
            this.zIndex = this.fontBold = this.fontSize = this.fontColor = this.fontName = this.type = null;
            e.OverlayOptions.prototype.initialize.apply(this)
        }
    });
    e.MarkerOptions = e.Class(e.OverlayOptions, {
        initialize: function () {
            this.angleOffsetX = this.raiseOnDrag = this.zIndex = this.pointAlpha = this.pointLineWdith = this.pointFillColor =
                this.pointStrokeColor = this.pointType = this.icon = null;
            e.OverlayOptions.prototype.initialize.apply(this)
        }
    });
    e.IconOptions = e.Class({
        initialize: function () {
            this.backgroundSize = this.offset = this.size = null
        }
    });
    e.PointCollectionOptions = e.Class({
        initialize: function () {
            this.opacity = this.fillColor = this.strokeWeight = this.strokeColor = this.shape = this.size = null
        }
    });
    e.Overlay = e.Class({
        initialize: function () {
            this.qa = "_ld_overlay_" + e.Function.createUniqueID();
            this.h = e.Constants.GPS_GCJ02;
            this.j = !1
        },
        O: m(),
        getMap: s("d"),
        getElement: s("o"),
        getOffset: function () {
            return this.a.offset
        },
        getAnchor: function () {
            return this.a.anchor
        },
        visible: function (a) {
            if (this.d) {
                var b = this.getElement();
                b && (b.style.visibility = a ? "inherit" : "hidden")
            }
            this.a.visible = a
        },
        getId: s("qa"),
        addEventListener: function (a, b, c, d) {
            b = this.Y(b, c || this, d, this);
            this.b.on(a, b, this);
            return {
                type: a,
                obj: c || this,
                func: b,
                stop: d
            }
        },
        n: function (a) {
            this.j && (a = e.convert(this.g, this.h, a));
            return a
        },
        H: function (a) {
            this.j && (a = e.convert(this.h, this.g, a));
            return a
        },
        Y: function (a, b, c, d) {
            return function (f) {
                f.originalEvent && (f.originalEvent._stopped = c);
                var g = f.latlng ? new e.LngLat(f.latlng.lng, f.latlng.lat) : null,
                    g = d.n([g])[0];
                return a.call(b, {
                    stop: c || b.stop,
                    type: f.type,
                    target: d,
                    lnglat: g
                })
            }
        },
        removeEventListener: function (a) {
            this.b.off(a.type, a.func, a.obj)
        },
        setPosition: function (a) {
            a && (this.a.position = a, this.b && (a = this.n([a])[0], this.b.setLatLng([a.lat, a.lng])))
        },
        getPosition: function (a) {
            if (this.d) {
                var b = this.b.getLatLng();
                a || (positiont = this.H([b])[0]);
                return new e.LngLat(b.lng, b.lat)
            }
            return this.a.position
        },
        ua: function () {
            this.b && (lnglat = this.getPosition(), lnglat = this.n([lnglat])[0], this.b.setLatLng([lnglat.lat, lnglat.lng]))
        },
        v: m(),
        _draw: m(),
        $: function () {
            this.la();
            this.d = null;
            this.Ya = !1
        },
        getAttribute: s("a"),
        _reqOvarlayAsyn: m(),
        Kc: m(),
        na: function (a, b) {
            return new L.point(b.width * a[0], b.height * a[1])
        },
        L: function () {
            this.o = this.b.getElement()
        }
    });
    e.Icon = e.Class({
        initialize: function (a, b, c, d) {
            this.La = a || IMAP.Fb.Fc + IMAP.Fb.Ic;
            b = b || {};
            c || b.width ? (this.ma = b || new e.Size(32, 32), this.ra = c || {
                x: 0,
                y: 1
            }, this.va = d || null) : (this.ma = b.size || new e.Size(32, 32), this.ra = b.offset || {
                x: 0,
                y: 1
            }, this.va = b.backgroundSize || null);
            this.ia = null
        },
        getElement: function () {
            var a = e.Function.createElement({
                name: "img",
                cssText: "position:absolute;left: " + this.ra.x + "px; top: " + this.ra.y + "px;z-index:-1;cursor:pointer;"
            });
            a.src = this.La;
            return this.ia = a
        },
        getSize: s("ma"),
        getSrc: s("La"),
        setSrc: function (a) {
            this.La = a;
            this.ia && (this.ia.src = a)
        },
        setOffset: function (a) {
            this.ra = a;
            this.ia && (this.ia.style.left = a.x + "px", this.ia.style.top = a.y + "px")
        },
        getOffset: s("ra"),
        setSize: function (a) {
            this.ma = a || this.ma
        },
        setBackgroundSize: function (a) {
            this.va = a || this.va
        },
        getBackgroundSize: s("va")
    });
    e.InfoWindow = e.Class(e.Overlay, {
        initialize: function (a, b) {
            b = b || {};
            var c = {
                offset: b.offset || new e.Pixel(0, 7),
                autoPan: b.autoPan || !1,
                position: b.position || null,
                anchor: b.anchor || e.Constants.BOTTOM_CENTER,
                visible: "boolean" == typeof b.visible ? b.visible : !0,
                type: b.type || e.Constants.OVERLAY_INFOWINDOW_DEFAULT
            };
            this.g = b.gpsType;
            if (b.size && c.type == e.Constants.OVERLAY_INFOWINDOW_DEFAULT) var d = Math.min(Math.max(b.size.width, 50),
                    600),
            f = Math.min(Math.max(b.size.height, 50), 600), d = new e.Size(d, f);
            else d = c.type == e.Constants.OVERLAY_INFOWINDOW_DEFAULT ? new e.Size(300, 200) : new e.Size(0, 0);
            c.size = d;
            c.title = b.title || "";
            this.a = c;
            this.C = a || "";
            e.Overlay.prototype.initialize.apply(this, []);
            c = this.a.offset;
            b = {
                autoPan: this.a.autoPan,
                keepInView: !1,
                closeOnClick: !1,
                offset: [c.x, c.y],
                zoomAnimation: !0,
                title: this.a.title,
                width: this.a.size.width,
                height: this.a.size.height,
                type: this.a.type,
                title: this.a.title,
                anchor: this.a.anchor
            };
            this.b = L.popup(b).setContent(this.C)
        },
        clone: function () {
            return new e.InfoWindow(this.C, this.a)
        },
        setTitle: function (a) {
            this.a.title = a;
            this.b.setTitle(a)
        },
        getTitle: function () {
            return this.a.title
        },
        setContent: function (a) {
            this.C = a;
            this.b.setContent(a)
        },
        getPosition: function () {
            return this.a.position
        },
        getContent: s("C"),
        setSize: function (a) {
            if (a instanceof e.Size) {
                var b = Math.min(Math.max(a.width, 50), 600),
                    c = Math.min(Math.max(a.height, 50), 600);
                a = new e.Size(b, c);
                this.a.size = a;
                this.b.setSize(b, c);
                this.b.setContent(this.C)
            }
        },
        setAnchor: function (a) {
            a && (this.a.anchor = a, this.b.options.anchor = a, this.ua())
        },
        setOffset: function (a) {
            a instanceof e.Pixel && (this.a.offset = a, this.b.options.offset = [a.x, a.y], this.ua())
        },
        autoPan: function (a, b) {
            a = a || !1;
            this.a.autoPan = a;
            this.b.options.autoPan = a;
            this.b.update(b)
        },
        setType: function (a) {
            a && (this.a.type = a, this.b.options.type = a)
        },
        O: function (a) {
            a instanceof e.Map ? (this.d = a, a.getOverlayLayer(), this.b._source = this.d.mapObj, this.g = this.g || a
                .gpsType(), this.j = this.g != this.h, a = this.a.position, a = this.n([a])[0], this.d.mapObj.openPopup(
                this.b, a), this.L(), this.setAnchor(this.a.anchor), this.visible(this.a.visible)) : (this.$(), this.d =
                null)
        },
        la: function () {
            this.b && this.d && this.d.mapObj.removeLayer(this.b, !1, !0)
        }
    });
    e.Marker = e.Class(e.Overlay, {
        initialize: function (a, b) {
            b = b || {};
            var c = {
                editabled: b.editabled || !1,
                anchor: b.anchor || e.Constants.BOTTOM_CENTER,
                icon: b.icon || null,
                offset: b.offset || new e.Pixel(0, 0),
                visible: "boolean" == typeof b.visible ? b.visible : !0,
                title: b.title ? e.Function.checkFieldLength(b.title, 50) : "",
                markerColor: b.markerColor || "#ff0000",
                shadow: b.shadow || !1,
                pointType: b.pointType || 1,
                pointWidth: b.pointWidth || 0,
                pointHeight: b.pointHeight || 0,
                pointStrokeColor: b.pointStrokeColor || "#4169D3",
                pointFillColor: b.pointFillColor || "#4169D3",
                pointLineWidth: b.pointLineWidth || 1,
                pointAlpha: b.pointAlpha || 1,
                raiseOnDrag: b.raiseOnDrag || !1,
                angleOffsetX: "number" == typeof b.angleOffsetX ? b.angleOffsetX : null,
                flagText: b.flagText || "",
                pulse: "boolean" == typeof b.pulse ? b.pulse : !1,
                pulseColor: b.pulseColor || "red"
            };
            c.position = a;
            this.g = b.gpsType;
            this.F = null;
            this.G = {};
            this.t = this.sa = this.ka = 0;
            this.cc = {};
            this.ac = !0;
            this.Wa = 1.5;
            this.U = this.ib = 3796.875;
            this.Ea = 1.72;
            this.Oa = !1;
            this.Xa = this.Za = -1;
            this.Hb = 100;
            this.Ib = 0;
            this.zIndex = isNaN(b.zIndex) || null == b.zIndex ? 2 : b.zIndex;
            this.a = c;
            this.ma = c.icon ? c.icon.getSize() : new e.Size(21, 34);
            e.Overlay.prototype.initialize.apply(this, []);
            this.ba = null;
            this.sizingMethod = 'SizingMethod="auto expand"';
            var d = c.icon;
            1 == c.pointType ? (c.pointWidth = c.pointWidth ? Number(c.pointWidth) : 23, c.pointHeight = c.pointHeight ?
                Number(c.pointHeight) : 36) : (c.pointWidth = c.pointWidth ? Number(c.pointWidth) : 16, c.pointHeight =
                c.pointHeight ? Number(c.pointHeight) : 16);
            var f = this.na(c.anchor, d ? d.getSize() : {
                width: c.pointWidth,
                height: c.pointHeight
            });
            if (d) {
                var g = d.getOffset(),
                    h = d.getSize(),
                    d = {
                        iconUrl: d.getSrc(),
                        iconSize: [h.width, h.height],
                        iconPosition: [g.x, g.y],
                        anchor: f,
                        iconVisibility: c.visible,
                        offset: [c.offset.x, c.offset.y],
                        popupAnchor: [0, -h.height]
                    };
                c.flagText ? (d.text = c.flagText.text, d.style = c.flagText.style, d = new L.TextDivIcon(d)) : d = new L
                    .ImagDivIcon(d)
            } else d = L.VectorIcon.icon({
                    icon: "",
                    iconSize: [c.pointWidth, c.pointHeight],
                    prefix: "fa",
                    markerColor: c.pointFillColor,
                    strokewidth: c.pointLineWidth,
                    strokecolor: c.pointStrokeColor,
                    alpha: c.pointAlpha,
                    iconVisibility: c.visible,
                    offset: [c.offset.x, c.offset.y],
                    anchor: f,
                    spin: !0,
                    type: c.pointType
                });
            c = {
                icon: d,
                draggable: c.editabled,
                title: this.getTitle(),
                riseOffset: 222,
                raiseOnDrag: c.raiseOnDrag,
                angleOffsetX: c.angleOffsetX,
                raiseUrl: e.MapConfig.API_REALM_NAME + e.MapConfig._MAP_CLOSE1_URL,
                zIndexOffset: this.zIndex
            };
            this.b = new L.Marker(null, c);
            this.q = null;
            this.nb()
        },
        setPulse: function (a, b) {
            this.a.pulse = a;
            this.a.pulseColor = b || "red";
            var c = this.b.getLatLng();
            this.q ? (map.mapObj.removeLayer(this.q), this.a.pulse && (this.q.options.icon.options.color = this.a.pulseColor,
                this.q.setLatLng(c), map.mapObj.addLayer(this.q))) : this.a.pulse && (this.nb(), this.q.setLatLng(c),
                map.mapObj.addLayer(this.q, !0))
        },
        getPulse: function () {
            return this.a.pulse ? !0 : !1
        },
        setPosition: function (a) {
            a && (this.a.position = a, a = this.n([a])[0], this.b && this.b.setLatLng([a.lat, a.lng]), this.q && this.q
                .setLatLng([a.lat, a.lng]))
        },
        clone: function () {
            return new e.Marker(this.a.position, this.a)
        },
        editable: function (a) {
            this.a.editabled = a;
            this.b.options.draggable = a;
            this.b.dragging && (a ? this.b.dragging.enable() : this.b.dragging.disable())
        },
        P: function (a) {
            this.b.setLatLng([a.lat, a.lng])
        },
        moveTo: function (a, b, c, d) {
            var f = this,
                g = f.d;
            b = b || 200;
            f.F && (e.Function.clearInterval(f.F), f.F = null);
            if (g) {
                f.cc = a;
                f.ac = c;
                var h = 0,
                    k = f.getPosition(!0);
                d || (a = f.n([a])[0]);
                var l = a.lng - k.lng,
                    p = a.lat - k.lat;
                d = 3.6 * e.Function.distanceByLngLat(a, k);
                f.U == f.ib ? f.U = 2 * d : f.U < 2 * d && (f.U = 2 * d);
                var n = Math.round(d / b);
                b = new L.LatLng(a.lat, a.lng);
                var r = f.H([b])[0];
                if (f.b._map) {
                    var t = f.b._map.latLngToContainerPoint(r),
                        u = f.b._map.latLngToLayerPoint(r);
                    if (0 == n) f.P(b), f.b.fire("moveend", {
                            latlng: r,
                            containerPoint: t,
                            layerPoint: u
                        });
                    else {
                        var v = (new e.Tween).Linear;
                        f.F || (f.F = e.Function.createInterval(function () {
                            h++;
                            f.P({
                                lng: v(h, k.lng, l, n),
                                lat: v(h, k.lat, p, n)
                            });
                            h >= n && (f.P(a), e.Function.clearInterval(f.F), f.F = null, f.b.fire("moveend", {
                                latlng: r,
                                containerPoint: t,
                                layerPoint: u
                            }))
                        }, 40))
                    }
                    c && f.rotate(e.Function.getRotation(g.lnglatToPixel(k), g.lnglatToPixel(a)));
                    return n
                }
            }
        },
        changeSpeed: function (a) {
            a ? (this.t < this.U && (this.t *= this.Wa), this.t > this.U && (this.t /= this.Wa)) : this.t > this.Ea &&
                (this.t /= this.Wa);
            return 0 == this.sa ? 1 : this.t / this.sa
        },
        recovery: function () {
            this.t = this.sa;
            return !0
        },
        setRate: function (a) {
            a *= this.sa;
            a >= this.Ea && a <= this.U && (this.t = a);
            return this.t
        },
        setSpeed: function (a) {
            var b = a >= this.Ea && a <= this.U;
            b && (this.t = a);
            return b
        },
        setPercent: function (a) {
            this.Oa = !0;
            var b = a <= this.Hb && a >= this.Ib;
            b && (this.Xa = this.Za = a);
            return b
        },
        getPercent: s("Xa"),
        moveAlong: function (a, b, c, d) {
            var f = this,
                g = f.d;
            if (g) {
                f.R && (f.removeEventListener(f.R), f.R = null);
                f.fa && (f.removeEventListener(f.fa), f.fa = null);
                f.ka = b;
                f.t = b;
                f.sa = b;
                a = f.n(a);
                var h = 1;
                f.G[0] ? f.G[1] ? (h = f.G[0], f.P(f.G[1])) : (f.P(a[0]), f.G[0] = h) : (f.P(a[0]), f.G[0] = h);
                f.R = f.addEventListener(e.Constants.MOVE_END, function () {
                    h++;
                    f.Oa && (f.Oa = !1, h = Math.floor(a.length * f.Za / 100), f.G[0] = h, f.P(a[h]));
                    f.Xa = 100 * h / a.length;
                    f.t != f.ka && (f.ka = f.t);
                    if (h < a.length) f.moveTo(a[h], f.ka, d, !0), f.G[0] = h;
                    else if (c) h = 1, f.G[0] = h, f.P(a[0]), f.moveTo(a[h], f.ka, d, !0);
                    else {
                        f.G[0] = 0;
                        f.R && (f.removeEventListener(f.R), f.R = null);
                        f.fa && (f.removeEventListener(f.fa), f.fa = null);
                        var b = new L.LatLng(a[a.length - 1].lat, a[[a.length - 1]].lng),
                            e = f.H([b])[0],
                            g = this.b._map.latLngToContainerPoint(e),
                            e = this.b._map.latLngToLayerPoint(e);
                        f.b.fire("moveAlongend", {
                            latlng: b,
                            containerPoint: g,
                            layerPoint: e
                        })
                    }
                }, f);
                f.fa || (f.fa = g.addEventListener(e.Constants.ZOOM_END, function () {
                    1 < h ? f.P(a[h - 1]) : f.P(a[0])
                }));
                a[h] && f.moveTo(a[h], f.ka, d, !0)
            }
        },
        pauseMove: function () {
            this.F && (e.Function.clearInterval(this.F), this.F = null);
            this.G[1] = this.getPosition()
        },
        stopMove: function () {
            this.F && (e.Function.clearInterval(this.F), this.F = null);
            this.G[0] = 0
        },
        setAngleOffsetX: function (a) {
            a && (this.a.angleOffsetX = a)
        },
        getAngleOffsetX: function () {
            return this.a.angleOffsetX
        },
        setRaiseOnDrag: function (a) {
            this.a.raiseOnDrag = a
        },
        setAnchor: function (a) {
            a && (this.a.anchor = a, this.v())
        },
        setOffset: function (a) {
            a && (this.a.offset = a, this.v())
        },
        setTitle: function (a) {
            a = a ? e.Function.checkFieldLength(a, 50) : "";
            this.o.title = a;
            this.a.title = a;
            this.b.options.title = a;
            this.b.setIcon(this.b.getIcon())
        },
        getTitle: function () {
            return this.a.title
        },
        setZIndex: function (a) {
            this.zIndex = a || 2;
            this.b.setZIndexOffset(this.zIndex)
        },
        getZIndex: s("zIndex"),
        setIcon: function (a) {
            if (a) {
                this.a.icon = a;
                this._size = a.getSize();
                var b = a.getSize(),
                    c = a.getOffset(),
                    d = a.getSrc(),
                    e = this.getAnchor();
                a = this.na(e, a ? b : {
                    width: 35,
                    height: 30
                });
                e = this.b.options.icon;
                b = new L.ImagDivIcon({
                    iconUrl: d,
                    iconSize: [b.width, b.height],
                    iconPosition: [c.x, c.y],
                    anchor: a,
                    iconVisibility: e.options.iconVisibility,
                    offset: e.options.offset
                });
                this.b = this.b.setIcon(b);
                this.L()
            }
        },
        getIcon: function () {
            return this.a.icon
        },
        setLabel: function (a, b) {
            var c = b || {}, d = c.offset || {
                    x: 0,
                    y: 0
                }, f = c.fontColor || "#000000",
                g = c.fontSize || 12,
                h = c.fontBold || !1,
                k = "boolean" == typeof c.visible ? c.visible : !0,
                l = this.getPosition(),
                c = {
                    noHide: k,
                    fontName: "瀹嬩綋",
                    fontColor: f,
                    fontSize: g,
                    fontBold: h,
                    offset: d,
                    position: l,
                    type: c.type
                };
            this.removeLabel();
            this.ja = new e.Label(a, c);
            this.ja.d = this.d;
            c = this.b.bindLabel(this.ja.b, c).label;
            c.options.direction = "auto";
            c.options.offset = [d.x, d.y];
            this.d && (this.d.mapObj.addLayer(c), this.ja.d = this.d)
        },
        getInfoWindow: s("ba"),
        getLabel: s("ja"),
        removeLabel: function () {
            this.ja && (this.b.unbindLabel(), delete this.ja)
        },
        openInfoWindow: function (a, b) {
            b = b || {};
            this.closeInfoWindow();
            b.position = this.getPosition();
            b.anchor = e.Constants.BOTTOM_CENTER;
            this.ba = new e.InfoWindow(a, b);
            this.ba.d = this.d;
            this.b.bindPopup(this.ba.b).getPopup();
            var c = this.b.getLatLng();
            this.b.openPopup(this.ba.b, c)
        },
        closeInfoWindow: function () {
            this.ba && (this.b.closePopup(), this.b.unbindPopup(), delete this.ba)
        },
        rotate: function (a) {
            isNaN(a) || (this.angle = a, this.b.rotate(a))
        },
        O: function (a) {
            if (a) {
                this.d = a;
                a.getOverlayLayer();
                this.g = this.g || a.gpsType();
                this.j = this.g != this.h;
                var b = this.a.position,
                    b = this.n([b])[0];
                this.b._latlng = L.latLng([b.lat, b.lng]);
                this.q && (this.q._latlng = L.latLng([b.lat, b.lng]), a.mapObj.addLayer(this.q));
                a.mapObj.addLayer(this.b);
                this.L();
                this.visible(this.a.visible)
            } else this.$(), this.d = null
        },
        la: function () {
            this.removeLabel();
            this.closeInfoWindow();
            this.b && this.d && (this.d.mapObj.removeLayer(this.b), this.q && this.d.mapObj.removeLayer(this.q));
            this.R && (this.removeEventListener(this.R), this.R = null)
        },
        v: function () {
            var a = this.b.getIcon(),
                b = this.a.icon ? this.a.icon.getSize() : {
                    width: this.a.pointWidth,
                    height: this.a.pointHeight
                }, c = this.na(this.a.anchor, b);
            a.options.anchor = c;
            a.options.offset = [this.a.offset.x, this.a.offset.y];
            a.updateIcon(this.o, "icon");
            this.rotate(self.angle);
            this.q && (a = this.Fa(this.a.anchor, b), b = this.q.getIcon(), b.options.anchor = a, b.options.offset = [
                    this.a.offset.x, this.a.offset.y], b.updateIcon(this.q.getElement(), "icon"))
        },
        nb: function () {
            var a = this;
            if (a.a.pulse) {
                var b = 1 == a.a.pointType ? a.Fa(a.a.anchor, new e.Size(a.a.pointWidth, a.a.pointHeight)) : a.Fa(a.a.anchor,
                    a.ma),
                    b = L.icon.pulse({
                        iconSize: [0.4, 0.4],
                        color: a.a.pulseColor,
                        offset: [a.a.offset.x, a.a.offset.y],
                        anchor: b,
                        isBefore: !0
                    });
                a.q = new L.Marker(null, {
                    icon: b,
                    zIndexOffset: -1
                });
                a.b.on("move", function (b) {
                    b = b.latlng;
                    a.q.setLatLng([b.lat, b.lng])
                }, this)
            }
        },
        Fa: function (a, b) {
            var c = new L.Point(0, 0);
            switch (a) {
            case IMAP.Constants.LEFT_TOP:
                c = new L.Point(-b.width / 2, -b.height / 2);
                break;
            case IMAP.Constants.TOP_CENTER:
                c = new L.Point(0, -b.height / 2);
                break;
            case IMAP.Constants.RIGHT_TOP:
                c = new L.Point(b.width / 2, -b.height / 2);
                break;
            case IMAP.Constants.RIGHT_CENTER:
                c = new L.Point(b.width / 2, 0);
                break;
            case IMAP.Constants.RIGHT_BOTTOM:
                c = new L.Point(b.width / 2, b.height / 2);
                break;
            case IMAP.Constants.BOTTOM_CENTER:
                c = new L.Point(0, b.height / 2);
                break;
            case IMAP.Constants.LEFT_BOTTOM:
                c = new L.Point(-b.width / 2, b.height / 2);
                break;
            case IMAP.Constants.LEFT_CENTER:
                c = new L.Point(-b.width / 2, 0);
                break;
            case IMAP.Constants.CENTER:
                c = new L.Point(0, 0)
            }
            return c
        }
    });
    e.Label = e.Class(e.Overlay, {
        initialize: function (a, b) {
            b = b || {};
            this.a = {
                type: b.type || e.Constants.OVERLAY_LABEL_DEFAULT,
                anchor: b.anchor || e.Constants.BOTTOM_CENTER,
                offset: b.offset || new e.Pixel(0, 0),
                visible: "boolean" == typeof b.visible ? b.visible : !0,
                position: b.position || null,
                fontName: b.fontName || "瀹嬩綋",
                fontColor: b.fontColor || "#000000",
                fontSize: b.fontSize || 12,
                fontBold: b.fontBold || !1
            };
            this.g = b.gpsType;
            this.Na = new e.Size(0, 0);
            this.zIndex = b.zIndex || 2;
            this.C = a || "";
            e.Overlay.prototype.initialize.apply(this);
            var c = this.a.position,
                d = this.a.offset;
            this.b = (new L.Label({
                noHide: !1,
                offset: [d.x, d.y],
                title: this.a.title,
                fontColor: this.a.fontColor,
                fontName: this.a.fontName,
                fontSize: this.a.fontSize,
                fontBold: this.a.fontBold,
                type: this.a.type,
                pane: "markerPane"
            }, this)).setContent(this.C).setLatLng([c.lat, c.lng])
        },
        clone: function () {
            return new e.Label(this.C, this.a)
        },
        setContent: function (a) {
            this.C = a || this.C;
            this.v()
        },
        getContent: s("C"),
        setFontColor: function (a) {
            this.a.fontColor = a;
            this.v()
        },
        getFontColor: function () {
            return this.a.fontColor
        },
        setFontName: function (a) {
            this.a.fontName = a;
            this.v()
        },
        getFontName: function () {
            return this.a.fontName
        },
        setFontSize: function (a) {
            isNaN(a) || (this.a.fontSize = a, this.v())
        },
        getFontSize: function () {
            return this.a.fontSize
        },
        setFontBold: function (a) {
            this.a.fontBold = a;
            this.v()
        },
        getFontBold: function () {
            return this.a.fontBold
        },
        setAnchor: function (a) {
            if (a) {
                this.a.anchor = a;
                var b = this.b;
                a = this.na(a, this.Na);
                b.options.anchor = a;
                this.ua()
            }
        },
        setOffset: function (a) {
            a && (this.a.offset = a, this.b.options.offset = [a.x, a.y], this.ua())
        },
        setZIndex: function (a) {
            this.zIndex = a;
            this.o.style.zIndex = a
        },
        getZIndex: s("zIndex"),
        setType: function (a) {
            this.a.type = this.b.options.type = a;
            this.setContent()
        },
        getType: function () {
            return this.a.type
        },
        O: function (a) {
            a ? (this.d = a, this.g = this.g || a.gpsType(), this.j = this.g != this.h, a.getOverlayLayer(), a.mapObj.addLayer(
                this.b), this.L(), this.visible(this.a.visible), a = this.b.getLabelSize(), this.Na = new e.Size(a[0],
                a[1]), a = this.na(this.a.anchor, this.Na), this.b.options.anchor = a, this.ua()) : (this.$(), this.d =
                null)
        },
        la: function () {
            this.b && this.d && this.d.mapObj.removeLayer(this.b)
        },
        v: function () {
            var a = this.a,
                b = this.b.getOptions();
            b.fontColor = a.fontColor;
            b.fontSize = a.fontSize;
            b.fontBold = a.fontBold;
            b.fontName = a.fontName;
            this.b && this.b.setContent(this.C)
        }
    });
    e.PointCollection = e.Class({
        Pa: !1,
        Ua: !1,
        Sa: !1,
        Ta: !1,
        Qa: !1,
        Ra: !1,
        initialize: function (a, b) {
            var c = b || {};
            this._options = {
                size: "number" == typeof c.size ? c.size : e.Constants.POINT_SIZE_SMALL,
                shape: "number" == typeof c.shape ? c.shape : e.Constants.POINT_SHAPE_PONT,
                strokeColor: "string" == typeof c.strokeColor ? c.strokeColor : "#4169D3",
                fillColor: "string" == typeof c.fillColor ? c.fillColor : "#4169D3",
                alpha: "number" == typeof c.alpha ? c.alpha : 1,
                visible: "boolean" == typeof c.visible ? c.visible : !0,
                strokeWeight: isNaN(c.strokeWeight) ? 3 : 1 > c.strokeWeight ? 1 : 8 < c.strokeWeight ? 8 : c.strokeWeight,
                icon: c.icon || null
            };
            this.g = c.gpsType;
            this.h = e.Constants.GPS_GCJ02;
            this.id = "_ld_overlay_" + e.Function.createUniqueID();
            this.Z = a instanceof Array ? a : [];
            this.ga = null;
            this.l = [];
            this.Cb = this.Db = 0;
            this.j = !1
        },
        n: function (a) {
            if (!map) return a;
            if (this.j) {
                for (var b = [], c, d = 0, f = a.length; d < f; ++d) c = a[d], b.push({
                        lng: c.lnglat.lng,
                        lat: c.lnglat.lat
                    });
                b = e.convert(this.g, this.h, b);
                d = 0;
                for (f = a.length; d < f; ++d) c = a[d], c.lnglat = b[d]
            }
            return a
        },
        H: function (a) {
            if (a && this.j) {
                var b = {};
                e.Function.applyDefaults(b, a);
                a = {
                    lng: a.lnglat.lng,
                    lat: a.lnglat.lat
                };
                a = e.convert(this.h, this.g, [a])[0];
                b.lnglat = a;
                return b
            }
            return a
        },
        Rb: function () {
            this.Ob()
        },
        Ob: function () {
            var a = this.d;
            if (!this.o && a) {
                var b = e.Function.createElement({
                    name: "div",
                    cssText: "position:relative;left:0px;top:0px;border:0px;z-index:1000;width:0px;height:0px;"
                });
                this.o = b;
                var c = e.Function.createElement({
                    id: this.id,
                    name: "canvas",
                    cssText: "background-color:rgba(0,0,0,0.0);display: block;position: absolute;top:0;left:0;"
                });
                this.Mb = c.getContext("2d");
                this.Ha = c;
                b.appendChild(c);
                e.Function.isInDocument(b) || a.getOverlayLayer().getElement().overlayPane.appendChild(b);
                this.Lb(a);
                this.v()
            }
        },
        Lb: function (a) {
            function b() {
                c.v()
            }
            var c = this,
                d = c.Ha;
            c.Sa = a.addEventListener(e.Constants.MOVE_END, b);
            c.Pa = a.addEventListener(e.Constants.DRAG_END, b);
            c.Ua = a.addEventListener(e.Constants.ZOOM_START, function () {
                d.style.display = "none"
            });
            c.Ta = a.addEventListener(e.Constants.ZOOM_END, function () {
                b();
                d.style.display = "block"
            });
            d.addEventListener(e.Constants.MOUSE_MOVE, function (a) {
                var b = c._options;
                a = c.xc(this, a.clientX, a.clientY);
                for (var d = c.jc, b = b.size + 5, e = 0; e < d.length; e++) {
                    if (d[e].x + b > a.x && d[e].x - b < a.x && d[e].y + b > a.y && d[e].y - b < a.y) {
                        this.style.cursor = "pointer";
                        c.ga = e;
                        break
                    }
                    e + 1 == d.length && (this.style.cursor = "url(" + (IMAP.MapConfig.API_REALM_NAME + IMAP.MapConfig._MAP_HAND[
                        0]) + "), auto", c.ga = null)
                }
            });
            c.Qa = a.addEventListener(e.Constants.MOUSE_DOWN, function (a) {
                "object" !== typeof c.ga && (c.Cb = a.clientX, c.Db = a.clientY)
            });
            c.Ra = a.addEventListener(e.Constants.MOUSE_UP, function (a) {
                if (!("object" === typeof c.ga || 0 < Math.abs(a.clientX - c.Cb) || 0 < Math.abs(a.clientY - c.Db))) {
                    a = c.Z[c.ga];
                    a = c.H(a);
                    for (var b = 0; b < c.l.length; b++) c.l[b].callback(a)
                }
            })
        },
        rc: function (a) {
            switch (a) {
            case 2:
                return 13;
            case 3:
                return 16;
            default:
                return 10
            }
        },
        xc: function (a, b, c) {
            var d = a.getBoundingClientRect();
            return {
                x: (b - d.left) * (a.width / d.width),
                y: (c - d.top) * (a.height / d.height)
            }
        },
        v: function (a) {
            if (!0 !== a) {
                a = this.d;
                var b = this.Ha;
                if (a && b) {
                    var c = this.Z,
                        d = a.getSize(),
                        f = a.getBounds(),
                        g;
                    b.width = d.width;
                    b.height = d.height;
                    this.o.width = d.width;
                    this.o.height = d.height;
                    b = a.lnglatToLayerPixel(f.northeast);
                    d = a.lnglatToLayerPixel(f.southwest);
                    f = b.y;
                    b = d.x;
                    this.o.style.left = b + "px";
                    this.o.style.top = f + "px";
                    for (var d = [], h = 0, k = c.length; h < k; ++h) g = c[h], g = a.lnglatToLayerPixel(g.lnglat, !0),
                            g = new e.Pixel(g.x - b, g.y - f), d.push(g), this.Sb(g.x, g.y);
                    this.jc = d;
                    this.visible(this._options.visible)
                }
            }
        },
        update: function (a) {
            this.Z = a instanceof Array ? a : [];
            this.Z = this.n(this.Z);
            this.v()
        },
        Sb: function (a, b) {
            var c = this,
                d = c._options,
                f = c.Mb;
            if (!c.I) {
                var g = c.I = e.Function.createElement({
                    id: c.id + "_cache",
                    name: "canvas",
                    cssText: ""
                });
                c.I.fb = !0;
                var h = c.Jc = g.getContext("2d"),
                    k = c.rc(d.size);
                if (d.icon) {
                    var l = new Image,
                        p = d.icon;
                    l.src = p.getSrc();
                    l.onload = function () {
                        var a = l.height;
                        g.width = l.width;
                        g.height = a;
                        h.globalAlpha = "number" == typeof d.alpha ? d.alpha : 1;
                        var a = p.getSize(),
                            b = p.getOffset();
                        h.drawImage(this, b.x, b.y, a.width, a.height, 0, 0, a.width, a.height);
                        c.I.fb = !1
                    }
                } else switch (c.I.fb = !1, g.width = g.height = k, h.fillStyle = d.fillColor, h.globalAlpha = "number" ==
                        typeof d.alpha ? d.alpha : 1, d.shape) {
                    case 1:
                        var n = k / 2,
                            r = Math.PI / 5 / 2,
                            t = n * Math.tan(Math.PI / 5),
                            u = k * Math.sin(r),
                            k = k * Math.cos(r);
                        h.translate(n, 0);
                        h.lineTo(u, k);
                        h.lineTo(-n, t);
                        h.lineTo(n, t);
                        h.lineTo(-u, k);
                        h.lineTo(0, 0);
                        h.closePath();
                        h.fill();
                        break;
                    case 2:
                        n = k / 2;
                        h.arc(n, n, n, 0, 2 * Math.PI, !1);
                        break;
                    case 3:
                        h.fillRect(0, 0, g.width, g.height);
                        break;
                    case 4:
                        n = pointY = k / 2;
                        g.height = 1.55 * n + n;
                        h.fillStyle = d.fillColor;
                        h.globalAlpha = "number" == typeof d.alpha ? d.alpha : 1;
                        h.translate(n, pointY);
                        h.arc(0, 0, n, 60 * Math.PI / 180, 120 * Math.PI / 180, !0);
                        h.arc(-n, Math.sqrt(3) * n, n, 300 * Math.PI / 180, 360 * Math.PI / 180, !1);
                        h.arc(n, Math.sqrt(3) * n, n, Math.PI, 4 * Math.PI / 3, !1);
                        h.closePath();
                        h.fill();
                        break;
                    default:
                        h.fillRect(0, 0, g.width, g.height)
                }
                h.fill()
            }
            c.I.fb ? setTimeout(function () {
                f.drawImage(c.I, a - c.I.width / 2, b - c.I.height / 2)
            }, 200) : f.drawImage(c.I, a - c.I.width / 2, b - c.I.height / 2)
        },
        getElement: s("o"),
        visible: function (a) {
            if (this.d) {
                var b = this.getElement();
                b && (b.style.visibility = a ? "inherit" : "hidden")
            }
            this._options.visible = a
        },
        getId: s("id"),
        addEventListener: function (a, b) {
            a == e.Constants.MOUSE_UP && this.l.push({
                type: a,
                callback: b
            })
        },
        getMap: s("d"),
        destroy: function () {
            this.$()
        },
        O: function (a) {
            a ? (this.d = a, a.getOverlayLayer(), this.g = this.g || a.gpsType(), this.j = this.g != this.h, this.Z =
                this.n(this.Z), this.Rb()) : (this.$(), this.Ha = this.o = this.d = this.ga = null)
        },
        $: function () {
            var a = this.d;
            a && (a.removeEventListener(this.Pa), a.removeEventListener(this.Ua), a.removeEventListener(this.Sa), a.removeEventListener(
                this.Ta), a.removeEventListener(this.Qa), a.removeEventListener(this.Ra), this.Ra = this.Qa = this.Ta =
                this.Sa = this.Ua = this.Pa = null);
            this.la();
            this.d = null
        },
        la: function () {
            var a = this.getElement();
            a && a.parentNode && a.parentNode.removeChild(a)
        }
    });
    e.GroundImage = e.Class(e.Overlay, {
        initialize: function (a, b) {
            b = b || {};
            this.classname = "GroundImage";
            var c = {
                editabled: b.editabled || !1,
                anchor: b.anchor || e.Constants.BOTTOM_CENTER,
                icon: b.icon || null,
                offset: b.offset || new e.Pixel(0, 0),
                visible: "boolean" == typeof b.visible ? b.visible : !0,
                title: b.title ? e.Function.checkFieldLength(b.title, 50) : ""
            };
            c.bounds = a;
            c.position = a.getCenter();
            this.g = b.gpsType;
            this.zIndex = isNaN(b.zIndex) || null == b.zIndex ? 2 : b.zIndex;
            this.a = c;
            e.Overlay.prototype.initialize.apply(this, []);
            var d = c.icon,
                f = d.getOffset(),
                d = {
                    iconUrl: d.getSrc(),
                    iconPosition: [f.x, f.y],
                    iconVisibility: c.visible
                }, c = {
                    icon: new L.Icon(d),
                    draggable: c.editabled,
                    title: this.getTitle(),
                    zIndexOffset: this.zIndex,
                    anchor: c.anchor,
                    offset: [c.offset.x, c.offset.y]
                };
            this.b = new L.GroundImage(null, c)
        },
        clone: function () {
            return new e.GroundImage(this.a.position, this.a)
        },
        editable: function (a) {
            this.a.editabled = a;
            this.b.options.draggable = a;
            this.b.dragging && (a ? this.b.dragging.enable() : this.b.dragging.disable())
        },
        setBounds: function (a) {
            a && (this.a.bounds = a, a = this.n([a.getSouthWest(), a.getNorthEast()]), a = new e.LngLatBounds(a[0], a[1]),
                this.b && this.b.setBounds(L.latLngBounds([a.southwest, a.northeast])))
        },
        getBounds: function () {
            if (!this.d) return this.a.bounds;
            if (this.b) var a = this.b.getBounds();
            var b = a._southWest,
                a = a._northEast,
                c = this.d.gpsType();
            return c != this.h ? (b = e.convert(this.h, c, [b, a]), new e.LngLatBounds(new e.LngLat(b[0].lng, b[0].lat),
                new e.LngLat(b[1].lng, b[1].lat))) : new e.LngLatBounds(new e.LngLat(b.lng, b.lat), new e.LngLat(a.lng,
                a.lat))
        },
        setAnchor: function (a) {
            a && (this.a.anchor = a, this.v())
        },
        setOffset: function (a) {
            a && (this.a.offset = a, this.v())
        },
        setTitle: function (a) {
            a = a ? e.Function.checkFieldLength(a, 50) : "";
            this.o.title = a;
            this.a.title = a;
            this.b.options.title = a
        },
        getTitle: function () {
            return this.a.title
        },
        setZIndex: function (a) {
            this.zIndex = a || 2;
            this.b.setZIndexOffset(this.zIndex)
        },
        getZIndex: s("zIndex"),
        setIcon: function (a) {
            if (a) {
                this.a.icon = a;
                var b = a.getOffset();
                a = a.getSrc();
                b = new L.Icon({
                    iconUrl: a,
                    iconPosition: [b.x, b.y],
                    iconVisibility: this.b.options.icon.options.iconVisibility
                });
                this.b.setIcon(b);
                this.L();
                this.setTitle(this.a.title)
            }
        },
        getIcon: function () {
            return this.a.icon
        },
        O: function (a) {
            if (a) {
                this.d = a;
                a.getOverlayLayer();
                this.g = this.g || a.gpsType();
                this.j = this.g != this.h;
                var b = this.a.bounds,
                    b = this.n([b.getSouthWest(), b.getNorthEast()]),
                    b = new e.LngLatBounds(b[0], b[1]);
                this.b.setBounds(L.latLngBounds([b.southwest, b.northeast]), !0);
                a.mapObj.addLayer(this.b);
                this.L();
                this.visible(this.a.visible)
            } else this.$(), this.d = null
        },
        la: function () {
            this.b && this.d && this.d.mapObj.removeLayer(this.b)
        },
        v: function () {
            this.b.options.anchor = this.a.anchor;
            this.b.options.offset = this.a.offset;
            this.b.update()
        }
    });
    e.PolylineOptions = e.Class({
        editabled: null,
        strokeColor: null,
        strokeOpacity: null,
        strokeWeight: null,
        strokeStyle: null,
        arrow: null
    });
    e.PolygonOptions = e.Class({
        editabled: null,
        fillColor: null,
        fillOpacity: null,
        strokeColor: null,
        strokeOpacity: null,
        strokeWeight: null,
        strokeStyle: null
    });
    e.RectangleOptions = e.PolygonOptions;
    e.CircleOptions = e.PolygonOptions;
    e.EllipseOptions = e.PolygonOptions;
    LDVector = e.Class({
        initialize: function () {
            this._id = "_ld_overlay_" + e.Function.createUniqueID();
            this._bounds = null;
            this._visibleEditNode = this._visible = !0;
            this.zIndex = 2;
            this.Va = null;
            this.h = e.Constants.GPS_GCJ02;
            this.j = !1
        },
        getMap: s("d"),
        getElement: s("o"),
        editable: function (a) {
            (this._options.editabled = a) ? this.Tb() : this.aa();
            this.f.drag(a)
        },
        removeEditNodes: m(),
        getId: s("_id"),
        setTitle: function (a) {
            var b = this.getElement();
            b && (a ? b.setAttribute("title", a) : this._title && b.removeAttribute("title"));
            this._title = a
        },
        visible: function (a) {
            var b = this.getElement();
            this._visible = a;
            if (b) {
                var c = "inherit";
                a || (c = "hidden", this.f.editing && this.f.editing.disable());
                b.style.visibility = c
            }
        },
        addEventListener: function (a, b, c, d) {
            var e = this.f;
            b = this.Y(b, c || this, d, this);
            c = {
                type: a,
                obj: c || this,
                func: b,
                stop: d
            };
            if (e) e.on(a, b, this);
            else this.l || (this.l = []), this.l.push(c);
            return c
        },
        Y: function (a, b, c, d) {
            return function (f) {
                f.originalEvent && (f.originalEvent._stopped = c);
                var g = f.latlng ? new e.LngLat(f.latlng.lng, f.latlng.lat) : null;
                g && (g = d.H([g])[0]);
                return a.call(b, {
                    stop: c || b.stop,
                    type: f.type,
                    target: d,
                    lnglat: g
                })
            }
        },
        removeEventListener: function (a) {
            var b = this.f;
            if (b) b.off(a.type, a.func, a.obj);
            else if (b = this.l) for (var c = 0, d = b.length; c < d; ++c) if (a.type == b[c].type && a.obj == b[c].obj) {
                        b.splice(c, 1);
                        break
                    }
        },
        setAttribute: function (a) {
            if (a) {
                var b = this._options;
                b.strokeColor = a.strokeColor || b.strokeColor;
                b.strokeOpacity = Math.min(Math.max(isNaN(a.strokeOpacity) ? b.strokeOpacity : a.strokeOpacity, 0), 1);
                b.strokeStyle = a.strokeStyle || b.strokeStyle;
                "undefined" != b.fillOpacity && (b.fillColor = a.fillColor || b.fillColor, b.fillOpacity = Math.min(
                    Math.max(isNaN(a.fillOpacity) ? b.fillOpacity : a.fillOpacity, 0), 1));
                "undefined" != b.linearGradient && (b.linearGradient = a.linearGradient || b.linearGradient);
                b.strokeWeight = isNaN(a.strokeWeight) ? b.strokeWeight : 1 > b.strokeWeight ? 1 : 8 < b.strokeWeight ?
                    8 : a.strokeWeight;
                this._options = b;
                this.ta()
            }
        },
        W: function (a) {
            var b = {
                color: a.strokeColor,
                weight: a.strokeWeight,
                opacity: a.strokeOpacity,
                dashArray: a.strokeStyle,
                smoothFactor: a.smoothFactor
            };
            a.fillColor && (b.fillColor = a.fillColor);
            a.fillOpacity && (b.fillOpacity = a.fillOpacity);
            return b
        },
        getAttribute: s("_options"),
        O: function (a) {
            a ? (this.d = a, this.g = this.g || a.gpsType(), this.j = this.g != this.h, this._overlayLayer = a.getOverlayLayer(),
                this._draw()) : (this._destroy(), delete this._render, delete this._renderRoot, delete this._overlayLayer,
                delete this.d)
        },
        ta: m(),
        _draw: m(),
        _destroy: function () {
            this._remove();
            delete this.d;
            this.Ya = !1
        },
        _remove: function () {
            var a = this.getElement();
            a && a.parentNode && (a.parentNode.removeChild(a), this.aa())
        },
        ea: function (a) {
            if (a && 0 != a.length) {
                for (var b = 0, c = [], d = a.length; b < d; b++) c.push(new L.LatLng(a[b].lat, a[b].lng));
                return c
            }
            return null
        },
        zb: function (a) {
            if (a && 0 != a.length) {
                for (var b = 0, c = [], d = a.length; b < d; b++) c.push(new e.LngLat(a[b].lng, a[b].lat));
                return c
            }
            return null
        },
        n: function (a) {
            this.j && (a = e.convert(this.g, this.h, a));
            return a
        },
        H: function (a) {
            this.j && (a = e.convert(this.h, this.g, a));
            return a
        },
        L: function (a) {
            var b = this.l;
            this.o = a.getElement();
            if (b) {
                for (var c = 0, d = b.length; c < d; ++c) {
                    var e = b[c];
                    a.on(e.type, e.func, e.obj, e.stop)
                }
                this.l = null
            }
        },
        Tb: function () {
            this.f.on("click", this.kb, this.f);
            this.f.on("dragstart", this.rb, this.f);
            this.Va = this.d.addEventListener("click", this.ec, this.d)
        },
        aa: function () {
            this.f.editing && (this.f.editing.disable(), this.f.off("click", this.kb, this.f), this.f.off("dragstart",
                this.rb, this.f), this.d.removeEventListener(this.Va), this.Va = null)
        },
        kb: function (a) {
            this.editing && this.editing.enable();
            a.originalEvent._stopped = !0
        },
        rb: function () {
            this.editing && this.editing.disable()
        },
        ec: function () {
            var a = this.getOverlayLayer().getOverlays(),
                b;
            for (b in a) a[b] instanceof LDVector && a[b].f.editing.disable()
        }
    });
    e.Polyline = e.Class(LDVector, {
        initialize: function (a, b) {
            if (a instanceof Array) {
                b = b || {};
                var c = {
                    editabled: b.editabled || !1,
                    arrow: b.arrow || !1,
                    strokeColor: b.strokeColor || "#4169D3",
                    strokeStyle: b.strokeStyle || "solid",
                    linearGradient: b.linearGradient || !1,
                    smoothFactor: "number" == typeof b.smoothFactor ? b.smoothFactor : "boolean" == typeof b.smoothFactor ? !0 == b
                        .smoothFactor ? 1 : 0 : 1
                };
                this.g = b.gpsType;
                c.strokeOpacity = Math.min(Math.max(b.strokeOpacity && !isNaN(b.strokeOpacity) ? b.strokeOpacity : 1, 0),
                    1);
                c.strokeWeight = isNaN(b.strokeWeight) ? 3 : 1 > b.strokeWeight ? 1 : 8 < b.strokeWeight ? 8 : b.strokeWeight;
                this._options = c;
                this._path = a;
                LDVector.prototype.initialize.apply(this);
                this._calculateBounds(a);
                this._visible = "boolean" == typeof b.visible ? b.visible : !0
            }
        },
        clone: function () {
            return new e.Polyline(this._path, this._options)
        },
        arrow: function (a) {
            this._options.arrow = a;
            this.f && (this.f.options.arrow = a);
            this.setPath(this.getPath())
        },
        _calculateBounds: function (a) {
            var b = new e.LngLatBounds(1, 1);
            b.southwest = new e.LngLat(a[0].lng, a[0].lat);
            b.northeast = new e.LngLat(a[0].lng, a[0].lat);
            for (var c = b.southwest, d = b.northeast, f = 1, g = a.length; f < g; ++f) c.lng = Math.min(c.lng, a[f].lng),
                    c.lat = Math.min(c.lat, a[f].lat), d.lng = Math.max(d.lng, a[f].lng), d.lat = Math.max(d.lat, a[f].lat);
            this._bounds = b
        },
        getBounds: s("_bounds"),
        ta: function () {
            this.f && this.f.setStyle(this.W(this._options))
        },
        setPath: function (a) {
            if (a) {
                var b = e.Function.indexOf(a, -1, "lng"),
                    c = e.Function.indexOf(a, -1, "lat"); - 1 == b && -1 == c && (this._path = a, a = this.n(a), this._calculateBounds(
                    this._path), this.f && (a = this.ea(a), this.f.setLatLngs(a), this.aa(), this.editable(this._options
                    .editabled)))
            }
        },
        getPath: function () {
            var a = this._path;
            this.f && (a = this.zb(this.f.getLatLngs()));
            return this._path = this.H(a)
        },
        setPostionAt: function (a, b) {
            var c = this._path;
            c && a && (isNaN(b) ? c.push(a) : c.splice(Math.round(b), 0, a), this.setPath(c))
        },
        removeNodeAt: function (a) {
            var b = this._path;
            !isNaN(a) && b && (b.splice(Math.round(a), 1), this.setPath(b))
        },
        getPathLength: function () {
            var a = this.getPath(),
                b = 0;
            if (a && 0 < a.length) for (var c = 0, d = a.length; c < d; c++) a[c + 1] && (b += parseInt(e.Function.distanceByLngLat(
                        a[c], a[c + 1])));
            return b
        },
        _draw: function () {
            var a = this._path;
            if (a) {
                var a = this.n(a),
                    a = this.ea(a),
                    b = this.W(this._options);
                b.stroke = !0;
                b.arrow = this._options.arrow;
                this.f = new L.Polyline(a, b);
                this.d.mapObj.addLayer(this.f);
                this.L(this.f);
                this.editable(this._options.editabled);
                this.visible(this._visible)
            }
        }
    });
    e.Polygon = e.Class(LDVector, {
        initialize: function (a, b) {
            if (a instanceof Array) {
                b = b || {};
                var c = {
                    editabled: b.editabled || !1,
                    arrow: b.arrow || !1,
                    strokeColor: b.strokeColor || "#4169D3",
                    strokeStyle: b.strokeStyle || "solid",
                    fillColor: b.fillColor || "#99FFCC"
                };
                this.g = b.gpsType;
                c.strokeOpacity = Math.min(Math.max(b.strokeOpacity && !isNaN(b.strokeOpacity) ? b.strokeOpacity : 1, 0),
                    1);
                c.fillOpacity = Math.min(Math.max(isNaN(b.fillOpacity) ? 0.6 : b.fillOpacity, 0), 1);
                c.strokeWeight = isNaN(b.strokeWeight) ? 3 : 1 > b.strokeWeight ? 1 : 8 < b.strokeWeight ? 8 : b.strokeWeight;
                this._options = c;
                this._path = a;
                LDVector.prototype.initialize.apply(this);
                this._calculateBounds(a);
                this._visible = "boolean" == typeof b.visible ? b.visible : !0
            }
        },
        clone: function () {
            return new e.Polygon(this._path, this._options)
        },
        _calculateBounds: function (a) {
            var b = new e.LngLatBounds(1, 1);
            b.southwest = new e.LngLat(a[0].lng, a[0].lat);
            b.northeast = new e.LngLat(a[0].lng, a[0].lat);
            for (var c = b.southwest, d = b.northeast, f = 1, g = a.length; f < g; ++f) c.lng = Math.min(c.lng, a[f].lng),
                    c.lat = Math.min(c.lat, a[f].lat), d.lng = Math.max(d.lng, a[f].lng), d.lat = Math.max(d.lat, a[f].lat);
            this._bounds = b
        },
        ta: function () {
            this.f && this.f.setStyle(this.W(this._options))
        },
        setPath: function (a) {
            if (a) {
                var b = e.Function.indexOf(a, -1, "lng"),
                    c = e.Function.indexOf(a, -1, "lat"); - 1 == b && -1 == c && (this._path = a, a = this.n(a), this._calculateBounds(
                    this._path), this.f && (a = this.ea(a), this.f.setLatLngs(a), this.aa(), this.editable(this._options
                    .editabled)))
            }
        },
        getPath: function () {
            var a = this._path;
            this.f && (a = this.zb(this.f.getLatLngs()[0]));
            return this._path = this.H(a)
        },
        getArea: function () {
            return e.Function.calculateArea(this.getPath())
        },
        getBounds: s("_bounds"),
        _draw: function () {
            var a = this.n(this._path);
            if (a = this.ea(a)) {
                var b = this.W(this._options);
                b.stroke = !0;
                b.fill = !0;
                this.f = (new L.Polygon(a, b)).addTo(this.d.mapObj);
                this.L(this.f);
                this.visible(this._visible);
                this.editable(this._options.editabled);
                this.visible(this._visible)
            }
        }
    });
    e.Rectangle = e.Class(LDVector, {
        initialize: function (a, b) {
            if (a) {
                b = b || {};
                var c = {
                    editabled: b.editabled || !1,
                    fillColor: b.fillColor || "#99FFCC",
                    strokeColor: b.strokeColor || "#4169D3",
                    strokeStyle: b.strokeStyle || "solid"
                };
                this.g = b.gpsType;
                c.strokeOpacity = Math.min(Math.max(b.strokeOpacity && !isNaN(b.strokeOpacity) ? b.strokeOpacity : 1, 0),
                    1);
                c.fillOpacity = Math.min(Math.max(isNaN(b.fillOpacity) ? 0.6 : b.fillOpacity, 0), 1);
                c.strokeWeight = isNaN(b.strokeWeight) ? 3 : 1 > b.strokeWeight ? 1 : 8 < b.strokeWeight ? 8 : b.strokeWeight;
                this._options = c;
                LDVector.prototype.initialize.apply(this);
                this._bounds = a;
                this._visible = "boolean" == typeof b.visible ? b.visible : !0
            }
        },
        clone: function () {
            return new e.Rectangle(this._bounds, this._options)
        },
        ta: function () {
            this.f && this.f.setStyle(this.W(this._options))
        },
        setBounds: function (a) {
            a && (this._bounds = a, a = this.n([a.getSouthWest(), a.getNorthEast()]), a = new e.LngLatBounds(a[0], a[1]),
                this.f && (this.f.setBounds(this.ea(a)), this.aa(), this.editable(this._options.editabled)))
        },
        getBounds: function () {
            var a = this._bounds;
            if (!this.d) return a;
            this.f && (a = this.f.getBounds());
            var b = a._southWest,
                a = a._northEast,
                c = this.d.gpsType();
            return c != this.h ? (b = e.convert(this.h, c, [b, a]), new e.LngLatBounds(new e.LngLat(b[0].lng, b[0].lat),
                new e.LngLat(b[1].lng, b[1].lat))) : new e.LngLatBounds(new e.LngLat(b.lng, b.lat), new e.LngLat(a.lng,
                a.lat))
        },
        ea: function (a) {
            if (a) {
                var b = a.getSouthWest();
                a = a.getNorthEast();
                return new L.LatLngBounds(new L.LatLng(b.lat, b.lng), new L.LatLng(a.lat, a.lng))
            }
            return null
        },
        _draw: function () {
            var a = this.n([this._bounds.getSouthWest(), this._bounds.getNorthEast()]),
                a = new e.LngLatBounds(a[0], a[1]);
            if (a = this.ea(a)) {
                var b = this.W(this._options);
                b.stroke = !0;
                b.fill = !0;
                this.f = new L.Rectangle(a, b);
                this.d.mapObj.addLayer(this.f);
                this.L(this.f);
                this.visible(this._visible);
                this.editable(this._options.editabled)
            }
        }
    });
    e.Circle = e.Class(LDVector, {
        initialize: function (a, b, c) {
            a && !isNaN(b) && (c = c || {}, this._center = a, this._radius = b || -1, a = {
                editabled: c.editabled || !1,
                fillColor: c.fillColor || "#99FFCC",
                strokeColor: c.strokeColor || "#4169D3",
                strokeStyle: c.strokeStyle || "solid"
            }, this.g = c.gpsType, a.strokeOpacity = Math.min(Math.max(c.strokeOpacity && !isNaN(c.strokeOpacity) ? c.strokeOpacity :
                1, 0), 1), a.fillOpacity = Math.min(Math.max(isNaN(c.fillOpacity) ? 0.6 : c.fillOpacity, 0), 1), a.strokeWeight =
                isNaN(c.strokeWeight) ? 3 : 1 > c.strokeWeight ? 1 : 8 < c.strokeWeight ? 8 : c.strokeWeight, this._options =
                a, this._units = "meter", LDVector.prototype.initialize.apply(this), this._visible = "boolean" ==
                typeof c.visible ? c.visible : !0)
        },
        getBounds: function () {
            if (this.d) var a = this.f.getBounds(),
            a = this.H([a._southWest, a._northEast]);
            else var b = this.getRadius(),
            c = this.getCenter(), a = c.offset(-b, b), b = c.offset(b, -b), a = this.H([a, b]);
            return new e.LngLatBounds(a[0], a[1])
        },
        visibleEditNode: m(),
        setUnits: q("_units"),
        clone: function () {
            return new e.Circle(this._center, this._radius, this._options)
        },
        ta: function () {
            this.f && this.f.setStyle(this.W(this._options))
        },
        setCenter: function (a) {
            a && (this._center = a, a = this.n([a])[0], this.f && (this.f.setLatLng([a.lat, a.lng]), this.aa(), this.editable(
                this._options.editabled)))
        },
        getCenter: function () {
            var a = this._center;
            this.f && (a = this.f.getLatLng());
            return a = this.H([a])[0]
        },
        setRadius: function (a) {
            isNaN(a) || (this._radius = a, this.f && (this.f.setRadius(a), this.aa(), this.editable(this._options.editabled)))
        },
        getRadius: function () {
            this.f && this.f.getRadius();
            return this._radius
        },
        getVertex: function () {
            return e.Function.getLngLatByOffset(this._center, this._radius, 0)
        },
        _draw: function () {
            var a = this.W(this._options);
            a.fill = !0;
            a.radius = this._radius;
            a.stroke = !0;
            var b = this.n([this._center])[0];
            this.f = "meter" == this._units ? new L.Circle(b, a) : new L.circleMarker(b, a);
            this.d.mapObj.addLayer(this.f);
            this.L(this.f);
            this.visible(this._visible);
            this.editable(this._options.editabled)
        }
    });
    e.OverlayLayer = e.Class(e.Layer, {
        initialize: function (a) {
            e.Layer.prototype.initialize.apply(this, [a]);
            this.eb = 1;
            this.D = {};
            this.setType(2);
            this.bb = this.ab = !1
        },
        setMap: function (a) {
            if (a instanceof e.Map) {
                if (this.d = a, !this.M) {
                    a = this.d.mapObj.getPanes();
                    var b = this.T;
                    this.M = a;
                    a.shadowPane.style.display = b ? "block" : "none";
                    a.overlayPane.style.display = b ? "block" : "none";
                    a.markerPane.style.display = b ? "block" : "none";
                    a.popupPane.style.display = b ? "block" : "none"
                }
            } else this.destroy(!0), this.d = null
        },
        visible: function (a) {
            this.T = a;
            var b = this.M;
            b && (b.overlayPane.style.display = a ? "block" : "none", b.markerPane.style.display = a ? "block" : "none",
                b.popupPane.style.display = a ? "block" : "none", b.shadowPane.style.display = a ? "block" : "none")
        },
        getRenderRoot: s("bb"),
        getRender: s("ab"),
        injectRender: function (a) {
            this.ab = a;
            this.bb = a.createRoot();
            this.M.appendChild(this.bb)
        },
        destroy: function () {
            if (this.d) {
                for (var a in this.D) this.removeOverlay(this.D[a]);
                this.D = {};
                delete this.d
            }
        },
        addOverlay: function (a, b) {
            var c = this.d;
            if (c && !this.D[a.getId()] && a) {
                a.O ? a.O(c) : a.setMap(c);
                this.D[a.getId()] = a;
                if (b) if (a instanceof LDVector || "GroundImage" == a.classname) {
                        var d = a.getBounds();
                        if (d) {
                            var f = d.southwest,
                                d = d.northeast,
                                g = [];
                            g.push(f);
                            g.push(new e.LngLat(f.lng, d.lat));
                            g.push(d);
                            g.push(new e.LngLat(d.lng, f.lat));
                            c.setBestMap(g)
                        }
                    } else c.setCenter(a.getPosition());
                c.triggerEvent(e.Constants.ADD_OVERLAY, {
                    type: e.Constants.ADD_OVERLAY,
                    overlay: a,
                    target: this
                })
            }
        },
        addOverlays: function (a, b) {
            var c = this.d;
            if (c) if (a instanceof Array) {
                    for (var d = [], f, g = 0; g < a.length; g++) {
                        f = a[g];
                        if (b) if (f instanceof LDVector || "GroundImage" == f.classname) {
                                var h = f.getBounds();
                                h && (f = h.southwest, h = h.northeast, d.push(f), d.push(new e.LngLat(f.lng, h.lat)),
                                    d.push(h), d.push(new e.LngLat(h.lng, f.lat)))
                            } else d.push(f.getPosition());
                        this.addOverlay(a[g], !1)
                    }
                    b && c.setBestMap(d, !0)
                } else this.addOverlay(a, b)
        },
        reloadOverlays: function () {
            if (this.d) {
                var a = this.ab;
                a && "svg" == a.name && a.resize();
                for (var b in this.D) this.D[b]._redraw(!0)
            }
        },
        removeOverlay: function (a) {
            var b = this.d;
            if (a) {
                var c = "string" == typeof a ? a : a.getId ? a.getId() : null;
                c && (a = this.D[c]) && (a.O ? a.O(null) : a.setMap(null), delete this.D[c], b && b.triggerEvent(e.Constants
                    .REMOVE_OVERLAY, {
                    type: e.Constants.REMOVE_OVERLAY,
                    overlayId: c,
                    target: this
                }))
            }
        },
        clear: function (a) {
            if (null != a) for (var b in a) this.removeOverlay(a[b]);
            else for (var c in this.D) this.removeOverlay(this.D[c])
        },
        getOverlayById: function (a) {
            return this.D[a]
        },
        getOverlays: s("D")
    });
    e.TileLayer = e.Class(e.Layer, {
        initialize: function (a, b, c) {
            a = a || {};
            b = "number" == typeof b ? b : 1;
            a.hotspotOptions = a.hotspotOptions || null;
            a.tileSize = a.tileSize || IMAP.MapConfig._MAP_PCIMG_SIZE;
            e.Function.applyDefaults(this, this._options);
            e.Layer.prototype.initialize.apply(this, [a]);
            var d = "boolean" == typeof a.isTileLayer ? a.isTileLayer : !0;
            this.setType(b);
            !d && e.Function.isWebGL() ? (a.baseUrl = a.baseUrl || IMAP.MapConfig._MAP_VECTOR_BGIMG_URL, window.Vmapt &&
                (this.p = Vmapt.vmaptLayer({
                scene: a.baseUrl
            }))) : (a.baseUrl = a.baseUrl || IMAP.MapConfig._MAP_PCBGIMG_URL, this.p = L.tileLayer(a.baseUrl[0], {
                tms: a.tms,
                visible: this.T,
                minZoom: a.minZoom,
                maxZoom: a.maxZoom,
                tileSize: a.tileSize,
                subdomains: a.baseUrl[1],
                zIndex: c || 2
            }));
            this.p.type = b
        },
        setOpacity: function (a) {
            this.p.setOpacity(a)
        },
        getOpacity: function () {
            return this.p.getOpacity()
        },
        setZIndex: function (a) {
            isNaN(a) || this.p.setZIndex(a)
        },
        getZIndex: function () {
            return this.p.getZIndex()
        },
        visible: function (a) {
            var b = this.d,
                c = this.p;
            this.T !== a && (this.T = a, c.visible(a), b && c.getEvents && (a ? (b.mapObj.on(c.getEvents(), c), c._resetAll()) :
                b.mapObj.off(c.getEvents(), c)))
        },
        getVisible: function () {
            return this.p.getVisible()
        },
        getId: function () {
            return L.stamp(this.p)
        },
        Qc: s("p"),
        setMap: function (a) {
            a ? (a.mapObj.addLayer(this.p), this._options.hotspotOptions && (this.B = e.HotspotManager.getEntity(a),
                this.B.injectLayer(this.getId(), this._options.hotspotOptions, this.l ? this.l.slice() : null)), this.d =
                a) : (this.d.mapObj.removeLayer(this.p), this.hotspot(!1), this.d = this.p = null)
        },
        hotspot: function (a, b) {
            a && (b || this._options.hotspotOptions) ? (b && (this._options.hotspotOptions = b), this.Ab(!0)) : !a &&
                this.B && (this.Ab(!1), delete this.B)
        },
        Ab: function (a) {
            a ? (this.B || (this.B = e.HotspotManager.getEntity(this.d)), this.l = this.l || [], this.B.injectLayer(
                this.getId(), this._options.hotspotOptions, this.l ? this.l.slice() : null)) : !a && this.B && this.B.removeTileLayer(
                this.getId())
        },
        setTileUrlFunc: function (a) {
            a && "function" == typeof a && this.p.setTileUrlFunc(a)
        },
        addHotspotEventListener: function (a, b, c) {
            a = {
                type: a,
                func: b,
                obj: c || this
            };
            this.B ? this.B.yc(this.getId(), a) : (this.l || (this.l = []), this.l.push(a));
            return a
        },
        removeHotspotEventListener: function (a) {
            if (this.B) this.B.Dc(this.getId(), a);
            else {
                var b = this.l;
                if (b) for (var c = 0, d = b.length; c < d; ++c) if (a.type == b[c].type && a.obj == b[c].obj) {
                            b.splice(c, 1);
                            break
                        }
            }
        },
        zc: function () {
            this.B && this.B.Cc(this.getId())
        }
    });
    e.TileLayer.WMS = e.Class(e.TileLayer, {
        initialize: function (a, b, c) {
            var d = a || {};
            if (!d.baseUrl) throw Error("鏈彁渚涙湇鍔″湴鍧€");
            b = "boolean" == typeof d.isBGLayer ? d.isBGLayer ? 0 : 1 : 1;
            d.isLayerSwitcher = d.isLayerSwitcher || !1;
            d.hotspotOptions = d.hotspotOptions || null;
            d.tileSize = d.tileSize || IMAP.MapConfig._MAP_PCIMG_SIZE;
            e.Function.applyDefaults(this, this._options);
            e.TileLayer.prototype.initialize.apply(this, [d]);
            this.setType(b);
            switch (a.crs) {
            case "EPSG:4326":
                d.crs = L.CRS.EPSG4326;
                break;
            case "EPSG:3857":
                d.crs = L.CRS.EPSG3857;
                break;
            default:
                d.crs = L.CRS.EPSG3857
            }
            a = {
                tms: d.tms,
                visible: this.T,
                minZoom: d.minZoom || 4,
                maxZoom: d.maxZoom || 18,
                tileSize: d.tileSize || 256,
                zIndex: c || 2
            };
            d.service && (a.service = d.service);
            d.request && (a.request = d.request);
            d.version && (a.version = d.version);
            d.format && (a.format = d.format);
            d.layers && (a.layers = d.layers);
            d.crs && (a.crs = d.crs);
            d.uppercase && (a.uppercase = d.uppercase);
            d.transparent && (a.transparent = d.transparent);
            d.styles && (a.styles = d.styles);
            this.p = L.tileLayer.wms(d.baseUrl, a);
            this.p.type = b
        }
    });
    e.TileLayer.WMTS = e.Class(e.TileLayer, {
        initialize: function (a, b, c) {
            a = a || {};
            if (!a.baseUrl) throw Error("鏈彁渚涙湇鍔″湴鍧€");
            b = "boolean" == typeof a.isBGLayer ? a.isBGLayer ? 0 : 1 : 1;
            a.isLayerSwitcher = a.isLayerSwitcher || !1;
            a.hotspotOptions = a.hotspotOptions || null;
            a.tileSize = a.tileSize || IMAP.MapConfig._MAP_PCIMG_SIZE;
            e.Function.applyDefaults(this, this._options);
            e.TileLayer.prototype.initialize.apply(this, [a]);
            this.setType(b);
            c = {
                tms: a.tms,
                visible: this.T,
                minZoom: a.minZoom || 4,
                maxZoom: a.maxZoom || 18,
                tileSize: a.tileSize,
                zIndex: c || 2
            };
            a.service && (c.service = a.service);
            a.request && (c.request = a.request);
            a.version && (c.version = a.version);
            a.format && (c.format = a.format);
            a.layer && (c.layer = a.layer);
            a.style && (c.style = a.style);
            a.uppercase && (c.uppercase = a.uppercase);
            a.tilematrixSet && (c.tilematrixSet = a.tilematrixSet);
            this.p = L.tileLayer.wmts(a.baseUrl, c);
            this.p.type = b
        }
    });
    e.BGTileLayer = e.Class(e.TileLayer, {
        initialize: function (a) {
            e.TileLayer.prototype.initialize.apply(this, [a, 0, 1])
        }
    });
    e.Template = e.Class({
        name: null,
        getDataUrl: function () {
            return null
        },
        formatDatas: function (a) {
            return a
        }
    });
    e.HotspotOptions = e.Class({
        type: null,
        labelField: null,
        iconUrl: null,
        iconSize: null,
        iconOffset: null,
        anchor: null,
        template: null
    });
    e.HotspotEntity = e.Class({
        ca: !1,
        initialize: function (a) {
            this.Aa = [];
            this.ha = {};
            this.N = {};
            this.l = {};
            this.wa = [];
            this.d = a
        },
        lc: function () {
            var a = this,
                b = a.d;
            a.ca || (a.ca = b.addEventListener(e.Constants.MOUSE_MOVE, function (c) {
                a.A && b.getOverlayLayer().removeOverlay(a.A, !0);
                a.A = null;
                var d = b.$b(c.lnglat);
                a.pc(c.pixel, d.x, d.y, d.z)
            }, a), a.Ba = b.addEventListener(e.Constants.ZOOM_START, function () {
                a.wa = [];
                a.A && b.getOverlayLayer().removeOverlay(a.A, !0);
                a.A = null
            }, a))
        },
        oc: function () {
            var a = this.d;
            this.ca && (a.removeEventListener(this.ca), a.removeEventListener(this.Ba), delete this.ca, delete this.Ba)
        },
        injectLayer: function (a, b, c) {
            this.ha[a] || (this.Aa.push(a), this.ha[a] = b, c && (this.l[a] = c), this.lc())
        },
        getTileLayerEvt: function (a) {
            return this.l[a]
        },
        removeTileLayer: function (a) {
            for (var b = this.Aa, c = 0, d = b.length; c < d; ++c) a == b[c] && (this.N[b[c]] = null, this.ha[b[c]] =
                    null, this.l[b[c]] = null, b.splice(c, 1));
            this.d && this.A && (this.d.getOverlayLayer().removeOverlay(this.A, !0), this.A = null);
            0 == b.length && this.oc()
        },
        yc: function (a, b) {
            var c = this.l[a];
            c || (c = [], this.l[a] = c);
            c.push(b)
        },
        Dc: function (a, b) {
            var c = this.l[a];
            if (c) for (var d = 0, e = c.length; d < e; ++d) if (b.type == c[d].type && b.obj == c[d].obj) {
                        c.splice(d, 1);
                        break
                    }
        },
        Cc: function (a) {
            this.N[a] && (this.N[a] = null)
        },
        clearTileDatas: function () {
            this.N = {}
        },
        destroy: function () {
            this.d.removeEventListener(this.ca);
            this.d.removeEventListener(this.Ba);
            this.Ba = this.ca = null;
            this.Aa = [];
            this.ha = {};
            this.N = {}
        },
        lb: function (a) {
            if ("string" == typeof a) for (var b = this.wa, c = b.length, d = 0; d < c; d++) if (a === b[d]) return !0;
            return !1
        },
        pc: function (a, b, c, d) {
            for (var e = this.Aa, g = this.N, h = this.ha, k = this.d.pixelToLnglat(a), l = 0, p = e.length; l < p; ++l) {
                var n = e[l];
                if (h[n]) {
                    g[n] || (g[n] = {}, this.N = g);
                    var r = n + "_" + b + "_" + c + "_" + d;
                    if (g[n][b + "_" + c + "_" + d] && !this.lb(r)) {
                        if (this.qb(a, k, n, g[n][b + "_" + c + "_" + d])) break
                    } else this.lb(r) || (this.wa.push(r), this.vc(b, c, d, h[n].template, a, k, n, r))
                }
            }
        },
        vc: function (a, b, c, d, f, g, h, k) {
            var l = this,
                p = e.LoaderManager.getEntity();
            p.register("loaded", function (n) {
                l.N[h] && (n = d.formatDatas(n), n._xy = a + "." + b, 0 < n.length ? (l.N[h][a + "_" + b + "_" + c] = n,
                    l.qb(f, g, h, n)) : l.N[h][a + "_" + b + "_" + c] = n, e.Function.deleteFromArray(l.wa, k))
            }, l);
            p.load({
                url: d.getDataUrl(a, b, c),
                name: d.name
            })
        },
        qb: function (a, b, c, d) {
            a = this.ha[c];
            var f = !1;
            if (b = this.Vb(b, d)) {
                switch (a.type) {
                case e.Constants.LAYER_HOTSPOT_ICON_TYPE:
                    d = this.pb(c, a, b, d._xy);
                    break;
                case e.Constants.LAYER_HOTSPOT_RECT_TYPE:
                    d = this.Qb(c, a, b, d._xy);
                    break;
                default:
                    d = this.pb(c, a, b, d._xy, IMAP.MapConfig.API_REALM_NAME + IMAP.MapConfig._MAP_ICON_BLAND_URL)
                }
                this.A = d;
                b = b.datas;
                if (c = this.l[c]) for (c = c.slice(), a = 0, f = c.length; a < f; ++a) this.Jb(c[a], d, b);
                f = !0
            }
            return f
        },
        Vb: function (a, b) {
            var c = null,
                d = b.length;
            if (0 < d) for (var e = 0; e < d; ++e) {
                    var g = b[e];
                    g.bounds.containsLngLat(a) && (c = g, c.datas.lnglat || (c.datas.lnglat = a))
            }
            return c
        },
        pb: function (a, b, c, d, f) {
            this.A && this.d.getOverlayLayer().removeOverlay(this.A);
            a = b.iconSize || c.iconSize;
            f = new e.Marker(c.datas.lnglat, {
                title: c.datas.title,
                offset: b.iconOffset || c.iconOffset,
                anchor: b.anchor || c.anchor,
                icon: new e.Icon(f ? f : c.iconName ? b.iconUrl + c.iconName : b.iconUrl, a)
            });
            d = {
                offset: {
                    x: 7,
                    y: 0
                },
                anchor: e.Constants.LEFT_BOTTOM,
                type: e.Constants.OVERLAY_LABEL_HTML,
                fontSize: 12,
                fontColor: "#000000",
                fontBold: !0
            };
            var g =
                '<div style="border:1px solid #000000;background-color:#ffffff;filter:alpha(opacity=80);-moz-opacity:0.8;-khtml-opacity: 0.8;opacity: 0.8;font-size: 12px;">' +
                c.datas.title + "</div>",
                h = document.createElement("div");
            h.innerHTML = g + "  ";
            f.setLabel(h, d);
            this.d.getOverlayLayer().addOverlay(f);
            b.labelField && f.setLabel(
                '<div style="font-size:12px; opacity:0.9;border: 1px solid rgb(0, 0, 0); background-color: rgb(255, 255, 255);">' +
                c[b.labelField] + "</div>", {
                offset: {
                    x: a.width / 2 + 8,
                    y: 10
                }
            });
            return this.A = f
        },
        Qb: function (a, b, c) {
            b = IMAP.MapConfig.API_REALM_NAME + IMAP.MapConfig._MAP_HOTSPOT_RECT_IMG_URL;
            this.A && this.d.getOverlayLayer().removeOverlay(this.A);
            a = c.bounds;
            var d = this.d.lnglatToLayerPixel(a.southwest),
                f = this.d.lnglatToLayerPixel(a.northeast);
            c = [Math.abs(parseInt(d.x) - parseInt(f.x)), Math.abs(parseInt(f.y) - parseInt(d.y)) + c.iconSize.height /
                    2];
            b = '<div style="height:' + c[1] + "px;width: " + c[0] + 'px;">' + ('<div style="background-image: url(' +
                b +
                ');background-position: 0 0;background-repeat: no-repeat;height: 6px;left: -3px;overflow: hidden;position: absolute;top: -4px;width: 7px; z-index: 90;"></div>' +
                ('<div style="width:' + c[0] + "px;height:7px;left:4px;top:-4px;background-image: url(" + b +
                ");background-repeat: no-repeat;background-position: -" + (208 - c[0]) +
                'px 0;position: absolute; overflow: hidden;"></div>') + ('<div style="height:' + c[1] +
                "px;width:8px;left: -3px;top:2px;background-image: url(" + b +
                ");background-repeat: no-repeat;background-position: 0px -" + (108 - c[1]) +
                'px;position: absolute; overflow: hidden;"></div>') + ('<div style="height:' + c[1] + "px;width:" + c[0] +
                "px;left:4px;right: 0;top:2px;background-image: url(" + b +
                ");background-repeat: no-repeat;background-position:-" + (208 - c[0]) + "px -" + (108 - c[1]) +
                'px;position: absolute; overflow: hidden;"></div>')) + "</div>";
            d = document.createElement("div");
            d.innerHTML = b;
            a = new e.Label(d, {
                type: e.Constants.OVERLAY_LABEL_HTML,
                anchor: e.Constants.BOTTOM_CENTER,
                position: a.getCenter(),
                offset: {
                    x: 0,
                    y: c[1] / 2
                }
            });
            this.d.getOverlayLayer().addOverlay(a);
            return a
        },
        Jb: function (a, b, c) {
            b.addEventListener(a.type, function () {
                a.func.apply(a.obj, [c, b.getPosition(), b])
            }, b)
        }
    });
    e.HotspotManager = {
        Ja: [],
        getEntity: function (a) {
            this.Ja[a.getId()] || (this.Ja[a.getId()] = new e.HotspotEntity(a));
            return this.Ja[a.getId()]
        }
    };
    LDMapHotspotTemplate = e.Class(e.Template, {
        name: "_MAP_HOTSPOT",
        initialize: function (a) {
            this.d = a;
            this.Ca = a.getOptions().hotspotDataUrl
        },
        getDataUrl: function (a, b, c) {
            var d = [];
            0 < this.Ca[1].length && (d = this.Ca[1][Math.abs(a + b) % this.Ca[1].length]);
            return L.Util.template(this.Ca[0], {
                s: d,
                x: a,
                y: b,
                z: c
            })
        },
        formatDatas: function (a) {
            var b = [];
            if (a && (a = a.r)) {
                var c = a.length,
                    d;
                if (0 < c) for (var f = 0; f < c; ++f) {
                        var g = a[f];
                        d = this.Wb(this.d.getZoom(), g.k);
                        var h = g.c.split(",");
                        h[0] = parseInt(h[0]);
                        h[1] = parseInt(h[1]);
                        var k = g.e.split(","),
                            h = Math.min(k[0], k[2]),
                            l = Math.min(k[3], k[1]),
                            p = Math.max(k[0], k[2]),
                            k = Math.max(k[3], k[1]),
                            k = new e.LngLatBounds(new e.LngLat(h, l), new e.LngLat(p, k));
                        b.push({
                            bounds: k,
                            iconSize: {
                                width: d[0],
                                height: d[1]
                            },
                            datas: g
                        })
                }
            }
            return b
        },
        Wb: function (a, b) {
            switch (b) {
            case "819":
                var c = [25, 13];
                break;
            case "821":
                c = [23, 16];
                break;
            case "3":
                c = [28, 12];
                break;
            case "342":
                c = [8, 8];
                break;
            case "343":
                c = [8, 8];
                break;
            case "11":
            case "12":
            case "21":
            case "22":
            case "32":
            case "41":
            case "42":
            case "51":
            case "52":
            case "61":
            case "71":
            case "81":
            case "82":
            case "91":
                c = [16, 16];
                break;
            case "31":
            case "72":
            case "92":
            case "111":
            case "112":
            case "121":
            case "141":
            case "151":
            case "152":
                c = [16, 16];
                16 < a && (c = [20, 20]);
                break;
            case "131":
            case "171":
            case "191":
                c = [16, 9];
                16 < a && (c = [20, 11]);
                break;
            case "43":
            case "44":
            case "45":
            case "46":
                c = [17, 17];
                break;
            case "344":
                c = [12, 11];
                8 < a && (c = [14, 13]);
                break;
            default:
                c = [16, 16]
            }
            return c
        }
    });
    LS = {
        tips: function (a) {
            a || (a = {});
            window._MAP_HOTSPOT = a
        }
    };
    window.LS = LS;
    e.Tween = e.Class({
        Linear: function (a, b, c, d) {
            return c * a / d + b
        },
        Gc: {
            Nc: function (a, b, c, d) {
                return c * (a /= d) * a * a + b
            },
            Pc: function (a, b, c, d) {
                return c * ((a = a / d - 1) * a * a + 1) + b
            },
            Oc: function (a, b, c, d) {
                return 1 > (a /= d / 2) ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
            }
        }
    });
    e.Map = e.Class(e.Events, {
        initialize: function (a, b) {
            var c = this;
            b = b || {};
            var d = IMAP.MapConfig;
            c.S = d._MAP_PCIMG_SIZE;
            var f = {
                backgoundImg: "string" == typeof b.backgoundImg ? b.backgoundImg : d.API_REALM_NAME + d._MAP_BGIMG_URL,
                center: b.center || new e.LngLat(116.335602, 39.940804),
                keyboard: "boolean" == typeof b.keyboard ? b.keyboard : !0,
                dragable: "boolean" == typeof b.dragable ? b.dragable : !0,
                hotspot: "boolean" == typeof b.hotspot ? b.hotspot : !1,
                scrollWheel: "boolean" == typeof b.scrollWheel ? b.scrollWheel : !0,
                dblclickZoom: "boolean" == typeof b.dblclickZoom ? b.dblclickZoom : !0,
                animation: "boolean" == typeof b.animation ? b.animation : !0,
                baseLayer: "boolean" == typeof b.baseLayer ? b.baseLayer : !0,
                inertial: "boolean" == typeof b.inertial ? b.inertial : !0,
                tms: "boolean" == typeof b.tms ? b.tms : !1,
                tileUrl: b.tileUrl instanceof Array ? b.tileUrl : d._MAP_PCBGIMG_URL,
                vectorUrl: "string" == typeof b.vectorUrl ? b.vectorUrl : d._MAP_VECTOR_BGIMG_URL,
                hotspotDataUrl: b.hotspotDataUrl instanceof Array ? b.hotspotDataUrl : d._MAP_PC_DATAS_URL
            };
            c.g = b.gpsType || e.Constants.GPS_GCJ02;
            c.h = e.Constants.GPS_GCJ02;
            c.j = c.g != c.h;
            var g = !L.Browser.ie && e.Function.isWebGL() ? !0 : !1;
            f.isTileLayer = "boolean" == typeof b.isTileLayer ? b.isTileLayer : !0;
            var h = [];
            if (b.limitBounds instanceof Array) {
                f.limitBounds = b.limitBounds;
                var k = b.limitBounds[0],
                    l = b.limitBounds[1]
            } else f.limitBounds = "object" == typeof b.limitBounds ? b.limitBounds : new e.LngLatBounds(new e.LngLat(
                    73, 5), new e.LngLat(140, 55)), k = f.limitBounds.getSouthWest(), l = f.limitBounds.getNorthEast();
            c.j && (l = e.convert(c.g, c.h, [k, l]), k = l[0], l = l[1]);
            h[0] = [k.lat, k.lng];
            h[1] = [l.lat, l.lng];
            f.maxZoom = Math.min(parseInt(b.maxZoom) || 18, 22);
            f.minZoom = Math.max(parseInt(b.minZoom) || 4, 4);
            k = b.zoom ? parseInt(Math.min(Math.max(f.minZoom, b.zoom), parseInt(f.maxZoom))) : 4;
            f.zoom = k;
            f.initCenter = b.center || new e.LngLat(116.335602, 39.940804);
            f.initzoom = k;
            c.ob = {
                changeBgLayer: "changeBgLayer",
                addoverlay: "addoverlay",
                removeoverlay: "removeoverlay"
            };
            this.mapObj = d = L.map(a, {
                backgoundImg: f.backgoundImg,
                scrollWheelZoom: f.scrollWheel,
                dragging: f.dragable,
                doubleClickZoom: f.dblclickZoom,
                keyboard: f.keyboard,
                inertia: f.inertial,
                zoomAnimation: f.animation,
                vector: f.vector,
                pUrl: d._PLUGINS_URL,
                maxBounds: h,
                minZoom: f.minZoom,
                maxZoom: f.maxZoom,
                editable: !0
            });
            if (IMAP.MapConfig.LOG_SERVICE) d.on("load", function () {
                    this.mb("core")
                }, this);
            c.j && e.convert(c.g, c.h, [f.center]);
            d.setView([f.center.lat, f.center.lng], k);
            if (window._LD_user_access) d.on("changed", function (a) {
                    window._LD_user_access({
                        type: a.type,
                        target: c
                    })
                }, c);
            d = new e.OverlayLayer({
                maxZoom: f.maxZoom,
                minZoom: f.minZoom
            });
            c.Pb = d;
            c.addLayer(d);
            c._options = f;
            f.baseLayer && (f.isTileLayer ? (g = L.Browser.canvas && !e.Browser.isIE9() ? !0 : !1, f.vector = "boolean" ==
                typeof b.vector ? b.vector ? g : !1 : !1, f.vector ? c.X = f.vector : -1 != f.tileUrl[0].indexOf(
                "scale") ? (g = 1, window.devicePixelRatio && 1 < window.devicePixelRatio && (g = 2), c.X = [f.tileUrl[
                    0] + g, f.tileUrl[1]]) : c.X = f.tileUrl, c.Ma()) : g ? (c.X = f.vectorUrl, c.plugin(["vmap.min.js"],
                c.Ma, e.STATIC_URL)) : (f.isTileLayer = !0, -1 != f.tileUrl[0].indexOf("scale") ? (g = 1, window.devicePixelRatio &&
                1 < window.devicePixelRatio && (g = 2), c.X = [f.tileUrl[0] + g, f.tileUrl[1]]) : c.X = f.tileUrl, c.X =
                f.tileUrl, c.Ma()));
            e.Events.prototype.initialize.apply(c, []);
            c.Eb = 0;
            c.setLimitBounds = c.setMaxLimit;
            c.inertia = c.inertial;
            f = new e.CopyrightControl({
                anchor: e.Constants.LEFT_BOTTOM
            });
            c.addControl(f);
            c.Nb = f
        },
        Ma: function () {
            var a = this._options,
                a = new e.BGTileLayer({
                    baseUrl: this.X,
                    tileSize: this.S,
                    tms: a.tms,
                    vectorlayer: a.vector,
                    isTileLayer: a.isTileLayer,
                    hotspotOptions: a.hotspot ? {
                        template: new LDMapHotspotTemplate(this),
                        type: e.Constants.LAYER_HOTSPOT_RECT_TYPE
                    } : null
                });
            this.addLayer(a);
            this.V = a
        },
        getCopyrightControl: s("Nb"),
        getDefaultBGTileLayer: s("V"),
        destroy: function () {
            this.mapObj && (this.mapObj.remove(), this.mapObj = null);
            this.Eb = 1
        },
        getStatus: s("Eb"),
        dragged: function (a) {
            this._options.dragable = a || !1;
            a ? this.mapObj.dragging.enable() : this.mapObj.dragging.disable()
        },
        dblclickZoom: function (a) {
            this._options.dblclickZoom = a || !1;
            a ? this.mapObj.doubleClickZoom.enable() : this.mapObj.doubleClickZoom.disable()
        },
        keyboard: function (a) {
            this._options.keyboard = a || !1;
            a ? this.mapObj.keyboard.enable() : this.mapObj.keyboard.disable()
        },
        scrollWheelZoom: function (a) {
            this._options.scrollWheelZoom = a || !1;
            a ? this.mapObj.scrollWheelZoom.enable() : this.mapObj.scrollWheelZoom.disable()
        },
        inertial: function (a) {
            this._options.inertial = a;
            this.mapObj.inertia(a)
        },
        hotspot: function (a) {
            var b = this.V;
            if (b) {
                b.hotspot(a, {
                    template: new LDMapHotspotTemplate(this),
                    type: e.Constants.LAYER_HOTSPOT_RECT_TYPE
                });
                var c = this.za;
                if (a && c) for (var d = 0, f = c.length; d < f; ++d) {
                        var g = c[d];
                        b.addHotspotEventListener(g.type, g.func, g.obj)
                }
                b.zc()
            }
            this._options.hotspot = a
        },
        addHotspotEventListener: function (a, b, c) {
            var d = {
                type: a,
                obj: c || this,
                func: b
            };
            this.V && this.V.addHotspotEventListener(a, b, c);
            this.za || (this.za = []);
            this.za.push(d);
            return d
        },
        removeHotspotEventListener: function (a) {
            if (this.V) this.V.removeHotspotEventListener(a);
            else {
                var b = this.za;
                if (b) for (var c = 0, d = b.length; c < d; ++c) if (a.type == b[c].type && a.obj == b[c].obj) {
                            b[c].splice(c, 1);
                            break
                        }
            }
        },
        lnglatToPixel: function (a) {
            this.j && (a = e.convert(this.g, this.h, [a])[0]);
            return this.mapObj.latLngToContainerPoint([a.lat, a.lng])
        },
        pixelToLnglat: function (a) {
            a = this.mapObj.containerPointToLatLng([a.x, a.y]);
            this.j && (a = e.convert(this.h, this.g, [a]), a = a[0]);
            return new e.LngLat(a.lng, a.lat)
        },
        lnglatToLayerPixel: function (a, b) {
            if (a) return !b && this.j && (a = e.convert(this.g, this.h, [a]), a = a[0]), this.mapObj.latLngToLayerPoint([
                        a.lat, a.lng])
        },
        layerPixelToLnglat: function (a) {
            if (a) return a = this.mapObj.containerPointToLatLng([a.x, a.y]), this.j && (a = e.convert(this.h, this.g, [
                        a])[0]), new e.LngLat(a.lng, a.lat)
        },
        lnglatToProjectedPoint: function (a) {
            this.j && (a = e.convert(this.g, this.h, [a])[0]);
            return this.mapObj.options.crs.projection.project(L.Tc(a.lat, a.lng))
        },
        projectedPointToLnglat: function (a) {
            a = this.mapObj.options.crs.projection.unproject(L.Uc(a.x, a.y));
            this.j && (a = e.convert(this.h, this.g, [a]), a = a[0]);
            return new e.LngLat(a.lng, a.lat)
        },
        panBy: function (a, b) {
            this.mapObj.panBy([a, b])
        },
        panTo: function (a) {
            this.j && (a = e.convert(this.g, this.h, [a])[0]);
            this.mapObj.panTo([a.lat, a.lng])
        },
        zoomIn: function (a) {
            var b = null;
            a && (this.j && (a = e.convert(this.g, this.h, [a])[0]), b = {
                center: [a.lat, a.lng]
            });
            this.mapObj.zoomIn(null, b)
        },
        zoomOut: function (a) {
            var b = null;
            a && (this.j && (a = e.convert(this.g, this.h, [a])[0]), b = {
                center: [a.lat, a.lng]
            });
            this.mapObj.zoomOut(null, b)
        },
        autoResize: function () {
            this.mapObj.invalidateSize()
        },
        setZoom: function (a) {
            this.mapObj.setZoom(a, !1)
        },
        setZoomLevels: function (a, b, c) {
            this.mapObj.setZoomLevels(a, b, c);
            this._options.minZoom = a;
            this._options.maxZoom = b
        },
        setCenter: function (a, b) {
            this.j && (a = e.convert(this.g, this.h, [a])[0]);
            this.mapObj.setView([a.lat, a.lng], b)
        },
        setBestMap: function (a, b) {
            if (a instanceof Array && 0 < a.length) {
                var c = [],
                    d = [],
                    f;
                for (f in a) {
                    var g = a[f];
                    c.push(g.lng);
                    d.push(g.lat)
                }
                f = Math.max.apply(Math, c);
                g = Math.max.apply(Math, d);
                c = Math.min.apply(Math, c);
                d = Math.min.apply(Math, d);
                d = new e.LngLatBounds(new e.LngLat(c, d), new e.LngLat(f, g));
                this.setBounds(d, b)
            }
        },
        setBounds: function (a, b) {
            var c = a.getSouthWest(),
                d = a.getNorthEast();
            this.j && (d = e.convert(this.g, this.h, [c, d]), c = d[0], d = d[1]);
            this.mapObj.fitBounds([[c.lat, c.lng], [d.lat, d.lng]], b)
        },
        setMaxLimit: function (a) {
            var b = [];
            if (a instanceof Array) var c = a[0],
            d = a[1];
            else "object" == typeof a && (c = a.getSouthWest(), d = a.getNorthEast());
            c && (this.j && (d = e.convert(this.g, this.h, [c, d]), c = d[0], d = d[1]), b[0] = [c.lat, c.lng], b[1] = [
                    d.lat, d.lng], this._options.limitBounds = a, this.mapObj.setMaxBounds(b))
        },
        getLimitBounds: function () {
            return this._options.limitBounds
        },
        getZoom: function () {
            return this.mapObj.getZoom()
        },
        getCenter: function () {
            var a = this.mapObj.getCenter();
            this.j && (a = e.convert(this.h, this.g, [{
                    lng: a.lng,
                    lat: a.lat
                }])[0]);
            return new e.LngLat(a.lng, a.lat)
        },
        getId: function () {
            return this.mapObj._map_id
        },
        getSize: function () {
            var a = this.mapObj.getSize();
            return new e.Size(a.x, a.y)
        },
        getBounds: function () {
            var a = this.mapObj.getBounds(),
                b = new e.LngLat(a.getSouthWest().lng, a.getSouthWest().lat),
                a = new e.LngLat(a.getNorthEast().lng, a.getNorthEast().lat);
            this.j && (a = e.convert(this.h, this.g, [b, a]), b = a[0], a = a[1]);
            return new e.LngLatBounds(b, a)
        },
        getContainer: function () {
            return this.mapObj.getContainer()
        },
        getBoundsForZoom: function () {
            var a = this.mapObj.getBounds();
            return this.mapObj._getBoundsCenterZoom(a).zoom
        },
        getOverlayLayer: s("Pb"),
        addLayer: function (a) {
            a.setMap(this)
        },
        removeLayer: function (a) {
            a.setMap(null)
        },
        getBGLayerIds: function () {
            return this.mapObj.getBGLayerIds()
        },
        layerToTop: function (a) {
            this.mapObj.layerToTop(a)
        },
        changeBGLayer: function (a) {
            this.mapObj.changeBGLayer(a.p) && (this.V = a, this.triggerEvent(e.Constants.CHAGE_BGLAYER, {
                layer: a
            }))
        },
        addControl: function (a) {
            a && a.setMap(this)
        },
        removeControl: function (a) {
            a && a.setMap(null)
        },
        addContextMenu: function (a) {
            a && a.setMap(this)
        },
        removeContextMenu: function (a) {
            a && a.setMap(null)
        },
        clearOverlays: function () {
            this.getOverlayLayer().clear()
        },
        addTool: function (a) {
            a && a.setMap(this)
        },
        removeTool: function (a) {
            a && a.setMap(null)
        },
        addEventListener: function (a, b, c, d) {
            if (this.ob[a]) return this.addEventListener.apply(this, [a, b, c, d]);
            b = this.Y(b, c || this, d, this);
            this.mapObj.on(a, b);
            return {
                type: a,
                obj: c || this,
                func: b,
                stop: d
            }
        },
        Y: function (a, b, c, d) {
            return function (f) {
                if (d.j && "mousemove" == f.type) {
                    var g = d.mapObj;
                    if (d.cb) if (3 < e.Function.distanceByPixel(g.latLngToContainerPoint(d.cb), g.latLngToContainerPoint(
                            f.latlng))) d.cb = f.latlng;
                        else return;
                        else d.cb = f.latlng
                }
                f.originalEvent && (f.originalEvent._stopped = c);
                g = {
                    stop: c || b.stop,
                    type: f.type,
                    zoom: d.getZoom(),
                    center: d.getCenter()
                };
                if (f.latlng) {
                    var h = new e.LngLat(f.latlng.lng, f.latlng.lat);
                    (g.defaultLnglat = h) && d.j && (h = e.convert(d.h, d.g, [h])[0]);
                    g.lnglat = h;
                    g.pixel = new e.Pixel(f.containerPoint.x, f.containerPoint.y)
                }
                return a.call(b, g)
            }
        },
        removeEventListener: function (a) {
            a && (this.ob[a.type] ? this.removeEventListener.apply(this, [a]) : this.mapObj.off(a.type, a.func))
        },
        getOptions: function () {
            this._options.center = this.getCenter();
            this._options.zoom = this.getZoom();
            return this._options
        },
        $b: function (a) {
            return this.mapObj._getTileId(a)
        },
        plugin: function (a, b, c) {
            -1 < a.join(",").indexOf("VectorTileLayer") ? this.dc(a, b, c, this) : this.ub(a, b, c, this)
        },
        getTileNum: function (a, b) {
            var c = this.lnglatToProjectedPoint(a);
            b = b ? b : {
                x: 0,
                y: 0
            };
            return {
                x: Math.floor((c.x + b.x) / this.S),
                y: Math.floor((c.y + b.y) / this.S)
            }
        },
        getTileBounds: function (a) {
            var b = a.x,
                c = a.y;
            a = b * this.S + this.S;
            var d = c * this.S + this.S,
                b = this.projectedPointToLnglat({
                    x: b * this.S,
                    y: c * this.S
                }),
                d = this.projectedPointToLnglat({
                    x: a,
                    y: d
                });
            a = new IMAP.LngLat(b.lng, d.lat);
            b = new IMAP.LngLat(d.lng, b.lat);
            return new IMAP.LngLatBounds(a, b)
        },
        getTiles: function (a) {
            a = a ? a : this.V;
            return a.getTiles()
        },
        ub: function (a, b, c, d) {
            d.mapObj.plugin(a, function () {
                IMAP.MapConfig.LOG_SERVICE && d.mb(a.join("|"));
                b instanceof Function && b.call(d)
            }, c)
        },
        dc: function (a, b, c, d) {
            function f() {
                d.mapObj.plugin(["vmapcm.min.js"], function () {
                    d.ub(a, b, c, d)
                }, e.STATIC_URL)
            }
            window.Vmapt ? f() : d.mapObj.plugin(["vmap.min.js"], function () {
                f()
            }, e.STATIC_URL)
        },
        mb: function (a) {
            var b = window.location.href;
            0 !== b.indexOf("http") && window.parent && window.parent !== window && (b = window.parent.location.href);
            new L.Http.JSONP(IMAP.MapConfig.LOG_SERVICE + ["ak=" + IMAP.SRVConfig.SRV_AK, "logJson=" + ('{"uc":"' +
                    encodeURIComponent(b) + '","m":"' + a + '","ak":"' + IMAP.SRVConfig.SRV_AK + '","pf":"' + L.Browser
                    .pf + '","v":"' + IMAP.MapConfig._VERSIONS + '"}')].join("&"))
        },
        gpsType: s("g")
    });
    e.MapOptions = e.Class({
        backgoundImg: null,
        center: null,
        maxZoom: null,
        minZoom: null,
        keyboard: null,
        dragable: null,
        hotspot: null,
        scrollWheel: null,
        dblclickZoom: null,
        animation: null,
        inertial: null,
        zoom: null,
        projectionType: null
    });
    e.Control = e.Class({
        initialize: function (a) {
            this.Ya = !1;
            a = a || {};
            this.qa = "_ld_control_" + e.Function.createUniqueID();
            this._options = a
        },
        setMap: function (a) {
            a ? (this.d = a, this.w.addTo(a.mapObj)) : (this.w.remove(), this.d = null)
        },
        getMap: s("d"),
        setObject: q("w"),
        getElement: function () {
            return this.w.getContainer()
        },
        setAnchor: function (a) {
            this._options.position = a;
            this.w.setPosition(a)
        },
        getAnchor: function () {
            return this._options.position
        },
        setOffset: function (a) {
            "object" == typeof a && (this._options.offset = a, this.w.setOffset(a))
        },
        getOffset: function () {
            return this._options.offset
        },
        getId: s("qa"),
        visible: function (a) {
            this.w.visible(a)
        },
        isUsable: s("Ya")
    });
    e.ControlOptions = e.Class({
        anchor: null,
        offset: null
    });
    e.ScaleControl = e.Class(e.Control, {
        initialize: function (a) {
            a = a || {};
            a.position = a.anchor || e.Constants.LEFT_BOTTOM;
            a.offset = a.offset || {
                x: 5,
                y: -40
            };
            a.imperial = !1;
            a.maxWidth = a.maxWidth || 150;
            e.Control.prototype.initialize.apply(this, [a]);
            this.w = new L.Control.Scale(a)
        }
    });
    e.NavigationControl = e.Class(e.Control, {
        initialize: function (a) {
            a = a || {};
            a.position = a.anchor || e.Constants.LEFT_TOP;
            a.offset = a.offset || {
                x: 10,
                y: 10
            };
            e.Control.prototype.initialize.apply(this, [a]);
            this.w = new L.Control.Zoom(a)
        },
        setType: m(),
        getType: m()
    });
    e.Copyright = e.Class({
        id: null,
        content: null
    });
    e.CopyrightControl = e.Class(e.Control, {
        initialize: function (a) {
            a = a || {};
            a.position = a.anchor || e.Constants.RIGHT_BOTTOM;
            a.offset = a.offset || {
                x: 5,
                y: -5
            };
            e.Control.prototype.initialize.apply(this, [a]);
            var b = {
                id: "ld_copyright",
                content: IMAP.MapConfig._CONTROL_COPYRIGHT
            };
            this.w = new L.Control.Attribution(a);
            this.w.addAttribution(b)
        },
        addCopyright: function (a) {
            return this.w.addAttribution(a)
        },
        removeCopyright: function (a) {
            return this.w.removeAttribution(a)
        },
        getCopyright: function (a) {
            return this.w.getAttribution(a)
        },
        getCopyrights: function () {
            return this.w.getAttributions()
        }
    });
    e.MenuItem = e.Class(e.DOMEvents, {
        tc: "padding:3px 6px;color:#76766f;word-wrap:break-word;",
        uc: "padding:3px 6px;color:#d0d0d0;word-wrap:break-word;",
        gc: "#f3f3f2",
        fc: "#ffffff",
        initialize: function (a, b) {
            var c = this;
            b = b || {};
            var d = {
                width: 150,
                enabled: "boolean" == typeof b.enabled ? b.enabled : !0,
                iconSize: b.iconSize instanceof Array ? b.iconSize : [25, 15],
                content: "string" == typeof a ? a : "TransMap",
                iconUrl: "string" == typeof b.iconUrl ? b.iconUrl : null,
                callback: "function" == typeof b.callback ? b.callback : null
            };
            c.options = d;
            c.ya = d.iconUrl && 23 < b.iconSize[1] ? b.iconSize[1] : 23;
            c.Lc = !1;
            var f = e.Function.createElement({
                name: "div",
                cssText: (d.enabled ? c.tc : c.uc) + "width:" + d.width + "px;height:" + c.ya + "px;line-height:" + c.ya + "px;cursor:" +
                    (d.enabled ? "pointer;" : "default;")
            });
            c.o = f;
            a && (a = e.Function.checkFieldLength(a, 100), c.vb(a), d.iconUrl && (a =
                '<table cellpadding="0"cellspacing="0"border="0"><tbody><tr><td height="' + d.iconSize[1] +
                'px" width="' + d.iconSize[0] + 'px"><img src="' + d.iconUrl + '" style=" height: ' + d.iconSize[1] +
                "px; width:" + d.iconSize[0] + 'px;"/></td><td > ' + a + "</td></tr></tbody></table>"), c.C = a, f
                .innerHTML = a);
            e.DOMEvents.prototype.initialize.apply(c, []);
            c.attachToElement([{
                    name: e.Constants.MOUSE_OVER,
                    element: f,
                    callback: function (a) {
                        e.Event.stop(a, !1);
                        d.enabled && (f.style.backgroundColor = c.gc)
                    },
                    object: c
                }, {
                    name: e.Constants.MOUSE_OUT,
                    element: f,
                    callback: function (a) {
                        e.Event.stop(a, !1);
                        d.enabled && (f.style.backgroundColor = c.fc)
                    },
                    object: c
                }, {
                    name: e.Constants.MOUSE_DOWN,
                    element: f,
                    callback: function (a) {
                        e.Event.stop(a, !1);
                        d.enabled && "function" == typeof d.callback && (c._close(null), d.callback(c.kc))
                    },
                    object: c
                }])
        },
        setContent: function (a, b) {
            if (a && "string" == typeof a) {
                a = e.Function.checkFieldLength(a, 100);
                b = b || {};
                var c = b.iconUrl,
                    d = b.iconSize,
                    f = this.options;
                this.vb(a);
                f.iconUrl = "string" == typeof c ? c : null;
                f.iconSize = d instanceof Array ? d : [25, 15];
                f.iconUrl && (a = '<table cellpadding="0"cellspacing="0"border="0"><tbody><tr><td height="' + f.iconSize[
                    1] + 'px" width="' + f.iconSize[0] + 'px"><img src="' + f.iconUrl + '" style=" height: ' + f.iconSize[
                    1] + "px; width:" + f.iconSize[0] + 'px;"/></td><td > ' + a + "</td></tr></tbody></table>");
                this.o.innerHTML = a;
                this.options.content = a
            }
        },
        setCallback: function (a) {
            a && "function" == typeof a && (this.options.callback = a)
        },
        enabled: function (a) {
            "boolean" == typeof a && (this.options.enabled = a, this.o.style.cursor = a ? "pointer" : "default", this.o
                .style.color = a ? "#76766f" : "#d0d0d0")
        },
        getElement: s("o"),
        injectSeparator: q("separatorElement"),
        setPosition: q("kc"),
        vb: function (a) {
            a = e.Function.stringLength(a);
            this.o.style.height = this.ya * Math.ceil(12 * a / 2 / (this.options.width - 6)) + "px"
        }
    });
    e.Hc = e.Class({
        width: null,
        enabled: null,
        Sc: null,
        Rc: null,
        Mc: null
    });
    e.ContextMenu = e.Class(e.Events, e.DOMEvents, {
        K: {},
        qc: "height:1px;width:100%;border-top:1;background-color:#CCCCCC;overflow:hidden;margin:1px 0px 1px 0px;",
        sc: "-moz-user-select: none;position: absolute;border:1px solid #CCCCCC;padding:1px 1px 1px 1px;color:#000000;background-color:#ffffff;font-size:12px;display:none;z-index:1001; height:auto;border-radius: 3px 3px 3px 3px;font-size:12px;",
        initialize: function (a) {
            this.J = [];
            if (this._showLocation = "boolean" == typeof a ? a : !1) a = new e.MenuItem("loading......", {
                    enabled: !1
                }), this.J.push(a);
            this._element = e.Function.createElement({
                name: "div",
                id: "contexMenu",
                cssText: this.sc
            });
            e.Events.prototype.initialize.apply(this, []);
            e.DOMEvents.prototype.initialize.apply(this, [])
        },
        addItem: function (a) {
            this._position && a.setPosition(this._position);
            this.J.push(a);
            this._resetMenuItems()
        },
        getItem: function (a) {
            return this.J[a - 1]
        },
        removeItem: function (a) {
            if (!isNaN(a)) {
                a = parseInt(a - 1);
                var b = this.J[a];
                b && (this.yb(b.getElement()), this._element.removeChild(b.getElement()), b.isSeparator && b.separatorElement &&
                    this._element.removeChild(b.separatorElement), this.J.splice(a, 1), 0 == a && (this._showLocation = !
                    1), this._resetMenuItems())
            }
        },
        addSeparator: function (a) {
            if (a = this.J[a - 1]) a.isSeparator = !0, this._resetMenuItems()
        },
        removeSeparator: function (a) {
            if (a = this.J[a - 1]) a.isSeparator = !1, a._close = null, this._resetMenuItems()
        },
        setMap: function (a) {
            !this._map && a ? (this._map = a, this.Kb()) : !a && this._map && (this.nc(), this._map = null)
        },
        _resetMenuItems: function () {
            var a = this._element,
                b, c = this.J;
            if (a) {
                for (; a.hasChildNodes();) a.removeChild(a.firstChild);
                for (var d = 0, f = c.length; d < f; ++d) if (b = c[d], b.options.callback && (b._close = e.Function.bind(
                        this._close, this)), a.appendChild(c[d].getElement()), b.isSeparator) {
                        var g = this.Yb();
                        b.injectSeparator(g);
                        a.appendChild(g)
                    }
            }
        },
        wb: function (a) {
            var b = this._map;
            if (b) {
                var c = this._element,
                    d = this.Zb();
                c.style.width = d[0] + "px";
                var e = b.getSize(),
                    g = e.height - a.y;
                c.style.left = e.width - a.x < d[0] ? b.getContainer().scrollLeft + a.x - d[0] + "px" : b.getContainer()
                    .scrollLeft + a.x + "px";
                c.style.top = g < d[1] ? b.getContainer().scrollTop + a.y - d[1] + "px" : b.getContainer().scrollTop +
                    a.y + "px";
                c.style.display = "block"
            }
        },
        Zb: function () {
            for (var a = 150, b = 23, c = this.J, d, e = 0, g = c.length; e < g; ++e) d = c[e], d.options.width > a &&
                    (a = d.options.width), b += d.ya;
            return [a + 12, b]
        },
        Yb: function () {
            return e.Function.createElement({
                name: "div",
                cssText: this.qc
            })
        },
        ic: function (a) {
            var b = this,
                c = a.pixel,
                d = b._map,
                f = a.lnglat,
                g = b.J;
            if (b._showLocation) {
                g[0].setContent("loading......");
                var h = function () {
                    var a = d.gpsType(),
                        h = new e.LngLat(f.lng, f.lat);
                    a != e.Constants.GPS_GCJ02 && (h = e.convert(a, e.Constants.GPS_GCJ02, [h]), h = h[0]);
                    b._geocoder.getAddress(h, function (a, d) {
                        1 == a || 0 == d.result.length ? g[0].setContent(h.toString()) : g[0].setContent(d.result[0].formatted_address);
                        b.wb(c)
                    })
                };
                b._geocoder ? h() : d.plugin(["LD.Geocoder"], function () {
                    b._geocoder = new e.Geocoder;
                    h()
                })
            }
            a = 0;
            for (var k = g.length; a < k; ++a) g[a].setPosition(f);
            b._position = f;
            b.wb(c);
            b.triggerEvent(e.Constants.MENU_OPEN, {
                type: e.Constants.MENU_OPEN,
                lnglat: f,
                target: b
            });
            b.Da || (b.attachToElement([{
                    name: e.Constants.MOUSE_DOWN,
                    element: document,
                    callback: b._close,
                    object: b
                }]), b.Da = d.addEventListener(e.Constants.MOUSE_DOWN, b._close, b))
        },
        _close: function () {
            this.Da && (this.detachToElement([{
                    name: e.Constants.MOUSE_DOWN,
                    element: document
                }]), this._map.removeEventListener(this.Da), this.Da = null);
            this._element.style.display = "none";
            this._position = null;
            this.triggerEvent(e.Constants.MENU_CLOSE, {
                type: e.Constants.MENU_CLOSE,
                target: this
            })
        },
        Kb: function () {
            this._map.getContainer().appendChild(this._element);
            this.Bc = this._map.addEventListener(e.Constants.MOUSE_CONTEXTMENU, this.ic, this)
        },
        nc: function () {
            for (var a = this.J, b = 0, c = a.length; b < c; ++b) this.yb(a[b].getElement());
            this._map.getContainer().removeChild(this._element);
            this._map.removeEventListener(this.Bc)
        }
    })
})();