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
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG images are allowed!"));
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });
const { postModel } = require("../models/post");

router.post(
  "/",
  auth,
  asyncMiddleware(async (req, res) => {
    upload.single("upload_image")(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).send(err.message);
      } else if (err) {
        return res.status(500).send("An unexpected error occured");
      }

      let post = new postModel({
        img_path: "http://localhost:8080/" + req.file.filename,
        user: req.user._id,
      });
      await post.save();

      return res.status(200).json(req.file);
    });
  })
);

module.exports = router;
