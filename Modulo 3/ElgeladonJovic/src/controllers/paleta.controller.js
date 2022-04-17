const paletasService = require('../services/paleta.service')

const findAllPaletasController = (req,res) =>{
    const paletas = paletasService.findAllPaletasService();/*buscando as paletas no server e nao localmente*/
    
    if(paletas.length ==0){
      return res.status(404).send({message:"Não existe nenhuma paleta cadastrada"})
    }
    
    res.send(paletas);
};

const findByIdPaletasController = (req,res) =>{
  //passando parametro na rota
  const idParam = Number(req.params.id); //jogando em idParam o que vem da req anterior como parametro, neste caso id
  
  if(!idParam){//verifica se existe esse ID
    return res.status(400).send({message:"Id inválido"})
  }
  
  const chosenPaleta = paletasService.findByIdPaletasService(idParam); //itera em 'paletas', olhar ID e comparar com o id de parametro da requisacao e joga linha de baixo no chosenPaleta-- os 3 "=" comparam valor e tipo, a na linha anterior convertemos para number, boas praticas
  
  if(!chosenPaleta){//caso nao encontre a paleta
    return res.status(404).send({message:"Paleta não encontrada"})
  }
  
  res.send(chosenPaleta);
};

const createPaletaController = (req, res) =>{
  const paleta = req.body;//vai chegar do body essa variavel
  //validando se o envio/criacao foi feito corretamente:
  if(!paleta || !paleta.sabor||!paleta.descricao||!paleta.foto ||!paleta.preco){
    return res.status(400).send({message:"Preencha todos os campos!"})
  }

  const newPaleta = paletasService.createPaletaService(paleta);//chegando do body ele cria e passa pra essa variavel
  res.status(201).send(newPaleta);//aqui ira retornar a paleta nova
};

const updatePaletaController = (req, res) =>{
  const idParam = Number(req.params.id);//vai recber e converter pra numero o parametro
  
  if(!idParam){//verifica se existe esse ID
    return res.status(400).send({message:"Id inválido"})
  }  
  const paletaEdit = req.body;//recebo do body

  if(!paletaEdit || !paletaEdit.sabor||!paletaEdit.descricao||!paletaEdit.foto ||!paletaEdit.preco){
    return res.status(400).send({message:"Preencha todos os campos!"})
  }

  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);//faço update no db
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) =>{
  const idParam = Number(req.params.id);//pego

  if(!idParam){//verifica se existe esse ID
    return res.status(400).send({message:"Id inválido"})
  }
  
  paletasService.deletePaletaService(idParam);//aqui estou deletando do db

  res.send({ message: 'Paleta deletada com sucesso!' });//notifico que foi deletado--esta retornado em formato json (o 'message')
};

module.exports = {/*exportando para toda a aplicacao*/
    findAllPaletasController,
    findByIdPaletasController,
    createPaletaController,
    updatePaletaController,
    deletePaletaController
};
