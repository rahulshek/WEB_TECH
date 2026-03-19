// ! What is type casting?
// * It is the process of converting one datatype into another datatype.

// ? There are two types of type casting:
// ? 1. Implicit type casting : Inteternally ->JS engine
// ? 2. Explicit type casting : Externally (Manually) -> By developer ->user

// ! 1. Implicit typecasting :
console.log(10+10); // 20
console.log("10"+10); // 1010
console.log("10" - 5); // 5
console.log(true + 10 ); // 11
console.log("true" + 10); // true10 
console.log( "true" - 10 ); // NaN

// ! 2. Explicit typecasting :
// ? We can perform explicit typecasting by using 3 constructor :
// ~ 1. Number() : It will convert any datatype into number datatype.
// ~ 2. String() : It will convert any datatype into string datatype.
// ~ 3. Boolean() : It will convert any datatype into boolean datatype.

console.log(Number("10") + 10); // 20
console.log(String(10) + 10); // 1010
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean("[]")); // true
console.log(Boolean("{}")); // true
console.log(String(10)- 5); // 5

console.log("33"+ 33 + true); // 331true    

let userInput = prompt("Enter your age");
console.log(userInput);
console.log(typeof userInput);
console.log(Number(userInput));







