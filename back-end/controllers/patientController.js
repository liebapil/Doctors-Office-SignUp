const { Patient } = require('../models')


const insertPatient = async (req, res)=>{
    let allPatients = await Patient.insertMany(req.body);
    res.status(201).send(`Successfully inserted ${allPatients}`);

};

module.exports = {
    insertPatient
}