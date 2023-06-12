var ethData, btcData, usdtData, bnbData, busdData, xrpData, adaData, dogeData, maticData, dotData, ltcData, solData, shibData;

async function getapi() {

    const ETH_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD";
    const ethPrice = document.getElementById("eth_price");
    const ethChange = document.getElementById("eth_change");
    const ethMarketCup = document.getElementById("eth_marketcap");

    const ETHresponse = await fetch(ETH_URL);
    ethData = await ETHresponse.json();
    ethPrice.innerHTML = ethData.DISPLAY.ETH.USD.PRICE;
    ethChange.innerHTML = ethData.DISPLAY.ETH.USD.CHANGEPCT24HOUR + '%';
    ethMarketCup.innerHTML = ethData.DISPLAY.ETH.USD.CIRCULATINGSUPPLYMKTCAP;

    console.log("ZALADOWALO ETH DATA: ", ethData);

    const BTC_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD";
    const btcPrice = document.getElementById("btc_price");
    const btcChange = document.getElementById("btc_change");
    const btcMarketCup = document.getElementById("btc_marketcap");

    const BTCresponse = await fetch(BTC_URL);
    btcData = await BTCresponse.json();
    btcPrice.innerHTML = btcData.DISPLAY.BTC.USD.PRICE;
    btcChange.innerHTML = btcData.DISPLAY.BTC.USD.CHANGEPCT24HOUR + '%';
    btcMarketCup.innerHTML = btcData.DISPLAY.BTC.USD.CIRCULATINGSUPPLYMKTCAP;

    const USDT_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=USD";
    const usdtPrice = document.getElementById("usdt_price");
    const usdtChange = document.getElementById("usdt_change");
    const usdtMarketCup = document.getElementById("usdt_marketcap");

    const USDTresponse = await fetch(USDT_URL);
    usdtData = await USDTresponse.json();
    usdtPrice.innerHTML = usdtData.DISPLAY.USDT.USD.PRICE;
    usdtChange.innerHTML = usdtData.DISPLAY.USDT.USD.CHANGEPCT24HOUR + '%';
    usdtMarketCup.innerHTML = usdtData.DISPLAY.USDT.USD.CIRCULATINGSUPPLYMKTCAP;

    const BNB_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD";
    const bnbPrice = document.getElementById("bnb_price");
    const bnbChange = document.getElementById("bnb_change");
    const bnbMarketCup = document.getElementById("bnb_marketcap");

    const BNBresponse = await fetch(BNB_URL);   
    bnbData = await BNBresponse.json();
    bnbPrice.innerHTML = bnbData.DISPLAY.BNB.USD.PRICE;
    bnbChange.innerHTML = bnbData.DISPLAY.BNB.USD.CHANGEPCT24HOUR + '%';
    bnbMarketCup.innerHTML = bnbData.DISPLAY.BNB.USD.CIRCULATINGSUPPLYMKTCAP;

    const BUSD_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BUSD&tsyms=USD";
    const busdPrice = document.getElementById("busd_price");
    const busdChange = document.getElementById("busd_change");
    const busdMarketCup = document.getElementById("busd_marketcap");

    const BUSDresponse = await fetch(BUSD_URL);
    busdData = await BUSDresponse.json();
    busdPrice.innerHTML = busdData.DISPLAY.BUSD.USD.PRICE;
    busdChange.innerHTML = busdData.DISPLAY.BUSD.USD.CHANGEPCT24HOUR + '%';
    busdMarketCup.innerHTML = busdData.DISPLAY.BUSD.USD.CIRCULATINGSUPPLYMKTCAP;
}

getapi();
var coinsData = {ethData, btcData, usdtData, bnbData, busdData, xrpData, adaData, dogeData, maticData, dotData, ltcData, solData, shibData};
export {ethData};