//primitive data types:
//number , boolean , string , symbol , bigInt , undefined , null

// reference data types:
//objects , arrays , functions
//note :arrays and functions are also objects in js

//primitive: IMMUTABLE , NON OBJECT VALUES
//immutable means we can't change the values , means we can't do 5=6.
//non object means they don't have methods and properties.

//reference : MUTABLE OBJECT

//primitive : copied by value
//reference : copied by reference

//we can store a number /string or an object in a variable declared using let , const or var.
//example:
let a = 5;
let b = a; //sharing by COPY.
//a copy of value stored in a is made and is stored in b.
console.log(a, b);
//now , there are two variables a and b , and both hold the value 5 independently

let person = { name: "sagar", age: 23 };

let p2 = person; // the object is not copied. but the address(pointer) is copied.

console.log(person, p2);
//both p2 and person have an address (pointer) stored in them.
// which points to the object {name: "sagar" , age: 23} stored in memory

//if i change a property ,
person.age = 24;
console.log(person, p2); //both have age 24 now. [copied by reference]
p2.age = 25;
console.log(person, p2); //again , both have age 25 now

//but primitive variables are immutable:
//example:
a = 6;
console.log(a, b); //doesn't affect b
b = 8;
console.log(a, b); //doesn't affect a
