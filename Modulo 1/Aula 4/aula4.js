const prompt = require('prompt-sync')();

//Exercícios Extras
/*
1) Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 
Salários até R$ 280,00 (incluindo): aumento de 20%. 
Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
Salários de R$ 1500,00 em diante: aumento de 5%.
Após o aumento ser realizado, informe na tela:
O salário antes do reajuste.
O percentual de aumento aplicado.
O valor do aumento.
O novo salário, após o aumento.


let salario = +prompt('Informe o salário: ');
let salaAcresc
let percAument;
let aumenVlr;

if (salario < 281 ){
    
    salaAcresc = salario + (salario * 0.20);
    percAument = '20%'
    aumenVlr = salario * 0.20;
}
if (salario > 280 && salario < 700){
    salaAcresc = salario + (salario * 0.15);
    percAument = '15%';
    aumenVlr = salario * 0.15;
}
if (salario >= 700 && salario < 1500){
    salaAcresc = salario + (salario *0.10)
    percAument = '10%';
    aumenVlr = salario * 0.10;
}
if(salario >=1500){
    salaAcresc = (salario + salario *0.5)
    percAument = '5%';
    aumenVlr = salario * 0.5;
}

console.log(`Seu salário antes do reajuste era de ${salario};
*teve um aumento de ${percAument}
*o aumento foi no valor de ${aumenVlr} 
*seu salário agora é de ${salaAcresc}`)
*/

/*
2) Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/
/*
let numImput = +prompt( 'Adivinhe um número entre de 0 até 10: ');
let numAleatorio = Math.round(Math.random()*10) ;

if (numImput == numAleatorio){
    console.log(' Você venceu');
    console.log(`Você informou ${numImput} e o número realmente era ${numAleatorio}`)
}
else{
    console.log('Você errou!');
    console.log(`Você informou ${numImput} e o número realmente era ${numAleatorio}`)
}
*/

/*
3) Caixa Eletrônico - Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/
