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
//       var a = new Map();
//       a.set("eurtousd", String(data.rates.USD)).set(
//         "eurtoinr",
//         String(data.rates.INR)
//       );

//       obj(a);
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

const DATA_1 = [5, 2, 4, 1, 15, 8, 3];
const DATA_2 = [16, 6, 10, 5, 6, 1, 4];

const humanAgeOfData = function (data) {
  const result = data.map((ele, i) => {
    if (ele <= 2) return 2 * ele;
    else return 16 + ele * 4;
  });
  return result;
};

let x2 = humanAgeOfData(DATA_2);
let x1 = humanAgeOfData(DATA_1);

const filterDogs = function (data) {
  const filtered = data.filter((ele, i) => {
    return ele >= 18;
  });

  const average = filtered.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );

  console.log('average : ', average);

  return filtered;
};

console.log(('human age : ', humanAgeOfData(DATA_1)));
console.log('filtered : ', filterDogs(x2));
