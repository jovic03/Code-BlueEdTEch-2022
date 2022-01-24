const { Console, count } = require('console');

/*
Projeto Heroi
*/
const prompt = require('prompt-sync')();

/*
Olá amiga, foi uma aventura e tanto aqui nas maravilhosas instalações da Aperture Science não é mesmo? Eu sei, eu sei... eu disse que teria um bolo... mas minhas pesquisam indicam que se eu te der um bolo você irá ficar feliz... E bem...
 Mas enfim... aqui no final dos testes temos sempre que fazer algumas perguntas, para que nossos brilhantes cientistas possam aqui, na Aperture Science, e não na Black Mesa, criar o próximo avanço tecnológico que mudará a história, não a de você humanos... porque bem... suas vidas tem duração pífia... Mas quando vocês se forem eu estarei aqui então vamos lá:
 
 A portal Gun é pesada?

 A câmara 17 foi fácil para você?

 Se pudesse me dizer como eliminar a necessidade de ter humanos em teste você me diria?

 Você quer bolo?

 Se eu disse que ao final deste teste, assim como em todo teste, você será descartada, você entrará em completa histeria e pânico como todos os outros objetos?

*/


//----------EXERCICIO EXTRAS


/*ex1
console.log('O primeiro programa a gente nunca esquece!')
*/

/*ex2*/
/*console.log('meu nome é: Andrew Ryan');
console.log('');
console.log('joao victor gomes da silva');
console.log('joao victor gomes da silva');*/



//-------------- A JORNADA DO HERÓI---------------------------------//



console.log(`Olá amiga, foi uma aventura e tanto aqui nas maravilhosas instalações da Aperture Science não é mesmo? Eu sei, eu sei... eu disse que teria um bolo... mas minhas pesquisam indicam que se eu te der um bolo você irá ficar feliz... E bem...
Mas enfim... aqui no final dos testes temos sempre que fazer algumas perguntas, para que nossos brilhantes cientistas possam aqui, na Aperture Science, e não na Black Mesa, criar o próximo avanço tecnológico que mudará a história, não a de você humanos... porque bem... suas vidas tem duração pífia... Mas quando vocês se forem eu estarei aqui então vamos lá:`)

let pergunta1 = prompt (' A portal Gun é pesada?: ')
let pergunta2 = prompt ('A câmara 19 foi fácil para você?: ')
let pergunta3 = prompt ('Se pudesse me dizer como eliminar a necessidade de ter humanos em teste você me diria?: ')
let pergunta4 = prompt ('Você quer bolo?: ')
let pergunta5 = prompt (`Se eu disse que ao final deste teste, assim como em todo teste, você
será descartada, você entrará em completa histeria e pânico como todos os outros objetos?: `)

let respostas = [pergunta1,pergunta2,pergunta3,pergunta4,pergunta5];

let qtdResp = respostas.length;
console.log(respostas,verificaSim);

function contaSim(){
    let conta = 0;
    

    if(pergunta1== 'sim'){
        conta = conta +1
    }
    if(pergunta2== 'sim'){
        conta = conta +1
    }
    if(pergunta3== 'sim'){
        conta = conta +1
    }
    if(pergunta4== 'sim'){
        conta = conta +1
    }
    if(pergunta5 == 'sim'){
        conta = conta +1
    }
}

console.console.log(contaSim);

//let verificaSim = respostas.length;



//if (pergunta1 ==


// for (var i = 0; i <respostas.length; i++){
//     console.log(respostas[i])
// }



//let conta = [pergunta1,pergunta2,pergunta3,pergunta4,pergunta5];

//console.log(conta,' - ',conta.length);

// let resultado = 'resultado fazer os IF & Else'



/*
if ('0 respostas sim'){
    console.log('Você falha miseravelmente.')

}
if('1 ou 2 respostas Sim'){
    console.log('Você falha, mas ainda consegue fugir da situação.')
}
if('3 respostas Sim'){
    console.log('Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.')
}
if('4 respostas Sim'){
    console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.')
}
Else ('5 respostas Sim') {
    console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.')
}

console.log(`Você me informou estes dados:
    ${resp1}
    ${resp2}
    ${resp3}
    ${resp4}
    ${resp5}
    e portanto, cá está o resultado:
    ${resultado}`)
    */