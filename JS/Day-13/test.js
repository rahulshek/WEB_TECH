console.log("hii...");

//^ --------------------------------- Add function ------------------------------------------------

function add(a=0,b=0){
    return a+b
}

console.log(add()); 
console.log(add(10)); 
console.log(add(10,20)); 
console.log(add(10,20,30)); 


let add2 = (a=0,b=0) => a+b;
let add3 = (a=0,b=0) => {return a+b;}

console.log(add2(20,30));
console.log(add3(20,60));


// ^---------------------------------- Check The Length odd/even ---------------------------------

// let checkEvenOdd = (len) => {
//     if(len %2 == 0){
//         alert("even");
//     }
//     else{
//         alert("odd");
//     }};

// let n = prompt("Enter your name : ");
// len = n.length;
// checkEvenOdd(len);

// ^------------------------------- Convert to uppercase --------------------------------------------

// let convertToUpperCase = (str) => {
//     return str.toUpperCase();
// }
// let na = prompt("Enter your name : ");
// console.log(convertToUpperCase(na));

// ^------------------------------- Electric bill calculator --------------------------------------------

// unit_range  charges
// 0-50         7/unit
// 51-150       8/unit
// 151-200      9/unit
// 200+         10/unit


let calBil= (unit) =>{
    let totalBill=0
    if (unit>0 && unit<=50){
        totalBill=unit*7   
    }
    else if (unit>50 && unit<=100){ 
        totalBill=50*7 + (unit-50)*8
    }

    else if (unit>100 && unit<=200){
        totalBill=50*7 + 50*8 + (unit-100)*9
    }
    else if (unit>200){
        totalBill=50*7 + 50*8 + 100*9 + (unit-200)*10
    }
    console.log(totalBill);
}

let uni= prompt("Enter Units")
calBil(Number(uni))

