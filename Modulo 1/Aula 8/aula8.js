/*

ex 4 aula 7 um pequieno gosto:
senha = 'abc1';
senhaB = 'abc8';

let validanmr = senha.incluides(0) || senha.includes (1); //se tiver algum dos 2 valores da true se for false, portanto
console.log(validanmr);


let senha = prompt ('Digite a senha: ');
let valida = senha.incluides(0) || senha.includes (1);

if(valida){
    console.log('A senha é válida')
}else{
    console.log('Senha inválida');
}
*/


/*
FOR

Uma expressão do tipo for cria um loop que vai repetir uma declaração por uma quantidade (geralmente) fixa de vezes.
As três principais formas de utilização do for são o for (também conhecido como for indexado) o for of e o for in.
*/

const prompt = require('prompt-sync')();


// let i = 'batata';// esse é uma varaiavel A
//--------------------------------------^
//--------------------------------------|
/*for (let i = 0; i < 10; i++) { // este "i" é outra variavel
    console.log("Isso é uma repetição!");
    console.log(i)
}*/

// console.log(i);


//seleciona de quanto vai comecar e terminar
/*
let inicio = +prompt ('qual nmr vc quer comcecar?')
let final= +prompt ('qual numero vc quer terminar')

for (let i = inicio; i <= final; i++) { // este "i" é outra variavel
    console.log("Isso é uma repetição!");
    console.log(i)
}*/


//de 2 em 2
/*
let inicio = +prompt ('qual nmr vc quer comcecar?')
let final= +prompt ('qual numero vc quer terminar')

for (let i = inicio; i <= final; i = i +2) { // este "i" é outra variavel
    console.log("Isso é uma repetição!");
    console.log(i)
}*/


//aumentar de quanto em quanto
/*
let inicio = +prompt ('qual nmr vc quer comcecar?');
let final= +prompt ('qual numero vc quer terminar');
let incremento = +prompt('qual vlr de incremento');

for (let i = inicio; i <= final; i = i + incremento) { // este "i" é outra variavel
    console.log("Isso é uma repetição!");
    console.log(i)
}
*/

//descrescimo
/*
let inicio = +prompt ('qual nmr vc quer comcecar? ');
let final= +prompt ('qual numero vc quer terminar ');
let incremento = +prompt('qual vlr de incremento ');

for (let i = inicio; i >= final; i = i - incremento) { // este "i" é outra variavel
    console.log("Isso é uma repetição!");
    console.log(i)
}
*/


// repeticaO DE FOR + while (como se fosse comprar mais fichas)
/*
let continuar = 's';

while (continuar == 's'){
    let fichas = +prompt('Quer quantas fichas? ');
    for(let i = fichas; i>= 0; i--){
        console.log(`VOce ainda tem ${i}`);
    }
    continuar = prompt('quer comprar mais fichas?')
}
*/

//FOR OF
/*
for...of é uma maneira de usar a expressão for para percorrer objetos
 iterativos (a lista é um exemplo de objetivo iterativo), chamando assim
  a execução de uma declaração para o valor de cada objeto dentro dela.
Na documentação oficial você pode encontrar vários exemplos de objetos
 que podem ser usados para serem percorridos com o for.
Para isso declaramos uma variável que será usada para percorrer o objeto
 iterativo, sendo que cada repetição irá executar o código que estiver 
 dentro da declaração. Ela será repetida o número necessário de vezes 
 para percorrer todo o objeto.
*/

/*
const filmes = ["Jurassic Park", "O Senhor dos Aneis", "Harry Potter"];

for (const filme of filmes) {
    console.log(filme);
}
*/

//FOR IN
/**
 for...in tem uma execução semelhante, porém, ao invés de interagir 
 com o valor dos elementos, ele interage com os índices deles. Em outras
  palavras, ele interage com a posição do item dentro do objeto iterável.
 */

  /*
  const filmes = ["Jurassic Park", "O Senhor dos Aneis", "Harry Potter"];

for (const indice in filmes){
    console.log(`O filme no indice ${indice} é : ${filmes[indice]}`);
    if (indice ==2){
        break;
    }
}
*/


// exerciocios:
/*
1-Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
[ 0, 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 2, 3, 4, 5 ]
*/
/*
2-Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
*/
3-Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.

/*
4-Faça um programa que carregue uma lista com os modelos de cinco carros. Carregue uma outra lista com o consumo desses carros, isto é, quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
O modelo do carro mais econômico;
Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 5,50 o litro.
*/