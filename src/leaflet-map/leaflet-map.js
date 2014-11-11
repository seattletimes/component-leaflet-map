var template = require("./_template.html");
require("document-register-element");
var L = require("leaflet");
var configParser = require("./config-parser");

//styles
require("./leaflet-map.less");
require("../../node_modules/leaflet/dist/leaflet.css");

var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
  var config = configParser(this);
  console.log(config);
  this.innerHTML = "";
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
  this.map = L.map(this, options);

  //replace this
  var tiles = L.tileLayer(
    "http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png",
    {
      subdomains: "abcd".split(""),
      scheme: "xyz"
    }
  );
  tiles.addTo(this.map);
};
proto.leaflet = L;

document.registerElement("leaflet-map", { prototype: proto });