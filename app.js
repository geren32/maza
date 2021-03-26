const express = require('express')
const app = express()
const port = 8000
const path = require('path')
const bodyParser = require("body-parser");
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs);
app.set('view engine' , 'handlebars');

// app.use(express.static('./public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

 app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '/index.html'));

 })
app.get
const user = require('./route/personRoute')
const CreateArticle = require('./route/personRoute')

 app.use('/user', user);
 //app.use('/user',CreateArticle);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
console.log(process.argv);
})




app.get("/findall", async function(req, res){

    let user = await User.findAll({raw: true})

    console.log(user)
    res.json(user)


    // User.findAll({raw: true }).then(data=>{
    //     console.log(data)
    //     res.render("index.html", {
    //         users: data
    //     });
    // }).catch(err=>console.log(err));
});


// try {
//  sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

// app.post(, async (req,res) => {
//     let user = await User.findOne({
//         where: {
//             login: req.body.login, password: req.body.password,
//         }
//     })
//     if (!user) {
//         res.end('user not exist')
//     }
//     if (user.type === 'admin') {
//         console.log(user)
//         res.sendFile(path.join(__dirname, 'public/admin.html'));
//
//     } else if (user.type === 'user') {
//         res.sendFile(path.join(__dirname, 'public/user.html'));
//     }
//
// })








