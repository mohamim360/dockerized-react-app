import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { fetchExpenses, addExpense } from "./services/api";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchExpenses();
      setExpenses(data);
    }
    getData();
  }, []);

  const addExpenseHandler = async (expense) => {
    const savedExpense = await addExpense(expense);
    setExpenses((prevExpenses) => [savedExpense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
