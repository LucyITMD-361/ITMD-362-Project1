
function ValidateEmail(mail)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))  
  {  
    return (true)  
  }  
    alert("Invalid email")  
    return (false)  
}  
//firstname validation
function validateForm() {
    var x = document.forms["formInfo"]["first_name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
