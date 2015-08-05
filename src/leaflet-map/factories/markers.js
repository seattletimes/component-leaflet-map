var L = require("leaflet");

module.exports = function(map, config, element) {

  config.markers.forEach(function(poi) {
    var options = {
      icon: new L.divIcon({
        className: poi.class || "default-map-marker",
        iconSize: null
      }),
      title: poi.title
    };
    var marker = L.marker(poi.latlng, options);
    if (poi.html) {
      marker.bindPopup(poi.html);
    }
    if (poi.id) {
      element.lookup[poi.id] = marker;
    }
    marker.addTo(map);
  });

};