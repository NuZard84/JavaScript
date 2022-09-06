'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);  // 1,2,3

let [frst, , secd] = restaurant.categories;
console.log(frst,secd); //italian , vegetarian

//switching values...
const x = frst;
frst = secd;
secd = x;
console.log(frst,secd); //switched by normal logic

[frst, secd] = [secd, frst];
console.log(frst, secd); //switched by destructing

//receive 2 value from function...
let [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//nested destructing...
const nested = [1, 2, [3, 4]];
const [i, , j] = nested;
console.log(i, j); //1 , [3,4]
const [p, , [q, r]] = nested;
console.log(p, q, r); //1,3,4

//defualt value..
const [l = 1, m = 0, n = 1] = [84, 48];
console.log(l,m,n);


