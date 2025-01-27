let incomeDB = [
    {
        title: 'Salary',
        amount: 5000,
        type: 'income',
        date: '2021-01-01',
        category: 'Salary',
    },
    {

        title: 'Freelance',
        amount: 1000,
        type: 'income',
        date: '2021-01-02',
        category: 'Freelance',
    },
    {
        title: 'Investment',
        amount: 2000,
        type: 'income',
        date: '2021-01-03',
        category: 'Investment',
    },
    {
        title: 'Rental Income',
        amount: 3000,
        type: 'income',
        date: '2021-01-04',
        category: 'Rental Income',
    },
];


let expenseDB = [
    {
        title: 'Rent',
        amount: 1000,
        type: 'expense',
        date: '2021-01-01',
        category: 'Rent',
    },
    {
        title: 'Groceries',
        amount: 200,
        type: 'expense',
        date: '2021-01-02',
        category: 'Groceries',
    },
    {
        title: 'Utilities',
        amount: 100,
        type: 'expense',
        date: '2021-01-03',
        category: 'Utilities',
    },
    {
        title: 'Entertainment',
        amount: 50,
        type: 'expense',
        date: '2021-01-04',
        category: 'Entertainment',
    },
];

module.exports = {
    incomeDB,
    expenseDB,
};