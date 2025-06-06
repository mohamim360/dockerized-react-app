const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
  const { title, amount, date } = req.body;

  if (!title || !amount || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newExpense = new Expense({ title, amount, date });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
