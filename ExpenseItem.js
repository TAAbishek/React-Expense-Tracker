
import React,{useState} from 'react';

import ExpenseDate from "./ExpenceDate";
import "./ExpenseItem.css";
import Card from "../UI/Card" 



function ExpenseItem(props){
    let title=props.title
    const [tittle,setTitle]=useState(title);
    
    function titleHandler(){
        setTitle('hihih')
        console.log(tittle)
    }
    return (
     <Card className="expense-item">
        <div>
            <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__description">
            <h2>{tittle}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={titleHandler}>Change Title</button>
     </Card>
    )
    
};

export default ExpenseItem;