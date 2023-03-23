// import { coinsData } from "./coins_data.js";

export const PRECISIONS = {ETH_PRECISSION: 2};

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

const API_KEY_EHTERSCAN = "42UMICGJ3Q6P2AU3CQD4RMJGG985DTAP4F";

/* This function generates link to send a request to API */
export function generateLinkEtherscan(publicAdressessObject){

    console.log("adressess: ", publicAdressessObject);

    let publicAdressesMerged="";
    for(let adressData in publicAdressessObject) {
        if(publicAdressessObject.hasOwnProperty(adressData)) {
            for (let adress in publicAdressessObject[adressData]) {
                if (publicAdressessObject[adressData].hasOwnProperty(adress)) {
                    if(publicAdressessObject[adressData][adress].length > 0){
                        publicAdressesMerged = publicAdressesMerged + publicAdressessObject[adressData][adress] + ",";
                    }
                }
            } 
        }
    }

    let publicAdressesMergedCutted = publicAdressesMerged.substring(0, publicAdressesMerged.length-1);

    console.log("publicAdressesMergedCutted", publicAdressesMergedCutted);

    let firstPart = "https://api.etherscan.io/api?module=account&action=balancemulti&address=";
    let secondPart = "&tag=latest&apikey=";
    let request = firstPart + publicAdressesMergedCutted + secondPart + API_KEY_EHTERSCAN;
    return request;
}

export function createCoin(name, data, amount){
    switch(name){
        case "ETH":
            return new Coin("Ethereum", name, String(data.RAW.ETH.USD.PRICE), String(data.RAW.ETH.USD.CHANGEPCT24HOUR), String(data.RAW.ETH.USD.CIRCULATINGSUPPLYMKTCAP), ((Number(amount)/1000000000)/1000000000).toFixed([PRECISIONS.ETH_PRECISSION]));
    }
}

async function loadCoinFromApi(callback_createCoinForDashboard, addresses, coinName){

    const cryptocompare_apiEndpoint = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinName}&tsyms=USD`;
    const cryptocompare_result = await fetch(cryptocompare_apiEndpoint);
    const cryptocompare_json = await cryptocompare_result.json();

    const etherscan_apiEndpoint = generateLinkEtherscan(addresses);
    const etherscan_result = await fetch(etherscan_apiEndpoint);
    const etherscan_result_json = await etherscan_result.json();

    let amount = 0;
    for(let i=0; i<etherscan_result_json.result.length; ++i){
        amount += Number(etherscan_result_json.result[i].balance);
    }
    if(amount > 0){
        callback_createCoinForDashboard(createCoin(coinName, cryptocompare_json, amount));
    }
}

export async function loadData(coinName, callback_createCoinForDashboard){
    axios.post("http://localhost:3000/getAdressesETH", {
    }).then((response) => {
        loadCoinFromApi(callback_createCoinForDashboard, response.data, coinName);
    });
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
    axios.post("http://localhost:3000/signout",{
    }).then((response) => {

    if(response.data == true){
        location.href='index.html';
    }
    });
}