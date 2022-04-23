const baseUrl = 'http://localhost:3000/paletas';

// Pegar todas as paletas do backend
async function findAllPaletas() {
  const response = await fetch(`${baseUrl}/all-paletas`);
  const paletas = await response.json();

  paletas.forEach((paleta) => {
    document.getElementById('paletaList').insertAdjacentHTML(
      // Primeiro parâmetro que é a posição
      'beforeend',
      // Segundo parâmetro que o conteúdo a ser adicionado
      `
      <div class="PaletaListaItem" id="PaletaListaItem_${paleta.id}">
      <div>
        <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
        <div class="PaletaListaItem__preco">R$ ${paleta.preco}</div>
        <div class="PaletaListaItem__descricao">
          ${paleta.descricao}
        </div>
      </div>
      <div class="PaletaListaItem__acoes Acoes">
        <button class="Acoes__editar btn" onclick="abrirModal(${
          paleta.id
        })">Editar</button> 
        <button class="Acoes__apagar btn" onclick="abrirModalDelete(${paleta.id})">Apagar</button> 
      </div>
      <img
        class="PaletaListaItem__foto"
        src=${paleta.foto}
        alt=${`Paleta de ${paleta.sabor}`}
      />
    </div>
      `,
    );
  });
}

findAllPaletas();

// Pegar uma paleta pelo seu ID
const findByIdPaletas = async () => {
  const id = document.getElementById('idPaleta').value;

  const response = await fetch(`${baseUrl}/one-paleta/${id}`);

  const paleta = await response.json();

  const paletaEscolhidaDiv = document.getElementById('paletaEscolhida');

  paletaEscolhidaDiv.innerHTML = `
    <div class="PaletaCardItem">
    <div>
      <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
      <div class="PaletaCardItem__preco">R$ ${paleta.preco}</div>
      <div class="PaletaCardItem__descricao">${paleta.descricao}</div>
    </div>
    <img
      class="PaletaCardItem__foto"
      src=${paleta.foto}
      alt=${`Paleta de ${paleta.sabor}`}
    />
  </div>

  `;
};

async function abrirModal(id = null){
  //document.querySelector(".modal-overlay").style.display = "flex";//.style.display é para alterar o estilo dela quando chamado, caso do modal sera de none para flex
  
  if (id != null){
    document.querySelector('#title-header-modal').innerHTML ='Atualizar uma Paleta';
    document.querySelector('#button-form-modal').innerHTML = 'Atualizar';

    const response = await fetch(`${baseUrl}/one-paleta/${id}`);
    const paleta = await response.json();

    document.querySelector("#sabor").value = paleta.sabor;
    document.querySelector("#preco").value  = paleta.preco;
    document.querySelector("#descricao").value = paleta.descricao;
    document.querySelector("#foto").value = paleta.foto;
    document.querySelector("#id").value = paleta.id;
  } else {
    document.querySelector('#title-header-modal').innerHTML = 'Cadastrar uma Paleta';
    document.querySelector('#button-form-modal').innerHTML = 'Cadastrar';
  }
  document.querySelector('.modal-overlay').style.display = 'flex';
}

function limparModal() {
  const sabor = (document.querySelector('#sabor').value = '');
  const preco = (document.querySelector('#preco').value = 0);
  const descricao = (document.querySelector('#descricao').value = '');
  const foto = (document.querySelector('#foto').value = '');
}

function fecharModalCadastro(){
  document.querySelector(".modal-overlay").style.display = "none";//inverso do anterior (o mesmo porem faz desaparecr)
  limparModal();
}

async function createPaleta(){//recebndo do html os valores:
  const id = document.querySelector("#id").value;
  const sabor = document.querySelector("#sabor").value;
  const preco = document.querySelector("#preco").value;
  const descricao = document.querySelector("#descricao").value;
  const foto = document.querySelector("#foto").value;

  //cria um objeto
  const paleta = {//atribuindo os valores
    id,
    sabor,
    preco,
    descricao,
    foto,
  };

  const modoEdicaoAtivada = id>0;

  const endpoint = baseUrl + (modoEdicaoAtivada ? `/update-paleta/${id}`:'/create-paleta');
  
  const response = await fetch(endpoint,{
    method: modoEdicaoAtivada ? 'put': 'post',
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(paleta),//o body em si
  });

  const novaPaleta = await response.json();

  const html = `
    <div class="PaletaListaItem" id="PaletaListaItem_${novaPaleta.id}>
      <div>
        <div class="PaletaListaItem__sabor">${novaPaleta.sabor}</div>
        <div class="PaletaListaItem__preco">R$ ${novaPaleta.preco}</div>
        <div class="PaletaListaItem__descricao">${novaPaleta.descricao}</div>
      </div>
      <div class="PaletaListaItem__acoes Acoes">
        <button class="Acoes__editar btn" onclick="abrirModal(${
          paleta.id
        })">Editar</button> 
        <button class="Acoes__apagar btn" onclick="abrirModalDelete(${paleta.id})">Apagar</button> 
      </div>
      <img class="PaletaListaItem__foto" src=${
        novaPaleta.foto
      } alt=${`Paleta de ${novaPaleta.sabor}`} />
    </div>`;

    if (modoEdicaoAtivada) {
      document.getElementById(`PaletaListaItem_${id}`).outerHTML = html;
    } else {
      document.getElementById('paletaList').insertAdjacentHTML('beforeend', html);
    }
  
    document.getElementById('id').value = '';
  
    fecharModalCadastro();
}

function abrirModalDelete(id){
  document.querySelector('#overlay-delete').style.display = 'flex';
  const btnSim = document.querySelector('.btn_delete_yes');

  btnSim.addEventListener('click', function(){
    deletePaleta(id);
  })
}

function fecharModalDelete(){
  document.querySelector('#overlay-delete').style.display = 'none';
}

const deletePaleta = async (id)=>{

  const response = await fetch(`${baseUrl}/delete-paleta/${id}`,{
    method: 'delete',
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });

  const result = await response.json();
  alert (result.message);

  document.getElementById('paletaList').innerHTML='';
  findAllPaletas();
  fecharModalDelete();

}