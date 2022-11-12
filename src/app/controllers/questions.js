const Question = require('../models/Question');

createQuestion = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe proporcionar una respuesta',
        })
    }

    const question = new Question(body)

    if (!question) {
        return res.status(400).json({ success: false, error: err })
    }

    question
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: question._id,
                message: 'Respuesta dada!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'No ha respondido!',
            })
        })
};

getQuestionById = async (req, res) => {
    await Question.findOne({ _id: req.params.id }, (err, question) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!question) {
            return res
                .status(404)
                .json({ success: false, error: `no encontrado` })
        }
        return res.status(200).json({ success: true, data: question })
    }).catch(err => console.log(err))
};

getQuestions = async (req, res) => {
    Question
   .find({})
   .populate("user") // key to populate
   .then(user => {
      res.json(user); 
   });
}

updateQuestion = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe proporcionar un body para actualizar',
        })
    }

    Question.findOne({ _id: req.params.id }, (err, question) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Questionario no encontrado!',
            })
        }
        question.questionLogin = body.questionLogin
        question.questionOne = body.questionOne
        question.questionTwo = body.questionTwo
        question.user = body.user
        question
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: question._id,
                    message: 'Questionario actualizado!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Questionario no actualizado!',
                })
            })
    })
}

module.exports = {
    createQuestion,
    getQuestions,
    getQuestionById,
    updateQuestion
}