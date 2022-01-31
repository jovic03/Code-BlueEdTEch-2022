const prompt = require('prompt-sync')();

//revisao/dicas pra resolver exerciocios aula 10

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
/*
let lista = [2,80,15,3,50,49];
 let maior = 0;

let menor = 0;
for (let i of lista){// percorre a lista
    if (i< maior){ // se o numero anterior for maior ele testa e armazena em 'maior'
        menor = i;
    }
}


console.log(menor);
*/

/*
A declaração function define uma função com os especificados parâmetros. É um conjunto 
de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve 
defini-la em algum lugar no escopo do qual você quiser chamá-la.
É como se ensinássemos para o computador uma série de comandos que queremos executar chamando apenas 
por um nome. Isso é muito útil quando precisamos executar um certo código várias vezes durante a 
execução do nosso programa, então ao invés de repetir várias vezes esses códigos, criamos uma função para facilitar.
*/


function va_tomar_banho (){
    console.log('Tirar a roupa suja');
    console.log('Abrir o chuveriro')
    console.log('Se ensaboar')
    console.log('Lavar o cabelo')
    console.log('Lavar o suvaco')
    console.log('Se enxaguar')
    console.log('Fechar o chuveriro')
    console.log('Se secar')
    console.log('Colocar uma roupa limpa')
    

}

// let sujo = prompt ('O Henrique esta sujo? ');

// if(sujo =='s'){
//     va_tomar_banho();
// }

// sujo = prompt ('O Marcos esta sujo? ');

// if(sujo =='s'){
//     va_tomar_banho();
// }

// sujo = prompt ('O Iulia esta sujo? ');

// if(sujo =='s'){
//     va_tomar_banho();
// }

function verifica_sujeira(){
    let sujo = prompt ('Está sujo(a)? ')
    if(sujo =='s'){
    va_tomar_banho();
}

}

let pessoas = +prompt('Quantas pessoas estao em casa? ');

for (let i =- 0; i<pessoas;i++){
    verifica_sujeira();
}

