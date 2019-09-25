import React from "react";
import { App } from "./App";
import mockAxios from "jest-mock-axios";
import { render, fireEvent } from "@testing-library/react";
import {
  expectEmptyMap,
  expectMapWithLocations
} from "./Components/MyMap.test.fixture";
import {
  whenMyLocationsLoadedWithResult,
  locationsApiUrl,
  myLocations,
  queryByLocation,
  selectLocation,
  defaultStyle
} from "./App.test.fixture";
describe("Delete", () => {
  it("when delete is clicked with cancel", async () => {
    const { getByText, getAllByLabelText } = render(<App />);
    window.confirm = jest.fn(() => false);
    await whenMyLocationsLoadedWithResult({ getAllByLabelText }, myLocations);
    selectLocation({ getAllByLabelText }, myLocations[0]);
    fireEvent.click(getByText("Delete"));
    expect(window.confirm).toBeCalled();
    await expectMapWithLocations(
      { getByText },
      { locations: [myLocations[0]], style: defaultStyle }
    );
  });
  it("when delete is clicked with confirm", async () => {
    const {
      getByText,
      getAllByLabelText,
      queryByLabelText,
      queryByText
    } = render(<App />);
    window.confirm = jest.fn(() => true); // always click 'yes'
    await whenMyLocationsLoadedWithResult({ getAllByLabelText }, myLocations);
    const locationToDelete = myLocations[0];

    selectLocation({ getAllByLabelText }, myLocations[0]);
    fireEvent.click(getByText("Delete"));
    expect(window.confirm).toBeCalled();
    expect(mockAxios.delete).toHaveBeenCalledWith(
      `${locationsApiUrl}/${locationToDelete.id}`
    );
    // getting the promise made when the most recent request was made
    let lastPromise = mockAxios.lastPromiseGet();
    // simulating a server response
    mockAxios.mockResponse({ data: locationToDelete });
    lastPromise.then(() => {
      expect(
        queryByLocation({ queryByLabelText }, locationToDelete)
      ).not.toBeInTheDocument();
      expectEmptyMap({ getByText, queryByText }, { style: defaultStyle });
    });
  });
});
