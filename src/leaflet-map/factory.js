var factories = [
  require("./factories/tiles"),
  require("./factories/geojson"),
  require("./factories/markers")
];

module.exports = {
  build: function(map, config, element) {
    factories.forEach(function(factory) {
      factory(map, config, element);
    });
  },
  addFactory: function(factory) {
    factories.push(factory);
  }
};