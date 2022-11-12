const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TieneSchema = new Schema({
    id_casa: {
        type: Schema.ObjectId,
        ref: 'casaModel'
    },
    id_gc: {
        type: Schema.ObjectId,
        ref: 'gastoscomunesModel'
    }
});

module.exports = mongoose.model('tieneModel', TieneSchema);