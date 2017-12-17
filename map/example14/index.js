function GraphHopperEngine(t, e) {
    var n = {
        "-3": 7,
        "-2": 6,
        "-1": 5,
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 14,
        5: 14,
        6: 10
    };
    return {
        id: t,
        creditline: '<a href="https://www.graphhopper.com/" target="_blank">Graphhopper</a>',
        draggable: !1,
        getRoute: function(t, o) {
            return $.ajax({
                url: document.location.protocol + OSM.GRAPHHOPPER_URL,
                data: {
                    vehicle: e,
                    locale: I18n.currentLocale(),
                    key: "LijBPDQGfu7Iiq80w3HzwB4RUDJbMbhs6BU0dEnn",
                    "ch.disable": "car" === e,
                    type: "jsonp",
                    elevation: !1,
                    instructions: !0,
                    point: t.map(function(t) {
                        return t.lat + "," + t.lng
                    })
                },
                traditional: !0,
                dataType: "jsonp",
                success: function(t) {
                    if (!t.paths || 0 === t.paths.length) return o(!0);
                    for (var e = t.paths[0], a = L.PolylineUtil.decode(e.points), i = [], r = e.instructions.length, s = 0; s < r; s++) {
                        var c = e.instructions[s],
                            l = s === r - 1 ? 14 : n[c.sign],
                            d = "<b>" + (s + 1) + ".</b> ";
                        d += c.text;
                        for (var u = a[c.interval[0]], p = c.distance, h = [], m = c.interval[0]; m <= c.interval[1]; m++) h.push({
                            lat: a[m][0],
                            lng: a[m][1]
                        });
                        i.push([{
                            lat: u[0],
                            lng: u[1]
                        }, l, d, p, h])
                    }
                    o(!1, {
                        line: a,
                        steps: i,
                        distance: e.distance,
                        time: e.time / 1e3,
                        ascend: e.ascend,
                        descend: e.descend
                    })
                },
                error: function() {
                    o(!0)
                }
            })
        }
    }
}

function MapQuestEngine(t, e) {
    var n = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 7,
        6: 6,
        7: 5,
        8: 4,
        9: 4,
        10: 21,
        11: 20,
        12: 21,
        13: 20,
        14: 24,
        15: 25,
        16: 18,
        17: 19,
        18: 0
    };
    return {
        id: t,
        creditline: '<a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="' + document.location.protocol + '//developer.mapquest.com/content/osm/mq_logo.png">',
        draggable: !1,
        getRoute: function(t, o) {
            var a = t[0],
                i = t[t.length - 1];
            return $.ajax({
                url: document.location.protocol + OSM.MAPQUEST_DIRECTIONS_URL,
                data: {
                    key: OSM.MAPQUEST_KEY,
                    from: a.lat + "," + a.lng,
                    to: i.lat + "," + i.lng,
                    routeType: e,
                    manMaps: !1,
                    shapeFormat: "raw",
                    generalize: 0,
                    unit: "k"
                },
                dataType: "jsonp",
                success: function(t) {
                    if (0 !== t.info.statuscode) return o(!0);
                    var e, a = [],
                        i = t.route.shape.shapePoints;
                    for (e = 0; e < i.length; e += 2) a.push(L.latLng(i[e], i[e + 1]));
                    var r = [],
                        s = t.route.legs[0].maneuvers;
                    for (e = 0; e < s.length; e++) {
                        var c, l, d, u, p = s[e];
                        l = t.route.shape.maneuverIndexes[e], e === s.length - 1 ? (c = 15, d = l + 1) : (c = n[p.turnType], d = t.route.shape.maneuverIndexes[e + 1] + 1), u = [];
                        for (var h = l; h < d; h++) u.push(L.latLng(t.route.shape.shapePoints[2 * h], t.route.shape.shapePoints[2 * h + 1]));
                        r.push([L.latLng(p.startPoint.lat, p.startPoint.lng), c, p.narrative, 1e3 * p.distance, u])
                    }
                    o(!1, {
                        line: a,
                        steps: r,
                        distance: 1e3 * t.route.distance,
                        time: t.route.time
                    })
                },
                error: function() {
                    o(!0)
                }
            })
        }
    }
}

function MapzenEngine(t, e) {
    var n = [0, 8, 8, 8, 14, 14, 14, 0, 0, 1, 2, 3, 4, 4, 7, 6, 5, 0, 24, 25, 24, 25, 0, 1, 5, 20, 10, 11, 17, 0];
    return {
        id: t,
        creditline: "<a href='https://mapzen.com/products/turn-by-turn/' target='_blank'>Mapzen</a>",
        draggable: !1,
        getRoute: function(t, o) {
            return $.ajax({
                url: document.location.protocol + OSM.MAPZEN_VALHALLA_URL,
                data: {
                    api_key: OSM.MAPZEN_VALHALLA_KEY,
                    json: JSON.stringify({
                        locations: t.map(function(t) {
                            return {
                                lat: t.lat,
                                lon: t.lng
                            }
                        }),
                        costing: e,
                        directions_options: {
                            units: "km",
                            language: I18n.currentLocale()
                        }
                    })
                },
                dataType: "json",
                success: function(t) {
                    var e = t.trip;
                    if (0 === e.status) {
                        var a = [],
                            i = [],
                            r = 0,
                            s = 0;
                        e.legs.forEach(function(t) {
                            var e = L.PolylineUtil.decode(t.shape, {
                                precision: 6
                            });
                            a = a.concat(e), t.maneuvers.forEach(function(t) {
                                var o = e[t.begin_shape_index];
                                i.push([{
                                    lat: o[0],
                                    lng: o[1]
                                }, n[t.type], t.instruction, 1e3 * t.length, []])
                            }), r += t.summary.length, s += t.summary.time
                        }), o(!1, {
                            line: a,
                            steps: i,
                            distance: 1e3 * r,
                            time: s
                        })
                    } else o(!0)
                },
                error: function() {
                    o(!0)
                }
            })
        }
    }
}

function OSRMEngine() {
    var t = [];
    return {
        id: "osrm_car",
        creditline: '<a href="http://project-osrm.org/" target="_blank">OSRM</a>',
        draggable: !0,
        _transformSteps: function(t, e) {
            var n = {
                    "continue": "javascripts.directions.instructions.continue",
                    "merge right": "javascripts.directions.instructions.merge_right",
                    "merge left": "javascripts.directions.instructions.merge_left",
                    "off ramp right": "javascripts.directions.instructions.offramp_right",
                    "off ramp left": "javascripts.directions.instructions.offramp_left",
                    "on ramp right": "javascripts.directions.instructions.onramp_right",
                    "on ramp left": "javascripts.directions.instructions.onramp_left",
                    "fork right": "javascripts.directions.instructions.fork_right",
                    "fork left": "javascripts.directions.instructions.fork_left",
                    "end of road right": "javascripts.directions.instructions.endofroad_right",
                    "end of road left": "javascripts.directions.instructions.endofroad_left",
                    "turn straight": "javascripts.directions.instructions.continue",
                    "turn slight right": "javascripts.directions.instructions.slight_right",
                    "turn right": "javascripts.directions.instructions.turn_right",
                    "turn sharp right": "javascripts.directions.instructions.sharp_right",
                    "turn uturn": "javascripts.directions.instructions.uturn",
                    "turn sharp left": "javascripts.directions.instructions.sharp_left",
                    "turn left": "javascripts.directions.instructions.turn_left",
                    "turn slight left": "javascripts.directions.instructions.slight_left",
                    roundabout: "javascripts.directions.instructions.roundabout",
                    rotary: "javascripts.directions.instructions.roundabout",
                    depart: "javascripts.directions.instructions.start",
                    arrive: "javascripts.directions.instructions.destination"
                },
                o = {
                    "continue": 0,
                    "merge right": 21,
                    "merge left": 20,
                    "off ramp right": 24,
                    "off ramp left": 25,
                    "on ramp right": 2,
                    "on ramp left": 6,
                    "fork right": 18,
                    "fork left": 19,
                    "end of road right": 22,
                    "end of road left": 23,
                    "turn straight": 0,
                    "turn slight right": 1,
                    "turn right": 2,
                    "turn sharp right": 3,
                    "turn uturn": 4,
                    "turn slight left": 5,
                    "turn left": 6,
                    "turn sharp left": 7,
                    roundabout: 10,
                    rotary: 10,
                    depart: 8,
                    arrive: 14
                };
            return t.map(function(t, a) {
                var i;
                switch (t.maneuver.type) {
                    case "on ramp":
                    case "off ramp":
                    case "merge":
                    case "end of road":
                    case "fork":
                        i = t.maneuver.type + " " + (t.maneuver.modifier.indexOf("left") >= 0 ? "left" : "right");
                        break;
                    case "depart":
                    case "arrive":
                    case "roundabout":
                    case "rotary":
                        i = t.maneuver.type;
                        break;
                    case "roundabout turn":
                    case "turn":
                    default:
                        i = "turn " + t.maneuver.modifier
                }
                var r = n[i],
                    s = L.PolylineUtil.decode(t.geometry, {
                        precision: 5
                    }).map(function(t) {
                        return L.latLng(t)
                    });
                Array.prototype.push.apply(e, s);
                var c = "<b>" + (a + 1) + ".</b> ",
                    l = t.name ? "<b>" + t.name + "</b>" : I18n.t("javascripts.directions.instructions.unnamed");
                return t.maneuver.type.match(/rotary|roundabout/) ? c += I18n.t(r + "_with_exit", {
                    exit: t.maneuver.exit,
                    name: l
                }) : c += I18n.t(r + "_without_exit", {
                    name: l
                }), [
                    [t.maneuver.location[1], t.maneuver.location[0]], o[i], c, t.distance, s
                ]
            })
        },
        getRoute: function(e, n) {
            var o = [{
                name: "overview",
                value: "false"
            }, {
                name: "geometries",
                value: "polyline"
            }, {
                name: "steps",
                value: !0
            }];
            t.length === e.length ? o.push({
                name: "hints",
                value: t.join(";")
            }) : t = [];
            var a = e.map(function(t) {
                    return t.lng + "," + t.lat
                }).join(";"),
                i = document.location.protocol + OSM.OSRM_URL + a,
                r = function(e) {
                    if ("Ok" !== e.code) return n(!0);
                    t = e.waypoints.map(function(t) {
                        return t.hint
                    });
                    var o = [],
                        a = function(t) {
                            return this._transformSteps(t.steps, o)
                        },
                        i = [].concat.apply([], e.routes[0].legs.map(a.bind(this)));
                    n(!1, {
                        line: o,
                        steps: i,
                        distance: e.routes[0].distance,
                        time: e.routes[0].duration
                    })
                };
            return $.ajax({
                url: i,
                data: o,
                dataType: "json",
                success: r.bind(this),
                error: function() {
                    n(!0)
                }
            })
        }
    }
}
$(document).ready(function() {
        function t(t, e) {
            var n = !1,
                o = "https:" === document.location.protocol ? "https://127.0.0.1:8112/load_and_zoom?" : "http://127.0.0.1:8111/load_and_zoom?",
                a = {
                    left: t.getWest() - 1e-4,
                    top: t.getNorth() + 1e-4,
                    right: t.getEast() + 1e-4,
                    bottom: t.getSouth() - 1e-4
                };
            e && (a.select = e.type + e.id);
            var i = $("<iframe>").hide().appendTo("body").attr("src", o + querystring.stringify(a)).on("load", function() {
                $(this).remove(), n = !0
            });
            return setTimeout(function() {
                n || (alert(I18n.t("site.index.remote_failed")), i.remove())
            }, 1e3), !1
        }
        var e;
        OSM.loadSidebarContent = function(t, n) {
            o.setSidebarOverlaid(!1), clearTimeout(e), e = setTimeout(function() {
                $("#sidebar_loader").show()
            }, 200), t.indexOf("?") >= 0 ? t += "&xhr=1" : t += "?xhr=1", $("#sidebar_content").empty(), $.ajax({
                url: t,
                dataType: "html",
                complete: function(t) {
                    clearTimeout(e), $("#flash").empty(), $("#sidebar_loader").hide();
                    var o = $(t.responseText);
                    if (t.getResponseHeader("X-Page-Title")) {
                        var a = t.getResponseHeader("X-Page-Title");
                        document.title = decodeURIComponent(a)
                    }
                    $("head").find('link[type="application/atom+xml"]').remove(), $("head").append(o.filter('link[type="application/atom+xml"]')), $("#sidebar_content").html(o.not('link[type="application/atom+xml"]')), n && n()
                }
            })
        };
        var n = OSM.mapParams(),
            o = new L.OSM.Map("map", {
                zoomControl: !1,
                layerControl: !1,
                contextmenu: !0
            });
        o.attributionControl.setPrefix(""), o.updateLayers(n.layers), o.on("baselayerchange", function(t) {
            o.getZoom() > t.layer.options.maxZoom && o.setView(o.getCenter(), t.layer.options.maxZoom, {
                reset: !0
            })
        });
        var a = "rtl" === $("html").attr("dir") ? "topleft" : "topright";
        L.OSM.zoom({
            position: a
        }).addTo(o);
        var i = L.control.locate({
                position: a,
                icon: "icon geolocate",
                iconLoading: "icon geolocate",
                strings: {
                    title: I18n.t("javascripts.map.locate.title"),
                    popup: I18n.t("javascripts.map.locate.popup")
                }
            }).addTo(o),
            r = i.getContainer();
        $(r).removeClass("leaflet-control-locate leaflet-bar").addClass("control-locate").children("a").attr("href", "#").removeClass("leaflet-bar-part leaflet-bar-part-single").addClass("control-button");
        var s = L.OSM.sidebar("#map-ui").addTo(o);
        L.OSM.layers({
            position: a,
            layers: o.baseLayers,
            sidebar: s
        }).addTo(o), L.OSM.key({
            position: a,
            sidebar: s
        }).addTo(o), L.OSM.share({
            position: a,
            sidebar: s,
            "short": !0
        }).addTo(o), L.OSM.note({
            position: a,
            sidebar: s
        }).addTo(o), L.OSM.query({
            position: a,
            sidebar: s
        }).addTo(o), L.control.scale().addTo(o), OSM.initializeContextMenu(o), "api_offline" !== OSM.STATUS && "database_offline" !== OSM.STATUS && (OSM.initializeNotes(o), n.layers.indexOf(o.noteLayer.options.code) >= 0 && o.addLayer(o.noteLayer), OSM.initializeBrowse(o), n.layers.indexOf(o.dataLayer.options.code) >= 0 && o.addLayer(o.dataLayer), n.layers.indexOf(o.gpsLayer.options.code) >= 0 && o.addLayer(o.gpsLayer));
        var c = "rtl" === $("html").attr("dir") ? "right" : "left";
        $(".leaflet-control .control-button").tooltip({
            placement: c,
            container: "body"
        });
        var l = new Date;
        l.setYear(l.getFullYear() + 10), o.on("moveend layeradd layerremove", function() {
            updateLinks(o.getCenter().wrap(), o.getZoom(), o.getLayersCode(), o._object), $.removeCookie("_osm_location"), $.cookie("_osm_location", OSM.locationCookie(o), {
                expires: l,
                path: "/"
            })
        }), "hide" === $.cookie("_osm_welcome") && $(".welcome").hide(), $(".welcome .close-wrap").on("click", function() {
            $(".welcome").hide(), $.cookie("_osm_welcome", "hide", {
                expires: l,
                path: "/"
            })
        });
        var d = new Date;
        d.setYear(d.getFullYear() + 1), $("#banner .close-wrap").on("click", function(t) {
            var e = t.target.id;
            $("#banner").hide(), t.preventDefault(), e && $.cookie(e, "hide", {
                expires: d,
                path: "/"
            })
        }), OSM.PIWIK && o.on("layeradd", function(t) {
            if (t.layer.options) {
                var e = OSM.PIWIK.goals[t.layer.options.keyid];
                e && $("body").trigger("piwikgoal", e)
            }
        }), n.bounds ? o.fitBounds(n.bounds) : o.setView([n.lat, n.lon], n.zoom), n.marker && L.marker([n.mlat, n.mlon]).addTo(o), $("#homeanchor").on("click", function(t) {
            t.preventDefault();
            var e = $(this).data(),
                n = L.latLng(e.lat, e.lon);
            o.setView(n, e.zoom), L.marker(n, {
                icon: OSM.getUserIcon()
            }).addTo(o)
        }), $("a[data-editor=remote]").click(function(e) {
            var n = OSM.mapParams(this.search);
            t(o.getBounds(), n.object), e.preventDefault()
        }), OSM.params().edit_help && ($("#editanchor").removeAttr("title").tooltip({
            placement: "bottom",
            title: I18n.t("javascripts.edit_help")
        }).tooltip("show"), $("body").one("click", function() {
            $("#editanchor").tooltip("hide")
        })), OSM.Index = function(t) {
            var e = {};
            return e.pushstate = e.popstate = function() {
                t.setSidebarOverlaid(!0), document.title = I18n.t("layouts.project_name.title")
            }, e.load = function() {
                var e = querystring.parse(location.search.substring(1));
                return e.query && $("#sidebar .search_form input[name=query]").value(e.query), "autofocus" in document.createElement("input") || $("#sidebar .search_form input[name=query]").focus(), t.getState()
            }, e
        }, OSM.Browse = function(t, e) {
            function n(e, n, o) {
                t.addObject({
                    type: e,
                    id: parseInt(n)
                }, function(e) {
                    window.location.hash || !e.isValid() || !o && t.getBounds().contains(e) || OSM.router.withoutMoveListener(function() {
                        t.fitBounds(e)
                    })
                })
            }
            var o = {};
            return o.pushstate = o.popstate = function(t, o) {
                OSM.loadSidebarContent(t, function() {
                    n(e, o)
                })
            }, o.load = function(t, o) {
                n(e, o, !0)
            }, o.unload = function() {
                t.removeObject()
            }, o
        };
        var u = OSM.History(o);
        OSM.router = OSM.Router(o, {
            "/": OSM.Index(o),
            "/search": OSM.Search(o),
            "/directions": OSM.Directions(o),
            "/export": OSM.Export(o),
            "/note/new": OSM.NewNote(o),
            "/history/friends": u,
            "/history/nearby": u,
            "/history": u,
            "/user/:display_name/history": u,
            "/note/:id": OSM.Note(o),
            "/node/:id(/history)": OSM.Browse(o, "node"),
            "/way/:id(/history)": OSM.Browse(o, "way"),
            "/relation/:id(/history)": OSM.Browse(o, "relation"),
            "/changeset/:id": OSM.Changeset(o),
            "/query": OSM.Query(o)
        }), "remote" === OSM.preferred_editor && "/edit" === document.location.pathname && (t(o.getBounds(), n.object), OSM.router.setCurrentPath("/")), OSM.router.load(), $(document).on("click", "a", function(t) {
            t.isDefaultPrevented() || t.isPropagationStopped() || t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || location.protocol === this.protocol && location.host === this.host && OSM.router.route(this.pathname + this.search + this.hash) && t.preventDefault()
        })
    }), L.OSM.sidebar = function(t) {
        var e, n = {},
            o = $(t),
            a = $(),
            i = $();
        return n.addTo = function(t) {
            return e = t, n
        }, n.addPane = function(t) {
            t.hide().appendTo(o)
        }, n.togglePane = function(t, n) {
            a.hide().trigger("hide"), i.removeClass("active"), a === t ? ($(o).hide(), a = i = $()) : ($(o).show(), a = t, i = n || $()), e.invalidateSize({
                pan: !1,
                animate: !1
            }), a.show().trigger("show"), i.addClass("active")
        }, n
    },
    function(t, e) {
        "function" == typeof define && define.amd ? define(["leaflet"], t) : "object" == typeof exports && (void 0 !== e && e.L ? module.exports = t(L) : module.exports = t(require("leaflet"))), void 0 !== e && e.L && (e.L.Control.Locate = t(L))
    }(function(t) {
        var e = function(e, n, o) {
                o = o.split(" "), o.forEach(function(o) {
                    t.DomUtil[e].call(this, n, o)
                })
            },
            n = function(t, n) {
                e("addClass", t, n)
            },
            o = function(t, n) {
                e("removeClass", t, n)
            },
            a = t.Control.extend({
                options: {
                    position: "topleft",
                    layer: undefined,
                    setView: "untilPan",
                    keepCurrentZoomLevel: !1,
                    flyTo: !1,
                    clickBehavior: {
                        inView: "stop",
                        outOfView: "setView"
                    },
                    returnToPrevBounds: !1,
                    cacheLocation: !0,
                    drawCircle: !0,
                    drawMarker: !0,
                    markerClass: t.CircleMarker,
                    circleStyle: {
                        color: "#136AEC",
                        fillColor: "#136AEC",
                        fillOpacity: .15,
                        weight: 2,
                        opacity: .5
                    },
                    markerStyle: {
                        color: "#136AEC",
                        fillColor: "#2A93EE",
                        fillOpacity: .7,
                        weight: 2,
                        opacity: .9,
                        radius: 5
                    },
                    followCircleStyle: {},
                    followMarkerStyle: {},
                    icon: "fa fa-map-marker",
                    iconLoading: "fa fa-spinner fa-spin",
                    iconElementTag: "span",
                    circlePadding: [0, 0],
                    metric: !0,
                    createButtonCallback: function(e, n) {
                        var o = t.DomUtil.create("a", "leaflet-bar-part leaflet-bar-part-single", e);
                        return o.title = n.strings.title, {
                            link: o,
                            icon: t.DomUtil.create(n.iconElementTag, n.icon, o)
                        }
                    },
                    onLocationError: function(t) {
                        alert(t.message)
                    },
                    onLocationOutsideMapBounds: function(t) {
                        t.stop(), alert(t.options.strings.outsideMapBoundsMsg)
                    },
                    showPopup: !0,
                    strings: {
                        title: "Show me where I am",
                        metersUnit: "meters",
                        feetUnit: "feet",
                        popup: "You are within {distance} {unit} from this point",
                        outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
                    },
                    locateOptions: {
                        maxZoom: Infinity,
                        watch: !0,
                        setView: !1
                    }
                },
                initialize: function(e) {
                    for (var n in e) "object" == typeof this.options[n] ? t.extend(this.options[n], e[n]) : this.options[n] = e[n];
                    this.options.followMarkerStyle = t.extend({}, this.options.markerStyle, this.options.followMarkerStyle), this.options.followCircleStyle = t.extend({}, this.options.circleStyle, this.options.followCircleStyle)
                },
                onAdd: function(e) {
                    var n = t.DomUtil.create("div", "leaflet-control-locate leaflet-bar leaflet-control");
                    this._layer = this.options.layer || new t.LayerGroup, this._layer.addTo(e), this._event = undefined, this._prevBounds = null;
                    var o = this.options.createButtonCallback(n, this.options);
                    return this._link = o.link, this._icon = o.icon, t.DomEvent.on(this._link, "click", t.DomEvent.stopPropagation).on(this._link, "click", t.DomEvent.preventDefault).on(this._link, "click", this._onClick, this).on(this._link, "dblclick", t.DomEvent.stopPropagation), this._resetVariables(), this._map.on("unload", this._unload, this), n
                },
                _onClick: function() {
                    if (this._justClicked = !0, this._userPanned = !1, this._active && !this._event) this.stop();
                    else if (this._active && this._event !== undefined) {
                        var t = this._map.getBounds().contains(this._event.latlng) ? this.options.clickBehavior.inView : this.options.clickBehavior.outOfView;
                        switch (t) {
                            case "setView":
                                this.setView();
                                break;
                            case "stop":
                                if (this.stop(), this.options.returnToPrevBounds) {
                                    var e = this.options.flyTo ? this._map.flyToBounds : this._map.fitBounds;
                                    e.bind(this._map)(this._prevBounds)
                                }
                        }
                    } else this.options.returnToPrevBounds && (this._prevBounds = this._map.getBounds()), this.start();
                    this._updateContainerStyle()
                },
                start: function() {
                    this._activate(), this._event && (this._drawMarker(this._map), this.options.setView && this.setView()), this._updateContainerStyle()
                },
                stop: function() {
                    this._deactivate(), this._cleanClasses(), this._resetVariables(), this._removeMarker()
                },
                _activate: function() {
                    this._active || (this._map.locate(this.options.locateOptions), this._active = !0, this._map.on("locationfound", this._onLocationFound, this), this._map.on("locationerror", this._onLocationError, this), this._map.on("dragstart", this._onDrag, this))
                },
                _deactivate: function() {
                    this._map.stopLocate(), this._active = !1, this.options.cacheLocation || (this._event = undefined), this._map.off("locationfound", this._onLocationFound, this), this._map.off("locationerror", this._onLocationError, this), this._map.off("dragstart", this._onDrag, this)
                },
                setView: function() {
                    if (this._drawMarker(), this._isOutsideMapBounds()) this._event = undefined, this.options.onLocationOutsideMapBounds(this);
                    else if (this.options.keepCurrentZoomLevel) {
                        var t = this.options.flyTo ? this._map.flyTo : this._map.panTo;
                        t.bind(this._map)([this._event.latitude, this._event.longitude])
                    } else {
                        var t = this.options.flyTo ? this._map.flyToBounds : this._map.fitBounds;
                        t.bind(this._map)(this._event.bounds, {
                            padding: this.options.circlePadding,
                            maxZoom: this.options.locateOptions.maxZoom
                        })
                    }
                },
                _drawMarker: function() {
                    this._event.accuracy === undefined && (this._event.accuracy = 0);
                    var e = this._event.accuracy,
                        n = this._event.latlng;
                    if (this.options.drawCircle) {
                        var o = this._isFollowing() ? this.options.followCircleStyle : this.options.circleStyle;
                        this._circle ? this._circle.setLatLng(n).setRadius(e).setStyle(o) : this._circle = t.circle(n, e, o).addTo(this._layer)
                    }
                    var a, i;
                    if (this.options.metric ? (a = e.toFixed(0), i = this.options.strings.metersUnit) : (a = (3.2808399 * e).toFixed(0), i = this.options.strings.feetUnit), this.options.drawMarker) {
                        var r = this._isFollowing() ? this.options.followMarkerStyle : this.options.markerStyle;
                        this._marker ? (this._marker.setLatLng(n), this._marker.setStyle && this._marker.setStyle(r)) : this._marker = new this.options.markerClass(n, r).addTo(this._layer)
                    }
                    var s = this.options.strings.popup;
                    this.options.showPopup && s && this._marker && this._marker.bindPopup(t.Util.template(s, {
                        distance: a,
                        unit: i
                    }))._popup.setLatLng(n)
                },
                _removeMarker: function() {
                    this._layer.clearLayers(), this._marker = undefined, this._circle = undefined
                },
                _unload: function() {
                    this.stop(), this._map.off("unload", this._unload, this)
                },
                _onLocationError: function(t) {
                    3 == t.code && this.options.locateOptions.watch || (this.stop(), this.options.onLocationError(t, this))
                },
                _onLocationFound: function(t) {
                    if ((!this._event || this._event.latlng.lat !== t.latlng.lat || this._event.latlng.lng !== t.latlng.lng || this._event.accuracy !== t.accuracy) && this._active) {
                        switch (this._event = t, this._drawMarker(), this._updateContainerStyle(), this.options.setView) {
                            case "once":
                                this._justClicked && this.setView();
                                break;
                            case "untilPan":
                                this._userPanned || this.setView();
                                break;
                            case "always":
                                this.setView()
                        }
                        this._justClicked = !1
                    }
                },
                _onDrag: function() {
                    this._event && (this._userPanned = !0, this._updateContainerStyle(), this._drawMarker())
                },
                _isFollowing: function() {
                    return !!this._active && ("always" === this.options.setView || ("untilPan" === this.options.setView ? !this._userPanned : void 0))
                },
                _isOutsideMapBounds: function() {
                    return this._event !== undefined && (this._map.options.maxBounds && !this._map.options.maxBounds.contains(this._event.latlng))
                },
                _updateContainerStyle: function() {
                    this._container && (this._active && !this._event ? this._setClasses("requesting") : this._isFollowing() ? this._setClasses("following") : this._active ? this._setClasses("active") : this._cleanClasses())
                },
                _setClasses: function(t) {
                    "requesting" == t ? (o(this._container, "active following"), n(this._container, "requesting"), o(this._icon, this.options.icon), n(this._icon, this.options.iconLoading)) : "active" == t ? (o(this._container, "requesting following"), n(this._container, "active"), o(this._icon, this.options.iconLoading), n(this._icon, this.options.icon)) : "following" == t && (o(this._container, "requesting"), n(this._container, "active following"), o(this._icon, this.options.iconLoading), n(this._icon, this.options.icon))
                },
                _cleanClasses: function() {
                    t.DomUtil.removeClass(this._container, "requesting"), t.DomUtil.removeClass(this._container, "active"), t.DomUtil.removeClass(this._container, "following"), o(this._icon, this.options.iconLoading), n(this._icon, this.options.icon)
                },
                _resetVariables: function() {
                    this._active = !1, this._justClicked = !1, this._userPanned = !1
                }
            });
        return t.control.locate = function(e) {
            return new t.Control.Locate(e)
        }, a
    }, window), L.OSM.layers = function(t) {
        var e = L.control(t);
        return e.onAdd = function(e) {
            function n(e) {
                e.stopPropagation(), e.preventDefault(), t.sidebar.togglePane(r, i), $(".leaflet-control .control-button").tooltip("hide")
            }
            var o = t.layers,
                a = $("<div>").attr("class", "control-layers"),
                i = $("<a>").attr("class", "control-button").attr("href", "#").attr("title", I18n.t("javascripts.map.layers.title")).html('<span class="icon layers"></span>').on("click", n).appendTo(),
                r = $("<div>").attr("class", "layers-ui");
            $("<div>").attr("class", "sidebar_heading").appendTo(r).append($("<span>").text(I18n.t("javascripts.close")).attr("class", "icon close").bind("click", n)).append($("<h4>").text(I18n.t("javascripts.map.layers.header")));
            var s = $("<div>").attr("class", "section base-layers").appendTo(r),
                c = $("<ul>").appendTo(s);
            if (o.forEach(function(t) {
                    var a = $("<li>").appendTo(c);
                    e.hasLayer(t) && a.addClass("active");
                    var i = $("<div>").appendTo(a);
                    e.whenReady(function() {
                        function n() {
                            c.invalidateSize(), s({
                                animate: !1
                            }), e.on("moveend", a)
                        }

                        function o() {
                            e.off("moveend", a)
                        }

                        function a() {
                            s()
                        }

                        function s(t) {
                            c.setView(e.getCenter(), Math.max(e.getZoom() - 2, 0), t)
                        }
                        var c = L.map(i[0], {
                            attributionControl: !1,
                            zoomControl: !1,
                            keyboard: !1
                        }).addLayer(new t.constructor({
                            apikey: t.options.apikey
                        }));
                        c.dragging.disable(), c.touchZoom.disable(), c.doubleClickZoom.disable(), c.scrollWheelZoom.disable(), r.on("show", n).on("hide", o)
                    });
                    var s = $("<label>").appendTo(a),
                        l = $("<input>").attr("type", "radio").prop("checked", e.hasLayer(t)).appendTo(s);
                    s.append(t.options.name), a.on("click", function() {
                        o.forEach(function(n) {
                            n === t ? e.addLayer(n) : e.removeLayer(n)
                        }), e.fire("baselayerchange", {
                            layer: t
                        })
                    }), a.on("dblclick", n), e.on("layeradd layerremove", function() {
                        a.toggleClass("active", e.hasLayer(t)), l.prop("checked", e.hasLayer(t))
                    })
                }), "api_offline" !== OSM.STATUS && "database_offline" !== OSM.STATUS) {
                var l = $("<div>").attr("class", "section overlay-layers").appendTo(r);
                $("<p>").text(I18n.t("javascripts.map.layers.overlays")).attr("class", "deemphasize").appendTo(l);
                var d = $("<ul>").appendTo(l),
                    u = function(t, n, o) {
                        var a = $("<li>").tooltip({
                                placement: "top"
                            }).appendTo(d),
                            i = $("<label>").appendTo(a),
                            r = e.hasLayer(t),
                            s = $("<input>").attr("type", "checkbox").prop("checked", r).appendTo(i);
                        i.append(I18n.t("javascripts.map.layers." + n)), s.on("change", function() {
                            r = s.is(":checked"), r ? e.addLayer(t) : e.removeLayer(t), e.fire("overlaylayerchange", {
                                layer: t
                            })
                        }), e.on("layeradd layerremove", function() {
                            s.prop("checked", e.hasLayer(t))
                        }), e.on("zoomend", function() {
                            var t = e.getBounds().getSize() >= o;
                            $(s).prop("disabled", t), t && $(s).is(":checked") ? ($(s).prop("checked", !1).trigger("change"), r = !0) : t || $(s).is(":checked") || !r || $(s).prop("checked", !0).trigger("change"), $(a).attr("class", t ? "disabled" : ""), a.attr("data-original-title", t ? I18n.t("javascripts.site.map_" + n + "_zoom_in_tooltip") : "")
                        })
                    };
                u(e.noteLayer, "notes", OSM.MAX_NOTE_REQUEST_AREA), u(e.dataLayer, "data", OSM.MAX_REQUEST_AREA), u(e.gpsLayer, "gps", Number.POSITIVE_INFINITY)
            }
            return t.sidebar.addPane(r), a[0]
        }, e
    }, L.OSM.key = function(t) {
        var e = L.control(t);
        return e.onAdd = function(e) {
            function n() {
                e.on("zoomend baselayerchange", r), d.load("/key", r)
            }

            function o() {
                e.off("zoomend baselayerchange", r)
            }

            function a(e) {
                e.stopPropagation(), e.preventDefault(), c.hasClass("disabled") || t.sidebar.togglePane(l, c), $(".leaflet-control .control-button").tooltip("hide")
            }

            function i() {
                var t = -1 === ["mapnik", "cyclemap"].indexOf(e.getMapBaseLayerId());
                c.toggleClass("disabled", t).attr("data-original-title", I18n.t(t ? "javascripts.key.tooltip_disabled" : "javascripts.key.tooltip"))
            }

            function r() {
                var t = e.getMapBaseLayerId(),
                    n = e.getZoom();
                $(".mapkey-table-entry").each(function() {
                    var e = $(this).data();
                    t === e.layer && n >= e.zoomMin && n <= e.zoomMax ? $(this).show() : $(this).hide()
                })
            }
            var s = $("<div>").attr("class", "control-key"),
                c = $("<a>").attr("class", "control-button").attr("href", "#").html('<span class="icon key"></span>').on("click", a).appendTo(),
                l = $("<div>").attr("class", "key-ui");
            $("<div>").attr("class", "sidebar_heading").appendTo(l).append($("<span>").text(I18n.t("javascripts.close")).attr("class", "icon close").bind("click", a)).append($("<h4>").text(I18n.t("javascripts.key.title")));
            var d = $("<div>").attr("class", "section").appendTo(l);
            return t.sidebar.addPane(l), l.on("show", n).on("hide", o), e.on("baselayerchange", i), i(), s[0]
        }, e
    }, L.OSM.note = function(t) {
        var e = L.control(t);
        return e.onAdd = function(t) {
            function e() {
                var e = "database_offline" === OSM.STATUS || t.getZoom() < 12;
                o.toggleClass("disabled", e).attr("data-original-title", I18n.t(e ? "javascripts.site.createnote_disabled_tooltip" : "javascripts.site.createnote_tooltip"))
            }
            var n = $("<div>").attr("class", "control-note"),
                o = $("<a>").attr("class", "control-button").attr("href", "#").html('<span class="icon note"></span>').appendTo();
            return t.on("zoomend", e), e(), n[0]
        }, e
    }, L.OSM.share = function(t) {
        var e = L.control(t),
            n = L.marker([0, 0], {
                draggable: !0
            }),
            o = new L.LocationFilter({
                enableButton: !1,
                adjustButton: !1
            });
        return e.onAdd = function(e) {
            function a() {
                e.removeLayer(n), e.options.scrollWheelZoom = e.options.doubleClickZoom = !0, o.disable(), p()
            }

            function i(o) {
                o.stopPropagation(), o.preventDefault(), $("#mapnik_scale").val(m()), n.setLatLng(e.getCenter()), p(), t.sidebar.togglePane(_, g), $(".leaflet-control .control-button").tooltip("hide")
            }

            function r() {
                $(this).is(":checked") ? (n.setLatLng(e.getCenter()), e.addLayer(n), e.options.scrollWheelZoom = e.options.doubleClickZoom = "center") : (e.removeLayer(n), e.options.scrollWheelZoom = e.options.doubleClickZoom = !0), p()
            }

            function s() {
                $(this).is(":checked") ? (o.setBounds(e.getBounds().pad(-.2)), o.enable()) : o.disable(), p()
            }

            function c() {
                n.setLatLng(e.getCenter()), p()
            }

            function l() {
                e.hasLayer(n) && (e.off("move", c), e.on("moveend", d), e.panTo(n.getLatLng()))
            }

            function d() {
                e.off("moveend", d), e.on("move", c), p()
            }

            function u(t) {
                var e = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;"
                };
                return null === t ? "" : (t + "").replace(/[&<>"']/g, function(t) {
                    return e[t]
                })
            }

            function p() {
                var t = e.getBounds();
                $("#link_marker").prop("checked", e.hasLayer(n)), $("#image_filter").prop("checked", o.isEnabled()), $("#short_input").val(e.getShortUrl(n)), $("#long_input").val(e.getUrl(n)), $("#short_link").attr("href", e.getShortUrl(n)), $("#long_link").attr("href", e.getUrl(n));
                var a = {
                    bbox: t.toBBoxString(),
                    layer: e.getMapBaseLayerId()
                };
                if (e.hasLayer(n)) {
                    var i = n.getLatLng().wrap();
                    a.marker = i.lat + "," + i.lng
                }
                $("#embed_html").val('<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' + u("http://" + OSM.SERVER_URL + "/export/embed.html?" + $.param(a)) + '" style="border: 1px solid black"></iframe><br/><small><a href="' + u(e.getUrl(n)) + '">' + u(I18n.t("javascripts.share.view_larger_map")) + "</a></small>"), $("#geo_uri").attr("href", e.getGeoUri(n)).html(e.getGeoUri(n)), o.isEnabled() && (t = o.getBounds());
                var r = $("#mapnik_scale").val(),
                    s = L.bounds(L.CRS.EPSG3857.project(t.getSouthWest()), L.CRS.EPSG3857.project(t.getNorthEast())).getSize(),
                    c = Math.floor(Math.sqrt(s.x * s.y / .3136));
                $("#mapnik_minlon").val(t.getWest()), $("#mapnik_minlat").val(t.getSouth()), $("#mapnik_maxlon").val(t.getEast()), $("#mapnik_maxlat").val(t.getNorth()), r < c && (r = f(c), $("#mapnik_scale").val(r)), $("#mapnik_image_width").text(Math.round(s.x / r / 28e-5)), $("#mapnik_image_height").text(Math.round(s.y / r / 28e-5)), "mapnik" === e.getMapBaseLayerId() ? ($("#export-image").show(), $("#export-warning").hide()) : ($("#export-image").hide(), $("#export-warning").show())
            }

            function h() {
                $(this).select()
            }

            function m() {
                var t = e.getBounds(),
                    n = t.getCenter().lat,
                    o = 6378137 * Math.PI * Math.cos(n * Math.PI / 180),
                    a = o * (t.getEast() - t.getWest()) / 180,
                    i = e.getSize().x / a,
                    r = 1 / 3622.0492;
                return Math.round(1 / (i * r))
            }

            function f(t) {
                var e = 5 * Math.pow(10, Math.floor(Math.LOG10E * Math.log(t)) - 2);
                return e * Math.ceil(t / e)
            }
            var v = $("<div>").attr("class", "control-share"),
                g = $("<a>").attr("class", "control-button").attr("href", "#").attr("title", I18n.t("javascripts.share.title")).html('<span class="icon share"></span>').on("click", i).appendTo(),
                _ = $("<div>").attr("class", "share-ui");
            $("<div>").attr("class", "sidebar_heading").appendTo(_).append($("<span>").text(I18n.t("javascripts.close")).attr("class", "icon close").bind("click", i)).append($("<h4>").text(I18n.t("javascripts.share.title")));
            var y = $("<div>").attr("class", "section share-link").appendTo(_);
            $("<h4>").text(I18n.t("javascripts.share.link")).appendTo(y);
            var b = $("<form>").attr("class", "standard-form").appendTo(y);
            $("<div>").attr("class", "form-row").appendTo(b).append($("<label>").attr("for", "link_marker").append($("<input>").attr("id", "link_marker").attr("type", "checkbox").bind("change", r)).append(I18n.t("javascripts.share.include_marker"))), $("<div>").attr("class", "share-tabs").appendTo(b).append($("<a>").attr("class", "active").attr("for", "long_input").attr("id", "long_link").text(I18n.t("javascripts.share.long_link"))).append($("<a>").attr("for", "short_input").attr("id", "short_link").text(I18n.t("javascripts.share.short_link"))).append($("<a>").attr("for", "embed_html").attr("href", "#").text(I18n.t("javascripts.share.embed"))).on("click", "a", function(t) {
                t.preventDefault();
                var e = "#" + $(this).attr("for");
                y.find(".share-tabs a").removeClass("active"), $(this).addClass("active"), y.find(".share-tab").hide(), y.find(".share-tab:has(" + e + ")").show().find("input, textarea").select()
            }), $("<div>").attr("class", "form-row share-tab").css("display", "block").appendTo(b).append($("<input>").attr("id", "long_input").attr("type", "text").on("click", h)), $("<div>").attr("class", "form-row share-tab").appendTo(b).append($("<input>").attr("id", "short_input").attr("type", "text").on("click", h)), $("<div>").attr("class", "form-row share-tab").appendTo(b).append($("<textarea>").attr("id", "embed_html").on("click", h)).append($("<p>").attr("class", "deemphasize").text(I18n.t("javascripts.share.paste_html")).appendTo(y));
            var x = $("<div>").attr("class", "section share-geo-uri").appendTo(_);
            $("<h4>").text(I18n.t("javascripts.share.geo_uri")).appendTo(x), $("<div>").appendTo(x).append($("<a>").attr("id", "geo_uri"));
            var M = $("<div>").attr("class", "section share-image").appendTo(_);
            $("<h4>").text(I18n.t("javascripts.share.image")).appendTo(M), $("<div>").attr("id", "export-warning").attr("class", "deemphasize").text(I18n.t("javascripts.share.only_standard_layer")).appendTo(M), b = $("<form>").attr("id", "export-image").attr("class", "standard-form").attr("action", "/export/finish").attr("method", "post").appendTo(M), $("<div>").attr("class", "form-row").appendTo(b).append($("<label>").attr("for", "image_filter").append($("<input>").attr("id", "image_filter").attr("type", "checkbox").bind("change", s)).append(I18n.t("javascripts.share.custom_dimensions"))), $("<div>").attr("class", "form-row").appendTo(b).append($("<label>").attr("for", "mapnik_format").text(I18n.t("javascripts.share.format"))).append($("<select>").attr("name", "mapnik_format").attr("id", "mapnik_format").append($("<option>").val("png").text("PNG").prop("selected", !0)).append($("<option>").val("jpeg").text("JPEG")).append($("<option>").val("svg").text("SVG")).append($("<option>").val("pdf").text("PDF"))), $("<div>").attr("class", "form-row").appendTo(b).append($("<label>").attr("for", "mapnik_scale").text(I18n.t("javascripts.share.scale"))).append("1 : ").append($("<input>").attr("name", "mapnik_scale").attr("id", "mapnik_scale").attr("type", "text").on("change", p)), ["minlon", "minlat", "maxlon", "maxlat"].forEach(function(t) {
                $("<input>").attr("id", "mapnik_" + t).attr("name", t).attr("type", "hidden").appendTo(b)
            }), $("<input>").attr("name", "format").attr("value", "mapnik").attr("type", "hidden").appendTo(b);
            var S = $("meta[name=csrf-param]").attr("content"),
                w = $("meta[name=csrf-token]").attr("content");
            return $("<input>").attr("name", S).attr("value", w).attr("type", "hidden").appendTo(b), $("<p>").attr("class", "deemphasize").html(I18n.t("javascripts.share.image_size") + ' <span id="mapnik_image_width"></span> x <span id="mapnik_image_height"></span>').appendTo(b), $("<input>").attr("type", "submit").attr("value", I18n.t("javascripts.share.download")).appendTo(b), o.on("change", p).addTo(e), n.on("dragend", l), e.on("move", c), e.on("moveend layeradd layerremove", p), t.sidebar.addPane(_), _.on("hide", a), v[0]
        }, e
    },
    function() {
        "use strict";
        var t = function(t) {
                return t = "number" == typeof t ? {
                        precision: t
                    } : t || {}, t.precision = t.precision || 5, t.factor = t.factor || Math.pow(10, t.precision),
                    t.dimension = t.dimension || 2, t
            },
            e = {
                encode: function(e, n) {
                    n = t(n);
                    for (var o = [], a = 0, i = e.length; a < i; ++a) {
                        var r = e[a];
                        if (2 === n.dimension) o.push(r.lat || r[0]), o.push(r.lng || r[1]);
                        else
                            for (var s = 0; s < n.dimension; ++s) o.push(r[s])
                    }
                    return this.encodeDeltas(o, n)
                },
                decode: function(e, n) {
                    n = t(n);
                    for (var o = this.decodeDeltas(e, n), a = [], i = 0, r = o.length; i + (n.dimension - 1) < r;) {
                        for (var s = [], c = 0; c < n.dimension; ++c) s.push(o[i++]);
                        a.push(s)
                    }
                    return a
                },
                encodeDeltas: function(e, n) {
                    n = t(n);
                    for (var o = [], a = 0, i = e.length; a < i;)
                        for (var r = 0; r < n.dimension; ++r, ++a) {
                            var s = e[a],
                                c = s - (o[r] || 0);
                            o[r] = s, e[a] = c
                        }
                    return this.encodeFloats(e, n)
                },
                decodeDeltas: function(e, n) {
                    n = t(n);
                    for (var o = [], a = this.decodeFloats(e, n), i = 0, r = a.length; i < r;)
                        for (var s = 0; s < n.dimension; ++s, ++i) a[i] = Math.round((o[s] = a[i] + (o[s] || 0)) * n.factor) / n.factor;
                    return a
                },
                encodeFloats: function(e, n) {
                    n = t(n);
                    for (var o = 0, a = e.length; o < a; ++o) e[o] = Math.round(e[o] * n.factor);
                    return this.encodeSignedIntegers(e)
                },
                decodeFloats: function(e, n) {
                    n = t(n);
                    for (var o = this.decodeSignedIntegers(e), a = 0, i = o.length; a < i; ++a) o[a] /= n.factor;
                    return o
                },
                encodeSignedIntegers: function(t) {
                    for (var e = 0, n = t.length; e < n; ++e) {
                        var o = t[e];
                        t[e] = o < 0 ? ~(o << 1) : o << 1
                    }
                    return this.encodeUnsignedIntegers(t)
                },
                decodeSignedIntegers: function(t) {
                    for (var e = this.decodeUnsignedIntegers(t), n = 0, o = e.length; n < o; ++n) {
                        var a = e[n];
                        e[n] = 1 & a ? ~(a >> 1) : a >> 1
                    }
                    return e
                },
                encodeUnsignedIntegers: function(t) {
                    for (var e = "", n = 0, o = t.length; n < o; ++n) e += this.encodeUnsignedInteger(t[n]);
                    return e
                },
                decodeUnsignedIntegers: function(t) {
                    for (var e = [], n = 0, o = 0, a = 0, i = t.length; a < i; ++a) {
                        var r = t.charCodeAt(a) - 63;
                        n |= (31 & r) << o, r < 32 ? (e.push(n), n = 0, o = 0) : o += 5
                    }
                    return e
                },
                encodeSignedInteger: function(t) {
                    return t = t < 0 ? ~(t << 1) : t << 1, this.encodeUnsignedInteger(t)
                },
                encodeUnsignedInteger: function(t) {
                    for (var e, n = ""; t >= 32;) e = 63 + (32 | 31 & t), n += String.fromCharCode(e), t >>= 5;
                    return e = t + 63, n += String.fromCharCode(e)
                }
            };
        if ("object" == typeof module && "object" == typeof module.exports && (module.exports = e), "object" == typeof L) {
            L.Polyline.prototype.fromEncoded || (L.Polyline.fromEncoded = function(t, n) {
                return L.polyline(e.decode(t), n)
            }), L.Polygon.prototype.fromEncoded || (L.Polygon.fromEncoded = function(t, n) {
                return L.polygon(e.decode(t), n)
            });
            var n = {
                encodePath: function() {
                    return e.encode(this.getLatLngs())
                }
            };
            L.Polyline.prototype.encodePath || L.Polyline.include(n), L.Polygon.prototype.encodePath || L.Polygon.include(n), L.PolylineUtil = e
        }
    }(), L.OSM.query = function(t) {
        var e = L.control(t);
        return e.onAdd = function(t) {
            function e() {
                var e = o.hasClass("disabled"),
                    n = t.getZoom() < 14;
                o.toggleClass("disabled", n).attr("data-original-title", I18n.t(n ? "javascripts.site.queryfeature_disabled_tooltip" : "javascripts.site.queryfeature_tooltip")), n && !e ? o.trigger("disabled") : e && !n && o.trigger("enabled")
            }
            var n = $("<div>").attr("class", "control-query"),
                o = $("<a>").attr("class", "control-button").attr("href", "#").html('<span class="icon query"></span>').appendTo();
            return t.on("zoomend", e), e(), n[0]
        }, e
    },
    function(t) {
        var e;
        if ("function" == typeof define && define.amd) define(["leaflet"], t);
        else if ("object" == typeof module && "object" == typeof module.exports) e = require("leaflet"), module.exports = t(e);
        else {
            if ("undefined" == typeof window.L) throw new Error("Leaflet must be loaded first");
            t(window.L)
        }
    }(function(t) {
        t.Map.mergeOptions({
            contextmenuItems: []
        }), t.Map.ContextMenu = t.Handler.extend({
            _touchstart: t.Browser.msPointer ? "MSPointerDown" : t.Browser.pointer ? "pointerdown" : "touchstart",
            statics: {
                BASE_CLS: "leaflet-contextmenu"
            },
            initialize: function(e) {
                t.Handler.prototype.initialize.call(this, e), this._items = [], this._visible = !1;
                var n = this._container = t.DomUtil.create("div", t.Map.ContextMenu.BASE_CLS, e._container);
                n.style.zIndex = 1e4, n.style.position = "absolute", e.options.contextmenuWidth && (n.style.width = e.options.contextmenuWidth + "px"), this._createItems(), t.DomEvent.on(n, "click", t.DomEvent.stop).on(n, "mousedown", t.DomEvent.stop).on(n, "dblclick", t.DomEvent.stop).on(n, "contextmenu", t.DomEvent.stop)
            },
            addHooks: function() {
                var e = this._map.getContainer();
                t.DomEvent.on(e, "mouseleave", this._hide, this).on(document, "keydown", this._onKeyDown, this), t.Browser.touch && t.DomEvent.on(document, this._touchstart, this._hide, this), this._map.on({
                    contextmenu: this._show,
                    mousedown: this._hide,
                    movestart: this._hide,
                    zoomstart: this._hide
                }, this)
            },
            removeHooks: function() {
                var e = this._map.getContainer();
                t.DomEvent.off(e, "mouseleave", this._hide, this).off(document, "keydown", this._onKeyDown, this), t.Browser.touch && t.DomEvent.off(document, this._touchstart, this._hide, this), this._map.off({
                    contextmenu: this._show,
                    mousedown: this._hide,
                    movestart: this._hide,
                    zoomstart: this._hide
                }, this)
            },
            showAt: function(e, n) {
                e instanceof t.LatLng && (e = this._map.latLngToContainerPoint(e)), this._showAtPoint(e, n)
            },
            hide: function() {
                this._hide()
            },
            addItem: function(t) {
                return this.insertItem(t)
            },
            insertItem: function(t, e) {
                e = e !== undefined ? e : this._items.length;
                var n = this._createItem(this._container, t, e);
                return this._items.push(n), this._sizeChanged = !0, this._map.fire("contextmenu.additem", {
                    contextmenu: this,
                    el: n.el,
                    index: e
                }), n.el
            },
            removeItem: function(e) {
                var n = this._container;
                isNaN(e) || (e = n.children[e]), e && (this._removeItem(t.Util.stamp(e)), this._sizeChanged = !0, this._map.fire("contextmenu.removeitem", {
                    contextmenu: this,
                    el: e
                }))
            },
            removeAllItems: function() {
                for (var e; this._container.children.length;) e = this._container.children[0], this._removeItem(t.Util.stamp(e))
            },
            hideAllItems: function() {
                var t, e, n;
                for (e = 0, n = this._items.length; e < n; e++) t = this._items[e], t.el.style.display = "none"
            },
            showAllItems: function() {
                var t, e, n;
                for (e = 0, n = this._items.length; e < n; e++) t = this._items[e], t.el.style.display = ""
            },
            setDisabled: function(e, n) {
                var o = this._container,
                    a = t.Map.ContextMenu.BASE_CLS + "-item";
                isNaN(e) || (e = o.children[e]), e && t.DomUtil.hasClass(e, a) && (n ? (t.DomUtil.addClass(e, a + "-disabled"), this._map.fire("contextmenu.disableitem", {
                    contextmenu: this,
                    el: e
                })) : (t.DomUtil.removeClass(e, a + "-disabled"), this._map.fire("contextmenu.enableitem", {
                    contextmenu: this,
                    el: e
                })))
            },
            isVisible: function() {
                return this._visible
            },
            _createItems: function() {
                var t, e, n = this._map.options.contextmenuItems;
                for (t = 0, e = n.length; t < e; t++) this._items.push(this._createItem(this._container, n[t]))
            },
            _createItem: function(e, n, o) {
                if (n.separator || "-" === n) return this._createSeparator(e, o);
                var a = t.Map.ContextMenu.BASE_CLS + "-item",
                    i = n.disabled ? a + " " + a + "-disabled" : a,
                    r = this._insertElementAt("a", i, e, o),
                    s = this._createEventHandler(r, n.callback, n.context, n.hideOnSelect),
                    c = this._getIcon(n),
                    l = this._getIconCls(n),
                    d = "";
                return c ? d = '<img class="' + t.Map.ContextMenu.BASE_CLS + '-icon" src="' + c + '"/>' : l && (d = '<span class="' + t.Map.ContextMenu.BASE_CLS + "-icon " + l + '"></span>'), r.innerHTML = d + n.text, r.href = "#", t.DomEvent.on(r, "mouseover", this._onItemMouseOver, this).on(r, "mouseout", this._onItemMouseOut, this).on(r, "mousedown", t.DomEvent.stopPropagation).on(r, "click", s), t.Browser.touch && t.DomEvent.on(r, this._touchstart, t.DomEvent.stopPropagation), t.Browser.pointer || t.DomEvent.on(r, "click", this._onItemMouseOut, this), {
                    id: t.Util.stamp(r),
                    el: r,
                    callback: s
                }
            },
            _removeItem: function(e) {
                var n, o, a, i, r;
                for (a = 0, i = this._items.length; a < i; a++)
                    if (n = this._items[a], n.id === e) return o = n.el, r = n.callback, r && (t.DomEvent.off(o, "mouseover", this._onItemMouseOver, this).off(o, "mouseover", this._onItemMouseOut, this).off(o, "mousedown", t.DomEvent.stopPropagation).off(o, "click", r), t.Browser.touch && t.DomEvent.off(o, this._touchstart, t.DomEvent.stopPropagation), t.Browser.pointer || t.DomEvent.on(o, "click", this._onItemMouseOut, this)), this._container.removeChild(o), this._items.splice(a, 1), n;
                return null
            },
            _createSeparator: function(e, n) {
                var o = this._insertElementAt("div", t.Map.ContextMenu.BASE_CLS + "-separator", e, n);
                return {
                    id: t.Util.stamp(o),
                    el: o
                }
            },
            _createEventHandler: function(e, n, o, a) {
                var i = this,
                    r = this._map,
                    s = t.Map.ContextMenu.BASE_CLS + "-item-disabled",
                    a = a === undefined || a;
                return function() {
                    t.DomUtil.hasClass(e, s) || (a && i._hide(), n && n.call(o || r, i._showLocation), i._map.fire("contextmenu:select", {
                        contextmenu: i,
                        el: e
                    }))
                }
            },
            _insertElementAt: function(t, e, n, o) {
                var a, i = document.createElement(t);
                return i.className = e, o !== undefined && (a = n.children[o]), a ? n.insertBefore(i, a) : n.appendChild(i), i
            },
            _show: function(t) {
                this._showAtPoint(t.containerPoint, t)
            },
            _showAtPoint: function(e, n) {
                if (this._items.length) {
                    var o = this._map,
                        a = o.containerPointToLayerPoint(e),
                        i = o.layerPointToLatLng(a),
                        r = t.extend(n || {}, {
                            contextmenu: this
                        });
                    this._showLocation = {
                        latlng: i,
                        layerPoint: a,
                        containerPoint: e
                    }, n && n.relatedTarget && (this._showLocation.relatedTarget = n.relatedTarget), this._setPosition(e), this._visible || (this._container.style.display = "block", this._visible = !0), this._map.fire("contextmenu.show", r)
                }
            },
            _hide: function() {
                this._visible && (this._visible = !1, this._container.style.display = "none", this._map.fire("contextmenu.hide", {
                    contextmenu: this
                }))
            },
            _getIcon: function(e) {
                return t.Browser.retina && e.retinaIcon || e.icon
            },
            _getIconCls: function(e) {
                return t.Browser.retina && e.retinaIconCls || e.iconCls
            },
            _setPosition: function(e) {
                var n, o = this._map.getSize(),
                    a = this._container,
                    i = this._getElementSize(a);
                this._map.options.contextmenuAnchor && (n = t.point(this._map.options.contextmenuAnchor), e = e.add(n)), a._leaflet_pos = e, e.x + i.x > o.x ? (a.style.left = "auto", a.style.right = Math.min(Math.max(o.x - e.x, 0), o.x - i.x - 1) + "px") : (a.style.left = Math.max(e.x, 0) + "px", a.style.right = "auto"), e.y + i.y > o.y ? (a.style.top = "auto", a.style.bottom = Math.min(Math.max(o.y - e.y, 0), o.y - i.y - 1) + "px") : (a.style.top = Math.max(e.y, 0) + "px", a.style.bottom = "auto")
            },
            _getElementSize: function(t) {
                var e = this._size,
                    n = t.style.display;
                return e && !this._sizeChanged || (e = {}, t.style.left = "-999999px", t.style.right = "auto", t.style.display = "block", e.x = t.offsetWidth, e.y = t.offsetHeight, t.style.left = "auto", t.style.display = n, this._sizeChanged = !1), e
            },
            _onKeyDown: function(t) {
                27 === t.keyCode && this._hide()
            },
            _onItemMouseOver: function(e) {
                t.DomUtil.addClass(e.target || e.srcElement, "over")
            },
            _onItemMouseOut: function(e) {
                t.DomUtil.removeClass(e.target || e.srcElement, "over")
            }
        }), t.Map.addInitHook("addHandler", "contextmenu", t.Map.ContextMenu), t.Mixin.ContextMenu = {
            bindContextMenu: function(e) {
                return t.setOptions(this, e), this._initContextMenu(), this
            },
            unbindContextMenu: function() {
                return this.off("contextmenu", this._showContextMenu, this), this
            },
            addContextMenuItem: function(t) {
                this.options.contextmenuItems.push(t)
            },
            removeContextMenuItemWithIndex: function(t) {
                for (var e = [], n = 0; n < this.options.contextmenuItems.length; n++) this.options.contextmenuItems[n].index == t && e.push(n);
                for (var o = e.pop(); o !== undefined;) this.options.contextmenuItems.splice(o, 1), o = e.pop()
            },
            replaceContextMenuItem: function(t) {
                this.removeContextMenuItemWithIndex(t.index), this.addContextMenuItem(t)
            },
            _initContextMenu: function() {
                this._items = [], this.on("contextmenu", this._showContextMenu, this)
            },
            _showContextMenu: function(e) {
                var n, o, a, i, r;
                if (this._map.contextmenu) {
                    for (o = t.extend({
                            relatedTarget: this
                        }, e), a = this._map.mouseEventToContainerPoint(e.originalEvent), this.options.contextmenuInheritItems || this._map.contextmenu.hideAllItems(), i = 0, r = this.options.contextmenuItems.length; i < r; i++) n = this.options.contextmenuItems[i], this._items.push(this._map.contextmenu.insertItem(n, n.index));
                    this._map.once("contextmenu.hide", this._hideContextMenu, this), this._map.contextmenu.showAt(a, o)
                }
            },
            _hideContextMenu: function() {
                var t, e;
                for (t = 0, e = this._items.length; t < e; t++) this._map.contextmenu.removeItem(this._items[t]);
                this._items.length = 0, this.options.contextmenuInheritItems || this._map.contextmenu.showAllItems()
            }
        };
        var e, n, o, a = [t.Marker, t.Path],
            i = {
                contextmenu: !1,
                contextmenuItems: [],
                contextmenuInheritItems: !0
            };
        for (n = 0, o = a.length; n < o; n++) e = a[n], e.prototype.options ? e.mergeOptions(i) : e.prototype.options = i, e.addInitHook(function() {
            this.options.contextmenu && this._initContextMenu()
        }), e.include(t.Mixin.ContextMenu);
        return t.Map.ContextMenu
    }), OSM.initializeContextMenu = function(t) {
        t.contextmenu.addItem({
            text: I18n.t("javascripts.context.directions_from"),
            callback: function(e) {
                var n = OSM.zoomPrecision(t.getZoom()),
                    o = e.latlng.wrap(),
                    a = o.lat.toFixed(n),
                    i = o.lng.toFixed(n);
                OSM.router.route("/directions?" + querystring.stringify({
                    from: a + "," + i,
                    to: $("#route_to").val()
                }))
            }
        }), t.contextmenu.addItem({
            text: I18n.t("javascripts.context.directions_to"),
            callback: function(e) {
                var n = OSM.zoomPrecision(t.getZoom()),
                    o = e.latlng.wrap(),
                    a = o.lat.toFixed(n),
                    i = o.lng.toFixed(n);
                OSM.router.route("/directions?" + querystring.stringify({
                    from: $("#route_from").val(),
                    to: a + "," + i
                }))
            }
        }), t.contextmenu.addItem({
            text: I18n.t("javascripts.context.add_note"),
            callback: function(e) {
                var n = OSM.zoomPrecision(t.getZoom()),
                    o = e.latlng.wrap(),
                    a = o.lat.toFixed(n),
                    i = o.lng.toFixed(n);
                OSM.router.route("/note/new?lat=" + a + "&lon=" + i)
            }
        }), t.contextmenu.addItem({
            text: I18n.t("javascripts.context.show_address"),
            callback: function(e) {
                var n = OSM.zoomPrecision(t.getZoom()),
                    o = e.latlng.wrap(),
                    a = o.lat.toFixed(n),
                    i = o.lng.toFixed(n);
                OSM.router.route("/search?query=" + encodeURIComponent(a + "," + i))
            }
        }), t.contextmenu.addItem({
            text: I18n.t("javascripts.context.query_features"),
            callback: function(e) {
                var n = OSM.zoomPrecision(t.getZoom()),
                    o = e.latlng.wrap(),
                    a = o.lat.toFixed(n),
                    i = o.lng.toFixed(n);
                OSM.router.route("/query?lat=" + a + "&lon=" + i)
            }
        }), t.contextmenu.addItem({
            text: I18n.t("javascripts.context.centre_map"),
            callback: function(e) {
                t.panTo(e.latlng)
            }
        }), t.on("mousedown", function(e) {
            e.originalEvent.shiftKey ? t.contextmenu.disable() : t.contextmenu.enable()
        });
        var e = function() {
            t.contextmenu.setDisabled(2, t.getZoom() < 12), t.contextmenu.setDisabled(4, t.getZoom() < 14)
        };
        t.on("zoomend", e), e()
    },
    function(t, e) {
        function n(e) {
            var n, o = t(e.ownerDocument);
            return e = t(e), n = e.offset(), {
                x: n.left + e.outerWidth() / 2 - o.scrollLeft(),
                y: n.top + e.outerHeight() / 2 - o.scrollTop()
            }
        }

        function o(e) {
            var n, o = t(e.ownerDocument);
            return e = t(e), n = e.offset(), {
                x: n.left - o.scrollLeft(),
                y: n.top - o.scrollTop()
            }
        }
        var a = /^key/,
            i = /^(?:mouse|contextmenu)|click/;
        t.fn.simulate = function(e, n) {
            return this.each(function() {
                new t.simulate(this, e, n)
            })
        }, t.simulate = function(e, n, o) {
            var a = t.camelCase("simulate-" + n);
            this.target = e, this.options = o, this[a] ? this[a]() : this.simulateEvent(e, n, o)
        }, t.extend(t.simulate, {
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            },
            buttonCode: {
                LEFT: 0,
                MIDDLE: 1,
                RIGHT: 2
            }
        }), t.extend(t.simulate.prototype, {
            simulateEvent: function(t, e, n) {
                var o = this.createEvent(e, n);
                this.dispatchEvent(t, e, o, n)
            },
            createEvent: function(t, e) {
                return a.test(t) ? this.keyEvent(t, e) : i.test(t) ? this.mouseEvent(t, e) : void 0
            },
            mouseEvent: function(n, o) {
                var a, i, r, s;
                return o = t.extend({
                    bubbles: !0,
                    cancelable: "mousemove" !== n,
                    view: window,
                    detail: 0,
                    screenX: 0,
                    screenY: 0,
                    clientX: 1,
                    clientY: 1,
                    ctrlKey: !1,
                    altKey: !1,
                    shiftKey: !1,
                    metaKey: !1,
                    button: 0,
                    relatedTarget: e
                }, o), document.createEvent ? (a = document.createEvent("MouseEvents"), a.initMouseEvent(n, o.bubbles, o.cancelable, o.view, o.detail, o.screenX, o.screenY, o.clientX, o.clientY, o.ctrlKey, o.altKey, o.shiftKey, o.metaKey, o.button, o.relatedTarget || document.body.parentNode), 0 === a.pageX && 0 === a.pageY && Object.defineProperty && (i = a.relatedTarget.ownerDocument || document, r = i.documentElement, s = i.body, Object.defineProperty(a, "pageX", {
                    get: function() {
                        return o.clientX + (r && r.scrollLeft || s && s.scrollLeft || 0) - (r && r.clientLeft || s && s.clientLeft || 0)
                    }
                }), Object.defineProperty(a, "pageY", {
                    get: function() {
                        return o.clientY + (r && r.scrollTop || s && s.scrollTop || 0) - (r && r.clientTop || s && s.clientTop || 0)
                    }
                }))) : document.createEventObject && (a = document.createEventObject(), t.extend(a, o), a.button = {
                    0: 1,
                    1: 4,
                    2: 2
                }[a.button] || (-1 === a.button ? 0 : a.button)), a
            },
            keyEvent: function(n, o) {
                var a;
                if (o = t.extend({
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                        ctrlKey: !1,
                        altKey: !1,
                        shiftKey: !1,
                        metaKey: !1,
                        keyCode: 0,
                        charCode: e
                    }, o), document.createEvent) try {
                    a = document.createEvent("KeyEvents"), a.initKeyEvent(n, o.bubbles, o.cancelable, o.view, o.ctrlKey, o.altKey, o.shiftKey, o.metaKey, o.keyCode, o.charCode)
                } catch (e) {
                    a = document.createEvent("Events"), a.initEvent(n, o.bubbles, o.cancelable), t.extend(a, {
                        view: o.view,
                        ctrlKey: o.ctrlKey,
                        altKey: o.altKey,
                        shiftKey: o.shiftKey,
                        metaKey: o.metaKey,
                        keyCode: o.keyCode,
                        charCode: o.charCode
                    })
                } else document.createEventObject && (a = document.createEventObject(), t.extend(a, o));
                return (/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()) || "[object Opera]" === {}.toString.call(window.opera)) && (a.keyCode = o.charCode > 0 ? o.charCode : o.keyCode, a.charCode = e), a
            },
            dispatchEvent: function(t, e, n) {
                t[e] ? t[e]() : t.dispatchEvent ? t.dispatchEvent(n) : t.fireEvent && t.fireEvent("on" + e, n)
            },
            simulateFocus: function() {
                function e() {
                    o = !0
                }
                var n, o = !1,
                    a = t(this.target);
                a.bind("focus", e), a[0].focus(), o || (n = t.Event("focusin"), n.preventDefault(), a.trigger(n), a.triggerHandler("focus")), a.unbind("focus", e)
            },
            simulateBlur: function() {
                function e() {
                    o = !0
                }
                var n, o = !1,
                    a = t(this.target);
                a.bind("blur", e), a[0].blur(), setTimeout(function() {
                    a[0].ownerDocument.activeElement === a[0] && a[0].ownerDocument.body.focus(), o || (n = t.Event("focusout"), n.preventDefault(), a.trigger(n), a.triggerHandler("blur")), a.unbind("blur", e)
                }, 1)
            }
        }), t.extend(t.simulate.prototype, {
            simulateDrag: function() {
                var a = 0,
                    i = this.target,
                    r = this.options,
                    s = "corner" === r.handle ? o(i) : n(i),
                    c = Math.floor(s.x),
                    l = Math.floor(s.y),
                    d = {
                        clientX: c,
                        clientY: l
                    },
                    u = r.dx || (r.x !== e ? r.x - c : 0),
                    p = r.dy || (r.y !== e ? r.y - l : 0),
                    h = r.moves || 3;
                for (this.simulateEvent(i, "mousedown", d); a < h; a++) c += u / h, l += p / h, d = {
                    clientX: Math.round(c),
                    clientY: Math.round(l)
                }, this.simulateEvent(i.ownerDocument, "mousemove", d);
                t.contains(document, i) ? (this.simulateEvent(i, "mouseup", d), this.simulateEvent(i, "click", d)) : this.simulateEvent(document, "mouseup", d)
            }
        })
    }(jQuery), OSM.Search = function(t) {
        function e(t) {
            t.preventDefault(), t.stopPropagation();
            var e = $(this).parents(".search_more");
            $(this).hide(), e.find(".loader").show(), $.get($(this).attr("href"), function(t) {
                e.replaceWith(t)
            })
        }

        function n() {
            var t = $(this).data("marker");
            if (!t) {
                var e = $(this).find("a.set_position").data();
                t = L.marker([e.lat, e.lon], {
                    icon: OSM.getUserIcon()
                }), $(this).data("marker", t)
            }
            r.addLayer(t), $(this).closest("li").addClass("selected")
        }

        function o() {
            var t = $(this).data("marker");
            t && r.removeLayer(t), $(this).closest("li").removeClass("selected")
        }

        function a(e) {
            e.minLon && e.minLat && e.maxLon && e.maxLat ? t.fitBounds([
                [e.minLat, e.minLon],
                [e.maxLat, e.maxLon]
            ]) : t.setView([e.lat, e.lon], e.zoom)
        }

        function i(t) {
            var e = $(this).data();
            a(e), e.type && e.id || (t.preventDefault(), t.stopPropagation())
        }
        $(".search_form input[name=query]").on("input", function(t) {
            "" === $(t.target).val() ? $(".describe_location").fadeIn(100) : $(".describe_location").fadeOut(100)
        }), $(".search_form a.button.switch_link").on("click", function(e) {
            e.preventDefault();
            var n = $(e.target).parent().parent().find("input[name=query]").val();
            n ? OSM.router.route("/directions?from=" + encodeURIComponent(n) + OSM.formatHash(t)) : OSM.router.route("/directions" + OSM.formatHash(t))
        }), $(".search_form").on("submit", function(e) {
            e.preventDefault(), $("header").addClass("closed");
            var n = $(this).find("input[name=query]").val();
            n ? OSM.router.route("/search?query=" + encodeURIComponent(n) + OSM.formatHash(t)) : OSM.router.route("/" + OSM.formatHash(t))
        }), $(".describe_location").on("click", function(e) {
            e.preventDefault();
            var n = t.getCenter().wrap(),
                o = OSM.zoomPrecision(t.getZoom());
            OSM.router.route("/search?query=" + encodeURIComponent(n.lat.toFixed(o) + "," + n.lng.toFixed(o)))
        }), $("#sidebar_content").on("click", ".search_more a", e).on("click", ".search_results_entry a.set_position", i).on("mouseover", "p.search_results_entry:has(a.set_position)", n).on("mouseout", "p.search_results_entry:has(a.set_position)", o).on("mousedown", "p.search_results_entry:has(a.set_position)", function() {
            var t = !1;
            $(this).one("click", function(e) {
                t || $(e.target).is("a") || $(this).find("a.set_position").simulate("click", e)
            }).one("mousemove", function() {
                t = !0
            })
        });
        var r = L.layerGroup().addTo(t),
            s = {};
        return s.pushstate = s.popstate = function(t) {
            var e = querystring.parse(t.substring(t.indexOf("?") + 1));
            $(".search_form input[name=query]").val(e.query), $(".describe_location").hide(), OSM.loadSidebarContent(t, s.load)
        }, s.load = function() {
            return $(".search_results_entry").each(function(e) {
                var n = $(this);
                $.ajax({
                    url: n.data("href"),
                    method: "GET",
                    data: {
                        zoom: t.getZoom(),
                        minlon: t.getBounds().getWest(),
                        minlat: t.getBounds().getSouth(),
                        maxlon: t.getBounds().getEast(),
                        maxlat: t.getBounds().getNorth()
                    },
                    success: function(t) {
                        if (n.html(t), 0 === e) {
                            var o = n.find("*[data-lat][data-lon]:first").first();
                            o.length && a(o.data())
                        }
                    }
                })
            }), t.getState()
        }, s.unload = function() {
            r.clearLayers(), $(".search_form input[name=query]").val(""), $(".describe_location").fadeIn(100)
        }, s
    }, OSM.initializeBrowse = function(t) {
        function e() {
            var e = t.getBounds();
            i && i.contains(e) || o()
        }

        function n(t, e, n, o) {
            $("#browse_status").html($("<p class='warning'></p>").text(I18n.t("browse.start_rjs.feature_warning", {
                num_features: t,
                max_features: e
            })).prepend($("<span class='icon close'></span>").click(o)).append($("<input type='submit'>").val(I18n.t("browse.start_rjs.load_data")).click(n)))
        }

        function o() {
            var e = t.getBounds(),
                o = "/api/" + OSM.API_VERSION + "/map?bbox=" + e.toBBoxString(),
                a = 2e3;
            c && c.abort(), c = $.ajax({
                url: o,
                success: function(t) {
                    function o() {
                        $("#browse_status").empty(), s.addData(d), i = e
                    }

                    function l() {
                        $("#browse_status").empty()
                    }
                    s.clearLayers(), r = null;
                    var d = s.buildFeatures(t);
                    d.length < a ? o() : n(d.length, a, o, l), c = null
                }
            })
        }

        function a(t) {
            r && r.setStyle(r.originalStyle), t.originalStyle = t.options, t.setStyle({
                color: "#0000ff",
                weight: 8
            }), OSM.router.route("/" + t.feature.type + "/" + t.feature.id), r = t
        }
        var i, r, s = t.dataLayer;
        s.setStyle({
            way: {
                weight: 3,
                color: "#000000",
                opacity: .4
            },
            area: {
                weight: 3,
                color: "#ff0000"
            },
            node: {
                color: "#00ff00"
            }
        }), s.isWayArea = function() {
            return !1
        }, s.on("click", function(t) {
            a(t.layer)
        }), t.on("layeradd", function(n) {
            n.layer === s && (t.on("moveend", e), e())
        }), t.on("layerremove", function(n) {
            n.layer === s && (t.off("moveend", e), $("#browse_status").empty())
        });
        var c
    }, OSM.Export = function(t) {
        function e() {
            return L.latLngBounds(L.latLng($("#minlat").val(), $("#minlon").val()), L.latLng($("#maxlat").val(), $("#maxlon").val()))
        }

        function n() {
            var n = e();
            t.fitBounds(n), l.setBounds(n), l.enable(), r()
        }

        function o(e) {
            e.preventDefault(), $("#drag_box").hide(), l.setBounds(t.getBounds().pad(-.2)), l.enable(), r()
        }

        function a() {
            i(l.isEnabled() ? l.getBounds() : t.getBounds()), r()
        }

        function i(e) {
            var n = OSM.zoomPrecision(t.getZoom());
            $("#minlon").val(e.getWest().toFixed(n)), $("#minlat").val(e.getSouth().toFixed(n)), $("#maxlon").val(e.getEast().toFixed(n)), $("#maxlat").val(e.getNorth().toFixed(n)), $("#export_overpass").attr("href", "http://overpass-api.de/api/map?bbox=" + $("#minlon").val() + "," + $("#minlat").val() + "," + $("#maxlon").val() + "," + $("#maxlat").val())
        }

        function r() {
            $("#export_osm_too_large").toggle(e().getSize() > OSM.MAX_REQUEST_AREA), $("#export_commit").toggle(e().getSize() < OSM.MAX_REQUEST_AREA)
        }

        function s(t) {
            e().getSize() > OSM.MAX_REQUEST_AREA && t.preventDefault()
        }
        var c = {},
            l = new L.LocationFilter({
                enableButton: !1,
                adjustButton: !1
            }).on("change", a);
        return c.pushstate = c.popstate = function(t) {
            $("#export_tab").addClass("current"), OSM.loadSidebarContent(t, c.load)
        }, c.load = function() {
            return t.addLayer(l).on("moveend", a), $("#maxlat, #minlon, #maxlon, #minlat").change(n), $("#drag_box").click(o), $(".export_form").on("submit", s), a(), t.getState()
        }, c.unload = function() {
            t.removeLayer(l).off("moveend", a), $("#export_tab").removeClass("current")
        }, c
    }, OSM.initializeNotes = function(t) {
        function e(t, e) {
            return t ? t.setIcon(i[e.properties.status]) : (t = L.marker(e.geometry.coordinates.reverse(), {
                icon: i[e.properties.status],
                title: e.properties.comments[0].text,
                opacity: .8,
                interactive: !0
            }), t.id = e.properties.id, t.addTo(o)), t
        }

        function n() {
            function n(t) {
                function n(t) {
                    var n = i[t.properties.id];
                    delete i[t.properties.id], a[t.properties.id] = e(n, t)
                }
                var i = a;
                a = {}, t.features.forEach(n);
                for (var s in i) o.removeLayer(i[s]);
                r = null
            }
            var i = t.getBounds();
            if (i.getSize() <= OSM.MAX_NOTE_REQUEST_AREA) {
                var s = "/api/" + OSM.API_VERSION + "/notes.json?bbox=" + i.toBBoxString();
                r && r.abort(), r = $.ajax({
                    url: s,
                    success: n
                })
            }
        }
        var o = t.noteLayer,
            a = {},
            i = {
                "new": L.icon({
                    iconUrl: OSM.NEW_NOTE_MARKER,
                    iconSize: [25, 40],
                    iconAnchor: [12, 40]
                }),
                open: L.icon({
                    iconUrl: OSM.OPEN_NOTE_MARKER,
                    iconSize: [25, 40],
                    iconAnchor: [12, 40]
                }),
                closed: L.icon({
                    iconUrl: OSM.CLOSED_NOTE_MARKER,
                    iconSize: [25, 40],
                    iconAnchor: [12, 40]
                })
            };
        t.on("layeradd", function(e) {
            e.layer === o && (n(), t.on("moveend", n))
        }).on("layerremove", function(e) {
            e.layer === o && (t.off("moveend", n), o.clearLayers(), a = {})
        }), o.on("click", function(t) {
            t.layer.id && OSM.router.route("/note/" + t.layer.id)
        }), o.getLayerId = function(t) {
            return t.id
        };
        var r
    }, OSM.History = function(t) {
        function e(t) {
            c.getLayer(t).setStyle({
                fillOpacity: .3
            }), $("#changeset_" + t).addClass("selected")
        }

        function n(t) {
            c.getLayer(t).setStyle({
                fillOpacity: 0
            }), $("#changeset_" + t).removeClass("selected")
        }

        function o(t, e) {
            $("#changeset_" + t).find("a.changeset_id").simulate("click", e)
        }

        function a() {
            var e = {
                list: "1"
            };
            "/history" === window.location.pathname && (e.bbox = t.getBounds().wrap().toBBoxString()), $.ajax({
                url: window.location.pathname,
                method: "GET",
                data: e,
                success: function(t) {
                    $("#sidebar_content .changesets").html(t), r()
                }
            });
            var n = $('link[type="application/atom+xml"]'),
                o = n.attr("href").split("?")[0];
            n.attr("href", o + "?bbox=" + e.bbox)
        }

        function i(t) {
            t.preventDefault(), t.stopPropagation();
            var e = $(this).parents(".changeset_more");
            $(this).hide(), e.find(".loader").show(), $.get($(this).attr("href"), function(t) {
                e.replaceWith(t), r()
            })
        }

        function r() {
            c.clearLayers();
            var e = [];
            $("[data-changeset]").each(function() {
                var t = $(this).data("changeset");
                t.bbox && (t.bounds = L.latLngBounds([t.bbox.minlat, t.bbox.minlon], [t.bbox.maxlat, t.bbox.maxlon]), e.push(t))
            }), e.sort(function(t, e) {
                return e.bounds.getSize() - t.bounds.getSize()
            });
            for (var n = 0; n < e.length; ++n) {
                var o = e[n],
                    a = L.rectangle(o.bounds, {
                        weight: 2,
                        color: "#FF9500",
                        opacity: 1,
                        fillColor: "#FFFFBF",
                        fillOpacity: 0
                    });
                a.id = o.id, a.addTo(c)
            }
            if ("/history" !== window.location.pathname) {
                var i = c.getBounds();
                i.isValid() && t.fitBounds(i)
            }
        }
        var s = {};
        $("#sidebar_content").on("click", ".changeset_more a", i).on("mouseover", "[data-changeset]", function() {
            e($(this).data("changeset").id)
        }).on("mouseout", "[data-changeset]", function() {
            n($(this).data("changeset").id)
        }).on("mousedown", "[data-changeset]", function() {
            var t = !1;
            $(this).one("click", function(e) {
                t || $(e.target).is("a") || o($(this).data("changeset").id, e)
            }).one("mousemove", function() {
                t = !0
            })
        });
        var c = L.featureGroup().on("mouseover", function(t) {
            e(t.layer.id)
        }).on("mouseout", function(t) {
            n(t.layer.id)
        }).on("click", function(t) {
            o(t.layer.id, t)
        });
        return c.getLayerId = function(t) {
            return t.id
        }, s.pushstate = s.popstate = function(t) {
            $("#history_tab").addClass("current"), OSM.loadSidebarContent(t, s.load)
        }, s.load = function() {
            t.addLayer(c), "/history" === window.location.pathname && t.on("moveend", a), a()
        }, s.unload = function() {
            t.removeLayer(c), t.off("moveend", a), $("#history_tab").removeClass("current")
        }, s
    }, OSM.Note = function(t) {
        function e(t, e, n) {
            $(t).find("input[type=submit]").prop("disabled", !0), $.ajax({
                url: n,
                type: e,
                oauth: !0,
                data: {
                    text: $(t.text).val()
                },
                success: function() {
                    OSM.loadSidebarContent(window.location.pathname, s.load)
                }
            })
        }

        function n(n) {
            r.find("input[type=submit]").on("click", function(t) {
                t.preventDefault();
                var n = $(t.target).data();
                e(t.target.form, n.method, n.url)
            }), r.find("textarea").on("input", function(t) {
                var e = t.target.form;
                "" === $(t.target).val() ? ($(e.close).val(I18n.t("javascripts.notes.show.resolve")), $(e.comment).prop("disabled", !0)) : ($(e.close).val(I18n.t("javascripts.notes.show.comment_and_resolve")), $(e.comment).prop("disabled", !1))
            }), r.find("textarea").val("").trigger("input");
            var o = $(".details").data(),
                s = L.latLng(o.coordinates.split(","));
            t.hasLayer(a) || (a = L.circleMarker(s, {
                weight: 2.5,
                radius: 20,
                fillOpacity: .5,
                color: "#FF6200"
            }), t.addLayer(a)), t.hasLayer(i) && t.removeLayer(i), i = L.marker(s, {
                icon: c[o.status],
                opacity: 1,
                interactive: !0
            }), t.addLayer(i), n && n()
        }

        function o() {
            var e = $(".details").data(),
                n = L.latLng(e.coordinates.split(","));
            window.location.hash && !window.location.hash.match(/^#?c[0-9]+$/) || OSM.router.withoutMoveListener(function() {
                t.setView(n, 15, {
                    reset: !0
                })
            })
        }
        var a, i, r = $("#sidebar_content"),
            s = {},
            c = {
                "new": L.icon({
                    iconUrl: OSM.NEW_NOTE_MARKER,
                    iconSize: [25, 40],
                    iconAnchor: [12, 40]
                }),
                open: L.icon({
                    iconUrl: OSM.OPEN_NOTE_MARKER,
                    iconSize: [25, 40],
                    iconAnchor: [12, 40]
                }),
                closed: L.icon({
                    iconUrl: OSM.CLOSED_NOTE_MARKER,
                    iconSize: [25, 40],
                    iconAnchor: [12, 40]
                })
            };
        return s.pushstate = s.popstate = function(e) {
            OSM.loadSidebarContent(e, function() {
                n(function() {
                    var e = $(".details").data(),
                        n = L.latLng(e.coordinates.split(","));
                    t.getBounds().contains(n) || o()
                })
            })
        }, s.load = function() {
            n(o)
        }, s.unload = function() {
            t.hasLayer(a) && t.removeLayer(a), t.hasLayer(i) && t.removeLayer(i)
        }, s
    }, OSM.NewNote = function(t) {
        function e(t, e, o) {
            function i(t, e) {
                s.find("textarea").val(""), n(t), a = null, r.removeLayer(e), l.removeClass("active"), OSM.router.route("/note/" + t.properties.id)
            }
            var c = t.getLatLng().wrap();
            t.options.draggable = !1, t.dragging.disable(), $(e).find("input[type=submit]").prop("disabled", !0), $.ajax({
                url: o,
                type: "POST",
                oauth: !0,
                data: {
                    lat: c.lat,
                    lon: c.lng,
                    text: $(e.text).val()
                },
                success: function(e) {
                    i(e, t)
                }
            })
        }

        function n(t) {
            var e = L.marker(t.geometry.coordinates.reverse(), {
                icon: d[t.properties.status],
                opacity: .9,
                interactive: !0
            });
            return e.id = t.properties.id, e.addTo(r), e
        }

        function o(e, n) {
            "dragstart" === n && t.hasLayer(i) ? t.removeLayer(i) : (t.hasLayer(i) && t.removeLayer(i), i = L.circleMarker(e, {
                weight: 2.5,
                radius: 20,
                fillOpacity: .5,
                color: "#FF6200"
            }), t.addLayer(i))
        }
        var a, i, r = t.noteLayer,
            s = $("#sidebar_content"),
            c = {},
            l = $(".control-note .control-button"),
            d = {
                "new": L.icon({
                    iconUrl: OSM.NEW_NOTE_MARKER,
                    iconSize: [25, 40],
                    iconAnchor: [12, 40]
                }),
                open: L.icon({
                    iconUrl: OSM.OPEN_NOTE_MARKER,
                    iconSize: [25, 40],
                    iconAnchor: [12, 40]
                }),
                closed: L.icon({
                    iconUrl: OSM.CLOSED_NOTE_MARKER,
                    iconSize: [25, 40],
                    iconAnchor: [12, 40]
                })
            };
        return l.on("click", function(t) {
            t.preventDefault(), t.stopPropagation(), $(this).hasClass("disabled") || OSM.router.route("/note/new")
        }), c.pushstate = c.popstate = function(t) {
            OSM.loadSidebarContent(t, function() {
                c.load(t)
            })
        }, c.load = function(n) {
            function i(t) {
                $(t.target.form.add).prop("disabled", "" === $(t.target).val())
            }
            if (!l.hasClass("disabled") && !l.hasClass("active")) {
                l.addClass("active"), t.addLayer(r);
                var c, u = querystring.parse(n.substring(n.indexOf("?") + 1));
                if (u.lat && u.lon) {
                    c = L.latLng(u.lat, u.lon);
                    var p = t.latLngToContainerPoint(c),
                        h = t.getSize(),
                        m = L.point(0, 0);
                    p.x < 50 ? m.x = p.x - 50 : p.x > h.x - 50 && (m.x = 50 - h.x + p.x), p.y < 50 ? m.y = p.y - 50 : p.y > h.y - 50 && (m.y = 50 - h.y + p.y), t.panBy(m)
                } else c = t.getCenter();
                return a = L.marker(c, {
                    icon: d["new"],
                    opacity: .9,
                    draggable: !0
                }), a.on("dragstart dragend", function(t) {
                    o(a.getLatLng(), t.type)
                }), a.addTo(r), o(a.getLatLng()), a.on("remove", function() {
                    l.removeClass("active")
                }).on("dragstart", function() {
                    $(a).stopTime("removenote")
                }).on("dragend", function() {
                    s.find("textarea").focus()
                }), s.find("textarea").on("input", i).focus(), s.find("input[type=submit]").on("click", function(t) {
                    t.preventDefault(), e(a, t.target.form, "/api/0.6/notes.json")
                }), t.getState()
            }
        }, c.unload = function() {
            r.removeLayer(a), t.removeLayer(i), l.removeClass("active")
        }, c
    }, OSM.Directions = function(t) {
        function e(e, n) {
            var o = {};
            return o.marker = L.marker([0, 0], {
                icon: L.icon({
                    iconUrl: n,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowUrl: OSM.MARKER_SHADOW,
                    shadowSize: [41, 41]
                }),
                draggable: !0
            }), o.marker.on("drag dragend", function(e) {
                (c = "drag" === e.type) && !l.draggable || c && s || (o.setLatLng(e.target.getLatLng()), t.hasLayer(u) && i())
            }), e.on("change", function(t) {
                var e = t.target.value;
                o.setValue(e)
            }), o.setValue = function(t) {
                o.value = t, delete o.latlng, e.val(t), o.getGeocode()
            }, o.getGeocode = function() {
                o.value && (o.awaitingGeocode = !0, $.getJSON(document.location.protocol + OSM.NOMINATIM_URL + "search?q=" + encodeURIComponent(o.value) + "&format=json", function(n) {
                    if (o.awaitingGeocode = !1, o.hasGeocode = !0, 0 === n.length) return void alert(I18n.t("javascripts.directions.errors.no_place"));
                    e.val(n[0].display_name), o.latlng = L.latLng(n[0]), o.marker.setLatLng(o.latlng).addTo(t), r && (r = !1, i())
                }))
            }, o.setLatLng = function(n) {
                var a = OSM.zoomPrecision(t.getZoom());
                e.val(n.lat.toFixed(a) + ", " + n.lng.toFixed(a)), o.hasGeocode = !0, o.latlng = n, o.marker.setLatLng(n).addTo(t)
            }, o
        }

        function n(t) {
            return t < 1e3 ? Math.round(t) + "m" : t < 1e4 ? (t / 1e3).toFixed(1) + "km" : Math.round(t / 1e3) + "km"
        }

        function o(t) {
            var e = Math.round(t / 60),
                n = Math.floor(e / 60);
            return e -= 60 * n, n + ":" + (e < 10 ? "0" : "") + e
        }

        function a(t) {
            f.forEach(function(e, n) {
                e.id === t && (l = e, v.val(n))
            })
        }

        function i() {
            s && s.abort();
            for (var e = 0; e < 2; ++e) {
                var a = h[e];
                a.hasGeocode || a.awaitingGeocode || (a.getGeocode(), r = !0)
            }
            if (h[0].awaitingGeocode || h[1].awaitingGeocode) return void(r = !0);
            var i = h[0].latlng,
                m = h[1].latlng;
            if (i && m) {
                $("header").addClass("closed");
                var f = OSM.zoomPrecision(t.getZoom());
                OSM.router.replace("/directions?" + querystring.stringify({
                    engine: l.id,
                    route: i.lat.toFixed(f) + "," + i.lng.toFixed(f) + ";" + m.lat.toFixed(f) + "," + m.lng.toFixed(f)
                })), $("#sidebar_content").html($(".directions_form .loader_copy").html()), t.setSidebarOverlaid(!1), s = l.getRoute([i, m], function(e, a) {
                    if (s = null, e) return t.removeLayer(u), void(c || $("#sidebar_content").html('<p class="search_results_error">' + I18n.t("javascripts.directions.errors.no_route") + "</p>"));
                    u.setLatLngs(a.line).addTo(t), c || t.fitBounds(u.getBounds().pad(.05));
                    var i = '<h2><a class="geolink" href="#"><span class="icon close"></span></a>' + I18n.t("javascripts.directions.directions") + '</h2><p id="routing_summary">' + I18n.t("javascripts.directions.distance") + ": " + n(a.distance) + ". " + I18n.t("javascripts.directions.time") + ": " + o(a.time) + ".";
                    "undefined" != typeof a.ascend && "undefined" != typeof a.descend && (i += "<br />" + I18n.t("javascripts.directions.ascend") + ": " + Math.round(a.ascend) + "m. " + I18n.t("javascripts.directions.descend") + ": " + Math.round(a.descend) + "m."), i += '</p><table id="turnbyturn" />', $("#sidebar_content").html(i);
                    var r = 0;
                    a.steps.forEach(function(e) {
                        var n = e[0],
                            o = e[1],
                            a = e[2],
                            i = e[3],
                            s = e[4];
                        r += i, i = i < 5 ? "" : i < 200 ? 10 * Math.round(i / 10) + "m" : i < 1500 ? 100 * Math.round(i / 100) + "m" : i < 5e3 ? Math.round(i / 100) / 10 + "km" : Math.round(i / 1e3) + "km";
                        var c = $("<tr class='turn'/>");
                        c.append("<td><div class='direction i" + o + "'/></td> "), c.append("<td class='instruction'>" + a), c.append("<td class='distance'>" + i), c.on("click", function() {
                            d.setLatLng(n).setContent("<p>" + a + "</p>").openOn(t)
                        }), c.hover(function() {
                            p.setLatLngs(s).addTo(t)
                        }, function() {
                            t.removeLayer(p)
                        }), $("#turnbyturn").append(c)
                    }), $("#sidebar_content").append('<p id="routing_credit">' + I18n.t("javascripts.directions.instructions.courtesy", {
                        link: l.creditline
                    }) + "</p>"), $("#sidebar_content a.geolink").on("click", function(e) {
                        e.preventDefault(), t.removeLayer(u), $("#sidebar_content").html(""), t.setSidebarOverlaid(!0)
                    })
                })
            }
        }
        var r, s, c, l, d = L.popup(),
            u = L.polyline([], {
                color: "#03f",
                opacity: .3,
                weight: 10
            }),
            p = L.polyline([], {
                color: "#ff0",
                opacity: .5,
                weight: 12
            }),
            h = [e($("input[name='route_from']"), OSM.MARKER_GREEN), e($("input[name='route_to']"), OSM.MARKER_RED)],
            m = new Date;
        m.setYear(m.getFullYear() + 10), $(".directions_form .close").on("click", function(e) {
            e.preventDefault();
            var n = h[0].value;
            n ? OSM.router.route("/?query=" + encodeURIComponent(n) + OSM.formatHash(t)) : OSM.router.route("/" + OSM.formatHash(t))
        });
        var f = OSM.Directions.engines;
        f.sort(function(t, e) {
            return t = I18n.t("javascripts.directions.engines." + t.id), e = I18n.t("javascripts.directions.engines." + e.id), t.localeCompare(e)
        });
        var v = $("select.routing_engines");
        f.forEach(function(t, e) {
            v.append("<option value='" + e + "'>" + I18n.t("javascripts.directions.engines." + t.id) + "</option>")
        });
        var g = $.cookie("_osm_directions_engine");
        g || (g = "osrm_car"), a(g), v.on("change", function(e) {
            l = f[e.target.selectedIndex], $.cookie("_osm_directions_engine", l.id, {
                expires: m,
                path: "/"
            }), t.hasLayer(u) && i()
        }), $(".directions_form").on("submit", function(t) {
            t.preventDefault(), i()
        }), $(".routing_marker").on("dragstart", function(t) {
            var e = t.originalEvent.dataTransfer;
            e.effectAllowed = "move";
            var n = {
                type: $(this).data("type")
            };
            if (e.setData("text", JSON.stringify(n)), e.setDragImage) {
                var o = $("<img>").attr("src", $(t.originalEvent.target).attr("src"));
                e.setDragImage(o.get(0), 12, 21)
            }
        });
        var _ = {};
        return _.pushstate = _.popstate = function() {
            $(".search_form").hide(), $(".directions_form").show(), $("#map").on("dragend dragover", function(t) {
                t.preventDefault()
            }), $("#map").on("drop", function(e) {
                e.preventDefault();
                var n = e.originalEvent,
                    o = JSON.parse(n.dataTransfer.getData("text")),
                    a = o.type,
                    r = L.DomEvent.getMousePosition(n, t.getContainer());
                r.y += 20;
                var s = t.containerPointToLatLng(r);
                h["from" === a ? 0 : 1].setLatLng(s), i()
            });
            var e = querystring.parse(location.search.substring(1)),
                n = (e.route || "").split(";");
            e.engine && a(e.engine), h[0].setValue(e.from || ""), h[1].setValue(e.to || "");
            var o = n[0] && L.latLng(n[0].split(",")),
                r = n[1] && L.latLng(n[1].split(","));
            o && h[0].setLatLng(o), r && h[1].setLatLng(r), t.setSidebarOverlaid(!o || !r), i()
        }, _.load = function() {
            _.pushstate()
        }, _.unload = function() {
            $(".search_form").show(), $(".directions_form").hide(), $("#map").off("dragend dragover drop"), t.removeLayer(d).removeLayer(u).removeLayer(h[0].marker).removeLayer(h[1].marker)
        }, _
    }, OSM.Directions.engines = [], OSM.Directions.addEngine = function(t, e) {
        ("http:" === document.location.protocol || e) && OSM.Directions.engines.push(t)
    }, OSM.Directions.addEngine(new GraphHopperEngine("graphhopper_car", "car"), !0), OSM.Directions.addEngine(new GraphHopperEngine("graphhopper_bicycle", "bike"), !0), OSM.Directions.addEngine(new GraphHopperEngine("graphhopper_foot", "foot"), !0), OSM.MAPQUEST_KEY && (OSM.Directions.addEngine(new MapQuestEngine("mapquest_bicycle", "bicycle"), !0), OSM.Directions.addEngine(new MapQuestEngine("mapquest_foot", "pedestrian"), !0), OSM.Directions.addEngine(new MapQuestEngine("mapquest_car", "fastest"), !0)), OSM.MAPZEN_VALHALLA_KEY && (OSM.Directions.addEngine(new MapzenEngine("mapzen_car", "auto"), !0), OSM.Directions.addEngine(new MapzenEngine("mapzen_bicycle", "bicycle"), !0), OSM.Directions.addEngine(new MapzenEngine("mapzen_foot", "pedestrian"), !0)), OSM.Directions.addEngine(new OSRMEngine, !0), OSM.Changeset = function(t) {
        function e(e, n) {
            t.addObject({
                type: "changeset",
                id: parseInt(e)
            }, function(e) {
                window.location.hash || !e.isValid() || !n && t.getBounds().contains(e) || OSM.router.withoutMoveListener(function() {
                    t.fitBounds(e)
                })
            })
        }

        function n(t, e, n, o) {
            var a;
            $(t).find("input[type=submit]").prop("disabled", !0), a = o ? {
                text: $(t.text).val()
            } : {}, $.ajax({
                url: n,
                type: e,
                oauth: !0,
                data: a,
                success: function() {
                    OSM.loadSidebarContent(window.location.pathname, i.load)
                }
            })
        }

        function o() {
            r.find("input[name=comment]").on("click", function(t) {
                t.preventDefault();
                var e = $(t.target).data();
                n(t.target.form, e.method, e.url, !0)
            }), r.find(".action-button").on("click", function(t) {
                t.preventDefault();
                var e = $(t.target).data();
                n(t.target.form, e.method, e.url)
            }), r.find("textarea").on("input", function(t) {
                var e = t.target.form;
                "" === $(t.target).val() ? $(e.comment).prop("disabled", !0) : $(e.comment).prop("disabled", !1)
            }), r.find("textarea").val("").trigger("input")
        }
        var a, i = {},
            r = $("#sidebar_content");
        return i.pushstate = i.popstate = function(t, e) {
            OSM.loadSidebarContent(t, function() {
                i.load(t, e)
            })
        }, i.load = function(t, n) {
            n && (a = n), o(), e(a, !0)
        }, i.unload = function() {
            t.removeObject()
        }, i
    }, OSM.Query = function(t) {
        function e(t) {
            if (t.tags)
                for (var e in t.tags)
                    if (f.indexOf(e) < 0) return !0;
            return !1
        }

        function n(t) {
            var e = t.tags,
                n = "";
            if ("administrative" === e.boundary && e.admin_level) n = I18n.t("geocoder.search_osm_nominatim.admin_levels.level" + e.admin_level, {
                defaultValue: I18n.t("geocoder.search_osm_nominatim.prefix.boundary.administrative")
            });
            else {
                var o, a, i = I18n.t("geocoder.search_osm_nominatim.prefix");
                for (o in e)
                    if (a = e[o], i[o] && i[o][a]) return i[o][a];
                for (o in e)
                    if (a = e[o], i[o]) {
                        var r = a.substr(0, 1).toUpperCase(),
                            s = a.substr(1).replace(/_/g, " ");
                        return r + s
                    }
            }
            return n || (n = I18n.t("javascripts.query." + t.type)), n
        }

        function o(t) {
            for (var e = t.tags, n = I18n.locales.get(), o = 0; o < n.length; o++)
                if (e["name:" + n[o]]) return e["name:" + n[o]];
            return e.name ? e.name : e.ref ? e.ref : e["addr:housename"] ? e["addr:housename"] : e["addr:housenumber"] && e["addr:street"] ? e["addr:housenumber"] + " " + e["addr:street"] : "#" + t.id
        }

        function a(t) {
            var e;
            return "node" === t.type && t.lat && t.lon ? e = L.circleMarker([t.lat, t.lon], v) : "way" === t.type && t.geometry && t.geometry.length > 0 ? e = L.polyline(t.geometry.filter(function(t) {
                return null !== t
            }).map(function(t) {
                return [t.lat, t.lon]
            }), v) : "relation" === t.type && t.members && (e = L.featureGroup(t.members.map(a).filter(function(t) {
                return t !== undefined
            }))), e
        }

        function i(t, i, r, s, c, l) {
            var d = s.find("ul");
            d.empty(), s.show(), s.find(".loader").oneTime(1e3, "loading", function() {
                $(this).show()
            }), s.data("ajax") && s.data("ajax").abort(), s.data("ajax", $.ajax({
                url: h,
                method: "POST",
                data: {
                    data: "[timeout:10][out:json];" + r
                },
                success: function(t) {
                    var i;
                    s.find(".loader").stopTime("loading").hide(), c ? (i = t.elements.reduce(function(t, e) {
                        var n = e.type + e.id;
                        return "geometry" in e && delete e.bounds, t[n] = $.extend({}, t[n], e), t
                    }, {}), i = Object.keys(i).map(function(t) {
                        return i[t]
                    })) : i = t.elements, l && (i = i.sort(l));
                    for (var r = 0; r < i.length; r++) {
                        var u = i[r];
                        if (e(u)) {
                            var p = $("<li>").addClass("query-result").data("geometry", a(u)).appendTo(d),
                                m = $("<p>").text(n(u) + " ").appendTo(p);
                            $("<a>").attr("href", "/" + u.type + "/" + u.id).text(o(u)).appendTo(m)
                        }
                    }
                    t.remark && $("<li>").text(I18n.t("javascripts.query.error", {
                        server: h,
                        error: t.remark
                    })).appendTo(d), 0 === d.find("li").length && $("<li>").text(I18n.t("javascripts.query.nothing_found")).appendTo(d)
                },
                error: function(t, e, n) {
                    s.find(".loader").stopTime("loading").hide(), $("<li>").text(I18n.t("javascripts.query." + e, {
                        server: h,
                        error: n
                    })).appendTo(d)
                }
            }))
        }

        function r(t, e) {
            return (t.bounds.maxlon - t.bounds.minlon) * (t.bounds.maxlat - t.bounds.minlat) - (e.bounds.maxlat - e.bounds.minlat) * (e.bounds.maxlat - e.bounds.minlat)
        }

        function s(e, n) {
            var o = L.latLng(e, n).wrap(),
                a = t.getBounds().wrap(),
                s = a.getSouth() + "," + a.getWest() + "," + a.getNorth() + "," + a.getEast(),
                c = 10 * Math.pow(1.5, 19 - t.getZoom()),
                l = "around:" + c + "," + e + "," + n,
                d = "node(" + l + ")",
                p = "way(" + l + ")",
                h = "relation(" + l + ")",
                m = "(" + d + ";" + p + ");out tags geom(" + s + ");" + h + ";out geom(" + s + ");",
                f = "is_in(" + e + "," + n + ")->.a;way(pivot.a);out tags bb;out ids geom(" + s + ");relation(pivot.a);out tags bb;";
            $("#sidebar_content .query-intro").hide(), u && t.removeLayer(u), u = L.circle(o, c, v).addTo(t), $(document).everyTime(75, "fadeQueryMarker", function(e) {
                10 === e ? t.removeLayer(u) : u.setStyle({
                    opacity: 1 - .1 * e,
                    fillOpacity: .5 - .05 * e
                })
            }, 10), i(o, c, m, $("#query-nearby"), !1), i(o, c, f, $("#query-isin"), !0, r)
        }

        function c(e) {
            var n = OSM.zoomPrecision(t.getZoom()),
                o = e.latlng.wrap(),
                a = o.lat.toFixed(n),
                i = o.lng.toFixed(n);
            OSM.router.route("/query?lat=" + a + "&lon=" + i)
        }

        function l() {
            m.addClass("active"), t.on("click", c), $(t.getContainer()).addClass("query-active")
        }

        function d() {
            u && t.removeLayer(u), $(t.getContainer()).removeClass("query-active").removeClass("query-disabled"), t.off("click", c), m.removeClass("active")
        }
        var u, p = "https:" === document.location.protocol ? "https:" : "http:",
            h = p + OSM.OVERPASS_URL,
            m = $(".control-query .control-button"),
            f = ["source", "source_ref", "source:ref", "history", "attribution", "created_by", "tiger:county", "tiger:tlid", "tiger:upload_uuid", "KSJ2:curve_id", "KSJ2:lat", "KSJ2:lon", "KSJ2:coordinate", "KSJ2:filename", "note:ja"],
            v = {
                color: "#FF6200",
                weight: 4,
                opacity: 1,
                fillOpacity: .5,
                interactive: !1
            };
        m.on("click", function(t) {
            t.preventDefault(), t.stopPropagation(), m.hasClass("active") ? d() : m.hasClass("disabled") || l()
        }).on("disabled", function() {
            m.hasClass("active") && (t.off("click", c), $(t.getContainer()).removeClass("query-active").addClass("query-disabled"), $(this).tooltip("show"))
        }).on("enabled", function() {
            m.hasClass("active") && (t.on("click", c), $(t.getContainer()).removeClass("query-disabled").addClass("query-active"), $(this).tooltip("hide"))
        }), $("#sidebar_content").on("mouseover", ".query-results li.query-result", function() {
            var e = $(this).data("geometry");
            e && t.addLayer(e), $(this).addClass("selected")
        }).on("mouseout", ".query-results li.query-result", function() {
            var e = $(this).data("geometry");
            e && t.removeLayer(e), $(this).removeClass("selected")
        }).on("mousedown", ".query-results li.query-result", function() {
            var e = !1;
            $(this).one("click", function(n) {
                if (!e) {
                    var o = $(this).data("geometry");
                    o && t.removeLayer(o), $(n.target).is("a") || $(this).find("a").simulate("click", n)
                }
            }).one("mousemove", function() {
                e = !0
            })
        });
        var g = {};
        return g.pushstate = g.popstate = function(t) {
            OSM.loadSidebarContent(t, function() {
                g.load(t, !0)
            })
        }, g.load = function(e, n) {
            var o = querystring.parse(e.substring(e.indexOf("?") + 1)),
                a = L.latLng(o.lat, o.lon);
            window.location.hash || n || t.getBounds().contains(a) || OSM.router.withoutMoveListener(function() {
                t.setView(a, 15)
            }), s(o.lat, o.lon)
        }, g.unload = function(t) {
            t || d()
        }, g
    }, OSM.Router = function(t, e) {
        function n(t, e) {
            var n = new RegExp("^" + t.replace(o, "\\$&").replace(a, "(?:$1)?").replace(i, function(t, e) {
                    return e ? t : "([^/]+)"
                }).replace(r, "(.*?)") + "(?:\\?.*)?$"),
                s = {};
            return s.match = function(t) {
                return n.test(t)
            }, s.run = function(t, o) {
                var a = [];
                return o && (a = n.exec('/').map(function(t, e) {
                    return e > 0 && t ? decodeURIComponent(t) : t
                })), a = a.concat(Array.prototype.slice.call(arguments, 2)), (e[t] || $.noop).apply(e, a)
            }, s
        }
        var o = /[\-{}\[\]+?.,\\\^$|#\s]/g,
            a = /\((.*?)\)/g,
            i = /(\(\?)?:\w+/g,
            r = /\*\w+/g,
            s = [];
        for (var c in e) s.push(new n(c, e[c]));
        s.recognize = function(t) {
            for (var e = 0; e < this.length; e++)
                if (this[e].match(t)) return this[e]
        };
        var l = window.location.pathname.replace(/(.)\/$/, "$1") + window.location.search,
            d = s.recognize('/'),
            u = location.hash || OSM.formatHash(t),
            p = {};
        return window.history && window.history.pushState ? ($(window).on("popstate", function(e) {
            if (e.originalEvent.state) {
                var n = window.location.pathname + window.location.search,
                    o = s.recognize(n);
                n !== l && (d.run("unload", null, o === d), l = n, d = o, d.run("popstate", l), t.setState(e.originalEvent.state, {
                    animate: !1
                }))
            }
        }), p.route = function(e) {
            var n = e.replace(/#.*/, ""),
                o = s.recognize(n);
            if (!o) return !1;
            d.run("unload", null, o === d);
            var a = OSM.parseHash(e);
            return t.setState(a), window.history.pushState(a, document.title, e), l = n, d = o, d.run("pushstate", l), !0
        }, p.replace = function(t) {
            window.history.replaceState(OSM.parseHash(t), document.title, t)
        }, p.stateChange = function(t) {
            t.center ? window.history.replaceState(t, document.title, OSM.formatHash(t)) : window.history.replaceState(t, document.title, window.location)
        }) : (p.route = p.replace = function(t) {
            window.location.assign(t)
        }, p.stateChange = function(t) {
            t.center && window.location.replace(OSM.formatHash(t))
        }), p.updateHash = function() {
            var e = OSM.formatHash(t);
            e !== u && (u = e, p.stateChange(OSM.parseHash(e)))
        }, p.hashUpdated = function() {
            var e = location.hash;
            if (e !== u) {
                u = e;
                var n = OSM.parseHash(e);
                t.setState(n), p.stateChange(n, e)
            }
        }, p.withoutMoveListener = function(e) {
            function n() {
                t.off("moveend", p.updateHash), t.once("moveend", function() {
                    t.on("moveend", p.updateHash)
                })
            }
            t.once("movestart", n), e(), t.off("movestart", n)
        }, p.load = function() {
            var t = d.run("load", l);
            p.stateChange(t || {})
        }, p.setCurrentPath = function(t) {
            l = t, d = s.recognize(l)
        }, t.on("moveend baselayerchange overlaylayerchange", p.updateHash), $(window).on("hashchange", p.hashUpdated), p
    };