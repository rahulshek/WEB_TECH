console.log("Function in JS ");

// ! What is function?
// * A function is a block of code which is used to perform a particular task.

// ! How do we need function?
// ? 1. Resue the logic 
// ? 2. Avoid repetition
// ? 3. Maintain Code

// ! Syntax :
function identifiers(){
    // Code to be executed
}
identifiers(); // Function call statement

// ! Example :
// ! Non-Parameterized function : 
function greetUser(){
    console.log("function called");
}
console.log(greetUser);
greetUser();

// ! Parameterized function :
function greetUser2(name){
    console.log(`My name is ${name}!`);
}
greetUser2(); //name : undefined
greetUser2("Rahul");

// ! What is parameter ?
// * A variable declared at the time of function defination is called parameter.
// * Parameter -> Temporary variable which will replaced by an actual values.

// ! What is argument ?
// * A value which is passed inside the function call statement is called as aragument.

// ? ( Pass only when function will accept paramenter )
// * Argument -> Actual value

// ! What is Function Call Statement ?
// * A function call statement it is responsible to call or incoke the function.
// ? FCS = identifiers();

// ! What is a return statement ?
function sum(num1,num2){
    let result= num1 + num2;
    // console.log(result);
    return result;
}
// sum(10,20); // You will not get an output here

// ? 1st Way : When any function is returning some value and if you want to accrss it use the fcs directly inside the clg
console.log(sum(10,20,30)); // 30

// ? 2nd Way : When any function is returning some value and if you want to accrss it store fcs insside a variable anf print that variable 
let add = sum(10,20);
console.log(add); // 30

// ! What is argument keyword inside function ?
// * Argument keyword is uded to collect all the values which is passed inside the fcs.

function getNumbers(num1,num2,num3) {
    // console.log(num1);
    console.log(arguments);
    let arg = arguments;
    console.log(Array.isArray(arg)); // false
    console.log(arguments[0]);
    console.log(typeof arguments); // object   
}
getNumbers(10,20,30);

// ! This keyword inside function ?
function demo() {
    console.log(this); // window object -> global object
}

demo();

// window.alert("Hello");
// alert("Hello")
// prompt("Enter your name");

// ! Types of Function :

// ! 1. Named function :
// * The function which jas a name is called as named function.

// ! 2. Anonymous function :
// * The function which does not have a name is called as anonymous function.
// ? Syntax : function () { }

// ? 1st Way : Wrap the entire ananonymous function inside the empty () and call the empty() inside the outer ()

(function(){
    console.log("Anonymous function");
}());

// ! 3. Function as an expersion :
// ? 2nd Way :Store the entire function insdie a variable and call that variable.

let hamzaAliMazari = function(){
    console.log("Ghayal hu isleya ghatak hu");
    return "Wrath of God";
}
console.log(hamzaAliMazari);
hamzaAliMazari();
console.log(hamzaAliMazari());