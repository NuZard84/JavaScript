const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "loginpage",
});

con.connect((err) => {
  if (err) console.log(err);
  else console.log("DB connected !");
});

// con.query(
//   'select * from userdata where EmailId = "pateelhetvarasada@gmail.com" ',
//   [],
//   (err, res, fields) => {
//     if (err) throw err;

//     console.log("The solution is: ", res.length);
//   }
// );


module.exports = con;
