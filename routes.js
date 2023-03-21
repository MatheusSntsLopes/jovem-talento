const express = require('express');

const route = express.Router();
const homeController = require('./src/controllers/homeController');
const usuarioController = require('./src/controllers/usuarioController');

// Rotas da Home
route.get('/', homeController.index);

// Rotas de Login
route.get('/login/index', usuarioController.index);
route.post('/login/register', usuarioController.register);
