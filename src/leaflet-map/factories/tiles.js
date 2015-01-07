var tilesets = require("./tilesets");
var L = require("leaflet");

module.exports = function(map, config) {
  //if no tiles, set the toner
  if (!config.tiles || !config.tiles.length) {
    config.tiles = [{ layer: "toner" }];
  }
  //convert tiles into layers
  var layers = config.tiles.map(function(setup) {
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
  //add layers to map
  layers.forEach(function(tile) {
    tile.addTo(map);
  });
};