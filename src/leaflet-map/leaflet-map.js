require("core-js/es6/reflect");
require('@webcomponents/custom-elements');
var L = require("leaflet");
var configParser = require("./config-parser");
var factory = require("./factory");

//styles
require("./leaflet-map.less");

function LeafletMap() {
    return Reflect.construct(HTMLElement, [], this.constructor);
}

LeafletMap.prototype = Object.create(HTMLElement.prototype);
LeafletMap.prototype.constructor = LeafletMap;
Object.setPrototypeOf(LeafletMap, HTMLElement);

LeafletMap.prototype.connectedCallback = function() {
  //read configuration from the element and its contents
  var config = configParser(this);

  //clear contents, set the ready attribute for CSS purposes
  this.innerHTML = "";
  this.setAttribute("ready", "");

  //initialize Leaflet
  var map = this.map = L.map(this, config.options);

  //set up the ID mapping object for factories to use if they want
  this.lookup = {};

  //initialize layers via factories
  factory.build(map, config, this);

}

LeafletMap.prototype.leaflet = L;
LeafletMap.prototype.map = null;

customElements.define("leaflet-map", LeafletMap);
