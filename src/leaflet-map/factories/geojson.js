module.exports = function(map, config) {
  config.geojson.forEach(function(json) {
    var config = json.style;
    //functional styles have to be passed in as a config
    if (typeof config == "function") {
      config = { style: config };
    }
    var layer = L.geoJson(json.data, config);
    layer.addTo(map);
  });
};