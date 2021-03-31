const router = require('express').Router();

const {CreatePost} = require('../controllers/article')
const {getAllArticles} = require('../controllers/article')

router.post ('/createArticle',CreatePost);

router.post('/getAllArticles',getAllArticles)


module.exports = router;