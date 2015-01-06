var stamenAttrib = [
  'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, ',
  'under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ',
  'Data by <a href="http://openstreetmap.org/">OpenStreetMap</a>, ',
  'under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
].join("");

module.exports = {
  lite: {
    url: "http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd",
      attribution: stamenAttrib
    }
  },
  background: {
    url: "http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd",
      attribution: stamenAttrib
    }
  },
  toner: {
    url: "http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd",
      attribution: stamenAttrib
    }
  },
  watercolor: {
    url: "http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd",
      attribution: stamenAttrib
    }
  },
  terrain: {
    url: "http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd",
      attribution: stamenAttrib
    }
  }
};