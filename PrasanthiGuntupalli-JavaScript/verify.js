function on_click() {
	var mailid = document.getElementById('mailId')
	var password = document.getElementById('inputPassword')
	if(mailid.value.length==0 && password.value.length==0)
		alert("Username and Password cannot be empty.")
	else if(mailid.value.length==0)
		alert("Username cannot be empty.")
	else if(password.value.length==0)
		alert("Password cannot be empty.")

}