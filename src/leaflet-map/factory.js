var factories = [
  require("./factories/tiles"),
  require("./factories/geojson"),
  require("./factories/markers")
];

module.exports = {
  build: function(map, config) {
    factories.forEach(function(factory) {
      factory(map, config);
    });
  },
  addFactory: function(factory) {
    factories.push(factory);
  }
};