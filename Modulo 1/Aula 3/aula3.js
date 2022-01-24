const prompt = require('prompt-sync')();


/*
//== (Compara se os dois valores são iguais, independente do tipo)
const compara1 = 50 == '50';
const compara2 = 50 == 50;

console.log(compara1);
console.log(compara2);
*/


/*
//=== (Compara se os valores são iguais e do mesmo tipo)
const comparaTipo1 = 50 === '50';
const comparaTipo2 = 50 === 50;

console.log(comparaTipo1);
console.log(comparaTipo2);
*/

/*
//!= ou !== Verifica se um valor é diferente de outro (seguindo a mesma regra de comparação de tipo ou não)
const comparaString = 'Blue' !== 'blue';

console.log(comparaString);
*/

// && = Logical AND
// LÓGICA E
// TEM QUE ACERTAR O USUÁRIO E A SENHA
// TRUE  && TRUE   = TRUE
// TRUE  && FALSE  = FALSE
// FALSE && TRUE   = FALSE
// FALSE && FALSE  = FALSE
//Passamos duas (ou mais) condições, e todas precisam resultar em verdadeira para que a declaração seja executada.
/*
 const num = prompt('Digite um número entre 5 e 10: ');

if (num > 5 & num < 10) {
    console.log('O número está correto!');
}

 */

/*
// || - Logical OR
// LÓGICA OU
// JOGO DO BRASIL OU SOLZAO NO DOMINGO = CHURRASCO
// TRUE  || TRUE   = TRUE
// TRUE  || FALSE  = TRUE
// FALSE || TRUE   = TRUE
// FALSE || FALSE  = FALSE
//Passamos duas (ou mais) condições, e pelo menos uma precisa resultar em verdadeira para que a declaração seja executada.
const entrada = prompt('Digite S ou N para continuar: ')

if (entrada === 'S' || entrada === 'N'){
    console.log('A entrada é válida')
}

*/

//Else If
//Nós podemos testar também mais de uma condição, onde ele irá testar cada uma separadamente, e executar a primeira que retornar true
/*
const num1 = +prompt('Digite um número: ');
const num2 = +prompt('Digite outro número: ');

if (num1 > num2){
    console.log('O número 1 é maior');
} else if (num1 < num2){
    console.log('O número 2 é maior');
} else {
    console.log('Os dois números são iguais.');
}
*/



/*
let local = prompt ('Onde o Manoel está? ');

if(local == 'Rio'|| local == 'rio'){
    console.log('Vai ver o Vasco');
}
else{
    console.log('Manoel não vai assistir pois não está no rio');
    
}
console.log();
*/


//exercicios:

//ex1
/*
let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');

if(num1>num2){
    console.log(num1.toString())
}
else if (num1<num2){
    console.log(num2.toString())
}
else if (num1==num2){
    console.log(`Você digitou ${num1} e ${num2} que são números iguais`)
}
else {
    console.log('Digite um número válido')
}
*/


//ex2
/*
let nota1 = +prompt('Digite a 1° nota: ');
let nota2 = +prompt('Digite a 2° nota ');
let nota3 = +prompt('Digite a 3° nota ');
let nota4 = +prompt('Digite a 4° nota ');

media= (nota1+nota4+nota3+nota4)/4;

console.log(`sua média foi ${media} e sua situação é: `)
if(media >=7){
    console.log('Aprovado')
}

else if (media>=5{
    console.log('Em recuperacao') //nesse caso faz mais sentido pois se já for menor que 7 conforme testado
})
// else{
//     if(media >= 5 && media <= 7){
//         console.log('Em recuperação')
//     }
//         else{
//             console.log('Reprovado')
//         }
    
}
else{
//    console.log('Reprovado')
//         }
*/

//EX3
/*
let num1 = +prompt('Digite um número: ');

if (num1%2 == 0 ){
    console.log(` ${num1} é um numero par`)
}
else{
    console.log(` ${num1} é um numero impar`)
}
*/

//ex4
/*Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar
 uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.*/
/*
let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');

let calc1 = num1%num2;
let calc2 = num2%num1;

//console.log(calc)
if (num1>num2 && calc1==0){
    console.log(` O resultado é ${calc1} e portanto é são multiplos`)
}
else if (num1<num2 && calc2==0) {
    console.log(` O resultado é ${calc2} e portanto é são multiplos`)
}
else{
    console.log('Nao sao multiplos')
}
*/



//ex5
/*
Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos:
Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
Se A = B + C , apresente a mensagem: TRIANGULO RETANGULO;
Se A > B + C , apresente a mensagem: TRIANGULO OBTUSANGULO;
Se A < B + C , apresente a mensagem: TRIANGULO ACUTANGULO;
Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;

*/

/*
let num1 = +prompt('Digite o 1° número: ');
let num2 = +prompt('Digite o 2° número: ');
let num3 = +prompt('Digite o 3° número: ');
let todosNum = [num1,num2,num3];
let verMaior = Math.max(num1,num2,num3)
let ordena = todosNum.sort(function(a,b){return a-b});

console.log(`voce digitou ${num1} ${num2} ${num3} 
o maior n° é ${verMaior}
a ordem deles é ${ordena} `);
*/
//A tem que ser o maior n°imputado


// RESOLUCAO DO PROF
// exercicio 5 - aula 03

// Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos:
// Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
// Se A = B + C , apresente a mensagem: TRIANGULO RETANGULO;
// Se A > B + C , apresente a mensagem: TRIANGULO OBTUSANGULO;
// Se A < B + C , apresente a mensagem: TRIANGULO ACUTANGULO;
// Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
// Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;

const prompt = require("prompt-sync")();

let A = +prompt("Digite o valor para o lado 1: ");
let B = +prompt("Digite o valor para o lado 2: ");
let C = +prompt("Digite o valor para o lado 3: ");
let X = 0;

console.log();
console.log("----- LADOS -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("-----------------");
console.log();

if (A < B)
{
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    X = A;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    A = B;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    B = X;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
}

console.log();
console.log("----- LADOS -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("-----------------");
console.log();

if (B < C)
{
    X = B;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    B = C;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    C = X;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
}

console.log();
console.log("----- LADOS -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("-----------------");
console.log();

if (A < B)
{
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    X = A;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    A = B;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    B = X;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
}

console.log();
console.log("----- LADOS -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("-----------------");
console.log();

if (A >= (B + C))
{
    console.log("NAO FORMA TRIANGULO");
}
else
{
    if ( (A*A) == (B*B) + (C*C) )
    {
        console.log("TRIANGULO RETANGULO");
    }
    if ( (A*A) > (B*B) + (C*C) )
    {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if ( (A*A) < (B*B) + (C*C) )
    {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (A == B && B == C)
    {
        console.log("TRIANGULO EQUILATERO");
    }
    if ( (A == B && A != C) || (B == C && B != A))
    {
        console.log("TRIANGULO ISOSCELES");
    }
}

console.log();
console.log("FIM DESSA DESGRAÇA!");
console.log();