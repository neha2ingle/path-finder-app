// @flow

import { Props } from "./MyMap";
import { MapService } from "../Services/Map.service";
import { waitForElement } from "@testing-library/dom";
import { RenderResult } from "@testing-library/react";

const mapService = new MapService();

function getMapViewText(props: Props) {
  const mapView = mapService.getCenterZoomAndBounds(props.locations);
  return JSON.stringify({ style: props.style, ...mapView });
}

export function expectEmptyMap(
  { getByText, queryByText }: RenderResult,
  props?: Props
) {
  if (!props) {
    props = {};
  }

  props.locations = null;

  expect(getByText("Leaflet Map")).toBeInTheDocument();
  expect(getByText("Tile Layer")).toBeInTheDocument();
  expect(queryByText("GeoJSON Layer")).toBeNull();
  expect(getByText(getMapViewText({ ...props }))).toBeInTheDocument();
}

export async function expectMapWithLocations({ getByText }, props: Props) {
  await waitForElement(() => getByText("GeoJSON Layer"));
  expect(getByText("Leaflet Map")).toBeInTheDocument();
  expect(getByText("Tile Layer")).toBeInTheDocument();
  expect(getByText("GeoJSON Layer")).toBeInTheDocument();
  expect(getByText(getMapViewText({ ...props }))).toBeInTheDocument();
}
