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

const API_KEY_EHTERSCAN = "42UMICGJ3Q6P2AU3CQD4RMJGG985DTAP4F";
document.getElementById("find").addEventListener("click", check);

async function check(){
    let publicAddress = document.getElementById('public_address').value.trim();
    console.log(publicAddress);

    let adressData = generateLinkEtherscan(publicAddress);

    let response = await fetch(adressData);
    var data = await response.json();
    console.log(data);
}

/* This function generates link to send a request to API */
function generateLinkEtherscan(publicAdress){

    let firstPart = "https://api.etherscan.io/api?module=account&action=balance&address=";
    let secondPart = "&tag=latest&apikey=";

    /* Request is generating using part of first part of the link,
    public adress, second part of the link and api key. */
    let request = firstPart + publicAdress + secondPart + API_KEY_EHTERSCAN;

    return request;
}