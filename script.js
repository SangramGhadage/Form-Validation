document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
    // alert("Please enter data")

    checkData();
});

var username = document.getElementById("username");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");

function checkData(){
    var usernameval = username.value.trim();
    var emailVal = email.value.trim();
    var phoneVal = phone.value.trim();
    var passwordVal = password.value.trim();
    var cpasswordVal = password.value.trim();

    if(usernameval == ""){
        seterror(username,"Username can't be blank");
    }else{
        setsuccess(username);
    }

    if(emailVal==""){
        seterror(email,"Email can't be blank");
    }
    else if(!isEmail(emailVal)){
        seterror(email,"Email is not Valid");
    }
    else{
        setsuccess(email);
    }
    
    if(phoneVal==""){
        seterror(phone,"Number can't be blank");
    }else{
        setsuccess(phone);
    }

    if(passwordVal==""){
        seterror(password,"Password can't be blank");
    }else{
        setsuccess(password);
    }

    
    if(cpasswordVal ==""){
        seterror(cpassword,"Password can't be blank");
    }
    else if(passwordVal !== cpasswordVal){
        seterror(cpassword,"Password does not match");
    }
    else{
        setsuccess(cpassword);
    }
}

function seterror(u, msg){
    var parentBox = u.parentElement;
    parentBox.className ="form-content error";
    var span = parentBox.querySelector("span");
    var fa = parentBox.querySelector(".fas");
    span.innerText = msg
    fa.className="fas fa-exclamation-circle";

}

function setsuccess(u){
    var parentBox = u.parentElement;
    parentBox.className ="form-content success ";
    var fas = parentBox.querySelector(".fas");
    fas.className="fas fa-check-circle";

}

function isEmail(e){
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}