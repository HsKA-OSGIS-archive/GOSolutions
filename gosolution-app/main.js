   
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
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

const map = new Map({
  target: 'map',

  //creating the Layers
  layers: [
    new TileLayer({
      source: new OGCMapTile({
      url: 'https://maps.ecere.com/ogcapi/collections/blueMarble/map/tiles/WebMercatorQuad',
      visibility: true,
      title: "BlueMarble"
        
      }),
    }),
/*   new VectorTileLayer({
    source: new OGCVectorTile({
      url: 'https://maps.ecere.com/ogcapi/collections/NaturalEarth:cultural:ne_10m_admin_0_countries/tiles/WebMercatorQuad',
      format: new MVT(),
    }),
  }),
 */],

  view: new View({
    center: [0, 0],
    zoom: 1,
  }),
});

(async () => {
  const airports = await fetch('http://localhost:5000/collections/ODL/items?limit=1500', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => response.json());

  map.addLayer(new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(airports, {dataProjection: 'EPSG:4326',  featureProjection: 'EPSG:3857'  }),
      //attributions: 'Contains OS data &copy; Crown copyright and database right 2021.'
    })
  }));
})();


//map.on('pointermove', showInfo);

//const info = document.getElementById('info');
//function showInfo(event) {
 // const features = map.getFeaturesAtPixel(event.pixel);
  //if (features.length == 0) {
   // info.innerText = '';
    //info.style.opacity = 0;
    //return;
 // }
  //const properties = features[0].getProperties();
  //info.innerText = JSON.stringify(properties, null, 2);
  //info.style.opacity = 1;
//}