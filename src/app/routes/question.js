const express = require('express')

const QuestionCtrl = require('../controllers/questions')

const router = express.Router()

router.post('/', QuestionCtrl.createQuestion)
router.put('/:id', QuestionCtrl.updateQuestion)
router.get('/:id', QuestionCtrl.getQuestionById)
router.get('/', QuestionCtrl.getQuestions)

module.exports = router