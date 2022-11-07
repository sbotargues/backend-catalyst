const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Words = new Schema(
  {
    keyword: { type: String, required: true },
    definition: { type: String },
    synonyms: { type: [String] },
    tweet: { type: [String] },
    reddit: {
      type: [
        {
          name: { type: String },
          link: { type: String },
          Description: { type: String },
        },
      ],
      required: false,
    },
    news: {
      type: [
        {
          link: { type: String },
          Description: { type: String },
        },
      ],
      required: false,
    },
    gif: { type: [String] },
    nft: { type: [String] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("words", Words);
