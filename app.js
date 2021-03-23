const express = require('express')
const app = express()
const port = 8000
const Sequelize = require('sequelize');
const path = require('path')
const bodyParser = require("body-parser");
const async = require("async");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

 app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'index.html'));

 })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})


const sequelize = new Sequelize('project','root','maberi57', {
        host: 'localhost',
        dialect: 'mysql',
});
const User = sequelize.define("users", {

    ID: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type:Sequelize.STRING,
        allowNull: false
    }
},
    {
    tableName: 'users',
    timestamps: false
});

app.set("view engine", "html");



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


try {
 sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
app.post('/login', async (req,res) => {
    let user = await User.findOne({
        where: {
            login:req.body.login , password:req.body.password ,
        }

    })


    //console.log(user)

        if (user.type === 'admin') {
            console.log(user)
            res.sendFile(path.join(__dirname, 'public/admin.html'));

        } else if (user.type === 'user') {
            res.sendFile(path.join(__dirname, 'public/user.html'));
        }

})









