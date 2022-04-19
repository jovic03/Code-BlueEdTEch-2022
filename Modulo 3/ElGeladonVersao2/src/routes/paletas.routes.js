const express = require('express');
const router = express.Router();//ajuda criar rotas dentro do arquivo

const paletasController = require('../controllers/paletas.controller');

//rota para listar paletas (no primeiro todos e no segundo pelo id especifico)
router.get('/find-paletas',paletasController.findPaletasController);
router.get('/find-paletas/:id',paletasController.findPaletaByIdController);

//rota para criar paleta
router.post('/create',paletasController.createPaletaController);

//rota para deletar paleta pelo id
router.delete('/delete/:id',paletasController.deletePaletaController);

//cria um dado e substitui por um novo-- usaremos o put para atualizar todo o recurso, p tach pode ser usado para atualizar parte de um registro
//router.put('/update/:id',paletasController.updatePaletaController);

module.exports = router;