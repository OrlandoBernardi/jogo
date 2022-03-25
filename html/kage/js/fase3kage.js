function kageTres(){
    
    var resposta = prompt("Digite sua resposta");
        if (resposta == "c" || resposta == "C"){
            
            window.location.href = "./winnerKage.html";
        }else{
            window.location.href = "./kageGameOver.html";  
        }
    }