const Word = require("../models/word");

createWord = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "Debe proporcionar una palabra",
        });
    }

    const word = new Word(body);

    if (!word) {
        return res.status(400).json({ success: false, error: err });
    }

    word
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: word._id,
                message: "Palabra creada!",
            });
        })
        .catch((error) => {
            return res.status(400).json({
                error,
                message: "Palabra no creada!",
            });
        });
};

getWordRandom = async (req, res) => {
    //script poco optimizado

    Word.count().exec(function (err, count) {
        var random = Math.floor(Math.random() * count);
        Word.findOne()
            .skip(random)
            .exec(function (err, result) {
                return res.status(200).json({ success: true, data: result });
      });
  });
};
    //script que devuelve el array de ids palabras random

//  await Word.find({}, (err, words) => {
//    if (err) {
//      return res.status(400).json({ success: false, error: err });
//    }
//    if (!words.length) {
//      return res
//        .status(404)
//        .json({ success: false, error: `Palabra no encontrado` });
//    }
//    const data = words.map(({ _id }) => ({ _id }));
//    var _ids = [];
//    for (var i = 0; i < data.length; i++) {
//      _ids.push(data[i]._id);
//    }
//    return res.status(200).json({ success: true, data: _ids });
//  }).catch((err) => console.log(err));
 
//         const randomWord = data[Math.floor(Math.random() * data.length)];
//     await Word.findOne({ _id: randomWord }, (err, word) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err });
//         }

//         if (!word) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `palabra no encontrada` });
//         }
//         return res.status(200).json({ success: true, data: word });
//     }).catch((err) => console.log(err));
// };

getWordById = async (req, res) => {
    await Word.findOne({ _id: req.params.id }, (err, word) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!word) {
            return res
                .status(404)
                .json({ success: false, error: `palabra no encontrada` });
        }
        return res.status(200).json({ success: true, data: word });
    }).catch((err) => console.log(err));
};

getWords = async (req, res) => {
    await Word.find({}, (err, words) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!words.length) {
            return res
                .status(404)
                .json({ success: false, error: `Palabra no encontrado` });
        }
        return res.status(200).json({ success: true, data: words });
    }).catch((err) => console.log(err));
};

module.exports = {
    getWords,
    getWordRandom,
    createWord,
    getWordById,
};
