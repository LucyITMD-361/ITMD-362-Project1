
function ValidateEmail(mail){  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)){  
    return (true)  
  }  
    alert("Invalid email")  
    return (false)  
}  
//firstname validation
function validateForm() {
    var x = document.forms["formInfo"]["first_name"].value;
    if (x == "") {
        alert("first name must be filled out");
        return false;
    }
}
//lastname
function validateForm() {
    var x = document.forms["formInfo"]["last_name"].value;
    if (x == "") {
        alert("last name must be filled out");
        return false;
    }
}
//phone
function validateForm() {
    var x = document.forms["formInfo"]["phone_field"].value;
    if (x == "") {
        alert("phone number must be filled out");
        return false;
    }
}

