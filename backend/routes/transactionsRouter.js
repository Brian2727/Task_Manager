const {addIncome, getIncome, getIncomeById, deleteById} = require("../controller/incomeController");
const {addExpense, getExpense, getExpenseById, deleteExpenseById} = require("../controller/expenseController");


const router = require('express').Router();


router.post('/add-income', addIncome);
router.get('/get-incomes', getIncome);
router.get('/get-income/:id', getIncomeById);
router.delete('/delete-income/:id', deleteById);

router.post('/add-expense', addExpense);
router.get('/get-expenses', getExpense);
router.get('/get-expense/:id', getExpenseById);
router.delete('/delete-expense/:id', deleteExpenseById);


module.exports = router;

