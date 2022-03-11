//Scope
//let and const have block scope
//var has function scope
//blocks can be  a function , if else block , for loop etc
let result = 1;
const x = 2;
var y = 3;
console.log(result, x, y);
//works because result , x is from this block's scope only
//y is declared outside of a function , so it has block scope

function A() {
  let b = 4;
  const c = 5;
  var d = 6;
  console.log(result, x, y); //works
}

A();

if (true) {
  var m = 5;
  let n = 10;
  const w = 30;
}
console.log(m);
//works as m is declared outside of a function , and has block scope

//console.log(n , w);
//does not work as n has scope of if only

try {
  console.log(n, w);
} catch {
  console.log("scope of n and w is of the if block only");
}
//prints 1 , as result is available throughout the block
//prints 2 , 3 also

//console.log(b , c , d);
//this gives error , as b ,c ,d are declared in the function A , and is limited to the scope of A
