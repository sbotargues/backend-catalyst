const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionsPopup = new Schema(
    {
        questionOne: { type: Boolean },
        questionTwo: { type: Number }
    },
    { timestamps: true },
)

module.exports = mongoose.model('questionspopup', QuestionsPopup)
