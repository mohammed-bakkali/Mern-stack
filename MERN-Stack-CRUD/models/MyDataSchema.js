const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const articleSchema = new Schema({
  userNameee: { type: String, required: true },
});

// Create a model based on that schema
const Mydata = mongoose.model("Mydataa", articleSchema);

// export the model
module.exports = Mydata;
