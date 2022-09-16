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

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}
const firstUppercase = function (str) {
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');
}
//higher order function...
const transform = function (str, fun) {
    
    console.log(`original: ${str}`);
    console.log(`transformed: ${fun(str)}`);
}

transform('my name is het varasada whats yours', firstUppercase);
transform('my name is het varasada whats yours', oneWord);