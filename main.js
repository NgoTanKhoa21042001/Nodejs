let http = require("http");

// tạo server

let myServe = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.end("Hello, world!");
  }
  if (req.url == "/login") {
    res.end("Hello Login");
  }
});

myServe.listen(3000);
