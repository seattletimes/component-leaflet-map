var template = require("./_template.html");
require("document-register-element");
var L = require("leaflet");
var configParser = require("./config-parser");

//styles
require("./leaflet-map.less");

var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
  var config = configParser(this);
  this.innerHTML = "";
  this.setAttribute("ready", "");

  var options = {};
  if (this.hasAttribute("lat")) {
    options.center = [this.getAttribute("lat"), this.getAttribute("lng")];
  } else {
    options.center = [47.609, -122.333];
  }
  if (this.hasAttribute("zoom")) {
    options.zoom = this.getAttribute("zoom") * 1;
  } else {
    options.zoom = 7;
  }
  var map = this.map = L.map(this, options);

  //add layers
  config.tiles.forEach(function(tile) {
    tile.addTo(map);
  });

  config.geojson.forEach(function(json) {
    var layer = L.geoJson(json.data, json.options);
    layer.addTo(map);
  });

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
proto.leaflet = L;

document.registerElement("leaflet-map", { prototype: proto });