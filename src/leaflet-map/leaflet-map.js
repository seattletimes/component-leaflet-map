require("document-register-element");
var L = require("leaflet");
var configParser = require("./config-parser");
var factory = require("./factory");

//styles
require("./leaflet-map.less");

var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
  //read configuration from the element and its contents
  var config = configParser(this);

  //clear contents, set the ready attribute for CSS purposes
  this.innerHTML = "";
  this.setAttribute("ready", "");

  //initialize Leaflet
  var map = this.map = L.map(this, config.options);

  //initialize layers via factories
  factory.build(map, config, this);

};
proto.leaflet = L;
proto.map = null;

document.registerElement("leaflet-map", { prototype: proto });