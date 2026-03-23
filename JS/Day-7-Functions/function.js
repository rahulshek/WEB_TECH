console.log("Remaining Functions...");

//! 4. IIFE:
//* IIFE stands for Immediate Invoking Function Expression.
//* IIFE function will execute only once.

console.log("IIFE Function");
(function () {
  console.log("This is IIFE function");
})();

//! 5. Arrow Function:
//* The arrow function introduced in ES6 concepts which was released in the year of 2015.
//* Arrow function is also called as modern function.
//* To reduce the syntax of normal function.
//* Shorter way to write the function.

//? Syntax: () => {}

let arrFun = () => {
  console.log("This is arrow function");
};
console.log(arrFun);
arrFun();

//! arguments keyword:
let argFun = () => {
  console.log(arguments); // arguments is not defined at argFun
};
// argFun(10, 20, 30, 40, 50);

//! 1. Implicit Return of Arrow Function:
//* If there is only one statement there is no need to use curly brackets and return keyword.
let add = (num1, num2) => num1 + num2;
console.log(add(10, 20));

//! 2. Explicit Return of Arrow Function:
//* If there are multiple statements it is mandatory to use the curly brackets and return keyword.
let sub = (num1, num2) => {
  return num2 - num1;
};
console.log(sub(20, 70));

let demo = () => {
  console.log("Hello");
  console.log("bye");
};
demo();

//* If arrow function consist of only one parameter then there is no need to use () also.
let singleParams = (name) => name;
console.log(singleParams("John"));

//! 6. Callback Function:
//* A function which is passed to the another function as an argument is called as callback function.

// //let paymentProcess = (amount, callback) => {
//   // console.log(Payment Processing of an amount ₹ ${amount});
//   //   console.log(callback);
//  // callback();
// // };

let paymentSuccess = () => {
  console.log("Payment Successfully Done✅");
};

let paymentFailed = () => {
  console.log("Payment Failed❌");
};

//! callback function as reference of the function:
// paymentProcess(500, paymentSuccess); // payment with success
// paymentProcess(500, paymentFailed); // payment with failed

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
// console.log(btn1);
// console.log(btn2);

btn1.addEventListener("click", () => {
  paymentProcess(1000, paymentSuccess);
});

btn2.addEventListener("click", () => {
  paymentProcess(1000, paymentFailed);
});

//! Callback function as anonymous function
paymentProcess(5000, function () {
  console.log("Payment done✅");
});

//! Callback function as Arrow function:
paymentProcess(4000, () => {
  console.log("Payment of 4000 done✅");
});