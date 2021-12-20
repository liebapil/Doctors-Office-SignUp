const { Patient } = require('../models')

const updatePatient = async (req, res)=>{
    let veiwPatient = await Patient.updateOne(req.body)
    res.status(200).send(`you veiw ${veiwPatient}`)
};

module.exports = {
    updatePatient
}