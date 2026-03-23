console.log("Advanced Function");

// ! 7. Higher Order Function : (HOF)
// * It stands for Higher Order Function in JS
// * A function which will accept another function as a parameter and return a function is called Higher Order Function

// ! HOF -> calculate

function calculater(num1,num2,applyfunction) {
    return applyfunction(num1,num2);
}

function add(num1,num2) {
    return num1 + num2;
}

function sub(num1,num2) {
    return num1 - num2;
}

let result = calculater(10,20,add);
console.log(result);
let result1 = calculater(10,20,sub);
console.log(result1);

// ! 8. Nested Function : (NF)
// * A function inside another function is called Nested Function
function outerFun() {
    console.log("This is a outer fun");
    let outervar="John";
    // console.log(outervar);
    
    function innerFun() {
        console.log("This is a inner fun");
    }
    innerFun();
}

outerFun();

// ! 9. Closure : (CL)

// * It means rembering the value of outer function variable inside the inner function.
// * When you are trying to access the outer function's varibale inside the inner function then it is called Closure.

function outerCounter() {
    let count = 0;
    function innerCounter() {
        count++;
        console.log(count);
    }
    return innerCounter;   
}

// outerCounter();
// outerCounter();
// outerCounter();

console.log(outerCounter());
let inner = outerCounter();
inner();
inner();
inner();


// ! 10. Function Currying : (FC)

// * It will accept one value at a time and return a function is called as function currying.

function fun1(a){
    console.log(a);
    return function(b){
        console.log(a+b);
        return function(c){
            console.log(c);
            return a+b+c;
        }
    }
}
console.log(fun1(10)(20)(30));

// ! 11. Generator Function : (GF)

// * It is a special type of function in JS
// * It will pause and resuume its execution

// ~ Yeild :- It store or hold the value of the function . (It is a responsible to pause the execution of a function)

// ~ next() : The .next() function it will return on object which has 2 properties {value,done}.It is reposnible to resume the execution of a function.

// ? Syntax: function* identifiers() {...}

function* genFun() {
    yield 10;
    yield 20;
    yield 30;
    return "Completed"
}

let genOutput = genFun();
console.log(genOutput.next());
console.log(genOutput.next());
console.log(genOutput.next());
console.log(genOutput.next());