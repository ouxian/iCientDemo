///**
// * Created by chenhaiyang on 2019/12/2.
// */
import mapboxgl from 'mapbox-gl';
import  '@supermap/iclient-mapboxgl';

//01
//var map;
//var url =  "http://support.supermap.com.cn:8090/iserver/services/map-world/rest/maps/World";
//var attribution = "© Mapbox  | Map Data © SuperMap iServer with © SuperMap iClient";
//
//var map = new mapboxgl.Map({
//    container: 'map',
//    style: {
//        "version": 8,
//        "sources": {
//            "raster-tiles": {
//                "attribution": attribution,
//                "type": "raster",
//                "tiles": ['http://support.supermap.com.cn:8090/iserver/services/maps/rest/maps/World/zxyTileImage.png?prjCoordSys={"epsgCode":3857}&z={z}&x={x}&y={y}'],
//                "tileSize": 256
//            }
//        },
//        "layers": [{
//            "id": "simple-tiles",
//            "type": "raster",
//            "source": "raster-tiles",
//            "minzoom": 0,
//            "maxzoom": 22
//        }],
//        "sprite": "http://iclient.supermap.io/web/styles/street/sprite"
//    },
//    center: [0, 0],
//    maxZoom: 18,
//    zoom: 2
//});
//
//map.on('load', function () {
//    query();
//});
//
//function query() {
//    map.addLayer({
//        'id': 'polygonLayer',
//        'type': 'fill',
//        'source': {
//            'type': 'geojson',
//            'data': {
//                'type': 'Feature',
//                'geometry': {
//                    'type': 'Polygon',
//                    'coordinates': [[[0, 0], [60, 0], [60, 39], [0, 39], [0, 0]]]
//                }
//            }
//        },
//        'paint': {
//            'fill-outline-color': 'blue',
//            'fill-color': 'rgba(0, 0, 255, 0.1)'
//        }
//    });
//    var param = new SuperMap.QueryByBoundsParameters({
//        queryParams: {
//            name: "Capitals@World.1"
//        },
//        bounds: new mapboxgl.LngLatBounds([0, 0], [60, 39])
//    });
//
//    new mapboxgl.supermap.QueryService(url).queryByBounds(param, function (serviceResult) {
//        var recordsets = serviceResult && serviceResult.result && serviceResult.result.recordsets;
//        var features = recordsets && recordsets[0] && recordsets[0].features;
//        map.addLayer({
//            "id": "points",
//            "type": "circle",
//            "paint": {
//                "circle-radius": 6,
//                "circle-color": "#007cbf",
//                "circle-opacity": 0.1,
//                "circle-stroke-width": 2,
//                "circle-stroke-color": "#007cbf",
//                "circle-stroke-opacity": 0.5
//            },
//            "source": {
//                "type": "geojson",
//                "data": features
//            }
//        });
//    });
//}


//02
var host = window.isLocal ? window.server : "http://support.supermap.com.cn:8090";
var attribution = "<a href='https://www.mapbox.com/about/maps/' target='_blank'>© Mapbox </a>" +
    " with <span>© <a href='http://iclient.supermap.io' target='_blank'>SuperMap iClient</a> | </span>" +
    " Map Data <span>© <a href='http://support.supermap.com.cn/product/iServer.aspx' target='_blank'>SuperMap iServer</a></span> ";

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: {
        "version": 8,
        "sources": {
            "raster-tiles": {
                "attribution": attribution,
                "type": "raster",
                "tiles": [host + '/iserver/services/map-china400/rest/maps/China/zxyTileImage.png?z={z}&x={x}&y={y}'],
                "tileSize": 256
            }
        },
        "layers": [{
            "id": "simple-tiles",
            "type": "raster",
            "source": "raster-tiles",
            "minzoom": 0,
            "maxzoom": 22
        }]
    },
    center: [120.143, 30.236], // starting position
    zoom: 3 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl(), 'top-left');





