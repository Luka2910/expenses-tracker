import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  //expenseDate ne moze da se samo stavi ovako u zagradu {expenseDate} jer je tipa Date nego mora da se primeni metoda da bi se prikazalo kao string
  const mounth = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{mounth}</div>
      <div className="expense-date__day ">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
