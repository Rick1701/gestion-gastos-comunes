const express = require('express');
const api = express.Router();
const poseeController = require('../controllers/poseeController');

api.post('/poseeModel', poseeController.createPosee);
api.get('/poseeModels', poseeController.getPosees);



module.exports = api;