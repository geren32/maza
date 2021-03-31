const router = require('express').Router();
const {login}= require('../controllers/person')

router.post('/login', login);

module.exports = router;
