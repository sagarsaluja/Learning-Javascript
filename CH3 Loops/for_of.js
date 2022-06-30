const user = {
  name: "sagar",
  age: 23,
  height: 6,
  greet: function greet() {
    console.log("greets");
  },
};

try {
  for (const val of user) {
    console.log(val, ": "); //line prints the "key"
    console.log(user[val]); //prints the value
  }
} catch (error) {
  console.log(error);
  console.log("for of needs an iterable");
}
//array is an iterable , but an object is not.
console.log(Object.entries(user));
try {
  for (const key of Object.entries(user)) {
    //entries gives you an array, full of arrays
    //each array will be of 2 elements
    // where first element is the key and the second is the value
    console.log(key); //line prints the "key"
  }
} catch (error) {}

console.log("_______________");
//array is an iterable , so use for of directly
const numbers = [1, 2, 3, 4, 5];
for (num of numbers) {
  console.log(num);
}
console.log("_______________");
//extra experiment

const obj = {
  a: "1",
  b: {
    c: "3",
    d: "4",
  },
  f: [1, 2, 3],
};
console.log(Object.entries(obj));
for (const val of Object.entries(obj)) {
  console.log(val);
}
console.log("_______________");

for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}
//for each executes the "function" inside it for each value in the array
//the function can take upto "3" arguments , passed automatically ,if you accept in loophandler
//the array element ,the index , the array itself.
console.log("_______________");
function loophandler(num, index, arr) {
  console.log(num * num, index, arr[index]);
}
numbers.forEach(loophandler);
//the function
