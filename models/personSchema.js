const Sequelize = require('sequelize')
const DataBase = require('../connection')

    const User = DataBase.define('users', {

            ID: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            login: {
                type: Sequelize.STRING,
                allowNull: false

            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false
            }
        }, {
            tableName: 'users',
            timestamps: false
        });
    module.exports = User;




