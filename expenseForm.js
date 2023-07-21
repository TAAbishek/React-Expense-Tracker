import "./expensesForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  let title = "fun";
  const [enteredTitle, setTitle] = useState(title);
  const [enteredAmt, setAmt] = useState(0);
  const [enteredDate, setDate] = useState(0);

  function titleHandler(event) {
    setTitle(event.target.value);
    //console.log('title',enteredTitle);
    /*console.log(event.target.value);*/
  }

  function amountHandler(event) {
    setAmt(event.target.value);
    //console.log('amt',enteredAmt);
  }

  function dateHandler(event) {
    setDate(event.target.value);
    //console.log('date',enteredDate);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmt,
      date: new Date(enteredDate),
    };

    props.onExpenseData(expenseData);

    setTitle('');
    setAmt('');
    setDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmt}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-12"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
