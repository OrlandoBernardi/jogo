function daidatres(){
    
    var resposta = prompt("Digite sua resposta");
        if (resposta == "b" || resposta == "B"){
            
            window.location.href = "./daidaWinner.html";
        }else{
            window.location.href = "./daidaGameOver.html";  
        }
    }