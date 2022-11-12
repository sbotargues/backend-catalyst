const express = require('express')

const WordCtrl = require('../controllers/words')

const router = express.Router()

router.get('/random', WordCtrl.getWordRandom)
router.get('/', WordCtrl.getWords)
router.post('/', WordCtrl.createWord)
router.get('/:id', WordCtrl.getWordById)

module.exports = router