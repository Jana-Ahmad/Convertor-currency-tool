var registerForm = document.querySelector(".registerForm")
var user={};
var result="";

registerForm.onsubmit = function(e){
    e.preventDefault();
    var elements = e.target.elements;
    user = {
     amount:elements["amount"].value,
     exchangeCurrency: elements["Exchange Currency"].value,
    }
    
    
    console.log(user);

    console.log(user.amount);
    console.log(user.exchangeCurrency);
    convertCurrency ();
}
function convertCurrency (){
    var result=" ";

    if (user.exchangeCurrency == "Dollar"){
    result = (user.amount * 2.7).toFixed(2);
    document.querySelector(".result").innerHTML=result;
    }
    else if (user.exchangeCurrency == "Dinar"){
    result = (user.amount * 4.5).toFixed(2);
    document.querySelector(".result").innerHTML=result;
    }

    else {
    result = user.amount * 1;
    document.querySelector(".result").innerHTML=result;   
    }
}
 
    console.log(result);