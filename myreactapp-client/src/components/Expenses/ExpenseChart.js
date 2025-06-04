import React from 'react';
import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // Ensure expense.date is a Date object
  for (const expense of props.dataOfYear) {
    const expenseDate = new Date(expense.date);  // Ensure expense.date is a Date object
    const expenseMonth = expenseDate.getMonth();  // Now it's safe to call getMonth()
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
