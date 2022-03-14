let h1 = document.querySelector('h1')//o nome da variavel poderia ser qualquer um, mas boa praticas é utilizado o mesmo nome da tag que vai ser modificado
// h1.innerHTML = 'mudei o nome'

console.log(h1)

function alterarTexto(){
    h1.id = 'meu-novo-id'
    h1.innerHTML = 'mudei o nome'

    h1.style.color='red'
}