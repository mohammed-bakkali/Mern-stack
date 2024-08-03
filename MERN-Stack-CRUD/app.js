const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});
mongoose
  .connect("mongodb+srv://Mohammed:A9Kc0kaA34pR0APO@cluster0.umktxvb.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
