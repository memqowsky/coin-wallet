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

// form.addEventListener('submit', e => {
//     // e.preventDefault();
//     // addWallet();
// })

document.getElementById("go_back").addEventListener("click", function(){
    window.location.href = "wallets.html";
});

