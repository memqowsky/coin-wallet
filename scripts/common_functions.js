export function createHtmlElement(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

export function createCoin(coin) {

    let id = coin.shortName + "Holder";

    let htmlStr = `<div class ="cHolder" id="ethHolder">
          <div class = "nameHolder">
            <img class="ICO" src="img/eth.png"></img>
            <p class = "tokenName" id="btc">ETH</p>
            <p class = "cryptoName" id="ethereum">Ethereum</p>
          </div>
          <div class = "Holder">
            <p id="eth_price">$0.00</p>
          </div>
          <div class = "Holder">
            <p id="eth_change">0.00</p>
          </div>
          <div class = "Holder">
          <p id="eth_marketcap">$0.00</p>
          </div>
          </div>`;

    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

export function signOut(){

    axios.post("http://localhost:3000/signout", {
    }).then((response) => {

    if(response.data == true){
        location.href='index.html';
    }
    });
}