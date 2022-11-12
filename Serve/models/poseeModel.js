const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PoseeSchema = new Schema({
    id_casa: {
        type: Schema.ObjectId,
        ref: 'casaModel'
    },
    id_propietario: {
        type: Schema.ObjectId,
        ref: 'propietarioModel'
    }
});

module.exports = mongoose.model('poseeModel', PoseeSchema);