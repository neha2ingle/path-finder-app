import React from "react";
import { App } from "./App";
import { render, fireEvent } from "@testing-library/react";
import { expectMapWithLocations } from "./Components/MyMap.test.fixture";
import {
  whenMyLocationsLoadedWithResult,
  myLocations,
  selectLocation,
  defaultStyle
} from "./App.test.fixture";
import mockAxios from "jest-mock-axios";
import { MapService } from "./Services/Map.service";

afterEach(() => {
  // cleaning up the mess left behind the previous test
  mockAxios.reset();
});

describe("View My Locations", () => {
  it("when location is selected", async () => {
    const { getByText, getAllByLabelText } = render(<App />);
    await whenMyLocationsLoadedWithResult({ getAllByLabelText }, myLocations);
    selectLocation({ getAllByLabelText }, myLocations[0]);
    // fireEvent.change(loc0);
    expect(getByText("Show All")).toBeInTheDocument();
    expect(getByText("Update")).toBeInTheDocument();
    expect(getByText("Delete")).toBeInTheDocument();
    await expectMapWithLocations(
      { getByText },
      { locations: [myLocations[0]], style: defaultStyle }
    );
  });

  it("when show all selected after location selection", async () => {
    const { getByText, getAllByLabelText, queryByText } = render(<App />);
    await whenMyLocationsLoadedWithResult({ getAllByLabelText }, myLocations);
    selectLocation({ getAllByLabelText }, myLocations[0]);
    fireEvent.click(getByText("Show All"));
    expect(queryByText("Update")).not.toBeInTheDocument();
    expect(queryByText("Delete")).not.toBeInTheDocument();
    await expectMapWithLocations(
      { getByText },
      {
        locations: new MapService().getLocationMarkers(myLocations),
        style: defaultStyle
      }
    );
  });
});
