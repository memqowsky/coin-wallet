/* If user is signed he shouldn't be able to see that tab */
document.addEventListener("DOMContentLoaded", function(){
    
    axios.post("http://localhost:3000/checkSession", {
    }).then((response) => {
        
        if(response.data.ACTIVE_SESSION === true){
            console.log("SESION EXISTS");
            location.href='dashboard.html';
        }
        else {
        console.log(response.data.message);
    }
});
});

const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const repPassword = document.getElementById("repPassword");

const msg = document.getElementById("msg");
msg.style.color = "red";

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    register();
})

function validateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validRegex)) {
      return true;
    } else {
    msg.innerHTML = "Invalid adress email";
      return false;
    }
}

function checkPasswords(){

    const passwordValue = password.value.trim();
    const repPasswordValue = repPassword.value.trim();

    if(passwordValue === repPasswordValue){
        return true;
    }

    console.log("password: ", password);
    console.log("repPassword: ", repPassword);
    console.log("Passwords don't match  ");
    msg.innerHTML = "Passwords don't match"
    return false;
}

function checkInputs(){
    if(validateEmail() && checkPasswords()){
        // checkUser();
        return;
    }
}

const register = () => {

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // console.log(emailValue);
    // console.log(passwordValue);

    axios.post("http://localhost:3000/register", {
        email: emailValue,
        password: passwordValue
    }).then((response) => {

    if(response.data.message){
        console.log(response.data);
        msg.style.color = "red";
        msg.innerHTML = "Can't register";
    }else {
        location.href = "markets.html";
        console.log("SHOULD ADD USER NOW")
        msg.innerHTML = "";
    }
    });

}
