var express = require('express')
const fs = require('fs')
var app = express()

app.get('/data', function (req, res) {
    fs.readFile('./ne_50m_urban_areas.geojson', (err, data) => {
        if (err) throw err;
        res.send(data)
    });
})

app.get('/', function (req, res) {
    res.send(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8' />
        <title>Add a new layer below labels</title>
        <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
        <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.js'></script>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
        <style>
            body { margin:0; padding:0; }
            #map { position:absolute; top:0; bottom:0; width:100%; }
        </style>
    </head>
    <body>
    
    <div id='map'></div>
    <script>
    mapboxgl.accessToken = 'pk.eyJ1IjoibGlodWl5aW4iLCJhIjoiY2o5czM2NDNvMGp2NTMycG9sYTQ2NTU1eCJ9.H82APs02cGMvwkGiDdsq1g';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-88.13734351262877, 35.137451890638886],
        zoom: 4
    });
    
    map.on('load', function () {
    
        var layers = map.getStyle().layers;
        // Find the index of the first symbol layer in the map style
        var firstSymbolId;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol') {
                firstSymbolId = layers[i].id;
                break;
            }
        }
        map.addLayer({
            'id': 'urban-areas-fill',
            'type': 'fill',
            'source': {
                'type': 'geojson',
                'data': 'http://localhost:3000/data'
            },
            'layout': {},
            'paint': {
                'fill-color': '#f08',
                'fill-opacity': 0.4
            }
        // This is the important part of this example: the addLayer
        // method takes 2 arguments: the layer as an object, and a string
        // representing another layer's name. if the other layer
        // exists in the stylesheet already, the new layer will be positioned
        // right before that layer in the stack, making it possible to put
        // 'overlays' anywhere in the layer stack.
        // Insert the layer beneath the first symbol layer.
        }, firstSymbolId);
    });
    </script>
    
    
    </body>
    </html>`)
})
  
app.listen(3000)