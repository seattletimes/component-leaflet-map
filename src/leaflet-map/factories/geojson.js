var L = require("leaflet");

module.exports = function(map, config) {
  config.geojson.forEach(function(json) {
    var config = {};
    if (json.style) config.style = json.style;
    if (json.eachFeature) config.onEachFeature = json.eachFeature;
    if (json.src) {
      //get the data over AJAX
      var xhr = new XMLHttpRequest();
      xhr.open("GET", json.src);
      xhr.onload = function() {
        var response = xhr.responseText;
        var data;
        try {
          data = JSON.parse(response);
          var layer = L.geoJson(data, config);
          layer.addTo(map);
          layer.bringToBack();
        } catch (e) {
          console.error("Unable to parse GeoJSON from " + json.src);
        }
      };
      xhr.send();
    } else {
      var layer = L.geoJson(json.data, config);
      layer.addTo(map);
    }
  });
};