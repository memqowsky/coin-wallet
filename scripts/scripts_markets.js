let btcInfo = `Bitcoin is one of the most popular cryptocurrencies in the market. First introduced in 2009 by Satoshi Nakamoto, Bitcoin has held the crypto market’s number one spot according to market capitalization. Bitcoin paved the way for many existing altcoins in the market and marked a pivotal moment for digital payment solutions. As the world’s first cryptocurrency, Bitcoin has come a long way in terms of its value. However, one does not have to buy an entire bitcoin as bitcoins can be divided into small units called satoshis, named after the creator. A satoshi is equivalent to 0.00000001 bitcoin. There is no physical BTC token so you can think of bitcoin as digital money. Bitcoin transactions are fully transparent and can’t be censored. You can send money to anyone in the world with ease. It’s a financial system backed by thousands of computers, known as ‘nodes’, around the world, instead of a single central bank or government, i.e. hence the term ‘decentralization’. `;
let ethInfo = `Ethereum (ETH) is the second-largest cryptocurrency token in terms of market capitalization. This can be attributed to how it has brought much innovation and many use cases to the industry by introducing smart contract functionality, which has paved the way for decentralized finance (DeFi) and decentralized apps (DApps). Ethereum allows users to build and deploy software, commonly in the form of DApps, which are then powered by a global distributed network of computers running Ethereum. The network is decentralized, making it highly resistant to any form of censorship or downtime. In addition, Ethereum is an open-source blockchain platform that runs on the usage of its native currency, called Ether or ETH. All network transaction fees, or gas fees, are paid in ETH. ETH specifically used by the Ethereum blockchain to pay for transactions, and is responsible for powering just about everything that occurs on the network.`;
let bnbInfo = `BNB is a cryptocurrency that can be used to trade and pay fees on the Binance cryptocurrency exchange. BNB is also the cryptocurrency coin that powers the BNB Chain ecosystem. As one of the world's most popular utility tokens, BNB is useful to users in a wide range of applications and use cases. BNB was launched through an Initial Coin Offering (or ICO) that took place from June 26th to July 3rd, 2017 - 11 days before the Binance Exchange opened for trading. The issue price was 1 ETH for 2,700 BNB or 1 BTC for 20,000 BNB. Although BNB was launched through an ICO, BNB does not provide users with a claim on Binance profits and does not represent an investment in Binance. With various applications both within the BNB Chain ecosystem and beyond, BNB serves numerous purposes. Originally launched as an ERC-20 token on the Ethereum blockchain, BNB has now migrated to the main BNB Chain. Although the initial total supply was set at 200 million coins, the supply is gradually decreasing as a result of frequent coin burns. The current price of BNB is updated and available in real-time on Binance.`;
let usdtInfo = `Tether (USDT) is the most dominant and widely traded stablecoin in the global cryptocurrency market today. Founded in July 2014 by Brock Pierce, Reeve Collins, and Craig Sellars in California, it was released into circulation in October that same year. The idea behind Tether was to provide a digital asset pegged directly to the US dollar and other fiat currencies thereafter, in order to provide traders and investors with an ecosystem to park or hold crypto assets away from the volatility of other cryptocurrencies. USDT is available on most digital blockchain networks or via interoperable swaps or exchanges. It was first released on the Bitcoin network in 2014, followed by other digital ecosystems afterwards, and has consistently been one of the top three digital currencies in the world according to market capitalization. USDT price is updated and available in real time on Binance.`;
let busdInfo = `Binance USD (BUSD) is a stablecoin, so its value is pegged to a fiat currency — in this case, the US dollar. BUSD was launched in September 2019 as part of a joint partnership between Binance and blockchain and finance company Paxos, headquartered in New York. The partnership entails Paxos holding the equivalent of fiat USD in reserve for every BUSD stablecoin in circulation. This very strict accounting and reconciliation process necessitates a monthly audit in order to verify the safety of investors’ funds, as well as other security measures put in place by the New York Department of Financial Services (NYDFS) and other regulatory agencies. Additionally, BUSD is one of the only existing fiat-backed stablecoins with records that verify the security of its physical reserves. Because of this, BUSD is considered one of the safest among the top stablecoin in existence. BUSD is used as a means of payment that can be sent internationally and verified on the public blockchain ledger within seconds. Today, with more than 3 million active holders and 18 billion coins in circulation, BUSD is accepted as payment by a variety of businesses and individuals globally.`;

// import { ethData } from './coins_data.js';
async function load(){
    let {ethData} = await import('./coins_data.js');
}

document.getElementById("btcHolder").addEventListener("click", function(event){
    if (event.target.matches('#nameHolder_info_btc')) {
        alert(btcInfo);
    } else {
        location.href='btcChart.html';
    }
});

document.getElementById("ethHolder").addEventListener("click", function(event){
    if (event.target.matches('#nameHolder_info_eth')) {
        alert(ethInfo);
    } else {
        location.href='ethChart.html';
    }
});

document.getElementById("bnbHolder").addEventListener("click", function(event){
    if (event.target.matches('#nameHolder_info_bnb')) {
        alert(bnbInfo);
    } else {
        location.href='bnbChart.html';
    }
});

document.getElementById("nameHolder_info_usdt").addEventListener("click", function(){
    alert(usdtInfo);
});

document.getElementById("nameHolder_info_busd").addEventListener("click", function(){
    alert(busdInfo);
});
