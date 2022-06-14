let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let firstname = id("firstname");
let lastname = id("lastname");
let email = id("email");
let password = id("password");
let form = id("form");

let errorMsg = classes("error");
let successIcon = classes("success-icon");
let failureIcon = classes("failure-icon");

form.addEventListener ("submit", (e) => {
    e.preventDefault();

    validation(firstname, 0, "firstname cannot be empty");
    validation(lastname, 1, "lastname cannot be empty");
    validation(email, 2, "looks like this is not an email");
    validation(password, 3, "password cannot be empty");
});

let validation = (id, serial, message) => {
   if (id.value.trim() === "") {
       errorMsg[serial].innerHTML = message;
       
       id.style.border = "2px solid red";
       failureIcon[serial].style.opacity = "1";
       successIcon[serial].style.opacity = "0";
   } 
   else {
       errorMsg[serial].innerHTML = "";

       id.style.border = "2px solid green";
       failureIcon[serial].style.opacity = "0";
       successIcon[serial].style.opacity = "1";

   }
}