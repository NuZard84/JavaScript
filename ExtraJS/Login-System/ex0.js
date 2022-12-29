// const { json } = require("express");

import mysql from "mysql";
import express from "express";

// const express = require("express");
// const { createPool } = require("mysql");

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "loginpage",
  connectionLimit: 10,
  port: 3306,
})



// pool.query(
//   "select * from userdata where IDNo = ? ",
//   [1],
//   (err, res, fields) => {
//     if (err) console.log(err);

//     if (!err) {
//       console.log("we r in --> ", res);
//       // console.log(res[0].IDNo);
//       // console.log(res[0].EmailId);
//       // console.log(res[0].Password);
//       // console.log(res[0].Username);

//       res.forEach(function (ele, index, arr) {
//         if (ele.IDNo === 1) {
//           console.log('we are in !',ele.Username);
//         }
//         console.log(ele,' --- ' , index);
//       });

//       // var data = JSON.parse(JSON.stringify(res));
//       // console.log("JSON formate : ", data);
//       // console.log(data[0].IDNo);

//       // console.log(fields);
//     }
//   }
// );
