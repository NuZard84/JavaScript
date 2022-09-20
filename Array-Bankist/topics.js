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
