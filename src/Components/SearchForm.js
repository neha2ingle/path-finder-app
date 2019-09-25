import React from "react";

import { SearchService } from "../Services/Search.service";
import * as g from "geojson";

export interface Props {
  onSearch: g.FeatureCollection => void;
}

export interface State {
  query: string;
}

export class SearchForm extends React.Component {
  _searchService: SearchService;

  props: Props;
  state: State = { query: "" };

  constructor(props: Props) {
    super(props);

    this._searchService = new SearchService();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    const query = this.state.query;
    this._searchService.search(query).then(data => {
      this.props.onSearch(data);
    });

    event.preventDefault();
  }

  render() {
    return (
      <form
        className={"input-group input-group-sm"}
        onSubmit={this.handleSubmit}
        data-testid="searchForm"
      >
        <input
          type="text"
          value={this.state.query}
          placeholder="search"
          onChange={this.handleChange}
          className="form-control"
          data-testid="searchQuery"
        />
        <input
          type="submit"
          value="search"
          className="btn btn-sm btn-primary input-group-append"
        />
      </form>
    );
  }
}
