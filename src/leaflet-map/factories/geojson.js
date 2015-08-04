var L = require("leaflet");

module.exports = function(map, config, element) {
  config.geojson.forEach(function(json) {
    var config = {};
    if (json.style) config.style = json.style;
    if (json.eachFeature) config.onEachFeature = json.eachFeature;
    var makeLayer = function(data) {
      var layer = L.geoJson(data, config);
      layer.addTo(map);
      layer.bringToBack();
      //add to lookup for later
      if (json.id) element.lookup[json.id] = layer;
    }
    if (json.src) {
      //get the data over AJAX
      var xhr = new XMLHttpRequest();
      xhr.open("GET", json.src);
      xhr.onload = function() {
        var response = xhr.responseText;
        var data;
        try {
          data = JSON.parse(response);
          makeLayer(data);
        } catch (e) {
          console.error("Unable to parse GeoJSON from " + json.src);
        }
      };
      xhr.send();
    } else {
      makeLayer(json.data);
    }
  });
};