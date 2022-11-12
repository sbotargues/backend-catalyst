const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Questions = new Schema(
    {
        questionLogin: { type: String },
        questionOne: { type: String },
        questionTwo: { type: Number },
        user:[{ type: Schema.Types.ObjectId, ref: 'User' }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('questions', Questions)
