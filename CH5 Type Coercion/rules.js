//implicit coercion

//operators:

// the '+' operator

// one line rule :[if atleast one of them is a string ,output is a string.]
// + can be used to add numbers and also  concatenate strings
//number + number = number
//string + number is a string [number is converted to string]
//string + string = string  [if both strings are numbers , they aren't coerced.]
//number + boolean = number
console.log(3 + "hi");
console.log(3 + 3);
console.log("3" + "3"); //this is different for the '-' operator!!!!
console.log(3 + "3");
console.log(3 + true, 3 + false); //number
console.log("3" + true); //string.

// == , != , && ,|| , < , > operators
console.log("comparison operators");
//if a number and a string are compared , both are converted to a number
//a string converted to a number is NaN , which gives output of false on comparing to a number.
//if both are strings , hierarchy is followed.
//comparison of strings follows this hierarchy: 01234...9abcdef...zABCD...Z
console.log(5 > 3); //numbers are compared
console.log("5" > 3); //5 is converted to number [taught wrong in course]
console.log("5" < 3); //5 is converted to number
console.log(5 > "hi"); // hi is converted to NaN
console.log(5 < "hi"); // hi is converted to NaN
console.log("A" < "a"); //follows hierarchy
console.log("hi" > "hare"); //follows hierarchy
console.log("hi" < "hare"); //follows hierarchy
console.log("2" > "12"); //follows hierarchy
console.log("over");
//more on boolean later.

//for - , * , / , %
//one line rule: [strings are coerced to numbers if possible],otherwise numbers are output.
//you can't do this
console.log("hi" - "i"); //can do this in python
//outout is NaN
console.log("10" - "3");
console.log("false" - "false"); //NaN
console.log(true - false, true + false, false - true);
console.log("3" - true); // 3 is coerced to number , because its possible
console.log(12 / "3");
console.log(12 / "hi"); //NaN
console.log(12 % "3");
console.log(12 * "4");

// === , !==
//compare values AND types
//there is no implicit coercion because types are also compared.

console.log(true, false, Number(true), Number(false));
