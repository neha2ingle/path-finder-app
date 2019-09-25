// @flow

import { OSMClientProvider } from "./OSMClient.provider";
import { TomTomClientProvider } from "./TomTomClient.provider";
import * as g from "geojson";

export function getClientProvider(feature: g.Feature) {
  if (feature) {
    const cp = OSMClientProvider.detect(feature)
      ? new OSMClientProvider(feature)
      : TomTomClientProvider.detect(feature)
      ? new TomTomClientProvider(feature)
      : null;
    if (cp) {
      return cp;
    } else {
      throw new Error("No client provider found.");
    }
  } else {
    throw new Error("feature cannot be empty");
  }
}
