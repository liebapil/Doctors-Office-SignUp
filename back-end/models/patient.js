const { Schema } = require('mongoose')

const PatientSchema = new Schema (
    {
        firstName:{ type: String, required: true},
        lastName: { type: String, required: true},
        dateOfBirth: {type: String, required: true},
        gender: {type: String, required: true},
        socialSecurity: { type: Number, required: true}
    },
    {timestamps: true}
)
module.exports = PatientSchema