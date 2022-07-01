arr1 = ["sagar", "sameer"];
arr2 = arr1;
arr2[0] = "shikhar";
console.log(arr1, arr2);

//how to get a true copy of arrays?
//how to get a copy of arr1 into arr2 and edit arr2 so that arr1 remains unaffected?

//method1: use slice!
//the slice method gives you a part of the original array's true copy.
//if no parameters are passed , you get the full array.
arr3 = arr1.slice();
arr3[0] = "sss";
console.log("arr1: ", arr1);
console.log("arr3", arr3);

//method2: use spread operator
//the spread operator pulls out all the elements out of the original array and "spreads" them
//on the surrounding array  creating a true copy.
arr4 = [...arr1];
arr4.push("a");

console.log("arr1: ", arr1);
console.log("arr4", arr4);

//filter() and map() also give you true copies. and also do much more

//for objects
const user = { name: "sagar", age: 23 };
//use the Assign method
//this method takes 2 parameters
//the first is the new object to which we want to add all the key value pairs
//the second is the object from which key value pairs are to be assigned.
//method returns a pointer.
const user_copy = Object.assign({}, user);
console.log(user, user_copy);

user_copy.age = 25;
console.log(user, user_copy);
//you can also use the spread operator

const u = { ...user };
u.age = 30;
console.log(user, u);

//but what about nested?
const nest = [
  { name: "s1", age: 2 },
  { name: "s2", age: 3 },
  { name: "s3", age: 4 },
];
//this is an array , and each element is a "POINTER"
const nest_copy = [...nest];
//here we are making a new array , but we are pulling out the old pointers that live in it.

//now , how will you create a true copy???!

//you'll have to loop through each element.

//use the function map()

//map is a function which calls a function on each element in the array
//it accepts the element on which it is being executed at the moment as a parameter.
//map gives you an array .
const abc = [{ name: "sagar" }, { name: "sameer" }];
const v = abc.map((usr) => {
  return { ...usr }; // copy of the keyy value pair for the current element
});
//if you still have more nested elements , you will need other libraries to create a true copy.
//or handle each case yourself.
console.log(v);
