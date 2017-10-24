
function ValidateEmail(mail)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))  
  {  
    return (true)  
  }  
    alert("Invalid email")  
    return (false)  
}  

function checkForm(){
	var first_name = document.getElementById("first_name").value;
	var last_name = document.getElementById("last_name").value;
	var email_field = document.getElementById("mail").value;
	var phone_field = document.getElementById("tel").value;
	if (fName != "" && lName !="" && email != "" && phone != ""){
		if(mailVal(email) && telVal(phone)) {
			fff();
			setTimeout(function(){location.reload(true)}, 1000);
		}else if(!mailVal(email)){
			document.getElementById("mail").style.borderColor = "red";
		}
	}
	console.log(fName);
}

var form = document.getElementsByTagName('button')[0];
form.addEventListener("click", function(form){form.preventDefault()});
form.addEventListener("click", checkForm, false);
