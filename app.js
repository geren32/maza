const express = require('express')
const app = express()
const port = 8000
const path = require('path')
const bodyParser = require("body-parser");
const passport = require ('passport')

app.set('view engine','hbs')

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));




const auth = require('./route/personRoute')
const article = require('./route/articleRoute')
const index = require('./route/index')

app.use('/', index);
app.use ('/article',article);
app.use('/auth', auth);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

