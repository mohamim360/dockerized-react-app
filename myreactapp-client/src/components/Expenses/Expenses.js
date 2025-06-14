import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";

import ExpenseChart from "./ExpenseChart";

//point 1
// let changeContent = <p>NO EXPENSE FOUND</p>;

// if(listYear.length > 0){
// changeContent = listYear.map((expense) => (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ))
// }

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const listYear = props.items.filter((expense) => {
    const expenseDate = new Date(expense.date); // Ensure it's a Date object
    return expenseDate.getFullYear().toString() === filteredYear; // Now it's safe to call getFullYear()
  });
  return (
    <li>
       <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart dataOfYear={listYear}/>
      {/* point 1 */}
      {/* {changeContent}  */}

      {/* {listYear.length === 0 && <p>NO EXPENSE FOUND</p>}
      {listYear.length > 0 && listYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}


      {/* {listYear.length === 0 ? (
        <p>NO EXPENSE FOUND</p>
      ) : (
        listYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      <ExpenseList items={listYear} />
    </Card>
    </li>
    
  );
};

export default Expenses;
