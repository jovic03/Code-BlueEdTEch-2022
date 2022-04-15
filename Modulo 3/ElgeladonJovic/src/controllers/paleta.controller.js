const paletasService = require('../services/paleta.service')

const findAllPaletasController = (req,res) =>{
    const paletas = paletasService.findAllPaletasService();/*buscando as paletas no server e nao localmente*/
    res.send(paletas);
};

const findByIdPaletasController = (req,res) =>{
  //passando parametro na rota
  const idParam = Number(req.params.id); //jogando em idParam o que vem da req anterior como parametro, neste caso id
  const chosenPaleta = paletasService.findByIdPaletasService(idParam); //itera em 'paletas', olhar ID e comparar com o id de parametro da requisacao e joga linha de baixo no chosenPaleta-- os 3 "=" comparam valor e tipo, a na linha anterior convertemos para number, boas praticas
  res.send(chosenPaleta);
};

const createPaletaController = (req, res) =>{
  const paleta = req.body;//vai chegar do body essa variavel
  const newPaleta = paletasService.createPaletaService(paleta);//chegando do body ele cria e passa pra essa variavel
  res.send(newPaleta);//aqui ira retornar a paleta nova
};

const updatePaletaController = (req, res) =>{
  const idParam = Number(req.params.id);//vai recber e converter pra numero o parametro
  const paletaEdit = req.body;//recebo do body
  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);//faço update no db
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) =>{
  const idParam = req.params.id;//pego
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
