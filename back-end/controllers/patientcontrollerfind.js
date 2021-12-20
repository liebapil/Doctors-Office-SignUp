const { Patient } = require('../models')

const findPatients = async (req, res)=>{
    let veiwPatient = await Patient.find({})
    res.status(200).send(veiwPatient)
};

const findPatient = async (req, res)=>{
    let veiwPatient = await Patient.findById(req.params.id)
    res.status(200).send(veiwPatient)
};

module.exports = {
    findPatients,
    findPatient
}