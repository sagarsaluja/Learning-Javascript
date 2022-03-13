// THEORY
/*
In javascript , there is a "GLOBAL" object
In the browser , if the script executes in a document , the "window" is the global object

Only SOME functions and variables are added to this global object , but not ALL
*/

var myName = "Sagar";
console.log(this.myName, "this");
console.log(self.myName, "self");

//here the value of "this" or "self" depends on the context in which it is executed.
//Since we aren't inside any specific function or object , the "this" or "self" here represents the global object
//all global functions and variables are added to this global object by javascript.
function printAge() {
  console.log("my age is 23");
}
console.log(this.printAge); //can you guess output??
this.printAge(); //printAge is called , and executed
self.printAge(); //printAge is called , and executed
this.printAge; //called , but printAge is not executed

// what if you change the var to a let/const in the first line?
let myAge = 5;
console.log(this.myAge); //prints undefined!
//with let and const , the variables don't get added to the global object.
//Also , global scope and global object are not same!
//this myAge is available globally  , but not as part of the global object
