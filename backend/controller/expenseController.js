const Ajv = require("ajv");
const expenseSchema = require("../db/models/expenseModel");
const {expenseDB} = require("../db/localDB");
const ajv = new Ajv();
const validate = ajv.compile(expenseSchema);

exports.addExpense = async (req, res) => {
    const { title, amount, type, date ,category} = req.body;
    const expense = {
        title,
        amount,
        type,
        date,
        category
    };
    const valid = validate(req.body);
    if (!valid) {
        return res.status(400).json({ errors: validate.errors });
    }
    expenseDB.push(expense);
    console.log(expenseDB);
    res.status(200).send("Expense entry is valid! {Expense}");
}

exports.getExpense = async (req, res) => {
    res.status(200).json(expenseDB.sort((a, b) => new Date(b.date) - new Date(a.date)));
}

exports.getExpenseById = async (req, res) => {
    const { id } = req.params;
    const expense = expenseDB[id]
    res.status(200).json(expense);
}
exports.deleteExpenseById = async (req, res) => {
    const { id } = req.params;
    expense = expenseDB[id]
    if(!expense) {
        return  res.status(400).json({ errors: "Expense not found" });
    }
    expenseDB.splice(id, 1);
    res.status(200).json(expense);
}