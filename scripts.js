const ETH_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD";

const ethPrice = document.getElementById("eth_price");
const ethChange = document.getElementById("eth_zmiana");
const ethMarketCup = document.getElementById("eth_kapitalizacja");

getapi(ETH_URL);;;;

async function getapi(ETH_URL) {
    
    const response = await fetch(ETH_URL);   
    var data = await response.json();
    console.log(data);
    ethPrice.innerHTML = data.DISPLAY.ETH.USD.PRICE;
    ethChange.innerHTML = data.DISPLAY.ETH.USD.CHANGEPCT24HOUR + '%';
    ethMarketCup.innerHTML = data.DISPLAY.ETH.USD.CIRCULATINGSUPPLYMKTCAP;

}