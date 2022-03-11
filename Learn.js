//Scope
//let and const have block scope
//var has function scope
//blocks can be  a function , if else block , for loop etc
let result = 1;
const x = 2;
var y = 3;
console.log(result, x, y);
//works because result , x , y is from this block's scope only

function A() {
  let b = 4;
  const c = 5;
  var d = 6;
  console.log(result, x, y); //works
}

A();
//prints 1 , as result is available throughout the block
//prints 2 , 3 also

//console.log(b , c , d);
//this gives error , as b ,c ,d are declared in the function A , and is limited to the scope of A

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
