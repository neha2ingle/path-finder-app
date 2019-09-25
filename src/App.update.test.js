import React from "react";
import { App } from "./App";
import { render, fireEvent } from "@testing-library/react";
import { expectMapWithLocations } from "./Components/MyMap.test.fixture";
import mockAxios from "jest-mock-axios";
import * as osmFixture from "./Fixtures/OSM/OSMCommon.fixture";
import {
  expectEmptySearchForm,
  getByLocation,
  whenSearchedLocationWithResult,
  whenMyLocationsLoadedWithResult,
  myLocations,
  selectLocation,
  locationsApiUrl,
  defaultStyle
} from "./App.test.fixture";

afterEach(() => {
  // cleaning up the mess left behind the previous test
  mockAxios.reset();
});

describe("Update", () => {
  it("when update is clicked", async () => {
    const {
      getByText,
      getByTestId,
      queryByTestId,
      queryByText,
      getAllByLabelText,
      unmount
    } = render(<App />);

    await whenMyLocationsLoadedWithResult({ getAllByLabelText }, myLocations);
    selectLocation({ getAllByLabelText }, myLocations[0]);
    fireEvent.click(getByText("Update"));

    expect(queryByTestId("myLocations")).not.toBeInTheDocument();
    expect(getByText("Edit Location")).toBeInTheDocument();
    expectEmptySearchForm(getByTestId, getByText, queryByText);
  });

  it("when update with cancel", async () => {
    const { getByText, getByTestId, getAllByLabelText, queryByTestId } = render(
      <App />
    );

    await whenMyLocationsLoadedWithResult({ getAllByLabelText }, myLocations);
    selectLocation({ getAllByLabelText }, myLocations[0]);
    fireEvent.click(getByText("Update"));
    fireEvent.click(getByText("Cancel"));
    expect(queryByTestId("searchForm")).not.toBeInTheDocument();
    expect(getByTestId("myLocations")).toBeInTheDocument();
  });

  it("when update with save", async () => {
    const { getByText, getByTestId, getAllByLabelText, queryByTestId } = render(
      <App />
    );

    await whenMyLocationsLoadedWithResult({ getAllByLabelText }, myLocations);
    selectLocation({ getAllByLabelText }, myLocations[0]);
    fireEvent.click(getByText("Update"));

    await whenSearchedLocationWithResult(
      { getByTestId, getAllByLabelText, queryByTestId },
      "frankfurt, Germany",
      osmFixture.frankfurtSearch
    );

    const locationToSelect = osmFixture.frankfurtSearch.features[1];
    selectLocation({ getAllByLabelText }, locationToSelect);

    mockAxios.reset();

    fireEvent.click(getByText("Save"));

    const responseStub = Object.assign({}, locationToSelect, {
      id: myLocations[0].id
    });
    expect(mockAxios.put).toHaveBeenCalledWith(
      `${locationsApiUrl}/${myLocations[0].id}`,
      locationToSelect
    );
    // getting the promise made when the most recent request was made
    let lastPromise = mockAxios.lastPromiseGet();
    // simulating a server response
    mockAxios.mockResponse({ data: responseStub });
    lastPromise.then(async data => {
      expect(getByLocation({ getAllByLabelText }, data)).toBeInTheDocument();
      await expectMapWithLocations(
        { getByText },
        { locations: [data], style: defaultStyle }
      );
      expect(queryByTestId("searchForm")).not.toBeInTheDocument();
    });
  });
});
