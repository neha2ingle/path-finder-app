// @flow

import { TomTomClientProvider } from "./TomTomClient.provider";
import * as osmFixture from "../Fixtures/OSM/OSMCommon.fixture";
import * as tomtomFixture from "../Fixtures/TomTom/TomTomCommon.fixture";

describe("tom tom client provider", () => {
  it("when location is null", () => {
    expect(() => {
      new TomTomClientProvider(null);
    }).toThrowError();
  });

  it("when valid location is provided", () => {
    const provider = new TomTomClientProvider(tomtomFixture.location);
    expect(provider instanceof TomTomClientProvider).toBeTruthy();
  });

  it("when recieves non TomTom location", () => {
    expect(() => {
      new TomTomClientProvider(osmFixture.locationWithBoundry);
    }).toThrowError();
  });

  it("when getdisplayname", () => {
    const provider = new TomTomClientProvider(tomtomFixture.location);
    expect(
      provider.getDisplayName() ===
        tomtomFixture.location.properties.address.freeformAddress
    ).toBeTruthy();
  });

  it("when getid", () => {
    const provider = new TomTomClientProvider(tomtomFixture.location);
    expect(
      provider.getId() === tomtomFixture.location.properties.id.toString()
    ).toBeTruthy();
  });

  it("when getzoomlevelforpoint", () => {
    const provider = new TomTomClientProvider(tomtomFixture.location);
    expect(provider.getZoomLevelForPoint() === 12).toBeTruthy();
  });
});
