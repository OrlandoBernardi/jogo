function daidaone(){
    
    var resposta = prompt("Digite sua resposta");
        if (resposta == "a" || resposta == "A"){
            
            window.location.href = "./daidaFase2.html";
        }else{
            window.location.href = "./daidaGameOver.html";  
        }
    }