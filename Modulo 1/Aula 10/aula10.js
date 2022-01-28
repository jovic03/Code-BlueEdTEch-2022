const prompt = require('prompt-sync')();

// let pergunta = prompt ('Responda com s ou n: ');
/*let numero = prompt('Digite um numero')
//var eu posso redeclarar e let eu nao posso alterar


// while (pergunta != 's' && pergunta != 'n' ){
//     console.log('Entrada invalida!!! Use apenas s ou n: ');
//     pergunta = prompt ( 'Responda somente com s ou n');// aqui alterara para tornar a condicao como falsa
// }

if (isNaN(numero)){
    console.log('é string');
}else{
    console.log('é um numero');
}

while (isNaN(numero)){//só aceita numero 
    numero = prompt ('Digite um valor valido!')
}

while (!isNaN(numero)){//só aceita string 
    numero = prompt ('Digite um valor valido!')
}

*/
// array pra maisculo
/*
let lista = ['joao', 'maria', 'fernando'];

let listamaisculo = [];
let stringvazia = '';

for (let i = 0 ; lista.length; i++){
    stringvazia = lista[i];
    stringvazia = stringvazia.toLocaleUpperCase();
    listamaisculo.push(stringvazia);
}
*/
//forma 2 (mais simples):
/*
let lista = ['Gabriel', 'Joao Vitor', 'Carlos'];
let listaUpper = [];

for(let elemento in lista)
{
    listaUpper.push(lista[elemento].toUpperCase());
}
console.log(listaUpper);
*/

//forma 3:
/*
let lista = ['Gabriel', 'Joao Vitor', 'Carlos'];
let listaUpper = [];

for(let elemento in lista)
{
    listaUpper.push(elemento.toUpperCase());
}
console.log(listaUpper);
*/