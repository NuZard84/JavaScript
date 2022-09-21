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

// let url = 'https://api.apilayer.com/currency_data/live?apikey=BuLIFNvO559TP45qacw6vYLgqoEOKkLO';
// fetch(url)
//     .then((Response) => {
//         const content = Response.json();
//         return content;
//     })
//     .then((data) => {
//         console.log(data);
//         let ind = data.quotes.USDINR;
//         console.log(ind);

//     })

//The MAP mathod...
