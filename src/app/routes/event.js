const express = require('express')

const EventCtrl = require('../controllers/events')

const router = express.Router()

router.post('/', EventCtrl.createEvent)
router.get('/:id', EventCtrl.getEventById)
router.get('/', EventCtrl.getEvents)

module.exports = router