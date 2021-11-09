import Card from "../UI/Card/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpenseChart from "./ExpenseChart/ExpenseChart";
const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const onSelectYear = (yearValue) => {
    setSelectedYear(yearValue);
    console.log(`In expenses ${selectedYear}`);
  };

  let filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  console.log(filteredExpenses);

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={onSelectYear}
          selectedYear={selectedYear}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
