//replaced the map display in main.js with the new OGC API 
//imports for Map layer
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import OGCMapTile from 'ol/source/OGCMapTile';
import TileLayer from 'ol/layer/Tile';
//imports for Vector Layers
import MVT from 'ol/format/MVT';
import OGCVectorTile from 'ol/source/OGCVectorTile';
import VectorTileLayer from 'ol/layer/VectorTile';
import View from 'ol/View';

const map = new Map({
  target: 'map',

  //creating the Layers
  layers: [
    new TileLayer({
    source: new OGCMapTile({
     
      url: 'https://maps.ecere.com/ogcapi/collections/blueMarble/map/tiles/WebMercatorQuad',
    }),
  })],

  view: new View({
    center: [0, 0],
    zoom: 1,
  }),
});
(async () => {
  //const airports = await fetch('https://demo.ldproxy.net/zoomstack/collections/airports/items?limit=100', {
  const airports = await fetch('http://localhost:8080/geoserver-2.23/ogc/features/collections/tiger:poi/items', {
    headers: {
      'Accept': 'application/geo+json'
    }
  }).then(response => response.json());

  map.addLayer(new ol.layer.Vector({
    source: new ol.source.Vector({
      features: new ol.format.GeoJSON().readFeatures(airports, { featureProjection: 'EPSG:3857' }),
      attributions: 'Contains OS data &copy; Crown copyright and database right 2021.'
    })
  }));
})();