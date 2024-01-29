import React from "react";
import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <div>{props.title}</div>
      <div>{props.location}</div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
