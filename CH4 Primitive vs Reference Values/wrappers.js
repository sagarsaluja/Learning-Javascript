let myName = "sagar";
console.log(myName.toUpperCase());
console.log(myName);

//why is toUpperCase available here?
//primitive data types don't have methods or properties.

//but behind the scenes , they are wrapped around with an invisible wrapper object
//which provides these properties and methods to them.
//notice , myName doesn't change itself.
//notice: toUpperCase creates a brand new string!!!!!!

let person = { name: "sagar", age: 23 };

console.log(person.name.toUpperCase());
console.log(person);
