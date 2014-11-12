module.exports = {
  lite: {
    url: "http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd".split("")
    }
  },
  toner: {
    url: "http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd".split("")
    }
  },
  watercolor: {
    url: "http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png",
    options: {
      subdomains: "abcd".split("")
    }
  }
};