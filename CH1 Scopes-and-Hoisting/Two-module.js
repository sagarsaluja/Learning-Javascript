console.log("hello module2");
try {
  console.log(myName, "module2");
} catch (error) {
  console.log("can't print as the variable myName is out of module scope 2");
}
