var express = require('express')
const fs = require('fs')
var app = express()

app.get('/data', function (req, res) {
    fs.readFile('./indoor-3d-map.geojson', (err, data) => {
        if (err) throw err;
        res.send(data)
    });
})

app.get('/', function (req, res) {
    res.send(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8' />
        <title>Extrude polygons for 3D indoor mapping.</title>
        <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
        <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.js'></script>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
        <style>
            body { margin:0; padding:0; }
            #map { position:absolute; top:0; bottom:0; width:100%; }
        </style>
    </head>
    <body>
    
    <div id='map'>
    </div>
    <script>
    mapboxgl.accessToken = 'pk.eyJ1IjoibGlodWl5aW4iLCJhIjoiY2o5czM2NDNvMGp2NTMycG9sYTQ2NTU1eCJ9.H82APs02cGMvwkGiDdsq1g';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-87.61694, 41.86625],
        zoom: 15.99,
        pitch: 40,
        bearing: 20
    });
    
    map.on('load', function() {
    
        map.addLayer({
            'id': 'room-extrusion',
            'type': 'fill-extrusion',
            'source': {
                // Geojson Data source used in vector tiles, documented at
                // https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
                'type': 'geojson',
                'data': 'http://localhost:3000/data'
            },
            'paint': {
                // See the Mapbox Style Spec for details on property functions
                // https://www.mapbox.com/mapbox-gl-style-spec/#types-function
                'fill-extrusion-color': {
                    // Get the fill-extrusion-color from the source 'color' property.
                    'property': 'color',
                    'type': 'identity'
                },
                'fill-extrusion-height': {
                    // Get fill-extrusion-height from the source 'height' property.
                    'property': 'height',
                    'type': 'identity'
                },
                'fill-extrusion-base': {
                    // Get fill-extrusion-base from the source 'base_height' property.
                    'property': 'base_height',
                    'type': 'identity'
                },
                // Make extrusions slightly opaque for see through indoor walls.
                'fill-extrusion-opacity': 0.5
            }
        });
    });
    </script>
    
    </body>
    </html>`)
})
  
app.listen(3000)