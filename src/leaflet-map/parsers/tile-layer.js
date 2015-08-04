module.exports = function(element) {
  this.tiles.push({
    layer: element.getAttribute("layer"),
    url: element.getAttribute("url"),
    options: {
      subdomains: element.getAttribute("subdomains"),
      opacity: element.getAttribute("opacity") || 1
    },
    id: element.getAttribute("id")
  });
};