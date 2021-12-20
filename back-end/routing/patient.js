const router = require('express').Router()
const controller1 = require('../controllers/patientController')
const controller2 = require('../controllers/patientcontrollerfind')
const controller3 = require('../controllers/patientcontrollerdelete')

router.post('/', controller1.insertPatient)
router.get('/', controller2.findPatient)
router.delete('/', controller3.deletePatient)

module.exports= router