import React from "react";
import { SearchForm } from "./SearchForm";
import {
  createTestProps,
  doSearchForLocation
} from "./SearchForm.test.fixture";
import mockAxios from "jest-mock-axios";
import * as osmFixture from "./../Fixtures/OSM/OSMCommon.fixture";
import { render } from "@testing-library/react";

afterEach(() => {
  // cleaning up the mess left behind the previous test
  mockAxios.reset();
});

describe("rendering", () => {
  it("when provided with search query", () => {
    const query = "munich";

    const props = createTestProps({});
    const { getByTestId } = render(<SearchForm {...props} />);

    const searchLocationPromise = doSearchForLocation(
      getByTestId,
      query,
      osmFixture.frankfurtSearch
    );

    searchLocationPromise.then(() => {
      expect(props.onSearch).toHaveBeenCalledWith(osmFixture.frankfurtSearch);
    });
  });
});
