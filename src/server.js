const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://guilherme:guilherme@cluster0-8xls0.azure.mongodb.net/tribos?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);
console.log('API rodando na porta 3333...')
