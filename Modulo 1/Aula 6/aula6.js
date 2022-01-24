const prompt = require('prompt-sync')();

//revisao While
// let n1 = 0;

/* while (n1 <5){
     console.log('é verdadeiro');
     n1++;
 } 
*/

/*
 let continuar = 's';

 while (continuar == 's'){
     console.log('Todo meu jogo');
     
     continuar = prompt('Deseja jogar novamente? ')
 } 
*/


/*
let continuar = 's';

do {
    console.log('Todo meu jogo');
    
    continuar = prompt('Deseja jogar novamente? ')
} while (continuar == 'S')
*/

//exemplo 1
/*
let nome = '';

while (nome == ''){
    console.log('Bem vindo ao cadastro da loja!');
    let continuar = prompt('Voce já possui cadastro? ');
    if (continuar == 's'){
        break;
    }
    nome = prompt('Digite seu nome: ')
    while (nome.length < 3){
        console.log('Nome invalido');
        nome = prompt('Digite seu nome: ')
    }
} */


//exemplo 2
let jogo = 'sim';

while (jogo == 'sim'){
    console.log('Voce esta jogadno');
    console.log('Voce esta em perigo');
    console.log('Voce foi atacado por uma cobra');
    let antidoto = prompt ('voce tem um antidoto?');
    if (antidoto == 'n'){
        console.log('que pena.')
        break;
    }
    console.log('Acabou o jogo');
    jogo = prompt ('Quer jogar de novo?');
}