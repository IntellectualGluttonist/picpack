const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { userModel, validate } = require("../models/user");
const bcrypt = require("bcryptjs");
const asyncMiddleware = require("../middleware/async");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let user = await userModel.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).send("Invalid Username or Password");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send("Invalid Username or Password");
    }

    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send(_.pick(user, ["_id", "username"]));
  })
);

module.exports = router;
