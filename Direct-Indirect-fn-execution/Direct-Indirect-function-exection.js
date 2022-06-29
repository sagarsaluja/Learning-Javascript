//Theory

doSomething();
//direction execution , ends on parenthesis

setTimeout(doSomething, 5000);
//indirect function , does'nt have parenthesis at the end
// and the function doSomething is executed after 1000 seconds
//in indirect execution , the function is executed by someone else in the future

//parenthesis are added only when you want js to execute the function there and then only
function doSomething() {
  console.log("did something");
}
