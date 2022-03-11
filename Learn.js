//Scope
//let and const have block scope
//var has function scope , if declared inside a function , global if declared outside a function
//blocks can be  a function , if else block , for loop etc
let r = 1;
const x = 2;
var y = 3;
console.log(r, x, y);
//works because r and x have block scope
//y is declared outside of a function , so it has global scope

function A() {
  let b = 4;
  const c = 5;
  var d = 6;
  console.log(r, x, y); //works
}

A();

if (true) {
  var m = 5;
  let n = 10;
  const w = 30;
}
console.log(m);
//works as m is declared outside of a function , and has global scope

try {
  console.log(n, w);
} catch {
  console.log("scope of n and w is of the if block only");
}

//let can't be re declared , but var can be re-declared
//so avoid using var
//use let and const

//var can be used before declaring it
console.log(VarVariable);
var VarVariable = 4;
//this prints undefined
console.log(VarVariable);
//this prints 4

//var can be re-declared
var VarVariable = "Var-variable is now re-declared as string";
console.log(VarVariable);

//only difference between let and const is that const can't be re assigned to a different value
let letVariable = 44;
console.log(letVariable);
letVariable = 55;
console.log(letVariable);

const constVariable = 50;
console.log(constVariable);
try {
  constVariable = 40;
} catch (error) {
  console.log("can't re assign const");
}

//THINK ABOUT -> SCOPE, RE Declaration , Re Assignment when working with variables
