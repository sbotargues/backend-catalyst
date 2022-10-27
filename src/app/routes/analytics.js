const express = require('express')

const LoginInformationCtrl = require('../controllers/analytics')

const router = express.Router()

router.post('/login-info', LoginInformationCtrl.createLoginInformation)
router.get('/login-info/:id', LoginInformationCtrl.getLoginInformationById)
router.get('/login-info', LoginInformationCtrl.getQuestionsLogins)
// router.post('/logout/', LogoutCtrl.createQuestionsPopup)
// router.get('/logout/:id', LogoutCtrl.getQuestionPopupById)
// router.get('/logout/', LogoutCtrl.getQuestionsPopups)

module.exports = router