function kageTwo(){
    
    var resposta = prompt("Digite sua resposta");
        if (resposta == "b" || resposta == "B"){
            
            window.location.href = "./kageFase3.html";
        }else{
            window.location.href = "./kageGameOver.html";  
        }
    }