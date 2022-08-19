'use strict'; //this mode is help to find minor or certain error

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;0
// if (hasDriverLicense) console.log("i can drive");

// const interface = 'audio'; //this is reserved for future 'interface'
// const private = 'audio'; //this is reserved for future 'private '



// >>>funtions...
//--------------------------------------

// function use(apples , oranges) {

//     console.log(apples,oranges);
//     const juice = ` juice with ${apples} apple and ${oranges} oranges`;

//     return juice;

// }

// const serve = use(10, 84);
// console.log(serve);
// console.log(use(48, 8));


// >>>function declaration... 
//---------------------------------------

// console.log(calcBirthyr(2003)); //in declaration it can be possoble to call func before intialize

// function calcBirthyr(birthyear) {

//     const nowyr = 2022;

//     return nowyr - birthyear;
// }

// // >>>function expression...

// //unlike declaration .. not possible o call func before intialize
// const calcBirthyr1 = function (birthyear) {

//     return 2022 - birthyear;
// }

// const age = calcBirthyr1(2002);

// console.log(calcBirthyr(2003),age);


// >>> Arrow function ...
//----------------------------------

// const calcBirthyr2 = birthyear => 2022 - birthyear ;
// console.log(calcBirthyr2(2003));

// const retirement = (birthyr, name) => {

//     const age = 2022 - birthyr;
//     const retire = 65 - age;
//     return `${name} will get retirement after ${retire} years so till then work hard for now !`
// }
// console.log(retirement(2003, 'het'));


// const cuts = fruit => 4 * fruit ;

// function use(apples , oranges) {

//     const applecuts = cuts(apples);
//     const orangecuts = cuts(oranges);
//         console.log(apples,oranges);
//         const juice = ` juice with ${applecuts} eices of apple and ${orangecuts} peices of oranges`;
    
//         return juice;   
//     }

//     console.log(use(4,6));

// >>>review...
// >>Arrays...
//---------------------------


//const nm = prompt("Enter your Name :");
// const Name = ['vb','het','krish'];
// const Year = ['1955','2002','1999'];

// for(let i=0; i < 3; i++){
    
// const calAge = birthyr => 2022 - birthyr;
// const retirement = name => {

//         // const n = prompt("Enter your BirthYear :");
       
//         const age = calAge(Year[i]);
        
//         const retire = 65 - age;

//         if(retire > 0){
//         return `${Name[i]} will get retirement after ${retire} years so till then work hard for now !`}

//         else{
//             return `${Name[i]} already retired ${(-1)*retire} year before`
//         }

//     }

//     console.log(retirement(Name[i]));
// }
    
// >>> Array operations...    
// ----------------------------------

    
// let ar = [1,2,3,4,5];

// ar.push(6);  //add element at last
// console.log(ar); 

// ar.unshift(0);
// console.log(ar); //add element at begining

// ar.shift(); //remove 1st element
// console.log(ar);

// ar.pop();  //remove last element
// console.log(ar);

// if(ar.includes(3)){ //give boolean return

//     console.log('there is 3 number');
// }

// >>> Objects ...
// -------------------------------


// const obj = {
//     firstName: 'Het',
//     lastName: 'Varasada',
//     birthYeah: 2003,
//     job: 'Student',
//     friends: ['Nishchit', 'Keyur', 'vb', 'meet' ,'krish'],
//     hasDriversLicense: false,

//     // calcAge: function (birthYeah) {
//     //   return 2037 - birthYeah;
//     // }
//     calcAge: function () {
      
//       return 2022 - this.birthYeah;
//     },
//     // calcAge: function () {
//     //   this.age = 2037 - this.birthYeah;
//     //   return this.age;
//     // },

//     getSummary : function () {

//       return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
//   };

  
//   console.log(obj.getSummary());


// console.log(obj['calage'](2003));

// console.log(obj.birthyear);
// console.log(obj['birthyear']);

// const key = 'name';
// console.log(obj['f' + key]);
// console.log(obj['l' + key]);

// //simply add object..
// obj.location = 'India';
// obj['job'] = 'student';

// const intrestInInfo = prompt('what do you want to know about roll nomber 84 ? >> fname,  lname, age,location, job frnds(name of frnds)..!');

// if(obj[intrestInInfo] ){ 
//     console.log(obj[intrestInInfo]);
// }
// else{
//     console.log('we have not this information about this rollNomber, Sorry!');  //undefined is falsy value
// }

// const intrestInFrnd = prompt('do you want to know who is best friend of roll no 84 ? >> yes/no ..!');

// if(intrestInFrnd === 'yes'){

//     console.log(`${obj['fname']} has ${obj.frnds.length} friends and ${obj.frnds[0]} is his best friend.`)
// }
// else{
//     console.log('exit');
// }


// >>> For & while loop ...
//-----------------------------

// const myArray = [

//     'Het',
//     'Varasada',
//     2022 - 2003,
//     'Student',
//     ['Nishchit','vb','meet','krish']
// ];

// const typeofArray = [];

// for (let index = 0; index < myArray.length; index++) {

//     const element = myArray[index];
//     typeofArray [index] = typeof(myArray[index]); //we can also right as 'typeof myarray[index]'

//     console.log(element,typeofArray[index]);    
// }
// console.log('>>> STRING <<<');
// for (let index = 0; index < myArray.length; index++) {
//     if (typeofArray[index] !== 'string') continue ; 
//     console.log(myArray[index]);        
// }


// let count = 1;
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6){

//     console.log(`rolled >>> ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if (dice === 6) {
//         console.log('you got SIX !!');
//     }    
//     count ++;
// }
// console.log(`you take total ${count} round to get SIX`);

// >>> Challenge ....
// ------------------------

const calcTip = function (bill) {
    
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  }

  const bills = [1500,90,85,1100,1350,1465,990];
  const tips = [];
  const total = [];

  for (let i = 0; i < bills.length; i++) {

    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
  }

  console.log('Bills :', bills);
  console.log('Tips : ', tips);
  console.log('total : ', total);

  const calcAverage = function (arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

      sum += arr[i];
    }

    return sum / arr.length;
  }

  console.log('Average Total : ',calcAverage(total));
  console.log('Average Tips : ', calcAverage(tips));

