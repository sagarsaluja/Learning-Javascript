var myName = "Sagar";
console.log(myName);

//this variable myName is available in the global scope , which also covers file Scope2 , so its available there also
//this is also available in the global object and can be accesed from scope2 as well

let myAge = 4;
//this is available in global scope, and in file scope2 as well ,
//but since its declared using let , its not part of the global object
console.log(this.myAge, "scope1"); //prints undefined.
