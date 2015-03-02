var stamenAttrib = [
  'Map tiles by <a href="http://stamen.com/" target="_top">Stamen Design</a>, ',
  'under <a href="http://creativecommons.org/licenses/by/3.0" target="_top">CC BY 3.0</a>. ',
  'Data by <a href="http://openstreetmap.org/" target="_top">OpenStreetMap</a>, ',
  'under <a href="http://creativecommons.org/licenses/by-sa/3.0" target="_top">CC BY SA</a>.'
].join("");

var cartoAttrib = '&copy; <a href="http://www.openstreetmap.org/copyright" target="_top">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions" target="_top">CartoDB</a>';

module.exports = {
  // STAMEN
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
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 19,
      subdomains: ["server", "services"],
      attribution: "<a href=\"https://static.arcgis.com/attribution/World_Street_Map\">Esri</a>"
    }
  },
  esriTopographic: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 19,
      subdomains: ["server", "services"],
      attribution: "<a href=\"https://static.arcgis.com/attribution/World_Topo_Map\">Esri</a>"
    }
  },
  esriOceans: {
    url: "//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"],
      attribution: "<a href=\"https://static.arcgis.com/attribution/Ocean_Basemap\">Esri</a>"
    }
  },
  esriOceansLabels: {
    url: "//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"]
    }
  },
  esriNationalGeographic: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"],
      attribution: "Esri"
    }
  },
  esriDarkGray: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"],
      attribution: "Esri, DeLorme, HERE"
    }
  },
  esriDarkGrayLabels: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"]
    }
  },
  esriGray: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"],
      attribution: "Esri, NAVTEQ, DeLorme"
    }
  },
  esriGrayLabels: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 16,
      subdomains: ["server", "services"]
    }
  },
  esriImagery: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 19,
      subdomains: ["server", "services"],
      attribution: "Esri, DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community"
    }
  },
  esriImageryLabels: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 19,
      subdomains: ["server", "services"]
    }
  },
  esriImageryTransportation: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 19,
      subdomains: ["server", "services"]
    }
  },
  esriShadedRelief: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 13,
      subdomains: ["server", "services"],
      attribution: "ESRI, NAVTEQ, DeLorme"
    }
  },
  esriShadedReliefLabels: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 12,
      subdomains: ["server", "services"]
    }
  },
  esriTerrain: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 13,
      subdomains: ["server", "services"],
      attribution: "Esri, USGS, NOAA"
    }
  },
  esriTerrainLabels: {
    url: "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",
    options: {
      minZoom: 1,
      maxZoom: 13,
      subdomains: ["server", "services"]
    }
  },
  // CARTODB
  cartoPositron: {
    url: "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    options: {
      subdomains: "abc",
      attribution: cartoAttrib
    }
  },
  cartoPositronBlank: {
    url: "http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
    options: {
      subdomains: "abc",
      attribution: cartoAttrib
    }
  },
  cartoDarkMatter: {
    url: "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
    options: {
      subdomains: "abc",
      attribution: cartoAttrib
    }
  },
  cartoDarkMatterBlank: {
    url: "http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
    options: {
      subdomains: "abc",
      attribution: cartoAttrib
    }
  }
};