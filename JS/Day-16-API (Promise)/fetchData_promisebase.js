let cnt = document.querySelector(".container")

let p = fetch("https://fakestoreapi.com/users")
// console.log(p);
p.then((e)=>{return e.json()}).then((val)=>{

    val.map((val)=>{
        let id= val.id;
        let name = val.username;
        let email = val.email;
    cnt.innerHTML += `<div class="card">
    <h3>ID: ${id}</h3>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
</div>`
    })

}).catch((e)=>{console.log(e)})

