require("document-register-element");
var template = require("./_template.html");
var L = require("leaflet");
var configParser = require("./config-parser");
var factory = require("./factory");

//styles
require("./leaflet-map.less");

var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
  var config = configParser(this);
  this.innerHTML = "";
  this.setAttribute("ready", "");

  var map = this.map = L.map(this, config.options);

  factory.build(map, config);

};
proto.leaflet = L;

document.registerElement("leaflet-map", { prototype: proto });