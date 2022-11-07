const Word = require('../models/word')

createWord = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe proporcionar una palabra',
        })
    }

    const word = new Word(body)

    if (!word) {
        return res.status(400).json({ success: false, error: err })
    }

    word
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: word._id,
                message: 'Palabra creada!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Palabra no creada!',
            })
        })
}

getWordById = async (req, res) => {
    await Word.find({}, (err, words) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!word) {
            return res
                .status(404)
                .json({ success: false, error: `Palabra no encontrado` })
        }
        const randomIndex = Math.floor(Math.random() * words.length);
        const item = arr[randomIndex];
        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

getWords = async (req, res) => {
    await Word.find({}, (err, words) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!words.length) {
            return res
                .status(404)
                .json({ success: false, error: `Palabra no encontrado` })
        }
        return res.status(200).json({ success: true, data: words })
    }).catch(err => console.log(err))
}

module.exports = {
    getWords,
    getWordById,
    createWord
}