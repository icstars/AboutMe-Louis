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

// let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);
// let arr = ["liv", "kamar", "derrick", "jimmy"];
// console.log(arr[randomNumber]);
// if (arr[randomNumber] === arr[0]) {
//   console.log("Hello world!");
// } else if (arr[randomNumber] === arr[1]) {
//   console.log("Goodbye world!");
// } else if (arr[randomNumber] === arr[2]) {
//   console.log("Something");
// } else if (arr[randomNumber] === arr[3]) {
//   console.log("Anyone");
// }

// // Challenge: Guess the Number
// // The program generates a random number between 1 and 10.
// // The user is prompted to guess the number.
// // If the user's guess matches the generated number, an alert is shown with a success message.
// // If the user's guess is incorrect, an alert is shown with a failure message.

// let randomNumber1 = Math.ceil(Math.random() * 10);
// console.log(randomNumber1);
// let prompt1 = prompt("Guess the number");
// if (prompt1 == randomNumber1) {
//   alert("You are correct!");
// } else {
//   alert("You are incorrect!");
// }

// // looping
// let myName = "Lucycan";
// console.log(myName);
// console.log(typeof myName);
// // if (myName === "Lucycan") {
// //   console.log(`Hello ${myName}`); // will produce Hello Lucycan
// // } else {
// //   console.log(false);
// // }

// // // for loop**********************************************************************************
// // for (let i = 0; i < 10; i++) {
// //   // if you write a for loop wrong, it'll go into an infinite loop; will keep looping
// //   console.log(i); // it will produce 0-9 because once i becomes 10, it'll go out the loop
// // }

// // arrays and methods***********************
// let team = ["Lucycan", "Collin", "Mark", "Cortez"];
// console.log(team);
// console.log(team.length); //shows how long is the array, which is 4
// // push ************************************
// console.log(team.push("Derrick", "John")); // push these name to this array
// console.log(team);
// // pop ************************************
// console.log(team.pop()); // take out the last item in the array
// console.log(team);
// // join ************************************
// console.log(team.join()); // grabs every item in your array and make it a string; seperate it with a comma ','
// console.log(team.join(" I ")); //grabs every item in your array and make it a string; seperate it with a ' I '; you can put spaces in there
// // slice returns a new array
// console.log(team);
// console.log(team.slice(1, 3)); // get rid of everything before index 1 and everything at index 3 and after
// console.log(team);
// // split************************************
// let team1 = "john,mike,keirstin,lucy";
// console.log(team1);
// let team1Split = team1.split(",");
// console.log(team1Split);
// // looping thru an array*********************
// console.log(team);
// for (let i = 0; i < team.length; i++) {
//   console.log(i); // produce 0-4
// }
// for (let i = 0; i < team.length; i++) {
//   console.log(team[i]); // produce all the items in the list in console line
// }
// for (let i = 0; i < team.length; i++) {
//   console.log(`Hello ${team[i]}`); // Will do Hello "Name" for all names in the array
// }

// let roles = [
//   "Tech Manager",
//   "TechFello",
//   "Placement Manager",
//   "Program Manager",
//   "Intern",
// ];

// // Hi my name is Lucycan and I am the Tech Manager
// for (let i = 0; i < team.length; i++) {
//   console.log(`Hi my name is ${team[i]} and I am the ${roles[i]}`);
// }
// Assignment**********************************
// let name1 = prompt("What is your name?")
// let role1 = prompt("What is your role?")
// let name2 = prompt("What is your name?")
// let role2 = prompt("What is your role?")
// let name3 = prompt("What is your name?")
// let role3 = prompt("What is your role?")
// let name4 = prompt("What is your name?")
// let role4 = prompt("What is your role?")
// let arrayName = [name1, name2, name3, name4];
// let arrayRoles = [role1, role2, role3, role4];
// let rfpTeam = prompt("Enter your team's names:"); // louis,shadi,leyanna,kemar
// let rfpRoles = prompt("Enter your team roles"); // Technical Analyst,Business Analyst,Quality Analyst,Program Manager
// // console.log(rfpTeam);
// let rfpTeamSplit = rfpTeam.split(",");
// let rfpRolesSplit = rfpRoles.split(",");
// // console.log(rfpTeamSplit);
// // console.log(rfpRolesSplit);
// for (i = 0; i < rfpTeamSplit.length; i++) {
//   console.log(
//     `Hello my name is ${rfpTeamSplit[i]} and I am the ${rfpRolesSplit[i]}`  //template literal
//   );
// }

// for loop review******************************
// for (//initializer; condition; // iterator){
// output
// // }
// for (let initializer = 0; initializer < 5; initializer++) {
//   console.log("Hello world!"); // this will do it 5 times
// }
// // You will always use a for loop with an array

// FUNCTIONS**************************************
// //ANCHOR - FUNCTIONS
// // function is an action and reusalbe and call anywhere
// // pass an array through a function
// function thisIsTheFunctionName(name) {
//   console.log(name);
// }
// const name = thisIsTheFunctionName("vince");
// // Type the function name followed by parenthesis
// // thisIsTheFunctionName("collin"); // in the parenthesis is the arguement; name will be 'collin'
// // RETURN STATEMENT
function thisIsTheFunctionName1(name) {
  // name + "Thao";  // below is why "collin" does not combine with " Thao"
  // let x = "collin";
  // "collin" + 5;
  // x = "Collin" //still
  name += " Thao";
  // Correct way of adding "collin" to " Thao"
  return name;
}
let name2 = thisIsTheFunctionName1("collin");
console.log(name2);

// // Using arrays in functions*****************
// let array2 = [1, 2, 3, 4, 5, 7];
// let array3 = [1, 2, 3, 4, 5, 6];
// let array4 = [1, 2, 3, 4, 5, 6];
// let array5 = [1, 2, 3, 4, 5, 6];
// let array6 = [1, 2, 3, 4, 5, 6];
// function iterateThroughArray(arr) {
//   for (let initializer = 0; initializer < array2.length; initializer++) {
//     console.log(array2[initializer]);
//   }
// }
// iterateThroughArray(array2); // will iterate through array2
// //******************************************* */

// function sum(num1, num2) {
//   // variables we declared inside the parenthesis; it has no value yet
//   console.log(num1 + num2);
// }
// helloWorld();
// sum(1, 3);
// function helloWorld() {
//   console.log("Hello world");
// }
// helloWorld();

// function pho(ingredient1, ingredient2) {
//   console.log(ingredient1 / ingredient2);
// }

// pho(9, 3); // will produce 3
// // ARROW FUNCTION; their scope is different******
// const function2 = () => {};
// // **********************************************

// let array10 = [1, 2, 3, 4, 5];
// let array11 = [1, 2, 3, 4, 7];
// let array12 = [1, 2, 3, 4, 8];
// let function21 = function (arr) {
//   for (let initializer = 0; initializer < arr.length; initializer++) {
//     console.log(arr[initializer]);
//   }
// };
// function21(array10);

// function blockScope() {
//   let x = 0; // You can not access in global scope, can only access it here inside the function
// }
// console.log(x); // will not produce anything in console

///CHALLENGE*************************************
//let team = ["Lucycan", "Collin", "Mark", "Cortez"]; ///this array needs to be in block scope not global scope
///create a function that passes another name as an argument to the function parameter
/// the function adds the name that you passed to the array
/// return the array
/// expected output: ["Lucycan", "Collin", "Mark", "Cortez", "Blanca"]

function blockScope(name1) {
  let team = ["Lucycan", "Collin", "Mark", "Cortez"];
  team.push(name1);
  return team; // Returning the new "team" array back to the variable call "newTeam"
}

let newTeam = blockScope("Blanca");
console.log(newTeam);
// **********************************************!SECTION
