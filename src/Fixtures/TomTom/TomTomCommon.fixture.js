import * as g from "geojson";
export const munichSearchResult = require("./munich.search.geo.json");
export const mumbaiSearchResult = require("./mumbai.search.geo.json");
export const frankfurtSearchResult = require("./frankfurt.search.geo.json");

export const locationSearchResult: g.FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [8.71574, 48.89954] },
      properties: {
        type: "POI",
        id: "DE/POI/p0/1816364",
        score: 8.10573,
        address: {
          streetNumber: "47",
          streetName: "Blumenheckstraße",
          municipalitySubdivision: "Pforzheim",
          municipality: "Pforzheim",
          countrySecondarySubdivision: "Pforzheim",
          countrySubdivision: "Baden-Württemberg",
          postalCode: "75177",
          countryCode: "DE",
          country: "Germany",
          countryCodeISO3: "DEU",
          freeformAddress: "Blumenheckstraße 47, 75177 Pforzheim",
          localName: "Pforzheim"
        }
      },
      bbox: [8.71437, 48.89864, 8.71711, 48.90044]
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [7.7864, 47.85514] },
      properties: {
        type: "Geography",
        id: "DE/GEO/p0/50761",
        score: 7.06408,
        entityType: "Municipality",
        address: {
          municipality: "Münstertal (Black Forest)",
          countrySecondarySubdivision: "Breisgau-Hochschwarzwald",
          countrySubdivision: "Baden-Württemberg",
          countryCode: "DE",
          country: "Germany",
          countryCodeISO3: "DEU",
          freeformAddress: "Münstertal (Black Forest)"
        },
        dataSources: {
          geometry: { id: "00005858-5800-1200-0000-00007d2e4729" }
        }
      },
      bbox: [7.75495, 47.80122, 7.89125, 47.9043]
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [8.03729, 47.85895] },
      properties: {
        type: "Geography",
        id: "DE/GEO/p0/50534",
        score: 7.06283,
        entityType: "Municipality",
        address: {
          municipality: "Feldberg (Black Forest)",
          countrySecondarySubdivision: "Breisgau-Hochschwarzwald",
          countrySubdivision: "Baden-Württemberg",
          countryCode: "DE",
          country: "Germany",
          countryCodeISO3: "DEU",
          freeformAddress: "Feldberg (Black Forest)"
        },
        dataSources: {
          geometry: { id: "00005858-5800-1200-0000-00007d2e4646" }
        }
      },
      bbox: [7.98358, 47.84131, 8.14391, 47.88594]
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-93.96194, 44.8875] },
      properties: {
        type: "Street",
        id: "US/STR/p0/96060",
        score: 6.38957,
        address: {
          streetName: "Black Forest Road",
          municipalitySubdivision: "New Germany",
          municipality: "New Germany",
          countrySecondarySubdivision: "Carver",
          countryTertiarySubdivision: "New Germany",
          countrySubdivision: "MN",
          postalCode: "55367",
          extendedPostalCode:
            "5536745,553674505,553674507,553674508,553674509,553674513",
          countryCode: "US",
          country: "United States",
          countryCodeISO3: "USA",
          freeformAddress: "Black Forest Road, New Germany, MN 55367",
          countrySubdivisionName: "Minnesota"
        }
      },
      bbox: [-93.96352, 44.88553, -93.96129, 44.8887]
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [7.8922, 47.78806] },
      properties: {
        type: "POI",
        id: "DE/POI/p0/1986003",
        score: 6.02835,
        address: {
          streetNumber: "5",
          streetName: "Hägmatt",
          municipalitySubdivision: "Schönau im Schwarzwald",
          municipality: "Schönau im Schwarzwald",
          countrySecondarySubdivision: "Lörrach",
          countrySubdivision: "Baden-Württemberg",
          postalCode: "79677",
          countryCode: "DE",
          country: "Germany",
          countryCodeISO3: "DEU",
          freeformAddress: "Hägmatt 5, 79677 Schönau im Schwarzwald",
          localName: "Schönau im Schwarzwald"
        }
      },
      bbox: [7.89086, 47.78716, 7.89354, 47.78896]
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [8.18933, 48.78572] },
      properties: {
        type: "POI",
        id: "DE/POI/p0/249920",
        score: 5.98554,
        address: {
          streetName: "Blütenfeldplatz",
          municipalitySubdivision: "Oos",
          municipality: "Baden-Baden",
          countrySecondarySubdivision: "Baden-Baden",
          countrySubdivision: "Baden-Württemberg",
          postalCode: "76532",
          countryCode: "DE",
          country: "Germany",
          countryCodeISO3: "DEU",
          freeformAddress: "Blütenfeldplatz, 76532 Baden-Baden",
          localName: "Baden-Baden"
        }
      },
      bbox: [8.18797, 48.78482, 8.19069, 48.78662]
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [7.82698, 47.97887] },
      properties: {
        type: "POI",
        id: "DE/POI/p0/252158",
        score: 5.98554,
        address: {
          streetNumber: "30",
          streetName: "Oltmannsstraße",
          municipalitySubdivision: "Freiburg im Breisgau",
          municipality: "Freiburg im Breisgau",
          countrySecondarySubdivision: "Freiburg im Breisgau",
          countrySubdivision: "Baden-Württemberg",
          postalCode: "79100",
          countryCode: "DE",
          country: "Germany",
          countryCodeISO3: "DEU",
          freeformAddress: "Oltmannsstraße 30, 79100 Freiburg im Breisgau",
          localName: "Freiburg im Breisgau"
        }
      },
      bbox: [7.82564, 47.97797, 7.82832, 47.97977]
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [8.17057, 48.04131] },
      properties: {
        type: "POI",
        id: "DE/POI/p0/252327",
        score: 5.98554,
        address: {
          streetNumber: "2",
          streetName: "Ob der Eck",
          municipalitySubdivision: "Neueck",
          municipality: "Gütenbach",
          countrySecondarySubdivision: "Schwarzwald-Baar-Kreis",
          countrySubdivision: "Baden-Württemberg",
          postalCode: "78148",
          countryCode: "DE",
          country: "Germany",
          countryCodeISO3: "DEU",
          freeformAddress: "Ob der Eck 2, 78148 Gütenbach",
          localName: "Gütenbach"
        }
      },
      bbox: [8.16922, 48.04041, 8.17192, 48.04221]
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [8.23952, 48.76186] },
      properties: {
        type: "POI",
        id: "DE/POI/p0/442348",
        score: 5.98554,
        address: {
          streetNumber: "6",
          streetName: "Lange Straße",
          municipalitySubdivision: "Baden-Baden",
          municipality: "Baden-Baden",
          countrySecondarySubdivision: "Baden-Baden",
          countrySubdivision: "Baden-Württemberg",
          postalCode: "76530",
          countryCode: "DE",
          country: "Germany",
          countryCodeISO3: "DEU",
          freeformAddress: "Lange Straße 6, 76530 Baden-Baden",
          localName: "Baden-Baden"
        }
      },
      bbox: [8.23816, 48.76096, 8.24088, 48.76276]
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [7.85826, 47.99203] },
      properties: {
        type: "POI",
        id: "DE/POI/p0/941857",
        score: 5.98554,
        address: {
          streetNumber: "33",
          streetName: "Kartäuserstraße",
          municipalitySubdivision: "Wiehre",
          municipality: "Freiburg im Breisgau",
          countrySecondarySubdivision: "Freiburg im Breisgau",
          countrySubdivision: "Baden-Württemberg",
          postalCode: "79102",
          countryCode: "DE",
          country: "Germany",
          countryCodeISO3: "DEU",
          freeformAddress: "Kartäuserstraße 33, 79102 Freiburg im Breisgau",
          localName: "Freiburg im Breisgau"
        }
      },
      bbox: [7.85692, 47.99113, 7.8596, 47.99293]
    }
  ]
};

export const location: g.Feature = locationSearchResult.features[0];
