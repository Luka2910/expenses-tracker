import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expense.css";
import Card from "../UserInerface/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const changeFilterExpanseHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  const fileredExpense = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilterExpanse={changeFilterExpanseHandler}
        />
        <ExpensesChart expenses={fileredExpense}/>
        <ExpensesList items={fileredExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;