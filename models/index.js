const mongoose = require('mongoose')

const DoctorSchema = require('./doctor')
const PatientSchema = require('./patient')

const Doctor = mongoose.model('Doctor', DoctorSchema)
const Patient = mongoose.model('Patient', PatientSchema)

module.exports={
    Doctor,
    Patient
}