console.log("Scope in JS");

// ! What is Scope?
// * The scope is area of visibility or accessibility of a variable

// ? There are 5 Types of Scope in JS:
// ? 1. Global Scope
// ? 2. Block Scope
// ? 3. Function Scope or Local Scope
// ? 4. Script Scope
// ? 5. Module Scope -> We will learn this in JS modules Topic

// ! 1. Global Scope
// * The variables which is declared with var variable is called aas global
// * Window -> Global Scope
// ? Example: Var (excluding inside the function)

// debugger
var num = 10;
console.log(num); // global scope

// ! 2. Block Scope
// * The variables which is declared inside the block is called as block scoped variables.
// ? Example: let and const 

{
    let a = 10;
    const b =30;
    var c = 40;
    console.log(a);
    console.log(b);
    console.log(c); // global scope
    
}

// console.log(a); // error
console.log(c); //40

// ! 3. Function Scope
// * The variables which is declared inside the function is called as function scoped variables.
// * That means the variables will become local to the function.
// ? Example: let and const -> local or function scope
// ? Example: var -> local scope

function demo(){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
demo();

// ! 4. Script Scope
// * The variable which is directly declared insidee the js file (script) is called as script scoped variable.
// ? let and const -> script scope
// ? var -> global scope == script scope -> but var automatically attaches ti the window object -> that's why it is global scope

// ? But let and const are not atteached to window that's why it will be created outside of the global scope 

let num1=10;
const num2 = 20;
console.log(num1);
console.log(num2);
