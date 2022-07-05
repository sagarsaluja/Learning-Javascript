function factory(myName) {
  return function () {
    setTimeout(function () {
      console.log("myName: ", myName); //myName has block scope , so can be used here
    }, 1000);
    myName = "sameer";
  };
}
const greet = factory("sagar");
greet();
//what is the output?
//sagar or sameer?

//the function closes on the variable names only and not their values, when it is declared
//the values are only read when the function actually executes.
//the setTimeout only executes after one second , when the value had changed already.

//question:
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i, "loop1");
  }, 500);
}
//why is the output "5"   all 5 times ?
//because the for loop kept incrementing the variable i and fully executed the loop
//the function inside was aware of the variable i , but not the value of i.
//when the 500 ms were over , value of i was 5 , and all 5 times it prinnted that.

for (var a = 0; a < 5; a++) {
  setTimeout(console.log(a, "loop2"), 5000);
}
//here , the value of "a" sent to console log each time is different.
//here there in no function declaration.
//each function call receives a copy of "a"
//also, see that it executes the console.log immediately ,
//instead of waiting for 5000 ms

//how can we can print 01234 ?
for (var i = 0; i < 5; i++) {
  (function () {
    var j = i; //here var has function scope.
    setTimeout(function () {
      console.log(j, "loop3");
    }, 500);
  })();
}
//this is a self executing function.
//every time it executes , it creates a seperate environment.

//what if you use let instead of var?
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i, "loop4");
  }, 500);
}
//the reason you get 01234 is because let has block scope.
//every time the loop runs , you get a different environment.
//actually in each iteration, a new i is created , which copies the value
//from the old i and adds one to it.
//and each iteration has a different value of i , and the setTimeout
//refers to the newly created environmment.
