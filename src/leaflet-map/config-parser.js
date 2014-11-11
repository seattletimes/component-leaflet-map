var L = require("leaflet");

//bind all tag parsers to the config object before calling
var parsers = {
  "tile-layer": function(element) {
    this.tiles.push({
      layer: element.getAttribute("layer"),
      url: element.getAttribute("url")
    });
  }
};

module.exports = function(element) {
  var config = {
    tiles: [],
    geojson: [],
    kml: [],
    poi: []
  };
  for (var selector in parsers) {
    var elements = Array.prototype.slice.call(element.querySelectorAll(selector));
    var parser = parsers[selector].bind(config);
    elements.forEach(parser);
  }
  return config;
};