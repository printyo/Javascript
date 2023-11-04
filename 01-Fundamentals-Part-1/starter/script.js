
// let js = "amazing";
// console.log(40 * 2 + 9);

// Variable Name
// console.log("Jonas");
// console.log(69);

// let firstName = "Print";
// console.log(firstName);
// console.log(firstName);
//console.log(firstName);
/*
// Variable Name Assignment
let country = "Thailand";
let continent = "Asia";
let population = 13;
console.log(country);
console.log(continent);
console.log(population);

// Data Types Assignment
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof langauge);

// let, const and var Assignment
language = "Thai";
const pi = 3.14159265358979323846;









// Basic Operation
//Math Operator
// + - / *
// ** = to the power of ^

//Assignment Operator
// += = add value to the variable eg x+=10 , x = x + 10 (works with *= /=)
// ++ = add 1 to the variable
// -- = minus 1 to the variable

//Comparison Operator
// > greater than
// < less than
// >= , <=

//Basic Operation Assignment
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);
console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}!`)
if (population > 33) {
    console.log(`${country}'s population is above average!`)
} else {
    console.log(`${country}'s population is ${33 - population} million below average!`)
}

*/







// String Template Literals
// const firstName = "Print";
// const job = "student";
// const birthYear = 2003;
// const year = 2021;

// const print = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(print);

// const age = 19;

// if (age >= 18) {
//     console.log("Sarah can start driving exam");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }







// type conversion
// const inputYear = "2003";
// console.log(Number(inputYear) + 18);
// const firstNum = 20;
// console.log(String(firstNum));









// //  equality == / ===
// const age = "18";
// if (age === 18) {
//     console.log("You just became an adult! (strict)");
// }
// if (age == 18) {
//     console.log("You just became an adult! (loose)");
// }
// let favourite = prompt("What's your favourite number?");
// favourite = Number(favourite);
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 69) {
//     console.log("69 is an amazing number");
// } else if (favourite === 420) {
//     console.log("420 is a coool number");
// } else {
//     console.log("This number is also cool");
// }
// if (favourite !== 69) {
//     console.log("dont you like 69?");
// }


// const hasLicense = true;
// const hasGoodVision = true;

// console.log(hasLicense && hasGoodVision); // && = AND
// console.log(hasLicense || hasGoodVision); // || = OR
// console.log(!hasLicense); // ! = NOT

// const shouldDrive = hasLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log("He is able to drive");
// } else {
//     console.log("Someone else should drive")
// }

// const isTired = false;

// const shouldDrive = hasLicense && hasGoodVision && !isTired;
// if (shouldDrive) {
//     console.log("He is able to drive");
// } else {
//     console.log("Someone else should drive")
// }







//Switch statement

// const day = "sunday";

// switch (day) {
//     case "monday": // this is a colon , similar to day === "monday"
//         console.log("Go exercise");
//         break; // need this break too!
//     case "tuesday":
//         console.log("Prepare dinner");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Write code examples");
//         break;
//     case "friday":
//         console.log("Play games");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Read books");
//         break;
//     default: // same as else
//         console.log("not a valid day!")
// }

// if (day === "monday") {
//     console.log("Go exercise");
// } else if (day === "tuesday") {
//     console.log("Prepare dinner");
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("Write code examples");
// } else if (day === "friday") {
//     console.log("Play games");
// } else if (day === "saturday" || day === "sunday") {
//     console.log("Read books");
// } else {
//     console.log("Not a valid day!");
// }


// Switch assignment
// const langauge = "thai";

// switch (langauge) {
//     case "mandarin":
//     case "chinese":
//         console.log("MOST number of native speakers!");
//         break;
//     case "spanish":
//         console.log("2nd place in number of native speakers");
//         break;
//     case "english":
//         console.log("3rd place");
//         break;
//     case "hindi":
//         console.log("Number 4");
//         break;
//     case "arabic":
//         console.log("5th most spoken language");
//         break;
//     default:
//         console.log("Great language too :D")
// }






// Conditional Operator

// const age = 14;
// age >= 18 ? console.log("I like to drink alcohol 🥃") : console.log("i like to drink water");
// condition ? if part : else part

// const drink = age >= 18 ? 'alcohol' : "water";
// console.log(drink)

// let drink2;
// if (age >= 18) {
//     drink2 = "alcohol";
// } else {
//     drink2 = "water";
// }
// console.log(drink2)

// console.log(`I like to drink ${age >= 18 ? 'alcohol' : "water"}`)

//takes less line for conditional operator than if statement






















//////////////////////////////////////////////////////////
// Coding Challenge 1 & 2
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
// Data 1

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// Data 2
/*
const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;
*/
/*
let bmiMark, bmiJohn, markHigherBMI;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

//Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark})`);
}
*/

///////////////////////////////////////////////////////////////////////////////
//Coding Challenge 3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106





// const dolphineScore1 = 97;
// const dolphineScore2 = 112;
// const dolphineScore3 = 101;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 106;

// const averageDolphine = 10 //(dolphineScore1 + dolphineScore2 + dolphineScore3) / 3
// const averageKoalas = 10 //(koalasScore1 + koalasScore2 + koalasScore3) / 3

// console.log(averageDolphine, averageKoalas);

// if (averageDolphine > averageKoalas && averageDolphine >== 100) {
//     console.log(`Dolphines won the trophy with an average score of ${averageDolphine}, whilst Koalas got ${averageKoalas}!`)
// } else if (averageKoalas === averageDolphine && averageKoalas >= 100 && averageDolphine >= 100) {
//     console.log(`It is a draw with both teams with an average score of ${averageDolphine}!!`)
// } else if (averageKoalas > averageDolphine && averageKoalas >= 100) {
//     console.log(`Koalas won the trophy with an average score of ${averageKoalas}, whilst Dolphines got ${averageDolphine}!`)
// }

// const hasDolphinePass = averageDolphine >= 100;
// const hasKoalasPass = averageKoalas >= 100;
// const dolphineMoreThanKoalas = averageDolphine > averageKoalas;
// const isScoreEqual = averageKoalas === averageDolphine;

// if (hasDolphinePass && hasKoalasPass) {
//     if (isScoreEqual) {
//         console.log(`It is a draw with both teams with an average score of ${averageDolphine}!!`)
//     } else if (dolphineMoreThanKoalas) {
//         console.log(`Dolphines won the trophy with an average score of ${averageDolphine}, whilst Koalas got ${averageKoalas}!`)
//     } else {
//         console.log(`Koalas won the trophy with an average score of ${averageKoalas}, whilst Dolphines got ${averageDolphine}!`)
//     }
// } else if (hasKoalasPass || hasDolphinePass) {
//     if (isScoreEqual) {
//         console.log(`It is a draw with both teams with an average score of ${averageDolphine}!!`)
//     } if (dolphineMoreThanKoalas) {
//         console.log(`Dolphines won the trophy with an average score of ${averageDolphine}, whilst Koalas got ${averageKoalas}!`)
//     } else {
//         console.log(`Koalas won the trophy with an average score of ${averageKoalas}, whilst Dolphines got ${averageDolphine}!`)
//     }
// } else {
//     console.log("Both teams has failed the competition!")
// }


//////////////////////////////////////////////////////////////
//Coding challenge 4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:

// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

// Test data:
// Data 1: Test for bill values 275, 40 and 430

let bill = Number(prompt("Please enter bill value : "))

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`)