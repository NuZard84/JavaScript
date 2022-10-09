// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arr0 = [1, -2, 3, 4, -5];
//Slice...

// console.log(arr.slice(-3)); //last element...e
// console.log(arr.slice(1, 4)); //b,c,d,e
// console.log(arr.slice(3)); //d,e
// console.log(arr.slice(1, -2)); //b,c

//Splice...
//it is extracted element which is selected and rest of element can be print by console
//Note: splice take also last value ...

//ignore simultaneous calls...

// console.log(arr0.splice(1)); //extracted 1...2,3,4,5
// console.log(arr0.splice(-3)); //extracted 1,2...3,4,5
// console.log(arr0); //1,2
// console.log(arr0.splice(2, 2, 'a')); //add a at possition -2 and extracte 2 elements from that position to right direction...extracted : 3,4
// console.log(arr0); //1,2,'a',5
// console.log(arr.splice(-1,-4)); //it is empty by some reason..

//Reverse ...
// console.log(arr.reverse());
// console.log();

//concat...merge array...

//'at'...
// console.log(arr.at(-1));

//FOR EACH loop..
// arr0.forEach(function (num, i, arr) {
//   if (num % 2 === 0) {
//     console.log(`${i + 1}: ${Math.abs(num)} is even`);
//   } else {
//     console.log(`${i + 1}: ${Math.abs(num)} is odd`);
//   }
//   console.log(arr);
// });

// const mp = new Map([
//   [1, 'het'],
//   [2, 'vb'],
//   [3, 'krish'],
// ]);

// const st = new Set(['het', 'vb', 'krish', 'het']);
// //For Each method for set and map...
// mp.forEach(function (key, value, map) {
//     console.log(`${key}:${value} \=\> ${map}`); //here map only return object map...
//     console.log(map);
// })
// st.forEach(function (key, _, map) {   //set has no value or key separated..
//     console.log(`${key} \=\> ${map}`);//here map only return object map...
//     console.log(map);
// })

//challenge - 1..
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const juliaDogs1 = [3, 5, 2, 12, 7];
// const juliaDogs2 = [9, 16, 6, 8, 3];

// const kateDogs1 = [4, 1, 15, 8, 3];
// const kateDogs2 = [10, 5, 6, 1, 4];

// const cheackDogs = function (dogsJulia, dogsKate) {
//     let onlyDogs = dogsJulia.splice(-2);
//     onlyDogs = dogsJulia.splice(0, 1);
//     console.log(dogsJulia);
//     console.log(dogsKate);

//     console.log('\n----julias\' data----');

//     dogsJulia.forEach(function(age,i){
//         if (age <= 3) {
//             console.log(`${i+1} dog's age is ${age} so that dog is not adult !`);
//         }
//         else {
//             console.log(`${i+1} dog's age is ${age} so that dog is adult !`);
//         }
//     })

//     console.log('\n----kates\' data----');
//     dogsKate.forEach(function(age,i){
//         if (age <= 3) {
//             console.log(`${i+1} dog's age is ${age} so that dog is not adult !`);
//         }
//         else {
//             console.log(`${i+1} dog's age is ${age} so that dog is adult !`);
//         }
//     })

// }
// cheackDogs(juliaDogs1, kateDogs1);
// cheackDogs(juliaDogs2, kateDogs2);

//API...

// let ob = Array();
// const x = function (params) {
//   console.log(params.get('eurtousd'));
// };

// function api(obj) {
//   const url =
//     'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '15963e6d4amsh46c094be6d69d40p1b1845jsna74dcd990851',
//       'X-RapidAPI-Host':
//         'currency-conversion-and-exchange-rates.p.rapidapi.com',
//     },
//   };

//   fetch(url, options)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       // var a = new Map();
//       // a.set("eurtousd", String(data.rates.USD)).set(
//       //   "eurtoinr",
//       //   String(data.rates.INR)
//       // );

//       // obj(a);
//     });
// }
// api(x);

//the MAP method ...
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arr0 = [11, -9, 3, 49, -5];

// arr0.forEach(function (num, i, arr) {
//   if (num % 2 === 0) {
//     console.log(`${i + 1}: ${Math.abs(num)} is even`);
//   } else {
//     console.log(`${i + 1}: ${Math.abs(num)} is odd`);
//   }
//   console.log(arr);
// });

// const map = arr0.map((mov, i) =>

//     `No. ${i + 1} ... ${mov > 0 ? 'deposit' : 'withdrawel'} - ${Math.abs(mov)}`
// )
// console.log(map);

// const INRtoUSd = 79;
// const map0 = arr0.map(mov => mov * INRtoUSd);
// //OR
// const emptyArr = [];
// for (const moves of arr0) emptyArr.push(INRtoUSd * moves);

// console.log(map0);
// console.log(emptyArr);

//the FILTeR method..

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arr0 = [11, -9, 3, 49, -5];

// const deposit = arr0.filter(dep => dep > 0); //11,3,49
// const deposit = arr0.map(dep => dep > 0); //true,false,true,true,false
// console.log(deposit);

// //OR..

// const forPush = [];
// for (const i of arr0) if (i > 0) forPush.push(i);
// console.log(forPush);

//the REDUCE method..

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arr0 = [51, -9, 63, 49, -5];

// const balance = arr0.reduce(function (acc, cur, arr, i) {
//     console.log(`acc : ${acc}, cur : ${cur}, , arr : ${arr} i : ${i}`);
//     return acc + cur;
// }, 0);
// console.log(balance);

// acc : 0, cur : 11, , arr : 0 i : 11,-9,3,49,-5
// acc : 11, cur : -9, , arr : 1 i : 11,-9,3,49,-5
// acc : 2, cur : 3, , arr : 2 i : 11,-9,3,49,-5
// acc : 5, cur : 49, , arr : 3 i : 11,-9,3,49,-5
// acc : 54, cur : -5, , arr : 4 i : 11,-9,3,49,-5
// 49

//find maximum..

// const maximum = arr0.reduce(function (acc, cur) {
//     console.log(`acc : ${acc} and cur : ${cur}`);
//     if (acc > cur || acc === cur) return acc;
//     else return cur;
// }, arr0[0]);

// console.log(maximum);

// acc : 51 and cur : 51
// acc : 51 and cur : -9
// acc : 51 and cur : 63
// acc : 63 and cur : 49
// acc : 63 and cur : -5
// 63

//Challenge - 2...

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const DATA_1 = [5, 2, 4, 1, 15, 8, 3];
// const DATA_2 = [16, 6, 10, 5, 6, 1, 4];

// const humanAgeOfData = function (data) {
//   const result = data.map((ele, i) => {
//     if (ele <= 2) return 2 * ele;
//     else return 16 + ele * 4;
//   });
//   return result;
// };

// let x2 = humanAgeOfData(DATA_2);
// let x1 = humanAgeOfData(DATA_1);

// const filterDogs = function (data) {
//   const filtered = data.filter((ele, i) => {
//     return ele >= 18;
//   });

//   const average = filtered.reduce(
//     (acc, cur, i, arr) => acc + cur / arr.length,
//     0
//   );

//   console.log('average : ', average);

//   return filtered;
// };

// console.log(('human age : ', humanAgeOfData(DATA_1)));
// console.log('filtered : ', filterDogs(x2));

//FindIndex ...
// const arr1 = [1, 2, 3, 1, 8, 6];

// const index = arr1.findIndex(ind => ind !== ind / 2);
// arr1.splice(index, 1);

// console.log(arr1);

//Some and Every..

// const s = arr1.some(i => i === 0);
// console.log(s);  //false

// const ev = arr1.every(i => i > 0);
// console.log(ev); //true

//Flat and FlatMap...
const acc1 = {
  owner: 'Het varasada 8',
  pin: '0849',
  intrestRate: 0.84, //%
  movements: [1000, -1399, -45, 1400, -849, 1499, 2000, -1279],
};

const acc2 = {
  owner: 'Nishchit malasna 9',
  pin: '9648',
  intrestRate: 1.2, //%
  movements: [899, 1100, -450, -789, -849, 1150, 350, -1099],
};

// const accounts = [acc1, acc2];

// console.log(accounts);

// const mov = accounts.map(mov => mov.movements).flat().reduce((acc,i) => acc + i); //total movement
// console.log(mov);

// //OR..
// const Mov = accounts.flatMap(mov => mov.movements).reduce((acc, i) => acc + i);
// console.log(Mov); //total movement

//Fill Method...
const x = new Array(5);
// x.fill(8); //x = 8,8,8,8,8
// console.log(x);
// x.fill(8, 2); //x = _, _, 8,8,8
// console.log(x);
// x.fill(8, 2, 4); //x = _, _, 8,8,_
// console.log(x);
// x.fill(8);
// console.log(x);
// x.fill(3, 2); //8,8,3,3,3
// console.log(x);
// x.fill(3,2,4);//_,_,3,3,_
// console.log(x);

//From method...
// const y = Array.from({ length: 5 }, () => 8);
// console.log(y); //8,8,8,8

// const y = Array.from({ length: 5 }, (cur, i) => {
//   cur = 8;
//   return `cur:${cur}, i:${i}`;
// });
// console.log(y); //cur : all 8 , i : 0,1,2,3,4

// window.addEventListener('click', function () {
//   let z = Array.from(document.querySelectorAll('.movements__value'));
//   console.log(z); //(2) [div.movements__value, div.movements__value]

//   console.log(z.map(el => el.textContent.replace('$', ''))); //['4 000', '-378']
//   //OR..
//   z = Array.from(document.querySelectorAll('.movements__value'), el =>
//     el.textContent.replace('$', '')
//   );
//   console.log(z); //['4 000', '-378']

//   //in this method we cant use separateely assign
//   let z0 = Array.from(
//     [...this.document.querySelectorAll('.movements__value')],
//     el => el.textContent.replace('$', '')
//   ); ////['4 000', '-378']

//   console.log(z0);
// });

//Sort...
//OG : [1000, -1399, -45, 1400, -849, 1499, 2000, -1279]
// const x0 = acc1.movements;
// const x1 = x0.sort();
// console.log(x1); //-1279, -1399, -45, -849, 1000, 1400, 1499, 2000]
// let x2 = x0.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// })
// console.log(x2); //[-1399, -1279, -849, -45, 1000, 1400, 1499, 2000]
// //OR
// x2 = x0.sort((a, b) => a - b);
// console.log(x2); //same result

// let x3 = x0.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   }
//   if (a > b) {
//     return -1;
//   }
// })
// console.log(x3);//[2000, 1499, 1400, 1000, -45, -849, -1279, -1399]
// //OR..
// x3 = x0.sort((a, b) =>  b - a);
// console.log(x3); //same result

///////////////////////////////////////
// Array Methods Practice

// // 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // 2.
// // const numDeposits1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// // Prefixed ++ oeprator
// let a = 10;
// console.log(++a);
// console.log(a);

// // 3.
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// // 4.
// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitzalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
//     .join(' ');

//   return capitzalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },

  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

console.log(dogs);
//1.
dogs.map(dog => dog.foodPortion = Number((dog.weight ** 0.75 * 28).toFixed(2)));

//2.
const sarahDogs = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(sarahDogs);

//3.
let ownersEatTooMuch = dogs.filter(dog => dog.foodPortion < dog.curFood)
console.log(ownersEatTooMuch);

let ownersEatTooLittle = dogs.filter(dog => dog.foodPortion > dog.curFood)
console.log(ownersEatTooMuch);

//4.
ownersEatTooMuch = dogs.filter(dog => dog.foodPortion < dog.curFood);
ownersEatTooMuch.forEach(function (dog, i) {
 console.log(`${dog.owners.join(' and ')}'s dog eat too much`)
})

ownersEatTooLittle = dogs.filter(dog => dog.foodPortion > dog.curFood);
ownersEatTooMuch.forEach(function (dog, i) {
 console.log(`${dog.owners.join(' and ')}'s dog eat too little`)
})

//5.
const target = dogs.some(dog => dog.foodPortion === dog.curFood)
console.log(target);


//6.
const target1 = dogs.every(dog => dog.curFood > dog.foodPortion)
console.log(target1);

//7.
const okayDog = dogs.every



//8.
const dogsSorted = dogs.slice().sort((a, b) => a.curFood - b.curFood);
console.log(dogsSorted);
