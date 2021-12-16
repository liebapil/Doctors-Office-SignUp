const router = require('express').Router()
const controller = require('../controllers/patientController')

router.post('/', controller.insertPateint)

module.exports= router