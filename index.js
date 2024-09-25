const express = require('express');
const cookies = require("cookie-parser");
const connect = require('./config/db');
const Route = require('./routes/user_route');
const ExpenseRoute = require('./routes/expense_route');


require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookies());

app.use("/user",Route);
app.use("/Expense",ExpenseRoute);

app.listen(process.env.PORT, () => {
    connect();
    console.log(`listening on port ${process.env.PORT}`);
  });
  