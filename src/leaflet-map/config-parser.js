var L = require("leaflet");
var tilesets = require("./tiles");

//bind all tag parsers to the config object before calling
var parsers = {
  "tile-layer": function(element) {
    this.tiles.push({
      layer: element.getAttribute("layer"),
      url: element.getAttribute("url"),
      options: {
        subdomains: element.getAttribute("subdomains"),
        opacity: element.getAttribute("opacity") || 1
      }
    });
  },
  "map-marker": function(element) {
    this.markers.push({
      html: element.innerHTML,
      latlng: [element.getAttribute("lat"), element.getAttribute("lng")].map(Number),
      style: element.getAttribute("style"),
      class: element.className,
      title: element.getAttribute("title")
    });
  }
};

module.exports = function(element) {
  var config = {
    tiles: [],
    geojson: [],
    kml: [],
    markers: []
  };
  for (var selector in parsers) {
    var elements = Array.prototype.slice.call(element.querySelectorAll(selector));
    var parser = parsers[selector].bind(config);
    elements.forEach(parser);
  }
  if (!config.tiles.length) {
    config.tiles = [{ layer: "toner" }];
  }
  config.tiles = config.tiles.map(function(setup) {
    if (setup.layer && setup.layer in tilesets) {
      //discard and create one from the layer
      var tileset = tilesets[setup.layer];
      setup.url = tileset.url;
      for (var original in tileset.options) {
        if (!setup.options[original]) setup.options[original] = tileset.options[original];
      }
    }
    if (!setup.url) return undefined;
    return L.tileLayer(setup.url, setup.options);
  });
  return config;
};