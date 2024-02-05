import React from "react";
import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <span>{props.title}</span>
      <h2>{props.location}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
