import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

// const expenseDate = new Date(2021, 2, 28);
// const expenseAmount = 267.66;
// const expenseTitle = 'CarInsurance';
// const locationOfExpenditure = 'Germany';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <ExpenseDetails title={props.title} location={props.location} amount={props.amount}></ExpenseDetails>
      </div>
    </div>
  );
}

export default ExpenseItem;
