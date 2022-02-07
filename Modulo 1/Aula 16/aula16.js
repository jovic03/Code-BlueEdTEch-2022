const prompt = require('prompt-sync')();

//basic review de objetos

let array = ['Gabriel',20,'Londrina'];

let objeto = {
    nome:'Gabriel',
    idade: 20,
    cidade:'Londrina',

    mudacidade: function(nova){
        this.cidade = nova
    },

    bio: function(){
        console.log(`o nome é ${this.nome}, tem ${this.idade} anos e mora em ${this.cidade}`)
    }


}

objeto.bio();

objeto.mudacidade('Peruibe');
console.log();

objeto.envelhecer = function(){//criar uam metodo que nao estava no objeto "objeto"
    this.idade++
}

objeto.envelhecer();

objeto.bio();


//PROMISES

/*
Imagine que eu estou com fome, e resolvo ir comprar uma pizza. Eu tenho então
 2 situações possíveis:
Situação 1: eu vou a uma pizzaria, peço uma pizza para viagem no balcão e fico 
plantado lá, só esperando me entregarem o pedido para que eu possa ir embora.

Situação 2: eu vou a uma pizzaria, peço uma pizza para viagem 
no balcão e, enquanto ela não fica pronta, dou uma passada no supermercado 
ao lado para já garantir a compra da semana.

Na situação 1, parei tudo que eu estava fazendo até que o resultado da minha 
operação (pedir uma pizza) estivesse pronto. Isso seria uma operação síncrona.
Na situação 2, eu começo a executar uma operação (pedir uma pizza), mas enquanto 
la não retorna o resultado eu posso aproveitar para executar outras 
operações (ir ao mercado) ao mesmo tempo, chamamos isso de operação assíncrona.
Antigamente, operações assíncronas não eram tão comuns... E em busca de 
uma experiência mais decente para o usuário final, começou a ser desenvolvido 
algumas técnicas para conseguir enviar dados para o servidor sem que a página atual 
fosse carregada. (muitas gambiarras). Até que em 2005, Jesse James Garret 
escreveu um artigo sobre o conjunto de técnicas e tecnologias de assincronismo 
que já vinham sendo usadas em projetos como Google Maps e Google Suggest, batizando 
tudo isso como AJAX... e o mundo mudou a partir daí. 


Callbacks
Geralmente se deseja efetuar alguma ação quando uma operação 
assíncrona é concluída. Nos primeiros anos do AJAX, a maneira universal 
de se fazer isso era usando callbacks.
 */

function pizzaPronta(sabor) {
    console.log(`Sua pizza de ${sabor} está pronta.`);
}
  
function pedirPizza(callback) {
    const sabor = prompt('Escolha o sabor da sua pizza: ');
    callback(sabor);
}
  
pedirPizza(pizzaPronta);


/*

Uma callback é uma função passada como argumento para outra 
função, e, geralmente, só é executada quando alguma operação é 
concluída ou quando um evento específico ocorre.
O exemplo acima é de uma callback síncrona, ou seja, ela só vai executar a 
próxima função quando a primeira terminar de ser executada. No entanto, callbacks 
são normalmente utilizadas para continuar a execução do código após uma operação 
assíncrona ser terminada — essas são chamadas callback assíncronas.
O problema é que quando temos várias funções que dependem umas das outras 
dessa forma, podemos facilmente cair no que chamamos de callback hell.

*/





//PROMISE

/*

Ao invés disso usamos promises. Promise é um objeto usado para processamento 
assíncrono. Um promise (de "promessa") representa um valor que pode estar 
disponível agora, no futuro ou nunca. É uma maneira mais simples de executar funções 
assíncronas que dependem umas das outras.


*/

function primeiraFuncao(parametro) {
    return new Promise((resolve, reject) => {
        console.log(`Essa é a primeira função, ela escreve: ${parametro}`);
 
        resolve(parametro);
    });
}

function segundaFuncao(parametro) {
    return new Promise((resolve, reject) => {
        const novoParametro = parametro + 10;

        console.log(`Essa vai adicionar 10, totalizando: ${novoParametro}`);
 
        resolve(novoParametro);
    });
}

function terceiraFuncao(parametro) {
    return new Promise((resolve, reject) => {
        const novoParametro = parametro * 2;

        console.log(`Essa é a terceira função, ela dobra o valor: ${novoParametro}`);      

        resolve(novoParametro);
    });
}

function quartaFuncao(parametro) {
    return new Promise((resolve, reject) => {
        const novoParametro = parametro - 15;
 
        console.log(`Essa é a quarta função, subtraindo 15: ${novoParametro}`);
    
        resolve(novoParametro);
    });
}

primeiraFuncao(10)
    .then(segundaFuncao)
    .then(terceiraFuncao)
    .then(quartaFuncao);

    // primeiraFuncao(10).then(segundaFuncao).then(terceiraFuncao).then(quartaFuncao);
 
/*
Apesar da declaração das funções parecem complicadas em um primeiro 
momento, podemos ver que a execução é bem mais simples!
Porém, um promise é um objeto que pode te retornar um valor, ou não! Quando estamos 
executando uma função assíncrona, vamos continuar com a execução do nosso 
código na esperança que aquele valor que foi prometido seja retornado. Porém 
alguma coisa pode acontecer e ela não conseguir nos retornar esse valor! É por 
isso que temos o parâmetro reject no exemplo acima, ele será o responsável por 
informar ao programa o que deve ser feito caso a promise seja rejeitada, ou seja, se 
acontecer alguma falha na execução e não for possível retornar o valor que gostaríamos. Então 
os dois parâmetros das nossas funções são:
Resolve: A função resolve deve ser chamada para sinalziar que a 
promessa foi cumprida, ou "resolvida". Caso a operação assíncrona que estava sendo 
executada possua algum retorno, você o passa como argumento para a função resolve. Quando 
a promessa é resolvida, o primeiro then da cadeia é chamado.
Reject: em caso de alguma falha, a função reject deve ser chamada. Ao executá-la, você 
estará sinalizando que a promessa falhou e não será possível retornar o valor que você 
estava esperando.
Para tratar exceções em cadeias de then(), você pode usar o método catch().
Por exemplo no código abaixo temos uma função responsável por transformar uma 
string em maiúsculas, e outra responsável por fazer um console.log dessa string. Ele 
está funcionando corretamente, mas o que aconteceria se o parâmetro passado fosse um número?


*/

//tratando erros

function alteraNome(parametro) {
    return new Promise((resolve, reject) => {
        parametro = parametro.toUpperCase();

        resolve(parametro);
    });
}

function escreveNome (parametro) {
    return new Promise((resolve, reject) => {
        console.log(`Aqui está o nome em MAIÚSCULAS: ${parametro}`);

        resolve(parametro);
    });
}

alteraNome('blue')
    .then(escreveNome)
    .catch((err) => console.log('Alguma coisa deu errada no caminho...', err));

/*

O método toUpperCase() não pode ser usado em números, resultando em um 
erro que é tratado pelo catch() ao final.

*/