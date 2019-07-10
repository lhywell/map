L.TileLayer.MapProvider = L.TileLayer.extend({
    initialize: function(type, options) {
        let providers = L.TileLayer.MapProvider.providers;

        let parts = type.split('.');

        let providerName = parts[0];
        let mapType = parts[1];
        let mapUrl = parts[2];

        let url = providers[providerName][mapType][mapUrl];
        options.subdomains = providers[providerName].Subdomains;
        options.key = options.key || providers[providerName].key;
        L.TileLayer.prototype.initialize.call(this, url, options);
    },
    createTile: function(coords, done) {
        let tile = document.createElement('img')

        L.DomEvent.on(tile, 'load', L.bind(this._tileOnLoad, this, done, tile))
        L.DomEvent.on(tile, 'error', L.bind(this._tileOnError, this, done, tile))

        if (this.options.crossOrigin) {
            tile.crossOrigin = ''
        }

        /*
         Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
         http://www.w3.org/TR/WCAG20-TECHS/H67
        */
        tile.alt = ''

        if (this._url) {
            tile.src = this.getTileUrl(coords)
        } else {
            tile.src = this.getBingUrl(coords.z, coords.x, coords.y);
        }

        return tile;
    },
    getBingUrl: function(z, x, y) {
        let a = ""
        for (a, c = x, d = y, e = 0; e < z; e++) {
            a = ((c & 1) + 2 * (d & 1)).toString() + a;
            c >>= 1;
            d >>= 1
        }
        return 'http://dynamic.t0.tiles.ditu.live.com/comp/ch/' + a + '?it=G,VE,BX,L,LA&mkt=zh-cn,syr&n=z&og=111&ur=CN';
    },
});

let time = new Date().getTime();
L.TileLayer.MapProvider.providers = {
    GaoDe: {
        Normal: {
            Map: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
            En: 'https://webrd0{s}.is.autonavi.com/appmaptile?lang=en&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
        },
        Photo: {
            Map: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            Annotion: 'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
        },
        Subdomains: ["1", "2", "3", "4"],
        key: ""
    },
    Baidu: {
        Normal: {
            Map: "http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1",
            Dark: "http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&udt=20190709&scale=1&ak=E4805d16520de693a3fe707cdc962045&customid=googlelite"
        },
        Photo: {
            Map: "http://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46",
            Annotion: 'http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=020'
        },
        Traffic: {
            Map: "http://its.map.baidu.com:8002/traffic/TrafficTileService?x={x}&y={y}&level={z}&time=" + time + '&label=web2D&v=017'
        },
        Subdomains: ["0", "1", "2", "3", "4", "5"],
        key: ""
    },
    Google: {
        /*h路网加注记/交通图，s代表卫星图无注记，m代表平面图层，t代表地形图层*/
        Normal: {
            Map: "http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        },
        Mix: {
            Map: "http://www.google.cn/maps/vt?lyrs=p@189&gl=en&x={x}&y={y}&z={z}"
        },
        Photo: {
            Map: "http://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}"
        },
        Subdomains: [],
        key: ""
    },
    TianDiTu: {
        Normal: {
            Map: "http://t{s}.tianditu.com/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={key}",
            Annotion: "http://t{s}.tianditu.com/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}"
        },
        Photo: {
            Map: "http://t{s}.tianditu.com/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={key}",
            Annotion: "http://t{s}.tianditu.com/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={key}"
        },
        Terrain: {
            Map: "http://t{s}.tianditu.com/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}",
            Annotion: "http://t{s}.tianditu.com/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={key}"
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        key: "174705aebfe31b79b3587279e211cb9a"
    },
    Geoq: {
        Normal: {
            Map: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
            PurplishBlue: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
            Gray: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
            Warm: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
            Cold: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetCold/MapServer/tile/{z}/{y}/{x}",
            En: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunityENG/MapServer/tile/{z}/{y}/{x}"
        },
        Theme: {
            Hydro: "http://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}"
        },
        Subdomains: [],
        key: ""
    },
    Arcgis: {
        Normal: {
            Map: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
            Gray: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
            Blue: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
            Warm: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer/{z}/{y}/{x}",
            En: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunityENG/MapServer/{z}/{y}/{x}",
            Mobile: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer/{z}/{y}/{x}",
        },
        Subdomains: [],
        key: ""
    },
    Tencent: {
        Normal: {
            Map: "http://otile{s}.mqcdn.com/tiles/1.0.0/map/{x}/{y}/{z}.jpg",
        },
        Subdomains: ["0", "1", "2"],
        key: ""
    },
    Bing: {
        Normal: {
            Map: '',
        },
        Subdomains: ["0", "1", "2", "3"],
        key: ""
    },
    OSM: {
        Normal: {
            Map: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
        },
        Subdomains: ['a', 'b', 'c'],
        key: ""
    },
    MapBox: {
        Normal: {
            Map: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        },
        Subdomains: [],
        key: ""
    }
};

L.M = function(type, options) {
    return new L.TileLayer.MapProvider(type, options);
};


L.M.options = {
    maxZoom: 22,
    minZoom: 0,
    // tms: false
};

/**
 * 高德地图
 */
L.M.Gaode = L.M('GaoDe.Normal.Map', L.M.options);
L.M.Gaodimgem = L.M('GaoDe.Photo.Map', L.M.options);
L.M.Gaodimga = L.M('GaoDe.Photo.Annotion', L.M.options);
L.M.GaodePhoto = L.layerGroup([L.M.Gaodimgem, L.M.Gaodimga]);
L.M.GaodeEn = L.M('GaoDe.Normal.En', L.M.options);

/**
 * Baidu
 */
L.CRS.Baidu = new L.Proj.CRS('EPSG:900913',
    '+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs', {
        resolutions: function() {
            level = 19;
            let res = [];
            res[0] = Math.pow(2, 18);
            for (let i = 1; i < level; i++) {
                res[i] = Math.pow(2, (18 - i))
            }
            return res;
        }(),
        origin: [0, 0],
        bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
    });

L.M.Baidu = L.M('Baidu.Normal.Map', {
    maxZoom: 22,
    minZoom: 0,
    tms: true
});
L.M.Baiduimgem = L.M('Baidu.Photo.Map', {
    maxZoom: 22,
    minZoom: 0,
    tms: true
});
L.M.Baiduimga = L.M('Baidu.Photo.Annotion', {
    maxZoom: 22,
    minZoom: 0,
    tms: true
});
L.M.BaiduPhoto = L.layerGroup([L.M.Baiduimgem, L.M.Baiduimga]);
L.M.BaiduDark = L.M('Baidu.Normal.Dark', {
    maxZoom: 18,
    minZoom: 5,
    tms: true
});
L.M.BaiduTrafficBase = L.M('Baidu.Traffic.Map', {
    maxZoom: 22,
    minZoom: 0,
    tms: true
});
L.M.BaiduTraffic = L.layerGroup([L.M.Baidu, L.M.BaiduTrafficBase]);




/**
 * Google
 */
L.M.GoogleMap = L.M('Google.Normal.Map', L.M.options);
L.M.GooglePhoto = L.M('Google.Photo.Map', L.M.options);
L.M.GoogleMix = L.M('Google.Mix.Map', L.M.options);

/**
 * 天地图
 */
L.M.tiandituMap = L.M('TianDiTu.Normal.Map', L.M.options);
L.M.tiandituAn = L.M('TianDiTu.Normal.Annotion', L.M.options);
L.M.tiandituP = L.M('TianDiTu.Photo.Map', L.M.options);
L.M.tiandituPAn = L.M('TianDiTu.Photo.Annotion', L.M.options);
L.M.tiandituT = L.M('TianDiTu.Terrain.Map', L.M.options);
L.M.tiandituTAn = L.M('TianDiTu.Terrain.Annotion', L.M.options);

L.M.tianditu = L.layerGroup([L.M.tiandituMap, L.M.tiandituAn]);
L.M.tiandituPhoto = L.layerGroup([L.M.tiandituP, L.M.tiandituPAn]);
L.M.tiandituTerrain = L.layerGroup([L.M.tiandituT, L.M.tiandituTAn]);

/**
 * 智图地图|Arcgis
 */
L.M.Geoq = L.M('Geoq.Normal.Map', L.M.options);
L.M.GeoqBlue = L.M('Geoq.Normal.PurplishBlue', L.M.options);
L.M.GeoqGray = L.M('Geoq.Normal.Gray', L.M.options);
L.M.GeoqWarm = L.M('Geoq.Normal.Warm', L.M.options);

L.M.GeoqEn = L.M('Geoq.Normal.En', L.M.options);

/**
 * Tencent
 */
L.M.Tencent = L.M('Tencent.Normal.Map', L.M.options);

/**
 * Bing
 */
L.M.Bing = L.M('Bing.Normal.Map', {
    bing: 'bing',
    minZoom: 1
});

/**
 * OSM
 */
L.M.OSM = L.M('OSM.Normal.Map', L.M.options);

/**
 * MapBox
 */
L.M.MapBoxStreet = L.M('MapBox.Normal.Map', {
    maxZoom: 18,
    id: 'mapbox.streets'
});
L.M.MapBoxGray = L.M('MapBox.Normal.Map', {
    maxZoom: 18,
    id: 'mapbox.light'
});

L.M.baseLayers = {
    "高德地图": L.M.Gaode,
    "高德影像": L.M.GaodePhoto,
    "高德英文": L.M.GaodeEn,
    "百度地图": L.M.Baidu,
    "百度影像": L.M.BaiduPhoto,
    "百度实时路况": L.M.BaiduTraffic,
    // "百度蓝黑": Gaodimage,
    // "百度黑色": L.M.BaiduDark,
    // "百度草绿": Gaodimage,
    "google平面图": L.M.GoogleMap,
    "google影像": L.M.GooglePhoto,
    "google卫星混合图": L.M.GoogleMix,
    // "google英文": satelliteMap,
    "天地图": L.M.tianditu,
    "天地图影像": L.M.tiandituPhoto,
    "天地图地形": L.M.tiandituTerrain,
    "智图地图": L.M.Geoq,
    "智图午夜蓝": L.M.GeoqBlue,
    "智图灰色": L.M.GeoqGray,
    "智图暖色": L.M.GeoqWarm,
    "智图英文": L.M.GeoqEn,
    // "腾讯地图": L.M.Tencent,
    "Bing": L.M.Bing,
    "OSM": L.M.OSM,
    "MapBox街景": L.M.MapBoxStreet,
    "MapBox灰色": L.M.MapBoxGray,
}