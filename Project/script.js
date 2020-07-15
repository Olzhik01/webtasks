

admin_login = "admin";
admin_password = "admin";

function sign_in(){

	user_login = document.getElementById("login").value;
	user_password = document.getElementById("password").value;
	if(user_login==admin_login && user_password==admin_password){
		window.location.replace("file:///C:/Users/HP/Desktop/Webextensive/Project/index.html")
	}
	else{
		document.getElementById("alert").style.display="block";
	}
}
