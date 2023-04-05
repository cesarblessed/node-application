/*
var http = require('http');

http.createServer((req,res) =>  {
    res.end("Hello world! Welvome to my website");
}).listen(8081);

console.log("O servidor rodando!");
*/

const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');


//Template engine handlebars
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Conexão com o banco de dados MySQL, Sequelize
const sequelize = new Sequelize('teste', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});


app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    req.body.titulo
    res.send("Texto: " + req.body.titulo + "Conteudo: " + req.body.conteudo);
});
/*
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get('/ola/:cargo/:nome', (req, res) => {
    res.send('Ola' + req.params.nome);
    res.send("<h2> Seu cargo e: " + req.params.cargo + "</h2>")
})
*/

app.listen(8081, () => {
    console.log('Servidor rodando!');
});