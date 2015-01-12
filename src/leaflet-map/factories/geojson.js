var L = require("leaflet");

module.exports = function(map, config) {
  config.geojson.forEach(function(json) {
    var config = {};
    if (json.style) config.style = json.style;
    if (json.eachFeature) config.onEachFeature = json.eachFeature;
    var layer = L.geoJson(json.data, config);
    layer.addTo(map);
  });
};