const User = require('../models/personSchema')
const article = require('../models/articleSchema')

module.exports = {
    CreatePost: async(req,res) => {
        // let Article = await article.findOne({
        //     where: {
        //         name: req.body.article, UserID: req.body.UserID
        //     },
        //
        // })
        article.create({name: req.body.article, UserID:req.body.UserID}).then(() => {
        }).catch(err => console.log(err))
        console.log(req.body)

       let user = await User.findOne({
           where: {
               ID:req.body.UserID
           },
           include:[{model:article}]
       })
        console.log(JSON.parse(JSON.stringify(user)))
        res.render('../public/user',{UserName:user.name, id:user.ID , articles:user.articles})


    },
    getAllArticles: async (req,res) => {
        res = req.post('http://api' , auch=auch, data=data, headers={"Accept": "application/json"})
    }
}
