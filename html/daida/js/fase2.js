function daidatwo(){
    
    var resposta = prompt("Digite sua resposta");
        if (resposta == "d" || resposta == "D"){
            
            window.location.href = "./daidaFase3.html";
        }else{
            window.location.href = "./daidaGameOver.html";  
        }
    }