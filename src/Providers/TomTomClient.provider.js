// @flow

import * as g from "geojson";

export class TomTomClientProvider {
  feature: g.Feature;
  constructor(feature: g.Feature) {
    if (feature) {
      if (TomTomClientProvider.detect(feature)) {
        this.feature = feature;
      } else {
        throw new Error("tom tom is not valid provider for this feature.");
      }
    } else {
      throw new Error("feature cannot be empty");
    }
  }
  static detect(feature: g.Feature) {
    return (
      feature &&
      feature.properties &&
      feature.properties.id !== undefined &&
      feature.properties.score !== undefined
    );
  }

  getDisplayName() {
    return this.feature.properties.address.freeformAddress;
  }

  getId() {
    return this.feature.properties.id;
  }

  getZoomLevelForPoint() {
    return 12;
  }
}
