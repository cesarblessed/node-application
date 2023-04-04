const express = require('express');
const app = express();

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