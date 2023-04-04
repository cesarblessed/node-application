var http = require('http');

http.createServer((req,res) =>  {
    res.end("Hello world! Welvome to my website");
}).listen(8081);

console.log("O servidor rodando!");