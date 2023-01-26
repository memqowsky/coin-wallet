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

import { coinsData } from './coins_data.js';

// import {ethData, btcData, usdtData, bnbData, busdData, xrpData, adaData, dogeData, maticData, dotData, ltcData, solData, shibData} from './coins_data.js';
console.log(coinsData);