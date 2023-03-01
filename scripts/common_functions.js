// import { coinsData } from "./coins_data.js";

export class Coin{
    constructor(name = "", shortName = "", price = "", change = "", marketCup = "", amount = 0){
        this.name = name;
        this.shortName = shortName;
        this.price = price;
        this.change = change;
        this.marketCup = marketCup;
        this.amount = amount;
    }
}

export function createHtmlElement(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

async function getCoin(string){

    const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${string}&tsyms=USD`;
    const response = fetch(URL);

    response.then((response) => response.json())
    .then((coinData) => {   
        console.log(coinData);

        switch(string){
            case "ETH":
                return new Coin("Ethereum", "ETH", "coinData.DISPLAY.ETH.USD.PRICE", "coinData.DISPLAY.USDT.USD.CHANGEPCT24HOUR" + '%', "DISPLAY.USDT.USD.CIRCULATINGSUPPLYMKTCAP");
        }
    });
}
 
export async function loadCoinFromApi(coinName, callback){

     const apiEndpoint = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinName}&tsyms=USD`;
     const result = await fetch(apiEndpoint);
     const jsonObj = await result.json();
 
    callback(coinName, jsonObj);
}

export function coinNameToData(shortName){
    switch(shortName){
        case "eth": return coinsData.ethData;
    }
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function signOut(){

    axios.post("http://localhost:3000/signout", {
    }).then((response) => {

    if(response.data == true){
        location.href='index.html';
    }
    });
}