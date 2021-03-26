const article = require('../models/articleSchema')
const User = require('../models/personSchema')

module.exports = {
    CreateArticle: async(req) => {
        const article = Article.create({name:article}).then(() =>{
            name:req.body.name

        })

}

}


