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

//    await Word.find({}, (err, words) => {
//      if (err) {
//        return res.status(400).json({ success: false, error: err });
//      }
//      if (!words.length) {
//        return res
//          .status(404)
//          .json({ success: false, error: `Palabra no encontrado` });
//      }
//      const data = words.map(({ _id }) => ({ _id }));
//      var _ids = [];
//      for (var i = 0; i < data.length; i++) {
//        _ids.push(data[i]._id);
//      }
//      return res.status(200).json({ success: true, data: _ids });
//    }).catch((err) => console.log(err));
const data = [
    "6370b7afcddaab9327af8129",
    "6370b7afcddaab9327af812a",
    "6370b7afcddaab9327af812b",
    "6370b7afcddaab9327af812c",
    "6370b7afcddaab9327af812d",
    "6370b7afcddaab9327af812e",
    "6370b7afcddaab9327af812f",
    "6370b7afcddaab9327af8130",
    "6370b7afcddaab9327af8131",
    "6370b7afcddaab9327af8132",
    "6370b7afcddaab9327af8133",
    "6370b7afcddaab9327af8134",
    "6370b7afcddaab9327af8135",
    "6370b7afcddaab9327af8136",
    "6370b7afcddaab9327af8137",
    "6370b7afcddaab9327af8138",
    "6370b7afcddaab9327af8139",
    "6370b7afcddaab9327af813a",
    "6370b7afcddaab9327af813b",
    "6370b7afcddaab9327af813c",
    "6370b7afcddaab9327af813d",
    "6370b7afcddaab9327af813e",
    "6370b7afcddaab9327af813f",
    "6370b7afcddaab9327af8140",
    "6370b7afcddaab9327af8141",
    "6370b7afcddaab9327af8142",
    "6370b7afcddaab9327af8143",
    "6370b7afcddaab9327af8144",
    "6370b7afcddaab9327af8145",
    "6370b7afcddaab9327af8146",
    "6370b7afcddaab9327af8147",
    "6370b7afcddaab9327af8148",
    "6370b7afcddaab9327af8149",
    "6370b7afcddaab9327af814a",
    "6370b7afcddaab9327af814b",
    "6370b7afcddaab9327af814c",
    "6370b7afcddaab9327af814d",
    "6370b7afcddaab9327af814e",
    "6370b7afcddaab9327af814f",
    "6370b7afcddaab9327af8150",
    "6370b7afcddaab9327af8151",
    "6370b7afcddaab9327af8152",
    "6370b7afcddaab9327af8153",
    "6370b7afcddaab9327af8154",
    "6370b7afcddaab9327af8155",
    "6370b7afcddaab9327af8156",
    "6370b7afcddaab9327af8157",
    "6370b7afcddaab9327af8158",
    "6370b7afcddaab9327af8159",
    "6370b7afcddaab9327af815a",
    "6370b7afcddaab9327af815b",
    "6370b7afcddaab9327af815c",
    "6370b7afcddaab9327af815d",
    "6370b7afcddaab9327af815e",
    "6370b7afcddaab9327af815f",
    "6370b7afcddaab9327af8160",
    "6370b7afcddaab9327af8161",
    "6370b7afcddaab9327af8162",
    "6370b7afcddaab9327af8163",
    "6370b7afcddaab9327af8164",
    "6370b7afcddaab9327af8165",
    "6370b7afcddaab9327af8166",
    "6370b7afcddaab9327af8167",
    "6370b7afcddaab9327af8168",
    "6370b7afcddaab9327af8169",
    "6370b7afcddaab9327af816a",
    "6370b7afcddaab9327af816b",
    "6370b7afcddaab9327af816c",
    "6370b7afcddaab9327af816d",
    "6370b7afcddaab9327af816e",
    "6370b7afcddaab9327af816f",
    "6370b7afcddaab9327af8170",
    "6370b7afcddaab9327af8171",
    "6370b7afcddaab9327af8172",
    "6370b7afcddaab9327af8173",
    "6370b7afcddaab9327af8174",
    "6370b7afcddaab9327af8175",
    "6370b7afcddaab9327af8176",
    "6370b7afcddaab9327af8177",
    "6370b7afcddaab9327af8178",
    "6370b7afcddaab9327af8179",
    "6370b7afcddaab9327af817a",
    "6370b7afcddaab9327af817b",
    "6370b7afcddaab9327af817c",
    "6370b7afcddaab9327af817d",
    "6370b7afcddaab9327af817e",
    "6370b7afcddaab9327af817f",
    "6370b7afcddaab9327af8180",
    "6370b7afcddaab9327af8181",
    "6370b7afcddaab9327af8182",
    "6370b7afcddaab9327af8183",
    "6370b7afcddaab9327af8184",
    "6370b7afcddaab9327af8185",
    "6370b7afcddaab9327af8186",
    "6370b7afcddaab9327af8187",
    "6370b7afcddaab9327af8188",
    "6370b7afcddaab9327af8189",
    "6370b7afcddaab9327af818a",
    "6370b7afcddaab9327af818b",
    "6370b7afcddaab9327af818c",
    "6370b7afcddaab9327af818d",
    "6370b7afcddaab9327af818e",
    "6370b7afcddaab9327af818f",
    "6370b7afcddaab9327af8190",
    "6370b7afcddaab9327af8191",
    "6370b7afcddaab9327af8192",
    "6370b7afcddaab9327af8193",
    "6370b7afcddaab9327af8194",
    "6370b7afcddaab9327af8195",
    "6370b7afcddaab9327af8196",
    "6370b7afcddaab9327af8197",
    "6370b7afcddaab9327af8198",
    "6370b7afcddaab9327af8199",
    "6370b7afcddaab9327af819a",
    "6370b7afcddaab9327af819b",
    "6370b7afcddaab9327af819c",
    "6370b7afcddaab9327af819d",
    "6370b7afcddaab9327af819e",
    "6370b7afcddaab9327af819f",
    "6370b7afcddaab9327af81a0",
    "6370b7afcddaab9327af81a1",
    "6370b7afcddaab9327af81a2",
    "6370b7afcddaab9327af81a3",
    "6370b7afcddaab9327af81a4",
    "6370b7afcddaab9327af81a5",
    "6370b7afcddaab9327af81a6",
    "6370b7afcddaab9327af81a7",
    "6370b7afcddaab9327af81a8",
    "6370b7afcddaab9327af81a9",
    "6370b7afcddaab9327af81aa",
    "6370b7afcddaab9327af81ab",
    "6370b7afcddaab9327af81ac",
    "6370b7afcddaab9327af81ad",
    "6370b7afcddaab9327af81ae",
    "6370b7afcddaab9327af81af",
    "6370b7afcddaab9327af81b0",
    "6370b7afcddaab9327af81b1",
    "6370b7afcddaab9327af81b2",
    "6370b7afcddaab9327af81b3",
    "6370b7afcddaab9327af81b4",
    "6370b7afcddaab9327af81b5",
    "6370b7afcddaab9327af81b6",
    "6370b7afcddaab9327af81b7",
    "6370b7afcddaab9327af81b8",
    "6370b7afcddaab9327af81b9",
    "6370b7afcddaab9327af81ba",
    "6370b7afcddaab9327af81bb",
    "6370b7afcddaab9327af81bc",
    "6370b7afcddaab9327af81bd",
    "6370b7afcddaab9327af81be",
    "6370b7afcddaab9327af81bf",
    "6370b7afcddaab9327af81c0",
    "6370b7afcddaab9327af81c1",
    "6370b7afcddaab9327af81c2",
    "6370b7afcddaab9327af81c3",
    "6370b7afcddaab9327af81c4",
    "6370b7afcddaab9327af81c5",
    "6370b7afcddaab9327af81c6",
    "6370b7afcddaab9327af81c7",
    "6370b7afcddaab9327af81c8",
    "6370b7afcddaab9327af81c9",
    "6370b7afcddaab9327af81ca",
    "6370b7afcddaab9327af81cb",
    "6370b7afcddaab9327af81cc",
    "6370b7afcddaab9327af81cd",
    "6370b7afcddaab9327af81ce",
    "6370b7afcddaab9327af81cf",
    "6370b7afcddaab9327af81d0",
    "6370b7afcddaab9327af81d1",
    "6370b7afcddaab9327af81d2",
    "6370b7afcddaab9327af81d3",
    "6370b7afcddaab9327af81d4",
    "6370b7afcddaab9327af81d5",
    "6370b7afcddaab9327af81d6",
    "6370b7afcddaab9327af81d7",
    "6370b7afcddaab9327af81d8",
    "6370b7afcddaab9327af81d9",
    "6370b7afcddaab9327af81da",
    "6370b7afcddaab9327af81db",
    "6370b7afcddaab9327af81dc",
    "6370b7afcddaab9327af81dd",
    "6370b7afcddaab9327af81de",
    "6370b7afcddaab9327af81df",
    "6370b7afcddaab9327af81e0",
    "6370b7afcddaab9327af81e1",
    "6370b7afcddaab9327af81e2",
    "6370b7afcddaab9327af81e3",
    "6370b7afcddaab9327af81e4",
    "6370b7afcddaab9327af81e5",
    "6370b7afcddaab9327af81e6",
    "6370b7afcddaab9327af81e7",
    "6370b7afcddaab9327af81e8",
    "6370b7afcddaab9327af81e9",
    "6370b7afcddaab9327af81ea",
    "6370b7afcddaab9327af81eb",
    "6370b7afcddaab9327af81ec",
    "6370b7afcddaab9327af81ed",
    "6370b7afcddaab9327af81ee",
    "6370b7afcddaab9327af81ef",
    "6370b7afcddaab9327af81f0",
    "6370b7afcddaab9327af81f1",
    "6370b7afcddaab9327af81f2",
    "6370b7afcddaab9327af81f3",
    "6370b7afcddaab9327af81f4",
    "6370b7afcddaab9327af81f5",
    "6370b7afcddaab9327af81f6",
    "6370b7afcddaab9327af81f7",
    "6370b7afcddaab9327af81f8",
    "6370b7afcddaab9327af81f9",
    "6370b7afcddaab9327af81fa",
    "6370b7afcddaab9327af81fb",
    "6370b7afcddaab9327af81fc",
    "6370b7afcddaab9327af81fd",
    "6370b7afcddaab9327af81fe",
    "6370b7afcddaab9327af81ff",
    "6370b7afcddaab9327af8200",
    "6370b7afcddaab9327af8201",
    "6370b7afcddaab9327af8202",
    "6370b7afcddaab9327af8203",
    "6370b7afcddaab9327af8204",
    "6370b7afcddaab9327af8205",
    "6370b7afcddaab9327af8206",
    "6370b7afcddaab9327af8207",
    "6370b7afcddaab9327af8208",
    "6370b7afcddaab9327af8209",
    "6370b7afcddaab9327af820a",
    "6370b7afcddaab9327af820b",
    "6370b7afcddaab9327af820c",
    "6370b7afcddaab9327af820d",
    "6370b7afcddaab9327af820e",
    "6370b7afcddaab9327af820f",
    "6370b7afcddaab9327af8210",
    "6370b7afcddaab9327af8211",
    "6370b7afcddaab9327af8212",
    "6370b7afcddaab9327af8213",
    "6370b7afcddaab9327af8214",
    "6370b7afcddaab9327af8215",
    "6370b7afcddaab9327af8216",
    "6370b7afcddaab9327af8217",
    "6370b7afcddaab9327af8218",
    "6370b7afcddaab9327af8219",
    "6370b7afcddaab9327af821a",
    "6370b7afcddaab9327af821b",
    "6370b7afcddaab9327af821c",
    "6370b7afcddaab9327af821d",
    "6370b7afcddaab9327af821e",
    "6370b7afcddaab9327af821f",
    "6370b7afcddaab9327af8220",
    "6370b7afcddaab9327af8221",
    "6370b7afcddaab9327af8222",
    "6370b7afcddaab9327af8223",
    "6370b7afcddaab9327af8224",
    "6370b7afcddaab9327af8225",
    "6370b7afcddaab9327af8226",
    "6370b7afcddaab9327af8227",
    "6370b7afcddaab9327af8228",
    "6370b7afcddaab9327af8229",
    "6370b7afcddaab9327af822a",
    "6370b7afcddaab9327af822b",
    "6370b7afcddaab9327af822c",
    "6370b7afcddaab9327af822d",
    "6370b7afcddaab9327af822e",
    "6370b7afcddaab9327af822f",
    "6370b7afcddaab9327af8230",
    "6370b7afcddaab9327af8231",
    "6370b7afcddaab9327af8232",
    "6370b7afcddaab9327af8233",
    "6370b7afcddaab9327af8234",
    "6370b7afcddaab9327af8235",
    "6370b7afcddaab9327af8236",
    "6370b7afcddaab9327af8237",
    "6370b7afcddaab9327af8238",
    "6370b7afcddaab9327af8239",
    "6370b7afcddaab9327af823a",
    "6370b7afcddaab9327af823b",
    "6370b7afcddaab9327af823c",
    "6370b7afcddaab9327af823d",
    "6370b7afcddaab9327af823e",
    "6370b7afcddaab9327af823f",
    "6370b7afcddaab9327af8240",
    "6370b7afcddaab9327af8241",
    "6370b7afcddaab9327af8242",
    "6370b7afcddaab9327af8243",
    "6370b7afcddaab9327af8244",
    "6370b7afcddaab9327af8245",
    "6370b7afcddaab9327af8246",
    "6370b7afcddaab9327af8247",
    "6370b7afcddaab9327af8248",
    "6370b7afcddaab9327af8249",
    "6370b7afcddaab9327af824a",
    "6370b7afcddaab9327af824b",
    "6370b7afcddaab9327af824c",
    "6370b7afcddaab9327af824d",
    "6370b7afcddaab9327af824e",
    "6370b7afcddaab9327af824f",
    "6370b7afcddaab9327af8250",
    "6370b7afcddaab9327af8251",
    "6370b7afcddaab9327af8252",
    "6370b7afcddaab9327af8253",
    "6370b7afcddaab9327af8254"
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
