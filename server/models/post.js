const mongoose = require("mongoose");
const Joi = require("joi");

const Post = mongoose.model(
  "posts",
  new mongoose.Schema({
    img_path: { type: String, minlength: 1, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  })
);

module.exports.postModel = Post;
