const prompt = require('prompt-sync')();

console.log('');
console.log('O ano é 2019, seu nome é Rick Deckard');
console.log('A fumaça é a realidade estética do momento, é a fuamaça que vem das fábricas, é a fumaça do cigarro, é a fumaça do hovercar, é a fumaça da pomba artifical que se espatifou na selva de prédios');
console.log('Você é um caçador de androides que trabalha para a polícia de Los Angeles, seu chefe, o Capitão Byrant, sabe que você vai fazer o necessário para terminar seu trabalho');
console.log('Sua esposa, a esguia de cabelos curtos negros, batizada de Ada Lovelace, dorme feito um anjo, mas acordada é tão vívida quanto um zombi.');
console.log('Você não caça androides por esporte, tampouco porque por algum principio moral... Você só quer que no fim do dia a promessa de dinheiro seja cumprida, e você sabe que é bom no que faz.');
console.log('E o que você faz? Bom você caça esses androides fugitivos das colônias de marte que se rebelaram e vieram para esse pseudo lugar que chamam de Terra.');
console.log('Roy Batty, Priss Stratton e J.F. Sebastion são os fugitivos do momento, os rockstar que estampam os joarnais, os artistas que estão na chamadas de busca da televisão... Ou ao menos foi isso que me disseram...');
console.log('*****************************************************************************************************************************************************************************************************************');
console.log('*****************************************************************************************************************************************************************************************************************');
console.log('Androides sonham com ovelhas elétricas?');
console.log('*****************************************************************************************************************************************************************************************************************');
console.log('*****************************************************************************************************************************************************************************************************************');
console.log();



const nomesPersonagens = [
    'Rick Deckard ',
    'Ada Lovelace ',
    'Capitão Bryant ',
    'Roy Batty ',
    'Pris Stratton ',
    'J.F. Sebastian '
]

const humor = {
    felicidade: 10
}

// let escolha = prompt('Escolha 1 ou 2?')


let hora = 4;
let dia = 1

//console.log(hora)


function dataHora(){

    hora =hora + 4;
    let periodo ;

    if (hora >= 24){
        dia = dia + 1;
        hora = hora - 24
    }

    if (hora > 6 && hora <12){
        periodo = 'da manhã'
    }
    if (hora >= 12 && hora <18){
        periodo = 'da tarde'
    }
    if (hora >=18  && hora <=24){
        periodo = 'da noite'
    }

    console.log(`São ${hora}h da ${periodo} do dia ${dia}`);

}


function fim(){
    console.log('FIM');
    //dataHora();//nao colocar data hora
}


function testaEscolha_2(a){
    let escolha = a;
    //let escolha = +prompt('Escolha 1 ou 2? ')
    while(escolha > 2 || escolha < 1 ){

        //console.log('Para escolher digite apenas 1 ou 2');
        console.log('');
        escolha = +prompt('Digite apenas 1 ou 2: ');
    }
    return escolha;  
    
} 


function testaEscolha_3(a){
    let escolha = a;
    //let escolha = +prompt('Escolha 1 ou 2? ')
    while(escolha > 3 || escolha < 1 ){

        if(escolha > 2 || escolha < 1 ){
                console.log('');
                escolha = +prompt('Digite apenas 1, 2 ou 3: ');
                
            }
    }
    return escolha;
    
} 

function Fnaleatorio(){
    const aleatorio = Math.floor(Math.random() * 10);
    console.log(aleatorio);
}



function androideMorre(){//atira/leva o corpo para a delegacia para confirmar
    console.log('************');
    dataHora();
    console.log('************');
    console.log('');
    console.log(`Você acerta o tiro e a mata!`);
    console.log(`Leva o corpo até a delegacia para receber sua recompensa na esperança de que aquele dinheiro se transforme em algo que preencha seu existir.`);
    console.log(`Mas o inesperado ocorre:`);
    royBattyVengance();
    fim();
}

function missaoFail(){
    console.log('************');
    dataHora();
    console.log('************');
    console.log('');
    console.log(`Frustrado você vai para a casa em seu maldito hovercar`);
    console.log(`Chegando em casa ${nomesPersonagens[2]} liga no seu Vidfone e pergunta status da missão.`);
    console.log(`Você sem frustração alguma em função da anestesia de sentintos que é diz que não teve sucesso `);
    console.log(`${nomesPersonagens[2]} diz que tudo bem, que a horas desses androides chegaria...`);
    let escEmpatiaBox = +prompt(`${nomesPersonagens[1]} te convida para usar a caixa de empatia para que se sinta melhor, você aceita? 1 para sim e 2 para não: `);
    if(testaEscolha_2(escEmpatiaBox)==1){//sua esposa o convida para usar a caixa de empatia
        //aceita
        console.log('');
        console.log(`Você aceita... por que você aceita? Desejo de ver o acontece se ferir? Esperança de que seja melhor agora? Pois é...`);
        console.log(`Vocês conectam todo o aparato...`);
        console.log(`Mas a maldita crosta de poeira que está em sua casa gera mau contato com o aparelho...`);
        console.log(`O aparelho teve mau contato, mas o contato elétrico que a maquina fez com seu cérebro é digno de elogio para a pessoa que frita batatas em fast-food`);
        console.log(`O cérebro de vocês começa a fritar com o curto circuito da máquina, mas esse momento é estranhamente belo e melancólico como uma pintura de Picasso ao fim da vida.`);
        console.log(`Sua esposa sorri pois acredita que irá para um lugar como aquela realidade virtual, olha para você com um sorriso como quem quer dizer "te vejo lá meu amor!"`);
        console.log(`Já você sente que estava certo em não depositar razão ou esperança no real, ele realmente não valeu a pena... Agora, podendo não ser, não existir ao menos não teria de pensar sobre isso`);
        fim();
    }
    else if(testaEscolha_2(escEmpatiaBox)==2){
        //nao
        console.log('************');
        dataHora();
        console.log('************');
        console.log('');
        console.log(`Você diz para ela que não, que se ela quer ser tolam que seja solo...`);
        console.log(`Vai descansar, descansa por algumas horas, porém seu vidfone toca no modo emergência`);
        console.log(`Você atende e lá o ${nomesPersonagens[2]} diz que ${nomesPersonagens[3]},${nomesPersonagens[4]} e ${nomesPersonagens[5]} estão em um prédio abandonado no centro da cidade.`);
        console.log(`Você vai imediatamente para lá, porém chegando lá...!`);
        royBattyVengance();
    }
}

function lojaDeAnimais(){//na loja de animais fica irado com os
    console.log('************');
    dataHora();
    console.log('************');
    console.log('');
    console.log(`Você vai para loja de animais elétricos e olha pela vitrine.`);
    console.log(`Olhando isso você sente um misto de felicidade de ver esses animais e lembrar que o mundo já habitou essas belas criaturas, mas ao mesmo tempo fica triste por eles não existirem mais`);
    missaoFail();
}

/*function androideFoge(){//prende ou *acena/vai para prende-la, porem
    dataHora()
    console.log(`Que descuido... que descuido... É claro que a fuga de seu inimigo se materializa junto a sua frustração... É evidente`);
    missaoFail();
}*/

function royBattyVengance(){
    console.log('************');
    dataHora();
    console.log('************');
    console.log('');
    console.log(`${nomesPersonagens[3]} te pega de surpresa!`);
    console.log(`Ele discursa sobre o quão miserável vocês humanos são... O quão apaixonado pelo vazio vocês, mesmo tendo tudo... Enquanto ele como androide... Ele...`);
    console.log(`Ele diz`);
    console.log(`"Eu vi coisas que vocês pessoas não acreditariam... Naves de ataque em chamas ao largo de Órion. Eu vi raios-c brilharem na escuridão próximos ao Portal de Tannhäuser [...] "`);
    console.log(`[...]"Todos esses momentos se perderão no tempo, como lágrimas na chuva. Hora de morrer."`);
    console.log(`E após esse diálogo ele o empurra para o chão, com a arma em suas mãos, um sorriso no rosto, lágrimas misturada com a chuva em seus olhos e desejo de vingança no coração e...`);
    for (let i = 0; i < 3; i++) {
        console.log('...');
    }
    console.log('BOOOOOOOOM')
    console.log('Nesse jogo de ter coisas em algo, você é quem tem no seu ultimo momento esse booom.');
    console.log('Lagrimas... na ... ch...');
    fim();
}


        //HISTORIA COMECA AQUI

let jogo = 's'
do{
    console.log('Você acaba de acordar de uma noite mal dormida como de costuma');
    console.log('Sua esposa, Ada Lovelace está com você na cama, e seu animal elétrico, a ovelha Dolly, está a porta.');
    console.log('Com que você interagir nesse despertar? ');

    let esc1 = +prompt('1 para acordar Lovelace com um beijo mórbido e 2 para ir acareciar seu ovelha: ');
    if (testaEscolha_2(esc1) == 2){//narrativa curta//Acordar acariciar animal eletrico
        console.log('************');
        dataHora();
        console.log('************');
        console.log('');
        humor.felicidade=20;
        console.log(`Sua felicidade está em ${humor.felicidade}`);
        console.log('Você vai acariciar Dolly, mas ao levantar da cama Lovelace desperta');
        console.log('Como alguém que passa por um dia fúria ela pega o lustre que esta do seu lado da cama e em furia joga em sua direção!');
        
        
        if (Fnaleatorio() < 5){//
            console.log('Ela o acerta na cabeça!');
            console.log('Vocês dois entram em desespoero, ela num misto de arrependimento de ter feito e um desejo de que tivesse sido algo definitivo');
            console.log('Tentam estancar o sangramento mas nada funciona... Seria esse momento onde toda sua fé depoisitada no vazio seria testada');
            fim();
                    
        } else {
            console.log('Ela erra, e no mesmo instante do mais amargo arrependimento de ter se rendido ao seu impulso, Lovelace grita "DESCULPA!!!", mas agora a fúria como um fogarel numa floresta, está ardendo sobre você.');
            console.log('Você violentamente avança para cima de Lovelace.');
            console.log('E enquanto se afastava de você ela se aproximava da janela do minusculo quarto.');
            console.log('Ela está na janela, você em furia a empurra');
            console.log('E assim como a tempestade que apaga o fogo que queimara uma floresta, você é atacado pela consciencia que acabara de retomar.');
            console.log('Decide que não poderia ser assim, ser, estar numa vida que implica nesse acontecido como real não poderia o ser');
            console.log('E como nas tragédias, você trilha ali, na janela a mesma rota de sua antiga companheira.');
            fim();
            }
    }
    else{
        //else if (testaEscolha_2(esc1) == 1){//Acordar e dar um beijo na Ada Lovelace
        console.log('************');
        dataHora();
        console.log('************');
        console.log('');
        humor.felicidade=12;
        console.log('************');
        console.log(`Sua felicidade está em ${humor.felicidade}`)
        console.log('************');
        console.log('');
        console.log('Você beija Ada como quem está batendo ponto em um trabalho, na espectativa de que ao final do mês aquilo te recompense, que o futuro seja melhor que o agora');
        console.log('Agora já desperto, você vai ao banheiro para jogar água no rosto.');
        console.log('Lá enquanto vê todas as imperfeições física em seu rosto repara de canto algo na janela, mas ao mesmo tempo Ada babucia algo e diz seu nome.');

        let esc2 = +prompt('Você vai falar com Ada (1) ou olha na janela (2) ? ');
        if (testaEscolha_2(esc2)==2){//acordado/o pombo olha para voce e você nota que é um pombo mecânico
            console.log('');
            console.log('Você vai a janela, e lá vê que tem um pombo batendo asas parado no mesmo lugar...');
            console.log('Parecia até mesmo um glitch de um jogo');
            if(Fnaleatorio <4){
                Fnaleatorio();
            }
            console.log('Mas que sentido faz isso... se nem o mais sujo dos animais decreptos não são reais...');
            console.log('Será que vale mesmo ser Neo... tomar a pílula vermelha?');
            console.log('A sua conclusão é que sem no o minimo pode ser de verdade, por que então deveria seguir fingindo que vale a pena?');
            console.log('Ausente uma resposta a si mesmo mesmo você se lança pela janela, sem controle, como que um narrador um programador o fizesse fazer...');
            console.log('E no contato com o chão, que certamente era real, você deixa de ser, seja o que for que você fosse antes');
            fim();

            }else if (Fnaleatorio>=5){//dormindo/ tenta acordar mas percebe que esta 
                console.log('O pombo o encara de volta... mas o olha não como um animal preocupado em observar perigos, mas sim em como uma máquina que o sensor sente algo.');
                console.log('Você então se lembra que nem mesmo pombos, o mais sujo dos animais decreptos não são reais...');
                console.log('Pse... ser o principal da sua narratiava e sentir o mundo como NPC é o mais puro egocentrismo, mas é a única realidade possível a si.');
                console.log('E ver esse pombo, esse maldito pombo, reforça que a vida já não vale como construção do real, pois o real se desfez em kg de ferro e cabos. ');
                console.log(`Até mais disse ${nomesPersonagens[0]}`);
                fim();
            }
         else{   
        //else if (testaEscolha_2(esc2)==1){//Ada cria diálogo sobre estar triste e se mostra dependente da caixa de empatia
            console.log(`${nomesPersonagens[1]} se diz não triste, más melancólica, não sair do quarto é seu inferno, mas ela mesmo acha que não estar nele é o inferno pior que o de Dante`);
            console.log(`E como um drogado fugindo do real, ${nomesPersonagens[1]} vai atrás de sua Caixa de Empatia`);
            humor.felicidade=5;
            console.log('************');
            console.log(`Sua felicidade está em ${humor.felicidade}`)
            console.log('************');
            console.log('');
            console.log(`Você odeia a maldita Caixa, já não basta o real ser artifical, quem dira um real propositalmente artificial...`);
            console.log(`Ela te convida a usar dizendo que vai ser bom pra você, que é coisa de sua cabeça...`);

            let esc3 = +prompt('Você aceita? (digite 1 para sim e 2 para não) ');
            if(testaEscolha_2(esc3)== 1){//Aceita/Entram juntos, é descrito com funciona (descrição onirica e 
                console.log('');
                console.log(`Com a Caixa em mãos, ela pega os conectores e os coloca no corpo de ${nomesPersonagens[0]}. `);
                console.log(`Ela, que tão raro quanto a ausencia de fumaça ficava feliz e empolgada, o ficou pois iria te apresentar o Oasis`);
                console.log(`Você conecta todos os aparatos em seus devidos lugares`);
                console.log(`${nomesPersonagens[1]} surpreendentemente segura na sua mão, demonstra um sorriso de felicidade e aprta a máquina...`);
                for (let i = 0; i < 3; i++) {
                    console.log('...');
                }
                console.log(`O tempo já não faz sentido após o pressionar de botão... podem ter passado segundos, podem ter passados horas...mas para você não importa`);
                console.log(`A única sensação foi um amargo, um flash nos olhos totalmente kubrickianos e o reflexo de desativar a máquina`);
                console.log(`Ada se enfurece e entristece ao mesmo tempo, e você fica indiferente a ela e você vai para o trabalho`);
                humor.felicidade=11;
                console.log('************');
                console.log(`Sua felicidade está em ${humor.felicidade}`)
                console.log('************');
                console.log('');
                
            }else{
            //else if(testaEscolha_2(esc3)==2){//Não aceitam/Tem uma briga/
                console.log(`Diz que não é um viciado, que somente pessoas baratas se poem a utilizar esta maldita Caixa de Empatia`);
                console.log('Você para o trabalho');
                humor.felicidade=16;
                console.log('************');
                console.log(`Sua felicidade está em ${humor.felicidade}`)
                console.log('************');
                console.log('');
            }
            console.log('************');
            dataHora();
            console.log('************');
            console.log('');
            console.log('************');
            console.log(`Sua felicidade está em ${humor.felicidade}`)
            console.log('************');
            console.log('');
            console.log(`Chegando no trabalho no trabalho seu chefe,${nomesPersonagens[2]} te passa uma missão para ir atrás de dois androides.`);
            console.log(`A primeira é ${nomesPersonagens[4]}, uma adroide com "espirito" selvagem, cintilante como Cyndi Lauper nos anos 80 `);
            console.log(`O outro é ${nomesPersonagens[5]} um androide com aspirações a ser um Terminator no primeiro filme, metódico e de poucas palavras.`);

            let esc4= +prompt(`Quem você vai atrás? Digite 1 para ${nomesPersonagens[4]} e 2 para ${nomesPersonagens[5]}: `);
            if (testaEscolha_2(esc4)==1){//Pris Stratton/Byrant te diz que documentos indicam seu paradeiro nas Rua Donald Knuth
                console.log('************');
                dataHora();
                console.log('************');
                console.log('');
                console.log(`${nomesPersonagens[2]} te diz que documentos indicam o paradeiro dela na Rua Donald Knuth ou Rua Grace Murray Hopper. Porém você também queria ir na loja de animais elétricos ver as novidades `);

                let esc5 = +prompt('Para qual você vai? Digite 1 para Rua Donald Knuth, 2 para Rua Grace Murray ou 3 para loja de animais: ');
                if (testaEscolha_3(esc5)==1){//Rua donald knuth
                    console.log('************');
                    dataHora();
                    console.log('************');
                    console.log('');
                    console.log('Você encontra Pris numa vitrine de uma loja de animais, ela está encantada tal qual uma criança vendo um desenho animado');
                    console.log('Você atira nela!');
                    androideMorre();
                }
                //else{
                else if (testaEscolha_3(esc5)==2){//rua grace murray
                    dataHora();
                    console.log('Você chega lá e olha e toda extensão do lugar, locais próximos, pergunta para as pessoas e lojistas, mas ninguem viu alguem com as descrições que você apresenta.');
                    console.log('Bom... essa viagem não precisa de ser em vão então... E por isso você vai para a loja de animais');
                    lojaDeAnimais();
                }
                else{
                //else if (testaEscolha_3(esc5)==3){//loja de animais
                console.log('************');
                dataHora();
                console.log('************');
                console.log('');
                    lojaDeAnimais();
                }
            }
            else{
            //else if(esc4==2){//J.F. Sebastian /Byrant te diz que documentos indicam seu paradeiro nas Rua Vint
            console.log('************');
            dataHora();
            console.log('************');
            console.log('');
                console.log(`${nomesPersonagens[2]} te diz que documentos indicam o paradeiro dele na Rua Vint Cerf ou Rua Tim Berners-Lee. Porém você também queria ir na loja de animais elétricos ver as novidades`);

                let esc6 = +prompt('Para qual você vai? Digite 1 para Rua Vint Cerf, 2 para Rua Tim Berners-Lee ou 3 para loja de animais: ');
                //testaEscolha_3(esc6);//TESTE DOS LEK
                if (testaEscolha_3(esc6)==1){//Rua Vint Cerf
                    console.log('************');
                    dataHora();
                    console.log('************');
                    console.log('');
                    console.log('Você encontra J.F. numa vitrine de uma loja de animais, ele está encantada tal qual uma criança vendo um desenho animado, toda sua pose de durão até se desfaz');
                    console.log('Você atira nele!');
                    androideMorre();
                }
                else if (testaEscolha_3(esc6)==2){//Rua Tim Berners-Lee
                    console.log('************');
                    dataHora();
                    console.log('************');
                    console.log('');
                    console.log('Você chega lá e olha e toda extensão do lugar, locais próximos, pergunta para as pessoas e lojistas, mas ninguem viu alguem com as descrições que você apresenta.');
                    console.log('Bom... essa viagem não precisa de ser em vão então... E por isso você vai para a loja de animais');
                    lojaDeAnimais();
                }
                else
                //else if (testaEscolha_3(esc6)==3){//loja de animais
                console.log('************');
                dataHora();
                console.log('************');
                console.log('');
                    lojaDeAnimais();
                }
            }
        
        }
        console.log('');
        console.log('');
        jogo = prompt('Quer jogar de novo (s/n)?  ');
    }
    while (jogo.toLocaleLowerCase() == 's');


