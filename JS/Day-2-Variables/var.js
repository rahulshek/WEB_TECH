console.log("var in javascript");
// ! variable:
// * The variable is a container that stores the data.
// * There are mainly 3 types of variables in javascript:
// ? 1. var
// ? 2. let
// ? 3. const

// ! Syntax : Variable_type identifier = value;

// ! 1. var
// * A var variable is first variable introduced in javascript.
// * By default scope of var variable is Gloabal Scope.

// ! 1. Declaration : Possible ✅
var num;
console.log(num); // undefined

// ! 2. Initialization : Possible ✅
var num = 10;
console.log(num); // 10

// ! 3. D + I
var num = 10;
console.log(num); // 10

// ! 4. Re-declaration : Possible ✅
// ? RD means with same variable type and same variable name.
var num = 20;
console.log(num); // 20

// ~ Drawback -> Variable Pollution

// ! 5. Re-initialization : Possible ✅
var num = 30;
console.log(num); // 30