const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    name: String,
    company: String,
    role: String,
    email: String,
    password: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'questions'}],
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  },
  { timestamps: true },)
);

module.exports = User;
