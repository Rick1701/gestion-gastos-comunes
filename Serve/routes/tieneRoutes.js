const express = require('express');
const api = express.Router();
const tieneController = require('../controllers/tieneController');

api.post('/tieneModel', tieneController.createTiene);
api.get('/tieneModels', tieneController.getTienes);



module.exports = api;