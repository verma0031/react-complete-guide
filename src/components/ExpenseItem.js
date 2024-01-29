import React from "react";
import './ExpenseItem.css'

// const expenseDate = new Date(2021, 2, 28);
// const expenseAmount = 267.66;
// const expenseTitle = 'CarInsurance';
// const locationOfExpenditure = 'Germany';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
        <div>{props.date.toDateString()}</div>

        <div className="expense-item__description">
            <h2>{props.location}</h2>
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>
  );
}

export default ExpenseItem;
