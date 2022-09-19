'using strict';

const arr = ['a', 'b', 'c', 'd', 'e'];
const arr0 = [1, 2, 3, 4, 5];
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

//
