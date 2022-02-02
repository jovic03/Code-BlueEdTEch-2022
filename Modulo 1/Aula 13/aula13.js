const prompt = require('prompt-sync')();

//como criar eventos aleatorios

/*
function chuva (){
    console.log('Esta chovendo')
}

let escolha = +prompt('escolha sua acao: 1 - ir trabalhr')
let aleatorio = 0;

while(true){
    if (escolha ==1){
        console.log('voce foi trabalhar');
        aleatorio = Math.trunc(Math.random()*100);
        console.log(aleatorio)
            if(aleatorio<=10){
                chuva();
            }
            escolha = +prompt('escolha sua acao: 1 - ir trabalhr')
    }else{
        break;
    }
}
*/

//return em function revisao

//exempolo1
/*
function soma (a,b){
    let soma = a +b;
    console.log(soma);
}
soma(13,10)// 'a' recebe 13 e 'b' recebe 10 
*/
//exempolo2

/*
function multi (a,b){
    let multiplicao = a * b;
    console.log(multiplicao);
}
soma(13,10)// 'a' recebe 13 e 'b' recebe 10 
*/
//exempolo3

/*
function idade (ano){
    let idade = 2022 - ano;
    console.log(idade);
}

idade(2010);
*/



//exeplo 3 com retorno
/*
function calculaidade (ano){
    let idade = 2022 - ano;
    return idade;
}

let year = +prompt('Digitye seu ano de nascimento: ')
let age = calculaidade(year);
console.log(age)
*/



//exeplo 3 com retorno vs2
/*
function calculaidade (ano){
    let idade = 2022 - ano;
    if (idade>=18){
        return true;
    }else{
        return false;
    }
}

let year = +prompt('Digitye seu ano de nascimento: ')
let age = calculaidade(year);

if  (age == true){//por padrao age é true entao nao precisaria colocar o '== true'
    console.log('voce podew beber')
}else{
    console.log('melhor nao beber')
}
console.log(age)
*/


//exeplo 3 com retorno vs2 com array

function highlander (ano){
    let idade = 2022 - ano;
    if (idade>=2000){
        console.log('achammos o highlander');
        let dados = [];
        dados.push(idade);
        let nome = prompt ('digite seu nome ');
        dados.push(nome);
        let cidade = prompt('digite sua cidade: ');
        dados.push(cidade);
        let altura = +prompt('digite sua altura: ')
        dados.push(altura);
        
        return dados;

    }
}

let year = +prompt('Digite seu ano de nascimento: ')
// let age = calculaidade(year);

let verifica = highlander(year)
console.log(verifica)
