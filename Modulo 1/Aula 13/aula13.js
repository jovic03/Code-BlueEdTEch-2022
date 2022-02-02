const prompt = require('prompt-sync')();

//como criar eventos aleatorios

function chuva (){
    console.log('Esta chovendo')
}

let escolha = +prompt('escolha sua acao: 1 - ir trabalhr')
let aleatorio = 0;

while(true){
    if (escolha ==1){
        console.log('voce foi trabalhar');
        aleatorio = Math.trunc(Math.random()*100);
        console.log(aleatorio)
            if(aleatorio<=10){
                chuva();
            }
            escolha = +prompt('escolha sua acao: 1 - ir trabalhr')
    }else{
        break;
    }
}