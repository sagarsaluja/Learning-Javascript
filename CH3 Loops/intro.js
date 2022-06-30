console.log("there are 4 types of for loops , used on arrays and objects");

//for -> custom logic with iterators , iterator is a variable(decalred with var/let)
//for in -> Loop through keys in objects [key is constant per iteration]
//for of -> loop through values in objects [value is constant per iteration]
//forEach() -> execute function on every array element  , item passed as parameter to a function
//forEach is a method!!!!!!!

//the for loop
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); //prints 5 because var has global scope here.
