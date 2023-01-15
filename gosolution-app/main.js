//replaced the map display in main.js with the new OGC API 
//imports from Openlayers
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
import {Circle, Style, Fill, Stroke} from 'ol/style';
import  Overlay  from 'ol/Overlay';
import  Tile  from 'ol/layer/Tile';
import  Group from 'ol/layer/Group';



const map = new Map({
  view: new View({
    center: [1000000, 6580000],
    zoom: 5.5,
  }),
  //creating the Layers
  target: 'map',
   

});


//Basemaps
const OSMStandard = new Tile({
    source: new OSM(),
    visible: true,
    title: "OSMStandard"
});

const blueMarble = new TileLayer({
    source: new OGCMapTile({
    url: 'https://maps.ecere.com/ogcapi/collections/blueMarble/map/tiles/WebMercatorQuad',
    }),
    visibility: false,
    title: "BlueMarble"
  });


//creating a Vectorlayer out of the ODL hourly gamma doese rate features 
(async () => {
  const odl_features = await fetch('http://localhost:5000/collections/ODL/items?limit=1500', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => response.json());

  const pointFeatures = new GeoJSON().readFeatures(odl_features, {dataProjection: 'EPSG:4326',  featureProjection: 'EPSG:3857'  });
  const layerFeature = new VectorLayer({
    source: new VectorSource({
      features: pointFeatures,
      }),

//styling of the Point Features by their Value 
style: function(feature, resolution){
    var lessthan008 = new Style( {
        image: new Circle( {
            radius: 5,
            fill: new Fill( {
                color: 'rgba(47, 214, 26, 0.7)',
                opacity: 0.6                        
            } ),
            stroke: new Stroke({
                color: 'rgba(47, 214, 26, 1)',
                width: 1,
              })
        } )
    } );

    var morethan008 = new Style( {
        image: new Circle( {
            radius: 5,
            fill: new Fill( {
                color: "rgba(188, 248, 113, 0.7)",
            } ),
            stroke: new Stroke({
                color: 'rgba(188, 248, 113, 1)',
                width: 1,
              })
        } )
    } );

    var morethan011 = new Style( {
        image: new Circle( {
            radius: 5,
            fill: new Fill( {
                color: "rgba(244, 248, 72, 0.7)",
            } ),
            stroke: new Stroke({
                color: 'rgba(244, 248, 72, 1)',
                width: 1,
              })
        } )
    } );
    
    var morethan014 = new Style( {
        image: new Circle( {
            radius: 5,
            fill: new Fill( {
                color: "rgba(212, 195, 6, 0.7)",
            } ),
            stroke: new Stroke({
                color: 'rgba(212, 195, 6, 1)',
                width: 1,
              })
        } )
    } );
    
    var morethan017 = new Style( {
        image: new Circle( {
            radius: 5,
            fill: new Fill( {
                color: "rgba(245, 166, 35, 0.7)",
            } ),
            stroke: new Stroke({
                color: 'rgba(245, 166, 35, 1)',
                width: 1,
              })
        } )
    } );

    var morethan02 = new Style( {
        image: new Circle( {
            radius: 5,
            fill: new Fill( {
                color: "rgba(223, 112, 48, 0.7)",
            } ),
            stroke: new Stroke({
                color: 'rgba(223, 112, 48, 1)',
                width: 1,
              })
        } )
    } );
    
    var morethan04 = new Style( {
        image: new Circle( {
            radius: 5,
            fill: new Fill( {
                color: "rgba(209, 72, 13, 0.7)",
            } ),
            stroke: new Stroke({
                color: 'rgba(209, 72, 13, 1)',
                width: 1,
              })
        } )
    } );
    
    var morethan06 = new Style( {
        image: new Circle( {
            radius: 5,
            fill: new Fill( {
                color: "rgba(208, 2, 27, 0.7)",
            } ),
            stroke: new Stroke({
                color: 'rgba(208, 2, 27, 1)',
                width: 1,
              })

        } )
    } );
 
// assigning styles to features depending on their value

    if ( feature.get('value') <= 0.08) {
        return [lessthan008];
    } else if(0.11 >= feature.get('value') > 0.08) {
        return[morethan008];
    } else if(0.14 >= feature.get('value') > 0.11) {
        return[morethan011];
    } else if(0.17 >= feature.get('value') > 0.14) {
        return[morethan014];
    } else if(0.2 >= feature.get('value') > 0.17) {
        return[morethan017];
    } else if(0.4 >= feature.get('value') > 0.2) {
        return[morethan02];
    } else if(0.6 >= feature.get('value') > 0.4) {
        return[morethan04];
    } else {
        return [morethan06];
    }
}});
//adding of the Vector Layer to the Map
map.addLayer(layerFeature);

})();



//******************************** MAP FUNCTIONS ********************************

//feature popup function 
const overlayContainerElement = document.querySelector('.overlay-container');
const overlayLayer = new Overlay({
    element: overlayContainerElement
})

map.addOverlay(overlayLayer);
const overlayFeatureUnit = document.getElementById('feature-unit');
const overlayFeatureValue = document.getElementById('feature-value');
const overlayFeatureValueC = document.getElementById('feature-valueC');
const overlayFeatureValueT = document.getElementById('feature-valueT');

map.on('click', function(e){
    map.forEachFeatureAtPixel(e.pixel, function(feature,layer){ 
        overlayLayer.setPosition(undefined);
        let pointFeatureCoord = e.coordinate;
        let pointFeatureUnit = String("Unit: ") + feature.get('unit'); 
        let pointFeatureValue = String("Total Value: ") + feature.get('value'); 
        let pointFeatureValueC = String("Cosmic Value: ") +feature.get('value_cosmic'); 
        let pointFeatureValueT = String("Terrestrial Value: ") +feature.get('value_terrestrial'); 
        overlayLayer.setPosition(pointFeatureCoord);
        overlayFeatureUnit.innerHTML = pointFeatureUnit; 
        overlayFeatureValue.innerHTML = pointFeatureValue;  
        overlayFeatureValueC.innerHTML = pointFeatureValueC; 
        overlayFeatureValueT.innerHTML = pointFeatureValueT; 
    })
});

// Layer Switcher
const baselayerGroup = new Group({
    layers:[blueMarble, OSMStandard]
  });

  map.addLayer(baselayerGroup); 
const  baselayerElements = document.querySelectorAll('.LayerSwitch > input[type=radio]');
for (let baselayerElement of baselayerElements){
    baselayerElement.addEventListener('change', function(){
        let baseElementLayerValue= this.value;
        baselayerGroup.getLayers().forEach(function(element,index,array){
            let baselayerTytle = element.get('title');
            element.setVisible(baselayerTytle === baseElementLayerValue);
            console.log(baselayerTytle, 'baseElementLayerValue: '+ baseElementLayerValue) 

        })
    })

    
}


