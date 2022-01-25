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

/*
let idade = [7,14,21];
let alunoNovo = prompt('NOme do aluno novo: ');
let nome = ['Gabriel','Sasuke','JooJ', alunoNovo];

//console.log(typeof(nome) + ' '+ nome + ' '+typeof(idade)+' ' +idade + ' e o tamanho do array é:_'+ nome.length + ' e o tamanho do array idade é:_'+idade.length );

console.log(nome[2], nome[2].length); // array comeca do 0 (o 1° indice é 0)

console.log(idade[0]+ idade[1]);

console.log(nome[nome.length - 1]);
*/


/*
let nomes2 = [
               ['Gabriel Lima Pereira',18], 
               ['Danilo Diniz',20],
               ['Eduardo Santos',16],
               ['Leticia Pereira',18],
               ['Iulia Mitch',20]
               [alunoNovo]
            ]

let idades = [18, 20, 21, 19, 16]

console.log(nomes2);
console.log(nomes2.length);
console.log();
console.log(nomes2)[0];
console.log(nomes2[1]);
console.log(nomes2[1][0]);
console.log(nomes2[1][0],nomes2[2][1]);
*/

let alunoNovo = prompt('Digite o nome do(a) aluno(a) novo(a): ')

let nomes = [
               'Gabriel Lima Pereira', 
               'Danilo Diniz',
               'Eduardo Santos',
               'Leticia Pereira',
               'Iulia Mitch',
               alunoNovo
            ]

let idades = [18, 20, 21, 19, 16]

console.log(nomes);
console.log(idade);

//substituindo o valor de um elemnto em um indice
nomes[1]='Joabe Costa';
console.log(nomes)

nomes.indexOf('Joabe Costa')
console.log(nomes.indexOf('Joabe Costa'));
console.log(nomes.indexOf('Jao'));//quando retorna -1 significa que nao existe o elemento