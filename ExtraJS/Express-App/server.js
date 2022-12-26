const express = require("express");
const app = express();

app.get("/aboutapp", (req, res) => {
  res.send("This is app !");
});
app.get("/aboutapp/tamplates", (req, res) => {
  res.send("following templates are for this Framework ..!");
});

app.listen(process.env.PORT || 3000, () => console.log("server is running !!"));

