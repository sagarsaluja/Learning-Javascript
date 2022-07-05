// THEORY:
//synchronous code means that the code execution is line by line , in order
//in which the script is written
//asynchronous code means that isn't necessary the case.

//
console.log("this is the first line");
setTimeout(hello, 1000);
function hello() {
  console.log("this is async");
}
console.log("this is executed before the async");
//the function hello executes after 1 second ,but js doesn't wait for that
//it keeps executing the other lines while the timer is running.

//JS is single threaded. Means it can't do two things at the same time.
//Only one action can be performed at a time.
//it can't keep a timer running ,and at the same time do sommething else.
//How does it run then?

//The browser/ node js is not single threaded. it can use multiple threads
//when the line setTimeout executes , the single action , that
//"execute this function when timer completes" / "hand this off to the browser"
//action performed by js is done.
//setTimeout doesn't provide a timer which is managed by js.
//its just a trigger , which is used to communicate with the browser.
//
//The browser now runs the timer and knows which func to execute when timer completes.
