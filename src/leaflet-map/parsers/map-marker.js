module.exports = function(element) {
  this.markers.push({
    html: element.innerHTML,
    latlng: [element.getAttribute("lat"), element.getAttribute("lng")].map(Number),
    style: element.getAttribute("style"),
    class: element.className,
    title: element.getAttribute("title"),
    id: element.getAttribute("id")
  });
};