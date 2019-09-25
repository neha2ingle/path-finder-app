// @flow

import { OSMClientProvider } from "./OSMClient.provider";
import * as osmFixture from "../Fixtures/OSM/OSMCommon.fixture";
import * as tomTomFixture from "../Fixtures/TomTom/TomTomCommon.fixture";

describe("OSM client provider", () => {
  it("when location is null", () => {
    expect(() => {
      new OSMClientProvider(null);
    }).toThrowError();
  });

  it("when non OSM location is provided", () => {
    expect(() => {
      new OSMClientProvider(tomTomFixture.location);
    }).toThrowError();
  });

  it("when valid location is provided", () => {
    const provider = new OSMClientProvider(
      osmFixture.locationWithPointAndPlaceRankBelow30
    );
    expect(provider instanceof OSMClientProvider).toBeTruthy();
  });
  it("when getdisplayname", () => {
    const provider = new OSMClientProvider(
      osmFixture.locationWithPointAndPlaceRankBelow30
    );
    expect(
      provider.getDisplayName() ===
        osmFixture.locationWithPointAndPlaceRankBelow30.properties.display_name
    ).toBeTruthy();
  });
  it("when getid", () => {
    const provider = new OSMClientProvider(
      osmFixture.locationWithPointAndPlaceRankBelow30
    );
    expect(
      provider.getId() ===
        osmFixture.locationWithPointAndPlaceRankBelow30.properties.place_id.toString()
    ).toBeTruthy();
  });

  describe("Zoom level", () => {
    for (const locWithDesc of [
      [
        "has point with place rank < 30",
        osmFixture.locationWithPointAndPlaceRankBelow30,
        15 / 1.5
      ],
      [
        "has point with no place rank",
        osmFixture.locationWithPointAndNoPlaceRank,
        12
      ],
      [
        "has point with place rank > 30",
        osmFixture.locationWithPlaceRankAbove30,
        19
      ],
      [
        "has point with place rank = 30",
        osmFixture.locationWithPointAndPlaceRankEquals30,
        19
      ]
    ]) {
      it("when location provided " + locWithDesc[0], async () => {
        const loc = locWithDesc[1];
        const provider = new OSMClientProvider(loc);
        expect(provider.getZoomLevelForPoint() === locWithDesc[2]).toBeTruthy();
      });
    }
  });
});
