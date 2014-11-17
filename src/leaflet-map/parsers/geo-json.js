module.exports = function(element) {
  if (!element.children.length) {
    //this is a raw GEOJSON source node, just parse it
    var src = element.innerHTML;
    try {
      src = JSON.parse(src);
    } catch (e) {
      console.warn("Error parsing GeoJSON:", src);
      return;
    }
    var json = {
      data: src
    };
    this.geojson.push(json);
  } else {
    var data = element.querySelector("geo-data");
    try {
      data = JSON.parse(data.innerHTML);
    } catch(e) {
      console.log("Incorrect or missing geo-data element");
      return;
    }
    var style = element.querySelector("geo-style");
    try {
      style = JSON.parse(style.innerHTML);
    } catch(e) {
      console.log("Incorrect or missing geo-style element");
      return;
    }
    this.geojson.push({
      data: data,
      style: style
    });
    //this has child config options, parse through that tree
    //<geo-data> - actual JSON data
    //<geo-style> - style object to be passed to the geoJson constructor
  }
};