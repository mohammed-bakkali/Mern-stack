const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const Mydata = require("./models/MyDataSchema");
app.set("view engine", "ejs");

// Process the GET request for the home page
app.get("/", (req, res) => {
  // result ==> array of object
  Mydata.find()
    .then((result) => {
      res.render("home", { mytitle: "Home page", arr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Connect to the database
mongoose
  .connect(
    "mongodb+srv://Mohammed:A9Kc0kaA34pR0APO@cluster0.umktxvb.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Process the POST request for data
app.post("/", (req, res) => {
  console.log(req.body);

  const mydata = new Mydata(req.body);

  mydata
    .save()
    .then(() => {
      res.redirect("/index.html");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error saving data to database.");
    });
});
