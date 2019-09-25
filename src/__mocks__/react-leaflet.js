import React from "react";
import { MapView } from "./../Services/map.service";

export function Map(props: MapView) {
  const propsCopy = Object.assign({}, props);
  delete propsCopy.children;

  return (
    <div>
      <div>{JSON.stringify(propsCopy)}</div>
      <div>Leaflet Map</div>
      {props.children}
    </div>
  );
}

export function TileLayer(props) {
  return <div {...props}>Tile Layer</div>;
}

export function GeoJSON(props) {
  return <div {...props}>GeoJSON Layer</div>;
}
