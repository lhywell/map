var LeadorStreetView = function (divContent, vars) {
    LeadorStreetView.count = -1;
    var basePath = IMAP["STATIC_URL"] + "flash/";
    var mainURL = basePath + "Main.swf";
    var streetViewURL = basePath + "StreetView.swf";
    var UIURL = basePath + "streetViewUI.swf";
    var swfObjectURL = basePath + "swfobject.js";
    //var noFlashTipsURL = basePath+"expressInstall.swf";
    if (vars) {
        if (vars.hasOwnProperty("mainURL")) {
            mainURL = vars.mainURL;
            delete vars.mainURL;
        }
        if (vars.hasOwnProperty("swfObjectURL")) {
            swfObjectURL = vars.swfObjectURL;
            delete vars.swfObjectURL;
        }
    }
    var sv = {
        content: divContent,
        swfObject: null,
        swf: null,
        swfURL: mainURL,
        width: "100%",
        height: "100%",
        swfVersionStr: "11.1.0",
        // xiSwfUrlStr: noFlashTipsURL,
        params: {
            quality: "high",
            wmode: "transparent",
            bgcolor: "#ffffff",
            allowscriptaccess: "always",
            allowfullscreen: "true"
        },
        attributes: {},
        flashvars: {
            cases: "streetView",
            streetViewURL: streetViewURL,
            UIURL: UIURL
        },
        listenerPool: {
            initCompleteEvent: function () {
                for (i in this) {
                    if (i != "initCompleteEvent") {
                        sv.swf.addEventListener(i, i);
                    }
                }
                if (sv.hasOwnProperty("stationID")) {
                    sv.loadStreetViewByID(sv.stationID);
                } else if (sv.hasOwnProperty("coordinate")) {
                    sv.loadStreetViewByPosition(sv.coordinate[0], sv.coordinate[1], sv.coordinate[2], sv.coordinate[3]);
                }
                if (sv.hasOwnProperty("angle")) {
                    sv.setStreetViewAngle(sv.angle);
                }
                if (sv.hasOwnProperty("zoom")) {
                    sv.setZoom(sv.zoom);
                }
                if (sv.hasOwnProperty("plugin")) {
                    var l = sv.plugin.lenght();
                    for (i = 0; i < len; i++) {
                        sv.addPlugin(sv.plugin[i]);
                    }
                }
                if (sv.hasOwnProperty("showUI")) {
                    for (i in sv.showUI) {
                        sv.setUIVisible(i, sv.showUI[i]);
                    }
                }
                if (sv.hasOwnProperty("skinColor")) {
                    sv.setSkinColor(sv.skinColor);
                }
                if (sv.hasOwnProperty("isUseHash")) {
                    sv.swf.useHash(sv.isUseHash);
                }
                if (sv.hasOwnProperty("initStreetViewEvent")) {
                    sv.initStreetViewEvent();
                }
                if (sv.hasOwnProperty("jsMouseWheel")) {
                    sv.mouseWheel(sv.jsMouseWheel);
                }
            }
        },
        addEventListener: function (type, listener) {
            if (type == "initCompleteEvent") {
                sv.initStreetViewEvent = listener;
                return;
            }
            sv.listenerPool[type] = listener;
            if (sv.swf) {
                sv.swf.addEventListener(type, type);
            }
        },
        removeEventListener: function (type, listener) {
            if (sv.swf) {
                sv.swf.removeEventListener(type, type);
                sv.listenerPool[type] = null;
                delete sv.listenerPool[type];
            }
        },
        loadStreetViewByID: function (id) {
            if (sv.swf && sv.swf.loadStreetViewByID) {
                sv.swf.loadStreetViewByID(id);
            }
            sv.stationID = id;
            delete sv.coordinate;
        },
        loadStreetViewByPosition: function (lon, lat, type, omit) {
            if (sv.swf && sv.swf.loadStreetViewByPosition) {
                sv.swf.loadStreetViewByPosition(lon, lat, type, omit);
            }
            sv.coordinate = [lon, lat, type, omit];
            delete sv.stationID;
        },
        getStreetViewInfo: function () {
            if (sv.swf) {
                return sv.swf.getStreetViewInfo();
            } else {
                return null;
            }
        },
        getStreetViewAngle: function () {
            if (sv.swf) {
                return sv.swf.getStreetViewAngle();
            } else {
                return null;
            }
        },
        setStreetViewAngle: function (obj, preset) {
            if (sv.swf) {
                preset = preset == true ? true : false;
                sv.swf.setStreetViewAngle(obj, preset);
            }
            sv.angle = obj;
        },
        getZoom: function () {
            if (sv.swf) {
                return sv.swf.getZoom();
            } else {
                return;
            }
        },
        setZoom: function (num) {
            if (sv.swf) {
                sv.swf.setZoom(num, false);
            }
            sv.zoom = num;
        },
        getScreenXY: function (stationID, lon, lat, fun) {
            if (sv.swf) {
                if (!sv.getScreenXY.hasOwnProperty("backNum")) sv.getScreenXY.backNum = 0;
                sv.getScreenXY["callback" + sv.getScreenXY.backNum] = fun;
                sv.swf.getScreenXY(stationID, lon, lat, "LeadorStreetView.examples" + LeadorStreetView.count +
                    ".getScreenXY.callback" + sv.getScreenXY.backNum);
                sv.getScreenXY.backNum++;
                if (sv.getScreenXY.backNum > 10) sv.getScreenXY.backNum = 0;
            }
        },
        mouseWheel: function (boo) {
            if (sv.swf) {
                sv.swf.mouseWheel(boo)
            }
            sv.jsMouseWheel = boo;
        },
        addPlugin: function (url) {
            if (sv.swf) {
                sv.swf.addPlugin(url);
            }
            if (sv.plugin) {
                sv.plugin = [];
            }
            sv.plugin.push(url);
        },
        showMarker: function (obj) {
            if (sv.swf) {
                sv.swf.showMarker(obj);
            }
        },
        changeMarker: function () {
            if (sv.swf) {
                sv.swf.changeMarker()
            }
        },
        endChangeMarker: function () {
            if (sv.swf) {
                sv.swf.endChangeMarker()
            }
        },
        setUIVisible: function (names, boo) {
            if (sv.swf) {
                sv.swf.setElementVisible(names, boo);
            }
            if (!sv.showUI) {
                sv.showUI = {};
            }
            sv.showUI[names] = boo;
        },
        setSkinColor: function (vars) {
            if (sv.swf) {
                sv.swf.setSkinColor(vars);
            }
            sv.skinColor = vars;
        },
        getScreenshot: function (conf, callbackName) {
            if (sv.swf) {
                return sv.swf.getScreenshot(conf, callbackName);
            } else {
                return null;
            }
        },
        useHash: function (boo) {
            if (sv.swf) {
                sv.swf.useHash(boo);
            }
            sv.isUseHash = boo;
        }
    }
    init();
 
    function init() {
        if (vars) {
            for (var i in vars) {
                sv.flashvars[i] = vars[i];
            }
        }
 
        if (!sv.swfObject) {
            loadScriptJs(swfObjectURL, loadSwfObjectEnd);
            return;
        }
        bindingDIV();
 
    }
 
    function bindingDIV() {
        LeadorStreetView.count++;
        LeadorStreetView["examples" + LeadorStreetView.count] = sv;
        sv.flashvars.
        cases = "LeadorStreetView.examples" + LeadorStreetView.count + ".listenerPool";
        sv.swfobject.embedSWF(sv.swfURL, sv.content, sv.width, sv.height, sv.swfVersionStr, sv.xiSwfUrlStr, sv.flashvars,
            sv.params, sv.attributes, loadSwfEnd);
    }
 
    function loadSwfEnd(e) {
        if (e.success) {
            sv.swf = e.ref;
        } else {
            alert("load swf error")
        }
    }
 
    function loadSwfObjectEnd() {
        if (!sv.swfobject) {
            sv.swfobject = swfobject;
            bindingDIV();
        }
    }
 
    function loadScriptJs(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            }
        } else {
            script.onload = function () {
                callback();
            }
        }
        script.src = url;
        var append = document.scripts[document.scripts.length - 1].parentNode;
        append.appendChild(script);
    }
    return sv;
}