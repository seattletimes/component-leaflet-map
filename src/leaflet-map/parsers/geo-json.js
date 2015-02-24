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

    var url = element.getAttribute("src");

    var data = element.querySelector("geo-data");
    if (data) {
      try {
        data = JSON.parse(data.innerHTML);
      } catch(e) {
        console.error("Incorrect or missing geo-data element");
        return;
      }
    }
    
    var style = element.querySelector("geo-style");
    if (style) {
      try {
        style = JSON.parse(style.innerHTML);
      } catch(e) {
        console.error("Incorrect or missing geo-style element");
        return;
      }
    }

    var palette = element.querySelector("geo-palette");
    if (palette) {
      try {
        var prop = palette.getAttribute("property");
        var mappings = palette.querySelectorAll("color-mapping");
        var map = {};
        var baseStyle = style || {};
        for (var i = 0; i < mappings.length; i++) {
          var mapping = mappings[i];
          var min = mapping.getAttribute("min") || -Infinity;
          var max = mapping.getAttribute("max") || Infinity;
          var color = mapping.getAttribute("color") || "pink";
          map[color] = { min: min * 1, max: max * 1 };
        }
        style = function(feature) {
          var value = feature.properties[prop];
          var styleCopy = {};
          for (var s in baseStyle) {
            styleCopy[s] = baseStyle[s];
          }
          for (var color in map) {
            var range = map[color];
            if (value >= range.min && value <= range.max) {
              styleCopy.fillColor = color;
            }
          }
          return styleCopy;
        };
      } catch(e) {
        console.error("Incorrect or missing geo-palette element");
        return;
      }
    }

    var popup = element.querySelector("geo-popup");
    if (popup) {
      var template = popup.innerHTML;
      popup = function(feature, layer) {
        //WORLD'S WORST TEMPLATING
        var html = template;
        for (var key in feature.properties) {
          var val = feature.properties[key];
          html = html.split("{{" + key + "}}").join(val);
        }
        layer.bindPopup(html);
      };
    }

    this.geojson.push({
      src: url,
      data: data,
      style: style,
      eachFeature: popup
    });
  }
};