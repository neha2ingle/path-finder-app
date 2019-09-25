import Axios from "axios";
import * as g from "geojson";

const searchApiUrl = "/api/search";

export class SearchService {
  search(query: string): Promise<g.FeatureCollection> {
    return Axios.get(searchApiUrl, {
      params: {
        q: query
      }
    }).then(response => {
      return response.data;
    });
  }
}
