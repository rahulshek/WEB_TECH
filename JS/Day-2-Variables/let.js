console.log("let in Js");

// ! 2. let 
// * A let variable is introduced in ES6 concepts which was released in the year of 2015
// * By default scope of var variable is scope Scope.

// ! 1. Declaration : Possible ✅
let num;
console.log(num); // undefined

// ! 2. Initialization : Possible ✅
num = 10;
// console.log(num); // 10

// ! 3. D + I : Possible ✅
// let num = 10;
console.log(num); // 10

// ! 4. Re-declaration : Not Possible ❌
// ? RD means with same variable type and same variable name.
// let num = 20;
console.log(num); // 20

// ~ Drawback -> Variable Pollution

// ! 5. Re-initialization : Possible ✅
// let num = 30;
// console.log(num); // 30