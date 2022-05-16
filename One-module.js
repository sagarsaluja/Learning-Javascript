/*
Theory:
Every module has its own "file scope" can be called "module scope"
but modules can use variables which are global , declared in non module files.
*/
var myName = "Sagar";
//this variable is only available to scope of module : One-module.
console.log("hello module1");
