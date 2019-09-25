import { Props } from "./SearchForm";
import { fireEvent } from "@testing-library/react";
import mockAxios from "jest-mock-axios";
import { mockAxiosGet } from "../App.test.fixture";

export function createTestProps(props: Partial<Props>): Props {
  return {
    // common props
    onSearch: jest.fn(),

    // allow to override common props
    ...props
  };
}

export const emptySearchResponse = {
  features: []
};

export function createSearchRequestParams(query: string) {
  return { params: { q: query } };
}

export const searchApiUrl = "/api/search";

export async function doSearchForLocation(getByTestId, searchQuery, response) {
  const searchInput = getByTestId("searchQuery");
  fireEvent.change(searchInput, { target: { value: searchQuery } });
  fireEvent.submit(getByTestId("searchForm"));
  const searchRequstParams = createSearchRequestParams(searchQuery);

  const data = await mockAxiosGet(searchApiUrl, response, searchRequstParams);
  return data;
}
