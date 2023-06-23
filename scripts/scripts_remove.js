/* If user is signed he shouldn't be able to see that tab */
document.addEventListener("DOMContentLoaded", function(){
    
    axios.post("http://localhost:3000/checkSession", {
    }).then((response) => {
        
        if(response.data.ACTIVE_SESSION === false){
            console.log("SESION EXISTS");
            location.href='dashboard.html';
        }
        else {
        console.log(response.data.message);
    }
});
});

const msg = document.getElementById("msg");
msg.style.color = "red";

document.getElementById("go_back").addEventListener("click", function(){
    window.location.href = "wallets.html";
});

document.getElementById("remove_wallet").addEventListener("click", function(){

    const address = document.getElementById("address")
    const addressValue = address.value.trim();
    
    axios.post("http://localhost:3000/removeWallet", {
        address: addressValue
    }).then((response) => {
        if(response){
            location.href = "wallets.html";
            msg.innerHTML = "";
        } else {
            msg.style.color = "red";
            msg.innerHTML = "There is no such address in the database";
        }
});

});

