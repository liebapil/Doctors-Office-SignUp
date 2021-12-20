const { Patient } = require('../models')


const deletePatient = async (req, res)=>{

    let deletePatient = await Patient.deleteOne(req.body)
    res.status(200).send(`you deleted ${deletePatient}`)
};

module.exports = {
    deletePatient
}