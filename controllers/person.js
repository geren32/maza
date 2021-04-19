const User = require('../models/personSchema')
const passport = require('passport')
const tokenizer = require('../helpers/tokinazer');
const {checkHashPassword,hashPassword} = require('../helpers/Hasher');

module.exports = {
    login: async (req, res) => {
        try {
            const {login, password} = req.body;
            console.log(req.body);
            if (!login || !password) {
                throw  new Error('Some field is empty')
            }
            const isPresent = await User.findOne({
                where: {
                    login: login,
                }
            });
            if (!isPresent) throw  new Error('You are not register');

            const {id, name, password: hashPassword} = isPresent;

            const isPassOK = await checkHashPassword(password, hashPassword);
            if (!isPassOK) throw  new Error('Password is wrong');

            const token = tokenizer({id, name});
            const update = await User.update(
                {token:token},
             {where: {id:isPresent.ID}
             })

            if (isPresent.type === 'admin') {
                res.render('../public/admin',{UserName:isPresent.name,id:isPresent.ID});

            } else if (isPresent.type === 'user') {
                res.render('../public/user',{UserName:isPresent.name,id:isPresent.ID});
            }

        } catch (e) {
            console.log(e);
            res.status(400).json({
                access: false,
                msg: e.message
            })
        }

    },
    CreateUser: async (req, res) => {
        try {
            console.log(req.body);
            let {name, password, login} = req.body;
            if (!name || !password || !login) throw new Error('Some field is empty');
            const isPresent = await User.findOne({
                where: {
                    login: login,
                }

            });
            if (!isPresent) throw  new Error('You are not register');
          else if (isPresent) throw new Error('You are already registered');

            const hashedPass = await hashPassword(password);

            const insertedUser = await User.create({
                name,
                login,
                password: hashedPass,
                type: 'user',
            });

            res.render('../views/index',)
        } catch (e) {
            console.log(e);
            res.status(400).json({
                success: false,
                msg: e.message
            })
        }
    },
    CreateAdmin: async (req, res) => {
        try {
            console.log(req.body);
            let {name, password, login,type} = req.body;
            if (!name || !password || !login) throw new Error('Some field is empty');
            const isPresent = await User.findOne({
                where: {
                    login: login, type:type
                }

            });
            if (!isPresent) throw  new Error('You are not register');
           else if (isPresent.type !== 'admin') throw  new Error('You do not have permission to create an admin');
           else if (isPresent) throw new Error('You are already registered');

            const hashedPass = await hashPassword(password);

            const insertedUser = await User.create({
                name,
                login,
                password: hashedPass,
                type: 'admin',
            });

            res.render('../views/index',)
        } catch (e) {
            console.log(e);
            res.status(400).json({
                success: false,
                msg: e.message
            })
        }
    }
}


