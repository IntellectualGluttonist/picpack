const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const asyncMiddleware = require("../middleware/async");

router.get(
  "/",
  auth,
  asyncMiddleware((req, res) => {
    res.json({
      results: [
        {
          profile_username: "testing2",
          profile_picture_path: "/vite.svg",
          content_picture_path: "/vite.svg",
          content_description: "example2",
        },
        {
          profile_username: "testing2",
          profile_picture_path: "/vite.svg",
          content_picture_path: "/vite.svg",
          content_description: "example2",
        },
        {
          profile_username: "testing2",
          profile_picture_path: "/vite.svg",
          content_picture_path: "/vite.svg",
          content_description: "example2",
        },
      ],
    });
  })
);

module.exports = router;
