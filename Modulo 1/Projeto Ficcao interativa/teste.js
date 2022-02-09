const prompt = require('prompt-sync')();


/*
function dataHora(){
    let hora = 25;
    let dia = 1;
            
    hora = hora + hora;

    if (hora >24){
        dia++;
    }

    console.log(`São ${hora}h do dia ${dia}`)
      

}

dataHora();//4
dataHora();//8h
dataHora();//12
*/
/*
let hora = 6;
let minuto = 0;
let tempo = 0;
while(hora < 10){
    console.log(`São ${hora}:${minuto}`);
    tempo = +prompt('Quantos minutos quer adicionar? ');
    minuto += tempo;
    if (minuto >= 60){
        minuto = minuto - 60
        hora++
    }
}
*/



//FUNCIONAAAAAAAAAAAAAA
let hora = 2;
let dia = 1

console.log(hora)


function dataHora(){

    hora =hora + 4;

    if (hora >= 24){
        dia = dia + 1;
        hora = hora - 24
    }

    console.log(`São ${hora} h do dia ${dia}`);

}


dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()
dataHora()





/*
let hora = 4;
let dia = 1;

//console.log(`São ${hora} h do dia ${dia}`);
// let horaSoma = hora + hora;

if (dia >24){
    dia = dia + 1;
}

let pgt1 = +prompt('pgt 1 ')

if (pgt1 == true){
    hora +4;
    console.log(`São ${hora} h do dia ${dia}`);
}

let pgt2 = +prompt('pgt 2 ')
if (pgt2 == true){
    hora +4;
    console.log(`São ${hora} h do dia ${dia}`);
}

let pgt3 = +prompt('pgt 3 ')
if (pgt3 == true){
    hora +4;
    console.log(`São ${hora} h do dia ${dia}`);
}

let pgt4 = +prompt('pgt 4 ')
if (pgt4 == true){
    hora +4;
    console.log(`São ${hora} h do dia ${dia}`);
}

let pgt5 = +prompt('pgt 5 ')
if (pgt5 == true){
    hora +4;
    console.log(`São ${hora} h do dia ${dia}`);
}
*/


/*

function diahora(a){
    let horario = a + a;
    return horario;
}

let hora = 1;

let resultado = diahora(hora);
console.log(resultado);
*/







/*
function testaEscolha(){

    let escolha = +prompt('Escolha 1 ou 2? ')
    while(escolha > 2 || escolha < 1 ){

        if(escolha > 2 || escolha < 1 ){
                console.log('Para escolher digite apenas 1 ou 2');
                escolha = +prompt('Digite apenas 1 ou 2: ');
            }
    }
    
    
} 

testaEscolha();
*/