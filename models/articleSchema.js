const Sequelize = require('sequelize')
const DataBase = require('../connection')

const article = DataBase.define('article', {

    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
     name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    UserID: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        allowNull: false,
    }
}, {
    tableName: 'article',
    timestamps: false
});
module.exports = article;