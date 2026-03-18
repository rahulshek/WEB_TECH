console.log("let in Js");

// ! 3. const in Js
// * A let variable is introduced in ES6 concepts which was released in the year of 2015
// * By default scope of var variable is scope Scope.

// ! 1. Declaration : Not Possible ❌
// const num;
console.log(num); // undefined

// ! 2. Initialization : Not Possible ❌
// num = 10;
// console.log(num); // 10

// ! 3. D + I : Possible ✅
const num = 10;
console.log(num); // 10

// ! 4. Re-declaration : Not Possible ❌
// ? RD means with same variable type and same variable name.
// const num = 20;
console.log(num); // 20

// ~ Drawback -> Variable Pollution

// ! 5. Re-initialization : Not Possible ❌
// const num = 30;
// console.log(num); // 30