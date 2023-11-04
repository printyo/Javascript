'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Destructuring Arrays
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 0,
// });

//Spread Operator

// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr]; // ... to expand the array and adds it
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//Iterables
// const str = 'Print';
// const letters = [...str, ' ', 'Y.'];
// console.log(letters);

// const ingredients = [
// prompt("Let's make pasta! Ingredient 1?"),
// prompt('Ingredient 2?'),
// prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//Rest Pattern and Parameters (Destructuring)
// if ... comes before = then it is a rest (the rest other the object)
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(a, b, other);

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//Rest Pattern and Parameters (Functions)

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 2, 5, 4);

// const x = [231, 32, 4];
// add(...x);

// restaurant.orderPizza('mushroom', 'chicken', 'pineapples');

//Short Circuitign && ||

// (A || B) If A is falsy it will result in B, else result in A
// console.log('----OR----');

// console.log(3 || 'Print');
// console.log('' || 'Print');
// console.log(undefined || 0 || '' || 'Hello' || 23);

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 2;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 2;
// console.log(guest2);

// console.log('----AND----');
// (A && B) If A is false will output A cause it is false, else if both true it will be B
// console.log(0 && 'Print');
// console.log(7 && 'Print');

// console.log('Hello' && 5 && null && 'hi');

//Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('cheese', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'bacon');

//Nullish Coalescing Operator (??)
//Nullish : null and undefined (NOT 0 or '')
// restaurant.numGuest = 0;
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// Local Assignment Operator
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//Nullish Assignment Operator : Prevent incase numGuest was set to 0
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest1, rest2);

/*
Coding Challenge 1
Your tasks: 
1. Create one player array for each team (variables 'players1' and 'players2') 
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players 
3. Create an array 'allPlayers' containing all players of both teams (22 players) 
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' 
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2') 
6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in) 
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator. 
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3
// const allPLayers = [...players1, ...players2];
// console.log(allPLayers);

// //4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored!`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Muller', 'Lewandowski');
// printGoals(...game.scored);

// //7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// //For of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// // console.log(...menu.entries());

// //Optional Chaining (?)

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // WITH Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Looping Objects

// //Properties Names
// const properties = Object.keys(restaurant.openingHours);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //properties value
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// //entire object
// const entries = Object.entries(restaurant.openingHours);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

//Coding Challenge 2
/*
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski") 
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember) 
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉 
*/

//1
for (const [n, player] of game.scored.entries()) {
  console.log(`Goal ${n + 1}: ${player}`);
}

//2
const odds = Object.values(game.odds);
let total = 0;
for (const i of odds) total += i;
const average = total / odds.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
