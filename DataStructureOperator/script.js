"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openHours: {
    thu: {
      open: 12,
      close: 12,
    },

    fri: {
      open: 11,
      close: 13,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

    orderDelivery: function ({ time = '9:00', adress, nam, mainIndex, starterIndex }) {
    console.log(
      `${nam} ,your order ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]}is recieved at ${adress} on precisely ${time}. Thank You ! `
    );
      
    },
    
    orderExtra: function ( ex1, ex2, ex3 ) {
        console.log(`here your extra item with dish; ${ex1},${ex2},${ex3}`);
    }
};

// const extra = [prompt('1st item'), prompt('2nd item'), prompt('3rd item')];

// restaurant.orderExtra(...extra);
//Iterables : arrays, strings, maps, sets, NOT objects...

/*restaurant.orderDelivery({
  time: '12:24',
  adress: 'gandhinagar,skps. sct : 12',
  nam: 'hett',
  mainIndex: 1,
  starterIndex: 2,
});

restaurant.orderDelivery({
    
    adress: 'gandhinagar,skps. sct : 12',
    nam: 'hett',
    mainIndex: 1,
    starterIndex: 2,
}); */
  

// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c);  // 1,2,3

// let [frst, , secd] = restaurant.categories;
// console.log(frst,secd); //italian , vegetarian

// //switching values...
// const x = frst;
// frst = secd;
// secd = x;
// console.log(frst,secd); //switched by normal logic

// [frst, secd] = [secd, frst];
// console.log(frst, secd); //switched by destructing

// //receive 2 value from function...
// let [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// //nested destructing...
// const nested = [1, 2, [3, 4]];
// const [i, , j] = nested;
// console.log(i, j); //1 , [3,4]
// const [p, , [q, r]] = nested;
// console.log(p, q, r); //1,3,4

// //defualt value..
// const [l = 1, m = 0 , n = 1] = [84, 48];
// console.log(l,m,n);

//mutaning value of object destructer...
// let ax = 88;
// let bx = 44;
// const obj = { ax:1, bx:2, cx:3};
// ({ ax,bx } = obj);
// console.log(ax, bx);

//defualt value of destructer objexct...
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

//operate nested object...

// const {
//   fri: { open, close }
// } = openHours;
// console.log(open, close);

//spread operateer...
// const arr = [3, 4, 5];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

//objects with spreading...
const newRestaurant = { founder: 'unknown', ...restaurant };  //adding new elements in object...
const restaurantCoppy = { ...restaurant };
restaurantCoppy.name = 'lila hotel';
console.log(restaurantCoppy.name); //'lila hotel'...unlikely, here can not change old object elements value beacuse of use of spreading...
console.log(restaurant.name); //'Classico Italiano'