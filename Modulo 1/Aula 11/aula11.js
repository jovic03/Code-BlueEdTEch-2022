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

//DECLARANDO A FUNCAO: estou ensinando ao computador o que ele tem que fazer
//eu só prciso ensinar uma vez, depois posso usar quantas vezes necessário
//basta chamar pelo nome funcao()
//ela só se ativa depois que eu a chamo
/*
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
*/

/*
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
*/

/*
function saudacao(){
    console.log('Seja bem vindo(a) Bluemer!');
    console.log('Essa é a aula 11 do nosso curso.');
    console.log();
}

saudacao();
*/

/*
function saudacao(){
    let nome = prompt('Qual o seu nome? ');
    let idade = prompt('Qual a sua idade? ')
    console.log();
    console.log(`Seja bem vindo(a) ${nome}!`);
    if (idade >= 18){
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
    console.log();
}

saudacao();
*/

/*
function saudacao(){
    console.log();
    console.log(`Seja bem vindo(a) ${nome}!`);
    if (idade >= 18){
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
    console.log();
}

let nome = prompt('Qual o seu nome? ');
let idade = prompt('Qual a sua idade? ');

saudacao();
*/

/*
function saudacao(nome, ano){
	let idade = 2022 - ano;
    console.log();
    console.log(`Seja bem vindo(a) ${nome}!`);
    if (idade >= 18){
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
    console.log();
}

let nome = prompt('Qual o seu nome? ');
let nasc = prompt('Qual o seu ano de nascimento? ')

saudacao(nome, nasc)
*/
// saudacao(prompt('Qual o seu nome? '), +prompt('Qual o seu ano de nascimento? '));

//forma 2:
// saudacao(nome, nasc);

// saudacao(nasc, nome); nao funciona pois tem que ser na ordem da funcao 
//ou seja, nome tem que ser o primeiro parametro da funcao e da nome da chamada da funcao
//e nasc tem que ser o segundo tal qual ano é o 2º parametro


/*
function saudacao(a, b){
	let idade = 2022 - b;
    console.log();
    console.log(`Seja bem vindo(a) ${a}!`);
    if (idade >= 18){
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
    console.log();
}

let x = prompt('Qual o seu nome? ');
let y = prompt('Qual o seu ano de nascimento? ')

saudacao(x,y)
*/

/*
function saudacao(ano, nome = 'Aluno(a)'){//quando colcoar parametro pre definodo colcoar por ultimo
	let idade = 2022 - ano;
    console.log();
    console.log(`Seja bem vindo(a) ${nome}!`);
    if (idade >= 18){
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
    console.log();
}

let x = prompt('Qual o seu nome? ');
let y = prompt('Qual o seu ano de nascimento? ')

// saudacao(y,x);
saudacao(y);*/



/*
function verifica_sujeira(){
    let sujo = prompt ('Está sujo(a)? ')
    if(sujo =='s'){
    va_tomar_banho();
}

}

//EXERCIOCIO
/*
 1- Faça um programa, com uma função que necessite de três 
 argumentos: dois números e um sinal de 
 operador matemático (+, -, * ou /). Ela deve fazer o 
 cálculo indicado pelo operador usando os dois número 
 passados.
*/

/*
function calculadora (num1, operador,num2){
    let mais = num1 + num2;
    let menos = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    
    if ( pede_perador == '+'){
        operador = mais;
        console.log(operador)
    }
    else if ( pede_perador == '-'){
        operador = menos;
        console.log(operador)
    }
    else if ( pede_perador == '*'){
        operador = multiplicacao;
        console.log(operador)
    }
    else if ( pede_perador == '/'){
        operador = divisao;
        console.log(operador)
    }
}

let pede_perador = prompt('Digite o calculo a ser feito (+,-,*,/): ');
let numero1 = +prompt('Digite o primeiro numero: ');
let numero2 = +prompt('Digite o segundo numero: ');


// console.log(`Voce quer o calculo de ${numero1} ${pede_perador} ${numero2} que é igual a `,calculadora(numero1,pede_perador,numero2))
console.log(`Voce quer o calculo de ${numero1} ${pede_perador} ${numero2} que é igual a: `)
calculadora(numero1,pede_perador,numero2)
*/


//RETURN ---- o return funciona como brak e armazena o dado, portanto ele para a execucao quando chega nele
//serve para tirar o valor dentro da funcao
/*
function somar(a, b){
    let soma = a + b;
    return soma;
}

let resultado = somar(15, 20);
console.log(resultado);

*/



function calculadora (num1, operador,num2){
    let mais = num1 + num2;
    let menos = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    
    if ( pede_perador == '+'){
        operador = mais;
        // console.log(operador)
        return operador;
    }
    else if ( pede_perador == '-'){
        operador = menos;
        // console.log(operador)
        return operador;
    }
    else if ( pede_perador == '*'){
        operador = multiplicacao;
        // console.log(operador)
        return operador;
    }
    else if ( pede_perador == '/'){
        operador = divisao;
        // console.log(operador)
        return operador;
    }

    // return operador;
}

let pede_perador = prompt('Digite o calculo a ser feito (+,-,*,/): ');
let numero1 = +prompt('Digite o primeiro numero: ');
let numero2 = +prompt('Digite o segundo numero: ');


console.log(`Voce quer o calculo de ${numero1} ${pede_perador} ${numero2} que é igual a: `)
// calculadora(numero1,pede_perador,numero2);

let res = calculadora(numero1,pede_perador,numero2);

console.log(res);



/*
2 - Construa uma função que receba uma data 
no formato DD/MM/AAAA e devolva uma string no 
formato 'D de mesPorExtenso de AAAA'. Valide a data e 
retorne NULL caso a data seja inválida.
*/

/*
function dataform(dia, mes){
    if (mes == 1){
        mes == 'janeiro'
    }
    else if (mes == 2){
        mes == 'febereiro'
    }
    else if (mes == 3){
        mes == 'marco'
    }
    else if (mes == 4){
        mes == 'abril'
    }
    else if (mes == 5){
        mes == 'maio'
    }
    else if (mes == 6){
        mes == 'junho'
    }
    else if (mes == 7){
        mes == 'julho'
    }
    else if (mes == 8){
        mes == 'agosto'
    }
    else if (mes == 9){
        mes == 'setembro'
    }
    else if (mes == 10){
        mes == 'outubro'
    }
    else if (mes == 11){
        mes == 'novembro'
    }
    else if (mes == 12){
        mes == 'dezembro'
    }

    if (dia > 30){
        dia = null;
    }

    let
}

let pegaData = prompt('Digite a data no formato DD/MM/AAAA')
*/

//correcao do professor da 2:

/*
function escrevedata(data){
    let dataSplit = data.split('/');*/
    //teria que validar as datas (se dia maior que 30, mes maior que 12... etc)
    //*estava comentada*console.log(`${dataSplit[0]} de ${dataSplit[1]} de ${dataSplit[2]} `)
    /*
    forma 2:
    if (dataSplit[1] == 01){
        dataSplit[1]= 'Janeiro';
        console.log(`${dataSplit[0]} de ${dataSplit[1]} de ${dataSplit[2]} `)
    }*/
    /*
    let mes = dataSplit[1];
    let meses = ['Jan','Fev', 'Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    console.log(`${dataSplit[0]} de ${meses[mes-1]} de ${dataSplit[2]}`)

}

let pegaData = prompt('Digite a data no formato DD/MM/AAAA : ');
escrevedata(pegaData);
*/


/*
let data = '21/12/2021'
dataSplit = data.split('/')
console.log(dataSplit)*/