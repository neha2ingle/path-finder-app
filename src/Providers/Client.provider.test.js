// @flow

import { getClientProvider } from "./client.provider";
import * as g from "geojson";
import * as osmFixture from "../Fixtures/OSM/OSMCommon.fixture";
import * as tomTomFixture from "../Fixtures/TomTom/TomTomCommon.fixture";
import { OSMClientProvider } from "./OSMClient.provider";
import { TomTomClientProvider } from "./TomTomClient.provider";

describe("client provider", () => {
  it("when location is null", () => {
    const exc = () => {
      getClientProvider(null);
    };
    expect(exc).toThrowError();
  });

  it("when osm location provided", () => {
    const provider = getClientProvider(
      osmFixture.locationWithPointAndPlaceRankBelow30
    );
    expect(provider instanceof OSMClientProvider).toBeTruthy();
  });

  it("when tom tom location provided", () => {
    const provider = getClientProvider(tomTomFixture.location);
    expect(provider instanceof TomTomClientProvider).toBeTruthy();
  });

  it("when custom location provided", () => {
    const feature: g.Feature = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [0, 0]
      }
    };
    expect(() => {
      getClientProvider(feature);
    }).toThrowError();
  });
});
