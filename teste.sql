mysql -h localhost -u root -p

create table usuario(
    nome varchar(100),
    email varchar(100),
    idade int
);

show databases;
use database;
show tables;
describe <name tabela>;

INSERT INTO usuario(nome, email, idade) VALUES ("cesar","cesar@gmail.com",20);

DELETE FROM usuario WHERE nome = "marcos";

UPDATE usuario SET nome = "teste" WHERE nome = "lucas";