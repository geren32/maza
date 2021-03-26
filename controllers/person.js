const User = require('../models/personSchema')
const path = require('path')

 module.exports = {
    login: async(req,res) => {
        let user = await User.findOne({
            where: {
                login: req.body.login, password: req.body.password,
            }
        })
        if (!user) {
            res.end('user not exist')
        }
        if (user.type === 'admin') {
            res.sendFile(path.join(__dirname, '../public/admin.html'));

        } else if (user.type === 'user') {
            res.sendFile(path.join(__dirname, '../public/user.html'));
        }
    }
 }






