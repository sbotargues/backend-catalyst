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

    // await Word.find({}, (err, words) => {
    //     if (err) {
    //         return res.status(400).json({ success: false, error: err })
    //     }
    //     if (!words.length) {
    //         return res
    //             .status(404)
    //             .json({ success: false, error: `Palabra no encontrado` })
    //     }
    //     return res.status(200).json({ success: true, data: words[Math.floor(Math.random() * words.length)]})
    // }).catch(err => console.log(err))

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

    const data = [
        "636e8c09abb435a1b8a66890",
        "636e8c09abb435a1b8a66891",
        "636e8c09abb435a1b8a66892",
        "636e8c09abb435a1b8a66893",
        "636e8c09abb435a1b8a66894",
        "636e8c09abb435a1b8a66895",
        "636e8c09abb435a1b8a66896",
        "636e8c09abb435a1b8a66897",
        "636e8c09abb435a1b8a66898",
        "636e8c09abb435a1b8a66899",
        "636e8c09abb435a1b8a6689a",
        "636e8c09abb435a1b8a6689b",
        "636e8c09abb435a1b8a6689c",
        "636e8c09abb435a1b8a6689d",
        "636e8c09abb435a1b8a6689e",
        "636e8c09abb435a1b8a6689f",
        "636e8c09abb435a1b8a668a0",
        "636e8c09abb435a1b8a668a1",
        "636e8c09abb435a1b8a668a2",
        "636e8c09abb435a1b8a668a3",
        "636e8c09abb435a1b8a668a4",
        "636e8c09abb435a1b8a668a5",
        "636e8c09abb435a1b8a668a6",
        "636e8c09abb435a1b8a668a7",
        "636e8c09abb435a1b8a668a8",
        "636e8c09abb435a1b8a668a9",
        "636e8c09abb435a1b8a668aa",
        "636e8c09abb435a1b8a668ab",
        "636e8c09abb435a1b8a668ac",
        "636e8c09abb435a1b8a668ad",
        "636e8c09abb435a1b8a668ae",
        "636e8c09abb435a1b8a668af",
        "636e8c09abb435a1b8a668b0",
        "636e8c09abb435a1b8a668b1",
        "636e8c09abb435a1b8a668b2",
        "636e8c09abb435a1b8a668b3",
        "636e8c09abb435a1b8a668b4",
        "636e8c09abb435a1b8a668b5",
        "636e8c09abb435a1b8a668b6",
        "636e8c09abb435a1b8a668b7",
        "636e8c09abb435a1b8a668b8",
        "636e8c09abb435a1b8a668b9",
        "636e8c09abb435a1b8a668ba",
        "636e8c09abb435a1b8a668bb",
        "636e8c09abb435a1b8a668bc",
        "636e8c09abb435a1b8a668bd",
        "636e8c09abb435a1b8a668be",
        "636e8c09abb435a1b8a668bf",
        "636e8c09abb435a1b8a668c0",
        "636e8c09abb435a1b8a668c1",
        "636e8c09abb435a1b8a668c2",
        "636e8c09abb435a1b8a668c3",
        "636e8c09abb435a1b8a668c4",
        "636e8c09abb435a1b8a668c5",
        "636e8c09abb435a1b8a668c6",
        "636e8c09abb435a1b8a668c7",
        "636e8c09abb435a1b8a668c8",
        "636e8c09abb435a1b8a668c9",
        "636e8c09abb435a1b8a668ca",
        "636e8c09abb435a1b8a668cb",
        "636e8c09abb435a1b8a668cc",
        "636e8c09abb435a1b8a668cd",
        "636e8c09abb435a1b8a668ce",
        "636e8c09abb435a1b8a668cf",
        "636e8c09abb435a1b8a668d0",
        "636e8c09abb435a1b8a668d1",
        "636e8c09abb435a1b8a668d2",
        "636e8c09abb435a1b8a668d3",
        "636e8c09abb435a1b8a668d4",
        "636e8c09abb435a1b8a668d5",
        "636e8c09abb435a1b8a668d6",
        "636e8c09abb435a1b8a668d7",
        "636e8c09abb435a1b8a668d8",
        "636e8c09abb435a1b8a668d9",
        "636e8c09abb435a1b8a668da",
        "636e8c09abb435a1b8a668db",
        "636e8c09abb435a1b8a668dc",
        "636e8c09abb435a1b8a668dd",
        "636e8c09abb435a1b8a668de",
        "636e8c09abb435a1b8a668df",
        "636e8c09abb435a1b8a668e0",
        "636e8c09abb435a1b8a668e1",
        "636e8c09abb435a1b8a668e2",
        "636e8c09abb435a1b8a668e3",
        "636e8c09abb435a1b8a668e4",
        "636e8c09abb435a1b8a668e5",
        "636e8c09abb435a1b8a668e6",
        "636e8c09abb435a1b8a668e7",
        "636e8c09abb435a1b8a668e8",
        "636e8c09abb435a1b8a668e9",
        "636e8c09abb435a1b8a668ea",
        "636e8c09abb435a1b8a668eb",
        "636e8c09abb435a1b8a668ec",
        "636e8c09abb435a1b8a668ed",
        "636e8c09abb435a1b8a668ee",
        "636e8c09abb435a1b8a668ef",
        "636e8c09abb435a1b8a668f0",
        "636e8c09abb435a1b8a668f1",
        "636e8c09abb435a1b8a668f2",
        "636e8c09abb435a1b8a668f3",
        "636e8c09abb435a1b8a668f4",
        "636e8c09abb435a1b8a668f5",
        "636e8c09abb435a1b8a668f6",
        "636e8c09abb435a1b8a668f7",
        "636e8c09abb435a1b8a668f8",
        "636e8c09abb435a1b8a668f9",
        "636e8c09abb435a1b8a668fa",
        "636e8c09abb435a1b8a668fb",
        "636e8c09abb435a1b8a668fc",
        "636e8c09abb435a1b8a668fd",
        "636e8c09abb435a1b8a668fe",
        "636e8c09abb435a1b8a668ff",
        "636e8c09abb435a1b8a66900",
        "636e8c09abb435a1b8a66901",
        "636e8c09abb435a1b8a66902",
        "636e8c09abb435a1b8a66903",
        "636e8c09abb435a1b8a66904",
        "636e8c09abb435a1b8a66905",
        "636e8c09abb435a1b8a66906",
        "636e8c09abb435a1b8a66907",
        "636e8c09abb435a1b8a66908",
        "636e8c09abb435a1b8a66909",
        "636e8c09abb435a1b8a6690a",
        "636e8c09abb435a1b8a6690b",
        "636e8c09abb435a1b8a6690c",
        "636e8c09abb435a1b8a6690d",
        "636e8c09abb435a1b8a6690e",
        "636e8c09abb435a1b8a6690f",
        "636e8c09abb435a1b8a66910",
        "636e8c09abb435a1b8a66911",
        "636e8c09abb435a1b8a66912",
        "636e8c09abb435a1b8a66913",
        "636e8c09abb435a1b8a66914",
        "636e8c09abb435a1b8a66915",
        "636e8c09abb435a1b8a66916",
        "636e8c09abb435a1b8a66917",
        "636e8c09abb435a1b8a66918",
        "636e8c09abb435a1b8a66919",
        "636e8c09abb435a1b8a6691a",
        "636e8c09abb435a1b8a6691b",
        "636e8c09abb435a1b8a6691c",
        "636e8c09abb435a1b8a6691d",
        "636e8c09abb435a1b8a6691e",
        "636e8c09abb435a1b8a6691f",
        "636e8c09abb435a1b8a66920",
        "636e8c09abb435a1b8a66921",
        "636e8c09abb435a1b8a66922",
        "636e8c09abb435a1b8a66923",
        "636e8c09abb435a1b8a66924",
        "636e8c09abb435a1b8a66925",
        "636e8c09abb435a1b8a66926",
        "636e8c09abb435a1b8a66927",
        "636e8c09abb435a1b8a66928",
        "636e8c09abb435a1b8a66929",
        "636e8c09abb435a1b8a6692a",
        "636e8c09abb435a1b8a6692b",
        "636e8c09abb435a1b8a6692c",
        "636e8c09abb435a1b8a6692d",
        "636e8c09abb435a1b8a6692e",
        "636e8c09abb435a1b8a6692f",
        "636e8c09abb435a1b8a66930",
        "636e8c09abb435a1b8a66931",
        "636e8c09abb435a1b8a66932",
        "636e8c09abb435a1b8a66933",
        "636e8c09abb435a1b8a66934",
        "636e8c09abb435a1b8a66935",
        "636e8c09abb435a1b8a66936",
        "636e8c09abb435a1b8a66937",
        "636e8c09abb435a1b8a66938",
        "636e8c09abb435a1b8a66939",
        "636e8c09abb435a1b8a6693a",
        "636e8c09abb435a1b8a6693b",
        "636e8c09abb435a1b8a6693c",
        "636e8c09abb435a1b8a6693d",
        "636e8c09abb435a1b8a6693e",
        "636e8c09abb435a1b8a6693f",
        "636e8c09abb435a1b8a66940",
        "636e8c09abb435a1b8a66941",
        "636e8c09abb435a1b8a66942",
        "636e8c09abb435a1b8a66943",
        "636e8c09abb435a1b8a66944",
        "636e8c09abb435a1b8a66945",
        "636e8c09abb435a1b8a66946",
        "636e8c09abb435a1b8a66947",
        "636e8c09abb435a1b8a66948",
        "636e8c09abb435a1b8a66949",
        "636e8c09abb435a1b8a6694a",
        "636e8c09abb435a1b8a6694b",
        "636e8c09abb435a1b8a6694c",
        "636e8c09abb435a1b8a6694d",
        "636e8c09abb435a1b8a6694e",
        "636e8c09abb435a1b8a6694f",
        "636e8c09abb435a1b8a66950",
        "636e8c09abb435a1b8a66951",
        "636e8c09abb435a1b8a66952",
        "636e8c09abb435a1b8a66953",
        "636e8c09abb435a1b8a66954",
        "636e8c09abb435a1b8a66955",
        "636e8c09abb435a1b8a66956",
        "636e8c09abb435a1b8a66957",
        "636e8c09abb435a1b8a66958",
        "636e8c09abb435a1b8a66959",
        "636e8c09abb435a1b8a6695a",
        "636e8c09abb435a1b8a6695b",
        "636e8c09abb435a1b8a6695c",
        "636e8c09abb435a1b8a6695d",
        "636e8c09abb435a1b8a6695e",
        "636e8c09abb435a1b8a6695f",
        "636e8c09abb435a1b8a66960",
        "636e8c09abb435a1b8a66961",
        "636e8c09abb435a1b8a66962",
        "636e8c09abb435a1b8a66963",
        "636e8c09abb435a1b8a66964",
        "636e8c09abb435a1b8a66965",
        "636e8c09abb435a1b8a66966",
        "636e8c09abb435a1b8a66967",
        "636e8c09abb435a1b8a66968",
        "636e8c09abb435a1b8a66969",
        "636e8c09abb435a1b8a6696a",
        "636e8c09abb435a1b8a6696b",
        "636e8c09abb435a1b8a6696c",
        "636e8c09abb435a1b8a6696d",
        "636e8c09abb435a1b8a6696e",
        "636e8c09abb435a1b8a6696f",
        "636e8c09abb435a1b8a66970",
        "636e8c09abb435a1b8a66971",
        "636e8c09abb435a1b8a66972",
        "636e8c09abb435a1b8a66973",
        "636e8c09abb435a1b8a66974",
        "636e8c09abb435a1b8a66975",
        "636e8c09abb435a1b8a66976",
        "636e8c09abb435a1b8a66977",
        "636e8c09abb435a1b8a66978",
        "636e8c09abb435a1b8a66979",
        "636e8c09abb435a1b8a6697a",
        "636e8c09abb435a1b8a6697b",
        "636e8c09abb435a1b8a6697c",
        "636e8c09abb435a1b8a6697d",
        "636e8c09abb435a1b8a6697e",
        "636e8c09abb435a1b8a6697f",
        "636e8c09abb435a1b8a66980",
        "636e8c09abb435a1b8a66981",
        "636e8c09abb435a1b8a66982",
        "636e8c09abb435a1b8a66983",
        "636e8c09abb435a1b8a66984",
        "636e8c09abb435a1b8a66985",
        "636e8c09abb435a1b8a66986",
        "636e8c09abb435a1b8a66987",
        "636e8c09abb435a1b8a66988",
        "636e8c09abb435a1b8a66989",
        "636e8c09abb435a1b8a6698a",
        "636e8c09abb435a1b8a6698b",
        "636e8c09abb435a1b8a6698c",
        "636e8c09abb435a1b8a6698d",
        "636e8c09abb435a1b8a6698e",
        "636e8c09abb435a1b8a6698f",
        "636e8c09abb435a1b8a66990",
        "636e8c09abb435a1b8a66991",
        "636e8c09abb435a1b8a66992",
        "636e8c09abb435a1b8a66993",
        "636e8c09abb435a1b8a66994",
        "636e8c09abb435a1b8a66995",
        "636e8c09abb435a1b8a66996",
        "636e8c09abb435a1b8a66997",
        "636e8c09abb435a1b8a66998",
        "636e8c09abb435a1b8a66999",
        "636e8c09abb435a1b8a6699a",
        "636e8c09abb435a1b8a6699b",
        "636e8c09abb435a1b8a6699c",
        "636e8c09abb435a1b8a6699d",
        "636e8c09abb435a1b8a6699e",
        "636e8c09abb435a1b8a6699f",
        "636e8c09abb435a1b8a669a0",
        "636e8c09abb435a1b8a669a1",
        "636e8c09abb435a1b8a669a2",
        "636e8c09abb435a1b8a669a3",
        "636e8c09abb435a1b8a669a4",
        "636e8c09abb435a1b8a669a5",
        "636e8c09abb435a1b8a669a6",
        "636e8c09abb435a1b8a669a7",
        "636e8c09abb435a1b8a669a8",
        "636e8c09abb435a1b8a669a9",
        "636e8c09abb435a1b8a669aa",
        "636e8c09abb435a1b8a669ab",
        "636e8c09abb435a1b8a669ac",
        "636e8c09abb435a1b8a669ad",
        "636e8c09abb435a1b8a669ae",
        "636e8c09abb435a1b8a669af",
        "636e8c09abb435a1b8a669b0",
        "636e8c09abb435a1b8a669b1",
        "636e8c09abb435a1b8a669b2",
        "636e8c09abb435a1b8a669b3",
        "636e8c09abb435a1b8a669b4",
        "636e8c09abb435a1b8a669b5",
        "636e8c09abb435a1b8a669b6",
        "636e8c09abb435a1b8a669b7",
        "636e8c09abb435a1b8a669b8",
        "636e8c09abb435a1b8a669b9",
        "636e8c09abb435a1b8a669ba",
        "636e8c09abb435a1b8a669bb",
        "636e8cb418cb88067b0f16d1",
        "636e8cb918cb88067b0f16d3",
        "636e8e9b18cb88067b0f16e5",
    ];
        const randomWord = data[Math.floor(Math.random() * data.length)];
    await Word.findOne({ _id: randomWord }, (err, word) => {
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
