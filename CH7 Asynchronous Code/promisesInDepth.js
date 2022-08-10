//the three stages of a promise:
//pending => initial stage ,it has not produced a result yet
//remember: a promise is an object , which is "responsible for producing a result"

//fulfilled => once the promise is marked as complete and the operation it was designed to do is completed successfully

//rejected => the task it was designed to do is failed.
// fulfilled and rejected states are part of "settled"

//you can create a new promise by using the new keyword on the Promise constructor
//this Promise constructor wants a function as its first parameter
//the first function takes two arguments inside it.
//both of these are functions => resolve , reject functions
//the first function will be triggered whenever you add a .then after the promise
//the browser calls the first function and passes in the resolve and reject functions to it

const myPromise = new Promise(function firstFunction(resolve, reject) {
  //inside the function , we can do whatever we want
  //but we typically want to resolve the promise here
  //we resolve a promise by calling the resolve() method.
  //when the resolve function is called , the then block chained to this promise is executed.
  const data = "success";
  setTimeout(function () {
    resolve(data);
  }, 5000);
  //the data which you pass to the resolve function will be passed to the then method
  //it will be passed as a parameter to the function inside the then
});
myPromise.then(function (data) {
  console.log("data", data);
});
//note you can resolve a promise only once.
//once the resolve function is called , the promise is resolved.

//but the .then methods give new promises

myPromise
  .then(function (data) {
    console.log("first then", data);
    return 1223; //returning here gives this return value to the next then block
  })
  .then(function (data) {
    console.log("second then", data);
  })
  .then(function (data) {
    console.log("third then", data); //gives undefined as nothing is passed
  });

//what if you return the same promise inside the then method?
myPromise
  .then(function (data) {
    console.log("first then", data);
    return 1223; //returning here gives this return value to the next then block
  })
  .then(function (data) {
    console.log("second then", data);
    return myPromise;
  })
  .then(function (data) {
    console.log("third then", data); //gives success , as the
  });

//but did you notice we don't have a delay between the second and third then block?
//why is that?
// because myPromise was resolved in the past.
//its the very same object in memory
//Promises can only be resolved once.
