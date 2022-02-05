//perdi a primeira hora da aula

const prompt = require('prompt-sync')();

//dia de revisao

//revisao array

/*
let lista = [
    {nome: 'Gabriel', idade: 18},
    {nome: 'Lucas', idade: 20},
]

console.log(lista[0].idade)
*/

//revisao function

/*
function validaIDade (year){
    let idade = 2022 - year;
    console.log(idade);
    if (idade>=18){
        console.log('voce é maior de idade')
        return true;
    }else{
        console.log('voce é menor de idade');
        return false;
    }

}

let ano = +prompt('digite o ano que vc nasceu: ')
let autoriza = validaIDade(ano);



if (autoriza){
    console.log('vc esta liberado')
}else{
    console.log('vc nao esta autorizado')
}
*/


//faz coisa diferente:
/*
function validaIDade (year){
    let idade = 2022 - year;
    console.log(idade);
    if (idade>=18){
        console.log('voce é maior de idade')
        return true;
    }else{
        console.log('voce é menor de idade');
        return false;
    }

}

let ano = +prompt('digite o ano que vc nasceu: ')
let autoriza = validaIDade(ano);
let listaIdade = [2010,1990,1985,2015,2000];


//COM FUNCAO:
listaIdade.forEach(validaIDade)

//com for:
// for (let i of listaIdade){
//     validaIDade(i)
// }
*/



//faz coisa diferente 2:
/*
function validaIDade (year, b, c){
    
    console.log('valor',year)
    console.log('indice',b)
    console.log('array',c)

    
    let idade = 2022 - year;
    console.log(idade);
    if (idade>=18){
        console.log('voce é maior de idade')
        return true;
    }else{
        console.log('voce é menor de idade');
        return false;
    }

}

function listavalores (a,b,c){
    console.log(`o valor do indice ${b} é ${a}`)
    console.log(c)
    console.log()
}

let listaIdade = [2010,1990,1985,2015,2000];


listaIdade.forEach(listavalores)
*/


//function com function (validando nome para maiusculo)
/*
function maisculo(a){
    let mai = a.toUpperCase();
    return mai
}

function validanome(nome_final){
    console.log('o nome é: ', nome_final)
}

let name = prompt ('digigite seu nome: ');

validanome(maisculo(name))
*/


//soma de duas formas (com arrow function):
/*
function calculadora(){
    let resultado = a + blur;
    return resultado;
}
*/

/*
const calculadora = (a,b) => a+b;//arrow function


let num1 = +prompt('digite o primeiro valor: ')
let num2 = +prompt('digite o segundo valor: ')
let soma = calculadora(num1,num2);
console.log(soma)
*/



//sintaxe de espalhamento
/*
let numeros = [13,15,18,20,30]

// function somalista (a,b,c,d,e){
//     let resultado = a+b+c+d+e;
//     console.log(resultado);
//     return resultado; 
// }

// somalista (numeros[0],numeros[1],numeros[2],numeros[3],numeros[4],) //forma pouca pratica se tivesse mais lista

somalista(...numeros)//spread sintaxe faz o mesmo do acima
*/



//cod do prof pt1

/*
const prompt = require('prompt-sync')();
console.clear();
console.log();



function maiuscula(a){
    let mai = a.toUpperCase();
    return mai;
}

function validanome(nome_final){
    console.log('O nome é:',nome_final);
}
*/


/*
// 3 passos: Pego o nome, passo para a variável que transforma em maiúscula
// armazeno esse nome em maiuscula em uma variavel
// passo essa variavel como argumento de outra função
let name = prompt('Digite seu nome: ');
let namemaiusc = maiuscula(name);
validanome(namemaiusc);
*/

/*
// Mesma coisa mas com 2 passos:
// pego o nome, passo como argumento de uma função que vai transformar em maiúscula
// e passo o retorno dessa função já como argumento da próxima.
// Não precisei armazenar o resultado em uma veriável antes
let name = prompt('Digite seu nome: ');
validanome(maiuscula(name));
*/



/*
function validaIdade(year){
    let idade = 2022 - year;
    console.log(idade);
    if (idade >=18){
        console.log('Você é maior de idade!');
        return true;
    } else {
        console.log('Você é menor de idade!');
        return false;
    }
}
*/

/*
let ano = +prompt('Digite o ano que você nasceu: ')
let autoriza = validaIdade(ano);
if (autoriza){
    console.log('Você está liberado para entrar.');
} else {
    console.log('Você não está autorizado.');
}
*/

/*
// Usando uma função para validar todos os elementos de uma lista
let listaanos = [2010, 1990, 1985, 2015, 2000];
for (let i of listaanos){
    validaIdade(i);
}
*/

/*
//forEach é uma maneira de rodar uma função para cada elemento em uma lista.
// Ele vai pegar cada elemento e passar para a função com 3 argumentos NESSA ORDEM:
// valor, índice, array inteira. 
function listavalores(a,b,c){
    console.log(`O valor do índice ${b} é ${a}.`)
    console.log(c);
    console.log();
}
listaidade.forEach(listavalores);
*/




/*
function somalista(a, b, c, d, e){
    let resultado = a + b + c + d + e
    console.log(resultado);
    return resultado;
}
let numeros = [13, 15, 18, 20, 30];
// somalista(numeros[0], numeros[1], numeros[2], numeros[3], numeros[4])
// Mesma coisa, de uma maneira mais fácil
somalista(...numeros)
*/






// while(!autoriza){
//     console.log('Você não está autorizado!')

//     autoriza = validaIdade();
//     if(autoriza){
//         console.log('Agora sim! ')
//     }
// }




/*
// function calculadora (a, b){
//     let resultado = a + b;
//     return resultado;
// }
// Mesma coisa que a função acima, usando arrow functions:
const calculadora = (a, b) => a + b;
// calculadora();
// console.log(calculadora());
let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');
let soma = calculadora(num1, num2);
console.log(soma);
*/





/*
let somas = +prompt('Quantos números quer somar? ');
let listasomas = [];
for (let i = 0; i < somas; i++){
    listasomas.push(calculadora());
}
// console.log(listasomas);
for (let i of listasomas){
    console.log(i);
}
*/


/*
let lista = [
    {nome: 'Gabriel', idade: 18},
    {nome: 'Lucas', idade: 20}
]
console.log(lista[0].idade);
*/



//parte 2 da aula minhas anotacoes
//objeto:

console.clear();

let pessoa = [
    {nome: 'Gabriel', idade: 18, cidade: 'londrina'},

]   

console.log(pessoa)

const cadastro = {
    nome: 'joao',
    email: 'joao@joao.com' ,
    telefone: '99999-9999',
    produto:'PC topzera'
}

console.log(cadastro)