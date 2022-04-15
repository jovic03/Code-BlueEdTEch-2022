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

module.exports = {/*exportando para toda a aplicacao*/
    findAllPaletasController,
    findByIdPaletasController,
};
