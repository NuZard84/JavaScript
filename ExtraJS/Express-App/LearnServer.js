const express = require("express");
const path = require("path");
const app = express();
const seession = require("express-session");
const cookies = require("cookie-parser");

const port = process.env.PORT || 3000;

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

// app.set("view engine", "pug");

// app
//   .get("/", (req, res) => {
//     res.render("index", {
//       title: "Express-Application",
//       h1: "we hope you visit again",
//     });
//   })

/* -------Sessions------- */

// app.use(
//   seession({
//     secret: "heyyy",
//     saveUninitialized: true,
//     resave: true,
//   })
// );

// app.get("/", (req, res) => {
//   req.session.name = "hett";
//   return res.send("Session");
// });

// app.get("/session", (req, res) => {
//   var name = req.session.name;
//   res.send(name);
// });

// app.get('/destroy', (req, res) => {
//   req.session.destroy((err) => {
//     console.log("session destroy");
//   });
//   res.end();
// })

/* -------Cookie------- */

app.use(cookies());

let user = {
  name: 'het',
  salary: 120000
}

app.get('/', (req, res) => {
  res.send("cookie saving...")
})

app.get('/setuser', (req, res) => {
  res.cookie("userdata", user);
  res.send("userdata added to cookies...")
})

app.get('/setuser/getuser', (req, res) => {
  res.send(req.cookies)
})

app.get('/setuser/getuser/logout', (req, res) => {
  res.clearCookie('userdata');
  res.send('logout successfully and cookie has been cleared ...')
})

app.listen(port, () => console.log("server is running !!"));
