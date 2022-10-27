const LoginInformation = require('../models/Login');

createLoginInformation = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe proporcionar una respuesta',
        })
    }

    const loginInformation = new LoginInformation(body)

    if (!loginInformation) {
        return res.status(400).json({ success: false, error: err })
    }

    loginInformation
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: loginInformation._id,
                message: 'Respuesta dada!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'No ha respondido!',
            })
        })
}

getLoginInformationById = async (req, res) => {
    await LoginInformation.findOne({ _id: req.params.id }, (err, loginInformation) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!loginInformation) {
            return res
                .status(404)
                .json({ success: false, error: `no encontrado` })
        }
        return res.status(200).json({ success: true, data: loginInformation })
    }).catch(err => console.log(err))
}

getQuestionsLoginInformations = async (req, res) => {
    await LoginInformation.find({}, (err, questionslogin) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!questionslogin.length) {
            return res
                .status(404)
                .json({ success: false, error: `no encontrado` })
        }
        return res.status(200).json({ success: true, data: questionslogin })
    }).catch(err => console.log(err))
}


module.exports = {
    createLoginInformation,
    getQuestionsLoginInformations,
    getLoginInformationById,
}