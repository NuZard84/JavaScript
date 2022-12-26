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

// const http = require("http");

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

// const routes = {
//   "/": function index(request, respose) {
//     respose.writeHead(200);
//     respose.end("Routing is running...");
//     console.log("home page is running");
//   },

//   "/about": function about(request, respose) {
//     respose.end("about us page is running...");
//     console.log("about page is running");
//   },
// };

// http
//   .createServer(function (req, res) {
//     if (req.url in routes) {
//       return routes[req.url](req, res);
//   }
//   })
//   .listen(process.env.PORT || 8000);

/*      -----EVEBT MODULE-----   */

// const events = require("events");

// const ev = new events.EventEmitter();

// var func = function (data) {
//   console.log("i will be unregister !!");
// };
// ev.on("MY_EVENT", () => console.log("hello het i am here !"));
// ev.once("MY_EVENT0", () => console.log("het this is my last visit !!"));
// ev.on("MY_EVENT1",func);
// ev.off("MY_EVENT1", func); //this perticular event will be unregister..

// ev.emit("MY_EVENT");
// ev.emit("MY_EVENT0");
// ev.emit("MY_EVENT0"); //this will be not execute
// ev.emit("MY_EVENT1","ok"); // this is unregistered

/*      -----STREAM-----   */

// const http = require("http");
// const fs = require("fs");
// const { resolve } = require("path");

// const server = http.createServer((req, res) => {
//   // fs.readFile("test.json", (err, data) => {
//   //   if (err) throw err;
//   //   res.end(data);
//   // });

//   const stream = fs.createReadStream("test.json");
//   stream.pipe(res); // this will send files data chunck by chunck(pecies) it is way more efficient...
// });

// server.listen(process.env.PORT || 3000, () => {
//   console.log("server is running at 3000 PORT");
// });

/*      -----PROMISES-----   */

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve('resolved 45', 1500));
// })
// const promise2 = new Promise ((resolve, reject) => {
//   setTimeout(reject('no resolved!!'),1000)
// });
// const promise3 = Promise.resolve('directly resolve');

// Promise.all([promise1, promise2, promise3]).then(value => {
//   console.log(value);  //it will be promise all..
//  })

// Promise.any([promise1, promise2, promise3]).then(value => {
//   console.log(value);  //45
// });

// Promise.race([promise1, promise2, promise3]).then(value => {
//   console.log(value); //resolved 45 is print cause it is fastest resolve promises...
// });

/*      -----BUFFER-----   */

// const buf = Buffer.from('hey!');
// const bufAlloc = Buffer.alloc(4);
// bufAlloc.write('hell');

// console.log(buf[0]);
// console.log(buf[1]);
// console.log(buf[2]);
// console.log(buf[3]);

// console.log(buf);
// console.log(buf.toString());
// buf[1] = 111 // o
// console.log(buf.toString());
// console.log(bufAlloc.toString()); //hell

///*      -----BUFFER-----   */
const path = require("path");

file0 = path.basename("NodeJS/test.json");
file1 = path.dirname("NodeJS/test.json");
file2 = path.isAbsolute("NodeJS/test.json");
let dir = "NodeJS";
file3 = path.join(dir, "/test.json");
file4 = path.parse("NodeJS/test.json");
file5 = path.resolve("NodeJS/test.json");
file6 = path.resolve("/NodeJS", "test.json");

console.log(file0); //test.json
console.log(file1); //NodeJS
console.log(file2); //false
console.log(file3); //NodeJS/test.json
console.log(file4); /*{
    root: '',                                 
    dir: 'NodeJS',    
    base: 'test.json',
    ext: '.json',
    name: 'test'
  } */
console.log(file5); //C:\CodeWork\JS\JavaScript\ExtraJS\NodeJS\NodeJS\test.json
console.log(file6); //C:\NodeJS\test.json
