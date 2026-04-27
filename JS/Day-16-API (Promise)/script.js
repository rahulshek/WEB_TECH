console.log("hii");

let p = new Promise((resolve, reject) => {
    let flag = true;
    if (flag) {
        resolve("connected to DB");
    } else {
        reject("Connection lost");
    }
})

p.then((e) => {
    console.log(e);
}).catch((e) => {
    console.error(e);
})

console.log(p);