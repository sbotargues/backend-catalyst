const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Words = new Schema(
  {
    keyword: { type: String, required: true },
    dictionary: {
        type: [
          {
            keyword: { type: String },
            type: { type: String },
            definition: { type: String }
          },
        ],
        required: false,
      },
    thesaurus: { type: [String] },
    twiter: {
        type: [
          {
            tweet_url: { type: String },
            tweet_id: { type: String },
            account_name: { type: String },
            tweet_text: { type: String }
          },
        ],
        required: false,
      },
    reddit: {
      type: [
        {
          url: { type: String },
          author_url: { type: String },
          author_name: { type: String },
          description: { type: String },
          img_url: { type: String }
        },
      ],
      required: false,
    },
    giphy: {
      type: [
        {
          url: { type: String },
          git_id: { type: String },
          author_name: { type: String }
        },
      ],
      required: false,
    },
    nft: { type: [String] },
    dribble: {
      type: [
        {
          author_text: { type: String },
          img_url: { type: String }
        },
      ],
      required: false,
    },
    bbc: {
      type: [
        {
          url: { type: String },
          title: { type: String },
          short_description: { type: String },
          img_url: { type: String }
        },
      ],
      required: false,
    },
    britannica: {
      type: [
        {
          url: { type: String },
          title: { type: String },
          short_description: { type: String }
        },
      ],
      required: false,
    },
    eric: {
      type: [
        {
          url: { type: String },
          title: { type: String },
          author_name: { type: String }
        },
      ],
      required: false,
    },
    online_musuem: {
      type: [
        {
          url: { type: String },
          imgUrl: { type: String },
          title: { type: String },
          source_text: { type: String }
        },
      ],
      required: false,
    },
    google_books: {
        type: [
          {
            book_url: { type: String },
            book_title: { type: String },
            author_name: { type: String },
            img_url: { type: String }
          },
        ],
        required: false,
      },
      unsplash: {
        type: [
          {
            author_url: { type: String },
            author_text: { type: String },
            img_url: { type: String }
          },
        ],
        required: false,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("words-2000", Words);
