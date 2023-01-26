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

const msg = document.getElementById("msg");
msg.style.color = "red";

form.addEventListener('submit', e => {
    e.preventDefault();
    //checkInputs();
    login();
})



const login = () => {

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // console.log(emailValue);
    // console.log(passwordValue);

    axios.post("http://localhost:3000/login", {
        email: emailValue,
        password: passwordValue
    }).then((response) => {

    if(response.data.message){
        console.log(response.data);
        msg.style.color = "red";
        msg.innerHTML = "There is no such user in the database";
    }else {
        location.href = "markets.html";
        console.log("SHOULD CONNECT NOW")
        msg.innerHTML = "";
    }
    });

}
