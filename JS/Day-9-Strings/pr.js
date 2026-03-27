
// create a function  which will return the extansion eg img.png output = png

function getExtension(filename) {
    return filename.split('.').slice(1);
}
console.log(getExtension("img.png")); // "png"
console.log(getExtension("index.html")); // "png"

// ? Count vowel of the string 
function countVowel(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
       if(vowels.includes(str[i])){
        count++;
        
    }
    return count;
}
console.log(countVowel("Hello")); // 2