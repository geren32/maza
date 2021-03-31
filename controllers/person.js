const User = require('../models/personSchema')
const article = require('../models/articleSchema')

 module.exports = {
    login: async(req,res) => {
        let user = await User.findOne({
            where: {
                login: req.body.login, password: req.body.password
            },
            // include:[{model:article}]

        })
        // console.log(user)
        if (!user) {
            res.end('user not exist')
        }
        if (user.type === 'admin') {
            res.render('../public/admin',{UserName:user.name,id:user.ID});

        } else if (user.type === 'user') {
            res.render('../public/user',{UserName:user.name,id:user.ID});
        }
    }

 }






