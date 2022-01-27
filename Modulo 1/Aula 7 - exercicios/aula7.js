const prompt = require('prompt-sync')();

/*1 - Faça um programa que peça um número inteiro e crie arrays com:
Todos os números pares de 0 ao número escolhido
Todos os números ímpares do 0 ao número escolhido*/

/*
let pedeNmr = +prompt('Escolha um numero e irei dizer os pares e impares entre ele: ')
let nmr = [];
let par = [];
let impar = [];

for (let i = 0 ; i < pedeNmr; i++){
    nmr.push(i);
    //console.log(nmr)

    if (i%2 == 0){
        par.push(i);
    }
    else{
        impar.push(i);
    }

}
console.log(nmr)
console.log(par)
console.log(impar)
*/

/*2 - Crie um programa em que o usuário escolha a quantidade de notas serem entradas e depois peça e armazene 
essa quantidade de notas em um array. Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), 
EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).*/
/*
let notaAlunoArm = [];
let aprovado = [];
let recuperacao = [];
let reprovado = [];

let qtdAlunos = +prompt('Quantos notas você quer cadastrar? ');

for (let i = 0; i < qtdAlunos; i++){

    let notaAluno = +prompt('Qual a nota do aluno? ');
    notaAlunoArm.push(notaAluno);
    if (notaAluno >= 7){
        aprovado.push(notaAluno);
    }
    if (notaAluno > 4 && notaAluno < 8){
        recuperacao.push(notaAluno);
    }
    if (notaAluno < 5){
        reprovado.push(notaAluno);
    }
}

console.log(`${notaAlunoArm}
${aprovado.length} aprovados,
${recuperacao.length} de reccuperacao
${reprovado.length} reprovados`);
*/

/*3 - Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima 
em ordem crescente.*/



/*4 - Faça um programa que peça o nome de usuário e a senha de um usuário. A senha deve ter no mínimo
 8 caracteres, pelo menos um número e um caracter especial.*/