const express = require('express');
const api = express.Router();
const propietarioController = require('../controllers/propietarioController');

api.post('/propietarioModel', propietarioController.createPropietario);
api.get('/propietarioModels', propietarioController.getPropietarios);
api.get('/propietarioModel/:rut_propietario', propietarioController.getPropietarioWithRut);

module.exports = api;