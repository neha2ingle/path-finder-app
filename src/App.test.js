import React from "react";
import { App } from "./App";
import mockAxios from "jest-mock-axios";
import { render } from "@testing-library/react";
import { expectEmptyMap } from "./Components/MyMap.test.fixture";
import {
  whenMyLocationsLoadedWithResult,
  locationsApiUrl,
  myLocationsEmpty,
  myLocations,
  mockAxiosGet,
  defaultStyle
} from "./App.test.fixture";

afterEach(async () => {
  // cleaning up the mess left behind the previous test
  await mockAxios.lastPromiseGet();
  mockAxios.reset();
});

describe("Page load", () => {
  it("renders for first page load.", async () => {
    const { getByText, queryByTestId, queryByText } = render(<App />);
    expect(getByText("Path Finder")).toBeInTheDocument();
    expect(getByText("Loading your locations...")).toBeInTheDocument();
    expect(queryByTestId("searchForm")).not.toBeInTheDocument();
    expect(queryByText("Create")).toBeInTheDocument();
    expect(queryByText("Update")).not.toBeInTheDocument();
    expect(queryByText("Delete")).not.toBeInTheDocument();
    expectEmptyMap({ getByText, queryByText }, { style: defaultStyle });
    await mockAxiosGet(locationsApiUrl, myLocationsEmpty);
  });

  it("When MyLocations are empty", async () => {
    const { getByText } = render(<App />);
    await mockAxiosGet(locationsApiUrl, myLocationsEmpty);

    expect(getByText("Your locations list is empty.")).toBeInTheDocument();
  });

  it("When MyLocations are available", async () => {
    const { getAllByLabelText } = render(<App />);
    await whenMyLocationsLoadedWithResult({ getAllByLabelText }, myLocations);
  });
});
