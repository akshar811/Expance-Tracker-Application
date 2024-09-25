const {Router} = require("express")
const { addExpense, bulkUpload, getExpenses, updateExpense, deleteExpenses, getTotalExpensesPerMonth, getCategoryBreakdown } = require("../controllers/expens_controller")
const { Auth } = require("../middleware/Auth")
const { uploadCSV } = require("../utils/csvUpload")
const ExpenseRoute = Router()

ExpenseRoute.post("/add" , Auth ,addExpense)
ExpenseRoute.post('/bulk-upload', uploadCSV.single('file'), Auth , bulkUpload);
ExpenseRoute.get("/getdata" , Auth ,getExpenses)
ExpenseRoute.patch("/update/:id" , Auth , updateExpense)
ExpenseRoute.delete("/delete" , Auth , deleteExpenses)
ExpenseRoute.get("/total" , getTotalExpensesPerMonth)
ExpenseRoute.get("/breakdown" , getCategoryBreakdown)
module.exports = ExpenseRoute