const Sequelize = require('sequelize')
const DataBase = require('../connection')
 const article = require('../models/articleSchema')

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
            },
            name: {
                type:Sequelize.STRING,
                allowNull:false
            },
            token: {
                type:Sequelize.JSON,
                allowNull:true

        }


        }, {
            tableName: 'users',
            timestamps: false
        });

article.belongsTo(User,{foreignKey: 'UserID'});
User.hasMany(article, {foreignKey: 'UserID'});


// User.beforeSync(() => console.log('b4 creating the article table'))
// User.afterSync(() => console.log('b4 creating the article table'))
// User.hasMany(article,{foreignKey:UserID});
module.exports = User;


// module.exports.comparePass = function (passFromUser, UserDBPass, callback){
//     bcrypt.compare(passFromUser, UserDBPass, (err, IsMatch) => {
//         if (err) throw err;
//         callback();
//     })
// }


