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
        <div class="PaletaListaItem" id="PaletaListaItem_${paleta.id}">
            <div>
              <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
              <div class="PaletaListaItem__preco">R$${paleta.preco}</div>
              <div class="PaletaListaItem__descricao">${paleta.descricao}</div>

              <div class="PaletaListaItem__acoes Acoes">
                <button class="Acoes__editar btn " onclick="abrirModal(${paleta.id})">Editar</button>
                <button class="Acoes__apagar btn">Apagar</button>
              </div>

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
  <div class="PaletaCardItem id="PaletaListaItem_${paleta.id}">
    <div>
      <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
      <div class="PaletaCardItem__preco">R$${paleta.preco}</div>
      <div class="PaletaCardItem__descricao">${paleta.descricao}</div>

      <div class="PaletaListaItem__acoes Acoes">
        <button class="Acoes__editar btn " onclick="abrirModal(${paleta.id})">Editar</button>
        <button class="Acoes__apagar btn">Apagar</button>
      </div>

    </div>
      <img class="PaletaCardItem__foto" src=${paleta.foto} alt=${`Paleta de ${paleta.sabor}`} />
  </div>
  `;
};

findAllPaletas();

//tem que ser async pois vai buscar no back-end:
async function abrirModal(id = null){//quando abrir o modal no botao "cadastrar paleta" vai vir como nulo, porem quando abro o modal pelo editar de cada paleta individual ele vem com o id referente

  if(id != null){
    document.querySelector('#title-header-modal').innerText= "Atualizar uma paleta";//altera o texto do modal

    document.querySelector('#button-form-modal').innerText= "Atualizar";//altera o texto do modal
    
    const response = await fetch(`${baseUrl}/find-paleta/${id}`);//busca no back o id
    const paleta = await response.json();//recebe caso ache o solicitado na linha superior

    //aqui eu trago para o modal os valores e os preencho (pra ficar de referencia o que vai ser atualizado)
    document.querySelector('#sabor').value = paleta.sabor;
    document.querySelector('#preco').value = paleta.preco;
    document.querySelector('#descricao').value = paleta.descricao;
    document.querySelector('#foto').value = paleta.foto;
    document.querySelector('#id').value = paleta.id;//estou passando o id, porem esta como hidden, portanto o seu valor para trazer os dados quando for o atualizar

  }else{
    document.querySelector('#title-header-modal').innerText= "Cadastrar paleta";//altera o texto do modal

    document.querySelector('#button-form-modal').innerText= "Cadastrar";//altera o texto do modal
  }

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

  const id = document.querySelector('#id').value;
  const sabor = document.querySelector('#sabor').value;
  const preco = document.querySelector('#preco').value;
  const descricao = document.querySelector('#descricao').value;
  const foto = document.querySelector('#foto').value;

  const paleta = {
    id,
    sabor,
    preco,
    descricao,
    foto
  };


  const modoEdicaoAtivado = id>0;//retorna true/false-- testando se o id do bloco anterior é maior, se for é pq estou em update senao estou em cadastrar

  const endpoint = baseUrl + (modoEdicaoAtivado ? `/update/${id}` : `/create`);//? é um if--- se edicao for true use enderco de update else use o create

  const response = await fetch(endpoint,{/*essa é a resposta*/
    method:modoEdicaoAtivado ? "put":"post",//metodo a depende do endpoint
    headers:{
      "Content-Type":"application/json",/*qual a forma de envio do conteudo (no caso via json)*/
    },
    mode:"cors",/*cors permite acessar o conteudo do back*/
    body: JSON.stringify(paleta),/*estou enviado atraves do body o conteudo do json do const paleta da linha 48 */
  });

  const novaPeleta = await response.json();

  const html =
    `
    <div class="PaletaListaItem id="PaletaListaItem_${paleta.id}">
        <div>
          <div class="PaletaListaItem__sabor">${novaPeleta.sabor}</div>
          <div class="PaletaListaItem__preco">R$${novaPeleta.preco}</div>
          <div class="PaletaListaItem__descricao">${novaPeleta.descricao}</div>
          
          <div class="PaletaListaItem__acoes Acoes">
            <button class="Acoes__editar btn " onclick="abrirModal(${paleta.id})">Editar</button>
            <button class="Acoes__apagar btn">Apagar</button>
          </div>

        </div>
        <img class="PaletaListaItem__foto" src=${novaPeleta.foto} alt=${`Paleta de ${novaPeleta.sabor}`} />

    </div>
    `;

    if(modoEdicaoAtivado){ //altera a paleta selecionada

      document.querySelector(`#PaletaListaItem_${id}`).outerHTML = html;//se for pra editar vai buscar nas funcoes o id senao faça o else

    }else{
      document.querySelector('#paletaList').insertAdjacentHTML('beforeend',html);
    }



    //zerando todos os valores do form depois de ter dado "submit"--update: agora que esta sendo feito no fecharModalcadastro, e toda vez que cadastramos algo ele ja fecha nao é necessário estar aqui
    /*document.querySelector('#sabor').value = "";
    document.querySelector('#preco').value = 0;
    document.querySelector('#descricao').value = "";
    document.querySelector('#foto').value = "";*/

    fecharModalCadastro();
}



