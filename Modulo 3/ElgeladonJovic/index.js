const express = require('express');
const cors = require('cors'); //cors serve para proteger o trafego de informacao entre front e back
const routes = require('./src/routes/paleta.route')//'instalando o paleta.routes'

const port = 3000;
const app = express(); //chamando o framework

app.use(express.json()); //configuracao para trabalhar com json
app.use(cors()); //configuracao para trabalhar com cors para que aplicaco seja visivel pelo front
app.use('/paletas',routes);//o '/paletas'  nao precisara ser colocado

/*
//definir dados para usar na aplicacao
const paletas = [
  {
    id: 1,
    sabor: 'Açai com Leite Condensado',
    descricao: 'Açai com Leite Condensado',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Banana com Nutella',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao: 'Chocolate Belga',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
  {
    id: 4,
    sabor: 'Chocolate Belga com Brigadeiro',
    descricao: 'Chocolate Belga com Brigadeiro',
    foto: 'assets/images/chocolate-belga-com-brigadeiro.png',
    preco: 8.0,
  },
  {
    id:5,
    sabor: 'Chocolate Branco',
    descricao: 'Chocolate Branco',
    foto: 'assets/images/chocolate-branco.png',
    preco: 6.0,
  },
  {
    id: 6,
    sabor: 'Coco',
    descricao: 'Coco',
    foto: 'assets/images/coco.png',
    preco: 11.0,
  },
  {
    id: 7,
    sabor: 'Uva',
    descricao: 'Uva',
    foto: 'assets/images/uva.png',
    preco: 14.0,
  },
];

FOI TRANSFERIDA PARA O PALETA.SERVICE PORTANTO NAO SERA UTILIZADA AQUI*/

/*
teste de rede:
app.get('/', function (req, res) {
  //GET pega algo do endereco
  res.send('hello world');
});
*/



/*
//pegando dados:
app.get('/paletas/find-paletas', (req, res) => {
  //http://localhost:3000/paletas/find-paletas
  res.send(paletas);
});

NAO PRECISA MAIS POS ESTA SENDO FEITO PELO CONTROLLER E NAO SERA LOCAL MAIS
*/


/*
//GET (lista) pelo id
app.get('/paletas/find-paleta/:id', (req, res) => {
  //passando parametro na rota
  const idParam = Number(req.params.id); //jogando em idParam o que vem da req anterior como parametro, neste caso id
  const chosenPaleta = paletas.find((paleta) => paleta.id === idParam); //itera em 'paletas', olhar ID e comparar com o id de parametro da requisacao e joga linha de baixo no chosenPaleta-- os 3 "=" comparam valor e tipo, a na linha anterior convertemos para number, boas praticas
  res.send(chosenPaleta);
});
NAO PRECISA MAIS POS ESTA SENDO FEITO PELO CONTROLLER
*/

app.listen(port, () => {
  //arrow function só pra dar consolelog
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
