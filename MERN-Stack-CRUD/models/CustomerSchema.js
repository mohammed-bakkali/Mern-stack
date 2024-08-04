// Database Structure File
const mongoose = require("mongoose");
// Extracts Schema object from Mongoose library
const Schema = mongoose.Schema;

// Create a new Schema object using Mongoose
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  country: { type: String, required: true },
  gender: String,
});

// Create a model based on that schema
const User = mongoose.model("customar", userSchema);

// export the model
module.exports = User;
