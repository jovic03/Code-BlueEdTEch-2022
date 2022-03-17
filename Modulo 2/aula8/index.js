// Importando o módulo o express
import express from 'express'

//importando o path que serve para informar caminhos para o ejs
import path from 'path'

//informa a pasta raiz (neste caso aula 8)
const __dirname = path.resolve(path.dirname(''))//"resolve" indica caminho relativo-- para que o static considere o caminho relativo de toda a pasta


// Criar uma variável e instanciar (ou seja: passar todos as funções da função express para o variável app)
const app = express()

// Informa para o meu express que o motor de visualização (ou seja, o modo que vai exibir as minhas páginas) vai ser o EJS
app.set('view engine', 'ejs')

//static são pagiona unica (css, js e imagens são exemplos de paginas estaticas)
//sao complementos do meu ejs
//informa onde esrtao os arquivos estatico (todos os arqwvuis complementares do html ou ejs = ex css javascript imagem)
app.use(express.static(path.join(__dirname,'public')))//esou pedindo pra olhar paginas public 

//parsear ou seja tranforma em jason a rquisicao do usuario
app.use(express.urlencoded({extended:true}))
//faz o acima com advindo do body
app.use(express.json())

// Variável porta = indica qual porta o nosso servidor vai rodar
//3000 à 4999 para usar localhost
const port = 3001

//o listen serve para subir na rede os dados-- onde roda o servidor
app.listen(port, () => {
    console.log(`Meu servidor está rodando na porta ${port}`)
    })

//**********************************************************************/

//peço que traga algo, neste caso quando o usuario entrar traga minha pagina
// o "/" dentro do get significa a pagina inicial sem um "localjost:porta/pagina secundaria"
//req é o que usario esta enviando
//res o que eu devolvo para o usario
//tem que ser na ordem
app.get("/", (req, res) => {
    const cursos = ['Fullstack','Java','CSS','HTML','Pynton']
    res.render("index.ejs", { //aqui ele esta pedindo pra ler o arquivo index.ejs na pasta views
        nome: "Aula 8",
        cursos,
        mensagem
    })
})

app.get("/sobre", (req, res) => {//requisition, response
    res.render("sobre.ejs")
})



let mensagem = ''

app.post('/',(req,res)=>{
    /*const nome = req.body.nome
    const email= req.body.email*/

    const {nome, email} = req.body
    
    //res.send(`Obrigado, sr(a) ${nome} estamos enviado para o seu email ${email}`)
    mensagem = `Obrigado, sr(a) ${nome} estamos enviado para o seu email ${email}`

    // res.redirect('/sobre')
    res.redirect('/')

})