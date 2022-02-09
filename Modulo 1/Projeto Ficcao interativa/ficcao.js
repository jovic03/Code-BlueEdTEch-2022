const prompt = require('prompt-sync')();

/*
console.log('O ano é 2019, seu nome é Rick Deckard');
console.log('A fumaça é a realidade estética do momento, é a fuamaça que vem das fábricas, é a fumaça do cigarro, é a fumaça do hovercar, é a fumaça da pomba artifical que se espatifou na selva de prédios');
console.log('Você é um caçador de androides que trabalha para a polícia de Los Angeles, seu chefe, o Capitão Byrant, sabe que você vai fazer o necessário para terminar seu trabalho')
console.log('Sua esposa, a esguia de cabelos curtos negros, batizada de Ada Lovelace, dorme feito um anjo, mas acordada é tão vívida quanto um zombi.')
console.log('Você não caça androides por esporte, tampouco porque por algum principio moral... Você só quer que no fim do dia a promessa de dinheiro seja cumprida, e você sabe que é bom no que faz.')
console.log('E o que você faz? Bom você caça esses androides fugitivos das colônias de marte que se rebelaram e vieram para esse pseudo lugar que chamam de Terra.')
console.log('Roy Batty, Priss Stratton e J.F. Sebastion são os fugitivos do momento, os rockstar que estampam os joarnais, os artistas que estão na chamadas de busca da televisão... Ou ao menos foi isso que me disseram...');
console.log('*****************************************************************************************************************************************************************************************************************')
console.log('*****************************************************************************************************************************************************************************************************************')
console.log('Androides sonham com ovelhas elétricas?');
console.log('*****************************************************************************************************************************************************************************************************************')
console.log('*****************************************************************************************************************************************************************************************************************')
console.log()
*/


const nomesPersonagens = [
    'Rick Deckard ',
    'Ada Lovelace ',
    'Capitão Bryant ',
    'Roy Batty ',
    'Pris Stratton ',
    'J.F. Sebastian '
]

// let escolha = prompt('Escolha 1 ou 2?')


function dataHora(){//arrumar
    let hora = 4.5;
    let dia = 1;
    
    if (hora >24){
        dia++;
    }
    
    hora++;
    console.log(`São ${hora}h do dia ${dia}`)

}


function fim(){
    console.log('FIM')
    dataHora();
}


function testaEscolha(){

    let escolha = +prompt('Escolha 1 ou 2? ')
    while(escolha > 2 || escolha < 1 ){

        if(escolha > 2 || escolha < 1 ){
                console.log('Para escolher digite apenas 1 ou 2');
                escolha = +prompt('Digite apenas 1 ou 2: ');
            }
    }
    
    
} 

function Fnaleatorio(){
    const aleatorio = Math.floor(Math.random() * 10);
    console.log(aleatorio)
}



    console.log('Você acaba de acordar de uma noite mal dormida como de costuma')
    console.log('Sua esposa, Ada Lovelace está com você na cama, e seu animal elétrico, a ovelha Dolly, está a porta.')
    console.log('Com que você interagir nesse despertar? ');
    let esc1 = +prompt('1 para acordar Lovelace com um beijo mórbido e 2 para ir acareciar seu ovelha: ');
    //testaEscolha();

    if (esc1 == 2){//narrativa curta
        console.log('Você vai acariciar Dolly, mas ao levantar da cama Lovelace desperta');
        console.log('Como alguém que passa por um dia fúria ela pega o lustre que esta do seu lado da cama e em furia joga em sua direção!')
        
        
        if (Fnaleatorio < 5){//
                    Fnaleatorio();//apagar pois usr nao precisa---------
                    console.log('Ela o acerta na cabeça!');
                    console.log('Vocês dois entram em desespoero, ela num misto de arrependimento de ter feito e um desejo de que tivesse sido algo definitivo');
                    console.log('Tentam estancar o sangramento mas nada funciona... Seria esse momento onde toda sua fé depoisitada no vazio seria testada');
                    fim();
                    
                } else {
                    Fnaleatorio();
                    console.log('Ela erra, e no mesmo instante do mais amargo arrependimento de ter se rendido ao seu impulso, Lovelace grita "DESCULPA!!!", mas agora a fúria como um fogarel numa floresta, está ardendo sobre você.')
                    console.log('Você violentamente avança para cima de Lovelace.');
                    console.log('E enquanto se afastava de você ela se aproximava da janela do minusculo quarto.')
                    console.log('Ela está na janela, você em furia a empurra');
                    console.log('E assim como a tempestade que apaga o fogo que queimara uma floresta, você é atacado pela consciencia que acabara de retomar.');
                    console.log('Decide que não poderia ser assim, ser, estar numa vida que implica nesse acontecido como real não poderia o ser');
                    console.log('E como nas tragédias, você trilha ali, na janela a mesma rota de sua antiga companheira.');
                    fim();
                }
    }
    else if (esc1 == 1){
        dataHora();
        console.log('Você beija Ada como quem está batendo ponto em um trabalho, na espectativa de que ao final do mês aquilo te recompense, que o futuro seja melhor que o agora');
        console.log('Agora já desperto, você vai ao banheiro para jogar água no rosto.')
        console.log('Lá enquanto vê todas as imperfeições física em seu rosto repara de canto algo na janela, mas ao mesmo tempo Ada babucia algo e diz seu nome.')
        let esc2 = +prompt('Você vai falar com Ada (1) ou olha na janela (2) ? ');

        if (esc2==2){
            dataHora();
            console.log('Você vai a janela, e lá vê que tem um pombo batendo asas parado no mesmo lugar...');
            console.log('Parecia até mesmo um glitch de um jogo');
            if(Fnaleatorio <4){
                Fnaleatorio()
            }
            console.log('Mas que sentido faz isso... se nem o mais sujo dos animais decreptos não são reais...')
            console.log('Será que vale mesmo ser Neo... tomar a pílula vermelha?')
            console.log('A sua conclusão é que sem no o minimo pode ser de verdade, por que então deveria seguir fingindo que vale a pena?')
            console.log('Ausente uma resposta a si mesmo mesmo você se lança pela janela, sem controle, como que um narrador um programador o fizesse fazer...')
            console.log('E no contato com o chão, que certamente era real, você deixa de ser, seja o que for que você fosse antes')
            fim();


        }

    }

