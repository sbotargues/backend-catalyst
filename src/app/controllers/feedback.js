const Feedback = require('../models/feedback');

createFeedback = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe proporcionar una respuesta',
        })
    }

    const feedback = new Feedback(body)

    if (!feedback) {
        return res.status(400).json({ success: false, error: err })
    }

    feedback
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: feedback._id,
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

getFeedbackById = async (req, res) => {
    await Feedback.findOne({ _id: req.params.id }, (err, feedback) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!feedback) {
            return res
                .status(404)
                .json({ success: false, error: `no encontrado` })
        }
        return res.status(200).json({ success: true, data: feedback })
    }).catch(err => console.log(err))
};

getFeedbacks = async (req, res) => {
    Feedback
   .find({})
   .populate("user") // key to populate
   .then(user => {
      res.json(user); 
   });
}

updateFeedback = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe proporcionar un body para actualizar',
        })
    }

    Feedback.findOne({ _id: req.params.id }, (err, feedback) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Feedbackario no encontrado!',
            })
        }
        feedback.feedbackLogin = body.feedbackLogin
        feedback.feedbackOne = body.feedbackOne
        feedback.feedbackTwo = body.feedbackTwo
        feedback.user = body.user
        feedback
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: feedback._id,
                    message: 'Feedbackario actualizado!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Feedbackario no actualizado!',
                })
            })
    })
}

module.exports = {
    createFeedback,
    getFeedbacks,
    getFeedbackById,
    updateFeedback
}