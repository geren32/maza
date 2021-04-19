const router = require('express').Router();
const auth = require('../controllers/person')


router.post('/login', auth.login);

router.post('/create',auth.CreateUser)

router.post('/createAdmin',auth.CreateAdmin)

module.exports = router;
