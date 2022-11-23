async function getapi(ETH_URL) {

    const ETH_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD";
    const ethPrice = document.getElementById("eth_price");
    const ethChange = document.getElementById("eth_change");
    const ethMarketCup = document.getElementById("eth_marketcap");
    
    const ETHresponse = await fetch(ETH_URL);   
    var data = await ETHresponse.json();
    console.log(data);
    ethPrice.innerHTML = data.DISPLAY.ETH.USD.PRICE;
    ethChange.innerHTML = data.DISPLAY.ETH.USD.CHANGEPCT24HOUR + '%';
    ethMarketCup.innerHTML = data.DISPLAY.ETH.USD.CIRCULATINGSUPPLYMKTCAP;


    const BTC_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD";
    const btcPrice = document.getElementById("btc_price");
    const btcChange = document.getElementById("btc_change");
    const btcMarketCup = document.getElementById("btc_marketcap");

    const BTCresponse = await fetch(BTC_URL);   
    var data = await BTCresponse.json();
    console.log(data);
    btcPrice.innerHTML = data.DISPLAY.BTC.USD.PRICE;
    btcChange.innerHTML = data.DISPLAY.BTC.USD.CHANGEPCT24HOUR + '%';
    btcMarketCup.innerHTML = data.DISPLAY.BTC.USD.CIRCULATINGSUPPLYMKTCAP;


    const USDT_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=USD";
    const usdtPrice = document.getElementById("usdt_price");
    const usdtChange = document.getElementById("usdt_change");
    const usdtMarketCup = document.getElementById("usdt_marketcap");

    const USDTresponse = await fetch(USDT_URL);   
    var data = await USDTresponse.json();
    console.log(data);
    usdtPrice.innerHTML = data.DISPLAY.USDT.USD.PRICE;
    usdtChange.innerHTML = data.DISPLAY.USDT.USD.CHANGEPCT24HOUR + '%';
    usdtMarketCup.innerHTML = data.DISPLAY.USDT.USD.CIRCULATINGSUPPLYMKTCAP;
}

getapi();