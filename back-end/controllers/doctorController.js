const { Doctor}  = require('../models')

const getAllDoctors = async (req, res)=>{
    let allDoctors = await Doctor.find();
    res.status(201).send(allDoctors);
};

module.exports = {
    getAllDoctors
}