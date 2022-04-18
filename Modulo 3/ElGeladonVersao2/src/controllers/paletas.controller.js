const paletasService = require('../services/paletas.service');

const findPaletasController = (req, res)=>{
    const allPaletas = paletasService.findPaletaService();//requisicao de todas as peletas
    res.send(allPaletas);//envia a req
}

const findPaletaByIdController = (req,res)=>{
    const idParam = req.params.id;//params é funcao do req
    const chosenPaleta = paletasService.findPaletaByIdService(idParam);//aqui retorna a paletas escolhida
    res.send(chosenPaleta);
}

module.exports = {//exportando para todo o programa
    findPaletasController,
    findPaletaByIdController,
};