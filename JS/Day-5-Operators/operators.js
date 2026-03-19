console.log("Operators in JS");

// ! 1. Incerement and Decrement Operators:
let a = 10;
console.log(a++); // 10
console.log(a); // 11

console.log(++a); // 12

let b = 10;
console.log(b--); // 10
console.log(b); // 9

console.log(--b); // 8

// ! 2. Ternary Operators:
// ? Syntax: condition ? expr1 : expr2;

let age = 18;
let result = age >= 18 ? "Go and Watch DhrunDhar" : "Go and watch pogo";
console.log(result);


// ! Nullish Coalescing Operator:(??)
// * The Nullish coleascing operator is represented as double (??) marks.
// * When value of the variable returns null or undefined it will execute the right side default value.

// ? Syntax: variable ?? defaultValue;
let username = null ?? "Guest";
console.log(username);