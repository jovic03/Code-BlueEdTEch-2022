const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');

route.get('/find-paletas',controllerPaletas.findAllPaletasController);
route.get('/find-paleta/:id',controllerPaletas.findByIdPaletasController);

module.exports = route;/*exportando para toda a aplicacao*/

