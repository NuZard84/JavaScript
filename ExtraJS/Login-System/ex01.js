import { pool as pl } from "./client.js";


// const switchers = [...document.querySelectorAll(".switcher")];

// switchers.forEach((item) => {
//   item.addEventListener("click", function () {
//     switchers.forEach((item) =>
//       item.parentElement.classList.remove("is-active")
//     );
//     this.parentElement.classList.add("is-active");
//   });
// });

export function get_DATA() {
  pl.query(
    "select * from userdata where IDNo = ? ",
    [1],
    (err, res, fields) => {
      if (err) console.log(err);

      if (!err) {
        console.log("we r in --> ");

        res.forEach(function (ele, index, arr) {
          if (ele.IDNo === 1) {
            console.log("we are in !", ele.Username);
          }
          console.log(ele, " --- ", index);
        });
      }
    }
  );
}

