"use strict"; //needs to be on the first line (avoid accidental errors)

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

//const interface = "hello";

////////////////////////////////////////////////////
//functions
// function logger() {
//     console.log("My name is Print");
// }
// logger(); // "calling a function"

// function blender(apples, oranges) {
// console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = blender(4, 0);
// console.log(appleJuice);

// const appleOrangeJuice = blender(3, 5);
// console.log(appleOrangeJuice)

//function declaration
// function calcAge1(birthYear) {
//     return 2021 - birthYear;
// }

// let age1 = calcAge1(2003);
// console.log(age1)

// function expression
// const calcAge2 = function (birthYear) {
//     return 2021 - birthYear;
// }

// let age2 = calcAge2(2003);
// console.log(age1, age2)

// Arrow function
// const calcAge3 = birthYear => 2021 - birthYear;
// console.log(calcAge3(2003))

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years!`;
// }

// console.log(yearsUntilRetirement(2003, "Print"))

// function cutFruit(fruit) {
//     return fruit * 4;
// }

// function blender(apples, oranges) {
//     const applePieces = cutFruit(apples);
//     const orangePieces = cutFruit(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(blender(2, 3));

// Arrays
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends)

// const years = new Array(1991, 1999, 2003, 2005);
// console.log(years)

// console.log(friends[0]);
// console.log(years.length);

// friends[2] = "Jay";
// console.log(friends)

// const firstName = "Print";
// const printt = [firstName, "Yongsuphamongkol", 2021 - 2003, friends[1]];
// console.log(printt)

// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }
// const birthYear = [calcAge(years[0]), calcAge(years[years.length - 1])]
// console.log(birthYear)

//Array Operation
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay"); //Add elements at the end, gives off value (length)
// console.log(friends)
// console.log(newLength)

// friends.unshift("John"); //Add element at the front
// console.log(friends)

// const popped = friends.pop(); // Remove element at the end, saves removed element
// console.log(friends);
// console.log(popped);

// friends.shift(); //Remove element at the front
// console.log(friends);

// console.log(friends.indexOf("Steven")); // find position of element in array

// console.log(friends.includes("Bob")); // checks whether element is in array

//Objects
// const printArray = [
//     "Print",
//     "Yongsuphamongkol",
//     2021 - 2003,
//     "student",
//     ["friend1", "friend2", "friend3"]
// ];

// const printt = {
//     firstName: "Print",
//     lastName: "Yongsuphamongkol",
//     age: 2021 - 2003,
//     job: "student",
//     friends: ["friend1", "friend2", "friend3"]
// };

// console.log(printt)

// console.log(printt.lastName); // DOT notation
// console.log(printt["lastName"]); //Bracket notation

// const nameKey = "Name";
// console.log(printt["first" + nameKey]);

// const answer = prompt("What do you want to know about Print? Between firstName, lastName, age, job, friends");

// if (printt[answer]) {
//     console.log(printt[answer]);
// } else {
//     console.log("Wrong answer, Between firstName, lastName, age, job, friends")
// }

// printt.location = "Thailand";
// print["instagram"] = "print.y_"
// console.log(printt)

// console.log(`${printt.firstName} has ${printt["friends"].length} friends, and his best friend is called ${printt.friends[0]}`)

// const printt = {
//     firstName: "Print",
//     lastName: "Yongsuphamongkol",
//     birthYear: 2003,
//     job: "student",
//     friends: ["friend1", "friend2", "friend3"],
//     hasDriversLicense: true,

//     //Version 1 not ideal needs input
//     // calcAge: function (birthYear) {
//     //     return 2021 - birthYear;
//     // }
//     //Version 2 good for using little amount
//     // calcAge: function () {
//     // console.log(this);
//     // return 2021 - this.birthYear;
//     // }
//Version 3 store in a variable
//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
//     }
// };

// console.log(printt.age);
// console.log(printt.calcAge());
// console.log(printt.age);

// console.log(printt.getSummary());

//Iteration

//for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Task ${rep}`);
// }

/*
const printArray = [
    "Print",
    "Yong",
    2021 - 2003,
    "student",
    ["A", "B", "C"]
];

const types = [];

for (let i = 0; i < printArray.length; i++) {
    console.log(printArray[i], typeof printArray[i]);

    //continue skips the current iteration if conditions are met
    if (typeof printArray[i] !== 'string') continue;

    //types[i] = typeof printArray[i];
    types.push(typeof printArray[i]);
}
console.log(types);


for (let i = 0; i < printArray.length; i++) {
    console.log(printArray[i], typeof printArray[i]);

    //continue skips the current iteration if conditions are met
    if (typeof printArray[i] === 'number') break;
}
*/

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) { console.log("You ricked rolled a 6"); }
// }

//////////////////////////////////////////////////////////////////////////
//Coding Challenge 1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated(so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.     Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5. Ignore draws this time

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// function calcAverage(first, second, third) {
//     return (first + second + third) / 3;
// }

// const averageDolp = calcAverage(85, 54, 41);
// const averageKoal = calcAverage(23, 34, 27);
// console.log(averageDolp, averageKoal);

// function checkWinner(dolphin, koalas) {
//     if (dolphin >= 2 * koalas) {
//         console.log(`Dolphin win (${dolphin} vs. ${koalas})`);
//     } else if (koalas >= 2 * dolphin) {
//         console.log(`Koalas win (${koalas} vs. ${dolphin})`);
//     } else {
//         console.log(`No one wins`)
//     }
// }

// checkWinner(averageDolp, averageKoal);

//Coding Challenge 2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

// const calcTip = function (price) {
//     if (price >= 50 && price <= 300) {
//         return price * 0.15;
//     } else {
//         return price * 0.2;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);

// Challenge 3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and height(Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI(the same method on both objects).Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.

/*
const markMiller = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};


const johnSmith = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


if (markMiller.calcBMI() > johnSmith.calcBMI()) {
    console.log(`Mark's BMI (${markMiller.bmi}) is higher than John's (${johnSmith.bmi})`);
} else if (markMiller.calcBMI() < johnSmith.calcBMI()) {
    console.log(`John's BMI (${johnSmith.bmi}) is higher than Mark's (${markMiller.bmi})`);
} else {
    console.log(`Mark and John have the same BMI (${markMiller.bmi})`)
}
*/

//Challenge 4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (price) {
  if (price >= 50 && price <= 300) {
    return price * 0.15;
  } else {
    return price * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum = arr[j] + sum;
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));

// console.log(tips)
// console.log(totals)
