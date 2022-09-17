'use strict';

//defualt parameters...

// const bookings = [];

// const airport = function (name = 'air india', passenger = 199, cost = 1500) {
//   const booking = {
//     name,
//     passenger,
//     cost,
//     };

//     bookings.push(booking);
//     console.log(booking);
// };
// airport('patel air line', 200, 2000);
// airport(250, 1700); //we just cant skip any parameter..
// airport('air india', 150, undefined); //cost will be undefind so it just put defualt value...

//passing argument : value/reference
// const ticket = 'LK485';
// const het = {
//     name: 'het',
//     port: 80842832
// }

// const cheackIn = function (tkit, passenger) {
//     tkit = 'MN748';
//     passenger.name = 'Mr' + ' ' + passenger.name;

//     if (passenger.port === 80842832) alert('check in');
//     else alert('wrong passport...')
// }

// cheackIn(ticket, het);
//JS

// console.log(ticket); //LK485...it simply coppy..it can not change original..(premitive)
// console.log(het);  //Mr het ...they(het,passenger) both are the same object in memory heap..(object)it contain memory adress

// const newPassport = function (person) {
//      person.port = Math.trunc(Math.random() * 11111111);
// }
// newPassport(het);
// cheackIn(ticket, het);
// console.log(het); //port:Randome number...

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }
// const firstUppercase = function (str) {
//     const [first, ...other] = str.split(' ');
//     return [first.toUpperCase(), ...other].join(' ');
// }
//higher order function...
// const transform = function (str, fun) {

//     console.log(`original: ${str}`);
//     console.log(`transformed: ${fun(str)}`);
// }

// transform('my name is het varasada whats yours', firstUppercase);
// transform('my name is het varasada whats yours', oneWord);

// const laugh = function () {
//     console.log('😂');
// }
// document.body.addEventListener('click', laugh);

// ['hett', 'vb', 'krish'].forEach(laugh);

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }
// const greets = greet('hello'); //greets = function(name) ..greeting = 'hello'
// greets('het'); // name = 'het'...display : hello het..
// greets('vb');
// greet('hey')('het'); //alternet way of callback function

//airow function..
// const greet = (greeting) => function (name) {
//     console.log(`${greeting} ${name}`);
// }

//OR...

// const greet = greeting => name => console.log(`${greeting} ${name}`);
// greet('hey')('het');

// const airIndia = {
//   airline: 'airIndia',
//   iataCode: 'ARI',
//   booking: [],
//   // book: function(){}
//   book(flighnum, name) {
//     console.log(
//       `${name} booked seat on ${this.airline}, seat number: ${this.iataCode}${flighnum}`
//     );
//     this.booking.push({ fligh: `${this.iataCode}${flighnum}`, name });
//   },
// };

// airIndia.book('het', '84');
// airIndia.book('krish', '48');
// console.log(airIndia);

// const eurowings = {
//   airline: 'eurowings',
//   iataCode: 'EWR',
//   booking: [],
// };

// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'SWS',
//   booking: [],
// };

// const book = airIndia.book;

//it is not working beacuase in regular function 'this' keyword is directly use as undefined...
// book(23, 'Nishchit');

// book.call(eurowings, 'Nishchit', 48);
// console.log(eurowings);

// book.call(airIndia, 'HEt', 84);
// console.log(airIndia);

// book.call(swiss, 'vb', 96);
// console.log(swiss);

// //Apply method..
// const flightData = [848, 'hett'];
// book.apply(swiss, flightData);
// console.log(swiss);
// //OR...
// book.call(swiss, ...flightData);
// console.log(swiss);

//Bind method...
// const bookARI = book.bind(airIndia); //here first parameter is always work as 'this' keyword...
// bookARI('hett', 84);

//now for fixed seat number..arguments in bind
// const bookSWS48 = book.bind(swiss,...[,,] ); //it is use for assigne undefine to arguments at once...

// const bookSWS48 = book.bind(swiss, 48);
// bookSWS48('nishchit');

// airIndia.plane = 101;
// airIndia.buyplane = function () {
//   console.log(this); //"this" = point to class '.buy'...
//   this.plane++;
//   console.log(this.plane); //it has no wxistence...
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', airIndia.buyplane.bind(airIndia)); //worked...

// //partial apllication...
// const addTax = (rate, value) => value = value * rate;

// console.log(addTax(0.1, 45));
// const addVAT = addTax.bind(null, 0.1); //'this = null... & rate = 0.1 is fixed...
// console.log(addVAT(45)); //45
// //const addTax = value => value = value * 0.1;

// const addTax = function (rate) {
//     return function (value) {
//         return value * rate;
//     }
// }
// console.log(addTax(0.1)(45));

//challenge-1...
/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀 */

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0), //made array of [0,0,0,0]

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.poll}\n${this.options.join('\n')}\n(write option number)`)
//     );

//     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

//     this.displayResult();
//     this.displayResult('string');

//   },

//   displayResult(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     }
//     else if (type === 'string') {
//       //reult are 12,14,18,5
//       console.log(`poll result :${this.answers.join(', ')}`);
//     }
//   }
// };
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

//for bonus question..
// poll.displayResult.call({answers:[0,0,0]},'string')
// console.log(poll);

// const runAnytime = function () {
//   console.log('this will run as many time you wish..');
// }
// runAnytime();

//IIFE : immedietly invoked function expression
// (function () {
//   console.log('this will run only once..Regular Function');
// })(); //regular IIFE function

// (() => {
//   console.log('this will also run only once..Airow function');
// })();

//Closure....

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;

//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();

// booker();
// booker();

// let f;

// const g = function () {
//   const a = 20;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 30;
//   f = function () {
//     console.log(b*2);
//   }
// }

// g();
// f(); //40
// console.dir(f);

// h();
// f(); //60
// console.dir(f); //to get information of closure environment..

// const boardPassenger = function (n,wait) {
  
  // const perGroup = n / 3; //it is in vairable environment in closure function..so its first priority..
  
  // setTimeout(function () {  //it is individual function...
  //   console.log(`we are boring ${n}`);
  //   console.log(`there are 3 groups, each with ${perGroup} passenger`);
  // }, wait * 1000);
  
  // console.log(`will start boarding in ${wait} second`);
// }
// const perGroup = 120;  //this global scop but clouser is priority in scope chain so it will be ingnored
// boardPassenger(180, 3);

//challenge 2...

/* This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀 */

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {

    header.style.color = ' blue';
  });
})();


