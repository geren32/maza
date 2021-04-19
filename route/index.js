const router = require('express').Router();

router.get('/',function (req, res) {
    res.render('index');
})
router.get('/create', function(req, res){
    res.render('createUser');
})
router.get('/createAdmin', function(req, res){
    res.render('index');
})
router.get('/', function(req, res){
    res.render('index');
})




module.exports = router;



