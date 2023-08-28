// let http = require("http");

// // tạo server

// let myServe = http.createServer(function (req, res) {
//   if (req.url == "/") {
//     res.end("Hello, world!");
//   }
//   if (req.url == "/login") {
//     res.end("Hello Login");
//   }
// });

// myServe.listen(3000);

let express = require("express");
let myApp = express();
myApp.use(express.urlencoded({ extended: false }));
// de exoress chấp nhận dữ liệu tỏng body

//user mún lấy gi đó từ app
// chỗ nào user có thể tới get req này
myApp.get("/", function (req, res) {
  // gửi lại gi khi user tới app của mình
  res.send(`
        <form action = "/answer" method = "POST">
            <p> 2  + 2 </p>
            <input type="text" name = "answer" />
            <button>Submit</button>
        </form>
    `);
});
// lúc user req POST thì express sẽ lưu data trong body. Và body này sẽ là answer bên trong element input

myApp.post("/answer", function (req, res) {
  if (req.body.answer == 4) {
    res.send(`
            <p>Correct Answer</p>
            <a href = "/" >Back</a>
        `);
  } else {
    res.send(`
            <p>Wrong Answer</p>
            <a href = "/" >Back</a>
        `);
  }
});

myApp.listen(3000);
