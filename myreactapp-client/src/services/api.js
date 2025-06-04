const API_URL = "http://localhost:5000/api/expenses";

export const fetchExpenses = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return [];
  }
};

export const addExpense = async (expense) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    });

    if (!response.ok) {
      throw new Error("Failed to add expense");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding expense:", error);
    return null;
  }
};
