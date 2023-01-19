# GOSolutions
*A web app for visualizing Geographic info using OGC-API standards using pygeoapi and OpenLayers*
## Overview
This is the result of a project for the Open Source GIS course during the Winter 2022 semester as part of the Geomatics MSc, run by the [Karlsruhe University of Applied Sciences](https://www.h-ka.de/). The project as a whole aimed to explore the new features and possibilities offered by the new [OGC API](https://ogcapi.ogc.org/) framework, a new standard based on [OpenAPI](https://www.openapis.org/) which is succeeding the old [OWS](https://www.ogc.org/standards/owc) standard for geo APIs. The back-end was developed using [pygeoapi](https://pygeoapi.io/), the front-end using the [OpenLayers](https://openlayers.org/) framework. Example data was obtained from an OWS service of Radiological Data hosted by the German [Bundesamt fuer Strahlenschutz](https://www.imis.bfs.de/geoportal/), which in turn was converted for hosting on our API using [GDAL/OGR](https://gdal.org/).
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


## Installation
NOT FINAL -- Subject to changes based on final build.
### Requirements
- Node.js
- OpenLayers
- Python 3

### Back End
To host this project locally:
1. Follow the "Install in 5 minutes" [guide](http://pygeoapi.io/) for pygeoapi, but don't change the ```config-example.yml```. Instead, use the ```config-example.yml``` provided in this directory, but don't run the server yet. pygeoapi requires OGR to use data hosted from a WFS, so using this repository's ```config-example.yml``` will cause an error without it. 
2. Download the correct gdal wheel file for your specific version of python and operating system from [Christoph Gohlke's website](https://www.lfd.uci.edu/~gohlke/pythonlibs/#gdal).
3. Navigate in console to the location of the wheel file from the previous step, and install with the following command:
```
python -m pip install path-to-wheel-file.whl
```
4. Launch the server

5. If you experience difficulty installing pygeoapi, there exist preconfigured virtual environments with pygeoapi already installed such as [OSGeoLive](http://live.osgeo.org/de/overview/pygeoapi_overview.html) or [Docker](https://docs.pygeoapi.io/en/latest/running-with-docker.html) which may be more accessible. Feel free to experiment.
### Front End
Instructions go here. Describe how the front end should be able to work with any OGC API
## How to Use
The back end of this project can be edited in the ```config-example.yml``` of your pygeoapi installation. You can find the documentation of how to use that [here](https://docs.pygeoapi.io/en/latest/)

The front end of this project should work with any data hosted on an OGC API. Simply change the parameters found in ```config.js```.
## Project Documentation
### Concept
The initial concept of this project has remained largely unchanged since its inception: To explore the current possibilities of OGC API standards by rehosting (or relaying) publicly available OWS features and displaying them via OpenLayers. The scope and technologies used of the project have however undergone several revisions.
### Initial Scope
The initial, ambitious plan of the development team was to relay the data of a complete OWS server to an OpenLayers front end. This was 
### Hosting on Geoserver
## Further Improvements/How to contribute
## Authors
- [Max Kirsch](https://github.com/Max25832)
- [Caden Wells](https://github.com/CaLWells)
- [Felipe Vasquez](https://github.com/f-vasquez-tavera)
- [Ataullah Eliacy](https://github.com/Ataeliacy)
## Acknowledgement
Bundesamt für Strahlenschutz
- Monitors radiation in Germany
- Provides public geoportal with hourly updated data
## Attributions
TODO More attributions?
- pygeoapi is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). This project provides an example of its implementation with modified parameters and no changes to the source code. The exact installation used can be seen in the /pygeoapi folder of this repository.
- OpenLayers is licensed under a [BSD 2-Clause "Simplified" License](https://github.com/openlayers/openlayers/blob/main/LICENSE.md).
## License
BSD 2-Clause License

Copyright 2022-present, GOSolutions Contributors.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

    Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


