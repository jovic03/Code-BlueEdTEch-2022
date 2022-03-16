//imprtando o modulo express
import express from 'express'

//criar uma variavek e instanciar (ou seja: passar todas as funcoes da funcao expresse para a variavel app)
const app = express()
//informa para o meu express que o motor de visualizacao (ou seja, o modo que vai exibir as minhas paginas ) vai ser EJS
app.set('view engine','ejs')

//variavel porta = indica qual porta o nosso setvifor vai rodar
const port = 3001

/*

*/

app.listen(port, () =>{
    console.log(`Meu servidor esta rodando na porta ${port}`)
})

console.log('testandinho')