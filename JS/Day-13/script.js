console.log("Object Creation");

let userData = [
    {
        uName:"ABC",
        course:"PFS",
        skills:["sql","Python"]
    },
    {
        uName:"DEF",
        course:"PFS",
        skills:["sql","Python","Manual","Web Technology"]
    },
    {
        uName:"GHI",
        course:"PFS+DI",
        skills:["sql","Lib","Python"]
    },
    {
        uName:"JKL",
        course:"JFS",
        skills:["sql","Java","Manual","Web Technology"]
    }
]

//? filter the student who have taken PFS course

let pfsStudents = userData.filter(student => student.course === "PFS");
console.log(pfsStudents);

//? Check the stundet who have cooman Subject Web technology

let wtCom = userData.filter( user => user.skills.includes("Web Technology") )
console.log(wtCom);

//?  Collect Mob number from user and out must be ********12

let mobNum = prompt("Enter your mobile number");
let lastDigit = mobNum.slice(-2)
console.log("********"+lastDigit);

//? collect email id from user and output must be ****@gmail.com

let email = prompt("Enter a email id ")
let emailId = email.split("@");
let len = emailId[0].length
let fisPrt= "x".repeat(len)
let lasPrt=emailId.slice(-1)
console.log(fisPrt+"@"+lasPrt);