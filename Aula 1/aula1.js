//console.log('olá mundo');

/*const prompt = require('prompt-sync')(); //const pois nunca vai mudar no codigo

//1-Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6.


let notaA = +prompt('Qual a primeira nota?');
let notaB = +prompt('Qual a segunda nota?');
let media = (((notaA * 4) + (notaB * 6))/(4+6));

console.log(`sua primeira nota foi ${notaA} e sua segunda nota foi ${notaB} portanto sua média foi de  ${media} ` );
*/

//console.log('salve')

/*const prompt = require('prompt-sync')();


let pegaPrompt = prompt('qual seu nome?');

console.log(pegaPrompt)*/

//---------------------conteudo da aula abaixo e acima teste para fazer o visual studio rodar no terminal
/*
//console.log('Hello world');

let nome = 'Joao'; //nao pode comecar com numero, porem pode terminar com numero//boas praticas recomendam, nao declarar variavel comecando com minusculo
let idade = 23;

//const cidade = 'londrina';//constante nao pode ser alterada

console.log(nome);
//console.log(typeof(nome))
console.log(idade);
//console.log(typeof(idade))

//let nome = 'Eduardo'// eu nao posso redeclarar porem eu posso alterar seu valor conforme abaixo

nome = 'Eduardo';//aqui eu nao declarei, aqui eu alterei os valores da variaveis
idade = 18;
cidade = 'Cidade'

console.log(nome);
//console.log(typeof(nome))
console.log(idade);

console.log(`Olá ${nome}, tudo bem?`)//com crase

let string = 'Blue';
let numberInt = 10;
let numberFloat = 10.5;
let boolean = true;

console.log (typeof(string),typeof(numberInt),typeof(numberFloat),typeof(boolean),);
*/
//const promt = require('prompt-sync')(); //const pois nunca vai mudar no codigo

/*let nome = prompt('qual é o seu nome? ');
console.log('Olá ', nome);
//let numero = promt ('digite um numero que eu vou somar dez ');
let numero = +promt ('digite um numero que eu vou somar dez ');//com o sinal de "+" ele converte para numero portanto na linha 37 ele apresenta o valor armazenado em idade e junta string o proprio valor (portando)---- se quero converter pra numero uso o +prompt se quero usar como string uso só prompt


console.log(numero +10);

console.log();
*/

/*let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');

console.log(num1 + num2);*/

/*
let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');

//console.log(`Subtração: ${num1} - ${num2} = ${num1 - num2}`); forma 1
//console.log('Subtração: ',num1 '-', num2, '=', num1 - num2');forma 2
console.log(`Subtração: ${num1} menos ${num2} igual ${num1 - num2}`);//forma 3
console.log(`Multiplicação: ${num1} * ${num2} = ${num1 * num2}`); // Em JavaScript usamos um * para multiplicação
console.log(`Divisão: ${num1} / ${num2} = ${num1 / num2}`);
console.log(`Resto da divisão de ${num1}/${num2}: ${num1 % num2}`);
console.log(`Resultado de ${num1} elevado a ${num2}: ${num1 ** num2}`);*/

//--------------EXERCICIO------------------
//Exercícios de Fixação

const prompt = require('prompt-sync')(); //const pois nunca vai mudar no codigo

//1-Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6.

/*let notaA = +prompt('Qual a primeira nota?');
let notaB = +prompt('Qual a segunda nota?');
let media = (((notaA * 4) + (notaB * 6))/(4+6));

console.log(`sua primeira nota foi ${notaA} e sua segunda nota foi ${notaB} portanto sua média foi de  ${media} ` );*/

//2- Neste problema, deve-se ler o nome de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o nome de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

/*let peca1 = prompt('Qual o nome da peça 1? ');
let qtdPeca1 = +prompt('Quantas peça 1 você tem? ');
let valorPeca1 = +prompt('Qual o valor da peça 1? ');
let peca2 = prompt('Qual o nome da peça 2? ');
let qtdPeca2 = +prompt('Quantas peça 2 você tem? ');
let valorPeca2 = +prompt('Qual o valor da peça 2? ');

console.log("\nJá que o valor da peça 1 é "+ valorPeca1+ " e você tem "+ qtdPeca1 +" e o valor da peça 2 é "+ valorPeca2+ " e você tem "+ qtdPeca2 +" o valor total é de: "+ "\n" +((qtdPeca1*valorPeca1)+(qtdPeca2*valorPeca2)));*/

// 3-Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.

/*let anos = +prompt('Quantos anos você tem? ');
let meses = +prompt('Quantos meses você tem? ');
let dias = +prompt('Quantos dias você tem? ');

console.log('\nVoce tem ' + (anos * 365 + meses * 30 + dias) + ' dias de vida');*/

//4 -Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.

let qtdDias = +prompt('Quantos dias de vida você tem? ');

//let calAno = Math.trunc(qtdDias * 0.002738); //Math.trunc retira os decimais
// let calAno = qtdDias * 0.002738;
let calAno = qtdDias / 365;

let calMeses = (qtdDias / 365 - Math.trunc(qtdDias / 365)) * 12; //arredondo a quantidade de ano (portanto deixando sem casa decimal) e subtraiu pelo valor com a casa decimal, ficando agora com o resto>depois eu multiplico pela quantidade de meses
//let calMeses = qtdDias *12 ;

let calDias = qtdDias - (Math.trunc(calAno) * 365 + Math.trunc(calMeses) * 30); //dias - ((anos*dias)+(meses*dias))----- transformo ano em dia, depois mes em dia e subtratiu do dias totais, o resto é os dias. porem só funciona se utilizar o valor sem casa decimal
//let calDias = qtdDias * 30;

//console.log(`Voce tem ${calAno} anos ${calMeses} meses e ${calDias} dias`);
console.log(
    `Voce tem ${Math.trunc(calAno)} anos ${Math.trunc(
        calMeses,
    )} meses e ${calDias} dias`,
);

//forma de resoilver a 4 do professor
/*let idadeEmDias = +prompt("Digite sua idade em dias: ");

console.log(idadeEmDias);

let diasEmAnos = Math.trunc(idadeEmDias / 365);
console.log("Idade em anos: " + diasEmAnos);

let restoDias1 = idadeEmDias % 365;

let diasEmMeses = Math.trunc(restoDias1 / 30);
console.log("Idade em meses: " + diasEmMeses);

let restoDias2 = restoDias1 % 30;
console.log(`Idade em dias: ${restoDias2}`);*/

//22

