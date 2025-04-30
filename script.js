function form(){
    if(document.form1.name.value==""){
        alert("please fill the name");
        document.form1.name.focus();
        return false;
    }
    else if(document.form1.email.value==""){
alert("please fill the email");
document.form1.email.focus();
return false;
}
else if(document.form1.password.value==""){
alert("please fill the password");
document.form1.password.focus();
return false;
}
else if(document.form1.confirm.value==""){
alert("please fill the password");
document.form1.confirm.focus();
return false;
}
else if(document.form1.dob.value==""){
alert("please fill the date");
document.form1.dob.focus();
return false;
}
else if(document.form1.phone.value==""){
alert("please fill the number");
document.form1.awe.focus();
return false;
}
else if(document.form1.address.value==""){
alert("please fill the address");
document.form1.awe.focus();
return false;
}
else if(document.form1.age.value==""){
alert("please fill the age");
document.form1.awe.focus();
return false;
}
}