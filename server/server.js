const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
const app = express();

const auth = require("./routes/auth");
const users = require("./routes/users");
const home = require("./routes/home");

const error = require("./middleware/error");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/picPack")
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.error("couldn't conect to MongoDB");
  });

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", home);
app.use("/auth", auth);
app.use("/users", users);
app.use(error);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
