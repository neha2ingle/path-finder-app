import Axios from "axios";
import * as g from "geojson";

const locationsApiUrl = "api/locations";

export type Location = g.Feature & { id: number };

export class LocationsService {
  getAll(): Promise<Location[]> {
    return Axios.get(locationsApiUrl).then(response => {
      return response.data;
    });
  }

  create(location: g.Feature): Promise<Location> {
    return Axios.post(locationsApiUrl, location).then(response => {
      return response.data;
    });
  }

  update(uid: number, location: Location): Promise<Location> {
    return Axios.put(locationsApiUrl + "/" + uid, location).then(response => {
      return response.data;
    });
  }

  delete(uid: Number): Promise {
    return Axios.delete(locationsApiUrl + "/" + uid).then(response => {
      return response.data;
    });
  }
}
