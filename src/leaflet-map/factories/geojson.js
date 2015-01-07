module.exports = function(map, config) {
  config.geojson.forEach(function(json) {
    var layer = L.geoJson(json.data, json.style);
    layer.addTo(map);
  });
};