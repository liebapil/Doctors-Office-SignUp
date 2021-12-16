const { Schema } = require('mongoose')

const PatientSchema = new Schema (
    {
        firstName:{ type: String, required: true},
        lastName: { type: String, required: true},
        dateOfBirth: {type: Number, require: true},
        gender: {type: String, require: true},
        socialSecurity: { type: String, require: true}
    },
    {timestamps: true}
)
module.exports = PatientSchema