import express from 'express'
import {getIndex,getDetalhes} from '../controller/HqsController.js'

export const routes = express.Router()//esta pegando somente ferramenta do express
//o export é pra exportar o rota do routes pra fora (no caso pro index.js)

routes.get("/",getIndex)

routes.get('/detalhes/:id',getDetalhes)//trazendo info