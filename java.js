// simple Text validation
function checkFname()   /* This code for first name */
{
	var fname=document.getElementById("firstName").value;  
	if(fname == "")     // fname empty they show first name
	{
		document.getElementById('firstNameMsg').innerHTML = "Enter youra Name";
		document.getElementById('firstName').style.borderColor = "#FF0000";	
		return false;
	}
	else 
	{
        document.getElementById('firstName').style.borderColor = "#228B22";
		document.getElementById('firstNameMsg').innerHTML = "";
    }
	return true;
}

function checkEmail()
{
    var mail = document.getElementById("myEmail");
    var mailreg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!mailreg.test(mail.value))
    {
        document.getElementById('emailmsg').innerHTML = "Enter Correct email";
		document.getElementById('myEmail').style.borderColor = "#FF0000";			
        return false;
    }
	else
	{
		document.getElementById("emailmsg").innerHTML = "";
		document.getElementById('myEmail').style.borderColor = "#228B22";	
		
	}	
    return true;
}

function checkPhone(){
    var phone = document.getElementById("myPhone");
    var phoneNaN = /^[\d\.\-]+$/;
	
    if(!phoneNaN.test(phone.value))
    {
        document.getElementById('phoneMsg').innerHTML = "Enter Correct Phone Number";
		document.getElementById('myPhone').style.borderColor = "#FF0000";			
        return false;
    }
	else
	{
		document.getElementById("phoneMsg").innerHTML = "";
		document.getElementById('myPhone').style.borderColor = "#228B22";	
		
	}	
    return true;
}

function previewform(){
    var x = document.getElementById("firstName").value;
	document.getElementById("showFname").innerHTML = x;	

		
	var x = document.getElementById("myEmail").value;
	document.getElementById("showEmail").innerHTML = x;	
	
	var x = document.getElementById("myPhone").value;
	document.getElementById("showPhone").innerHTML = x;			
}