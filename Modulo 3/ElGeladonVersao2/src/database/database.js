const mongoose = require('mongoose');

//mongodb+srv://admin:RDVUqRRl2f5UPOLX@cluster0.rfapc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//'mongodb://root:root@localhost:27017/?authMechanism=DEFAULT
//mongodb://localhost:27017/paletas-db

const connectToDatabase = () => {// mongodb://localhost:27017/paletas-db  ---- mongodb+srv://localhost:27017/paletas-db
    mongoose.connect('mongodb://localhost:28017/paletas-db',{//os campos abaixo são segurando a estabilidade de conexao de rede
        useNewUrlParser: true,//use esse sistema de url
        useUnifiedTopology: true,//ferramente de monitoramento de dados
      })
      .then(()=> console.log('mongodb conectado'))//espera uma promise ser cumprida-- asim que tiver a conexao/resposta faça o consolelog
      .catch((error)=> {
        return console.log(`Erro ao conectar com o mongoDb, err: ${error}`)},//caso de erro na conexao mostre o erro
      );
};
module.exports = connectToDatabase;//exportando pro programa usar
