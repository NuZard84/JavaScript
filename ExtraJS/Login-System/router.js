const express = require("express");
const con = require("./database");

var router = express.Router();

router.post("/login", (req, res) => {
  con.query(
    `select * from userdata where EmailId=\'${req.body.email}\'`,
    [],
    (err, res0, fields) => {
      if (err) throw err;

      if (res0.length == 0) res.end("please cheack your email !");

      let Remail = res0[0].EmailId;
      let Rpassword = res0[0].Password;
      let Wemail = req.body.email;
      let Wpassword = req.body.password;

      if (Wpassword === Rpassword) {
        res.end("login successfull !");
      } else res.end("your password is wrong !");
    }
  );
});

router.post("/signup", (req, res) => {
  let Wemail0 = req.body.email0;
  let Wpassword0 = req.body.password0;
  let Wusername = req.body.username;

  con.query("select * from userdata", [], (err2, res2, fields2) => {
    var ID = res2.length + 1;
    con.query(
      `select * from userdata where EmailId=\'${Wemail0}\' or Username=\'${Wusername}\'`,
      [],
      (err1, res1, fields1) => {
        if (err1) throw err1;

        if (res1.length != 0) {
          if (res1[0].EmailId !== Wemail0 || res1[0].username !== Wusername) {
            res.end(
              "this email/username already used !! Try again with unique credential..."
            );
          }
        } else if (res1.length == 0) {
          con.query(
            `insert into userdata (IDNo,EmailId,Password,Username) values(${ID},\'${req.body.email0}\',\'${req.body.password0}\',\'${req.body.username}\')`,
            [],
            (err0, res0, fields0) => {
              if (err0) throw err0;
              res.end("Signup Successfully");
            }
          );
        }
      }
    );
  });
});

module.exports = router;
