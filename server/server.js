const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
  exposedHeaders: ["x-auth-token"],
};
const app = express();

app.use(express.static("uploads"));

const auth = require("./routes/auth");
const users = require("./routes/users");
const home = require("./routes/home");
const upload = require("./routes/upload");

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
app.use("/upload", upload);
app.use(error);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
