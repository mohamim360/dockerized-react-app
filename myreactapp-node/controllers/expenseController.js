let expenses = [];

exports.addExpense = (req, res) => {
  const { title, amount, date } = req.body;
  if (!title || !amount || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newExpense = { id: expenses.length + 1, title, amount, date };
  expenses.push(newExpense);
  res.status(201).json(newExpense);
};

exports.getExpenses = (req, res) => {
  res.json(expenses);
};
