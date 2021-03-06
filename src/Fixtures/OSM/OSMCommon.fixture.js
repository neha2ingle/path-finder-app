// @flow

import * as g from "geojson";

export const frankfurtSearch: g.FeatureCollection = require("./frankfurt.search.geo.json");
export const mumbaiSearch: g.FeatureCollection = require("./mumbai.search.geo.json");
export const munichSearch: g.FeatureCollection = require("./munich.search.geo.json");

export const locationWithBoundry: g.Feature = {
  type: "Feature",
  properties: {
    place_id: 199034455,
    osm_type: "relation",
    osm_id: 7120000,
    display_name: "Thane, Maharashtra, India",
    place_rank: 16,
    category: "place",
    type: "city",
    importance: 0.589955146309859,
    icon:
      "https://nominatim.openstreetmap.org/images/mapicons/poi_place_city.p.20.png",
    address: {
      city: "Thane",
      state_district: "Thane",
      state: "Maharashtra",
      country: "India",
      country_code: "in",
      station: "Thane",
      road: "TMT Bus Stand",
      neighbourhood: "Chendani Koliwada",
      suburb: "Kopri",
      postcode: "4370",
      hamlet: "Thane",
      county: "Juneau",
      locality: "Thane"
    },
    uid: "ddcbc570-ce52-11e9-8fc1-5dc30543b50d"
  },
  bbox: [72.9309848, 19.1688751, 73.024106, 19.2953669],
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [72.9309848, 19.2112282],
        [72.932626, 19.2078021],
        [72.9329631, 19.2071092],
        [72.9342874, 19.206261],
        [72.9355095, 19.2054993],
        [72.9355088, 19.2046989],
        [72.9355256, 19.2026344],
        [72.935551, 19.201532],
        [72.9354831, 19.199988],
        [72.9353267, 19.1966926],
        [72.9353296, 19.1939974],
        [72.9370228, 19.191829],
        [72.9395251, 19.1894857],
        [72.9397428, 19.1893416],
        [72.9407464, 19.1886481],
        [72.9408542, 19.1885537],
        [72.9410908, 19.1883303],
        [72.9413343, 19.1881573],
        [72.9416517, 19.1877791],
        [72.94194, 19.1873861],
        [72.9422479, 19.1876548],
        [72.9428767, 19.1878532],
        [72.9434392, 19.1875968],
        [72.9442546, 19.1879767],
        [72.944738, 19.1879683],
        [72.9450214, 19.1881072],
        [72.945931, 19.1881388],
        [72.9461554, 19.187967],
        [72.9462931, 19.1878936],
        [72.9463892, 19.1879536],
        [72.9465091, 19.1878919],
        [72.9467275, 19.1880204],
        [72.9468632, 19.1879712],
        [72.946815, 19.1877631],
        [72.9470012, 19.1877419],
        [72.9472903, 19.1876354],
        [72.9475413, 19.1878151],
        [72.9477137, 19.1877401],
        [72.9479158, 19.1876458],
        [72.9481166, 19.1875608],
        [72.948139, 19.1875023],
        [72.9482819, 19.1874583],
        [72.948371, 19.1874424],
        [72.9485752, 19.1873603],
        [72.9487377, 19.187333],
        [72.9488425, 19.1873051],
        [72.9491731, 19.1871481],
        [72.9496059, 19.1870753],
        [72.949742, 19.1868767],
        [72.9500814, 19.1866561],
        [72.9500261, 19.1862124],
        [72.9500438, 19.1859921],
        [72.950074, 19.1859468],
        [72.9501118, 19.1859177],
        [72.9502049, 19.18591],
        [72.9502788, 19.1858608],
        [72.950568, 19.1855758],
        [72.9510045, 19.1853359],
        [72.9510518, 19.1852816],
        [72.9511086, 19.185247],
        [72.9511821, 19.1851545],
        [72.9512705, 19.1850595],
        [72.9513569, 19.1850386],
        [72.9522364, 19.1848762],
        [72.9524763, 19.1848673],
        [72.9527107, 19.1848041],
        [72.953303, 19.1847412],
        [72.9534477, 19.184851],
        [72.9537316, 19.1849157],
        [72.9538786, 19.1848832],
        [72.9540526, 19.1848598],
        [72.9544135, 19.1847782],
        [72.9544561, 19.1848044],
        [72.9544595, 19.1851701],
        [72.9545146, 19.1851633],
        [72.9548856, 19.1851987],
        [72.9549813, 19.1851776],
        [72.9550346, 19.185099],
        [72.955084, 19.1848693],
        [72.955177, 19.1847606],
        [72.9554233, 19.1846512],
        [72.955528, 19.1843682],
        [72.9558557, 19.1842167],
        [72.95587, 19.1841173],
        [72.9558877, 19.1837988],
        [72.9556915, 19.1835684],
        [72.9557866, 19.1833308],
        [72.9564213, 19.1830071],
        [72.9564576, 19.182899],
        [72.9565578, 19.1827644],
        [72.9566637, 19.1827068],
        [72.956996, 19.1826957],
        [72.957343, 19.1827011],
        [72.9575038, 19.1825905],
        [72.9576982, 19.1826659],
        [72.9580208, 19.1825524],
        [72.9581648, 19.1821675],
        [72.9583474, 19.1821528],
        [72.9583964, 19.1820208],
        [72.958452, 19.1819278],
        [72.9586574, 19.1816866],
        [72.9585385, 19.1810504],
        [72.958622, 19.1808092],
        [72.95867, 19.1807584],
        [72.9587441, 19.180795],
        [72.9588093, 19.180858],
        [72.9590187, 19.1808146],
        [72.9591399, 19.1806998],
        [72.9595604, 19.1802074],
        [72.9596001, 19.1800619],
        [72.9593925, 19.1797084],
        [72.959394, 19.1794204],
        [72.9597466, 19.1793144],
        [72.9597501, 19.1790616],
        [72.9597979, 19.178933],
        [72.9601734, 19.1789001],
        [72.9604985, 19.1791148],
        [72.9607781, 19.1789015],
        [72.9608763, 19.1790084],
        [72.9610622, 19.1788707],
        [72.9615821, 19.1794789],
        [72.9616685, 19.1794425],
        [72.9617324, 19.1793911],
        [72.9618132, 19.1792042],
        [72.9618567, 19.1790107],
        [72.9621528, 19.1786949],
        [72.9625495, 19.1784252],
        [72.9625877, 19.178248],
        [72.9626225, 19.178107],
        [72.962591, 19.1779521],
        [72.9625576, 19.1776151],
        [72.9626412, 19.1775562],
        [72.9633791, 19.1768267],
        [72.963784, 19.1766703],
        [72.9638293, 19.1766872],
        [72.9638468, 19.1767622],
        [72.9639484, 19.1768616],
        [72.9639722, 19.1768977],
        [72.9640653, 19.1768992],
        [72.9642664, 19.1768638],
        [72.964487, 19.1768812],
        [72.9645827, 19.1769182],
        [72.9647417, 19.1769341],
        [72.9648194, 19.1769544],
        [72.9653054, 19.1770589],
        [72.9657448, 19.1771438],
        [72.965827, 19.1772191],
        [72.9662046, 19.1774267],
        [72.9662862, 19.1775204],
        [72.9663303, 19.1775419],
        [72.9664998, 19.177582],
        [72.9665272, 19.1776043],
        [72.9667659, 19.1776556],
        [72.9669691, 19.1779506],
        [72.9676704, 19.1778175],
        [72.9677638, 19.1777923],
        [72.9677774, 19.1777983],
        [72.9680256, 19.1779136],
        [72.9679595, 19.1775312],
        [72.9680536, 19.1772801],
        [72.9680847, 19.1771532],
        [72.9681133, 19.1770897],
        [72.9681556, 19.1768995],
        [72.96821, 19.1767835],
        [72.9682242, 19.1767393],
        [72.9683559, 19.1764687],
        [72.9684017, 19.1763859],
        [72.9684274, 19.1763224],
        [72.9684871, 19.176132],
        [72.9685081, 19.1760117],
        [72.9686761, 19.1759134],
        [72.9688112, 19.1758612],
        [72.9691167, 19.1757548],
        [72.9692953, 19.1757],
        [72.9696376, 19.175643],
        [72.9697596, 19.1756172],
        [72.9702213, 19.1755554],
        [72.970916, 19.1760898],
        [72.9711466, 19.1766071],
        [72.9714569, 19.1773837],
        [72.9715434, 19.1776282],
        [72.9718621, 19.1786614],
        [72.9718613, 19.1787028],
        [72.9726762, 19.1785336],
        [72.9729538, 19.1783518],
        [72.9726763, 19.1778182],
        [72.972678, 19.1776166],
        [72.9727026, 19.1773069],
        [72.9730616, 19.1772652],
        [72.9735684, 19.1771965],
        [72.97347, 19.1769875],
        [72.9735539, 19.1768104],
        [72.9736454, 19.1767107],
        [72.9737481, 19.1765164],
        [72.973891, 19.1763432],
        [72.9742355, 19.1758709],
        [72.9742708, 19.1758281],
        [72.9747464, 19.1751909],
        [72.9758669, 19.173668],
        [72.9759379, 19.1735536],
        [72.9759929, 19.1734851],
        [72.9761324, 19.173349],
        [72.9762485, 19.1732202],
        [72.9763087, 19.1731696],
        [72.9764853, 19.1729689],
        [72.9765346, 19.1729059],
        [72.9769381, 19.1724303],
        [72.9781426, 19.1709088],
        [72.9787681, 19.1701014],
        [72.9797315, 19.1688751],
        [72.9839801, 19.1833542],
        [72.9887438, 19.1854618],
        [72.9889583, 19.1878126],
        [72.9985285, 19.1895757],
        [72.9993009, 19.1904471],
        [73.0050087, 19.1895757],
        [73.0108237, 19.1827056],
        [73.014729, 19.1823408],
        [73.0185592, 19.1858772],
        [73.019042, 19.1861298],
        [73.0205869, 19.1914799],
        [73.0218744, 19.1949655],
        [73.0232477, 19.1988563],
        [73.024106, 19.1996669],
        [73.0210161, 19.2038817],
        [73.018012, 19.2101228],
        [73.0142355, 19.2137701],
        [73.0108022, 19.2154721],
        [73.0042791, 19.2219559],
        [73.0015325, 19.2289257],
        [72.9963827, 19.2496712],
        [72.99349, 19.2558779],
        [72.9888296, 19.2658768],
        [72.9876279, 19.2738169],
        [72.9852247, 19.2802984],
        [72.9787016, 19.2871037],
        [72.9697752, 19.2924505],
        [72.9577589, 19.2953669],
        [72.9490041, 19.2930986],
        [72.941451, 19.2896961],
        [72.9380178, 19.2874277],
        [72.9393911, 19.2840252],
        [72.9368698, 19.2286421],
        [72.9309848, 19.2112282]
      ]
    ]
  }
};
export const locationWithPointAndPlaceRankBelow30: g.Feature = {
  type: "Feature",
  properties: {
    place_id: 595794,
    osm_type: "node",
    osm_id: 240109189,
    display_name: "Berlin, 10117, Deutschland",
    place_rank: 15,
    category: "place",
    type: "city",
    importance: 0.922149797630868,
    icon:
      "https://nominatim.openstreetmap.org/images/mapicons/poi_place_city.p.20.png",
    address: {
      city: "Berlin",
      state: "Berlin",
      postcode: "10117",
      country: "Deutschland",
      country_code: "de"
    },
    uid: "aa4ba650-ce54-11e9-97a1-21e8e0d1681a"
  },
  bbox: [13.2288599, 52.3570365, 13.5488599, 52.6770365],
  geometry: { type: "Point", coordinates: [13.3888599, 52.5170365] }
};
export const locationWithPointAndNoPlaceRank: g.Feature = {
  type: "Feature",
  properties: {
    place_id: 595795,
    osm_type: "node",
    osm_id: 240109189,
    display_name: "Berlin, 10117, Deutschland",
    category: "place",
    type: "city",
    importance: 0.922149797630868,
    icon:
      "https://nominatim.openstreetmap.org/images/mapicons/poi_place_city.p.20.png",
    address: {
      city: "Berlin",
      state: "Berlin",
      postcode: "10117",
      country: "Deutschland",
      country_code: "de"
    },
    uid: "aa4ba650-ce54-11e9-97a1-21e8e0d1681a"
  },
  bbox: [13.2288599, 52.3570365, 13.5488599, 52.6770365],
  geometry: { type: "Point", coordinates: [13.3888599, 52.5170365] }
};
export const locationWithPlaceRankAbove30: g.Feature = {
  type: "Feature",
  properties: {
    place_id: 595796,
    osm_type: "node",
    osm_id: 240109189,
    display_name: "Berlin, 10117, Deutschland",
    place_rank: 31,
    category: "place",
    type: "city",
    importance: 0.922149797630868,
    icon:
      "https://nominatim.openstreetmap.org/images/mapicons/poi_place_city.p.20.png",
    address: {
      city: "Berlin",
      state: "Berlin",
      postcode: "10117",
      country: "Deutschland",
      country_code: "de"
    },
    uid: "aa4ba650-ce54-11e9-97a1-21e8e0d1681a"
  },
  bbox: [13.2288599, 52.3570365, 13.5488599, 52.6770365],
  geometry: { type: "Point", coordinates: [13.3888599, 52.5170365] }
};
export const locationWithPointAndPlaceRankEquals30: g.Feature = {
  type: "Feature",
  properties: {
    place_id: 595797,
    osm_type: "node",
    osm_id: 240109189,
    display_name: "Berlin, 10117, Deutschland",
    place_rank: 30,
    category: "place",
    type: "city",
    importance: 0.922149797630868,
    icon:
      "https://nominatim.openstreetmap.org/images/mapicons/poi_place_city.p.20.png",
    address: {
      city: "Berlin",
      state: "Berlin",
      postcode: "10117",
      country: "Deutschland",
      country_code: "de"
    },
    uid: "aa4ba650-ce54-11e9-97a1-21e8e0d1681a"
  },
  bbox: [13.2288599, 52.3570365, 13.5488599, 52.6770365],
  geometry: { type: "Point", coordinates: [13.3888599, 52.5170365] }
};

export const searchResponseEmpty: g.FeatureCollection = {
  features: []
};
