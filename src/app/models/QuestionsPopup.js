const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionsPopup = new Schema(
    {
        questionOne: { type: String },
        questionTwo: { type: Number },
        user:[{ type: Schema.Types.ObjectId, ref: 'User' }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('questionspopup', QuestionsPopup)
