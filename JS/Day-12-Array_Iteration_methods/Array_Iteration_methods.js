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
// * The filter() method is used to iterate on each and every element present inside the array to perform some operation on each element and return a new array with only those elements which satisfy the condition.

// ~ If condition -> true - element will be added to the new array
// ~ If condition -> false - element will not be added to the new array

// ? Syntax: arr.filter((currentValue, index, array) => {})
// ?Return Type : filtered array
let randomNums = [10, 15, 20, 25, 30, 35, 40];

let greaterThan20 = randomNums.filter((num) => {
    if(num > 20){
        return num;
    }
});
console.log(greaterThan20); // [25, 30, 35, 40]
console.log(randomNums); // [10, 15, 20, 25, 30, 35, 40]

let usingMap = randomNums.map((num) => {
   if(num > 20){
    return num;
}});
console.log(usingMap); // [undefined, undefined, undefined, 25, 30, 35, 40]


const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    brand: "LogiTech",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 59.99,
    category: "Electronics",
    brand: "Sony",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    category: "Footwear",
    brand: "Nike",
    inStock: false,
    rating: 4.6,
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 120.0,
    category: "Home Appliances",
    brand: "Philips",
    inStock: true,
    rating: 4.3,
  },
  {
    id: 5,
    name: "Notebook",
    price: 3.5,
    category: "Stationery",
    brand: "Classmate",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 6,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    brand: "Samsung",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 7,
    name: "Backpack",
    price: 45.0,
    category: "Accessories",
    brand: "American Tourister",
    inStock: false,
    rating: 4.4,
  },
  {
    id: 8,
    name: "Water Bottle",
    price: 15.99,
    category: "Lifestyle",
    brand: "Milton",
    inStock: true,
    rating: 4.1,
  },
  {
    id: 9,
    name: "Office Chair",
    price: 180.0,
    category: "Furniture",
    brand: "IKEA",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 10,
    name: "Wrist Watch",
    price: 150.0,
    category: "Accessories",
    brand: "Fossil",
    inStock: true,
    rating: 4.5,
  },
];

console.log(products);

// ^ Print the name of all the products 
let productNames = products.map((product) => {
    return product.name;
});
console.log(productNames);

// ^  Find out the category of all the products by category = "Electronics"
let electronicsPrducts = products.filter((product) => {
    if(product.category === "Electronics"){
        return product;
    }
});
console.log(electronicsPrducts);


//  ^ Find out the products which have price less than 100
// ?output : [{p1}, {p2}, {p3}]
let lessThan100 = products.filter((product) => {
    if(product.price < 100){
        return product;
    }
});
console.log(lessThan100);

// ! 3. reduce()
// * The reduce() method is used to iterate on each and every element present inside the array to perform some operation on each element and return a single value. 
// ? Syntax: arr.reduce((accumulator, currentValue, index, array) => {}, initialValue)[initialValue is optional])
// ? Return Type: It returns a single value.

let numsArray = [10, 20, 30, 40, 50];

let resukt = numsArray.reduce((acc, price) => {
    return acc + price;
});
console.log(resukt); // 150


// ^ Task : Find out the total price of all the products present in the products array.
let totalPrice = products.reduce((acc, product) => {
    return acc + product.price;
},0);
console.log(totalPrice);