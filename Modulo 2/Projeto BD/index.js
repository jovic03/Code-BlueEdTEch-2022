import express from 'express'
import {routes} from './src/routes/routes.js'
import path, { join } from 'path'

const app = express()
const port = 3001
const __dirname = path.resolve(path.dirname(''))


app.use(routes)//para o app usar o routes que foi importado
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))

//transoforma o que o usr manda em json:
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(port, (req,res) => {
    console.log(`Meu servidor está rodando na porta ${port}`)
    })


    /* rever aula entre 28m 35m sobre ordem e o que cada coisa faz */
