const prompt = require('prompt-sync')();


/*
A condição é testada, caso verdadeira irá para a execução do código (passo 2).
Depois de validada a condição como verdadeira, a declaração é executada.
Quando a condição retorna false, a declaração é ignorada.
A sintaxe é bastante simples, semelhante ao que vimos no if:
*/

/*
let num1 = 15;
let num2 = 20;

while (num1<num2){
    console.log(`O ${num1} é menor`);
    num1++//aumenta em 1 o valor de num1
}
*/

/*
let num = 0;

while (num <= 5) {
    console.log(num);
    num++;
}
*/


/*
let num = 0;

while (num <= 10) {
    num = prompt('Digite um número maior que 10: ');
}
*/

/*
1-Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
*/
/*
let nomeUsr ;
let senha;

do{
    nomeUsr = prompt('Digite seu usuário: ');
    senha = prompt('Digite sua senha:');
} while (nomeUsr==senha)
console.log('Nome e Senha não podem ser iguais')
*/

/*
2-Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd';
*/

/*
let nome = prompt('Digite seu nome: ');
//let idade = +prompt('Digite sua idade: ');
// let salario = +prompt ('Digite seu salário: ');
// let estCivil =  prompt ('Digite seu estado civil (s,c,v,d)');
let nomeOk;
let idadeOk;
let salarioOk;
let estCivilOk;


while (nome.length < 3){
    console.log('Nome tem que ter mais de 3 caracteres');
    nome = prompt('Digite seu nome: ');
}

while (idade >= 0 && idade <= 150 ){

}


// if (idade >= 0 && idade <= 150){
//     idadeOk = 'sua idade está ok, '
// }
// if (salario> 0){
//     salarioOk = 'seu salário está ok, ';
// }


//while (estCivil != 's' ||estCivil != 'c' ||estCivil != 'v' ||estCivil != 'd' ){}


do{
    if (estCivil != 's' ||estCivil != 'c' ||estCivil != 'v' ||estCivil != 'd' ){
        console.log('Digite um dos estados civis a seguir: S, C, V ou D')
    }
    else{
        estCivilOk = 'Seu estado civil está correto. '
    }
} while (estCivil != 's' ||estCivil != 'c' ||estCivil != 'v' ||estCivil != 'd' )

console.log(`${nomeOk} ${idadeOk} ${salarioOk} ${estCivilOk}`)

nao finalizado
*/
//resolucao do professor 
let nome = prompt('Digite seu nome: ');
while(nome.length <= 3){
    console.log('Nome inválido. Precisa ter mais de 3 caracteres.')
    nome = prompt('Digite seu nome: ');
}

let idade = prompt('Digite sua idade: ');
while(idade <=0 || idade > 150){
    console.log('idade inválida!');
    idade = prompt('Digite sua idade: ');
}

let salario = prompt('Digite seu salário: ');
while(salario <= 0){
    console.log('Salário inválido!')
    salario = prompt('Digite seu salário: ');
}

let estado = prompt('Digite seu estado civil: ').toLowerCase();
while(estado != 's' && estado != 'c' && estado != 'v' && estado != 'd'){
    console.log('Estado civil inválido.')
    estado = prompt('Digite seu estado civil: ').toLowerCase();
}

//11