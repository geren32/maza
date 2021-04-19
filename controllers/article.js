const User = require('../models/personSchema')
const article = require('../models/articleSchema')

module.exports = {
    CreatePost: async (req, res) => {
        try {
            article.create({name: req.body.article, UserID: req.body.UserID}).then(() => {
            }).catch(err => console.log(err))

            console.log(req.body)


            let user = await User.findOne({
                where: {
                    ID: req.body.UserID
                },
                include: [{model: article}]
            })
            console.log(JSON.parse(JSON.stringify(user)))
            res.render('../public/user', {UserName: user.name, id: user.ID, articles: user.articles})
        } catch (e) {
            console.log(e);
            res.status(400).json({
                access: false,
                msg: e.message
            })
        }


    },

    getAllArticles:
        async (req, res) => {
            try {
                let Articles = article.findAll()
                res.json(Articles)
            } catch (e) {
                console.log(e);
                res.status(400).json({
                    access: false,
                    msg: e.message
                })

            }
        }
}