'use strict';

//Basic knowledge of 'new' keyword...
const person = function (fName, birthYear) {
  //intance property...

  this.fName = fName;
  this.birthYear = birthYear;

  //==>this is not sufficient way...
  // this.calAge = function () {
  //     console.log(2023 - this.birthYear);
  // }
};

const het = new person('hett', 2003);
const sarang = new person('sarang', 2004);
const vb = new person('vaibhav', 2006);
console.log(het);
const hett = 'het';

console.log(het instanceof person); //true
console.log(hett instanceof person); //false

//==>working process of new keyword,..
//1.{} created.
//2.when function is callled , this = {}.
//3.{} linked to prototype.
//4.function autmatically return {}.

//Prototype...

person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

het.calcAge(); //20
vb.calcAge(); //17
console.log(person.prototype); //all object include constructer object...

console.log(het.__proto__); //all object property
console.log(het.__proto__ === person.prototype); //true

console.log(person.prototype.isPrototypeOf(het)); //true
console.log(person.prototype.isPrototypeOf(vb)); //true
console.log(person.prototype.isPrototypeOf(person)); //false


console.log(het.hasOwnProperty('calcAge')); //false
console.log(het.hasOwnProperty('fName')); //true
