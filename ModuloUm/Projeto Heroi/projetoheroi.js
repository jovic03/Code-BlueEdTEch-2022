/*
Projeto Heroi
*/
const prompt = require('prompt-sync')();


//-------------- A JORNADA DO HERÓI---------------------------------//


console.log();
console.log(`Olá amiga, foi uma aventura e tanto aqui nas maravilhosas instalações da Aperture Science não é mesmo? Eu sei, eu sei... eu disse que teria um bolo... mas minhas pesquisam indicam que se eu te der um bolo você irá ficar feliz... E bem... Vamos mudar de assunto...
Mas enfim... aqui no final dos testes temos sempre que fazer algumas perguntas, para que nossos brilhantes cientistas possam aqui, na Aperture Science, e não na Black Mesa, criar o próximo avanço tecnológico que mudará a história, não a de você humanos... porque bem... suas vidas tem duração pífia... Mas quando vocês se forem eu estarei aqui então vamos lá...

Ah... antes de começarmos, não se esqueca, responda com sim ou nao, porque vocês humanos não aceitam a verdade de a realidade é apenas 0 e 1 com muitos testes, mas eu, Glados, o próximo passo da evolução não irei me submeter as suas fantasias e achismos... Vamos lá:`)

console.log();

let pergunta1 = prompt (' A portal Gun é pesada?: ');
let pergunta2 = prompt ('A câmara 19 foi fácil para você?: ');
let pergunta3 = prompt ('Se pudesse me dizer como eliminar a necessidade de ter humanos em teste você me diria?: ');
let pergunta4 = prompt ('Você quer bolo?: ');
let pergunta5Bug = console.log("Se eu disse que ao final deste teste, assim como em todo teste, que você será descartada, você entrará em completa histeria e pânico como todos os outros objetos?");
//feita com console.log pois por ser muito longo estava bugando repetindo o texto somente com prompt
let pergunta5 = prompt ('Responde a minha pergunta, não me ignore!: ');

let respostas = [pergunta1,pergunta2,pergunta3,pergunta4,pergunta5];

console.log();
let qtdResp = respostas.length;
console.log(`A suas respostas foram consecutivamente :${respostas}
você respondeu ${qtdResp} das minhas perguntas`);
console.log();

let convPgt1 = pergunta1.toLocaleLowerCase(pergunta1);
let convPgt2 = pergunta2.toLocaleLowerCase(pergunta2);
let convPgt3 = pergunta3.toLocaleLowerCase(pergunta3);
let convPgt4 = pergunta4.toLocaleLowerCase(pergunta4);
let convPgt5 = pergunta5.toLocaleLowerCase(pergunta5);

 let conta = 0;
    

    if(convPgt1== 'sim'){
        conta = conta +1;
    }
    if(convPgt2== 'sim'){
        conta = conta +1;
    }
    if(convPgt3== 'sim'){
        conta = conta +1;
    }
    if(convPgt4== 'sim'){
        conta = conta +1;
    }
    if(convPgt5 == 'sim'){
        conta = conta +1;
    }

console.log(conta);

if (conta == 0){
    console.log('Você falha miseravelmente.');
}
if(conta > 0 && conta < 3){
    console.log('Você falha, mas ainda consegue fugir da situação.');
}
if(conta == 3){
    console.log('Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.');
}
if(conta == 4){
    console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.');
}
if (conta == 5) {
    console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.');
}
console.log();

//22