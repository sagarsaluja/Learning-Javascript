//js is a weakly typed language
//means you can do this
let myName = "sagar";
myName = 3;

//or this
console.log(3 + "1"); //output is 31.

//what is type coercion? // (basically means conversion)
//its a mechanism built in js , related to use of operators
//js has to decide how to use a operator on
//the two values you use the operator on.

//you can convert :
//arrays/objects to strings
//string to numbers
//basically everything to boolean

//implicit and explicit coercion

//implicit :js automatically decides what to do.
console.log(3 + "3");

//explicit :you tell js what to do.
console.log(Number("3") + 3);
