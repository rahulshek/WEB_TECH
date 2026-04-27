let loginForm = document.getElementById('loginForm');
let usernameInput = document.getElementById('un');
let passwordInput = document.getElementById('pw');
loginForm.addEventListener('submit', (e)=>{    
    e.preventDefault();
    let a = un.value;
    let b = pw.value;
    let data = {uName : a , Password :b};
    //! console.log({uName : a , Password :b});
    let json_data = JSON.stringify(data);
    localStorage.setItem('userData', json_data);
    alert('Data Saved Successfully');
    window.location.href = 'index2.html';
})