const express = require('express');
const api = express.Router();
const casaController = require('../controllers/casaController');

api.post('/casaModel', casaController.createCasa);
api.get('/casaModels', casaController.getCasas);
api.get('/casaModel/search/:id', casaController.getSpecificCasa);

module.exports = api;