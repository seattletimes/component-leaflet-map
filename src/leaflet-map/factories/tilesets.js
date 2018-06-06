var stamenAttrib = [
  'Map tiles by <a href="https://stamen.com/" target="_top">Stamen Design</a>, ',
  'under <a href="https://creativecommons.org/licenses/by/3.0" target="_top">CC BY 3.0</a>. ',
  'Data by <a href="https://openstreetmap.org/" target="_top">OpenStreetMap</a>, ',
  'under <a href="https://creativecommons.org/licenses/by-sa/3.0" target="_top">CC BY SA</a>.'
].join("");

var cartoAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright" target="_top">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution/" target="_top">CartoDB</a>';

module.exports = {
  // STAMEN (no https tiles available as of 2018-06-06)
  lite: {
    url: "http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd",
      attribution: stamenAttrib
    }
  },
  background: {
    url: "http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd",
      attribution: stamenAttrib
    }
  },
  toner: {
    url: "http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd",
      attribution: stamenAttrib
    }
  },
  watercolor: {
    url: "http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd",
      attribution: stamenAttrib
    }
  },
  terrain: {
    url: "http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd",
      attribution: stamenAttrib
    }
  },
  // ESRI
  esriStreets: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 19,
      subdomains: ["server", "services"],
      attribution: "<a href=\"https://static.arcgis.com/attribution/World_Street_Map\">Esri</a>"
    }
  },
  esriTopographic: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 19,
      subdomains: ["server", "services"],
      attribution: "<a href=\"https://static.arcgis.com/attribution/World_Topo_Map\">Esri</a>"
    }
  },
  esriOceans: {
    url: "https://{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"],
      attribution: "<a href=\"https://static.arcgis.com/attribution/Ocean_Basemap\">Esri</a>"
    }
  },
  esriOceansLabels: {
    url: "https://{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"]
    }
  },
  esriNationalGeographic: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"],
      attribution: "Esri"
    }
  },
  esriDarkGray: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"],
      attribution: "Esri, DeLorme, HERE"
    }
  },
  esriDarkGrayLabels: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"]
    }
  },
  esriGray: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"],
      attribution: "Esri, NAVTEQ, DeLorme"
    }
  },
  esriGrayLabels: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"]
    }
  },
  esriImagery: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 19,
      subdomains: ["server", "services"],
      attribution: "Esri, DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community"
    }
  },
  esriImageryLabels: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 19,
      subdomains: ["server", "services"]
    }
  },
  esriImageryTransportation: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 19,
      subdomains: ["server", "services"]
    }
  },
  esriShadedRelief: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 13,
      subdomains: ["server", "services"],
      attribution: "ESRI, NAVTEQ, DeLorme"
    }
  },
  esriShadedReliefLabels: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 12,
      subdomains: ["server", "services"]
    }
  },
  esriTerrain: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 13,
      subdomains: ["server", "services"],
      attribution: "Esri, USGS, NOAA"
    }
  },
  esriTerrainLabels: {
    url: "https://{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 13,
      subdomains: ["server", "services"]
    }
  },
  // CARTODB
  cartoPositron: {
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    options: {
      subdomains: "abc",
      attribution: cartoAttrib
    }
  },
  cartoPositronBlank: {
    url: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
    options: {
      subdomains: "abc",
      attribution: cartoAttrib
    }
  },
  cartoDarkMatter: {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
    options: {
      subdomains: "abc",
      attribution: cartoAttrib
    }
  },
  cartoDarkMatterBlank: {
    url: "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
    options: {
      subdomains: "abc",
      attribution: cartoAttrib
    }
  }
};
