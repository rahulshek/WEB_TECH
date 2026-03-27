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
    eDOB : "27/03/2026"
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