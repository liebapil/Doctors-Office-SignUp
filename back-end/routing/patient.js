const router = require('express').Router()
const controller = require('../controllers/patientController')

router.post('/', controller.insertPatient)

module.exports= router