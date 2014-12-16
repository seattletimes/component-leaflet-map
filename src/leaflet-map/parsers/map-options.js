module.exports = function(element) {
  var json;
  try {
    json = JSON.parse(element.innerHTML);
  } catch (e) {
    console.warn(e, element.innerHTML);
  }
  for (var key in json) {
    this.options[key] = json[key];
  }
};