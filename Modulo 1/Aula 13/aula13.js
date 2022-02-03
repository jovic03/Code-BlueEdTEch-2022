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
multi(13,10)// 'a' recebe 13 e 'b' recebe 10 
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

/*
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
*/


//exemplo de relogio:
/*
let hora = 6
let minuto = 0 ;
let tempo = 0;

while (hora <10){
    console.log(`São ${hora}:${minuto}`);
    tempo= +prompt('Quantos minutos quer adicionar? ')
    minuto+=tempo;

    if (minuto>=60){
        minuto = minuto -60;
        hora++;
    }
}
*/


//exemplo hora com data:

/*
function adicionaZero(numero) {
    if (numero <= 9) {
        return '0' + numero;
    } else {
        return numero;
    }
}
function tempo() {
    if (hora > 23) {
        let vari = hora - 24;
        hora = 0;
        hora += vari;
        dia++;
    }
    console.log('Horário:', adicionaZero(hora));
    console.log('Dia', dia);
    */



//AULA 13 - OBJETO
console.clear()

// let pessoa = [ 'Gabriel', 'Londrina',18,'Professor',1.81];


/*
//array nao guarda o nome dos dados, apenas  parea em ordem na gamnbiarra
// mostrar uma lsta na gambiarra
let dados = ['nome','cidade','idade','prfissao','altura']

for (let i in pessoa){
    console.log(dados[i],pessoa[i])
}
*/


//um objeto é definido por {}
//cada propriedade é formado por 2 informações-> chave: valor

/*
let gabriel = {nome: 'Gabriel', idade: 20, cidade: 'Londrina'}
let alex = {nome: 'Alex', idade: 33, cidade: 'Sâo paul9o'}
*/

/*
//forma 2
let aluno = [
    {nome: 'Gabriel', idade: 20, cidade: 'Londrina'},
    {nome: 'Alex', idade: 33, cidade: 'Sâo paul9o'}
]*/

/*
let aluno = [gabriel,alex]


for (let i of aluno){
    console.log(i.nome);
    console.log(i.idade);
    console.log(i.cidade);
    console.log();
}
*/
/*
let pessoa = {
    nome: 'Gabriel',
    idade: 20,
    cidade: 'Londrina',
};


console.log(pessoa);

pessoa.idade = 23

console.log(pessoa);
*/

/*
pessoa.interesses= ['Programação', 'Jogos', 'Música', 'Livros', 'Filmes']


console.log(pessoa);

console.log()
*/

/*
console.log(pessoa.nome ,'e idade ',pessoa.idade);

pessoa.idade = 20

console.log(pessoa.nome , 'e idade ',pessoa.idade);

console.log()
*/


//consigo percorrer com for porque nao estou iterando o objeto
//estou iterando sobre uma propriedade do objketo, que é uma aRRAY
/*
for (let i of pessoa.interesses){
    console.log(i)
}
*/

/*
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);
*/

// console.log(`o nome da pessoas é ${pessoa.nome} e a idade ${pessoa.idade}`);


/*
Excluindo uma propriedade de um objeto
Para excluir uma propriedade de um objeto, basta usarmos 
a palavra reservada delete

*/
/*
const pessoa = {
    nome: 'Gabriel',
    idade: 20,
    cidade: 'Londrina',
    empresa: 'Blue'
}

console.log(pessoa);

delete pessoa.empresa;

console.log(pessoa);
*/

// metodos

const pessoa = {
    nome: 'Gabriel',
    idade: 20,
    cidade: 'Londrina',
    empresa: 'Blue',
    interesses: ['Programação', 'Jogos', 'Música', 'Livros', 'Filmes'],

    bio: function() {//criou uma metodo dentro do objeto, ou seja ele é tbm uma propriedade como nome,cidade empresa
        console.log(`A pessoa ${this.nome} trabalha na empresa: ${this.empresa}`);
    }, //colocar virgula depois de cada propriedade

    mudaEmpresa: function(){
        let novaempresa = prompt('Qual a nova empresa? ');
        this.empresa = novaempresa//altera o atributo do proprio obkjeto (this.)
    }

};

pessoa.bio();//chamando o metodo
pessoa.mudaEmpresa()

pessoa.bio();





/* ---- exerciocio
Crie um sistema de cadastro de funcionários que deve criar um objeto 
novo para cada funcionário cadastrado com as informações: nome, 
cargo e salário. Ele deve armazenar todos esses objetos em uma lista. 
Ao final de cada cadastro ele deve perguntar se deseja cadastrar um 
novo funcionário e recomeçar o processo,

pt2:  e caso não haja mais funcionários para cadastrar,  ele deve 
chamar uma função que deve apresentar a quantidade de funcionários 
com cada cargo e os nomes deles. (Você pode limitar as opções 
de cargo para facilitar.)

*/

//forma1 de fazer a parte 1
/*
let continuar = '';

let funcionariototal=[];

do {
    funcionario = {};//para criar um objketo novo

    funcionario.nome = prompt('Qual o nome do funcionario ');
    funcionario.cargo = prompt('Qual o cargo? ');
    funcionario.salario = +prompt('Qual o salario ');

    funcionariototal.push(funcionario);


    continuar = prompt('Deseja cadastrar mais funcionarios ?(s/n) ').toLocaleLowerCase();
}while (continuar =='s')

function info_funcionario(qtd_cargo, qtd_nome){

}
*/
// console.log(funcionariototal);

//correcao do prof arrumar pois esta errado

/*

function contafuncionarios(lista){
    let profs = [];
    let alunos = []
    let qtdprofs = 0;
    let qtdaluno = 0
    for (let i of lista){
        if (i.cargo == 'professor'){
            qtdprofs++;
            profs.push(i.nome)

        }else if(i.cargo == 'aluno'){
            qtdaluno++;
            alunos.push(i.nome)
        }
    }
    console.log()
    console.log(qtdprofs)
    console.log()
    console.log(profs)
    console.log()
    console.log(qtdaluno)
    console.log()
    console.log(alunos)
}


let continuar = 's';
let listadefuncionario = [];


while (continuar == 's'){
    let funcionario= {};
    
    funcionario.nome = prompt('qual o nome? ');
    funcionario.cargo= prompt('qual o cargo? ');
    funcionario.salario = +prompt('Qual o salrio? ')

    continuar = prompt('Deseja cadastrar mais? ')


    
}

contafuncionarios(listadefuncionario);

// console.log(listadefuncionario);
// console.log()
// console.log(qtdprofs)
// console.log()
// console.log(profs)
// console.log()
// console.log(qtdaluno)
// console.log()
// console.log(alunos)
*/