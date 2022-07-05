//Locking values in functions.

//theory:
//A closure is "the combination of a function with its lexical environment
//when it was declared"
//lexical environment? => variables in scope

//most important =>
//every function keeps a reference to its environment when it was declared.
function factory() {
  const myName = "Sagar";
  return function () {
    console.log("myName: ", myName); //myName has block scope , so can be used here
  };
}
//the factory function is a function that returns another function.
//the anonymomus function that factory returns has access to myName
//and this anonymous function kept a reference of its environment.
//therefore even after factory finished executing ,
//the variable myName is still available to the anonymous function.
const greet = factory(); //greet holds a pointer to the anonymomus function.
greet();
//the greet const now holds the anonymous function.
//and upon executing greet , it executes the anonymous func it holds.
