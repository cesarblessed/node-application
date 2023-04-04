const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});


const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

//Postagem.sync({force: true});

/*
Postagem.create({
    titulo: "Um titulo",
    conteudo: "Meu conteúdo"
});
*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

//Usuario.sync({force: true})

Usuario.create({
    nome: "Cesar",
    sobrenome: "Paula",
    idade: 20,
    email: "cesardepaula80@gmail.com"
});
