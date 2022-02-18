const prompt = require('prompt-sync')();

/*1- Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.*/

/*
let nota_a = +prompt('Digite a primeira nota: ');

let nota_b = +prompt('Digite a segunda nota: ');

let calculaMedia = ((nota_a * 4)+(nota_b*6))/(4+6);

console.log(calculaMedia);
*/

/*2- Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.*/
/*
let pec1 = prompt('Qual o nome do produto 1? ');
let prcpec1 = +prompt('Qual o preço do produto 1? ');
let qtdpec1 = +prompt('Qual a quantidade do produto 1? ');

let pec2 = prompt('Qual o nome do produto 2? ');
let qtdpec2 = +prompt('Qual a quantidade do produto 2? ');
let prcpec2 = +prompt('Qual o preço do produto 2? ');


let calcPrc = ((prcpec1*qtdpec1) + (prcpec2*qtdpec2 ));

console.log(`O preço do produto ${pec1} é de ${prcpec1} e você ionformou que tem ${qtdpec1} unidade desse produto;
O preço do produto ${pec2} é de ${prcpec2} e você ionformou que tem ${qtdpec2} unidade desse produto;
portanto o valor toal é de ${calcPrc}`);
*/

/*3- Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.*/
/*
let anos = +prompt('Quantos anos vc tem? ');
let meses = +prompt('Quantos meses vc tem? ');
let dias = +prompt('Quantos dias vc tem? ');

let calDias = ((anos * 365) + (meses * 30) + dias);

console.log(`Voce viveu dias ${calDias} de vida`);
*/

/* 4 -Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.*/

let dias = +prompt('Quantos dias vc tem? ');

let calcyy = Math.floor(dias/365);

let calcmm = Math.floor((dias%365)/30);

let caldd = ((dias%365)%30)

console.log(dias, calcyy, calcmm, caldd)
