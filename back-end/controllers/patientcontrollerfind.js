const { Patient } = require('../models')

const findPatient = async (req, res)=>{
    let veiwPatient = await Patient.find(req.body)
    res.status(200).send(`you veiw ${veiwPatient}`)
};

module.exports = {
    findPatient
}