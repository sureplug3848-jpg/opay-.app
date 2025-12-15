let balance=1000;

function updateBalance(){
document.getElementById("balance").textContent =  balance.toFixed(2);
};


function deposit(){
const amount= parseFloat(document.getElementById("amount").value);
if(  amount > 0 ){
    //!isNaN("amount")
    
    balance += amount;

    updateBalance();
} else {
    alert("please a valid deposit amount");
}

document.getElementById("amount".value= " ");
};
 
function withdraw(){
    const amount= parseFloat(document.getElementById("amount").value);
    if( amount > 0 && amount <=balance){
         balance-=amount;
         updateBalance();
       
        
    } else{
        alert("please enter a valid withdrawal amount.")
    }
    document.getElementById("amount").value='';
}