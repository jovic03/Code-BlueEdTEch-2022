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
let inicio = +prompt ('qual nmr vc quer comcecar? ');
let final= +prompt ('qual numero vc quer terminar ');
let incremento = +prompt('qual vlr de incremento ');

for (let i = inicio; i >= final; i = i - incremento) { // este "i" é outra variavel
    console.log("Isso é uma repetição!");
    console.log(i)
}
