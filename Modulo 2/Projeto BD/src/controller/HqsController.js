import {variados} from '../model/hqs.js'

export const getIndex = async (req,res)=>{
    try{
        const hqs= await variados.findAll()
        res.render('index.ejs',{
            hqs
        })
    }

    catch(err){
        res.send(err.message)//mostra no navegador o erro
    }
}


export const getDetalhes = async (req, res)=>{
    try{
        const hq = await variados.findByPk(req.params.id)
        res.render('detalhes.ejs',{
            hqs
        })
    }

    catch (err){
        res.send(err.message)
    }
    res.render('detalhes.ejs')
}