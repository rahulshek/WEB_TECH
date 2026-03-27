console.log("Array in JS");

//! What is Array?
//* Array is a special type of object in JavaScript.
//* Array is a collection elements that may be homogenous or hetrogenous types of data.

//?Array divided into two parts:
//?1.Homogenous Array:
//* The array which contains same type of data known as Homogenous Array.
let Numarr=[10,20,30,40]
let names=["John","Smith","Chalse"]

//?Hetrogenous array:
//* The array which contains different types of data is knpwn as hetrogenous Array.
let mixArr=[10,"hello",true,null,undefined,[1,2,3],function (){ console.log('Function inside array');},{name:"john",age:20}]
console.log(mixArr);

//! Array Property; Length
//? 1.Getting the length of the array:
console.log(mixArr.length);

//! Accessing the array elements:
//? Syntax: aa-ref_var=[index]
console.log(mixArr[0]);
console.log(mixArr[1]);
console.log(mixArr[5][2]);
mixArr[6]();

console.log(mixArr[7].name);
console.log(mixArr[7].age);

let numbers = [1,2,3,4,5,6,7,8,9,0]
console.log(numbers);

//? Setting the legnth of an array:
numbers.length=5;
console.log(numbers);

//! 2.By using Array Constructor:
//? nnew Array();
let arr= new Array(5);
console.log(arr);

console.log(typeof arr);
console.log(typeof []);
console.log(typeof numbers);

//! Array static methods:
//? 1.Array.from():
//* The Array.from() methos is used to convert the iterable object into array.

let str = 'Hello';
let strArr = Array.from(str);
console.log(strArr);

//? 2.Array.isArray():
//* Array.isArray method is used to check the given passed array is array or not?
//* is array -> true
//* not array -> false
console.log(Array.isArray(str));
console.log(Array.isArray(strArr));

//? 3.Array.of():
//* The Array.of() method is used to create an array for given values.

let newArr = Array.of(1,2,3,4,5,6,7,8);
console.log(newArr);
console.log(Array.of(1,2,3,4,5));

//! Array Instance Methods:
//? 1.push():
//* It is used to add new elements from the end in array
//? Syntax: arr.push(ele1,ele2,..ele-N)
let southheros=["Dhanush","Yash","Thalapathy"];
southheros.push("Prabhas");
console.log(southheros);

//? 2.pop():
//* It is used to remove elements from end one by one by each calling.
//? Syntax: arr.pop()
southheros.pop();
console.log(southheros);

//? 3.unshift():
//* It is used to add new elements from the start in array
//? Syntax: arr.unshift(ele1,ele2,..ele-N)
southheros.unshift("Jr.NTR");
console.log(southheros);

//? 4.shift():
//* It is used to remove the elements from the start in Array.
//? Syntax: arr.shift()
southheros.shift();
console.log(southheros);

//? 5.slice():
//* It is used to extract elements from the array based o start index and end index.
//? Syntax: arr.slice(startIndex,endIndex)
console.log(southheros);
console.log(southheros.slice(1,3));

//? 6.splice():
//* It is used to remove the array elements from the specified index value with the delete count.
//? Syntax: arr.splice(startIndex,EndIndex,[replaceele1,replaceele2,..,replcaceele-N])
let cricketers = ["MSD","Virat","Sachin","Hardik"];
console.log(cricketers);
// console.log(cricketers.splice(2,1));
console.log(cricketers.splice(2,1,"Rohit"));

//? 7.indexOf():
//* It is used to return the index value of the given element.
//? Syntax: arr.indexOf(element)
console.log(cricketers.indexOf("MSD"));

//? 8.includes():
//* It is used to check given elements is present inside the array or not.
//? Syntax: arr.includes(element)
console.log(cricketers.includes("Virat"));

//? 9.reverse():
//* It is used to reverse the given array.
//? syntax: arr.reverse()
console.log(cricketers);
console.log(cricketers.reverse());

//? 10.join():
//* It is used to adds all the elements of an array into a string, separated by the specified separator string.
//? syntax: arr.join(separator) -> default (,) comma
console.log(cricketers.join());
console.log(cricketers.join(""));
console.log(cricketers.join("-"));

//? 11.concat():
//* It is used to combine two or more arrays
//? syntax: arr.concat(arr | values)
let arr1 = [1,2];
let arr2 = [3,4];
console.log(arr1.concat(3,4));
console.log(arr1.concat(arr2));

//? 12.flat():
//* Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//? syntax: arr.flat(depth) by default -> depth = 1

let nestedArr = [1,2,3,[4,5,[6,[7,8,[9]]]]];
console.log(nestedArr);
// console.log(nestedArr[3][0]);
console.log(nestedArr.flat());
// console.log(nestedArr.flat());
console.log(nestedArr.flat(2));
console.log(nestedArr.flat(3));
console.log(nestedArr.flat(4));
console.log(nestedArr.flat(Infinity));
//? 13.sort():
//* Sorts an array in place . This method mutates the array and returns a reference to the same aaray 
//? synntax: arr.sort(compareFunc);
let marvelHeros = ["Iron Man","Thor","Hulk","Spider Man"];
console.log(marvelHeros);
console.log(marvelHeros.sort());

let numberArr = [2,10,100,20,10001,101,200,54]
console.log(numberArr.sort());
console.log(numberArr.sort(
    (a,b) =>{
        return a-b
    }
)); //(8) [2, 10, 20, 54, 100, 101, 200, 10001]

console.log(numberArr.sort());
console.log(numberArr.sort(
    (a,b) =>{
        return b-a
    }
)); //(8) [10001, 200, 101, 100, 54, 20, 10, 2]
