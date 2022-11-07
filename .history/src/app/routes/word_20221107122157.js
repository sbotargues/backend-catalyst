const express = require('express')

const WordCtrl = require('../controllers/word')

const router = express.Router()

router.get('/:id', WordCtrl.getWordById)
router.get('/', WordCtrl.getWords)

module.exports = router