/*      ----PROMISES-----   */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve("get massage..."); //this will not print bit it wait to cheack if this is true or false

//   }, 2000);

// //   reject("message cannot be gotten !"); //this will be printed...

// });

// promise.then(
//   (result) => {
//         console.log(result); //this will print resolve if there is no error
//         specify_LOGIN();     // this will be printed after loged in...
//   },

//   (error) => {
//       console.log(error); //this will print reject if there is error
//       specify_ERROR();//this will print

//   }
// );

// function specify_ERROR() {
//     console.log("please enter Valid Input >>!");
// }

// function specify_LOGIN() {
//     console.log("you are in...");
// }

/*      -----ASYNC & AWAIT-----   */


//==>  IF WE DO NOT USE AWAIT AND ASYNC KEYWORD WE WILL GET RESULT LIKE THIS
//      -> greeeting : Promise { <pending> }


function greet() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello hett");
    }, 1000);
  });
}

async function hello(callback) {
  const hello = await greet();
    console.log("greeeting :", hello);
    callback();
}
hello(Intro);

function Intro() {
    console.log("i am nishchit ");
}

