const Posee = require('../models/poseeModel');

const createPosee = (req, res) => {
    const { id_casa, id_propietario } = req.body;
    const newPosee = new Posee({
        id_casa,
        id_propietario
    });
    newPosee.save((err, poseeModel) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el propietario" })
        }
        return res.status(201).send(poseeModel)
    })
}
const getPosees= (req, res) => {
    Posee.find({}, (err, poseeModels) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los propietarios" })
        }
        return res.status(200).send(poseeModels)
    })
}



module.exports = {
    createPosee,
    getPosees
}