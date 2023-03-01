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


    const XRP_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=USD";
    const xrpPrice = document.getElementById("xrp_price");
    const xrpChange = document.getElementById("xrp_change");
    const xrpMarketCup = document.getElementById("xrp_marketcap");

    const XRPresponse = await fetch(XRP_URL);   
    xrpData = await XRPresponse.json();
    xrpPrice.innerHTML = xrpData.DISPLAY.XRP.USD.PRICE;
    xrpChange.innerHTML = xrpData.DISPLAY.XRP.USD.CHANGEPCT24HOUR + '%';
    xrpMarketCup.innerHTML = xrpData.DISPLAY.XRP.USD.CIRCULATINGSUPPLYMKTCAP;


    const ADA_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ADA&tsyms=USD";
    const adaPrice = document.getElementById("ada_price");
    const adaChange = document.getElementById("ada_change");
    const adaMarketCup = document.getElementById("ada_marketcap");

    const ADAresponse = await fetch(ADA_URL);   
    adaData = await ADAresponse.json();
    adaPrice.innerHTML = adaData.DISPLAY.ADA.USD.PRICE;
    adaChange.innerHTML = adaData.DISPLAY.ADA.USD.CHANGEPCT24HOUR + '%';
    adaMarketCup.innerHTML = adaData.DISPLAY.ADA.USD.CIRCULATINGSUPPLYMKTCAP;


    const DOGE_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=USD";
    const dogePrice = document.getElementById("doge_price");
    const dogeChange = document.getElementById("doge_change");
    const dogeMarketCup = document.getElementById("doge_marketcap");

    const DOGEresponse = await fetch(DOGE_URL);   
    dogeData = await DOGEresponse.json();
    dogePrice.innerHTML = dogeData.DISPLAY.DOGE.USD.PRICE;
    dogeChange.innerHTML = dogeData.DISPLAY.DOGE.USD.CHANGEPCT24HOUR + '%';
    dogeMarketCup.innerHTML = dogeData.DISPLAY.DOGE.USD.CIRCULATINGSUPPLYMKTCAP;


    const MATIC_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=MATIC&tsyms=USD";
    const maticPrice = document.getElementById("matic_price");
    const maticChange = document.getElementById("matic_change");
    const maticMarketCup = document.getElementById("matic_marketcap");

    const MATICresponse = await fetch(MATIC_URL);   
    maticData = await MATICresponse.json();
    maticPrice.innerHTML = maticData.DISPLAY.MATIC.USD.PRICE;
    maticChange.innerHTML = maticData.DISPLAY.MATIC.USD.CHANGEPCT24HOUR + '%';
    maticMarketCup.innerHTML = maticData.DISPLAY.MATIC.USD.CIRCULATINGSUPPLYMKTCAP;

    
    const DOT_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOT&tsyms=USD";
    const dotPrice = document.getElementById("dot_price");
    const dotChange = document.getElementById("dot_change");
    const dotMarketCup = document.getElementById("dot_marketcap");

    const DOTresponse = await fetch(DOT_URL);   
    dotData = await DOTresponse.json();
    dotPrice.innerHTML = dotData.DISPLAY.DOT.USD.PRICE;
    dotChange.innerHTML = dotData.DISPLAY.DOT.USD.CHANGEPCT24HOUR + '%';
    dotMarketCup.innerHTML = dotData.DISPLAY.DOT.USD.CIRCULATINGSUPPLYMKTCAP;


    const LTC_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC&tsyms=USD";
    const ltcPrice = document.getElementById("ltc_price");
    const ltcChange = document.getElementById("ltc_change");
    const ltcMarketCup = document.getElementById("ltc_marketcap");

    const LTCresponse = await fetch(LTC_URL);   
    ltcData = await LTCresponse.json();
    ltcPrice.innerHTML = ltcData.DISPLAY.LTC.USD.PRICE;
    ltcChange.innerHTML = ltcData.DISPLAY.LTC.USD.CHANGEPCT24HOUR + '%';
    ltcMarketCup.innerHTML = ltcData.DISPLAY.LTC.USD.CIRCULATINGSUPPLYMKTCAP;


    const SOL_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SOL&tsyms=USD";
    const solPrice = document.getElementById("sol_price");
    const solChange = document.getElementById("sol_change");
    const solMarketCup = document.getElementById("sol_marketcap");

    const SOLresponse = await fetch(SOL_URL);   
    solData = await SOLresponse.json();
    solPrice.innerHTML = solData.DISPLAY.SOL.USD.PRICE;
    solChange.innerHTML = solData.DISPLAY.SOL.USD.CHANGEPCT24HOUR + '%';
    solMarketCup.innerHTML = solData.DISPLAY.SOL.USD.CIRCULATINGSUPPLYMKTCAP;


    const SHIB_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SHIB&tsyms=USD";
    const shibPrice = document.getElementById("shib_price");
    const shibChange = document.getElementById("shib_change");
    const shibMarketCup = document.getElementById("shib_marketcap");

    const SHIBresponse = await fetch(SHIB_URL);   
    shibData = await SHIBresponse.json();
    shibPrice.innerHTML = shibData.DISPLAY.SHIB.USD.PRICE;
    shibChange.innerHTML = shibData.DISPLAY.SHIB.USD.CHANGEPCT24HOUR + '%';
    shibMarketCup.innerHTML = shibData.DISPLAY.SHIB.USD.CIRCULATINGSUPPLYMKTCAP;
}

getapi();
var coinsData = {ethData, btcData, usdtData, bnbData, busdData, xrpData, adaData, dogeData, maticData, dotData, ltcData, solData, shibData};
export {ethData};