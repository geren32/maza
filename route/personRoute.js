const router = require('express').Router();
const auth = require('../controllers/person')
const {mustAuthenticatedMw} =require('../handler/middlewar')


router.post('/login', auth.login);

router.post('/create',auth.CreateUser)

router.post('/createAdmin',auth.CreateAdmin)

router.get('/logOut',auth.logOut)

module.exports = router;

router.all('private', mustAuthenticatedMw);
router.all('private/*', mustAuthenticatedMw);
