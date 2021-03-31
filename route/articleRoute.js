const router = require('express').Router();

const {CreatePost} = require('../controllers/article')
const {getAllArticles} = require('../controllers/article')

router.post ('/createArticle',CreatePost);

let articles = Articles.findAll()
res.json(articles)


module.exports = router;