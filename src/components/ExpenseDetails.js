import React from "react";
import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div>
      <div className="expense-item__description">
        {props.title}
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseDetails;
