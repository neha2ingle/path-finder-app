// @flow

import React from "react";
import { render } from "@testing-library/react";
import { MyMap } from "./MyMap";

import { expectEmptyMap, expectMapWithLocations } from "./MyMap.test.fixture";

import * as g from "geojson";
import * as tomTomFixture from "./../Fixtures/TomTom/TomTomCommon.fixture";
import * as osmFixture from "./../Fixtures/OSM/OSMCommon.fixture";

describe("rendering", () => {
  it("when no location provided", () => {
    const { getByText, queryByText } = render(<MyMap />);
    expectEmptyMap({ getByText, queryByText });
  });

  describe("OSM", () => {
    const locsWithDesc: { desc: string, locations: g.Feature[] }[] = [
      { desc: "has boundry", locations: [osmFixture.locationWithBoundry] },
      {
        desc: "has point with place rank < 30",
        locations: [osmFixture.locationWithPointAndPlaceRankBelow30]
      },
      {
        desc: "with multiple locations",
        locations: [
          osmFixture.mumbaiSearch.features[0],
          osmFixture.munichSearch.features[0]
        ]
      }
    ];
    for (const locWithDesc of locsWithDesc) {
      it("when location provided " + locWithDesc.desc, async () => {
        const { getByText } = render(
          <MyMap locations={locWithDesc.locations} />
        );
        await expectMapWithLocations(
          { getByText },
          { locations: locWithDesc.locations }
        );
      });
    }
  });

  describe("TomTom", () => {
    it("when location provided ", async () => {
      const locs = [tomTomFixture.location];
      const { getByText } = render(<MyMap locations={locs} />);
      await expectMapWithLocations({ getByText }, { locations: locs });
    });
  });
});
