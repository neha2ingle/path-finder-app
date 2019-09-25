// @flow

import "leaflet/dist/leaflet.css";

import React from "react";
import Leaflet from "leaflet";
import * as g from "geojson";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import { MapService } from "../Services/Map.service";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/";

export interface Props {
  locations: g.Feature[];
  style: { [key: string]: string };
}

export class MyMap extends React.Component<Props> {
  props: Props;
  mapService: MapService;

  constructor(props: Props) {
    super(props);

    this.mapService = new MapService();
  }

  render() {
    const { center, zoom, bounds } = this.mapService.getCenterZoomAndBounds(
      this.props.locations
    );

    return (
      <Map style={this.props.style} center={center} zoom={zoom} bounds={bounds}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.props.locations && this.props.locations.length > 0 ? (
          <GeoJSON data={this.props.locations}></GeoJSON>
        ) : null}
      </Map>
    );
  }
}

// function onEachFeature(feature: g.Feature, layer: L.Layer) {
//   layer.bindTooltip(getClientProvider(feature).getDisplayName());
// }
