// Importando o módulo o express
import express from 'express'
import res from 'express/lib/response'

import path from 'path'
const __dirname = path.resolve(path.dirname(''))//"resolve" indica caminho relativo-- para que o static considere o caminho relativo de toda a pasta


// Criar uma variável e instanciar (ou seja: passar todos as funções da função express para o variável app)
const app = express()
// Informa para o meu express que o motor de visualização (ou seja, o modo que vai exibir as minhas páginas) vai ser o EJS
app.set('view engine', 'ejs')

//static são pagiona unica (css, js e imagens são exemplos de paginas estaticas)
//sao complementos do meu ejs
app.use(express.static(path.join(__dirname,'public')))//esou pedindo pra olhar paginas public 


app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Variável porta = indica qual porta o nosso servidor vai rodar
//3000 à 4999 para usar localhost
const port = 3001

//o listen serve para subir na rede os dados
app.listen(port, () => {
    console.log(`Meu servidor está rodando na porta ${port}`)
    })


//peço que traga algo, neste caso quando o usuario entrar traga minha pagina
// o "/" dentro do get significa a pagina inicial sem um "localjost:porta/pagina secundaria"
//req é o que usario esta enviando
//res o que eu devolvo para o usario
//tem que ser na ordem
app.get("/", (req, res) => {
    const cursos = ['Fullstack','Java','CSS','HTML','Pynton']
    res.render("index.ejs", { //aqui ele esta pedindo pra ler o arquivo index.ejs na pasta views
        nome: "Aula 8",
        cursos
    })
})

app.get("/sobre", (req, res) => {//requisition, response
    res.render("sobre.ejs")
})

app.post('/',(req,res)=>{
    req.body = 

})