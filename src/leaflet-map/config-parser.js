var L = require("leaflet");
var tilesets = require("./tiles");

//All tag parsers have the config bound to this before being called with an
//element matching their selector
var parsers = {
  "tile-layer": require("./parsers/tile-layer"),
  "map-marker": require("./parsers/map-marker"),
  "geo-json": require("./parsers/geo-json"),
  "map-options": require("./parsers/map-options")
};

module.exports = function(element) {
  var config = {
    tiles: [],
    geojson: [],
    kml: [],
    markers: [],
    options: {}
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
    setup.options = setup.options || {};
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