const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

let User = mongoose.model("User", userModel);

module.exports = User;
