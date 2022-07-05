function factory(myName) {
  return function () {
    console.log("myName: ", myName); //myName has block scope , so can be used here
  };
}
const greet = factory("sagar");
greet();
//why this still works is because myName is in the scope of factory function.
//means it was available to the anonymous function , which kept its reference.
const greet2 = factory("sameer");
// I'm calling factory again , with a different parameter.
//what happens now is that factory executes again and creates a new anonymous
//function , which now stores value of "sameer" in myName.

greet();
greet2();
//so , total there are two anonymomus functions in memory.
