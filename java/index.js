// // VARIABLES
// // let, var, const
// // two variables can't have the same name

// let name = "COLLIN";

// name = "Vince";

// console.log(name); // Print to the console

// console.log(1 + 1);

// // Double/single quotations or back ticks (under your esc on your laptop) will create a string
// console.log(`hello`);

// console.log("Hello");

// console.log("Hello World!");

// const name1 = "pizza";

// console.log(name1);

// // Two ways of adding a space
// console.log(name1 + " " + "pineapple");
// console.log(name1, "pineapple");

// // adding two strings; concatenation
// const name2 = "pizza";
// const topping = "pineapple";
// console.log(name2, topping);

// // template literal, use back tick
// console.log(`${name2} ${topping}`);

// // string + integer = string
// console.log("string" + 1);

// // integer
// console.log(typeof "1"); // will show string
// console.log(typeof 1); // will show number
// console.log(32 + 100); // will add the numbers to 132

// // booleans
// let topping1;
// console.log(topping1);
// console.log(Boolean(topping)); // shows if its false or true for value
// // false since it has no value
// let num;
// console.log(Boolean(num));
// let num1 = undefined;
// console.log(Boolean(num1)); // num1 is undefined meaning it'll come up as false
// false, undefined, null, 0 will come up as false

// Prompt to page
// let prompt1 = prompt("What is your name?");
// let whereDidHeGo = prompt("Where did he go?");
// console.log(prompt1);
// console.log(`${prompt1} went to the ${whereDidHeGo}`); // string template
// alert(`${prompt1} went to the ${whereDidHeGo}`); // pops up an alert on the top of your browser of what we put down

// displays a personalized message
// hi my name is (), I am (h) I like to (hobby)

// let prompt2 = prompt("What is your name?");
// let prompt3 = prompt("How old are you?");
// let prompt4 = prompt("What is your hobby?");
// console.log(
//   `Hi my name is ${prompt2}, I am ${prompt3}, and I like playing ${prompt4}.`
// );
// alert(
//   `Hi my name is ${prompt2}, I am ${prompt3}, and I like playing ${prompt4}.`
// );

// CONDITIONALS ////////////////////////////***THIS IS WHERE CONDITIONAL STARTS */*********************************** */
// truthy values: has a value in it. If it doesn't have a value then it's false, null, undefined, NaN, 0
// let x = 1;
// console.log(Boolean(x));

// conditional operators **********************************************
// ===; 1 === 1 is true
// ==, loose equals; 1 == '1' is true
// loose equals; checks if value is the same; regardless of datatype
// 1 !== 2; true
// <, >, !==(NOT EQUALS), <=, >=;
// More than or equal to
// 1 <= 1; true
// 1 <= 0; false
// 'collin === 'collin'; is true
// 'collin === 'Collin'; is false
// if statement
// if (this is true) {Then run this}
// if ("collin" === "collin") {
//   console.log("Hello world");
// }
// let x = 0; // =; assignment operator; one equal sign only assigns a variable
// if (x === 0) { // ===; strict equals
//   console.log("Hello world"); // will show Hello World
// }
// if (x == 0) { // ==; loose equals
//   console.log("Hello world"); // will show Hello World

// LOGICAL OPERATOR***********************************************************************************
// || && ??
// || OR
// && AND
// ?? NULISH
// LOGICAL OPERATOR***********************************************************************************

// let x = 0;
// let y = 0;
// if (x === 0 && y === 0) { //does x equal 0 and y equal 0; yes, it's true; it'll produce "Hello World"
//   console.log("Hello world");
// }

// let questComplete = false
// let questComplete2 = false
// let slimesDefeated = 0
// if (slimesDefeated === 10) {  //slimesDefeated is 0, so this is not true and won't run the code in the middle
//   questComplete = true  // questComplete will stay false
// }

// OR OPERATOR**************************
// let i = 0
// let k = 1
// if (i === 1 || k === 1){  // condition is true because one of the conditions is true; which is k === 1
//   console.log('hello world')  // it will produce 'hello world'
// }
// if this happens or this

//ELSE; if the statement is false then it'll run the default
// let v = 10;
// let u = 8;
// if (v === 9) {
//   console.log("hello world");
// } else {
//   console.log("goodbye world");
// }

// let login = false;
// if (login === true) {
//   // redirect to page
// } else {
//   alert("User doesn't exist");
// }

// else if
// * will run if conditions before it are false and specifies a new condition
// let q = 0;
// if (q === 1) {
//   console.log("hello world");
// } else if (q === 0) {
//   console.log("goodbye world");
// } else {
//   console.log("something");
// }

// let userName = prompt("Enter your username:");
// if (userName === "louisher") {
//   alert("Logged in!");
// } else if (userName === "lucy321" || userName === "lubie") {
//   alert("Logged in!");
// } else {
//   alert("No account found!");
// }

let randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);
let arr = ["liv", "kamar", "derrick", "jimmy"];
console.log(arr[randomNumber]);
if (arr[randomNumber] === arr[0]) {
  console.log("Hello world!");
} else if (arr[randomNumber] === arr[1]) {
  console.log("Goodbye world!");
} else if (arr[randomNumber] === arr[2]) {
  console.log("Something");
} else if (arr[randomNumber] === arr[3]) {
  console.log("Anyone");
}

// Challenge: Guess the Number
// The program generates a random number between 1 and 10.
// The user is prompted to guess the number.
// If the user's guess matches the generated number, an alert is shown with a success message.
// If the user's guess is incorrect, an alert is shown with a failure message.

let randomNumber1 = Math.ceil(Math.random() * 10);
console.log(randomNumber1);
let prompt1 = prompt("Guess the number");
if (prompt1 == randomNumber1) {
  alert("You are correct!");
} else {
  alert("You are incorrect!");
}
