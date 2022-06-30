//for in :
//the implementation of for in loop in js is like this
const user = {
  name: "sagar",
  age: 23,
  height: 6,
  greet: function greet() {
    console.log("greets");
  },
};
for (const key in user) {
  console.log(key, ": "); //line prints the "key"
  console.log(user[key]); //prints the value
}
console.log("_______________________");

//the key is a const here.
//what happens in the for in loops is that after each iteration
//the old const is removed from the memory and a new key is created

//for in loops also loops through all the inherited properties as well

//example
user.__proto__.test = 5; //this property is added by most js engines.
for (const key in user) {
  console.log(key, ": "); //line prints the "key"
  console.log(user[key]); //prints the value
}
console.log("_______________________");
//how to avoid this?
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(key, ": "); //line prints the "key"
    console.log(user[key]); //prints the value
  }
}
