# GOSolutions

A web app for visualizing Geographic info using OGC-API standards using pygeoapi and OpenLayers

## Overview

This is the result of a project for the Open Source GIS course during the Winter 2022 semester as part of the Geomatics MSc, run by the [Karlsruhe University of Applied Sciences](https://www.h-ka.de/). The project as a whole aimed to explore the new features and possibilities offered by the new [OGC API](https://ogcapi.ogc.org/) framework, a new standard based on [OpenAPI](https://www.openapis.org/) which is succeeding the old [OWS](https://www.ogc.org/standards/owc) standard for geo APIs. The back-end was developed using [pygeoapi](https://pygeoapi.io/), the front-end using the [OpenLayers](https://openlayers.org/) framework. Example data was obtained from an OWS service of Radiological Data hosted by the German [Bundesamt fuer Strahlenschutz](https://www.imis.bfs.de/geoportal/) (BfS), which in turn was converted for hosting on our API using [GDAL/OGR](https://gdal.org/).

## Project Files

.  
|-- index.html  
|-- main.js  
|-- package-lock.json  
|-- package.json  
|-- readme.md  
|-- style.css  
|-- vite.config.js  
|-- media  
      &emsp;|-- legend.jpeg  
      &emsp;|-- logo.png  
      &emsp;|-- logo2.png  
|-- config  
      &emsp;|-- configurations.js

## Installation

Follow installation instructions of Back-end or Front-end as necessary

### Requirements

- Node.js
- Python 3

### Back End

To host this project locally:

1. Follow the "Install in 5 minutes" [guide](http://pygeoapi.io/) for pygeoapi, but don't change the ```config-example.yml```. Instead,download the ```gosolution-config.yml``` from our github and drop it inside your pygeoapi folder. On the command control Navigate into the folder ```Scribt``` and type ```activate```! 

Then the following: 

```set PYGEOAPI_CONFIG=gosolution-config.yml 
set PYGEOAPI_OPENAPI= gosolution-openapi.yml
pygeoapi openapi generate $PYGEOAPI_CONFIG > $PYGEOAPI_OPENAPI
```

pygeoapi requires OGR to use data hosted from a WFS, so using this repository's ```gosolution-config.yml``` will cause an error without it.

2. Download the correct gdal wheel file for your specific version of python and operating system from [Christoph Gohlke's website](https://www.lfd.uci.edu/~gohlke/pythonlibs/#gdal).

3. Navigate in console to the location of the wheel file from the previous step, and install with the following command:

```bash
python -m pip install path-to-wheel-file.whl
```

4. Launch the server.

```bash
pygeoapi serve
```

5. If you experience difficulty installing pygeoapi, there exist preconfigured virtual environments with pygeoapi already installed such as [OSGeoLive](http://live.osgeo.org/de/overview/pygeoapi_overview.html) or [Docker](https://docs.pygeoapi.io/en/latest/running-with-docker.html) which may be more accessible. Feel free to experiment.

### Front End

To get the front end running pull the ```gosolutions-app``` folder from the repository. Then navigate on the comand controll of your computer into the folder and run ```npm start```.

To display any other OGC API features, just change the variables in the ```configurations.js``` file. 

IMPORTANT: The current implementation of this server with the resources provided requires the use of the [CORS Plugin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en). This also requires setting the ```cors``` parameter to "true" in the ```config-example.yml``` file of pygeoapi.

## How to Use

The back end of this project can be edited in the ```config-example.yml``` of your pygeoapi installation. You can find the documentation of how to use that [here](https://docs.pygeoapi.io/en/latest/)

The front end of this project should work with any data hosted on an OGC API. Simply change the parameters found in ```config/configurations.js```. The variable ```server_url``` refers to a server publishing with an OGC API up to the word "collections", and the variable ```collection``` refers to the name of the collection that you wish to display.

## Project Documentation

### Concept

The initial concept of this project has remained largely unchanged since its inception: To explore the current possibilities of OGC API standards by rehosting (or relaying) publicly available OWS features and displaying them via OpenLayers. The scope and technologies used of the project have however undergone several revisions.

### Initial Scope

The initial, ambitious plan of the development team was to relay the data of a complete OWS server to an OpenLayers front end. This was quickly revised to provide a simple proof of concept through displaying one layer in OpenLayers. With the tech stack defined and the pipeline established, this project's ideal form would be a multi-featured demonstration of the capabilities of the OGC API.

### Hosting on Geoserver

This project was originally planned to be hosted using [Geoserver](https://geoserver.org/), which has a community built [OGC API Module](https://docs.geoserver.org/latest/en/user/community/ogc-api/index.html) which allows for the publishing of geodata in an OGC API compatible format. The Geoserver was installed on a virtual machine running [OSGeoLive](https://sourceforge.net/projects/osgeo-live/files/14.0/): A collection of geodata tools running on a Ubuntu platform maintained by [OSGeo](https://www.osgeo.org/): The Open Source Geospatial Foundation.

OSGeoLive 14 ships with an older version of Geoserver which does not support the OGC API module, and so instead a Web Archive version of the latest nightly build Geoserver was directly launched on an Apache Tomcat server. The OGC API module was then installed on top of this version of Geoserver, which did correctly provide the relevant APIs. However, the nightly build of Geoserver (v2.23) contained a [bug](https://osgeo-org.atlassian.net/browse/GEOS-10794) that prevents the use of a WFS as a data source. To overcome this, we downloaded a sample feature from the BfS in GeoJSON format, converted this to a Geopackage using [QGIS](https://www.qgis.org/en/site/) desktop GIS software, and hosted this on the server, which worked for some time. Later on, new updates also broke the compatibility of Geoserver with the OGC API module, however, when all bugs have been resolved, the front end available in this repository should work with Geoserver-hosted OGC APIs, as well as any other OGC API for that matter.

## Further Improvements/How to contribute

Contributions are always welcome, please leave a pull request explaining any changes done, and one of the team members will respond as soon as possible.

This repository lacks front-end features, flexible styling, and would benefit from the integration of a way to handle a complex OWS service with multiple feature collections. The main.js and configurations.js files could be changed to allow for multiple custom collections and features to be displayed. Similarly, updates as more OGC API features become available for public use could be of benefit.

## Authors

- [Max Kirsch](https://github.com/Max25832)
- [Caden Wells](https://github.com/CaLWells)
- [Felipe Vasquez](https://github.com/f-vasquez-tavera)
- [Ataullah Eliacy](https://github.com/Ataeliacy)

## Acknowledgements

Bundesamt für Strahlenschutz for use of their [Geoportal](https://www.imis.bfs.de/geoportal/)

- Monitors radiation in Germany
- Provides public geoportal with hourly updated data

## Attributions

- pygeoapi is licensed under an [MIT License](https://github.com/geopython/pygeoapi/blob/master/LICENSE.md). This project provides an example of its implementation with modified parameters and no changes to the source code.
- OpenLayers is licensed under a [BSD 2-Clause "Simplified" License](https://github.com/openlayers/openlayers/blob/main/LICENSE.md).
- BfS data is licensed under the [Ordinance on the determination of the terms of use for the provision of federal geodata (GeoNutzV)](http://www.gesetze-im-internet.de/geonutzv/), as well as [Data License Germany - Attribution - Version 2.0](https://www.govdata.de/dl-de/by-2-0).
