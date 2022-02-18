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
/*
let dias = +prompt('Quantos dias vc tem? ');

let calcyy = Math.floor(dias/365);

let calcmm = Math.floor((dias%365)/30);

let caldd = ((dias%365)%30)

console.log(dias, calcyy, calcmm, caldd)
*/

/*

1) Frase na tela - Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!".
*/
/*
console.log('O primeiro programa a gente nunca esquece!".')
*/

/*2) Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda, o CEP na terceira e o telefone na quarta.*/

/*3) Letra de Música - Faça um programa que mostre na tela uma letra de música que você gosta.*/

/*4) Tabela de notas - Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos. Como primeiro passo, escreva um programa que produza a seguinte saída:
ALUNO (A) || NOTA
ALINE || 9.0
MÁRI0 || 10
SÉRGIO || 4.5
SHIRLEY || 7.0
*/

/*5) Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.*/

/*6) Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário: quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10). Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro (o jogador irá derrotar o monstro em 8 turnos).*/

/*7) E os 10% do garçom? - Defina uma variável para o valor de uma refeição que custou R$ 42,54. Na sequência, defina uma variável para o valor da taxa de serviço que é de 10%. Por fim defina uma variável que será responsável pelo cálculo do valor total da conta e exiba-o no console com a seguinte formatação: R$99.99 (valor com duas casas decimais).*/

/*8) Qual o valor do troco? - Crie um programa que calcule o troco de uma compra no valor de R$100,98 e que foi paga com R$150,00. O valor do troco deve ser exibido no console.*/

/*9) Conversor de moedas - Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para dólar.*/