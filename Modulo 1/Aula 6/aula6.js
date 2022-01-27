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


/*
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
*/


/*
let nomes = [
    'Gabriel Lima Pereira', 
    'Danilo Diniz',
    'Eduardo Santos',
    'Leticia Pereira',
    'Iulia Mitch',
 ]

 console.log(nomes);
 console.log();

 let novoNome = prompt('Qual o novo nome? ');
 nomes.push(novoNome);

 console.log(nomes);
*/

//exercicio 1
/**
 Faça um Programa que leia 20 números inteiros e armazene-os
  num array. Armazene os números pares no array PAR e
   os números IMPARES no array IMPAR. Imprima os três vetores.

 
console.log('Verifica 20 numeros se sao par ou impar')
console.log()

let contador = 1;
let numeros = [];
let nmrImp = [];
let nmrPar = [];
let novoNum;

while (contador < 21){
    novoNum = +prompt('Digite um numero: ')
    numeros.push(novoNum)
    contador++;
    if ((novoNum%2)== 0){
        nmrPar.push(novoNum);
    }
    else{
        nmrImp.push(novoNum);
    }
}



console.log(numeros);
console.log('nmr pares', nmrPar);
console.log('nmr impares', nmrImp);
*/


//resolucao prof:
/*
let num;
let todos = [];
let pares = [];
let impares = [];
let contador = 1;

while (contador <= 20){
    num = +prompt(`Digite o ${contador}º número: `);
    todos.push(num);
    if (num % 2 == 0){
        pares.push(num)
    } else {
        impares.push(num)
    }
    contador++    
}
console.log();
console.log('Todos os números: ');
console.log(todos);

console.log();
console.log('Pares: ');
console.log(pares);

console.log();
console.log('Impares');
console.log(impares);
*/



//exercicio 2
/*Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada 
informação no seu respectivo array. Imprima a média de idade e de altura.*/
/*
let idade = [];
let altura = [];
let contador = 0;

while (contador < 5){

    let pedeIdade = +prompt('Digite a idade: ')
    let pedeAltura = +prompt('Digite a altura em cm: ')
    idade.push(pedeIdade);
    altura.push(pedeAltura);
    contador++;

        
     
}

// como fazer um loop pra somar cada indice sem ter qeu digitar 1 por  1??

let mediaIdade= (idade[0]+idade[1]+idade[2]+idade[3]+idade[4])/5;
let mediaAltura=(altura[0]+altura[1]+altura[2]+altura[3]+altura[4])/5;

console.log(idade,altura)
console.log(mediaIdade,mediaAltura)
console.log();
console.log(`${idade[0]},${altura[0]}
${idade[1]},${altura[1]}
${idade[2]},${altura[2]}
${idade[3]},${altura[3]}
${idade[4]},${altura[4]}
A média de idade é ${mediaIdade}
A média de altura é ${mediaAltura}
****************************`)
*/

//exercicio 3
/*
Faça um programa em que o usuário escolha a quantidade de alunos
a serem cadastrados e peça o nome e nota de cada um. Armazene 
as informações em duas listas separadas e no final imprima o nome e a 
nota correspondente de cada aluno, e a média total da notas.
*/

/*
let nomeAlunoArm = [];
let notaAlunoArm = [];


let qtdAlunos = +prompt('Quantos alunos você quer cadastrar? ');

for (let i = 0; i < qtdAlunos; i++){
    let nomeAluno = prompt('Digite o nome do aluno: ');
    let notaAluno = +prompt('Qual a nota do aluno? ');
    
    nomeAlunoArm.push(nomeAluno);
    notaAlunoArm.push(notaAluno);
}

let media = 0;

for (let a = 0 ; a < notaAlunoArm.length;a++){
    media = media + notaAlunoArm[a];
}

console.log(`${nomeAlunoArm}
${notaAlunoArm}
media: ${media}`);*/

//ultimo indice de um array
// let ultimo = notaAlunoArm[notaAlunoArm.length -1];
// console.log(ultimo)


//ex 4
/**
 * Faça um programa que simule um lançamento de dados.
 * Lance o dado 100 vezes e armazene os resultados em
 *  um array. Depois, mostre quantas vezes cada valor
 *  foi conseguido.
 */

let armDados = [];
let armUm = 0;
let armDois = 0;
let armTres = 0;
let armQuatro = 0;
let armCinco = 0;
let armSeis = 0;


for ( let i = 0; i < 100; i++ ){
    let vlrAleatorio = Math.floor(Math.random() * 6)+1;
    armDados.push(vlrAleatorio);


    if (vlrAleatorio == 1){
        armUm++;
    }
    if (vlrAleatorio == 2){
        armDois++;
    }
    if (vlrAleatorio == 3){
        armTres++;
    }
    if (vlrAleatorio == 4){
        armQuatro++;
    }
    if (vlrAleatorio == 5){
        armCinco++;
    }
    if (vlrAleatorio == 6){
        armSeis++;
    }


}    
    

console.log(`${armDados}
${armUm} incidencias do mesmo
${armDois} incidencias do mesmo
${armTres} incidencias do mesmo
${armQuatro} incidencias do mesmo
${armCinco} incidencias do mesmo
${armSeis} incidencias do mesmo`);