/*
If you declare a variable on a lower scope , than it already was declared in , its allowed
javascript "shadows" the outer variable in the inner scopes
 */

const myAge = 31;
function printAge() {
  var myAge = 35;
  console.log(myAge);
}
printAge();
