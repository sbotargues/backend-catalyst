const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Event = new Schema(
    {
        url: {type: String}, // esto nos permite saber de donde viene el event /random/algunaPalabra
        name: {
            type: String,         
            enum : ['LOGIN','LOGOUT', 'RANDOM-WORD'],    
        },
        data: { type: Object },
        user: { type: String }
    },
    { timestamps: true },
)

module.exports = mongoose.model('event', Event)
