async function getapi() {

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


    const BNB_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD";
    const bnbPrice = document.getElementById("bnb_price");
    const bnbChange = document.getElementById("bnb_change");
    const bnbMarketCup = document.getElementById("bnb_marketcap");

    const BNBresponse = await fetch(BNB_URL);   
    var data = await BNBresponse.json();
    console.log(data);
    bnbPrice.innerHTML = data.DISPLAY.BNB.USD.PRICE;
    bnbChange.innerHTML = data.DISPLAY.BNB.USD.CHANGEPCT24HOUR + '%';
    bnbMarketCup.innerHTML = data.DISPLAY.BNB.USD.CIRCULATINGSUPPLYMKTCAP;


    const BUSD_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BUSD&tsyms=USD";
    const busdPrice = document.getElementById("busd_price");
    const busdChange = document.getElementById("busd_change");
    const busdMarketCup = document.getElementById("busd_marketcap");

    const BUSDresponse = await fetch(BUSD_URL);   
    var data = await BUSDresponse.json();
    console.log(data);
    busdPrice.innerHTML = data.DISPLAY.BUSD.USD.PRICE;
    busdChange.innerHTML = data.DISPLAY.BUSD.USD.CHANGEPCT24HOUR + '%';
    busdMarketCup.innerHTML = data.DISPLAY.BUSD.USD.CIRCULATINGSUPPLYMKTCAP;


    const XRP_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=USD";
    const xrpPrice = document.getElementById("xrp_price");
    const xrpChange = document.getElementById("xrp_change");
    const xrpMarketCup = document.getElementById("xrp_marketcap");

    const XRPresponse = await fetch(XRP_URL);   
    var data = await XRPresponse.json();
    console.log(data);
    xrpPrice.innerHTML = data.DISPLAY.XRP.USD.PRICE;
    xrpChange.innerHTML = data.DISPLAY.XRP.USD.CHANGEPCT24HOUR + '%';
    xrpMarketCup.innerHTML = data.DISPLAY.XRP.USD.CIRCULATINGSUPPLYMKTCAP;


    const ADA_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ADA&tsyms=USD";
    const adaPrice = document.getElementById("ada_price");
    const adaChange = document.getElementById("ada_change");
    const adaMarketCup = document.getElementById("ada_marketcap");

    const ADAresponse = await fetch(ADA_URL);   
    var data = await ADAresponse.json();
    console.log(data);
    adaPrice.innerHTML = data.DISPLAY.ADA.USD.PRICE;
    adaChange.innerHTML = data.DISPLAY.ADA.USD.CHANGEPCT24HOUR + '%';
    adaMarketCup.innerHTML = data.DISPLAY.ADA.USD.CIRCULATINGSUPPLYMKTCAP;


    const DOGE_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=USD";
    const dogePrice = document.getElementById("doge_price");
    const dogeChange = document.getElementById("doge_change");
    const dogeMarketCup = document.getElementById("doge_marketcap");

    const DOGEresponse = await fetch(DOGE_URL);   
    var data = await DOGEresponse.json();
    console.log(data);
    dogePrice.innerHTML = data.DISPLAY.DOGE.USD.PRICE;
    dogeChange.innerHTML = data.DISPLAY.DOGE.USD.CHANGEPCT24HOUR + '%';
    dogeMarketCup.innerHTML = data.DISPLAY.DOGE.USD.CIRCULATINGSUPPLYMKTCAP;


    const MATIC_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=MATIC&tsyms=USD";
    const maticPrice = document.getElementById("matic_price");
    const maticChange = document.getElementById("matic_change");
    const maticMarketCup = document.getElementById("matic_marketcap");

    const MATICresponse = await fetch(MATIC_URL);   
    var data = await MATICresponse.json();
    console.log(data);
    maticPrice.innerHTML = data.DISPLAY.MATIC.USD.PRICE;
    maticChange.innerHTML = data.DISPLAY.MATIC.USD.CHANGEPCT24HOUR + '%';
    maticMarketCup.innerHTML = data.DISPLAY.MATIC.USD.CIRCULATINGSUPPLYMKTCAP;

    
    const DOT_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOT&tsyms=USD";
    const dotPrice = document.getElementById("dot_price");
    const dotChange = document.getElementById("dot_change");
    const dotMarketCup = document.getElementById("dot_marketcap");

    const DOTresponse = await fetch(DOT_URL);   
    var data = await DOTresponse.json();
    console.log(data);
    dotPrice.innerHTML = data.DISPLAY.DOT.USD.PRICE;
    dotChange.innerHTML = data.DISPLAY.DOT.USD.CHANGEPCT24HOUR + '%';
    dotMarketCup.innerHTML = data.DISPLAY.DOT.USD.CIRCULATINGSUPPLYMKTCAP;


    const LTC_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC&tsyms=USD";
    const ltcPrice = document.getElementById("ltc_price");
    const ltcChange = document.getElementById("ltc_change");
    const ltcMarketCup = document.getElementById("ltc_marketcap");

    const LTCresponse = await fetch(LTC_URL);   
    var data = await LTCresponse.json();
    console.log(data);
    ltcPrice.innerHTML = data.DISPLAY.LTC.USD.PRICE;
    ltcChange.innerHTML = data.DISPLAY.LTC.USD.CHANGEPCT24HOUR + '%';
    ltcMarketCup.innerHTML = data.DISPLAY.LTC.USD.CIRCULATINGSUPPLYMKTCAP;


    const SOL_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SOL&tsyms=USD";
    const solPrice = document.getElementById("sol_price");
    const solChange = document.getElementById("sol_change");
    const solMarketCup = document.getElementById("sol_marketcap");

    const SOLresponse = await fetch(SOL_URL);   
    var data = await SOLresponse.json();
    console.log(data);
    solPrice.innerHTML = data.DISPLAY.SOL.USD.PRICE;
    solChange.innerHTML = data.DISPLAY.SOL.USD.CHANGEPCT24HOUR + '%';
    solMarketCup.innerHTML = data.DISPLAY.SOL.USD.CIRCULATINGSUPPLYMKTCAP;


    const SHIB_URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SHIB&tsyms=USD";
    const shibPrice = document.getElementById("shib_price");
    const shibChange = document.getElementById("shib_change");
    const shibMarketCup = document.getElementById("shib_marketcap");

    const SHIBresponse = await fetch(SHIB_URL);   
    var data = await SHIBresponse.json();
    console.log(data);
    shibPrice.innerHTML = data.DISPLAY.SHIB.USD.PRICE;
    shibChange.innerHTML = data.DISPLAY.SHIB.USD.CHANGEPCT24HOUR + '%';
    shibMarketCup.innerHTML = data.DISPLAY.SHIB.USD.CIRCULATINGSUPPLYMKTCAP;
}

getapi();