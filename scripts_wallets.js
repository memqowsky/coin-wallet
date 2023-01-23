
const API_KEY_EHTERSCAN = "42UMICGJ3Q6P2AU3CQD4RMJGG985DTAP4F";
document.getElementById("find").addEventListener("click", check);

async function check(){
    let publicAddress = document.getElementById('public_address').value.trim();
    console.log(publicAddress);

    let adressData = generateLink(publicAddress);

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