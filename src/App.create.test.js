import React from "react";
import { App } from "./App";
import { render, fireEvent } from "@testing-library/react";
import {
  expectEmptyMap,
  expectMapWithLocations
} from "./Components/MyMap.test.fixture";
import mockAxios from "jest-mock-axios";
import * as osmFixture from "./Fixtures/OSM/OSMCommon.fixture";
import {
  expectEmptySearchForm,
  getByLocation,
  whenSearchedLocationWithResult,
  selectLocation,
  defaultStyle,
  locationsApiUrl,
  pageLoad
} from "./App.test.fixture";

afterEach(() => {
  // cleaning up the mess left behind the previous test
  mockAxios.reset();
});

describe("Create", () => {
  it("when create is clicked", async () => {
    const { getByText, getByTestId, queryByText, queryByTestId } = render(
      <App />
    );

    await pageLoad();
    const createButton = getByText("Create");
    fireEvent.click(createButton);
    expect(queryByTestId("myLocations")).not.toBeInTheDocument();
    expectEmptySearchForm(getByTestId, getByText, queryByText);
    expect(getByText("New Location")).toBeInTheDocument();
    expectEmptyMap({ getByText, queryByText }, { style: defaultStyle });
  });

  it("When cancel clicked", async () => {
    const { getByText, getByTestId, queryByTestId, queryByText } = render(
      <App />
    );
    await pageLoad();

    fireEvent.click(getByText("Create"));
    fireEvent.click(getByText("Cancel"));
    expect(getByTestId("myLocations")).toBeInTheDocument();
    expect(queryByTestId("searchForm")).not.toBeInTheDocument();
    expectEmptyMap({ getByText, queryByText }, { style: defaultStyle });
  });

  it("when search location not found", async () => {
    const { getByText, getByTestId, queryByTestId, getAllByLabelText } = render(
      <App />
    );

    await pageLoad();
    fireEvent.click(getByText("Create"));

    await whenSearchedLocationWithResult(
      { getByTestId, getAllByLabelText, queryByTestId },
      "I am not location",
      osmFixture.searchResponseEmpty
    );
    expect(getByText("No locations found.")).toBeInTheDocument();
  });

  it("when save is clicked", async () => {
    const { getByText, getByTestId, queryByTestId, getAllByLabelText } = render(
      <App />
    );

    await pageLoad();
    fireEvent.click(getByText("Create"));

    await whenSearchedLocationWithResult(
      { getByTestId, getAllByLabelText, queryByTestId },
      "frankfurt, germany",
      osmFixture.frankfurtSearch
    );

    const locationToSelect = osmFixture.frankfurtSearch.features[0];
    selectLocation({ getAllByLabelText }, locationToSelect);
    expect(getByText("Save")).toBeInTheDocument();

    await expectMapWithLocations(
      { getByText },
      { locations: [locationToSelect], style: defaultStyle }
    );

    mockAxios.reset();

    fireEvent.click(getByText("Save"));

    const responseStub = Object.assign({}, locationToSelect, {
      id: 11
    });
    expect(mockAxios.post).toHaveBeenCalledWith(
      locationsApiUrl,
      locationToSelect
    );
    // getting the promise made when the most recent request was made
    let lastPromise = mockAxios.lastPromiseGet();
    // simulating a server response
    mockAxios.mockResponse({ data: responseStub });
    lastPromise.then(async ({ data }) => {
      expect(getByLocation({ getAllByLabelText }, data)).toBeInTheDocument();
      expect(getByTestId("myLocations")).toBeInTheDocument();
      expect(queryByTestId("searchForm")).not.toBeInTheDocument();
      await expectMapWithLocations(
        { getByText },
        { locations: [data], style: defaultStyle }
      );
    });
  });
});
