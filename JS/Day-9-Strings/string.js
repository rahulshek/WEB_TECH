console.log("String In JS");

// ! What is a String ?
// * It is a collection of characters

// ! Ways to Create a String
// ? 1. By using String Literal ✅
// ? 2. By using String Constructor  -> new String()

let str = new String("Hello");
console.log(str);
console.log(typeof str); // Output : object

// ! String Properties : length
let str2 = "JavaScript";
console.log(str2.length); // Output : 10

// ! String Methods
// ? 1. charAt():
let str3 = "Tom and Jerry Show"
console.log(str3.charAt(1)); // Output : T
console.log(str3.charAt(6)); // Output : a

// ? 2. indexOf():
console.log(str3.indexOf("m")); // Output : 2
console.log(str3.indexOf("Jerry")); // Output : 8

// ? 3. include():
console.log(str3.includes("Show")); // Output : true
console.log(str3.includes("Tom")); // Output : true

// ? 4. concat():
let str4 = "Hello";
let str5 = "World";
console.log(str4.concat(" ",str5)); // Output : Hello World

// ? 5. substring():
console.log(str3.substring(0,3)); // Output : Tom
console.log(str3.substring(4,8)); // Output : and   

// ? 6. slice():
console.log(str3.slice(0,3)); // Output : Tom
console.log(str3.slice(-4)); // Output : Show

// ? 7. trim():
let famousDialog = " pushpa...pushpa raj...jhukega nahi saala "
console.log(famousDialog.length);
console.log(famousDialog.trim());
// ? 8.trimStart():
console.log(famousDialog);
console.log(famousDialog.trimStart());
// ? 9.trimEnd():
// console.log(famousDialog);
console.log(famousDialog.trimEnd());
// ? 10. padStart():
let panCard = "1234"
let maskedPanCard = panCard.padStart(10,"*")
console.log(maskedPanCard);
// ? 11. padEnd():
let contactNumber = "1890"
let maskedContactNumber = contactNumber.padEnd(10,"*")
console.log(maskedContactNumber);
// ? 12. replace():
console.log(famousDialog.replace("pushpa","Bahubali"));
// ? 13. replaceAll():
console.log(famousDialog.replaceAll("pushpa","Bahubali"));
// ? 14. split():
let str6 = "Hello World"
console.log(str6.split(" ")); // Output : [ 'Hello', 'World' ]