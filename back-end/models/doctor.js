const { Schema } = require('mongoose')

const DoctorSchema = new Schema(
    {
        name:{ type: String, required: true},
        specialty: { type: String, required: true},
        description: { type: String, required: true},
        yearsOfWorking: { type: Number, required: true},
        imgUrl: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = DoctorSchema