import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    //ako je uslov tacan cela komponenta expensesList vraca ovo sto je u h2 tagu,ako nije vraca ovaj drugi return na 9 liniji
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
