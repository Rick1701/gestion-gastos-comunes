const Casa = require('../models/casaModel');

const createCasa = (req, res) => {
    const { numero_casa } = req.body;
    const newCasa = new Casa({
        numero_casa
    });
    newCasa.save((err, casaModel) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear la casa" })
        }
        return res.status(201).send(casaModel)
    })
}
const getCasas = (req, res) => {
    Casa.find({}, (err, casaModels) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener las casas" })
        }
        return res.status(200).send(casaModels)
    })
}

const getSpecificCasa = (req, res) => {
    const { id } = req.params;
    Casa.findById(id, req.body, (err, casaModel)=> {
        if (err) {
            return res.status(400).send({ message: "Error al obtener la casa" })
        }
        if (!casaModel) {
            return res.status(404).send({ message: "Casa no encontrada" })
        }
        return res.status(200).send(casaModel)
    })
}





module.exports = {
    createCasa,
    getCasas,
    getSpecificCasa
}