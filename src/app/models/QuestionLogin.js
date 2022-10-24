const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionLogin = new Schema(
    {
        answer: { type: String }
    },
    { timestamps: true },
)

module.exports = mongoose.model('questionlogin', QuestionLogin)
