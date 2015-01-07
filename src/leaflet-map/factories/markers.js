var L = require("leaflet");

module.exports = function(map, config) {

  config.markers.forEach(function(poi) {
    var options = {
      icon: new L.divIcon({
        className: poi.class,
        iconSize: null
      }),
      title: poi.title
    };
    var marker = L.marker(poi.latlng, options);
    if (poi.html) {
      marker.bindPopup(poi.html);
    }
    marker.addTo(map);
  });

};