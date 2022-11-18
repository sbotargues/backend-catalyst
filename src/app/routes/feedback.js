const express = require('express')

const FeedbackCtrl = require('../controllers/feedback')

const router = express.Router()

router.post('/', FeedbackCtrl.createFeedback)
router.put('/:id', FeedbackCtrl.updateFeedback)
router.get('/:id', FeedbackCtrl.getFeedbackById)
router.get('/', FeedbackCtrl.getFeedbacks)

module.exports = router