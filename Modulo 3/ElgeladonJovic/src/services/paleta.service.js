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

const findAllPaletasService = ()=>{
    return paletas;
};

const findByIdPaletasService = (idParam)=>{/*pergando parametro do controller e comparando aqui no paleta.service e retornado*/
    return paleta = paletas.find((paleta) => paleta.id === idParam);
};



module.exports={
    findAllPaletasService,
    findByIdPaletasService
}

