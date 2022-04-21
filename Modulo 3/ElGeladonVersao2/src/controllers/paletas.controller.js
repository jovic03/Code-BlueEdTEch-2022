const paletasService = require('../services/paletas.service');

const findPaletasController = async (req, res)=>{
    const allPaletas = await paletasService.findPaletaService();//requisicao de todas as peletas
    res.send(allPaletas);//envia a req
}

const findPaletaByIdController = (req,res)=>{
    const idParam = req.params.id;//params é funcao do req

    if(!idParam){
        return res.status(400).send({message:'Paleta não encontrada'})
    }

    const chosenPaleta = paletasService.findPaletaByIdService(idParam);//aqui retorna a paletas escolhida
    res.send(chosenPaleta);
}

//marcando coisas com TODO e depois ctrl shift f pra buscar na plicao toda
//TODO OK: createPaletaController
//TODO: deletePaletaController
//TODO OK: updatePaletaController

const createPaletaController = (req,res)=>{
    const paleta = req.body;//sera recebido pelo json abaixo
    
    if(
        !paleta ||
        !paleta.sabor ||
        !paleta.descricao ||
        !paleta.foto ||
        !paleta.preco){
            return res.status(400).send({ message: "Você não preencheu todos os dados para adicionar a paleta!" })
    }
    
    const newPaleta = paletasService.createPaletaService(paleta);
    res.send(newPaleta);
}

const updatePaletaController = (req,res)=>{
    const idParam = req.params.id;//recebe nas duas linhas
    const paletaEdit = req.body;

    if(!idParam){
        return res.status(400).send({message:'Paleta nao encontrada'});
    }

    if(
        !paletaEdit ||
        !paletaEdit.sabor ||
        !paletaEdit.descricao ||
        !paletaEdit.foto ||
        !paletaEdit.preco){
            return res.status(400).send({ message: "Você não preencheu todos os dados para editar a paleta!" })
    }

    const updatePaleta = paletasService.updatePaletaService(idParam,paletaEdit);//atualiza
    res.send(updatePaleta);//devoolve
}

const deletePaletaController= (req,res)=>{
    const idParam = req.params.id;

    if(!idParam){
        return res.status(400).send({message:'Paleta não encontrada'})
    }

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