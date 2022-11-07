getWordById = async (req, res) => {
    await Word.findOne({ _id: req.params.id }, (err, word) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!word) {
            return res
                .status(404)
                .json({ success: false, error: `Político no encontrado` })
        }
        return res.status(200).json({ success: true, data: word })
    }).catch(err => console.log(err))
}

module.exports = {
    getWords,
    getWordById,
}