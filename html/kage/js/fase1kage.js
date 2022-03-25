function kageOne(){
    
    var resposta = prompt("Digite sua resposta");
        if (resposta == "d" || resposta == "D"){
            
            window.location.href = "./kageFase2.html";
        }else{
            window.location.href = "./kageGameOver.html";  
        }
    }