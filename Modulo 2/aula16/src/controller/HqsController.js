import {variados} from '../model/hqs.js'

export const getIndex = async (req,res)=>{
    try{
        const hqs= await variados.findAll()
        res.render('index.ejs',{
            hqs
        })
    }

    catch(err){
        console.log(err.message)
    }
}