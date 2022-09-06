'use strict';

------------------------------------------------------
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


------------------------------------------------------
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';  ==> var is global variabke and hoisting variable so it has to be declared before use it...

let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {        ==> it give value...
  return a + b;
}

const addExpr = function (a, b) {     ==> it cannot give value it return undefine
  return a + b;
};

var addArrow = (a, b) => a + b;  ==> undefine

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;  ==> it is global variable type so it can be seen in window object unlike let & var..
let y = 2;
const z = 3;

console.log(x === window.x);  ==> true
console.log(y === window.y);  ==> false
console.log(z === window.z);  ==> false


------------------------------------------------------
// The this Keyword in Practice => this keyword simply follow its parent scope it is used for its all object

console.log(this);  ==> it is simply a window object in global scope..

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);  ==> undefined(calcAge)
};
calcAge(1991);

const calcAgeArrow = birthYear => {   ==> airow function has not its own 'this' keyword...so its parent scope is window objects..

  console.log(2037 - birthYear);
  console.log(this);   ==> window
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;  ==> borrowing...
matilda.calcAge(); ==> now here 'matilda' is parent scope for 'this'...

const f = jonas.calcAge;
f();  ==> there is no parent scope here...


------------------------------------------------------
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    ==> rule is inside the funcction call 'this' keyword must be undefined...

        Solution 1 >>>
        const self = this; ==> self or that
        const isMillenial = function () {
        console.log(self);
        console.log(self.year >= 1981 && self.year <= 1996);
    };

        Solution 2 >>>  ==> here this is airow function and its parent scope is "jonas" beacuse it is inside the method in function...
        it is not relatable with window  object 
        yet
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {          ==>  undefined...reason is it is airow function
    console.log(this);  ==> "window object"
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

==> argument keyword only work with regular function declaration..
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


------------------------------------------------------
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);


------------------------------------------------------
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';  
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;  ==> jessica(adress) = merriedJessica(adress)...becuase it is an object, it is how it should work :)...

marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);  ==>lastName = davis
console.log('After marriage: ', marriedJessica); lastName = davis
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
==> it is shallow coppy it cant manipulate object inside object and it will be learnt forward lecture 'deep coppy'....
const jessicaCopy = Object.assign({}, jessica2);  ==>here, jessica2 object is merge with new empty object...
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);  ==>lastname = williams but, array will be same becuase it is object inside object
console.log('After marriage: ', jessicaCopy);  ==>lastname = devis but, array will be same becuase it is object inside object
*/
