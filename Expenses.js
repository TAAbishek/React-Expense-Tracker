import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [year, setYear] = useState("2020"); // [state,setState

  const yearChangeHandler = (enteredYear) => {
    setYear(enteredYear);
    console.log(year);
    //props.items.filter(())
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeYear={yearChangeHandler} />

        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {/*<ExpenseItem
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
  ></ExpenseItem>*/}

        {/*<ExpenseItem
          title={props.items[1].title}
          date={props.items[1].date}
          amount={props.items[1].amount}
></ExpenseItem>*/}
      </Card>
    </div>
  );
}

export default Expenses;
