# Animal Welfare Tracker 

## GovHack 2020 submission
Team Lonely Knight

## Overview
This project is a proof of concept application submitted for GovHack 2020. It is a crowdsourcing experiment to that seeks to capture livestock welfare threats in Victoria. This project is not complete, but show only a basic map and interface to represent the ideas of how a full size application would work. The main plannned features of the application are listed below:

Signed up users submit incidents by clicking on a map and making an entry, including uploading photos if required. These incident reports are categorised by livestock species (cattle, horses, sheep, goats etc), by threat type (disease, environmental threat, parasites, predation, poisonous plants etc) and by severity (livethreatening, serious, moderate, not serious). Entries are geotagged and time-stamped.

The application is a website which is optimised for mobile use. It consists of a map which can be used by signed in users to enter incidents and observations. It displays a number of relevant layers that are publically available datasets, such as soil information, elevation, boundaries etc. 

The goal of the application is to display the reported incidents, which could directly serve as warnings to livestock owners. However, the bigger goal is to collect data to get a better understanding of combinations of environmental factors that can affect livestock welfare for different classes of animals. Example being grass tetany in cattle where soil types, pasture composition and weather are implicated). From this, it is possible to produce warnings for livestock owners. One benefit to signed up users would be the receipt of notifications of close by incidents as well as warnings calculated based on prior observations.

The overall goal of this citizen science experiment is to establish not only a localised network of users who can help inform each other, but also to contribute to the overall understanding of factors that drive livestock welfare issues.

---------------------------------------------------------

## Future work
Implement a full backend API with PostGREST or similar to handle the user auth and data submission as well as providing data points for the map layer with incidents. This should be implemented as OpenAPI so that interoperability and future re-use of the data is built into the project.

Map to include additional layers such as:
- elevation
- boundaries
- more soil info such as waterlogging, salinity, trace element shortages
- land use
- EPA 

Incidents shown on the map to be filterable by:
- species
- incident type
- incident severity
- timestamp

Incidents shown on map to show contextual information for the location and timestamp:
- weather 
- soil information
- pasture (satellite info)

Incorporate BOM warnings

-------------------------------------------------

## Components used:
###mapping
- [leaflet.js](https://leafletjs.com/)
- [Leaflet-providers](https://github.com/leaflet-extras/leaflet-providers) - see [List of providers](http://leaflet-extras.github.io/leaflet-providers/preview/index.html)
- [leaflet.shapefile](https://github.com/calvinmetcalf/leaflet.shapefile)
- [leaflet.wms.js](https://github.com/heigeo/leaflet.wms)


### other
[Bootstrap 4 Boilerplate](https://github.com/tomcatbuzz/Bootstrap-4-Boilerplate)

