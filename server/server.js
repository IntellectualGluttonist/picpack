const express = require("express");
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
const app = express();

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({
    results: [
      {
        profile_username: "testing1",
        profile_picture_path: "./vite.svg",
        content_picture_path: "./vite.svg",
        content_description: "example1",
      },
      {
        profile_username: "testing2",
        profile_picture_path: "./vite.svg",
        content_picture_path: "./vite.svg",
        content_description: "example2",
      },
    ],
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
