"use strict";

const weekdays = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

const openHours = {
  [weekdays[3]]: {
    //it is work as thursday...
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhancedobject literal
  openHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = "9:00",
    adress,
    nam,
    mainIndex,
    starterIndex,
  }) {
    console.log(
      `${nam} ,your order ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]}is recieved at ${adress} on precisely ${time}. Thank You ! `
    );
  },
  //it is also accesable...
  orderExtra(ex1, ex2, ex3) {
    console.log(`here your extra item with dish; ${ex1},${ex2},${ex3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

//making Map..
const rest = new Map();
rest.set("name", "subh hotel"); //add key and value...
rest
  .set("menu", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are opened")
  .set(false, "we are closed"); //this is also way of add key and element by chaining

console.log(rest);
console.log(rest.set("food", ["pizza", "dal-bhat", "dal-fry"])); //it will not give only this key and value but all included data will be given in console...

console.log(rest.get("name")); //subh hotel...
const time = 10;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//array as map key...
const arr = [1, 2];
rest.set(arr, "test");
rest.set([4.8], "test0");
console.log(rest.get(arr)); //test..
// console.log(rest.get([4,8])); //it can be access becuase of both key is different place in heap it can be as key...
console.log(rest.get(4)); //it also undefine

//key ,value, entry...
// const k = Object.keys(openHours);
// console.log(k);
// for (const ky of k) {
//   console.log(ky);  //thur,fri...
// }
// const v = Object.values(openHours);
// console.log(v); //open =... , close=...

// const ent = Object.entries(openHours);
// console.log(ent);
// for (const [key, { open, close }] of ent) {
//   console.log(`${key},${open},${close}`);  //thur,11,12
// }

//OPTIONAL CHAINING...

// console.log(restaurant.openHours.mon?.open); //undefine
// console.log(restaurant.openHours?.mon?.open); //undefine
// console.log(restaurant.openHours.sat?.open); // 0

// //alternet by if/else condition...
// if (restaurant.openHours && restaurant.openHours.mon)
//   console.log(restaurant.openHours.mon.open);

// const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

// for (const day of days) {
//   console.log(day);
//   const opn = restaurant.openHours[day]?.open ?? "not at all"; //nullis operater
//   console.log(`on ${day} is hotel open for ${opn}`);
// }

// //method..
// console.log(restaurant.order?.(0,1) ?? 'method does not exist');
// console.log(restaurant.orderRisato?.(0, 1) ?? 'method does not exist'); //method does not exist

// //array..
// const user = [
//   {
//     name: "heett",
//     mail: "patel@het.io",
//   },
// ];
// const users = []
// console.log(user[0]?.name ?? 'user arraya empty');
// console.log(users[0]?.name ?? 'user arraya empty'); //user array empty...
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);

// // for (const i of menu) console.log(i);

// // for (const [i, el] of menu.entries()) {
// //   console.log(`${i + 1} : ${el}`)
// // }

// console.log(menu.entries);
// console.log(menu.entries());

// // restaurant.orderPizza('paneer - onion', 'oragano', 'tomato', 'catchup');
// // //spreading with rest....

// // const [pizza, , risotto, ...other] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(pizza,risotto,other);

// // //objects...

// // const { sat, ...weekdays } = restaurant.openHours;
// // console.log(sat, weekdays);

// // //function...

// // function display(...num) {
// //   console.log(num);
// // }

// // display(1, 2, 21, 2);
// // display(14, 19, 45, 3, 88, 78);
// // const n = [84, 84, 48, 48];
// // display(...n);

// // const extra = [prompt('1st item'), prompt('2nd item'), prompt('3rd item')];

// // restaurant.orderExtra(...extra);
// //Iterables : arrays, strings, maps, sets, NOT objects...

// /*restaurant.orderDelivery({
//   time: '12:24',
//   adress: 'gandhinagar,skps. sct : 12',
//   nam: 'hett',
//   mainIndex: 1,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({

//     adress: 'gandhinagar,skps. sct : 12',
//     nam: 'hett',
//     mainIndex: 1,
//     starterIndex: 2,
// }); */

// // const arr = [1, 2, 3];
// // const [a, b, c] = arr;
// // console.log(a, b, c);  // 1,2,3

// // let [frst, , secd] = restaurant.categories;
// // console.log(frst,secd); //italian , vegetarian

// // //switching values...
// // const x = frst;
// // frst = secd;
// // secd = x;
// // console.log(frst,secd); //switched by normal logic

// // [frst, secd] = [secd, frst];
// // console.log(frst, secd); //switched by destructing

// // //receive 2 value from function...
// // let [starter, main] = restaurant.order(2, 0);
// // console.log(starter, main);

// // //nested destructing...
// // const nested = [1, 2, [3, 4]];
// // const [i, , j] = nested;
// // console.log(i, j); //1 , [3,4]
// // const [p, , [q, r]] = nested;
// // console.log(p, q, r); //1,3,4

// // //defualt value..
// // const [l = 1, m = 0 , n = 1] = [84, 48];
// // console.log(l,m,n);

// //mutaning value of object destructer...
// // let ax = 88;
// // let bx = 44;
// // const obj = { ax:1, bx:2, cx:3};
// // ({ ax,bx } = obj);
// // console.log(ax, bx);

// //defualt value of destructer objexct...
// // const { menu = [], starterMenu: starter = [] } = restaurant;
// // console.log(menu, starter);

// //operate nested object...

// // const {
// //   fri: { open, close }
// // } = openHours;
// // console.log(open, close);

// //spread operateer...
// // const arr = [3, 4, 5];
// // const newArr = [1, 2, ...arr];
// // console.log(newArr);

// //objects with spreading...
// // const newRestaurant = { founder: 'unknown', ...restaurant };  //adding new elements in object...
// // const restaurantCoppy = { ...restaurant };
// // restaurantCoppy.name = 'lila hotel';
// // console.log(restaurantCoppy.name); //'lila hotel'...unlikely, here can not change old object elements value beacuse of use of spreading...
// // console.log(restaurant.name); //'Classico Italiano'

// // AND - OR...

// //OR = when the 1st value is truthy then it will be answer, instead it give best truthy value..
// //AND = when the 1st value is falsy then it will be answer, instead it gives least truthy value

// console.log(8 || 'hett');  //8
// console.log('' || 'hett');  //hett
// console.log(1 || 0);       //1
// console.log(undefined || null); //null

// console.log(0 && 1);    //0
// console.log('hett' && '');  //''
// console.log(null && undefined); //null
// console.log('hett' && 8);   //8 ; truthy && truthy ,so it give last value...
// console.log(undefined && null);   //undefined

// //nullish = null and undefined (not 0 & '');
// const add = 0;
// console.log(add || 8);
// console.log(add ?? 8);  //it consider value of add as a value not an falsy value..
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* CHALLENGE - 1...
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')✔
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players✔
3. Create an array 'allPlayers' containing all players of both teams (22 players)✔
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'✔
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')✔ 
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)✔
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/
//1.
// const players1 = [game.team1, ...game.players[0]];
// const players2 = [game.team2, ...game.players[1]];
//OR...
// const [players1, players2] = game.players;

// //2.
// // const gk1 = game.team1;
// // const gk2 = game.team2;
// //OR
// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;

// // const fieldPlayers1 = [...game.players[0]];
// // const fieldPlayers2 = [...game.players[1]];

// //3.
// // const allPlayers = [game.team1, ...game.players[0], game.team2, ...game.players[1]];
// //OR
// const allPlayers = [...players1, ...players2];

// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// //5.
// // const [team1, draw, team2] = [game.odds.team1, game.odds.x, game.odds.team2];
// //OR
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// //6.
// function scorer(...scorer) {
//   console.log(String(scorer));
//   console.log(`${scorer.length} goals were scored...`);
// }
// scorer(...game.scored);
// scorer('Davies', 'Muller', 'Lewandowski','Kimmich',...game.scored);

// //7.
// team1 < team2 && console.log('team 1 is more likely to win..');

/* CHALLENGE - 2...
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

//1.
// for (const [goal,gk] of game.scored.entries()) {
//   console.log(`gaoal ${goal + 1} : ${gk}`);
// }

// //2.
// // const avg = team1 + draw + team2 / 3;
// // console.log(avg);
// //OR...
// let avg = 0;
// for (const odd of Object.values(game.odds)) {
//   avg += odd;
// }
// avg /= Object.values(game.odds).length;
// console.log(avg);

// //3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const str = team === 'x' ? 'draw' : `victory ${game.team1}`
//   console.log(`odd ${str} ${odd}`);
// }

//Sets....it has no index and it gives ever unique elements and there is no way get out data from it and its order is not not relavent...
// const orderset = new Set(["hett", "vb", "krish", "sarang"]);
// const orderset2 = ["hett", "vb", "krish"];
// console.log(orderset);
// console.log(...orderset); //strings
// console.log(...new Set(orderset2));
