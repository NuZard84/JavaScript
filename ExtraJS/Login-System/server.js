const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const router = require("./router");



const app = express();
const PORT = 8080;

//parse body code to access inputs data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", "./view"); //for take permission to use view engine... Andexpress and ejs could not find the view, to solve this you have to specified where is your views folder
app.set("view engine", "ejs");

//Load Static asset by href path with '/static/..
app.use("/static", express.static(path.join(__dirname, "view"))); //for reviewing all file attached to server... And You simply need to pass the name of the directory where you keep your static assets, to the express.static middleware to start serving the files directly. For example, if you keep your images, CSS, and JavaScript files in a directory named View

app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/route", router);

//home route
app.get("/", (req, res) => {
  res.render("base", { title: "login-system" });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server is running !! ==> http://localhost:${PORT}`);
});
