const prompt = require('prompt-sync')();

//como pegar o maior numero 

//para string
/*
let lista = ['Gabriel','Lucas','Ana','Lucas Viana'];
let maior = '';

for (let i of lista){// percorre a lista
    if (i.length> maior){ // se o numero anterior for maior ele testa e armazena em 'maior'
        maior = i;
    }
}*/

//pra numero
// let lista = [2,80,15,3,50,49];
// let maior = 0;
/*for (let i of lista){// percorre a lista
    if (i> maior){ // se o numero anterior for maior ele testa e armazena em 'maior'
        maior = i;
    }*/

//menor
let lista = [2,80,15,3,50,49];
 let maior = 0;

let menor = 0;
for (let i of lista){// percorre a lista
    if (i< maior){ // se o numero anterior for maior ele testa e armazena em 'maior'
        menor = i;
    }
}


console.log(menor);