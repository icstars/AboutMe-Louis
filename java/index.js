// VARIABLES
// let, var, const
// two variables can't have the same name

let name = "COLLIN";

name = "Vince";

console.log(name); // Print to the console

console.log(1 + 1);

// Double/single quotations or back ticks (under your esc on your laptop) will create a string
console.log(`hello`);

console.log("Hello");

console.log("Hello World!");

const name1 = "pizza";

console.log(name1);

// Two ways of adding a space
console.log(name1 + " " + "pineapple");
console.log(name1, "pineapple");

// adding two strings; concatenation
const name2 = "pizza";
const topping = "pineapple";
console.log(name2, topping);

// template literal, use back tick
console.log(`${name2} ${topping}`);

// string + integer = string
console.log("string" + 1);

// integer
console.log(typeof "1"); // will show string
console.log(typeof 1); // will show number
console.log(32 + 100); // will add the numbers to 132

// booleans
let topping1;
console.log(topping1);
console.log(Boolean(topping)); // shows if its false or true for value
// false since it has no value
let num;
console.log(Boolean(num));
let num1 = undefined;
console.log(Boolean(num1)); // num1 is undefined meaning it'll come up as false
// false, undefined, null, 0 will come up as false

// Prompt to page
// let prompt1 = prompt("What is your name?");
// let whereDidHeGo = prompt("Where did he go?");
// console.log(prompt1);
// console.log(`${prompt1} went to the ${whereDidHeGo}`); // string template
// alert(`${prompt1} went to the ${whereDidHeGo}`); // pops up an alert on the top of your browser of what we put down

// displays a personalized message
// hi my name is (), I am (h) I like to (hobby)

let prompt2 = prompt("What is your name?");
let prompt3 = prompt("How old are you?");
let prompt4 = prompt("What is your hobby?");
console.log(
  `Hi my name is ${prompt2}, I am ${prompt3}, and I like playing ${prompt4}.`
);
alert(
  `Hi my name is ${prompt2}, I am ${prompt3}, and I like playing ${prompt4}.`
);
