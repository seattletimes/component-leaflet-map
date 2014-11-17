module.exports = function(element) {
  if (!element.children.length) {
    //this is a raw GEOJSON source node, just parse it
    var src = element.innerHTML;
    try {
      src = JSON.parse(src);
    } catch (e) {
      console.warn("Error parsing GeoJSON:", src);
    }
    var json = {
      data: src
    };
    this.geojson.push(json);
  } else {
    //this has child config options, parse through that tree
  }
};