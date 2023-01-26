export function createHtmlElement(htmlStr) {
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