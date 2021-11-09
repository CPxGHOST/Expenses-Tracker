import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

//using props

// function ExpenseItem(props) {
//   return (
//     <div className="expense-item">
//       <div>
//         {props.expense.date.getDate()}/{props.expense.date.getMonth()}/
//         {props.expense.date.getFullYear()}
//       </div>
//       <div className="expense-item__description">
//         <h2>{props.expense.title}</h2>
//         <div className="expense-item__price">${props.expense.amount}</div>
//       </div>
//     </div>
//   );
// }

// Destructuring....
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
