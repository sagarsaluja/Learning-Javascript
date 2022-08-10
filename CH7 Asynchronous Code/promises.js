//what is a promise:
//its a js object that wraps an operation.
//its provided by nodeJS / browser
//this promise is eventually marked as "settled" , whenever the operation is complete.
// you mark it settled by using the "then" method.

//the then method takes a function as an argument and that function is executed when the promise is settled.

//promises help you prevent the "callback hell"

//you can define a step by step chain for async operations.

//if fetch was callback based ,

//   fetch(
//     "https://jsonplaceholder.typicode.com/todos/1",
//     { type: "get" },
//     function (response) {
//       console.log("data received");
//       response.json.(function (data) { console.log( "do something with the data" , data);})
//     }
//   );

//you see , here the code is so messy.

//how fetch is actually :

//fetch returns a promise.
//and we can use a .then method on the fetch

const promise = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
  function (response) {
    //this response parameter is passed in automatically by the browser.
    response.json().then(function (data) {
      //again , this data is also passed in automatically.
      console.log("data:", data);
    });
    //the response object has a json method , (its provided by the browser)
    //json() is also an async operation.
    //SO we can add another .then to it
  }
);

//now in this writing style , we have kind of another call back hell

//so what to do?
//promises have another cool feature ,
// in the then block , you can return data , that IS a promise , or data , that is NOT a promise

//so the json() method returns a promise , just return it.
//now move the then block and chain it to the previous then block

const promise2 = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("data:", data);
  });

//this is more readable.
