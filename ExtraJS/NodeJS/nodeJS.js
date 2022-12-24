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

// function greet() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello hett");
//     }, 1000);
//   });
// }

// async function hello(callback) {
//   const hello = await greet();
//     console.log("greeeting :", hello);
//     callback();
// }
// hello(Intro);

// function Intro() {
//     console.log("i am nishchit ");
// }

/*      -----HTTP SERVER-----   */

// const http = require("http");

// const hostName = "127.0.0.1";
// const port = 3004;

// // const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
// //   res.setHeader("Content-Type", "text/plain");
// //   res.end("WElcome to server !");
// // });

// http
//   .createServer((req, res) => {
//     // res.statusCode = 200;
//     // res.setHeader("Content-Type", "text/plain"); OR..->

//     res.writeHead(200, { "Content-Type": "text/plain" });
//     // res.end("WElcome to server !"); OR..->

//     res.write("Welcome to server");
//     res.end();
//   })
//   .listen(port, hostName, () => {
//     console.log(`server is running http://${hostName}:${port}/`);
//   });

// // server.listen(port, hostName, () => {
// //   console.log(`server is running http://${hostName}:${port}/`);
// // });

/*      -----HTTP SERVER-----   */

// http.get("http://api.open-notify.org/astros.json", (resp) => {
//   let data = "";
//   resp.on("data", (bunch) => {
//     data += bunch;
//   });

//   resp.on("end", () => {
//     let JSONdata = JSON.parse(data);
//     console.log(JSONdata);
//   });

// });

/*      -----HTTP SERVER-----   */

// const http = require("https"); //here we use ttps module cause may api site block http req due to SSL issue..

//OR..->

// const axios = require("axios");

// const data = JSON.stringify({
//   name: "John Doe",
//   Job: "Content Writer"
// });

// const option = {
//   hostname: 'reqres.in',
//   path: '/api/users',
//   method: 'POST',
//   header: {
//     'Content-Type' : 'applicatin/json'
//   }
// }

// const req = http.request(option, (res) => {
//   let body = '';
//   console.log("status-code: ", res.statusCode);

//   res.on('data', (bunch => {
//     body += bunch;
//   }))

//   res.on('end', () => {
//     console.log('body:', JSON.parse(body));
//   })
// })

// req.write(data);
// req.end();

//OR..->

// axios.post('https://reqres.in/api/users', data).then((result) => {
//   console.log(`status-code : ${result.status}`)
//   console.log(`body : ${JSON.stringify(result.data)}`)

// }).catch((err) => {
//   console.log(err);
// });

/*      -----WORKING WITH FILE-----   */

// const fs = require("fs");

// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) throw err;

//   console.log(data);
// }); //asychroneous way

// const data = fs.readFileSync("test.txt", { encoding: "utf-8", flag: "r" }); //synchroneous way...

// console.log(data);

// fs.stat("test.txt", (err, stat) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(stat.isFile());
//   console.log(stat.isDirectory());
//   console.log(stat.isSymbolicLink());
// });

//r+ -> reading , wtiting
//w+ -> delete previous data and add
//a+ ->  reading and writing and add at the end
//a -> only write

// const contentSync = [{
//   type: "Node application"
// }]
// const contentAsync = "node application ";

// fs.writeFileSync('test.json', JSON.stringify(contentSync));

// fs.writeFile("test1.txt", contentAsync, {
//   flag: "w+",
// }, err => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("successfully done!")
// });

// fs.unlink('test1.txt', err => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('removed !');
// })  //delete file...

/*      -----ROUNTING-----   */

const http = require("http");

// function index(request, respose) {
//   respose.writeHead(200);
//   respose.end("Routing is running...");
//   console.log("home page is running");
// }

// function about(request, respose) {
//   respose.end("about us page is running...");
//   console.log("about page is running");
// }

// http
//   .createServer(function (req, res) {
//     if (req.url == "/") {
//       return index(req, res);
//     }

//     if (req.url == "/about") {
//       return about(req, res);
//     }
//   })
//   .listen(process.env.PORT || 8000);

  //OR..->

  const routes = {
    "/": function index(request, respose) {
      respose.writeHead(200);
      respose.end("Routing is running...");
      console.log("home page is running");
    },
  
    "/about": function about(request, respose) {
      respose.end("about us page is running...");
      console.log("about page is running");
    },
  };
  
  http
    .createServer(function (req, res) {
      if (req.url in routes) {
        return routes[req.url](req, res);
    }
    })
    .listen(process.env.PORT || 8000);
