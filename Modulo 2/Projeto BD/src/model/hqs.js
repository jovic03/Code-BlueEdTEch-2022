import Sequelize from 'sequelize'
import { connection } from '../database/conection.js'

export const variados = connection.define(
    'variados',{
        id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true,
        },
        nome:{
            type: Sequelize.TEXT,
            allowNull:false
        },
        img:{
            type: Sequelize.TEXT,
            allowNull:false
        },
        ano:{
            type: Sequelize.TEXT,
            allowNull:false
        },
        artista:{
            type: Sequelize.TEXT,
            allowNull:false
        },
        genero:{
            type: Sequelize.TEXT,
            allowNull:false
        },
        iframe:{
            type: Sequelize.TEXT,
            allowNull:false
        }
    }, {
        freezeTableName:true,
        createdAt:false,
        updatedAt:false,
        timestamps:false
    }

)
