import { generateLinkEtherscan } from "./common_functions.js";

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
    loadDataWallets("ETH", createCoinForWallets);
});

function createCoinForWallets(){

    let htmlStr = `<div class ="cHeader">
    <div class = "nameHolder">
      <img class="ICO" src="img/eth.png"></img>
      <p class = "nameHolder_name">Ethereum</p>
    </div>
    <div class = "Holder">
      <p id="nameHolder_amount">0x6B8A0306c60b610775550e903C0F87eFa0a89203</p>
    </div>
    <div class = "Holder">
    <p id="nameHolder_value">$1592.92</p>
    </div>
     </div>`

     var frag = document.createDocumentFragment(),
        temp = document.createElement('div');

    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    document.getElementById("left").append(frag);

}

function loadDataWallets(coinName, callback_createCoinForWallets){
    axios.post("http://localhost:3000/getAdressesAndDateETH", {
    }).then((response) => {
        loadCoinFromApiWallets(callback_createCoinForWallets, response.data, coinName);
    });
}

async function loadCoinFromApiWallets(callback_createCoinForWallets, addresses, coinName){
    const cryptocompare_apiEndpoint = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinName}&tsyms=USD`;
    const cryptocompare_result = await fetch(cryptocompare_apiEndpoint);
    const cryptocompare_json = await cryptocompare_result.json();

    const etherscan_apiEndpoint = generateLinkEtherscan(addresses);
    const etherscan_result = await fetch(etherscan_apiEndpoint);
    const etherscan_result_json = await etherscan_result.json();

    callback_createCoinForWallets();

    console.log(addresses)
    console.log(cryptocompare_json);
    console.log(etherscan_result_json);

}