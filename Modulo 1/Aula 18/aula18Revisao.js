 const prompt = require('prompt-sync')();


 
 let aluno = {
     nome:'Daniel',
     turma:'C11',
     idade:20,
     cidade:'Londrina',
     interesses: ['cuidar do filho','descansar'],

     trocaCidade: function(){
         let estado = prompt('É no mesmo estado? ')
         if(estado=='s'){
            let novacidade = prompt('Qual a nova cidade?');
            this.cidade= novacidade;
         }

    },

    trocaModulo: function(){
        let novoModulo = prompt('Qual o novo modulo?');
        this.modulo= novoModulo;
    }, 

    biografia: function(){
        console.log(`Nome ${this.nome}
        Turma: ${this.turma}
        Idade: ${this.idade}
        Forca: ${this.forca}`)
    },

    envelhecer: function(anos){
        this.idade+anos
    },

    aumentarForca: function(str){
        this.forca = this.forca + str
    }
 }



/*
let escolhaForca = prompt('aumenta quanto de forca? ')
aluno.aumentarForca(escolhaForca);
*/

aluno.biografia();
aluno.envelhecer(2);
aluno.biografia();


aluno.trocaCidade()

//chamar o metodo fora do objeto

let escolha = prompt('Voce quer trocar de cidade ou modulo? ')

if (escolha =='c'){
    aluno.trocaCidade();
}else if (escolha =='m'){
    aluno.trocaModulo();
}else{
    console.log('Escolha invalida.')
}


 //adiciona novo valor ao array dentro de objeto
aluno.interesses.push('comer')

console.log(aluno)

/*
 let aluno2 = {
    nome:'Iulia',
    turma:'C11',
    idade:18,
    cidade:'Peruibe',
}
let listAluno= [aluno,aluno2];

console.log(listAluno[1].nome);



console.log(aluno.nome); //Daniel

aluno.nome = 'Manoel';

console.log(aluno.nome);//Manoel




*/



/*

let numero = +prompt('Escolha um numero: ')
if(numero ==1){
    let segundNUmero = +prompt('Agora escolha o 2')
    if (segundNUmero ==1){
        console.log('vc escolheu 1')
    }else{
        console.log('vc escolheu outro')
    }
}
else{
    console.log('só pode esoclher 1')

}
*/


/*
let lista = [['encotrar novo planeta,2]','explorar meteoris','investigar novo planeta'];
let navegacao = prompt ('deseja navegar? ');
if (navegacao=='s'){
    let aleatorio = Math.floor(Math.random() * 10);
    console.log(aleatorio)
    if(aleatorio==1){
        console.log[0]
    }
    
}

console.log(lista[0][1])
*/
/*
let noticia = {
    noticia1:['gabriel caiu na rua',1],
    noticia2:['foi descoberto ouro em marte',2]   
}
*/