const baseUrl = 'http://localhost:3000/paletas';

async function findAllPaletas() {/*como é fora do front e pra nao ter problema de timeout*/

  const response = await fetch(`${baseUrl}/find-paletas`); /*fetch me deixa pegar alguma coisa, nesse caso uma requisicao e armazenar no response*/

  const paletas = await response.json();//espera chegar o fetch anterior pra armazenar .json dentro de 'paletas'
  
  paletas.forEach((paleta) => {//cada objeto dentro do array vai ser usado pra fazer o abaixo dentro do callback
      document.getElementById('paletaList').insertAdjacentHTML(
        //priemiro parametro (posicao)
        'beforeend',

        //segundo parametro (conteudo adicionado)
        `
        <div class="PaletaListaItem">
            <div>
              <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
              <div class="PaletaListaItem__preco">R$${paleta.preco}</div>
              <div class="PaletaListaItem__descricao">${paleta.descricao}</div>
            </div>
            <img class="PaletaListaItem__foto" src=${paleta.foto} alt=${`Paleta de ${paleta.sabor}`} />

        </div>

        `
      )
  });
  
}

//Pegar uma paleta pelo ID
const findByIdPaletas = async () => {
  const id = document.getElementById("idPaleta").value;

  const response = await fetch(`${baseUrl}/find-paleta/${id}`);

  const paleta = await response.json();

  const paletaEscolhidaDiv = document.getElementById("paletaEscolhida");

  paletaEscolhidaDiv.innerHTML = 
  `
  <div class="PaletaCardItem">
    <div>
      <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
      <div class="PaletaCardItem__preco">R$${paleta.preco}</div>
      <div class="PaletaCardItem__descricao">${paleta.descricao}</div>
    </div>
      <img class="PaletaCardItem__foto" src=${paleta.foto} alt=${`Paleta de ${paleta.sabor}`} />
  </div>
  `;
};

findAllPaletas();

function abrirModalCadastro(){
  document.querySelector('.modal-overlay').style.display = 'flex';/*procure ".modal-overlay" em .style e procure a propriedade display e altere pra o seu valor paro o texto : "flex"*/
}

function fecharModalCadastro(){
  document.querySelector('.modal-overlay').style.display = 'none';/*procure ".modal-overlay" em .style e procure a propriedade display e altere pra o seu valor paro o texto : "none"*/
  
  document.querySelector('#sabor').value = "";
  document.querySelector('#preco').value = 0;
  document.querySelector('#descricao').value = "";
  document.querySelector('#foto').value = "";
}

async function createPaleta(){
  //event.preventDefault();/* tira o comportanto padrao do botao de tipo submit */

  const sabor = document.querySelector('#sabor').value;
  const preco = document.querySelector('#preco').value;
  const descricao = document.querySelector('#descricao').value;
  const foto = document.querySelector('#foto').value;

  const paleta = {
    sabor,
    preco,
    descricao,
    foto
  };
  const response = await fetch(baseUrl + "/create",{/*essa é a resposta*/
    method:"post",
    headers:{
      "Content-Type":"application/json",/*qual a forma de envio do conteudo (no caso via json)*/
    },
    mode:"cors",/*cors permite acessar o conteudo do back*/
    body: JSON.stringify(paleta),/*estou enviado atraves do body o conteudo do json do const paleta da linha 48 */
  });

  const novaPeleta = await response.json();

  const html =
    `
    <div class="PaletaListaItem">
        <div>
          <div class="PaletaListaItem__sabor">${novaPeleta.sabor}</div>
          <div class="PaletaListaItem__preco">R$${novaPeleta.preco}</div>
          <div class="PaletaListaItem__descricao">${novaPeleta.descricao}</div>
        </div>
        <img class="PaletaListaItem__foto" src=${novaPeleta.foto} alt=${`Paleta de ${novaPeleta.sabor}`} />

    </div>
    `;

    document.querySelector('#paletaList').insertAdjacentHTML('beforeend',html);

    //zerando todos os valores do form depois de ter dado "submit"--update: agora que esta sendo feito no fecharModalcadastro, e toda vez que cadastramos algo ele ja fecha nao é necessário estar aqui
    /*document.querySelector('#sabor').value = "";
    document.querySelector('#preco').value = 0;
    document.querySelector('#descricao').value = "";
    document.querySelector('#foto').value = "";*/

    fecharModalCadastro();
}



