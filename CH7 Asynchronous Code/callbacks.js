//Eg: setTimeout ,addEventListener etc.
//Callback functions are functions passed as a parameter to another function, which should be executed eventually.
//remember "eventually be executed"
Operate(1, 2, function (res) {
  console.log(res);
});
//above is the call for the Operate function
function Operate(num1, num2, callBack) {
  result = num1 + num2;
  callBack(result); //the function passed as a parameter is being called.
}
//the setTimeout calls the callback function by itself , we don't call it explicitly.
//these functions are built-in in the environment (like the browser) in which js runs.

//another example
const btn = document.querySelector("button");
function cb() {
  console.log("clicked");
}
btn.addEventListener("click", cb); //notice no parenthesis
//Notice ,this leads to an error if the defer keyword is removed in index.html where this is added as a script.
// because the script executes before loading the button on the screen.
//and btn is null there.
