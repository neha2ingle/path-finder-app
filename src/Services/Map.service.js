// @flow

import * as L from "leaflet";
import * as g from "geojson";
import { getClientProvider } from "../Providers/Client.provider";

export interface MapView {
  center: L.LatLng;
  zoom: number;
  bounds: L.LatLngBounds;
}

export class MapService {
  getCenterZoomAndBounds(locations: g.Feature[]): MapView {
    let { zoom, center, bounds }: MapView = {
      zoom: 2,
      center: [0, 0],
      bounds: null
    };
    if (locations && locations.length > 0) {
      if (locations.length === 1) {
        const location = locations[0];
        bounds = L.geoJSON(location).getBounds();
        if (bounds.getSouthWest().equals(bounds.getNorthEast())) {
          center = bounds.getNorthEast();
          const cp = getClientProvider(location);
          zoom = cp.getZoomLevelForPoint();
          bounds = null;
        }
      } else {
        bounds = L.geoJSON({
          type: "FeatureCollection",
          features: locations
        }).getBounds();
      }
    }
    return { center, zoom, bounds };
  }

  getLocationMarkers(locations: g.Feature[]) {
    if (!locations) return locations;

    return locations.map<g.Feature>(loc => {
      if (loc.geometry.type === "Point") {
        return {
          type: "Feature",
          properties: { ...loc.properties },
          bbox: loc.bbox.slice(),
          geometry: {
            type: "Point",
            coordinates: loc.geometry.coordinates.slice()
          }
        };
      } else {
        const bounds = L.geoJSON(loc).getBounds();
        const center = bounds.getCenter();
        return {
          type: "Feature",
          properties: { ...loc.properties },
          bbox: bounds
            .toBBoxString()
            .split(",")
            .map(x => parseFloat(x)),
          geometry: {
            type: "Point",
            coordinates: [center.lng, center.lat]
          }
        };
      }
    });
  }
}
