const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const { userModel, validate } = require("../models/user");
const auth = require("../middleware/auth");
const asyncMiddleware = require("../middleware/async");

router.get(
  "/me",
  auth,
  asyncMiddleware(async (req, res) => {
    const user = req.user;
    res.send(user);
  })
);

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const user = new userModel(_.pick(req.body, ["username", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send(_.pick(user, ["_id", "username"]));
  })
);

module.exports = router;
