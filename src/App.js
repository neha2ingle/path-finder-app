// @flow

import React from "react";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  ToggleButtonGroup,
  Button,
  ToggleButton
} from "react-bootstrap";
import * as g from "geojson";
import { MyMap } from "./Components/MyMap";
import { SearchForm } from "./Components/SearchForm";
import { Location, LocationsService } from "./Services/Locations.service";
import { getClientProvider } from "./Providers/Client.provider";
import { MapService } from "./Services/Map.service";

type State = $Shape<{
  locations: Location[],
  selectedLocation: ?Location,
  searchLocations: ?(g.Feature[]),
  selectedSearchLocation: ?g.Feature,
  isEditing: boolean,
  mapLocations: g.Feature[]
}>;

interface Props {}

export class App extends React.Component<Props, State> {
  state: State;
  locationService: LocationsService;
  mapService: MapService;
  constructor(props: Props) {
    super(props);

    this.state = {
      isEditing: false
    };
    this.locationService = new LocationsService();
    this.mapService = new MapService();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleSearchSelectionChange = this.handleSearchSelectionChange.bind(
      this
    );
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
  }

  componentDidMount() {
    this.getLocations();
  }

  get selectedLocationId() {
    return this.state.selectedLocation ? this.state.selectedLocation.id : null;
  }

  get selectedSearchLocationId() {
    return this.state.selectedSearchLocation
      ? getClientProvider(this.state.selectedSearchLocation).getId()
      : null;
  }

  handleSearch = (searchLocations: g.FeatureCollection) => {
    this.setState({ searchLocations: searchLocations.features });
    this.updateMapLocation();
  };

  handleSelectionChange = (selectedLocationId: number) => {
    const selectedLocation = this.state.locations.find(
      x => x.id === selectedLocationId
    );
    this.setState({ selectedLocation });
    this.updateMapLocation();
  };

  handleSearchSelectionChange = (id: string) => {
    const selectedSearchLocation = (this.state.searchLocations || []).find(
      item => getClientProvider(item).getId() === id
    );

    this.setState({ selectedSearchLocation });
    this.updateMapLocation();
  };

  handleDelete = () => {
    const confirmDelete = window.confirm(
      `Do you want to delete ${getClientProvider(
        this.state.selectedLocation
      ).getDisplayName()}?`
    );
    if (confirmDelete) {
      this.locationService
        .delete(this.selectedLocationId)
        .then((result: Location) => {
          const locations = this.state.locations.filter(
            x => x.id !== result.id
          );
          this.setState({ locations, selectedLocation: null });
          this.updateMapLocation();
        });
    }
  };

  handleCreate = () => {
    this.setState({ isEditing: true, selectedLocation: null });
    this.updateMapLocation();
  };

  handleUpdate = () => {
    this.setState({ isEditing: true });
    this.updateMapLocation();
  };

  handleCancel = () => {
    this.setState({
      isEditing: false,
      searchLocations: null,
      selectedSearchLocation: null
    });
    this.updateMapLocation();
  };

  handleSave = () => {
    let resultPromise: Promise<Location>;
    if (this.state.selectedLocation) {
      resultPromise = this.locationService
        .update(
          this.state.selectedLocation.id,
          this.state.selectedSearchLocation
        )
        .then(response => {
          const locations = this.state.locations.filter(
            x => x.id !== response.id
          );
          this.setState({ locations });
          this.updateMapLocation();
          return response;
        });
    } else {
      resultPromise = this.locationService.create(
        this.state.selectedSearchLocation
      );
    }

    resultPromise.then(response => {
      const locations = this.state.locations.slice();
      this.setState({
        isEditing: false,
        searchLocations: null,
        selectedSearchLocation: null,
        locations: [...locations, response],
        selectedLocation: response
      });
      this.updateMapLocation();
    });
  };

  handleShowAll = () => {
    this.setState({ selectedLocation: null });
    this.updateMapLocation();
  };

  async getLocations() {
    const locations = await this.locationService.getAll();
    this.setState({ locations });
    this.updateMapLocation();
  }

  render() {
    return (
      <div>
        <Navbar bg="light" fixed="top">
          <Navbar.Brand href="#home">
            <img
              src={(process.env.PUBLIC_URL || "") + "/world-globe-icon-12.jpg"}
              className="App-logo d-inline-block align-top"
              alt="logo"
            />
            Path Finder
          </Navbar.Brand>
        </Navbar>
        <Container fluid="True">
          <Row className="content mt-5 pt-3 mb-5">
            {!this.state.isEditing ? (
              <Col xs={3} data-testid="myLocations">
                <h5>My Locations</h5>
                <div className="mb-2">
                  <Button size="sm" variant="link" onClick={this.handleCreate}>
                    Create
                  </Button>
                  {this.state.selectedLocation ? (
                    <Button
                      size="sm"
                      variant="link"
                      onClick={this.handleShowAll}
                    >
                      Show All
                    </Button>
                  ) : null}
                  {this.state.selectedLocation ? (
                    <Button
                      size="sm"
                      variant="link"
                      onClick={this.handleUpdate}
                    >
                      Update
                    </Button>
                  ) : null}
                  {this.state.selectedLocation ? (
                    <Button
                      size="sm"
                      variant="link"
                      onClick={this.handleDelete}
                    >
                      Delete
                    </Button>
                  ) : null}
                </div>
                {this.state.locations ? (
                  this.state.locations.length > 0 ? (
                    <ToggleButtonGroup
                      className="w-100"
                      vertical
                      type="radio"
                      name={"options"}
                      value={this.selectedLocationId}
                      onChange={this.handleSelectionChange}
                    >
                      {this.state.locations.map<ToggleButton>(feature => {
                        const cp = getClientProvider(feature);
                        const key = feature.id;
                        return (
                          <ToggleButton
                            key={key}
                            variant="outline-primary"
                            value={key}
                          >
                            {cp.getDisplayName()}
                          </ToggleButton>
                        );
                      })}
                    </ToggleButtonGroup>
                  ) : (
                    <div>Your locations list is empty.</div>
                  )
                ) : (
                  <div>Loading your locations...</div>
                )}
              </Col>
            ) : null}
            {this.state.isEditing ? (
              <Col xs={3}>
                {this.state.selectedLocation ? (
                  <h5>Edit Location</h5>
                ) : (
                  <h5>New Location</h5>
                )}
                <div className="mb-2">
                  {this.state.selectedSearchLocation ? (
                    <Button size="sm" variant="link" onClick={this.handleSave}>
                      Save
                    </Button>
                  ) : null}
                  <Button size="sm" variant="link" onClick={this.handleCancel}>
                    Cancel
                  </Button>
                </div>
                <div className="mb-2">
                  <SearchForm onSearch={this.handleSearch}></SearchForm>
                </div>
                {this.state.searchLocations ? (
                  this.state.searchLocations.length > 0 ? (
                    <ToggleButtonGroup
                      className="w-100"
                      vertical
                      type="radio"
                      name={"searchOptions"}
                      value={this.selectedSearchLocationId}
                      onChange={this.handleSearchSelectionChange}
                    >
                      {this.state.searchLocations.map<ToggleButton>(feature => {
                        const cp = getClientProvider(feature);
                        const key = cp.getId();
                        return (
                          <ToggleButton
                            key={key}
                            variant="outline-primary"
                            value={key}
                          >
                            {cp.getDisplayName()}
                          </ToggleButton>
                        );
                      })}
                    </ToggleButtonGroup>
                  ) : (
                    <div>No locations found.</div>
                  )
                ) : (
                  <div>Search for location</div>
                )}
              </Col>
            ) : null}
            <Col>
              <MyMap
                locations={this.state.mapLocations}
                style={{ height: "500px" }}
              ></MyMap>
            </Col>
          </Row>
        </Container>
        <Navbar bg="light" fixed="bottom">
          &copy; All rights reserved.
        </Navbar>
      </div>
    );
  }

  get mapLocations() {
    if (this.state.selectedSearchLocation) {
      return [this.state.selectedSearchLocation];
    } else if (this.state.selectedLocation) {
      return [this.state.selectedLocation];
    } else {
      return this.mapService.getLocationMarkers(this.state.locations);
    }
  }

  updateMapLocation() {
    this.setState({ mapLocations: null });

    setTimeout(() => {
      this.setState({ mapLocations: this.mapLocations });
    }, 100);
  }
}
