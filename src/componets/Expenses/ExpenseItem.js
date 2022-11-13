import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UserInerface/Card";

//ono sto zelim ovde da istaknem je linija broj 11,ovako ide proces prosledjivanja propertija
//prvo smo u App.js imali ExpenseItem componentu kojoj prosledjujemo dalje propertije i ovde ih ucitavamo kao sto vidimo u linijiama 12 i 14
//medjutim expenseDate je nova komponenta pa sam properti date mora dalje da se prosledi do te komponente zato pisemo date={props.date} da bi sada komponenta expenseDate mogla da pripmi properti date

const ExpenseItem = (props) => {



  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
