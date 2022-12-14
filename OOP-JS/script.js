'use strict';

//Basic knowledge of 'new' keyword...
const Person = function (fName, birthYear) {
  //intance property...

  this.fName = fName;
  this.birthYear = birthYear;

  //==>this is not sufficient way...
  // this.calAge = function () {
  //     console.log(2023 - this.birthYear);
  // }
};

const het = new Person('hett', 2003);
const sarang = new Person('sarang', 2004);
const vb = new Person('vaibhav', 2006);
console.log(het);
const hett = 'het';

console.log(het instanceof Person); //true
console.log(hett instanceof Person); //false

//==>working process of new keyword,..
//1. {} created.
//2. when function is callled , this = {}.
//3. {} linked to prototype.
//4. function autmatically return {}.

//Prototype...

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

het.calcAge(); //20
vb.calcAge(); //17
console.log(Person.prototype); //all object include constructer object...

console.log(het.__proto__); //all object property
console.log(het.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(het)); //true
console.log(Person.prototype.isPrototypeOf(vb)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

console.log(het.hasOwnProperty('calcAge')); //false
console.log(het.hasOwnProperty('fName')); //true

// .prototyeOfLinkedObjects...

Person.prototype.species = 'Homo Sapiens';
console.log(het.species, vb.species); //Homo Sapiens Homo Sapiens
console.log(het.hasOwnProperty('fName')); //true
console.log(het.hasOwnProperty('species')); //false

// Prototypal Inheritance on Built-In Objects

console.log(het.__proto__);

// Object.prototype (top of prototype chain)

console.log(het.__proto__.__proto__);
console.log(het.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); //3,6,5,9

const h1 = document.querySelector('h1');
console.dir(x => x + 1); //anonymous object for function...

//challenge - 1...
const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

const bmw = new Car('bmw', 160);
const mercedese = new Car('mercedese', 140);
console.log(bmw);
console.log(mercedese);

Car.prototype.breaks = function () {
  this.speed -= 10;
  console.log(`${this.name} is going at ${this.speed}km/hr`);
};
Car.prototype.accelerate = function () {
  this.speed += 20;
  console.log(`${this.name} is going at ${this.speed}km/hr`);
};

//functions : breaks decrease 10 km/hr and accelerate 20 km/hr...
bmw.breaks();
bmw.accelerate();
bmw.accelerate();
bmw.breaks();
mercedese.accelerate();
mercedese.breaks();
console.log('After', bmw); //speed : 180
console.log('After', mercedese); //speed : 150

//class expression...
// const PersonCl = class { };

//class declaration...
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movement.slice(-1).pop();

  }
   
  4
};

console.log()account.latest;

