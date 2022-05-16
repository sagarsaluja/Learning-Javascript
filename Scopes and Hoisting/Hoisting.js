// Hoisting concept
//code execution of a javascript file is in this order :
// Compile Phase , then execution phase
// Compile phase :the file is scanned for variables and functions , and they are put in memory
// we say that the functions and variables are "hoisted"
// Execution phase: then the code is executed top to bottom
// Hoisting happens on a global level , and also inside functions

//the function call is before the definition
//js will scan the file and know that the function hello exists , then it'll execute
//the whole file top to bottom.
hello();
function hello() {
  console.log("hello sagar");
}

//for variables , the declaration is hoisted , but the definition is not hoisted

//What's the output?
console.log(myName);
var myName = "sagar";
console.log(myName);

//the output is undefined.
//the declaration is hoisted, and the variable myName holds value of undefined.
//then the code is executed top to bottom , so it logs myName with undefined ,
//and then assigns the value to it.

//what's the output?
console.log(greet); //this line prints undefined , because greet holds undefined right now
try {
  greet();
} catch (error) {
  console.log(error); //this catch block executes , because greet is currently undefined , and not a function
}
var greet = function () {
  console.log("hi");
};
greet(); //this line prints hi ,
//because , now the definition is also executed , and greet is a function

//hoisting inside functions
function x() {
  console.log(myAge); //prints undefined
  var myAge = 4; //definition
  console.log(myAge); //prints 4
}
x();
