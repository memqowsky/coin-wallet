// import { ethData } from './coins_data.js';
async function load(){
    let {ethData} = await import('./coins_data.js');
}
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
        load();
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