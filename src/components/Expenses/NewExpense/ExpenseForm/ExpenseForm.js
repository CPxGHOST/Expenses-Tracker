import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      id: Math.random(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    props.onSaveExpenseData(expenseData);
  };

  let expenseForm = <button onClick={props.onClick}>Add New Expense</button>;

  if (props.isFormDisplayed) {
    expenseForm = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={props.onClick}>Cancel</button>
        </div>
      </form>
    );
  }

  return expenseForm;
};
export default ExpenseForm;
