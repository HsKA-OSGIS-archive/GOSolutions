# GOSolutions
*A web app for visualizing Geographic info using OGC-API standards using pygeoapi and OpenLayers*
## Overview
This is the result of a project for the Open Source GIS course as parts of the Geomatics MSc, run by the [Karlsruhe University of Applied Sciences](https://www.h-ka.de/). The project as a whole was to explore the new features and possibilities offered by the new [OGC API](https://ogcapi.ogc.org/) framework, a new standard based on [OpenAPI](https://www.openapis.org/) which is succeeding the old [OWS](https://www.ogc.org/standards/owc) standard for geo APIs. The back-end was developed using [pygeoapi](https://pygeoapi.io/), the front-end uses the [OpenLayers](https://openlayers.org/) framework. Example data was obtained from an OWS service of Radiological Data hosted by the German [Bundesamt fuer Strahlenschutz](https://www.imis.bfs.de/geoportal/), which in turn was converted for hosting on our API using [GDAL/OGR](https://gdal.org/).
## Project Files
List of files goes here
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

5. If you experience difficulty installing pygeoapi, there exist preconfigured virtual environments with pygeoap already installed such as [OSGeoLive](http://live.osgeo.org/de/overview/pygeoapi_overview.html) or [Docker](https://docs.pygeoapi.io/en/latest/running-with-docker.html) which may be more accessible. Feel free to experiment.
### Front End
Instructions go here
## How to Use
The back end of this project can be edited in the ```config-example.yml``` of your pygeoapi installation. You can find the documentation of how to use that [here](https://docs.pygeoapi.io/en/latest/)

The front end of this project should work with any data hosted on an OGC API. Simply change the parameters found in ```config.js```.
## Project Documentation
Describe development process here
## Authors
- [Max Kirsch](https://github.com/Max25832)
- [Caden Wells]()
- [Felipe Vasquez](https://github.com/f-vasquez-tavera)
- [Ataullah Eliacy]()
## Acknowledgement
## License