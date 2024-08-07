// main file
const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const User = require("./models/CustomerSchema");
app.set("view engine", "ejs");
app.use(express.static("public"));

// Auto refresh
// const path = require("path");
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, "public"));

// const connectLivereload = require("connect-livereload");
// app.use(connectLivereload());

// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

// GET Requst 
app.get("/", (req, res) => {
  // result ==> array of object
  console.log("____________________________________________");

  User.find() // It is a query to search for all documents in the User group in the database.
    .then((result) => {
      res.render("index", {arr: result});
    })

    .catch((err) => {
      console.log(err);
    });
});

app.get("/user/add.html", (req, res) => {
  res.render("user/add");
});

app.get("/user/view.html", (req, res) => {
  res.render("user/view");
});

app.get("/user/edit.html", (req, res) => {
  res.render("user/edit");
});

// POST Requst
app.post("/user/add.html", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      console.log('User saved successfully');
      res.redirect("/");
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
