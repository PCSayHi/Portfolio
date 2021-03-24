window.onload = loginLoad;	

function loginLoad(){
	var form = document.getElementById('myLogin');
    form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams (queryString);
	const username = urlParams.get('username');
	const password = urlParams.get('password');

	var A = document.forms["myLogin"]["username"].value;
	var B = document.forms["myLogin"]["password"].value;

	if(A == username && B == password){
		alert("Sucess");
	}
	
	else {
		alert("Unsucess please check Username or Password again");
		return false;
	}
}
