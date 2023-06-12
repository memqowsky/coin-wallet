import { generateLinkEtherscan } from "./common_functions.js";
import { Wallet } from "./common_functions.js";
import { PRECISIONS } from "./common_functions.js";

// Pobieramy element nadrzędny, który zawiera elementy cHeaders
const left = document.querySelector('.left');
const right = document.querySelector('.right');

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

document.getElementById("signOut").addEventListener("click", function(){
    axios.post("http://localhost:3000/signOut", {
    }).then((response) => {
        if(response.data.userSignedOutSuccesfully === true){
            location.href='signin.html';
        }
    });
});

document.getElementById("add").addEventListener("click", function(){
    window.location.href = "add.html";
    console.log("add");
});

function createCoinForWallets(wallet){

    console.log("WALLET");
    console.log(wallet);

    let htmlStr = `<div class ="cHeader activator">
                    <div class = "nameHolder activator">
                    <img class="ICO activator" src="img/${wallet.coinShortName}.png"></img>
                    <p class = "blockchainHolder activator">${wallet.blockchain}</p>
                    </div>
                    <div class = "Holder activator">
                    <p id="nameHolder_address" class="activator">${wallet.address}</p>
                    </div>
                    <div class = "Holder activator">
                    <p id="nameHolder_value" class="activator">$${Number(wallet.value).toFixed(PRECISIONS.ETH_PRECISSION)}</p>
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

async function loadDataWallets(coinName, callback_createCoinForWallets){
    axios.post("http://localhost:3000/getAdressesAndDateETH", {
    }).then((response) => {
        loadCoinFromApiWallets(callback_createCoinForWallets, response.data, coinName);
    });
}

function createWallet(coinName, cryptocompare_json, etherscan_result_json, addressesData, addressIndex){

    let fixedAmount = ((Number(etherscan_result_json.result[addressIndex].balance)/1000000000)/1000000000).toFixed(2);
    let value =  cryptocompare_json.RAW.ETH.USD.PRICE * fixedAmount;

    return new Wallet(coinName, "Ethereum", etherscan_result_json.result[addressIndex].account, value, String(addressesData[addressIndex].created_at) );
}

async function loadCoinFromApiWallets(callback_createCoinForWallets, addressesData, coinName){
    const cryptocompare_apiEndpoint = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinName}&tsyms=USD`;
    const cryptocompare_result = await fetch(cryptocompare_apiEndpoint);
    const cryptocompare_json = await cryptocompare_result.json();

    console.log("cryptocompare_json", cryptocompare_json);

    const etherscan_apiEndpoint = generateLinkEtherscan(addressesData);
    const etherscan_result = await fetch(etherscan_apiEndpoint);
    const etherscan_result_json = await etherscan_result.json();

    console.log("Addresses:", addressesData);
    console.log("etherscan_result_json", etherscan_result_json.result);

    for(let addressIndex = 0; addressIndex < addressesData.length; ++addressIndex){
        callback_createCoinForWallets(createWallet(coinName, cryptocompare_json, etherscan_result_json, addressesData, addressIndex));
    };
}