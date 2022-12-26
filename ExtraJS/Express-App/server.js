const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

// app.get("/aboutapp", (req, res) => {
//   res.send("This is Express-app !");
// });
// app.get("/aboutapp/tamplates", (req, res) => {
//   res.send("following templates are for this Framework ..!");
// });

/* -------MIDDLEWARE------- */

// const Logger = function (req, res, next) {
//   console.log("Loged in...");
//   next();
// };

// const reqDateTime = function (req, res, next) {
//   req.reqTime = Date.now();
//   next();
// };

// app.use(Logger);
// app.use(reqDateTime);

// app.get('/', (req, res) => {
//   res.send(`current Seconds : ${req.reqTime}`);
// })
// app.get('/hello', (req, res) => {
//   res.send('hello !!');
// })

/* -------Serving Static File in Express------- */

// const publicPath = path.resolve(__dirname, "public");

// app.use(publicPath, express.static("static"));

// app.get("/", (req, res) => {
//   res.send(`static Files`);
// });

/* -------View------- */

app.set("view engine", "pug");

app
  .get("/", (req, res) => {
    res.render("index", {
      title: "Express-Application",
      h1: "we hope you visit again",
    });
  })
  .listen(process.env.PORT || port, () => console.log("server is running !!"));
