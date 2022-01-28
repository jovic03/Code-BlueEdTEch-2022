/*

O Jokenpô é o popular jogo do "Pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para 
escolher, e cada um deles vence de um, e perde para o outro.


Pedra ganha da tesoura, mas perde para o papel;
Tesoura ganha do papel, mas perde para a pedra;
Papel ganha da pedra, mas perde para a tesoura.


E para esse projeto você deve desenvolver um programa capaz de :
Receber o elemento escolhido pelo usuário;
Escolher um elemento aleatório para o computador;
Comparar os dois elementos e declarar um vencedor.


Você pode adaptar o jogo ao seu projeto criado anteriormente (por exemplo fazer um: "Espada, 
Escudo e Magia") para incrementar ainda mais o seu projeto. Apenas lembre-se de deixar claro para
 o usuário como funcionará o jogo nesse caso (quem ganha e quem perde de quem).


Requisitos

Para esse projeto, os requisitos fundamentais serão:


Permitir que eu decida quantas rodadas iremos fazer;

Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);

Decidir de forma aleatória a decisão do computador;

Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);

Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;

Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;

Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);

Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.


*/


const prompt = require('prompt-sync')();


console.log('Olá, seja bem vindo , iremos jogar o bom e velho pedra, papel e tesoura.')
console.log('🎮🎮🎮🎮🎮🎮🎮🎮🎮🎮🎮🎮🎮🎮🎮');
console.log('Mas para isso temos uma regrinha, para jogar você pode escolher sua decisão digitar das seguintes formas: ')
console.log(`Pedra OU 0
Papel OU 1
Tesoura OU 2`)
console.log()




let valores = ['pedra','papel','tesoura']; // [0] = pedra, [1] = papel, [2] = tesoura 
let pcVenceu = 0;
let pessoaVenceu = 0;
let empate = 0;


while (true){
    let qtd_rodadas = +prompt('Quantas rodadas vamos jogar? ');
    console.log();

    for (let i = 0; i < qtd_rodadas; i++){
        let vlrAleatorio = Math.floor(Math.random() * 3);
        let escolhaPc = valores[vlrAleatorio];// vlrAletorio atribuido para o inidice
        console.log('--------------------------');
        let escolhaUsr = prompt('Pedra, papel ou tesoura? ').toLocaleLowerCase();

        let msgEscolha = `Voce jogou ${valores[escolhaUsr]} e o PC jogou ${escolhaPc}`

        if (escolhaPc == 'pedra' ){
            if (escolhaUsr == 'papel' || escolhaUsr == 1 ){ //pc pedra x usr papel
                escolhaUsr = 'papel';
                console.log(msgEscolha);
                console.log('Pessoa venceu!');

                pessoaVenceu++;
            }
            if (escolhaUsr == 'tesoura'  || escolhaUsr == 2){//pc pedra x usr tesoura
                escolhaUsr = 'tesoura';
                console.log(msgEscolha);
                console.log('PC venceu!');
                pcVenceu++;
            }
            if  (escolhaUsr == 'pedra' || escolhaUsr == 0) {//pc pedra x usr pedra
                escolhaUsr = 'pedra';
                console.log(msgEscolha);
                console.log('Empatou!');
                empate++;
            }
        }

        else if (escolhaPc == 'papel'){
            if (escolhaUsr == 'tesoura' || escolhaUsr == 2){ //pc Papel x usr tesoura
                escolhaUsr = 'tesoura';
                console.log(msgEscolha);
                console.log('Pessoa venceu!');
                pessoaVenceu++;
            }
            if (escolhaUsr == 'pedra' || escolhaUsr == 0){ // pc papel x usr pedra
                escolhaUsr = 'pedra';
                console.log(msgEscolha);
                console.log('PC venceu!');
                pcVenceu++;
            }
            if  (escolhaUsr == 'papel' || escolhaUsr == 1){//pc Papel x usr papel
                escolhaUsr = 'papel';
                console.log(msgEscolha);
                console.log('Empatou!');
                empate++; //pc papel x usr papel
            }

        }
        else if (escolhaPc == 'tesoura'){
            if (escolhaUsr == 'pedra' || escolhaUsr == 0){ //pc tesoura x usr pedra
                escolhaUsr = 'pedra';
                console.log(msgEscolha);
                console.log('Pessoa venceu!');
                pessoaVenceu++;
            }
            if (escolhaUsr == 'papel' || escolhaUsr == 1){ // pc tesoura x usr papel
                escolhaUsr = 'papel';
                console.log(msgEscolha);
                console.log('PC venceu!');
                pcVenceu++;
            }
            if (escolhaUsr == 'tesoura' || escolhaUsr == 2){// pc tesoura x usr tesoura
                escolhaUsr = 'tesoura';
                console.log(msgEscolha);
                console.log('Empatou!');
                empate++; //pc tesoura x usr tesoura
            }
        }


    }
    console.log();
    console.log('¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨');
    console.log();
    console.log(`Você venceu ${pessoaVenceu} vezes , o PC ${pcVenceu} vezes e empatou ${empate} vezes!`)
    console.log();

    let txtCont = prompt('Deseja continuar?(s/n) ').toLocaleLowerCase();
    if (txtCont == 'n'){
        break;
    }
}