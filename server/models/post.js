const mongoose = require("mongoose");

const Post = mongoose.model(
  "posts",
  new mongoose.Schema({
    post_picture_path: { type: String, minlength: 1, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  })
);
