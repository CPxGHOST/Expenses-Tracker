import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  const saveExpense = (expenseData) => {
    props.onSaveExpense(expenseData);
  };

  const clickHandler = () => {
    setIsFormDisplayed((oldState) => !oldState);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpense}
        onClick={clickHandler}
        isFormDisplayed={isFormDisplayed}
      />
    </div>
  );
};
export default NewExpense;
