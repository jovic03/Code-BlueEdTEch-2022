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


let valores = ['pedra','papel','tesoura']; // [0] 1=pedra, [1] 2=papel, [2] 3=tesoura

//let pede_valor_jogador =  prompt ('Pedra, papel ou tesoura? ');
let valor_pc_joke = Math.floor(Math.random() * 3)+1;//escolha do pc do que jogar
// let valor_pc_possibilidades = Math.floor(Math.random() * 1000);

//console.log(pede_valor_jogador,valor_pc_joke,valor_pc_possibilidades);

console.log('Olá, seja be, vindo , iremos jogar o bom e velho pedra, papel e tesoura.')
console.log('Mas para isso temos uma regrinha, para jogar você pode escolher sua decisão digitar das seguintes formas: ')
console.log(`Pedra OU 1
Papel OU 2
Tesoura OU 3`)

let qtd_rodadas = +prompt('Quantas rodadas vamos jogar? ') 
let contador = 0;
let pcVenceu = 0;
let pessoaVenceu = 0;


while (contador < (qtd_rodadas )){ //quantas rodadas?

    let pede_valor_jogador =  prompt ('Pedra , papel ou tesoura? ');

    if (valor_pc_joke == valores [0]){ //***********************pc jogou pedra
        valores = valores [0];

        if (pede_valor_jogador.toLocaleLowerCase == 'pedra' || pede_valor_jogador == 1 ){
            pede_valor_jogador = 'pedra'

            if(pede_valor_jogador == valores ){ //PC pedra x Pessoa pedra
                console.log('Emptatou');
                console.log(`Você jogou ${pede_valor_jogador} e o computador jogou ${valores}!`);
                contador++;
            }

        }
        if (pede_valor_jogador.toLocaleLowerCase == 'papel' || pede_valor_jogador == 2 ){
            pede_valor_jogador = 'papel';

            if(pede_valor_jogador == valores ){ //PC pedra x Pessoa papel
                console.log('Ganhou');
                console.log(`Você jogou ${pede_valor_jogador} e o computador jogou ${valores}!`);
                contador++;
                pessoaVenceu++;
            }

        }
        if (pede_valor_jogador.toLocaleLowerCase == 'tesoura' || pede_valor_jogador == 3 ){
            pede_valor_jogador = 'tesoura';

            if(pede_valor_jogador == valores ){ //PC pedra x Pessoa tesoura
                console.log('Perdeu');
                console.log(`Você jogou ${pede_valor_jogador} e o computador jogou ${valores}!`);
                contador++;
                pcVenceu++;
            }

        }

    }


    if (valor_pc_joke == valores [1]){ //***********************pc jogou papel
        valores = valores [1];

        if (pede_valor_jogador.toLocaleLowerCase == 'pedra' || pede_valor_jogador == 1 ){
            pede_valor_jogador = 'pedra'

            if(pede_valor_jogador == valores ){ //PC papel x Pessoa pedra
                console.log('Perdeu');
                console.log(`Você jogou ${pede_valor_jogador} e o computador jogou ${valores}!`);
                contador++;
                pcVenceu++;
            }

        }
        if (pede_valor_jogador.toLocaleLowerCase == 'papel' || pede_valor_jogador == 2 ){
            pede_valor_jogador = 'papel';

            if(pede_valor_jogador == valores ){ //PC papel x Pessoa papel
                console.log('Empatou');
                console.log(`Você jogou ${pede_valor_jogador} e o computador jogou ${valores}!`);
                contador++;

            }

        }
        if (pede_valor_jogador.toLocaleLowerCase == 'tesoura' || pede_valor_jogador == 3 ){
            pede_valor_jogador = 'tesoura';

            if(pede_valor_jogador == valores ){ //PC papel x Pessoa tesoura
                console.log('Ganhou');
                console.log(`Você jogou ${pede_valor_jogador} e o computador jogou ${valores}!`);
                contador++;
                pessoaVenceu++;

            }

        }

    }

    //pc jogou tesoura
    if (valor_pc_joke == valores [2]){ //***********************pc jogou tesoura
        valores = valores [2];

        if (pede_valor_jogador.toLocaleLowerCase == 'pedra' || pede_valor_jogador == 1 ){
            pede_valor_jogador = 'pedra'

            if(pede_valor_jogador == valores ){ //PC tesoura x Pessoa pedra
                console.log('Ganhou');
                console.log(`Você jogou ${pede_valor_jogador} e o computador jogou ${valores}!`);
                contador++;
                pessoaVenceu++;
            }

        }
        if (pede_valor_jogador.toLocaleLowerCase == 'papel' || pede_valor_jogador == 2 ){
            pede_valor_jogador = 'papel';

            if(pede_valor_jogador == valores ){ //PC tesoura x Pessoa papel
                console.log('Perdeu');
                console.log(`Você jogou ${pede_valor_jogador} e o computador jogou ${valores}!`);
                contador++;
                pcVenceu++;

            }

        }
        if (pede_valor_jogador.toLocaleLowerCase == 'tesoura' || pede_valor_jogador == 3 ){
            pede_valor_jogador = 'tesoura';

            if(pede_valor_jogador == valores ){ //PC tesoura x Pessoa tesoura
                console.log('Empatou');
                console.log(`Você jogou ${pede_valor_jogador} e o computador jogou ${valores}!`);
                contador++;

            }

        }

    }

    
}


