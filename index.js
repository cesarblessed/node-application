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
const Post = require('./models/Post');



//Template engine handlebars
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
        res.render('home', {posts: posts});
    });
});

app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect("/");
    }).catch((erro) => {
        res.send("Houve um erro: " + erro);
    });
});

app.get('/deletar/:id', (req, res) => {
    Post.destroy({where: {'id':req.params.id}}).then(() => {
        res.send("Postagem deletada com sucesso!");
    }).catch((erro) => {
        res.send("Esta postagem não existe!");
    })
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

app.listen(5020, () => {
    console.log('Servidor rodando!');
});