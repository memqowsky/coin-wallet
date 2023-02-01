import { createCoin } from "./common_functions.js";

// var fragment = createHtmlElement('<button type="button" id="signIn">Sign in</button>');
// document.getElementById("rightMenu").insertBefore(fragment, null);

/* Some tabs are available only for logged users, so we need
   to check, if session is active, i mean if user us signed in.
   Session become active when user signs in */
   document.addEventListener("DOMContentLoaded", function(){
  
    axios.post("http://localhost:3000/checkSession", {
    }).then((response) => {
        if(response.data.ACTIVE_SESSION === true){
            console.log("SESION EXISTS");
            console.log(response.data);
            document.getElementById("actualUser").innerHTML = response.data.ACTIVE_USER;
        }
        else {
            console.log(response.data.message);
            location.href='signin.html';
        }
    });
});

document.getElementById("signOut").addEventListener("click", function(){
  
    axios.post("http://localhost:3000/signOut", {
    }).then((response) => {
        if(response.data.userSignedOutSuccesfully === true){
            location.href='signin.html';
        }
    });

});

let coinObj = {name: "ABC"};

document.getElementById("Add").addEventListener("click", function(){
    document.getElementById("left").append(createCoin());
});