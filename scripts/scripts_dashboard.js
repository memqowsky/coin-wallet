import { loadData } from "./common_functions.js";
import { capitalizeFirstLetter } from "./common_functions.js";
import { Coin } from "./common_functions.js";
import { PRECISIONS } from "./common_functions.js";

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

    loadData("ETH", createCoinForDashboard);
});

document.getElementById("signOut").addEventListener("click", function(){  
    axios.post("http://localhost:3000/signOut", {
    }).then((response) => {
        if(response.data.userSignedOutSuccesfully === true){
            location.href='signin.html';
        }
    });
});

function createCoinForDashboard(coin){

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
                   <p id="${coin.shortName}_value">${(coin.price * coin.amount).toFixed([PRECISIONS.ETH_PRECISSION])}</p>
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



