const express = require('express')
const app = express()
const port = 8000
const path = require('path')
const bodyParser = require("body-parser");

app.set('view engine','hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

 app.get('/',function (req, res)  {
     res.render('index');
 });
 
const user = require('./route/personRoute')
const article = require('./route/articleRoute')

// const CreateArticle = require('./route/personRoute')

app.use('/user', user);
app.use ('/article',article);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




app.get("/findall", async function(req, res){

    let user = await User.findAll({raw: true})

    console.log(user)
    res.json(user)

});



