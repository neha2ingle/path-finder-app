import React from "react";
import mockAxios from "jest-mock-axios";
import * as osmFixture from "./Fixtures/OSM/OSMCommon.fixture";
import * as tomtomFixture from "./Fixtures/TomTom/TomTomCommon.fixture";
import { getClientProvider } from "./Providers/client.provider";
import { doSearchForLocation } from "./Components/SearchForm.test.fixture";
import ReactTestUtils from "react-dom/test-utils";

export const locationsApiUrl = "api/locations";

export const defaultStyle: React.CSSProperties = { height: "500px" };

export function getByLocation({ getAllByLabelText }, loc): HTMLInputElement {
  const cp = getClientProvider(loc);
  return getAllByLabelText(cp.getDisplayName())[0];
}

export function queryByLocation({ queryByLabelText }, loc) {
  const cp = getClientProvider(loc);
  return queryByLabelText(cp.getDisplayName());
}

export function selectLocation({ getAllByLabelText }, location) {
  ReactTestUtils.Simulate.change(
    getByLocation({ getAllByLabelText }, location)
  );
}

export const myLocationsEmpty = [];

let id = 5;
export const myLocations = [
  osmFixture.frankfurtSearch.features[1],
  tomtomFixture.mumbaiSearchResult.features[0]
].map(loc => {
  return Object.assign({}, loc, { id: id++ });
});

export function expectEmptySearchForm(getByTestId, getByText, queryByText) {
  expect(getByTestId("searchForm")).toBeInTheDocument();
  expect(queryByText("Save")).not.toBeInTheDocument();
  expect(getByText("Cancel")).toBeInTheDocument();
  expect(getByText("Search for location")).toBeInTheDocument();
}

export async function mockAxiosGet(url, response, options) {
  const params = [url, options].filter(item => item);
  expect(mockAxios.get).toHaveBeenCalledWith(...params);
  // getting the promise made when the most recent request was made
  const lastPromise = mockAxios.lastPromiseGet();
  // simulating a server response
  mockAxios.mockResponse({ data: response });
  const { data } = await lastPromise;
  expect(data === response).toBeTruthy();
  return data;
}

export async function whenSearchedLocationWithResult(
  { getByTestId, getAllByLabelText, queryByTestId },
  searchText,
  searchResult
) {
  const data = await doSearchForLocation(getByTestId, searchText, searchResult);
  for (const loc of data.features) {
    expect(getByLocation({ getAllByLabelText }, loc)).toBeInTheDocument();
  }

  return data;
}

export async function whenMyLocationsLoadedWithResult(
  { getAllByLabelText },
  myLocations
) {
  const data = await mockAxiosGet(locationsApiUrl, myLocations);
  for (const loc of data) {
    expect(getByLocation({ getAllByLabelText }, loc)).toBeInTheDocument();
  }
  return data;
}

export async function pageLoad() {
  await mockAxiosGet(locationsApiUrl, myLocationsEmpty);
  mockAxios.reset();
}
