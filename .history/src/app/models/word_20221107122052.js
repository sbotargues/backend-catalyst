const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Words = new Schema(
  {
    keyword: { type: String, required: true },
    definition: { type: String, required: true },
    synonyms: { type: [String], required: false },
    tweet: { type: [String], required: false },
    reddit: {
      type: [
        {
          name: { type: String, required: true },
          link: { type: String, required: true },
          Description: { type: String, required: true },
        },
      ],
      required: false,
    },
    news: {
        type: [
          {
            link: { type: String, required: true },
            Description: { type: String, required: true },
          },
        ],
        required: false,
    },
    gif: { type: [String], required: false },
    nft: { type: [String], required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("words", Words);
