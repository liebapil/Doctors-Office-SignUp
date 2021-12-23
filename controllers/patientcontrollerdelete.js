const { Patient } = require('../models')


const deletePatient = async (req, res)=>{
    
    let deletePatient = await Patient.deleteOne({_id:req.params.id})
    res.status(200).send(`you deleted ${deletePatient}`)
};

module.exports = {
    deletePatient
}