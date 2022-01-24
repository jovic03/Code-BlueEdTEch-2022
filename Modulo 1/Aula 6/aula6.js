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

//o break é uma mnaneira de interromper minha repetição antes mesmo de terminar toda a execução do codigo e testes
//O comando break encerra o loop atual, independente do resultado do teste da condição.

/*
let senha = '';
let tentativas = 0;

do {
    if (tentativas === 5){
        console.log("Número limite de tentativas atingido.");
        break;
    } 

    senha = prompt("Digite a senha de acesso: ");
    tentativas++;
} while (senha !== "Blue");
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
/*
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
*/

//CONTINUE
/*
A palavra chave continue termina a atual iteração do laço em 
que ele se encontra, e continua a execução deste 
laço com a próxima iteração. É como o break, mas ao invés de 
encerrar e sair da laço, ele encerra a repetição atual ignorando
 todos os comando que viriam depois, e volta para o início com 
 a próxima execução.
*/

/*
let n = 0;

while (n < 5) {
    n++;
 
    if (n == 3) {
        continue;
    }

    console.log(n);
}
*/


/*
let jogo = 'sim';

while (jogo == 'sim'){
    console.log('Voce esta jogadno');
    console.log('Voce esta em perigo');
    console.log('Voce foi atacado por uma cobra');
    let antidoto = prompt ('voce tem um antidoto?');
    if (antidoto == 'n'){
        console.log('que pena. VOce morreu');
        continuar = prompt('deseja jogar novamente?')
        if (continuar == 's'){
            console.log('RECOMECANDO')
            continue;
        }
        else{
            console.log('Obrigado por jogar')
            break;
        }
    }
    console.log('que bom que vc tinha o antidoto');
    console.log('voce continua sua jornada');
    console.log('Acabou o jogo');
    jogo = prompt ('Quer jogar de novo?');
}
*/


//AULA 6 comeca aqui:
