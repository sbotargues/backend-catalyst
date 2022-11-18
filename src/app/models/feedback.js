const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Feedback = new Schema(
    {
        feedback: { type: String },
        user:[{ type: Schema.Types.ObjectId, ref: 'User' }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('feedback', Feedback)
