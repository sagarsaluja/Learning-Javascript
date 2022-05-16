/*
If you declare a variable on a lower scope , than it already was declared in , its allowed
javascript "shadows" the outer variable in the inner scopes
 */

const myAge = 31; // attention : declared with const
function printAge() {
  var myAge = 35; //can use let also?
  console.log(myAge);
}
console.log(myAge);
printAge();

//exercise : find output

const c1 = 5;
function test2() {
  let c1 = 3;
  console.log(c1, "this is c1 inside test2");
  // var check = 50;
  // console.log(check);
}
test2();
console.log(c1, "this is c1 outside test2");

const c2 = 40;
function test3() {
  console.log(c2, "value of c2 can be used from outside");
}
test3();
const c3 = 80;
function test4() {
  try {
    c3 = 100;
  } catch (error) {
    console.log(error);
  }
  console.log(c3, "value of c2 can be used from outside");
}
test4();

const c4 = 120;
function test5() {
  var c4 = 150;
  try {
    console.log(
      c4,
      "this is test 5 , using var to re decalare a global const "
    );
  } catch (error) {
    console.log(error);
  }
}
test5();

const c5 = 25;
function test6() {
  let c5 = 10;
  console.log(c5, "using let to re-declare a global const");
}
test6();

let c6 = 3;
function test7() {
  //console.log(c6); -> you can't have this line here as you re declare c6 below! -> error
  const c6 = 2;
  console.log(c6, "using const to redeclare a global let");
}
test7();

const check = 5;
function test8() {
  console.log(check, "value of check (global const) in test 1");
  var check = 3;
  //if you have the re declaration using var , the line above this redeclaration prints undefined
  //if you have the re-declaration using let or const , then the line throws error.
  //if you don't have the re-declaration line, the global value of check is printed = 5
}
test8();
//Main thing to remember :
//Variables declared using var can be used before their declaration , and hold value of undefined
//using a variable and then re-declaring it using let or const throws error
// if you have no - redeclaration , then normal rules of scope are followed.
