const Tiene = require('../models/tieneModel');

const createTiene = (req, res) => {
    const { id_casa, id_gc } = req.body;
    const newTiene = new Tiene({
        id_casa,
        id_gc
    });
    newTiene.save((err, tieneModel) => {
        if (err) {
            return res.status(400).send({ message: " Error al crear la relación " })
        }
        return res.status(201).send(tieneModel)
    })
}
const getTienes= (req, res) => {
    Tiene.find({}, (err, tieneModels) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener las relaciones " })
        }
        return res.status(200).send(tieneModels)
    })
}



module.exports = {
    createTiene,
    getTienes
}