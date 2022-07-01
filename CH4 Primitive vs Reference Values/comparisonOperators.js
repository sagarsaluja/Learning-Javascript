const arr1 = ["sagar", "sameer"];
const arr2 = ["sagar", "sameer"];

const obj1 = { name: "sagar", age: "23" };
const obj2 = { name: "sagar", age: "23" };

//guess the output?
console.log(arr1 == arr2);
console.log(arr1 === arr2);
console.log(obj1 == obj2);
console.log(obj1 === obj2);

//== compares the value
//=== compares the datatype and the value

//NOTE: the output is all false because the addresses are being compared here.

// but if you do
const arr3 = arr1;
console.log(arr1 == arr3);
console.log(arr1 === arr3);
//since the address are same , they give true
arr1[0] = 1;
arr3[0] = "1";

//so changing it on arr1 or arr3 doesn't matter as both hold the same address
console.log("t", arr1[0] == arr3[0]); //again , the array in memory is the same only.
console.log("t", arr1[0] === arr3[0]);

console.log(arr1 == arr3);
console.log(arr1 === arr3);

arr1[0] = 1;
arr3[0] = 4;

console.log(arr1 == arr3);
console.log(arr1 === arr3);
//output is still true , because addresses are being compared.

c1 = ["1", "2"];
c2 = [1, 2];
console.log("c1", c1[0] == c2[0]);
console.log("c1", c1[0] === c2[0]);
