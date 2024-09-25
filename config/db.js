const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/Expense_Tracker_App");
  console.log("connect database");
};

module.exports = connect;
