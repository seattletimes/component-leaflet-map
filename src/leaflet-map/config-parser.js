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
    config.options.tap = false;
  }
  return config;
};