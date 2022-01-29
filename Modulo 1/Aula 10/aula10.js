const prompt = require('prompt-sync')();

// let pergunta = prompt ('Responda com s ou n: ');
/*let numero = prompt('Digite um numero')
//var eu posso redeclarar e let eu nao posso alterar


// while (pergunta != 's' && pergunta != 'n' ){
//     console.log('Entrada invalida!!! Use apenas s ou n: ');
//     pergunta = prompt ( 'Responda somente com s ou n');// aqui alterara para tornar a condicao como falsa
// }

if (isNaN(numero)){
    console.log('é string');
}else{
    console.log('é um numero');
}

while (isNaN(numero)){//só aceita numero 
    numero = prompt ('Digite um valor valido!')
}

while (!isNaN(numero)){//só aceita string 
    numero = prompt ('Digite um valor valido!')
}

*/
// array pra maisculo
/*
let lista = ['joao', 'maria', 'fernando'];

let listamaisculo = [];
let stringvazia = '';

for (let i = 0 ; lista.length; i++){
    stringvazia = lista[i];
    stringvazia = stringvazia.toLocaleUpperCase();
    listamaisculo.push(stringvazia);
}
*/
//forma 2 (mais simples):
/*
let lista = ['Gabriel', 'Joao Vitor', 'Carlos'];
let listaUpper = [];

for(let elemento in lista)
{
    listaUpper.push(lista[elemento].toUpperCase());
}
console.log(listaUpper);
*/

//forma 3:
/*
let lista = ['Gabriel', 'Joao Vitor', 'Carlos'];
let listaUpper = [];

for(let elemento in lista)
{
    listaUpper.push(elemento.toUpperCase());
}
console.log(listaUpper);
*/

//diferenca entre for in e for of
/*
let lista = ['Gabriel', 'Joao Vitor', 'Carlos', 'Jamile', 'Bia'];
let nomeantigo = prompt ('Digite o nome do aluno a ser alterado: ');
let novonome = prompt ('Digite o nome a ser atualizado')

for (let i in lista){// for bom pra usar com splice, afinal retorna o indice
    console.log(i);//percorre e retorna o indice
    //console.log(lista[i]);//retorna valores a partir do indice
    if (lista[i] == nomeantigo){ ///altera nome
        lista.splice(i,1, novonome)
    }

}
console.log(lista);
console.log();
*/

 


/*
let lista = ['Gabriel', 'Joao Vitor', 'Carlos', 'Jamile', 'Bia']
console.log('Lista dos alunos da C11: ')

for (let i of lista){
    console.log(i);//percorre e retorna os valores da lista
    console.log(lista.indexOf(i))//retorna o indice a partir do valor
    // if(i =='Carlos'){ // para de procurar ate achar um valor
    //     break;
    // }
}

console.log();
*/

//DO PROFESSOR DURANTE A AULA:
/*
console.clear();
console.log();
const prompt = require('prompt-sync')();

// let só existe dentro do escopo onde ela é criada.
// Caso eu crie uma let em algum lugar, e outra dentro de outro escopo
// Elas serão variáveis diferentes, mesmo que com o mesmo nome.
// Na dúvida, NÃO REDECLARE! Depois de ter criado a sua variável uma vez,
// Quando você for usá-la das outras vezes, use apenas o nome da variável, sem o let.



/*
// Validando uma entrada:
// Usando o .toUpper() no final do prompt, ele já vai armazenar em maiúsculo
let pergunta = prompt('Responda apenas com S ou N: ').toUpperCase();
while (pergunta != 'S' && pergunta != 'N'){
    console.log('Entrada inválida!!! Use apenas S ou N.')
    pergunta = prompt('Responda apenas com S ou N: ');
}
*/



/*
// testando o retorno de typeof()
let nome = "Gabriel"
let numero = 15
let tipo = (typeof(numero));
console.log(typeof(numero));
console.log(typeof(tipo));
*/




/*
// Diferença entre var e let
let teste = 15;
if (teste == 15){
    var novaVar = 'nova var'
    let teste = 'novo let'
}
// Mesmo que a variável tenha sido declarada dentro do if,
// Como ela é do tipo var, ela funciona fora também.
console.log(novaVar);
console.log(teste);
*/




/*
// Transformando todas as strings de uma lista em maiúscula
let lista = ['Gabriel', 'Joao Vitor', 'Carlos'];
let listaUpper = [];
for(let elemento of lista){
    listaUpper.push(elemento.toUpperCase());
}
console.log(listaUpper);
*/



/*
// Validando números de uma maneira simples:
let numero = prompt('Digite um número: ');
console.log(typeof(numero))
while (isNaN(numero)){
    numero = prompt('Digite um valor válido! ');
}
*/


/*
//Diferença entre for in e for of
// For in percorre a lista retornando o ÍNDICE de cada elemento.
// Útil quando preciso desse índice para alguma coisa, por ex. usar em uma função ou método.
let lista = ['Gabriel', 'Joao Vitor', 'Carlos', 'Jamile', 'Bia'];
let nomeantigo = prompt('Digite o nome do nome a ser alterado: ');
let novonome = prompt('Digite o novo nome: ')
for (let i in lista){
    console.log(i);
    // console.log(lista[i]) // Retornando o valor a partid do índice.
    if (lista[i] == nomeantigo){
        lista.splice(i,1,novonome)
    }
    
}
console.log();
console.log(lista);
// For of percorre a lista retornando os VALORES de cada elemento.
// Útil para quando preciso apenas exibi-los ou armazená-los em algum lugar.
let lista = ['Gabriel', 'Joao Vitor', 'Carlos', 'Jamile', 'Bia'];
console.log('Lista dos alunos da C11: ');
for (let i of lista){
    console.log(i);
    // console.log(lista.indexOf(i)); //Retornando o índice a partir do valor
}
*/

//console.log();


//somando valores de um array

/*
let listnum = [13,18,20,16,18,30];
let soma = 0;

for (let i of listnum){//of pq eu quero valores
    //console.log(i);
    soma = soma + i; //pego o valor que estava guardado e somo com o novo (proximo indice)
    //soma += i//forma simplificada da linha acima
}

console.log(soma)
*/