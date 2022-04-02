/*import Sequelize from 'sequelize';//conecta com banco de dados
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
)*/


//não consigo gerar o DATABASE_URL no heroku pra por no .env

import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
    process.env.DATABASE_URL, 
    {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
    }
)