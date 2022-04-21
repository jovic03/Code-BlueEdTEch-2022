const mongoose = require('mongoose');//mongodb+srv://admin:RDVUqRRl2f5UPOLX@cluster0.rfapc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const connectToDatabase = () => {// mongodb://localhost:27017/paletas-db  ---- mongodb+srv://localhost:27017/paletas-db
    mongoose.connect('mongodb://localhost:27017/paletas-db',{//os campos abaixo são segurando a estabilidade de conexao de rede
        useNewUrlParser: true,//use o sistema de url
        useUnifiedTopology: true,//ferramente de monitoramento de dados
      })
      .then(()=> console.log('mongodb conectado'))//espera uma promise ser cumprida-- asim que tiver a conexao/resposta faça o consolelog
      .catch((error)=>console.log(`Erro ao conectar com o mongoDb, err: ${error}`),//caso de erro na conexao mostre o erro
      );
};

module.exports = connectToDatabase;//exportando pro programa usar

