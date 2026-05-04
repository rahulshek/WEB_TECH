// console.log("hii");

let calBil = (day)=>{
    let totalBill=1000*(day)
    if (day<=2){
        totalBill=totalBill-(totalBill*0.05)
    }
    else if (day>2 && day<=10){
        totalBill=totalBill-(totalBill*0.07)
    }
    else {
        totalBill=totalBill-(totalBill*0.1)
    }
    console.log(totalBill);
}
    
let stayDay = prompt("Enter the total number of day's : ")
calBil(stayDay)