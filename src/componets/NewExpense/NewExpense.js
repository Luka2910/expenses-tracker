import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpanseDataHandler = (enteredExpanseData) => {
    const expanseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    props.onGetExpanses(expanseData);
    setIsEditing(false);
  };
  const editingHandler = () => {
    setIsEditing(true);
  };
  const cancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button className="new-expense button" onClick={editingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpanseData={saveExpanseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
  //jos jednom da ponovim 20,21 linija se tumace tako da ako je ovo pre && operatora tacno izvrsava se ovo posle && operatora
};
//KOMUNIKACIJA OD CHILDA KA RODITELJU(roditelj je newExpanse dete je Expanse form-cilj je da podatke koje unesemo u ExpanseFormi prosledimo do parenta NewExpanse)
//prvo sto radimo je dodajemo u liniji 15 onSaveExpanseData(kao sto imamo npr u inputu onChange event koji je vec ugradjen tako mi ovde gradimo nas custom event)
//onda dodajemo funkciju u 7 liniji koja ocekuje unesene podatke o troskovima iz child komponente(ExpanseForm)
//zatim pravimo objekat expanseData koji ce sadrzati sve od unesenih podatka o troskovima u child komponenti (...enteredExpanseData) i sadrzace id random generisan
//zatim tu funkciju pozivamo prilikom okidanja naseg custom dogadjaja 'onSaveExpanseData'
//dalje sta radimo je idemo u ExpanseForm dodajemo u 4 liniji props kako bi mogli pozvati nas custom dogadjaj
//i na kraju idemo u submitHandler ono sto se okida kada korsnik submituje formu i u 26 liniji pozivamo nas custom event:
//props.onSaveExpanseData(i u zagradi mu prosledjujemo objekat expanseData gde smo smestili unete troskove sa forme)
//eto tako funkcionise komunikacija od childa ka parentu jako bitno!!

export default NewExpense;
