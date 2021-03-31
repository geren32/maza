const Sequelize = require('sequelize')
// const User = require('./models/personSchema')
// const article = require('./models/articleSchema')


const sequelize = new Sequelize(process.argv[2], process.argv[3], process.argv[4], {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}

