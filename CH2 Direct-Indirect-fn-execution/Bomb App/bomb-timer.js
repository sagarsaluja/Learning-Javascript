const defuseButton = document.querySelector("#defuse");
const timer = document.querySelector("#timer");

const availableTime = 5 * 1000;

let bombTimer;
let remainingTime = availableTime;
// defuseButton.addEventListener("click", defuse);
init();
//notice no parenthesis after defuse
//basically we pass a pointer to the function here.
//if the parenthesis are added , it'll directly execute the defuse button , when it reaches that line

//but how do you pass parameters to defuse?
//there are two approaches

//first is to wrap difuse in an anonymous function
//js puts this anonymous function into memory but doesn't execute it.
// the pointer that has been passed to the add eventlistener is used by the browser
//to call the anonymous function
defuseButton.addEventListener("click", function () {
  defuse("you won");
});
//you can also use the bind function
// defuseButton.addEventListener("click", defuse.bind(null, "you won"));
//by not using the anonymous function , you save some space.
//by default every function in js is an object
//and it has the bind method
//bind allows you to pre configure the function on which you call it.
//bind returns a pointer to a brand new function , based on the defuse function
//this brand new function is "pre configured" to receive certain arguments in the following way:
//the first argument to bind is the behaviour of the "this" keyword.
//the next set of arguments are what are needed by the function which will be needed when its called.
//the last argument is the "default event object" (the mouse event)
//bind sends the last argument automatically ,you don't need to send it.
//you can read it in the function by accepting event as a parameter

//init calculates remaining time.
//when time is <=0 , alerts the user that game is lost.
function updateTimer() {
  timer.textContent = remainingTime / 1000;
}
function defuse(message) {
  clearInterval(bombTimer);
  alert(message);
}
function TimeHandler() {
  remainingTime = remainingTime - 1000;
  if (remainingTime <= 0) {
    alert("lost");
    clearInterval(bombTimer);
    return;
  }
  updateTimer();
}
function init() {
  //setInterval takes in 2 arguments
  //the first is a function , second is a number which represents time
  //set interval calls the input function every 10 miliseconds , if time passed in is 10.
  //clearInterval stops the excution of setInterval
  bombTimer = setInterval(TimeHandler, 1000);

  //setInterval can also take an anonymous function
  //bombTimer = setInterval(function(){
  //does something
  //   }, 1000);
  //notice we can add parenthesis after the anonymous function too , but haven't
}
