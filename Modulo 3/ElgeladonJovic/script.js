const baseUrl = 'http://localhost:3000/paletas';

async function findAllPaletas() {
  /*como é fora do front e pra nao ter problema de timeout*/

  const response = await fetch(`${baseUrl}/find-paletas`); /*fetch me deixa pegar alguma coisa, nesse caso uma requisicao e armazenar no response*/

  const paletas = await response.json();//espera chegar o fetch anterior pra armazenar .json dentro de 'paletas'
  
  paletas.forEach((paleta) => {//cada objeto dentro do array vai ser usado pra fazer o abaixo dentor do callback
      document.getElementById('paletaList').insertAdjacentHTML(
        //priemiro parametro (posicao)
        "beforeend",

        //segundo parametro (conteudo adicionado)
        `
        <div class="PaletaListaItem">
        <div>
            <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
            <div class="PaletaListaItem__preco">R$ ${paleta.preco.toFixed(2)}</div>
            <div class="PaletaListaItem__descricao">${paleta.descricao}</div>
          </div>
        </div>
            <img class="PaletaListaItem__foto" 
            src=${paleta.foto} 
            alt=${`Paleta de ${paleta.sabor}`} />
        </div>

        `

      )
  });
  
}

findAllPaletas();


//Pegar uma paleta pelo ID

const findByIdPaletas = async ()=>{
    const id = document.getElementById('idPaleta').value;

    const response = await fetch(`${baseUrl}/find-paletas/${id}`);

    const paletas = await response.json();

    const paletaEscolhidaDiv = document.getElementById('paletaEscolhida');

    paletaEscolhidaDiv.innerHTML = `
    <div class="PaletaCardItem>
        <div>
            <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
            <div class="PaletaCardItem__preco">R$ ${paleta.preco.toFixed(2)}</div>
            <div class="PaletaCardItem__descricao">${paleta.descricao}</div>
        </div>
            <img class="PaletaCardItem__foto" 
            src=${paleta.foto} 
            alt=${`Paleta de ${paleta.sabor}`} />
    </div>

    `
}
