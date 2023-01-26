import { createHtmlElement } from "./common_functions.js";

var fragment = createHtmlElement('<button type="button" id="signIn">Sign in</button>');
document.getElementById("rightMenu").insertBefore(fragment, null);

/* Some tabs are available only for logged users, so we need
   to check, if session is active, i mean if user us logged in.
   Session become active when user logs in */
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