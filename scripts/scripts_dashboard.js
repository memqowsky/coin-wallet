import { loadCoinFromApi } from "./common_functions.js";
import { capitalizeFirstLetter } from "./common_functions.js";
import { Coin } from "./common_functions.js";

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

function createCoin(name, data){
    switch(name){
        case "ETH":
            return new Coin("Ethereum", name, String(data.RAW.ETH.USD.PRICE), String(data.RAW.ETH.USD.CHANGEPCT24HOUR), String(data.RAW.ETH.USD.CIRCULATINGSUPPLYMKTCAP));
    }
}

function createCoinForDashboard(coinName, data){

    let coin = createCoin(coinName, data)
    coin.amount = 12.9348;

    let htmlStr = `<div class ="cHolder" id="ethHolder">
                   <div class = "nameHolder">
                     <img class="ICO" src="img/${coin.shortName}.png"></img>
                     <p class = "tokenName" id="${coin.shortName}">${coin.shortName.toUpperCase()}</p>
                     <p class = "cryptoName" id="${coin.name}">${capitalizeFirstLetter(coin.name)}</p>
                   </div>
                   <div class = "Holder">
                     <p id="${coin.shortName}_price">${coin.price}</p>
                   </div>
                   <div class = "Holder">
                     <p id="${coin.shortName}_amount">${coin.amount}</p>
                   </div>
                   <div class = "Holder">
                   <p id="${coin.shortName}_value">${coin.price * coin.amount}</p>
                   </div>
                   </div>`;

    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');

    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    document.getElementById("left").append(frag);
}

document.getElementById("Add").addEventListener("click", function(){
    loadCoinFromApi("ETH", createCoinForDashboard);
});



