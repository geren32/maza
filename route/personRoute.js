const router = require('express').Router();

const {login}= require('../controllers/person')
//const {CreateArticle} = require('../controllers/article')

router.post('/login', login);
//router.put('/articl',CreateArticle);

module.exports = router;
