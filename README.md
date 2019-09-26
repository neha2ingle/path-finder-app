# Path Finder

"Path Finder" helps you view, manage and organize your destinations, from across the world in simple and intutive manner. You can add anything as location be it your favorite restaurant, area to visit or entire city.
See all your destinations together in world map or check individual destination un-explored details with ease. 

## Providers

Project is configured to be compatible with showing data from different providers. So in same database destinations searched from different providers can be added.
Project showcases OSM (Open Street Map) API and TomTom API providers. 

### Client configuration

- Add your client provider in conditions at `providers\Client.provider.js` 

### Adding new provider

- Create new provider class with following signature

```js
import * as g from "geojson";

// Prefix name of the provider
class MyClientProvider {

  // constructor takes feature as argument
  new(feature: g.Feature);

  // static detect method checks if given feature belongs to this provider
  static detect(feature: g.Feature): boolean;

  // extract and provide display name for this feature
  getDisplayName(): string;

  // extract and provide provider specific id for this feature
  getId(): string;

 // extract and provide zoom level for point when highlighted in map
  getZoomLevelForPoint(): number;
}

```
- update as per client provider configuration
- Your new client provider is ready for use.

## Libraries

### React

This project created using [Create React App](https://github.com/facebook/create-react-app).

### Leaflet.js

Leaflet.js is used as library of choice to show maps. Apart from being open source it is most widely used and maintained.

### GeoJSON

GeoJSON is used as preffered format of communication and storage for map/locations data. It provides variety of formats to store and retrive data.

For example Munich city, pointer as well as boundry can be stored in same storage schema. User has choice to select format.

### React Bootstrap

Bootstrap and React bootstrap is used for UI/UX

### Axios

Used for requesting server data.

## Development

- >= IE 11 support for dev
   Project is setup to run on IE 11 and above. Also configured same for dev mode.

- HTTPS support: Project supports HTTPS protocol.

- flow support

- Debugging, with VS Code extensions

## Testing

React testing library, Jest, mock-axios is used to facilitate testing. Internal leaflet map mock is created to test map behaviour.


