import Sequelize from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()//variavel interna de ambiente pra configurar o servidor

export const connection = new Sequelize(
    process.env.DB_BASE,
    process.env.DB_USER,
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