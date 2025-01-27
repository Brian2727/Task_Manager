const Ajv = require("ajv");
const incomeSchema = require("../db/models/incomeModel");
const {incomeDB} = require("../db/localDB");

const ajv = new Ajv();
const validate = ajv.compile(incomeSchema);

exports.addIncome = async (req, res) => {
    const { title, amount, type, date ,category} = req.body;
    const income = {
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
    incomeDB.push(income);
    console.log(incomeDB);
    res.status(200).send("Income entry is valid! {$incomeDB}");
}

exports.getIncome = async (req, res) => {
    res.status(200).json(incomeDB.sort((a, b) => new Date(b.date) - new Date(a.date)));
}

exports.getIncomeById = async (req, res) => {
    const { id } = req.params;
    const income = incomeDB[id]
    res.status(200).json(income);
}
exports.deleteById = async (req, res) => {
    const { id } = req.params;
    income = incomeDB[id]
    if(!income) {
        return  res.status(400).json({ errors: "income not found" });
    }
    incomeDB.splice(id, 1);
    res.status(200).json(income);
}