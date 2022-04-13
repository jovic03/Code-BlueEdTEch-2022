const express = require('express');
const cors = require('cors'); //cors serve para proteger o trafego de informacao entre front e back

const port = 3000;
const app = express(); //chamando o framework

app.use(express.json()); //configuracao para trabalhar com json
app.use(cors()); //configuracao para trabalhar com cors para que aplicaco seja visivel pelo front

//definir dados para usar na aplicacao
const paletas = [
  {
    id: 1,
    sabor: 'Açai com Leite Condensado',
    descricao: 'Açai com Leite Condensado',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Banana com Nutella',
    foto: 'https://soygelados.com.br/wp-content/uploads/2017/12/0020.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao: 'Chocolate Belga',
    foto: 'https://i0.wp.com/lospaleteros.com.br/wp-content/uploads/2016/04/CHOCOLATE-BELGA-XS.png?resize=280%2C440&ssl=1&is-pending-load=1',
    preco: 7.0,
  },
];

app.get('/', function (req, res) {
  //GET pega algo do endereco
  res.send('hello world');
});

//pegando dados:
app.get('/paletas/find-paletas', (req, res) => {
  //http://localhost:3000/paletas/find-paletas
  res.send(paletas);
});

//GET (lista) pelo id
app.get('/paletas/find-paleta/:id', (req, res) => {
  //passando parametro na rota
  const idParam = Number(req.params.id); //jogando em idParam o que vem da req anterior como parametro, neste caso id
  const chosenPaleta = paletas.find((paleta) => paleta.id === idParam); //itera em 'paletas', olhar ID e comparar com o id de parametro da requisacao e joga linha de baixo no chosenPaleta-- os 3 "=" comparam valor e tipo, a na linha anterior convertemos para number, boas praticas
  res.send(chosenPaleta);
});

app.listen(port, () => {
  //arrow function só pra dar consolelog
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
