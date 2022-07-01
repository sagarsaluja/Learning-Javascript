//the thing with const on arrays and objects

//const means that "Dont assign a new value to the variable"
//it doesn't mean "don't change the value "

//with primitive types , which are immutable ,
try {
  const a = 5;
  console.log(a);
  a = 6;
} catch (error) {
  console.log(error);
  console.log("you assigned a new value to the variable a");
}

const obj1 = { name: "sagar", age: 23 };

const obj2 = { game: "football", type: "outdoor" };

try {
  obj1 = obj2;
} catch (error) {
  console.log(error);
  console.log("you assigned a different address to obj1");
}

//but you can do this:
console.log(obj1);
obj1.name = "sameer";
console.log(obj1);
//the object is changed in memory ,
//but the address stored in obj1 is still same , so this is allowed

//same for array
const arr = ["a", "b", "c"];
try {
  arr = ["d", "e"];
} catch (error) {
  console.log(error);
  console.log("you assigned a different address to arr");
}
//but this will work
arr[1] = "x";
console.log(arr);
