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

//marcando coisas com TODO e depois ctrl shift f pra buscar na plicao toda
//TODO OK: createPaletaController
//TODO: deletePaletaController
//TODO OK: updatePaletaController

const createPaletaController = (req,res)=>{
    const paleta = req.body;//sera recebido pelo json abaixo
    const newPaleta = paletasService.createPaletaService(paleta);
    res.send(newPaleta);
}

const updatePaletaController = (req,res)=>{
    const idParam = req.params.id;//recebe nas duas linhas
    const paletaEdit = req.body;
    const updatePaleta = paletasService.updatePaletaService(idParam,paletaEdit);//atualiza
    res.send(updatePaleta);//devoolve
}

const deletePaletaController= (req,res)=>{
    const idParam = req.params.id;
    paletasService.deletePaletaService(idParam);
    res.send({message:'Paleta deletada com sucesso'})
}



module.exports = {//exportando para todo o programa
    findPaletasController,
    findPaletaByIdController,
    createPaletaController,
    updatePaletaController,
    deletePaletaController
};