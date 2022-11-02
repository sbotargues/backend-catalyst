const Event = require('../models/event')

createEvent = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe proporcionar un evento',
        })
    }

    const event = new Event(body)

    if (!event) {
        return res.status(400).json({ success: false, error: err })
    }

    event
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: event._id,
                message: 'Evento enviado!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'No ha enviado ningun evento!',
            })
        })
}

getEventById = async (req, res) => {
    await Event.find({ user: req.params.id }, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!event) {
            return res
                .status(404)
                .json({ success: false, error: `no encontrado` })
        }
        return res.status(200).json({ success: true, data: event })
    }).catch(err => console.log(err))
}

getEvents = async (req, res) => {
    await Event.find({}, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!event.length) {
            return res
                .status(404)
                .json({ success: false, error: `no encontrado` })
        }
        return res.status(200).json({ success: true, data: event })
    }).catch(err => console.log(err))
}


module.exports = {
    createEvent,
    getEventById,
    getEvents
}