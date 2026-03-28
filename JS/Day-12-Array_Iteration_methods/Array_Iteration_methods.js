console.log("Array_Iteration_methods");

// ! What are Array Iteration Methods in JavaScript?
// * The array iteration methods is used to iterate on each and every element present inside the array to perform some operation on each element.

// * There are mainly 3 array iteration methods in JavaScript which are as follows:
// ? 1. map()
// ? 2. filter()
// ? 3. reduce()

// ? 4. forEach()
// ? 5. find()

// * Thses method are considered as advanced array methods.

// ! 1. map()
// * The map() method is used to iterate on each and every element present inside the array to perform some operation on each element and return a new array.
// * It does not change the original array but returns a new array with the modified values.

// ? Syntax: arr.map((currentValue, index, array) => {})
// ? Return Type: It returns a new array with the modified values.

let nums = [10,20,30,40,50];

let newNums = nums.map((num) => {
    return num * 2;
})
console.log(newNums); // [20, 40, 60, 80, 100]
console.log(nums); // [10, 20, 30, 40, 50]

let names=["Smith", "John", "Doe", "Jane"];

let newNames = names.map((name) => {
    return name.toUpperCase();
})
console.log(newNames); // ["SMITH", "JOHN", "DOE", "JANE"]
console.log(names); // ["Smith", "John", "Doe", "Jane"]

// ! 2. filter()