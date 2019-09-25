// @flow

import * as g from "geojson";

export class OSMClientProvider {
  feature: g.Feature;

  constructor(feature: g.Feature) {
    if (feature) {
      if (OSMClientProvider.detect(feature)) {
        this.feature = feature;
      } else {
        throw new Error("OSM is not valid provider for this feature.");
      }
    } else {
      throw new Error("feature cannot be empty");
    }
  }
  static detect(feature: g.Feature) {
    return (
      feature && feature.properties && feature.properties.osm_id !== undefined
    );
  }

  getDisplayName() {
    return this.feature.properties.display_name;
  }

  getId() {
    return this.feature.properties.place_id.toString();
  }

  getZoomLevelForPoint() {
    const place_rank = this.feature.properties.place_rank;
    let zoom = place_rank ? place_rank / 1.5 : 12;
    zoom = zoom > 19 ? 19 : zoom;
    return zoom;
  }
}
