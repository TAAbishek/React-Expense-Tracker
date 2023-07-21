import "./NewExpenses.css";
import ExpenseForm from "./expenseForm";




function NewExpense(props){
    const expenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
        ...enteredExpenseData,
        id: Math.random().toString()
        };
    
        console.log(expenseData);

        props.onAdd(expenseData);


    
    };
    return (
        <div className="new-expense">
            <ExpenseForm onExpenseData={expenseDataHandler}/>
        </div>
    );
};

export default NewExpense;