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
  //run through parsers
  for (var selector in parsers) {
    var elements = Array.prototype.slice.call(element.querySelectorAll(selector));
    var parser = parsers[selector].bind(config);
    elements.forEach(parser);
  }
  //if no tiles, set the toner
  if (!config.tiles.length) {
    config.tiles = [{ layer: "toner" }];
  }
  //convert tiles into layers
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
  //handle options on the element itself
  if (element.hasAttribute("lat")) {
    config.options.center = [element.getAttribute("lat"), element.getAttribute("lng")];
  } else {
    config.options.center = [47.609, -122.333];
  }
  if (!config.options.zoom) {
    config.options.zoom = element.getAttribute("zoom") || 7;
  }
  if (element.hasAttribute("fixed")) {
    config.options.boxZoom = false;
    config.options.doubleClickZoom = false;
    config.options.dragging = false;
    config.options.keyboard = false;
    config.options.scrollWheelZoom = false;
    config.options.touchZoom = false;
    config.options.zoomControl = false;
  }
  return config;
};