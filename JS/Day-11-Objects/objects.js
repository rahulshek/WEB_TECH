console.log("Object's In JS");

// ! What is Object in JS?
// * An object is a collection of multiple key value pairs.
// * or
// * An object is representaion of real-world entity in programming way.
// * When you console (print) the object  you might not be seen same order of the properties that you have written.
// ? Property : key + value 

// ! How we can create object : 
// * There are 2 way's to create object in JS
// ? 1. By using object literal -> {}
// ? 2. By using Object constructor -> new Object()

// ? Syntax to create an object :
// let obj_ref_var ={
//     key1 : "value1",
//     key2 : "value2",
//     .
//     .
//     .
//     keyN : "valueN"
// }

// ? Syntax to create an object using Object constructor :
// let obj_ref_var = new Object();
// obj_ref_var.key1 = "value1";
// obj_ref_var.key2 = "value2";
// .
// .
// .
// obj_ref_var.keyN = "valueN";

let employee = {
    eName : "John",
    eAge : 20,
    eSalary : 20000,
    eIsAvailable : true,
    ePersonalDetails : {
        eIsMarried : undefined ,
        eChild : null,
    },
    eDOB : "27/03/2026",
    walk(){
        console.log("Employee is walking here and there ");
    }
}
console.log(employee);

// ! How to access the object properties :
// ? Syntax : obj_ref_var.key_name

console.log(employee.eName);
console.log(employee.eAge);
console.log(employee.eDOB);
console.log(employee.ePersonalDetails.eIsMarried);

// ! Hoe to update the existing properties of the object :
// ? Syntax : obj_ref_var.key_name = new_value
employee.ePersonalDetails.eIsMarried = "Mingle";
console.log(employee);

// ! How to add new properties in the object :
// ? Syntax : obj_ref_var.new_key_name = new_value
employee.eCity= "Ahmedabad" ;
console.log(employee);

// ! How to delete the existing properties of the object :
// ? Syntax : delete obj_ref_var.key_name
delete employee.eDOB;
console.log(employee);

// ! What is a method in Object ?
// * A method is a simple JS fucntion present inside the object.

employee.task = function(){
    console.log("Employee has so many tasks to do");
}

console.log(employee);
employee.task(); // Employee has so many tasks to do
employee.walk(); // Employee is walking here and there

// ! Object Static Method :

// ? 1. Object.keys(obj):
// * Returns all the keys of an object in the form of array.
// ^ Syntax : Object.keys(obj)
console.log(Object.keys(employee));
// (7) ['eName', 'eAge', 'eSalary', 'eIsAvailable', 'ePersonalDetails', 'walk', 'eCity']

// ? 2. Object.values(obj):
// * Returns all the values of an object in the form of array.
// ^ Syntax : Object.values(obj)
console.log(Object.values(employee));
// (7) ['John', 20, 20000, true, {…}, ƒ, 'Ahmedabad']

// ? 3. Object.entries(obj):
// * Returns all the key value pairs of an object in the form of array.
// ^ Syntax : Object.entries(obj)
console.log(Object.entries(employee)); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

// ? 4. Object.fromEntries(iterable):
// * Returns an object from the iterable of key value pairs.
// ^ Syntax : Object.fromEntries(iterable)
let arr = [["name","Spideman"],
           ["Power","Nets"]];
console.log(Object.fromEntries(arr));

// ? 5. Object.assign(targetObj, newObj1, newObj2, ... , newObjN):
// * Copy all the properties from the source objects to the target object.
// ^ Syntax : Object.assign(targetObj, newObj1, newObj2, ... , newObjN)


let obj1 = {
    name : "John",
    age : 20
}
let obj2 = {
    city : "Ahmedabad"
}
let obj3 = {
    salary : 20000
}
let mergeObj = Object.assign({},obj1,obj2,obj3);
console.log(mergeObj);