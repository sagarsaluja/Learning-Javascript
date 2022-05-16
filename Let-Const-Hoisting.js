//for variables declared using let and const , they are hoisted , but if used before their declaration ,
//it throws an error , because they remain uninitialized , although they are hoisted.

try {
  console.log(x1);
  let x1 = 4;
} catch (error) {
  console.log(error, "declaration is after usage");
}

try {
  console.log(y1);
  const y1 = 5;
} catch (error) {
  console.log(error, "declaration is after usage");
}

try {
  const g = 4;
  //can't declare const without a value , it always needs an initializer.
  console.log(g);
} catch (error) {
  console.log(error, "declaration is after usage");
}

try {
  let myAge; //default initializer is undefined
  console.log(myAge);
} catch (error) {
  console.log(
    error,
    "undefined is printed , because its declaration is before usage"
  );
}
try {
  console.log(g);
  var g = 4;
  console.log("if you use strict mode , then var also gives this error");
} catch (error) {
  console.log(error);
}

//some special cases
var username = "sagar";
function username() {
  console.log("this is  the username function");
}
console.log(username);
//what's the output -> Sagar
//variable , if defined beats the function when being hoisted.

//but if not defined , the function beats the variable declaration in hoisting
//the function is logged
var us1;
function us1() {
  console.log("this is  the us1 function");
}
console.log(us1);

//with let and const?
//doing this will throw syntax error

//syntax error:
//   let s1 = "s1";
//   function s1() {
//     console.log("function s1");
//   }
//   console.log(s1);

//syntax error:
// const s1 = "s1";
// function s1() {
//   console.log("function s1");
// }
// console.log(s1);
