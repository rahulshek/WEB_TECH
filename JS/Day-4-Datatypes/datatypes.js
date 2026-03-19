console.log("Datatypes in JS ");
// ! What are datatypes?
// * The datatype means which kind or type of data we can store inside a variable is called datatype.
// *There are mainly 2 types of datatypes in JS
// ? 1. Primitive Datatypes
// * It is a inbuilt datatype which is providedd by each and every programming language.
// * We can access the primitive datatype by their name
// * It can capable to store ot hold the single value .
// ~ There are mainly 7 primitive datatypes in JS
// ? 1. number
// ? 2. string
// ? 3. boolean
// ? 4. null
// ? 5. undefined
// ? 6. bigint
// ? 7. symbol


// ? Non-Primitive Datatypes
// * It is also called as user-defined datatype.
// * We can access the non-primitive datatype by their reference.
// * It can capable to store or hold multiple values.

// ~ Types:
// ? 1. function 
// ? 2. array
// ? 3. object


// ! 1. number:
// * The number includes integer and floating point number, double , etc 

let num = 10;
console.log(num);
console.log(typeof num);

// ! typeof operator: This is not a function, it is an unary operator.
// ? Syntax: typeof variable_name
console.log(typeof num);//number
console.log(typeof num);//number

// ! 2. string:
// * The collection of characters is called as string.
// ? We can create a string in 3 ways:
// ? 1. Using single quotes ('')
let str = 'Hello';
console.log(str);
console.log(typeof str); // string

// ? 2. Using double quotes ("")
let str1 = "world";
console.log(str1);
console.log(typeof str1); // string

// ? 3. Using String Template Literals (``) =>backticks
// * 1st Advantage of string template literals is we can write multiple lines of string.
let multiline = `This is first line 
This is second line
This is third line`
console.log(multiline);

// * 2nd Advantage : We can access dynamic value form a variable 
let username = "Smith";
// ? Syntax: ${variable_name} => String Interpolation
console.log(`My name is ${username}`);

// ! 3. boolean:
// true -> Yes -> 1
// false -> No -> 0

// TODO: falsy values: "", 0, null, undefined, NaN, false
// TODO: truthy values: " ", 1, true, [], {}, "0", "false", " ", "true", "Smith", etc

// ! 4. null:
// * The null means empty or nothing but not equal to zero.
let nullval = null;
console.log(nullval);
console.log(typeof nullval); // object

// ! 5. undefined:
// * The variable has been declared but not assigned any value to the variable .
let a;
console.log(a); // undefined

// ! 6. bigint:
let big = 1234567890123456789012345678901234567890n;
console.log(big);
console.log(typeof big); // bigint

// ! 7. symbol:
// * The symbol() datatype is used to create unique values in JS.
let val1 = Symbol("Hello");
let val2 = Symbol("Hello");

console.log(val1 === val2); // false
console.log(val1.description);
console.log(val2.description);
console.log(val1.description == val2.description); // true

console.log("10" == 10); // true 
console.log("10" === 10); // false 
