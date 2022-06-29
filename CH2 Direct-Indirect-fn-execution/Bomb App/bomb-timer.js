const defuseButton = document.querySelector("#defuse");
const timer = document.querySelector("#timer");

const availableTime = 5 * 1000;

let bombTimer;
let remainingTime = availableTime;
defuseButton.addEventListener("click", defuse);
//notice no parenthesis after defuse
//basically we pass a pointer to the function here.
//if the parenthesis are added , it'll directly execute the defuse button , when it reaches that line

init();
//init calculates remaining time.
//when time is <=0 , alerts the user that game is lost.
function updateTimer() {
  timer.textContent = remainingTime / 1000;
}
function defuse() {
  clearInterval(bombTimer);
  alert("defused");
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
}
