import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = (
    <h2 className="expenses-list__fallback">No Expenses Found!</h2>
  );

  if (props.items.length === 0) {
    return expensesContent;
  }

  return (
    <ul className="expenses-list">
      {
        (expensesContent = props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))
      }
    </ul>
  );
};
export default ExpensesList;
