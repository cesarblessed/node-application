/*
var http = require('http');

http.createServer((req,res) =>  {
    res.end("Hello world! Welvome to my website");
}).listen(8081);

console.log("O servidor rodando!");
*/

const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');


//Template engine handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//Conexão com o banco de dados MySQL, Sequelize
const sequelize = new Sequelize('teste', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});


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

app.listen(8081, () => {
    console.log('Servidor rodando!');
});