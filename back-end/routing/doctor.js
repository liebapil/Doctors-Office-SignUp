const router = require('express').Router()
const controller = require('../controllers/doctorController')

router.get('/', controller.getAllDoctors)

module.exports= router