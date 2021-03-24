window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById('myForm');
    form.onsubmit = checkpass;
}

function checkpass() {
    let pass = document.getElementById('password').value;
    let repass = document.getElementById('repassword').value;

    console.log(pass)
    console.log(repass)
    
    if (repass == pass) {
        alert ("Register Completed");
        return true;
    }
    
    else if (repass != pass) {
        alert ("Register Failed");
        return false;
    } 
}

