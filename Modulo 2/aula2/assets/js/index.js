const btnAltHumor = document.querySelector('#botao-alteraHumor')// Captura o botão no DOM pelo id
const elementoNome = document.getElementById('nome'); /* Cria a variável elementoNome e coloca o elemento com o id nome nela */
const alteraSituacao = document.querySelector('#situacao'); /* Cria a variável alteraSituacao e coloca o elemento com o id situacao nela */
const alteraImagem = document.querySelector('#imagem') /* Cria a variável alteraImagem e coloca o elemento com o id imagem nela */
let elementoBtn = document.querySelector('#botao-alteraHumor') /* Cria a variável elementoBtn e coloca o elemento com o id alterar nela */

/* Adiciona o evento de click no elementoBtn e executa a função anonima (arrow function) */
elementoBtn.addEventListener('click', () =>{
    /* Verifica se o valour do botão é 'primeiro', se for troque de humor para o emoji feliz */
    if(elementoBtn.value == 'primeiro'){
        alteraImagem.src = './assets/img/smile2.gif' /* Troca a imagem do personagem */
        elementoNome.innerText = 'Emoji Feliz' /* Altera o texto do elemento nome */
        alteraSituacao.innerText = 'Feliz' /* Altera o texto do elemento situação */
        elementoBtn.value = 'segundo' /* Altera valor do botão */
    } else if(elementoBtn.value == 'segundo') { /* Verifica se o valour do botão é 'segundo', se for troque de humor para Emoji Pistola  */
        alteraImagem.src = './assets/img/angry2.gif'  
        elementoNome.innerText = 'Emoji Pistola' 
        alteraSituacao.innerText = 'Bravo' 
        elementoBtn.value = 'terceiro'  
    } else { /* Se os valores do botão não forem, 'primeiro' nem 'segundo' mude para o nerdola */
        alteraImagem.src = './assets/img/nerd.gif' 
        elementoNome.innerText = 'Nerdola' 
        alteraSituacao.innerText = 'A estudar' 
        elementoBtn.value = 'primeiro' 
    }
})