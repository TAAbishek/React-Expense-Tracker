
import "./ExpenseDate.css";
import Card from "../UI/Card"; 

function ExpenseDate(props){
    const month=props.date.toLocaleString("en-US",{month:'long'});
    const day=props.date.toLocaleString("en-US",{day:'2-digit'});


    return(
        <div>
            <Card className="expense-date">{day}</Card>
            <Card className="expense-date__month">{month}</Card>
        </div>
       
    )


};

export default ExpenseDate