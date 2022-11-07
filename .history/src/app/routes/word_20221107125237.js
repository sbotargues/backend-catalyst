const express = require('express')

const WordCtrl = require('../controllers/words')

const router = express.Router()

router.get('/:id', WordCtrl.getWordById)
router.get('/', WordCtrl.getWords)
router.post('/', WordCtrl.createWord)

module.exports = router