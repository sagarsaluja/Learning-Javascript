//Theory
//We want to execute some code "eventually"
//when a button is clicked / when a timer compeletes

//think of call backs here.

doSomething();
//direction execution , ends on parenthesis

setTimeout(doSomething, 5000);
//indirect function , does'nt have parenthesis at the end
// and the function doSomething is executed after 1000 seconds
//in indirect execution , the function is handed off to be executed by someone else in the future

//parenthesis are added only when you want js to execute the function there and then only
function doSomething() {
  console.log("did something");
}
