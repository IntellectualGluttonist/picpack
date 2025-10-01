const express = require("express");
const router = express.Router();
const asyncMiddleware = require("../middleware/async");
const auth = require("../middleware/auth");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
const { postModel } = require("../models/post");

router.post(
  "/",
  auth,
  upload.single("upload_image"),
  asyncMiddleware(async (req, res) => {
    let post = new postModel({
      img_path: req.file.originalname,
      user: req.user._id,
    });
    await post.save();

    return res.json(req.file);
  })
);

module.exports = router;
