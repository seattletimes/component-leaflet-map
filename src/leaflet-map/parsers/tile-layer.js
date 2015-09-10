module.exports = function(element) {
  this.tiles.push({
    layer: element.getAttribute("layer"),
    url: element.getAttribute("url"),
    options: {
      subdomains: element.getAttribute("subdomains") || "",
      opacity: element.getAttribute("opacity") || 1,
      continuousWorld: element.hasAttribute("continuous"),
      noWrap: element.hasAttribute("nowrap"),
      tms: element.hasAttribute("tms")
    },
    id: element.getAttribute("id")
  });
};