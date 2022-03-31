import Sequelize from 'sequelize';//conecta com banco de dados
import dotenv from 'dotenv'//nao subir dados sensiveis

dotenv.config()//variavel interna de ambiente pra configurar o servidor

export const connection = new Sequelize( //faz a conexão
    process.env.DB_BASE,//acessando todos os config apartir do .env
    process.env.DB_USER,//tem que ser nesta ordem
    process.env.DB_PASS,

    {
            host: process.env.DB_HOST,
            port: 5432,
            dialect:'postgres'
    }
)

// process.env.DB_HOST

// DB_HOST=localhost
// DB_PASS=@Jovic141729
// DB_USER=postgres
// DB_BASE=hqs